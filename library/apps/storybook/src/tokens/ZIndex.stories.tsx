import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Box, Typography } from '@mui/material'
import { zIndex } from '@chatdaddy/tokens'

const LAYER_COLORS = [
  '#E0E7FF',
  '#C7D2FE',
  '#A5B4FC',
  '#818CF8',
  '#6366F1',
  '#4F46E5',
  '#4338CA',
  '#3730A3',
  '#312E81',
  '#1E1B4B',
  '#0F0D3A',
]

const entries = Object.entries(zIndex).sort(([, a], [, b]) => a - b)

function ZIndexStory() {
  return (
    <Box>
      <Typography variant="h5" sx={{ mb: 1, fontWeight: 700 }}>
        Z-Index Stack
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary', mb: 4 }}>
        Layering scale from base (0) to toast (9999). Stacked cards represent the visual depth order.
      </Typography>

      {/* Stacked diagram */}
      <Box
        sx={{
          position: 'relative',
          width: 320,
          height: entries.length * 32 + 60,
          mb: 6,
        }}
      >
        {entries.map(([name, value], i) => {
          const color = LAYER_COLORS[Math.min(i, LAYER_COLORS.length - 1)]
          const textColor = i > 5 ? '#fff' : '#1E1B4B'
          return (
            <Box
              key={name}
              sx={{
                position: 'absolute',
                bottom: i * 32,
                left: 0,
                right: 0,
                height: 44,
                bgcolor: color,
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                px: 2,
                boxShadow: '0 -2px 6px rgba(0,0,0,0.12)',
                justifyContent: 'space-between',
              }}
            >
              <Typography sx={{ fontWeight: 600, fontSize: '0.8rem', color: textColor }}>
                {name}
              </Typography>
              <Typography sx={{ fontFamily: 'monospace', fontSize: '0.75rem', color: textColor, opacity: 0.85 }}>
                {value}
              </Typography>
            </Box>
          )
        })}
      </Box>

      {/* Table */}
      <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
        Reference Table
      </Typography>
      <Box
        sx={{
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: '12px',
          overflow: 'hidden',
          maxWidth: 400,
        }}
      >
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            bgcolor: '#F9FAFB',
            px: 2,
            py: 1,
            borderBottom: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Typography sx={{ fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'text.secondary' }}>
            Token
          </Typography>
          <Typography sx={{ fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'text.secondary' }}>
            Value
          </Typography>
        </Box>
        {entries.map(([name, value], i) => (
          <Box
            key={name}
            sx={{
              display: 'grid',
              gridTemplateColumns: '1fr auto',
              px: 2,
              py: 1.25,
              borderBottom: i < entries.length - 1 ? '1px solid' : 'none',
              borderColor: 'divider',
              '&:hover': { bgcolor: 'action.hover' },
            }}
          >
            <Typography sx={{ fontWeight: 600, fontSize: '0.8125rem' }}>{name}</Typography>
            <Typography
              sx={{
                fontFamily: 'monospace',
                fontSize: '0.8rem',
                color: 'primary.main',
                fontWeight: 600,
              }}
            >
              {value}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

const meta: Meta = {
  title: 'Tokens/ZIndex',
  component: ZIndexStory,
  tags: ['autodocs'],
}
export default meta

export const AllZIndex: StoryObj = { render: () => <ZIndexStory /> }
