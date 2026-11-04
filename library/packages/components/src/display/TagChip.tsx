import { Chip, type ChipProps } from '@mui/material'

// ─── Default tag colors ─────────────────────────────────────────────────────

const TAG_COLORS = [
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
]

/** Deterministic color from tag name */
function colorForTag(name: string, explicitColor?: string): string {
  if (explicitColor) return explicitColor
  let hash = 0
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash)
  }
  return TAG_COLORS[Math.abs(hash) % TAG_COLORS.length]
}

// ─── Types ──────────────────────────────────────────────────────────────────

export interface TagChipProps extends Omit<ChipProps, 'variant'> {
  /** Tag name — displayed as label */
  tagName: string
  /** Explicit hex color. If omitted, derived from tag name hash. */
  tagColor?: string
  /** Chip visual variant */
  variant?: 'filled' | 'outlined'
}

// ─── Component ──────────────────────────────────────────────────────────────

/**
 * Displays a tag as a small chip with a colored dot.
 *
 * Usage:
 * ```tsx
 * <TagChip tagName="VIP" tagColor="#FF6B6B" />
 * <TagChip tagName="Lead" onDelete={() => handleRemove("Lead")} />
 * ```
 */
export function TagChip({ tagName, tagColor, variant = 'filled', sx, ...chipProps }: TagChipProps) {
  const color = colorForTag(tagName, tagColor)

  return (
    <Chip
      label={tagName}
      size="small"
      variant={variant === 'outlined' ? 'outlined' : 'filled'}
      icon={
        <span
          style={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            backgroundColor: color,
            flexShrink: 0,
            marginLeft: 6,
          }}
        />
      }
      sx={{
        height: 24,
        fontSize: '0.75rem',
        fontWeight: 500,
        bgcolor: variant === 'filled' ? `${color}20` : 'transparent',
        color: 'text.primary',
        borderColor: variant === 'outlined' ? color : undefined,
        '& .MuiChip-icon': {
          marginRight: -0.5,
        },
        ...sx,
      }}
      {...chipProps}
    />
  )
}
