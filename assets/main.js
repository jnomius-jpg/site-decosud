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
    return '<a class="piece reveal" href="visite.html?objet=' + encodeURIComponent(p.id) + '#demande">' +
      '<div class="zoom">' + visual + '</div>' +
      '<p class="name">' + esc(p.nom) + '</p>' +
      '<p class="by">' + esc(p.par) + '</p>' +
      '<span class="ask">Se renseigner</span></a>';
  }
  document.querySelectorAll("[data-pieces]").forEach(function (el) {
    var list = el.getAttribute("data-pieces") === "coups" ? D.pieces.filter(function (p) { return p.coupDeCoeur; }) : D.pieces;
    el.innerHTML = list.map(pieceHTML).join("");
  });

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
  var SLOTS = { 0: [[600, 780]], 1: [], 2: [[600, 780], [960, 1170]], 3: [[600, 780], [960, 1170]], 4: [[600, 780], [960, 1170]], 5: [[600, 780], [960, 1170]], 6: [[600, 780], [960, 1170]] };
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

  /* ---------- Formulaire de demande ---------- */
  var form = document.querySelector("#demande-form");
  if (form) {
    var box = form.querySelector("[data-objets]");
    var wanted = new URLSearchParams(location.search).get("objet");
    box.innerHTML = D.pieces.map(function (p) {
      return '<label><input type="checkbox" name="objets" value="' + esc(p.nom + " (" + p.par + ")") + '"' + (p.id === wanted ? " checked" : "") + "> " + esc(p.nom) + "</label>";
    }).join("") + '<label><input type="checkbox" name="objets" value="Autre objet vu en boutique ou sur Instagram"> Autre objet</label>';

    var wa = form.querySelector("[data-whatsapp]");
    if (wa && !C.whatsapp) wa.hidden = true;

    function message() {
      var f = new FormData(form);
      var objets = f.getAll("objets");
      return [
        "Bonjour Lucie,",
        "",
        objets.length ? "Je suis intéressé(e) par : " + objets.join(", ") + "." : "",
        f.get("message") || "",
        "",
        "Livraison souhaitée : " + (f.get("pays") || "à préciser"),
        "",
        f.get("nom") || "",
        f.get("email") || "",
        f.get("tel") || ""
      ].filter(function (l, i, a) { return !(l === "" && a[i - 1] === ""); }).join("\n");
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;
      if (!C.email) {
        form.querySelector(".ok").textContent = "L'envoi par e-mail arrive très bientôt. En attendant, appelez-nous au " + C.telephone + ".";
        form.classList.add("sent");
        return;
      }
      var subject = "Demande depuis le site — " + (new FormData(form).get("nom") || "");
      location.href = "mailto:" + C.email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(message());
      form.classList.add("sent");
    });
    if (wa) {
      wa.addEventListener("click", function () {
        if (!form.reportValidity()) return;
        window.open("https://wa.me/" + C.whatsapp + "?text=" + encodeURIComponent(message()), "_blank", "noopener");
        form.classList.add("sent");
      });
    }
  }

  /* Liens e-mail / WhatsApp affichés dans le pied de page */
  document.querySelectorAll("[data-email]").forEach(function (a) {
    if (C.email) { a.href = "mailto:" + C.email; a.textContent = C.email; } else { a.href = "visite.html#demande"; a.textContent = "Écrire à la boutique"; }
  });
  document.querySelectorAll("[data-wa-link]").forEach(function (a) {
    if (C.whatsapp) a.href = "https://wa.me/" + C.whatsapp; else a.hidden = true;
  });
})();
