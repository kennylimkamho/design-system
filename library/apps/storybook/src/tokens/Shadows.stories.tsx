import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Box, Typography } from '@mui/material'
import { shadows } from '@chatdaddy/tokens'

function ShadowCard({ name, value }: { name: string; value: string }) {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Box
        sx={{
          bgcolor: 'background.paper',
          borderRadius: '12px',
          boxShadow: value === 'none' ? '0 0 0 1px rgba(0,0,0,0.08)' : value,
          width: 120,
          height: 80,
          mx: 'auto',
          mb: 1.5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography sx={{ fontSize: '0.7rem', color: 'text.secondary', fontWeight: 600 }}>
          {name === 'none' ? 'none' : ''}
        </Typography>
      </Box>
      <Typography sx={{ fontWeight: 600, fontSize: '0.8rem' }}>{name}</Typography>
    </Box>
  )
}

function GlowCard({ name, value }: { name: string; value: string }) {
  const colorMap: Record<string, string> = {
    glowIndigo: '#0F5BFF',
    glowBlue: '#3B82F6',
    glowEmerald: '#10B981',
    glowAmber: '#F59E0B',
    glowRose: '#F43F5E',
    glowViolet: '#8B5CF6',
    glowCyan: '#06B6D4',
    glowOrange: '#F97316',
    glowSlate: '#64748B',
  }
  const bg = colorMap[name] ?? '#0F5BFF'
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Box
        sx={{
          width: 48,
          height: 48,
          borderRadius: '12px',
          bgcolor: bg,
          boxShadow: value,
          mx: 'auto',
          mb: 1.5,
        }}
      />
      <Typography sx={{ fontWeight: 600, fontSize: '0.75rem' }}>
        {name.replace('glow', '')}
      </Typography>
    </Box>
  )
}

function ShadowSection({
  title,
  description,
  keys,
}: {
  title: string
  description: string
  keys: string[]
}) {
  return (
    <Box sx={{ mb: 6 }}>
      <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>
        {title}
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
        {description}
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
          gap: 4,
          bgcolor: '#F3F4F6',
          borderRadius: '16px',
          p: 4,
        }}
      >
        {keys.map((k) => {
          const v = (shadows as Record<string, string>)[k]
          if (!v) return null
          if (k.startsWith('glow')) return <GlowCard key={k} name={k} value={v} />
          return <ShadowCard key={k} name={k} value={v} />
        })}
      </Box>
    </Box>
  )
}

function ShadowsStory() {
  return (
    <Box>
      <ShadowSection
        title="Elevation Scale"
        description="Core elevation levels — none through 2xl."
        keys={['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl']}
      />
      <ShadowSection
        title="Semantic"
        description="Named for their usage context: card, dialog, sidebar, navbar, panel."
        keys={['card', 'cardHover', 'dialog', 'sidebar', 'navbar', 'panel']}
      />
      <ShadowSection
        title="Chat"
        description="Shadows used on message bubbles and floating chat actions."
        keys={['chatBubble', 'chatBubbleHover', 'chatAction']}
      />
      <ShadowSection
        title="Kanban"
        description="Shadows for CRM kanban columns and cards."
        keys={['kanbanColumn', 'kanbanCard', 'kanbanCardHover']}
      />
      <ShadowSection
        title="Buttons"
        description="Primary button shadow and hover lift."
        keys={['buttonPrimary', 'buttonPrimaryHover']}
      />
      <ShadowSection
        title="Badge & Unread"
        description="Glow for unread badges and avatar borders."
        keys={['unreadBadge', 'avatarWithImage']}
      />
      <ShadowSection
        title="Glow Effects (AppIcon system)"
        description="Per-color glow shadows used on AppIcon containers."
        keys={[
          'glowIndigo',
          'glowBlue',
          'glowEmerald',
          'glowAmber',
          'glowRose',
          'glowViolet',
          'glowCyan',
          'glowOrange',
          'glowSlate',
        ]}
      />
    </Box>
  )
}

const meta: Meta = {
  title: 'Tokens/Shadows',
  component: ShadowsStory,
  tags: ['autodocs'],
}
export default meta

export const AllShadows: StoryObj = { render: () => <ShadowsStory /> }
