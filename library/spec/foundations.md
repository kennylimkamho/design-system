# Foundations

Candidate tokens: [`tokens.json`](tokens.json) → generated [`tokens.css`](tokens.css). JSON is the draft source of truth; existing `packages/tokens` remains the runtime source until an approved migration.

## Color roles, not a global search-and-replace

| Role | Candidate | Source / decision |
|---|---|---|
| Brand blue | `#0F5BFF` | User ChatDaddy export, current DS package, App accent all agree |
| Blue action hover | `#0740FA` | User export + App accent |
| Brand green accent | `#07CB6E` | User ChatDaddy export; preserve as accent |
| Main text | `#101827` | User ChatDaddy export |
| Secondary text | `#4B5563` | Existing neutral ramp; stronger than tiny muted text |
| Page / raised surface | `#F7F7F7` / `#FFFFFF` | User ChatDaddy export |
| Success text / wash | `#036839` / `#F1FFF4` | Dark text from success ramp, not bright green body copy |
| Warning text / wash | `#864700` / `#FFFCEE` | Dark warning tone, not yellow text on white |
| Danger text / wash | `#BD2914` / `#FFF5F5` | Existing critical ramp |

Action mapping is **D-02 user-selected, pending PR review**: blue-primary with green reserved for positive/accent roles. The unselected green-primary comparison remains in the studio with dark foreground. Bright green + white small text is not an acceptable alternative. The App's legacy teal `#09A391`, white-label variants and status colors are migration inputs, not bugs to globally overwrite.

Tokens have three layers: primitive → semantic → component. Use semantic names in consumers; platform colors and data-visualization series are separate roles. `null` is not a color or a success state.

Light mode is the reviewed draft target. Existing dark theme and white-label overrides remain unchanged; dark/white-label token adapters must be reviewed before rollout. Do not apply these light tokens to a dark canvas.

## Type and content width

- Keep Sora as the existing product's Latin family, with system/CJK fallback; body fallback supports 繁體、简体、English. Offline preview intentionally uses installed fonts only and states that fact.
- Blauer Nue is included in the user archive but its web redistribution rights and missing upright bold need confirmation. Do not ship the paid binaries or silently map 700 to 800.
- Draft page title 28/36, section 18/28, body/control 14/22, supporting text 12/18; marketing hero is a separate role. Use actual `h1`/`h2` semantics independently of visual size.
- Table numbers/dates use tabular figures. CJK text has no blanket negative letter spacing or uppercase treatment. Long labels wrap or expose their full value, not merely shrink.

## Space, shape and density

- 4px base rhythm; explicit values 0/2/4/8/12/16/20/24/32/40/48/64px. Token names include the unit to avoid MUI-index confusion.
- App currently uses a 4px indexed array; the independent package's comment says 8px but its values are 4px. Resolve through an adapter test, not by changing every `sx` multiplier. `spacing(1.5)` needs a documented result (6px under the proposed 4px function).
- Proposed control radius 8px; card 12px; dialog 16px; full-round only for avatars/chips. Existing runtime aliases are 12px buttons/inputs and 16px cards; migration is explicit, not already done.
- Control height: 40px standard / 32px compact desktop; touch hit area at least 44px as a product target. Glyph size does not determine hit area.
- Data row: 52px standard / 40px compact for single-line rows; content can grow. D-03 selects Standard as default, compact for professional workspaces. Messaging and complex rows may need more height.
- Page padding 24px desktop / 16px mobile. Avoid nesting a bordered card inside another card merely for grouping.

## Motion and elevation

- Direct feedback 180ms; panel transition 280ms; `cubic-bezier(.2,.8,.2,1)`.
- Opacity/transform for meaningful transitions; never animate table rows just for atmosphere. No permanent bouncing or spinning navigation icons.
- Module accent may respond once on hover/focus; static fallback and reduced-motion are mandatory. The first icon assets are static SVGs.
- Border is the default separation; small shadow for floating surfaces. Modal uses one managed overlay, not feature-specific enormous z-index values.
- Prefer `prefers-reduced-motion` overrides and a pause control for optional marketing loops.
- Rich micro animations are explicitly requested. Apply the interaction-triggered vocabulary in [motion](motion.md) throughout controls, navigation and feedback; the no-infinite-distraction rule does not mean a static-feeling interface.
