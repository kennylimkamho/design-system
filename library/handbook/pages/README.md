# Product Design System 設計師手冊

Version 1.4 · Generic edition · 1.4.0-draft.9 · 75 chapters · [互動版](../product-design-system-v1-4-draft-9-annotatable.html)

更新：2026-11-04 14:22:33 HKT (UTC+08:00)

## 開場

- [開場 · 呢份手冊嘅旅程](cover.md) — 由產品判斷到實際元件，保存 Kenny Lim 嘅設計方向，亦保存每次改版嘅證據與界線。
- [點讀呢份手冊](how-to-read.md) — 新設計師由任務讀起，工程師由來源核對，AI Agent 由規則狀態與索引開始。

## Founder’s Note

- [Kenny Lim · 點解要有呢套系統](founder-note.md) — 一套設計系統唔止統一畫面，仲要保存產品判斷：用戶點完成工作、點建立信任、點持續進步。
- [新設計師，由這裡開始](start.md) — 先知道正在設計哪一種任務，再選版面、元件與狀態。這是可查閱的工作手冊，不是概念簡報。

## 基礎元素

- [色彩與語意](color.md) — 保留 ChatDaddy 品牌，同時分清 action、selection、status、surface 與資料視覺化。
- [字體與排版](typography.md) — 從頁面標題到一個時間戳，明確知道字體、字重、字級、行高與使用場合。
- [間距與密度](spacing.md) — 用一致的距離表達關聯，不靠隨機 padding 或更多邊框整理內容。
- [圓角、邊框與層次](surfaces.md) — 用少量、可預測的層次表達內容與浮層，不讓每個區塊都像可點擊卡片。
- [Icons 與品牌資產](icons.md) — 模組有 ChatDaddy 個性；一般操作使用清晰、熟悉的共通語言。
- [Logo 與 Icon 分層](icon-identity.md) — App 說明是誰，channel 說明從哪裡來，module 說明在哪裡工作；操作圖示只說明可以做什麼。
- [文案、語言與資料格式](content.md) — 讓文字幫助完成任務；中英混排、日期、空值都有固定處理方式。
- [App shell 與頁面骨架](layout.md) — 設計新頁面之前先套骨架，確保 header、toolbar、內容和操作在同一套座標上。
- [Menu、secondary menu 與 tabs](navigation.md) — 每一層都回答不同問題；不要因為看起來相似就用同一種控件。
- [Responsive 與縮放](responsive.md) — 以任務所需空間決定 reflow；手機不是把 desktop 等比例縮細。
- [Hover 與漸進披露](hover.md) — 善用hover保持頁面簡潔，讓次要操作在需要時出現；重要功能不能只能靠滑鼠發現。
- [Buttons 與 icon buttons](buttons.md) — 按鈕執行動作；link 前往目的地。層級由任務重要性決定，而不是用不同顏色裝飾。
- [Text fields 與 validation](fields.md) — label、輸入、helper、error 是一個完整元件，不是孤立的輸入框。
- [Checkbox、radio 與 switch](selection.md) — 讓使用者知道是選取多個項目、挑一個選項，還是立即開關設定。
- [Select、搜尋與多選](selectors.md) — 少量固定選項用簡單 select；人員、tag、channel 等資料集合用可搜尋 selector。
- [Data table 與列表](tables.md) — 一張可用的表格要讓人辨認資料、比較欄位、控制範圍，而不只是把資料放進格子。
- [搜尋、篩選與 saved views](filters.md) — 讓使用者清楚知道現在看的是哪一部分資料，以及怎樣回到全貌。
- [Badge、tag 與 avatar](status.md) — Badge 描述狀態，tag 分類資料，avatar 協助辨認身份；三者不能互相代替。
- [Cards、list rows 與空間分組](cards.md) — Card 用於獨立内容；row 用於重複掃描；不要把一個頁面切成沒有意義的盒子。
- [Dialog、drawer 與 popover](overlays.md) — 依任務決定打斷程度：需要回答才 modal，只補充 context 就用較輕的浮層。
- [Toast、banner 與 tooltip](feedback.md) — 反饋的強度必須與事件的重要性相稱；可恢復的問題要保留解決入口。
- [Loading、empty、error 與權限](states.md) — 一個頁面不是只有「有資料」這個狀態。每種狀態都要解釋原因與下一步。
- [電話、檔案與特殊欄位](special-fields.md) — 沿用既有語意與安全契約，設計系統只統一呈現與可操作性。
- [Accessibility 驗收](accessibility.md) — 從設計開始就交付 keyboard、focus、文字與狀態；不能等完成頁面後才補一層ARIA。

## Design Principles

- [內容策略 · 時刻 × 頁面類型](content-strategy.md) — 頁面結構同內容時刻係兩個維度；每種結構都可能需要決定、行動、補救、使用與參考資訊。
- [P1–P4 · 用工作揀結構](p-class-patterns.md) — Wizard、Settings、Automation object 同 Workspace 服務不同工作，唔係用同一種畫面套晒所有功能。
- [設計原則與取捨](principles.md) — 讓新功能看起來屬於同一個產品，也讓使用者對每一下操作有穩定預期。
- [01 · Smart defaults](smart-defaults.md) — 用可靠的上下文減少重複決定，讓使用者調整一個合理起點，而不是每次由零開始。
- [02 · Goal gradient](goal-gradient.md) — 讓使用者看見已完成的真實工作及清楚終點，把複雜任務拆成可完成的階段。
- [03 · Reciprocity](reciprocity.md) — 先提供真實、有用的預覽或結果，再讓使用者决定下一步；不要只用模糊承諾要求承諾。
- [04 · IKEA effect & ownership](ownership.md) — 讓使用者命名、配置、試驗自己的工作成果，再決定儲存或發布。
- [05 · Loss aversion & status quo](loss-aversion.md) — 清楚交代變更會失去什麼，以及保留現狀的後果，協助知情決定。
- [06 · Contrast effect](contrast.md) — 提供公平、同單位的對照，讓使用者理解差異；不以不相關的大數字製造錯覺。
- [07 · Visual compression](compression.md) — 用恰當的字重、標記與分組減少重複資訊；精簡不等於移除理解所需的內容。
- [08 · Visual path](visual-path.md) — 用對齊、順序與視覺權重引導掃描；不要讓所有元素同時爭取注意力。
- [09 · Logical flow](logical-flow.md) — 按使用者提出問題的順序安排資訊，讓每個區段自然帶到下一步。
- [任務優先 · 由目標揀畫面](task-first.md) — 先定義用戶想完成的工作、需要的證據與下一步，才選 table、catalog、setup flow 或 workspace。
- [Live-state design concerns · 以真實狀態設計](live-state-concerns.md) — 由 App 新改動提煉五項跨頁面規則：真實成功、列表狀態、逐步揭示、幫助恢復，以及數據與功能聲稱的證據。
- [20 年都成立嘅工作循環](durable-jobs.md) — 產品可換介面、渠道同技術，但持續存在嘅用戶任務唔應該被新 UI 截斷。

## Key Modules

- [Contacts · 資料管理頁](contacts.md) — 共用資料頁模式：先找到資料，再查看詳情，最後完成有明確範圍的操作。
- [Inbox · 客服工作區](inbox.md) — 閱讀、回覆與上下文是核心。讓高頻工作迅速，但不犧牲日期、身份與訊息狀態。
- [Automation · 列表與編輯器](automation.md) — 把流程管理與流程編輯分開：找到流程用列表，編輯邏輯用足夠大的工作區。
- [Settings · 分組表單](settings.md) — 讓人知道正在改哪一組設定、是否已儲存、離開會否失去修改。
- [Analytics · 指標與圖表](analytics.md) — 先說明數字代表什麼、對比什麼，才決定用哪一種圖。
- [Channels 與 Broadcasts](channels.md) — 連線狀態、發送狀態、商業權限分清楚，避免用同一個綠點代表所有事情。
- [Login 與品牌故事](login.md) — 登入表單優先；故事與氛圍可以豐富，但不能搶走完成登入的空間。
- [Integrations · 探索到連結](integrations.md) — 第一屏幫用戶找到合適的整合；卡片先呈現連結目標，再按需要顯示設定、教學與技術細節。

## 業務致勝與 Flow Design

- [First-use 與角色導向 onboarding](onboarding.md) — 由第一個成功時刻開始，以角色的職責與客戶價值決定引導內容；Home 或獨立 onboarding 的位置仍待驗證。
- [內容跟住時刻走](content-timing.md) — 先決定用戶要完成甚麼，再決定呢一刻要講甚麼。決定、行動、補救、使用、參考各有位置；簡潔唔可以變成隱瞞。
- [由連結渠道到首次價值](activation-journey.md) — 連結只係能力開通；第一則真實對話同角色所需結果，先係可驗證嘅價值。
- [Management、Marketing、CS 嘅 Aha moment](role-aha.md) — 同一個渠道接通之後，不同職責要從真實工作中看見不同價值。

## Case Study Library

- [Case Study Library · 由證據到決策](case-library.md) — 用可追溯嘅 before／after 記住點解改，唔只儲存改完嘅畫面。
- [Broadcasting · Before / After](case-broadcasting.md) — 向合適客戶傳達訊息，掌握發送動態，再用結果改善下一次。
- [Contacts · Before / After](case-contacts.md) — 搵到正確聯絡人、理解資料，再喺清楚範圍內完成更新。
- [Inbox · Before / After](case-inbox.md) — 找出需回覆嘅對話，在足夠上下文中回覆、分配與跟進。
- [Automation · Before / After](case-automation.md) — 定義可靠觸發與動作，安全測試，發布後仍可監察及修正。
- [Integration · Before / After](case-integration.md) — 找到合適整合，清楚授權連結，之後能管理或恢復連線。
- [群發 · Before / After 學習紀錄](broadcast-learning.md) — 將群發原型嘅產品理念轉成 ChatDaddy 元件與真實功能：分步決策、同步摘要、發送前確認及結果跟進。公開案例經匿名重建，原始截圖保留在私有紀錄。

## Motion Lab

- [Motion strategy · 回應、轉場、表現](motion-strategy.md) — 動畫解釋因果與状态，唔阻住工作；三層動效共用既有規格同 reduced-motion 合約。
- [Motion language 與 micro animations](motion.md) — 豐富的手感來自每一次操作都有合適回應，不是全頁一直動。
- [動效 recipes 與禁忌](motion-recipes.md) — 把動效落在具體元件上，明確 trigger、完成、打斷與靜態替代。
- [Motion Lab · 有用嘅微動畫](motion-lab.md) — 動畫解釋狀態與因果；視覺驚喜可以有，但唔可以拖慢工作或遮住風險。
- [Motion Library · 場景到動效](transitions-reference.md) — 先試互動，再決定適用場景。參考 transitions.dev 嘅示例導向思路，實作使用 ChatDaddy 規則、色彩與動效時間。

## AI Agent 使用與版本治理

- [工程對應與 adoption](implementation.md) — 同一個repo存規格、tokens、元件及示例，但清楚區分「規格已寫」與「產品已採用」。
- [設計交付與版本治理](handoff.md) — 交付的不只是一張畫面，而是一份工程師能實作、測試者能驗收的契約。
- [AI Agent 點樣安全用 Design System](ai-agent-guide.md) — 同一份 Handbook 俾設計師、工程師同 AI Agent 用，但 draft、示例與真實 App 能力要嚴格分開。

## Industry Info · 行業資訊

- [Industry Info · WhatsApp Flows / IAB](industry-whatsapp-flows-iab.md) — 兩條路都可以留喺 WhatsApp 入面完成工作：Flows 係平台提供嘅原生體驗，IAB 係開啟你自己嘅網頁。行業參考，唔係已部署能力或永久政策。

## 檔案庫

- [原話與設計方向記錄](quote-archive.md) — 保留設計意圖，亦分清楚用戶原話、編輯摘要同尚待來源核實嘅草稿句子。
- [版本記錄 · 可核對嘅演進](version-history.md) — 版本用 Git 記錄核對，固定香港時間保存每次改動；唔把未核實年份寫成已發布歷史。
- [規則代碼索引](rules-index.md) — 用穩定代碼定位規則來源，方便 review 同 AI Agent 引用；完整內容仍以對應章節為準。
- [候選原則 · 待驗證](candidates.md) — 保存值得探索嘅方向，但唔將假設、任意門檻或未實作能力寫成正式產品承諾。
