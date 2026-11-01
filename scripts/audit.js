const fs = require("fs");
const path = require("path");

function getPngDimensions(filePath) {
  try {
    const buf = fs.readFileSync(filePath);
    if (buf.toString("ascii", 1, 4) === "PNG") {
      const width = buf.readUInt32BE(16);
      const height = buf.readUInt32BE(20);
      return { width, height };
    }
  } catch (e) {}
  return null;
}

function scan(dir) {
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      scan(full);
    } else if (f.endsWith(".png") || f.endsWith(".ico")) {
      const dim = getPngDimensions(full);
      const sizeKb = (fs.statSync(full).size / 1024).toFixed(1);
      const dimStr = dim ? `${dim.width}x${dim.height}` : "unknown";
      console.log(`${full.padEnd(52)} ${sizeKb.padStart(8)} KB   ${dimStr}`);
    }
  }
}

console.log("Image Details:");
scan("assets");
