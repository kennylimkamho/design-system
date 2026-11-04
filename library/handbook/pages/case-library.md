# Case Study Library · 由證據到決策

用可追溯嘅 before／after 記住點解改，唔只儲存改完嘅畫面。

> Version 1.4 · Generic edition · Handbook 1.4.0-draft.9 · 設計基準；PR / 工程 review 待完成，並非 runtime 全量遷移。
> 更新：2026-11-04 14:22:33 HKT (UTC+08:00)

[互動示例](../product-design-system-v1-4-draft-9-annotatable.html#case-library) · [目錄](README.md)

## 每個案例都有同一份合約

- 先交代用戶工作、角色、產品版本與證據；再展示改前問題、改後提案、設計取捨、正常／例外流程、易用／可信賴／可持續演進評估及驗收。
- 『改前』只用有版本證據嘅舊畫面；如由程式與評論重構，明確標示『現況重構示意』。『改後』未進 App 一律標 Design System 提案。
- 案例 visual specimen 只用匿名或虛構資料。真實截圖要先不可逆去識別化，任何文件唔可以嵌入可還原的原圖、ID 或客戶數據。

## 首批五個深入案例



| 案例 | 持久工作循環 | 重點 |
| --- | --- | --- |
| Broadcasting | 策劃／設定 → 觀察執行 → 檢視結果並學習 | 建立、進度、歷史 table、analytics、失敗補救。 |
| Contacts | 找到對的人 → 理解資料 → 有範圍地更新 | table、detail、filter、批次作用範圍。 |
| Inbox | 找到待回覆 → 對話／分配 → 完成與跟進 | filter panel、thread、hover action、mobile。 |
| Automation | 定義觸發 → 編輯與測試 → 發布與檢查 | canvas、草稿保護、實際狀態。 |
| Integration | 探索 → 授權連結 → 維護／恢復 | catalog、connection CTA、錯誤恢復。 |

## 引用與採用狀態

- 每個案例連到相關 Handbook 規則、Design System spec 同指定 commit 的 App 來源；來源存在只表示觀察依據，唔表示新模式已部署。
- 採用標籤獨立表示『現有 App 行為』『Design System 提案』『待驗證假設』。案例頁唔會自行更動 App、API、permission 或發送資料。

## 程式與規格對應

來源存在不代表已符合所有新規格；舊 Storybook 檔案是參考示例，請按 adoption checklist 逐項驗收。

- [spec/feature-workspaces.md](../../spec/feature-workspaces.md)
- [spec/cross-task-design-audit.md](../../spec/cross-task-design-audit.md)
- [spec/module-code-extraction.md](../../spec/module-code-extraction.md)
