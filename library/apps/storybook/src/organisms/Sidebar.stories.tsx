import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Box, Typography } from '@mui/material'
import { BarChart3, GitBranch, Inbox, MessageSquare, Settings2, UsersRound } from 'lucide-react'
import { NavigationRailShell, Sidebar, WorkspaceNavigation } from '@chatdaddy/components'
import type { SidebarNavItem, WorkspaceNavigationItem } from '@chatdaddy/components'

const items: SidebarNavItem[] = [
  { id: 'analytics', label: 'Analytics', moduleIcon: 'analytics' },
  { id: 'inbox', label: 'Inbox', moduleIcon: 'inbox', badge: { count: 99, hasMore: true }, dividerBefore: true,
    children: [
      { id: 'channels', label: 'Channels', moduleIcon: 'channels' },
      { id: 'contacts', label: 'Contacts', moduleIcon: 'contacts' },
      { id: 'crm', label: 'CRM', moduleIcon: 'crm' },
      { id: 'calls', label: 'Calls', moduleIcon: 'calls' },
    ] },
  { id: 'automation', label: 'Automation', moduleIcon: 'automation', children: [
    { id: 'broadcasts', label: 'Broadcasts', moduleIcon: 'broadcasts' },
    { id: 'shop', label: 'Shop', moduleIcon: 'shop' },
  ] },
  { id: 'ai', label: 'AI', moduleIcon: 'ai' },
  { id: 'integration', label: 'Integration', moduleIcon: 'integration' },
  { id: 'settings', label: 'Settings', moduleIcon: 'settings', dividerBefore: true },
]

function MainNavigationDemo() {
  const [activeId, setActiveId] = useState('inbox')
  return <Box sx={{ display: 'flex', height: 600, width: '100%', border: '1px solid #DCE0E7', borderRadius: 2, overflow: 'hidden' }}>
    <NavigationRailShell storageKey={null} routeKey={activeId} contentId="navigation-preview-main">
      {({ expanded, pinned, onTogglePin }) => <Sidebar
        items={items} activeId={activeId} onSelect={setActiveId}
        open={expanded} pinned={pinned} onTogglePin={onTogglePin} onToggle={onTogglePin}
        brandName="ChatDaddy" />}
    </NavigationRailShell>
    <Box id="navigation-preview-main" component="main" tabIndex={-1} sx={{ flex: 1, minWidth: 0, p: 4, bgcolor: '#fff' }}>
      <Typography variant="h5" sx={{ fontWeight: 700 }}>App navigation</Typography>
      <Typography sx={{ mt: 1, maxWidth: 520, color: '#616E7C' }}>
        Hover or focus the rail to preview, pin it to reserve space, and use Escape to dismiss.
        Inbox is a route; its chevron discloses nested destinations. The count is a lower bound.
      </Typography>
      <Typography sx={{ mt: 3 }}>Selected: {activeId}</Typography>
    </Box>
  </Box>
}

const workspaceItems: WorkspaceNavigationItem[] = [
  { id: 'all', label: 'All conversations', href: '#all', icon: <Inbox /> },
  { id: 'unread', label: 'Unread', href: '#unread', icon: <MessageSquare />, badge: '99+' },
  { id: 'team', label: 'Team', href: '#team', icon: <UsersRound />, dividerBefore: true },
  { id: 'flows', label: 'Flows', href: '#flows', icon: <GitBranch /> },
  { id: 'reports', label: 'Reports', href: '#reports', icon: <BarChart3 /> },
  { id: 'settings', label: 'Settings', href: '#settings', icon: <Settings2 />, dividerBefore: true },
]

function SecondaryNavigationDemo() {
  const [activeId, setActiveId] = useState('all')
  return <Box sx={{ height: 520, border: '1px solid #DCE0E7', borderRadius: 2, overflow: 'hidden' }}>
    <WorkspaceNavigation title="Inbox" items={workspaceItems} activeId={activeId} onSelect={setActiveId}>
      <Box sx={{ p: 4 }}>
        <Typography variant="h5" sx={{ fontWeight: 700 }}>{workspaceItems.find(item => item.id === activeId)?.label}</Typography>
        <Typography color="text.secondary" sx={{ mt: 1 }}>These are destinations, not tabs or dataset filters. Collapse to see the accessible icon-only state.</Typography>
      </Box>
    </WorkspaceNavigation>
  </Box>
}

const meta: Meta = { title: 'Organisms/App-derived navigation', tags: ['autodocs'] }
export default meta

export const PrimaryRail: StoryObj = { render: () => <MainNavigationDemo /> }
export const SecondaryMenu: StoryObj = { render: () => <SecondaryNavigationDemo /> }
