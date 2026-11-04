# 02 · Goal gradient

讓使用者看見已完成的真實工作及清楚終點，把複雜任務拆成可完成的階段。

> Version 1.4 · Generic edition · Handbook 1.4.0-draft.9 · 設計基準；PR / 工程 review 待完成，並非 runtime 全量遷移。
> 更新：2026-11-04 14:22:33 HKT (UTC+08:00)

[互動示例](../product-design-system-v1-4-draft-9-annotatable.html#goal-gradient) · [目錄](README.md)

## 進度如何定義

- 先定義可驗收的步驟與完成条件。例如channel setup：選平台 → 授權成功 → 測試連線。
- 先前真正完成的步驟可以帶入進度；未完成就由0開始。不要只為了看起來接近終點而虛增20%。
- 步驟進度與network loading不同：3/4個設定不是75%上傳完成。未知工作量用indeterminate或狀態文字。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#goal-gradient--section-1)

## ChatDaddy 應用

- 匯入聯絡人：上傳 → 對應欄位 → 檢查錯誤 → 確認；可返回修改而不重做已完成項目。
- 新團隊onboarding：已連channel、已新增成員等真實完成项打勾；可以稍後繼續，保留草稿。
- 流程publish：必填node validation依真正結果更新，不以停留時間假裝完成。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#goal-gradient--section-2)

## 正反例與驗收

- Do：顯示「已完成2/4；下一步：檢查欄位」，並提供回上一步。
- Avoid：固定顯示80%、假的倒數、錯誤後仍保留成功check。
- 驗收step跳過、API失敗、重新登入、返回修改；不可把已失效步驟永遠當completed。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#goal-gradient--section-3)

## 程式與規格對應

來源存在不代表已符合所有新規格；舊 Storybook 檔案是參考示例，請按 adoption checklist 逐項驗收。

- [spec/README.md](../../spec/README.md)
- [spec/components.md](../../spec/components.md)
