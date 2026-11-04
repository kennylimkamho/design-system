import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

// ─── Types ────────────────────────────────────────────────────────────────────

export type NotificationType =
  | 'message'
  | 'channel'
  | 'billing'
  | 'automation'
  | 'mention'
  | 'system'

export interface AppNotification {
  id: string
  type: NotificationType
  title: string
  body: string
  path?: string
  imgUrl?: string
  timestamp: number
  read: boolean
}

// ─── Store ────────────────────────────────────────────────────────────────────

interface NotificationsState {
  notifications: AppNotification[]
  panelOpen: boolean

  push: (notif: Omit<AppNotification, 'id' | 'timestamp' | 'read'>) => void
  markRead: (id: string) => void
  markAllRead: () => void
  remove: (id: string) => void
  clearAll: () => void
  togglePanel: () => void
  openPanel: () => void
  closePanel: () => void

  unreadCount: () => number
}

const MAX_NOTIFICATIONS = 50

export const useNotificationsStore = create<NotificationsState>()(
  devtools(
    immer((set, get) => ({
      notifications: [],
      panelOpen: false,

      push: (notif) =>
        set((state) => {
          const next: AppNotification = {
            ...notif,
            id: crypto.randomUUID(),
            timestamp: Date.now(),
            read: false,
          }
          state.notifications.unshift(next)
          if (state.notifications.length > MAX_NOTIFICATIONS) {
            state.notifications = state.notifications.slice(0, MAX_NOTIFICATIONS)
          }
        }),

      markRead: (id) =>
        set((state) => {
          const n = state.notifications.find((n) => n.id === id)
          if (n) n.read = true
        }),

      markAllRead: () =>
        set((state) => {
          state.notifications.forEach((n) => {
            n.read = true
          })
        }),

      remove: (id) =>
        set((state) => {
          state.notifications = state.notifications.filter((n) => n.id !== id)
        }),

      clearAll: () =>
        set((state) => {
          state.notifications = []
        }),

      togglePanel: () =>
        set((state) => {
          state.panelOpen = !state.panelOpen
        }),

      openPanel: () =>
        set((state) => {
          state.panelOpen = true
        }),

      closePanel: () =>
        set((state) => {
          state.panelOpen = false
        }),

      unreadCount: () => get().notifications.filter((n) => !n.read).length,
    })),
    { name: 'NotificationsStore' }
  )
)
