# Data table 與列表

一張可用的表格要讓人辨認資料、比較欄位、控制範圍，而不只是把資料放進格子。

> Version 1.4 · Generic edition · Handbook 1.4.0-draft.9 · 設計基準；PR / 工程 review 待完成，並非 runtime 全量遷移。
> 更新：2026-11-04 14:22:33 HKT (UTC+08:00)

[互動示例](../product-design-system-v1-4-draft-9-annotatable.html#tables) · [目錄](README.md)

## 固定 anatomy

- PageHeader（名稱／可信 total／primary action）→ query + filters → toolbar → selection bar → column header → data → pagination。
- 欄位優先序：selection → identity → key attributes → status/date → row actions。Identity 可開 detail；內層按鈕不能冒泡開另一個頁面。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#tables--section-1)

## 欄位與對齊



[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#tables--section-2)

| 資料 | 寬度起點 | 呈現方式 |
| --- | --- | --- |
| Selection | 44–48px | 只在 bulk 有價值時出現 |
| Identity | min 200px、可 grow | 主名＋次要 context，最多兩行 |
| Status | min 120px | 文字＋badge，不能剪掉關鍵字 |
| Date / time | min 176px | 完整日期與時區，必要時換行 |
| Number / currency | min 112px | 右對齊、tabular figures、currency code |
| Tags | min 160px | 有限数量＋可開啟的 +N |
| Row actions | 44–88px | 命名 overflow；touch 始終可達 |

## Sorting / selection / pagination

- Default 52px row；compact40px。Table header 44px candidate；multi-line rows 可增高。
- 排序清楚標示欄位與方向，aria-sort 位於 header。若只對 loaded rows 排序就明確寫，不宣稱全資料庫排序。
- Header checkbox 只選當頁／顯示資料；跨頁全選需另一步「選取所有符合條件的 N 筆」並由 API 支援。
- Page-size／filter 變更的 reset policy 要固定；返回 detail 後保留 query、page、scroll。未知 total 不編造頁數。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#tables--section-3)

## 必要 states

- Loading/skeleton、首次 empty、篩選後 empty、error/retry、read-only、no permission、partial selection、loading more、long text、missing data。
- 下方可切換示例 state、排序、搜尋、選取及密度；是本地六筆完整示例，不代表 server 實作。
- 大量資料採既有 grid／virtualization；不可把1000筆完整 DOM rows 當性能驗收。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#tables--section-4)

## Mobile

- 需要比較時保留可橫捲的 named table region；只需快速查看時轉 priority cards。兩者都保留 identity、status、action。
- Row action hover 可增強顯著度，但 keyboard focus／touch 都有等效入口。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#tables--section-5)

## 程式與規格對應

來源存在不代表已符合所有新規格；舊 Storybook 檔案是參考示例，請按 adoption checklist 逐項驗收。

- [packages/components/src/display/PaginatedDataGrid.tsx](../../packages/components/src/display/PaginatedDataGrid.tsx)
- [packages/components/src/display/VirtualScrollList.tsx](../../packages/components/src/display/VirtualScrollList.tsx)
- [spec/data-display.md](../../spec/data-display.md)
