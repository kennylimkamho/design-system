# 候選原則 · 待驗證

保存值得探索嘅方向，但唔將假設、任意門檻或未實作能力寫成正式產品承諾。

> Version 1.4 · Generic edition · Handbook 1.4.0-draft.9 · 設計基準；PR / 工程 review 待完成，並非 runtime 全量遷移。
> 更新：2026-11-04 14:22:33 HKT (UTC+08:00)

[互動示例](../product-design-system-v1-4-draft-9-annotatable.html#candidates) · [目錄](README.md)

## 五個探索方向



| 候選 | 驗證問題 | 界線 |
| --- | --- | --- |
| AI 來源標示 | 可否解釋資料來源及不確定性？ | 來源必須真實，唔造 provenance |
| Autosave + 確認 | 哪些欄位可自動儲存？ | 不可逆或對外發送另確認 |
| 重試與限流 | 服務／安全是否真的要求冷卻？ | 唔任意三次失敗就鎖 30 秒 |
| Undo window | 後端能否真正取消執行？ | 能力未提供不能承諾還原 |
| 認知負擔 | 使用者能否辨識下一步？ | 四項係提示，唔係通用硬上限 |

## 從假設到規範

- 先選一個真實用戶工作同驗收方法，再做小規模試驗；記錄錯誤、完成結果與例外，唔只看點擊數。
- 證據支持先提升成規範，保留來源同決策日期。候選內容不應被 AI Agent 當成預設必須實作。

## 不宣稱成效

- 呢頁全部係待驗證設計提案，未改 App、未做實驗，亦未證明提升 conversion 或減少錯誤。
- 可移除、修改或合併候選方向。既有安全、知情權同 accessibility 合約優先。

## 程式與規格對應

來源存在不代表已符合所有新規格；舊 Storybook 檔案是參考示例，請按 adoption checklist 逐項驗收。

- [handbook/src/draft3-adoption.mjs](../../handbook/src/draft3-adoption.mjs)
- [spec/motion.md](../../spec/motion.md)
- [spec/feature-workspaces.md](../../spec/feature-workspaces.md)
