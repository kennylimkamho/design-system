# 內容策略 · 時刻 × 頁面類型

頁面結構同內容時刻係兩個維度；每種結構都可能需要決定、行動、補救、使用與參考資訊。

> Version 1.4 · Generic edition · Handbook 1.4.0-draft.9 · 設計基準；PR / 工程 review 待完成，並非 runtime 全量遷移。
> 更新：2026-11-04 14:22:33 HKT (UTC+08:00)

[互動示例](../product-design-system-v1-4-draft-9-annotatable.html#content-strategy) · [目錄](README.md)

## 五個時刻，四種結構

- 以下係設計提示，唔係每頁都要塞滿二十格。先問用戶此刻需要乜，再決定直接顯示或按需披露。

| 時刻 | P1 Wizard | P2 Settings | P3 Automation | P4 Workspace |
| --- | --- | --- | --- | --- |
| 決定 | 費用、授權、後果 | 作用範圍、影響 | 觸發、退出與風險 | 批次範圍與權限 |
| 行動 | 步驟、驗證、預覽 | 儲存、取消、重設 | 編輯、測試、發佈 | 搜尋、篩選、處理 |
| 補救 | 錯誤與重試 | 還原與衝突 | 失敗、停止、重試 | 失敗項目與返回 |
| 使用 | 連接後狀態 | 同步與權限 | 限速與執行狀態 | 待辦與完成狀態 |
| 參考 | 完整政策 | 設定字典 | 節點字典 | 欄位與指標定義 |

## 內容預算係檢查點

- Wizard：標題一句、說明一句、最多三個要點、一個主要動作。警告最多三點；錯誤用一至兩句講發生咩同下一步；tooltip 一句。
- 草稿提出更短嘅字數預算可作編輯目標，唔應為符合字數而隱藏權利、费用或安全資訊。超額先重新分類時刻，唔係盲目刪字。

## QR 連接示例

- 決定之前直接顯示費用、權限與不可逆影響；掃碼步驟緊貼 QR；超時發生先顯示重試；發送風險喺 Broadcast 決定位置作護欄。
- 唔用固定 0–30 秒當真實流程時長。進度同成功跟驗證結果；未知服務狀態保持未知。

## 程式與規格對應

來源存在不代表已符合所有新規格；舊 Storybook 檔案是參考示例，請按 adoption checklist 逐項驗收。

- [handbook/src/draft3-adoption.mjs](../../handbook/src/draft3-adoption.mjs)
- [spec/motion.md](../../spec/motion.md)
- [spec/feature-workspaces.md](../../spec/feature-workspaces.md)
