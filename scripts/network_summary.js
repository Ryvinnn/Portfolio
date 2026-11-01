const fs = require('fs');

const r = JSON.parse(fs.readFileSync('scripts/baseline-mobile.json', 'utf8'));
const items = r.audits['network-requests'].details.items;
console.log('Network Requests (Mobile Baseline):');
items.forEach(i => {
  console.log(`${(i.transferSize/1024).toFixed(1).padStart(7)} KB \t ${i.resourceType || 'other'} \t ${i.url}`);
});
console.log('Total Transfer: ' + (items.reduce((a,c) => a + c.transferSize, 0)/1024).toFixed(1) + ' KB');

