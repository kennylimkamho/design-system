# @chatdaddy/theme

MUI theme factory for ChatDaddy. Creates a fully configured MUI v5 theme with brand colors, typography, shape, shadows, and component overrides.

## Contents

- `createAppTheme(mode)` — Creates MUI theme for `'light'` or `'dark'` mode
- Custom palette entries: `palette.shell.*` for sidebar/navbar colors

## Usage

```tsx
import { createAppTheme } from '@chatdaddy/theme'
import { ThemeProvider, CssBaseline } from '@mui/material'

const theme = createAppTheme('light')

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* ... */}
    </ThemeProvider>
  )
}
```

## Dependencies

- `@chatdaddy/tokens` — Design tokens (peer)
- `@mui/material` — MUI v5 (peer)
- `@mui/x-data-grid` — DataGrid theme augmentation (peer)
