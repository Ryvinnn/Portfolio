const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

async function capture() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  
  console.log('Launching Chrome...');
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: 'new',
    defaultViewport: {
      width: 1600,
      height: 1100,
      deviceScaleFactor: 2
    },
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--hide-scrollbars']
  });

  const page = await browser.newPage();
  
  console.log('Navigating to https://lumierebyac.vercel.app/...');
  await page.goto('https://lumierebyac.vercel.app/', {
    waitUntil: 'networkidle2',
    timeout: 30000
  });

  // Wait a bit for fonts and images to settle
  await new Promise(r => setTimeout(r, 2000));

  // Ensure output dir exists
  const rawDir = path.join(__dirname, '..', 'scratch');
  if (!fs.existsSync(rawDir)) {
    fs.mkdirSync(rawDir, { recursive: true });
  }

  // 1. Capture Hero Section (Desktop Viewport: 1600x1100)
  console.log('Capturing Hero...');
  const heroPath = path.join(rawDir, 'lumiere-hero-raw.png');
  await page.screenshot({
    path: heroPath,
    clip: {
      x: 0,
      y: 0,
      width: 1600,
      height: 1100
    }
  });
  console.log(`Saved hero to ${heroPath}`);

  // 2. Capture Editorial Intro / Philosophy
  console.log('Capturing Editorial Intro / Philosophy...');
  const introEl = await page.$('#intro');
  if (introEl) {
    const introPath = path.join(rawDir, 'lumiere-philosophy-raw.png');
    await introEl.screenshot({ path: introPath });
    console.log(`Saved intro to ${introPath}`);
  }

  // 3. Navigate to destinations.html
  console.log('Navigating to destinations...');
  try {
    await page.goto('https://lumierebyac.vercel.app/destinations.html', {
      waitUntil: 'networkidle2',
      timeout: 30000
    });
    await new Promise(r => setTimeout(r, 1500));
    const destPath = path.join(rawDir, 'lumiere-destinations-raw.png');
    await page.screenshot({
      path: destPath,
      clip: { x: 0, y: 0, width: 1600, height: 1100 }
    });
    console.log(`Saved destinations to ${destPath}`);
  } catch (e) {
    console.warn('Destinations page capture failed:', e.message);
  }

  // 4. Navigate to journal.html
  console.log('Navigating to journal...');
  try {
    await page.goto('https://lumierebyac.vercel.app/journal.html', {
      waitUntil: 'networkidle2',
      timeout: 30000
    });
    await new Promise(r => setTimeout(r, 1500));
    const journalPath = path.join(rawDir, 'lumiere-journal-raw.png');
    await page.screenshot({
      path: journalPath,
      clip: { x: 0, y: 0, width: 1600, height: 1100 }
    });
    console.log(`Saved journal to ${journalPath}`);
  } catch (e) {
    console.warn('Journal page capture failed:', e.message);
  }

  await browser.close();
  console.log('All screenshots captured successfully!');
}

capture().catch(err => {
  console.error('Error during capture:', err);
  process.exit(1);
});

