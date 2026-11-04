import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Box, Typography, Avatar } from '@mui/material'

// ─── Gradient unread badge — matches v2 ChatRow exactly ──────────────────────

function UnreadBadge({ count }: { count: number }) {
  const label = count > 99 ? '99+' : count
  const wide = count > 9
  return (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: wide ? 22 : 18,
        height: 18,
        px: wide ? '5px' : 0,
        borderRadius: '9999px',
        background: 'linear-gradient(135deg, #0F5BFF 0%, #7C3AED 100%)',
        color: '#fff',
        fontSize: '0.625rem',
        fontWeight: 700,
        lineHeight: 1,
        boxShadow: '0 2px 6px rgba(15,91,255,0.35)',
        border: '1.5px solid #fff',
        userSelect: 'none',
      }}
    >
      {label}
    </Box>
  )
}

function UnreadBadgeStory() {
  return (
    <Box>
      <Typography variant="subtitle2" sx={{ mb: 2.5, color: 'text.secondary', textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '0.7rem' }}>
        Count Variants
      </Typography>
      <Box sx={{ display: 'flex', gap: 3, alignItems: 'center', mb: 6 }}>
        {[1, 5, 9, 10, 23, 99, 150].map((n) => (
          <Box key={n} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <UnreadBadge count={n} />
            <Typography sx={{ fontSize: '0.65rem', color: 'text.secondary' }}>{n}</Typography>
          </Box>
        ))}
      </Box>

      <Typography variant="subtitle2" sx={{ mb: 2.5, color: 'text.secondary', textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '0.7rem' }}>
        Absolute positioned (top-right of avatar)
      </Typography>
      <Box sx={{ display: 'flex', gap: 3, mb: 6 }}>
        {[1, 5, 23, 99].map((n) => (
          <Box key={n} sx={{ position: 'relative', display: 'inline-flex' }}>
            <Avatar
              sx={{
                width: 44,
                height: 44,
                background: 'linear-gradient(135deg, #0F5BFF, #7C3AED)',
                fontWeight: 700,
                fontSize: '1rem',
              }}
            >
              AK
            </Avatar>
            <Box sx={{ position: 'absolute', top: -4, right: -6 }}>
              <UnreadBadge count={n} />
            </Box>
          </Box>
        ))}
      </Box>

      <Typography variant="subtitle2" sx={{ mb: 2.5, color: 'text.secondary', textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '0.7rem' }}>
        Inline in chat list row
      </Typography>
      <Box
        sx={{
          bgcolor: 'background.paper',
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: '12px',
          overflow: 'hidden',
          maxWidth: 340,
        }}
      >
        {[
          { name: 'Akil Mutawakkil', preview: 'Hey, is the order ready?', count: 3, time: '2m' },
          { name: 'Jane Doe', preview: 'Thanks for your help!', count: 0, time: '1h' },
          { name: 'Carlos Reyes', preview: 'I need a refund for order...', count: 12, time: '3h' },
          { name: 'Priya Nair', preview: '😊 Got it, will do!', count: 1, time: 'Yesterday' },
        ].map((chat, i, arr) => (
          <Box
            key={chat.name}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              px: 1.5,
              py: 1.25,
              borderBottom: i < arr.length - 1 ? '1px solid' : 'none',
              borderColor: 'divider',
              bgcolor: chat.count > 0 ? 'transparent' : 'transparent',
              '&:hover': { bgcolor: 'action.hover' },
            }}
          >
            <Avatar
              sx={{
                width: 40,
                height: 40,
                background: `linear-gradient(135deg, ${['#0F5BFF,#7C3AED', '#10B981,#059669', '#F59E0B,#D97706', '#8B5CF6,#6D28D9'][i]})`,
                fontWeight: 700,
                fontSize: '0.875rem',
                flexShrink: 0,
              }}
            >
              {chat.name.split(' ').map((p) => p[0]).join('').slice(0, 2)}
            </Avatar>
            <Box sx={{ flex: 1, minWidth: 0 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography
                  sx={{
                    fontSize: '0.875rem',
                    fontWeight: chat.count > 0 ? 700 : 500,
                    color: 'text.primary',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {chat.name}
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 0.4, flexShrink: 0, ml: 1 }}>
                  <Typography sx={{ fontSize: '0.6875rem', color: chat.count > 0 ? 'primary.main' : 'text.secondary' }}>
                    {chat.time}
                  </Typography>
                  {chat.count > 0 && <UnreadBadge count={chat.count} />}
                </Box>
              </Box>
              <Typography
                sx={{
                  fontSize: '0.8125rem',
                  color: chat.count > 0 ? 'text.primary' : 'text.secondary',
                  fontWeight: chat.count > 0 ? 500 : 400,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                {chat.preview}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

const meta: Meta = {
  title: 'Molecules/UnreadBadge',
  component: UnreadBadgeStory,
  tags: ['autodocs'],
}
export default meta

export const AllUnreadBadges: StoryObj = { render: () => <UnreadBadgeStory /> }
