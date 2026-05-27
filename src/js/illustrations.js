/* ============================================================
   Paper-cutout placeholder illustrations (ES module)
   Port of design handoff illustrations.js — all SVG generators
   plus Hub card art and pasture injection.
   Real Eiko Ojala style PNGs drop into the same slots.
   ============================================================ */

const grain = `<rect width="100%" height="100%" fill="url(#paperGrain)" class="grain"/>`

// ---------- COW ----------
function cow({ color = 'var(--charcoal)', under = 'var(--charcoal-soft)' } = {}) {
  return `
    <svg viewBox="0 0 320 220" preserveAspectRatio="xMidYMid meet">
      <defs><clipPath id="cowClip"><rect x="0" y="0" width="320" height="220"/></clipPath></defs>
      <g clip-path="url(#cowClip)">
        <rect x="218" y="130" width="18" height="68" fill="${under}"/>
        <rect x="86"  y="130" width="18" height="68" fill="${under}"/>
        <path d="M40,120 Q40,82 78,80 L200,80 Q236,80 246,108 L260,144 Q258,160 240,160 L60,160 Q40,160 40,140 Z" fill="${color}"/>
        <ellipse cx="120" cy="158" rx="14" ry="9" fill="${under}"/>
        <rect x="232" y="135" width="20" height="65" fill="${color}"/>
        <rect x="100" y="135" width="20" height="65" fill="${color}"/>
        <path d="M40,118 Q22,120 18,148 L24,150 Q30,128 42,128 Z" fill="${color}"/>
        <path d="M252,90 Q288,90 296,112 Q300,128 292,140 L262,140 Q244,140 244,124 L246,108 Z" fill="${color}"/>
        <path d="M268,86 Q284,72 292,82 Q288,96 274,96 Z" fill="${under}"/>
        <ellipse cx="290" cy="128" rx="9" ry="6" fill="${under}"/>
        <circle cx="278" cy="112" r="2.2" fill="var(--cream)"/>
        <ellipse cx="150" cy="105" rx="22" ry="11" fill="${under}" opacity="0.85"/>
        <ellipse cx="195" cy="128" rx="16" ry="8"  fill="${under}" opacity="0.7"/>
        ${grain}
      </g>
    </svg>`
}

// ---------- ROLLING HILLS ----------
function hills({ skyless = false } = {}) {
  return `
    <svg viewBox="0 0 1200 500" preserveAspectRatio="xMidYMax slice">
      ${skyless ? '' : `<rect x="0" y="0" width="1200" height="500" fill="transparent"/>`}
      <path d="M0,360 Q300,300 600,330 Q900,360 1200,310 L1200,500 L0,500 Z" fill="var(--sage)" opacity="0.55"/>
      <path d="M0,400 Q260,360 560,390 Q880,420 1200,370 L1200,500 L0,500 Z" fill="var(--sage)" opacity="0.8"/>
      <path d="M0,440 Q300,420 700,440 Q1000,455 1200,430 L1200,500 L0,500 Z" fill="var(--charcoal-soft)"/>
      ${Array.from({length: 32}, (_, i) => {
        const x = 30 + i * 38 + (i % 3) * 4
        const h = 8 + (i * 7) % 10
        return `<path d="M${x},460 L${x+3},${460-h} L${x+6},460 Z" fill="var(--sage)" opacity="0.9"/>`
      }).join('')}
      ${grain}
    </svg>`
}

// ---------- FACTORY EXTERIOR ----------
function factory() {
  return `
    <svg viewBox="0 0 1200 500" preserveAspectRatio="xMidYMid slice">
      <rect x="0" y="380" width="1200" height="120" fill="var(--charcoal-soft)"/>
      <rect x="160" y="180" width="640" height="220" fill="var(--charcoal)"/>
      <rect x="60"  y="240" width="120" height="160" fill="var(--charcoal-soft)"/>
      <rect x="800" y="220" width="280" height="180" fill="var(--charcoal-soft)"/>
      <path d="M160,180 L480,140 L800,180 Z" fill="var(--charcoal-soft)"/>
      <rect x="540" y="80"  width="34" height="120" fill="var(--charcoal)"/>
      <rect x="590" y="60"  width="28" height="140" fill="var(--charcoal-soft)"/>
      <ellipse cx="554" cy="60" rx="34" ry="14" fill="var(--bone)" opacity="0.55"/>
      <ellipse cx="585" cy="46" rx="26" ry="11" fill="var(--bone)" opacity="0.45"/>
      <ellipse cx="612" cy="36" rx="20" ry="9"  fill="var(--bone)" opacity="0.35"/>
      ${Array.from({length: 9}, (_, i) => `<rect x="${200 + i*64}" y="240" width="40" height="22" fill="var(--ochre)" opacity="0.85"/>`).join('')}
      ${Array.from({length: 9}, (_, i) => `<rect x="${200 + i*64}" y="290" width="40" height="22" fill="var(--ochre)" opacity="0.7"/>`).join('')}
      <rect x="460" y="330" width="48" height="70" fill="var(--charcoal-soft)"/>
      ${Array.from({length: 60}, (_, i) => `<rect x="${i*20}" y="370" width="3" height="20" fill="var(--charcoal-soft)" opacity="0.6"/>`).join('')}
      ${grain}
    </svg>`
}

// ---------- CONVEYOR + MEAT CUTS ----------
function conveyor() {
  return `
    <svg viewBox="0 0 1200 500" preserveAspectRatio="xMidYMid slice">
      <rect x="60" y="280" width="1080" height="60" fill="var(--charcoal-soft)"/>
      <rect x="60" y="270" width="1080" height="14" fill="var(--charcoal)"/>
      ${Array.from({length: 18}, (_, i) => `<circle cx="${80+i*60}" cy="310" r="22" fill="var(--charcoal)" stroke="var(--bone)" stroke-width="1.5"/>`).join('')}
      ${[120, 260, 400, 540, 680, 820, 960, 1080].map((x, i) => `
        <g transform="translate(${x},${250-(i%2)*4})">
          <path d="M-34,0 Q-40,-22 -14,-26 Q20,-30 36,-12 Q42,8 18,18 Q-14,24 -34,8 Z" fill="var(--oxblood)"/>
          <path d="M-22,-6 Q-10,-18 8,-16 Q22,-12 22,0 Q14,8 -8,8 Q-22,4 -22,-6 Z" fill="var(--bone)" opacity="0.5"/>
          <ellipse cx="-4" cy="-2" rx="6" ry="3" fill="var(--cream)" opacity="0.5"/>
        </g>`).join('')}
      <rect x="80"  y="340" width="14" height="80" fill="var(--charcoal-soft)"/>
      <rect x="1100" y="340" width="14" height="80" fill="var(--charcoal-soft)"/>
      <rect x="0" y="0" width="1200" height="280" fill="var(--bone)" opacity="0.6"/>
      <path d="M0,80 L1200,80 L1200,96 L0,96 Z" fill="var(--charcoal-soft)" opacity="0.6"/>
      <path d="M0,140 L1200,140 L1200,150 L0,150 Z" fill="var(--charcoal-soft)" opacity="0.4"/>
      ${grain}
    </svg>`
}

// ---------- GROCERY SHELF ----------
function shelf() {
  return `
    <svg viewBox="0 0 1200 500" preserveAspectRatio="xMidYMid slice">
      <rect x="0" y="0" width="1200" height="500" fill="var(--bone)"/>
      <rect x="60" y="120" width="1080" height="8" fill="var(--charcoal-soft)"/>
      <rect x="60" y="260" width="1080" height="8" fill="var(--charcoal-soft)"/>
      <rect x="60" y="400" width="1080" height="8" fill="var(--charcoal-soft)"/>
      ${[140, 260, 400].map((y, row) =>
        Array.from({length: 10}, (_, i) => {
          const x = 90 + i * 105
          const h = row === 2 ? 100 : 120
          const iy = row === 2 ? 22 : 30
          const ih = row === 2 ? 50 : 60
          return `
            <g transform="translate(${x},${y})">
              <rect x="0" y="0" width="86" height="${h}" fill="var(--cream)" stroke="var(--charcoal-soft)" stroke-width="1"/>
              <rect x="6" y="${iy}" width="74" height="${ih}" fill="var(--oxblood)"/>
              <rect x="14" y="${iy+20}" width="32" height="6" fill="var(--bone)" opacity="0.7"/>
              <rect x="14" y="${iy+32}" width="50" height="4" fill="var(--bone)" opacity="0.5"/>
              <rect x="14" y="6" width="36" height="4" fill="var(--charcoal-soft)"/>
              <rect x="14" y="14" width="22" height="3" fill="var(--charcoal-soft)" opacity="0.6"/>
              <rect x="60" y="6" width="16" height="10" fill="var(--ochre)"/>
            </g>`
        }).join('')
      ).join('')}
      <rect x="0" y="470" width="1200" height="30" fill="var(--charcoal-soft)"/>
      ${grain}
    </svg>`
}

// ---------- WORKER SILHOUETTE ----------
function worker() {
  return `
    <svg viewBox="0 0 240 480" preserveAspectRatio="xMidYMax meet">
      <path d="M70,210 L170,210 L185,460 L55,460 Z" fill="var(--bone)"/>
      <path d="M82,140 Q82,110 120,108 Q158,110 158,140 L168,220 L72,220 Z" fill="var(--charcoal)"/>
      <path d="M72,150 L52,300 L70,310 L92,170 Z" fill="var(--charcoal)"/>
      <path d="M168,150 L188,300 L170,310 L148,170 Z" fill="var(--charcoal)"/>
      <ellipse cx="58"  cy="310" rx="14" ry="18" fill="var(--bone)"/>
      <ellipse cx="182" cy="310" rx="14" ry="18" fill="var(--bone)"/>
      <rect x="112" y="98"  width="16" height="20" fill="var(--charcoal-soft)"/>
      <ellipse cx="120" cy="78" rx="32" ry="36" fill="var(--charcoal-soft)"/>
      <path d="M88,68 Q120,40 152,68 L152,82 L88,82 Z" fill="var(--bone)" opacity="0.85"/>
      <rect x="88"  y="210" width="6" height="50" fill="var(--charcoal-soft)" opacity="0.6"/>
      <rect x="146" y="210" width="6" height="50" fill="var(--charcoal-soft)" opacity="0.6"/>
      <ellipse cx="120" cy="330" rx="24" ry="14" fill="var(--oxblood)" opacity="0.7"/>
      <ellipse cx="135" cy="350" rx="10" ry="6"  fill="var(--oxblood)" opacity="0.5"/>
      ${grain}
    </svg>`
}

// ---------- HEN ----------
function hen() {
  return `
    <svg viewBox="0 0 320 220" preserveAspectRatio="xMidYMid meet">
      <path d="M70,120 Q70,72 130,68 Q210,68 230,108 Q236,140 200,158 L100,160 Q70,156 70,130 Z" fill="var(--charcoal)"/>
      <path d="M70,108 Q30,80 18,118 Q22,140 56,134 Z" fill="var(--charcoal-soft)"/>
      <circle cx="232" cy="92" r="28" fill="var(--charcoal)"/>
      <path d="M218,68 L224,54 L232,68 L240,52 L246,68 Z" fill="var(--oxblood)"/>
      <path d="M240,108 Q252,114 248,124 Q240,124 238,114 Z" fill="var(--oxblood)"/>
      <path d="M256,92 L268,96 L256,100 Z" fill="var(--ochre)"/>
      <circle cx="238" cy="86" r="2.2" fill="var(--cream)"/>
      <rect x="120" y="160" width="5" height="40" fill="var(--ochre)"/>
      <rect x="170" y="160" width="5" height="40" fill="var(--ochre)"/>
      <path d="M120,100 Q160,90 200,108 Q180,128 130,130 Z" fill="var(--charcoal-soft)"/>
      ${grain}
    </svg>`
}

// ---------- PIG ----------
function pig() {
  return `
    <svg viewBox="0 0 320 220" preserveAspectRatio="xMidYMid meet">
      <path d="M50,130 Q50,90 100,86 L210,86 Q246,86 256,114 L264,150 Q260,166 240,166 L70,166 Q50,166 50,150 Z" fill="var(--charcoal-soft)"/>
      <rect x="90"  y="160" width="16" height="40" fill="var(--charcoal-soft)"/>
      <rect x="210" y="160" width="16" height="40" fill="var(--charcoal-soft)"/>
      <rect x="130" y="160" width="16" height="40" fill="var(--charcoal)"/>
      <rect x="180" y="160" width="16" height="40" fill="var(--charcoal)"/>
      <ellipse cx="270" cy="128" rx="20" ry="22" fill="var(--charcoal)"/>
      <ellipse cx="282" cy="130" rx="8"  ry="10"  fill="var(--bone)" opacity="0.5"/>
      <circle cx="280" cy="128" r="1.5" fill="var(--ink)"/>
      <circle cx="280" cy="134" r="1.5" fill="var(--ink)"/>
      <path d="M256,108 Q252,90 268,92 Q272,104 264,114 Z" fill="var(--charcoal-soft)"/>
      <circle cx="262" cy="120" r="1.8" fill="var(--cream)"/>
      <path d="M50,118 Q40,108 36,122 Q34,134 46,128" fill="none" stroke="var(--charcoal-soft)" stroke-width="3" stroke-linecap="round"/>
      ${grain}
    </svg>`
}

// ---------- STEER HEAD CLOSE-UP ----------
function steer() {
  return `
    <svg viewBox="0 0 320 220" preserveAspectRatio="xMidYMid meet">
      <path d="M60,80 Q60,40 130,40 L220,42 Q280,46 290,90 Q294,124 268,150 Q240,170 200,170 L140,170 Q80,168 64,140 Q56,114 60,80 Z" fill="var(--charcoal)"/>
      <path d="M88,40  Q70,16 60,36  Q66,52 88,54 Z"   fill="var(--bone)"/>
      <path d="M180,42 Q200,18 212,40 Q204,56 184,58 Z" fill="var(--bone)"/>
      <path d="M256,76 Q278,64 286,80 Q278,98 260,96 Z" fill="var(--charcoal-soft)"/>
      <ellipse cx="234" cy="108" rx="6" ry="7" fill="var(--bone)"/>
      <ellipse cx="234" cy="110" rx="3" ry="4" fill="var(--ink)"/>
      <ellipse cx="270" cy="140" rx="14" ry="10" fill="var(--charcoal-soft)"/>
      <circle cx="266" cy="138" r="2" fill="var(--ink)"/>
      <circle cx="274" cy="142" r="2" fill="var(--ink)"/>
      <path d="M120,46 Q130,34 142,46 Q150,38 156,52 Q138,58 122,56 Z" fill="var(--charcoal-soft)"/>
      ${grain}
    </svg>`
}

// ---------- SMALL ICONS (climate chart) ----------
function pkg() {
  return `<svg viewBox="0 0 56 56"><rect x="6" y="10" width="44" height="38" fill="var(--cream)" stroke="var(--ink)" stroke-width="1.5"/><rect x="10" y="22" width="36" height="20" fill="var(--oxblood)"/><rect x="14" y="14" width="18" height="3" fill="var(--ink)"/></svg>`
}
function chicken() {
  return `<svg viewBox="0 0 56 56"><ellipse cx="28" cy="34" rx="18" ry="14" fill="var(--charcoal)"/><circle cx="42" cy="22" r="9" fill="var(--charcoal)"/><path d="M37,14 L40,8 L44,14 L48,8 L50,14 Z" fill="var(--oxblood)"/><path d="M50,22 L56,24 L50,26 Z" fill="var(--ochre)"/></svg>`
}
function pigIcon() {
  return `<svg viewBox="0 0 56 56"><ellipse cx="26" cy="34" rx="18" ry="14" fill="var(--charcoal-soft)"/><circle cx="44" cy="30" r="8" fill="var(--charcoal-soft)"/><ellipse cx="48" cy="32" rx="4" ry="3" fill="var(--bone)" opacity="0.5"/></svg>`
}
function fish() {
  return `<svg viewBox="0 0 56 56"><path d="M6,28 Q18,14 38,28 Q18,42 6,28 Z" fill="var(--sage)"/><path d="M38,28 L52,18 L48,28 L52,38 Z" fill="var(--sage)"/><circle cx="16" cy="26" r="1.6" fill="var(--cream)"/></svg>`
}
function plant() {
  return `<svg viewBox="0 0 56 56"><rect x="22" y="36" width="12" height="14" fill="var(--charcoal-soft)"/><path d="M28,38 Q12,28 16,12 Q26,18 28,32 Q30,18 40,12 Q44,28 28,38 Z" fill="var(--sage)"/></svg>`
}

// ---------- US MAP ----------
function usMap() {
  return `
    <svg viewBox="0 0 800 480" preserveAspectRatio="xMidYMid meet">
      <defs>
        <pattern id="mapHatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="6" stroke="var(--charcoal-soft)" stroke-width="0.5" opacity="0.5"/>
        </pattern>
      </defs>
      <path d="M40,200 Q60,140 120,130 L180,120 Q240,110 300,118 L420,118 Q540,112 640,134 L720,150 Q760,170 760,210 L750,260 Q740,300 700,320 L640,340 Q580,350 540,370 L460,392 Q420,400 380,390 L320,372 Q260,360 220,370 L160,378 Q100,372 70,340 Q40,300 36,260 Z"
            fill="var(--bone)" stroke="var(--charcoal)" stroke-width="1.5"/>
      <path d="M40,200 Q60,140 120,130 L180,120 Q240,110 300,118 L420,118 Q540,112 640,134 L720,150 Q760,170 760,210 L750,260 Q740,300 700,320 L640,340 Q580,350 540,370 L460,392 Q420,400 380,390 L320,372 Q260,360 220,370 L160,378 Q100,372 70,340 Q40,300 36,260 Z"
            fill="url(#mapHatch)"/>
      <g>
        <circle cx="320" cy="240" r="6" fill="var(--oxblood)"/>
        <circle cx="380" cy="280" r="6" fill="var(--oxblood)"/>
        <circle cx="430" cy="220" r="6" fill="var(--oxblood)"/>
        <circle cx="500" cy="260" r="6" fill="var(--oxblood)"/>
        <circle cx="560" cy="240" r="6" fill="var(--oxblood)"/>
        <circle cx="600" cy="290" r="6" fill="var(--oxblood)"/>
        <circle cx="280" cy="300" r="6" fill="var(--oxblood)"/>
        <circle cx="350" cy="330" r="6" fill="var(--oxblood)"/>
      </g>
      <g fill="none" stroke="var(--oxblood)" stroke-width="2" stroke-linecap="round">
        <path d="M260,440 Q280,360 320,250"/>
        <path d="M360,440 Q400,360 440,240"/>
        <path d="M460,440 Q510,360 560,250"/>
        <path d="M180,420 Q220,360 280,310"/>
      </g>
      <g fill="var(--oxblood)">
        <path d="M316,254 l8,-2 l-4,8 z"/>
        <path d="M436,244 l8,-2 l-4,8 z"/>
        <path d="M556,254 l8,-2 l-4,8 z"/>
        <path d="M276,314 l8,-2 l-4,8 z"/>
      </g>
      <g font-family="IBM Plex Mono,monospace" font-size="9" letter-spacing="2" fill="var(--charcoal-soft)">
        <text x="60" y="420">N ↑</text>
        <text x="60" y="434">0 — 500 MI</text>
      </g>
      ${grain}
    </svg>`
}

// ---------- HUB CARD ART (6 sphere cards) ----------
const CARD_ART = {
  labor: `
    <svg viewBox="0 0 200 240" preserveAspectRatio="xMidYMax meet">
      <ellipse cx="100" cy="224" rx="72" ry="6" fill="var(--charcoal)" opacity="0.18"/>
      <rect x="0" y="60" width="200" height="160" fill="var(--charcoal-soft)" opacity="0.18"/>
      <line x1="0" y1="100" x2="200" y2="100" stroke="var(--charcoal-soft)" stroke-width="1" opacity="0.25"/>
      <line x1="0" y1="130" x2="200" y2="130" stroke="var(--charcoal-soft)" stroke-width="1" opacity="0.25"/>
      <g transform="translate(100,80)">
        <ellipse cx="0" cy="0" rx="22" ry="24" fill="var(--charcoal)"/>
        <path d="M-32,-10 Q-30,-30 0,-32 Q30,-30 32,-10 L32,4 L-32,4 Z" fill="var(--bone)" opacity="0.85"/>
        <path d="M-26,16 L26,16 L40,140 L-40,140 Z" fill="var(--charcoal)"/>
        <path d="M-30,18 L-44,90 L-30,96 L-14,28 Z" fill="var(--charcoal)"/>
        <path d="M30,18 L44,90 L30,96 L14,28 Z" fill="var(--charcoal)"/>
        <ellipse cx="-42" cy="100" rx="8" ry="11" fill="var(--bone)"/>
        <ellipse cx="42"  cy="100" rx="8" ry="11" fill="var(--bone)"/>
        <path d="M-20,40 L20,40 L34,140 L-34,140 Z" fill="var(--bone)" opacity="0.92"/>
        <ellipse cx="6" cy="100" rx="14" ry="9" fill="var(--oxblood)" opacity="0.75"/>
      </g>
      ${grain}
    </svg>`,

  immigrant: `
    <svg viewBox="0 0 240 200" preserveAspectRatio="xMidYMid meet">
      <defs>
        <pattern id="hatch_imm" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="6" stroke="var(--sage)" stroke-width="0.6" opacity="0.7"/>
        </pattern>
      </defs>
      <path d="M14,42 L188,28 L228,68 L218,138 L188,176 L80,182 L24,164 L10,108 Z"
            fill="var(--bone)" stroke="var(--charcoal)" stroke-width="1.4"/>
      <path d="M14,42 L188,28 L228,68 L218,138 L188,176 L80,182 L24,164 L10,108 Z"
            fill="url(#hatch_imm)"/>
      <g fill="var(--oxblood)">
        <circle cx="70"  cy="92"  r="5"/>
        <circle cx="120" cy="78"  r="5"/>
        <circle cx="156" cy="116" r="5"/>
        <circle cx="92"  cy="142" r="5"/>
        <circle cx="178" cy="80"  r="4"/>
        <circle cx="190" cy="148" r="4"/>
      </g>
      <path d="M40,178 Q90,140 130,90" fill="none" stroke="var(--oxblood)" stroke-width="2" stroke-linecap="round"/>
      <path d="M126,94 l8,-4 l-2,8 z" fill="var(--oxblood)"/>
      <path d="M118,28 L116,182" stroke="var(--charcoal-soft)" stroke-width="0.5" opacity="0.4"/>
      ${grain}
    </svg>`,

  consolidation: `
    <svg viewBox="0 0 240 200" preserveAspectRatio="xMidYMid meet">
      <rect x="20"  y="40"  width="46" height="140" fill="var(--oxblood)"/>
      <rect x="76"  y="58"  width="44" height="122" fill="var(--charcoal)"/>
      <rect x="130" y="70"  width="42" height="110" fill="var(--sage)"/>
      <rect x="182" y="108" width="38" height="72"  fill="var(--ochre)"/>
      <g font-family="Spectral,serif" font-size="22" fill="var(--cream)" text-anchor="middle">
        <text x="43"  y="118">T</text>
        <text x="98"  y="126">J</text>
        <text x="151" y="132">C</text>
        <text x="201" y="152" fill="var(--ink)">N</text>
      </g>
      <rect x="0" y="180" width="240" height="20" fill="var(--charcoal)"/>
      <text x="220" y="198" font-family="IBM Plex Mono,monospace" font-size="9" fill="var(--cream)" text-anchor="end" letter-spacing="2">85% / 4 FIRMS</text>
      ${grain}
    </svg>`,

  climate: `
    <svg viewBox="0 0 240 200" preserveAspectRatio="xMidYMid meet">
      <line x1="20" y1="170" x2="220" y2="170" stroke="var(--charcoal)" stroke-width="1.4"/>
      <rect x="46" y="92"  width="22" height="80" fill="var(--charcoal)"/>
      <rect x="78" y="118" width="18" height="54" fill="var(--charcoal-soft)"/>
      <ellipse cx="60"  cy="78" rx="34" ry="14" fill="var(--bone)" opacity="0.85"/>
      <ellipse cx="86"  cy="62" rx="40" ry="16" fill="var(--bone)" opacity="0.75"/>
      <ellipse cx="118" cy="48" rx="46" ry="18" fill="var(--bone)" opacity="0.7"/>
      <ellipse cx="156" cy="36" rx="40" ry="14" fill="var(--bone)" opacity="0.55"/>
      <ellipse cx="190" cy="46" rx="32" ry="12" fill="var(--bone)" opacity="0.45"/>
      <g transform="translate(150,160) scale(0.45)">
        <path d="M-40,-20 Q-40,-44 -10,-44 L40,-44 Q66,-44 70,-22 L70,0 Q60,8 -34,8 Q-44,0 -40,-12 Z" fill="var(--charcoal)"/>
        <rect x="-30" y="6" width="8"  height="22" fill="var(--charcoal)"/>
        <rect x="40"  y="6" width="8"  height="22" fill="var(--charcoal)"/>
        <rect x="-12" y="6" width="6"  height="22" fill="var(--charcoal-soft)"/>
        <rect x="24"  y="6" width="6"  height="22" fill="var(--charcoal-soft)"/>
        <path d="M68,-40 Q90,-44 92,-26 Q84,-16 70,-22 Z" fill="var(--charcoal)"/>
      </g>
      <text x="22" y="58" font-family="Spectral,serif" font-style="italic" font-size="32" fill="var(--ink)">60</text>
      <text x="22" y="76" font-family="IBM Plex Mono,monospace" font-size="8" fill="var(--charcoal-soft)" letter-spacing="2">KG CO₂ / KG</text>
      ${grain}
    </svg>`,

  health: `
    <svg viewBox="0 0 240 200" preserveAspectRatio="xMidYMid meet">
      <ellipse cx="160" cy="60" rx="58" ry="20" fill="var(--ochre)" opacity="0.4"/>
      <line x1="160" y1="40" x2="160" y2="80" stroke="var(--ochre)" stroke-width="1" opacity="0.5"/>
      <g transform="translate(60,60) rotate(-6)">
        <rect x="0" y="0" width="124" height="120" fill="var(--cream)" stroke="var(--ink)" stroke-width="1.4"/>
        <rect x="10" y="34" width="104" height="60" fill="var(--oxblood)"/>
        <rect x="10" y="10" width="60" height="6" fill="var(--ink)"/>
        <rect x="10" y="20" width="42" height="4" fill="var(--charcoal-soft)"/>
        <rect x="86" y="10" width="28" height="16" fill="var(--ochre)"/>
        <g transform="translate(10,100)" fill="var(--ink)">
          <rect x="0"  y="0" width="2" height="14"/>
          <rect x="4"  y="0" width="1" height="14"/>
          <rect x="7"  y="0" width="3" height="14"/>
          <rect x="12" y="0" width="1" height="14"/>
          <rect x="15" y="0" width="2" height="14"/>
          <rect x="19" y="0" width="3" height="14"/>
          <rect x="24" y="0" width="1" height="14"/>
          <rect x="27" y="0" width="2" height="14"/>
        </g>
      </g>
      <g transform="translate(36,134) rotate(-22)" stroke="var(--ink)" stroke-width="1.4" fill="var(--bone)">
        <rect x="0"  y="0" width="56" height="10"/>
        <rect x="56" y="2" width="14" height="6" fill="var(--charcoal-soft)" stroke="none"/>
        <rect x="-6" y="3" width="6"  height="4" fill="var(--charcoal-soft)" stroke="none"/>
      </g>
      ${grain}
    </svg>`,

  cruelty: `
    <svg viewBox="0 0 240 200" preserveAspectRatio="xMidYMid meet">
      <g stroke="var(--oxblood)" stroke-width="3" opacity="0.85">
        <line x1="40"  y1="20" x2="40"  y2="180"/>
        <line x1="80"  y1="20" x2="80"  y2="180"/>
        <line x1="120" y1="20" x2="120" y2="180"/>
        <line x1="160" y1="20" x2="160" y2="180"/>
        <line x1="200" y1="20" x2="200" y2="180"/>
      </g>
      <line x1="30" y1="22"  x2="210" y2="22"  stroke="var(--oxblood)" stroke-width="3"/>
      <line x1="30" y1="178" x2="210" y2="178" stroke="var(--oxblood)" stroke-width="3"/>
      <g transform="translate(120,118)">
        <path d="M-44,4 Q-44,-30 -8,-32 L36,-32 Q56,-30 56,-10 Q56,16 30,22 L-22,24 Q-44,22 -44,8 Z" fill="var(--bone)"/>
        <circle cx="46" cy="-26" r="14" fill="var(--bone)"/>
        <path d="M38,-38 L42,-46 L46,-38 L50,-46 L54,-38 Z" fill="var(--oxblood)"/>
        <path d="M58,-26 L66,-22 L58,-20 Z" fill="var(--ochre)"/>
        <circle cx="50" cy="-28" r="1.4" fill="var(--ink)"/>
        <rect x="-14" y="22" width="3" height="22" fill="var(--ochre)"/>
        <rect x="10"  y="22" width="3" height="22" fill="var(--ochre)"/>
      </g>
      ${grain}
    </svg>`
}

// ---------- PASTURE SCENE (Hub.html Stage 2) ----------
function buildPasture() {
  const target = document.getElementById('pastureArt')
  if (!target) return
  const img = document.createElement('img')
  img.src = '/assets/hub/a1-pasture.png'
  img.alt = ''
  img.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;object-fit:cover;'
  target.appendChild(img)
}

const CARD_IMGS = {
  labor:         '/assets/sphere-labor/b1-card.png',
  immigrant:     '/assets/sphere-immigrant/b2-card.png',
  consolidation: '/assets/sphere-corporate/b3-card.png',
  climate:       '/assets/sphere-climate/b4-card.png',
  health:        '/assets/sphere-quality/b5-card.png',
  cruelty:       '/assets/sphere-animal/b6-card.png',
}

// ---------- INJECT CARD ART INTO HUB SPHERE SLOTS ----------
function buildCardArt() {
  Object.entries(CARD_IMGS).forEach(([key, src]) => {
    const slot = document.querySelector(`.sphere__art[data-art="${key}"]`)
    if (!slot) return
    const img = document.createElement('img')
    img.src = src
    img.alt = ''
    slot.appendChild(img)
  })
}

// ---------- INJECT SPHERE ASIDE ART ON SPHERE PAGES ----------
function buildSphereArt() {
  const el = document.getElementById('sphereArt')
  if (!el) return
  const current = document.body.dataset.current
  const asideImgs = {
    labor:         '/assets/spots/c5-worker.png',
    consolidation: '/assets/sphere-corporate/b3-card.png',
    climate:       '/assets/sphere-climate/b4-card.png',
    health:        '/assets/sphere-quality/b5-card.png',
    welfare:       '/assets/spots/c3-hen.png',
  }
  if (asideImgs[current]) {
    const img = document.createElement('img')
    img.src = asideImgs[current]
    img.alt = ''
    img.style.cssText = 'width:100%;height:auto;display:block;'
    el.appendChild(img)
    return
  }
  const asideImgsExtra = {
    immigrant: '/assets/spots/d1-us-map.png',
  }
  if (asideImgsExtra[current]) {
    const img = document.createElement('img')
    img.src = asideImgsExtra[current]
    img.alt = ''
    img.style.cssText = 'width:100%;height:auto;display:block;'
    el.appendChild(img)
  }
}

// ---------- INIT ----------
buildPasture()
buildCardArt()
buildSphereArt()

// Export for use in other modules
export const RH_ART = { cow, hills, factory, conveyor, shelf, worker, hen, pig, steer, pkg, chicken, pigIcon, fish, plant, usMap }
window.RH_ART = RH_ART
export default RH_ART
