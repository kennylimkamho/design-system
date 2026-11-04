import { page as p, section as s, table as t } from "./model.mjs";

export const v14Pages = [
  p("founder-note", "Founder’s Note", "Kenny Lim · 點解要有呢套系統", "一套設計系統唔止統一畫面，仲要保存產品判斷：用戶點完成工作、點建立信任、點持續進步。", "founder-note", [
    s("Founder’s Note · 編者按", [
      "Kenny Lim 提出嘅方向係：由用戶真正在做嘅工作出發，而唔係先選一個好睇嘅元件。呢段係設計方向整理，並非 Kenny 嘅逐字引述或公司對外聲明。",
      "ChatDaddy 嘅設計必須同時回答三個問題：用戶而家做緊咩、下一個有意義嘅行動係咩、完成後可否從真實結果學到嘢。視覺風格、動效、文件、元件都要服務呢條路。",
      "同一個產品可以有豐富動畫同鮮明性格，但唔可以用動畫掩蓋錯誤、用空白指標假扮成功，亦唔可以令下一步變得更難搵。",
    ]),
    s("設計系統係一份持續更新嘅產品契約", [
      "基礎元素定義點樣畫；原則定義點樣取捨；模組規格定義領域規則；Flow Design 定義點樣幫用戶達到價值；案例庫記錄每次決策喺現實畫面入面點運作。",
      "設計師可以由案例返回規則；工程師可以查狀態同來源；AI Agent 必須讀清楚規範、示例同待驗證假設，唔可以將 draft specimen 誤寫為已部署功能。",
      "當 App 同文件唔一致時，先記錄證據同版本，再作新決策；唔靠靜默覆寫令歷史推理消失。",
    ]),
    s("成功標準", [
      "一位新設計師應可指出目標用戶、工作循環、主要動作、風險護欄、必要狀態及驗收條件；單憑相似色彩唔算成功。",
      "每個重大模式有來源、負責 review 嘅邊界同採用狀態。Case Study 會講清楚 before/after 點得出，唔把視覺示意當成客戶成效。",
      "設計系統要令每次改動更容易解釋、實作同質疑；唔係阻止產品持續演進。",
    ]),
  ], ["spec/README.md", "spec/feature-workspaces.md", "spec/cross-task-design-audit.md"]),
  p("durable-jobs", "Design Principles", "20 年都成立嘅工作循環", "產品可換介面、渠道同技術，但持續存在嘅用戶任務唔應該被新 UI 截斷。", "durable-jobs", [
    s("由持久目標，而唔係今日畫面開始", [
      "先寫一句不依賴當前渠道與技術嘅用戶目標，例如『向合適客戶傳達訊息，知道有冇送達，並改善下一次』。WhatsApp、Email、未來渠道都可能變；呢個工作目標仍然成立。",
      "將每項產品能力拆成策劃／設定、運行／觀察、結果／學習。三段都要有入口、狀態、補救同返回路徑；唔係只設計一個漂亮嘅建立表單。",
      "『20 年』係持久性檢查嘅思考框架，不是對未來使用者需求或平台政策的保證；每次改版仍要用當下研究同真實能力驗證。",
    ]),
    s("三項評估標準", [], t(["標準", "要回答", "Broadcast 檢查"], [
      ["易用", "下一步係咪清楚；複雜設定可否按任務順序完成？", "先揀對象，再處理內容與安排；每步只要求當下必要資訊。"],
      ["可信賴", "狀態、成本、權限、失敗與數據定義是否真實可核對？", "送出前列出範圍／時間／費用；執行中只顯示真實 job 狀態。"],
      ["可持續演進", "新渠道與規則加入時，工作模型可否保留？", "共享階段與狀態契約，渠道差異以明確能力／限制表達。"],
    ])),
    s("由結果倒推畫面", [
      "如果用戶做完操作後無法知道結果、失敗原因或下一步，個流程未完成。結果頁同歷史紀錄唔係附屬報表，而係工作循環嘅一部分。",
      "將『已送出』『已送達』『有回應』『業務目標達成』分開；任何指標要有期間、分母、資料覆蓋、時區與來源。未知資料必須顯示未知，唔可以用 0 或動畫填空。",
      "每個版本 review 一次：只換了 UI，還是改善了整個循環？如要新增步驟，說明它幫哪段工作、減少哪種錯誤，以及是否能被跳過或恢復。",
    ]),
    s("落地方法與驗收", [
      "在 PR 寫出 job statement、三階段圖、主要與例外狀態、真實資料來源，以及一個代表性用戶可以完成的端到端任務。",
      "驗收新手首次建立、進行中返回、部分失敗、結果比較、跨渠道與手機。任何已發送行為維持 App 原有權限及 backend 契約，文件示例永不發送。",
    ]),
  ], ["spec/feature-workspaces.md", "spec/content-timing.md", "spec/data-display.md"]),
  p("activation-journey", "業務致勝與 Flow Design", "由連結渠道到首次價值", "連結只係能力開通；第一則真實對話同角色所需結果，先係可驗證嘅價值。", "activation-journey", [
    s("入口與決定", [
      "新團隊先理解連結渠道可以完成咩工作，再確認授權、費用或不可逆後果。所需資訊應在承諾之前可見；掃碼與 technical help 留到相應時刻。",
      "若團隊已連結渠道、欠缺權限，或者由 deep link 進入，入口要按真實狀態改變；唔可以每次重新展示同一段 onboarding。",
    ]),
    s("由完成設定走向真實使用", [], t(["時刻", "真實完成事件", "下一步"], [
      ["連結渠道", "服務確認渠道可用", "去 Inbox 驗證能否收到對話。"],
      ["首則對話", "實際客戶訊息到達", "按角色引導回覆、分配或觀察。"],
      ["角色價值", "由各角色的真實工作結果確認", "指出下一個可重複使用的任務。"],
    ])),
    s("分支、補救與回訪", [
      "授權失敗、連接中、斷線、無對話、權限不足屬不同分支；保留原選擇與上下文並指出可執行補救。",
      "邀請團隊可以係適當嘅下一步，但唔係連接完成後所有人必做嘅阻塞關卡。用戶可暫停、回來繼續，進度只能由真實事件完成。",
      "檢查 Home、Channels、Inbox 之間嘅深連結同返回路徑；唔以 mock demo 或見過教學當作已收到真實客戶訊息。",
    ]),
  ], ["spec/feature-workspaces.md", "spec/content-timing.md", "spec/live-state-design-concerns.md"]),
  p("role-aha", "業務致勝與 Flow Design", "Management、Marketing、CS 嘅 Aha moment", "同一個渠道接通之後，不同職責要從真實工作中看見不同價值。", "role-aha", [
    s("角色係職責，不係硬編嘅身份", [
      "先利用已知團隊設定與權限；唔知先問。容許一個人兼多個職責、略過建議同日後更改，唔根據職稱單獨決定整條旅程。",
      "每條建議須能解釋 Role → Responsibility → Capability → Customer value，並有真實完成事件；避免只量度卡片點擊或導覽完成。",
    ]),
    s("三個正式設計目標", [], t(["角色", "首次有意義結果", "不可誤判為成功"], [
      ["Management", "看見真實對話與已分配／未分配的服務概況", "空的示範儀表板或未核實的總數。"],
      ["Marketing", "完成首個針對目標群體的送達，並能回看互動", "只建草稿或看過預覽；mock demo 需明確標示。"],
      ["CS", "回覆第一則真實入站訊息", "只開啟 Inbox；分配不是回覆的先決條件。"],
    ])),
    s("驗收與界線", [
      "Marketing 可以先用明確標示嘅 mock demo 理解價值，但正式完成事件仍須基於真實送達和互動資料；冇資料時呈現下一步而非假成果。",
      "Management 需要可追溯的 scope 與更新時間；CS 需要可回復嘅草稿、視窗／權限限制。所有角色路徑保持切換與返回。",
      "呢啲係設計目標，唔代表 backend 已提供所有量度事件；實作前要核對來源與權限。",
    ]),
  ], ["spec/feature-workspaces.md", "spec/live-state-design-concerns.md", "spec/data-display.md"]),
  p("case-library", "Case Study Library", "Case Study Library · 由證據到決策", "用可追溯嘅 before／after 記住點解改，唔只儲存改完嘅畫面。", "case-library", [
    s("每個案例都有同一份合約", [
      "先交代用戶工作、角色、產品版本與證據；再展示改前問題、改後提案、設計取捨、正常／例外流程、易用／可信賴／可持續演進評估及驗收。",
      "『改前』只用有版本證據嘅舊畫面；如由程式與評論重構，明確標示『現況重構示意』。『改後』未進 App 一律標 Design System 提案。",
      "案例 visual specimen 只用匿名或虛構資料。真實截圖要先不可逆去識別化，任何文件唔可以嵌入可還原的原圖、ID 或客戶數據。",
    ]),
    s("首批五個深入案例", [], t(["案例", "持久工作循環", "重點"], [
      ["Broadcasting", "策劃／設定 → 觀察執行 → 檢視結果並學習", "建立、進度、歷史 table、analytics、失敗補救。"],
      ["Contacts", "找到對的人 → 理解資料 → 有範圍地更新", "table、detail、filter、批次作用範圍。"],
      ["Inbox", "找到待回覆 → 對話／分配 → 完成與跟進", "filter panel、thread、hover action、mobile。"],
      ["Automation", "定義觸發 → 編輯與測試 → 發布與檢查", "canvas、草稿保護、實際狀態。"],
      ["Integration", "探索 → 授權連結 → 維護／恢復", "catalog、connection CTA、錯誤恢復。"],
    ])),
    s("引用與採用狀態", [
      "每個案例連到相關 Handbook 規則、Design System spec 同指定 commit 的 App 來源；來源存在只表示觀察依據，唔表示新模式已部署。",
      "採用標籤獨立表示『現有 App 行為』『Design System 提案』『待驗證假設』。案例頁唔會自行更動 App、API、permission 或發送資料。",
    ]),
  ], ["spec/feature-workspaces.md", "spec/cross-task-design-audit.md", "spec/module-code-extraction.md"]),
  p("motion-lab", "Motion Lab", "Motion Lab · 有用嘅微動畫", "動畫解釋狀態與因果；視覺驚喜可以有，但唔可以拖慢工作或遮住風險。", "motion-lab", [
    s("先講清楚動畫幫緊邊個任務", [
      "選中、展開、切換工作階段、儲存結果、列表更新都可以有細微動作；動畫應幫用戶知道剛剛發生咩，而非令每件物件一直郁。",
      "案例庫每個 before/after 可標示 motion rationale。Broadcast 由 Review 去 Sending 時，位置與狀態連續；失敗需要清楚文字與下一步，唔以震動代替錯誤解釋。",
    ]),
    s("互動預設與 reduced motion", [], t(["事件", "建議時間", "降動效版本"], [
      ["直接按壓、選取、hover/focus", "150–250ms；transform/opacity 優先", "即時改變外觀，焦點及文字不消失。"],
      ["局部 panel／案例視角切換", "250–400ms；保持閱讀錨點", "即時切換，保留同一內容順序。"],
      ["成功／錯誤結果", "服務狀態到達先回饋；不循環慶祝", "同一文字、圖標及可達操作。"],
    ])),
    s("工具與版權界線", [
      "動畫規格以 CSS／互動契約描述；Anime.js 可作可選示例而唔成為 App 必須依賴。參考外部社群動畫時要重新設計幾何、授權與可達性，唔直接複製陌生元件。",
      "驗收 desktop、touch、鍵盤、prefers-reduced-motion、手冊內『減少動效』開關；動畫不得阻止閱讀、改變 tab order 或延遲完成操作。",
    ]),
    s("Analytics loading skeleton · 有節奏但仍然係 dummy", [
      "2026-09-30 嘅檢討：前一個 prototype 嘅圖表柱微跳、呼吸、表格逐行節奏受到肯定，但畫面加入真實感數字、品牌、導航、圖像、campaign 名稱及 timer 後，已經唔似暫時 placeholder。今版只保留 chart 同 table 兩款低資訊密度骨架。",
      "灰色短條、少量低飽和青綠、穩定容器尺寸；不顯示數值、日期、可讀名稱、業務狀態或 icon。動效於區塊進入 viewport 才運行，離開視野／tab 隱藏／loading 結束即暫停或卸載；OS 或手動 reduced motion 顯示同一靜態形狀。",
      "Ready、error、cancelled 由真正 request state 決定，唔靠 timer 切去假數據。載入容器提供 aria-busy 與簡短 status；真正圖表／表格由 App 擁有來源、分母、期間、錯誤及補救。",
    ]),
  ], ["spec/motion.md", "spec/accessibility-content.md", "spec/feature-workspaces.md"]),
  p("ai-agent-guide", "AI Agent 使用與版本治理", "AI Agent 點樣安全用 Design System", "同一份 Handbook 俾設計師、工程師同 AI Agent 用，但 draft、示例與真實 App 能力要嚴格分開。", "ai-agent-guide", [
    s("讀取順序", [
      "先讀 agent-index.json 嘅版本、章節與案例 metadata；再按任務讀 Foundation → Principle → Module → Flow → Case Study → 實作來源。唔先由一張漂亮示例推斷可用功能。",
      "規範代表設計意圖；示例只表達可能畫面；待驗證事項不得自動轉為承諾。存在 package-backed Storybook 故事也不代表 App 已採用。",
    ]),
    s("輸出契約", [], t(["輸出物", "必須帶上", "禁止"], [
      ["產品畫面／PPT／Homepage", "適用版本、目的、來源、示例資料標籤", "把示例數據寫成客戶業績。"],
      ["App 變更建議", "現有能力、狀態、權限、失敗與返回路徑", "從圖像推斷 API 已有。"],
      ["新案例", "證據 commit、before/after 狀態、三項評估、驗收", "無證據稱為歷史改前。"],
    ])),
    s("更新與版本", [
      "同一個 PR 更新文檔、案例視覺、機器索引與測試。版本與香港時間戳固定喺來源，重建唔應無故改變修訂時間；已發布 snapshot 不覆寫。",
      "若 Agent 發現 App 與手冊不符，提出 issue／PR 並附來源與產品版本；正式採用需照 App rollout 流程 review，唔由 Handbook 靜默修改產品。",
    ]),
  ], ["spec/adoption.md", "spec/module-code-extraction.md", "spec/feature-workspaces.md"]),
];
