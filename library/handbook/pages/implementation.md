# 工程對應與 adoption

同一個repo存規格、tokens、元件及示例，但清楚區分「規格已寫」與「產品已採用」。

> Version 1.4 · Generic edition · Handbook 1.4.0-draft.9 · 設計基準；PR / 工程 review 待完成，並非 runtime 全量遷移。
> 更新：2026-11-04 14:22:33 HKT (UTC+08:00)

[互動示例](../product-design-system-v1-4-draft-9-annotatable.html#implementation) · [目錄](README.md)

## Repo 分層



[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#implementation--section-1)

| 路徑 | 職責 | 狀態 |
| --- | --- | --- |
| handbook/src | 詳細設計師文件與示例來源 | 本次新增；生成HTML及Markdown |
| spec | 既有決策、候選tokens、behavior contracts | 0.2基礎方向沿用；不是runtime defaults |
| packages/tokens + theme | 正式程式token與MUI theme | existing0.1.0；未在本次全量遷移 |
| packages/icons + components | 可重用實作 | 逐元件映射與驗收，不宣稱全部符合新規格 |
| apps/storybook | 元件互動實驗室；包含歷史 stories | 手冊只連 package-backed curated 示範；舊 stories 不作標準 |
| research | 歷史audit evidence | private；不包含於公開網站artifact |

## 如何使用程式映射

- 每頁底部連到現有 source；其中舊 Storybook 檔案只作參考。已抽出元件另有精準 source、import 用法與互動示例；設計新需求先查 variant／adapter，不再建另一套 table 或 selector。
- 手冊的vanilla HTML demo是設計示例，不能直接當MUI production component。程式API以source interface為準。
- 候選 radius、type roles 跟 runtime 有差異；sidebar 本版已更新為 package 尺寸，但 App 採用仍需逐項驗證。其餘模組抽取狀態查 spec/module-code-extraction.md，不能以 Storybook 舊 story 當作已完成。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#implementation--section-2)

## Migration 順序

- 1. 對齊fonts/type/spacing與semantic roles，用不破壞舊imports的adapter。
- 2. Contacts pilot：table、field、selector、states、mobile；保留全部API及permissions。
- 3. Automation pilot：nav層級、editor空間、unsaved behavior。
- 4. 測試通過後套用Channels/Broadcasts/Settings；Inbox等專業workspace獨立驗證。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#implementation--section-3)

## 網站與發佈

- 本地HTML可離線annotation；GitHub Markdown提供可review的逐頁文檔。
- GitHub Pages root 以 handbook 為入口；/handbook/ 保留別名，Storybook 移至 /storybook/ 作次要元件實驗室。舊 root ?path= story 連結自動轉到 /storybook/；research、private audit 與原始 archives 不進網站 artifact。
- Figma library與完整production採用尚未交付；保持明確，避免新設計師以為已可拖拉同步。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#implementation--section-4)

## 已抽出的真實元件

先讀手冊規則；下列是 package-backed 示範，App 採用仍待逐頁驗證。其餘 Storybook 舊示例只作參考。

- Primary navigation · hover / pin rail — [互動示例](https://kennylimkamho.github.io/design-system/lab/?path=/story/organisms-app-derived-navigation--primary-rail) · [原始碼](../../packages/components/src/layout/NavigationRailShell.tsx)
- Secondary menu · route destinations — [互動示例](https://kennylimkamho.github.io/design-system/lab/?path=/story/organisms-app-derived-navigation--secondary-menu) · [原始碼](../../packages/components/src/layout/WorkspaceNavigation.tsx)
- Inbox · views, channel & assignee filters — [互動示例](https://kennylimkamho.github.io/design-system/lab/?path=/story/organisms-app-derived-inbox-filters--controlled-filters-and-actions) · [原始碼](../../packages/components/src/inbox/InboxFilters.tsx)
- Module icons · approved glyph set — [互動示例](https://kennylimkamho.github.io/design-system/lab/?path=/story/icons-moduleicon--all-approved-modules) · [原始碼](../../packages/icons/src/ModuleIcon.tsx)
- Analytics · chart / table loading skeletons — [互動示例](https://kennylimkamho.github.io/design-system/lab/?path=/story/organisms-analytics-loading-skeletons--chart-and-table) · [原始碼](../../packages/components/src/display/AnalyticsLoadingSkeletons.tsx)

## 程式與規格對應

來源存在不代表已符合所有新規格；舊 Storybook 檔案是參考示例，請按 adoption checklist 逐項驗收。

- [packages/components/src/index.ts](../../packages/components/src/index.ts)
- [packages/tokens/src/index.ts](../../packages/tokens/src/index.ts)
- [spec/adoption.md](../../spec/adoption.md)
- [spec/module-code-extraction.md](../../spec/module-code-extraction.md)
