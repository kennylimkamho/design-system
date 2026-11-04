/**
 * Spacing tokens — 4px base unit scale plus semantic named spacing values.
 * Consistent with MUI theme spacing(1) = 8px convention.
 */

// ─── Base scale ───────────────────────────────────────────────────────────────

export const spacing = {
  0: '0px',
  0.5: '2px',
  1: '4px',
  1.5: '6px',
  2: '8px',
  2.5: '10px',
  3: '12px',
  3.5: '14px',
  4: '16px',
  5: '20px',
  6: '24px',
  7: '28px',
  8: '32px',
  10: '40px',
  12: '48px',
  16: '64px',
} as const

// ─── Semantic spacing — named for intent ──────────────────────────────────────

export const semanticSpacing = {
  // Component internal padding
  componentXs: '4px 8px',
  componentSm: '6px 12px',
  componentMd: '10px 16px',
  componentLg: '12px 20px',

  // Page/layout
  pageGap: '12px',      // gap between panels in InboxPage
  panelPadding: '24px', // inner content padding

  // List items
  listItemPaddingX: '8px',
  listItemPaddingY: '6px',
  navItemMarginX: '8px',
  navItemMarginBottom: '4px',
} as const
