import { fileURLToPath, URL } from 'node:url'
import path from 'path';

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap')
    }
  },
  //https://vitejs.dev/config/server-options
  server: {
    proxy: {
      // string shorthand: http://localhost:5173/foo -> http://localhost:4567/foo
      //'/api': 'http://localhost:3038/api',
      '/api': {
        //
        target: 'http://localhost:3042',
        //target: 'https://tmr.barea.io',
        //changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/'), // Optional if paths remain identical
      },
    },
  }
})
