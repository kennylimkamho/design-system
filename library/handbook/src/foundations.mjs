import {
  page as p,
  section as s,
  table as t,
  typeRoles,
  layoutRoles,
} from "./model.mjs";
export default [
  p(
    "start",
    "開始使用",
    "新設計師，由這裡開始",
    "先知道正在設計哪一種任務，再選版面、元件與狀態。這是可查閱的工作手冊，不是概念簡報。",
    "start",
    [
      s("第一次使用：五個步驟", [
        "1. 先看『任務優先』：寫出用戶目標、第一步及可驗證結果，再選資料管理、客服工作區、流程編輯、設定或分析模式；再用『內容跟住時刻走』決定每頁何時講甚麼。",
        "2. 選 layout：確認 primary menu、secondary menu、頁面標題與操作位置；不要先逐粒畫按鈕。",
        "3. 套用 foundations：ChatDaddy 藍為主要操作、綠為正面狀態；Standard 52px 為一般列表基準。",
        "4. 查元件頁：同時交付 default、focus、loading、empty、error、permission 等適用狀態，不只一張成功畫面。",
        "5. 用交付 checklist 自查，再把 spec 版本、元件對應與未決問題放入 PR。",
      ]),
      s("如何讀每一頁", [
        "規格表是設計尺寸及決策依據；互動區只使用虛構資料，不會連接客戶、API 或修改 App。",
        "每頁先看本手冊規格；部分章節新增『已抽出嘅真實元件』，可直接讀 import 用法、package 原始碼及精準互動示例。其他 Storybook 舊示例只作參考，唔係設計系統標準。",
        "Version 1（1.0.0）保留為已確認基準；本版 1.4.0-draft.1 重整手冊並加入持久工作循環與五個深度案例，沿用內容時刻規則、App-derived navigation、Inbox filters 及 module icons 對應。新規格仍需 review，runtime packages 仍為 0.1.0；不代表 App 已 rollout。",
      ]),
      s(
        "你已確認的三項方向",
        [],
        t(
          ["決策", "採用方向", "如何使用"],
          [
            [
              "D-01",
              "ChatDaddy module icons + Lucide utilities",
              "模組辨識與一般操作分開；品牌 logo 另管理",
            ],
            [
              "D-02",
              "Blue primary / Green positive accent",
              "不要每個模組換一種主要 CTA 顏色",
            ],
            [
              "D-03",
              "Standard 52px；workspace 可 compact",
              "多行內容可增高；compact 不縮小 touch hit area",
            ],
          ],
        ),
      ),
      s("範圍與邊界", [
        "涵蓋字體、顏色、版面、元件行為、響應式與產品模式。未提供 Figma library；不要把此網站當成已有可安裝 Figma 元件。",
        "Dark mode 與 white-label 沿用既有 runtime，新的完整映射尚待審查。本版視覺示例以 light mode 為準。",
        "舊方向 studio、歷史 audit 與舊 Storybook stories 保留為參考；日常設計以本手冊查規則。工程只透過手冊內標示的 curated links 查 package-backed 實例，其餘示例須重新驗證。",
      ]),
    ],
    ["spec/decisions.json", "spec/adoption.md", "spec/cross-task-design-audit.md", "spec/module-code-extraction.md"],
  ),
  p(
    "principles",
    "開始使用",
    "設計原則與取捨",
    "讓新功能看起來屬於同一個產品，也讓使用者對每一下操作有穩定預期。",
    "principles",
    [
      s(
        "六個工作原則",
        [],
        t(
          ["原則", "具體做法", "應避免"],
          [
            [
              "任務先於裝飾",
              "先確認 primary action 與閱讀順序",
              "用動畫掩蓋不清楚的操作",
            ],
            [
              "相同語意，相同模式",
              "導航、篩選、顯示模式分開",
              "所有選項一律畫成 pill tab",
            ],
            [
              "逐步披露",
              "高頻操作可見，低頻放 overflow",
              "重要動作只能 hover 才找到",
            ],
            [
              "保留上下文",
              "返回時保留 query、filter、scroll",
              "每次看 detail 都重置列表",
            ],
            ["誠實反饋", "等 API 成功才呈現成功", "假進度、假完成、虛構倒數"],
            [
              "具體而非統一一切",
              "Inbox 可高密度，設定頁可留白",
              "把所有頁面變成同一張表格",
            ],
          ],
        ),
      ),
      s("視覺層級", [
        "一頁一個主要任務；header 放主要 CTA，toolbar 放搜尋、篩選及批次操作。",
        "用 24/16/8px 的距離表達群組關係，先減少邊框再考慮加卡片。段落有清楚標題，不用大量全大寫搶眼。",
        "活躍 navigation、選取資料列、成功 status 是三種狀態。即使共享藍／綠色，也必須用位置、文字或形狀區分。",
      ]),
      s("如何提出例外", [
        "若現有規則妨礙任務效率，記錄使用場景、原規則、替代方案、響應式影響及測試證據。",
        "例外應命名為可重用 pattern，例如 workspace.compact；不要用 feature-specific 魔術數字永久分叉。",
      ]),
    ],
    ["spec/README.md"],
  ),
  p(
    "color",
    "視覺基礎",
    "色彩與語意",
    "保留 ChatDaddy 品牌，同時分清 action、selection、status、surface 與資料視覺化。",
    "colors",
    [
      s(
        "主要色彩角色",
        [],
        t(
          ["角色", "值", "使用規則"],
          [
            ["Brand / action", "#0F5BFF", "主要按鈕、link、focus；白色文字"],
            ["Action hover", "#0740FA", "hover feedback；不表示另一種業務狀態"],
            [
              "Selected surface",
              "#E6EEFF / #0A3FB2",
              "选取背景及文字，不只改文字色",
            ],
            ["Brand green", "#07CB6E", "accent；不要直接配細小白字"],
            ["Success", "#036839 on #F1FFF4", "成功文案配 check；正面結果"],
            ["Warning", "#864700 on #FFFCEE", "需留意但未中止；附解決方法"],
            [
              "Danger",
              "#BD2914 on #FFF5F5",
              "錯誤、破壞性動作；不可用於普通 emphasis",
            ],
            [
              "Primary / secondary text",
              "#101827 / #4B5563",
              "主文與次要文；disabled 另有狀態",
            ],
            [
              "Page / raised",
              "#F7F7F7 / #FFFFFF",
              "頁底與浮起內容，不每層都陰影",
            ],
          ],
        ),
      ),
      s("Token 使用層級", [
        "Primitive 描述原始色值，semantic 描述用途，component 描述特定元件角色。設計交付寫 action-bg，不只寫 #0F5BFF。",
        "平台 logo 顏色遵從品牌，不套用 status 顏色；chart series 另定 legend，避免讀者把每條綠線解讀成成功。",
        "亮綠只作 accent；若用於底色，配深色文字。所有新組合需重新量度 contrast，已有通過組合不代表整頁通過。",
      ]),
      s("Dark / white-label 邊界", [
        "本版只批准示例在 light surface 使用。既有 dark tokens 保留，不把 light 字色直接搬到暗底。",
        "White-label 應替換 brand semantic roles，保留 warning／error 語意。標識、focus、disabled 及圖表仍須逐項測試。",
      ]),
    ],
    ["spec/tokens.json", "packages/tokens/src/colors.ts"],
  ),
  p(
    "typography",
    "視覺基礎",
    "字體與排版",
    "從頁面標題到一個時間戳，明確知道字體、字重、字級、行高與使用場合。",
    "typography",
    [
      s("字體家族與實際載入", [
        "Latin UI / heading：Sora，使用 400、500、600、700。此手冊內嵌官方 OFL variable font，離線也能看到真正的拉丁字體。",
        "繁體：優先 PingFang HK／Noto Sans HK；簡體：PingFang SC／Noto Sans SC；Windows 可落到 Microsoft JhengHei／YaHei。字體依語言設定，不把拉丁字體假裝成中文字型。",
        "此離線版不內嵌大型 CJK 字體；中文外觀取決於已安裝 fallback。正式產品需在指定 macOS／Windows／Android／iOS 測試換行。",
        "Code 使用 ui-monospace／SFMono-Regular／Consolas。表格數字先用 Sora 的 tabular-nums，並非所有數字都換 mono。",
      ]),
      s(
        "Type scale · size / line-height（px）",
        [],
        t(["角色", "字級 / 行高", "字重", "使用場合"], typeRoles),
      ),
      s("標題與正文的組合", [
        "每頁一個 h1；視覺字級與 heading 語意分開。卡片標題通常用 h2/h3 的語意，不因尺寸小就用 span。",
        "標題與描述相距 8px；區段標題與內容 16px；段落間 12–16px。長文閱讀寬度 60–75 個 Latin 字元附近，CJK 以實際閱讀感校準。",
        "CJK 不設 blanket negative tracking；English heading 可 -0.015em，正文 0。中文不使用全大寫／過闊 letter spacing 模仿英文 label。",
      ]),
      s("文字壓力測試", [
        "必測中英混排、很長公司名、emoji、帶音標名字、電話、跨年日期、1,234,567.89 及空值。",
        "可視內容不足時先調欄寬或換行；不把全頁字體縮細。省略號只用在可開啟詳情的次要內容，日期及主要身份不能只剩「…」。",
        "手機輸入採 16px；desktop control 14px。200% zoom 不應令主要操作被裁切。",
      ]),
      s("與現有 implementation 的差異", [
        "現有 typography.ts 包含 h1–h6；本手冊以功能角色命名，新增 section 20/28 等對應仍需 adapter review。",
        "舊 Storybook h6 label 與 token 有差異；使用來源 token 核對，不能直接以示例文字作唯一標準。所有新 mapping 要在 theme 與 Storybook 一起測試。",
      ]),
    ],
    [
      "packages/tokens/src/typography.ts",
      "apps/storybook/src/tokens/Typography.stories.tsx",
      "spec/foundations.md",
    ],
  ),
  p(
    "spacing",
    "視覺基礎",
    "間距與密度",
    "用一致的距離表達關聯，不靠隨機 padding 或更多邊框整理內容。",
    "spacing",
    [
      s(
        "4px 基準與允許值",
        [],
        t(
          ["Token / px", "用途", "注意"],
          [
            [
              "2 / 4",
              "glyph 光學調整、緊密 metadata",
              "2px 是小尺度例外，不是 page spacing",
            ],
            ["8", "icon-label、同組 control", "長 label 仍需保留 gap"],
            [
              "12",
              "field helper group、compact 卡片內距",
              "避免每一層都疊 padding",
            ],
            ["16", "相關欄位、手機頁邊距", "手機主要 hit area 不受此值限制"],
            [
              "20 / 24",
              "standard card padding、desktop gutter",
              "一般 section 內部",
            ],
            ["32 / 40", "不同 section 之間", "用空間取代多層 card"],
            [
              "48 / 64",
              "跨任務大區段／品牌頁",
              "工作區不要套 marketing spacing",
            ],
          ],
        ),
      ),
      s("Density 明確選擇", [
        "Standard：single-line row 52px、control 40px；一般 Contacts／Channels／Broadcasts 使用。",
        "Compact：row 40px、control 32px；Inbox 等高頻 workspace 可選。多行 row 依內容增高，不強行裁切。",
        "手機可見 control 建議 44px 以上；至少保留 44px 觸控目標。小 icon 不等於小按鈕。",
      ]),
      s("工程單位不能混用", [
        "Figma／規格以 px 命名。MUI sx 的 spacing 乘數依 theme 決定，不把 16px 寫成 padding:16。",
        "候選基準是 spacing(1)=4px、spacing(1.5)=6px，但現有 App 與 package adapter 需確認。使用明確 token 或 px 避免 4px／8px 混淆。",
      ]),
      s("選擇流程", [
        "先用 standard 完成頁面。若使用者必須同時掃描大量資料，才評估 compact；不要用 compact 補救太多欄位。",
        "密度設定保留為 workspace preference；不重置篩選、排序或選取。",
      ]),
    ],
    ["packages/tokens/src/spacing.ts", "spec/tokens.json"],
  ),
  p(
    "surfaces",
    "視覺基礎",
    "圓角、邊框與層次",
    "用少量、可預測的層次表達內容與浮層，不讓每個區塊都像可點擊卡片。",
    "surfaces",
    [
      s(
        "Shape 與 elevation",
        [],
        t(
          ["角色", "候選規格", "使用"],
          [
            [
              "Control",
              "8px radius / 1px border",
              "input、button；現有 runtime 12px 待遷移",
            ],
            [
              "Card",
              "12px radius / 1px subtle border",
              "內容群；現有 runtime 16px 待遷移",
            ],
            ["Dialog", "16px radius", "短任務浮層"],
            [
              "Pill / avatar",
              "full radius",
              "chip、badge、頭像，不用於每個選單",
            ],
            ["E0", "無陰影", "page、table、靜態區段"],
            ["E1", "小陰影 + border", "popover、dropdown，與底層分離"],
            [
              "E2",
              "明顯但柔和陰影 + scrim",
              "modal；不能靠巨大 z-index 壓過其他問題",
            ],
          ],
        ),
      ),
      s("分隔優先序", [
        "先用空間，其次背景，再用 1px border，最後才 shadow。避免 card 包 card 包 card。",
        "Hover lift 只給真正可點擊的卡片；純資訊卡不應在 hover 像按鈕彈起。",
        "Focus ring 用 2px blue outline + 2px offset，與 selected border 分開；不要用 overflow:hidden 裁掉焦點。",
      ]),
      s("Layer stack", [
        "Page content → sticky toolbar → navigation → popover → modal scrim + dialog → critical notification。必須共用 stack 管理。",
        "Portal 必須位於正確 modal context，不能令 dropdown 選項出現在 scrim 下面。",
        "Toast 不搶 focus；modal 同一時間只讓一個擁有焦點。關閉後返回有效 invoker。",
      ]),
    ],
    [
      "packages/tokens/src/radius.ts",
      "packages/tokens/src/shadows.ts",
      "packages/tokens/src/zIndex.ts",
    ],
  ),
  p(
    "icons",
    "視覺基礎",
    "Icons 與品牌資產",
    "模組有 ChatDaddy 個性；一般操作使用清晰、熟悉的共通語言。",
    "icons",
    [
      s(
        "三種身份，加一種操作",
        ["詳細平台矩陣、WhatsApp 模式及資產來源見下一章『Logo 與 Icon 分層』。本版新提案不代表 runtime 已遷移。"],
        t(
          ["集合", "用途", "規範"],
          [
            ["App icons", "產品與整合 App 身份", "原裝品牌 mark；32 / 40 / 48px slot"],
            ["Channel icons", "對話來源平台與連接模式", "平台 logo／獨立審核的模式圖；名稱與運行狀態另列"],
            [
              "Module icons",
              "Inbox / Contacts / Automation 等領域",
              "12 個 authored SVG；24px grid、2.25 stroke、blue accent（本版提案）",
            ],
            [
              "Utility icons",
              "search / add / close / filter / delete",
              "Lucide subset；1.75 stroke、單色；不要用 emoji 代替",
            ],
          ],
        ),
      ),
      s("尺寸與搭配", [
        "Inline 16px、control 20px、module 24px；不要隨每個 feature 任意選 17/19/23px。",
        "Icon-only action 必須有 accessible name，hover 及 focus 可見 tooltip；touch 有文字或清晰 context。",
        "同一個意思固定一個 glyph。刪除用 trash、關閉用 x、移除 filter 用 x + label；不能用 x 做不可逆刪除。",
      ]),
      s("狀態與動畫", [
        "Inactive 以中性色；current module 加 tint、文字與 indicator，不單靠變藍。",
        "Icon gallery 的 module 與 utility 圖示在 hover / keyboard focus 輕搖一次（約 420ms、最大約 3°／1px）；不使用 fade、不持續晃動。正式 App 是否採用要按可點擊語意與效能驗證，不能令純資訊看似可按。",
        "Utility 不常駐旋轉。Pending spinner 只跟真實 pending；reduced-motion 改為靜態狀態，唔失去 selected 或 feedback。",
        "RTL 可鏡像方向性箭頭，不鏡像品牌、數字或所有 glyph。",
      ]),
      s("下載與使用", [
        "下方可搜尋本版實際 SVG、複製 SVG 或下載單個檔案。這些是設計資產，不代表 runtime AppIcon 已替換。",
        "本版確認方向：Integration 採 Connected apps（兩個 App 方塊與定向連接）；AI 採 Brain（腦葉與中央神經軸）；CRM 採 Opportunity card（客戶卡與跟進標記）。三者是主導航 module，不是第三方 App／Channel logo。",
        "CRM 的卡片圖形表達客戶與跟進結果，不以 Kanban 欄位代表整個 CRM；Integration 的兩個節點要與 Channels 對話來源、Automation 流程節點保持語意區分。",
        "Utility notices 保留在 repo 及 HTML 中。新品牌資產加入時記錄來源、版本、授權與 fallback。",
      ]),
    ],
    [
      "spec/icon-map.json",
      "spec/icons.md",
      "spec/module-icon-decisions.json",
      "assets/icons/modules/source.json",
      "packages/icons/src/AppIcon.tsx",
      "packages/icons/src/PlatformIcon.tsx",
    ],
  ),
  p(
    "content",
    "視覺基礎",
    "文案、語言與資料格式",
    "讓文字幫助完成任務；中英混排、日期、空值都有固定處理方式。",
    "content",
    [
      s(
        "語氣與命名",
        ["本頁定義語氣、翻譯與資料格式；每段文案何時出現、要放哪一層，先看『內容跟住時刻走』章節及 spec/content-timing.md。"],
        t(
          ["情境", "建議", "避免"],
          [
            ["CTA", "建立聯絡人／儲存變更", "確定／操作／Click here"],
            [
              "Error",
              "未能儲存。請重試；你的輸入仍保留。",
              "Something went wrong（無出路）",
            ],
            [
              "Empty",
              "還沒有聯絡人。新增或匯入你的第一位聯絡人。",
              "No data（無情境）",
            ],
            [
              "Permission",
              "你沒有編輯權限。請聯絡管理員。",
              "灰色按鈕但完全沒有原因",
            ],
            ["Pending", "正在匯入 40 / 120 筆", "已完成（API 還沒返回）"],
          ],
        ),
      ),
      s("繁簡英與 layout", [
        "產品名、API identifiers 不強制翻譯；一般操作使用同一份 glossary。不要將 translation key 顯示給使用者。",
        "English button 用 sentence case；中文不加 tracking。為長翻譯保留至少可換行的空間，不靠把 label 縮到 10px。",
        "姓名容許 Unicode；前端與後端驗證要一致。不要以 ASCII-only 正則拒絕中文姓名。",
      ]),
      s("數值與時間", [
        "完整日期示例：2026年9月24日 16:51（香港時間）。頁面首次或欄位 header 交代時區，跨時區產品依 user/account 設定。",
        "相對時間可作補充；關鍵記錄有完整日期，不能只有「3m」及 hover tooltip。",
        "貨幣附 currency code；0 是真實數字，— 是未提供；loading、unknown、無權限不可共用同一空白。",
        "百分比小數位按任務統一；不要混用 80%、80.0%、0.8 而無說明。",
      ]),
    ],
    ["spec/accessibility-content.md", "spec/data-display.md"],
  ),
  p(
    "layout",
    "版面與導航",
    "App shell 與頁面骨架",
    "設計新頁面之前先套骨架，確保 header、toolbar、內容和操作在同一套座標上。",
    "layout",
    [
      s("主要尺寸與角色", [], t(["區域", "規格", "用途"], layoutRoles)),
      s("四種內容布局", [
        "Data page：PageHeader → saved views / filters → toolbar → table → pagination；內容寬度填滿工作區。",
        "Settings：section nav + 640–720px form；related fields 分組，save bar 靠近任務結束位置。",
        "Workspace：list → conversation/editor → optional detail inspector；各 panel 擁有明確 scroll owner。",
        "Dashboard：summary → trends → drill-down；同級 cards 對齊，不把 KPI 混進 navigation。",
      ]),
      s("高度、捲動與 fixed 區域", [
        "一般資料頁以頁面或 table viewport 為主要 scroll，不同一區塞兩個互相搶滾輪的容器。",
        "Inbox composer 固定在 conversation 區底部；message history 自己捲動。電話鍵盤與 safe-area 出現時仍能輸入。",
        "Sticky toolbar 不蓋住 anchor、focus 或 table header；scroll-margin-top 跟 header 高度一致。",
      ]),
      s("設計交付必畫", [
        "正常內容、極長標題、沒有 secondary menu、secondary menu 展開／收起、右側 detail panel 開啟／關閉。",
        "寬度不足先移除非必要 inspector，然後改 list/detail navigation；不是把三個欄壓成極窄。",
      ]),
    ],
    [
      "packages/components/src/layout/AppShell.tsx",
      "packages/components/src/layout/PageWrapper.tsx",
      "spec/navigation.md",
    ],
  ),
  p(
    "navigation",
    "版面與導航",
    "Menu、secondary menu 與 tabs",
    "每一層都回答不同問題；不要因為看起來相似就用同一種控件。",
    "navigation",
    [
      s(
        "選用決策表",
        [],
        t(
          ["問題", "應用模式", "ChatDaddy 例子"],
          [
            [
              "切換工作領域？",
              "Primary navigation（route links）",
              "Inbox / Contacts / Automation",
            ],
            [
              "領域內另一個長期功能？",
              "Secondary navigation（route links）",
              "Flows / Keyword replies / Run history",
            ],
            ["同一物件另一個內容面？", "Tabs", "Contact：Overview / Activity"],
            ["同一資料不同展示？", "Segmented control", "List / Board"],
            [
              "縮窄同一資料集？",
              "Filters / saved views",
              "Unread / Mine / date range",
            ],
            ["執行一次指令？", "Action menu", "Duplicate / Export / Archive"],
          ],
        ),
      ),
      s("互動契約", [
        "Route links 支援開新分頁、deep link、refresh、Back；不能只改 active 外觀而頁面內容不變。",
        "Primary current 有 indicator、label、tint；secondary current 用字重與輕背景色差，避免大片深藍搶過內容；tabs 用 underline。三層不要都做一排 pills。Focus ring 仍須清楚可見。",
        "Collapsed rail 提供 tooltip；hover 展開可用，但 focus / touch 亦可開，且 panel 內有焦點時不收起。",
      ]),
      s("Tab keyboard 與狀態", [
        "Tab 進入 tablist 時只落在 active tab；左右鍵移動，Home/End 到兩端。內容即時可顯示才自動 activation。",
        "慢速載入的 panel 用 manual activation：箭頭只移焦點，Enter/Space 才載入；切換時不要丟失表單草稿。",
        "真 tabs 使用 tablist/tab/tabpanel 關係；一般 route navigation 不加 role=menubar 假扮 application menu。",
      ]),
      s("何時不需要 secondary menu", [
        "模組只有一個任務時，直接顯示 page；不要造一個只有一項的 second bar。",
        "跨模組通知、team switcher 屬全域 shell；object detail 操作屬頁面，不混進 primary rail。",
        "目前 primary category 重組未獲最終確認。歷史頁面設想只作研究，不據此即時搬 route 或改 sidebar taxonomy。",
      ]),
    ],
    ["spec/navigation.md", "packages/components/src/layout/NavigationRailShell.tsx", "packages/components/src/layout/WorkspaceNavigation.tsx", "apps/storybook/src/molecules/Tabs.stories.tsx"],
  ),
  p(
    "responsive",
    "版面與導航",
    "Responsive 與縮放",
    "以任務所需空間決定 reflow；手機不是把 desktop 等比例縮細。",
    "responsive",
    [
      s(
        "候選切換策略",
        [],
        t(
          ["可用寬度", "版面行為", "必保留"],
          [
            [
              "≥1280px",
              "rail + secondary + content；detail 依空間",
              "主要任務與內容寬度",
            ],
            [
              "900–1279px",
              "primary 可 collapsed；inspector 先收起",
              "當前 module label、顯式打開 inspector",
            ],
            [
              "600–899px",
              "secondary disclosure；list/detail 可分頁",
              "Back restores query / scroll",
            ],
            [
              "<600px",
              "primary drawer；單欄；16px gutters",
              "44px targets、16px input、safe-area",
            ],
            [
              "200% zoom / narrow container",
              "依實際剩餘空間套相同規則",
              "focus、錯誤、儲存操作可到達",
            ],
          ],
        ),
      ),
      s("Table 兩種合法處理", [
        "少量欄位且以查看為主：identity + status + next action 變 priority cards，其他資訊進 detail。",
        "需要橫向比較多欄：保留 table 並讓有名稱的 region 橫向捲動；外頁不能意外 overflow。",
        "不要用 body overflow-x:hidden 隱藏布局錯誤；也不要手機上隱藏 export／filter 而完全沒有替代入口。",
      ]),
      s("浮層與表單", [
        "Desktop drawer 可放 detail；手機改全頁或近全屏 dialog，有清楚返回。不可同时保留三欄。",
        "表單 default 單欄；電話 country selector、error helper、password toggle 各有可用空間。",
        "手機 soft keyboard 不遮住輸入與送出；不要用固定 100vh 忽略 dynamic viewport。",
      ]),
      s("驗收矩陣", [
        "至少驗收 390、768、850、1280、1440px，以及桌面 200% zoom。這些是測試尺寸，不是硬編碼裝置分類。",
        "此手冊的可縮放 schematic 只是 layout 示意，不能取代真實 viewport、touch、keyboard 與 screen-reader 測試。",
      ]),
    ],
    ["spec/navigation.md", "spec/adoption.md"],
  ),
];
