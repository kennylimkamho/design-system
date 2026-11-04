# 01 · Smart defaults

用可靠的上下文減少重複決定，讓使用者調整一個合理起點，而不是每次由零開始。

> Version 1.4 · Generic edition · Handbook 1.4.0-draft.9 · 設計基準；PR / 工程 review 待完成，並非 runtime 全量遷移。
> 更新：2026-11-04 14:22:33 HKT (UTC+08:00)

[互動示例](../product-design-system-v1-4-draft-9-annotatable.html#smart-defaults) · [目錄](README.md)

## 何時使用

- 已知且低風險：沿用使用者的語言、account timezone、上次選定的table density；新資料頁先用Standard52px。
- 可逆的常見選擇：常用日期範圍、最近使用的view。系統須顯示目前預設，並容許清除／reset。
- Default來源优先序：此任務明確輸入 → 使用者已儲存偏好 → team設定 → 產品預設。不要以default蓋掉使用者剛改的值。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#smart-defaults--section-1)

## ChatDaddy 正反例



[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#smart-defaults--section-2)

| 場景 | 建議 | 避免 |
| --- | --- | --- |
| Broadcast排程 | 沿用account timezone並清楚顯示 | 默認立即發送給全部客戶 |
| Export | 預設已明確選取的資料並顯示count | 默選All contacts擴大範圍 |
| Contact form | 已有channel context時預填且可改 | 為減少空白而捏造姓名／電話 |
| Permissions / consent | 要求明確選擇 | 預先勾選管理員權限／付費選項 |

## 驗收與量度

- 檢查新用戶、回訪者、清除後、跨team、失效偏好；default可解釋、可恢復、可更改。
- 可觀察完成任務時間與改回default的比例；不能把未改預設直接當成明確偏好或同意。
- 「不要空白表單」是減少負擔的提示，不是要求每個欄位都有猜測值。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#smart-defaults--section-3)

## 程式與規格對應

來源存在不代表已符合所有新規格；舊 Storybook 檔案是參考示例，請按 adoption checklist 逐項驗收。

- [spec/README.md](../../spec/README.md)
- [spec/components.md](../../spec/components.md)
