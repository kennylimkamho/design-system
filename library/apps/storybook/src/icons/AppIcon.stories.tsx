import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Box, Typography } from '@mui/material'
import {
  MessageSquare, Users, Plug, Phone, Workflow, Megaphone,
  Wrench, BrainCircuit, Store, Settings, Bell, Star, Zap,
  Shield, CreditCard, Mail, Archive, Tag, Calendar,
} from 'lucide-react'
import { AppIcon } from '@chatdaddy/icons'

const COLORS = ['indigo', 'blue', 'emerald', 'amber', 'rose', 'violet', 'cyan', 'orange', 'slate']
const SIZES = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const
const ICONS = [
  MessageSquare, Users, Plug, Phone, Workflow, Megaphone,
  Wrench, BrainCircuit, Store, Settings, Bell, Star,
  Zap, Shield, CreditCard, Mail, Archive, Tag, Calendar,
]

const meta: Meta<typeof AppIcon> = {
  title: 'Icons/AppIcon',
  component: AppIcon,
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'select', options: COLORS },
    size: { control: 'select', options: SIZES },
    shape: { control: 'radio', options: ['square', 'circle'] },
    glow: { control: 'boolean' },
    bare: { control: 'boolean' },
    interactive: { control: 'boolean' },
    strokeWidth: { control: { type: 'number', min: 1, max: 3, step: 0.25 } },
  },
  args: {
    icon: MessageSquare,
    color: 'indigo',
    size: 'md',
    shape: 'square',
    glow: false,
    bare: false,
    interactive: false,
    strokeWidth: 1.75,
  },
}
export default meta

// ─── Single interactive story ─────────────────────────────────────────────────
export const Playground: StoryObj<typeof AppIcon> = {}

// ─── All color presets ────────────────────────────────────────────────────────
export const ColorPresets: StoryObj = {
  render: () => (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
      {COLORS.map((color) => (
        <Box key={color} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
          <AppIcon icon={MessageSquare} color={color} size="lg" glow />
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>{color}</Typography>
        </Box>
      ))}
    </Box>
  ),
}

// ─── All sizes ────────────────────────────────────────────────────────────────
export const Sizes: StoryObj = {
  render: () => (
    <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 2 }}>
      {SIZES.map((size) => (
        <Box key={size} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
          <AppIcon icon={Bell} color="indigo" size={size} glow />
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>{size}</Typography>
        </Box>
      ))}
    </Box>
  ),
}

// ─── With glow vs without ─────────────────────────────────────────────────────
export const GlowEffect: StoryObj = {
  render: () => (
    <Box sx={{ display: 'flex', gap: 4 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
        <AppIcon icon={Zap} color="amber" size="xl" />
        <Typography variant="caption">No glow</Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
        <AppIcon icon={Zap} color="amber" size="xl" glow />
        <Typography variant="caption">With glow</Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
        <AppIcon icon={Zap} color="amber" size="xl" glow interactive />
        <Typography variant="caption">Glow + interactive</Typography>
      </Box>
    </Box>
  ),
}

// ─── Square vs circle ─────────────────────────────────────────────────────────
export const Shapes: StoryObj = {
  render: () => (
    <Box sx={{ display: 'flex', gap: 4 }}>
      {(['square', 'circle'] as const).map((shape) => (
        <Box key={shape} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
          <AppIcon icon={Users} color="violet" size="xl" glow shape={shape} />
          <Typography variant="caption">{shape}</Typography>
        </Box>
      ))}
    </Box>
  ),
}

// ─── Icon catalog ─────────────────────────────────────────────────────────────
export const Catalog: StoryObj = {
  render: () => (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
      {ICONS.map((icon, i) => (
        <AppIcon key={i} icon={icon} color={COLORS[i % COLORS.length]} size="md" glow />
      ))}
    </Box>
  ),
}

// ─── Bare mode ────────────────────────────────────────────────────────────────
export const BareMode: StoryObj = {
  render: () => (
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
      {COLORS.map((color) => (
        <AppIcon key={color} icon={Star} color={color} bare iconSize={24} />
      ))}
    </Box>
  ),
}
