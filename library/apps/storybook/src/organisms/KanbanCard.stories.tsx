import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import { Box, Typography, Avatar, Chip } from '@mui/material'
import { tag as tagTokens, shadows } from '@chatdaddy/tokens'
import { GripVertical, AlertCircle, ArrowUp, ArrowRight, ArrowDown } from 'lucide-react'

// ─── Types ────────────────────────────────────────────────────────────────────

type TicketStatus = 'open' | 'in-progress' | 'resolved' | 'pending'
type Priority = 'high' | 'medium' | 'low'

const STATUS_STYLES: Record<TicketStatus, { bg: string; text: string; label: string; dot: string }> = {
  open:        { bg: '#ECFDF5', text: '#065F46', label: 'Open',        dot: '#10B981' },
  'in-progress': { bg: '#EFF6FF', text: '#1E40AF', label: 'In Progress', dot: '#3B82F6' },
  resolved:    { bg: '#F0FDF4', text: '#166534', label: 'Resolved',    dot: '#22C55E' },
  pending:     { bg: '#FFF7ED', text: '#9A3412', label: 'Pending',     dot: '#F59E0B' },
}

const PRIORITY_ICONS: Record<Priority, React.ReactNode> = {
  high:   <ArrowUp size={12} color="#EF4444" />,
  medium: <ArrowRight size={12} color="#F59E0B" />,
  low:    <ArrowDown size={12} color="#10B981" />,
}

const GRADIENTS = [
  'linear-gradient(135deg, #0F5BFF, #7C3AED)',
  'linear-gradient(135deg, #10B981, #059669)',
  'linear-gradient(135deg, #F59E0B, #D97706)',
  'linear-gradient(135deg, #8B5CF6, #6D28D9)',
]

function CompactTag({ label, index }: { label: string; index: number }) {
  const bg = tagTokens.backgrounds[index % tagTokens.backgrounds.length]
  return (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        px: '6px',
        height: 18,
        borderRadius: '4px',
        bgcolor: bg.bg,
        color: bg.text,
        fontSize: '0.625rem',
        fontWeight: 600,
      }}
    >
      {label}
    </Box>
  )
}

// ─── Kanban card ─────────────────────────────────────────────────────────────

interface KanbanCardProps {
  id: string
  contactName: string
  phone?: string
  status: TicketStatus
  priority?: Priority
  assigneeName?: string
  assigneeGradient?: number
  tags?: string[]
  dragging?: boolean
  lastMessage?: string
  ticketId?: string
}

function KanbanCard({
  id,
  contactName,
  phone,
  status,
  priority,
  assigneeName,
  assigneeGradient = 0,
  tags = [],
  dragging = false,
  lastMessage,
  ticketId,
}: KanbanCardProps) {
  const [hovered, setHovered] = useState(false)
  const st = STATUS_STYLES[status]

  return (
    <Box
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={{
        bgcolor: 'background.paper',
        border: '1px solid',
        borderColor: dragging ? 'primary.main' : hovered ? 'rgba(15,91,255,0.3)' : 'divider',
        borderRadius: '12px',
        p: 1.5,
        boxShadow: dragging
          ? shadows.kanbanCardHover
          : hovered
          ? shadows.kanbanCardHover
          : shadows.kanbanCard,
        transform: dragging ? 'rotate(2deg) scale(1.02)' : hovered ? 'translateY(-2px)' : 'none',
        transition: 'all 200ms ease',
        cursor: dragging ? 'grabbing' : 'grab',
        position: 'relative',
        opacity: dragging ? 0.9 : 1,
      }}
    >
      {/* Header */}
      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, flex: 1, minWidth: 0 }}>
          {priority && (
            <Box sx={{ display: 'flex', flexShrink: 0 }}>
              {PRIORITY_ICONS[priority]}
            </Box>
          )}
          <Typography sx={{ fontWeight: 700, fontSize: '0.875rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {contactName}
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            px: '7px',
            height: 20,
            borderRadius: '9999px',
            bgcolor: st.bg,
            color: st.text,
            fontSize: '0.625rem',
            fontWeight: 600,
            flexShrink: 0,
          }}
        >
          <Box sx={{ width: 5, height: 5, borderRadius: '50%', bgcolor: st.dot, flexShrink: 0 }} />
          {st.label}
        </Box>
      </Box>

      {/* Phone */}
      {phone && (
        <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary', mb: 0.75 }}>
          {phone}
        </Typography>
      )}

      {/* Last message */}
      {lastMessage && (
        <Typography
          sx={{
            fontSize: '0.75rem',
            color: 'text.secondary',
            mb: 1,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            bgcolor: 'action.hover',
            borderRadius: '6px',
            px: 1,
            py: '4px',
            fontStyle: 'italic',
          }}
        >
          "{lastMessage}"
        </Typography>
      )}

      {/* Tags */}
      {tags.length > 0 && (
        <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap', mb: 1 }}>
          {tags.map((tag, i) => <CompactTag key={tag} label={tag} index={i} />)}
        </Box>
      )}

      {/* Footer */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 0.5 }}>
        {ticketId && (
          <Typography sx={{ fontSize: '0.625rem', color: 'text.secondary', fontFamily: 'monospace' }}>
            #{ticketId}
          </Typography>
        )}
        {assigneeName ? (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, ml: 'auto' }}>
            <Typography sx={{ fontSize: '0.6875rem', color: 'text.secondary' }}>
              {assigneeName.split(' ')[0]}
            </Typography>
            <Avatar
              sx={{
                width: 22,
                height: 22,
                background: GRADIENTS[assigneeGradient % GRADIENTS.length],
                fontSize: '0.5625rem',
                fontWeight: 700,
              }}
            >
              {assigneeName.split(' ').map((p) => p[0]).join('').slice(0, 2)}
            </Avatar>
          </Box>
        ) : (
          <Box sx={{ ml: 'auto', height: 22 }} />
        )}
      </Box>

      {/* Drag handle (visible on hover) */}
      {hovered && (
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            right: -16,
            transform: 'translateY(-50%)',
            color: 'text.secondary',
            opacity: 0.4,
          }}
        >
          <GripVertical size={14} />
        </Box>
      )}
    </Box>
  )
}

// ─── Kanban column ────────────────────────────────────────────────────────────

function KanbanColumn({ title, count, color, children }: { title: string; count: number; color: string; children: React.ReactNode }) {
  return (
    <Box
      sx={{
        width: 260,
        flexShrink: 0,
        bgcolor: '#F9FAFB',
        borderRadius: '16px',
        p: 1.5,
        boxShadow: shadows.kanbanColumn,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5, px: 0.5 }}>
        <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: color, flexShrink: 0 }} />
        <Typography sx={{ fontWeight: 700, fontSize: '0.875rem', flex: 1 }}>{title}</Typography>
        <Box
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 22,
            height: 22,
            borderRadius: '6px',
            bgcolor: '#E5E7EB',
            fontSize: '0.6875rem',
            fontWeight: 700,
            color: 'text.secondary',
          }}
        >
          {count}
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        {children}
      </Box>
    </Box>
  )
}

function KanbanBoardStory() {
  return (
    <Box>
      <Typography variant="subtitle2" sx={{ mb: 2, color: 'text.secondary', textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '0.7rem' }}>
        CRM Kanban Board
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, overflowX: 'auto', pb: 2 }}>
        <KanbanColumn title="Open" count={3} color="#10B981">
          <KanbanCard id="1" contactName="Akil Mutawakkil" phone="+60 12-345 6789" status="open" priority="high" assigneeName="Sarah K." assigneeGradient={0} tags={['VIP', 'Order']} lastMessage="Is my order ready?" ticketId="T-1041" />
          <KanbanCard id="2" contactName="Jane Doe" phone="+1 (555) 234-5678" status="open" priority="medium" assigneeName="Tom L." assigneeGradient={1} tags={['Support']} ticketId="T-1042" />
          <KanbanCard id="3" contactName="Bob Smith" status="open" priority="low" ticketId="T-1043" />
        </KanbanColumn>

        <KanbanColumn title="In Progress" count={2} color="#3B82F6">
          <KanbanCard id="4" contactName="Carlos Reyes" phone="+34 612 345 678" status="in-progress" priority="high" assigneeName="Akil M." assigneeGradient={2} tags={['Refund', 'Urgent']} lastMessage="I need a refund ASAP" ticketId="T-1038" />
          <KanbanCard id="5" contactName="Priya Nair" status="in-progress" assigneeName="Sarah K." assigneeGradient={0} tags={['Hot Lead']} ticketId="T-1039" />
        </KanbanColumn>

        <KanbanColumn title="Pending" count={2} color="#F59E0B">
          <KanbanCard id="6" contactName="Omar Al-Farsi" status="pending" priority="medium" assigneeName="Tom L." assigneeGradient={1} ticketId="T-1035" />
          <KanbanCard id="7" contactName="Mei Lin" phone="+86 138 0013 8000" status="pending" tags={['Follow Up']} ticketId="T-1036" />
        </KanbanColumn>

        <KanbanColumn title="Resolved" count={1} color="#22C55E">
          <KanbanCard id="8" contactName="Sarah Connor" status="resolved" assigneeName="Akil M." assigneeGradient={2} ticketId="T-1030" />
        </KanbanColumn>
      </Box>

      <Typography variant="subtitle2" sx={{ mt: 5, mb: 2, color: 'text.secondary', textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '0.7rem' }}>
        Dragging State
      </Typography>
      <Box sx={{ maxWidth: 260 }}>
        <KanbanCard id="drag" contactName="Dragging Card" phone="+1 (555) 000-1234" status="in-progress" priority="high" assigneeName="Akil M." assigneeGradient={0} tags={['VIP']} dragging ticketId="T-1044" lastMessage="This card is being dragged" />
      </Box>
    </Box>
  )
}

const meta: Meta = {
  title: 'Organisms/KanbanCard',
  component: KanbanBoardStory,
  tags: ['autodocs'],
}
export default meta

export const KanbanBoard: StoryObj = { render: () => <KanbanBoardStory /> }
