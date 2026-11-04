import { Box } from '@mui/material'
import type { ReactNode } from 'react'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface AppShellProps {
  /** Sidebar component — pass <Sidebar ... /> */
  sidebar: ReactNode
  /** Navbar component — pass <Navbar ... /> */
  navbar: ReactNode
  /** Main page content */
  children: ReactNode
}

// ─── Component ────────────────────────────────────────────────────────────────

/**
 * Root layout shell — sidebar left, navbar top, content right.
 *
 * AppShell owns no state — wire it with useUIStore for open/close:
 *
 * ```tsx
 * const { sidebarOpen, toggleSidebar } = useUIStore()
 *
 * <AppShell
 *   sidebar={
 *     <Sidebar
 *       items={NAV_ITEMS}
 *       activeId={currentRoute}
 *       onSelect={navigate}
 *       open={sidebarOpen}
 *       onToggle={toggleSidebar}
 *       logo={<Logo />}
 *     />
 *   }
 *   navbar={
 *     <Navbar
 *       title={pageTitle}
 *       endSlot={<TeamSwitcher ... />}
 *     />
 *   }
 * >
 *   <PageWrapper>{pageContent}</PageWrapper>
 * </AppShell>
 * ```
 */
export function AppShell({ sidebar, navbar, children }: AppShellProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
        bgcolor: 'background.default',
      }}
    >
      {/* Sidebar */}
      {sidebar}

      {/* Main area: navbar + content */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          minWidth: 0,
          overflow: 'hidden',
        }}
      >
        {navbar}

        {/* Page content */}
        <Box sx={{ flex: 1, overflow: 'hidden', minHeight: 0 }}>
          {children}
        </Box>
      </Box>
    </Box>
  )
}
