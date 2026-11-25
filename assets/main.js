/* Déco Sud — comportements du site. Rien à modifier ici : voir donnees.js */
(function () {
  "use strict";
  var D = window.DECOSUD || { contact: {}, pieces: [] };
  var C = D.contact;
  var SPRITE = "assets/cigales.svg#c";

  function cig(cls) {
    return '<svg class="cig ' + (cls || "") + '" aria-hidden="true"><use href="' + SPRITE + '"/></svg>';
  }
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; });
  }
  var COLORS = { terra: "#D94826", cobalt: "#004A99", ocre: "#F2B705", olive: "#1E7F43" };

  /* ---------- En-tête : transparent sur la photo, plein au scroll ---------- */
  var header = document.querySelector(".header");
  if (header && !document.body.classList.contains("page")) {
    var onScroll = function () { header.classList.toggle("solid", window.scrollY > window.innerHeight * 0.6); };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }
  var menuBtn = document.querySelector(".menu-btn");
  if (menuBtn) {
    menuBtn.addEventListener("click", function () {
      var open = header.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", open);
      menuBtn.textContent = open ? "Fermer" : "Menu";
    });
    document.querySelectorAll(".nav a").forEach(function (a) {
      a.addEventListener("click", function () { header.classList.remove("open"); menuBtn.textContent = "Menu"; });
    });
  }

  /* ---------- Objets ---------- */
  function pieceHTML(p) {
    var visual = p.image
      ? '<img src="' + esc(p.image) + '" alt="' + esc(p.nom + ", " + p.par) + '" loading="lazy">'
      : '<div class="placeholder grain" style="background:' + (COLORS[p.couleur] || COLORS.terra) + '">' + cig() + '<span>Photo à venir</span></div>';
    return '<a class="piece reveal" data-id="' + esc(p.id) + '" data-univers="' + esc(p.univers || "") + '" href="visite.html?objet=' + encodeURIComponent(p.id) + '#demande">' +
      '<div class="zoom">' + visual + '</div>' +
      '<p class="name">' + esc(p.nom) + '</p>' +
      '<p class="by">' + esc(p.par) + '</p>' +
      '<span class="ask">Se renseigner <span aria-hidden="true">→</span></span></a>';
  }
  document.querySelectorAll("[data-pieces]").forEach(function (el) {
    var list = el.getAttribute("data-pieces") === "coups" ? D.pieces.filter(function (p) { return p.coupDeCoeur; }) : D.pieces;
    el.innerHTML = list.map(pieceHTML).join("");
  });

  /* ---------- Filtres par univers (page Sélection) ----------
     L'univers actif est dans l'adresse : selection.html#arts-de-la-table */
  var filterBar = document.querySelector("[data-filters]");
  if (filterBar) {
    var univers = D.univers || [];
    var countOf = function (id) { return D.pieces.filter(function (p) { return !id || p.univers === id; }).length; };
    filterBar.innerHTML = [{ id: "", nom: "Tout" }].concat(univers).map(function (u) {
      return '<button type="button" data-u="' + esc(u.id) + '" aria-pressed="false">' + esc(u.nom) + '<span class="count">' + countOf(u.id) + "</span></button>";
    }).join("");
    var applyFilter = function () {
      var id = decodeURIComponent(location.hash.slice(1));
      if (!univers.some(function (u) { return u.id === id; })) id = "";
      filterBar.querySelectorAll("button").forEach(function (b) { b.setAttribute("aria-pressed", b.getAttribute("data-u") === id); });
      var shown = 0;
      document.querySelectorAll('[data-pieces="all"] .piece').forEach(function (el) {
        var ok = !id || el.getAttribute("data-univers") === id;
        el.hidden = !ok;
        if (ok) { shown++; el.classList.add("in"); }
      });
      var empty = document.querySelector(".empty");
      if (empty) empty.hidden = shown > 0;
    };
    filterBar.addEventListener("click", function (e) {
      var b = e.target.closest("button");
      if (!b) return;
      var id = b.getAttribute("data-u");
      if (history.replaceState) history.replaceState(null, "", id ? "#" + id : location.pathname + location.search);
      applyFilter();
    });
    window.addEventListener("hashchange", applyFilter);
    applyFilter();
  }

  /* Flèches du carrousel */
  document.querySelectorAll("[data-scroll]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var s = document.querySelector(".scroller");
      if (!s) return;
      s.scrollBy({ left: (btn.getAttribute("data-scroll") === "next" ? 1 : -1) * s.clientWidth * 0.75, behavior: "smooth" });
    });
  });

  /* ---------- Apparition douce ---------- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (r) { io.observe(r); });
  } else {
    reveals.forEach(function (r) { r.classList.add("in"); });
  }

  /* ---------- Horaires : jour en cours + ouvert / fermé (heure de Paris) ---------- */
  var AM = [600, 750], PM = [870, 1110]; /* 10 h – 12 h 30, 14 h 30 – 18 h 30 */
  var SLOTS = { 0: [[600, 780]], 1: [], 2: [AM, PM], 3: [AM, PM], 4: [AM, PM], 5: [AM, PM], 6: [AM, PM] };
  try {
    var parts = new Intl.DateTimeFormat("en-GB", { timeZone: "Europe/Paris", weekday: "short", hour: "2-digit", minute: "2-digit", hour12: false }).formatToParts(new Date());
    var get = function (t) { return (parts.find(function (p) { return p.type === t; }) || {}).value; };
    var day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"));
    var mins = parseInt(get("hour"), 10) % 24 * 60 + parseInt(get("minute"), 10);
    document.querySelectorAll('.hours li[data-day="' + day + '"]').forEach(function (li) { li.classList.add("today"); });
    var open = (SLOTS[day] || []).some(function (s) { return mins >= s[0] && mins < s[1]; });
    document.querySelectorAll(".status").forEach(function (el) {
      el.classList.toggle("open", open);
      el.textContent = open ? "Ouvert en ce moment" : "Fermé en ce moment";
    });
  } catch (e) { /* navigateur ancien : on n'affiche rien de plus */ }

  /* ---------- Plan : chargé seulement sur demande (pas de cookie Google avant) ---------- */
  var mapBtn = document.querySelector("[data-load-map]");
  if (mapBtn) {
    mapBtn.addEventListener("click", function () {
      var box = mapBtn.closest(".map");
      box.innerHTML = '<iframe title="Plan : Déco Sud, 8 rue Gabriel Péri, La Cadière-d\'Azur" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=' +
        encodeURIComponent("Déco Sud, 8 rue Gabriel Péri, 83740 La Cadière-d'Azur") + '&z=17&output=embed"></iframe>';
    });
  }

  /* ---------- Envoi des demandes (Formspree, sans quitter le site) ---------- */
  function sendForm(form, extra, onDone) {
    var err = form.querySelector(".err");
    var btn = form.querySelector('[type="submit"]');
    if (!form.reportValidity()) return;
    var data = new FormData(form);
    Object.keys(extra || {}).forEach(function (k) { data.set(k, extra[k]); });
    data.delete("objet_libre"); data.delete("objets");
    Array.from(data.keys()).forEach(function (k) { if (k !== "_gotcha" && data.get(k) === "") data.delete(k); });
    data.set("_subject", "Demande depuis le site" + (data.get("objet") ? " : " + data.get("objet") : "") + " (" + (data.get("nom") || "") + ")");
    if (data.get("email")) data.set("_replyto", data.get("email"));
    if (err) err.hidden = true;
    btn.disabled = true;
    var label = btn.textContent;
    btn.textContent = "Envoi en cours…";
    var fail = function () {
      btn.disabled = false; btn.textContent = label;
      if (err) {
        err.innerHTML = "L'envoi n'a pas abouti (connexion interrompue ?). Réessayez dans un instant, ou écrivez-nous directement à " +
          '<a href="mailto:' + esc(C.email) + '">' + esc(C.email) + "</a> ou au " + esc(C.telephone) + ".";
        err.hidden = false;
      }
    };
    fetch(C.formspree, { method: "POST", body: data, headers: { Accept: "application/json" } })
      .then(function (r) { if (!r.ok) throw new Error(r.status); form.classList.add("sent"); if (window.umami) umami.track("envoi-formulaire"); if (onDone) onDone(); })
      .catch(fail);
  }

  /* ---------- Panneau « Se renseigner » (toutes les pages) ----------
     S'ouvre depuis n'importe quel objet (.piece) ou bouton [data-ask]. */
  var univName = function (id) { var u = (D.univers || []).filter(function (x) { return x.id === id; })[0]; return u ? u.nom : ""; };
  var onSelection = !!document.querySelector('[data-pieces="all"]');
  (function () {
    var panel = document.createElement("div");
    panel.className = "ask-panel";
    panel.hidden = true;
    panel.innerHTML =
      '<div class="ask-sheet" role="dialog" aria-modal="true" aria-labelledby="ask-titre" tabindex="-1">' +
        '<button type="button" class="ask-close" aria-label="Fermer">×</button>' +
        '<div class="ask-head"></div>' +
        '<p class="ask-intro">Ce petit formulaire vous permet d\u2019écrire directement à Lucie, qui tient la boutique. Elle vous répondra elle-même, avec la disponibilité de la pièce et, si vous habitez loin, les possibilités d\u2019envoi. Rien n\u2019est payé en ligne : tout se décide ensemble, simplement.</p>' +
        '<form class="ask-form" novalidate>' +
          '<input type="hidden" name="objet">' +
          '<div class="field ask-free"><label for="ask-objet">Objet(s) qui vous intéressent</label><input id="ask-objet" name="objet_libre" placeholder="ex. le vase Day-Dream, les verres Abeille…"></div>' +
          '<div class="field"><label for="ask-nom">Prénom et nom</label><input id="ask-nom" name="nom" autocomplete="name" required></div>' +
          '<div class="field"><label for="ask-email">E-mail</label><input id="ask-email" name="email" type="email" autocomplete="email" required></div>' +
          '<div class="field"><label for="ask-tel">Téléphone <span class="opt">(facultatif)</span></label><input id="ask-tel" name="tel" type="tel" autocomplete="tel"></div>' +
          '<div class="field"><label for="ask-ville">Ville / code postal <span class="opt">(facultatif, pour estimer l\u2019envoi)</span></label><input id="ask-ville" name="ville" autocomplete="address-level2"></div>' +
          '<div class="field"><label for="ask-msg">Message</label><textarea id="ask-msg" name="message" rows="4" placeholder="Disponibilité, couleur, envoi…"></textarea></div>' +
          '<input type="text" name="_gotcha" class="hp" tabindex="-1" autocomplete="off" aria-hidden="true">' +
          '<p class="note">Votre demande est envoyée par e-mail à la boutique (via Formspree), uniquement pour vous répondre. <a href="mentions-legales.html#donnees">En savoir plus</a>.</p>' +
          '<button class="pill ink" type="submit">Envoyer ma demande</button>' +
          '<p class="err" role="alert" hidden></p>' +
        '</form>' +
        '<div class="ask-done" role="status" hidden>' + cig() + '<p>Merci, votre demande a bien été transmise à Lucie. Elle vous répondra très vite.</p><button type="button" class="pill ink ask-back">' + (onSelection ? "Retour à la sélection" : "Retour au site") + '</button></div>' +
      '</div>';
    document.body.appendChild(panel);
    var sheet = panel.querySelector(".ask-sheet"), askForm = panel.querySelector(".ask-form"), head = panel.querySelector(".ask-head");
    var done = panel.querySelector(".ask-done"), intro = panel.querySelector(".ask-intro"), opener = null;
    var openPanel = function (p) {
      opener = document.activeElement;
      askForm.reset(); askForm.classList.remove("sent"); askForm.hidden = false; intro.hidden = false; done.hidden = true;
      askForm.querySelector(".err").hidden = true;
      askForm.elements.objet.value = p ? p.nom + (p.par ? " (" + p.par + ")" : "") : "";
      panel.querySelector(".ask-free").hidden = !!p;
      head.innerHTML = p
        ? '<div class="ask-thumb">' + (p.image ? '<img src="' + esc(p.image) + '" alt="">' : '<div class="placeholder grain" style="background:' + (COLORS[p.couleur] || COLORS.terra) + '">' + cig() + "</div>") + "</div>" +
          '<div><p class="eyebrow">' + esc(univName(p.univers)) + '</p><h2 id="ask-titre">' + esc(p.nom) + '</h2><p class="by">' + esc(p.par) + "</p></div>"
        : '<div><p class="eyebrow">Une question, un envoi ?</p><h2 id="ask-titre">Faire une <em>demande</em></h2></div>';
      panel.hidden = false;
      document.documentElement.classList.add("no-scroll");
      requestAnimationFrame(function () { requestAnimationFrame(function () { panel.classList.add("in"); }); });
      sheet.focus({ preventScroll: true });
    };
    var closePanel = function () {
      panel.classList.remove("in");
      document.documentElement.classList.remove("no-scroll");
      setTimeout(function () { panel.hidden = true; }, 450);
      if (opener && opener.focus) opener.focus({ preventScroll: true });
    };
    panel.addEventListener("click", function (e) { if (e.target === panel || e.target.closest(".ask-close, .ask-back")) closePanel(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !panel.hidden) closePanel(); });
    askForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var extra = {};
      if (!askForm.elements.objet.value) extra.objet = askForm.elements.objet_libre.value || "Demande générale";
      sendForm(askForm, extra, function () { askForm.hidden = true; intro.hidden = true; done.hidden = false; });
    });
    var byId = function (id) { return D.pieces.filter(function (p) { return p.id === id; })[0]; };
    document.addEventListener("click", function (e) {
      var a = e.target.closest(".piece, [data-ask]");
      if (!a) return;
      e.preventDefault();
      openPanel(a.classList.contains("piece") ? byId(a.getAttribute("data-id")) : null);
    });
    /* Anciens liens « visite.html?objet=…#demande » : on ouvre directement le panneau */
    var wanted = new URLSearchParams(location.search).get("objet");
    if (wanted && byId(wanted)) openPanel(byId(wanted));
  })();

  /* ---------- Pop-up d'accueil « Noël » ----------
     Réglage : SAISON_NOEL_ACTIVE en haut de donnees.js (true / false). */
  var noelOn = typeof SAISON_NOEL_ACTIVE !== "undefined" && SAISON_NOEL_ACTIVE;
  if (noelOn && document.body.classList.contains("home")) {
    var seen = false;
    try { seen = sessionStorage.getItem("decosud-noel") === "1"; } catch (e) {}
    if (!seen) setTimeout(function () {
      var lastFocus = document.activeElement;
      var pop = document.createElement("div");
      pop.className = "saison";
      pop.innerHTML =
        '<div class="saison-card" tabindex="-1" role="dialog" aria-modal="true" aria-labelledby="saison-titre">' +
          '<button type="button" class="saison-close" aria-label="Fermer">×</button>' +
          '<figure class="saison-img"><img src="assets/img/noel-popup.jpg" alt="Décorations de Noël brodées de perles, photophores rayés rouge et blanc et petit sapin doré à nœud de velours"><figcaption aria-hidden="true">Noël</figcaption></figure>' +
          '<div class="saison-txt">' + cig() +
            '<h2 id="saison-titre">Noël chez <em>Déco Sud</em></h2>' +
            '<p>Découvrez notre sélection de décorations, de lumières d\u2019hiver et d\u2019idées cadeaux pour les fêtes.</p>' +
            '<a class="pill ink" href="selection.html#noel">Découvrir l\u2019univers Noël <span aria-hidden="true">→</span></a>' +
          '</div>' +
        '</div>';
      document.body.appendChild(pop);
      try { sessionStorage.setItem("decosud-noel", "1"); } catch (e) {}
      var close = function () {
        pop.classList.remove("in");
        document.removeEventListener("keydown", onKey);
        setTimeout(function () { pop.remove(); }, 700);
        if (lastFocus && lastFocus.focus) lastFocus.focus();
      };
      var onKey = function (e) { if (e.key === "Escape") close(); };
      pop.addEventListener("click", function (e) { if (e.target === pop || e.target.closest(".saison-close")) close(); });
      pop.querySelector(".pill").addEventListener("click", function () { pop.remove(); });
      document.addEventListener("keydown", onKey);
      requestAnimationFrame(function () { requestAnimationFrame(function () { pop.classList.add("in"); }); });
      pop.querySelector(".saison-card").focus({ preventScroll: true });
    }, 1200);
  }

  /* Lien e-mail affiché dans le pied de page */
  document.querySelectorAll("[data-email]").forEach(function (a) {
    if (C.email) { a.href = "mailto:" + C.email; a.textContent = C.email; }
  });
})();
