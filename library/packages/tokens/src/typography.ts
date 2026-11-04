/**
 * Typography tokens — font families, sizes, weights, line heights,
 * letter spacing, and named type scale presets.
 */

// ─── Font families ────────────────────────────────────────────────────────────

export const fontFamily = {
  primary: '"Sora", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  brand: '"Sora", sans-serif',
  mono: '"JetBrains Mono", "Fira Code", monospace',
} as const

// ─── Font sizes ───────────────────────────────────────────────────────────────

export const fontSize = {
  '2xs': '0.625rem',  // 10px — section labels, tiny metadata
  xs:   '0.6875rem', // 11px — timestamps, micro labels
  sm:   '0.75rem',   // 12px — caption, badge text
  md:   '0.8125rem', // 13px — secondary body, list items
  base: '0.875rem',  // 14px — body2, button
  lg:   '1rem',      // 16px — body1, h5
  xl:   '1.125rem',  // 18px — h4
  '2xl':'1.25rem',   // 20px — h3
  '3xl':'1.5rem',    // 24px — h2
  '4xl':'1.75rem',   // 28px — h1
} as const

// ─── Font weights ─────────────────────────────────────────────────────────────

export const fontWeight = {
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
} as const

// ─── Line heights ─────────────────────────────────────────────────────────────

export const lineHeight = {
  tight: 1.25,
  snug: 1.3,
  normal: 1.4,
  relaxed: 1.5,
  loose: 1.6,
} as const

// ─── Letter spacing ───────────────────────────────────────────────────────────

export const letterSpacing = {
  tighter: '-0.02em',
  tight: '-0.015em',
  snug: '-0.01em',
  normal: '0',
  wide: '0.01em',
  wider: '0.05em',
  widest: '0.08em',
  label: '0.1em',
  caps: '0.12em',
} as const

// ─── Named type scale — maps to MUI variants ──────────────────────────────────

export const typeScale = {
  h1: {
    fontSize: fontSize['4xl'],
    fontWeight: fontWeight.semibold,
    lineHeight: lineHeight.tight,
    letterSpacing: letterSpacing.tighter,
  },
  h2: {
    fontSize: fontSize['3xl'],
    fontWeight: fontWeight.semibold,
    lineHeight: lineHeight.snug,
    letterSpacing: letterSpacing.tight,
  },
  h3: {
    fontSize: fontSize['2xl'],
    fontWeight: fontWeight.medium,
    lineHeight: lineHeight.snug,
    letterSpacing: letterSpacing.snug,
  },
  h4: {
    fontSize: fontSize.xl,
    fontWeight: fontWeight.medium,
    lineHeight: '28px',
    letterSpacing: letterSpacing.snug,
  },
  h5: {
    fontSize: fontSize.lg,
    fontWeight: fontWeight.semibold,
    lineHeight: '26px',
  },
  h6: {
    fontSize: fontSize.md,
    fontWeight: fontWeight.semibold,
    lineHeight: '24px',
  },
  body1: {
    fontSize: fontSize.lg,
    lineHeight: '24px',
  },
  body2: {
    fontSize: fontSize.base,
    lineHeight: '22px',
  },
  bodySmall: {
    fontSize: fontSize.md,
    lineHeight: '20px',
  },
  button: {
    fontSize: fontSize.base,
    fontWeight: fontWeight.semibold,
    letterSpacing: '0',
  },
  caption: {
    fontSize: fontSize.sm,
    lineHeight: '18px',
  },
  label: {
    fontSize: fontSize['2xs'],
    fontWeight: fontWeight.bold,
    letterSpacing: letterSpacing.caps,
    textTransform: 'uppercase' as const,
  },
  timestamp: {
    fontSize: fontSize.xs,
    lineHeight: 1,
  },
} as const
