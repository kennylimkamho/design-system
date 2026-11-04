import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Box, Typography } from '@mui/material'
import { shell, brand, light, dark } from '@chatdaddy/tokens'

// ─── Swatch ──────────────────────────────────────────────────────────────────

function Swatch({ name, value }: { name: string; value: string }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
      <Box
        sx={{
          width: 40,
          height: 40,
          borderRadius: '8px',
          bgcolor: value,
          border: '1px solid rgba(0,0,0,0.08)',
          flexShrink: 0,
        }}
      />
      <Box>
        <Typography sx={{ fontSize: '0.8rem', fontWeight: 600 }}>{name}</Typography>
        <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary', fontFamily: 'monospace' }}>
          {value}
        </Typography>
      </Box>
    </Box>
  )
}

function SwatchGroup({ title, tokens }: { title: string; tokens: Record<string, string> }) {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
        {title}
      </Typography>
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 1 }}>
        {Object.entries(tokens).map(([k, v]) =>
          typeof v === 'string' ? <Swatch key={k} name={k} value={v} /> : null
        )}
      </Box>
    </Box>
  )
}

function ColorsStory() {
  return (
    <Box>
      <SwatchGroup title="Shell" tokens={shell as unknown as Record<string, string>} />
      <SwatchGroup title="Brand" tokens={brand as unknown as Record<string, string>} />
      <SwatchGroup title="Light Mode" tokens={light as unknown as Record<string, string>} />
      <SwatchGroup title="Dark Mode" tokens={dark as unknown as Record<string, string>} />
    </Box>
  )
}

const meta: Meta = {
  title: 'Tokens/Colors',
  component: ColorsStory,
  tags: ['autodocs'],
}
export default meta

export const AllColors: StoryObj = { render: () => <ColorsStory /> }
