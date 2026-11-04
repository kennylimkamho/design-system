# 設計原則與取捨

讓新功能看起來屬於同一個產品，也讓使用者對每一下操作有穩定預期。

> Version 1.4 · Generic edition · Handbook 1.4.0-draft.9 · 設計基準；PR / 工程 review 待完成，並非 runtime 全量遷移。
> 更新：2026-11-04 14:22:33 HKT (UTC+08:00)

[互動示例](../product-design-system-v1-4-draft-9-annotatable.html#principles) · [目錄](README.md)

## 六個工作原則



[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#principles--section-1)

| 原則 | 具體做法 | 應避免 |
| --- | --- | --- |
| 任務先於裝飾 | 先確認 primary action 與閱讀順序 | 用動畫掩蓋不清楚的操作 |
| 相同語意，相同模式 | 導航、篩選、顯示模式分開 | 所有選項一律畫成 pill tab |
| 逐步披露 | 高頻操作可見，低頻放 overflow | 重要動作只能 hover 才找到 |
| 保留上下文 | 返回時保留 query、filter、scroll | 每次看 detail 都重置列表 |
| 誠實反饋 | 等 API 成功才呈現成功 | 假進度、假完成、虛構倒數 |
| 具體而非統一一切 | Inbox 可高密度，設定頁可留白 | 把所有頁面變成同一張表格 |

## 視覺層級

- 一頁一個主要任務；header 放主要 CTA，toolbar 放搜尋、篩選及批次操作。
- 用 24/16/8px 的距離表達群組關係，先減少邊框再考慮加卡片。段落有清楚標題，不用大量全大寫搶眼。
- 活躍 navigation、選取資料列、成功 status 是三種狀態。即使共享藍／綠色，也必須用位置、文字或形狀區分。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#principles--section-2)

## 如何提出例外

- 若現有規則妨礙任務效率，記錄使用場景、原規則、替代方案、響應式影響及測試證據。
- 例外應命名為可重用 pattern，例如 workspace.compact；不要用 feature-specific 魔術數字永久分叉。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#principles--section-3)

## 程式與規格對應

來源存在不代表已符合所有新規格；舊 Storybook 檔案是參考示例，請按 adoption checklist 逐項驗收。

- [spec/README.md](../../spec/README.md)
