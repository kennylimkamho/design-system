import { typeRoles } from "./model.mjs";
export const esc = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
const badge = (text, tone = "neutral") =>
  `<span class="badge ${tone}">${esc(text)}</span>`;
const button = (text, kind = "secondary", attr = "") =>
  `<button type="button" class="btn ${kind}" ${attr}>${text}</button>`;
const note = (text) => `<p class="demo-note">${text}</p>`;
const field = (id, label, value = "", extra = "") =>
  `<label class="field" for="${id}"><span>${label}</span><input id="${id}" value="${esc(value)}" ${extra}></label>`;
const stateGallery = () => {
  const cards = [
    ["Initial loading", "loading", '<div class="state-mini-skeleton"></div><div class="state-mini-skeleton short"></div><div class="state-mini-skeleton"></div><small>正在載入聯絡人…</small>'],
    ["First-use empty", "first-use", '<div class="state-mini-icon">＋</div><b>還沒有聯絡人</b><span class="state-mini-action">建立聯絡人</span>'],
    ["Filtered empty", "filtered", '<div class="state-mini-chip">VIP ×　Unassigned ×</div><b>沒有符合條件的資料</b><span class="state-mini-action outline">清除篩選</span>'],
    ["Retryable error", "error", '<div class="state-mini-alert">!　聯絡人未能載入</div><small>原有篩選仍保留</small><span class="state-mini-action outline">重試</span>'],
    ["No permission", "permission", '<div class="state-mini-icon">⌁</div><b>需要查看權限</b><small>請聯絡工作區管理員</small>'],
    ["Read-only", "readonly", '<div class="state-mini-row">Alex Chan <span>只可查看</span></div><small>沒有編輯權限，資料仍可讀</small>'],
    ["Partial / stale", "partial", '<div class="state-mini-row">已顯示 20 / 128 筆</div><small>最後更新：16:51 HKT</small><span class="state-mini-action outline">繼續載入</span>'],
    ["Disconnected", "disconnected", '<div class="state-mini-row">WhatsApp <span>已斷線</span></div><small>訊息會保留，請重新連結渠道</small><span class="state-mini-action outline">重新連結</span>'],
  ];
  return '<div class="state-gallery visual-state-gallery">' + cards.map(([title, kind, body]) => '<article class="state-card" data-state-kind="' + kind + '"><span class="visual-label">' + title + '</span><div class="state-mini-ui">' + body + '</div></article>').join('') + '</div><a class="text-link" href="#tables">到 Table 切換實際示例狀態 →</a>';
};
const tiles = (rows) =>
  `<div class="tiles">${rows.map(([a, b]) => `<div class="tile"><strong>${a}</strong><p>${b}</p></div>`).join("")}</div>`;
const sampleRows = `<div class="sample-row"><span class="avatar">AC</span><div><b>Alex Chan</b><small>alex@example.invalid</small></div>${badge("Active", "success")}</div><div class="sample-row"><span class="avatar lilac">陳</span><div><b>陳大文 · Hong Kong</b><small>客戶資料示例</small></div>${badge("Draft")}</div>`;
const head = (title, sub, action = "") =>
  `<div class="product-header"><div><h3>${title}</h3><p>${sub}</p></div>${action ? `<span class="mock-action">${action}</span>` : ""}</div>`;
export function demos({ tokens, modules, utility, logo, channelAssets }) {
  const icon = (name) => utility[name] || "";
  const shell = (area, secondary, body, narrow = false) =>
    `<div class="product-shell ${narrow ? "narrow" : ""}"><div class="product-rail" aria-label="示意 primary rail"><span class="brand-glyph">${logo}</span>${["inbox", "contacts", "automation", "settings"].map((name) => `<span role="img" aria-label="${name}" class="${name === area.toLowerCase() ? "current" : ""}">${modules[name]}</span>`).join("")}</div><div class="product-secondary"><b>${area}</b>${secondary.map((x, i) => `<span class="${i === 0 ? "current" : ""}">${x}</span>`).join("")}<small>Secondary navigation</small></div><div class="product-body">${body}</div></div>`;
  const switchControl = (id, label) =>
    `<label class="switch-field" for="${id}"><input type="checkbox" role="switch" id="${id}"><span class="switch-art" aria-hidden="true"></span><span>${label}</span></label>`;
  const stats = `<div class="metric-grid"><div><small>示例對話</small><strong>1,284</strong><span>本月 · 虛構資料</span></div><div><small>首次回覆</small><strong>4m 32s</strong><span>平均 · 非實際KPI</span></div><div><small>已解決</small><strong>86.2%</strong><span>分母：示例對話</span></div></div>`;
  const chosenModules = [
    ["integration", "Integration", "Connected apps"],
    ["ai", "AI", "Brain"],
    ["crm", "CRM", "Opportunity card"],
  ];
  const moduleSelectionPanel = (tone) => `<div class="module-selection-panel ${tone}"><span class="module-selection-surface">${tone === "dark" ? "DARK SURFACE" : "LIGHT SURFACE"} · 24px</span>${chosenModules.map(([name, label, meaning], index) => `<div class="module-selection-row ${index === 0 ? "is-current" : ""}"><span class="module-selection-art">${modules[name]}</span><span><b>${label}</b><small>${meaning}</small></span>${index === 0 ? '<em>選中示例</em>' : ""}</div>`).join("")}</div>`;
  const moduleSelectionPreview = `<section class="module-selection-preview" aria-label="使用者選定的三款 module icon 在淺色和深色側欄的示例"><div class="module-selection-heading"><div><b>已選方向 · Integration B / AI A / CRM B</b><p>新圖示只用於主導航；App logo、Channel 標誌及內頁 utility 不跟住改。</p></div><span>DESIGN SYSTEM REVIEW</span></div><div class="module-selection-grid">${moduleSelectionPanel("light")}${moduleSelectionPanel("dark")}</div></section>`;
  const chat = `<div class="chat-demo"><div class="chat-list"><b>Conversations</b><div class="current"><span class="avatar">AC</span><span><b>Alex Chan</b><small>可以查詢訂單嗎？</small></span>${badge("2", "blue")}</div><div><span class="avatar lilac">李</span><span><b>李小姐</b><small>謝謝你的幫忙</small></span></div></div><div class="chat-thread"><header><b>Alex Chan</b>${badge("Connected", "success")}</header><div class="bubble">可以幫我查詢訂單嗎？<time>2026年9月24日 16:51 · HKT</time></div><div class="bubble outgoing">可以，請提供訂單編號。<time>2026年9月24日 16:52 · HKT · 已送出</time></div><div class="composer"><span>Message</span><span>Internal note</span><p>回覆輸入區 · 此版面示意不發送訊息</p></div></div></div>`;
  return {
    start: `<div class="start-board"><div class="start-brand">${logo}<span>One system.<br><b>Every detail.</b></span></div><p>由頁面骨架，到一個 checkbox 的焦點狀態。</p><div class="start-links"><a href="#typography">01 <b>看字體與基礎</b> <span>Scale · Color · Space</span></a><a href="#layout">02 <b>選頁面結構</b> <span>Shell · Navigation · Responsive</span></a><a href="#tables">03 <b>查元件與狀態</b> <span>Rules · Examples · Source</span></a></div></div>`,
    principles: `<div class="comparison"><div class="do"><span class="eyebrow">DO / 清楚的一個任務</span><h3>匯入聯絡人</h3><p>先選擇檔案，再確認欄位及重複資料處理方式。</p><a class="btn primary" href="#special-fields">查看 upload 規格</a></div><div class="dont"><span class="eyebrow">AVOID / 競爭的操作</span><div class="mock-pills"><span>開始</span><span>更多</span><span>立即</span></div><p>沒有說明、三個主要按鈕、無法預期下一步。</p></div></div>`,
    colors: `<div class="swatch-grid">${Object.entries(tokens.semantic)
      .map(([name, v]) => {
        const key = v.replace(/[{}]/g, "").split(".");
        const color = tokens[key[0]]?.[key[1]] || v;
        return `<div class="color-card"><span style="background:${esc(color)}" aria-hidden="true"></span><b>${esc(name)}</b><code>${esc(color)}</code></div>`;
      })
      .join(
        "",
      )}</div>${note("這些色票由 spec/tokens.json 產生，不是另一份手寫 palette。")}`,
    typography: `<div class="demo-toolbar"><label>展示語言 <select id="type-language"><option value="mix">中英混排</option><option value="en">English</option><option value="zh">繁體中文</option></select></label><span class="badge blue">Sora 已內嵌 · CJK 系統 fallback</span></div><div class="type-specimens">${typeRoles.map(([role, size, weight], i) => `<div class="type-row"><div><b>${role}</b><small>${size}px · ${weight}</small></div><div class="type-text ${i === 8 ? "mono" : ""}" data-type-text style="font-size:${size.split(" / ")[0]}px;line-height:${size.split(" / ")[1]}px;font-weight:${weight.split(" / ")[0]}">清楚連結每次對話 · Hello, ChatDaddy.</div></div>`).join("")}</div><div class="number-specimen">1,234,567.89 <span>+852 6123 4567</span></div>`,
    spacing: `<div class="space-ladder">${[2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64].map((n) => `<div><code>${n}px</code><i style="width:${n * 3}px"></i><span>space-${n}</span></div>`).join("")}</div><div class="comparison"><div><b>Standard / 52px</b><div class="sample-list">${sampleRows}</div></div><div><b>Compact / 40px</b><div class="sample-list compact">${sampleRows}</div></div></div>`,
    surfaces: `<div class="surface-grid"><div class="surface-demo e0"><b>E0 · content</b><p>以空間與border組織資訊</p><code>Card · 12px</code></div><div class="surface-demo e1"><b>E1 · popover</b><p>短暫浮起的資訊</p><code>Control · 8px</code></div><div class="surface-demo e2"><b>E2 · dialog</b><p>有明確任務的浮層</p><code>Dialog · 16px</code></div></div>`,
    icons: `${moduleSelectionPreview}<label class="field" for="icon-query"><span>搜尋 icon 名稱</span><input type="search" id="icon-query" placeholder="例如 search、inbox、contacts"></label><p id="icon-count" role="status"></p><div class="icon-library">${[...Object.entries(modules).map(([name, svg]) => [name, svg, "module"]), ...Object.entries(utility).map(([name, svg]) => [name, svg, "utility"])].map(([name, svg, kind]) => `<div class="icon-tile" data-icon-name="${name}"><span class="icon-art">${svg}</span><b>${name}</b><small>${kind}</small><div>${button("Copy SVG", "quiet", `data-copy-icon="${kind}:${name}"`)}${button("↓", "quiet", `data-download-icon="${kind}:${name}" aria-label="下載 ${name} SVG"`)}</div></div>`).join("")}</div>`,
    content: tiles([
      ["建立聯絡人", "動詞＋對象，讓人知道下一步。"],
      ["2026年9月24日 16:51", "完整日期；頁面另標示香港時間。"],
      ["HKD 1,280.00", "Currency code、千位分隔、對齊小數位。"],
      ["— 未提供", "空值不是0，也不是loading。"],
    ]),
    layout: `${shell("Contacts", ["All contacts", "Lists", "Import history"], head("聯絡人", "Page title → description → primary action", "建立聯絡人") + '<div class="layout-annotation">Toolbar · query / filters / commands</div>' + sampleRows + '<div class="layout-annotation">Pagination · count / page controls</div>')}${note("版面示意：64px primary rail、208px secondary、24px content gutters；下表是完整候選尺寸。")}`,
    navigation: `<div class="nav-anatomy"><a href="#contacts">Primary → Contacts</a><a href="#automation">Primary → Automation</a><a href="#settings">Primary → Settings</a></div><div class="tabs-demo"><h3>同一個聯絡人 · Alex Chan</h3><div role="tablist" aria-label="聯絡人示例內容"><button type="button" role="tab" id="tab-overview" aria-controls="panel-overview" aria-selected="true">Overview</button><button type="button" role="tab" id="tab-activity" aria-controls="panel-activity" aria-selected="false" tabindex="-1">Activity</button><button type="button" role="tab" id="tab-notes" aria-controls="panel-notes" aria-selected="false" tabindex="-1">Notes</button></div><div role="tabpanel" tabindex="0" id="panel-overview" aria-labelledby="tab-overview">${sampleRows}</div><div role="tabpanel" tabindex="0" id="panel-activity" aria-labelledby="tab-activity" hidden><p>2026年9月24日 16:51 — 示例聯絡人已建立。</p><p>2026年9月24日 17:00 — 新增 Follow-up tag。</p></div><div role="tabpanel" tabindex="0" id="panel-notes" aria-labelledby="tab-notes" hidden><p>Notes 屬同一個聯絡人的內容，不是一個新的產品領域。</p></div></div>${note("上方 links 前往真正不同的手冊頁；下方 tabs 只切換同一物件的peer panels。試左右鍵／Home／End。")}`,
    responsive: `<div class="demo-toolbar"><label>版面示意模式 <select id="responsive-mode"><option value="wide">Wide</option><option value="medium">Medium</option><option value="narrow">Narrow</option></select></label><span>容器重排示意，非瀏覽器device emulation</span></div><div id="responsive-frame">${shell("Contacts", ["All contacts", "Lists"], head("聯絡人", "主要任務不改變", "建立") + sampleRows)}</div>`,
    buttons: `<div class="button-specimens"><div><small>Hierarchy</small>${button("建立聯絡人", "primary", 'data-demo-feedback="示例主要動作；未建立資料"')}${button("匯出", "secondary", 'data-demo-feedback="正式匯出必須先交代scope"')}${button("編輯", "quiet", 'data-demo-feedback="示例次要動作"')}${button("刪除", "danger", "data-open-dialog")}</div><div><small>States</small>${button("Disabled", "primary", "disabled")}${button("播放 pending → success", "primary", 'id="pending-demo"')}${button(icon("plus"), "secondary icon-button", 'aria-label="新增示例" data-demo-feedback="Icon button 亦有accessible name"')}</div><div><small>Density</small>${button("Standard · 40px", "secondary", 'data-demo-feedback="Standard 40px control"')}${button("Compact · 32px", "secondary small-btn", 'data-demo-feedback="Compact desktop；touch仍保留target"')}</div></div><p id="pending-status" role="status">純本地動效示例，不會儲存資料。</p>`,
    fields: `<form id="field-demo" novalidate class="form-example">${field("demo-name", "姓名（必填）", "", 'autocomplete="name" aria-describedby="name-help name-error"')}<small id="name-help">支援中文及其他Unicode姓名；示例只檢查非空。</small><p class="field-error" id="name-error" hidden>請輸入姓名。</p>${field("demo-readonly", "Read-only", "CD-001", "readonly")}${field("demo-disabled", "Disabled · 由管理員設定", "Customer", "disabled")}<label class="field" for="demo-notes"><span>補充說明</span><textarea id="demo-notes" rows="3" placeholder="可留空"></textarea></label><button class="btn primary" type="submit">驗證示例表單</button><p id="form-result" role="status"></p></form>`,
    selection: `<div class="comparison"><fieldset><legend>Checkbox · 可多選</legend><label class="check-label"><input type="checkbox"> 產品更新</label><label class="check-label"><input type="checkbox" checked> 客戶回覆</label><label class="check-label"><input type="checkbox" disabled> 管理員限定選項</label></fieldset><fieldset><legend>Radio · 互斥</legend><label class="check-label"><input type="radio" name="sample-scope" value="selected" checked> 已選取資料</label><label class="check-label"><input type="radio" name="sample-scope" value="filtered"> 符合條件的資料</label></fieldset></div>${switchControl("sample-switch", "接收示例通知")}${note("本地controls示例，不會改帳戶通知或匯出範圍。")}`,
    selectors: `<div class="selector-example">${field("tag-query", "搜尋並選取示例 tags", "", 'type="search" placeholder="搜尋 tag"')}<fieldset id="tag-options"><legend>可多選 tags</legend>${["VIP", "Follow-up", "New customer", "Hong Kong", "Trial"].map((x) => `<label class="check-label" data-tag-option="${x}"><input type="checkbox" value="${x}"> ${x}</label>`).join("")}</fieldset><p id="tags-no-result" hidden>沒有符合搜尋的 tags。</p><div id="selected-tags" aria-label="已選取 tags"></div></div>`,
    tables: `<div class="demo-toolbar"><label>資料狀態 <select id="table-state"><option value="loaded">Loaded</option><option value="loading">Loading</option><option value="empty">First-use empty</option><option value="error">Retryable error</option><option value="permission">No permission</option></select></label><label>密度 <select id="table-density"><option value="52">Standard 52px</option><option value="40">Compact 40px</option></select></label></div><div id="data-controls" class="demo-toolbar">${field("table-search", "搜尋示例聯絡人", "", 'type="search" placeholder="姓名或公司"')}<label>每頁 <select id="page-size"><option>3</option><option>6</option></select></label></div><div id="selection-count" role="status">未選取資料</div><div class="table-scroll" tabindex="0" role="region" aria-label="示例表格，可橫向捲動"><table id="demo-table"><caption>六筆虛構資料；排序只作用此完整本地示例。</caption><thead><tr><th><input type="checkbox" id="select-page" aria-label="選取目前頁面的示例資料"></th><th id="sort-column" aria-sort="ascending">${button("姓名 ↕", "quiet", 'id="sort-rows"')}</th><th>狀態</th><th>公司</th><th>更新 · HKT</th></tr></thead><tbody id="data-rows"></tbody></table></div><div id="table-state-view" hidden></div><div class="table-pagination">${button("上一頁", "secondary", 'id="page-prev"')}<span id="page-count" role="status"></span>${button("下一頁", "secondary", 'id="page-next"')}</div>`,
    filters: `<form id="filter-form" class="filter-demo">${field("filter-query", "姓名 query", "", 'type="search"')}<label class="field" for="filter-status"><span>狀態</span><select id="filter-status"><option value="">所有狀態</option><option>Active</option><option>Draft</option></select></label><button class="btn primary" type="submit">套用示例條件</button>${button("清除全部", "secondary", 'id="clear-filters"')}</form><p id="filter-summary" role="status">顯示所有示例資料；未套用條件。</p>`,
    status: `<div class="badge-wall">${[
      ["Connected", "success"],
      ["Connecting", "blue"],
      ["Disconnected", "danger"],
      ["Unknown", "neutral"],
      ["Running", "blue"],
      ["Completed", "success"],
      ["Failed", "danger"],
      ["Paused", "warning"],
      ["Draft", "neutral"],
      ["Active", "success"],
      ["Archived", "neutral"],
    ]
      .map((x) => badge(...x))
      .join(
        "",
      )}</div><hr><div class="row-wrap">${badge("VIP", "blue")}${badge("Follow-up", "neutral")}<span class="avatar">AC</span><span class="avatar lilac">陳</span><span class="avatar green">李</span><span>Tags 與 avatar，不是執行status。</span></div>`,
    cards: `<fieldset class="selectable-cards"><legend>Selectable cards · 用 radio 表達互斥</legend><label><input type="radio" name="view-style" checked><span><b>Standard workspace</b><small>一般資料管理，52px row。</small></span></label><label><input type="radio" name="view-style"><span><b>Compact workspace</b><small>高頻掃描，40px row。</small></span></label></fieldset>${note("這裡只展示選取外觀，不改已確認的預設density。")}`,
    overlays: `<div class="overlay-stage"><div><span class="eyebrow">CONTEXT STAYS VISIBLE</span><h3>在原任務上，完成一個短決定。</h3><p>示例可測 Escape、cancel、focus return；不刪除資料。</p>${button("開啟 confirmation", "danger", "data-open-dialog")}</div><div class="dialog-schematic"><b>清楚的標題</b><span>具體影響與範圍</span><div><i>取消</i><i>確認動作</i></div></div></div>`,
    feedback: `<div class="banner warning"><b>示例：連線需要重新授權</b><p>訊息仍保留；完成授權後可繼續。</p><a href="#channels">查看 channel 規格 →</a></div><div class="row-wrap">${button("播放成功 toast", "primary", 'data-demo-feedback="示例完成。未修改任何App資料。"')}${button("播放錯誤 toast", "secondary", 'data-demo-feedback="示例：未能儲存，輸入仍保留。請重試。"')}</div>`,
    states: stateGallery(),
    "special-fields": `<div class="form-example"><div class="phone-example"><label class="field" for="country-example"><span>國家／國碼 · 示例</span><select id="country-example"><option>香港 +852</option><option>Malaysia +60</option></select></label><label class="field" for="phone-example"><span>電話號碼 · 示例</span><input id="phone-example" type="tel" autocomplete="tel-national" placeholder="6123 4567"></label></div><label class="upload-zone" for="file-example"><b>選擇一個示例檔案</b><span>本地只顯示檔名，不讀取／上傳內容。</span><input id="file-example" type="file"></label><p id="file-result" role="status"></p></div>`,
    contacts:
      shell(
        "Contacts",
        ["All contacts", "Lists", "Import history"],
        head("聯絡人", "所有聯絡人 · 虛構版面示例", "建立聯絡人") +
          '<div class="mock-toolbar"><span>搜尋聯絡人…</span><span>Filters · 2</span><span>匯出</span></div>' +
          sampleRows +
          '<div class="sample-row"><span class="avatar green">BL</span><div><b>Bella Lee</b><small>VIP · Follow-up</small></div>' +
          badge("Active", "success") +
          '</div><div class="mock-footer">1–3 of 3 · 明確資料範圍</div>',
      ) +
      note(
        "完整Contacts流程可配合 Table／Fields／Selectors示例驗收；此圖是布局示意。",
      ),
    inbox:
      shell(
        "Inbox",
        [
          "All",
          "Unread · 12",
          "Mine · 4",
          "Unassigned",
          "Channels",
          "Assignees",
        ],
        chat,
      ) +
      note(
        "訊息與身份均為虛構；完整日期、sender、delivery狀態須跟實際channel能力。",
      ),
    automation:
      shell(
        "Automation",
        ["Flows", "Keyword replies", "Run history"],
        head("Welcome flow", "Draft · 示例編輯器", "Publish") +
          '<div class="editor-grid"><div class="canvas-grid"><div class="flow-node">Trigger<br><b>新聯絡人</b></div><div class="connector">↓</div><div class="flow-node active">Action<br><b>傳送歡迎訊息</b></div><div class="connector">↓</div><div class="flow-node">Condition<br><b>是否收到回覆？</b></div></div><aside class="inspector"><b>Context inspector</b><span>Selected node</span><div class="mock-field">訊息內容…</div><small>保留未儲存變更</small></aside></div>',
      ) +
      note(
        "流程邏輯示意，非可執行editor。Inspector與canvas的scroll/unsaved contract需要產品實作。",
      ),
    settings: shell(
      "Settings",
      ["Profile", "Team", "Notifications", "Billing"],
      head("個人設定", "閱讀寬度有上限，欄位依相關性分組。") +
        '<div class="mock-form"><div><b>姓名</b><span>Alex Chan</span></div><div><b>Email</b><span>alex@example.invalid</span></div><hr><b>通知偏好</b><p>每個設定交代影響的使用者及生效時間。</p><span class="mock-action">儲存變更</span></div>',
    ),
    analytics: shell(
      "Analytics",
      ["Overview", "Conversations", "Team performance"],
      head("總覽", "2026年9月 · 香港時間 · 虛構資料") +
        stats +
        '<div class="chart-demo"><b>示例對話量 · 最近7日</b><div class="bar-chart" role="img" aria-label="虛構每日對話數：72, 110, 94, 136, 124, 158, 144">' +
        [72, 110, 94, 136, 124, 158, 144]
          .map(
            (n, i) =>
              `<div><span>${n}</span><i style="height:${n}px"></i><small>${18 + i} Sep</small></div>`,
          )
          .join("") +
        "</div></div>",
    ),
    channels: shell(
      "Channels",
      ["Connected channels", "Connection history"],
      head("Channels", "平台身份與連線狀態分開", "連接 channel") +
        `<div class="sample-row"><span class="avatar channel-avatar"><img src="${channelAssets.whatsapp}" alt="" width="26" height="26"></span><div><b>Customer service</b><small>WhatsApp Business · Coexistence · 示例帳戶</small></div>${badge("Connected", "success")}</div><div class="sample-row"><span class="avatar channel-avatar"><img src="${channelAssets.whatsapp}" alt="" width="26" height="26"></span><div><b>Sales</b><small>WhatsApp Business Platform · Cloud API · 示例帳戶</small></div>${badge("Disconnected", "danger")}</div><div class="banner warning">Sales 需要重新授權；保留完整渠道模式，重新連結操作與原因應在同一區域。</div>`,
    ),
    login: `<div class="login-layout"><div class="login-form-visual">${logo}<h3>歡迎回來</h3><p>表單永遠先於品牌故事。</p><div class="mock-field">電話號碼</div><div class="mock-field">密碼</div><span class="mock-action">登入</span><p class="small">註冊 · 忘記密碼</p></div><div class="login-story"><span class="eyebrow">CHATDADDY</span><h3>讓每一次對話，<br>拉近距離。</h3><p>可選故事區域<br>手機不搶表單空間</p></div></div>`,
    motion: `<div class="motion-playground"><div><span class="eyebrow">PRESS → PENDING → RESULT</span><h3>回應每一下，而不是一直動。</h3>${button("播放示例儲存動效", "primary", 'id="motion-save"')}<p id="motion-result" role="status">模擬600ms等待；正式產品必須等待API。</p></div><div>${switchControl("motion-switch", "開啟示例通知")}<details class="animated-details"><summary>展開互動細節</summary><p>Chevron與內容提供一次短回饋。關閉後不保留可聚焦的隱藏controls。</p></details></div></div>`,
    recipes: `<div class="recipe-grid"><div><h3>Selection</h3><label class="check-label animated-check"><input type="checkbox"> 選取示例資料</label></div><div><h3>Disclosure</h3><details class="animated-details"><summary>查看次要內容</summary><p>短暫reveal，不改主要閱讀位置。</p></details></div><div><h3>Feedback</h3>${button("試 toast", "secondary", 'data-demo-feedback="Micro feedback · 一次、清楚、可關閉。"')}</div><div><h3>Module accent</h3><a class="large-module" href="#icons" aria-label="查看module icons">${modules.automation}</a></div></div>`,
    accessibility: `<div class="accessibility-route"><span>Tab</span><i>→</i><span>Focus</span><i>→</i><span>Action</span><i>→</i><span>Feedback</span></div>${tiles(
      [
        ["Keyboard", "用Tab進入示例，再試Enter／Space／Escape。"],
        ["Zoom / touch", "390px與200% zoom；主要controls不裁切。"],
        ["Reduced motion", "頁首開關與OS設定均可減少動效。"],
      ],
    )}`,
    implementation: `<div class="code-map"><div><code>handbook/src</code><b>設計規則＋示例</b></div><span>→</span><div><code>packages/*</code><b>實作＋API</b></div><span>→</span><div><code>apps/storybook</code><b>元件驗收</b></div></div><div class="banner"><b>目前：手冊擴充，不是App全量遷移。</b><p>字級、radius、navigation尺寸的候選差異需透過adapter／migration PR落地。</p></div>`,
    handoff: `<fieldset class="handoff-checks"><legend>你的交付是否足夠完整？（本地自查，不會提交）</legend>${["我選了正確page family與layout", "我列出全部主要狀態", "我交代資料與操作scope", "我檢查keyboard、touch與reduced motion", "我連到實際元件／標記缺口", "我記錄spec版本、例外及未決事項"].map((x, i) => `<label class="check-label"><input type="checkbox" data-handoff-check> ${x}</label>`).join("")}</fieldset><p id="handoff-progress" role="status">0 / 6 項已自查</p>`,
  };
}
