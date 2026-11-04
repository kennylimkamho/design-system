export type NavigationBadgeValue = number | { count: number; hasMore?: boolean }

/** UI text and screen-reader text deliberately differ for lower-bound counts. */
export function formatNavigationBadge(badge?: NavigationBadgeValue) {
  const count = typeof badge === 'number' ? badge : badge?.count ?? 0
  if (count <= 0) return null
  const hasMore = typeof badge === 'object' && !!badge.hasMore
  return {
    visible: count > 99 ? '99+' : hasMore ? `${count}+` : String(count),
    spoken: count > 99 ? 'at least 99' : hasMore ? `at least ${count}` : String(count),
  }
}
