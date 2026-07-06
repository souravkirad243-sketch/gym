import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    noDiscovery: true,
    include: [],
  },
  server: {
    fs: {
      strict: true,
      allow: [process.cwd()],
    },
  },
});
