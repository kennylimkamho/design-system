# 搜尋、篩選與 saved views

讓使用者清楚知道現在看的是哪一部分資料，以及怎樣回到全貌。

> Version 1.4 · Generic edition · Handbook 1.4.0-draft.9 · 設計基準；PR / 工程 review 待完成，並非 runtime 全量遷移。
> 更新：2026-11-04 14:22:33 HKT (UTC+08:00)

[互動示例](../product-design-system-v1-4-draft-9-annotatable.html#filters) · [目錄](README.md)

## 三種不同控制



[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#filters--section-1)

| 控制 | 作用 | 清除方式 |
| --- | --- | --- |
| Search | 文字 query | 輸入框 clear，保留其他 filters |
| Filter | 狀態、channel、assignee、日期等條件 | 單個 chip remove 或 clear all |
| Saved view | 一組有名稱的條件 | 修改後標記 modified，不默默覆寫 |

## 規格与布局

- Search 放在 toolbar 起點，desktop 約240–320px，可縮至全寬。Filters 以具名 button 打開，不只有漏斗 glyph。
- Active filters 在 query 下方用可移除 chips 顯示；顯示 active 數量與 Clear all。內容過多換行或 summary，不橫向藏掉所有條件。
- Quick filters 如 Unread/Mine 是同一 dataset 的 scope，放在 sidebar 或 filters 區，不混成 product-level tabs。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#filters--section-2)

## 資料與 keyboard

- 即時 search 可 debounce 300ms；IME composition 完成前不要發出破碎 query。Enter/submit 行為必須一致。
- Filter 改變通常回第一頁，但保留 query；跨 scope selection 需清楚清除或保留理由。
- No results 顯示造成空結果的條件及 clear action，不使用首次 empty 的 onboarding 插圖。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#filters--section-3)

## 程式與規格對應

來源存在不代表已符合所有新規格；舊 Storybook 檔案是參考示例，請按 adoption checklist 逐項驗收。

- [packages/components/src/inputs/SearchField.tsx](../../packages/components/src/inputs/SearchField.tsx)
- [apps/storybook/src/molecules/FilterChipRow.stories.tsx](../../apps/storybook/src/molecules/FilterChipRow.stories.tsx)
