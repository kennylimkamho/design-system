import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Box, Typography, Divider } from '@mui/material'

const LEVELS = [
  { variant: 'h1', label: 'h1 — 28px / 600', sample: 'The quick brown fox' },
  { variant: 'h2', label: 'h2 — 24px / 600', sample: 'The quick brown fox' },
  { variant: 'h3', label: 'h3 — 20px / 500', sample: 'The quick brown fox' },
  { variant: 'h4', label: 'h4 — 18px / 500', sample: 'The quick brown fox' },
  { variant: 'h5', label: 'h5 — 16px / 600', sample: 'The quick brown fox' },
  { variant: 'h6', label: 'h6 — 15px / 600', sample: 'The quick brown fox' },
  { variant: 'body1', label: 'body1 — 16px', sample: 'Body text, used for primary content and descriptions.' },
  { variant: 'body2', label: 'body2 — 14px', sample: 'Secondary body text, labels, helper text.' },
  { variant: 'button', label: 'button — 14px / 600', sample: 'BUTTON TEXT' },
  { variant: 'caption', label: 'caption — 12px', sample: 'Caption, timestamps, metadata' },
] as const

function TypographyStory() {
  return (
    <Box sx={{ maxWidth: 640 }}>
      <Typography variant="h5" sx={{ mb: 3 }}>
        Type Scale — Sora
      </Typography>
      {LEVELS.map((l, i) => (
        <Box key={l.variant}>
          {i > 0 && <Divider sx={{ my: 2 }} />}
          <Typography variant="caption" sx={{ color: 'text.disabled', fontFamily: 'monospace' }}>
            {l.label}
          </Typography>
          <Typography variant={l.variant} display="block" sx={{ mt: 0.5 }}>
            {l.sample}
          </Typography>
        </Box>
      ))}
    </Box>
  )
}

const meta: Meta = {
  title: 'Tokens/Typography',
  component: TypographyStory,
  tags: ['autodocs'],
}
export default meta

export const TypeScale: StoryObj = { render: () => <TypographyStory /> }
