import { UploadResponse } from '@/types';

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
}

export interface FloorPlanData {
  rooms: Room[];
  totalArea: number;
  scale: number; // pixels per meter
}

export async function processFloorPlan(file: File): Promise<UploadResponse> {
  try {
    // For now, return a sample room layout
    // In a real implementation, this would use computer vision to analyze the floor plan
    const sampleData: FloorPlanData = {
      rooms: [
        {
          name: 'Living Room',
          dimensions: {
            width: 5,
            length: 7,
            height: 2.5
          },
          position: {
            x: 0,
            y: 0,
            z: 0
          },
          windows: [
            {
              wall: 'right',
              position: 0.5,
              width: 3,
              height: 1
            }
          ],
          doors: [
            {
              wall: 'front',
              position: 0.5,
              width: 1,
              height: 2
            }
          ]
        }
      ],
      totalArea: 35, // 5m * 7m
      scale: 100 // 100 pixels per meter in the floor plan image
    };

    return {
      success: true,
      message: 'Floor plan processed successfully',
      data: sampleData
    };
  } catch (error) {
    return {
      success: false,
      message: 'Failed to process floor plan',
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
} 