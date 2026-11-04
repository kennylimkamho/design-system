import { page as p, section as s, table as t } from "./model.mjs";

const source = "spec/content-timing.md";
export const contentTimingPage = p(
  "content-timing",
  "設計原則",
  "內容跟住時刻走",
  "先決定用戶要完成甚麼，再決定呢一刻要講甚麼。決定、行動、補救、使用、參考各有位置；簡潔唔可以變成隱瞞。",
  "content-timing",
  [
    s("五個時刻：每段資訊都有歸屬", [
      "每寫一段字，先記錄它答緊用戶哪個問題、出現在哪個控制旁、由甚麼事實支持。分類唔到，通常應刪掉或移去另一個時刻。",
      "已核實的費用、權限、風險或不可逆後果，必須在承諾前直接可見；不可為咗令畫面乾淨而塞入 Help。補救只等錯誤真正發生時出現，但可預見的重大風險仍要預先披露。",
    ], t(
      ["時刻", "用戶問緊", "放置位置", "ChatDaddy 例子"],
      [
        ["決定 · Decide", "我應唔應該做？", "承諾之前，直接顯示", "連結前已核實的費用、授權和不可逆後果"],
        ["行動 · Act", "我而家做咩？", "緊貼控制", "掃碼步驟貼住 QR，按鈕講清下一步"],
        ["補救 · Recover", "點解唔得？點返去？", "出事時，原位顯示", "QR 過期後提供重新產生，保留已選渠道"],
        ["使用 · Use safely", "點樣用得好、用得安全？", "危險操作發生處", "Broadcast 送出前核對收件人和範圍"],
        ["參考 · Reference", "我想深入了解", "主動開啟的 Help／了解更多", "完整政策與技術限制"],
      ],
    )),
    s("七條內容設計原則", [
      "01 一個畫面，一個任務：只保留對當前決定或操作有幫助的文字；刪咗唔會做錯或做唔到，就刪或搬。",
      "02 知情權與有用資料分開：費用、風險、不可逆後果、法律責任直接披露；額外技巧可以收第二層。",
      "03 三層披露：第 0 層直接見到；第 1 層展開；第 2 層 Help。層級唔可以凌駕法律或無障礙要求。",
      "04 護欄勝過教育：喺真正有風險嘅操作前攔一攔，解釋後果和安全下一步；唔靠 onboarding 一次過教晒。",
      "05 例外發生先出現：正常流程唔預載所有失敗說明；錯誤發生時講明原因、恢復方法並保留上下文。",
      "06 同一件事只講一次，用一把聲：標題、副題、banner、tooltip 只揀一個最合適的 owner。中英文術語保持一致。",
      "框有用途先加：表示可操作元件、資料集合或必要警告；唔用框、badge 或 kicker 裝飾每段解說。頁面標題講咗嘅，示例唔再講一次；版本與使用界線集中一處，來源按需查閱。",
      "07 能示範就唔好描述：用真實而標明的 preview 或圖示代替長篇步驟；同時提供文字替代，重要後果不能只藏在圖中。",
    ]),
    s("三層披露，但零層唔可以漏", [
      "第 0 層是當前任務必需：做決定的事實與眼前動作。第 1 層讓用戶自選展開實用補充；第 2 層去 Help center 看完整規則、平台文件或故障排查。",
      "只要移走某項資訊會令用戶作出錯誤承諾，該資訊就不屬於第 1 或第 2 層。展示事實時須有來源、owner 和版本；未知費用或風險不能用假數字填滿。",
    ]),
    s("內容預算：逼自己問『屬於邊一刻？』", [
      "以下係預設編輯上限，不係刪走必要披露的藉口。兩種語言都要測試窄屏與 200% zoom；唔用縮細字代替編輯。",
    ], t(
      ["Pattern", "預設上限", "超出時點做"],
      [
        ["Wizard 每一步", "標題一句、說明一句、要點最多三個、主要按鈕一個", "可選細節移第 1／2 層；必要披露仍保留"],
        ["警告框", "最多三點，每點一行", "最重大後果先講，詳細政策另連結"],
        ["錯誤訊息", "發生咗咩 ＋ 可以點做；一至兩句", "診斷細節可展開，保留原資料"],
        ["Tooltip／提示", "一句", "如果係必要標籤或決定資料，應放畫面上"],
      ],
    )),
    s("QR 連結：同一結構，內容分時刻", [
      "本示例以『連結一個渠道』作 P1 wizard 的結構參考，不代表現有 App 已全面採用 P1–P4。QR 只是視覺佔位，不能掃描，也不能推斷已連接的是哪種 WhatsApp app／Cloud API 模式。",
      "改前：未開始連結就堆滿掃碼、過期、Broadcast 風險和技術政策，主要下一步難找。改後：決定關卡只放已核實的費用／授權／後果；掃碼步驟貼近 QR；逾時後才顯示補救；Broadcast 風險搬去真正送出前。",
      "示例沒有已核實的費用、授權或平台規則，所以承諾按鈕停用；正式產品要由負責團隊補上事實與服務狀態，唔可以照抄示例直接上線。連線成功同第一則真實對話係兩個不同里程碑。",
    ]),
    s("P1–P4 決定結構；五時刻決定內容", [
      "先由用戶任務揀結構；再逐段問何時出現。P1–P4 來自用戶提供的結構性參考，只作 crosswalk，唔係聲稱每個 ChatDaddy 功能已遷移。真實流程不適用時，先重新分類工作而唔係硬套標籤。",
    ], t(
      ["結構參考", "內容節奏", "示例"],
      [
        ["P1 · 一次性 Wizard", "承諾前披露，操作旁指示，出錯後補救", "Connect channel"],
        ["P2 · 設定表單", "後果貼近設定，成功按真實確認顯示", "Business hours"],
        ["P3 · 自動化物件", "Test／Publish 前護欄；執行失敗才補救", "Message flow"],
        ["P4 · 持續工作區", "身份與狀態常駐；次要操作按意圖揭示", "Inbox"],
      ],
    )),
    s("交付前，用一張卡審查每句字", [
      "交付格式：用戶任務 → 時刻 → 事實／來源 → 位置／層級 → 行動或後果 → 訊息 owner。缺費用、政策、權限或 API 狀態，就標『待核實』，唔以設計稿自創事實。",
      "檢查：移走會唔會做錯？必要披露有冇在承諾前？步驟有冇貼住控制？錯誤只在真實發生時出現、可恢復且保留輸入？安全提醒有冇在風險操作當下？中英文、keyboard、touch、200% zoom 同 reduced motion 都要過。",
    ]),
  ],
  [source, "spec/accessibility-content.md", "spec/live-state-design-concerns.md"],
);

const momentButton = (id, number, label, sub, active = false) =>
  `<button type="button" class="ct-moment${active ? " is-active" : ""}" data-ct-moment="${id}" aria-pressed="${active}"><span class="ct-number">${number}</span><span><b>${label}</b><small>${sub}</small></span></button>`;

const momentPanel = (id, title, note, body, hidden = false) =>
  `<section class="ct-stage" data-ct-stage="${id}" aria-label="${title}"${hidden ? " hidden" : ""}><p class="ct-stage-head">${note}</p>${body}</section>`;

export const contentTimingDemo = `<div class="ct-demo"><p class="example-instruction">切換時刻，睇「連結渠道」需要講咩。</p><div class="ct-shell"><nav class="ct-moments" aria-label="示例內容時刻">${momentButton("decide", "01", "決定", "應唔應該做", true)}${momentButton("act", "02", "行動", "而家點做")}${momentButton("recover", "03", "補救", "出錯點返去")}${momentButton("use", "04", "使用", "風險當下提醒")}${momentButton("reference", "05", "參考", "想了解更多")}</nav><div class="ct-workspace">${momentPanel("decide", "01 / 決定", "連結之前", `<div class="ct-main-task"><h4>連結 WhatsApp</h4><p>連結前，先確認你會授權甚麼，以及會否產生費用。</p><div class="ct-disclosure"><b>確認費用、授權範圍及不可逆後果</b><span>資料尚未核實，暫不可繼續。</span></div><button type="button" disabled aria-describedby="ct-disabled-reason">確認資料後方可繼續</button><small id="ct-disabled-reason">尚未有已核實的決定資料。</small></div>`) }${momentPanel("act", "02 / 行動", "開始連結時", `<div class="ct-main-task"><h4>用手機掃描 QR</h4><div class="ct-qr-row"><ol><li>喺手機打開對應 app</li><li>前往「已連結裝置」</li><li>掃描畫面 QR</li></ol><div class="ct-qr" role="img" aria-label="不可掃描的 QR 位置示意；沒有真實連接碼"><span>QR 位置示意<br>不可掃描</span></div></div><small>實際 QR、有效時間及連接狀態須由服務提供。</small></div>`, true)}${momentPanel("recover", "03 / 補救", "QR 真正過期後", `<div class="ct-main-task"><h4>重新連結渠道</h4><div class="ct-error" role="status">QR 已過期。重新產生後再掃描；已選渠道會保留。</div><button type="button" data-demo-feedback="本地補救示例：未產生真實 QR，也沒有更改連線狀態。">重新產生 QR</button><small>正常掃碼畫面唔預先顯示呢個錯誤。</small></div>`, true)}${momentPanel("use", "04 / 使用", "Broadcast 送出之前", `<div class="ct-main-task"><h4>先核對收件人</h4><p>預覽訊息與收件範圍，再決定是否送出。</p><div class="ct-guardrail"><b>送出前核對</b><span>收件人、內容及適用規則。正式護欄需根據實際平台政策與產品能力確定。</span></div><button type="button" disabled>送出（示例停用）</button><small>連結成功唔代表可以即刻 Broadcast。</small></div>`, true)}${momentPanel("reference", "05 / 參考", "用戶主動深入了解", `<div class="ct-main-task"><h4>需要完整說明？</h4><p>完整政策、平台限制同技術排查屬於可主動查閱嘅參考資料。</p><div class="ct-reference"><span>Help center · 連結渠道</span><span>完整政策 · 技術細節</span></div><small>示例冇杜撰 Help URL；真實連結需由內容 owner 核實。</small></div>`, true)}</div></div><div class="sr-only" role="status" id="ct-announcer">而家顯示：決定。未經核實嘅費用與權限不能藏在 Help，也不能啟用承諾按鈕。</div></div>`;

const specimen = (label, body) => `<div class="ct-visual">${body}</div>`;
const mini = (number, title, description) => `<div class="ct-mini"><span>${number}</span><b>${title}</b><small>${description}</small></div>`;
export const contentTimingSectionVisuals = {
  "content-timing": {
    0: specimen("FIVE MOMENTS", `<div class="ct-mini-grid five">${mini("01", "決定", "承諾之前")}${mini("02", "行動", "控制旁邊")}${mini("03", "補救", "出錯之後")}${mini("04", "使用", "風險當下")}${mini("05", "參考", "自選深入")}</div><p>已知重大風險要提前披露；唔可以等錯誤先講。</p>`),
    1: specimen("SEVEN PRINCIPLES", `<div class="ct-rule-stack"><div><b>一個畫面，一個任務</b><span>刪走不影響決定或操作的字。</span></div><div><b>知情權先行</b><span>費用、風險及不可逆後果，承諾前直接可見。</span></div><div><b>三層披露</b><span>必要資料可見，補充展開，完整細節去 Help。</span></div><div><b>護欄在當下</b><span>Broadcast 前核對，唔喺連結頁塞滿警告。</span></div><div><b>例外發生先講</b><span>出錯時原位說明補救，保留用戶工作。</span></div><div><b>同一件事只講一次</b><span>一個位置、一把聲；框有用途先加。</span></div><div><b>能示範就唔好描述</b><span>用可核對的畫面，並提供文字替代。</span></div></div>`),
    2: specimen("DISCLOSURE LADDER", `<div class="ct-layer-stack"><div><b>0 · 直接可見</b><span>決定資料＋眼前操作</span></div><div><b>1 · 主動展開</b><span>有用但非必需的補充</span></div><div><b>2 · Help center</b><span>完整政策與技術細節</span></div></div><p>如果移走會令用戶作錯決定，佢一定要留喺第 0 層。</p>`),
    3: specimen("EDITORIAL BUDGET", `<div class="ct-mini-grid four">${mini("1 + 1", "Wizard", "標題一句＋說明一句")}${mini("≤ 3", "警告", "三點，每點一行")}${mini("1–2", "錯誤", "發生咩＋下一步")}${mini("1", "Tooltip", "一句就夠")}</div><p>預算係編輯壓力測試；唔可刪走必要披露或縮細字。</p>`),
    4: specimen("BEFORE / AFTER", `<div class="ct-compare"><div class="ct-before"><span>改前 · 全部塞入 Setup</span><b>連結前讀晒所有說明</b><p>費用、掃碼步驟、QR 超時、Broadcast 風險、技術政策……</p><small>下一步被文字淹沒</small></div><div class="ct-after"><span>改後 · 跟時刻分配</span><b>而家要決定：連唔連？</b><p>已核實費用／授權／後果先直接顯示；掃碼、補救與 Broadcast 護欄各返到發生嗰刻。</p><small>主要行動清楚，知情權仍然保留</small></div></div>`),
    5: specimen("STRUCTURE × CONTENT", `<div class="ct-mini-grid four">${mini("P1", "Wizard", "連結渠道")}${mini("P2", "Settings", "改設定")}${mini("P3", "Automation", "測試／發布")}${mini("P4", "Workspace", "持續工作")}</div><p>結構答「用咩頁」，五時刻答「呢頁幾時講咩」。P1–P4 係結構參考，唔係已完成遷移。</p>`),
    6: specimen("CONTENT REVIEW CARD", `<div class="ct-review-card"><b>每句字都有一條 trace</b><div><span>任務</span><i>→</i><span>時刻</span><i>→</i><span>事實來源</span><i>→</i><span>位置</span><i>→</i><span>下一步</span><i>→</i><span>Owner</span></div><small>事實未核實？標待確認，唔自創費用、狀態或政策。</small></div>`),
  },
};
