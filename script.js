/* Builds the page from data.js. You normally do not need to edit this file. */
(function () {
  const D = PORTFOLIO;
  const $ = (id) => document.getElementById(id);
  const esc = (s) =>
    String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const initials = D.name.replace(/^Md\.?\s*/i, "").split(/\s+/).map((w) => w[0]).slice(0, 2).join("").toUpperCase();
  const ext = (url) => (url ? ' target="_blank" rel="noopener noreferrer"' : "");

  document.title = `${D.shortName} | ${D.role} Portfolio`;
  $("brand").textContent = D.shortName;
  $("heroRole").textContent = D.role;
  $("heroName").textContent = D.name;
  $("heroTagline").textContent = D.tagline;
  if (D.availability) $("heroAvail").textContent = D.availability;
  else $("heroAvail").remove();

  // Avatar
  $("avatar").innerHTML = D.photo ? `<img src="${esc(D.photo)}" alt="Photo of ${esc(D.shortName)}" />` : esc(initials);

  // Buttons
  const btns = [];
  btns.push(`<a class="btn primary" href="#projects">View projects</a>`);
  if (D.resumeFile) btns.push(`<a class="btn ghost" href="${esc(D.resumeFile)}" download>Download resume</a>`);
  $("heroCta").innerHTML = btns.join("");

  const contact = [];
  if (D.email) contact.push(`<a class="btn primary" href="mailto:${esc(D.email)}">${esc(D.email)}</a>`);
  if (D.links.linkedin) contact.push(`<a class="btn ghost" href="${esc(D.links.linkedin)}"${ext(1)}>LinkedIn</a>`);
  if (D.links.github) contact.push(`<a class="btn ghost" href="${esc(D.links.github)}"${ext(1)}>GitHub</a>`);
  if (D.phone) contact.push(`<a class="btn ghost" href="tel:${esc(D.phone.replace(/[^+\d]/g, ""))}">${esc(D.phone)}</a>`);
  $("contactCta").innerHTML = contact.join("");

  // Stats
  $("stats").innerHTML = (D.stats || []).map((s) => `<div class="stat reveal"><b>${esc(s.value)}</b><span>${esc(s.label)}</span></div>`).join("");

  // About + education
  $("aboutText").innerHTML = D.about.map((p) => `<p>${esc(p)}</p>`).join("");
  $("education").innerHTML =
    `<div class="label">Education</div>` +
    D.education.map((e) =>
      `<h3>${esc(e.school)}</h3><p class="sub">${esc(e.degree)}</p><p class="sub">${esc(e.place)} · ${esc(e.date)}</p>` +
      (e.notes && e.notes.length ? `<ul class="sub">${e.notes.map((n) => `<li>${esc(n)}</li>`).join("")}</ul>` : "")
    ).join("<hr style='border:0;border-top:1px solid var(--line);margin:14px 0'>") +
    `<p class="sub" style="margin-top:14px">📍 ${esc(D.location)}</p>`;

  // Skills
  $("skillGrid").innerHTML = D.skills.map((g) =>
    `<div class="card reveal"><h3>${esc(g.group)}</h3><div class="chips">${g.items.map((i) => `<span class="chip">${esc(i)}</span>`).join("")}</div></div>`
  ).join("");

  // Projects
  $("projectGrid").innerHTML = D.projects.map((p) => {
    const links = [];
    if (p.repo) links.push(`<a href="${esc(p.repo)}"${ext(1)}>Code →</a>`);
    if (p.demo) links.push(`<a href="${esc(p.demo)}"${ext(1)}>Demo →</a>`);
    return `<article class="card project reveal">
      ${p.image ? `<img src="${esc(p.image)}" alt="${esc(p.title)}" loading="lazy" />` : ""}
      <div class="body">
        <span class="date">${esc(p.date)}</span>
        <h3>${esc(p.title)}</h3>
        <p class="sub">${esc(p.summary)}</p>
        <ul>${p.highlights.map((h) => `<li>${esc(h)}</li>`).join("")}</ul>
        <div class="chips">${p.tags.map((t) => `<span class="chip">${esc(t)}</span>`).join("")}</div>
        ${links.length ? `<div class="links">${links.join("")}</div>` : ""}
      </div></article>`;
  }).join("");

  // Experience
  $("timeline").innerHTML = D.experience.map((e) =>
    `<div class="card entry reveal">
      <h3>${esc(e.role)}</h3>
      <div class="meta"><span class="org">${esc(e.org)}</span><span class="date">${esc(e.date)}</span></div>
      <p class="sub" style="margin:0 0 6px">${esc(e.place)}</p>
      <ul>${e.points.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
    </div>`
  ).join("");

  // Achievements
  $("achList").innerHTML = D.achievements.map((a) =>
    `<div class="ach reveal${a.featured ? " featured" : ""}"><span class="yr">${esc(a.year)}</span><span>${esc(a.title)}</span>${a.tag ? `<span class="tag">${esc(a.tag)}</span>` : ""}</div>`
  ).join("");

  $("footerText").textContent = `© ${new Date().getFullYear()} ${D.name}`;

  // Theme toggle (remembers choice)
  const root = document.documentElement;
  let saved = null;
  try { saved = localStorage.getItem("theme"); } catch (e) {}
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  root.dataset.theme = saved || (prefersDark ? "dark" : "light");
  $("themeBtn").addEventListener("click", () => {
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch (e) {}
  });

  // Reveal on scroll
  const els = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { threshold: 0.08 });
    els.forEach((el) => io.observe(el));
  } else {
    els.forEach((el) => el.classList.add("in"));
  }
})();
