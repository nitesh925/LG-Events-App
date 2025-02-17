import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react()],
  
  optimizeDeps: {
    include: ['react-router-dom', 'firebase/auth', 'react-icons/fa'], // Explicitly include dependencies
  },
  
  build: {
    rollupOptions: {
      external: ['firebase/auth', 'react-icons/fa'], // Externalize if needed

      output: {
        manualChunks(id) {
          // Manually split specific large dependencies into separate chunks
          if (id.includes('react-router-dom')) {
            return 'react-router-dom';
          }
          if (id.includes('firebase/auth')) {
            return 'firebase-auth';
          }
          if (id.includes('react-icons/fa')) {
            return 'react-icons-fa';
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Increase chunk size warning limit if necessary
  },
});
