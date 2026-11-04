import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import foundations from "../handbook/src/foundations.mjs";
import principles from "../handbook/src/principles.mjs";
import components from "../handbook/src/components.mjs";
import patterns from "../handbook/src/patterns.mjs";
import { flowPages, flowDemos, flowSectionVisuals } from "../handbook/src/flow-patterns.mjs";
import { contentTimingPage, contentTimingDemo, contentTimingSectionVisuals } from "../handbook/src/content-timing.mjs";
import { broadcastLearningPage, broadcastLearningDemo, broadcastLearningSectionVisuals } from "../handbook/src/broadcast-learning.mjs";
import iconIdentity from "../handbook/src/icon-identity.mjs";
import { iconIdentityDemos } from "../handbook/src/icon-identity-demos.mjs";
import { loadChannelAssets } from "./channel-assets.mjs";
import { identitySurfaces } from "../handbook/src/identity-surfaces.mjs";
import {
  version,
  releaseLabel,
  updatedAt,
  updatedAtLabel,
  groups,
} from "../handbook/src/model.mjs";
import { demos, esc } from "../handbook/src/demos.mjs";
import principleDemos from "../handbook/src/principle-demos.mjs";
import { sectionVisuals } from "../handbook/src/section-visuals.mjs";
import { iconIdentitySectionVisuals } from "../handbook/src/icon-identity-section-visuals.mjs";
import { principleSectionVisuals } from "../handbook/src/principle-section-visuals.mjs";
import { componentSectionVisuals } from "../handbook/src/component-section-visuals.mjs";
import { compileModuleIcons, compileTokens } from "./compile-assets.mjs";
import { runtimePatterns, storybookUrl } from "../handbook/src/runtime-patterns.mjs";
import { v14Pages } from "../handbook/src/v14-pages.mjs";
import { casePages, caseStudies } from "../handbook/src/v14-cases.mjs";
import { v14Visuals } from "../handbook/src/v14-visuals.mjs";
import { adoptionPages, adoptionDemos, ruleCodes } from "../handbook/src/draft3-adoption.mjs";
import { transitionsPage, transitionsDemo, motionExamples } from "../handbook/src/transitions-reference.mjs";
import { primarySections } from "../handbook/src/primary-navigation.mjs";
import { industryPage, industryDemo, industryRecommendations } from '../handbook/src/industry-whatsapp.mjs';
import { systemName, shortName, repositoryUrl, siteUrl, sourceUrl, systemMark } from '../handbook/src/site-config.mjs';
export const root = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const read = (p) => fs.readFile(path.join(root, p), "utf8");
const json = async (p) => JSON.parse(await read(p));
const legacyPages = [
  ...foundations.flatMap((p) => p.id === "icons" ? [p, iconIdentity] : [p]),
  ...principles,
  ...components,
  ...patterns,
  ...flowPages,
  contentTimingPage,
];
const groupFor = (page) => {
  if (page.id === 'motion-strategy') return 'Motion Lab';
  if (groups.includes(page.group)) return page.group;
  if (["start"].includes(page.id)) return "Founder’s Note";
  if (["principles", "task-first", "live-state-concerns"].includes(page.id)) return "Design Principles";
  if (["content-timing", "onboarding"].includes(page.id)) return "業務致勝與 Flow Design";
  if (["motion", "motion-recipes"].includes(page.id)) return "Motion Lab";
  if (["implementation", "handoff"].includes(page.id)) return "AI Agent 使用與版本治理";
  if (["視覺基礎", "版面與導航", "元件", "交付與維護"].includes(page.group)) return "基礎元素";
  if (page.group === "產品模式") return "Key Modules";
  return "Design Principles";
};
export const pages = [...adoptionPages, ...legacyPages, ...v14Pages, ...casePages, broadcastLearningPage, transitionsPage, industryPage]
  .map((page) => ({ ...page, group: groupFor(page) }))
  .sort((a, b) => groups.indexOf(a.group) - groups.indexOf(b.group) || (a.id === "founder-note" ? -1 : b.id === "founder-note" ? 1 : 0));
export const filename = "product-design-system-v1-4-draft-9-annotatable.html";

const sectionId = (page, i) => `${page.id}--section-${i + 1}`;
const ruleTable = (t) =>
  `<div class="rules-table-wrap" role="region" tabindex="0" aria-label="規格表，可橫向捲動"><table class="rules-table"><thead><tr>${t.head.map((h) => `<th scope="col">${esc(h)}</th>`).join("")}</tr></thead><tbody>${t.rows.map((row) => `<tr>${row.map((cell, i) => (i === 0 ? `<th scope="row">${esc(cell)}</th>` : `<td>${esc(cell)}</td>`)).join("")}</tr>`).join("")}</tbody></table></div>`;
function renderSection(p, s, n, allSectionVisuals) {
  const visual = allSectionVisuals[p.id]?.[n];
  const citations = s.references?.length ? `<p class="industry-citations">來源：${s.references.map(r=>`<a href="${esc(r.url)}" target="_blank" rel="noopener">${esc(r.title)} ↗</a>`).join(' · ')}</p>` : '';
  const rules = `${s.paragraphs.map((text) => `<p>${esc(text)}</p>`).join("")}${s.table ? ruleTable(s.table) : ""}${citations}`;
  return `<section class="section-block ${visual ? "has-section-visual" : ""}"><h2 tabindex="-1" id="${sectionId(p, n)}">${esc(s.title)}</h2>${visual ? `<div class="section-visual-frame" data-section-visual="${p.id}:${n}">${visual}</div><details class="spec-details"><summary>詳細規則</summary>${rules}</details>` : `<div class="section-rules">${rules}</div>`}</section>`;
}
function nav() {
  return groups
    .map(
      (group) =>
        `<details class="nav-group" data-nav-group="${esc(group)}"><summary><h2>${group}</h2></summary>${pages
          .filter((p) => p.group === group)
          .map(
            (p) =>
              `<a href="#${p.id}" data-page-link="${p.id}">${esc(p.title)}</a>`,
          )
          .join("")}</details>`,
    )
    .join("");
}
function renderRuntimeBridge(pageId) {
  const patterns = runtimePatterns.filter((pattern) => pattern.chapters.includes(pageId));
  if (!patterns.length) return "";
  return `<section class="section-block runtime-bridge" aria-labelledby="${pageId}--live-code"><div class="runtime-bridge-head"><h2 id="${pageId}--live-code" tabindex="-1">已抽出嘅真實元件</h2><p>以下係 package-backed 元件；App 採用需另行驗證。Storybook 其餘舊 stories 係歷史／參考。</p></div><div class="runtime-grid">${patterns.map((pattern) => `<article class="runtime-card" data-runtime-pattern="${pattern.id}"><div class="runtime-card-top"><span class="badge success">Package 已有實作</span><span class="runtime-status">App 採用待驗</span></div><h3>${esc(pattern.title)}</h3><p>${esc(pattern.description)}</p><div class="runtime-links"><a href="${storybookUrl(pattern.story)}" target="_blank" rel="noopener">開啟互動示例 ↗</a><a href="${sourceUrl(pattern.source)}" target="_blank" rel="noopener">查看原始碼 ↗</a></div><details class="runtime-code"><summary>查看實際 import 用法</summary><pre><code>${esc(pattern.code)}</code></pre></details></article>`).join("")}</div></section>`;
}
function renderArticle(p, i, visual, allSectionVisuals) {
  const scope = p.status === 'industry-reference' ? '行業參考 · 非設計規範／非 App 能力承諾' : p.status === "proposal" ? "Design System 提案 · 尚未在 App 部署" : "設計規格 · App 採用需另行驗證";
  const sources = `${p.sources.map((source) => `<a href="${sourceUrl(source)}" target="_blank" rel="noopener">${esc(source)} ↗</a>`).join("")}${(p.references || []).map((r) => `<a href="${esc(r.url)}" target="_blank" rel="noopener">${esc(r.title)} ↗</a>`).join("")}`;
  const index = p.id === "principles" ? `<div class="principle-index">${pages.filter((x) => x.group === "Design Principles" && x.id !== "principles").map((x) => `<a href="#${x.id}">${esc(x.title)}</a>`).join("")}</div>` : "";
  const codes = ruleCodes.filter((r) => r.chapter === p.id);
  const codeLinks = codes.length ? `<nav class="chapter-rule-codes" aria-label="規則代碼">${codes.map((r) => `<a href="#rules-index--${r.code.toLowerCase()}" title="${esc(r.description)}"><code>${r.code}</code></a>`).join("")}</nav>` : "";
  return `<article class="doc" id="page-${p.id}" ${i ? "hidden" : ""} aria-labelledby="title-${p.id}">
    <header class="doc-header"><h1 id="title-${p.id}" tabindex="-1">${esc(p.title)}</h1><p class="doc-lead">${esc(p.summary)}</p>${codeLinks}
    <details class="doc-context"><summary>版本與使用界線 · ${version}</summary><p class="document-updated">更新 <time datetime="${updatedAt}">${updatedAtLabel}</time></p><p>${scope}。互動示例只在本頁運作，不連接 API 或修改產品資料；個別案例另標明重構與提案。</p></details></header>
    <section class="section-block chapter-example" aria-label="${esc(p.title)}示例">${index}<div class="demo">${visual[p.demo]}</div></section>
    ${renderRuntimeBridge(p.id)}${p.sections.map((s, n) => renderSection(p, s, n, allSectionVisuals)).join("")}
    <section class="section-block sources"><details><summary><h2 tabindex="-1" id="${p.id}--implementation">程式與規格對應</h2></summary><p>以下來源供核對；來源存在唔代表已符合規格，亦唔代表 App 已遷移。</p>${sources}</details></section>
    <nav class="pager" aria-label="相鄰文件">${i ? `<a href="#${pages[i - 1].id}"><small>上一章</small>${esc(pages[i - 1].title)}</a>` : "<span></span>"}${i < pages.length - 1 ? `<a href="#${pages[i + 1].id}"><small>下一章</small>${esc(pages[i + 1].title)}</a>` : "<span></span>"}</nav>
    <footer class="article-foot">Handbook ${version} · Runtime packages 0.1.0</footer></article>`;
}
function markdown(p, allSectionVisuals) {
  let out = `# ${p.title}\n\n${p.summary}\n\n> ${releaseLabel} · Handbook ${version} · 設計基準；PR / 工程 review 待完成，並非 runtime 全量遷移。\n> 更新：${updatedAtLabel}\n\n[互動示例](../${filename}#${p.id}) · [目錄](README.md)\n`;
  p.sections.forEach((s, n) => {
    out += `\n## ${s.title}\n\n${s.paragraphs.map((x) => `- ${x}`).join("\n")}\n`;
    if (allSectionVisuals[p.id]?.[n]) out += `\n[查看本節 UI 示例](../${filename}#${sectionId(p, n)})\n`;
    if (s.table)
      out += `\n| ${s.table.head.join(" | ")} |\n| ${s.table.head.map(() => "---").join(" | ")} |\n${s.table.rows.map((row) => `| ${row.map((x) => String(x).replaceAll("|", "\\|")).join(" | ")} |`).join("\n")}\n`;
    if(s.references?.length) out += '\n來源：'+s.references.map(r=>`[${r.title}](${r.url})`).join(' · ')+'\n';
  });
  const patterns = runtimePatterns.filter((pattern) => pattern.chapters.includes(p.id));
  if (patterns.length) out += "\n## 已抽出的真實元件\n\n先讀手冊規則；下列是 package-backed 示範，App 採用仍待逐頁驗證。其餘 Storybook 舊示例只作參考。\n\n" +
    patterns.map((pattern) => `- ${pattern.title} — [互動示例](${storybookUrl(pattern.story)}) · [原始碼](../../${pattern.source})`).join("\n") + "\n";
  out +=
    "\n## 程式與規格對應\n\n來源存在不代表已符合所有新規格；舊 Storybook 檔案是參考示例，請按 adoption checklist 逐項驗收。\n\n" +
    p.sources.map((x) => `- [${x}](../../${x})`).join("\n") +
    "\n";
  if (p.references?.length)
    out += "\n## 來源與案例證據\n\n" + p.references.map(r => `- [${r.title}](${r.url})${r.kind ? ` · ${r.kind}` : ""}`).join("\n") + "\n";
  if(p.status === 'industry-reference') out = out.replace('設計基準；PR / 工程 review 待完成，並非 runtime 全量遷移。','行業參考，非設計規範／App 能力承諾；採用前重新核實。');
  return out;
}
export async function buildHandbook() {
  const tokens = await json("spec/tokens.json");
  const map = await json("spec/icon-map.json");
  // Draft navigation-weight variant; never mutate the historical 1.75 base.
  const modules = Object.fromEntries(Object.entries(compileModuleIcons(
    await json("assets/icons/modules/source.json"),
  )).map(([key, svg]) => [key, svg.replace('stroke-width="1.75"', 'stroke-width="2.25"')]));
  const utility = {};
  for (const name of new Set([
    "mail",
    ...Object.values(map.actions),
    ...Object.values(map.modules).map((m) => m.lucide),
  ]))
    utility[name] = await read(`assets/icons/utility/${name}.svg`);
  const logo = (await read("assets/brand/chatdaddy-mark.svg"))
    .replace(/<\?xml[^>]*\?>/g, "")
    .replace(/\sid="[^"]*"/g, "");
  const { assets: channelAssets } = await loadChannelAssets(root);
  const anonymizedImage = `data:image/png;base64,${(await fs.readFile(path.join(root, "assets/case-studies/broadcast-reference-anonymized.png"))).toString("base64")}`;
  const { visuals: v14Demos, sectionVisuals: v14SectionVisuals } = v14Visuals(anonymizedImage);
  const visual = {
    ...demos({ tokens, modules, utility, logo, channelAssets }),
    ...flowDemos,
    "content-timing": contentTimingDemo,
    "broadcast-learning": broadcastLearningDemo,
    ...principleDemos,
    ...iconIdentityDemos({ modules, utility, logo, channelAssets }),
    ...v14Demos,
    ...adoptionDemos(esc),
    'transitions-reference': transitionsDemo(esc),
    'industry-whatsapp': industryDemo(esc),
    'motion-lab': `${v14Demos['motion-lab']}<p><a href="#transitions-reference">開啟 Motion Library · 分類、重播與實際程式碼 →</a></p>`,
  };
  const allSectionVisuals = {
    ...sectionVisuals,
    ...principleSectionVisuals,
    ...componentSectionVisuals,
    ...flowSectionVisuals,
    ...contentTimingSectionVisuals,
    ...broadcastLearningSectionVisuals,
    ...iconIdentitySectionVisuals({ modules, utility, logo, channelAssets }),
    ...v14SectionVisuals,
  };
  for (const p of pages) {
    if (!visual[p.demo]) throw new Error(`Missing visual example: ${p.id}`);
    for (const source of p.sources) await fs.access(path.join(root, source));
  }
  const articles = pages.map((p, i) => renderArticle(p, i, visual, allSectionVisuals)).join("");
  const data = JSON.stringify({
    systemName,
    version,
    updatedAt,
    ruleCodes,
    motionExamples,
    industryRecommendations,
    primarySections: primarySections.map(section => ({...section, firstPage:section.landing || pages.find(p => section.groups.includes(p.group)).id})),
    searchIndex: pages.flatMap((p) => [
      { title: p.title, chapter: p.title, group: p.group, anchor: p.id, text: `${p.summary} ${ruleCodes.filter((r) => r.chapter === p.id).map((r) => `${r.code} ${r.description}`).join(" ")}` },
      ...p.sections.map((s, n) => ({
        title: s.title, chapter: p.title, group: p.group, anchor: sectionId(p, n),
        text: [...s.paragraphs, ...(s.table ? [s.table.head.join(" · "), ...s.table.rows.map((row) => row.join(" · "))] : [])].join(" "),
      })),
      { title: "程式與規格對應", chapter: p.title, group: p.group, anchor: `${p.id}--implementation`, text: [...p.sources, ...(p.references || []).map((r) => r.title)].join(" ") },
      ...(runtimePatterns.some((pattern) => pattern.chapters.includes(p.id)) ? [{ title: "已抽出嘅真實元件", chapter: p.title, group: p.group, anchor: `${p.id}--live-code`, text: runtimePatterns.filter((pattern) => pattern.chapters.includes(p.id)).map((pattern) => `${pattern.title} ${pattern.description} ${pattern.code}`).join(" ") }] : []),
    ]),
    pages: pages.map((p) => ({
      id: p.id,
      group: p.group,
      title: p.title,
      search: JSON.stringify(p).toLocaleLowerCase(),
    })),
    modules,
    utility,
  }).replace(/</g, "\\u003c");
  const css = await read("handbook/src/site.css") + "\n" + await read("handbook/src/section-visuals.css") + "\n" + await read("handbook/src/product-section-visuals.css") + "\n" + await read("handbook/src/icon-identity-section-visuals.css") + "\n" + await read("handbook/src/technical-section-visuals.css") + "\n" + await read("handbook/src/principle-visuals.css") + "\n" + await read("handbook/src/principle-section-visuals.css") + "\n" + await read("handbook/src/component-section-visuals.css") + "\n" + await read("handbook/src/flow-patterns.css") + "\n" + await read("handbook/src/content-timing.css") + identitySurfaces.map(s =>
    `.surface-case[data-surface="${s.id}"],.surface-role-panel[data-surface="${s.id}"]{--surface-bg:${s.background};--surface-ink:${s.foreground};--logo-plate:${s.plate};}`
  ).join("\n") + "\n" + await read("handbook/src/v14.css");
  const readingCss = await read("handbook/src/reading-layout.css") + await read("handbook/src/library-ui.css");
  const font = (
    await fs.readFile(path.join(root, "assets/fonts/sora/Sora-variable.ttf"))
  ).toString("base64");
  const notices =
    (await read("THIRD_PARTY_NOTICES.md")) +
    "\n\nChannel artwork provenance\n" +
    (await read("assets/brand/channels/README.md")) +
    "\n\nSora font\n" +
    (await read("assets/fonts/sora/OFL.txt")).replace(/[ \t]+$/gm, "");
  const html = `<!doctype html><html lang="zh-Hant"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="light"><meta name="description" content="Product Design System 設計師工作手冊：原則、字體、版面、元件、互動、產品模式及工程對應。"><title>${systemName} · ${releaseLabel}</title><style>@font-face{font-family:Sora;src:url(data:font/ttf;base64,${font}) format('truetype');font-weight:100 800;font-style:normal;font-display:swap}${compileTokens(tokens)}${css}${readingCss}${await read("handbook/src/adoption.css")}</style></head><body><a class="skip" href="#title-start">跳到內容</a><header class="site-header"><a class="wordmark" href="#cover">${systemMark}<span><b>${shortName}</b><small>DESIGN SYSTEM · HANDBOOK</small></span></a><div class="header-actions"><div class="reading-mode-pref" role="group" aria-label="閱讀模式"><button type="button" data-reading-mode="brief" aria-pressed="true">精簡</button><button type="button" data-reading-mode="full" aria-pressed="false">詳細</button></div><button type="button" class="search-trigger" id="open-search" aria-haspopup="dialog" aria-controls="search-dialog"><span>搜尋全部規格</span><kbd>⌘ K</kbd></button><span class="release-label">${releaseLabel}<br>${version}</span><label class="motion-pref"><input type="checkbox" id="reduce-motion">減少動效</label><a class="header-link" href="${siteUrl}/lab/" target="_blank" rel="noopener">元件實驗室 ↗</a><a class="header-link" href="${repositoryUrl}" target="_blank" rel="noopener">GitHub ↗</a><button type="button" class="btn nav-trigger" id="open-nav" aria-haspopup="dialog">目錄</button></div></header><nav class="primary-sections" aria-label="Design System 主要分類">${primarySections.map(section => `<a data-primary-section="${section.id}" href="#${section.landing || pages.find(p => section.groups.includes(p.group)).id}">${section.label}</a>`).join("")}</nav><div class="site-shell"><aside class="sidebar"><label class="search-label" for="doc-search">搜尋規格 / SEARCH</label><input id="doc-search" type="search" placeholder="字體、hover、smart default…"><p class="search-status" id="search-status" role="status"></p><nav id="desktop-nav" aria-label="手冊章節">${nav()}</nav><div class="sidebar-footer">規則、示例與來源，同一入口。<br>Light mode · Fictional data</div></aside><div class="content-region"><main class="document" id="main">${articles}</main><aside class="page-toc"><b>ON THIS PAGE</b><nav id="page-toc-links" aria-label="本頁內容"></nav><button class="print-action" type="button" data-print>列印目前章節</button></aside></div></div><dialog id="search-dialog" aria-labelledby="search-title"><div class="search-dialog-head"><h2 id="search-title">搜尋手冊</h2><button type="button" class="btn secondary" id="close-search">關閉</button></div><label class="sr-only" for="global-search">搜尋全部章節及規格內容</label><input id="global-search" type="search" placeholder="搜尋章節、規則、案例或元件…" autocomplete="off"><p id="global-search-status" role="status"></p><div id="global-search-results" aria-label="搜尋結果"></div></dialog><dialog id="nav-dialog" aria-labelledby="nav-title"><div class="nav-close"><h2 id="nav-title">手冊目錄</h2><button class="btn secondary" id="close-nav" type="button">關閉</button></div><nav aria-label="手機手冊章節">${nav()}</nav></dialog><dialog id="confirm-dialog" aria-labelledby="confirm-title" aria-describedby="confirm-description"><h2 id="confirm-title">刪除 3 筆示例資料？</h2><p id="confirm-description">這是確認流程示例。正式產品必須交代是否可恢復；本示例不刪除任何資料。</p><div class="dialog-actions"><button class="btn secondary" type="button" id="cancel-confirm">取消</button><button class="btn danger" type="button" id="confirm-example">確認示例</button></div></dialog><dialog id="copy-dialog" aria-labelledby="copy-title"><h2 id="copy-title">手動複製 SVG</h2><p>瀏覽器未允許clipboard，請選取以下完整文字再複製。</p><label class="sr-only" for="copy-source">SVG 原始碼</label><textarea id="copy-source" class="copy-fallback" readonly></textarea><button type="button" id="close-copy" class="btn secondary">關閉</button></dialog><div class="toast" id="toast" hidden><p id="toast-text"></p><button id="close-toast" type="button" aria-label="關閉示例訊息">×</button></div><div class="sr-only" role="status" id="announcer"></div><noscript><style>.doc[hidden]{display:block!important}.page-toc{display:none}</style>JavaScript未啟用：全部文件可閱讀，互動示例及搜尋不可用。</noscript><!-- ${notices.replaceAll("--", "—")} --><script>const DATA=${data};\n${await read("handbook/src/app.js")}\n${await read("handbook/src/motion-library.js")}</script></body></html>`;
  const cleanHtml = html.replace(/[ \t]+$/gm, "");
  for (const [, source] of cleanHtml.matchAll(
    /<script\b[^>]*>([\s\S]*?)<\/script>/g,
  ))
    new Function(source);
  for (const dir of ["handbook/pages", "handbook/annotation-preview"])
    await fs.mkdir(path.join(root, dir), { recursive: true });
  for (const target of [
    `handbook/${filename}`,
    `handbook/annotation-preview/${filename}`,
  ])
    await fs.writeFile(path.join(root, target), cleanHtml);
  for (const p of pages)
    await fs.writeFile(
      path.join(root, `handbook/pages/${p.id}.md`),
      markdown(p, allSectionVisuals),
    );
  await fs.writeFile(
    path.join(root, "handbook/pages/README.md"),
    `# ${systemName} 設計師手冊\n\n${releaseLabel} · ${version} · ${pages.length} chapters · [互動版](../${filename})\n\n更新：${updatedAtLabel}\n\n${groups
      .map(
        (g) =>
          `## ${g}\n\n${pages
            .filter((p) => p.group === g)
            .map((p) => `- [${p.title}](${p.id}.md) — ${p.summary}`)
            .join("\n")}`,
      )
      .join("\n\n")}\n`,
  );
  await fs.writeFile(path.join(root, "handbook/agent-index.json"), JSON.stringify({
    schemaVersion: 1,
    primarySections,
    ruleCodes,
    version,
    updatedAt,
    timezone: "Asia/Hong_Kong",
    usage: "Read chapter rules and evidence before reusing a specimen. Example UI is fictional; a proposal does not mean App adoption.",
    chapters: pages.map((p) => ({
      id: p.id,
      title: p.title,
      group: p.group,
      summary: p.summary,
      ruleStatus: p.status === 'industry-reference' ? 'industry-reference-not-normative' : p.status === "proposal" ? "proposal" : p.id === "founder-note" ? "editorial" : "draft-specification",
      ...(p.checkedAt ? {checkedAt:p.checkedAt, claims:p.claims, requiresReverification:true} : {}),
      specimenStatus: "fictional-example",
      adoptionStatus: p.status === "proposal" ? "not-deployed-by-this-release" : "verify-app-separately",
      scenarios: p.scenarios || [],
      sources: p.sources,
      evidence: p.references || [],
      runtimePatterns: runtimePatterns.filter((pattern) => pattern.chapters.includes(p.id)).map((pattern) => ({ id: pattern.id, source: pattern.source, story: storybookUrl(pattern.story) })),
      htmlAnchor: `#${p.id}`,
      markdown: `pages/${p.id}.md`,
    })),
    caseStudies: caseStudies.map((study) => ({
      id: study.id,
      moduleChapter: study.module,
      job: study.job,
      stages: study.stages,
      baselineStatus: "source-based-reconstruction",
      afterStatus: "design-system-proposal",
      evidence: study.evidence,
    })),
  }, null, 2) + "\n");
  return { html: cleanHtml, pages, version };
}
if (
  process.argv[1] &&
  path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)
) {
  const { html, pages } = await buildHandbook();
  console.log(
    `Handbook ${version}: ${pages.length} chapters, ${Buffer.byteLength(html)} bytes.`,
  );
}
