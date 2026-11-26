/* main.js — partagé par index.html et project.html */
const CVS = [
  { label: "CV Général", file: "assets/cv-dorian-caiati-general.pdf" },
  { label: "CV Création Numérique", file: "assets/cv-dorian-caiati-crea.pdf" },
  { label: "CV Communication", file: "assets/cv-dorian-caiati-com.pdf" }
];
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)]; const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])); const yt = id => `https://www.youtube.com/embed/${encodeURIComponent(id)}`; const img = (src, alt = "") => `<img src="${esc(src)}" alt="${esc(alt)}" loading="lazy" onerror="this.remove()">`; const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;  /* Smooth scroll Lenis branché sur GSAP */ if (window.Lenis && !reduce) { const lenis = new Lenis({ lerp: 0.1 }); if (window.gsap && window.ScrollTrigger) { gsap.registerPlugin(ScrollTrigger); lenis.on("scroll", ScrollTrigger.update); gsap.ticker.add(t => lenis.raf(t * 1000)); gsap.ticker.lagSmoothing(0); } else (function raf(t) { lenis.raf(t); requestAnimationFrame(raf); })(); }  /* Dropdowns CV : tout élément [data-cv] devient un menu accessible */ $$("[data-cv]").forEach((wrap, i) => {
  wrap.classList.add("cv");
  wrap.innerHTML = `<button class="btn btn--ghost" aria-haspopup="true" aria-expanded="false" aria-controls="cv-${i}">Télécharger mon CV <span aria-hidden="true">↓</span></button>
    <ul class="cv__menu" id="cv-${i}" hidden>${CVS.map(c => `<li><a href="${c.file}" download>${c.label}</a></li>`).join("")}</ul>`;
  const btn = $("button", wrap), menu = $(".cv__menu", wrap);
  const toggle = open => { btn.setAttribute("aria-expanded", open); menu.hidden = !open; if (open) $("a", menu).focus(); };
  btn.onclick = () => toggle(menu.hidden);
  wrap.addEventListener("keydown", e => { if (e.key === "Escape") { toggle(false); btn.focus(); } });
  document.addEventListener("click", e => { if (!wrap.contains(e.target)) toggle(false); });
});

function toast(msg) { const t = $("#toast"); if (!t) return; t.textContent = msg; t.classList.add("show"); setTimeout(() => t.classList.remove("show"), 2200); }

/* ---------- INDEX ---------- */
if ($("#grid")) {
  const cats = ["Tous", "Vidéo", "Graphisme", "Motion", "Web", "Éditorial"];
  $("#filters").innerHTML = cats.map((c, i) => `<button class="chip" data-f="${c}" aria-pressed="${i === 0}">${c}</button>`).join("");
  $("#grid").innerHTML = PROJECTS.map(p => `<a class="card" href="project.html?id=${p.id}" data-cats="${p.categories.join("|")}">
    <div class="card__img">${img(p.cover, p.title)}</div>
    <div class="card__body"><h3>${esc(p.title)}</h3><span class="tag">${p.categories.join(" / ")}</span></div></a>`).join("");
  $("#filters").onclick = e => {
    const b = e.target.closest("button"); if (!b) return;
    $$(".chip").forEach(c => c.setAttribute("aria-pressed", c === b)); $$
    (".card").forEach(c => c.hidden = !(b.dataset.f === "Tous" || c.dataset.cats.split("|").includes(b.dataset.f)));
  };
  const SKILLS = [
    { name: "Photoshop", icon: `<svg viewBox="0 0 24 24" aria-hidden="true"><rect width="24" height="24" rx="5" fill="#001E36"/><text x="12" y="16" text-anchor="middle" fill="#31A8FF" font-family="sans-serif" font-weight="700" font-size="11">Ps</text></svg>` },
    { name: "Illustrator", icon: `<svg viewBox="0 0 24 24" aria-hidden="true"><rect width="24" height="24" rx="5" fill="#330000"/><text x="12" y="16" text-anchor="middle" fill="#FF9A00" font-family="sans-serif" font-weight="700" font-size="11">Ai</text></svg>` },
    { name: "InDesign", icon: `<svg viewBox="0 0 24 24" aria-hidden="true"><rect width="24" height="24" rx="5" fill="#49021F"/><text x="12" y="16" text-anchor="middle" fill="#FF3366" font-family="sans-serif" font-weight="700" font-size="11">Id</text></svg>` },
    { name: "Premiere Pro", icon: `<svg viewBox="0 0 24 24" aria-hidden="true"><rect width="24" height="24" rx="5" fill="#00005B"/><text x="12" y="16" text-anchor="middle" fill="#9999FF" font-family="sans-serif" font-weight="700" font-size="11">Pr</text></svg>` },
    { name: "After Effects", icon: `<svg viewBox="0 0 24 24" aria-hidden="true"><rect width="24" height="24" rx="5" fill="#00005B"/><text x="12" y="16" text-anchor="middle" fill="#9999FF" font-family="sans-serif" font-weight="700" font-size="11">Ae</text></svg>` },
    { name: "Figma", icon: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#F24E1E" d="M8.5 2h3.5v7H8.5a3.5 3.5 0 1 1 0-7z"/><path fill="#FF7262" d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"/><path fill="#1ABCFE" d="M12 9h3.5a3.5 3.5 0 1 1 0 7H12V9z"/><path fill="#A259FF" d="M8.5 9H12v7H8.5a3.5 3.5 0 1 1 0-7z"/><path fill="#0ACF83" d="M8.5 16H12v3.5a3.5 3.5 0 1 1-3.5-3.5z"/></svg>` },
    { name: "Framer", icon: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#0055FF" d="M5 2h14v7h-7L5 2zm0 7h7l7 7H5V9zm0 7h7v6l-7-6z"/></svg>` },
    { name: "PhpStorm", icon: `<svg viewBox="0 0 24 24" aria-hidden="true"><rect width="24" height="24" rx="5" fill="#000"/><text x="12" y="15.5" text-anchor="middle" fill="#fff" font-family="sans-serif" font-weight="700" font-size="10">PS</text><rect x="5" y="18.5" width="7" height="1.8" fill="#B345F1"/></svg>` }
  ];
  $("#skills").innerHTML = SKILLS.map(s => `<li>${s.icon}<span>${s.name}</span></li>`).join("");
  $("#copy-mail").onclick = () => navigator.clipboard.writeText("caiati.dorian@gmail.com").then(() => toast("Email copié !"));
  const form = $("#contact-form");
  form.onsubmit = async e => {
    e.preventDefault(); const st = $("#form-status"); st.textContent = "Envoi…";
    try {
      const r = await fetch("https://api.web3forms.com/submit", { method: "POST", body: new FormData(form) });
      if (!(await r.json()).success) throw 0; st.textContent = "Message envoyé, merci !"; form.reset();
    } catch { st.textContent = "Erreur d'envoi, écris-moi directement par email."; }
  };
  if (window.gsap && !reduce) {
    gsap.from(".hero h1 .w", { yPercent: 110, opacity: 0, stagger: 0.12, duration: 1, ease: "power4.out" });
    gsap.from(".hero p, .hero__cta", { y: 24, opacity: 0, delay: 0.5, stagger: 0.15, duration: 0.8 });
    if (window.ScrollTrigger) gsap.utils.toArray(".reveal").forEach(el => gsap.from(el, { y: 40, opacity: 0, duration: 0.9, scrollTrigger: { trigger: el, start: "top 85%" } }));
  }
}

/* ---------- PROJECT ---------- */
if ($("#project")) {
  const id = new URLSearchParams(location.search).get("id");
  const p = PROJECTS.find(x => x.id === id);
  if (!p) { $("#project").innerHTML = `<p class="wrap" style="padding:8rem 0">Projet introuvable. <a href="index.html#projets">Retour</a></p>`; }
  else {
    document.title = `${p.title} — Dorian Caiati`;
    const li = a => a.map(x => `<li>${esc(x)}</li>`).join("");
    const vid = (v, c = "") => `<div class="video ${c}"><iframe src="${yt(v.id)}" title="${esc(v.title)}" allowfullscreen loading="lazy"></iframe></div>`;
    const media = p.media.map(m => {
      if (m.type === "image") return `<figure class="m">${img(m.src, m.alt)}</figure>`;
      if (m.type === "gallery") return `<div class="gallery">${m.images.map(g => `<button class="m" data-lb="${esc(g.src)}" aria-label="Agrandir : ${esc(g.alt)}">${img(g.src, g.alt)}</button>`).join("")}</div>`;
      if (m.type === "youtube") return vid(m);
      if (m.type === "youtube-vertical") return vid(m, "video--v");
      if (m.type === "vertical-grid") return `<div class="vgrid">${m.videos.map(v => vid(v, "video--v")).join("")}</div>`;
      return "";
    }).join("");
    $("#project").innerHTML = `
      <header class="phero" style="--cover:url('../${p.cover}')"><div class="wrap">
        <a class="back" href="index.html#projets">← Retour aux projets</a>
        <h1>${esc(p.title)}</h1><p>${esc(p.subtitle)}</p></div></header>
      <section class="wrap info">
        <div><h2>Missions</h2><ul>${li(p.missions)}</ul><h2>Équipe</h2><p>${esc(p.team)}</p><h2>Outils</h2><ul class="pills">${li(p.tools)}</ul></div>
        <div><h2>Aperçu du projet</h2><p>${esc(p.overview)}</p></div></section>
      <section class="wrap"><h2>Mon rôle</h2><p>${esc(p.role)}</p></section>
      <section class="wrap medias">${media}</section>`;
    $("#pnav").innerHTML = `<a href="index.html#projets">TOUS</a>` + PROJECTS.map(x => `<a href="project.html?id=${x.id}" ${x.id === id ? 'aria-current="page"' : ""}>${esc(x.short)}</a>`).join("");
    const lb = $("#lightbox");
    document.addEventListener("click", e => {
      const b = e.target.closest("[data-lb]");
      if (b) { $("img", lb).src = b.dataset.lb; lb.hidden = false; } else if (e.target.closest("#lightbox")) lb.hidden = true;
    });
    document.addEventListener("keydown", e => { if (e.key === "Escape") lb.hidden = true; });
  }
}