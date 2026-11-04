import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Box, Typography, Button, Chip } from '@mui/material'
import { radius, radiusAlias } from '@chatdaddy/tokens'

function RadiusBox({ name, value }: { name: string; value: string }) {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Box
        sx={{
          width: 80,
          height: 80,
          bgcolor: 'primary.main',
          borderRadius: value,
          opacity: 0.85,
          mx: 'auto',
          mb: 1,
        }}
      />
      <Typography sx={{ fontWeight: 600, fontSize: '0.8rem' }}>{name}</Typography>
      <Typography sx={{ fontFamily: 'monospace', fontSize: '0.7rem', color: 'text.secondary' }}>
        {value}
      </Typography>
    </Box>
  )
}

function AliasPreview({ name, value }: { name: string; value: string }) {
  const previewStyle = {
    borderRadius: value,
    border: '1.5px solid',
    borderColor: 'primary.main',
    bgcolor: 'primary.main',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    px: 2,
    py: 1,
    fontSize: '0.75rem',
    fontWeight: 600,
    minWidth: 80,
    height: 36,
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1.5 }}>
      <Box sx={{ width: 140, flexShrink: 0 }}>
        <Typography sx={{ fontWeight: 600, fontSize: '0.8rem' }}>{name}</Typography>
        <Typography sx={{ fontFamily: 'monospace', fontSize: '0.7rem', color: 'text.secondary' }}>
          {value}
        </Typography>
      </Box>
      <Box sx={previewStyle}>{name}</Box>
    </Box>
  )
}

function RadiusStory() {
  return (
    <Box>
      <Typography variant="h5" sx={{ mb: 1, fontWeight: 700 }}>
        Base Scale
      </Typography>
      <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary' }}>
        All radius values visualised as filled boxes.
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))',
          gap: 3,
          mb: 6,
        }}
      >
        {Object.entries(radius).map(([k, v]) => (
          <RadiusBox key={k} name={k} value={v} />
        ))}
      </Box>

      <Typography variant="h5" sx={{ mb: 1, fontWeight: 700 }}>
        Semantic Aliases
      </Typography>
      <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary' }}>
        Named for their component context.
      </Typography>
      <Box sx={{ maxWidth: 500 }}>
        {Object.entries(radiusAlias).map(([k, v]) => (
          <AliasPreview key={k} name={k} value={v} />
        ))}
      </Box>

      <Typography variant="h5" sx={{ mt: 5, mb: 3, fontWeight: 700 }}>
        Real Component Previews
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>
        <Button variant="contained">Button (12px)</Button>
        <Chip label="Chip (8px)" color="primary" />
        <Box
          sx={{
            bgcolor: 'background.paper',
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: '16px',
            px: 2,
            py: 1.5,
            fontSize: '0.875rem',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          }}
        >
          Card (16px)
        </Box>
        <Box
          sx={{
            bgcolor: 'primary.main',
            color: '#fff',
            borderRadius: '14px 14px 4px 14px',
            px: 2,
            py: 1,
            fontSize: '0.875rem',
          }}
        >
          Chat Bubble Sent
        </Box>
        <Box
          sx={{
            bgcolor: 'background.paper',
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: '14px 14px 14px 4px',
            px: 2,
            py: 1,
            fontSize: '0.875rem',
          }}
        >
          Chat Bubble Received
        </Box>
        <Box
          sx={{
            bgcolor: 'primary.main',
            color: '#fff',
            borderRadius: '9999px',
            px: 2,
            py: 0.5,
            fontSize: '0.75rem',
            fontWeight: 700,
          }}
        >
          Pill / Avatar
        </Box>
      </Box>
    </Box>
  )
}

const meta: Meta = {
  title: 'Tokens/Radius',
  component: RadiusStory,
  tags: ['autodocs'],
}
export default meta

export const AllRadius: StoryObj = { render: () => <RadiusStory /> }
