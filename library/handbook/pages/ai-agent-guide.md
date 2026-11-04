# AI Agent 點樣安全用 Design System

同一份 Handbook 俾設計師、工程師同 AI Agent 用，但 draft、示例與真實 App 能力要嚴格分開。

> Version 1.4 · Generic edition · Handbook 1.4.0-draft.9 · 設計基準；PR / 工程 review 待完成，並非 runtime 全量遷移。
> 更新：2026-11-04 14:22:33 HKT (UTC+08:00)

[互動示例](../product-design-system-v1-4-draft-9-annotatable.html#ai-agent-guide) · [目錄](README.md)

## 讀取順序

- 先讀 agent-index.json 嘅版本、章節與案例 metadata；再按任務讀 Foundation → Principle → Module → Flow → Case Study → 實作來源。唔先由一張漂亮示例推斷可用功能。
- 規範代表設計意圖；示例只表達可能畫面；待驗證事項不得自動轉為承諾。存在 package-backed Storybook 故事也不代表 App 已採用。

## 輸出契約



| 輸出物 | 必須帶上 | 禁止 |
| --- | --- | --- |
| 產品畫面／PPT／Homepage | 適用版本、目的、來源、示例資料標籤 | 把示例數據寫成客戶業績。 |
| App 變更建議 | 現有能力、狀態、權限、失敗與返回路徑 | 從圖像推斷 API 已有。 |
| 新案例 | 證據 commit、before/after 狀態、三項評估、驗收 | 無證據稱為歷史改前。 |

## 更新與版本

- 同一個 PR 更新文檔、案例視覺、機器索引與測試。版本與香港時間戳固定喺來源，重建唔應無故改變修訂時間；已發布 snapshot 不覆寫。
- 若 Agent 發現 App 與手冊不符，提出 issue／PR 並附來源與產品版本；正式採用需照 App rollout 流程 review，唔由 Handbook 靜默修改產品。

## 程式與規格對應

來源存在不代表已符合所有新規格；舊 Storybook 檔案是參考示例，請按 adoption checklist 逐項驗收。

- [spec/adoption.md](../../spec/adoption.md)
- [spec/module-code-extraction.md](../../spec/module-code-extraction.md)
- [spec/feature-workspaces.md](../../spec/feature-workspaces.md)
