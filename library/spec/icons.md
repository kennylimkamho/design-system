# Icon system · user-selected direction, pending PR review

## D-01: two coherent candidates

**A — selected by user:** authored ChatDaddy module glyphs + Lucide utility icons. The original ten-glyph direction now has two new modules and a replacement AI glyph (12 total). Module glyphs use a 24×24 grid, 1.75px rounded base SVGs and a 2.25px navigation presentation, one small ChatDaddy-blue accent, no gradient tile/glow. These are original draft shapes, not renamed third-party module artwork.

**B — unselected comparison:** Lucide for both modules and utilities. More uniform and lower maintenance; less distinct. Both are shown with real local SVG assets in the decision studio. Changing the preview proposes a revision; it does not publish a package.

## Three roles

| Role | Asset source | Rules |
|---|---|---|
| Product/module | New `assets/icons/modules` or approved Lucide mapping | 20/24px at navigation; no continuous loop |
| Utility/action | Vendored Lucide 0.542.0 subset | CurrentColor, one semantic mapping, 16/20/24px |
| Platform/brand | Approved vendor asset | Preserve brand identity; not a generic chat glyph, emoji or lookalike |

Current module set: Inbox, Contacts, CRM, Automation, Broadcasts, Channels, Integration, Analytics, AI, Shop, Calls, Settings. The source contains 12 glyphs; all are static and decorative by default, and the parent link/button supplies the accessible name.

## Selected module additions · 2026-09-25

The product owner copied the selection summary from the [module-icon comparison](../review/module-icon-studio.html): **Integration B · Connected apps; AI A · Brain; CRM B · Opportunity card**. This confirms the direction for the Design System assets and specification, pending design/engineering review. It is **not** approval to change the App navigation or to publish a runtime package.

| Module | Selected glyph | Meaning and distinction |
|---|---|---|
| Integration | Two app squares joined by a directional connector | Connect an external app/API. Do not substitute a third-party app mark, Channel conversation symbol or Automation workflow node. |
| AI | Two brain lobes and one blue central neural axis | Represents AI capability, not another Inbox bubble or an always-on sparkle effect. This replaces the previous chat/spark artwork. |
| CRM | Customer opportunity card with a small blue follow-up check | Represents a customer record and progress, not merely a Kanban layout. Distinguish from Contacts by the explicit outcome cue and the module label. |

The authored geometry lives in [`assets/icons/modules/source.json`](../assets/icons/modules/source.json). The standalone SVGs are compiled at 1.75px; the handbook renders the same paths at 2.25px for primary navigation. Keep 24px glyphs on a sufficiently large control, preserve readable labels, and validate on light, selected and dark surfaces. Use currentColor for the main stroke and a compatible `--cd-icon-accent`; never put a mandatory white tile behind a module. An accent alone must not communicate selected state. Validate the 24px rendering and contrast with a human reviewer before App rollout.

The archived 0.2 direction studio continues to render its original AI candidate from [`source-v0-2.json`](../assets/icons/modules/source-v0-2.json) and its original [icon map](icon-map-v0-2.json). Its rebuild must not overwrite the current standalone SVG or silently revise the historical review.

The handbook icon gallery gives each module and utility glyph one small 420ms shake on pointer hover or keyboard focus (about 1px translation and 3° rotation, with no opacity fade). This is a preview interaction, not an instruction to animate every static brand logo in the product. No idle loop; reduced-motion removes the movement while preserving a visible focus/hover state.

## Action vocabulary

| Intent | Utility asset | Label / behavior |
|---|---|---|
| Import | `upload` | Import; disclose source |
| Export | `download` | Export; disclose scope |
| Assign | `user-round-check` | Assign; distinguish from invite |
| Add tag | `tag` with text or plus | Add tag; still available when tags exist |
| Filter | `list-filter` | Filter + active count |
| Search | `search` | Search current scope |
| More | `ellipsis` | More actions for [entity] |
| Settings | `settings` | Settings; never a filter substitute |
| External destination | `external-link` | Name destination; announce new context where useful |
| Delete | `trash-2` | Delete with target/count and confirmation when needed |

The current module and action mapping is [`icon-map.json`](icon-map.json). Its `lucide` entries for the three new modules are comparison/fallback references only, **not** substitutes for the selected authored artwork. Unknown icon keys must fail visibly in development, not silently render an empty SVG.

## Integration

- Existing `packages/icons/AppIcon` and `PlatformIcon` exports remain unchanged. Their cinematic glow/gradient and remote brand-image behavior are existing implementation details, not endorsed as new defaults.
- A later implementation PR adds `ModuleIcon`/`ActionIcon` adapters to the existing package, with typed names, accessible-name ownership and fallback tests. Do not add a competing third package.
- Bundle approved assets; do not rely on arbitrary runtime CDNs or swap icon libraries per module.
- Keep Lucide/Feather notices with any distributed subset. See [official license](https://lucide.dev/license) and [local notice](../THIRD_PARTY_NOTICES.md).
- An SVG's 20px canvas does not grant a 20px tap target; use the control's target contract.
