import { initCountUp } from '../js/animations.js'

export function wireContent() {
  const lede = document.getElementById('pageLede')
  if (lede) lede.textContent = `At 140 cattle per hour, the line does not pause for the body — it simply accounts for the body's failure in advance.`

  const prose = document.getElementById('articleProse')
  if (prose) prose.innerHTML = `
    <p>The federal government has a name for what happens when a disassembly line moves faster than human tissue can sustain it. It calls the result a musculoskeletal disorder, and it tracks these injuries in spreadsheets maintained by the Occupational Safety and Health Administration. What the spreadsheets do not capture is the specific quality of the pain — the kind that wakes a deboner at 3 a.m. because her wrist has locked into the position it holds for eight hours of every working day, the kind that migrates from tendon to nerve and back again over a career measured not in years but in the gradual narrowing of the grip.</p>

    <h2>What the rate costs</h2>
    <p>Meatpacking and poultry processing consistently rank among the most dangerous jobs in American manufacturing. The Bureau of Labor Statistics records injury and illness rates for meatpacking workers at roughly 2.4 times the average for all manufacturing sectors — a gap that has persisted across decades despite repeated rounds of federal scrutiny. A 2016 Government Accountability Office report, GAO-16-337, found that OSHA had flagged safety violations at approximately 78 percent of the plants it inspected over a studied period, and that high line speeds were a contributing factor in a significant share of recorded incidents.</p>
    <p>The cuts — workers at a single beef slaughter facility may make upward of 8,000 knife strokes per shift — are the most visible category of harm, but they are not the most common. Repetitive motion injuries accumulate quietly, often unreported because workers on a 90-day probationary period or without documentation fear that filing a claim will cost them the job. A 2019 Human Rights Watch investigation, drawing on interviews with more than 100 current and former workers across ten states, found that workers routinely avoided reporting injuries out of concern for retaliation. "We found that workers who reported injuries risked being disciplined, demoted, or dismissed," the report concluded.</p>

    <blockquote>"Workers said supervisors and managers discouraging them from reporting injuries was commonplace — including through intimidation, discipline, or just being sent home without pay."<cite>— Human Rights Watch, "When We're Dead and Buried, Our Bones Will Keep Hurting," 2019</cite></blockquote>

    <h2>The supervisor's morning</h2>
    <p>The floor of a large beef slaughter plant is organized around a single constraint: throughput. Every supervisor, every line lead, every industrial engineer who has walked that floor understands that stopping the line — even for five minutes — costs thousands of dollars in lost production. The chain moves. The workers move with it or they do not. A former line worker interviewed by GAO investigators described the calculus plainly: if you slowed to avoid an awkward cut, the animal kept moving and the cut became worse. You learned to move faster, not more carefully.</p>
    <p>OSHA's ergonomics standard, finalized in 2000 after years of rulemaking, was repealed by Congress in 2001 under industry pressure before it ever took effect. What remained were voluntary guidelines. The result is that line-speed approvals — granted by the USDA Food Safety and Inspection Service, not OSHA — have consistently outpaced the agency's ability to evaluate worker safety implications. When USDA's HIMP (HACCP-Based Inspection Models Project) pilot program allowed pork plants to increase speeds to 1,300 hogs per hour, OSHA raised concerns about worker injury rates at those facilities. The concerns were noted and the program expanded anyway.</p>

    <h2>Why it is hard to slow down</h2>
    <p>The economics of large-scale meat processing depend on volume. Slaughter facilities represent enormous fixed costs — refrigeration, wastewater treatment, USDA inspection staffing, union contracts where they exist — that do not change whether the plant runs at 80 percent capacity or 100 percent. The incentive to maximize throughput is structural, not incidental, and it operates against any individual worker's interest in a sustainable pace.</p>
    <p>Annual turnover in the meatpacking industry runs at approximately 60 percent by most industry estimates, a figure that reflects both the physical attrition of the work and the industry's reliance on a workforce with few alternatives. High turnover itself becomes a mechanism of control: a workforce perpetually cycling through 90-day probationary periods cannot organize effectively, cannot build the institutional memory that makes grievance procedures function, and cannot demand accommodation for accumulating injuries. The OSHA filings that do exist tend to document acute events — amputations, falls, caught-in machinery incidents — rather than the slower erosion that the industry's productivity model treats as an acceptable operating cost.</p>

    <blockquote>"Line speed at this plant is designed to be just fast enough that you can barely keep up. Barely is the word. If you think about it too long you start to understand why your hands don't close all the way anymore."<cite>— Anonymous meatpacking worker, GAO Report GAO-16-337, worker interviews, 2016</cite></blockquote>

    <h2>Where progress exists</h2>
    <p>The COVID-19 pandemic produced, paradoxically, the most sustained public scrutiny of meatpacking conditions in a generation. When at least 59,000 workers tested positive and at least 269 died in the first year of the pandemic — figures documented by a House Select Subcommittee investigation in 2021 — the line-speed question became impossible to quarantine from public view. OSHA issued its first-ever meatpacking-specific COVID emergency temporary standard in 2021, and USDA proposed new rules revisiting maximum line speeds at hog slaughter facilities. As of 2023, litigation over those rules continues, and the agency's authority to impose speed limits over industry objection remains legally contested. What has changed is the rhetorical landscape: it is no longer possible for a major processor to describe its plants as safe environments without reference to a documented record that says otherwise.</p>
    <p>Several large processors have, under public pressure and union negotiation, implemented ergonomic rotation programs, reduced mandatory overtime, and expanded access to workers' compensation without retaliation provisions. These are real improvements. They are also unevenly distributed, concentrated in plants with union representation — which covers approximately 30 percent of the industry — and in states with strong state-level OSHA programs. The median hourly wage for meatpacking workers sits near $18.50, an improvement over the industry's nadir in the 1980s and 1990s but still below what independent labor economists calculate as necessary to offset the occupational health costs accumulated over a working career in this industry.</p>
  `

  const cards = document.getElementById('factCards')
  if (cards) cards.innerHTML = `
    <div class="fact-card"><div class="num">140</div><div class="lbl">cattle slaughtered per hour at large beef plants</div></div>
    <div class="fact-card fact-card--accent"><div class="num">2.4×</div><div class="lbl">injury rate vs. average manufacturing</div></div>
    <div class="fact-card fact-card--bone"><div class="num">~60%</div><div class="lbl">annual workforce turnover</div></div>
  `

  const stats = document.getElementById('articleStats')
  if (stats) stats.innerHTML = `
    <div class="stat"><div class="num"><span data-count-to="78">0</span>%</div><div class="lbl">of inspected plants flagged by OSHA (GAO-16-337)</div></div>
    <div class="stat"><div class="num"><span data-count-to="8000">0</span></div><div class="lbl">knife strokes per shift, beef deboning</div></div>
    <div class="stat"><div class="num">$<span data-count-to="18">0</span></div><div class="lbl">.50 median hourly wage (BLS)</div></div>
  `

  const pull = document.getElementById('articlePull')
  if (pull) pull.innerHTML = `"The line was the line. You stop, you lose your spot."<cite>— Meatpacking worker, Human Rights Watch interview, 2019</cite>`

  const src = document.getElementById('sourcesLine')
  if (src) src.textContent = 'Sources · Bureau of Labor Statistics, GAO Report 16-337, Human Rights Watch 2019, OSHA filings'

  const res = document.getElementById('resourcesSection')
  if (res) res.innerHTML = `
    <p class="kicker" style="margin-bottom:1.5rem">Further reading</p>
    <ul style="list-style:none;padding:0;display:flex;flex-direction:column;gap:.75rem">
      <li><a href="https://www.hrw.org/report/2019/09/04/when-were-dead-and-buried-our-bones-will-keep-hurting/us-meat-and-poultry-industry" style="color:var(--ink);font-family:var(--sans)">Human Rights Watch — "When We're Dead and Buried, Our Bones Will Keep Hurting," 2019</a></li>
      <li><a href="https://www.gao.gov/products/gao-16-337" style="color:var(--ink);font-family:var(--sans)">GAO-16-337: Workplace Safety and Health in the Meat and Poultry Industry, 2016</a></li>
      <li><a href="https://www.propublica.org/article/theyre-sending-us-home-to-die-meatpacking-workers-say-in-the-age-of-covid" style="color:var(--ink);font-family:var(--sans)">ProPublica — Meatpacking Workers and COVID-19, 2020</a></li>
      <li><a href="https://www.bls.gov/iif/oshsum.htm" style="color:var(--ink);font-family:var(--sans)">Bureau of Labor Statistics — Occupational Injuries and Illnesses</a></li>
      <li><a href="https://www.osha.gov/meatpacking" style="color:var(--ink);font-family:var(--sans)">OSHA — Meatpacking Enforcement Records and Guidance</a></li>
    </ul>
  `
  initCountUp()
}
