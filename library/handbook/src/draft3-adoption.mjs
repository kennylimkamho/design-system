import { page, section as s, table as t } from './model.mjs';

const sources = ['handbook/src/draft3-adoption.mjs', 'spec/motion.md', 'spec/feature-workspaces.md'];
const make = (id, group, title, summary, sections) => page(id, group, title, summary, id, sections, sources);
export const adoptionPages = [
  make('cover', '開場', '開場 · 呢份手冊嘅旅程', '由產品判斷到實際元件，保存 Kenny Lim 嘅設計方向，亦保存每次改版嘅證據與界線。', [
    s('唔只係統一畫面', ['呢份手冊連結基礎元素、設計原則、核心模組、完整工作流程、案例、動效及 AI Agent 使用方式。先了解用戶要完成嘅事，再揀版面、內容及元件。', 'Kenny Lim 係呢份 Design System 嘅 founder；Founder’s Note 將產品判斷整理成可理解、可沿用、可持續演進嘅設計方向。']),
    s('兩種閱讀模式', ['精簡模式先睇示例與主要規則；詳細模式展開規則及来源。兩個模式用同一套內容，唔會刪走費用、風險或不可還原後果。', '搜尋涵蓋所有章節、表格、案例與來源；⌘ / Ctrl K 開啟搜尋，方向鍵揀結果，Enter 跳入章節。']),
    s('由規格到採用', ['示例、Design System 提案同 App 已有實作係三種唔同狀態。每次 rollout 要核對來源、權限、錯誤與真實資料。', '今次只改手冊。舊章節、互動示例同既有 hash 繼續有效；版本、固定香港時間同 Git 記錄一齊保存。']),
  ]),
  make('how-to-read', '開場', '點讀呢份手冊', '新設計師由任務讀起，工程師由來源核對，AI Agent 由規則狀態與索引開始。', [
    s('第一次嚟', ['先讀 Founder’s Note 同新設計師起步，再睇基礎元素：顏色、字體、版面、元件、logo 與 icon。唔使一次背晒全套規格。', '揀一個核心模組同相應案例，畫完整正常／失敗流程；對照規則再做元件選擇。']),
    s('改現有功能', ['由用戶當下工作與實際 App 來源開始。清楚分開已核實現況、來源重構同改後提案，再用案例庫記錄取捨。', '涉及文字時讀內容時刻；涉及複雜流程時讀 P1–P4；涉及狀態轉換時讀 Motion Lab。']),
    s('查規則與交付', ['用搜尋或規則代碼索引定位章節。規則代碼係章節級指引，唔係已執行嘅自動合規檢查。', '交付前核對 mobile、鍵盤、reduced motion、真實資料與錯誤補救。詳細模式方便 review，但唔代替測試。']),
  ]),
  make('content-strategy', 'Design Principles', '內容策略 · 時刻 × 頁面類型', '頁面結構同內容時刻係兩個維度；每種結構都可能需要決定、行動、補救、使用與參考資訊。', [
    s('五個時刻，四種結構', ['以下係設計提示，唔係每頁都要塞滿二十格。先問用戶此刻需要乜，再決定直接顯示或按需披露。'], t(['時刻', 'P1 Wizard', 'P2 Settings', 'P3 Automation', 'P4 Workspace'], [
      ['決定', '費用、授權、後果', '作用範圍、影響', '觸發、退出與風險', '批次範圍與權限'],
      ['行動', '步驟、驗證、預覽', '儲存、取消、重設', '編輯、測試、發佈', '搜尋、篩選、處理'],
      ['補救', '錯誤與重試', '還原與衝突', '失敗、停止、重試', '失敗項目與返回'],
      ['使用', '連接後狀態', '同步與權限', '限速與執行狀態', '待辦與完成狀態'],
      ['參考', '完整政策', '設定字典', '節點字典', '欄位與指標定義'],
    ])),
    s('內容預算係檢查點', ['Wizard：標題一句、說明一句、最多三個要點、一個主要動作。警告最多三點；錯誤用一至兩句講發生咩同下一步；tooltip 一句。', '草稿提出更短嘅字數預算可作編輯目標，唔應為符合字數而隱藏權利、费用或安全資訊。超額先重新分類時刻，唔係盲目刪字。']),
    s('QR 連接示例', ['決定之前直接顯示費用、權限與不可逆影響；掃碼步驟緊貼 QR；超時發生先顯示重試；發送風險喺 Broadcast 決定位置作護欄。', '唔用固定 0–30 秒當真實流程時長。進度同成功跟驗證結果；未知服務狀態保持未知。']),
  ]),
  make('p-class-patterns', 'Design Principles', 'P1–P4 · 用工作揀結構', 'Wizard、Settings、Automation object 同 Workspace 服務不同工作，唔係用同一種畫面套晒所有功能。', [
    s('四種工作結構', [], t(['類型', '適用工作', '必要界線'], [
      ['P1 Wizard', '首次 QR／OAuth 連接與必要授權', '清楚下一步、可返回、保留輸入；成功需驗證'],
      ['P2 Settings', '改帳戶或團隊設定', '顯示作用範圍、dirty state、儲存與取消'],
      ['P3 Automation object', '定義自動運行嘅流程', '草稿、測試、發佈、停止與失敗紀錄'],
      ['P4 Workspace', '每日搜尋、處理、檢視工作', '列表上下文、詳情、篩選與批次範圍'],
    ])),
    s('點揀', ['首先係咪一次性 setup？係就考慮 P1。係咪設定已有能力？考慮 P2。會自行持續執行？考慮 P3。每日反覆處理資料？考慮 P4。', '同一模組可以有多種結構，例如 Broadcast 設定、執行與回顧，唔好將整個循環縮成一個發送表單。']),
    s('唔將版面變成死規矩', ['三步或五個欄位只係減少負擔嘅設計提示，唔係授權流程嘅硬上限。必要決定不能省略。', 'Workspace 可有列表與詳情，但手機要按任務順序切換；唔要求每個裝置都同時顯示三欄。']),
  ]),
  make('motion-strategy', '業務致勝與 Flow Design', 'Motion strategy · 回應、轉場、表現', '動畫解釋因果與状态，唔阻住工作；三層動效共用既有規格同 reduced-motion 合約。', [
    s('三層用途', [], t(['層', '用途', '既有規格例子'], [['回應', '按壓、選取、focus', '按壓 100–140ms；focus 180ms'], ['轉場', '揭露、切換、dialog', 'accordion 220ms；dialog 200ms'], ['表現', '一次狀態回饋或示範', '已核實成功 check 320ms；icon shake 420ms']])),
    s('狀態先於動畫', ['disabled、權限、aria 狀態同輸入回應即時更新。pending 只喺真實工作未完成時存在；唔用計時器冒充成功。', '草稿嘅時間區間唔取代現有 tokens。實作引用 spec/motion.md，同時顯示文字狀態、來源及可操作下一步。']),
    s('降動效同中斷', ['系統 reduced motion 同手冊開關都可減少動作；焦點、訊息與功能保留。快撳多次要取消／替換回饋，唔排隊播放。', '流程轉場唔自动捲動；大型 canvas、虛擬列表先作性能驗證，再決定動效範圍。']),
  ]),
  make('quote-archive', '檔案庫', '原話與設計方向記錄', '保留設計意圖，亦分清楚用戶原話、編輯摘要同尚待來源核實嘅草稿句子。', [
    s('已提供嘅設計原話', ['「資訊要跟住『時刻』走，唔係跟住『功能』走。」— Kenny Lim 提供嘅內容時刻方向。', '「UI 係可以 upgrade 嘅，但底層嘅邏輯應該係一直喺度。」— Kenny Lim 討論長期工作流程。記錄日期係本次整理日期，唔推測原話講出時間。']),
    s('Draft-3 文句 · 待核實來源', ['草稿文句：「唔好淨係統一畫面，要保存產品判斷。」「用戶嘅當下工作先係版面嘅理由。」「唔好用顏色扮成功；每一次『已完成』都要有證據。」', '呢啲係用戶提供 HTML 中嘅方向文句，未有錄音或逐字記錄依據。唔以草稿附帶嘅日期當成已核實會議歷史。']),
    s('點維護', ['新增原話要保留來源、原文同收錄版本；編輯摘要明確標「摘要」，唔加引號扮成逐字紀錄。', '規則更新可連回原話，但驗收依現有規格與證據，唔單靠一句金句。']),
  ]),
  make('version-history', '檔案庫', '版本記錄 · 可核對嘅演進', '版本用 Git 記錄核對，固定香港時間保存每次改動；唔把未核實年份寫成已發布歷史。', [
    s('已核對嘅版本記錄', [], t(['香港時間', '版本／變更', 'Git 記錄'], [['2026-09-25 13:21:32', 'Design System 初始 PR', 'aeaf68d · PR #1'], ['2026-09-25 14:55:19', 'Integration、AI、CRM 選定 icons', 'b41d2a3 · PR #3'], ['2026-09-30 01:02:18', '內容時刻加入手冊', '4a5d9f8'], ['2026-09-30 12:43:12', '1.4 draft.1 · 工作循環與案例庫', '4b54790 · PR #15'], ['2026-09-30 13:06:01', '1.4 draft.2 · 閱讀層次與搜尋', 'f77c8d9 · PR #16'], ['2026-09-30 13:31:30', '1.4 draft.3 · Broadcast learnings', '3f98f6c']])),
    s('本次採納', ['1.4.0-draft.4 採納提供嘅 draft-3 閱讀方向：開場、兩種模式、內容矩陣、P1–P4、動效策略、原話庫、版本記錄、規則索引及候選原則。', '保留全部既有章節與規則，修復連結、索引及互動。唔以空 iframe 當作可用提案，亦唔把通用示意 SVG 當作真實 App 截圖。']),
    s('版本治理', ['舊 HTML snapshot 保持 immutable；現行版由 generator 產生，HTML、Markdown 同 machine-readable index 一齊更新。', 'draft 表示規格仍可演進，唔代表 App rollout 已完成。PR / merge / deployment 狀態由 GitHub 核對，唔預先填已成功。']),
  ]),
  make('rules-index', '檔案庫', '規則代碼索引', '用穩定代碼定位規則來源，方便 review 同 AI Agent 引用；完整內容仍以對應章節為準。', [
    s('原則與工作流程', ['下方代碼連到已存在嘅規則章節，搜尋亦可以直接輸入代碼。代碼唔係新一套互相矛盾嘅規範。', '先睇作用範圍與例外，再引用規則。未驗證嘅候選原則不會出現在規範代碼表內。']),
    s('如何引用', ['Review 可以寫「SD-1：預設必須安全、有上下文而且可改」，然後連到 Smart defaults。唔用「大多數人都揀」取代權限與安全判斷。', 'AI Agent 要同時帶章節、來源路徑、版本同狀態；只引用代碼唔足以證明實作符合規格。']),
    s('索引維護', ['代碼有機器可讀版本：handbook/agent-index.json 中 ruleCodes。增刪代碼時測試目標存在，舊代碼要保留 alias 或明確標停用。', '規則與實際元件仍然分開：規格合併不等於 App 採用。每次 App rollout 另外收集證據與測試結果。']),
  ]),
  make('candidates', '檔案庫', '候選原則 · 待驗證', '保存值得探索嘅方向，但唔將假設、任意門檻或未實作能力寫成正式產品承諾。', [
    s('五個探索方向', [], t(['候選', '驗證問題', '界線'], [['AI 來源標示', '可否解釋資料來源及不確定性？', '來源必須真實，唔造 provenance'], ['Autosave + 確認', '哪些欄位可自動儲存？', '不可逆或對外發送另確認'], ['重試與限流', '服務／安全是否真的要求冷卻？', '唔任意三次失敗就鎖 30 秒'], ['Undo window', '後端能否真正取消執行？', '能力未提供不能承諾還原'], ['認知負擔', '使用者能否辨識下一步？', '四項係提示，唔係通用硬上限']])),
    s('從假設到規範', ['先選一個真實用戶工作同驗收方法，再做小規模試驗；記錄錯誤、完成結果與例外，唔只看點擊數。', '證據支持先提升成規範，保留來源同決策日期。候選內容不應被 AI Agent 當成預設必須實作。']),
    s('不宣稱成效', ['呢頁全部係待驗證設計提案，未改 App、未做實驗，亦未證明提升 conversion 或減少錯誤。', '可移除、修改或合併候選方向。既有安全、知情權同 accessibility 合約優先。']),
  ]),
];
adoptionPages.find((p) => p.id === 'candidates').status = 'proposal';

export const ruleCodes = [
  ['SD-1', 'smart-defaults', '安全、有上下文而且可改嘅預設'], ['GG-1', 'goal-gradient', '真實進度與下一步'],
  ['RC-1', 'reciprocity', '先體驗價值'], ['OWN-1', 'ownership', '成果可見、可命名、可恢復'],
  ['LA-1', 'loss-aversion', '不可逆損失先確認'], ['CT-1', 'contrast', '有意義嘅對比'],
  ['CPR-1', 'compression', '壓縮但不隱藏必要資訊'], ['VP-1', 'visual-path', '視覺順序跟任務'],
  ['LF-1', 'logical-flow', '清晰因果與返回'], ['TF-1', 'task-first', '任務優先'],
  ['LSR-1', 'live-state-concerns', '未知不可扮零或成功'], ['DJ-1', 'durable-jobs', '完整持久工作循環'],
  ...['DECIDE', 'ACT', 'RECOVER', 'USE', 'REFERENCE'].map((moment) => [`CT-MOMENT-${moment}`, 'content-timing', `內容時刻 · ${moment}`]),
  ['MOT-1', 'motion', '動效服務狀態與操作'], ['MOT-2', 'motion-recipes', '可中斷、可降動效嘅 recipes'],
  ['CD-ADOPT-1', 'implementation', '來源核對再採用'], ['CD-ADOPT-4', 'handoff', '交付與驗收'],
  ['CD-ADOPT-5', 'ai-agent-guide', 'AI Agent 先核對規則狀態'],
].map(([code, chapter, description]) => ({code, chapter, description, anchor: chapter, status: 'draft-specification'}));

export function adoptionDemos(esc) {
  const links = (items) => `<ol class="reading-route">${items.map(([id, label]) => `<li><a href="#${id}">${esc(label)} →</a></li>`).join('')}</ol>`;
  const routes = [['founder-note', 'Founder’s Note'], ['start', '新設計師由呢度開始'], ['color', '基礎元素'], ['principles', 'Design Principles'], ['content-timing', '內容跟住時刻走'], ['case-library', '案例庫'], ['motion-lab', 'Motion Lab'], ['ai-agent-guide', 'AI Agent 與治理']];
  const related = {
    'content-strategy': [['content-timing', '互動示例：五個時刻'], ['channels', '渠道與 Broadcast 規格']],
    'p-class-patterns': [['activation-journey', 'P1：連接到首次價值'], ['settings', 'P2：設定'], ['automation', 'P3：自動化'], ['inbox', 'P4：工作區']],
    'motion-strategy': [['motion', '時間與用途'], ['motion-recipes', '互動 recipes'], ['motion-lab', '動效實驗室']],
    'quote-archive': [['founder-note', 'Founder’s Note'], ['durable-jobs', '20 年都成立嘅工作循環']],
    'version-history': [['handoff', '版本治理'], ['implementation', '工程採用']],
    candidates: [['principles', '現行原則'], ['case-library', '用案例驗證假設']],
  };
  const out = Object.fromEntries(adoptionPages.map((p) => [p.id, `<div class="adoption-intro">${links(p.id === 'cover' || p.id === 'how-to-read' ? routes : related[p.id] || [['rules-index', '規則索引']])}</div>`]));
  out.cover = `<div class="cover-grid"><div><h2>產品判斷</h2><p>先問用戶要完成咩，再揀 UI。</p><a href="#founder-note">Kenny Lim 嘅設計方向 →</a></div><div><h2>兩種讀法</h2><p>精簡先理解；詳細核對規則與來源。</p><a href="#how-to-read">開始閱讀 →</a></div><div><h2>證據與演進</h2><p>保留決策、案例、狀態與版本。</p><a href="#version-history">版本記錄 →</a></div></div>`;
  out['rules-index'] = `<ul class="rule-code-list">${ruleCodes.map((r) => `<li id="rules-index--${r.code.toLowerCase()}" tabindex="-1"><a href="#${r.anchor}"><code>${r.code}</code><span>${esc(r.description)}</span></a></li>`).join('')}</ul>`;
  return out;
}
