# Design Spec: A Rabbit Hole Down the Meat Industry

**Date:** 2026-05-24  
**Project:** fooded_meggy (Megan Chou, AP HUG passion project, IUSD)  
**Tagline:** "Trace your food backward."  
**Quality bar:** Professional editorial — Pudding.cool / NYT Opinion / Guardian long-form  
**Deploy target:** Vercel, project name `rabbit-hole-meat-industry`

---

## 1. Tech Stack

| Layer | Choice |
|---|---|
| Framework | Vanilla HTML/CSS/JS via Vite |
| Animations | GSAP + ScrollTrigger |
| Smooth scroll | Lenis |
| Routing | History API (light wrapper, no library) |
| Deploy | Vercel |

No React, no Next.js, no component libraries.

---

## 2. Visual Design System

Extracted verbatim from the Claude Design handoff (`Hub.html`, `styles.css`).

### Colors
```css
--cream:         #F4EDE0   /* page background */
--bone:          #EDE4D3   /* card bg, subtle fills */
--oxblood:       #7A1E1E   /* accent, curtain, eyebrows, left-borders */
--sage:          #8A9A7B   /* immigrant + climate dominant */
--ochre:         #C89B3C   /* health dominant */
--charcoal:      #2B2B2B   /* primary text, dark fills */
--charcoal-soft: #3a3735   /* secondary text */
--ink:           #1a1a1a   /* headlines, buttons */
```

### Typography
- **Spectral** (Google Fonts) — editorial serif, headlines, pull quotes, fact card numbers
- **IBM Plex Sans** — body prose
- **IBM Plex Mono** — eyebrows, labels, navigation, chapter markers

### Spacing
- `--measure: 36rem` (prose column max-width)
- `--gutter: clamp(1.5rem, 5vw, 4rem)` (horizontal page padding)

### Effects
- **Paper grain:** SVG `feTurbulence` (baseFrequency 0.85, 2 octaves) tiled 240×240px on body + as `url(#paperGrain)` fill on illustrations
- **Drop shadow:** `--cutout-shadow` — dual drop-shadow at upper-left angle (6px/10px), applied to cutout illustrations via CSS filter

---

## 3. Site Structure

### 3.1 Entry Sequence (3 scenes, all in one scrolling page or short scroll)

**Scene 1 — Title (new, to be added smoothly)**  
Full-viewport cream panel. Centered editorial serif headline "A Rabbit Hole Down the Meat Industry." Tagline italic below: "Trace your food backward." Small "Enter the store →" CTA at bottom. Minimal — no illustration, just type and texture. Fades/scrolls into scene 2.

**Scene 2 — Grocery Aisle Pan (new, horizontal scroll or parallax)**  
Horizontal parallax pan of a refrigerated meat aisle. Paper-cutout illustration: refrigerated cases with packaged ground beef, chicken breasts, steaks, packaged sausages. Clean, sterile, bright. Drives the "this is what you see" contrast. Triggered by vertical scroll mapped to horizontal illustration movement via GSAP ScrollTrigger horizontal pan. Ends with a fade to Scene 3.

**Scene 3 — Pasture + Unveil (existing Hub.html Stage 1)**  
Full-viewport inline SVG pasture: sky, hills, sun, fence, steer, distant farmer. Overlay: editorial brand line, centered title ("The pasture is real. It is also the marketing."), Unveil button + Skip link.

> **Design note:** Scenes 1–2 are additions not in the original Hub.html. They must match the existing visual language exactly and not disrupt the unveil moment. The total intro scroll should feel like a 15–20 second glide, not a slog.

### 3.2 Hub (existing Hub.html Stage 2)

Revealed by curtain unveil from Stage 1. Contains:
- Meta row: "The hub · six spheres / Read in any order / Total · 51 min"
- 2-col header: serif headline + italic description
- 3×2 grid of sphere cards (4:5 aspect ratio, paper-grain overlay)
- Footer: 3 CTAs (Reflection anchor, Start with Labor, Back to pasture)
- **Real company names** in Consolidation card copy (Tyson, JBS, Cargill, National Beef)

**Six sphere cards:**

| # | Sphere | Dominant color | Card title |
|---|---|---|---|
| 01 | Labor Ethics | charcoal | "The line never stops. *People do.*" |
| 02 | Immigrant Labor | sage | "Half the country's beef, *by people not born here.*" |
| 03 | Corporate Influence | oxblood | "Four firms decide *what beef costs.*" |
| 04 | Climate Change | sage | "Fifty kilograms of CO₂ *per kilogram of beef.*" |
| 05 | Quality & Health | ochre | "What's in the meat, *and what's not on the label.*" |
| 06 | Animal Cruelty | oxblood + bone | "A number, a unit, *a cut, a label.*" |

### 3.3 Six Sphere Deep-Dive Pages

Each page uses the same `article` layout template:

**Components per page (in order):**
1. Sticky top nav (`nav.js` — brand → Hub, 6 chapter links, current highlighted)
2. `article-head` — 2-col: chapter number + H1 (left), lede + byline (right)
3. `article-body` — 2-col: prose column (left, 36rem), sticky aside (right)
   - Prose: drop cap, H2 sections, blockquotes with oxblood left border
   - Aside: illustration placeholder (240×320px) + 2–3 fact cards
4. `article-stats` — 3-col stats row with count-up numbers
5. `article-pull` — pull quote with 3px oxblood left border
6. Sources kicker line (mono, centered)
7. Resources section — 5–8 linked further-reading items (real URLs)
8. `article-foot` — ← Back to hub + next chapter →

**Per-sphere content requirements:**
- 400–600 words editorial prose (serious, factual, no sensationalism)
- 3–5 real quotes from worker testimony, investigative reporting, or academic studies (with attribution)
- 3 count-up statistics in `article-stats`
- 2–3 fact cards in the sticky aside
- 5–8 further-reading resources (real URLs: NYT, ProPublica, Reuters, Guardian, BLS, GAO, USDA, academic)

### 3.4 Reflection / Quiz (embedded in Hub.html Stage 3)

Below the sphere grid, revealed with the hub:

**Structure:**
- 2-col: sticky progress sidebar (progress bar, question counter, section label) + quiz column
- **6 multiple-choice questions** (one drawn from each sphere)
- **2 open reflection prompts** (textarea): "What surprised you most?" and "How will this change the way you shop?"
- All responses save to `localStorage` (keyed to session timestamp) for teacher review
- Submit reveals thank-you state + correct answers with brief explanations + links back to relevant sphere
- Persistent "Reflect ↘" corner button (fixed bottom-right, appears after unveil)

---

## 4. Animations (complete specification)

### Curtain Unveil (Hub.html)
1. User clicks "Unveil"
2. Two oxblood panels slide in from off-screen (left/right) simultaneously — 0.75s, `cubic-bezier(0.7,0,0.2,1)`. Panels carry paper grain + fold-line shadows.
3. At 350ms: pasture stage veils (opacity 0, blur 2px, 0.6s ease)
4. At 350ms: `body.hub-revealed` class added (hub grid becomes visible)
5. At 950ms: panels fold back out (1.2s, `cubic-bezier(0.65,0,0.35,1)`)
6. At 1500ms: Reflect corner button appears; scroll to hub grid
7. At 2400ms: curtain-staging class removed
8. "Skip the unveil" → instant, no animation

### Hub Grid Reveal
- `hub-stage` and `hub-reflect`: `opacity: 0, translateY(20px)` → `opacity: 1, translateY(0)`, 0.6s ease on `hub-revealed`

### Sphere Card Hover
- `translateY(-6px)` + `box-shadow: 10px 14px 0 rgba(43,43,43,0.10)`, 0.35s `cubic-bezier(0.2,0.8,0.2,1)`
- Arrow slides right 6px, 0.25s ease

### Intro Sequence (new)
- Title scene: fade-in text on load (opacity 0→1, 0.8s, 0.3s delay)
- Grocery aisle: horizontal pan via GSAP ScrollTrigger, maps vertical scroll progress to `x` translate of the aisle illustration. Smooth via Lenis.
- Pasture entrance: GSAP fade-in after aisle clears, 0.6s

### Sphere Page Animations
- Count-up: GSAP CountTo or manual RAF, 1.4s cubic ease-out, triggered by IntersectionObserver at `threshold: 0.5`
- Scroll cue line: `scaleY + opacity` keyframe loop, 2.4s

### Transitions (History API)
- Navigating sphere → hub: curtain folds in from current page, pushState, curtain folds out on new page (or simpler: oxblood overlay fade, 0.4s in/out)

### prefers-reduced-motion
All animation durations collapse to 0.01ms when `prefers-reduced-motion: reduce` is set.

---

## 5. Routing

- Hub.html is the root (`/`)
- Sphere pages: `/labor`, `/immigrant-labor`, `/consolidation`, `/climate`, `/health`, `/welfare`
- Hash routing within Hub.html: `#hub`, `#reflect` auto-unveil + scroll
- History API wrapper: intercepts `<a>` clicks for in-site navigation, plays curtain-out transition, pushes state, renders new page, plays curtain-in. Falls back gracefully if JS fails.

---

## 6. Content Specifications

### Research sources (Agent A must use)
- Bureau of Labor Statistics (injury/wage data)
- GAO Report 16-337 (meatpacking oversight)
- Human Rights Watch 2019 ("When We're Dead and Buried, Our Bones Will Keep Hurting")
- USDA ERS (workforce demographics)
- Pew Research Center (immigration data)
- Poore & Nemecek 2018, Science (emissions data — beef at 60 kg CO₂eq/kg)
- WHO IARC 2015 (processed meat Group 1 carcinogen)
- USDA FSIS recall database
- SEC/FTC filings for Big Four market share
- Humane Slaughter Act compliance reports
- Undercover investigation summaries (Mercy for Animals, HSUS)

### Six Sphere Content (summary)

**01 Labor:**  
OSHA injury rates (2.4× manufacturing average), line speed (140 head/hr), repetitive motion injuries, COVID-19 plant outbreaks, reporting suppression, worker testimony. Quote from HRW 2019 report. Stats: injury rate, head/hr, median wage ($18.50/hr).

**02 Immigrant Labor:**  
51% of meatpacking workforce foreign-born (USDA ERS), 25–38% estimated undocumented, ICE raids (2019 Mississippi raids — largest single-state worksite enforcement in US history), migration corridors to meatpacking towns, H-2B visa abuse. Stats: % foreign-born, number of jobs, average migration distance.

**03 Corporate Influence:**  
Big Four market share (Tyson Foods ~21%, JBS USA ~20%, Cargill ~18%, National Beef ~13% — approx. 72–85% combined), COVID price-fixing investigation, lobbying spend ($10M+/yr combined), antitrust suits, monopsony over cattle ranchers. Use real company names. Stats: combined market share %, lobbying spend, rancher income decline %.

**04 Climate:**  
Poore & Nemecek 2018 — beef at 60 kg CO₂eq/kg vs chicken 6 kg, tofu 2 kg. Methane from enteric fermentation (14.5% of global GHGs from livestock). Land use: beef uses 60% of global agricultural land for 2% of global calories. Stats: CO₂eq/kg, % global GHGs, land use.

**05 Quality & Health:**  
WHO IARC Group 1 carcinogen (processed meat), Group 2A (red meat). Antibiotic use: 70% of US medically important antibiotics go to livestock. USDA recall data (avg. 20M lbs/yr recalled). E. coli O157:H7 prevalence. COOL (Country of Origin Labeling) rollback. Stats: carcinogen classification, antibiotic %, recall volume.

**06 Animal Cruelty:**  
Humane Slaughter Act: 90% compliance rate claim vs. documented stunning failures. Broiler chickens: 42-day lifespan, skeletal deformities from growth rate. Gestation crates. Undercover investigation findings. One illustration per scroll stop, restrained format. Stats: % lifetime in confinement, stunning failure rate, standard cage space.

### Quiz Questions (6 MC + 2 open)

```
Q1 (Labor): How many cattle does a typical U.S. line worker process per hour?
   A) 40  B) 80  C) 140  D) 200  [correct: C]

Q2 (Immigrant Labor): What percentage of the U.S. meatpacking workforce is foreign-born?
   A) ~15%  B) ~30%  C) ~50%  D) ~70%  [correct: C]

Q3 (Corporate): Roughly what share of U.S. beef processing do the four largest firms control?
   A) ~40%  B) ~60%  C) ~72–85%  D) ~95%  [correct: C]

Q4 (Climate): How does beef's CO₂ footprint compare to chicken per kilogram of protein?
   A) About the same  B) ~2×  C) ~5×  D) ~10×  [correct: D]

Q5 (Health): In what category did the WHO classify processed meat?
   A) Possibly carcinogenic  B) Probably carcinogenic
   C) Known carcinogen (Group 1)  D) Not classified  [correct: C]

Q6 (Animal Cruelty): How long does a standard U.S. broiler chicken live before slaughter?
   A) 6 months  B) 3 months  C) 10 weeks  D) 6 weeks  [correct: D]

Open 1: What surprised you most in what you read?  [textarea]
Open 2: How will this change the way you shop, if at all?  [textarea]
```

---

## 7. Asset Folder Structure

```
/public/assets/
  /intro/            # title scene bg texture (if any)
  /aisle/            # grocery aisle horizontal illustration (PNG or inline SVG)
  /hub/              # pasture scene (inline SVG in Hub.html, PNG swap slot)
  /sphere-labor/     # worker aside illustration (240×320px placeholder)
  /sphere-immigrant/ # map aside illustration (360×280px placeholder)
  /sphere-corporate/ # bar chart / logos (360×280px placeholder)
  /sphere-quality/   # meat package / lab (360×280px placeholder)
  /sphere-climate/   # emissions chart (360×280px placeholder)
  /sphere-animal/    # cage / hen (360×280px placeholder)
  /reflection/       # reflection section art (optional)
```

All slots are placeholder `<div>` elements at the correct dimensions with `background: var(--bone)` and a mono `slot-label` until real PNGs are dropped in.

---

## 8. localStorage Schema

```js
// Key: "rabbit-hole-session-{timestamp}"
{
  submitted: ISO8601 string,
  quiz: [
    { question: string, selected: number, correct: boolean },
    // × 6
  ],
  reflection: {
    surprise: string,
    shopChange: string
  }
}
```

Teacher reviews by opening browser DevTools → Application → localStorage.

---

## 9. Deployment

- Vercel project: `rabbit-hole-meat-industry`
- Deploy after Hub.html complete (milestone 3)
- Redeploy after each sphere wired
- Final prod deploy after polish pass

---

## 10. Out of Scope

- Backend / server-side storage (localStorage only)
- User accounts / analytics
- Video or 3D
- React / Next.js
- Any page not listed above
