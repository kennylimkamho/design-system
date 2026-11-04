import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import {
  Box,
  Button,
  IconButton,
  CircularProgress,
  Typography,
} from '@mui/material'
import { Trash2, Plus, Download, Send, Settings } from 'lucide-react'
import { AppIcon } from '@chatdaddy/icons'

// ─── Section wrapper ──────────────────────────────────────────────────────────

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Box sx={{ mb: 5 }}>
      <Typography variant="subtitle2" sx={{ mb: 2, color: 'text.secondary', textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '0.7rem' }}>
        {title}
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, alignItems: 'center' }}>
        {children}
      </Box>
    </Box>
  )
}

// ─── Loading button ───────────────────────────────────────────────────────────

function LoadingButton() {
  const [loading, setLoading] = useState(false)
  const handleClick = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }
  return (
    <Button
      variant="contained"
      disabled={loading}
      onClick={handleClick}
      startIcon={loading ? <CircularProgress size={14} color="inherit" /> : <Send size={14} />}
    >
      {loading ? 'Sending…' : 'Send Message'}
    </Button>
  )
}

function ButtonsStory() {
  return (
    <Box>
      <Section title="Contained">
        <Button variant="contained" color="primary">Primary</Button>
        <Button variant="contained" color="secondary">Secondary</Button>
        <Button variant="contained" color="success">Success</Button>
        <Button variant="contained" color="warning">Warning</Button>
      </Section>

      <Section title="Outlined">
        <Button variant="outlined" color="primary">Primary</Button>
        <Button variant="outlined" color="secondary">Secondary</Button>
        <Button variant="outlined" color="success">Success</Button>
        <Button variant="outlined" color="error">Error</Button>
      </Section>

      <Section title="Text / Ghost">
        <Button variant="text" color="primary">Primary</Button>
        <Button variant="text" color="secondary">Secondary</Button>
        <Button variant="text" color="inherit">Inherit</Button>
        <Button variant="text" color="error">Danger</Button>
      </Section>

      <Section title="Sizes">
        <Button variant="contained" size="small">Small</Button>
        <Button variant="contained" size="medium">Medium</Button>
        <Button variant="contained" size="large">Large</Button>
      </Section>

      <Section title="With Icons">
        <Button variant="contained" startIcon={<Plus size={15} />}>Add Contact</Button>
        <Button variant="outlined" startIcon={<Download size={15} />}>Export</Button>
        <Button variant="text" endIcon={<Settings size={15} />}>Settings</Button>
      </Section>

      <Section title="Destructive">
        <Button variant="contained" color="error" startIcon={<Trash2 size={15} />}>Delete</Button>
        <Button variant="outlined" color="error">Remove</Button>
        <Button variant="text" color="error">Discard</Button>
      </Section>

      <Section title="States">
        <Button variant="contained" disabled>Disabled</Button>
        <Button variant="outlined" disabled>Disabled Outlined</Button>
        <LoadingButton />
      </Section>

      <Section title="Icon Buttons">
        <IconButton color="primary" sx={{ bgcolor: 'primary.main', color: '#fff', borderRadius: '10px', '&:hover': { bgcolor: 'primary.dark' } }}>
          <Plus size={18} />
        </IconButton>
        <IconButton color="default" sx={{ border: '1px solid', borderColor: 'divider', borderRadius: '10px' }}>
          <Settings size={18} />
        </IconButton>
        <IconButton color="error" sx={{ border: '1px solid', borderColor: 'error.main', borderRadius: '10px' }}>
          <Trash2 size={18} />
        </IconButton>
        <AppIcon icon={Plus} color="indigo" size="md" />
        <AppIcon icon={Settings} color="emerald" size="md" />
        <AppIcon icon={Trash2} color="rose" size="md" />
      </Section>

      <Section title="Full Width">
        <Box sx={{ width: '100%' }}>
          <Button variant="contained" fullWidth>Full Width Contained</Button>
          <Box sx={{ mt: 1 }} />
          <Button variant="outlined" fullWidth>Full Width Outlined</Button>
        </Box>
      </Section>
    </Box>
  )
}

const meta: Meta = {
  title: 'Atoms/Button',
  component: ButtonsStory,
  tags: ['autodocs'],
}
export default meta

export const AllButtons: StoryObj = { render: () => <ButtonsStory /> }

export const Contained: StoryObj = {
  render: () => (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Button variant="contained">Default</Button>
      <Button variant="contained" color="secondary">Secondary</Button>
      <Button variant="contained" color="error">Destructive</Button>
    </Box>
  ),
}

export const Outlined: StoryObj = {
  render: () => (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Button variant="outlined">Default</Button>
      <Button variant="outlined" color="error">Destructive</Button>
    </Box>
  ),
}

export const Sizes: StoryObj = {
  render: () => (
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
      <Button variant="contained" size="small">Small</Button>
      <Button variant="contained" size="medium">Medium</Button>
      <Button variant="contained" size="large">Large</Button>
    </Box>
  ),
}
