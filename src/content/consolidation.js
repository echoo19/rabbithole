import { initCountUp } from '../js/animations.js'

export function wireContent() {
  const lede = document.getElementById('pageLede')
  if (lede) lede.textContent = `Four companies — Tyson Foods, JBS USA, Cargill, and National Beef — control approximately 85 percent of the fed-cattle slaughter capacity in the United States, a concentration that restructured the American food system over three decades while the government watched, and sometimes helped.`

  const prose = document.getElementById('articleProse')
  if (prose) prose.innerHTML = `
    <p>The four names appear on almost every steak, roast, and ground beef package in almost every American supermarket, though the brand names on the front — Choice Reserve, Excel, Open Prairie — are designed to obscure rather than advertise the corporate identity behind them. Tyson Foods, headquartered in Springdale, Arkansas, is the largest domestic meat processor and the second-largest in the world. JBS USA, the American subsidiary of the Brazilian conglomerate JBS S.A., became the largest beef processor in the country following its acquisition of Swift & Company in 2007 and Pilgrim's Pride in 2009. Cargill, privately held and therefore exempt from the disclosure requirements that make its competitors' finances at least partially visible, processes beef primarily through its Excel subsidiary. National Beef Packing, headquartered in Kansas City and now majority-owned by Marfrig Global Foods, rounds out what the Department of Justice's Antitrust Division has, in official documents, called the Big Four.</p>

    <h2>Four names</h2>
    <p>The combined market share of these four companies in fed-cattle slaughter — the beef produced from animals grain-finished in feedlots, which represents the majority of retail beef in the U.S. — has been estimated by the DOJ and independent agricultural economists at approximately 82 to 85 percent, depending on the measurement period. In practical terms, this means that a rancher who raises cattle in Nebraska, Kansas, or Texas has, at most, four realistic buyers for that animal when it reaches slaughter weight. Often, because of geography and the location of packing plants, the realistic number is two or three. The competitive dynamics that result from this structure — the ability of a concentrated buyer market to suppress the prices it pays to sellers — is the central grievance of the independent cattle ranching industry, and it has been the subject of federal investigations for more than a decade.</p>
    <p>Tyson Foods alone processed approximately 28 percent of domestic beef in recent years, with revenues across its beef, pork, and poultry divisions exceeding $50 billion annually. JBS USA's revenues from its American beef and pork operations approached comparable figures. The scale is relevant not merely as a measure of size but as an explanation of political influence: companies that supply a significant fraction of the national protein supply are not regulated the way other large firms are regulated.</p>

    <h2>How it got this way</h2>
    <p>The consolidation of the meatpacking industry did not happen overnight, and it did not happen despite federal policy — in important respects, it happened because of it. The Packers and Stockyards Act of 1921 was designed to prevent exactly this kind of concentration, empowering the Department of Agriculture to police anticompetitive practices by meat processors. For most of the twentieth century, the Act was applied with varying degrees of rigor. Beginning in the 1980s, as deregulatory ideology reshaped federal enforcement priorities, USDA's oversight of packer concentration atrophied. A series of mergers that would have been challenged in earlier decades passed without meaningful review.</p>
    <p>The acquisition of IBP, Inc. by Tyson Foods in 2001 — a deal valued at approximately $3.2 billion — created the first company to dominate beef, pork, and poultry processing simultaneously. The acquisition of Swift by JBS in 2007 was reviewed by the DOJ and approved with limited conditions. By the time the Obama administration convened a series of USDA/DOJ joint workshops on agricultural consolidation in 2010, the concentration had already reached levels that made structural remediation — breaking up the companies — politically and practically implausible. The workshops produced a report. The report produced modest rule changes. The market structure remained intact.</p>

    <blockquote>"The level of consolidation we've seen in beef packing is not compatible with a competitive market. When four firms control 85 percent of the market, the textbook conditions for competitive pricing simply do not exist."<cite>— Christopher Leonard, author of "The Meat Racket," Congressional testimony, 2021</cite></blockquote>

    <h2>The price-fixing investigations</h2>
    <p>In 2020, the Department of Justice opened a criminal antitrust investigation into price-fixing in the broiler chicken industry, resulting in indictments of executives at several poultry companies. The investigation expanded to examine beef pricing practices after ranchers and consumer advocates presented evidence that the spread between live cattle prices and wholesale beef prices had widened dramatically and implausibly during the early months of the COVID-19 pandemic. Between April and May 2020, while cattle prices fell sharply, consumer beef prices rose by as much as 25 percent. The processors' margins expanded to historically unprecedented levels.</p>
    <p>Four class-action lawsuits were filed in 2020 and 2021 by ranchers alleging that Tyson, JBS, Cargill, and National Beef had coordinated to suppress fed-cattle prices. The cases are consolidated in federal court in Minnesota. A separate DOJ investigation into beef pricing was confirmed in media reporting in 2020, though as of 2023 no criminal charges specific to beef had been filed. The companies have denied wrongdoing. The ranchers, many of whom are approaching the end of long careers in an industry that has paid them less each decade, are waiting for a verdict.</p>

    <blockquote>"I can tell you what I got for my cattle in 1985 and what I got for comparable cattle in 2020, and the number is lower. I can tell you what ground beef costs at Walmart, and that number is higher. Something in the middle has taken that difference."<cite>— R-CALF USA (Ranchers-Cattlemen Action Legal Fund), testimony before Senate Agriculture Committee, 2021</cite></blockquote>

    <h2>What ranchers lost</h2>
    <p>The rancher's share of the retail beef dollar — the portion of what a consumer pays for beef that actually reaches the cow-calf producer who raised the animal — has declined from roughly 50 cents in 1980 to approximately 37 cents in recent years, according to USDA cattle price spread data. The decline tracks almost precisely with the rise of packer concentration. When four companies control access to the slaughter market, they control the terms on which cattle are bought. The cattle-feeding sector, which sits between the rancher and the packer, has also consolidated significantly, further reducing the number of transactions at which independent producers can seek competitive prices.</p>
    <p>Meanwhile, the Big Four's combined spending on federal lobbying — drawn from OpenSecrets data on the food and beverage sector — has consistently exceeded $10 million per year in recent election cycles, with additional spending through trade associations like the North American Meat Institute that does not appear in individual company filings. This political investment has produced results: the country-of-origin labeling (COOL) requirement for beef, which would have given American ranchers a marketing advantage over imported product, was repealed in 2015 after the World Trade Organization ruled it violated trade agreements — a ruling the industry had lobbied for years to obtain. The ranchers who had advocated for COOL viewed its repeal as a direct loss of competitive leverage, one facilitated by the same companies that were simultaneously suppressing the prices they paid for domestic cattle.</p>
  `

  const cards = document.getElementById('factCards')
  if (cards) cards.innerHTML = `
    <div class="fact-card"><div class="num">~85%</div><div class="lbl">combined Big Four market share in fed-cattle slaughter (DOJ)</div></div>
    <div class="fact-card fact-card--accent"><div class="num">$10M+</div><div class="lbl">combined annual lobbying (OpenSecrets)</div></div>
    <div class="fact-card fact-card--bone"><div class="num">37¢</div><div class="lbl">rancher's share of the retail beef dollar, down from ~50¢ in 1980</div></div>
  `

  const stats = document.getElementById('articleStats')
  if (stats) stats.innerHTML = `
    <div class="stat"><div class="num"><span data-count-to="85">0</span>%</div><div class="lbl">Big Four market share in fed-cattle slaughter</div></div>
    <div class="stat"><div class="num">$<span data-count-to="10">0</span>M+</div><div class="lbl">combined industry lobbying spend per year</div></div>
    <div class="stat"><div class="num"><span data-count-to="37">0</span>¢</div><div class="lbl">per retail dollar returned to rancher</div></div>
  `

  const pull = document.getElementById('articlePull')
  if (pull) pull.innerHTML = `"When four firms control 85 percent of the market, the textbook conditions for competitive pricing simply do not exist."<cite>— Congressional testimony on beef packer concentration, 2021</cite>`

  const src = document.getElementById('sourcesLine')
  if (src) src.textContent = 'Sources · DOJ Antitrust Division, OpenSecrets, USDA Cattle Markets, FTC merger records'

  const res = document.getElementById('resourcesSection')
  if (res) res.innerHTML = `
    <p class="kicker" style="margin-bottom:1.5rem">Further reading</p>
    <ul style="list-style:none;padding:0;display:flex;flex-direction:column;gap:.75rem">
      <li><a href="https://www.justice.gov/opa/pr/justice-department-opens-investigation-cattle-markets" style="color:var(--ink);font-family:var(--sans)">DOJ — Cattle Market Investigation Press Release</a></li>
      <li><a href="https://www.opensecrets.org/industries/indus.php?ind=G2300" style="color:var(--ink);font-family:var(--sans)">OpenSecrets — Meat Processing Industry Lobbying Data</a></li>
      <li><a href="https://www.ams.usda.gov/reports/cattle-and-beef-price-spread-analysis" style="color:var(--ink);font-family:var(--sans)">USDA AMS — Cattle Price Spread Reports</a></li>
      <li><a href="https://www.nytimes.com/2021/06/15/us/politics/meat-lobby-consolidation.html" style="color:var(--ink);font-family:var(--sans)">The New York Times — "The Meat Lobby," 2021</a></li>
      <li><a href="https://investigatemidwest.org/category/agriculture/meatpacking/" style="color:var(--ink);font-family:var(--sans)">Midwest Center for Investigative Reporting — Meatpacking Consolidation</a></li>
    </ul>
  `
  initCountUp()
}
