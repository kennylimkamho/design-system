# 由連結渠道到首次價值

連結只係能力開通；第一則真實對話同角色所需結果，先係可驗證嘅價值。

> Version 1.4 · Generic edition · Handbook 1.4.0-draft.9 · 設計基準；PR / 工程 review 待完成，並非 runtime 全量遷移。
> 更新：2026-11-04 14:22:33 HKT (UTC+08:00)

[互動示例](../product-design-system-v1-4-draft-9-annotatable.html#activation-journey) · [目錄](README.md)

## 入口與決定

- 新團隊先理解連結渠道可以完成咩工作，再確認授權、費用或不可逆後果。所需資訊應在承諾之前可見；掃碼與 technical help 留到相應時刻。
- 若團隊已連結渠道、欠缺權限，或者由 deep link 進入，入口要按真實狀態改變；唔可以每次重新展示同一段 onboarding。

## 由完成設定走向真實使用



| 時刻 | 真實完成事件 | 下一步 |
| --- | --- | --- |
| 連結渠道 | 服務確認渠道可用 | 去 Inbox 驗證能否收到對話。 |
| 首則對話 | 實際客戶訊息到達 | 按角色引導回覆、分配或觀察。 |
| 角色價值 | 由各角色的真實工作結果確認 | 指出下一個可重複使用的任務。 |

## 分支、補救與回訪

- 授權失敗、連接中、斷線、無對話、權限不足屬不同分支；保留原選擇與上下文並指出可執行補救。
- 邀請團隊可以係適當嘅下一步，但唔係連接完成後所有人必做嘅阻塞關卡。用戶可暫停、回來繼續，進度只能由真實事件完成。
- 檢查 Home、Channels、Inbox 之間嘅深連結同返回路徑；唔以 mock demo 或見過教學當作已收到真實客戶訊息。

## 程式與規格對應

來源存在不代表已符合所有新規格；舊 Storybook 檔案是參考示例，請按 adoption checklist 逐項驗收。

- [spec/feature-workspaces.md](../../spec/feature-workspaces.md)
- [spec/content-timing.md](../../spec/content-timing.md)
- [spec/live-state-design-concerns.md](../../spec/live-state-design-concerns.md)
