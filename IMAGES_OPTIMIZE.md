Image optimization instructions

This project includes a helper script to generate optimized JPEG and WebP images.

Files added:

- `scripts/optimize-images.js` — Node script using `sharp` to process images under `images/` and write outputs to `images/optimized/`.
- `package.json` — includes `sharp` as a dev dependency and a script `optimize-images`.

Quick start

1. Install dependencies:

```bash
npm install
```

2. Run optimizer (will create `images/optimized/`):

```bash
npm run optimize-images
```

3. Review optimized images in `images/optimized/` before deploying. Optionally update `data/projects.js` to point to the optimized paths (prefer `.webp` when supported).

Notes

- The optimizer will produce `.jpg` and `.webp` outputs for each source image (preserving subfolders).
- Keep a backup of original images before mass-replacing.
- If `sharp` fails to install on your system, ensure build tools are present (`build-essential`, `python` on Linux) or use prebuilt binaries.

If you want, I can:

- Convert project pages to prefer `.webp` with `<picture>` fallbacks automatically after optimization.
- Add a small CI step to run optimization before deployment.
