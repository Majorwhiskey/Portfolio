# Portfolio

**Live at [amoghukkadgatri.vercel.app](https://amoghukkadgatri.vercel.app)**

Personal portfolio site for **Amogh Ukkadgatri** — Electronics & Communication Engineer.

A single-page static site with a radar/telemetry-inspired classical theme: animated scan sweep, drifting grid
overlay, scroll-driven progress bar, and scramble-in text.

## Sections

`#top` · `#about` · `#education` · `#experience` · `#projects` · `#skills` · `#notes` · `#contact`

## Layout

```
docs/               The site — this is the source you edit
  index.html        Markup, styles, and page data
  ScrambleText.jsx  React component: character-scramble text reveal
  support.js        Generated dc-runtime (do not edit by hand)
  _ds/              Design-system bundle — styles + tokens
  assets/           Scene image and resume PDF
uploads/            Original images and component drafts (not published)
vercel.json         Vercel config — publishes docs/ with no build step
```

## Running locally

The site is fully static — no build step is required.

```bash
python3 -m http.server 8000
# then open http://localhost:8000/docs/
```

## Deploying

The site is hosted on Vercel and deploys automatically on every push to `main`.
`vercel.json` sets `outputDirectory` to `docs/` with no build step. To deploy
manually: `vercel --prod`.

`docs/` is self-contained and uses only relative paths, so it can also be
dropped onto GitHub Pages, Netlify, or Cloudflare Pages with no build step.
