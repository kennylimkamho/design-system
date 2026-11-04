# 字體與排版

從頁面標題到一個時間戳，明確知道字體、字重、字級、行高與使用場合。

> Version 1.4 · Generic edition · Handbook 1.4.0-draft.9 · 設計基準；PR / 工程 review 待完成，並非 runtime 全量遷移。
> 更新：2026-11-04 14:22:33 HKT (UTC+08:00)

[互動示例](../product-design-system-v1-4-draft-9-annotatable.html#typography) · [目錄](README.md)

## 字體家族與實際載入

- Latin UI / heading：Sora，使用 400、500、600、700。此手冊內嵌官方 OFL variable font，離線也能看到真正的拉丁字體。
- 繁體：優先 PingFang HK／Noto Sans HK；簡體：PingFang SC／Noto Sans SC；Windows 可落到 Microsoft JhengHei／YaHei。字體依語言設定，不把拉丁字體假裝成中文字型。
- 此離線版不內嵌大型 CJK 字體；中文外觀取決於已安裝 fallback。正式產品需在指定 macOS／Windows／Android／iOS 測試換行。
- Code 使用 ui-monospace／SFMono-Regular／Consolas。表格數字先用 Sora 的 tabular-nums，並非所有數字都換 mono。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#typography--section-1)

## Type scale · size / line-height（px）



[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#typography--section-2)

| 角色 | 字級 / 行高 | 字重 | 使用場合 |
| --- | --- | --- | --- |
| Display | 40 / 48 | 700 | 品牌故事／登入介紹；不要放進資料表 |
| Page title | 28 / 36 | 600 | 每頁唯一主標題 |
| Section title | 20 / 28 | 600 | 頁面主要區段 |
| Panel title | 18 / 28 | 600 | 側欄、卡片群組、dialog 標題 |
| Body large | 16 / 26 | 400 | 引導說明、長段落、手機表單 |
| Body / control | 14 / 22 | 400 / 500 | 桌面正文、欄位、按鈕 |
| Supporting | 13 / 20 | 400 | 列表次要資料、補充說明 |
| Caption | 12 / 18 | 400 / 500 | 非關鍵 metadata；不放主要操作 |
| Data / code | 14 / 22 | 400 | 數字用 tabular-nums；ID 用 monospace |

## 標題與正文的組合

- 每頁一個 h1；視覺字級與 heading 語意分開。卡片標題通常用 h2/h3 的語意，不因尺寸小就用 span。
- 標題與描述相距 8px；區段標題與內容 16px；段落間 12–16px。長文閱讀寬度 60–75 個 Latin 字元附近，CJK 以實際閱讀感校準。
- CJK 不設 blanket negative tracking；English heading 可 -0.015em，正文 0。中文不使用全大寫／過闊 letter spacing 模仿英文 label。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#typography--section-3)

## 文字壓力測試

- 必測中英混排、很長公司名、emoji、帶音標名字、電話、跨年日期、1,234,567.89 及空值。
- 可視內容不足時先調欄寬或換行；不把全頁字體縮細。省略號只用在可開啟詳情的次要內容，日期及主要身份不能只剩「…」。
- 手機輸入採 16px；desktop control 14px。200% zoom 不應令主要操作被裁切。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#typography--section-4)

## 與現有 implementation 的差異

- 現有 typography.ts 包含 h1–h6；本手冊以功能角色命名，新增 section 20/28 等對應仍需 adapter review。
- 舊 Storybook h6 label 與 token 有差異；使用來源 token 核對，不能直接以示例文字作唯一標準。所有新 mapping 要在 theme 與 Storybook 一起測試。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#typography--section-5)

## 程式與規格對應

來源存在不代表已符合所有新規格；舊 Storybook 檔案是參考示例，請按 adoption checklist 逐項驗收。

- [packages/tokens/src/typography.ts](../../packages/tokens/src/typography.ts)
- [apps/storybook/src/tokens/Typography.stories.tsx](../../apps/storybook/src/tokens/Typography.stories.tsx)
- [spec/foundations.md](../../spec/foundations.md)
