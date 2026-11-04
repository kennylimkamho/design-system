# Text fields 與 validation

label、輸入、helper、error 是一個完整元件，不是孤立的輸入框。

> Version 1.4 · Generic edition · Handbook 1.4.0-draft.9 · 設計基準；PR / 工程 review 待完成，並非 runtime 全量遷移。
> 更新：2026-11-04 14:22:33 HKT (UTC+08:00)

[互動示例](../product-design-system-v1-4-draft-9-annotatable.html#fields) · [目錄](README.md)

## Anatomy 與規格



[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#fields--section-1)

| 區域 | 規格 | 行為 |
| --- | --- | --- |
| Label | 14/22, 500；距 input 8px | 持續可見，對應 for/id；placeholder 不能代替 |
| Input | 40px high、12px horizontal padding、8px radius | keyboard type / autocomplete 依語意 |
| Helper / error | 12/18 或13/20；距 input 4px | 佔用自己的行，不擠窄 input |
| Required | 表單先交代必填規則 | 不能只用紅色星號無 accessible text |
| Textarea | 至少 3 行；可垂直調整 | 長內容不使用單行輸入 |

## 狀態矩陣

- Empty、filled、hover、focus、invalid、disabled、read-only 各有示例。Read-only 保留可選取文字；disabled 不表示沒有資料。
- Error 用文字 + icon / border；aria-invalid=true，helper/error 經 aria-describedby 連接。
- 初次輸入前不立刻呈紅色；通常 blur 或 submit 驗證。使用者修正後更新，但避免每個按鍵都打斷。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#fields--section-2)

## 表單層級

- 一欄為預設；兩欄只用於有關聯的短欄位，例如 first/last name 且適用語言。姓名不要強拆所有文化。
- Submit 失敗焦點移到第一個錯誤或 linked summary；保留輸入值。Server validation message 顯示在適合位置。
- 本地示例只檢查 required，不代表後端 field contract；不要在 DS 裡重新定義密碼安全或帳戶存在性。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#fields--section-3)

## 程式與規格對應

來源存在不代表已符合所有新規格；舊 Storybook 檔案是參考示例，請按 adoption checklist 逐項驗收。

- [apps/storybook/src/molecules/FormField.stories.tsx](../../apps/storybook/src/molecules/FormField.stories.tsx)
- [spec/components.md](../../spec/components.md)
