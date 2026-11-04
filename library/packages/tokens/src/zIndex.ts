/**
 * Z-index tokens — layering scale for overlapping UI elements,
 * plus semantic aliases for specific component contexts.
 */

export const zIndex = {
  // ─── Base scale ─────────────────────────────────────────────────────────────
  base: 0,
  raised: 1,
  dropdown: 1000,
  sticky: 1100,
  overlay: 1200,
  drawer: 1300,
  modal: 1400,
  notification: 1500,
  toast: 9999,

  // ─── Semantic aliases ────────────────────────────────────────────────────────
  chatActions: 10,
  hoverOverlay: 5,
} as const
