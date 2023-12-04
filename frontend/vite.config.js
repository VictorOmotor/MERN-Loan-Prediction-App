import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://mern-cash2go.onrender.com',
        secure: false,
      },
    },
  },
  plugins: [react()],
});
