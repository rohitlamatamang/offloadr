import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    allowedHosts: ['fb32c563534d.ngrok-free.app', '1bf17543def1.ngrok-free.app', '88256560d6b6.ngrok-free.app', '071288c0089d.ngrok-free.app'],
  },
})
