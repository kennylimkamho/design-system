import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import { Box, Switch, FormControlLabel, Typography } from '@mui/material'

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="subtitle2" sx={{ mb: 2, color: 'text.secondary', textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '0.7rem' }}>
        {title}
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, alignItems: 'center' }}>
        {children}
      </Box>
    </Box>
  )
}

function ControlledSwitch({ label, defaultChecked = false }: { label: string; defaultChecked?: boolean }) {
  const [checked, setChecked] = useState(defaultChecked)
  return (
    <FormControlLabel
      control={<Switch checked={checked} onChange={(e) => setChecked(e.target.checked)} />}
      label={label}
    />
  )
}

function SwitchStory() {
  return (
    <Box>
      <Section title="Default On / Off">
        <ControlledSwitch label="Off by default" />
        <ControlledSwitch label="On by default" defaultChecked />
      </Section>

      <Section title="Colors">
        {(['primary', 'secondary', 'success', 'warning', 'error'] as const).map((color) => (
          <FormControlLabel
            key={color}
            control={<Switch defaultChecked color={color} />}
            label={color}
          />
        ))}
      </Section>

      <Section title="Sizes">
        <FormControlLabel control={<Switch defaultChecked size="small" />} label="Small" />
        <FormControlLabel control={<Switch defaultChecked size="medium" />} label="Medium" />
      </Section>

      <Section title="Disabled">
        <FormControlLabel control={<Switch disabled />} label="Disabled off" />
        <FormControlLabel control={<Switch disabled defaultChecked />} label="Disabled on" />
      </Section>

      <Section title="Without label">
        <Switch defaultChecked />
        <Switch />
        <Switch disabled />
        <Switch disabled defaultChecked />
      </Section>

      <Section title="Settings panel example">
        <Box
          sx={{
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: '12px',
            bgcolor: 'background.paper',
            minWidth: 340,
            overflow: 'hidden',
          }}
        >
          {[
            { label: 'Email notifications', sub: 'Receive updates via email', defaultChecked: true },
            { label: 'Desktop notifications', sub: 'Show browser alerts', defaultChecked: false },
            { label: 'Sound alerts', sub: 'Play sound on new message', defaultChecked: true },
            { label: 'Marketing emails', sub: 'Product updates and tips', defaultChecked: false },
          ].map((item, i, arr) => {
            const [checked, setChecked] = useState(item.defaultChecked)
            return (
              <Box
                key={item.label}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  px: 2,
                  py: 1.5,
                  borderBottom: i < arr.length - 1 ? '1px solid' : 'none',
                  borderColor: 'divider',
                }}
              >
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: '0.875rem' }}>{item.label}</Typography>
                  <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary' }}>{item.sub}</Typography>
                </Box>
                <Switch checked={checked} onChange={(e) => setChecked(e.target.checked)} size="small" />
              </Box>
            )
          })}
        </Box>
      </Section>
    </Box>
  )
}

const meta: Meta = {
  title: 'Atoms/Switch',
  component: SwitchStory,
  tags: ['autodocs'],
}
export default meta

export const AllSwitches: StoryObj = { render: () => <SwitchStory /> }
