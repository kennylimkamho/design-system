import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import { Box, Typography, Avatar, IconButton } from '@mui/material'
import { MessageSquare, Radio, CreditCard, Zap, AtSign, Bell, Trash2 } from 'lucide-react'
import { AppIcon } from '@chatdaddy/icons'

// ─── Notification types ───────────────────────────────────────────────────────

type NotifType = 'message' | 'channel' | 'billing' | 'automation' | 'mention' | 'system'

import type { LucideIcon } from 'lucide-react'

const TYPE_CONFIG: Record<NotifType, { color: string; icon: LucideIcon; label: string }> = {
  message:    { color: 'indigo',  icon: MessageSquare, label: 'Message' },
  channel:    { color: 'emerald', icon: Radio,         label: 'Channel' },
  billing:    { color: 'amber',   icon: CreditCard,    label: 'Billing' },
  automation: { color: 'violet',  icon: Zap,           label: 'Automation' },
  mention:    { color: 'blue',    icon: AtSign,        label: 'Mention' },
  system:     { color: 'slate',   icon: Bell,          label: 'System' },
}

// ─── Notification item ────────────────────────────────────────────────────────

interface NotifProps {
  type: NotifType
  title: string
  body: string
  time: string
  unread?: boolean
  onDelete?: () => void
}

function NotificationItem({ type, title, body, time, unread = false, onDelete }: NotifProps) {
  const [hovered, setHovered] = useState(false)
  const cfg = TYPE_CONFIG[type]

  return (
    <Box
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: 1.5,
        px: 2,
        py: 1.5,
        position: 'relative',
        bgcolor: unread ? 'rgba(15,91,255,0.035)' : 'transparent',
        transition: 'background-color 150ms ease',
        cursor: 'pointer',
        '&:hover': { bgcolor: 'action.hover' },
      }}
    >
      {/* Unread dot */}
      {unread && (
        <Box
          sx={{
            position: 'absolute',
            left: 6,
            top: '50%',
            transform: 'translateY(-50%)',
            width: 6,
            height: 6,
            borderRadius: '50%',
            bgcolor: 'primary.main',
          }}
        />
      )}

      {/* Icon */}
      <Box sx={{ flexShrink: 0, mt: '1px' }}>
        <AppIcon icon={cfg.icon} color={cfg.color} size="sm" />
      </Box>

      {/* Content */}
      <Box sx={{ flex: 1, minWidth: 0 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 1, mb: '3px' }}>
          <Typography sx={{ fontWeight: unread ? 700 : 600, fontSize: '0.8125rem', color: 'text.primary' }}>
            {title}
          </Typography>
          <Typography sx={{ fontSize: '0.6875rem', color: 'text.secondary', flexShrink: 0 }}>
            {time}
          </Typography>
        </Box>
        <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary', lineHeight: 1.5 }}>
          {body}
        </Typography>
      </Box>

      {/* Delete button — revealed on hover */}
      {hovered && onDelete && (
        <IconButton
          size="small"
          onClick={(e) => { e.stopPropagation(); onDelete() }}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            width: 28,
            height: 28,
            color: 'error.main',
            bgcolor: 'background.paper',
            border: '1px solid',
            borderColor: 'error.main',
            borderRadius: '7px',
            '&:hover': { bgcolor: 'error.main', color: '#fff' },
          }}
        >
          <Trash2 size={13} />
        </IconButton>
      )}
    </Box>
  )
}

// ─── Sample data ──────────────────────────────────────────────────────────────

const SAMPLES: NotifProps[] = [
  { type: 'message', title: 'New message from Akil', body: 'Hey! Is the order ready for pickup?', time: '2m ago', unread: true },
  { type: 'mention', title: 'You were mentioned', body: '@you please handle this refund request ASAP', time: '15m ago', unread: true },
  { type: 'channel', title: 'WhatsApp connected', body: 'Your WhatsApp Business account is now active.', time: '1h ago', unread: true },
  { type: 'automation', title: 'Automation triggered', body: 'Welcome flow sent to 42 new contacts today.', time: '2h ago' },
  { type: 'billing', title: 'Invoice paid', body: 'Your invoice for April 2026 has been processed — $149.', time: '5h ago' },
  { type: 'system', title: 'System maintenance', body: 'Scheduled downtime on Sunday 02:00–04:00 UTC.', time: 'Yesterday' },
]

function NotificationItemStory() {
  const [items, setItems] = useState(SAMPLES.map((s, i) => ({ ...s, id: i })))

  const remove = (id: number) => setItems((prev) => prev.filter((item) => item.id !== id))

  return (
    <Box>
      <Typography variant="subtitle2" sx={{ mb: 2, color: 'text.secondary', textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '0.7rem' }}>
        All Notification Types (hover to reveal delete)
      </Typography>
      <Box
        sx={{
          bgcolor: 'background.paper',
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: '16px',
          overflow: 'hidden',
          maxWidth: 420,
        }}
      >
        {/* Header */}
        <Box sx={{ px: 2, py: 1.5, borderBottom: '1px solid', borderColor: 'divider', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography sx={{ fontWeight: 700, fontSize: '0.9375rem' }}>Notifications</Typography>
          <Typography sx={{ fontSize: '0.75rem', color: 'primary.main', cursor: 'pointer', fontWeight: 600 }}>
            Mark all read
          </Typography>
        </Box>

        {items.length === 0 ? (
          <Box sx={{ py: 6, textAlign: 'center' }}>
            <Bell size={28} style={{ opacity: 0.2 }} />
            <Typography sx={{ mt: 1, fontSize: '0.875rem', color: 'text.secondary' }}>
              No notifications
            </Typography>
          </Box>
        ) : (
          items.map((item, i) => (
            <Box key={item.id} sx={{ borderBottom: i < items.length - 1 ? '1px solid' : 'none', borderColor: 'divider' }}>
              <NotificationItem {...item} onDelete={() => remove(item.id)} />
            </Box>
          ))
        )}
      </Box>

      <Typography variant="subtitle2" sx={{ mt: 5, mb: 2, color: 'text.secondary', textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '0.7rem' }}>
        Individual Type Variants
      </Typography>
      <Box
        sx={{
          bgcolor: 'background.paper',
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: '12px',
          overflow: 'hidden',
          maxWidth: 420,
        }}
      >
        {(Object.keys(TYPE_CONFIG) as NotifType[]).map((type, i, arr) => (
          <Box key={type} sx={{ borderBottom: i < arr.length - 1 ? '1px solid' : 'none', borderColor: 'divider' }}>
            <NotificationItem
              type={type}
              title={`${TYPE_CONFIG[type].label} notification`}
              body={`This is a ${type} notification. It shows how the ${TYPE_CONFIG[type].label.toLowerCase()} type renders.`}
              time="just now"
              unread={i % 2 === 0}
            />
          </Box>
        ))}
      </Box>
    </Box>
  )
}

const meta: Meta = {
  title: 'Organisms/NotificationItem',
  component: NotificationItemStory,
  tags: ['autodocs'],
}
export default meta

export const AllNotifications: StoryObj = { render: () => <NotificationItemStory /> }
