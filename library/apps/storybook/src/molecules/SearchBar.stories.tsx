import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import { Box, TextField, IconButton, Typography, InputAdornment, Tooltip } from '@mui/material'
import { Search, SlidersHorizontal, X, Command } from 'lucide-react'

// ─── Base search field ────────────────────────────────────────────────────────

function SearchField({
  placeholder = 'Search…',
  value,
  onChange,
  sx = {},
}: {
  placeholder?: string
  value: string
  onChange: (v: string) => void
  sx?: object
}) {
  return (
    <TextField
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      size="small"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search size={14} style={{ opacity: 0.45 }} />
          </InputAdornment>
        ),
        endAdornment: value ? (
          <InputAdornment position="end">
            <IconButton size="small" edge="end" onClick={() => onChange('')}>
              <X size={13} />
            </IconButton>
          </InputAdornment>
        ) : null,
      }}
      sx={{
        '& .MuiOutlinedInput-root': {
          bgcolor: '#F3F4F6',
          borderRadius: '10px',
          '& fieldset': { border: 'none' },
          '&:hover fieldset': { border: 'none' },
          '&.Mui-focused fieldset': {
            border: '1.5px solid',
            borderColor: 'primary.main',
          },
        },
        ...sx,
      }}
    />
  )
}

function BasicSearch() {
  const [val, setVal] = useState('')
  return <SearchField placeholder="Search contacts…" value={val} onChange={setVal} sx={{ width: 280 }} />
}

function PanelHeaderSearch() {
  const [val, setVal] = useState('')
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: '12px',
        overflow: 'hidden',
        width: 300,
      }}
    >
      <Box sx={{ px: 2, py: 1.5, borderBottom: '1px solid', borderColor: 'divider', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography sx={{ fontWeight: 700, fontSize: '0.9375rem' }}>Contacts</Typography>
        <Typography sx={{ fontSize: '0.75rem', color: 'primary.main', fontWeight: 600, cursor: 'pointer' }}>
          + Add
        </Typography>
      </Box>
      <Box sx={{ p: 1.5 }}>
        <SearchField
          placeholder="Search contacts…"
          value={val}
          onChange={setVal}
          sx={{ width: '100%' }}
        />
      </Box>
      <Box sx={{ px: 2, py: 1, opacity: 0.4 }}>
        <Typography sx={{ fontSize: '0.8125rem', color: 'text.secondary' }}>No results</Typography>
      </Box>
    </Box>
  )
}

function SearchWithFilter() {
  const [val, setVal] = useState('')
  const [filterOpen, setFilterOpen] = useState(false)
  return (
    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
      <SearchField
        placeholder="Search chats…"
        value={val}
        onChange={setVal}
        sx={{ width: 240 }}
      />
      <Tooltip title="Filters" arrow>
        <IconButton
          onClick={() => setFilterOpen((f) => !f)}
          sx={{
            width: 36,
            height: 36,
            border: '1px solid',
            borderColor: filterOpen ? 'primary.main' : 'divider',
            borderRadius: '10px',
            color: filterOpen ? 'primary.main' : 'text.secondary',
            bgcolor: filterOpen ? 'primary.main' : 'transparent',
            '&:hover': { borderColor: 'primary.main', bgcolor: filterOpen ? 'primary.dark' : 'action.hover' },
          }}
        >
          <SlidersHorizontal size={16} color={filterOpen ? '#fff' : undefined} />
        </IconButton>
      </Tooltip>
    </Box>
  )
}

function CmdKSearchBar() {
  const [val, setVal] = useState('')
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        px: 1.5,
        height: 40,
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: '10px',
        bgcolor: 'background.paper',
        width: 300,
        cursor: 'text',
        transition: 'border-color 150ms ease',
        '&:hover': { borderColor: 'primary.main' },
      }}
    >
      <Search size={14} style={{ opacity: 0.4, flexShrink: 0 }} />
      <Box
        component="input"
        value={val}
        onChange={(e) => setVal((e.target as HTMLInputElement).value)}
        placeholder="Search anything…"
        sx={{
          flex: 1,
          border: 'none',
          outline: 'none',
          bgcolor: 'transparent',
          fontSize: '0.875rem',
          color: 'text.primary',
          fontFamily: 'inherit',
          '&::placeholder': { color: '#9CA3AF' },
        }}
      />
      {!val && (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '2px',
            px: '6px',
            height: 22,
            borderRadius: '5px',
            bgcolor: '#F3F4F6',
            border: '1px solid #E5E7EB',
            flexShrink: 0,
          }}
        >
          <Command size={10} style={{ opacity: 0.6 }} />
          <Typography sx={{ fontSize: '0.625rem', fontWeight: 700, opacity: 0.6 }}>K</Typography>
        </Box>
      )}
    </Box>
  )
}

function SearchBarStory() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
      <Box>
        <Typography variant="subtitle2" sx={{ mb: 2, color: 'text.secondary', textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '0.7rem' }}>
          Basic Search Bar
        </Typography>
        <BasicSearch />
      </Box>

      <Box>
        <Typography variant="subtitle2" sx={{ mb: 2, color: 'text.secondary', textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '0.7rem' }}>
          In a Panel Header
        </Typography>
        <PanelHeaderSearch />
      </Box>

      <Box>
        <Typography variant="subtitle2" sx={{ mb: 2, color: 'text.secondary', textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '0.7rem' }}>
          With Filter Button
        </Typography>
        <SearchWithFilter />
      </Box>

      <Box>
        <Typography variant="subtitle2" sx={{ mb: 2, color: 'text.secondary', textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '0.7rem' }}>
          ⌘K Keyboard Shortcut Hint
        </Typography>
        <CmdKSearchBar />
      </Box>
    </Box>
  )
}

const meta: Meta = {
  title: 'Molecules/SearchBar',
  component: SearchBarStory,
  tags: ['autodocs'],
}
export default meta

export const AllSearchBars: StoryObj = { render: () => <SearchBarStory /> }
