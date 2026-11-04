import { useState, useCallback, useRef, useEffect } from 'react'
import { Box, Typography, IconButton, type SxProps, type Theme } from '@mui/material'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import DeleteIcon from '@mui/icons-material/Delete'
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile'

// ─── Types ──────────────────────────────────────────────────────────────────

export interface FileUploadDropzoneProps {
  /** Called when files are dropped or selected */
  onFiles: (files: File[]) => void
  /** Accepted MIME types (e.g., "image/*", ".csv", "application/pdf") */
  accept?: string
  /** Allow multiple file selection (default: false) */
  multiple?: boolean
  /** Disabled state */
  disabled?: boolean
  /** Max file size in bytes */
  maxSize?: number
  /** Custom label text */
  label?: string
  /** Custom description text */
  description?: string
  /** Show file previews after selection (default: true) */
  showPreviews?: boolean
  /** Currently selected files (controlled mode) */
  files?: File[]
  /** Called when a file is removed from the preview list */
  onRemove?: (index: number) => void
  /** Custom sx for the dropzone container */
  sx?: SxProps<Theme>
}

// ─── Component ──────────────────────────────────────────────────────────────

/**
 * Drag-and-drop file upload area with click-to-browse,
 * file previews, and paste support.
 *
 * Usage:
 * ```tsx
 * <FileUploadDropzone
 *   onFiles={handleFiles}
 *   accept="image/*,.pdf"
 *   multiple
 *   label="Upload documents"
 * />
 * ```
 */
export function FileUploadDropzone({
  onFiles,
  accept,
  multiple = false,
  disabled = false,
  maxSize,
  label = 'Drop files here or click to browse',
  description,
  showPreviews = true,
  files: controlledFiles,
  onRemove,
  sx,
}: FileUploadDropzoneProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [localFiles, setLocalFiles] = useState<File[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  const files = controlledFiles ?? localFiles

  const processFiles = useCallback(
    (fileList: File[]) => {
      let filtered = fileList
      if (maxSize) {
        filtered = filtered.filter((f) => f.size <= maxSize)
      }
      if (!multiple) {
        filtered = filtered.slice(0, 1)
      }
      if (filtered.length === 0) return

      if (!controlledFiles) {
        setLocalFiles((prev) => (multiple ? [...prev, ...filtered] : filtered))
      }
      onFiles(filtered)
    },
    [onFiles, multiple, maxSize, controlledFiles]
  )

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      e.stopPropagation()
      setIsDragging(false)
      if (disabled) return

      const droppedFiles = Array.from(e.dataTransfer.files)
      processFiles(droppedFiles)
    },
    [disabled, processFiles]
  )

  const handleDragOver = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      e.stopPropagation()
      if (!disabled) setIsDragging(true)
    },
    [disabled]
  )

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }, [])

  const handleClick = useCallback(() => {
    if (!disabled) inputRef.current?.click()
  }, [disabled])

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const selected = Array.from(e.target.files ?? [])
      processFiles(selected)
      // Reset input so the same file can be re-selected
      e.target.value = ''
    },
    [processFiles]
  )

  const handleRemove = useCallback(
    (index: number) => {
      if (onRemove) {
        onRemove(index)
      } else {
        setLocalFiles((prev) => prev.filter((_, i) => i !== index))
      }
    },
    [onRemove]
  )

  // Paste support
  useEffect(() => {
    const handlePaste = (e: ClipboardEvent) => {
      if (disabled) return
      const items = e.clipboardData?.items
      if (!items) return

      const pasted: File[] = []
      for (const item of items) {
        if (item.kind === 'file') {
          const file = item.getAsFile()
          if (file) pasted.push(file)
        }
      }
      if (pasted.length > 0) {
        processFiles(pasted)
      }
    }

    document.addEventListener('paste', handlePaste)
    return () => document.removeEventListener('paste', handlePaste)
  }, [disabled, processFiles])

  return (
    <Box sx={sx ?? {}}>
      {/* Drop area */}
      <Box
        onClick={handleClick}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        sx={{
          border: '2px dashed',
          borderColor: isDragging ? 'primary.main' : 'divider',
          borderRadius: 2,
          p: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 1,
          cursor: disabled ? 'default' : 'pointer',
          bgcolor: isDragging ? 'action.hover' : 'background.paper',
          opacity: disabled ? 0.5 : 1,
          transition: 'border-color 0.2s, background-color 0.2s',
          '&:hover': disabled ? {} : { borderColor: 'primary.light', bgcolor: 'action.hover' },
        }}
      >
        <CloudUploadIcon
          sx={{ fontSize: 40, color: isDragging ? 'primary.main' : 'text.secondary' }}
        />
        <Typography variant="body2" color="text.secondary" textAlign="center">
          {label}
        </Typography>
        {description && (
          <Typography variant="caption" color="text.secondary">
            {description}
          </Typography>
        )}
      </Box>

      {/* Hidden input */}
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        onChange={handleInputChange}
        style={{ display: 'none' }}
      />

      {/* File previews */}
      {showPreviews && files.length > 0 && (
        <Box sx={{ mt: 1.5, display: 'flex', flexDirection: 'column', gap: 0.75 }}>
          {files.map((file, index) => (
            <Box
              key={`${file.name}-${index}`}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                px: 1.5,
                py: 0.75,
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 1,
                bgcolor: 'background.paper',
              }}
            >
              {file.type.startsWith('image/') ? (
                <Box
                  component="img"
                  src={URL.createObjectURL(file)}
                  alt={file.name}
                  sx={{
                    width: 32,
                    height: 32,
                    borderRadius: 0.5,
                    objectFit: 'cover',
                  }}
                />
              ) : (
                <InsertDriveFileIcon fontSize="small" sx={{ color: 'text.secondary' }} />
              )}
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Typography variant="body2" noWrap>
                  {file.name}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {formatFileSize(file.size)}
                </Typography>
              </Box>
              <IconButton size="small" onClick={() => handleRemove(index)}>
                <DeleteIcon fontSize="small" />
              </IconButton>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  )
}

// ─── Helpers ────────────────────────────────────────────────────────────────

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}
