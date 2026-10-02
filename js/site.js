const publications = [
  {
    year: "2026",
    journal: "Physical Chemistry Chemical Physics",
    citation: "28(31), 18881–18892",
    title: "Probing metastability, relaxation dynamics and interfacial energetics in lipase unfolding by hysteresis-encoded real-time electrical impedance",
    authors: ["Abhijit Lincon", "Sandeep K. Yadav", "Sunando DasGupta", "Soumen Das"],
    contribution: "Hysteresis-encoded NFEIS reveals dynamic electrical signatures associated with metastability and irreversibility during thermal unfolding.",
    role: "Conceptualization · Methodology · Investigation · Analysis · Visualization · Writing",
    tags: ["Protein Biophysics", "NFEIS", "Hysteresis"],
    doi: "https://doi.org/10.1039/d6cp01446a",
    featured: true,
    heroImage: "images/lipase-impedance-full-visual.png",
    heroAlt: "Full visual summary of label-free real-time electrical impedance monitoring of lipase unfolding and hysteresis",
    image: "images/pccp-lipase-graphical-abstract.png",
    alt: "Graphical abstract for lipase unfolding and impedance hysteresis research"
  },
  {
    year: "2026",
    journal: "ACS Applied Materials & Interfaces",
    citation: "18(34), 46716–46738",
    title: "Heparin-Ornamented Polycaprolactone–Silk Fibroin Emulsion-Based Nano-/Microfibrous Conduit as a Promising Hemocompatible Tubular Graft",
    authors: ["Trina Roy", "Preetam Guha Ray", "Bency Shaji", "Ragavi Rajasekaran", "Debajyoti Palai", "Abhijit Lincon", "Pravin Vasudeo Vaidya", "Nantu Dogra", "Samir Das", "Roy Joseph", "Sabyasachi Roy", "Karabi Das", "Soumen Das", "Santanu Chattopadhyay", "Santanu Dhara"],
    contribution: "A heparin-ornamented PCL–silk fibroin emulsion electrospinning strategy enables nano-/microfibrous conduits with hemocompatible tubular graft potential.",
    tags: ["Biomaterials", "Hemocompatibility", "Tubular Graft"],
    doi: "https://doi.org/10.1021/acsami.6c09018",
    image: "images/heparin-pcl-sf-fibrous-conduit.png",
    alt: "Process figure showing PCL, silk fibroin, emulsion electrospinning and electrospun tubular graft formation"
  },
  {
    year: "2025",
    journal: "Sensors and Actuators B: Chemical",
    citation: "427, 137182",
    title: "Capturing in-vitro electro-mechanochemical signals in a label-free drug testing system for atherosclerosis",
    authors: ["Abhijit Lincon", "Sandeep Kumar Yadav", "Subhayan Das", "Mahitosh Mandal", "Sunando DasGupta", "Soumen Das"],
    contribution: "A label-free platform integrates electrical and mechanical signals to assess cellular response to anti-atherosclerotic treatment.",
    role: "Conceptualization · Methodology · Investigation · Analysis · Software · Supervision · Visualization · Writing",
    tags: ["Biosensing", "Atherosclerosis", "Drug Response"],
    doi: "https://doi.org/10.1016/j.snb.2024.137182",
    image: "images/atherosclerosis-label-free-multisignal.png",
    alt: "Label-free multisignal in vitro drug testing platform for atherosclerosis showing microelectrical, micromechanical and microchemical response assessment"
  },
  {
    year: "2024",
    journal: "International Journal of Pharmaceutics",
    citation: "651, 123737",
    title: "Gelatin-decorated Graphene oxide: A nanocarrier for delivering pH-responsive drug for improving therapeutic efficacy against atherosclerotic plaque",
    authors: ["Sandeep Kumar Yadav", "Shreyasi Das", "Abhijit Lincon", "Saradindu Saha", "Somdeb BoseDasgupta", "Samit K. Ray", "Soumen Das"],
    contribution: "A graphene oxide–gelatin nanocarrier enables pH-responsive atorvastatin delivery for improved therapeutic action against atherosclerotic plaque.",
    tags: ["Nanomedicine", "Drug Delivery", "Atherosclerosis"],
    doi: "https://doi.org/10.1016/j.ijpharm.2023.123737",
    image: "images/graphene-oxide-gelatin-ph-responsive-drug-delivery.png",
    alt: "Gelatin-decorated graphene oxide nanocarrier showing pH-responsive drug loading, plaque accumulation, local release and therapeutic effects in atherosclerosis"
  },
  {
    year: "2024",
    journal: "ACS Applied Bio Materials",
    citation: "7(4), 2240–2253",
    title: "Biodegradable Solid Polymer Electrolytes from the Discarded Cataractous Eye Protein Isolate",
    authors: ["Prasun Chowdhury", "Abhijit Lincon", "Shishir Bhowmik", "Atul Kumar Ojha", "Sreshtha Chaki", "Tridib Samanta", "Atri Sen", "Swagata Dasgupta"],
    contribution: "Discarded cataractous eye protein isolate is repurposed into a biodegradable solid polymer electrolyte for bioelectronic materials.",
    tags: ["Biomaterials", "Protein", "Bioelectronics"],
    doi: "https://doi.org/10.1021/acsabm.3c01229",
    image: "images/project 5.jpg",
    alt: "Biodegradable solid polymer electrolyte research visual"
  },
  {
    year: "2024",
    journal: "International Journal of Biological Macromolecules",
    citation: "256, 128271",
    title: "Probing silver nanoparticle mediated mitigation of UV-photolysis in proteins by electrical impedance analysis",
    authors: ["Abhijit Lincon", "Pratyusa Mohapatra", "Soumen Das", "Sunando DasGupta"],
    contribution: "Nf-EIS with Raman and circular dichroism validation characterizes UV-induced protein damage and its mitigation by silver nanoparticles.",
    role: "Conceptualization · Data curation · Formal analysis · Investigation · Methodology · Resources · Validation · Writing",
    tags: ["Protein Biophysics", "UV Photolysis", "NFEIS"],
    doi: "https://doi.org/10.1016/j.ijbiomac.2023.128271",
    image: "images/uv-photolysis-silver-nanoparticle-protection.png",
    alt: "Label-free impedance detection of UV photolysis-induced protein unfolding and silver nanoparticle-mediated protection"
  },
  {
    year: "2022",
    journal: "Journal of Molecular Liquids",
    citation: "360, 119301",
    title: "Capturing protein denaturation using electrical impedance technique",
    authors: ["Abhijit Lincon", "Soumen Das", "Sunando DasGupta"],
    contribution: "Electrical impedance captures intrinsic changes associated with thermal protein denaturation over coplanar electrodes.",
    tags: ["Protein Unfolding", "Electrical Impedance"],
    doi: "https://doi.org/10.1016/j.molliq.2022.119301",
    image: "images/bsa-static-impedance-denaturation.png",
    alt: "Label-free static impedance sensing of thermal denaturation of BSA showing native and unfolded states over coplanar electrodes"
  },
  {
    year: "2021",
    journal: "Chemical Engineering Science",
    citation: "230, 116175",
    title: "Development of graphene oxide–PDMS composite dielectric for rapid droplet movement in digital microfluidic applications",
    authors: ["Mainak Basu", "Vartika Parihar", "Abhijit Lincon", "Vedant P. Joshi", "Soumen Das", "Sunando DasGupta"],
    contribution: "A GO–PDMS composite improves dielectric performance and enables rapid, lower-voltage droplet movement in digital microfluidics.",
    tags: ["Digital Microfluidics", "GO–PDMS", "EWOD"],
    doi: "https://doi.org/10.1016/j.ces.2020.116175",
    image: "images/project 3.jpg",
    alt: "Digital microfluidics and GO-PDMS dielectric droplet movement visual"
  }
];

const visualTemplates = {
  hysteresis: `<svg viewBox="0 0 640 390" role="img" aria-label="Temperature path, protein and impedance hysteresis illustration"><rect width="640" height="390" fill="#e8efeb"/><path d="M55 300H585M85 330V58" stroke="#91aaa2" stroke-width="2"/><path d="M92 266c72-16 87-140 168-139s86 149 175 131 62-140 125-156" fill="none" stroke="#b58a48" stroke-width="5"/><path d="M94 282c85 3 107-83 166-82s92 77 167 51 71-100 131-119" fill="none" stroke="#2f736b" stroke-width="4"/><g transform="translate(270 82)" fill="none" stroke="#12312f" stroke-width="3"><path d="M0 37c12-43 64-46 80-9 15 34-4 59-35 65-38 8-75-18-60-48 17-34 71-24 91 9"/><circle cx="30" cy="27" r="5" fill="#b58a48"/></g><text x="88" y="48" fill="#12312f" font-family="serif" font-size="19">thermal perturbation</text><text x="420" y="344" fill="#2f736b" font-family="sans-serif" font-size="14">IMPEDANCE HYSTERESIS</text></svg>`,
  cell: `<svg viewBox="0 0 640 390" role="img" aria-label="Cell, electrode and treatment response illustration"><rect width="640" height="390" fill="#edf1ed"/><path d="M60 291h520M90 270h460" stroke="#12312f" stroke-width="4"/><path d="M105 270v-36h60v36m25 0v-36h60v36m25 0v-36h60v36m25 0v-36h60v36m25 0v-36h60v36" fill="none" stroke="#b58a48" stroke-width="5"/><circle cx="320" cy="148" r="74" fill="#d3e3dd" stroke="#2f736b" stroke-width="4"/><circle cx="320" cy="148" r="29" fill="#b58a48" opacity=".75"/><circle cx="285" cy="116" r="8" fill="#2f736b"/><circle cx="365" cy="171" r="10" fill="#2f736b"/><path d="M80 70h96l24 38 24-68 30 85 30-55h92" fill="none" stroke="#2f736b" stroke-width="4"/><text x="400" y="80" fill="#12312f" font-family="sans-serif" font-size="15">THERAPEUTIC RESPONSE</text></svg>`,
  carrier: `<svg viewBox="0 0 640 390" role="img" aria-label="Graphene oxide nanocarrier delivering drug to a cell"><rect width="640" height="390" fill="#eee9df"/><path d="M75 80l180 30-28 178-158-42z" fill="#d7dfda" stroke="#12312f" stroke-width="3"/><path d="M92 110l142 26m-151 25 144 23M76 212l144 22M120 88l-30 157m83-147-31 166m79-157-28 166" stroke="#77968e" stroke-width="2"/><g fill="#b58a48"><circle cx="110" cy="120" r="10"/><circle cx="180" cy="152" r="10"/><circle cx="133" cy="215" r="10"/><circle cx="211" cy="238" r="10"/></g><path d="M265 185h92" stroke="#b58a48" stroke-width="4" marker-end="url(#a)"/><defs><marker id="a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0l10 5-10 5z" fill="#b58a48"/></marker></defs><circle cx="470" cy="188" r="95" fill="#d9e8e2" stroke="#2f736b" stroke-width="4"/><circle cx="470" cy="188" r="35" fill="#799f95"/><text x="377" y="325" fill="#12312f" font-family="sans-serif" font-size="15">pH-RESPONSIVE DELIVERY</text></svg>`,
  electrolyte: `<svg viewBox="0 0 640 390" role="img" aria-label="Eye protein isolate transformed into flexible electrolyte"><rect width="640" height="390" fill="#e8efeb"/><path d="M82 168c52-81 145-81 197 0-52 81-145 81-197 0z" fill="#f8faf8" stroke="#2f736b" stroke-width="4"/><circle cx="180" cy="168" r="47" fill="#b9ccc5"/><circle cx="180" cy="168" r="20" fill="#b58a48"/><path d="M296 168h68" stroke="#b58a48" stroke-width="4"/><path d="M350 150l24 18-24 18" fill="none" stroke="#b58a48" stroke-width="4"/><path d="M399 104q73-38 143 0v142q-71-31-143 0z" fill="#f8faf8" stroke="#12312f" stroke-width="4"/><path d="M422 141h94m-94 32h94m-94 32h94" stroke="#86a69c" stroke-width="3"/><text x="392" y="292" fill="#12312f" font-family="sans-serif" font-size="15">FLEXIBLE BIOELECTROLYTE</text></svg>`,
  uv: `<svg viewBox="0 0 640 390" role="img" aria-label="UV light, protein disruption and silver nanoparticle protection"><rect width="640" height="390" fill="#eeece7"/><circle cx="98" cy="80" r="28" fill="#b58a48"/><g stroke="#b58a48" stroke-width="3"><path d="M98 25V5M98 155v-20M43 80H23m150 0h-20M59 41 44 26m108 108-15-15m0-78 15-15M44 134l15-15"/></g><path d="M115 120l88 93" stroke="#8d6aa5" stroke-width="5" stroke-dasharray="8 8"/><path d="M220 229c11-51 82-76 117-35 31 36 3 82-40 80-45-3-72-43-52-75" fill="none" stroke="#12312f" stroke-width="5"/><path d="M355 218h67" stroke="#b58a48" stroke-width="4"/><g fill="#8b9693"><circle cx="470" cy="174" r="14"/><circle cx="515" cy="205" r="11"/><circle cx="460" cy="244" r="12"/></g><path d="M425 269c-9-53 35-103 87-88 48 14 64 75 22 104-34 24-82 7-89-31" fill="none" stroke="#2f736b" stroke-width="5"/><text x="400" y="330" fill="#12312f" font-family="sans-serif" font-size="15">AgNP PROTECTION</text></svg>`,
  protein: `<svg viewBox="0 0 640 390" role="img" aria-label="Folded and unfolded protein over coplanar electrodes"><rect width="640" height="390" fill="#e8efeb"/><path d="M52 301h536M80 280h210m60 0h210" stroke="#12312f" stroke-width="4"/><g stroke="#b58a48" stroke-width="5"><path d="M100 280v-32h48v32m20 0v-32h48v32m20 0v-32h48v32M370 280v-32h48v32m20 0v-32h48v32m20 0v-32h48v32"/></g><path d="M110 150c2-60 90-75 119-20 23 44-30 91-73 65-38-23-13-76 30-66" fill="none" stroke="#2f736b" stroke-width="5"/><path d="M368 191c27-65 51 43 81-27s45 57 103-39" fill="none" stroke="#2f736b" stroke-width="5"/><path d="M280 163h65" stroke="#b58a48" stroke-width="4"/><text x="75" y="75" fill="#12312f" font-family="sans-serif" font-size="15">FOLDED</text><text x="472" y="75" fill="#12312f" font-family="sans-serif" font-size="15">UNFOLDED</text></svg>`,
  droplet: `<svg viewBox="0 0 640 390" role="img" aria-label="Droplet movement over GO-PDMS dielectric and EWOD electrodes"><rect width="640" height="390" fill="#ecefea"/><path d="M60 285h520" stroke="#12312f" stroke-width="4"/><g fill="#b58a48"><rect x="76" y="246" width="86" height="33"/><rect x="176" y="246" width="86" height="33"/><rect x="276" y="246" width="86" height="33"/><rect x="376" y="246" width="86" height="33"/><rect x="476" y="246" width="86" height="33"/></g><path d="M65 234h510" stroke="#2f736b" stroke-width="10"/><path d="M185 212c0-51 56-92 56-92s56 41 56 92c0 28-25 35-56 35s-56-7-56-35z" fill="#a8c8be" stroke="#12312f" stroke-width="4"/><path d="M330 160h108" stroke="#b58a48" stroke-width="4"/><path d="M423 142l24 18-24 18" fill="none" stroke="#b58a48" stroke-width="4"/><text x="78" y="330" fill="#12312f" font-family="sans-serif" font-size="15">GO–PDMS DIELECTRIC · LOWER-VOLTAGE EWOD</text></svg>`
};

function authorMarkup(authors) {
  return authors.map((author) => author === "Abhijit Lincon" ? `<strong>${author}</strong>` : author).join(" · ");
}

function renderPublications() {
  const grid = document.querySelector("#publication-grid");
  if (!grid) return;
  grid.innerHTML = publications.map((paper) => {
    const isFirstAuthor = paper.authors[0] === "Abhijit Lincon";
    return `
    <article class="publication-card${paper.featured ? " featured-paper" : ""}${isFirstAuthor ? " first-author-paper" : ""}">
      <figure class="publication-visual${paper.heroImage ? " paired-visual" : ""}">
        ${paper.heroImage ? `<img class="publication-hero-image" src="${paper.heroImage}" alt="${paper.heroAlt}" loading="lazy">` : ""}
        <img class="${paper.heroImage ? "publication-graphical-abstract" : ""}" src="${paper.image}" alt="${paper.alt}" loading="lazy">
      </figure>
      <div class="publication-copy">
        <p class="publication-meta">${paper.year} · ${paper.journal} · ${paper.citation}</p>
        <h3>${paper.title}</h3>
        <p class="publication-authors">${authorMarkup(paper.authors)}</p>
        <p class="publication-contribution">${paper.contribution}</p>
        ${paper.role ? `<p class="publication-role"><strong>My contribution</strong>${paper.role}</p>` : ""}
        <div class="tags">${paper.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
        <div class="publication-actions">
          <a href="${paper.doi}">View article <span aria-hidden="true">↗</span></a>
          <a href="${paper.doi}">DOI <span aria-hidden="true">↗</span></a>
          <a href="https://scholar.google.com/scholar?q=${encodeURIComponent(paper.title)}">Google Scholar <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </article>
  `;
  }).join("");

  const schema = document.createElement("script");
  schema.type = "application/ld+json";
  schema.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": publications.map((paper) => ({
      "@type": "ScholarlyArticle",
      headline: paper.title,
      author: paper.authors.map((name) => ({ "@type": "Person", name })),
      datePublished: paper.year,
      isPartOf: { "@type": "Periodical", name: paper.journal },
      identifier: paper.doi
    }))
  });
  document.head.appendChild(schema);
}

const navToggle = document.querySelector(".nav-toggle");
const navLinks = [...document.querySelectorAll(".site-nav a")];
const year = document.querySelector("#year");

if (year) year.textContent = new Date().getFullYear();
renderPublications();
document.addEventListener("DOMContentLoaded", renderPublications);

if (navToggle) {
  navToggle.addEventListener("click", () => {
    const open = document.body.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", String(open));
    navToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  });
}

navLinks.forEach((link) => link.addEventListener("click", () => {
  document.body.classList.remove("nav-open");
  navToggle?.setAttribute("aria-expanded", "false");
  navToggle?.setAttribute("aria-label", "Open navigation");
}));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && document.body.classList.contains("nav-open")) {
    document.body.classList.remove("nav-open");
    navToggle?.setAttribute("aria-expanded", "false");
    navToggle?.focus();
  }
});

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealTargets = document.querySelectorAll(".reveal, .continuum-section");

if (reduceMotion || !("IntersectionObserver" in window)) {
  revealTargets.forEach((target) => target.classList.add("visible"));
} else {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealTargets.forEach((target) => revealObserver.observe(target));
}

const sections = [...document.querySelectorAll("main section[id]")];
if ("IntersectionObserver" in window) {
  const activeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        const active = link.getAttribute("href") === `#${entry.target.id}`;
        link.classList.toggle("active", active);
        if (active) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    });
  }, { rootMargin: "-35% 0px -55%", threshold: 0 });
  sections.forEach((section) => activeObserver.observe(section));
}
