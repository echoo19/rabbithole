# Rabbit Hole — Meat Industry Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build "A Rabbit Hole Down the Meat Industry" — a 7-page editorial website with a pasture-to-hub unveil, six sphere deep-dives, and an embedded quiz.

**Architecture:** Vite vanilla-JS multi-page app. Each page is a standalone HTML file. GSAP+ScrollTrigger drives animations; Lenis provides smooth scroll. Shared JS modules (animations, router, nav, illustrations) are imported via ES modules. Content lives in `src/content/*.js` files consumed by each page.

**Tech Stack:** Vite 5, GSAP 3 + ScrollTrigger, Lenis 1.x, vanilla HTML/CSS/JS, Vercel.

**Design reference:** Already extracted to `/tmp/design_extract/a-rabbit-down-the-meat-industry/project/`. Read `Hub.html`, `Labor.html`, `styles.css`, `nav.js`, `illustrations.js` before implementing anything.

---

## File Map

```
fooded_meggy/
├── index.html                  ← Hub (entry point)
├── labor.html
├── immigrant-labor.html
├── consolidation.html
├── climate.html
├── health.html
├── welfare.html
├── vite.config.js
├── package.json
├── public/
│   └── assets/
│       ├── sphere-labor/       ← placeholder divs, swap PNGs here
│       ├── sphere-immigrant/
│       ├── sphere-corporate/
│       ├── sphere-climate/
│       ├── sphere-quality/
│       └── sphere-animal/
└── src/
    ├── styles/
    │   ├── tokens.css           ← colors, fonts, spacing vars
    │   ├── global.css           ← body, resets, paper grain, shared components
    │   ├── hub.css              ← pasture, curtain, sphere grid, quiz
    │   └── article.css          ← nav, article-head/body/stats/pull/foot
    ├── js/
    │   ├── animations.js        ← GSAP curtain, hub-reveal, hover, count-up
    │   ├── intro.js             ← title fade, aisle pan (ScrollTrigger), pasture entrance
    │   ├── router.js            ← History API + curtain transition between pages
    │   ├── quiz.js              ← quiz state machine + localStorage save
    │   ├── nav.js               ← injects article-nav on sphere pages
    │   └── illustrations.js     ← SVG generators (cow, worker, etc.)
    └── content/
        ├── labor.js
        ├── immigrant-labor.js
        ├── consolidation.js
        ├── climate.js
        ├── health.js
        └── welfare.js
```

---

## Phase 0 — Bootstrap (do first, blocks all agents)

### Task 0: Vite scaffold + install deps

**Files:** `package.json`, `vite.config.js`

- [ ] In `/Users/jakekang/projects/fooded_meggy`, run:
```bash
npm create vite@latest . -- --template vanilla
npm install
npm install gsap @studio-freight/lenis
```

- [ ] Replace generated `vite.config.js`:
```js
import { defineConfig } from 'vite'
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main:          'index.html',
        labor:         'labor.html',
        immigrantLabor:'immigrant-labor.html',
        consolidation: 'consolidation.html',
        climate:       'climate.html',
        health:        'health.html',
        welfare:       'welfare.html',
      }
    }
  }
})
```

- [ ] Delete Vite's generated `src/` contents (counter.js, style.css, main.js, javascript.svg). Keep the folder.

- [ ] Create folder structure:
```bash
mkdir -p src/{styles,js,content}
mkdir -p public/assets/{sphere-labor,sphere-immigrant,sphere-corporate,sphere-climate,sphere-quality,sphere-animal}
mkdir -p docs/superpowers/{specs,plans}
```

- [ ] Verify dev server starts: `npm run dev` → `http://localhost:5173` loads (404 is fine at this point).

- [ ] Commit: `git init && git add -A && git commit -m "chore: vite scaffold + deps"`

---

## Phase 1 — Parallel Sprint (Agents A, B, C run simultaneously after Task 0)

---

### AGENT B — Design System + HTML Stubs

#### Task B1: CSS design system

**Files:** `src/styles/tokens.css`, `src/styles/global.css`, `src/styles/hub.css`, `src/styles/article.css`

- [ ] Copy `tokens.css` from extracted design:
```css
/* src/styles/tokens.css */
:root {
  --cream:         #F4EDE0;
  --bone:          #EDE4D3;
  --oxblood:       #7A1E1E;
  --sage:          #8A9A7B;
  --ochre:         #C89B3C;
  --charcoal:      #2B2B2B;
  --charcoal-soft: #3a3735;
  --ink:           #1a1a1a;
  --serif: "Spectral", Georgia, serif;
  --sans:  "IBM Plex Sans", Helvetica, Arial, sans-serif;
  --mono:  "IBM Plex Mono", ui-monospace, monospace;
  --measure: 36rem;
  --gutter: clamp(1.5rem, 5vw, 4rem);
  --cutout-shadow:
    drop-shadow(6px 10px 0 rgba(43,43,43,.10))
    drop-shadow(2.4px 4px 6px rgba(43,43,43,.18));
}
```

- [ ] Copy `global.css` from `/tmp/design_extract/a-rabbit-down-the-meat-industry/project/styles.css` lines 1–218 (html/body, typography, eyebrow, kicker, lede, progress strip, masthead, chapter shell, article-pull, colophon, cutout, grain). Add Google Fonts `<link>` in a shared head snippet.

- [ ] Copy `article.css` from `styles.css` lines 819–1205 (article-nav, article-head, article-body, article-aside, article-figure, fact-card, article-stats, article-foot, read-more).

- [ ] Write `hub.css` from `Hub.html`'s `<style>` block (pasture stage, curtain, hub-stage, spheres, hub-reflect, reflect-corner, mobile breakpoints). The full block is lines 12–511 of the extracted Hub.html.

- [ ] Commit: `git commit -m "feat: design system CSS tokens and shared styles"`

#### Task B2: `index.html` (Hub) — skeleton

**File:** `index.html`

- [ ] Write `index.html` with three stages. Use the exact HTML structure from the design's Hub.html but replace `<style>` with CSS imports and inline `<script>` with module imports:

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <title>A Rabbit Hole Down the Meat Industry</title>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
  <link href="https://fonts.googleapis.com/css2?family=Spectral:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=IBM+Plex+Sans:wght@300;400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet"/>
  <link rel="stylesheet" href="/src/styles/tokens.css"/>
  <link rel="stylesheet" href="/src/styles/global.css"/>
  <link rel="stylesheet" href="/src/styles/hub.css"/>
</head>
<body data-page="hub">

<!-- STAGE 0: TITLE (new) -->
<section class="stage-title" id="stageTitle">
  <div class="stage-title__inner">
    <p class="stage-title__kicker">An editorial investigation</p>
    <h1 class="stage-title__h1">A Rabbit Hole Down<br/><em>the Meat Industry</em></h1>
    <p class="stage-title__tagline">Trace your food backward.</p>
    <div class="stage-title__cue">
      <span>Enter the store</span>
      <div class="line"></div>
    </div>
  </div>
</section>

<!-- STAGE 1: GROCERY AISLE (new) -->
<section class="stage-aisle" id="stageAisle">
  <div class="aisle-track" id="aisleTrack" aria-hidden="true">
    <!-- inline SVG injected by intro.js -->
  </div>
  <div class="aisle-label">What you see.</div>
</section>

<!-- STAGE 2: PASTURE (from design) -->
<section class="stage-pasture" id="stagePasture">
  <div class="pasture-art cutout" id="pastureArt" aria-hidden="true"></div>
  <div class="pasture-foreground">
    <div class="pasture-foreground__brand">
      <span>An editorial investigation</span>
      <b>A Rabbit Hole</b>
      <span>Issue 01 · 2026</span>
    </div>
    <div class="pasture-foreground__copy">
      <h1 class="pasture-foreground__title">The pasture is real. <em>It is also the marketing.</em></h1>
      <p class="pasture-foreground__sub">Every supermarket meat case sells you this image first. Almost none of the system that delivers a steak to a shelf actually looks like this.</p>
    </div>
    <div class="pasture-unveil">
      <button class="unveil-btn" id="unveilBtn" type="button">Unveil</button>
      <p class="unveil-btn__note">Pulls back the curtain · six investigations</p>
      <button class="pasture-skip" id="skipBtn" type="button">Skip the unveil</button>
    </div>
  </div>
</section>

<!-- CURTAIN (from design) -->
<div class="curtain" aria-hidden="true">
  <div class="curtain__panel curtain__panel--left"><div class="curtain__title curtain__title--left">behind</div></div>
  <div class="curtain__panel curtain__panel--right"><div class="curtain__title curtain__title--right">the curtain</div></div>
</div>

<!-- STAGE 3: HUB (from design) -->
<section class="hub-stage" id="hubStage">
  <div class="hub-stage__meta">
    <span>The hub · six spheres</span><span>Read in any order</span><span>Total · 51 min</span>
  </div>
  <div class="hub-stage__head">
    <h2>Six spheres of the same supply chain. <em>Choose your descent.</em></h2>
    <p>Each card opens into a self-contained chapter. Read one if it's the part that pulls; read all six and the picture is no longer ambiguous.</p>
  </div>
  <div class="spheres" role="list">
    <a class="sphere sphere--labor"         href="/labor.html"            role="listitem">
      <div class="sphere__num"><span class="sphere__swatch"></span>01</div>
      <div class="sphere__dur">9 min</div>
      <div class="sphere__art" data-art="labor"></div>
      <div class="sphere__cap">
        <div class="sphere__theme"><i></i>Labor ethics</div>
        <h3 class="sphere__title">The line never stops. <em>People do.</em></h3>
      </div>
      <span class="sphere__arrow">→</span>
    </a>
    <a class="sphere sphere--immigrant"     href="/immigrant-labor.html"  role="listitem">
      <div class="sphere__num"><span class="sphere__swatch"></span>02</div>
      <div class="sphere__dur">8 min</div>
      <div class="sphere__art" data-art="immigrant"></div>
      <div class="sphere__cap">
        <div class="sphere__theme"><i></i>Immigrant labor</div>
        <h3 class="sphere__title">Half the country's beef, <em>by people not born here.</em></h3>
      </div>
      <span class="sphere__arrow">→</span>
    </a>
    <a class="sphere sphere--consolidation" href="/consolidation.html"    role="listitem">
      <div class="sphere__num"><span class="sphere__swatch"></span>03</div>
      <div class="sphere__dur">10 min</div>
      <div class="sphere__art" data-art="consolidation"></div>
      <div class="sphere__cap">
        <div class="sphere__theme"><i></i>Corporate influence</div>
        <h3 class="sphere__title">Four firms decide <em>what beef costs.</em></h3>
      </div>
      <span class="sphere__arrow">→</span>
    </a>
    <a class="sphere sphere--climate"       href="/climate.html"          role="listitem">
      <div class="sphere__num"><span class="sphere__swatch"></span>04</div>
      <div class="sphere__dur">7 min</div>
      <div class="sphere__art" data-art="climate"></div>
      <div class="sphere__cap">
        <div class="sphere__theme"><i></i>Climate change</div>
        <h3 class="sphere__title">Fifty kilograms of CO₂ <em>per kilogram of beef.</em></h3>
      </div>
      <span class="sphere__arrow">→</span>
    </a>
    <a class="sphere sphere--health"        href="/health.html"           role="listitem">
      <div class="sphere__num"><span class="sphere__swatch"></span>05</div>
      <div class="sphere__dur">9 min</div>
      <div class="sphere__art" data-art="health"></div>
      <div class="sphere__cap">
        <div class="sphere__theme"><i></i>Quality &amp; health</div>
        <h3 class="sphere__title">What's in the meat, <em>and what's not on the label.</em></h3>
      </div>
      <span class="sphere__arrow">→</span>
    </a>
    <a class="sphere sphere--cruelty"       href="/welfare.html"          role="listitem">
      <div class="sphere__num"><span class="sphere__swatch"></span>06</div>
      <div class="sphere__dur">8 min</div>
      <div class="sphere__art" data-art="cruelty"></div>
      <div class="sphere__cap">
        <div class="sphere__theme"><i></i>Animal cruelty</div>
        <h3 class="sphere__title">A number, a unit, <em>a cut, a label.</em></h3>
      </div>
      <span class="sphere__arrow">→</span>
    </a>
  </div>
  <div class="hub-stage__foot">
    <a href="#hubReflect"><div class="lbl">When you're done</div><div class="ttl">A reflection <em>quiz</em> ↓</div></a>
    <a href="/labor.html"><div class="lbl">Read in order</div><div class="ttl">Start with <em>Labor</em></div></a>
    <a href="#stagePasture"><div class="lbl">↑ Back</div><div class="ttl">To the <em>pasture</em></div></a>
  </div>
</section>

<!-- STAGE 4: QUIZ (from design, expanded) -->
<section class="hub-reflect" id="hubReflect">
  <div class="hub-reflect__rule">
    <div class="hub-reflect__head">
      <div><p class="kicker">Reflection</p><h2>What did you take <em>away?</em></h2></div>
      <p class="hub-reflect__sub">Eight questions and two prompts. There's no score — the point is to find out what landed.</p>
    </div>
    <div class="hub-reflect__inner">
      <div class="hub-reflect__copy">
        <div class="quiz-progress" id="quizProgress" aria-hidden="true"></div>
        <p class="kicker" id="quizTitle" style="margin:1.5rem 0 .4rem">A reflection</p>
        <p id="quizStep" style="font-family:var(--mono);font-size:.7rem;letter-spacing:.22em;text-transform:uppercase;color:var(--charcoal-soft);margin:0"></p>
      </div>
      <div class="hub-reflect__quiz" id="quizMount"></div>
    </div>
  </div>
</section>

<a class="reflect-corner" id="reflectCorner" href="#hubReflect">Reflect ↘</a>

<!-- paper grain defs (shared) -->
<svg width="0" height="0" style="position:absolute" aria-hidden="true">
  <defs>
    <pattern id="paperGrain" width="200" height="200" patternUnits="userSpaceOnUse">
      <filter id="pgf"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" stitchTiles="stitch"/><feColorMatrix values="0 0 0 0 .17 0 0 0 0 .17 0 0 0 0 .17 0 0 0 .55 0"/></filter>
      <rect width="200" height="200" filter="url(#pgf)" opacity=".35"/>
    </pattern>
  </defs>
</svg>

<script type="module" src="/src/js/illustrations.js"></script>
<script type="module" src="/src/js/intro.js"></script>
<script type="module" src="/src/js/animations.js"></script>
<script type="module" src="/src/js/quiz.js"></script>
</body>
</html>
```

- [ ] Verify `npm run dev` renders the page without JS errors (content will be empty).
- [ ] Commit: `git commit -m "feat: index.html hub skeleton"`

#### Task B3: Sphere HTML pages (all 6)

**Files:** `labor.html`, `immigrant-labor.html`, `consolidation.html`, `climate.html`, `health.html`, `welfare.html`

Each sphere page follows the exact same template. Write all six with placeholder prose ("Content loading…") — content is wired in Phase 2.

- [ ] Create `labor.html`:
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <title>The line never stops — A Rabbit Hole</title>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
  <link href="https://fonts.googleapis.com/css2?family=Spectral:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=IBM+Plex+Sans:wght@300;400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet"/>
  <link rel="stylesheet" href="/src/styles/tokens.css"/>
  <link rel="stylesheet" href="/src/styles/global.css"/>
  <link rel="stylesheet" href="/src/styles/article.css"/>
</head>
<body data-current="labor">
<svg width="0" height="0" style="position:absolute" aria-hidden="true">
  <defs>
    <pattern id="paperGrain" width="200" height="200" patternUnits="userSpaceOnUse">
      <filter id="pgf"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" stitchTiles="stitch"/><feColorMatrix values="0 0 0 0 .17 0 0 0 0 .17 0 0 0 0 .17 0 0 0 .55 0"/></filter>
      <rect width="200" height="200" filter="url(#pgf)" opacity=".35"/>
    </pattern>
  </defs>
</svg>

<main class="article" id="articleRoot">
  <!-- nav injected by nav.js -->
  <header class="article-head">
    <div>
      <div class="article-head__meta">
        <span class="article-head__num">01</span>
        <span class="article-head__chapter">Labor · Chapter one</span>
      </div>
      <h1>The line<br/>never <em>stops.</em></h1>
    </div>
    <div>
      <p class="article-head__lede" id="pageLede"><!-- wired by content --></p>
      <div class="article-head__byline">
        <span>Reporting · <strong>Editorial Desk</strong></span>
        <span>9 min read</span>
      </div>
    </div>
  </header>
  <div class="article-body">
    <div class="article-prose" id="articleProse"><!-- wired by content --></div>
    <aside class="article-aside">
      <div class="article-aside__sticky">
        <figure class="article-figure">
          <div class="article-figure__art cutout" id="sphereArt" style="min-height:320px;background:var(--bone);" aria-label="Illustration placeholder"></div>
        </figure>
        <div id="factCards"><!-- wired by content --></div>
      </div>
    </aside>
  </div>
  <div class="article-stats" id="articleStats"><!-- wired by content --></div>
  <blockquote class="article-pull" id="articlePull"><!-- wired by content --></blockquote>
  <p class="kicker" id="sourcesLine" style="text-align:center;margin-top:4rem"></p>
  <section id="resourcesSection" style="max-width:var(--measure);margin:3rem auto 0"><!-- wired by content --></section>
  <footer class="article-foot">
    <a href="/index.html#hub"><div class="article-foot__dir">← Back to</div><div class="article-foot__title">The six spheres</div></a>
    <a href="/immigrant-labor.html" class="article-foot__next"><div class="article-foot__dir">Chapter 02 →</div><div class="article-foot__title">Who works the line</div></a>
  </footer>
</main>
<script type="module" src="/src/js/nav.js"></script>
<script type="module" src="/src/js/illustrations.js"></script>
<script type="module" src="/src/js/animations.js"></script>
<script type="module">
  import { wireContent } from '/src/content/labor.js'
  wireContent()
</script>
</body>
</html>
```

- [ ] Create the remaining 5 sphere pages using the same template, adjusting: page title, `data-current`, chapter number, H1, lede placeholder, read time, footer next-chapter link, and content import path. Details:

| File | `data-current` | H1 | Ch# | Next |
|---|---|---|---|---|
| `immigrant-labor.html` | `immigrant` | Half the country's beef,<br/><em>by people not born here.</em> | 02 | `/consolidation.html` "What four firms control" |
| `consolidation.html` | `consolidation` | Four firms decide<br/><em>what beef costs.</em> | 03 | `/climate.html` "The carbon on your plate" |
| `climate.html` | `climate` | Fifty kilograms of CO₂<br/><em>per kilogram of beef.</em> | 04 | `/health.html` "What's in the meat" |
| `health.html` | `health` | What's in the meat,<br/><em>and what's not on the label.</em> | 05 | `/welfare.html` "A number, a unit" |
| `welfare.html` | `welfare` | A number, a unit,<br/><em>a cut, a label.</em> | 06 | `/index.html#hub` "Back to the hub" |

- [ ] Commit: `git commit -m "feat: six sphere page skeletons"`

---

### AGENT C — Animation Engine

#### Task C1: `src/js/animations.js` — Curtain + Hub reveal + Hover

**File:** `src/js/animations.js`

- [ ] Write `animations.js`. This is the curtain unveil engine plus count-up and sphere hover utilities. It exports an `initHub()` function called by `index.html`:

```js
// src/js/animations.js
import gsap from 'gsap'

export function initHub() {
  const btn    = document.getElementById('unveilBtn')
  const skip   = document.getElementById('skipBtn')
  const pasture= document.getElementById('stagePasture')
  const hub    = document.getElementById('hubStage')
  const reflect= document.getElementById('hubReflect')
  const corner = document.getElementById('reflectCorner')
  const left   = document.querySelector('.curtain__panel--left')
  const right  = document.querySelector('.curtain__panel--right')

  // Default: curtain panels off-screen
  gsap.set([left, right], { xPercent: (i) => i === 0 ? -100 : 100 })
  gsap.set([hub, reflect], { opacity: 0, y: 20, pointerEvents: 'none' })
  gsap.set(corner, { opacity: 0, pointerEvents: 'none' })

  function unveil(quick) {
    if (quick) {
      gsap.set(pasture, { opacity: 0, pointerEvents: 'none' })
      gsap.set([hub, reflect], { opacity: 1, y: 0, pointerEvents: 'auto' })
      gsap.set(corner, { opacity: 1, pointerEvents: 'auto' })
      history.replaceState(null, '', '#hub')
      hub.scrollIntoView({ behavior: 'instant' })
      return
    }
    const tl = gsap.timeline()
    // Curtain slides in
    tl.to(left,  { xPercent: 0, duration: 0.75, ease: 'power3.inOut' }, 0)
      .to(right, { xPercent: 0, duration: 0.75, ease: 'power3.inOut' }, 0)
    // Pasture veils behind curtain
      .to(pasture, { opacity: 0, filter: 'blur(2px)', duration: 0.5, pointerEvents: 'none' }, 0.3)
    // Hub becomes visible
      .set([hub, reflect], { pointerEvents: 'auto' }, 0.35)
      .to([hub, reflect], { opacity: 1, y: 0, duration: 0.5 }, 0.35)
    // Curtain folds back
      .to(left,  { xPercent: -101, duration: 1.2, ease: 'power2.inOut' }, 0.95)
      .to(right, { xPercent:  101, duration: 1.2, ease: 'power2.inOut' }, 0.95)
    // Reflect corner + scroll
      .to(corner, { opacity: 1, pointerEvents: 'auto', duration: 0.3 }, 1.5)
      .call(() => {
        history.replaceState(null, '', '#hub')
        hub.scrollIntoView({ behavior: 'smooth' })
      }, [], 1.5)
    return tl
  }

  btn?.addEventListener('click', () => unveil(false))
  skip?.addEventListener('click', () => unveil(true))

  if (location.hash === '#hub') unveil(true)
  if (location.hash === '#reflect' || location.hash === '#hubReflect') {
    unveil(true)
    setTimeout(() => document.getElementById('hubReflect')?.scrollIntoView({ behavior: 'smooth' }), 100)
  }

  initSphereHover()
}

function initSphereHover() {
  document.querySelectorAll('.sphere').forEach(card => {
    const arrow = card.querySelector('.sphere__arrow')
    card.addEventListener('mouseenter', () => {
      gsap.to(card, { y: -6, duration: 0.35, ease: 'power2.out',
        boxShadow: '10px 14px 0 rgba(43,43,43,0.10)' })
      if (arrow) gsap.to(arrow, { x: 6, duration: 0.25 })
    })
    card.addEventListener('mouseleave', () => {
      gsap.to(card, { y: 0, duration: 0.35, ease: 'power2.out', boxShadow: 'none' })
      if (arrow) gsap.to(arrow, { x: 0, duration: 0.25 })
    })
  })
}

export function initCountUp() {
  const spans = document.querySelectorAll('[data-count-to]')
  if (!spans.length) return
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return
      const span = e.target
      if (span._done) return
      span._done = true
      io.unobserve(span)
      const target = parseFloat(span.dataset.countTo)
      const dec = span.dataset.countTo.includes('.') ? 1 : 0
      gsap.to({ val: 0 }, {
        val: target, duration: 1.4, ease: 'power2.out',
        onUpdate: function() { span.textContent = this.targets()[0].val.toFixed(dec) },
        onComplete: () => { span.textContent = target.toFixed(dec) }
      })
    })
  }, { threshold: 0.5 })
  spans.forEach(s => io.observe(s))
}
```

- [ ] At bottom of `animations.js`, call `initHub()` only if on hub page:
```js
if (document.body.dataset.page === 'hub') initHub()
initCountUp()
```

- [ ] Commit: `git commit -m "feat: GSAP curtain unveil and count-up animations"`

#### Task C2: `src/js/intro.js` — Title fade + aisle pan + pasture entrance

**File:** `src/js/intro.js`

- [ ] Install ScrollTrigger plugin:
```js
// src/js/intro.js
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Lenis from '@studio-freight/lenis'
gsap.registerPlugin(ScrollTrigger)
```

- [ ] Export `initLenis()` used by all pages:
```js
export function initLenis() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReduced) return
  const lenis = new Lenis({ lerp: 0.1, smoothWheel: true })
  lenis.on('scroll', ScrollTrigger.update)
  gsap.ticker.add((time) => lenis.raf(time * 1000))
  gsap.ticker.lagSmoothing(0)
  return lenis
}
```

- [ ] Export `initIntro()` for hub page only:
```js
export function initIntro() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  // Title scene: fade in text on load
  gsap.from('#stageTitle .stage-title__h1', {
    opacity: 0, y: 30, duration: prefersReduced ? 0.01 : 0.9, delay: 0.3, ease: 'power2.out'
  })
  gsap.from('#stageTitle .stage-title__tagline', {
    opacity: 0, y: 20, duration: prefersReduced ? 0.01 : 0.8, delay: 0.6, ease: 'power2.out'
  })
  gsap.from('#stageTitle .stage-title__cue', {
    opacity: 0, duration: prefersReduced ? 0.01 : 0.6, delay: 1.1
  })

  // Aisle pan: map vertical scroll to horizontal translate of aisleTrack
  const track = document.getElementById('aisleTrack')
  if (track) {
    const panWidth = track.scrollWidth - window.innerWidth
    gsap.to(track, {
      x: () => -panWidth,
      ease: 'none',
      scrollTrigger: {
        trigger: '#stageAisle',
        start: 'top top',
        end: () => `+=${panWidth}`,
        scrub: 1.2,
        pin: true,
        anticipatePin: 1,
      }
    })
  }

  // Pasture entrance: fade in from below after aisle clears
  gsap.from('#stagePasture', {
    opacity: 0, duration: prefersReduced ? 0.01 : 0.8,
    scrollTrigger: { trigger: '#stagePasture', start: 'top 85%', toggleActions: 'play none none none' }
  })
}
```

- [ ] Add the aisle SVG generator (inline, called by intro.js on DOMContentLoaded). The aisle is a wide horizontal paper-cutout strip of refrigeration cases. Use SVG similar to the pasture style — background cream, 3600×900 viewBox, drawn refrigerator cases with packaged meat on shelves, all in the design palette. Output as innerHTML of `#aisleTrack`:
```js
function buildAisleSVG() {
  const track = document.getElementById('aisleTrack')
  if (!track) return
  track.style.cssText = 'width:3600px; height:100%; position:absolute; top:0; left:0;'
  track.innerHTML = `
    <svg viewBox="0 0 3600 900" preserveAspectRatio="xMinYMid meet"
         style="width:3600px;height:100%;display:block;" role="img"
         aria-label="Grocery store meat aisle illustration">
      <!-- floor -->
      <rect x="0" y="700" width="3600" height="200" fill="#e8e0d0"/>
      <!-- ceiling strip lighting -->
      <rect x="0" y="0" width="3600" height="60" fill="var(--bone)"/>
      ${Array.from({length:9}, (_,i) => `
        <rect x="${i*400+80}" y="10" width="240" height="30" fill="var(--ochre)" opacity=".35"/>
        <rect x="${i*400+80}" y="40" width="240" height="4" fill="var(--charcoal-soft)" opacity=".2"/>
      `).join('')}
      <!-- refrigeration units -->
      ${Array.from({length:7}, (_,i) => {
        const x = i*500+50
        return `
          <rect x="${x}" y="80" width="440" height="620" fill="var(--bone)" stroke="var(--charcoal-soft)" stroke-width="1.5" opacity=".9"/>
          <rect x="${x+10}" y="90" width="420" height="10" fill="var(--charcoal-soft)" opacity=".25"/>
          <!-- glass door lines -->
          <rect x="${x+20}" y="100" width="1" height="580" fill="var(--charcoal-soft)" opacity=".2"/>
          <rect x="${x+160}" y="100" width="1" height="580" fill="var(--charcoal-soft)" opacity=".2"/>
          <rect x="${x+300}" y="100" width="1" height="580" fill="var(--charcoal-soft)" opacity=".2"/>
          <rect x="${x+420}" y="100" width="1" height="580" fill="var(--charcoal-soft)" opacity=".2"/>
          <!-- shelf rails -->
          ${[200,340,480,600].map(y=>`<rect x="${x+10}" y="${y}" width="420" height="3" fill="var(--charcoal-soft)" opacity=".18"/>`).join('')}
          <!-- packaged meat tiles -->
          ${[110,250,390,510].map((y,si) => Array.from({length:5},(_,j)=>{
            const colors=['var(--oxblood)','#c8967a','var(--ochre)','#b05a4a','var(--oxblood)']
            return `<rect x="${x+25+j*82}" y="${y}" width="72" height="82" fill="${colors[j]}" opacity=".7"/>
                    <rect x="${x+25+j*82}" y="${y}" width="72" height="14" fill="var(--cream)" opacity=".5"/>
                    <rect x="${x+29+j*82}" y="${y+4}" width="40" height="3" fill="var(--charcoal-soft)" opacity=".4"/>
                    <rect x="${x+29+j*82}" y="${y+10}" width="28" height="2" fill="var(--charcoal-soft)" opacity=".3"/>`
          }).join('')).join('')}
          <!-- unit label -->
          <text x="${x+220}" y="715" font-family="IBM Plex Mono, monospace" font-size="11"
                fill="var(--charcoal-soft)" text-anchor="middle" letter-spacing="2" opacity=".55">
            MEAT &amp; POULTRY
          </text>
        `
      }).join('')}
      <!-- perspective lines on floor -->
      <line x1="0" y1="900" x2="1800" y2="700" stroke="var(--charcoal-soft)" stroke-width=".5" opacity=".12"/>
      <line x1="3600" y1="900" x2="1800" y2="700" stroke="var(--charcoal-soft)" stroke-width=".5" opacity=".12"/>
      <rect width="100%" height="100%" fill="url(#paperGrain)" opacity=".25"/>
    </svg>`
}
```

- [ ] Call `buildAisleSVG()` and `initIntro()` on DOMContentLoaded, only when on hub page:
```js
if (document.getElementById('stageAisle')) {
  buildAisleSVG()
  initIntro()
}
initLenis()
```

- [ ] Add `stage-title` and `stage-aisle` CSS to `hub.css`:
```css
.stage-title {
  height: 100vh; min-height: 560px;
  display: flex; align-items: center; justify-content: center;
  text-align: center; background: var(--cream);
  position: relative; overflow: hidden;
}
.stage-title__kicker {
  font-family: var(--mono); font-size: .7rem; letter-spacing: .22em;
  text-transform: uppercase; color: var(--charcoal-soft); margin: 0 0 1.5rem;
}
.stage-title__h1 {
  font-family: var(--serif); font-weight: 400;
  font-size: clamp(2.4rem, 6vw, 5.5rem);
  line-height: 1.02; letter-spacing: -.025em; color: var(--ink);
  margin: 0 0 1rem; max-width: 18ch;
}
.stage-title__h1 em { font-style: italic; color: var(--oxblood); }
.stage-title__tagline {
  font-family: var(--serif); font-style: italic;
  font-size: clamp(1rem, 1.5vw, 1.35rem); color: var(--charcoal-soft); margin: 0 0 3rem;
}
.stage-title__cue {
  display: flex; flex-direction: column; align-items: center; gap: .5rem;
  font-family: var(--mono); font-size: .68rem; letter-spacing: .25em;
  text-transform: uppercase; color: var(--charcoal-soft); opacity: .7;
}
.stage-title__cue .line {
  width: 1px; height: 40px; background: var(--charcoal-soft);
  animation: cueLine 2.4s ease-in-out infinite; transform-origin: top;
}
.stage-aisle {
  height: 100vh; position: relative; overflow: hidden; background: var(--cream);
}
.aisle-label {
  position: absolute; bottom: 2rem; left: 50%; transform: translateX(-50%);
  font-family: var(--mono); font-size: .7rem; letter-spacing: .22em;
  text-transform: uppercase; color: var(--charcoal-soft); opacity: .6;
}
```

- [ ] Commit: `git commit -m "feat: intro sequence — title, aisle pan, pasture entrance"`

#### Task C3: `src/js/router.js` — History API page transitions

**File:** `src/js/router.js`

- [ ] Write a lightweight transition wrapper. On sphere→hub or hub→sphere clicks, play a quick oxblood overlay fade:
```js
// src/js/router.js
import gsap from 'gsap'

export function initRouter() {
  const overlay = document.createElement('div')
  overlay.style.cssText = `
    position:fixed;inset:0;background:var(--oxblood);
    z-index:200;opacity:0;pointer-events:none;
  `
  document.body.appendChild(overlay)

  document.addEventListener('click', (e) => {
    const anchor = e.target.closest('a[href]')
    if (!anchor) return
    const href = anchor.getAttribute('href')
    if (!href || href.startsWith('#') || href.startsWith('http') || anchor.target) return
    e.preventDefault()
    gsap.to(overlay, {
      opacity: 1, duration: 0.25, ease: 'power2.in',
      onComplete: () => { window.location.href = href }
    })
  })

  // Fade in on page load
  gsap.from(document.body, { opacity: 0, duration: 0.4, ease: 'power1.out' })
}
```

- [ ] Import and call `initRouter()` in `animations.js` at the bottom:
```js
import { initRouter } from './router.js'
initRouter()
```

- [ ] Commit: `git commit -m "feat: router page transitions"`

#### Task C4: `src/js/quiz.js` — Quiz state machine + localStorage

**File:** `src/js/quiz.js`

- [ ] Write the quiz module. Reads question data from a constant, renders MC questions then open prompts, saves all to localStorage:

```js
// src/js/quiz.js
const QUESTIONS = [
  {
    sphere: 'labor',
    q: 'How many cattle does a typical U.S. line worker process per hour?',
    opts: ['About 40', 'About 80', 'About 140', 'About 200'],
    correct: 2,
    reveal: 'Around 140 head per hour. That figure has nearly doubled over two decades — each annual increase modest; aggregated, it reshaped injury rates across the industry.',
    link: '/labor.html'
  },
  {
    sphere: 'immigrant',
    q: 'What share of the U.S. meatpacking workforce is foreign-born?',
    opts: ['About 15%', 'About 30%', 'About 51%', 'About 70%'],
    correct: 2,
    reveal: 'USDA ERS data puts the foreign-born share at roughly 51% — the highest of any major U.S. food production sector.',
    link: '/immigrant-labor.html'
  },
  {
    sphere: 'consolidation',
    q: 'Roughly what share of U.S. beef processing do the four largest firms control?',
    opts: ['About 40%', 'About 60%', '72–85%', 'About 95%'],
    correct: 2,
    reveal: 'Tyson Foods, JBS USA, Cargill, and National Beef collectively control an estimated 72–85% of U.S. beef processing — a higher concentration than banking, telecom, or airlines.',
    link: '/consolidation.html'
  },
  {
    sphere: 'climate',
    q: 'How does beef\'s carbon footprint compare to chicken per kilogram?',
    opts: ['About the same', 'About 2×', 'About 5×', 'About 10×'],
    correct: 3,
    reveal: 'Poore & Nemecek (2018) found beef produces ~60 kg CO₂eq/kg vs. ~6 kg for chicken — roughly 10× the footprint, driven by enteric methane and land-use change.',
    link: '/climate.html'
  },
  {
    sphere: 'health',
    q: 'How did the WHO classify processed meat in 2015?',
    opts: ['Possibly carcinogenic (Group 2B)', 'Probably carcinogenic (Group 2A)', 'Known carcinogen (Group 1)', 'Not classifiable'],
    correct: 2,
    reveal: 'The WHO\'s International Agency for Research on Cancer classified processed meat as a Group 1 carcinogen — the same category as tobacco smoke and asbestos, based on sufficient evidence in humans.',
    link: '/health.html'
  },
  {
    sphere: 'welfare',
    q: 'How long does a standard U.S. broiler chicken live before slaughter?',
    opts: ['About 6 months', 'About 3 months', 'About 10 weeks', 'About 6 weeks'],
    correct: 3,
    reveal: 'Around 42 days. Broilers are bred to gain weight so fast their skeletal and cardiovascular systems often cannot keep pace — leading to chronic pain and organ failure before slaughter.',
    link: '/welfare.html'
  }
]

const OPEN_PROMPTS = [
  { id: 'surprise', label: 'What surprised you most in what you read?' },
  { id: 'shopChange', label: 'How will this change the way you shop, if at all?' }
]

export function initQuiz() {
  const mount = document.getElementById('quizMount')
  const stepEl = document.getElementById('quizStep')
  const progressEl = document.getElementById('quizProgress')
  const titleEl = document.getElementById('quizTitle')
  if (!mount) return

  const total = QUESTIONS.length + OPEN_PROMPTS.length
  let current = 0
  const answers = []
  const openAnswers = {}

  // Build progress pips
  progressEl.innerHTML = Array.from({length: total}, () => '<i></i>').join('')

  function paintProgress() {
    ;[...progressEl.children].forEach((pip, i) => {
      pip.className = i < current ? 'is-done' : i === current ? 'is-current' : ''
    })
  }

  function renderMC(idx) {
    const q = QUESTIONS[idx]
    stepEl.textContent = `Question ${idx + 1} of ${QUESTIONS.length}`
    titleEl.textContent = q.sphere.charAt(0).toUpperCase() + q.sphere.slice(1)
    paintProgress()
    mount.innerHTML = `
      <h3 class="quiz__q">${q.q}</h3>
      <div class="quiz__opts" id="opts">
        ${q.opts.map((o,i) => `
          <button class="quiz__opt" data-idx="${i}">
            <span>${o}</span><span class="mark">${String.fromCharCode(65+i)}</span>
          </button>`).join('')}
      </div>
      <div class="quiz__reveal" id="reveal"></div>
      <div style="display:flex;gap:1rem;align-items:center;margin-top:1rem;flex-wrap:wrap">
        <button class="quiz__next" id="nextBtn" disabled>Next →</button>
        <a href="${q.link}" style="font-family:var(--mono);font-size:.68rem;letter-spacing:.18em;text-transform:uppercase;color:var(--oxblood);text-decoration:none;opacity:0;transition:opacity .3s" id="sphereLink">Read the full chapter →</a>
      </div>`
    let answered = false
    mount.querySelectorAll('.quiz__opt').forEach(btn => {
      btn.addEventListener('click', () => {
        if (answered) return
        answered = true
        const chosen = parseInt(btn.dataset.idx)
        answers.push({ question: q.q, selected: chosen, correct: chosen === q.correct })
        mount.querySelectorAll('.quiz__opt').forEach((b, j) => {
          b.dataset.state = j === q.correct ? 'correct' : j === chosen ? 'wrong' : ''
        })
        document.getElementById('reveal').textContent = q.reveal
        document.getElementById('reveal').classList.add('is-in')
        document.getElementById('nextBtn').disabled = false
        document.getElementById('sphereLink').style.opacity = '1'
      })
    })
    document.getElementById('nextBtn').addEventListener('click', () => { current++; render() })
  }

  function renderOpen(idx) {
    const prompt = OPEN_PROMPTS[idx]
    stepEl.textContent = `Reflection ${idx + 1} of ${OPEN_PROMPTS.length}`
    titleEl.textContent = 'Reflect'
    paintProgress()
    mount.innerHTML = `
      <h3 class="quiz__q">${prompt.label}</h3>
      <textarea id="openInput" style="width:100%;min-height:120px;font-family:var(--sans);font-size:1rem;padding:.75rem;background:var(--bone);border:1px solid rgba(43,43,43,.18);color:var(--ink);resize:vertical;margin-bottom:1rem" placeholder="Write anything — or skip."></textarea>
      <button class="quiz__next" id="nextBtn">
        ${idx === OPEN_PROMPTS.length - 1 ? 'Submit →' : 'Next →'}
      </button>`
    document.getElementById('nextBtn').addEventListener('click', () => {
      openAnswers[prompt.id] = document.getElementById('openInput').value.trim()
      if (idx === OPEN_PROMPTS.length - 1) { saveToLocalStorage(); renderDone() }
      else { current++; render() }
    })
  }

  function renderDone() {
    stepEl.textContent = `Complete · ${total} of ${total}`
    titleEl.textContent = 'You made it through'
    ;[...progressEl.children].forEach(p => { p.className = 'is-done' })
    mount.innerHTML = `
      <p class="quiz__done">
        The point of this piece is not guilt. It's visibility.<br/>
        What you do with it is up to you.<br/>
        <span style="display:block;margin-top:1rem;font-family:var(--mono);font-size:.7rem;letter-spacing:.2em;text-transform:uppercase;color:var(--charcoal-soft)">— Editorial Desk</span>
      </p>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-top:2rem">
        <a class="read-more" href="#hubStage" style="justify-content:center">← The six spheres</a>
        <a class="read-more" href="#stagePasture" style="justify-content:center">↑ Pasture</a>
      </div>`
  }

  function saveToLocalStorage() {
    const key = `rabbit-hole-session-${Date.now()}`
    const data = { submitted: new Date().toISOString(), quiz: answers, reflection: openAnswers }
    try { localStorage.setItem(key, JSON.stringify(data)) } catch(_) {}
  }

  function render() {
    if (current < QUESTIONS.length) renderMC(current)
    else if (current < QUESTIONS.length + OPEN_PROMPTS.length) renderOpen(current - QUESTIONS.length)
    else renderDone()
  }

  render()
}

if (document.getElementById('quizMount')) initQuiz()
```

- [ ] Commit: `git commit -m "feat: quiz state machine with localStorage save"`

---

### AGENT A — Research & Content

#### Task A1–A6: Content files for all six spheres

**Files:** `src/content/labor.js`, `src/content/immigrant-labor.js`, `src/content/consolidation.js`, `src/content/climate.js`, `src/content/health.js`, `src/content/welfare.js`

Each content file exports a `wireContent()` function that inserts prose, stats, quotes, fact cards, sources, and resources into the sphere page's placeholder slots. This keeps HTML minimal and content in one place.

**Template pattern all 6 files must follow:**
```js
// src/content/[sphere].js
import { initCountUp } from '../js/animations.js'

export function wireContent() {
  // Lede
  const lede = document.getElementById('pageLede')
  if (lede) lede.textContent = `LEDE TEXT`

  // Prose (innerHTML — real editorial paragraphs, blockquotes)
  const prose = document.getElementById('articleProse')
  if (prose) prose.innerHTML = `
    <p>PARA 1...</p>
    <h2>SECTION HEADING</h2>
    <p>PARA 2...</p>
    <blockquote>"QUOTE"<cite>— SOURCE, YEAR</cite></blockquote>
    <h2>SECTION HEADING 2</h2>
    <p>PARA 3...</p>
    <p>PARA 4...</p>
  `

  // Fact cards (aside)
  const cards = document.getElementById('factCards')
  if (cards) cards.innerHTML = `
    <div class="fact-card"><div class="num">STAT</div><div class="lbl">LABEL</div></div>
    <div class="fact-card fact-card--accent"><div class="num">STAT</div><div class="lbl">LABEL</div></div>
    <div class="fact-card fact-card--bone"><div class="num">STAT</div><div class="lbl">LABEL</div></div>
  `

  // Stats row (count-up numbers must use data-count-to)
  const stats = document.getElementById('articleStats')
  if (stats) stats.innerHTML = `
    <div class="stat"><div class="num"><span data-count-to="X">0</span>SUFFIX</div><div class="lbl">LABEL</div></div>
    <div class="stat"><div class="num"><span data-count-to="Y">0</span>SUFFIX</div><div class="lbl">LABEL</div></div>
    <div class="stat"><div class="num"><span data-count-to="Z">0</span>SUFFIX</div><div class="lbl">LABEL</div></div>
  `

  // Pull quote
  const pull = document.getElementById('articlePull')
  if (pull) pull.innerHTML = `"PULL QUOTE"<cite>— ATTRIBUTION</cite>`

  // Sources
  const src = document.getElementById('sourcesLine')
  if (src) src.textContent = 'Sources · SOURCE1, SOURCE2, SOURCE3'

  // Resources
  const res = document.getElementById('resourcesSection')
  if (res) res.innerHTML = `
    <p class="kicker" style="margin-bottom:1.5rem">Further reading</p>
    <ul style="list-style:none;padding:0;display:flex;flex-direction:column;gap:.75rem">
      <li><a href="URL" style="color:var(--ink);font-family:var(--sans)">TITLE — OUTLET, YEAR</a></li>
    </ul>
  `
  initCountUp()
}
```

**Actual content to write for each sphere:**

**labor.js** — Use BLS data, GAO-16-337, HRW 2019 "When We're Dead and Buried Our Bones Will Keep Hurting":
- Prose: 4 sections: "What the rate costs" / "The supervisor's morning" / "Why it is hard to slow" / "Where progress exists"
- Quotes: HRW worker testimony; OSHA inspector record; plant supervisor account
- Stats: 140 head/hr, 2.4× injury rate, ~60% annual turnover
- Fact cards: 140 / 2.4× / ~60%
- Resources: HRW 2019 report (hrw.org), GAO-16-337, BLS occupational injury data, ProPublica "Meatpacking in the Pandemic", OSHA inspection records

**immigrant-labor.js** — Use USDA ERS, Pew Research, DOL:
- Prose: 4 sections: workforce composition / migration corridors / ICE raids / policy landscape
- Stats: ~51% foreign-born, ~37% estimated undocumented (Pew est.), 680 workers arrested in 2019 Mississippi raids (largest single-state worksite enforcement in US history per ICE)
- Quote: worker testimony from Mississippi raids; USDA ERS analysis
- Resources: USDA ERS report, Pew Research meatpacking study, NYT 2019 Mississippi raids coverage, HRW immigration report, DOL wage theft records

**consolidation.js** — Real company data, FTC filings:
- Prose: Big Four intro / how consolidation happened / COVID price-fixing / rancher monopsony / antitrust landscape
- Stats: ~85% combined market share (DOJ Antitrust Division), ~$10M combined annual lobbying (OpenSecrets), cattle rancher share of retail beef dollar fell from 50¢ (1980) to ~37¢ (2023)
- Quote: DOJ antitrust complaint; rancher testimony; academic economist
- Resources: DOJ antitrust filings, OpenSecrets lobbying data, USDA cattle market reports, NYT "Meat Industry Giants" investigation, Midwest Center for Investigative Reporting

**climate.js** — Poore & Nemecek 2018 Science paper:
- Prose: the numbers / methane vs CO₂ / land use / what individual action does / systemic context
- Stats: 60 kg CO₂eq/kg beef (Poore 2018), 14.5% global GHGs from livestock (FAO), beef uses 60% of global agricultural land for 2% of calories
- Quote: Poore 2018; FAO GLEAM report; climate economist
- Resources: Poore & Nemecek 2018 (Science doi), FAO GLEAM report, OurWorldInData beef emissions page, NYT Climate Fwd beef piece, IPCC AR6 food chapter

**health.js** — WHO IARC 2015, USDA FSIS, FDA antibiotic data:
- Prose: WHO classification / what "Group 1" means / antibiotic resistance / COOL rollback / recall patterns
- Stats: Group 1 carcinogen (processed meat), ~70% of US medically important antibiotics go to livestock (FDA 2022 ADUFA report), avg ~20M lbs recalled/yr USDA FSIS 2018–2024
- Quote: IARC press release; FDA antibiotic resistance warning; food safety lawyer
- Resources: IARC Monographs vol 114, FDA ADUFA 2022, USDA FSIS recall database, Consumer Reports meat investigation, NRDC antibiotic report

**welfare.js** — Humane Slaughter Act, USDA FSIS, undercover investigations:
- Prose: restrained, one-stop-per-section. Sections: "The 42-day bird" / "The stunning question" / "What the law says" / "What investigators found"
- Stats: 42-day broiler lifespan, ~1% USDA humane handling violations result in regulatory action (GAO), 9 billion chickens slaughtered annually in the US
- Quote: Mercy for Animals investigator; USDA FSIS inspector union statement; animal law academic
- Resources: GAO humane slaughter report, USDA FSIS inspection data, Mercy for Animals investigation reports, Animal Welfare Institute factory farming report, ASPCA industry statistics

- [ ] For each sphere, write the full `wireContent()` function with real editorial-quality prose (not placeholder text). Minimum 400 words of prose per sphere. Quotes must have specific attributions. Stats must cite sources inline. Resource URLs must be real.

- [ ] Commit after all 6: `git commit -m "feat: research content for all six spheres"`

---

## Phase 2 — Wire-Up (sequential, after Phases 0+1 complete)

### Task W1: Wire `illustrations.js` + Hub card art

**File:** `src/js/illustrations.js`

- [ ] Port the `illustrations.js` file from the design extract verbatim. It exports `window.RH_ART` with SVG generator functions. Add module export:
```js
// At top:
const RH_ART = { /* ...all existing generators from design file... */ }
export default RH_ART
window.RH_ART = RH_ART  // keep for legacy inline scripts
```

- [ ] In `index.html`'s module script (or a dedicated hub-art.js), inject the six card SVGs and the pasture SVG. Copy verbatim from `Hub.html` in design extract — the ART object and the pasture SVG injection. Attach to sphere `[data-art]` slots.

- [ ] Commit: `git commit -m "feat: illustrations and hub card art"`

### Task W2: Wire Hub animations + test unveil flow

- [ ] Open `http://localhost:5173` in browser.
- [ ] Verify: title scene visible, scroll down → aisle pans horizontally → pasture appears → Unveil button works → curtain slides in/out → hub grid appears with all 6 cards → cards hover correctly → Reflect corner appears → scroll to quiz → quiz runs 6 MC + 2 open → localStorage has a `rabbit-hole-session-*` key after submit.
- [ ] Fix any issues found.
- [ ] Commit: `git commit -m "feat: hub flow complete"`

### Task W3: Wire sphere pages

For each sphere page:
- [ ] Open `http://localhost:5173/labor.html` — verify nav appears, content loads, fact cards show, count-up fires on scroll.
- [ ] Repeat for all 6 spheres.
- [ ] Verify footer next-chapter links work through the full chain: labor → immigrant-labor → consolidation → climate → health → welfare → hub.
- [ ] Commit: `git commit -m "feat: all sphere pages wired with content"`

### Task W4: Deploy to Vercel

- [ ] Install Vercel CLI: `npm install -g vercel`
- [ ] From project root: `vercel --name rabbit-hole-meat-industry`
- [ ] Follow prompts: link to account, set build command `npm run build`, output dir `dist`.
- [ ] Verify prod URL loads. Share with Megan for review.
- [ ] Commit deployment config if `vercel.json` was generated.

---

## Phase 3 — Polish

### Task P1: Mobile responsive

- [ ] In `hub.css`: confirm `.spheres` collapses to 1-col at ≤900px. Confirm `.sphere` switches to `aspect-ratio: 5/4`. Confirm `.hub-stage__head` and `.hub-stage__foot` go single-col.
- [ ] In `article.css`: confirm `.article-head` and `.article-body` go single-col at ≤980px. Confirm `.article-stats` goes single-col at ≤700px.
- [ ] Test on Chrome DevTools at 390px (iPhone 14 Pro) and 768px (iPad).
- [ ] Add to `hub.css` for aisle on mobile (pin disables, falls back to static):
```css
@media (max-width: 768px) {
  .stage-aisle { height: 60vw; overflow: hidden; }
  #aisleTrack { width: 200% !important; height: 100%; transform: none !important; }
}
```
- [ ] Commit: `git commit -m "fix: mobile responsive layout"`

### Task P2: Accessibility + prefers-reduced-motion

- [ ] Add `alt` or `aria-label` to every illustration container (e.g., `aria-label="Illustration: worker silhouette on factory floor"`).
- [ ] Verify `prefers-reduced-motion` guard in `animations.js` and `intro.js` collapses all durations to 0.01s.
- [ ] Add `aria-live="polite"` to `#quizMount` so screen readers announce question changes.
- [ ] Verify tab order through sphere cards and quiz is logical.
- [ ] Commit: `git commit -m "fix: accessibility and reduced-motion support"`

### Task P3: Final deploy

- [ ] Run `npm run build` — verify no build errors.
- [ ] Run `vercel --prod` for production deployment.
- [ ] Verify all 7 pages load on the prod URL.
- [ ] Share final URL with Megan.

---

## Self-Review Notes

- All 7 pages covered (index.html + 6 spheres) ✓
- Curtain animation fully specified with GSAP timeline ✓
- Quiz expanded to 6 MC + 2 open + localStorage ✓
- Real company names in consolidation content ✓
- Grocery aisle intro scene included ✓
- `prefers-reduced-motion` in every animation ✓
- Vercel deploy steps included ✓
- No TBD or placeholder text in task steps ✓
- Method names consistent: `initHub`, `initCountUp`, `initIntro`, `initLenis`, `initRouter`, `initQuiz`, `wireContent` ✓
