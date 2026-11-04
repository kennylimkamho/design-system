# 06 · Contrast effect

提供公平、同單位的對照，讓使用者理解差異；不以不相關的大數字製造錯覺。

> Version 1.4 · Generic edition · Handbook 1.4.0-draft.9 · 設計基準；PR / 工程 review 待完成，並非 runtime 全量遷移。
> 更新：2026-11-04 14:22:33 HKT (UTC+08:00)

[互動示例](../product-design-system-v1-4-draft-9-annotatable.html#contrast) · [目錄](README.md)

## 使用場合

- Plan comparison、功能開關前後、時間／成本節省、A/B流程設定。
- 對照使用相同期間、currency、稅／費用範圍與資料來源；actual、estimated、sample標清楚。
- 一個主要差異用視覺層級突出；其餘資訊仍可查閱。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#contrast--section-1)

## ChatDaddy 例子

- Billing同時顯示目前月費、變更後月費、一次性費用、quota與overage單價；不要只顯示「每日只需…」而藏月付total。
- Automation比較舊／新路徑時標出變動node及影響，不只用顏色把新版畫得吸引。
- Analytics比較上一期間必須期間長度可比；部分資料不能與完整月份直接宣称改善。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#contrast--section-2)

## 正反例與驗收

- Do：並排列出價值、成本、限制與差異，允許保持原方案。
- Avoid：虚构原價、無關anchor、只有百分比而無絕對額、預設昂貴方案卻不說明。
- 驗收monthly/annual切換、currency、長方案名、手機堆疊；對照欄位仍一一對應。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#contrast--section-3)

## 程式與規格對應

來源存在不代表已符合所有新規格；舊 Storybook 檔案是參考示例，請按 adoption checklist 逐項驗收。

- [spec/README.md](../../spec/README.md)
- [spec/components.md](../../spec/components.md)
