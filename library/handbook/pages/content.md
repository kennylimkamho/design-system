# 文案、語言與資料格式

讓文字幫助完成任務；中英混排、日期、空值都有固定處理方式。

> Version 1.4 · Generic edition · Handbook 1.4.0-draft.9 · 設計基準；PR / 工程 review 待完成，並非 runtime 全量遷移。
> 更新：2026-11-04 14:22:33 HKT (UTC+08:00)

[互動示例](../product-design-system-v1-4-draft-9-annotatable.html#content) · [目錄](README.md)

## 語氣與命名

- 本頁定義語氣、翻譯與資料格式；每段文案何時出現、要放哪一層，先看『內容跟住時刻走』章節及 spec/content-timing.md。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#content--section-1)

| 情境 | 建議 | 避免 |
| --- | --- | --- |
| CTA | 建立聯絡人／儲存變更 | 確定／操作／Click here |
| Error | 未能儲存。請重試；你的輸入仍保留。 | Something went wrong（無出路） |
| Empty | 還沒有聯絡人。新增或匯入你的第一位聯絡人。 | No data（無情境） |
| Permission | 你沒有編輯權限。請聯絡管理員。 | 灰色按鈕但完全沒有原因 |
| Pending | 正在匯入 40 / 120 筆 | 已完成（API 還沒返回） |

## 繁簡英與 layout

- 產品名、API identifiers 不強制翻譯；一般操作使用同一份 glossary。不要將 translation key 顯示給使用者。
- English button 用 sentence case；中文不加 tracking。為長翻譯保留至少可換行的空間，不靠把 label 縮到 10px。
- 姓名容許 Unicode；前端與後端驗證要一致。不要以 ASCII-only 正則拒絕中文姓名。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#content--section-2)

## 數值與時間

- 完整日期示例：2026年9月24日 16:51（香港時間）。頁面首次或欄位 header 交代時區，跨時區產品依 user/account 設定。
- 相對時間可作補充；關鍵記錄有完整日期，不能只有「3m」及 hover tooltip。
- 貨幣附 currency code；0 是真實數字，— 是未提供；loading、unknown、無權限不可共用同一空白。
- 百分比小數位按任務統一；不要混用 80%、80.0%、0.8 而無說明。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#content--section-3)

## 程式與規格對應

來源存在不代表已符合所有新規格；舊 Storybook 檔案是參考示例，請按 adoption checklist 逐項驗收。

- [spec/accessibility-content.md](../../spec/accessibility-content.md)
- [spec/data-display.md](../../spec/data-display.md)
