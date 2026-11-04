/**
 * AppIcon — Cinematic icon wrapper component.
 *
 * Renders lucide-react icons with optional:
 * - Gradient background container (square / circle)
 * - Soft glow shadow matching the icon color
 * - Animated hover state
 * - Consistent stroke width and sizing
 *
 * Usage:
 *   <AppIcon icon={Users} color="indigo" />
 *   <AppIcon icon={Phone} color="#3B82F6" size="lg" shape="circle" glow />
 *   <AppIcon icon={MessageSquare} bare size={20} />
 */

import { memo, forwardRef } from 'react'
import { Box, type SxProps, type Theme } from '@mui/material'
import type { LucideIcon } from 'lucide-react'

// ─── Size map ────────────────────────────────────────────────────────────────

const SIZE_MAP = {
  xs: { icon: 12, container: 24, radius: 6 },
  sm: { icon: 14, container: 28, radius: 7 },
  md: { icon: 16, container: 32, radius: 8 },
  lg: { icon: 18, container: 36, radius: 10 },
  xl: { icon: 20, container: 40, radius: 11 },
  '2xl': { icon: 24, container: 48, radius: 13 },
} as const

export type AppIconSize = keyof typeof SIZE_MAP

// ─── Color presets ──────────────────────────────────────────────────────────

const COLOR_PRESETS: Record<string, { from: string; to: string; glow: string; text: string }> = {
  indigo: {
    from: '#0F5BFF',
    to: '#0040C1',
    glow: 'rgba(15, 91, 255, 0.35)',
    text: '#fff',
  },
  blue: {
    from: '#3B82F6',
    to: '#2563EB',
    glow: 'rgba(59, 130, 246, 0.32)',
    text: '#fff',
  },
  emerald: {
    from: '#10B981',
    to: '#059669',
    glow: 'rgba(16, 185, 129, 0.32)',
    text: '#fff',
  },
  amber: {
    from: '#F59E0B',
    to: '#D97706',
    glow: 'rgba(245, 158, 11, 0.32)',
    text: '#fff',
  },
  rose: {
    from: '#F43F5E',
    to: '#E11D48',
    glow: 'rgba(244, 63, 94, 0.32)',
    text: '#fff',
  },
  violet: {
    from: '#8B5CF6',
    to: '#7C3AED',
    glow: 'rgba(139, 92, 246, 0.32)',
    text: '#fff',
  },
  cyan: {
    from: '#06B6D4',
    to: '#0891B2',
    glow: 'rgba(6, 182, 212, 0.32)',
    text: '#fff',
  },
  orange: {
    from: '#F97316',
    to: '#EA580C',
    glow: 'rgba(249, 115, 22, 0.32)',
    text: '#fff',
  },
  slate: {
    from: '#64748B',
    to: '#475569',
    glow: 'rgba(100, 116, 139, 0.28)',
    text: '#fff',
  },
}

// ─── Props ───────────────────────────────────────────────────────────────────

export interface AppIconProps {
  /** Lucide icon component */
  icon: LucideIcon
  /** Named preset or raw hex color string */
  color?: keyof typeof COLOR_PRESETS | string
  /** Container size preset */
  size?: AppIconSize
  /** Container shape */
  shape?: 'square' | 'circle'
  /** Show glow shadow under the container */
  glow?: boolean
  /** Bare mode — no container, just the icon with the color */
  bare?: boolean
  /** Raw pixel size override for bare mode */
  iconSize?: number
  /** Stroke width — default 1.75 for cinematic feel */
  strokeWidth?: number
  /** Hover animation (scale + brighten) */
  interactive?: boolean
  /** Extra sx on the outer Box */
  sx?: SxProps<Theme>
  /** Click handler */
  onClick?: () => void
}

// ─── Component ───────────────────────────────────────────────────────────────

export const AppIcon = memo(
  forwardRef<HTMLDivElement, AppIconProps>(function AppIcon(
    {
      icon: Icon,
      color = 'indigo',
      size = 'md',
      shape = 'square',
      glow = false,
      bare = false,
      iconSize,
      strokeWidth = 1.75,
      interactive = false,
      sx,
      onClick,
    },
    ref
  ) {
    const dims = SIZE_MAP[size]
    const preset = COLOR_PRESETS[color as keyof typeof COLOR_PRESETS]
    const rawColor = preset ? preset.from : (color as string)
    const glowColor = preset ? preset.glow : `${rawColor}44`
    const iconColor = bare ? rawColor : (preset?.text ?? '#fff')
    const resolvedIconSize = iconSize ?? dims.icon
    const resolvedRadius = shape === 'circle' ? '50%' : `${dims.radius}px`

    const gradient = preset
      ? `linear-gradient(135deg, ${preset.from} 0%, ${preset.to} 100%)`
      : rawColor

    if (bare) {
      return (
        <Box
          ref={ref}
          component="span"
          onClick={onClick}
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: iconColor,
            cursor: onClick ? 'pointer' : 'default',
            transition: 'opacity 150ms ease',
            ...(interactive && {
              '&:hover': { opacity: 0.7 },
            }),
            ...sx,
          }}
        >
          <Icon size={resolvedIconSize} strokeWidth={strokeWidth} />
        </Box>
      )
    }

    return (
      <Box
        ref={ref}
        onClick={onClick}
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: dims.container,
          height: dims.container,
          borderRadius: resolvedRadius,
          background: gradient,
          flexShrink: 0,
          cursor: onClick ? 'pointer' : 'default',
          // Cinematic layered shadow
          boxShadow: glow
            ? `0 4px 14px 0 ${glowColor}, 0 1px 4px 0 ${glowColor}`
            : `0 1px 4px 0 ${glowColor}`,
          transition: 'transform 180ms ease, box-shadow 180ms ease',
          ...(interactive && {
            '&:hover': {
              transform: 'scale(1.06)',
              boxShadow: `0 6px 20px 0 ${glowColor}, 0 2px 6px 0 ${glowColor}`,
            },
            '&:active': {
              transform: 'scale(0.97)',
            },
          }),
          ...sx,
        }}
      >
        <Icon size={resolvedIconSize} strokeWidth={strokeWidth} color={iconColor} />
      </Box>
    )
  })
)

// ─── Convenience wrappers ─────────────────────────────────────────────────────

/**
 * Inline bare icon — just the icon, no container, with color.
 * Drop-in replacement for MUI icon components.
 */
export const Icon = memo(function Icon({
  icon: LIcon,
  size = 18,
  color = 'currentColor',
  strokeWidth = 1.75,
  sx,
}: {
  icon: LucideIcon
  size?: number
  color?: string
  strokeWidth?: number
  sx?: SxProps<Theme>
}) {
  return (
    <Box
      component="span"
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        color,
        lineHeight: 0,
        ...sx,
      }}
    >
      <LIcon size={size} strokeWidth={strokeWidth} />
    </Box>
  )
})
