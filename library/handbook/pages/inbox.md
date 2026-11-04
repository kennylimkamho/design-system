# Inbox · 客服工作區

閱讀、回覆與上下文是核心。讓高頻工作迅速，但不犧牲日期、身份與訊息狀態。

> Version 1.4 · Generic edition · Handbook 1.4.0-draft.9 · 設計基準；PR / 工程 review 待完成，並非 runtime 全量遷移。
> 更新：2026-11-04 14:22:33 HKT (UTC+08:00)

[互動示例](../product-design-system-v1-4-draft-9-annotatable.html#inbox) · [目錄](README.md)

## 四區工作空間

- Primary rail → filters / saved views → conversation list → message thread；contact inspector可選，不是必須常駐第五欄。
- Filters：All / Unread / Mine / Unassigned / Archived 是scope；channel／assignee 一個 entity 一行，唔用 tag cloud 扮列表。名稱、必要電話、狀態及有可靠來源的待處理數保持可見。
- Conversation list：avatar、name、必要電話、channel、snippet、time、unread/assigned；加tag及assign在hover/focus出現，touch有可達入口。三行資訊與略低高度係 Inbox 候選密度，須驗證長名稱及窄屏。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#inbox--section-1)

## Message anatomy



[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#inbox--section-2)

| 元素 | 規則 | 異常狀態 |
| --- | --- | --- |
| 身份與方向 | 入/出方向清楚；internal note另有label | 不能只靠bubble顏色辨認 |
| 內容 | 文字/media/quoted message各有布局 | 附件失敗、缺preview、長URL |
| 日期 | 完整日期時間可見或可直接展開 | 跨日／跨年／account timezone |
| Delivery | queued/sent/delivered/read/failed | 依channel真實能力，不造假double-check |
| Composer | message/internal note切換清楚 | disconnected、permission、window expired |

## 上下文與 hover

- 切換conversation保留各自scroll/草稿策略；不可把一個客戶草稿送到另一個thread。
- Collapsed filters可以hover preview，但focus在panel或popup內時不關閉。Pin是持久選擇；hover是暫時狀態。
- Conversation row已有tags仍提供add；popular tags只有可靠backend usage時才出現。
- Phone 與 unread count 係工作資訊，不可為 hover action 騰位而消失；未讀 badge 用同一套大小／上限語言。面板寬度可調屬待驗證工作區設定，不能令 thread 過窄。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#inbox--section-3)

## Mobile

- 列表與thread分頁；thread header有Back與身份；composer保留在可操作區，keyboard出現不蓋住send。
- 示例不發送真實訊息。各channel視窗／template限制沿用backend contract，不能用設計改掉。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#inbox--section-4)

## 已抽出的真實元件

先讀手冊規則；下列是 package-backed 示範，App 採用仍待逐頁驗證。其餘 Storybook 舊示例只作參考。

- Inbox · views, channel & assignee filters — [互動示例](https://kennylimkamho.github.io/design-system/lab/?path=/story/organisms-app-derived-inbox-filters--controlled-filters-and-actions) · [原始碼](../../packages/components/src/inbox/InboxFilters.tsx)

## 程式與規格對應

來源存在不代表已符合所有新規格；舊 Storybook 檔案是參考示例，請按 adoption checklist 逐項驗收。

- [packages/components/src/inbox/InboxFilters.tsx](../../packages/components/src/inbox/InboxFilters.tsx)
- [apps/storybook/src/templates/ChatLayout.stories.tsx](../../apps/storybook/src/templates/ChatLayout.stories.tsx)
- [apps/storybook/src/organisms/ChatListItem.stories.tsx](../../apps/storybook/src/organisms/ChatListItem.stories.tsx)
- [apps/storybook/src/organisms/ChatBubble.stories.tsx](../../apps/storybook/src/organisms/ChatBubble.stories.tsx)
- [spec/cross-task-design-audit.md](../../spec/cross-task-design-audit.md)
