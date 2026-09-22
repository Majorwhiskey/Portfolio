# Portfolio

**Live at [amoghukkadgatri.vercel.app](https://amoghukkadgatri.vercel.app)**

Personal portfolio site for **Amogh Ukkadgatri** — Electronics & Communication Engineer.

A single-page static site, drawn in code with no framework or build step: a self-routing circuit canvas in the
hero, a dot-field interference canvas that spells words as you scroll, scroll-velocity type lean and row lag,
a pinned project index, word-by-word statement reveal, marquees, and live masthead telemetry fed by the scroll wheel.

## Sections

`#top` · `#about` · `#log` (experience) · `#projects` · `#skills` · `#education` · `#contact`

## Layout

```
docs/               The site — this is the source you edit
  index.html        Everything: styles, CONTENT data, markup template, and motion code
  assets/           Resume PDF
uploads/            Original images and component drafts (not published)
vercel.json         Vercel config — publishes docs/ with no build step
```

## Editing content

All copy (roles, projects, skills, education, contact links) lives in the `CONTENT` object near the top
of the `<script>` in `docs/index.html`. The markup is generated from it, so edits there are all you need.

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
