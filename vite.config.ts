
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/beautyverse/',

  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true
  },

  preview: {
    host: '0.0.0.0',
    port: 4173,
    strictPort: true
  },

  build: {
    target: 'es2022',
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'esbuild',
    cssCodeSplit: true,
    emptyOutDir: true
  },

  resolve: {
    alias: {
      '@': '/src'
    }
  }
});
