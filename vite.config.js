import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        // Mark Getlocation.jsx as external
        'src/components/Getlocation.jsx',
        './src/components/weather.css'
      ],
    },
  },
});
