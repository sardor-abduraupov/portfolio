/* =====================================================================
   PRERENDER — copies the content from content.js into index.html as
   real HTML, so search engines see it without running JavaScript.
   The browser still re-renders from content.js at runtime, so the
   result looks identical.

   Run after every edit to content.js:
     npm i --prefix /tmp/prerender jsdom@24
     NODE_PATH=/tmp/prerender/node_modules node tools/prerender.cjs

   It also refreshes <lastmod> in sitemap.xml from SITE.updated.
   ===================================================================== */
const fs = require('fs');
const path = require('path');
const { JSDOM, VirtualConsole } = require('jsdom');

const root = path.resolve(__dirname, '..');
const indexPath = path.join(root, 'index.html');
const html = fs.readFileSync(indexPath, 'utf8');
const contentJs = fs.readFileSync(path.join(root, 'content.js'), 'utf8');

const IDS = ['hero', 'marquee', 'about', 'work', 'vision', 'contact', 'footer'];

function setInner(src, id, inner) {
  const re = new RegExp('(<(section|footer)\\b[^>]*\\bid="' + id + '"[^>]*>)([\\s\\S]*?)(</\\2>)');
  if (!re.test(src)) throw new Error('Could not find <section id="' + id + '"> in index.html');
  return src.replace(re, (m, open, tag, _old, close) => open + inner + close);
}

/* 1. Empty every rendered region, swap external scripts for inline content.js
      (no GSAP → the page renders in its static, reduced-motion form). */
let input = html;
IDS.forEach((id) => { input = setInner(input, id, ''); });
input = input
  .replace('<script src="content.js"></script>', () => '<script>' + contentJs + '</script>')
  .replace(/<script src="assets\/vendor\/[^"]+"><\/script>/g, '');

const errors = [];
const vc = new VirtualConsole();
vc.on('jsdomError', (e) => { if (!/getContext|Not implemented/i.test(e.message)) errors.push(e.message); });
vc.on('error', (e) => errors.push(String(e)));

const dom = new JSDOM(input, {
  runScripts: 'dangerously',
  pretendToBeVisual: true,
  virtualConsole: vc,
  beforeParse(w) {
    w.matchMedia = () => ({ matches: false, addEventListener() {}, removeEventListener() {}, addListener() {} });
    w.IntersectionObserver = class { observe() {} unobserve() {} disconnect() {} };
    w.HTMLCanvasElement.prototype.getContext = () => null;
    w.requestAnimationFrame = () => 0;
    w.setInterval = () => 0;
  }
});

if (errors.length) { console.error('Render errors:\n' + errors.join('\n')); process.exit(1); }

const doc = dom.window.document;
const SITE = dom.window.SITE;
if (!SITE || !Array.isArray(SITE.projects)) { console.error('content.js did not define window.SITE'); process.exit(1); }

/* 2. Copy each rendered region back into the real index.html. */
let out = html;
IDS.forEach((id) => {
  const el = doc.getElementById(id);
  if (!el || !el.innerHTML.trim()) { console.error('Region "' + id + '" rendered empty'); process.exit(1); }
  const inner = el.innerHTML
    .replace(/ style="opacity: 1; transform: none;"/g, '')
    .replace(/ style="opacity: 1;"/g, '');
  out = setInner(out, id, '\n      ' + inner + '\n    ');
});
fs.writeFileSync(indexPath, out);

/* 3. Keep the sitemap date in step with the content. */
const smPath = path.join(root, 'sitemap.xml');
if (fs.existsSync(smPath) && /^\d{4}-\d{2}-\d{2}$/.test(SITE.updated)) {
  fs.writeFileSync(smPath, fs.readFileSync(smPath, 'utf8').replace(/<lastmod>[^<]*<\/lastmod>/, '<lastmod>' + SITE.updated + '</lastmod>'));
}

const text = doc.querySelector('main').textContent.replace(/\s+/g, ' ').trim();
console.log('Prerendered ' + IDS.length + ' regions · ' + SITE.projects.length + ' projects · ' + text.split(' ').length + ' words of static text');
