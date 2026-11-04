import { Box, ButtonBase, IconButton, Tooltip, Typography } from '@mui/material'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Fragment, useState } from 'react'
import type { ReactNode } from 'react'
import { navigationShell } from '@chatdaddy/tokens'

export interface WorkspaceNavigationItem {
  id: string
  label: string
  href: string
  icon: ReactNode
  badge?: string
  dividerBefore?: boolean
}

export interface WorkspaceNavigationProps {
  title: string
  items: WorkspaceNavigationItem[]
  activeId: string
  /** Optional SPA navigation callback. Without it, links navigate normally. */
  onSelect?: (id: string) => void
  initialCollapsed?: boolean
  children?: ReactNode
  expandLabel?: string
  collapseLabel?: string
}

/** Route navigation, not tabs. Adapted from the App's WorkspaceNavigation. */
export function WorkspaceNavigation({ title, items, activeId, onSelect, initialCollapsed = false, children, expandLabel = 'Expand menu', collapseLabel = 'Collapse menu' }: WorkspaceNavigationProps) {
  const [collapsed, setCollapsed] = useState(initialCollapsed)
  const toggleLabel = collapsed ? expandLabel : collapseLabel

  return <Box sx={{ display: 'flex', height: '100%', minHeight: 0, overflow: 'hidden' }}>
    <Box component="nav" aria-label={title} sx={{
      width: collapsed ? navigationShell.secondaryCollapsedWidth : navigationShell.secondaryWidth,
      flexShrink: 0, display: 'flex', flexDirection: 'column', borderRight: '1px solid', borderColor: 'divider',
      bgcolor: 'background.paper', transition: 'width 200ms ease-in-out',
      '@media (prefers-reduced-motion: reduce)': { transition: 'none' },
    }}>
      <Box sx={{ height: 80, px: collapsed ? '18px' : '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
        {!collapsed && <Typography component="h2" sx={{ fontSize: 18, fontWeight: 750, letterSpacing: '-0.025em', color: 'text.primary' }}>{title}</Typography>}
        <Tooltip title={toggleLabel}><IconButton
          aria-label={toggleLabel} aria-expanded={!collapsed} onClick={() => setCollapsed(value => !value)} size="small">
          {collapsed ? <ChevronRight size={19} /> : <ChevronLeft size={19} />}
        </IconButton></Tooltip>
      </Box>
      <Box sx={{ overflowY: 'auto', px: '12px', pb: '16px', display: 'grid', alignContent: 'start', gap: '6px' }}>
        {items.map(item => {
          const selected = item.id === activeId
          return <Fragment key={item.id}>
            {item.dividerBefore && <Box role="separator" sx={{ height: 1, mx: collapsed ? 1 : 1.5, my: 1, bgcolor: 'divider' }} />}
            <Tooltip title={collapsed ? [item.label, item.badge].filter(Boolean).join(' — ') : ''} placement="right"><ButtonBase
              component="a" href={item.href}
              aria-label={item.label} aria-description={item.badge}
              aria-current={selected ? 'page' : undefined}
              onClick={event => { if (onSelect && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) { event.preventDefault(); onSelect(item.id) } }}
              sx={{
                minHeight: 50, px: collapsed ? 0 : '14px', gap: '12px',
                justifyContent: collapsed ? 'center' : 'flex-start', textAlign: 'left', borderRadius: '12px',
                border: '1px solid', borderColor: selected ? navigationShell.accent : 'transparent',
                color: selected ? navigationShell.accent : 'text.secondary',
                bgcolor: selected ? '#EBF0FF' : 'transparent', textDecoration: 'none',
                transition: 'background-color 180ms ease, color 180ms ease',
                '&:hover': { bgcolor: 'action.hover', textDecoration: 'none' },
                '&.Mui-focusVisible': { outline: `2px solid ${navigationShell.accent}`, outlineOffset: 2 },
                '@media (prefers-reduced-motion: reduce)': { transition: 'none' },
              }}>
              <Box component="span" aria-hidden="true" sx={{ display: 'inline-flex', flexShrink: 0, '& svg': { width: 22, height: 22, strokeWidth: selected ? 2.5 : 2.2 } }}>{item.icon}</Box>
              {!collapsed && <Typography component="span" noWrap sx={{ fontSize: 14, fontWeight: selected ? 700 : 550 }}>{item.label}</Typography>}
              {!collapsed && item.badge && <Box component="span" sx={{ ml: 'auto', px: '6px', py: '3px', borderRadius: '5px', bgcolor: 'action.hover', color: 'text.secondary', fontSize: 10, fontWeight: 600, whiteSpace: 'nowrap' }}>{item.badge}</Box>}
            </ButtonBase></Tooltip>
          </Fragment>
        })}
      </Box>
    </Box>
    {children && <Box component="section" aria-label={items.find(item => item.id === activeId)?.label} sx={{ flex: 1, minWidth: 0, minHeight: 0, overflow: 'auto', bgcolor: 'background.default' }}>{children}</Box>}
  </Box>
}
