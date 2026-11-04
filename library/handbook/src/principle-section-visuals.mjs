// Optional visuals for the three specification sections on each principle page.
// Each value is self-contained HTML; the parent handbook renderer can place it
// beside the corresponding zero-based section without adding runtime handlers.
const scene = (kind, title, content) => `
  <section class="psv psv-${kind}" aria-label="${title}">
    <div class="psv-frame">
      <div class="psv-chrome"><span>${title}</span></div>
      <div class="psv-body">${content}</div>
    </div>
  </section>`;

export const principleSectionVisuals = {
  "smart-defaults": {
    0: scene("defaults-source", "Smart defaults · 偏好來源", `
      <div class="psv-head"><span class="psv-eyebrow">SAME SETTING / FOUR SOURCES</span><h3>本次選擇優先，不被 default 蓋過</h3></div>
      <div class="psv-priority-list" aria-label="列表密度的示例來源，按優先序排列"><div class="psv-priority-row is-winner"><b>01</b><span>此任務明確選擇<small>本次 view</small></span><strong>Compact · 40px</strong></div><div class="psv-priority-row"><b>02</b><span>已儲存偏好<small>只在沒有本次選擇時使用</small></span><strong>Standard · 52px</strong></div><div class="psv-priority-row"><b>03</b><span>Team 設定<small>示例 team 起點</small></span><strong>Compact · 40px</strong></div><div class="psv-priority-row"><b>04</b><span>產品預設<small>最後 fallback</small></span><strong>Standard · 52px</strong></div></div>
      <div class="psv-screen-footer"><strong>採用本次明確選擇：Compact</strong><span>清除後再按來源順序選下一個有效值</span></div>
    `),
    1: scene("defaults-safe", "Smart defaults · 安全的起點", `
      <div class="psv-head"><span class="psv-eyebrow">BROADCAST / SCHEDULE</span><h3>確認前保留選擇權</h3></div>
      <div class="psv-form-grid"><div class="psv-faux-field"><small>Time zone · 示意 account setting</small><strong>Asia/Hong_Kong</strong></div><div class="psv-faux-field"><small>收件對象 · 必須明確選擇</small><strong>未選擇</strong></div></div><div class="psv-screen-footer"><span class="psv-warn">沒有預選「全部聯絡人」</span><span class="psv-state-note">發送確認：等待選定對象</span></div>
    `),
    2: scene("defaults-qa", "Smart defaults · 狀態驗收", `
      <div class="psv-head"><span class="psv-eyebrow">PREFERENCE FALLBACK / SAMPLE</span><h3>失效或跨 team 時重新判定來源</h3></div>
      <div class="psv-state-matrix"><div class="psv-state-card"><small>新使用者 · 無 Team 設定</small><strong>Standard · 52px</strong><span>產品起點</span></div><div class="psv-state-card is-active"><small>回訪使用者</small><strong>Compact · 40px</strong><span>有效的已存偏好</span></div><div class="psv-state-card"><small>清除偏好後</small><strong>Compact · 40px</strong><span>Team A 設定優先於產品預設</span></div><div class="psv-state-card"><small>切換到 Team B</small><strong>Standard · 52px</strong><span>Team B 設定；不沿用 Team A</span></div><div class="psv-state-card"><small>偏好已失效 · 無 Team 設定</small><strong>Standard · 52px</strong><span>回產品預設並提示</span></div></div><div class="psv-screen-footer"><span>五種示例狀態；實際值須依有效來源判定</span></div>
    `),
  },

  "goal-gradient": {
    0: scene("goal-definition", "Goal gradient · 真實進度", `
      <div class="psv-head"><span class="psv-eyebrow">CHANNEL SETUP</span><h3>完成 1 / 3 個檢查點</h3></div><div class="psv-meter"><span style="width:33.333%"></span></div>
      <div class="psv-three"><div class="psv-state-card is-done"><small>01</small><strong>選擇平台</strong><span>已完成 · 示例</span></div><div class="psv-state-card is-active"><small>02</small><strong>授權連接</strong><span>等待確認</span></div><div class="psv-state-card"><small>03</small><strong>測試連線</strong><span>尚未開始</span></div></div>
    `),
    1: scene("goal-import", "Goal gradient · 匯入流程", `
      <div class="psv-head"><span class="psv-eyebrow">CONTACTS / IMPORT</span><h3>正在對應欄位</h3></div>
      <div class="psv-two psv-asymmetric"><div class="psv-card"><div class="psv-setting"><span class="psv-dot is-done"></span><strong>檔案已選擇</strong></div><div class="psv-setting psv-current"><span class="psv-dot"></span><strong>對應欄位</strong></div><div class="psv-setting"><span class="psv-dot"></span><span>檢查錯誤</span></div><div class="psv-setting"><span class="psv-dot"></span><span>確認匯入</span></div></div><div class="psv-card"><span class="psv-eyebrow">COLUMN MAPPING</span><div class="psv-setting"><span>CSV: name</span><strong>→ 姓名</strong></div><div class="psv-setting"><span>CSV: phone</span><strong>→ 電話</strong></div></div></div>
    `),
    2: scene("goal-recovery", "Goal gradient · 下一步與修正", `
      <div class="psv-head"><span class="psv-eyebrow">IMPORT REVIEW / SAMPLE SNAPSHOT</span><h3>已完成 2 / 4；驗證尚未通過</h3></div><div class="psv-meter"><span style="width:50%"></span></div>
      <div class="psv-four"><div class="psv-state-card is-done"><small>01 · 已完成</small><strong>選擇檔案</strong><span>contacts-sample.csv</span></div><div class="psv-state-card is-done"><small>02 · 已完成</small><strong>對應欄位</strong><span>姓名、電話</span></div><div class="psv-state-card is-active"><small>03 · 待修正</small><strong>驗證資料</strong><span>1 筆電話缺漏</span></div><div class="psv-state-card"><small>04 · 尚未開始</small><strong>確認匯入</strong><span>驗證通過後才可用</span></div></div><div class="psv-screen-footer"><span>可返回對應欄位；修正前不增加進度</span><span class="psv-chip is-warning">未提交</span></div>
    `),
  },

  reciprocity: {
    0: scene("reciprocity-report", "Reciprocity · 先看樣本", `
      <div class="psv-head"><span class="psv-eyebrow">ANALYTICS PREVIEW / FICTIONAL</span><h3>先看得懂樣本，再考慮連接資料</h3></div>
      <div class="psv-card"><div class="psv-setting"><strong>對話量 · 星期一至日</strong><span class="psv-chip">SAMPLE DATA</span></div><div class="psv-report-scale">每日對話數 · 0–20 · 虛構示例</div><div class="psv-bars" role="img" aria-label="虛構示例每日對話量：週一9、週二14、週三11、週四17、週五13、週六20、週日15；縱軸0至20"><span class="psv-bar-col"><b>9</b><i style="height:45%"></i><small>一</small></span><span class="psv-bar-col"><b>14</b><i style="height:70%"></i><small>二</small></span><span class="psv-bar-col"><b>11</b><i style="height:55%"></i><small>三</small></span><span class="psv-bar-col"><b>17</b><i style="height:85%"></i><small>四</small></span><span class="psv-bar-col"><b>13</b><i style="height:65%"></i><small>五</small></span><span class="psv-bar-col"><b>20</b><i style="height:100%"></i><small>六</small></span><span class="psv-bar-col"><b>15</b><i style="height:75%"></i><small>日</small></span></div></div><div class="psv-screen-footer"><span>只示範圖表讀法；無帳戶資料、篩選或真實成效</span><a class="psv-text-link" href="#analytics">查看 Analytics 規格</a></div>
    `),
    1: scene("reciprocity-template", "Reciprocity · 模板內容", `
      <div class="psv-head"><span class="psv-eyebrow">AUTOMATION TEMPLATE / FICTIONAL</span><h3>先預覽內容及條件，再決定是否建立草稿</h3></div><div class="psv-two"><div class="psv-card psv-flow-mini"><div class="psv-node">首次收到訊息</div><div class="psv-node">回覆歡迎訊息</div><div class="psv-node">轉交成員</div></div><div class="psv-card"><span class="psv-eyebrow">MESSAGE PREVIEW</span><div class="psv-bubble">你好！歡迎聯絡我們，需要甚麼協助？</div><div class="psv-setting"><span>所需條件</span><strong>已連接渠道及權限</strong></div><div class="psv-setting"><span>預覽限制</span><strong>未檢查真實帳戶</strong></div></div></div><div class="psv-journey" aria-label="示例流程：查看預覽，確認條件，套用為草稿，編輯後另行發布"><span>01 預覽內容</span><span>02 確認條件</span><strong>03 套用為草稿</strong><span>04 另行發布</span></div>
    `),
    2: scene("reciprocity-preview", "Reciprocity · 先檢查再提交", `
      <div class="psv-head"><span class="psv-eyebrow">IMPORT PREVIEW</span><h3>提交前看見對應與例外</h3></div><div class="psv-chip-row psv-mapping-row"><span class="psv-chip">CSV: name → 姓名</span><span class="psv-chip">CSV: phone → 電話</span></div><div class="psv-card psv-table-card"><table><caption class="psv-sr-only">虛構匯入預覽</caption><thead><tr><th scope="col">姓名</th><th scope="col">電話</th><th scope="col">檢查</th></tr></thead><tbody><tr><td>Alex Chan</td><td>•••• 4567</td><td><span class="psv-chip is-good">可預覽</span></td></tr><tr><td>李小姐</td><td>缺少號碼</td><td><span class="psv-chip is-warning">需修正</span></td></tr></tbody></table></div><div class="psv-screen-footer"><span>示例資料，尚未匯入</span><span class="psv-state-note">確認：待修正電話</span></div>
    `),
  },

  ownership: {
    0: scene("ownership-editor", "Ownership · 草稿可見", `
      <div class="psv-head"><span class="psv-eyebrow">AUTOMATION EDITOR / SAMPLE</span><h3>我的歡迎流程 <span class="psv-chip is-warning">未儲存</span></h3></div><div class="psv-card psv-flow-mini"><div class="psv-node">收到新訊息</div><div class="psv-node">編輯歡迎回覆</div><div class="psv-node is-dashed">下一步：加入動作</div></div><div class="psv-screen-footer"><span>草稿先儲存；發布是另一個確認</span><span class="psv-state-note">目前未發布</span></div>
    `),
    1: scene("ownership-view", "Ownership · 組合個人 view", `
      <div class="psv-head"><span class="psv-eyebrow">SAVED VIEW BUILDER / SAMPLE</span><h3>未讀、未分配的 WhatsApp 對話</h3></div><div class="psv-two"><div class="psv-card"><span class="psv-eyebrow">CONFIGURATION · ALL CONDITIONS</span><div class="psv-chip-row"><span class="psv-chip">Unread</span><span class="psv-chip">Unassigned</span><span class="psv-chip">WhatsApp</span></div><div class="psv-setting"><span>密度 / 欄位</span><strong>Standard / 姓名、時間</strong></div><div class="psv-setting"><span>儲存目的地</span><strong>個人 view</strong></div></div><div class="psv-card"><span class="psv-eyebrow">PREVIEW · NOT SAVED</span><div class="psv-contact-row"><span class="psv-avatar">AC</span><span><strong>Alex Chan</strong><small>WhatsApp · 想了解訂單進度</small></span><small>09:42</small></div><div class="psv-contact-row"><span class="psv-avatar is-mint">TM</span><span><strong>Taylor Mo</strong><small>WhatsApp · 等待跟進</small></span><small>週二</small></div></div></div>
    `),
    2: scene("ownership-restore", "Ownership · 可以返回", `
      <div class="psv-head"><span class="psv-eyebrow">VIEW EDITOR / SAMPLE SEQUENCE</span><h3>編輯 → 明確儲存 → 錯改 → 復原</h3></div><div class="psv-save-flow"><div class="psv-state-card"><small>01 · 編輯中</small><strong>未讀 + 未分配</strong><span>尚未儲存</span></div><div class="psv-state-card is-done"><small>02 · 儲存到個人 view</small><strong>未讀 + 未分配</strong><span>已存快照；未分享 team</span></div><div class="psv-state-card is-active"><small>03 · 再次改動</small><strong>＋ VIP</strong><span>新改動未儲存</span></div><div class="psv-state-card is-done"><small>04 · 復原後</small><strong>未讀 + 未分配</strong><span>回到已存快照</span></div></div><div class="psv-screen-footer"><span>重設草稿不改動已存 view；示例順序，不代表此頁真的儲存</span></div>
    `),
  },

  "loss-aversion": {
    0: scene("loss-impact", "Loss aversion · 具體影響", `
      <div class="psv-head"><span class="psv-eyebrow">SCHEDULED BROADCAST / SAMPLE</span><h3>取消排程前先看影響</h3></div><div class="psv-two"><div class="psv-card"><span class="psv-eyebrow">WILL STOP</span><strong class="psv-big">3</strong><span>個示例排程項目</span></div><div class="psv-card"><span class="psv-eyebrow">WILL REMAIN</span><strong class="psv-big">Draft</strong><span>示例內容仍可查看</span></div></div><div class="psv-screen-footer"><span>實際數量需按當前 scope 取得</span><span class="psv-state-note">安全選項：返回排程</span></div>
    `),
    1: scene("loss-decision", "Loss aversion · 尊重選擇", `
      <div class="psv-dialog" aria-label="未儲存變更的本地決定示例"><span class="psv-icon-warning" aria-hidden="true">!</span><h3>放棄未儲存變更？</h3><p>這次修改的回覆內容尚未儲存，放棄後會消失。</p><div class="psv-focus-hint">正式開啟時，初始焦點 → 安全選項「繼續編輯」</div><div class="psv-dialog-actions"><button type="button" class="psv-action is-focus-target" data-demo-feedback="本地示例：安全選項是繼續編輯；此頁沒有真實草稿或離開動作。">繼續編輯</button><button type="button" class="psv-action is-quiet" data-demo-feedback="本地示例：正式產品在這一步才放棄未儲存變更；此頁沒有真實草稿。">放棄變更</button></div></div>
    `),
    2: scene("loss-refresh", "Loss aversion · 範圍改變", `
      <div class="psv-head"><span class="psv-eyebrow">REVIEW / SAMPLE</span><h3>確認前重新核對</h3></div><div class="psv-card psv-alert-card"><span class="psv-icon-warning" aria-hidden="true">!</span><div><strong>排程範圍已改變</strong><p>示例由 3 項變為 4 項。請重新查看影響，再選擇下一步。</p></div></div><div class="psv-screen-footer"><span class="psv-state-note">下一步：返回檢查</span><span>未重新確認前，不執行取消</span></div>
    `),
  },

  contrast: {
    0: scene("contrast-plans", "Contrast · 同單位比較", `
      <div class="psv-head"><span class="psv-eyebrow">PLAN PREVIEW / FICTIONAL</span><h3>只比較已知的同單位月費</h3></div><div class="psv-two"><div class="psv-card"><span class="psv-eyebrow">CURRENT</span><strong class="psv-big">HKD 800</strong><span>基本月費 · 額度 5,000 / 月</span></div><div class="psv-card psv-emphasis"><span class="psv-eyebrow">PROPOSED</span><strong class="psv-big">HKD 1,000</strong><span>基本月費 · 額度 8,000 / 月</span></div></div><div class="psv-screen-footer"><strong>僅基本月費差額 + HKD 200 / 月</strong><span>一次性費用與超額單價未知；不是總成本</span></div>
    `),
    1: scene("contrast-billing", "Contrast · 列出限制", `
      <div class="psv-head"><span class="psv-eyebrow">BILLING REVIEW / FICTIONAL</span><h3>費用未齊，不能當作完整比較</h3></div><div class="psv-card psv-table-card"><table><caption class="psv-sr-only">虛構方案欄位對照，部分費用尚未查證</caption><thead><tr><th scope="col">項目</th><th scope="col">目前</th><th scope="col">變更後</th></tr></thead><tbody><tr><th scope="row">基本月費</th><td>HKD 800</td><td>HKD 1,000</td></tr><tr><th scope="row">額度</th><td>5,000 / 月</td><td>8,000 / 月</td></tr><tr><th scope="row">一次性費用</th><td>未提供</td><td>未提供</td></tr><tr><th scope="row">超額單價</th><td>待查證</td><td>待查證</td></tr><tr><th scope="row">稅／其他費用</th><td>未確認</td><td>未確認</td></tr></tbody></table></div><div class="psv-screen-footer"><span>缺漏不是 HKD 0；正式比較要補來源與全部費用</span><span class="psv-state-note">可保留目前方案</span></div>
    `),
    2: scene("contrast-period", "Contrast · 可比期間", `
      <div class="psv-head"><span class="psv-eyebrow">ANALYTICS / FICTIONAL</span><h3>相同 7 日、相同指標與刻度</h3></div><div class="psv-two"><div class="psv-card"><span class="psv-eyebrow">前 7 日 · 對話量 / 日 · 0–16</span><div class="psv-spark" role="img" aria-label="虛構示例：前七日每日對話量8、11、9、14、10、16、12，總量80"><i style="height:50%"></i><i style="height:68.75%"></i><i style="height:56.25%"></i><i style="height:87.5%"></i><i style="height:62.5%"></i><i style="height:100%"></i><i style="height:75%"></i></div><small>7 日合計 80 · 示例</small></div><div class="psv-card"><span class="psv-eyebrow">後 7 日 · 對話量 / 日 · 0–16</span><div class="psv-spark is-blue" role="img" aria-label="虛構示例：後七日每日對話量10、8、12、9、16、11、14，總量80"><i style="height:62.5%"></i><i style="height:50%"></i><i style="height:75%"></i><i style="height:56.25%"></i><i style="height:100%"></i><i style="height:68.75%"></i><i style="height:87.5%"></i></div><small>7 日合計 80 · 示例</small></div></div><div class="psv-screen-footer"><span>同一指標、同一刻度；兩段示例總量相同，不宣稱真實改善</span></div>
    `),
  },

  compression: {
    0: scene("compression-row", "Visual compression · 列表權重", `
      <div class="psv-head"><span class="psv-eyebrow">INBOX / SAMPLE</span><h3>先看身份，再看訊息</h3></div><div class="psv-card"><div class="psv-contact-row is-selected"><span class="psv-avatar">AC</span><span><strong>Alex Chan</strong><small>想了解訂單進度</small></span><span class="psv-row-right"><small>09:42</small><b>WhatsApp</b></span></div><div class="psv-contact-row"><span class="psv-avatar is-mint">TM</span><span><strong>Taylor Mo</strong><small>等待跟進</small></span><span class="psv-row-right"><small>週二</small><b>WhatsApp</b></span></div></div>
    `),
    1: scene("compression-toolbar", "Visual compression · 操作層級", `
      <div class="psv-head"><span class="psv-eyebrow">CONTACTS / TOOLBAR</span><h3>常用操作保持可見</h3></div><div class="psv-toolbar"><span class="psv-faux-search">⌕　搜尋聯絡人</span><button type="button" class="psv-action" data-demo-feedback="本地示例：建立聯絡人需在正式產品開啟表單；沒有建立資料。">建立聯絡人</button></div><div class="psv-card psv-toolbar-row" role="group" aria-label="Alex Chan 的示例次要操作"><span class="psv-avatar">AC</span><strong>Alex Chan</strong><span class="psv-row-tools"><button type="button" class="psv-chip psv-tool-button" data-demo-feedback="本地示例：Assign 會開啟成員選擇器；沒有指派聯絡人。">Assign</button><button type="button" class="psv-chip psv-tool-button" data-demo-feedback="本地示例：Tag 會開啟標籤選擇器；沒有修改標籤。">Tag</button></span></div><div class="psv-screen-footer"><span>Tab 可進入 Assign / Tag；觸控裝置常駐顯示。點擊只說明，不修改資料。</span></div>
    `),
    2: scene("compression-tags", "Visual compression · 保留完整資料", `
      <div class="psv-head"><span class="psv-eyebrow">CONTACT DETAILS</span><h3>收起，不隱瞞</h3></div><div class="psv-card"><div class="psv-setting"><span>Alex Chan</span><span class="psv-chip is-good">Active</span></div><div class="psv-chip-row"><span class="psv-chip">VIP</span><span class="psv-chip">Follow-up</span><details class="psv-extra-tags"><summary>+2 tags</summary><div><span class="psv-chip">Retail</span><span class="psv-chip">Priority</span></div></details></div></div><div class="psv-screen-footer"><span>按 Enter 或點擊 +2 查看完整標籤</span></div>
    `),
  },

  "visual-path": {
    0: scene("path-contacts", "Visual path · 工作頁掃描", `
      <div class="psv-head"><span class="psv-eyebrow">CONTACTS / ALL CONTACTS</span><h3>聯絡人</h3></div><div class="psv-toolbar"><span class="psv-faux-search">⌕　搜尋姓名或公司</span><span class="psv-chip">所有狀態 ⌄</span></div><div class="psv-card"><div class="psv-contact-row"><span class="psv-avatar">AC</span><span><strong>Alex Chan</strong><small>North Studio</small></span><span class="psv-chip is-good">Active</span></div><div class="psv-contact-row"><span class="psv-avatar is-mint">TM</span><span><strong>Taylor Mo</strong><small>Harbour Co.</small></span><span class="psv-chip">Draft</span></div></div>
    `),
    1: scene("path-login", "Visual path · 稀疏頁面", `
      <div class="psv-login"><span class="psv-mark" aria-hidden="true">C</span><span class="psv-eyebrow">WELCOME BACK</span><h3>登入 ChatDaddy</h3><div class="psv-faux-field"><small>Email · 示例</small><strong>name@example.com</strong></div><div class="psv-faux-field"><small>Password · 示例</small><strong>••••••••</strong></div><button type="button" class="psv-action" data-demo-feedback="本地登入版面示例：沒有帳戶認證，也不會登入。">登入 · 示例</button><a class="psv-text-link" href="#login">查看登入支援規格</a></div>
    `),
    2: scene("path-mobile", "Visual path · 窄版順序", `
      <div class="psv-mobile"><div class="psv-mobile-head"><div class="psv-head"><span class="psv-eyebrow">CONTACTS</span><h3>聯絡人</h3></div><button type="button" class="psv-action" data-demo-feedback="本地示例：主要操作在手機標題旁；沒有建立資料。">建立聯絡人</button></div><div class="psv-toolbar"><span class="psv-faux-search">⌕　搜尋 · 靜態</span></div><div class="psv-contact-row"><span class="psv-avatar">AC</span><span><strong>Alex Chan</strong><small>Active · 示例</small></span></div><div class="psv-contact-row"><span class="psv-avatar is-mint">TM</span><span><strong>Taylor Mo</strong><small>Draft · 示例</small></span></div><div class="psv-screen-footer"><span>視覺／閱讀順序：標題 → 主要操作 → 搜尋 → 資料。搜尋與資料在本圖為靜態；正式介面須另驗收鍵盤焦點順序。</span></div></div>
    `),
  },

  "logical-flow": {
    0: scene("flow-intro", "Logical flow · 介紹順序", `
      <div class="psv-feature"><span class="psv-eyebrow">SAMPLE FEATURE PAGE / FICTIONAL</span><h3>集中處理待回覆對話</h3><div class="psv-feature-order"><div><small>01 · 做什麼</small><strong>在同一個 Inbox 查看待處理訊息</strong></div><div><small>02 · 為何可信</small><strong>顯示渠道與更新時間；樣本不冒充帳戶資料</strong></div><div><small>03 · 對我有何幫助</small><strong>先找到需要回覆的對話</strong></div></div><div class="psv-card"><span class="psv-eyebrow">04 · 具體示例 / SAMPLE DATA</span><div class="psv-contact-row"><span class="psv-avatar">AC</span><span><strong>Alex Chan</strong><small>WhatsApp · 09:42 · 想了解訂單進度</small></span><span class="psv-chip">待回覆</span></div><div class="psv-contact-row"><span class="psv-avatar is-mint">TM</span><span><strong>Taylor Mo</strong><small>WhatsApp · 10:03 · 請問可以安排跟進嗎？</small></span><span class="psv-chip">待回覆</span></div></div><a class="psv-action" href="#inbox">05 · 查看 Inbox 規格</a></div>
    `),
    1: scene("flow-broadcast", "Logical flow · 廣播檢查", `
      <div class="psv-head"><span class="psv-eyebrow">BROADCAST REVIEW / FICTIONAL</span><h3>對象、渠道、內容、時間、費用都在確認之前</h3></div><div class="psv-review-grid"><div class="psv-card"><small>01 · WHO</small><strong>已選 12 位示例收件人</strong><span>正式發送前須重查 scope</span></div><div class="psv-card"><small>02 · WHAT / CHANNEL</small><strong>WhatsApp · 純文字</strong><span>「歡迎聯絡我們，這裡是你要求的資訊。」</span></div><div class="psv-card"><small>03 · WHEN</small><strong>2026-09-28 10:00 HKT</strong><span>示例排程；未提交</span></div><div class="psv-card is-warning"><small>04 · COST / PERMISSION</small><strong>示例估算 HKD 24</strong><span>12 × HKD 2 虛構費率；實際費用及渠道權限未核實</span></div></div><div class="psv-screen-footer"><span>缺即時資料，不顯示可執行的發送按鈕</span><span class="psv-state-note">確認發送：待核實</span></div>
    `),
    2: scene("flow-recovery", "Logical flow · 失敗後恢復", `
      <div class="psv-head"><span class="psv-eyebrow">IMPORT / VALIDATION SAMPLE</span><h3>指出哪一筆錯，並保留原對應</h3></div><div class="psv-card psv-alert-card"><span class="psv-icon-warning" aria-hidden="true">!</span><div><strong>李小姐 · 第 2 列：電話缺漏</strong><p>補上電話後重新驗證；未提交資料。</p></div></div><div class="psv-card"><span class="psv-eyebrow">PRESERVED COLUMN MAPPING</span><div class="psv-setting"><span>CSV: name</span><strong>→ 姓名</strong></div><div class="psv-setting"><span>CSV: phone</span><strong>→ 電話</strong></div></div><div class="psv-screen-footer"><span>下一步：回到第 2 列修正電話 → 重新驗證</span><span>本地示例，沒有提交資料</span></div>
    `),
  },
};
