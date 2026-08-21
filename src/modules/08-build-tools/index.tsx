import { ISection } from "../../types";

export const questionsBuildTools: ISection = {
  title: "Build Tools",
  collapse: "collapseBuildTools",
  icon: "build-tools",
  questions: [
    { title: "¿Qué son las build tools?", response: "Son herramientas que automatizan tareas como compilación, minificación, empaquetado, optimización y despliegue del código para producción.", level: "basico" },
    { title: "¿Cuál es la diferencia entre un bundler y un task runner?", response: "Un bundler (Webpack, Vite, Rollup) empaqueta módulos y optimiza código. Un task runner (Gulp, npm scripts) automatiza tareas repetitivas como limpiar carpetas o ejecutar pruebas.", level: "basico" },
    { title: "¿Qué es Babel y para qué sirve?", response: "Es un transpilador que convierte código moderno (ES6+, JSX, TypeScript) en versiones compatibles con navegadores más antiguos usando presets y plugins configurables.", level: "basico" },
    { title: "¿Qué es un polyfill?", response: "Es código que implementa características modernas de JavaScript en navegadores que no las soportan nativamente. Ejemplo: core-js para Promise, Array.from, etc.", level: "basico" },
    { title: "¿Qué es minificación?", response: "Proceso de eliminar espacios, saltos de línea, comentarios y renombrar variables para reducir el tamaño de archivos sin cambiar funcionalidad. Herramientas: Terser, esbuild.", level: "basico" },
    { title: "¿Qué significa transpilar?", response: "Es convertir código de un lenguaje/versión a otro compatible: TypeScript → JavaScript, JSX → JS, ES2024 → ES5. Diferente de compilar (alto a bajo nivel).", level: "basico" },
    { title: "¿Qué es Webpack?", response: "Empaquetador de módulos que toma dependencias (JS, CSS, imágenes) y las convierte en bundles optimizados. Usa loaders para transformar y plugins para extender el proceso.", level: "medio" },
    { title: "¿Qué es Vite y en qué se diferencia de Webpack?", response: "Vite usa ES Modules nativos en desarrollo (sin bundling, HMR instantáneo). En producción usa Rollup. Vs Webpack: inicio 10-100x más rápido, configuración mínima, soporte nativo de TS/JSX.", level: "medio" },
    { title: "¿Qué es tree shaking?", response: "Técnica de bundlers para eliminar código no utilizado (dead code) del bundle final. Requiere ES Modules (import/export estático). CommonJS no es tree-shakeable.", level: "medio" },
    { title: "¿Qué es el code splitting?", response: "Divide el código en chunks que se cargan bajo demanda: por ruta (lazy routes), por componente (React.lazy), o por vendor (dependencias separadas). Mejora la carga inicial.", level: "medio" },
    { title: "¿Qué es un sourcemap?", response: "Archivo que mapea código minificado/transpilado con el fuente original. Facilita debugging en el browser. Se generan con devtool en Webpack o build.sourcemap en Vite.", level: "medio" },
    { title: "¿Qué diferencia hay entre modo desarrollo y producción?", response: "Desarrollo: velocidad, sourcemaps, HMR, sin minificación, warnings activos. Producción: minificación, tree-shaking, code splitting, sin sourcemaps públicos, optimización de assets.", level: "medio" },
    { title: "¿Qué es esbuild y por qué es tan rápido?", response: "Build tool escrita en Go que transpila y empaqueta JS/TS. Es 10-100x más rápida que Babel/Webpack porque usa paralelismo nativo de Go y evita parseos AST intermedios. Vite lo usa internamente.", level: "avanzado" },
    { title: "¿Qué es Rollup y cuándo se prefiere?", response: "Bundler optimizado para librerías. Genera bundles más pequeños y limpios que Webpack gracias a un tree-shaking superior. Produce ESM, CJS y UMD. Vite lo usa para producción.", level: "avanzado" },
    { title: "¿Qué son los loaders y plugins en Webpack?", response: "Loaders transforman archivos no-JS en módulos (css-loader, ts-loader, file-loader). Plugins extienden el proceso de build (HtmlWebpackPlugin, MiniCssExtractPlugin, BundleAnalyzerPlugin).", level: "avanzado" },
    { title: "¿Qué es el Hot Module Replacement (HMR)?", response: "Permite actualizar módulos en el navegador sin recargar la página completa, manteniendo el estado de la aplicación. Vite lo implementa de forma casi instantánea via ESM.", level: "avanzado" },
    { title: "¿Qué es SWC y cómo se compara con Babel?", response: "SWC es un compilador de JS/TS escrito en Rust, 20-70x más rápido que Babel. Next.js lo usa por defecto. Soporta JSX, TypeScript, minificación y plugins personalizados.", level: "avanzado" },
    { title: "¿Cómo analizarías y optimizarías el tamaño del bundle?", response: "Usar webpack-bundle-analyzer o rollup-plugin-visualizer para ver qué ocupa más. Optimizar: tree-shaking, dynamic imports, reemplazar librerías pesadas (moment → dayjs), compression (gzip/brotli).", level: "avanzado" },
    { title: "¿Qué es Module Federation en Webpack 5?", response: "Permite compartir código entre aplicaciones independientes en runtime, cargando módulos remotos dinámicamente. Es la base técnica de micro-frontends con Webpack.", level: "experto" },
    { title: "¿Qué es Turbopack y en qué se diferencia de Vite?", response: "Turbopack (Vercel) es un bundler en Rust diseñado para Next.js. Usa incremental computation (solo recompila lo que cambió). Vite usa ESM nativo + Rollup. Turbopack promete ser más rápido en proyectos muy grandes.", level: "experto" },
    { title: "¿Cómo implementarías una estrategia de caching de assets en producción?", response: "Content hashing en filenames ([name].[contenthash].js), inmutable Cache-Control headers, chunk splitting para separar vendor code (cambia menos). Service Workers para caching avanzado.", level: "experto" }
  ]
};

export default questionsBuildTools;
