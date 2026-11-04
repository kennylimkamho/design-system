# 電話、檔案與特殊欄位

沿用既有語意與安全契約，設計系統只統一呈現與可操作性。

> Version 1.4 · Generic edition · Handbook 1.4.0-draft.9 · 設計基準；PR / 工程 review 待完成，並非 runtime 全量遷移。
> 更新：2026-11-04 14:22:33 HKT (UTC+08:00)

[互動示例](../product-design-system-v1-4-draft-9-annotatable.html#special-fields) · [目錄](README.md)

## 電話欄位

- country/dial code selector 與號碼輸入同一視覺群組，但各有 label。國旗不能是唯一國家識別。
- 保留前導+及國碼處理；display format 與儲存格式分開。不因 UI 重設電話 parsing／validation。
- 手機用 tel keyboard；國家搜尋及 error helper 不應擠壓號碼空間。未知國家有文字fallback。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#special-fields--section-1)

## File upload



[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#special-fields--section-2)

| 階段 | 呈現 | 風險處理 |
| --- | --- | --- |
| Before | 允許格式、size limit、browse button | 不只支援drag/drop |
| Uploading | 每檔progress及取消（若支援） | 未知百分比用indeterminate，不造假 |
| Failed | 檔名、失敗原因、retry | 重試不重複成功檔案 |
| Complete | 預覽／檔名／移除 | 移除影響已儲存資源時需要確認 |

## 密碼與 copy

- 密碼可顯示／隱藏並保留focus；切換按鈕label更新。不關閉paste或password manager。
- Copy 後只在 clipboard 成功才顯示已複製；一般文字複製失敗時可選取原值。Sensitive 值依產品政策遮罩，不把 token 放 toast；遮罩不可當作復原方式。若政策允許顯示，先重新驗證權限，再提供選取或重試複製。
- OTP、日期區間、金額等專用欄位需各自業務contract，不能以generic text field驗收替代。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#special-fields--section-3)

## 程式與規格對應

來源存在不代表已符合所有新規格；舊 Storybook 檔案是參考示例，請按 adoption checklist 逐項驗收。

- [packages/components/src/inputs/PhoneNumberInput.tsx](../../packages/components/src/inputs/PhoneNumberInput.tsx)
- [packages/components/src/inputs/FileUploadDropzone.tsx](../../packages/components/src/inputs/FileUploadDropzone.tsx)
- [packages/components/src/inputs/CopyButton.tsx](../../packages/components/src/inputs/CopyButton.tsx)
