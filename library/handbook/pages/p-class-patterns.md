# P1–P4 · 用工作揀結構

Wizard、Settings、Automation object 同 Workspace 服務不同工作，唔係用同一種畫面套晒所有功能。

> Version 1.4 · Generic edition · Handbook 1.4.0-draft.9 · 設計基準；PR / 工程 review 待完成，並非 runtime 全量遷移。
> 更新：2026-11-04 14:22:33 HKT (UTC+08:00)

[互動示例](../product-design-system-v1-4-draft-9-annotatable.html#p-class-patterns) · [目錄](README.md)

## 四種工作結構



| 類型 | 適用工作 | 必要界線 |
| --- | --- | --- |
| P1 Wizard | 首次 QR／OAuth 連接與必要授權 | 清楚下一步、可返回、保留輸入；成功需驗證 |
| P2 Settings | 改帳戶或團隊設定 | 顯示作用範圍、dirty state、儲存與取消 |
| P3 Automation object | 定義自動運行嘅流程 | 草稿、測試、發佈、停止與失敗紀錄 |
| P4 Workspace | 每日搜尋、處理、檢視工作 | 列表上下文、詳情、篩選與批次範圍 |

## 點揀

- 首先係咪一次性 setup？係就考慮 P1。係咪設定已有能力？考慮 P2。會自行持續執行？考慮 P3。每日反覆處理資料？考慮 P4。
- 同一模組可以有多種結構，例如 Broadcast 設定、執行與回顧，唔好將整個循環縮成一個發送表單。

## 唔將版面變成死規矩

- 三步或五個欄位只係減少負擔嘅設計提示，唔係授權流程嘅硬上限。必要決定不能省略。
- Workspace 可有列表與詳情，但手機要按任務順序切換；唔要求每個裝置都同時顯示三欄。

## 程式與規格對應

來源存在不代表已符合所有新規格；舊 Storybook 檔案是參考示例，請按 adoption checklist 逐項驗收。

- [handbook/src/draft3-adoption.mjs](../../handbook/src/draft3-adoption.mjs)
- [spec/motion.md](../../spec/motion.md)
- [spec/feature-workspaces.md](../../spec/feature-workspaces.md)
