import { DiagramRegistry } from "../diagram.types";

/** Diagramas SVG del módulo Testing. */
export const testingDiagrams: DiagramRegistry = {
  "testing-trophy": ({ isDark, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* Trophy Tiers */}
      <polygon points="320,35 240,75 400,75" fill={isDark ? "#be123c" : "#ffe4e6"} stroke="#f43f5e" strokeWidth="1.5" />
      <text x="320" y="62" fill="#f43f5e" fontSize="10" fontWeight="bold" textAnchor="middle">E2E Tests (Cypress / Playwright)</text>

      <polygon points="230,82 410,82 440,125 200,125" fill={isDark ? "#065f46" : "#d1fae5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="320" y="108" fill="#10b981" fontSize="11" fontWeight="bold" textAnchor="middle">Integration Tests (Mayor ROI / RTL)</text>

      <polygon points="190,132 450,132 470,165 170,165" fill={isDark ? "#1e3a8a" : "#dbeafe"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="320" y="152" fill="#3b82f6" fontSize="10" fontWeight="bold" textAnchor="middle">Unit Tests (Funciones puras / Hooks)</text>

      <rect x="150" y="172" width="340" height="26" rx="4" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#8b5cf6" strokeWidth="1.5" />
      <text x="320" y="189" fill="#8b5cf6" fontSize="10" fontWeight="bold" textAnchor="middle">Static Analysis (TypeScript & ESLint)</text>
    </svg>
  );
  },

  "test-pyramid-trophy-distribution": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Pirámide de Testing vs Testing Trophy (Kent C. Dodds)</text>

      {/* Left: Classic Pyramid */}
      <rect x="30" y="50" width="260" height="135" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke={border} />
      <text x="160" y="68" fill={textColor} fontWeight="bold" fontSize="10" textAnchor="middle">Pirámide Clásica (Backend Focus)</text>
      <polygon points="160,80 230,150 90,150" fill={isDark ? "#334155" : "#e2e8f0"} stroke="#94a3b8" strokeWidth="1.5" />
      <text x="160" y="98" fill="#ef4444" fontSize="7" fontWeight="bold" textAnchor="middle">E2E (Pocos)</text>
      <text x="160" y="120" fill="#f59e0b" fontSize="7.5" fontWeight="bold" textAnchor="middle">Integración</text>
      <text x="160" y="142" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">Unitarias (Mayoría masiva)</text>
      <text x="160" y="168" fill={subtextColor} fontSize="6.5" textAnchor="middle">Muchos tests unitarios aislados; poca visión real de UI</text>

      {/* Right: Testing Trophy */}
      <rect x="330" y="50" width="280" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="470" y="68" fill="#10b981" fontWeight="bold" fontSize="10" textAnchor="middle">Testing Trophy (Frontend Moderno)</text>
      
      {/* Trophy tiers */}
      <rect x="420" y="78" width="100" height="18" rx="3" fill="#ef4444" fillOpacity="0.2" stroke="#ef4444" />
      <text x="470" y="90" fill="#ef4444" fontSize="7" fontWeight="bold" textAnchor="middle">E2E (Flujos críticos)</text>

      <rect x="360" y="100" width="220" height="32" rx="4" fill="#10b981" fillOpacity="0.3" stroke="#10b981" strokeWidth="1.5" />
      <text x="470" y="116" fill="#047857" fontSize="8.5" fontWeight="bold" textAnchor="middle">INTEGRACIÓN (El Centro de Gravedad)</text>
      <text x="470" y="127" fill="#065f46" fontSize="6.5" textAnchor="middle">RTL + MSW: Componentes + Store + Red simulada</text>

      <rect x="390" y="136" width="160" height="18" rx="3" fill="#3b82f6" fillOpacity="0.2" stroke="#3b82f6" />
      <text x="470" y="148" fill="#2563eb" fontSize="7" fontWeight="bold" textAnchor="middle">Unit (Utilidades y lógica pura)</text>

      <rect x="420" y="158" width="100" height="16" rx="3" fill="#64748b" fillOpacity="0.2" stroke="#64748b" />
      <text x="470" y="169" fill="#475569" fontSize="6.5" fontWeight="bold" textAnchor="middle">Static (TypeScript + ESLint)</text>

      <rect x="25" y="192" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">En frontend, las pruebas de integración ofrecen el mayor retorno de inversión (ROI): combinan alta confianza con velocidad y resiliencia.</text>
    </svg>
  );
  },

  "test-test-doubles-taxonomy": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Taxonomía Formal de Test Doubles (Martin Fowler)</text>

      {/* 5 Cards */}
      <rect x="25" y="50" width="105" height="135" rx="6" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke={border} />
      <text x="77" y="70" fill="#94a3b8" fontWeight="bold" fontSize="9" textAnchor="middle">Dummy</text>
      <text x="35" y="90" fill={textColor} fontSize="6.5">• Objeto de relleno</text>
      <text x="35" y="105" fill={textColor} fontSize="6.5">• Se pasa para llenar parámetros</text>
      <text x="35" y="125" fill={subtextColor} fontSize="6">• NUNCA se usa ni se invoca realmente</text>
      <text x="77" y="165" fill="#64748b" fontSize="6.5" fontWeight="bold" textAnchor="middle">Ej: null / &#123;&#125;</text>

      <rect x="140" y="50" width="105" height="135" rx="6" fill={isDark ? "#172554" : "#eff6ff"} stroke="#3b82f6" />
      <text x="192" y="70" fill="#3b82f6" fontWeight="bold" fontSize="9" textAnchor="middle">Stub</text>
      <text x="150" y="90" fill={textColor} fontSize="6.5">• Respuestas predefinidas fijas</text>
      <text x="150" y="110" fill={textColor} fontSize="6.5">• Provee datos para el test</text>
      <text x="150" y="130" fill={subtextColor} fontSize="6">• No valida interacciones</text>
      <text x="192" y="165" fill="#2563eb" fontSize="6.5" fontWeight="bold" textAnchor="middle">Ej: mockResolved(data)</text>

      <rect x="255" y="50" width="105" height="135" rx="6" fill={isDark ? "#431407" : "#fff7ed"} stroke="#f97316" />
      <text x="307" y="70" fill="#f97316" fontWeight="bold" fontSize="9" textAnchor="middle">Spy</text>
      <text x="265" y="90" fill={textColor} fontSize="6.5">• Envuelve una función real</text>
      <text x="265" y="105" fill={textColor} fontSize="6.5">• Registra cómo y cuántas veces se llamó</text>
      <text x="265" y="130" fill={subtextColor} fontSize="6">• Mantiene la lógica original activa</text>
      <text x="307" y="165" fill="#ea580c" fontSize="6.5" fontWeight="bold" textAnchor="middle">Ej: vi.spyOn(obj, &apos;fn&apos;)</text>

      <rect x="370" y="50" width="115" height="135" rx="6" fill={isDark ? "#311042" : "#fdf4ff"} stroke="#c026d3" />
      <text x="427" y="70" fill="#c026d3" fontWeight="bold" fontSize="9" textAnchor="middle">Mock</text>
      <text x="380" y="90" fill={textColor} fontSize="6.5">• Verifica expectativas de comportamiento</text>
      <text x="380" y="110" fill={textColor} fontSize="6.5">• Falla el test si no fue invocado según el contrato</text>
      <text x="427" y="165" fill="#9333ea" fontSize="6.5" fontWeight="bold" textAnchor="middle">Ej: expect(fn).toHaveBeenCalled()</text>

      <rect x="495" y="50" width="120" height="135" rx="6" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" />
      <text x="555" y="70" fill="#10b981" fontWeight="bold" fontSize="9" textAnchor="middle">Fake</text>
      <text x="505" y="90" fill={textColor} fontSize="6.5">• Implementación funcional real simplificada</text>
      <text x="505" y="110" fill={textColor} fontSize="6.5">• Adecuado para tests, no para producción</text>
      <text x="555" y="165" fill="#047857" fontSize="6.5" fontWeight="bold" textAnchor="middle">Ej: InMemoryDatabase</text>

      <rect x="25" y="192" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">Comprender las diferencias entre Stubs (estado simulado), Spies (observación) y Mocks (expectativas de interacción) evita el sobre-mockeado frágil.</text>
    </svg>
  );
  },

  "test-rtl-guiding-principles": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Filosofía de React Testing Library: Testear como el Usuario</text>

      {/* Anti-pattern: Enzyme implementation details */}
      <rect x="30" y="50" width="260" height="135" rx="8" fill={isDark ? "#3f1d1d" : "#fef2f2"} stroke="#ef4444" strokeWidth="1.5" />
      <text x="160" y="68" fill="#ef4444" fontWeight="bold" fontSize="10" textAnchor="middle">❌ Anti-patrón: Detalles de Implementación</text>
      <rect x="45" y="78" width="230" height="34" rx="4" fill="#fee2e2" />
      <text x="55" y="93" fill="#991b1b" fontSize="6.5" fontFamily="monospace">wrapper.find(&apos;Button&apos;).prop(&apos;onClick&apos;)();</text>
      <text x="55" y="104" fill="#991b1b" fontSize="6.5" fontFamily="monospace">expect(wrapper.state(&apos;count&apos;)).toBe(1);</text>
      <text x="45" y="125" fill="#ef4444" fontSize="7">• Los tests se rompen ante cualquier refactorización</text>
      <text x="45" y="138" fill={textColor} fontSize="7">• Falso sentido de seguridad: el usuario no ve el state</text>
      <text x="45" y="151" fill={subtextColor} fontSize="6.5">Acoplado a nombres internos de variables y componentes</text>
      <text x="160" y="174" fill="#ef4444" fontSize="7" fontWeight="bold" textAnchor="middle">Tests Frágiles y Costosos de Mantener</text>

      {/* RTL Philosophy: User-centric */}
      <rect x="330" y="50" width="280" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="470" y="68" fill="#10b981" fontWeight="bold" fontSize="10" textAnchor="middle">✅ Principio RTL: Comportamiento del Usuario</text>
      <rect x="345" y="78" width="250" height="34" rx="4" fill="#d1fae5" />
      <text x="355" y="93" fill="#065f46" fontSize="6.5" fontFamily="monospace">await user.click(screen.getByRole(&apos;button&apos;, &#123; name: /incrementar/i &#125;));</text>
      <text x="355" y="104" fill="#065f46" fontSize="6.5" fontFamily="monospace">expect(screen.getByText(/contador: 1/i)).toBeInTheDocument();</text>
      <text x="345" y="125" fill="#10b981" fontSize="7" fontWeight="bold">• 100% inmune a refactors internos de estado</text>
      <text x="345" y="138" fill={textColor} fontSize="7">• Promueve accesibilidad (roles ARIA y labels)</text>
      <text x="345" y="151" fill={subtextColor} fontSize="6.5">Prueba la experiencia real perceptible en el navegador</text>
      <text x="470" y="174" fill="#047857" fontSize="7" fontWeight="bold" textAnchor="middle">Máxima Confianza en Producción</text>

      <rect x="25" y="192" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">&quot;Cuanto más se parezcan tus tests a cómo se utiliza tu software, más confianza te proporcionarán.&quot; — Kent C. Dodds</text>
    </svg>
  );
  },

  "test-rtl-queries-priority-matrix": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Jerarquía de Queries &amp; Métodos Asíncronos en React Testing Library</text>

      {/* Left: Priority Pyramid */}
      <rect x="30" y="50" width="280" height="135" rx="8" fill={isDark ? "#1e293b" : "#f8fafc"} stroke={border} />
      <text x="170" y="68" fill={textColor} fontWeight="bold" fontSize="9.5" textAnchor="middle">Prioridad Oficial de Queries</text>

      <rect x="45" y="78" width="250" height="20" rx="3" fill="#10b981" fillOpacity="0.25" stroke="#10b981" />
      <text x="170" y="92" fill="#047857" fontSize="7" fontWeight="bold" textAnchor="middle">1. Accesibles a todos: getByRole &gt; getByLabelText</text>

      <rect x="65" y="102" width="210" height="20" rx="3" fill="#3b82f6" fillOpacity="0.2" stroke="#3b82f6" />
      <text x="170" y="116" fill="#2563eb" fontSize="7" textAnchor="middle">2. Semánticas: getByPlaceholderText &gt; getByText</text>

      <rect x="85" y="126" width="170" height="20" rx="3" fill="#f59e0b" fillOpacity="0.2" stroke="#f59e0b" />
      <text x="170" y="140" fill="#b45309" fontSize="6.5" textAnchor="middle">3. Datos visuales: getByDisplayValue &gt; getByAltText</text>

      <rect x="105" y="150" width="130" height="20" rx="3" fill="#ef4444" fillOpacity="0.2" stroke="#ef4444" />
      <text x="170" y="164" fill="#991b1b" fontSize="6.5" fontWeight="bold" textAnchor="middle">4. Último recurso: getByTestId</text>

      {/* Right: getBy vs queryBy vs findBy */}
      <rect x="330" y="50" width="280" height="135" rx="8" fill={isDark ? "#1e1b4b" : "#eef2ff"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="470" y="68" fill="#818cf8" fontWeight="bold" fontSize="9.5" textAnchor="middle">Comportamiento Asíncrono de Variantes</text>

      <rect x="345" y="80" width="250" height="28" rx="4" fill={isDark ? "#312e81" : "#c7d2fe"} />
      <text x="355" y="94" fill="#4338ca" fontSize="7" fontWeight="bold">getBy...</text>
      <text x="355" y="103" fill={subtextColor} fontSize="6">Sincrónico. Retorna el elemento o lanza ERROR si no existe (o si hay &gt;1).</text>

      <rect x="345" y="112" width="250" height="28" rx="4" fill={isDark ? "#312e81" : "#c7d2fe"} />
      <text x="355" y="126" fill="#4338ca" fontSize="7" fontWeight="bold">queryBy...</text>
      <text x="355" y="135" fill={subtextColor} fontSize="6">Sincrónico. Retorna null si no existe. ÚNICA forma de verificar ausencia.</text>

      <rect x="345" y="144" width="250" height="28" rx="4" fill={isDark ? "#312e81" : "#c7d2fe"} />
      <text x="355" y="158" fill="#4338ca" fontSize="7" fontWeight="bold">findBy... (async/await)</text>
      <text x="355" y="167" fill={subtextColor} fontSize="6">Asíncrono. Espera hasta 1000ms con waitFor. Ideal para respuestas de red.</text>

      <rect x="25" y="192" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">Usa getByRole para el 90% de interacciones, queryBy para comprobar que algo NO existe, y findBy para elementos que aparecen tras una petición.</text>
    </svg>
  );
  },

  "test-vitest-vs-jest-architecture": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Arquitectura Interna: Vitest (Vite Engine) vs Jest (Legacy Node)</text>

      {/* Left: Jest */}
      <rect x="30" y="50" width="260" height="135" rx="8" fill={isDark ? "#1e293b" : "#f8fafc"} stroke="#ef4444" strokeWidth="1.5" />
      <text x="160" y="68" fill="#ef4444" fontWeight="bold" fontSize="10" textAnchor="middle">Jest (Arquitectura Tradicional)</text>
      <text x="45" y="88" fill={textColor} fontSize="7">• Requiere configurar Babel/ts-jest por duplicado</text>
      <text x="45" y="102" fill={textColor} fontSize="7">• Entorno CommonJS emulado; fricción con ESM nativo</text>
      <text x="45" y="116" fill={textColor} fontSize="7">• Transformaciones lentas archivo por archivo en V8</text>
      <text x="45" y="130" fill="#ef4444" fontSize="7">• Sin integración con plugins de Vite o Rollup</text>
      <rect x="45" y="145" width="230" height="24" rx="4" fill="#fee2e2" />
      <text x="160" y="160" fill="#991b1b" fontSize="7" fontWeight="bold" textAnchor="middle">Doble Pipeline: Vite en app + Babel en tests</text>

      {/* Right: Vitest */}
      <rect x="330" y="50" width="280" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="470" y="68" fill="#10b981" fontWeight="bold" fontSize="10" textAnchor="middle">Vitest (Motor Unificado de Vite)</text>
      <text x="345" y="88" fill={textColor} fontSize="7">• <tspan fontWeight="bold">Configuración Única</tspan>: Reutiliza vite.config.ts al 100%</text>
      <text x="345" y="102" fill={textColor} fontSize="7">• ESM nativo de primera clase sin emulaciones CJS</text>
      <text x="345" y="116" fill={textColor} fontSize="7">• HMR inteligente de tests: re-ejecuta solo el archivo afectado</text>
      <text x="345" y="130" fill="#10b981" fontSize="7" fontWeight="bold">• Ejecución multi-worker mediante Tinypool/Worker Threads</text>
      <rect x="345" y="145" width="250" height="24" rx="4" fill="#d1fae5" />
      <text x="470" y="160" fill="#047857" fontSize="7" fontWeight="bold" textAnchor="middle">Hasta 10x más rápido con API compatible con Jest</text>

      <rect x="25" y="192" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">Vitest comparte el mismo pipeline de plugins y transformaciones que tu aplicación Vite, eliminando inconsistencias entre build y testing.</text>
    </svg>
  );
  },

  "test-msw-network-interception": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Mock Service Worker (MSW v2): Intercepción Real a Nivel de Red</text>

      {/* App Component */}
      <rect x="30" y="50" width="160" height="135" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke={border} />
      <text x="110" y="68" fill={textColor} fontWeight="bold" fontSize="9" textAnchor="middle">Aplicación / Test</text>
      <rect x="40" y="80" width="140" height="34" rx="4" fill={isDark ? "#334155" : "#e2e8f0"} />
      <text x="45" y="94" fill="#3b82f6" fontSize="6.5" fontFamily="monospace">fetch(&apos;/api/users/1&apos;)</text>
      <text x="45" y="106" fill={subtextColor} fontSize="6">Código 100% idéntico a prod</text>
      <text x="40" y="130" fill="#10b981" fontSize="7">• Cero mocks de axios/fetch</text>
      <text x="40" y="145" fill={textColor} fontSize="7">• Emite una petición real</text>
      <text x="110" y="174" fill={subtextColor} fontSize="6.5" textAnchor="middle">Petición HTTP Estándar</text>

      {/* Middle: Interception Layer */}
      <rect x="220" y="50" width="200" height="135" rx="8" fill={isDark ? "#311042" : "#fdf4ff"} stroke="#c026d3" strokeWidth="1.5" />
      <text x="320" y="68" fill="#c026d3" fontWeight="bold" fontSize="9.5" textAnchor="middle">Capa de Intercepción MSW</text>
      <rect x="230" y="80" width="180" height="26" rx="4" fill={isDark ? "#4c1d95" : "#ede9fe"} />
      <text x="320" y="96" fill="#a855f7" fontSize="6.5" fontWeight="bold" textAnchor="middle">En Browser: Service Worker (mockServiceWorker.js)</text>
      <rect x="230" y="112" width="180" height="26" rx="4" fill={isDark ? "#4c1d95" : "#ede9fe"} />
      <text x="320" y="128" fill="#a855f7" fontSize="6.5" fontWeight="bold" textAnchor="middle">En Node / Vitest: Native Interceptors (Undici/HTTP)</text>
      <text x="235" y="152" fill={textColor} fontSize="7">• Intercepta sin tocar código fuente</text>
      <text x="320" y="174" fill="#c026d3" fontSize="7" fontWeight="bold" textAnchor="middle">Filtro de Red Invisible ➔</text>

      {/* Right: Mock Handlers */}
      <rect x="450" y="50" width="160" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="530" y="68" fill="#10b981" fontWeight="bold" fontSize="9" textAnchor="middle">Mock Handlers (API)</text>
      <rect x="460" y="80" width="140" height="42" rx="4" fill="#d1fae5" />
      <text x="465" y="94" fill="#047857" fontSize="6" fontFamily="monospace">http.get(&apos;/api/users/1&apos;, () =&gt;</text>
      <text x="465" y="105" fill="#047857" fontSize="6" fontFamily="monospace">  HttpResponse.json(&#123;</text>
      <text x="465" y="116" fill="#047857" fontSize="6" fontFamily="monospace">    id: 1, name: &apos;Diego&apos; &#125;))</text>
      <text x="460" y="140" fill="#10b981" fontSize="7" fontWeight="bold">✓ Simula headers y códigos 404/500</text>
      <text x="530" y="174" fill="#059669" fontSize="7" fontWeight="bold" textAnchor="middle">Respuesta Idéntica al Backend</text>

      <rect x="25" y="192" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">MSW opera a nivel del protocolo de red: tu cliente HTTP (Axios, Fetch, React Query) no sabe que está hablando con un mock.</text>
    </svg>
  );
  },

  "test-playwright-architecture-cdp": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Arquitectura de Playwright: WebSocket CDP &amp; BrowserContexts</text>

      {/* Left: Test Runner Node */}
      <rect x="30" y="50" width="180" height="135" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke={border} />
      <text x="120" y="68" fill={textColor} fontWeight="bold" fontSize="9.5" textAnchor="middle">Playwright Test Runner</text>
      <text x="40" y="88" fill={textColor} fontSize="7">• Ejecuta en Node.js fuera del browser</text>
      <text x="40" y="103" fill={textColor} fontSize="7">• Soporte nativo de TypeScript</text>
      <text x="40" y="118" fill="#3b82f6" fontSize="7" fontWeight="bold">• Auto-waiting inteligente</text>
      <rect x="40" y="132" width="160" height="24" rx="3" fill="#3b82f6" />
      <text x="120" y="147" fill="#ffffff" fontSize="6.5" fontWeight="bold" textAnchor="middle">Conexión WebSocket (CDP)</text>
      <text x="120" y="174" fill={subtextColor} fontSize="6.5" textAnchor="middle">Cero inyección de scripts en app</text>

      {/* Middle: Browser Process */}
      <rect x="235" y="50" width="170" height="135" rx="8" fill={isDark ? "#1e1b4b" : "#eff6ff"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="320" y="68" fill="#3b82f6" fontWeight="bold" fontSize="9.5" textAnchor="middle">Browser Instance Única</text>
      <text x="245" y="88" fill={textColor} fontSize="7">• Chromium / Firefox / WebKit</text>
      <text x="245" y="103" fill={textColor} fontSize="7">• Se arranca una sola vez</text>
      <rect x="245" y="116" width="150" height="42" rx="4" fill={isDark ? "#1e3a8a" : "#dbeafe"} />
      <text x="320" y="130" fill="#1e40af" fontSize="7" fontWeight="bold" textAnchor="middle">BrowserContexts Aislados</text>
      <text x="320" y="142" fill="#1d4ed8" fontSize="6" textAnchor="middle">(Cookies, Storage, Cache independientes)</text>
      <text x="320" y="152" fill="#10b981" fontSize="6" fontWeight="bold" textAnchor="middle">Creación en &lt; 5 milisegundos</text>
      <text x="320" y="174" fill={subtextColor} fontSize="6.5" textAnchor="middle">Aislamiento total sin reiniciar browser</text>

      {/* Right: Pages / Multi-tabs */}
      <rect x="430" y="50" width="180" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="520" y="68" fill="#10b981" fontWeight="bold" fontSize="9.5" textAnchor="middle">Multi-Tab &amp; Multi-Origin</text>
      <rect x="440" y="80" width="160" height="26" rx="4" fill="#d1fae5" />
      <text x="520" y="96" fill="#047857" fontSize="7" textAnchor="middle">Pestaña 1: Usuario Comprador</text>

      <rect x="440" y="112" width="160" height="26" rx="4" fill="#d1fae5" />
      <text x="520" y="128" fill="#047857" fontSize="7" textAnchor="middle">Pestaña 2: Administrador Dashboard</text>

      <text x="445" y="152" fill="#10b981" fontSize="7" fontWeight="bold">✓ Interacción simultánea multi-rol</text>
      <text x="520" y="174" fill="#059669" fontSize="6.5" fontWeight="bold" textAnchor="middle">Prueba flujos colaborativos en vivo</text>

      <rect x="25" y="192" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">Playwright controla el navegador a través de WebSockets y CDP nativo, permitiendo BrowserContexts instantáneos y soporte multi-pestaña real.</text>
    </svg>
  );
  },

  "test-tdd-cycle-refactoring": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Metodología Test-Driven Development (TDD): Red - Green - Refactor</text>

      {/* Red Step */}
      <rect x="30" y="55" width="170" height="120" rx="8" fill={isDark ? "#450a0a" : "#fef2f2"} stroke="#ef4444" strokeWidth="1.5" />
      <circle cx="115" cy="78" r="14" fill="#ef4444" />
      <text x="115" y="83" fill="#ffffff" fontWeight="bold" fontSize="10" textAnchor="middle">1</text>
      <text x="115" y="105" fill="#ef4444" fontWeight="bold" fontSize="10" textAnchor="middle">RED (Fallo)</text>
      <text x="40" y="125" fill={textColor} fontSize="7">• Escribir un test que falle</text>
      <text x="40" y="138" fill={textColor} fontSize="7">• Define el contrato de la API</text>
      <text x="40" y="152" fill={subtextColor} fontSize="6.5">Garantiza que el test valida algo real</text>

      <text x="212" y="118" fill="#ef4444" fontSize="16" fontWeight="bold">➔</text>

      {/* Green Step */}
      <rect x="235" y="55" width="170" height="120" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <circle cx="320" cy="78" r="14" fill="#10b981" />
      <text x="320" y="83" fill="#ffffff" fontWeight="bold" fontSize="10" textAnchor="middle">2</text>
      <text x="320" y="105" fill="#10b981" fontWeight="bold" fontSize="10" textAnchor="middle">GREEN (Pasa)</text>
      <text x="245" y="125" fill={textColor} fontSize="7">• Escribir el código mínimo necesario</text>
      <text x="245" y="138" fill={textColor} fontSize="7">• Permitido código imperfecto/rápido</text>
      <text x="245" y="152" fill="#047857" fontSize="7" fontWeight="bold">El test se pone en verde</text>

      <text x="417" y="118" fill="#10b981" fontSize="16" fontWeight="bold">➔</text>

      {/* Refactor Step */}
      <rect x="440" y="55" width="170" height="120" rx="8" fill={isDark ? "#172554" : "#eff6ff"} stroke="#3b82f6" strokeWidth="1.5" />
      <circle cx="525" cy="78" r="14" fill="#3b82f6" />
      <text x="525" y="83" fill="#ffffff" fontWeight="bold" fontSize="10" textAnchor="middle">3</text>
      <text x="525" y="105" fill="#3b82f6" fontWeight="bold" fontSize="10" textAnchor="middle">REFACTOR</text>
      <text x="450" y="125" fill={textColor} fontSize="7">• Limpiar arquitectura y nombres</text>
      <text x="450" y="138" fill={textColor} fontSize="7">• Eliminar duplicidad y optimizar</text>
      <text x="450" y="152" fill="#2563eb" fontSize="7" fontWeight="bold">El test protege contra regresiones</text>

      <rect x="25" y="192" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">TDD no es una técnica de testing; es una metodología de diseño de software que obliga a crear código desacoplado y altamente testeable.</text>
    </svg>
  );
  },

  "test-custom-hooks-renderhook": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Testing de Custom Hooks: renderHook(), act() y Wrappers de Contexto</text>

      {/* Left: renderHook container */}
      <rect x="30" y="50" width="270" height="135" rx="8" fill={isDark ? "#1e1b4b" : "#eef2ff"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="165" y="68" fill="#818cf8" fontWeight="bold" fontSize="10" textAnchor="middle">renderHook(() =&gt; useCounter(), &#123; wrapper &#125;)</text>
      <text x="45" y="88" fill={textColor} fontSize="7.5">• Crea un componente Dummy invisible bajo el capó</text>
      <text x="45" y="102" fill={textColor} fontSize="7.5">• Provee dispatcher nativo de React Hooks</text>
      <rect x="45" y="112" width="240" height="30" rx="4" fill={isDark ? "#312e81" : "#c7d2fe"} />
      <text x="165" y="126" fill="#4338ca" fontSize="7" fontFamily="monospace" textAnchor="middle">result.current.count // Lee el estado reactivo</text>
      <text x="165" y="137" fill="#4338ca" fontSize="7" fontFamily="monospace" textAnchor="middle">result.current.increment() // Dispara funciones</text>
      <text x="165" y="165" fill="#6366f1" fontSize="7" fontWeight="bold" textAnchor="middle">Sin necesidad de crear un componente UI visual</text>

      {/* Right: act() and Providers */}
      <rect x="340" y="50" width="270" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="475" y="68" fill="#10b981" fontWeight="bold" fontSize="10" textAnchor="middle">Sincronización de Render: act() y Providers</text>
      <rect x="355" y="80" width="240" height="34" rx="4" fill="#d1fae5" />
      <text x="365" y="94" fill="#047857" fontSize="7" fontFamily="monospace">act(() =&gt; &#123;</text>
      <text x="380" y="105" fill="#047857" fontSize="7" fontFamily="monospace">  result.current.increment();</text>
      <text x="365" y="116" fill="#047857" fontSize="7" fontFamily="monospace">&#125;);</text>
      <text x="355" y="135" fill={textColor} fontSize="7">• Vacía microtasks y actualiza el Virtual DOM</text>
      <text x="355" y="148" fill="#10b981" fontSize="7" fontWeight="bold">• Evita el warning: &apos;not wrapped in act(...)&apos;</text>
      <text x="355" y="162" fill={subtextColor} fontSize="6.5">Wrapper inyecta QueryClientProvider o ReduxProvider</text>

      <rect x="25" y="192" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">renderHook aísla la prueba de la lógica pura del hook; act() garantiza que todas las actualizaciones de estado se hayan completado antes de evaluar assertions.</text>
    </svg>
  );
  },

  "test-mutation-testing-stryker": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Mutation Testing: ¿Quién Evalúa la Calidad de tus Tests? (Stryker)</text>

      {/* Left: 100% False Security */}
      <rect x="30" y="50" width="260" height="135" rx="8" fill={isDark ? "#3f1d1d" : "#fef2f2"} stroke="#ef4444" strokeWidth="1.5" />
      <text x="160" y="68" fill="#ef4444" fontWeight="bold" fontSize="10" textAnchor="middle">La Ilusión de 100% Code Coverage</text>
      <rect x="45" y="80" width="230" height="26" rx="4" fill="#fee2e2" />
      <text x="160" y="96" fill="#991b1b" fontSize="7" fontWeight="bold" textAnchor="middle">100% Lines Covered ≠ 100% de Calidad</text>
      <text x="45" y="122" fill={textColor} fontSize="7">• Un test puede ejecutar una línea SIN asertar su valor</text>
      <text x="45" y="137" fill={textColor} fontSize="7">• Faltan assertions en ramas lógicas (edges)</text>
      <text x="45" y="152" fill={subtextColor} fontSize="6.5">Test suite permisivo que da luz verde a bugs críticos</text>
      <text x="160" y="174" fill="#ef4444" fontSize="7" fontWeight="bold" textAnchor="middle">Falsa Sensación de Seguridad</text>

      {/* Right: Stryker Mutants */}
      <rect x="330" y="50" width="280" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="470" y="68" fill="#10b981" fontWeight="bold" fontSize="10" textAnchor="middle">Stryker Inyecta Mutantes en el Código</text>
      <rect x="345" y="80" width="250" height="36" rx="4" fill={isDark ? "#065f46" : "#d1fae5"} />
      <text x="355" y="95" fill="#047857" fontSize="6.5" fontFamily="monospace">Original: if (age &gt;= 18) &#123; return true; &#125;</text>
      <text x="355" y="108" fill="#ea580c" fontSize="6.5" fontFamily="monospace">Mutante:  if (age &lt; 18)  &#123; return true; &#125;</text>
      <text x="345" y="132" fill="#10b981" fontSize="7.5" fontWeight="bold">1. Si el test FALLA ➔ Mutante Asesinado (Killed) ✓</text>
      <text x="345" y="147" fill="#ef4444" fontSize="7.5" fontWeight="bold">2. Si el test PASA  ➔ Mutante Sobrevivió (Survived) ⚠️</text>
      <text x="345" y="162" fill={textColor} fontSize="7">Mutation Score = (Asesinados / Total Mutantes) * 100</text>
      <text x="470" y="175" fill="#047857" fontSize="6.5" fontWeight="bold" textAnchor="middle">Mide si tus assertions realmente detectan bugs</text>

      <rect x="25" y="192" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">Mutation Testing evalúa la efectividad de tus tests introduciendo bugs intencionales; si un mutante sobrevive, tu test suite tiene agujeros lógicos.</text>
    </svg>
  );
  },

  "test-visual-regression-pixel-diff": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Visual Regression Testing: Comparación Pixel-a-Pixel (Chromatic / Playwright)</text>

      {/* Baseline Snapshot */}
      <rect x="30" y="50" width="170" height="135" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke={border} />
      <text x="115" y="68" fill={textColor} fontWeight="bold" fontSize="9" textAnchor="middle">1. Baseline (Aprobado)</text>
      <rect x="50" y="80" width="130" height="40" rx="6" fill="#3b82f6" />
      <text x="115" y="104" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">Botón Primario</text>
      <text x="45" y="136" fill={textColor} fontSize="7">• Captura golden master</text>
      <text x="45" y="150" fill={subtextColor} fontSize="6.5">Almacenado en Git LFS o Cloud</text>
      <text x="115" y="174" fill="#3b82f6" fontSize="7" fontWeight="bold" textAnchor="middle">Referencia Visual</text>

      {/* Current Snapshot with subtle CSS regression */}
      <rect x="235" y="50" width="170" height="135" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke={border} />
      <text x="320" y="68" fill={textColor} fontWeight="bold" fontSize="9" textAnchor="middle">2. PR Actual (Cambio CSS)</text>
      {/* Regressed button: wrong padding or color */}
      <rect x="250" y="83" width="140" height="34" rx="2" fill="#2563eb" />
      <text x="320" y="104" fill="#ffffff" fontSize="7.5" fontWeight="bold" textAnchor="middle">Botón Primario</text>
      <text x="245" y="136" fill="#ef4444" fontSize="7">• Margin alterado por error</text>
      <text x="245" y="150" fill={subtextColor} fontSize="6.5">Border-radius cambiado de 6px a 2px</text>
      <text x="320" y="174" fill="#f59e0b" fontSize="7" fontWeight="bold" textAnchor="middle">Regresión Visual Silenciosa</text>

      {/* Diff Highlighting */}
      <rect x="440" y="50" width="170" height="135" rx="8" fill={isDark ? "#450a0a" : "#fef2f2"} stroke="#ef4444" strokeWidth="1.5" />
      <text x="525" y="68" fill="#ef4444" fontWeight="bold" fontSize="9" textAnchor="middle">3. Pixel Diff Overlay</text>
      <rect x="455" y="80" width="140" height="40" rx="6" fill="#f43f5e" fillOpacity="0.3" stroke="#f43f5e" strokeDasharray="3 3" />
      <text x="525" y="104" fill="#e11d48" fontSize="8" fontWeight="bold" textAnchor="middle">DIFERENCIA ROSA</text>
      <text x="450" y="136" fill="#ef4444" fontSize="7" fontWeight="bold">0.42% de píxeles distintos</text>
      <text x="450" y="150" fill={textColor} fontSize="6.5">Supera umbral maxDiffPixels: 0</text>
      <text x="525" y="174" fill="#be123c" fontSize="7" fontWeight="bold" textAnchor="middle">PR Bloqueado en CI ❌</text>

      <rect x="25" y="192" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">Las pruebas de regresión visual detectan desalineaciones de CSS y roturas de diseño que ningún test unitario funcional puede percibir.</text>
    </svg>
  );
  },

  "test-consumer-driven-contracts-pact": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Consumer-Driven Contract Testing: Arquitectura Pact</text>

      {/* Consumer Frontend */}
      <rect x="30" y="50" width="180" height="135" rx="8" fill={isDark ? "#1e1b4b" : "#eff6ff"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="120" y="68" fill="#3b82f6" fontWeight="bold" fontSize="9.5" textAnchor="middle">1. Consumer (Frontend)</text>
      <text x="40" y="88" fill={textColor} fontSize="7">• Define expectativas exactas:</text>
      <rect x="40" y="96" width="160" height="26" rx="3" fill={isDark ? "#1e3a8a" : "#dbeafe"} />
      <text x="120" y="108" fill="#1e40af" fontSize="6.5" fontFamily="monospace" textAnchor="middle">GET /api/user ➔ &#123; id: 1, name: &apos;...&apos; &#125;</text>
      <text x="40" y="136" fill="#2563eb" fontSize="7" fontWeight="bold">• Genera contrato: pact.json</text>
      <text x="120" y="174" fill={subtextColor} fontSize="6.5" textAnchor="middle">Publica Contrato a Pact Broker ➔</text>

      {/* Middle: Pact Broker */}
      <rect x="235" y="50" width="170" height="135" rx="8" fill={isDark ? "#311042" : "#fdf4ff"} stroke="#c026d3" strokeWidth="1.5" />
      <text x="320" y="68" fill="#c026d3" fontWeight="bold" fontSize="9.5" textAnchor="middle">Pact Broker (Hub Central)</text>
      <rect x="245" y="80" width="150" height="38" rx="4" fill={isDark ? "#4c1d95" : "#ede9fe"} />
      <text x="320" y="95" fill="#a855f7" fontSize="7" fontWeight="bold" textAnchor="middle">Matriz de Compatibilidad</text>
      <text x="320" y="108" fill="#c026d3" fontSize="6" fontFamily="monospace" textAnchor="middle">Frontend v2.1 ⇄ Backend v1.8</text>
      <text x="245" y="135" fill={textColor} fontSize="7">• Validación &apos;can-i-deploy&apos; en CI</text>
      <text x="245" y="148" fill="#c026d3" fontSize="7" fontWeight="bold">• Despliegues seguros e independientes</text>
      <text x="320" y="174" fill={subtextColor} fontSize="6.5" textAnchor="middle">Gobernanza Asíncrona</text>

      {/* Provider Backend */}
      <rect x="430" y="50" width="180" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="520" y="68" fill="#10b981" fontWeight="bold" fontSize="9.5" textAnchor="middle">2. Provider (Backend API)</text>
      <text x="440" y="88" fill={textColor} fontSize="7">• Descarga el pact.json del broker</text>
      <text x="440" y="103" fill={textColor} fontSize="7">• Ejecuta requests reales contra sus endpoints</text>
      <rect x="440" y="115" width="160" height="24" rx="3" fill="#d1fae5" />
      <text x="520" y="130" fill="#047857" fontSize="7" fontWeight="bold" textAnchor="middle">✓ Contrato 100% Cumplido</text>
      <text x="440" y="152" fill="#10b981" fontSize="7">• Sin levantar el frontend en su CI</text>
      <text x="520" y="174" fill="#059669" fontSize="6.5" fontWeight="bold" textAnchor="middle">Cero Breaking Changes en Prod</text>

      <rect x="25" y="192" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">Contract Testing reemplaza E2Es lentos entre microservicios validando que el esquema acordado nunca se rompa de forma asíncrona.</text>
    </svg>
  );
  },

  "test-property-based-testing-fuzzing": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Property-Based Testing: Generación Fuzzing con fast-check</text>

      {/* Left: Example-based testing */}
      <rect x="30" y="50" width="260" height="135" rx="8" fill={isDark ? "#1e293b" : "#f8fafc"} stroke={border} />
      <text x="160" y="68" fill={textColor} fontWeight="bold" fontSize="10" textAnchor="middle">Testing Basado en Ejemplos (Tradicional)</text>
      <rect x="45" y="78" width="230" height="34" rx="4" fill={isDark ? "#334155" : "#e2e8f0"} />
      <text x="55" y="93" fill={subtextColor} fontSize="6.5" fontFamily="monospace">expect(sort([3, 1, 2])).toEqual([1, 2, 3]);</text>
      <text x="55" y="104" fill={subtextColor} fontSize="6.5" fontFamily="monospace">expect(sort([])).toEqual([]);</text>
      <text x="45" y="125" fill="#ef4444" fontSize="7">• Solo prueba los 2 o 3 casos que el dev imaginó</text>
      <text x="45" y="138" fill={textColor} fontSize="7">• Sesgo de confirmación humano</text>
      <text x="45" y="151" fill={subtextColor} fontSize="6.5">Ignora casos con NaN, strings vacíos, unicode, -0</text>
      <text x="160" y="174" fill="#64748b" fontSize="6.5" textAnchor="middle">Cobertura de Casos Limitada</text>

      {/* Right: Property-based testing */}
      <rect x="330" y="50" width="280" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="470" y="68" fill="#10b981" fontWeight="bold" fontSize="10" textAnchor="middle">Property-Based Testing (Invariantes)</text>
      <rect x="345" y="78" width="250" height="34" rx="4" fill="#d1fae5" />
      <text x="355" y="93" fill="#047857" fontSize="6.5" fontFamily="monospace">fc.assert(fc.property(fc.array(fc.integer()), (arr) =&gt; &#123;</text>
      <text x="355" y="104" fill="#047857" fontSize="6.5" fontFamily="monospace">  return sort(arr).length === arr.length; &#125;));</text>
      <text x="345" y="125" fill="#10b981" fontSize="7" fontWeight="bold">• Genera 1,000 arrays aleatorios por ejecución</text>
      <text x="345" y="138" fill={textColor} fontSize="7">• <tspan fontWeight="bold">Shrinking Automático</tspan>: Reduce el contraejemplo al mínimo</text>
      <text x="345" y="151" fill={subtextColor} fontSize="6.5">Encuentra bugs matemáticos y de codificación invisibles</text>
      <text x="470" y="174" fill="#059669" fontSize="7" fontWeight="bold" textAnchor="middle">Robustez Algorítmica Probada</text>

      <rect x="25" y="192" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">En lugar de verificar entradas fijas, defines propiedades universales que siempre deben cumplirse; la herramienta genera casos extremos automáticamente.</text>
    </svg>
  );
  },

  "test-accessibility-axe-core": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Automatización de Accesibilidad (a11y) con axe-core &amp; WCAG 2.2 AA</text>

      {/* DOM Component */}
      <rect x="30" y="50" width="180" height="135" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke={border} />
      <text x="120" y="68" fill={textColor} fontWeight="bold" fontSize="9.5" textAnchor="middle">DOM Renderizado (RTL / E2E)</text>
      <rect x="40" y="80" width="160" height="40" rx="4" fill={isDark ? "#334155" : "#e2e8f0"} />
      <text x="45" y="94" fill="#ef4444" fontSize="6.5" fontFamily="monospace">&lt;button className=&quot;icon-btn&quot;&gt;</text>
      <text x="55" y="105" fill="#ef4444" fontSize="6.5" fontFamily="monospace">  &lt;svg ... /&gt;</text>
      <text x="45" y="116" fill="#ef4444" fontSize="6.5" fontFamily="monospace">&lt;/button&gt; {/* ¡Sin aria-label! */}</text>
      <text x="40" y="138" fill={textColor} fontSize="7">• Contraste bajo (gris sobre blanco)</text>
      <text x="40" y="151" fill={subtextColor} fontSize="6.5">Inaccesible para lectores de pantalla</text>
      <text x="120" y="174" fill={subtextColor} fontSize="6.5" textAnchor="middle">Escaneo Automatizado ➔</text>

      {/* Center: axe-core Engine */}
      <rect x="235" y="50" width="170" height="135" rx="8" fill={isDark ? "#311042" : "#fdf4ff"} stroke="#c026d3" strokeWidth="1.5" />
      <text x="320" y="68" fill="#c026d3" fontWeight="bold" fontSize="9.5" textAnchor="middle">axe-core Engine</text>
      <text x="245" y="88" fill={textColor} fontSize="7">• Reglas WCAG 2.1 &amp; 2.2 Nivel AA</text>
      <text x="245" y="103" fill={textColor} fontSize="7">• Inspección de árbol de accesibilidad</text>
      <text x="245" y="118" fill="#c026d3" fontSize="7" fontWeight="bold">• Algoritmo de contraste de color</text>
      <text x="245" y="133" fill={textColor} fontSize="7">• Jerarquía de headings (h1 &gt; h2)</text>
      <rect x="245" y="145" width="150" height="24" rx="3" fill={isDark ? "#4c1d95" : "#ede9fe"} />
      <text x="320" y="160" fill="#a855f7" fontSize="7" fontWeight="bold" textAnchor="middle">expect(dom).toHaveNoViolations()</text>

      {/* Right: Audited accessible output */}
      <rect x="430" y="50" width="180" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="520" y="68" fill="#10b981" fontWeight="bold" fontSize="9.5" textAnchor="middle">Cumplimiento Accesible</text>
      <rect x="440" y="80" width="160" height="40" rx="4" fill="#d1fae5" />
      <text x="445" y="94" fill="#047857" fontSize="6.5" fontFamily="monospace">&lt;button aria-label=&quot;Cerrar&quot;&gt;</text>
      <text x="455" y="105" fill="#047857" fontSize="6.5" fontFamily="monospace">  &lt;svg aria-hidden=&quot;true&quot; /&gt;</text>
      <text x="445" y="116" fill="#047857" fontSize="6.5" fontFamily="monospace">&lt;/button&gt;</text>
      <text x="440" y="138" fill="#10b981" fontSize="7" fontWeight="bold">✓ Contraste mínimo 4.5:1 verificado</text>
      <text x="440" y="151" fill={textColor} fontSize="7">• Foco visible en teclado (outline)</text>
      <text x="520" y="174" fill="#059669" fontSize="6.5" fontWeight="bold" textAnchor="middle">Inclusivo y Legalmente Seguro</text>

      <rect x="25" y="192" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">Integrar axe-core en CI detecta automáticamente hasta el 50% de las infracciones de accesibilidad más severas antes de publicar a producción.</text>
    </svg>
  );
  },

  "test-flaky-tests-quarantine-mitigation": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Anatomía &amp; Erradicación de Flaky Tests en CI/CD</text>

      {/* Root Causes */}
      <rect x="30" y="50" width="180" height="135" rx="8" fill={isDark ? "#3f1d1d" : "#fef2f2"} stroke="#ef4444" strokeWidth="1.5" />
      <text x="120" y="68" fill="#ef4444" fontWeight="bold" fontSize="9.5" textAnchor="middle">Causas Raíz (El Veneno de CI)</text>
      <text x="40" y="88" fill={textColor} fontSize="7">1. <tspan fontWeight="bold">Hardcoded Sleeps</tspan>: setTimeout</text>
      <text x="40" y="102" fill={textColor} fontSize="7">2. <tspan fontWeight="bold">Condiciones de Carrera</tspan> de red</text>
      <text x="40" y="116" fill={textColor} fontSize="7">3. <tspan fontWeight="bold">Mutación de Estado Global</tspan></text>
      <text x="40" y="130" fill={textColor} fontSize="7">4. Dependencia de la hora local</text>
      <rect x="40" y="145" width="160" height="24" rx="3" fill="#fee2e2" />
      <text x="120" y="160" fill="#991b1b" fontSize="6.5" fontWeight="bold" textAnchor="middle">Pasa en local, falla 1 de cada 10 en CI</text>

      {/* Mitigation Workflow */}
      <rect x="235" y="50" width="170" height="135" rx="8" fill={isDark ? "#431407" : "#fff7ed"} stroke="#f97316" strokeWidth="1.5" />
      <text x="320" y="68" fill="#f97316" fontWeight="bold" fontSize="9.5" textAnchor="middle">Estrategia de Cuarentena</text>
      <text x="245" y="88" fill={textColor} fontSize="7">• Aislar el test en suite aparte</text>
      <text x="245" y="102" fill={textColor} fontSize="7">• NO bloquear el merge a main</text>
      <text x="245" y="116" fill="#ea580c" fontSize="7" fontWeight="bold">• Retries en CI como alerta</text>
      <rect x="245" y="128" width="150" height="28" rx="3" fill={isDark ? "#7c2d12" : "#ffedd5"} />
      <text x="320" y="142" fill="#c2410c" fontSize="6.5" fontWeight="bold" textAnchor="middle">Alerta de Flakiness &gt; 2%</text>
      <text x="320" y="152" fill="#9a3412" fontSize="6" textAnchor="middle">Ticket asignado al equipo responsable</text>
      <text x="320" y="174" fill={subtextColor} fontSize="6.5" textAnchor="middle">Protocolo de Limpieza</text>

      {/* Architecture Solutions */}
      <rect x="430" y="50" width="180" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="520" y="68" fill="#10b981" fontWeight="bold" fontSize="9.5" textAnchor="middle">Soluciones Definitivas</text>
      <text x="440" y="88" fill="#10b981" fontSize="7" fontWeight="bold">• Auto-waiting en Playwright</text>
      <text x="440" y="102" fill={textColor} fontSize="7">• findBy / waitFor en RTL</text>
      <text x="440" y="116" fill={textColor} fontSize="7">• Limpiar estado en beforeEach():</text>
      <text x="445" y="128" fill="#047857" fontSize="6.5" fontFamily="monospace">queryClient.clear(); vi.clearAllMocks()</text>
      <text x="440" y="145" fill={textColor} fontSize="7">• Mockear el reloj del sistema</text>
      <text x="520" y="174" fill="#059669" fontSize="6.5" fontWeight="bold" textAnchor="middle">Builds Deterministas al 100%</text>

      <rect x="25" y="192" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">Los flaky tests destruyen la confianza del equipo en CI; erradicarlos exige auto-waiting determinista, mocks de timers y aislamiento absoluto de estado.</text>
    </svg>
  );
  },

  "test-state-management-integration-store": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Testing de Integración con Stores Globales (Zustand / Redux / Query)</text>

      {/* Left: Anti-pattern over-mocking */}
      <rect x="30" y="50" width="260" height="135" rx="8" fill={isDark ? "#1e293b" : "#f8fafc"} stroke="#ef4444" strokeWidth="1.5" />
      <text x="160" y="68" fill="#ef4444" fontWeight="bold" fontSize="10" textAnchor="middle">❌ Anti-patrón: Sobre-mockear el Store</text>
      <rect x="45" y="80" width="230" height="30" rx="4" fill="#fee2e2" />
      <text x="55" y="93" fill="#991b1b" fontSize="6.5" fontFamily="monospace">vi.mock(&apos;@/store&apos;, () =&gt; (&#123;</text>
      <text x="55" y="103" fill="#991b1b" fontSize="6.5" fontFamily="monospace">  useAuthStore: () =&gt; (&#123; user: &#123; name: &apos;Mock&apos; &#125; &#125;) &#125;));</text>
      <text x="45" y="125" fill="#ef4444" fontSize="7">• No prueba si las acciones de Zustand o reducers funcionan</text>
      <text x="45" y="138" fill={textColor} fontSize="7">• Si cambia el schema del store, el test sigue pasando</text>
      <text x="160" y="174" fill="#ef4444" fontSize="7" fontWeight="bold" textAnchor="middle">Test Desconectado de la Realidad</text>

      {/* Right: Clean Integration Wrapper */}
      <rect x="330" y="50" width="280" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="470" y="68" fill="#10b981" fontWeight="bold" fontSize="10" textAnchor="middle">✅ Integración Real: Store Limpio por Test</text>
      <rect x="345" y="80" width="250" height="30" rx="4" fill="#d1fae5" />
      <text x="355" y="93" fill="#047857" fontSize="6.5" fontFamily="monospace">const testStore = createStore(initialState);</text>
      <text x="355" y="103" fill="#047857" fontSize="6.5" fontFamily="monospace">render(&lt;Component /&gt;, &#123; wrapper: createWrapper(testStore) &#125;);</text>
      <text x="345" y="125" fill="#10b981" fontSize="7" fontWeight="bold">• Acciones y reducers reales ejecutándose en memoria</text>
      <text x="345" y="138" fill={textColor} fontSize="7">• QueryClient con retry: false y caché limpia</text>
      <text x="345" y="151" fill={subtextColor} fontSize="6.5">Cero contaminación de estado entre tests concurrentes</text>
      <text x="470" y="174" fill="#059669" fontSize="7" fontWeight="bold" textAnchor="middle">Integración Fiel y Robusta</text>

      <rect x="25" y="192" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">En lugar de mockear las llamadas a selectores de Zustand o Redux, utiliza instancias reales de store creadas frescas para cada test con custom wrappers.</text>
    </svg>
  );
  },

  "test-snapshots-anti-patterns": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Snapshot Testing: Fatiga de Mantenimiento vs Uso Legítimo</text>

      {/* Anti-pattern UI Snapshot */}
      <rect x="30" y="50" width="260" height="135" rx="8" fill={isDark ? "#3f1d1d" : "#fef2f2"} stroke="#ef4444" strokeWidth="1.5" />
      <text x="160" y="68" fill="#ef4444" fontWeight="bold" fontSize="10" textAnchor="middle">❌ Anti-patrón: Snapshots Gigantes de DOM</text>
      <rect x="45" y="78" width="230" height="26" rx="4" fill="#fee2e2" />
      <text x="160" y="95" fill="#991b1b" fontSize="6.5" fontFamily="monospace">expect(container).toMatchSnapshot(); // 800 líneas</text>
      <text x="45" y="118" fill="#ef4444" fontSize="7">• Se rompen con cualquier cambio de clase de Tailwind</text>
      <text x="45" y="131" fill={textColor} fontSize="7">• Nadie lee el diff en PRs; los devs corren: <tspan fontWeight="bold">jest -u</tspan></text>
      <text x="45" y="144" fill={subtextColor} fontSize="6.5">Los errores de regresión pasan desapercibidos</text>
      <text x="160" y="174" fill="#ef4444" fontSize="7" fontWeight="bold" textAnchor="middle">Falsa Seguridad &amp; Fatiga de Mantenimiento</text>

      {/* Legitimate Snapshot use */}
      <rect x="330" y="50" width="280" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="470" y="68" fill="#10b981" fontWeight="bold" fontSize="10" textAnchor="middle">✅ Uso Legítimo: Snapshots Semánticos Cortos</text>
      <rect x="345" y="78" width="250" height="26" rx="4" fill="#d1fae5" />
      <text x="470" y="95" fill="#047857" fontSize="6.5" fontFamily="monospace">expect(schemaConfig).toMatchInlineSnapshot(...);</text>
      <text x="345" y="118" fill="#10b981" fontSize="7" fontWeight="bold">• Inline Snapshots visibles en el mismo archivo</text>
      <text x="345" y="131" fill={textColor} fontSize="7">• Serialización de ASTs, configs complejas o respuestas JSON</text>
      <text x="345" y="144" fill={textColor} fontSize="7">• Máximo 10 a 15 líneas; propósito evidente</text>
      <text x="470" y="174" fill="#059669" fontSize="7" fontWeight="bold" textAnchor="middle">Validación Precisa y Fácil de Revisar</text>

      <rect x="25" y="192" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">Evita snapshots de páginas DOM completas; prefiere inline snapshots pequeños para serializaciones de datos, schemas y árboles AST acotados.</text>
    </svg>
  );
  },

  "test-e2e-page-object-model": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Patrón Page Object Model (POM) en Playwright con TypeScript</text>

      {/* Test Spec */}
      <rect x="30" y="50" width="180" height="135" rx="8" fill={isDark ? "#1e1b4b" : "#eff6ff"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="120" y="68" fill="#3b82f6" fontWeight="bold" fontSize="9.5" textAnchor="middle">Test Spec (login.spec.ts)</text>
      <rect x="40" y="80" width="160" height="42" rx="4" fill={isDark ? "#1e3a8a" : "#dbeafe"} />
      <text x="45" y="93" fill="#1e40af" fontSize="6.5" fontFamily="monospace">test(&apos;login exitoso&apos;, async</text>
      <text x="45" y="103" fill="#1e40af" fontSize="6.5" fontFamily="monospace">  (&#123; loginPage &#125;) =&gt; &#123;</text>
      <text x="45" y="114" fill="#1e40af" fontSize="6.5" fontFamily="monospace">  await loginPage.login(&apos;a&apos;,&apos;b&apos;);</text>
      <text x="40" y="138" fill={textColor} fontSize="7">• Legible como lenguaje de negocio</text>
      <text x="40" y="151" fill="#10b981" fontSize="7" fontWeight="bold">• Cero selectores css en el test</text>
      <text x="120" y="174" fill={subtextColor} fontSize="6.5" textAnchor="middle">Invoca Métodos del POM ➔</text>

      {/* Page Object Class */}
      <rect x="235" y="50" width="200" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="335" y="68" fill="#10b981" fontWeight="bold" fontSize="9.5" textAnchor="middle">LoginPage (Clase POM Tipada)</text>
      <rect x="245" y="78" width="180" height="48" rx="4" fill="#d1fae5" />
      <text x="250" y="92" fill="#047857" fontSize="6.5" fontFamily="monospace">readonly emailInput =</text>
      <text x="250" y="101" fill="#047857" fontSize="6.5" fontFamily="monospace">  this.page.getByLabel(&apos;Email&apos;);</text>
      <text x="250" y="112" fill="#047857" fontSize="6.5" fontFamily="monospace">async login(u, p) &#123; ... &#125;</text>
      <text x="245" y="140" fill={textColor} fontSize="7">• Encapsula selectores y locators</text>
      <text x="245" y="153" fill={textColor} fontSize="7">• Si la UI cambia, se edita 1 solo archivo</text>
      <text x="335" y="174" fill="#059669" fontSize="6.5" fontWeight="bold" textAnchor="middle">Única Fuente de Verdad de la Página</text>

      {/* Custom Fixtures */}
      <rect x="460" y="50" width="150" height="135" rx="8" fill={isDark ? "#311042" : "#fdf4ff"} stroke="#c026d3" strokeWidth="1.5" />
      <text x="535" y="68" fill="#c026d3" fontWeight="bold" fontSize="9.5" textAnchor="middle">Custom Fixtures</text>
      <text x="470" y="88" fill={textColor} fontSize="7">• Inyección automática</text>
      <text x="470" y="101" fill={textColor} fontSize="7">• Autenticación previa</text>
      <text x="470" y="114" fill={textColor} fontSize="7">  (storageState guardado)</text>
      <text x="470" y="130" fill="#c026d3" fontSize="7" fontWeight="bold">• Cero login manual en</text>
      <text x="470" y="142" fill="#c026d3" fontSize="7" fontWeight="bold">  cada test (ahorra 8s)</text>
      <text x="535" y="174" fill="#9333ea" fontSize="6.5" fontWeight="bold" textAnchor="middle">Setup Reutilizable</text>

      <rect x="25" y="192" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">El patrón Page Object Model encapsula locators y acciones en clases reutilizables; los tests solo expresan intención de negocio sin acoplarse al DOM.</text>
    </svg>
  );
  },

  "test-code-coverage-metrics-v8": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Métricas de Cobertura de Código: Line, Branch, Function &amp; Statement</text>

      {/* Metric 1: Line / Statement */}
      <rect x="30" y="50" width="135" height="135" rx="6" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke={border} />
      <text x="97" y="70" fill="#3b82f6" fontWeight="bold" fontSize="9" textAnchor="middle">Line Coverage</text>
      <text x="40" y="90" fill={textColor} fontSize="7">• % de líneas físicas ejecutadas</text>
      <text x="40" y="105" fill={textColor} fontSize="7">• Puede engañar con ternarios:</text>
      <rect x="40" y="115" width="115" height="26" rx="3" fill={isDark ? "#334155" : "#e2e8f0"} />
      <text x="97" y="131" fill={subtextColor} fontSize="6" fontFamily="monospace" textAnchor="middle">const x = a ? b : c;</text>
      <text x="97" y="165" fill="#3b82f6" fontSize="7" fontWeight="bold" textAnchor="middle">Métrica Básica</text>

      {/* Metric 2: Branch Coverage */}
      <rect x="180" y="50" width="135" height="135" rx="6" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="247" y="70" fill="#10b981" fontWeight="bold" fontSize="9" textAnchor="middle">Branch Coverage</text>
      <text x="190" y="90" fill={textColor} fontSize="7">• <tspan fontWeight="bold">LA MÁS CRÍTICA</tspan></text>
      <text x="190" y="105" fill={textColor} fontSize="7">• Evalúa ambos caminos:</text>
      <text x="190" y="120" fill="#047857" fontSize="7" fontWeight="bold">  TRUE y FALSE</text>
      <text x="190" y="135" fill={textColor} fontSize="7">• Cubre nullish, &&, ||, if</text>
      <text x="247" y="165" fill="#047857" fontSize="7" fontWeight="bold" textAnchor="middle">La Métrica Real</text>

      {/* Metric 3: Function Coverage */}
      <rect x="330" y="50" width="135" height="135" rx="6" fill={isDark ? "#1e1b4b" : "#eff6ff"} stroke="#6366f1" />
      <text x="397" y="70" fill="#6366f1" fontWeight="bold" fontSize="9" textAnchor="middle">Function Coverage</text>
      <text x="340" y="90" fill={textColor} fontSize="7">• % de funciones declaradas que fueron invocadas</text>
      <text x="340" y="110" fill={textColor} fontSize="7">• Detecta código muerto o métodos olvidados</text>
      <text x="397" y="165" fill="#4338ca" fontSize="7" fontWeight="bold" textAnchor="middle">Invocación General</text>

      {/* Metric 4: V8 Engine Profiler */}
      <rect x="480" y="50" width="130" height="135" rx="6" fill={isDark ? "#311042" : "#fdf4ff"} stroke="#c026d3" />
      <text x="545" y="70" fill="#c026d3" fontWeight="bold" fontSize="9" textAnchor="middle">V8 Profiler</text>
      <text x="490" y="90" fill={textColor} fontSize="7">• Cobertura nativa en C++</text>
      <text x="490" y="105" fill={textColor} fontSize="7">• Sin instrumentar código con Babel/Istanbul</text>
      <text x="490" y="125" fill="#c026d3" fontSize="7" fontWeight="bold">• Utilizado por Vitest</text>
      <text x="545" y="165" fill="#9333ea" fontSize="7" fontWeight="bold" textAnchor="middle">Ultra Rápido (10x)</text>

      <rect x="25" y="192" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">Branch Coverage es la métrica más confiable: garantiza que tanto las ramas positivas como las negativas de cada condición han sido probadas.</text>
    </svg>
  );
  },

  "test-performance-testing-lighthouse-ci": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Auditoría Automatizada de Core Web Vitals con Lighthouse CI (LHCI)</text>

      {/* Step 1: CI Pipeline trigger */}
      <rect x="30" y="50" width="170" height="135" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke={border} />
      <text x="115" y="68" fill={textColor} fontWeight="bold" fontSize="9.5" textAnchor="middle">1. PR Trigger en CI</text>
      <text x="40" y="88" fill={textColor} fontSize="7">• Compila versión de producción</text>
      <text x="40" y="102" fill={textColor} fontSize="7">• Levanta servidor local preview</text>
      <rect x="40" y="115" width="150" height="24" rx="3" fill="#3b82f6" />
      <text x="115" y="130" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle">lhci autorun</text>
      <text x="40" y="152" fill={subtextColor} fontSize="6.5">Ejecuta 3 a 5 pasadas para mediana</text>
      <text x="115" y="174" fill="#3b82f6" fontSize="7" fontWeight="bold" textAnchor="middle">Medición Headless Chrome</text>

      {/* Step 2: Core Web Vitals Assertions */}
      <rect x="225" y="50" width="190" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="320" y="68" fill="#10b981" fontWeight="bold" fontSize="9.5" textAnchor="middle">2. Presupuestos de Web Vitals</text>
      <rect x="235" y="80" width="170" height="24" rx="3" fill="#d1fae5" />
      <text x="320" y="95" fill="#047857" fontSize="7" fontWeight="bold" textAnchor="middle">LCP (Carga): &lt;= 2.5s [PASS]</text>

      <rect x="235" y="108" width="170" height="24" rx="3" fill="#d1fae5" />
      <text x="320" y="123" fill="#047857" fontSize="7" fontWeight="bold" textAnchor="middle">INP (Interactividad): &lt;= 200ms [PASS]</text>

      <rect x="235" y="136" width="170" height="24" rx="3" fill="#d1fae5" />
      <text x="320" y="151" fill="#047857" fontSize="7" fontWeight="bold" textAnchor="middle">CLS (Estabilidad): &lt;= 0.1 [PASS]</text>
      <text x="320" y="174" fill="#059669" fontSize="6.5" fontWeight="bold" textAnchor="middle">Presupuesto Estricto (lighthouserc.json)</text>

      {/* Step 3: CI Gate Status */}
      <rect x="440" y="50" width="170" height="135" rx="8" fill={isDark ? "#1e1b4b" : "#eff6ff"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="525" y="68" fill="#818cf8" fontWeight="bold" fontSize="9.5" textAnchor="middle">3. GitHub PR Status</text>
      <rect x="450" y="80" width="150" height="42" rx="4" fill={isDark ? "#312e81" : "#c7d2fe"} />
      <text x="525" y="96" fill="#4338ca" fontSize="7" fontWeight="bold" textAnchor="middle">Score Rendimiento: 98/100</text>
      <text x="525" y="110" fill="#10b981" fontSize="6.5" fontWeight="bold" textAnchor="middle">✓ Ninguna regresión detectada</text>
      <text x="450" y="138" fill={textColor} fontSize="7">• Bloquea el merge si el score cae</text>
      <text x="450" y="151" fill={textColor} fontSize="7">• Sube reporte visual a LHCI Server</text>
      <text x="525" y="174" fill="#6366f1" fontSize="7" fontWeight="bold" textAnchor="middle">Protección Continua de UX</text>

      <rect x="25" y="192" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">Lighthouse CI previene regresiones de rendimiento en Pull Requests auditando Core Web Vitals antes de fusionar código a producción.</text>
    </svg>
  );
  }
};
