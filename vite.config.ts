import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['react', 'react-dom', 'styled-components'],
  },
  resolve: {
    alias: {
      "storybook-components":
        "https://storybook-chart.netlify.app/dist/components.es.js",
    },
  },
})
