import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      // "prompt": el usuario decide cuándo actualizar (no interrumpe una entrevista en curso)
      registerType: "prompt",
      includeAssets: ["icon.svg", "apple-touch-icon.png"],
      manifest: {
        name: "Frontend Interview Pro",
        short_name: "Interview Pro",
        description: "Prepara entrevistas técnicas de Frontend: teoría, quizzes, flashcards y entrevistas simuladas.",
        lang: "es",
        start_url: "/",
        display: "standalone",
        background_color: "#0f0f12",
        theme_color: "#0f0f12",
        icons: [
          { src: "pwa-192x192.png", sizes: "192x192", type: "image/png" },
          { src: "pwa-512x512.png", sizes: "512x512", type: "image/png" },
          { src: "pwa-maskable-512x512.png", sizes: "512x512", type: "image/png", purpose: "maskable" }
        ]
      },
      workbox: {
        // Precachea todo (incluidos los chunks de contenido y diagramas) para estudiar sin conexión
        globPatterns: ["**/*.{js,css,html,svg,png,otf,ttf,woff2}"],
        navigateFallback: "/index.html"
      }
    })
  ],
  server: {
    port: 3000
  },
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        // Anotaciones @__PURE__ mal ubicadas dentro de dependencias (p. ej. zod): ruido inofensivo
        if (warning.code === "INVALID_ANNOTATION" && warning.id?.includes("node_modules")) return;
        warn(warning);
      },
      output: {
        chunkFileNames: (chunk) => {
          const moduleFolder = chunk.facadeModuleId?.match(/src\/modules\/([^/]+)\//)?.[1];
          return moduleFolder ? `assets/module-${moduleFolder}-[hash].js` : "assets/[name]-[hash].js";
        },
        // React en un chunk estable para que los cambios de la app no invaliden su caché.
        // El resto (contenido, diagramas, SDK de Anthropic) se divide vía import() dinámico.
        manualChunks(id) {
          if (/node_modules\/.*\/(react|react-dom|scheduler|zustand)\//.test(id)) return "vendor-react";
        }
      }
    }
  }
});
