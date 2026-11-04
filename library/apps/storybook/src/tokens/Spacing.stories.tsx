import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Box, Typography } from '@mui/material'
import { spacing, semanticSpacing } from '@chatdaddy/tokens'

// ─── Spacing bar row ─────────────────────────────────────────────────────────

function SpacingRow({ name, value }: { name: string; value: string }) {
  const px = parseInt(value, 10)
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1.5 }}>
      <Typography
        sx={{ fontFamily: 'monospace', fontSize: '0.75rem', width: 40, flexShrink: 0, color: 'text.secondary' }}
      >
        {name}
      </Typography>
      <Box
        sx={{
          height: 24,
          width: px,
          minWidth: 4,
          bgcolor: 'primary.main',
          borderRadius: '3px',
          opacity: 0.85,
          flexShrink: 0,
        }}
      />
      <Typography sx={{ fontFamily: 'monospace', fontSize: '0.75rem', color: 'text.secondary' }}>
        {value}
      </Typography>
    </Box>
  )
}

// ─── Semantic spacing card ───────────────────────────────────────────────────

function SemanticRow({ name, value }: { name: string; value: string }) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        py: 1,
        px: 2,
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: '8px',
        mb: 1,
        bgcolor: 'background.paper',
      }}
    >
      <Typography sx={{ fontWeight: 600, fontSize: '0.8125rem' }}>{name}</Typography>
      <Typography sx={{ fontFamily: 'monospace', fontSize: '0.75rem', color: 'primary.main' }}>
        {value}
      </Typography>
    </Box>
  )
}

function SpacingStory() {
  return (
    <Box>
      <Typography variant="h5" sx={{ mb: 1, fontWeight: 700 }}>
        Base Scale
      </Typography>
      <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary' }}>
        4px base unit. Bars represent actual pixel widths.
      </Typography>
      <Box sx={{ mb: 5 }}>
        {Object.entries(spacing).map(([k, v]) => (
          <SpacingRow key={k} name={k} value={v} />
        ))}
      </Box>

      <Typography variant="h5" sx={{ mb: 1, fontWeight: 700 }}>
        Semantic Spacing
      </Typography>
      <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary' }}>
        Named for intent — component padding, page gaps, list items.
      </Typography>
      <Box sx={{ maxWidth: 500 }}>
        {Object.entries(semanticSpacing).map(([k, v]) => (
          <SemanticRow key={k} name={k} value={v} />
        ))}
      </Box>
    </Box>
  )
}

const meta: Meta = {
  title: 'Tokens/Spacing',
  component: SpacingStory,
  tags: ['autodocs'],
}
export default meta

export const AllSpacing: StoryObj = { render: () => <SpacingStory /> }
