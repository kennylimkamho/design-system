# Automation · 列表與編輯器

把流程管理與流程編輯分開：找到流程用列表，編輯邏輯用足夠大的工作區。

> Version 1.4 · Generic edition · Handbook 1.4.0-draft.9 · 設計基準；PR / 工程 review 待完成，並非 runtime 全量遷移。
> 更新：2026-11-04 14:22:33 HKT (UTC+08:00)

[互動示例](../product-design-system-v1-4-draft-9-annotatable.html#automation) · [目錄](README.md)

## 資訊架構

- Primary：Automation。Secondary：Flows / Keyword replies / Run history 是route，不是filter。
- Flows內的Active/Draft/Paused是status filter；不能再加一排同樣風格的假tabs。
- 選擇flow進editor；Overview/Versions若是同一flow的peer panels可用tabs。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#automation--section-1)

## Editor anatomy

- Top：flow name、saved/unsaved state、test、publish。Left可選node library；center canvas；right contextual inspector。
- Canvas工具：zoom、fit、undo/redo依實際能力。拖拉不是唯一操作方式，鍵盤／新增按鈕亦應可完成基本編輯。
- Inspector顯示選取node資料；改選node不丟未提交欄位。Publish與Save draft是不同動作及風險。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#automation--section-2)

## 狀態與防護



[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#automation--section-3)

| 情境 | 要求 |
| --- | --- |
| Unsaved | route change有guard；明確save/discard/cancel |
| Validation error | 指出node與field，點擊可定位 |
| Running job | run history來自backend，不用動畫代替state |
| Disconnected / conflict | 保留local edit，明確reconnect或版本衝突 |
| Permission | 可view但不能publish的狀態獨立處理 |

## Responsive

- 窄屏先收library/inspector；若完整editor不支援mobile，明確提供可讀overview／view-only，不能假装所有node已可編輯。
- 下方為版面示意，不是functional flow editor或backend simulator。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#automation--section-4)

## 程式與規格對應

來源存在不代表已符合所有新規格；舊 Storybook 檔案是參考示例，請按 adoption checklist 逐項驗收。

- [spec/navigation.md](../../spec/navigation.md)
- [spec/adoption.md](../../spec/adoption.md)
