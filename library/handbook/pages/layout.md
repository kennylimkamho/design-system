# App shell 與頁面骨架

設計新頁面之前先套骨架，確保 header、toolbar、內容和操作在同一套座標上。

> Version 1.4 · Generic edition · Handbook 1.4.0-draft.9 · 設計基準；PR / 工程 review 待完成，並非 runtime 全量遷移。
> 更新：2026-11-04 14:22:33 HKT (UTC+08:00)

[互動示例](../product-design-system-v1-4-draft-9-annotatable.html#layout) · [目錄](README.md)

## 主要尺寸與角色



[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#layout--section-1)

| 區域 | 規格 | 用途 |
| --- | --- | --- |
| Primary rail | 56px collapsed / 230px expanded | 現有 package 導覽規格；切換產品領域 |
| Secondary panel | 232px expanded / 76px collapsed | 現有 package 導覽規格；同一模組內的功能入口 |
| Top bar | 56px candidate | 團隊／頁面上下文；現有 runtime 為 54px |
| Content gutters | 24px desktop / 16px narrow | 內容與容器邊界 |
| Reading / form width | 640–720px | 長文及單欄設定表單，不拉到全屏 |
| Data workspace | Fill available width | 表格、Inbox、editor 不設閱讀欄上限 |
| Detail panel | 320–400px | 保留列表上下文；空間不足改獨立頁 |
| Grid | 12 columns / 24px gap; narrow 4 / 16px | 依容器切換，不以手機型號判斷 |

## 四種內容布局

- Data page：PageHeader → saved views / filters → toolbar → table → pagination；內容寬度填滿工作區。
- Settings：section nav + 640–720px form；related fields 分組，save bar 靠近任務結束位置。
- Workspace：list → conversation/editor → optional detail inspector；各 panel 擁有明確 scroll owner。
- Dashboard：summary → trends → drill-down；同級 cards 對齊，不把 KPI 混進 navigation。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#layout--section-2)

## 高度、捲動與 fixed 區域

- 一般資料頁以頁面或 table viewport 為主要 scroll，不同一區塞兩個互相搶滾輪的容器。
- Inbox composer 固定在 conversation 區底部；message history 自己捲動。電話鍵盤與 safe-area 出現時仍能輸入。
- Sticky toolbar 不蓋住 anchor、focus 或 table header；scroll-margin-top 跟 header 高度一致。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#layout--section-3)

## 設計交付必畫

- 正常內容、極長標題、沒有 secondary menu、secondary menu 展開／收起、右側 detail panel 開啟／關閉。
- 寬度不足先移除非必要 inspector，然後改 list/detail navigation；不是把三個欄壓成極窄。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#layout--section-4)

## 程式與規格對應

來源存在不代表已符合所有新規格；舊 Storybook 檔案是參考示例，請按 adoption checklist 逐項驗收。

- [packages/components/src/layout/AppShell.tsx](../../packages/components/src/layout/AppShell.tsx)
- [packages/components/src/layout/PageWrapper.tsx](../../packages/components/src/layout/PageWrapper.tsx)
- [spec/navigation.md](../../spec/navigation.md)
