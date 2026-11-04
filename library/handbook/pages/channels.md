# Channels 與 Broadcasts

連線狀態、發送狀態、商業權限分清楚，避免用同一個綠點代表所有事情。

> Version 1.4 · Generic edition · Handbook 1.4.0-draft.9 · 設計基準；PR / 工程 review 待完成，並非 runtime 全量遷移。
> 更新：2026-11-04 14:22:33 HKT (UTC+08:00)

[互動示例](../product-design-system-v1-4-draft-9-annotatable.html#channels) · [目錄](README.md)

## Channels anatomy

- 每項channel顯示平台、名稱、帳戶識別、connection status及recovery action。正式平台logo與一般utilities分開。
- Connected、connecting、disconnected、restricted、unknown各自有label；unknown不要顯示綠點。
- Reconnect保持context；不可讓optional onboarding遮住授權／掃碼／錯誤。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#channels--section-1)

## Broadcast 流程



[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#channels--section-2)

| 階段 | 設計內容 | 確認事項 |
| --- | --- | --- |
| Draft | 內容編輯、channel、recipient scope | 現有模板及permissions |
| Review | recipient count、schedule/timezone、cost如適用 | 已知total才顯示數量 |
| Confirm | 高影響send需明確確認 | 按下前可返回修改 |
| Sending | 真實job progress、可取消若支援 | 不能以時間估算完成 |
| Result | delivered/failed/unknown分開 | 部分失敗可查看／retry範圍 |

## 列表與操作

- Draft／Scheduled／Sent是同資料集的filter或saved view；若是完全不同功能才用secondary nav。
- Delete draft與cancel scheduled send是不同action。Scheduled time必須有完整日期及時區。
- 窄屏先保留campaign name、status、time、primary next action；其餘到detail。
- Channel 管理清單優先名稱、電話／帳戶識別、單一清楚狀態與下一步；避免『連接』和『狀態』兩欄重複同一意思。項目很少時不必硬加搜尋。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#channels--section-3)

## 程式與規格對應

來源存在不代表已符合所有新規格；舊 Storybook 檔案是參考示例，請按 adoption checklist 逐項驗收。

- [packages/components/src/selectors/ChannelSelector.tsx](../../packages/components/src/selectors/ChannelSelector.tsx)
- [spec/components.md](../../spec/components.md)
- [spec/cross-task-design-audit.md](../../spec/cross-task-design-audit.md)
