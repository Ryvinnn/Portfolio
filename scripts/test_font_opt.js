const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const oldFont = `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600&display=swap">`;

const newFont = `<link rel="preload" href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600&display=swap"></noscript>`;

html = html.replace(oldFont, newFont);
fs.writeFileSync('index.html', html, 'utf8');
console.log('Font loading optimized to non-blocking preload.');

