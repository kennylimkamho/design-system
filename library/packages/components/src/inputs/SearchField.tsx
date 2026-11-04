import { useState, useEffect, useCallback } from 'react'
import {
  TextField,
  InputAdornment,
  IconButton,
  type TextFieldProps,
  type SxProps,
  type Theme,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import ClearIcon from '@mui/icons-material/Clear'

// ─── Types ──────────────────────────────────────────────────────────────────

export interface SearchFieldProps extends Omit<TextFieldProps, 'value' | 'onChange'> {
  /** Current search value (controlled) */
  value: string
  /** Called with the new search string */
  onChange: (value: string) => void
  /** Debounce delay in ms (default: 300). Set to 0 to disable. */
  debounce?: number
  /** Custom sx for the root TextField */
  sx?: SxProps<Theme>
}

// ─── Component ──────────────────────────────────────────────────────────────

/**
 * TextField with search icon, clear button, and built-in debounce.
 * Consistent styling across all modules.
 *
 * Usage:
 * ```tsx
 * const [search, setSearch] = useState('')
 * <SearchField value={search} onChange={setSearch} placeholder="Search tags..." />
 * ```
 */
export function SearchField({
  value,
  onChange,
  debounce = 300,
  placeholder = 'Search...',
  sx,
  ...rest
}: SearchFieldProps) {
  const [localValue, setLocalValue] = useState(value)

  // Sync external value changes (e.g., clear from parent)
  useEffect(() => {
    if (value !== localValue) {
      setLocalValue(value)
    }
    // Only sync when external value changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  // Debounced onChange
  useEffect(() => {
    if (debounce <= 0) return
    const timer = setTimeout(() => {
      if (localValue !== value) {
        onChange(localValue)
      }
    }, debounce)
    return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localValue, debounce])

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newVal = e.target.value.trimStart()
      setLocalValue(newVal)
      // Immediate callback if no debounce
      if (debounce <= 0) {
        onChange(newVal)
      }
    },
    [onChange, debounce]
  )

  const handleClear = useCallback(() => {
    setLocalValue('')
    onChange('')
  }, [onChange])

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      e.stopPropagation()
      if (e.key === 'Escape') {
        handleClear()
      }
    },
    [handleClear]
  )

  return (
    <TextField
      size="small"
      placeholder={placeholder}
      value={localValue}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      onFocus={(e) => e.stopPropagation()}
      fullWidth
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon fontSize="small" sx={{ color: 'text.secondary' }} />
          </InputAdornment>
        ),
        endAdornment: localValue ? (
          <InputAdornment position="end">
            <IconButton size="small" onClick={handleClear} sx={{ p: 0.25 }}>
              <ClearIcon fontSize="small" sx={{ color: 'text.secondary' }} />
            </IconButton>
          </InputAdornment>
        ) : null,
      }}
      sx={{
        '& .MuiInputBase-root': {
          bgcolor: 'action.hover',
          height: 36,
          '& input': { pl: 0 },
        },
        '& fieldset': {
          border: 'none',
        },
        ...sx,
      }}
      {...rest}
    />
  )
}
