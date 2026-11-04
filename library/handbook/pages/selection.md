# Checkbox、radio 與 switch

讓使用者知道是選取多個項目、挑一個選項，還是立即開關設定。

> Version 1.4 · Generic edition · Handbook 1.4.0-draft.9 · 設計基準；PR / 工程 review 待完成，並非 runtime 全量遷移。
> 更新：2026-11-04 14:22:33 HKT (UTC+08:00)

[互動示例](../product-design-system-v1-4-draft-9-annotatable.html#selection) · [目錄](README.md)

## 選用規則



[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#selection--section-1)

| 元件 | 使用 | 例子 |
| --- | --- | --- |
| Checkbox | 0–多個獨立項目 | 選取聯絡人、批次 tag |
| Radio | 互斥選項，通常等提交才套用 | 匯出範圍、寄送時機 |
| Switch | 立即生效的二元設定 | 通知開／關 |
| Segmented radio | 同一內容的表示方式 | List / Board；不是導航 |

## 尺寸與標籤

- Checkbox/radio glyph 18–20px；整行 label 與44px target 可點擊；文字與 control 相距8px。
- Switch track 建議36×20px，thumb16px；文字描述設定本身，例如「接收通知」，不要只寫「開」。
- 選項群組用 fieldset + legend；狀態用 checked/aria-checked 表達，不只變色。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#selection--section-2)

## 特殊狀態與提交

- Select-all 有 unchecked／checked／indeterminate；只作用目前宣告範圍。部分選取不應顯示全選。
- Switch pending 不能假裝已成功。可保守等待或 optimistic rollback，但失敗必須恢復真實值及顯示原因。
- Disabled 原因可讀；required consent 不預先勾選。Radio 支援箭頭鍵，switch 可用 Space。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#selection--section-3)

## 程式與規格對應

來源存在不代表已符合所有新規格；舊 Storybook 檔案是參考示例，請按 adoption checklist 逐項驗收。

- [apps/storybook/src/atoms/Switch.stories.tsx](../../apps/storybook/src/atoms/Switch.stories.tsx)
- [spec/data-display.md](../../spec/data-display.md)
