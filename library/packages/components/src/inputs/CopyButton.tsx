import { useState, useCallback, type MouseEvent } from 'react'
import { IconButton, Tooltip, Button, type SxProps, type Theme } from '@mui/material'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import CheckIcon from '@mui/icons-material/Check'

// ─── Types ──────────────────────────────────────────────────────────────────

export interface CopyButtonProps {
  /** Text to copy to clipboard */
  textToCopy: string
  /** Tooltip label when not yet copied (default: "Copy") */
  title?: string
  /** Icon size (default: "small") */
  size?: 'small' | 'medium'
  /** If true, shows a button with "Copy" / "Copied" text instead of icon-only */
  withText?: boolean
  /** Disabled state */
  disabled?: boolean
  /** Custom sx */
  sx?: SxProps<Theme>
}

// ─── Component ──────────────────────────────────────────────────────────────

/**
 * Small icon button that copies text to clipboard.
 * Shows "Copied!" tooltip on success for 2 seconds.
 *
 * Usage:
 * ```tsx
 * <CopyButton textToCopy={channelId} />
 * <CopyButton textToCopy={apiToken} withText title="Copy Token" />
 * ```
 */
export function CopyButton({
  textToCopy,
  title = 'Copy',
  size = 'small',
  withText = false,
  disabled = false,
  sx,
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = useCallback(
    async (e: MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation()
      e.preventDefault()

      try {
        await navigator.clipboard.writeText(textToCopy)
      } catch {
        // Fallback for older browsers
        const textarea = document.createElement('textarea')
        textarea.value = textToCopy
        textarea.style.position = 'fixed'
        textarea.style.opacity = '0'
        document.body.appendChild(textarea)
        textarea.select()
        document.execCommand('copy')
        document.body.removeChild(textarea)
      }

      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    },
    [textToCopy]
  )

  if (withText) {
    return (
      <Button
        variant="contained"
        size={size}
        disabled={disabled}
        onClick={handleCopy}
        startIcon={copied ? <CheckIcon /> : <ContentCopyIcon />}
        sx={sx ?? {}}
      >
        {copied ? 'Copied' : title}
      </Button>
    )
  }

  return (
    <Tooltip title={copied ? 'Copied!' : title}>
      <span>
        <IconButton size={size} disabled={disabled} onClick={handleCopy} sx={{ p: 0.5, ...sx }}>
          {copied ? (
            <CheckIcon fontSize={size} color="primary" />
          ) : (
            <ContentCopyIcon fontSize={size} sx={{ color: 'text.secondary' }} />
          )}
        </IconButton>
      </span>
    </Tooltip>
  )
}
