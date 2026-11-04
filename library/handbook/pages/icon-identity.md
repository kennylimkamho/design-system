# Logo 與 Icon 分層

App 說明是誰，channel 說明從哪裡來，module 說明在哪裡工作；操作圖示只說明可以做什麼。

> Version 1.4 · Generic edition · Handbook 1.4.0-draft.9 · 設計基準；PR / 工程 review 待完成，並非 runtime 全量遷移。
> 更新：2026-11-04 14:22:33 HKT (UTC+08:00)

[互動示例](../product-design-system-v1-4-draft-9-annotatable.html#icon-identity) · [目錄](README.md)

## 三種身份 ＋ 一種操作

- 同一張圖可以在不同 context 使用，但其語意角色必須分開。App icon 不等同 menu module；channel identity 亦不只是一張圖片。
- Module icons 可以較厚、有少量 ChatDaddy accent。官方第三方 logo 不跟隨這條粗線規則，不重畫、不加描邊、不改色。自訂產品／模式示意圖必須另標來源及審核狀態，不冒認官方 logo。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#icon-identity--section-1)

| 類別 | 回答的問題 | 規格起點 | 例子 |
| --- | --- | --- | --- |
| App icon / product identity | 這是哪個產品或整合 App？ | 32 / 40 / 48px slot；保留原比例與品牌安全距離 | ChatDaddy 品牌 mark、外部整合 App |
| Channel icon / identity | 這個對話來自哪個平台、哪種模式？ | 24px mark / 40px identity slot；必要模式標籤常駐 | WhatsApp · Coexistence、Email |
| Module icon | 我正在哪個功能領域？ | 24px grid、2.25 stroke、最多一個 blue accent | 最左側 Inbox / Contacts / Automation |
| Utility / action icon | 我可以做什麼？ | 16 / 20 / 24px、1.75 stroke、currentColor | 搜尋、分配、標籤、更多 |

## 實例：相同平台，不同產品／模式

- 用戶提供的電話、B、齒輪比較圖，說明不同用法值得有不同視覺線索，不必一律用同一個平台圖示。這是辨識策略，不是把三者都歸類為 API。
- 本版按用戶要求，Cloud API 卡改為綠色對話框＋齒輪的 SVG 示意版；它是按參考圖製作的自訂模式圖，不宣稱是官方 Meta 資產。正式採用前需品牌及使用權審核。
- 規則是『已知產品／模式 → 對應圖形＋可見名稱』。唔係『見到某個圖形 → 猜測能力、已連接、官方認證』。
- 同一 mode symbol 要跨 channel picker、列表、header、settings 一致；內頁真正的設定操作仍用中性的 utility gear，唔用綠色 API 圖示做 Settings 按鈕。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#icon-identity--section-2)

| 情境 | 圖形線索 | 保留的文字 |
| --- | --- | --- |
| WhatsApp 手機版 | 官方電話＋對話框 | WhatsApp · Mobile App |
| Business 手機版 | Business App 的 B mark | WhatsApp Business · Business App |
| Cloud API | 本草稿自訂對話框＋齒輪 | WhatsApp Business Platform · Cloud API |
| Coexistence | 平台標誌，不建立第四款手機 App logo | WhatsApp Business · Coexistence |

## WhatsApp：產品、模式與帳戶分開

- 一般 WhatsApp app 與 WhatsApp Business app 是兩個產品身份；QR 是連接方法，不能見到 QR 就推斷是哪個手機 App。
- Coexistence 表示 Business App 與 Cloud API 的共存模式，不是第三個手機 App，也不自行設計 Coex logo。用 WhatsApp 原標誌，再在標誌安全距離外顯示獨立模式文字。
- Cloud API 屬 WhatsApp Business Platform。WABA 原意是 WhatsApp Business Account；帳戶 ID 可在技術詳情保留，但不把 WABA 當成 API logo 或手機 App 名稱。
- 目前 frontend 的 wa-business-api 圖片與 Business App B-mark 有混用風險。這是 presentation mapping 待遷移項目；不藉改圖而改後端 enum、連接流程或權限。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#icon-identity--section-3)

## Channel presentation matrix

- 以下是設計呈現詞彙，不是 API schema。平台名稱、模式與 account nickname 各自有位置；nickname 不能覆蓋必要的 connection mode。
- 有 logo 不代表可連接。實際 supported / eligible / coming soon 由產品能力與後端資料決定，不能由資產清單推斷。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#icon-identity--section-4)

| 身份 | 模式標籤 | 呈現規則 |
| --- | --- | --- |
| WhatsApp | Mobile App | 一般手機 App；不等同 QR 連接模式。 只在 app variant 已知時標示一般版；未知不要猜。 |
| WhatsApp Business | Business App | 商業版手機 App，使用 Business app 的 B 標誌。 B 標誌辨認手機 App，不代表 Cloud API。現有資產待官方版本核對。 |
| WhatsApp Business | Coexistence | Business App ＋ Cloud API 的共存模式。 保留平台原標誌，以獨立文字解釋 App + API；不合成新品牌。 |
| WhatsApp Business Platform | Cloud API | 對話框＋齒輪辨認 API 模式；仍保留 Cloud API 文字。 按用戶參考圖製作的向量示意，並非 Meta 官方 logo。WABA 是帳戶名稱，ID 留在技術詳情。 |
| Messenger | 不需虛構模式 | 保留官方藍色 Messenger 標誌。 不以 Facebook f、通用聊天圖示或舊漸變預設代替。 |
| Instagram | 不需虛構模式 | 使用官方 Instagram glyph 與核准色彩。 不改成 ChatDaddy 藍色，亦不自行畫漸變。 |
| TikTok | 不需虛構模式 | 平台身份，唔等於已支援連接。 此處為現有 App 參考資產，官方資產包版本仍待核對。 |
| Calling | 電話通話 | 通用通話類別，不指向某個電訊商。 「Callong」暫按 Calling 理解，名稱待用戶確認；WhatsApp Calling 要另標 provider。 |
| Email | 電郵 | 通用信封，不預設 Gmail 或 Outlook。 只有已知 provider 且該情境需要辨識時，才另加 provider 資訊。 |

## 平台身份、連接模式、運行狀態各一層

- 品牌 logo 回答平台；Mobile App / Business App / Coexistence / Cloud API 回答模式；已連接 / 需處理 / 未知回答運行狀態。
- 綠色 WhatsApp logo 不代表已連接。Status 要有獨立文字和語意色；未確認狀態顯示未知，不假裝綠燈。
- 官方平台 logo 不臨時疊上字母、雲、雙箭頭或勾號。API 齒輪在本版是獨立登記的自訂模式示意，並非重新定義官方 logo；名稱、模式與狀態仍各有位置。
- 窄欄保留不同 WhatsApp 模式的可見文字；tooltip 只補充說明，不是唯一辨識方法。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#icon-identity--section-5)

## Navigation 權重與內頁簡潔度

- Primary module：較厚 2.25 stroke、24px glyph、單一局部 blue accent；父按鈕至少保留既有 44px 操作目標。不要讓每個 module 都有不同彩虹色或巨大 glow。
- Current module 同時有 indicator、背景及文字，不只改 icon 顏色。Hover / focus 只做短暫 tint 或小幅回應，不令 glyph 不停跳動。
- Secondary menu 與內頁工具列使用單色 1.75 stroke utility；同一個 Assign / Filter / More 始終用同一語意 glyph。
- 新章節及 icon library 示範 2.25 module variant；ModuleIcon 已從 @chatdaddy/icons 匯出，歷史 v1 / 0.3 / 0.2 snapshots 不會被覆寫。App 採用需另驗。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#icon-identity--section-6)

## Integration / App card：先目標，後輔助

- 卡片的第一任務是讓使用者辨認 App 並完成連結。Catalog context 已經清楚時，主要 CTA 用短而具動作性的「連結」；如果離開頁面脈絡後會含糊，才用「設定連結」補足語意。主要 CTA 常駐，不靠 hover 才可發現。
- Tutorial 不應以永久 book icon 與主要 CTA 競爭。使用者開始連結、遇到錯誤或主動選擇協助後，才在當下流程顯示步驟、文件或聯絡支援。教學是 contextual content，不是 card 裝飾。
- Settings 是已存在連結的次要操作。Pointer desktop 可以在 card hover 或 focus-within 時揭示；鍵盤 focus 必須同樣出現。Touch / coarse pointer 無 hover，需常駐 Settings / More 或放入可達的 overflow menu。
- App artwork 用 optical sizing：本 pattern 採 56px identity slot、約 40–44px 可見 artwork。先減少無意義內部留白，但 vendor clear space、原比例和品牌規範優先；不可用 crop 或拉伸把 logo 硬放大。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#icon-identity--section-7)

| 狀態 | 主要動作 | 教學／協助 | 次要設定 |
| --- | --- | --- | --- |
| 未連結 | 連結（常駐） | 不顯示；避免預先塞教學 | Desktop hover/focus；touch 可達 |
| 連接中 | 連接中…（busy / disabled） | 顯示當下連結步驟 | 避免打斷流程 |
| 已連結 | 管理／開啟（依目的） | 按需顯示，不常駐 | Desktop hover/focus；touch 可達 |
| 失敗 | 重試（常駐） | 顯示錯誤原因、步驟或支援 | 保留但不蓋過復原動作 |

## Integration card 互動契約

- Hover 只能揭示 affordance 或補充資料，不會直接連結、儲存設定、切換狀態或開啟外部流程；所有行為仍需 click / Enter / Space。
- Settings icon 必須有 accessible name；icon-only desktop control 可用 tooltip 補充名稱，但 tooltip 不是唯一標籤。隱藏時仍可由 Tab 取得，focus-within 會先把控制顯示。
- 狀態不能只靠品牌色或 logo 透明度。未連結、連接中、已連結、失敗使用可見文字；失敗保留明確重試與支援，不把 error 當 empty。
- 此頁 PayFlow 是虛構本地示例：click 只改文件內狀態，沒有連接真實 App、呼叫 API 或儲存客戶設定。正式元件需另驗 loading race、permission、disconnect、mobile menu 及 backend source of truth。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#icon-identity--section-8)

## Logo × Surface：先睇實際承托背景

- 上一版的 identity-glyph 一律設白底，令透明 glyph 同 app tile 都被套上白色方塊。本版改為透明容器，將 artwork、container、surface 三層分開。
- Artwork 是图案本身：官方正稿、反白稿，或資產本身自帶的底色。Container 是可選的 UI 承托。Surface 是外面實際的背景，唔一定等同 OS light/dark theme。
- 先用透明容器＋相容資產；有識別／對比問題或需要明確 tile 邊界時，先加實色承托。承托可以是深色、淺色或相容品牌色，不一定是白色。
- 本頁有 9 渠道 × 5 背景的離線比較，可開關承托底；不會改 App theme、連接模式或健康狀態。背景判斷以 logo 所處的局部 surface 為準。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#icon-identity--section-9)

| Surface | 資產／前景 | 承托策略 |
| --- | --- | --- |
| 白色 | 平台彩色、App 深色稿、utility 深色 | 預設透明，不額外套白底 |
| 淺色底／selected tint | 先保留彩色並檢查局部對比 | 避免白色貼紙效果；有需要才用相容實色 tile |
| 深色 | 合適的官方反白版本，或可辨識的原裝 app tile | 透明優先；如加承托，可用深色階而非強迫白底 |
| 品牌色 | 在該背景可辨識的官方版本；自家 module/utility 選相容前景 | 不要把第三方 logo 染成產品 primary 色 |
| 圖片／複雜底 | 先建立穩定實色區域，再選 logo 版本 | 同時保護 logo＋名稱；不只對 glyph 加框而留下難讀文字 |

## 三層承托與互動狀態

- 透明 glyph 可以直接放在背景；本身含底色的 app tile 要完整保留。不得把資產原有黑／綠底當成多餘 UI 背景而 CSS 去背、裁圓或 blend。
- 新增 WhatsApp / Messenger / Instagram 白色版本均為官方 pack 原檔。按各自品牌規範及使用場景選擇；不以 brightness、invert、grayscale 或 mix-blend-mode 製造假反白。
- Business App、TikTok 參考圖及 API 自訂示意未補造反白稿；維持原資產與待審核標籤。未有合適資產就選相容承托或文字 fallback，唔好亂改品牌色。
- Hover、focus、selected、disabled 的承托及前景都要驗。保留名稱、模式和 focus indicator；不要用平台 logo 透明度表示連接失效，health 仍由文字／狀態元件表達。
- 自家 App mark 可用深淺稿；module 保留較粗線重及少量 accent；utility 才用 currentColor。不要把同一套 CSS fill/color 套落全部第三方品牌。
- 工程需分 assetVariant、surfaceTone、containerTreatment 三個欄位；可變圖片需測每種裁切、背景與放大，不靠一個 dark-theme boolean 或未知圖片自動猜對比。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#icon-identity--section-10)

## 大小、品牌空間與 optical alignment

- 24px / 40px 是 ChatDaddy slot 起點，不凌駕平台的 minimum size / clear space；vendor 要求更大時增加容器或改用文字身份，不縮到認不出。
- App catalog 可用 40 / 48px；普通 channel row 用 24px mark；聊天來源等更小 context 需另驗最小尺寸，不自動把所有品牌塞入 12px badge。
- Logo 用 object-fit:contain，不拉長、不切角，不統一裁成圓形；官方資產本身的輪廓可以保留。
- Messenger 官方要求至少 16px，四邊留 glyph 寬度四分之一的空間。其他平台依各自官方規範核對，不把 Messenger 的數值套到全部品牌。
- Dark mode 使用官方允許的 light / dark / mono 版本或中性 backing surface。不可用 CSS filter/invert 任意反色。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#icon-identity--section-11)

## Accessible names、缺圖與 reduced motion

- Logo 旁已有完整 label 時，圖片 alt 為空，父 link/button 提供唯一 accessible name。Icon-only control 必須有名稱；hover 與 focus 同樣可取得提示。
- 載入失敗顯示中性 placeholder + 完整名稱 + 必要模式；不能只剩背景色、空白或第一個字母讓人猜平台。
- 第三方 logo 不做形變動畫。Module / action 的回饋遵守 reduced motion；pending spinner 屬獨立狀態，不把平台 logo 旋轉當 loading。
- 全色、灰階、keyboard、touch、深色背景、200% zoom 及長名稱都要驗；不能只截一張漂亮 default screenshot。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#icon-identity--section-12)

## 工程邊界與既有元件

- ModuleIcon 已是 @chatdaddy/icons 的 runtime export；AppIdentityIcon、ChannelIdentity、ActionIcon 仍是語意 adapter 提案，不能當作已可 import。
- 現有 packages/icons/AppIcon 實際是裝飾性 glyph wrapper，不要因名稱近似就當它已實作 App identity。PlatformIcon 現有 mail→Gmail、voice→Twilio 與 CDN 圖片來源需另開 migration。
- 呈現資料至少分 platform、appVariant、connectionMode、accountLabel、connectionStatus、capabilities；未知欄位保持 unknown。不要根據電話、emoji、名字或任意 accountType 字串猜測。
- 現有 wa 可涵蓋不同手機 App 的 QR 連接；資料不足時顯示 WhatsApp · QR connection，而不是冒認 consumer / Business / Coexistence。只有 authoritative mode 證據才加上 Coexistence。
- 本頁的 Calling 是對 Callong 的暫定解讀；名稱未確認前不建立 Callong 平台或虛構品牌。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#icon-identity--section-13)

## 資產來源與待確認

- WhatsApp、Messenger、Instagram 已取自官方資產包；Instagram 彩色 PNG 只按比例縮小，新增白色 SVG 保持原樣。來源、pack member、hash 及處理方式記在 assets/brand/channels/manifest.json。
- Business App B-mark 與 TikTok 暫用現有 App 參考圖，顯示『資產待核對』；API 齒輪為用戶指定方向的向量示意，顯示『自訂示意 · 待審核』。原比較圖保留原樣。以上均不當成 production-approved artwork。Callong 名稱亦待確認。
- 官方 Coexistence 文件本次直接讀取受 429 限制；本頁以使用者描述及既有 App 說明整理 presentation 分類，不宣稱已核實地區資格、費用、同步或全部功能限制。
- 平台標誌仍屬其權利人；收錄範例不代表合作或授權背書。正式部署前按實際用途核對平台要求，保持版本紀錄。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#icon-identity--section-14)

## 驗收清單

- 四個 WhatsApp 情境可由可見 label / mode 清楚辨識，不只靠顏色、B 字或 tooltip；未知模式不被自動歸類。
- 同一 account 在 channel picker、filter、conversation header、table 及 settings 使用相同 identity mapping。
- 白、淺、深、品牌色、複雜底都能讀到 logo 與名稱；缺圖、hover/focus/selected 狀態亦要驗。固定白色外框不再是預設。
- Generic Email 不出現 Gmail，generic Calling 不出現 Twilio；provider-specific calling（例如 WhatsApp Calling）另標平台與能力。
- Module 2.25 與 utility 1.75 的來源及 SVG copy/download 一致；不只靠一段頁面 CSS 假裝線重已更新。
- Integration card 的「連結」常駐；教程只在意圖／錯誤後出現；Settings 在 desktop hover/focus 及 touch 等效入口均可達。
- 所有範例為本地示意，不連接帳戶、不發訊息、不改已讀狀態。Production rollout、完整 mobile/native QA 及待核對資產仍需獨立驗收。

[查看本節 UI 示例](../product-design-system-v1-4-draft-9-annotatable.html#icon-identity--section-15)

## 已抽出的真實元件

先讀手冊規則；下列是 package-backed 示範，App 採用仍待逐頁驗證。其餘 Storybook 舊示例只作參考。

- Module icons · approved glyph set — [互動示例](https://kennylimkamho.github.io/design-system/lab/?path=/story/icons-moduleicon--all-approved-modules) · [原始碼](../../packages/icons/src/ModuleIcon.tsx)

## 程式與規格對應

來源存在不代表已符合所有新規格；舊 Storybook 檔案是參考示例，請按 adoption checklist 逐項驗收。

- [spec/icon-identity.md](../../spec/icon-identity.md)
- [assets/brand/channels/manifest.json](../../assets/brand/channels/manifest.json)
- [assets/brand/channels/README.md](../../assets/brand/channels/README.md)
- [handbook/src/channel-model.mjs](../../handbook/src/channel-model.mjs)
- [handbook/src/identity-surfaces.mjs](../../handbook/src/identity-surfaces.mjs)
- [handbook/src/integration-card.mjs](../../handbook/src/integration-card.mjs)
- [packages/icons/src/ModuleIcon.tsx](../../packages/icons/src/ModuleIcon.tsx)
- [packages/icons/src/AppIcon.tsx](../../packages/icons/src/AppIcon.tsx)
- [packages/icons/src/PlatformIcon.tsx](../../packages/icons/src/PlatformIcon.tsx)

## 來源與案例證據

- [WhatsApp 官方品牌資源](https://www.meta.com/brand/resources/whatsapp/whatsapp-brand/)
- [WhatsApp Business App 官方產品說明](https://business.whatsapp.com/products/business-app)
- [Meta 官方 Cloud API collection](https://www.postman.com/meta/whatsapp-business-platform/documentation/wlk6lh4/whatsapp-cloud-api)
- [WABA 名稱：WhatsApp Business Account](https://www.whatsapp.com/legal/business-solution-terms)
- [Coexistence 開通文件（本次直接讀取受 429 限制）](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users)
- [Messenger 官方 icon（2025 更新）](https://www.meta.com/brand/resources/facebook/messenger-icon/)
- [Instagram 官方品牌資源](https://www.meta.com/brand/resources/instagram/instagram-brand/)
- [TikTok Brand Hub（資產版本待核對）](https://www.tiktokbrandhub.com/visual-identity/logo)
