/**
 * Color tokens — complete color system for ChatDaddy design system.
 * Includes shell, brand, semantic (light+dark), gradients, platform, tag palette.
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

/** Current desktop product rail; separate from the legacy white shell token. */
export const navigationShell = {
  bg: '#EEF2F6',
  hover: '#CBD2D9',
  active: 'rgba(51, 65, 85, 0.10)',
  activeHover: 'rgba(51, 65, 85, 0.14)',
  text: '#323F4B',
  divider: '#DCE0E7',
  border: '#E1E4EA',
  accent: '#0F5BFF',
  railWidth: 56,
  panelWidth: 230,
  secondaryWidth: 232,
  secondaryCollapsedWidth: 76,
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

// ─── Semantic colors — light mode ────────────────────────────────────────────

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

// ─── Semantic colors — dark mode ─────────────────────────────────────────────

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

// ─── Gradients ───────────────────────────────────────────────────────────────

export const gradients = {
  primary: 'linear-gradient(135deg, #0F5BFF 0%, #0040C1 100%)',
  indigo: 'linear-gradient(135deg, #0F5BFF, #7C3AED)',
  blue: 'linear-gradient(135deg, #0EA5E9, #0F5BFF)',
  emerald: 'linear-gradient(135deg, #10B981, #059669)',
  amber: 'linear-gradient(135deg, #F59E0B, #D97706)',
  rose: 'linear-gradient(135deg, #EC4899, #BE185D)',
  violet: 'linear-gradient(135deg, #8B5CF6, #6D28D9)',
  cyan: 'linear-gradient(135deg, #06B6D4, #0284C7)',
  orange: 'linear-gradient(135deg, #F97316, #C2410C)',
  slate: 'linear-gradient(135deg, #64748B, #475569)',
} as const

// ─── Platform channel colors ──────────────────────────────────────────────────

export const platform = {
  wa: '#25D366',
  waBusiness: '#25D366',
  instagram: 'linear-gradient(135deg, #833AB4, #FD1D1D, #F77737)',
  messenger: 'linear-gradient(135deg, #0084FF, #0052D4)',
  mail: '#EA4335',
  tiktok: '#010101',
  sms: '#34C759',
  voice: '#F22F46',
  telegram: '#26A5E4',
  line: '#06C755',
  mock: '#7D7D7D',
} as const

// ─── Tag palette ─────────────────────────────────────────────────────────────

export const tag = {
  palette: [
    '#FF6B6B',
    '#51CF66',
    '#339AF0',
    '#FCC419',
    '#CC5DE8',
    '#22B8CF',
    '#FF922B',
    '#845EF7',
    '#20C997',
    '#F06595',
  ] as const,
  backgrounds: [
    { bg: '#EBF0FF', text: '#0040C1' }, // indigo
    { bg: '#ECFDF5', text: '#065F46' }, // emerald
    { bg: '#FFF7ED', text: '#9A3412' }, // orange
    { bg: '#EFF6FF', text: '#1E40AF' }, // blue
    { bg: '#FDF4FF', text: '#6B21A8' }, // violet
    { bg: '#FFF1F2', text: '#9F1239' }, // rose
    { bg: '#F0FDFA', text: '#115E59' }, // teal
    { bg: '#FEFCE8', text: '#854D0E' }, // amber
    { bg: '#F0F9FF', text: '#075985' }, // sky
    { bg: '#F5F3FF', text: '#5B21B6' }, // purple
  ] as const,
} as const

// ─── Avatar gradients ─────────────────────────────────────────────────────────

export const avatar = {
  gradients: [
    'linear-gradient(135deg, #0F5BFF, #7C3AED)',
    'linear-gradient(135deg, #0EA5E9, #0F5BFF)',
    'linear-gradient(135deg, #10B981, #059669)',
    'linear-gradient(135deg, #F59E0B, #D97706)',
    'linear-gradient(135deg, #EC4899, #BE185D)',
    'linear-gradient(135deg, #8B5CF6, #6D28D9)',
    'linear-gradient(135deg, #06B6D4, #0284C7)',
    'linear-gradient(135deg, #F97316, #C2410C)',
  ] as const,
} as const

// ─── Type helpers ─────────────────────────────────────────────────────────────

export type ThemeMode = 'light' | 'dark'
export type ModeTokens = typeof light | typeof dark

export function getModeTokens(mode: ThemeMode): ModeTokens {
  return mode === 'light' ? light : dark
}
