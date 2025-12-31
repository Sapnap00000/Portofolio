// Image optimizer using sharp
// Usage: npm run optimize-images
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const srcDir = path.join(__dirname, "..", "images");
const outDir = path.join(srcDir, "optimized");
const exts = [".jpg", ".jpeg", ".png"];

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

async function processFile(filePath, relPath) {
  const ext = path.extname(filePath).toLowerCase();
  const name = path.basename(filePath, ext);
  const outBase = path.join(outDir, relPath);
  const outFolder = path.dirname(outBase);
  if (!fs.existsSync(outFolder)) fs.mkdirSync(outFolder, { recursive: true });

  try {
    const img = sharp(filePath);
    const metadata = await img.metadata();

    // Resize if very large
    let pipeline = img;
    if (metadata.width && metadata.width > 1920)
      pipeline = pipeline.resize(1920);

    // Output optimized JPEG
    const outJpg = path.join(outFolder, name + ".jpg");
    await pipeline.jpeg({ quality: 82, mozjpeg: true }).toFile(outJpg);

    // Output WebP
    const outWebp = path.join(outFolder, name + ".webp");
    await pipeline.webp({ quality: 80 }).toFile(outWebp);

    console.log("Optimized:", relPath);
  } catch (err) {
    console.error("Failed to process", relPath, err.message);
  }
}

function walk(dir, base = "") {
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    const full = path.join(dir, item.name);
    const rel = path.join(base, item.name);
    if (item.isDirectory()) walk(full, rel);
    else if (exts.includes(path.extname(item.name).toLowerCase()))
      processFile(full, rel);
  }
}

walk(srcDir);
