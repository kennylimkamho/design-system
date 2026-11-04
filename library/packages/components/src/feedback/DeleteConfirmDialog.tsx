import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  CircularProgress,
} from '@mui/material'

export interface DeleteConfirmDialogProps {
  open: boolean
  count: number
  itemLabel?: string
  onConfirm: () => void
  onCancel: () => void
  loading?: boolean
}

export function DeleteConfirmDialog({
  open,
  count,
  itemLabel = 'item',
  onConfirm,
  onCancel,
  loading = false,
}: DeleteConfirmDialogProps) {
  const plural = count === 1 ? itemLabel : `${itemLabel}s`

  return (
    <Dialog open={open} onClose={onCancel} maxWidth="xs" fullWidth>
      <DialogTitle>
        Delete {count} {plural}?
      </DialogTitle>
      <DialogContent>
        <Typography variant="body2" color="text.secondary">
          This action cannot be undone.
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel} disabled={loading}>
          Cancel
        </Button>
        <Button onClick={onConfirm} color="error" variant="contained" disabled={loading}>
          {loading ? <CircularProgress size={20} /> : 'Delete'}
        </Button>
      </DialogActions>
    </Dialog>
  )
}
