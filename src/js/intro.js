// src/js/intro.js
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
gsap.registerPlugin(ScrollTrigger)

export function initLenis() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReduced) return null
  const lenis = new Lenis({ lerp: 0.1, smoothWheel: true })
  lenis.on('scroll', ScrollTrigger.update)
  gsap.ticker.add((time) => lenis.raf(time * 1000))
  gsap.ticker.lagSmoothing(0)
  return lenis
}

function buildAisle() {
  const track = document.getElementById('aisleTrack')
  if (!track) return
  track.style.cssText = 'width:3600px;height:100%;position:absolute;top:0;left:0;background-image:url(/assets/hub/a2-grocery-aisle.png);background-repeat:repeat-x;background-size:auto 100%;'
}

function buildAisleSVG() {
  const track = document.getElementById('aisleTrack')
  if (!track) return
  track.style.cssText = 'width:3600px;height:100%;position:absolute;top:0;left:0;'
  // 7 refrigeration units across a wide strip
  const cases = Array.from({length: 7}, (_, i) => {
    const x = i * 500 + 50
    const meatColors = ['var(--oxblood)', '#c8967a', 'var(--ochre)', '#b05a4a', 'var(--oxblood)']
    const shelves = [110, 250, 390, 510].map(y =>
      Array.from({length: 5}, (_, j) => `
        <rect x="${x+25+j*82}" y="${y}" width="72" height="82" fill="${meatColors[j]}" opacity=".7" rx="1"/>
        <rect x="${x+25+j*82}" y="${y}" width="72" height="14" fill="var(--cream)" opacity=".5"/>
        <rect x="${x+29+j*82}" y="${y+4}" width="38" height="3" fill="var(--charcoal-soft)" opacity=".4"/>
        <rect x="${x+29+j*82}" y="${y+9}" width="26" height="2" fill="var(--charcoal-soft)" opacity=".3"/>
      `).join('')
    ).join('')
    return `
      <rect x="${x}" y="80" width="440" height="620" fill="var(--bone)" stroke="var(--charcoal-soft)" stroke-width="1.5" opacity=".9"/>
      <rect x="${x+10}" y="90" width="420" height="8" fill="var(--charcoal-soft)" opacity=".22"/>
      <rect x="${x+20}" y="98" width="1" height="582" fill="var(--charcoal-soft)" opacity=".18"/>
      <rect x="${x+160}" y="98" width="1" height="582" fill="var(--charcoal-soft)" opacity=".18"/>
      <rect x="${x+300}" y="98" width="1" height="582" fill="var(--charcoal-soft)" opacity=".18"/>
      <rect x="${x+420}" y="98" width="1" height="582" fill="var(--charcoal-soft)" opacity=".18"/>
      ${[200,340,480,600].map(y => `<rect x="${x+10}" y="${y}" width="420" height="2" fill="var(--charcoal-soft)" opacity=".15"/>`).join('')}
      ${shelves}
      <text x="${x+220}" y="715" font-family="IBM Plex Mono,monospace" font-size="10"
            fill="var(--charcoal-soft)" text-anchor="middle" letter-spacing="2" opacity=".5">MEAT &amp; POULTRY</text>
    `
  }).join('')
  track.innerHTML = `
    <svg viewBox="0 0 3600 900" preserveAspectRatio="xMinYMid meet"
         style="width:3600px;height:100%;display:block;">
      <rect width="3600" height="900" fill="var(--cream)"/>
      <rect x="0" y="0" width="3600" height="55" fill="var(--bone)" opacity=".6"/>
      ${Array.from({length:9}, (_,i) => `
        <rect x="${i*400+70}" y="8" width="250" height="28" fill="var(--ochre)" opacity=".3"/>
        <rect x="${i*400+70}" y="36" width="250" height="3" fill="var(--charcoal-soft)" opacity=".15"/>
      `).join('')}
      <rect x="0" y="700" width="3600" height="200" fill="#e8dfd0"/>
      <line x1="0" y1="700" x2="3600" y2="700" stroke="var(--charcoal-soft)" stroke-width=".8" opacity=".2"/>
      ${cases}
      <rect width="3600" height="900" fill="url(#paperGrain)" opacity=".2"/>
    </svg>`
}

export function initIntro() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const d = prefersReduced ? 0.01 : 1

  // Title fades in
  gsap.from('.stage-title__h1',      { opacity: 0, y: 30, duration: 0.9*d, delay: 0.3, ease: 'power2.out' })
  gsap.from('.stage-title__tagline', { opacity: 0, y: 20, duration: 0.8*d, delay: 0.65, ease: 'power2.out' })
  gsap.from('.stage-title__cue',     { opacity: 0,        duration: 0.6*d, delay: 1.1 })

  // Build aisle, then pin + pan
  buildAisle()
  const track = document.getElementById('aisleTrack')
  if (track && !prefersReduced) {
    ScrollTrigger.refresh()
    const panWidth = 3600 - window.innerWidth
    gsap.to(track, {
      x: -panWidth,
      ease: 'none',
      scrollTrigger: {
        trigger: '#stageAisle',
        start: 'top top',
        end: `+=${panWidth}`,
        scrub: 1.2,
        pin: true,
        anticipatePin: 1,
      }
    })
  }

  // Pasture fades in after aisle
  gsap.from('#stagePasture', {
    opacity: 0, duration: 0.8*d,
    scrollTrigger: {
      trigger: '#stagePasture',
      start: 'top 85%',
      toggleActions: 'play none none none'
    }
  })
}

// Auto-init on hub page; skip intro animations when going straight to #hub
if (document.getElementById('stageTitle')) {
  initLenis()
  if (!document.documentElement.hasAttribute('data-direct-hub')) {
    initIntro()
  }
} else {
  initLenis()
}
