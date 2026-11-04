import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Box, Button, Typography } from '@mui/material'
import { Archive, Inbox, MessageCircleOff, MessageSquare, UserRound, UserRoundX, UsersRound } from 'lucide-react'
import { ConversationFilterList, InboxAssigneeFilterRow, InboxChannelFilterRow } from '@chatdaddy/components'
import type { ConversationFilterItem } from '@chatdaddy/components'

const filters: ConversationFilterItem[] = [
  { id: 'all', label: 'All', icon: <Inbox /> },
  { id: 'unread', label: 'Unread', icon: <MessageCircleOff />, count: 128 },
  { id: 'assigned_to_me', label: 'Assigned to me', icon: <UserRound />, count: 2 },
  { id: 'unassigned', label: 'Unassigned', icon: <UserRoundX />, count: 6 },
  { id: 'archived', label: 'Archived', icon: <Archive />, count: 33 },
  { id: 'individuals', label: 'Individual', icon: <MessageSquare />, count: 85 },
  { id: 'groups', label: 'Groups', icon: <UsersRound />, count: 24 },
]

function InboxFiltersDemo() {
  const [activeId, setActiveId] = useState('all')
  const [selectedChannel, setSelectedChannel] = useState(false)
  const [selectedAssignee, setSelectedAssignee] = useState(false)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  return <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', p: 3, bgcolor: '#F8F9FC', borderRadius: 2 }}>
    <Box sx={{ width: 270, maxWidth: '100%', p: 2, border: '1px solid #E1E4EA', borderRadius: 2, bgcolor: 'white' }}>
      <Typography component="h3" sx={{ fontSize: 12, fontWeight: 700, color: '#616E7C', mb: 1 }}>CONVERSATIONS</Typography>
      <ConversationFilterList items={filters} activeId={activeId} onChange={setActiveId} />
      <Typography component="h3" sx={{ fontSize: 12, fontWeight: 700, color: '#616E7C', mt: 3, mb: 1 }}>CHANNEL</Typography>
      <Box component="ul" sx={{ m: 0, p: 0 }}><InboxChannelFilterRow
        name="Customer Service" platform="WhatsApp Business Platform" identity="+852 6801 9530"
        status="disconnected" selected={selectedChannel} onSelect={() => setSelectedChannel(value => !value)}
        unread={loading ? undefined : { count: 12, hasMore: true }} unreadLoading={loading}
        onReconnect={async () => { await new Promise(resolve => setTimeout(resolve, 700)); setMessage('Reconnect callback invoked — the App owns OAuth and permissions.') }}
        onReconnectError={error => setMessage(`Reconnect failed: ${String(error)}`)} />
      </Box>
      <Typography component="h3" sx={{ fontSize: 12, fontWeight: 700, color: '#616E7C', mt: 3, mb: 1 }}>ASSIGNEE</Typography>
      <Box component="ul" sx={{ m: 0, p: 0 }}>
        <InboxAssigneeFilterRow name="Unassigned" unassigned selected={selectedAssignee} onSelect={() => setSelectedAssignee(value => !value)} count={6} />
        <InboxAssigneeFilterRow name="Kenny" selected={false} onSelect={() => setMessage('Select Kenny — caller handles the filter state.')} loading={loading} count={loading ? undefined : 18} />
      </Box>
    </Box>
    <Box sx={{ minWidth: 230, flex: 1, p: 2 }}>
      <Typography variant="h5" sx={{ fontWeight: 700 }}>Inbox filter primitives</Typography>
      <Typography sx={{ color: '#616E7C', mt: 1 }}>Click filters, hover or keyboard-focus the reconnect action, and switch the count to loading. Counts and account health are supplied by the App.</Typography>
      <Button variant="outlined" sx={{ mt: 2 }} onClick={() => setLoading(value => !value)}>{loading ? 'Show counts' : 'Show loading'}</Button>
      <Typography sx={{ mt: 3 }}>Active view: {activeId}</Typography>
      {message && <Typography role="status" sx={{ mt: 2, color: '#0040C1' }}>{message}</Typography>}
    </Box>
  </Box>
}

const meta: Meta = { title: 'Organisms/App-derived Inbox filters', tags: ['autodocs'] }
export default meta
export const ControlledFiltersAndActions: StoryObj = { render: () => <InboxFiltersDemo /> }
