import { type ReactNode } from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  CircularProgress,
  type ButtonProps,
} from '@mui/material'

// ─── Types ──────────────────────────────────────────────────────────────────

export interface ConfirmDialogProps {
  /** Whether the dialog is open */
  open: boolean
  /** Called when the user closes or cancels */
  onCancel: () => void
  /** Called when the user confirms — can return a Promise for loading state */
  onConfirm: () => void | Promise<void>
  /** Dialog title (default: "Confirm") */
  title?: ReactNode
  /** Description text / body content */
  description?: ReactNode
  /** Extra content below description */
  children?: ReactNode
  /** Confirm button label (default: "Confirm") */
  confirmLabel?: string
  /** Cancel button label (default: "Cancel") */
  cancelLabel?: string
  /** Confirm button color (default: "primary") */
  confirmColor?: ButtonProps['color']
  /** Whether an async action is in progress */
  loading?: boolean
  /** Disable confirm button */
  confirmDisabled?: boolean
  /** Max width of the dialog (default: "xs") */
  maxWidth?: 'xs' | 'sm' | 'md'
}

// ─── Component ──────────────────────────────────────────────────────────────

/**
 * Generic confirmation dialog. Replaces the old DeleteConfirmDialog with
 * full configurability — works for delete, archive, assign, or any action.
 *
 * Usage:
 * ```tsx
 * <ConfirmDialog
 *   open={open}
 *   onCancel={() => setOpen(false)}
 *   onConfirm={handleDelete}
 *   title="Delete 3 contacts?"
 *   description="This action cannot be undone."
 *   confirmLabel="Delete"
 *   confirmColor="error"
 *   loading={isDeleting}
 * />
 * ```
 */
export function ConfirmDialog({
  open,
  onCancel,
  onConfirm,
  title = 'Confirm',
  description,
  children,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  confirmColor = 'primary',
  loading = false,
  confirmDisabled = false,
  maxWidth = 'xs',
}: ConfirmDialogProps) {
  return (
    <Dialog
      open={open}
      onClose={loading ? undefined : onCancel}
      maxWidth={maxWidth}
      fullWidth
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(4px)',
          },
        },
      }}
    >
      <DialogTitle>{title}</DialogTitle>

      <DialogContent>
        {description && (
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        )}
        {children}
      </DialogContent>

      <DialogActions sx={{ px: 3, pb: 2, gap: 1 }}>
        <Button onClick={onCancel} disabled={loading}>
          {cancelLabel}
        </Button>
        <Button
          onClick={onConfirm}
          color={confirmColor}
          variant="contained"
          disabled={loading || confirmDisabled}
          startIcon={loading ? <CircularProgress size={16} /> : undefined}
        >
          {confirmLabel}
        </Button>
      </DialogActions>
    </Dialog>
  )
}
