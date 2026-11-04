# Live-state design concerns · 以真實狀態設計

由 App 新改動提煉五項跨頁面規則：真實成功、列表狀態、逐步揭示、幫助恢復，以及數據與功能聲稱的證據。

> Version 1.4 · Generic edition · Handbook 1.4.0-draft.9 · 設計基準；PR / 工程 review 待完成，並非 runtime 全量遷移。
> 更新：2026-11-04 14:22:33 HKT (UTC+08:00)

[互動示例](../product-design-system-v1-4-draft-9-annotatable.html#live-state-concerns) · [目錄](README.md)

## 首個成功要由真實事件完成

- 第一步的 CTA 跟隨服務確認的連線狀態：檢查中可查看渠道、未連結引導連結、已連結引導到 Inbox。連線成功與收到第一則真實對話是兩個里程碑，不能因點了按鈕或看完教學就打勾。
- 示例用 WhatsApp 說明原則，不代表每個組織都必須先連 WhatsApp。按已知渠道、角色、權限及任務調整下一步；後續邀請團隊或自動化維持次要。
- 沒有服務證據時顯示『尚待確認』或具體下一步；不要以樂觀 UI、假百分比、動畫或推算訊息代替完成事件。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#live-state-concerns--section-1)

## 列表狀態先判斷，再決定畫面

- Loading、錯誤、權限／方案限制、成功的未篩選空列表、已篩選無結果，以及已有紀錄，是不同的資料狀態。只有成功且 settled 的未篩選空結果才可顯示 first-use 介紹。
- 搜尋無結果保留 query/filter 及清除入口；錯誤保留上下文並可重試。First-use 說明用途、具體例子及一個真正可用的 Create/Connect CTA；不要在 header 重複同一粒 Create。
- 管理列表只展示可核對的資料；未知 total 不寫成 0。返回時保留合適的搜尋、篩選與位置。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#live-state-concerns--section-2)

## 必要訊號常駐，低頻操作按需顯示

- 身份、目前位置、未讀、連線狀態及阻礙任務的錯誤保持可見；設定、展開箭嘴、次要編輯及 row action 可於 hover 與 focus-within 出現，touch／無 hover 裝置要有明確常駐入口。
- 未讀 6 是精確數；若只知至少 6，視覺為 6+，輔助科技讀作『至少 6』。99+ 不能暗示精確 99。數字採 tabular-nums，badge 外形與大小不因 hover 背景而跳動。
- 輕微位置或底色動效可以確認操作，但不能令焦點或排版跳走；reduced motion 停止裝飾變形。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#live-state-concerns--section-3)

## Help 要帶用戶返到任務

- Contextual help 在需要時提供相關文章；它是補充，不應取代頁面上的用途、欄位標籤或主要 CTA。窄屏可由 popover 升級為全屏 dialog，但只保留一個掌管焦點的 overlay。
- 嵌入文章慢或失敗時，顯示可操作的重試；若有已批准 URL，提供外部開啟。關閉後返回原任務與焦點，不要讓兩個 modal 疊起來或只有無限 spinner。
- 客服選項及回覆時間須有服務事實支持；示例不得看起來像已提交 ticket。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#live-state-concerns--section-4)

## 可用性與指標要有來源

- Connector 或 AI 能力只有在 feature flag、權限、後端合約和文件都支持時才標『可用』；新 UI 或介紹文案本身不是上線證據。清楚列出前置條件、授權點、可做與不可做、失敗回復。
- Operational overview 可提供真實的 active/scheduled 摘要和 drill-down；Analytics 的比率／圖表須有定義、分母、期間、時區、資料覆蓋與更新時間。未知、部分資料、真正 0 和載入錯誤分開呈現。
- 交付時逐項註明完成事件、total/partial 來源、功能可用性與 metric 定義；驗收 mouse、keyboard、touch、mobile、英中語言與 reduced motion。未核實的產品聲稱只標為待驗假設。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#live-state-concerns--section-5)

## 程式與規格對應

來源存在不代表已符合所有新規格；舊 Storybook 檔案是參考示例，請按 adoption checklist 逐項驗收。

- [spec/live-state-design-concerns.md](../../spec/live-state-design-concerns.md)
- [spec/feature-workspaces.md](../../spec/feature-workspaces.md)
- [spec/components.md](../../spec/components.md)
