import { DiagramRegistry } from "../diagram.types";

/** Diagramas SVG del módulo CSS. */
export const cssDiagrams: DiagramRegistry = {
  "css-box-model": ({ isDark, border }) => {
  return (
    <svg
      viewBox="0 0 640 280"
      className="w-full h-auto max-h-72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="10"
        y="10"
        width="620"
        height="260"
        rx="12"
        fill={isDark ? "#111827" : "#f8fafc"}
        stroke={border}
        strokeWidth="1.5"
      />

      {/* Margin box */}
      <rect
        x="70"
        y="30"
        width="500"
        height="215"
        rx="8"
        fill={isDark ? "#451a03" : "#ffedd5"}
        stroke="#f97316"
        strokeWidth="1.5"
        strokeDasharray="4 4"
      />
      <text x="85" y="52" fill="#f97316" fontWeight="700" fontSize="12">
        MARGIN (Espacio externo entre elementos)
      </text>

      {/* Border box */}
      <rect
        x="110"
        y="65"
        width="420"
        height="150"
        rx="6"
        fill={isDark ? "#713f12" : "#fef08a"}
        stroke="#eab308"
        strokeWidth="2"
      />
      <text x="125" y="85" fill="#ca8a04" fontWeight="700" fontSize="12">
        BORDER (Grosor del borde visual)
      </text>

      {/* Padding box */}
      <rect
        x="150"
        y="98"
        width="340"
        height="90"
        rx="6"
        fill={isDark ? "#14532d" : "#bbf7d0"}
        stroke="#22c55e"
        strokeWidth="1.5"
      />
      <text x="165" y="117" fill="#16a34a" fontWeight="700" fontSize="12">
        PADDING (Espacio interno entre borde y contenido)
      </text>

      {/* Content box */}
      <rect
        x="200"
        y="125"
        width="240"
        height="45"
        rx="4"
        fill={isDark ? "#1e3a8a" : "#bfdbfe"}
        stroke="#3b82f6"
        strokeWidth="1.5"
      />
      <text
        x="320"
        y="152"
        fill="#2563eb"
        fontWeight="800"
        fontSize="12"
        textAnchor="middle"
      >
        CONTENT (width × height)
      </text>
    </svg>
  );
  },

  "css-render-tree-pipeline": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* HTML to DOM */}
      <rect x="25" y="30" width="105" height="60" rx="8" fill={isDark ? "#1e1b4b" : "#e0e7ff"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="77" y="52" fill="#818cf8" fontWeight="700" fontSize="11" textAnchor="middle">HTML Bytes</text>
      <text x="77" y="72" fill={textColor} fontSize="9" textAnchor="middle">Tokenize ➔ DOM</text>

      {/* CSS to CSSOM */}
      <rect x="25" y="120" width="105" height="60" rx="8" fill={isDark ? "#3b0764" : "#f3e8ff"} stroke="#a855f7" strokeWidth="1.5" />
      <text x="77" y="142" fill="#c084fc" fontWeight="700" fontSize="11" textAnchor="middle">CSS Rules</text>
      <text x="77" y="162" fill={textColor} fontSize="9" textAnchor="middle">Parsing ➔ CSSOM</text>

      {/* Merge Arrow to Render Tree */}
      <path d="M130 60 L180 105" stroke="#6366f1" strokeWidth="1.5" />
      <path d="M130 150 L180 105" stroke="#a855f7" strokeWidth="1.5" />

      {/* Render Tree */}
      <rect x="180" y="75" width="115" height="60" rx="8" fill={isDark ? "#0c4a6e" : "#e0f2fe"} stroke="#0ea5e9" strokeWidth="1.5" />
      <text x="237" y="98" fill="#38bdf8" fontWeight="700" fontSize="11" textAnchor="middle">Render Tree</text>
      <text x="237" y="118" fill={textColor} fontSize="9" textAnchor="middle">DOM + Estilos (Visible)</text>

      {/* Arrow to Layout */}
      <path d="M295 105 L330 105" stroke="#0ea5e9" strokeWidth="1.5" strokeDasharray="3 3" />
      <polygon points="333,105 326,101 326,109" fill="#0ea5e9" />

      {/* Layout / Reflow */}
      <rect x="335" y="75" width="110" height="60" rx="8" fill={isDark ? "#451a03" : "#fef3c7"} stroke="#f59e0b" strokeWidth="1.5" />
      <text x="390" y="98" fill="#fbbf24" fontWeight="700" fontSize="11" textAnchor="middle">Layout (Reflow)</text>
      <text x="390" y="118" fill={textColor} fontSize="9" textAnchor="middle">Geometría y Caja</text>

      {/* Arrow to Paint */}
      <path d="M445 105 L475 105" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 3" />
      <polygon points="478,105 471,101 471,109" fill="#f59e0b" />

      {/* Paint & Composite */}
      <rect x="480" y="75" width="135" height="60" rx="8" fill={isDark ? "#064e3b" : "#d1fae5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="547" y="98" fill="#34d399" fontWeight="700" fontSize="11" textAnchor="middle">Paint & Composite</text>
      <text x="547" y="118" fill={textColor} fontSize="9" textAnchor="middle">Pixeles en Pantalla (GPU)</text>

      <rect x="25" y="188" width="590" height="18" rx="4" fill={isDark ? "#1f2937" : "#f1f5f9"} />
      <text x="320" y="200" fill={subtextColor} fontSize="9" textAnchor="middle">Animar &apos;transform&apos; y &apos;opacity&apos; salta Layout y Paint directo a Composite (60 FPS).</text>
    </svg>
  );
  },

  "css-inclusion-methods": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* Inline */}
      <rect x="25" y="30" width="180" height="150" rx="8" fill={isDark ? "#450a0a" : "#fee2e2"} stroke="#ef4444" strokeWidth="1.5" />
      <text x="115" y="52" fill="#f87171" fontWeight="700" fontSize="11" textAnchor="middle">1. Inline Styles</text>
      <rect x="35" y="65" width="160" height="30" rx="4" fill={isDark ? "#7f1d1d" : "#fecaca"} />
      <text x="42" y="83" fill="#fca5a5" fontSize="8" fontFamily="monospace">&lt;p style=&quot;color: red&quot;&gt;</text>
      <text x="42" y="115" fill={textColor} fontSize="9">• Especificidad altísima (1,0,0,0)</text>
      <text x="42" y="132" fill={textColor} fontSize="9">• Cero reutilización ni caché</text>
      <text x="42" y="149" fill="#f87171" fontSize="9" fontWeight="bold">❌ Antipatrón para diseño</text>

      {/* Internal */}
      <rect x="230" y="30" width="180" height="150" rx="8" fill={isDark ? "#451a03" : "#ffedd5"} stroke="#f97316" strokeWidth="1.5" />
      <text x="320" y="52" fill="#fb923c" fontWeight="700" fontSize="11" textAnchor="middle">2. Internal &lt;style&gt;</text>
      <rect x="240" y="65" width="160" height="30" rx="4" fill={isDark ? "#7c2d12" : "#fed7aa"} />
      <text x="247" y="83" fill="#fdba74" fontSize="8" fontFamily="monospace">&lt;style&gt; p &#123; color: red; &#125; &lt;/style&gt;</text>
      <text x="247" y="115" fill={textColor} fontSize="9">• Útil para CSS Crítico (FCP)</text>
      <text x="247" y="132" fill={textColor} fontSize="9">• Aislado a una sola página</text>
      <text x="247" y="149" fill="#fb923c" fontSize="9" fontWeight="bold">⚠️ No comparte caché HTTP</text>

      {/* External */}
      <rect x="435" y="30" width="180" height="150" rx="8" fill={isDark ? "#064e3b" : "#d1fae5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="525" y="52" fill="#34d399" fontWeight="700" fontSize="11" textAnchor="middle">3. External &lt;link&gt;</text>
      <rect x="445" y="65" width="160" height="30" rx="4" fill={isDark ? "#065f46" : "#a7f3d0"} />
      <text x="452" y="83" fill="#6ee7b7" fontSize="8" fontFamily="monospace">&lt;link rel=&quot;stylesheet&quot;&gt;</text>
      <text x="452" y="115" fill={textColor} fontSize="9">• Separación de código limpia</text>
      <text x="452" y="132" fill={textColor} fontSize="9">• Caché global en CDN / Navegador</text>
      <text x="452" y="149" fill="#10b981" fontSize="9" fontWeight="bold">✅ Estándar de la Industria</text>

      <rect x="25" y="188" width="590" height="18" rx="4" fill={isDark ? "#1f2937" : "#f1f5f9"} />
      <text x="320" y="200" fill={subtextColor} fontSize="9" textAnchor="middle">Prioridad en igualdad de condiciones: gana la última regla leída por la cascada.</text>
    </svg>
  );
  },

  "css-display-none-vs-visibility": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* display: none */}
      <rect x="25" y="30" width="180" height="150" rx="8" fill={isDark ? "#1e1b4b" : "#ede9fe"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="115" y="52" fill="#818cf8" fontWeight="700" fontSize="11" textAnchor="middle">display: none</text>
      <rect x="40" y="65" width="40" height="35" rx="4" fill="#3b82f6" opacity="0.9" />
      <text x="60" y="86" fill="#fff" fontSize="8" textAnchor="middle">Caja 1</text>
      <rect x="85" y="65" width="60" height="35" rx="4" fill="none" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3 3" />
      <text x="115" y="86" fill="#ef4444" fontSize="8" textAnchor="middle">¡Eliminado!</text>
      <rect x="150" y="65" width="40" height="35" rx="4" fill="#10b981" opacity="0.9" />
      <text x="170" y="86" fill="#fff" fontSize="8" textAnchor="middle">Caja 3</text>
      <text x="35" y="118" fill={textColor} fontSize="9">• Fuera del Render Tree y Layout</text>
      <text x="35" y="134" fill={textColor} fontSize="9">• Espacio colapsa (0x0px)</text>
      <text x="35" y="150" fill={textColor} fontSize="9">• Oculto a Screen Readers</text>
      <text x="35" y="166" fill="#818cf8" fontSize="9" fontWeight="bold">Dispara Reflow costoso</text>

      {/* visibility: hidden */}
      <rect x="230" y="30" width="180" height="150" rx="8" fill={isDark ? "#0c4a6e" : "#e0f2fe"} stroke="#0ea5e9" strokeWidth="1.5" />
      <text x="320" y="52" fill="#38bdf8" fontWeight="700" fontSize="11" textAnchor="middle">visibility: hidden</text>
      <rect x="245" y="65" width="40" height="35" rx="4" fill="#3b82f6" opacity="0.9" />
      <text x="265" y="86" fill="#fff" fontSize="8" textAnchor="middle">Caja 1</text>
      <rect x="290" y="65" width="60" height="35" rx="4" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#0ea5e9" strokeWidth="1" strokeDasharray="2 2" />
      <text x="320" y="86" fill="#0ea5e9" fontSize="8" textAnchor="middle">Espacio vivo</text>
      <rect x="355" y="65" width="40" height="35" rx="4" fill="#10b981" opacity="0.9" />
      <text x="375" y="86" fill="#fff" fontSize="8" textAnchor="middle">Caja 3</text>
      <text x="240" y="118" fill={textColor} fontSize="9">• Sigue en el Layout del flujo</text>
      <text x="240" y="134" fill={textColor} fontSize="9">• Dimensiones se preservan intactas</text>
      <text x="240" y="150" fill={textColor} fontSize="9">• Oculto pero ocupa volumen</text>
      <text x="240" y="166" fill="#0ea5e9" fontSize="9" fontWeight="bold">Dispara solo Repaint</text>

      {/* opacity: 0 */}
      <rect x="435" y="30" width="180" height="150" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="525" y="52" fill="#34d399" fontWeight="700" fontSize="11" textAnchor="middle">opacity: 0</text>
      <rect x="450" y="65" width="40" height="35" rx="4" fill="#3b82f6" opacity="0.9" />
      <text x="470" y="86" fill="#fff" fontSize="8" textAnchor="middle">Caja 1</text>
      <rect x="495" y="65" width="60" height="35" rx="4" fill="#3b82f6" opacity="0.08" stroke="#10b981" strokeWidth="1" />
      <text x="525" y="86" fill="#10b981" fontSize="8" textAnchor="middle">Transparente</text>
      <rect x="560" y="65" width="40" height="35" rx="4" fill="#10b981" opacity="0.9" />
      <text x="580" y="86" fill="#fff" fontSize="8" textAnchor="middle">Caja 3</text>
      <text x="445" y="118" fill={textColor} fontSize="9">• Visible geométricamente al usuario</text>
      <text x="445" y="134" fill={textColor} fontSize="9">• Responde a eventos de click/hover</text>
      <text x="445" y="150" fill={textColor} fontSize="9">• Animable por GPU (Composite)</text>
      <text x="445" y="166" fill="#10b981" fontSize="9" fontWeight="bold">Para transiciones fluidas</text>

      <rect x="25" y="188" width="590" height="18" rx="4" fill={isDark ? "#1f2937" : "#f1f5f9"} />
      <text x="320" y="200" fill={subtextColor} fontSize="9" textAnchor="middle">Accesibilidad: display: none y visibility: hidden retiran el elemento del Accessibility Tree (a11y).</text>
    </svg>
  );
  },

  "css-units-rem-em-px": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* Root */}
      <rect x="30" y="30" width="160" height="150" rx="8" fill={isDark ? "#1e1b4b" : "#e0e7ff"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="110" y="52" fill="#818cf8" fontWeight="700" fontSize="11" textAnchor="middle">:root / &lt;html&gt;</text>
      <rect x="40" y="65" width="140" height="30" rx="4" fill={isDark ? "#312e81" : "#c7d2fe"} />
      <text x="110" y="84" fill="#4338ca" fontWeight="bold" fontSize="10" textAnchor="middle">font-size: 16px (1rem)</text>
      <text x="40" y="115" fill={textColor} fontSize="9">• Base universal del sitio</text>
      <text x="40" y="132" fill={textColor} fontSize="9">• Respeta zoom del usuario</text>
      <text x="40" y="149" fill="#818cf8" fontSize="9" fontWeight="bold">Base del cálculo rem</text>

      {/* em Compounding */}
      <rect x="220" y="30" width="190" height="150" rx="8" fill={isDark ? "#451a03" : "#ffedd5"} stroke="#f97316" strokeWidth="1.5" />
      <text x="315" y="52" fill="#fb923c" fontWeight="700" fontSize="11" textAnchor="middle">Unidad &apos;em&apos; (Relativa al Padre)</text>
      <rect x="230" y="65" width="170" height="26" rx="4" fill={isDark ? "#7c2d12" : "#fed7aa"} />
      <text x="315" y="82" fill="#c2410c" fontSize="9" textAnchor="middle">Padre (font-size: 2em = 32px)</text>
      <rect x="245" y="96" width="140" height="26" rx="4" fill={isDark ? "#9a3412" : "#fdba74"} />
      <text x="315" y="113" fill="#7c2d12" fontSize="9" fontWeight="bold" textAnchor="middle">Hijo: 1.5em = 48px! (32 x 1.5)</text>
      <text x="230" y="142" fill={textColor} fontSize="9">⚠️ Riesgo de efecto compuesto</text>
      <text x="230" y="158" fill="#fb923c" fontSize="9" fontWeight="bold">Ideal para paddings de botones</text>

      {/* rem Stability */}
      <rect x="440" y="30" width="170" height="150" rx="8" fill={isDark ? "#064e3b" : "#d1fae5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="525" y="52" fill="#34d399" fontWeight="700" fontSize="11" textAnchor="middle">Unidad &apos;rem&apos; (Relativa a Root)</text>
      <rect x="450" y="65" width="150" height="26" rx="4" fill={isDark ? "#065f46" : "#a7f3d0"} />
      <text x="525" y="82" fill="#047857" fontSize="9" textAnchor="middle">Padre (Cualquier tamaño)</text>
      <rect x="450" y="96" width="150" height="26" rx="4" fill={isDark ? "#047857" : "#6ee7b7"} />
      <text x="525" y="113" fill="#064e3b" fontSize="9" fontWeight="bold" textAnchor="middle">Hijo: 1.5rem = 24px (16 x 1.5)</text>
      <text x="450" y="142" fill={textColor} fontSize="9">✅ Totalmente predecible</text>
      <text x="450" y="158" fill="#10b981" fontSize="9" fontWeight="bold">Estándar para tipografía/layout</text>

      <rect x="25" y="188" width="590" height="18" rx="4" fill={isDark ? "#1f2937" : "#f1f5f9"} />
      <text x="320" y="200" fill={subtextColor} fontSize="9" textAnchor="middle">px es estático y bloquea el escalado por preferencias de accesibilidad del navegador.</text>
    </svg>
  );
  },

  "css-box-sizing-comparison": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* content-box */}
      <rect x="30" y="28" width="270" height="155" rx="8" fill={isDark ? "#450a0a" : "#fef2f2"} stroke="#ef4444" strokeWidth="1.5" />
      <text x="165" y="48" fill="#f87171" fontWeight="700" fontSize="11" textAnchor="middle">box-sizing: content-box (Default)</text>
      {/* Visual Box */}
      <rect x="65" y="60" width="200" height="55" fill={isDark ? "#7f1d1d" : "#fee2e2"} stroke="#ef4444" strokeWidth="2" />
      <rect x="85" y="70" width="160" height="35" fill={isDark ? "#991b1b" : "#fecaca"} stroke="#dc2626" strokeWidth="1" strokeDasharray="3 3" />
      <text x="165" y="92" fill="#fff" fontSize="9" textAnchor="middle">Content (width: 200px)</text>
      <text x="45" y="130" fill={textColor} fontSize="9">• Ancho declarado: 200px</text>
      <text x="45" y="145" fill={textColor} fontSize="9">• Padding (20px*2) + Borde (5px*2) = +50px</text>
      <text x="45" y="162" fill="#ef4444" fontSize="10" fontWeight="bold">Ancho final en pantalla: 250px (¡Desborda!)</text>

      {/* border-box */}
      <rect x="340" y="28" width="270" height="155" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="475" y="48" fill="#34d399" fontWeight="700" fontSize="11" textAnchor="middle">box-sizing: border-box (Estándar)</text>
      {/* Visual Box */}
      <rect x="385" y="60" width="180" height="55" fill={isDark ? "#065f46" : "#a7f3d0"} stroke="#10b981" strokeWidth="2" />
      <rect x="405" y="70" width="140" height="35" fill={isDark ? "#047857" : "#6ee7b7"} stroke="#059669" strokeWidth="1" strokeDasharray="3 3" />
      <text x="475" y="92" fill="#fff" fontSize="9" textAnchor="middle">Content (se ajusta a 150px)</text>
      <text x="355" y="130" fill={textColor} fontSize="9">• Ancho declarado: 200px</text>
      <text x="355" y="145" fill={textColor} fontSize="9">• Padding y borde se absorben internamente</text>
      <text x="355" y="162" fill="#10b981" fontSize="10" fontWeight="bold">Ancho final en pantalla: 200px exactos</text>

      <rect x="25" y="188" width="590" height="18" rx="4" fill={isDark ? "#1f2937" : "#f1f5f9"} />
      <text x="320" y="200" fill={subtextColor} fontSize="9" textAnchor="middle">Reset universal: *, *::before, *::after &#123; box-sizing: border-box; &#125;</text>
    </svg>
  );
  },

  "css-custom-properties-scope": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* Root scope */}
      <rect x="30" y="28" width="580" height="42" rx="6" fill={isDark ? "#1e1b4b" : "#ede9fe"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="45" y="46" fill="#818cf8" fontWeight="bold" fontSize="11">:root (Scope Global)</text>
      <text x="45" y="60" fill="#a5b4fc" fontSize="9" fontFamily="monospace">--theme-color: #6366f1;  --card-bg: #1e1b4b;</text>

      {/* Tree branches */}
      <path d="M160 70 L160 100" stroke="#6366f1" strokeWidth="1.5" />
      <path d="M470 70 L470 100" stroke="#6366f1" strokeWidth="1.5" />

      {/* Component A */}
      <rect x="40" y="100" width="240" height="80" rx="8" fill={isDark ? "#0f172a" : "#f1f5f9"} stroke="#6366f1" strokeWidth="1" />
      <text x="55" y="120" fill="#818cf8" fontWeight="bold" fontSize="10">Componente A (Heredado)</text>
      <rect x="55" y="130" width="210" height="38" rx="4" fill={isDark ? "#1e293b" : "#e2e8f0"} />
      <text x="65" y="146" fill={textColor} fontSize="9">color: var(--theme-color)</text>
      <text x="65" y="160" fill="#6366f1" fontSize="9" fontWeight="bold">➔ Renderiza #6366f1 (Indigo)</text>

      {/* Component B with override */}
      <rect x="350" y="100" width="250" height="80" rx="8" fill={isDark ? "#3b0764" : "#fdf4ff"} stroke="#ec4899" strokeWidth="1.5" />
      <text x="365" y="120" fill="#f472b6" fontWeight="bold" fontSize="10">Componente B (.dark-badge Override)</text>
      <rect x="365" y="130" width="220" height="38" rx="4" fill={isDark ? "#701a75" : "#fae8ff"} />
      <text x="375" y="146" fill="#f472b6" fontSize="9" fontFamily="monospace">--theme-color: #ec4899;</text>
      <text x="375" y="160" fill="#ec4899" fontSize="9" fontWeight="bold">➔ Hijos heredan #ec4899 (Pink)</text>

      <rect x="25" y="188" width="590" height="18" rx="4" fill={isDark ? "#1f2937" : "#f1f5f9"} />
      <text x="320" y="200" fill={subtextColor} fontSize="9" textAnchor="middle">Las variables CSS son dinámicas en tiempo de ejecución y se actualizan al vuelo sin recompilar.</text>
    </svg>
  );
  },

  "css-media-queries-breakpoints": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* Timeline Ruler */}
      <line x1="40" y1="90" x2="600" y2="90" stroke={border} strokeWidth="3" />

      {/* Mobile Base */}
      <circle cx="80" cy="90" r="7" fill="#6366f1" />
      <rect x="40" y="110" width="80" height="65" rx="6" fill={isDark ? "#1e1b4b" : "#ede9fe"} stroke="#6366f1" strokeWidth="1" />
      <text x="80" y="128" fill="#818cf8" fontWeight="bold" fontSize="10" textAnchor="middle">Mobile Base</text>
      <text x="80" y="145" fill={textColor} fontSize="8" textAnchor="middle">&lt; 640px</text>
      <text x="80" y="162" fill="#a5b4fc" fontSize="8" textAnchor="middle">Estilos Default</text>

      {/* Breakpoint sm */}
      <circle cx="200" cy="90" r="7" fill="#0ea5e9" />
      <rect x="160" y="110" width="80" height="65" rx="6" fill={isDark ? "#0c4a6e" : "#e0f2fe"} stroke="#0ea5e9" strokeWidth="1" />
      <text x="200" y="128" fill="#38bdf8" fontWeight="bold" fontSize="10" textAnchor="middle">sm (Tablet)</text>
      <text x="200" y="145" fill={textColor} fontSize="8" textAnchor="middle">min-width: 640px</text>
      <text x="200" y="162" fill="#38bdf8" fontSize="8" textAnchor="middle">2 Columnas</text>

      {/* Breakpoint md */}
      <circle cx="330" cy="90" r="7" fill="#10b981" />
      <rect x="290" y="110" width="80" height="65" rx="6" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1" />
      <text x="330" y="128" fill="#34d399" fontWeight="bold" fontSize="10" textAnchor="middle">md (Laptop)</text>
      <text x="330" y="145" fill={textColor} fontSize="8" textAnchor="middle">min-width: 768px</text>
      <text x="330" y="162" fill="#34d399" fontSize="8" textAnchor="middle">Sidebar visible</text>

      {/* Breakpoint lg */}
      <circle cx="460" cy="90" r="7" fill="#f59e0b" />
      <rect x="420" y="110" width="80" height="65" rx="6" fill={isDark ? "#451a03" : "#fef3c7"} stroke="#f59e0b" strokeWidth="1" />
      <text x="460" y="128" fill="#fbbf24" fontWeight="bold" fontSize="10" textAnchor="middle">lg (Desktop)</text>
      <text x="460" y="145" fill={textColor} fontSize="8" textAnchor="middle">min-width: 1024px</text>
      <text x="460" y="162" fill="#fbbf24" fontSize="8" textAnchor="middle">3-4 Columnas</text>

      {/* Breakpoint xl */}
      <circle cx="560" cy="90" r="7" fill="#ec4899" />
      <rect x="520" y="110" width="80" height="65" rx="6" fill={isDark ? "#4c0519" : "#fce7f3"} stroke="#ec4899" strokeWidth="1" />
      <text x="560" y="128" fill="#f472b6" fontWeight="bold" fontSize="10" textAnchor="middle">xl (Wide)</text>
      <text x="560" y="145" fill={textColor} fontSize="8" textAnchor="middle">min-width: 1280px</text>
      <text x="560" y="162" fill="#f472b6" fontSize="8" textAnchor="middle">Max-width clamp</text>

      {/* Top Indicator */}
      <text x="320" y="45" fill="#a5b4fc" fontWeight="bold" fontSize="11" textAnchor="middle">Estrategia Mobile-First con &apos;min-width&apos; progresivo</text>
      <path d="M80 60 L560 60" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="4 4" />
      <polygon points="563,60 556,56 556,64" fill="#6366f1" />

      <rect x="25" y="188" width="590" height="18" rx="4" fill={isDark ? "#1f2937" : "#f1f5f9"} />
      <text x="320" y="200" fill={subtextColor} fontSize="9" textAnchor="middle">Otras media queries esenciales: (prefers-color-scheme: dark) y (prefers-reduced-motion: reduce).</text>
    </svg>
  );
  },

  "css-flexbox-vs-grid": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* Flexbox */}
      <rect x="25" y="28" width="280" height="155" rx="8" fill={isDark ? "#1e1b4b" : "#ede9fe"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="165" y="48" fill="#818cf8" fontWeight="700" fontSize="11" textAnchor="middle">Flexbox: Unidimensional (1D)</text>
      <text x="165" y="65" fill={textColor} fontSize="9" textAnchor="middle">Flujo en 1 Eje (Main Axis X o Y)</text>
      {/* Flex Row */}
      <rect x="45" y="75" width="240" height="40" rx="6" fill={isDark ? "#312e81" : "#c7d2fe"} stroke="#818cf8" strokeWidth="1" strokeDasharray="3 3" />
      <rect x="52" y="82" width="50" height="26" rx="4" fill="#6366f1" />
      <text x="77" y="98" fill="#fff" fontSize="8" textAnchor="middle">Item 1</text>
      <rect x="110" y="82" width="70" height="26" rx="4" fill="#818cf8" />
      <text x="145" y="98" fill="#fff" fontSize="8" textAnchor="middle">Item 2 Largo</text>
      <rect x="188" y="82" width="90" height="26" rx="4" fill="#a5b4fc" />
      <text x="233" y="98" fill="#1e1b4b" fontSize="8" textAnchor="middle">Item 3 Auto</text>

      <text x="45" y="135" fill={textColor} fontSize="9">• Basado en contenido (Content-first)</text>
      <text x="45" y="150" fill={textColor} fontSize="9">• Ideal para navbars, barras de botones, chips</text>
      <text x="45" y="165" fill="#818cf8" fontSize="9" fontWeight="bold">Excelente para alineación y gaps en 1 eje</text>

      {/* CSS Grid */}
      <rect x="335" y="28" width="280" height="155" rx="8" fill={isDark ? "#0c4a6e" : "#e0f2fe"} stroke="#0ea5e9" strokeWidth="1.5" />
      <text x="475" y="48" fill="#38bdf8" fontWeight="700" fontSize="11" textAnchor="middle">CSS Grid: Bidimensional (2D)</text>
      <text x="475" y="65" fill={textColor} fontSize="9" textAnchor="middle">Filas Y Columnas simultáneas</text>
      {/* Grid 2x2 */}
      <rect x="355" y="75" width="115" height="24" rx="4" fill="#0ea5e9" />
      <text x="412" y="90" fill="#fff" fontSize="8" textAnchor="middle">Col 1 / Row 1</text>
      <rect x="480" y="75" width="115" height="24" rx="4" fill="#38bdf8" />
      <text x="537" y="90" fill="#fff" fontSize="8" textAnchor="middle">Col 2 / Row 1</text>
      <rect x="355" y="105" width="115" height="24" rx="4" fill="#7dd3fc" />
      <text x="412" y="120" fill="#0c4a6e" fontSize="8" textAnchor="middle">Col 1 / Row 2</text>
      <rect x="480" y="105" width="115" height="24" rx="4" fill="#0284c7" />
      <text x="537" y="120" fill="#fff" fontSize="8" textAnchor="middle">Col 2 / Row 2</text>

      <text x="355" y="145" fill={textColor} fontSize="9">• Basado en estructura (Layout-first)</text>
      <text x="355" y="160" fill={textColor} fontSize="9">• Ideal para dashboards, galerías, páginas</text>
      <text x="355" y="174" fill="#0ea5e9" fontSize="9" fontWeight="bold">Soporta áreas nombradas y fr units</text>

      <rect x="25" y="188" width="590" height="18" rx="4" fill={isDark ? "#1f2937" : "#f1f5f9"} />
      <text x="320" y="200" fill={subtextColor} fontSize="9" textAnchor="middle">Regla de oro: Grid para el layout general exterior; Flexbox para componentes internos alineados.</text>
    </svg>
  );
  },

  "css-specificity-hierarchy": ({ isDark, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* Pyramid Levels */}
      {/* 1. !important */}
      <rect x="190" y="25" width="260" height="24" rx="4" fill={isDark ? "#450a0a" : "#fee2e2"} stroke="#ef4444" strokeWidth="1.5" />
      <text x="320" y="41" fill="#ef4444" fontWeight="bold" fontSize="10" textAnchor="middle">!important (Rompe la cascada normal)</text>

      {/* 2. Inline styles */}
      <rect x="160" y="54" width="320" height="24" rx="4" fill={isDark ? "#7c2d12" : "#ffedd5"} stroke="#ea580c" strokeWidth="1.5" />
      <text x="320" y="70" fill="#ea580c" fontWeight="bold" fontSize="10" textAnchor="middle">Inline style=&quot;...&quot;  ➔  (1, 0, 0, 0)</text>

      {/* 3. IDs */}
      <rect x="130" y="83" width="380" height="24" rx="4" fill={isDark ? "#713f12" : "#fef9c3"} stroke="#eab308" strokeWidth="1.5" />
      <text x="320" y="99" fill="#ca8a04" fontWeight="bold" fontSize="10" textAnchor="middle">ID Selectors (#header, #app)  ➔  (0, 1, 0, 0)</text>

      {/* 4. Classes, Attr, Pseudo-classes */}
      <rect x="100" y="112" width="440" height="24" rx="4" fill={isDark ? "#1e1b4b" : "#ede9fe"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="320" y="128" fill="#6366f1" fontWeight="bold" fontSize="10" textAnchor="middle">Clases, [attr], Pseudo-clases (:hover, :is)  ➔  (0, 0, 1, 0)</text>

      {/* 5. Elements & Pseudo-elements */}
      <rect x="70" y="141" width="500" height="24" rx="4" fill={isDark ? "#064e3b" : "#d1fae5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="320" y="157" fill="#10b981" fontWeight="bold" fontSize="10" textAnchor="middle">Elementos (div, p, h1) &amp; Pseudo-elementos (::before)  ➔  (0, 0, 0, 1)</text>

      {/* 6. :where() and Universal */}
      <rect x="40" y="170" width="560" height="20" rx="4" fill={isDark ? "#1f2937" : "#f1f5f9"} stroke="#64748b" strokeWidth="1" />
      <text x="320" y="184" fill="#64748b" fontSize="9" textAnchor="middle">:where(selector) y selector universal (*)  ➔  (0, 0, 0, 0) Especificidad Nula</text>

      <rect x="25" y="195" width="590" height="18" rx="4" fill={isDark ? "#111827" : "#f8fafc"} />
      <text x="320" y="207" fill={subtextColor} fontSize="8.5" textAnchor="middle">Vector (a,b,c,d): Un ID (0,1,0,0) siempre superará a 100 clases concatenadas (0,0,100,0).</text>
    </svg>
  );
  },

  "css-pseudoclasses-vs-pseudoelements": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* Pseudo-Classes */}
      <rect x="30" y="28" width="180" height="155" rx="8" fill={isDark ? "#1e1b4b" : "#ede9fe"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="120" y="48" fill="#818cf8" fontWeight="700" fontSize="11" textAnchor="middle">Pseudo-clases (1 colon :)</text>
      <rect x="40" y="58" width="160" height="22" rx="4" fill={isDark ? "#312e81" : "#c7d2fe"} />
      <text x="120" y="73" fill="#4338ca" fontSize="9" fontFamily="monospace" textAnchor="middle">:hover, :active, :focus-visible</text>
      <rect x="40" y="85" width="160" height="22" rx="4" fill={isDark ? "#312e81" : "#c7d2fe"} />
      <text x="120" y="100" fill="#4338ca" fontSize="9" fontFamily="monospace" textAnchor="middle">:nth-child(2n), :first-of-type</text>
      <rect x="40" y="112" width="160" height="22" rx="4" fill={isDark ? "#312e81" : "#c7d2fe"} />
      <text x="120" y="127" fill="#4338ca" fontSize="9" fontFamily="monospace" textAnchor="middle">:has(), :is(), :where()</text>
      <text x="40" y="152" fill={textColor} fontSize="8.5">• Estado dinámico o estructural</text>
      <text x="40" y="167" fill="#818cf8" fontSize="8.5" fontWeight="bold">• Actúa sobre el elemento real</text>

      {/* Central Element */}
      <rect x="235" y="65" width="170" height="85" rx="10" fill={isDark ? "#0f172a" : "#ffffff"} stroke="#38bdf8" strokeWidth="2" />
      <text x="320" y="88" fill="#0284c7" fontWeight="bold" fontSize="11" textAnchor="middle">&lt;button class=&quot;btn&quot;&gt;</text>
      <rect x="250" y="98" width="140" height="35" rx="6" fill={isDark ? "#1e293b" : "#f0f9ff"} stroke="#0ea5e9" strokeWidth="1" />
      <text x="320" y="115" fill={textColor} fontSize="9" textAnchor="middle">Nodo Real del DOM</text>
      <text x="320" y="127" fill="#0ea5e9" fontSize="8" textAnchor="middle">Texto: &quot;Enviar Pedido&quot;</text>

      {/* Pseudo-Elements */}
      <rect x="430" y="28" width="180" height="155" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="520" y="48" fill="#34d399" fontWeight="700" fontSize="11" textAnchor="middle">Pseudo-elementos (2 colons ::)</text>
      <rect x="440" y="58" width="160" height="22" rx="4" fill={isDark ? "#065f46" : "#a7f3d0"} />
      <text x="520" y="73" fill="#047857" fontSize="9" fontFamily="monospace" textAnchor="middle">::before &#123; content: &quot;★&quot; &#125;</text>
      <rect x="440" y="85" width="160" height="22" rx="4" fill={isDark ? "#065f46" : "#a7f3d0"} />
      <text x="520" y="100" fill="#047857" fontSize="9" fontFamily="monospace" textAnchor="middle">::after &#123; content: &quot;➔&quot; &#125;</text>
      <rect x="440" y="112" width="160" height="22" rx="4" fill={isDark ? "#065f46" : "#a7f3d0"} />
      <text x="520" y="127" fill="#047857" fontSize="9" fontFamily="monospace" textAnchor="middle">::placeholder, ::selection</text>
      <text x="440" y="152" fill={textColor} fontSize="8.5">• Inserta contenido virtual decorativo</text>
      <text x="440" y="167" fill="#10b981" fontSize="8.5" fontWeight="bold">• No existe como tag en HTML</text>

      <rect x="25" y="188" width="590" height="18" rx="4" fill={isDark ? "#1f2937" : "#f1f5f9"} />
      <text x="320" y="200" fill={subtextColor} fontSize="9" textAnchor="middle">CSS3 estandarizó :: para pseudo-elementos y : para pseudo-clases; el navegador tolera :after por legado.</text>
    </svg>
  );
  },

  "css-positioning-types": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* 1. Static */}
      <rect x="20" y="28" width="112" height="155" rx="6" fill={isDark ? "#1f2937" : "#f1f5f9"} stroke="#64748b" strokeWidth="1" />
      <text x="76" y="46" fill="#64748b" fontWeight="bold" fontSize="10" textAnchor="middle">static</text>
      <rect x="30" y="55" width="92" height="40" rx="4" fill={isDark ? "#334155" : "#e2e8f0"} />
      <text x="76" y="78" fill={textColor} fontSize="8" textAnchor="middle">Flujo Normal</text>
      <text x="26" y="112" fill={textColor} fontSize="7.5">• Valor por defecto</text>
      <text x="26" y="126" fill={textColor} fontSize="7.5">• Ignora top/left</text>
      <text x="26" y="140" fill={textColor} fontSize="7.5">• Ignora z-index</text>
      <text x="26" y="165" fill="#64748b" fontSize="8" fontWeight="bold">En flujo original</text>

      {/* 2. Relative */}
      <rect x="142" y="28" width="112" height="155" rx="6" fill={isDark ? "#1e1b4b" : "#ede9fe"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="198" y="46" fill="#818cf8" fontWeight="bold" fontSize="10" textAnchor="middle">relative</text>
      <rect x="152" y="55" width="40" height="25" rx="3" fill="none" stroke="#818cf8" strokeDasharray="2 2" />
      <rect x="162" y="65" width="40" height="25" rx="3" fill="#6366f1" />
      <text x="182" y="80" fill="#fff" fontSize="7" textAnchor="middle">Offset</text>
      <text x="148" y="112" fill={textColor} fontSize="7.5">• Desplazado de su hueco</text>
      <text x="148" y="126" fill={textColor} fontSize="7.5">• Preserva espacio original</text>
      <text x="148" y="140" fill={textColor} fontSize="7.5">• Base para absolutos</text>
      <text x="148" y="165" fill="#818cf8" fontSize="8" fontWeight="bold">Referencia de hijos</text>

      {/* 3. Absolute */}
      <rect x="264" y="28" width="112" height="155" rx="6" fill={isDark ? "#0c4a6e" : "#e0f2fe"} stroke="#0ea5e9" strokeWidth="1.5" />
      <text x="320" y="46" fill="#38bdf8" fontWeight="bold" fontSize="10" textAnchor="middle">absolute</text>
      <rect x="274" y="55" width="92" height="40" rx="4" fill={isDark ? "#075985" : "#bae6fd"} />
      <rect x="315" y="58" width="45" height="20" rx="3" fill="#0284c7" />
      <text x="337" y="71" fill="#fff" fontSize="7" textAnchor="middle">Anclado</text>
      <text x="270" y="112" fill={textColor} fontSize="7.5">• Fuera del flujo</text>
      <text x="270" y="126" fill={textColor} fontSize="7.5">• Relativo a ancestro posicionado</text>
      <text x="270" y="140" fill={textColor} fontSize="7.5">• No reserva hueco</text>
      <text x="270" y="165" fill="#0ea5e9" fontSize="8" fontWeight="bold">Tooltips, dropdowns</text>

      {/* 4. Fixed */}
      <rect x="386" y="28" width="112" height="155" rx="6" fill={isDark ? "#451a03" : "#fef3c7"} stroke="#f59e0b" strokeWidth="1.5" />
      <text x="442" y="46" fill="#fbbf24" fontWeight="bold" fontSize="10" textAnchor="middle">fixed</text>
      <rect x="396" y="55" width="92" height="40" rx="4" fill={isDark ? "#78350f" : "#fde68a"} />
      <rect x="400" y="58" width="84" height="14" rx="2" fill="#d97706" />
      <text x="442" y="68" fill="#fff" fontSize="7" textAnchor="middle">Viewport Pin</text>
      <text x="392" y="112" fill={textColor} fontSize="7.5">• Relativo a la ventana</text>
      <text x="392" y="126" fill={textColor} fontSize="7.5">• Inmune al scroll</text>
      <text x="392" y="140" fill={textColor} fontSize="7.5">• Fuera del flujo</text>
      <text x="392" y="165" fill="#f59e0b" fontSize="8" fontWeight="bold">Modales, floating CTA</text>

      {/* 5. Sticky */}
      <rect x="508" y="28" width="112" height="155" rx="6" fill={isDark ? "#064e3b" : "#d1fae5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="564" y="46" fill="#34d399" fontWeight="bold" fontSize="10" textAnchor="middle">sticky</text>
      <rect x="518" y="55" width="92" height="40" rx="4" fill={isDark ? "#065f46" : "#a7f3d0"} />
      <rect x="522" y="58" width="84" height="14" rx="2" fill="#059669" />
      <text x="564" y="68" fill="#fff" fontSize="7" textAnchor="middle">Scroll Threshold</text>
      <text x="514" y="112" fill={textColor} fontSize="7.5">• Híbrido: Relative + Fixed</text>
      <text x="514" y="126" fill={textColor} fontSize="7.5">• Requiere top/bottom</text>
      <text x="514" y="140" fill={textColor} fontSize="7.5">• Respeta contenedor padre</text>
      <text x="514" y="165" fill="#10b981" fontSize="8" fontWeight="bold">Headers con scroll</text>

      <rect x="25" y="188" width="590" height="18" rx="4" fill={isDark ? "#1f2937" : "#f1f5f9"} />
      <text x="320" y="200" fill={subtextColor} fontSize="9" textAnchor="middle">Cuidado: &apos;overflow: hidden&apos; en cualquier ancestro neutraliza el comportamiento de &apos;position: sticky&apos;.</text>
    </svg>
  );
  },

  "css-stacking-context-tree": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* Root Stacking Context */}
      <rect x="30" y="25" width="580" height="35" rx="6" fill={isDark ? "#1f2937" : "#e2e8f0"} stroke="#64748b" strokeWidth="1" />
      <text x="45" y="46" fill={textColor} fontWeight="bold" fontSize="11">Root Stacking Context (&lt;html&gt;)</text>

      {/* Context A (z-index: 1) */}
      <rect x="40" y="70" width="260" height="110" rx="8" fill={isDark ? "#1e1b4b" : "#ede9fe"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="55" y="90" fill="#818cf8" fontWeight="bold" fontSize="10">Contenedor A (z-index: 1)</text>
      {/* Child with z-index: 9999 */}
      <rect x="55" y="102" width="230" height="65" rx="6" fill={isDark ? "#4338ca" : "#c7d2fe"} stroke="#4f46e5" strokeWidth="1.5" />
      <text x="70" y="122" fill="#ffffff" fontWeight="bold" fontSize="10">Hijo Modal (z-index: 9999)</text>
      <text x="70" y="138" fill={textColor} fontSize="8.5">¡Atrapado en el contexto de A!</text>
      <text x="70" y="153" fill="#fbbf24" fontSize="8.5" fontWeight="bold">Nivel global real: 1.9999 (por debajo de B)</text>

      {/* Context B (z-index: 2) */}
      <rect x="340" y="70" width="260" height="110" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="355" y="90" fill="#34d399" fontWeight="bold" fontSize="10">Contenedor B (z-index: 2)</text>
      {/* Child with z-index: 1 */}
      <rect x="355" y="102" width="230" height="65" rx="6" fill={isDark ? "#065f46" : "#a7f3d0"} stroke="#059669" strokeWidth="1.5" />
      <text x="370" y="122" fill="#ffffff" fontWeight="bold" fontSize="10">Hijo Banner (z-index: 1)</text>
      <text x="370" y="138" fill={textColor} fontSize="8.5">Hereda la prioridad 2 de su padre B.</text>
      <text x="370" y="153" fill="#10b981" fontSize="8.5" fontWeight="bold">✅ Pinta SIEMPRE por encima de Contenedor A</text>

      <rect x="25" y="188" width="590" height="18" rx="4" fill={isDark ? "#1f2937" : "#f1f5f9"} />
      <text x="320" y="200" fill={subtextColor} fontSize="9" textAnchor="middle">Disparadores de stacking context: opacity &lt; 1, transform, filter, container-type o &apos;isolation: isolate&apos;.</text>
    </svg>
  );
  },

  "css-sass-preprocessing-flow": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* Source SCSS */}
      <rect x="25" y="30" width="160" height="150" rx="8" fill={isDark ? "#4c0519" : "#fce7f3"} stroke="#ec4899" strokeWidth="1.5" />
      <text x="105" y="50" fill="#f472b6" fontWeight="bold" fontSize="11" textAnchor="middle">Código SCSS Fuente</text>
      <rect x="35" y="60" width="140" height="22" rx="4" fill={isDark ? "#831843" : "#fbcfe8"} />
      <text x="42" y="75" fill="#f43f5e" fontSize="8" fontFamily="monospace">_variables.scss</text>
      <rect x="35" y="86" width="140" height="22" rx="4" fill={isDark ? "#831843" : "#fbcfe8"} />
      <text x="42" y="101" fill="#f43f5e" fontSize="8" fontFamily="monospace">_mixins.scss</text>
      <rect x="35" y="112" width="140" height="22" rx="4" fill={isDark ? "#831843" : "#fbcfe8"} />
      <text x="42" y="127" fill="#f43f5e" fontSize="8" fontFamily="monospace">main.scss (@use)</text>
      <text x="40" y="152" fill={textColor} fontSize="8">• Mixins, Funciones y Math</text>
      <text x="40" y="165" fill="#ec4899" fontSize="8" fontWeight="bold">• Anidación estructurada</text>

      {/* Compiler */}
      <path d="M190 105 L225 105" stroke="#ec4899" strokeWidth="2" />
      <polygon points="228,105 221,101 221,109" fill="#ec4899" />
      <rect x="230" y="45" width="180" height="120" rx="8" fill={isDark ? "#1e1b4b" : "#ede9fe"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="320" y="70" fill="#818cf8" fontWeight="bold" fontSize="11" textAnchor="middle">Dart Sass Engine</text>
      <rect x="245" y="82" width="150" height="24" rx="4" fill={isDark ? "#312e81" : "#c7d2fe"} />
      <text x="320" y="98" fill="#4338ca" fontSize="9" textAnchor="middle">Resolución de Árbol @use</text>
      <rect x="245" y="112" width="150" height="24" rx="4" fill={isDark ? "#312e81" : "#c7d2fe"} />
      <text x="320" y="128" fill="#4338ca" fontSize="9" textAnchor="middle">Flattening &amp; Autoprefixer</text>
      <text x="320" y="152" fill="#818cf8" fontSize="8.5" textAnchor="middle">Generación de Source Maps</text>

      {/* Output CSS */}
      <path d="M415 105 L450 105" stroke="#10b981" strokeWidth="2" />
      <polygon points="453,105 446,101 446,109" fill="#10b981" />
      <rect x="455" y="30" width="160" height="150" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="535" y="50" fill="#34d399" fontWeight="bold" fontSize="11" textAnchor="middle">CSS Minificado (Prod)</text>
      <rect x="465" y="60" width="140" height="24" rx="4" fill={isDark ? "#065f46" : "#a7f3d0"} />
      <text x="472" y="76" fill="#047857" fontSize="9" fontFamily="monospace">bundle.min.css</text>
      <rect x="465" y="90" width="140" height="24" rx="4" fill={isDark ? "#065f46" : "#a7f3d0"} />
      <text x="472" y="106" fill="#047857" fontSize="8" fontFamily="monospace">bundle.css.map</text>
      <text x="470" y="132" fill={textColor} fontSize="8">• CSS plano estándar</text>
      <text x="470" y="146" fill={textColor} fontSize="8">• Consumido por el browser</text>
      <text x="470" y="165" fill="#10b981" fontSize="8.5" fontWeight="bold">100% Nativo en cliente</text>

      <rect x="25" y="188" width="590" height="18" rx="4" fill={isDark ? "#1f2937" : "#f1f5f9"} />
      <text x="320" y="200" fill={subtextColor} fontSize="9" textAnchor="middle">Nota: CSS moderno nativo ya incluye Custom Properties y Native Nesting, reduciendo la necesidad de preprocesadores.</text>
    </svg>
  );
  },

  "css-bem-architecture": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* Block Card */}
      <rect x="40" y="30" width="320" height="150" rx="8" fill={isDark ? "#0f172a" : "#f8fafc"} stroke="#6366f1" strokeWidth="2" />
      <text x="55" y="50" fill="#818cf8" fontWeight="bold" fontSize="11">.card (BLOCK: Entidad independiente)</text>

      {/* Element 1: Header */}
      <rect x="55" y="60" width="290" height="30" rx="4" fill={isDark ? "#1e1b4b" : "#ede9fe"} stroke="#818cf8" strokeWidth="1" />
      <text x="65" y="79" fill="#4338ca" fontSize="9" fontFamily="monospace">.card__title (ELEMENT: __)</text>

      {/* Element 2: Body */}
      <rect x="55" y="98" width="290" height="35" rx="4" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#94a3b8" strokeWidth="1" />
      <text x="65" y="118" fill={textColor} fontSize="9" fontFamily="monospace">.card__description (ELEMENT: __)</text>

      {/* Element 3 + Modifier Button */}
      <rect x="55" y="140" width="180" height="28" rx="4" fill={isDark ? "#064e3b" : "#d1fae5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="65" y="158" fill="#047857" fontSize="8.5" fontFamily="monospace">.card__button--primary (MODIFIER: --)</text>

      {/* Explanatory Panel */}
      <rect x="380" y="30" width="230" height="150" rx="8" fill={isDark ? "#1e1b4b" : "#f5f3ff"} stroke="#818cf8" strokeWidth="1.5" />
      <text x="495" y="50" fill="#6366f1" fontWeight="bold" fontSize="11" textAnchor="middle">Principios BEM</text>
      <text x="395" y="75" fill={textColor} fontSize="9">• <tspan fontWeight="bold" fill="#6366f1">Block</tspan>: Componente reutilizable</text>
      <text x="395" y="95" fill={textColor} fontSize="9">• <tspan fontWeight="bold" fill="#38bdf8">Element (__)</tspan>: Parte funcional</text>
      <text x="395" y="115" fill={textColor} fontSize="9">• <tspan fontWeight="bold" fill="#10b981">Modifier (--)</tspan>: Variante o estado</text>
      <rect x="395" y="130" width="200" height="36" rx="4" fill={isDark ? "#312e81" : "#ede9fe"} />
      <text x="402" y="146" fill="#818cf8" fontSize="8.5" fontWeight="bold">Especificidad Plana: (0, 0, 1, 0)</text>
      <text x="402" y="158" fill={textColor} fontSize="8">Previene guerras de selectores anidados</text>

      <rect x="25" y="188" width="590" height="18" rx="4" fill={isDark ? "#1f2937" : "#f1f5f9"} />
      <text x="320" y="200" fill={subtextColor} fontSize="9" textAnchor="middle">BEM evita anidar .card .title .btn p &#123; ... &#125; que degrada la velocidad de parseo del motor CSS.</text>
    </svg>
  );
  },

  "css-compositor-vs-reflow": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* Pathway 1: Layout Reflow */}
      <rect x="30" y="28" width="580" height="46" rx="6" fill={isDark ? "#450a0a" : "#fee2e2"} stroke="#ef4444" strokeWidth="1.5" />
      <text x="45" y="46" fill="#ef4444" fontWeight="bold" fontSize="10">🔴 Layout / Reflow (Costoso - Animar: top, left, width, height, margin)</text>
      <text x="45" y="62" fill={textColor} fontSize="8.5">Fuerza: Recalcular Layout en CPU ➔ Repaint en Raster ➔ Composite (~15-30 FPS, produce jank)</text>

      {/* Pathway 2: Repaint */}
      <rect x="30" y="80" width="580" height="46" rx="6" fill={isDark ? "#451a03" : "#fef3c7"} stroke="#f59e0b" strokeWidth="1.5" />
      <text x="45" y="98" fill="#d97706" fontWeight="bold" fontSize="10">🟠 Paint / Repaint (Medio - Animar: color, background, border-color, box-shadow)</text>
      <text x="45" y="114" fill={textColor} fontSize="8.5">Salta Layout, pero fuerza: Repintado de píxeles en CPU/GPU ➔ Composite (~45-60 FPS)</text>

      {/* Pathway 3: Composite GPU */}
      <rect x="30" y="132" width="580" height="46" rx="6" fill={isDark ? "#064e3b" : "#d1fae5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="45" y="150" fill="#059669" fontWeight="bold" fontSize="10">🟢 GPU Composite (Ultra Rápido - Animar: transform, opacity, filter)</text>
      <text x="45" y="166" fill={textColor} fontSize="8.5">Salta Layout y Paint. La capa reside en memoria GPU y se mueve en el Compositor Thread (60/120 FPS fijos)</text>

      <rect x="25" y="188" width="590" height="18" rx="4" fill={isDark ? "#1f2937" : "#f1f5f9"} />
      <text x="320" y="200" fill={subtextColor} fontSize="9" textAnchor="middle">Consejo: Usar will-change: transform con moderación para promover capas a la GPU sin saturar memoria.</text>
    </svg>
  );
  },

  "css-grid-template-areas": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* Grid Layout Diagram */}
      <rect x="30" y="28" width="310" height="155" rx="8" fill={isDark ? "#0f172a" : "#ffffff"} stroke="#6366f1" strokeWidth="1.5" />
      {/* Header Area */}
      <rect x="40" y="38" width="290" height="28" rx="4" fill={isDark ? "#312e81" : "#c7d2fe"} stroke="#6366f1" strokeWidth="1" />
      <text x="185" y="55" fill="#ffffff" fontWeight="bold" fontSize="9" textAnchor="middle">&quot;header header&quot; (grid-area: header)</text>

      {/* Sidebar & Main */}
      <rect x="40" y="72" width="80" height="70" rx="4" fill={isDark ? "#0c4a6e" : "#bae6fd"} stroke="#0ea5e9" strokeWidth="1" />
      <text x="80" y="110" fill="#0369a1" fontWeight="bold" fontSize="9" textAnchor="middle">&quot;sidebar&quot;</text>

      <rect x="126" y="72" width="204" height="70" rx="4" fill={isDark ? "#064e3b" : "#a7f3d0"} stroke="#10b981" strokeWidth="1" />
      <text x="228" y="110" fill="#047857" fontWeight="bold" fontSize="9" textAnchor="middle">&quot;main&quot; (1fr expansivo)</text>

      {/* Footer Area */}
      <rect x="40" y="148" width="290" height="26" rx="4" fill={isDark ? "#451a03" : "#fde68a"} stroke="#f59e0b" strokeWidth="1" />
      <text x="185" y="164" fill="#b45309" fontWeight="bold" fontSize="9" textAnchor="middle">&quot;footer footer&quot; (grid-area: footer)</text>

      {/* Code Syntax Panel */}
      <rect x="360" y="28" width="250" height="155" rx="8" fill={isDark ? "#1e1b4b" : "#f5f3ff"} stroke="#818cf8" strokeWidth="1.5" />
      <text x="485" y="48" fill="#6366f1" fontWeight="bold" fontSize="11" textAnchor="middle">Declaración en CSS</text>
      <rect x="370" y="58" width="230" height="75" rx="4" fill={isDark ? "#09090b" : "#ffffff"} stroke="#c7d2fe" strokeWidth="1" />
      <text x="380" y="73" fill="#818cf8" fontSize="8" fontFamily="monospace">display: grid;</text>
      <text x="380" y="87" fill="#818cf8" fontSize="8" fontFamily="monospace">grid-template-columns: 240px 1fr;</text>
      <text x="380" y="101" fill="#ec4899" fontSize="8" fontFamily="monospace">grid-template-areas:</text>
      <text x="390" y="113" fill="#a5b4fc" fontSize="7.5" fontFamily="monospace">&quot;header header&quot;</text>
      <text x="390" y="125" fill="#a5b4fc" fontSize="7.5" fontFamily="monospace">&quot;sidebar main&quot; &quot;footer footer&quot;;</text>
      <text x="375" y="152" fill={textColor} fontSize="8.5">• Reordenar en mobile sin tocar el HTML</text>
      <text x="375" y="168" fill="#10b981" fontSize="8.5" fontWeight="bold">Máxima legibilidad semántica de layout</text>

      <rect x="25" y="188" width="590" height="18" rx="4" fill={isDark ? "#1f2937" : "#f1f5f9"} />
      <text x="320" y="200" fill={subtextColor} fontSize="9" textAnchor="middle">Para celdas vacías en la cuadrícula, se utiliza un punto &apos;.&apos; dentro de la cadena de grid-template-areas.</text>
    </svg>
  );
  },

  "css-container-queries-flow": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* Viewport label */}
      <text x="320" y="28" fill="#a5b4fc" fontWeight="bold" fontSize="10" textAnchor="middle">Mismo Viewport Desktop (1280px) ➔ Dos Contenedores Distintos</text>

      {/* Container 1: Sidebar narrow */}
      <rect x="30" y="38" width="220" height="145" rx="8" fill={isDark ? "#1e1b4b" : "#ede9fe"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="140" y="55" fill="#818cf8" fontWeight="bold" fontSize="9.5" textAnchor="middle">Contenedor Sidebar (Ancho &lt; 400px)</text>
      {/* Card vertical stacked */}
      <rect x="45" y="65" width="190" height="108" rx="6" fill={isDark ? "#0f172a" : "#ffffff"} stroke="#818cf8" strokeWidth="1" />
      <rect x="55" y="73" width="170" height="35" rx="4" fill="#6366f1" />
      <text x="140" y="94" fill="#fff" fontSize="8" textAnchor="middle">Imagen (Arriba)</text>
      <text x="60" y="122" fill={textColor} fontSize="8" fontWeight="bold">Título del Producto</text>
      <rect x="60" y="132" width="160" height="20" rx="3" fill="#818cf8" />
      <text x="140" y="145" fill="#fff" fontSize="7.5" textAnchor="middle">Botón Apilado</text>

      {/* Container 2: Main wide */}
      <rect x="270" y="38" width="340" height="145" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="440" y="55" fill="#34d399" fontWeight="bold" fontSize="9.5" textAnchor="middle">Contenedor Principal (Ancho &gt; 500px)</text>
      {/* Card horizontal */}
      <rect x="285" y="65" width="310" height="108" rx="6" fill={isDark ? "#0f172a" : "#ffffff"} stroke="#10b981" strokeWidth="1" />
      <rect x="295" y="75" width="100" height="88" rx="4" fill="#10b981" />
      <text x="345" y="122" fill="#fff" fontSize="8" textAnchor="middle">Imagen (Lado)</text>
      <text x="410" y="95" fill={textColor} fontSize="9" fontWeight="bold">Título del Producto</text>
      <text x="410" y="112" fill={subtextColor} fontSize="8">Descripción horizontal extendida.</text>
      <rect x="410" y="128" width="170" height="24" rx="4" fill="#059669" />
      <text x="495" y="143" fill="#fff" fontSize="8" textAnchor="middle">Comprar Ahora (Full width)</text>

      <rect x="25" y="188" width="590" height="18" rx="4" fill={isDark ? "#1f2937" : "#f1f5f9"} />
      <text x="320" y="200" fill={subtextColor} fontSize="9" textAnchor="middle">@container (min-width: 450px) permite que el componente sea 100% modular e independiente del viewport.</text>
    </svg>
  );
  },

  "css-clamp-fluid-curve": ({ isDark, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* Title Formula */}
      <text x="320" y="32" fill="#818cf8" fontWeight="bold" fontSize="11" textAnchor="middle">clamp(MIN: 1.5rem, PREFERRED: 4vw + 1rem, MAX: 3rem)</text>

      {/* Cartesian Axes */}
      <line x1="60" y1="160" x2="580" y2="160" stroke={border} strokeWidth="1.5" />
      <line x1="60" y1="45" x2="60" y2="160" stroke={border} strokeWidth="1.5" />
      <text x="320" y="176" fill={subtextColor} fontSize="8.5" textAnchor="middle">Ancho del Viewport (Pantalla en píxeles)</text>
      <text x="40" y="45" fill={subtextColor} fontSize="8.5" textAnchor="middle">Size</text>

      {/* Curve: Flat floor -> Slope -> Flat ceiling */}
      {/* Floor */}
      <line x1="60" y1="130" x2="180" y2="130" stroke="#f59e0b" strokeWidth="3" />
      <circle cx="180" cy="130" r="4" fill="#f59e0b" />
      <text x="120" y="122" fill="#f59e0b" fontSize="8.5" fontWeight="bold" textAnchor="middle">Piso: 1.5rem (24px)</text>

      {/* Dynamic Slope */}
      <line x1="180" y1="130" x2="440" y2="70" stroke="#6366f1" strokeWidth="3" />
      <text x="310" y="92" fill="#818cf8" fontSize="9" fontWeight="bold" textAnchor="middle">Escalado Fluido Continuo (4vw + 1rem)</text>

      {/* Ceiling */}
      <circle cx="440" cy="70" r="4" fill="#10b981" />
      <line x1="440" y1="70" x2="570" y2="70" stroke="#10b981" strokeWidth="3" />
      <text x="505" y="62" fill="#10b981" fontSize="8.5" fontWeight="bold" textAnchor="middle">Techo: 3rem (48px)</text>

      {/* Vertical Threshold Lines */}
      <line x1="180" y1="130" x2="180" y2="160" stroke={border} strokeWidth="1" strokeDasharray="3 3" />
      <text x="180" y="170" fill={subtextColor} fontSize="7.5" textAnchor="middle">~375px</text>

      <line x1="440" y1="70" x2="440" y2="160" stroke={border} strokeWidth="1" strokeDasharray="3 3" />
      <text x="440" y="170" fill={subtextColor} fontSize="7.5" textAnchor="middle">~1200px</text>

      <rect x="25" y="188" width="590" height="18" rx="4" fill={isDark ? "#1f2937" : "#f1f5f9"} />
      <text x="320" y="200" fill={subtextColor} fontSize="9" textAnchor="middle">Elimina la necesidad de definir 10 breakpoints con @media queries solo para tipografía y espaciado.</text>
    </svg>
  );
  },

  "css-cascade-layers-stack": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* Layers Stack Diagram */}
      {/* Unlayered (Topmost Priority) */}
      <rect x="50" y="26" width="300" height="26" rx="4" fill={isDark ? "#450a0a" : "#fee2e2"} stroke="#ef4444" strokeWidth="1.5" />
      <text x="200" y="43" fill="#ef4444" fontWeight="bold" fontSize="9.5" textAnchor="middle">Estilos Sin Capa (Ganan a cualquier @layer)</text>

      {/* Layer 4: utilities */}
      <rect x="70" y="56" width="260" height="26" rx="4" fill={isDark ? "#064e3b" : "#d1fae5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="200" y="73" fill="#047857" fontWeight="bold" fontSize="9.5" textAnchor="middle">@layer utilities (Máxima prioridad de capa)</text>

      {/* Layer 3: components */}
      <rect x="90" y="86" width="220" height="26" rx="4" fill={isDark ? "#1e1b4b" : "#ede9fe"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="200" y="103" fill="#4338ca" fontWeight="bold" fontSize="9.5" textAnchor="middle">@layer components</text>

      {/* Layer 2: base */}
      <rect x="110" y="116" width="180" height="26" rx="4" fill={isDark ? "#0c4a6e" : "#e0f2fe"} stroke="#0ea5e9" strokeWidth="1.5" />
      <text x="200" y="133" fill="#0369a1" fontWeight="bold" fontSize="9.5" textAnchor="middle">@layer base</text>

      {/* Layer 1: reset */}
      <rect x="130" y="146" width="140" height="26" rx="4" fill={isDark ? "#1f2937" : "#f1f5f9"} stroke="#64748b" strokeWidth="1" />
      <text x="200" y="163" fill="#475569" fontWeight="bold" fontSize="9" textAnchor="middle">@layer reset (Base)</text>

      {/* Explanatory Rule Box */}
      <rect x="375" y="26" width="235" height="150" rx="8" fill={isDark ? "#1e1b4b" : "#f5f3ff"} stroke="#818cf8" strokeWidth="1.5" />
      <text x="492" y="46" fill="#6366f1" fontWeight="bold" fontSize="11" textAnchor="middle">Regla Fundamental @layer</text>
      <rect x="385" y="56" width="215" height="48" rx="4" fill={isDark ? "#09090b" : "#ffffff"} stroke="#c7d2fe" strokeWidth="1" />
      <text x="392" y="72" fill="#818cf8" fontSize="8" fontFamily="monospace">@layer reset, base, components, utilities;</text>
      <text x="392" y="90" fill="#10b981" fontSize="8" fontFamily="monospace">Prioridad: La capa posterior GANA SIEMPRE</text>
      <text x="385" y="122" fill={textColor} fontSize="8.5">• Una utilidad con especificidad baja (0,0,1,0)</text>
      <text x="385" y="136" fill={textColor} fontSize="8.5">  supera a un componente complejo (0,2,3,0)</text>
      <text x="385" y="152" fill="#ef4444" fontSize="8.5" fontWeight="bold">• Elimina la necesidad de !important</text>

      <rect x="25" y="188" width="590" height="18" rx="4" fill={isDark ? "#1f2937" : "#f1f5f9"} />
      <text x="320" y="200" fill={subtextColor} fontSize="9" textAnchor="middle">Con !important, el orden se invierte: las capas más tempranas ganan para permitir overrides de accesibilidad.</text>
    </svg>
  );
  },

  "css-has-parent-selector": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* Example 1: Form Validation Parent */}
      <rect x="30" y="28" width="270" height="155" rx="8" fill={isDark ? "#450a0a" : "#fef2f2"} stroke="#ef4444" strokeWidth="1.5" />
      <text x="165" y="48" fill="#ef4444" fontWeight="bold" fontSize="10.5" textAnchor="middle">.field-group:has(input:invalid)</text>
      {/* Parent Box */}
      <rect x="45" y="58" width="240" height="85" rx="6" fill={isDark ? "#1c1917" : "#ffffff"} stroke="#ef4444" strokeWidth="2" strokeDasharray="4 4" />
      <text x="55" y="75" fill="#ef4444" fontSize="8.5" fontWeight="bold">Padre Contenedor (Borde Rojo)</text>
      {/* Child Input */}
      <rect x="55" y="85" width="220" height="28" rx="4" fill={isDark ? "#7f1d1d" : "#fee2e2"} stroke="#dc2626" strokeWidth="1" />
      <text x="65" y="103" fill="#b91c1c" fontSize="8" fontFamily="monospace">&lt;input type=&quot;email&quot; value=&quot;invalido&quot;&gt;</text>
      {/* Upward Arrow */}
      <path d="M165 85 L165 65" stroke="#ef4444" strokeWidth="2" />
      <polygon points="165,62 161,69 169,69" fill="#ef4444" />
      <text x="175" y="75" fill="#ef4444" fontSize="7.5" fontWeight="bold">Afecta al Padre ↑</text>
      <text x="45" y="158" fill={textColor} fontSize="8.5">Estiliza el contenedor si el hijo es inválido</text>
      <text x="45" y="172" fill="#ef4444" fontSize="8" fontWeight="bold">Sin necesidad de listeners en JavaScript</text>

      {/* Example 2: Card with Hero Media */}
      <rect x="340" y="28" width="270" height="155" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="475" y="48" fill="#047857" fontWeight="bold" fontSize="10.5" textAnchor="middle">.card:has(&gt; .hero-media)</text>
      {/* Parent Box */}
      <rect x="355" y="58" width="240" height="85" rx="6" fill={isDark ? "#0f172a" : "#ffffff"} stroke="#10b981" strokeWidth="2" />
      <text x="365" y="75" fill="#047857" fontSize="8.5" fontWeight="bold">Card Layout (Grid Column: Span 2)</text>
      {/* Child Hero */}
      <rect x="365" y="85" width="220" height="28" rx="4" fill={isDark ? "#065f46" : "#a7f3d0"} stroke="#059669" strokeWidth="1" />
      <text x="375" y="103" fill="#064e3b" fontSize="8" fontFamily="monospace">&lt;img class=&quot;hero-media&quot;&gt; Presente</text>
      {/* Upward Arrow */}
      <path d="M475 85 L475 65" stroke="#10b981" strokeWidth="2" />
      <polygon points="475,62 471,69 479,69" fill="#10b981" />
      <text x="485" y="75" fill="#047857" fontSize="7.5" fontWeight="bold">Expande Padre ↑</text>
      <text x="355" y="158" fill={textColor} fontSize="8.5">Selección relacional de ancestros y hermanos</text>
      <text x="355" y="172" fill="#10b981" fontSize="8" fontWeight="bold">El histórico &apos;Parent Selector&apos; ya es nativo</text>

      <rect x="25" y="188" width="590" height="18" rx="4" fill={isDark ? "#1f2937" : "#f1f5f9"} />
      <text x="320" y="200" fill={subtextColor} fontSize="9" textAnchor="middle">:has() no puede anidarse dentro de otro :has() para prevenir loops infinitos en el motor de estilos.</text>
    </svg>
  );
  },

  "css-performance-critical-path": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* Timeline 1: Sin CSS Crítico */}
      <rect x="30" y="28" width="580" height="65" rx="6" fill={isDark ? "#450a0a" : "#fee2e2"} stroke="#ef4444" strokeWidth="1.5" />
      <text x="45" y="45" fill="#ef4444" fontWeight="bold" fontSize="10">Sin CSS Crítico (Bloqueo tradicional de renderizado)</text>
      <rect x="45" y="55" width="100" height="26" rx="4" fill={isDark ? "#7f1d1d" : "#fecaca"} />
      <text x="95" y="71" fill="#fff" fontSize="8" textAnchor="middle">HTML Parse</text>
      <rect x="155" y="55" width="220" height="26" rx="4" fill={isDark ? "#991b1b" : "#fca5a5"} />
      <text x="265" y="71" fill="#fff" fontSize="8" textAnchor="middle">Descarga CSS Externo (Render-blocking 1.8s)</text>
      <rect x="385" y="55" width="120" height="26" rx="4" fill={isDark ? "#b91c1c" : "#f87171"} />
      <text x="445" y="71" fill="#fff" fontSize="8" textAnchor="middle">FCP Tardío (~2.5s)</text>

      {/* Timeline 2: Con CSS Crítico */}
      <rect x="30" y="105" width="580" height="75" rx="6" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="45" y="122" fill="#047857" fontWeight="bold" fontSize="10">Con CSS Crítico Inline (Optimización de Core Web Vitals)</text>
      <rect x="45" y="132" width="140" height="26" rx="4" fill={isDark ? "#065f46" : "#a7f3d0"} />
      <text x="115" y="148" fill="#047857" fontSize="8" textAnchor="middle">&lt;style&gt; Critical Inline</text>
      <rect x="195" y="132" width="130" height="26" rx="4" fill={isDark ? "#047857" : "#6ee7b7"} />
      <text x="260" y="148" fill="#064e3b" fontSize="8" fontWeight="bold" textAnchor="middle">⚡ FCP Inmediato (0.5s)</text>
      <rect x="335" y="132" width="260" height="26" rx="4" fill={isDark ? "#064e3b" : "#d1fae5"} stroke="#10b981" strokeDasharray="3 3" />
      <text x="465" y="148" fill="#047857" fontSize="8" textAnchor="middle">CSS No Crítico Asíncrono (rel=&quot;preload&quot;)</text>
      <text x="45" y="172" fill={textColor} fontSize="8">• Minimiza TTFB y First Contentful Paint. Elimina el Flash of Unstyled Content (FOUC).</text>

      <rect x="25" y="188" width="590" height="18" rx="4" fill={isDark ? "#1f2937" : "#f1f5f9"} />
      <text x="320" y="200" fill={subtextColor} fontSize="9" textAnchor="middle">Herramientas como Critters o PostCSS extraen automáticamente el CSS crítico en el proceso de build.</text>
    </svg>
  );
  },

  "css-containment-boundary": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* Without Containment */}
      <rect x="30" y="28" width="270" height="155" rx="8" fill={isDark ? "#450a0a" : "#fee2e2"} stroke="#ef4444" strokeWidth="1.5" />
      <text x="165" y="48" fill="#ef4444" fontWeight="bold" fontSize="10.5" textAnchor="middle">Sin Containment</text>
      <rect x="45" y="58" width="240" height="50" rx="6" fill={isDark ? "#7f1d1d" : "#fecaca"} stroke="#dc2626" strokeWidth="1" />
      <text x="165" y="80" fill="#fff" fontSize="8.5" textAnchor="middle">Mutación DOM en Widget</text>
      <path d="M165 108 L165 130" stroke="#ef4444" strokeWidth="2" strokeDasharray="3 3" />
      <text x="165" y="145" fill="#b91c1c" fontSize="8" fontWeight="bold" textAnchor="middle">⚠️ Propaga Reflow a todo el Documento</text>
      <text x="45" y="165" fill={textColor} fontSize="8">• Recalcula geometría de toda la página</text>
      <text x="45" y="177" fill="#ef4444" fontSize="8" fontWeight="bold">• Causa caídas de frames en feeds largos</text>

      {/* With Containment */}
      <rect x="340" y="28" width="270" height="155" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="475" y="48" fill="#047857" fontWeight="bold" fontSize="10.5" textAnchor="middle">contain: layout paint size;</text>
      {/* Containment Firewall */}
      <rect x="355" y="58" width="240" height="60" rx="6" fill={isDark ? "#065f46" : "#a7f3d0"} stroke="#10b981" strokeWidth="2.5" />
      <text x="475" y="78" fill="#047857" fontSize="9" fontWeight="bold" textAnchor="middle">Barrera de Contención Aislada</text>
      <rect x="375" y="85" width="200" height="24" rx="4" fill={isDark ? "#047857" : "#6ee7b7"} />
      <text x="475" y="100" fill="#064e3b" fontSize="8" textAnchor="middle">Reflow Confinado Únicamente al Subárbol</text>
      <text x="355" y="140" fill={textColor} fontSize="8">• El navegador ignora el resto del DOM</text>
      <text x="355" y="155" fill={textColor} fontSize="8">• Base de &apos;content-visibility: auto&apos;</text>
      <text x="355" y="172" fill="#10b981" fontSize="8.5" fontWeight="bold">Virtualización nativa con 60 FPS estables</text>

      <rect x="25" y="188" width="590" height="18" rx="4" fill={isDark ? "#1f2937" : "#f1f5f9"} />
      <text x="320" y="200" fill={subtextColor} fontSize="9" textAnchor="middle">content-visibility: auto salta el renderizado de elementos fuera del viewport automáticamente.</text>
    </svg>
  );
  },

  "css-scroll-driven-animations": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* Browser Window Frame */}
      <rect x="30" y="28" width="300" height="155" rx="6" fill={isDark ? "#0f172a" : "#ffffff"} stroke="#6366f1" strokeWidth="1.5" />
      {/* Progress Bar Header */}
      <rect x="30" y="28" width="300" height="15" fill={isDark ? "#1e1b4b" : "#ede9fe"} />
      <rect x="30" y="28" width="180" height="15" fill="#6366f1" />
      <text x="120" y="39" fill="#fff" fontSize="7.5" fontWeight="bold">Progreso: 60% (animation-timeline: scroll())</text>

      {/* Scrollbar on right */}
      <rect x="320" y="43" width="10" height="140" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <rect x="321" y="80" width="8" height="45" rx="3" fill="#818cf8" />

      {/* Content cards inside browser */}
      <rect x="45" y="55" width="260" height="30" rx="4" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="55" y="73" fill={textColor} fontSize="8">Párrafo 1 leído...</text>
      <rect x="45" y="92" width="260" height="40" rx="4" fill={isDark ? "#064e3b" : "#d1fae5"} stroke="#10b981" strokeWidth="1" />
      <text x="55" y="112" fill="#047857" fontSize="8" fontWeight="bold">Elemento entrando (animation-timeline: view())</text>
      <text x="55" y="124" fill={subtextColor} fontSize="7">Opacidad y escala reactivas a la visibilidad</text>

      {/* Code / Features Box */}
      <rect x="350" y="28" width="260" height="155" rx="8" fill={isDark ? "#1e1b4b" : "#f5f3ff"} stroke="#818cf8" strokeWidth="1.5" />
      <text x="480" y="48" fill="#6366f1" fontWeight="bold" fontSize="11" textAnchor="middle">Scroll-Driven Nativo</text>
      <rect x="360" y="58" width="240" height="52" rx="4" fill={isDark ? "#09090b" : "#ffffff"} stroke="#c7d2fe" strokeWidth="1" />
      <text x="370" y="73" fill="#818cf8" fontSize="8" fontFamily="monospace">animation-timeline: scroll(root);</text>
      <text x="370" y="88" fill="#10b981" fontSize="8" fontFamily="monospace">animation-range: 0% 100%;</text>
      <text x="370" y="102" fill="#a5b4fc" fontSize="8" fontFamily="monospace">animation-timeline: view();</text>
      <text x="360" y="128" fill={textColor} fontSize="8.5">• 100% ejecutado en el hilo GPU Compositor</text>
      <text x="360" y="142" fill={textColor} fontSize="8.5">• Cero listeners &apos;scroll&apos; en JavaScript</text>
      <text x="360" y="160" fill="#10b981" fontSize="8.5" fontWeight="bold">Máxima fluidez y cero consumo de batería</text>

      <rect x="25" y="188" width="590" height="18" rx="4" fill={isDark ? "#1f2937" : "#f1f5f9"} />
      <text x="320" y="200" fill={subtextColor} fontSize="9" textAnchor="middle">Reemplaza bibliotecas pesadas de parallax con soporte nativo estandarizado en CSS.</text>
    </svg>
  );
  },

  "css-scope-donut-scoping": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* Scoping Root (.card) */}
      <rect x="40" y="28" width="310" height="155" rx="8" fill={isDark ? "#1e1b4b" : "#ede9fe"} stroke="#6366f1" strokeWidth="2" />
      <text x="55" y="48" fill="#818cf8" fontWeight="bold" fontSize="10.5">@scope (.card) to (.card__content)</text>
      <text x="55" y="65" fill={textColor} fontSize="8.5">Estilos aplicados a .card y su cabecera</text>

      {/* Donut Hole (.card__content - Protected Limit) */}
      <rect x="65" y="75" width="260" height="95" rx="6" fill={isDark ? "#0f172a" : "#ffffff"} stroke="#ef4444" strokeWidth="2" strokeDasharray="4 4" />
      <text x="195" y="95" fill="#ef4444" fontWeight="bold" fontSize="9.5" textAnchor="middle">Límite de Alcance (El &quot;Hueco del Donut&quot;)</text>
      <rect x="80" y="105" width="230" height="52" rx="4" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="90" y="122" fill={textColor} fontSize="8">Contenido RichText / Markdown</text>
      <text x="90" y="136" fill="#10b981" fontSize="8" fontWeight="bold">✅ Inmune a la contaminación de estilos de .card</text>
      <text x="90" y="148" fill={subtextColor} fontSize="7.5">Sus etiquetas &lt;p&gt;, &lt;a&gt; y &lt;img&gt; no sufren colisión</text>

      {/* Features Box */}
      <rect x="375" y="28" width="235" height="155" rx="8" fill={isDark ? "#1e1b4b" : "#f5f3ff"} stroke="#818cf8" strokeWidth="1.5" />
      <text x="492" y="48" fill="#6366f1" fontWeight="bold" fontSize="11" textAnchor="middle">Ventajas de @scope</text>
      <text x="385" y="75" fill={textColor} fontSize="8.5">• Delimita estilos a un subárbol sin Shadow DOM</text>
      <text x="385" y="93" fill={textColor} fontSize="8.5">• Regla de &apos;Proximidad de Alcance&apos;:</text>
      <text x="395" y="107" fill="#818cf8" fontSize="8">  Gana el scope más cercano en el DOM</text>
      <text x="385" y="125" fill={textColor} fontSize="8.5">• Elimina hashing de CSS Modules y BEM extremo</text>
      <rect x="385" y="138" width="215" height="32" rx="4" fill={isDark ? "#312e81" : "#ede9fe"} />
      <text x="492" y="152" fill="#4338ca" fontSize="8" fontWeight="bold" textAnchor="middle">Encapsulación Nativa en CSS Puro</text>

      <rect x="25" y="188" width="590" height="18" rx="4" fill={isDark ? "#1f2937" : "#f1f5f9"} />
      <text x="320" y="200" fill={subtextColor} fontSize="9" textAnchor="middle">@scope permite definir una frontera de exclusión para no sobreescribir estilos de componentes hijos anidados.</text>
    </svg>
  );
  },

  "css-view-transitions-tree": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* View Transitions Pseudo Tree */}
      <rect x="30" y="25" width="280" height="30" rx="4" fill={isDark ? "#1e1b4b" : "#ede9fe"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="170" y="44" fill="#818cf8" fontWeight="bold" fontSize="10" textAnchor="middle">::view-transition (Overlay Raíz)</text>

      {/* Tree Branch */}
      <path d="M170 55 L170 70" stroke="#6366f1" strokeWidth="1.5" />

      {/* Group */}
      <rect x="50" y="70" width="240" height="30" rx="4" fill={isDark ? "#0c4a6e" : "#e0f2fe"} stroke="#0ea5e9" strokeWidth="1.5" />
      <text x="170" y="89" fill="#0369a1" fontWeight="bold" fontSize="10" textAnchor="middle">::view-transition-group(card-img)</text>

      {/* Tree Branch to image pair */}
      <path d="M170 100 L170 115" stroke="#0ea5e9" strokeWidth="1.5" />

      {/* Old vs New Side by Side */}
      <rect x="40" y="115" width="120" height="55" rx="6" fill={isDark ? "#450a0a" : "#fee2e2"} stroke="#ef4444" strokeWidth="1" />
      <text x="100" y="132" fill="#ef4444" fontWeight="bold" fontSize="8.5" textAnchor="middle">::view-transition-old</text>
      <text x="100" y="146" fill={subtextColor} fontSize="7.5" textAnchor="middle">Captura Saliente</text>
      <text x="100" y="160" fill="#b91c1c" fontSize="7.5" fontWeight="bold" textAnchor="middle">Fade Out / Shrink</text>

      <rect x="180" y="115" width="120" height="55" rx="6" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1" />
      <text x="240" y="132" fill="#047857" fontWeight="bold" fontSize="8.5" textAnchor="middle">::view-transition-new</text>
      <text x="240" y="146" fill={subtextColor} fontSize="7.5" textAnchor="middle">Captura Entrante</text>
      <text x="240" y="160" fill="#047857" fontSize="7.5" fontWeight="bold" textAnchor="middle">Fade In / Expand</text>

      {/* Explanatory Box */}
      <rect x="340" y="25" width="270" height="155" rx="8" fill={isDark ? "#1e1b4b" : "#f5f3ff"} stroke="#818cf8" strokeWidth="1.5" />
      <text x="475" y="45" fill="#6366f1" fontWeight="bold" fontSize="11" textAnchor="middle">View Transitions API</text>
      <rect x="350" y="55" width="250" height="55" rx="4" fill={isDark ? "#09090b" : "#ffffff"} stroke="#c7d2fe" strokeWidth="1" />
      <text x="360" y="70" fill="#818cf8" fontSize="8" fontFamily="monospace">document.startViewTransition(() =&gt; &#123;</text>
      <text x="370" y="85" fill="#10b981" fontSize="8" fontFamily="monospace">  updateDOMState();</text>
      <text x="360" y="100" fill="#818cf8" fontSize="8" fontFamily="monospace">&#125;);</text>
      <text x="350" y="125" fill={textColor} fontSize="8.5">• Vinculación por nombre: view-transition-name</text>
      <text x="350" y="140" fill={textColor} fontSize="8.5">• Transición entre rutas SPA o páginas MPA nativas</text>
      <text x="350" y="158" fill="#10b981" fontSize="8.5" fontWeight="bold">Animaciones morphing fluidas sin librerías JS</text>

      <rect x="25" y="188" width="590" height="18" rx="4" fill={isDark ? "#1f2937" : "#f1f5f9"} />
      <text x="320" y="200" fill={subtextColor} fontSize="9" textAnchor="middle">Compatible con Cross-Document View Transitions en navegadores modernos mediante @view-transition &#123; navigation: auto; &#125;.</text>
    </svg>
  );
  },

  "css-design-system-architecture": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* 3 Tiers Architecture */}
      {/* Tier 1: Design Tokens */}
      <rect x="30" y="30" width="180" height="145" rx="8" fill={isDark ? "#1e1b4b" : "#ede9fe"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="120" y="50" fill="#818cf8" fontWeight="bold" fontSize="10.5" textAnchor="middle">Tier 1: Design Tokens</text>
      <rect x="40" y="60" width="160" height="24" rx="4" fill={isDark ? "#312e81" : "#c7d2fe"} />
      <text x="120" y="76" fill="#4338ca" fontSize="8" fontFamily="monospace" textAnchor="middle">:root &#123; --color-primary... &#125;</text>
      <text x="40" y="105" fill={textColor} fontSize="8.5">• Escala tipográfica rem</text>
      <text x="40" y="120" fill={textColor} fontSize="8.5">• Paletas de color semánticas</text>
      <text x="40" y="135" fill={textColor} fontSize="8.5">• Radios y sombras</text>
      <text x="40" y="155" fill="#818cf8" fontSize="8" fontWeight="bold">Base agnóstica reutilizable</text>

      {/* Tier 2: Cascade Layers */}
      <rect x="230" y="30" width="180" height="145" rx="8" fill={isDark ? "#0c4a6e" : "#e0f2fe"} stroke="#0ea5e9" strokeWidth="1.5" />
      <text x="320" y="50" fill="#0ea5e9" fontWeight="bold" fontSize="10.5" textAnchor="middle">Tier 2: @layer Hierarchy</text>
      <rect x="240" y="60" width="160" height="24" rx="4" fill={isDark ? "#075985" : "#bae6fd"} />
      <text x="320" y="76" fill="#0369a1" fontSize="8" fontFamily="monospace" textAnchor="middle">@layer tokens, comp, util</text>
      <text x="240" y="105" fill={textColor} fontSize="8.5">• Reset y Foundations</text>
      <text x="240" y="120" fill={textColor} fontSize="8.5">• Componentes aislados</text>
      <text x="240" y="135" fill={textColor} fontSize="8.5">• Utilidades prioritarias</text>
      <text x="240" y="155" fill="#0ea5e9" fontSize="8" fontWeight="bold">Cero colisiones de especificidad</text>

      {/* Tier 3: Context-Aware Components */}
      <rect x="430" y="30" width="180" height="145" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="520" y="50" fill="#10b981" fontWeight="bold" fontSize="10" textAnchor="middle">Tier 3: Modular Components</text>
      <rect x="440" y="60" width="160" height="24" rx="4" fill={isDark ? "#065f46" : "#a7f3d0"} />
      <text x="520" y="76" fill="#047857" fontSize="8" fontFamily="monospace" textAnchor="middle">@container + :has()</text>
      <text x="440" y="105" fill={textColor} fontSize="8.5">• Autónomos de la pantalla</text>
      <text x="440" y="120" fill={textColor} fontSize="8.5">• Lógica relacional con :has()</text>
      <text x="440" y="135" fill={textColor} fontSize="8.5">• Tipografía fluida con clamp()</text>
      <text x="440" y="155" fill="#10b981" fontSize="8" fontWeight="bold">100% Nativo en CSS Moderno</text>

      <rect x="25" y="188" width="590" height="18" rx="4" fill={isDark ? "#1f2937" : "#f1f5f9"} />
      <text x="320" y="200" fill={subtextColor} fontSize="9" textAnchor="middle">Permite construir Design Systems empresariales sin dependencias de frameworks ni librerías de CSS-in-JS.</text>
    </svg>
  );
  }
};
