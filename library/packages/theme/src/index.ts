import { createTheme, type Theme } from '@mui/material/styles'
import type {} from '@mui/x-data-grid/themeAugmentation'
import { brand, shell, fonts, shape, shadows, getModeTokens, type ThemeMode } from '@chatdaddy/tokens'

// ─── MUI module augmentation — typed custom palette entries ──────────────────

declare module '@mui/material/styles' {
  interface Palette {
    shell: {
      bg: string
      bgHover: string
      bgActive: string
      text: string
      textSecondary: string
      accent: string
      accentHover: string
      divider: string
      border: string
    }
  }
  interface PaletteOptions {
    shell?: Palette['shell']
  }
}

// ─── Theme factory ───────────────────────────────────────────────────────────

/**
 * Create the MUI theme for a given mode.
 *
 * Architecture:
 * - `palette.shell.*` — shell colors (sidebar, navbar). Always light/white.
 * - `palette.primary/secondary/error/...` — standard MUI palette. Changes with mode.
 * - `palette.background/text` — surface colors. Change with mode.
 */
export function createAppTheme(mode: ThemeMode = 'light'): Theme {
  const tokens = getModeTokens(mode)

  return createTheme({
    palette: {
      mode,

      // Shell — always white/light
      shell,

      // Brand
      primary: {
        main: brand.primary,
        light: brand.primaryLight,
        dark: brand.primaryDark,
        contrastText: brand.primaryContrast,
      },
      secondary: {
        main: brand.secondary,
        light: brand.secondaryLight,
        dark: brand.secondaryDark,
        contrastText: brand.secondaryContrast,
      },

      // Semantic
      error: { main: tokens.error },
      warning: { main: tokens.warning },
      success: { main: tokens.success },
      info: { main: tokens.info },

      // Surfaces
      background: {
        default: tokens.background,
        paper: tokens.paper,
      },
      text: {
        primary: tokens.textPrimary,
        secondary: tokens.textSecondary,
      },
      divider: tokens.divider,

      action: {
        hover: tokens.actionHover,
        selected: tokens.actionSelected,
      },
    },

    typography: {
      fontFamily: fonts.primary,
      // H1 → 28px semibold
      h1: { fontSize: '1.75rem', fontWeight: 600, lineHeight: 1.25, letterSpacing: '-0.02em' },
      // H2 → 24px semibold
      h2: { fontSize: '1.5rem', fontWeight: 600, lineHeight: 1.3, letterSpacing: '-0.015em' },
      // H3 → 20px medium
      h3: { fontSize: '1.25rem', fontWeight: 500, lineHeight: 1.35, letterSpacing: '-0.01em' },
      // H4 → 18px medium
      h4: { fontSize: '1.125rem', fontWeight: 500, lineHeight: '28px', letterSpacing: '-0.01em' },
      h5: { fontSize: '1rem', fontWeight: 600, lineHeight: '26px' },
      h6: { fontSize: '0.9375rem', fontWeight: 600, lineHeight: '24px' },
      // Body Large → 16px
      body1: { fontSize: '1rem', lineHeight: '24px' },
      // Body Normal → 14px
      body2: { fontSize: '0.875rem', lineHeight: '22px' },
      button: { fontSize: '0.875rem', fontWeight: 600, textTransform: 'none' as const },
      // Caption → 12px
      caption: { fontSize: '0.75rem', lineHeight: '18px' },
      subtitle1: { fontSize: '0.9375rem', fontWeight: 500, lineHeight: '22px' },
      subtitle2: {
        fontSize: '0.875rem',
        fontWeight: 600,
        lineHeight: '20px',
        letterSpacing: '0.01em',
      },
    },

    shape: {
      borderRadius: shape.borderRadius,
    },

    components: {
      MuiCssBaseline: {
        styleOverrides: {
          '*': {
            scrollbarWidth: 'none' as const,
            '&::-webkit-scrollbar': { display: 'none' },
          },
          '.MuiDataGrid-cell': {
            display: 'flex',
            alignItems: 'center',
          },
        },
      },

      MuiButton: {
        defaultProps: { disableElevation: true },
        styleOverrides: {
          root: {
            borderRadius: shape.buttonRadius,
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 16,
            paddingRight: 16,
            fontWeight: 600,
            fontSize: '0.875rem',
            transition: 'all 180ms ease',
            '&:active': { transform: 'scale(0.98)' },
          },
          sizeSmall: {
            paddingTop: 6,
            paddingBottom: 6,
            paddingLeft: 12,
            paddingRight: 12,
            fontSize: '0.8125rem',
          },
          containedPrimary: {
            backgroundColor: brand.primary,
            boxShadow: `0 4px 14px rgba(15,91,255,0.25)`,
            '&:hover': {
              backgroundColor: brand.primaryDark,
              boxShadow: `0 6px 20px rgba(15,91,255,0.35)`,
              transform: 'translateY(-1px)',
            },
            '&:active': {
              backgroundColor: brand.primaryDark,
              boxShadow: 'none',
              transform: 'scale(0.98)',
            },
          },
          contained: {
            boxShadow: 'none',
            '&:hover': { boxShadow: 'none' },
          },
          outlined: {
            borderColor: tokens.divider,
            '&:hover': {
              borderColor: brand.primary,
              backgroundColor: brand.primaryBg,
            },
          },
        },
      },

      MuiCard: {
        defaultProps: { elevation: 0 },
        styleOverrides: {
          root: {
            border: `1px solid ${tokens.cardBorder}`,
            borderRadius: shape.cardRadius,
            boxShadow: shadows.card,
            transition: 'box-shadow 200ms ease, border-color 200ms ease, transform 200ms ease',
          },
        },
      },

      MuiPaper: {
        styleOverrides: {
          rounded: { borderRadius: shape.cardRadius },
          elevation1: { boxShadow: shadows.card },
          elevation8: { boxShadow: shadows.dialog },
          elevation24: { boxShadow: shadows.dialog },
        },
      },

      MuiTextField: {
        defaultProps: { size: 'small', variant: 'outlined' },
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-root': {
              borderRadius: shape.inputRadius,
              fontSize: '0.875rem',
              '& fieldset': { borderColor: tokens.divider },
              '&:hover fieldset': { borderColor: brand.primary },
              '&.Mui-focused fieldset': {
                borderColor: brand.primary,
                borderWidth: 1.5,
              },
            },
          },
        },
      },

      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            borderRadius: shape.inputRadius,
            '& fieldset': { borderColor: tokens.divider },
          },
        },
      },

      MuiDialog: {
        styleOverrides: {
          paper: {
            borderRadius: shape.cardRadius,
            boxShadow: shadows.dialog,
          },
        },
      },

      MuiTooltip: {
        defaultProps: { arrow: true },
        styleOverrides: {
          tooltip: {
            fontSize: '0.75rem',
            borderRadius: 6,
            padding: '6px 10px',
          },
        },
      },

      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: shape.badgeRadius,
            fontWeight: 500,
            fontSize: '0.75rem',
          },
          sizeSmall: {
            height: 22,
          },
        },
      },

      MuiTab: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            fontWeight: 500,
            fontSize: '0.875rem',
            minHeight: 44,
            '&.Mui-selected': { fontWeight: 600 },
          },
        },
      },

      MuiToggleButton: {
        styleOverrides: {
          root: {
            borderRadius: `${shape.buttonRadius}px !important`,
            textTransform: 'none',
            fontWeight: 500,
            fontSize: '0.8125rem',
            border: `1px solid ${tokens.divider}`,
            '&.Mui-selected': {
              backgroundColor: brand.primaryBg,
              color: brand.primary,
              borderColor: brand.primaryLight,
              '&:hover': { backgroundColor: brand.primaryBg },
            },
          },
        },
      },

      MuiToggleButtonGroup: {
        styleOverrides: {
          root: { gap: 4 },
          grouped: {
            border: `1px solid ${tokens.divider} !important`,
            borderRadius: `${shape.buttonRadius}px !important`,
            marginLeft: '0 !important',
          },
        },
      },

      MuiListItemButton: {
        styleOverrides: {
          root: {
            borderRadius: shape.navItemRadius,
            transition: 'all 150ms ease',
          },
        },
      },

      MuiAvatar: {
        styleOverrides: {
          root: {
            fontFamily: fonts.primary,
            fontWeight: 600,
          },
        },
      },

      MuiButtonBase: {
        defaultProps: { disableRipple: false },
      },

      MuiDataGrid: {
        styleOverrides: {
          root: {
            border: 'none',
            fontFamily: fonts.primary,
            fontSize: '0.875rem',
            '& .MuiDataGrid-columnHeaders': {
              backgroundColor: tokens.background,
              borderBottom: `1px solid ${tokens.divider}`,
            },
            '& .MuiDataGrid-columnHeader': {
              fontWeight: 600,
              fontSize: '0.75rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              color: tokens.textSecondary,
            },
            '& .MuiDataGrid-row': {
              borderBottom: `1px solid ${tokens.divider}`,
              '&:hover': { backgroundColor: tokens.actionHover },
            },
            // Prevent cell-level borders stacking with row borders (avoids thick/double lines)
            '& .MuiDataGrid-cell': {
              borderBottom: 'none',
            },
            '& .MuiDataGrid-footerContainer': {
              borderTop: `1px solid ${tokens.divider}`,
            },
          },
        },
      },
    },
  })
}

export type { ThemeMode }
