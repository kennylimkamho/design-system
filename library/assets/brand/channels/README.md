# Channel identity assets

Checked 2026-09-25. This directory supports handbook specimens, not a production migration.

## Provenance

The [manifest](manifest.json) records exact file hashes, source pages, archive members and transformations.

- WhatsApp: unmodified green digital glyph from the official 2026 Meta resource pack.
- Messenger: unmodified blue primary icon from Meta's current icon pack. The official guidance was updated February 2025; do not reproduce the older gradient as a new default.
- Instagram: official gradient glyph, proportionally resized to 128px for an offline UI specimen; no crop or recolor.
- Inverse variants: WhatsApp white digital glyph, Messenger secondary white and Instagram white glyph are unmodified SVG members from those same official packs. They support dark/brand-surface examples where appropriate; no CSS inversion/desaturation. This does not grant blanket approval for every use.
- WhatsApp Business app: existing frontend B-mark reference, **original official pack/version unverified**. The original file is named `waba.png`; this does NOT establish that the B app icon is an API logo.
- TikTok: existing frontend reference, **official pack/version unverified**. Review against the [TikTok Brand Hub](https://www.tiktokbrandhub.com/visual-identity/logo) before production.
- Calling and Email: generic utility symbols; never assume Twilio or Gmail merely from a channel category.
- Cloud API draft mode illustration: an authored SVG interpretation of the user's green rounded-square speech-bubble/cog reference, not the original image bytes or an official Meta asset. Separately marked `user-derived-reference`; requires brand/usage review before production. No changes to the official WhatsApp glyph file.
- Comparison graphic: original user-supplied phone/B/cog PNG, unchanged and labelled `user-supplied-reference`. The image's collective API heading must not be used to name the mobile apps. It is explanatory material, not proof of approved trademark artwork or supported integrations.
- Mail utility: [Lucide 0.542.0 source](https://github.com/lucide-icons/lucide/blob/0.542.0/icons/mail.svg), normalized to the existing 1.75 stroke and decorative accessibility wrapper; same license as the existing utility subset.

## Distribution boundaries

Marks remain the property of their respective owners. Inclusion is not a claim of partnership, endorsement, production approval or availability of an integration. Follow each vendor's current usage guidance and obtain any use-specific permission required before release. Do not relabel reference-only assets as approved.

Official resources (do not confer official status on the two user-reference assets above):
- [WhatsApp](https://www.meta.com/brand/resources/whatsapp/whatsapp-brand/)
- [Messenger](https://www.meta.com/brand/resources/facebook/messenger-icon/)
- [Instagram](https://www.meta.com/brand/resources/instagram/instagram-brand/)

The renderer uses isolated image data URIs for third-party SVGs to prevent vendor CSS/IDs from affecting the document. Unknown or failed assets retain the full channel label and a neutral placeholder. Original archives are not redistributed.

Containers are transparent by default. Existing app artwork backgrounds remain inside the asset; optional UI backing is separate. On complex backgrounds the specimen protects the complete logo/name lockup with an opaque surface, not a universal white square around the logo.
