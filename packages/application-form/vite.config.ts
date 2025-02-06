import tailwind from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    tailwind(),
    tsconfigPaths({
      projects: [
        // To enable vite know the tsconfig.json file for ui package
        path.resolve(__dirname, '../ui/tsconfig.json'),
      ],
    }),
  ],
  resolve: {
    conditions: mode === 'test' ? ['browser'] : [],
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest-setup.js'],
  },
}));
