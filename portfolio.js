document.body.innerHTML = `
  <main class="site-v2">
    <header class="vnav">
      <div class="vbrand"><i></i>SHIRUI ZHOU</div>
      <nav aria-label="Primary navigation">
        <a href="#about">About</a>
        <a href="#research">Research</a>
        <a href="#path">Education</a>
        <a href="papers.html">Papers</a>
        <a href="cv.html">CV</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>

    <section class="hero-v2" id="about">
      <div>
        <div class="eyebrow">Complex systems · human mobility · sustainable transport</div>
        <h1>Shirui<br>Zhou <small>周世锐</small></h1>
        <p class="hero-role">Institute of Systems Engineering, Tianjin University<br><span>Department of Physics, Sapienza University of Rome</span></p>
        <div class="hero-links"></div>
      </div>
      <div class="portrait"><img src="profile.jpg" alt="Portrait of Shirui Zhou"></div>
    </section>

    <section class="statement">
      <h2>Research premise</h2>
      <p>Traffic dynamics and sustainable mobility are examined through a complex-systems lens, linking driving behaviour, collective flow patterns, and the energy consequences of mobility.</p>
    </section>

    <section class="section" id="research">
      <div class="section-head"><h2>Research portfolio</h2></div>
      <div class="theme">
        <div class="theme-title"><span class="theme-num">01</span><h3>Traffic dynamics &amp; driving behaviour</h3></div>
        <article class="feature">
          <img src="assets/research/traffic-dynamics.png" alt="Conceptual traffic-flow visualisation">
          <div class="feature-copy"><span class="tag"></span><h4></h4><p></p></div>
        </article>
      </div>
      <div class="theme">
        <div class="theme-title"><span class="theme-num">02</span><h3>Accessibility &amp; urban systems</h3></div>
        <article class="feature">
          <img src="assets/research/urban-equity.png" alt="Conceptual urban accessibility visualisation">
          <div class="feature-copy"><span class="tag"></span><h4></h4><p></p></div>
        </article>
      </div>
      <div class="theme">
        <div class="theme-title"><span class="theme-num">03</span><h3>Transportation, energy &amp; AI</h3></div>
        <article class="feature">
          <img src="assets/research/energy-ai.png" alt="Conceptual transportation-energy visualisation">
          <div class="feature-copy"><span class="tag"></span><h4></h4><p></p></div>
        </article>
      </div>
    </section>

    <section class="section" id="papers"></section>
    <footer class="footer-v2"><span>© 2026 Shirui Zhou</span><span>Updated September 2026</span></footer>
  </main>
`;
