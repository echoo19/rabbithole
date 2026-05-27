// src/js/quiz.js
const QUESTIONS = [
  {
    sphere: 'Labor',
    q: 'How many cattle does a typical U.S. line worker process per hour?',
    opts: ['About 40', 'About 80', 'About 140', 'About 200'],
    correct: 2,
    reveal: 'Around 140 head per hour — a figure that has nearly doubled over two decades. Each annual increase was modest. Aggregated, it reshaped injury rates across the entire industry.',
    link: '/labor.html'
  },
  {
    sphere: 'Immigrant Labor',
    q: 'What share of the U.S. meatpacking workforce is foreign-born?',
    opts: ['About 15%', 'About 30%', 'About 51%', 'About 70%'],
    correct: 2,
    reveal: 'USDA Economic Research Service data puts the foreign-born share at roughly 51% — the highest of any major U.S. food production sector.',
    link: '/immigrant-labor.html'
  },
  {
    sphere: 'Corporate Influence',
    q: 'Roughly what share of U.S. beef processing do the four largest firms control?',
    opts: ['About 40%', 'About 60%', '72–85%', 'About 95%'],
    correct: 2,
    reveal: 'Tyson Foods, JBS USA, Cargill, and National Beef collectively control an estimated 72–85% of U.S. beef processing — a concentration higher than banking, telecom, or airlines.',
    link: '/consolidation.html'
  },
  {
    sphere: 'Climate',
    q: 'How does beef\'s carbon footprint compare to chicken, per kilogram of protein?',
    opts: ['About the same', 'About 2×', 'About 5×', 'About 10×'],
    correct: 3,
    reveal: 'Poore & Nemecek (Science, 2018) found beef produces roughly 60 kg CO₂eq per kilogram — about 10× the footprint of chicken. The gap is driven by enteric methane and land-use change, not refrigeration.',
    link: '/climate.html'
  },
  {
    sphere: 'Quality & Health',
    q: 'How did the WHO classify processed meat in 2015?',
    opts: ['Possibly carcinogenic (Group 2B)', 'Probably carcinogenic (Group 2A)', 'Known carcinogen (Group 1)', 'Not classifiable'],
    correct: 2,
    reveal: 'The WHO\'s IARC classified processed meat as a Group 1 carcinogen — the same evidence category as tobacco smoke, based on sufficient evidence of bowel and stomach cancer risk in humans.',
    link: '/health.html'
  },
  {
    sphere: 'Animal Cruelty',
    q: 'How long does a standard U.S. broiler chicken live before slaughter?',
    opts: ['About 6 months', 'About 3 months', 'About 10 weeks', 'About 6 weeks'],
    correct: 3,
    reveal: 'Around 42 days. Broilers are bred to gain weight so fast that their skeletal and cardiovascular systems often cannot keep pace — leading to chronic leg pain and organ failure before slaughter.',
    link: '/welfare.html'
  }
]

const OPEN_PROMPTS = [
  { id: 'surprise',   label: 'What surprised you most in what you read?' },
  { id: 'shopChange', label: 'How will this change the way you shop, if at all?' }
]

export function initQuiz() {
  const mount   = document.getElementById('quizMount')
  const stepEl  = document.getElementById('quizStep')
  const progEl  = document.getElementById('quizProgress')
  const titleEl = document.getElementById('quizTitle')
  if (!mount) return

  const total = QUESTIONS.length + OPEN_PROMPTS.length
  let current = 0
  const answers = []
  const openAnswers = {}

  progEl.innerHTML = Array.from({length: total}, () => '<i></i>').join('')

  function paintProg() {
    ;[...progEl.children].forEach((pip, i) => {
      pip.className = i < current ? 'is-done' : i === current ? 'is-current' : ''
    })
  }

  function renderMC(idx) {
    const q = QUESTIONS[idx]
    stepEl.textContent = `Question ${idx + 1} of ${QUESTIONS.length}`
    if (titleEl) titleEl.textContent = q.sphere
    paintProg()
    mount.innerHTML = `
      <h3 class="quiz__q">${q.q}</h3>
      <div class="quiz__opts" id="qOpts">
        ${q.opts.map((o, i) => `
          <button class="quiz__opt" data-idx="${i}">
            <span>${o}</span><span class="mark">${String.fromCharCode(65+i)}</span>
          </button>`).join('')}
      </div>
      <div class="quiz__reveal" id="qReveal"></div>
      <div style="display:flex;gap:1rem;align-items:center;margin-top:1rem;flex-wrap:wrap">
        <button class="quiz__next" id="qNext" disabled>Next →</button>
        <a href="${q.link}" id="qLink"
           style="font-family:var(--mono);font-size:.68rem;letter-spacing:.18em;text-transform:uppercase;color:var(--oxblood);text-decoration:none;opacity:0;transition:opacity .3s">
          Read the full chapter →
        </a>
      </div>`
    let answered = false
    mount.querySelectorAll('.quiz__opt').forEach(btn => {
      btn.addEventListener('click', () => {
        if (answered) return
        answered = true
        const chosen = parseInt(btn.dataset.idx)
        answers.push({ question: q.q, sphere: q.sphere, selected: chosen, correct: chosen === q.correct })
        mount.querySelectorAll('.quiz__opt').forEach((b, j) => {
          b.dataset.state = j === q.correct ? 'correct' : j === chosen ? 'wrong' : ''
        })
        const rev = document.getElementById('qReveal')
        rev.textContent = q.reveal
        rev.classList.add('is-in')
        document.getElementById('qNext').disabled = false
        document.getElementById('qLink').style.opacity = '1'
      })
    })
    document.getElementById('qNext').addEventListener('click', () => { current++; render() })
  }

  function renderOpen(idx) {
    const p = OPEN_PROMPTS[idx]
    const isLast = idx === OPEN_PROMPTS.length - 1
    stepEl.textContent = `Reflection ${idx + 1} of ${OPEN_PROMPTS.length}`
    if (titleEl) titleEl.textContent = 'Reflect'
    paintProg()
    mount.innerHTML = `
      <h3 class="quiz__q">${p.label}</h3>
      <textarea id="openTa"
        style="width:100%;min-height:120px;font-family:var(--sans);font-size:1rem;line-height:1.5;padding:.75rem 1rem;background:var(--bone);border:1px solid rgba(43,43,43,.18);color:var(--ink);resize:vertical;margin-bottom:1rem;outline:none"
        placeholder="Write anything — or skip."></textarea>
      <button class="quiz__next" id="qNext">${isLast ? 'Submit →' : 'Next →'}</button>`
    document.getElementById('qNext').addEventListener('click', () => {
      openAnswers[p.id] = document.getElementById('openTa').value.trim()
      current++
      if (isLast) { save(); renderDone() } else render()
    })
  }

  function renderDone() {
    stepEl.textContent = `Complete · ${total} of ${total}`
    if (titleEl) titleEl.textContent = 'You made it through'
    ;[...progEl.children].forEach(p => { p.className = 'is-done' })
    mount.innerHTML = `
      <div class="quiz__done">
        The point of this piece is not guilt. It's visibility.<br/>
        What you do with it is up to you — eat differently, vote differently,
        ask different questions of the people you buy from, or none of the above.
        <span style="display:block;margin-top:1rem;font-family:var(--mono);font-size:.7rem;letter-spacing:.2em;text-transform:uppercase;color:var(--charcoal-soft)">— Editorial Desk</span>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-top:2rem">
        <a class="read-more" href="#hubStage" style="justify-content:center">← The six spheres</a>
        <a class="read-more" href="#stageTitle" onclick="window.scrollTo({top:0,behavior:'smooth'});return false;" style="justify-content:center">↑ Back to top</a>
      </div>`
  }

  function save() {
    try {
      localStorage.setItem(
        `rabbit-hole-session-${Date.now()}`,
        JSON.stringify({ submitted: new Date().toISOString(), quiz: answers, reflection: openAnswers })
      )
    } catch(_) {}
  }

  function render() {
    if (current < QUESTIONS.length) renderMC(current)
    else if (current < QUESTIONS.length + OPEN_PROMPTS.length) renderOpen(current - QUESTIONS.length)
    else renderDone()
  }
  render()
}

if (document.getElementById('quizMount')) initQuiz()
