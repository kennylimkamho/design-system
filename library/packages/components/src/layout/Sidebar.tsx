import { Box, ButtonBase, Collapse, Divider, IconButton, Tooltip, Typography, useMediaQuery } from '@mui/material'
import { ChevronDown, ChevronLeft, ChevronRight, Pin, PinOff } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import type { ReactNode, RefObject } from 'react'
import { ChatDaddyMark, ModuleIcon } from '@chatdaddy/icons'
import type { ModuleIconName } from '@chatdaddy/icons'
import { navigationShell } from '@chatdaddy/tokens'
import { formatNavigationBadge } from './navigationBadge'
import type { NavigationBadgeValue } from './navigationBadge'

export interface SidebarNavItem {
  id: string
  label: string
  /** Existing callers may pass an icon; product modules should use moduleIcon. */
  icon?: ReactNode
  moduleIcon?: ModuleIconName
  badge?: NavigationBadgeValue
  children?: SidebarNavItem[]
  dividerBefore?: boolean
  /** A group without a destination opens/closes on activation. */
  disclosureOnly?: boolean
}

export interface SidebarProps {
  items: SidebarNavItem[]
  activeId?: string
  onSelect: (id: string) => void
  open: boolean
  /** Legacy controlled collapse toggle. Prefer onTogglePin inside NavigationRailShell. */
  onToggle: () => void
  logo?: ReactNode
  brandName?: string
  bottomSlot?: ReactNode
  navLabel?: string
  badgeLabel?: string
  pinned?: boolean
  onTogglePin?: () => void
}

const focusSx = { outline: `2px solid ${navigationShell.accent}`, outlineOffset: '2px' }
const rowSx = {
  width: '100%', minHeight: 42, px: '10px', gap: '10px', borderRadius: '10px',
  justifyContent: 'flex-start', textAlign: 'left', color: navigationShell.text,
  transition: 'background-color 180ms ease, color 180ms ease',
  '&:hover': { bgcolor: navigationShell.hover },
  '&.Mui-focusVisible': focusSx,
  '@media (prefers-reduced-motion: reduce)': { transition: 'none' },
} as const

type DisclosureControl = { open: boolean; toggle: () => void; controls: string; toggleRef: RefObject<HTMLButtonElement> }
type RowRenderer = (item: SidebarNavItem, nested?: boolean, disclosure?: DisclosureControl) => ReactNode

/** App-derived primary navigation. Routing, gates, counts and locale stay in the caller. */
export function Sidebar({
  items, activeId, onSelect, open, onToggle, logo, brandName = 'ChatDaddy', bottomSlot,
  navLabel = 'Main navigation', badgeLabel = 'unread conversations', pinned, onTogglePin,
}: SidebarProps) {
  const width = open ? navigationShell.panelWidth : navigationShell.railWidth
  const reduceMotion = useMediaQuery('(prefers-reduced-motion: reduce)')

  const renderRow: RowRenderer = (item, nested = false, disclosure) => {
    const isActive = item.id === activeId
    const badge = nested ? null : formatNavigationBadge(item.badge)
    const row = <ButtonBase
      aria-label={badge ? `${item.label} — ${badge.spoken} ${badgeLabel}` : item.label}
      aria-current={isActive ? 'page' : undefined}
      aria-expanded={item.disclosureOnly && disclosure ? disclosure.open && open : undefined}
      aria-controls={item.disclosureOnly ? disclosure?.controls : undefined}
      onClick={() => {
        if (item.disclosureOnly && disclosure) {
          if (!open) onToggle()
          disclosure.toggle()
        } else onSelect(item.id)
      }}
      ref={item.disclosureOnly ? disclosure?.toggleRef : undefined}
      sx={{
        ...rowSx, minHeight: nested ? 36 : 42,
        justifyContent: open ? 'flex-start' : 'center',
        fontSize: nested ? 13 : 14, fontWeight: isActive ? 700 : 500,
        bgcolor: isActive ? navigationShell.active : 'transparent',
        '&:hover': { bgcolor: isActive ? navigationShell.activeHover : navigationShell.hover },
      }}>
      <Box component="span" sx={{ display: 'inline-flex', position: 'relative', flexShrink: 0 }}>
        {item.icon ?? (item.moduleIcon ? <ModuleIcon name={item.moduleIcon} size={nested ? 20 : 24} /> : null)}
        {badge && <Box component="span" aria-hidden="true" sx={{
          position: 'absolute', top: -7, right: -11, minWidth: 16, height: 16, px: '3px',
          display: 'grid', placeItems: 'center', borderRadius: '999px', bgcolor: navigationShell.accent,
          color: '#fff', border: '2px solid transparent', boxSizing: 'content-box',
          fontSize: 9, lineHeight: 1, fontWeight: 750, fontVariantNumeric: 'tabular-nums',
        }}>{badge.visible}</Box>}
      </Box>
      {open && <Typography component="span" noWrap sx={{ flex: 1, textAlign: 'left', fontSize: 'inherit', fontWeight: 'inherit' }}>{item.label}</Typography>}
      {open && item.disclosureOnly && disclosure && <ChevronDown size={16} aria-hidden="true" style={{ transform: disclosure.open ? undefined : 'rotate(-90deg)', transition: reduceMotion ? 'none' : 'transform 180ms ease' }} />}
    </ButtonBase>
    return <Tooltip title={open ? '' : item.label} placement="right" arrow>{row}</Tooltip>
  }

  return <Box component="aside" sx={{
    width, minWidth: width, height: '100%', bgcolor: navigationShell.bg, color: navigationShell.text,
    display: 'flex', flexDirection: 'column', overflow: 'hidden', flexShrink: 0,
    transition: 'width 180ms ease', '@media (prefers-reduced-motion: reduce)': { transition: 'none' },
  }}>
    <Box sx={{
      display: 'flex', alignItems: 'center', minHeight: 76, px: open ? '12px' : 0,
      justifyContent: open ? 'space-between' : 'center',
      '&:hover .sidebar-pin, &:focus-within .sidebar-pin': { opacity: 1, pointerEvents: 'auto' },
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: 0, p: '4px' }}>
        {logo ?? <ChatDaddyMark size={28} />}
        {open && <Typography noWrap sx={{ fontSize: 16, fontWeight: 650 }}>{brandName}</Typography>}
      </Box>
      {onTogglePin && open && <Tooltip title={pinned ? 'Unpin to auto-hide navigation' : 'Pin to keep navigation open'}>
        <IconButton
          className="sidebar-pin" size="small" aria-label={pinned ? 'Unpin sidebar' : 'Pin sidebar'}
          aria-pressed={!!pinned} onClick={onTogglePin}
          sx={{ opacity: 0, pointerEvents: 'none', color: navigationShell.text,
            '&:focus-visible': { ...focusSx, opacity: 1, pointerEvents: 'auto' },
            '@media (hover: none)': { opacity: 1, pointerEvents: 'auto' },
          }}>
          {pinned ? <PinOff size={18} /> : <Pin size={18} />}
        </IconButton>
      </Tooltip>}
    </Box>
    <Box component="nav" aria-label={navLabel} sx={{
      display: 'flex', flexDirection: 'column', gap: '4px', px: '8px', pb: '12px',
      overflowY: 'auto', overflowX: 'hidden', flex: 1, minHeight: 0, scrollbarWidth: 'thin',
    }}>
      {items.map(item => <Box key={item.id} sx={{ flexShrink: 0 }}>
        {item.dividerBefore && <Divider sx={{ borderColor: navigationShell.divider, my: 1, mx: 0.5 }} />}
        {item.children?.length
          ? <Disclosure item={item} activeId={activeId} expanded={open} reduceMotion={reduceMotion} renderRow={renderRow} />
          : renderRow(item)}
      </Box>)}
    </Box>
    {bottomSlot && <Box sx={{ px: '8px', py: '6px', borderTop: `1px solid ${navigationShell.divider}` }}>{bottomSlot}</Box>}
    {!onTogglePin && <Box sx={{ display: 'flex', justifyContent: open ? 'flex-end' : 'center', px: 1, pb: 1 }}>
      <IconButton size="small" aria-label={open ? 'Collapse sidebar' : 'Expand sidebar'} onClick={onToggle} sx={{ color: navigationShell.text, '&:focus-visible': focusSx }}>
        {open ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
      </IconButton>
    </Box>}
  </Box>
}

function Disclosure({ item, activeId, expanded, reduceMotion, renderRow }: {
  item: SidebarNavItem; activeId?: string; expanded: boolean; reduceMotion: boolean; renderRow: RowRenderer
}) {
  const activeChild = !!item.children?.some(child => child.id === activeId)
  const [open, setOpen] = useState(activeChild)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const controls = `sidebar-${item.id}-children`
  useEffect(() => { if (activeChild) setOpen(true) }, [activeChild])
  const toggle = () => setOpen(value => !value)

  return <Box data-nav-group={item.id} sx={{
    '& .sidebar-disclosure-chevron': { opacity: 0, transition: 'opacity 160ms ease' },
    '&:hover .sidebar-disclosure-chevron, &:focus-within .sidebar-disclosure-chevron': { opacity: 1 },
    '@media (hover: none)': { '& .sidebar-disclosure-chevron': { opacity: 1 } },
    '@media (prefers-reduced-motion: reduce)': { '& .sidebar-disclosure-chevron': { transition: 'none' } },
  }}>
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
      {renderRow(item, false, { open, toggle, controls, toggleRef })}
      {!item.disclosureOnly && expanded && <IconButton
        ref={toggleRef} size="small" className="sidebar-disclosure-chevron"
        aria-label={`Show ${item.label} sections`} aria-expanded={open} aria-controls={controls}
        onClick={toggle} sx={{ mr: '4px', borderRadius: '7px', color: navigationShell.text, '&:focus-visible': focusSx }}>
        <ChevronDown size={18} aria-hidden="true" style={{ transform: open ? undefined : 'rotate(-90deg)', transition: reduceMotion ? 'none' : 'transform 180ms ease' }} />
      </IconButton>}
    </Box>
    <Collapse in={expanded && open} timeout={reduceMotion ? 0 : 180}>
      <Box id={controls} onKeyDown={(event) => {
        if (event.key === 'Escape') { event.stopPropagation(); setOpen(false); toggleRef.current?.focus() }
      }} sx={{ ml: '19px', pl: '8px', mt: '4px', mb: '6px', borderLeft: `1px solid ${navigationShell.divider}`, display: 'flex', flexDirection: 'column', gap: '2px' }}>
        {item.children?.map(child => <Box key={child.id}>{renderRow(child, true)}</Box>)}
      </Box>
    </Collapse>
  </Box>
}
