import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import { SearchField } from '@chatdaddy/components'

const meta: Meta<typeof SearchField> = {
  title: 'Components/Inputs/SearchField',
  component: SearchField,
  tags: ['autodocs'],
  argTypes: {
    debounce: { control: { type: 'number', min: 0, max: 1000, step: 100 } },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
  },
  args: { value: '', onChange: () => {}, placeholder: 'Search...', debounce: 300 },
}
export default meta

export const Playground: StoryObj<typeof SearchField> = {
  render: (args) => {
    const [value, setValue] = useState('')
    return <SearchField {...args} value={value} onChange={setValue} />
  },
}

export const WithLiveValue: StoryObj = {
  render: () => {
    const [value, setValue] = useState('')
    return (
      <Box sx={{ maxWidth: 320 }}>
        <SearchField value={value} onChange={setValue} placeholder="Search contacts..." />
        {value && (
          <Typography variant="caption" sx={{ mt: 1, display: 'block', color: 'text.secondary' }}>
            Searching: <strong>{value}</strong>
          </Typography>
        )}
      </Box>
    )
  },
}

export const Disabled: StoryObj = {
  render: () => <SearchField value="" onChange={() => {}} disabled placeholder="Search disabled..." />,
}

export const NoDebounce: StoryObj = {
  render: () => {
    const [value, setValue] = useState('')
    return (
      <Box sx={{ maxWidth: 320 }}>
        <SearchField value={value} onChange={setValue} debounce={0} placeholder="Instant search (no debounce)..." />
      </Box>
    )
  },
}
