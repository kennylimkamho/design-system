# Integrations · 探索到連結

第一屏幫用戶找到合適的整合；卡片先呈現連結目標，再按需要顯示設定、教學與技術細節。

> Version 1.4 · Generic edition · Handbook 1.4.0-draft.9 · 設計基準；PR / 工程 review 待完成，並非 runtime 全量遷移。
> 更新：2026-11-04 14:22:33 HKT (UTC+08:00)

[互動示例](../product-design-system-v1-4-draft-9-annotatable.html#integrations) · [目錄](README.md)

## 探索頁骨架

- 頂部 cover 簡短解釋整合能帶來甚麼；左側 secondary menu 依用途／類型瀏覽，All Apps 附近提供簡潔搜尋。分類是導航／篩選決策，不要把同一層重複畫成 tabs。
- Catalog 用可辨認的品牌或 app identity、短說明及具體使用例子；先幫人理解可連接甚麼，再展示已連接帳戶紀錄。第一屏不以管理 records table 取代探索。
- App 數量少時搜尋可按需要收起，但應保留清晰的找尋方式。大 cover、hover preview 或 API 文件入口只在對應任務需要時加強，不作全產品統一尺寸。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#integrations--section-1)

## 卡片按狀態決定動作



[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#integrations--section-2)

| 狀態 | 必見 | 逐步顯示 |
| --- | --- | --- |
| 未連結 | App 身份、用途、連結 CTA | 設定、詳細文件；tutorial 在開始／遇錯後 contextual 顯示 |
| 連接中 | 真實 pending 與返回上下文 | 可用時顯示取消／說明；不預告成功 |
| 已連結 | 帳戶身份、連線狀態、主要管理入口 | 低頻設定、更多操作 |
| 失敗／斷線 | 原因及可執行的恢復路徑 | 技術診斷；若恢復是唯一下一步，不能只靠 hover |

## 連接類型與可用性要講明白

- 平台 logo、Mobile App／Business App／Coexistence／Cloud API 模式、帳戶資料與連線健康度分層顯示，不能靠一個圖示混成同一種產品。
- Coming soon 要標明不可連結，不能做成可按的假 CTA；支援狀態由真實產品能力與渠道權限決定。官方品牌標記與自訂示意圖要清楚區分。
- Channel／app icon 只表示身份，唔表示已連結。連線成功、restricted、unknown、需要重新授權各用文字狀態說明。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#integrations--section-3)

## 驗收發現、連接與失敗三條路

- Desktop 卡片次要 Settings 可 hover／focus 顯示；touch 以明確 More／Settings 入口提供同等操作。主要連結 CTA 常駐。
- 預覽可以展示實際用途的示例訊息或 widget，但要標示樣本；沒有後端資料時不顯示熱門、使用量、成功率或假連線狀態。
- 驗證從搜尋／分類進入連接、授權返回、失敗重試、已連結管理、鍵盤與 touch；返回 catalog 時保留原 query 與分類。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#integrations--section-4)

## 程式與規格對應

來源存在不代表已符合所有新規格；舊 Storybook 檔案是參考示例，請按 adoption checklist 逐項驗收。

- [spec/cross-task-design-audit.md](../../spec/cross-task-design-audit.md)
- [spec/icon-identity.md](../../spec/icon-identity.md)
- [spec/navigation.md](../../spec/navigation.md)
