import type { Preview } from '@storybook/react'
import React from 'react'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { createAppTheme } from '@chatdaddy/theme'

const lightTheme = createAppTheme('light')
const darkTheme = createAppTheme('dark')
const curatedStoryIds = new Set([
  'organisms-app-derived-navigation--primary-rail',
  'organisms-app-derived-navigation--secondary-menu',
  'organisms-app-derived-inbox-filters--controlled-filters-and-actions',
  'icons-moduleicon--all-approved-modules',
  'icons-moduleicon--light-and-dark-surfaces',
])

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Theme mode',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: ['light', 'dark'],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme === 'dark' ? darkTheme : lightTheme
      return (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div style={{ padding: 24, minHeight: '100vh', background: theme.palette.background.default }}>
            <div role="note" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, marginBottom: 24, padding: '10px 14px', borderRadius: 10, border: `1px solid ${theme.palette.divider}`, background: theme.palette.background.paper, color: theme.palette.text.secondary, fontSize: 13 }}>
              <span>{curatedStoryIds.has(context.id) ? 'Package-backed 示範 · App 採用仍待驗證；請先讀 Handbook 規則。' : '舊／參考 Story · 並非目前標準；請先讀 Handbook，再核對原始碼。'}</span>
              <a href="https://kennylimkamho.github.io/design-system/handbook/#start" target="_blank" rel="noopener noreferrer" style={{ color: theme.palette.primary.main, fontWeight: 600 }}>開啟 Handbook ↗</a>
            </div>
            <Story />
          </div>
        </ThemeProvider>
      )
    },
  ],
  parameters: {
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    backgrounds: { disable: true },
  },
}

export default preview
