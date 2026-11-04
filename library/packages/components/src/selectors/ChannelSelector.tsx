import { useState, useMemo, useCallback, useRef, type ReactNode } from 'react'
import {
  Box,
  Checkbox,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
  InputAdornment,
  Typography,
  Divider,
  Popover,
  Chip,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { PlatformIcon } from '@chatdaddy/icons'

// ─── Types ──────────────────────────────────────────────────────────────────

export interface Channel {
  accountId: string
  nickname?: string
  type: string
}

export interface ChannelSelectorProps {
  /** Currently selected account IDs */
  selected: string[]
  /** Called when selection changes */
  onChange: (accountIds: string[]) => void
  /**
   * Available channels to select from.
   * Provide from your query: e.g. useChannelsQuery().data
   */
  channels?: Channel[]
  /** Loading state */
  loading?: boolean
  /** Allow multiple selection (default: true) */
  multiple?: boolean
  /** Disabled state */
  disabled?: boolean
  /** Placeholder text */
  placeholder?: string
  /** Custom trigger element */
  renderTrigger?: (props: {
    onClick: (e: React.MouseEvent<HTMLElement>) => void
    ref: React.Ref<HTMLElement>
    disabled?: boolean
  }) => ReactNode
}

// ─── Helpers ────────────────────────────────────────────────────────────────

function ChannelIcon({ type }: { type: string }) {
  return <PlatformIcon platform={type?.toLowerCase()} size={22} tooltip={false} />
}

/** Map account type to display name */
function channelTypeName(type: string): string {
  switch (type?.toLowerCase()) {
    case 'wa':
    case 'whatsapp':
      return 'WhatsApp'
    default:
      return type || 'Channel'
  }
}

// ─── Component ──────────────────────────────────────────────────────────────

/**
 * Dropdown showing connected channels with platform icon.
 * Single or multi-select.
 *
 * Query-agnostic: pass `channels` as a prop from your query hook.
 *
 * Usage:
 * ```tsx
 * const { data: channels, isLoading } = useChannelsQuery()
 *
 * <ChannelSelector
 *   selected={selectedChannels}
 *   onChange={setSelectedChannels}
 *   channels={channels}
 *   loading={isLoading}
 * />
 * ```
 */
export function ChannelSelector({
  selected,
  onChange,
  channels = [],
  loading = false,
  multiple = true,
  disabled = false,
  placeholder = 'Select channel...',
  renderTrigger,
}: ChannelSelectorProps) {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const [search, setSearch] = useState('')
  const triggerRef = useRef<HTMLElement>(null)

  const open = Boolean(anchorEl)

  const filteredChannels = useMemo(() => {
    if (!search) return channels
    const q = search.toLowerCase()
    return channels.filter(
      (ch) => ch.nickname?.toLowerCase().includes(q) || ch.accountId?.toLowerCase().includes(q)
    )
  }, [channels, search])

  const handleOpen = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (!disabled) setAnchorEl(e.currentTarget)
    },
    [disabled]
  )

  const handleClose = useCallback(() => {
    setAnchorEl(null)
    setSearch('')
  }, [])

  const handleToggle = useCallback(
    (accountId: string) => {
      if (multiple) {
        const next = selected.includes(accountId)
          ? selected.filter((id) => id !== accountId)
          : [...selected, accountId]
        onChange(next)
      } else {
        onChange([accountId])
        handleClose()
      }
    },
    [selected, onChange, multiple, handleClose]
  )

  // Resolve selected channels for display
  const selectedChannels = useMemo(
    () =>
      selected.map((id) => channels.find((ch) => ch.accountId === id)).filter(Boolean) as Channel[],
    [selected, channels]
  )

  return (
    <>
      {/* Trigger */}
      {renderTrigger ? (
        renderTrigger({ onClick: handleOpen, ref: triggerRef, disabled })
      ) : (
        <Box
          ref={triggerRef}
          onClick={handleOpen}
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 0.5,
            minHeight: 36,
            alignItems: 'center',
            px: 1.5,
            py: 0.5,
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 1,
            cursor: disabled ? 'default' : 'pointer',
            opacity: disabled ? 0.5 : 1,
            '&:hover': disabled ? {} : { borderColor: 'text.secondary' },
          }}
        >
          {selectedChannels.length === 0 ? (
            <Typography variant="body2" color="text.secondary">
              {placeholder}
            </Typography>
          ) : selectedChannels.length === 1 ? (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <ChannelIcon type={selectedChannels[0].type} />
              <Typography variant="body2" noWrap>
                {selectedChannels[0].nickname}
              </Typography>
            </Box>
          ) : (
            selectedChannels.map((ch) => (
              <Chip
                key={ch.accountId}
                label={ch.nickname}
                size="small"
                onDelete={() => handleToggle(ch.accountId)}
              />
            ))
          )}
        </Box>
      )}

      {/* Popover */}
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        slotProps={{
          paper: {
            sx: {
              width: 320,
              maxHeight: 400,
              display: 'flex',
              flexDirection: 'column',
            },
          },
        }}
      >
        {/* Search */}
        <Box sx={{ p: 1.5 }}>
          <TextField
            size="small"
            placeholder="Search channels..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            fullWidth
            autoFocus
            onKeyDown={(e) => e.stopPropagation()}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon fontSize="small" />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Divider />

        {/* Channel list */}
        <Box sx={{ overflow: 'auto', flex: 1 }}>
          {loading && (
            <Typography variant="body2" color="text.secondary" sx={{ p: 2, textAlign: 'center' }}>
              Loading...
            </Typography>
          )}

          {!loading && filteredChannels.length === 0 && (
            <Typography variant="body2" color="text.secondary" sx={{ p: 2, textAlign: 'center' }}>
              No channels found
            </Typography>
          )}

          {filteredChannels.map((channel) => (
            <ListItemButton
              key={channel.accountId}
              dense
              onClick={() => handleToggle(channel.accountId)}
              sx={{ px: 1.5 }}
            >
              {multiple && (
                <ListItemIcon sx={{ minWidth: 36 }}>
                  <Checkbox
                    size="small"
                    checked={selected.includes(channel.accountId)}
                    tabIndex={-1}
                    disableRipple
                  />
                </ListItemIcon>
              )}
              <ListItemIcon sx={{ minWidth: 32 }}>
                <ChannelIcon type={channel.type} />
              </ListItemIcon>
              <ListItemText
                primary={channel.nickname}
                secondary={channelTypeName(channel.type)}
                primaryTypographyProps={{ variant: 'body2', noWrap: true }}
                secondaryTypographyProps={{ variant: 'caption' }}
              />
            </ListItemButton>
          ))}
        </Box>
      </Popover>
    </>
  )
}
