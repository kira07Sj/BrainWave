import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  base: '/BrainWave/', // Set the base path for the application
  build: {
    outDir: 'dist', // Ensure the output directory matches your Render publish directory
  },
})
