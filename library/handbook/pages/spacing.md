# 間距與密度

用一致的距離表達關聯，不靠隨機 padding 或更多邊框整理內容。

> Version 1.4 · Generic edition · Handbook 1.4.0-draft.9 · 設計基準；PR / 工程 review 待完成，並非 runtime 全量遷移。
> 更新：2026-11-04 14:22:33 HKT (UTC+08:00)

[互動示例](../product-design-system-v1-4-draft-9-annotatable.html#spacing) · [目錄](README.md)

## 4px 基準與允許值



[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#spacing--section-1)

| Token / px | 用途 | 注意 |
| --- | --- | --- |
| 2 / 4 | glyph 光學調整、緊密 metadata | 2px 是小尺度例外，不是 page spacing |
| 8 | icon-label、同組 control | 長 label 仍需保留 gap |
| 12 | field helper group、compact 卡片內距 | 避免每一層都疊 padding |
| 16 | 相關欄位、手機頁邊距 | 手機主要 hit area 不受此值限制 |
| 20 / 24 | standard card padding、desktop gutter | 一般 section 內部 |
| 32 / 40 | 不同 section 之間 | 用空間取代多層 card |
| 48 / 64 | 跨任務大區段／品牌頁 | 工作區不要套 marketing spacing |

## Density 明確選擇

- Standard：single-line row 52px、control 40px；一般 Contacts／Channels／Broadcasts 使用。
- Compact：row 40px、control 32px；Inbox 等高頻 workspace 可選。多行 row 依內容增高，不強行裁切。
- 手機可見 control 建議 44px 以上；至少保留 44px 觸控目標。小 icon 不等於小按鈕。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#spacing--section-2)

## 工程單位不能混用

- Figma／規格以 px 命名。MUI sx 的 spacing 乘數依 theme 決定，不把 16px 寫成 padding:16。
- 候選基準是 spacing(1)=4px、spacing(1.5)=6px，但現有 App 與 package adapter 需確認。使用明確 token 或 px 避免 4px／8px 混淆。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#spacing--section-3)

## 選擇流程

- 先用 standard 完成頁面。若使用者必須同時掃描大量資料，才評估 compact；不要用 compact 補救太多欄位。
- 密度設定保留為 workspace preference；不重置篩選、排序或選取。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#spacing--section-4)

## 程式與規格對應

來源存在不代表已符合所有新規格；舊 Storybook 檔案是參考示例，請按 adoption checklist 逐項驗收。

- [packages/tokens/src/spacing.ts](../../packages/tokens/src/spacing.ts)
- [spec/tokens.json](../../spec/tokens.json)
