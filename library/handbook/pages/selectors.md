# Select、搜尋與多選

少量固定選項用簡單 select；人員、tag、channel 等資料集合用可搜尋 selector。

> Version 1.4 · Generic edition · Handbook 1.4.0-draft.9 · 設計基準；PR / 工程 review 待完成，並非 runtime 全量遷移。
> 更新：2026-11-04 14:22:33 HKT (UTC+08:00)

[互動示例](../product-design-system-v1-4-draft-9-annotatable.html#selectors) · [目錄](README.md)

## Pattern decision



[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#selectors--section-1)

| 情況 | 模式 | 資料契約 |
| --- | --- | --- |
| ≤7 個穩定選项 | Native select 或 radio | 無需每次開 selector 都 search |
| 大量資料或長名字 | Searchable combobox / popover | query、loading、no results、error |
| 選多個 tag / assignee | Multi-select + selected chips | clear / remove 不影響其他條件 |
| 有層級的分類 | 分組列表 / disclosure | 不把群組标题當可選資料 |

## 面板結構

- Trigger 顯示目前值或明確 placeholder。面板為 search → selected/available groups → option list → 可選的 apply footer。
- Menu 寬度至少容納 trigger 與主要名稱；長列表有明確 scroll viewport。固定 helper 不遮住最後選項。
- 每個選項顯示主要名稱，avatar/icon 是辅助；同名人員附第二身份欄位，不依顏色辨人。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#selectors--section-2)

## 狀態与 keyboard

- Open 時將焦點放 query 或目前 option；Escape 關閉並回到 trigger。Arrow keys 選项，Enter 選取；不能困住 Tab。
- Loading 不顯示「沒有結果」；empty dataset 與 no-match 分開。API 失敗保留 query 並給 retry。
- Popular tags 只在後端有可靠 usage/count 定義時顯示；不要把字母前幾個 tag 假裝成熱門。
- 多選移除 chip 後焦點保持合理位置；清除全部與移除一個是不同 action。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#selectors--section-3)

## 程式與規格對應

來源存在不代表已符合所有新規格；舊 Storybook 檔案是參考示例，請按 adoption checklist 逐項驗收。

- [packages/components/src/selectors/SelectorPopover.tsx](../../packages/components/src/selectors/SelectorPopover.tsx)
- [packages/components/src/selectors/TagSelectorDropdown.tsx](../../packages/components/src/selectors/TagSelectorDropdown.tsx)
- [packages/components/src/selectors/TeamMemberSelector.tsx](../../packages/components/src/selectors/TeamMemberSelector.tsx)
- [packages/components/src/selectors/ChannelSelector.tsx](../../packages/components/src/selectors/ChannelSelector.tsx)
