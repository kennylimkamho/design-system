# Logo and icon identity · 1.1.0-draft.7

Status: proposal requested by the product owner, not a runtime export or production rollout.
Detailed rules and visual specimens: [Logo 與 Icon 分層](../handbook/pages/icon-identity.md).

## Three identity families plus actions

| Family | Meaning | Presentation |
|---|---|---|
| App / product identity | Which product or integration app | Original product mark, 32/40/48px slot |
| Channel identity | Source platform plus known connection mode | Unmodified vendor mark + readable name + separate mode |
| Module | Main application navigation | Authored 24px grid, 2.25 stroke, one restrained blue accent |
| Utility / action | Search, assign, filter, close | Lucide 1.75 stroke, 16/20/24px, currentColor |

This adds a heavier module presentation variant to the user-selected hybrid D-01 direction; it does not replace official third-party marks or mutate historical assets. Existing base module SVGs are 1.75; the new handbook compiles a 2.25 variant with the same path geometry. Existing runtime packages remain unchanged.

The latest module additions are Integration (Connected apps), AI (Brain, replacing the chat/spark), and CRM (Opportunity card). These are ChatDaddy navigation symbols, not vendor App logos or channel-mode illustrations. Their selected direction is recorded in [the icon specification](icons.md); approval of artwork and App adoption remain separate steps.

## WhatsApp terminology

- WhatsApp mobile app and WhatsApp Business mobile app are separate product identities.
- Coexistence is a Business App + Cloud API connection mode, not a new standalone app or logo.
- WhatsApp Business Platform / Cloud API is the primary user-facing name for the API channel.
- WABA expands to WhatsApp Business Account; it is not a distinct mobile product or a synonym for a logo.
- QR connection is not sufficient evidence of which mobile app is used. Unknown mode must stay unknown.
- A B-mark must not stand for Cloud API merely because an old asset happens to be named `waba.png`.

Display identity, mode and connection health separately. Do not improvise overlays on official vendor artwork. Preserve clear space. A logo's existence does not imply integration availability.

## Worked example: same platform, distinct products/modes

The user supplied a phone / B / cog comparison and asked for the cog speech-bubble icon on the Cloud API card. Draft 2 uses an authored SVG interpretation of the supplied green rounded-square icon, recorded as `user-derived-reference`, not an official Meta asset. The comparison PNG is retained unchanged as explanatory evidence; its overall “API” heading does not classify the two mobile apps as API channels.

Different known products/modes can have distinct visual cues. Preserve visible labels and the authoritative backend mapping; never derive connection mode or capability from the image itself. This is a custom channel-mode illustration, not the neutral Settings utility icon. Coexistence remains a connection mode with its own text label, not a fourth mobile app.

The API card explicitly says “自訂示意 · 待審核”. Brand/usage review is required before production; approved official platform artwork remains the fallback alternative if this illustration is not adopted.

## Generic channels and names

Email uses an envelope, not Gmail by default. Calling uses a handset, not Twilio by default. A known provider may be shown separately where relevant. WhatsApp Calling must not be conflated with carrier calls or Coexistence.
The user's `Callong` label is provisionally interpreted as Calling; confirmation is pending.

## Assets and boundaries

See [asset provenance, hashes and review status](../assets/brand/channels/manifest.json) and [source notes](../assets/brand/channels/README.md). WhatsApp, Messenger and Instagram specimens use official pack assets; Business App and TikTok specimens remain explicitly labelled reference-only.

Suggested future adapters: `AppIdentityIcon`, `ChannelIdentity`, `ModuleIcon`, `ActionIcon`. Existing `AppIcon` is a decorative glyph wrapper and is not renamed in this change. Existing `PlatformIcon` mapping and its CDN / provider assumptions need separate migration.

## Logo × surface: artwork, container and background are distinct

Default identity containers are transparent. The previous fixed-white wrapper is removed: a logo's intrinsic background is different from an extra UI backing tile.

| Actual local surface | Asset choice | Container treatment |
|---|---|---|
| White | Original color or compatible dark asset | Transparent by default |
| Subtle / selected tint | Original color where readable | Preserve tint; optional compatible tile, not mandatory white |
| Dark | Appropriate official inverse asset or intact app tile | Transparent; compatible dark plate if useful |
| Brand color | Appropriate inverse/compatible asset | Do not recolor vendors to ChatDaddy primary |
| Image / busy | Compatible asset after establishing stable contrast | Opaque backing protects logo AND name; validate real crops |

The [surface model](../handbook/src/identity-surfaces.mjs) renders all nine identities on five surfaces; a checkbox compares transparent versus framed presentation. The busy background is a CSS pattern standing in for image complexity, not a photograph or certification for all photos.

Three new unmodified white SVGs come from the existing official WhatsApp, Messenger and Instagram packs. They are separate assets, not CSS invert/filter/blend variants. Business App / TikTok references and the custom API illustration keep their original appearance and pending review state. Their built-in artwork background is not stripped out.

Own App marks may use positive/negative artwork; module icons retain weight and accent; utilities use currentColor. Never apply global fill, grayscale, opacity or inversion to vendor images. Unknown assets keep names and a neutral readable fallback.

## Integration card: goal-first progressive disclosure

An integration catalog card is a task entry point, not a miniature documentation portal. The persistent primary action is **連結** when the surrounding catalog already establishes what is being connected. Use **設定連結** only where the shorter label would become ambiguous out of context. Never hide the primary action behind hover.

Tutorial content follows intent. Do not reserve a permanent book icon on every card: reveal connection steps after the user starts, reveal recovery help on error, and keep full documentation available inside the flow or its contextual help. Settings is a secondary control: reveal it on desktop card hover and `:focus-within`; on touch/coarse pointers keep an equivalent Settings/More entry visible and reachable.

Use optical rather than merely numeric icon sizing. The candidate pattern uses a 56px slot with roughly 40–44px visible artwork. Reduce accidental whitespace while preserving the vendor's intrinsic clear space, aspect ratio and minimum-size requirements; never crop or stretch a mark to make it look larger.

| State | Persistent action | Contextual help | Secondary settings |
|---|---|---|---|
| Disconnected | 連結 | Hidden until intent | Hover/focus on desktop; reachable on touch |
| Connecting | 連接中…; busy/disabled | Show current step | Do not interrupt the flow |
| Connected | 管理 or 開啟, based on the next goal | On request | Hover/focus on desktop; reachable on touch |
| Error | 重試 | Show cause, steps or support | Available without competing with recovery |

Hover only reveals affordance; it never connects, saves, changes status or launches an external flow. Icon-only settings has an accessible name and keyboard focus reveals it before activation. Status uses visible text rather than logo color/opacity. The local PayFlow specimen changes documentation state only and does not call an API.

Engineering separates assetVariant, surfaceTone and containerTreatment. Local surface is not inferred from OS theme alone. Check hover/focus/selected/disabled, real image crops, responsive layouts and zoom independently. This is a logo-presentation proposal, not an App-wide dark theme rollout.

## Acceptance

- All four WhatsApp contexts distinguishable without color or hover alone.
- Unknown mode, unavailable channel, failed logo and unknown health remain honest and readable.
- Reuse one mapping across picker, filter, list, header and settings; backend enum/capability changes require independent verification.
- Touch and keyboard equivalent access, reduced motion, brand-safe dark surfaces, visible focus and appropriate target size.
- Official vector artwork stays isolated from document CSS; no external runtime asset request.
- White, subtle, dark, brand and complex backgrounds preserve labels/modes; transparent is the default, intrinsic tile backgrounds remain intact, and optional backing respects clear space.
- Integration-card primary connect/retry remains visible; tutorial follows intent/error; settings has pointer, keyboard and touch-equivalent access.
- Native rendering, terms/name confirmations and production asset approval remain separate from isolated DOM tests.
