const fs = require('fs');

function createIcoFromPngs(pngBuffers, outputPath) {
  // ICO header: 2 bytes reserved (0), 2 bytes type (1 for ICO), 2 bytes image count
  const count = pngBuffers.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(count, 4);

  let offset = 6 + count * 16;
  const entries = [];
  for (const { width, height, buf } of pngBuffers) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(width >= 256 ? 0 : width, 0);
    entry.writeUInt8(height >= 256 ? 0 : height, 1);
    entry.writeUInt8(0, 2); // color count
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(buf.length, 8); // image size
    entry.writeUInt32LE(offset, 12); // image offset
    entries.push(entry);
    offset += buf.length;
  }

  const finalBuf = Buffer.concat([header, ...entries, ...pngBuffers.map(p => p.buf)]);
  fs.writeFileSync(outputPath, finalBuf);
  console.log(`Created ${outputPath}: ${(finalBuf.length / 1024).toFixed(1)} KB`);
}

const p32 = fs.readFileSync('assets/favicon-32.png');
const p48 = fs.readFileSync('assets/favicon-48.png');

createIcoFromPngs([
  { width: 32, height: 32, buf: p32 },
  { width: 48, height: 48, buf: p48 }
], 'favicon.ico');

