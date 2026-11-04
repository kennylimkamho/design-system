import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@chatdaddy/tokens': path.resolve(__dirname, '../../packages/tokens/src/index.ts'),
      '@chatdaddy/theme': path.resolve(__dirname, '../../packages/theme/src/index.ts'),
      '@chatdaddy/icons': path.resolve(__dirname, '../../packages/icons/src/index.ts'),
      '@chatdaddy/stores': path.resolve(__dirname, '../../packages/stores/src/index.ts'),
      '@chatdaddy/components': path.resolve(__dirname, '../../packages/components/src/index.ts'),
    },
  },
})
