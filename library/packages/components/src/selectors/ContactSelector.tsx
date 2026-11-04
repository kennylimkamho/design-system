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
  Chip,
  CircularProgress,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

// ─── Types ──────────────────────────────────────────────────────────────────

export interface Contact {
  id: string
  name?: string
  phoneNumber?: string
  platformNames?: string[]
}

export interface ContactSelectorProps {
  /** Currently selected contact IDs */
  selected: string[]
  /** Called when selection changes */
  onChange: (contactIds: string[]) => void
  /**
   * Available contacts to display.
   * Provide from your infinite query: e.g. data?.pages.flatMap(p => p.contacts) ?? []
   */
  contacts?: Contact[]
  /** Loading state (initial load) */
  loading?: boolean
  /** Fetching next page */
  loadingMore?: boolean
  /** Whether more pages exist */
  hasMore?: boolean
  /** Called when user scrolls to the bottom — fetch next page */
  onLoadMore?: () => void
  /** Allow multiple selection (default: false) */
  multiple?: boolean
  /** Disabled state */
  disabled?: boolean
  /** Placeholder text */
  placeholder?: string
  /** Called when search text changes (debounced in parent) */
  onSearch?: (query: string) => void
  /** Custom trigger element */
  renderTrigger?: (props: {
    onClick: (e: React.MouseEvent<HTMLElement>) => void
    ref: React.Ref<HTMLElement>
    disabled?: boolean
  }) => ReactNode
}

// ─── Helpers ────────────────────────────────────────────────────────────────

function contactDisplayName(contact: Contact): string {
  return contact.name || contact.platformNames?.[0] || contact.phoneNumber || 'Unknown'
}

function contactDetail(contact: Contact): string | undefined {
  if (contact.phoneNumber) {
    return `+${contact.phoneNumber}`
  }
  return undefined
}

// ─── Component ──────────────────────────────────────────────────────────────

/**
 * Searchable dropdown with contact avatars, name, and phone number.
 * Single or multi-select with infinite scroll.
 *
 * Query-agnostic: pass `contacts` as a prop and handle search/pagination in the parent.
 *
 * Usage:
 * ```tsx
 * const { data, isLoading, isFetchingNextPage, hasNextPage, fetchNextPage } =
 *   useContactsInfiniteQuery(search)
 * const contacts = data?.pages.flatMap(p => p.contacts) ?? []
 *
 * <ContactSelector
 *   selected={selectedContacts}
 *   onChange={setSelectedContacts}
 *   contacts={contacts}
 *   loading={isLoading}
 *   loadingMore={isFetchingNextPage}
 *   hasMore={hasNextPage}
 *   onLoadMore={fetchNextPage}
 *   onSearch={setSearch}
 *   multiple
 * />
 * ```
 */
export function ContactSelector({
  selected,
  onChange,
  contacts = [],
  loading = false,
  loadingMore = false,
  hasMore = false,
  onLoadMore,
  multiple = false,
  disabled = false,
  placeholder = 'Select contact...',
  onSearch,
  renderTrigger,
}: ContactSelectorProps) {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const triggerRef = useRef<HTMLElement>(null)
  const listRef = useRef<HTMLDivElement>(null)
  const [searchDebounceTimer, setSearchDebounceTimer] = useState<ReturnType<
    typeof setTimeout
  > | null>(null)

  const open = Boolean(anchorEl)

  const handleOpen = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (!disabled) setAnchorEl(e.currentTarget)
    },
    [disabled]
  )

  const handleClose = useCallback(() => {
    setAnchorEl(null)
  }, [])

  const handleToggle = useCallback(
    (contactId: string) => {
      if (multiple) {
        const next = selected.includes(contactId)
          ? selected.filter((id) => id !== contactId)
          : [...selected, contactId]
        onChange(next)
      } else {
        onChange([contactId])
        handleClose()
      }
    },
    [selected, onChange, multiple, handleClose]
  )

  const handleScroll = useCallback(() => {
    if (!listRef.current || !hasMore || loadingMore) return
    const el = listRef.current
    if (el.scrollTop + el.clientHeight >= el.scrollHeight - 50) {
      onLoadMore?.()
    }
  }, [hasMore, loadingMore, onLoadMore])

  // Resolve selected contacts for display
  const selectedContacts = useMemo(
    () => selected.map((id) => contacts.find((c) => c.id === id)).filter(Boolean) as Contact[],
    [selected, contacts]
  )

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value
      if (searchDebounceTimer) clearTimeout(searchDebounceTimer)
      const timer = setTimeout(() => onSearch?.(val), 300)
      setSearchDebounceTimer(timer)
    },
    [searchDebounceTimer, onSearch]
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
          {selectedContacts.length === 0 ? (
            <Typography variant="body2" color="text.secondary">
              {placeholder}
            </Typography>
          ) : selectedContacts.length === 1 ? (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Avatar sx={{ width: 24, height: 24, fontSize: '0.75rem' }}>
                {contactDisplayName(selectedContacts[0])[0]}
              </Avatar>
              <Typography variant="body2" noWrap>
                {contactDisplayName(selectedContacts[0])}
                {selectedContacts[0].phoneNumber ? ` (+${selectedContacts[0].phoneNumber})` : ''}
              </Typography>
            </Box>
          ) : (
            selectedContacts.map((c) => (
              <Chip
                key={c.id}
                label={contactDisplayName(c)}
                size="small"
                onDelete={() => handleToggle(c.id)}
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
              width: 340,
              maxHeight: 420,
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
            placeholder="Search contacts..."
            defaultValue=""
            onChange={handleSearchChange}
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

        {/* Contact list */}
        <Box ref={listRef} onScroll={handleScroll} sx={{ overflow: 'auto', flex: 1 }}>
          {loading && (
            <Box sx={{ display: 'flex', justifyContent: 'center', py: 3 }}>
              <CircularProgress size={24} />
            </Box>
          )}

          {!loading && contacts.length === 0 && (
            <Typography variant="body2" color="text.secondary" sx={{ p: 2, textAlign: 'center' }}>
              No contacts found
            </Typography>
          )}

          {contacts.map((contact) => (
            <ListItemButton
              key={contact.id}
              dense
              onClick={() => handleToggle(contact.id)}
              sx={{ px: 1.5 }}
            >
              {multiple && (
                <ListItemIcon sx={{ minWidth: 36 }}>
                  <Checkbox
                    size="small"
                    checked={selected.includes(contact.id)}
                    tabIndex={-1}
                    disableRipple
                  />
                </ListItemIcon>
              )}
              <ListItemAvatar sx={{ minWidth: 40 }}>
                <Avatar sx={{ width: 32, height: 32, fontSize: '0.875rem' }}>
                  {contactDisplayName(contact)[0]}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={contactDisplayName(contact)}
                secondary={contactDetail(contact)}
                primaryTypographyProps={{ variant: 'body2', noWrap: true }}
                secondaryTypographyProps={{ variant: 'caption', noWrap: true }}
              />
            </ListItemButton>
          ))}

          {loadingMore && (
            <Box sx={{ display: 'flex', justifyContent: 'center', py: 1.5 }}>
              <CircularProgress size={18} />
            </Box>
          )}
        </Box>
      </Popover>
    </>
  )
}
