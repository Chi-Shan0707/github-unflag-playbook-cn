(() => {
  "use strict";

  const body = document.body;
  const menuButton = document.querySelector(".menu-toggle");
  const searchToggle = document.querySelector(".mobile-search-toggle");
  const closeButton = document.querySelector(".sidebar-close");
  const scrim = document.querySelector(".nav-scrim");
  const sidebar = document.querySelector(".sidebar");

  const mobileQuery = window.matchMedia("(max-width: 880px)");

  const setNavigation = (isOpen) => {
    body.classList.toggle("nav-open", isOpen);
    menuButton?.setAttribute("aria-expanded", String(isOpen));
    // Off-canvas on mobile: keep the closed drawer out of the tab order and
    // the accessibility tree. `inert` is the only thing that removes it from
    // both; CSS visibility alone would still leave it focusable in browsers
    // that treat visibility as focusable-but-hidden.
    if (mobileQuery.matches) sidebar?.toggleAttribute("inert", !isOpen);
    if (isOpen) closeButton?.focus({ preventScroll: true });
  };

  // The drawer only exists below the breakpoint, so only manage it there.
  if (mobileQuery.matches) sidebar?.setAttribute("inert", "");
  mobileQuery.addEventListener("change", (event) => {
    if (!event.matches) sidebar?.removeAttribute("inert");
  });

  menuButton?.addEventListener("click", () => setNavigation(true));
  // On touch the search field lives inside the off-canvas drawer, so its
  // header shortcut opens the drawer and hands focus straight to the field.
  searchToggle?.addEventListener("click", () => {
    setNavigation(true);
    document.querySelector(".search-input")?.focus();
  });
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

  /* ------------------------------------------------------------------ search
     Client-side keyword search over an index the layout embeds as
     application/json. No network request, which keeps connect-src 'none'
     intact. Results are built with DOM nodes and textContent only — the
     indexed text includes community-authored case notes, so it is never
     interpolated as HTML. */
  const initSearch = () => {
    const form = document.querySelector(".search");
    const input = document.querySelector(".search-input");
    const list = document.querySelector(".search-results");
    const status = document.querySelector(".search-status");
    const clear = document.querySelector(".search-clear");
    const source = document.getElementById("site-search-index");
    if (!form || !input || !list || !status || !source) return;

    const zh = document.documentElement.lang !== "en";
    const MAX_RESULTS = 8;

    let docs = [];
    try {
      docs = JSON.parse(source.textContent) || [];
    } catch (_) {
      return; // Malformed index: leave the nav usable, search simply inert.
    }
    if (!docs.length) return;

    // Pre-lowercase once; CJK has no case, Latin does.
    const corpus = docs.map((doc) => ({
      url: doc.u,
      title: doc.t,
      titleLower: doc.t.toLowerCase(),
      body: doc.x,
      bodyLower: doc.x.toLowerCase(),
    }));
    const here = `${location.pathname.replace(/\/index\.html$/, "/")}${
      location.pathname.endsWith("/") ? "" : "/"
    }`;

    let matches = [];

    const score = (doc, terms) => {
      let total = 0;
      for (const term of terms) {
        const inTitle = doc.titleLower.indexOf(term);
        if (inTitle >= 0) {
          // Exact and prefix title hits are the strongest signal.
          total += inTitle === 0 ? 100 : 60;
          continue;
        }
        const inBody = doc.bodyLower.indexOf(term);
        if (inBody < 0) return 0; // every term must appear somewhere
        total += 10;
      }
      return total;
    };

    const setStatus = (text) => {
      status.textContent = text;
    };

    // Declared before render() so the closure never reads a TDZ binding.
    let currentTerms = [];

    const render = () => {
      list.textContent = "";
      matches.forEach((doc, index) => {
        const item = document.createElement("li");
        item.setAttribute("role", "presentation");

        const link = document.createElement("a");
        link.className = "search-result";
        link.href = doc.url;
        link.id = `site-search-hit-${index}`;
        link.setAttribute("role", "option");

        link.append(
          marked(doc.title, currentTerms, "strong"),
          marked(snippetFor(doc, currentTerms), currentTerms, "small")
        );
        item.appendChild(link);
        list.appendChild(item);
      });
    };

    // Build an element of `tag`, wrapping every occurrence of every term in
    // <mark>. Terms are matched against the ORIGINAL string via lowercasing,
    // and spans are merged so overlapping terms cannot produce nested marks.
    const marked = (source, terms, tag) => {
      const el = document.createElement(tag);
      const lower = source.toLowerCase();
      const spans = [];
      for (const term of terms) {
        let at = lower.indexOf(term);
        while (at >= 0) {
          spans.push([at, at + term.length]);
          at = lower.indexOf(term, at + term.length);
        }
      }
      if (!spans.length) {
        el.textContent = source;
        return el;
      }
      spans.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
      const merged = [];
      for (const span of spans) {
        const last = merged[merged.length - 1];
        if (last && span[0] <= last[1]) last[1] = Math.max(last[1], span[1]);
        else merged.push([span[0], span[1]]);
      }
      let cursor = 0;
      for (const [start, end] of merged) {
        if (start > cursor) el.appendChild(document.createTextNode(source.slice(cursor, start)));
        const mark = document.createElement("mark");
        mark.textContent = source.slice(start, end);
        el.appendChild(mark);
        cursor = end;
      }
      if (cursor < source.length) el.appendChild(document.createTextNode(source.slice(cursor)));
      return el;
    };

    // Centre the snippet on the first body match so the highlight is visible
    // instead of sitting in an off-screen tail of a truncated document.
    const snippetFor = (doc, terms) => {
      const length = zh ? 90 : 110;
      if (doc.body.length <= length) return doc.body;
      const lower = doc.body.toLowerCase();
      let at = -1;
      for (const term of terms) {
        const found = lower.indexOf(term);
        if (found >= 0 && (at < 0 || found < at)) at = found;
      }
      if (at < 0) return doc.body.slice(0, length);
      let start = Math.max(0, at - Math.floor(length / 3));
      if (start > 0) {
        // avoid slicing mid-word for latin text
        const space = doc.body.indexOf(" ", start);
        if (space > 0 && space < start + 12) start = space + 1;
      }
      return (start > 0 ? "…" : "") + doc.body.slice(start, start + length);
    };

    const close = () => {
      list.hidden = true;
      input.setAttribute("aria-expanded", "false");
      input.removeAttribute("aria-activedescendant");
      matches = [];
      currentTerms = [];
      list.textContent = "";
    };

    const run = () => {
      const query = input.value.trim().toLowerCase();
      clear.hidden = input.value.length === 0;

      if (!query) {
        close();
        setStatus("");
        return;
      }

      // Split on whitespace so multi-word queries are ANDed. Keep CJK runs
      // whole — there are no spaces to split on inside them.
      currentTerms = query.split(/\s+/).filter(Boolean);
      if (!currentTerms.length) {
        close();
        setStatus("");
        return;
      }

      matches = corpus
        .map((doc) => ({ doc, s: score(doc, currentTerms) }))
        .filter((hit) => hit.s > 0)
        .sort((a, b) => b.s - a.s)
        .map((hit) => hit.doc);

      const total = matches.length;
      matches = matches.slice(0, MAX_RESULTS);

      if (!total) {
        close();
        setStatus(zh ? `没有找到「${input.value.trim()}」` : `No results for "${input.value.trim()}"`);
        return;
      }

      render();
      list.hidden = false;
      input.setAttribute("aria-expanded", "true");
      const shown = Math.min(total, MAX_RESULTS);
      setStatus(
        total > shown
          ? zh ? `找到 ${total} 条结果，显示前 ${shown} 条` : `${total} results, showing ${shown}`
          : zh ? `找到 ${total} 条结果` : total === 1 ? "1 result" : `${total} results`
      );
    };

    let activeIndex = -1;

    const setActive = (next) => {
      const options = list.querySelectorAll(".search-result");
      if (!options.length) return;
      activeIndex = (next + options.length) % options.length;
      options.forEach((option, i) => {
        option.setAttribute("aria-selected", String(i === activeIndex));
      });
      const active = options[activeIndex];
      input.setAttribute("aria-activedescendant", active.id);
      active.scrollIntoView({ block: "nearest" });
    };

    input.addEventListener("input", run);
    input.addEventListener("focus", () => {
      if (input.value.trim()) run();
    });

    input.addEventListener("keydown", (event) => {
      if (event.key === "ArrowDown") {
        if (list.hidden) {
          run();
          if (!list.hidden) setActive(0);
        } else {
          setActive(activeIndex + 1);
        }
        event.preventDefault();
        return;
      }
      if (event.key === "ArrowUp") {
        if (!list.hidden) setActive(activeIndex - 1);
        event.preventDefault();
        return;
      }
      if (event.key === "Enter" && !list.hidden && activeIndex >= 0) {
        const active = list.querySelectorAll(".search-result")[activeIndex];
        if (active) {
          event.preventDefault();
          location.href = active.href;
        }
        return;
      }
      if (event.key === "Escape") {
        if (list.hidden) {
          input.value = "";
          run();
          input.blur();
        } else {
          close();
          setStatus("");
        }
        event.preventDefault();
      }
    });

    clear.addEventListener("click", () => {
      input.value = "";
      close();
      setStatus("");
      clear.hidden = true;
      input.focus();
    });

    document.addEventListener("click", (event) => {
      if (!form.contains(event.target)) close();
    });

    form.addEventListener("submit", (event) => event.preventDefault());

    // "/" focuses search, the convention readers already expect.
    document.addEventListener("keydown", (event) => {
      if (event.key !== "/" || event.metaKey || event.ctrlKey || event.altKey) return;
      const tag = document.activeElement?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || document.activeElement?.isContentEditable) return;
      if (event.target.closest?.(".content") || tag === "A") return;
      input.focus();
      input.select();
      event.preventDefault();
    });
  };

  initSearch();
})();
