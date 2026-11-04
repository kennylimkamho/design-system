# 內容跟住時刻走

先決定用戶要完成甚麼，再決定呢一刻要講甚麼。決定、行動、補救、使用、參考各有位置；簡潔唔可以變成隱瞞。

> Version 1.4 · Generic edition · Handbook 1.4.0-draft.9 · 設計基準；PR / 工程 review 待完成，並非 runtime 全量遷移。
> 更新：2026-11-04 14:22:33 HKT (UTC+08:00)

[互動示例](../product-design-system-v1-4-draft-9-annotatable.html#content-timing) · [目錄](README.md)

## 五個時刻：每段資訊都有歸屬

- 每寫一段字，先記錄它答緊用戶哪個問題、出現在哪個控制旁、由甚麼事實支持。分類唔到，通常應刪掉或移去另一個時刻。
- 已核實的費用、權限、風險或不可逆後果，必須在承諾前直接可見；不可為咗令畫面乾淨而塞入 Help。補救只等錯誤真正發生時出現，但可預見的重大風險仍要預先披露。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#content-timing--section-1)

| 時刻 | 用戶問緊 | 放置位置 | ChatDaddy 例子 |
| --- | --- | --- | --- |
| 決定 · Decide | 我應唔應該做？ | 承諾之前，直接顯示 | 連結前已核實的費用、授權和不可逆後果 |
| 行動 · Act | 我而家做咩？ | 緊貼控制 | 掃碼步驟貼住 QR，按鈕講清下一步 |
| 補救 · Recover | 點解唔得？點返去？ | 出事時，原位顯示 | QR 過期後提供重新產生，保留已選渠道 |
| 使用 · Use safely | 點樣用得好、用得安全？ | 危險操作發生處 | Broadcast 送出前核對收件人和範圍 |
| 參考 · Reference | 我想深入了解 | 主動開啟的 Help／了解更多 | 完整政策與技術限制 |

## 七條內容設計原則

- 01 一個畫面，一個任務：只保留對當前決定或操作有幫助的文字；刪咗唔會做錯或做唔到，就刪或搬。
- 02 知情權與有用資料分開：費用、風險、不可逆後果、法律責任直接披露；額外技巧可以收第二層。
- 03 三層披露：第 0 層直接見到；第 1 層展開；第 2 層 Help。層級唔可以凌駕法律或無障礙要求。
- 04 護欄勝過教育：喺真正有風險嘅操作前攔一攔，解釋後果和安全下一步；唔靠 onboarding 一次過教晒。
- 05 例外發生先出現：正常流程唔預載所有失敗說明；錯誤發生時講明原因、恢復方法並保留上下文。
- 06 同一件事只講一次，用一把聲：標題、副題、banner、tooltip 只揀一個最合適的 owner。中英文術語保持一致。
- 框有用途先加：表示可操作元件、資料集合或必要警告；唔用框、badge 或 kicker 裝飾每段解說。頁面標題講咗嘅，示例唔再講一次；版本與使用界線集中一處，來源按需查閱。
- 07 能示範就唔好描述：用真實而標明的 preview 或圖示代替長篇步驟；同時提供文字替代，重要後果不能只藏在圖中。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#content-timing--section-2)

## 三層披露，但零層唔可以漏

- 第 0 層是當前任務必需：做決定的事實與眼前動作。第 1 層讓用戶自選展開實用補充；第 2 層去 Help center 看完整規則、平台文件或故障排查。
- 只要移走某項資訊會令用戶作出錯誤承諾，該資訊就不屬於第 1 或第 2 層。展示事實時須有來源、owner 和版本；未知費用或風險不能用假數字填滿。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#content-timing--section-3)

## 內容預算：逼自己問『屬於邊一刻？』

- 以下係預設編輯上限，不係刪走必要披露的藉口。兩種語言都要測試窄屏與 200% zoom；唔用縮細字代替編輯。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#content-timing--section-4)

| Pattern | 預設上限 | 超出時點做 |
| --- | --- | --- |
| Wizard 每一步 | 標題一句、說明一句、要點最多三個、主要按鈕一個 | 可選細節移第 1／2 層；必要披露仍保留 |
| 警告框 | 最多三點，每點一行 | 最重大後果先講，詳細政策另連結 |
| 錯誤訊息 | 發生咗咩 ＋ 可以點做；一至兩句 | 診斷細節可展開，保留原資料 |
| Tooltip／提示 | 一句 | 如果係必要標籤或決定資料，應放畫面上 |

## QR 連結：同一結構，內容分時刻

- 本示例以『連結一個渠道』作 P1 wizard 的結構參考，不代表現有 App 已全面採用 P1–P4。QR 只是視覺佔位，不能掃描，也不能推斷已連接的是哪種 WhatsApp app／Cloud API 模式。
- 改前：未開始連結就堆滿掃碼、過期、Broadcast 風險和技術政策，主要下一步難找。改後：決定關卡只放已核實的費用／授權／後果；掃碼步驟貼近 QR；逾時後才顯示補救；Broadcast 風險搬去真正送出前。
- 示例沒有已核實的費用、授權或平台規則，所以承諾按鈕停用；正式產品要由負責團隊補上事實與服務狀態，唔可以照抄示例直接上線。連線成功同第一則真實對話係兩個不同里程碑。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#content-timing--section-5)

## P1–P4 決定結構；五時刻決定內容

- 先由用戶任務揀結構；再逐段問何時出現。P1–P4 來自用戶提供的結構性參考，只作 crosswalk，唔係聲稱每個 ChatDaddy 功能已遷移。真實流程不適用時，先重新分類工作而唔係硬套標籤。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#content-timing--section-6)

| 結構參考 | 內容節奏 | 示例 |
| --- | --- | --- |
| P1 · 一次性 Wizard | 承諾前披露，操作旁指示，出錯後補救 | Connect channel |
| P2 · 設定表單 | 後果貼近設定，成功按真實確認顯示 | Business hours |
| P3 · 自動化物件 | Test／Publish 前護欄；執行失敗才補救 | Message flow |
| P4 · 持續工作區 | 身份與狀態常駐；次要操作按意圖揭示 | Inbox |

## 交付前，用一張卡審查每句字

- 交付格式：用戶任務 → 時刻 → 事實／來源 → 位置／層級 → 行動或後果 → 訊息 owner。缺費用、政策、權限或 API 狀態，就標『待核實』，唔以設計稿自創事實。
- 檢查：移走會唔會做錯？必要披露有冇在承諾前？步驟有冇貼住控制？錯誤只在真實發生時出現、可恢復且保留輸入？安全提醒有冇在風險操作當下？中英文、keyboard、touch、200% zoom 同 reduced motion 都要過。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#content-timing--section-7)

## 程式與規格對應

來源存在不代表已符合所有新規格；舊 Storybook 檔案是參考示例，請按 adoption checklist 逐項驗收。

- [spec/content-timing.md](../../spec/content-timing.md)
- [spec/accessibility-content.md](../../spec/accessibility-content.md)
- [spec/live-state-design-concerns.md](../../spec/live-state-design-concerns.md)
