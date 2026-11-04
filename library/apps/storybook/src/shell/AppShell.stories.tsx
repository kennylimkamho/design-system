import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import { Box, Avatar, IconButton, Badge, Tooltip, Typography } from '@mui/material'
import {
  MessageSquare,
  Users,
  BarChart2,
  Settings,
  Zap,
  Bell,
  Plus,
} from 'lucide-react'
import {
  AppShell,
  Sidebar,
  Navbar,
  TeamSwitcher,
  ToastStack,
  PageWrapper,
} from '@chatdaddy/components'
import type { SidebarNavItem, Team, Toast } from '@chatdaddy/components'

// ─── Fixtures ─────────────────────────────────────────────────────────────────

const NAV_ITEMS: SidebarNavItem[] = [
  { id: 'inbox', label: 'Inbox', icon: <MessageSquare size={18} />, badge: 5 },
  { id: 'crm', label: 'CRM', icon: <Users size={18} /> },
  { id: 'analytics', label: 'Analytics', icon: <BarChart2 size={18} /> },
  { id: 'automations', label: 'Automations', icon: <Zap size={18} /> },
  { id: 'settings', label: 'Settings', icon: <Settings size={18} /> },
]

const TEAMS: Team[] = [
  { id: 't1', name: 'Acme Corp' },
  { id: 't2', name: 'Beta Team' },
  { id: 't3', name: 'ChatDaddy Internal' },
]

// ─── Logo ─────────────────────────────────────────────────────────────────────

function Logo() {
  return (
    <Box
      sx={{
        width: 28,
        height: 28,
        borderRadius: '8px',
        bgcolor: '#0F5BFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
    >
      <MessageSquare size={14} color="#fff" />
    </Box>
  )
}

// ─── Full Shell Story ─────────────────────────────────────────────────────────

function FullShellDemo() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [activeId, setActiveId] = useState('inbox')
  const [activeTeamId, setActiveTeamId] = useState('t1')
  const [toasts, setToasts] = useState<Toast[]>([])

  const addToast = (message: string, severity: Toast['severity']) => {
    const id = crypto.randomUUID()
    setToasts((prev) => [...prev, { id, message, severity }])
  }

  const removeToast = (id: string) =>
    setToasts((prev) => prev.filter((t) => t.id !== id))

  const activeItem = NAV_ITEMS.find((i) => i.id === activeId)

  return (
    <Box sx={{ width: '100%', height: '600px', border: '1px solid #E5E7EB', borderRadius: '12px', overflow: 'hidden' }}>
      <AppShell
        sidebar={
          <Sidebar
            items={NAV_ITEMS}
            activeId={activeId}
            onSelect={setActiveId}
            open={sidebarOpen}
            onToggle={() => setSidebarOpen((o) => !o)}
            logo={<Logo />}
            bottomSlot={
              <Avatar sx={{ width: 32, height: 32, fontSize: '0.8rem', bgcolor: '#0F5BFF' }}>
                AK
              </Avatar>
            }
          />
        }
        navbar={
          <Navbar
            title={activeItem?.label ?? 'Page'}
            endSlot={
              <>
                <Tooltip title="New conversation" arrow>
                  <IconButton size="small" sx={{ border: '1px solid', borderColor: 'divider', borderRadius: '8px' }}>
                    <Plus size={15} />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Notifications" arrow>
                  <IconButton size="small" sx={{ border: '1px solid', borderColor: 'divider', borderRadius: '8px' }}>
                    <Badge badgeContent={3} color="error">
                      <Bell size={15} />
                    </Badge>
                  </IconButton>
                </Tooltip>
                <TeamSwitcher
                  teams={TEAMS}
                  activeTeamId={activeTeamId}
                  onSwitch={(id) => {
                    setActiveTeamId(id)
                    addToast(`Switched to ${TEAMS.find((t) => t.id === id)?.name}`, 'success')
                  }}
                />
              </>
            }
          />
        }
      >
        <PageWrapper title={activeItem?.label}>
          <Box sx={{ p: 3 }}>
            <Typography color="text.secondary" variant="body2">
              Active section: <strong>{activeItem?.label}</strong>
            </Typography>
            <Box sx={{ mt: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              {(['success', 'error', 'warning', 'info'] as Toast['severity'][]).map((sev) => (
                <Box
                  key={sev}
                  component="button"
                  onClick={() => addToast(`This is a ${sev} toast`, sev)}
                  sx={{
                    px: 2, py: 0.75, border: '1px solid', borderColor: 'divider',
                    borderRadius: '8px', cursor: 'pointer', bgcolor: 'transparent',
                    fontSize: '0.8125rem', fontFamily: 'inherit',
                    '&:hover': { bgcolor: 'action.hover' },
                  }}
                >
                  Show {sev} toast
                </Box>
              ))}
            </Box>
          </Box>
        </PageWrapper>
      </AppShell>

      <ToastStack toasts={toasts} onClose={removeToast} />
    </Box>
  )
}

// ─── Sidebar only ─────────────────────────────────────────────────────────────

function SidebarDemo() {
  const [open, setOpen] = useState(true)
  const [activeId, setActiveId] = useState('inbox')
  return (
    <Box sx={{ display: 'flex', height: 500, border: '1px solid #E5E7EB', borderRadius: '12px', overflow: 'hidden' }}>
      <Sidebar
        items={NAV_ITEMS}
        activeId={activeId}
        onSelect={setActiveId}
        open={open}
        onToggle={() => setOpen((o) => !o)}
        logo={<Logo />}
      />
      <Box sx={{ flex: 1, bgcolor: '#F9FAFB', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography color="text.secondary" variant="body2">Content area</Typography>
      </Box>
    </Box>
  )
}

// ─── TeamSwitcher only ────────────────────────────────────────────────────────

function TeamSwitcherDemo() {
  const [activeTeamId, setActiveTeamId] = useState('t1')
  return (
    <Box sx={{ p: 3, display: 'flex', gap: 2, alignItems: 'center' }}>
      <TeamSwitcher teams={TEAMS} activeTeamId={activeTeamId} onSwitch={setActiveTeamId} />
      <TeamSwitcher teams={[]} activeTeamId="" onSwitch={() => {}} loading />
      <TeamSwitcher teams={TEAMS} activeTeamId={activeTeamId} onSwitch={() => {}} disabled />
    </Box>
  )
}

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta = {
  title: 'Shell/AppShell',
  tags: ['autodocs'],
}
export default meta

export const FullShell: StoryObj = { render: () => <FullShellDemo /> }
export const SidebarOnly: StoryObj = { render: () => <SidebarDemo /> }
export const TeamSwitcherOnly: StoryObj = { render: () => <TeamSwitcherDemo /> }
