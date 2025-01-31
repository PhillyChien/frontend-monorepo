import tailwind from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vitest/config';

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwind()],
  resolve: {
    conditions: mode === 'test' ? ['browser'] : [],
    alias: {
      '@lib': path.resolve(__dirname, 'src/lib'),
      '@components': path.resolve(__dirname, 'src/components'),
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest-setup.js'],
  },
}));
