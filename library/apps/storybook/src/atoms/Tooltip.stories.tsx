import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Box, Tooltip, IconButton, Button, Typography } from '@mui/material'
import { Info, Settings, Bell, Trash2, HelpCircle } from 'lucide-react'

type Placement =
  | 'top' | 'top-start' | 'top-end'
  | 'bottom' | 'bottom-start' | 'bottom-end'
  | 'left' | 'left-start' | 'left-end'
  | 'right' | 'right-start' | 'right-end'

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Box sx={{ mb: 5 }}>
      <Typography variant="subtitle2" sx={{ mb: 2.5, color: 'text.secondary', textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '0.7rem' }}>
        {title}
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, alignItems: 'center' }}>
        {children}
      </Box>
    </Box>
  )
}

const placements: Placement[] = [
  'top-start', 'top', 'top-end',
  'left-start', 'left', 'left-end',
  'right-start', 'right', 'right-end',
  'bottom-start', 'bottom', 'bottom-end',
]

function TooltipStory() {
  return (
    <Box>
      <Section title="Default">
        <Tooltip title="This is a tooltip">
          <Button variant="outlined">Hover me</Button>
        </Tooltip>
        <Tooltip title="Settings panel">
          <IconButton><Settings size={18} /></IconButton>
        </Tooltip>
        <Tooltip title="Get help">
          <IconButton><HelpCircle size={18} /></IconButton>
        </Tooltip>
      </Section>

      <Section title="With Arrow">
        <Tooltip title="Tooltip with arrow" arrow>
          <Button variant="outlined">Arrow tooltip</Button>
        </Tooltip>
        <Tooltip title="Notifications" arrow>
          <IconButton><Bell size={18} /></IconButton>
        </Tooltip>
        <Tooltip title="Delete item — this action cannot be undone" arrow>
          <IconButton color="error"><Trash2 size={18} /></IconButton>
        </Tooltip>
      </Section>

      <Section title="Multiline content">
        <Tooltip
          arrow
          title={
            <Box>
              <Typography sx={{ fontSize: '0.75rem', fontWeight: 700, mb: 0.25 }}>Pro tip</Typography>
              <Typography sx={{ fontSize: '0.6875rem', opacity: 0.85 }}>
                Use keyboard shortcut ⌘K to open quick search
              </Typography>
            </Box>
          }
        >
          <Button variant="outlined" startIcon={<Info size={14} />}>Rich tooltip</Button>
        </Tooltip>
      </Section>

      <Section title="Placements">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, auto)',
            gap: 1.5,
            p: 4,
          }}
        >
          {placements.map((placement) => (
            <Tooltip key={placement} title={placement} placement={placement} arrow>
              <Button
                size="small"
                variant="outlined"
                sx={{ fontSize: '0.65rem', px: 1, minWidth: 'auto', whiteSpace: 'nowrap' }}
              >
                {placement}
              </Button>
            </Tooltip>
          ))}
        </Box>
      </Section>

      <Section title="Disabled / no wrap">
        <Tooltip title="Cannot delete active conversation" arrow>
          <span>
            <Button variant="outlined" color="error" disabled startIcon={<Trash2 size={14} />}>
              Delete
            </Button>
          </span>
        </Tooltip>
      </Section>
    </Box>
  )
}

const meta: Meta = {
  title: 'Atoms/Tooltip',
  component: TooltipStory,
  tags: ['autodocs'],
}
export default meta

export const AllTooltips: StoryObj = { render: () => <TooltipStory /> }
