import { useRef, useEffect, useCallback, type ReactNode } from 'react'
import { Box, CircularProgress, Typography, List } from '@mui/material'
import { useVirtualizer } from '@tanstack/react-virtual'

// ─── Types ───────────────────────────────────────────────────────────────────

export interface VirtualScrollListProps<T> {
  /** Items to render */
  items: T[]
  /** Unique key for each item */
  keyExtractor: (item: T, index: number) => string
  /** Render a single item — receives the item and its index */
  renderItem: (item: T, index: number) => ReactNode
  /** Estimated height of each item in px (default: 48) */
  itemHeight?: number
  /** Fixed height of the scroll container in px (default: 320) */
  height?: number
  /** Extra items rendered above/below viewport (default: 5) */
  overscan?: number

  // ─── Infinite scroll ─────────────────────────────────────────────────
  /** Whether more pages exist */
  hasMore?: boolean
  /** Whether next page is currently loading */
  loadingMore?: boolean
  /** Called when user scrolls near the end */
  onLoadMore?: () => void
  /** How many items from the end to trigger onLoadMore (default: 3) */
  loadMoreThreshold?: number

  // ─── States ──────────────────────────────────────────────────────────
  /** Initial loading (no items yet) */
  loading?: boolean
  /** Message when items is empty and not loading */
  emptyMessage?: string
  /** Optional custom empty state */
  emptySlot?: ReactNode
}

// ─── Component ───────────────────────────────────────────────────────────────

/**
 * Generic virtualized scroll list.
 *
 * For small lists (<50 items): renders a plain MUI List (no virtualization overhead).
 * For large lists (≥50 items): uses TanStack Virtual for DOM efficiency.
 *
 * Reusable across: team selector, contact picker, tag selector,
 * channel list, or any scrollable list with many items.
 */
export function VirtualScrollList<T>({
  items,
  keyExtractor,
  renderItem,
  itemHeight = 48,
  height = 320,
  overscan = 5,
  hasMore = false,
  loadingMore = false,
  onLoadMore,
  loadMoreThreshold = 3,
  loading = false,
  emptyMessage = 'No items found',
  emptySlot,
}: VirtualScrollListProps<T>) {
  // ─── Loading state ─────────────────────────────────────────────────
  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height, py: 4 }}>
        <CircularProgress size={28} />
      </Box>
    )
  }

  // ─── Empty state ───────────────────────────────────────────────────
  if (items.length === 0) {
    if (emptySlot) return <>{emptySlot}</>
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: height / 2,
          py: 4,
        }}
      >
        <Typography variant="body2" color="text.secondary">
          {emptyMessage}
        </Typography>
      </Box>
    )
  }

  // ─── Small list — plain render, no virtualization overhead ─────────
  if (items.length < 50 && !hasMore) {
    return (
      <SmallList
        items={items}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        height={height}
        loadingMore={loadingMore}
      />
    )
  }

  // ─── Large list — virtualized ──────────────────────────────────────
  return (
    <VirtualizedList
      items={items}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      itemHeight={itemHeight}
      height={height}
      overscan={overscan}
      hasMore={hasMore}
      loadingMore={loadingMore}
      {...(onLoadMore ? { onLoadMore } : {})}
      loadMoreThreshold={loadMoreThreshold}
    />
  )
}

// ─── Small list (no virtualization) ──────────────────────────────────────────

function SmallList<T>({
  items,
  keyExtractor,
  renderItem,
  height,
  loadingMore,
}: Pick<
  VirtualScrollListProps<T>,
  'items' | 'keyExtractor' | 'renderItem' | 'height' | 'loadingMore'
>) {
  return (
    <Box sx={{ maxHeight: height, overflow: 'auto' }}>
      <List disablePadding>
        {items.map((item, i) => (
          <div key={keyExtractor(item, i)}>{renderItem(item, i)}</div>
        ))}
      </List>
      {loadingMore && (
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 1.5 }}>
          <CircularProgress size={18} />
        </Box>
      )}
    </Box>
  )
}

// ─── Virtualized list (TanStack Virtual) ─────────────────────────────────────

function VirtualizedList<T>({
  items,
  keyExtractor,
  renderItem,
  itemHeight = 48,
  height = 320,
  overscan = 5,
  hasMore = false,
  loadingMore = false,
  onLoadMore,
  loadMoreThreshold = 3,
}: Omit<VirtualScrollListProps<T>, 'loading' | 'emptyMessage' | 'emptySlot'>) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const virtualizer = useVirtualizer({
    count: items.length,
    getScrollElement: () => scrollRef.current,
    estimateSize: () => itemHeight,
    overscan,
  })

  // Re-measure when items change (handles popover mount timing)
  useEffect(() => {
    virtualizer.measure()
  }, [items.length, virtualizer])

  // Auto-fetch next page when scrolling near the end
  const handleScrollEnd = useCallback(() => {
    if (!onLoadMore || !hasMore || loadingMore) return

    const virtualItems = virtualizer.getVirtualItems()
    const lastItem = virtualItems.at(-1)
    if (!lastItem) return

    if (lastItem.index >= items.length - loadMoreThreshold) {
      onLoadMore()
    }
  }, [onLoadMore, hasMore, loadingMore, items.length, loadMoreThreshold, virtualizer])

  // Check on every render if we need to load more
  useEffect(() => {
    handleScrollEnd()
  }, [handleScrollEnd])

  const virtualItems = virtualizer.getVirtualItems()

  return (
    <Box ref={scrollRef} onScroll={handleScrollEnd} sx={{ height, overflow: 'auto' }}>
      <div
        style={{
          height: virtualizer.getTotalSize(),
          width: '100%',
          position: 'relative',
        }}
      >
        {virtualItems.map((virtualRow) => (
          <div
            key={keyExtractor(items[virtualRow.index], virtualRow.index)}
            data-index={virtualRow.index}
            ref={virtualizer.measureElement}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              transform: `translateY(${virtualRow.start}px)`,
            }}
          >
            {renderItem(items[virtualRow.index], virtualRow.index)}
          </div>
        ))}
      </div>

      {loadingMore && (
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 1.5 }}>
          <CircularProgress size={18} />
        </Box>
      )}
    </Box>
  )
}
