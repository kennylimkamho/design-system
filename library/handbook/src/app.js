(() => {
  "use strict";
  const $ = (id) => document.getElementById(id);
  const $$ = (selector, scope = document) => [
    ...scope.querySelectorAll(selector),
  ];
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  const reduce = () => {
    document.documentElement.dataset.motion =
      media.matches || $("reduce-motion").checked ? "reduced" : "full";
  };
  media.addEventListener?.("change", reduce);
  $("reduce-motion").addEventListener("change", reduce);
  reduce();
  const industryGoal = $('industry-goal');
  if (industryGoal) industryGoal.addEventListener('change', () => {
    $('industry-recommendation').textContent = DATA.industryRecommendations[industryGoal.value] || DATA.industryRecommendations.unknown;
  });
  function setReadingMode(mode) {
    const full = mode === "full";
    document.documentElement.dataset.reading = full ? "full" : "brief";
    $$(".spec-details, .doc-context, .sources > details, .runtime-code").forEach((el) => { el.open = full; });
    $$("[data-reading-mode]").forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.readingMode === (full ? "full" : "brief"))));
    try { localStorage.setItem("cd-handbook-reading", full ? "full" : "brief"); } catch { /* Storage is optional for standalone previews. */ }
  }
  let savedMode = "brief";
  try { savedMode = localStorage.getItem("cd-handbook-reading") || "brief"; } catch { /* Keep the usable default. */ }
  setReadingMode(savedMode);
  $$("[data-reading-mode]").forEach((button) => button.addEventListener("click", () => setReadingMode(button.dataset.readingMode)));
  let activePage = "",
    dialogInvoker = null;
  let activeSection = DATA.primarySections[0];
  const lastChapter = new Map();
  const primaryLinks = $$('[data-primary-section]');
  primaryLinks.forEach((link, index) => {
    link.addEventListener('click', event => {
      if(event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      const section = DATA.primarySections.find(s => s.id === link.dataset.primarySection);
      $('doc-search').value = '';
      const target = lastChapter.get(section.id) || section.firstPage;
      if(location.hash === `#${target}`) navigate(); else location.hash = target;
    });
    link.addEventListener('keydown', event => {
      const next = event.key === 'ArrowRight' ? (index + 1) % primaryLinks.length
        : event.key === 'ArrowLeft' ? (index - 1 + primaryLinks.length) % primaryLinks.length
        : event.key === 'Home' ? 0 : event.key === 'End' ? primaryLinks.length - 1 : null;
      if(next === null) return;
      event.preventDefault(); primaryLinks[next].focus();
    });
  });
  function navigate(initial = false) {
    const raw = location.hash.slice(1);
    const [requested] = raw.split("--");
    const pageId = requested.replace(/^(title-|page-)/, "");
    const entry = DATA.pages.find((p) => p.id === pageId) || DATA.pages[0];
    const changed = activePage !== entry.id;
    activePage = entry.id;
    activeSection = DATA.primarySections.find(section => section.groups.includes(entry.group));
    lastChapter.set(activeSection.id, entry.id);
    primaryLinks.forEach(link => {
      if(link.dataset.primarySection === activeSection.id) link.setAttribute('aria-current','page');
      else link.removeAttribute('aria-current');
      const section = DATA.primarySections.find(s => s.id === link.dataset.primarySection);
      link.href = `#${lastChapter.get(section.id) || section.firstPage}`;
    });
    const primaryNav = document.querySelector('.primary-sections');
    if (primaryNav.scrollWidth > primaryNav.clientWidth)
      primaryNav.querySelector('[aria-current]').scrollIntoView({block:'nearest',inline:'nearest',behavior:'auto'});
    search();
    document.querySelector(".skip").href = `#title-${entry.id}`;
    $$(".doc").forEach((el) => {
      el.hidden = el.id !== `page-${entry.id}`;
    });
    $$("[data-page-link]").forEach((a) => {
      if (a.dataset.pageLink === entry.id)
        { a.setAttribute("aria-current", "page"); const group = a.closest("details.nav-group"); if(group) group.open = true; }
      else a.removeAttribute("aria-current");
    });
    $("page-toc-links").replaceChildren();
    $$("h2[id]", $(`page-${entry.id}`)).forEach((h) => {
      const a = document.createElement("a");
      a.href = `#${h.id}`;
      a.textContent = h.textContent;
      $("page-toc-links").append(a);
    });
    document.title = `${entry.title} · ${DATA.systemName}`;
    if ($("nav-dialog").open) $("nav-dialog").close();
    const target = raw.includes("--") || raw.startsWith("title-") ? $(raw) : $(`title-${entry.id}`);
    if (target) {
      // Source headings live inside disclosures; deep links must reveal them.
      let disclosure = target.closest("details");
      while (disclosure) { disclosure.open = true; disclosure = disclosure.parentElement.closest("details"); }
      if (!initial) target.focus({ preventScroll: true });
      if (!initial || raw.includes("--") || raw.startsWith("title-"))
        target.scrollIntoView({ block: "start", behavior: "auto" });
    }
    if (changed && !initial) {
      const article = $(`page-${entry.id}`);
      article.classList.remove("page-appear");
      void article.offsetWidth;
      article.classList.add("page-appear");
    }
  }
  window.addEventListener("hashchange", () => navigate());
  navigate(true);
  function search() {
    const q = $("doc-search").value.trim().toLocaleLowerCase();
    let count = 0;
    $$("#desktop-nav [data-page-link]").forEach((a) => {
      const entry = DATA.pages.find((p) => p.id === a.dataset.pageLink);
      a.hidden = q ? !entry.search.includes(q) : !activeSection.groups.includes(entry.group);
      if (!a.hidden) count++;
    });
    $$("#desktop-nav .nav-group").forEach(
      (g) => { g.hidden = !g.querySelector("a:not([hidden])"); if(q && !g.hidden) g.open = true; },
    );
    // Mobile directory follows the active top-level destination; search spans all.
    $$('#nav-dialog .nav-group').forEach(group => { group.hidden = !activeSection.groups.includes(group.dataset.navGroup); });
    $("search-status").textContent = q
      ? `${count} / ${DATA.pages.length} 篇符合「${$("doc-search").value}」`
      : `${activeSection.label} · ${count} 篇 · 全部 ${DATA.pages.length} 篇可搜尋`;
  }
  $("doc-search").addEventListener("input", search);
  search();
  const normalise = (text) => text.normalize("NFKC").toLocaleLowerCase();
  function exampleText(element) {
    if (!element) return "";
    const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
    const parts = [];
    while (walker.nextNode()) parts.push(walker.currentNode.textContent);
    return parts.join(" ");
  }
  const searchRecords = DATA.searchIndex.map((entry) => {
    const target = $(entry.anchor) || $(`page-${entry.anchor}`);
    const specimen = entry.anchor.includes("--") ? target?.closest(".section-block")?.querySelector(".section-visual-frame") : target?.querySelector(".chapter-example");
    const text = `${entry.text} ${exampleText(specimen)}`.replace(/\s+/g, " ");
    return { ...entry, text,
      titleKey: normalise(`${entry.title} ${entry.chapter}`),
      textKey: normalise(`${entry.title} ${entry.chapter} ${entry.group} ${text}`),
    };
  });
  let searchInvoker = null, searchSelected = false;
  function globalSearch() {
    const query = normalise($("global-search").value.trim());
    const terms = query.split(/\s+/).filter(Boolean);
    const results = terms.length ? searchRecords.filter((record) => terms.every((term) => record.textKey.includes(term)))
      .sort((a, b) => (b.titleKey.includes(query) ? 2 : terms.filter((t) => b.titleKey.includes(t)).length / terms.length)
        - (a.titleKey.includes(query) ? 2 : terms.filter((t) => a.titleKey.includes(t)).length / terms.length))
      : searchRecords.filter((record) => !record.anchor.includes("--"));
    $("global-search-status").textContent = terms.length ? (results.length ? `${results.length} 個結果` : "搵唔到結果，試下另一個名稱或關鍵字。") : `全部 ${DATA.pages.length} 章 · 可搜尋內文、表格及來源`;
    const fragment = document.createDocumentFragment();
    for (const record of results) {
      const link = document.createElement("a");
      link.href = `#${record.anchor}`;
      link.dataset.searchResult = record.anchor;
      const context = document.createElement("small");
      context.textContent = record.anchor.includes("--") ? record.chapter : record.group;
      const title = document.createElement("strong"); title.textContent = record.title;
      const snippet = document.createElement("span");
      const match = terms.length ? normalise(record.text).indexOf(terms[0]) : 0;
      const offset = Math.max(0, match - 25);
      snippet.textContent = `${offset ? "…" : ""}${record.text.slice(offset, offset + 125)}${record.text.length > offset + 125 ? "…" : ""}`;
      link.append(context, title, snippet);
      link.addEventListener("click", (event) => {
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        searchSelected = true;
        $("search-dialog").close();
        // A matching paragraph may be inside the detailed rules.
        const target = $(record.anchor);
        const rules = target?.closest(".section-block")?.querySelector(".spec-details");
        if (rules && terms.some((term) => normalise(rules.textContent).includes(term))) rules.open = true;
        location.hash = record.anchor;
        navigate();
      });
      fragment.append(link);
    }
    $("global-search-results").replaceChildren(fragment);
  }
  function openSearch() {
    if ($("search-dialog").open) return;
    searchInvoker = document.activeElement;
    searchSelected = false;
    globalSearch();
    $("search-dialog").showModal();
    $("global-search").focus();
  }
  $("open-search").addEventListener("click", openSearch);
  $("close-search").addEventListener("click", () => $("search-dialog").close());
  $("search-dialog").addEventListener("close", () => {
    if (!searchSelected) searchInvoker?.focus();
  });
  $("global-search").addEventListener("input", globalSearch);
  $("search-dialog").addEventListener("keydown", (e) => {
    const results = $$("[data-search-result]", $("search-dialog"));
    const position = results.indexOf(document.activeElement);
    if (e.key === "ArrowDown") {
      e.preventDefault(); results[Math.min(position + 1, results.length - 1)]?.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault(); if (position <= 0) $("global-search").focus(); else results[position - 1].focus();
    } else if (e.key === "Enter" && document.activeElement === $("global-search")) {
      e.preventDefault(); results[0]?.click();
    }
  });
  document.addEventListener("keydown", (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
      e.preventDefault(); openSearch(); return;
    }
    if (
      e.key === "/" &&
      !/INPUT|TEXTAREA|SELECT/.test(e.target.tagName) &&
      !e.target.isContentEditable
    ) {
      e.preventDefault();
      openSearch();
    }
    if (e.key === "Escape" && document.activeElement === $("doc-search")) {
      $("doc-search").value = "";
      search();
    }
  });
  $("open-nav").addEventListener("click", () => $("nav-dialog").showModal());
  $("close-nav").addEventListener("click", () => $("nav-dialog").close());
  let navSelection = false;
  $$("#nav-dialog [data-page-link]").forEach((a) =>
    a.addEventListener("click", () => {
      navSelection = true;
      if ($("nav-dialog").open) $("nav-dialog").close();
      if (location.hash === a.getAttribute("href"))
        $(`title-${a.dataset.pageLink}`).focus();
    }),
  );
  $("nav-dialog").addEventListener("close", () => {
    if (!navSelection) $("open-nav").focus();
    navSelection = false;
  });
  let toastInvoker = null;
  function toast(message) {
    toastInvoker = document.activeElement;
    $("toast-text").textContent = message;
    $("toast").hidden = false;
    $("announcer").textContent = "";
    setTimeout(() => ($("announcer").textContent = message), 10);
  }
  $("close-toast").addEventListener("click", () => {
    $("toast").hidden = true;
    const page = toastInvoker?.closest(".doc");
    const target =
      page && !page.hidden ? toastInvoker : $(`title-${activePage}`);
    target.focus({ preventScroll: true });
  });
  $$("[data-case-switch]").forEach((switcher) => {
    const panels = switcher.parentElement.querySelectorAll("[data-case-panel]");
    switcher.querySelectorAll("[data-case-view]").forEach((button) => {
      button.addEventListener("click", () => {
        const view = button.dataset.caseView;
        switcher.querySelectorAll("[data-case-view]").forEach((item) =>
          item.setAttribute("aria-pressed", String(item === button)),
        );
        panels.forEach((panel) => {
          panel.hidden = panel.dataset.casePanel !== view;
        });
      });
    });
  });
  $$("[data-broadcast-demo]").forEach((demo) => {
    const buttons = [...demo.querySelectorAll("[data-broadcast-stage]")];
    const panels = [...demo.querySelectorAll("[data-broadcast-panel]")];
    buttons.forEach((button) => button.addEventListener("click", () => {
      const stage = button.dataset.broadcastStage;
      buttons.forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
      panels.forEach((panel) => { panel.hidden = panel.dataset.broadcastPanel !== stage; });
    }));
  });
  $$("[data-loading-demo]").forEach((demo) => {
    const view = demo.querySelector("[data-loading-view]");
    const result = demo.querySelector("[data-loading-result]");
    let inView = true;
    let previewHover = false;
    let previewFocus = false;
    let manualPlay = false;
    let state = "loading";
    const syncMotion = () => {
      demo.dataset.paused = String(!inView || document.hidden || state !== "loading" || !(previewHover || previewFocus || manualPlay));
    };
    demo.addEventListener('pointerenter', event => {
      if (event.pointerType === 'mouse') { previewHover = true; syncMotion(); }
    });
    demo.addEventListener('pointerleave', () => { previewHover = false; manualPlay = false; syncMotion(); });
    const surface = demo.querySelector('.v14-loading-surface');
    surface.tabIndex = 0;
    surface.setAttribute('aria-label', 'Skeleton 動效預覽；聚焦播放，離開停止');
    surface.addEventListener('focusin', () => { previewFocus = true; syncMotion(); });
    surface.addEventListener('focusout', event => {
      if (!surface.contains(event.relatedTarget)) { previewFocus = false; syncMotion(); }
    });
    window.addEventListener('hashchange', () => { previewHover = false; previewFocus = false; manualPlay = false; syncMotion(); });
    if (typeof IntersectionObserver !== "undefined") {
      const observer = new IntersectionObserver(([entry]) => {
        inView = entry.isIntersecting;
        syncMotion();
      }, { threshold: 0.01 });
      observer.observe(demo);
    }
    document.addEventListener("visibilitychange", syncMotion);
    demo.querySelectorAll("[data-loading-state]").forEach((button) => {
      button.addEventListener("click", () => {
        state = button.dataset.loadingState;
        manualPlay = state === 'loading';
        demo.querySelectorAll("[data-loading-state]").forEach((item) =>
          item.setAttribute("aria-pressed", String(item === button)),
        );
        view.hidden = state !== "loading";
        view.setAttribute("aria-busy", String(state === "loading"));
        result.hidden = state === "loading";
        result.textContent = state === "ready"
          ? "Ready：正式圖表及表格應由產品提供真實資料。"
          : state === "error"
            ? "Error：正式產品在此提供可操作的重試。"
            : state === "cancelled"
              ? "Cancelled：載入已停止，骨架不再顯示。"
              : "";
        syncMotion();
      });
    });
    demo.querySelector("[data-loading-width]").addEventListener("click", (event) => {
      const next = demo.dataset.narrow !== "true";
      demo.dataset.narrow = String(next);
      event.currentTarget.setAttribute("aria-pressed", String(next));
    });
    demo.querySelector("[data-loading-reduce]").addEventListener("click", (event) => {
      const next = demo.dataset.reduce !== "true";
      demo.dataset.reduce = String(next);
      event.currentTarget.setAttribute("aria-pressed", String(next));
    });
    syncMotion();
  });
  $$("[data-demo-feedback]").forEach((b) =>
    b.addEventListener("click", () => toast(b.dataset.demoFeedback)),
  );
  $$(".section-visual-frame button:not([data-demo-feedback]):not([data-section-live])").forEach((b) =>
    b.addEventListener("click", (event) => {
      event.preventDefault();
      toast("這是本地 UI 規格示意，沒有執行產品操作或修改資料。");
    }),
  );
  $$(".section-visual-frame button[data-section-live][popovertarget]").forEach((b) =>
    b.addEventListener("click", () => {
      const target = $(b.getAttribute("popovertarget"));
      if (typeof target?.showPopover !== "function")
        toast("此瀏覽器未提供原生 Popover 示範；正式 tooltip 仍需 focus、Escape 與 fallback 實作。");
    }),
  );
  $$("[data-open-dialog]").forEach((b) =>
    b.addEventListener("click", () => {
      dialogInvoker = b;
      $("confirm-dialog").showModal();
      $("cancel-confirm").focus();
    }),
  );
  $("cancel-confirm").addEventListener("click", () =>
    $("confirm-dialog").close(),
  );
  $("confirm-example").addEventListener("click", () => {
    $("confirm-dialog").close();
    toast("已完成確認示例；沒有刪除任何資料。");
  });
  $("confirm-dialog").addEventListener("close", () => dialogInvoker?.focus());
  $$("[data-print]").forEach((b) =>
    b.addEventListener("click", () => window.print()),
  );
  let printDisclosures = [];
  window.addEventListener("beforeprint", () => {
    printDisclosures = $$("details", $(`page-${activePage}`)).filter((detail) => !detail.open);
    printDisclosures.forEach((detail) => { detail.open = true; });
  });
  window.addEventListener("afterprint", () => {
    printDisclosures.forEach((detail) => { detail.open = false; });
    printDisclosures = [];
  });
  const sampleText = {
    mix: "清楚連結每次對話 · Hello, ChatDaddy.",
    en: "Every conversation, a little closer.",
    zh: "讓每一次對話，拉近距離。",
  };
  $("type-language").addEventListener("change", () =>
    $$("[data-type-text]").forEach(
      (e) => (e.textContent = sampleText[$("type-language").value]),
    ),
  );
  $("responsive-mode").addEventListener(
    "change",
    () => ($("responsive-frame").className = $("responsive-mode").value),
  );
  const tabs = $$("[role=tab]");
  function activateTab(tab) {
    tabs.forEach((t) => {
      const selected = t === tab;
      t.setAttribute("aria-selected", String(selected));
      t.tabIndex = selected ? 0 : -1;
      $(t.getAttribute("aria-controls")).hidden = !selected;
    });
  }
  tabs.forEach((t, i) => {
    t.addEventListener("click", () => activateTab(t));
    t.addEventListener("keydown", (e) => {
      let n = i;
      if (e.key === "ArrowRight") n = (i + 1) % tabs.length;
      else if (e.key === "ArrowLeft") n = (i + tabs.length - 1) % tabs.length;
      else if (e.key === "Home") n = 0;
      else if (e.key === "End") n = tabs.length - 1;
      else return;
      e.preventDefault();
      activateTab(tabs[n]);
      tabs[n].focus();
    });
  });
  function simulate(button, status) {
    button.addEventListener("click", () => {
      const text = button.textContent;
      button.disabled = true;
      button.setAttribute("aria-busy", "true");
      button.replaceChildren();
      const spinner = document.createElement("span");
      spinner.className = "busy-spinner";
      spinner.setAttribute("aria-hidden", "true");
      button.append(spinner, document.createTextNode("模擬儲存中…"));
      $(status).textContent = "純本地示例，正在模擬等待。";
      setTimeout(() => {
        button.disabled = false;
        button.setAttribute("aria-busy", "false");
        button.textContent = text;
        $(status).textContent = "示例完成 ✓ 未修改App資料。";
      }, 600);
    });
  }
  simulate($("pending-demo"), "pending-status");
  simulate($("motion-save"), "motion-result");
  $("field-demo").addEventListener("submit", (e) => {
    e.preventDefault();
    const valid = !!$("demo-name").value.trim();
    $("demo-name").setAttribute("aria-invalid", String(!valid));
    $("name-error").hidden = valid;
    $("form-result").textContent = valid
      ? "本地必填驗證通過；沒有提交或儲存。"
      : "請修正姓名欄位。";
    if (!valid) $("demo-name").focus();
  });
  $("demo-name").addEventListener("input", () => {
    if ($("demo-name").value.trim()) {
      $("name-error").hidden = true;
      $("demo-name").removeAttribute("aria-invalid");
    }
  });
  const tagInputs = $$("#tag-options input");
  function renderTags() {
    const target = $("selected-tags");
    target.replaceChildren();
    tagInputs
      .filter((i) => i.checked)
      .forEach((i) => {
        const b = document.createElement("button");
        b.type = "button";
        b.className = "tag-remove";
        b.textContent = `${i.value} ×`;
        b.setAttribute("aria-label", `移除 tag ${i.value}`);
        b.addEventListener("click", () => {
          i.checked = false;
          renderTags();
          $("tag-query").focus();
        });
        target.append(b);
      });
  }
  tagInputs.forEach((i) => i.addEventListener("change", renderTags));
  $("tag-query").addEventListener("input", () => {
    const q = $("tag-query").value.toLowerCase();
    $$("[data-tag-option]").forEach(
      (el) => (el.hidden = !el.dataset.tagOption.toLowerCase().includes(q)),
    );
    $("tags-no-result").hidden = !!document.querySelector(
      "[data-tag-option]:not([hidden])",
    );
  });
  const rows = [
    { id: 1, name: "Alex Chan", company: "North Studio", state: "Active" },
    { id: 2, name: "Bella Lee", company: "Green House", state: "Active" },
    { id: 3, name: "Chris Tan", company: "Sample Retail", state: "Draft" },
    { id: 4, name: "陳大文", company: "海港示例有限公司", state: "Active" },
    {
      id: 5,
      name: "李小美",
      company: "Long name example company",
      state: "Draft",
    },
    { id: 6, name: "Yvonne Ng", company: "Example team", state: "Active" },
  ];
  let page = 1,
    ascending = true;
  const selected = new Set();
  function dataView() {
    const q = $("table-search").value.trim().toLowerCase();
    return rows
      .filter((r) => `${r.name} ${r.company}`.toLowerCase().includes(q))
      .sort(
        (a, b) => (ascending ? 1 : -1) * a.name.localeCompare(b.name, "en"),
      );
  }
  function renderTable() {
    const mode = $("table-state").value,
      loaded = mode === "loaded",
      filtered = dataView(),
      size = Number($("page-size").value),
      totalPages = Math.max(1, Math.ceil(filtered.length / size));
    page = Math.min(page, totalPages);
    const visible = filtered.slice((page - 1) * size, page * size);
    $("data-rows").replaceChildren();
    for (const r of visible) {
      const tr = document.createElement("tr");
      tr.className = selected.has(r.id) ? "selected" : "";
      const td = document.createElement("td");
      const cb = document.createElement("input");
      cb.type = "checkbox";
      cb.checked = selected.has(r.id);
      cb.setAttribute("aria-label", `選取 ${r.name}`);
      cb.dataset.rowId = r.id;
      cb.addEventListener("change", () => {
        cb.checked ? selected.add(r.id) : selected.delete(r.id);
        renderTable();
        const restored = document.querySelector(`[data-row-id="${r.id}"]`);
        restored?.focus({ preventScroll: true });
      });
      td.append(cb);
      tr.append(td);
      [r.name, r.state, r.company, "2026-09-24 16:51"].forEach((v, i) => {
        const cell = document.createElement("td");
        if (i === 1) {
          const badge = document.createElement("span");
          badge.className = `badge ${r.state === "Active" ? "success" : "neutral"}`;
          badge.textContent = v;
          cell.append(badge);
        } else cell.textContent = v;
        tr.append(cell);
      });
      $("data-rows").append(tr);
    }
    const n = visible.filter((r) => selected.has(r.id)).length;
    $("select-page").checked = !!visible.length && n === visible.length;
    $("select-page").indeterminate = n > 0 && n < visible.length;
    $("select-page").disabled = !visible.length || !loaded;
    $("sort-column").setAttribute(
      "aria-sort",
      ascending ? "ascending" : "descending",
    );
    $("demo-table").style.setProperty(
      "--row-height",
      `${$("table-density").value}px`,
    );
    $("selection-count").textContent =
      `已選取 ${selected.size} / 6 筆示例資料；header checkbox只選目前頁。`;
    $("page-count").textContent =
      `${page} / ${totalPages} 頁 · ${filtered.length} 筆符合條件`;
    $("page-prev").disabled = page === 1 || !loaded;
    $("page-next").disabled = page === totalPages || !loaded;
    $("demo-table").closest(".table-scroll").hidden =
      !loaded || !filtered.length;
    $("table-state-view").hidden = loaded && !!filtered.length;
    $("data-controls").hidden = !loaded;
    $("selection-count").hidden = !loaded;
    if (!loaded || !filtered.length) {
      const view = $("table-state-view");
      view.replaceChildren();
      const h = document.createElement("h3"),
        p = document.createElement("p");
      const messages = {
        loading: ["正在載入示例", "保留預期布局，不顯示假的0筆。"],
        empty: ["還沒有聯絡人", "首次使用：建立或匯入你的第一位聯絡人。"],
        error: ["未能載入", "這是可重試error示例，條件仍保留。"],
        permission: ["沒有查看權限", "請聯絡管理員；不能把無權限當作empty。"],
        loaded: ["找不到符合條件的資料", "試試其他姓名或清除搜尋。"],
      };
      [h.textContent, p.textContent] = messages[mode];
      view.append(h, p);
      if (mode === "loading") {
        for (let i = 0; i < 3; i++) {
          const sk = document.createElement("div");
          sk.className = "skeleton-row";
          sk.setAttribute("aria-hidden", "true");
          view.append(sk);
        }
      } else {
        const b = document.createElement("button");
        b.className = "btn secondary";
        b.type = "button";
        b.textContent =
          mode === "loaded"
            ? "清除搜尋"
            : mode === "error"
              ? "重試示例"
              : "回到有資料示例";
        b.addEventListener("click", () => {
          if (mode === "loaded") $("table-search").value = "";
          $("table-state").value = "loaded";
          renderTable();
          $("table-state").focus();
        });
        view.append(b);
      }
    }
  }
  $("table-search").addEventListener("input", () => {
    page = 1;
    renderTable();
  });
  ["table-state", "table-density", "page-size"].forEach((id) =>
    $(id).addEventListener("change", () => {
      page = 1;
      renderTable();
    }),
  );
  $("sort-rows").addEventListener("click", () => {
    ascending = !ascending;
    renderTable();
  });
  $("page-prev").addEventListener("click", () => {
    page--;
    renderTable();
  });
  $("page-next").addEventListener("click", () => {
    page++;
    renderTable();
  });
  $("select-page").addEventListener("change", () => {
    const size = Number($("page-size").value);
    dataView()
      .slice((page - 1) * size, page * size)
      .forEach((r) =>
        $("select-page").checked ? selected.add(r.id) : selected.delete(r.id),
      );
    renderTable();
  });
  renderTable();
  $("filter-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const q = $("filter-query").value.trim(),
      state = $("filter-status").value;
    const n = rows.filter(
      (r) =>
        (!q || r.name.toLowerCase().includes(q.toLowerCase())) &&
        (!state || r.state === state),
    ).length;
    $("filter-summary").textContent =
      `${n} / 6 筆虛構示例符合条件。Query：${q || "無"}；Status：${state || "All"}。`;
  });
  $("clear-filters").addEventListener("click", () => {
    $("filter-query").value = "";
    $("filter-status").value = "";
    $("filter-summary").textContent = "顯示所有6筆示例資料；未套用條件。";
  });
  $("file-example").addEventListener("change", () => {
    $("file-result").textContent = $("file-example").files[0]
      ? `已選擇：${$("file-example").files[0].name}；未讀取或上傳。`
      : "未選擇檔案。";
  });
  $$("[data-handoff-check]").forEach((cb) =>
    cb.addEventListener(
      "change",
      () =>
        ($("handoff-progress").textContent =
          `${$$("[data-handoff-check]:checked").length} / 6 項已自查`),
    ),
  );
  $("reset-defaults").addEventListener("click", () => {
    $("default-density").selectedIndex = 0;
    $("default-zone").selectedIndex = 0;
    renderExampleZone();
    toast("已回復低風險示例預設。");
  });
  function renderExampleZone(announce = true) {
    const utc = $("default-zone").value === "UTC";
    $$(".pv-defaults .pv-zone-hkt").forEach((el) => (el.hidden = utc));
    $$(".pv-defaults .pv-zone-utc").forEach((el) => (el.hidden = !utc));
    if (announce)
      $("default-zone-announcer").textContent = utc
        ? "示例時間已切換為 UTC。"
        : "示例時間已切換為 HKT。";
  }
  $("default-zone").addEventListener("change", renderExampleZone);
  renderExampleZone(false);
  // Import progress is a fixed blocked 2/4 snapshot, never self-reported completion.
  let savedView = null;
  const viewCard = $("view-save-status").closest(".pv-scope-card");
  function currentExampleView() {
    return {
      name: $("view-name").value.trim(),
      scope: $("view-scope").value,
      filters: ["Unread", "Unassigned"],
    };
  }
  function renderExampleView() {
    const current = currentExampleView();
    const matchesSaved = savedView && JSON.stringify(current) === JSON.stringify(savedView);
    const state = !savedView ? "unsaved" : matchesSaved ? "saved" : "dirty";
    viewCard.dataset.viewSaveState = state;
    $("page-ownership").querySelector(".pv-scope-personal").hidden = current.scope === "team";
    $("page-ownership").querySelector(".pv-scope-team").hidden = current.scope !== "team";
    $("view-preview-title").textContent = current.name || "未命名示例 view";
    $("view-save-sample").disabled = !current.name || !!matchesSaved;
    $("view-restore-sample").disabled = !savedView || !!matchesSaved;
    $("view-save-status").textContent =
      state === "saved" ? "已儲存 · 本地示例" :
        state === "dirty" ? "有未儲存變更" : "草稿目的地 · 尚未儲存";
    $("view-save-detail").textContent =
      state === "saved" ? "只存於此頁記憶體；尚未分享或發佈。" :
        state === "dirty" ? "可重新儲存，或復原至上次本地快照。" :
          "名稱與目的地只在此頁預覽；沒有分享或儲存。";
    $("view-preview-state").textContent =
      state === "saved" ? "LOCAL SAVED VIEW · IN MEMORY" :
        state === "dirty" ? "UNSAVED CHANGES · LOCAL PREVIEW" :
          "LOCAL DRAFT PREVIEW · NOT SAVED";
    $("view-save-note").textContent =
      "僅本地示例；重新載入會清除，沒有寫入帳戶或分享給 team。";
  }
  $("view-name").addEventListener("input", renderExampleView);
  $("view-scope").addEventListener("change", renderExampleView);
  $("view-save-sample").addEventListener("click", () => {
    savedView = currentExampleView();
    renderExampleView();
    toast(`已儲存本地示例至${savedView.scope === "team" ? " Team view" : "個人 view"}；沒有寫入帳戶。`);
  });
  $("view-restore-sample").addEventListener("click", () => {
    if (!savedView) return;
    $("view-name").value = savedView.name;
    $("view-scope").value = savedView.scope;
    renderExampleView();
    toast("已復原至上次本地快照；沒有修改帳戶資料。");
  });
  $("reset-view-name").addEventListener("click", () => {
    $("view-name").value = "我的客服 view";
    renderExampleView();
  });
  renderExampleView();
  $("pin-peek").addEventListener("click", () => {
    const pinned = $("peek-panel").classList.toggle("pinned");
    $("pin-peek").setAttribute("aria-pressed", String(pinned));
    $("pin-peek").setAttribute(
      "aria-label",
      pinned ? "解除固定示例面板" : "固定展開示例面板",
    );
  });
  $("peek-panel").addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      $("peek-panel").classList.remove("pinned");
      $("peek-panel").classList.add("dismissed");
      $("pin-peek").setAttribute("aria-pressed", "false");
      $("pin-peek").setAttribute("aria-label", "固定展開示例面板");
      $("title-hover").focus();
    }
  });
  ["pointerleave", "pointerenter", "focusin"].forEach((event) =>
    $("peek-panel").addEventListener(event, () =>
      $("peek-panel").classList.remove("dismissed"),
    ),
  );
  function filterIcons() {
    const q = $("icon-query").value.toLowerCase();
    const all = $$("[data-icon-name]");
    all.forEach((e) => (e.hidden = !e.dataset.iconName.includes(q)));
    $("icon-count").textContent =
      `${all.filter((e) => !e.hidden).length} / ${all.length} icons`;
  }
  $("icon-query").addEventListener("input", filterIcons);
  filterIcons();
  const getIcon = (key) => {
    const [kind, name] = key.split(":");
    return (kind === "module" ? DATA.modules : DATA.utility)[name];
  };
  $$("[data-copy-icon]").forEach((b) =>
    b.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(getIcon(b.dataset.copyIcon));
        toast("SVG 已複製。");
      } catch {
        dialogInvoker = b;
        $("copy-source").value = getIcon(b.dataset.copyIcon);
        $("copy-dialog").showModal();
        $("copy-source").focus();
        $("copy-source").select();
      }
    }),
  );
  $("close-copy").addEventListener("click", () => $("copy-dialog").close());
  $("copy-dialog").addEventListener("close", () => dialogInvoker?.focus());
  $$("[data-download-icon]").forEach((b) =>
    b.addEventListener("click", () => {
      const key = b.dataset.downloadIcon;
      const url = URL.createObjectURL(
        new Blob([getIcon(key)], { type: "image/svg+xml" }),
      );
      const a = document.createElement("a");
      a.href = url;
      a.download = `product-system-${key.replace(":", "-")}.svg`;
      a.click();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    }),
  );
  // Goal-first integration card specimen. This mutates documentation state only.
  const integrationStates = {
    disconnected: { label: "未連結", action: "連結", busy: false, help: false },
    connecting: { label: "連接中", action: "連接中…", busy: true, help: true },
    connected: { label: "已連結", action: "管理", busy: false, help: false },
    error: { label: "連結失敗", action: "重試", busy: false, help: true },
  };
  let integrationTimer;
  function setIntegrationState(state, announce = true) {
    const safeState = Object.hasOwn(integrationStates, state) ? state : "disconnected";
    const config = integrationStates[safeState];
    const card = $("integration-app-card");
    const primary = $("integration-primary");
    card.dataset.state = safeState;
    $("integration-status-label").textContent = config.label;
    primary.querySelector("span").textContent = config.action;
    primary.disabled = config.busy;
    primary.setAttribute("aria-busy", String(config.busy));
    $("integration-context-help").hidden = !config.help;
    if (safeState === "error") {
      $("integration-help-title").textContent = "連結未完成";
      $("integration-help-copy").textContent = "交代原因、保留重試，再提供相關步驟或支援。";
    } else {
      $("integration-help-title").textContent = "需要協助？";
      $("integration-help-copy").textContent = "連結開始後，先提供當下需要的步驟。";
    }
    if (announce) {
      $("integration-result").textContent = `示例狀態：${config.label}。只更新本地文件，沒有寫入 API。`;
    }
  }
  $("integration-demo-state").addEventListener("change", (e) => {
    clearTimeout(integrationTimer);
    setIntegrationState(e.target.value);
  });
  $("integration-force-secondary").addEventListener("change", (e) => {
    $("integration-app-card").classList.toggle("force-secondary", e.target.checked);
    $("integration-result").textContent = e.target.checked
      ? "次要設定已顯示，用來模擬 desktop hover / keyboard focus。"
      : "次要設定回復漸進披露；主要「連結」仍然常駐。";
  });
  $("integration-primary").addEventListener("click", () => {
    const state = $("integration-app-card").dataset.state;
    if (state === "connected") {
      $("integration-result").textContent = "管理入口示例；沒有開啟或修改真實整合。";
      return;
    }
    if (state === "connecting") return;
    clearTimeout(integrationTimer);
    $("integration-demo-state").value = "connecting";
    setIntegrationState("connecting");
    integrationTimer = setTimeout(() => {
      $("integration-demo-state").value = "connected";
      setIntegrationState("connected");
      $("integration-result").textContent = "示例連結完成。正式產品必須由 backend source of truth 確認。";
    }, 550);
  });
  $("integration-settings").addEventListener("click", () => {
    $("integration-result").textContent = "Settings 是次要入口；click 才執行，hover 只負責揭示。";
  });
  $("integration-tutorial").addEventListener("click", () => {
    $("integration-result").textContent = "Tutorial 在已有連結意圖或錯誤時才 contextual reveal。";
  });
  setIntegrationState("disconnected", false);
  // Local documentation state only; no backend type inference or account writes.
  const identityCatalog = $("identity-catalog");
  $("identity-context").addEventListener("change", (e) => {
    identityCatalog.dataset.context = e.target.value;
    $("identity-announcer").textContent = "展示方式已更新；平台名稱與連接模式保留。";
  });
  $("identity-status").addEventListener("change", (e) => {
    const labels = { unknown: "未知", connected: "已連接", attention: "需處理" };
    const value = Object.hasOwn(labels, e.target.value) ? e.target.value : "unknown";
    $$("[data-identity-state]").forEach((state) => {
      state.dataset.state = value;
      state.textContent = `示例：${labels[value]}`;
    });
    $("identity-announcer").textContent = `全部示例狀態：${labels[value]}。沒有修改真實渠道。`;
  });
  $("identity-missing").addEventListener("change", (e) => {
    identityCatalog.classList.toggle("missing-logo", e.target.checked);
    $("surface-board").classList.toggle("missing-logo", e.target.checked);
    $("identity-announcer").textContent = e.target.checked
      ? "示例 logo 已隱藏；完整名稱及模式仍然可見。" : "示例 logo 已恢復。";
  });
  $$("[data-channel-logo]").forEach((img) => {
    const fallback = () => img.closest(".identity-glyph").classList.add("asset-failed");
    img.addEventListener("error", fallback);
    if (img.complete && img.naturalWidth === 0) fallback();
  });
  function updateSurfaceComparison() {
    const channel = $("surface-channel").value;
    const framed = $("surface-framed").checked;
    $$("[data-surface-channel]").forEach(panel => {
      panel.hidden = panel.dataset.surfaceChannel !== channel;
    });
    $("surface-board").classList.toggle("is-framed", framed);
    $$(".surface-case").forEach(panel => {
      panel.querySelector("header > span").textContent = panel.dataset.backing === "lockup"
        ? "實色保護層" : framed ? "相容承托底" : "透明容器";
    });
    $("surface-announcer").textContent = `${$("surface-channel").selectedOptions[0].textContent}：五種背景；${framed ? "比較有承托底" : "預設透明容器，複雜底另有保護"}。未改動 App。`;
  }
  $("surface-channel").addEventListener("change", updateSurfaceComparison);
  $("surface-framed").addEventListener("change", updateSurfaceComparison);
  const momentMessages = {
    decide: "決定。未經核實嘅費用與權限不能藏在 Help，也不能啟用承諾按鈕。",
    act: "行動。掃碼步驟放在 QR 旁；示例 QR 不可掃描。",
    recover: "補救。QR 真正過期才顯示錯誤，並保留已選渠道。",
    use: "使用。Broadcast 送出前才顯示收件人核對護欄。",
    reference: "參考。完整政策和技術限制由用戶主動查閱。",
  };
  $$('[data-ct-moment]').forEach((button) => {
    button.addEventListener("click", () => {
      const moment = button.dataset.ctMoment;
      if (!Object.hasOwn(momentMessages, moment)) return;
      $$('[data-ct-moment]').forEach((item) => {
        const selected = item === button;
        item.classList.toggle("is-active", selected);
        item.setAttribute("aria-pressed", String(selected));
      });
      $$('[data-ct-stage]').forEach((stage) => {
        stage.hidden = stage.dataset.ctStage !== moment;
      });
      $("ct-announcer").textContent = `而家顯示：${momentMessages[moment]}`;
    });
  });
})();
