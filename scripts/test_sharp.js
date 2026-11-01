const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function testConversion() {
  const file = 'assets/tabinote-home.png';
  const stat = fs.statSync(file);
  console.log(`Original ${file}: ${(stat.size / 1024).toFixed(1)} KB`);

  // WebP 82
  const webpBuffer = await sharp(file).webp({ quality: 82 }).toBuffer();
  console.log(`WebP (full res, q82): ${(webpBuffer.length / 1024).toFixed(1)} KB (-${Math.round((1 - webpBuffer.length / stat.size) * 100)}%)`);

  // AVIF 75
  const avifBuffer = await sharp(file).avif({ quality: 75 }).toBuffer();
  console.log(`AVIF (full res, q75): ${(avifBuffer.length / 1024).toFixed(1)} KB (-${Math.round((1 - avifBuffer.length / stat.size) * 100)}%)`);

  // Card size (800w WebP)
  const cardWebp = await sharp(file).resize(800, null, { withoutEnlargement: true }).webp({ quality: 80 }).toBuffer();
  console.log(`WebP Card (800w, q80): ${(cardWebp.length / 1024).toFixed(1)} KB (-${Math.round((1 - cardWebp.length / stat.size) * 100)}%)`);

  // Thumb size (240x240 WebP)
  const thumbWebp = await sharp(file).resize(240, 240, { fit: 'cover' }).webp({ quality: 80 }).toBuffer();
  console.log(`WebP Thumb (240x240, q80): ${(thumbWebp.length / 1024).toFixed(1)} KB (-${Math.round((1 - thumbWebp.length / stat.size) * 100)}%)`);
}

testConversion();

