import { Box, Typography } from '@mui/material'
import type { ReactNode } from 'react'

export interface PageWrapperProps {
  children: ReactNode
  /** Override scroll behaviour — default is 'hidden' (inner content scrolls) */
  overflow?: 'hidden' | 'auto'
  /**
   * Optional page title displayed at the top of the wrapper.
   * In v2, this was provided by usePageTitle() hook (from router context).
   * In the design system, pass it directly as a prop for query-agnosticism.
   */
  title?: string
}

/**
 * Unified page wrapper — matches the inbox card style.
 * All pages should be wrapped with this to get consistent:
 *   - 12px outer margin (top / bottom / left / right)
 *   - 24px border radius
 *   - soft card shadow
 *   - white background
 */
export function PageWrapper({ children, overflow = 'hidden', title }: PageWrapperProps) {
  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        pt: '12px',
        pb: '12px',
        pr: '12px',
        pl: 0,
        bgcolor: 'background.default',
        boxSizing: 'border-box',
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '24px',
          overflow,
          bgcolor: 'background.paper',
          boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
          minHeight: 0,
        }}
      >
        {title && (
          <Box sx={{ px: 3, pt: 2.5, pb: 0, flexShrink: 0 }}>
            <Typography
              sx={{
                fontSize: '1rem',
                fontWeight: 600,
                letterSpacing: '-0.015em',
                color: 'text.primary',
              }}
            >
              {title}
            </Typography>
          </Box>
        )}
        {children}
      </Box>
    </Box>
  )
}
