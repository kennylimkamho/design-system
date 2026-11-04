# Automation · Before / After

定義可靠觸發與動作，安全測試，發布後仍可監察及修正。

> Version 1.4 · Generic edition · Handbook 1.4.0-draft.9 · 設計基準；PR / 工程 review 待完成，並非 runtime 全量遷移。
> 更新：2026-11-04 14:22:33 HKT (UTC+08:00)

[互動示例](../product-design-system-v1-4-draft-9-annotatable.html#case-automation) · [目錄](README.md)

## 01 · 任務及可用證據

- 自動化任務由『想咩時候發生咩結果』開始，而唔由新增 node 開始。建立後有編輯、測試、儲存、發布與回訪修正，缺任何一段都會令 flow 難以信任。
- App snapshot 有 GlobalFlowBuilder、FlowSave 同 FlowOnboardingWizard；案例唔推斷未核實嘅 trigger、node 或執行狀態。

## 02 · 改前／改後及取捨

- 改前重構呈現功能入口、node library、inspector、toolbar 同時出現可能造成的認知負荷；以程式審查與現有設計原則作基礎，不冒充已量測可用性。
- 改後先用一句目的與一個具體例子說明結果，再選建立方法；同一 editor 保持畫布中心、所選 node 的 contextual inspector，工具列清楚區分儲存、測試與發布。

## 03 · 主要流程與例外

- 未儲存內容有可見標記；離開時可儲存／放棄／取消。測試失敗保留 flow 與錯誤位置，不以『已儲存』暗示『已發布』。
- 狹窄畫面如無法完整編輯 graph，明確提供檢視或受限編輯，不用被裁切的 canvas 假裝功能齊全。

## 04 · 三項原則



| 標準 | 案例要求 |
| --- | --- |
| 易用 | 目的、選擇方式同 node inspector 按任務順序出現。 |
| 可信賴 | draft、tested、published、failed 為不同狀態，動作回饋由真實結果決定。 |
| 可持續演進 | 新增 node 沿用 trigger/action、測試、發布同監察契約。 |

## 05 · 驗收及狀態

- 測試初次空白、template、無權限、node validation、未儲存離開、測試失敗、發布等待、已發布再修改、鍵盤與 reduced motion。
- 案例改後仍屬提案；現有 graph state、API、發送行為同 permissions 不由 Handbook 修改。

## 程式與規格對應

來源存在不代表已符合所有新規格；舊 Storybook 檔案是參考示例，請按 adoption checklist 逐項驗收。

- [spec/feature-workspaces.md](../../spec/feature-workspaces.md)
- [spec/components.md](../../spec/components.md)
- [spec/live-state-design-concerns.md](../../spec/live-state-design-concerns.md)

## 來源與案例證據

- [App source · src/FlowBuilder/GlobalFlowBuilder.tsx @ 1440000bd58275bbd347aa2141427b35ca1a0f19](https://github.com/chatdaddy/frontend-dashboard/blob/1440000bd58275bbd347aa2141427b35ca1a0f19/src/FlowBuilder/GlobalFlowBuilder.tsx) · observed-source
- [App source · src/FlowBuilder/FlowSave.tsx @ 1440000bd58275bbd347aa2141427b35ca1a0f19](https://github.com/chatdaddy/frontend-dashboard/blob/1440000bd58275bbd347aa2141427b35ca1a0f19/src/FlowBuilder/FlowSave.tsx) · observed-source
- [App source · src/FlowBuilder/FlowOnboardingWizard.tsx @ 1440000bd58275bbd347aa2141427b35ca1a0f19](https://github.com/chatdaddy/frontend-dashboard/blob/1440000bd58275bbd347aa2141427b35ca1a0f19/src/FlowBuilder/FlowOnboardingWizard.tsx) · observed-source
