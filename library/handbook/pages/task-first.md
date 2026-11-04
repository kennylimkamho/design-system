# 任務優先 · 由目標揀畫面

先定義用戶想完成的工作、需要的證據與下一步，才選 table、catalog、setup flow 或 workspace。

> Version 1.4 · Generic edition · Handbook 1.4.0-draft.9 · 設計基準；PR / 工程 review 待完成，並非 runtime 全量遷移。
> 更新：2026-11-04 14:22:33 HKT (UTC+08:00)

[互動示例](../product-design-system-v1-4-draft-9-annotatable.html#task-first) · [目錄](README.md)

## 先寫一份任務契約

- 開始畫版面之前寫下：誰在這個情境進來、他想完成甚麼、已知與未知的資料、第一個可執行動作、完成後可驗證的結果。角色標籤不能代替真實任務。
- 主要操作只服務當前任務；次要設定、教學與批次工具按需要逐步揭示。Identity、status、阻礙任務的錯誤與下一步不可藏在 hover。
- 空狀態也有工作：首次使用引導建立／連結；篩選後無結果要保留條件及清除入口；服務錯誤要保留上下文及重試。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#task-first--section-1)

## 按工作性質選展示模式



[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#task-first--section-2)

| 用戶正在做甚麼 | 優先模式 | ChatDaddy 例子與邊界 |
| --- | --- | --- |
| 探索可用能力 | Catalog / cover + 分類 + 搜尋 | Integration 首頁先讓人認識及選 app；不要以 records table 開場。 |
| 比較或批次處理紀錄 | Table / data list | Contacts 顯示電話、來源渠道、新增日期等決策有用欄位；選取時才突出批次控制。 |
| 理解並設定功能 | 目的說明 → 示例 → guided setup | Forms、bot、keyword replies、message flows 先說明用途，再要求填設定。 |
| 連續處理對話 | List → thread → 按需 inspector | Inbox 保留對話身份與訊息內容；唔把所有資訊擠進一張表。 |
| 了解趨勢或結果 | KPI → chart → drill-down | 只有定義、期間、單位及來源可靠的數據才顯示。 |

## 導航服從工作邊界

- Primary menu 轉換工作領域，secondary menu 轉換同一領域內的長期目的地；tabs 只切換同一物件的同級內容。篩選、display mode 同一次性 action 不扮作導航。
- 已確認的視覺方向：active secondary item 用清楚字重與輕 tint，不用大塊深藍搶過頁面內容；保持 keyboard focus 明顯。
- 產品分類重組仍待決策。不要因歷史草稿而即時搬動 App、API、Academy 或其他 route；先驗證任務關係、deep link 與現有 scope。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#task-first--section-3)

## 用真實能力與具體證據驗收

- 若現有 API 沒有 total、popular tags、進度或可用性資料，就顯示未知／未提供，不捏造數字或假成功。UI-only 改版不代表 backend 已改。
- 解釋新能力時優先用具體例子，例如一段 WhatsApp 對話、Instagram 訊息或 WebChat widget；圖片與 hero 要幫人理解，不是每頁固定加大 cover。
- 設計 review 問：用戶可否不看教學就指出下一步？資料是否足夠做決定？返回後 query、filter、scroll、草稿是否保留？未決假設有否清楚標示？

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#task-first--section-4)

## 程式與規格對應

來源存在不代表已符合所有新規格；舊 Storybook 檔案是參考示例，請按 adoption checklist 逐項驗收。

- [spec/cross-task-design-audit.md](../../spec/cross-task-design-audit.md)
- [spec/navigation.md](../../spec/navigation.md)
- [spec/data-display.md](../../spec/data-display.md)
