import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const appRoot = fileURLToPath(new URL('./Desktop/stitch_pure_protein_marketplace/', import.meta.url));
const outputDir = fileURLToPath(new URL('./dist/', import.meta.url));

export default defineConfig({
  root: appRoot,
  plugins: [react()],
  build: {
    outDir: outputDir,
    emptyOutDir: true,
  },
});