/**
 * Shadow tokens — elevation scale, semantic aliases, component-specific
 * shadows, glows for the AppIcon system, and badge/unread indicators.
 */

export const shadows = {
  // ─── Elevation scale ────────────────────────────────────────────────────────
  none: 'none',
  xs: '0 1px 2px 0 rgba(0,0,0,0.05)',
  sm: '0 1px 3px 0 rgba(0,0,0,0.07), 0 2px 8px 0 rgba(0,0,0,0.05)',
  md: '0 2px 8px 0 rgba(0,0,0,0.08), 0 1px 3px 0 rgba(0,0,0,0.05)',
  lg: '0 6px 20px 0 rgba(0,0,0,0.10), 0 2px 6px 0 rgba(0,0,0,0.06)',
  xl: '0 8px 24px 0 rgba(0,0,0,0.12), 0 2px 8px 0 rgba(0,0,0,0.06)',
  '2xl': '0 24px 64px 0 rgba(0,0,0,0.14), 0 8px 24px 0 rgba(0,0,0,0.08)',

  // ─── Semantic aliases ────────────────────────────────────────────────────────
  card: '0 1px 2px 0 rgba(0,0,0,0.05), 0 2px 6px 0 rgba(0,0,0,0.04)',
  cardHover: '0 6px 20px 0 rgba(0,0,0,0.10), 0 2px 6px 0 rgba(0,0,0,0.06)',
  dialog: '0 24px 64px 0 rgba(0,0,0,0.14), 0 8px 24px 0 rgba(0,0,0,0.08)',
  sidebar: '4px 0 24px 0 rgba(0,0,0,0.06)',
  navbar: '0 1px 0 0 #E5E7EB, 0 2px 12px 0 rgba(0,0,0,0.04)',
  panel: '0 2px 12px rgba(0,0,0,0.06)',

  // ─── Kanban ──────────────────────────────────────────────────────────────────
  kanbanColumn: '0 2px 8px 0 rgba(0,0,0,0.05)',
  kanbanCard: '0 1px 3px 0 rgba(0,0,0,0.07), 0 2px 8px 0 rgba(0,0,0,0.05)',
  kanbanCardHover: '0 8px 24px 0 rgba(0,0,0,0.12), 0 2px 8px 0 rgba(0,0,0,0.06)',

  // ─── Chat ────────────────────────────────────────────────────────────────────
  chatBubble: '0 1px 4px rgba(0,0,0,0.08)',
  chatBubbleHover: '0 2px 8px rgba(0,0,0,0.12)',
  chatAction: '0 1px 6px rgba(0,0,0,0.12)',

  // ─── Buttons ─────────────────────────────────────────────────────────────────
  buttonPrimary: '0 4px 14px rgba(15,91,255,0.25)',
  buttonPrimaryHover: '0 6px 20px rgba(15,91,255,0.35)',

  // ─── Glows (AppIcon system) ──────────────────────────────────────────────────
  glowIndigo: '0 4px 14px 0 rgba(15,91,255,0.35), 0 1px 4px 0 rgba(15,91,255,0.35)',
  glowBlue: '0 4px 14px 0 rgba(59,130,246,0.32), 0 1px 4px 0 rgba(59,130,246,0.32)',
  glowEmerald: '0 4px 14px 0 rgba(16,185,129,0.32), 0 1px 4px 0 rgba(16,185,129,0.32)',
  glowAmber: '0 4px 14px 0 rgba(245,158,11,0.32), 0 1px 4px 0 rgba(245,158,11,0.32)',
  glowRose: '0 4px 14px 0 rgba(244,63,94,0.32), 0 1px 4px 0 rgba(244,63,94,0.32)',
  glowViolet: '0 4px 14px 0 rgba(139,92,246,0.32), 0 1px 4px 0 rgba(139,92,246,0.32)',
  glowCyan: '0 4px 14px 0 rgba(6,182,212,0.32), 0 1px 4px 0 rgba(6,182,212,0.32)',
  glowOrange: '0 4px 14px 0 rgba(249,115,22,0.32), 0 1px 4px 0 rgba(249,115,22,0.32)',
  glowSlate: '0 4px 14px 0 rgba(100,116,139,0.28), 0 1px 4px 0 rgba(100,116,139,0.28)',

  // ─── Badge / unread ──────────────────────────────────────────────────────────
  unreadBadge: '0 2px 6px rgba(15,91,255,0.35)',
  avatarWithImage: '0 2px 8px rgba(15,91,255,0.25)',
} as const
