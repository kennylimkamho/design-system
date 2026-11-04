# 03 · Reciprocity

先提供真實、有用的預覽或結果，再讓使用者决定下一步；不要只用模糊承諾要求承諾。

> Version 1.4 · Generic edition · Handbook 1.4.0-draft.9 · 設計基準；PR / 工程 review 待完成，並非 runtime 全量遷移。
> 更新：2026-11-04 14:22:33 HKT (UTC+08:00)

[互動示例](../product-design-system-v1-4-draft-9-annotatable.html#reciprocity) · [目錄](README.md)

## 使用場合

- 新功能探索可以先看sample report、template及具體輸出；再選擇套用或儲存。
- Import先顯示欄位對應與錯誤預覽，確認有價值後才提交。
- Case study以經核實的內容建立信任；示例資料要標示，不可偽裝真實客戶結果。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#reciprocity--section-1)

## ChatDaddy 例子

- Automation template提供步驟預覽、所需channel與permission，再按「套用為草稿」。
- Analytics試用畫面展示可理解的sample dataset及限制，再讓使用者連接真實資料。
- 不是所有內容都能免登入：客戶資料、帳戶設定與敏感報告仍須正確auth。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#reciprocity--section-2)

## 正反例與驗收

- Do：預覽包含足夠資訊做決定，費用／權限／限制清楚。
- Avoid：只顯示blurred teaser、先收電話才說功能不支援、以「免費」隱藏必要費用。
- 檢查預覽到正式套用不丟context，且不會在使用者未確認前寫入真實資料。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#reciprocity--section-3)

## 程式與規格對應

來源存在不代表已符合所有新規格；舊 Storybook 檔案是參考示例，請按 adoption checklist 逐項驗收。

- [spec/README.md](../../spec/README.md)
- [spec/components.md](../../spec/components.md)
