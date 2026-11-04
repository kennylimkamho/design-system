# 版本記錄 · 可核對嘅演進

版本用 Git 記錄核對，固定香港時間保存每次改動；唔把未核實年份寫成已發布歷史。

> Version 1.4 · Generic edition · Handbook 1.4.0-draft.9 · 設計基準；PR / 工程 review 待完成，並非 runtime 全量遷移。
> 更新：2026-11-04 14:22:33 HKT (UTC+08:00)

[互動示例](../product-design-system-v1-4-draft-9-annotatable.html#version-history) · [目錄](README.md)

## 已核對嘅版本記錄



| 香港時間 | 版本／變更 | Git 記錄 |
| --- | --- | --- |
| 2026-09-25 13:21:32 | Design System 初始 PR | aeaf68d · PR #1 |
| 2026-09-25 14:55:19 | Integration、AI、CRM 選定 icons | b41d2a3 · PR #3 |
| 2026-09-30 01:02:18 | 內容時刻加入手冊 | 4a5d9f8 |
| 2026-09-30 12:43:12 | 1.4 draft.1 · 工作循環與案例庫 | 4b54790 · PR #15 |
| 2026-09-30 13:06:01 | 1.4 draft.2 · 閱讀層次與搜尋 | f77c8d9 · PR #16 |
| 2026-09-30 13:31:30 | 1.4 draft.3 · Broadcast learnings | 3f98f6c |

## 本次採納

- 1.4.0-draft.4 採納提供嘅 draft-3 閱讀方向：開場、兩種模式、內容矩陣、P1–P4、動效策略、原話庫、版本記錄、規則索引及候選原則。
- 保留全部既有章節與規則，修復連結、索引及互動。唔以空 iframe 當作可用提案，亦唔把通用示意 SVG 當作真實 App 截圖。

## 版本治理

- 舊 HTML snapshot 保持 immutable；現行版由 generator 產生，HTML、Markdown 同 machine-readable index 一齊更新。
- draft 表示規格仍可演進，唔代表 App rollout 已完成。PR / merge / deployment 狀態由 GitHub 核對，唔預先填已成功。

## 程式與規格對應

來源存在不代表已符合所有新規格；舊 Storybook 檔案是參考示例，請按 adoption checklist 逐項驗收。

- [handbook/src/draft3-adoption.mjs](../../handbook/src/draft3-adoption.mjs)
- [spec/motion.md](../../spec/motion.md)
- [spec/feature-workspaces.md](../../spec/feature-workspaces.md)
