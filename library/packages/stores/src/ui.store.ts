import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import type { ThemeMode } from '@chatdaddy/tokens'

/**
 * Global UI state — layout, modals, toasts, theme mode.
 * Pure client state — nothing from the API lives here.
 */
interface UIState {
  // Sidebar
  sidebarOpen: boolean
  toggleSidebar: () => void

  // Theme
  themeMode: ThemeMode
  setThemeMode: (mode: ThemeMode) => void

  // Toast notifications
  toasts: Toast[]
  addToast: (toast: Omit<Toast, 'id'>) => void
  removeToast: (id: string) => void
}

interface Toast {
  id: string
  message: string
  severity: 'success' | 'error' | 'warning' | 'info'
  duration?: number
}

export const useUIStore = create<UIState>()(
  devtools(
    persist(
      immer((set) => ({
        sidebarOpen: false,

        toggleSidebar: () =>
          set((state) => {
            state.sidebarOpen = !state.sidebarOpen
          }),

        themeMode: 'light' as ThemeMode,

        setThemeMode: (mode) =>
          set((state) => {
            state.themeMode = mode
          }),

        toasts: [],

        addToast: (toast) =>
          set((state) => {
            state.toasts.push({ ...toast, id: crypto.randomUUID() })
          }),

        removeToast: (id) =>
          set((state) => {
            state.toasts = state.toasts.filter((t) => t.id !== id)
          }),
      })),
      {
        name: 'ui-v2',
        partialize: (state) => ({
          sidebarOpen: state.sidebarOpen,
          themeMode: state.themeMode,
        }),
      }
    ),
    { name: 'UIStore' }
  )
)
