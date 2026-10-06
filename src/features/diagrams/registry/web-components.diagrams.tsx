import { DiagramRegistry } from "../diagram.types";

/** Diagramas SVG del módulo Web Components. */
export const webComponentsDiagrams: DiagramRegistry = {
  "web-components-shadow-dom": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg
      viewBox="0 0 640 280"
      className="w-full h-auto max-h-72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background container */}
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

      {/* Document / Light DOM */}
      <rect
        x="30"
        y="35"
        width="240"
        height="215"
        rx="8"
        fill={isDark ? "#1f2937" : "#ffffff"}
        stroke="#6366f1"
        strokeWidth="1.5"
      />
      <text x="45" y="60" fill="#6366f1" fontWeight="700" fontSize="13">
        Light DOM (Página Principal)
      </text>
      <text x="45" y="80" fill={subtextColor} fontSize="11">
        Estilos globales activos
      </text>

      <rect
        x="45"
        y="100"
        width="210"
        height="40"
        rx="6"
        fill={isDark ? "#374151" : "#e0e7ff"}
      />
      <text x="55" y="125" fill={textColor} fontSize="12" fontFamily="monospace">
        {"<h1>Título Global</h1>"}
      </text>

      <rect
        x="45"
        y="150"
        width="210"
        height="80"
        rx="6"
        fill={isDark ? "#312e81" : "#eef2ff"}
        stroke="#818cf8"
        strokeWidth="1"
        strokeDasharray="4 4"
      />
      <text x="55" y="172" fill="#818cf8" fontWeight="600" fontSize="11">
        &lt;custom-card&gt; (Host)
      </text>
      <text x="55" y="195" fill={subtextColor} fontSize="11">
        Contenido proyectado:
      </text>
      <text x="55" y="215" fill={textColor} fontSize="11" fontFamily="monospace">
        {"<p slot='content'>Texto</p>"}
      </text>

      {/* Shadow Boundary line */}
      <line
        x1="300"
        y1="30"
        x2="300"
        y2="255"
        stroke="#ec4899"
        strokeWidth="2"
        strokeDasharray="6 4"
      />
      <rect
        x="255"
        y="125"
        width="90"
        height="24"
        rx="12"
        fill="#ec4899"
      />
      <text
        x="300"
        y="141"
        fill="#ffffff"
        fontSize="10"
        fontWeight="700"
        textAnchor="middle"
      >
        Shadow Boundary
      </text>

      {/* Shadow DOM Tree */}
      <rect
        x="330"
        y="35"
        width="280"
        height="215"
        rx="8"
        fill={isDark ? "#064e3b" : "#ecfdf5"}
        stroke="#10b981"
        strokeWidth="1.5"
      />
      <text x="345" y="60" fill="#10b981" fontWeight="700" fontSize="13">
        #shadow-root (open)
      </text>
      <text x="345" y="80" fill={subtextColor} fontSize="11">
        100% Encapsulado (CSS Aislado)
      </text>

      {/* Scoped styles tag */}
      <rect
        x="345"
        y="95"
        width="250"
        height="35"
        rx="6"
        fill={isDark ? "#022c22" : "#d1fae5"}
      />
      <text x="355" y="117" fill="#10b981" fontSize="11" fontFamily="monospace">
        {"<style>:host { border: 1px }</style>"}
      </text>

      {/* Internal DOM & Slot */}
      <rect
        x="345"
        y="140"
        width="250"
        height="90"
        rx="6"
        fill={isDark ? "#065f46" : "#a7f3d0"}
      />
      <text x="355" y="162" fill={textColor} fontWeight="600" fontSize="11">
        Internal Tree:
      </text>
      <text x="355" y="182" fill={textColor} fontSize="11" fontFamily="monospace">
        {"<div class='internal-wrapper'>"}
      </text>
      <text x="370" y="202" fill="#047857" fontWeight="700" fontSize="11" fontFamily="monospace">
        {"<slot name='content'></slot> ⬅️ Proyección"}
      </text>
      <text x="355" y="222" fill={textColor} fontSize="11" fontFamily="monospace">
        {"</div>"}
      </text>
    </svg>
  );
  },

  "stencil-architecture": ({ isDark, textColor, border }) => {
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

      {/* Source Code */}
      <rect
        x="30"
        y="40"
        width="150"
        height="180"
        rx="8"
        fill={isDark ? "#1e293b" : "#f1f5f9"}
        stroke="#3b82f6"
        strokeWidth="1.5"
      />
      <text x="45" y="65" fill="#3b82f6" fontWeight="700" fontSize="12">
        Fuente (TSX + TS)
      </text>
      <rect x="42" y="80" width="126" height="30" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="50" y="100" fill={textColor} fontSize="10" fontFamily="monospace">
        @Component(...)
      </text>
      <rect x="42" y="120" width="126" height="30" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="50" y="140" fill={textColor} fontSize="10" fontFamily="monospace">
        @Prop() title
      </text>
      <rect x="42" y="160" width="126" height="30" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="50" y="180" fill={textColor} fontSize="10" fontFamily="monospace">
        @State() isOpen
      </text>

      {/* Stencil Compiler */}
      <rect
        x="220"
        y="70"
        width="160"
        height="120"
        rx="10"
        fill={isDark ? "#4c1d95" : "#ede9fe"}
        stroke="#8b5cf6"
        strokeWidth="2"
      />
      <text x="300" y="105" fill="#8b5cf6" fontWeight="800" fontSize="14" textAnchor="middle">
        Stencil Compiler
      </text>
      <text x="300" y="125" fill={textColor} fontSize="10" textAnchor="middle">
        • Static Analysis
      </text>
      <text x="300" y="140" fill={textColor} fontSize="10" textAnchor="middle">
        • 0 Runtime Overhead
      </text>
      <text x="300" y="155" fill={textColor} fontSize="10" textAnchor="middle">
        • Micro Virtual-DOM Build
      </text>

      {/* Output Targets */}
      <rect
        x="420"
        y="40"
        width="190"
        height="180"
        rx="8"
        fill={isDark ? "#064e3b" : "#ecfdf5"}
        stroke="#10b981"
        strokeWidth="1.5"
      />
      <text x="435" y="65" fill="#10b981" fontWeight="700" fontSize="12">
        Output Targets (100% W3C)
      </text>
      <rect x="435" y="80" width="160" height="28" rx="4" fill={isDark ? "#022c22" : "#d1fae5"} />
      <text x="445" y="98" fill="#10b981" fontSize="10" fontWeight="600">
        1. Custom Elements Nativos
      </text>
      <rect x="435" y="115" width="160" height="28" rx="4" fill={isDark ? "#022c22" : "#d1fae5"} />
      <text x="445" y="133" fill="#10b981" fontSize="10" fontWeight="600">
        2. React Wrapper (@my-ds/react)
      </text>
      <rect x="435" y="150" width="160" height="28" rx="4" fill={isDark ? "#022c22" : "#d1fae5"} />
      <text x="445" y="168" fill="#10b981" fontSize="10" fontWeight="600">
        3. Angular Wrapper (@my-ds/angular)
      </text>
      <rect x="435" y="185" width="160" height="24" rx="4" fill={isDark ? "#022c22" : "#d1fae5"} />
      <text x="445" y="201" fill="#10b981" fontSize="9" fontWeight="600">
        4. Vue Wrapper (@my-ds/vue)
      </text>
    </svg>
  );
  },

  "wc-standards-pillars": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="32" fill="#818cf8" fontSize="13" fontWeight="bold" textAnchor="middle">Los 3 Estándares Fundamentales W3C de Web Components</text>
      
      {/* Pilar 1: Custom Elements */}
      <rect x="25" y="48" width="185" height="135" rx="8" fill={isDark ? "#1e1b4b" : "#eef2ff"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="117" y="72" fill="#6366f1" fontSize="11" fontWeight="bold" textAnchor="middle">1. Custom Elements</text>
      <rect x="35" y="85" width="165" height="32" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} stroke="#818cf8" strokeWidth="1" />
      <text x="117" y="102" fill="#818cf8" fontSize="9" fontFamily="monospace" textAnchor="middle">customElements.define()</text>
      <text x="35" y="132" fill={textColor} fontSize="8.5">• Extiende HTMLElement</text>
      <text x="35" y="146" fill={textColor} fontSize="8.5">• Obligatorio guion: &lt;my-card&gt;</text>
      <text x="35" y="160" fill={textColor} fontSize="8.5">• Métodos de ciclo de vida</text>

      {/* Pilar 2: Shadow DOM */}
      <rect x="227" y="48" width="185" height="135" rx="8" fill={isDark ? "#142d3d" : "#e0f2fe"} stroke="#0284c7" strokeWidth="1.5" />
      <text x="319" y="72" fill="#0284c7" fontSize="11" fontWeight="bold" textAnchor="middle">2. Shadow DOM</text>
      <rect x="237" y="85" width="165" height="32" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} stroke="#38bdf8" strokeWidth="1" />
      <text x="319" y="102" fill="#38bdf8" fontSize="9" fontFamily="monospace" textAnchor="middle">el.attachShadow(&#123;mode&#125;)</text>
      <text x="237" y="132" fill={textColor} fontSize="8.5">• Encapsulación CSS y DOM</text>
      <text x="237" y="146" fill={textColor} fontSize="8.5">• Aislamiento de selectores</text>
      <text x="237" y="160" fill={textColor} fontSize="8.5">• Subárbol DOM privado</text>

      {/* Pilar 3: Templates & Slots */}
      <rect x="429" y="48" width="185" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="521" y="72" fill="#10b981" fontSize="11" fontWeight="bold" textAnchor="middle">3. Templates &amp; Slots</text>
      <rect x="439" y="85" width="165" height="32" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} stroke="#34d399" strokeWidth="1" />
      <text x="521" y="102" fill="#34d399" fontSize="9" fontFamily="monospace" textAnchor="middle">&lt;template&gt; &amp; &lt;slot&gt;</text>
      <text x="439" y="132" fill={textColor} fontSize="8.5">• Marcado inerte no renderizado</text>
      <text x="439" y="146" fill={textColor} fontSize="8.5">• Proyección de Light DOM</text>
      <text x="439" y="160" fill={textColor} fontSize="8.5">• Composición declarativa</text>

      <rect x="25" y="190" width="590" height="16" rx="4" fill={isDark ? "#1f2937" : "#f1f5f9"} />
      <text x="320" y="202" fill={subtextColor} fontSize="8.5" textAnchor="middle">Nativo en el navegador • Cero dependencias • Interoperable en React, Vue, Angular o Vanilla JS</text>
    </svg>
  );
  },

  "wc-lifecycle-hooks": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="32" fill="#6366f1" fontSize="12" fontWeight="bold" textAnchor="middle">Ciclo de Vida Oficial de un Custom Element Nativo</text>
      
      {/* Step 1: constructor */}
      <rect x="25" y="55" width="105" height="100" rx="6" fill={isDark ? "#1f2937" : "#ffffff"} stroke="#6366f1" strokeWidth="1.2" />
      <text x="77" y="75" fill="#6366f1" fontSize="9.5" fontWeight="bold" textAnchor="middle">constructor()</text>
      <text x="32" y="96" fill={textColor} fontSize="7.5">• super() obligatorio</text>
      <text x="32" y="109" fill={textColor} fontSize="7.5">• attachShadow()</text>
      <text x="32" y="122" fill={textColor} fontSize="7.5">• Estado inicial</text>
      <text x="32" y="140" fill="#ef4444" fontSize="7" fontWeight="bold">⛔ No tocar DOM</text>

      {/* Arrow 1 */}
      <path d="M132 105 L148 105" stroke="#6366f1" strokeWidth="1.5" />
      <polygon points="152,105 146,101 146,109" fill="#6366f1" />

      {/* Step 2: connectedCallback */}
      <rect x="154" y="55" width="112" height="100" rx="6" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.2" />
      <text x="210" y="75" fill="#10b981" fontSize="9.5" fontWeight="bold" textAnchor="middle">connectedCallback()</text>
      <text x="160" y="96" fill={textColor} fontSize="7.5">• Elemento en el DOM</text>
      <text x="160" y="109" fill={textColor} fontSize="7.5">• Renderizar markup</text>
      <text x="160" y="122" fill={textColor} fontSize="7.5">• AddEventListeners</text>
      <text x="160" y="135" fill={textColor} fontSize="7.5">• Fetch inicial</text>

      {/* Arrow 2 */}
      <path d="M268 105 L284 105" stroke="#10b981" strokeWidth="1.5" />
      <polygon points="288,105 282,101 282,109" fill="#10b981" />

      {/* Step 3: attributeChangedCallback */}
      <rect x="290" y="55" width="125" height="100" rx="6" fill={isDark ? "#1e1b4b" : "#ede9fe"} stroke="#8b5cf6" strokeWidth="1.2" />
      <text x="352" y="75" fill="#8b5cf6" fontSize="9" fontWeight="bold" textAnchor="middle">attributeChanged()</text>
      <text x="296" y="96" fill={textColor} fontSize="7.5">• Requiere static get</text>
      <text x="296" y="108" fill="#8b5cf6" fontSize="7.5" fontFamily="monospace">observedAttributes</text>
      <text x="296" y="122" fill={textColor} fontSize="7.5">• Recibe name, old, new</text>
      <text x="296" y="135" fill={textColor} fontSize="7.5">• Reactividad nativa</text>

      {/* Arrow 3 */}
      <path d="M417 105 L433 105" stroke="#8b5cf6" strokeWidth="1.5" />
      <polygon points="437,105 431,101 431,109" fill="#8b5cf6" />

      {/* Step 4: disconnectedCallback */}
      <rect x="439" y="55" width="105" height="100" rx="6" fill={isDark ? "#450a0a" : "#fef2f2"} stroke="#ef4444" strokeWidth="1.2" />
      <text x="491" y="75" fill="#ef4444" fontSize="9" fontWeight="bold" textAnchor="middle">disconnected()</text>
      <text x="445" y="96" fill={textColor} fontSize="7.5">• Elemento removido</text>
      <text x="445" y="109" fill={textColor} fontSize="7.5">• Cleanup de memoria</text>
      <text x="445" y="122" fill={textColor} fontSize="7.5">• removeEventListener</text>
      <text x="445" y="135" fill={textColor} fontSize="7.5">• AbortController.abort()</text>

      {/* Step 5: adoptedCallback */}
      <rect x="552" y="55" width="70" height="100" rx="6" fill={isDark ? "#1c1917" : "#f5f5f4"} stroke="#78716c" strokeWidth="1" />
      <text x="587" y="75" fill="#78716c" fontSize="8" fontWeight="bold" textAnchor="middle">adopted()</text>
      <text x="556" y="96" fill={subtextColor} fontSize="7">• Mover a</text>
      <text x="556" y="108" fill={subtextColor} fontSize="7">nuevo doc</text>
      <text x="556" y="120" fill={subtextColor} fontSize="7">(iframe)</text>

      <rect x="25" y="172" width="597" height="32" rx="4" fill={isDark ? "#1f2937" : "#f1f5f9"} />
      <text x="320" y="186" fill={subtextColor} fontSize="8.5" textAnchor="middle">El ciclo de vida nativo garantiza orden determinista sin runtime externo.</text>
      <text x="320" y="198" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">✅ Compatible con Garbage Collector del navegador</text>
    </svg>
  );
  },

  "wc-styling-host-slotted-part": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill="#6366f1" fontSize="12" fontWeight="bold" textAnchor="middle">Estilización en Shadow DOM: :host, ::slotted y ::part</text>

      {/* Light DOM Context (Outside) */}
      <rect x="25" y="45" width="260" height="145" rx="8" fill={isDark ? "#1e1b4b" : "#eef2ff"} stroke="#6366f1" strokeWidth="1.2" />
      <text x="35" y="65" fill="#6366f1" fontSize="10" fontWeight="bold">Light DOM / CSS Global</text>
      <rect x="35" y="75" width="240" height="42" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} stroke="#818cf8" strokeWidth="1" />
      <text x="42" y="90" fill="#818cf8" fontSize="8.5" fontFamily="monospace">custom-card::part(btn) &#123;</text>
      <text x="52" y="104" fill="#10b981" fontSize="8.5" fontFamily="monospace">  background: #10b981; &#125;</text>
      <text x="35" y="135" fill={textColor} fontSize="8">• CSS Global NO penetra el Shadow DOM</text>
      <text x="35" y="148" fill={textColor} fontSize="8">• ::part() abre agujero de estilo controlado</text>
      <text x="35" y="161" fill={textColor} fontSize="8">• CSS Variables (--custom-color) sí heredan</text>

      {/* Shadow DOM Boundary */}
      <rect x="315" y="45" width="300" height="145" rx="8" fill={isDark ? "#142d3d" : "#e0f2fe"} stroke="#0284c7" strokeWidth="1.2" />
      <text x="325" y="65" fill="#0284c7" fontSize="10" fontWeight="bold">Shadow DOM Interno</text>

      {/* :host */}
      <rect x="325" y="75" width="135" height="48" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} stroke="#38bdf8" strokeWidth="1" />
      <text x="332" y="90" fill="#38bdf8" fontSize="8.5" fontWeight="bold">:host &amp; :host([theme])</text>
      <text x="332" y="103" fill={subtextColor} fontSize="7.5">Estiliza la etiqueta host</text>
      <text x="332" y="115" fill={subtextColor} fontSize="7.5">exterior desde adentro</text>

      {/* ::slotted */}
      <rect x="470" y="75" width="135" height="48" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} stroke="#0ea5e9" strokeWidth="1" />
      <text x="477" y="90" fill="#0ea5e9" fontSize="8.5" fontWeight="bold">::slotted(&lt;selector&gt;)</text>
      <text x="477" y="103" fill={subtextColor} fontSize="7.5">Estiliza hijos inyectados</text>
      <text x="477" y="115" fill={subtextColor} fontSize="7.5">(solo 1er nivel)</text>

      {/* part="btn" node */}
      <rect x="325" y="132" width="280" height="48" rx="4" fill={isDark ? "#064e3b" : "#dcfce7"} stroke="#10b981" strokeWidth="1.2" />
      <text x="335" y="150" fill="#059669" fontSize="9" fontFamily="monospace" fontWeight="bold">&lt;button part=&quot;btn&quot;&gt;Confirmar&lt;/button&gt;</text>
      <text x="335" y="165" fill={textColor} fontSize="8">Expone el nodo al selector externo ::part(btn) para Design Systems</text>

      <path d="M277 96 L313 96" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3 3" />
      <polygon points="315,96 309,92 309,100" fill="#10b981" />
    </svg>
  );
  },

  "wc-lit-architecture": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="32" fill="#3b82f6" fontSize="12" fontWeight="bold" textAnchor="middle">Arquitectura de Rendimiento de Lit (LitElement &amp; lit-html)</text>

      {/* Col 1: Class + Decorators */}
      <rect x="25" y="48" width="180" height="140" rx="8" fill={isDark ? "#1e1b4b" : "#ede9fe"} stroke="#6366f1" strokeWidth="1.2" />
      <text x="115" y="68" fill="#6366f1" fontSize="10.5" fontWeight="bold" textAnchor="middle">LitElement Class</text>
      <rect x="35" y="78" width="160" height="40" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} stroke="#818cf8" strokeWidth="1" />
      <text x="42" y="93" fill="#818cf8" fontSize="8" fontFamily="monospace">@property() name;</text>
      <text x="42" y="107" fill="#818cf8" fontSize="8" fontFamily="monospace">@state() count = 0;</text>
      <text x="35" y="136" fill={textColor} fontSize="8">• Reactividad asíncrona batched</text>
      <text x="35" y="150" fill={textColor} fontSize="8">• Microtask scheduling</text>
      <text x="35" y="164" fill={textColor} fontSize="8">• Hereda de HTMLElement nativo</text>

      {/* Arrow 1 -> 2 */}
      <path d="M207 115 L227 115" stroke="#6366f1" strokeWidth="2" />
      <polygon points="230,115 223,111 223,119" fill="#6366f1" />

      {/* Col 2: Tagged Template Literal */}
      <rect x="232" y="48" width="180" height="140" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.2" />
      <text x="322" y="68" fill="#10b981" fontSize="10.5" fontWeight="bold" textAnchor="middle">lit-html Template</text>
      <rect x="242" y="78" width="160" height="40" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} stroke="#34d399" strokeWidth="1" />
      <text x="248" y="93" fill="#34d399" fontSize="8" fontFamily="monospace">render() &#123;</text>
      <text x="254" y="107" fill="#34d399" fontSize="7.5" fontFamily="monospace">  return html`&lt;p&gt;$&#123;count&#125;&lt;/p&gt;`;</text>
      <text x="242" y="136" fill={textColor} fontSize="8">• Tagged Template Literal estándar</text>
      <text x="242" y="150" fill={textColor} fontSize="8">• Separa estático vs dinámico</text>
      <text x="242" y="164" fill={textColor} fontSize="8">• Cachea el template DOM nativo</text>

      {/* Arrow 2 -> 3 */}
      <path d="M414 115 L434 115" stroke="#10b981" strokeWidth="2" />
      <polygon points="437,115 430,111 430,119" fill="#10b981" />

      {/* Col 3: DOM Mutator */}
      <rect x="439" y="48" width="175" height="140" rx="8" fill={isDark ? "#142d3d" : "#e0f2fe"} stroke="#0284c7" strokeWidth="1.2" />
      <text x="526" y="68" fill="#0284c7" fontSize="10.5" fontWeight="bold" textAnchor="middle">Mutación Quirúrgica</text>
      <rect x="449" y="78" width="155" height="40" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} stroke="#38bdf8" strokeWidth="1" />
      <text x="455" y="95" fill="#0284c7" fontSize="8" fontWeight="bold">NO hay Virtual DOM</text>
      <text x="455" y="109" fill={subtextColor} fontSize="7.5">Actualiza solo nodos mutados</text>
      <text x="449" y="136" fill={textColor} fontSize="8">• Cero diffing de árbol JS</text>
      <text x="449" y="150" fill={textColor} fontSize="8">• Bundle ultraligero (~5 KB)</text>
      <text x="449" y="164" fill="#059669" fontSize="8" fontWeight="bold">⚡ Rendimiento de 60 FPS</text>
    </svg>
  );
  },

  "wc-shadow-dom-vs-virtual-dom": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill="#6366f1" fontSize="12" fontWeight="bold" textAnchor="middle">Comparativa Arquitectónica: Shadow DOM vs Virtual DOM</text>

      {/* Left: Shadow DOM */}
      <rect x="25" y="45" width="285" height="145" rx="8" fill={isDark ? "#142d3d" : "#e0f2fe"} stroke="#0284c7" strokeWidth="1.2" />
      <text x="167" y="67" fill="#0284c7" fontSize="11" fontWeight="bold" textAnchor="middle">Shadow DOM (Estándar de Navegador)</text>
      <text x="40" y="90" fill={textColor} fontSize="8.5">• <tspan fontWeight="bold">Implementación:</tspan> C++ Nativo del navegador web</text>
      <text x="40" y="106" fill={textColor} fontSize="8.5">• <tspan fontWeight="bold">Propósito:</tspan> Encapsulación de CSS y marcado DOM</text>
      <text x="40" y="122" fill={textColor} fontSize="8.5">• <tspan fontWeight="bold">Árbol:</tspan> Subárbol real acoplado a un Shadow Host</text>
      <text x="40" y="138" fill={textColor} fontSize="8.5">• <tspan fontWeight="bold">Aislamiento de estilos:</tspan> 100% nativo y blindado</text>
      <text x="40" y="154" fill={textColor} fontSize="8.5">• <tspan fontWeight="bold">Velocidad:</tspan> Manejado por el motor de render</text>
      <rect x="40" y="165" width="255" height="18" rx="3" fill={isDark ? "#0c4a6e" : "#bae6fd"} />
      <text x="167" y="177" fill="#0369a1" fontSize="8" fontWeight="bold" textAnchor="middle">Objetivo: Encapsulación y Reutilización</text>

      {/* Right: Virtual DOM */}
      <rect x="330" y="45" width="285" height="145" rx="8" fill={isDark ? "#1e1b4b" : "#ede9fe"} stroke="#8b5cf6" strokeWidth="1.2" />
      <text x="472" y="67" fill="#8b5cf6" fontSize="11" fontWeight="bold" textAnchor="middle">Virtual DOM (Patrón de Librería JS)</text>
      <text x="345" y="90" fill={textColor} fontSize="8.5">• <tspan fontWeight="bold">Implementación:</tspan> Árbol de objetos JS en memoria (React)</text>
      <text x="345" y="106" fill={textColor} fontSize="8.5">• <tspan fontWeight="bold">Propósito:</tspan> Minimizar operaciones de escritura en el DOM</text>
      <text x="345" y="122" fill={textColor} fontSize="8.5">• <tspan fontWeight="bold">Árbol:</tspan> Copia virtual procesada con algoritmo Diffing</text>
      <text x="345" y="138" fill={textColor} fontSize="8.5">• <tspan fontWeight="bold">Aislamiento de estilos:</tspan> NINGUNO (requiere CSS Modules)</text>
      <text x="345" y="154" fill={textColor} fontSize="8.5">• <tspan fontWeight="bold">Costo:</tspan> Sobrecarga de memoria y reconciliación JS</text>
      <rect x="345" y="165" width="255" height="18" rx="3" fill={isDark ? "#4c1d95" : "#ddd6fe"} />
      <text x="472" y="177" fill="#5b21b6" fontSize="8" fontWeight="bold" textAnchor="middle">Objetivo: Optimización de Renderizado en JS</text>
    </svg>
  );
  },

  "wc-declarative-shadow-dom": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="32" fill="#10b981" fontSize="12" fontWeight="bold" textAnchor="middle">Declarative Shadow DOM (SSR sin FOUC)</text>

      {/* Step 1: Servidor SSR */}
      <rect x="25" y="48" width="180" height="135" rx="8" fill={isDark ? "#1e1b4b" : "#eef2ff"} stroke="#6366f1" strokeWidth="1.2" />
      <text x="115" y="68" fill="#6366f1" fontSize="10.5" fontWeight="bold" textAnchor="middle">1. Servidor (SSR)</text>
      <rect x="35" y="78" width="160" height="52" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} stroke="#818cf8" strokeWidth="1" />
      <text x="42" y="93" fill="#818cf8" fontSize="7.5" fontFamily="monospace">&lt;my-card&gt;</text>
      <text x="48" y="106" fill="#10b981" fontSize="7.5" fontFamily="monospace">  &lt;template shadowrootmode=&quot;open&quot;&gt;</text>
      <text x="54" y="119" fill="#818cf8" fontSize="7.5" fontFamily="monospace">    &lt;style&gt;...&lt;/style&gt;</text>
      <text x="35" y="148" fill={textColor} fontSize="8">• HTML estándar emitido por servidor</text>
      <text x="35" y="162" fill={textColor} fontSize="8">• Next.js, Astro, Remix, Nuxt</text>

      {/* Arrow 1 */}
      <path d="M207 115 L227 115" stroke="#6366f1" strokeWidth="2" />
      <polygon points="230,115 223,111 223,119" fill="#6366f1" />

      {/* Step 2: HTML Parser */}
      <rect x="232" y="48" width="180" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.2" />
      <text x="322" y="68" fill="#10b981" fontSize="10.5" fontWeight="bold" textAnchor="middle">2. Parser HTML de Browser</text>
      <rect x="242" y="78" width="160" height="52" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} stroke="#34d399" strokeWidth="1" />
      <text x="248" y="95" fill="#059669" fontSize="8" fontWeight="bold">Convierte template a ShadowRoot</text>
      <text x="248" y="110" fill={subtextColor} fontSize="7.5">De forma instantánea al parsear</text>
      <text x="248" y="122" fill="#10b981" fontSize="7.5" fontWeight="bold">SIN esperar a cargar JavaScript</text>
      <text x="242" y="148" fill={textColor} fontSize="8">• Cero parpadeo visual (No FOUC)</text>
      <text x="242" y="162" fill={textColor} fontSize="8">• Pintura en el primer frame</text>

      {/* Arrow 2 */}
      <path d="M414 115 L434 115" stroke="#10b981" strokeWidth="2" />
      <polygon points="437,115 430,111 430,119" fill="#10b981" />

      {/* Step 3: JS Hydration */}
      <rect x="439" y="48" width="175" height="135" rx="8" fill={isDark ? "#142d3d" : "#e0f2fe"} stroke="#0284c7" strokeWidth="1.2" />
      <text x="526" y="68" fill="#0284c7" fontSize="10.5" fontWeight="bold" textAnchor="middle">3. Hidratación con JS</text>
      <rect x="449" y="78" width="155" height="52" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} stroke="#38bdf8" strokeWidth="1" />
      <text x="455" y="95" fill="#0284c7" fontSize="8" fontFamily="monospace">customElements.define()</text>
      <text x="455" y="110" fill={subtextColor} fontSize="7.5">Reutiliza el shadowRoot ya creado</text>
      <text x="455" y="122" fill="#059669" fontSize="7.5" fontWeight="bold">el.shadowRoot intacto</text>
      <text x="449" y="148" fill={textColor} fontSize="8">• Adjunta listeners de eventos</text>
      <text x="449" y="162" fill={textColor} fontSize="8">• Interactivo en segundos</text>

      <rect x="25" y="190" width="589" height="18" rx="4" fill={isDark ? "#1f2937" : "#f1f5f9"} />
      <text x="320" y="202" fill={subtextColor} fontSize="8.5" textAnchor="middle">Soportado de forma nativa en Chrome, Edge, Firefox y Safari modernos.</text>
    </svg>
  );
  },

  "wc-event-retargeting": ({ isDark, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill="#6366f1" fontSize="12" fontWeight="bold" textAnchor="middle">Event Retargeting y Propagación Cruzada (composed: true)</text>

      {/* Shadow DOM Boundary Container */}
      <rect x="30" y="45" width="260" height="145" rx="8" fill={isDark ? "#142d3d" : "#e0f2fe"} stroke="#0284c7" strokeWidth="1.2" />
      <text x="40" y="65" fill="#0284c7" fontSize="10" fontWeight="bold">Interior de &lt;custom-modal&gt; (Shadow DOM)</text>

      <rect x="45" y="80" width="230" height="42" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} stroke="#38bdf8" strokeWidth="1" />
      <circle cx="65" cy="101" r="10" fill="#ef4444" />
      <text x="65" y="105" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">X</text>
      <text x="85" y="96" fill="#38bdf8" fontSize="8.5" fontFamily="monospace">&lt;button id=&quot;closeBtn&quot;&gt;</text>
      <text x="85" y="110" fill={subtextColor} fontSize="7.5">Origen del evento clic en nodo privado</text>

      <rect x="45" y="132" width="230" height="46" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} stroke="#0284c7" strokeWidth="1" />
      <text x="52" y="147" fill="#0284c7" fontSize="8" fontFamily="monospace">new CustomEvent(&apos;close&apos;, &#123;</text>
      <text x="60" y="160" fill="#10b981" fontSize="8" fontFamily="monospace">  bubbles: true, composed: true</text>
      <text x="52" y="171" fill="#0284c7" fontSize="8" fontFamily="monospace">&#125;)</text>

      {/* Arrow crossing boundary */}
      <path d="M292 101 L345 101" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 4" />
      <polygon points="348,101 341,97 341,105" fill="#ef4444" />
      <text x="320" y="93" fill="#ef4444" fontSize="8" fontWeight="bold" textAnchor="middle">Retargeting</text>

      {/* Document Level Listener */}
      <rect x="350" y="45" width="260" height="145" rx="8" fill={isDark ? "#1e1b4b" : "#ede9fe"} stroke="#6366f1" strokeWidth="1.2" />
      <text x="360" y="65" fill="#6366f1" fontSize="10" fontWeight="bold">Document / Página Principal (Light DOM)</text>

      <rect x="360" y="78" width="240" height="50" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} stroke="#818cf8" strokeWidth="1" />
      <text x="368" y="94" fill="#818cf8" fontSize="8" fontFamily="monospace">document.addEventListener(&apos;click&apos;, e =&gt; &#123;</text>
      <text x="375" y="108" fill="#10b981" fontSize="8" fontFamily="monospace">  console.log(e.target);</text>
      <text x="375" y="120" fill="#f59e0b" fontSize="7.5" fontFamily="monospace">  Retargeting: &lt;custom-modal&gt; (NO button#closeBtn)</text>
      <text x="368" y="132" fill="#818cf8" fontSize="8" fontFamily="monospace">&#125;);</text>

      <rect x="360" y="136" width="240" height="42" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} stroke="#10b981" strokeWidth="1" />
      <text x="368" y="152" fill="#10b981" fontSize="8" fontFamily="monospace">e.composedPath() // Lista completa:</text>
      <text x="368" y="166" fill={subtextColor} fontSize="7" fontFamily="monospace">[button, shadowRoot, custom-modal, body, window]</text>
    </svg>
  );
  },

  "wc-element-internals-form": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill="#10b981" fontSize="12" fontWeight="bold" textAnchor="middle">ElementInternals: Integración Nativa con Formularios HTML</text>

      {/* Box 1: Custom Element */}
      <rect x="25" y="45" width="270" height="145" rx="8" fill={isDark ? "#1e1b4b" : "#eef2ff"} stroke="#6366f1" strokeWidth="1.2" />
      <text x="35" y="65" fill="#6366f1" fontSize="10.5" fontWeight="bold">Custom Element con ElementInternals</text>

      <rect x="35" y="75" width="250" height="42" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} stroke="#818cf8" strokeWidth="1" />
      <text x="42" y="90" fill="#818cf8" fontSize="8" fontFamily="monospace">class RatingInput extends HTMLElement &#123;</text>
      <text x="48" y="103" fill="#10b981" fontSize="8" fontFamily="monospace">  static formAssociated = true;</text>
      <text x="48" y="115" fill="#818cf8" fontSize="8" fontFamily="monospace">  this.internals = this.attachInternals();</text>

      <rect x="35" y="124" width="250" height="55" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} stroke="#34d399" strokeWidth="1" />
      <text x="42" y="140" fill="#059669" fontSize="8" fontFamily="monospace">this.internals.setFormValue(val);</text>
      <text x="42" y="154" fill="#059669" fontSize="8" fontFamily="monospace">this.internals.setValidity(flags, msg);</text>
      <text x="42" y="168" fill="#818cf8" fontSize="8" fontFamily="monospace">this.internals.form; // Acceso al &lt;form&gt;</text>

      {/* Arrow */}
      <path d="M297 117 L340 117" stroke="#10b981" strokeWidth="2" />
      <polygon points="343,117 336,113 336,121" fill="#10b981" />

      {/* Box 2: Form Container */}
      <rect x="345" y="45" width="270" height="145" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.2" />
      <text x="355" y="65" fill="#10b981" fontSize="10.5" fontWeight="bold">Contenedor &lt;form action=&quot;...&quot;&gt;</text>

      <rect x="355" y="75" width="250" height="42" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} stroke="#10b981" strokeWidth="1" />
      <text x="362" y="92" fill="#10b981" fontSize="8" fontFamily="monospace">&lt;form id=&quot;userForm&quot;&gt;</text>
      <text x="370" y="106" fill="#818cf8" fontSize="8" fontFamily="monospace">  &lt;rating-input name=&quot;score&quot;&gt;&lt;/rating-input&gt;</text>

      <text x="355" y="135" fill={textColor} fontSize="8.5">• <tspan fontWeight="bold">FormData:</tspan> new FormData(form).get(&apos;score&apos;)</text>
      <text x="355" y="150" fill={textColor} fontSize="8.5">• <tspan fontWeight="bold">Validación nativa:</tspan> form.checkValidity()</text>
      <text x="355" y="165" fill={textColor} fontSize="8.5">• <tspan fontWeight="bold">Pseudo-clases:</tspan> :valid, :invalid automáticos</text>
      <text x="355" y="180" fill="#059669" fontSize="8" fontWeight="bold">✅ Cero hacks de inputs &lt;input type=&quot;hidden&quot;&gt;</text>
    </svg>
  );
  }
};
