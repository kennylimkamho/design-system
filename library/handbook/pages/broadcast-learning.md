# 群發 · Before / After 學習紀錄

將群發原型嘅產品理念轉成 ChatDaddy 元件與真實功能：分步決策、同步摘要、發送前確認及結果跟進。公開案例經匿名重建，原始截圖保留在私有紀錄。

> Version 1.4 · Generic edition · Handbook 1.4.0-draft.9 · 設計基準；PR / 工程 review 待完成，並非 runtime 全量遷移。
> 更新：2026-11-04 14:22:33 HKT (UTC+08:00)

[互動示例](../product-design-system-v1-4-draft-9-annotatable.html#broadcast-learning) · [目錄](README.md)

## 原型係產品參考，Visual Language 沿用 Design System

- 本次用戶明確要求參考原型嘅產品設計理念，而非複製暖灰配色、字體、sidebar 或按鈕外觀。實作沿用 App 現有 MUI theme、MaterialSymbol、primary button、status chip 與 card tokens。
- 新流程用受眾 → 訊息 → 發送方式 → 確認。每一步保留現有輸入與選擇狀態；發送摘要一直提供上下文，原有儲存、權限及警告機制繼續處理實際操作。
- 原型展示自動儲存、建議發送時段、回覆分析及通知。現有 backend 未提供相應合約時，不將示意能力變成可操作功能或成功宣稱。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#broadcast-learning--section-1)

## 前後差異與可驗證數據



[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#broadcast-learning--section-2)

| 觀察 | Before | After / 驗收方式 |
| --- | --- | --- |
| 設定結構 | 3 個長區段並排任務：受眾、訊息與發送、高級設定 | 4 個決策步驟；同一時間只顯示當前步驟 |
| 集中確認 | 0 個獨立確認步驟 | 1 個確認步驟，集中展示受眾、訊息流、渠道、時間、估算 |
| 設定上下文 | 摘要只有頂部 readiness chips | 持續可見嘅摘要；寬屏旁欄、窄屏依閱讀順序排列 |
| 未送達跟進 | 要逐列查看 | 依已載入、已完成且 failed > 0 嘅真實紀錄提示，直達收件人 |
| 送達率分母 | delivered + failed + pending | 加入 sent bucket；送達率仍以 confirmed delivered 為分子 |
| 產品成效 | 未收集 baseline | 未宣稱提升送達、回覆或完成時間；待真實使用研究 |

## 七項觀察可複用到其他頁面



[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#broadcast-learning--section-3)

| 原始觀察 | 可複用規則 |
| --- | --- |
| 標題與說明佔兩行 | 寬屏一行身份與簡短上下文，窄屏自然換行 |
| breadcrumb 重複、icon 不符、父導覽失去 active | route identity、module icon、parent selected 同 aria-current 分開驗證 |
| 成功／失敗 bar 難與數字對上 | icon、文字、count 共用一個明確分母；color 只作輔助 |
| 日期與時段佔兩行 | 緊湊日期同完整值 recovery 必須同時存在 |
| persistent checkbox 與 action 太搶眼 | hover/focus 同等、選中持續顯示、觸控可操作，選取範圍講清楚 |
| filter 同 row status 視覺不同步 | icon、token、語義一致；獨立測試真正篩選結果 |
| table title 缺少物件 icon | 所有可見 table title 有正確語義 icon 及可讀 heading |

## 每次改動必須留下時間戳與 before / after

- 案例修訂時間：2026-09-30 13:12:46 HKT (UTC+08:00)。原始觀察與截圖保留 capture time、route、viewport、state；新版本新增紀錄，不覆寫旧證據。
- 每項 UI 改動與 browser annotation 必須記錄：問題、before、after、決定、驗證、PR/version、可複用規則或頁面特例。截圖包含內部名稱或數據時，原圖在私有 research；公开 handbook 放遮蔽／匿名重建版並清楚標示其來源。
- 本案例嘅公開圖係匿名重建。可驗證數據只描述畫面結構與程式定義，並非 A/B test 或 production 成效。Frontend 實作與 Design System 發佈各自記錄狀態。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#broadcast-learning--section-4)

## 程式與規格對應

來源存在不代表已符合所有新規格；舊 Storybook 檔案是參考示例，請按 adoption checklist 逐項驗收。

- [handbook/VISUAL-REVIEW.md](../../handbook/VISUAL-REVIEW.md)
- [spec/data-display.md](../../spec/data-display.md)
- [spec/navigation.md](../../spec/navigation.md)
