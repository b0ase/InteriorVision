// This script downloads sample images for the interior-vision website
// Run with: node scripts/download-images.js

const https = require('https');
const fs = require('fs');
const path = require('path');

// Ensure the images directory exists
const imagesDir = path.join(__dirname, '../public/images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
  console.log('Created images directory');
}

// List of images to download
const imagesToDownload = [
  {
    url: 'https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?w=1200',
    filename: 'hero-background.jpg',
    description: 'Modern living room hero background'
  },
  {
    url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800',
    filename: 'interior-1.jpg',
    description: 'Contemporary living room'
  },
  {
    url: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800',
    filename: 'interior-2.jpg',
    description: 'Modern kitchen'
  },
  {
    url: 'https://images.unsplash.com/photo-1645327474515-fd5eb3e40119?w=800',
    filename: 'interior-3.jpg',
    description: 'Bathroom renovation'
  },
  {
    url: 'https://images.unsplash.com/photo-1628611225249-6c3c7c689552?w=800',
    filename: 'floorplan.jpg',
    description: 'Sample floor plan'
  }
];

// Download an image
function downloadImage(imageObj) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(imagesDir, imageObj.filename);
    const file = fs.createWriteStream(filePath);
    
    https.get(imageObj.url, (response) => {
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${imageObj.filename} - ${imageObj.description}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filePath, () => {}); // Delete the file if there was an error
      console.error(`Error downloading ${imageObj.filename}: ${err.message}`);
      reject(err);
    });
  });
}

// Download all images
async function downloadAllImages() {
  console.log('Starting image downloads...');
  
  for (const image of imagesToDownload) {
    try {
      await downloadImage(image);
    } catch (error) {
      console.error(`Failed to download ${image.filename}`);
    }
  }
  
  console.log('Image download complete!');
}

// Run the downloads
downloadAllImages(); 