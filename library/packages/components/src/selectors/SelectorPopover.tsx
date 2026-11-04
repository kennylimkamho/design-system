import { useState, useEffect, useCallback, type ReactNode } from 'react'
import {
  Popover,
  Box,
  TextField,
  InputAdornment,
  Typography,
  Divider,
  type PopoverProps,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { VirtualScrollList, type VirtualScrollListProps } from '../display/VirtualScrollList'

// ─── Types ───────────────────────────────────────────────────────────────────

export interface SelectorPopoverProps<T> extends Pick<
  VirtualScrollListProps<T>,
  | 'items'
  | 'keyExtractor'
  | 'renderItem'
  | 'itemHeight'
  | 'height'
  | 'hasMore'
  | 'loadingMore'
  | 'onLoadMore'
  | 'loading'
  | 'emptyMessage'
  | 'emptySlot'
> {
  /** Popover open state */
  open: boolean
  /** Anchor element */
  anchorEl: HTMLElement | null
  /** Close handler */
  onClose: () => void

  /** Title shown above the search field */
  title?: string
  /** Width of the popover (default: 280) */
  width?: number

  // ─── Search ──────────────────────────────────────────────────────────
  /** Enable search input (default: true) */
  searchable?: boolean
  /** Search placeholder */
  searchPlaceholder?: string
  /** Called with debounced search string */
  onSearch?: (query: string) => void
  /** Debounce delay in ms (default: 300) */
  searchDebounce?: number

  // ─── Popover positioning ─────────────────────────────────────────────
  anchorOrigin?: PopoverProps['anchorOrigin']
  transformOrigin?: PopoverProps['transformOrigin']

  /** Optional header below search, above list */
  headerSlot?: ReactNode
  /** Optional footer below list */
  footerSlot?: ReactNode
}

// ─── Component ───────────────────────────────────────────────────────────────

/**
 * Reusable selector popover — search + virtualized list in a popover.
 *
 * Used for: team switcher, contact picker, tag selector, channel picker,
 * or any searchable dropdown with many items.
 *
 * Composes VirtualScrollList internally. Handles search debouncing.
 *
 * Usage:
 * ```tsx
 * <SelectorPopover
 *   open={open}
 *   anchorEl={anchorEl}
 *   onClose={handleClose}
 *   title="Switch Team"
 *   items={teams}
 *   keyExtractor={(t) => t.id}
 *   renderItem={(team) => (
 *     <MenuItem onClick={() => handleSelect(team)}>
 *       {team.name}
 *     </MenuItem>
 *   )}
 *   onSearch={setSearchQuery}
 *   hasMore={hasNextPage}
 *   loadingMore={isFetchingNextPage}
 *   onLoadMore={fetchNextPage}
 *   loading={isLoading}
 * />
 * ```
 */
export function SelectorPopover<T>({
  open,
  anchorEl,
  onClose,
  title,
  width = 280,
  // Search
  searchable = true,
  searchPlaceholder = 'Search...',
  onSearch,
  searchDebounce = 300,
  // Positioning
  anchorOrigin = { vertical: 'bottom', horizontal: 'right' },
  transformOrigin = { vertical: 'top', horizontal: 'right' },
  // Slots
  headerSlot,
  footerSlot,
  // VirtualScrollList props (forwarded)
  ...listProps
}: SelectorPopoverProps<T>) {
  const [search, setSearch] = useState('')

  // Reset search when popover closes
  useEffect(() => {
    if (!open) setSearch('')
  }, [open])

  // Debounced search callback
  useEffect(() => {
    if (!onSearch) return
    const timer = setTimeout(() => onSearch(search), searchDebounce)
    return () => clearTimeout(timer)
  }, [search, onSearch, searchDebounce])

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value),
    []
  )

  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={anchorOrigin}
      transformOrigin={transformOrigin}
      slotProps={{
        paper: {
          sx: {
            width,
            display: 'flex',
            flexDirection: 'column',
            borderRadius: 2,
            overflow: 'hidden',
          },
        },
      }}
    >
      {/* Title */}
      {title && (
        <Box sx={{ px: 2, pt: 1.5, pb: 0.5 }}>
          <Typography variant="caption" color="text.secondary" fontWeight={600}>
            {title}
          </Typography>
        </Box>
      )}

      {/* Search */}
      {searchable && (
        <Box sx={{ px: 1.5, pb: 1 }}>
          <TextField
            size="small"
            placeholder={searchPlaceholder}
            value={search}
            onChange={handleSearchChange}
            fullWidth
            autoFocus
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon fontSize="small" />
                </InputAdornment>
              ),
            }}
            onKeyDown={(e) => e.stopPropagation()}
          />
        </Box>
      )}

      <Divider />

      {/* Header slot */}
      {headerSlot}

      {/* Virtualized list */}
      <VirtualScrollList {...listProps} />

      {/* Footer slot */}
      {footerSlot}
    </Popover>
  )
}
