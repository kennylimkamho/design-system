import { useState, useEffect, type ReactNode } from 'react'
import { Box, CircularProgress, Typography, Button } from '@mui/material'
import {
  DataGrid,
  type GridColDef,
  type GridPaginationModel,
  type GridRowIdGetter,
  type GridRowSelectionModel,
  type GridValidRowModel,
  type GridCallbackDetails,
  type DataGridProps,
} from '@mui/x-data-grid'

// ─── Types ───────────────────────────────────────────────────────────────────

export interface PaginatedDataGridProps<T extends GridValidRowModel> {
  /** Column definitions (MUI DataGrid) */
  columns: GridColDef<T>[]

  // ─── Data source (from useInfiniteQuery) ─────────────────────────────
  /** All loaded items (flattened from infinite query pages) */
  items: T[]
  /** Total count of items in the dataset (from API response) */
  total?: number
  /** Whether initial data is loading */
  loading?: boolean
  /** Whether next page is being fetched */
  loadingMore?: boolean
  /** Whether more pages exist on the server */
  hasMore?: boolean
  /** Fetch the next page of data */
  onLoadMore?: () => void
  /** Error from the query */
  error?: Error | null | undefined
  /** Retry after error */
  onRetry?: () => void

  // ─── DataGrid configuration ──────────────────────────────────────────
  /** Page size options (default: [25, 50]) */
  pageSizeOptions?: number[]
  /** Default page size (default: 50) */
  defaultPageSize?: number
  /** Custom row ID getter */
  getRowId?: GridRowIdGetter<T>
  /** Row click handler */
  onRowClick?: DataGridProps<T>['onRowClick']
  /** @deprecated Use flex container instead. Kept for backward compat. */
  autoHeight?: boolean
  /** Enable checkbox selection */
  checkboxSelection?: boolean
  /** Controlled row selection model */
  rowSelectionModel?: GridRowSelectionModel
  /** Callback when selection changes */
  onRowSelectionModelChange?: (model: GridRowSelectionModel) => void
  /** Additional sx for the DataGrid */
  sx?: DataGridProps['sx']

  // ─── States ──────────────────────────────────────────────────────────
  /** Message when no data and not loading */
  emptyTitle?: string
  emptySubtitle?: string
  /** Custom empty state */
  emptySlot?: ReactNode
}

// ─── Component ───────────────────────────────────────────────────────────────

/**
 * Reusable paginated DataGrid — handles server-side auto-fetch on page change.
 *
 * Architecture (matches v1 ListLayout + TableView):
 * - Accumulates data from useInfiniteQuery pages in memory
 * - When user navigates to a page beyond loaded data, auto-calls onLoadMore
 * - Shows skeleton rows for items being loaded
 * - Displays total count from API in pagination ("1-25 of 5,000")
 *
 * Usage:
 * ```tsx
 * const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } = useMyInfiniteQuery()
 * const items = data?.pages.flatMap(p => p.items) ?? []
 * const total = data?.pages[0]?.total
 *
 * <PaginatedDataGrid
 *   columns={columns}
 *   items={items}
 *   total={total}
 *   loading={isLoading}
 *   loadingMore={isFetchingNextPage}
 *   hasMore={hasNextPage}
 *   onLoadMore={fetchNextPage}
 * />
 * ```
 */
export function PaginatedDataGrid<T extends GridValidRowModel>({
  columns,
  items,
  total,
  loading = false,
  loadingMore = false,
  hasMore = false,
  onLoadMore,
  error,
  onRetry,
  pageSizeOptions = [25, 50],
  defaultPageSize = 50,
  getRowId,
  onRowClick,
  autoHeight = false,
  checkboxSelection = false,
  rowSelectionModel,
  onRowSelectionModelChange,
  sx,
  emptyTitle,
  emptySubtitle,
  emptySlot,
}: PaginatedDataGridProps<T>) {
  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    page: 0,
    pageSize: defaultPageSize,
  })

  // ─── Auto-fetch when user navigates beyond loaded data ─────────────
  // Mirrors v1: TableView.tsx lines 284-304
  useEffect(() => {
    if (!onLoadMore || !hasMore || loadingMore || loading) return

    const lastVisibleRow = (paginationModel.page + 1) * paginationModel.pageSize
    if (lastVisibleRow > items.length) {
      onLoadMore()
    }
  }, [
    paginationModel.page,
    paginationModel.pageSize,
    items.length,
    hasMore,
    loadingMore,
    loading,
    onLoadMore,
  ])

  const rows = loading ? [] : items

  // Total row count for pagination display ("1-25 of 5,000")
  const rowCount = total ?? (hasMore ? items.length + 1 : items.length)

  const handlePaginationChange = (model: GridPaginationModel, _details: GridCallbackDetails) => {
    setPaginationModel(model)
  }

  // ─── Loading state ─────────────────────────────────────────────────
  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', py: 8 }}>
        <CircularProgress />
      </Box>
    )
  }

  // ─── Error state ───────────────────────────────────────────────────
  if (error) {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: 8, gap: 2 }}>
        <Typography color="error">{error.message || 'Failed to load data'}</Typography>
        {onRetry && (
          <Button variant="outlined" onClick={onRetry}>
            Retry
          </Button>
        )}
      </Box>
    )
  }

  // ─── Empty state ───────────────────────────────────────────────────
  if (items.length === 0) {
    if (emptySlot) return <>{emptySlot}</>
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: 8 }}>
        <Typography variant="h6" color="text.secondary">
          {emptyTitle || 'No data'}
        </Typography>
        {emptySubtitle && (
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            {emptySubtitle}
          </Typography>
        )}
      </Box>
    )
  }

  // ─── Data grid — fills container, scrolls internally ────────────────
  return (
    <DataGrid
      rows={rows}
      columns={columns}
      rowCount={rowCount}
      loading={loadingMore}
      paginationMode="client"
      paginationModel={paginationModel}
      onPaginationModelChange={handlePaginationChange}
      pageSizeOptions={pageSizeOptions}
      disableRowSelectionOnClick
      checkboxSelection={checkboxSelection}
      {...(rowSelectionModel !== undefined ? { rowSelectionModel } : {})}
      {...(onRowSelectionModelChange ? { onRowSelectionModelChange } : {})}
      {...(getRowId ? { getRowId } : {})}
      {...(onRowClick ? { onRowClick } : {})}
      autoHeight={autoHeight}
      sx={{
        height: autoHeight ? undefined : '100%',
        border: 'none',
        '& .MuiDataGrid-row': {
          cursor: onRowClick ? 'pointer' : undefined,
        },
        ...sx,
      }}
    />
  )
}
