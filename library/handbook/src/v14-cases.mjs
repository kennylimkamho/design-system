import { page as p, section as s, table as t } from "./model.mjs";

const appRevision = "1440000bd58275bbd347aa2141427b35ca1a0f19";
const appSource = (path) => ({
  title: `App source · ${path} @ ${appRevision}`,
  url: `https://github.com/chatdaddy/frontend-dashboard/blob/${appRevision}/${path}`,
  kind: "observed-source",
});

export const caseStudies = [
  {
    id: "case-broadcasting", title: "Broadcasting", module: "channels",
    job: "向合適客戶傳達訊息，掌握發送動態，再用結果改善下一次。",
    stages: ["策劃與設定", "執行與掌握動態", "結果、補救與學習"],
    baseline: "現況重構示意 · 根據 App 原始碼及經匿名重建嘅用戶參考圖；不是逐像素歷史截圖。",
    after: "Design System 提案 · 三段工作循環同等重要；未改 App。",
    beforeScene: ["建立表單有多組受眾／訊息／排程控制", "Overview、報表與歷史清單分佈在不同視角", "大量 KPI、圖表及長 table 易令『下一步』失焦"],
    afterScene: ["建立：對象 → 內容／渠道 → 時間 → 審閱 → 明確確認", "運行：真實 job 狀態、更新時間、失敗與可用補救", "結果：可篩選歷史、可核對成效、下一次可採取嘅動作"],
    evidence: [appSource("src/Broadcasts/AddEditBroadcast.tsx"), appSource("src/Broadcasts/List.tsx"), appSource("src/Broadcasts/OverviewDashboard/index.tsx")],
    sources: ["spec/feature-workspaces.md", "spec/data-display.md", "spec/content-timing.md", "spec/module-code-extraction.md"],
    sections: [
      s("01 · 任務與持久循環", [
        "Marketing 先決定聯絡哪群人、傳甚麼、經甚麼渠道、何時傳；送出後要知道進展；完結後要理解成功、失敗與下一次點改善。渠道、訊息格式同 UI 可以演進，三段工作唔應消失。",
        "『完成建立』『開始發送』『已送達』『產生業務結果』係不同里程碑。Case Study 唔將前一步成功塗成後一步成功；唔使用虛構轉化率證明設計有效。",
      ]),
      s("02 · 現況證據同改前問題", [
        "App snapshot 具備 AddEditBroadcast、List、OverviewDashboard、速度／對象相關控制。呢啲係觀察到嘅原始碼面，唔代表每種計劃、權限或渠道都可使用，亦唔證明指標定義已核實。",
        "用戶提供嘅合成圖顯示首頁 KPI、延伸 analytics、建立頁及長歷史 table。公開圖係由原圖重新生成、完全去文字及數字嘅參考視覺；不能用它還原原始 campaign。",
        "改前畫面係『現況重構示意』，唔係聲稱曾有一個特定歷史版本。研究重點：建立任務複雜、結果分散、table 掃描成本高、預測與實際數據容易混淆。",
      ]),
      s("03 · 建立與送出前審閱", [
        "建立順序按決策依賴：對象與排除條件 → 訊息／visual／策略 → 渠道能力 → 時間與時區 → 審閱。高級速度或時段調整按需展開，但一旦影響費用、風險或收件範圍就必須在確認前顯示。",
        "審閱摘要直接列出 recipient scope/count（只在 backend 有可信 total 時）、內容預覽、渠道、排程日期與時區、已核實費用、規則與不可逆後果；缺乏必要資料時阻止確認並講清楚原因。",
        "Draft save 同 Send 分開；確認前可以返回修改，保留資料及焦點。示例 send control 唔連接產品 API；真實 send 仍由 App 權限及服務回傳決定。",
      ]),
      s("04 · 運行中掌握動態", [
        "發送中以明確 status、最後更新時間、已處理／待處理／失敗數與資料覆蓋交代進度。只顯示服務提供嘅真實值，唔用動畫、時間估算或客戶端計數假扮 job progress。",
        "暫停／取消／重試只在後端及權限支持時出現，並分清取消未送出項目與刪除草稿。部分失敗須指出影響範圍與下一步；未知狀態要明示暫不可判斷。",
      ]),
      s("05 · 歷史 table 與分析", [
        "歷史 table 服務比較與追查：名稱、狀態、渠道、計劃／實際時間、對象範圍、送達／失敗／未知及查看詳情。Draft／Scheduled／Sending／Completed 係同一資料集的篩選或 saved view，不自動升格做另一套導航。",
        "總覽 KPI 先回答『有冇進行中、邊啲需要處理』；詳細 analytics 才比較趨勢、成本與互動。任何 rate 顯示分母、時間範圍、時區、來源、資料覆蓋及最後更新；tracking unavailable、partial、no data、true zero 要分開。",
        "圖表必須有文字／table 替代、鍵盤可讀 exact values。預測、最佳時間及優化建議如未有可靠資料，顯示收集中或待驗，不以未經核實計算作產品承諾。",
      ]),
      s("06 · 易用、可信賴、可持續演進", [], t(["標準", "設計取捨", "反例"], [
        ["易用", "一條由建立到結果嘅連續路徑；複雜設定按需要展開；歷史可快速找。", "所有 advanced controls 與分析一次過放首頁。"],
        ["可信賴", "明確 send review、真實進度、未知與失敗可見、每個 metric 可核對。", "用假進度、假 total 或無分母百分比營造成功。"],
        ["可持續演進", "共享工作階段與狀態，渠道差異以能力／限制明示。", "每加一個渠道就複製一套無法比較的流程。"],
      ])),
      s("07 · 狀態與驗收", [
        "測試首次無 campaign、draft、scheduled、sending、partial failure、completed、filtered empty、load error、no permission、渠道失效與缺 metric 定義。返回建立流程要保留已輸入資料，返回 table 要保留搜尋／篩選／位置。",
        "桌面、手機、鍵盤、focus、reduced motion 均可完成審閱而不誤送。驗收問：用戶能否在送出前說出影響對象與後果？送出後能否找回 job？失敗後能否知道點處理？結果能否支持下一次決策？",
        "本章係 Design System 提案；觀察到的 App source 不等於全部提案已部署。整體規則仍以『Channels 與 Broadcasts』及資料顯示章節為準。",
      ]),
    ],
  },
  {
    id: "case-contacts", title: "Contacts", module: "contacts",
    job: "搵到正確聯絡人、理解資料，再喺清楚範圍內完成更新。",
    stages: ["尋找及縮窄", "檢視與判斷", "編輯／批次與返回"],
    baseline: "現況重構示意 · 以 Audience 資料頁、欄位及篩選原始碼作根據。",
    after: "Design System 提案 · 保持工作上下文同批次範圍可見；未改 App。",
    beforeScene: ["搜尋、篩選、欄位與多種操作競爭同一工具列", "開 detail 時列表上下文容易被打斷", "批次範圍要靠操作者自己記住"],
    afterScene: ["搜尋與 active filters 先回答『我睇緊邊群人？』", "table 用可比較欄位，detail 保留返回位置", "選取之後才露出批次操作與影響數"],
    evidence: [appSource("src/Audience/index.tsx"), appSource("src/Audience/contactColumns.tsx"), appSource("src/Audience/AudienceBulkActionDropdown.tsx")],
    sources: ["spec/feature-workspaces.md", "spec/data-display.md", "spec/cross-task-design-audit.md"],
    sections: [
      s("01 · 任務及可用證據", ["Contacts 係管理同類紀錄：用戶通常先按名稱、電話、來源或標籤收窄，再打開 detail 判斷，最後編輯或批次處理。單一新建表單與多列比較唔應被同一種版面硬套。", "App snapshot 有 Audience 列表、contactColumns、filter 及 bulk action；案例只記錄原始碼觀察，唔聲稱每個欄位、total 或批次權限喺所有帳戶都可用。"]),
      s("02 · 改前／改後及取捨", ["改前重構聚焦工具列過密、detail 返回易失去查找位置、批次 scope 唔夠顯性嘅風險；呢啲係設計審查問題，唔冒充已量化用戶痛點。", "改後由『查找範圍 → 比較表格 → 詳情 → 有範圍操作』組織頁面。表格只放身份、可比較狀態與實際決策有用的欄位；長資料到 detail，唔為填滿畫面而加欄。"]),
      s("03 · 主要流程與例外", ["Filtered empty 保留 query/filter 同 Clear 入口；loading 唔扮首次使用。選取跨頁時直接顯示作用範圍與可信總數，批次失敗顯示成功／失敗子集及恢復。", "手機優先單列卡片與可達的 detail；如比較確實需要多欄，可以提供有標籤且鍵盤可捲動的 table，不可截斷身份同主要操作。"]),
      s("04 · 三項原則", [], t(["標準", "案例要求"], [["易用", "搜尋、篩選、詳情及返回連續，批次只在選取後出現。"], ["可信賴", "total、scope、save 結果與部分失敗由真實資料支援。"], ["可持續演進", "表格欄位可按任務改變，但身份、範圍與返回契約不變。"]])),
      s("05 · 驗收及狀態", ["驗收長姓名、多語、缺電話、多標籤、loading、filtered no-match、no permission、編輯驗證錯誤、跨頁選取及返回後狀態。", "改後係設計提案；資料來源與權限仍留 App。對應現有 Contacts 規格，唔將示例人名或計數當真資料。"]),
    ],
  },
  {
    id: "case-inbox", title: "Inbox", module: "inbox",
    job: "找出需回覆嘅對話，在足夠上下文中回覆、分配與跟進。",
    stages: ["識別待處理", "閱讀／回覆／分配", "確認狀態與跟進"],
    baseline: "現況重構示意 · 以 InboxV2 filter、chat row、message pane 原始碼作根據。",
    after: "Design System 提案 · 降低常駐雜訊但保留必要資訊；未改 App。",
    beforeScene: ["Filters、渠道與 assignee 可能佔用大量常駐空間", "對話列資訊、標籤同 row action 同時競爭視線", "訊息時間與狀態須檢查其可讀性"],
    afterScene: ["必要 scope、未讀、身份常駐；次要工具按需展示", "列表 → thread → inspector 保持可回退", "完整日期、實際 delivery 與草稿上下文可核對"],
    evidence: [appSource("src/InboxV2/FilterPanel/ConversationFilters.tsx"), appSource("src/InboxV2/ChatList/ChatRow.tsx"), appSource("src/InboxV2/MessagePane/MessageBubble.tsx")],
    sources: ["spec/cross-task-design-audit.md", "spec/live-state-design-concerns.md", "spec/feature-workspaces.md"],
    sections: [
      s("01 · 任務及可用證據", ["客服先知道邊啲對話需要自己處理，再讀對話／客戶背景，然後回覆、轉交或跟進。高頻任務可以 compact，但身份、狀態及下一步唔可因密度而消失。", "App snapshot 包含 filter panel、chat row、message bubble 等來源；案例唔推斷所有渠道都提供相同 read receipt 或 24 小時限制。"]),
      s("02 · 改前／改後及取捨", ["改前重構呈現 filter、列表 row、message metadata 之間的視覺競爭；係根據程式與原則整理，唔係聲稱單一歷史 screenshot。", "改後規範：channel／assignee 一項一行；scope、未讀、姓名與必要狀態常駐；assign、+tag 等低頻動作於 hover/focus 顯示，touch 另有明確入口。"]),
      s("03 · 主要流程與例外", ["切換 thread 保留合適嘅 scroll／草稿；絕不能把一個客戶的文字帶入另一個客戶發送。完整日期時間可見或可直接展開，訊息失敗、斷線、視窗關閉要有可用補救。", "Collapsed panel 可短暫 hover 展開，但 keyboard focus 留在 panel 時不自行關閉；手機改為列表／thread 分頁，composer 不被鍵盤蓋住。"]),
      s("04 · 三項原則", [], t(["標準", "案例要求"], [["易用", "找到待處理範圍快，回覆與分配不需穿越多層選單。"], ["可信賴", "時間、未讀、傳送狀態與權限都如實可見。"], ["可持續演進", "新渠道沿用對話工作模型，只在實際能力有差異處分支。"]])),
      s("05 · 驗收及狀態", ["測試無對話、篩選無結果、長名稱、附件失敗、多渠道、內部備註、切換 thread、桌面 hover/focus、touch、reduced motion。", "改後係 Design System 提案；對話發送與分配仍由 App 既有 mutation、權限同狀態決定。"]),
    ],
  },
  {
    id: "case-automation", title: "Automation", module: "automation",
    job: "定義可靠觸發與動作，安全測試，發布後仍可監察及修正。",
    stages: ["理解與建立", "編輯／測試／發布", "監察及修正"],
    baseline: "現況重構示意 · 以 FlowBuilder workspace、save、onboarding source 作根據。",
    after: "Design System 提案 · 保留畫布上下文與草稿安全；未改 App。",
    beforeScene: ["功能與 node 選擇容易先於用途說明", "canvas、inspector、toolbar 同時競爭寬度", "儲存、測試、發布嘅含義可能混淆"],
    afterScene: ["先講用途、觸發與結果，再選 blank／template", "canvas 為主，選中 node 才顯示相關 inspector", "未儲存、測試結果、發布狀態明確分層"],
    evidence: [appSource("src/FlowBuilder/GlobalFlowBuilder.tsx"), appSource("src/FlowBuilder/FlowSave.tsx"), appSource("src/FlowBuilder/FlowOnboardingWizard.tsx")],
    sources: ["spec/feature-workspaces.md", "spec/components.md", "spec/live-state-design-concerns.md"],
    sections: [
      s("01 · 任務及可用證據", ["自動化任務由『想咩時候發生咩結果』開始，而唔由新增 node 開始。建立後有編輯、測試、儲存、發布與回訪修正，缺任何一段都會令 flow 難以信任。", "App snapshot 有 GlobalFlowBuilder、FlowSave 同 FlowOnboardingWizard；案例唔推斷未核實嘅 trigger、node 或執行狀態。"]),
      s("02 · 改前／改後及取捨", ["改前重構呈現功能入口、node library、inspector、toolbar 同時出現可能造成的認知負荷；以程式審查與現有設計原則作基礎，不冒充已量測可用性。", "改後先用一句目的與一個具體例子說明結果，再選建立方法；同一 editor 保持畫布中心、所選 node 的 contextual inspector，工具列清楚區分儲存、測試與發布。"]),
      s("03 · 主要流程與例外", ["未儲存內容有可見標記；離開時可儲存／放棄／取消。測試失敗保留 flow 與錯誤位置，不以『已儲存』暗示『已發布』。", "狹窄畫面如無法完整編輯 graph，明確提供檢視或受限編輯，不用被裁切的 canvas 假裝功能齊全。"]),
      s("04 · 三項原則", [], t(["標準", "案例要求"], [["易用", "目的、選擇方式同 node inspector 按任務順序出現。"], ["可信賴", "draft、tested、published、failed 為不同狀態，動作回饋由真實結果決定。"], ["可持續演進", "新增 node 沿用 trigger/action、測試、發布同監察契約。"]])),
      s("05 · 驗收及狀態", ["測試初次空白、template、無權限、node validation、未儲存離開、測試失敗、發布等待、已發布再修改、鍵盤與 reduced motion。", "案例改後仍屬提案；現有 graph state、API、發送行為同 permissions 不由 Handbook 修改。"]),
    ],
  },
  {
    id: "case-integration", title: "Integration", module: "integrations",
    job: "找到合適整合，清楚授權連結，之後能管理或恢復連線。",
    stages: ["探索適合嘅 app", "授權與連結", "管理及恢復"],
    baseline: "現況重構示意 · 以 AppStore browser、filter、installer source 作根據。",
    after: "Design System 提案 · 由探索優先轉向真實連接狀態；未改 App。",
    beforeScene: ["App catalog 與連線管理概念容易混在一頁", "卡片上設定、教學、說明可能早於連結 CTA", "連線成功與平台身份容易靠 logo 推測"],
    afterScene: ["先按用途、品牌及搜尋搵到要連結嘅 app", "未連結卡片常駐『連結』；教學於開始／出錯時出現", "連結中、已連結、失敗各有狀態與恢復路徑"],
    evidence: [appSource("src/AppStore/AppStoreBrowser.tsx"), appSource("src/AppStore/AppStoreFilters.tsx"), appSource("src/AppStore/AppStoreInstaller.tsx")],
    sources: ["spec/feature-workspaces.md", "spec/icon-identity.md", "spec/live-state-design-concerns.md"],
    sections: [
      s("01 · 任務及可用證據", ["用戶首先想知道有咩 App 可以達成佢嘅工作目標，之後先考慮授權、設定同維護。Catalog、連接流程同已連接清單係同一條旅程的不同時刻，唔係一張泛用資料表。", "App snapshot 有 AppStore browser、filters 與 installer；公開示例唔顯示真實連線狀態或假 OAuth 成功。"]),
      s("02 · 改前／改後及取捨", ["改前重構聚焦探索與設定資訊同時擺喺卡片可能造成的主次不分；呢個係設計議題，不係未經驗證的使用者失敗率。", "改後未連結卡片先展示可辨認身份、用途與常駐『連結』；secondary Settings 可 hover/focus 顯示，touch 有 More 入口。Tutorial 放喺開始連結或遇錯時，不搶主要入口。"]),
      s("03 · 主要流程與例外", ["連結前顯示已核實權限、費用或不可逆影響；連結中保留返回上下文；失敗顯示原因與重試；已連結清楚標示帳戶及健康狀態。", "Coming soon 不能用可按假 CTA；平台 logo 表身份，不表示已連結；WhatsApp Mobile／Business／Coexistence／Cloud API 必須以文字區分，唔靠圖形猜。"]),
      s("04 · 三項原則", [], t(["標準", "案例要求"], [["易用", "先探索與連結，再按需要看設定及教學。"], ["可信賴", "授權與可用性由服務、權限與文件核實，狀態不能靠 logo 暗示。"], ["可持續演進", "新 app 沿用 catalog → connect → manage/recover 契約。"]])),
      s("05 · 驗收及狀態", ["驗收搜尋、分類、長品牌名、未連結、pending、失敗、限制、已連結、斷線、手機、鍵盤及授權返回後原有 query。", "改後係 Design System 提案，OAuth、API、可用性與權限都仍由 App 擁有。"]),
    ],
  },
];

export const casePages = caseStudies.map((study) => {
  const page = p(study.id, "Case Study Library", `${study.title} · Before / After`, study.job, study.id, study.sections, study.sources);
  page.references = study.evidence;
  page.status = "proposal";
  page.scenarios = study.stages;
  return page;
});
