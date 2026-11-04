// Integration API: componentSectionVisuals[page.id][zeroBasedSectionIndex] is a
// standalone HTML string rooted at .section-visual. Insert it immediately after
// that section's heading. Sample data and product actions are static: these
// specimens make no network or app writes. Native controls are used only when
// their local behavior is part of the demonstration.
const specimen = (name, body) =>
  `<div class="section-visual" role="group" aria-label="${name}"><div class="sv-canvas">${body}</div></div>`;

const label = (text) => `<div class="sv-label">${text}</div>`;
const button = (text, kind = "") => `<span class="sv-btn ${kind}">${text}</span>`;
const badge = (text, kind = "") => `<span class="sv-badge ${kind}">${text}</span>`;
const removableTag = (name) => `<span class="sv-removable-chip"><span class="sv-chip-present">${name}</span><span class="sv-chip-removed">已移除 ${name}</span><label class="sv-tag-toggle"><input type="checkbox" checked aria-label="保留 ${name} 標籤"><span class="sv-tag-remove-icon" aria-hidden="true">×</span><span class="sv-tag-restore-icon" aria-hidden="true">↶</span></label></span>`;
const panel = (body, kind = "") => `<div class="sv-panel ${kind}">${body}</div>`;
const plusIcon = `<svg viewBox="0 0 20 20" aria-hidden="true" focusable="false"><path d="M10 3v14M3 10h14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`;
const exportIcon = `<svg viewBox="0 0 20 20" aria-hidden="true" focusable="false"><path d="M10 3v9m0 0-3-3m3 3 3-3M4 13v3h12v-3" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

export const componentSectionVisuals = {
  buttons: {
    0: specimen("按鈕層級：聯絡人操作列", `
      ${label("CONTACTS / ACTION HIERARCHY")}
      ${panel(`<div class="sv-bar sv-between"><div><strong>聯絡人</strong><span class="sv-muted sv-block">共 248 位</span></div><div class="sv-actions">${button("匯出", "sv-outline")}${button("＋ 建立聯絡人", "sv-primary")}</div></div>
        <div class="sv-divider"></div><div class="sv-bar sv-between"><span class="sv-person"><span class="sv-avatar">CL</span><span><strong>陳樂怡</strong><small>chen@example.com</small></span></span><div class="sv-actions">${button("編輯", "sv-text")}${button("刪除此聯絡人", "sv-danger")}</div></div>`)}`),
    1: specimen("按鈕尺寸與內部間距", `
      ${label("CONTROL SIZING / SCALE")}
      <div class="sv-size-grid">
        ${panel(`<span class="sv-kicker">STANDARD · 40px DESKTOP</span><div class="sv-measure-line"><span class="sv-measure">16</span>${button(`${plusIcon}<span>新增對話</span>`, "sv-primary sv-standard")}<span class="sv-measure">16</span></div><div class="sv-ruler">20px icon <span>8px gap</span> 14/22 label</div>`)}
        ${panel(`<span class="sv-kicker">COMPACT · 32px DESKTOP</span><div class="sv-measure-line"><span class="sv-measure">12</span>${button(`${exportIcon}<span>匯出 CSV</span>`, "sv-outline sv-compact")}<span class="sv-measure">12</span></div><div class="sv-ruler">16px icon <span>8px gap</span> 14/22 label</div>`)}
      </div><div class="sv-footnote">靜態尺寸標本；觸控版需保留至少 44px 可點範圍。</div>`),
    2: specimen("按鈕狀態矩陣", `
      ${label("ACTION STATES / SAVE")}
      <div class="sv-state-grid sv-four">
        ${panel(`<span class="sv-kicker">DEFAULT</span>${button("儲存變更", "sv-primary")}`)}
        ${panel(`<span class="sv-kicker">HOVER</span>${button("儲存變更", "sv-primary sv-hover")}`)}
        ${panel(`<span class="sv-kicker">PRESSED</span>${button("儲存變更", "sv-primary sv-pressed")}`)}
        ${panel(`<span class="sv-kicker">FOCUS VISIBLE</span>${button("儲存變更", "sv-primary sv-focus")}`)}
        ${panel(`<span class="sv-kicker">DISABLED</span><button type="button" class="sv-btn sv-primary" disabled>儲存變更</button><small>沒有未儲存的變更</small>`)}
        ${panel(`<span class="sv-kicker">PENDING</span>${button("<span class=\"sv-spinner\" aria-hidden=\"true\"></span> 正在儲存", "sv-primary sv-pending")}`)}
        ${panel(`<span class="sv-kicker">SUCCESS</span>${badge("✓ 已儲存", "sv-good")}`)}
        ${panel(`<span class="sv-kicker">FAILED</span>${badge("! 未能儲存", "sv-bad")}${button("重試", "sv-outline")}`)}
      </div>`),
    3: specimen("鍵盤操作與實作路徑", `
      ${label("KEYBOARD / IMPLEMENTATION")}
      <div class="sv-two-col">
        ${panel(`<span class="sv-kicker">FOCUS TARGET</span><button class="sv-real-button" type="button">預覽變更</button><div class="sv-key-row"><kbd>Tab</kbd><span>移至按鈕</span><kbd>Enter</kbd><kbd>Space</kbd><span>啟動</span></div><small>此標本不提交資料。</small>`)}
        ${panel(`<span class="sv-kicker">SINGLE SOURCE</span><div class="sv-flow"><span>MUI Button</span><b>→</b><span>theme / variant</span><b>→</b><span>Storybook</span></div><div class="sv-mini-code">type="button"　·　disabled　·　focus-visible</div>`)}
      </div>`),
  },
  fields: {
    0: specimen("文字欄位構造", `
      ${label("FIELD ANATOMY / CREATE CONTACT")}
      ${panel(`<div class="sv-form-narrow"><div class="sv-field"><label for="sv-field-name">聯絡人姓名 <span class="sv-required">必填</span></label><input id="sv-field-name" value="陳樂怡" required aria-describedby="sv-field-name-help"><small id="sv-field-name-help">請填寫顯示於聯絡人清單的名稱。</small></div><div class="sv-field"><label for="sv-field-notes">備註</label><textarea id="sv-field-notes" rows="3">偏好以 WhatsApp 聯絡</textarea></div></div>
        <div class="sv-anatomy-rail"><span>1　持續可見的 label</span><span>2　40px input / 12px inset</span><span>3　獨立 helper 行</span></div>`)}`),
    1: specimen("文字欄位七種狀態", `
      ${label("EMAIL FIELD / STATE MATRIX")}
      <div class="sv-field-matrix">
        <div class="sv-field"><label for="sv-f-empty">Empty</label><input id="sv-f-empty" type="email" placeholder="name@example.com"></div>
        <div class="sv-field"><label for="sv-f-filled">Filled</label><input id="sv-f-filled" type="email" value="hello@chatdaddy.io"></div>
        <div class="sv-field"><label for="sv-f-hover">Hover</label><input id="sv-f-hover" class="sv-hover-field" type="email" value="hello@chatdaddy.io"></div>
        <div class="sv-field"><label for="sv-f-focus">Focus</label><input id="sv-f-focus" class="sv-focus-field" type="email" value="hello@chatdaddy.io"></div>
        <div class="sv-field"><span class="sv-field-label">Invalid · 靜態快照</span><span class="sv-faux-input sv-faux-invalid">hello@</span><small class="sv-error">請輸入完整電郵地址。</small></div>
        <div class="sv-field"><label for="sv-f-disabled">Disabled</label><input id="sv-f-disabled" type="email" value="帳戶管理員限定" disabled><small>目前沒有編輯權限</small></div>
        <div class="sv-field"><label for="sv-f-readonly">Read-only</label><input id="sv-f-readonly" type="email" value="hello@chatdaddy.io" readonly><small>可選取及複製</small></div>
      </div>`),
    2: specimen("表單錯誤與欄位層級", `
      ${label("ONE-COLUMN FORM / ERROR RECOVERY")}
      ${panel(`<div class="sv-form-narrow"><div class="sv-error-summary"><strong>靜態錯誤狀態 · 1 個欄位需要修正</strong><span>正式表單的 summary 應連到可編輯欄位。</span></div><div class="sv-field"><span class="sv-field-label">姓名</span><span class="sv-faux-input">陳樂怡</span></div><div class="sv-field"><span class="sv-field-label">電郵地址</span><span class="sv-faux-input sv-faux-invalid">lokk@</span><small class="sv-error">請輸入完整電郵地址。</small></div><div class="sv-actions">${button("取消", "sv-outline")}${button("儲存聯絡人", "sv-primary")}</div></div>`)}`),
  },
  selection: {
    0: specimen("三種選取控制的實際用途", `
      ${label("CHOOSE BY TASK")}
      <div class="sv-three-col">
        ${panel(`<fieldset class="sv-choice"><legend>加入標籤 · 可多選</legend><label><input type="checkbox" checked> VIP</label><label><input type="checkbox"> 需跟進</label></fieldset>`)}
        ${panel(`<fieldset class="sv-choice"><legend>匯出範圍 · 選一個</legend><label><input type="radio" name="sv-export-scope" checked> 目前頁面</label><label><input type="radio" name="sv-export-scope"> 全部結果</label></fieldset>`)}
        ${panel(`<div class="sv-choice"><strong>接收通知</strong><label class="sv-switch-line"><input type="checkbox" role="switch" checked><span>啟用新對話通知</span></label><small>本地可切換；不更改設定</small></div>`)}
      </div>`),
    1: specimen("選取控制尺寸與整行標籤", `
      ${label("44px TARGET / 18–20px CONTROL")}
      ${panel(`<fieldset class="sv-choice sv-choice-wide"><legend>對話通知</legend><label><input type="checkbox" checked><span><strong>電郵摘要</strong><small>每日一次寄送未處理對話</small></span><em>44px</em></label><label><input type="checkbox"><span><strong>即時提醒</strong><small>有新對話時通知我</small></span><em>44px</em></label></fieldset>`)}`),
    2: specimen("部分選取與設定提交狀態", `
      ${label("PARTIAL SELECTION / ROLLBACK")}
      <div class="sv-two-col">
        ${panel(`<span class="sv-kicker">CURRENT PAGE · 3 / 6</span><div class="sv-select-bar"><span class="sv-mixed" role="img" aria-label="部分選取">−</span><strong>已選取 3 位聯絡人</strong>${button("加入標籤", "sv-outline")}</div><div class="sv-mini-rows"><span>✓　陳樂怡</span><span>✓　王文俊</span><span>□　李美琪</span></div>`)}
        ${panel(`<span class="sv-kicker">SETTING UPDATE</span><div class="sv-bar sv-between"><strong>接收通知</strong>${badge("更新失敗 · 已恢復關閉", "sv-bad")}</div><div class="sv-switch-off" aria-hidden="true"><i></i></div><small>連線中斷；請重試。</small><label class="sv-check-row"><input type="checkbox"> 我同意接收產品資訊（可選）</label>`)}
      </div>`),
  },
  selectors: {
    0: specimen("選擇器模式比較", `
      ${label("SELECTOR / DATA SHAPE")}
      <div class="sv-three-col">
        ${panel(`<span class="sv-kicker">4 個固定渠道</span><label class="sv-field" for="sv-channel-select">渠道<select id="sv-channel-select"><option>WhatsApp</option><option>Instagram</option><option>Messenger</option><option>Web chat</option></select></label>`)}
        ${panel(`<span class="sv-kicker">團隊成員 · 可搜尋模式</span><span class="sv-field-label">指派給</span><span class="sv-faux-input">⌕　搜尋姓名或電郵</span><div class="sv-person sv-mini"><span class="sv-avatar">CL</span><span>陳樂怡<small>Sales team</small></span></div>`)}
        ${panel(`<span class="sv-kicker">多個分類 · 靜態快照</span><strong>標籤</strong><div class="sv-chip-row">${badge("VIP", "sv-blue")}${badge("待回覆", "sv-blue")}</div>${button("＋ 加入標籤", "sv-outline")}`)}
      </div>`),
    1: specimen("搜尋選擇器面板構造", `
      ${label("ASSIGNEE POPOVER / OPEN STATE")}
      <div class="sv-popover-stage"><details class="sv-selector-demo" open><summary>指派給 · 本地選項</summary>
        ${panel(`<span class="sv-field-label">搜尋成員 · 靜態佈局</span><span class="sv-faux-input">⌕　姓名或電郵</span><fieldset class="sv-selector-options"><legend>示例成員 · 單選</legend><label class="sv-option"><input type="radio" name="sv-assignee-preview" checked><span class="sv-avatar" aria-hidden="true">CL</span><span><strong>陳樂怡</strong><small>Sales · chen@team.example</small></span></label><label class="sv-option"><input type="radio" name="sv-assignee-preview"><span class="sv-avatar sv-lilac" aria-hidden="true">KY</span><span><strong>楊家欣</strong><small>Support · kay@team.example</small></span></label><label class="sv-option"><input type="radio" name="sv-assignee-preview"><span class="sv-avatar sv-green" aria-hidden="true">WT</span><span><strong>黃天恩</strong><small>Support · wong@team.example</small></span></label></fieldset><div class="sv-static-note">本地可展開和單選；搜尋、遠端結果及套用至產品資料須正式 selector 實作。</div>`, "sv-popover")}</details></div>`),
    2: specimen("選擇器資料狀態與鍵盤路徑", `
      ${label("QUERY = “陳” / RESULT STATES")}
      <div class="sv-state-grid sv-three">
        ${panel(`<span class="sv-kicker">LOADING</span><div class="sv-skeleton sv-w80"></div><div class="sv-skeleton sv-w60"></div><small>正在搜尋成員…</small>`)}
        ${panel(`<span class="sv-kicker">NO MATCH</span><strong>沒有符合「陳」的成員</strong><small>可嘗試完整姓名或電郵</small>`)}
        ${panel(`<span class="sv-kicker">ERROR</span><strong>搜尋暫時失敗</strong><small>已保留查詢「陳」</small>${button("重試", "sv-outline")}`)}
      </div><div class="sv-static-note">這些是 loading、無結果及錯誤的靜態快照；查詢、選項鍵盤導覽和 Escape 返回 trigger 須正式 selector 實作。</div>`),
  },
  tables: {
    0: specimen("資料表格的完整頁面構造", `
      ${label("CONTACTS / PAGE ANATOMY")}
      ${panel(`<div class="sv-bar sv-between"><div><span class="sv-step">01</span><strong>聯絡人</strong><small class="sv-inline-small">248 位</small></div>${button("＋ 建立聯絡人", "sv-primary")}</div><div class="sv-toolbar"><span class="sv-step">02</span><span class="sv-searchbox">⌕　搜尋姓名或電話</span>${button("篩選 2", "sv-outline")}</div><div class="sv-selection-strip"><span class="sv-step">03</span>已選取 2 位　${button("加入標籤", "sv-outline sv-compact")}</div><div class="sv-table-wrap"><table class="sv-table"><caption>聯絡人清單示意</caption><thead><tr><th scope="col">選取</th><th scope="col">聯絡人</th><th scope="col">狀態</th><th scope="col">最近活動</th><th scope="col">操作</th></tr></thead><tbody><tr><td>☑</td><td><strong>陳樂怡</strong><small>chen@example.com</small></td><td>${badge("● 活躍", "sv-good")}</td><td>2026-09-24 14:25 HKT</td><td>⋯</td></tr><tr><td>□</td><td><strong>王文俊</strong><small>WhatsApp</small></td><td>${badge("草稿", "sv-neutral")}</td><td>2026-09-23 09:10 HKT</td><td>⋯</td></tr></tbody></table></div><div class="sv-bar sv-between sv-table-foot"><span class="sv-step">04</span><span>第 1–20 位 / 共 248 位</span><span>‹　1　2　3　›</span></div>`)}`),
    1: specimen("資料欄位寬度與對齊", `
      ${label("SCANNABLE COLUMNS / REAL VALUES")}
      ${panel(`<div class="sv-table-wrap"><table class="sv-table sv-wide-table"><caption>訂單欄位對齊示意</caption><thead><tr><th scope="col">選取</th><th scope="col">聯絡人</th><th scope="col">標籤</th><th scope="col">狀態</th><th scope="col">建立時間</th><th scope="col" class="sv-numeric">金額</th><th scope="col">操作</th></tr></thead><tbody><tr><td>□</td><td><strong>陳樂怡</strong><small>chen@example.com</small></td><td>${badge("VIP", "sv-blue")} ${badge("+2", "sv-neutral")}</td><td>${badge("● 已付款", "sv-good")}</td><td>2026-09-24<br>14:25 HKT</td><td class="sv-numeric">HKD 1,280.00</td><td>⋯</td></tr><tr><td>□</td><td><strong>王文俊</strong><small>WhatsApp · +852…</small></td><td>${badge("新客戶", "sv-neutral")}</td><td>${badge("◌ 處理中", "sv-warn")}</td><td>2026-09-22<br>09:10 HKT</td><td class="sv-numeric">HKD 680.00</td><td>⋯</td></tr></tbody></table></div>`)}`),
    2: specimen("排序、選取與分頁控制", `
      ${label("TABLE CONTROLS / PAGE SCOPE")}
      ${panel(`<div class="sv-bar sv-between"><strong>本頁已選取 2 / 20 位 · 靜態快照</strong>${button("選取所有符合條件的 248 位", "sv-text")}</div><div class="sv-table-wrap"><table class="sv-table"><caption>依最近活動排序的聯絡人；示意顯示本頁 20 筆中的 2 筆</caption><thead><tr><th scope="col"><span class="sv-mixed" role="img" aria-label="本頁部分選取">−</span></th><th scope="col">聯絡人</th><th scope="col" aria-sort="descending">最近活動 ↓</th><th scope="col">狀態</th></tr></thead><tbody><tr><td><span class="sv-static-check" role="img" aria-label="陳樂怡已選取">☑</span></td><td>陳樂怡</td><td>2026-09-24 14:25 HKT</td><td>活躍</td></tr><tr><td><span class="sv-static-check" role="img" aria-label="王文俊已選取">☑</span></td><td>王文俊</td><td>2026-09-23 09:10 HKT</td><td>活躍</td></tr></tbody></table></div><div class="sv-bar sv-between sv-table-foot"><span>每頁 20 筆</span><span>1–20 / 248</span><span class="sv-pagination">‹　<strong>1</strong>　2　3　›</span></div><div class="sv-static-note">本圖示範計數、混合選取與分頁標示；正式表格勾選時必須同步更新選取數及表頭狀態。</div>`)}`),
    3: specimen("表格必要狀態矩陣", `
      ${label("SAME TABLE / DIFFERENT DATA CONDITIONS")}
      <div class="sv-state-grid sv-three">
        ${panel(`<span class="sv-kicker">INITIAL LOADING</span><div class="sv-skeleton sv-w90"></div><div class="sv-skeleton sv-w70"></div><div class="sv-skeleton sv-w80"></div>`)}
        ${panel(`<span class="sv-kicker">FIRST USE</span><strong>尚未有聯絡人</strong><small>開始建立第一位聯絡人</small>${button("＋ 建立", "sv-primary sv-compact")}`)}
        ${panel(`<span class="sv-kicker">FILTERED EMPTY</span><strong>沒有符合條件的聯絡人</strong><small>VIP · WhatsApp</small>${button("清除篩選", "sv-outline sv-compact")}`)}
        ${panel(`<span class="sv-kicker">ERROR</span><strong>暫時無法載入清單</strong><small>搜尋及篩選條件已保留</small>${button("重試", "sv-outline sv-compact")}`)}
        ${panel(`<span class="sv-kicker">READ-ONLY</span><strong>248 位聯絡人</strong><small>可檢視 · 沒有編輯權限</small>`)}
        ${panel(`<span class="sv-kicker">NO PERMISSION</span><strong>無法檢視聯絡人</strong><small>請聯絡工作區管理員</small>`)}
      </div>`),
    4: specimen("窄屏表格與優先資訊卡", `
      ${label("MOBILE / TWO VALID PRESENTATIONS")}
      <div class="sv-mobile-pair">
        ${panel(`<span class="sv-kicker">COMPARE · HORIZONTAL TABLE</span><div class="sv-narrow-table" role="region" aria-label="可水平捲動的聯絡人比較表" tabindex="0"><table class="sv-table sv-wide-table"><caption>比較聯絡人</caption><thead><tr><th>姓名</th><th>狀態</th><th>最近活動</th><th>負責人</th><th>操作</th></tr></thead><tbody><tr><td>陳樂怡</td><td>活躍</td><td>2026-09-24 14:25 HKT</td><td>Kim</td><td><button type="button" class="sv-btn sv-outline sv-compact" data-demo-feedback="本地表格示例：正式產品會開啟聯絡人詳情；沒有讀取帳戶資料。">查看詳情</button></td></tr></tbody></table></div>`)}
        ${panel(`<span class="sv-kicker">SCAN · PRIORITY CARD</span><div class="sv-priority-card"><div class="sv-bar sv-between"><strong>陳樂怡</strong>${badge("● 活躍", "sv-good")}</div><small>最近活動　2026-09-24 14:25 HKT</small><div class="sv-bar sv-between"><small>負責人　Kim</small><button type="button" class="sv-btn sv-outline sv-compact" data-demo-feedback="本地卡片示例：正式產品會開啟聯絡人詳情；沒有讀取帳戶資料。">查看詳情</button></div></div>`)}
      </div>`),
  },
  filters: {
    0: specimen("搜尋、篩選與已儲存檢視的不同層級", `
      ${label("INBOX / ACTIVE VIEW")}
      ${panel(`<div class="sv-bar sv-between"><div><strong>我的未回覆對話</strong> ${badge("已修改", "sv-warn")}</div>${button("儲存為新檢視", "sv-outline")}</div><div class="sv-toolbar"><span class="sv-searchbox">⌕　搜尋「訂單」</span>${button("篩選 2", "sv-outline")}</div><div class="sv-chip-row">${badge("渠道：WhatsApp　×", "sv-blue")}${badge("負責人：我　×", "sv-blue")}<span class="sv-muted">清除全部條件</span></div><div class="sv-result-strip">顯示 18 筆對話 · 檢視條件未覆寫</div>`)}`),
    1: specimen("搜尋與活躍篩選的版面", `
      ${label("TOOLBAR / WRAPPING CONDITIONS")}
      ${panel(`<div class="sv-toolbar"><span class="sv-field sv-search-field"><span class="sv-field-label">搜尋對話 · 靜態快照</span><span class="sv-faux-input">訂單</span></span>${button("篩選條件　3", "sv-outline")}${button("匯出", "sv-outline")}</div><div class="sv-chip-row sv-chip-wrap"><span class="sv-kicker">作用中</span>${badge("狀態：未讀", "sv-blue")}${badge("渠道：WhatsApp", "sv-blue")}${badge("負責人：我", "sv-blue")}${button("清除全部", "sv-text")}</div><div class="sv-segment"><span class="sv-segment-on">全部 18</span><span>未讀 4</span><span>我的 7</span></div>`)}`),
    2: specimen("篩選後空結果與恢復入口", `
      ${label("ZERO RESULTS / CONDITIONS PRESERVED")}
      ${panel(`<div class="sv-toolbar"><span class="sv-searchbox">⌕　訂單退款</span>${badge("VIP", "sv-blue")}${badge("未讀", "sv-blue")}</div><div class="sv-empty-result" role="status"><span class="sv-empty-icon" aria-hidden="true">⌕</span><strong>找不到符合條件的對話</strong><small>「訂單退款」 · VIP · 未讀</small><div class="sv-actions">${button("清除篩選", "sv-outline")}${button("清除搜尋", "sv-text")}</div></div>`)}`),
  },
  status: {
    0: specimen("狀態徽章與分類標籤的語意區分", `
      ${label("STATUS IS NOT A TAG")}
      ${panel(`<div class="sv-status-list"><div><span>WhatsApp Business</span>${badge("● 已連線", "sv-good")}</div><div><span>同步客戶資料</span>${badge("◌ 執行中", "sv-blue")}</div><div><span>付款通知</span>${badge("! 失敗", "sv-bad")}</div><div><span>草稿活動</span>${badge("草稿", "sv-neutral")}</div></div><div class="sv-divider"></div><div class="sv-bar"><strong>陳樂怡</strong><span class="sv-kicker">分類標籤</span>${badge("VIP", "sv-blue")}${badge("需跟進", "sv-blue")}</div>`)}`),
    1: specimen("標籤溢出及頭像尺寸階梯", `
      ${label("CONTACT DETAILS / DENSITY")}
      <div class="sv-two-col">
        ${panel(`<span class="sv-kicker">TAGS / LOCAL REVERSIBLE STATE</span><div class="sv-chip-row">${removableTag("VIP")}${removableTag("需跟進")}${badge("香港", "sv-neutral")}<details class="sv-tags-overflow"><summary>+3 tags</summary><div class="sv-chip-row">${badge("春季活動", "sv-blue")}${badge("合作夥伴", "sv-blue")}${badge("回訪", "sv-blue")}</div></details></div><div class="sv-static-note">× 只切換本地標籤示意；每個 44px 目標有獨立名稱。正式移除及加入需資料更新。</div>`)}
        ${panel(`<span class="sv-kicker">AVATAR / FALLBACK</span><div class="sv-avatar-scale"><span><i class="sv-avatar sv-avatar-32">CL</i><small>List · 32</small></span><span><i class="sv-avatar sv-avatar-40">CL</i><small>Conversation · 40</small></span><span><i class="sv-avatar sv-avatar-64">CL</i><small>Profile · 64</small></span></div>`)}
      </div>`),
    2: specimen("狀態、篩選標籤、未讀數及身份的互動界線", `
      ${label("CONVERSATION HEADER / SEMANTICS")}
      ${panel(`<div class="sv-bar sv-between sv-wrap"><span class="sv-person"><span class="sv-avatar sv-avatar-40" aria-hidden="true">CM</span><span><strong>陳小美</strong><small>WhatsApp · +852 9123 4567</small></span></span><span class="sv-actions">${badge("● 已連線", "sv-good")}${badge("需跟進", "sv-blue")}<span class="sv-count" role="img" aria-label="未讀訊息 123 則">99+</span></span></div><div class="sv-annotation-line"><span>身份</span><span>不可點的狀態</span><span>分類 · 靜態</span><span>未讀數</span></div>`)}`),
  },
  cards: {
    0: specimen("資料列、獨立卡片與可選方案的差異", `
      ${label("CHOOSE THE SURFACE")}
      <div class="sv-three-col">
        ${panel(`<span class="sv-kicker">REPEATED DATA / ROW</span><div class="sv-list-row"><span class="sv-avatar">CL</span><span><strong>陳樂怡</strong><small>最後聯絡 09:42</small></span>${badge("活躍", "sv-good")}</div><div class="sv-list-row"><span class="sv-avatar sv-lilac">WY</span><span><strong>王文俊</strong><small>最後聯絡 昨天</small></span>${badge("待回覆", "sv-warn")}</div>`)}
        ${panel(`<span class="sv-kicker">INDEPENDENT GROUP / CARD</span><strong>WhatsApp Business</strong><small>渠道連線設定及訊息配額</small><div class="sv-card-metric">12,480 <span>本月訊息</span></div>${button("管理渠道", "sv-outline sv-compact")}`)}
        ${panel(`<span class="sv-kicker">CHOICE / RADIO CARD</span><fieldset class="sv-card-choices"><legend>工作區密度</legend><label><input type="radio" name="sv-density" checked><span><strong>標準</strong><small>完整上下文</small></span></label><label><input type="radio" name="sv-density"><span><strong>緊湊</strong><small>一次查看更多列</small></span></label></fieldset>`)}
      </div>`),
    1: specimen("資訊卡的標題、內容和操作區", `
      ${label("CARD ANATOMY / INTEGRATION")}
      <div class="sv-anatomy-card"><div class="sv-card-region"><span class="sv-step">01</span><div><strong>PayFlow 整合</strong><small>虛構服務 · 示意付款狀態同步</small></div>${button("設定", "sv-text")}</div><div class="sv-card-region sv-card-body"><span class="sv-step">02</span><div><div class="sv-card-metric">HKD 48,230 <span>示例本月付款總額</span></div>${badge("● 示意已連線", "sv-good")}</div></div><div class="sv-card-region sv-card-footer"><span class="sv-step">03</span><span>示例上次同步 10:42 HKT</span>${button("管理整合", "sv-outline sv-compact")}</div></div><div class="sv-anatomy-rail"><span>Header</span><span>Body · 24px inset</span><span>Footer</span></div>`),
    2: specimen("可選卡、靜態卡和載入卡的不同狀態", `
      ${label("STATE / RESPONSIVE REFLOW")}
      <div class="sv-card-state-grid">
        ${panel(`<span class="sv-kicker">SELECTED / NATIVE RADIO</span><fieldset class="sv-card-choices sv-plan-choices"><legend>示例方案 · 單選</legend><label class="sv-plan-choice"><input type="radio" name="sv-plan-preview" checked><span><strong>Team 方案</strong><small>5 個成員席位 · 共用 Inbox</small></span><span class="sv-plan-indicator" aria-hidden="true">✓</span></label><label class="sv-plan-choice"><input type="radio" name="sv-plan-preview"><span><strong>Solo 方案</strong><small>1 個成員席位</small></span><span class="sv-plan-indicator" aria-hidden="true">✓</span></label></fieldset>`)}
        ${panel(`<span class="sv-kicker">INDEPENDENT STATIC SUMMARY</span><strong>本月訊息量</strong><div class="sv-card-metric">12,480 <span>則示例訊息 · 不隨方案選取變動</span></div>`)}
        ${panel(`<span class="sv-kicker">LOADING / SAME SHAPE</span><div class="sv-skeleton sv-w70"></div><div class="sv-skeleton sv-w90"></div><div class="sv-skeleton sv-w50"></div>`)}
      </div><div class="sv-responsive-rail"><span>寬容器：並排</span><b>→</b><span>窄容器：單欄</span></div>`),
  },
  overlays: {
    0: specimen("浮層選用與尺寸比較", `
      ${label("INTERRUPTION / SURFACE SCALE")}
      <div class="sv-overlay-options">
        ${panel(`<span class="sv-kicker">POPOVER · 240–360</span><div class="sv-mini-surface sv-pop-shape"><strong>快速資訊</strong><small>短選單與補充內容</small></div>`)}
        ${panel(`<span class="sv-kicker">DIALOG · 400–720</span><div class="sv-mini-surface sv-dialog-shape"><strong>封存聯絡人？</strong><small>短而聚焦的決定</small><span class="sv-mini-actions">取消　封存</span></div>`)}
        ${panel(`<span class="sv-kicker">DRAWER · 320–480</span><div class="sv-mini-surface sv-drawer-shape"><strong>聯絡人詳情</strong><small>保留列表上下文</small></div>`)}
        ${panel(`<span class="sv-kicker">PAGE · ROUTE</span><div class="sv-mini-surface sv-page-shape"><strong>建立自動化流程</strong><small>多步驟編輯與返回</small></div>`)}
      </div>`),
    1: specimen("確認對話框的構造與關閉動線", `
      ${label("ARCHIVE 3 CONTACTS / DIALOG ANATOMY")}
      <div class="sv-dialog-stage"><div class="sv-dialog-card" role="group" aria-label="靜態封存確認對話框剖面"><div class="sv-bar sv-between"><strong>封存 3 位聯絡人？</strong><span aria-hidden="true">×</span></div><div class="sv-dialog-body">陳樂怡、王文俊及李美琪將移出活躍清單。你可以稍後在封存資料中還原。<div class="sv-item-row">陳樂怡　·　王文俊　·　李美琪</div></div><div class="sv-dialog-footer">${button("取消", "sv-outline")}${button("封存 3 位", "sv-primary")}</div></div><div class="sv-dialog-callouts"><span>靜態剖面：標題 + 範圍</span><span>可捲 body</span><span>固定 footer</span></div><div class="sv-static-note">這不是運作中的 dialog；Escape、焦點限制及安全初始焦點須由正式 dialog 管理。此處不會封存資料。</div></div>`),
    2: specimen("對話框及內部選單的焦點層級", `
      ${label("FOCUS / LAYER OWNERSHIP")}
      <div class="sv-layer-stage"><div class="sv-layer-base"><strong>聯絡人清單</strong><span>觸發：查看陳樂怡</span><div class="sv-muted-row"></div><div class="sv-muted-row"></div></div><div class="sv-layer-drawer"><div class="sv-bar sv-between"><strong>陳樂怡</strong><span>×</span></div><small>詳情側欄 · 非 modal</small><div class="sv-layer-field">負責人　陳樂怡　⌄</div><div class="sv-layer-menu"><strong>指派給</strong><span>✓ 陳樂怡</span><span>　王文俊</span></div></div></div><div class="sv-focus-path"><span>設計上：trigger</span><b>→</b><span>drawer</span><b>→</b><span>menu</span><b>→</b><span>close → trigger</span></div><div class="sv-static-note">靜態層級剖面；焦點交接及 Escape 行為須正式元件實作。</div>`),
    3: specimen("確認操作的等待與結果狀態", `
      ${label("ASYNC CONFIRMATION / LOCAL ILLUSTRATION")}
      <div class="sv-two-col">
        ${panel(`<span class="sv-kicker">CONFIRM DIALOG · PENDING</span><strong>刪除未發佈版本？</strong><small>此版本無法還原；已發佈版本不受影響。</small><div class="sv-actions">${button("取消", "sv-outline")}${button("<span class=\"sv-spinner\" aria-hidden=\"true\"></span> 正在刪除", "sv-danger sv-pending")}</div>`)}
        ${panel(`<span class="sv-kicker">RESULT / RETURN CONTEXT</span><div class="sv-result-preview" role="status"><span>✓</span><strong>示例結果：版本已移除</strong></div><small>此標本只展示狀態；沒有資料操作。</small><div class="sv-flow"><span>確認</span><b>→</b><span>等待結果</span><b>→</b><span>回到列表</span></div>`)}
      </div>`),
  },
  feedback: {
    0: specimen("按影響範圍選擇反饋位置", `
      ${label("FEEDBACK IN CONTEXT")}
      <div class="sv-feedback-scene">${panel(`<div class="sv-inline-banner"><strong>WhatsApp 連線中斷</strong><small>此渠道的訊息暫時無法傳送。</small>${button("重新連線", "sv-outline sv-compact")}</div><div class="sv-list-row"><span class="sv-avatar">WA</span><span><strong>WhatsApp Business</strong><small>待處理訊息 4 則</small></span>${badge("! 已斷線", "sv-bad")}</div>`)}<div class="sv-feedback-float"><div class="sv-toast-card"><strong>✓ 標籤已更新</strong><small>已為 3 位聯絡人加入 VIP</small></div><div class="sv-tooltip-card">同步時間：上次成功更新的時間。</div></div></div>`),
    1: specimen("可關閉且可復原的 Toast", `
      ${label("ONE TOAST / ONE RECOVERY ACTION")}
      <div class="sv-toast-stage"><details class="sv-toast-example" open><summary class="sv-toast-visibility"><span class="sv-toast-close-label"><span aria-hidden="true">×</span><span class="sv-sr-only">關閉示例通知</span></span><span class="sv-toast-reopen-label">重新顯示示例通知</span></summary><div class="sv-toast-card sv-toast-large"><span class="sv-toast-symbol" aria-hidden="true">✓</span><span class="sv-toast-copy"><strong>示例：已移除「需跟進」標籤</strong><small>示例：3 位聯絡人的資料已更新。</small></span><details class="sv-toast-undo"><summary><span class="sv-undo-before">復原</span><span class="sv-undo-after">再次移除示例</span></summary><span class="sv-toast-undone" role="status">本地示例已復原；真實資料未更改。</span></details></div></details><div class="sv-toast-timing"><span>本地示意，無資料操作</span><span>可復原及手動關閉</span></div></div>`),
    2: specimen("橫幅與補充提示的位置", `
      ${label("AFFECTED CHANNEL / INLINE RECOVERY")}
      ${panel(`<div class="sv-inline-banner sv-warn-banner"><div><strong>WhatsApp 帳戶需要重新授權</strong><small>授權已過期，這個渠道目前無法傳送訊息。</small></div><button type="button" class="sv-btn sv-primary sv-compact">重新連線</button></div><div class="sv-affected-area"><strong>WhatsApp Business</strong><small>示例上次成功同步：2026-09-24 10:42 HKT</small><button type="button" class="sv-tooltip-trigger" popovertarget="sv-tooltip-detail" data-section-live>為何需要權限？</button><span class="sv-tooltip-detail" id="sv-tooltip-detail" popover="auto" role="note">渠道授權到期後，需要管理員重新連線。</span><span class="sv-static-note">本地點按提示可用 Escape 關閉；正式 hover/focus tooltip 須元件實作。</span></div>`)}`),
  },
  states: {
    0: specimen("頁面交付所需的八種狀態", `
      ${label("CONTACTS / STATE SWITCHBOARD")}
      <div class="sv-state-grid sv-four sv-state-switchboard">
        ${panel(`<span class="sv-kicker">LOADING</span><div class="sv-skeleton sv-w80"></div><div class="sv-skeleton sv-w60"></div><div class="sv-skeleton sv-w90"></div><small>正在載入…</small>`)}
        ${panel(`<span class="sv-kicker">FIRST USE</span><span class="sv-state-icon">＋</span><strong>尚未有聯絡人</strong><span class="sv-state-action">建立第一位</span>`)}
        ${panel(`<span class="sv-kicker">FILTERED EMPTY</span><span class="sv-state-chip">VIP ×</span><strong>找不到結果</strong><span class="sv-state-action">清除篩選</span>`)}
        ${panel(`<span class="sv-kicker">RETRYABLE ERROR</span><span class="sv-state-icon sv-state-red">!</span><strong>載入失敗</strong><span class="sv-state-action">重試</span>`)}
        ${panel(`<span class="sv-kicker">NO PERMISSION</span><span class="sv-state-icon sv-state-grey">▣</span><strong>沒有檢視權限</strong><small>聯絡工作區管理員</small>`)}
        ${panel(`<span class="sv-kicker">READ-ONLY</span><span class="sv-state-mini-row">陳樂怡 <b>檢視</b></span><strong>資料可檢視</strong><small>編輯權限受限制</small>`)}
        ${panel(`<span class="sv-kicker">STALE / PARTIAL</span><span class="sv-state-chip sv-state-amber">↻ 上次資料 09:42</span><strong>248 位聯絡人</strong><span class="sv-state-action">重新整理</span>`)}
        ${panel(`<span class="sv-kicker">DISCONNECTED</span><span class="sv-state-icon sv-state-red">⌁</span><strong>WhatsApp 已斷線</strong><span class="sv-state-action">重新連線</span>`)}
      </div>`),
    1: specimen("已知佈局骨架與未知等待操作", `
      ${label("LOADING SHAPE / PROGRESS")}
      <div class="sv-two-col">
        ${panel(`<div class="sv-bar sv-between"><strong>聯絡人</strong><span class="sv-kicker">更新中…</span></div><div class="sv-skeleton-table" aria-busy="true" aria-label="正在載入聯絡人清單"><div class="sv-skeleton sv-w90"></div><div class="sv-skeleton sv-w70"></div><div class="sv-skeleton sv-w85"></div></div><small>已知表格結構：保留欄位和列的佔位。</small>`)}
        ${panel(`<span class="sv-kicker">SHORT UNKNOWN OPERATION</span><div class="sv-spinner-stage"><span class="sv-spinner" aria-hidden="true"></span><strong>正在驗證連線…</strong></div><small>等待真實結果；減少動態時保留文字。</small>`)}
      </div>`),
    2: specimen("局部失敗的恢復路徑", `
      ${label("IMPORT / PARTIAL SUCCESS")}
      ${panel(`<div class="sv-bar sv-between"><div><strong>匯入結果</strong><small class="sv-block">50 筆聯絡人 · 46 成功 / 4 失敗</small></div>${badge("4 筆待處理", "sv-warn")}</div><div class="sv-progress" role="img" aria-label="50 筆中有 46 筆成功"><span class="sv-progress-92"></span></div><div class="sv-retry-list"><div><span>contact-047.csv</span><small>欄位格式錯誤</small></div><div><span>contact-048.csv</span><small>電話號碼缺少國碼</small></div><div><span>另有 2 筆失敗</span><small>可下載完整錯誤清單</small></div></div><div class="sv-bar sv-between"><small>原來的搜尋及草稿已保留</small>${button("只重試 4 筆", "sv-primary")}</div>`)}`),
  },
  "special-fields": {
    0: specimen("電話國碼與號碼的群組", `
      ${label("PHONE / COUNTRY + NATIONAL NUMBER")}
      ${panel(`<div class="sv-phone-form"><div class="sv-phone-grid"><span class="sv-field"><span class="sv-field-label">國家 / 國碼 · 靜態快照</span><span class="sv-faux-input">香港 +852</span></span><span class="sv-field"><span class="sv-field-label">電話號碼 · 靜態快照</span><span class="sv-faux-input">9123 4567</span></span></div><small>示例顯示：+852 9123 4567　·　儲存格式由產品決定</small><div class="sv-phone-fallback">未知國家 <span>國家／地區未識別，仍可查看完整號碼</span></div></div>`)}`),
    1: specimen("檔案上傳四個階段", `
      ${label("ATTACHMENT QUEUE / PER FILE STATE")}
      ${panel(`<div class="sv-upload-zone"><strong>檔案上傳區 · 靜態快照</strong><small>示例規則：CSV、PDF、PNG · 每檔最多 10 MB</small><span class="sv-file-browse">瀏覽檔案 · 未連接</span></div><div class="sv-upload-list"><div><span class="sv-file-icon">CSV</span><span><strong>campaign.csv</strong><small>示例：上傳中 · 64%</small><progress value="64" max="100" aria-label="示例 campaign.csv 上傳進度 64%">64%</progress></span></div><div><span class="sv-file-icon">PDF</span><span><strong>pricing.pdf</strong><small class="sv-error">示例：上傳失敗 · 連線中斷</small></span><span class="sv-snapshot-action">重試入口 · 靜態</span></div><div><span class="sv-file-icon">PNG</span><span><strong>logo.png</strong><small>示例：上傳完成</small></span><span class="sv-snapshot-action">移除入口 · 靜態</span></div></div><div class="sv-static-note">沒有選取或上傳檔案；清單為三種互不相關的示例狀態。</div>`)}`),
    2: specimen("密碼顯示與複製結果", `
      ${label("SENSITIVE FIELD / SAFE FEEDBACK")}
      <div class="sv-two-col">
        ${panel(`<span class="sv-kicker">PASSWORD FIELD · STATIC</span><span class="sv-field"><span class="sv-field-label">帳戶密碼</span><span class="sv-faux-input">••••••••••••</span></span><div class="sv-actions"><span class="sv-snapshot-action">顯示密碼入口 · 靜態</span><small>正式切換後應更新為「隱藏密碼」</small></div>`)}
        ${panel(`<span class="sv-kicker">COPY FALLBACK · STATIC</span><label class="sv-field" for="sv-copy-example">API key · 已遮罩<input id="sv-copy-example" value="sk-••••••••••••7K9M" readonly></label><div class="sv-actions"><span class="sv-snapshot-action">複製入口 · 靜態</span>${badge("示例：未能複製", "sv-bad")}</div><small>遮罩值不能作為復原方式。按安全政策可讓有權限者重新驗證後顯示原值、選取或重試複製；提示不包含完整 token。</small>`)}
      </div>`),
  },
};
