/* ==========================================================================
   Travel Thrive — "Warm Sunset / Coral" main.js
   Vanilla JS only, no dependencies, no network calls, no data collection.
   Handles: header shadow on scroll, mobile slide-down menu, scroll-reveal,
   animated stat counters, back-to-top.
   ========================================================================== */
(function () {
  "use strict";

  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Header shadow on scroll ---------- */
  var header = document.querySelector(".site-header");
  function onScroll() {
    if (header) {
      if (window.scrollY > 12) header.classList.add("is-scrolled");
      else header.classList.remove("is-scrolled");
    }
    toggleBackToTop();
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile slide-down panel ---------- */
  var menuToggle = document.querySelector(".menu-toggle");
  var mobilePanel = document.querySelector(".mobile-panel");
  var mobileClose = document.querySelector(".mobile-panel-close");

  function openPanel() {
    if (!mobilePanel) return;
    mobilePanel.classList.add("is-open");
    document.body.style.overflow = "hidden";
    var firstLink = mobilePanel.querySelector("a, button");
    if (firstLink) firstLink.focus();
  }
  function closePanel() {
    if (!mobilePanel) return;
    mobilePanel.classList.remove("is-open");
    document.body.style.overflow = "";
  }
  if (menuToggle) menuToggle.addEventListener("click", openPanel);
  if (mobileClose) mobileClose.addEventListener("click", closePanel);
  if (mobilePanel) {
    mobilePanel.querySelectorAll(".mobile-links a").forEach(function (link) {
      link.addEventListener("click", closePanel);
    });
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closePanel();
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

  /* ---------- Animated stat counters ---------- */
  var counters = document.querySelectorAll("[data-counter]");
  function animateCounter(el) {
    var target = parseInt(el.getAttribute("data-counter"), 10) || 0;
    var suffix = el.getAttribute("data-suffix") || "";
    if (prefersReducedMotion) {
      el.textContent = target + suffix;
      return;
    }
    var startTime = null;
    var duration = 1300;
    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(target * eased) + suffix;
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
