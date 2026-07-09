/* =========================================================================
   Travel Thrive — site interactions
   Sticky header shadow, mobile nav, dropdown accordions, scroll-reveal,
   gallery lightbox. No network calls, no form submission — fully static.
   ========================================================================= */
(function () {
  "use strict";

  /* Sticky header shadow on scroll */
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* Mobile nav toggle */
  var navToggle = document.querySelector(".nav-toggle");
  var mainNav = document.querySelector(".main-nav");
  if (navToggle && mainNav) {
    navToggle.addEventListener("click", function () {
      var open = mainNav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(open));
      document.body.style.overflow = open ? "hidden" : "";
    });

    /* Mobile accordion for dropdown menu items */
    var dropdownParents = mainNav.querySelectorAll(".has-dropdown > .nav-link");
    dropdownParents.forEach(function (link) {
      link.addEventListener("click", function (e) {
        if (window.innerWidth <= 760) {
          e.preventDefault();
          var parent = link.closest(".has-dropdown");
          var wasOpen = parent.classList.contains("mobile-open");
          mainNav.querySelectorAll(".has-dropdown").forEach(function (li) {
            li.classList.remove("mobile-open");
          });
          if (!wasOpen) parent.classList.add("mobile-open");
        }
      });
    });

    /* Close mobile menu when a real link is followed */
    mainNav.querySelectorAll("a:not(.has-dropdown > .nav-link)").forEach(function (a) {
      a.addEventListener("click", function () {
        mainNav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });
  }

  /* Scroll reveal */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in-view"); });
  }

  /* Gallery lightbox (image preview only, no external calls) */
  var galleryItems = document.querySelectorAll("[data-lightbox]");
  var lightbox = document.querySelector(".lightbox");
  if (galleryItems.length && lightbox) {
    var lightboxImg = lightbox.querySelector("img");
    var closeBtn = lightbox.querySelector(".lightbox-close");

    var openLightbox = function (src, alt) {
      lightboxImg.src = src;
      lightboxImg.alt = alt || "";
      lightbox.classList.add("open");
      document.body.style.overflow = "hidden";
    };
    var closeLightbox = function () {
      lightbox.classList.remove("open");
      document.body.style.overflow = "";
    };

    galleryItems.forEach(function (item) {
      item.addEventListener("click", function () {
        var img = item.querySelector("img");
        if (img) openLightbox(img.src, img.alt);
      });
    });
    closeBtn.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeLightbox();
    });
  }
})();
