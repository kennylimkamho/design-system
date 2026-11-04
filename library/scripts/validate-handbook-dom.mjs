// Isolated DOM checks only. No network resource loading, native layout or browser certification.
import { createRequire } from "node:module";
import path from "node:path";
import assert from "node:assert/strict";
import fs from "node:fs/promises";
import { root, filename, pages } from "./build-handbook.mjs";
import { primarySections } from '../handbook/src/primary-navigation.mjs';
const require = createRequire(path.resolve(process.argv[2] || path.join(root, 'package.json')));
const { JSDOM, VirtualConsole } = require("jsdom");
const errors = [],
  vc = new VirtualConsole();
vc.on("jsdomError", (e) => errors.push(e.message));
let mediaChanged;
const media = {
  matches: false,
  addEventListener: (_, f) => (mediaChanged = f),
};
const dom = new JSDOM(
  await fs.readFile(path.join(root, `handbook/${filename}`), "utf8"),
  {
    url: "https://handbook.example.invalid/",
    runScripts: "dangerously",
    pretendToBeVisual: true,
    virtualConsole: vc,
    beforeParse(w) {
      w.matchMedia = () => media;
      w.HTMLElement.prototype.scrollIntoView = function () {};
      w.HTMLDialogElement.prototype.showModal = function () {
        this.open = true;
      };
      w.HTMLDialogElement.prototype.close = function () {
        this.open = false;
        this.dispatchEvent(new w.Event("close"));
      };
      w.URL.createObjectURL = () => "blob:local-unit-test";
      w.URL.revokeObjectURL = () => {};
    },
  },
);
const w = dom.window,
  d = w.document,
  $ = (id) => d.getElementById(id),
  $$ = (s) => [...d.querySelectorAll(s)];
const sectionVisualCss = await fs.readFile(path.join(root, "handbook/src/section-visuals.css"), "utf8");
const componentVisualCss = await fs.readFile(path.join(root, "handbook/src/component-section-visuals.css"), "utf8");
const change = (el) =>
  el.dispatchEvent(new w.Event("change", { bubbles: true }));
const input = (id, value) => {
  $(id).value = value;
  $(id).dispatchEvent(new w.Event("input", { bubbles: true }));
};
const visit = (id) => {
  w.location.hash = id;
  w.dispatchEvent(new w.HashChangeEvent("hashchange"));
};
const checks = [];
const check = (name, fn) => {
  fn();
  checks.push(name);
};
check("reading modes expand real details, persist choices and leave legacy routes working", () => {
  assert.equal($("page-cover").hidden, false);
  const full = d.querySelector('[data-reading-mode="full"]');
  const brief = d.querySelector('[data-reading-mode="brief"]');
  full.click();
  assert.equal(full.getAttribute("aria-pressed"), "true");
  assert.ok($$(".spec-details, .doc-context, .sources > details, .runtime-code").every(el => el.open));
  assert.equal(w.localStorage.getItem("cd-handbook-reading"), "full");
  brief.click();
  assert.equal(brief.getAttribute("aria-pressed"), "true");
  assert.ok($$(".spec-details").every(el => !el.open));
  visit("page-contacts");
  assert.equal($("page-contacts").hidden, false);
  visit("cover");
});
check("global search indexes every chapter, section, table and source; keyboard and deep links work", () => {
  $("open-search").focus();
  $("open-search").click();
  assert.equal($("search-dialog").open, true);
  assert.equal(d.activeElement.id, "global-search");
  assert.equal($$("[data-search-result]").length, pages.length);
  for (const page of pages) {
    input("global-search", page.title);
    assert.ok($$("[data-search-result]").some((link) => link.dataset.searchResult === page.id), page.id);
  }
  input("global-search", "不可逆");
  const result = $$('[data-search-result]').find((link) => link.dataset.searchResult === "content-timing--section-1");
  assert.ok(result, "closed table cell text must be searchable");
  result.click();
  w.dispatchEvent(new w.HashChangeEvent("hashchange"));
  assert.equal($("search-dialog").open, false);
  assert.equal($("page-content-timing").hidden, false);
  assert.equal(d.activeElement.id, "content-timing--section-1");
  assert.equal($("content-timing--section-1").closest("section").querySelector("details").open, true);
  $("open-search").focus();
  $("open-search").click();
  input("global-search", "PaginatedDataGrid");
  assert.ok($$('[data-search-result]').some((link) => link.dataset.searchResult === "contacts--implementation"));
  input("global-search", "<img onerror=alert(1)>");
  assert.equal($$('[data-search-result]').length, 0);
  assert.equal($("global-search-results").querySelector("img"), null);
  input("global-search", "ＩＮＢＯＸ");
  assert.ok($$('[data-search-result]').length > 0, "normalise width and case");
  input("global-search", "contacts-sample.csv");
  assert.ok($$('[data-search-result]').some((link) => link.dataset.searchResult === "goal-gradient"), "UI example text is indexed too");
  $("global-search").dispatchEvent(new w.KeyboardEvent("keydown", { key: "ArrowDown", bubbles: true }));
  assert.ok(d.activeElement.hasAttribute("data-search-result"));
  d.activeElement.dispatchEvent(new w.KeyboardEvent("keydown", { key: "ArrowUp", bubbles: true }));
  assert.equal(d.activeElement.id, "global-search");
  $("close-search").click();
  assert.equal(d.activeElement.id, "open-search");
  d.dispatchEvent(new w.KeyboardEvent("keydown", { key: "k", ctrlKey: true, bubbles: true }));
  assert.equal($("search-dialog").open, true);
  $("close-search").click();
  visit("contacts--implementation");
  assert.equal($("contacts--implementation").closest("details").open, true);
  const context = $("page-contacts").querySelector(".doc-context");
  assert.equal(context.open, false);
  w.dispatchEvent(new w.Event("beforeprint"));
  assert.equal(context.open, true);
  w.dispatchEvent(new w.Event("afterprint"));
  assert.equal(context.open, false);
  assert.equal($("contacts--implementation").closest("details").open, true);
  visit("founder-note");
});
check("content timing specimen switches moments without claiming a real QR or backend action", () => {
  const buttons = $$('[data-ct-moment]');
  const stages = $$('[data-ct-stage]');
  assert.equal(buttons.length, 5);
  assert.equal(stages.length, 5);
  assert.equal(stages.filter((stage) => !stage.hidden).length, 1);
  assert.equal(stages[0].dataset.ctStage, "decide");
  assert.equal(stages[0].querySelector("button").disabled, true);
  for (const moment of ["act", "recover", "use", "reference", "decide"]) {
    const button = buttons.find((item) => item.dataset.ctMoment === moment);
    button.click();
    assert.equal(button.getAttribute("aria-pressed"), "true");
    assert.equal(stages.filter((stage) => !stage.hidden).length, 1);
    assert.equal(stages.find((stage) => !stage.hidden).dataset.ctStage, moment);
  }
  assert.match($("ct-announcer").textContent, /未經核實/);
  assert.match(stages.find((stage) => stage.dataset.ctStage === "act").textContent, /不可掃描/);
  assert.ok(stages.find((stage) => stage.dataset.ctStage === "recover").hidden);
});
check("all desktop and mobile navigation groups have larger, stronger section headings", () => {
  for (const selector of ["#desktop-nav", "#nav-dialog nav"]) {
    const groups = $$(`${selector} .nav-group`);
    assert.equal(groups.length, 11);
    for (const group of groups) {
      const heading = w.getComputedStyle(group.querySelector("h2"));
      const link = w.getComputedStyle(group.querySelector("a"));
      assert.equal(heading.fontSize, "15px");
      assert.equal(heading.fontWeight, "700");
      assert.ok(parseFloat(heading.fontSize) > parseFloat(link.fontSize));
    }
  }
});
check("initial state and all routes / section deep links work", () => {
  assert.ok(d.title.includes('Product Design System'));
  visit("cover");
  assert.equal($$(".doc:not([hidden])").length, 1);
  assert.equal($("page-cover").hidden, false);
  for (const p of pages) {
    visit(p.id);
    assert.equal($(`page-${p.id}`).hidden, false);
    assert.equal(d.querySelector(".skip").getAttribute("href"), `#title-${p.id}`);
    assert.equal($$(".doc:not([hidden])").length, 1);
    assert.ok(d.title.includes(p.title));
    visit(`${p.id}--section-1`);
    assert.equal(d.activeElement.id, `${p.id}--section-1`);
  }
  visit("title-case-broadcasting");
  assert.equal($("page-case-broadcasting").hidden, false);
  assert.equal(d.activeElement.id, "title-case-broadcasting");
  visit("does-not-exist");
  assert.equal($("page-cover").hidden, false);
});
check("case studies switch between evidence and proposal with accessible button state", () => {
  const switches = $$('[data-case-switch]');
  assert.equal(switches.length, 5);
  for (const switcher of switches) {
    const article = switcher.closest('.doc');
    const before = article.querySelector('[data-case-panel="before"]');
    const after = article.querySelector('[data-case-panel="after"]');
    const [beforeButton, afterButton] = [...switcher.querySelectorAll('button')];
    assert.equal(before.hidden, false);
    assert.equal(after.hidden, true);
    if (article.id !== 'page-case-broadcasting') {
      assert.equal(before.querySelectorAll('.v14-before-workspace').length, 1);
      assert.match(before.textContent, /程式重構 · 非截圖/);
    }
    afterButton.focus();
    assert.equal(d.activeElement, afterButton);
    afterButton.click();
    assert.equal(afterButton.getAttribute('aria-pressed'), 'true');
    assert.equal(beforeButton.getAttribute('aria-pressed'), 'false');
    assert.equal(before.hidden, true);
    assert.equal(after.hidden, false);
    beforeButton.click();
    assert.equal(before.hidden, false);
    assert.equal(after.hidden, true);
  }
});
check("Broadcasting proposal covers five distinct, operable job stages without invented results", () => {
  const demo = d.querySelector('[data-broadcast-demo]');
  const buttons = [...demo.querySelectorAll('[data-broadcast-stage]')];
  const panels = [...demo.querySelectorAll('[data-broadcast-panel]')];
  assert.equal(buttons.length, 5);
  assert.equal(panels.length, 5);
  for (const button of buttons) {
    button.focus();
    assert.equal(d.activeElement, button);
    button.click();
    assert.equal(button.getAttribute('aria-pressed'), 'true');
    assert.equal(panels.filter((panel) => !panel.hidden).length, 1);
    assert.equal(panels.find((panel) => !panel.hidden).dataset.broadcastPanel, button.dataset.broadcastStage);
  }
  assert.match(panels.find((panel) => panel.dataset.broadcastPanel === 'setup').textContent, /費用／風險/);
  assert.match(panels.find((panel) => panel.dataset.broadcastPanel === 'running').textContent, /真實進度/);
  assert.match(panels.find((panel) => panel.dataset.broadcastPanel === 'history').textContent, /Campaign/);
  assert.match(panels.find((panel) => panel.dataset.broadcastPanel === 'analytics').textContent, /分母/);
  assert.match(panels.find((panel) => panel.dataset.broadcastPanel === 'recovery').textContent, /部分失敗/);
});
check("Motion Lab loading specimen remains abstract and follows explicit state controls", () => {
  const demo = d.querySelector('[data-loading-demo]');
  const view = demo.querySelector('[data-loading-view]');
  const result = demo.querySelector('[data-loading-result]');
  const choose = (state) => demo.querySelector(`[data-loading-state="${state}"]`).click();
  assert.equal(view.hidden, false);
  assert.equal(result.hidden, true);
  assert.equal(view.querySelectorAll('.v14-sk-bars i').length, 6);
  assert.equal(view.querySelectorAll('.v14-sk-rows > div').length, 4);
  assert.doesNotMatch(view.textContent, /\d|campaign|brand/i);
  for (const state of ['ready', 'error', 'cancelled']) {
    choose(state);
    assert.equal(view.hidden, true);
    assert.equal(view.getAttribute('aria-busy'), 'false');
    assert.equal(result.hidden, false);
    assert.equal(demo.dataset.paused, 'true');
    assert.equal(demo.querySelector(`[data-loading-state="${state}"]`).getAttribute('aria-pressed'), 'true');
  }
  choose('loading');
  assert.equal(view.hidden, false);
  assert.equal(result.hidden, true);
  demo.querySelector('[data-loading-width]').click();
  demo.querySelector('[data-loading-reduce]').click();
  assert.equal(demo.dataset.narrow, 'true');
  assert.equal(demo.dataset.reduce, 'true');
});
check("full-text navigation search and clear preserve usable groups", () => {
  input("doc-search", "smart default");
  assert.ok(
    $$("#desktop-nav a:not([hidden])").some(
      (a) => a.dataset.pageLink === "smart-defaults",
    ),
  );
  input("doc-search", "unfindablezzzz");
  assert.equal($$("#desktop-nav a:not([hidden])").length, 0);
  assert.equal($$("#desktop-nav .nav-group:not([hidden])").length, 0);
  input("doc-search", "");
  const section = d.querySelector('[data-primary-section][aria-current="page"]').dataset.primarySection;
  const groups = primarySections.find(s => s.id === section).groups;
  assert.equal($$("#desktop-nav a:not([hidden])").length, pages.filter(p=>groups.includes(p.group)).length);
});
check(
  "every ID is unique; ARIA references and labels resolve; controls have names",
  () => {
    const ids = $$("[id]").map((e) => e.id);
    assert.equal(ids.length, new Set(ids).size);
    for (const el of $$("[aria-labelledby],[aria-describedby],[aria-controls]"))
      for (const attr of [
        "aria-labelledby",
        "aria-describedby",
        "aria-controls",
      ])
        for (const id of (el.getAttribute(attr) || "")
          .split(/\s+/)
          .filter(Boolean))
          assert.ok($(id), `${attr} ${id}`);
    for (const l of $$("label[for]")) assert.ok($(l.htmlFor));
    for (const b of $$("button"))
      assert.ok(b.textContent.trim() || b.getAttribute("aria-label"));
    for (const i of $$("input,select,textarea"))
      assert.ok(
        i.getAttribute("aria-label") || i.labels?.length,
        i.id || i.outerHTML,
      );
    assert.equal($$(".section-visual-frame main, .section-visual-frame nav, .section-visual-frame aside").length, 0,
      "Decorative mini-app screens must not create nested document landmarks");
  },
);
check("tabs have roving focus and correct peer panels", () => {
  visit("navigation");
  $("tab-overview").dispatchEvent(
    new w.KeyboardEvent("keydown", { key: "ArrowRight", bubbles: true }),
  );
  assert.equal(d.activeElement.id, "tab-activity");
  assert.equal($("panel-activity").hidden, false);
  assert.equal($("panel-overview").hidden, true);
  $("tab-activity").dispatchEvent(
    new w.KeyboardEvent("keydown", { key: "End", bubbles: true }),
  );
  assert.equal(d.activeElement.id, "tab-notes");
  $("tab-notes").dispatchEvent(
    new w.KeyboardEvent("keydown", { key: "Home", bubbles: true }),
  );
  assert.equal(d.activeElement.id, "tab-overview");
});
check(
  "table paging, visible-page selection, search and sorting scopes are correct",
  () => {
    visit("tables");
    assert.equal($$("[data-row-id]").length, 3);
    $("select-page").checked = true;
    change($("select-page"));
    assert.match($("selection-count").textContent, /已選取 3/);
    $("page-next").click();
    assert.equal($("select-page").checked, false);
    assert.equal($$("[data-row-id]").length, 3);
    input("table-search", "Alex");
    assert.equal($$("[data-row-id]").length, 1);
    assert.match($("page-count").textContent, /1 筆/);
    assert.equal($("page-next").disabled, true);
    $("sort-rows").click();
    assert.equal($("sort-column").getAttribute("aria-sort"), "descending");
    input("table-search", "zzzz");
    assert.equal($("table-state-view").hidden, false);
    assert.equal($("select-page").disabled, true);
    $("table-state-view").querySelector("button").click();
    assert.equal($("table-search").value, "");
    $("table-density").value = "40";
    change($("table-density"));
    assert.equal(
      $("demo-table").style.getPropertyValue("--row-height"),
      "40px",
    );
  },
);
check(
  "table loading/empty/error/permission states have recovery without false data",
  () => {
    for (const state of ["loading", "empty", "error", "permission"]) {
      $("table-state").value = state;
      change($("table-state"));
      assert.equal($("table-state-view").hidden, false);
      assert.equal($("demo-table").closest(".table-scroll").hidden, true);
      assert.equal($("page-next").disabled, true);
    }
    $("table-state").value = "error";
    change($("table-state"));
    $("table-state-view").querySelector("button").click();
    assert.equal($("table-state").value, "loaded");
  },
);
check(
  "form validation accepts Unicode and focuses required error; no submit",
  () => {
    visit("fields");
    $("field-demo").dispatchEvent(
      new w.Event("submit", { bubbles: true, cancelable: true }),
    );
    assert.equal($("name-error").hidden, false);
    assert.equal(d.activeElement.id, "demo-name");
    input("demo-name", "陳大文");
    $("field-demo").dispatchEvent(
      new w.Event("submit", { bubbles: true, cancelable: true }),
    );
    assert.equal($("name-error").hidden, true);
    assert.match($("form-result").textContent, /沒有提交/);
  },
);
check("selectors search, choose and remove tags without losing context", () => {
  visit("selectors");
  input("tag-query", "vip");
  assert.equal($$("[data-tag-option]:not([hidden])").length, 1);
  const cb = d.querySelector("[data-tag-option=VIP] input");
  cb.checked = true;
  change(cb);
  assert.equal($$("#selected-tags button").length, 1);
  $("selected-tags").querySelector("button").click();
  assert.equal(cb.checked, false);
  assert.equal(d.activeElement.id, "tag-query");
  input("tag-query", "nomatch");
  assert.equal($("tags-no-result").hidden, false);
});
check(
  "dialog handlers open, cancel and return focus without deleting data",
  () => {
    visit("overlays");
    const b = $("page-overlays").querySelector("[data-open-dialog]");
    b.click();
    assert.equal($("confirm-dialog").open, true);
    assert.equal(d.activeElement.id, "cancel-confirm");
    $("cancel-confirm").click();
    assert.equal($("confirm-dialog").open, false);
    assert.equal(d.activeElement, b);
    b.click();
    $("confirm-example").click();
    assert.equal($("toast").hidden, false);
    assert.match($("toast-text").textContent, /沒有刪除/);
  },
);
check(
  "smart defaults update the time preview while goal progress stays tied to verified sample outcomes",
  () => {
    visit("smart-defaults");
    $("default-zone").value = "UTC";
    change($("default-zone"));
    assert.equal(d.querySelector(".pv-defaults .pv-zone-hkt").hidden, true);
    assert.equal(d.querySelector(".pv-defaults .pv-zone-utc").hidden, false);
    assert.match($("default-zone-announcer").textContent, /UTC/);
    $("default-density").selectedIndex = 1;
    $("reset-defaults").click();
    assert.equal($("default-density").selectedIndex, 0);
    assert.equal($("default-zone").value, "Asia/Hong_Kong");
    assert.equal(d.querySelector(".pv-defaults .pv-zone-hkt").hidden, false);
    visit("goal-gradient");
    assert.equal($("goal-progress").getAttribute("aria-valuenow"), "2");
    assert.equal($("goal-progress").getAttribute("aria-valuemax"), "4");
    assert.equal($("goal-confirm").disabled, true);
    assert.equal($$("[data-goal]").length, 0);
    assert.equal($$("[data-goal-step][data-goal-complete=true]").length, 2);
    assert.ok(d.querySelector("[data-goal-error-row]"));
  },
);
check("ownership preview, local save and restore are honest and text escaped", () => {
  visit("ownership");
  input("view-name", "<img src=x onerror=alert(1)>");
  assert.equal($("view-preview-title").children.length, 0);
  assert.ok($("view-preview-title").textContent.includes("<img"));
  $("view-save-sample").click();
  assert.equal(d.querySelector(".pv-scope-card").dataset.viewSaveState, "saved");
  assert.equal($("view-restore-sample").disabled, true);
  input("view-name", "改動但未儲存");
  assert.equal(d.querySelector(".pv-scope-card").dataset.viewSaveState, "dirty");
  assert.equal($("view-restore-sample").disabled, false);
  $("view-restore-sample").click();
  assert.equal($("view-name").value, "<img src=x onerror=alert(1)>");
  $("view-scope").value = "team";
  change($("view-scope"));
  assert.equal($("page-ownership").querySelector(".pv-scope-team").hidden, false);
  assert.equal(d.querySelector(".pv-scope-card").dataset.viewSaveState, "dirty");
  $("reset-view-name").click();
  assert.equal($("view-preview-title").textContent, "我的客服 view");
});
check("hover pin is explicit and Escape returns to a safe focus target", () => {
  visit("hover");
  $("pin-peek").click();
  assert.equal($("pin-peek").getAttribute("aria-pressed"), "true");
  assert.equal($("peek-panel").classList.contains("pinned"), true);
  $("peek-panel").dispatchEvent(
    new w.KeyboardEvent("keydown", { key: "Escape", bubbles: true }),
  );
  assert.equal($("peek-panel").classList.contains("pinned"), false);
  assert.equal(d.activeElement.id, "title-hover");
});
check("manual and OS reduced-motion preferences combine safely", () => {
  $("reduce-motion").checked = true;
  change($("reduce-motion"));
  assert.equal(d.documentElement.dataset.motion, "reduced");
  $("reduce-motion").checked = false;
  change($("reduce-motion"));
  assert.equal(d.documentElement.dataset.motion, "full");
  media.matches = true;
  mediaChanged();
  assert.equal(d.documentElement.dataset.motion, "reduced");
});
check(
  "font language and responsive schematic controls change their specimens",
  () => {
    $("type-language").value = "en";
    change($("type-language"));
    assert.ok(
      $$("[data-type-text]").every((x) =>
        x.textContent.includes("Every conversation"),
      ),
    );
    $("responsive-mode").value = "narrow";
    change($("responsive-mode"));
    assert.equal($("responsive-frame").className, "narrow");
  },
);
check(
  "icon search includes authored and utility assets and handles no results",
  () => {
    input("icon-query", "inbox");
    assert.ok($$("[data-icon-name]:not([hidden])").length > 0);
    input("icon-query", "zzzzz");
    assert.equal($$("[data-icon-name]:not([hidden])").length, 0);
    input("icon-query", "");
    assert.equal($$("[data-icon-name]:not([hidden])").length, 45);
  },
);
check("selected module art is shown on both navigation surface specimens", () => {
  const preview = $("page-icons").querySelector(".module-selection-preview");
  assert.ok(preview);
  assert.match(preview.textContent, /Integration B \/ AI A \/ CRM B/);
  const panels = [...preview.querySelectorAll(".module-selection-panel")];
  assert.equal(panels.length, 2);
  for (const panel of panels) {
    assert.equal(panel.querySelectorAll(".module-selection-row").length, 3);
    assert.equal(panel.querySelectorAll(".module-selection-art svg").length, 3);
    assert.equal(panel.querySelectorAll(".module-selection-row.is-current").length, 1);
  }
});
check(
  "handoff checklist updates count; filter clear restores explicit scope",
  () => {
    $$("[data-handoff-check]").forEach((c) => {
      c.checked = true;
      change(c);
    });
    assert.match($("handoff-progress").textContent, /6 \/ 6/);
    input("filter-query", "Alex");
    $("filter-form").dispatchEvent(
      new w.Event("submit", { bubbles: true, cancelable: true }),
    );
    assert.match($("filter-summary").textContent, /1 \/ 6/);
    $("clear-filters").click();
    assert.equal($("filter-query").value, "");
  },
);
check("identity catalog retains names/modes in list and missing-artwork states", () => {
  visit("icon-identity");
  const cards = $$("[data-channel-id]");
  assert.equal(cards.length, 9);
  const labels = cards.map(c => c.querySelector("h4").textContent);
  const modes = cards.map(c => c.querySelector(".identity-mode")?.textContent || "");
  $("identity-context").value = "list";
  change($("identity-context"));
  assert.equal($("identity-catalog").dataset.context, "list");
  $("identity-missing").checked = true;
  change($("identity-missing"));
  assert.equal($("identity-catalog").classList.contains("missing-logo"), true);
  for (const img of $$("#identity-catalog [data-channel-logo]")) {
    assert.equal(w.getComputedStyle(img).display, "none");
    assert.equal(w.getComputedStyle(img.nextElementSibling).display, "block");
  }
  assert.deepEqual(cards.map(c => c.querySelector("h4").textContent), labels);
  assert.deepEqual(cards.map(c => c.querySelector(".identity-mode")?.textContent || ""), modes);
  assert.equal($$("#identity-catalog .identity-generic svg").length, 2);
  $("identity-missing").checked = false;
  change($("identity-missing"));
  assert.equal($("identity-catalog").classList.contains("missing-logo"), false);
  const image = d.querySelector("#identity-catalog [data-channel-logo]");
  image.dispatchEvent(new w.Event("error"));
  assert.ok(image.parentElement.classList.contains("asset-failed"));
  assert.equal(w.getComputedStyle(image.nextElementSibling).display, "block");
});
check("identity health changes leave vendor artwork and mode unchanged", () => {
  const logos = $$("#identity-catalog [data-channel-logo]").map(i => i.src);
  const modes = $$("#identity-catalog .identity-mode").map(i => i.textContent);
  for (const [value, label] of [["connected", "已連接"], ["attention", "需處理"], ["unknown", "未知"]]) {
    $("identity-status").value = value;
    change($("identity-status"));
    assert.equal($$("[data-identity-state]").length, 9);
    for (const state of $$("[data-identity-state]")) {
      assert.equal(state.dataset.state, value);
      assert.equal(state.textContent, `示例：${label}`);
    }
    assert.match($("identity-announcer").textContent, /沒有修改真實渠道/);
    assert.deepEqual($$("#identity-catalog [data-channel-logo]").map(i => i.src), logos);
    assert.deepEqual($$("#identity-catalog .identity-mode").map(i => i.textContent), modes);
  }
});
check("integration card keeps the main goal visible and progressively reveals secondary help/settings", () => {
  visit("icon-identity");
  const primary = $("integration-primary");
  const settings = $("integration-settings");
  const help = $("integration-context-help");
  assert.equal(primary.querySelector("span").textContent, "連結");
  assert.equal(primary.disabled, false);
  assert.equal(settings.getAttribute("aria-label"), "PayFlow 設定");
  assert.equal(w.getComputedStyle(settings).opacity, "0");
  assert.equal(w.getComputedStyle(d.querySelector(".integration-app-slot")).width, "56px");
  assert.equal(w.getComputedStyle(d.querySelector(".integration-app-mark")).width, "44px");
  assert.equal(help.hidden, true);
  assert.equal($("integration-tutorial").querySelector("svg"), null);
  $("integration-force-secondary").checked = true;
  change($("integration-force-secondary"));
  assert.ok($("integration-app-card").classList.contains("force-secondary"));
  assert.equal(w.getComputedStyle(settings).opacity, "1");
  $("integration-demo-state").value = "error";
  change($("integration-demo-state"));
  assert.equal(primary.querySelector("span").textContent, "重試");
  assert.equal(help.hidden, false);
  $("integration-demo-state").value = "disconnected";
  change($("integration-demo-state"));
  primary.click();
  assert.equal($("integration-app-card").dataset.state, "connecting");
  assert.equal(primary.disabled, true);
  assert.equal(primary.getAttribute("aria-busy"), "true");
  assert.equal(help.hidden, false);
});
check("static section actions explain their local-only scope instead of silently doing nothing", () => {
  visit("start");
  const sample = d.querySelector('#page-start .section-visual-frame button:not([data-section-live]):not([disabled])');
  assert.ok(sample);
  sample.click();
  assert.equal($("toast").hidden, false);
  assert.match($("toast-text").textContent, /本地 UI 規格示意/);
  $("close-toast").click();
  visit("feedback");
  const popoverTrigger = d.querySelector('#page-feedback .section-visual-frame [data-section-live][popovertarget]');
  assert.ok(popoverTrigger);
  popoverTrigger.click();
  assert.match($("toast-text").textContent, /原生 Popover 示範/);
  $("close-toast").click();
});
check("API mode illustration is distinct, labelled and explained alongside the user reference", () => {
  visit("icon-identity");
  const api = d.querySelector('[data-channel-id="whatsapp-cloud-api"]');
  const mobile = d.querySelector('[data-channel-id="whatsapp-mobile"]');
  assert.equal(api.dataset.assetRole, "mode-illustration");
  assert.notEqual(api.querySelector("img").src, mobile.querySelector("img").src);
  assert.equal(api.querySelector(".identity-mode").textContent, "Cloud API");
  assert.match(api.querySelector(".identity-review").textContent, /自訂示意/);
  assert.match(api.querySelector(".identity-detail").textContent, /並非 Meta 官方/);
  assert.equal($$("[data-variant-example]").length, 3);
  const reference = d.querySelector(".identity-reference");
  assert.equal(reference.open, false);
  reference.querySelector("summary").click();
  assert.equal(reference.open, true);
  assert.match(reference.querySelector("img").alt, /使用者提供/);
  assert.match(reference.querySelector("figcaption").textContent, /唔係官方/);
  reference.querySelector("summary").click();
  assert.equal(reference.open, false);
});
check("surface comparison uses transparent defaults, explicit inverse assets and optional backing", () => {
  visit("icon-identity");
  assert.equal($$("[data-surface-channel]").length, 9);
  assert.equal($$(".surface-case").length, 45);
  assert.equal($$("[data-surface-channel]:not([hidden])").length, 1);
  assert.equal(w.getComputedStyle(d.querySelector(".identity-glyph")).backgroundColor, "rgba(0, 0, 0, 0)");
  const whatsapp = d.querySelector('[data-surface-channel="whatsapp-mobile"]');
  const lightAsset = whatsapp.querySelector('[data-surface="white"] [data-surface-asset]').dataset.surfaceAsset;
  for (const id of ["dark", "brand", "complex"]) {
    const card = whatsapp.querySelector('[data-surface="' + id + '"]');
    assert.equal(card.dataset.variant, "inverse");
    assert.notEqual(card.querySelector("[data-surface-asset]").dataset.surfaceAsset, lightAsset);
  }
  assert.equal(whatsapp.querySelector('[data-surface="complex"]').dataset.backing, "lockup");
  $("surface-channel").value = "instagram";
  change($("surface-channel"));
  assert.equal(d.querySelector('[data-surface-channel="instagram"]').hidden, false);
  assert.equal(whatsapp.hidden, true);
  assert.match($("surface-announcer").textContent, /五種背景/);
  $("surface-framed").checked = true;
  change($("surface-framed"));
  assert.ok($("surface-board").classList.contains("is-framed"));
  assert.ok($$('[data-surface-channel="instagram"] .surface-case header > span').every(x => x.textContent.includes("承托") || x.textContent.includes("保護")));
  $("surface-framed").checked = false;
  change($("surface-framed"));
  assert.equal($("surface-board").classList.contains("is-framed"), false);
  assert.ok($$('[data-surface-channel="instagram"] .surface-case:not([data-surface="complex"]) header > span').every(x => x.textContent === "透明容器"));
  assert.equal($$(".surface-role-panel").length, 2);
  assert.equal($$(".surface-role-panel .surface-role-items > div").length, 8);
});
check("cross-reviewed specimens do not contradict their interaction and approval rules", () => {
  const specimen = (key) => d.querySelector(`[data-section-visual="${key}"]`);
  const broadcast = specimen("channels:1");
  assert.equal(broadcast.querySelectorAll(".visual-broadcast-steps > div").length, 5);
  assert.match(broadcast.textContent, /REVIEW/);
  assert.match(broadcast.textContent, /CONFIRM/);
  assert.match(broadcast.querySelector(".visual-broadcast-result").textContent, /120 \+ 5 \+ 3 = 128/);
  assert.match(broadcast.querySelector(".visual-broadcast-result").textContent, /只重試 5 筆 Failed/);
  assert.match(specimen("channels:2").textContent, /三筆不同活動/);
  assert.ok([...specimen("login:0").querySelectorAll("input")].every(el => el.readOnly));
  for (const key of ["login:0", "login:1"]) {
    const login = specimen(key);
    assert.ok(login.querySelector(".visual-login-mark"));
    assert.ok(login.querySelector(".visual-login-language select"));
    assert.match(login.textContent, /Google/);
    assert.match(login.textContent, /忘記密碼/);
    assert.match(login.textContent, /註冊/);
  }
  const phone = d.querySelector('[data-section-visual="special-fields:0"]');
  const phoneChapter = $("page-special-fields");
  const countryLabel = phoneChapter.querySelector('label[for="country-example"]');
  const numberLabel = phoneChapter.querySelector('label[for="phone-example"]');
  assert.ok(countryLabel.querySelector("select") && !countryLabel.querySelector("input"));
  assert.ok(numberLabel.querySelector("input") && !numberLabel.querySelector("select"));
  assert.ok(phone);
  assert.equal(specimen("tables:2").querySelectorAll('input[type="checkbox"]').length, 0);
  assert.match(specimen("tables:2").textContent, /靜態快照/);
  assert.match(specimen("tables:4").textContent, /2026-09-24 14:25 HKT/);
  assert.equal(specimen("tables:4").querySelectorAll(".sv-mobile-pair button").length, 2);
  assert.match(componentVisualCss, /\.sv-mobile-pair \.sv-btn\s*\{[^}]*min-height:\s*44px/);
  assert.match(specimen("special-fields:2").textContent, /遮罩值不能作為復原方式/);
  assert.match(specimen("smart-defaults:2").textContent, /Team A 設定優先/);
  assert.match(specimen("visual-path:2").textContent, /正式介面須另驗收鍵盤焦點順序/);
  assert.match(specimen("icon-identity:1").textContent, /資產待核對/);
  assert.match(specimen("color:2").textContent, /尚未核准/);
  assert.equal(specimen("accessibility:0").querySelectorAll(".tech-demo-focus").length, 0);
  assert.match(sectionVisualCss, /\.visual-type-scale strong\s*\{[^}]*font-weight:\s*600/);
  assert.match(sectionVisualCss, /\.visual-type-scale b\s*\{[^}]*font-weight:\s*600/);
});
visit("motion");
$("motion-save").click();
assert.equal($("motion-save").disabled, true);
assert.equal($("motion-save").getAttribute("aria-busy"), "true");
await new Promise((r) => setTimeout(r, 650));
check("pending demo completes and clearly says no App data changed", () => {
  assert.equal($("motion-save").disabled, false);
  assert.equal($("motion-save").getAttribute("aria-busy"), "false");
  assert.match($("motion-result").textContent, /未修改App/);
  assert.equal($("integration-app-card").dataset.state, "connected");
  assert.equal($("integration-primary").querySelector("span").textContent, "管理");
  assert.equal($("integration-primary").disabled, false);
  assert.match($("integration-result").textContent, /backend source of truth/);
});
check(
  "no runtime errors (CSS parser capability is excluded, not called visual QA)",
  () =>
    assert.deepEqual(
      errors.filter((x) => !x.includes("Could not parse CSS stylesheet")),
      [],
    ),
);
check("Motion Library filters, toggles and resets real local states without timers", () => {
  visit("transitions-reference");
  const cards = $$('[data-motion-example]');
  assert.equal(cards.length, 6);
  for (const card of cards) {
    const before = card.querySelector('.motion-object').textContent;
    card.querySelector('[data-motion-play]').click();
    assert.notEqual(card.querySelector('.motion-object').textContent, before);
    assert.equal(card.dataset.active, 'true');
    if(card.querySelector('.motion-extra')) assert.equal(card.querySelector('.motion-extra').hidden,false);
    card.querySelector('[data-motion-reset]').click();
    assert.equal(card.querySelector('.motion-object').textContent,before);
    if(card.querySelector('.motion-extra')) assert.equal(card.querySelector('.motion-extra').hidden,true);
  }
  d.querySelector('[data-motion-filter="feedback"]').click();
  assert.equal(cards.filter(c=>!c.hidden).length,3);
  d.querySelector('[data-motion-filter="all"]').click();
  assert.equal(cards.filter(c=>!c.hidden).length,6);
});
check("Motion Library honors motion preferences and replaces in-flight animations", () => {
  const card = d.querySelector('[data-motion-example="badge"]');
  const object = card.querySelector('.motion-object');
  let calls = 0, cancelled = 0, running = [];
  object.animate = () => {calls++; const animation = {cancel(){cancelled++; running = running.filter(a=>a!==animation);}}; running.push(animation); return animation;};
  object.getAnimations = () => [...running];
  media.matches = false; $("reduce-motion").checked = false; change($("reduce-motion"));
  card.querySelector('[data-motion-play]').click();
  card.querySelector('[data-motion-play]').click();
  assert.equal(calls,2); assert.equal(cancelled,1);
  $("reduce-motion").checked = true; change($("reduce-motion"));
  card.querySelector('[data-motion-play]').click();
  assert.equal(calls,2); assert.equal(cancelled,2);
  assert.equal(card.dataset.active,'true');
  card.querySelector('[data-motion-reset]').click();
});
check('all six motion examples preview on mouse hover, stop on exit, and ignore touch hover', () => {
  visit('transitions-reference');
  media.matches = false; $('reduce-motion').checked = false; change($('reduce-motion'));
  const pointer = (el, type, pointerType = 'mouse') => {
    const event = new dom.window.Event(type);
    Object.defineProperty(event, 'pointerType', {value:pointerType});
    el.dispatchEvent(event);
  };
  for(const card of $$('[data-motion-example]')) {
    card.querySelector('[data-motion-reset]').click();
    const object = card.querySelector('.motion-object'), before = object.textContent;
    let calls = 0, cancelled = 0, running = [];
    object.animate = () => {calls++; const a = {cancel(){cancelled++; running = running.filter(x=>x!==a);}}; running.push(a); return a;};
    object.getAnimations = () => [...running];
    pointer(card,'pointerenter','touch');
    assert.equal(card.dataset.active,'false'); assert.equal(calls,0);
    pointer(card,'pointerenter'); pointer(card,'pointerenter');
    assert.equal(calls,1); assert.notEqual(object.textContent,before);
    pointer(card,'pointerleave');
    assert.equal(cancelled,1); assert.equal(object.textContent,before);
    pointer(card,'pointerenter');
    const stage = card.querySelector('.motion-stage'); stage.focus();
    assert.equal(calls,2); pointer(card,'pointerleave');
    assert.equal(card.dataset.active,'true'); // keyboard still inspecting it
    const link = stage.querySelector('a');
    if(link) { link.focus(); assert.equal(link.closest('.motion-extra').hidden,false); assert.equal(calls,2); }
    card.querySelector('[data-motion-play]').focus();
    assert.equal(card.dataset.active,'false'); assert.equal(cancelled,2);
    card.querySelector('[data-motion-play]').click();
    assert.equal(card.dataset.active,'true'); assert.equal(calls,3);
    card.querySelector('[data-motion-reset]').click();
    $('reduce-motion').checked = true; change($('reduce-motion'));
    pointer(card,'pointerenter'); assert.equal(calls,3); assert.equal(card.dataset.active,'true');
    pointer(card,'pointerleave'); assert.equal(card.dataset.active,'false');
    $('reduce-motion').checked = false; change($('reduce-motion'));
  }
});
check('Skeleton hover/focus previews pause on exit and route changes', () => {
  visit('motion-lab');
  const demo = d.querySelector('[data-loading-demo]'), surface = demo.querySelector('.v14-loading-surface');
  const pointer = (type, pointerType='mouse') => {
    const event = new dom.window.Event(type); Object.defineProperty(event,'pointerType',{value:pointerType}); demo.dispatchEvent(event);
  };
  demo.querySelector('[data-loading-state="loading"]').click();
  pointer('pointerleave'); assert.equal(demo.dataset.paused,'true');
  pointer('pointerenter','touch'); assert.equal(demo.dataset.paused,'true');
  pointer('pointerenter'); assert.equal(demo.dataset.paused,'false');
  surface.focus(); pointer('pointerleave'); assert.equal(demo.dataset.paused,'false');
  demo.querySelector('[data-loading-state="ready"]').focus(); assert.equal(demo.dataset.paused,'true');
  pointer('pointerenter'); assert.equal(demo.dataset.paused,'false');
  visit('transitions-reference'); assert.equal(demo.dataset.paused,'true');
});
check('eight primary destinations scope both chapter menus and preserve remembered routes', () => {
  const links = $$('[data-primary-section]');
  assert.deepEqual(links.map(a=>a.textContent),['Background','Principles','Key Modules','Flow Design','Case Study','Motion Lab','AI Infra','Others']);
  for(const section of primarySections) {
    const link = links.find(a=>a.dataset.primarySection===section.id);
    input('doc-search','smart default');
    link.click(); w.dispatchEvent(new w.HashChangeEvent('hashchange'));
    assert.equal(link.getAttribute('aria-current'),'page');
    assert.equal($('doc-search').value,'');
    const expected = pages.filter(p=>section.groups.includes(p.group));
    assert.equal($$('#desktop-nav a:not([hidden])').length,expected.length);
    assert.equal($$('#nav-dialog .nav-group:not([hidden])').length,section.groups.length);
    assert.equal($$('.doc:not([hidden])').length,1);
    visit(expected.at(-1).id+'--section-1');
    assert.equal(link.getAttribute('aria-current'),'page');
  }
  visit('inbox'); visit('motion');
  links.find(a=>a.dataset.primarySection==='modules').click();
  w.dispatchEvent(new w.HashChangeEvent('hashchange'));
  assert.equal(w.location.hash,'#inbox');
  const last = links.at(-1); last.focus();
  last.dispatchEvent(new w.KeyboardEvent('keydown',{key:'ArrowRight',bubbles:true}));
  assert.equal(d.activeElement,links[0]);
  links[0].dispatchEvent(new w.KeyboardEvent('keydown',{key:'End',bubbles:true}));
  assert.equal(d.activeElement,last);
});
check('Industry Info stays in Others and task suggestions do not imply supported App features', () => {
  visit('industry-whatsapp-flows-iab');
  assert.equal(d.querySelector('.primary-sections [aria-current]').textContent,'Others');
  assert.equal(d.querySelector('#desktop-nav [data-page-link="industry-whatsapp-flows-iab"]').hidden,false);
  const goal=$('industry-goal'), result=$('industry-recommendation');
  for(const [value,text]of [['lead','Flows'],['web','IAB'],['sensitive','唔可以'],['unknown','獨立核對']]){
    goal.value=value; change(goal); assert.ok(result.textContent.includes(text));
  }
  goal.value='lead';change(goal);
  input('doc-search','IAB');
  assert.ok($$('#desktop-nav a:not([hidden])').some(a=>a.dataset.pageLink==='industry-whatsapp-flows-iab'));
  input('doc-search','');
});
check('no runtime errors after all navigation and motion interactions', () => assert.deepEqual(errors.filter(x=>!x.includes('Could not parse CSS stylesheet')), []));
console.log(
  JSON.stringify(
    {
      passed: checks.length,
      checks,
      limits:
        "Isolated DOM only; native focus trap, rendered hover, touch, viewport, OS animation frames and screen reader require manual browser QA.",
    },
    null,
    2,
  ),
);
dom.window.close();
