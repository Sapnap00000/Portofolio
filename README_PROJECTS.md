Project templates and guidelines

Purpose

- Provide ready-to-use project-card templates to add new projects quickly.
- Keep markup consistent and avoid accidental layout regressions.

How to add a new project to `projects.html` or `index.html`

1. Open `templates/project-card-templates.html` and copy a variant.
2. Paste into the desired section in `projects.html` or `index.html` inside the `.projects-grid` container.
3. Replace placeholder image paths and text.
4. For external links, include `target="_blank" rel="noopener noreferrer"`.
5. Keep file names in `images/` lowercase and avoid spaces.

Recommended metadata per project (optional):

- Title
- Short summary (1–2 lines)
- Technologies used
- Live demo link
- Source code link (GitHub)
- Year / location

Naming & image guidance

- Use descriptive, lowercase filenames for images (e.g. `cnc-part-01.jpg`).
- Optimize images for web (compressed JPEG/WEBP) and keep thumbnail sizes ~200–800px depending on layout.

Accessibility

- Always include meaningful `alt` attributes for images.
- Keep link text descriptive (avoid just "click here").

If you'd like, I can also:

- Add a small admin JSON file (`data/projects.json`) and a tiny script to render the projects dynamically.
- Add a modal/template for adding certificate entries in `About Me`.
