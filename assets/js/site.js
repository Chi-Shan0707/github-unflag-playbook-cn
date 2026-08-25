(() => {
  "use strict";

  const body = document.body;
  const menuButton = document.querySelector(".menu-toggle");
  const closeButton = document.querySelector(".sidebar-close");
  const scrim = document.querySelector(".nav-scrim");
  const sidebar = document.querySelector(".sidebar");

  const setNavigation = (isOpen) => {
    body.classList.toggle("nav-open", isOpen);
    menuButton?.setAttribute("aria-expanded", String(isOpen));
    if (isOpen) closeButton?.focus({ preventScroll: true });
  };

  menuButton?.addEventListener("click", () => setNavigation(true));
  closeButton?.addEventListener("click", () => {
    setNavigation(false);
    menuButton?.focus({ preventScroll: true });
  });
  scrim?.addEventListener("click", () => setNavigation(false));
  sidebar?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setNavigation(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && body.classList.contains("nav-open")) {
      setNavigation(false);
      menuButton?.focus({ preventScroll: true });
    }
  });

  document.querySelectorAll(".content a[href]").forEach((link) => {
    try {
      const url = new URL(link.href, window.location.href);
      if ((url.protocol === "http:" || url.protocol === "https:") && url.origin !== window.location.origin) {
        link.target = "_blank";
        link.rel = "noopener noreferrer external";
        link.classList.add("external-link");
      }
    } catch (_) {
      // Build-time checks report malformed links; leave them unchanged here.
    }
  });
})();
