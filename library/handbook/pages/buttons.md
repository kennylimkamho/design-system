# Buttons 與 icon buttons

按鈕執行動作；link 前往目的地。層級由任務重要性決定，而不是用不同顏色裝飾。

> Version 1.4 · Generic edition · Handbook 1.4.0-draft.9 · 設計基準；PR / 工程 review 待完成，並非 runtime 全量遷移。
> 更新：2026-11-04 14:22:33 HKT (UTC+08:00)

[互動示例](../product-design-system-v1-4-draft-9-annotatable.html#buttons) · [目錄](README.md)

## 變體與選用



[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#buttons--section-1)

| 變體 | 使用 | 不使用 |
| --- | --- | --- |
| Primary / filled blue | 一個任務的主要完成動作：儲存、建立 | 同一 toolbar 每個 action 都 primary |
| Secondary / outline | 次要操作、取消、匯出 | 用來表示 selected 狀態 |
| Tertiary / text | 低頻或低強度操作、編輯 | 沒有背景仍要有足夠 target |
| Danger | 不可逆刪除，搭配具體對象 | 普通取消或返回 |
| Icon button | 熟悉、頻繁、空間有限的動作 | 新功能或含糊的 icon-only CTA |

## 尺寸與結構



[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#buttons--section-2)

| 項目 | Standard | Compact / narrow |
| --- | --- | --- |
| 高度 | 40px | 32px desktop；touch target ≥44px |
| 文字 | 14/22, 500 | 手機仍清晰；不可縮細換取空間 |
| 左右 padding | 16px | 12px |
| Icon / gap | 20px / 8px | 16px / 8px |
| Radius | 8px candidate | 同組一致 |

## 所有狀態

- Default：文字是具體動詞；hover：背景加深；pressed：短暫 scale；focus-visible：獨立 outline，不能只等 hover。
- Disabled：native disabled + 附近原因，不靠 hover 才解釋。若需保留可聚焦說明，可用 aria-disabled 並阻止 action，不能只改外觀。
- Pending：保持寬度，防止重複提交，spinner 伴隨「正在儲存」。完成只在真實成功後；失敗保留輸入及 retry。
- Destructive：清楚列明影響範圍；不可逆／批次動作走 confirmation。取消不是 danger。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#buttons--section-3)

## 驗收與實作

- Enter / Space 可啟動；非提交按鈕明確 type=button；disabled 不會送出事件。
- 本庫主要沿用 MUI Button，並非另有 @chatdaddy/components Button export。先改 theme／variant，再同步 Storybook，勿自建第三套。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#buttons--section-4)

## 程式與規格對應

來源存在不代表已符合所有新規格；舊 Storybook 檔案是參考示例，請按 adoption checklist 逐項驗收。

- [apps/storybook/src/atoms/Button.stories.tsx](../../apps/storybook/src/atoms/Button.stories.tsx)
- [packages/theme/src/index.ts](../../packages/theme/src/index.ts)
