/* ==========================================================================
   Travel Thrive — main.js
   Vanilla JS only. No dependencies, no network calls, no data collection.
   Handles: sticky header shadow, desktop mega-menu keyboard support,
   mobile slide-out menu with accordion, scroll-reveal animations,
   back-to-top button. Every feature is purely presentational/navigational.
   ========================================================================== */
(function () {
  "use strict";

  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Sticky header shadow on scroll ---------- */
  var header = document.querySelector(".site-header");
  function onScroll() {
    if (!header) return;
    if (window.scrollY > 12) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
    toggleBackToTop();
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Desktop mega-menu (click + keyboard) ---------- */
  var dropdownToggles = document.querySelectorAll(".has-dropdown");
  dropdownToggles.forEach(function (toggle) {
    toggle.addEventListener("click", function (e) {
      e.preventDefault();
      var expanded = toggle.getAttribute("aria-expanded") === "true";
      closeAllDropdowns();
      toggle.setAttribute("aria-expanded", String(!expanded));
    });
  });

  function closeAllDropdowns() {
    dropdownToggles.forEach(function (t) {
      t.setAttribute("aria-expanded", "false");
    });
  }

  document.addEventListener("click", function (e) {
    if (!e.target.closest(".nav-list > li")) {
      closeAllDropdowns();
    }
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeAllDropdowns();
  });

  /* ---------- Mobile slide-out menu ---------- */
  var navToggle = document.querySelector(".nav-toggle");
  var mobilePanel = document.querySelector(".mobile-nav-panel");
  var mobileBackdrop = document.querySelector(".mobile-nav-backdrop");
  var mobileClose = document.querySelector(".mobile-close");

  function openMobileNav() {
    if (!mobilePanel) return;
    mobilePanel.classList.add("is-open");
    mobileBackdrop.classList.add("is-open");
    navToggle.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
    var firstLink = mobilePanel.querySelector("a, button");
    if (firstLink) firstLink.focus();
  }
  function closeMobileNav() {
    if (!mobilePanel) return;
    mobilePanel.classList.remove("is-open");
    mobileBackdrop.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }
  if (navToggle) {
    navToggle.addEventListener("click", function () {
      var isOpen = mobilePanel.classList.contains("is-open");
      if (isOpen) { closeMobileNav(); } else { openMobileNav(); }
    });
  }
  if (mobileClose) mobileClose.addEventListener("click", closeMobileNav);
  if (mobileBackdrop) mobileBackdrop.addEventListener("click", closeMobileNav);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeMobileNav();
  });

  /* Mobile accordion for Packages / Ticketing */
  var accordionToggles = document.querySelectorAll(".mobile-accordion-toggle");
  accordionToggles.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var expanded = btn.getAttribute("aria-expanded") === "true";
      var submenu = document.getElementById(btn.getAttribute("aria-controls"));
      btn.setAttribute("aria-expanded", String(!expanded));
      if (submenu) submenu.classList.toggle("is-open", !expanded);
    });
  });

  /* ---------- Scroll reveal ---------- */
  var revealEls = document.querySelectorAll("[data-reveal]");
  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) { el.classList.add("is-revealed"); });
  } else {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) { observer.observe(el); });
  }

  /* ---------- Back to top ---------- */
  var backToTop = document.querySelector(".back-to-top");
  function toggleBackToTop() {
    if (!backToTop) return;
    if (window.scrollY > 500) {
      backToTop.classList.add("is-visible");
    } else {
      backToTop.classList.remove("is-visible");
    }
  }
  if (backToTop) {
    backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
    });
  }
})();
