import { page, section, table } from './model.mjs';

const stamp = '2026-09-30 13:12:46 HKT (UTC+08:00)';
const privateRecord = 'https://github.com/chatdaddy/design-system/blob/main/research/2026-09-30/broadcasts/README.md';
const card = (tag, title, body) => `<div class="flow-card"><span class="flow-eyebrow">${tag}</span><h3>${title}</h3>${body}</div>`;
const steps = `<div class="flow-grid two">${['01 · 受眾','02 · 訊息','03 · 發送方式','04 · 確認'].map(x => `<span class="flow-mini-action">${x}</span>`).join('')}</div>`;
const before = card('BEFORE · 匿名重建', '設定堆在同一頁', '<p>選擇聯絡人</p><hr><p>訊息、時間、渠道、名稱</p><hr><p>速度、時段、互動規則</p><p class="flow-demo-foot">儲存入口一直出現，缺少集中確認。</p>');
const after = card('AFTER · ChatDaddy 視覺語言', '每一步只處理一個決定', `${steps}<p>同步摘要：受眾 · 訊息流 · 渠道 · 時間</p><span class="flow-mini-action">確認後沿用原有儲存／發送</span>`);
export const broadcastLearningDemo = `<div class="flow-demo"><div class="flow-demo-head"><span class="flow-eyebrow">BROADCAST / BEFORE & AFTER · ${stamp}</span><h3>吸收產品理念，保留我哋嘅 Visual Language。</h3><p>以下由私有截圖與程式結構匿名重建。名稱及數值為示意；不包含客戶紀錄，也不代表發送成效。</p></div><div class="flow-grid two">${before}${after}</div><div class="flow-demo-foot">原型來源：用戶提供 broadcast-prototype.html。<a href="${privateRecord}" target="_blank" rel="noopener">完整原始截圖與七項觀察（需 repository 權限）↗</a></div></div>`;

export const broadcastLearningPage = page('broadcast-learning', 'Case Study Library', '群發 · Before / After 學習紀錄', '將群發原型嘅產品理念轉成 ChatDaddy 元件與真實功能：分步決策、同步摘要、發送前確認及結果跟進。公開案例經匿名重建，原始截圖保留在私有紀錄。', 'broadcast-learning', [
  section('原型係產品參考，Visual Language 沿用 Design System', [
    '本次用戶明確要求參考原型嘅產品設計理念，而非複製暖灰配色、字體、sidebar 或按鈕外觀。實作沿用 App 現有 MUI theme、MaterialSymbol、primary button、status chip 與 card tokens。',
    '新流程用受眾 → 訊息 → 發送方式 → 確認。每一步保留現有輸入與選擇狀態；發送摘要一直提供上下文，原有儲存、權限及警告機制繼續處理實際操作。',
    '原型展示自動儲存、建議發送時段、回覆分析及通知。現有 backend 未提供相應合約時，不將示意能力變成可操作功能或成功宣稱。',
  ]),
  section('前後差異與可驗證數據', [], table(['觀察', 'Before', 'After / 驗收方式'], [
    ['設定結構', '3 個長區段並排任務：受眾、訊息與發送、高級設定', '4 個決策步驟；同一時間只顯示當前步驟'],
    ['集中確認', '0 個獨立確認步驟', '1 個確認步驟，集中展示受眾、訊息流、渠道、時間、估算'],
    ['設定上下文', '摘要只有頂部 readiness chips', '持續可見嘅摘要；寬屏旁欄、窄屏依閱讀順序排列'],
    ['未送達跟進', '要逐列查看', '依已載入、已完成且 failed > 0 嘅真實紀錄提示，直達收件人'],
    ['送達率分母', 'delivered + failed + pending', '加入 sent bucket；送達率仍以 confirmed delivered 為分子'],
    ['產品成效', '未收集 baseline', '未宣稱提升送達、回覆或完成時間；待真實使用研究'],
  ])),
  section('七項觀察可複用到其他頁面', [], table(['原始觀察', '可複用規則'], [
    ['標題與說明佔兩行', '寬屏一行身份與簡短上下文，窄屏自然換行'],
    ['breadcrumb 重複、icon 不符、父導覽失去 active', 'route identity、module icon、parent selected 同 aria-current 分開驗證'],
    ['成功／失敗 bar 難與數字對上', 'icon、文字、count 共用一個明確分母；color 只作輔助'],
    ['日期與時段佔兩行', '緊湊日期同完整值 recovery 必須同時存在'],
    ['persistent checkbox 與 action 太搶眼', 'hover/focus 同等、選中持續顯示、觸控可操作，選取範圍講清楚'],
    ['filter 同 row status 視覺不同步', 'icon、token、語義一致；獨立測試真正篩選結果'],
    ['table title 缺少物件 icon', '所有可見 table title 有正確語義 icon 及可讀 heading'],
  ])),
  section('每次改動必須留下時間戳與 before / after', [
    `案例修訂時間：${stamp}。原始觀察與截圖保留 capture time、route、viewport、state；新版本新增紀錄，不覆寫旧證據。`,
    '每項 UI 改動與 browser annotation 必須記錄：問題、before、after、決定、驗證、PR/version、可複用規則或頁面特例。截圖包含內部名稱或數據時，原圖在私有 research；公开 handbook 放遮蔽／匿名重建版並清楚標示其來源。',
    '本案例嘅公開圖係匿名重建。可驗證數據只描述畫面結構與程式定義，並非 A/B test 或 production 成效。Frontend 實作與 Design System 發佈各自記錄狀態。',
  ]),
], ['handbook/VISUAL-REVIEW.md', 'spec/data-display.md', 'spec/navigation.md']);

export const broadcastLearningSectionVisuals = { 'broadcast-learning': {
  0: `<div class="flow-grid two">${card('PRODUCT IDEA', '分清楚每個決定', steps)}${card('VISUAL SYSTEM', '沿用已建立元件', '<p>Theme tokens · MaterialSymbol · Status chip · Primary action</p>')}</div>`,
  1: `<div class="flow-grid two">${card('BEFORE', '3 區段 · 0 確認步驟', '<p>多個決定同時出現</p>')}${card('AFTER', '4 步驟 · 1 確認步驟', '<p>每一步只顯示當前任務，摘要保持可見</p>')}</div>`,
  2: `<div class="flow-grid three">${card('IDENTITY', '正確位置', '<p>Breadcrumb · Icon · Active state</p>')}${card('EVIDENCE', '數字對得上', '<p>Label · Count · Denominator</p>')}${card('ACTION', '各種操作可到達', '<p>Hover · Focus · Touch</p>')}</div>`,
  3: `<div class="flow-grid two">${card('PRIVATE EVIDENCE', '保留原圖', '<p>Capture time · Route · Viewport · State</p>')}${card('PUBLIC LEARNING', '可見嘅匿名案例', '<p>Before / After · Decision · Validation · Version</p>')}</div>`,
} };
