import { initCountUp } from '../js/animations.js'

export function wireContent() {
  const lede = document.getElementById('pageLede')
  if (lede) lede.textContent = `The standard commercial broiler chicken lives 42 days — hatched, grown to slaughter weight, and killed within a calendar window shorter than most school vacations, in conditions that the industry calls efficient and that investigators who have entered those houses call something else.`

  const prose = document.getElementById('articleProse')
  if (prose) prose.innerHTML = `
    <p>Forty-two days is the industry benchmark for a conventional broiler chicken grown for meat. The modern broiler breed — Cobb 500, Ross 308, and similar proprietary strains — has been selectively bred over decades to reach market weight of approximately five to six pounds in that time, roughly twice as fast as chickens in the 1950s. The accelerated growth is concentrated in the breast, the highest-value cut, which expands faster than the bird's cardiovascular and skeletal systems can support. Welfare researchers at the University of Arkansas and at Bristol University in the United Kingdom have documented elevated rates of lameness, cardiac failure, and ascites — fluid accumulation around the heart — in conventional broiler populations, conditions that are understood as a direct consequence of the growth rate rather than a failure of farm management.</p>

    <blockquote>"The modern broiler is, by any objective assessment, a sick bird. It has been bred to grow so fast that its body cannot keep up with its own metabolism. We call it efficient. The bird, if it could, would call it something else."<cite>— Dr. Ian Duncan, Professor Emeritus of Animal and Poultry Science, University of Guelph, animal welfare testimony, 2002</cite></blockquote>

    <h2>The 42-day bird</h2>
    <p>Approximately nine billion chickens are slaughtered in the United States every year — a number so large it resists comprehension but is easily verified in USDA's National Agricultural Statistics Service annual reports. At that scale, the welfare implications of standard practice in broiler housing are not marginal. Conventional broiler houses hold between 20,000 and 50,000 birds in a single structure, at densities of roughly six to eight birds per square meter of floor space under standard guidelines. At those densities, a bird that becomes lame cannot reach feed or water, and mortality from trampling, suffocation, and organ failure is a documented operational variable built into production models.</p>
    <p>The physical environment of a commercial broiler house — dark, ammonia-laden, impossible to walk through without difficulty — was documented in detail in a 2016 report by Compassion in World Farming, which reviewed conditions at contract grower facilities in the United States and Europe. The report found that litter management practices varied significantly and that ammonia burns on hocks and breast blisters were common in facilities with poor litter conditions. These injuries are not welfare violations under current law. They are normal outcomes of the production model.</p>

    <h2>The stunning question</h2>
    <p>Federal law requires that livestock be rendered insensible to pain before slaughter. For cattle and pigs, this requirement is enforced, imperfectly, under the Humane Methods of Slaughter Act of 1958. For poultry — chickens, turkeys, ducks — the Humane Methods of Slaughter Act does not apply. This is not an oversight or an ambiguity in the law; it is the explicit statutory text. Poultry are exempt.</p>
    <p>The most common method of stunning poultry before slaughter in the United States is electrical water-bath stunning, in which birds — hung upside down on shackles — are passed through an electrified water bath designed to render them unconscious before their throats are cut. Independent animal welfare researchers, including those who have studied video from inside processing plants, have raised questions about whether the parameters typically used in U.S. facilities — lower voltages than those used in Europe — reliably produce unconsciousness rather than paralysis in a conscious animal. The industry position is that current parameters meet welfare standards. The scientific literature is less settled.</p>

    <blockquote>"Poultry are not covered by the federal Humane Methods of Slaughter Act. The industry has, in effect, written the welfare standards for its own animals, and the USDA lacks the statutory authority to compel compliance with any standard that doesn't exist in law."<cite>— Animal Welfare Institute, "Farm Animal Welfare: Federal and State Laws," 2020</cite></blockquote>

    <h2>What the law requires</h2>
    <p>The legal framework governing farm animal welfare in the United States is, by international comparison, minimal. There is no federal law governing the conditions of confinement for animals during their lives on farms. The Animal Welfare Act, which regulates the treatment of animals in laboratories, zoos, and transport, explicitly excludes farm animals used for food. The Humane Methods of Slaughter Act applies to federally inspected slaughter facilities but covers only the moment of slaughter and only for cattle, swine, horses, mules, sheep, and goats — not poultry. The USDA's FSIS humane handling regulations implement the Act and include provisions on stunning, handling, and transport, but the enforcement record suggests that violations are common and consequences modest.</p>
    <p>State-level protections exist but are inconsistent and often contain explicit exemptions for "customary agricultural practices" that have the practical effect of shielding industrial production methods from prosecution. California's Proposition 12, passed in 2018, established space requirements for pigs, veal calves, and egg-laying hens and banned the sale of products from animals that did not meet those requirements, regardless of where they were produced. The National Pork Producers Council challenged the law all the way to the Supreme Court, which upheld it in 2023. Several other states have followed California's example, but the patchwork of state-level regulation has not produced anything approaching a uniform national standard.</p>

    <h2>What investigators found</h2>
    <p>Over the past two decades, a series of undercover investigations — conducted by animal advocacy organizations including Mercy for Animals, the Humane Society of the United States, and Animal Equality — has produced video documentation of conditions inside industrial broiler, layer, pork, and dairy facilities. The footage has been consistent in its broad outlines: overcrowding, routine handling that would constitute animal cruelty under state law if applied to a dog or cat, and conditions that bear little resemblance to the pastoral imagery the same companies use in their marketing.</p>
    <p>A 2013 GAO report on USDA's humane slaughter oversight found that FSIS had documented a significant number of humane handling violations at federally inspected facilities, but that fewer than 1 percent of those violations resulted in meaningful regulatory action — citations, suspensions of operations, or referrals to law enforcement. The report attributed the gap to inconsistent inspector training, inadequate enforcement policies, and an institutional culture within FSIS that prioritized food safety over humane handling compliance. USDA contested some of GAO's characterizations; the gap between documented violations and enforcement actions was not contested.</p>

    <blockquote>"What we observed was not aberrant behavior. It was standard practice. The workers were doing their jobs as they'd been trained to do them. The problem is what the job requires."<cite>— Mercy for Animals, investigator account from broiler facility, 2014</cite></blockquote>
  `

  const cards = document.getElementById('factCards')
  if (cards) cards.innerHTML = `
    <div class="fact-card"><div class="num">42 days</div><div class="lbl">standard broiler chicken lifespan from hatch to slaughter</div></div>
    <div class="fact-card fact-card--accent"><div class="num">9 billion</div><div class="lbl">chickens slaughtered annually in the US (USDA NASS)</div></div>
    <div class="fact-card fact-card--bone"><div class="num">&lt;1%</div><div class="lbl">of USDA-documented humane handling violations resulting in regulatory action (GAO)</div></div>
  `

  const stats = document.getElementById('articleStats')
  if (stats) stats.innerHTML = `
    <div class="stat"><div class="num"><span data-count-to="42">0</span> days</div><div class="lbl">standard broiler lifespan (hatch to slaughter)</div></div>
    <div class="stat"><div class="num"><span data-count-to="9">0</span>B</div><div class="lbl">chickens slaughtered per year in the US</div></div>
    <div class="stat"><div class="num"><span data-count-to="95">0</span>%</div><div class="lbl">of US pigs confined in gestation crates at some point</div></div>
  `

  const pull = document.getElementById('articlePull')
  if (pull) pull.innerHTML = `"What we observed was not aberrant behavior. It was standard practice. The workers were doing their jobs as they'd been trained to do them. The problem is what the job requires."<cite>— Mercy for Animals, undercover investigator, 2014</cite>`

  const src = document.getElementById('sourcesLine')
  if (src) src.textContent = 'Sources · USDA FSIS, GAO humane slaughter report, Animal Welfare Institute'

  const res = document.getElementById('resourcesSection')
  if (res) res.innerHTML = `
    <p class="kicker" style="margin-bottom:1.5rem">Further reading</p>
    <ul style="list-style:none;padding:0;display:flex;flex-direction:column;gap:.75rem">
      <li><a href="https://www.gao.gov/products/gao-10-203" style="color:var(--ink);font-family:var(--sans)">GAO — Humane Methods of Slaughter Act: USDA Has Addressed Some Problems but Additional Oversight Needed (2010)</a></li>
      <li><a href="https://www.fsis.usda.gov/guidelines/fsis-directive-6900-2" style="color:var(--ink);font-family:var(--sans)">USDA FSIS — Humane Handling Guidelines and Directives</a></li>
      <li><a href="https://mercyforanimals.org/investigations/" style="color:var(--ink);font-family:var(--sans)">Mercy for Animals — Undercover Investigation Reports</a></li>
      <li><a href="https://awionline.org/content/factory-farming" style="color:var(--ink);font-family:var(--sans)">Animal Welfare Institute — Factory Farming Statistics and Policy</a></li>
      <li><a href="https://www.aspca.org/protecting-farm-animals" style="color:var(--ink);font-family:var(--sans)">ASPCA — Farm Animal Statistics and Welfare Advocacy</a></li>
    </ul>
  `
  initCountUp()
}
