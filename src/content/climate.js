import { initCountUp } from '../js/animations.js'

export function wireContent() {
  const lede = document.getElementById('pageLede')
  if (lede) lede.textContent = `Producing one kilogram of beef emits approximately 60 kilograms of carbon dioxide equivalent — a ratio that makes beef the most emissions-intensive food in the human diet by a margin that no efficiency improvement has yet brought within range of other protein sources.`

  const prose = document.getElementById('articleProse')
  if (prose) prose.innerHTML = `
    <p>The number — 60 kilograms of CO₂ equivalent per kilogram of beef — comes from the most comprehensive life-cycle analysis of food systems yet published. Joseph Poore and Thomas Nemecek's 2018 paper in <em>Science</em>, "Reducing food's environmental impacts through producers and consumers," synthesized data from 38,700 farms in 119 countries and 40 food products. It did not find that beef was bad for the climate. It found something more precise and more difficult: that the range of emissions outcomes across beef producers, from the most efficient grass-fed operations to the least efficient industrial feedlot systems, was enormous — but that even the bottom tenth percentile of beef producers still generated more emissions per unit of protein than the top tenth percentile of almost any plant-based food.</p>

    <h2>The number</h2>
    <p>The 60 kg CO₂eq figure represents a median estimate for beef produced with average global practices, incorporating the full supply chain: methane from enteric fermentation (the digestive process of ruminant animals), nitrous oxide from manure management and fertilizer used to grow feed crops, carbon dioxide from deforestation and land conversion, energy used in processing and refrigeration, and transportation. Methane and nitrous oxide are particularly potent greenhouse gases — methane is approximately 80 times more warming than CO₂ over a 20-year period — which is why the livestock sector's contribution to climate change is disproportionate to its share of direct energy consumption.</p>
    <p>For context, the next most emissions-intensive common food is lamb, at roughly 24 kg CO₂eq per kilogram — less than half the beef figure. Farmed shrimp produces about 12 kg CO₂eq. Pork produces approximately 7 kg. Chicken is around 6 kg. Tofu produces roughly 3 kg. These comparisons do not account for nutritional differences, but they do illustrate why climate scientists and food systems researchers consistently identify a shift away from beef as one of the highest-leverage individual dietary changes available to people in high-income countries.</p>

    <h2>Where the emissions come from</h2>
    <p>The Food and Agriculture Organization of the United Nations' Global Livestock Environmental Assessment Model (GLEAM), updated in its 2.0 version in 2017, estimates that livestock agriculture is responsible for approximately 14.5 percent of global anthropogenic greenhouse gas emissions — more than the entire transportation sector, which generates roughly 14 percent. Within that figure, beef and dairy cattle together account for the largest share, approximately 65 percent of livestock sector emissions. The FAO's numbers are sometimes cited as reassuringly small relative to the total, but the comparison requires care: the total is very large, and 14.5 percent of a very large number is still a very large number.</p>
    <p>Enteric fermentation — the methane produced when a ruminant animal digests grass or grain — accounts for roughly 44 percent of livestock sector emissions globally. Manure management contributes another 26 percent. Feed production, which requires land clearing, fertilizer application, and in many cases the drainage or conversion of carbon-storing ecosystems, contributes the remainder. The relative weight of these categories varies significantly between production systems: grass-fed beef on permanent pasture produces less grain-related emissions but often more per unit of meat, because grass-fed animals grow more slowly and therefore emit methane over a longer period before slaughter.</p>

    <blockquote>"Moving from current diets to a diet that excludes animal products has transformative potential, reducing food's land use by 76 percent and food's greenhouse gas emissions by 49 percent."<cite>— Poore &amp; Nemecek, "Reducing food's environmental impacts through producers and consumers," Science, 2018</cite></blockquote>

    <h2>The land problem</h2>
    <p>The climate argument against beef is inseparable from the land argument, because land — its clearing, its use, its conversion from carbon-storing forest or grassland to pasture or feed cropland — is where much of the emissions accounting actually lives. The Poore and Nemecek analysis found that beef production uses approximately 60 percent of the world's agricultural land while providing roughly 2 percent of global calories. This extraordinary disproportion is the result of the ruminant animal's inefficiency as a protein converter: a cow requires roughly 6 to 8 kilograms of grain to produce one kilogram of edible beef, and the land required to grow that grain must be subtracted from the land available for direct human food production.</p>
    <p>In Brazil, which produces roughly 15 percent of the world's beef, the connection between cattle ranching and deforestation in the Amazon basin is direct and documented. Satellite data compiled by Brazil's National Institute for Space Research (INPE) has consistently shown that cattle pasture is the largest driver of Amazon deforestation, accounting for approximately 80 percent of cleared land. Brazilian beef exports to the United States have grown substantially over the past two decades. The carbon embedded in that deforestation is assigned, under most accounting frameworks, to the beef produced in those landscapes — a fact that complicates any simple comparison between U.S.-produced and imported beef on climate grounds.</p>

    <h2>What individual choice does and doesn't do</h2>
    <p>The diet-change argument is genuine — Poore and Nemecek's figures are real, and a meaningful reduction in high-income-country beef consumption would reduce global emissions. But the individual-choice frame, if it becomes the primary lens for the climate-and-beef discussion, also serves a political function that benefits the industry: it directs attention toward consumer behavior and away from structural questions about how livestock agriculture is regulated, subsidized, and permitted to externalize its climate costs.</p>
    <p>The IPCC's Sixth Assessment Report, specifically its chapter on agriculture, forestry, and other land use (AFOLU), notes that demand-side changes — dietary shifts in high-income countries — are among the mitigation options with the largest potential, but that realizing that potential requires policy support, not merely individual persuasion. The IPCC also identifies methane reduction as a near-term climate priority, and livestock agriculture is the single largest anthropogenic source of methane globally. What is absent from almost all voluntary corporate climate commitments in the meat industry is any binding, verified commitment to reduce absolute emissions — as opposed to emissions intensity per unit of production — over a defined timeline. The distinction matters because an industry that produces more beef more efficiently can increase its absolute emissions while decreasing its per-unit figure. The atmosphere responds to absolute quantities.</p>

    <blockquote>"The evidence is clear: without major changes to the food system, reaching the 1.5°C and 2°C climate targets will be extremely difficult, if not impossible."<cite>— IPCC Sixth Assessment Report, Working Group III, Chapter 7 (Agriculture, Forestry, and Other Land Use), 2022</cite></blockquote>
  `

  const cards = document.getElementById('factCards')
  if (cards) cards.innerHTML = `
    <div class="fact-card"><div class="num">60 kg</div><div class="lbl">CO₂eq per kg of beef produced (Poore &amp; Nemecek 2018)</div></div>
    <div class="fact-card fact-card--accent"><div class="num">14.5%</div><div class="lbl">of global greenhouse gases from livestock (FAO GLEAM)</div></div>
    <div class="fact-card fact-card--bone"><div class="num">60%</div><div class="lbl">of global agricultural land used for beef — for just 2% of calories</div></div>
  `

  const stats = document.getElementById('articleStats')
  if (stats) stats.innerHTML = `
    <div class="stat"><div class="num"><span data-count-to="60">0</span> kg</div><div class="lbl">CO₂eq per kg beef (median, Poore 2018)</div></div>
    <div class="stat"><div class="num"><span data-count-to="14">0</span>%</div><div class="lbl">of global GHGs from livestock (FAO GLEAM 2.0)</div></div>
    <div class="stat"><div class="num"><span data-count-to="60">0</span>%</div><div class="lbl">of agricultural land used by beef for 2% of calories</div></div>
  `

  const pull = document.getElementById('articlePull')
  if (pull) pull.innerHTML = `"Moving from current diets to a diet that excludes animal products has transformative potential, reducing food's land use by 76 percent and food's greenhouse gas emissions by 49 percent."<cite>— Poore &amp; Nemecek, Science, 2018</cite>`

  const src = document.getElementById('sourcesLine')
  if (src) src.textContent = 'Sources · Poore & Nemecek 2018 Science, FAO GLEAM 2.0, IPCC AR6'

  const res = document.getElementById('resourcesSection')
  if (res) res.innerHTML = `
    <p class="kicker" style="margin-bottom:1.5rem">Further reading</p>
    <ul style="list-style:none;padding:0;display:flex;flex-direction:column;gap:.75rem">
      <li><a href="https://doi.org/10.1126/science.aaq0216" style="color:var(--ink);font-family:var(--sans)">Poore &amp; Nemecek — "Reducing food's environmental impacts through producers and consumers," Science, 2018</a></li>
      <li><a href="https://www.fao.org/gleam/en/" style="color:var(--ink);font-family:var(--sans)">FAO GLEAM 2.0 — Global Livestock Environmental Assessment Model</a></li>
      <li><a href="https://ourworldindata.org/food-ghg-emissions" style="color:var(--ink);font-family:var(--sans)">Our World in Data — Environmental Impacts of Food Production</a></li>
      <li><a href="https://www.nytimes.com/column/climate-forward" style="color:var(--ink);font-family:var(--sans)">NYT Climate Forward — Beef and Climate Coverage</a></li>
      <li><a href="https://www.ipcc.ch/report/ar6/wg3/chapter/chapter-7/" style="color:var(--ink);font-family:var(--sans)">IPCC AR6 Working Group III — Chapter 7: Agriculture, Forestry, and Other Land Use</a></li>
    </ul>
  `
  initCountUp()
}
