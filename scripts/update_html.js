const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// 1. Update <head>
const oldHead = `    <!-- Favicon -->\r
    <link rel="icon" type="image/png" href="assets/favicon.png">\r
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">\r
    <link rel="apple-touch-icon" href="assets/favicon.png">\r
\r
    <!-- Fonts -->\r
    <link rel="preconnect" href="https://fonts.googleapis.com">\r
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\r
\r
    <!-- Styles -->\r
    <link rel="stylesheet" href="css/style.css">\r
    <link rel="stylesheet" href="css/project-detail.css">`;

const newHead = `    <!-- Favicon -->\r
    <link rel="icon" type="image/png" sizes="32x32" href="assets/favicon-32.png">\r
    <link rel="icon" type="image/png" sizes="192x192" href="assets/favicon-192.png">\r
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">\r
    <link rel="apple-touch-icon" href="assets/favicon-192.png">\r
\r
    <!-- Fonts -->\r
    <link rel="preconnect" href="https://fonts.googleapis.com">\r
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\r
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600&display=swap">\r
\r
    <!-- Styles -->\r
    <link rel="stylesheet" href="css/style.min.css">\r
    <link rel="preload" href="css/project-detail.min.css" as="style" onload="this.onload=null;this.rel='stylesheet'">\r
    <noscript><link rel="stylesheet" href="css/project-detail.min.css"></noscript>`;

if (html.includes(oldHead)) {
  html = html.replace(oldHead, newHead);
  console.log('Updated <head> successfully.');
} else {
  // Try with \n
  const oldHeadLF = oldHead.replace(/\r\n/g, '\n');
  const newHeadLF = newHead.replace(/\r\n/g, '\n');
  if (html.includes(oldHeadLF)) {
    html = html.replace(oldHeadLF, newHeadLF);
    console.log('Updated <head> successfully (LF).');
  } else {
    console.error('Could not find oldHead in index.html');
  }
}

// 2. Update Portfolio Cards
// Suru Workspace
const oldSuru = `<div class="portfolio-card reveal reveal-delay-1" data-project="suru-workspace">\r
                    <img src="assets/suru-dashboard.png" alt="Suru Workspace — Personal Productivity Workspace"\r
                        loading="lazy" decoding="async">`;
const newSuru = `<div class="portfolio-card reveal reveal-delay-1" data-project="suru-workspace">\r
                    <picture>\r
                        <source type="image/avif" srcset="assets/suru-dashboard-card.avif 800w, assets/suru-dashboard.avif 1600w" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px">\r
                        <source type="image/webp" srcset="assets/suru-dashboard-card.webp 800w, assets/suru-dashboard.webp 1600w" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px">\r
                        <img src="assets/suru-dashboard-card.png" alt="Suru Workspace — Personal Productivity Workspace" class="portfolio-img" loading="lazy" decoding="async" width="800" height="550">\r
                    </picture>`;

// KelasKit
const oldKelas = `<div class="portfolio-card reveal reveal-delay-2" data-project="kelaskit">\r
                    <span class="portfolio-status-badge">Unfinished</span>\r
                    <img src="assets/kelas-kit-dashboard.png" alt="KelasKit — Student Productivity Platform (Unfinished)"\r
                        loading="lazy" decoding="async">`;
const newKelas = `<div class="portfolio-card reveal reveal-delay-2" data-project="kelaskit">\r
                    <span class="portfolio-status-badge">Unfinished</span>\r
                    <picture>\r
                        <source type="image/avif" srcset="assets/kelas-kit-dashboard-card.avif 800w, assets/kelas-kit-dashboard.avif 1600w" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px">\r
                        <source type="image/webp" srcset="assets/kelas-kit-dashboard-card.webp 800w, assets/kelas-kit-dashboard.webp 1600w" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px">\r
                        <img src="assets/kelas-kit-dashboard-card.png" alt="KelasKit — Student Productivity Platform (Unfinished)" class="portfolio-img" loading="lazy" decoding="async" width="800" height="550">\r
                    </picture>`;

// Tabinote
const oldTabinote = `<div class="portfolio-card reveal reveal-delay-3" data-project="tabinote">\r
                    <img src="assets/tabinote-home.png" alt="Tabinote — Japan Travel Guide"\r
                        loading="lazy" decoding="async">`;
const newTabinote = `<div class="portfolio-card reveal reveal-delay-3" data-project="tabinote">\r
                    <picture>\r
                        <source type="image/avif" srcset="assets/tabinote-home-card.avif 800w, assets/tabinote-home.avif 1600w" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px">\r
                        <source type="image/webp" srcset="assets/tabinote-home-card.webp 800w, assets/tabinote-home.webp 1600w" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px">\r
                        <img src="assets/tabinote-home-card.png" alt="Tabinote — Japan Travel Guide" class="portfolio-img" loading="lazy" decoding="async" width="800" height="550">\r
                    </picture>`;

function replaceFlexible(content, oldStr, newStr) {
  if (content.includes(oldStr)) return content.replace(oldStr, newStr);
  const oldLF = oldStr.replace(/\r\n/g, '\n');
  const newLF = newStr.replace(/\r\n/g, '\n');
  if (content.includes(oldLF)) return content.replace(oldLF, newLF);
  console.error('Failed to find:\n' + oldStr.slice(0, 50));
  return content;
}

html = replaceFlexible(html, oldSuru, newSuru);
html = replaceFlexible(html, oldKelas, newKelas);
html = replaceFlexible(html, oldTabinote, newTabinote);

// 3. Update Scripts
const oldScripts = `    <!-- Scripts -->\r
    <script src="js/bg-shapes.js"></script>\r
    <script src="js/particle-sphere.js"></script>\r
    <script src="js/main.js"></script>\r
    <script src="js/project-detail.js"></script>`;

const newScripts = `    <!-- Scripts -->\r
    <script src="js/bg-shapes.min.js" defer></script>\r
    <script src="js/particle-sphere.min.js" defer></script>\r
    <script src="js/main.min.js" defer></script>\r
    <script src="js/project-detail.min.js" defer></script>`;

html = replaceFlexible(html, oldScripts, newScripts);

fs.writeFileSync('index.html', html, 'utf8');
console.log('index.html updated successfully!');

