/* Travel Thrive — website_009 interactions */
(function () {
  "use strict";

  /* ---------- Header: transparent → solid on scroll ---------- */
  var header = document.querySelector(".site-header");
  var startsTransparent = header && header.classList.contains("transparent");

  function onScroll() {
    if (!header) return;
    var scrolled = window.scrollY > 40;
    if (startsTransparent) {
      header.classList.toggle("transparent", !scrolled);
      header.classList.toggle("solid", scrolled);
    } else {
      header.classList.toggle("solid", scrolled);
    }
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Mobile drawer ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var drawer = document.getElementById("drawer");
  var backdrop = document.getElementById("drawer-backdrop");
  var closeBtn = document.querySelector(".drawer-close");

  function openDrawer() {
    if (!drawer) return;
    drawer.classList.add("open");
    backdrop.classList.add("open");
    document.body.style.overflow = "hidden";
    drawer.setAttribute("aria-hidden", "false");
  }
  function closeDrawer() {
    if (!drawer) return;
    drawer.classList.remove("open");
    backdrop.classList.remove("open");
    document.body.style.overflow = "";
    drawer.setAttribute("aria-hidden", "true");
  }
  if (toggle) toggle.addEventListener("click", openDrawer);
  if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
  if (backdrop) backdrop.addEventListener("click", closeDrawer);
  if (drawer) {
    drawer.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", closeDrawer);
    });
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeDrawer();
  });

  /* ---------- Scroll reveal ---------- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---------- Footer year ---------- */
  var yearEls = document.querySelectorAll("[data-year]");
  var yr = new Date().getFullYear();
  yearEls.forEach(function (el) { el.textContent = yr; });
})();
