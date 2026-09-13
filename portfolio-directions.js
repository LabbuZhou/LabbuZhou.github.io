const directionCards = [
  {
    label: "Research direction 01",
    title: "Traffic Dynamics & Driving Behaviour",
    text: "<span class=\"direction-quote\">\u201cTraffic theory was inherently an experimental science and should be pursued as such.\u201d<small>\u2014 Robert Herman\u2019s guiding conviction, recalled by Denos Gazis</small></span>How do heterogeneous driving decisions accumulate into traffic oscillations, instability, and other collective patterns? I focus on the behavioural mechanisms hidden beneath aggregate traffic flow.<br><br>My work combines controlled trajectory experiments, stochastic and physics-guided car-following models, and data-driven discovery to connect individual adaptation with system-level dynamics.<br><br>Driving-regime transitions, intradriver heterogeneity, model calibration, and the foundations and extensions of classical traffic-flow models."
  },
  {
    label: "Research direction 02",
    title: "Accessibility, Mobility & Urban Equity",
    project: { label: "Explore the 15-Minute Proximity Atlas of Chinese Cities", url: "https://labbuzhou.github.io/China15MinutesCities/" },
    text: "<span class=\"direction-quote\">\u201cCities have the capability of providing something for everybody, only because, and only when, they are created by everybody.\u201d<small>\u2014 Jane Jacobs</small></span>Access to opportunities is not fixed: it changes with daily rhythms, transport supply, and the social position of travellers. I study when mobility systems reproduce or widen urban inequality.<br><br>I integrate spatiotemporal accessibility measures, mobility-demand data, and interpretable modelling to identify who faces double disadvantage and where those patterns emerge.<br><br>Accessibility inequality, temporal access to opportunities, urban mobility demand, and equitable transport policy evaluation."
  },
  {
    label: "Research direction 03",
    title: "Transportation, Energy & AI",
    text: "<span class=\"direction-proposition\">Every trip is a physical trajectory, an energy transaction, and increasingly, a computational decision.</span>Transport decarbonisation depends not only on technology but also on the dynamics of traffic, behaviour, and infrastructure. I examine how microscopic movement patterns scale into energy demand and environmental impacts.<br><br>I combine vehicle experiments, emissions and energy modelling, complex-systems thinking, and AI-assisted research workflows to connect mechanism with intervention.<br><br>Emissions in car-following traffic, electrified mobility, mobility\u2013energy interactions, and experimentally grounded AI for transportation research."
  }
];

const directionQuoteStyles = document.createElement("style");
directionQuoteStyles.textContent = ".direction-quote,.direction-proposition{display:block;margin:0 0 1.25rem;padding:0 0 0 .9rem;border-left:2px solid var(--accent,#c78b55);font-family:Georgia,serif;font-size:1.06em;line-height:1.5;color:var(--ink,#f1eee8)}.direction-quote small{display:block;margin-top:.45rem;font-family:inherit;font-size:.72em;letter-spacing:.035em;color:var(--muted,#a8aaa4)}.direction-proposition{font-style:italic}.direction-project{display:inline-block;margin-top:1.35rem;color:var(--lime,#c9f36b);font-size:.82rem;font-weight:700;text-decoration:none}.direction-project:hover,.direction-project:focus-visible{text-decoration:underline;text-underline-offset:.25em}";
document.head.append(directionQuoteStyles);

document.querySelectorAll(".feature-copy").forEach((card, index) => {
  const data = directionCards[index];
  if (!data) return;
  card.querySelector(".tag").textContent = data.label;
  card.querySelector("h4").textContent = data.title;
  card.querySelector("p").innerHTML = data.text;
  card.querySelector("a")?.remove();
  if (data.project) card.insertAdjacentHTML("beforeend", `<a class="direction-project" href="${data.project.url}" target="_blank" rel="noopener">${data.project.label} ↗</a>`);
});
