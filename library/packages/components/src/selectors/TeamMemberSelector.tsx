import { useState, useMemo, useCallback, useRef, type ReactNode } from 'react'
import {
  Box,
  Avatar,
  Checkbox,
  ListItemButton,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  TextField,
  InputAdornment,
  Typography,
  Divider,
  Popover,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

// ─── Types ──────────────────────────────────────────────────────────────────

export interface TeamMember {
  id: string
  fullName?: string
  emailAddress?: string
  phoneNumber?: string | null
}

export interface TeamMemberSelectorProps {
  /** Currently selected user IDs */
  selected: string[]
  /** Called when selection changes */
  onChange: (userIds: string[]) => void
  /**
   * Available team members to select from.
   * Provide from your query: e.g. useTeamMembersQuery().data
   */
  teamMembers?: TeamMember[]
  /** Loading state */
  loading?: boolean
  /** Allow multiple selection (default: false — single select for assignee) */
  multiple?: boolean
  /** Disabled state */
  disabled?: boolean
  /** Placeholder text */
  placeholder?: string
  /** Show a "Nobody" / unassign option */
  showNobody?: boolean
  /** Custom trigger element */
  renderTrigger?: (props: {
    onClick: (e: React.MouseEvent<HTMLElement>) => void
    ref: React.Ref<HTMLElement>
    disabled?: boolean
  }) => ReactNode
}

// ─── Constants ──────────────────────────────────────────────────────────────

export const NOBODY_ID = 'nobody'

// ─── Component ──────────────────────────────────────────────────────────────

/**
 * Popover with searchable team member list.
 * Shows avatar + name + email. Single or multi-select.
 *
 * Query-agnostic: pass `teamMembers` as a prop from your query hook.
 *
 * Usage:
 * ```tsx
 * const { data: teamMembers, isLoading } = useTeamMembersQuery()
 *
 * <TeamMemberSelector
 *   selected={[assigneeId]}
 *   onChange={([id]) => setAssignee(id)}
 *   teamMembers={teamMembers}
 *   loading={isLoading}
 *   showNobody
 * />
 * ```
 */
export function TeamMemberSelector({
  selected,
  onChange,
  teamMembers = [],
  loading = false,
  multiple = false,
  disabled = false,
  placeholder = 'Assign...',
  showNobody = false,
  renderTrigger,
}: TeamMemberSelectorProps) {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const [search, setSearch] = useState('')
  const triggerRef = useRef<HTMLElement>(null)

  const open = Boolean(anchorEl)

  // Build member list
  const members = useMemo(() => {
    const users: TeamMember[] = []

    if (showNobody) {
      users.push({
        id: NOBODY_ID,
        fullName: 'Nobody',
        emailAddress: 'Unassigned',
        phoneNumber: null,
      })
    }

    users.push(...teamMembers)

    if (!search) return users

    const q = search.toLowerCase()
    return users.filter(
      (u) => u.fullName?.toLowerCase().includes(q) || u.emailAddress?.toLowerCase().includes(q)
    )
  }, [teamMembers, showNobody, search])

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

  const handleSelect = useCallback(
    (userId: string) => {
      if (multiple) {
        const next = selected.includes(userId)
          ? selected.filter((id) => id !== userId)
          : [...selected, userId]
        onChange(next)
      } else {
        onChange([userId])
        handleClose()
      }
    },
    [selected, onChange, multiple, handleClose]
  )

  // Resolve selected user for display
  const selectedUsers = useMemo(() => {
    return selected
      .map((id) => {
        if (id === NOBODY_ID) return { id: NOBODY_ID, fullName: 'Nobody' } as TeamMember
        return teamMembers.find((m) => m.id === id)
      })
      .filter(Boolean) as TeamMember[]
  }, [selected, teamMembers])

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
            alignItems: 'center',
            gap: 1,
            minHeight: 36,
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
          {selectedUsers.length === 0 ? (
            <Typography variant="body2" color="text.secondary">
              {placeholder}
            </Typography>
          ) : selectedUsers.length === 1 ? (
            <>
              <Avatar sx={{ width: 24, height: 24, fontSize: '0.75rem' }}>
                {selectedUsers[0].fullName?.[0] || '?'}
              </Avatar>
              <Typography variant="body2" noWrap>
                {selectedUsers[0].fullName}
              </Typography>
            </>
          ) : (
            <Typography variant="body2" color="primary.main">
              {selectedUsers.length} members
            </Typography>
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
              width: 300,
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
            placeholder="Search members..."
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

        {/* Member list */}
        <Box sx={{ overflow: 'auto', flex: 1 }}>
          {loading && (
            <Typography variant="body2" color="text.secondary" sx={{ p: 2, textAlign: 'center' }}>
              Loading...
            </Typography>
          )}

          {!loading && members.length === 0 && (
            <Typography variant="body2" color="text.secondary" sx={{ p: 2, textAlign: 'center' }}>
              No members found
            </Typography>
          )}

          {members.map((user) => (
            <ListItemButton
              key={user.id}
              dense
              onClick={() => handleSelect(user.id)}
              sx={{ px: 1.5 }}
            >
              {multiple && (
                <ListItemIcon sx={{ minWidth: 36 }}>
                  <Checkbox
                    size="small"
                    checked={selected.includes(user.id)}
                    tabIndex={-1}
                    disableRipple
                  />
                </ListItemIcon>
              )}
              <ListItemAvatar sx={{ minWidth: 40 }}>
                <Avatar sx={{ width: 32, height: 32, fontSize: '0.875rem' }}>
                  {user.fullName?.[0] || '?'}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={user.fullName}
                secondary={
                  user.phoneNumber ? `+${user.phoneNumber}` : user.emailAddress || undefined
                }
                primaryTypographyProps={{ variant: 'body2', noWrap: true }}
                secondaryTypographyProps={{ variant: 'caption', noWrap: true }}
              />
            </ListItemButton>
          ))}
        </Box>
      </Popover>
    </>
  )
}
