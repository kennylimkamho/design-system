import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import { Box, Typography, IconButton, Tabs, Tab } from '@mui/material'
import { Bell, X, Check, MessageSquare, Radio, CreditCard, Zap, AtSign } from 'lucide-react'
import { AppIcon } from '@chatdaddy/icons'

// ─── Types ────────────────────────────────────────────────────────────────────

type NotifType = 'message' | 'channel' | 'billing' | 'automation' | 'mention'

import type { LucideIcon } from 'lucide-react'

const TYPE_CONFIG: Record<NotifType, { color: string; icon: LucideIcon }> = {
  message:    { color: 'indigo',  icon: MessageSquare },
  channel:    { color: 'emerald', icon: Radio },
  billing:    { color: 'amber',   icon: CreditCard },
  automation: { color: 'violet',  icon: Zap },
  mention:    { color: 'blue',    icon: AtSign },
}

interface Notif {
  id: number
  type: NotifType
  title: string
  body: string
  time: string
  unread: boolean
  day: 'Today' | 'Yesterday'
}

// ─── Single item ─────────────────────────────────────────────────────────────

function NotifItem({ notif, onDelete, onRead }: { notif: Notif; onDelete: () => void; onRead: () => void }) {
  const [hovered, setHovered] = useState(false)
  const cfg = TYPE_CONFIG[notif.type]

  return (
    <Box
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onRead}
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: 1.5,
        px: 2,
        py: 1.5,
        position: 'relative',
        bgcolor: notif.unread ? 'rgba(15,91,255,0.035)' : 'transparent',
        cursor: 'pointer',
        '&:hover': { bgcolor: 'action.hover' },
      }}
    >
      {notif.unread && (
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
      <Box sx={{ flexShrink: 0, mt: '1px' }}>
        <AppIcon icon={cfg.icon} color={cfg.color} size="sm" />
      </Box>
      <Box sx={{ flex: 1, minWidth: 0 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 1, mb: '3px' }}>
          <Typography sx={{ fontWeight: notif.unread ? 700 : 600, fontSize: '0.8125rem' }}>
            {notif.title}
          </Typography>
          <Typography sx={{ fontSize: '0.6875rem', color: 'text.secondary', flexShrink: 0 }}>
            {notif.time}
          </Typography>
        </Box>
        <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary', lineHeight: 1.5 }}>
          {notif.body}
        </Typography>
      </Box>
      {hovered && (
        <IconButton
          size="small"
          onClick={(e) => { e.stopPropagation(); onDelete() }}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            width: 26,
            height: 26,
            color: 'error.main',
            bgcolor: 'background.paper',
            border: '1px solid',
            borderColor: 'error.main',
            borderRadius: '7px',
            '&:hover': { bgcolor: 'error.main', color: '#fff' },
          }}
        >
          <X size={12} />
        </IconButton>
      )}
    </Box>
  )
}

// ─── Group separator ──────────────────────────────────────────────────────────

function GroupLabel({ label }: { label: string }) {
  return (
    <Box sx={{ px: 2, py: 1, bgcolor: '#F9FAFB', borderBottom: '1px solid', borderColor: 'divider' }}>
      <Typography sx={{ fontSize: '0.6875rem', fontWeight: 700, color: 'text.secondary', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
        {label}
      </Typography>
    </Box>
  )
}

// ─── Notification center drawer ───────────────────────────────────────────────

const SAMPLE_NOTIFS: Notif[] = [
  { id: 1, type: 'message', title: 'New message from Akil', body: 'Hey! Is the order ready for pickup?', time: '2m ago', unread: true, day: 'Today' },
  { id: 2, type: 'mention', title: 'You were mentioned', body: '@you please handle this refund request', time: '15m ago', unread: true, day: 'Today' },
  { id: 3, type: 'channel', title: 'WhatsApp connected', body: 'Your WhatsApp Business account is now active and ready.', time: '1h ago', unread: true, day: 'Today' },
  { id: 4, type: 'automation', title: 'Automation triggered', body: 'Welcome flow ran successfully for 42 new contacts.', time: '3h ago', unread: false, day: 'Today' },
  { id: 5, type: 'billing', title: 'Invoice paid', body: 'Your April 2026 invoice ($149) has been processed.', time: '5h ago', unread: false, day: 'Today' },
  { id: 6, type: 'message', title: 'New message from Carlos', body: 'I need a refund for order #5521', time: 'Yesterday', unread: false, day: 'Yesterday' },
  { id: 7, type: 'automation', title: 'Broadcast completed', body: 'Your broadcast "April Promo" sent to 1,240 contacts.', time: 'Yesterday', unread: false, day: 'Yesterday' },
]

function NotificationCenter({ empty = false }: { empty?: boolean }) {
  const [items, setItems] = useState(empty ? [] : SAMPLE_NOTIFS)
  const [filter, setFilter] = useState(0)
  const [tab, setTab] = useState(0)

  const tabLabels = ['All', 'Messages', 'Billing', 'Channels', 'Automation']

  const unreadCount = items.filter((i) => i.unread).length

  const markAllRead = () => setItems((prev) => prev.map((i) => ({ ...i, unread: false })))
  const removeItem = (id: number) => setItems((prev) => prev.filter((i) => i.id !== id))
  const markRead = (id: number) => setItems((prev) => prev.map((i) => i.id === id ? { ...i, unread: false } : i))

  const today = items.filter((i) => i.day === 'Today')
  const yesterday = items.filter((i) => i.day === 'Yesterday')

  return (
    <Box
      sx={{
        width: 380,
        bgcolor: 'background.paper',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
        display: 'flex',
        flexDirection: 'column',
        maxHeight: 560,
      }}
    >
      {/* Header */}
      <Box sx={{ px: 2, py: 1.5, borderBottom: '1px solid', borderColor: 'divider', display: 'flex', alignItems: 'center', gap: 1, flexShrink: 0 }}>
        <Typography sx={{ fontWeight: 700, fontSize: '1rem', flex: 1 }}>
          Notifications
          {unreadCount > 0 && (
            <Box
              component="span"
              sx={{
                ml: 1,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 20,
                height: 20,
                borderRadius: '9999px',
                background: 'linear-gradient(135deg, #0F5BFF, #7C3AED)',
                color: '#fff',
                fontSize: '0.6rem',
                fontWeight: 700,
                verticalAlign: 'middle',
              }}
            >
              {unreadCount}
            </Box>
          )}
        </Typography>
        {unreadCount > 0 && (
          <IconButton size="small" onClick={markAllRead} sx={{ color: 'primary.main' }} title="Mark all read">
            <Check size={16} />
          </IconButton>
        )}
      </Box>

      {/* Filter tabs */}
      <Box sx={{ borderBottom: '1px solid', borderColor: 'divider', flexShrink: 0 }}>
        <Tabs
          value={tab}
          onChange={(_, v) => setTab(v)}
          variant="scrollable"
          scrollButtons={false}
          sx={{ minHeight: 40, '& .MuiTab-root': { minHeight: 40, py: 0, fontSize: '0.75rem' } }}
        >
          {tabLabels.map((l) => <Tab key={l} label={l} />)}
        </Tabs>
      </Box>

      {/* Content */}
      <Box sx={{ flex: 1, overflowY: 'auto' }}>
        {items.length === 0 ? (
          <Box sx={{ py: 8, textAlign: 'center' }}>
            <Bell size={32} style={{ opacity: 0.15, margin: '0 auto' }} />
            <Typography sx={{ mt: 2, fontSize: '0.9375rem', fontWeight: 600, color: 'text.secondary' }}>
              All caught up!
            </Typography>
            <Typography sx={{ mt: 0.5, fontSize: '0.8125rem', color: 'text.secondary' }}>
              No notifications to show.
            </Typography>
          </Box>
        ) : (
          <>
            {today.length > 0 && (
              <>
                <GroupLabel label="Today" />
                {today.map((notif, i) => (
                  <Box key={notif.id} sx={{ borderBottom: '1px solid', borderColor: 'divider' }}>
                    <NotifItem notif={notif} onDelete={() => removeItem(notif.id)} onRead={() => markRead(notif.id)} />
                  </Box>
                ))}
              </>
            )}
            {yesterday.length > 0 && (
              <>
                <GroupLabel label="Yesterday" />
                {yesterday.map((notif, i) => (
                  <Box key={notif.id} sx={{ borderBottom: i < yesterday.length - 1 ? '1px solid' : 'none', borderColor: 'divider' }}>
                    <NotifItem notif={notif} onDelete={() => removeItem(notif.id)} onRead={() => markRead(notif.id)} />
                  </Box>
                ))}
              </>
            )}
          </>
        )}
      </Box>
    </Box>
  )
}

function NotificationCenterStory() {
  return (
    <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap', alignItems: 'flex-start' }}>
      <Box>
        <Typography variant="subtitle2" sx={{ mb: 2, color: 'text.secondary', textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '0.7rem' }}>
          With Notifications
        </Typography>
        <NotificationCenter />
      </Box>
      <Box>
        <Typography variant="subtitle2" sx={{ mb: 2, color: 'text.secondary', textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '0.7rem' }}>
          Empty State
        </Typography>
        <NotificationCenter empty />
      </Box>
    </Box>
  )
}

const meta: Meta = {
  title: 'Organisms/NotificationCenter',
  component: NotificationCenterStory,
  tags: ['autodocs'],
}
export default meta

export const WithNotifications: StoryObj = { render: () => <NotificationCenter /> }
export const EmptyState: StoryObj = { render: () => <NotificationCenter empty /> }
export const BothVariants: StoryObj = { render: () => <NotificationCenterStory /> }
