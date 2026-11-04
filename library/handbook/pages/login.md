# Login 與品牌故事

登入表單優先；故事與氛圍可以豐富，但不能搶走完成登入的空間。

> Version 1.4 · Generic edition · Handbook 1.4.0-draft.9 · 設計基準；PR / 工程 review 待完成，並非 runtime 全量遷移。
> 更新：2026-11-04 14:22:33 HKT (UTC+08:00)

[互動示例](../product-design-system-v1-4-draft-9-annotatable.html#login) · [目錄](README.md)

## 頁面 anatomy

- Desktop：task-first form + optional storytelling panel。Form含brand mark、welcome heading、電話／password、login／Google、register／recovery。
- Language selector可用compact flag＋清楚language name；hover可preview，但click、keyboard、touch皆能選。國旗不能代替語言名稱。
- 次要連結分組，不與primary登入按鈕競爭。錯誤訊息靠近表單，不能被carousel推走。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#login--section-1)

## Mobile 与安全

- 窄屏表單先顯示；story panel移到下方或省略，不能讓使用者先捲一屏case study。
- Input可用password manager、autocomplete、paste；電話格式與錯誤語氣遵循auth/security contract。
- 登入狀態不能在HTML demo驗證。品牌案例需有真實授權／內容核實；示例對話與業績不得假装成客戶證言。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#login--section-2)

## Storytelling 與 motion

- Carousel有明確manual control；optional autoplay需pause，focus／hover閱讀時不強制切換，reduced-motion靜態。
- 裝飾背景aria-hidden、pointer-events:none；慢速運動不能讓主要文字對比變差。
- 每張圖有適當crop，logo有品牌clearspace；載入失敗仍可讀故事。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#login--section-3)

## 程式與規格對應

來源存在不代表已符合所有新規格；舊 Storybook 檔案是參考示例，請按 adoption checklist 逐項驗收。

- [spec/README.md](../../spec/README.md)
- [spec/accessibility-content.md](../../spec/accessibility-content.md)
