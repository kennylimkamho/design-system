import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import { Box, Avatar, Typography } from '@mui/material'
import { tag as tagTokens } from '@chatdaddy/tokens'
import { PlatformIcon } from '@chatdaddy/icons'
import { keyframes } from '@chatdaddy/tokens'

// ─── Gradient avatar util ─────────────────────────────────────────────────────

const GRADIENTS = [
  'linear-gradient(135deg, #0F5BFF, #7C3AED)',
  'linear-gradient(135deg, #10B981, #059669)',
  'linear-gradient(135deg, #F59E0B, #D97706)',
  'linear-gradient(135deg, #EC4899, #BE185D)',
  'linear-gradient(135deg, #8B5CF6, #6D28D9)',
  'linear-gradient(135deg, #06B6D4, #0284C7)',
]

function initials(name: string) {
  return name.split(' ').map((p) => p[0]).join('').slice(0, 2).toUpperCase()
}

// ─── Unread badge ─────────────────────────────────────────────────────────────

function UnreadBadge({ count }: { count: number }) {
  const label = count > 99 ? '99+' : count
  return (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: count > 9 ? 22 : 18,
        height: 18,
        px: count > 9 ? '5px' : 0,
        borderRadius: '9999px',
        background: 'linear-gradient(135deg, #0F5BFF 0%, #7C3AED 100%)',
        color: '#fff',
        fontSize: '0.625rem',
        fontWeight: 700,
        boxShadow: '0 2px 6px rgba(15,91,255,0.35)',
        border: '1.5px solid',
        borderColor: 'background.paper',
      }}
    >
      {label}
    </Box>
  )
}

// ─── Typing dots ──────────────────────────────────────────────────────────────

function TypingDots() {
  return (
    <Box sx={{ display: 'flex', gap: '3px', alignItems: 'center' }}>
      {[0, 1, 2].map((i) => (
        <Box
          key={i}
          sx={{
            width: 5,
            height: 5,
            borderRadius: '50%',
            bgcolor: 'text.secondary',
            '@keyframes typingDot': keyframes.typingDot,
            animation: `typingDot 1.4s ease-in-out infinite`,
            animationDelay: `${i * 0.18}s`,
          }}
        />
      ))}
    </Box>
  )
}

// ─── Tag chip (compact) ───────────────────────────────────────────────────────

function CompactTag({ label, index }: { label: string; index: number }) {
  const bg = tagTokens.backgrounds[index % tagTokens.backgrounds.length]
  return (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        px: '5px',
        height: 17,
        borderRadius: '3px',
        bgcolor: bg.bg,
        color: bg.text,
        fontSize: '0.5625rem',
        fontWeight: 700,
        lineHeight: 1,
        flexShrink: 0,
      }}
    >
      {label}
    </Box>
  )
}

// ─── Chat list item ───────────────────────────────────────────────────────────

interface ChatRowProps {
  name: string
  preview: string
  time: string
  unread?: number
  typing?: boolean
  selected?: boolean
  tags?: string[]
  platform?: string
  gradientIndex?: number
}

function ChatRow({
  name,
  preview,
  time,
  unread = 0,
  typing = false,
  selected = false,
  tags = [],
  platform,
  gradientIndex = 0,
}: ChatRowProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <Box
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1.5,
        px: 1.5,
        py: 1.25,
        position: 'relative',
        cursor: 'pointer',
        bgcolor: selected
          ? 'rgba(15,91,255,0.06)'
          : hovered
          ? 'action.hover'
          : 'transparent',
        transition: 'background-color 150ms ease',
        '&::before': selected
          ? {
              content: '""',
              position: 'absolute',
              left: 0,
              top: '20%',
              bottom: '20%',
              width: 3,
              borderRadius: '0 3px 3px 0',
              bgcolor: 'primary.main',
            }
          : {},
      }}
    >
      {/* Avatar with platform overlay */}
      <Box sx={{ position: 'relative', flexShrink: 0 }}>
        <Avatar
          sx={{
            width: 44,
            height: 44,
            background: GRADIENTS[gradientIndex % GRADIENTS.length],
            fontWeight: 700,
            fontSize: '0.9375rem',
          }}
        >
          {initials(name)}
        </Avatar>
        {platform && (
          <Box sx={{ position: 'absolute', bottom: -2, right: -2 }}>
            <PlatformIcon platform={platform as any} size={16} />
          </Box>
        )}
      </Box>

      {/* Content */}
      <Box sx={{ flex: 1, minWidth: 0 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: '2px' }}>
          <Typography
            sx={{
              fontSize: '0.875rem',
              fontWeight: unread > 0 ? 700 : 500,
              color: 'text.primary',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              flex: 1,
              mr: 1,
            }}
          >
            {name}
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '3px', flexShrink: 0 }}>
            <Typography
              sx={{
                fontSize: '0.6875rem',
                color: unread > 0 ? 'primary.main' : 'text.secondary',
                fontWeight: unread > 0 ? 600 : 400,
              }}
            >
              {time}
            </Typography>
            {unread > 0 && <UnreadBadge count={unread} />}
          </Box>
        </Box>

        {/* Preview or typing */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
          {typing ? (
            <TypingDots />
          ) : (
            <Typography
              sx={{
                fontSize: '0.8125rem',
                color: unread > 0 ? 'text.primary' : 'text.secondary',
                fontWeight: unread > 0 ? 500 : 400,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                flex: 1,
              }}
            >
              {preview}
            </Typography>
          )}
        </Box>

        {/* Tags */}
        {tags.length > 0 && (
          <Box sx={{ display: 'flex', gap: 0.5, mt: '4px', flexWrap: 'nowrap', overflow: 'hidden' }}>
            {tags.slice(0, 3).map((tag, i) => (
              <CompactTag key={tag} label={tag} index={i} />
            ))}
          </Box>
        )}
      </Box>
    </Box>
  )
}

// ─── Sample data ──────────────────────────────────────────────────────────────

const CHATS: ChatRowProps[] = [
  { name: 'Akil Mutawakkil', preview: 'Is the order ready?', time: '2m', unread: 3, platform: 'wa', gradientIndex: 0, tags: ['VIP', 'Order'] },
  { name: 'Jane Doe', preview: 'Thanks so much for your help!', time: '15m', unread: 0, platform: 'instagram', gradientIndex: 1 },
  { name: 'Carlos Reyes', preview: '', time: '1h', unread: 0, typing: true, platform: 'messenger', gradientIndex: 2, tags: ['Support', 'Refund'] },
  { name: 'Priya Nair', preview: '😊 Got it, will follow up!', time: '2h', unread: 12, platform: 'wa', gradientIndex: 3, tags: ['Hot Lead'] },
  { name: 'Omar Al-Farsi', preview: 'Can I get a status update?', time: 'Yesterday', unread: 0, platform: 'telegram', gradientIndex: 4 },
  { name: 'Sarah Connor', preview: 'Payment confirmed ✅', time: 'Yesterday', unread: 1, platform: 'mail', gradientIndex: 5 },
]

function ChatListStory() {
  const [selectedIdx, setSelectedIdx] = useState(2)

  return (
    <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
      {/* Full list */}
      <Box>
        <Typography variant="subtitle2" sx={{ mb: 1.5, color: 'text.secondary', textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '0.7rem' }}>
          Chat List (click to select)
        </Typography>
        <Box
          sx={{
            width: 320,
            bgcolor: 'background.paper',
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: '12px',
            overflow: 'hidden',
          }}
        >
          {CHATS.map((chat, i) => (
            <Box
              key={chat.name}
              sx={{ borderBottom: i < CHATS.length - 1 ? '1px solid' : 'none', borderColor: 'divider' }}
              onClick={() => setSelectedIdx(i)}
            >
              <ChatRow {...chat} selected={selectedIdx === i} />
            </Box>
          ))}
        </Box>
      </Box>

      {/* State variants */}
      <Box>
        <Typography variant="subtitle2" sx={{ mb: 1.5, color: 'text.secondary', textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '0.7rem' }}>
          State Variants
        </Typography>
        <Box
          sx={{
            width: 320,
            bgcolor: 'background.paper',
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: '12px',
            overflow: 'hidden',
          }}
        >
          <Box sx={{ borderBottom: '1px solid', borderColor: 'divider' }}>
            <ChatRow name="Unread — 3 messages" preview="Hey, is the order ready for pickup?" time="2m" unread={3} gradientIndex={0} />
          </Box>
          <Box sx={{ borderBottom: '1px solid', borderColor: 'divider' }}>
            <ChatRow name="Read — no badge" preview="Thanks for your quick response!" time="1h" unread={0} gradientIndex={1} />
          </Box>
          <Box sx={{ borderBottom: '1px solid', borderColor: 'divider' }}>
            <ChatRow name="Typing indicator" preview="" time="now" typing gradientIndex={2} />
          </Box>
          <Box sx={{ borderBottom: '1px solid', borderColor: 'divider' }}>
            <ChatRow name="Selected state" preview="This row is selected" time="5m" selected gradientIndex={3} />
          </Box>
          <Box sx={{ borderBottom: '1px solid', borderColor: 'divider' }}>
            <ChatRow name="With tags" preview="Multiple tags shown below" time="30m" tags={['VIP', 'Support', 'Order']} gradientIndex={4} />
          </Box>
          <Box>
            <ChatRow name="With platform icon" preview="Message from WhatsApp" time="1h" platform="wa" gradientIndex={5} unread={1} />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

const meta: Meta = {
  title: 'Organisms/ChatListItem',
  component: ChatListStory,
  tags: ['autodocs'],
}
export default meta

export const ChatList: StoryObj = { render: () => <ChatListStory /> }
