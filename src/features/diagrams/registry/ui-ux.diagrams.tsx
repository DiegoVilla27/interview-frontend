import { DiagramRegistry } from "../diagram.types";

/** Diagramas SVG del módulo UI/UX. */
export const uiUxDiagrams: DiagramRegistry = {
  "uiux-ui-vs-ux-venn": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="32" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Diferenciación Fundamental: UI vs UX</text>

      {/* Left Circle: UI */}
      <circle cx="230" cy="115" r="75" fill={isDark ? "rgba(99, 102, 241, 0.2)" : "rgba(99, 102, 241, 0.15)"} stroke="#6366f1" strokeWidth="2" />
      <text x="180" y="85" fill="#818cf8" fontWeight="bold" fontSize="12">UI (Visual & Controls)</text>
      <text x="180" y="102" fill={textColor} fontSize="8">• Tipografía y Escalas</text>
      <text x="180" y="115" fill={textColor} fontSize="8">• Paletas de Color & Dark Mode</text>
      <text x="180" y="128" fill={textColor} fontSize="8">• Botones, Inputs & Iconos</text>
      <text x="180" y="141" fill={textColor} fontSize="8">• Microinteracciones CSS</text>
      <text x="180" y="154" fill={textColor} fontSize="8">• Layout, Grid & Spacing</text>

      {/* Right Circle: UX */}
      <circle cx="410" cy="115" r="75" fill={isDark ? "rgba(16, 185, 129, 0.2)" : "rgba(16, 185, 129, 0.15)"} stroke="#10b981" strokeWidth="2" />
      <text x="400" y="85" fill="#34d399" fontWeight="bold" fontSize="12">UX (Experience & Architecture)</text>
      <text x="400" y="102" fill={textColor} fontSize="8">• User Research & Entrevistas</text>
      <text x="400" y="115" fill={textColor} fontSize="8">• Arquitectura de Información</text>
      <text x="400" y="128" fill={textColor} fontSize="8">• User Journeys & Flows</text>
      <text x="400" y="141" fill={textColor} fontSize="8">• Pruebas de Usabilidad</text>
      <text x="400" y="154" fill={textColor} fontSize="8">• Reducción Carga Cognitiva</text>

      {/* Intersection */}
      <rect x="280" y="70" width="80" height="90" rx="6" fill={isDark ? "#1e1b4b" : "#e0e7ff"} stroke="#c084fc" strokeWidth="1.5" />
      <text x="320" y="86" fill="#c084fc" fontWeight="bold" fontSize="9" textAnchor="middle">Intersección</text>
      <text x="320" y="102" fill={textColor} fontSize="7" textAnchor="middle">• Prototipado</text>
      <text x="320" y="115" fill={textColor} fontSize="7" textAnchor="middle">• Design System</text>
      <text x="320" y="128" fill={textColor} fontSize="7" textAnchor="middle">• Accesibilidad (a11y)</text>
      <text x="320" y="141" fill={textColor} fontSize="7" textAnchor="middle">• Satisfacción Global</text>
      <text x="320" y="153" fill="#a855f7" fontSize="7" fontWeight="bold" textAnchor="middle">Producto Exitoso</text>

      <rect x="30" y="192" width="580" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">&quot;Una UI hermosa sin buena UX genera frustración; una UX impecable con mala UI produce desconfianza visual&quot;.</text>
    </svg>
  );
  },

  "uiux-wireframe-mockup-prototype": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="32" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Evolución de Fidelidad: Wireframe ➔ Mockup ➔ Prototipo</text>

      {/* Wireframe */}
      <rect x="30" y="55" width="160" height="130" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3 3" />
      <text x="110" y="75" fill="#94a3b8" fontWeight="bold" fontSize="11" textAnchor="middle">1. Wireframe (Baja)</text>
      <rect x="45" y="85" width="130" height="16" rx="3" fill={isDark ? "#334155" : "#cbd5e1"} />
      <rect x="45" y="107" width="60" height="40" rx="3" fill={isDark ? "#334155" : "#cbd5e1"} />
      <line x1="45" y1="107" x2="105" y2="147" stroke="#64748b" strokeWidth="1" />
      <line x1="105" y1="107" x2="45" y2="147" stroke="#64748b" strokeWidth="1" />
      <rect x="115" y="107" width="60" height="8" rx="2" fill={isDark ? "#334155" : "#cbd5e1"} />
      <rect x="115" y="120" width="45" height="8" rx="2" fill={isDark ? "#334155" : "#cbd5e1"} />
      <rect x="115" y="133" width="55" height="14" rx="3" fill={isDark ? "#475569" : "#94a3b8"} />
      <text x="110" y="172" fill={subtextColor} fontSize="7.5" textAnchor="middle">Estructura &amp; Jerarquía en Grises</text>

      {/* Arrow 1 */}
      <path d="M198 120 L228 120" stroke="#6366f1" strokeWidth="2" />
      <polygon points="230,120 223,116 223,124" fill="#6366f1" />

      {/* Mockup */}
      <rect x="240" y="55" width="160" height="130" rx="8" fill={isDark ? "#0f172a" : "#ffffff"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="320" y="75" fill="#818cf8" fontWeight="bold" fontSize="11" textAnchor="middle">2. Mockup (Alta)</text>
      <rect x="255" y="85" width="130" height="16" rx="3" fill="#6366f1" />
      <text x="320" y="96" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle">Acme Analytics SaaS</text>
      <rect x="255" y="107" width="60" height="40" rx="3" fill="#38bdf8" />
      <text x="285" y="129" fill="#0369a1" fontSize="7" fontWeight="bold" textAnchor="middle">Chart UI</text>
      <rect x="325" y="107" width="60" height="8" rx="2" fill={isDark ? "#334155" : "#e2e8f0"} />
      <rect x="325" y="120" width="45" height="8" rx="2" fill={isDark ? "#334155" : "#e2e8f0"} />
      <rect x="325" y="133" width="60" height="14" rx="3" fill="#10b981" />
      <text x="355" y="143" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle">CTA Button</text>
      <text x="320" y="172" fill={subtextColor} fontSize="7.5" textAnchor="middle">Colores, Tipografía y Look Final</text>

      {/* Arrow 2 */}
      <path d="M408 120 L438 120" stroke="#10b981" strokeWidth="2" />
      <polygon points="440,120 433,116 433,124" fill="#10b981" />

      {/* Prototype */}
      <rect x="450" y="55" width="160" height="130" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="530" y="75" fill="#34d399" fontWeight="bold" fontSize="11" textAnchor="middle">3. Prototipo (Interactivo)</text>
      <circle cx="480" cy="100" r="14" fill="#10b981" opacity="0.3" />
      <path d="M480 93 L480 107 M473 100 L487 100" stroke="#10b981" strokeWidth="2" />
      <rect x="505" y="92" width="90" height="16" rx="4" fill="#10b981" />
      <text x="550" y="103" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle">State: Hover/Active</text>
      <path d="M480 120 C500 140, 540 140, 570 125" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 3" />
      <text x="530" y="150" fill="#f59e0b" fontSize="7" fontWeight="bold" textAnchor="middle">Navegación &amp; Microinteracciones</text>
      <text x="530" y="172" fill={subtextColor} fontSize="7.5" textAnchor="middle">Simulación de Flujo Real y Testeo</text>

      <rect x="30" y="192" width="580" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">Validar en Wireframe evita costosos retrabajos en código o en alta fidelidad.</text>
    </svg>
  );
  },

  "uiux-responsive-vs-adaptive-layout": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="32" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Responsive Design (Fluido) vs Adaptive Design (Rígido)</text>

      {/* Responsive */}
      <rect x="30" y="50" width="275" height="135" rx="8" fill={isDark ? "#1e1b4b" : "#eef2ff"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="167" y="70" fill="#818cf8" fontWeight="bold" fontSize="11" textAnchor="middle">Diseño Responsive (Fluido)</text>
      <rect x="45" y="80" width="245" height="40" rx="4" fill={isDark ? "#312e81" : "#c7d2fe"} />
      <text x="167" y="98" fill="#e0e7ff" fontSize="8" textAnchor="middle">1 Único Layout que escala continuamente</text>
      <text x="167" y="112" fill="#c7d2fe" fontSize="7" textAnchor="middle">CSS Grid, Flexbox, clamp(1rem, 2.5vw, 2rem)</text>
      <text x="55" y="138" fill={textColor} fontSize="8">• Se adapta a resoluciones infinitas</text>
      <text x="55" y="152" fill={textColor} fontSize="8">• Container Queries (@container) por componente</text>
      <text x="55" y="166" fill="#10b981" fontSize="8" fontWeight="bold">✅ Estándar moderno omnicanal</text>

      {/* Adaptive */}
      <rect x="335" y="50" width="275" height="135" rx="8" fill={isDark ? "#451a03" : "#fff7ed"} stroke="#f97316" strokeWidth="1.5" />
      <text x="472" y="70" fill="#fb923c" fontWeight="bold" fontSize="11" textAnchor="middle">Diseño Adaptativo (Breakpoints Fijos)</text>
      <div className="flex space-x-2">
        <rect x="350" y="80" width="70" height="40" rx="4" fill={isDark ? "#7c2d12" : "#ffedd5"} stroke="#ea580c" />
        <text x="385" y="97" fill="#ea580c" fontSize="7" fontWeight="bold" textAnchor="middle">Mobile</text>
        <text x="385" y="110" fill="#ea580c" fontSize="6" textAnchor="middle">375px fijo</text>

        <rect x="430" y="80" width="80" height="40" rx="4" fill={isDark ? "#7c2d12" : "#ffedd5"} stroke="#ea580c" />
        <text x="470" y="97" fill="#ea580c" fontSize="7" fontWeight="bold" textAnchor="middle">Tablet</text>
        <text x="470" y="110" fill="#ea580c" fontSize="6" textAnchor="middle">768px fijo</text>

        <rect x="520" y="80" width="80" height="40" rx="4" fill={isDark ? "#7c2d12" : "#ffedd5"} stroke="#ea580c" />
        <text x="560" y="97" fill="#ea580c" fontSize="7" fontWeight="bold" textAnchor="middle">Desktop</text>
        <text x="560" y="110" fill="#ea580c" fontSize="6" textAnchor="middle">1280px fijo</text>
      </div>
      <text x="350" y="138" fill={textColor} fontSize="8">• Servir layouts estáticos por dispositivo detectado</text>
      <text x="350" y="152" fill={textColor} fontSize="8">• Pantallas intermedias (foldables) muestran bandas vacías</text>
      <text x="350" y="166" fill="#ef4444" fontSize="8" fontWeight="bold">⚠️ Mantenimiento fragmentado y costoso</text>

      <rect x="30" y="192" width="580" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">La Web actual privilegia Responsive con Container Queries para componibilidad atómica.</text>
    </svg>
  );
  },

  "uiux-wcag-pour-principles": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="32" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">WCAG 2.2: Los 4 Pilares P.O.U.R. y Niveles de Conformidad</text>

      {/* P */}
      <rect x="25" y="52" width="135" height="110" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="92" y="72" fill="#34d399" fontWeight="bold" fontSize="11" textAnchor="middle">1. Perceptible</text>
      <text x="35" y="92" fill={textColor} fontSize="7.5">• Texto alternativo en img</text>
      <text x="35" y="107" fill={textColor} fontSize="7.5">• Contraste &gt;= 4.5:1 (AA)</text>
      <text x="35" y="122" fill={textColor} fontSize="7.5">• Subtítulos &amp; transcripciones</text>
      <text x="35" y="137" fill={textColor} fontSize="7.5">• No solo fiarse del color</text>

      {/* O */}
      <rect x="175" y="52" width="135" height="110" rx="8" fill={isDark ? "#1e1b4b" : "#eef2ff"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="242" y="72" fill="#818cf8" fontWeight="bold" fontSize="11" textAnchor="middle">2. Operable</text>
      <text x="185" y="92" fill={textColor} fontSize="7.5">• Navegable por teclado</text>
      <text x="185" y="107" fill={textColor} fontSize="7.5">• :focus-visible sin trampas</text>
      <text x="185" y="122" fill={textColor} fontSize="7.5">• Touch Target &gt;= 24-44px</text>
      <text x="185" y="137" fill={textColor} fontSize="7.5">• Tiempo suficiente lectura</text>

      {/* U */}
      <rect x="325" y="52" width="135" height="110" rx="8" fill={isDark ? "#451a03" : "#fff7ed"} stroke="#f97316" strokeWidth="1.5" />
      <text x="392" y="72" fill="#fb923c" fontWeight="bold" fontSize="11" textAnchor="middle">3. Understandable</text>
      <text x="335" y="92" fill={textColor} fontSize="7.5">• Texto legible y claro</text>
      <text x="335" y="107" fill={textColor} fontSize="7.5">• Navegación consistente</text>
      <text x="335" y="122" fill={textColor} fontSize="7.5">• Prevención y ayuda error</text>
      <text x="335" y="137" fill={textColor} fontSize="7.5">• aria-invalid &amp; descripciones</text>

      {/* R */}
      <rect x="475" y="52" width="140" height="110" rx="8" fill={isDark ? "#3b0764" : "#faf5ff"} stroke="#a855f7" strokeWidth="1.5" />
      <text x="545" y="72" fill="#c084fc" fontWeight="bold" fontSize="11" textAnchor="middle">4. Robust</text>
      <text x="485" y="92" fill={textColor} fontSize="7.5">• HTML semántico nativo</text>
      <text x="485" y="107" fill={textColor} fontSize="7.5">• Compatible lectores pantalla</text>
      <text x="485" y="122" fill={textColor} fontSize="7.5">• ARIA 1.2 roles y estados</text>
      <text x="485" y="137" fill={textColor} fontSize="7.5">• Compatibilidad asistiva</text>

      {/* Level badges */}
      <rect x="25" y="172" width="185" height="22" rx="4" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#64748b" />
      <text x="117" y="187" fill="#64748b" fontSize="8" fontWeight="bold" textAnchor="middle">Nivel A: Esencial Mínimo</text>

      <rect x="225" y="172" width="185" height="22" rx="4" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" />
      <text x="317" y="187" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">Nivel AA: Estándar Legal Requerido</text>

      <rect x="425" y="172" width="190" height="22" rx="4" fill={isDark ? "#1e1b4b" : "#eef2ff"} stroke="#6366f1" />
      <text x="520" y="187" fill="#6366f1" fontSize="8" fontWeight="bold" textAnchor="middle">Nivel AAA: Máxima Accesibilidad</text>
    </svg>
  );
  },

  "uiux-visual-hierarchy-scale": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="32" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Jerarquía Visual: Escala Tipográfica Modular &amp; Patrones de Escaneo</text>

      {/* Left: Typographic Scale */}
      <rect x="30" y="50" width="280" height="135" rx="8" fill={isDark ? "#1e1b4b" : "#eef2ff"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="170" y="68" fill="#818cf8" fontWeight="bold" fontSize="10" textAnchor="middle">Escala Tipográfica (Major Third - Ratio 1.25)</text>

      <text x="45" y="93" fill="#6366f1" fontWeight="800" fontSize="16">H1: Titular Principal (32px Bold)</text>
      <text x="45" y="115" fill="#4f46e5" fontWeight="700" fontSize="13">H2: Subtítulo de Sección (24px Semibold)</text>
      <text x="45" y="135" fill={textColor} fontWeight="500" fontSize="10">H3: Encabezado de Tarjeta (19px Medium)</text>
      <text x="45" y="153" fill={textColor} fontSize="8.5">Body: Texto de párrafo legible con buen line-height (16px / 1.6)</text>
      <text x="45" y="172" fill={subtextColor} fontSize="7.5">Caption: Metadatos, etiquetas y notas secundarias (12px Muted)</text>

      {/* Right: Scanning Patterns */}
      <rect x="330" y="50" width="280" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="470" y="68" fill="#34d399" fontWeight="bold" fontSize="10" textAnchor="middle">Patrones de Escaneo Ocular (Nielsen Norman)</text>

      {/* F-Pattern */}
      <rect x="345" y="80" width="120" height="85" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} stroke="#10b981" strokeWidth="1" />
      <text x="405" y="94" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">F-Pattern (Lectura)</text>
      <path d="M355 105 L450 105 M355 118 L420 118 M355 130 L355 155 M355 142 L390 142" stroke="#ef4444" strokeWidth="2" />
      <text x="405" y="158" fill={subtextColor} fontSize="6.5" textAnchor="middle">Blogs, Noticias &amp; Textos</text>

      {/* Z-Pattern */}
      <rect x="475" y="80" width="120" height="85" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} stroke="#10b981" strokeWidth="1" />
      <text x="535" y="94" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">Z-Pattern (Conversión)</text>
      <path d="M485 105 L585 105 L485 145 L585 145" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 3" />
      <circle cx="585" cy="145" r="4" fill="#10b981" />
      <text x="535" y="158" fill={subtextColor} fontSize="6.5" textAnchor="middle">Landing Pages &amp; CTAs</text>

      <rect x="30" y="192" width="580" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">El ojo humano prioriza: 1° Contraste alto, 2° Tamaño dominante, 3° Ubicación en zonas de entrada.</text>
    </svg>
  );
  },

  "uiux-nielsen-heuristics-radar": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="32" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Las 10 Heurísticas de Usabilidad de Jakob Nielsen</text>

      {/* Group 1: Feedback & Control */}
      <rect x="25" y="50" width="185" height="135" rx="8" fill={isDark ? "#1e1b4b" : "#eef2ff"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="117" y="68" fill="#818cf8" fontWeight="bold" fontSize="10" textAnchor="middle">1. Feedback &amp; Control</text>
      <text x="35" y="88" fill={textColor} fontSize="7.5">#1. Visibilidad del estado del sistema</text>
      <text x="35" y="100" fill={subtextColor} fontSize="6.5">  (Spinners, progress bar, toast)</text>
      <text x="35" y="116" fill={textColor} fontSize="7.5">#2. Coincidencia sistema/mundo real</text>
      <text x="35" y="128" fill={subtextColor} fontSize="6.5">  (Metáforas familiares: carpeta, papelera)</text>
      <text x="35" y="144" fill={textColor} fontSize="7.5">#3. Control y libertad del usuario</text>
      <text x="35" y="156" fill={subtextColor} fontSize="6.5">  (Botón Cancelar, Undo / Deshacer, Salida)</text>

      {/* Group 2: Consistencia & Prevención */}
      <rect x="225" y="50" width="190" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="320" y="68" fill="#34d399" fontWeight="bold" fontSize="10" textAnchor="middle">2. Consistencia &amp; Prevención</text>
      <text x="235" y="88" fill={textColor} fontSize="7.5">#4. Consistencia y estándares (Leyes UI)</text>
      <text x="235" y="100" fill={subtextColor} fontSize="6.5">  (Patrones iguales en toda la plataforma)</text>
      <text x="235" y="116" fill={textColor} fontSize="7.5">#5. Prevención proactiva de errores</text>
      <text x="235" y="128" fill={subtextColor} fontSize="6.5">  (Confirmación antes de borrar, inputs guiados)</text>
      <text x="235" y="144" fill={textColor} fontSize="7.5">#6. Reconocimiento antes que recuerdo</text>
      <text x="235" y="156" fill={subtextColor} fontSize="6.5">  (Opciones visibles sin memorizar)</text>

      {/* Group 3: Flexibilidad & Eficiencia */}
      <rect x="430" y="50" width="185" height="135" rx="8" fill={isDark ? "#451a03" : "#fff7ed"} stroke="#f97316" strokeWidth="1.5" />
      <text x="522" y="68" fill="#fb923c" fontWeight="bold" fontSize="10" textAnchor="middle">3. Eficiencia &amp; Claridad</text>
      <text x="440" y="88" fill={textColor} fontSize="7.5">#7. Flexibilidad y atajos de teclado</text>
      <text x="440" y="100" fill={subtextColor} fontSize="6.5">  (Cmd+K, aceleradores para pros)</text>
      <text x="440" y="116" fill={textColor} fontSize="7.5">#8. Diseño estético y minimalista</text>
      <text x="440" y="128" fill={subtextColor} fontSize="6.5">  (Cero información irrelevante)</text>
      <text x="440" y="144" fill={textColor} fontSize="7.5">#9. Ayuda ante errores constructiva</text>
      <text x="440" y="156" fill={textColor} fontSize="7.5">#10. Documentación contextual y FAQ</text>

      <rect x="30" y="192" width="580" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">El 85% de los problemas de usabilidad son descubiertos evaluando contra estas 10 heurísticas.</text>
    </svg>
  );
  },

  "uiux-fitts-law-thumb-zone": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="32" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Ley de Fitts &amp; Ergonomía Móvil (The Thumb Zone)</text>

      {/* Formula box */}
      <rect x="30" y="50" width="230" height="135" rx="8" fill={isDark ? "#1e1b4b" : "#eef2ff"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="145" y="70" fill="#818cf8" fontWeight="bold" fontSize="10" textAnchor="middle">Ecuación de Paul Fitts (1954)</text>
      <rect x="45" y="80" width="200" height="28" rx="4" fill={isDark ? "#312e81" : "#c7d2fe"} />
      <text x="145" y="98" fill="#e0e7ff" fontSize="10" fontWeight="bold" textAnchor="middle">MT = a + b · log2( 2D / W )</text>
      <text x="45" y="125" fill={textColor} fontSize="8">• <tspan fontWeight="bold">D (Distance):</tspan> Distancia al objetivo</text>
      <text x="45" y="140" fill={textColor} fontSize="8">• <tspan fontWeight="bold">W (Width):</tspan> Tamaño / ancho del botón</text>
      <text x="45" y="155" fill={textColor} fontSize="8">• <tspan fontWeight="bold">Target Size:</tspan> Min 44x44px iOS / 48x48px Android</text>
      <text x="45" y="172" fill="#10b981" fontSize="7.5" fontWeight="bold">A mayor tamaño y menor distancia = Menor tiempo</text>

      {/* Mobile Thumb Zone */}
      <rect x="280" y="45" width="130" height="145" rx="16" fill={isDark ? "#0f172a" : "#ffffff"} stroke="#64748b" strokeWidth="2" />
      <rect x="330" y="50" width="30" height="4" rx="2" fill="#64748b" />

      {/* Red Zone (Hard) */}
      <path d="M 285 70 C 330 65, 370 65, 405 70 L 405 95 C 370 90, 330 90, 285 95 Z" fill="#ef4444" opacity="0.35" />
      <text x="345" y="83" fill="#ef4444" fontSize="7" fontWeight="bold" textAnchor="middle">Hard (Difícil)</text>

      {/* Yellow Zone (Stretch) */}
      <path d="M 285 96 C 330 91, 370 91, 405 96 L 405 130 C 370 120, 330 120, 285 130 Z" fill="#f59e0b" opacity="0.35" />
      <text x="345" y="114" fill="#f59e0b" fontSize="7" fontWeight="bold" textAnchor="middle">Stretch (Estirado)</text>

      {/* Green Zone (Natural) */}
      <path d="M 285 131 C 330 121, 370 121, 405 131 L 405 180 C 405 185, 285 185, 285 180 Z" fill="#10b981" opacity="0.4" />
      <text x="345" y="155" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">Natural Reach</text>
      <text x="345" y="167" fill="#047857" fontSize="6.5" textAnchor="middle">(CTAs Primarios &amp; Tabs)</text>

      {/* Right: Best practices */}
      <rect x="430" y="50" width="185" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="522" y="70" fill="#34d399" fontWeight="bold" fontSize="10" textAnchor="middle">Reglas de Oro Ergonómicas</text>
      <text x="440" y="92" fill={textColor} fontSize="8">1. Barra de navegación inferior</text>
      <text x="440" y="105" fill={subtextColor} fontSize="7">  (Bottom navigation bar al pulgar)</text>
      <text x="440" y="122" fill={textColor} fontSize="8">2. Bordes y Esquinas infinitas</text>
      <text x="440" y="135" fill={subtextColor} fontSize="7">  (Borde de pantalla = W infinito en mouse)</text>
      <text x="440" y="152" fill={textColor} fontSize="8">3. Acciones destructivas arriba</text>
      <text x="440" y="165" fill={subtextColor} fontSize="7">  (Borrar cuenta en Hard Zone previene tap accidental)</text>

      <rect x="30" y="192" width="580" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">Fitts explica por qué los Floating Action Buttons (FAB) y Bottom Sheets dominan el diseño móvil moderno.</text>
    </svg>
  );
  },

  "uiux-hick-law-cognitive-load": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="32" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Ley de Hick-Hyman &amp; Patrón Progressive Disclosure</text>

      {/* Left Curve Graph */}
      <rect x="30" y="50" width="270" height="135" rx="8" fill={isDark ? "#1e1b4b" : "#eef2ff"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="165" y="68" fill="#818cf8" fontWeight="bold" fontSize="10" textAnchor="middle">Curva Logarítmica de Hick: RT = b · log2(n + 1)</text>
      {/* Axis */}
      <line x1="50" y1="165" x2="280" y2="165" stroke={textColor} strokeWidth="1.5" />
      <line x1="50" y1="165" x2="50" y2="80" stroke={textColor} strokeWidth="1.5" />
      <text x="165" y="178" fill={subtextColor} fontSize="7" textAnchor="middle">Número de Opciones (n) ➔</text>
      <text x="40" y="85" fill={subtextColor} fontSize="7" textAnchor="middle">Tiempo</text>

      {/* Log curve */}
      <path d="M 50 165 Q 100 110, 280 95" stroke="#ef4444" strokeWidth="2.5" />
      <circle cx="90" cy="138" r="4" fill="#10b981" />
      <text x="90" y="130" fill="#10b981" fontSize="7" fontWeight="bold" textAnchor="middle">3 opciones (Rápido)</text>

      <circle cx="250" cy="98" r="4" fill="#ef4444" />
      <text x="235" y="90" fill="#ef4444" fontSize="7" fontWeight="bold" textAnchor="middle">30 opciones (Parálisis)</text>

      {/* Right: Progressive Disclosure Pattern */}
      <rect x="320" y="50" width="290" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="465" y="68" fill="#34d399" fontWeight="bold" fontSize="10" textAnchor="middle">Solución UX: Divulgación Progresiva</text>

      {/* Monolith vs Wizard */}
      <rect x="335" y="80" width="125" height="95" rx="6" fill={isDark ? "#450a0a" : "#fee2e2"} stroke="#ef4444" />
      <text x="397" y="96" fill="#ef4444" fontSize="8" fontWeight="bold" textAnchor="middle">Formulario Monolítico</text>
      <text x="345" y="112" fill={textColor} fontSize="6.5">• 25 campos en 1 sola pantalla</text>
      <text x="345" y="125" fill={textColor} fontSize="6.5">• Sobrecarga cognitiva</text>
      <text x="345" y="138" fill={textColor} fontSize="6.5">• Tasa de abandono: &gt; 65%</text>
      <text x="397" y="162" fill="#ef4444" fontSize="7" fontWeight="bold" textAnchor="middle">❌ Parálisis por Análisis</text>

      <rect x="475" y="80" width="125" height="95" rx="6" fill={isDark ? "#065f46" : "#d1fae5"} stroke="#10b981" />
      <text x="537" y="96" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">Wizard en 3 Pasos</text>
      <text x="485" y="112" fill={textColor} fontSize="6.5">• Paso 1: Cuenta (3 inputs)</text>
      <text x="485" y="125" fill={textColor} fontSize="6.5">• Paso 2: Envío (4 inputs)</text>
      <text x="485" y="138" fill={textColor} fontSize="6.5">• Paso 3: Pago seguro</text>
      <text x="537" y="162" fill="#10b981" fontSize="7" fontWeight="bold" textAnchor="middle">✅ Conversión Óptima</text>

      <rect x="30" y="192" width="580" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">Menos opciones por pantalla reduce el tiempo de decisión y la fricción de usuario.</text>
    </svg>
  );
  },

  "uiux-design-tokens-architecture": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Arquitectura de Design Tokens de 3 Niveles (W3C DTCG)</text>

      {/* Level 1: Global */}
      <rect x="25" y="50" width="170" height="105" rx="8" fill={isDark ? "#1e1b4b" : "#eef2ff"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="110" y="68" fill="#818cf8" fontWeight="bold" fontSize="9" textAnchor="middle">1. Global Tokens (Raw)</text>
      <rect x="35" y="78" width="150" height="18" rx="3" fill={isDark ? "#312e81" : "#c7d2fe"} />
      <text x="42" y="90" fill="#e0e7ff" fontSize="7" fontFamily="monospace">blue-500: #3b82f6</text>
      <rect x="35" y="100" width="150" height="18" rx="3" fill={isDark ? "#312e81" : "#c7d2fe"} />
      <text x="42" y="112" fill="#e0e7ff" fontSize="7" fontFamily="monospace">space-4: 16px</text>
      <text x="110" y="142" fill={subtextColor} fontSize="6.5" textAnchor="middle">Valores crudos agnósticos de contexto</text>

      {/* Arrow 1 */}
      <path d="M198 102 L222 102" stroke="#6366f1" strokeWidth="2" />
      <polygon points="224,102 217,98 217,106" fill="#6366f1" />

      {/* Level 2: Semantic */}
      <rect x="228" y="50" width="180" height="105" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="318" y="68" fill="#34d399" fontWeight="bold" fontSize="9" textAnchor="middle">2. Semantic Tokens (Alias)</text>
      <rect x="238" y="78" width="160" height="18" rx="3" fill={isDark ? "#065f46" : "#a7f3d0"} />
      <text x="245" y="90" fill="#064e3b" fontSize="7" fontFamily="monospace">color-primary: $blue-500</text>
      <rect x="238" y="100" width="160" height="18" rx="3" fill={isDark ? "#065f46" : "#a7f3d0"} />
      <text x="245" y="112" fill="#064e3b" fontSize="7" fontFamily="monospace">surface-card: $gray-100</text>
      <text x="318" y="142" fill={subtextColor} fontSize="6.5" textAnchor="middle">Decisión de intención semántica (Theme)</text>

      {/* Arrow 2 */}
      <path d="M410 102 L434 102" stroke="#10b981" strokeWidth="2" />
      <polygon points="436,102 429,98 429,106" fill="#10b981" />

      {/* Level 3: Component */}
      <rect x="440" y="50" width="175" height="105" rx="8" fill={isDark ? "#451a03" : "#fff7ed"} stroke="#f97316" strokeWidth="1.5" />
      <text x="527" y="68" fill="#fb923c" fontWeight="bold" fontSize="9" textAnchor="middle">3. Component Tokens</text>
      <rect x="450" y="78" width="155" height="18" rx="3" fill={isDark ? "#7c2d12" : "#fed7aa"} />
      <text x="457" y="90" fill="#7c2d12" fontSize="7" fontFamily="monospace">btn-cta-bg: $color-primary</text>
      <rect x="450" y="100" width="155" height="18" rx="3" fill={isDark ? "#7c2d12" : "#fed7aa"} />
      <text x="457" y="112" fill="#7c2d12" fontSize="7" fontFamily="monospace">btn-cta-pad: $space-4</text>
      <text x="527" y="142" fill={subtextColor} fontSize="6.5" textAnchor="middle">Acoplado a un componente específico</text>

      {/* Pipeline Output */}
      <rect x="25" y="165" width="590" height="42" rx="6" fill={isDark ? "#0f172a" : "#f1f5f9"} stroke="#94a3b8" />
      <text x="80" y="188" fill="#94a3b8" fontWeight="bold" fontSize="8">Figma / Tokens Studio</text>
      <path d="M150 185 L180 185" stroke="#94a3b8" strokeWidth="1.5" />
      <text x="240" y="188" fill="#6366f1" fontWeight="bold" fontSize="8">Style Dictionary Engine</text>
      <path d="M310 185 L340 185" stroke="#6366f1" strokeWidth="1.5" />
      <text x="385" y="180" fill="#38bdf8" fontSize="7.5">CSS Variables / SCSS</text>
      <text x="480" y="180" fill="#f43f5e" fontSize="7.5">Swift / SwiftUI (iOS)</text>
      <text x="560" y="180" fill="#10b981" fontSize="7.5">Compose (Android)</text>
    </svg>
  );
  },

  "uiux-usability-testing-vs-ab": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="32" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Investigación Cualitativa (Usability Test) vs Cuantitativa (A/B Test)</text>

      {/* Usability Testing */}
      <rect x="30" y="50" width="275" height="135" rx="8" fill={isDark ? "#1e1b4b" : "#eef2ff"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="167" y="70" fill="#818cf8" fontWeight="bold" fontSize="11" textAnchor="middle">Test de Usabilidad (Cualitativo)</text>
      <text x="167" y="85" fill="#a5b4fc" fontSize="8" fontWeight="bold" textAnchor="middle">Explica el &quot;¿POR QUÉ?&quot; de la fricción humana</text>
      <text x="45" y="105" fill={textColor} fontSize="8">• <tspan fontWeight="bold">Muestra:</tspan> 5 a 8 usuarios representativos</text>
      <text x="45" y="120" fill={textColor} fontSize="8">• <tspan fontWeight="bold">Método:</tspan> Protocolo &apos;Think Aloud&apos; y tareas guiadas</text>
      <text x="45" y="135" fill={textColor} fontSize="8">• <tspan fontWeight="bold">Outputs:</tspan> Expresiones, confusión, bloqueos de UX</text>
      <text x="45" y="150" fill={textColor} fontSize="8">• <tspan fontWeight="bold">Momento:</tspan> Fase de prototipo y diseño iterativo</text>
      <text x="167" y="172" fill="#6366f1" fontSize="8" fontWeight="bold" textAnchor="middle">Descubre el 85% de problemas de diseño</text>

      {/* A/B Testing */}
      <rect x="335" y="50" width="275" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="472" y="70" fill="#34d399" fontWeight="bold" fontSize="11" textAnchor="middle">A/B Testing (Cuantitativo)</text>
      <text x="472" y="85" fill="#6ee7b7" fontSize="8" fontWeight="bold" textAnchor="middle">Mide el &quot;¿QUÉ OCURRIÓ?&quot; a gran escala</text>
      <text x="350" y="105" fill={textColor} fontSize="8">• <tspan fontWeight="bold">Muestra:</tspan> Miles de usuarios en producción</text>
      <text x="350" y="120" fill={textColor} fontSize="8">• <tspan fontWeight="bold">Método:</tspan> Split traffic 50/50 con significancia estadística</text>
      <text x="350" y="135" fill={textColor} fontSize="8">• <tspan fontWeight="bold">Outputs:</tspan> Conversión (CTR, Checkout, Retention)</text>
      <text x="350" y="150" fill={textColor} fontSize="8">• <tspan fontWeight="bold">Riesgo:</tspan> Maximiza métricas locales sin saber la causa</text>
      <text x="472" y="172" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">Valida impacto económico en producción</text>

      <rect x="30" y="192" width="580" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">Sinergia perfecta: El test de usabilidad genera la hipótesis y el test A/B valida el resultado estadístico.</text>
    </svg>
  );
  },

  "uiux-microinteractions-anatomy": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Anatomía de una Microinteracción (Modelo de Dan Saffer)</text>

      {/* Step 1: Trigger */}
      <rect x="25" y="52" width="130" height="110" rx="8" fill={isDark ? "#1e1b4b" : "#eef2ff"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="90" y="72" fill="#818cf8" fontWeight="bold" fontSize="10" textAnchor="middle">1. Trigger (Disparador)</text>
      <text x="35" y="92" fill={textColor} fontSize="7.5">• Usuario: Click, Tap, Hover, Swipe</text>
      <text x="35" y="110" fill={textColor} fontSize="7.5">• Sistema: Notificación push, batería &lt; 20%</text>
      <text x="90" y="145" fill="#818cf8" fontSize="7" fontWeight="bold" textAnchor="middle">Inicia el evento</text>

      {/* Arrow 1 */}
      <path d="M157 107 L177 107" stroke="#6366f1" strokeWidth="2" />
      <polygon points="179,107 172,103 172,111" fill="#6366f1" />

      {/* Step 2: Rules */}
      <rect x="180" y="52" width="130" height="110" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="245" y="72" fill="#34d399" fontWeight="bold" fontSize="10" textAnchor="middle">2. Rules (Reglas)</text>
      <text x="190" y="92" fill={textColor} fontSize="7.5">• Lógica de negocio y transición</text>
      <text x="190" y="110" fill={textColor} fontSize="7.5">• Si switch = off ➔ cambia a on</text>
      <text x="190" y="125" fill={textColor} fontSize="7.5">• Bloquear si input inválido</text>
      <text x="245" y="145" fill="#34d399" fontSize="7" fontWeight="bold" textAnchor="middle">Lógica interna invisible</text>

      {/* Arrow 2 */}
      <path d="M312 107 L332 107" stroke="#10b981" strokeWidth="2" />
      <polygon points="334,107 327,103 327,111" fill="#10b981" />

      {/* Step 3: Feedback */}
      <rect x="335" y="52" width="130" height="110" rx="8" fill={isDark ? "#451a03" : "#fff7ed"} stroke="#f97316" strokeWidth="1.5" />
      <text x="400" y="72" fill="#fb923c" fontWeight="bold" fontSize="10" textAnchor="middle">3. Feedback (Percepción)</text>
      <text x="345" y="92" fill={textColor} fontSize="7.5">• Animación física elástica</text>
      <text x="345" y="110" fill={textColor} fontSize="7.5">• Vibración háptica en móvil</text>
      <text x="345" y="125" fill={textColor} fontSize="7.5">• Sonido de confirmación</text>
      <text x="400" y="145" fill="#fb923c" fontSize="7" fontWeight="bold" textAnchor="middle">Hace visible la regla</text>

      {/* Arrow 3 */}
      <path d="M467 107 L487 107" stroke="#f97316" strokeWidth="2" />
      <polygon points="489,107 482,103 482,111" fill="#f97316" />

      {/* Step 4: Loops & Modes */}
      <rect x="490" y="52" width="125" height="110" rx="8" fill={isDark ? "#3b0764" : "#faf5ff"} stroke="#a855f7" strokeWidth="1.5" />
      <text x="552" y="72" fill="#c084fc" fontWeight="bold" fontSize="10" textAnchor="middle">4. Loops &amp; Modes</text>
      <text x="500" y="92" fill={textColor} fontSize="7.5">• ¿Se repite el sonido?</text>
      <text x="500" y="110" fill={textColor} fontSize="7.5">• ¿Cambia a modo nocturno?</text>
      <text x="500" y="125" fill={textColor} fontSize="7.5">• ¿Persiste el estado en LocalStorage?</text>
      <text x="552" y="145" fill="#c084fc" fontSize="7" fontWeight="bold" textAnchor="middle">Meta-comportamiento</text>

      <rect x="30" y="175" width="580" height="30" rx="4" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="193" fill={subtextColor} fontSize="7.5" textAnchor="middle">Ejemplo: Al darle &quot;Me gusta&quot; en Twitter: Tap (Trigger) ➔ Heart salta con chispas (Feedback) ➔ Estado salvado (Loop).</text>
    </svg>
  );
  },

  "uiux-jakobs-law-mental-models": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Ley de Jakob: Modelos Mentales &amp; Patrones Canónicos</text>

      <rect x="30" y="48" width="580" height="30" rx="6" fill={isDark ? "#1e1b4b" : "#eef2ff"} stroke="#6366f1" strokeWidth="1" />
      <text x="320" y="66" fill="#818cf8" fontSize="9" fontWeight="bold" textAnchor="middle">&quot;Los usuarios pasan el 99% de su tiempo en OTROS sitios web; esperan que el tuyo funcione igual&quot;</text>

      {/* Left Box: Conventional Layout */}
      <rect x="30" y="88" width="275" height="98" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="167" y="105" fill="#34d399" fontWeight="bold" fontSize="9.5" textAnchor="middle">Convenciones Canónicas (Zero Fricción)</text>
      <rect x="42" y="115" width="250" height="20" rx="3" fill={isDark ? "#065f46" : "#a7f3d0"} />
      <text x="50" y="128" fill="#064e3b" fontSize="7" fontWeight="bold">Logo Superior Izq (Home)</text>
      <text x="160" y="128" fill="#064e3b" fontSize="7" fontWeight="bold">Search Bar Central</text>
      <text x="250" y="128" fill="#064e3b" fontSize="7" fontWeight="bold">Carrito / Perfil Der</text>
      <text x="42" y="145" fill={textColor} fontSize="7">• Icono de Lupa = Buscar | Icono de Engranaje = Ajustes</text>
      <text x="42" y="157" fill={textColor} fontSize="7">• Flecha de Navegación Atrás en la esquina superior izquierda</text>
      <text x="42" y="172" fill="#10b981" fontSize="7.5" fontWeight="bold">Facilita adopción inmediata por familiaridad</text>

      {/* Right Box: Innovation Mistakes */}
      <rect x="335" y="88" width="275" height="98" rx="8" fill={isDark ? "#450a0a" : "#fee2e2"} stroke="#ef4444" strokeWidth="1.5" />
      <text x="472" y="105" fill="#ef4444" fontWeight="bold" fontSize="9.5" textAnchor="middle">Innovación Fallida en Navegación Crítica</text>
      <text x="345" y="122" fill={textColor} fontSize="7">• Menús ocultos en círculos giratorios o gestos no estándar</text>
      <text x="345" y="136" fill={textColor} fontSize="7">• Mover el botón de Checkout o Compra a lugares insólitos</text>
      <text x="345" y="150" fill={textColor} fontSize="7">• Scroll horizontal forzado en páginas de texto denso</text>
      <text x="345" y="172" fill="#ef4444" fontSize="7.5" fontWeight="bold">Multiplica la tasa de rebote y el abandono</text>

      <rect x="30" y="192" width="580" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">Innovar en la propuesta de valor y contenido, NUNCA en la mecánica básica de navegación.</text>
    </svg>
  );
  },

  "uiux-cognitive-biases-matrix": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="32" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Sesgos Cognitivos en UX: Efecto Zeigarnik vs Efecto Von Restorff</text>

      {/* Zeigarnik */}
      <rect x="30" y="50" width="275" height="135" rx="8" fill={isDark ? "#1e1b4b" : "#eef2ff"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="167" y="70" fill="#818cf8" fontWeight="bold" fontSize="10.5" textAnchor="middle">Efecto Zeigarnik (Tareas Incompletas)</text>
      <text x="167" y="85" fill={subtextColor} fontSize="7" textAnchor="middle">El cerebro retiene tensión mental por tareas inconclusas</text>
      {/* UI example */}
      <rect x="45" y="95" width="245" height="42" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} stroke="#6366f1" />
      <text x="55" y="110" fill={textColor} fontSize="7.5" fontWeight="bold">Perfil de Usuario: 75% Completado</text>
      <rect x="55" y="117" width="225" height="8" rx="4" fill={isDark ? "#334155" : "#e2e8f0"} />
      <rect x="55" y="117" width="168" height="8" rx="4" fill="#6366f1" />
      <text x="55" y="132" fill="#6366f1" fontSize="6.5">Añade tu número telefónico para ganar tu insignia (+25%)</text>
      <text x="45" y="152" fill={textColor} fontSize="7">• Gamificación y retención en onboarding</text>
      <text x="45" y="165" fill={textColor} fontSize="7">• Estimula el deseo de &quot;cerrar el ciclo&quot;</text>

      {/* Von Restorff */}
      <rect x="335" y="50" width="275" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="472" y="70" fill="#34d399" fontWeight="bold" fontSize="10.5" textAnchor="middle">Efecto Von Restorff (Aislamiento Visual)</text>
      <text x="472" y="85" fill={subtextColor} fontSize="7" textAnchor="middle">El elemento visualmente divergente es recordado un 80% más</text>
      {/* Pricing cards */}
      <div className="flex space-x-2">
        <rect x="350" y="95" width="70" height="45" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} stroke="#94a3b8" />
        <text x="385" y="108" fill={textColor} fontSize="7" textAnchor="middle">Básico</text>
        <text x="385" y="125" fill={subtextColor} fontSize="6" textAnchor="middle">$9/mes</text>

        {/* Highlighted Card */}
        <rect x="428" y="90" width="88" height="55" rx="4" fill={isDark ? "#1e1b4b" : "#6366f1"} stroke="#f59e0b" strokeWidth="2" />
        <rect x="445" y="85" width="55" height="10" rx="3" fill="#f59e0b" />
        <text x="472" y="92" fill="#000000" fontSize="5.5" fontWeight="bold" textAnchor="middle">★ MÁS POPULAR</text>
        <text x="472" y="112" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">Pro ($29)</text>
        <text x="472" y="130" fill="#e0e7ff" fontSize="6" textAnchor="middle">Recomendado</text>

        <rect x="525" y="95" width="70" height="45" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} stroke="#94a3b8" />
        <text x="560" y="108" fill={textColor} fontSize="7" textAnchor="middle">Enterprise</text>
        <text x="560" y="125" fill={subtextColor} fontSize="6" textAnchor="middle">$99/mes</text>
      </div>
      <text x="350" y="160" fill={textColor} fontSize="7">• Escalar o colorear la opción deseada para guiar la decisión</text>

      <rect x="30" y="192" width="580" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">Ética en UX: Emplear sesgos para facilitar la decisión del usuario, nunca para engaños (Dark Patterns).</text>
    </svg>
  );
  },

  "uiux-inclusive-dark-mode-contrast": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="32" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Diseño Inclusivo: Arquitectura de Dark Mode y Contraste WCAG 2.2</text>

      {/* Bad Practice */}
      <rect x="30" y="50" width="275" height="135" rx="8" fill="#000000" stroke="#ef4444" strokeWidth="1.5" />
      <text x="167" y="70" fill="#ef4444" fontWeight="bold" fontSize="10" textAnchor="middle">❌ Antipatrón Dark Mode: Negro Puro</text>
      <text x="45" y="92" fill="#ffffff" fontSize="9" fontWeight="bold">Texto Blanco Puro (#FFFFFF) sobre Negro Puro (#000000)</text>
      <text x="45" y="112" fill="#ef4444" fontSize="7.5">• Causa efecto de &quot;Halación&quot; y fatiga visual en astigmatismo</text>
      <text x="45" y="127" fill="#ef4444" fontSize="7.5">• Pérdida de percepción de sombras y elevación en eje Z</text>
      <text x="45" y="142" fill="#ef4444" fontSize="7.5">• Saturación de colores puros genera vibración cromática</text>
      <text x="167" y="170" fill="#f87171" fontSize="8" fontWeight="bold" textAnchor="middle">Contraste 21:1 excesivo y molesto</text>

      {/* Good Practice */}
      <rect x="335" y="50" width="275" height="135" rx="8" fill="#121826" stroke="#10b981" strokeWidth="1.5" />
      <text x="472" y="70" fill="#34d399" fontWeight="bold" fontSize="10" textAnchor="middle">✅ Estándar Inclusivo: Superficies en Capas</text>
      <rect x="350" y="82" width="245" height="25" rx="4" fill="#1f2937" />
      <text x="472" y="97" fill="#f3f4f6" fontSize="8" textAnchor="middle">Surface-1 (#1f2937) + Texto (#f3f4f6)</text>
      <text x="350" y="122" fill={textColor} fontSize="7.5">• Fondo base oscuro suave (#121826 / #0f172a)</text>
      <text x="350" y="136" fill={textColor} fontSize="7.5">• Elevación mediante iluminación de superficie (Surface elevation)</text>
      <text x="350" y="150" fill={textColor} fontSize="7.5">• Contraste calibrado WCAG AA (mínimo 4.5:1 texto, 3:1 iconos)</text>
      <text x="472" y="170" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">prefers-color-scheme &amp; tokens semánticos</text>

      <rect x="30" y="192" width="580" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">En Dark Mode, mayor elevación se representa con superficies más claras, no con sombras oscuras.</text>
    </svg>
  );
  },

  "uiux-motion-choreography-timing": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="32" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Coreografía de Movimiento (Motion Design) &amp; Curvas de Aceleración</text>

      {/* Left: Curves */}
      <rect x="30" y="50" width="275" height="135" rx="8" fill={isDark ? "#1e1b4b" : "#eef2ff"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="167" y="68" fill="#818cf8" fontWeight="bold" fontSize="10" textAnchor="middle">Curvas de Aceleración (Easing)</text>
      <rect x="45" y="78" width="115" height="55" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} stroke="#ef4444" />
      <path d="M 50 125 L 155 85" stroke="#ef4444" strokeWidth="2" />
      <text x="102" y="125" fill="#ef4444" fontSize="7" fontWeight="bold" textAnchor="middle">Linear: Mecánico / Robot</text>

      <rect x="175" y="78" width="115" height="55" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} stroke="#10b981" />
      <path d="M 180 125 C 190 90, 240 85, 285 85" stroke="#10b981" strokeWidth="2" />
      <text x="232" y="125" fill="#10b981" fontSize="7" fontWeight="bold" textAnchor="middle">Ease-Out: Natural (Física)</text>

      <text x="45" y="152" fill={textColor} fontSize="7.5">• Duración óptima web: 200ms - 350ms (sin lag)</text>
      <text x="45" y="167" fill={textColor} fontSize="7.5">• Salidas rápidas (150ms ease-in) | Entradas suaves (300ms ease-out)</text>

      {/* Right: Stagger & a11y */}
      <rect x="335" y="50" width="275" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="472" y="68" fill="#34d399" fontWeight="bold" fontSize="10" textAnchor="middle">Coreografía Stagger &amp; a11y</text>
      {/* Stagger items */}
      <rect x="350" y="80" width="245" height="16" rx="3" fill="#6366f1" opacity="0.9" />
      <text x="360" y="91" fill="#ffffff" fontSize="7">Item 1: Delay 0ms (Inicia entrada)</text>

      <rect x="350" y="100" width="245" height="16" rx="3" fill="#6366f1" opacity="0.75" />
      <text x="360" y="111" fill="#ffffff" fontSize="7">Item 2: Delay +50ms (Cascada fluida)</text>

      <rect x="350" y="120" width="245" height="16" rx="3" fill="#6366f1" opacity="0.6" />
      <text x="360" y="131" fill="#ffffff" fontSize="7">Item 3: Delay +100ms</text>

      <rect x="350" y="145" width="245" height="28" rx="4" fill={isDark ? "#1f2937" : "#f1f5f9"} stroke="#f59e0b" />
      <text x="472" y="158" fill="#f59e0b" fontSize="7" fontWeight="bold" textAnchor="middle">@media (prefers-reduced-motion: reduce)</text>
      <text x="472" y="168" fill={subtextColor} fontSize="6.5" textAnchor="middle">Reemplaza desplazamientos por sutiles crossfades de opacidad.</text>

      <rect x="30" y="192" width="580" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">La buena animación informa sobre la relación espacial de los elementos sin hacer esperar al usuario.</text>
    </svg>
  );
  },

  "uiux-cognitive-load-theory": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Teoría de la Carga Cognitiva de John Sweller en Interfaces</text>

      {/* Total Brain Bandwidth */}
      <rect x="30" y="48" width="580" height="22" rx="4" fill={isDark ? "#1e293b" : "#e2e8f0"} />
      <text x="320" y="63" fill={textColor} fontSize="8" fontWeight="bold" textAnchor="middle">Capacidad Total de la Memoria de Trabajo del Usuario (Ancho de Banda Mental Finito)</text>

      {/* 3 Loads */}
      <rect x="30" y="78" width="180" height="105" rx="8" fill={isDark ? "#1e1b4b" : "#eef2ff"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="120" y="96" fill="#818cf8" fontWeight="bold" fontSize="9.5" textAnchor="middle">1. Carga Intrínseca</text>
      <text x="40" y="115" fill={textColor} fontSize="7.5">• Dificultad inherente al problema</text>
      <text x="40" y="128" fill={textColor} fontSize="7.5">• Ej: Declarar impuestos o calcular crédito</text>
      <text x="40" y="141" fill={subtextColor} fontSize="7">• No puede eliminarse, solo descomponerse</text>
      <text x="120" y="168" fill="#6366f1" fontSize="7" fontWeight="bold" textAnchor="middle">Gestionar con Wizards</text>

      <rect x="230" y="78" width="180" height="105" rx="8" fill={isDark ? "#450a0a" : "#fee2e2"} stroke="#ef4444" strokeWidth="1.5" />
      <text x="320" y="96" fill="#ef4444" fontWeight="bold" fontSize="9.5" textAnchor="middle">2. Carga Extraña (Ruido)</text>
      <text x="240" y="115" fill={textColor} fontSize="7.5">• Fricción provocada por mala UI/UX</text>
      <text x="240" y="128" fill={textColor} fontSize="7.5">• Tipografías ilegibles, botones ocultos</text>
      <text x="240" y="141" fill={textColor} fontSize="7.5">• Información redundante o desordenada</text>
      <text x="320" y="168" fill="#ef4444" fontSize="7" fontWeight="bold" textAnchor="middle">¡Debe Reducirse al Mínimo!</text>

      <rect x="430" y="78" width="180" height="105" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="520" y="96" fill="#34d399" fontWeight="bold" fontSize="9.5" textAnchor="middle">3. Carga Germana</text>
      <text x="440" y="115" fill={textColor} fontSize="7.5">• Esfuerzo mental constructivo</text>
      <text x="440" y="128" fill={textColor} fontSize="7.5">• Asimilación de patrones y aprendizaje</text>
      <text x="440" y="141" fill={textColor} fontSize="7.5">• Comprensión del modelo de la app</text>
      <text x="520" y="168" fill="#10b981" fontSize="7" fontWeight="bold" textAnchor="middle">Maximizar Comprensión</text>

      <rect x="30" y="192" width="580" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">Un diseño UX sobresaliente elimina la carga extraña para permitir al usuario enfocarse en su objetivo.</text>
    </svg>
  );
  },

  "uiux-multi-brand-design-system": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Arquitectura de Design System Multi-Marca y Multi-Tenant</text>

      {/* Core Layer */}
      <rect x="30" y="48" width="580" height="35" rx="6" fill={isDark ? "#1e1b4b" : "#eef2ff"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="320" y="65" fill="#818cf8" fontWeight="bold" fontSize="10" textAnchor="middle">@design-system/core (Foundation Agnóstica)</text>
      <text x="320" y="76" fill={subtextColor} fontSize="7" textAnchor="middle">Espaciado modular, lógica de componentes React, accesibilidad ARIA, primitivas sin estilos fijos</text>

      {/* Arrows down */}
      <path d="M160 85 L160 102" stroke="#6366f1" strokeWidth="1.5" />
      <path d="M480 85 L480 102" stroke="#6366f1" strokeWidth="1.5" />

      {/* Brand A */}
      <rect x="30" y="105" width="275" height="75" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="167" y="122" fill="#34d399" fontWeight="bold" fontSize="9.5" textAnchor="middle">Tema Brand A (Fintech / Corporativo)</text>
      <text x="45" y="138" fill={textColor} fontSize="7">• Radios: 2px (esquinas cuadradas sobrias)</text>
      <text x="45" y="150" fill={textColor} fontSize="7">• Primario: Navy Blue (#0f172a) | Font: Inter</text>
      <text x="45" y="162" fill={textColor} fontSize="7">• Microinteracciones formales (150ms linear)</text>

      {/* Brand B */}
      <rect x="335" y="105" width="275" height="75" rx="8" fill={isDark ? "#3b0764" : "#faf5ff"} stroke="#a855f7" strokeWidth="1.5" />
      <text x="472" y="122" fill="#c084fc" fontWeight="bold" fontSize="9.5" textAnchor="middle">Tema Brand B (Gen-Z / Streaming)</text>
      <text x="350" y="138" fill={textColor} fontSize="7">• Radios: 24px (Pill buttons redondeados)</text>
      <text x="350" y="150" fill={textColor} fontSize="7">• Primario: Magenta Neón (#f43f5e) | Font: Poppins</text>
      <text x="350" y="162" fill={textColor} fontSize="7">• Animaciones spring elásticas (350ms bounce)</text>

      <rect x="30" y="190" width="580" height="18" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="202" fill={subtextColor} fontSize="7.5" textAnchor="middle">Los componentes reutilizan 100% el comportamiento y accesibilidad; solo mutan CSS Custom Properties en runtime.</text>
    </svg>
  );
  },

  "uiux-accessibility-audit-pyramid": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Pirámide de Auditoría de Accesibilidad Web (WCAG 2.2)</text>

      {/* Top: Users with Disabilities */}
      <polygon points="320,50 375,85 265,85" fill={isDark ? "#3b0764" : "#f3e8ff"} stroke="#a855f7" strokeWidth="1.5" />
      <text x="320" y="75" fill="#c084fc" fontSize="7.5" fontWeight="bold" textAnchor="middle">Usuarios Reales con Discapacidad</text>

      {/* Middle: Manual Testing */}
      <polygon points="265,86 375,86 430,130 210,130" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="320" y="105" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">Auditoría Manual de Expertos (50-60%)</text>
      <text x="320" y="118" fill={textColor} fontSize="7" textAnchor="middle">Navegación Keyboard-only, Screen Readers (VoiceOver, NVDA), Zoom 400%</text>

      {/* Base: Automated Tooling */}
      <polygon points="210,131 430,131 485,175 155,175" fill={isDark ? "#1e1b4b" : "#eef2ff"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="320" y="148" fill="#6366f1" fontSize="8.5" fontWeight="bold" textAnchor="middle">Herramientas Automatizadas en CI/CD (35-40% cobertura)</text>
      <text x="320" y="162" fill={textColor} fontSize="7" textAnchor="middle">axe-core, Pa11y, Lighthouse a11y, ESLint jsx-a11y</text>

      {/* Right Side Note */}
      <rect x="500" y="60" width="115" height="110" rx="6" fill={isDark ? "#1e293b" : "#f8fafc"} stroke="#94a3b8" />
      <text x="557" y="78" fill="#f59e0b" fontWeight="bold" fontSize="8" textAnchor="middle">¡Cuidado!</text>
      <text x="510" y="98" fill={textColor} fontSize="6.5">• 100% score en</text>
      <text x="510" y="110" fill={textColor} fontSize="6.5">  Lighthouse NO</text>
      <text x="510" y="122" fill={textColor} fontSize="6.5">  garantiza que el</text>
      <text x="510" y="134" fill={textColor} fontSize="6.5">  sitio sea accesible</text>
      <text x="510" y="146" fill="#10b981" fontSize="6.5" fontWeight="bold">  Manual = Clave</text>

      <rect x="30" y="190" width="580" height="18" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="202" fill={subtextColor} fontSize="7.5" textAnchor="middle">Las herramientas automáticas solo detectan fallos de sintaxis HTML; el contexto humano requiere validación manual.</text>
    </svg>
  );
  },

  "uiux-spatial-ui-depth-z-index": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Spatial UI (VisionOS / XR): Profundidad en Eje Z, Eye-Tracking y Pinch</text>

      {/* 3D Planes Representation */}
      <g transform="translate(40, 50)">
        {/* Background Physical Room */}
        <rect x="0" y="0" width="240" height="120" rx="8" fill={isDark ? "#0f172a" : "#cbd5e1"} stroke="#64748b" strokeDasharray="3 3" />
        <text x="120" y="20" fill="#94a3b8" fontSize="7" textAnchor="middle">Espacio Físico Real (Passthrough)</text>

        {/* Back Window Plane */}
        <rect x="30" y="25" width="180" height="85" rx="6" fill={isDark ? "rgba(30, 41, 59, 0.7)" : "rgba(255, 255, 255, 0.7)"} stroke="#38bdf8" strokeWidth="1.5" />
        <text x="120" y="42" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle">Ventana Primaria (Z = 0)</text>

        {/* Front Modal Plane (Z = +100) */}
        <rect x="60" y="50" width="140" height="60" rx="8" fill={isDark ? "rgba(99, 102, 241, 0.4)" : "rgba(238, 242, 255, 0.8)"} stroke="#6366f1" strokeWidth="2" />
        <text x="130" y="70" fill="#6366f1" fontSize="7.5" fontWeight="bold" textAnchor="middle">Modal Elevado (Z = +100)</text>
        <text x="130" y="85" fill={textColor} fontSize="6.5" textAnchor="middle">Specular Highlights dinámicos</text>
      </g>

      {/* Right: Interaction Paradigm */}
      <rect x="320" y="50" width="290" height="130" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="465" y="70" fill="#34d399" fontWeight="bold" fontSize="10" textAnchor="middle">Nuevo Paradigma de Interacción</text>

      <rect x="335" y="82" width="260" height="28" rx="4" fill={isDark ? "#065f46" : "#d1fae5"} />
      <text x="465" y="94" fill="#064e3b" fontSize="7.5" fontWeight="bold" textAnchor="middle">1. Eye Gaze = Hover Implícito</text>
      <text x="465" y="104" fill="#047857" fontSize="6.5" textAnchor="middle">El elemento se ilumina al fijar la mirada (sin cansancio de brazos)</text>

      <rect x="335" y="116" width="260" height="28" rx="4" fill={isDark ? "#065f46" : "#d1fae5"} />
      <text x="465" y="128" fill="#064e3b" fontSize="7.5" fontWeight="bold" textAnchor="middle">2. Pinch Gesture = Click de Confirmación</text>
      <text x="465" y="138" fill="#047857" fontSize="6.5" textAnchor="middle">Pellizcar dedos índice y pulgar sobre el regazo activa el botón</text>

      <text x="465" y="165" fill={textColor} fontSize="7" textAnchor="middle">Diseño de Cristal Dinámico: refleja la luz de la habitación real en tiempo real.</text>

      <rect x="30" y="190" width="580" height="18" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="202" fill={subtextColor} fontSize="7.5" textAnchor="middle">En Spatial UI, las ventanas no tienen fondo negro opaco; son láminas de cristal adaptativo al entorno.</text>
    </svg>
  );
  },

  "uiux-ui-states-pentagon": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Los 5 Estados Fundamentales de la UI (Modelo de Scott Hurff)</text>

      {/* 1. Ideal State */}
      <rect x="25" y="52" width="105" height="110" rx="6" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="77" y="70" fill="#34d399" fontWeight="bold" fontSize="8.5" textAnchor="middle">1. Ideal State</text>
      <text x="35" y="90" fill={textColor} fontSize="7">• Datos completos</text>
      <text x="35" y="103" fill={textColor} fontSize="7">• Dashboard lleno</text>
      <text x="35" y="116" fill={textColor} fontSize="7">• Gráficas activas</text>
      <text x="77" y="145" fill="#10b981" fontSize="7" fontWeight="bold" textAnchor="middle">El diseño &apos;feliz&apos;</text>

      {/* 2. Empty State */}
      <rect x="145" y="52" width="105" height="110" rx="6" fill={isDark ? "#1e1b4b" : "#eef2ff"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="197" y="70" fill="#818cf8" fontWeight="bold" fontSize="8.5" textAnchor="middle">2. Empty State</text>
      <text x="155" y="90" fill={textColor} fontSize="7">• Cero datos inicial</text>
      <text x="155" y="103" fill={textColor} fontSize="7">• Guía de onboard</text>
      <text x="155" y="116" fill={textColor} fontSize="7">• CTA para crear 1°</text>
      <text x="197" y="145" fill="#6366f1" fontSize="7" fontWeight="bold" textAnchor="middle">Oportunidad UX</text>

      {/* 3. Loading State */}
      <rect x="265" y="52" width="110" height="110" rx="6" fill={isDark ? "#451a03" : "#fff7ed"} stroke="#f97316" strokeWidth="1.5" />
      <text x="320" y="70" fill="#fb923c" fontWeight="bold" fontSize="8.5" textAnchor="middle">3. Loading State</text>
      <text x="275" y="90" fill={textColor} fontSize="7">• Skeleton loaders</text>
      <text x="275" y="103" fill={textColor} fontSize="7">• Evitar shift layout</text>
      <text x="275" y="116" fill={textColor} fontSize="7">• Feedback visual</text>
      <text x="320" y="145" fill="#fb923c" fontSize="7" fontWeight="bold" textAnchor="middle">Reduce percepción</text>

      {/* 4. Partial State */}
      <rect x="390" y="52" width="105" height="110" rx="6" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#64748b" strokeWidth="1.5" />
      <text x="442" y="70" fill="#94a3b8" fontWeight="bold" fontSize="8.5" textAnchor="middle">4. Partial State</text>
      <text x="400" y="90" fill={textColor} fontSize="7">• Solo 1 elemento</text>
      <text x="400" y="103" fill={textColor} fontSize="7">• Nombres largos</text>
      <text x="400" y="116" fill={textColor} fontSize="7">• Casos borde text</text>
      <text x="442" y="145" fill="#64748b" fontSize="7" fontWeight="bold" textAnchor="middle">Robusto a bordes</text>

      {/* 5. Error State */}
      <rect x="510" y="52" width="105" height="110" rx="6" fill={isDark ? "#450a0a" : "#fee2e2"} stroke="#ef4444" strokeWidth="1.5" />
      <text x="562" y="70" fill="#ef4444" fontWeight="bold" fontSize="8.5" textAnchor="middle">5. Error State</text>
      <text x="520" y="90" fill={textColor} fontSize="7">• Error claro de red</text>
      <text x="520" y="103" fill={textColor} fontSize="7">• No culpar al user</text>
      <text x="520" y="116" fill={textColor} fontSize="7">• Botón de reintento</text>
      <text x="562" y="145" fill="#ef4444" fontSize="7" fontWeight="bold" textAnchor="middle">Recuperación fácil</text>

      <rect x="30" y="180" width="580" height="25" rx="4" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="196" fill={subtextColor} fontSize="7.5" textAnchor="middle">Diseñar solo el &apos;Ideal State&apos; es el error #1 del frontend; los otros 4 estados definen la calidad real del producto.</text>
    </svg>
  );
  }
};
