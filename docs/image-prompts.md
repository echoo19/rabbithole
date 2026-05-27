# gpt-image-2 Image Prompts
## A Rabbit Hole Down the Meat Industry

---

## Before You Start

**No transparent backgrounds.** gpt-image-2 errors if you request `background: transparent`. Every prompt below uses `solid #F4EDE0` (the site's exact `--cream` token) as the background. Since all cards and pages already sit on `--cream` or `--bone`, images drop in seamlessly. If you need true alpha for compositing, the flat cream color is trivially removable via multiply blend mode or a color keyer.

**Session protocol.** Send each chat's **context prompt first** and wait for the model to confirm before sending individual image prompts. All subsequent images in that session inherit the established style. Do not cross sessions — inconsistency creeps in.

**Settings for every image:** Quality: High · Format: PNG · Background: Opaque

**Four chats, 19 images total:**

| Chat | Subject | Size | Count |
|------|---------|------|-------|
| A | Wide scene illustrations | 1536×1024 | 6 |
| B | Hub card arts | 1024×1536 | 6 |
| C | Animal & figure spot illustrations | 1024×1024 | 5 |
| D | Map + icon grid | 1024×1024 | 2 |

**Where each asset is used:**
- A-1 Pasture → `#stagePasture` full-screen hero on `index.html`
- A-2 Grocery Aisle → `#stageAisle` horizontal-scroll stage on `index.html`
- A-3 through A-6 → inline illustrations in article bodies
- B-1 through B-6 → sphere card art in `.sphere__art` slots; B-3/B-4/B-5 also double as article aside art
- C-3 Hen → also used as article aside art for `welfare.html`
- C-5 Worker → also used as article aside art for `labor.html`
- D-1 US Map → also used as article aside art for `immigrant-labor.html`

---

## Chat A — Wide Scene Illustrations

*6 images · 1536×1024 (landscape) · Hero sections and article body scenes*

---

### A — Context Prompt

```
We are creating a series of full-width editorial scene illustrations for a long-form investigative journalism website called "A Rabbit Hole Down the Meat Industry." All images in this session must share a strict visual identity.

STYLE: Eiko Ojala paper-cut illustration. Every element is a distinct sheet of cut paper. Each layer casts a subtle drop shadow onto the layer below. Flat, solid color fills within each shape — no gradients inside any form. Depth comes from layering and the thin edge-shadows between layers, not from shading.

COLOR PALETTE — use only these six colors, no others:
• #F4EDE0 — cream (always the background)
• #EDE4D3 — bone / parchment
• #2B2B2B — charcoal (dominant darks)
• #3A3735 — charcoal-soft (secondary darks)
• #8A9A7B — sage green
• #7A1E1E — oxblood red
• #C89B3C — ochre

TEXTURE: visible fine paper grain across every layer, as if each shape was cut from textured stock paper.

BACKGROUND: always solid #F4EDE0 — not white, not transparent.

AESTHETIC: serious, editorial, investigative journalism. No decorative elements, no text of any kind, no typography. Composed and still — more diorama than illustration. Cold, clear, and a little bleak.

OUTPUT: high-quality PNG, 1536×1024 (landscape).

Please confirm you have these constraints before I send image A-1.
```

---

### A-1 — Pasture Hero Scene

*`#stagePasture` — full-screen hero, Stage 2 on index.html*

```
Eiko Ojala paper-cut illustration, 1536×1024. Background: solid #F4EDE0.

A wide, open pastoral scene — the idealized "before" image of industrial beef.

Sky: flat cream (#F4EDE0). Two layered cloud shapes in bone (#EDE4D3), each a separate cut-paper ellipse with a drop shadow beneath it.

Landscape — four hill layers, back to front. Each layer is a separate cut-paper wave with a slightly irregular torn paper edge, casting a drop shadow onto the layer in front of it:
1. Rearmost: very pale sage (#8A9A7B), smooth gentle curve near the upper third of the frame.
2. Second: sage at 70% value, slightly more undulating.
3. Third: full sage (#8A9A7B), more prominent. A wooden fence crosses this layer: 6–7 thin charcoal (#2B2B2B) vertical posts with two bone (#EDE4D3) horizontal rails.
4. Foreground: darkest sage-charcoal mix. Short upward-triangle grass tufts along the top edge.

Steer: centered in the mid-ground at roughly 1/6 the image height. Side-profile silhouette in charcoal (#2B2B2B). Body, head, and legs as stacked cut-paper shapes. Irregular spot patches on the flank in bone (#EDE4D3). Four legs as simple rectangular columns.

Farmer: far right of the image, very small — about 1/10 image height. A minimal vertical charcoal silhouette: rectangular torso, oval head, one arm slightly raised. Standing beside a fence post.

Fine paper grain across all layers. No text.
```

---

### A-2 — Grocery Aisle

*`#stageAisle` — horizontal-scroll stage on index.html*

```
Eiko Ojala paper-cut illustration, 1536×1024. Background: solid #F4EDE0.

A supermarket refrigerated meat aisle seen head-on at eye level — wide and continuous, designed to feel relentless. Completely depopulated: no people, no carts, no signage.

Refrigeration cases: tall vertical charcoal (#2B2B2B) frames on the left and right edges with a thin inner bone (#EDE4D3) trim strip. Three horizontal shelf levels inside each case.

Each shelf: a thin bone (#EDE4D3) horizontal surface with a charcoal (#2B2B2B) front lip and L-bracket shadows below.

Meat packages — 8–10 per shelf, identical, lined up side by side. Each package:
• Outer tray: cream (#F4EDE0) with a bone (#EDE4D3) raised lip edge (a separate cut-paper frame layer with drop shadow)
• Label block: a large oxblood (#7A1E1E) rectangle covering the lower 60% of the package face
• Price tag: small ochre (#C89B3C) rectangle tab at top right corner
• Label lines: 3–4 thin bone horizontal stripes across the oxblood area suggesting illegible text
• Each package casts a clear drop shadow to its right

Ceiling: flat charcoal-soft (#3A3735). Fluorescent light strips: thin bone (#EDE4D3) horizontal bars spanning the full width, evenly spaced.

Floor: dark charcoal (#2B2B2B) with faint bone (#EDE4D3) tile lines in a regular grid.

Fine paper grain throughout.
```

---

### A-3 — Rolling Hills

*Inline article illustration — pastoral landscape*

```
Eiko Ojala paper-cut illustration, 1536×1024. Background: solid #F4EDE0.

A pure landscape — no animals, no structures, no people. Only land and sky.

Sky: flat cream (#F4EDE0). Two very thin, nearly horizontal cloud strips in bone (#EDE4D3), barely visible.

Hill layers — four, each a separate cut-paper wave with a slightly irregular torn paper edge casting a drop shadow onto the layer in front:
1. Rearmost: very pale sage (#8A9A7B), smooth gentle curve near the upper third.
2. Second: sage at medium value, slightly more undulating.
3. Third: full sage (#8A9A7B). A wooden fence crosses this layer: 7 thin charcoal (#2B2B2B) vertical posts, two bone (#EDE4D3) horizontal rails.
4. Foreground: darkest sage-charcoal mix. Short upward-triangle grass tufts along the top edge in sage.

Wide, open, slightly desolate. Fine paper grain throughout. No text.
```

---

### A-4 — Factory Exterior

*Inline article illustration — industrial processing plant*

```
Eiko Ojala paper-cut illustration, 1536×1024. Background: solid #F4EDE0.

The exterior of a large industrial meat processing plant. Cold, monumental, bureaucratic.

Main building: a large horizontal rectangular block in charcoal (#2B2B2B), centered, occupying the lower 60% of the image. Flat roof. A smaller wing block in charcoal-soft (#3A3735) extends to the left at a slightly lower height.

Windows: small horizontal rectangular slits in ochre (#C89B3C), arranged in two regular rows across the main facade.

Loading dock: a lower rectangular projection at the right base of the main building in charcoal-soft. A wide horizontal door opening in bone (#EDE4D3).

Smokestacks: two tall narrow cylinders in charcoal-soft rising from the roofline. From each top: layered rounded smoke cloud puffs in bone (#EDE4D3) — stacked cut-paper ellipses ascending, each with a drop shadow on the one below.

Foreground: a flat concrete apron in charcoal-soft. A chain-link fence suggestion: thin charcoal horizontal and diagonal lines across the foreground at low opacity.

Sky: flat cream (#F4EDE0). Only the smoke clouds break into the sky.

No people, no vehicles, no signage. Fine paper grain throughout.
```

---

### A-5 — Conveyor Belt / Processing Line

*Inline article illustration — meat processing machinery*

```
Eiko Ojala paper-cut illustration, 1536×1024. Background: solid #F4EDE0.

An industrial meat processing conveyor belt seen from a slightly elevated angle — looking down and along the belt's length. The belt runs left to right across the full width of the frame.

Belt surface: a wide horizontal band in charcoal-soft (#3A3735), spanning the full width. Subtle repeating stripe pattern across the surface in charcoal (#2B2B2B) suggesting belt segmentation.

Rollers: evenly spaced circles along the near edge of the belt in charcoal (#2B2B2B) with a thin bone (#EDE4D3) highlight strip across each.

Meat cuts on belt: 7–8 abstract organic blob shapes in oxblood (#7A1E1E) placed at irregular intervals. Each cut has a thin irregular vein of bone (#EDE4D3) across it suggesting fat marbling. Each casts a small drop shadow.

Side walls flanking the belt: two low rectangular walls in charcoal-soft. A horizontal row of small ochre (#C89B3C) light fixture hoods mounted above each wall.

Ceiling: dark charcoal, partially visible at the top of the frame.

No people. Clinical, relentless. Fine paper grain throughout.
```

---

### A-6 — Grocery Shelf Close-Up

*Inline article illustration — single shelf unit, maximum repetition*

```
Eiko Ojala paper-cut illustration, 1536×1024. Background: solid #F4EDE0.

A close-up, frontal view of a single refrigerated meat shelf unit filling the frame edge to edge. One continuous row of packages. The refrigeration case frame is visible as charcoal (#2B2B2B) verticals on the far left and right.

Shelf: bone (#EDE4D3) horizontal surface with a charcoal (#2B2B2B) front lip and L-bracket shadows below.

Packages — 12 identical packages in a single row, edge to edge. Each package:
• Outer tray: cream (#F4EDE0) with a bone (#EDE4D3) border (a separate cut-paper frame layer with drop shadow)
• Label block: oxblood (#7A1E1E) covering the lower 55% of the package face
• Price tag: small ochre (#C89B3C) tab, top right corner
• Label lines: 4 thin bone (#EDE4D3) horizontal stripes across the oxblood area suggesting nutritional text
• Barcode strip: at the very bottom edge of the label — alternating charcoal and bone vertical lines of varying widths
• Each package casts a clear drop shadow to its right

The repetition of 12 identical packages across the full frame is the point.

Fine paper grain throughout. No text.
```

---

## Chat B — Hub Card Arts

*6 images · 1024×1536 (portrait) · CSS crops to 4:5 aspect ratio in `.sphere__art` slots*
*Chapters 3, 4, and 5 also serve as article aside art*

---

### B — Context Prompt

```
We are creating six portrait-format editorial illustration cards for a web hub page — one per chapter of an investigative journalism series called "A Rabbit Hole Down the Meat Industry." Each card is displayed at 4:5 aspect ratio in a grid. All six must share a strict visual identity.

STYLE: Eiko Ojala paper-cut illustration. Every element is a distinct sheet of cut paper. Each layer casts a subtle drop shadow onto the layer below. Flat, solid color fills — no gradients inside any shape. These are more graphic and poster-like than scene illustrations — each card must read as a strong, clear composition even at small size.

COLOR PALETTE — use only these colors, no others:
• #F4EDE0 — cream (background)
• #EDE4D3 — bone / parchment
• #2B2B2B — charcoal
• #3A3735 — charcoal-soft
• #8A9A7B — sage green
• #7A1E1E — oxblood red
• #C89B3C — ochre

TEXTURE: fine paper grain across all layers.

BACKGROUND: always solid #F4EDE0.

NO TEXT anywhere in any image. No numbers, letters, labels, captions, or symbols.

AESTHETIC: editorial, investigative, serious. Bold graphic compositions. Each should feel like a constrained focused poster. Strong silhouettes. No decorative elements.

OUTPUT: high-quality PNG, 1024×1536 (portrait).

Please confirm you have these constraints before I send card B-1.
```

---

### B-1 — Labor (Chapter 01)

*`sphere--labor` card · `.sphere__art[data-art="labor"]` · also article aside for `labor.html`*

```
Eiko Ojala paper-cut card, 1024×1536. Background: solid #F4EDE0.

A lone meatpacking line worker, centered, seen from the front — slightly below eye level so the figure feels imposing.

Head: a simple charcoal-soft (#3A3735) oval. Hard hat: a dome shape in bone (#EDE4D3) sitting on top with a flat brim at the front edge.

Torso: a charcoal (#2B2B2B) rectangle. Apron: a charcoal-soft (#3A3735) rectangular layer over the torso, slightly narrower, with a drop shadow onto the torso behind.

Arms: charcoal rectangles hanging at sides, elbows slightly bent. Hands: bone (#EDE4D3) blocks — rubber gloves.

Legs: charcoal rectangular columns. Boots: charcoal blocks at the base.

Behind the figure at low opacity: very faint horizontal stripes in charcoal-soft spanning the full width — suggesting the plant's industrial wall strips. The figure is the clear focus.

At the figure's feet: a thin charcoal-soft horizontal strip — a faint suggestion of the conveyor belt edge.

Graphic, isolated, specimen-like. The figure is dark against cream. Fine paper grain throughout. No text.
```

---

### B-2 — Immigrant Labor (Chapter 02)

*`sphere--immigrant` card · `.sphere__art[data-art="immigrant"]` · also article aside for `immigrant-labor.html`*

```
Eiko Ojala paper-cut card, 1024×1536. Background: solid #F4EDE0.

An abstracted map fragment of the continental United States, centered in the portrait frame with generous cream space below.

Map shape: the simplified outline of the contiguous US as a single cut-paper silhouette in bone (#EDE4D3). No state borders, no coastline detail — just the country outline as a flat paper shape. Clear drop shadow beneath the map layer.

Map interior: fine diagonal hatch lines at 45° in charcoal-soft (#3A3735), very thin, low opacity.

Meatpacking dots: 7 solid circles in oxblood (#7A1E1E) clustered in the Great Plains and Midwest — Kansas, Nebraska, Iowa, South Dakota, northern Texas. Each circle casts a small drop shadow.

Migration arrows: 3 curved arrow lines in oxblood (#7A1E1E), each originating below and left of the map (suggesting Central America / Mexico) and curving upward to point toward the dot cluster. Clean curved paths with small solid arrowheads.

No state lines, no city names, no labels. Fine paper grain throughout.
```

---

### B-3 — Corporate Consolidation (Chapter 03)

*`sphere--consolidation` card · `.sphere__art[data-art="consolidation"]` · also article aside for `consolidation.html`*

```
Eiko Ojala paper-cut card, 1024×1536. Background: solid #F4EDE0.

Four vertical bar chart bars filling the lower 70% of the frame — a data visualization rendered as cut paper.

Bar 1 (leftmost, tallest): oxblood (#7A1E1E). Roughly 80% of available vertical space.
Bar 2: charcoal (#2B2B2B). About 70% of bar 1's height.
Bar 3: sage (#8A9A7B). About 58% of bar 1's height.
Bar 4 (rightmost, shortest): ochre (#C89B3C). About 40% of bar 1's height.

Each bar is a flat cut-paper rectangle with a clear drop shadow to its right. Bars are evenly spaced with small gaps between them.

Baseline: a thin charcoal (#2B2B2B) horizontal line running across the bottom of all four bars.

The top 30% of the frame: flat cream (#F4EDE0), empty. The bars rise from below.

No labels, no numbers, no axis ticks. The four bars together convey dominance — a monopoly compressed into color.

Fine paper grain throughout.
```

---

### B-4 — Climate / Emissions (Chapter 04)

*`sphere--climate` card · `.sphere__art[data-art="climate"]` · also article aside for `climate.html`*

```
Eiko Ojala paper-cut card, 1024×1536. Background: solid #F4EDE0.

A steer silhouette in the lower fifth of the frame, small, centered — dwarfed by what rises above it.

Steer: charcoal (#2B2B2B) side-profile silhouette. Simple, compact — recognizable but abstracted. A flat paper-cut animal shape.

Above the steer: a massive column of billowing smoke / methane clouds rising upward, filling the upper 70% of the frame. The clouds are layered cut-paper puffs — rounded irregular ellipses stacked and overlapping:
• Bottom puff layers: bone (#EDE4D3), dense, close together, casting drop shadows downward
• Middle layers: progressively lighter bone, more spread
• Top layers: near-cream, dissolving into the background at the very top

Each puff layer casts a drop shadow onto the layer below.

The composition is top-heavy and oppressive — the steer is tiny; the cloud is enormous.

No text. Fine paper grain throughout.
```

---

### B-5 — Health & Labeling (Chapter 05)

*`sphere--health` card · `.sphere__art[data-art="health"]` · also article aside for `health.html`*

```
Eiko Ojala paper-cut card, 1024×1536. Background: solid #F4EDE0.

A single meat package, centered, slightly tilted 8° counterclockwise — filling roughly 60% of the frame.

Package form: a shallow rectangular tray.
• Outer form: cream (#F4EDE0)
• Raised lip edge: bone (#EDE4D3) border all around — a separate cut-paper frame layer with drop shadow
• Label block: a large oxblood (#7A1E1E) rectangle covering the lower 55% of the package face
• 5 thin horizontal bone (#EDE4D3) stripes across the oxblood label (illegible text / nutritional info)
• Price tag: small ochre (#C89B3C) rectangle tab at top right corner
• Barcode: at the very bottom edge of the label — thin alternating charcoal and bone vertical lines of irregular widths

Behind and to the right of the package: a simple circular magnifying glass outline in charcoal-soft (#3A3735) with a handle rectangle extending lower-right. The lens ring is a stroke only — not filled — as if someone is inspecting the label.

Clinical, slightly unsettling. Fine paper grain throughout. No legible text anywhere.
```

---

### B-6 — Animal Cruelty / Factory Farming (Chapter 06)

*`sphere--cruelty` card · `.sphere__art[data-art="cruelty"]`*

```
Eiko Ojala paper-cut card, 1024×1536. Background: solid #F4EDE0.

Five thick vertical bars in oxblood (#7A1E1E) spanning the full height of the frame from top to bottom, evenly spaced. Each bar is a flat cut-paper rectangle with a drop shadow to one side. A thin horizontal crossbar in oxblood at the very top and one at the very bottom — completing the cage outline.

Behind the bars: a hen figure in charcoal (#2B2B2B), centered. Clearly visible between the bars:
• Body: a rounded charcoal shape
• Wing: a charcoal-soft (#3A3735) layer, offset, with layered feather-arc edges
• Head: a charcoal circle
• Comb: a small oxblood (#7A1E1E) crown (distinguished from the bars by depth and drop shadow)
• Beak: a small ochre (#C89B3C) wedge
• Wattle: a small oxblood teardrop below the beak
• Eye: a tiny cream (#F4EDE0) dot
• Legs: thin ochre (#C89B3C) sticks with three-toe fans

The bars are in front of the hen. The hen is trapped.

Stark, confrontational, simple. Fine paper grain throughout. No text.
```

---

## Chat C — Animal & Figure Spot Illustrations

*5 images · 1024×1024 (square) · Inline article illustrations and article aside art*

---

### C — Context Prompt

```
We are creating isolated subject spot illustrations for an investigative journalism website. Each image features a single subject centered on a solid cream background with generous surrounding space.

STYLE: Eiko Ojala paper-cut illustration. Each subject is built from distinct cut-paper layers. Flat color fills, no gradients. Visible drop shadows between layers. The subjects feel like paper models — simplified anatomy assembled from cut shapes, not realistic renders. Think naturalist field guide done in cut paper.

COLOR PALETTE — use only these colors, no others:
• #F4EDE0 — cream (background — always)
• #EDE4D3 — bone / parchment
• #2B2B2B — charcoal
• #3A3735 — charcoal-soft
• #8A9A7B — sage green
• #7A1E1E — oxblood red
• #C89B3C — ochre

TEXTURE: fine paper grain across all layers and the background.

BACKGROUND: always solid #F4EDE0.

COMPOSITION: subject occupies roughly 55–65% of the canvas, centered, with generous cream space on all sides. Never cropped.

NO TEXT. No background scenery. Pure cream background, subject only.

AESTHETIC: still, editorial, specimen-quality. Each subject stands alone like a museum exhibit.

OUTPUT: high-quality PNG, 1024×1024 (square).

Please confirm before I send C-1.
```

---

### C-1 — Beef Cattle

*Inline article illustration — also used in hub pasture scene reference*

```
Eiko Ojala paper-cut spot illustration, 1024×1024. Background: solid #F4EDE0.

A side-view silhouette of a beef steer — full body, standing calmly, facing left. Centered with generous cream space on all sides.

Body: a large rounded-rectangle form in charcoal (#2B2B2B) — the main torso layer.

Legs: two pairs, each a simple rectangular column in charcoal. Front legs slightly forward, back legs straight. Each leg a separate cut-paper layer with a small drop shadow.

Head: a roughly rectangular charcoal shape facing left, narrowing toward the muzzle. Ear: a small cut-paper tab in charcoal-soft angling upward from the top.

Muzzle: a slightly lighter rounded disc in charcoal-soft at the front of the head. Two oval nostrils in bone (#EDE4D3).

Spot markings on flank: 2–3 irregular organic shapes in bone (#EDE4D3) layered on top of the body.

Udder: a simple rounded bone (#EDE4D3) shape beneath the belly between the back legs.

Tail: a thin charcoal strip angling down at the rump with a small tuft at the end.

Fine paper grain throughout. No text, no background scenery.
```

---

### C-2 — Pig

*Inline article illustration*

```
Eiko Ojala paper-cut spot illustration, 1024×1024. Background: solid #F4EDE0.

A side-view silhouette of a domestic pig — full body, standing, facing left. Centered with generous cream space.

Body: a large rounded-rectangle form in charcoal-soft (#3A3735) — rounder and lower than a cow, barrel-shaped.

Belly: a bone (#EDE4D3) oval patch along the underside, layered on top of the body with a drop shadow.

Legs: four short stubby rectangular columns in charcoal-soft. Each its own layer with a small drop shadow.

Head: a charcoal-soft rounded square. Snout: a circular disc in charcoal at the front, slightly lighter. Two small oval nostrils in bone (#EDE4D3) on the snout face.

Ear: a large floppy triangular cut-paper shape in charcoal-soft, angled forward over the forehead.

Eye: a small bone (#EDE4D3) circle.

Tail: a thin curled strip of charcoal-soft at the rump — bent back on itself in a small curl.

Fine paper grain throughout. No text, no background scenery.
```

---

### C-3 — Hen (Chicken)

*Inline article illustration · also article aside art for `welfare.html`*

```
Eiko Ojala paper-cut spot illustration, 1024×1024. Background: solid #F4EDE0.

A side-view silhouette of a domestic hen — full body, standing, facing left. Centered with generous cream space.

Body: a large rounded teardrop shape in charcoal (#2B2B2B), widest at the breast, tapering toward the tail.

Wing: a charcoal-soft (#3A3735) layer on top of the body — slightly smaller, offset upward. Bottom edge has 3–4 overlapping curved arc strips suggesting feather layers.

Tail: fanned strips of charcoal angled upward at the back — 4–5 layered curved strips splaying outward, each its own cut-paper layer.

Head: a charcoal circle.

Comb: a small oxblood (#7A1E1E) crown on top — 3 small rounded bumps.

Wattle: a small oxblood (#7A1E1E) teardrop shape below the beak.

Beak: a small ochre (#C89B3C) wedge pointing left.

Eye: a tiny cream (#F4EDE0) dot.

Legs: two thin ochre (#C89B3C) vertical sticks. Feet: three-toe fans in ochre — each toe a flat thin strip.

Fine paper grain throughout. No text, no background scenery.
```

---

### C-4 — Steer Head Close-Up

*Inline article illustration*

```
Eiko Ojala paper-cut spot illustration, 1024×1024. Background: solid #F4EDE0.

A front-facing close-up of a steer (beef cattle) head — cropped at the neck, filling most of the canvas. Direct, calm, imposing gaze.

Head: a large roughly rectangular form in charcoal (#2B2B2B), wider at the top, slightly narrowing at the muzzle. The head is the dominant shape.

Horns: two curved bone (#EDE4D3) strips arcing outward and upward from the top sides of the head — each a separate cut-paper layer with a drop shadow.

Ears: two broad flat charcoal-soft (#3A3735) flap shapes on either side below the horns, angling slightly outward.

Muzzle: a large rounded rectangle in charcoal-soft at the center-bottom of the head. Two large oval nostrils in bone (#EDE4D3).

Eyes: two oval shapes in bone (#EDE4D3), symmetrically placed in the upper half. Small charcoal circles as irises within each bone oval.

Forelock: 3–4 layered charcoal strips hanging between the horns over the forehead.

Fine paper grain throughout. No text, no background scenery.
```

---

### C-5 — Meatpacking Worker Figure

*Inline article illustration · also article aside art for `labor.html`*

```
Eiko Ojala paper-cut spot illustration, 1024×1024. Background: solid #F4EDE0.

A front-facing full-body figure of a meatpacking line worker — standing upright, arms slightly out from the body. More uniform than person — the figure reads as the silhouette of a role, not an individual. Centered with generous cream space.

Head: a simple charcoal-soft (#3A3735) oval.

Hard hat: a dome shape in bone (#EDE4D3) sitting on the head with a flat brim at the front edge.

Safety goggles: a thin ochre (#C89B3C) horizontal oval band across the face where eyes would be.

Torso: a charcoal (#2B2B2B) rectangle.

Apron: a charcoal-soft (#3A3735) rectangular layer over the torso, slightly narrower, with a drop shadow onto the torso.

Arms: charcoal rectangles at the sides. Hands: bone (#EDE4D3) blocks — rubber gloves.

Legs: charcoal rectangular columns with a slight gap at the knee hinting at leg separation.

Boots: charcoal blocks at the base.

The figure stands alone on pure cream. Vertical, still, slightly formal — more diagram than portrait.

Fine paper grain throughout. No text, no background scenery.
```

---

## Chat D — Map & Icons

*2 images · 1024×1024 (square)*

---

### D — Context Prompt

```
We are creating two editorial graphics for an investigative journalism website — one map and one icon grid. Both use the same visual language as the rest of the series.

STYLE: Eiko Ojala paper-cut illustration. Flat color shapes, no gradients, subtle drop shadows between layers. More graphic and data-like than the scene illustrations — clean, legible, infographic quality rendered in cut paper.

COLOR PALETTE — use only these colors:
• #F4EDE0 — cream (background)
• #EDE4D3 — bone / parchment
• #2B2B2B — charcoal
• #3A3735 — charcoal-soft
• #8A9A7B — sage green
• #7A1E1E — oxblood red
• #C89B3C — ochre

TEXTURE: fine paper grain across all layers.

BACKGROUND: always solid #F4EDE0.

NO TEXT, no labels, no country or state names.

OUTPUT: high-quality PNG, 1024×1024 (square).

Please confirm before I send D-1.
```

---

### D-1 — US Migration / Meatpacking Map

*Article aside art for `immigrant-labor.html` · also used inline in article bodies*

```
Eiko Ojala paper-cut illustration, 1024×1024. Background: solid #F4EDE0.

A simplified, abstracted outline map of the contiguous United States — centered in the frame with generous cream space on all sides.

Map body: the country outline as a single flat cut-paper silhouette in bone (#EDE4D3). Smooth, simplified coast and border — no state lines, no fine geographic detail. Clear drop shadow beneath the map shape.

Map interior: fine diagonal hatch lines at 45° across the entire interior in charcoal-soft (#3A3735), very thin, at low opacity — creating a subtle hatched paper fill.

Meatpacking dots: 9 solid circles in oxblood (#7A1E1E) clustered in the Great Plains and Midwest — Kansas, Nebraska, Iowa, South Dakota, northern Texas. Denser in the center-left of the map. Each circle has a small drop shadow.

Migration arrows: 4 curved arrow paths in oxblood (#7A1E1E):
• Three originating from below-left of the map (suggesting Mexico and Central America), sweeping upward and rightward toward the dot cluster
• One from the southeast, sweeping northwest toward the same cluster
• Each is a clean curved line with a solid arrowhead pointing toward the dots

No state borders. No labels. Fine paper grain throughout.
```

---

### D-2 — Four-Species Icon Grid

*Inline article illustration for climate chapter (carbon per species comparison)*

```
Eiko Ojala paper-cut illustration, 1024×1024. Background: solid #F4EDE0.

A 2×2 grid of four small animal / plant icons — one per quadrant. Each icon centered in its quadrant with generous cream space around it. Each icon occupies roughly 50% of its quadrant.

A hairline cross divider in charcoal-soft (#3A3735) — one horizontal and one vertical line — separates the four quadrants at the center. Very subtle, almost invisible.

TOP LEFT — Chicken:
A simplified side-profile hen in charcoal (#2B2B2B). Body: rounded teardrop. Wing: charcoal-soft layer with arc feather edges. Comb: oxblood (#7A1E1E) crown. Beak: ochre (#C89B3C) wedge. Eye: tiny cream dot. Facing left.

TOP RIGHT — Pig:
A simplified side-profile pig in charcoal-soft (#3A3735). Body: squat barrel shape. Snout: lighter disc with bone nostrils. Ear: floppy forward-angled tab. Small curled tail. Facing right.

BOTTOM LEFT — Fish:
A simplified side-profile fish in sage (#8A9A7B). Body: flat leaf/teardrop shape. Tail: a forked fin — two mirrored triangular cut-paper strips at the right end. One tiny cream eye-dot near the left side. Facing left.

BOTTOM RIGHT — Plant / Soy:
A simple plant icon. Stem: thin charcoal-soft (#3A3735) vertical rectangle. Two leaves: symmetrical rounded sage (#8A9A7B) ellipses branching left and right from the stem, each a flat cut-paper shape. At the base: a thin horizontal charcoal-soft rectangle suggesting a soil line.

Fine paper grain across the entire canvas and all elements. No labels.
```
