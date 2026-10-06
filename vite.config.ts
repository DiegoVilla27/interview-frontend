import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  },
  build: {
    rollupOptions: {
      output: {
        // Chunks estables: cambiar código de la app no invalida la caché de vendor ni de contenido
        manualChunks(id) {
          if (/node_modules\/.*\/(react|react-dom|scheduler|zustand)\//.test(id)) return "vendor-react";
          if (id.includes("node_modules")) return "vendor";
          if (id.includes("/src/modules/")) return "questions";
        }
      }
    }
  }
});
