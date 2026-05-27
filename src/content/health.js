import { initCountUp } from '../js/animations.js'

export function wireContent() {
  const lede = document.getElementById('pageLede')
  if (lede) lede.textContent = `When the World Health Organization's cancer research arm classified processed meat as a Group 1 carcinogen in 2015, it placed bacon and hot dogs in the same evidence category as tobacco, not because the risks are equivalent but because the scientific evidence that they cause cancer is equally certain.`

  const prose = document.getElementById('articleProse')
  if (prose) prose.innerHTML = `
    <p>The distinction is important and almost universally misrepresented. In October 2015, the International Agency for Research on Cancer, a branch of the WHO, published Monograph Volume 114, classifying processed meat as a Group 1 carcinogen ("carcinogenic to humans") and red meat as a Group 2A carcinogen, "probably carcinogenic to humans." The resulting headlines, many of them declaring that bacon is "as dangerous as cigarettes," confused the classification scheme with the magnitude of risk. The IARC classification system is a measure of the strength of evidence, not the size of the effect. Tobacco kills roughly half of long-term users. Processed meat, consumed daily in typical quantities, is associated with an approximately 18 percent increase in colorectal cancer risk per 50-gram daily portion, a real risk, but not remotely comparable in scale to tobacco's death toll.</p>

    <h2>The classification</h2>
    <p>The IARC working group that reviewed the processed meat evidence in 2015 consisted of 22 scientists from 10 countries, who reviewed more than 800 epidemiological studies. The evidence for colorectal cancer causation was, by their assessment, sufficient to meet the threshold for Group 1. The mechanism is not entirely settled, but leading hypotheses involve N-nitroso compounds formed during processing and cooking, heme iron, and heterocyclic aromatic amines produced during high-temperature cooking. The Group 2A classification for red meat reflects a somewhat weaker evidentiary base (the observational studies are consistent in direction but include more residual confounding) while still warranting the "probably carcinogenic" designation.</p>
    <p>The industry's response to the 2015 classification was swift and well-funded. The North American Meat Institute commissioned a rapid rebuttal and held press conferences within hours of the IARC announcement. Several processed meat companies issued statements emphasizing the distinction between correlation and causation. A number of nutrition scientists (some with disclosed industry funding) questioned the methodology of the review. What the rebuttals did not change was the underlying epidemiological literature, which has since accumulated further evidence broadly consistent with the 2015 findings. The American Cancer Society's dietary guidelines, updated in 2020, specifically recommend limiting red and processed meat consumption based on the same body of evidence IARC reviewed.</p>

    <blockquote>"The data confirm the link between processed meat and colorectal cancer. Eating 50 grams of processed meat every day (about two slices of bacon or one hot dog) increases the risk of colorectal cancer by 18 percent."<cite>IARC Director Christopher Wild, Monograph Volume 114 press release, October 2015</cite></blockquote>

    <figure class="article-scene">
      <img src="/assets/scenes/a6-grocery-shelf.png" alt="Single grocery shelf with 12 identical meat packages, paper-cut illustration" width="1536" height="1024" loading="lazy">
    </figure>

    <h2>What's in the drug supply</h2>
    <p>The antibiotic question is distinct from the carcinogenicity question, but it is arguably more consequential for public health at scale. The FDA's 2022 Annual Summary Report on Antimicrobials Sold or Distributed for Use in Food-Producing Animals, published under the Animal Drug User Fee Amendments Act (ADUFA), found that approximately 70 percent of medically important antibiotics sold in the United States were sold for use in livestock, not human medicine. "Medically important" is a regulatory category designating antibiotics that are also used to treat human infections, meaning that their use in animals creates selection pressure for resistant bacteria that can then spread to humans through direct contact, environmental pathways, or the food supply itself.</p>
    <p>The concern is not primarily that antibiotic residues in meat are directly harmful to consumers; the levels that reach the consumer are generally below acute toxicity thresholds, and USDA testing confirms this. The concern is resistance: the routine, low-dose use of antibiotics in livestock, historically administered in feed and water not to treat sick animals but to promote growth and compensate for the disease pressure of crowded industrial conditions, trains bacteria to survive antibiotic treatment. The Centers for Disease Control estimates that antibiotic-resistant infections kill approximately 35,000 Americans per year. The precise contribution of agricultural antibiotic use to that total is contested and difficult to isolate, but the scientific consensus is that it is significant. The FDA banned the use of medically important antibiotics for growth promotion in 2017, a meaningful reform, but routine therapeutic use under veterinary oversight continues, and independent researchers have noted that total medically important antibiotic sales to livestock have not declined to the degree that the 2017 rule change might have predicted.</p>

    <h2>What's not on the label</h2>
    <p>The country-of-origin labeling requirement for beef, enacted as part of the 2002 Farm Bill and strengthened in 2008, required retailers to disclose where beef was born, raised, and slaughtered. For consumers interested in the provenance of their food, in supporting domestic producers, or in assessing potential differences in production standards between countries, it was a meaningful disclosure tool. It was repealed in December 2015, after the World Trade Organization found it violated trade obligations by disadvantaging Canadian and Mexican cattle producers. The meat industry, which had consistently opposed COOL as an administrative burden, supported the WTO challenge. The repeal was included in an end-of-year spending bill with minimal public debate.</p>
    <p>The result is that most ground beef sold in American supermarkets today may contain meat from cattle born in multiple countries, processed at American plants, and labeled simply as "Product of USA" under a USDA rule that, until a 2024 revision, required only that the product undergo processing on American soil, not that the animal was born or raised there. The 2024 revision tightened the standard for muscle cuts but left ground beef labeling largely unchanged. What the consumer who buys a pound of ground beef at a chain grocery store cannot know, from the label alone, is whether the beef originated in domestic cattle, South American cattle, or a blend sourced from suppliers in multiple countries with varying regulatory environments.</p>

    <blockquote>"Consumers deserve to know where their food comes from. That's not a trade issue. It's a transparency issue."<cite>R-CALF USA statement on COOL repeal, December 2015</cite></blockquote>

    <h2>The recall record</h2>
    <p>The USDA's Food Safety and Inspection Service maintains a public database of meat and poultry recalls going back decades. The volume is not reassuring. Across recent years, the average annual volume of recalled meat and poultry has run in the range of tens of millions of pounds, driven primarily by contamination with Salmonella, Listeria monocytogenes, and E. coli O157:H7, with periodic recalls for undeclared allergens, bone fragments, and foreign materials. Many recalls are Class I, meaning that the FSIS has determined there is a reasonable probability that consuming the product will cause serious adverse health consequences or death.</p>
    <p>The recall system is, in theory, a safety net. In practice, it operates primarily after the fact: product reaches consumers, illness is reported, traceback investigation identifies a source, recall is issued. A significant fraction of recalled product has already been consumed by the time the recall is announced. The FSIS has no statutory authority to compel a recall; it can request one, and companies have consistently complied with requests, but the voluntary nature of the process shapes its tempo and scope. Independent food safety researchers have noted that the concentration of the processing industry (the fact that a single large plant may produce product distributed to all 50 states simultaneously) means that contamination events at consolidated facilities tend to generate larger recalls than would have occurred in a more distributed processing system. The 2008 Westland/Hallmark recall, involving approximately 143 million pounds of beef (the largest in U.S. history at the time) originated from a single Southern California processing facility.</p>
  `

  const cards = document.getElementById('factCards')
  if (cards) cards.innerHTML = `
    <div class="fact-card"><div class="num">Group 1</div><div class="lbl">WHO/IARC carcinogen classification for processed meat (same evidentiary tier as tobacco)</div></div>
    <div class="fact-card fact-card--accent"><div class="num">~70%</div><div class="lbl">of US medically important antibiotics sold for livestock use (FDA ADUFA 2022)</div></div>
    <div class="fact-card fact-card--bone"><div class="num">~20M lbs</div><div class="lbl">average annual USDA meat recalls (FSIS database)</div></div>
  `

  const stats = document.getElementById('articleStats')
  if (stats) stats.innerHTML = `
    <div class="stat"><div class="num"><span data-count-to="70">0</span>%</div><div class="lbl">of US medically important antibiotics to livestock (FDA 2022)</div></div>
    <div class="stat"><div class="num"><span data-count-to="20">0</span>M lbs</div><div class="lbl">average annual USDA meat recalls</div></div>
    <div class="stat"><div class="num"><span data-count-to="2">0</span>A</div><div class="lbl">IARC Group 2A: red meat "probably carcinogenic"</div></div>
  `

  const pull = document.getElementById('articlePull')
  if (pull) pull.innerHTML = `"Eating 50 grams of processed meat every day (about two slices of bacon or one hot dog) increases the risk of colorectal cancer by 18 percent."<cite>IARC Director Christopher Wild, October 2015</cite>`

  const src = document.getElementById('sourcesLine')
  if (src) src.textContent = 'Sources · IARC Monographs vol 114, FDA 2022 ADUFA Report, USDA FSIS recall database'

  const res = document.getElementById('resourcesSection')
  if (res) res.innerHTML = `
    <p class="kicker" style="margin-bottom:1.5rem">Further reading</p>
    <ul style="list-style:none;padding:0;display:flex;flex-direction:column;gap:.75rem">
      <li><a href="https://www.iarc.who.int/wp-content/uploads/2018/07/pr240_E.pdf" style="color:var(--ink);font-family:var(--sans)">IARC: Monograph Volume 114 Press Release, October 2015</a></li>
      <li><a href="https://www.fda.gov/animal-veterinary/cvm-updates/fda-releases-annual-summary-report-antimicrobials-sold-or-distributed-2022" style="color:var(--ink);font-family:var(--sans)">FDA: ADUFA 2022 Annual Summary Report on Antimicrobials</a></li>
      <li><a href="https://www.fsis.usda.gov/recalls" style="color:var(--ink);font-family:var(--sans)">USDA FSIS: Meat and Poultry Recall Database</a></li>
      <li><a href="https://www.consumerreports.org/food-safety/beef-safety-consumer-reports-investigation/" style="color:var(--ink);font-family:var(--sans)">Consumer Reports: Beef Safety Investigation</a></li>
      <li><a href="https://www.nrdc.org/resources/antibiotic-resistance-101-how-antibiotic-misuse-livestock-can-make-you-sick" style="color:var(--ink);font-family:var(--sans)">NRDC: Antibiotic Resistance and Livestock Use</a></li>
    </ul>
  `
  initCountUp()
}
