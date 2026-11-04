import { page as p, section as s, table as t } from "./model.mjs";
export default [
  p(
    "buttons",
    "元件",
    "Buttons 與 icon buttons",
    "按鈕執行動作；link 前往目的地。層級由任務重要性決定，而不是用不同顏色裝飾。",
    "buttons",
    [
      s(
        "變體與選用",
        [],
        t(
          ["變體", "使用", "不使用"],
          [
            [
              "Primary / filled blue",
              "一個任務的主要完成動作：儲存、建立",
              "同一 toolbar 每個 action 都 primary",
            ],
            [
              "Secondary / outline",
              "次要操作、取消、匯出",
              "用來表示 selected 狀態",
            ],
            [
              "Tertiary / text",
              "低頻或低強度操作、編輯",
              "沒有背景仍要有足夠 target",
            ],
            ["Danger", "不可逆刪除，搭配具體對象", "普通取消或返回"],
            [
              "Icon button",
              "熟悉、頻繁、空間有限的動作",
              "新功能或含糊的 icon-only CTA",
            ],
          ],
        ),
      ),
      s(
        "尺寸與結構",
        [],
        t(
          ["項目", "Standard", "Compact / narrow"],
          [
            ["高度", "40px", "32px desktop；touch target ≥44px"],
            ["文字", "14/22, 500", "手機仍清晰；不可縮細換取空間"],
            ["左右 padding", "16px", "12px"],
            ["Icon / gap", "20px / 8px", "16px / 8px"],
            ["Radius", "8px candidate", "同組一致"],
          ],
        ),
      ),
      s("所有狀態", [
        "Default：文字是具體動詞；hover：背景加深；pressed：短暫 scale；focus-visible：獨立 outline，不能只等 hover。",
        "Disabled：native disabled + 附近原因，不靠 hover 才解釋。若需保留可聚焦說明，可用 aria-disabled 並阻止 action，不能只改外觀。",
        "Pending：保持寬度，防止重複提交，spinner 伴隨「正在儲存」。完成只在真實成功後；失敗保留輸入及 retry。",
        "Destructive：清楚列明影響範圍；不可逆／批次動作走 confirmation。取消不是 danger。",
      ]),
      s("驗收與實作", [
        "Enter / Space 可啟動；非提交按鈕明確 type=button；disabled 不會送出事件。",
        "本庫主要沿用 MUI Button，並非另有 @chatdaddy/components Button export。先改 theme／variant，再同步 Storybook，勿自建第三套。",
      ]),
    ],
    [
      "apps/storybook/src/atoms/Button.stories.tsx",
      "packages/theme/src/index.ts",
    ],
  ),
  p(
    "fields",
    "元件",
    "Text fields 與 validation",
    "label、輸入、helper、error 是一個完整元件，不是孤立的輸入框。",
    "fields",
    [
      s(
        "Anatomy 與規格",
        [],
        t(
          ["區域", "規格", "行為"],
          [
            [
              "Label",
              "14/22, 500；距 input 8px",
              "持續可見，對應 for/id；placeholder 不能代替",
            ],
            [
              "Input",
              "40px high、12px horizontal padding、8px radius",
              "keyboard type / autocomplete 依語意",
            ],
            [
              "Helper / error",
              "12/18 或13/20；距 input 4px",
              "佔用自己的行，不擠窄 input",
            ],
            [
              "Required",
              "表單先交代必填規則",
              "不能只用紅色星號無 accessible text",
            ],
            ["Textarea", "至少 3 行；可垂直調整", "長內容不使用單行輸入"],
          ],
        ),
      ),
      s("狀態矩陣", [
        "Empty、filled、hover、focus、invalid、disabled、read-only 各有示例。Read-only 保留可選取文字；disabled 不表示沒有資料。",
        "Error 用文字 + icon / border；aria-invalid=true，helper/error 經 aria-describedby 連接。",
        "初次輸入前不立刻呈紅色；通常 blur 或 submit 驗證。使用者修正後更新，但避免每個按鍵都打斷。",
      ]),
      s("表單層級", [
        "一欄為預設；兩欄只用於有關聯的短欄位，例如 first/last name 且適用語言。姓名不要強拆所有文化。",
        "Submit 失敗焦點移到第一個錯誤或 linked summary；保留輸入值。Server validation message 顯示在適合位置。",
        "本地示例只檢查 required，不代表後端 field contract；不要在 DS 裡重新定義密碼安全或帳戶存在性。",
      ]),
    ],
    [
      "apps/storybook/src/molecules/FormField.stories.tsx",
      "spec/components.md",
    ],
  ),
  p(
    "selection",
    "元件",
    "Checkbox、radio 與 switch",
    "讓使用者知道是選取多個項目、挑一個選項，還是立即開關設定。",
    "selection",
    [
      s(
        "選用規則",
        [],
        t(
          ["元件", "使用", "例子"],
          [
            ["Checkbox", "0–多個獨立項目", "選取聯絡人、批次 tag"],
            ["Radio", "互斥選項，通常等提交才套用", "匯出範圍、寄送時機"],
            ["Switch", "立即生效的二元設定", "通知開／關"],
            ["Segmented radio", "同一內容的表示方式", "List / Board；不是導航"],
          ],
        ),
      ),
      s("尺寸與標籤", [
        "Checkbox/radio glyph 18–20px；整行 label 與44px target 可點擊；文字與 control 相距8px。",
        "Switch track 建議36×20px，thumb16px；文字描述設定本身，例如「接收通知」，不要只寫「開」。",
        "選項群組用 fieldset + legend；狀態用 checked/aria-checked 表達，不只變色。",
      ]),
      s("特殊狀態與提交", [
        "Select-all 有 unchecked／checked／indeterminate；只作用目前宣告範圍。部分選取不應顯示全選。",
        "Switch pending 不能假裝已成功。可保守等待或 optimistic rollback，但失敗必須恢復真實值及顯示原因。",
        "Disabled 原因可讀；required consent 不預先勾選。Radio 支援箭頭鍵，switch 可用 Space。",
      ]),
    ],
    ["apps/storybook/src/atoms/Switch.stories.tsx", "spec/data-display.md"],
  ),
  p(
    "selectors",
    "元件",
    "Select、搜尋與多選",
    "少量固定選項用簡單 select；人員、tag、channel 等資料集合用可搜尋 selector。",
    "selectors",
    [
      s(
        "Pattern decision",
        [],
        t(
          ["情況", "模式", "資料契約"],
          [
            [
              "≤7 個穩定選项",
              "Native select 或 radio",
              "無需每次開 selector 都 search",
            ],
            [
              "大量資料或長名字",
              "Searchable combobox / popover",
              "query、loading、no results、error",
            ],
            [
              "選多個 tag / assignee",
              "Multi-select + selected chips",
              "clear / remove 不影響其他條件",
            ],
            ["有層級的分類", "分組列表 / disclosure", "不把群組标题當可選資料"],
          ],
        ),
      ),
      s("面板結構", [
        "Trigger 顯示目前值或明確 placeholder。面板為 search → selected/available groups → option list → 可選的 apply footer。",
        "Menu 寬度至少容納 trigger 與主要名稱；長列表有明確 scroll viewport。固定 helper 不遮住最後選項。",
        "每個選項顯示主要名稱，avatar/icon 是辅助；同名人員附第二身份欄位，不依顏色辨人。",
      ]),
      s("狀態与 keyboard", [
        "Open 時將焦點放 query 或目前 option；Escape 關閉並回到 trigger。Arrow keys 選项，Enter 選取；不能困住 Tab。",
        "Loading 不顯示「沒有結果」；empty dataset 與 no-match 分開。API 失敗保留 query 並給 retry。",
        "Popular tags 只在後端有可靠 usage/count 定義時顯示；不要把字母前幾個 tag 假裝成熱門。",
        "多選移除 chip 後焦點保持合理位置；清除全部與移除一個是不同 action。",
      ]),
    ],
    [
      "packages/components/src/selectors/SelectorPopover.tsx",
      "packages/components/src/selectors/TagSelectorDropdown.tsx",
      "packages/components/src/selectors/TeamMemberSelector.tsx",
      "packages/components/src/selectors/ChannelSelector.tsx",
    ],
  ),
  p(
    "tables",
    "元件",
    "Data table 與列表",
    "一張可用的表格要讓人辨認資料、比較欄位、控制範圍，而不只是把資料放進格子。",
    "tables",
    [
      s("固定 anatomy", [
        "PageHeader（名稱／可信 total／primary action）→ query + filters → toolbar → selection bar → column header → data → pagination。",
        "欄位優先序：selection → identity → key attributes → status/date → row actions。Identity 可開 detail；內層按鈕不能冒泡開另一個頁面。",
      ]),
      s(
        "欄位與對齊",
        [],
        t(
          ["資料", "寬度起點", "呈現方式"],
          [
            ["Selection", "44–48px", "只在 bulk 有價值時出現"],
            ["Identity", "min 200px、可 grow", "主名＋次要 context，最多兩行"],
            ["Status", "min 120px", "文字＋badge，不能剪掉關鍵字"],
            ["Date / time", "min 176px", "完整日期與時區，必要時換行"],
            [
              "Number / currency",
              "min 112px",
              "右對齊、tabular figures、currency code",
            ],
            ["Tags", "min 160px", "有限数量＋可開啟的 +N"],
            ["Row actions", "44–88px", "命名 overflow；touch 始終可達"],
          ],
        ),
      ),
      s("Sorting / selection / pagination", [
        "Default 52px row；compact40px。Table header 44px candidate；multi-line rows 可增高。",
        "排序清楚標示欄位與方向，aria-sort 位於 header。若只對 loaded rows 排序就明確寫，不宣稱全資料庫排序。",
        "Header checkbox 只選當頁／顯示資料；跨頁全選需另一步「選取所有符合條件的 N 筆」並由 API 支援。",
        "Page-size／filter 變更的 reset policy 要固定；返回 detail 後保留 query、page、scroll。未知 total 不編造頁數。",
      ]),
      s("必要 states", [
        "Loading/skeleton、首次 empty、篩選後 empty、error/retry、read-only、no permission、partial selection、loading more、long text、missing data。",
        "下方可切換示例 state、排序、搜尋、選取及密度；是本地六筆完整示例，不代表 server 實作。",
        "大量資料採既有 grid／virtualization；不可把1000筆完整 DOM rows 當性能驗收。",
      ]),
      s("Mobile", [
        "需要比較時保留可橫捲的 named table region；只需快速查看時轉 priority cards。兩者都保留 identity、status、action。",
        "Row action hover 可增強顯著度，但 keyboard focus／touch 都有等效入口。",
      ]),
    ],
    [
      "packages/components/src/display/PaginatedDataGrid.tsx",
      "packages/components/src/display/VirtualScrollList.tsx",
      "spec/data-display.md",
    ],
  ),
  p(
    "filters",
    "元件",
    "搜尋、篩選與 saved views",
    "讓使用者清楚知道現在看的是哪一部分資料，以及怎樣回到全貌。",
    "filters",
    [
      s(
        "三種不同控制",
        [],
        t(
          ["控制", "作用", "清除方式"],
          [
            ["Search", "文字 query", "輸入框 clear，保留其他 filters"],
            [
              "Filter",
              "狀態、channel、assignee、日期等條件",
              "單個 chip remove 或 clear all",
            ],
            [
              "Saved view",
              "一組有名稱的條件",
              "修改後標記 modified，不默默覆寫",
            ],
          ],
        ),
      ),
      s("規格与布局", [
        "Search 放在 toolbar 起點，desktop 約240–320px，可縮至全寬。Filters 以具名 button 打開，不只有漏斗 glyph。",
        "Active filters 在 query 下方用可移除 chips 顯示；顯示 active 數量與 Clear all。內容過多換行或 summary，不橫向藏掉所有條件。",
        "Quick filters 如 Unread/Mine 是同一 dataset 的 scope，放在 sidebar 或 filters 區，不混成 product-level tabs。",
      ]),
      s("資料與 keyboard", [
        "即時 search 可 debounce 300ms；IME composition 完成前不要發出破碎 query。Enter/submit 行為必須一致。",
        "Filter 改變通常回第一頁，但保留 query；跨 scope selection 需清楚清除或保留理由。",
        "No results 顯示造成空結果的條件及 clear action，不使用首次 empty 的 onboarding 插圖。",
      ]),
    ],
    [
      "packages/components/src/inputs/SearchField.tsx",
      "apps/storybook/src/molecules/FilterChipRow.stories.tsx",
    ],
  ),
  p(
    "status",
    "元件",
    "Badge、tag 與 avatar",
    "Badge 描述狀態，tag 分類資料，avatar 協助辨認身份；三者不能互相代替。",
    "status",
    [
      s(
        "分類與語意",
        [],
        t(
          ["域", "詞彙例子", "呈現"],
          [
            [
              "Connection",
              "Connected / Connecting / Disconnected / Unknown",
              "label + icon；unknown 不是綠色",
            ],
            [
              "Execution",
              "Queued / Running / Completed / Failed / Paused",
              "跟真實 job state；不可自行推算成功",
            ],
            [
              "Resource",
              "Draft / Active / Archived",
              "生命週期，不等於 connection",
            ],
            ["Approval", "Pending / Approved / Rejected", "與執行状态分開"],
            ["Tags", "VIP / Follow-up", "用於分類及篩選，可多個"],
          ],
        ),
      ),
      s("尺寸與溢出", [
        "Badge 12/18、水平8px、垂直2px；重要 status 文字不小於caption。Tag 若可刪除，remove target 與整粒 chip 分開命名。",
        "Tag 多於可容纳數量，用 +N 展開全部；已有 tags 仍可加 tag，不只 empty 才出現 add。",
        "Avatar list32px、conversation40px、profile64px 為起點；圖片失敗顯示 initials／neutral placeholder，不能隨機換身份。",
      ]),
      s("互動與 a11y", [
        "純 badge 不是按鈕；可點 filter tag 才加 button semantics。Remove action 包含 tag 名称。",
        "顏色只輔助，text 和 icon 共同表達狀態。Unread count 可視99+，accessible name 提供已知 exact count。",
        'Avatar 旁已有名字時裝飾圖 alt=""；單獨身份圖才提供有意義替代文字。',
      ]),
    ],
    [
      "packages/components/src/display/TagChip.tsx",
      "apps/storybook/src/atoms/Avatar.stories.tsx",
      "apps/storybook/src/atoms/Badge.stories.tsx",
    ],
  ),
  p(
    "cards",
    "元件",
    "Cards、list rows 與空間分組",
    "Card 用於獨立内容；row 用於重複掃描；不要把一個頁面切成沒有意義的盒子。",
    "cards",
    [
      s(
        "選用",
        [],
        t(
          ["情況", "使用", "注意"],
          [
            ["同欄位大量資料", "Table / list rows", "不要每筆用巨大 card"],
            ["獨立設定或資訊群組", "Card / section", "標題＋內容＋相關操作"],
            ["跨時間比較", "Chart panel", "有尺度、legend、單位及狀態"],
            [
              "可選方案",
              "Selectable card",
              "用 radio/checkbox 語意，非純 clickable div",
            ],
          ],
        ),
      ),
      s("Anatomy", [
        "Card header：title + optional description + contextual action；body：主要資訊；footer：直接相關的少量操作。",
        "Standard padding24px、compact16px、radius12px candidate；gap16px。內容基線對齊，比每張卡同高度更重要。",
        "若整張 card clickable，內部不要再套另一個 anchor。只讓標題 link／明確 action 可點往往更安全。",
      ]),
      s("States 與 responsive", [
        "Selected card 使用 border、check indicator 與文字；keyboard focus ring 另保留。",
        "只有互動卡才 hover lift；靜態摘要卡保持穩定，loading 用同結構 skeleton。",
        "多欄由容器寬度變兩欄／單欄；不要為維持三欄縮小 label。",
      ]),
    ],
    [
      "apps/storybook/src/organisms/KanbanCard.stories.tsx",
      "spec/foundations.md",
    ],
  ),
  p(
    "overlays",
    "元件",
    "Dialog、drawer 與 popover",
    "依任務決定打斷程度：需要回答才 modal，只補充 context 就用較輕的浮層。",
    "overlays",
    [
      s(
        "選用与尺寸",
        [],
        t(
          ["元件", "何時用", "候選尺寸"],
          [
            ["Popover", "短選單、快速資訊", "內容寬240–360px；不做長表單"],
            [
              "Dialog",
              "短而聚焦的任務／confirmation",
              "小400px、中560px、最大720px",
            ],
            [
              "Drawer",
              "保留底層 context 的詳情或編輯",
              "320–480px；窄屏改近全屏",
            ],
            [
              "Dedicated page",
              "長流程、複雜設定／editor",
              "有 route、Back、unsaved guard",
            ],
          ],
        ),
      ),
      s("Anatomy 與關閉", [
        "標題 → 可選說明 → body → footer；header/footer 不遮住可捲 body。關閉按鈕有名稱，取消操作始終可到達。",
        "一般 dialog 可 Escape 關閉；有未儲存內容先確認是否放棄。Pending不可取消時要明確說明，不能把整個介面無限鎖死。",
        "Destructive confirmation 初始 focus 放安全選項，文案點出對象、數量及可否恢復，不只寫 Are you sure。",
      ]),
      s("Focus 與 stacking", [
        "原生 dialog / 管理過的 library dialog 把背景設為 inert，Tab/Shift+Tab 留在dialog，close回到invoker或合理下一項。",
        "Dropdown portal 必須留在 dialog 的互動層；不要同時兩個 modal 都聲稱擁有焦點。",
        "Optional onboarding 排隊，不能覆蓋 error recovery。Drawer 若非modal，不應錯設 aria-modal=true。",
      ]),
      s("示例與實作差異", [
        "下方是 native dialog 的離線示例，沒有真實刪除。正式產品應沿用既有 ConfirmDialog / MUI focus management。",
        "目前 ConfirmDialog 接受 loading prop；呼叫端仍須管理 async 結果，不能只因 callback 回傳 Promise 就假定元件會管理 pending。",
      ]),
    ],
    [
      "packages/components/src/feedback/ConfirmDialog.tsx",
      "packages/components/src/feedback/DeleteConfirmDialog.tsx",
      "spec/components.md",
    ],
  ),
  p(
    "feedback",
    "元件",
    "Toast、banner 與 tooltip",
    "反饋的強度必須與事件的重要性相稱；可恢復的問題要保留解決入口。",
    "feedback",
    [
      s(
        "Pattern decision",
        [],
        t(
          ["訊息", "模式", "生命週期"],
          [
            [
              "短暫非關鍵完成",
              "Toast / status",
              "不搶 focus；可關閉；可選合理 timeout",
            ],
            [
              "影響目前任務的狀態",
              "Inline banner",
              "持續到問題消失／使用者處理",
            ],
            [
              "阻止继续的錯誤",
              "Field error / dialog",
              "提供具體 recovery，保留輸入",
            ],
            ["簡短名詞說明", "Tooltip", "hover + focus；不是唯一說明載體"],
          ],
        ),
      ),
      s("Toast 規格", [
        "一個短標題，最多一行補充，可選單一 undo／view action；操作 text 明確。不要累積十張 toast 遮住頁面。",
        "成功以 status/polite announcement；急迫錯誤才考慮 alert。不要每次微小同步都讓 screen reader 連續播報。",
        "有 critical action 的 toast 不應太快自動消失。此手冊示例採手動關閉，避免讀取時間不足。",
      ]),
      s("Banner 與 tooltip", [
        "Banner 放在受影響區域上方，而不是與內容無關的全域角落。Reconnect button 與斷線原因同時可見。",
        "Tooltip 只補充內容；keyboard focus 可觸發，Escape 可關閉。含互動 links 的內容用 popover，不用tooltip。",
        "Disabled control 的原因要在可讀文案交代，不依賴 disabled 元件本身收 hover。",
      ]),
    ],
    [
      "packages/components/src/layout/ToastStack.tsx",
      "apps/storybook/src/atoms/Tooltip.stories.tsx",
    ],
  ),
  p(
    "states",
    "元件",
    "Loading、empty、error 與權限",
    "一個頁面不是只有「有資料」這個狀態。每種狀態都要解釋原因與下一步。",
    "states",
    [
      s(
        "必交付的 state matrix",
        [],
        t(
          ["狀態", "內容", "下一步"],
          [
            [
              "Initial loading",
              "保留頁面骨架；skeleton或文字",
              "不誤顯示0筆或No data",
            ],
            ["First-use empty", "解釋資料用途", "建立／匯入，依權限顯示"],
            ["Filtered empty", "目前條件找不到資料", "清除query／filters"],
            [
              "Retryable error",
              "失敗位置及原因（不露敏感資料）",
              "Retry；保留原條件",
            ],
            ["No permission", "需要的權限及找誰協助", "返回／聯絡管理員"],
            ["Read-only", "資料可讀但不能修改", "清楚原因，不偽裝disabled整頁"],
            [
              "Partial / stale",
              "已載入部分或上次資料時間",
              "繼續載入／重新整理",
            ],
            [
              "Disconnected",
              "channel/session 連線狀態",
              "明確reconnect而非廣泛刷新",
            ],
          ],
        ),
      ),
      s("Skeleton 與 spinner", [
        "已知布局用 skeleton；未知短操作用 spinner + text。首屏 skeleton 不包含假的客戶姓名。",
        "避免整頁閃爍；refresh 可保留舊資料並顯示更新中。spinner 只在等待真實結果時動，reduced motion 改靜態progress text。",
      ]),
      s("Error recovery", [
        "重新整理／retry 不丟失 filter、表單草稿或 scroll context。部分批次失敗要列出成功／失敗数量及可重試部分。",
        "No permission 不以404或空白掩蓋；但登入與帳戶查詢仍須遵循安全政策，不能洩露帳戶是否存在。",
      ]),
    ],
    [
      "spec/components.md",
      "packages/components/src/display/PaginatedDataGrid.tsx",
    ],
  ),
  p(
    "special-fields",
    "元件",
    "電話、檔案與特殊欄位",
    "沿用既有語意與安全契約，設計系統只統一呈現與可操作性。",
    "special-fields",
    [
      s("電話欄位", [
        "country/dial code selector 與號碼輸入同一視覺群組，但各有 label。國旗不能是唯一國家識別。",
        "保留前導+及國碼處理；display format 與儲存格式分開。不因 UI 重設電話 parsing／validation。",
        "手機用 tel keyboard；國家搜尋及 error helper 不應擠壓號碼空間。未知國家有文字fallback。",
      ]),
      s(
        "File upload",
        [],
        t(
          ["階段", "呈現", "風險處理"],
          [
            [
              "Before",
              "允許格式、size limit、browse button",
              "不只支援drag/drop",
            ],
            [
              "Uploading",
              "每檔progress及取消（若支援）",
              "未知百分比用indeterminate，不造假",
            ],
            ["Failed", "檔名、失敗原因、retry", "重試不重複成功檔案"],
            ["Complete", "預覽／檔名／移除", "移除影響已儲存資源時需要確認"],
          ],
        ),
      ),
      s("密碼與 copy", [
        "密碼可顯示／隱藏並保留focus；切換按鈕label更新。不關閉paste或password manager。",
        "Copy 後只在 clipboard 成功才顯示已複製；一般文字複製失敗時可選取原值。Sensitive 值依產品政策遮罩，不把 token 放 toast；遮罩不可當作復原方式。若政策允許顯示，先重新驗證權限，再提供選取或重試複製。",
        "OTP、日期區間、金額等專用欄位需各自業務contract，不能以generic text field驗收替代。",
      ]),
    ],
    [
      "packages/components/src/inputs/PhoneNumberInput.tsx",
      "packages/components/src/inputs/FileUploadDropzone.tsx",
      "packages/components/src/inputs/CopyButton.tsx",
    ],
  ),
];
