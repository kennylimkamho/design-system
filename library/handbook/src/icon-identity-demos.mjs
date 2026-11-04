import { esc } from "./demos.mjs";
import { channelCatalog, identityReferences } from "./channel-model.mjs";
import { identitySurfaceDemo } from "./identity-surfaces.mjs";
import { integrationCardDemo } from "./integration-card.mjs";
export function iconIdentityDemos({ modules, utility, logo, channelAssets }) {
  const channelMark = c => c.utility
    ? `<span class="identity-glyph identity-generic" aria-hidden="true">${utility[c.utility]}</span>`
    : `<span class="identity-glyph identity-brand"><img data-channel-logo alt="" width="24" height="24" src="${channelAssets[c.asset]}"><span class="identity-fallback" aria-hidden="true">?</span></span>`;
  return {
    iconIdentity: `
      <div class="identity-intro"><span class="eyebrow">IDENTITY IS NOT AN ACTION</span><h3>重要的，有份量。操作的，夠簡單。</h3><p>三種身份，一套清晰層級。平台 logo 不因 UI 風格而被重畫。</p></div>
      <div class="identity-families">
        <div><div class="identity-app-mark">${logo}</div><b>01 · App icon</b><p>產品／整合 App 身份</p><small>原裝品牌 mark · 32–48px</small></div>
        <div><div class="identity-channel-mark"><img src="${channelAssets.whatsapp}" alt="" width="32" height="32"></div><b>02 · Channel icon</b><p>來源平台 ＋ 模式</p><small>原裝 logo · 標籤獨立</small></div>
        <div><div class="identity-module-mark">${modules.inbox}</div><b>03 · Module icon</b><p>最左側主要功能導航</p><small>24px · 2.25 stroke · accent</small></div>
        <div><div class="identity-utility-mark">${utility.search}</div><b>＋ Utility icon</b><p>內頁次要操作</p><small>20px · 1.75 stroke · 單色</small></div>
      </div>
      <div class="identity-workspace"><div class="identity-rail" aria-label="模組導航視覺示例">${["inbox","contacts","automation","channels"].map((id,i)=>`<span class="${i===0?"current":""}" role="img" aria-label="${id} 模組">${modules[id]}</span>`).join("")}</div><div class="identity-workspace-body"><header><div><b>收件箱</b><small>粗一點的導航，簡單的工具列。</small></div><div class="identity-tools">${[["search","搜尋"],["user-round-check","分配"],["tag","標籤"],["ellipsis","更多"]].map(([key,label])=>`<span role="img" aria-label="${label}">${utility[key]}</span>`).join("")}</div></header><div class="identity-conversation">${channelMark(channelCatalog[2])}<div><b>示例對話</b><p>WhatsApp Business <span class="identity-mode">Coexistence</span></p></div><span class="identity-state">示例：已連接</span></div></div></div>
      <div class="identity-notice"><b>不要用 logo 猜連接方式</b><p>Mobile App、Business App、Coexistence、Cloud API 用獨立文字分辨。綠色品牌 ≠ 已連接，B 標誌 ≠ API。</p></div>
      ${integrationCardDemo({ utility })}
      ${identitySurfaceDemo({ modules, utility, logo, channelAssets })}
      <div class="demo-toolbar identity-controls">
        <label for="identity-context">展示位置 <select id="identity-context"><option value="catalog">Channel catalog</option><option value="list">列表 / filter</option></select></label>
        <label for="identity-status">示例連接狀態 <select id="identity-status"><option value="unknown">未知</option><option value="connected">已連接</option><option value="attention">需處理</option></select></label>
        <label class="checkbox-label" for="identity-missing"><input type="checkbox" id="identity-missing">模擬缺少 logo</label>
      </div>
      <p class="demo-note">以下是身份示例，不代表渠道已支援或已連接。API 齒輪為自訂模式示意；Business App／TikTok 資產及 Calling 名稱仍待確認。</p>
      <div class="identity-catalog" id="identity-catalog" data-context="catalog">
        ${channelCatalog.map(c=>`<article class="identity-card" data-channel-id="${c.id}" data-asset-role="${c.assetRole || (c.utility ? "generic" : "brand")}">${channelMark(c)}<div class="identity-card-copy"><h4>${esc(c.name)}</h4>${c.mode?`<span class="identity-mode">${esc(c.mode)}</span>`:""}<p class="identity-description">${esc(c.description)}</p><p class="identity-detail">${esc(c.detail)}</p><div class="identity-flags">${c.review?`<span class="identity-review">${esc(c.reviewLabel || "資產待核對")}</span>`:""}${c.termPending?'<span class="identity-review">名稱待確認</span>':""}<span class="identity-state" data-identity-state>示例：未知</span></div></div></article>`).join("")}
      </div><p class="sr-only" id="identity-announcer" role="status"></p>
      <section class="identity-example" aria-labelledby="identity-example-title">
        <span class="eyebrow">EXAMPLE · ONE PLATFORM, DISTINCT MODES</span>
        <h3 id="identity-example-title">同一平台，也要一眼分清用法。</h3>
        <p>電話代表一般手機 App，B 代表 Business App，齒輪在本草稿代表 API 模式。圖形差異幫助掃讀，但唔可以取代文字或可靠的連接資料。</p>
        <div class="identity-variants">
          ${[channelCatalog[0], channelCatalog[1], channelCatalog[3]].map((c,i)=>`<div data-variant-example="${c.id}">${channelMark(c)}<b>${["一般手機 App","Business 手機 App","API / 系統整合"][i]}</b><span>${["電話圖形","B 圖形","齒輪圖形 · 自訂示意"][i]}</span><small>${esc(c.mode)}</small></div>`).join("")}
        </div>
        <p class="identity-example-rule"><b>Coexistence 是連接模式，唔係第四個手機 App。</b>仍以 WhatsApp 平台標誌＋「Coexistence」標籤表示；唔會因為見到齒輪就自行推斷後端類型。</p>
        <details class="identity-reference"><summary>查看你提供的原圖與使用界線</summary><figure><img src="${channelAssets["whatsapp-variants-reference"]}" width="881" height="531" alt="使用者提供的比較圖：電話、B、齒輪三種對話框圖形，下方原圖文字為 WhatsApp business api。"><figcaption>原圖保留作視覺參考，唔係官方產品分類圖；其中「API」標題不代表三個圖示都係 API。上方齒輪為按你另一張綠色 app 圖示參考製作的 SVG 示意版，未聲稱官方認證或使用授權。</figcaption></figure></details>
      </section>
      <div class="identity-sources"><b>官方原始資料與核對入口</b>${identityReferences.map(r=>`<a href="${r.url}" target="_blank" rel="noopener">${esc(r.title)} ↗</a>`).join("")}</div>
    `
  };
}
