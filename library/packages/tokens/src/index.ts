/**
 * Token package public API.
 *
 * All visual tokens are exported from their focused files.
 * tokens.ts is preserved for backward compatibility — its shape/layout/fonts
 * exports are re-exported here explicitly; its shell/brand/light/dark/shadows
 * are superseded by the richer exports from colors.ts and shadows.ts.
 */

// ─── Backward-compat named exports from tokens.ts ────────────────────────────
// (shell, brand, light, dark, shadows are intentionally omitted here —
//  they are exported from colors.ts and shadows.ts with extended values)
export { fonts, shape, layout } from './tokens'

// ─── Focused token files ──────────────────────────────────────────────────────
export * from './colors'
export * from './typography'
export * from './spacing'
export * from './radius'
export * from './shadows'
export * from './borders'
export * from './motion'
export * from './zIndex'
