# Contacts · Before / After

搵到正確聯絡人、理解資料，再喺清楚範圍內完成更新。

> Version 1.4 · Generic edition · Handbook 1.4.0-draft.9 · 設計基準；PR / 工程 review 待完成，並非 runtime 全量遷移。
> 更新：2026-11-04 14:22:33 HKT (UTC+08:00)

[互動示例](../product-design-system-v1-4-draft-9-annotatable.html#case-contacts) · [目錄](README.md)

## 01 · 任務及可用證據

- Contacts 係管理同類紀錄：用戶通常先按名稱、電話、來源或標籤收窄，再打開 detail 判斷，最後編輯或批次處理。單一新建表單與多列比較唔應被同一種版面硬套。
- App snapshot 有 Audience 列表、contactColumns、filter 及 bulk action；案例只記錄原始碼觀察，唔聲稱每個欄位、total 或批次權限喺所有帳戶都可用。

## 02 · 改前／改後及取捨

- 改前重構聚焦工具列過密、detail 返回易失去查找位置、批次 scope 唔夠顯性嘅風險；呢啲係設計審查問題，唔冒充已量化用戶痛點。
- 改後由『查找範圍 → 比較表格 → 詳情 → 有範圍操作』組織頁面。表格只放身份、可比較狀態與實際決策有用的欄位；長資料到 detail，唔為填滿畫面而加欄。

## 03 · 主要流程與例外

- Filtered empty 保留 query/filter 同 Clear 入口；loading 唔扮首次使用。選取跨頁時直接顯示作用範圍與可信總數，批次失敗顯示成功／失敗子集及恢復。
- 手機優先單列卡片與可達的 detail；如比較確實需要多欄，可以提供有標籤且鍵盤可捲動的 table，不可截斷身份同主要操作。

## 04 · 三項原則



| 標準 | 案例要求 |
| --- | --- |
| 易用 | 搜尋、篩選、詳情及返回連續，批次只在選取後出現。 |
| 可信賴 | total、scope、save 結果與部分失敗由真實資料支援。 |
| 可持續演進 | 表格欄位可按任務改變，但身份、範圍與返回契約不變。 |

## 05 · 驗收及狀態

- 驗收長姓名、多語、缺電話、多標籤、loading、filtered no-match、no permission、編輯驗證錯誤、跨頁選取及返回後狀態。
- 改後係設計提案；資料來源與權限仍留 App。對應現有 Contacts 規格，唔將示例人名或計數當真資料。

## 程式與規格對應

來源存在不代表已符合所有新規格；舊 Storybook 檔案是參考示例，請按 adoption checklist 逐項驗收。

- [spec/feature-workspaces.md](../../spec/feature-workspaces.md)
- [spec/data-display.md](../../spec/data-display.md)
- [spec/cross-task-design-audit.md](../../spec/cross-task-design-audit.md)

## 來源與案例證據

- [App source · src/Audience/index.tsx @ 1440000bd58275bbd347aa2141427b35ca1a0f19](https://github.com/chatdaddy/frontend-dashboard/blob/1440000bd58275bbd347aa2141427b35ca1a0f19/src/Audience/index.tsx) · observed-source
- [App source · src/Audience/contactColumns.tsx @ 1440000bd58275bbd347aa2141427b35ca1a0f19](https://github.com/chatdaddy/frontend-dashboard/blob/1440000bd58275bbd347aa2141427b35ca1a0f19/src/Audience/contactColumns.tsx) · observed-source
- [App source · src/Audience/AudienceBulkActionDropdown.tsx @ 1440000bd58275bbd347aa2141427b35ca1a0f19](https://github.com/chatdaddy/frontend-dashboard/blob/1440000bd58275bbd347aa2141427b35ca1a0f19/src/Audience/AudienceBulkActionDropdown.tsx) · observed-source
