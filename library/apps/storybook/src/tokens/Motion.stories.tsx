import type { Meta, StoryObj } from '@storybook/react'
import React, { useState, useCallback } from 'react'
import { Box, Typography, Button } from '@mui/material'
import { duration, easing, transition, keyframes } from '@chatdaddy/tokens'

// ─── Duration bars ────────────────────────────────────────────────────────────

function DurationBar({ name, value }: { name: string; value: string }) {
  const [running, setRunning] = useState(false)

  const replay = useCallback(() => {
    setRunning(false)
    requestAnimationFrame(() => requestAnimationFrame(() => setRunning(true)))
  }, [])

  const ms = parseInt(value, 10) || 1400

  return (
    <Box sx={{ mb: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 0.5 }}>
        <Typography sx={{ fontFamily: 'monospace', fontSize: '0.75rem', width: 80, flexShrink: 0 }}>
          {name}
        </Typography>
        <Typography sx={{ fontFamily: 'monospace', fontSize: '0.75rem', color: 'primary.main', width: 60, flexShrink: 0 }}>
          {value}
        </Typography>
        <Box
          sx={{
            flex: 1,
            height: 10,
            bgcolor: '#E5E7EB',
            borderRadius: '9999px',
            overflow: 'hidden',
            cursor: 'pointer',
          }}
          onClick={replay}
        >
          <Box
            sx={{
              height: '100%',
              bgcolor: 'primary.main',
              borderRadius: '9999px',
              width: running ? '100%' : '0%',
              transition: running ? `width ${ms}ms linear` : 'none',
            }}
          />
        </Box>
        <Typography sx={{ fontSize: '0.7rem', color: 'text.secondary', flexShrink: 0 }}>
          click to replay
        </Typography>
      </Box>
    </Box>
  )
}

// ─── Easing demo ─────────────────────────────────────────────────────────────

function EasingDemo({ name, value }: { name: string; value: string }) {
  const [playing, setPlaying] = useState(false)

  const replay = useCallback(() => {
    setPlaying(false)
    requestAnimationFrame(() => requestAnimationFrame(() => setPlaying(true)))
  }, [])

  return (
    <Box
      sx={{
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: '12px',
        p: 2,
        mb: 1.5,
        bgcolor: 'background.paper',
        cursor: 'pointer',
        '&:hover': { borderColor: 'primary.main' },
      }}
      onClick={replay}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1.5 }}>
        <Typography sx={{ fontWeight: 600, fontSize: '0.8rem' }}>{name}</Typography>
        <Typography sx={{ fontFamily: 'monospace', fontSize: '0.7rem', color: 'text.secondary' }}>
          {value}
        </Typography>
      </Box>
      <Box sx={{ position: 'relative', height: 24, bgcolor: '#F3F4F6', borderRadius: '9999px', overflow: 'visible' }}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: playing ? 'calc(100% - 20px)' : '0px',
            transform: 'translateY(-50%)',
            width: 20,
            height: 20,
            borderRadius: '50%',
            bgcolor: 'primary.main',
            transition: playing ? `left 600ms ${value}` : 'none',
          }}
        />
      </Box>
    </Box>
  )
}

// ─── Keyframe demos ───────────────────────────────────────────────────────────

function BellRingDemo() {
  const [key, setKey] = useState(0)
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Box
        key={key}
        sx={{
          fontSize: '2rem',
          display: 'inline-block',
          '@keyframes bellRing': keyframes.bellRing,
          animation: 'bellRing 0.5s ease',
        }}
      >
        🔔
      </Box>
      <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary', mt: 1, mb: 1 }}>
        bellRing
      </Typography>
      <Button size="small" variant="outlined" onClick={() => setKey((k) => k + 1)}>
        Replay
      </Button>
    </Box>
  )
}

function TypingDotDemo() {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Box
        sx={{
          display: 'inline-flex',
          gap: '5px',
          alignItems: 'center',
          bgcolor: 'background.paper',
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: '14px 14px 14px 4px',
          px: 1.5,
          py: 1,
          boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
        }}
      >
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
      <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary', mt: 1.5 }}>
        typingDot — 1.4s loop
      </Typography>
    </Box>
  )
}

function FadeInDemo() {
  const [key, setKey] = useState(0)
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Box
        key={key}
        sx={{
          display: 'inline-block',
          bgcolor: 'primary.main',
          color: '#fff',
          px: 3,
          py: 1.5,
          borderRadius: '12px',
          fontWeight: 600,
          '@keyframes fadeIn': keyframes.fadeIn,
          animation: 'fadeIn 400ms ease forwards',
        }}
      >
        fadeIn
      </Box>
      <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary', mt: 1, mb: 1 }}>
        fadeIn
      </Typography>
      <Button size="small" variant="outlined" onClick={() => setKey((k) => k + 1)}>
        Replay
      </Button>
    </Box>
  )
}

function ScaleInDemo() {
  const [key, setKey] = useState(0)
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Box
        key={key}
        sx={{
          display: 'inline-block',
          bgcolor: '#8B5CF6',
          color: '#fff',
          px: 3,
          py: 1.5,
          borderRadius: '12px',
          fontWeight: 600,
          '@keyframes scaleIn': keyframes.scaleIn,
          animation: 'scaleIn 300ms ease forwards',
        }}
      >
        scaleIn
      </Box>
      <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary', mt: 1, mb: 1 }}>
        scaleIn
      </Typography>
      <Button size="small" variant="outlined" onClick={() => setKey((k) => k + 1)}>
        Replay
      </Button>
    </Box>
  )
}

function MotionStory() {
  return (
    <Box>
      <Typography variant="h5" sx={{ mb: 1, fontWeight: 700 }}>
        Duration Scale
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
        Click a bar to watch it animate at that duration.
      </Typography>
      <Box sx={{ maxWidth: 600, mb: 6 }}>
        {Object.entries(duration).map(([k, v]) => (
          <DurationBar key={k} name={k} value={v} />
        ))}
      </Box>

      <Typography variant="h5" sx={{ mb: 1, fontWeight: 700 }}>
        Easing Curves
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
        Click a row to watch the dot animate with that easing. All run at 600ms so differences are visible.
      </Typography>
      <Box sx={{ maxWidth: 560, mb: 6 }}>
        {Object.entries(easing).map(([k, v]) => (
          <EasingDemo key={k} name={k} value={v} />
        ))}
      </Box>

      <Typography variant="h5" sx={{ mb: 1, fontWeight: 700 }}>
        Shorthand Transitions
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
        Ready-to-use transition strings.
      </Typography>
      <Box sx={{ mb: 6 }}>
        {Object.entries(transition).map(([k, v]) => (
          <Box
            key={k}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              mb: 1,
              py: 1,
              px: 2,
              bgcolor: 'background.paper',
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: '8px',
            }}
          >
            <Typography sx={{ fontWeight: 600, fontSize: '0.8rem', width: 100, flexShrink: 0 }}>{k}</Typography>
            <Typography sx={{ fontFamily: 'monospace', fontSize: '0.7rem', color: 'text.secondary' }}>
              {v}
            </Typography>
          </Box>
        ))}
      </Box>

      <Typography variant="h5" sx={{ mb: 1, fontWeight: 700 }}>
        Keyframe Animations
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
        Live-running animations. Click replay to restart.
      </Typography>
      <Box sx={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
        <BellRingDemo />
        <TypingDotDemo />
        <FadeInDemo />
        <ScaleInDemo />
      </Box>
    </Box>
  )
}

const meta: Meta = {
  title: 'Tokens/Motion',
  component: MotionStory,
  tags: ['autodocs'],
}
export default meta

export const AllMotion: StoryObj = { render: () => <MotionStory /> }
