(() => {
  const target = document.querySelector("#paperDetail");
  const params = new URLSearchParams(window.location.search);
  const requestedSlug = params.get("paper");

  const escapeHtml = (value = "") => String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");

  const metaLine = (paper) => paper.type === "preprint"
    ? ["arXiv preprint", paper.year].filter(Boolean).join(" · ")
    : [paper.venue, paper.year].filter(Boolean).join(" · ");
  const typeLabel = (paper) => paper.type === "preprint" ? "arXiv preprint" : "Published";

  function safeUrl(value) {
    try {
      const url = new URL(value);
      return ["https:", "http:"].includes(url.protocol) ? url.href : "";
    } catch {
      return "";
    }
  }

  function resource(label, url) {
    const href = safeUrl(url);
    return href ? `<a class="resource-link" href="${escapeHtml(href)}" target="_blank" rel="noopener">${escapeHtml(label)} ↗</a>` : "";
  }

  function setMetadata(paper) {
    const canonical = `https://labbuzhou.github.io/paper.html?paper=${encodeURIComponent(paper.slug)}`;
    document.title = `${paper.title} | Shirui Zhou`;
    document.querySelector("#canonicalUrl").href = canonical;
    document.querySelector("#paperOpenGraphUrl").content = canonical;
    document.querySelector("#paperDescription").content = paper.summary || `${paper.title}, ${metaLine(paper)}.`;
    document.querySelector('meta[property="og:title"]').content = `${paper.title} | Shirui Zhou`;
    document.querySelector('meta[property="og:description"]').content = paper.summary || metaLine(paper);
    document.querySelector("#paperStructuredData").textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ScholarlyArticle",
      headline: paper.title,
      author: (paper.authors || []).map((name) => ({ "@type": "Person", name })),
      datePublished: paper.date || undefined,
      isPartOf: paper.type === "published" && paper.venue ? { "@type": "Periodical", name: paper.venue } : undefined,
      url: paper.url || canonical,
      sameAs: paper.arxivUrl || undefined,
      identifier: paper.doi ? `https://doi.org/${paper.doi}` : paper.arxivId || undefined
    });
  }

  function render(paper) {
    setMetadata(paper);
    const doiUrl = safeUrl(paper.doiUrl);
    const arxivUrl = safeUrl(paper.arxivUrl);
    const publicationDate = paper.date ? new Intl.DateTimeFormat("en", { year: "numeric", month: "long", day: "numeric" }).format(new Date(`${paper.date}T00:00:00`)) : "";
    const primaryLabel = paper.type === "preprint" ? "Read on arXiv" : "Publisher page";
    const resources = [
      resource(primaryLabel, paper.url),
      doiUrl && doiUrl !== safeUrl(paper.url) ? resource("DOI", doiUrl) : "",
      paper.type === "published" ? resource("arXiv preprint", arxivUrl) : "",
      resource("Code", paper.codeUrl),
      resource("Data", paper.dataUrl),
      resource("PDF", paper.pdfUrl)
    ].filter(Boolean).join("");

    target.innerHTML = `
      <a class="back-link" href="papers.html">← All papers</a>
      <section class="page-intro">
        <span class="type ${paper.type === "preprint" ? "preprint" : ""}">${typeLabel(paper)}</span>
        <h1>${escapeHtml(paper.title)}</h1>
        <p class="paper-meta">${escapeHtml(metaLine(paper))}</p>
        ${paper.authors?.length ? `<p class="detail-authors">${escapeHtml(paper.authors.join(", "))}</p>` : ""}
      </section>
      <dl class="metadata">
        <div><dt>${paper.type === "preprint" ? "Repository" : "Venue"}</dt><dd>${escapeHtml(paper.type === "preprint" ? "arXiv" : paper.venue || "—")}</dd></div>
        <div><dt>${paper.type === "preprint" ? "First public version" : "Publication date"}</dt><dd>${escapeHtml(publicationDate || paper.year || "—")}</dd></div>
        ${paper.doi && doiUrl ? `<div><dt>DOI</dt><dd><a href="${escapeHtml(doiUrl)}" target="_blank" rel="noopener">${escapeHtml(paper.doi)}</a></dd></div>` : ""}
        ${paper.arxivId && arxivUrl ? `<div><dt>arXiv</dt><dd><a href="${escapeHtml(arxivUrl)}" target="_blank" rel="noopener">${escapeHtml(paper.arxivId)}</a></dd></div>` : ""}
      </dl>
      ${paper.summary ? `<section class="detail-section"><h2>Overview</h2><p>${escapeHtml(paper.summary)}</p></section>` : ""}
      ${paper.tags?.length ? `<section class="detail-section"><h2>Topics</h2><p>${escapeHtml(paper.tags.join(" · "))}</p></section>` : ""}
      ${resources ? `<section class="detail-section"><h2>Links</h2><div class="resources">${resources}</div></section>` : ""}
    `;
  }

  async function load() {
    try {
      const response = await fetch("data/publications.json", { cache: "no-cache" });
      if (!response.ok) throw new Error("Could not load publications");
      const catalog = await response.json();
      const paper = (catalog.publications || []).find((record) => record.slug === requestedSlug);
      if (!paper) throw new Error("Paper not found");
      render(paper);
    } catch (error) {
      document.title = "Paper not found | Shirui Zhou";
      target.innerHTML = '<a class="back-link" href="papers.html">← All papers</a><section class="page-intro"><span class="eyebrow">Research record</span><h1>Paper not found</h1><p class="lede">This public paper record is unavailable or its link has changed.</p></section>';
    }
  }

  load();
})();
