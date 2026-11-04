# 09 · Logical flow

按使用者提出問題的順序安排資訊，讓每個區段自然帶到下一步。

> Version 1.4 · Generic edition · Handbook 1.4.0-draft.9 · 設計基準；PR / 工程 review 待完成，並非 runtime 全量遷移。
> 更新：2026-11-04 14:22:33 HKT (UTC+08:00)

[互動示例](../product-design-system-v1-4-draft-9-annotatable.html#logical-flow) · [目錄](README.md)

## 資訊順序

- 介紹／新功能：做什麼→為什麼可信→對我有何幫助→具體證據→下一步。
- 工作頁：我在哪裡→目前scope／state→可操作資料→action→結果。不是每頁都硬套marketing敘事。
- 設定流程：必要背景→輸入→驗證→review→confirm；不要先要求確認再展示費用或影響。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#logical-flow--section-1)

## ChatDaddy 應用

- Broadcast review先顯示recipient/channel/content/schedule與費用，再出send confirmation。
- Connection失敗先解釋原因及reconnect，再展示optional onboarding；不要先彈新功能宣傳。
- Import先展示欄位及錯誤，再要求提交，最後提供結果及error report。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#logical-flow--section-2)

## 驗收

- 逐section問「這段回答什麼問題？」無問題可答的裝飾段落可以刪掉或收起。
- 重新載入／deep link仍提供足夠context，不假設使用者看過上一頁。
- 成功結果要連到合理下一步；失敗結果要保留可恢复的任務上下文。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#logical-flow--section-3)

## 程式與規格對應

來源存在不代表已符合所有新規格；舊 Storybook 檔案是參考示例，請按 adoption checklist 逐項驗收。

- [spec/README.md](../../spec/README.md)
- [spec/components.md](../../spec/components.md)
