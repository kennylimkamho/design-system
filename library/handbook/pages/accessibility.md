# Accessibility 驗收

從設計開始就交付 keyboard、focus、文字與狀態；不能等完成頁面後才補一層ARIA。

> Version 1.4 · Generic edition · Handbook 1.4.0-draft.9 · 設計基準；PR / 工程 review 待完成，並非 runtime 全量遷移。
> 更新：2026-11-04 14:22:33 HKT (UTC+08:00)

[互動示例](../product-design-system-v1-4-draft-9-annotatable.html#accessibility) · [目錄](README.md)

## 設計階段 checklist

- 所有controls有可讀名稱；icon-only有label，重要資訊不只tooltip／顏色／動畫。
- Touch target目標44px；focus ring清晰且不被sticky header或overflow裁切。
- 正文對比目標4.5:1；大型文字與非文字UI按適用標準驗證。不要從一組色票通過推論整頁合規。
- 支援200% zoom與長文重排；modal、tabs、listbox各自有正確keyboard contract。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#accessibility--section-1)

## 手動流程

- 只用Tab/Shift+Tab/Enter/Space/Escape完成主要任務；tablist再測arrows/Home/End。
- 打開dialog，檢查初始focus、trap、Escape、關閉focus return；portal menu也在正確層。
- 使用screen reader讀heading、landmarks、field error與pending結果；live region只播報有意義變化。
- OS reduce、手機touch、至少一個窄viewport；對於complex grid/editor要測其special keyboard model。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#accessibility--section-2)

## 驗證不是聲稱

- 本版規則參照WAI-ARIA APG；網站會另記實際測試結果。不把DOM tests稱作screen-reader／native-dialog驗收。
- 已知Browser automation連接不可用時，交付人工驗收清單及狀態，不偽造通過。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#accessibility--section-3)

## 程式與規格對應

來源存在不代表已符合所有新規格；舊 Storybook 檔案是參考示例，請按 adoption checklist 逐項驗收。

- [spec/accessibility-content.md](../../spec/accessibility-content.md)
