import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Directory for production files
    sourcemap: false, // Disable source maps for smaller bundle size
  },
  server: {
    port: 3000, // Development server port
  },
  base: '/', 
})


