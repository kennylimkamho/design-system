import { SvgIcon } from '@mui/material'

/** Product mark from assets/brand/chatdaddy-mark.svg; not a module glyph. */
export function ChatDaddyMark({ size = 28 }: { size?: number | string }) {
  return <SvgIcon aria-hidden="true" focusable="false" viewBox="0 0 396.39 424.99" sx={{ fontSize: size, flexShrink: 0 }}>
    <polygon points="394.88 105.62 298.85 156.98 295.76 158.63 197.43 106.04 198.22 105.62 197.43 105.62 197.43 0 296.55 53.02 298.85 54.25 394.88 105.62" />
    <polygon points="197.43 106.04 99.1 158.63 94.53 156.19 94.53 266.27 0 316.84 0 105.61 94.53 55.04 98.31 53.02 196.64 105.62 197.43 106.04" />
    <polygon points="396.39 317.65 396.39 319.4 298.85 371.58 298.12 371.97 199 424.99 197.43 424.14 99.88 371.97 94.53 369.11 94.53 266.27 97.52 264.67 197.43 318.11 197.43 319.79 199 318.95 199.79 318.53 298.85 265.54 298.91 265.51 396.39 317.65" />
  </SvgIcon>
}
