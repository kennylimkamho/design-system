/**
 * Border radius tokens — base scale plus semantic aliases matched to
 * component usage across the v2 codebase.
 */

// ─── Base scale ───────────────────────────────────────────────────────────────

export const radius = {
  none: '0px',
  xs: '4px',
  sm: '6px',
  md: '8px',      // default — inputs, badges, dividers
  lg: '10px',     // nav items, icon containers, buttons-sm
  xl: '12px',     // buttons, inputs
  '2xl': '14px',  // chat bubbles
  '3xl': '16px',  // cards, dialogs, modals
  '4xl': '24px',  // page panels (InboxPage, PageWrapper)
  full: '9999px', // pills, avatars, full-round elements
} as const

// ─── Semantic aliases ─────────────────────────────────────────────────────────

export const radiusAlias = {
  badge: radius.md,         // 8px
  button: radius.xl,        // 12px
  buttonSm: radius.lg,      // 10px
  card: radius['3xl'],      // 16px
  chip: radius.md,          // 8px
  dialog: radius['3xl'],    // 16px
  dropdown: radius['3xl'],  // 16px
  input: radius.xl,         // 12px
  navItem: radius.lg,       // 10px
  panel: radius['4xl'],     // 24px
  chatBubble: radius['2xl'],         // 14px
  chatBubbleSent: '14px 14px 4px 14px',
  chatBubbleReceived: '14px 14px 14px 4px',
  avatar: radius.full,
  logo: radius.lg,  // 10px — logo mark
  tag: '5px',       // compact tags in ChatRow
  reaction: radius.lg, // 10px — emoji reactions
} as const
