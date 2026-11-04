# Management、Marketing、CS 嘅 Aha moment

同一個渠道接通之後，不同職責要從真實工作中看見不同價值。

> Version 1.4 · Generic edition · Handbook 1.4.0-draft.9 · 設計基準；PR / 工程 review 待完成，並非 runtime 全量遷移。
> 更新：2026-11-04 14:22:33 HKT (UTC+08:00)

[互動示例](../product-design-system-v1-4-draft-9-annotatable.html#role-aha) · [目錄](README.md)

## 角色係職責，不係硬編嘅身份

- 先利用已知團隊設定與權限；唔知先問。容許一個人兼多個職責、略過建議同日後更改，唔根據職稱單獨決定整條旅程。
- 每條建議須能解釋 Role → Responsibility → Capability → Customer value，並有真實完成事件；避免只量度卡片點擊或導覽完成。

## 三個正式設計目標



| 角色 | 首次有意義結果 | 不可誤判為成功 |
| --- | --- | --- |
| Management | 看見真實對話與已分配／未分配的服務概況 | 空的示範儀表板或未核實的總數。 |
| Marketing | 完成首個針對目標群體的送達，並能回看互動 | 只建草稿或看過預覽；mock demo 需明確標示。 |
| CS | 回覆第一則真實入站訊息 | 只開啟 Inbox；分配不是回覆的先決條件。 |

## 驗收與界線

- Marketing 可以先用明確標示嘅 mock demo 理解價值，但正式完成事件仍須基於真實送達和互動資料；冇資料時呈現下一步而非假成果。
- Management 需要可追溯的 scope 與更新時間；CS 需要可回復嘅草稿、視窗／權限限制。所有角色路徑保持切換與返回。
- 呢啲係設計目標，唔代表 backend 已提供所有量度事件；實作前要核對來源與權限。

## 程式與規格對應

來源存在不代表已符合所有新規格；舊 Storybook 檔案是參考示例，請按 adoption checklist 逐項驗收。

- [spec/feature-workspaces.md](../../spec/feature-workspaces.md)
- [spec/live-state-design-concerns.md](../../spec/live-state-design-concerns.md)
- [spec/data-display.md](../../spec/data-display.md)
