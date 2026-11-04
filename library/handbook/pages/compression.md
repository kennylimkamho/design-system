# 07 · Visual compression

用恰當的字重、標記與分組減少重複資訊；精簡不等於移除理解所需的內容。

> Version 1.4 · Generic edition · Handbook 1.4.0-draft.9 · 設計基準；PR / 工程 review 待完成，並非 runtime 全量遷移。
> 更新：2026-11-04 14:22:33 HKT (UTC+08:00)

[互動示例](../product-design-system-v1-4-draft-9-annotatable.html#compression) · [目錄](README.md)

## 四個步驟

- 1. 熟悉身份可以用正式logo／glyph輔助，陌生操作保留label。
- 2. 先排權重：一個primary action、一個主要資料身份，其餘降為secondary。
- 3. 刪除重複詞：欄位header已寫「狀態」，每列不再重複「狀態：」。
- 4. 把會誤導的重複限定語拿走；真的有差別則清楚命名，不只縮短。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#compression--section-1)

## ChatDaddy 例子

- Inbox row：name最重、snippet次要、channel小型標記、time靠右；不讓四行同樣粗。
- Tags可收為兩個＋N，但+N可展開；完整日期不能壓成一個無法查閱的省略號。
- Toolbar低頻assign/tag操作可hover/focus reveal，主要create/search仍常駐。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#compression--section-2)

## 驗收

- 先讓新用戶說明各icon與資料意思。若需要猜，就恢復label或提供更直接上下文。
- 不能以減少文字為由刪currency、timezone、permission原因、error recovery或破壞性操作對象。
- 比較精簡前後：應更快掃描，且保留keyboard／touch可達性與資料完整性。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#compression--section-3)

## 程式與規格對應

來源存在不代表已符合所有新規格；舊 Storybook 檔案是參考示例，請按 adoption checklist 逐項驗收。

- [spec/README.md](../../spec/README.md)
- [spec/components.md](../../spec/components.md)
