import { create } from 'zustand'
import { persist, devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

interface User {
  id: string
  name: string
  email: string
  phoneNumber: string
  avatarUrl?: string
}

interface AuthState {
  token: string | null
  refreshToken: string | null
  teamId: string
  user: User | null
  isLoggedIn: boolean

  setAuth: (token: string, refreshToken: string, teamId: string, user: User) => void
  setToken: (token: string) => void
  setTeamId: (teamId: string) => void
  logout: () => void
}

/**
 * Old frontend: isLoggedIn = !!refreshToken && !!teamId
 * Recomputed on every mutation AND during hydration merge.
 */
function computeLoggedIn(state: { refreshToken: string | null; teamId: string }): boolean {
  return !!state.refreshToken && !!state.teamId
}

/**
 * Read teamId from URL query params.
 * Priority matches old frontend: URL param > persisted > default
 * (Old frontend: AuthStore.ts useTeamId lines 563-577)
 */
function getUrlTeamId(): string | null {
  return new URLSearchParams(window.location.search).get('teamId')
}

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      immer((set) => ({
        token: null,
        refreshToken: null,
        teamId: '',
        user: null,
        isLoggedIn: false,

        setAuth: (token, refreshToken, teamId, user) =>
          set((state) => {
            state.token = token
            state.refreshToken = refreshToken
            state.teamId = teamId
            state.user = user
            state.isLoggedIn = computeLoggedIn(state)
          }),

        setToken: (token) =>
          set((state) => {
            state.token = token
          }),

        setTeamId: (teamId) =>
          set((state) => {
            state.teamId = teamId
            state.isLoggedIn = computeLoggedIn(state)
          }),

        logout: () =>
          set((state) => {
            state.token = null
            state.refreshToken = null
            state.teamId = ''
            state.user = null
            state.isLoggedIn = false
          }),
      })),
      {
        name: 'auth-v2',
        partialize: (state) => ({
          token: state.token,
          refreshToken: state.refreshToken,
          teamId: state.teamId,
          user: state.user,
        }),
        /**
         * Custom merge replaces onRehydrateStorage.
         *
         * Why: onRehydrateStorage runs AFTER setState — direct mutation
         * doesn't trigger Zustand subscribers, so isLoggedIn stays false
         * after hydration. The merge function runs BEFORE setState, so the
         * computed isLoggedIn is included in the state that gets set.
         *
         * Also syncs teamId from URL params (same priority as old frontend).
         */
        merge: (persistedState, currentState) => {
          const persisted = persistedState as Partial<AuthState> | undefined
          if (!persisted) return currentState

          const merged = { ...currentState, ...persisted }

          // URL teamId takes priority (old frontend: useTeamId hook)
          const urlTeamId = getUrlTeamId()
          if (urlTeamId && urlTeamId !== persisted.teamId) {
            merged.teamId = urlTeamId
            merged.token = null // Force token refresh for new team
          }

          // Recompute isLoggedIn from merged state
          merged.isLoggedIn = computeLoggedIn(merged as AuthState)

          return merged as AuthState
        },
      }
    ),
    { name: 'AuthStore' }
  )
)

/**
 * Wait for Zustand persist to finish hydrating from localStorage.
 *
 * Why: Zustand persist hydration is async (uses await internally even
 * for synchronous localStorage). Without this, router beforeLoad reads
 * the initial state (isLoggedIn: false) and redirects to login.
 */
export async function waitForAuthHydration(): Promise<void> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const persistApi = (useAuthStore as any).persist as {
    hasHydrated: () => boolean
    onFinishHydration: (fn: () => void) => () => void
  }
  if (persistApi.hasHydrated()) return

  await new Promise<void>((resolve) => {
    const unsub = persistApi.onFinishHydration(() => {
      unsub()
      resolve()
    })
  })
}
