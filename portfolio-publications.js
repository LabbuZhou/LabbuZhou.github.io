const publicationRows = [
  { title: "A Driving Regime-Embedded Deep Learning Framework for Modeling Intradriver Heterogeneity in Multiscale Car-Following Dynamics", venue: "IEEE Transactions on Cybernetics · 2026", url: "https://doi.org/10.1109/tcyb.2026.3660643" },
  { title: "On the Calibration of Stochastic Car Following Models", venue: "Transportation Research Part B · 2025", url: "https://doi.org/10.1016/j.trb.2025.103224" },
  { title: "Experimental Features of Emissions and Fuel Consumption in a Car-Following Platoon", venue: "Transportation Research Part D · 2023", url: "https://doi.org/10.1016/j.trd.2023.103823" },
  { title: "Cellular Automaton Model with the Multi-Anticipative Effect to Reproduce the Empirical Findings of Kerner’s Three-Phase Traffic Theory", venue: "Physica A · 2022", url: "https://doi.org/10.1016/j.physa.2022.127162" },
  { title: "Cellular Automaton Approach for Modeling Traffic System", venue: "Advances in Cellular Automata: Volume 2 · 2025", url: "https://doi.org/10.1007/978-3-031-81097-8_10" },
  { title: "Towards Experiment-Driven and AI-Enhanced Driving Behavioral Research", venue: "Frontiers of Engineering Management · 2026", url: "https://doi.org/10.1007/s42524-026-6043-0" },
  { title: "A Structured Framework for Calibrating Stochastic Car-Following Models: Data Adequacy, Parameter Sensitivity, and Objective Selection", venue: "IEEE Transactions on Intelligent Transportation Systems · Under review", url: "https://arxiv.org/abs/2608.18944" },
  { title: "The Moving Target of Urban Equity: Spatiotemporal Demand and Double Disadvantage in Hefei, China", venue: "Transportation Research Part A · Under review", url: "https://arxiv.org/abs/2606.20132" },
  { title: "A Clustering-Decomposition-Ensemble Framework with Reinforcement Learning-Based Adaptive Weighting for Short-Term Metro Passenger Flow Prediction", venue: "Tunnelling and Underground Space Technology · Under review", url: "https://scholar.google.com/scholar?q=%22A%20Clustering-Decomposition-Ensemble%20Framework%20with%20Reinforcement%20Learning-Based%20Adaptive%20Weighting%20for%20Short-Term%20Metro%20Passenger%20Flow%20Prediction%22" },
  { title: "A Calibration Framework for Heterogeneous Parameters of Car-Following Models Incorporating Macroscopic and Microscopic Traffic Flow Characteristics", venue: "IEEE Transactions on Intelligent Transportation Systems · Under review", url: "https://scholar.google.com/scholar?q=%22A%20Calibration%20Framework%20for%20Heterogeneous%20Parameters%20of%20Car-Following%20Models%20Incorporating%20Macroscopic%20and%20Microscopic%20Traffic%20Flow%20Characteristics%22" },
  { title: "Twenty-Five Years of the Intelligent Driver Model: Foundations, Extensions, Applications, and Future Directions", venue: "Transportation Research Part B · Under revision", url: "https://arxiv.org/abs/2506.05909" },
  { title: "A Strictly Proper Scoring-Rule Theory for Calibrating Stochastic Car-Following Models", venue: "Transportation Science · Under review", url: "https://arxiv.org/abs/2609.04988" }
];

const publicationLinkStyles = document.createElement("style");
publicationLinkStyles.textContent = ".paper-row{grid-template-columns:minmax(0,1.25fr) minmax(220px,.9fr)}.paper-row h4 a{color:inherit;text-decoration:none}.paper-row h4 a::after{content:' ↗';color:var(--lime);font-size:.8em;opacity:0;transition:opacity .18s}.paper-row h4 a:hover{color:var(--lime)}.paper-row h4 a:hover::after,.paper-row h4 a:focus-visible::after{opacity:1}.paper-row h4 a:focus-visible{outline:1px solid var(--lime);outline-offset:4px}";
document.head.append(publicationLinkStyles);

const papersSection = document.querySelector("#papers");
if (papersSection) {
  papersSection.innerHTML = `<div class="section-head"><h2>Selected Papers</h2></div>${publicationRows.map(({ title, venue, url }) => {
    const paperTitle = url ? `<a href="${url}" target="_blank" rel="noopener" aria-label="Open ${title}">${title}</a>` : title;
    return `<div class="paper-row"><h4>${paperTitle}</h4><p>${venue}</p></div>`;
  }).join("")}`;
}
