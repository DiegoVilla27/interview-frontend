import { DiagramRegistry } from "../diagram.types";

/** Diagramas SVG del módulo Browser. */
export const browserDiagrams: DiagramRegistry = {
  "browser-rendering-path": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* HTML / DOM */}
      <rect x="25" y="40" width="105" height="65" rx="6" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="35" y="65" fill="#3b82f6" fontWeight="700" fontSize="11">HTML ➔ DOM</text>
      <text x="35" y="85" fill={subtextColor} fontSize="9">Nodos del árbol</text>

      {/* CSS / CSSOM */}
      <rect x="25" y="120" width="105" height="65" rx="6" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#0ea5e9" strokeWidth="1.5" />
      <text x="35" y="145" fill="#0ea5e9" fontWeight="700" fontSize="11">CSS ➔ CSSOM</text>
      <text x="35" y="165" fill={subtextColor} fontSize="9">Reglas de estilo</text>

      {/* Render Tree */}
      <rect x="165" y="75" width="125" height="85" rx="8" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="178" y="105" fill="#818cf8" fontWeight="700" fontSize="11">Render Tree</text>
      <text x="178" y="125" fill={textColor} fontSize="9">Nodos visibles</text>
      <text x="178" y="140" fill={subtextColor} fontSize="8">(sin display:none)</text>

      {/* Layout */}
      <rect x="325" y="75" width="125" height="85" rx="8" fill={isDark ? "#451a03" : "#ffedd5"} stroke="#f97316" strokeWidth="1.5" />
      <text x="338" y="105" fill="#f97316" fontWeight="700" fontSize="11">Layout (Reflow)</text>
      <text x="338" y="125" fill={textColor} fontSize="9">Cálculo de cajas,</text>
      <text x="338" y="140" fill={subtextColor} fontSize="8">posiciones y tamaño</text>

      {/* Paint & Composite */}
      <rect x="485" y="75" width="125" height="85" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="498" y="105" fill="#10b981" fontWeight="700" fontSize="11">Paint & Composite</text>
      <text x="498" y="125" fill={textColor} fontSize="9">Rasterizado visual</text>
      <text x="498" y="140" fill="#6ee7b7" fontSize="8">Capas a la GPU</text>

      {/* Connecting arrows */}
      <path d="M132 75 L160 105" stroke="#6366f1" strokeWidth="1.5" />
      <path d="M132 150 L160 125" stroke="#6366f1" strokeWidth="1.5" />
      <path d="M293 115 L320 115" stroke="#f97316" strokeWidth="1.5" />
      <path d="M453 115 L480 115" stroke="#10b981" strokeWidth="1.5" />
    </svg>
  );
  },

  "browser-languages-runtime": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* HTML Engine */}
      <rect x="25" y="30" width="135" height="150" rx="8" fill={isDark ? "#451a03" : "#ffedd5"} stroke="#f97316" strokeWidth="1.5" />
      <text x="92" y="52" fill="#ea580c" fontWeight="bold" fontSize="11" textAnchor="middle">1. HTML Parser</text>
      <rect x="35" y="65" width="115" height="26" rx="4" fill={isDark ? "#7c2d12" : "#fed7aa"} />
      <text x="92" y="82" fill="#c2410c" fontSize="9" fontWeight="bold" textAnchor="middle">Tokens ➔ DOM</text>
      <text x="35" y="112" fill={textColor} fontSize="8">• Estructura semántica</text>
      <text x="35" y="128" fill={textColor} fontSize="8">• Árbol vivo de nodos</text>
      <text x="35" y="144" fill={textColor} fontSize="8">• Parser tolerante</text>
      <text x="35" y="165" fill="#ea580c" fontSize="8" fontWeight="bold">Esqueleto de la Web</text>

      {/* CSS Engine */}
      <rect x="175" y="30" width="135" height="150" rx="8" fill={isDark ? "#0c4a6e" : "#e0f2fe"} stroke="#0ea5e9" strokeWidth="1.5" />
      <text x="242" y="52" fill="#0284c7" fontWeight="bold" fontSize="11" textAnchor="middle">2. CSS Engine</text>
      <rect x="185" y="65" width="115" height="26" rx="4" fill={isDark ? "#075985" : "#bae6fd"} />
      <text x="242" y="82" fill="#0369a1" fontSize="9" fontWeight="bold" textAnchor="middle">Reglas ➔ CSSOM</text>
      <text x="185" y="112" fill={textColor} fontSize="8">• Cascada y herencia</text>
      <text x="185" y="128" fill={textColor} fontSize="8">• Especificidad (a,b,c,d)</text>
      <text x="185" y="144" fill={textColor} fontSize="8">• Layout, Paint, Compositor</text>
      <text x="185" y="165" fill="#0284c7" fontSize="8" fontWeight="bold">Presentación Visual</text>

      {/* JS Engine */}
      <rect x="325" y="30" width="135" height="150" rx="8" fill={isDark ? "#713f12" : "#fef9c3"} stroke="#eab308" strokeWidth="1.5" />
      <text x="392" y="52" fill="#ca8a04" fontWeight="bold" fontSize="11" textAnchor="middle">3. JavaScript (V8)</text>
      <rect x="335" y="65" width="115" height="26" rx="4" fill={isDark ? "#854d0e" : "#fef08a"} />
      <text x="392" y="82" fill="#713f12" fontSize="9" fontWeight="bold" textAnchor="middle">Call Stack / JIT</text>
      <text x="335" y="112" fill={textColor} fontSize="8">• Lenguaje nativo de lógica</text>
      <text x="335" y="128" fill={textColor} fontSize="8">• Event Loop asíncrono</text>
      <text x="335" y="144" fill={textColor} fontSize="8">• Garbage Collector</text>
      <text x="335" y="165" fill="#ca8a04" fontSize="8" fontWeight="bold">Interactividad y APIs</text>

      {/* WebAssembly */}
      <rect x="475" y="30" width="140" height="150" rx="8" fill={isDark ? "#1e1b4b" : "#ede9fe"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="545" y="52" fill="#818cf8" fontWeight="bold" fontSize="11" textAnchor="middle">4. WebAssembly (Wasm)</text>
      <rect x="485" y="65" width="120" height="26" rx="4" fill={isDark ? "#312e81" : "#c7d2fe"} />
      <text x="545" y="82" fill="#4338ca" fontSize="9" fontWeight="bold" textAnchor="middle">Bytecode Binario</text>
      <text x="485" y="112" fill={textColor} fontSize="8">• Ejecución near-native</text>
      <text x="485" y="128" fill={textColor} fontSize="8">• Compilado de C++/Rust</text>
      <text x="485" y="144" fill={textColor} fontSize="8">• Rendimiento CPU intensivo</text>
      <text x="485" y="165" fill="#6366f1" fontSize="8" fontWeight="bold">Cómputo Extremo</text>

      <rect x="25" y="188" width="590" height="18" rx="4" fill={isDark ? "#1f2937" : "#f1f5f9"} />
      <text x="320" y="200" fill={subtextColor} fontSize="9" textAnchor="middle">JavaScript y WebAssembly cooperan compartiendo memoria mediante WebAssembly.Memory y TypedArrays.</text>
    </svg>
  );
  },

  "browser-dom-tree-nodes": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* Document Node */}
      <rect x="270" y="25" width="100" height="26" rx="4" fill={isDark ? "#1e1b4b" : "#ede9fe"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="320" y="42" fill="#818cf8" fontWeight="bold" fontSize="9" textAnchor="middle">#document</text>

      {/* html element */}
      <path d="M320 51 L320 65" stroke="#6366f1" strokeWidth="1.5" />
      <rect x="270" y="65" width="100" height="26" rx="4" fill={isDark ? "#064e3b" : "#d1fae5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="320" y="82" fill="#047857" fontWeight="bold" fontSize="9" textAnchor="middle">&lt;html&gt;</text>

      {/* Branches to head and body */}
      <path d="M320 91 L160 115" stroke="#10b981" strokeWidth="1.5" />
      <path d="M320 91 L480 115" stroke="#10b981" strokeWidth="1.5" />

      {/* Head Subtree */}
      <rect x="110" y="115" width="100" height="26" rx="4" fill={isDark ? "#0c4a6e" : "#e0f2fe"} stroke="#0ea5e9" strokeWidth="1.5" />
      <text x="160" y="132" fill="#0284c7" fontWeight="bold" fontSize="9" textAnchor="middle">&lt;head&gt;</text>
      <path d="M160 141 L160 155" stroke="#0ea5e9" strokeWidth="1.5" />
      <rect x="100" y="155" width="120" height="24" rx="4" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#94a3b8" />
      <text x="160" y="171" fill={textColor} fontSize="8" textAnchor="middle">&lt;title&gt; ➔ #text</text>

      {/* Body Subtree */}
      <rect x="430" y="115" width="100" height="26" rx="4" fill={isDark ? "#064e3b" : "#d1fae5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="480" y="132" fill="#047857" fontWeight="bold" fontSize="9" textAnchor="middle">&lt;body&gt;</text>

      {/* Body Children */}
      <path d="M480 141 L390 155" stroke="#10b981" strokeWidth="1" />
      <path d="M480 141 L480 155" stroke="#10b981" strokeWidth="1" />
      <path d="M480 141 L570 155" stroke="#10b981" strokeWidth="1" />

      <rect x="345" y="155" width="90" height="24" rx="4" fill={isDark ? "#1e1b4b" : "#ede9fe"} stroke="#6366f1" />
      <text x="390" y="171" fill="#818cf8" fontSize="8" textAnchor="middle">&lt;header&gt;</text>

      <rect x="440" y="155" width="80" height="24" rx="4" fill={isDark ? "#1e1b4b" : "#ede9fe"} stroke="#6366f1" />
      <text x="480" y="171" fill="#818cf8" fontSize="8" textAnchor="middle">&lt;main&gt;</text>

      <rect x="525" y="155" width="90" height="24" rx="4" fill={isDark ? "#1e1b4b" : "#ede9fe"} stroke="#6366f1" />
      <text x="570" y="171" fill="#818cf8" fontSize="8" textAnchor="middle">&lt;p&gt; ➔ #text</text>

      <rect x="25" y="188" width="590" height="18" rx="4" fill={isDark ? "#1f2937" : "#f1f5f9"} />
      <text x="320" y="200" fill={subtextColor} fontSize="9" textAnchor="middle">Jerarquía de herencia: EventTarget ➔ Node ➔ Element ➔ HTMLElement ➔ HTMLDivElement.</text>
    </svg>
  );
  },

  "browser-bom-hierarchy": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* Global window root */}
      <rect x="230" y="25" width="180" height="35" rx="8" fill={isDark ? "#1e1b4b" : "#ede9fe"} stroke="#6366f1" strokeWidth="2" />
      <text x="320" y="47" fill="#818cf8" fontWeight="bold" fontSize="12" textAnchor="middle">window (BOM Root Global)</text>

      {/* Tree Connectors */}
      <path d="M320 60 L75 100" stroke="#6366f1" strokeWidth="1.5" />
      <path d="M320 60 L195 100" stroke="#6366f1" strokeWidth="1.5" />
      <path d="M320 60 L320 100" stroke="#10b981" strokeWidth="2" />
      <path d="M320 60 L445 100" stroke="#6366f1" strokeWidth="1.5" />
      <path d="M320 60 L565 100" stroke="#6366f1" strokeWidth="1.5" />

      {/* 1. navigator */}
      <rect x="25" y="100" width="100" height="80" rx="6" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#94a3b8" strokeWidth="1" />
      <text x="75" y="120" fill="#0284c7" fontWeight="bold" fontSize="9" textAnchor="middle">navigator</text>
      <text x="75" y="136" fill={textColor} fontSize="7.5" textAnchor="middle">• userAgent</text>
      <text x="75" y="148" fill={textColor} fontSize="7.5" textAnchor="middle">• onLine</text>
      <text x="75" y="160" fill={textColor} fontSize="7.5" textAnchor="middle">• serviceWorker</text>

      {/* 2. location */}
      <rect x="145" y="100" width="100" height="80" rx="6" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#94a3b8" strokeWidth="1" />
      <text x="195" y="120" fill="#ea580c" fontWeight="bold" fontSize="9" textAnchor="middle">location</text>
      <text x="195" y="136" fill={textColor} fontSize="7.5" textAnchor="middle">• href, host</text>
      <text x="195" y="148" fill={textColor} fontSize="7.5" textAnchor="middle">• pathname</text>
      <text x="195" y="160" fill={textColor} fontSize="7.5" textAnchor="middle">• search, hash</text>

      {/* 3. document (The DOM inside BOM) */}
      <rect x="265" y="100" width="110" height="80" rx="6" fill={isDark ? "#064e3b" : "#d1fae5"} stroke="#10b981" strokeWidth="2" />
      <text x="320" y="120" fill="#047857" fontWeight="bold" fontSize="10" textAnchor="middle">document (DOM)</text>
      <text x="320" y="136" fill={textColor} fontSize="7.5" textAnchor="middle">• getElementById</text>
      <text x="320" y="148" fill={textColor} fontSize="7.5" textAnchor="middle">• querySelector</text>
      <text x="320" y="160" fill="#047857" fontSize="7.5" fontWeight="bold" textAnchor="middle">Contenido HTML</text>

      {/* 4. history */}
      <rect x="395" y="100" width="100" height="80" rx="6" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#94a3b8" strokeWidth="1" />
      <text x="445" y="120" fill="#ca8a04" fontWeight="bold" fontSize="9" textAnchor="middle">history</text>
      <text x="445" y="136" fill={textColor} fontSize="7.5" textAnchor="middle">• back(), forward()</text>
      <text x="445" y="148" fill={textColor} fontSize="7.5" textAnchor="middle">• pushState()</text>
      <text x="445" y="160" fill={textColor} fontSize="7.5" textAnchor="middle">• replaceState()</text>

      {/* 5. screen */}
      <rect x="515" y="100" width="100" height="80" rx="6" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#94a3b8" strokeWidth="1" />
      <text x="565" y="120" fill="#a855f7" fontWeight="bold" fontSize="9" textAnchor="middle">screen</text>
      <text x="565" y="136" fill={textColor} fontSize="7.5" textAnchor="middle">• width, height</text>
      <text x="565" y="148" fill={textColor} fontSize="7.5" textAnchor="middle">• availWidth</text>
      <text x="565" y="160" fill={textColor} fontSize="7.5" textAnchor="middle">• orientation</text>

      <rect x="25" y="188" width="590" height="18" rx="4" fill={isDark ? "#1f2937" : "#f1f5f9"} />
      <text x="320" y="200" fill={subtextColor} fontSize="9" textAnchor="middle">El DOM (document) es en realidad una propiedad del BOM (window.document) expuesta por el navegador.</text>
    </svg>
  );
  },

  "browser-localstorage-lifecycle": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* Origin Box */}
      <rect x="30" y="30" width="270" height="150" rx="8" fill={isDark ? "#1e1b4b" : "#ede9fe"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="165" y="52" fill="#818cf8" fontWeight="bold" fontSize="11" textAnchor="middle">Alcance por Origen (Same-Origin)</text>
      <rect x="45" y="65" width="240" height="26" rx="4" fill={isDark ? "#312e81" : "#c7d2fe"} />
      <text x="165" y="82" fill="#4338ca" fontSize="9" fontFamily="monospace" textAnchor="middle">https://mi-app.com:443</text>
      <text x="45" y="112" fill={textColor} fontSize="8.5">• Capacidad: ~5MB a ~10MB</text>
      <text x="45" y="128" fill={textColor} fontSize="8.5">• Persistencia: Indefinida en disco</text>
      <text x="45" y="144" fill={textColor} fontSize="8.5">• Compartido entre todas las pestañas</text>
      <text x="45" y="162" fill="#818cf8" fontSize="8.5" fontWeight="bold">Sobrevive al reinicio del SO</text>

      {/* Code / API Box */}
      <rect x="340" y="30" width="270" height="150" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="475" y="52" fill="#34d399" fontWeight="bold" fontSize="11" textAnchor="middle">API Síncrona de Strings</text>
      <rect x="350" y="65" width="250" height="68" rx="4" fill={isDark ? "#09090b" : "#ffffff"} stroke="#a7f3d0" strokeWidth="1" />
      <text x="360" y="82" fill="#818cf8" fontSize="8" fontFamily="monospace">localStorage.setItem(&quot;user&quot;, JSON.stringify(u));</text>
      <text x="360" y="98" fill="#10b981" fontSize="8" fontFamily="monospace">const data = JSON.parse(localStorage.getItem(&quot;user&quot;));</text>
      <text x="360" y="114" fill="#ef4444" fontSize="8" fontFamily="monospace">localStorage.removeItem(&quot;user&quot;);</text>
      <text x="350" y="150" fill={textColor} fontSize="8">• No se envía en peticiones HTTP (0 sobrecarga)</text>
      <text x="350" y="165" fill="#ef4444" fontSize="8" fontWeight="bold">⚠️ Vulnerable a ataques XSS si se guardan tokens</text>

      <rect x="25" y="188" width="590" height="18" rx="4" fill={isDark ? "#1f2937" : "#f1f5f9"} />
      <text x="320" y="200" fill={subtextColor} fontSize="9" textAnchor="middle">El evento &apos;storage&apos; se dispara en otras pestañas del mismo origen cuando cambia una clave.</text>
    </svg>
  );
  },

  "browser-sessionstorage-scope": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* Tab 1 */}
      <rect x="30" y="30" width="270" height="145" rx="8" fill={isDark ? "#1e1b4b" : "#ede9fe"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="165" y="52" fill="#818cf8" fontWeight="bold" fontSize="11" textAnchor="middle">Pestaña 1 (Tab A - Mismo Origen)</text>
      <rect x="45" y="65" width="240" height="32" rx="4" fill={isDark ? "#312e81" : "#c7d2fe"} />
      <text x="165" y="85" fill="#4338ca" fontSize="9" fontFamily="monospace" textAnchor="middle">sessionStorage.setItem(&apos;step&apos;, &apos;1&apos;)</text>
      <text x="45" y="118" fill={textColor} fontSize="8.5">• Aislado estrictamente a esta pestaña</text>
      <text x="45" y="133" fill={textColor} fontSize="8.5">• Capacidad: ~5MB</text>
      <text x="45" y="150" fill="#ef4444" fontSize="8.5" fontWeight="bold">Se elimina al cerrar la pestaña</text>

      {/* Tab 2 Isolated */}
      <rect x="340" y="30" width="270" height="145" rx="8" fill={isDark ? "#451a03" : "#ffedd5"} stroke="#f97316" strokeWidth="1.5" />
      <text x="475" y="52" fill="#fb923c" fontWeight="bold" fontSize="11" textAnchor="middle">Pestaña 2 (Tab B - Mismo Origen)</text>
      <rect x="355" y="65" width="240" height="32" rx="4" fill={isDark ? "#7c2d12" : "#fed7aa"} />
      <text x="475" y="85" fill="#c2410c" fontSize="9" fontFamily="monospace" textAnchor="middle">sessionStorage.getItem(&apos;step&apos;) ➔ null</text>
      <text x="355" y="118" fill={textColor} fontSize="8.5">• No comparte memoria con la Pestaña 1</text>
      <text x="355" y="133" fill={textColor} fontSize="8.5">• Ideal para flujos multi-paso concurrentes</text>
      <text x="355" y="150" fill="#f97316" fontSize="8.5" fontWeight="bold">Sobrevive a recargas F5 en la misma pestaña</text>

      <rect x="25" y="188" width="590" height="18" rx="4" fill={isDark ? "#1f2937" : "#f1f5f9"} />
      <text x="320" y="200" fill={subtextColor} fontSize="9" textAnchor="middle">Duplicar una pestaña clona el sessionStorage inicial, pero luego divergen de forma completamente aislada.</text>
    </svg>
  );
  },

  "browser-cookies-security-flags": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* Header / Server Set-Cookie */}
      <rect x="30" y="25" width="580" height="35" rx="6" fill={isDark ? "#1e1b4b" : "#ede9fe"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="45" y="46" fill="#818cf8" fontSize="9" fontFamily="monospace">Set-Cookie: session_id=xyz123; Secure; HttpOnly; SameSite=Strict; Path=/; Max-Age=86400</text>

      {/* 3 Security Shields */}
      {/* 1. HttpOnly */}
      <rect x="30" y="70" width="180" height="110" rx="8" fill={isDark ? "#450a0a" : "#fee2e2"} stroke="#ef4444" strokeWidth="1.5" />
      <text x="120" y="90" fill="#ef4444" fontWeight="bold" fontSize="11" textAnchor="middle">🛡️ HttpOnly</text>
      <text x="40" y="112" fill={textColor} fontSize="8">• Inaccesible desde JavaScript</text>
      <text x="40" y="126" fill={textColor} fontSize="8">• document.cookie devuelve &quot;&quot;</text>
      <text x="40" y="140" fill={textColor} fontSize="8">• Mitiga robo de sesión por XSS</text>
      <text x="40" y="160" fill="#ef4444" fontSize="8" fontWeight="bold">Obligatorio para Auth Tokens</text>

      {/* 2. Secure */}
      <rect x="230" y="70" width="180" height="110" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="320" y="90" fill="#047857" fontWeight="bold" fontSize="11" textAnchor="middle">🔒 Secure</text>
      <text x="240" y="112" fill={textColor} fontSize="8">• Solo viaja por canal HTTPS</text>
      <text x="240" y="126" fill={textColor} fontSize="8">• Nunca se envía en texto plano (HTTP)</text>
      <text x="240" y="140" fill={textColor} fontSize="8">• Mitiga espionaje Man-in-the-Middle</text>
      <text x="240" y="160" fill="#047857" fontSize="8" fontWeight="bold">Cifrado simétrico en tránsito</text>

      {/* 3. SameSite */}
      <rect x="430" y="70" width="180" height="110" rx="8" fill={isDark ? "#0c4a6e" : "#e0f2fe"} stroke="#0ea5e9" strokeWidth="1.5" />
      <text x="520" y="90" fill="#0284c7" fontWeight="bold" fontSize="11" textAnchor="middle">🌐 SameSite (CSRF)</text>
      <text x="440" y="112" fill={textColor} fontSize="8">• Strict: Nunca en cross-site</text>
      <text x="440" y="126" fill={textColor} fontSize="8">• Lax: Solo en navegación top-level GET</text>
      <text x="440" y="140" fill={textColor} fontSize="8">• None: Requiere flag Secure</text>
      <text x="440" y="160" fill="#0284c7" fontSize="8" fontWeight="bold">Defensa nativa anti-CSRF</text>

      <rect x="25" y="188" width="590" height="18" rx="4" fill={isDark ? "#1f2937" : "#f1f5f9"} />
      <text x="320" y="200" fill={subtextColor} fontSize="9" textAnchor="middle">Capacidad máxima por cookie: 4096 bytes (~4KB); se envían automáticamente en cada request HTTP al dominio.</text>
    </svg>
  );
  },

  "browser-cache-mechanisms": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* Step 1: Memory Cache */}
      <rect x="25" y="35" width="130" height="140" rx="8" fill={isDark ? "#1e1b4b" : "#ede9fe"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="90" y="55" fill="#818cf8" fontWeight="bold" fontSize="10.5" textAnchor="middle">1. Memory Cache</text>
      <rect x="35" y="65" width="110" height="24" rx="4" fill={isDark ? "#312e81" : "#c7d2fe"} />
      <text x="90" y="81" fill="#4338ca" fontSize="8.5" fontWeight="bold" textAnchor="middle">RAM (0 ms)</text>
      <text x="35" y="110" fill={textColor} fontSize="8">• Recursos activos</text>
      <text x="35" y="124" fill={textColor} fontSize="8">• Descartada al cerrar tab</text>
      <text x="35" y="152" fill="#818cf8" fontSize="8" fontWeight="bold">⚡ Velocidad Máxima</text>

      {/* Step 2: Service Worker */}
      <rect x="175" y="35" width="135" height="140" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="242" y="55" fill="#047857" fontWeight="bold" fontSize="10.5" textAnchor="middle">2. Service Worker</text>
      <rect x="185" y="65" width="115" height="24" rx="4" fill={isDark ? "#065f46" : "#a7f3d0"} />
      <text x="242" y="81" fill="#064e3b" fontSize="8.5" fontWeight="bold" textAnchor="middle">Cache Storage API</text>
      <text x="185" y="110" fill={textColor} fontSize="8">• Control programático</text>
      <text x="185" y="124" fill={textColor} fontSize="8">• Soporte Offline-first</text>
      <text x="185" y="152" fill="#047857" fontSize="8" fontWeight="bold">Proxy Interceptor</text>

      {/* Step 3: HTTP Disk Cache */}
      <rect x="330" y="35" width="135" height="140" rx="8" fill={isDark ? "#0c4a6e" : "#e0f2fe"} stroke="#0ea5e9" strokeWidth="1.5" />
      <text x="397" y="55" fill="#0284c7" fontWeight="bold" fontSize="10.5" textAnchor="middle">3. Disk Cache</text>
      <rect x="340" y="65" width="115" height="24" rx="4" fill={isDark ? "#075985" : "#bae6fd"} />
      <text x="397" y="81" fill="#0369a1" fontSize="8.5" fontWeight="bold" textAnchor="middle">HTTP 200 (disk)</text>
      <text x="340" y="110" fill={textColor} fontSize="8">• Cache-Control max-age</text>
      <text x="340" y="124" fill={textColor} fontSize="8">• immutable assets</text>
      <text x="340" y="152" fill="#0284c7" fontSize="8" fontWeight="bold">Persistencia en Disco</text>

      {/* Step 4: Revalidation */}
      <rect x="485" y="35" width="130" height="140" rx="8" fill={isDark ? "#451a03" : "#fef3c7"} stroke="#f59e0b" strokeWidth="1.5" />
      <text x="550" y="55" fill="#d97706" fontWeight="bold" fontSize="10.5" textAnchor="middle">4. Revalidation</text>
      <rect x="495" y="65" width="110" height="24" rx="4" fill={isDark ? "#78350f" : "#fde68a"} />
      <text x="550" y="81" fill="#92400e" fontSize="8.5" fontWeight="bold" textAnchor="middle">HTTP 304 Not Modified</text>
      <text x="495" y="110" fill={textColor} fontSize="8">• ETag / If-None-Match</text>
      <text x="495" y="124" fill={textColor} fontSize="8">• Last-Modified</text>
      <text x="495" y="152" fill="#d97706" fontSize="8" fontWeight="bold">Sin payload en red</text>

      <rect x="25" y="188" width="590" height="18" rx="4" fill={isDark ? "#1f2937" : "#f1f5f9"} />
      <text x="320" y="200" fill={subtextColor} fontSize="9" textAnchor="middle">Assets estáticos versionados: Cache-Control: public, max-age=31536000, immutable.</text>
    </svg>
  );
  },

  "browser-dom-vs-bom": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* Outer BOM Container */}
      <rect x="30" y="25" width="580" height="155" rx="10" fill={isDark ? "#1e1b4b" : "#ede9fe"} stroke="#6366f1" strokeWidth="2" />
      <text x="50" y="45" fill="#818cf8" fontWeight="bold" fontSize="11">BOM (Browser Object Model) - Host Environment: window</text>

      {/* BOM Services Badges */}
      <rect x="50" y="55" width="105" height="26" rx="4" fill={isDark ? "#312e81" : "#c7d2fe"} />
      <text x="102" y="72" fill="#4338ca" fontSize="8.5" fontWeight="bold" textAnchor="middle">window.location</text>

      <rect x="165" y="55" width="105" height="26" rx="4" fill={isDark ? "#312e81" : "#c7d2fe"} />
      <text x="217" y="72" fill="#4338ca" fontSize="8.5" fontWeight="bold" textAnchor="middle">window.history</text>

      <rect x="280" y="55" width="115" height="26" rx="4" fill={isDark ? "#312e81" : "#c7d2fe"} />
      <text x="337" y="72" fill="#4338ca" fontSize="8.5" fontWeight="bold" textAnchor="middle">window.navigator</text>

      <rect x="405" y="55" width="100" height="26" rx="4" fill={isDark ? "#312e81" : "#c7d2fe"} />
      <text x="455" y="72" fill="#4338ca" fontSize="8.5" fontWeight="bold" textAnchor="middle">window.screen</text>

      {/* Inner DOM Container */}
      <rect x="50" y="92" width="540" height="78" rx="6" fill={isDark ? "#064e3b" : "#d1fae5"} stroke="#10b981" strokeWidth="2" />
      <text x="65" y="112" fill="#047857" fontWeight="bold" fontSize="10">DOM (Document Object Model) - window.document</text>
      <text x="65" y="130" fill={textColor} fontSize="8.5">• Estandarizado por W3C / WHATWG: Árbol de elementos HTML (&lt;html&gt;, &lt;body&gt;, &lt;div&gt;)</text>
      <text x="65" y="146" fill={textColor} fontSize="8.5">• Manipulación mediante: getElementById, querySelector, addEventListener</text>
      <text x="65" y="160" fill="#047857" fontSize="8.5" fontWeight="bold">El DOM modela el contenido; el BOM modela el software y el navegador.</text>

      <rect x="25" y="188" width="590" height="18" rx="4" fill={isDark ? "#1f2937" : "#f1f5f9"} />
      <text x="320" y="200" fill={subtextColor} fontSize="9" textAnchor="middle">En entornos no navegadores como Node.js no existe BOM ni window nativo.</text>
    </svg>
  );
  },

  "browser-web-workers-threading": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* Main Thread */}
      <rect x="30" y="30" width="240" height="145" rx="8" fill={isDark ? "#1e1b4b" : "#ede9fe"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="150" y="50" fill="#818cf8" fontWeight="bold" fontSize="11" textAnchor="middle">Hilo Principal (Main UI Thread)</text>
      <rect x="45" y="60" width="210" height="26" rx="4" fill={isDark ? "#312e81" : "#c7d2fe"} />
      <text x="150" y="77" fill="#4338ca" fontSize="8.5" fontWeight="bold" textAnchor="middle">UI, Render Loop &amp; Eventos (60 FPS)</text>
      <text x="45" y="105" fill={textColor} fontSize="8">• Acceso directo al DOM y window</text>
      <text x="45" y="120" fill={textColor} fontSize="8">• Atiende clicks y animaciones</text>
      <text x="45" y="138" fill="#ef4444" fontSize="8" fontWeight="bold">⚠️ Cálculos pesados congelan la UI</text>

      {/* postMessage Bridge */}
      <path d="M275 85 L365 85" stroke="#10b981" strokeWidth="2" strokeDasharray="4 4" />
      <polygon points="368,85 361,81 361,89" fill="#10b981" />
      <text x="320" y="78" fill="#10b981" fontSize="7.5" fontWeight="bold" textAnchor="middle">postMessage</text>

      <path d="M365 115 L275 115" stroke="#0ea5e9" strokeWidth="2" strokeDasharray="4 4" />
      <polygon points="272,115 279,111 279,119" fill="#0ea5e9" />
      <text x="320" y="128" fill="#0ea5e9" fontSize="7.5" fontWeight="bold" textAnchor="middle">onmessage</text>

      {/* Worker Thread */}
      <rect x="370" y="30" width="240" height="145" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="490" y="50" fill="#34d399" fontWeight="bold" fontSize="11" textAnchor="middle">Web Worker (Hilo de Fondo)</text>
      <rect x="385" y="60" width="210" height="26" rx="4" fill={isDark ? "#065f46" : "#a7f3d0"} />
      <text x="490" y="77" fill="#047857" fontSize="8.5" fontWeight="bold" textAnchor="middle">Cálculo Intensivo de CPU</text>
      <text x="385" y="105" fill={textColor} fontSize="8">• Parsing de archivos masivos, crypto</text>
      <text x="385" y="120" fill={textColor} fontSize="8">• Cero acceso al DOM o window</text>
      <text x="385" y="138" fill="#10b981" fontSize="8" fontWeight="bold">✅ La pantalla nunca sufre lag ni caídas de FPS</text>

      <rect x="25" y="188" width="590" height="18" rx="4" fill={isDark ? "#1f2937" : "#f1f5f9"} />
      <text x="320" y="200" fill={subtextColor} fontSize="9" textAnchor="middle">Paso de datos por copia con el algoritmo Structured Clone, o con zero-copy mediante Transferable Objects.</text>
    </svg>
  );
  },

  "browser-same-origin-policy": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* Origin Definition Banner */}
      <rect x="30" y="25" width="580" height="36" rx="6" fill={isDark ? "#1e1b4b" : "#ede9fe"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="45" y="47" fill="#818cf8" fontWeight="bold" fontSize="10.5">Mismo Origen = Protocolo (https) + Host (api.site.com) + Puerto (443)</text>

      {/* Test Matrix */}
      <rect x="30" y="68" width="580" height="112" rx="6" fill={isDark ? "#1f2937" : "#f8fafc"} stroke={border} strokeWidth="1" />
      {/* Row 1 */}
      <rect x="40" y="75" width="22" height="20" rx="3" fill="#10b981" />
      <text x="51" y="89" fill="#fff" fontSize="9" fontWeight="bold" textAnchor="middle">✓</text>
      <text x="75" y="89" fill={textColor} fontSize="8.5" fontFamily="monospace">https://api.site.com:443/v2/users</text>
      <text x="430" y="89" fill="#10b981" fontSize="8" fontWeight="bold">MISMO ORIGEN (Ruta distinta permitida)</text>

      {/* Row 2 */}
      <rect x="40" y="101" width="22" height="20" rx="3" fill="#ef4444" />
      <text x="51" y="115" fill="#fff" fontSize="9" fontWeight="bold" textAnchor="middle">✗</text>
      <text x="75" y="115" fill={textColor} fontSize="8.5" fontFamily="monospace">http://api.site.com:80</text>
      <text x="430" y="115" fill="#ef4444" fontSize="8" fontWeight="bold">BLOQUEADO (Protocolo http vs https)</text>

      {/* Row 3 */}
      <rect x="40" y="127" width="22" height="20" rx="3" fill="#ef4444" />
      <text x="51" y="141" fill="#fff" fontSize="9" fontWeight="bold" textAnchor="middle">✗</text>
      <text x="75" y="141" fill={textColor} fontSize="8.5" fontFamily="monospace">https://auth.site.com:443</text>
      <text x="430" y="141" fill="#ef4444" fontSize="8" fontWeight="bold">BLOQUEADO (Subdominio auth vs api)</text>

      {/* Row 4 */}
      <rect x="40" y="153" width="22" height="20" rx="3" fill="#ef4444" />
      <text x="51" y="167" fill="#fff" fontSize="9" fontWeight="bold" textAnchor="middle">✗</text>
      <text x="75" y="167" fill={textColor} fontSize="8.5" fontFamily="monospace">https://api.site.com:8080</text>
      <text x="430" y="167" fill="#ef4444" fontSize="8" fontWeight="bold">BLOQUEADO (Puerto 8080 vs 443)</text>

      <rect x="25" y="188" width="590" height="18" rx="4" fill={isDark ? "#1f2937" : "#f1f5f9"} />
      <text x="320" y="200" fill={subtextColor} fontSize="9" textAnchor="middle">SOP protege el acceso a cookies, localStorage, IndexedDB y lectura de respuestas en fetch/XHR.</text>
    </svg>
  );
  },

  "browser-storage-comparison": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* 4 Cards */}
      {/* 1. localStorage */}
      <rect x="25" y="30" width="135" height="150" rx="6" fill={isDark ? "#1e1b4b" : "#ede9fe"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="92" y="50" fill="#818cf8" fontWeight="bold" fontSize="10.5" textAnchor="middle">localStorage</text>
      <text x="35" y="72" fill={textColor} fontSize="8">• Capacidad: ~5MB</text>
      <text x="35" y="88" fill={textColor} fontSize="8">• Vida: Persistente</text>
      <text x="35" y="104" fill={textColor} fontSize="8">• Scope: Origen</text>
      <text x="35" y="120" fill={textColor} fontSize="8">• Acceso: Solo JS</text>
      <text x="35" y="136" fill={textColor} fontSize="8">• En red: No viaja</text>
      <text x="35" y="160" fill="#818cf8" fontSize="8" fontWeight="bold">Preferencias UI</text>

      {/* 2. sessionStorage */}
      <rect x="175" y="30" width="135" height="150" rx="6" fill={isDark ? "#451a03" : "#ffedd5"} stroke="#f97316" strokeWidth="1.5" />
      <text x="242" y="50" fill="#fb923c" fontWeight="bold" fontSize="10.5" textAnchor="middle">sessionStorage</text>
      <text x="185" y="72" fill={textColor} fontSize="8">• Capacidad: ~5MB</text>
      <text x="185" y="88" fill={textColor} fontSize="8">• Vida: Por pestaña</text>
      <text x="185" y="104" fill={textColor} fontSize="8">• Scope: Pestaña actual</text>
      <text x="185" y="120" fill={textColor} fontSize="8">• Acceso: Solo JS</text>
      <text x="185" y="136" fill={textColor} fontSize="8">• En red: No viaja</text>
      <text x="185" y="160" fill="#f97316" fontSize="8" fontWeight="bold">Wizards multi-paso</text>

      {/* 3. Cookies */}
      <rect x="325" y="30" width="135" height="150" rx="6" fill={isDark ? "#450a0a" : "#fee2e2"} stroke="#ef4444" strokeWidth="1.5" />
      <text x="392" y="50" fill="#f87171" fontWeight="bold" fontSize="10.5" textAnchor="middle">Cookies</text>
      <text x="335" y="72" fill={textColor} fontSize="8">• Capacidad: ~4KB</text>
      <text x="335" y="88" fill={textColor} fontSize="8">• Vida: Con Expires</text>
      <text x="335" y="104" fill={textColor} fontSize="8">• Scope: Dominio/Ruta</text>
      <text x="335" y="120" fill={textColor} fontSize="8">• Acceso: JS / HttpOnly</text>
      <text x="335" y="136" fill={textColor} fontSize="8">• En red: Automático</text>
      <text x="335" y="160" fill="#ef4444" fontSize="8" fontWeight="bold">Autenticación HTTP</text>

      {/* 4. IndexedDB */}
      <rect x="475" y="30" width="140" height="150" rx="6" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="545" y="50" fill="#34d399" fontWeight="bold" fontSize="10.5" textAnchor="middle">IndexedDB</text>
      <text x="485" y="72" fill={textColor} fontSize="8">• Capacidad: &gt;500MB</text>
      <text x="485" y="88" fill={textColor} fontSize="8">• Vida: Persistente</text>
      <text x="485" y="104" fill={textColor} fontSize="8">• Scope: Origen</text>
      <text x="485" y="120" fill={textColor} fontSize="8">• Acceso: Asíncrono JS</text>
      <text x="485" y="136" fill={textColor} fontSize="8">• En red: No viaja</text>
      <text x="485" y="160" fill="#10b981" fontSize="8" fontWeight="bold">BBDD NoSQL Offline</text>

      <rect x="25" y="188" width="590" height="18" rx="4" fill={isDark ? "#1f2937" : "#f1f5f9"} />
      <text x="320" y="200" fill={subtextColor} fontSize="9" textAnchor="middle">Nunca almacenes secretos de sesión ni JWTs sensibles en localStorage por riesgo de robo mediante ataques XSS.</text>
    </svg>
  );
  },

  "browser-render-tree-construction": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* DOM Subtree */}
      <rect x="30" y="30" width="160" height="150" rx="8" fill={isDark ? "#1e1b4b" : "#ede9fe"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="110" y="50" fill="#818cf8" fontWeight="bold" fontSize="11" textAnchor="middle">Árbol DOM</text>
      <rect x="40" y="60" width="140" height="22" rx="4" fill={isDark ? "#312e81" : "#c7d2fe"} />
      <text x="50" y="75" fill="#4338ca" fontSize="8.5" fontFamily="monospace">&lt;body&gt;</text>
      <rect x="40" y="86" width="140" height="22" rx="4" fill={isDark ? "#312e81" : "#c7d2fe"} />
      <text x="50" y="101" fill="#4338ca" fontSize="8.5" fontFamily="monospace">&lt;h1&gt; Título</text>
      <rect x="40" y="112" width="140" height="22" rx="4" fill={isDark ? "#450a0a" : "#fee2e2"} stroke="#ef4444" strokeWidth="1" />
      <text x="50" y="127" fill="#ef4444" fontSize="8" fontFamily="monospace">&lt;p display:none&gt;</text>
      <rect x="40" y="138" width="140" height="22" rx="4" fill={isDark ? "#450a0a" : "#fee2e2"} stroke="#ef4444" strokeWidth="1" />
      <text x="50" y="153" fill="#ef4444" fontSize="8" fontFamily="monospace">&lt;head&gt; / &lt;script&gt;</text>
      <text x="110" y="172" fill="#ef4444" fontSize="7.5" textAnchor="middle">✕ Descartados del render</text>

      {/* Merge Icon */}
      <path d="M200 105 L235 105" stroke="#6366f1" strokeWidth="2" />
      <polygon points="238,105 231,101 231,109" fill="#6366f1" />

      {/* CSSOM */}
      <rect x="240" y="30" width="140" height="150" rx="8" fill={isDark ? "#0c4a6e" : "#e0f2fe"} stroke="#0ea5e9" strokeWidth="1.5" />
      <text x="310" y="50" fill="#0284c7" fontWeight="bold" fontSize="11" textAnchor="middle">CSSOM Computado</text>
      <rect x="250" y="60" width="120" height="30" rx="4" fill={isDark ? "#075985" : "#bae6fd"} />
      <text x="310" y="78" fill="#0369a1" fontSize="8" fontFamily="monospace" textAnchor="middle">h1 &#123; color: #6366f1; &#125;</text>
      <rect x="250" y="96" width="120" height="30" rx="4" fill={isDark ? "#075985" : "#bae6fd"} />
      <text x="310" y="114" fill="#0369a1" fontSize="8" fontFamily="monospace" textAnchor="middle">body &#123; margin: 0; &#125;</text>
      <text x="310" y="145" fill={textColor} fontSize="8" textAnchor="middle">Estilos calculados</text>
      <text x="310" y="160" fill={textColor} fontSize="8" textAnchor="middle">por cada selector</text>

      {/* Merge to Render Tree */}
      <path d="M390 105 L425 105" stroke="#10b981" strokeWidth="2" />
      <polygon points="428,105 421,101 421,109" fill="#10b981" />

      {/* Render Tree Final */}
      <rect x="430" y="30" width="180" height="150" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="2" />
      <text x="520" y="50" fill="#047857" fontWeight="bold" fontSize="11" textAnchor="middle">Render Tree (Visible)</text>
      <rect x="440" y="65" width="160" height="32" rx="4" fill={isDark ? "#065f46" : "#a7f3d0"} />
      <text x="450" y="85" fill="#064e3b" fontSize="8.5" fontWeight="bold">RenderObject: &lt;body&gt;</text>
      <rect x="440" y="103" width="160" height="32" rx="4" fill={isDark ? "#065f46" : "#a7f3d0"} />
      <text x="450" y="123" fill="#064e3b" fontSize="8.5" fontWeight="bold">RenderObject: &lt;h1&gt; (&quot;Título&quot;)</text>
      <text x="520" y="152" fill={textColor} fontSize="8" textAnchor="middle">Solo nodos visibles con estilos</text>
      <text x="520" y="168" fill="#047857" fontSize="8.5" fontWeight="bold" textAnchor="middle">➔ Pasa directo a Layout</text>

      <rect x="25" y="188" width="590" height="18" rx="4" fill={isDark ? "#1f2937" : "#f1f5f9"} />
      <text x="320" y="200" fill={subtextColor} fontSize="9" textAnchor="middle">display: none queda fuera del Render Tree; visibility: hidden sí entra al Render Tree pero es transparente.</text>
    </svg>
  );
  },

  "browser-reflow-repaint-cycle": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* Reflow Box */}
      <rect x="30" y="28" width="270" height="85" rx="8" fill={isDark ? "#450a0a" : "#fee2e2"} stroke="#ef4444" strokeWidth="1.5" />
      <text x="165" y="48" fill="#ef4444" fontWeight="bold" fontSize="11" textAnchor="middle">🔴 Reflow (Layout - Costoso)</text>
      <text x="40" y="66" fill={textColor} fontSize="8">• Disparadores: width, height, margin, fontSize</text>
      <text x="40" y="80" fill={textColor} fontSize="8">• Lecturas sincrónicas: offsetWidth, clientHeight, getBoundingClientRect()</text>
      <text x="40" y="98" fill="#b91c1c" fontSize="8" fontWeight="bold">Recalcula geometría del documento</text>

      {/* Repaint Box */}
      <rect x="340" y="28" width="270" height="85" rx="8" fill={isDark ? "#451a03" : "#fef3c7"} stroke="#f59e0b" strokeWidth="1.5" />
      <text x="475" y="48" fill="#d97706" fontWeight="bold" fontSize="11" textAnchor="middle">🟠 Repaint (Paint - Medio)</text>
      <text x="350" y="66" fill={textColor} fontSize="8">• Disparadores: color, background-color, border-style, outline</text>
      <text x="350" y="80" fill={textColor} fontSize="8">• No altera geometría, pero redibuja píxeles</text>
      <text x="350" y="98" fill="#b45309" fontSize="8" fontWeight="bold">Salta el cálculo de layout en CPU</text>

      {/* Layout Thrashing Warning Banner */}
      <rect x="30" y="122" width="580" height="58" rx="6" fill={isDark ? "#1f1d1d" : "#fef2f2"} stroke="#ef4444" strokeWidth="1" strokeDasharray="3 3" />
      <text x="45" y="140" fill="#ef4444" fontWeight="bold" fontSize="9.5">⚠️ Layout Thrashing (Lectura y Escritura intercalada en bucle):</text>
      <text x="45" y="156" fill={textColor} fontSize="8.5" fontFamily="monospace">element.style.width = el.offsetWidth + 10 + &apos;px&apos;; // ¡Fuerza reflow síncrono en cada iteración!</text>
      <text x="45" y="170" fill="#10b981" fontSize="8" fontWeight="bold">Solución: Batching de lecturas primero (DOM read), y escrituras en requestAnimationFrame.</text>

      <rect x="25" y="188" width="590" height="18" rx="4" fill={isDark ? "#1f2937" : "#f1f5f9"} />
      <text x="320" y="200" fill={subtextColor} fontSize="9" textAnchor="middle">Promover capas con will-change: transform permite delegar el movimiento al Compositor sin Reflow ni Repaint.</text>
    </svg>
  );
  },

  "browser-service-worker-lifecycle": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* Step 1: Register */}
      <rect x="30" y="35" width="120" height="140" rx="8" fill={isDark ? "#1e1b4b" : "#ede9fe"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="90" y="55" fill="#818cf8" fontWeight="bold" fontSize="10.5" textAnchor="middle">1. Register</text>
      <text x="40" y="75" fill={textColor} fontSize="8">• Registro en app:</text>
      <text x="40" y="90" fill="#6366f1" fontSize="7.5" fontFamily="monospace">sw.register(&apos;/sw.js&apos;)</text>
      <text x="40" y="115" fill={textColor} fontSize="8">• Alcance (Scope):</text>
      <text x="40" y="130" fill={subtextColor} fontSize="8">Ruta del archivo</text>
      <text x="90" y="160" fill="#818cf8" fontSize="8" fontWeight="bold" textAnchor="middle">Inicia descarga</text>

      {/* Arrow 1 */}
      <path d="M155 105 L180 105" stroke="#6366f1" strokeWidth="1.5" />
      <polygon points="183,105 176,101 176,109" fill="#6366f1" />

      {/* Step 2: Install */}
      <rect x="185" y="35" width="125" height="140" rx="8" fill={isDark ? "#451a03" : "#ffedd5"} stroke="#f97316" strokeWidth="1.5" />
      <text x="247" y="55" fill="#fb923c" fontWeight="bold" fontSize="10.5" textAnchor="middle">2. Installing</text>
      <text x="195" y="75" fill={textColor} fontSize="8">• Evento &apos;install&apos;</text>
      <text x="195" y="90" fill="#ea580c" fontSize="7.5" fontFamily="monospace">event.waitUntil()</text>
      <text x="195" y="115" fill={textColor} fontSize="8">• Precacheo de App Shell</text>
      <text x="195" y="130" fill={subtextColor} fontSize="8">(HTML, CSS, JS clave)</text>
      <text x="247" y="160" fill="#ea580c" fontSize="8" fontWeight="bold" textAnchor="middle">Precacheo Offline</text>

      {/* Arrow 2 */}
      <path d="M315 105 L340 105" stroke="#f97316" strokeWidth="1.5" />
      <polygon points="343,105 336,101 336,109" fill="#f97316" />

      {/* Step 3: Activate */}
      <rect x="345" y="35" width="125" height="140" rx="8" fill={isDark ? "#0c4a6e" : "#e0f2fe"} stroke="#0ea5e9" strokeWidth="1.5" />
      <text x="407" y="55" fill="#0284c7" fontWeight="bold" fontSize="10.5" textAnchor="middle">3. Activating</text>
      <text x="355" y="75" fill={textColor} fontSize="8">• Evento &apos;activate&apos;</text>
      <text x="355" y="90" fill="#0369a1" fontSize="7.5" fontFamily="monospace">clients.claim()</text>
      <text x="355" y="115" fill={textColor} fontSize="8">• Limpieza de cachés</text>
      <text x="355" y="130" fill={subtextColor} fontSize="8">antiguas obsoletas</text>
      <text x="407" y="160" fill="#0284c7" fontSize="8" fontWeight="bold" textAnchor="middle">Toma el control</text>

      {/* Arrow 3 */}
      <path d="M475 105 L500 105" stroke="#0ea5e9" strokeWidth="1.5" />
      <polygon points="503,105 496,101 496,109" fill="#0ea5e9" />

      {/* Step 4: Active / Idle Fetch */}
      <rect x="505" y="35" width="110" height="140" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="560" y="55" fill="#047857" fontWeight="bold" fontSize="10.5" textAnchor="middle">4. Active</text>
      <text x="515" y="75" fill={textColor} fontSize="8">• Evento &apos;fetch&apos;</text>
      <text x="515" y="90" fill="#047857" fontSize="7.5" fontFamily="monospace">respondWith()</text>
      <text x="515" y="115" fill={textColor} fontSize="8">• Proxy de red</text>
      <text x="515" y="130" fill={subtextColor} fontSize="8">• Push &amp; Sync</text>
      <text x="560" y="160" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">Offline-First</text>

      <rect x="25" y="188" width="590" height="18" rx="4" fill={isDark ? "#1f2937" : "#f1f5f9"} />
      <text x="320" y="200" fill={subtextColor} fontSize="9" textAnchor="middle">Un Service Worker nuevo espera a que todas las pestañas de la versión anterior se cierren antes de activarse.</text>
    </svg>
  );
  },

  "browser-resource-hints-priority": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* 1. Preload */}
      <rect x="25" y="30" width="135" height="150" rx="8" fill={isDark ? "#450a0a" : "#fee2e2"} stroke="#ef4444" strokeWidth="1.5" />
      <text x="92" y="50" fill="#ef4444" fontWeight="bold" fontSize="10.5" textAnchor="middle">rel=&quot;preload&quot;</text>
      <rect x="35" y="60" width="115" height="24" rx="4" fill={isDark ? "#7f1d1d" : "#fecaca"} />
      <text x="92" y="76" fill="#fff" fontSize="8" fontWeight="bold" textAnchor="middle">Alta Prioridad (High)</text>
      <text x="35" y="105" fill={textColor} fontSize="8">• Para la página ACTUAL</text>
      <text x="35" y="120" fill={textColor} fontSize="8">• Fuentes WOFF2, héroe LCP</text>
      <text x="35" y="135" fill={textColor} fontSize="8">• Descarga obligatoria inmediata</text>
      <text x="92" y="165" fill="#ef4444" fontSize="8" fontWeight="bold" textAnchor="middle">Elimina cuellos de botella</text>

      {/* 2. Preconnect */}
      <rect x="175" y="30" width="135" height="150" rx="8" fill={isDark ? "#451a03" : "#ffedd5"} stroke="#f97316" strokeWidth="1.5" />
      <text x="242" y="50" fill="#ea580c" fontWeight="bold" fontSize="10.5" textAnchor="middle">rel=&quot;preconnect&quot;</text>
      <rect x="185" y="60" width="115" height="24" rx="4" fill={isDark ? "#7c2d12" : "#fed7aa"} />
      <text x="242" y="76" fill="#fff" fontSize="8" fontWeight="bold" textAnchor="middle">Handshake Anticipado</text>
      <text x="185" y="105" fill={textColor} fontSize="8">• DNS Lookup + TCP + TLS</text>
      <text x="185" y="120" fill={textColor} fontSize="8">• Para CDNs de terceros</text>
      <text x="185" y="135" fill={textColor} fontSize="8">• Ahorra 100-300ms de latencia</text>
      <text x="242" y="165" fill="#ea580c" fontSize="8" fontWeight="bold" textAnchor="middle">Conexión en caliente</text>

      {/* 3. Prefetch */}
      <rect x="325" y="30" width="135" height="150" rx="8" fill={isDark ? "#0c4a6e" : "#e0f2fe"} stroke="#0ea5e9" strokeWidth="1.5" />
      <text x="392" y="50" fill="#0284c7" fontWeight="bold" fontSize="10.5" textAnchor="middle">rel=&quot;prefetch&quot;</text>
      <rect x="335" y="60" width="115" height="24" rx="4" fill={isDark ? "#075985" : "#bae6fd"} />
      <text x="392" y="76" fill="#fff" fontSize="8" fontWeight="bold" textAnchor="middle">Baja Prioridad (Idle)</text>
      <text x="335" y="105" fill={textColor} fontSize="8">• Para la PRÓXIMA página</text>
      <text x="335" y="120" fill={textColor} fontSize="8">• Carga en tiempo ocioso</text>
      <text x="335" y="135" fill={textColor} fontSize="8">• Queda en el HTTP cache</text>
      <text x="392" y="165" fill="#0284c7" fontSize="8" fontWeight="bold" textAnchor="middle">Navegación instantánea</text>

      {/* 4. dns-prefetch */}
      <rect x="475" y="30" width="140" height="150" rx="8" fill={isDark ? "#1e1b4b" : "#ede9fe"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="545" y="50" fill="#818cf8" fontWeight="bold" fontSize="10.5" textAnchor="middle">dns-prefetch</text>
      <rect x="485" y="60" width="120" height="24" rx="4" fill={isDark ? "#312e81" : "#c7d2fe"} />
      <text x="545" y="76" fill="#fff" fontSize="8" fontWeight="bold" textAnchor="middle">Solo Resolución IP</text>
      <text x="485" y="105" fill={textColor} fontSize="8">• Solo resuelve dominio IP</text>
      <text x="485" y="120" fill={textColor} fontSize="8">• Muy ligero en memoria</text>
      <text x="485" y="135" fill={textColor} fontSize="8">• Para orígenes opcionales</text>
      <text x="545" y="165" fill="#6366f1" fontSize="8" fontWeight="bold" textAnchor="middle">Fallback liviano</text>

      <rect x="25" y="188" width="590" height="18" rx="4" fill={isDark ? "#1f2937" : "#f1f5f9"} />
      <text x="320" y="200" fill={subtextColor} fontSize="9" textAnchor="middle">No abuses de rel=&quot;preload&quot;: preload innecesario satura el ancho de banda y degrada el First Contentful Paint.</text>
    </svg>
  );
  },

  "browser-debounce-vs-throttle": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* Raw Events Timeline */}
      <text x="30" y="45" fill={textColor} fontSize="9" fontWeight="bold">Eventos crudos del usuario (scroll/input):</text>
      <line x1="280" y1="42" x2="600" y2="42" stroke="#64748b" strokeWidth="2" />
      <circle cx="300" cy="42" r="4" fill="#ef4444" />
      <circle cx="320" cy="42" r="4" fill="#ef4444" />
      <circle cx="340" cy="42" r="4" fill="#ef4444" />
      <circle cx="360" cy="42" r="4" fill="#ef4444" />
      <circle cx="380" cy="42" r="4" fill="#ef4444" />
      <circle cx="450" cy="42" r="4" fill="#ef4444" />
      <circle cx="470" cy="42" r="4" fill="#ef4444" />
      <circle cx="490" cy="42" r="4" fill="#ef4444" />

      {/* Throttle Timeline */}
      <text x="30" y="95" fill="#f59e0b" fontSize="9.5" fontWeight="bold">Throttle (Límite de tasa - ej. cada 200ms):</text>
      <line x1="280" y1="92" x2="600" y2="92" stroke="#f59e0b" strokeWidth="2" />
      <rect x="295" y="82" width="12" height="20" rx="3" fill="#f59e0b" />
      <rect x="375" y="82" width="12" height="20" rx="3" fill="#f59e0b" />
      <rect x="465" y="82" width="12" height="20" rx="3" fill="#f59e0b" />
      <text x="30" y="112" fill={subtextColor} fontSize="8">Ejecuta como MÁXIMO una vez en cada intervalo regular (scroll, resize, drag).</text>

      {/* Debounce Timeline */}
      <text x="30" y="145" fill="#10b981" fontSize="9.5" fontWeight="bold">Debounce (Espera silencio - ej. 300ms de calma):</text>
      <line x1="280" y1="142" x2="600" y2="142" stroke="#10b981" strokeWidth="2" />
      <rect x="420" y="132" width="12" height="20" rx="3" fill="#10b981" />
      <rect x="540" y="132" width="12" height="20" rx="3" fill="#10b981" />
      <text x="30" y="162" fill={subtextColor} fontSize="8">Ejecuta ÚNICAMENTE cuando el usuario se detiene y deja de emitir eventos (autocompletado, búsqueda).</text>

      <rect x="25" y="188" width="590" height="18" rx="4" fill={isDark ? "#1f2937" : "#f1f5f9"} />
      <text x="320" y="200" fill={subtextColor} fontSize="9" textAnchor="middle">Regla mnemotécnica: Búsqueda con sugerencias ➔ Debounce; Animación o cálculo de scroll ➔ Throttle.</text>
    </svg>
  );
  },

  "browser-indexeddb-architecture": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* Database Root */}
      <rect x="30" y="30" width="160" height="145" rx="8" fill={isDark ? "#1e1b4b" : "#ede9fe"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="110" y="52" fill="#818cf8" fontWeight="bold" fontSize="11" textAnchor="middle">IDBDatabase</text>
      <rect x="40" y="65" width="140" height="26" rx="4" fill={isDark ? "#312e81" : "#c7d2fe"} />
      <text x="110" y="82" fill="#4338ca" fontSize="9" fontFamily="monospace" textAnchor="middle">idb.open(&apos;AppDB&apos;, 1)</text>
      <text x="40" y="112" fill={textColor} fontSize="8">• Base NoSQL transaccional</text>
      <text x="40" y="128" fill={textColor} fontSize="8">• Capacidad: &gt;500MB+ (disco)</text>
      <text x="40" y="144" fill={textColor} fontSize="8">• Asíncrona (Promise-based)</text>
      <text x="110" y="165" fill="#818cf8" fontSize="8" fontWeight="bold" textAnchor="middle">Persistencia Robusta</text>

      {/* Connector */}
      <path d="M190 102 L230 102" stroke="#6366f1" strokeWidth="1.5" />
      <polygon points="233,102 226,98 226,106" fill="#6366f1" />

      {/* Object Store */}
      <rect x="235" y="30" width="190" height="145" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="330" y="52" fill="#047857" fontWeight="bold" fontSize="11" textAnchor="middle">Object Store (&apos;users&apos;)</text>
      <rect x="245" y="65" width="170" height="26" rx="4" fill={isDark ? "#065f46" : "#a7f3d0"} />
      <text x="330" y="82" fill="#064e3b" fontSize="8.5" fontFamily="monospace" textAnchor="middle">keyPath: &apos;id&apos; (autoIncrement)</text>
      <text x="245" y="112" fill={textColor} fontSize="8">• Guarda objetos JS, Blobs, Files</text>
      <text x="245" y="128" fill={textColor} fontSize="8">• createIndex(&apos;email&apos;, &apos;email&apos;)</text>
      <text x="245" y="144" fill={textColor} fontSize="8">• Cursores para iteración rápida</text>
      <text x="330" y="165" fill="#047857" fontSize="8" fontWeight="bold" textAnchor="middle">Estructura Tabular NoSQL</text>

      {/* Connector */}
      <path d="M425 102 L465 102" stroke="#10b981" strokeWidth="1.5" />
      <polygon points="468,102 461,98 461,106" fill="#10b981" />

      {/* Transaction */}
      <rect x="470" y="30" width="145" height="145" rx="8" fill={isDark ? "#0c4a6e" : "#e0f2fe"} stroke="#0ea5e9" strokeWidth="1.5" />
      <text x="542" y="52" fill="#0284c7" fontWeight="bold" fontSize="11" textAnchor="middle">IDBTransaction</text>
      <rect x="480" y="65" width="125" height="26" rx="4" fill={isDark ? "#075985" : "#bae6fd"} />
      <text x="542" y="82" fill="#0369a1" fontSize="8.5" fontFamily="monospace" textAnchor="middle">&apos;readwrite&apos; / &apos;readonly&apos;</text>
      <text x="480" y="112" fill={textColor} fontSize="8">• Transacciones ACID</text>
      <text x="480" y="128" fill={textColor} fontSize="8">• Rollback automático en error</text>
      <text x="480" y="144" fill={textColor} fontSize="8">• Cierre automático</text>
      <text x="542" y="165" fill="#0284c7" fontSize="8" fontWeight="bold" textAnchor="middle">Garantía de Integridad</text>

      <rect x="25" y="188" width="590" height="18" rx="4" fill={isDark ? "#1f2937" : "#f1f5f9"} />
      <text x="320" y="200" fill={subtextColor} fontSize="9" textAnchor="middle">Para evitar la compleja API de callbacks nativa, se recomienda usar wrappers modernos como &apos;idb&apos; de Jake Archibald.</text>
    </svg>
  );
  },

  "browser-headless-cdp-architecture": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* Node Controller */}
      <rect x="30" y="30" width="170" height="145" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="115" y="52" fill="#047857" fontWeight="bold" fontSize="11" textAnchor="middle">Controlador (Node.js)</text>
      <rect x="40" y="65" width="150" height="26" rx="4" fill={isDark ? "#065f46" : "#a7f3d0"} />
      <text x="115" y="82" fill="#064e3b" fontSize="8.5" fontWeight="bold" textAnchor="middle">Playwright / Puppeteer</text>
      <text x="40" y="112" fill={textColor} fontSize="8">• Tests E2E automatizados</text>
      <text x="40" y="128" fill={textColor} fontSize="8">• Scraping con ejecución JS</text>
      <text x="40" y="144" fill={textColor} fontSize="8">• Pre-rendering SSR para SEO</text>
      <text x="115" y="165" fill="#047857" fontSize="8" fontWeight="bold" textAnchor="middle">Scripts de CI/CD</text>

      {/* CDP Bridge */}
      <path d="M200 90 L260 90" stroke="#6366f1" strokeWidth="2" strokeDasharray="3 3" />
      <polygon points="263,90 256,86 256,94" fill="#6366f1" />
      <text x="230" y="82" fill="#818cf8" fontSize="8" fontWeight="bold" textAnchor="middle">CDP Protocol</text>

      <path d="M260 115 L200 115" stroke="#6366f1" strokeWidth="2" strokeDasharray="3 3" />
      <polygon points="197,115 204,111 204,119" fill="#6366f1" />
      <text x="230" y="130" fill="#818cf8" fontSize="7.5" textAnchor="middle">WebSocket</text>

      {/* Headless Browser Engine */}
      <rect x="265" y="30" width="345" height="145" rx="8" fill={isDark ? "#1e1b4b" : "#ede9fe"} stroke="#6366f1" strokeWidth="2" />
      <text x="437" y="52" fill="#818cf8" fontWeight="bold" fontSize="11" textAnchor="middle">Navegador Headless (Chromium / WebKit)</text>
      <rect x="280" y="65" width="315" height="30" rx="4" fill={isDark ? "#312e81" : "#c7d2fe"} />
      <text x="437" y="84" fill="#4338ca" fontSize="9" fontWeight="bold" textAnchor="middle">Motor Completo Blink + V8 (Sin interfaz gráfica / Sin GUI)</text>
      <text x="285" y="115" fill={textColor} fontSize="8.5">• Descarga y evalúa HTML, CSS, JavaScript y fuentes de forma idéntica al browser real</text>
      <text x="285" y="132" fill={textColor} fontSize="8.5">• Emula dispositivos móviles, geolocalización, red lenta y permisos</text>
      <text x="437" y="162" fill="#10b981" fontSize="8.5" fontWeight="bold" textAnchor="middle">Salidas: Capturas PNG, PDFs vectoriales y trazas de rendimiento</text>

      <rect x="25" y="188" width="590" height="18" rx="4" fill={isDark ? "#1f2937" : "#f1f5f9"} />
      <text x="320" y="200" fill={subtextColor} fontSize="9" textAnchor="middle">Chrome DevTools Protocol (CDP) permite inspeccionar la red, el DOM y capturar console logs vía WebSockets.</text>
    </svg>
  );
  },

  "browser-compression-streams": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* Input Stream */}
      <rect x="30" y="30" width="160" height="145" rx="8" fill={isDark ? "#1e1b4b" : "#ede9fe"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="110" y="52" fill="#818cf8" fontWeight="bold" fontSize="10.5" textAnchor="middle">ReadableStream (Input)</text>
      <rect x="40" y="65" width="140" height="26" rx="4" fill={isDark ? "#312e81" : "#c7d2fe"} />
      <text x="110" y="82" fill="#4338ca" fontSize="8.5" fontFamily="monospace" textAnchor="middle">Datos crudos (10MB JSON)</text>
      <text x="40" y="110" fill={textColor} fontSize="8">• Flujo continuo de Chunks</text>
      <text x="40" y="125" fill={textColor} fontSize="8">• Sin saturar la memoria RAM</text>
      <text x="40" y="140" fill={textColor} fontSize="8">• Backpressure nativo</text>
      <text x="110" y="165" fill="#818cf8" fontSize="8" fontWeight="bold" textAnchor="middle">Stream de Entrada</text>

      {/* Pipe Arrow */}
      <path d="M190 102 L230 102" stroke="#6366f1" strokeWidth="1.5" />
      <polygon points="233,102 226,98 226,106" fill="#6366f1" />

      {/* Transform Stream */}
      <rect x="235" y="30" width="180" height="145" rx="8" fill={isDark ? "#451a03" : "#ffedd5"} stroke="#f97316" strokeWidth="1.5" />
      <text x="325" y="52" fill="#ea580c" fontWeight="bold" fontSize="10.5" textAnchor="middle">CompressionStream</text>
      <rect x="245" y="65" width="160" height="26" rx="4" fill={isDark ? "#7c2d12" : "#fed7aa"} />
      <text x="325" y="82" fill="#c2410c" fontSize="8.5" fontFamily="monospace" textAnchor="middle">new CompressionStream(&apos;gzip&apos;)</text>
      <text x="245" y="110" fill={textColor} fontSize="8">• Formatos: &apos;gzip&apos; o &apos;deflate&apos;</text>
      <text x="245" y="125" fill={textColor} fontSize="8">• Transformación en tiempo real</text>
      <text x="245" y="140" fill={textColor} fontSize="8">• 100% Nativo en el navegador</text>
      <text x="325" y="165" fill="#ea580c" fontSize="8" fontWeight="bold" textAnchor="middle">Cero librerías externas (pako)</text>

      {/* Pipe Arrow */}
      <path d="M415 102 L455 102" stroke="#f97316" strokeWidth="1.5" />
      <polygon points="458,102 451,98 451,106" fill="#f97316" />

      {/* Output Stream */}
      <rect x="460" y="30" width="150" height="145" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="535" y="52" fill="#047857" fontWeight="bold" fontSize="10.5" textAnchor="middle">WritableStream (Output)</text>
      <rect x="470" y="65" width="130" height="26" rx="4" fill={isDark ? "#065f46" : "#a7f3d0"} />
      <text x="535" y="82" fill="#064e3b" fontSize="8.5" fontFamily="monospace" textAnchor="middle">Payload Gzip (~1.2MB)</text>
      <text x="470" y="110" fill={textColor} fontSize="8">• Reducción drástica de red</text>
      <text x="470" y="125" fill={textColor} fontSize="8">• Envío en fetch POST body</text>
      <text x="470" y="140" fill={textColor} fontSize="8">• Descompresión simétrica</text>
      <text x="535" y="165" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">Ahorro de Ancho de Banda</text>

      <rect x="25" y="188" width="590" height="18" rx="4" fill={isDark ? "#1f2937" : "#f1f5f9"} />
      <text x="320" y="200" fill={subtextColor} fontSize="9" textAnchor="middle">DecompressionStream(&apos;gzip&apos;) realiza el proceso inverso de forma transparente con streaming chunks.</text>
    </svg>
  );
  },

  "browser-scheduler-priorities": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* Title / API */}
      <text x="320" y="32" fill="#818cf8" fontWeight="bold" fontSize="11" textAnchor="middle">Priorización de Tareas con Prioritized Task Scheduling API (scheduler.postTask)</text>

      {/* 3 Priority Lanes */}
      {/* 1. user-blocking */}
      <rect x="30" y="45" width="580" height="40" rx="6" fill={isDark ? "#450a0a" : "#fee2e2"} stroke="#ef4444" strokeWidth="1.5" />
      <text x="45" y="62" fill="#ef4444" fontWeight="bold" fontSize="10">priority: &apos;user-blocking&apos; (Prioridad Máxima)</text>
      <text x="45" y="76" fill={textColor} fontSize="8">Respuesta inmediata a entradas del usuario; se ejecuta antes de pintar el siguiente frame para evitar retrasos de interacción (INP).</text>

      {/* 2. user-visible */}
      <rect x="30" y="92" width="580" height="40" rx="6" fill={isDark ? "#451a03" : "#fef3c7"} stroke="#f59e0b" strokeWidth="1.5" />
      <text x="45" y="109" fill="#d97706" fontWeight="bold" fontSize="10">priority: &apos;user-visible&apos; (Prioridad Media por Defecto)</text>
      <text x="45" y="123" fill={textColor} fontSize="8">Renderizado de componentes visibles en pantalla y procesamiento de resultados de búsqueda que el usuario espera.</text>

      {/* 3. background */}
      <rect x="30" y="139" width="580" height="40" rx="6" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="45" y="156" fill="#047857" fontWeight="bold" fontSize="10">priority: &apos;background&apos; (Prioridad Baja en Tiempo Ocioso)</text>
      <text x="45" y="170" fill={textColor} fontSize="8">Envío de telemetría, analíticas, indexación local y precacheo; nunca compite con la fluidez de la interfaz.</text>

      <rect x="25" y="188" width="590" height="18" rx="4" fill={isDark ? "#1f2937" : "#f1f5f9"} />
      <text x="320" y="200" fill={subtextColor} fontSize="9" textAnchor="middle">Soporta cancelación dinámica pasando un AbortSignal: scheduler.postTask(fn, &#123; signal: controller.signal &#125;).</text>
    </svg>
  );
  },

  "browser-shared-worker-topology": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* Left: Multiple Tabs */}
      <rect x="30" y="30" width="130" height="40" rx="6" fill={isDark ? "#1e1b4b" : "#ede9fe"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="95" y="55" fill="#818cf8" fontWeight="bold" fontSize="9.5" textAnchor="middle">Pestaña 1 (Tab A)</text>

      <rect x="30" y="80" width="130" height="40" rx="6" fill={isDark ? "#1e1b4b" : "#ede9fe"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="95" y="105" fill="#818cf8" fontWeight="bold" fontSize="9.5" textAnchor="middle">Pestaña 2 (Tab B)</text>

      <rect x="30" y="130" width="130" height="40" rx="6" fill={isDark ? "#1e1b4b" : "#ede9fe"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="95" y="155" fill="#818cf8" fontWeight="bold" fontSize="9.5" textAnchor="middle">Pestaña 3 (Tab C)</text>

      {/* Ports Connectors */}
      <path d="M160 50 L250 85" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3 3" />
      <path d="M160 100 L250 100" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3 3" />
      <path d="M160 150 L250 115" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3 3" />
      <text x="205" y="70" fill="#10b981" fontSize="7.5" fontWeight="bold" textAnchor="middle">MessagePort</text>

      {/* Shared Worker Hub */}
      <rect x="250" y="30" width="190" height="140" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="2" />
      <text x="345" y="52" fill="#047857" fontWeight="bold" fontSize="11" textAnchor="middle">Shared Worker Único</text>
      <rect x="260" y="65" width="170" height="30" rx="4" fill={isDark ? "#065f46" : "#a7f3d0"} />
      <text x="345" y="84" fill="#064e3b" fontSize="8.5" fontWeight="bold" textAnchor="middle">new SharedWorker(&apos;hub.js&apos;)</text>
      <text x="260" y="112" fill={textColor} fontSize="8">• Instancia única compartida</text>
      <text x="260" y="126" fill={textColor} fontSize="8">• Sincroniza estado cross-tab</text>
      <text x="345" y="155" fill="#047857" fontSize="8" fontWeight="bold" textAnchor="middle">Gestor Centralizado de Estado</text>

      {/* Connector to Backend */}
      <path d="M440 100 L490 100" stroke="#0ea5e9" strokeWidth="2" />
      <polygon points="493,100 486,96 486,104" fill="#0ea5e9" />

      {/* Server Backend */}
      <rect x="495" y="30" width="115" height="140" rx="8" fill={isDark ? "#0c4a6e" : "#e0f2fe"} stroke="#0ea5e9" strokeWidth="1.5" />
      <text x="552" y="52" fill="#0284c7" fontWeight="bold" fontSize="10.5" textAnchor="middle">Servidor / API</text>
      <rect x="505" y="65" width="95" height="45" rx="4" fill={isDark ? "#075985" : "#bae6fd"} />
      <text x="552" y="85" fill="#0369a1" fontSize="7.5" fontWeight="bold" textAnchor="middle">1 Sola Conexión</text>
      <text x="552" y="98" fill="#0369a1" fontSize="8" fontFamily="monospace" textAnchor="middle">WebSocket</text>
      <text x="552" y="130" fill={textColor} fontSize="7.5" textAnchor="middle">Evita conexiones</text>
      <text x="552" y="142" fill={textColor} fontSize="7.5" textAnchor="middle">duplicadas por tab</text>

      <rect x="25" y="188" width="590" height="18" rx="4" fill={isDark ? "#1f2937" : "#f1f5f9"} />
      <text x="320" y="200" fill={subtextColor} fontSize="9" textAnchor="middle">A diferencia de Dedicated Workers, el SharedWorker persiste mientras al menos una pestaña asociada siga abierta.</text>
    </svg>
  );
  },

  "browser-storage-access-api": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* Main Page Container */}
      <rect x="30" y="28" width="280" height="150" rx="8" fill={isDark ? "#1e1b4b" : "#ede9fe"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="170" y="48" fill="#818cf8" fontWeight="bold" fontSize="10.5" textAnchor="middle">Página Principal (tienda.com)</text>
      {/* Embedded Third-Party iframe */}
      <rect x="45" y="60" width="250" height="105" rx="6" fill={isDark ? "#450a0a" : "#fee2e2"} stroke="#ef4444" strokeWidth="2" strokeDasharray="3 3" />
      <text x="170" y="80" fill="#ef4444" fontWeight="bold" fontSize="9.5" textAnchor="middle">&lt;iframe src=&quot;pagos-sso.com&quot;&gt;</text>
      <rect x="55" y="92" width="230" height="30" rx="4" fill={isDark ? "#7f1d1d" : "#fecaca"} />
      <text x="170" y="110" fill="#fff" fontSize="8" textAnchor="middle">🚫 Third-Party Cookies Bloqueadas por Default</text>
      <text x="170" y="145" fill="#ef4444" fontSize="7.5" fontWeight="bold" textAnchor="middle">Safari ITP / Chrome Privacy Sandbox</text>

      {/* Interaction Arrow */}
      <path d="M315 102 L355 102" stroke="#10b981" strokeWidth="2" />
      <polygon points="358,102 351,98 351,106" fill="#10b981" />
      <text x="335" y="92" fill="#10b981" fontSize="7.5" fontWeight="bold" textAnchor="middle">User Click</text>

      {/* Storage Access API Resolution */}
      <rect x="360" y="28" width="250" height="150" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="485" y="48" fill="#047857" fontWeight="bold" fontSize="10.5" textAnchor="middle">Storage Access API</text>
      <rect x="370" y="60" width="230" height="52" rx="4" fill={isDark ? "#09090b" : "#ffffff"} stroke="#a7f3d0" strokeWidth="1" />
      <text x="380" y="76" fill="#818cf8" fontSize="8" fontFamily="monospace">await document.hasStorageAccess();</text>
      <text x="380" y="94" fill="#10b981" fontSize="8" fontFamily="monospace">await document.requestStorageAccess();</text>
      <text x="370" y="128" fill={textColor} fontSize="8">• Requiere gesto del usuario (User Gesture)</text>
      <text x="370" y="142" fill={textColor} fontSize="8">• Desbloquea cookies de 1ª parte para el iframe</text>
      <text x="485" y="165" fill="#047857" fontSize="8.5" fontWeight="bold" textAnchor="middle">✅ Autenticación y Pagos Seguros</text>

      <rect x="25" y="188" width="590" height="18" rx="4" fill={isDark ? "#1f2937" : "#f1f5f9"} />
      <text x="320" y="200" fill={subtextColor} fontSize="9" textAnchor="middle">Esencial para mantener widgets de autenticación federada en la era post-cookies de terceros.</text>
    </svg>
  );
  },

  "browser-broadcast-channel": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Same-Origin Boundary Header */}
      <rect x="25" y="20" width="590" height="22" rx="4" fill={isDark ? "#1e1b4b" : "#ede9fe"} stroke="#6366f1" strokeWidth="1" />
      <text x="320" y="35" fill="#818cf8" fontSize="10" fontWeight="bold" textAnchor="middle">
        Límite de Seguridad: Mismo Origen (Same-Origin: https://mi-app.com)
      </text>

      {/* Sender: Tab 1 */}
      <rect x="25" y="52" width="160" height="125" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#38bdf8" strokeWidth="1.5" />
      <text x="105" y="70" fill="#0284c7" fontWeight="bold" fontSize="10.5" textAnchor="middle">Pestaña 1 (Emisor)</text>
      <rect x="35" y="78" width="140" height="22" rx="4" fill={isDark ? "#0f172a" : "#e0f2fe"} />
      <text x="105" y="93" fill="#0369a1" fontSize="7.5" fontFamily="monospace" textAnchor="middle">bc.postMessage(&apos;LOGOUT&apos;)</text>
      <text x="35" y="118" fill={textColor} fontSize="8">• Despacha el mensaje</text>
      <text x="35" y="132" fill={textColor} fontSize="8">• En memoria (sin disco)</text>
      <rect x="35" y="142" width="140" height="22" rx="4" fill={isDark ? "#450a0a" : "#fee2e2"} />
      <text x="105" y="156" fill="#dc2626" fontSize="7.5" fontWeight="bold" textAnchor="middle">🚫 No recibe su propio evento</text>

      {/* Arrow from Sender to Bus */}
      <path d="M185 110 L235 110" stroke="#38bdf8" strokeWidth="2" />
      <polygon points="238,110 231,106 231,114" fill="#38bdf8" />
      <text x="210" y="103" fill="#0284c7" fontSize="7.5" fontWeight="bold" textAnchor="middle">Emit</text>

      {/* Central Broadcast Channel Bus */}
      <rect x="240" y="52" width="160" height="125" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="2" />
      <text x="320" y="70" fill="#047857" fontWeight="bold" fontSize="10.5" textAnchor="middle">BroadcastChannel</text>
      <rect x="250" y="78" width="140" height="22" rx="4" fill={isDark ? "#065f46" : "#a7f3d0"} />
      <text x="320" y="93" fill="#064e3b" fontSize="8" fontFamily="monospace" fontWeight="bold" textAnchor="middle">new BroadcastChannel(&apos;auth&apos;)</text>
      <text x="252" y="118" fill={textColor} fontSize="8">• Patrón Pub/Sub 1-a-N</text>
      <text x="252" y="132" fill={textColor} fontSize="8">• Algoritmo Structured Clone</text>
      <text x="252" y="146" fill={textColor} fontSize="8">• Latencia ultra baja (0ms)</text>
      <text x="320" y="165" fill="#047857" fontSize="7.5" fontWeight="bold" textAnchor="middle">⚡ Bus Bidireccional</text>

      {/* Arrows from Bus to Receivers */}
      <path d="M400 80 L445 65" stroke="#10b981" strokeWidth="1.5" />
      <polygon points="448,64 440,63 443,70" fill="#10b981" />

      <path d="M400 115 L445 115" stroke="#10b981" strokeWidth="1.5" />
      <polygon points="448,115 441,111 441,119" fill="#10b981" />

      <path d="M400 145 L445 160" stroke="#10b981" strokeWidth="1.5" />
      <polygon points="448,161 443,155 440,162" fill="#10b981" />

      {/* Receivers: Tab 2, Tab 3, Worker/Iframe */}
      <rect x="450" y="50" width="165" height="36" rx="6" fill={isDark ? "#1e1b4b" : "#ede9fe"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="460" y="65" fill="#818cf8" fontWeight="bold" fontSize="8.5">Pestaña 2 (Dashboard)</text>
      <text x="460" y="78" fill="#10b981" fontSize="7.5" fontFamily="monospace">onmessage ➔ Sincroniza estado</text>

      <rect x="450" y="97" width="165" height="36" rx="6" fill={isDark ? "#1e1b4b" : "#ede9fe"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="460" y="112" fill="#818cf8" fontWeight="bold" fontSize="8.5">Pestaña 3 (Perfil)</text>
      <text x="460" y="125" fill="#10b981" fontSize="7.5" fontFamily="monospace">onmessage ➔ Cierra sesión</text>

      <rect x="450" y="144" width="165" height="36" rx="6" fill={isDark ? "#1e1b4b" : "#ede9fe"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="460" y="159" fill="#818cf8" fontWeight="bold" fontSize="8.5">Iframe / Web Worker</text>
      <text x="460" y="172" fill="#10b981" fontSize="7.5" fontFamily="monospace">onmessage ➔ Actualiza token</text>

      {/* Bottom Footer */}
      <rect x="25" y="188" width="590" height="18" rx="4" fill={isDark ? "#1f2937" : "#f1f5f9"} />
      <text x="320" y="200" fill={subtextColor} fontSize="8.5" textAnchor="middle">
        Difusión 1-a-N en memoria entre contextos del mismo origen. Recuerda invocar channel.close() para liberar memoria.
      </text>
    </svg>
  );
  }
};
