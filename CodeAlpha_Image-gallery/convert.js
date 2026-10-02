const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Using path.join + __dirname ensures Node looks in the right directory
const inputDir = path.join(__dirname, 'images');       // Folder where your raw images are
const outputDir = path.join(__dirname, 'outputImgs'); // Folder where optimized webp images will go

// Safely creates the output folder if it's missing
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Check if input directory exists before scanning
if (!fs.existsSync(inputDir)) {
  console.error(`❌ Input folder not found at: ${inputDir}. Please create it and add your images.`);
  process.exit(1);
}

// Read files and convert
fs.readdirSync(inputDir).forEach(file => {
  const ext = path.extname(file).toLowerCase();
  
  // Only process standard image file formats
  if (['.jpg', '.jpeg', '.png'].includes(ext)) {
    const outputName = path.basename(file, ext) + '.webp';
    
    const inputFilePath = path.join(inputDir, file);
    const outputFilePath = path.join(outputDir, outputName);

    sharp(inputFilePath)
      .resize({ width: 1920, withoutEnlargement: true }) // Downscale massive sizes
      .webp({ quality: 80 })                              // Convert & compress quality to 80%
      .toFile(outputFilePath)
      .then(() => console.log(`🎉 Converted: ${file} -> ${outputName}`))
      .catch(err => console.error(`❌ Error converting ${file}:`, err));
  }
});

