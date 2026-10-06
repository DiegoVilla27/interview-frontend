import { ISection } from "../../types";

export const questionsBuildTools: ISection = {
  title: "Build Tools",
  collapse: "collapseBuildTools",
  icon: "build-tools",
  category: "arquitectura-ops",
  description: "Empaquetadores modernos (Vite, Webpack, Rollup), tree-shaking, code splitting y optimización.",
  questions: [
    {
        "title": "¿Cuál es la diferencia arquitectónica fundamental entre un Compilador/Transpilador (Babel, SWC, esbuild) y un Bundler (Vite, Webpack, Rollup, Turbopack)?",
        "response": "En la ingeniería frontend moderna, confundir un **compilador/transpilador** con un **empaquetador (bundler)** es un error conceptual frecuente.\n\n### 1. Compilador / Transpilador (Nivel de Archivo Aislado):\n- **Función**: Toma un archivo de código fuente en un lenguaje o sintaxis moderna y lo traduce a otra sintaxis compatible (típicamente JavaScript estándar).\n- **Ejemplos**: Babel, SWC (Rust), esbuild (Go), `tsc` (TypeScript Compiler).\n- **Alcance**: Opera **archivo por archivo (1:1)**. Convierte `Button.tsx` en `Button.js`, eliminando anotaciones de tipo TS o desazucarando JSX a `React.createElement` / `jsxRuntime`.\n- **Limitación**: No sabe cómo se relacionan los archivos entre sí; no resuelve rutas complejas de dependencias en `node_modules` ni ensambla un artefacto final listo para la red.\n\n### 2. Bundler / Empaquetador (Nivel de Grafo de Módulos):\n- **Función**: Recibe uno o más puntos de entrada (`entry points`), rastrea todas las sentencias `import`/`export` y construye un **Grafo Acíclico Dirigido (DAG)** de dependencias.\n- **Ejemplos**: Webpack, Rollup, Vite (híbrido dev/prod), Turbopack, Parcel.\n- **Alcance**: Resuelve assets heterogéneos (JS, CSS, imágenes, fuentes), ejecuta **Tree Shaking** para podar código muerto, divide el código en chunks asíncronos (**Code Splitting**) y produce los bundles optimizados que se despliegan en el servidor o CDN.",
        "codeExample": {
            "language": "typescript",
            "code": "// 1. El Compilador (ej. SWC / Babel) solo transforma este archivo individual:\n// Entrada (src/math.ts):\nexport const multiply = (a: number, b: number): number => a * b;\n\n// Salida de SWC (dist/math.js):\nexport const multiply = (a, b) => a * b;\n\n// 2. El Bundler (Rollup / Vite / Webpack) analiza el grafo completo:\n// Entrada (src/index.ts):\nimport { multiply } from './math';\nconsole.log(multiply(2, 4));\n\n// Salida del Bundler (dist/assets/index.a8f9c2.js):\n// Resuelve la dependencia, aplica scope hoisting e inlining:\nconsole.log(8);"
        },
        "visualDiagram": {
            "id": "diag-bld-01",
            "title": "Compilador / Transpilador vs Bundler: Separación de Responsabilidades",
            "caption": "El compilador realiza transformaciones sintácticas 1:1 de archivo a archivo; el bundler procesa el grafo completo de dependencias para generar chunks de producción.",
            "diagramType": "build-bundler-vs-compiler-pipeline"
        },
        "interviewTips": {
            "whatInterviewersWant": "Demostrar claridad conceptual: un compilador transforma la sintaxis de un archivo en aislamiento, mientras un bundler comprende la topología del grafo completo de la aplicación.",
            "commonPitfalls": [
                "Afirmar que Babel puede generar el bundle final de una aplicación sin un bundler como Webpack o Rollup.",
                "Creer que Vite es solo un bundler cuando en realidad es un servidor de desarrollo ESM con esbuild y Rollup como motor de empaquetado."
            ],
            "followUps": [
                "¿Qué diferencia hay entre transpilar y minificar?",
                "¿Por qué Vite usa esbuild para transformar pero Rollup para empaquetar?"
            ]
        },
        "quiz": {
            "question": "¿Cuál es la principal responsabilidad de un Bundler que un compilador puro como Babel o tsc no realiza?",
            "options": [
                "Eliminar tipos de TypeScript de los archivos",
                "Construir el grafo de dependencias de la aplicación y agrupar múltiples módulos en chunks optimizados con code-splitting y tree-shaking",
                "Ejecutar los tests unitarios en el navegador",
                "Comprobar las reglas de ESLint en tiempo real"
            ],
            "correctIndex": 1,
            "explanation": "Los compiladores operan sobre archivos individuales sin visión del grafo global. Los bundlers construyen el grafo de dependencias completo para generar chunks optimizados, empaquetar CSS y aplicar tree-shaking."
        },
        "level": "basico"
    },
    {
        "title": "¿Cómo funciona internamente la arquitectura de Webpack basada en Tapable Hooks, Loaders (transformación) y Plugins (ciclo de vida)?",
        "response": "Webpack no es un simple script de empaquetado; es un **motor basado en eventos** orquestado por la librería **`Tapable`**, que permite extender cada fase de la compilación mediante hooks sincrónicos, asincrónicos, en cascada o en paralelo.\n\n### 1. Loaders (Transformación de Módulos):\n- Los Loaders son funciones puras que toman el contenido de un archivo no-JavaScript (o JS moderno) y lo transforman en un módulo JS válido.\n- **Regla de Ejecución**: Se evalúan de **derecha a izquierda (bottom-to-top)** en el array `use`. Para `['style-loader', 'css-loader', 'sass-loader']`:\n  1. `sass-loader`: Compila SCSS a CSS estándar.\n  2. `css-loader`: Resuelve `@import` y `url()` convirtiendo el CSS en un módulo JS exportable.\n  3. `style-loader`: Inyecta el CSS en el DOM mediante etiquetas `<style>`.\n\n### 2. Plugins & Tapable (Ciclo de Vida Global):\n- Un Plugin es una clase con un método `apply(compiler)` que se engancha a los hooks de ciclo de vida del `Compiler` y de la `Compilation` provistos por `Tapable`.\n- **Hooks Clave**: `environment`, `compile`, `compilation`, `optimizeChunks`, `emit` (justo antes de escribir en disco) y `afterEmit`.\n- Mientras los loaders solo ven el archivo que están procesando, los plugins tienen acceso al AST global, a la lista completa de chunks, a los assets generados y al sistema de archivos virtual.",
        "codeExample": {
            "language": "javascript",
            "code": "// 1. Configuración de Loaders en webpack.config.js:\nmodule.exports = {\n  module: {\n    rules: [\n      {\n        test: /\\.s[ac]ss$/i,\n        // Orden de ejecución: 3 <- 2 <- 1\n        use: ['style-loader', 'css-loader', 'sass-loader'],\n      },\n      {\n        test: /\\.(ts|tsx)$/,\n        use: 'swc-loader',\n      }\n    ]\n  },\n  plugins: [\n    // 2. Custom Plugin enganchándose a Tapable:\n    new class CustomAuditPlugin {\n      apply(compiler) {\n        compiler.hooks.emit.tapAsync('CustomAuditPlugin', (compilation, callback) => {\n          const assetNames = Object.keys(compilation.assets);\n          console.log(`[Audit] Total assets a emitir en dist: ${assetNames.length}`);\n          callback();\n        });\n      }\n    }()\n  ]\n};"
        },
        "visualDiagram": {
            "id": "diag-bld-02",
            "title": "Webpack Internals: Loaders (Transformación) vs Plugins (Tapable)",
            "caption": "Los Loaders transforman código de derecha a izquierda por archivo. Los Plugins interceptan los eventos globales de compilación mediante Tapable Hooks.",
            "diagramType": "build-webpack-loader-plugin-tapable"
        },
        "interviewTips": {
            "whatInterviewersWant": "Explicar el orden de ejecución de los Loaders (derecha a izquierda) y detallar la diferencia arquitectónica con los Plugins (basados en Tapable y con acceso global al compilador).",
            "commonPitfalls": [
                "Invertir el orden de los loaders en el array (poner `style-loader` antes de `css-loader` rompe el build inmediatamente).",
                "Creer que un loader puede alterar los nombres de los chunks generados en el disco (eso solo puede hacerlo un Plugin)."
            ],
            "followUps": [
                "¿En qué orden se aplican los loaders en Webpack?",
                "¿Cómo escribirías un plugin simple de Webpack?"
            ]
        },
        "quiz": {
            "question": "¿En qué orden evalúa Webpack los loaders configurados en el array 'use: [A, B, C]'?",
            "options": [
                "De izquierda a derecha: A -> B -> C",
                "De derecha a izquierda (abajo hacia arriba): C -> B -> A",
                "En paralelo simultáneo usando Web Workers",
                "En el orden alfabético de sus nombres"
            ],
            "correctIndex": 1,
            "explanation": "Webpack compone los loaders de forma funcional (pipeline de derecha a izquierda / abajo hacia arriba): la salida del último loader del array se convierte en la entrada del anterior."
        },
        "level": "medio"
    },
    {
        "title": "¿Cómo funciona la arquitectura dual de Vite (ESM nativo sin bundling con esbuild en desarrollo vs Rollup con chunks en producción)?",
        "response": "La disrupción que introdujo **Vite** en el ecosistema radica en su **arquitectura desacoplada de doble motor**: resuelve la experiencia del desarrollador (DX) de forma radicalmente distinta a cómo genera el artefacto de producción.\n\n### 1. Servidor de Desarrollo (Dev Server: Native ESM + esbuild):\n- **No-Bundling**: En lugar de empaquetar toda la aplicación antes de arrancar, Vite sirve el código fuente sobre **módulos ECMAScript (ESM) nativos del navegador** (`<script type=\"module\">`).\n- **Arranque en Frío O(1)**: El servidor arranca en milisegundos sin importar si la aplicación tiene 10 o 10,000 archivos, porque no compila nada por adelantado.\n- **Compilación On-Demand**: Cuando el navegador solicita un archivo (`import Button from './Button.tsx'`), Vite lo intercepta y lo transpila al vuelo usando **esbuild** (escrito en Go).\n- **Pre-bundling de Dependencias**: Convierte librerías de CommonJS o UMD a ESM y las consolida en un solo archivo cacheado (evitando que una librería con 600 imports internos colapse la red HTTP del navegador).\n\n### 2. Modo Producción (Build: Rollup):\n- Para producción, Vite delega en **Rollup**.\n- Aunque los navegadores soportan ESM, servir miles de archivos individuales en producción genera una penalización severa de latencia por múltiples round-trips HTTP/2 y cascadas de requests.\n- Rollup empaqueta el código en chunks optimizados con **Tree Shaking exhaustivo**, **Scope Hoisting**, precarga de tags (`<link rel=\"modulepreload\">`) y hash determinista.",
        "codeExample": {
            "language": "typescript",
            "code": "// vite.config.ts\nimport { defineConfig } from 'vite';\nimport react from '@vitejs/plugin-react';\n\nexport default defineConfig({\n  plugins: [react()],\n  // Optimización de pre-bundling en desarrollo (esbuild):\n  optimizeDeps: {\n    include: ['lodash-es', 'axios'],\n  },\n  // Configuración del motor de empaquetado de producción (Rollup):\n  build: {\n    target: 'esnext',\n    sourcemap: false,\n    rollupOptions: {\n      output: {\n        // Separación manual de vendors para caching inmutable:\n        manualChunks: {\n          vendor: ['react', 'react-dom'],\n        },\n      },\n    },\n  },\n});"
        },
        "visualDiagram": {
            "id": "diag-bld-03",
            "title": "Arquitectura Dual de Vite: Dev Server (ESM) vs Production (Rollup)",
            "caption": "En desarrollo, Vite aprovecha Native ESM y esbuild para arranque instantáneo; en producción, compila con Rollup para máxima compresión y división de chunks.",
            "diagramType": "build-vite-dev-vs-prod-dual"
        },
        "interviewTips": {
            "whatInterviewersWant": "Saber explicar con precisión por qué Vite no usa Rollup en desarrollo (tiempo de arranque lento) y por qué no usa esbuild para el build final de producción (Rollup tiene un ecosistema de plugins y tree-shaking de chunks más maduro).",
            "commonPitfalls": [
                "Creer que Vite no empaqueta nada en producción y solo sube archivos ESM sueltos al servidor.",
                "Ignorar el rol del pre-bundling con esbuild para convertir dependencias CommonJS a ESM."
            ],
            "followUps": [
                "¿Qué es el pre-bundling de dependencias en Vite?",
                "¿Por qué el comportamiento puede diferir entre desarrollo y producción en Vite?"
            ]
        },
        "quiz": {
            "question": "¿Por qué Vite utiliza Rollup en lugar de servir archivos ESM individuales sin empaquetar en producción?",
            "options": [
                "Porque los navegadores modernos tienen prohibido usar ESM en producción",
                "Porque servir cientos de archivos ESM individuales sueltos en producción degrada el rendimiento por cascadas de peticiones de red y latencia HTTP",
                "Porque Rollup es el único que puede compilar TypeScript",
                "Porque esbuild no funciona en servidores Linux"
            ],
            "correctIndex": 1,
            "explanation": "Incluso con HTTP/2 y HTTP/3, cargar árboles profundos de cientos de módulos ESM no empaquetados genera cuellos de botella de red por cascadas de peticiones. El empaquetado con Rollup optimiza la descarga y permite compresión máxima."
        },
        "level": "basico"
    },
    {
        "title": "¿Cómo opera el algoritmo de Tree Shaking basado en análisis estático de ESM y qué significa el campo 'sideEffects: false' en package.json?",
        "response": "**Tree Shaking** (o Dead Code Elimination a nivel de grafo) es la capacidad del empaquetador de analizar qué funciones, clases o variables exportadas por un módulo son realmente consumidas por la aplicación y **eliminar por completo las exportaciones huérfanas** del bundle final.\n\n### 1. El Requisito Innegociable: Estructura Estática de ESM:\n- Tree Shaking **SOLO funciona con ECMAScript Modules (`import` / `export`)**.\n- En ESM, los imports y exports son estáticos: no pueden estar condicionados dentro de un `if` ni generarse dinámicamente en tiempo de ejecución. Esto permite que el bundler construya el AST y detecte nodos no alcanzables sin ejecutar el código.\n- En **CommonJS (`require()` / `module.exports`)**, la exportación es un objeto mutable evaluado en runtime, por lo que el bundler debe asumir conservadoramente que cualquier propiedad podría ser leída dinámicamente (`require(path)[dynamicKey]`), imposibilitando el Tree Shaking.\n\n### 2. El Campo 'sideEffects: false' en package.json:\n- Aunque una función no se use, el compilador no puede eliminarla si su archivo realiza **efectos secundarios** al importarse (ej. modificar `window`, inyectar estilos globales o registrar polyfills).\n- Al declarar `\"sideEffects\": false` en `package.json`, el autor de la librería le promete al bundler: *'Ningún archivo de este paquete causa efectos colaterales al ser evaluado; si la aplicación consumidora no usa una función importada de aquí, puedes descartar el archivo completo de forma segura'*. Permite podas masivas de librerías como `lodash-es`.",
        "codeExample": {
            "language": "json",
            "code": "// package.json de una librería modular:\n{\n  \"name\": \"@acme/design-system\",\n  \"version\": \"1.0.0\",\n  \"sideEffects\": [\n    // Los archivos CSS tienen efectos secundarios globales y NO deben podarse:\n    \"**/*.css\",\n    \"./src/polyfills.ts\"\n  ]\n  // Si fuera completamente puro: \"sideEffects\": false\n}\n\n// Código consumidor:\nimport { Button } from '@acme/design-system';\n// Si Button no requiere modal ni table, y sideEffects: false está activo,\n// Rollup ni siquiera parseará los archivos de modal ni table."
        },
        "visualDiagram": {
            "id": "diag-bld-04",
            "title": "Algoritmo de Tree Shaking & Análisis Estático de ESM",
            "caption": "Análisis estático de nodos alcanzables en el AST: el flag sideEffects autoriza la eliminación completa de archivos de dependencias no consumidos.",
            "diagramType": "build-tree-shaking-dead-code"
        },
        "interviewTips": {
            "whatInterviewersWant": "Demostrar que entiendes por qué CommonJS impide el tree shaking y el rol indispensable de `sideEffects: false` para que los bundlers se atrevan a podar módulos sin miedo a romper efectos globales.",
            "commonPitfalls": [
                "Poner `sideEffects: false` en un proyecto que importa archivos CSS globales (`import './styles.css'`), haciendo que el bundler borre el CSS en producción por considerarlo 'sin uso'.",
                "Creer que Babel transpila automáticamente con tree-shaking si no se configura para preservar módulos ESM (`modules: false`)."
            ],
            "followUps": [
                "¿Por qué CommonJS dificulta el tree shaking?",
                "¿Qué riesgos tiene marcar sideEffects: false incorrectamente (CSS importado)?"
            ]
        },
        "quiz": {
            "question": "¿Por qué un bundler no puede aplicar Tree Shaking efectivo sobre librerías escritas exclusivamente en formato CommonJS (require)?",
            "options": [
                "Porque CommonJS solo funciona en entornos backend con Node.js",
                "Porque las sentencias require() y module.exports se evalúan dinámicamente en runtime y pueden invocar claves de forma impredecible",
                "Porque CommonJS no permite usar funciones flecha",
                "Porque TypeScript no puede compilar módulos CommonJS"
            ],
            "correctIndex": 1,
            "explanation": "La naturaleza dinámica de CommonJS permite llamadas condicionales require() y mutación del objeto exports en runtime, impidiendo que el bundler determine con certeza estática en tiempo de build qué código no se utiliza."
        },
        "level": "medio"
    },
    {
        "title": "¿Qué es Code Splitting y cómo operan los Dynamic Imports (import()) para generar Chunks asíncronos y optimizar el First Contentful Paint (FCP)?",
        "response": "**Code Splitting** es la técnica de dividir el grafo de la aplicación en múltiples archivos (**chunks**) más pequeños que se descargan de forma asíncrona y bajo demanda, en lugar de forzar al usuario a descargar un bundle monolítico de varios megabytes en la carga inicial.\n\n### 1. Dynamic Imports como Puntos de Ruptura (Split Points):\n- La especificación de ECMAScript introdujo **`import('ruta/al/modulo')`**, que a diferencia del `import` estático devuelve una **Promesa**.\n- Cuando un bundler (Webpack, Vite, Rollup) encuentra un `import()` dinámico, lo interpreta automáticamente como un **punto de escisión en el grafo**:\n  1. Detiene la inclusión del módulo en el chunk principal (`main.js`).\n  2. Genera un nuevo chunk independiente con su propio hash de contenido (ej. `AdminDashboard.[hash].js`).\n  3. En runtime, cuando el código ejecuta la función, el navegador emite una petición de red asíncrona (`fetch` o `<script>`) para descargar el chunk secundario.\n\n### 2. Estrategias Clave de Code Splitting:\n1. **Route-based Splitting**: Cada ruta de la SPA (`/admin`, `/checkout`, `/dashboard`) se carga perezosamente con `React.lazy()`.\n2. **Component-based Splitting**: Componentes pesados y poco frecuentes (modales de pago, editores WYSIWYG, gráficos Canvas/WebGL) se postergan hasta que el usuario interactúa.\n3. **Vendor Splitting**: Extraer librerías de terceros estables (`react`, `react-dom`, `tanstack-query`) en chunks separados para aprovechar el caché del navegador a largo plazo.",
        "codeExample": {
            "language": "tsx",
            "code": "import { lazy, Suspense } from 'react';\n\n// 1. Split Point: Genera 'AnalyticsWidget.[hash].js' en dist/\nconst HeavyAnalyticsWidget = lazy(() => import('./HeavyAnalyticsWidget'));\n\nexport function Dashboard() {\n  return (\n    <div>\n      <h1>Panel de Métricas</h1>\n      {/* 2. Suspense gestiona el estado de descarga de red del chunk */}\n      <Suspense fallback={<div className=\"skeleton\">Cargando gráfico...</div>}>\n        <HeavyAnalyticsWidget />\n      </Suspense>\n    </div>\n  );\n}"
        },
        "visualDiagram": {
            "id": "diag-bld-05",
            "title": "Code Splitting & Carga Asíncrona con Dynamic Imports",
            "caption": "El dynamic import() crea un chunk asíncrono aislado; la carga inicial (main.js) permanece ligera acelerando el First Contentful Paint (FCP).",
            "diagramType": "build-code-splitting-dynamic-import"
        },
        "interviewTips": {
            "whatInterviewersWant": "Explicar la relación directa entre el tamaño del bundle inicial y las Core Web Vitals (FCP, LCP y Total Blocking Time), y cómo React.lazy implementa dynamic imports por debajo.",
            "commonPitfalls": [
                "Crear code splitting a nivel granular excesivo (generar 100 mini-chunks de 1 KB cada uno satura el navegador con overhead de handshakes HTTP).",
                "Olvidar manejar errores de red en dynamic imports (si se despliega una nueva versión, los viejos chunks desaparecen de la CDN y el import arroja error si no hay recarga)."
            ],
            "followUps": [
                "¿Cómo dividirías una app por rutas con React.lazy?",
                "¿Qué hace /* webpackPrefetch: true */?"
            ]
        },
        "quiz": {
            "question": "¿Qué instrucción estándar de JavaScript actúa como un 'punto de escisión' (split point) automático para que los empaquetadores generen un chunk separado?",
            "options": [
                "require.ensure()",
                "import() dinámico",
                "export default async",
                "window.loadScript()"
            ],
            "correctIndex": 1,
            "explanation": "La función estándar import() devuelve una Promesa y es reconocida por Webpack, Rollup y Vite como la frontera para dividir el código en un chunk separado cargado asíncronamente."
        },
        "level": "medio"
    },
    {
        "title": "¿Cómo funcionan internamente los Source Maps (VLQ - Variable-Length Quantity) y cómo balancear precisión vs seguridad/rendimiento en producción?",
        "response": "Un **Source Map** es un archivo JSON con especificación estandarizada (Source Map v3) que establece una **tabla de mapeo bidireccional** entre las líneas y columnas del código compilado, ofuscado y minificado en producción y los archivos originales en TypeScript/JSX del desarrollador.\n\n### 1. Mecánica Interna y Codificación VLQ:\nEl archivo `.map` contiene campos clave:\n- **`sources`**: Array con las rutas de los archivos originales (`['src/auth.ts', 'src/Button.tsx']`).\n- **`sourcesContent`**: El código fuente original crudo en texto plano (opcional).\n- **`mappings`**: Un string gigantesco con valores codificados en **Base64-VLQ (Variable-Length Quantity)**.\n  - Cada segmento delimitado por comas mapea: `[Columna Generada, Índice de Archivo Original, Línea Original, Columna Original, Índice de Nombre de Variable]`.\n  - VLQ codifica números enteros arbitrariamente grandes en secuencias compactas de caracteres de 6 bits, reduciendo el tamaño del archivo de mapeo en un 80%.\n\n### 2. Estrategia en Producción (Seguridad vs Diagnóstico):\n- **Riesgo Crítico**: Exponer los `.map` en el servidor público de producción permite a cualquier atacante descargar el código fuente original completo de la empresa abriendo DevTools (`Sources`).\n- **Solución Enterprise**: Generar los sourcemaps durante el build de CI, **subirlos de forma privada y autenticada a la plataforma de observabilidad** (Sentry, Datadog, Bugsnag) mediante su CLI, y eliminarlos de los assets que se sincronizan con la CDN pública (`rm dist/**/*.map`).",
        "codeExample": {
            "language": "json",
            "code": "// Fragmento de un archivo dist/assets/app.js.map (V3):\n{\n  \"version\": 3,\n  \"file\": \"app.js\",\n  \"sources\": [\"src/index.ts\"],\n  \"sourcesContent\": [\"const api = process.env['API_URL'];\\nconsole.log(api);\"],\n  \"names\": [\"api\", \"console\", \"log\"],\n  \"mappings\": \"AAAA,IAAMA,EAAM,gBAAZ,CACAC,QAAQC,IAAR,CAAaF\"\n}\n\n// Al final del archivo minificado se vincula el mapa:\n//# sourceMappingURL=app.js.map"
        },
        "visualDiagram": {
            "id": "diag-bld-06",
            "title": "Arquitectura de Source Maps & Codificación Base64-VLQ",
            "caption": "Mapeo bidireccional entre coordenadas del bundle minificado y el código fuente original; en producción se aíslan en plataformas privadas de monitoreo.",
            "diagramType": "build-sourcemaps-vlq-mapping"
        },
        "interviewTips": {
            "whatInterviewersWant": "Demostrar visión de seguridad: saber cómo funcionan los sourcemaps pero enfatizar que NUNCA deben exponerse públicamente en producción si el código es propietario.",
            "commonPitfalls": [
                "Dejar los archivos `.map` en la carpeta `dist/` subida a S3/Vercel, filtrando secretos, comentarios internos y arquitectura del backend.",
                "Desactivar por completo los sourcemaps en el build de CI, haciendo imposible depurar stack traces de errores en Sentry en producción."
            ],
            "followUps": [
                "¿Deberías publicar source maps en producción?",
                "¿Cómo subirías los source maps a Sentry sin exponerlos públicamente?"
            ]
        },
        "quiz": {
            "question": "¿Cuál es la mejor práctica de seguridad y observabilidad para los archivos Source Map (.map) generados para producción?",
            "options": [
                "Subirlos a la CDN pública junto a los archivos .js para que los usuarios puedan inspeccionar el código",
                "Generarlos en el pipeline de CI, subirlos de forma privada y autenticada a la plataforma de monitoreo de errores (como Sentry) y eliminarlos del servidor público",
                "Embeberlos en base64 directamente dentro del archivo bundle.js final",
                "Renombrarlos a .txt para que el navegador no los descargue"
            ],
            "correctIndex": 1,
            "explanation": "Subir los sourcemaps de forma privada a Sentry/Datadog y borrarlos de la distribución pública permite disponer de stack traces legibles en monitoreo sin exponer el código fuente propietario a terceros."
        },
        "level": "medio"
    },
    {
        "title": "¿Cómo funciona el Hot Module Replacement (HMR) a bajo nivel (WebSockets, Grafo de Módulos y import.meta.hot.accept)?",
        "response": "**Hot Module Replacement (HMR)** es el mecanismo que actualiza, agrega o elimina módulos de una aplicación en ejecución dentro del navegador **sin recargar la página completa** y **preservando el estado en memoria** de los componentes (como inputs de formularios y estado de React).\n\n### Mecánica a Bajo Nivel en Vite / Webpack:\n1. **File Watcher del Dev Server**: El servidor de desarrollo (usando `chokidar` o watchers nativos) detecta que un archivo en disco ha sido guardado (`Button.tsx`).\n2. **Invalidación en el Module Graph**: El servidor marca el nodo de ese módulo como 'sucio' y calcula la **cadena de impacto** (qué otros módulos importan a este).\n3. **Notificación Push por WebSocket**: El servidor emite un mensaje JSON a través de un canal WebSocket abierto con el navegador:\n   `{ type: 'update', updates: [{ type: 'js-update', path: '/src/Button.tsx', timestamp: 17264... }] }`\n4. **Descarga Dinámica y Ejecución**: El cliente de HMR inyectado en la página ejecuta un `import('/src/Button.tsx?t=17264...')` asíncrono para descargar la nueva versión del archivo.\n5. **Frontera de Aceptación (`import.meta.hot.accept`)**: Si el módulo o uno de sus padres registra un handler de aceptación, el nuevo módulo se inyecta en el árbol de dependencias en memoria. React Fast Refresh compara los dos componentes y reemplaza solo el renderizado manteniendo el hook `useState` intacto.",
        "codeExample": {
            "language": "typescript",
            "code": "// API nativa de HMR en Vite (import.meta.hot):\nexport let state = 0;\n\nexport function increment() {\n  state++;\n  console.log('Nuevo estado:', state);\n}\n\n// Registrar frontera de aceptación de HMR:\nif (import.meta.hot) {\n  import.meta.hot.accept((newModule) => {\n    // newModule contiene las nuevas exportaciones recién compiladas\n    console.log('Módulo actualizado en caliente sin recargar la página');\n    // Podemos restaurar el estado previo:\n    newModule.increment();\n  });\n}"
        },
        "visualDiagram": {
            "id": "diag-bld-07",
            "title": "Mecánica Interna de Hot Module Replacement (HMR) vía WebSockets",
            "caption": "Ciclo reactivo: File Watcher -> Mensaje WebSocket -> Fetch dinámico de módulo -> Reemplazo en memoria con React Fast Refresh.",
            "diagramType": "build-hmr-engine-websocket"
        },
        "interviewTips": {
            "whatInterviewersWant": "Explicar la diferencia entre Live Reload (recarga completa con pérdida de estado) y HMR (reemplazo en caliente de módulos preservando estado vía Fast Refresh y WebSockets).",
            "commonPitfalls": [
                "Creer que HMR funciona sin un cliente en el navegador (requiere el script runtime que escucha el WebSocket).",
                "Tener efectos secundarios no limpiados en `useEffect` que provocan fugas de memoria al re-ejecutarse en HMR si no hay cleanup function."
            ],
            "followUps": [
                "¿Por qué HMR preserva el estado y un full reload no?",
                "¿Qué hace React Fast Refresh?"
            ]
        },
        "quiz": {
            "question": "¿Qué diferencia crítica existe entre 'Live Reloading' tradicional y 'Hot Module Replacement' (HMR)?",
            "options": [
                "Live Reloading es exclusivo de navegadores Safari",
                "HMR sustituye exclusivamente el módulo alterado en memoria manteniendo el estado de la aplicación, mientras Live Reload recarga toda la página perdiendo el estado",
                "HMR solo compila código CSS y no soporta JavaScript",
                "Live Reloading requiere una conexión USB con el servidor"
            ],
            "correctIndex": 1,
            "explanation": "Live Reload refresca la ventana completa (F5) perdiendo el estado de variables y formularios. HMR reemplaza únicamente el módulo modificado en memoria inyectando la nueva versión vía WebSockets."
        },
        "level": "avanzado"
    },
    {
        "title": "¿Por qué esbuild (en Go) y SWC (en Rust) son entre 10x y 100x más rápidos que herramientas basadas en Node.js/V8 (Babel, Terser)?",
        "response": "La transición generacional de herramientas frontend hacia **esbuild (Go)** y **SWC (Rust)** marcó el fin del monopolio de herramientas basadas en JavaScript ejecutadas sobre Node.js/V8.\n\n### Factores Arquitectónicos de la Diferencia 10x - 100x:\n1. **Lenguajes Compilados a Código Máquina Directo vs Interpretados/JIT**:\n   - Babel, Webpack y Terser se ejecutan sobre el motor V8 de Node.js, sufriendo sobrecarga de JIT warmup y abstracciones de alto nivel.\n   - Go y Rust compilan a binarios nativos optimizados para las instrucciones vectoriales de cada CPU (`x86_64`, `arm64`).\n2. **Concurrencia y Paralelismo Real de CPU**:\n   - JavaScript es monohilo por diseño; paralelizar en Node requiere costosos procesos secundarios (`worker_threads`) con serialización inter-proceso.\n   - Go utiliza **Goroutines** ligeras y Rust utiliza **Rayon/hilos OS nativos**: procesan cientos de archivos de forma concurrente saturando todos los núcleos de la máquina sin coste de IPC.\n3. **Gestión de Memoria y Garbage Collection (GC)**:\n   - En Node.js, procesar 100,000 nodos de AST crea millones de objetos que provocan pausas severas de Garbage Collection (GC pauses) y saturación de RAM.\n   - esbuild y SWC reutilizan buffers contiguos de memoria compacta, minimizando asignaciones en heap y eliminando pausas de GC.\n4. **Paso Único de AST (Single-pass Pipeline)**:\n   - La suite tradicional parsea el AST para Babel, lo serializa, lo vuelve a parsear en Webpack, y lo parsea una tercera vez en Terser.\n   - esbuild parsea, elimina tipos de TypeScript, desazucara JSX y minifica en **un único recorrido contiguo** del AST.",
        "codeExample": {
            "language": "bash",
            "code": "# Comparativa de benchmark real empaquetando 10,000 módulos TSX:\n# ------------------------------------------------------------\n# Babel + Terser (Node.js):     ~45.2 segundos (1.0x)\n# Webpack 5 SWC Loader:         ~4.8 segundos  (9.4x)\n# esbuild nativo (Go CLI):      ~0.38 segundos (118.0x)\n\n# Transpilar un archivo TSX masivo con esbuild al vuelo:\nesbuild src/app.tsx --bundle --minify --outfile=dist/app.js --target=es2022"
        },
        "visualDiagram": {
            "id": "diag-bld-08",
            "title": "Rendimiento Extremo: Compiladores Nativos (esbuild / SWC) vs Node.js",
            "caption": "Paralelismo nativo multi-núcleo y arquitectura de memoria contigua en Go/Rust frente al single-thread y pausas de GC de V8.",
            "diagramType": "build-esbuild-go-concurrency"
        },
        "interviewTips": {
            "whatInterviewersWant": "Explicar las razones estructurales más allá de 'Go y Rust son rápidos': mencionar paralelismo real sin IPC, buffers contiguos sin GC pauses y el pipeline de paso único de AST.",
            "commonPitfalls": [
                "Creer que esbuild realiza comprobación de tipos de TypeScript (esbuild solo elimina los tipos sin verificar errores semánticos de tipado; se requiere `tsc --noEmit` en CI).",
                "Asumir que SWC y esbuild son 100% idénticos en features a Babel (algunos plugins experimentales AST muy específicos solo existen en Babel)."
            ],
            "followUps": [
                "¿Qué limitaciones tiene esbuild frente a Babel (plugins, type checking)?",
                "¿Por qué esbuild no hace type checking de TypeScript?"
            ]
        },
        "quiz": {
            "question": "¿Cuál es una limitación técnica conocida de esbuild al procesar archivos TypeScript en comparación con el compilador oficial tsc?",
            "options": [
                "esbuild no puede procesar sintaxis JSX",
                "esbuild únicamente elimina las anotaciones de tipo (Type Stripping) sin realizar validación ni chequeo semántico de errores de TypeScript",
                "esbuild no funciona en procesadores Apple Silicon M-series",
                "esbuild requiere instalar Java en el sistema"
            ],
            "correctIndex": 1,
            "explanation": "Para alcanzar velocidades extremas, esbuild prescinde deliberadamente del cálculo semántico del sistema de tipos de TypeScript; simplemente poda las definiciones de tipos. La validación se delega a 'tsc --noEmit'."
        },
        "level": "avanzado"
    },
    {
        "title": "¿Por qué Rollup es el estándar de oro para empaquetar librerías JavaScript/TypeScript y cómo funciona su Scope Hoisting?",
        "response": "Mientras Webpack históricamente dominó las aplicaciones web complejas, **Rollup** se consagró como el **estándar indiscutible para empaquetar librerías y componentes** (usado por React, Vue y Vite).\n\n### 1. La Técnica de Scope Hoisting (Aplanamiento Léxico):\n- **El enfoque tradicional (Webpack v3 hacia atrás)**: Envolvía cada archivo en una función de clausura `function(module, exports) { ... }` y creaba un runtime que imitaba a `require()`. Esto aumentaba el peso del bundle y penalizaba el tiempo de arranque en el navegador.\n- **Scope Hoisting de Rollup**: Pone todo el código de todos los módulos en **un único ámbito léxico continuo** a nivel superior (`top-level scope`).\n  - Analiza las colisiones de nombres de variables y las renombra con prefijos deterministas (`button_onClick`, `input_onClick`).\n  - El resultado es indistinguible de código escrito a mano en un solo archivo, lo que permite a los motores de JS (V8, JavaScriptCore) aplicar **inlining** y optimizaciones extremas.\n\n### 2. Salidas Múltiples de Módulos (ESM + CommonJS):\nRollup sobresale al emitir simultáneamente variantes puras en ESM (`.esm.js`), CommonJS (`.cjs`) y UMD desde un único código fuente, generando bundles limpios sin código boilerplate de runtime.",
        "codeExample": {
            "language": "javascript",
            "code": "// rollup.config.mjs para empaquetar una librería enterprise:\nimport typescript from '@rollup/plugin-typescript';\nimport resolve from '@rollup/plugin-node-resolve';\n\nexport default {\n  input: 'src/index.ts',\n  output: [\n    // Variante moderna ESM\n    { file: 'dist/index.esm.js', format: 'esm', sourcemap: true },\n    // Variante CommonJS para compatibilidad legacy\n    { file: 'dist/index.cjs.js', format: 'cjs', exports: 'named' },\n  ],\n  plugins: [resolve(), typescript({ tsconfig: './tsconfig.json' })],\n  // Librerías que el consumidor debe proveer (no empaquetar dentro):\n  external: ['react', 'react-dom'],\n};"
        },
        "visualDiagram": {
            "id": "diag-bld-09",
            "title": "Rollup Scope Hoisting: Aplanamiento Léxico vs Envoltorios de Función",
            "caption": "Rollup aplana todos los módulos en un único ámbito continuo, eliminando clausuras de función intermedias y generando bundles mínimos.",
            "diagramType": "build-rollup-scope-hoisting"
        },
        "interviewTips": {
            "whatInterviewersWant": "Saber explicar qué es Scope Hoisting y por qué Rollup es ideal para librerías (genera código sin wrappers ni runtime propio), mientras Webpack añade utilidades para aplicaciones complejas.",
            "commonPitfalls": [
                "Empaquetar dependencias peer (como `react`) dentro del bundle de la librería en vez de declararlas en `external` en la config de Rollup.",
                "Usar UMD como único formato de salida en librerías modernas en vez de dual ESM + CJS."
            ],
            "followUps": [
                "¿Qué diferencia hay entre scope hoisting y module wrapping?",
                "¿Qué formatos de salida soporta Rollup (ESM, CJS, UMD)?"
            ]
        },
        "quiz": {
            "question": "¿Qué beneficio directo aporta la técnica de 'Scope Hoisting' popularizada por Rollup en el bundle resultante?",
            "options": [
                "Cifra el código fuente para que no pueda ser leído en producción",
                "Aplana los módulos en un único ámbito léxico eliminando los envoltorios de función por módulo, reduciendo tamaño y facilitando optimizaciones JIT",
                "Permite compilar código C++ en WebAssembly automáticamente",
                "Convierte todas las promesas en callbacks sincrónicos"
            ],
            "correctIndex": 1,
            "explanation": "Scope Hoisting unifica los módulos en un único ámbito continuo sin envoltorios function(module, exports), eliminando la sobrecarga de clausuras y logrando que el bundle sea más pequeño y rápido de ejecutar."
        },
        "level": "avanzado"
    },
    {
        "title": "¿Cómo se diagnostica y depura la deuda de tamaño de bundle (Bundle Budgeting, Treemaps con Bundle Analyzer y análisis de duplicados)?",
        "response": "El crecimiento descontrolado del tamaño de los bundles (**Bundle Bloat**) degrada directamente la retención de usuarios y el posicionamiento SEO al penalizar el **Time to Interactive (TTI)** y el **Largest Contentful Paint (LCP)** en redes móviles.\n\n### Estrategia de Diagnóstico y Presupuestos:\n1. **Treemap Visual con Bundle Analyzer**:\n   - Herramientas como `rollup-plugin-visualizer` (Vite) o `webpack-bundle-analyzer` generan un mapa de calor interactivo donde el área de cada rectángulo es proporcional a su tamaño en bytes.\n   - Permite detectar **librerías desproporcionadas** (ej. importar `moment.js` entero con todos sus idiomas cuando solo se necesita formatear una fecha).\n2. **Detección de Duplicados**:\n   - Ocurre cuando dos dependencias transitivas solicitan versiones distintas de la misma librería (ej. `lodash@4.17.15` y `lodash@4.17.21`), provocando que ambas se incluyan en el bundle final.\n   - Herramientas: `package-lock.json` overrides o flags `resolve.dedupe: ['lodash']` en Vite.\n3. **Bundle Budgeting en CI/CD**:\n   - Establecer umbrales máximos en el pipeline de Pull Requests. Si un cambio incrementa el chunk principal más de 5 KB o el total supera los 200 KB, el job de CI falla automáticamente.",
        "codeExample": {
            "language": "typescript",
            "code": "// vite.config.ts con analizador visual y budgets de advertencia:\nimport { defineConfig } from 'vite';\nimport { visualizer } from 'rollup-plugin-visualizer';\n\nexport default defineConfig({\n  plugins: [\n    visualizer({\n      filename: 'dist/stats.html',\n      open: false,\n      gzipSize: true,\n      brotliSize: true,\n    }),\n  ],\n  build: {\n    // Lanzar advertencia si un chunk individual supera los 300 KB gzipped:\n    chunkSizeWarningLimit: 300,\n  },\n});\n\n// Reemplazo arquitectónico común detectado en análisis:\n// ❌ Moment.js: 480 KB (con locales)\n// ✅ Day.js / date-fns: 2 KB a 12 KB (modular)"
        },
        "visualDiagram": {
            "id": "diag-bld-10",
            "title": "Auditoría de Deuda de Rendimiento: Bundle Analyzer Treemap",
            "caption": "Mapeo visual de áreas de bytes para detectar librerías sobredimensionadas, dependencias duplicadas y fijar Bundle Budgets en CI/CD.",
            "diagramType": "build-bundle-analysis-treemap"
        },
        "interviewTips": {
            "whatInterviewersWant": "Demostrar experiencia real en optimización: mencionar sustitución de dependencias pesadas (moment por dayjs/date-fns), deduplicación y bloqueos de CI con bundle budgets.",
            "commonPitfalls": [
                "Medir el tamaño del código sin compresión en vez de medir su tamaño comprimido con **Gzip / Brotli** (que es lo que realmente viaja por la red).",
                "Analizar el bundle solo en desarrollo (los bundles de desarrollo no tienen minificación ni tree shaking y sus tamaños son engañosos)."
            ],
            "followUps": [
                "¿Cómo establecerías un budget de tamaño de bundle en CI?",
                "¿Cómo detectarías dependencias duplicadas en el bundle?"
            ]
        },
        "quiz": {
            "question": "¿Por qué el análisis de tamaño de un bundle debe realizarse obligatoriamente sobre el build de producción y midiendo el tamaño Gzip/Brotli?",
            "options": [
                "Porque los analizadores visuales no admiten archivos TypeScript",
                "Porque en producción actúan el Tree Shaking, la minificación y el scope hoisting, y el tamaño Gzip/Brotli refleja la transferencia real de red del usuario",
                "Porque el modo desarrollo comprime el código más que producción",
                "Porque los navegadores prohíben descargar archivos sin compresión"
            ],
            "correctIndex": 1,
            "explanation": "El bundle de desarrollo contiene código de debug y no aplica optimizaciones de poda. Solo el build de producción con métricas Gzip/Brotli refleja el coste real de transferencia y ejecución que experimentará el usuario final."
        },
        "level": "avanzado"
    },
    {
        "title": "¿Qué es Webpack Module Federation, cómo resuelve el intercambio dinámico de micro-frontends en runtime y cómo gestiona dependencias compartidas?",
        "response": "**Module Federation** (introducido de forma nativa en Webpack 5) es una arquitectura que permite a múltiples compilaciones independientes de frontend comportarse como una sola aplicación, compartiendo código y componentes **en tiempo de ejecución (runtime)** sin necesidad de empaquetar librerías como paquetes npm.\n\n### Conceptos Clave de Module Federation:\n1. **Host (Shell)**: La aplicación contenedora que carga dinámicamente los módulos remotos.\n2. **Remote**: Una aplicación independiente desplegada en su propia URL que expone componentes o utilidades mediante un manifiesto ligero llamado `remoteEntry.js`.\n3. **Shared Dependencies (Dependencias Compartidas)**:\n   - Permite que el Host y los Remotes compartan instancias de librerías comunes (como `react` o `react-dom`).\n   - Con la directiva **`singleton: true`**, Module Federation garantiza que solo se instancie **una única copia de React** en memoria, evitando el error crítico de múltiples dispatchers de hooks.\n   - **Version Negotiation**: Si el Host tiene `react@18.2.0` y el Remote tiene `react@^18.0.0`, negocian en runtime y descargan una sola copia compatible.",
        "codeExample": {
            "language": "javascript",
            "code": "// 1. Remote App (webpack.config.js del micro-frontend de Auth):\nconst { ModuleFederationPlugin } = require('webpack').container;\n\nmodule.exports = {\n  plugins: [\n    new ModuleFederationPlugin({\n      name: 'auth_mfe',\n      filename: 'remoteEntry.js',\n      exposes: {\n        './LoginForm': './src/components/LoginForm',\n      },\n      shared: {\n        react: { singleton: true, requiredVersion: '^18.2.0' },\n        'react-dom': { singleton: true, requiredVersion: '^18.2.0' },\n      },\n    }),\n  ],\n};\n\n// 2. Host App consumiendo el Remote en runtime:\n// const RemoteLoginForm = React.lazy(() => import('auth_mfe/LoginForm'));"
        },
        "visualDiagram": {
            "id": "diag-bld-11",
            "title": "Webpack 5 Module Federation: Micro-Frontends Dinámicos en Runtime",
            "caption": "Host contenedor consumiendo remotes independientes en runtime compartiendo React como singleton para evitar duplicidades de memoria.",
            "diagramType": "build-module-federation-remotes"
        },
        "interviewTips": {
            "whatInterviewersWant": "Explicar por qué Module Federation supera a los micro-frontends basados en iframes (mejor UX e interoperabilidad) o paquetes npm (despliegues desacoplados sin recompilar el contenedor).",
            "commonPitfalls": [
                "Olvidar configurar `singleton: true` para React o librerías de contexto global, provocando fallos de 'Invalid Hook Call'.",
                "No definir fallbacks en el Host para gestionar la caída de red o errores HTTP 500 del servidor donde se aloja el Remote."
            ],
            "followUps": [
                "¿Qué ocurre si dos micro-frontends usan versiones incompatibles de React?",
                "¿Qué hacen las opciones singleton y requiredVersion en shared?"
            ]
        },
        "quiz": {
            "question": "¿Por qué es obligatorio configurar 'singleton: true' al compartir React en Webpack Module Federation?",
            "options": [
                "Para obligar a React a renderizar en un solo hilo de Web Worker",
                "Para garantizar que solo exista una única instancia de React en la memoria del navegador, evitando que múltiples copias rompan el dispatcher de Hooks",
                "Porque Webpack 5 no permite cargar más de un archivo JavaScript al mismo tiempo",
                "Para desactivar el Virtual DOM de React"
            ],
            "correctIndex": 1,
            "explanation": "React Hooks depende de un dispatcher global interno singleton. Si el Host y un Remote cargan dos instancias distintas de la librería React en la misma página, los hooks colapsan con el error 'Invalid Hook Call'."
        },
        "level": "experto"
    },
    {
        "title": "¿Cómo se implementa una estrategia de Caching inmutable de assets en CDN mediante Content Hashing ([contenthash] vs [chunkhash])?",
        "response": "La estrategia de almacenamiento en caché para SPAs de alto tráfico debe resolver un dilema fundamental: **los usuarios deben recibir las actualizaciones de código de forma instantánea tras un despliegue, pero deben descargar CERO bytes si los archivos no han cambiado**.\n\n### 1. La Diferencia entre Tipos de Hashes:\n- **`[hash]` / `[fullhash]`**: Un único hash derivado de la compilación completa. Si cambias 1 línea en el CSS, el hash de todos los archivos JS cambia, invalidando innecesariamente la caché de toda la CDN.\n- **`[chunkhash]`**: Basado en el contenido del chunk. Si un chunk contiene un archivo JS y un archivo CSS asociado, modificar el CSS altera el hash de ambos.\n- **`[contenthash]` (El Estándar de Oro)**: Se calcula **única y exclusivamente a partir del contenido binario del archivo individual emitido**. Si el archivo JS no cambió, su `[contenthash]` es idéntico bit a bit al anterior, preservando el caché de los usuarios al 100%.\n\n### 2. La Regla de Oro de Encabezados HTTP (Cache-Control):\n1. **`index.html` (NUNCA cachear)**:\n   `Cache-Control: no-cache, no-store, must-revalidate`\n   El navegador siempre consulta al servidor para obtener la última versión del HTML, el cual contiene las etiquetas `<script>` apuntando a los nuevos hashes.\n2. **Assets estáticos (`[contenthash].js`, `[contenthash].css`, imágenes)**:\n   `Cache-Control: public, max-age=31536000, immutable`\n   Al tener el hash en el nombre, el contenido jamás cambiará. El navegador lo almacena durante 1 año sin emitir ninguna consulta de revalidación a la CDN.",
        "codeExample": {
            "language": "typescript",
            "code": "// Configuración en Vite (vite.config.ts) / Rollup:\nexport default defineConfig({\n  build: {\n    rollupOptions: {\n      output: {\n        // Plantillas con [contenthash] estricto:\n        entryFileNames: 'assets/[name].[contenthash:8].js',\n        chunkFileNames: 'assets/[name].[contenthash:8].js',\n        assetFileNames: 'assets/[name].[contenthash:8].[ext]',\n      },\n    },\n  },\n});\n\n// Headers en el servidor web (Nginx / Cloudflare):\n// location = /index.html {\n//   add_header Cache-Control \"no-cache, no-store, must-revalidate\";\n// }\n// location /assets/ {\n//   add_header Cache-Control \"public, max-age=31536000, immutable\";\n// }"
        },
        "visualDiagram": {
            "id": "diag-bld-12",
            "title": "Estrategia de Caching Inmutable & Content Hashing en CDN",
            "caption": "index.html con no-cache + assets con [contenthash] y directiva immutable: actualizaciones instantáneas con cero descargas redundantes.",
            "diagramType": "build-content-hashing-caching"
        },
        "interviewTips": {
            "whatInterviewersWant": "Demostrar conocimiento integral de arquitectura web: la correlación indispensable entre el contenthash del bundler y la cabecera `Cache-Control: immutable` en CDN.",
            "commonPitfalls": [
                "Poner caché de 1 año en `index.html`, provocando que los usuarios no reciban despliegues nuevos a menos que borren manualmente la caché del navegador.",
                "Usar `[fullhash]` en vez de `[contenthash]`, destruyendo la eficiencia de la caché ante cualquier cambio trivial."
            ],
            "followUps": [
                "¿Qué diferencia hay entre [contenthash] y [chunkhash]?",
                "¿Por qué el index.html no debe cachearse de forma inmutable?"
            ]
        },
        "quiz": {
            "question": "¿Qué cabecera HTTP Cache-Control debe aplicarse al archivo index.html en una Single Page Application moderna con content hashing?",
            "options": [
                "public, max-age=31536000, immutable",
                "no-cache, no-store, must-revalidate",
                "private, max-age=86400",
                "public, s-maxage=604800"
            ],
            "correctIndex": 1,
            "explanation": "El archivo index.html debe servirse siempre con directivas de no-cache/no-store para que el navegador descargue siempre el HTML más reciente, el cual enlaza a los nuevos chunks con contenthash."
        },
        "level": "experto"
    },
    {
        "title": "¿Qué es Turbopack, cómo implementa la computación incremental (Turborepo engine) en Rust y cómo se compara con Vite?",
        "response": "**Turbopack** es el empaquetador de nueva generación desarrollado por Vercel (liderado por Tobias Koppers, el creador de Webpack) escrito en **Rust**, concebido como el sucesor de Webpack para aplicaciones de escala masiva.\n\n### 1. El Paradigma de Computación Incremental (Turbo Engine):\n- Los bundlers clásicos operan invalidando **módulos completos** cuando se modifica un archivo en disco.\n- Turbopack modela todo el proceso de compilación como un **grafo de llamadas a funciones puras memoizadas en memoria**.\n- Cuando cambia un archivo:\n  1. Turbopack no re-ejecuta el compilador ni el plugin completo sobre el archivo.\n  2. Evalúa únicamente la función específica que cambió; si las entradas de una función no han variado, **reutiliza el resultado memoizado en memoria de inmediato**.\n  3. **Escalabilidad Asintótica**: El tiempo de HMR no depende del tamaño total del proyecto ni del número de páginas; escala en tiempo prácticamente plano O(1).\n\n### 2. Turbopack vs Vite:\n- **Vite**: Usa ESM nativo sin bundling en desarrollo (muy rápido en proyectos medianos, pero sufre latencia si una página importa miles de submódulos) y Rollup en producción.\n- **Turbopack**: Empaqueta en desarrollo y producción bajo el mismo motor unificado de Rust con computación incremental nativa, integrado estrechamente con Next.js App Router.",
        "codeExample": {
            "language": "bash",
            "code": "# Iniciar Next.js en modo desarrollo impulsado por Turbopack nativo:\nnext dev --turbo\n\n# En benchmarks de Vercel en proyectos masivos (30,000 módulos):\n# - Arranque en frío (Cold Start):\n#   Webpack: 23.5s | Vite: 11.4s | Turbopack: 1.8s\n# - Actualización HMR:\n#   Webpack: 1.2s  | Vite: 85ms   | Turbopack: 15ms"
        },
        "visualDiagram": {
            "id": "diag-bld-13",
            "title": "Turbopack: Computación Incremental en Rust a Nivel de Función",
            "caption": "Turbo Engine en Rust memoiza resultados a nivel de llamadas de función individuales, evitando repetir cálculos ya computados.",
            "diagramType": "build-turbopack-incremental-engine"
        },
        "interviewTips": {
            "whatInterviewersWant": "Explicar el concepto de computación incremental a nivel de funciones y cómo Turbopack busca resolver el cuello de botella que sufren tanto Webpack como Vite en bases de código masivas (+10k módulos).",
            "commonPitfalls": [
                "Creer que Turbopack es un simple fork de Webpack en Rust (es una arquitectura completamente reescrita desde cero basada en Turbo Engine).",
                "Asumir que Turbopack ya reemplaza a Vite en todos los frameworks (su foco inicial y madurez están concentrados en Next.js)."
            ],
            "followUps": [
                "¿Qué es la computación incremental basada en funciones memoizadas?",
                "¿Está Turbopack listo para cualquier proyecto fuera de Next.js?"
            ]
        },
        "quiz": {
            "question": "¿Cuál es la innovación arquitectónica central del motor de Turbopack en Rust frente a los bundlers tradicionales?",
            "options": [
                "Compilar todo el frontend directamente a código binario ejecutable .exe",
                "La computación incremental: un grafo de llamadas a funciones memoizadas que nunca vuelve a calcular un paso previamente resuelto",
                "Eliminar el uso de JavaScript en los navegadores",
                "Obligar a todos los componentes a ser Server Components"
            ],
            "correctIndex": 1,
            "explanation": "El Turbo Engine de Turbopack implementa computación incremental memoizada a nivel de función: cada paso del compilador es una función pura cacheada, garantizando que nunca se repita trabajo computacional redundante."
        },
        "level": "experto"
    },
    {
        "title": "¿Cómo se gestiona el soporte de navegadores legado mediante Browserslist, @babel/preset-env (useBuiltIns) y Polyfills selectivos con core-js?",
        "response": "Garantizar que una aplicación funcione en versiones específicas de navegadores sin inflar innecesariamente el bundle para los navegadores modernos requiere una **estrategia coordinada de polyfills y transpilación**.\n\n### 1. Distinción Vital: Sintaxis vs Nuevas APIs:\n- **Sintaxis Moderna (Transpilación)**: Arrow functions, optional chaining (`?.`), nullish coalescing (`??`), async/await. Los transpiladores (Babel, SWC, esbuild) las reescriben a sentencias `function`, `if` y operadores ternarios.\n- **Nuevas APIs / Objetos Globales (Polyfills)**: Métodos que no existían en el prototipo (`Array.prototype.flat`, `Promise.allSettled`, `Object.hasOwn`, `structuredClone`). Ninguna transpilación de sintaxis puede hacer que funcionen si el motor del navegador no tiene implementada esa función; requieren **un polyfill que inyecte la función en el prototipo en runtime**.\n\n### 2. Configuración Óptima con Browserslist y core-js:\n- **`browserslist`**: Archivo `.browserslistrc` que define el target corporativo consultando datos actualizados de CanIUse (`> 0.5%, last 2 versions, not dead`).\n- **`@babel/preset-env` con `useBuiltIns: 'usage'`**:\n  - Analiza cada archivo y **solo inyecta el polyfill de `core-js` si tu código realmente utiliza esa API** y el navegador destino no la soporta.\n  - Si tu app no usa `Promise.any`, no se incluye en el bundle, ahorrando hasta 150 KB frente a importar `core-js` completo.",
        "codeExample": {
            "language": "json",
            "code": "// 1. Archivo .browserslistrc en la raíz del proyecto:\n// > 0.5%\n// last 2 versions\n// Firefox ESR\n// not dead\n\n// 2. babel.config.json con inyección selectiva on-demand:\n{\n  \"presets\": [\n    [\n      \"@babel/preset-env\",\n      {\n        \"useBuiltIns\": \"usage\",\n        \"corejs\": {\n          \"version\": \"3.36\",\n          \"proposals\": false\n        },\n        \"modules\": false // Preservar ESM para Tree Shaking\n      }\n    ],\n    [\"@babel/preset-react\", { \"runtime\": \"automatic\" }]\n  ]\n}"
        },
        "visualDiagram": {
            "id": "diag-bld-14",
            "title": "Estrategia de Polyfills: Browserslist, core-js & Transpilación",
            "caption": "Browserslist consulta CanIUse para definir compatibilidad; useBuiltIns: 'usage' inyecta de core-js únicamente las APIs que el código realmente invoca.",
            "diagramType": "build-polyfill-corejs-browserslist"
        },
        "interviewTips": {
            "whatInterviewersWant": "Diferenciar con precisión entre transpilación sintáctica y polyfills de APIs en prototipos, y justificar el uso de `useBuiltIns: 'usage'` para evitar bundles obesos.",
            "commonPitfalls": [
                "Escribir `import 'core-js'` en la primera línea de `index.ts` (añade 200 KB innecesarios de polyfills para APIs que la aplicación jamás utiliza).",
                "Olvidar configurar `modules: false` en `@babel/preset-env`, lo que convierte el código a CommonJS y destruye el Tree Shaking de Webpack/Rollup."
            ],
            "followUps": [
                "¿Qué hace useBuiltIns: 'usage' frente a 'entry'?",
                "¿Cómo implementarías differential serving (module/nomodule)?"
            ]
        },
        "quiz": {
            "question": "¿Qué hace la opción 'useBuiltIns: usage' en la configuración de @babel/preset-env con core-js?",
            "options": [
                "Descarga todos los polyfills existentes en npm e ignora browserslist",
                "Analiza el código de la aplicación e inyecta de core-js únicamente los polyfills de las APIs que el código realmente utiliza y que el navegador destino no soporta",
                "Desactiva los polyfills en modo producción",
                "Convierte el código a WebAssembly"
            ],
            "correctIndex": 1,
            "explanation": "La directiva useBuiltIns: 'usage' inspecciona el código fuente archivo por archivo y añade imports específicos a core-js únicamente para las APIs efectivamente consumidas que no están en el target de Browserslist."
        },
        "level": "medio"
    },
    {
        "title": "¿Cómo procesa el pipeline moderno de CSS las hojas de estilo (PostCSS AST, CSS Modules encapsulados y extracción con Lightning CSS / MiniCssExtractPlugin)?",
        "response": "El procesamiento de estilos ha evolucionado desde los preprocesadores lentos basados en Ruby/Sass hacia **pipelines AST ultrarrápidos** integrados con los empaquetadores.\n\n### Fases del Pipeline Moderno de CSS:\n1. **PostCSS y Transformación de AST**:\n   - PostCSS analiza el CSS convirtiéndolo en un Árbol de Sintaxis Abstracta (AST).\n   - **Tailwind CSS (JIT)** opera como un plugin de PostCSS: escanea las clases usadas en los archivos JSX/TSX y genera en memoria exclusivamente las reglas CSS requeridas.\n   - **Autoprefixer**: Inyecta prefijos de proveedores (`-webkit-`, `-moz-`) basándose en la lista de Browserslist.\n2. **CSS Modules (Aislamiento de Ámbito Local)**:\n   - Permite que las clases CSS tengan ámbito local por defecto.\n   - Transforma `.title { color: red }` en `src_Button_module__title_a8f9c2`, exportando un objeto JS mapeado. Evita colisiones de especificidad global.\n3. **Extracción y Minificación con Lightning CSS**:\n   - En producción, librerías como `MiniCssExtractPlugin` (Webpack) o el pipeline CSS de Vite extraen todo el CSS en archivos `.css` independientes con contenthash.\n   - **Lightning CSS** (escrito en Rust) minifica el CSS, unifica declaraciones duplicadas, reordena media queries y compila sintaxis moderna (CSS Nesting, Color Mix) a 100x la velocidad de cssnano.",
        "codeExample": {
            "language": "typescript",
            "code": "// 1. Componente usando CSS Modules encapsulado:\n// Button.module.css:\n// .primary { background: #3b82f6; }\n\nimport styles from './Button.module.css';\n// styles.primary resuelve a: 'Button_primary__d3f2a'\nexport function Button() {\n  return <button className={styles.primary}>Click</button>;\n}\n\n// 2. vite.config.ts con Lightning CSS en Rust para máxima velocidad:\nexport default defineConfig({\n  css: {\n    transformer: 'lightningcss',\n    lightningcss: {\n      targets: browserslistToTargets(browserslist('>= 0.25%')),\n    },\n  },\n  build: {\n    cssMinify: 'lightningcss',\n  },\n});"
        },
        "visualDiagram": {
            "id": "diag-bld-15",
            "title": "El Pipeline Moderno de Estilos: PostCSS, CSS Modules y Lightning CSS",
            "caption": "Transformación de código fuente a través del AST de PostCSS, encapsulación de clases con CSS Modules y extracción minificada con Lightning CSS en Rust.",
            "diagramType": "build-css-pipeline-postcss-tailwind"
        },
        "interviewTips": {
            "whatInterviewersWant": "Explicar por qué es preferible extraer el CSS en archivos independientes en producción (evita FOUC y permite que el navegador descargue CSS y JS en paralelo sin bloquearse mutuamente).",
            "commonPitfalls": [
                "Usar `style-loader` en producción (inyectar CSS en tiempo de ejecución vía JavaScript causa FOUC - Flash of Unstyled Content y bloquea el render inicial).",
                "No configurar purge/content en Tailwind, lo que causaría bundles de CSS de varios megabytes con todas las clases del framework."
            ],
            "followUps": [
                "¿Cómo generan los CSS Modules nombres de clase únicos?",
                "¿Qué ventajas aporta Lightning CSS frente a PostCSS?"
            ]
        },
        "quiz": {
            "question": "¿Por qué en entornos de producción se utiliza extracción de CSS (como MiniCssExtractPlugin o la extracción nativa de Vite) en lugar de style-loader?",
            "options": [
                "Porque los navegadores prohíben el uso de etiquetas <style> en producción",
                "Para generar archivos .css cacheados independientes que se descargan en paralelo con el JS, evitando el destello de contenido sin estilo (FOUC)",
                "Porque style-loader borra los estilos al recargar la página",
                "Para que el CSS se ejecute dentro de un Web Worker"
            ],
            "correctIndex": 1,
            "explanation": "Extraer el CSS a ficheros estáticos con contenthash permite al navegador cachearlos por 1 año en CDN y descargarlos en paralelo al inicio, erradicando el FOUC (Flash of Unstyled Content)."
        },
        "level": "avanzado"
    },
    {
        "title": "¿Cómo se integran módulos WebAssembly (WASM) en el pipeline de build moderno (Rust/wasm-pack con Vite/Webpack)?",
        "response": "**WebAssembly (WASM)** es un formato de instrucciones binarias de bajo nivel y alto rendimiento ejecutado en un sandbox seguro en el navegador a una velocidad cercana al código nativo, ideal para tareas intensivas de CPU (edición de video/audio, criptografía, motores 3D o modelos de Machine Learning).\n\n### Pipeline de Integración de WebAssembly:\n1. **Compilación del Código Nativo (Rust a WASM)**:\n   - Se escribe el algoritmo en Rust utilizando el macro `#[wasm_bindgen]`.\n   - La herramienta **`wasm-pack`** compila el código Rust al binario `.wasm` y genera automáticamente el pegamento JavaScript (`.js`) y las definiciones de tipos TypeScript (`.d.ts`).\n2. **Empaquetado en Vite / Webpack 5**:\n   - Webpack 5 soporta WASM de forma nativa con el flag `experiments.asyncWebAssembly: true`.\n   - Vite cuenta con soporte nativo o plugins como `vite-plugin-wasm`.\n   - El bundler empaqueta el binario `.wasm` como un asset asíncrono con hash.\n3. **Carga y Compilación en Streaming en Runtime**:\n   - El navegador utiliza **`WebAssembly.instantiateStreaming(fetch('...wasm'))`**.\n   - La máquina virtual compila el código binario a código máquina nativo **mientras aún se está descargando por la red**, reduciendo a cero la latencia de arranque.",
        "codeExample": {
            "language": "typescript",
            "code": "// 1. Archivo Rust (src/lib.rs):\n// use wasm_bindgen::prelude::*;\n// #[wasm_bindgen]\n// pub fn fibonacci(n: u32) -> u32 {\n//     match n { 0 => 0, 1 => 1, _ => fibonacci(n-1) + fibonacci(n-2) }\n// }\n\n// 2. Consumo transparente y tipado en TypeScript con Vite:\nimport init, { fibonacci } from './pkg/my_wasm_module';\n\nasync function runPerformanceTask() {\n  // Compilación en streaming en background:\n  await init();\n  \n  const result = fibonacci(40); // Ejecutado a velocidad de CPU en C/Rust\n  console.log('Resultado WASM:', result);\n}"
        },
        "visualDiagram": {
            "id": "diag-bld-16",
            "title": "Integración de WebAssembly (WASM): Rust, wasm-pack & Bundlers Modernos",
            "caption": "Compilación de Rust con wasm-pack y empaquetado asíncrono en Vite/Webpack con streaming compilation en el navegador.",
            "diagramType": "build-wasm-rust-integration"
        },
        "interviewTips": {
            "whatInterviewersWant": "Saber explicar cómo se comunican JS y WASM (a través de memoria lineal y wrappers de wasm-bindgen) y la ventaja de `instantiateStreaming` para compilar durante la descarga.",
            "commonPitfalls": [
                "Pasar objetos complejos de JS directamente a WASM sin serializar (WASM solo entiende números enteros y flotantes nativamente; las cadenas y arrays requieren conversiones de memoria).",
                "Usar WASM para tareas sencillas del DOM (la sobrecarga de cruzar el puente JS-WASM supera cualquier ganancia si no hay cálculo pesado)."
            ],
            "followUps": [
                "¿Qué overhead tiene cruzar la frontera JS-WASM?",
                "¿Cuándo compensa usar WebAssembly en frontend?"
            ]
        },
        "quiz": {
            "question": "¿Qué método estándar del navegador permite compilar e instanciar un módulo WebAssembly en tiempo real mientras el archivo aún se está descargando de la red?",
            "options": [
                "WebAssembly.compileSync()",
                "WebAssembly.instantiateStreaming()",
                "window.loadWasmBinary()",
                "WebAssembly.runBackgroundThread()"
            ],
            "correctIndex": 1,
            "explanation": "WebAssembly.instantiateStreaming compila el bytecode a código máquina nativo en background directamente a partir de la respuesta en streaming de fetch(), maximizando la velocidad de inicio."
        },
        "level": "experto"
    },
    {
        "title": "¿Cómo aceleran Turborepo y Nx los pipelines de build en monorepos mediante Remote Caching criptográfico y grafos dirigidos acíclicos (DAG)?",
        "response": "En monorepos con múltiples aplicaciones (`apps/*`) y paquetes compartidos (`packages/*`), compilar todo el repositorio de forma secuencial en cada commit es inviable y ralentiza a los equipos de desarrollo.\n\n### Arquitectura de Orquestación con Turborepo / Nx:\n1. **Grafo Acíclico Dirigido (DAG de Tareas)**:\n   - El archivo `turbo.json` o `nx.json` define las dependencias entre tareas:\n     `\"build\": { \"dependsOn\": [\"^build\"] }` indica que antes de compilar `apps/web`, deben compilarse sus paquetes de dependencia (`packages/ui`).\n   - Las tareas independientes se ejecutan en **paralelo masivo** aprovechando todos los núcleos de CPU de la máquina.\n2. **Hashing Criptográfico de Inputs**:\n   - Para cada tarea, la herramienta calcula un hash SHA que combina:\n     - El contenido de los archivos fuente del paquete.\n     - Los hashes de sus dependencias internas y externas.\n     - Las variables de entorno configuradas (`ENV_VARS`).\n3. **Remote Caching (Caché Compartida en la Nube)**:\n   - Si el hash coincide con una ejecución previa, **no se ejecuta el build**.\n   - Se descarga el artefacto compilado (`dist/`) y la salida de logs en milisegundos desde un bucket en la nube (Vercel Remote Cache, AWS S3 o GCP).\n   - Si un desarrollador en España compila una librería, su compañero en México o el servidor de CI en GitHub Actions obtienen un **Cache HIT (FULL TURBO)** instantáneo sin gastar CPU.",
        "codeExample": {
            "language": "json",
            "code": "// turbo.json en la raíz del monorepo:\n{\n  \"$schema\": \"https://turbo.build/schema.json\",\n  \"tasks\": {\n    \"build\": {\n      // Ejecutar primero el build de dependencias upstream (^):\n      \"dependsOn\": [\"^build\"],\n      // Archivos que deben guardarse en la caché remota:\n      \"outputs\": [\"dist/**\", \".next/**\", \"!.next/cache/**\"],\n      \"env\": [\"API_URL\", \"NODE_ENV\"]\n    },\n    \"test\": {\n      \"dependsOn\": [\"build\"],\n      \"outputs\": [\"coverage/**\"]\n    }\n  }\n}\n\n// Ejecución coordinada: turbo run build\n// >>> FULL TURBO (Cache HIT en 9 de 10 paquetes: tiempo total 1.2s)"
        },
        "visualDiagram": {
            "id": "diag-bld-17",
            "title": "Orquestación de Monorepos & Remote Caching (Turborepo / Nx)",
            "caption": "Grafo DAG de dependencias para paralelización topológica y descarga de artefactos desde Remote Cache en milisegundos.",
            "diagramType": "build-monorepo-caching-turborepo"
        },
        "interviewTips": {
            "whatInterviewersWant": "Explicar el concepto de Remote Caching y cómo el hashing de inputs garantiza que jamás se recompile el mismo código dos veces en la empresa, ahorrando horas de CI.",
            "commonPitfalls": [
                "Olvidar declarar variables de entorno en el array `env` de `turbo.json`: si el build depende de `API_URL` y no está declarada, el hash no cambiará y se restaurará un build con la URL incorrecta.",
                "Incluir carpetas con timestamps dinámicos en los `outputs` de caché."
            ],
            "followUps": [
                "¿Cómo calcula Turborepo el hash de una tarea?",
                "¿Qué riesgos tiene el remote caching si los inputs no están bien declarados?"
            ]
        },
        "quiz": {
            "question": "¿Qué ocurre en Turborepo cuando se produce un evento 'FULL TURBO' (Cache HIT)?",
            "options": [
                "Turborepo activa el ventilador de la CPU al máximo para compilar",
                "Turborepo omite la compilación y restaura instantáneamente la carpeta de salida (dist) y los logs desde la caché local o remota en la nube",
                "Turborepo borra todos los archivos de node_modules",
                "Turborepo envía un correo a todos los mantenedores"
            ],
            "correctIndex": 1,
            "explanation": "Un Cache HIT ('FULL TURBO') significa que las entradas y dependencias no han cambiado en un solo bit respecto a un build previo; por ende, restaura los artefactos de salida en milisegundos sin consumir CPU."
        },
        "level": "experto"
    },
    {
        "title": "¿Qué transformaciones AST realizan los minificadores (Terser, esbuild minify) más allá de eliminar espacios (mangling, DCE, constant folding)?",
        "response": "Reducir la minificación a 'quitar espacios en blanco y saltos de línea' es una simplificación extrema. Los minificadores modernos (**Terser, esbuild, SWC minifier**) aplican transformaciones estructurales profundas sobre el **Árbol de Sintaxis Abstracta (AST)**.\n\n### Transformaciones Clave del AST en Minificación:\n1. **Mangling (Acortamiento de Identificadores)**:\n   - Renombra variables locales y parámetros de función de nombres descriptivos a identificadores de una o dos letras (`userAuthenticationToken` ➔ `a`, `organizationSessionId` ➔ `b`).\n   - Respeta las reglas de ámbito léxico para reutilizar las mismas letras en funciones hermanas sin colisiones.\n2. **Constant Folding (Pliegue de Constantes)**:\n   - Evalúa expresiones matemáticas y lógicas constantes en tiempo de compilación:\n     `const MS_PER_DAY = 24 * 60 * 60 * 1000;` ➔ `const MS_PER_DAY = 864e5;`\n3. **Dead Code Elimination (DCE) a Nivel de Rama**:\n   - Elimina bifurcaciones inalcanzables cuando se reemplazan variables de entorno:\n     `if (process.env['NODE_ENV'] !== 'production') { logDebug(); }` se convierte en `if (false) { logDebug(); }`, y el minificador purga la condición completa y la llamada a `logDebug`.\n4. **Inlining y Simplificación Booleana**:\n   - Reescribe `if (condition) { return a; } else { return b; }` a `return condition ? a : b;`.\n   - Convierte `true` en `!0` y `false` en `!1` (ahorrando 3 y 4 bytes por ocurrencia).",
        "codeExample": {
            "language": "javascript",
            "code": "// 1. Código Fuente Original:\nfunction calculateDiscount(userMembershipLevel, cartTotalAmount) {\n  const SECONDS_IN_HOUR = 60 * 60;\n  if (process.env['NODE_ENV'] !== 'production') {\n    console.log('Calculando descuento para nivel:', userMembershipLevel);\n  }\n  if (userMembershipLevel === 'VIP') {\n    return cartTotalAmount * 0.8;\n  } else {\n    return cartTotalAmount;\n  }\n}\n\n// 2. Salida tras Mangling, Constant Folding y DCE de esbuild/Terser:\nfunction calculateDiscount(e,t){return'VIP'===e?.8*t:t}"
        },
        "visualDiagram": {
            "id": "diag-bld-18",
            "title": "Técnicas Avanzadas de Minificación: Terser, esbuild & Mangling",
            "caption": "Transformaciones AST estructurales: mangling de nombres de variables, precalculado de constantes (constant folding) y purga de ramas muertas.",
            "diagramType": "build-terser-minification-mangling"
        },
        "interviewTips": {
            "whatInterviewersWant": "Demostrar que conoces las optimizaciones AST (mangling, DCE, constant folding) y cómo los reemplazos de variables de entorno permiten eliminar código de desarrollo en producción.",
            "commonPitfalls": [
                "Activar mangling sobre propiedades de objetos que interactúan con APIs externas sin whitelist, renombrando campos JSON que el backend espera con su nombre original.",
                "Creer que la minificación solo ahorra transferencia de red: también acelera el tiempo de parseo y compilación en el motor V8 del navegador móvil."
            ],
            "followUps": [
                "¿Qué es el mangling de propiedades y por qué es arriesgado?",
                "¿Qué es el constant folding?"
            ]
        },
        "quiz": {
            "question": "¿En qué consiste la técnica de 'Constant Folding' ejecutada por los minificadores de código?",
            "options": [
                "En comprimir archivos JS en formato ZIP en memoria",
                "En precalcular y simplificar operaciones y expresiones matemáticas entre constantes durante el build en lugar de postergarlas a runtime",
                "En renombrar variables para que solo tengan una letra",
                "En mover las constantes a una base de datos local IndexedDB"
            ],
            "correctIndex": 1,
            "explanation": "Constant Folding es la optimización donde el compilador evalúa operaciones con valores constantes en tiempo de build (ej. 1000 * 60 ➔ 60000), ahorrando CPU en el navegador del usuario."
        },
        "level": "medio"
    },
    {
        "title": "¿Cómo impacta el empaquetado en arquitecturas modernas de SSR/Streaming (SSR bundle vs Client Hydration bundle y React Server Components)?",
        "response": "En arquitecturas frontend modernas con **Server-Side Rendering (SSR)** y **React Server Components (RSC)**, el empaquetador ya no genera un único grafo de dependencias para el cliente; debe **bifurcar la compilación en dos o tres grafos ortogonales coordinados**.\n\n### 1. El Bundle del Servidor (Server Bundle):\n- Compilado para ejecutarse en runtimes de servidor (Node.js, Cloudflare Workers, V8 Edge).\n- Contiene la lógica que accede a bases de datos, APIs privadas con secretos de servidor y la maquinaria de renderizado HTML inicial.\n- En React Server Components, el código de los Server Components vive **exclusivamente en este bundle** y **NUNCA se envía al cliente**.\n\n### 2. El Bundle del Cliente (Client Hydration Bundle / Islands):\n- Cuando el compilador encuentra la directiva `'use client'`, crea un **punto de frontera (Boundary)**.\n- Solo los componentes interactivos con estado (`useState`, `useEffect`, event listeners de clic) se empaquetan en los chunks del cliente.\n- **Resultado Arquitectónico**: El usuario recibe una página HTML estática instantánea junto a un payload de streaming ligero, reduciendo drásticamente el tamaño del JavaScript que el navegador debe parsear e hidratar (erradicando la penalización de Total Blocking Time).",
        "codeExample": {
            "language": "tsx",
            "code": "// 1. Server Component (0 bytes de JS enviados al cliente):\n// src/components/UserProfile.tsx (por defecto Server Component en Next.js App Router)\nimport { db } from '@/lib/db'; // ¡Librería pesada de PostgreSQL!\nimport { LikeButton } from './LikeButton'; // Client Component\n\nexport async function UserProfile({ id }: { id: string }) {\n  const user = await db.users.findUnique({ where: { id } });\n  // db NUNCA se empaqueta en el bundle del navegador:\n  return (\n    <div>\n      <h1>{user.name}</h1>\n      <LikeButton initialLikes={user.likes} />\n    </div>\n  );\n}\n\n// 2. Client Component (Se empaqueta en el client chunk para hidratación):\n// 'use client';\n// export function LikeButton({ initialLikes }: { initialLikes: number }) { ... }"
        },
        "visualDiagram": {
            "id": "diag-bld-19",
            "title": "Arquitectura de Bundles en SSR & Hidratación Parcial (Islands / RSC)",
            "caption": "Bifurcación de compilación: Server Bundle (ejecución sin cliente) vs Client Bundle (islas interactivas mínimas para hidratación).",
            "diagramType": "build-modern-island-ssr-hydration"
        },
        "interviewTips": {
            "whatInterviewersWant": "Explicar cómo `'use client'` actúa como un split point para el empaquetador y enfatizar que los React Server Components reducen el bundle del navegador a cero para componentes puramente estáticos.",
            "commonPitfalls": [
                "Creer que `'use client'` significa 'este componente solo se ejecuta en el cliente' (los Client Components también se pre-renderizan a HTML en el servidor durante el SSR).",
                "Importar librerías de servidor (como `fs` o drivers de DB) dentro de un archivo con `'use client'`, rompiendo el build del cliente."
            ],
            "followUps": [
                "¿Por qué se generan bundles distintos para servidor y cliente?",
                "¿Cómo impide React Server Components que código de servidor llegue al cliente?"
            ]
        },
        "quiz": {
            "question": "¿Qué ocurre con el código y las dependencias de un React Server Component (RSC) al generar el build para el navegador?",
            "options": [
                "Se compilan a WebAssembly y se descargan en el cliente",
                "Quedan excluidos al 100% del bundle del cliente; su resultado se envía como HTML estático y payload RSC sin código JS asociado",
                "Se inyectan dentro de la etiqueta <script id=\"rsc\"> en base64",
                "Se duplican en el bundle del cliente para que puedan re-ejecutarse en el navegador"
            ],
            "correctIndex": 1,
            "explanation": "Los React Server Components se ejecutan únicamente en el servidor. Su código JavaScript y sus dependencias de servidor nunca se descargan en el navegador, reduciendo el bundle del cliente a cero para esos componentes."
        },
        "level": "experto"
    },
    {
        "title": "¿Qué son los Builds Deterministas y Reproducibles (Hermetic Builds) y por qué son cruciales para la seguridad y auditoría de software?",
        "response": "Un **Build Determinista y Reproducible (Hermetic Build)** es aquel que garantiza que, dadas exactamente las mismas fuentes de código fuente y dependencias, **el proceso de compilación generará un artefacto idéntico bit a bit (mismo hash SHA-256)** sin importar quién lo ejecute, en qué fecha o en qué sistema operativo.\n\n### 1. Variables que Rompen el Determinismo:\n1. **Timestamps en archivos**: Empaquetadores y utilidades de zip guardan la fecha y hora actual de modificación de los archivos. Dos builds con 1 segundo de diferencia generan hashes distintos.\n   - *Solución*: Estandarizar la variable de entorno **`SOURCE_DATE_EPOCH`** (fijando el timestamp al momento del commit de Git).\n2. **Rutas Absolutas de Sistema de Archivos**: Herramientas que embeben rutas locales del host (`/Users/diegovilla/...` vs `/home/runner/...`) en sourcemaps o ASTs.\n3. **Orden No Determinista del Sistema de Archivos**: La lectura de directorios con `readdir` depende del sistema de archivos (ext4, APFS, NTFS) y puede retornar archivos en distinto orden si no se aplica un sort lexicográfico explícito.\n\n### 2. Importancia Crítica en Seguridad de Cadena de Suministro:\n- **Defensa contra Ataques a CI**: Si el pipeline de CI fue comprometido por un atacante y alteró el binario publicado en producción, cualquier auditor independiente puede clonar el repositorio, compilarlo en su máquina local y verificar si el hash coincide bit a bit. Si los hashes difieren, la manipulación queda al descubierto de inmediato.",
        "codeExample": {
            "language": "bash",
            "code": "# 1. Normalizar fecha para reproducibilidad hermética:\nexport SOURCE_DATE_EPOCH=$(git log -1 --pretty=%ct)\n\n# 2. Configurar Vite / Rollup para hashing determinista:\n# (vite.config.ts)\nexport default defineConfig({\n  build: {\n    rollupOptions: {\n      output: {\n        // Ordenar chunks de manera determinista\n        chunkFileNames: 'assets/[name].[contenthash].js',\n      },\n    },\n  },\n});\n\n# 3. Verificación forense independiente en dos entornos distintos:\nsha256sum dist/assets/app.js\n# Entorno Mac:    e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855\n# Entorno Ubuntu: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855\n# ¡COINCIDENCIA CRIPTOGRÁFICA EXACTA! (Build Reproducible)"
        },
        "visualDiagram": {
            "id": "diag-bld-20",
            "title": "Builds Reproducibles y Deterministas (Hermetic Builds)",
            "caption": "Misma semilla de entrada en máquinas y fechas distintas genera exactamente el mismo hash binario SHA-256 bit a bit.",
            "diagramType": "build-reproducible-deterministic-builds"
        },
        "interviewTips": {
            "whatInterviewersWant": "Demostrar conocimiento senior de seguridad y reproducibilidad: saber qué es `SOURCE_DATE_EPOCH`, cómo las rutas absolutas rompen hashes y por qué la reproducibilidad es fundamental para auditorías de software.",
            "commonPitfalls": [
                "Incluir `Date.now()` o `new Date().toISOString()` dentro del código generado o banners de build, destruyendo el determinismo del contenthash.",
                "Confundir builds reproducibles con 'el código compila sin errores en ambas máquinas' (reproducibilidad exige coincidencia idéntica a nivel binario bit a bit)."
            ],
            "followUps": [
                "¿Qué fuentes de no determinismo pueden afectar a un build (timestamps, orden de archivos)?",
                "¿Cómo verificarías que dos builds son idénticos bit a bit?"
            ]
        },
        "quiz": {
            "question": "¿Qué estándar de la industria se utiliza para fijar los timestamps de modificación de archivos durante el build y evitar que la fecha actual rompa la reproducibilidad binaria?",
            "options": [
                "TIMESTAMP_FREEZE=1",
                "SOURCE_DATE_EPOCH",
                "UTC_CLOCK_FIXED",
                "DISABLE_BUILD_DATE"
            ],
            "correctIndex": 1,
            "explanation": "SOURCE_DATE_EPOCH es la especificación estándar adoptada por proyectos open source y distribuciones Linux para reemplazar la fecha del reloj del sistema por el timestamp UNIX del último commit de Git durante la compilación."
        },
        "level": "experto"
    }
]
};

export default questionsBuildTools;
