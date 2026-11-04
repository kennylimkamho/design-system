import { useState, useCallback, useMemo, useRef, useEffect } from 'react'
import {
  TextField,
  Box,
  Popover,
  ListItemButton,
  ListItemText,
  Typography,
  InputAdornment,
  type TextFieldProps,
  type SxProps,
  type Theme,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

// ─── Country data (common countries first) ──────────────────────────────────

interface CountryOption {
  code: string // ISO alpha-2 (e.g. "US")
  name: string // Display name
  dial: string // Calling code (e.g. "+1")
  flag: string // Emoji flag
}

/**
 * Compact country list with common countries.
 * Covers the most used countries in ChatDaddy's market.
 */
const COUNTRIES: CountryOption[] = [
  { code: 'MY', name: 'Malaysia', dial: '+60', flag: '\uD83C\uDDF2\uD83C\uDDFE' },
  { code: 'SG', name: 'Singapore', dial: '+65', flag: '\uD83C\uDDF8\uD83C\uDDEC' },
  { code: 'ID', name: 'Indonesia', dial: '+62', flag: '\uD83C\uDDEE\uD83C\uDDE9' },
  { code: 'IN', name: 'India', dial: '+91', flag: '\uD83C\uDDEE\uD83C\uDDF3' },
  { code: 'PH', name: 'Philippines', dial: '+63', flag: '\uD83C\uDDF5\uD83C\uDDED' },
  { code: 'TH', name: 'Thailand', dial: '+66', flag: '\uD83C\uDDF9\uD83C\uDDED' },
  { code: 'US', name: 'United States', dial: '+1', flag: '\uD83C\uDDFA\uD83C\uDDF8' },
  { code: 'GB', name: 'United Kingdom', dial: '+44', flag: '\uD83C\uDDEC\uD83C\uDDE7' },
  { code: 'AE', name: 'United Arab Emirates', dial: '+971', flag: '\uD83C\uDDE6\uD83C\uDDEA' },
  { code: 'SA', name: 'Saudi Arabia', dial: '+966', flag: '\uD83C\uDDF8\uD83C\uDDE6' },
  { code: 'HK', name: 'Hong Kong', dial: '+852', flag: '\uD83C\uDDED\uD83C\uDDF0' },
  { code: 'TW', name: 'Taiwan', dial: '+886', flag: '\uD83C\uDDF9\uD83C\uDDFC' },
  { code: 'JP', name: 'Japan', dial: '+81', flag: '\uD83C\uDDEF\uD83C\uDDF5' },
  { code: 'KR', name: 'South Korea', dial: '+82', flag: '\uD83C\uDDF0\uD83C\uDDF7' },
  { code: 'AU', name: 'Australia', dial: '+61', flag: '\uD83C\uDDE6\uD83C\uDDFA' },
  { code: 'NZ', name: 'New Zealand', dial: '+64', flag: '\uD83C\uDDF3\uD83C\uDDFF' },
  { code: 'DE', name: 'Germany', dial: '+49', flag: '\uD83C\uDDE9\uD83C\uDDEA' },
  { code: 'FR', name: 'France', dial: '+33', flag: '\uD83C\uDDEB\uD83C\uDDF7' },
  { code: 'IT', name: 'Italy', dial: '+39', flag: '\uD83C\uDDEE\uD83C\uDDF9' },
  { code: 'ES', name: 'Spain', dial: '+34', flag: '\uD83C\uDDEA\uD83C\uDDF8' },
  { code: 'BR', name: 'Brazil', dial: '+55', flag: '\uD83C\uDDE7\uD83C\uDDF7' },
  { code: 'MX', name: 'Mexico', dial: '+52', flag: '\uD83C\uDDF2\uD83C\uDDFD' },
  { code: 'CA', name: 'Canada', dial: '+1', flag: '\uD83C\uDDE8\uD83C\uDDE6' },
  { code: 'NG', name: 'Nigeria', dial: '+234', flag: '\uD83C\uDDF3\uD83C\uDDEC' },
  { code: 'ZA', name: 'South Africa', dial: '+27', flag: '\uD83C\uDDFF\uD83C\uDDE6' },
  { code: 'KE', name: 'Kenya', dial: '+254', flag: '\uD83C\uDDF0\uD83C\uDDEA' },
  { code: 'EG', name: 'Egypt', dial: '+20', flag: '\uD83C\uDDEA\uD83C\uDDEC' },
  { code: 'PK', name: 'Pakistan', dial: '+92', flag: '\uD83C\uDDF5\uD83C\uDDF0' },
  { code: 'BD', name: 'Bangladesh', dial: '+880', flag: '\uD83C\uDDE7\uD83C\uDDE9' },
  { code: 'VN', name: 'Vietnam', dial: '+84', flag: '\uD83C\uDDFB\uD83C\uDDF3' },
  { code: 'CN', name: 'China', dial: '+86', flag: '\uD83C\uDDE8\uD83C\uDDF3' },
  { code: 'RU', name: 'Russia', dial: '+7', flag: '\uD83C\uDDF7\uD83C\uDDFA' },
  { code: 'TR', name: 'Turkey', dial: '+90', flag: '\uD83C\uDDF9\uD83C\uDDF7' },
  { code: 'NL', name: 'Netherlands', dial: '+31', flag: '\uD83C\uDDF3\uD83C\uDDF1' },
  { code: 'SE', name: 'Sweden', dial: '+46', flag: '\uD83C\uDDF8\uD83C\uDDEA' },
  { code: 'CH', name: 'Switzerland', dial: '+41', flag: '\uD83C\uDDE8\uD83C\uDDED' },
  { code: 'PT', name: 'Portugal', dial: '+351', flag: '\uD83C\uDDF5\uD83C\uDDF9' },
  { code: 'PL', name: 'Poland', dial: '+48', flag: '\uD83C\uDDF5\uD83C\uDDF1' },
  { code: 'CL', name: 'Chile', dial: '+56', flag: '\uD83C\uDDE8\uD83C\uDDF1' },
  { code: 'CO', name: 'Colombia', dial: '+57', flag: '\uD83C\uDDE8\uD83C\uDDF4' },
  { code: 'AR', name: 'Argentina', dial: '+54', flag: '\uD83C\uDDE6\uD83C\uDDF7' },
  { code: 'PE', name: 'Peru', dial: '+51', flag: '\uD83C\uDDF5\uD83C\uDDEA' },
  { code: 'LK', name: 'Sri Lanka', dial: '+94', flag: '\uD83C\uDDF1\uD83C\uDDF0' },
  { code: 'MM', name: 'Myanmar', dial: '+95', flag: '\uD83C\uDDF2\uD83C\uDDF2' },
  { code: 'KH', name: 'Cambodia', dial: '+855', flag: '\uD83C\uDDF0\uD83C\uDDED' },
]

// ─── Types ──────────────────────────────────────────────────────────────────

export interface PhoneNumberInputProps extends Omit<TextFieldProps, 'value' | 'onChange'> {
  /** Phone number value (digits only, no +). E.g. "60123456789" */
  value: string
  /** Called with the raw digits (no +) */
  onChange: (value: string) => void
  /** Default country code (ISO alpha-2, default: "MY") */
  defaultCountry?: string
  /** Custom sx */
  sx?: SxProps<Theme>
}

// ─── Component ──────────────────────────────────────────────────────────────

/**
 * International phone input with country code dropdown and flag.
 *
 * Usage:
 * ```tsx
 * <PhoneNumberInput
 *   value={phone}
 *   onChange={setPhone}
 *   defaultCountry="MY"
 * />
 * ```
 */
export function PhoneNumberInput({
  value,
  onChange,
  defaultCountry = 'MY',
  sx,
  disabled,
  ...rest
}: PhoneNumberInputProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const [countrySearch, setCountrySearch] = useState('')

  // Determine selected country from value or default
  const [selectedCode, setSelectedCode] = useState(() => {
    return detectCountry(value) || defaultCountry
  })

  const selectedCountry = useMemo(
    () => COUNTRIES.find((c) => c.code === selectedCode) || COUNTRIES[0],
    [selectedCode]
  )

  // Sync country when value changes externally
  useEffect(() => {
    if (value) {
      const detected = detectCountry(value)
      if (detected) setSelectedCode(detected)
    }
  }, [value])

  const filteredCountries = useMemo(() => {
    if (!countrySearch) return COUNTRIES
    const q = countrySearch.toLowerCase()
    return COUNTRIES.filter(
      (c) =>
        c.name.toLowerCase().includes(q) || c.dial.includes(q) || c.code.toLowerCase().includes(q)
    )
  }, [countrySearch])

  const handleCountrySelect = useCallback(
    (country: CountryOption) => {
      setSelectedCode(country.code)
      // Replace the dial code in value
      const dialDigits = country.dial.replace('+', '')
      const currentNational = stripDialCode(value, selectedCountry.dial)
      onChange(dialDigits + currentNational)
      setAnchorEl(null)
      setCountrySearch('')
    },
    [value, selectedCountry, onChange]
  )

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const raw = e.target.value.replace(/[^\d+]/g, '')
      // If user types + at the start, try to detect country
      if (raw.startsWith('+') || raw.startsWith('0')) {
        const digits = raw.replace(/\D/g, '')
        const detected = detectCountry(digits)
        if (detected) setSelectedCode(detected)
        onChange(digits)
      } else {
        onChange(raw.replace(/\D/g, ''))
      }
    },
    [onChange]
  )

  // Format display value with + and spaces
  const displayValue = useMemo(() => {
    if (!value) return selectedCountry.dial + ' '
    const withPlus = '+' + value
    return withPlus
  }, [value, selectedCountry])

  return (
    <Box ref={containerRef} sx={{ display: 'flex', ...sx }}>
      <TextField
        {...rest}
        value={displayValue}
        onChange={handleInputChange}
        disabled={disabled ?? false}
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Box
                onClick={(e) => {
                  if (!disabled) setAnchorEl(e.currentTarget as HTMLElement)
                }}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.5,
                  cursor: disabled ? 'default' : 'pointer',
                  mr: 0.5,
                  userSelect: 'none',
                }}
              >
                <Typography fontSize="1.25rem" lineHeight={1}>
                  {selectedCountry.flag}
                </Typography>
                <ArrowDropDownIcon fontSize="small" sx={{ color: 'text.secondary' }} />
              </Box>
            </InputAdornment>
          ),
          ...rest.InputProps,
        }}
      />

      {/* Country selector popover */}
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={() => {
          setAnchorEl(null)
          setCountrySearch('')
        }}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        slotProps={{
          paper: {
            sx: {
              width: containerRef.current?.clientWidth || 280,
              maxHeight: 320,
              display: 'flex',
              flexDirection: 'column',
            },
          },
        }}
      >
        <Box sx={{ p: 1 }}>
          <TextField
            size="small"
            placeholder="Search country..."
            value={countrySearch}
            onChange={(e) => setCountrySearch(e.target.value)}
            fullWidth
            autoFocus
            onKeyDown={(e) => e.stopPropagation()}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon fontSize="small" />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Box sx={{ overflow: 'auto', flex: 1 }}>
          {filteredCountries.map((country) => (
            <ListItemButton
              key={country.code}
              dense
              selected={country.code === selectedCode}
              onClick={() => handleCountrySelect(country)}
              sx={{ px: 1.5 }}
            >
              <Typography fontSize="1.25rem" sx={{ mr: 1, lineHeight: 1 }}>
                {country.flag}
              </Typography>
              <ListItemText
                primary={`${country.name} (${country.dial})`}
                primaryTypographyProps={{ variant: 'body2', noWrap: true }}
              />
            </ListItemButton>
          ))}
          {filteredCountries.length === 0 && (
            <Typography variant="body2" color="text.secondary" sx={{ p: 2, textAlign: 'center' }}>
              No countries found
            </Typography>
          )}
        </Box>
      </Popover>
    </Box>
  )
}

// ─── Helpers ────────────────────────────────────────────────────────────────

/** Try to detect country from digits-only phone number */
function detectCountry(digits: string): string | null {
  if (!digits) return null
  // Try longest dial codes first (3 digits, then 2, then 1)
  for (let len = 3; len >= 1; len--) {
    const prefix = digits.substring(0, len)
    const match = COUNTRIES.find((c) => c.dial.replace('+', '') === prefix)
    if (match) return match.code
  }
  return null
}

/** Remove the dial code prefix from a phone number */
function stripDialCode(digits: string, dial: string): string {
  const dialDigits = dial.replace('+', '')
  if (digits.startsWith(dialDigits)) {
    return digits.substring(dialDigits.length)
  }
  return digits
}
