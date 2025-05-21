import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    open: true,  // automatically opens browser
    port: 3000,  // you can customize the port
    proxy: {
      '/api': {
        target: 'http://your-api-server.com',
        changeOrigin: true,
      },
    },
  },
  
});