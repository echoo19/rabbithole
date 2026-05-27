import { initCountUp } from '../js/animations.js'

export function wireContent() {
  const lede = document.getElementById('pageLede')
  if (lede) lede.textContent = `Roughly half of everyone who cuts, trims, and packages the meat Americans eat was born in another country, a workforce whose precarity is not incidental to the industry's cost structure but central to it.`

  const prose = document.getElementById('articleProse')
  if (prose) prose.innerHTML = `
    <p>The USDA Economic Research Service has tracked the demographics of the meatpacking and poultry-processing workforce for decades, and the numbers tell a story the industry itself rarely narrates directly. By the most recent ERS estimates, approximately 51 percent of workers in animal slaughter and processing are foreign-born — a share that has climbed steadily since the 1980s, when processors dismantled their union contracts, cut wages by more than a third in real terms, and recruited deliberately in immigrant communities and refugee resettlement centers as a strategy for rebuilding a cheaper workforce.</p>

    <h2>Who works the line</h2>
    <p>The foreign-born workers in meatpacking plants are not a monolith. They include legal permanent residents, naturalized citizens, refugees admitted under federal resettlement programs, holders of temporary work visas, and a substantial population of undocumented workers whose presence the industry has long tolerated because it suppresses wages and inhibits organizing. Pew Research Center estimates that approximately 37 percent of workers in meatpacking and poultry processing may be undocumented — a figure that carries significant methodological uncertainty but is consistent with plant-level studies and enforcement records.</p>
    <p>The geographic clustering is pronounced. Garden City, Kansas, and Lexington, Nebraska, transformed over roughly two decades from majority-white agricultural towns into some of the most ethnically diverse small cities in the Great Plains, their demographics driven almost entirely by the labor needs of nearby beef and pork slaughter facilities. Storm Lake, Iowa, a town of fewer than 15,000, has a public school district where students speak more than 20 languages, a direct consequence of recruiting pipelines that connected Burmese, Guatemalan, Somali, and Mexican communities to plant jobs that no other sector of the local economy was generating.</p>

    <figure class="article-scene">
      <img src="/assets/spots/c1-beef-cattle.png" alt="Beef steer side-profile, paper-cut spot illustration" width="1024" height="1024" loading="lazy">
    </figure>

    <h2>How they got there</h2>
    <p>The recruitment networks that bring immigrant workers to meatpacking plants are rarely operated by the companies themselves. Processors have historically maintained arm's-length relationships with labor contractors and recruiters who handle the actual work of sourcing employees — an arrangement that has, in some cases, insulated companies from legal liability when those workers turned out to be undocumented. A 1999 investigation by the Immigration and Naturalization Service found that several large poultry processors had knowingly used subcontractors who recruited undocumented workers; the companies faced civil fines but no criminal prosecution, and the practice continued in modified form.</p>
    <p>Many refugee workers arrive through formal resettlement channels, connected to plant jobs by resettlement agencies that have contractual relationships with food companies. The Department of Labor's Wage and Hour Division has documented recurring patterns of wage theft in this segment of the workforce — workers whose pay stubs reflect time paid at the legal rate while their actual hours, including donning and doffing time, cleaning time, and mandatory pre-shift meetings, go uncompensated. A 2015 WHD enforcement action against a Midwest poultry processor found that workers had been systematically shorted for off-the-clock work over a period of several years, resulting in a $3.8 million back-wage settlement — a figure that represented a fraction of the estimated total underpayment.</p>

    <blockquote>"Workers in the poultry and meat industries are among the most vulnerable in our workforce. Language barriers, immigration status, and the fear of job loss make it difficult for them to report violations or claim the wages they've earned."<cite>— U.S. Department of Labor, Wage and Hour Division, enforcement statement, 2016</cite></blockquote>

    <figure class="article-scene">
      <img src="/assets/spots/d1-us-map.png" alt="US map with meatpacking plant locations and migration arrows, paper-cut illustration" width="1024" height="1024" loading="lazy">
    </figure>

    <h2>The raids</h2>
    <p>On August 7, 2019, Immigration and Customs Enforcement agents simultaneously raided seven poultry processing plants across Mississippi, arresting 680 workers in the largest single-state worksite enforcement action in American history. The plants were owned by Koch Foods, Peco Foods, and several smaller processors. The workers arrested were predominantly from Guatemala and Mexico. Many had lived in Mississippi for years, had children enrolled in local schools, and had been paying taxes through individual taxpayer identification numbers.</p>
    <p>The raids took place on the first day of school. Children came home to find their parents gone, or came to school to find their parents had not come home. The images — children crying outside ICE detention centers, community organizations scrambling to place minors whose parents were being processed for deportation — circulated nationally and produced a brief, intense moment of political attention to the conditions that had made such a workforce possible in the first place. Koch Foods, one of the employers whose workers were arrested, had been the subject of a previous DOL settlement over sexual harassment and racial discrimination against Hispanic workers at its Morton, Mississippi facility. The company was not charged in the 2019 enforcement action.</p>

    <blockquote>"I've been here 11 years. I pay my taxes. I have four children who are citizens. And they took me in front of my coworkers like I was a criminal."<cite>— Mississippi poultry worker, interviewed by The New York Times following August 2019 ICE raids</cite></blockquote>

    <h2>Leverage and its absence</h2>
    <p>The legal and political vulnerability of undocumented workers is not simply a side effect of immigration enforcement policy — it is a structural feature that the industry has, in various ways, relied upon. A worker who fears deportation cannot file an OSHA complaint without risking exposure. A worker on a temporary visa tied to a specific employer cannot easily leave an abusive work environment without losing their legal status. A worker who does not speak English cannot independently navigate a workers' compensation system designed for native speakers with stable documentation.</p>
    <p>The COVID-19 pandemic made the leverage dynamic visible in a way it rarely had been before. Meatpacking workers were declared essential in April 2020 by executive order, meaning they were required to continue reporting to densely packed facilities that had become demonstrably dangerous. Workers who refused — citing the spread of infection on the line, the absence of personal protective equipment, the impossibility of social distancing at a cutting table — faced termination. Many of the workers who continued, under conditions they understood to be dangerous, were the same workers whose immigration status gave them the fewest alternatives. The plants stayed open. The workers got sick. Some of them died.</p>
  `

  const cards = document.getElementById('factCards')
  if (cards) cards.innerHTML = `
    <div class="fact-card"><div class="num">~51%</div><div class="lbl">foreign-born share of meatpacking workforce (USDA ERS)</div></div>
    <div class="fact-card fact-card--accent"><div class="num">~37%</div><div class="lbl">estimated undocumented workers (Pew Research)</div></div>
    <div class="fact-card fact-card--bone"><div class="num">680</div><div class="lbl">workers arrested in 2019 Mississippi ICE raids</div></div>
  `

  const stats = document.getElementById('articleStats')
  if (stats) stats.innerHTML = `
    <div class="stat"><div class="num"><span data-count-to="51">0</span>%</div><div class="lbl">foreign-born share of workforce (USDA ERS)</div></div>
    <div class="stat"><div class="num"><span data-count-to="680">0</span></div><div class="lbl">workers arrested in single-day 2019 raids</div></div>
    <div class="stat"><div class="num"><span data-count-to="37">0</span>%</div><div class="lbl">estimated undocumented share (Pew Research)</div></div>
  `

  const pull = document.getElementById('articlePull')
  if (pull) pull.innerHTML = `"Workers in the poultry and meat industries are among the most vulnerable in our workforce. Language barriers, immigration status, and the fear of job loss make it difficult for them to report violations or claim the wages they've earned."<cite>— U.S. Department of Labor, Wage and Hour Division, 2016</cite>`

  const src = document.getElementById('sourcesLine')
  if (src) src.textContent = 'Sources · USDA ERS, Pew Research Center, ICE press release Aug 2019, DOL Wage and Hour Division'

  const res = document.getElementById('resourcesSection')
  if (res) res.innerHTML = `
    <p class="kicker" style="margin-bottom:1.5rem">Further reading</p>
    <ul style="list-style:none;padding:0;display:flex;flex-direction:column;gap:.75rem">
      <li><a href="https://www.ers.usda.gov/topics/food-markets-prices/processing-marketing/meatpacking-and-processing/" style="color:var(--ink);font-family:var(--sans)">USDA ERS — Meatpacking and Processing Workforce Reports</a></li>
      <li><a href="https://www.pewresearch.org/topic/immigration/" style="color:var(--ink);font-family:var(--sans)">Pew Research Center — Immigration Data and Policy Analysis</a></li>
      <li><a href="https://www.nytimes.com/2019/08/07/us/ice-raids-mississippi.html" style="color:var(--ink);font-family:var(--sans)">The New York Times — Mississippi ICE Raids, August 2019</a></li>
      <li><a href="https://www.hrw.org/news/2020/09/09/us-meat-and-poultry-industry-treatment-workers-concerns-advocacy" style="color:var(--ink);font-family:var(--sans)">Human Rights Watch — Immigration Status and Meatpacking Workers</a></li>
      <li><a href="https://www.meatpoultry.com/articles/workforce-demographics" style="color:var(--ink);font-family:var(--sans)">Meat &amp; Poultry — Workforce Demographics and Industry Trends</a></li>
    </ul>
  `
  initCountUp()
}
