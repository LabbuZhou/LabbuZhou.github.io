document.querySelector('.vnav nav a[href="cv.pdf"]')?.remove();
document.querySelector('.hero-links a[href*="scholar.google.com"]')?.remove();
document.querySelector('.hero-links a[href="#research"]')?.remove();
document.querySelector('.hero-links a[href="cv.pdf"]')?.remove();
document.querySelector(".hero-v2")?.setAttribute("id", "about");
const navigation = document.querySelector(".vnav nav");
if (navigation) navigation.innerHTML = '<a href="#about">About</a><a href="#research">Research</a><a href="#path">Education</a><a href="#papers">Papers</a><a href="cv.html">CV</a><a href="#contact">Contact</a>';
const brand = document.querySelector(".vbrand");
brand?.remove();

const researchPremise = document.querySelector(".statement p");
if (researchPremise) researchPremise.textContent = "Traffic dynamics and sustainable mobility are examined through a complex-systems lens, linking driving behaviour, collective flow patterns, and the energy consequences of mobility.";
