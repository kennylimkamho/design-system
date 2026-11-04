import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Box, CircularProgress, Button, Typography } from '@mui/material'

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Box sx={{ mb: 5 }}>
      <Typography variant="subtitle2" sx={{ mb: 2.5, color: 'text.secondary', textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '0.7rem' }}>
        {title}
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, alignItems: 'center' }}>
        {children}
      </Box>
    </Box>
  )
}

function SpinnerStory() {
  return (
    <Box>
      <Section title="Sizes">
        {[16, 20, 24, 32, 40, 56].map((size) => (
          <Box key={size} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <CircularProgress size={size} />
            <Typography sx={{ fontSize: '0.7rem', color: 'text.secondary' }}>{size}px</Typography>
          </Box>
        ))}
      </Section>

      <Section title="Colors">
        {(['primary', 'secondary', 'success', 'warning', 'error', 'inherit'] as const).map((color) => (
          <Box key={color} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <CircularProgress size={28} color={color} />
            <Typography sx={{ fontSize: '0.7rem', color: 'text.secondary' }}>{color}</Typography>
          </Box>
        ))}
      </Section>

      <Section title="Inline in Button">
        <Button
          variant="contained"
          disabled
          startIcon={<CircularProgress size={14} color="inherit" />}
        >
          Saving…
        </Button>
        <Button
          variant="outlined"
          disabled
          startIcon={<CircularProgress size={14} color="inherit" />}
        >
          Loading…
        </Button>
        <Button
          variant="text"
          disabled
          startIcon={<CircularProgress size={14} color="inherit" />}
        >
          Processing
        </Button>
      </Section>

      <Section title="Full Page Loading State">
        <Box
          sx={{
            width: 400,
            height: 240,
            bgcolor: 'background.paper',
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: '16px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2,
          }}
        >
          <CircularProgress size={40} />
          <Typography sx={{ fontSize: '0.875rem', color: 'text.secondary' }}>Loading chats…</Typography>
        </Box>
      </Section>

      <Section title="Determinate Progress">
        {[25, 50, 75, 100].map((val) => (
          <Box key={val} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1, position: 'relative' }}>
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
              <CircularProgress variant="determinate" value={val} size={52} />
              <Box
                sx={{
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  position: 'absolute',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography sx={{ fontSize: '0.6875rem', fontWeight: 700, color: 'text.primary' }}>
                  {val}%
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Section>
    </Box>
  )
}

const meta: Meta = {
  title: 'Atoms/Spinner',
  component: SpinnerStory,
  tags: ['autodocs'],
}
export default meta

export const AllSpinners: StoryObj = { render: () => <SpinnerStory /> }
