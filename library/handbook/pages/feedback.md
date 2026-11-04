# Toast、banner 與 tooltip

反饋的強度必須與事件的重要性相稱；可恢復的問題要保留解決入口。

> Version 1.4 · Generic edition · Handbook 1.4.0-draft.9 · 設計基準；PR / 工程 review 待完成，並非 runtime 全量遷移。
> 更新：2026-11-04 14:22:33 HKT (UTC+08:00)

[互動示例](../product-design-system-v1-4-draft-9-annotatable.html#feedback) · [目錄](README.md)

## Pattern decision



[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#feedback--section-1)

| 訊息 | 模式 | 生命週期 |
| --- | --- | --- |
| 短暫非關鍵完成 | Toast / status | 不搶 focus；可關閉；可選合理 timeout |
| 影響目前任務的狀態 | Inline banner | 持續到問題消失／使用者處理 |
| 阻止继续的錯誤 | Field error / dialog | 提供具體 recovery，保留輸入 |
| 簡短名詞說明 | Tooltip | hover + focus；不是唯一說明載體 |

## Toast 規格

- 一個短標題，最多一行補充，可選單一 undo／view action；操作 text 明確。不要累積十張 toast 遮住頁面。
- 成功以 status/polite announcement；急迫錯誤才考慮 alert。不要每次微小同步都讓 screen reader 連續播報。
- 有 critical action 的 toast 不應太快自動消失。此手冊示例採手動關閉，避免讀取時間不足。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#feedback--section-2)

## Banner 與 tooltip

- Banner 放在受影響區域上方，而不是與內容無關的全域角落。Reconnect button 與斷線原因同時可見。
- Tooltip 只補充內容；keyboard focus 可觸發，Escape 可關閉。含互動 links 的內容用 popover，不用tooltip。
- Disabled control 的原因要在可讀文案交代，不依賴 disabled 元件本身收 hover。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#feedback--section-3)

## 程式與規格對應

來源存在不代表已符合所有新規格；舊 Storybook 檔案是參考示例，請按 adoption checklist 逐項驗收。

- [packages/components/src/layout/ToastStack.tsx](../../packages/components/src/layout/ToastStack.tsx)
- [apps/storybook/src/atoms/Tooltip.stories.tsx](../../apps/storybook/src/atoms/Tooltip.stories.tsx)
