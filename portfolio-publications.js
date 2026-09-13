(() => {
  const catalogUrl = "data/publications.json";

  const escapeHtml = (value = "") => String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");

  const detailUrl = (paper) => `paper.html?paper=${encodeURIComponent(paper.slug)}`;
  const metaLine = (paper) => paper.type === "preprint"
    ? ["arXiv preprint", paper.year].filter(Boolean).join(" · ")
    : [paper.venue, paper.year].filter(Boolean).join(" · ");

  const styles = document.createElement("style");
  styles.textContent = `
    .papers-overview-head{display:flex;align-items:baseline;justify-content:space-between;gap:24px}
    .papers-overview-head>a{color:var(--lime);font-size:.86rem;font-weight:700;text-decoration:none;white-space:nowrap}
    .papers-overview-head>a:hover,.papers-overview-head>a:focus-visible{text-decoration:underline;text-underline-offset:.25em}
    .paper-row{grid-template-columns:minmax(0,1.25fr) minmax(220px,.9fr)}
    .paper-row h4 a{color:inherit;text-decoration:none}
    .paper-row h4 a::after{content:' ↗';color:var(--lime);font-size:.8em;opacity:0;transition:opacity .18s}
    .paper-row h4 a:hover{color:var(--lime)}
    .paper-row h4 a:hover::after,.paper-row h4 a:focus-visible::after{opacity:1}
    .paper-row h4 a:focus-visible{outline:1px solid var(--lime);outline-offset:4px}
    @media(max-width:760px){.papers-overview-head{align-items:flex-start;flex-direction:column;gap:8px}.paper-row{grid-template-columns:1fr}.paper-row p{margin:8px 0 0}}
  `;
  document.head.append(styles);

  async function renderPapers() {
    const section = document.querySelector("#papers");
    if (!section) return;

    try {
      const response = await fetch(catalogUrl, { cache: "no-cache" });
      if (!response.ok) throw new Error("Could not load public publications");
      const catalog = await response.json();
      const papers = Array.isArray(catalog.publications) ? catalog.publications.slice(0, 6) : [];

      section.innerHTML = `
        <div class="section-head papers-overview-head"><h2>Recent papers</h2><a href="papers.html">View all papers →</a></div>
        ${papers.map((paper) => `
          <article class="paper-row">
            <h4><a href="${detailUrl(paper)}">${escapeHtml(paper.title)}</a></h4>
            <p>${escapeHtml(metaLine(paper))}</p>
          </article>
        `).join("")}
      `;
    } catch (error) {
      section.innerHTML = '<div class="section-head papers-overview-head"><h2>Papers</h2><a href="papers.html">View all papers →</a></div>';
    }
  }

  renderPapers();
})();
