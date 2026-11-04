import { page as p, section as s, table as t } from "./model.mjs";
export default [
  p(
    "contacts",
    "產品模式",
    "Contacts · 資料管理頁",
    "共用資料頁模式：先找到資料，再查看詳情，最後完成有明確範圍的操作。",
    "contacts",
    [
      s("完整版面 anatomy", [
        "Primary rail 保持 Contacts current；secondary nav 放 Contacts / Lists / Import history 等真正不同工作流程。",
        "Header：聯絡人＋可信total＋「建立聯絡人」。Toolbar：query、filters、columns、import/export。Table 優先顯示 identity、電話、來源渠道／號碼、新增日期、status 及有用的 tags；其餘欄位按工作調整，唔為填滿表格而加欄。",
        "Detail 以右側panel或route開啟，保留底層query/page/scroll；窄屏進獨立detail，Back回原狀。",
        "選取 checkbox 在進入批次工作時才突出；空 tags 提供「加入標籤」，不反覆顯示無操作價值的『未有標籤』。",
      ]),
      s(
        "主要流程",
        [],
        t(
          ["步驟", "行為", "不能遺失"],
          [
            ["Find", "輸入query或選tag/owner", "active filters及結果scope"],
            ["Inspect", "開聯絡人detail", "list position、selected rows"],
            [
              "Edit",
              "明確editable fields＋save/cancel",
              "server validation、Unicode姓名",
            ],
            [
              "Bulk",
              "先選取，再選assign/tag/export",
              "affected count、跨頁scope",
            ],
            ["Return", "關閉detail／Back", "原資料頁狀態"],
          ],
        ),
      ),
      s("Mobile 與異常", [
        "手機優先卡片顯示name、status、下一動作；大量欄位比較才使用horizontal table。",
        "Filtered empty保留toolbar及clear filters；permission缺失仍可view時保留資料。匯入/匯出需要後端job與error report，不由demo推算成功。",
      ]),
      s("交付 checklist", [
        "長公司名／多tag、缺少電話、非拉丁姓名、沒有編輯權限、sort及filter後返回、批次部分失敗。",
        "示例使用虛構聯絡人；現有API及permissions不會被手冊修改。",
      ]),
    ],
    [
      "packages/components/src/display/PaginatedDataGrid.tsx",
      "packages/components/src/selectors/ContactSelector.tsx",
      "spec/cross-task-design-audit.md",
    ],
  ),
  p(
    "inbox",
    "產品模式",
    "Inbox · 客服工作區",
    "閱讀、回覆與上下文是核心。讓高頻工作迅速，但不犧牲日期、身份與訊息狀態。",
    "inbox",
    [
      s("四區工作空間", [
        "Primary rail → filters / saved views → conversation list → message thread；contact inspector可選，不是必須常駐第五欄。",
        "Filters：All / Unread / Mine / Unassigned / Archived 是scope；channel／assignee 一個 entity 一行，唔用 tag cloud 扮列表。名稱、必要電話、狀態及有可靠來源的待處理數保持可見。",
        "Conversation list：avatar、name、必要電話、channel、snippet、time、unread/assigned；加tag及assign在hover/focus出現，touch有可達入口。三行資訊與略低高度係 Inbox 候選密度，須驗證長名稱及窄屏。",
      ]),
      s(
        "Message anatomy",
        [],
        t(
          ["元素", "規則", "異常狀態"],
          [
            [
              "身份與方向",
              "入/出方向清楚；internal note另有label",
              "不能只靠bubble顏色辨認",
            ],
            [
              "內容",
              "文字/media/quoted message各有布局",
              "附件失敗、缺preview、長URL",
            ],
            [
              "日期",
              "完整日期時間可見或可直接展開",
              "跨日／跨年／account timezone",
            ],
            [
              "Delivery",
              "queued/sent/delivered/read/failed",
              "依channel真實能力，不造假double-check",
            ],
            [
              "Composer",
              "message/internal note切換清楚",
              "disconnected、permission、window expired",
            ],
          ],
        ),
      ),
      s("上下文與 hover", [
        "切換conversation保留各自scroll/草稿策略；不可把一個客戶草稿送到另一個thread。",
        "Collapsed filters可以hover preview，但focus在panel或popup內時不關閉。Pin是持久選擇；hover是暫時狀態。",
        "Conversation row已有tags仍提供add；popular tags只有可靠backend usage時才出現。",
        "Phone 與 unread count 係工作資訊，不可為 hover action 騰位而消失；未讀 badge 用同一套大小／上限語言。面板寬度可調屬待驗證工作區設定，不能令 thread 過窄。",
      ]),
      s("Mobile", [
        "列表與thread分頁；thread header有Back與身份；composer保留在可操作區，keyboard出現不蓋住send。",
        "示例不發送真實訊息。各channel視窗／template限制沿用backend contract，不能用設計改掉。",
      ]),
    ],
    [
      "packages/components/src/inbox/InboxFilters.tsx",
      "apps/storybook/src/templates/ChatLayout.stories.tsx",
      "apps/storybook/src/organisms/ChatListItem.stories.tsx",
      "apps/storybook/src/organisms/ChatBubble.stories.tsx",
      "spec/cross-task-design-audit.md",
    ],
  ),
  p(
    "automation",
    "產品模式",
    "Automation · 列表與編輯器",
    "把流程管理與流程編輯分開：找到流程用列表，編輯邏輯用足夠大的工作區。",
    "automation",
    [
      s("資訊架構", [
        "Primary：Automation。Secondary：Flows / Keyword replies / Run history 是route，不是filter。",
        "Flows內的Active/Draft/Paused是status filter；不能再加一排同樣風格的假tabs。",
        "選擇flow進editor；Overview/Versions若是同一flow的peer panels可用tabs。",
      ]),
      s("Editor anatomy", [
        "Top：flow name、saved/unsaved state、test、publish。Left可選node library；center canvas；right contextual inspector。",
        "Canvas工具：zoom、fit、undo/redo依實際能力。拖拉不是唯一操作方式，鍵盤／新增按鈕亦應可完成基本編輯。",
        "Inspector顯示選取node資料；改選node不丟未提交欄位。Publish與Save draft是不同動作及風險。",
      ]),
      s(
        "狀態與防護",
        [],
        t(
          ["情境", "要求"],
          [
            ["Unsaved", "route change有guard；明確save/discard/cancel"],
            ["Validation error", "指出node與field，點擊可定位"],
            ["Running job", "run history來自backend，不用動畫代替state"],
            [
              "Disconnected / conflict",
              "保留local edit，明確reconnect或版本衝突",
            ],
            ["Permission", "可view但不能publish的狀態獨立處理"],
          ],
        ),
      ),
      s("Responsive", [
        "窄屏先收library/inspector；若完整editor不支援mobile，明確提供可讀overview／view-only，不能假装所有node已可編輯。",
        "下方為版面示意，不是functional flow editor或backend simulator。",
      ]),
    ],
    ["spec/navigation.md", "spec/adoption.md"],
  ),
  p(
    "settings",
    "產品模式",
    "Settings · 分組表單",
    "讓人知道正在改哪一組設定、是否已儲存、離開會否失去修改。",
    "settings",
    [
      s("頁面結構", [
        "Secondary nav按任務分組：Profile / Team / Notifications / Billing / Integrations。不要按每個欄位建一個tab。",
        "內容用640–720px閱讀寬度；section heading、description、related fields、section action順序一致。",
        "重要account／billing操作與一般偏好分開；danger zone放最後，清楚影響。",
      ]),
      s("儲存策略", [
        "整組欄位需要共同驗證時用明確Save changes；立即生效的簡單preference可用switch，但pending及failure可見。",
        "有dirty state顯示save/cancel；成功等server確認。離開前保留unsaved guard。",
        "失敗保留已輸入內容；全局error不取代field-specific validation。",
        "會改變介面行為或外觀的設定，在切換前提供簡短 before／after preview；相關選項用 section heading 或 divider 分組，避免長列表無結構。",
      ]),
      s("多人與權限", [
        "Team設定明確誰可改、影響誰。個人通知不得默默改全team。",
        "可能並行編輯時有conflict策略；已失效permission顯示reason而非一片disabled。",
        "示例表單只在本地驗證，未儲存真實偏好。",
      ]),
    ],
    ["packages/components/src/layout/PageWrapper.tsx", "spec/components.md", "spec/cross-task-design-audit.md"],
  ),
  p(
    "analytics",
    "產品模式",
    "Analytics · 指標與圖表",
    "先說明數字代表什麼、對比什麼，才決定用哪一種圖。",
    "analytics",
    [
      s("閱讀順序", [
        "PageHeader＋date range/timezone → KPI summary → trend/comparison → detail table。",
        "每個KPI帶定義、期間、單位與必要的comparison；例如平均首次回覆時間不等於所有對話回覆時間。",
        "Summary card可drill down時使用具名link；不是整張無label的clickable div。",
      ]),
      s(
        "選圖規則",
        [],
        t(
          ["目的", "圖形", "必備"],
          [
            ["時間趨勢", "Line", "時間軸、刻度、缺失點處理"],
            ["類別比較", "Bar", "一致baseline、單位、排序"],
            ["占比", "Stacked bar / 少量segments", "分母、legend、exact value"],
            ["精確值", "Table", "數字對齊、日期、排序"],
            ["單一概況", "KPI", "定義、期間、相對基準"],
          ],
        ),
      ),
      s("顏色與可達性", [
        "不只靠紅／綠表示好壞：等待時間下降通常是好事；volume下降未必是。配direction與文字說明。",
        "提供文字摘要／table替代；tooltip內exact values keyboard也可取得，不只滑鼠pointer。",
        "Loading、no data、partial data、tracking unavailable分開。未知值不是0。",
      ]),
      s("Responsive", [
        "KPI從3–4欄降2／1欄，標題不裁切。Chart寬度改變時減少ticks但保留起止時間；不移除legend意義。",
        "下方數字為虛構展示，不代表ChatDaddy實際performance。",
      ]),
    ],
    [
      "apps/storybook/src/templates/DashboardLayout.stories.tsx",
      "spec/README.md",
    ],
  ),
  p(
    "channels",
    "產品模式",
    "Channels 與 Broadcasts",
    "連線狀態、發送狀態、商業權限分清楚，避免用同一個綠點代表所有事情。",
    "channels",
    [
      s("Channels anatomy", [
        "每項channel顯示平台、名稱、帳戶識別、connection status及recovery action。正式平台logo與一般utilities分開。",
        "Connected、connecting、disconnected、restricted、unknown各自有label；unknown不要顯示綠點。",
        "Reconnect保持context；不可讓optional onboarding遮住授權／掃碼／錯誤。",
      ]),
      s(
        "Broadcast 流程",
        [],
        t(
          ["階段", "設計內容", "確認事項"],
          [
            [
              "Draft",
              "內容編輯、channel、recipient scope",
              "現有模板及permissions",
            ],
            [
              "Review",
              "recipient count、schedule/timezone、cost如適用",
              "已知total才顯示數量",
            ],
            ["Confirm", "高影響send需明確確認", "按下前可返回修改"],
            ["Sending", "真實job progress、可取消若支援", "不能以時間估算完成"],
            [
              "Result",
              "delivered/failed/unknown分開",
              "部分失敗可查看／retry範圍",
            ],
          ],
        ),
      ),
      s("列表與操作", [
        "Draft／Scheduled／Sent是同資料集的filter或saved view；若是完全不同功能才用secondary nav。",
        "Delete draft與cancel scheduled send是不同action。Scheduled time必須有完整日期及時區。",
        "窄屏先保留campaign name、status、time、primary next action；其餘到detail。",
        "Channel 管理清單優先名稱、電話／帳戶識別、單一清楚狀態與下一步；避免『連接』和『狀態』兩欄重複同一意思。項目很少時不必硬加搜尋。",
      ]),
    ],
    [
      "packages/components/src/selectors/ChannelSelector.tsx",
      "spec/components.md",
      "spec/cross-task-design-audit.md",
    ],
  ),
  p(
    "login",
    "產品模式",
    "Login 與品牌故事",
    "登入表單優先；故事與氛圍可以豐富，但不能搶走完成登入的空間。",
    "login",
    [
      s("頁面 anatomy", [
        "Desktop：task-first form + optional storytelling panel。Form含brand mark、welcome heading、電話／password、login／Google、register／recovery。",
        "Language selector可用compact flag＋清楚language name；hover可preview，但click、keyboard、touch皆能選。國旗不能代替語言名稱。",
        "次要連結分組，不與primary登入按鈕競爭。錯誤訊息靠近表單，不能被carousel推走。",
      ]),
      s("Mobile 与安全", [
        "窄屏表單先顯示；story panel移到下方或省略，不能讓使用者先捲一屏case study。",
        "Input可用password manager、autocomplete、paste；電話格式與錯誤語氣遵循auth/security contract。",
        "登入狀態不能在HTML demo驗證。品牌案例需有真實授權／內容核實；示例對話與業績不得假装成客戶證言。",
      ]),
      s("Storytelling 與 motion", [
        "Carousel有明確manual control；optional autoplay需pause，focus／hover閱讀時不強制切換，reduced-motion靜態。",
        "裝飾背景aria-hidden、pointer-events:none；慢速運動不能讓主要文字對比變差。",
        "每張圖有適當crop，logo有品牌clearspace；載入失敗仍可讀故事。",
      ]),
    ],
    ["spec/README.md", "spec/accessibility-content.md"],
  ),
  p(
    "motion",
    "動效",
    "Motion language 與 micro animations",
    "豐富的手感來自每一次操作都有合適回應，不是全頁一直動。",
    "motion",
    [
      s(
        "Motion tokens",
        [],
        t(
          ["事件", "時間", "方式"],
          [
            ["Press", "140ms", "小幅scale；不移動周圍layout"],
            [
              "Hover / focus / selected",
              "180ms",
              "顏色、border、細微indicator",
            ],
            ["Dialog enter", "200ms", "opacity + 少量translate"],
            ["Disclosure / toast", "220ms", "內容/狀態進出；不延遲操作"],
            ["Panel / tab", "280ms", "局部交接，保留閱讀錨點"],
            ["Success settle", "320ms", "check stroke／短回饋"],
            ["Exit", "160ms", "快於進場；立即釋放互動限制"],
          ],
        ),
      ),
      s("Easing 與幅度", [
        "預設cubic-bezier(.2,.8,.2,1)。控制動效集中在2–6px displacement及0.98–1 scale；不讓table row到處飄。",
        "布局先穩定再加動效：保持button寬度、固定icon slot、不讓spinner出現時推開文字。",
        "Keyboard與pointer都得到selected/focus回饋，但focus不需要先hover才能看見。",
      ]),
      s("狀態序列與真實結果", [
        "Press → pending → success/error。API完成前不得顯示成功；錯誤回到可重試狀態。示例明確標為模擬。",
        "切換panel時資訊即刻可讀，不等動畫完才啟用controls。快速連按／切換要取消舊timer，不能讓舊結果覆蓋新狀態。",
        "離開頁面停止可有的demo工作；長時間busy需可讀文字、timeout/retry策略。",
      ]),
      s("Performance / reduced motion", [
        "優先transform與opacity；不對大面積blur、height或box-shadow連續動畫。",
        "系統prefers-reduced-motion與頁內開關都能關閉非必要motion；系統reduce不能被頁內full覆蓋。",
        "Reduced motion仍保留成功／錯誤／selected資訊，僅換成即時或淡入回饋。",
      ]),
    ],
    ["spec/motion.md", "packages/tokens/src/motion.ts"],
  ),
  p(
    "motion-recipes",
    "動效",
    "動效 recipes 與禁忌",
    "把動效落在具體元件上，明確 trigger、完成、打斷與靜態替代。",
    "recipes",
    [
      s(
        "逐元件 recipes",
        [],
        t(
          ["元件", "Trigger → feedback", "Reduced / interruption"],
          [
            [
              "Button",
              "hover tint → press → pending spinner → check",
              "文字及busy state保留；不強制最少等待",
            ],
            [
              "Tabs",
              "active underline移動＋新panel淡入",
              "立即切換；rapid keys不排隊",
            ],
            [
              "Switch",
              "thumb滑動＋label狀態更新",
              "立即轉位；server失敗rollback",
            ],
            [
              "Accordion",
              "chevron轉90/180°＋content reveal",
              "即時展開；關閉後hidden content不可focus",
            ],
            [
              "Table selection",
              "checkbox/check＋row tint＋bulk bar",
              "不移動row位置",
            ],
            [
              "Navigation",
              "active mark交接＋label emphasis",
              "current route文字與indicator保留",
            ],
            ["Icon gallery", "hover／focus 一次輕搖；無 fade", "約420ms、1px／3°；reduced motion 靜態"],
            ["App module icon", "按真正可互動狀態局部回應", "靜態SVG；不永久旋轉sidebar 或品牌 logo"],
            [
              "Toast",
              "短上移＋opacity；close退場",
              "立即顯示／關閉；不搶focus",
            ],
            ["Drawer", "邊緣少量進場＋scrim", "立即完成layout；focus仍管理"],
          ],
        ),
      ),
      s("何時不要動畫", [
        "輸入游標、連續大量資料更新、錯誤訊息位置、長表格排序、使用者已要求reduce。",
        "不要每次scroll進viewport都重新播放整頁動畫；不要讓導航等待動效才能啟動。",
        "永久marketing loop需可pause並限於裝飾区域；高頻工作區不用ambient motion。",
      ]),
      s("驗收", [
        "Mouse、Tab、rapid repeated clicks、切頁中途、OS reduce、頁內reduce、慢API／error；視覺效果不能改變business state。",
        "下方checkbox／disclosure／switch均可操作；這是示例，不是production動畫已全部遷移。",
      ]),
    ],
    ["spec/motion.md"],
  ),
  p(
    "accessibility",
    "交付與維護",
    "Accessibility 驗收",
    "從設計開始就交付 keyboard、focus、文字與狀態；不能等完成頁面後才補一層ARIA。",
    "accessibility",
    [
      s("設計階段 checklist", [
        "所有controls有可讀名稱；icon-only有label，重要資訊不只tooltip／顏色／動畫。",
        "Touch target目標44px；focus ring清晰且不被sticky header或overflow裁切。",
        "正文對比目標4.5:1；大型文字與非文字UI按適用標準驗證。不要從一組色票通過推論整頁合規。",
        "支援200% zoom與長文重排；modal、tabs、listbox各自有正確keyboard contract。",
      ]),
      s("手動流程", [
        "只用Tab/Shift+Tab/Enter/Space/Escape完成主要任務；tablist再測arrows/Home/End。",
        "打開dialog，檢查初始focus、trap、Escape、關閉focus return；portal menu也在正確層。",
        "使用screen reader讀heading、landmarks、field error與pending結果；live region只播報有意義變化。",
        "OS reduce、手機touch、至少一個窄viewport；對於complex grid/editor要測其special keyboard model。",
      ]),
      s("驗證不是聲稱", [
        "本版規則參照WAI-ARIA APG；網站會另記實際測試結果。不把DOM tests稱作screen-reader／native-dialog驗收。",
        "已知Browser automation連接不可用時，交付人工驗收清單及狀態，不偽造通過。",
      ]),
    ],
    ["spec/accessibility-content.md"],
  ),
  p(
    "implementation",
    "交付與維護",
    "工程對應與 adoption",
    "同一個repo存規格、tokens、元件及示例，但清楚區分「規格已寫」與「產品已採用」。",
    "implementation",
    [
      s(
        "Repo 分層",
        [],
        t(
          ["路徑", "職責", "狀態"],
          [
            [
              "handbook/src",
              "詳細設計師文件與示例來源",
              "本次新增；生成HTML及Markdown",
            ],
            [
              "spec",
              "既有決策、候選tokens、behavior contracts",
              "0.2基礎方向沿用；不是runtime defaults",
            ],
            [
              "packages/tokens + theme",
              "正式程式token與MUI theme",
              "existing0.1.0；未在本次全量遷移",
            ],
            [
              "packages/icons + components",
              "可重用實作",
              "逐元件映射與驗收，不宣稱全部符合新規格",
            ],
            [
              "apps/storybook",
              "元件互動實驗室；包含歷史 stories",
              "手冊只連 package-backed curated 示範；舊 stories 不作標準",
            ],
            [
              "research",
              "歷史audit evidence",
              "private；不包含於公開網站artifact",
            ],
          ],
        ),
      ),
      s("如何使用程式映射", [
        "每頁底部連到現有 source；其中舊 Storybook 檔案只作參考。已抽出元件另有精準 source、import 用法與互動示例；設計新需求先查 variant／adapter，不再建另一套 table 或 selector。",
        "手冊的vanilla HTML demo是設計示例，不能直接當MUI production component。程式API以source interface為準。",
        "候選 radius、type roles 跟 runtime 有差異；sidebar 本版已更新為 package 尺寸，但 App 採用仍需逐項驗證。其餘模組抽取狀態查 spec/module-code-extraction.md，不能以 Storybook 舊 story 當作已完成。",
      ]),
      s("Migration 順序", [
        "1. 對齊fonts/type/spacing與semantic roles，用不破壞舊imports的adapter。",
        "2. Contacts pilot：table、field、selector、states、mobile；保留全部API及permissions。",
        "3. Automation pilot：nav層級、editor空間、unsaved behavior。",
        "4. 測試通過後套用Channels/Broadcasts/Settings；Inbox等專業workspace獨立驗證。",
      ]),
      s("網站與發佈", [
        "本地HTML可離線annotation；GitHub Markdown提供可review的逐頁文檔。",
        "GitHub Pages root 以 handbook 為入口；/handbook/ 保留別名，Storybook 移至 /storybook/ 作次要元件實驗室。舊 root ?path= story 連結自動轉到 /storybook/；research、private audit 與原始 archives 不進網站 artifact。",
        "Figma library與完整production採用尚未交付；保持明確，避免新設計師以為已可拖拉同步。",
      ]),
    ],
    [
      "packages/components/src/index.ts",
      "packages/tokens/src/index.ts",
      "spec/adoption.md",
      "spec/module-code-extraction.md",
    ],
  ),
  p(
    "handoff",
    "交付與維護",
    "設計交付與版本治理",
    "交付的不只是一張畫面，而是一份工程師能實作、測試者能驗收的契約。",
    "handoff",
    [
      s(
        "每個feature的設計包",
        [],
        t(
          ["交付項", "至少包含"],
          [
            ["Context", "使用者任務、page family、permission與入口"],
            [
              "Layout",
              "desktop/narrow、scroll owner、primary/secondary navigation",
            ],
            ["Components", "使用本手冊哪個元件/variant/token；例外理由"],
            [
              "States",
              "default/hover/focus/pending/success/error/empty/no permission",
            ],
            [
              "Data",
              "query/sort/selection/export scope、timezone、missing/long values",
            ],
            ["Interaction", "keyboard、touch、Back、unsaved、reduced motion"],
            ["Engineering", "source mapping、未有元件、backend dependencies"],
            ["Review", "版本、decision IDs、screenshots、驗收結果及未決事項"],
          ],
        ),
      ),
      s("變更流程", [
        "先改handbook/src及相關spec，再生成HTML/Markdown與tests；有runtime變更同步packages/theme/Storybook。",
        "PR說清breaking change、影響頁面、migration。Design/product與frontend各自review，選了視覺方向不等於已批production rollout。",
        "只有實際完成對應測試才能勾選驗收；未測mobile、screen-reader或backend不寫「全部通過」。",
      ]),
      s("版本策略", [
        "Docs 1.4.0-draft.1 與 runtime 0.1.0 分開；1.0.0 是已確認基準。ModuleIcon 已有 runtime export，新增案例庫與持久工作循環屬文件提案；App 採用仍待 review。文件定版不等於 App 發布。新章節／pattern 是 minor；修字／小規則 patch；breaking token/API 需獨立版本決策。",
        "舊0.2 direction studio保留為歷史，不覆寫成新版。Annotations針對新handbook，修改後更新同一editable source再生成新snapshot。",
        "原始ZIP留在本機；發布文字只用ChatDaddy品牌，授權notices依法保留。",
      ]),
      s("新設計師的完成標準", [
        "拿一個未設計過的Contacts或Settings需求，應可從這裡選layout、字級、spacing、元件及全部主要狀態，不需猜尺寸。",
        "遇到本手冊未覆蓋的pattern，開具體issue附場景及建議；不要各自悄悄新增一套樣式。",
      ]),
    ],
    ["spec/governance.md", "CHANGELOG.md"],
  ),
];
