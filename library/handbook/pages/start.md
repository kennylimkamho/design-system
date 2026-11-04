# 新設計師，由這裡開始

先知道正在設計哪一種任務，再選版面、元件與狀態。這是可查閱的工作手冊，不是概念簡報。

> Version 1.4 · Generic edition · Handbook 1.4.0-draft.9 · 設計基準；PR / 工程 review 待完成，並非 runtime 全量遷移。
> 更新：2026-11-04 14:22:33 HKT (UTC+08:00)

[互動示例](../product-design-system-v1-4-draft-9-annotatable.html#start) · [目錄](README.md)

## 第一次使用：五個步驟

- 1. 先看『任務優先』：寫出用戶目標、第一步及可驗證結果，再選資料管理、客服工作區、流程編輯、設定或分析模式；再用『內容跟住時刻走』決定每頁何時講甚麼。
- 2. 選 layout：確認 primary menu、secondary menu、頁面標題與操作位置；不要先逐粒畫按鈕。
- 3. 套用 foundations：ChatDaddy 藍為主要操作、綠為正面狀態；Standard 52px 為一般列表基準。
- 4. 查元件頁：同時交付 default、focus、loading、empty、error、permission 等適用狀態，不只一張成功畫面。
- 5. 用交付 checklist 自查，再把 spec 版本、元件對應與未決問題放入 PR。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#start--section-1)

## 如何讀每一頁

- 規格表是設計尺寸及決策依據；互動區只使用虛構資料，不會連接客戶、API 或修改 App。
- 每頁先看本手冊規格；部分章節新增『已抽出嘅真實元件』，可直接讀 import 用法、package 原始碼及精準互動示例。其他 Storybook 舊示例只作參考，唔係設計系統標準。
- Version 1（1.0.0）保留為已確認基準；本版 1.4.0-draft.1 重整手冊並加入持久工作循環與五個深度案例，沿用內容時刻規則、App-derived navigation、Inbox filters 及 module icons 對應。新規格仍需 review，runtime packages 仍為 0.1.0；不代表 App 已 rollout。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#start--section-2)

## 你已確認的三項方向



[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#start--section-3)

| 決策 | 採用方向 | 如何使用 |
| --- | --- | --- |
| D-01 | ChatDaddy module icons + Lucide utilities | 模組辨識與一般操作分開；品牌 logo 另管理 |
| D-02 | Blue primary / Green positive accent | 不要每個模組換一種主要 CTA 顏色 |
| D-03 | Standard 52px；workspace 可 compact | 多行內容可增高；compact 不縮小 touch hit area |

## 範圍與邊界

- 涵蓋字體、顏色、版面、元件行為、響應式與產品模式。未提供 Figma library；不要把此網站當成已有可安裝 Figma 元件。
- Dark mode 與 white-label 沿用既有 runtime，新的完整映射尚待審查。本版視覺示例以 light mode 為準。
- 舊方向 studio、歷史 audit 與舊 Storybook stories 保留為參考；日常設計以本手冊查規則。工程只透過手冊內標示的 curated links 查 package-backed 實例，其餘示例須重新驗證。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#start--section-4)

## 已抽出的真實元件

先讀手冊規則；下列是 package-backed 示範，App 採用仍待逐頁驗證。其餘 Storybook 舊示例只作參考。

- Primary navigation · hover / pin rail — [互動示例](https://kennylimkamho.github.io/design-system/lab/?path=/story/organisms-app-derived-navigation--primary-rail) · [原始碼](../../packages/components/src/layout/NavigationRailShell.tsx)
- Inbox · views, channel & assignee filters — [互動示例](https://kennylimkamho.github.io/design-system/lab/?path=/story/organisms-app-derived-inbox-filters--controlled-filters-and-actions) · [原始碼](../../packages/components/src/inbox/InboxFilters.tsx)
- Module icons · approved glyph set — [互動示例](https://kennylimkamho.github.io/design-system/lab/?path=/story/icons-moduleicon--all-approved-modules) · [原始碼](../../packages/icons/src/ModuleIcon.tsx)

## 程式與規格對應

來源存在不代表已符合所有新規格；舊 Storybook 檔案是參考示例，請按 adoption checklist 逐項驗收。

- [spec/decisions.json](../../spec/decisions.json)
- [spec/adoption.md](../../spec/adoption.md)
- [spec/cross-task-design-audit.md](../../spec/cross-task-design-audit.md)
- [spec/module-code-extraction.md](../../spec/module-code-extraction.md)
