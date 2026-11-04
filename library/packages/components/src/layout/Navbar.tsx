import { Box, Typography, Divider } from '@mui/material'
import type { ReactNode } from 'react'
import { shell } from '@chatdaddy/tokens'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface NavbarProps {
  /** Page title or breadcrumb */
  title?: ReactNode
  /** Left slot — e.g. hamburger button on mobile */
  startSlot?: ReactNode
  /** Right slot — search, notifications, user avatar, team switcher */
  endSlot?: ReactNode
  /** Additional content rendered below the bar (e.g. sub-tabs) */
  children?: ReactNode
}

// ─── Component ────────────────────────────────────────────────────────────────

/**
 * Top navigation bar — fixed height 56px, always white.
 *
 * Slots:
 * - `startSlot` — left side (hamburger, back button, breadcrumb prefix)
 * - `title` — center-left title text or JSX
 * - `endSlot` — right side (team switcher, notifications, avatar)
 * - `children` — extra row below (tabs, filters)
 *
 * Usage:
 * ```tsx
 * <Navbar
 *   title="Inbox"
 *   endSlot={
 *     <>
 *       <NotificationBell />
 *       <TeamSwitcher ... />
 *       <UserAvatar />
 *     </>
 *   }
 * />
 * ```
 */
export function Navbar({ title, startSlot, endSlot, children }: NavbarProps) {
  return (
    <Box
      component="header"
      sx={{
        bgcolor: shell.bg,
        borderBottom: `1px solid ${shell.divider}`,
        flexShrink: 0,
      }}
    >
      <Box
        sx={{
          height: 56,
          display: 'flex',
          alignItems: 'center',
          px: 2,
          gap: 1.5,
        }}
      >
        {/* Start slot */}
        {startSlot && (
          <Box sx={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
            {startSlot}
          </Box>
        )}

        {/* Title */}
        <Box sx={{ flex: 1, minWidth: 0, display: 'flex', alignItems: 'center' }}>
          {typeof title === 'string' ? (
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 600,
                color: shell.text,
                letterSpacing: '-0.015em',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {title}
            </Typography>
          ) : (
            title
          )}
        </Box>

        {/* End slot */}
        {endSlot && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexShrink: 0 }}>
            {endSlot}
          </Box>
        )}
      </Box>

      {/* Sub-row (e.g. tabs) */}
      {children && (
        <>
          <Divider sx={{ borderColor: shell.divider }} />
          <Box sx={{ px: 2 }}>{children}</Box>
        </>
      )}
    </Box>
  )
}
