import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'styled-system': new URL('./styled-system', import.meta.url).pathname,
    },
  },
})
