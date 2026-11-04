import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Box, Badge, IconButton, Typography, Avatar } from '@mui/material'
import { Bell, MessageSquare, ShoppingCart } from 'lucide-react'

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Box sx={{ mb: 5 }}>
      <Typography variant="subtitle2" sx={{ mb: 2.5, color: 'text.secondary', textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '0.7rem' }}>
        {title}
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, alignItems: 'center' }}>
        {children}
      </Box>
    </Box>
  )
}

// ─── Gradient unread badge (matches v2 style) ─────────────────────────────────

function GradientBadge({ count }: { count: number }) {
  const label = count > 99 ? '99+' : count
  return (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 18,
        height: 18,
        px: count > 9 ? '5px' : 0,
        borderRadius: '9999px',
        background: 'linear-gradient(135deg, #0F5BFF 0%, #7C3AED 100%)',
        color: '#fff',
        fontSize: '0.625rem',
        fontWeight: 700,
        lineHeight: 1,
        boxShadow: '0 2px 6px rgba(15,91,255,0.35)',
        border: '1.5px solid #fff',
      }}
    >
      {label}
    </Box>
  )
}

function BadgesStory() {
  return (
    <Box>
      <Section title="Numeric Badges">
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.5 }}>
          <Badge badgeContent={4} color="error">
            <IconButton><Bell size={20} /></IconButton>
          </Badge>
          <Typography sx={{ fontSize: '0.7rem', color: 'text.secondary' }}>error</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.5 }}>
          <Badge badgeContent={12} color="primary">
            <IconButton><MessageSquare size={20} /></IconButton>
          </Badge>
          <Typography sx={{ fontSize: '0.7rem', color: 'text.secondary' }}>primary</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.5 }}>
          <Badge badgeContent={99} color="warning">
            <IconButton><ShoppingCart size={20} /></IconButton>
          </Badge>
          <Typography sx={{ fontSize: '0.7rem', color: 'text.secondary' }}>warning</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.5 }}>
          <Badge badgeContent={1000} color="error" max={99}>
            <IconButton><Bell size={20} /></IconButton>
          </Badge>
          <Typography sx={{ fontSize: '0.7rem', color: 'text.secondary' }}>99+ max</Typography>
        </Box>
      </Section>

      <Section title="Dot Badges (unread indicators)">
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.5 }}>
          <Badge variant="dot" color="error">
            <IconButton><Bell size={20} /></IconButton>
          </Badge>
          <Typography sx={{ fontSize: '0.7rem', color: 'text.secondary' }}>error dot</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.5 }}>
          <Badge variant="dot" color="success">
            <Avatar sx={{ width: 36, height: 36, bgcolor: '#0F5BFF', fontSize: '0.875rem' }}>AK</Avatar>
          </Badge>
          <Typography sx={{ fontSize: '0.7rem', color: 'text.secondary' }}>online dot</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.5 }}>
          <Badge variant="dot" color="primary">
            <MessageSquare size={20} />
          </Badge>
          <Typography sx={{ fontSize: '0.7rem', color: 'text.secondary' }}>primary dot</Typography>
        </Box>
      </Section>

      <Section title="Gradient Unread Badge (v2 ChatRow style)">
        {[1, 5, 23, 99, 150].map((n) => (
          <Box key={n} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.5 }}>
            <GradientBadge count={n} />
            <Typography sx={{ fontSize: '0.7rem', color: 'text.secondary' }}>{n}</Typography>
          </Box>
        ))}
      </Section>

      <Section title="On Avatar">
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          badgeContent={
            <Box
              sx={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                bgcolor: '#10B981',
                border: '2px solid #fff',
              }}
            />
          }
        >
          <Avatar sx={{ width: 40, height: 40, background: 'linear-gradient(135deg, #0F5BFF, #7C3AED)', fontWeight: 700 }}>
            AK
          </Avatar>
        </Badge>
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          badgeContent={<GradientBadge count={3} />}
        >
          <Avatar sx={{ width: 40, height: 40, background: 'linear-gradient(135deg, #10B981, #059669)', fontWeight: 700 }}>
            JD
          </Avatar>
        </Badge>
      </Section>
    </Box>
  )
}

const meta: Meta = {
  title: 'Atoms/Badge',
  component: BadgesStory,
  tags: ['autodocs'],
}
export default meta

export const AllBadges: StoryObj = { render: () => <BadgesStory /> }
