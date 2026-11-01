const esbuild = require('esbuild');
const fs = require('fs');

async function build() {
  console.log('=== BUILDING MINIFIED ASSETS ===\n');

  // CSS
  await esbuild.build({
    entryPoints: ['css/style.css'],
    outfile: 'css/style.min.css',
    minify: true,
    bundle: false,
  });
  console.log(`css/style.min.css: ${(fs.statSync('css/style.min.css').size / 1024).toFixed(1)} KB (orig: ${(fs.statSync('css/style.css').size / 1024).toFixed(1)} KB)`);

  await esbuild.build({
    entryPoints: ['css/project-detail.css'],
    outfile: 'css/project-detail.min.css',
    minify: true,
    bundle: false,
  });
  console.log(`css/project-detail.min.css: ${(fs.statSync('css/project-detail.min.css').size / 1024).toFixed(1)} KB (orig: ${(fs.statSync('css/project-detail.css').size / 1024).toFixed(1)} KB)`);

  // JS
  const jsFiles = ['bg-shapes', 'particle-sphere', 'main', 'project-detail'];
  for (const name of jsFiles) {
    await esbuild.build({
      entryPoints: [`js/${name}.js`],
      outfile: `js/${name}.min.js`,
      minify: true,
      bundle: false,
    });
    console.log(`js/${name}.min.js: ${(fs.statSync(`js/${name}.min.js`).size / 1024).toFixed(1)} KB (orig: ${(fs.statSync(`js/${name}.js`).size / 1024).toFixed(1)} KB)`);
  }

  console.log('\nBuild complete!');
}

build().catch(err => {
  console.error(err);
  process.exit(1);
});

