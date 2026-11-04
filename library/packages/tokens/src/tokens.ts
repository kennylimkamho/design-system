/**
 * Design tokens — the SINGLE SOURCE OF TRUTH for all visual values.
 *
 * Rules:
 * - No component may use raw hex values. Import from here or use theme.palette.
 * - Shell tokens are mode-invariant (always light sidebar/navbar — white SaaS style).
 * - Content tokens have light/dark variants.
 * - Brand tokens are mode-invariant.
 */

// ─── Shell (sidebar + navbar) — always light/white, modern SaaS style ────────

export const shell = {
  bg: '#FFFFFF',
  bgHover: '#F3F4F6',
  bgActive: '#EBF0FF',
  text: '#111827',
  textSecondary: '#6B7280',
  accent: '#0F5BFF',
  accentHover: '#0040C1',
  divider: '#E5E7EB',
  border: '#E5E7EB',
} as const

// ─── Brand — mode-invariant ──────────────────────────────────────────────────

export const brand = {
  primary: '#0F5BFF',
  primaryLight: '#6693FF',
  primaryDark: '#0040C1',
  primaryContrast: '#FFFFFF',
  primaryBg: '#EBF0FF',
  secondary: '#3B82F6',
  secondaryLight: '#DBEAFE',
  secondaryDark: '#1D4ED8',
  secondaryContrast: '#FFFFFF',
} as const

// ─── Semantic colors — per-mode ──────────────────────────────────────────────

export const light = {
  background: '#ECEEF2',
  paper: '#FFFFFF',
  textPrimary: '#111827',
  textSecondary: '#6B7280',
  textMuted: '#9CA3AF',
  divider: '#E5E7EB',
  error: '#EF4444',
  warning: '#F59E0B',
  success: '#10B981',
  info: '#3B82F6',
  actionHover: '#F3F4F6',
  actionSelected: '#EBF0FF',
  cardBorder: '#E5E7EB',
} as const

export const dark = {
  background: '#0F172A',
  paper: '#1E293B',
  textPrimary: '#F1F5F9',
  textSecondary: '#94A3B8',
  textMuted: '#64748B',
  divider: '#1E293B',
  error: '#F87171',
  warning: '#FCD34D',
  success: '#34D399',
  info: '#60A5FA',
  actionHover: 'rgba(148, 163, 184, 0.08)',
  actionSelected: 'rgba(79, 70, 229, 0.12)',
  cardBorder: '#334155',
} as const

// ─── Typography ──────────────────────────────────────────────────────────────

export const fonts = {
  primary: '"Sora", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  brand: '"Sora", sans-serif',
} as const

// ─── Shape ───────────────────────────────────────────────────────────────────

export const shape = {
  borderRadius: 8, // small — inputs, default
  cardRadius: 16, // cards, modals
  buttonRadius: 12, // buttons
  inputRadius: 12, // inputs
  navItemRadius: 10, // sidebar nav items
  badgeRadius: 8, // badges, chips
} as const

// ─── Layout ──────────────────────────────────────────────────────────────────

export const layout = {
  navbarHeight: 54,
  sidebarWidth: 230,
  sidebarWidthCollapsed: 60,
} as const

// ─── Shadows ─────────────────────────────────────────────────────────────────

export const shadows = {
  card: '0 1px 2px 0 rgba(0,0,0,0.05), 0 2px 6px 0 rgba(0,0,0,0.04)',
  cardHover: '0 6px 20px 0 rgba(0,0,0,0.10), 0 2px 6px 0 rgba(0,0,0,0.06)',
  dialog: '0 24px 64px 0 rgba(0,0,0,0.14), 0 8px 24px 0 rgba(0,0,0,0.08)',
  sidebar: '4px 0 24px 0 rgba(0,0,0,0.06)',
  navbar: '0 1px 0 0 #E5E7EB, 0 2px 12px 0 rgba(0,0,0,0.04)',
  kanbanColumn: '0 2px 8px 0 rgba(0,0,0,0.05)',
  kanbanCard: '0 1px 3px 0 rgba(0,0,0,0.07), 0 2px 8px 0 rgba(0,0,0,0.05)',
  kanbanCardHover: '0 8px 24px 0 rgba(0,0,0,0.12), 0 2px 8px 0 rgba(0,0,0,0.06)',
} as const

// ─── Type helpers ────────────────────────────────────────────────────────────

export type ThemeMode = 'light' | 'dark'
export type ModeTokens = typeof light | typeof dark

export function getModeTokens(mode: ThemeMode): ModeTokens {
  return mode === 'light' ? light : dark
}
