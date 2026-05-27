/// <reference types='vite/client' />

import {fileURLToPath, URL} from 'node:url';
import {loadEnv} from 'vite';
import {defineConfig} from 'vitest/config';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({mode}) => ({
  base: loadEnv(mode, process.cwd(), '').VITE_BASE_URL,
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
  },
  css: {
    lightningcss: {
      errorRecovery: true,
    },
  },
}));
