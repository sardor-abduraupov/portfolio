# Updating the portfolio

Live at https://portfolio-sr.pages.dev/ (Cloudflare Pages deploys automatically from `main`).

All text, projects and links live in **`content.js`**. `index.html` holds the design and animation and renders everything from that file, so routine updates should touch `content.js` only.

## Common edits

- **New project:** add an object to `projects` (newest or most important first). Copy an existing entry and keep every field: `id`, `art` (`grid` / `orbits` / `layers` / `bubbles`), `title`, `year`, `status`, `hue` (0–360), `tagline`, `description`, `details` (3 short bullets), `stack`, and `links` (`[]` if nothing is public yet).
- **Status labels:** use "Live" (green dot), "In development" (amber dot), or anything else, such as "Active build" (blue dot).
- **School / grade:** edit `education`, `intro` and the second `about` paragraph together.
- **Contacts:** edit `contacts`. Email entries use a `mailto:` URL and power the "Say hello" copy button.
- **After any edit:** set `updated` to today's date (YYYY-MM-DD). It's shown in the footer.
- **Then pre-render** so search engines see the new text without running JavaScript:
  ```
  npm i --prefix /tmp/prerender jsdom@24
  NODE_PATH=/tmp/prerender/node_modules node tools/prerender.cjs
  ```
  This rewrites the sections inside `index.html` and updates the date in `sitemap.xml`. Commit both files.

## Files

- `index.html`: layout, styles, the WebGL background and all animation, with separate desktop and mobile experiences
- `content.js`: all content
- `assets/img/`: portrait (`portrait.webp` + `.jpg`), social preview (`og.jpg`), favicon
- `robots.txt`, `sitemap.xml`, `404.html`: for search engines. Without `404.html`, Cloudflare Pages serves the homepage for every unknown URL.
- `googleb66575c8da2dd934.html`: Google Search Console ownership check. Never delete it.
- `tools/prerender.cjs`: copies `content.js` into `index.html` as static HTML
- `assets/fonts/`, `assets/vendor/`: self-hosted fonts, GSAP 3, ScrollTrigger and Lenis

Updates for the bi-weekly refresh can be dropped into `NEWS.md` (one bullet per update). The scheduled update reads it, applies it to `content.js`, then clears it.
