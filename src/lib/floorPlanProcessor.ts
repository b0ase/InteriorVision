import { UploadResponse } from '@/types';
import * as tf from '@tensorflow/tfjs';
import { ImageSegmenter, FilesetResolver } from '@mediapipe/tasks-vision';

export interface Room {
  name: string;
  dimensions: {
    width: number;
    length: number;
    height: number;
  };
  position: {
    x: number;
    y: number;
    z: number;
  };
  windows?: {
    wall: 'front' | 'back' | 'left' | 'right';
    position: number; // Position along the wall (0-1)
    width: number;
    height: number;
  }[];
  doors?: {
    wall: 'front' | 'back' | 'left' | 'right';
    position: number; // Position along the wall (0-1)
    width: number;
    height: number;
  }[];
  furniture?: {
    type: string;
    position: { x: number; y: number; z: number };
    rotation: { x: number; y: number; z: number };
    dimensions: { width: number; length: number; height: number };
  }[];
}

export interface FloorPlanData {
  rooms: Room[];
  totalArea: number;
  scale: number; // pixels per meter
}

async function initializeSegmenter() {
  const vision = await FilesetResolver.forVisionTasks(
    "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
  );
  return await ImageSegmenter.createFromOptions(vision, {
    baseOptions: {
      modelAssetPath: "https://storage.googleapis.com/mediapipe-models/image_segmenter/deeplab_v3/float32/1/deeplab_v3.tflite",
      delegate: "GPU"
    },
    outputConfidenceMasks: true
  });
}

async function detectRooms(imageData: ImageData): Promise<Room[]> {
  // Convert ImageData to tensor
  const tensor = tf.browser.fromPixels(imageData);
  
  // Normalize and preprocess
  const normalized = tf.div(tensor, 255);
  const batched = normalized.expandDims(0);
  
  // Run segmentation
  const segmenter = await initializeSegmenter();
  const segmentation = await segmenter.segment(imageData);
  
  // Process segmentation masks to identify rooms
  const rooms: Room[] = [];
  
  if (segmentation.confidenceMasks) {
    for (let i = 0; i < segmentation.confidenceMasks.length; i++) {
      const mask = segmentation.confidenceMasks[i];
      // Convert MPMask to tensor
      const maskTensor = tf.tensor3d(
        new Float32Array(mask.getAsFloat32Array()),
        [mask.height, mask.width, 1]
      );
      
      const roomBoundaries = await findRoomBoundaries(maskTensor);
      
      if (roomBoundaries) {
        rooms.push({
          name: `Room ${i + 1}`,
          dimensions: {
            width: roomBoundaries.width,
            length: roomBoundaries.length,
            height: 2.5 // Default ceiling height
          },
          position: {
            x: roomBoundaries.x,
            y: 0,
            z: roomBoundaries.z
          }
        });
      }
      
      // Clean up
      maskTensor.dispose();
    }
  }
  
  // Clean up
  tensor.dispose();
  normalized.dispose();
  batched.dispose();
  segmenter.close();
  
  return rooms;
}

async function findRoomBoundaries(mask: tf.Tensor3D) {
  const [height, width] = mask.shape;
  const data = await mask.data();
  
  let minX = width;
  let maxX = 0;
  let minZ = height;
  let maxZ = 0;
  
  // Find boundaries
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = y * width + x;
      if (data[idx] > 0.5) { // Threshold for room detection
        minX = Math.min(minX, x);
        maxX = Math.max(maxX, x);
        minZ = Math.min(minZ, y);
        maxZ = Math.max(maxZ, y);
      }
    }
  }
  
  if (minX === width || maxX === 0 || minZ === height || maxZ === 0) {
    return null; // No room detected
  }
  
  return {
    x: (minX + maxX) / 2,
    z: (minZ + maxZ) / 2,
    width: maxX - minX,
    length: maxZ - minZ
  };
}

// Define interfaces for openings
interface Opening {
  wall: 'front' | 'back' | 'left' | 'right';
  width: number;
  height: number;
  position: number; // Position along the wall (0-1)
}

// Initialize arrays to store detected openings
const windows: Opening[] = [];
const doors: Opening[] = [];

async function detectOpenings(imageData: ImageData, room: Room): Promise<Room> {
  // Convert to grayscale and detect edges using Sobel operator
  const tensor = tf.browser.fromPixels(imageData, 1);
  
  // Manual Sobel edge detection
  const sobelX = tf.tensor2d([[-1, 0, 1], [-2, 0, 2], [-1, 0, 1]]);
  const sobelY = tf.tensor2d([[-1, -2, -1], [0, 0, 0], [1, 2, 1]]);
  
  // Prepare input tensor with correct shape
  const input = tensor.expandDims(0).expandDims(-1) as tf.Tensor4D;
  
  // Prepare kernel tensors with correct shape
  const kernelX = sobelX.expandDims(2).expandDims(3) as tf.Tensor4D;
  const kernelY = sobelY.expandDims(2).expandDims(3) as tf.Tensor4D;
  
  const edgesX = tf.conv2d(input, kernelX, 1, 'same');
  const edgesY = tf.conv2d(input, kernelY, 1, 'same');
  
  const edges = tf.sqrt(tf.add(tf.square(edgesX), tf.square(edgesY)));
  const edgeData = new Float32Array(await edges.data());

  // Analyze edge data to find potential openings
  const threshold = 0.5;
  const width = imageData.width;
  const height = imageData.height;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = y * width + x;
      if (edgeData[idx] > threshold) {
        // Determine which wall this opening belongs to based on position
        let wall: 'front' | 'back' | 'left' | 'right';
        if (x < width * 0.1) wall = 'left';
        else if (x > width * 0.9) wall = 'right';
        else if (y < height * 0.1) wall = 'front';
        else if (y > height * 0.9) wall = 'back';
        else continue; // Skip openings not near walls

        // Analyze surrounding pixels to determine if this is part of a window or door
        const isWindow = y < height / 2; // Simple heuristic: openings in upper half are windows
        
        // Determine relative position along the wall (0-1)
        let position: number;
        if (wall === 'left' || wall === 'right') {
          position = y / height;
        } else {
          position = x / width;
        }

        const opening: Opening = {
          wall,
          width: 1.0, // Default width in meters
          height: isWindow ? 1.2 : 2.0, // Default heights for windows and doors
          position
        };
        
        if (isWindow) {
          windows.push(opening);
        } else {
          doors.push(opening);
        }
      }
    }
  }
  
  // Clean up
  tensor.dispose();
  sobelX.dispose();
  sobelY.dispose();
  input.dispose();
  kernelX.dispose();
  kernelY.dispose();
  edgesX.dispose();
  edgesY.dispose();
  edges.dispose();
  
  return {
    ...room,
    windows,
    doors
  };
}

export async function processFloorPlan(file: File): Promise<UploadResponse> {
  try {
    // Convert File to ImageData
    const imageData = await createImageData(file);
    
    // Detect rooms
    const rooms = await detectRooms(imageData);
    
    // For each room, detect windows and doors
    const processedRooms = await Promise.all(
      rooms.map(room => detectOpenings(imageData, room))
    );
    
    // Calculate total area and scale
    const totalArea = processedRooms.reduce(
      (sum, room) => sum + (room.dimensions.width * room.dimensions.length),
      0
    );
    
    const floorPlanData: FloorPlanData = {
      rooms: processedRooms,
      totalArea,
      scale: 100 // pixels per meter - this should be calculated based on known dimensions
    };

    return {
      success: true,
      message: 'Floor plan processed successfully',
      data: floorPlanData
    };
  } catch (error) {
    console.error('Error processing floor plan:', error);
    return {
      success: false,
      message: 'Failed to process floor plan',
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

async function createImageData(file: File): Promise<ImageData> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        reject(new Error('Failed to get canvas context'));
        return;
      }
      ctx.drawImage(img, 0, 0);
      resolve(ctx.getImageData(0, 0, img.width, img.height));
    };
    img.onerror = () => reject(new Error('Failed to load image'));
    img.src = URL.createObjectURL(file);
  });
} 