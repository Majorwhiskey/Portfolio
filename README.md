# Portfolio

**Live at [amoghukkadgatri.vercel.app](https://amoghukkadgatri.vercel.app)**

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
docs/              Built static output (index.html + assets) ready to host
```

## Running locally

The site is fully static — no build step is required.

```bash
python3 -m http.server 8000
# then open http://localhost:8000/Portfolio.dc.html
```

## Deploying

The site is hosted on Vercel and deploys automatically on every push to `main`.
`vercel.json` sets `outputDirectory` to `docs/` with no build step. To deploy
manually: `vercel --prod`.

`docs/` is self-contained — `index.html` carries its own copy of `support.js`,
`_ds/`, and `assets/`, and uses only relative paths — so it can also be dropped
onto Netlify, Vercel, or Cloudflare Pages with no build step.
