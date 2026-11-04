import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import { Box, Tabs, Tab, Typography } from '@mui/material'
import { MessageSquare, Users, BarChart2, Settings, Bell, Phone, Mail, Star } from 'lucide-react'

function TabPanel({ children, value, index }: { children: React.ReactNode; value: number; index: number }) {
  return value === index ? (
    <Box sx={{ p: 3, bgcolor: 'background.paper', borderRadius: '0 0 12px 12px', border: '1px solid', borderColor: 'divider', borderTop: 'none' }}>
      {children}
    </Box>
  ) : null
}

function BasicTabs() {
  const [value, setValue] = useState(0)
  return (
    <Box>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={(_, v) => setValue(v)}>
          <Tab label="Overview" />
          <Tab label="Messages" />
          <Tab label="Analytics" />
          <Tab label="Settings" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>Overview content — team performance summary</TabPanel>
      <TabPanel value={value} index={1}>Messages content — recent conversations</TabPanel>
      <TabPanel value={value} index={2}>Analytics content — charts and metrics</TabPanel>
      <TabPanel value={value} index={3}>Settings content — configuration options</TabPanel>
    </Box>
  )
}

function IconTabs() {
  const [value, setValue] = useState(0)
  const tabs = [
    { label: 'Inbox', icon: <MessageSquare size={16} /> },
    { label: 'Contacts', icon: <Users size={16} /> },
    { label: 'Analytics', icon: <BarChart2 size={16} /> },
    { label: 'Settings', icon: <Settings size={16} /> },
  ]
  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs value={value} onChange={(_, v) => setValue(v)}>
        {tabs.map((t) => (
          <Tab key={t.label} label={t.label} icon={t.icon} iconPosition="start" />
        ))}
      </Tabs>
    </Box>
  )
}

function ScrollableTabs() {
  const [value, setValue] = useState(0)
  const labels = ['All', 'Unread', 'Assigned to me', 'Mentions', 'Automated', 'Resolved', 'Spam', 'Archived', 'VIP']
  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider', maxWidth: 500 }}>
      <Tabs
        value={value}
        onChange={(_, v) => setValue(v)}
        variant="scrollable"
        scrollButtons="auto"
      >
        {labels.map((l) => <Tab key={l} label={l} />)}
      </Tabs>
    </Box>
  )
}

function InboxStyleTabs() {
  const [value, setValue] = useState(0)
  const tabs = [
    { label: 'Chats', count: 42 },
    { label: 'Calls', count: 3 },
    { label: 'Email', count: 0 },
  ]
  return (
    <Box sx={{ bgcolor: 'background.paper', borderBottom: '1px solid', borderColor: 'divider' }}>
      <Tabs value={value} onChange={(_, v) => setValue(v)}>
        {tabs.map((t) => (
          <Tab
            key={t.label}
            label={
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
                {t.label}
                {t.count > 0 && (
                  <Box
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      minWidth: 18,
                      height: 18,
                      px: '5px',
                      borderRadius: '9999px',
                      background: value === tabs.indexOf(t)
                        ? 'linear-gradient(135deg, #0F5BFF, #7C3AED)'
                        : '#E5E7EB',
                      color: value === tabs.indexOf(t) ? '#fff' : '#6B7280',
                      fontSize: '0.625rem',
                      fontWeight: 700,
                    }}
                  >
                    {t.count}
                  </Box>
                )}
              </Box>
            }
          />
        ))}
      </Tabs>
    </Box>
  )
}

function TabsStory() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <Box>
        <Typography variant="subtitle2" sx={{ mb: 2, color: 'text.secondary', textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '0.7rem' }}>
          Default Tabs with Panels
        </Typography>
        <BasicTabs />
      </Box>

      <Box>
        <Typography variant="subtitle2" sx={{ mb: 2, color: 'text.secondary', textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '0.7rem' }}>
          Icon + Label Tabs
        </Typography>
        <IconTabs />
      </Box>

      <Box>
        <Typography variant="subtitle2" sx={{ mb: 2, color: 'text.secondary', textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '0.7rem' }}>
          Scrollable (many tabs)
        </Typography>
        <ScrollableTabs />
      </Box>

      <Box>
        <Typography variant="subtitle2" sx={{ mb: 2, color: 'text.secondary', textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '0.7rem' }}>
          Inbox Style (with count badge)
        </Typography>
        <InboxStyleTabs />
      </Box>
    </Box>
  )
}

const meta: Meta = {
  title: 'Molecules/Tabs',
  component: TabsStory,
  tags: ['autodocs'],
}
export default meta

export const AllTabs: StoryObj = { render: () => <TabsStory /> }
