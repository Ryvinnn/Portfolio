const fs = require('fs');

function analyzeReport(path, label) {
  if (!fs.existsSync(path)) {
    console.log(`File not found: ${path}`);
    return;
  }
  const report = JSON.parse(fs.readFileSync(path, 'utf8'));
  const perf = report.categories.performance;
  const audits = report.audits;

  console.log(`\n========================================`);
  console.log(`   ${label.toUpperCase()} BASELINE AUDIT`);
  console.log(`========================================`);
  console.log(`Performance Score: ${Math.round(perf.score * 100)} / 100`);
  console.log(`First Contentful Paint (FCP): ${audits['first-contentful-paint'].displayValue}`);
  console.log(`Largest Contentful Paint (LCP): ${audits['largest-contentful-paint'].displayValue}`);
  console.log(`Total Blocking Time (TBT): ${audits['total-blocking-time'].displayValue}`);
  console.log(`Cumulative Layout Shift (CLS): ${audits['cumulative-layout-shift'].displayValue}`);
  console.log(`Speed Index (SI): ${audits['speed-index'].displayValue}`);

  console.log(`\n--- Opportunities & Issues ---`);
  for (const [key, audit] of Object.entries(audits)) {
    if (audit.details && audit.details.type === 'opportunity' && (audit.numericValue > 50 || audit.score < 0.9)) {
      console.log(`- ${audit.title}: ${audit.displayValue || ''} (${audit.description.slice(0, 80)}...)`);
    }
  }

  // Check specific audits
  const checkKeys = [
    'render-blocking-resources',
    'modern-image-formats',
    'uses-optimized-images',
    'uses-responsive-images',
    'image-size-responsive',
    'offscreen-images',
    'font-display',
    'unminified-css',
    'unminified-javascript',
    'unused-css-rules',
    'unused-javascript',
    'layout-shift-elements'
  ];

  console.log(`\n--- Key Audit Diagnostics ---`);
  for (const k of checkKeys) {
    if (audits[k]) {
      const a = audits[k];
      const status = a.score === 1 ? 'PASS' : `SCORE: ${a.score}`;
      const disp = a.displayValue ? ` - ${a.displayValue}` : '';
      console.log(`[${status}] ${a.title}${disp}`);
    }
  }
}

analyzeReport('scripts/baseline-mobile.json', 'Mobile');
analyzeReport('scripts/baseline-desktop.json', 'Desktop');

