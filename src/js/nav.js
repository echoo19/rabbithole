// src/js/nav.js
(function () {
  const PAGES = [
    { key: 'labor',        num: '01', label: 'Labor',         href: '/labor.html' },
    { key: 'immigrant',    num: '02', label: 'Migration',     href: '/immigrant-labor.html' },
    { key: 'consolidation',num: '03', label: 'Consolidation', href: '/consolidation.html' },
    { key: 'climate',      num: '04', label: 'Climate',       href: '/climate.html' },
    { key: 'health',       num: '05', label: 'Health',        href: '/health.html' },
    { key: 'welfare',      num: '06', label: 'Cruelty',       href: '/welfare.html' },
  ]
  const current = document.body.dataset.current || ''
  const nav = document.createElement('nav')
  nav.className = 'article-nav'
  nav.setAttribute('aria-label', 'Chapter navigation')
  nav.innerHTML = `
    <a class="article-nav__brand" href="/index.html#hub">A Rabbit Hole</a>
    <ul class="article-nav__list">
      ${PAGES.map(p => `
        <li><a href="${p.href}" ${p.key === current ? 'class="is-current" aria-current="page"' : ''}>
          <span class="article-nav__num">${p.num}</span>${p.label}
        </a></li>`).join('')}
    </ul>
  `
  document.body.insertBefore(nav, document.body.firstChild)
})()
