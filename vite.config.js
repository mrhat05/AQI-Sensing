import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Create separate chunks for each third-party library
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        }
      }
    },

    chunkSizeWarningLimit: 1000 
  }
})
