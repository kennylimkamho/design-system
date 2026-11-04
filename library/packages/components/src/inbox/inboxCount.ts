export interface ScopedCount { count: number; hasMore?: boolean }

/** Distinguish an unavailable count from a genuine zero and a pending count. */
export function formatScopedCount(value?: ScopedCount | number, loading = false) {
  if (value === undefined) return loading ? '…' : '—'
  if (typeof value === 'number') return value.toLocaleString()
  return `${value.count.toLocaleString()}${value.hasMore ? '+' : ''}`
}
