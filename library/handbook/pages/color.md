# 色彩與語意

保留 ChatDaddy 品牌，同時分清 action、selection、status、surface 與資料視覺化。

> Version 1.4 · Generic edition · Handbook 1.4.0-draft.9 · 設計基準；PR / 工程 review 待完成，並非 runtime 全量遷移。
> 更新：2026-11-04 14:22:33 HKT (UTC+08:00)

[互動示例](../product-design-system-v1-4-draft-9-annotatable.html#color) · [目錄](README.md)

## 主要色彩角色



[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#color--section-1)

| 角色 | 值 | 使用規則 |
| --- | --- | --- |
| Brand / action | #0F5BFF | 主要按鈕、link、focus；白色文字 |
| Action hover | #0740FA | hover feedback；不表示另一種業務狀態 |
| Selected surface | #E6EEFF / #0A3FB2 | 选取背景及文字，不只改文字色 |
| Brand green | #07CB6E | accent；不要直接配細小白字 |
| Success | #036839 on #F1FFF4 | 成功文案配 check；正面結果 |
| Warning | #864700 on #FFFCEE | 需留意但未中止；附解決方法 |
| Danger | #BD2914 on #FFF5F5 | 錯誤、破壞性動作；不可用於普通 emphasis |
| Primary / secondary text | #101827 / #4B5563 | 主文與次要文；disabled 另有狀態 |
| Page / raised | #F7F7F7 / #FFFFFF | 頁底與浮起內容，不每層都陰影 |

## Token 使用層級

- Primitive 描述原始色值，semantic 描述用途，component 描述特定元件角色。設計交付寫 action-bg，不只寫 #0F5BFF。
- 平台 logo 顏色遵從品牌，不套用 status 顏色；chart series 另定 legend，避免讀者把每條綠線解讀成成功。
- 亮綠只作 accent；若用於底色，配深色文字。所有新組合需重新量度 contrast，已有通過組合不代表整頁通過。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#color--section-2)

## Dark / white-label 邊界

- 本版只批准示例在 light surface 使用。既有 dark tokens 保留，不把 light 字色直接搬到暗底。
- White-label 應替換 brand semantic roles，保留 warning／error 語意。標識、focus、disabled 及圖表仍須逐項測試。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#color--section-3)

## 程式與規格對應

來源存在不代表已符合所有新規格；舊 Storybook 檔案是參考示例，請按 adoption checklist 逐項驗收。

- [spec/tokens.json](../../spec/tokens.json)
- [packages/tokens/src/colors.ts](../../packages/tokens/src/colors.ts)
