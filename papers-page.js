(() => {
  const grid = document.querySelector("#papersGrid");
  const count = document.querySelector("#publicationCount");
  const search = document.querySelector("#paperSearch");
  const typeFilter = document.querySelector("#typeFilter");
  const yearFilter = document.querySelector("#yearFilter");
  let records = [];

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
  const recordLabel = (paper) => paper.type === "preprint" ? "arXiv preprint" : "Published";

  function render() {
    const phrase = search.value.trim().toLocaleLowerCase();
    const type = typeFilter.value;
    const year = yearFilter.value;
    const filtered = records.filter((paper) => {
      const haystack = [paper.title, paper.summary, paper.venue, ...(paper.authors || []), ...(paper.tags || [])]
        .join(" ").toLocaleLowerCase();
      return (!phrase || haystack.includes(phrase))
        && (type === "all" || paper.type === type)
        && (year === "all" || paper.year === year);
    });

    count.textContent = `${filtered.length} ${filtered.length === 1 ? "paper" : "papers"}`;
    grid.innerHTML = filtered.length ? filtered.map((paper) => `
      <article class="paper-card">
        <div>
          <span class="type ${paper.type === "preprint" ? "preprint" : ""}">${recordLabel(paper)}</span>
          <h2><a href="${detailUrl(paper)}">${escapeHtml(paper.title)}</a></h2>
          <p class="paper-meta">${escapeHtml(metaLine(paper))}</p>
          ${paper.summary ? `<p class="paper-summary">${escapeHtml(paper.summary)}</p>` : ""}
        </div>
        <a class="paper-open" href="${detailUrl(paper)}">Read details →</a>
      </article>
    `).join("") : '<p class="empty">No public papers match these filters.</p>';
  }

  async function load() {
    try {
      const response = await fetch("data/publications.json", { cache: "no-cache" });
      if (!response.ok) throw new Error("Could not load publications");
      const catalog = await response.json();
      records = Array.isArray(catalog.publications) ? catalog.publications : [];
      const years = [...new Set(records.map((paper) => paper.year).filter(Boolean))].sort().reverse();
      yearFilter.insertAdjacentHTML("beforeend", years.map((year) => `<option value="${escapeHtml(year)}">${escapeHtml(year)}</option>`).join(""));
      render();
    } catch (error) {
      count.textContent = "";
      grid.innerHTML = '<p class="empty">The publication record could not be loaded. Please try again shortly.</p>';
    }
  }

  search.addEventListener("input", render);
  [typeFilter, yearFilter].forEach((element) => element.addEventListener("change", render));
  load();
})();
