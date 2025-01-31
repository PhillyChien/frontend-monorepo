import tailwind from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
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
});
