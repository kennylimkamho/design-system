# @chatdaddy/tokens

Design tokens — the single source of truth for all visual values in the ChatDaddy design system.

## Contents

- `shell` — Sidebar and navbar colors (always light/white, modern SaaS style)
- `brand` — Brand colors (mode-invariant)
- `light` / `dark` — Semantic color tokens per theme mode
- `fonts` — Typography font stacks
- `shape` — Border radius scale
- `layout` — Navbar height, sidebar widths
- `shadows` — Elevation shadow tokens
- `getModeTokens(mode)` — Helper to get the correct mode tokens

## Usage

```ts
import { brand, shell, light, dark, getModeTokens } from '@chatdaddy/tokens'

const tokens = getModeTokens('light')
console.log(tokens.background) // '#ECEEF2'
```

## Rules

- No component may use raw hex values — import from here or use `theme.palette`
- Shell tokens are mode-invariant (always light)
- Content tokens (`light` / `dark`) change with theme mode
