(() => {
  "use strict";

  const root = document.documentElement;
  const body = document.body;
  const themeButtons = document.querySelectorAll(".theme-toggle");
  const menuButton = document.querySelector(".menu-toggle");
  const closeButton = document.querySelector(".sidebar-close");
  const scrim = document.querySelector(".nav-scrim");
  const sidebar = document.querySelector(".sidebar");
  const progress = document.querySelector(".reading-progress span");
  const themeColor = document.querySelector('meta[name="theme-color"]');

  const preferredTheme = () => {
    const saved = localStorage.getItem("unflag-theme");
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  };

  const applyTheme = (theme) => {
    root.dataset.theme = theme;
    themeColor?.setAttribute("content", theme === "dark" ? "#0c1514" : "#f4f7f6");
    themeButtons.forEach((button) => {
      button.setAttribute("aria-pressed", String(theme === "dark"));
    });
  };

  applyTheme(preferredTheme());

  themeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
      localStorage.setItem("unflag-theme", nextTheme);
      applyTheme(nextTheme);
    });
  });

  const setNavigation = (isOpen) => {
    body.classList.toggle("nav-open", isOpen);
    menuButton?.setAttribute("aria-expanded", String(isOpen));
    if (isOpen) closeButton?.focus({ preventScroll: true });
  };

  menuButton?.addEventListener("click", () => setNavigation(true));
  closeButton?.addEventListener("click", () => {
    setNavigation(false);
    menuButton?.focus();
  });
  scrim?.addEventListener("click", () => setNavigation(false));
  sidebar?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setNavigation(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && body.classList.contains("nav-open")) {
      setNavigation(false);
      menuButton?.focus();
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
      // Keep malformed or relative links untouched; the build-time link check reports them.
    }
  });

  let progressFrame = 0;
  const updateProgress = () => {
    progressFrame = 0;
    if (!progress) return;
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0;
    progress.style.width = `${ratio * 100}%`;
  };

  window.addEventListener("scroll", () => {
    if (!progressFrame) progressFrame = window.requestAnimationFrame(updateProgress);
  }, { passive: true });
  updateProgress();
})();
