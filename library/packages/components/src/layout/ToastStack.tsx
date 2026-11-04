import { useEffect } from 'react'
import { Snackbar, Alert, Stack } from '@mui/material'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface Toast {
  id: string
  message: string
  severity: 'success' | 'error' | 'warning' | 'info'
  /** Auto-dismiss duration in ms. Omit to use defaultDuration. */
  duration?: number
}

export interface ToastStackProps {
  /** Active toasts to display */
  toasts: Toast[]
  /** Called when a toast should be dismissed */
  onClose: (id: string) => void
  /** Max number of toasts visible at once (default: 3) */
  maxVisible?: number
  /** Default auto-hide duration in ms (default: 4000) */
  defaultDuration?: number
}

// ─── Component ────────────────────────────────────────────────────────────────

/**
 * Renders a stack of toast notifications, fixed bottom-right.
 *
 * Query-agnostic: wire to useUIStore in your app shell.
 *
 * Usage:
 * ```tsx
 * const { toasts, removeToast } = useUIStore()
 *
 * <ToastStack toasts={toasts} onClose={removeToast} />
 * ```
 */
export function ToastStack({
  toasts,
  onClose,
  maxVisible = 3,
  defaultDuration = 4000,
}: ToastStackProps) {
  const visible = toasts.slice(0, maxVisible)

  return (
    <Stack
      spacing={1}
      sx={{
        position: 'fixed',
        bottom: 24,
        right: 24,
        zIndex: 9999,
        pointerEvents: 'none',
      }}
    >
      {visible.map((toast) => (
        <ToastItem
          key={toast.id}
          toast={toast}
          defaultDuration={defaultDuration}
          onClose={() => onClose(toast.id)}
        />
      ))}
    </Stack>
  )
}

// ─── Internal item ────────────────────────────────────────────────────────────

interface ToastItemProps {
  toast: Toast
  defaultDuration: number
  onClose: () => void
}

function ToastItem({ toast, defaultDuration, onClose }: ToastItemProps) {
  const duration = toast.duration ?? defaultDuration

  useEffect(() => {
    const timer = setTimeout(onClose, duration)
    return () => clearTimeout(timer)
  }, [toast.id, duration, onClose])

  return (
    <Snackbar
      open
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      sx={{ position: 'static', pointerEvents: 'auto' }}
    >
      <Alert
        severity={toast.severity}
        onClose={onClose}
        variant="filled"
        sx={{ minWidth: 280, maxWidth: 420, boxShadow: 4 }}
      >
        {toast.message}
      </Alert>
    </Snackbar>
  )
}
