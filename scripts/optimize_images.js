const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const projectImages = [
  // Suru Workspace
  { file: 'assets/suru-dashboard.png', name: 'suru-dashboard', isCard: true },
  { file: 'assets/suru-projects.png', name: 'suru-projects', isCard: false },
  { file: 'assets/suru-goals.png', name: 'suru-goals', isCard: false },
  { file: 'assets/suru-tasks.png', name: 'suru-tasks', isCard: false },

  // Tabinote
  { file: 'assets/tabinote-home.png', name: 'tabinote-home', isCard: true },
  { file: 'assets/tabinote-destinations.png', name: 'tabinote-destinations', isCard: false },
  { file: 'assets/tabinote-seasons.png', name: 'tabinote-seasons', isCard: false },
  { file: 'assets/tabinote-journal.png', name: 'tabinote-journal', isCard: false },

  // LUMIÈRE
  { file: 'assets/lumiere-hero.png', name: 'lumiere-hero', isCard: true },
  { file: 'assets/lumiere-destinations.png', name: 'lumiere-destinations', isCard: false },
  { file: 'assets/lumiere-journal.png', name: 'lumiere-journal', isCard: false },
  { file: 'assets/lumiere-philosophy.png', name: 'lumiere-philosophy', isCard: false },
];

async function run() {
  console.log('=== STARTING IMAGE OPTIMIZATION ===\n');
  let totalOrigBytes = 0;
  let totalOptBytes = 0;

  for (const img of projectImages) {
    const origStat = fs.statSync(img.file);
    totalOrigBytes += origStat.size;
    console.log(`Processing ${img.file} (${(origStat.size / 1024).toFixed(1)} KB)...`);

    const image = sharp(img.file);
    const metadata = await image.metadata();

    // 1. Full/Modal image: max 1600px width
    const targetWidth = Math.min(metadata.width, 1600);

    // Full WebP
    const webpPath = `assets/${img.name}.webp`;
    await sharp(img.file)
      .resize({ width: targetWidth, withoutEnlargement: true })
      .webp({ quality: 82, effort: 6 })
      .toFile(webpPath);
    const webpSize = fs.statSync(webpPath).size;

    // Full AVIF
    const avifPath = `assets/${img.name}.avif`;
    await sharp(img.file)
      .resize({ width: targetWidth, withoutEnlargement: true })
      .avif({ quality: 75, effort: 6 })
      .toFile(avifPath);
    const avifSize = fs.statSync(avifPath).size;

    // Optimized PNG fallback (resized to targetWidth if oversized)
    const optPngPath = `assets/${img.name}-opt.png`;
    await sharp(img.file)
      .resize({ width: targetWidth, withoutEnlargement: true })
      .png({ compressionLevel: 9, adaptiveFiltering: true, quality: 85 })
      .toFile(optPngPath);
    const optPngSize = fs.statSync(optPngPath).size;

    // 2. Thumbnail: 280x280 square for modal thumbnails
    const thumbWebp = `assets/${img.name}-thumb.webp`;
    await sharp(img.file)
      .resize(280, 280, { fit: 'cover', position: 'center' })
      .webp({ quality: 80, effort: 6 })
      .toFile(thumbWebp);
    const thumbWebpSize = fs.statSync(thumbWebp).size;

    const thumbAvif = `assets/${img.name}-thumb.avif`;
    await sharp(img.file)
      .resize(280, 280, { fit: 'cover', position: 'center' })
      .avif({ quality: 72, effort: 6 })
      .toFile(thumbAvif);

    const thumbPng = `assets/${img.name}-thumb.png`;
    await sharp(img.file)
      .resize(280, 280, { fit: 'cover', position: 'center' })
      .png({ compressionLevel: 9, adaptiveFiltering: true })
      .toFile(thumbPng);

    // 3. Card size (800w) if used as card
    if (img.isCard) {
      const cardWebp = `assets/${img.name}-card.webp`;
      await sharp(img.file)
        .resize({ width: 800, withoutEnlargement: true })
        .webp({ quality: 82, effort: 6 })
        .toFile(cardWebp);
      const cardWebpSize = fs.statSync(cardWebp).size;

      const cardAvif = `assets/${img.name}-card.avif`;
      await sharp(img.file)
        .resize({ width: 800, withoutEnlargement: true })
        .avif({ quality: 75, effort: 6 })
        .toFile(cardAvif);

      const cardPng = `assets/${img.name}-card.png`;
      await sharp(img.file)
        .resize({ width: 800, withoutEnlargement: true })
        .png({ compressionLevel: 9, adaptiveFiltering: true, quality: 85 })
        .toFile(cardPng);

      console.log(`  -> Card WebP (800w): ${(cardWebpSize / 1024).toFixed(1)} KB`);

      if (img.name === 'lumiere-hero') {
        fs.copyFileSync(cardWebp, 'assets/lumiere-preview.webp');
        fs.copyFileSync(cardAvif, 'assets/lumiere-preview.avif');
        fs.copyFileSync(cardPng, 'assets/lumiere-preview.png');
        console.log('  -> Also copied to assets/lumiere-preview.webp');
      }
    }

    console.log(`  -> WebP (full): ${(webpSize / 1024).toFixed(1)} KB | AVIF: ${(avifSize / 1024).toFixed(1)} KB | Thumb: ${(thumbWebpSize / 1024).toFixed(1)} KB`);
  }

  // Favicon optimization
  console.log('\nProcessing favicons...');
  const favOrig = fs.statSync('assets/favicon.png').size;
  console.log(`Original favicon.png: ${(favOrig / 1024).toFixed(1)} KB`);

  // Optimized 192x192 PNG favicon
  await sharp('assets/favicon.png')
    .resize(192, 192)
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toFile('assets/favicon-192.png');

  // Optimized 32x32 PNG favicon
  await sharp('assets/favicon.png')
    .resize(32, 32)
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toFile('assets/favicon-32.png');

  // Optimized 48x48 ICO / PNG replacement
  await sharp('assets/favicon.png')
    .resize(48, 48)
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toFile('assets/favicon-48.png');

  console.log(`  -> favicon-32.png: ${(fs.statSync('assets/favicon-32.png').size / 1024).toFixed(1)} KB`);
  console.log(`  -> favicon-192.png: ${(fs.statSync('assets/favicon-192.png').size / 1024).toFixed(1)} KB`);
  console.log('\nOptimization complete!');
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});

