import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Box } from '@mui/material'
import { TagChip } from '@chatdaddy/components'

const meta: Meta<typeof TagChip> = {
  title: 'Components/Display/TagChip',
  component: TagChip,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'radio', options: ['filled', 'outlined'] },
    tagColor: { control: 'color' },
  },
  args: { tagName: 'Customer', variant: 'filled' },
}
export default meta

export const Playground: StoryObj<typeof TagChip> = {}

export const AllVariants: StoryObj = {
  render: () => (
    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
      <TagChip tagName="Customer" />
      <TagChip tagName="VIP" tagColor="#8B5CF6" />
      <TagChip tagName="Lead" tagColor="#F59E0B" />
      <TagChip tagName="Churned" tagColor="#EF4444" />
      <TagChip tagName="Active" tagColor="#10B981" />
      <TagChip tagName="Outlined" variant="outlined" />
    </Box>
  ),
}

export const WithDelete: StoryObj = {
  render: () => (
    <Box sx={{ display: 'flex', gap: 1 }}>
      <TagChip tagName="Removable" onDelete={() => alert('deleted')} />
      <TagChip tagName="VIP" tagColor="#8B5CF6" onDelete={() => alert('deleted')} />
    </Box>
  ),
}

const SAMPLE_TAGS = ['Support', 'Sales', 'Marketing', 'Billing', 'Onboarding', 'Enterprise', 'Trial', 'Refund']
export const AutoColors: StoryObj = {
  render: () => (
    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
      {SAMPLE_TAGS.map((tag) => <TagChip key={tag} tagName={tag} />)}
    </Box>
  ),
}
