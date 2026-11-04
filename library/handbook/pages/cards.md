# Cards、list rows 與空間分組

Card 用於獨立内容；row 用於重複掃描；不要把一個頁面切成沒有意義的盒子。

> Version 1.4 · Generic edition · Handbook 1.4.0-draft.9 · 設計基準；PR / 工程 review 待完成，並非 runtime 全量遷移。
> 更新：2026-11-04 14:22:33 HKT (UTC+08:00)

[互動示例](../product-design-system-v1-4-draft-9-annotatable.html#cards) · [目錄](README.md)

## 選用



[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#cards--section-1)

| 情況 | 使用 | 注意 |
| --- | --- | --- |
| 同欄位大量資料 | Table / list rows | 不要每筆用巨大 card |
| 獨立設定或資訊群組 | Card / section | 標題＋內容＋相關操作 |
| 跨時間比較 | Chart panel | 有尺度、legend、單位及狀態 |
| 可選方案 | Selectable card | 用 radio/checkbox 語意，非純 clickable div |

## Anatomy

- Card header：title + optional description + contextual action；body：主要資訊；footer：直接相關的少量操作。
- Standard padding24px、compact16px、radius12px candidate；gap16px。內容基線對齊，比每張卡同高度更重要。
- 若整張 card clickable，內部不要再套另一個 anchor。只讓標題 link／明確 action 可點往往更安全。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#cards--section-2)

## States 與 responsive

- Selected card 使用 border、check indicator 與文字；keyboard focus ring 另保留。
- 只有互動卡才 hover lift；靜態摘要卡保持穩定，loading 用同結構 skeleton。
- 多欄由容器寬度變兩欄／單欄；不要為維持三欄縮小 label。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#cards--section-3)

## 程式與規格對應

來源存在不代表已符合所有新規格；舊 Storybook 檔案是參考示例，請按 adoption checklist 逐項驗收。

- [apps/storybook/src/organisms/KanbanCard.stories.tsx](../../apps/storybook/src/organisms/KanbanCard.stories.tsx)
- [spec/foundations.md](../../spec/foundations.md)
