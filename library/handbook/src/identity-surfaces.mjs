import { esc } from "./demos.mjs";
import { channelCatalog } from "./channel-model.mjs";

// A surface is the actual local background, not merely the OS theme.
export const identitySurfaces = [
  { id: "white", title: "白色底", tone: "light", background: "#ffffff", foreground: "#152238", plate: "#edf2f7", note: "彩色／深色版本 · 預設透明容器" },
  { id: "subtle", title: "淺色承托底", tone: "light", background: "#eef2f7", foreground: "#152238", plate: "#ffffff", note: "保留底色穿透 · 不再套白色方塊" },
  { id: "dark", title: "深色底", tone: "dark", background: "#101c30", foreground: "#f4f7ff", plate: "#27374e", note: "按可讀性選反白資產 · 不用 CSS 反色" },
  { id: "brand", title: "品牌色底", tone: "dark", background: "#0f5bff", foreground: "#ffffff", plate: "#073aa6", note: "用相容的淺色版本 · 平台不跟住染藍" },
  { id: "complex", title: "圖片／複雜底", tone: "dark", background: "#354b5c", foreground: "#f4f7ff", plate: "#27374e", protected: true, note: "先保護 logo ＋ 名稱；此處為模擬圖紋，非照片" },
];

export const identitySurfaceProfiles = {
  "whatsapp-mobile": { inverse: "whatsapp-white" },
  "whatsapp-business-app": { intrinsic: true, pending: true },
  "whatsapp-coexistence": { inverse: "whatsapp-white" },
  "whatsapp-cloud-api": { intrinsic: true, pending: true },
  messenger: { inverse: "messenger-white" },
  instagram: { inverse: "instagram-white" },
  tiktok: { intrinsic: true, pending: true },
  calling: { utility: true },
  email: { utility: true },
};

export function resolveIdentitySurface(channel, surface) {
  const profile = identitySurfaceProfiles[channel.id];
  if (!profile || !identitySurfaces.some(s => s.id === surface.id))
    throw new Error("Unknown identity/surface; do not infer a brand variant.");
  const inverse = surface.tone === "dark" && profile.inverse;
  return {
    asset: profile.utility ? null : inverse || channel.asset,
    utility: channel.utility || null,
    variant: profile.utility ? "utility" : inverse ? "inverse" : profile.intrinsic ? "intrinsic" : "color",
    backing: surface.protected ? "lockup" : "none",
    pending: !!profile.pending,
    description: profile.utility ? "單色操作語言，跟隨文字前景色。" :
      inverse ? "官方資產包的白色版本，未對彩色圖做反色。" :
      profile.intrinsic ? "保留資產自帶底色／輪廓；外層透明，資產仍待審核。" :
      "保留平台原色；外層透明，不另加白底。",
  };
}

const sampleMark = (choice, { channelAssets, utility }) => choice.utility
  ? `<span class="identity-glyph identity-generic surface-emblem" aria-hidden="true">${utility[choice.utility]}</span>`
  : `<span class="identity-glyph identity-brand surface-emblem"><img data-channel-logo data-surface-asset="${choice.asset}" alt="" width="32" height="32" src="${channelAssets[choice.asset]}"><span class="identity-fallback" aria-hidden="true">?</span></span>`;

export function identitySurfaceDemo(resources) {
  const { modules, utility, logo } = resources;
  return `<section class="identity-surface-section" aria-labelledby="icon-identity--surfaces">
    <span class="eyebrow">LOGO × SURFACE</span>
    <h2 id="icon-identity--surfaces" tabindex="-1">唔係每個 logo，都需要一塊白底。</h2>
    <p class="surface-intro">先揀資產版本，再決定需唔需要承托。圖案自帶的底色、介面加的承托底、頁面背景，是三件不同的事。</p>
    <div class="surface-controls">
      <label for="surface-channel">比較渠道<select id="surface-channel">${channelCatalog.map(c => `<option value="${c.id}">${esc(c.name)}${c.mode ? " · " + esc(c.mode) : ""}</option>`).join("")}</select></label>
      <label class="surface-checkbox" for="surface-framed"><input id="surface-framed" type="checkbox">比較：加相容承托底</label>
    </div>
    <p class="surface-hint">預設直接放置。剔選後比較承托版本；複雜底始終有實色保護層。下方可逐一檢視全部 9 個渠道。</p>
    <div class="surface-board" id="surface-board">
      ${channelCatalog.map((c, index) => `<div class="surface-cases" data-surface-channel="${c.id}" ${index ? "hidden" : ""}>
        ${identitySurfaces.map(surface => {
          const choice = resolveIdentitySurface(c, surface);
          return `<article class="surface-case" data-surface="${surface.id}" data-variant="${choice.variant}" data-backing="${choice.backing}">
            <header><b>${surface.title}</b><span>${surface.protected ? "實色保護層" : "透明容器"}</span></header>
            <div class="surface-stage"><div class="surface-lockup">${sampleMark(choice, resources)}<div class="surface-name"><b>${esc(c.name)}</b><small>${esc(c.mode || "Channel")}</small></div></div></div>
            <div class="surface-caption"><b>${surface.note}</b><p>${choice.description}</p>${choice.pending ? '<span class="identity-review">參考／示意資產 · 待審核</span>' : ""}</div>
          </article>`;
        }).join("")}
      </div>`).join("")}
    </div>
    <p class="sr-only" id="surface-announcer" role="status"></p>
    <div class="surface-anatomy"><b>拆開三層，唔好混埋。</b><ol><li><strong>Artwork：</strong>logo 原稿、官方反白稿或自带底色；唔用 CSS 去背。</li><li><strong>Container：</strong>預設透明；需要時先用相容實色承托，保留安全距離。</li><li><strong>Surface：</strong>白、淺、深、品牌色或圖片；背景改變時重新檢查名稱及圖形可讀性。</li></ol></div>
    <h3 class="surface-role-heading">同一背景規則，四種角色分開處理。</h3>
    <div class="surface-role-grid">${[identitySurfaces[0], identitySurfaces[2]].map(surface => `<div class="surface-role-panel" data-surface="${surface.id}"><b>${surface.title}</b><div class="surface-role-items">
      <div><span class="surface-owned-logo">${logo}</span><span>App</span></div>
      <div>${sampleMark(resolveIdentitySurface(channelCatalog[0], surface), resources)}<span>Channel</span></div>
      <div><span class="surface-module">${modules.inbox}</span><span>Module</span></div>
      <div><span class="surface-utility">${utility.search}</span><span>Utility</span></div>
    </div><p>App 用自家正／負稿；channel 選平台資產；module 保留局部 accent；utility 跟隨前景色。</p></div>`).join("")}</div>
    <p class="surface-hint">以上只定義圖示與承托背景，唔代表已完成整個 App 的 dark theme。官方反白稿用途仍按各平台規範；圖片底的真實裁切與不同 viewport 需再驗收。</p>
  </section>`;
}
