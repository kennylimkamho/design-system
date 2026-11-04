import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import { Box, Typography, Avatar, IconButton, Divider, TextField, InputAdornment } from '@mui/material'
import {
  MessageSquare, Users, BarChart2, Settings, Bell, Zap,
  Search, Filter, Phone, Video, MoreHorizontal, Send,
  ChevronLeft, Paperclip, Smile, Info, X,
} from 'lucide-react'
import { keyframes } from '@chatdaddy/tokens'

// ─── Shared ───────────────────────────────────────────────────────────────────

const GRADIENTS = [
  'linear-gradient(135deg, #0F5BFF, #7C3AED)',
  'linear-gradient(135deg, #10B981, #059669)',
  'linear-gradient(135deg, #F59E0B, #D97706)',
  'linear-gradient(135deg, #8B5CF6, #6D28D9)',
  'linear-gradient(135deg, #06B6D4, #0284C7)',
]

function GAvatar({ name, size = 40, index = 0 }: { name: string; size?: number; index?: number }) {
  return (
    <Avatar
      sx={{
        width: size,
        height: size,
        background: GRADIENTS[index % GRADIENTS.length],
        fontWeight: 700,
        fontSize: size * 0.35,
        flexShrink: 0,
      }}
    >
      {name.split(' ').map((p) => p[0]).join('').slice(0, 2).toUpperCase()}
    </Avatar>
  )
}

// ─── Mini nav item ────────────────────────────────────────────────────────────

function MiniNav({ icon: Icon, active }: { icon: React.ComponentType<any>; active?: boolean }) {
  return (
    <Box
      sx={{
        width: 36,
        height: 36,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '10px',
        bgcolor: active ? '#EBF0FF' : 'transparent',
        color: active ? '#0F5BFF' : '#9CA3AF',
        cursor: 'pointer',
        mx: 'auto',
        mb: 0.5,
        '&:hover': { bgcolor: '#F3F4F6', color: '#374151' },
      }}
    >
      <Icon size={18} strokeWidth={active ? 2.2 : 1.8} />
    </Box>
  )
}

// ─── Left panel: filter + chat list ──────────────────────────────────────────

function ChatListPanel() {
  const [selected, setSelected] = useState(1)
  const chats = [
    { name: 'Akil Mutawakkil', preview: 'Is the order ready?', time: '2m', unread: 3, i: 0 },
    { name: 'Jane Doe', preview: 'Thanks for the help!', time: '1h', unread: 0, i: 1 },
    { name: 'Carlos Reyes', preview: 'I need a refund please', time: '2h', unread: 7, i: 2 },
    { name: 'Priya Nair', preview: '😊 Got it!', time: 'Yesterday', unread: 0, i: 3 },
    { name: 'Omar Al-Farsi', preview: 'Any update?', time: 'Yesterday', unread: 0, i: 4 },
  ]

  return (
    <Box sx={{ width: 260, flexShrink: 0, borderRight: '1px solid', borderColor: 'divider', display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Panel header */}
      <Box sx={{ px: 1.5, py: 1.25, borderBottom: '1px solid', borderColor: 'divider' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
          <Typography sx={{ fontWeight: 700, fontSize: '0.9375rem' }}>Inbox</Typography>
          <Box sx={{ display: 'flex', gap: 0.5 }}>
            <IconButton size="small" sx={{ color: 'text.secondary' }}><Filter size={15} /></IconButton>
          </Box>
        </Box>
        <TextField
          placeholder="Search…"
          size="small"
          fullWidth
          InputProps={{
            startAdornment: <InputAdornment position="start"><Search size={13} style={{ opacity: 0.4 }} /></InputAdornment>,
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              bgcolor: '#F3F4F6',
              borderRadius: '8px',
              '& fieldset': { border: 'none' },
            },
            '& input': { py: '6px', fontSize: '0.8125rem' },
          }}
        />
      </Box>
      {/* Filter chips */}
      <Box sx={{ px: 1.5, py: 1, borderBottom: '1px solid', borderColor: 'divider', display: 'flex', gap: 0.75, overflowX: 'auto' }}>
        {['All', 'Unread', 'Mine', 'Bots'].map((l, i) => (
          <Box
            key={l}
            sx={{
              px: '8px',
              height: 24,
              borderRadius: '6px',
              fontSize: '0.75rem',
              fontWeight: i === 0 ? 600 : 500,
              bgcolor: i === 0 ? 'primary.main' : '#F3F4F6',
              color: i === 0 ? '#fff' : 'text.secondary',
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              flexShrink: 0,
            }}
          >
            {l}
          </Box>
        ))}
      </Box>
      {/* Chat list */}
      <Box sx={{ flex: 1, overflowY: 'auto' }}>
        {chats.map((chat, idx) => (
          <Box
            key={chat.name}
            onClick={() => setSelected(idx)}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.25,
              px: 1.5,
              py: 1.25,
              cursor: 'pointer',
              bgcolor: selected === idx ? 'rgba(15,91,255,0.06)' : 'transparent',
              borderBottom: '1px solid',
              borderColor: 'divider',
              position: 'relative',
              '&:hover': { bgcolor: selected === idx ? 'rgba(15,91,255,0.06)' : '#F9FAFB' },
              '&::before': selected === idx ? {
                content: '""', position: 'absolute', left: 0, top: '20%', bottom: '20%',
                width: 3, borderRadius: '0 3px 3px 0', bgcolor: 'primary.main',
              } : {},
            }}
          >
            <GAvatar name={chat.name} size={38} index={chat.i} />
            <Box sx={{ flex: 1, minWidth: 0 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography sx={{ fontSize: '0.8125rem', fontWeight: chat.unread > 0 ? 700 : 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flex: 1 }}>
                  {chat.name}
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '3px', flexShrink: 0, ml: 0.5 }}>
                  <Typography sx={{ fontSize: '0.625rem', color: chat.unread > 0 ? 'primary.main' : 'text.secondary' }}>{chat.time}</Typography>
                  {chat.unread > 0 && (
                    <Box sx={{ minWidth: 18, height: 16, px: '4px', borderRadius: '9999px', background: 'linear-gradient(135deg,#0F5BFF,#7C3AED)', color: '#fff', fontSize: '0.5625rem', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {chat.unread}
                    </Box>
                  )}
                </Box>
              </Box>
              <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {chat.preview}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

// ─── Center: conversation ─────────────────────────────────────────────────────

function ConversationPanel() {
  return (
    <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', height: '100%', minWidth: 0 }}>
      {/* Header */}
      <Box sx={{ px: 2, py: 1.25, borderBottom: '1px solid', borderColor: 'divider', display: 'flex', alignItems: 'center', gap: 1.5 }}>
        <GAvatar name="Jane Doe" size={36} index={1} />
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Typography sx={{ fontWeight: 700, fontSize: '0.9375rem' }}>Jane Doe</Typography>
          <Typography sx={{ fontSize: '0.75rem', color: '#10B981' }}>Online</Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 0.5 }}>
          <IconButton size="small"><Phone size={16} /></IconButton>
          <IconButton size="small"><Video size={16} /></IconButton>
          <IconButton size="small"><MoreHorizontal size={16} /></IconButton>
        </Box>
      </Box>

      {/* Messages */}
      <Box sx={{ flex: 1, overflowY: 'auto', p: 2, display: 'flex', flexDirection: 'column', gap: 1, bgcolor: '#F0F2F5' }}>
        {/* Received */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
          <Box sx={{ maxWidth: '65%', bgcolor: '#fff', borderRadius: '14px 14px 14px 4px', px: 1.5, py: 1, boxShadow: '0 1px 4px rgba(0,0,0,0.08)', border: '1px solid rgba(0,0,0,0.06)' }}>
            <Typography sx={{ fontSize: '0.875rem' }}>Hey! I need help with my account.</Typography>
            <Typography sx={{ fontSize: '0.625rem', color: 'text.secondary', textAlign: 'right', mt: '2px' }}>9:41 AM</Typography>
          </Box>
        </Box>
        {/* Sent */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Box sx={{ maxWidth: '65%', bgcolor: '#0F5BFF', borderRadius: '14px 14px 4px 14px', px: 1.5, py: 1 }}>
            <Typography sx={{ fontSize: '0.875rem', color: '#fff' }}>Of course! Happy to help. What seems to be the issue?</Typography>
            <Typography sx={{ fontSize: '0.625rem', color: 'rgba(255,255,255,0.65)', textAlign: 'right', mt: '2px' }}>9:42 AM ✓✓</Typography>
          </Box>
        </Box>
        {/* Received */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
          <Box sx={{ maxWidth: '65%', bgcolor: '#fff', borderRadius: '14px 14px 14px 4px', px: 1.5, py: 1, boxShadow: '0 1px 4px rgba(0,0,0,0.08)', border: '1px solid rgba(0,0,0,0.06)' }}>
            <Typography sx={{ fontSize: '0.875rem' }}>I can't login, it says my password is wrong 😔</Typography>
            <Typography sx={{ fontSize: '0.625rem', color: 'text.secondary', textAlign: 'right', mt: '2px' }}>9:43 AM</Typography>
          </Box>
        </Box>
        {/* Typing */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
          <Box sx={{ bgcolor: '#fff', borderRadius: '14px 14px 14px 4px', px: 1.5, py: 1, boxShadow: '0 1px 4px rgba(0,0,0,0.08)', border: '1px solid rgba(0,0,0,0.06)', display: 'flex', gap: '5px', alignItems: 'center' }}>
            {[0, 1, 2].map((i) => (
              <Box key={i} sx={{ width: 7, height: 7, borderRadius: '50%', bgcolor: '#9CA3AF', '@keyframes typingDot': keyframes.typingDot, animation: `typingDot 1.4s ease-in-out infinite`, animationDelay: `${i * 0.2}s` }} />
            ))}
          </Box>
        </Box>
      </Box>

      {/* Compose */}
      <Box sx={{ px: 1.5, py: 1, borderTop: '1px solid', borderColor: 'divider', display: 'flex', alignItems: 'flex-end', gap: 1 }}>
        <IconButton size="small" sx={{ color: 'text.secondary' }}><Paperclip size={18} /></IconButton>
        <TextField
          placeholder="Type a message…"
          multiline
          maxRows={4}
          fullWidth
          size="small"
          sx={{
            '& .MuiOutlinedInput-root': {
              bgcolor: '#F3F4F6',
              borderRadius: '12px',
              '& fieldset': { border: 'none' },
              '&.Mui-focused fieldset': { border: '1.5px solid', borderColor: 'primary.main' },
            },
            '& textarea': { fontSize: '0.875rem' },
          }}
        />
        <IconButton size="small" sx={{ color: 'text.secondary' }}><Smile size={18} /></IconButton>
        <IconButton sx={{ bgcolor: 'primary.main', color: '#fff', borderRadius: '10px', '&:hover': { bgcolor: 'primary.dark' } }}>
          <Send size={16} />
        </IconButton>
      </Box>
    </Box>
  )
}

// ─── Right: contact detail ────────────────────────────────────────────────────

function ContactPanel({ visible }: { visible: boolean }) {
  if (!visible) return null
  return (
    <Box sx={{ width: 280, flexShrink: 0, borderLeft: '1px solid', borderColor: 'divider', overflowY: 'auto', height: '100%' }}>
      <Box sx={{ p: 2, textAlign: 'center', borderBottom: '1px solid', borderColor: 'divider' }}>
        <GAvatar name="Jane Doe" size={64} index={1} />
        <Typography sx={{ fontWeight: 700, fontSize: '1rem', mt: 1.5 }}>Jane Doe</Typography>
        <Typography sx={{ fontSize: '0.8125rem', color: 'text.secondary' }}>+1 (555) 234-5678</Typography>
        <Typography sx={{ fontSize: '0.75rem', color: '#10B981', mt: 0.5 }}>Online</Typography>
      </Box>
      <Box sx={{ p: 2 }}>
        {[
          { label: 'Email', value: 'jane@example.com' },
          { label: 'Location', value: 'New York, USA' },
          { label: 'Language', value: 'English' },
          { label: 'Customer since', value: 'Jan 2024' },
        ].map((field) => (
          <Box key={field.label} sx={{ mb: 1.5 }}>
            <Typography sx={{ fontSize: '0.6875rem', color: 'text.secondary', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em', mb: '3px' }}>
              {field.label}
            </Typography>
            <Typography sx={{ fontSize: '0.875rem' }}>{field.value}</Typography>
          </Box>
        ))}
        <Divider sx={{ my: 2 }} />
        <Typography sx={{ fontSize: '0.75rem', fontWeight: 700, mb: 1.5, color: 'text.secondary', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
          Tags
        </Typography>
        <Box sx={{ display: 'flex', gap: 0.75, flexWrap: 'wrap' }}>
          {['VIP', 'Support', 'Follow Up'].map((t, i) => {
            const bgs = [{ bg: '#EBF0FF', text: '#0040C1' }, { bg: '#ECFDF5', text: '#065F46' }, { bg: '#FFF7ED', text: '#9A3412' }]
            const b = bgs[i % bgs.length]
            return (
              <Box key={t} sx={{ px: '7px', height: 20, borderRadius: '4px', bgcolor: b.bg, color: b.text, fontSize: '0.6875rem', fontWeight: 600, display: 'flex', alignItems: 'center' }}>
                {t}
              </Box>
            )
          })}
        </Box>
      </Box>
    </Box>
  )
}

// ─── Layout ───────────────────────────────────────────────────────────────────

function ChatLayout({ showDetail = true }: { showDetail?: boolean }) {
  const [detailOpen, setDetailOpen] = useState(showDetail)

  return (
    <Box
      sx={{
        display: 'flex',
        height: 600,
        bgcolor: 'background.paper',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
      }}
    >
      {/* Narrow sidebar */}
      <Box sx={{ width: 52, flexShrink: 0, borderRight: '1px solid', borderColor: 'divider', py: 1.5, display: 'flex', flexDirection: 'column', alignItems: 'center', bgcolor: '#FAFAFA' }}>
        <Box sx={{ width: 32, height: 32, borderRadius: '8px', background: 'linear-gradient(135deg, #0F5BFF, #7C3AED)', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
          <MessageSquare size={16} color="#fff" />
        </Box>
        <MiniNav icon={MessageSquare} active />
        <MiniNav icon={Users} />
        <MiniNav icon={BarChart2} />
        <MiniNav icon={Zap} />
        <Box sx={{ flex: 1 }} />
        <MiniNav icon={Bell} />
        <MiniNav icon={Settings} />
      </Box>

      {/* Chat list */}
      <ChatListPanel />

      {/* Conversation */}
      <ConversationPanel />

      {/* Contact detail toggle */}
      <Box sx={{ position: 'relative', display: 'flex' }}>
        <IconButton
          size="small"
          onClick={() => setDetailOpen((o) => !o)}
          sx={{
            position: 'absolute',
            left: detailOpen ? -16 : -20,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            bgcolor: 'background.paper',
            border: '1px solid',
            borderColor: 'divider',
            width: 28,
            height: 28,
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            '&:hover': { bgcolor: 'action.hover' },
          }}
        >
          {detailOpen ? <ChevronLeft size={14} /> : <Info size={14} />}
        </IconButton>
        <ContactPanel visible={detailOpen} />
      </Box>
    </Box>
  )
}

function ChatLayoutStory() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <Box>
        <Typography variant="subtitle2" sx={{ mb: 2, color: 'text.secondary', textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '0.7rem' }}>
          Full Layout — With Detail Panel
        </Typography>
        <ChatLayout showDetail />
      </Box>
      <Box>
        <Typography variant="subtitle2" sx={{ mb: 2, color: 'text.secondary', textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '0.7rem' }}>
          Compact — No Detail Panel
        </Typography>
        <ChatLayout showDetail={false} />
      </Box>
    </Box>
  )
}

const meta: Meta = {
  title: 'Templates/ChatLayout',
  component: ChatLayoutStory,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
}
export default meta

export const FullDetail: StoryObj = { render: () => <ChatLayout showDetail /> }
export const CollapsedDetail: StoryObj = { render: () => <ChatLayout showDetail={false} /> }
export const BothVariants: StoryObj = { render: () => <ChatLayoutStory /> }
