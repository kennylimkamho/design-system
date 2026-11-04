import { memo } from 'react'
import { Box, Tooltip } from '@mui/material'

// ─── Platform logo URLs (official CDN / brand assets) ───────────────────────
// Using Simple Icons CDN — always up-to-date, consistent SVG format

const PLATFORM_LOGOS: Record<string, { src: string; bg: string; label: string }> = {
  wa: {
    src: 'https://cdn.simpleicons.org/whatsapp/ffffff',
    bg: '#25D366',
    label: 'WhatsApp',
  },
  'wa-business-api': {
    src: 'https://cdn.simpleicons.org/whatsapp/ffffff',
    bg: '#25D366',
    label: 'WhatsApp Business',
  },
  instagram: {
    src: 'https://cdn.simpleicons.org/instagram/ffffff',
    bg: 'linear-gradient(135deg, #833AB4, #FD1D1D, #F77737)',
    label: 'Instagram',
  },
  messenger: {
    src: 'https://cdn.simpleicons.org/messenger/ffffff',
    bg: 'linear-gradient(135deg, #0084FF, #0052D4)',
    label: 'Messenger',
  },
  mail: {
    src: 'https://cdn.simpleicons.org/gmail/ffffff',
    bg: '#EA4335',
    label: 'Email',
  },
  tiktok: {
    src: 'https://cdn.simpleicons.org/tiktok/ffffff',
    bg: '#010101',
    label: 'TikTok',
  },
  'tiktok-shop': {
    src: 'https://cdn.simpleicons.org/tiktok/ffffff',
    bg: '#010101',
    label: 'TikTok Shop',
  },
  sms: {
    src: 'https://cdn.simpleicons.org/imessage/ffffff',
    bg: '#34C759',
    label: 'SMS',
  },
  voice: {
    src: 'https://cdn.simpleicons.org/twilio/ffffff',
    bg: '#F22F46',
    label: 'Voice',
  },
  telegram: {
    src: 'https://cdn.simpleicons.org/telegram/ffffff',
    bg: '#26A5E4',
    label: 'Telegram',
  },
  line: {
    src: 'https://cdn.simpleicons.org/line/ffffff',
    bg: '#06C755',
    label: 'LINE',
  },
  mock: {
    src: 'https://cdn.simpleicons.org/ghost/ffffff',
    bg: '#7D7D7D',
    label: 'Mock',
  },
}

const FALLBACK = {
  bg: '#6B7280',
  label: 'Unknown',
}

export interface PlatformIconProps {
  /** Platform key e.g. 'wa', 'instagram', 'messenger' */
  platform: string
  /** Size of the icon container in px — default 20 */
  size?: number
  /** Show MUI Tooltip — default true */
  tooltip?: boolean
  /** Extra sx on container */
  sx?: object
}

export const PlatformIcon = memo(function PlatformIcon({
  platform,
  size = 20,
  tooltip = true,
  sx = {},
}: PlatformIconProps) {
  const cfg = PLATFORM_LOGOS[platform]
  const imgSize = Math.round(size * 0.6)

  const badge = (
    <Box
      sx={{
        width: size,
        height: size,
        borderRadius: '50%',
        background: cfg?.bg ?? FALLBACK.bg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        overflow: 'hidden',
        border: '2px solid',
        borderColor: 'background.paper',
        ...sx,
      }}
    >
      {cfg ? (
        <Box
          component="img"
          src={cfg.src}
          alt={cfg.label}
          width={imgSize}
          height={imgSize}
          sx={{ display: 'block', objectFit: 'contain', flexShrink: 0 }}
          // Graceful fallback: hide broken img so bg color still shows
          onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
            e.currentTarget.style.display = 'none'
          }}
        />
      ) : (
        <Box
          component="span"
          sx={{
            color: '#fff',
            fontSize: `${imgSize * 0.75}px`,
            fontWeight: 700,
            lineHeight: 1,
          }}
        >
          {platform.charAt(0).toUpperCase()}
        </Box>
      )}
    </Box>
  )

  if (!tooltip) return badge

  return (
    <Tooltip title={cfg?.label ?? platform} placement="top" arrow>
      {badge}
    </Tooltip>
  )
})
