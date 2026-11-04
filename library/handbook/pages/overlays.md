# Dialog、drawer 與 popover

依任務決定打斷程度：需要回答才 modal，只補充 context 就用較輕的浮層。

> Version 1.4 · Generic edition · Handbook 1.4.0-draft.9 · 設計基準；PR / 工程 review 待完成，並非 runtime 全量遷移。
> 更新：2026-11-04 14:22:33 HKT (UTC+08:00)

[互動示例](../product-design-system-v1-4-draft-9-annotatable.html#overlays) · [目錄](README.md)

## 選用与尺寸



[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#overlays--section-1)

| 元件 | 何時用 | 候選尺寸 |
| --- | --- | --- |
| Popover | 短選單、快速資訊 | 內容寬240–360px；不做長表單 |
| Dialog | 短而聚焦的任務／confirmation | 小400px、中560px、最大720px |
| Drawer | 保留底層 context 的詳情或編輯 | 320–480px；窄屏改近全屏 |
| Dedicated page | 長流程、複雜設定／editor | 有 route、Back、unsaved guard |

## Anatomy 與關閉

- 標題 → 可選說明 → body → footer；header/footer 不遮住可捲 body。關閉按鈕有名稱，取消操作始終可到達。
- 一般 dialog 可 Escape 關閉；有未儲存內容先確認是否放棄。Pending不可取消時要明確說明，不能把整個介面無限鎖死。
- Destructive confirmation 初始 focus 放安全選項，文案點出對象、數量及可否恢復，不只寫 Are you sure。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#overlays--section-2)

## Focus 與 stacking

- 原生 dialog / 管理過的 library dialog 把背景設為 inert，Tab/Shift+Tab 留在dialog，close回到invoker或合理下一項。
- Dropdown portal 必須留在 dialog 的互動層；不要同時兩個 modal 都聲稱擁有焦點。
- Optional onboarding 排隊，不能覆蓋 error recovery。Drawer 若非modal，不應錯設 aria-modal=true。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#overlays--section-3)

## 示例與實作差異

- 下方是 native dialog 的離線示例，沒有真實刪除。正式產品應沿用既有 ConfirmDialog / MUI focus management。
- 目前 ConfirmDialog 接受 loading prop；呼叫端仍須管理 async 結果，不能只因 callback 回傳 Promise 就假定元件會管理 pending。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#overlays--section-4)

## 程式與規格對應

來源存在不代表已符合所有新規格；舊 Storybook 檔案是參考示例，請按 adoption checklist 逐項驗收。

- [packages/components/src/feedback/ConfirmDialog.tsx](../../packages/components/src/feedback/ConfirmDialog.tsx)
- [packages/components/src/feedback/DeleteConfirmDialog.tsx](../../packages/components/src/feedback/DeleteConfirmDialog.tsx)
- [spec/components.md](../../spec/components.md)
