/**
 * Border tokens — widths, styles, semantic color values, and divider variants.
 */

// ─── Border widths ────────────────────────────────────────────────────────────

export const borderWidth = {
  none: '0px',
  thin: '1px',
  medium: '1.5px',
  thick: '2px',
  accent: '3px', // chat quote bar, sidebar accent
} as const

// ─── Border styles ────────────────────────────────────────────────────────────

export const borderStyle = {
  solid: 'solid',
  dashed: 'dashed',
} as const

// ─── Border colors ────────────────────────────────────────────────────────────

export const borderColor = {
  default: '#E5E7EB',
  focus: '#0F5BFF',
  error: '#EF4444',
  success: '#10B981',
  dark: '#334155',
} as const

// ─── Dividers ─────────────────────────────────────────────────────────────────

export const divider = {
  light: '#E5E7EB',
  dark: '#1E293B',
  subtle: 'rgba(0,0,0,0.06)',
} as const
