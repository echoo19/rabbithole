// src/js/animations.js
import gsap from 'gsap'
import { initRouter } from './router.js'

export function initHub() {
  const btn    = document.getElementById('unveilBtn')
  const skip   = document.getElementById('skipBtn')
  const pasture= document.getElementById('stagePasture')
  const hub    = document.getElementById('hubStage')
  const reflect= document.getElementById('hubReflect')
  const corner = document.getElementById('reflectCorner')
  const left   = document.querySelector('.curtain__panel--left')
  const right  = document.querySelector('.curtain__panel--right')
  if (!btn) return

  // Position panels off-screen via GSAP only (no CSS transform on panels).
  // Curtain container stays visibility:hidden until the animation actually starts.
  const curtain = document.querySelector('.curtain')
  gsap.set(left,  { xPercent: -101 })
  gsap.set(right, { xPercent:  101 })
  gsap.set(corner, { opacity: 0, pointerEvents: 'none' })

  const titleLeft  = left?.querySelector('.curtain__title')
  const titleRight = right?.querySelector('.curtain__title')

  function unveil(quick) {
    if (quick) {
      gsap.set(pasture, { opacity: 0, pointerEvents: 'none' })
      gsap.set([hub, reflect], { display: 'block', opacity: 1, y: 0, pointerEvents: 'auto' })
      gsap.set(corner, { opacity: 1, pointerEvents: 'auto' })
      history.replaceState(null, '', '#hub')
      document.getElementById('hubStage')?.scrollIntoView({ behavior: 'instant' })
      return
    }
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const d = prefersReduced ? 0.01 : 1

    // ── Phase 1 (0 – 1.1s): panels sweep IN from sides  (power2.out = clear visible arc)
    // ── Phase 2 (1.1 – 1.6s): fully closed; "behind / the curtain" text; scene swaps
    // ── Phase 3 (1.6 – 2.7s): panels sweep OUT from center  (power2.inOut = graceful)
    const tl = gsap.timeline()

    // Make curtain visible the instant the animation begins
    tl.set(curtain, { visibility: 'visible' }, 0)
      // Panels sweep in — long enough duration + gentle easing = readable arc
      .to(left,  { xPercent: 0, duration: 1.1 * d, ease: 'power2.out' }, 0)
      .to(right, { xPercent: 0, duration: 1.1 * d, ease: 'power2.out' }, 0)

      // Title fades in near the end of the in-sweep
      .to([titleLeft, titleRight], { opacity: 0.85, duration: 0.3 * d, ease: 'power1.out' }, 0.75 * d)

      // Swap scene content while curtain is fully closed
      .set(pasture, { opacity: 0, pointerEvents: 'none' }, 1.1 * d)
      .set([hub, reflect], { display: 'block', opacity: 0, y: 16, pointerEvents: 'auto' }, 1.1 * d)
      .to([hub, reflect], { opacity: 1, y: 0, duration: 0.4 * d, ease: 'power2.out' }, 1.2 * d)

      // Title fades out just before panels open
      .to([titleLeft, titleRight], { opacity: 0, duration: 0.2 * d }, 1.4 * d)

      // Panels sweep out
      .to(left,  { xPercent: -101, duration: 1.1 * d, ease: 'power2.inOut' }, 1.6 * d)
      .to(right, { xPercent:  101, duration: 1.1 * d, ease: 'power2.inOut' }, 1.6 * d)

      // Hide curtain once panels are fully off-screen again
      .set(curtain, { visibility: 'hidden' }, 2.7 * d)

      .to(corner, { opacity: 1, pointerEvents: 'auto', duration: 0.3 * d }, 2.5 * d)
      .call(() => {
        history.replaceState(null, '', '#hub')
        document.getElementById('hubStage')?.scrollIntoView({ behavior: 'smooth' })
      }, [], 2.7 * d)
  }

  btn.addEventListener('click', () => unveil(false))
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
      gsap.to(card,  { y: -6, duration: 0.35, ease: 'power2.out',
        boxShadow: '10px 14px 0 rgba(43,43,43,0.10)' })
      if (arrow) gsap.to(arrow, { x: 6, duration: 0.25 })
    })
    card.addEventListener('mouseleave', () => {
      gsap.to(card,  { y: 0, duration: 0.35, ease: 'power2.out', clearProps: 'boxShadow' })
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
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      gsap.to({ val: 0 }, {
        val: target,
        duration: prefersReduced ? 0.01 : 1.4,
        ease: 'power2.out',
        onUpdate: function() { span.textContent = this.targets()[0].val.toFixed(dec) },
        onComplete: () => { span.textContent = target.toFixed(dec) }
      })
    })
  }, { threshold: 0.5 })
  spans.forEach(s => io.observe(s))
}

function initAsideParallax() {
  const body   = document.querySelector('.article-body')
  const sticky = document.querySelector('.article-aside__sticky')
  if (!body || !sticky) return

  const NAV_H = 96 // matches CSS top: 6rem

  function update() {
    const viewH    = window.innerHeight
    const bodyRect = body.getBoundingClientRect()

    // how far the body's top has scrolled past the nav
    const scrolled = Math.max(0, NAV_H - bodyRect.top)
    // total scrollable distance for the body section
    const range    = body.offsetHeight - (viewH - NAV_H)
    const progress = range > 0 ? Math.min(1, scrolled / range) : 0

    // how much taller the aside content is compared to the visible slot
    const maxShift = Math.max(0, sticky.scrollHeight - (viewH - NAV_H))

    sticky.style.transform = `translateY(${-(progress * maxShift).toFixed(1)}px)`
  }

  window.addEventListener('scroll', update, { passive: true })
  window.addEventListener('resize', update, { passive: true })
  update()
}

// Run on every page
initCountUp()
initRouter()

// Hub-only
if (document.body.dataset.page === 'hub') {
  initHub()
}

// Article pages
if (document.querySelector('.article-body')) {
  initAsideParallax()
}
