import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  proxy: {
    '/weatherapi': {
      target: 'http://api.weatherapi.com/v1',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/weatherapi/, ''),
    },
  },
})
