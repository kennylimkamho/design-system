import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Box } from '@mui/material'
import { CopyButton } from '@chatdaddy/components'

const meta: Meta<typeof CopyButton> = {
  title: 'Components/Inputs/CopyButton',
  component: CopyButton,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'radio', options: ['small', 'medium'] },
    withText: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: { textToCopy: 'https://api.chatdaddy.tech/token/abc123', title: 'Copy API token' },
}
export default meta

export const Playground: StoryObj<typeof CopyButton> = {}

export const Variants: StoryObj = {
  render: () => (
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
      <CopyButton textToCopy="token-abc" title="Icon only (small)" size="small" />
      <CopyButton textToCopy="token-abc" title="Icon only (medium)" size="medium" />
      <CopyButton textToCopy="token-abc" withText title="With text" />
      <CopyButton textToCopy="token-abc" disabled title="Disabled" />
    </Box>
  ),
}
