import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import { Box, Chip, Typography } from '@mui/material'
import { tag as tagTokens } from '@chatdaddy/tokens'
import { X } from 'lucide-react'

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Box sx={{ mb: 5 }}>
      <Typography variant="subtitle2" sx={{ mb: 2.5, color: 'text.secondary', textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '0.7rem' }}>
        {title}
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, alignItems: 'center' }}>
        {children}
      </Box>
    </Box>
  )
}

// ─── Tag chip (matches TagChip from v2) ───────────────────────────────────────

function TagChip({ label, index }: { label: string; index: number }) {
  const bg = tagTokens.backgrounds[index % tagTokens.backgrounds.length]
  return (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '5px',
        px: '8px',
        height: 22,
        borderRadius: '5px',
        bgcolor: bg.bg,
        color: bg.text,
        fontSize: '0.6875rem',
        fontWeight: 600,
        lineHeight: 1,
      }}
    >
      <Box
        sx={{
          width: 6,
          height: 6,
          borderRadius: '50%',
          bgcolor: bg.text,
          opacity: 0.7,
          flexShrink: 0,
        }}
      />
      {label}
    </Box>
  )
}

// ─── Filter chip ──────────────────────────────────────────────────────────────

function FilterChip({ label, count }: { label: string; count?: number }) {
  const [active, setActive] = useState(false)
  return (
    <Box
      onClick={() => setActive((a) => !a)}
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px',
        px: '10px',
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
        '&:hover': {
          borderColor: 'primary.main',
          bgcolor: active ? 'primary.dark' : 'action.hover',
        },
      }}
    >
      {label}
      {count !== undefined && (
        <Box
          sx={{
            ml: '3px',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            minWidth: 16,
            height: 16,
            borderRadius: '9999px',
            bgcolor: active ? 'rgba(255,255,255,0.25)' : '#E5E7EB',
            fontSize: '0.625rem',
            fontWeight: 700,
            color: active ? '#fff' : 'text.secondary',
            px: '3px',
          }}
        >
          {count}
        </Box>
      )}
    </Box>
  )
}

// ─── Status chip ─────────────────────────────────────────────────────────────

const STATUS_STYLES = {
  success: { bg: '#ECFDF5', text: '#065F46', dot: '#10B981' },
  warning: { bg: '#FFF7ED', text: '#9A3412', dot: '#F59E0B' },
  error: { bg: '#FFF1F2', text: '#9F1239', dot: '#EF4444' },
  info: { bg: '#EFF6FF', text: '#1E40AF', dot: '#3B82F6' },
  default: { bg: '#F9FAFB', text: '#374151', dot: '#9CA3AF' },
}

function StatusChip({ label, status }: { label: string; status: keyof typeof STATUS_STYLES }) {
  const s = STATUS_STYLES[status]
  return (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '5px',
        px: '8px',
        height: 24,
        borderRadius: '9999px',
        bgcolor: s.bg,
        color: s.text,
        fontSize: '0.75rem',
        fontWeight: 600,
      }}
    >
      <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: s.dot, flexShrink: 0 }} />
      {label}
    </Box>
  )
}

function ChipsStory() {
  const [deleted, setDeleted] = useState<string[]>([])
  const tags = ['WhatsApp', 'VIP', 'Support', 'Order', 'Refund', 'Hot Lead', 'Follow Up']

  return (
    <Box>
      <Section title="MUI Chip — Default">
        <Chip label="Default" />
        <Chip label="Primary" color="primary" />
        <Chip label="Success" color="success" />
        <Chip label="Warning" color="warning" />
        <Chip label="Error" color="error" />
        <Chip label="Info" color="info" />
      </Section>

      <Section title="MUI Chip — Outlined">
        <Chip label="Default" variant="outlined" />
        <Chip label="Primary" color="primary" variant="outlined" />
        <Chip label="Success" color="success" variant="outlined" />
        <Chip label="Error" color="error" variant="outlined" />
      </Section>

      <Section title="MUI Chip — Sizes">
        <Chip label="Small" size="small" color="primary" />
        <Chip label="Medium" size="medium" color="primary" />
      </Section>

      <Section title="Deletable Chips">
        {tags
          .filter((t) => !deleted.includes(t))
          .map((t) => (
            <Chip
              key={t}
              label={t}
              color="primary"
              variant="outlined"
              size="small"
              onDelete={() => setDeleted((d) => [...d, t])}
            />
          ))}
        {deleted.length > 0 && (
          <Typography
            sx={{ fontSize: '0.75rem', color: 'text.secondary', cursor: 'pointer', textDecoration: 'underline' }}
            onClick={() => setDeleted([])}
          >
            Reset
          </Typography>
        )}
      </Section>

      <Section title="Filter Chips (click to toggle)">
        {['All', 'Unread', 'Assigned', 'Mentions', 'Bots'].map((l, i) => (
          <FilterChip key={l} label={l} count={i === 0 ? undefined : [42, 7, 3, 12][i - 1]} />
        ))}
      </Section>

      <Section title="Tag Chips (v2 TagChip — dot + colored bg)">
        {['VIP Customer', 'Hot Lead', 'Support', 'Order', 'Refund', 'Onboarding', 'Spam', 'Follow Up', 'High Priority', 'Cold Lead'].map(
          (t, i) => <TagChip key={t} label={t} index={i} />
        )}
      </Section>

      <Section title="Status Chips">
        <StatusChip label="Open" status="success" />
        <StatusChip label="In Progress" status="info" />
        <StatusChip label="Pending" status="warning" />
        <StatusChip label="Closed" status="error" />
        <StatusChip label="Draft" status="default" />
      </Section>

      <Section title="Compact Chips (height 17px — ChatRow style)">
        {['VIP', 'Urgent', 'Order'].map((t, i) => {
          const bg = tagTokens.backgrounds[i % tagTokens.backgrounds.length]
          return (
            <Box
              key={t}
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                px: '5px',
                height: 17,
                borderRadius: '3px',
                bgcolor: bg.bg,
                color: bg.text,
                fontSize: '0.5625rem',
                fontWeight: 700,
                lineHeight: 1,
              }}
            >
              {t}
            </Box>
          )
        })}
      </Section>
    </Box>
  )
}

const meta: Meta = {
  title: 'Atoms/Chip',
  component: ChipsStory,
  tags: ['autodocs'],
}
export default meta

export const AllChips: StoryObj = { render: () => <ChipsStory /> }
