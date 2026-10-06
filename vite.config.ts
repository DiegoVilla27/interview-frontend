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
        chunkFileNames: (chunk) => {
          const moduleFolder = chunk.facadeModuleId?.match(/src\/modules\/([^/]+)\//)?.[1];
          return moduleFolder ? `assets/module-${moduleFolder}-[hash].js` : "assets/[name]-[hash].js";
        },
        // Vendor estable: cambiar código de la app no invalida la caché de las librerías.
        // El contenido de cada módulo (src/modules) se divide solo vía import() dinámico.
        manualChunks(id) {
          if (/node_modules\/.*\/(react|react-dom|scheduler|zustand)\//.test(id)) return "vendor-react";
          if (id.includes("node_modules")) return "vendor";
        }
      }
    }
  }
});
