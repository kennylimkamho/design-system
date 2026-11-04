import { Box } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { navigationShell } from '@chatdaddy/tokens'

export interface NavigationRailState {
  expanded: boolean
  pinned: boolean
  onTogglePin: () => void
  dismiss: (moveFocus?: boolean) => void
}

export interface NavigationRailShellProps {
  children: (state: NavigationRailState) => ReactNode
  /** An app route key. On change an unpinned hover preview closes. */
  routeKey?: string
  /** Focus target after Escape or an in-app link; give the main region tabindex=-1. */
  contentId: string
  /** Disable persistence in isolated previews/tests; defaults to the App key. */
  storageKey?: string | null
}

/** Product navigation behaviour copied from DesktopNavigationShell, without router coupling.
 * Hover/focus opens an overlay; only a pinned panel reserves the full width.
 */
export function NavigationRailShell({ children, routeKey, contentId, storageKey = 'navbar-pinned' }: NavigationRailShellProps) {
  const [pinned, setPinned] = useState(() => {
    if (!storageKey || typeof window === 'undefined') return false
    try { return window.localStorage.getItem(storageKey) === 'true' } catch { return false }
  })
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const pointerInput = useRef(false)
  const leaveTimer = useRef<ReturnType<typeof setTimeout>>()
  const panel = useRef<HTMLDivElement>(null)
  const previousRoute = useRef(routeKey)
  const expanded = pinned || (!dismissed && (hovered || focused))

  const cancelLeave = () => clearTimeout(leaveTimer.current)
  const dismiss = (moveFocus = false) => {
    if (pinned) return
    cancelLeave()
    setHovered(false)
    setFocused(false)
    setDismissed(true)
    if (moveFocus) document.getElementById(contentId)?.focus({ preventScroll: true })
  }

  useEffect(() => {
    if (!storageKey) return
    try { window.localStorage.setItem(storageKey, String(pinned)) } catch { /* Private browsing */ }
  }, [pinned, storageKey])

  useEffect(() => {
    if (previousRoute.current !== routeKey) {
      previousRoute.current = routeKey
      dismiss(!!panel.current?.contains(document.activeElement))
    }
  }, [routeKey])

  useEffect(() => {
    const keyboard = () => { pointerInput.current = false }
    const syncPin = (event: StorageEvent) => {
      if (storageKey && event.key === storageKey) setPinned(event.newValue === 'true')
    }
    document.addEventListener('keydown', keyboard, true)
    window.addEventListener('storage', syncPin)
    return () => {
      cancelLeave()
      document.removeEventListener('keydown', keyboard, true)
      window.removeEventListener('storage', syncPin)
    }
  }, [storageKey])

  return <Box
    data-navigation-slot=""
    data-pinned={pinned}
    sx={{
      position: 'relative', width: pinned ? navigationShell.panelWidth : navigationShell.railWidth,
      height: '100%', flexShrink: 0, zIndex: 902, transition: 'width 200ms ease',
      '@media (prefers-reduced-motion: reduce)': { transition: 'none' },
    }}>
    <Box
      ref={panel}
      data-navigation-panel=""
      data-expanded={expanded}
      onPointerDownCapture={event => {
        pointerInput.current = event.pointerType === 'mouse'
        if (event.pointerType !== 'mouse') { cancelLeave(); setDismissed(false); setFocused(true) }
      }}
      onMouseEnter={() => { cancelLeave(); setDismissed(false); setHovered(true) }}
      onMouseLeave={() => {
        cancelLeave()
        leaveTimer.current = setTimeout(() => { setHovered(false); setDismissed(false) }, 140)
      }}
      onFocusCapture={(event) => {
        if (!pointerInput.current && event.target instanceof HTMLElement) {
          cancelLeave(); setDismissed(false); setFocused(true)
        }
      }}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setFocused(false)
      }}
      onClickCapture={(event) => {
        if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.defaultPrevented) return
        const link = (event.target as HTMLElement).closest<HTMLAnchorElement>('a[href]')
        if (link && link.target !== '_blank' && link.origin === window.location.origin && !link.getAttribute('href')?.startsWith('#')) dismiss(true)
      }}
      onKeyDown={(event) => {
        if (event.key === 'Escape' && !pinned) { event.preventDefault(); event.stopPropagation(); dismiss(true) }
      }}
      sx={{
        position: 'absolute', inset: '0 auto 0 0', width: expanded ? navigationShell.panelWidth : navigationShell.railWidth,
        height: '100%', bgcolor: navigationShell.bg, overflow: 'hidden', boxSizing: 'border-box',
        borderRight: expanded && !pinned ? `1px solid ${navigationShell.border}` : '1px solid transparent',
        boxShadow: expanded && !pinned ? '12px 0 28px -12px rgba(16, 24, 40, 0.20)' : 'none',
        transition: 'width 180ms ease, box-shadow 180ms ease',
        '@media (prefers-reduced-motion: reduce)': { transition: 'none' },
      }}>
      {children({ expanded, pinned, onTogglePin: () => { setPinned(value => !value); setDismissed(false) }, dismiss })}
    </Box>
  </Box>
}
