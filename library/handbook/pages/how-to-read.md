# 點讀呢份手冊

新設計師由任務讀起，工程師由來源核對，AI Agent 由規則狀態與索引開始。

> Version 1.4 · Generic edition · Handbook 1.4.0-draft.9 · 設計基準；PR / 工程 review 待完成，並非 runtime 全量遷移。
> 更新：2026-11-04 14:22:33 HKT (UTC+08:00)

[互動示例](../product-design-system-v1-4-draft-9-annotatable.html#how-to-read) · [目錄](README.md)

## 第一次嚟

- 先讀 Founder’s Note 同新設計師起步，再睇基礎元素：顏色、字體、版面、元件、logo 與 icon。唔使一次背晒全套規格。
- 揀一個核心模組同相應案例，畫完整正常／失敗流程；對照規則再做元件選擇。

## 改現有功能

- 由用戶當下工作與實際 App 來源開始。清楚分開已核實現況、來源重構同改後提案，再用案例庫記錄取捨。
- 涉及文字時讀內容時刻；涉及複雜流程時讀 P1–P4；涉及狀態轉換時讀 Motion Lab。

## 查規則與交付

- 用搜尋或規則代碼索引定位章節。規則代碼係章節級指引，唔係已執行嘅自動合規檢查。
- 交付前核對 mobile、鍵盤、reduced motion、真實資料與錯誤補救。詳細模式方便 review，但唔代替測試。

## 程式與規格對應

來源存在不代表已符合所有新規格；舊 Storybook 檔案是參考示例，請按 adoption checklist 逐項驗收。

- [handbook/src/draft3-adoption.mjs](../../handbook/src/draft3-adoption.mjs)
- [spec/motion.md](../../spec/motion.md)
- [spec/feature-workspaces.md](../../spec/feature-workspaces.md)
