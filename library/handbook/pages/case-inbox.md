# Inbox · Before / After

找出需回覆嘅對話，在足夠上下文中回覆、分配與跟進。

> Version 1.4 · Generic edition · Handbook 1.4.0-draft.9 · 設計基準；PR / 工程 review 待完成，並非 runtime 全量遷移。
> 更新：2026-11-04 14:22:33 HKT (UTC+08:00)

[互動示例](../product-design-system-v1-4-draft-9-annotatable.html#case-inbox) · [目錄](README.md)

## 01 · 任務及可用證據

- 客服先知道邊啲對話需要自己處理，再讀對話／客戶背景，然後回覆、轉交或跟進。高頻任務可以 compact，但身份、狀態及下一步唔可因密度而消失。
- App snapshot 包含 filter panel、chat row、message bubble 等來源；案例唔推斷所有渠道都提供相同 read receipt 或 24 小時限制。

## 02 · 改前／改後及取捨

- 改前重構呈現 filter、列表 row、message metadata 之間的視覺競爭；係根據程式與原則整理，唔係聲稱單一歷史 screenshot。
- 改後規範：channel／assignee 一項一行；scope、未讀、姓名與必要狀態常駐；assign、+tag 等低頻動作於 hover/focus 顯示，touch 另有明確入口。

## 03 · 主要流程與例外

- 切換 thread 保留合適嘅 scroll／草稿；絕不能把一個客戶的文字帶入另一個客戶發送。完整日期時間可見或可直接展開，訊息失敗、斷線、視窗關閉要有可用補救。
- Collapsed panel 可短暫 hover 展開，但 keyboard focus 留在 panel 時不自行關閉；手機改為列表／thread 分頁，composer 不被鍵盤蓋住。

## 04 · 三項原則



| 標準 | 案例要求 |
| --- | --- |
| 易用 | 找到待處理範圍快，回覆與分配不需穿越多層選單。 |
| 可信賴 | 時間、未讀、傳送狀態與權限都如實可見。 |
| 可持續演進 | 新渠道沿用對話工作模型，只在實際能力有差異處分支。 |

## 05 · 驗收及狀態

- 測試無對話、篩選無結果、長名稱、附件失敗、多渠道、內部備註、切換 thread、桌面 hover/focus、touch、reduced motion。
- 改後係 Design System 提案；對話發送與分配仍由 App 既有 mutation、權限同狀態決定。

## 程式與規格對應

來源存在不代表已符合所有新規格；舊 Storybook 檔案是參考示例，請按 adoption checklist 逐項驗收。

- [spec/cross-task-design-audit.md](../../spec/cross-task-design-audit.md)
- [spec/live-state-design-concerns.md](../../spec/live-state-design-concerns.md)
- [spec/feature-workspaces.md](../../spec/feature-workspaces.md)

## 來源與案例證據

- [App source · src/InboxV2/FilterPanel/ConversationFilters.tsx @ 1440000bd58275bbd347aa2141427b35ca1a0f19](https://github.com/chatdaddy/frontend-dashboard/blob/1440000bd58275bbd347aa2141427b35ca1a0f19/src/InboxV2/FilterPanel/ConversationFilters.tsx) · observed-source
- [App source · src/InboxV2/ChatList/ChatRow.tsx @ 1440000bd58275bbd347aa2141427b35ca1a0f19](https://github.com/chatdaddy/frontend-dashboard/blob/1440000bd58275bbd347aa2141427b35ca1a0f19/src/InboxV2/ChatList/ChatRow.tsx) · observed-source
- [App source · src/InboxV2/MessagePane/MessageBubble.tsx @ 1440000bd58275bbd347aa2141427b35ca1a0f19](https://github.com/chatdaddy/frontend-dashboard/blob/1440000bd58275bbd347aa2141427b35ca1a0f19/src/InboxV2/MessagePane/MessageBubble.tsx) · observed-source
