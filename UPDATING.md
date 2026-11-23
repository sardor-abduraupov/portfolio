# Updating the portfolio

All text, projects and links live in **`content.js`**. `index.html` holds the design and animation and renders everything from that file, so routine updates should touch `content.js` only.

## Common edits

- **New project:** add an object to `projects` (newest or most important first). Copy an existing entry and keep every field: `id`, `art` (`grid` / `orbits` / `layers` / `bubbles`), `title`, `year`, `status`, `hue` (0–360), `tagline`, `description`, `details` (3 short bullets), `stack`, and `links` (`[]` if nothing is public yet).
- **Status labels:** use "Live" (green dot), "In development" (amber dot), or anything else, such as "Active build" (blue dot).
- **School / grade:** edit `education`, `intro` and the second `about` paragraph together.
- **Contacts:** edit `contacts`. Email entries use a `mailto:` URL and power the "Say hello" copy button.
- **After any edit:** set `updated` to today's date (YYYY-MM-DD). It's shown in the footer.

## Files

- `index.html`: layout, styles, the WebGL background and all animation, with separate desktop and mobile experiences
- `content.js`: all content
- `assets/img/`: portrait (`portrait.webp` + `.jpg`), social preview (`og.jpg`), favicon
- `assets/fonts/`, `assets/vendor/`: self-hosted fonts, GSAP 3, ScrollTrigger and Lenis

Updates for the bi-weekly refresh can be dropped into `NEWS.md` (one bullet per update). The scheduled update reads it, applies it to `content.js`, then clears it.
