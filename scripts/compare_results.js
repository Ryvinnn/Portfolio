const fs = require('fs');

function loadReport(path) {
  return JSON.parse(fs.readFileSync(path, 'utf8'));
}

function compare(baselinePath, postPath, label) {
  const base = loadReport(baselinePath);
  const post = loadReport(postPath);

  const baseScore = Math.round(base.categories.performance.score * 100);
  const postScore = Math.round(post.categories.performance.score * 100);

  const metrics = [
    { key: 'first-contentful-paint', name: 'First Contentful Paint (FCP)' },
    { key: 'largest-contentful-paint', name: 'Largest Contentful Paint (LCP)' },
    { key: 'total-blocking-time', name: 'Total Blocking Time (TBT)' },
    { key: 'cumulative-layout-shift', name: 'Cumulative Layout Shift (CLS)' },
    { key: 'speed-index', name: 'Speed Index (SI)' },
  ];

  console.log(`\n======================================================`);
  console.log(`       ${label.toUpperCase()} AUDIT COMPARISON`);
  console.log(`======================================================`);
  console.log(`Performance Score: ${baseScore}/100 -> ${postScore}/100 (${postScore >= baseScore ? '+' : ''}${postScore - baseScore})`);
  console.log(`------------------------------------------------------`);
  console.log(`Metric                              Baseline       Optimized`);
  console.log(`------------------------------------------------------`);

  for (const m of metrics) {
    const bVal = base.audits[m.key].displayValue || base.audits[m.key].numericValue.toFixed(2);
    const pVal = post.audits[m.key].displayValue || post.audits[m.key].numericValue.toFixed(2);
    console.log(`${m.name.padEnd(35)} ${bVal.padEnd(14)} ${pVal}`);
  }

  // Network requests
  const baseReqs = base.audits['network-requests'].details.items;
  const postReqs = post.audits['network-requests'].details.items;
  const baseTransfer = (baseReqs.reduce((a, c) => a + c.transferSize, 0) / 1024).toFixed(1);
  const postTransfer = (postReqs.reduce((a, c) => a + c.transferSize, 0) / 1024).toFixed(1);

  console.log(`\nTotal Page Transfer: ${baseTransfer} KB -> ${postTransfer} KB (-${(baseTransfer - postTransfer).toFixed(1)} KB, -${Math.round((1 - postTransfer / baseTransfer) * 100)}%)`);
}

compare('scripts/baseline-mobile.json', 'scripts/post-mobile.json', 'Mobile');
compare('scripts/baseline-desktop.json', 'scripts/post-desktop.json', 'Desktop');

