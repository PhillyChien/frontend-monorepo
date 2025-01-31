import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    tsconfigPaths({
      projects: [
        // To enable vite know the tsconfig.json file for ui package
        path.resolve(__dirname, '../ui/tsconfig.json'),
      ],
    }),
  ],
});
