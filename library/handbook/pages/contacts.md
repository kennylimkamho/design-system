# Contacts · 資料管理頁

共用資料頁模式：先找到資料，再查看詳情，最後完成有明確範圍的操作。

> Version 1.4 · Generic edition · Handbook 1.4.0-draft.9 · 設計基準；PR / 工程 review 待完成，並非 runtime 全量遷移。
> 更新：2026-11-04 14:22:33 HKT (UTC+08:00)

[互動示例](../product-design-system-v1-4-draft-9-annotatable.html#contacts) · [目錄](README.md)

## 完整版面 anatomy

- Primary rail 保持 Contacts current；secondary nav 放 Contacts / Lists / Import history 等真正不同工作流程。
- Header：聯絡人＋可信total＋「建立聯絡人」。Toolbar：query、filters、columns、import/export。Table 優先顯示 identity、電話、來源渠道／號碼、新增日期、status 及有用的 tags；其餘欄位按工作調整，唔為填滿表格而加欄。
- Detail 以右側panel或route開啟，保留底層query/page/scroll；窄屏進獨立detail，Back回原狀。
- 選取 checkbox 在進入批次工作時才突出；空 tags 提供「加入標籤」，不反覆顯示無操作價值的『未有標籤』。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#contacts--section-1)

## 主要流程



[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#contacts--section-2)

| 步驟 | 行為 | 不能遺失 |
| --- | --- | --- |
| Find | 輸入query或選tag/owner | active filters及結果scope |
| Inspect | 開聯絡人detail | list position、selected rows |
| Edit | 明確editable fields＋save/cancel | server validation、Unicode姓名 |
| Bulk | 先選取，再選assign/tag/export | affected count、跨頁scope |
| Return | 關閉detail／Back | 原資料頁狀態 |

## Mobile 與異常

- 手機優先卡片顯示name、status、下一動作；大量欄位比較才使用horizontal table。
- Filtered empty保留toolbar及clear filters；permission缺失仍可view時保留資料。匯入/匯出需要後端job與error report，不由demo推算成功。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#contacts--section-3)

## 交付 checklist

- 長公司名／多tag、缺少電話、非拉丁姓名、沒有編輯權限、sort及filter後返回、批次部分失敗。
- 示例使用虛構聯絡人；現有API及permissions不會被手冊修改。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#contacts--section-4)

## 程式與規格對應

來源存在不代表已符合所有新規格；舊 Storybook 檔案是參考示例，請按 adoption checklist 逐項驗收。

- [packages/components/src/display/PaginatedDataGrid.tsx](../../packages/components/src/display/PaginatedDataGrid.tsx)
- [packages/components/src/selectors/ContactSelector.tsx](../../packages/components/src/selectors/ContactSelector.tsx)
- [spec/cross-task-design-audit.md](../../spec/cross-task-design-audit.md)
