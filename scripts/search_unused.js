const fs = require("fs");
const path = require("path");

function searchDir(dir, pattern) {
  for (const item of fs.readdirSync(dir)) {
    if (item === "node_modules" || item === ".git" || item === "scripts" || item === "assets") continue;
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) {
      searchDir(full, pattern);
    } else {
      const content = fs.readFileSync(full, "utf8");
      if (pattern.test(content)) console.log(`Found ${pattern} in ${full}`);
    }
  }
}

["tokoroti", "travelmalang", "hero-mockup", "portfolio-creative", "portfolio-corporate"].forEach(name => {
  searchDir(".", new RegExp(name, "i"));
});
console.log("Search complete.");

