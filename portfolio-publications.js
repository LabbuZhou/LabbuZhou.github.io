const publicationRows = [
  { title: "A Driving Regime-Embedded Deep Learning Framework for Modeling Intradriver Heterogeneity in Multiscale Car-Following Dynamics", venue: "IEEE Transactions on Cybernetics · First author · 2026", status: "Published", url: "https://doi.org/10.1109/tcyb.2026.3660643" },
  { title: "On the Calibration of Stochastic Car Following Models", venue: "Transportation Research Part B · First author · 2025", status: "Published", url: "https://doi.org/10.1016/j.trb.2025.103224" },
  { title: "Experimental Features of Emissions and Fuel Consumption in a Car-Following Platoon", venue: "Transportation Research Part D · First author · 2023", status: "Published", url: "https://doi.org/10.1016/j.trd.2023.103823" },
  { title: "Cellular Automaton Model with the Multi-Anticipative Effect to Reproduce the Empirical Findings of Kerner’s Three-Phase Traffic Theory", venue: "Physica A · First author · 2022", status: "Published", url: "https://doi.org/10.1016/j.physa.2022.127162" },
  { title: "Celluar Automaton Approach for Modeling Traffic System", venue: "Advances in Cellular Automata: Volume 2 · Co-author · 2025", status: "Published", url: "https://doi.org/10.1007/978-3-031-81097-8_10" },
  { title: "Towards Experiment-Driven and AI-Enhanced Driving Behavioral Research", venue: "Frontiers of Engineering Management · First author · 2026", status: "Published", url: "https://doi.org/10.1007/s42524-026-6043-0" },
  { title: "A Structured Framework for Calibrating Stochastic Car-Following Models: Data Adequacy, Parameter Sensitivity, and Objective Selection", venue: "IEEE Transactions on Intelligent Transportation Systems · First author", status: "Under review" },
  { title: "The Moving Target of Urban Equity: Spatiotemporal Demand and Double Disadvantage in Hefei, China", venue: "Transportation Research Part A · First author", status: "Under review" },
  { title: "A Clustering-Decomposition-Ensemble Framework with Reinforcement Learning-Based Adaptive Weighting for Short-Term Metro Passenger Flow Prediction", venue: "Tunnelling and Underground Space Technology · Corresponding author", status: "Under review" },
  { title: "A Calibration Framework for Heterogeneous Parameters of Car-Following Models Incorporating Macroscopic and Microscopic Traffic Flow Characteristics", venue: "IEEE Transactions on Intelligent Transportation Systems · Corresponding author", status: "Under review" },
  { title: "Twenty-Five Years of the Intelligent Driver Model: Foundations, Extensions, Applications, and Future Directions", venue: "Transportation Research Part B · First author", status: "Under revision" },
  { title: "A Scoring-Rule Theory for Calibrating Stochastic Car-Following Models", venue: "Transportation Science · First author", status: "Under review" }
];

const publicationLinkStyles = document.createElement("style");
publicationLinkStyles.textContent = ".paper-row h4 a{color:inherit;text-decoration:none}.paper-row h4 a::after{content:' ↗';color:var(--lime);font-size:.8em;opacity:0;transition:opacity .18s}.paper-row h4 a:hover{color:var(--lime)}.paper-row h4 a:hover::after,.paper-row h4 a:focus-visible::after{opacity:1}.paper-row h4 a:focus-visible{outline:1px solid var(--lime);outline-offset:4px}";
document.head.append(publicationLinkStyles);

const papersSection = document.querySelector("#papers");
if (papersSection) {
  papersSection.innerHTML = `<div class="section-head"><h2>Selected Papers</h2><p>A curated public record of published papers and current submissions. Working drafts and rejected submissions remain private.</p></div>${publicationRows.map(({ title, venue, status, url }) => {
    const paperTitle = url ? `<a href="${url}" target="_blank" rel="noopener" aria-label="Open ${title}">${title}</a>` : title;
    return `<div class="paper-row"><h4>${paperTitle}</h4><p>${venue}</p><span class="status">${status}</span></div>`;
  }).join("")}`;
}
