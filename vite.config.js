import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "./", 
  plugins: [react()],
  optimizeDeps: {
    include: ['react-router-dom', 'firebase/auth'], // Combine both dependencies here
  },
  build: {
    rollupOptions: {
      external: ['firebase/auth'],
    }
  }
})
