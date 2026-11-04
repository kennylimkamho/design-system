import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import { Box, Typography, IconButton } from '@mui/material'
import { X } from 'lucide-react'

// ─── Single filter chip ───────────────────────────────────────────────────────

interface FilterChipProps {
  label: string
  count?: number
  active: boolean
  onToggle: () => void
  onClear?: () => void
}

function FilterChip({ label, count, active, onToggle, onClear }: FilterChipProps) {
  return (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '3px',
        pl: '10px',
        pr: onClear ? '4px' : '10px',
        height: 30,
        borderRadius: '8px',
        border: '1px solid',
        borderColor: active ? 'primary.main' : 'divider',
        bgcolor: active ? 'primary.main' : 'background.paper',
        color: active ? '#fff' : 'text.primary',
        fontSize: '0.8125rem',
        fontWeight: active ? 600 : 500,
        cursor: 'pointer',
        transition: 'all 150ms ease',
        userSelect: 'none',
        flexShrink: 0,
        '&:hover': {
          borderColor: 'primary.main',
          bgcolor: active ? 'primary.dark' : 'action.hover',
        },
      }}
      onClick={onToggle}
    >
      <span>{label}</span>
      {count !== undefined && (
        <Box
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            minWidth: 18,
            height: 18,
            px: '3px',
            borderRadius: '9999px',
            bgcolor: active ? 'rgba(255,255,255,0.25)' : '#E5E7EB',
            fontSize: '0.625rem',
            fontWeight: 700,
            color: active ? '#fff' : 'text.secondary',
            ml: '3px',
          }}
        >
          {count}
        </Box>
      )}
      {onClear && active && (
        <Box
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 20,
            height: 20,
            borderRadius: '50%',
            ml: '1px',
            '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' },
          }}
          onClick={(e) => { e.stopPropagation(); onClear() }}
        >
          <X size={11} />
        </Box>
      )}
    </Box>
  )
}

// ─── Filter chip row ──────────────────────────────────────────────────────────

interface FilterOption {
  key: string
  label: string
  count?: number
}

function FilterChipRow({ options, multi = false }: { options: FilterOption[]; multi?: boolean }) {
  const [active, setActive] = useState<Set<string>>(new Set())

  const toggle = (key: string) => {
    if (multi) {
      setActive((prev) => {
        const next = new Set(prev)
        if (next.has(key)) next.delete(key)
        else next.add(key)
        return next
      })
    } else {
      setActive((prev) => {
        const next = new Set<string>()
        if (!prev.has(key)) next.add(key)
        return next
      })
    }
  }

  const clearAll = () => setActive(new Set())

  return (
    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', flexWrap: 'nowrap', overflowX: 'auto' }}>
      {options.map((opt) => (
        <FilterChip
          key={opt.key}
          label={opt.label}
          count={opt.count}
          active={active.has(opt.key)}
          onToggle={() => toggle(opt.key)}
          onClear={multi ? () => toggle(opt.key) : undefined}
        />
      ))}
      {active.size > 0 && (
        <Box
          onClick={clearAll}
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            px: '8px',
            height: 28,
            borderRadius: '8px',
            color: 'error.main',
            fontSize: '0.75rem',
            fontWeight: 600,
            cursor: 'pointer',
            flexShrink: 0,
            '&:hover': { bgcolor: 'error.main', color: '#fff' },
            transition: 'all 150ms ease',
            border: '1px solid',
            borderColor: 'error.main',
          }}
        >
          Clear all
        </Box>
      )}
    </Box>
  )
}

const INBOX_FILTERS: FilterOption[] = [
  { key: 'all', label: 'All', count: 142 },
  { key: 'unread', label: 'Unread', count: 42 },
  { key: 'assigned', label: 'Assigned to me', count: 7 },
  { key: 'mentions', label: 'Mentions', count: 3 },
  { key: 'bots', label: 'Automated' },
  { key: 'resolved', label: 'Resolved' },
]

const NOTIFICATION_FILTERS: FilterOption[] = [
  { key: 'all', label: 'All' },
  { key: 'message', label: 'Messages' },
  { key: 'billing', label: 'Billing' },
  { key: 'channel', label: 'Channels' },
  { key: 'automation', label: 'Automation' },
  { key: 'system', label: 'System' },
]

const MANY_FILTERS: FilterOption[] = [
  { key: 'a', label: 'WhatsApp', count: 58 },
  { key: 'b', label: 'Instagram', count: 12 },
  { key: 'c', label: 'Messenger', count: 7 },
  { key: 'd', label: 'Email', count: 4 },
  { key: 'e', label: 'TikTok', count: 2 },
  { key: 'f', label: 'SMS', count: 19 },
  { key: 'g', label: 'Voice', count: 3 },
  { key: 'h', label: 'Telegram', count: 8 },
  { key: 'i', label: 'Line', count: 1 },
]

function FilterChipRowStory() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
      <Box>
        <Typography variant="subtitle2" sx={{ mb: 2, color: 'text.secondary', textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '0.7rem' }}>
          Inbox filters (single select)
        </Typography>
        <FilterChipRow options={INBOX_FILTERS} />
      </Box>

      <Box>
        <Typography variant="subtitle2" sx={{ mb: 2, color: 'text.secondary', textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '0.7rem' }}>
          Notification center filters (single select)
        </Typography>
        <FilterChipRow options={NOTIFICATION_FILTERS} />
      </Box>

      <Box>
        <Typography variant="subtitle2" sx={{ mb: 2, color: 'text.secondary', textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '0.7rem' }}>
          Multi-select with clear
        </Typography>
        <FilterChipRow options={NOTIFICATION_FILTERS} multi />
      </Box>

      <Box>
        <Typography variant="subtitle2" sx={{ mb: 2, color: 'text.secondary', textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '0.7rem' }}>
          Many chips (scrollable horizontally)
        </Typography>
        <Box sx={{ maxWidth: 480, overflow: 'hidden' }}>
          <FilterChipRow options={MANY_FILTERS} />
        </Box>
      </Box>
    </Box>
  )
}

const meta: Meta = {
  title: 'Molecules/FilterChipRow',
  component: FilterChipRowStory,
  tags: ['autodocs'],
}
export default meta

export const AllFilterChipRows: StoryObj = { render: () => <FilterChipRowStory /> }
