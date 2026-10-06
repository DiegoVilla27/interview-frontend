import { DiagramRegistry } from "../diagram.types";

/** Diagramas SVG del módulo React. */
export const reactDiagrams: DiagramRegistry = {
  "react-fiber-reconciliation": ({ isDark, textColor, subtextColor, border }) => {
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

      {/* Current Tree */}
      <rect
        x="30"
        y="40"
        width="170"
        height="200"
        rx="8"
        fill={isDark ? "#1e293b" : "#f1f5f9"}
        stroke="#0ea5e9"
        strokeWidth="1.5"
      />
      <text x="45" y="65" fill="#0ea5e9" fontWeight="700" fontSize="12">
        Current Fiber Tree
      </text>
      <text x="45" y="82" fill={subtextColor} fontSize="10">
        Montado en el DOM real
      </text>

      {/* Tree nodes */}
      <circle cx="115" cy="110" r="14" fill="#0ea5e9" />
      <text x="115" y="114" fill="#ffffff" fontSize="9" textAnchor="middle">App</text>
      <line x1="105" y1="122" x2="85" y2="148" stroke="#0ea5e9" strokeWidth="1.5" />
      <line x1="125" y1="122" x2="145" y2="148" stroke="#0ea5e9" strokeWidth="1.5" />
      <circle cx="85" cy="155" r="12" fill={isDark ? "#38bdf8" : "#7dd3fc"} />
      <text x="85" y="159" fill="#0f172a" fontSize="8" textAnchor="middle">Nav</text>
      <circle cx="145" cy="155" r="12" fill={isDark ? "#38bdf8" : "#7dd3fc"} />
      <text x="145" y="159" fill="#0f172a" fontSize="8" textAnchor="middle">List</text>

      {/* Reconciliation / Render Phase */}
      <rect
        x="230"
        y="40"
        width="180"
        height="200"
        rx="8"
        fill={isDark ? "#1f1d2b" : "#faf5ff"}
        stroke="#a855f7"
        strokeWidth="1.5"
      />
      <text x="245" y="65" fill="#a855f7" fontWeight="700" fontSize="12">
        Render Phase (Diffing)
      </text>
      <text x="245" y="82" fill={subtextColor} fontSize="10">
        Asíncrono & Interrumpible
      </text>
      <rect x="245" y="100" width="150" height="35" rx="6" fill={isDark ? "#3b0764" : "#f3e8ff"} />
      <text x="255" y="122" fill="#a855f7" fontSize="10" fontWeight="600">
        WorkInProgress Tree
      </text>
      <text x="245" y="160" fill={textColor} fontSize="10">
        • Heurística diff O(n)
      </text>
      <text x="245" y="178" fill={textColor} fontSize="10">
        • Prioridad con Scheduler
      </text>
      <text x="245" y="196" fill={textColor} fontSize="10">
        • Calcula lista de efectos (flags)
      </text>

      {/* Commit Phase */}
      <rect
        x="440"
        y="40"
        width="170"
        height="200"
        rx="8"
        fill={isDark ? "#064e3b" : "#ecfdf5"}
        stroke="#10b981"
        strokeWidth="1.5"
      />
      <text x="455" y="65" fill="#10b981" fontWeight="700" fontSize="12">
        Commit Phase
      </text>
      <text x="455" y="82" fill={subtextColor} fontSize="10">
        Síncrono (0 parpadeos)
      </text>
      <rect x="455" y="105" width="140" height="40" rx="6" fill={isDark ? "#022c22" : "#d1fae5"} />
      <text x="465" y="125" fill="#10b981" fontSize="10" fontWeight="700">
        DOM Real Mutado
      </text>
      <text x="465" y="137" fill={textColor} fontSize="9">
        Inserción / Eliminación
      </text>
      <text x="455" y="175" fill={textColor} fontSize="10">
        • useLayoutEffect ejecuta
      </text>
      <text x="455" y="195" fill={textColor} fontSize="10">
        • useEffect en microtask
      </text>
    </svg>
  );
  },

  "react-component-tree-unidirectional": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Root Component */}
      <rect x="240" y="25" width="160" height="42" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#38bdf8" strokeWidth="1.5" />
      <text x="320" y="45" fill="#38bdf8" fontWeight="700" fontSize="11" textAnchor="middle">&lt;App /&gt; (State)</text>
      <text x="320" y="58" fill={subtextColor} fontSize="8" textAnchor="middle">Fuente Única de Verdad</text>

      {/* Downward Props Arrows */}
      <path d="M280 67 L160 105" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow)" />
      <text x="200" y="80" fill="#10b981" fontSize="8" fontWeight="bold">props ↓</text>

      <path d="M360 67 L480 105" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow)" />
      <text x="440" y="80" fill="#10b981" fontSize="8" fontWeight="bold">props ↓</text>

      {/* Child Components Level 1 */}
      <rect x="75" y="105" width="170" height="42" rx="6" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#818cf8" strokeWidth="1.5" />
      <text x="160" y="125" fill="#818cf8" fontWeight="700" fontSize="10" textAnchor="middle">&lt;UserHeader /&gt;</text>
      <text x="160" y="138" fill={textColor} fontSize="8" textAnchor="middle">Recibe user props</text>

      <rect x="395" y="105" width="170" height="42" rx="6" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="480" y="125" fill="#34d399" fontWeight="700" fontSize="10" textAnchor="middle">&lt;Dashboard /&gt;</text>
      <text x="480" y="138" fill={textColor} fontSize="8" textAnchor="middle">Recibe metrics props</text>

      {/* Event callback upward */}
      <path d="M480 147 L480 170 L340 170 L340 73" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 3" />
      <text x="410" y="165" fill="#f59e0b" fontSize="8" fontWeight="bold">event callbacks (onChange) ↑</text>

      {/* Bottom summary note */}
      <rect x="75" y="175" width="490" height="25" rx="4" fill={isDark ? "#0f172a" : "#f8fafc"} stroke={border} strokeWidth="1" />
      <text x="320" y="191" fill={subtextColor} fontSize="8" textAnchor="middle">Flujo Unidireccional: Datos descienden por props, mutaciones ascienden por eventos.</text>
    </svg>
  );
  },

  "react-jsx-transpilation-runtime": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Step 1: JSX */}
      <rect x="35" y="45" width="160" height="135" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#38bdf8" strokeWidth="1.5" />
      <text x="45" y="68" fill="#38bdf8" fontWeight="700" fontSize="11">1. Código JSX (.tsx)</text>
      <rect x="45" y="80" width="140" height="60" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="52" y="100" fill={textColor} fontSize="9" fontFamily="monospace">&lt;button className=&quot;btn&quot;&gt;</text>
      <text x="60" y="116" fill="#38bdf8" fontSize="9" fontFamily="monospace">Guardar</text>
      <text x="52" y="130" fill={textColor} fontSize="9" fontFamily="monospace">&lt;/button&gt;</text>
      <text x="45" y="165" fill={subtextColor} fontSize="8">Azúcar sintáctico declarativo</text>

      <path d="M205 110 L235 110" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrow)" />

      {/* Step 2: Transpiled */}
      <rect x="240" y="45" width="180" height="135" rx="8" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#818cf8" strokeWidth="1.5" />
      <text x="250" y="68" fill="#818cf8" fontWeight="700" fontSize="11">2. Runtime jsx() (SWC/Babel)</text>
      <rect x="250" y="80" width="160" height="60" rx="4" fill={isDark ? "#1e1b4b" : "#ffffff"} />
      <text x="256" y="98" fill="#818cf8" fontSize="8" fontFamily="monospace">import &#123; jsx &#125; from &apos;react/jsx-runtime&apos;;</text>
      <text x="256" y="112" fill={textColor} fontSize="8" fontFamily="monospace">jsx(&quot;button&quot;, &#123;</text>
      <text x="264" y="125" fill={textColor} fontSize="8" fontFamily="monospace">  className: &quot;btn&quot;,</text>
      <text x="264" y="136" fill={textColor} fontSize="8" fontFamily="monospace">  children: &quot;Guardar&quot;</text>
      <text x="256" y="146" fill={textColor} fontSize="8" fontFamily="monospace">&#125;);</text>

      <path d="M430 110 L460 110" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow)" />

      {/* Step 3: React Element */}
      <rect x="465" y="45" width="140" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="475" y="68" fill="#34d399" fontWeight="700" fontSize="11">3. React Element</text>
      <rect x="475" y="80" width="120" height="60" rx="4" fill={isDark ? "#022c22" : "#ffffff"} />
      <text x="482" y="96" fill={textColor} fontSize="8" fontFamily="monospace">&#123; $$typeof: Symbol,</text>
      <text x="482" y="108" fill={textColor} fontSize="8" fontFamily="monospace">  type: &quot;button&quot;,</text>
      <text x="482" y="120" fill={textColor} fontSize="8" fontFamily="monospace">  props: &#123;...&#125;,</text>
      <text x="482" y="132" fill={textColor} fontSize="8" fontFamily="monospace">  key: null &#125;</text>
      <text x="475" y="165" fill="#34d399" fontSize="8" fontWeight="bold">Objeto inmutable</text>
    </svg>
  );
  },

  "react-props-vs-state-flow": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Props Column */}
      <rect x="35" y="35" width="270" height="155" rx="10" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#38bdf8" strokeWidth="1.5" />
      <text x="50" y="60" fill="#38bdf8" fontWeight="700" fontSize="13">Props (Entradas Externas)</text>
      <text x="50" y="85" fill={textColor} fontSize="9">🔒 <tspan fontWeight="bold">Inmutables:</tspan> el componente receptor solo lee.</text>
      <text x="50" y="105" fill={textColor} fontSize="9">📥 Provienen del componente padre hacia abajo.</text>
      <text x="50" y="125" fill={textColor} fontSize="9">⚙️ Configuran y parametrizan la UI.</text>
      <rect x="50" y="138" width="240" height="30" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="58" y="157" fill="#38bdf8" fontSize="9" fontFamily="monospace">&lt;Button variant=&quot;primary&quot; /&gt;</text>
      <text x="50" y="180" fill={subtextColor} fontSize="8" fontStyle="italic">Análogos a los argumentos de una función pura</text>

      {/* State Column */}
      <rect x="335" y="35" width="270" height="155" rx="10" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="350" y="60" fill="#34d399" fontWeight="700" fontSize="13">State (Memoria Local Reactiva)</text>
      <text x="350" y="85" fill={textColor} fontSize="9">🔄 <tspan fontWeight="bold">Mutable mediante setter:</tspan> useState / useReducer.</text>
      <text x="350" y="105" fill={textColor} fontSize="9">💥 Su cambio agenda un nuevo ciclo de re-renderizado.</text>
      <text x="350" y="125" fill={textColor} fontSize="9">📦 Privado y completamente aislado en el componente.</text>
      <rect x="350" y="138" width="240" height="30" rx="4" fill={isDark ? "#022c22" : "#ffffff"} />
      <text x="358" y="157" fill="#34d399" fontSize="9" fontFamily="monospace">const [open, setOpen] = useState(false);</text>
      <text x="350" y="180" fill={subtextColor} fontSize="8" fontStyle="italic">Memoria interna reactiva a interacciones de usuario</text>
    </svg>
  );
  },

  "react-children-composition-slot": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Usage */}
      <rect x="35" y="45" width="260" height="135" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#38bdf8" strokeWidth="1.5" />
      <text x="45" y="68" fill="#38bdf8" fontWeight="700" fontSize="11">Invocación con Composición</text>
      <rect x="45" y="80" width="240" height="65" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="52" y="98" fill={textColor} fontSize="9" fontFamily="monospace">&lt;Dialog title=&quot;Alerta&quot;&gt;</text>
      <text x="60" y="114" fill="#34d399" fontSize="9" fontFamily="monospace">  &lt;p&gt;Contenido dinámico&lt;/p&gt;</text>
      <text x="60" y="128" fill="#a855f7" fontSize="9" fontFamily="monospace">  &lt;ConfirmButton /&gt;</text>
      <text x="52" y="140" fill={textColor} fontSize="9" fontFamily="monospace">&lt;/Dialog&gt;</text>
      <text x="45" y="165" fill={subtextColor} fontSize="8">Inyección de elementos como children</text>

      <path d="M305 110 L345 110" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow)" />

      {/* Component Definition */}
      <rect x="350" y="45" width="255" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="360" y="68" fill="#34d399" fontWeight="700" fontSize="11">Implementación con &#123;children&#125;</text>
      <rect x="360" y="80" width="235" height="65" rx="4" fill={isDark ? "#022c22" : "#ffffff"} />
      <text x="368" y="98" fill={textColor} fontSize="8" fontFamily="monospace">function Dialog(&#123; title, children &#125;) &#123;</text>
      <text x="376" y="112" fill={textColor} fontSize="8" fontFamily="monospace">  return &lt;div className=&quot;modal&quot;&gt;</text>
      <text x="384" y="124" fill="#34d399" fontSize="8" fontFamily="monospace">    &lt;h2&gt;&#123;title&#125;&lt;/h2&gt;&#123;children&#125;</text>
      <text x="376" y="136" fill={textColor} fontSize="8" fontFamily="monospace">  &lt;/div&gt;;</text>
      <text x="368" y="144" fill={textColor} fontSize="8" fontFamily="monospace">&#125;</text>
      <text x="360" y="168" fill="#10b981" fontSize="8" fontWeight="bold">Inversión de Control: Evita el Prop Drilling</text>
    </svg>
  );
  },

  "react-hooks-linked-list": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      <text x="320" y="32" fill="#818cf8" fontSize="11" fontWeight="bold" textAnchor="middle">Lista Enlazada de Hooks en la Memoria del Fiber Node</text>

      {/* Hook 1 */}
      <rect x="35" y="55" width="160" height="95" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#38bdf8" strokeWidth="1.5" />
      <text x="45" y="78" fill="#38bdf8" fontWeight="700" fontSize="11">Hook 1: useState</text>
      <rect x="45" y="88" width="140" height="35" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="52" y="104" fill={textColor} fontSize="9" fontFamily="monospace">memoizedState: 0</text>
      <text x="52" y="116" fill="#10b981" fontSize="8" fontFamily="monospace">next: ➔ Hook 2</text>
      <text x="45" y="140" fill={subtextColor} fontSize="8">Índice posicional fijo</text>

      <path d="M200 102 L230 102" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arrow)" />

      {/* Hook 2 */}
      <rect x="235" y="55" width="165" height="95" rx="8" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#818cf8" strokeWidth="1.5" />
      <text x="245" y="78" fill="#818cf8" fontWeight="700" fontSize="11">Hook 2: useEffect</text>
      <rect x="245" y="88" width="145" height="35" rx="4" fill={isDark ? "#1e1b4b" : "#ffffff"} />
      <text x="252" y="104" fill={textColor} fontSize="9" fontFamily="monospace">memoizedState: Effect</text>
      <text x="252" y="116" fill="#10b981" fontSize="8" fontFamily="monospace">next: ➔ Hook 3</text>
      <text x="245" y="140" fill={subtextColor} fontSize="8">Dependencias y cleanup</text>

      <path d="M405 102 L435 102" stroke="#818cf8" strokeWidth="2" markerEnd="url(#arrow)" />

      {/* Hook 3 */}
      <rect x="440" y="55" width="165" height="95" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="450" y="78" fill="#34d399" fontWeight="700" fontSize="11">Hook 3: useRef</text>
      <rect x="450" y="88" width="145" height="35" rx="4" fill={isDark ? "#022c22" : "#ffffff"} />
      <text x="458" y="104" fill={textColor} fontSize="9" fontFamily="monospace">current: HTMLDiv</text>
      <text x="458" y="116" fill={subtextColor} fontSize="8" fontFamily="monospace">next: null</text>
      <text x="450" y="140" fill={subtextColor} fontSize="8">Referencia persistente</text>

      {/* Warning rule */}
      <rect x="35" y="165" width="570" height="30" rx="4" fill={isDark ? "#450a0a" : "#fee2e2"} stroke="#ef4444" strokeWidth="1" />
      <text x="50" y="184" fill="#f87171" fontSize="9" fontWeight="bold">⚠️ Regla de Oro:</text>
      <text x="140" y="184" fill={textColor} fontSize="9">Nunca llamar hooks dentro de condicionales (if) o bucles: rompería el puntero &apos;next&apos; de la lista.</text>
    </svg>
  );
  },

  "react-controlled-vs-uncontrolled": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Controlled */}
      <rect x="35" y="35" width="270" height="155" rx="10" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="50" y="60" fill="#34d399" fontWeight="700" fontSize="12">1. Componente Controlado</text>
      <rect x="50" y="72" width="240" height="42" rx="4" fill={isDark ? "#022c22" : "#ffffff"} />
      <text x="58" y="90" fill={textColor} fontSize="8" fontFamily="monospace">&lt;input value=&#123;name&#125;</text>
      <text x="66" y="104" fill="#34d399" fontSize="8" fontFamily="monospace">  onChange=&#123;e =&gt; setName(e.target.value)&#125; /&gt;</text>
      <text x="50" y="132" fill={textColor} fontSize="9">✅ React State es la fuente única de verdad.</text>
      <text x="50" y="148" fill={textColor} fontSize="9">✅ Validación en tiempo real y formateo dinámico.</text>
      <text x="50" y="172" fill="#34d399" fontSize="8" fontWeight="bold">Recomendado para formularios estándar</text>

      {/* Uncontrolled */}
      <rect x="335" y="35" width="270" height="155" rx="10" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#38bdf8" strokeWidth="1.5" />
      <text x="350" y="60" fill="#38bdf8" fontWeight="700" fontSize="12">2. Componente No Controlado</text>
      <rect x="350" y="72" width="240" height="42" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="358" y="90" fill={textColor} fontSize="8" fontFamily="monospace">&lt;input ref=&#123;inputRef&#125;</text>
      <text x="366" y="104" fill="#38bdf8" fontSize="8" fontFamily="monospace">  defaultValue=&quot;valor inicial&quot; /&gt;</text>
      <text x="350" y="132" fill={textColor} fontSize="9">⚡ El DOM nativo almacena y gestiona el valor.</text>
      <text x="350" y="148" fill={textColor} fontSize="9">⚡ Leído a demanda vía `inputRef.current.value`.</text>
      <text x="350" y="172" fill="#38bdf8" fontSize="8" fontWeight="bold">Ideal para inputs de archivos (type=&quot;file&quot;) y React Hook Form</text>
    </svg>
  );
  },

  "react-list-keys-diffing": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Bad: Index or missing */}
      <rect x="35" y="35" width="270" height="155" rx="10" fill={isDark ? "#450a0a" : "#fee2e2"} stroke="#ef4444" strokeWidth="1.5" />
      <text x="50" y="58" fill="#f87171" fontWeight="700" fontSize="12">Sin Key Estable (o key=&#123;index&#125;)</text>
      <text x="50" y="78" fill={textColor} fontSize="8">Al insertar un elemento al inicio del array:</text>
      <rect x="50" y="88" width="240" height="50" rx="4" fill={isDark ? "#1f2937" : "#ffffff"} />
      <text x="58" y="104" fill="#f87171" fontSize="8" fontFamily="monospace">index 0: Mutado de &apos;B&apos; a &apos;A&apos;</text>
      <text x="58" y="118" fill="#f87171" fontSize="8" fontFamily="monospace">index 1: Mutado de &apos;C&apos; a &apos;B&apos;</text>
      <text x="58" y="132" fill="#f87171" fontSize="8" fontFamily="monospace">index 2: Creado nuevo nodo &apos;C&apos;</text>
      <text x="50" y="156" fill="#ef4444" fontSize="8">💥 Re-renderiza y muta el 100% de la lista.</text>
      <text x="50" y="172" fill="#ef4444" fontSize="8">Pérdida de estado en inputs hijos.</text>

      {/* Good: Stable Unique ID */}
      <rect x="335" y="35" width="270" height="155" rx="10" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="350" y="58" fill="#34d399" fontWeight="700" fontSize="12">Con Key Única (key=&#123;user.id&#125;)</text>
      <text x="350" y="78" fill={textColor} fontSize="8">Al insertar un elemento al inicio del array:</text>
      <rect x="350" y="88" width="240" height="50" rx="4" fill={isDark ? "#022c22" : "#ffffff"} />
      <text x="358" y="104" fill="#34d399" fontSize="8" fontFamily="monospace">key=&quot;A&quot;: Insertado nuevo nodo</text>
      <text x="358" y="118" fill={textColor} fontSize="8" fontFamily="monospace">key=&quot;B&quot;: Preservado (0 mutaciones)</text>
      <text x="358" y="132" fill={textColor} fontSize="8" fontFamily="monospace">key=&quot;C&quot;: Preservado (0 mutaciones)</text>
      <text x="350" y="156" fill="#10b981" fontSize="8">✅ Diffing heurístico exacto O(1) por nodo.</text>
      <text x="350" y="172" fill="#34d399" fontSize="8" fontWeight="bold">Estado local y foco preservados intactos</text>
    </svg>
  );
  },

  "react-useeffect-vs-tanstack-query": ({ isDark, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* useEffect Antipattern */}
      <rect x="35" y="35" width="270" height="155" rx="10" fill={isDark ? "#450a0a" : "#fee2e2"} stroke="#ef4444" strokeWidth="1.5" />
      <text x="50" y="58" fill="#f87171" fontWeight="700" fontSize="12">useEffect Data Fetching ❌</text>
      <text x="50" y="82" fill="#ef4444" fontSize="9">❌ <tspan fontWeight="bold">Race Conditions:</tspan> respuestas desordenadas.</text>
      <text x="50" y="102" fill="#ef4444" fontSize="9">❌ <tspan fontWeight="bold">Network Waterfalls:</tspan> fetches en cascada.</text>
      <text x="50" y="122" fill="#ef4444" fontSize="9">❌ Cero caché ni deduplicación de peticiones.</text>
      <text x="50" y="142" fill="#ef4444" fontSize="9">❌ Doble petición en React StrictMode.</text>
      <text x="50" y="165" fill={subtextColor} fontSize="8">Boilerplate manual de loading, error y cleanup.</text>

      {/* TanStack Query */}
      <rect x="335" y="35" width="270" height="155" rx="10" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="350" y="58" fill="#34d399" fontWeight="700" fontSize="12">TanStack Query (React Query) ✅</text>
      <text x="350" y="82" fill="#34d399" fontSize="9">✅ <tspan fontWeight="bold">Caché Automática</tspan> y deduplicación global.</text>
      <text x="350" y="102" fill="#34d399" fontSize="9">✅ <tspan fontWeight="bold">Stale-While-Revalidate:</tspan> UI instantánea.</text>
      <text x="350" y="122" fill="#34d399" fontSize="9">✅ Refetch en reconexión y window focus.</text>
      <text x="350" y="142" fill="#34d399" fontSize="9">✅ Paginación y mutaciones optimistas con rollback.</text>
      <text x="350" y="165" fill="#10b981" fontSize="8" fontWeight="bold">Estándar Enterprise oficial para Server State</text>
    </svg>
  );
  },

  "react-memoization-trio": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* React.memo */}
      <rect x="35" y="35" width="170" height="155" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#38bdf8" strokeWidth="1.5" />
      <text x="45" y="58" fill="#38bdf8" fontWeight="700" fontSize="12">React.memo()</text>
      <text x="45" y="78" fill={textColor} fontSize="9" fontWeight="bold">Nivel: Componente</text>
      <rect x="45" y="88" width="150" height="35" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="52" y="104" fill="#38bdf8" fontSize="8" fontFamily="monospace">React.memo(UserCard)</text>
      <text x="45" y="140" fill={textColor} fontSize="8">Compara props anteriores</text>
      <text x="45" y="152" fill={textColor} fontSize="8">con las nuevas (shallow).</text>
      <text x="45" y="175" fill="#38bdf8" fontSize="8">Evita re-render de UI</text>

      {/* useMemo */}
      <rect x="235" y="35" width="170" height="155" rx="8" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#818cf8" strokeWidth="1.5" />
      <text x="245" y="58" fill="#818cf8" fontWeight="700" fontSize="12">useMemo()</text>
      <text x="245" y="78" fill={textColor} fontSize="9" fontWeight="bold">Nivel: Cálculo / Valor</text>
      <rect x="245" y="88" width="150" height="35" rx="4" fill={isDark ? "#1e1b4b" : "#ffffff"} />
      <text x="252" y="104" fill="#818cf8" fontSize="8" fontFamily="monospace">useMemo(() =&gt; calc, [d])</text>
      <text x="245" y="140" fill={textColor} fontSize="8">Memoriza el resultado</text>
      <text x="245" y="152" fill={textColor} fontSize="8">de una función pesada.</text>
      <text x="245" y="175" fill="#818cf8" fontSize="8">Evita recalcular arrays</text>

      {/* useCallback */}
      <rect x="435" y="35" width="170" height="155" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="445" y="58" fill="#34d399" fontWeight="700" fontSize="12">useCallback()</text>
      <text x="445" y="78" fill={textColor} fontSize="9" fontWeight="bold">Nivel: Referencia Función</text>
      <rect x="445" y="88" width="150" height="35" rx="4" fill={isDark ? "#022c22" : "#ffffff"} />
      <text x="452" y="104" fill="#34d399" fontSize="8" fontFamily="monospace">useCallback(fn, [deps])</text>
      <text x="445" y="140" fill={textColor} fontSize="8">Preserva la referencia</text>
      <text x="445" y="152" fill={textColor} fontSize="8">estable entre renders.</text>
      <text x="445" y="175" fill="#34d399" fontSize="8">Vital para props de memo</text>
    </svg>
  );
  },

  "react-context-vs-zustand": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Context API */}
      <rect x="35" y="35" width="270" height="155" rx="10" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#38bdf8" strokeWidth="1.5" />
      <text x="50" y="58" fill="#38bdf8" fontWeight="700" fontSize="12">React Context (Baja Frecuencia)</text>
      <text x="50" y="80" fill={textColor} fontSize="9">⚠️ Inyección global acoplada:</text>
      <rect x="50" y="90" width="240" height="42" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="58" y="106" fill="#f87171" fontSize="8">Cualquier cambio en el valor</text>
      <text x="58" y="120" fill="#f87171" fontSize="8">fuerza re-render en TODOS los consumidores.</text>
      <text x="50" y="152" fill={textColor} fontSize="8">❌ No tiene selectores atómicos integrados.</text>
      <text x="50" y="170" fill={subtextColor} fontSize="8">Ideal para: Tema visual (dark/light), locale i18n.</text>

      {/* Zustand */}
      <rect x="335" y="35" width="270" height="155" rx="10" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="350" y="58" fill="#34d399" fontWeight="700" fontSize="12">Zustand (Alta Frecuencia / Client State)</text>
      <text x="350" y="80" fill={textColor} fontSize="9">⚡ Suscripciones Atómicas con Selectores:</text>
      <rect x="350" y="90" width="240" height="42" rx="4" fill={isDark ? "#022c22" : "#ffffff"} />
      <text x="358" y="106" fill="#34d399" fontSize="8" fontFamily="monospace">const count = useStore(s =&gt; s.count);</text>
      <text x="358" y="120" fill="#10b981" fontSize="8">Solo re-renderiza si &apos;count&apos; cambia!</text>
      <text x="350" y="152" fill={textColor} fontSize="8">✅ Sin necesidad de providers anidados en el árbol.</text>
      <text x="350" y="170" fill="#34d399" fontSize="8" fontWeight="bold">Estándar Enterprise para estado UI global</text>
    </svg>
  );
  },

  "react-error-boundary-tree": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Outer Tree */}
      <rect x="35" y="25" width="570" height="40" rx="6" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#38bdf8" strokeWidth="1" />
      <text x="320" y="49" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">&lt;App /&gt; (Header, Navigation activos y protegidos)</text>

      {/* Error Boundary wrapper */}
      <rect x="35" y="75" width="350" height="120" rx="8" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#818cf8" strokeWidth="1.5" />
      <text x="50" y="98" fill="#818cf8" fontWeight="700" fontSize="11">&lt;ErrorBoundary fallback=&#123;&lt;WidgetError /&gt;&#125;&gt;</text>
      
      {/* Crashed Component inside */}
      <rect x="50" y="110" width="150" height="70" rx="6" fill={isDark ? "#450a0a" : "#fee2e2"} stroke="#ef4444" strokeWidth="1" />
      <text x="60" y="132" fill="#f87171" fontWeight="bold" fontSize="10">&lt;PaymentWidget /&gt;</text>
      <text x="60" y="148" fill="#ef4444" fontSize="8">💥 TypeError lanzado!</text>
      <text x="60" y="165" fill={textColor} fontSize="8">Aislado por el boundary</text>

      {/* Fallback Display */}
      <rect x="220" y="110" width="150" height="70" rx="6" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1" />
      <text x="230" y="132" fill="#34d399" fontWeight="bold" fontSize="10">&lt;WidgetError /&gt;</text>
      <text x="230" y="148" fill={textColor} fontSize="8">Muestra UI alternativa</text>
      <text x="230" y="165" fill="#10b981" fontSize="8">con botón de reintentar</text>

      {/* Healthy Component */}
      <rect x="405" y="75" width="200" height="120" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="420" y="98" fill="#34d399" fontWeight="700" fontSize="11">&lt;UserProfile /&gt;</text>
      <text x="420" y="125" fill={textColor} fontSize="9">✅ Sigue funcionando 100%</text>
      <text x="420" y="145" fill={textColor} fontSize="8">La aplicación completa NO se rompe</text>
      <text x="420" y="170" fill="#34d399" fontSize="8" fontWeight="bold">Resiliencia y contención de fallos</text>
    </svg>
  );
  },

  "react-suspense-code-splitting": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Step 1: lazy import */}
      <rect x="35" y="45" width="170" height="135" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#38bdf8" strokeWidth="1.5" />
      <text x="45" y="68" fill="#38bdf8" fontWeight="700" fontSize="11">1. React.lazy()</text>
      <rect x="45" y="80" width="150" height="35" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="52" y="96" fill={textColor} fontSize="8" fontFamily="monospace">const Chart = lazy(() =&gt;</text>
      <text x="52" y="108" fill="#38bdf8" fontSize="8" fontFamily="monospace">  import(&quot;./Chart&quot;));</text>
      <text x="45" y="135" fill={textColor} fontSize="8">Divide en un chunk JS</text>
      <text x="45" y="148" fill={textColor} fontSize="8">separado (code-splitting).</text>
      <text x="45" y="170" fill="#38bdf8" fontSize="8">Descarga solo bajo demanda</text>

      <path d="M215 110 L245 110" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrow)" />

      {/* Step 2: Suspense Fallback */}
      <rect x="250" y="45" width="170" height="135" rx="8" fill={isDark ? "#713f12" : "#fef9c3"} stroke="#eab308" strokeWidth="1.5" />
      <text x="260" y="68" fill="#facc15" fontWeight="700" fontSize="11">2. &lt;Suspense fallback&gt;</text>
      <rect x="260" y="80" width="150" height="40" rx="4" fill={isDark ? "#422006" : "#ffffff"} />
      <text x="268" y="98" fill="#facc15" fontSize="8" fontFamily="monospace">&lt;Suspense fallback=</text>
      <text x="276" y="112" fill="#facc15" fontSize="8" fontFamily="monospace">  &#123;&lt;Skeleton /&gt;&#125;&gt;</text>
      <text x="260" y="140" fill={textColor} fontSize="8">Muestra UI de carga mientras</text>
      <text x="260" y="152" fill={textColor} fontSize="8">el chunk viaja por red.</text>
      <text x="260" y="170" fill="#f59e0b" fontSize="8">Cero parpadeos en blanco</text>

      <path d="M430 110 L460 110" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow)" />

      {/* Step 3: Resolved */}
      <rect x="465" y="45" width="140" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="475" y="68" fill="#34d399" fontWeight="700" fontSize="11">3. Chunk Resuelto</text>
      <rect x="475" y="80" width="120" height="40" rx="4" fill={isDark ? "#022c22" : "#ffffff"} />
      <text x="482" y="102" fill="#34d399" fontSize="9" fontFamily="monospace">&lt;Chart /&gt;</text>
      <text x="475" y="140" fill={textColor} fontSize="8">React intercambia el</text>
      <text x="475" y="152" fill={textColor} fontSize="8">fallback por el componente real.</text>
      <text x="475" y="170" fill="#10b981" fontSize="8" fontWeight="bold">Hidratación y 60 FPS</text>
    </svg>
  );
  },

  "react-strict-mode-double-invoke": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      <rect x="190" y="20" width="260" height="25" rx="12" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#818cf8" strokeWidth="1" />
      <text x="320" y="36" fill="#818cf8" fontSize="9" fontWeight="bold" textAnchor="middle">React.StrictMode en Entorno de Desarrollo</text>

      {/* Step 1: Initial Mount */}
      <rect x="35" y="60" width="165" height="125" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="45" y="83" fill="#34d399" fontWeight="700" fontSize="11">1. Mount Inicial</text>
      <text x="45" y="105" fill={textColor} fontSize="8">Ejecuta Setup del efecto:</text>
      <rect x="45" y="115" width="145" height="30" rx="4" fill={isDark ? "#022c22" : "#ffffff"} />
      <text x="52" y="133" fill="#34d399" fontSize="8" fontFamily="monospace">ws.connect();</text>
      <text x="45" y="165" fill="#10b981" fontSize="8">Conexión abierta</text>

      <path d="M205 120 L235 120" stroke="#f87171" strokeWidth="2" markerEnd="url(#arrow)" />

      {/* Step 2: Immediate Unmount */}
      <rect x="240" y="60" width="165" height="125" rx="8" fill={isDark ? "#450a0a" : "#fee2e2"} stroke="#ef4444" strokeWidth="1.5" />
      <text x="250" y="83" fill="#f87171" fontWeight="700" fontSize="11">2. Unmount Inmediato</text>
      <text x="250" y="105" fill={textColor} fontSize="8">Ejecuta función de Cleanup:</text>
      <rect x="250" y="115" width="145" height="30" rx="4" fill={isDark ? "#1f2937" : "#ffffff"} />
      <text x="258" y="133" fill="#f87171" fontSize="8" fontFamily="monospace">ws.disconnect();</text>
      <text x="250" y="165" fill="#ef4444" fontSize="8">Verifica idempotencia y leaks</text>

      <path d="M410 120 L440 120" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow)" />

      {/* Step 3: Re-mount */}
      <rect x="445" y="60" width="160" height="125" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="455" y="83" fill="#34d399" fontWeight="700" fontSize="11">3. Re-Mount Final</text>
      <text x="455" y="105" fill={textColor} fontSize="8">Restaura el estado limpio:</text>
      <rect x="455" y="115" width="140" height="30" rx="4" fill={isDark ? "#022c22" : "#ffffff"} />
      <text x="462" y="133" fill="#34d399" fontSize="8" fontFamily="monospace">ws.connect();</text>
      <text x="455" y="165" fill="#10b981" fontSize="8" fontWeight="bold">Garantiza efectos puros</text>
    </svg>
  );
  },

  "react-compiler-auto-memoization": ({ isDark, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* React Legacy (Manual Memo) */}
      <rect x="35" y="35" width="270" height="155" rx="10" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke={border} strokeWidth="1.5" />
      <text x="50" y="58" fill={subtextColor} fontWeight="700" fontSize="12">React 18: Memoización Manual</text>
      <rect x="50" y="70" width="240" height="60" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="58" y="88" fill="#f59e0b" fontSize="8" fontFamily="monospace">const total = useMemo(() =&gt; sum(items), [items]);</text>
      <text x="58" y="102" fill="#f59e0b" fontSize="8" fontFamily="monospace">const handleClick = useCallback(() =&gt; ..., [id]);</text>
      <text x="58" y="116" fill="#f59e0b" fontSize="8" fontFamily="monospace">export default React.memo(MyComponent);</text>
      <text x="50" y="148" fill="#f87171" fontSize="8">⚠️ Excesivo boilerplate y dependencias frágiles.</text>
      <text x="50" y="162" fill={subtextColor} fontSize="8">Errores humanos de invalidación de caché.</text>

      {/* React 19 Compiler */}
      <rect x="335" y="35" width="270" height="155" rx="10" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="350" y="58" fill="#34d399" fontWeight="700" fontSize="12">React 19 Compiler (React Forget)</text>
      <rect x="350" y="70" width="240" height="60" rx="4" fill={isDark ? "#022c22" : "#ffffff"} />
      <text x="358" y="88" fill="#34d399" fontSize="8" fontFamily="monospace">const total = sum(items); // Auto-memoizado</text>
      <text x="358" y="102" fill="#34d399" fontSize="8" fontFamily="monospace">const handleClick = () =&gt; ...; // Referencia fija</text>
      <text x="358" y="116" fill="#34d399" fontSize="8" fontFamily="monospace">export default MyComponent; // Puro y limpio</text>
      <text x="350" y="148" fill="#10b981" fontSize="8">✨ Inserción automática de guardas de memoización en AST.</text>
      <text x="350" y="162" fill="#34d399" fontSize="8" fontWeight="bold">0 sobrecarga mental. Escribe JavaScript idiomático.</text>
    </svg>
  );
  },

  "react-use-hook-promise-suspense": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Syntax Box */}
      <rect x="35" y="25" width="570" height="42" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#38bdf8" strokeWidth="1.5" />
      <text x="50" y="50" fill="#38bdf8" fontWeight="bold" fontSize="11" fontFamily="monospace">const data = use(promiseOrContext); // React 19 Primitive</text>

      {/* Left: Conditional reading */}
      <rect x="35" y="80" width="270" height="115" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="50" y="102" fill="#34d399" fontWeight="700" fontSize="11">1. Lectura Condicional Permitida</text>
      <rect x="50" y="112" width="240" height="42" rx="4" fill={isDark ? "#022c22" : "#ffffff"} />
      <text x="58" y="128" fill="#34d399" fontSize="8" fontFamily="monospace">if (isLogged) &#123;</text>
      <text x="66" y="142" fill={textColor} fontSize="8" fontFamily="monospace">  const theme = use(ThemeContext); // ✅ Válido!</text>
      <text x="58" y="150" fill="#34d399" fontSize="8" fontFamily="monospace">&#125;</text>
      <text x="50" y="178" fill="#10b981" fontSize="8">Puede ejecutarse dentro de if y bucles.</text>

      {/* Right: Suspense integration */}
      <rect x="335" y="80" width="270" height="115" rx="8" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#818cf8" strokeWidth="1.5" />
      <text x="350" y="102" fill="#818cf8" fontWeight="700" fontSize="11">2. Integración Nativa con Suspense</text>
      <rect x="350" y="112" width="240" height="42" rx="4" fill={isDark ? "#1e1b4b" : "#ffffff"} />
      <text x="358" y="128" fill="#a5b4fc" fontSize="8" fontFamily="monospace">function Profile(&#123; userPromise &#125;) &#123;</text>
      <text x="366" y="142" fill={textColor} fontSize="8" fontFamily="monospace">  const user = use(userPromise);</text>
      <text x="358" y="150" fill="#a5b4fc" fontSize="8" fontFamily="monospace">&#125;</text>
      <text x="350" y="178" fill="#818cf8" fontSize="8">Pausa render hasta resolución sin useEffect.</text>
    </svg>
  );
  },

  "react-actions-useactionstate": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Hook definition */}
      <rect x="35" y="25" width="570" height="42" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#10b981" strokeWidth="1.5" />
      <text x="50" y="50" fill="#34d399" fontWeight="bold" fontSize="11" fontFamily="monospace">const [state, formAction, isPending] = useActionState(asyncFn, initial);</text>

      {/* 3 Pillars */}
      <rect x="35" y="80" width="180" height="115" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1" />
      <text x="45" y="102" fill="#34d399" fontWeight="bold" fontSize="11">state</text>
      <text x="45" y="120" fill={textColor} fontSize="9">Último retorno de la acción:</text>
      <rect x="45" y="128" width="160" height="30" rx="4" fill={isDark ? "#022c22" : "#ffffff"} />
      <text x="52" y="146" fill="#34d399" fontSize="8" fontFamily="monospace">&#123; success: true, error: null &#125;</text>
      <text x="45" y="175" fill="#10b981" fontSize="8">Sincronizado automáticamente</text>

      <rect x="230" y="80" width="180" height="115" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#38bdf8" strokeWidth="1" />
      <text x="240" y="102" fill="#38bdf8" fontWeight="bold" fontSize="11">formAction</text>
      <text x="240" y="120" fill={textColor} fontSize="9">Pasa directamente al form:</text>
      <rect x="240" y="128" width="160" height="30" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="248" y="146" fill="#38bdf8" fontSize="8" fontFamily="monospace">&lt;form action=&#123;formAction&#125;&gt;</text>
      <text x="240" y="175" fill="#38bdf8" fontSize="8">Maneja FormData y FormData nativo</text>

      <rect x="425" y="80" width="180" height="115" rx="8" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#818cf8" strokeWidth="1" />
      <text x="435" y="102" fill="#818cf8" fontWeight="bold" fontSize="11">isPending</text>
      <text x="435" y="120" fill={textColor} fontSize="9">Estado de carga booleano:</text>
      <rect x="435" y="128" width="160" height="30" rx="4" fill={isDark ? "#1e1b4b" : "#ffffff"} />
      <text x="442" y="146" fill="#818cf8" fontSize="8" fontFamily="monospace">&lt;button disabled=&#123;isPending&#125;&gt;</text>
      <text x="435" y="175" fill="#818cf8" fontSize="8">Zero useState manual de loading</text>
    </svg>
  );
  },

  "react-useoptimistic-flow": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Step 1 */}
      <rect x="35" y="45" width="170" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="45" y="68" fill="#34d399" fontWeight="700" fontSize="11">1. Click del Usuario</text>
      <rect x="45" y="78" width="150" height="32" rx="4" fill={isDark ? "#022c22" : "#ffffff"} />
      <text x="52" y="98" fill="#34d399" fontSize="8" fontFamily="monospace">addOptimisticLike(1)</text>
      <text x="45" y="126" fill="#10b981" fontSize="9" fontWeight="bold">UI Actualizada a 0ms!</text>
      <text x="45" y="140" fill={textColor} fontSize="8">Likes: 42 ➔ 43 (Instantáneo)</text>
      <text x="45" y="165" fill="#34d399" fontSize="8">Experiencia de latencia cero</text>

      <path d="M215 110 L245 110" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arrow)" />

      {/* Step 2 */}
      <rect x="250" y="45" width="170" height="135" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#38bdf8" strokeWidth="1.5" />
      <text x="260" y="68" fill="#38bdf8" fontWeight="700" fontSize="11">2. Network Request</text>
      <rect x="260" y="78" width="150" height="32" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="268" y="98" fill="#38bdf8" fontSize="8" fontFamily="monospace">await api.likePost(id)</text>
      <text x="260" y="126" fill={textColor} fontSize="8">Petición asíncrona viaja</text>
      <text x="260" y="140" fill={textColor} fontSize="8">al servidor en segundo plano.</text>
      <text x="260" y="165" fill={subtextColor} fontSize="8">Sin bloquear la interacción</text>

      <path d="M430 110 L460 110" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow)" />

      {/* Step 3 */}
      <rect x="465" y="45" width="140" height="135" rx="8" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#818cf8" strokeWidth="1.5" />
      <text x="475" y="68" fill="#818cf8" fontWeight="700" fontSize="11">3. Resolución</text>
      <rect x="475" y="78" width="120" height="40" rx="4" fill={isDark ? "#1e1b4b" : "#ffffff"} />
      <text x="482" y="95" fill="#10b981" fontSize="8">Éxito: Confirma 43</text>
      <text x="482" y="108" fill="#ef4444" fontSize="8">Fallo: Rollback a 42</text>
      <text x="475" y="138" fill={textColor} fontSize="8">React reconcilia el</text>
      <text x="475" y="150" fill={textColor} fontSize="8">estado real automáticamente.</text>
    </svg>
  );
  },

  "react-concurrent-usetransition": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Urgent update */}
      <rect x="35" y="35" width="270" height="155" rx="10" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="50" y="60" fill="#34d399" fontWeight="700" fontSize="12">Actualización Urgente (High Priority)</text>
      <rect x="50" y="72" width="240" height="32" rx="4" fill={isDark ? "#022c22" : "#ffffff"} />
      <text x="58" y="92" fill="#34d399" fontSize="9" fontFamily="monospace">setInputValue(e.target.value)</text>
      <text x="50" y="122" fill={textColor} fontSize="9">⚡ Presupuesto: 16ms por frame (60 FPS).</text>
      <text x="50" y="138" fill={textColor} fontSize="9">Refleja tecleos y clicks instantáneamente.</text>
      <text x="50" y="154" fill={textColor} fontSize="9">Ininterrumpible por la UI.</text>
      <text x="50" y="172" fill="#10b981" fontSize="8" fontWeight="bold">Respuesta táctil inmediata</text>

      {/* Non-urgent transition */}
      <rect x="335" y="35" width="270" height="155" rx="10" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#818cf8" strokeWidth="1.5" />
      <text x="350" y="60" fill="#818cf8" fontWeight="700" fontSize="12">Transición Digerible (useTransition)</text>
      <rect x="350" y="72" width="240" height="32" rx="4" fill={isDark ? "#1e1b4b" : "#ffffff"} />
      <text x="358" y="92" fill="#818cf8" fontSize="9" fontFamily="monospace">startTransition(() =&gt; setFilter(val))</text>
      <text x="350" y="122" fill={textColor} fontSize="9">🔄 Prioridad secundaria (baja prioridad).</text>
      <text x="350" y="138" fill={textColor} fontSize="9">Render interrumpible si el usuario sigue escribiendo.</text>
      <text x="350" y="154" fill={textColor} fontSize="9">Elimina bloqueos en listas masivas (10k items).</text>
      <text x="350" y="172" fill="#818cf8" fontSize="8" fontWeight="bold">UI fluida sin congelamientos</text>
    </svg>
  );
  },

  "react-compound-components-pattern": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Parent Wrapper */}
      <rect x="35" y="30" width="570" height="160" rx="10" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#38bdf8" strokeWidth="1.5" />
      <text x="50" y="52" fill="#38bdf8" fontWeight="bold" fontSize="12" fontFamily="monospace">&lt;Select value=&#123;val&#125; onChange=&#123;setVal&#125;&gt; (Context Provider Interno)</text>

      {/* Child 1: Trigger */}
      <rect x="55" y="68" width="250" height="50" rx="6" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#818cf8" strokeWidth="1" />
      <text x="65" y="88" fill="#818cf8" fontWeight="bold" fontSize="10">&lt;Select.Trigger&gt;</text>
      <text x="65" y="105" fill={textColor} fontSize="8">Lee isOpen del context y ejecuta toggle()</text>

      {/* Child 2: Menu */}
      <rect x="325" y="68" width="260" height="105" rx="6" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1" />
      <text x="335" y="88" fill="#34d399" fontWeight="bold" fontSize="10">&lt;Select.Menu&gt;</text>
      
      <rect x="335" y="98" width="240" height="28" rx="4" fill={isDark ? "#022c22" : "#ffffff"} />
      <text x="345" y="115" fill={textColor} fontSize="8" fontFamily="monospace">&lt;Select.Option value=&quot;1&quot;&gt;Admin&lt;/Select.Option&gt;</text>
      
      <rect x="335" y="132" width="240" height="28" rx="4" fill={isDark ? "#022c22" : "#ffffff"} />
      <text x="345" y="149" fill={textColor} fontSize="8" fontFamily="monospace">&lt;Select.Option value=&quot;2&quot;&gt;Editor&lt;/Select.Option&gt;</text>

      <text x="55" y="150" fill={subtextColor} fontSize="8">Estado implícito compartido sin prop-drilling</text>
      <text x="55" y="165" fill="#38bdf8" fontSize="8" fontWeight="bold">API altamente declarativa y flexible</text>
    </svg>
  );
  },

  "react-portals-dom-hierarchy": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* React Tree */}
      <rect x="35" y="35" width="260" height="155" rx="10" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#38bdf8" strokeWidth="1.5" />
      <text x="45" y="58" fill="#38bdf8" fontWeight="700" fontSize="12">Árbol Lógico de React</text>
      <text x="45" y="80" fill={textColor} fontSize="9">&lt;App&gt;</text>
      <text x="55" y="96" fill={textColor} fontSize="9">  &lt;Sidebar style=&#123;&#123; overflow: &apos;hidden&apos; &#125;&#125;&gt;</text>
      <text x="65" y="112" fill="#a855f7" fontSize="9">    &lt;ModalPortal&gt; (createPortal)</text>
      <text x="45" y="142" fill="#10b981" fontSize="8">✨ Eventos hacen Bubble a través del</text>
      <text x="45" y="156" fill="#10b981" fontSize="8">árbol de React normalmente (onClick, etc.)</text>
      <text x="45" y="176" fill={subtextColor} fontSize="8">Context y estado accesibles sin fisuras</text>

      <path d="M305 110 L345 110" stroke="#a855f7" strokeWidth="2" strokeDasharray="3 3" markerEnd="url(#arrow)" />

      {/* Real DOM Tree */}
      <rect x="350" y="35" width="255" height="155" rx="10" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="360" y="58" fill="#34d399" fontWeight="700" fontSize="12">Árbol Físico del DOM Real</text>
      <text x="360" y="80" fill={textColor} fontSize="9">&lt;body&gt;</text>
      <text x="370" y="96" fill={textColor} fontSize="9">  &lt;div id=&quot;root&quot;&gt;&lt;Sidebar /&gt;&lt;/div&gt;</text>
      <rect x="370" y="106" width="220" height="30" rx="4" fill={isDark ? "#022c22" : "#ffffff"} />
      <text x="378" y="125" fill="#34d399" fontSize="9" fontFamily="monospace">  &lt;div id=&quot;modal-root&quot;&gt;&lt;Modal /&gt;&lt;/div&gt;</text>
      <text x="360" y="155" fill="#34d399" fontSize="8">🛡️ Inmune a `overflow: hidden`</text>
      <text x="360" y="170" fill="#34d399" fontSize="8">y problemas de `z-index` del Sidebar.</text>
    </svg>
  );
  },

  "react-server-components-rsc": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Server side */}
      <rect x="35" y="35" width="250" height="155" rx="10" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#38bdf8" strokeWidth="1.5" />
      <text x="45" y="58" fill="#38bdf8" fontWeight="700" fontSize="12">Server Components (.tsx)</text>
      <text x="45" y="80" fill={textColor} fontSize="8">async function ProductList() &#123;</text>
      <text x="55" y="94" fill="#34d399" fontSize="8">  const data = await db.query(); // BD directa</text>
      <text x="45" y="108" fill={textColor} fontSize="8">&#125;</text>
      <text x="45" y="132" fill="#10b981" fontSize="9" fontWeight="bold">0 KB en el bundle JavaScript del cliente!</text>
      <text x="45" y="148" fill={textColor} fontSize="8">Claves secretas seguras en backend.</text>
      <text x="45" y="168" fill={subtextColor} fontSize="8">Ejecuta 100% en Node/Deno/Edge.</text>

      <path d="M295 110 L345 110" stroke="#a855f7" strokeWidth="2" markerEnd="url(#arrow)" />
      <text x="320" y="102" fill="#a855f7" fontSize="8" textAnchor="middle">RSC Stream</text>

      {/* Client side */}
      <rect x="350" y="35" width="255" height="155" rx="10" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="360" y="58" fill="#34d399" fontWeight="700" fontSize="12">Client Component (&apos;use client&apos;)</text>
      <text x="360" y="80" fill={textColor} fontSize="8">&apos;use client&apos;;</text>
      <text x="360" y="94" fill="#38bdf8" fontSize="8">function LikeButton() &#123;</text>
      <text x="370" y="108" fill="#38bdf8" fontSize="8">  const [likes, setLikes] = useState(0);</text>
      <text x="360" y="122" fill={textColor} fontSize="8">&#125;</text>
      <text x="360" y="144" fill={textColor} fontSize="8">Descarga JS para interactividad:</text>
      <text x="360" y="158" fill={textColor} fontSize="8">onClick, useState, useEffect y APIs del DOM.</text>
      <text x="360" y="174" fill="#34d399" fontSize="8" fontWeight="bold">Hidratación quirúrgica mínima</text>
    </svg>
  );
  },

  "react-fiber-work-loop-slicing": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      <rect x="180" y="20" width="280" height="25" rx="12" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#818cf8" strokeWidth="1" />
      <text x="320" y="36" fill="#818cf8" fontSize="9" fontWeight="bold" textAnchor="middle">Work Loop Concurrente &amp; Time Slicing (5ms)</text>

      {/* Slice 1 */}
      <rect x="35" y="60" width="130" height="125" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="45" y="83" fill="#34d399" fontWeight="700" fontSize="10">Trozo 1 (5ms)</text>
      <text x="45" y="105" fill={textColor} fontSize="8">Diffing Node A</text>
      <text x="45" y="120" fill={textColor} fontSize="8">Diffing Node B</text>
      <rect x="45" y="132" width="110" height="25" rx="4" fill={isDark ? "#022c22" : "#ffffff"} />
      <text x="52" y="148" fill="#10b981" fontSize="8">shouldYield(): true</text>
      <text x="45" y="172" fill={subtextColor} fontSize="8">Pausa ordenada</text>

      <path d="M175 120 L205 120" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrow)" />

      {/* Yield to Browser */}
      <rect x="210" y="60" width="140" height="125" rx="8" fill={isDark ? "#713f12" : "#fef9c3"} stroke="#eab308" strokeWidth="1.5" />
      <text x="220" y="83" fill="#facc15" fontWeight="700" fontSize="10">Yield al Navegador</text>
      <text x="220" y="105" fill={textColor} fontSize="8">Cede el Main Thread:</text>
      <text x="220" y="125" fill="#facc15" fontSize="8" fontWeight="bold">Input tecleo</text>
      <text x="220" y="140" fill="#facc15" fontSize="8" fontWeight="bold">Animación 60 FPS</text>
      <text x="220" y="172" fill="#eab308" fontSize="8">0 congelamiento</text>

      <path d="M360 120 L390 120" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow)" />

      {/* Slice 2 */}
      <rect x="395" y="60" width="210" height="125" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#38bdf8" strokeWidth="1.5" />
      <text x="405" y="83" fill="#38bdf8" fontWeight="700" fontSize="10">Trozo 2: Reanudación de Trabajo</text>
      <text x="405" y="105" fill={textColor} fontSize="8">React retoma el Fiber Node C</text>
      <text x="405" y="120" fill={textColor} fontSize="8">exactamente donde lo pausó.</text>
      <rect x="405" y="132" width="190" height="25" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="412" y="148" fill="#34d399" fontSize="8">Commit Phase síncrono al final</text>
      <text x="405" y="172" fill="#38bdf8" fontSize="8" fontWeight="bold">Reconciliación colaborativa y elástica</text>
    </svg>
  );
  },

  "react-tanstack-query-architecture": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* QueryCache central */}
      <rect x="35" y="35" width="250" height="155" rx="10" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#ef4444" strokeWidth="1.5" />
      <text x="45" y="58" fill="#f87171" fontWeight="700" fontSize="12">QueryCache Global</text>
      <rect x="45" y="70" width="230" height="32" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="52" y="90" fill="#f87171" fontSize="9" fontFamily="monospace">queryKey: [&apos;users&apos;, userId]</text>
      <text x="45" y="120" fill={textColor} fontSize="8">⏱️ <tspan fontWeight="bold">staleTime (5 min):</tspan> Dato considerado fresco.</text>
      <text x="45" y="138" fill={textColor} fontSize="8">🗑️ <tspan fontWeight="bold">gcTime (30 min):</tspan> Recolección de basura.</text>
      <text x="45" y="165" fill="#ef4444" fontSize="8">Deduplicación automática de requests</text>

      <path d="M295 110 L345 110" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow)" />

      {/* Observers / UI Components */}
      <rect x="350" y="35" width="255" height="155" rx="10" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="360" y="58" fill="#34d399" fontWeight="700" fontSize="12">QueryObservers &amp; Components</text>
      <rect x="360" y="70" width="235" height="42" rx="4" fill={isDark ? "#022c22" : "#ffffff"} />
      <text x="368" y="88" fill="#34d399" fontSize="8" fontFamily="monospace">const &#123; data, isLoading &#125; =</text>
      <text x="376" y="102" fill="#34d399" fontSize="8" fontFamily="monospace">  useUserQuery(userId);</text>
      <text x="360" y="130" fill={textColor} fontSize="8">Suscripción reactiva a la clave de caché.</text>
      <text x="360" y="145" fill={textColor} fontSize="8">Mutaciones con optimistic rollback.</text>
      <text x="360" y="170" fill="#10b981" fontSize="8" fontWeight="bold">Zero useEffect data-fetching anti-patterns</text>
    </svg>
  );
  },

  "react-streaming-ssr-selective-hydration": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Streaming Server */}
      <rect x="35" y="35" width="260" height="155" rx="10" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#38bdf8" strokeWidth="1.5" />
      <text x="45" y="58" fill="#38bdf8" fontWeight="700" fontSize="12">Streaming SSR (renderToPipeableStream)</text>
      <text x="45" y="80" fill={textColor} fontSize="8">1. Envía Shell HTML inmediato (0ms TTFB):</text>
      <rect x="45" y="88" width="240" height="25" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="52" y="104" fill="#34d399" fontSize="8">&lt;Header&gt; pintado en pantalla al instante</text>
      <text x="45" y="128" fill={textColor} fontSize="8">2. Transmite trozos &lt;Suspense&gt; progresivos:</text>
      <text x="45" y="142" fill={subtextColor} fontSize="8">Los datos lentos no bloquean el resto del HTML.</text>
      <text x="45" y="168" fill="#38bdf8" fontSize="8">Elimina el cuello de botella tradicional de SSR</text>

      <path d="M305 110 L345 110" stroke="#a855f7" strokeWidth="2" markerEnd="url(#arrow)" />

      {/* Selective Hydration Client */}
      <rect x="350" y="35" width="255" height="155" rx="10" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="360" y="58" fill="#34d399" fontWeight="700" fontSize="12">Selective Hydration (Cliente)</text>
      <text x="360" y="80" fill={textColor} fontSize="8">React hidrata cada trozo de forma autónoma.</text>
      <rect x="360" y="90" width="235" height="42" rx="4" fill={isDark ? "#022c22" : "#ffffff"} />
      <text x="368" y="106" fill="#f59e0b" fontSize="8">👆 Si el usuario hace click en Comentarios:</text>
      <text x="368" y="120" fill="#34d399" fontSize="8">React prioriza hidratar esa sección primero!</text>
      <text x="360" y="152" fill={textColor} fontSize="8">El click se reproduce tras hidratarse.</text>
      <text x="360" y="172" fill="#10b981" fontSize="8" fontWeight="bold">Interactividad inmediata sin esperar todo el bundle</text>
    </svg>
  );
  },

  "react-modular-feature-first": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Feature Module Root */}
      <rect x="35" y="25" width="570" height="165" rx="10" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#38bdf8" strokeWidth="1.5" />
      <text x="50" y="47" fill="#38bdf8" fontWeight="bold" fontSize="12" fontFamily="monospace">src/features/[feature-name]/ (Módulo Encapsulado)</text>

      {/* Sub-layers */}
      <rect x="50" y="60" width="100" height="95" rx="6" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#818cf8" strokeWidth="1" />
      <text x="60" y="80" fill="#818cf8" fontWeight="bold" fontSize="10">models/</text>
      <text x="60" y="98" fill={textColor} fontSize="8">Interfaces TS</text>
      <text x="60" y="112" fill={textColor} fontSize="8">Zod Schemas</text>
      <text x="60" y="138" fill={subtextColor} fontSize="8">Contratos</text>

      <rect x="160" y="60" width="100" height="95" rx="6" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1" />
      <text x="170" y="80" fill="#34d399" fontWeight="bold" fontSize="10">api/</text>
      <text x="170" y="98" fill={textColor} fontSize="8">TanStack Query</text>
      <text x="170" y="112" fill={textColor} fontSize="8">Queries &amp; Muts</text>
      <text x="170" y="138" fill={subtextColor} fontSize="8">Server State</text>

      <rect x="270" y="60" width="100" height="95" rx="6" fill={isDark ? "#713f12" : "#fef9c3"} stroke="#eab308" strokeWidth="1" />
      <text x="280" y="80" fill="#facc15" fontWeight="bold" fontSize="10">store/</text>
      <text x="280" y="98" fill={textColor} fontSize="8">Zustand store</text>
      <text x="280" y="112" fill={textColor} fontSize="8">UI toggles</text>
      <text x="280" y="138" fill={subtextColor} fontSize="8">Client State</text>

      <rect x="380" y="60" width="105" height="95" rx="6" fill={isDark ? "#2e1065" : "#faf5ff"} stroke="#a855f7" strokeWidth="1" />
      <text x="390" y="80" fill="#c084fc" fontWeight="bold" fontSize="10">components/</text>
      <text x="390" y="98" fill={textColor} fontSize="8">UI Smart/Dumb</text>
      <text x="390" y="112" fill={textColor} fontSize="8">Tailwind / CSS</text>
      <text x="390" y="138" fill={subtextColor} fontSize="8">Vistas locales</text>

      <rect x="495" y="60" width="95" height="95" rx="6" fill={isDark ? "#450a0a" : "#fee2e2"} stroke="#ef4444" strokeWidth="1" />
      <text x="505" y="80" fill="#f87171" fontWeight="bold" fontSize="10">index.ts</text>
      <text x="505" y="98" fill={textColor} fontSize="8">Public API</text>
      <text x="505" y="112" fill={textColor} fontSize="8">Barrel estricto</text>
      <text x="505" y="138" fill="#ef4444" fontSize="8">Límite módulo</text>

      <text x="50" y="175" fill={textColor} fontSize="8">Regla: Componentes no hacen fetch() directo. Features no cruzan importaciones internas.</text>
    </svg>
  );
  }
};
