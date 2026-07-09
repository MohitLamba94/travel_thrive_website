/* ==========================================================================
   Travel Thrive — "Cinematic Adventure" main.js
   Vanilla JS only, no dependencies, no network calls, no data collection.
   Handles: header frosting on scroll, full-screen overlay menu, scroll-reveal,
   subtle parallax, animated stat counters, back-to-top.
   ========================================================================== */
(function () {
  "use strict";

  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Header frosting on scroll ---------- */
  var header = document.querySelector(".site-header");
  function onScroll() {
    if (header) {
      if (window.scrollY > 16) header.classList.add("is-scrolled");
      else header.classList.remove("is-scrolled");
    }
    toggleBackToTop();
    if (!prefersReducedMotion) parallax();
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Full-screen overlay menu ---------- */
  var menuToggle = document.querySelector(".menu-toggle");
  var overlay = document.querySelector(".overlay-menu");
  var overlayClose = document.querySelector(".overlay-close");

  function openOverlay() {
    if (!overlay) return;
    overlay.classList.add("is-open");
    document.body.style.overflow = "hidden";
    var firstLink = overlay.querySelector("a, button");
    if (firstLink) firstLink.focus();
  }
  function closeOverlay() {
    if (!overlay) return;
    overlay.classList.remove("is-open");
    document.body.style.overflow = "";
  }
  if (menuToggle) menuToggle.addEventListener("click", openOverlay);
  if (overlayClose) overlayClose.addEventListener("click", closeOverlay);
  if (overlay) {
    overlay.querySelectorAll(".overlay-links a").forEach(function (link) {
      link.addEventListener("click", closeOverlay);
    });
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeOverlay();
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

  /* ---------- Subtle parallax on hero background ---------- */
  var heroBg = document.querySelector(".hero-bg");
  function parallax() {
    if (!heroBg) return;
    var offset = Math.min(window.scrollY * 0.25, 160);
    heroBg.style.transform = "translateY(" + offset + "px) scale(1.12)";
  }

  /* ---------- Animated stat counters ---------- */
  var counters = document.querySelectorAll("[data-counter]");
  function animateCounter(el) {
    var target = parseInt(el.getAttribute("data-counter"), 10) || 0;
    var suffix = el.getAttribute("data-suffix") || "";
    if (prefersReducedMotion) {
      el.textContent = target + suffix;
      return;
    }
    var start = 0;
    var duration = 1400;
    var startTime = null;
    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      var value = Math.floor(start + (target - start) * eased);
      el.textContent = value + suffix;
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target + suffix;
    }
    requestAnimationFrame(step);
  }
  if (counters.length) {
    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      counters.forEach(animateCounter);
    } else {
      var counterObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              animateCounter(entry.target);
              counterObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 }
      );
      counters.forEach(function (el) { counterObserver.observe(el); });
    }
  }

  /* ---------- Back to top ---------- */
  var backToTop = document.querySelector(".back-to-top");
  function toggleBackToTop() {
    if (!backToTop) return;
    if (window.scrollY > 600) backToTop.classList.add("is-visible");
    else backToTop.classList.remove("is-visible");
  }
  if (backToTop) {
    backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
    });
  }
})();
