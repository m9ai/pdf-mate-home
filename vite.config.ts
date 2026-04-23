import { defineConfig } from 'vite'

// Landing page config - no React, just static HTML
export default defineConfig({
  base: '/pdf-mate/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: 'index.html'
      }
    }
  }
})
