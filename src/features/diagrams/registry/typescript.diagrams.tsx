import { DiagramRegistry } from "../diagram.types";

/** Diagramas SVG del módulo TypeScript. */
export const typescriptDiagrams: DiagramRegistry = {
  "typescript-pipeline": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* TS Source */}
      <rect x="35" y="45" width="160" height="145" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="50" y="70" fill="#3b82f6" fontWeight="700" fontSize="12">Código TypeScript (.ts)</text>
      <rect x="50" y="85" width="130" height="30" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="60" y="104" fill={textColor} fontSize="9" fontFamily="monospace">interface User {"{ id: number }"}</text>
      <rect x="50" y="125" width="130" height="45" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="60" y="143" fill={subtextColor} fontSize="9">Tipos estáticos,</text>
      <text x="60" y="157" fill="#3b82f6" fontSize="9">Generics y Uniones</text>

      {/* TS Compiler */}
      <rect x="235" y="45" width="170" height="145" rx="8" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="250" y="70" fill="#818cf8" fontWeight="700" fontSize="12">Compilador (tsc)</text>
      <rect x="250" y="85" width="140" height="30" rx="4" fill={isDark ? "#1e1b4b" : "#ddd6fe"} />
      <text x="260" y="104" fill="#a5b4fc" fontSize="9" fontFamily="monospace">1. Type Checker</text>
      <rect x="250" y="125" width="140" height="45" rx="4" fill={isDark ? "#1e1b4b" : "#ddd6fe"} />
      <text x="260" y="143" fill={textColor} fontSize="9">2. Type Erasure</text>
      <text x="260" y="157" fill="#818cf8" fontSize="8">(Elimina interfaces/tipos)</text>

      {/* Plain JS Output */}
      <rect x="445" y="45" width="160" height="145" rx="8" fill={isDark ? "#713f12" : "#fef08a"} stroke="#eab308" strokeWidth="1.5" />
      <text x="460" y="70" fill="#eab308" fontWeight="700" fontSize="12">JavaScript Emitted (.js)</text>
      <rect x="460" y="85" width="130" height="30" rx="4" fill={isDark ? "#422006" : "#fef9c3"} />
      <text x="470" y="104" fill="#fef08a" fontSize="9" fontFamily="monospace">const user = {"{ id: 1 }"}</text>
      <rect x="460" y="125" width="130" height="45" rx="4" fill={isDark ? "#422006" : "#fef9c3"} />
      <text x="470" y="143" fill={textColor} fontSize="9">100% Estándar ECMAScript</text>
      <text x="470" y="157" fill="#eab308" fontSize="8">Ejecuta en V8/Node/Browser</text>

      <path d="M198 115 L230 115" stroke="#6366f1" strokeWidth="2" />
      <path d="M408 115 L440 115" stroke="#eab308" strokeWidth="2" />
    </svg>
  );
  },

  "ts-basic-types-hierarchy": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Top Types */}
      <rect x="220" y="25" width="200" height="34" rx="6" fill={isDark ? "#312e81" : "#e0e7ff"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="320" y="46" fill="#818cf8" fontWeight="700" fontSize="11" textAnchor="middle">Top Types: unknown / any</text>

      <path d="M270 59 L130 95" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="3 3" />
      <path d="M320 59 L320 95" stroke="#6366f1" strokeWidth="1.5" />
      <path d="M370 59 L510 95" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="3 3" />

      {/* Primitive Types */}
      <rect x="35" y="95" width="180" height="55" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="125" y="115" fill="#34d399" fontWeight="700" fontSize="11" textAnchor="middle">Primitivos</text>
      <text x="125" y="132" fill={textColor} fontSize="9" textAnchor="middle" fontFamily="monospace">string | number | boolean</text>
      <text x="125" y="143" fill={subtextColor} fontSize="8" textAnchor="middle" fontFamily="monospace">symbol | bigint</text>

      {/* Special Types */}
      <rect x="235" y="95" width="170" height="55" rx="8" fill={isDark ? "#713f12" : "#fef9c3"} stroke="#eab308" strokeWidth="1.5" />
      <text x="320" y="115" fill="#facc15" fontWeight="700" fontSize="11" textAnchor="middle">Vacíos & Nulos</text>
      <text x="320" y="132" fill={textColor} fontSize="9" textAnchor="middle" fontFamily="monospace">void | undefined | null</text>
      <text x="320" y="143" fill={subtextColor} fontSize="8" textAnchor="middle">Ausencia de valor</text>

      {/* Complex Types */}
      <rect x="425" y="95" width="180" height="55" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="515" y="115" fill="#60a5fa" fontWeight="700" fontSize="11" textAnchor="middle">Compuestos</text>
      <text x="515" y="132" fill={textColor} fontSize="9" textAnchor="middle" fontFamily="monospace">object | Array&lt;T&gt;</text>
      <text x="515" y="143" fill={subtextColor} fontSize="8" textAnchor="middle" fontFamily="monospace">Function | [T, U] Tuple</text>

      <path d="M130 150 L270 175" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3 3" />
      <path d="M320 150 L320 175" stroke="#ef4444" strokeWidth="1.5" />
      <path d="M510 150 L370 175" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3 3" />

      {/* Bottom Type */}
      <rect x="220" y="175" width="200" height="28" rx="6" fill={isDark ? "#450a0a" : "#fee2e2"} stroke="#ef4444" strokeWidth="1.5" />
      <text x="320" y="193" fill="#f87171" fontWeight="700" fontSize="11" textAnchor="middle">Bottom Type: never (Imposible / Vacío)</text>
    </svg>
  );
  },

  "ts-interface-declaration-merging": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* Interface 1 */}
      <rect x="35" y="45" width="165" height="135" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="45" y="68" fill="#60a5fa" fontWeight="700" fontSize="11">interface User &#123;</text>
      <text x="55" y="92" fill={textColor} fontSize="10" fontFamily="monospace">id: number;</text>
      <text x="55" y="112" fill={textColor} fontSize="10" fontFamily="monospace">name: string;</text>
      <text x="45" y="136" fill="#60a5fa" fontWeight="700" fontSize="11">&#125;</text>
      <text x="45" y="165" fill={subtextColor} fontSize="9">Módulo Core</text>

      <text x="215" y="118" fill="#a855f7" fontSize="20" fontWeight="bold">+</text>

      {/* Interface 2 */}
      <rect x="240" y="45" width="165" height="135" rx="8" fill={isDark ? "#2e1065" : "#faf5ff"} stroke="#a855f7" strokeWidth="1.5" />
      <text x="250" y="68" fill="#c084fc" fontWeight="700" fontSize="11">interface User &#123;</text>
      <text x="260" y="92" fill={textColor} fontSize="10" fontFamily="monospace">role: &quot;admin&quot;;</text>
      <text x="260" y="112" fill={textColor} fontSize="10" fontFamily="monospace">token?: string;</text>
      <text x="250" y="136" fill="#c084fc" fontWeight="700" fontSize="11">&#125;</text>
      <text x="250" y="165" fill={subtextColor} fontSize="9">Extensión / Plugin</text>

      <path d="M415 112 L440 112" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow)" />

      {/* Merged Result */}
      <rect x="445" y="40" width="160" height="145" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="455" y="63" fill="#34d399" fontWeight="700" fontSize="11">Declaration Merging</text>
      <rect x="455" y="75" width="140" height="75" rx="4" fill={isDark ? "#022c22" : "#d1fae5"} />
      <text x="462" y="92" fill={textColor} fontSize="9" fontFamily="monospace">id: number;</text>
      <text x="462" y="108" fill={textColor} fontSize="9" fontFamily="monospace">name: string;</text>
      <text x="462" y="124" fill="#34d399" fontSize="9" fontFamily="monospace">role: &quot;admin&quot;;</text>
      <text x="462" y="140" fill={subtextColor} fontSize="9" fontFamily="monospace">token?: string;</text>
      <text x="455" y="172" fill="#10b981" fontSize="9" fontWeight="600">Unificado en compilador</text>
    </svg>
  );
  },

  "ts-any-vs-unknown-safety": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* any side */}
      <rect x="35" y="35" width="270" height="155" rx="10" fill={isDark ? "#450a0a" : "#fee2e2"} stroke="#ef4444" strokeWidth="1.5" />
      <text x="50" y="62" fill="#f87171" fontWeight="700" fontSize="13">let val: any (Inseguro)</text>
      <rect x="50" y="75" width="240" height="35" rx="6" fill={isDark ? "#1f2937" : "#ffffff"} />
      <text x="60" y="96" fill={textColor} fontSize="10" fontFamily="monospace">val.trim().toUpperCase()</text>
      <text x="50" y="130" fill="#f87171" fontSize="10">❌ Desactiva el type-checker por completo.</text>
      <text x="50" y="147" fill="#f87171" fontSize="10">💥 Si `val` es número: Runtime TypeError!</text>
      <text x="50" y="172" fill={subtextColor} fontSize="9">Escape hatch peligroso (Banned en producción)</text>

      {/* unknown side */}
      <rect x="335" y="35" width="270" height="155" rx="10" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="350" y="62" fill="#34d399" fontWeight="700" fontSize="13">let val: unknown (Type-Safe)</text>
      <rect x="350" y="75" width="240" height="50" rx="6" fill={isDark ? "#1f2937" : "#ffffff"} />
      <text x="360" y="93" fill="#34d399" fontSize="9" fontFamily="monospace">if (typeof val === &quot;string&quot;) &#123;</text>
      <text x="375" y="112" fill={textColor} fontSize="9" fontFamily="monospace">  val.trim(); // ✅ Seguro</text>
      <text x="360" y="122" fill="#34d399" fontSize="9" fontFamily="monospace">&#125;</text>
      <text x="350" y="147" fill="#34d399" fontSize="10">🛡️ Obliga a estrechar (Narrowing) antes de usar.</text>
      <text x="350" y="172" fill={subtextColor} fontSize="9">Top-type seguro para deserializaciones y APIs</text>
    </svg>
  );
  },

  "ts-literal-types-narrowing": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* Broad Type */}
      <rect x="35" y="55" width="160" height="110" rx="8" fill={isDark ? "#1f2937" : "#f1f5f9"} stroke={border} strokeWidth="1.5" />
      <text x="50" y="80" fill={subtextColor} fontSize="11" fontWeight="bold">Tipo Primitivo Amplio</text>
      <rect x="50" y="95" width="130" height="30" rx="4" fill={isDark ? "#111827" : "#ffffff"} />
      <text x="60" y="114" fill="#93c5fd" fontSize="11" fontFamily="monospace">string</text>
      <text x="50" y="145" fill={subtextColor} fontSize="9">Infinitas cadenas posibles</text>

      <path d="M205 110 L250 110" stroke="#3b82f6" strokeWidth="2" />
      <text x="228" y="102" fill="#60a5fa" fontSize="9" textAnchor="middle">Estrechar</text>

      {/* Literal Union */}
      <rect x="260" y="40" width="345" height="140" rx="8" fill={isDark ? "#1e1b4b" : "#eef2ff"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="275" y="65" fill="#818cf8" fontWeight="700" fontSize="12">Union de Literales Específicos</text>
      <rect x="275" y="78" width="315" height="34" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="285" y="99" fill="#38bdf8" fontSize="10" fontFamily="monospace">type Method = &quot;GET&quot; | &quot;POST&quot; | &quot;PUT&quot; | &quot;DELETE&quot;</text>
      
      <rect x="275" y="120" width="150" height="45" rx="4" fill={isDark ? "#022c22" : "#d1fae5"} />
      <text x="285" y="137" fill="#10b981" fontSize="9" fontWeight="bold">✅ Autocompletado IDE</text>
      <text x="285" y="152" fill={textColor} fontSize="8">Previene typos en tiempo de compilación</text>

      <rect x="435" y="120" width="155" height="45" rx="4" fill={isDark ? "#450a0a" : "#fee2e2"} />
      <text x="445" y="137" fill="#ef4444" fontSize="9" fontWeight="bold">❌ Rechaza valores ajenos</text>
      <text x="445" y="152" fill={textColor} fontSize="8">&quot;PATCH&quot; lanza error estático</text>
    </svg>
  );
  },

  "ts-null-vs-undefined-strict": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* strictNullChecks badge */}
      <rect x="220" y="22" width="200" height="26" rx="13" fill={isDark ? "#312e81" : "#e0e7ff"} stroke="#818cf8" strokeWidth="1" />
      <text x="320" y="39" fill="#818cf8" fontSize="10" fontWeight="bold" textAnchor="middle">tsconfig: &quot;strictNullChecks&quot;: true</text>

      {/* undefined box */}
      <rect x="35" y="60" width="270" height="100" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="50" y="83" fill="#60a5fa" fontWeight="700" fontSize="12">undefined (No inicializado)</text>
      <text x="50" y="103" fill={textColor} fontSize="9">Variable declarada pero sin valor asignado.</text>
      <rect x="50" y="112" width="240" height="34" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="58" y="127" fill={subtextColor} fontSize="8" fontFamily="monospace">let x: string; // x === undefined</text>
      <text x="58" y="139" fill="#38bdf8" fontSize="8" fontFamily="monospace">interface Props &#123; age?: number &#125;</text>

      {/* null box */}
      <rect x="335" y="60" width="270" height="100" rx="8" fill={isDark ? "#14532d" : "#f0fdf4"} stroke="#22c55e" strokeWidth="1.5" />
      <text x="350" y="83" fill="#4ade80" fontWeight="700" fontSize="12">null (Ausencia intencional)</text>
      <text x="350" y="103" fill={textColor} fontSize="9">Valor asignado deliberadamente como &apos;vacío&apos;.</text>
      <rect x="350" y="112" width="240" height="34" rx="4" fill={isDark ? "#052e16" : "#ffffff"} />
      <text x="358" y="127" fill={subtextColor} fontSize="8" fontFamily="monospace">let user: User | null = null;</text>
      <text x="358" y="139" fill="#4ade80" fontSize="8" fontFamily="monospace">document.getElementById(&quot;missing&quot;) // null</text>

      {/* operators bar */}
      <rect x="35" y="170" width="570" height="30" rx="6" fill={isDark ? "#1e1b4b" : "#ede9fe"} stroke="#8b5cf6" strokeWidth="1" />
      <text x="50" y="189" fill="#a78bfa" fontSize="9" fontWeight="bold">Operadores Defensivos:</text>
      <text x="190" y="189" fill={textColor} fontSize="9" fontFamily="monospace">user?.address?.city</text>
      <text x="340" y="189" fill={subtextColor} fontSize="9">(Optional Chaining)</text>
      <text x="440" y="189" fill={textColor} fontSize="9" fontFamily="monospace">val ?? &quot;default&quot;</text>
      <text x="535" y="189" fill={subtextColor} fontSize="9">(Nullish Coalescing)</text>
    </svg>
  );
  },

  "ts-interface-vs-type-comparison": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* interface Column */}
      <rect x="35" y="30" width="270" height="165" rx="10" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="50" y="55" fill="#60a5fa" fontWeight="700" fontSize="13">interface (Contrato Abierto)</text>
      <text x="50" y="80" fill={textColor} fontSize="9">✅ <tspan fontWeight="bold">Declaration Merging:</tspan> se combinan automáticamente</text>
      <text x="50" y="100" fill={textColor} fontSize="9">✅ <tspan fontWeight="bold">Extends tradicional:</tspan> herencia OOP clara</text>
      <text x="50" y="120" fill={textColor} fontSize="9">✅ Mejor rendimiento en el compilador (caching TS)</text>
      <text x="50" y="140" fill="#f87171" fontSize="9">❌ NO soporta uniones directas (A | B)</text>
      <text x="50" y="160" fill="#f87171" fontSize="9">❌ Solo define formas de objetos y clases</text>
      <text x="50" y="180" fill={subtextColor} fontSize="8" fontStyle="italic">Ideal para: APIs públicas, Component Props, Modelos OOP</text>

      {/* type Column */}
      <rect x="335" y="30" width="270" height="165" rx="10" fill={isDark ? "#312e81" : "#faf5ff"} stroke="#8b5cf6" strokeWidth="1.5" />
      <text x="350" y="55" fill="#c084fc" fontWeight="700" fontSize="13">type Alias (Composición Cerrada)</text>
      <text x="350" y="80" fill={textColor} fontSize="9">✅ <tspan fontWeight="bold">Uniones e Intersecciones:</tspan> type ID = string | number</text>
      <text x="350" y="100" fill={textColor} fontSize="9">✅ Primitivos, Tuplas, Mapped Types y Condicionales</text>
      <text x="350" y="120" fill={textColor} fontSize="9">✅ Inmutabilidad estructural (no re-apertura)</text>
      <text x="350" y="140" fill="#f87171" fontSize="9">❌ NO permite Declaration Merging</text>
      <text x="350" y="160" fill={textColor} fontSize="9">⚠️ Composición compleja mediante intersección (&amp;)</text>
      <text x="350" y="180" fill={subtextColor} fontSize="8" fontStyle="italic">Ideal para: Uniones de estado, Utilities, Discriminants</text>
    </svg>
  );
  },

  "ts-generics-type-parameter": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* Generic Definition */}
      <rect x="35" y="35" width="260" height="75" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="45" y="58" fill="#60a5fa" fontWeight="700" fontSize="11">Plantilla con Parámetro &lt;T&gt;</text>
      <rect x="45" y="68" width="240" height="30" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="55" y="87" fill={textColor} fontSize="9" fontFamily="monospace">interface ApiResponse&lt;T&gt; &#123; data: T; &#125;</text>

      {/* Constraint */}
      <rect x="35" y="125" width="260" height="65" rx="8" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#818cf8" strokeWidth="1" />
      <text x="45" y="145" fill="#a5b4fc" fontWeight="700" fontSize="10">Constraints con `extends`</text>
      <text x="45" y="163" fill={textColor} fontSize="9" fontFamily="monospace">&lt;T extends &#123; id: string &#125;&gt;</text>
      <text x="45" y="178" fill={subtextColor} fontSize="8">Garantiza que T posea la propiedad requerida</text>

      <path d="M305 72 L360 72" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow)" />
      <path d="M305 72 L360 145" stroke="#a855f7" strokeWidth="2" markerEnd="url(#arrow)" />

      {/* Instantiation 1 */}
      <rect x="365" y="35" width="240" height="65" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="375" y="56" fill="#34d399" fontWeight="700" fontSize="10">Instanciación 1: ApiResponse&lt;User&gt;</text>
      <text x="375" y="74" fill={textColor} fontSize="9" fontFamily="monospace">data: User &#123; id: 1; name: &quot;Ana&quot; &#125;</text>
      <text x="375" y="89" fill="#34d399" fontSize="8">Tipado exacto en compile-time</text>

      {/* Instantiation 2 */}
      <rect x="365" y="120" width="240" height="65" rx="8" fill={isDark ? "#2e1065" : "#faf5ff"} stroke="#a855f7" strokeWidth="1.5" />
      <text x="375" y="141" fill="#c084fc" fontWeight="700" fontSize="10">Instanciación 2: ApiResponse&lt;Product[]&gt;</text>
      <text x="375" y="159" fill={textColor} fontSize="9" fontFamily="monospace">data: Product[] (Array tipado)</text>
      <text x="375" y="174" fill="#c084fc" fontSize="8">Reutilización limpia con cero casteo</text>
    </svg>
  );
  },

  "ts-type-inference-control-flow": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* Input Union */}
      <rect x="35" y="85" width="160" height="55" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="115" y="107" fill="#60a5fa" fontWeight="700" fontSize="11" textAnchor="middle">let val: string | number</text>
      <text x="115" y="125" fill={subtextColor} fontSize="9" textAnchor="middle">Unión inicial amplia</text>

      <path d="M195 112 L245 112" stroke={border} strokeWidth="2" />

      {/* CFA Diamond Check */}
      <polygon points="310,65 375,112 310,160 245,112" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#818cf8" strokeWidth="1.5" />
      <text x="310" y="108" fill="#818cf8" fontWeight="bold" fontSize="9" textAnchor="middle">typeof val</text>
      <text x="310" y="121" fill="#818cf8" fontWeight="bold" fontSize="9" textAnchor="middle">=== &quot;string&quot;?</text>

      {/* True Branch */}
      <path d="M375 112 L430 65" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow)" />
      <text x="400" y="80" fill="#10b981" fontSize="9" fontWeight="bold">SI (true)</text>

      <rect x="430" y="35" width="175" height="60" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="440" y="56" fill="#34d399" fontWeight="700" fontSize="11">Narrowed: string</text>
      <text x="440" y="74" fill={textColor} fontSize="9" fontFamily="monospace">val.toUpperCase() ✅</text>
      <text x="440" y="86" fill={subtextColor} fontSize="8">Compilador sabe que es string</text>

      {/* False Branch */}
      <path d="M375 112 L430 160" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrow)" />
      <text x="400" y="148" fill="#f59e0b" fontSize="9" fontWeight="bold">NO (false)</text>

      <rect x="430" y="130" width="175" height="60" rx="8" fill={isDark ? "#713f12" : "#fef9c3"} stroke="#f59e0b" strokeWidth="1.5" />
      <text x="440" y="151" fill="#facc15" fontWeight="700" fontSize="11">Narrowed: number</text>
      <text x="440" y="169" fill={textColor} fontSize="9" fontFamily="monospace">val.toFixed(2) ✅</text>
      <text x="440" y="181" fill={subtextColor} fontSize="8">Control Flow Analysis exhaustivo</text>
    </svg>
  );
  },

  "ts-utility-types-transform": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* Center Base Type */}
      <rect x="25" y="55" width="175" height="110" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="35" y="78" fill="#60a5fa" fontWeight="700" fontSize="11">interface User &#123;</text>
      <text x="45" y="98" fill={textColor} fontSize="9" fontFamily="monospace">id: number;</text>
      <text x="45" y="113" fill={textColor} fontSize="9" fontFamily="monospace">name: string;</text>
      <text x="45" y="128" fill={textColor} fontSize="9" fontFamily="monospace">email?: string;</text>
      <text x="35" y="148" fill="#60a5fa" fontWeight="700" fontSize="11">&#125;</text>

      {/* Utility 1: Partial */}
      <rect x="235" y="25" width="180" height="42" rx="6" fill={isDark ? "#312e81" : "#e0e7ff"} stroke="#818cf8" strokeWidth="1" />
      <text x="245" y="42" fill="#818cf8" fontWeight="bold" fontSize="10">Partial&lt;User&gt;</text>
      <text x="245" y="57" fill={textColor} fontSize="8" fontFamily="monospace">&#123; id?: number; name?: string; ... &#125;</text>

      {/* Utility 2: Required */}
      <rect x="235" y="73" width="180" height="42" rx="6" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1" />
      <text x="245" y="90" fill="#34d399" fontWeight="bold" fontSize="10">Required&lt;User&gt;</text>
      <text x="245" y="105" fill={textColor} fontSize="8" fontFamily="monospace">&#123; id: number; name: string; email: string &#125;</text>

      {/* Utility 3: Pick */}
      <rect x="430" y="25" width="180" height="42" rx="6" fill={isDark ? "#713f12" : "#fef9c3"} stroke="#eab308" strokeWidth="1" />
      <text x="440" y="42" fill="#facc15" fontWeight="bold" fontSize="10">Pick&lt;User, &quot;id&quot; | &quot;name&quot;&gt;</text>
      <text x="440" y="57" fill={textColor} fontSize="8" fontFamily="monospace">Selecciona solo id y name</text>

      {/* Utility 4: Omit */}
      <rect x="430" y="73" width="180" height="42" rx="6" fill={isDark ? "#4c0519" : "#ffe4e6"} stroke="#f43f5e" strokeWidth="1" />
      <text x="440" y="90" fill="#fb7185" fontWeight="bold" fontSize="10">Omit&lt;User, &quot;email&quot;&gt;</text>
      <text x="440" y="105" fill={textColor} fontSize="8" fontFamily="monospace">Excluye email del contrato</text>

      {/* Footnote */}
      <rect x="235" y="130" width="375" height="50" rx="6" fill={isDark ? "#0f172a" : "#f8fafc"} stroke={border} strokeWidth="1" />
      <text x="245" y="148" fill={subtextColor} fontSize="9">💡 Transformaciones funcionales de tipos sin duplicar código</text>
      <text x="245" y="165" fill="#3b82f6" fontSize="8" fontFamily="monospace">Internamente implementados mediante Mapped &amp; Conditional types</text>
    </svg>
  );
  },

  "ts-readonly-immutability": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* Object Definition */}
      <rect x="35" y="40" width="260" height="145" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="45" y="65" fill="#60a5fa" fontWeight="700" fontSize="12">Readonly&lt;User&gt; / readonly prop</text>
      <rect x="45" y="78" width="240" height="40" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="55" y="96" fill={textColor} fontSize="9" fontFamily="monospace">readonly id: number;</text>
      <text x="55" y="110" fill={textColor} fontSize="9" fontFamily="monospace">readonly tags: string[];</text>
      <text x="45" y="140" fill={subtextColor} fontSize="9">Inmutabilidad a nivel de compilador</text>
      <text x="45" y="155" fill={subtextColor} fontSize="8">⚠️ Nota: Es shallow por defecto (no congela objetos anidados)</text>

      {/* Read action */}
      <rect x="330" y="40" width="275" height="55" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="345" y="62" fill="#34d399" fontWeight="700" fontSize="11">Lectura Permitida</text>
      <text x="345" y="80" fill={textColor} fontSize="10" fontFamily="monospace">const currentId = user.id; // ✅ OK</text>

      {/* Write action */}
      <rect x="330" y="115" width="275" height="70" rx="8" fill={isDark ? "#450a0a" : "#fee2e2"} stroke="#ef4444" strokeWidth="1.5" />
      <text x="345" y="137" fill="#f87171" fontWeight="700" fontSize="11">Mutación Bloqueada en Compilación</text>
      <text x="345" y="155" fill={textColor} fontSize="10" fontFamily="monospace">user.id = 99; // ❌ TS2540</text>
      <text x="345" y="172" fill="#ef4444" fontSize="8">&quot;Cannot assign to &apos;id&apos; because it is a read-only property&quot;</text>
    </svg>
  );
  },

  "ts-enums-vs-const-objects": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* Standard Enum */}
      <rect x="30" y="35" width="180" height="155" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="40" y="58" fill="#60a5fa" fontWeight="700" fontSize="11">1. Numeric/String Enum</text>
      <text x="40" y="78" fill={textColor} fontSize="9" fontFamily="monospace">enum Status &#123; Active &#125;</text>
      <rect x="40" y="90" width="160" height="40" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="48" y="107" fill="#f59e0b" fontSize="8">Genera IIFE en runtime</text>
      <text x="48" y="120" fill={subtextColor} fontSize="8">Reverse mapping añade bytes</text>
      <text x="40" y="150" fill={subtextColor} fontSize="8">⚠️ Inseguridad en enums numéricos</text>
      <text x="40" y="172" fill="#ef4444" fontSize="8">Status.Active = 0</text>

      {/* Const Enum */}
      <rect x="230" y="35" width="180" height="155" rx="8" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#818cf8" strokeWidth="1.5" />
      <text x="240" y="58" fill="#818cf8" fontWeight="700" fontSize="11">2. const enum</text>
      <text x="240" y="78" fill={textColor} fontSize="9" fontFamily="monospace">const enum Status &#123; ... &#125;</text>
      <rect x="240" y="90" width="160" height="40" rx="4" fill={isDark ? "#1e1b4b" : "#ffffff"} />
      <text x="248" y="107" fill="#10b981" fontSize="8">Inlined en compilación</text>
      <text x="248" y="120" fill={subtextColor} fontSize="8">0 bytes de runtime overhead</text>
      <text x="240" y="150" fill={subtextColor} fontSize="8">⚠️ Falla con --isolatedModules</text>
      <text x="240" y="172" fill="#818cf8" fontSize="8">Babel/Vite pueden fallar</text>

      {/* const object + as const */}
      <rect x="430" y="35" width="180" height="155" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="440" y="58" fill="#34d399" fontWeight="700" fontSize="11">3. as const (Recomendado)</text>
      <text x="440" y="78" fill={textColor} fontSize="8" fontFamily="monospace">const STATUS = &#123; ... &#125; as const</text>
      <rect x="440" y="90" width="160" height="40" rx="4" fill={isDark ? "#022c22" : "#ffffff"} />
      <text x="448" y="107" fill="#34d399" fontSize="8">100% JS estándar</text>
      <text x="448" y="120" fill={textColor} fontSize="8">type Status = typeof STATUS[...]</text>
      <text x="440" y="150" fill="#10b981" fontSize="8">✅ Compatible con bundlers modernos</text>
      <text x="440" y="172" fill="#34d399" fontSize="8" fontWeight="bold">Estándar Enterprise 2026</text>
    </svg>
  );
  },

  "ts-conditional-types-ternary": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* Condition formula */}
      <rect x="170" y="25" width="300" height="38" rx="8" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#818cf8" strokeWidth="1.5" />
      <text x="320" y="49" fill="#818cf8" fontWeight="700" fontSize="12" textAnchor="middle" fontFamily="monospace">T extends U ? TrueType : FalseType</text>

      {/* Left branch */}
      <path d="M260 63 L160 95" stroke="#10b981" strokeWidth="2" />
      <text x="180" y="85" fill="#10b981" fontSize="9" fontWeight="bold">Subtipo compatible</text>

      <rect x="35" y="95" width="250" height="95" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="45" y="118" fill="#34d399" fontWeight="700" fontSize="11">Rama Verdadera (TrueType)</text>
      <text x="45" y="138" fill={textColor} fontSize="9" fontFamily="monospace">type IsString&lt;T&gt; = T extends string ? true : false;</text>
      <text x="45" y="158" fill="#34d399" fontSize="9">IsString&lt;&quot;hola&quot;&gt; ➔ true</text>
      <text x="45" y="174" fill={subtextColor} fontSize="8">Distribuye sobre uniones: (A | B)</text>

      {/* Right branch */}
      <path d="M380 63 L480 95" stroke="#ef4444" strokeWidth="2" />
      <text x="440" y="85" fill="#ef4444" fontSize="9" fontWeight="bold">Incompatible</text>

      <rect x="355" y="95" width="250" height="95" rx="8" fill={isDark ? "#450a0a" : "#fee2e2"} stroke="#ef4444" strokeWidth="1.5" />
      <text x="365" y="118" fill="#f87171" fontWeight="700" fontSize="11">Rama Falsa (FalseType)</text>
      <text x="365" y="138" fill={textColor} fontSize="9" fontFamily="monospace">type Exclude&lt;T, U&gt; = T extends U ? never : T;</text>
      <text x="365" y="158" fill="#f87171" fontSize="9">Exclude&lt;string | number, string&gt; ➔ number</text>
      <text x="365" y="174" fill={subtextColor} fontSize="8">`never` filtra miembros no deseados</text>
    </svg>
  );
  },

  "ts-mapped-types-iteration": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* Syntax Breakdown */}
      <rect x="35" y="25" width="570" height="50" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="50" y="47" fill="#60a5fa" fontWeight="bold" fontSize="12" fontFamily="monospace">type FeatureFlags&lt;T&gt; = &#123; [K in keyof T]?: boolean &#125;;</text>
      <text x="50" y="64" fill={subtextColor} fontSize="9">Itera sobre cada clave &apos;K&apos; en el conjunto de propiedades de &apos;T&apos; y transforma su tipo o modificadores.</text>

      {/* Step 1 */}
      <rect x="35" y="90" width="170" height="105" rx="8" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#818cf8" strokeWidth="1" />
      <text x="45" y="112" fill="#818cf8" fontWeight="bold" fontSize="10">1. Extraer Claves</text>
      <text x="45" y="132" fill={textColor} fontSize="9" fontFamily="monospace">keyof User</text>
      <text x="45" y="152" fill="#c7d2fe" fontSize="9">➔ &quot;id&quot; | &quot;name&quot; | &quot;role&quot;</text>
      <text x="45" y="175" fill={subtextColor} fontSize="8">Unión de strings</text>

      {/* Step 2 */}
      <rect x="235" y="90" width="170" height="105" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1" />
      <text x="245" y="112" fill="#34d399" fontWeight="bold" fontSize="10">2. Modificadores (+ / -)</text>
      <text x="245" y="132" fill={textColor} fontSize="9" fontFamily="monospace">+readonly / -readonly</text>
      <text x="245" y="152" fill={textColor} fontSize="9" fontFamily="monospace">+? / -? (Required)</text>
      <text x="245" y="175" fill={subtextColor} fontSize="8">Añade o quita mutabilidad y opcionalidad</text>

      {/* Step 3 */}
      <rect x="435" y="90" width="170" height="105" rx="8" fill={isDark ? "#2e1065" : "#faf5ff"} stroke="#a855f7" strokeWidth="1" />
      <text x="445" y="112" fill="#c084fc" fontWeight="bold" fontSize="10">3. Key Remapping (as)</text>
      <text x="445" y="132" fill={textColor} fontSize="9" fontFamily="monospace">[K in keyof T as `get$&#123;Capitalize&lt;K&gt;&#125;`]</text>
      <text x="445" y="160" fill="#a855f7" fontSize="9">Crea métodos getters tipados</text>
    </svg>
  );
  },

  "ts-keyof-typeof-operator": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* JS Value Space */}
      <rect x="35" y="45" width="165" height="135" rx="8" fill={isDark ? "#713f12" : "#fef9c3"} stroke="#eab308" strokeWidth="1.5" />
      <text x="45" y="68" fill="#eab308" fontWeight="700" fontSize="11">Espacio de Valores (JS)</text>
      <rect x="45" y="78" width="145" height="60" rx="4" fill={isDark ? "#422006" : "#ffffff"} />
      <text x="52" y="95" fill={textColor} fontSize="9" fontFamily="monospace">const theme = &#123;</text>
      <text x="60" y="110" fill={textColor} fontSize="9" fontFamily="monospace">  primary: &quot;#007&quot;,</text>
      <text x="60" y="125" fill={textColor} fontSize="9" fontFamily="monospace">  accent: &quot;#f00&quot;</text>
      <text x="52" y="134" fill={textColor} fontSize="9" fontFamily="monospace">&#125;;</text>
      <text x="45" y="165" fill={subtextColor} fontSize="8">Objeto JavaScript en memoria</text>

      <path d="M205 95 L245 95" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrow)" />
      <text x="225" y="87" fill="#60a5fa" fontSize="9" textAnchor="middle">typeof</text>

      {/* TS Type Space */}
      <rect x="250" y="45" width="165" height="135" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="260" y="68" fill="#60a5fa" fontWeight="700" fontSize="11">Espacio de Tipos (TS)</text>
      <rect x="260" y="78" width="145" height="60" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="267" y="95" fill={textColor} fontSize="9" fontFamily="monospace">type Theme =</text>
      <text x="275" y="110" fill="#93c5fd" fontSize="9" fontFamily="monospace">  typeof theme;</text>
      <text x="267" y="128" fill={subtextColor} fontSize="8">&#123; primary: string; ... &#125;</text>
      <text x="260" y="165" fill={subtextColor} fontSize="8">Infiere estructura de valor</text>

      <path d="M420 95 L460 95" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow)" />
      <text x="440" y="87" fill="#34d399" fontSize="9" textAnchor="middle">keyof</text>

      {/* Union of Keys */}
      <rect x="465" y="45" width="140" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="475" y="68" fill="#34d399" fontWeight="700" fontSize="11">Claves del Objeto</text>
      <rect x="475" y="78" width="120" height="60" rx="4" fill={isDark ? "#022c22" : "#ffffff"} />
      <text x="482" y="95" fill={textColor} fontSize="9" fontFamily="monospace">type ThemeKey =</text>
      <text x="490" y="110" fill="#34d399" fontSize="9" fontFamily="monospace">  keyof Theme;</text>
      <text x="482" y="128" fill="#10b981" fontSize="8" fontFamily="monospace">&quot;primary&quot; | &quot;accent&quot;</text>
      <text x="475" y="165" fill="#34d399" fontSize="8">Single Source of Truth</text>
    </svg>
  );
  },

  "ts-type-guards-narrowing": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* Broad Input */}
      <rect x="35" y="45" width="160" height="130" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke={border} strokeWidth="1.5" />
      <text x="45" y="70" fill={textColor} fontWeight="bold" fontSize="11">Tipo Desconocido/Unión</text>
      <text x="45" y="90" fill="#93c5fd" fontSize="9" fontFamily="monospace">arg: unknown</text>
      <text x="45" y="105" fill="#93c5fd" fontSize="9" fontFamily="monospace">user: Admin | Customer</text>
      <text x="45" y="135" fill={subtextColor} fontSize="8">Propiedades ambiguas</text>
      <text x="45" y="150" fill="#ef4444" fontSize="8">❌ No permite operaciones directas</text>

      <path d="M200 110 L235 110" stroke="#818cf8" strokeWidth="2" markerEnd="url(#arrow)" />

      {/* Type Guard Types */}
      <rect x="240" y="35" width="180" height="150" rx="8" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#818cf8" strokeWidth="1.5" />
      <text x="250" y="58" fill="#818cf8" fontWeight="700" fontSize="11">Mecanismos de Guardia</text>
      <rect x="250" y="68" width="160" height="26" rx="4" fill={isDark ? "#1e1b4b" : "#ffffff"} />
      <text x="256" y="85" fill={textColor} fontSize="8" fontFamily="monospace">typeof x === &quot;string&quot;</text>
      <rect x="250" y="99" width="160" height="26" rx="4" fill={isDark ? "#1e1b4b" : "#ffffff"} />
      <text x="256" y="116" fill={textColor} fontSize="8" fontFamily="monospace">&quot;privileges&quot; in user</text>
      <rect x="250" y="130" width="160" height="42" rx="4" fill={isDark ? "#1e1b4b" : "#ffffff"} />
      <text x="256" y="145" fill="#c084fc" fontSize="8" fontWeight="bold">Custom Type Predicate:</text>
      <text x="256" y="160" fill={textColor} fontSize="8" fontFamily="monospace">function isUser(x): x is User</text>

      <path d="M425 110 L460 110" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow)" />

      {/* Narrowed Result */}
      <rect x="465" y="45" width="140" height="130" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="475" y="70" fill="#34d399" fontWeight="700" fontSize="11">Tipo Refinado</text>
      <text x="475" y="92" fill="#a7f3d0" fontSize="9" fontFamily="monospace">x: User</text>
      <text x="475" y="115" fill={textColor} fontSize="8">Acceso a métodos específicos sin aserciones forzadas (as)</text>
      <text x="475" y="155" fill="#10b981" fontSize="8" fontWeight="bold">100% Type Safe</text>
    </svg>
  );
  },

  "ts-template-literal-types": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* Combinations formula */}
      <rect x="35" y="30" width="260" height="75" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="45" y="52" fill="#60a5fa" fontWeight="700" fontSize="11">Producto Cartesiano de Tipos</text>
      <text x="45" y="70" fill={textColor} fontSize="9" fontFamily="monospace">type Position = &quot;top&quot; | &quot;bottom&quot;;</text>
      <text x="45" y="88" fill={textColor} fontSize="9" fontFamily="monospace">type Align = &quot;left&quot; | &quot;right&quot;;</text>

      <rect x="35" y="115" width="260" height="75" rx="8" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#818cf8" strokeWidth="1.5" />
      <text x="45" y="137" fill="#818cf8" fontWeight="700" fontSize="11">Sintaxis de Template Literal</text>
      <rect x="45" y="145" width="240" height="32" rx="4" fill={isDark ? "#1e1b4b" : "#ffffff"} />
      <text x="52" y="165" fill="#a5b4fc" fontSize="9" fontFamily="monospace">type Placement = `$&#123;Position&#125;-$&#123;Align&#125;`;</text>

      <path d="M305 110 L350 110" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow)" />

      {/* Generated Union Result */}
      <rect x="355" y="30" width="250" height="160" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="370" y="55" fill="#34d399" fontWeight="700" fontSize="12">Unión Generada Automáticamente</text>
      <rect x="370" y="68" width="220" height="65" rx="4" fill={isDark ? "#022c22" : "#ffffff"} />
      <text x="380" y="87" fill="#10b981" fontSize="9" fontFamily="monospace">&quot;top-left&quot; | &quot;top-right&quot; |</text>
      <text x="380" y="105" fill="#10b981" fontSize="9" fontFamily="monospace">&quot;bottom-left&quot; | &quot;bottom-right&quot;</text>
      <text x="380" y="122" fill={subtextColor} fontSize="8">4 combinaciones exactas garantizadas</text>
      <text x="370" y="152" fill={textColor} fontSize="9">Utilidades intrínsecas:</text>
      <text x="370" y="168" fill="#6ee7b7" fontSize="8" fontFamily="monospace">Uppercase | Lowercase | Capitalize</text>
    </svg>
  );
  },

  "ts-decorators-stage3-execution": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* Header Stage 3 */}
      <rect x="220" y="20" width="200" height="25" rx="12" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#818cf8" strokeWidth="1" />
      <text x="320" y="36" fill="#818cf8" fontSize="9" fontWeight="bold" textAnchor="middle">TC39 Stage 3 / TS 5.0+ Decorators</text>

      {/* Class Target */}
      <rect x="35" y="55" width="250" height="135" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="45" y="78" fill="#60a5fa" fontWeight="700" fontSize="11">Código Objetivo</text>
      <rect x="45" y="88" width="230" height="85" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="55" y="106" fill="#a855f7" fontSize="9" fontFamily="monospace">@logged</text>
      <text x="55" y="122" fill={textColor} fontSize="9" fontFamily="monospace">class UserService &#123;</text>
      <text x="65" y="138" fill="#a855f7" fontSize="9" fontFamily="monospace">  @measure</text>
      <text x="65" y="154" fill={textColor} fontSize="9" fontFamily="monospace">  getUser(id) &#123; ... &#125;</text>
      <text x="55" y="167" fill={textColor} fontSize="9" fontFamily="monospace">&#125;</text>

      <path d="M290 120 L335 120" stroke="#a855f7" strokeWidth="2" markerEnd="url(#arrow)" />

      {/* Pipeline Context */}
      <rect x="340" y="55" width="265" height="135" rx="8" fill={isDark ? "#2e1065" : "#faf5ff"} stroke="#a855f7" strokeWidth="1.5" />
      <text x="355" y="78" fill="#c084fc" fontWeight="700" fontSize="11">Contexto de Decorador</text>
      <text x="355" y="98" fill={textColor} fontSize="9" fontFamily="monospace">(target, context: ClassMethodContext)</text>
      <rect x="355" y="108" width="235" height="65" rx="4" fill={isDark ? "#1e1b4b" : "#ffffff"} />
      <text x="365" y="125" fill="#c084fc" fontSize="8" fontFamily="monospace">context.kind // &quot;method&quot; | &quot;class&quot;</text>
      <text x="365" y="139" fill="#c084fc" fontSize="8" fontFamily="monospace">context.name // &quot;getUser&quot;</text>
      <text x="365" y="153" fill="#c084fc" fontSize="8" fontFamily="monospace">context.addInitializer(() =&gt; ...)</text>
      <text x="365" y="167" fill="#10b981" fontSize="8">Sin experimentals ni reflect-metadata obsoleto</text>
    </svg>
  );
  },

  "ts-infer-pattern-matching": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* Conditional Type Pattern */}
      <rect x="35" y="35" width="570" height="50" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="50" y="57" fill="#60a5fa" fontWeight="bold" fontSize="11" fontFamily="monospace">type ReturnType&lt;T&gt; = T extends (...args: any[]) =&gt; infer R ? R : any;</text>
      <text x="50" y="73" fill={subtextColor} fontSize="9">&apos;infer R&apos; declara una variable de tipo que se deduce dentro del patrón condicional.</text>

      {/* Input Type */}
      <rect x="35" y="100" width="220" height="85" rx="8" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#818cf8" strokeWidth="1" />
      <text x="45" y="122" fill="#818cf8" fontWeight="bold" fontSize="10">Tipo Evaluado (T)</text>
      <text x="45" y="142" fill={textColor} fontSize="9" fontFamily="monospace">() =&gt; Promise&lt;User&gt;</text>
      <text x="45" y="165" fill={subtextColor} fontSize="8">Función que retorna una promesa</text>

      <path d="M260 142 L310 142" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow)" />
      <text x="285" y="134" fill="#10b981" fontSize="9" textAnchor="middle">Captura</text>

      {/* Extraction */}
      <rect x="315" y="100" width="290" height="85" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="330" y="122" fill="#34d399" fontWeight="bold" fontSize="11">infer R extrae el tipo:</text>
      <rect x="330" y="132" width="260" height="30" rx="4" fill={isDark ? "#022c22" : "#ffffff"} />
      <text x="340" y="151" fill="#10b981" fontSize="10" fontFamily="monospace">R ➔ Promise&lt;User&gt;</text>
      <text x="330" y="176" fill={subtextColor} fontSize="8">Útil para UnwrapPromise, ElementOf, Parameters, etc.</text>
    </svg>
  );
  },

  "ts-variance-co-contra": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* Subtype premise */}
      <rect x="200" y="20" width="240" height="25" rx="12" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke={border} strokeWidth="1" />
      <text x="320" y="36" fill={textColor} fontSize="9" fontWeight="bold" textAnchor="middle">Premisa: Dog extends Animal</text>

      {/* Covariance Box */}
      <rect x="35" y="55" width="270" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="50" y="78" fill="#34d399" fontWeight="700" fontSize="12">Covarianza (Salidas / Returns)</text>
      <text x="50" y="98" fill={textColor} fontSize="9">Conserva la dirección del subtipo:</text>
      <rect x="50" y="108" width="240" height="42" rx="4" fill={isDark ? "#022c22" : "#ffffff"} />
      <text x="60" y="125" fill="#10b981" fontSize="9" fontFamily="monospace">() =&gt; Dog ➔ asignable a ➔ () =&gt; Animal</text>
      <text x="60" y="141" fill={subtextColor} fontSize="8">Porque un Dog SIEMPRE es un Animal válido.</text>
      <text x="50" y="172" fill="#34d399" fontSize="8" fontWeight="bold">Outputs de funciones, getters, arrays readonly</text>

      {/* Contravariance Box */}
      <rect x="335" y="55" width="270" height="135" rx="8" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#818cf8" strokeWidth="1.5" />
      <text x="350" y="78" fill="#818cf8" fontWeight="700" fontSize="12">Contravarianza (Entradas / Parámetros)</text>
      <text x="350" y="98" fill={textColor} fontSize="9">Invierte la dirección del subtipo:</text>
      <rect x="350" y="108" width="240" height="42" rx="4" fill={isDark ? "#1e1b4b" : "#ffffff"} />
      <text x="360" y="125" fill="#818cf8" fontSize="9" fontFamily="monospace">(a: Animal) =&gt; void ➔ asignable a ➔ (d: Dog) =&gt; void</text>
      <text x="360" y="141" fill={subtextColor} fontSize="8">Un handler de animales puede procesar cualquier perro.</text>
      <text x="350" y="172" fill="#818cf8" fontSize="8" fontWeight="bold">Inputs de funciones con strictFunctionTypes: true</text>
    </svg>
  );
  },

  "ts-custom-deep-utility": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* Title / Formula */}
      <rect x="35" y="25" width="570" height="50" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="50" y="47" fill="#60a5fa" fontWeight="bold" fontSize="11" fontFamily="monospace">type DeepReadonly&lt;T&gt; = T extends Function | Primitive ? T : &#123; readonly [K in keyof T]: DeepReadonly&lt;T[K]&gt; &#125;</text>
      <text x="50" y="64" fill={subtextColor} fontSize="9">Recursión por niveles recorriendo el árbol completo de propiedades de un objeto.</text>

      {/* Level 1 */}
      <rect x="35" y="85" width="165" height="110" rx="8" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#818cf8" strokeWidth="1" />
      <text x="45" y="108" fill="#818cf8" fontWeight="bold" fontSize="11">Nivel 1 (Raíz)</text>
      <text x="45" y="128" fill={textColor} fontSize="9" fontFamily="monospace">readonly user: &#123;</text>
      <text x="55" y="145" fill={textColor} fontSize="9" fontFamily="monospace">  readonly id: 1;</text>
      <text x="45" y="165" fill={textColor} fontSize="9" fontFamily="monospace">&#125;</text>

      <path d="M205 135 L245 135" stroke="#818cf8" strokeWidth="2" markerEnd="url(#arrow)" />

      {/* Level 2 */}
      <rect x="250" y="85" width="165" height="110" rx="8" fill={isDark ? "#2e1065" : "#faf5ff"} stroke="#a855f7" strokeWidth="1" />
      <text x="260" y="108" fill="#c084fc" fontWeight="bold" fontSize="11">Nivel 2 (Anidado)</text>
      <text x="260" y="128" fill={textColor} fontSize="9" fontFamily="monospace">readonly address: &#123;</text>
      <text x="270" y="145" fill={textColor} fontSize="9" fontFamily="monospace">  readonly city: string;</text>
      <text x="260" y="165" fill={textColor} fontSize="9" fontFamily="monospace">&#125;</text>

      <path d="M420 135 L460 135" stroke="#a855f7" strokeWidth="2" markerEnd="url(#arrow)" />

      {/* Level 3 Leaf */}
      <rect x="465" y="85" width="140" height="110" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1" />
      <text x="475" y="108" fill="#34d399" fontWeight="bold" fontSize="11">Caso Base (Hoja)</text>
      <text x="475" y="130" fill={textColor} fontSize="9" fontFamily="monospace">city: &quot;Madrid&quot;</text>
      <text x="475" y="150" fill="#10b981" fontSize="8">Primitivo alcanzado: detiene recursión</text>
    </svg>
  );
  },

  "ts-satisfies-operator-inference": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* Left side: Type Annotation */}
      <rect x="35" y="35" width="270" height="155" rx="10" fill={isDark ? "#450a0a" : "#fee2e2"} stroke="#ef4444" strokeWidth="1.5" />
      <text x="50" y="60" fill="#f87171" fontWeight="700" fontSize="12">Anotación de Tipo (: Record)</text>
      <rect x="50" y="72" width="240" height="32" rx="4" fill={isDark ? "#1f2937" : "#ffffff"} />
      <text x="58" y="92" fill={textColor} fontSize="9" fontFamily="monospace">const p: Record&lt;string, RGB | string&gt;</text>
      <text x="50" y="122" fill="#ef4444" fontSize="9">❌ Pierde el tipo literal concreto:</text>
      <text x="50" y="138" fill={textColor} fontSize="9" fontFamily="monospace">p.red.toUpperCase() // Error!</text>
      <text x="50" y="154" fill={subtextColor} fontSize="8">TS asume &apos;RGB | string&apos; y bloquea métodos de string.</text>
      <text x="50" y="172" fill="#f87171" fontSize="8">Ensancha (widens) la inferencia.</text>

      {/* Right side: satisfies */}
      <rect x="335" y="35" width="270" height="155" rx="10" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="350" y="60" fill="#34d399" fontWeight="700" fontSize="12">Operador satisfies (TS 4.9+)</text>
      <rect x="350" y="72" width="240" height="32" rx="4" fill={isDark ? "#1f2937" : "#ffffff"} />
      <text x="358" y="92" fill="#34d399" fontSize="9" fontFamily="monospace">const p = &#123; ... &#125; satisfies Record</text>
      <text x="350" y="122" fill="#10b981" fontSize="9">✅ Valida el contrato SIN ensanchar:</text>
      <text x="350" y="138" fill={textColor} fontSize="9" fontFamily="monospace">p.red.toUpperCase() // ✅ OK!</text>
      <text x="350" y="154" fill={subtextColor} fontSize="8">TS sabe exactamente que &apos;red&apos; es un string &apos;#f00&apos;.</text>
      <text x="350" y="172" fill="#34d399" fontSize="8" fontWeight="bold">Verificación de esquema + inferencia literal</text>
    </svg>
  );
  },

  "ts-const-assertion-widening": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* Without as const */}
      <rect x="35" y="35" width="270" height="155" rx="10" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke={border} strokeWidth="1.5" />
      <text x="50" y="60" fill={textColor} fontWeight="700" fontSize="12">Sin &apos;as const&apos; (Inferencia Mutable)</text>
      <rect x="50" y="72" width="240" height="32" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="58" y="92" fill="#93c5fd" fontSize="9" fontFamily="monospace">const routes = [&quot;/&quot;, &quot;/about&quot;];</text>
      <text x="50" y="122" fill={subtextColor} fontSize="9">Tipo inferido: <tspan fill="#60a5fa" fontFamily="monospace">string[]</tspan></text>
      <text x="50" y="138" fill={subtextColor} fontSize="8">El array es mutable (se le puede hacer .push()).</text>
      <text x="50" y="154" fill={subtextColor} fontSize="8">Los strings se ensanchan al tipo general `string`.</text>
      <text x="50" y="172" fill="#f59e0b" fontSize="8">No sirve para tipar rutas exactas en Router</text>

      {/* With as const */}
      <rect x="335" y="35" width="270" height="155" rx="10" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="350" y="60" fill="#34d399" fontWeight="700" fontSize="12">Con &apos;as const&apos; (Const Assertion)</text>
      <rect x="350" y="72" width="240" height="32" rx="4" fill={isDark ? "#022c22" : "#ffffff"} />
      <text x="358" y="92" fill="#34d399" fontSize="9" fontFamily="monospace">const routes = [&quot;/&quot;, &quot;/about&quot;] as const;</text>
      <text x="350" y="122" fill="#34d399" fontSize="9">Tipo: <tspan fontFamily="monospace">readonly [&quot;/&quot;, &quot;/about&quot;]</tspan></text>
      <text x="350" y="138" fill={textColor} fontSize="8">Tupla inmutable de longitud fija.</text>
      <text x="350" y="154" fill={textColor} fontSize="8">type AppRoute = typeof routes[number] ➔ &quot;/&quot; | &quot;/about&quot;</text>
      <text x="350" y="172" fill="#34d399" fontSize="8" fontWeight="bold">Reemplazo perfecto y moderno de enums</text>
    </svg>
  );
  }
};
