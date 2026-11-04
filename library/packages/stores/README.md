# @chatdaddy/stores

Zustand stores for ChatDaddy global client state. Framework-agnostic — no API calls, no React Query, just pure client state.

## Contents

- `useAuthStore` — Token, teamId, user, isLoggedIn. Persisted to localStorage as `auth-v2`. URL teamId takes priority over persisted.
- `waitForAuthHydration()` — Wait for Zustand persist hydration before reading auth state (use in router beforeLoad).
- `useUIStore` — Sidebar open/closed, theme mode, toast notifications. Persisted as `ui-v2`.
- `useNotificationsStore` — In-app notification panel. Push, mark read, clear. Not persisted (ephemeral).

## Usage

```ts
import { useAuthStore, useUIStore, useNotificationsStore, waitForAuthHydration } from '@chatdaddy/stores'

// Auth
const { isLoggedIn, teamId, token, setAuth, logout } = useAuthStore()

// UI
const { themeMode, setThemeMode, addToast } = useUIStore()

// Notifications
const { push, unreadCount } = useNotificationsStore()
push({ type: 'message', title: 'New message', body: 'Hello!' })

// In router beforeLoad
await waitForAuthHydration()
```
