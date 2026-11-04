# 08 · Visual path

用對齊、順序與視覺權重引導掃描；不要讓所有元素同時爭取注意力。

> Version 1.4 · Generic edition · Handbook 1.4.0-draft.9 · 設計基準；PR / 工程 review 待完成，並非 runtime 全量遷移。
> 更新：2026-11-04 14:22:33 HKT (UTC+08:00)

[互動示例](../product-design-system-v1-4-draft-9-annotatable.html#visual-path) · [目錄](README.md)

## Dense 與 sparse layouts

- 密集工作頁採清楚左側基線：table identity、inbox sender、settings section title先被找到。F式掃描可作設計heuristic，不是所有人必然的眼動規律。
- 稀疏介紹頁可由brand／headline→proof→action建立路徑；Z式構圖只是工具，不能無視RTL與任務順序。
- 不要為了視覺路徑而讓DOM focus order與視覺順序不一致。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#visual-path--section-1)

## ChatDaddy 應用

- Contacts：header主標題和create，接着toolbar，最後rows；每行identity同一基線，數字靠右。
- Login：heading→fields→login→secondary links；case study不要把視線引離auth錯誤。
- Dashboard：summary→trend→detail；保留label讓人知道圖表在解釋哪個數字。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#visual-path--section-2)

## 驗收

- 請新設計師／使用者指出「我在哪裡、現在看什麼、下一步做什麼」；三個答案應不需逐字讀頁。
- 手機stack後再次檢查順序；desktop右上CTA不能跑到手機很後面。
- Center alignment適用短empty state／brand內容，不作所有settings/body text的預設。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#visual-path--section-3)

## 程式與規格對應

來源存在不代表已符合所有新規格；舊 Storybook 檔案是參考示例，請按 adoption checklist 逐項驗收。

- [spec/README.md](../../spec/README.md)
- [spec/components.md](../../spec/components.md)
