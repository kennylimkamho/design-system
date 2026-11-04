import { page as p, section as s, table as t } from "./model.mjs";

const audit = "spec/cross-task-design-audit.md";

export const flowPages = [
  p(
    "task-first",
    "設計原則",
    "任務優先 · 由目標揀畫面",
    "先定義用戶想完成的工作、需要的證據與下一步，才選 table、catalog、setup flow 或 workspace。",
    "task-first",
    [
      s("先寫一份任務契約", [
        "開始畫版面之前寫下：誰在這個情境進來、他想完成甚麼、已知與未知的資料、第一個可執行動作、完成後可驗證的結果。角色標籤不能代替真實任務。",
        "主要操作只服務當前任務；次要設定、教學與批次工具按需要逐步揭示。Identity、status、阻礙任務的錯誤與下一步不可藏在 hover。",
        "空狀態也有工作：首次使用引導建立／連結；篩選後無結果要保留條件及清除入口；服務錯誤要保留上下文及重試。",
      ]),
      s(
        "按工作性質選展示模式",
        [],
        t(
          ["用戶正在做甚麼", "優先模式", "ChatDaddy 例子與邊界"],
          [
            ["探索可用能力", "Catalog / cover + 分類 + 搜尋", "Integration 首頁先讓人認識及選 app；不要以 records table 開場。"],
            ["比較或批次處理紀錄", "Table / data list", "Contacts 顯示電話、來源渠道、新增日期等決策有用欄位；選取時才突出批次控制。"],
            ["理解並設定功能", "目的說明 → 示例 → guided setup", "Forms、bot、keyword replies、message flows 先說明用途，再要求填設定。"],
            ["連續處理對話", "List → thread → 按需 inspector", "Inbox 保留對話身份與訊息內容；唔把所有資訊擠進一張表。"],
            ["了解趨勢或結果", "KPI → chart → drill-down", "只有定義、期間、單位及來源可靠的數據才顯示。"],
          ],
        ),
      ),
      s("導航服從工作邊界", [
        "Primary menu 轉換工作領域，secondary menu 轉換同一領域內的長期目的地；tabs 只切換同一物件的同級內容。篩選、display mode 同一次性 action 不扮作導航。",
        "已確認的視覺方向：active secondary item 用清楚字重與輕 tint，不用大塊深藍搶過頁面內容；保持 keyboard focus 明顯。",
        "產品分類重組仍待決策。不要因歷史草稿而即時搬動 App、API、Academy 或其他 route；先驗證任務關係、deep link 與現有 scope。",
      ]),
      s("用真實能力與具體證據驗收", [
        "若現有 API 沒有 total、popular tags、進度或可用性資料，就顯示未知／未提供，不捏造數字或假成功。UI-only 改版不代表 backend 已改。",
        "解釋新能力時優先用具體例子，例如一段 WhatsApp 對話、Instagram 訊息或 WebChat widget；圖片與 hero 要幫人理解，不是每頁固定加大 cover。",
        "設計 review 問：用戶可否不看教學就指出下一步？資料是否足夠做決定？返回後 query、filter、scroll、草稿是否保留？未決假設有否清楚標示？",
      ]),
    ],
    [audit, "spec/navigation.md", "spec/data-display.md"],
  ),
  p(
    "onboarding",
    "產品模式",
    "First-use 與角色導向 onboarding",
    "由第一個成功時刻開始，以角色的職責與客戶價值決定引導內容；Home 或獨立 onboarding 的位置仍待驗證。",
    "onboarding",
    [
      s(
        "四因子推薦矩陣",
        [
          "任何角色化推薦都要能追溯 Role → Responsibility → Capability → Customer value；角色名稱本身不是推薦理由。下表為設計推演示例，不是已驗證的客戶分群。",
          "如已有可靠團隊資料，先利用已知上下文；不知道時才問。允許略過、稍後更改，以及一人兼多職責。不要靠一個頭銜決定整個產品路徑。",
        ],
        t(
          ["示例角色", "職責 / job", "可探索能力", "希望產生的客戶價值"],
          [
            ["業主／負責人", "知道渠道有否接妥、服務有否漏接", "連結渠道、待處理概覽", "客人找到團隊，重要對話有人跟進"],
            ["Marketing", "讓合適客群收到相關資訊", "分眾、廣播草稿與預覽", "減少無關訊息，提升資訊相關性"],
            ["客服主管", "分配工作及維持回覆品質", "Inbox 分配、未讀／未分配 view", "更快發現並處理未回覆對話"],
          ],
        ),
      ),
      s("先到第一個真實成功時刻", [
        "對尚未連接渠道的新團隊，第一個明顯步驟通常是「連結第一個渠道」。顯示能否連結、需要的授權與失敗恢復；成功只在服務確認後標示。",
        "邀請團隊、建立自動化或查看指標可以係下一步，但排序依角色職責與已有設定而變；不要把示例順序硬編成所有組織的共同流程。",
        "Progress 反映真實完成事件，不用假百分比。可暫停並返回，保留已選渠道、授權結果與未完成設定。",
      ]),
      s("引導只問必要問題，位置仍待驗證", [
        "先說明功能用途、預期結果及一個具體例子，再邀請使用者設定。對角色、責任或目標的提問須直接改變下一步內容，否則不要增加問卷。",
        "Home、登入後 onboarding、功能內 contextual help 各有不同成本；角色引導放邊個位置尚未拍板。設計稿需比較返回／略過、跨角色、已有渠道、權限不足及深連結情況。",
        "對話中提到的 CEO、Marketing、客服主管係研究情境，不代表已批准的角色選單或文案；要用客戶研究及產品能力再核實。",
      ]),
      s("交付與驗收", [
        "交付 Role → Responsibility → Capability → Value 矩陣、主要旅程、分支、空／錯／成功狀態，以及每一步由哪個真實事件完成。",
        "測試全新帳戶、已有渠道但未邀請團隊、單人兼多職責、授權失敗、無權限、返回後續做。主要 CTA 必須清楚且可恢復。",
        "量度第一個可用渠道成功連接與後續有效使用，而不是只量度點擊 onboarding、看完卡片或接受推薦。",
      ]),
    ],
    [audit, "spec/adoption.md", "spec/components.md"],
  ),
  p(
    "integrations",
    "產品模式",
    "Integrations · 探索到連結",
    "第一屏幫用戶找到合適的整合；卡片先呈現連結目標，再按需要顯示設定、教學與技術細節。",
    "integrations",
    [
      s("探索頁骨架", [
        "頂部 cover 簡短解釋整合能帶來甚麼；左側 secondary menu 依用途／類型瀏覽，All Apps 附近提供簡潔搜尋。分類是導航／篩選決策，不要把同一層重複畫成 tabs。",
        "Catalog 用可辨認的品牌或 app identity、短說明及具體使用例子；先幫人理解可連接甚麼，再展示已連接帳戶紀錄。第一屏不以管理 records table 取代探索。",
        "App 數量少時搜尋可按需要收起，但應保留清晰的找尋方式。大 cover、hover preview 或 API 文件入口只在對應任務需要時加強，不作全產品統一尺寸。",
      ]),
      s(
        "卡片按狀態決定動作",
        [],
        t(
          ["狀態", "必見", "逐步顯示"],
          [
            ["未連結", "App 身份、用途、連結 CTA", "設定、詳細文件；tutorial 在開始／遇錯後 contextual 顯示"],
            ["連接中", "真實 pending 與返回上下文", "可用時顯示取消／說明；不預告成功"],
            ["已連結", "帳戶身份、連線狀態、主要管理入口", "低頻設定、更多操作"],
            ["失敗／斷線", "原因及可執行的恢復路徑", "技術診斷；若恢復是唯一下一步，不能只靠 hover"],
          ],
        ),
      ),
      s("連接類型與可用性要講明白", [
        "平台 logo、Mobile App／Business App／Coexistence／Cloud API 模式、帳戶資料與連線健康度分層顯示，不能靠一個圖示混成同一種產品。",
        "Coming soon 要標明不可連結，不能做成可按的假 CTA；支援狀態由真實產品能力與渠道權限決定。官方品牌標記與自訂示意圖要清楚區分。",
        "Channel／app icon 只表示身份，唔表示已連結。連線成功、restricted、unknown、需要重新授權各用文字狀態說明。",
      ]),
      s("驗收發現、連接與失敗三條路", [
        "Desktop 卡片次要 Settings 可 hover／focus 顯示；touch 以明確 More／Settings 入口提供同等操作。主要連結 CTA 常駐。",
        "預覽可以展示實際用途的示例訊息或 widget，但要標示樣本；沒有後端資料時不顯示熱門、使用量、成功率或假連線狀態。",
        "驗證從搜尋／分類進入連接、授權返回、失敗重試、已連結管理、鍵盤與 touch；返回 catalog 時保留原 query 與分類。",
      ]),
    ],
    [audit, "spec/icon-identity.md", "spec/navigation.md"],
  ),
  p(
    "live-state-concerns",
    "產品模式",
    "Live-state design concerns · 以真實狀態設計",
    "由 App 新改動提煉五項跨頁面規則：真實成功、列表狀態、逐步揭示、幫助恢復，以及數據與功能聲稱的證據。",
    "live-state-concerns",
    [
      s("首個成功要由真實事件完成", [
        "第一步的 CTA 跟隨服務確認的連線狀態：檢查中可查看渠道、未連結引導連結、已連結引導到 Inbox。連線成功與收到第一則真實對話是兩個里程碑，不能因點了按鈕或看完教學就打勾。",
        "示例用 WhatsApp 說明原則，不代表每個組織都必須先連 WhatsApp。按已知渠道、角色、權限及任務調整下一步；後續邀請團隊或自動化維持次要。",
        "沒有服務證據時顯示『尚待確認』或具體下一步；不要以樂觀 UI、假百分比、動畫或推算訊息代替完成事件。",
      ]),
      s("列表狀態先判斷，再決定畫面", [
        "Loading、錯誤、權限／方案限制、成功的未篩選空列表、已篩選無結果，以及已有紀錄，是不同的資料狀態。只有成功且 settled 的未篩選空結果才可顯示 first-use 介紹。",
        "搜尋無結果保留 query/filter 及清除入口；錯誤保留上下文並可重試。First-use 說明用途、具體例子及一個真正可用的 Create/Connect CTA；不要在 header 重複同一粒 Create。",
        "管理列表只展示可核對的資料；未知 total 不寫成 0。返回時保留合適的搜尋、篩選與位置。",
      ]),
      s("必要訊號常駐，低頻操作按需顯示", [
        "身份、目前位置、未讀、連線狀態及阻礙任務的錯誤保持可見；設定、展開箭嘴、次要編輯及 row action 可於 hover 與 focus-within 出現，touch／無 hover 裝置要有明確常駐入口。",
        "未讀 6 是精確數；若只知至少 6，視覺為 6+，輔助科技讀作『至少 6』。99+ 不能暗示精確 99。數字採 tabular-nums，badge 外形與大小不因 hover 背景而跳動。",
        "輕微位置或底色動效可以確認操作，但不能令焦點或排版跳走；reduced motion 停止裝飾變形。",
      ]),
      s("Help 要帶用戶返到任務", [
        "Contextual help 在需要時提供相關文章；它是補充，不應取代頁面上的用途、欄位標籤或主要 CTA。窄屏可由 popover 升級為全屏 dialog，但只保留一個掌管焦點的 overlay。",
        "嵌入文章慢或失敗時，顯示可操作的重試；若有已批准 URL，提供外部開啟。關閉後返回原任務與焦點，不要讓兩個 modal 疊起來或只有無限 spinner。",
        "客服選項及回覆時間須有服務事實支持；示例不得看起來像已提交 ticket。",
      ]),
      s("可用性與指標要有來源", [
        "Connector 或 AI 能力只有在 feature flag、權限、後端合約和文件都支持時才標『可用』；新 UI 或介紹文案本身不是上線證據。清楚列出前置條件、授權點、可做與不可做、失敗回復。",
        "Operational overview 可提供真實的 active/scheduled 摘要和 drill-down；Analytics 的比率／圖表須有定義、分母、期間、時區、資料覆蓋與更新時間。未知、部分資料、真正 0 和載入錯誤分開呈現。",
        "交付時逐項註明完成事件、total/partial 來源、功能可用性與 metric 定義；驗收 mouse、keyboard、touch、mobile、英中語言與 reduced motion。未核實的產品聲稱只標為待驗假設。",
      ]),
    ],
    ["spec/live-state-design-concerns.md", "spec/feature-workspaces.md", "spec/components.md"],
  ),
];

const frame = (label, body) => `<div class="flow-scene"><span class="flow-eyebrow">${label}</span>${body}</div>`;
const card = (kicker, title, detail, footer = "") => `<div class="flow-card"><span class="flow-eyebrow">${kicker}</span><strong>${title}</strong><p>${detail}</p>${footer}</div>`;

export const flowDemos = {
  "task-first": `<div class="flow-demo"><div class="flow-demo-head"><span class="flow-eyebrow">START WITH THE JOB</span><h3>同一個產品，唔係同一種頁面。</h3><p>先問「用戶嚟呢度做乜」，再決定內容同操作。</p></div><div class="flow-grid three">${card("DISCOVER", "揀整合", "認識支援咩 app、點樣連接。", "<span class=\"flow-mini-action\">Catalog + 分類</span>")}${card("COMPARE", "睇聯絡人", "按電話、來源同日期辨認紀錄。", "<span class=\"flow-mini-action\">Table + filter</span>")}${card("CONFIGURE", "設定自動化", "知道功能用途，再一步步配置。", "<span class=\"flow-mini-action\">Guide + preview</span>")}</div><div class="flow-demo-foot">視圖是任務的結果；以上為虛構示例，不讀取帳戶資料。</div></div>`,
  onboarding: `<div class="flow-demo"><div class="flow-demo-head"><span class="flow-eyebrow">FIRST USE / PERSONALISATION</span><h3>從職責推導引導，先完成第一件事。</h3><p>角色只係線索；建議必須解釋對客戶有咩價值。</p></div><div class="flow-chain"><span>角色<small>客服主管</small></span><i aria-hidden="true">→</i><span>職責<small>分配對話</small></span><i aria-hidden="true">→</i><span>能力<small>Inbox views</small></span><i aria-hidden="true">→</i><span>價值<small>少啲漏覆</small></span></div><div class="flow-first-step"><b>建議第一步 · 連結第一個渠道</b><span>未連結時先建立可用對話入口；成功要由服務確認。</span><span class="flow-mini-action">連結渠道 · 示意</span></div><div class="flow-demo-foot">以上為研究假設；Home 與獨立 onboarding 的放置位置仍未決定。</div></div>`,
  integrations: `<div class="flow-demo flow-integration-demo"><div class="flow-demo-head"><span class="flow-eyebrow">INTEGRATION LANDING</span><h3>先發現合適工具，再連結。</h3><p>示例卡不連接 App；設定是次要操作。</p></div><div class="flow-catalog"><div class="flow-catalog-menu"><b>類別</b><span class="is-current">All Apps</span><span>Payment</span><span>Messaging</span><span>Commerce</span></div><div class="flow-catalog-main"><div class="flow-catalog-bar"><b>All Apps</b><span>搜尋 app</span></div><div class="flow-app-card" tabindex="0" aria-label="示例整合卡，按 Tab 查看次要設定"><div class="flow-app-icon" aria-hidden="true">P</div><div class="flow-app-content"><strong>PayFlow</strong><small>付款整合 · 接收訂單與付款通知</small><span class="flow-card-status">未連結</span></div><div class="flow-app-actions"><button type="button" data-demo-feedback="本地示例：正式產品才會開啟連結流程。">連結</button><button class="flow-card-secondary" type="button" aria-label="PayFlow 設定" data-demo-feedback="本地示例：設定入口需正式產品權限；此處沒有寫入資料。">設定</button></div></div></div></div><div class="flow-demo-foot">主要操作常駐；次要設定在 hover／focus 顯示，touch 有可見入口。</div></div>`,
  "live-state-concerns": `<div class="flow-demo"><div class="flow-demo-head"><span class="flow-eyebrow">LIVE STATE / EVIDENCE</span><h3>畫面跟真實狀態走，唔跟假設走。</h3><p>同一個用戶任務，在服務未確認、已連結、收到訊息時要呈現不同下一步。</p></div><div class="flow-grid three">${card("01 · NOT CONNECTED", "連結渠道", "真正可用的連結入口；未完成之前不打勾。", '<span class="flow-mini-action">連結 · 示意</span>')}${card("02 · CONNECTED", "發第一則訊息", "顯示已連結身份；指向 Inbox 驗證第一段對話。", '<span class="flow-mini-action">前往 Inbox · 示意</span>')}${card("03 · CONFIRMED", "看到真實對話", "服務回傳的對話才算完成；下一個任務才升上來。", '<span class="flow-mini-action">下一步 · 示意</span>')}</div><div class="flow-demo-foot">全為靜態假資料；不讀取連線、訊息或進度，也不會改變 App。</div></div>`,
};

export const flowSectionVisuals = {
  "task-first": {
    0: frame("TASK CONTRACT", `<div class="flow-grid two">${card("USER QUESTION", "我而家想完成咩？", "進來原因 → 已知資料 → 下一步 → 可驗證結果。")}${card("BAD SHORTCUT", "先揀 table 定卡片？", "未知道資料與任務，外觀選擇沒有依據。")}</div>`),
    1: frame("VIEW SELECTION", `<div class="flow-grid three">${card("CATALOG", "探索 App", "比較用途與可用性，不係已連結記錄。")}${card("TABLE", "比較紀錄", "電話、來源、日期足夠做判斷。")}${card("GUIDE", "配置功能", "用途、例子、步驟、結果按序顯示。")}</div>`),
    2: frame("NAVIGATION LEVELS", `<div class="flow-nav-example"><span>Primary<br><b>Inbox</b></span><span>Secondary<br><b class="is-current">Conversations</b></span><span>Same object<br><b>Overview · Activity</b></span></div><p class="flow-note">輕 tint＋字重提示 current；分類重組仍待決策。</p>`),
    3: frame("EVIDENCE", `<div class="flow-grid two">${card("REAL EXAMPLE", "對話預覽", "示例：客戶查訂單 → 團隊回覆 → 更新狀態。")}${card("UNKNOWN ≠ ZERO", "數據未提供", "沒有後端 total 時說明未知，不展示 0 或假進度。")}</div>`),
  },
  onboarding: {
    0: frame("TRACEABILITY", `<div class="flow-chain compact"><span>Role<small>Marketing</small></span><i aria-hidden="true">→</i><span>Responsibility<small>合適客群</small></span><i aria-hidden="true">→</i><span>Capability<small>分眾草稿</small></span><i aria-hidden="true">→</i><span>Value<small>少啲無關訊息</small></span></div>`),
    1: frame("FIRST MILESTONE", `<div class="flow-step-stack"><div class="is-active"><b>01　連結第一個渠道</b><small>服務確認先完成</small></div><div><b>02　按需要邀請團隊</b><small>取決於角色與現有設定</small></div><div><b>03　開始處理對話</b><small>可返回及續做</small></div></div>`),
    2: frame("PLACEMENT NOT DECIDED", `<div class="flow-grid three">${card("HOME", "持續入口", "重回產品時可見，但要避免搶過日常工作。")}${card("ONBOARDING", "首次集中引導", "清楚聚焦，但唔應變成長問卷。")}${card("CONTEXTUAL", "功能內教學", "貼近當下任務，但需要一致入口。")}</div>`),
    3: frame("VALIDATE REAL PATHS", `<div class="flow-grid two">${card("SUCCESS", "已連結", "下一步按角色和團隊狀態排序。")}${card("RECOVERY", "授權失敗", "保留設定與錯誤原因；可重試，不假裝完成。")}</div>`),
  },
  integrations: {
    0: frame("LANDING ANATOMY", `<div class="flow-catalog small"><div class="flow-catalog-menu"><b>類別</b><span class="is-current">All Apps</span><span>Messaging</span><span>Payment</span></div><div class="flow-catalog-main"><div class="flow-catalog-bar"><b>整合 App</b><span>搜尋</span></div><div class="flow-card"><strong>先睇用途，再揀合適 App</strong><p>Cover 解釋價值；卡片顯示可連接能力。</p></div></div></div>`),
    1: frame("ACTION PRIORITY", `<div class="flow-grid two">${card("ALWAYS VISIBLE", "連結", "未連結卡片的主要下一步；唔靠 hover 搵。")}${card("ON INTENT", "設定／教學", "設定 hover／focus；教學喺開始連結或失敗後提供。")}</div>`),
    2: frame("IDENTITY ≠ HEALTH", `<div class="flow-grid three">${card("PLATFORM", "WhatsApp", "渠道身份與官方標記。")}${card("MODE", "Cloud API", "連接模式以文字解釋。")}${card("HEALTH", "需要重授權", "連線健康度獨立呈現。")}</div>`),
    3: frame("PATH CHECK", `<div class="flow-step-stack"><div><b>發現 → 搜尋／分類</b><small>保留 query 與類別</small></div><div><b>連結 → 真實 pending</b><small>未返回成功前不打勾</small></div><div><b>失敗 → 原因／重試</b><small>主要恢復路徑唔只藏在 hover</small></div></div>`),
  },
  "live-state-concerns": {
    0: frame("VERIFIED FIRST OUTCOME", `<div class="flow-step-stack"><div><b>連線檢查中 → 查看渠道</b><small>沒有完成標記</small></div><div class="is-active"><b>已連結 → 發訊息、打開 Inbox</b><small>只完成『連線』，尚未完成『收到對話』</small></div><div><b>Inbox 收到對話 → 第一個成功</b><small>由真實事件確認</small></div></div>`),
    1: frame("STATE DECISION", `<div class="flow-grid three">${card("UNFILTERED EMPTY", "建立第一個知識庫", "成功讀取、沒有紀錄、沒有 query；只給一個建立入口。")}${card("FILTERED NO MATCH", "找不到『VIP』", "保留搜尋字與條件；提供清除搜尋。")}${card("ERROR / LOADING", "尚未知道數量", "保留上下文；重試或等待，不呈現『0』。")}</div>`),
    2: frame("CERTAINTY + REACHABILITY", `<div class="flow-grid two">${card("COUNT", "Inbox · 6+", "目前只知至少 6；螢幕閱讀器同樣讀『至少 6』，不說精確 6。")}${card("ACTION", "聯絡人 · 已分配", "身份與狀態常駐；編輯、更多操作 hover／focus 顯示，touch 有按鈕。")}</div><p class="flow-note">Badge 大小、位置與內容在 hover 背景下維持穩定；reduced motion 不刪除操作。</p>`),
    3: frame("HELP RECOVERY", `<div class="flow-grid two">${card("CONTEXTUAL", "如何連結渠道？", "先解釋當前任務；必要時開相關文章。支援 dialog 取代 help，不疊加。")}${card("SLOW / FAILED", "文章載入太久", "顯示『重試』及已批准的『在新分頁開啟』；關閉後返回原焦點。")}</div>`),
    4: frame("CLAIM + METRIC EVIDENCE", `<div class="flow-grid two">${card("CAPABILITY", "需要確認可用性", "只有 UI 並不等於已上線；核對權限、API、文件及失敗路徑。")}${card("ANALYTICS", "送達率：資料不足", "欠分母或覆蓋時不繪圖；顯示期間、時區、來源與更新時間。")}</div>`),
  },
};
