import { useState, useRef, useCallback } from 'react'
import {
  Box,
  Popover,
  TextField,
  InputAdornment,
  ListItemButton,
  ListItemText,
  Typography,
  CircularProgress,
  Divider,
  Avatar,
} from '@mui/material'
import { Search, ChevronDown, Check } from 'lucide-react'
import { shell } from '@chatdaddy/tokens'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface Team {
  id: string
  name: string
  /** Optional avatar/logo URL */
  avatarUrl?: string
}

export interface TeamSwitcherProps {
  /** All teams available to the user */
  teams: Team[]
  /** Currently active team id */
  activeTeamId: string
  /** Called when user selects a different team */
  onSwitch: (teamId: string) => void
  /** Loading state — shows spinner instead of team list */
  loading?: boolean
  /** Disabled state */
  disabled?: boolean
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getInitials(name: string): string {
  return name
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()
}

// ─── Component ────────────────────────────────────────────────────────────────

/**
 * Team switcher dropdown — shows active team, opens popover with search + list.
 *
 * Query-agnostic: pass `teams` from your query hook.
 *
 * Usage:
 * ```tsx
 * const { teamId, setTeamId } = useAuthStore()
 * const { data: teams } = useTeamsQuery()
 *
 * <TeamSwitcher
 *   teams={teams ?? []}
 *   activeTeamId={teamId}
 *   onSwitch={(id) => { setTeamId(id); navigate('/') }}
 * />
 * ```
 */
export function TeamSwitcher({
  teams,
  activeTeamId,
  onSwitch,
  loading = false,
  disabled = false,
}: TeamSwitcherProps) {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const [search, setSearch] = useState('')
  const triggerRef = useRef<HTMLDivElement>(null)

  const open = Boolean(anchorEl)
  const activeTeam = teams.find((t) => t.id === activeTeamId)

  const filtered = search
    ? teams.filter((t) => t.name.toLowerCase().includes(search.toLowerCase()))
    : teams

  const handleOpen = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!disabled) setAnchorEl(e.currentTarget)
    },
    [disabled]
  )

  const handleClose = useCallback(() => {
    setAnchorEl(null)
    setSearch('')
  }, [])

  const handleSelect = useCallback(
    (teamId: string) => {
      if (teamId !== activeTeamId) onSwitch(teamId)
      handleClose()
    },
    [activeTeamId, onSwitch, handleClose]
  )

  return (
    <>
      {/* Trigger */}
      <Box
        ref={triggerRef}
        onClick={handleOpen}
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          height: 36,
          px: 1.5,
          borderRadius: '10px',
          border: `1px solid ${shell.divider}`,
          cursor: disabled ? 'default' : 'pointer',
          bgcolor: open ? shell.bgHover : 'transparent',
          transition: 'background 150ms ease',
          '&:hover': disabled ? {} : { bgcolor: shell.bgHover },
          maxWidth: 200,
          minWidth: 120,
          userSelect: 'none',
        }}
      >
        <Avatar
          src={activeTeam?.avatarUrl}
          sx={{ width: 22, height: 22, fontSize: '0.65rem', bgcolor: shell.accent, flexShrink: 0 }}
        >
          {activeTeam ? getInitials(activeTeam.name) : '?'}
        </Avatar>

        <Typography
          variant="body2"
          sx={{
            fontWeight: 500,
            color: shell.text,
            flex: 1,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {activeTeam?.name ?? 'Select team'}
        </Typography>

        <ChevronDown
          size={14}
          color={shell.textSecondary}
          style={{
            flexShrink: 0,
            transform: open ? 'rotate(180deg)' : 'none',
            transition: 'transform 150ms ease',
          }}
        />
      </Box>

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
              width: 260,
              maxHeight: 380,
              display: 'flex',
              flexDirection: 'column',
              mt: 0.5,
            },
          },
        }}
      >
        {/* Search */}
        <Box sx={{ p: 1.5, flexShrink: 0 }}>
          <TextField
            size="small"
            placeholder="Search teams…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            fullWidth
            autoFocus
            onKeyDown={(e) => e.stopPropagation()}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search size={14} color={shell.textSecondary} />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Divider sx={{ borderColor: shell.divider, flexShrink: 0 }} />

        {/* List */}
        <Box sx={{ overflowY: 'auto', flex: 1 }}>
          {loading && (
            <Box sx={{ display: 'flex', justifyContent: 'center', py: 3 }}>
              <CircularProgress size={20} />
            </Box>
          )}

          {!loading && filtered.length === 0 && (
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ p: 2, textAlign: 'center' }}
            >
              No teams found
            </Typography>
          )}

          {!loading &&
            filtered.map((team) => {
              const isActive = team.id === activeTeamId
              return (
                <ListItemButton
                  key={team.id}
                  dense
                  selected={isActive}
                  onClick={() => handleSelect(team.id)}
                  sx={{
                    px: 1.5,
                    gap: 1.5,
                    '&.Mui-selected': {
                      bgcolor: shell.bgActive,
                      '&:hover': { bgcolor: shell.bgActive },
                    },
                  }}
                >
                  <Avatar
                    src={team.avatarUrl}
                    sx={{ width: 28, height: 28, fontSize: '0.75rem', bgcolor: shell.accent, flexShrink: 0 }}
                  >
                    {getInitials(team.name)}
                  </Avatar>
                  <ListItemText
                    primary={team.name}
                    primaryTypographyProps={{ variant: 'body2', noWrap: true, fontWeight: isActive ? 600 : 400 }}
                  />
                  {isActive && <Check size={14} color={shell.accent} style={{ flexShrink: 0 }} />}
                </ListItemButton>
              )
            })}
        </Box>
      </Popover>
    </>
  )
}
