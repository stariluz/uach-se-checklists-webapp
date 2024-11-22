
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, 'environment');
  return {
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
    base: process.env.NODE_ENV === 'production'
      ? env.VITE_REPO_NAME || '/'
      : '/',
  }
});