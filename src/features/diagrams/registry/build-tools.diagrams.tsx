import { DiagramRegistry } from "../diagram.types";

/** Diagramas SVG del módulo Build Tools. */
export const buildToolsDiagrams: DiagramRegistry = {
  "build-bundler-vs-compiler-pipeline": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Compilador / Transpilador vs Bundler: Responsabilidades</text>

      {/* Left: Compiler / Transpiler */}
      <rect x="30" y="50" width="270" height="135" rx="8" fill={isDark ? "#1e1b4b" : "#eef2ff"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="165" y="70" fill="#818cf8" fontWeight="bold" fontSize="10.5" textAnchor="middle">Compilador / Transpilador (Babel / SWC / esbuild)</text>
      <text x="45" y="92" fill={textColor} fontSize="7.5">• Transformación 1 a 1 de código fuente:</text>
      <text x="55" y="105" fill={subtextColor} fontSize="7">  TSX / JSX ➔ JavaScript compatible (ES5/ESNext)</text>
      <text x="45" y="122" fill={textColor} fontSize="7.5">• No resuelve rutas complejas entre archivos</text>
      <text x="45" y="137" fill={textColor} fontSize="7.5">• No une archivos en paquetes ni empaqueta CSS</text>
      <rect x="45" y="152" width="240" height="22" rx="4" fill={isDark ? "#312e81" : "#c7d2fe"} />
      <text x="165" y="167" fill="#4338ca" fontWeight="bold" fontSize="8" textAnchor="middle">Entrada: File.tsx  ➔  Salida: File.js</text>

      {/* Right: Bundler */}
      <rect x="340" y="50" width="270" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="475" y="70" fill="#34d399" fontWeight="bold" fontSize="10.5" textAnchor="middle">Bundler (Vite / Webpack / Rollup)</text>
      <text x="355" y="92" fill={textColor} fontSize="7.5">• Construye el grafo completo de dependencias (DAG)</text>
      <text x="355" y="107" fill={textColor} fontSize="7.5">• Empaqueta múltiples módulos en Chunks optimizados</text>
      <text x="355" y="122" fill={textColor} fontSize="7.5">• Ejecuta Tree Shaking, Code Splitting y Minificación</text>
      <rect x="355" y="152" width="240" height="22" rx="4" fill={isDark ? "#065f46" : "#a7f3d0"} />
      <text x="475" y="167" fill="#047857" fontWeight="bold" fontSize="8" textAnchor="middle">Entrada: Grafo N módulos  ➔  Salida: dist/ (Chunks)</text>

      <rect x="25" y="192" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">Un compilador transforma sintaxis individual; un bundler resuelve el grafo y ensambla el artefacto de producción.</text>
    </svg>
  );
  },

  "build-webpack-loader-plugin-tapable": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Webpack Internals: Loaders (Transformación) vs Plugins (Tapable)</text>

      {/* Loaders Flow */}
      <rect x="30" y="50" width="270" height="135" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="165" y="68" fill="#60a5fa" fontWeight="bold" fontSize="10" textAnchor="middle">Loaders: Pipeline de Módulos</text>
      <text x="45" y="86" fill={subtextColor} fontSize="7">Se ejecutan de derecha a izquierda / abajo hacia arriba:</text>

      <rect x="45" y="96" width="70" height="26" rx="4" fill="#3b82f6" />
      <text x="80" y="112" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle">sass-loader</text>

      <text x="123" y="112" fill="#3b82f6" fontSize="10" fontWeight="bold">➔</text>

      <rect x="133" y="96" width="70" height="26" rx="4" fill="#2563eb" />
      <text x="168" y="112" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle">css-loader</text>

      <text x="211" y="112" fill="#3b82f6" fontSize="10" fontWeight="bold">➔</text>

      <rect x="221" y="96" width="70" height="26" rx="4" fill="#1d4ed8" />
      <text x="256" y="112" fill="#ffffff" fontSize="6.5" fontWeight="bold" textAnchor="middle">style-loader</text>

      <text x="45" y="145" fill={textColor} fontSize="7.5">• Propósito: Traducir archivos no-JS a módulos válidos</text>
      <text x="45" y="160" fill={textColor} fontSize="7.5">• Operan a nivel de archivo individual aislado</text>

      {/* Plugins Tapable */}
      <rect x="340" y="50" width="270" height="135" rx="8" fill={isDark ? "#311042" : "#fdf4ff"} stroke="#c026d3" strokeWidth="1.5" />
      <text x="475" y="68" fill="#e879f9" fontWeight="bold" fontSize="10" textAnchor="middle">Plugins: Tapable Lifecycle Hooks</text>
      <text x="355" y="86" fill={subtextColor} fontSize="7">Se enganchan a eventos globales de la compilación:</text>

      <rect x="355" y="96" width="240" height="18" rx="3" fill={isDark ? "#4c1d95" : "#ede9fe"} />
      <text x="475" y="108" fill="#a855f7" fontSize="7" fontFamily="monospace" textAnchor="middle">compiler.hooks.compile.tap(&apos;Plugin&apos;)</text>

      <rect x="355" y="118" width="240" height="18" rx="3" fill={isDark ? "#581c87" : "#fae8ff"} />
      <text x="475" y="130" fill="#c026d3" fontSize="7" fontFamily="monospace" textAnchor="middle">compilation.hooks.optimizeChunkAssets</text>

      <rect x="355" y="140" width="240" height="18" rx="3" fill={isDark ? "#701a75" : "#fce7f3"} />
      <text x="475" y="152" fill="#db2777" fontSize="7" fontFamily="monospace" textAnchor="middle">compiler.hooks.emit.tapAsync(&apos;Emit&apos;)</text>

      <text x="475" y="174" fill={textColor} fontSize="7" textAnchor="middle">Acceso al compilador completo, chunks y AST global</text>

      <rect x="25" y="192" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">Los Loaders actúan sobre código individual en importación; los Plugins interceptan el ciclo de compilación completo vía Tapable.</text>
    </svg>
  );
  },

  "build-vite-dev-vs-prod-dual": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Arquitectura Dual de Vite: Dev Server (ESM) vs Production (Rollup)</text>

      {/* Left: Dev Server */}
      <rect x="30" y="50" width="270" height="135" rx="8" fill={isDark ? "#1e1b4b" : "#eff6ff"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="165" y="68" fill="#60a5fa" fontWeight="bold" fontSize="10.5" textAnchor="middle">Modo Desarrollo: No-Bundling</text>
      <text x="45" y="88" fill={textColor} fontSize="7.5">• Navegador solicita módulos vía <tspan fontWeight="bold">&lt;script type=&quot;module&quot;&gt;</tspan></text>
      <text x="45" y="103" fill={textColor} fontSize="7.5">• Vite compila bajo demanda (On-Demand) con esbuild</text>
      <text x="45" y="118" fill="#10b981" fontSize="7.5" fontWeight="bold">• Arranque en frío instantáneo O(1) independiente del tamaño</text>
      <text x="45" y="133" fill={textColor} fontSize="7.5">• Pre-bundling de node_modules a ESM con esbuild</text>
      <rect x="45" y="148" width="240" height="24" rx="4" fill={isDark ? "#172554" : "#dbeafe"} />
      <text x="165" y="163" fill="#1d4ed8" fontWeight="bold" fontSize="7.5" textAnchor="middle">HMR Milisegundo mediante Native ESM</text>

      {/* Right: Production */}
      <rect x="340" y="50" width="270" height="135" rx="8" fill={isDark ? "#451a03" : "#fffbeb"} stroke="#f59e0b" strokeWidth="1.5" />
      <text x="475" y="68" fill="#fbbf24" fontWeight="bold" fontSize="10.5" textAnchor="middle">Modo Producción: Bundling con Rollup</text>
      <text x="355" y="88" fill={textColor} fontSize="7.5">• Genera chunks empaquetados para minimizar round-trips HTTP</text>
      <text x="355" y="103" fill={textColor} fontSize="7.5">• Tree Shaking estricto y Scope Hoisting profundo</text>
      <text x="355" y="118" fill={textColor} fontSize="7.5">• Inyección de preload tags y división de vendor chunks</text>
      <text x="355" y="133" fill={textColor} fontSize="7.5">• Minificación de JS con esbuild / Terser y CSS con Lightning CSS</text>
      <rect x="355" y="148" width="240" height="24" rx="4" fill={isDark ? "#78350f" : "#fef3c7"} />
      <text x="475" y="163" fill="#b45309" fontWeight="bold" fontSize="7.5" textAnchor="middle">Artefacto ultra optimizado para CDN y Red</text>

      <rect x="25" y="192" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">Vite aprovecha la rapidez del navegador moderno con ESM en desarrollo y garantiza máxima compresión con Rollup en build.</text>
    </svg>
  );
  },

  "build-tree-shaking-dead-code": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Algoritmo de Tree Shaking &amp; Análisis Estático de ESM</text>

      {/* Left: Library with unused exports */}
      <rect x="30" y="50" width="180" height="135" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke={border} strokeWidth="1" />
      <text x="120" y="68" fill={textColor} fontWeight="bold" fontSize="9" textAnchor="middle">Librería (utils.ts)</text>
      <rect x="40" y="78" width="160" height="24" rx="4" fill="#10b981" fillOpacity="0.2" stroke="#10b981" />
      <text x="50" y="93" fill="#10b981" fontSize="7" fontFamily="monospace">export const add = ...</text>
      <rect x="40" y="108" width="160" height="24" rx="4" fill="#ef4444" fillOpacity="0.2" stroke="#ef4444" />
      <text x="50" y="123" fill="#ef4444" fontSize="7" fontFamily="monospace">export const unused1 = ...</text>
      <rect x="40" y="138" width="160" height="24" rx="4" fill="#ef4444" fillOpacity="0.2" stroke="#ef4444" />
      <text x="50" y="153" fill="#ef4444" fontSize="7" fontFamily="monospace">export const unused2 = ...</text>
      <text x="120" y="176" fill={subtextColor} fontSize="6.5" textAnchor="middle">ESM: imports estáticos</text>

      {/* Center: Bundler Analyzer Engine */}
      <rect x="230" y="65" width="180" height="105" rx="8" fill={isDark ? "#312e81" : "#e0e7ff"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="320" y="85" fill="#818cf8" fontWeight="bold" fontSize="9.5" textAnchor="middle">Rollup / Webpack Engine</text>
      <text x="240" y="102" fill={textColor} fontSize="7">• AST Dead Code Elimination</text>
      <text x="240" y="115" fill={textColor} fontSize="7">• &apos;sideEffects: false&apos; verificado</text>
      <text x="240" y="128" fill={textColor} fontSize="7">• Purgado de nodos no alcanzables</text>
      <text x="320" y="155" fill="#4f46e5" fontWeight="bold" fontSize="8" textAnchor="middle">Eliminación en Build ➔</text>

      {/* Right: Clean Production Bundle */}
      <rect x="430" y="50" width="180" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="520" y="68" fill="#10b981" fontWeight="bold" fontSize="9" textAnchor="middle">Bundle Final (dist/app.js)</text>
      <rect x="440" y="78" width="160" height="28" rx="4" fill="#10b981" fillOpacity="0.3" stroke="#10b981" />
      <text x="520" y="95" fill="#047857" fontSize="7.5" fontWeight="bold" textAnchor="middle">function add(a,b)&#123;return a+b&#125;</text>
      <text x="520" y="128" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">✓ Código muerto eliminado</text>
      <text x="520" y="145" fill={textColor} fontSize="7" textAnchor="middle">Cero bytes desperdiciados</text>
      <text x="520" y="168" fill={subtextColor} fontSize="6.5" textAnchor="middle">CommonJS (require) NO permite esto</text>

      <rect x="25" y="192" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">Tree Shaking requiere sintaxis ESM estática. El flag sideEffects en package.json autoriza podar módulos no usados sin efectos colaterales.</text>
    </svg>
  );
  },

  "build-code-splitting-dynamic-import": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Code Splitting &amp; Carga Asíncrona con Dynamic Imports</text>

      {/* Left: Monolithic anti-pattern */}
      <rect x="30" y="50" width="260" height="135" rx="8" fill={isDark ? "#450a0a" : "#fef2f2"} stroke="#ef4444" strokeWidth="1.5" />
      <text x="160" y="68" fill="#ef4444" fontWeight="bold" fontSize="10" textAnchor="middle">Sin Code Splitting: Bundle Monolítico</text>
      <rect x="50" y="80" width="220" height="40" rx="6" fill="#ef4444" fillOpacity="0.2" stroke="#ef4444" />
      <text x="160" y="98" fill={textColor} fontSize="8" fontWeight="bold" textAnchor="middle">bundle.js (2.8 MB)</text>
      <text x="160" y="112" fill={subtextColor} fontSize="6.5" textAnchor="middle">Home + Admin Dashboard + Checkout + Gráficos</text>
      <text x="50" y="140" fill="#ef4444" fontSize="7.5" fontWeight="bold">⚠️ FCP Lento (Time to Interactive destruido)</text>
      <text x="50" y="155" fill={textColor} fontSize="7">El usuario móvil descarga vistas que jamás abrirá</text>
      <text x="50" y="170" fill={subtextColor} fontSize="6.5">Desperdicio de CPU de parsing y memoria en browser</text>

      {/* Right: Intelligent Code Splitting */}
      <rect x="330" y="50" width="280" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="470" y="68" fill="#10b981" fontWeight="bold" fontSize="10" textAnchor="middle">Code Splitting Estratégico (import())</text>
      <rect x="345" y="80" width="120" height="32" rx="4" fill="#10b981" />
      <text x="405" y="96" fill="#ffffff" fontSize="7.5" fontWeight="bold" textAnchor="middle">main.js (80 KB)</text>
      <text x="405" y="106" fill="#ffffff" fontSize="6" textAnchor="middle">Home inicial (FCP rápido)</text>

      <rect x="480" y="80" width="115" height="32" rx="4" fill={isDark ? "#1e293b" : "#e2e8f0"} stroke="#64748b" />
      <text x="537" y="96" fill={textColor} fontSize="7" fontFamily="monospace" textAnchor="middle">admin.[hash].js</text>
      <text x="537" y="106" fill={subtextColor} fontSize="6" textAnchor="middle">Lazy load on demand</text>

      <text x="345" y="132" fill="#10b981" fontSize="7.5" fontWeight="bold">✓ Chunks independientes generados en build</text>
      <text x="345" y="147" fill={textColor} fontSize="7">• React.lazy(() =&gt; import(&apos;./Admin&apos;))</text>
      <text x="345" y="162" fill={textColor} fontSize="7">• Vendor Chunk Splitting para React / ReactDOM en caché</text>
      <text x="345" y="175" fill={subtextColor} fontSize="6.5">Aceleración máxima de Core Web Vitals (LCP / INP)</text>

      <rect x="25" y="192" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">El code splitting divide el grafo en puntos asíncronos import(), reduciendo el bundle inicial al mínimo necesario para pintar la vista.</text>
    </svg>
  );
  },

  "build-sourcemaps-vlq-mapping": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Arquitectura de Source Maps &amp; VLQ (Variable-Length Quantity)</text>

      {/* Left: Minified bundle */}
      <rect x="30" y="50" width="180" height="135" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke={border} />
      <text x="120" y="68" fill={textColor} fontWeight="bold" fontSize="9" textAnchor="middle">dist/bundle.min.js</text>
      <text x="45" y="88" fill={subtextColor} fontSize="7" fontFamily="monospace">function n(t,e)&#123;return</text>
      <text x="45" y="100" fill="#ef4444" fontSize="7" fontFamily="monospace">t.auth(e.token)&#125;</text>
      <text x="45" y="125" fill="#f59e0b" fontSize="6.5">Error en línea 1, col 412:</text>
      <text x="45" y="137" fill="#ef4444" fontSize="6.5" fontWeight="bold">TypeError: Cannot read null</text>
      <text x="120" y="172" fill={subtextColor} fontSize="6.5" textAnchor="middle">Código ilegible para humanos</text>

      {/* Center: Source Map V3 VLQ */}
      <rect x="230" y="50" width="180" height="135" rx="8" fill={isDark ? "#172554" : "#eff6ff"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="320" y="68" fill="#3b82f6" fontWeight="bold" fontSize="9.5" textAnchor="middle">bundle.min.js.map (V3)</text>
      <text x="240" y="86" fill={textColor} fontSize="7" fontFamily="monospace">version: 3</text>
      <text x="240" y="98" fill={textColor} fontSize="7" fontFamily="monospace">sources: [&apos;auth.tsx&apos;]</text>
      <text x="240" y="110" fill="#2563eb" fontSize="7" fontFamily="monospace">mappings: &apos;AAAA,IAAA,E...&apos;</text>
      <rect x="240" y="122" width="160" height="30" rx="4" fill={isDark ? "#1e3a8a" : "#dbeafe"} />
      <text x="320" y="135" fill="#1d4ed8" fontSize="6.5" fontWeight="bold" textAnchor="middle">Base64 VLQ Decodificador</text>
      <text x="320" y="146" fill="#1e40af" fontSize="6" textAnchor="middle">(Col Gen ➔ Col Src, Archivo, Línea)</text>
      <text x="320" y="172" fill="#3b82f6" fontSize="7" fontWeight="bold" textAnchor="middle">Mapeo Bidireccional Exacto</text>

      {/* Right: Original Source in DevTools */}
      <rect x="430" y="50" width="180" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="520" y="68" fill="#10b981" fontWeight="bold" fontSize="9" textAnchor="middle">DevTools (src/auth.tsx)</text>
      <text x="445" y="88" fill={subtextColor} fontSize="7" fontFamily="monospace">42: export async function</text>
      <text x="445" y="100" fill="#10b981" fontSize="7" fontFamily="monospace">43:   authenticateUser(</text>
      <text x="445" y="112" fill="#ef4444" fontSize="7" fontFamily="monospace">44:     user: UserSession</text>
      <text x="445" y="124" fill={subtextColor} fontSize="7" fontFamily="monospace">45:   ) &#123; ... &#125;</text>
      <text x="520" y="155" fill="#10b981" fontSize="7.5" fontWeight="bold" textAnchor="middle">✓ Stacktrace Real Original</text>
      <text x="520" y="172" fill={subtextColor} fontSize="6.5" textAnchor="middle">Seguridad: ocultar .map en prod</text>

      <rect x="25" y="192" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">Los Source Maps v3 codifican coordenadas con Base64-VLQ. En producción se suben en privado a Sentry/Datadog sin exponerlos públicamente.</text>
    </svg>
  );
  },

  "build-hmr-engine-websocket": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Mecánica Interna de Hot Module Replacement (HMR) vía WebSockets</text>

      {/* Step 1: Dev Server File Watcher */}
      <rect x="30" y="50" width="170" height="135" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke={border} />
      <text x="115" y="68" fill={textColor} fontWeight="bold" fontSize="9" textAnchor="middle">1. File Watcher (Chokidar)</text>
      <rect x="40" y="78" width="150" height="22" rx="4" fill="#3b82f6" />
      <text x="115" y="92" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle">Editor guarda Button.tsx</text>
      <text x="45" y="115" fill={textColor} fontSize="7">• Detecta cambio en disco</text>
      <text x="45" y="128" fill={textColor} fontSize="7">• Invalida nodo en ModuleGraph</text>
      <text x="45" y="141" fill="#10b981" fontSize="7" fontWeight="bold">• Recompila SOLO ese archivo</text>
      <text x="115" y="172" fill={subtextColor} fontSize="6.5" textAnchor="middle">Latencia &lt; 10ms</text>

      {/* Step 2: WebSocket Message */}
      <rect x="220" y="50" width="200" height="135" rx="8" fill={isDark ? "#311042" : "#fdf4ff"} stroke="#c026d3" strokeWidth="1.5" />
      <text x="320" y="68" fill="#e879f9" fontWeight="bold" fontSize="9.5" textAnchor="middle">2. WebSocket Push al Browser</text>
      <rect x="230" y="80" width="180" height="42" rx="4" fill={isDark ? "#4c1d95" : "#ede9fe"} />
      <text x="240" y="94" fill="#a855f7" fontSize="6.5" fontFamily="monospace">&#123; type: &apos;update&apos;,</text>
      <text x="240" y="105" fill="#a855f7" fontSize="6.5" fontFamily="monospace">  updates: [&#123; path: &apos;/src/Button.tsx&apos;,</text>
      <text x="240" y="116" fill="#a855f7" fontSize="6.5" fontFamily="monospace">  timestamp: 1726435200 &#125;] &#125;</text>
      <text x="235" y="138" fill={textColor} fontSize="7">• Envía payload binario ligero</text>
      <text x="235" y="151" fill={textColor} fontSize="7">• Sin recargar la página (NO F5)</text>
      <text x="320" y="172" fill="#c026d3" fontSize="7" fontWeight="bold" textAnchor="middle">Canal Bidireccional Activo</text>

      {/* Step 3: Client HMR Runtime */}
      <rect x="440" y="50" width="170" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="525" y="68" fill="#10b981" fontWeight="bold" fontSize="9" textAnchor="middle">3. Runtime en Browser</text>
      <text x="450" y="86" fill={textColor} fontSize="7">• import.meta.hot.accept()</text>
      <text x="450" y="99" fill={textColor} fontSize="7">• Fetch dinámico del módulo:</text>
      <text x="455" y="112" fill="#047857" fontSize="6.5" fontFamily="monospace">import(&apos;/src/Button.tsx?t=...&apos;)</text>
      <text x="450" y="128" fill="#10b981" fontSize="7" fontWeight="bold">• React Fast Refresh aplica diff</text>
      <text x="450" y="141" fill={textColor} fontSize="7">• Preserva el estado de useState!</text>
      <text x="525" y="172" fill="#059669" fontSize="7.5" fontWeight="bold" textAnchor="middle">✓ Estado Intacto en Pantalla</text>

      <rect x="25" y="192" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">HMR sustituye módulos en tiempo de ejecución inyectando la nueva versión vía WebSockets preservando el estado de React en memoria.</text>
    </svg>
  );
  },

  "build-esbuild-go-concurrency": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Rendimiento Extremo: Compiladores Nativos (esbuild Go / SWC Rust) vs Node.js</text>

      {/* Left: Traditional JS/Node compiler */}
      <rect x="30" y="50" width="270" height="135" rx="8" fill={isDark ? "#3f1d1d" : "#fef2f2"} stroke="#f87171" strokeWidth="1.5" />
      <text x="165" y="68" fill="#ef4444" fontWeight="bold" fontSize="10.5" textAnchor="middle">Herramientas en Node.js (Babel / Webpack / Terser)</text>
      <text x="45" y="88" fill={textColor} fontSize="7.5">• Un solo hilo de ejecución por defecto (Single-Thread JS)</text>
      <text x="45" y="103" fill={textColor} fontSize="7.5">• Serialización masiva entre ASTs incompatibles (Babel ➔ Webpack ➔ Terser)</text>
      <text x="45" y="118" fill={textColor} fontSize="7.5">• Presión severa en Garbage Collector de V8 con millones de objetos</text>
      <rect x="45" y="135" width="240" height="24" rx="4" fill="#fee2e2" />
      <text x="165" y="151" fill="#b91c1c" fontWeight="bold" fontSize="8" textAnchor="middle">Tiempo de Build: 45.2 segundos (1x)</text>
      <text x="165" y="174" fill={subtextColor} fontSize="6.5" textAnchor="middle">Cuello de botella de CPU y memoria en proyectos enterprise</text>

      {/* Right: Native Compiled Tools */}
      <rect x="340" y="50" width="270" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="475" y="68" fill="#10b981" fontWeight="bold" fontSize="10.5" textAnchor="middle">Compiladores Nativos (esbuild en Go / SWC en Rust)</text>
      <text x="355" y="88" fill={textColor} fontSize="7.5">• Paralelismo masivo en todos los núcleos de CPU (Go Goroutines / Rayon)</text>
      <text x="355" y="103" fill={textColor} fontSize="7.5">• AST unificado: Parseo, Type Stripping y Minificación en un solo paso</text>
      <text x="355" y="118" fill="#10b981" fontSize="7.5" fontWeight="bold">• Acceso a memoria contigua sin pausas de Garbage Collector</text>
      <rect x="355" y="135" width="240" height="24" rx="4" fill="#a7f3d0" />
      <text x="475" y="151" fill="#047857" fontWeight="bold" fontSize="8" textAnchor="middle">Tiempo de Build: 0.42 segundos (100x más rápido)</text>
      <text x="475" y="174" fill="#059669" fontSize="6.5" fontWeight="bold" textAnchor="middle">Utilizado por Vite para transpilación y Next.js para builds</text>

      <rect x="25" y="192" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">esbuild y SWC transforman código en lenguaje máquina directo con paralelismo nativo de hilos, evitando la sobrecarga del runtime de V8.</text>
    </svg>
  );
  },

  "build-rollup-scope-hoisting": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Rollup Scope Hoisting: Aplanamiento Léxico vs Envoltorios de Función</text>

      {/* Left: Traditional Function Wrappers (Webpack classic) */}
      <rect x="30" y="50" width="260" height="135" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke={border} />
      <text x="160" y="68" fill={textColor} fontWeight="bold" fontSize="10" textAnchor="middle">Empaquetado Tradicional (Wrappers)</text>
      <rect x="45" y="78" width="230" height="26" rx="4" fill={isDark ? "#334155" : "#e2e8f0"} />
      <text x="160" y="94" fill={subtextColor} fontSize="6.5" fontFamily="monospace">{"/* module 1 */"} (function(module, exports)&#123;...&#125;)</text>
      <rect x="45" y="108" width="230" height="26" rx="4" fill={isDark ? "#334155" : "#e2e8f0"} />
      <text x="160" y="124" fill={subtextColor} fontSize="6.5" fontFamily="monospace">{"/* module 2 */"} (function(module, exports)&#123;...&#125;)</text>
      <text x="45" y="148" fill="#ef4444" fontSize="7">• Sobrecarga de clausuras y memoria en runtime</text>
      <text x="45" y="161" fill={textColor} fontSize="7">• Bloquea optimizaciones del JIT inlining</text>
      <text x="160" y="176" fill={subtextColor} fontSize="6.5" textAnchor="middle">Código inflado con código boilerplate</text>

      {/* Right: Rollup Scope Hoisting */}
      <rect x="330" y="50" width="280" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="470" y="68" fill="#10b981" fontWeight="bold" fontSize="10" textAnchor="middle">Rollup Scope Hoisting (Ámbito Plano)</text>
      <rect x="345" y="78" width="250" height="56" rx="4" fill={isDark ? "#065f46" : "#d1fae5"} stroke="#10b981" />
      <text x="355" y="92" fill="#047857" fontSize="7" fontFamily="monospace">const PI = 3.14159;</text>
      <text x="355" y="106" fill="#047857" fontSize="7" fontFamily="monospace">function calcArea(r) &#123; return PI * r * r; &#125;</text>
      <text x="355" y="120" fill="#047857" fontSize="7" fontFamily="monospace">export &#123; calcArea &#125;;</text>
      <text x="345" y="148" fill="#10b981" fontSize="7.5" fontWeight="bold">✓ Un solo ámbito léxico continuo sin clausuras</text>
      <text x="345" y="162" fill={textColor} fontSize="7">• Variables renombradas para evitar colisiones</text>
      <text x="345" y="175" fill={subtextColor} fontSize="6.5">Compiladores JIT optimizan llamadas como código nativo</text>

      <rect x="25" y="192" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">Scope Hoisting aplana todos los módulos en un ámbito global compartido, eliminando wrappers de función y permitiendo bundle mínimo.</text>
    </svg>
  );
  },

  "build-bundle-analysis-treemap": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Auditoría de Deuda de Rendimiento: Bundle Analyzer Treemap</text>

      {/* Treemap Visualization Box */}
      <rect x="30" y="48" width="580" height="120" rx="8" fill={isDark ? "#0f172a" : "#f8fafc"} stroke={border} strokeWidth="1.5" />

      {/* Giant Monolithic Library Warning */}
      <rect x="40" y="58" width="260" height="100" rx="6" fill="#ef4444" fillOpacity="0.2" stroke="#ef4444" strokeWidth="1.5" />
      <text x="170" y="80" fill="#ef4444" fontWeight="bold" fontSize="9" textAnchor="middle">moment.js (480 KB - 42% del Bundle)</text>
      <text x="170" y="98" fill={textColor} fontSize="7" textAnchor="middle">⚠️ Todos los locales i18n empaquetados por defecto</text>
      <text x="170" y="115" fill={subtextColor} fontSize="6.5" textAnchor="middle">Recomendación: Reemplazar por date-fns o Day.js (2 KB)</text>
      <rect x="60" y="125" width="220" height="22" rx="3" fill="#fee2e2" />
      <text x="170" y="139" fill="#991b1b" fontSize="7" fontWeight="bold" textAnchor="middle">Ahorro potencial inmediato: -478 KB (-85%)</text>

      {/* Duplicate libraries */}
      <rect x="310" y="58" width="140" height="100" rx="6" fill="#f59e0b" fillOpacity="0.2" stroke="#f59e0b" strokeWidth="1.5" />
      <text x="380" y="80" fill="#f59e0b" fontWeight="bold" fontSize="8" textAnchor="middle">lodash duplicado (95 KB)</text>
      <text x="380" y="96" fill={textColor} fontSize="6.5" textAnchor="middle">• lodash@4.17.15</text>
      <text x="380" y="108" fill={textColor} fontSize="6.5" textAnchor="middle">• lodash-es@4.17.21</text>
      <text x="380" y="125" fill={subtextColor} fontSize="6" textAnchor="middle">Solución: dedupe en vite/webpack</text>
      <text x="380" y="145" fill="#d97706" fontSize="6.5" fontWeight="bold" textAnchor="middle">Doble Instancia en Disco</text>

      {/* Core Application Code */}
      <rect x="460" y="58" width="140" height="100" rx="6" fill="#10b981" fillOpacity="0.2" stroke="#10b981" strokeWidth="1.5" />
      <text x="530" y="80" fill="#10b981" fontWeight="bold" fontSize="8" textAnchor="middle">Código Propio (65 KB)</text>
      <text x="530" y="98" fill={textColor} fontSize="7" textAnchor="middle">src/components (30 KB)</text>
      <text x="530" y="112" fill={textColor} fontSize="7" textAnchor="middle">src/features (25 KB)</text>
      <text x="530" y="126" fill={textColor} fontSize="7" textAnchor="middle">src/store (10 KB)</text>
      <text x="530" y="145" fill="#047857" fontSize="7" fontWeight="bold" textAnchor="middle">✓ Tree-shaked y óptimo</text>

      {/* Footer Summary */}
      <rect x="25" y="192" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">Visualizar el bundle permite fijar presupuestos de rendimiento (Bundle Budgets en CI) y erradicar dependencias duplicadas o infladas.</text>
    </svg>
  );
  },

  "build-module-federation-remotes": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Webpack 5 Module Federation: Micro-Frontends Dinámicos en Runtime</text>

      {/* Host Container */}
      <rect x="30" y="50" width="180" height="135" rx="8" fill={isDark ? "#1e1b4b" : "#eef2ff"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="120" y="68" fill="#818cf8" fontWeight="bold" fontSize="9.5" textAnchor="middle">Host Container (Shell)</text>
      <text x="40" y="86" fill={textColor} fontSize="7">• Carga remotes dinámicamente</text>
      <text x="40" y="99" fill={textColor} fontSize="7">• Define librerías compartidas:</text>
      <rect x="40" y="106" width="160" height="22" rx="3" fill={isDark ? "#312e81" : "#c7d2fe"} />
      <text x="120" y="120" fill="#4338ca" fontSize="6.5" fontFamily="monospace" textAnchor="middle">shared: &#123; react: &#123; singleton: true &#125;&#125;</text>
      <text x="40" y="145" fill={textColor} fontSize="7">• Consume &lt;RemoteNavbar /&gt;</text>
      <text x="120" y="172" fill="#6366f1" fontSize="7" fontWeight="bold" textAnchor="middle">Despliegue Independiente</text>

      {/* Dynamic Runtime Connection */}
      <text x="240" y="100" fill="#818cf8" fontSize="12" fontWeight="bold">⇄</text>
      <text x="220" y="115" fill={subtextColor} fontSize="6" textAnchor="middle">remoteEntry.js</text>
      <text x="220" y="125" fill={subtextColor} fontSize="6" textAnchor="middle">en Runtime</text>

      {/* Remote 1: Auth Micro-frontend */}
      <rect x="270" y="50" width="160" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="350" y="68" fill="#10b981" fontWeight="bold" fontSize="9" textAnchor="middle">Remote: Auth MFE</text>
      <text x="280" y="86" fill={textColor} fontSize="7">• Expone: &apos;./LoginButton&apos;</text>
      <text x="280" y="100" fill={textColor} fontSize="7">• Compila en su propio CI</text>
      <text x="280" y="115" fill="#10b981" fontSize="7" fontWeight="bold">• Cero re-build del Shell</text>
      <text x="280" y="132" fill={subtextColor} fontSize="6.5">Reutiliza React del Host</text>
      <text x="350" y="172" fill="#047857" fontSize="7" fontWeight="bold" textAnchor="middle">Puerto 3001</text>

      {/* Remote 2: Payments Micro-frontend */}
      <rect x="450" y="50" width="160" height="135" rx="8" fill={isDark ? "#451a03" : "#fffbeb"} stroke="#f59e0b" strokeWidth="1.5" />
      <text x="530" y="68" fill="#f59e0b" fontWeight="bold" fontSize="9" textAnchor="middle">Remote: Checkout MFE</text>
      <text x="460" y="86" fill={textColor} fontSize="7">• Expone: &apos;./CheckoutForm&apos;</text>
      <text x="460" y="100" fill={textColor} fontSize="7">• Equipo autónomo en React 19</text>
      <text x="460" y="115" fill={textColor} fontSize="7">• Fallback si falla la red</text>
      <text x="460" y="132" fill={subtextColor} fontSize="6.5">Versionado coordinado</text>
      <text x="530" y="172" fill="#b45309" fontSize="7" fontWeight="bold" textAnchor="middle">Puerto 3002</text>

      <rect x="25" y="192" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">Module Federation permite cargar código compilado de servidores remotos en runtime, negociando dependencias singleton para evitar duplicar React.</text>
    </svg>
  );
  },

  "build-content-hashing-caching": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Estrategia de Caching Inmutable &amp; Content Hashing en CDN</text>

      {/* HTML file: No Cache */}
      <rect x="30" y="50" width="270" height="135" rx="8" fill={isDark ? "#1e293b" : "#f8fafc"} stroke="#ef4444" strokeWidth="1.5" />
      <text x="165" y="68" fill="#ef4444" fontWeight="bold" fontSize="10" textAnchor="middle">1. index.html (Punto de Entrada)</text>
      <rect x="45" y="78" width="240" height="24" rx="4" fill="#fee2e2" />
      <text x="165" y="93" fill="#991b1b" fontSize="7" fontFamily="monospace" textAnchor="middle">Cache-Control: no-cache, no-store, must-revalidate</text>
      <text x="45" y="118" fill={textColor} fontSize="7.5">• SIEMPRE se consulta al servidor de origen</text>
      <text x="45" y="132" fill={textColor} fontSize="7.5">• Apunta a los hashes de los assets más recientes:</text>
      <text x="50" y="146" fill="#2563eb" fontSize="7" fontFamily="monospace">&lt;script src=&quot;/assets/app.a8f9c2.js&quot;&gt;</text>
      <text x="165" y="172" fill="#ef4444" fontSize="7" fontWeight="bold" textAnchor="middle">Cero Caché para Despliegues Instantáneos</text>

      {/* Bundled Chunks: Immutable Cache */}
      <rect x="340" y="50" width="270" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="475" y="68" fill="#10b981" fontWeight="bold" fontSize="10" textAnchor="middle">2. Assets Estáticos ([contenthash].js / css)</text>
      <rect x="355" y="78" width="240" height="24" rx="4" fill="#d1fae5" />
      <text x="475" y="93" fill="#065f46" fontSize="7" fontFamily="monospace" textAnchor="middle">Cache-Control: public, max-age=31536000, immutable</text>
      <text x="355" y="118" fill={textColor} fontSize="7.5">• Guardados en caché del navegador durante 1 año</text>
      <text x="355" y="132" fill={textColor} fontSize="7.5">• [contenthash] cambia si el código cambia 1 solo bit</text>
      <text x="355" y="146" fill="#10b981" fontSize="7.5" fontWeight="bold">• 100% de aciertos de caché para usuarios recurrentes</text>
      <text x="475" y="172" fill="#047857" fontSize="7" fontWeight="bold" textAnchor="middle">Máxima Eficiencia en Red (0 B transfers)</text>

      <rect x="25" y="192" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">HTML con no-cache + Chunks con contenthash e immutable garantiza actualizaciones instantáneas en producción con descargas cero para archivos sin cambios.</text>
    </svg>
  );
  },

  "build-turbopack-incremental-engine": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Turbopack: Computación Incremental en Rust a Nivel de Función</text>

      {/* Left: Traditional bundler re-execution */}
      <rect x="30" y="50" width="260" height="135" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke={border} />
      <text x="160" y="68" fill={textColor} fontWeight="bold" fontSize="10" textAnchor="middle">Bundlers Tradicionales (Nivel Módulo)</text>
      <rect x="45" y="80" width="230" height="26" rx="4" fill="#fee2e2" />
      <text x="160" y="96" fill="#991b1b" fontSize="7" textAnchor="middle">Cambia 1 línea ➔ Invalida módulo completo</text>
      <text x="45" y="122" fill={textColor} fontSize="7.5">• Re-ejecuta todos los plugins del archivo</text>
      <text x="45" y="137" fill={textColor} fontSize="7.5">• Reconstruye el AST completo del archivo</text>
      <text x="45" y="152" fill={subtextColor} fontSize="7">• Escala linealmente con el tamaño de las vistas</text>
      <text x="160" y="174" fill={subtextColor} fontSize="6.5" textAnchor="middle">Lento en aplicaciones de &gt; 10,000 archivos</text>

      {/* Right: Turbopack Turbo Engine */}
      <rect x="330" y="50" width="280" height="135" rx="8" fill={isDark ? "#1e1b4b" : "#eff6ff"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="470" y="68" fill="#3b82f6" fontWeight="bold" fontSize="10" textAnchor="middle">Turbopack (Turbo Engine en Rust)</text>
      <rect x="345" y="80" width="250" height="26" rx="4" fill="#dbeafe" />
      <text x="470" y="96" fill="#1e40af" fontSize="7" fontWeight="bold" textAnchor="middle">Memoización a Nivel de Llamada de Función</text>
      <text x="345" y="122" fill="#10b981" fontSize="7.5" fontWeight="bold">• NUNCA repite un cálculo ya realizado</text>
      <text x="345" y="137" fill={textColor} fontSize="7.5">• Grafo reactivo de llamadas de funciones en memoria</text>
      <text x="345" y="152" fill={textColor} fontSize="7.5">• Actualizaciones casi instantáneas en aplicaciones masivas</text>
      <text x="470" y="174" fill="#2563eb" fontSize="7" fontWeight="bold" textAnchor="middle">Diseñado en Rust para Next.js App Router</text>

      <rect x="25" y="192" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">Turbopack lleva la computación incremental al nivel de funciones individuales en Rust, logrando que el tiempo de HMR no crezca con el tamaño del proyecto.</text>
    </svg>
  );
  },

  "build-polyfill-corejs-browserslist": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Estrategia de Polyfills: Browserslist, core-js &amp; Transpilación</text>

      {/* Left: Syntax vs API */}
      <rect x="30" y="50" width="180" height="135" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke={border} />
      <text x="120" y="68" fill={textColor} fontWeight="bold" fontSize="9" textAnchor="middle">Sintaxis vs Nuevas APIs</text>
      <rect x="40" y="78" width="160" height="38" rx="4" fill={isDark ? "#334155" : "#e2e8f0"} />
      <text x="50" y="93" fill="#3b82f6" fontSize="7" fontWeight="bold">Sintaxis (Transpilable):</text>
      <text x="50" y="107" fill={subtextColor} fontSize="6.5">Optional Chaining (?.) ➔ if/else</text>

      <rect x="40" y="122" width="160" height="38" rx="4" fill={isDark ? "#334155" : "#e2e8f0"} />
      <text x="50" y="137" fill="#ef4444" fontSize="7" fontWeight="bold">APIs (Requiere Polyfill):</text>
      <text x="50" y="151" fill={subtextColor} fontSize="6.5">Promise.allSettled, Array.flat</text>
      <text x="120" y="174" fill={subtextColor} fontSize="6.5" textAnchor="middle">La sintaxis se reescribe; la API se inyecta</text>

      {/* Center: Browserslist Query */}
      <rect x="230" y="50" width="180" height="135" rx="8" fill={isDark ? "#311042" : "#fdf4ff"} stroke="#c026d3" strokeWidth="1.5" />
      <text x="320" y="68" fill="#e879f9" fontWeight="bold" fontSize="9.5" textAnchor="middle">Filtro Browserslist</text>
      <rect x="240" y="80" width="160" height="24" rx="4" fill={isDark ? "#4c1d95" : "#fae8ff"} />
      <text x="320" y="95" fill="#a855f7" fontSize="6.5" fontFamily="monospace" textAnchor="middle">&gt; 0.5%, last 2 versions, not dead</text>
      <text x="240" y="120" fill={textColor} fontSize="7">• Consulta datos de CanIUse</text>
      <text x="240" y="133" fill={textColor} fontSize="7">• Determina compatibilidad exacta</text>
      <text x="240" y="146" fill="#c026d3" fontSize="7" fontWeight="bold">• Evita polyfills innecesarios</text>
      <text x="320" y="172" fill="#9333ea" fontSize="7" fontWeight="bold" textAnchor="middle">Filtro de Destino</text>

      {/* Right: core-js injection */}
      <rect x="430" y="50" width="180" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="520" y="68" fill="#10b981" fontWeight="bold" fontSize="9" textAnchor="middle">core-js (useBuiltIns: usage)</text>
      <rect x="440" y="80" width="160" height="24" rx="4" fill="#d1fae5" />
      <text x="520" y="95" fill="#047857" fontSize="7" fontWeight="bold" textAnchor="middle">Inyección Selectiva On-Demand</text>
      <text x="445" y="118" fill={textColor} fontSize="7">• Solo importa los métodos usados</text>
      <text x="445" y="131" fill="#10b981" fontSize="7" fontWeight="bold">• Si tu app no usa flat(), NO se inyecta</text>
      <text x="445" y="144" fill={textColor} fontSize="7">• Ahorra hasta 150 KB en bundle</text>
      <text x="520" y="172" fill="#059669" fontSize="7" fontWeight="bold" textAnchor="middle">✓ Cero Desperdicio de Bytes</text>

      <rect x="25" y="192" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">Browserslist define qué navegadores soportar; useBuiltIns: &apos;usage&apos; inyecta de core-js únicamente los polyfills de las APIs que tu código realmente invoca.</text>
    </svg>
  );
  },

  "build-css-pipeline-postcss-tailwind": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">El Pipeline Moderno de Estilos: PostCSS, CSS Modules y Lightning CSS</text>

      {/* Step 1: Input */}
      <rect x="25" y="55" width="125" height="120" rx="6" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke={border} />
      <text x="87" y="75" fill={textColor} fontWeight="bold" fontSize="8.5" textAnchor="middle">1. Código Fuente</text>
      <text x="35" y="95" fill="#3b82f6" fontSize="7" fontFamily="monospace">.btn &#123; @apply px-4; &#125;</text>
      <text x="35" y="110" fill={textColor} fontSize="6.5">o CSS Modules:</text>
      <text x="35" y="123" fill="#10b981" fontSize="6.5" fontFamily="monospace">styles.button</text>
      <text x="35" y="145" fill={subtextColor} fontSize="6">Tailwind / SASS / CSS</text>

      <text x="160" y="120" fill="#3b82f6" fontSize="14" fontWeight="bold">➔</text>

      {/* Step 2: PostCSS Engine */}
      <rect x="180" y="55" width="135" height="120" rx="6" fill={isDark ? "#431407" : "#fff7ed"} stroke="#f97316" />
      <text x="247" y="75" fill="#ea580c" fontWeight="bold" fontSize="8.5" textAnchor="middle">2. PostCSS AST</text>
      <text x="190" y="95" fill={textColor} fontSize="7">• Tailwind JIT Compiler</text>
      <text x="190" y="110" fill={textColor} fontSize="7">• Autoprefixer (vendor prefixes)</text>
      <text x="190" y="125" fill={textColor} fontSize="7">• Hasheo de clases en Modules:</text>
      <text x="190" y="138" fill="#ea580c" fontSize="6.5" fontFamily="monospace">.btn_a8f9c2</text>
      <text x="247" y="160" fill={subtextColor} fontSize="6" textAnchor="middle">Aislamiento de Scope</text>

      <text x="325" y="120" fill="#f97316" fontSize="14" fontWeight="bold">➔</text>

      {/* Step 3: Extractor */}
      <rect x="345" y="55" width="135" height="120" rx="6" fill={isDark ? "#172554" : "#eff6ff"} stroke="#3b82f6" />
      <text x="412" y="75" fill="#2563eb" fontWeight="bold" fontSize="8.5" textAnchor="middle">3. Extracción de Chunks</text>
      <text x="355" y="95" fill={textColor} fontSize="7">• Extracción de CSS</text>
      <text x="355" y="108" fill={subtextColor} fontSize="6.5">(MiniCssExtractPlugin / Vite)</text>
      <text x="355" y="125" fill={textColor} fontSize="7">• Genera ficheros separados</text>
      <text x="355" y="140" fill="#2563eb" fontSize="6.5" fontWeight="bold">No bloquea parsing de JS</text>

      <text x="490" y="120" fill="#2563eb" fontSize="14" fontWeight="bold">➔</text>

      {/* Step 4: Lightning CSS Minify */}
      <rect x="505" y="55" width="115" height="120" rx="6" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" />
      <text x="562" y="75" fill="#059669" fontWeight="bold" fontSize="8.5" textAnchor="middle">4. Lightning CSS</text>
      <text x="515" y="95" fill={textColor} fontSize="6.5">• Minificación en Rust</text>
      <text x="515" y="110" fill={textColor} fontSize="6.5">• Deduplicación reglas</text>
      <text x="515" y="125" fill="#10b981" fontSize="6.5" fontWeight="bold">• Salida: dist/app.css</text>
      <text x="562" y="155" fill="#047857" fontSize="7" fontWeight="bold" textAnchor="middle">Ultra Comprimido</text>

      <rect x="25" y="192" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">El pipeline moderno procesa AST con Tailwind/PostCSS, aísla nombres con CSS Modules y extrae hojas de estilo cacheadas con Lightning CSS.</text>
    </svg>
  );
  },

  "build-wasm-rust-integration": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Integración de WebAssembly (WASM): Rust, wasm-pack &amp; Bundlers Modernos</text>

      {/* Rust Source Code */}
      <rect x="30" y="50" width="170" height="135" rx="8" fill={isDark ? "#431407" : "#fff7ed"} stroke="#ea580c" strokeWidth="1.5" />
      <text x="115" y="68" fill="#ea580c" fontWeight="bold" fontSize="9.5" textAnchor="middle">1. Código Fuente en Rust</text>
      <rect x="40" y="80" width="150" height="40" rx="4" fill={isDark ? "#7c2d12" : "#ffedd5"} />
      <text x="45" y="95" fill="#ea580c" fontSize="6.5" fontFamily="monospace">#[wasm_bindgen]</text>
      <text x="45" y="108" fill={textColor} fontSize="6.5" fontFamily="monospace">pub fn heavy_calc(n: u32)</text>
      <text x="40" y="136" fill={textColor} fontSize="7">• Tipado fuerte y seguridad en memoria</text>
      <text x="40" y="150" fill={subtextColor} fontSize="6.5">Compilado con wasm-pack</text>
      <text x="115" y="172" fill="#ea580c" fontSize="7" fontWeight="bold" textAnchor="middle">Velocidad Nativa C/Rust</text>

      {/* Bundler Packaging */}
      <rect x="225" y="50" width="190" height="135" rx="8" fill={isDark ? "#1e1b4b" : "#eff6ff"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="320" y="68" fill="#818cf8" fontWeight="bold" fontSize="9.5" textAnchor="middle">2. Pipeline en Vite / Webpack</text>
      <text x="235" y="88" fill={textColor} fontSize="7">• Generación de módulo binario .wasm</text>
      <text x="235" y="103" fill={textColor} fontSize="7">• Generación de pegamento JS &amp; tipos .d.ts</text>
      <rect x="235" y="112" width="170" height="24" rx="3" fill={isDark ? "#312e81" : "#c7d2fe"} />
      <text x="320" y="128" fill="#4338ca" fontSize="6.5" fontFamily="monospace" textAnchor="middle">import init, &#123; heavy_calc &#125; from &apos;./pkg&apos;</text>
      <text x="235" y="150" fill="#6366f1" fontSize="7" fontWeight="bold">• Streaming Compilation con fetch()</text>
      <text x="320" y="172" fill={subtextColor} fontSize="6.5" textAnchor="middle">Compilación en background del navegador</text>

      {/* Browser Execution */}
      <rect x="440" y="50" width="170" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="525" y="68" fill="#10b981" fontWeight="bold" fontSize="9.5" textAnchor="middle">3. Runtime en Navegador</text>
      <text x="450" y="88" fill={textColor} fontSize="7">• WebAssembly.instantiateStreaming</text>
      <text x="450" y="103" fill={textColor} fontSize="7">• Ejecución a 60 FPS en Web Workers</text>
      <text x="450" y="118" fill="#10b981" fontSize="7.5" fontWeight="bold">• Edición de video, 3D, Criptografía</text>
      <text x="450" y="133" fill={textColor} fontSize="7">• Cero bloqueo del Main Thread de JS</text>
      <text x="525" y="172" fill="#047857" fontSize="7.5" fontWeight="bold" textAnchor="middle">✓ Máximo Rendimiento de CPU</text>

      <rect x="25" y="192" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">Los bundlers modernos empaquetan WebAssembly de forma transparente con streaming de red y wrappers tipados de TypeScript.</text>
    </svg>
  );
  },

  "build-monorepo-caching-turborepo": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Orquestación de Monorepos &amp; Remote Caching (Turborepo / Nx)</text>

      {/* Task Graph DAG */}
      <rect x="30" y="50" width="270" height="135" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="165" y="68" fill="#3b82f6" fontWeight="bold" fontSize="10" textAnchor="middle">Grafo de Tareas DAG (turbo.json)</text>
      <rect x="45" y="80" width="100" height="24" rx="4" fill="#60a5fa" />
      <text x="95" y="96" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle">packages/ui:build</text>
      <text x="155" y="96" fill="#3b82f6" fontSize="12" fontWeight="bold">➔</text>
      <rect x="175" y="80" width="110" height="24" rx="4" fill="#2563eb" />
      <text x="230" y="96" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle">apps/web:build</text>

      <text x="45" y="122" fill={textColor} fontSize="7.5">• Ejecución paralela topológicamente ordenada</text>
      <text x="45" y="137" fill={textColor} fontSize="7.5">• Calcula hash criptográfico de inputs:</text>
      <text x="50" y="151" fill="#2563eb" fontSize="6.5" fontFamily="monospace">Hash(archivos + dependencias + env)</text>
      <text x="165" y="174" fill={subtextColor} fontSize="6.5" textAnchor="middle">Cero tareas ejecutadas en desorden</text>

      {/* Remote Caching */}
      <rect x="340" y="50" width="270" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="475" y="68" fill="#10b981" fontWeight="bold" fontSize="10" textAnchor="middle">Remote Caching (Nube Compartida)</text>
      <rect x="355" y="80" width="240" height="36" rx="4" fill="#d1fae5" />
      <text x="475" y="96" fill="#047857" fontSize="7.5" fontWeight="bold" textAnchor="middle">&gt;&gt;&gt; FULL TURBO (Cache HIT)</text>
      <text x="475" y="108" fill="#065f46" fontSize="6.5" textAnchor="middle">Restaurado en 80ms desde Vercel / AWS S3</text>

      <text x="355" y="133" fill={textColor} fontSize="7.5">• Si el hash de inputs ya fue compilado por un compañero</text>
      <text x="355" y="147" fill={textColor} fontSize="7.5">  o en un branch de CI, se descarga el artefacto.</text>
      <text x="355" y="161" fill="#10b981" fontSize="7.5" fontWeight="bold">• Ahorro del 85% de tiempo de CI en equipos grandes</text>
      <text x="475" y="174" fill="#059669" fontSize="6.5" fontWeight="bold" textAnchor="middle">NUNCA recompilar el mismo código dos veces</text>

      <rect x="25" y="192" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">Turborepo modela las tareas de monorepo como un Grafo Acíclico Dirigido (DAG) y cachea artefactos remotos evitando recompilaciones redundantes.</text>
    </svg>
  );
  },

  "build-terser-minification-mangling": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Técnicas Avanzadas de Minificación: Terser &amp; Mangling</text>

      {/* Left: Original Code */}
      <rect x="30" y="50" width="180" height="135" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke={border} />
      <text x="120" y="68" fill={textColor} fontWeight="bold" fontSize="9" textAnchor="middle">Código Original (Legible)</text>
      <rect x="40" y="78" width="160" height="60" rx="4" fill={isDark ? "#334155" : "#e2e8f0"} />
      <text x="45" y="93" fill={subtextColor} fontSize="6" fontFamily="monospace">function authenticateUser(</text>
      <text x="45" y="104" fill={subtextColor} fontSize="6" fontFamily="monospace">  userSessionToken,</text>
      <text x="45" y="115" fill={subtextColor} fontSize="6" fontFamily="monospace">  organizationId) &#123;</text>
      <text x="45" y="127" fill={subtextColor} fontSize="6" fontFamily="monospace">  if (DEBUG) console.log(...);</text>
      <text x="45" y="148" fill="#ef4444" fontSize="7">• Nombres largos de variables</text>
      <text x="45" y="160" fill="#ef4444" fontSize="7">• Espacios, comentarios, logs</text>
      <text x="120" y="174" fill={subtextColor} fontSize="6.5" textAnchor="middle">Peso: 100% (Grande)</text>

      {/* Center: AST Transformation Passes */}
      <rect x="230" y="50" width="180" height="135" rx="8" fill={isDark ? "#312e81" : "#e0e7ff"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="320" y="68" fill="#818cf8" fontWeight="bold" fontSize="9.5" textAnchor="middle">Pasadas de Optimización AST</text>
      <text x="240" y="88" fill={textColor} fontSize="7">1. <tspan fontWeight="bold">Mangling</tspan>: Acorta nombres:</text>
      <text x="250" y="100" fill="#4338ca" fontSize="6.5" fontFamily="monospace">userSessionToken ➔ a</text>
      <text x="240" y="116" fill={textColor} fontSize="7">2. <tspan fontWeight="bold">Constant Folding</tspan>:</text>
      <text x="250" y="128" fill="#4338ca" fontSize="6.5" fontFamily="monospace">24 * 60 * 60 ➔ 86400</text>
      <text x="240" y="144" fill={textColor} fontSize="7">3. <tspan fontWeight="bold">Drop Console &amp; Debug</tspan></text>
      <text x="320" y="172" fill="#6366f1" fontSize="7" fontWeight="bold" textAnchor="middle">Reducción Estructural ➔</text>

      {/* Right: Minified Code */}
      <rect x="430" y="50" width="180" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="520" y="68" fill="#10b981" fontWeight="bold" fontSize="9" textAnchor="middle">Salida Minificada</text>
      <rect x="440" y="78" width="160" height="30" rx="4" fill="#d1fae5" />
      <text x="520" y="96" fill="#047857" fontSize="7" fontFamily="monospace" textAnchor="middle">function a(t,e)&#123;return...&#125;</text>
      <text x="445" y="125" fill="#10b981" fontSize="7.5" fontWeight="bold">✓ Reducción del 65% a 80%</text>
      <text x="445" y="140" fill={textColor} fontSize="7">• Menor tiempo de transferencia de red</text>
      <text x="445" y="153" fill={textColor} fontSize="7">• Parsing más rápido en motor JS</text>
      <text x="520" y="174" fill="#059669" fontSize="6.5" fontWeight="bold" textAnchor="middle">Optimizado para Gzip/Brotli</text>

      <rect x="25" y="192" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">La minificación va más allá de quitar espacios: acorta identificadores (mangling), precalcula constantes (constant folding) y elimina código muerto.</text>
    </svg>
  );
  },

  "build-modern-island-ssr-hydration": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Arquitectura de Bundles en SSR &amp; Hidratación Parcial (Islands / RSC)</text>

      {/* Server Bundle */}
      <rect x="30" y="50" width="270" height="135" rx="8" fill={isDark ? "#1e1b4b" : "#eff6ff"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="165" y="68" fill="#3b82f6" fontWeight="bold" fontSize="10.5" textAnchor="middle">1. Server Bundle (Node.js / Edge)</text>
      <text x="45" y="88" fill={textColor} fontSize="7.5">• Se ejecuta únicamente en el servidor</text>
      <text x="45" y="103" fill={textColor} fontSize="7.5">• Incluye componentes estáticos (RSC / Astro)</text>
      <text x="45" y="118" fill="#10b981" fontSize="7.5" fontWeight="bold">• Acceso directo a base de datos sin APIs intermedias</text>
      <text x="45" y="133" fill={textColor} fontSize="7.5">• Cero bytes de JS de estos componentes van al browser</text>
      <rect x="45" y="148" width="240" height="24" rx="4" fill="#dbeafe" />
      <text x="165" y="163" fill="#1d4ed8" fontWeight="bold" fontSize="7.5" textAnchor="middle">HTML Estático + Payload RSC en Streaming</text>

      {/* Client Hydration Bundle */}
      <rect x="340" y="50" width="270" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="475" y="68" fill="#10b981" fontWeight="bold" fontSize="10.5" textAnchor="middle">2. Client Hydration Bundle (Islands)</text>
      <text x="355" y="88" fill={textColor} fontSize="7.5">• Solo incluye componentes interactivos con &apos;use client&apos;</text>
      <text x="355" y="103" fill={textColor} fontSize="7.5">• Empaquetado mínimo: carritos de compra, modales, forms</text>
      <text x="355" y="118" fill="#10b981" fontSize="7.5" fontWeight="bold">• Hidratación selectiva sin bloquear el hilo principal</text>
      <text x="355" y="133" fill={textColor} fontSize="7.5">• Reduce el JS inicial enviado al cliente en un 70%</text>
      <rect x="355" y="148" width="240" height="24" rx="4" fill="#d1fae5" />
      <text x="475" y="163" fill="#047857" fontWeight="bold" fontSize="7.5" textAnchor="middle">Excelente puntuación de INP y TBT</text>

      <rect x="25" y="192" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">Los empaquetadores modernos bifurcan la compilación en dos grafos: Server Bundle (renderizado estático) y Client Bundle (islas interactivas).</text>
    </svg>
  );
  },

  "build-reproducible-deterministic-builds": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Builds Reproducibles y Deterministas (Hermetic Builds)</text>

      {/* Inputs Deterministic */}
      <rect x="30" y="50" width="180" height="135" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke={border} />
      <text x="120" y="68" fill={textColor} fontWeight="bold" fontSize="9" textAnchor="middle">1. Entorno Hermético</text>
      <text x="40" y="88" fill={textColor} fontSize="7">• Lockfile congelado (--frozen)</text>
      <text x="40" y="102" fill={textColor} fontSize="7">• Node.js exacto (.nvmrc)</text>
      <text x="40" y="116" fill={textColor} fontSize="7">• Timestamps fijos:</text>
      <text x="45" y="128" fill="#3b82f6" fontSize="6.5" fontFamily="monospace">SOURCE_DATE_EPOCH=0</text>
      <text x="40" y="148" fill="#10b981" fontSize="7" fontWeight="bold">• Orden de archivos determinista</text>
      <text x="120" y="174" fill={subtextColor} fontSize="6.5" textAnchor="middle">Cero Variables No Controladas</text>

      {/* Execution in Two Distinct Environments */}
      <rect x="230" y="50" width="180" height="135" rx="8" fill={isDark ? "#172554" : "#eff6ff"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="320" y="68" fill="#3b82f6" fontWeight="bold" fontSize="9.5" textAnchor="middle">2. Compilaciones Independientes</text>
      <rect x="240" y="80" width="160" height="26" rx="4" fill={isDark ? "#1e3a8a" : "#dbeafe"} />
      <text x="320" y="96" fill="#1e40af" fontSize="7" textAnchor="middle">Desarrollador A (Mac M3)</text>
      <text x="320" y="114" fill="#3b82f6" fontSize="9" fontWeight="bold">vs</text>
      <rect x="240" y="120" width="160" height="26" rx="4" fill={isDark ? "#1e3a8a" : "#dbeafe"} />
      <text x="320" y="136" fill="#1e40af" fontSize="7" textAnchor="middle">Servidor de CI (Ubuntu x86_64)</text>
      <text x="320" y="172" fill="#2563eb" fontSize="7" fontWeight="bold" textAnchor="middle">Distintos SO / Misma Semilla</text>

      {/* Exact Cryptographic Match */}
      <rect x="430" y="50" width="180" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="520" y="68" fill="#10b981" fontWeight="bold" fontSize="9" textAnchor="middle">3. Validación Criptográfica</text>
      <rect x="440" y="80" width="160" height="34" rx="4" fill="#d1fae5" />
      <text x="520" y="96" fill="#047857" fontSize="7" fontFamily="monospace" textAnchor="middle">SHA-256: e3b0c442...</text>
      <text x="520" y="107" fill="#065f46" fontSize="6.5" fontWeight="bold" textAnchor="middle">HASHES IDÉNTICOS BIT A BIT</text>
      <text x="445" y="132" fill="#10b981" fontSize="7.5" fontWeight="bold">✓ Seguridad de Cadena de Suministro</text>
      <text x="445" y="146" fill={textColor} fontSize="7">• Garantiza que el código no fue alterado</text>
      <text x="520" y="172" fill="#059669" fontSize="7" fontWeight="bold" textAnchor="middle">Auditoría Criptográfica Exitosa</text>

      <rect x="25" y="192" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">Un build reproducible genera exactamente el mismo hash binario sin importar qué máquina o fecha lo compile, garantizando integridad y seguridad.</text>
    </svg>
  );
  }
};
