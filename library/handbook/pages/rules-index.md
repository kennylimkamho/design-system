# 規則代碼索引

用穩定代碼定位規則來源，方便 review 同 AI Agent 引用；完整內容仍以對應章節為準。

> Version 1.4 · Generic edition · Handbook 1.4.0-draft.9 · 設計基準；PR / 工程 review 待完成，並非 runtime 全量遷移。
> 更新：2026-11-04 14:22:33 HKT (UTC+08:00)

[互動示例](../product-design-system-v1-4-draft-9-annotatable.html#rules-index) · [目錄](README.md)

## 原則與工作流程

- 下方代碼連到已存在嘅規則章節，搜尋亦可以直接輸入代碼。代碼唔係新一套互相矛盾嘅規範。
- 先睇作用範圍與例外，再引用規則。未驗證嘅候選原則不會出現在規範代碼表內。

## 如何引用

- Review 可以寫「SD-1：預設必須安全、有上下文而且可改」，然後連到 Smart defaults。唔用「大多數人都揀」取代權限與安全判斷。
- AI Agent 要同時帶章節、來源路徑、版本同狀態；只引用代碼唔足以證明實作符合規格。

## 索引維護

- 代碼有機器可讀版本：handbook/agent-index.json 中 ruleCodes。增刪代碼時測試目標存在，舊代碼要保留 alias 或明確標停用。
- 規則與實際元件仍然分開：規格合併不等於 App 採用。每次 App rollout 另外收集證據與測試結果。

## 程式與規格對應

來源存在不代表已符合所有新規格；舊 Storybook 檔案是參考示例，請按 adoption checklist 逐項驗收。

- [handbook/src/draft3-adoption.mjs](../../handbook/src/draft3-adoption.mjs)
- [spec/motion.md](../../spec/motion.md)
- [spec/feature-workspaces.md](../../spec/feature-workspaces.md)
