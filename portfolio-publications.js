const publicationRows = [
  ["A Driving Regime-Embedded Deep Learning Framework for Modeling Intradriver Heterogeneity in Multiscale Car-Following Dynamics", "IEEE Transactions on Cybernetics · First author · 2026", "Published"],
  ["On the Calibration of Stochastic Car Following Models", "Transportation Research Part B · First author · 2025", "Published"],
  ["Experimental Features of Emissions and Fuel Consumption in a Car-Following Platoon", "Transportation Research Part D · First author · 2023", "Published"],
  ["Cellular Automaton Model with the Multi-Anticipative Effect to Reproduce the Empirical Findings of Kerner’s Three-Phase Traffic Theory", "Physica A · First author · 2022", "Published"],
  ["Celluar Automaton Approach for Modeling Traffic System", "Advances in Cellular Automata: Volume 2 · Co-author · 2025", "Published"],
  ["Towards Experiment-Driven and AI-Enhanced Driving Behavioral Research", "Frontiers of Engineering Management · First author · 2026", "Published"],
  ["A Structured Framework for Calibrating Stochastic Car-Following Models: Data Adequacy, Parameter Sensitivity, and Objective Selection", "IEEE Transactions on Intelligent Transportation Systems · First author", "Under review"],
  ["The Moving Target of Urban Equity: Spatiotemporal Demand and Double Disadvantage in Hefei, China", "Transportation Research Part A · First author", "Under review"],
  ["A Clustering-Decomposition-Ensemble Framework with Reinforcement Learning-Based Adaptive Weighting for Short-Term Metro Passenger Flow Prediction", "Tunnelling and Underground Space Technology · Corresponding author", "Under review"],
  ["A Calibration Framework for Heterogeneous Parameters of Car-Following Models Incorporating Macroscopic and Microscopic Traffic Flow Characteristics", "IEEE Transactions on Intelligent Transportation Systems · Corresponding author", "Under review"],
  ["Twenty-Five Years of the Intelligent Driver Model: Foundations, Extensions, Applications, and Future Directions", "Transportation Research Part B · First author", "Under revision"],
  ["A Scoring-Rule Theory for Calibrating Stochastic Car-Following Models", "Transportation Science · First author", "Under review"]
];

const papersSection = document.querySelector("#papers");
if (papersSection) {
  papersSection.innerHTML = `<div class="section-head"><h2>Selected Papers</h2><p>A curated public record of published papers and current submissions. Working drafts and rejected submissions remain private.</p></div>${publicationRows.map(([title, venue, status]) => `<div class="paper-row"><h4>${title}</h4><p>${venue}</p><span class="status">${status}</span></div>`).join("")}`;
}
