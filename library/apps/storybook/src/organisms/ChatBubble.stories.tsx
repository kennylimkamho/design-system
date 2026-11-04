import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import { Check, CheckCheck, Image } from 'lucide-react'
import { keyframes } from '@chatdaddy/tokens'

// ─── Types ────────────────────────────────────────────────────────────────────

type MessageStatus = 'pending' | 'sent' | 'delivered' | 'read'
type BubbleVariant = 'sent' | 'received' | 'note'

// ─── Status icon ─────────────────────────────────────────────────────────────

function StatusIcon({ status }: { status: MessageStatus }) {
  if (status === 'pending') return <Check size={12} style={{ opacity: 0.35 }} />
  if (status === 'sent') return <Check size={12} style={{ opacity: 0.55 }} />
  if (status === 'delivered') return <CheckCheck size={12} style={{ opacity: 0.55 }} />
  return <CheckCheck size={12} style={{ color: '#60A5FA', opacity: 0.9 }} />
}

// ─── Quote preview ────────────────────────────────────────────────────────────

function QuotePreview({ text, sender, sent }: { text: string; sender: string; sent: boolean }) {
  return (
    <Box
      sx={{
        borderLeft: '3px solid',
        borderColor: sent ? 'rgba(255,255,255,0.5)' : 'primary.main',
        bgcolor: sent ? 'rgba(255,255,255,0.12)' : 'rgba(15,91,255,0.06)',
        borderRadius: '0 6px 6px 0',
        px: 1.25,
        py: 0.75,
        mb: 0.75,
      }}
    >
      <Typography sx={{ fontSize: '0.6875rem', fontWeight: 700, color: sent ? 'rgba(255,255,255,0.85)' : 'primary.main', mb: '2px' }}>
        {sender}
      </Typography>
      <Typography sx={{ fontSize: '0.75rem', color: sent ? 'rgba(255,255,255,0.7)' : 'text.secondary', lineHeight: 1.4 }}>
        {text}
      </Typography>
    </Box>
  )
}

// ─── Reaction pill ────────────────────────────────────────────────────────────

function ReactionPill({ emoji, count, active }: { emoji: string; count: number; active?: boolean }) {
  return (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '3px',
        px: '7px',
        height: 22,
        borderRadius: '10px',
        border: '1.5px solid',
        borderColor: active ? 'rgba(15,91,255,0.4)' : 'rgba(0,0,0,0.08)',
        bgcolor: active ? 'rgba(15,91,255,0.08)' : 'rgba(0,0,0,0.04)',
        cursor: 'pointer',
        fontSize: '0.75rem',
        transition: 'all 120ms ease',
        '&:hover': { borderColor: 'primary.main', bgcolor: 'rgba(15,91,255,0.1)' },
      }}
    >
      <span>{emoji}</span>
      <Typography sx={{ fontSize: '0.6875rem', fontWeight: 600, color: active ? 'primary.main' : 'text.secondary' }}>
        {count}
      </Typography>
    </Box>
  )
}

// ─── Core bubble ─────────────────────────────────────────────────────────────

interface BubbleProps {
  variant: BubbleVariant
  text?: string
  time: string
  status?: MessageStatus
  sender?: string
  quote?: { text: string; sender: string }
  image?: boolean
  reactions?: Array<{ emoji: string; count: number; active?: boolean }>
  typing?: boolean
}

function ChatBubble({ variant, text, time, status, sender, quote, image, reactions, typing }: BubbleProps) {
  const sent = variant === 'sent'
  const note = variant === 'note'

  const bubbleStyle = sent
    ? {
        bgcolor: '#0F5BFF',
        color: '#fff',
        borderRadius: '14px 14px 4px 14px',
        boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
      }
    : note
    ? {
        bgcolor: '#FEF3C7',
        color: '#78350F',
        borderRadius: '14px 14px 14px 4px',
        borderLeft: '3px solid #F59E0B',
        boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
      }
    : {
        bgcolor: 'background.paper',
        color: 'text.primary',
        borderRadius: '14px 14px 14px 4px',
        boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
        border: '1px solid rgba(0,0,0,0.06)',
      }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: sent ? 'flex-end' : 'flex-start',
        mb: 1,
      }}
    >
      <Box sx={{ maxWidth: 320, minWidth: 80 }}>
        {/* Sender name (received only) */}
        {!sent && sender && (
          <Typography
            sx={{
              fontSize: '0.6875rem',
              fontWeight: 700,
              color: 'primary.main',
              mb: '3px',
              ml: '2px',
            }}
          >
            {sender}
          </Typography>
        )}

        <Box sx={{ ...bubbleStyle, px: 1.5, pt: 1, pb: 0.75, position: 'relative' }}>
          {/* Quote */}
          {quote && <QuotePreview text={quote.text} sender={quote.sender} sent={sent} />}

          {/* Image placeholder */}
          {image && (
            <Box
              sx={{
                width: 220,
                height: 160,
                borderRadius: '8px',
                bgcolor: sent ? 'rgba(255,255,255,0.15)' : '#F3F4F6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mb: 0.5,
                overflow: 'hidden',
              }}
            >
              <Image size={32} style={{ opacity: 0.3 }} />
            </Box>
          )}

          {/* Typing indicator */}
          {typing ? (
            <Box sx={{ display: 'flex', gap: '5px', alignItems: 'center', py: '3px', px: '2px' }}>
              {[0, 1, 2].map((i) => (
                <Box
                  key={i}
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    bgcolor: '#9CA3AF',
                    '@keyframes typingDot': keyframes.typingDot,
                    animation: `typingDot 1.4s ease-in-out infinite`,
                    animationDelay: `${i * 0.2}s`,
                  }}
                />
              ))}
            </Box>
          ) : (
            <Typography
              sx={{
                fontSize: '0.875rem',
                lineHeight: 1.5,
                fontStyle: note ? 'italic' : 'normal',
                color: 'inherit',
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-word',
              }}
            >
              {text}
            </Typography>
          )}

          {/* Timestamp + status */}
          {!typing && (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                gap: '3px',
                mt: '3px',
              }}
            >
              <Typography
                sx={{
                  fontSize: '0.625rem',
                  color: sent ? 'rgba(255,255,255,0.65)' : 'text.secondary',
                  lineHeight: 1,
                }}
              >
                {time}
              </Typography>
              {sent && status && (
                <Box sx={{ color: sent ? 'rgba(255,255,255,0.75)' : undefined, display: 'flex' }}>
                  <StatusIcon status={status} />
                </Box>
              )}
            </Box>
          )}
        </Box>

        {/* Reactions */}
        {reactions && reactions.length > 0 && (
          <Box sx={{ display: 'flex', gap: 0.5, mt: '4px', flexWrap: 'wrap', justifyContent: sent ? 'flex-end' : 'flex-start' }}>
            {reactions.map((r, i) => (
              <ReactionPill key={i} emoji={r.emoji} count={r.count} active={r.active} />
            ))}
          </Box>
        )}
      </Box>
    </Box>
  )
}

// ─── Conversation thread ──────────────────────────────────────────────────────

function DateSeparator({ label }: { label: string }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', my: 2, gap: 1 }}>
      <Box sx={{ flex: 1, height: '1px', bgcolor: 'divider' }} />
      <Typography sx={{ fontSize: '0.6875rem', color: 'text.secondary', fontWeight: 600, px: 1, bgcolor: 'background.default', borderRadius: '9999px' }}>
        {label}
      </Typography>
      <Box sx={{ flex: 1, height: '1px', bgcolor: 'divider' }} />
    </Box>
  )
}

function ConversationThread() {
  return (
    <Box
      sx={{
        bgcolor: '#F0F2F5',
        borderRadius: '16px',
        p: 2,
        maxWidth: 480,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <DateSeparator label="Today" />

      <ChatBubble variant="received" sender="Akil M." text="Hey! Is my order ready?" time="9:41 AM" />
      <ChatBubble
        variant="sent"
        text="Hi Akil! Let me check that for you right now 😊"
        time="9:42 AM"
        status="read"
      />
      <ChatBubble
        variant="sent"
        text="Yes, your order #4521 has been shipped! You should receive it by Thursday."
        time="9:43 AM"
        status="delivered"
        reactions={[{ emoji: '🎉', count: 1, active: true }, { emoji: '👍', count: 2 }]}
      />
      <ChatBubble
        variant="received"
        sender="Akil M."
        text="Awesome, thank you! Could you share the tracking number?"
        time="9:45 AM"
        quote={{ text: "Yes, your order #4521 has been shipped!", sender: "Support" }}
      />
      <ChatBubble
        variant="sent"
        text="Sure! Tracking: TRK-2024-88921-XZ"
        time="9:46 AM"
        status="sent"
      />
      <ChatBubble variant="note" text="Customer is expecting delivery on Thursday. Follow up if no update by Wed." time="9:47 AM" />
      <ChatBubble
        variant="sent"
        image
        text="Here's a photo of the packed order 📦"
        time="9:48 AM"
        status="sent"
      />
      <ChatBubble variant="received" sender="Akil M." typing time="" />
    </Box>
  )
}

function ChatBubbleStory() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <Box>
        <Typography variant="subtitle2" sx={{ mb: 2, color: 'text.secondary', textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '0.7rem' }}>
          Full Conversation Thread
        </Typography>
        <ConversationThread />
      </Box>

      <Box>
        <Typography variant="subtitle2" sx={{ mb: 2, color: 'text.secondary', textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '0.7rem' }}>
          Sent — All Statuses
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 1, maxWidth: 380 }}>
          {(['pending', 'sent', 'delivered', 'read'] as MessageStatus[]).map((status) => (
            <ChatBubble key={status} variant="sent" text={`Status: ${status}`} time="10:00 AM" status={status} />
          ))}
        </Box>
      </Box>

      <Box>
        <Typography variant="subtitle2" sx={{ mb: 2, color: 'text.secondary', textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '0.7rem' }}>
          Individual Variants
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
          <ChatBubble variant="sent" text="This is a sent message with read status." time="11:00 AM" status="read" />
          <ChatBubble variant="received" sender="Jane Doe" text="This is a received message with sender name." time="11:01 AM" />
          <ChatBubble variant="note" text="This is an internal note — visible to agents only." time="11:02 AM" />
          <ChatBubble variant="received" sender="Bot" typing time="" />
        </Box>
      </Box>
    </Box>
  )
}

const meta: Meta = {
  title: 'Organisms/ChatBubble',
  component: ChatBubbleStory,
  tags: ['autodocs'],
}
export default meta

export const FullThread: StoryObj = {
  render: () => (
    <Box>
      <Typography variant="subtitle2" sx={{ mb: 2, color: 'text.secondary', textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '0.7rem' }}>
        Conversation Thread
      </Typography>
      <ConversationThread />
    </Box>
  ),
}

export const AllVariants: StoryObj = { render: () => <ChatBubbleStory /> }
