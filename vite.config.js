import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
    port: 5173,
    proxy: {
      "/api": {
        target: "https://eduriches-backend-398940408354.europe-west1.run.app", 
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api/, "/api/v_1"), 
      },
    },
  },
});
