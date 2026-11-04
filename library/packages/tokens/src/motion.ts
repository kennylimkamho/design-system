/**
 * Motion tokens — durations, easing curves, shorthand transition strings,
 * and keyframe definitions for animations used throughout the v2 codebase.
 */

// ─── Durations ────────────────────────────────────────────────────────────────

export const duration = {
  instant: '0ms',
  fast: '120ms',     // hover reactions, micro
  normal: '150ms',   // most state transitions
  moderate: '180ms', // button press, icon scale
  slow: '200ms',     // panel/card transitions
  enter: '220ms',    // sidebar open, drawer enter
  exit: '180ms',     // drawer exit
  typing: '1.4s',    // typing indicator loop
  progress: '400ms', // progress bars
} as const

// ─── Easing curves ────────────────────────────────────────────────────────────

export const easing = {
  linear: 'linear',
  ease: 'ease',
  easeIn: 'ease-in',
  easeOut: 'ease-out',
  easeInOut: 'ease-in-out',
  spring: 'cubic-bezier(0.4, 0, 0.2, 1)',  // MUI standard
  enter: 'cubic-bezier(0.0, 0, 0.2, 1)',
  exit: 'cubic-bezier(0.4, 0, 1, 1)',
  sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
} as const

// ─── Shorthand transitions ────────────────────────────────────────────────────

export const transition = {
  fast: `all ${duration.fast} ${easing.ease}`,
  normal: `all ${duration.normal} ${easing.ease}`,
  moderate: `all ${duration.moderate} ${easing.ease}`,
  slow: `all ${duration.slow} ${easing.ease}`,
  sidebar: `width ${duration.enter} ${easing.spring}`,
  button: `all ${duration.moderate} ${easing.ease}`,
  icon: `transform ${duration.moderate} ${easing.ease}, box-shadow ${duration.moderate} ${easing.ease}`,
  opacity: `opacity ${duration.normal} ${easing.ease}`,
  color: `color ${duration.normal} ${easing.ease}, background-color ${duration.normal} ${easing.ease}`,
} as const

// ─── Keyframe definitions ─────────────────────────────────────────────────────

export const keyframes = {
  bellRing: {
    '0%': { transform: 'rotate(0deg)' },
    '20%': { transform: 'rotate(-12deg)' },
    '40%': { transform: 'rotate(12deg)' },
    '60%': { transform: 'rotate(-8deg)' },
    '80%': { transform: 'rotate(8deg)' },
    '100%': { transform: 'rotate(0deg)' },
  },
  typingDot: {
    '0%, 60%, 100%': { opacity: 0.3, transform: 'scale(0.8)' },
    '30%': { opacity: 1, transform: 'scale(1)' },
  },
  fadeIn: {
    from: { opacity: 0, transform: 'translateY(4px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
  },
  scaleIn: {
    from: { opacity: 0, transform: 'scale(0.95)' },
    to: { opacity: 1, transform: 'scale(1)' },
  },
} as const
