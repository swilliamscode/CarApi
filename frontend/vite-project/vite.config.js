import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/cars": "http://localhost:3000",
      "/car": "http://localhost:3000",
    },
  },
})
