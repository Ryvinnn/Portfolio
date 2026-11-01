const fs = require('fs');
const r = JSON.parse(fs.readFileSync('scripts/post-mobile.json', 'utf8'));

const insight = r.audits['lcp-breakdown-insight'];
console.log(JSON.stringify(insight, null, 2));

