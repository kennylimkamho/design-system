# Integration · Before / After

找到合適整合，清楚授權連結，之後能管理或恢復連線。

> Version 1.4 · Generic edition · Handbook 1.4.0-draft.9 · 設計基準；PR / 工程 review 待完成，並非 runtime 全量遷移。
> 更新：2026-11-04 14:22:33 HKT (UTC+08:00)

[互動示例](../product-design-system-v1-4-draft-9-annotatable.html#case-integration) · [目錄](README.md)

## 01 · 任務及可用證據

- 用戶首先想知道有咩 App 可以達成佢嘅工作目標，之後先考慮授權、設定同維護。Catalog、連接流程同已連接清單係同一條旅程的不同時刻，唔係一張泛用資料表。
- App snapshot 有 AppStore browser、filters 與 installer；公開示例唔顯示真實連線狀態或假 OAuth 成功。

## 02 · 改前／改後及取捨

- 改前重構聚焦探索與設定資訊同時擺喺卡片可能造成的主次不分；呢個係設計議題，不係未經驗證的使用者失敗率。
- 改後未連結卡片先展示可辨認身份、用途與常駐『連結』；secondary Settings 可 hover/focus 顯示，touch 有 More 入口。Tutorial 放喺開始連結或遇錯時，不搶主要入口。

## 03 · 主要流程與例外

- 連結前顯示已核實權限、費用或不可逆影響；連結中保留返回上下文；失敗顯示原因與重試；已連結清楚標示帳戶及健康狀態。
- Coming soon 不能用可按假 CTA；平台 logo 表身份，不表示已連結；WhatsApp Mobile／Business／Coexistence／Cloud API 必須以文字區分，唔靠圖形猜。

## 04 · 三項原則



| 標準 | 案例要求 |
| --- | --- |
| 易用 | 先探索與連結，再按需要看設定及教學。 |
| 可信賴 | 授權與可用性由服務、權限與文件核實，狀態不能靠 logo 暗示。 |
| 可持續演進 | 新 app 沿用 catalog → connect → manage/recover 契約。 |

## 05 · 驗收及狀態

- 驗收搜尋、分類、長品牌名、未連結、pending、失敗、限制、已連結、斷線、手機、鍵盤及授權返回後原有 query。
- 改後係 Design System 提案，OAuth、API、可用性與權限都仍由 App 擁有。

## 程式與規格對應

來源存在不代表已符合所有新規格；舊 Storybook 檔案是參考示例，請按 adoption checklist 逐項驗收。

- [spec/feature-workspaces.md](../../spec/feature-workspaces.md)
- [spec/icon-identity.md](../../spec/icon-identity.md)
- [spec/live-state-design-concerns.md](../../spec/live-state-design-concerns.md)

## 來源與案例證據

- [App source · src/AppStore/AppStoreBrowser.tsx @ 1440000bd58275bbd347aa2141427b35ca1a0f19](https://github.com/chatdaddy/frontend-dashboard/blob/1440000bd58275bbd347aa2141427b35ca1a0f19/src/AppStore/AppStoreBrowser.tsx) · observed-source
- [App source · src/AppStore/AppStoreFilters.tsx @ 1440000bd58275bbd347aa2141427b35ca1a0f19](https://github.com/chatdaddy/frontend-dashboard/blob/1440000bd58275bbd347aa2141427b35ca1a0f19/src/AppStore/AppStoreFilters.tsx) · observed-source
- [App source · src/AppStore/AppStoreInstaller.tsx @ 1440000bd58275bbd347aa2141427b35ca1a0f19](https://github.com/chatdaddy/frontend-dashboard/blob/1440000bd58275bbd347aa2141427b35ca1a0f19/src/AppStore/AppStoreInstaller.tsx) · observed-source
