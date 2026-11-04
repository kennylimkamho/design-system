import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Box, Divider, Typography } from '@mui/material'

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Box sx={{ mb: 5 }}>
      <Typography variant="subtitle2" sx={{ mb: 2.5, color: 'text.secondary', textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '0.7rem' }}>
        {title}
      </Typography>
      {children}
    </Box>
  )
}

function DividerStory() {
  return (
    <Box sx={{ maxWidth: 500 }}>
      <Section title="Horizontal">
        <Typography sx={{ mb: 1, fontSize: '0.875rem' }}>Content above</Typography>
        <Divider />
        <Typography sx={{ mt: 1, fontSize: '0.875rem' }}>Content below</Typography>
      </Section>

      <Section title="With Text">
        <Divider>Today</Divider>
        <Box sx={{ my: 2 }} />
        <Divider>
          <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary', px: 1 }}>Yesterday</Typography>
        </Divider>
        <Box sx={{ my: 2 }} />
        <Divider textAlign="left">
          <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary', px: 1 }}>Left aligned</Typography>
        </Divider>
        <Box sx={{ my: 2 }} />
        <Divider textAlign="right">
          <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary', px: 1 }}>Right aligned</Typography>
        </Divider>
      </Section>

      <Section title="Decorative (reduced opacity)">
        <Divider sx={{ opacity: 0.4 }} />
        <Box sx={{ my: 2 }} />
        <Divider sx={{ borderStyle: 'dashed', opacity: 0.5 }} />
      </Section>

      <Section title="Vertical (inline)">
        <Box sx={{ display: 'flex', height: 40, alignItems: 'center', gap: 2 }}>
          <Typography sx={{ fontSize: '0.875rem' }}>Inbox</Typography>
          <Divider orientation="vertical" flexItem />
          <Typography sx={{ fontSize: '0.875rem' }}>CRM</Typography>
          <Divider orientation="vertical" flexItem />
          <Typography sx={{ fontSize: '0.875rem' }}>Broadcasts</Typography>
        </Box>
      </Section>

      <Section title="In a panel (realistic usage)">
        <Box
          sx={{
            bgcolor: 'background.paper',
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: '12px',
            overflow: 'hidden',
          }}
        >
          {['Profile', 'Messages', 'Orders', 'Notes'].map((item, i, arr) => (
            <React.Fragment key={item}>
              <Box sx={{ px: 2, py: 1.5 }}>
                <Typography sx={{ fontSize: '0.875rem', fontWeight: 500 }}>{item}</Typography>
              </Box>
              {i < arr.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </Box>
      </Section>
    </Box>
  )
}

const meta: Meta = {
  title: 'Atoms/Divider',
  component: DividerStory,
  tags: ['autodocs'],
}
export default meta

export const AllDividers: StoryObj = { render: () => <DividerStory /> }
