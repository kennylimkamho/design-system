import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Box, Avatar, Typography, Badge } from '@mui/material'
import { avatar as avatarTokens } from '@chatdaddy/tokens'
import { PlatformIcon } from '@chatdaddy/icons'

// ─── Gradient avatar — hash-based gradient selection ─────────────────────────

function getGradient(name: string): string {
  let hash = 0
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash)
  return avatarTokens.gradients[Math.abs(hash) % avatarTokens.gradients.length]
}

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/)
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}

interface GradientAvatarProps {
  name: string
  size?: number
}

function GradientAvatar({ name, size = 40 }: GradientAvatarProps) {
  return (
    <Avatar
      sx={{
        width: size,
        height: size,
        background: getGradient(name),
        fontSize: size * 0.35,
        fontWeight: 700,
        color: '#fff',
        flexShrink: 0,
      }}
    >
      {getInitials(name)}
    </Avatar>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Box sx={{ mb: 5 }}>
      <Typography variant="subtitle2" sx={{ mb: 2.5, color: 'text.secondary', textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '0.7rem' }}>
        {title}
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, alignItems: 'flex-end' }}>
        {children}
      </Box>
    </Box>
  )
}

const SAMPLE_NAMES = ['Akil Mutawakkil', 'Jane Doe', 'Bob Smith', 'Priya Nair', 'Carlos Reyes', 'Mei Lin', 'Omar Al-Farsi', 'Sarah Connor']

function AvatarStory() {
  return (
    <Box>
      <Section title="Gradient Avatars — 8-gradient hash system">
        {SAMPLE_NAMES.map((name) => (
          <Box key={name} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.75 }}>
            <GradientAvatar name={name} size={48} />
            <Typography sx={{ fontSize: '0.65rem', color: 'text.secondary', textAlign: 'center', maxWidth: 60 }}>
              {name.split(' ')[0]}
            </Typography>
          </Box>
        ))}
      </Section>

      <Section title="Sizes">
        {[24, 32, 40, 48, 56, 64].map((size) => (
          <Box key={size} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.75 }}>
            <GradientAvatar name="Akil Mutawakkil" size={size} />
            <Typography sx={{ fontSize: '0.65rem', color: 'text.secondary' }}>{size}px</Typography>
          </Box>
        ))}
      </Section>

      <Section title="With Image">
        <Avatar
          src="https://i.pravatar.cc/80?img=1"
          sx={{ width: 48, height: 48, boxShadow: '0 2px 8px rgba(15,91,255,0.25)' }}
        />
        <Avatar
          src="https://i.pravatar.cc/80?img=5"
          sx={{ width: 48, height: 48 }}
        />
        <Avatar
          src="https://i.pravatar.cc/80?img=9"
          sx={{ width: 48, height: 48 }}
        />
      </Section>

      <Section title="With Platform Icon Overlay">
        {(['wa', 'instagram', 'messenger', 'telegram'] as const).map((platform) => (
          <Box key={platform} sx={{ position: 'relative', display: 'inline-flex' }}>
            <GradientAvatar name={platform + ' user'} size={44} />
            <Box sx={{ position: 'absolute', bottom: -3, right: -3 }}>
              <PlatformIcon platform={platform} size={18} />
            </Box>
          </Box>
        ))}
      </Section>

      <Section title="Group / Stacked Avatars">
        <Box sx={{ display: 'flex' }}>
          {SAMPLE_NAMES.slice(0, 5).map((name, i) => (
            <Box
              key={name}
              sx={{
                ml: i === 0 ? 0 : '-10px',
                zIndex: SAMPLE_NAMES.length - i,
                border: '2px solid',
                borderColor: 'background.paper',
                borderRadius: '50%',
              }}
            >
              <GradientAvatar name={name} size={36} />
            </Box>
          ))}
          <Box
            sx={{
              ml: '-10px',
              zIndex: 0,
              width: 36,
              height: 36,
              borderRadius: '50%',
              bgcolor: '#F3F4F6',
              border: '2px solid',
              borderColor: 'background.paper',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.65rem',
              fontWeight: 700,
              color: 'text.secondary',
            }}
          >
            +8
          </Box>
        </Box>
      </Section>

      <Section title="With Online Indicator">
        {SAMPLE_NAMES.slice(0, 4).map((name) => (
          <Badge
            key={name}
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            badgeContent={
              <Box
                sx={{
                  width: 11,
                  height: 11,
                  borderRadius: '50%',
                  bgcolor: '#10B981',
                  border: '2px solid',
                  borderColor: 'background.paper',
                }}
              />
            }
          >
            <GradientAvatar name={name} size={40} />
          </Badge>
        ))}
      </Section>
    </Box>
  )
}

const meta: Meta = {
  title: 'Atoms/Avatar',
  component: AvatarStory,
  tags: ['autodocs'],
}
export default meta

export const AllAvatars: StoryObj = { render: () => <AvatarStory /> }
