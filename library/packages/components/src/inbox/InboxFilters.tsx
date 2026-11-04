import { Avatar, Box, ButtonBase, IconButton, Tooltip, Typography } from '@mui/material'
import { Check, RotateCw, UserRound, UsersRound } from 'lucide-react'
import { useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { navigationShell } from '@chatdaddy/tokens'
import { formatScopedCount } from './inboxCount'
import type { ScopedCount } from './inboxCount'

export interface ConversationFilterItem {
  id: string
  label: string
  icon: ReactNode
  count?: number
}

export interface ConversationFilterListProps {
  items: ConversationFilterItem[]
  activeId: string
  onChange: (id: string) => void
  label?: string
}

const accent = navigationShell.accent
const selectedBg = '#EBF0FF'
const selectedHover = '#DBE7FF'
const hoverBg = '#F1F4F8'
const focusSx = { outline: `2px solid ${accent}`, outlineOffset: 1 }
const selectionSx = (selected: boolean) => ({
  width: '100%', minWidth: 0, borderRadius: '8px', textAlign: 'left',
  color: selected ? '#0040C1' : '#323F4B', bgcolor: selected ? selectedBg : 'transparent',
  transition: 'background-color 180ms ease-out',
  '&:hover': { bgcolor: selected ? selectedHover : hoverBg },
  '&.Mui-focusVisible': focusSx,
  '@media (prefers-reduced-motion: reduce)': { transition: 'none' },
} as const)

/** App's exclusive Inbox views, with the store/query boundary moved to props. */
export function ConversationFilterList({ items, activeId, onChange, label = 'Conversation filters' }: ConversationFilterListProps) {
  return <Box role="group" aria-label={label} sx={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
    {items.map(item => {
      const active = activeId === item.id
      return <ButtonBase key={item.id} aria-label={item.label} aria-pressed={active} onClick={() => onChange(item.id)}
        sx={{ width: '100%', minHeight: 26, px: '8px', py: '4px', gap: '9px', borderRadius: '6px',
          justifyContent: 'flex-start', textAlign: 'left', color: active ? '#323F4B' : '#616E7C',
          bgcolor: active ? hoverBg : 'transparent', '&:hover': { bgcolor: hoverBg },
          '&.Mui-focusVisible': focusSx }}>
        <Box component="span" aria-hidden="true" sx={{ display: 'inline-flex', flexShrink: 0, color: active ? '#616E7C' : '#9AA5B1', '& svg': { width: 16, height: 16 } }}>{item.icon}</Box>
        <Typography component="span" sx={{ flex: 1, fontSize: 12, fontWeight: active ? 650 : 500, textAlign: 'left' }}>{item.label}</Typography>
        {item.count !== undefined && item.count > 0 && <Typography component="span" sx={{ fontSize: 11, fontWeight: 600, fontVariantNumeric: 'tabular-nums', color: '#7B8794' }}>{item.count > 99 ? '99+' : item.count}</Typography>}
        {active && <Check size={14} aria-hidden="true" />}
      </ButtonBase>
    })}
  </Box>
}

interface InboxChannelFilterBaseProps {
  name: string
  platform: string
  identity?: string
  logo?: ReactNode
  status: 'connected' | 'connecting' | 'disconnected'
  selected: boolean
  onSelect: () => void
  unread?: ScopedCount
  unreadLoading?: boolean
  reconnectLabel?: string
}

export type InboxChannelFilterRowProps = InboxChannelFilterBaseProps & (
  | { onReconnect?: undefined; onReconnectError?: undefined }
  | { onReconnect: () => void | Promise<void>; onReconnectError: (error: unknown) => void }
)

/** Product channel filter row: identity and health remain visible; reconnect is secondary. */
export function InboxChannelFilterRow({ name, platform, identity, logo, status, selected, onSelect, unread, unreadLoading = false, onReconnect, onReconnectError, reconnectLabel = `Reconnect ${name}` }: InboxChannelFilterRowProps) {
  const [busy, setBusy] = useState(false)
  const inFlight = useRef(false)
  const statusLabel = status === 'connected' ? 'Connected' : status === 'connecting' ? 'Connecting' : 'Disconnected'
  const statusColor = status === 'connected' ? '#12B76A' : status === 'connecting' ? '#F79009' : '#F04438'
  const unreadValue = formatScopedCount(unread, unreadLoading)
  const unreadLabel = unread ? `${unreadValue} unread conversations` : unreadLoading ? 'Loading unread conversation count' : 'Unread conversation count unavailable'
  const reconnect = async () => {
    if (!onReconnect || inFlight.current) return
    inFlight.current = true
    setBusy(true)
    try { await onReconnect() } catch (error) { onReconnectError?.(error) }
    finally { inFlight.current = false; setBusy(false) }
  }

  return <Box component="li" sx={{ listStyle: 'none', display: 'flex', alignItems: 'center', minWidth: 0, gap: '2px', pr: onReconnect ? 0 : '28px',
    '&:hover .channel-reconnect, &:focus-within .channel-reconnect': { opacity: 1, pointerEvents: 'auto' } }}>
    <Tooltip title={`${platform} · ${name}${identity ? ` · ${identity}` : ''} · ${statusLabel} · ${unreadLabel}`} placement="right">
      <ButtonBase aria-label={`Filter channel: ${name}${identity ? `, ${identity}` : ''}, ${statusLabel}, ${unreadLabel}`}
        aria-pressed={selected} onClick={onSelect}
        sx={{ ...selectionSx(selected), flex: 1, justifyContent: 'flex-start', gap: '7px', p: '4px 6px', minHeight: 34 }}>
        <Box sx={{ width: 22, height: 22, flexShrink: 0, position: 'relative', display: 'grid', placeItems: 'center' }}>
          {logo ?? <UsersRound size={18} aria-hidden="true" />}
          <Box component="span" aria-hidden="true" sx={{ position: 'absolute', right: -2, bottom: -1, width: 7, height: 7, borderRadius: '50%', bgcolor: statusColor, border: '2px solid white', boxSizing: 'content-box' }} />
        </Box>
        <Box sx={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <Typography noWrap title={name} sx={{ width: '100%', fontSize: 12, fontWeight: selected ? 600 : 500, lineHeight: 1.4 }}>{name}</Typography>
          {identity && <Typography noWrap title={identity} sx={{ width: '100%', fontSize: 10.5, lineHeight: 1.3, color: '#7B8794', fontVariantNumeric: 'tabular-nums' }}>{identity}</Typography>}
        </Box>
        <Box sx={{ width: 12, flexShrink: 0, display: 'flex' }}>{selected && <Check size={12} strokeWidth={2.5} aria-hidden="true" />}</Box>
        <Box component="span" aria-label={unreadLabel} aria-busy={unreadLoading} sx={{ minWidth: 27, flexShrink: 0, px: '4px', borderRadius: '5px', bgcolor: selected ? selectedHover : '#EEF2F6', color: selected ? '#0040C1' : '#7B8794', textAlign: 'center', fontSize: 11, lineHeight: '18px', fontWeight: 600, fontVariantNumeric: 'tabular-nums', whiteSpace: 'nowrap' }}>{unreadValue}</Box>
      </ButtonBase>
    </Tooltip>
    {onReconnect && <Tooltip title={busy ? 'Reconnecting…' : reconnectLabel}><Box component="span" className="channel-reconnect" sx={{
      width: 26, flexShrink: 0, opacity: busy ? 1 : 0, pointerEvents: busy ? 'auto' : 'none',
      transition: 'opacity 160ms ease-out',
      '@media (hover: none)': { opacity: 1, pointerEvents: 'auto' },
      '@media (prefers-reduced-motion: reduce)': { transition: 'none' },
    }}><IconButton aria-label={reconnectLabel} aria-busy={busy} disabled={busy} onClick={reconnect} size="small"
      sx={{ width: 26, height: 26, borderRadius: '7px', color: '#D92D20', '&.Mui-focusVisible': focusSx }}>
      <RotateCw size={15} aria-hidden="true" />
    </IconButton></Box></Tooltip>}
  </Box>
}

export interface InboxAssigneeFilterRowProps {
  name: string
  selected: boolean
  onSelect: () => void
  count?: number
  loading?: boolean
  unassigned?: boolean
}

export function InboxAssigneeFilterRow({ name, selected, onSelect, count, loading = false, unassigned = false }: InboxAssigneeFilterRowProps) {
  const countValue = formatScopedCount(count, loading)
  const countLabel = count !== undefined ? `${countValue} ongoing conversations` : loading ? 'Loading conversation count' : 'Conversation count unavailable'
  const initials = name.trim().split(/\s+/).slice(0, 2).map(part => part[0]?.toUpperCase()).join('')
  return <Box component="li" sx={{ listStyle: 'none', minWidth: 0 }}><ButtonBase
    aria-label={`${name} · ${countLabel}`} aria-pressed={selected} onClick={onSelect}
    sx={{ ...selectionSx(selected), gap: '7px', p: '4px 6px', minHeight: 32, justifyContent: 'flex-start' }}>
    <Avatar sx={{ width: 22, height: 22, fontSize: 10, fontWeight: 700, bgcolor: unassigned ? '#E4E7EB' : selectedHover, color: unassigned ? '#7B8794' : '#0040C1' }}>
      {unassigned ? <UserRound size={14} aria-hidden="true" /> : initials}
    </Avatar>
    <Typography noWrap title={name} sx={{ flex: 1, minWidth: 0, fontSize: 12, fontWeight: selected ? 600 : 500, lineHeight: 1.5, textAlign: 'left' }}>{name}</Typography>
    <Box sx={{ width: 13, flexShrink: 0, display: 'flex' }}>{selected && <Check size={13} strokeWidth={2.5} aria-hidden="true" />}</Box>
    <Tooltip title={countLabel}><Box component="span" aria-busy={loading} sx={{ minWidth: 27, flexShrink: 0, px: '4px', borderRadius: '5px', bgcolor: selected ? selectedHover : '#EEF2F6', color: selected ? '#0040C1' : '#7B8794', textAlign: 'center', fontSize: 11, lineHeight: '18px', fontWeight: 600, fontVariantNumeric: 'tabular-nums', whiteSpace: 'nowrap' }}>{countValue}</Box></Tooltip>
  </ButtonBase></Box>
}
