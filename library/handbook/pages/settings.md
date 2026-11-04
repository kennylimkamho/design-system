# Settings · 分組表單

讓人知道正在改哪一組設定、是否已儲存、離開會否失去修改。

> Version 1.4 · Generic edition · Handbook 1.4.0-draft.9 · 設計基準；PR / 工程 review 待完成，並非 runtime 全量遷移。
> 更新：2026-11-04 14:22:33 HKT (UTC+08:00)

[互動示例](../product-design-system-v1-4-draft-9-annotatable.html#settings) · [目錄](README.md)

## 頁面結構

- Secondary nav按任務分組：Profile / Team / Notifications / Billing / Integrations。不要按每個欄位建一個tab。
- 內容用640–720px閱讀寬度；section heading、description、related fields、section action順序一致。
- 重要account／billing操作與一般偏好分開；danger zone放最後，清楚影響。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#settings--section-1)

## 儲存策略

- 整組欄位需要共同驗證時用明確Save changes；立即生效的簡單preference可用switch，但pending及failure可見。
- 有dirty state顯示save/cancel；成功等server確認。離開前保留unsaved guard。
- 失敗保留已輸入內容；全局error不取代field-specific validation。
- 會改變介面行為或外觀的設定，在切換前提供簡短 before／after preview；相關選項用 section heading 或 divider 分組，避免長列表無結構。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#settings--section-2)

## 多人與權限

- Team設定明確誰可改、影響誰。個人通知不得默默改全team。
- 可能並行編輯時有conflict策略；已失效permission顯示reason而非一片disabled。
- 示例表單只在本地驗證，未儲存真實偏好。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#settings--section-3)

## 程式與規格對應

來源存在不代表已符合所有新規格；舊 Storybook 檔案是參考示例，請按 adoption checklist 逐項驗收。

- [packages/components/src/layout/PageWrapper.tsx](../../packages/components/src/layout/PageWrapper.tsx)
- [spec/components.md](../../spec/components.md)
- [spec/cross-task-design-audit.md](../../spec/cross-task-design-audit.md)
