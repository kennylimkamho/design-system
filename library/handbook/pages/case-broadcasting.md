# Broadcasting · Before / After

向合適客戶傳達訊息，掌握發送動態，再用結果改善下一次。

> Version 1.4 · Generic edition · Handbook 1.4.0-draft.9 · 設計基準；PR / 工程 review 待完成，並非 runtime 全量遷移。
> 更新：2026-11-04 14:22:33 HKT (UTC+08:00)

[互動示例](../product-design-system-v1-4-draft-9-annotatable.html#case-broadcasting) · [目錄](README.md)

## 01 · 任務與持久循環

- Marketing 先決定聯絡哪群人、傳甚麼、經甚麼渠道、何時傳；送出後要知道進展；完結後要理解成功、失敗與下一次點改善。渠道、訊息格式同 UI 可以演進，三段工作唔應消失。
- 『完成建立』『開始發送』『已送達』『產生業務結果』係不同里程碑。Case Study 唔將前一步成功塗成後一步成功；唔使用虛構轉化率證明設計有效。

## 02 · 現況證據同改前問題

- App snapshot 具備 AddEditBroadcast、List、OverviewDashboard、速度／對象相關控制。呢啲係觀察到嘅原始碼面，唔代表每種計劃、權限或渠道都可使用，亦唔證明指標定義已核實。
- 用戶提供嘅合成圖顯示首頁 KPI、延伸 analytics、建立頁及長歷史 table。公開圖係由原圖重新生成、完全去文字及數字嘅參考視覺；不能用它還原原始 campaign。
- 改前畫面係『現況重構示意』，唔係聲稱曾有一個特定歷史版本。研究重點：建立任務複雜、結果分散、table 掃描成本高、預測與實際數據容易混淆。

## 03 · 建立與送出前審閱

- 建立順序按決策依賴：對象與排除條件 → 訊息／visual／策略 → 渠道能力 → 時間與時區 → 審閱。高級速度或時段調整按需展開，但一旦影響費用、風險或收件範圍就必須在確認前顯示。
- 審閱摘要直接列出 recipient scope/count（只在 backend 有可信 total 時）、內容預覽、渠道、排程日期與時區、已核實費用、規則與不可逆後果；缺乏必要資料時阻止確認並講清楚原因。
- Draft save 同 Send 分開；確認前可以返回修改，保留資料及焦點。示例 send control 唔連接產品 API；真實 send 仍由 App 權限及服務回傳決定。

## 04 · 運行中掌握動態

- 發送中以明確 status、最後更新時間、已處理／待處理／失敗數與資料覆蓋交代進度。只顯示服務提供嘅真實值，唔用動畫、時間估算或客戶端計數假扮 job progress。
- 暫停／取消／重試只在後端及權限支持時出現，並分清取消未送出項目與刪除草稿。部分失敗須指出影響範圍與下一步；未知狀態要明示暫不可判斷。

## 05 · 歷史 table 與分析

- 歷史 table 服務比較與追查：名稱、狀態、渠道、計劃／實際時間、對象範圍、送達／失敗／未知及查看詳情。Draft／Scheduled／Sending／Completed 係同一資料集的篩選或 saved view，不自動升格做另一套導航。
- 總覽 KPI 先回答『有冇進行中、邊啲需要處理』；詳細 analytics 才比較趨勢、成本與互動。任何 rate 顯示分母、時間範圍、時區、來源、資料覆蓋及最後更新；tracking unavailable、partial、no data、true zero 要分開。
- 圖表必須有文字／table 替代、鍵盤可讀 exact values。預測、最佳時間及優化建議如未有可靠資料，顯示收集中或待驗，不以未經核實計算作產品承諾。

## 06 · 易用、可信賴、可持續演進



| 標準 | 設計取捨 | 反例 |
| --- | --- | --- |
| 易用 | 一條由建立到結果嘅連續路徑；複雜設定按需要展開；歷史可快速找。 | 所有 advanced controls 與分析一次過放首頁。 |
| 可信賴 | 明確 send review、真實進度、未知與失敗可見、每個 metric 可核對。 | 用假進度、假 total 或無分母百分比營造成功。 |
| 可持續演進 | 共享工作階段與狀態，渠道差異以能力／限制明示。 | 每加一個渠道就複製一套無法比較的流程。 |

## 07 · 狀態與驗收

- 測試首次無 campaign、draft、scheduled、sending、partial failure、completed、filtered empty、load error、no permission、渠道失效與缺 metric 定義。返回建立流程要保留已輸入資料，返回 table 要保留搜尋／篩選／位置。
- 桌面、手機、鍵盤、focus、reduced motion 均可完成審閱而不誤送。驗收問：用戶能否在送出前說出影響對象與後果？送出後能否找回 job？失敗後能否知道點處理？結果能否支持下一次決策？
- 本章係 Design System 提案；觀察到的 App source 不等於全部提案已部署。整體規則仍以『Channels 與 Broadcasts』及資料顯示章節為準。

## 程式與規格對應

來源存在不代表已符合所有新規格；舊 Storybook 檔案是參考示例，請按 adoption checklist 逐項驗收。

- [spec/feature-workspaces.md](../../spec/feature-workspaces.md)
- [spec/data-display.md](../../spec/data-display.md)
- [spec/content-timing.md](../../spec/content-timing.md)
- [spec/module-code-extraction.md](../../spec/module-code-extraction.md)

## 來源與案例證據

- [App source · src/Broadcasts/AddEditBroadcast.tsx @ 1440000bd58275bbd347aa2141427b35ca1a0f19](https://github.com/chatdaddy/frontend-dashboard/blob/1440000bd58275bbd347aa2141427b35ca1a0f19/src/Broadcasts/AddEditBroadcast.tsx) · observed-source
- [App source · src/Broadcasts/List.tsx @ 1440000bd58275bbd347aa2141427b35ca1a0f19](https://github.com/chatdaddy/frontend-dashboard/blob/1440000bd58275bbd347aa2141427b35ca1a0f19/src/Broadcasts/List.tsx) · observed-source
- [App source · src/Broadcasts/OverviewDashboard/index.tsx @ 1440000bd58275bbd347aa2141427b35ca1a0f19](https://github.com/chatdaddy/frontend-dashboard/blob/1440000bd58275bbd347aa2141427b35ca1a0f19/src/Broadcasts/OverviewDashboard/index.tsx) · observed-source
