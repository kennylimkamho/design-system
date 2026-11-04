// Product-shaped, local-only specimens. Shared chrome keeps the nine principles
// visually related while each screen demonstrates a different task.
const screen = (kind, label, content) => `
  <section class="pv-stage pv-${kind}" aria-label="${label}">
    <div class="pv-window">
      <div class="pv-chrome" aria-hidden="true">
        <span class="pv-chrome-dots"><i></i><i></i><i></i></span>
        <span>ChatDaddy / ${label}</span>
      </div>
      ${content}
    </div>
  </section>`;

const sampleNote = (text) => `<p class="pv-note">${text}</p>`;

export default {
  "smart-defaults": screen("defaults", "個人 view 設定示例", `
    <div class="pv-defaults-grid">
      <div class="pv-settings-pane">
        <span class="pv-kicker">PERSONAL VIEW / SETUP</span>
        <h3>由合適的設定開始</h3>
        <p class="pv-intro">先沿用可修改的偏好，再預覽列表。</p>
        <label class="pv-field" for="default-density">
          <span>列表密度 <small>新 view 的起點</small></span>
          <select id="default-density" data-default-density><option value="standard">Standard · 52px</option><option value="compact">Compact · 40px</option></select>
        </label>
        <label class="pv-field" for="default-zone">
          <span>Time zone <small>示例 account setting</small></span>
          <select id="default-zone" data-default-zone><option value="Asia/Hong_Kong">Asia/Hong_Kong · account setting</option><option value="UTC">UTC</option></select>
        </label>
        <button type="button" class="btn secondary" id="reset-defaults">回復示例預設</button>
        <span class="pv-sr-only" id="default-zone-announcer" role="status"></span>
      </div>
      <div class="pv-inbox-pane" aria-label="示例 inbox 預覽">
        <div class="pv-pane-heading"><div><span class="pv-kicker">PREVIEW · SAME INSTANTS</span><h4>Inbox</h4></div><span class="pv-count">3 對話 · <span class="pv-zone-hkt" data-preview-zone="hkt">HKT</span><span class="pv-zone-utc" data-preview-zone="utc">UTC</span></span></div>
        <div class="pv-tab-strip" aria-hidden="true"><span class="is-active">Open</span><span>Assigned</span><span>Closed</span></div>
        <div class="pv-inbox-row is-selected"><span class="pv-avatar">AC</span><span class="pv-person"><strong>Alex Chan</strong><small>想了解訂單進度</small></span><span class="pv-row-meta"><time class="pv-zone-hkt" data-preview-zone="hkt" datetime="2026-09-25T09:42:00+08:00">25 Sep 09:42</time><time class="pv-zone-utc" data-preview-zone="utc" datetime="2026-09-25T01:42:00Z">25 Sep 01:42</time><i></i></span></div>
        <div class="pv-inbox-row"><span class="pv-avatar is-lilac">李</span><span class="pv-person"><strong>李小姐</strong><small>謝謝，資料已收到</small></span><span class="pv-row-meta"><time class="pv-zone-hkt" data-preview-zone="hkt" datetime="2026-09-24T16:20:00+08:00">24 Sep 16:20</time><time class="pv-zone-utc" data-preview-zone="utc" datetime="2026-09-24T08:20:00Z">24 Sep 08:20</time></span></div>
        <div class="pv-inbox-row"><span class="pv-avatar is-mint">TM</span><span class="pv-person"><strong>Taylor Mo</strong><small>請問可以安排跟進嗎？</small></span><span class="pv-row-meta"><time class="pv-zone-hkt" data-preview-zone="hkt" datetime="2026-09-22T11:08:00+08:00">22 Sep 11:08</time><time class="pv-zone-utc" data-preview-zone="utc" datetime="2026-09-22T03:08:00Z">22 Sep 03:08</time></span></div>
      </div>
    </div>
    ${sampleNote("密度與時區只更新此頁預覽；三個時間是同一瞬間的 HKT／UTC 虛構示例，不代表讀取真實帳戶。明確任務輸入優先於已存偏好、team 與產品預設。")}
  `),

  "goal-gradient": screen("goal", "匯入檢查示例", `
    <div class="pv-goal-sample" data-goal-demo data-goal-state="validation-pending">
      <header class="pv-page-head"><div><span class="pv-kicker">CONTACTS / IMPORT · FICTIONAL SNAPSHOT</span><h3>匯入前檢查</h3><p>contacts-sample.csv · 示例檔案，沒有實際上傳</p></div><span class="pv-state-pill">尚未提交</span></header>
      <div class="pv-progress-label"><strong>已驗收的流程步驟</strong><p id="goal-count" role="status">2 / 4 · 資料驗證待修正</p></div>
      <div class="progress-track pv-progress-track" role="progressbar" aria-label="示例中已驗收的匯入步驟" aria-valuemin="0" aria-valuemax="4" aria-valuenow="2" id="goal-progress"><span style="width:50%"></span></div>
      <div class="pv-import-grid"><ol class="pv-task-list" data-goal-steps aria-label="匯入步驟示例"><li class="pv-task is-complete" data-goal-step="file" data-goal-complete="true"><span class="pv-task-marker" aria-hidden="true">✓</span><span><strong>01 · 選擇檔案</strong><small>示例中已完成</small></span></li><li class="pv-task is-complete" data-goal-step="mapping" data-goal-complete="true"><span class="pv-task-marker" aria-hidden="true">✓</span><span><strong>02 · 對應欄位</strong><small>姓名、電話已對應</small></span></li><li class="pv-task is-pending" data-goal-step="validation" data-goal-complete="false"><span class="pv-task-marker" aria-hidden="true">!</span><span><strong>03 · 驗證資料</strong><small>第 2 列電話缺漏；不能算完成</small></span></li><li class="pv-task is-blocked" data-goal-step="confirmation" data-goal-complete="false"><span class="pv-task-marker" aria-hidden="true">4</span><span><strong>04 · 確認匯入</strong><small>驗證通過後才可開始</small></span></li></ol><div class="pv-data-preview" aria-label="示例欄位與錯誤預覽"><div class="pv-pane-heading"><div><span class="pv-kicker">DATA PREVIEW</span><h4>欄位對應與例外</h4></div><span class="pv-count">2 筆示意</span></div><div class="pv-mapping-summary">CSV: name → 姓名　·　CSV: phone → 電話</div><table><caption class="pv-sr-only">兩筆虛構聯絡人資料，第二筆缺少電話</caption><thead><tr><th scope="col">姓名</th><th scope="col">電話</th><th scope="col">驗證</th></tr></thead><tbody><tr><td>Alex Chan</td><td>•••• 4567</td><td><span class="pv-table-ok">通過 · 示例</span></td></tr><tr data-goal-error-row><td>李小姐</td><td>缺少電話</td><td><span class="pv-table-warn">待修正</span></td></tr></tbody></table><div class="pv-data-footer"><button type="button" class="btn primary" id="goal-confirm" data-goal-confirm disabled>確認匯入 · 待修正</button></div></div></div>
    </div>
    ${sampleNote("這是虛構流程快照，不是可操作匯入。只有已完成的示例步驟計入 2 / 4；錯誤仍在時不顯示 4 / 4，也不啟用確認。")}
  `),

  reciprocity: screen("reciprocity", "自動化模板示例", `
    <header class="pv-page-head"><div><span class="pv-kicker">AUTOMATION / TEMPLATE PREVIEW</span><h3>新客戶歡迎流程</h3><p>先查看內容與條件，再決定是否建立草稿。</p></div><span class="pv-state-pill" id="template-state" data-template-state="not-applied">未套用</span></header>
    <div class="pv-editor-grid">
      <div class="pv-flow-canvas" aria-label="示例流程預覽">
        <div class="pv-flow-node"><span class="pv-node-icon is-blue" aria-hidden="true">↳</span><span><small>TRIGGER</small><strong>首次收到訊息</strong></span></div>
        <div class="pv-flow-node"><span class="pv-node-icon is-violet" aria-hidden="true">✦</span><span><small>ACTION</small><strong>發送歡迎回覆</strong></span></div>
        <div class="pv-flow-node"><span class="pv-node-icon is-mint" aria-hidden="true">→</span><span><small>HANDOFF</small><strong>轉交可用成員</strong></span></div>
      </div>
      <aside class="pv-inspector" aria-label="模板內容與所需條件">
        <span class="pv-kicker">MESSAGE PREVIEW</span><div class="pv-message">歡迎聯絡我們！你需要哪方面的協助？</div>
        <h4>套用前確認</h4><div class="pv-requirement"><span>Channel</span><strong>需要已連接渠道</strong></div><div class="pv-requirement"><span>Handoff</span><strong>需要可用成員及權限</strong></div><div class="pv-requirement"><span>示例限制</span><strong>未檢查真實帳戶</strong></div>
        <div class="pv-apply-journey" role="list" aria-label="預覽、套用為草稿、編輯、另行發布的流程"><span class="is-current" role="listitem">01 · 預覽</span><strong role="listitem">02 · 套用為草稿</strong><span role="listitem">03 · 編輯草稿</span><span role="listitem">04 · 確認後發布</span></div>
        <button type="button" class="btn primary" id="template-apply" data-template-apply disabled aria-describedby="template-apply-note">套用為草稿</button><small id="template-apply-note" class="pv-control-note">示例未連接帳戶；此頁不會建立草稿或啟用流程。</small>
        <a class="pv-text-link" href="#automation">查看 Automation editor 規格</a>
      </aside>
    </div>
    ${sampleNote("模板及條件是虛構示意；預覽不要求聯絡資料，也不會建立或啟用流程。")}
  `),

  ownership: screen("ownership", "儲存 view 編輯示例", `
    <div class="pv-view-grid">
      <aside class="pv-view-builder">
        <span class="pv-kicker">SAVED VIEW / DRAFT</span><h3>組出自己的工作清單</h3>
        <label class="pv-field" for="view-name"><span>View 名稱 <small>即時顯示在預覽中</small></span><input id="view-name" value="我的客服 view" maxlength="80"></label>
        <div class="pv-filter-stack"><span class="pv-mini-label">已選條件</span><span class="pv-filter-chip">Unread <span aria-hidden="true">✓</span></span><span class="pv-filter-chip">Unassigned <span aria-hidden="true">✓</span></span></div>
        <label class="pv-field" for="view-scope"><span>預計儲存位置 <small>尚未儲存</small></span><select id="view-scope" data-view-scope><option value="personal">個人 view</option><option value="team">Team view</option></select></label>
        <div class="pv-scope-card" data-view-save-state="unsaved"><span class="pv-mini-label" id="view-save-status" role="status">草稿目的地 · 尚未儲存</span><strong class="pv-scope-personal">個人 view</strong><strong class="pv-scope-team">Team view</strong><small id="view-save-detail">名稱與目的地只在此頁預覽；沒有分享或儲存。</small></div>
        <div class="pv-view-actions"><button type="button" class="btn secondary" id="reset-view-name">重設示例名稱</button><button type="button" class="btn primary" id="view-save-sample" data-view-save aria-describedby="view-save-note">儲存示例 view</button><button type="button" class="btn secondary" id="view-restore-sample" data-view-restore disabled aria-describedby="view-save-note">復原至已存</button></div><small id="view-save-note" class="pv-control-note">只儲存到此頁記憶體；沒有寫入帳戶。</small>
      </aside>
      <div class="pv-view-preview" aria-label="示例 view 草稿預覽">
        <div class="pv-pane-heading"><div><span class="pv-kicker" id="view-preview-state">LOCAL DRAFT PREVIEW · NOT SAVED</span><h3 id="view-preview-title">我的客服 view</h3></div><span class="pv-count">2 對話</span></div>
        <div class="pv-applied-filters" aria-label="此草稿同時套用 Unread 與 Unassigned"><span>Unread</span><span>Unassigned</span><small>AND · 全部符合</small></div>
        <div class="pv-inbox-row"><span class="pv-avatar">AC</span><span class="pv-person"><strong>Alex Chan</strong><small>想了解訂單進度</small></span><span class="pv-row-meta">09:42<i></i></span></div>
        <div class="pv-inbox-row"><span class="pv-avatar is-mint">TM</span><span class="pv-person"><strong>Taylor Mo</strong><small>請問可以安排跟進嗎？</small></span><span class="pv-row-meta">週二<i></i></span></div>
      </div>
    </div>
    ${sampleNote("可在此頁試改名、選目的地、儲存本地快照、錯改後復原；reload 會清除。條件與對話是虛構示例，沒有寫入帳戶或分享給 team。")}
  `),

  "loss-aversion": screen("loss", "未儲存變更示例", `
    <div class="pv-editor-underlay" aria-hidden="true"><div class="pv-editor-bar"><span>Reply editor / Welcome message</span><span class="pv-unsaved-dot">未儲存</span></div><div class="pv-editor-paper"><span class="pv-kicker">MESSAGE DRAFT</span><div class="pv-editor-lines"><span></span><span></span><span></span></div><div class="pv-editor-tools"><i></i><i></i><i></i></div></div></div>
    <section class="pv-decision" role="dialog" aria-modal="false" aria-labelledby="loss-demo-title" aria-describedby="loss-demo-description" data-loss-dialog><span class="pv-decision-icon" aria-hidden="true">!</span><span class="pv-kicker">UNSAVED CHANGES / NONMODAL SAMPLE</span><h3 id="loss-demo-title">放棄未儲存變更？</h3><p id="loss-demo-description">這次修改的回覆內容尚未儲存。放棄後，這次修改會消失。</p><div class="pv-focus-hint">正式以 modal 開啟時，先聚焦安全選項「繼續編輯」</div><div class="pv-decision-actions"><button type="button" class="btn primary is-focus-target" id="loss-continue" data-loss-safe-focus data-demo-feedback="示例：繼續編輯；沒有離開此頁或修改任何草稿。">繼續編輯</button><button type="button" class="btn secondary" id="loss-abandon" data-loss-abandon data-demo-feedback="示例：正式產品在這一步才放棄未儲存變更；此頁沒有真實草稿。">放棄變更</button></div></section>
    ${sampleNote("這是非模態版面示意，並未自動移動焦點或丟失草稿。正式 modal 須由 app.js 開啟、把初始焦點放在安全選項，並處理 Escape／焦點返回。")}
  `),

  contrast: screen("contrast", "方案對照示例", `
    <header class="pv-page-head"><div><span class="pv-kicker">BILLING / INCOMPLETE PLAN REVIEW</span><h3>已知月費可比；總成本未明</h3><p>只把同期間、同貨幣的基本月費並列；缺少費用不視為零。</p></div><span class="pv-state-pill">虛構數字 · 不可決策</span></header>
    <div class="pv-plan-grid">
      <article class="pv-plan-card"><div class="pv-plan-top"><span class="pv-kicker">CURRENT / FICTIONAL</span><h4>目前方案</h4></div><div class="pv-price"><strong>HKD 800</strong><span>基本月費</span></div><dl><div><dt>每月額度</dt><dd>5,000</dd></div><div><dt>一次性費用</dt><dd>未提供</dd></div><div><dt>超額單價</dt><dd>待查證</dd></div><div><dt>稅／其他費用</dt><dd>未確認</dd></div></dl></article>
      <article class="pv-plan-card"><div class="pv-plan-top"><span class="pv-kicker">PROPOSED / FICTIONAL</span><h4>變更後方案 · 資料未齊</h4></div><div class="pv-price"><strong>HKD 1,000</strong><span>基本月費</span></div><dl><div><dt>每月額度</dt><dd>8,000</dd></div><div><dt>一次性費用</dt><dd>未提供</dd></div><div><dt>超額單價</dt><dd>待查證</dd></div><div><dt>稅／其他費用</dt><dd>未確認</dd></div></dl></article>
    </div><div class="pv-difference"><span>僅基本月費差額</span><strong>+ HKD 200 / 月</strong><span>額度 +3,000 / 月</span><span class="pv-total-unknown">總成本：未能計算</span></div><div class="pv-plan-caution"><strong>比較未完成</strong><span>補齊一次性費用、超額單價、稅與來源前，不應建議變更；可保留目前方案。</span></div>
    ${sampleNote("所有金額與額度均為虛構，不是 ChatDaddy 定價。+ HKD 200 只比較基本月費，不包含未知費用；正式決策須完整總成本與限制。")}
  `),

  compression: screen("compression", "聯絡人列表對照示例", `
    <header class="pv-page-head"><div><span class="pv-kicker">CONTACTS / ROW DESIGN</span><h3>同一筆資料，更容易掃描</h3></div><span class="pv-state-pill">資料相同</span></header>
    <div class="pv-comparison-grid">
      <section class="pv-comparison-pane"><div class="pv-compare-heading"><span class="pv-kicker">BEFORE</span><h4>每項都重複標籤</h4></div><div class="pv-verbose-row"><p><span>聯絡人姓名：</span><strong>Alex Chan</strong></p><p><span>聯絡人狀態：</span>Active</p><p><span>聯絡人標籤：</span>VIP</p><p><span>聯絡人操作：</span><a href="#contacts">查看聯絡人</a></p></div></section>
      <section class="pv-comparison-pane is-compressed"><div class="pv-compare-heading"><span class="pv-kicker">AFTER</span><h4>用位置與權重表達</h4></div><div class="pv-compact-table"><div class="pv-compact-head"><span>聯絡人</span><span>狀態 / 標籤</span><span>操作</span></div><div class="pv-compact-row"><span class="pv-compact-person"><span class="pv-avatar">AC</span><strong>Alex Chan</strong></span><span class="pv-compact-tags"><span class="pv-table-ok">Active</span><span class="pv-vip">VIP</span></span><a href="#contacts">查看聯絡人</a></div></div></section>
    </div>
    ${sampleNote("保留姓名、狀態、標籤與操作；只移走逐行重複的前綴。示例聯絡人為虛構。")}
  `),

  "visual-path": screen("path", "聯絡人工作區示例", `
    <header class="pv-page-head pv-path-heading"><div><span class="pv-kicker">CONTACTS / ALL CONTACTS</span><h3>聯絡人</h3><p>3 筆示例資料</p></div><button type="button" class="btn primary" data-demo-feedback="示例：正式產品會在此開啟建立聯絡人流程；沒有建立資料。">建立聯絡人</button></header>
    <div class="pv-contact-toolbar"><div class="pv-search-appearance"><span aria-hidden="true">⌕</span> 搜尋姓名或公司</div><span class="pv-filter-chip">所有狀態 <span aria-hidden="true">⌄</span></span><span class="pv-filter-chip">所有渠道 <span aria-hidden="true">⌄</span></span></div>
    <div class="pv-contacts-table"><table><caption class="pv-sr-only">虛構聯絡人列表，以身份欄為掃描起點</caption><thead><tr><th scope="col">聯絡人</th><th scope="col">狀態</th><th scope="col">公司</th><th scope="col">最近更新 · HKT</th></tr></thead><tbody><tr><td><span class="pv-contact-identity"><span class="pv-avatar">AC</span><span><strong>Alex Chan</strong><small>想了解訂單進度</small></span></span></td><td><span class="pv-table-ok">Active</span></td><td>North Studio</td><td>今日 09:42</td></tr><tr><td><span class="pv-contact-identity"><span class="pv-avatar is-lilac">李</span><span><strong>李小姐</strong><small>資料已收到</small></span></span></td><td><span class="pv-table-ok">Active</span></td><td>—</td><td>昨天 16:20</td></tr><tr><td><span class="pv-contact-identity"><span class="pv-avatar is-mint">TM</span><span><strong>Taylor Mo</strong><small>等待跟進</small></span></span></td><td><span class="pv-table-warn">Draft</span></td><td>Harbour Co.</td><td>週二 11:08</td></tr></tbody></table></div>
    ${sampleNote("頁面身份與主要操作 → 範圍與篩選 → 左側對齊的聯絡人。手機版仍讓主要操作靠近標題；資料與時間均為示例。")}
  `),

  "logical-flow": screen("flow", "廣播發送前檢查示例", `
    <header class="pv-page-head"><div><span class="pv-kicker">BROADCAST / REVIEW</span><h3>發送前檢查</h3><p>先核對對象與內容，再看安排和影響。</p></div><span class="pv-state-pill">示例草稿</span></header>
    <div class="pv-review-stack">
      <section class="pv-review-block"><span class="pv-review-index">01</span><div><span class="pv-kicker">WHO</span><h4>收件對象</h4><p>示例 segment：已選聯絡人 <strong>12 位</strong></p><small>正式產品須即時重新核對範圍與人數。</small></div></section>
      <section class="pv-review-block pv-review-message"><span class="pv-review-index">02</span><div><span class="pv-kicker">WHAT</span><h4>訊息內容</h4><p>歡迎聯絡我們，這裡是你要求的資訊。</p><span class="pv-inline-tag">純文字示例 · 無附件</span></div><div class="pv-phone-preview" aria-label="示例訊息預覽"><span>MESSAGE PREVIEW</span><div>歡迎聯絡我們，這裡是你要求的資訊。</div></div></section>
      <section class="pv-review-block"><span class="pv-review-index">03</span><div><span class="pv-kicker">WHEN &amp; WHERE</span><h4>發送安排</h4><p>2026 年 9 月 28 日 10:00 · HKT</p><small>示例渠道：WhatsApp；實際可用性須查證。</small></div></section>
      <section class="pv-review-block is-impact"><span class="pv-review-index">04</span><div><span class="pv-kicker">COST / PERMISSION</span><h4>費用與權限</h4><p>虛構估算：12 位 × HKD 2 = HKD 24。真實費率、最終收件範圍與 WhatsApp 發送權限仍須即時核實。</p><small>這不是 ChatDaddy 報價；未核實前不能確認發送。</small></div></section>
    </div><div class="pv-review-footer"><button type="button" class="btn primary" id="broadcast-review-confirm" data-review-confirm disabled>確認發送 · 待核實</button><a class="pv-text-link" href="#channels">查看 Channels / Broadcast 規格</a></div>
    ${sampleNote("收件人數、訊息、時間、渠道與 HKD 2 費率全屬虛構示例；確認按鈕保持 disabled，此畫面不會排程或發送。")}
  `),

  hover: `<div class="hover-row"><span class="avatar">AC</span><div class="hover-identity"><b>Alex Chan</b><small>Hover 或 Tab 到操作 · 虛構對話</small></div><div class="hover-actions"><button type="button" class="btn secondary" data-demo-feedback="示例 Assign：正式產品在此開啟成員selector。">Assign</button><button type="button" class="btn secondary" data-demo-feedback="示例 Add tag：正式產品在此開啟tag selector。">+ Tag</button></div></div><div class="peek-layout"><div class="peek-panel" id="peek-panel"><button type="button" class="btn quiet" id="pin-peek" aria-pressed="false" aria-label="固定展開示例面板">☰</button><div class="peek-links"><a href="#filters">Filters</a><a href="#selectors">Assignees</a><a href="#status">Tags</a></div></div><div class="peek-content"><b>Hover preview + explicit pin</b><p>滑入面板或Tab到按鈕會展開；focus仍在內時不收起。按按鈕固定展開，再按解除。</p><p>沒有hover的觸控裝置常駐提供links與row actions。</p></div></div>`,
};
