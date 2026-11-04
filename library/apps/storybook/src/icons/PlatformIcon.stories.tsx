import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Box, Typography } from '@mui/material'
import { PlatformIcon } from '@chatdaddy/icons'

const PLATFORMS = [
  'wa', 'wa-business-api', 'instagram', 'messenger',
  'mail', 'tiktok', 'tiktok-shop', 'sms', 'voice',
  'telegram', 'line', 'mock',
]

const meta: Meta<typeof PlatformIcon> = {
  title: 'Icons/PlatformIcon',
  component: PlatformIcon,
  tags: ['autodocs'],
  argTypes: {
    platform: { control: 'select', options: PLATFORMS },
    size: { control: { type: 'number', min: 16, max: 64, step: 4 } },
    tooltip: { control: 'boolean' },
  },
  args: { platform: 'wa', size: 28, tooltip: true },
}
export default meta

export const Playground: StoryObj<typeof PlatformIcon> = {}

export const AllPlatforms: StoryObj = {
  render: () => (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
      {PLATFORMS.map((p) => (
        <Box key={p} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
          <PlatformIcon platform={p} size={32} />
          <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.65rem' }}>
            {p}
          </Typography>
        </Box>
      ))}
    </Box>
  ),
}

export const Sizes: StoryObj = {
  render: () => (
    <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 2 }}>
      {[16, 20, 24, 32, 40, 48].map((size) => (
        <Box key={size} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
          <PlatformIcon platform="wa" size={size} />
          <Typography variant="caption">{size}px</Typography>
        </Box>
      ))}
    </Box>
  ),
}
