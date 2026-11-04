# Adoption and migration

## Existing assets are a starting point

The independent repo already contains tokens, icons, MUI theme, query-agnostic components, stores and Storybook. The frontend also has `@chatdaddy/ui-library` and local shared components. Their relationship and ownership must be confirmed before publishing another runtime surface.

| Existing source | Target direction | Migration / test |
|---|---|---|
| `packages/tokens` blue primary | Preserve ChatDaddy blue primitive | Add aliases without deleting old keys |
| App brand teal / blue accent / green login | One documented action role + exceptions | D-02 first; preserve white-label mappings |
| Package button radius 12 / card 16 | Draft control 8 / card 12 / dialog 16 | Opt-in adapter; screenshots at real sizes |
| MUI spacing arrays / misleading 8px comment | Explicit 4px candidate contract | Fractional spacing and every affected consumer tested |
| `AppIcon` cinematic wrapper | D-01 module glyphs + utility map | New variant/adapter; do not break old imports |
| `PlatformIcon` CDN assets | Versioned approved local brand assets | Permission/license/provenance and missing-image fallback |
| Frontend `ListLayout` + package `PaginatedDataGrid` | Shared DataTable behavior | Preserve server sorting, pagination, selection, permissions |
| `TabView` and app navigation | Nav links vs real tabs vs filters | Deep links, Back, unsaved changes, keyboard |
| Existing dark and white-label themes | Explicit variant maps | No light-only global token replacement |

## Batches

1. **Foundation correctness:** spacing adapter, field labels, Unicode name contract, focus, raw translation keys. These are separate functional fixes, not evidence the spec PR fixed them.
2. **Contacts pilot:** DataTable + form + icon semantics + mobile priority actions.
3. **Automation pilot:** primary/secondary navigation + toolbar + true tabs inside details; keep editor width and unsaved state.
4. **Shared migration:** Channels, Broadcasts, Tools and AI one pattern at a time.
5. **Specialized families:** Inbox/Calls/CRM density; Billing, Academy and Login preserve justified differences.

## Per-pilot done checklist

- [ ] Design decision IDs and spec version cited; no unresolved production default silently chosen.
- [ ] Auth, permissions, channel/plan gates, API parameters and backend behavior unchanged unless separately scoped.
- [ ] Loading / empty / filtered empty / error / permission / success / pending / disabled shown.
- [ ] Keyboard and screen reader; visible focus; reduced motion; hover + touch alternatives.
- [ ] 390/768/850/1280/1440px and 200% zoom; long CJK/English labels and dates.
- [ ] Light/dark/white-label only where supported; exceptions documented.
- [ ] Sort/selection/export scope tested against actual backend contracts, not static mocks.
- [ ] Package/component tests, visual checks and performance appropriate to affected pages.

## Research ledger

See [audit.md](../research/2026-09-24/audit.md). DS-01…15 remain historical findings until revalidated on the target branch. Concurrent Contacts/ListLayout changes may already affect some observations. Double Inbox modal is explicitly **not reproduced in the later screenshot pass**. Do not turn this report into a claim that main has every observed issue today.
