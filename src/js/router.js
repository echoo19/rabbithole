// src/js/router.js
import gsap from 'gsap'

export function initRouter() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  // Disable browser scroll restoration — we handle position ourselves
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual'

  // Scroll to top on fresh page load (not on hash-only navigations)
  if (!location.hash || !document.getElementById('stageTitle')) {
    window.scrollTo(0, 0)
  }

  // Page-in fade
  gsap.from(document.body, { opacity: 0, duration: prefersReduced ? 0.01 : 0.3, ease: 'power1.out' })

  // Overlay for exit transition
  const overlay = document.createElement('div')
  overlay.setAttribute('aria-hidden', 'true')
  overlay.style.cssText = [
    'position:fixed', 'inset:0', 'background:var(--oxblood)',
    'z-index:200', 'opacity:0', 'pointer-events:none'
  ].join(';')
  document.body.appendChild(overlay)

  // bfcache fix: if the browser restores this page from cache the overlay
  // may still be at opacity:1 from the exit animation — reset it immediately
  window.addEventListener('pageshow', (e) => {
    if (e.persisted) {
      gsap.set(overlay, { opacity: 0, pointerEvents: 'none' })
      gsap.from(document.body, { opacity: 0, duration: prefersReduced ? 0.01 : 0.3 })
    }
  })

  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href]')
    if (!a) return
    const href = a.getAttribute('href')
    if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto') || a.target) return
    e.preventDefault()
    gsap.to(overlay, {
      opacity: 1,
      duration: prefersReduced ? 0.01 : 0.18,
      ease: 'power2.in',
      onComplete: () => { window.location.href = href }
    })
  })
}
