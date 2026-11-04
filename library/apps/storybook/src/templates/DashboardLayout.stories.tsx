import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import { Box, Typography, Avatar, IconButton, Divider, Tabs, Tab } from '@mui/material'
import {
  MessageSquare, Users, BarChart2, Settings, Bell, Zap,
  TrendingUp, TrendingDown, ArrowUpRight, MoreHorizontal,
  ShoppingCart, Phone, Megaphone, Bot, CreditCard,
} from 'lucide-react'
import { shadows } from '@chatdaddy/tokens'

// ─── Sidebar ─────────────────────────────────────────────────────────────────

const NAV = [
  { icon: MessageSquare, label: 'Inbox', badge: 42 },
  { icon: Phone,         label: 'Calls' },
  { icon: Megaphone,     label: 'Broadcasts' },
  { icon: Users,         label: 'Contacts' },
  { icon: ShoppingCart,  label: 'CRM' },
  { icon: Zap,           label: 'Flows' },
  { icon: Bot,           label: 'AI Chatbot' },
  { icon: BarChart2,     label: 'Dashboard', active: true },
]

function DashSidebar({ collapsed = false }: { collapsed?: boolean }) {
  return (
    <Box
      sx={{
        width: collapsed ? 60 : 220,
        flexShrink: 0,
        bgcolor: '#fff',
        borderRight: '1px solid #E5E7EB',
        boxShadow: shadows.sidebar,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        transition: 'width 220ms cubic-bezier(0.4, 0, 0.2, 1)',
        overflow: 'hidden',
      }}
    >
      {/* Logo */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25, px: 1.5, py: 1.5, borderBottom: '1px solid #E5E7EB', flexShrink: 0 }}>
        <Box sx={{ width: 32, height: 32, borderRadius: '10px', background: 'linear-gradient(135deg, #0F5BFF, #7C3AED)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 12px rgba(15,91,255,0.3)' }}>
          <MessageSquare size={16} color="#fff" strokeWidth={2.2} />
        </Box>
        {!collapsed && <Typography sx={{ fontWeight: 800, fontSize: '0.9375rem', color: '#111827', letterSpacing: '-0.01em' }}>ChatDaddy</Typography>}
      </Box>

      {/* Nav */}
      <Box sx={{ flex: 1, overflowY: 'auto', py: 1 }}>
        {NAV.map((item) => (
          <Box
            key={item.label}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.25,
              px: 1,
              py: '7px',
              mx: 1,
              borderRadius: '10px',
              cursor: 'pointer',
              bgcolor: item.active ? '#EBF0FF' : 'transparent',
              color: item.active ? '#0F5BFF' : '#374151',
              '&:hover': { bgcolor: item.active ? '#EBF0FF' : '#F3F4F6' },
              mb: 0.25,
              position: 'relative',
            }}
          >
            <Box sx={{ width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, position: 'relative' }}>
              <item.icon size={18} strokeWidth={item.active ? 2.2 : 1.8} />
              {item.badge && item.badge > 0 && (
                <Box sx={{ position: 'absolute', top: -4, right: -5, minWidth: 15, height: 15, px: '3px', borderRadius: '9999px', background: 'linear-gradient(135deg, #0F5BFF, #7C3AED)', color: '#fff', fontSize: '0.5rem', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1.5px solid #fff' }}>
                  {item.badge}
                </Box>
              )}
            </Box>
            {!collapsed && <Typography sx={{ fontSize: '0.875rem', fontWeight: item.active ? 600 : 500, color: 'inherit', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.label}</Typography>}
          </Box>
        ))}
      </Box>

      {/* Footer */}
      <Box sx={{ borderTop: '1px solid #E5E7EB', py: 1, flexShrink: 0 }}>
        {[Bell, CreditCard, Settings].map((Icon) => (
          <Box key={Icon.name} sx={{ display: 'flex', alignItems: 'center', justifyContent: collapsed ? 'center' : 'flex-start', gap: 1.25, px: 1, py: '6px', mx: 1, borderRadius: '10px', cursor: 'pointer', color: '#374151', '&:hover': { bgcolor: '#F3F4F6' } }}>
            <Box sx={{ width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Icon size={18} strokeWidth={1.8} />
            </Box>
            {!collapsed && <Typography sx={{ fontSize: '0.875rem', fontWeight: 500 }}>{Icon === Bell ? 'Notifications' : Icon === CreditCard ? 'Billing' : 'Settings'}</Typography>}
          </Box>
        ))}
        <Divider sx={{ mx: 1, my: 0.5, opacity: 0.5 }} />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25, px: 1, py: '7px', mx: 1, borderRadius: '10px', cursor: 'pointer', '&:hover': { bgcolor: '#F3F4F6' } }}>
          <Avatar sx={{ width: 28, height: 28, background: 'linear-gradient(135deg,#0F5BFF,#7C3AED)', fontSize: '0.6875rem', fontWeight: 700, flexShrink: 0 }}>AM</Avatar>
          {!collapsed && <Box sx={{ flex: 1, minWidth: 0 }}><Typography sx={{ fontSize: '0.8125rem', fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Akil Mutawakkil</Typography><Typography sx={{ fontSize: '0.6875rem', color: 'text.secondary' }}>Admin</Typography></Box>}
        </Box>
      </Box>
    </Box>
  )
}

// ─── Metric card ─────────────────────────────────────────────────────────────

function MetricCard({ title, value, change, positive }: { title: string; value: string; change: string; positive: boolean }) {
  return (
    <Box sx={{ bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider', borderRadius: '16px', p: 2, boxShadow: shadows.card }}>
      <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em', mb: 1 }}>
        {title}
      </Typography>
      <Typography sx={{ fontSize: '1.75rem', fontWeight: 700, letterSpacing: '-0.02em', mb: 1 }}>
        {value}
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
        {positive ? <TrendingUp size={13} color="#10B981" /> : <TrendingDown size={13} color="#EF4444" />}
        <Typography sx={{ fontSize: '0.75rem', color: positive ? '#10B981' : '#EF4444', fontWeight: 600 }}>
          {change}
        </Typography>
        <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary' }}>vs last week</Typography>
      </Box>
    </Box>
  )
}

// ─── Bar chart placeholder ────────────────────────────────────────────────────

function BarChartPlaceholder() {
  const bars = [42, 65, 38, 80, 55, 90, 72, 48, 85, 60, 70, 95]
  const max = Math.max(...bars)

  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: '6px', height: 100 }}>
      {bars.map((v, i) => (
        <Box
          key={i}
          sx={{
            flex: 1,
            height: `${(v / max) * 100}%`,
            borderRadius: '4px 4px 0 0',
            bgcolor: i === bars.length - 1 ? 'primary.main' : '#EBF0FF',
            transition: 'background-color 200ms',
            '&:hover': { bgcolor: 'primary.main', opacity: 0.8 },
          }}
        />
      ))}
    </Box>
  )
}

// ─── Main content ─────────────────────────────────────────────────────────────

function DashboardContent() {
  const [tab, setTab] = useState(0)

  return (
    <Box sx={{ flex: 1, overflowY: 'auto', height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Top navbar */}
      <Box sx={{ px: 3, py: 1.5, borderBottom: '1px solid', borderColor: 'divider', display: 'flex', alignItems: 'center', bgcolor: 'background.paper', flexShrink: 0, boxShadow: shadows.navbar }}>
        <Typography variant="h5" sx={{ fontWeight: 700, flex: 1 }}>Dashboard</Typography>
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          <Box sx={{ px: '10px', height: 32, borderRadius: '8px', border: '1px solid', borderColor: 'divider', display: 'flex', alignItems: 'center', fontSize: '0.8125rem', color: 'text.secondary', cursor: 'pointer', '&:hover': { borderColor: 'primary.main' } }}>
            Last 7 days ▾
          </Box>
          <IconButton size="small"><Bell size={18} /></IconButton>
        </Box>
      </Box>

      {/* Content */}
      <Box sx={{ p: 3, flex: 1 }}>
        {/* Tabs */}
        <Box sx={{ mb: 3, borderBottom: '1px solid', borderColor: 'divider' }}>
          <Tabs value={tab} onChange={(_, v) => setTab(v)}>
            <Tab label="Overview" />
            <Tab label="Conversations" />
            <Tab label="Team" />
            <Tab label="Channels" />
          </Tabs>
        </Box>

        {/* Metric cards */}
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2, mb: 3 }}>
          <MetricCard title="Total Conversations" value="2,847" change="+12.4%" positive />
          <MetricCard title="Resolved Today" value="184" change="+8.1%" positive />
          <MetricCard title="Avg Response Time" value="4.2m" change="-18.5%" positive />
          <MetricCard title="CSAT Score" value="94%" change="-2.1%" positive={false} />
        </Box>

        {/* Charts row */}
        <Box sx={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 2, mb: 3 }}>
          <Box sx={{ bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider', borderRadius: '16px', p: 2.5, boxShadow: shadows.card }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography sx={{ fontWeight: 700 }}>Conversations over time</Typography>
              <IconButton size="small"><MoreHorizontal size={16} /></IconButton>
            </Box>
            <BarChartPlaceholder />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Today'].map((d) => (
                <Typography key={d} sx={{ fontSize: '0.6rem', color: 'text.secondary' }}>{d}</Typography>
              ))}
            </Box>
          </Box>

          <Box sx={{ bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider', borderRadius: '16px', p: 2.5, boxShadow: shadows.card }}>
            <Typography sx={{ fontWeight: 700, mb: 2 }}>Channel breakdown</Typography>
            {[
              { label: 'WhatsApp', pct: 58, color: '#25D366' },
              { label: 'Instagram', pct: 22, color: '#E1306C' },
              { label: 'Messenger', pct: 12, color: '#0084FF' },
              { label: 'Email', pct: 8, color: '#EA4335' },
            ].map((ch) => (
              <Box key={ch.label} sx={{ mb: 1.5 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                  <Typography sx={{ fontSize: '0.75rem', fontWeight: 500 }}>{ch.label}</Typography>
                  <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary' }}>{ch.pct}%</Typography>
                </Box>
                <Box sx={{ height: 6, bgcolor: '#F3F4F6', borderRadius: '9999px', overflow: 'hidden' }}>
                  <Box sx={{ width: `${ch.pct}%`, height: '100%', bgcolor: ch.color, borderRadius: '9999px' }} />
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Bottom: recent conversations table */}
        <Box sx={{ bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider', borderRadius: '16px', overflow: 'hidden', boxShadow: shadows.card }}>
          <Box sx={{ px: 2.5, py: 1.5, borderBottom: '1px solid', borderColor: 'divider', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography sx={{ fontWeight: 700 }}>Recent Conversations</Typography>
            <Typography sx={{ fontSize: '0.75rem', color: 'primary.main', cursor: 'pointer', fontWeight: 600 }}>View all →</Typography>
          </Box>
          {[
            { name: 'Akil Mutawakkil', topic: 'Order status inquiry', channel: 'WhatsApp', status: 'Open', time: '2m ago', color: '#25D366' },
            { name: 'Jane Doe', topic: 'Password reset request', channel: 'Email', status: 'Resolved', time: '15m ago', color: '#EA4335' },
            { name: 'Carlos Reyes', topic: 'Refund for order #5521', channel: 'Instagram', status: 'In Progress', time: '1h ago', color: '#E1306C' },
            { name: 'Priya Nair', topic: 'Product availability', channel: 'WhatsApp', status: 'Open', time: '2h ago', color: '#25D366' },
          ].map((row, i, arr) => (
            <Box
              key={row.name}
              sx={{
                display: 'grid',
                gridTemplateColumns: '1fr 1.5fr 1fr auto auto',
                gap: 2,
                px: 2.5,
                py: 1.5,
                alignItems: 'center',
                borderBottom: i < arr.length - 1 ? '1px solid' : 'none',
                borderColor: 'divider',
                '&:hover': { bgcolor: 'action.hover' },
                cursor: 'pointer',
              }}
            >
              <Typography sx={{ fontSize: '0.875rem', fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{row.name}</Typography>
              <Typography sx={{ fontSize: '0.8125rem', color: 'text.secondary', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{row.topic}</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
                <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: row.color }} />
                <Typography sx={{ fontSize: '0.75rem', fontWeight: 500 }}>{row.channel}</Typography>
              </Box>
              <Box sx={{
                px: '8px', height: 22, borderRadius: '9999px', fontSize: '0.6875rem', fontWeight: 600, display: 'flex', alignItems: 'center',
                bgcolor: row.status === 'Open' ? '#ECFDF5' : row.status === 'Resolved' ? '#F0FDF4' : '#EFF6FF',
                color: row.status === 'Open' ? '#065F46' : row.status === 'Resolved' ? '#166534' : '#1E40AF',
              }}>{row.status}</Box>
              <Typography sx={{ fontSize: '0.6875rem', color: 'text.secondary', whiteSpace: 'nowrap' }}>{row.time}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

// ─── Full layout ──────────────────────────────────────────────────────────────

function DashboardLayout({ collapsed = false }: { collapsed?: boolean }) {
  return (
    <Box
      sx={{
        display: 'flex',
        height: 700,
        bgcolor: '#ECEEF2',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
      }}
    >
      <DashSidebar collapsed={collapsed} />
      <DashboardContent />
    </Box>
  )
}

function DashboardLayoutStory() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <Box>
        <Typography variant="subtitle2" sx={{ mb: 2, color: 'text.secondary', textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '0.7rem' }}>
          Dashboard Layout — Expanded Sidebar
        </Typography>
        <DashboardLayout />
      </Box>
      <Box>
        <Typography variant="subtitle2" sx={{ mb: 2, color: 'text.secondary', textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '0.7rem' }}>
          Dashboard Layout — Collapsed Sidebar
        </Typography>
        <DashboardLayout collapsed />
      </Box>
    </Box>
  )
}

const meta: Meta = {
  title: 'Templates/DashboardLayout',
  component: DashboardLayoutStory,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
}
export default meta

export const ExpandedSidebar: StoryObj = { render: () => <DashboardLayout /> }
export const CollapsedSidebar: StoryObj = { render: () => <DashboardLayout collapsed /> }
export const BothVariants: StoryObj = { render: () => <DashboardLayoutStory /> }
