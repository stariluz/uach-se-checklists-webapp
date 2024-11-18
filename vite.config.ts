import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      scopeBehaviour: 'local', // Comportamiento por defecto para la mayoría
    },
  },
  server: {
    port: 5173,
    host: '0.0.0.0'
  },
  resolve: {
    alias: {
      'src': "/src",
    },
  },
});