// Presentation vocabulary only. These IDs are NOT backend account types.
export const channelCatalog = [
  { id: "whatsapp-mobile", platform: "whatsapp", name: "WhatsApp", mode: "Mobile App", asset: "whatsapp", description: "一般手機 App；不等同 QR 連接模式。", detail: "只在 app variant 已知時標示一般版；未知不要猜。" },
  { id: "whatsapp-business-app", platform: "whatsapp", name: "WhatsApp Business", mode: "Business App", asset: "whatsapp-business", review: true, description: "商業版手機 App，使用 Business app 的 B 標誌。", detail: "B 標誌辨認手機 App，不代表 Cloud API。現有資產待官方版本核對。" },
  { id: "whatsapp-coexistence", platform: "whatsapp", name: "WhatsApp Business", mode: "Coexistence", asset: "whatsapp", description: "Business App ＋ Cloud API 的共存模式。", detail: "保留平台原標誌，以獨立文字解釋 App + API；不合成新品牌。" },
  { id: "whatsapp-cloud-api", platform: "whatsapp", name: "WhatsApp Business Platform", mode: "Cloud API", asset: "whatsapp-api-mode", assetRole: "mode-illustration", review: true, reviewLabel: "自訂示意 · 待審核", description: "對話框＋齒輪辨認 API 模式；仍保留 Cloud API 文字。", detail: "按用戶參考圖製作的向量示意，並非 Meta 官方 logo。WABA 是帳戶名稱，ID 留在技術詳情。" },
  { id: "messenger", platform: "messenger", name: "Messenger", mode: "", asset: "messenger", description: "保留官方藍色 Messenger 標誌。", detail: "不以 Facebook f、通用聊天圖示或舊漸變預設代替。" },
  { id: "instagram", platform: "instagram", name: "Instagram", mode: "", asset: "instagram", description: "使用官方 Instagram glyph 與核准色彩。", detail: "不改成 ChatDaddy 藍色，亦不自行畫漸變。" },
  { id: "tiktok", platform: "tiktok", name: "TikTok", mode: "", asset: "tiktok", review: true, description: "平台身份，唔等於已支援連接。", detail: "此處為現有 App 參考資產，官方資產包版本仍待核對。" },
  { id: "calling", platform: "calling", name: "Calling", mode: "電話通話", utility: "phone", termPending: true, description: "通用通話類別，不指向某個電訊商。", detail: "「Callong」暫按 Calling 理解，名稱待用戶確認；WhatsApp Calling 要另標 provider。" },
  { id: "email", platform: "email", name: "Email", mode: "電郵", utility: "mail", description: "通用信封，不預設 Gmail 或 Outlook。", detail: "只有已知 provider 且該情境需要辨識時，才另加 provider 資訊。" },
];
export const identityReferences = [
  { title: "WhatsApp 官方品牌資源", url: "https://www.meta.com/brand/resources/whatsapp/whatsapp-brand/" },
  { title: "WhatsApp Business App 官方產品說明", url: "https://business.whatsapp.com/products/business-app" },
  { title: "Meta 官方 Cloud API collection", url: "https://www.postman.com/meta/whatsapp-business-platform/documentation/wlk6lh4/whatsapp-cloud-api" },
  { title: "WABA 名稱：WhatsApp Business Account", url: "https://www.whatsapp.com/legal/business-solution-terms" },
  { title: "Coexistence 開通文件（本次直接讀取受 429 限制）", url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users" },
  { title: "Messenger 官方 icon（2025 更新）", url: "https://www.meta.com/brand/resources/facebook/messenger-icon/" },
  { title: "Instagram 官方品牌資源", url: "https://www.meta.com/brand/resources/instagram/instagram-brand/" },
  { title: "TikTok Brand Hub（資產版本待核對）", url: "https://www.tiktokbrandhub.com/visual-identity/logo" },
];
