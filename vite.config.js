import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/AdminPanel/',
  build: {
    cssCodeSplit: true, // Ensure CSS is properly bundled
    manifest: true,     // Helps with asset tracking
  }
});
