const fs = require('fs');
const r = JSON.parse(fs.readFileSync('scripts/post-mobile.json', 'utf8'));

for (const [k, v] of Object.entries(r.audits)) {
  if (k.includes('lcp') || k.includes('largest-contentful')) {
    console.log(k, v.displayValue || v.score);
    if (v.details) console.log(JSON.stringify(v.details).slice(0, 300));
  }
}

