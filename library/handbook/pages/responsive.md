# Responsive 與縮放

以任務所需空間決定 reflow；手機不是把 desktop 等比例縮細。

> Version 1.4 · Generic edition · Handbook 1.4.0-draft.9 · 設計基準；PR / 工程 review 待完成，並非 runtime 全量遷移。
> 更新：2026-11-04 14:22:33 HKT (UTC+08:00)

[互動示例](../product-design-system-v1-4-draft-9-annotatable.html#responsive) · [目錄](README.md)

## 候選切換策略



[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#responsive--section-1)

| 可用寬度 | 版面行為 | 必保留 |
| --- | --- | --- |
| ≥1280px | rail + secondary + content；detail 依空間 | 主要任務與內容寬度 |
| 900–1279px | primary 可 collapsed；inspector 先收起 | 當前 module label、顯式打開 inspector |
| 600–899px | secondary disclosure；list/detail 可分頁 | Back restores query / scroll |
| <600px | primary drawer；單欄；16px gutters | 44px targets、16px input、safe-area |
| 200% zoom / narrow container | 依實際剩餘空間套相同規則 | focus、錯誤、儲存操作可到達 |

## Table 兩種合法處理

- 少量欄位且以查看為主：identity + status + next action 變 priority cards，其他資訊進 detail。
- 需要橫向比較多欄：保留 table 並讓有名稱的 region 橫向捲動；外頁不能意外 overflow。
- 不要用 body overflow-x:hidden 隱藏布局錯誤；也不要手機上隱藏 export／filter 而完全沒有替代入口。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#responsive--section-2)

## 浮層與表單

- Desktop drawer 可放 detail；手機改全頁或近全屏 dialog，有清楚返回。不可同时保留三欄。
- 表單 default 單欄；電話 country selector、error helper、password toggle 各有可用空間。
- 手機 soft keyboard 不遮住輸入與送出；不要用固定 100vh 忽略 dynamic viewport。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#responsive--section-3)

## 驗收矩陣

- 至少驗收 390、768、850、1280、1440px，以及桌面 200% zoom。這些是測試尺寸，不是硬編碼裝置分類。
- 此手冊的可縮放 schematic 只是 layout 示意，不能取代真實 viewport、touch、keyboard 與 screen-reader 測試。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#responsive--section-4)

## 程式與規格對應

來源存在不代表已符合所有新規格；舊 Storybook 檔案是參考示例，請按 adoption checklist 逐項驗收。

- [spec/navigation.md](../../spec/navigation.md)
- [spec/adoption.md](../../spec/adoption.md)
