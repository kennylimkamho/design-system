# @chatdaddy/icons

Icon components for the ChatDaddy design system.

## Contents

- `AppIcon` — Cinematic icon wrapper with gradient backgrounds, glow effects, and hover animations (wraps lucide-react icons)
- `Icon` — Inline bare icon drop-in for MUI icons
- `PlatformIcon` — Platform logo badge (WhatsApp, Instagram, Messenger, etc.) with tooltip

## Usage

```tsx
import { AppIcon, Icon, PlatformIcon } from '@chatdaddy/icons'
import { Users, Phone, MessageSquare } from 'lucide-react'

// Gradient container with glow
<AppIcon icon={Users} color="indigo" size="lg" glow />

// Bare icon with color
<AppIcon icon={Phone} color="#3B82F6" bare size={20} />

// Inline icon (MUI-style drop-in)
<Icon icon={MessageSquare} size={18} color="currentColor" />

// Platform badge
<PlatformIcon platform="wa" size={24} />
<PlatformIcon platform="instagram" size={20} tooltip={false} />
```

## Supported platforms

`wa`, `wa-business-api`, `instagram`, `messenger`, `mail`, `tiktok`, `tiktok-shop`, `sms`, `voice`, `telegram`, `line`, `mock`
