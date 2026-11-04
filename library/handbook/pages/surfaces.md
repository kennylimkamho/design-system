# 圓角、邊框與層次

用少量、可預測的層次表達內容與浮層，不讓每個區塊都像可點擊卡片。

> Version 1.4 · Generic edition · Handbook 1.4.0-draft.9 · 設計基準；PR / 工程 review 待完成，並非 runtime 全量遷移。
> 更新：2026-11-04 14:22:33 HKT (UTC+08:00)

[互動示例](../product-design-system-v1-4-draft-9-annotatable.html#surfaces) · [目錄](README.md)

## Shape 與 elevation



[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#surfaces--section-1)

| 角色 | 候選規格 | 使用 |
| --- | --- | --- |
| Control | 8px radius / 1px border | input、button；現有 runtime 12px 待遷移 |
| Card | 12px radius / 1px subtle border | 內容群；現有 runtime 16px 待遷移 |
| Dialog | 16px radius | 短任務浮層 |
| Pill / avatar | full radius | chip、badge、頭像，不用於每個選單 |
| E0 | 無陰影 | page、table、靜態區段 |
| E1 | 小陰影 + border | popover、dropdown，與底層分離 |
| E2 | 明顯但柔和陰影 + scrim | modal；不能靠巨大 z-index 壓過其他問題 |

## 分隔優先序

- 先用空間，其次背景，再用 1px border，最後才 shadow。避免 card 包 card 包 card。
- Hover lift 只給真正可點擊的卡片；純資訊卡不應在 hover 像按鈕彈起。
- Focus ring 用 2px blue outline + 2px offset，與 selected border 分開；不要用 overflow:hidden 裁掉焦點。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#surfaces--section-2)

## Layer stack

- Page content → sticky toolbar → navigation → popover → modal scrim + dialog → critical notification。必須共用 stack 管理。
- Portal 必須位於正確 modal context，不能令 dropdown 選項出現在 scrim 下面。
- Toast 不搶 focus；modal 同一時間只讓一個擁有焦點。關閉後返回有效 invoker。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#surfaces--section-3)

## 程式與規格對應

來源存在不代表已符合所有新規格；舊 Storybook 檔案是參考示例，請按 adoption checklist 逐項驗收。

- [packages/tokens/src/radius.ts](../../packages/tokens/src/radius.ts)
- [packages/tokens/src/shadows.ts](../../packages/tokens/src/shadows.ts)
- [packages/tokens/src/zIndex.ts](../../packages/tokens/src/zIndex.ts)
