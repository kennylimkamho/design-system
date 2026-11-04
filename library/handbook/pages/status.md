# Badge、tag 與 avatar

Badge 描述狀態，tag 分類資料，avatar 協助辨認身份；三者不能互相代替。

> Version 1.4 · Generic edition · Handbook 1.4.0-draft.9 · 設計基準；PR / 工程 review 待完成，並非 runtime 全量遷移。
> 更新：2026-11-04 14:22:33 HKT (UTC+08:00)

[互動示例](../product-design-system-v1-4-draft-9-annotatable.html#status) · [目錄](README.md)

## 分類與語意



[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#status--section-1)

| 域 | 詞彙例子 | 呈現 |
| --- | --- | --- |
| Connection | Connected / Connecting / Disconnected / Unknown | label + icon；unknown 不是綠色 |
| Execution | Queued / Running / Completed / Failed / Paused | 跟真實 job state；不可自行推算成功 |
| Resource | Draft / Active / Archived | 生命週期，不等於 connection |
| Approval | Pending / Approved / Rejected | 與執行状态分開 |
| Tags | VIP / Follow-up | 用於分類及篩選，可多個 |

## 尺寸與溢出

- Badge 12/18、水平8px、垂直2px；重要 status 文字不小於caption。Tag 若可刪除，remove target 與整粒 chip 分開命名。
- Tag 多於可容纳數量，用 +N 展開全部；已有 tags 仍可加 tag，不只 empty 才出現 add。
- Avatar list32px、conversation40px、profile64px 為起點；圖片失敗顯示 initials／neutral placeholder，不能隨機換身份。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#status--section-2)

## 互動與 a11y

- 純 badge 不是按鈕；可點 filter tag 才加 button semantics。Remove action 包含 tag 名称。
- 顏色只輔助，text 和 icon 共同表達狀態。Unread count 可視99+，accessible name 提供已知 exact count。
- Avatar 旁已有名字時裝飾圖 alt=""；單獨身份圖才提供有意義替代文字。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#status--section-3)

## 程式與規格對應

來源存在不代表已符合所有新規格；舊 Storybook 檔案是參考示例，請按 adoption checklist 逐項驗收。

- [packages/components/src/display/TagChip.tsx](../../packages/components/src/display/TagChip.tsx)
- [apps/storybook/src/atoms/Avatar.stories.tsx](../../apps/storybook/src/atoms/Avatar.stories.tsx)
- [apps/storybook/src/atoms/Badge.stories.tsx](../../apps/storybook/src/atoms/Badge.stories.tsx)
