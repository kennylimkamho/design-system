import {page, section as s, table as t} from './model.mjs';

export const industryCheckedAt = '2026-10-01T14:49:55+08:00';
export const industrySources = [
  {id:'meta-flows',title:'Meta · WhatsApp Flows 產品定位',url:'https://whatsappbusiness.com/products/whatsapp-flows/',kind:'official-meta',access:'read'},
  {id:'meta-pricing',title:'Meta · 公開 pricing 頁（與提交資料有衝突）',url:'https://whatsappbusiness.com/products/platform-pricing/',kind:'official-meta',access:'read'},
  {id:'aws-limits',title:'AWS · Flows limitations（AWS 整合範圍）',url:'https://docs.aws.amazon.com/social-messaging/latest/userguide/managing-flows-limitations.html',kind:'provider-documentation',access:'read'},
  {id:'aws-assets',title:'AWS · UpdateWhatsAppFlowAssets / 重新發布',url:'https://docs.aws.amazon.com/social-messaging/latest/APIReference/API_UpdateWhatsAppFlowAssets.html',kind:'provider-documentation',access:'read'},
  {id:'twilio-flows',title:'Twilio · Flows、提交 webhook 與資料限制',url:'https://www.twilio.com/docs/content/whatsapp-flows',kind:'provider-documentation',access:'read'},
  {id:'sprinklr-iab',title:'Sprinklr · IAB 觸發與資格（未獲 Meta 原文核實）',url:'https://www.sprinklr.com/help/articles/whatsapp-webview-support/whatsapp-business-webview-support-inapp-browser-iab/691304747e4ef1475ff48386',kind:'provider-documentation',access:'read'},
  {id:'meta-components',title:'Meta · Flow components（本次存取受限，待核對）',url:'https://developers.facebook.com/docs/whatsapp/flows/reference/components',kind:'official-meta',access:'not-verified-this-review'},
  {id:'meta-changelog',title:'Meta · Flow changelog（本次未核實）',url:'https://developers.facebook.com/docs/whatsapp/flows/changelogs',kind:'official-meta',access:'not-verified-this-review'},
  {id:'meta-service-pricing',title:'Meta · Non-template pricing（本次存取受限）',url:'https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing/non-template-messages/',kind:'official-meta',access:'not-verified-this-review'},
];
// Evidence is contextual, not a runtime entitlement or an implementation promise.
export const industryClaims = [
  {id:'native',status:'official-source',text:'Flows 喺 WhatsApp 內完成多步任務；Meta 提供 builder／API。',sources:['meta-flows']},
  {id:'webhook',status:'provider-documented',text:'Twilio 整合：提交經 sender webhook 返回，InteractiveData 載有結構化答案；其他 provider 欄位另核對。',sources:['twilio-flows']},
  {id:'flow-limits',status:'provider-documented',text:'AWS：Flow JSON 定義最大 10 MB；動態 endpoint 須在 10 秒內回應。呢個 10 MB 唔等於每次 data exchange payload 上限。',sources:['aws-limits']},
  {id:'publish',status:'provider-documented',text:'AWS：修改已發布 Flow assets 會返回 DRAFT，須重新發布；唔可以當成已發布畫面可直接熱更新。Meta 直接 API 契約另核對。',sources:['aws-assets']},
  {id:'iab-scope',status:'provider-documented',text:'Sprinklr 記錄 marketing／utility template CTA URL 開 IAB；free-form／reply links 仍開外部瀏覽器，亦可由用戶選外部開啟。',sources:['sprinklr-iab']},
  {id:'iab-entitlement',status:'provider-documented',text:'Sprinklr 記錄每日 1,000 或以上 messaging limit；呢個係容量門檻，唔係每日一定要發 1,000 條。帳戶與 rollout 必須再核實。',sources:['sprinklr-iab']},
  {id:'iab-payments',status:'provider-documented',text:'Sprinklr 記錄 payment links 可開 IAB；唔代表每個支付 SDK、3DS、登入、deep link 或 permission 都正常。',sources:['sprinklr-iab']},
  {id:'pricing',status:'conflicting-sources',text:'提交資料稱 2026-10-01 開始 service 按條收費、每號碼每月首 1,000 條免費；本次可讀 Meta 公開頁仍稱 service 免費。生效規則未解決，不作免費或收費承諾。',sources:['meta-pricing','meta-service-pricing']},
  {id:'component-limits',status:'needs-verification',text:'提交嘅每頁 50 元件、80／20／35 字、20／200／100 選項、3 張 base64 圖及 100 KB 圖片限制：須按元件與 Flow JSON 版本逐項核對。',sources:['meta-components']},
  {id:'upload-logic',status:'needs-verification',text:'提交嘅上傳 10 個／合共 100 MB、If／Switch 3 層：未完成官方版本核對，唔做通用 hardcoded validator。',sources:['meta-components']},
  {id:'rollout-devices',status:'needs-verification',text:'提交嘅 2023-10／2025-05／2025-11 推出日期、Android 6、2025-12 Web 支援、全球覆蓋：未完成官方核對；日期唔等於某帳戶已可用。',sources:['meta-changelog']},
  {id:'eligibility',status:'needs-verification',text:'Flows verification／quality 資格、IAB interactive 或內文 link 開放時程、Desktop／Web 支援：需確認當前帳戶、訊息種類與客戶端。',sources:['meta-changelog','sprinklr-iab']},
  {id:'data-api',status:'needs-verification',text:'Data API 4.0 簽名、敏感欄位、endpoint payload、Metrics API：本次未核實。唔以 JSON 定義大小代替 endpoint 限制。',sources:['meta-components','meta-changelog']},
  {id:'browser-capabilities',status:'needs-verification',text:'IAB 相機／AR、檔案上傳、cookies、deep links、User-Agent 識別與 Meta Pixel：按 OS、client、permission 及 consent 實測；唔寫成無限制或保證。',sources:['sprinklr-iab']},
];
const labels = {'official-source':'官方來源已讀','provider-documented':'供應商記錄 · 有範圍','conflicting-sources':'來源有衝突','needs-verification':'待核實'};
export const industryPage = page('industry-whatsapp-flows-iab','Industry Info · 行業資訊','Industry Info · WhatsApp Flows / IAB','兩條路都可以留喺 WhatsApp 入面完成工作：Flows 係平台提供嘅原生體驗，IAB 係開啟你自己嘅網頁。行業參考，唔係已部署能力或永久政策。','industry-whatsapp',[
  s('基本定位：同一個入口，兩種技術',[
    'Meta 產品頁介紹 Flows 用於 signup、預約及其他 WhatsApp 內任務；可由 builder 或 API 建立。Flow JSON／元件由平台 renderer 呈現，唔係自由 HTML 網頁。來源：Meta Flows；JSON 與 input 整合：Twilio。',
    'IAB（In-app Browser）係 WhatsApp 內嘅 browser view，載入 business 自己嘅網站；網頁由你維護，容器行為由 client 控制。來源：Sprinklr IAB 記錄，未獲本次 Meta developer 原文確認。',
    'WhatsApp Flows 唔等於 ChatDaddy Automation / Message Flow。前者係客戶填寫／互動畫面；後者係工作流程編排，可以在適當能力與權限下接入前者。',
  ],t(['比較','WhatsApp Flows','IAB'],[
    ['畫面所有權','Flow JSON＋平台元件；視覺要服從 renderer','你嘅網站；HTML／CSS／JS；browser chrome 唔由你控制'],
    ['完成事件','依 provider webhook／backend 確認提交結果','由網站與 backend 確認提交／訂單／付款'],
    ['設計自由度','在當前版本支援元件內設計','較自由；仍受 WebView、OS、效能與權限限制'],
  ])),
  s('觸發、资格與装置：唔可以假設全部都有',[
    'Twilio 文件示範以 template 按鈕開啟 Flow，亦提及 in-session 使用。實際 template approval、窗口、Flow status 同 sender 能力，要跟目前整合核對。',
    'Sprinklr 記錄 IAB 適用 marketing／utility template CTA URL，唔套用到普通訊息內文／reply links；自動啟用並容許外部 browser。佢記錄 1,000/day 容量門檻，未獲本次 Meta 原文核實。',
    '呢度唔保證特定推出日、地區或 Web／Desktop 支援。資格讀真實帳戶狀態；未知顯示「待確認」。IAB 冇開啟時，外部網站仍然要完成到同一項工作。',
  ]),
  s('UI 與元件限制：版本化，唔係一組永久數字',[
    'Flow 字數、選項、圖片、上傳及條件邏輯，都要記錄 component、Flow JSON version、文件來源同測試日期。未核實數字只放核對清單，唔進 tokens 或 validation。',
    'IAB 網頁仍需 responsive layout、可見 focus、slow network／error／resume 同 browser fallback。較自由唔等於元件、大小、等待或傳輸無限制。',
    'AWS 文件列 Flow JSON 定義 10 MB；勿將呢個數字寫成 data exchange endpoint payload limit。其支援版本名單只代表 AWS 文件當時範圍，不代表所有 provider。',
  ]),
  s('資料、身份、後端與 analytics',[
    'Twilio 提交 webhook 嘅 InteractiveData 有答案；用戶識別、correlation 同 Flow token 要跟 provider 合約處理。收到 callback 後由 backend 去重、驗證並記錄真實結果；唔靠 UI 結尾判斷已完成。',
    'IAB 唔會因為網頁喺 WhatsApp 開啟就自動獲得使用者電話。建議用短效、限制用途嘅 opaque token，再由 server 驗證；避免將電話、secret 或敏感資料直接放 URL。呢條係 ChatDaddy 安全設計建議，唔係 Meta 對 IAB 嘅身份保證。',
    'AWS 列 dynamic Flow endpoint 10 秒回應要求；一般網站亦受連線、proxy、支付與 SDK timeout 限制。兩邊都需 timeout、保留輸入同可重試；唔寫 IAB「冇限制」。',
    '分開 click → opened → submitted → backend accepted → 業務成功。User-Agent 唔係身份證明；analytics、tracking 同 consent 要另行驗證，唔因為 IAB 就假設 Meta Pixel 已可用。',
  ]),
  s('合規與敏感資料：換容器唔等於合規',[
    'Twilio 文件對其 Flows 服務明確警告唔用於需 HIPAA／PCI 合規嘅資料工作。呢個係該 provider 合約邊界，唔擴張成所有地區法律判斷。',
    'IAB 只係載入網頁，唔會自動令醫療或支付流程合規。先經安全／法務／provider review，確認資料最少化、consent、存取、保留、支付 SDK 同 logging。',
    'ChatDaddy 設計建議：敏感資料未獲批准前，唔推薦任何一邊直接收集。遮蔽／sensitive 欄位亦唔等於免除 backend、webhook 或合規責任。',
  ]),
  s('成本與生效日期：目前有來源衝突',[
    'Meta 公開 pricing 頁記錄按 delivered message、market/category 收費，並仍記錄 service 免費；提交摘要則稱 2026-10-01 生效 service 按條收費與首 1,000 條額度。Developer pricing 本次存取受限，未解決衝突。',
    '保留呢兩個來源而唔揀一個假裝已核實。成本顯示應引用可確認嘅 rate card／帳戶公告，標明生效日、地區、幣別、message category 同 provider 額外費用；未知顯示「費用待確認」。',
    '唔將 Flows／IAB「功能免費」推演成發訊息、主機、網站開發、provider 或支付全部免費。未核對當前政策前，不寫所有 Flow 按同一類訊息收費。',
  ]),
  s('發布、版本與維護',[
    'AWS UpdateWhatsAppFlowAssets 文件寫明更新已發布 assets 會返回 DRAFT，需要重新發布；唔可以寫成 published Flow 直接熱改。Meta 直接 API／其他 provider 操作另核對。',
    'Flow JSON、Data API、message template 同業務流程版本分開記錄；先 validation／preview／權限與資料 review，再發佈／確認依賴。網站雖可獨立部署，亦要兼容舊 URL、token、client 同未完成 session。',
    'ChatDaddy 建議採用可追溯版本與回復路徑，保留已送出 campaign 對應嘅 Flow／網頁版本。未知能力唔由前端示例或 rollout 日期推定。',
  ]),
  s('點揀：由工作與風險開始',[],t(['任務','初步設計方向（建議，唔係功能承諾）','上線前確認'],[
    ['簡短 lead／問卷／預約','先評估 Flows，保持少步與清楚提交結果','帳戶資格、元件版本、webhook、重試'],
    ['品牌化 landing／checkout／既有網站','先評估網站＋IAB，保留外部 browser fallback','支付／登入／3DS／cookies／client 實測'],
    ['醫療／支付卡／其他敏感資料','先做合規與 provider review，唔自動指定 IAB','已批准資料契約、留存、權限與 SDK'],
    ['提交後即刻回到客服工作','Flows callback 或網站 server event 都可以作整合方向','真實 backend result、身份綁定、去重；唔靠關窗判斷'],
    ['IAB 資格未知／未達門檻','網站仍需外部開啟；Flows 資格獨立確認','唔假設 IAB unavailable 就一定有 Flows'],
  ])),
  s('來源台帳、待核實項目與 ChatDaddy 交付',[
    '最後核對：2026-10-01 14:49:55 HKT（UTC+08:00）。「官方來源已讀」只覆蓋所列內容；「供應商記錄」有整合範圍；「待核實／有衝突」唔得用作產品保證。重新採用前必須再驗證。',
    '本章只係 industry reference。設計交付要連結 Integration、Flow Design 同 Content timing：決定前交代費用／資料風險，操作時只放必需步驟，出事先顯示補救。App 支援／帳戶 entitlement 需工程與 provider 證據，唔係呢個 demo。',
  ],t(['項目','核對狀態','記錄／界線'],industryClaims.map(c=>[c.id,labels[c.status],c.text]))),
],['handbook/src/industry-whatsapp.mjs','handbook/src/primary-navigation.mjs']);
industryPage.status = 'industry-reference';
industryPage.checkedAt = industryCheckedAt;
industryPage.claims = industryClaims;
industryPage.references = industrySources;
[
  ['meta-flows','twilio-flows','sprinklr-iab'],
  ['twilio-flows','sprinklr-iab'],
  ['aws-limits','meta-components'],
  ['twilio-flows','aws-limits'],
  ['twilio-flows'],
  ['meta-pricing','meta-service-pricing'],
  ['aws-assets','meta-changelog'],
  ['meta-flows','sprinklr-iab'],
  ['meta-components','meta-changelog','meta-service-pricing'],
].forEach((ids,index) => {industryPage.sections[index].references = ids.map(id => industrySources.find(source=>source.id===id));});
industryPage.scenarios = ['whatsapp-native-forms','embedded-web','template-cta','submission-events','platform-policy-review'];

export const industryRecommendations = {
  lead:'先評估 Flows：少步原生表單；確認資格、元件版本及提交 webhook。',
  web:'先評估你嘅網站＋IAB：保留外部開啟；實測登入、支付與 browser 相容性。',
  sensitive:'先做安全／合規／provider review；唔可以因為改用 IAB 就當成已合規。',
  unknown:'先確認實際帳戶與 client 能力；網站保留 fallback，Flows 資格獨立核對。',
};
export function industryDemo(esc) {
  return `<div class="industry-comparison"><p class="industry-note">視覺示意 · 非官方 UI · 冇發送、開網站或提交資料</p><div class="industry-pair"><section aria-label="Flows 原生體驗示意"><h3>Flows</h3><p>平台 renderer 畫出表單</p><div class="industry-phone"><header>WhatsApp · 原生體驗示意</header><div class="industry-native"><b>預約示例</b><div>服務 <span>產品介紹</span></div><div>時間 <span>選擇時段</span></div><span class="industry-native-submit">提交示意</span></div></div><p class="industry-path">Flow JSON → 原生 UI → backend callback</p></section><section aria-label="IAB 網頁體驗示意"><h3>IAB</h3><p>browser view 開你自己嘅網站</p><div class="industry-phone"><header>WhatsApp browser view · 示意</header><div class="industry-web"><small>YOUR WEBSITE · 自行設計</small><b>用你嘅品牌，完成同一份工作。</b><p>Landing、產品內容、網站表單</p><span>網頁操作示意 →</span></div></div><p class="industry-path">Template URL → 網站 → server event</p></section></div><label class="industry-choice" for="industry-goal">你想完成咩工作？<select id="industry-goal">${[['lead','簡短 lead／問卷／預約'],['web','品牌網頁／checkout'],['sensitive','敏感資料'],['unknown','資格或裝置未確認']].map(([id,label])=>`<option value="${id}">${label}</option>`).join('')}</select></label><p id="industry-recommendation" role="status">${esc(industryRecommendations.lead)}</p><nav class="industry-links" aria-label="相關設計規格"><a href="#integrations">Integration →</a><a href="#onboarding">Flow Design →</a><a href="#content-timing">Content timing →</a><a href="#automation">Automation ≠ WhatsApp Flows →</a></nav></div>`;
}
