import { page as p, section as s, table as t } from "./model.mjs";
const source = ["spec/README.md", "spec/components.md"];
export default [
  p(
    "smart-defaults",
    "設計原則",
    "01 · Smart defaults",
    "用可靠的上下文減少重複決定，讓使用者調整一個合理起點，而不是每次由零開始。",
    "smart-defaults",
    [
      s("何時使用", [
        "已知且低風險：沿用使用者的語言、account timezone、上次選定的table density；新資料頁先用Standard52px。",
        "可逆的常見選擇：常用日期範圍、最近使用的view。系統須顯示目前預設，並容許清除／reset。",
        "Default來源优先序：此任務明確輸入 → 使用者已儲存偏好 → team設定 → 產品預設。不要以default蓋掉使用者剛改的值。",
      ]),
      s(
        "ChatDaddy 正反例",
        [],
        t(
          ["場景", "建議", "避免"],
          [
            [
              "Broadcast排程",
              "沿用account timezone並清楚顯示",
              "默認立即發送給全部客戶",
            ],
            [
              "Export",
              "預設已明確選取的資料並顯示count",
              "默選All contacts擴大範圍",
            ],
            [
              "Contact form",
              "已有channel context時預填且可改",
              "為減少空白而捏造姓名／電話",
            ],
            [
              "Permissions / consent",
              "要求明確選擇",
              "預先勾選管理員權限／付費選項",
            ],
          ],
        ),
      ),
      s("驗收與量度", [
        "檢查新用戶、回訪者、清除後、跨team、失效偏好；default可解釋、可恢復、可更改。",
        "可觀察完成任務時間與改回default的比例；不能把未改預設直接當成明確偏好或同意。",
        "「不要空白表單」是減少負擔的提示，不是要求每個欄位都有猜測值。",
      ]),
    ],
    source,
  ),
  p(
    "goal-gradient",
    "設計原則",
    "02 · Goal gradient",
    "讓使用者看見已完成的真實工作及清楚終點，把複雜任務拆成可完成的階段。",
    "goal-gradient",
    [
      s("進度如何定義", [
        "先定義可驗收的步驟與完成条件。例如channel setup：選平台 → 授權成功 → 測試連線。",
        "先前真正完成的步驟可以帶入進度；未完成就由0開始。不要只為了看起來接近終點而虛增20%。",
        "步驟進度與network loading不同：3/4個設定不是75%上傳完成。未知工作量用indeterminate或狀態文字。",
      ]),
      s("ChatDaddy 應用", [
        "匯入聯絡人：上傳 → 對應欄位 → 檢查錯誤 → 確認；可返回修改而不重做已完成項目。",
        "新團隊onboarding：已連channel、已新增成員等真實完成项打勾；可以稍後繼續，保留草稿。",
        "流程publish：必填node validation依真正結果更新，不以停留時間假裝完成。",
      ]),
      s("正反例與驗收", [
        "Do：顯示「已完成2/4；下一步：檢查欄位」，並提供回上一步。",
        "Avoid：固定顯示80%、假的倒數、錯誤後仍保留成功check。",
        "驗收step跳過、API失敗、重新登入、返回修改；不可把已失效步驟永遠當completed。",
      ]),
    ],
    source,
  ),
  p(
    "reciprocity",
    "設計原則",
    "03 · Reciprocity",
    "先提供真實、有用的預覽或結果，再讓使用者决定下一步；不要只用模糊承諾要求承諾。",
    "reciprocity",
    [
      s("使用場合", [
        "新功能探索可以先看sample report、template及具體輸出；再選擇套用或儲存。",
        "Import先顯示欄位對應與錯誤預覽，確認有價值後才提交。",
        "Case study以經核實的內容建立信任；示例資料要標示，不可偽裝真實客戶結果。",
      ]),
      s("ChatDaddy 例子", [
        "Automation template提供步驟預覽、所需channel與permission，再按「套用為草稿」。",
        "Analytics試用畫面展示可理解的sample dataset及限制，再讓使用者連接真實資料。",
        "不是所有內容都能免登入：客戶資料、帳戶設定與敏感報告仍須正確auth。",
      ]),
      s("正反例與驗收", [
        "Do：預覽包含足夠資訊做決定，費用／權限／限制清楚。",
        "Avoid：只顯示blurred teaser、先收電話才說功能不支援、以「免費」隱藏必要費用。",
        "檢查預覽到正式套用不丟context，且不會在使用者未確認前寫入真實資料。",
      ]),
    ],
    source,
  ),
  p(
    "ownership",
    "設計原則",
    "04 · IKEA effect & ownership",
    "讓使用者命名、配置、試驗自己的工作成果，再決定儲存或發布。",
    "ownership",
    [
      s("讓成果可見且可恢復", [
        "流程模板可以rename、調整nodes、看preview，最後另行publish。",
        "Saved view可先組filter、density、columns，再決定是否存成個人或team view。",
        "自訂成果應可undo、reset、export；不要利用投入時間迫人付費才能取回原本輸入。",
      ]),
      s("ChatDaddy 例子", [
        "使用者先組好「未分配的WhatsApp對話」view，再填名字與可見範圍。Save按钮明確說明是個人還是team。",
        "Broadcast先寫draft與preview；send是獨立確認，不因編輯完成便默默執行。",
        "Editor有unsaved indicator，離開時可以保存／放棄／取消。",
      ]),
      s("驗收", [
        "測rename、多次修改、reset、離開返回、權限變化；不破壞之前已存內容。",
        "CTA要說實際動作。「Continue」可以用於流程下一步，不能用來掩蓋sign-up、付款或發送。",
        "下方命名示例僅存於此頁記憶體，reload會重置；不能冒充持久儲存。",
      ]),
    ],
    source,
  ),
  p(
    "loss-aversion",
    "設計原則",
    "05 · Loss aversion & status quo",
    "清楚交代變更會失去什麼，以及保留現狀的後果，協助知情決定。",
    "loss-aversion",
    [
      s("使用場合", [
        "刪除、取消排程、離開未儲存編輯、停用channel、降級plan等確有損失的動作。",
        "列出具體影響：3個排程將停止／未儲存草稿將丟失；unknown dependencies就說未能確認，不編造數量。",
        "有undo／復原期間就交代；不可逆才清楚說明不可復原。",
      ]),
      s("尊重使用者的表達", [
        "Do：「離開並放棄未儲存變更？」按鈕「繼續編輯／放棄變更」。",
        "Avoid：羞辱式「我願意冒險」、假deadline、阻止取消、用含糊confirm取得升級授權。",
        "現狀不是永遠最好：若目前連線已失效，應清楚說明現狀問題與恢復路徑，不只強調切換風險。",
      ]),
      s("驗收", [
        "影響對象與count從真實scope取得；若scope改變要重新確認。",
        "Cancel預設安全，keyboard初始focus合理。避免重覆兩三次confirmation造成機械式確認。",
        "高影響操作既要易理解，也要能明確拒絕；不以提高conversion為由隱藏代價。",
      ]),
    ],
    source,
  ),
  p(
    "contrast",
    "設計原則",
    "06 · Contrast effect",
    "提供公平、同單位的對照，讓使用者理解差異；不以不相關的大數字製造錯覺。",
    "contrast",
    [
      s("使用場合", [
        "Plan comparison、功能開關前後、時間／成本節省、A/B流程設定。",
        "對照使用相同期間、currency、稅／費用範圍與資料來源；actual、estimated、sample標清楚。",
        "一個主要差異用視覺層級突出；其餘資訊仍可查閱。",
      ]),
      s("ChatDaddy 例子", [
        "Billing同時顯示目前月費、變更後月費、一次性費用、quota與overage單價；不要只顯示「每日只需…」而藏月付total。",
        "Automation比較舊／新路徑時標出變動node及影響，不只用顏色把新版畫得吸引。",
        "Analytics比較上一期間必須期間長度可比；部分資料不能與完整月份直接宣称改善。",
      ]),
      s("正反例與驗收", [
        "Do：並排列出價值、成本、限制與差異，允許保持原方案。",
        "Avoid：虚构原價、無關anchor、只有百分比而無絕對額、預設昂貴方案卻不說明。",
        "驗收monthly/annual切換、currency、長方案名、手機堆疊；對照欄位仍一一對應。",
      ]),
    ],
    source,
  ),
  p(
    "compression",
    "設計原則",
    "07 · Visual compression",
    "用恰當的字重、標記與分組減少重複資訊；精簡不等於移除理解所需的內容。",
    "compression",
    [
      s("四個步驟", [
        "1. 熟悉身份可以用正式logo／glyph輔助，陌生操作保留label。",
        "2. 先排權重：一個primary action、一個主要資料身份，其餘降為secondary。",
        "3. 刪除重複詞：欄位header已寫「狀態」，每列不再重複「狀態：」。",
        "4. 把會誤導的重複限定語拿走；真的有差別則清楚命名，不只縮短。",
      ]),
      s("ChatDaddy 例子", [
        "Inbox row：name最重、snippet次要、channel小型標記、time靠右；不讓四行同樣粗。",
        "Tags可收為兩個＋N，但+N可展開；完整日期不能壓成一個無法查閱的省略號。",
        "Toolbar低頻assign/tag操作可hover/focus reveal，主要create/search仍常駐。",
      ]),
      s("驗收", [
        "先讓新用戶說明各icon與資料意思。若需要猜，就恢復label或提供更直接上下文。",
        "不能以減少文字為由刪currency、timezone、permission原因、error recovery或破壞性操作對象。",
        "比較精簡前後：應更快掃描，且保留keyboard／touch可達性與資料完整性。",
      ]),
    ],
    source,
  ),
  p(
    "visual-path",
    "設計原則",
    "08 · Visual path",
    "用對齊、順序與視覺權重引導掃描；不要讓所有元素同時爭取注意力。",
    "visual-path",
    [
      s("Dense 與 sparse layouts", [
        "密集工作頁採清楚左側基線：table identity、inbox sender、settings section title先被找到。F式掃描可作設計heuristic，不是所有人必然的眼動規律。",
        "稀疏介紹頁可由brand／headline→proof→action建立路徑；Z式構圖只是工具，不能無視RTL與任務順序。",
        "不要為了視覺路徑而讓DOM focus order與視覺順序不一致。",
      ]),
      s("ChatDaddy 應用", [
        "Contacts：header主標題和create，接着toolbar，最後rows；每行identity同一基線，數字靠右。",
        "Login：heading→fields→login→secondary links；case study不要把視線引離auth錯誤。",
        "Dashboard：summary→trend→detail；保留label讓人知道圖表在解釋哪個數字。",
      ]),
      s("驗收", [
        "請新設計師／使用者指出「我在哪裡、現在看什麼、下一步做什麼」；三個答案應不需逐字讀頁。",
        "手機stack後再次檢查順序；desktop右上CTA不能跑到手機很後面。",
        "Center alignment適用短empty state／brand內容，不作所有settings/body text的預設。",
      ]),
    ],
    source,
  ),
  p(
    "logical-flow",
    "設計原則",
    "09 · Logical flow",
    "按使用者提出問題的順序安排資訊，讓每個區段自然帶到下一步。",
    "logical-flow",
    [
      s("資訊順序", [
        "介紹／新功能：做什麼→為什麼可信→對我有何幫助→具體證據→下一步。",
        "工作頁：我在哪裡→目前scope／state→可操作資料→action→結果。不是每頁都硬套marketing敘事。",
        "設定流程：必要背景→輸入→驗證→review→confirm；不要先要求確認再展示費用或影響。",
      ]),
      s("ChatDaddy 應用", [
        "Broadcast review先顯示recipient/channel/content/schedule與費用，再出send confirmation。",
        "Connection失敗先解釋原因及reconnect，再展示optional onboarding；不要先彈新功能宣傳。",
        "Import先展示欄位及錯誤，再要求提交，最後提供結果及error report。",
      ]),
      s("驗收", [
        "逐section問「這段回答什麼問題？」無問題可答的裝飾段落可以刪掉或收起。",
        "重新載入／deep link仍提供足夠context，不假設使用者看過上一頁。",
        "成功結果要連到合理下一步；失敗結果要保留可恢复的任務上下文。",
      ]),
    ],
    source,
  ),
  p(
    "hover",
    "版面與導航",
    "Hover 與漸進披露",
    "善用hover保持頁面簡潔，讓次要操作在需要時出現；重要功能不能只能靠滑鼠發現。",
    "hover",
    [
      s(
        "適合hover的情境",
        [],
        t(
          ["情境", "Hover feedback", "等效入口"],
          [
            [
              "Conversation/table row",
              "顯示Assign、Add tag、More",
              "focus-within亦顯示；touch常駐overflow",
            ],
            [
              "Collapsed side panel",
              "暫時展開label／filters",
              "click/focus可開；pin決定持久狀態",
            ],
            [
              "Icon-only utility",
              "tooltip顯示名稱",
              "focus顯示；accessible label常在",
            ],
            [
              "可點card",
              "border/tint/lift暗示可操作",
              "focus ring；click才真正執行",
            ],
            [
              "Integration / App card",
              "顯示次要 Settings",
              "主要「連結」常駐；focus-within 顯示；touch 常駐 Settings / More",
            ],
            [
              "Compact channel row",
              "顯示低頻 reconnect / 設定",
              "連線狀態及必要身份常駐；focus-within／touch 可達",
            ],
            [
              "內容preview",
              "輕量補充不改route",
              "明確preview button，click/touch可打開",
            ],
          ],
        ),
      ),
      s("Hover 不應做什麼", [
        "不發送、不刪除、不扣款、不自動改篩選或切換客戶；hover只提供資訊／affordance。",
        "主要操作、阻斷任務時唯一的 error recovery、身份、電話（若為工作判斷必要）、狀態及必填說明常駐。Compact row 中已有清楚錯誤狀態與其他恢復路徑時，低頻 reconnect 控件可逐步顯示；不可把恢復能力本身藏掉。",
        "教程係內容，不係裝飾 icon；開始連結或遇到錯誤先 contextual reveal，唔好用永久 book icon 搶主要動作。",
        "Hover preview不能遮住正在閱讀的主要內容，移入preview本身時保持開啟，不要在trigger到panel之間閃退。",
      ]),
      s("開關、延遲與focus", [
        "簡單按鈕hover即時回應；tooltip或大preview可採約150–250ms開啟、100–200ms關閉的候選delay，實測避免晃過誤觸。",
        "Pointer leave只有在focus也不在panel／其popup內時才hide。Escape可dismiss；click pin後不受pointer leave影響。",
        "Touch / coarse pointer沒有hover；CSS @media(hover:none)顯示secondary actions或永遠可達的More。Tab focus用focus-within揭示。",
      ]),
      s("實際驗收", [
        "移入row→移到action→移到popup→返回row→離開；途中不能丟失popup。",
        "Tab進row action、Shift+Tab、Escape、touch、200% zoom；功能一致。",
        "狀態點／未讀數留在原位；hover 只換出次要工具，不令電話、名稱或主要 CTA 消失。若 pin 已處理常駐，先確認獨立 collapse 按鈕是否重複。",
        "下方示例可hover/focus顯示次要操作，並可pin panel；沒有連接真實conversation。",
      ]),
    ],
    ["spec/navigation.md", "spec/data-display.md", "spec/icon-identity.md"],
  ),
];
