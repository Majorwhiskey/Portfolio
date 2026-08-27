# Portfolio

Personal portfolio site for **Amogh Ukkadgatri** — Electronics & Communication Engineer.

A single-page, static site built as a Claude Design canvas (`.dc.html`) with a
radar/telemetry-inspired classical theme: animated scan sweep, drifting grid
overlay, scroll-driven progress bar, and scramble-in text.

## Sections

`#top` · `#about` · `#education` · `#experience` · `#projects` · `#skills` · `#notes` · `#contact`

## Layout

```
Portfolio.dc.html   Source canvas — markup, styles, and page data
ScrambleText.jsx    React component: character-scramble text reveal
support.js          Generated dc-runtime (do not edit by hand)
_ds/                Design-system bundles (classical, organic) — styles + tokens
assets/             Scene image and resume PDF
uploads/            Source images and component drafts
deploy/             Built static output (index.html + assets) ready to host
```

## Running locally

The site is fully static — no build step is required.

```bash
python3 -m http.server 8000
# then open http://localhost:8000/Portfolio.dc.html
```

## Deploying

Serve the contents of `deploy/` from any static host (GitHub Pages, Netlify,
Vercel). `deploy/index.html` is the built entry point and carries its own copy
of `support.js`, `_ds/`, and `assets/`.
