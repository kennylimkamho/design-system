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
  Button,
  Popover,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import AddIcon from '@mui/icons-material/Add'
import { TagChip } from '../display/TagChip'

// ─── Types ──────────────────────────────────────────────────────────────────

export interface Tag {
  name: string
  color?: string
}

export interface TagSelectorDropdownProps {
  /** Currently selected tag names */
  selected: string[]
  /** Called when selection changes */
  onChange: (tagNames: string[]) => void
  /**
   * Available tags to select from.
   * Provide from your query: e.g. useTagsQuery().data
   */
  tags?: Tag[]
  /** Loading state for the tags list */
  loading?: boolean
  /** Allow multiple selection (default: true) */
  multiple?: boolean
  /** Disabled state */
  disabled?: boolean
  /** Placeholder for the trigger button */
  placeholder?: string
  /** Show "Create new tag" option (default: false) */
  allowCreate?: boolean
  /** Called when user creates a new tag */
  onCreateTag?: (name: string) => void | Promise<void>
  /** Custom trigger element — receives onClick and ref */
  renderTrigger?: (props: {
    onClick: (e: React.MouseEvent<HTMLElement>) => void
    ref: React.Ref<HTMLElement>
    disabled?: boolean
  }) => ReactNode
}

// ─── Component ──────────────────────────────────────────────────────────────

/**
 * Popover with searchable tag list, multi-select checkboxes, color dots,
 * and optional "Create new tag" action.
 *
 * Query-agnostic: pass `tags` as a prop from your query hook.
 *
 * Usage:
 * ```tsx
 * const { data: tags, isLoading } = useTagsQuery(search)
 *
 * <TagSelectorDropdown
 *   selected={selectedTags}
 *   onChange={setSelectedTags}
 *   tags={tags}
 *   loading={isLoading}
 *   allowCreate
 *   onCreateTag={handleCreateTag}
 * />
 * ```
 */
export function TagSelectorDropdown({
  selected,
  onChange,
  tags = [],
  loading = false,
  multiple = true,
  disabled = false,
  placeholder = 'Select tags...',
  allowCreate = false,
  onCreateTag,
  renderTrigger,
}: TagSelectorDropdownProps) {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const [search, setSearch] = useState('')
  const triggerRef = useRef<HTMLElement>(null)

  const open = Boolean(anchorEl)

  const filteredTags = useMemo(() => {
    if (!search) return tags
    const q = search.toLowerCase()
    return tags.filter((t) => t.name.toLowerCase().includes(q))
  }, [tags, search])

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
    (tagName: string) => {
      if (multiple) {
        const next = selected.includes(tagName)
          ? selected.filter((n) => n !== tagName)
          : [...selected, tagName]
        onChange(next)
      } else {
        onChange([tagName])
        handleClose()
      }
    },
    [selected, onChange, multiple, handleClose]
  )

  const handleCreate = useCallback(async () => {
    if (!search.trim()) return
    await onCreateTag?.(search.trim())
    handleToggle(search.trim())
    setSearch('')
  }, [search, onCreateTag, handleToggle])

  // Show "Create" option when search doesn't match any existing tag
  const showCreate = useMemo(() => {
    if (!allowCreate || !search.trim()) return false
    return !filteredTags.some((t) => t.name.toLowerCase() === search.trim().toLowerCase())
  }, [allowCreate, search, filteredTags])

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
          {selected.length === 0 ? (
            <Typography variant="body2" color="text.secondary">
              {placeholder}
            </Typography>
          ) : (
            selected.map((name) => {
              const tag = tags.find((t) => t.name === name)
              return (
                <TagChip
                  key={name}
                  tagName={name}
                  tagColor={tag?.color || colorForTagName(name)}
                  onDelete={() => handleToggle(name)}
                />
              )
            })
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
            sx: { width: 300, maxHeight: 400, display: 'flex', flexDirection: 'column' },
          },
        }}
      >
        {/* Search */}
        <Box sx={{ p: 1.5 }}>
          <TextField
            size="small"
            placeholder="Search tags..."
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

        {/* Tag list */}
        <Box sx={{ overflow: 'auto', flex: 1 }}>
          {loading && (
            <Typography variant="body2" color="text.secondary" sx={{ p: 2, textAlign: 'center' }}>
              Loading...
            </Typography>
          )}

          {!loading && filteredTags.length === 0 && !showCreate && (
            <Typography variant="body2" color="text.secondary" sx={{ p: 2, textAlign: 'center' }}>
              No tags found
            </Typography>
          )}

          {filteredTags.map((tag) => (
            <ListItemButton
              key={tag.name}
              dense
              onClick={() => handleToggle(tag.name)}
              sx={{ px: 1.5 }}
            >
              {multiple && (
                <ListItemIcon sx={{ minWidth: 36 }}>
                  <Checkbox
                    size="small"
                    checked={selected.includes(tag.name)}
                    tabIndex={-1}
                    disableRipple
                  />
                </ListItemIcon>
              )}
              <ListItemIcon sx={{ minWidth: 24 }}>
                <Box
                  sx={{
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    bgcolor: tag.color || colorForTagName(tag.name),
                  }}
                />
              </ListItemIcon>
              <ListItemText
                primary={tag.name}
                primaryTypographyProps={{
                  variant: 'body2',
                  noWrap: true,
                }}
              />
            </ListItemButton>
          ))}
        </Box>

        {/* Create new tag */}
        {showCreate && (
          <>
            <Divider />
            <Button
              startIcon={<AddIcon />}
              onClick={handleCreate}
              sx={{
                justifyContent: 'flex-start',
                px: 2,
                py: 1,
                textTransform: 'none',
                color: 'primary.main',
              }}
            >
              Create &quot;{search.trim()}&quot;
            </Button>
          </>
        )}
      </Popover>
    </>
  )
}

// ─── Helpers ────────────────────────────────────────────────────────────────

const TAG_COLORS = [
  '#FF6B6B',
  '#51CF66',
  '#339AF0',
  '#FCC419',
  '#CC5DE8',
  '#22B8CF',
  '#FF922B',
  '#845EF7',
  '#20C997',
  '#F06595',
]

function colorForTagName(name: string): string {
  let hash = 0
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash)
  }
  return TAG_COLORS[Math.abs(hash) % TAG_COLORS.length]
}
