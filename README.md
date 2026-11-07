# Prabesh Nepal — personal website

React + Vite migration of the original portfolio, preserving Bootstrap 5 styling,
Playfair Display/Roboto/Stalemate typography, rough-notation highlights, original
images, navigation, and contact form. The teaching essay is a draft for review.

## Local development

Use Node.js 22.12+ (or a supported newer LTS release).

```sh
npm ci
npm run dev
```

## Production check

```sh
npm run build
npm run preview
```

Vite writes the deployable site to `dist/`. Test `/`, `/blog.html`, and
`/teaching-journey.html`; they are separate HTML entry points so direct links work
on GitHub Pages without a client-side routing fallback.

## Content

- `src/content.js`: education, experience, projects, and teaching essay.
- `src/App.jsx`: page layouts and existing web experiment links.
- `src/components.jsx`: shared navigation, footer, cards, and annotations.
- `styles/style.css`: original styling and responsive/accessibility additions.
- `docs/content-notes.md`: conflicting dates and remaining questions.

The existing Formbold action is retained. Local checks validate the form fields;
do not send test messages to the live endpoint. The résumé button is hidden until
a final URL is assigned to `profile.resume`.

## GitHub Pages

The included workflow builds and deploys `dist/` on pushes to `master`, or when
manually dispatched. Repository Settings → Pages → Source must be set to
**GitHub Actions**. The teaching essay remains labeled as a draft.

Editorial notes in `docs/content-notes.md` remain local and are excluded from Git.
