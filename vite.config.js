import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            const parts = id.toString().split('node_modules/');
            return parts.length > 1 ? parts[1].split('/')[0] : null;
          }
        }
        
      }
    },
    chunkSizeWarningLimit: 1000 
  }
})
