import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import { PhoneNumberInput } from '@chatdaddy/components'

const meta: Meta<typeof PhoneNumberInput> = {
  title: 'Components/Inputs/PhoneNumberInput',
  component: PhoneNumberInput,
  tags: ['autodocs'],
  argTypes: {
    defaultCountry: { control: 'text' },
    disabled: { control: 'boolean' },
  },
  args: { value: '', onChange: () => {}, defaultCountry: 'MY' },
}
export default meta

export const Playground: StoryObj<typeof PhoneNumberInput> = {
  render: (args) => {
    const [value, setValue] = useState('')
    return (
      <Box sx={{ maxWidth: 320 }}>
        <PhoneNumberInput {...args} value={value} onChange={setValue} />
        {value && (
          <Typography variant="caption" sx={{ mt: 1, display: 'block', color: 'text.secondary' }}>
            Value: <code>{value}</code>
          </Typography>
        )}
      </Box>
    )
  },
}

export const DefaultCountries: StoryObj = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 320 }}>
      {['MY', 'SG', 'ID', 'US', 'GB', 'AE'].map((country) => (
        <Box key={country}>
          <Typography variant="caption" sx={{ color: 'text.secondary', mb: 0.5, display: 'block' }}>
            Default: {country}
          </Typography>
          <PhoneNumberInput value="" onChange={() => {}} defaultCountry={country} />
        </Box>
      ))}
    </Box>
  ),
}

export const Disabled: StoryObj = {
  render: () => (
    <Box sx={{ maxWidth: 320 }}>
      <PhoneNumberInput value="+60123456789" onChange={() => {}} disabled />
    </Box>
  ),
}
