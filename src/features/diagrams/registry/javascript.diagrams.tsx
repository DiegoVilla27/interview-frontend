import { DiagramRegistry } from "../diagram.types";

/** Diagramas SVG del módulo JavaScript. */
export const javascriptDiagrams: DiagramRegistry = {
  "event-loop": ({ isDark, textColor, subtextColor, border }) => {
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

      {/* Call Stack */}
      <rect
        x="30"
        y="40"
        width="140"
        height="180"
        rx="8"
        fill={isDark ? "#1e293b" : "#f1f5f9"}
        stroke="#3b82f6"
        strokeWidth="1.5"
      />
      <text x="45" y="65" fill="#3b82f6" fontWeight="700" fontSize="12">
        Call Stack (LIFO)
      </text>
      <rect x="42" y="85" width="116" height="26" rx="4" fill="#3b82f6" />
      <text x="100" y="102" fill="#ffffff" fontSize="10" textAnchor="middle">
        fnC() [Running]
      </text>
      <rect x="42" y="118" width="116" height="26" rx="4" fill={isDark ? "#475569" : "#cbd5e1"} />
      <text x="100" y="135" fill={textColor} fontSize="10" textAnchor="middle">
        fnB()
      </text>
      <rect x="42" y="151" width="116" height="26" rx="4" fill={isDark ? "#334155" : "#e2e8f0"} />
      <text x="100" y="168" fill={textColor} fontSize="10" textAnchor="middle">
        fnA()
      </text>
      <text x="100" y="205" fill={subtextColor} fontSize="10" textAnchor="middle">
        Single-Threaded
      </text>

      {/* Web APIs */}
      <rect
        x="200"
        y="40"
        width="150"
        height="80"
        rx="8"
        fill={isDark ? "#1e1e38" : "#ede9fe"}
        stroke="#8b5cf6"
        strokeWidth="1.5"
      />
      <text x="215" y="65" fill="#8b5cf6" fontWeight="700" fontSize="12">
        Web APIs (Browser)
      </text>
      <text x="215" y="85" fill={textColor} fontSize="10">
        • setTimeout / setInterval
      </text>
      <text x="215" y="100" fill={textColor} fontSize="10">
        • fetch() / DOM Events
      </text>

      {/* Event Loop center circle */}
      <circle cx="275" cy="180" r="32" fill={isDark ? "#312e81" : "#c7d2fe"} stroke="#6366f1" strokeWidth="2" />
      <path
        d="M260 180 A15 15 0 1 1 290 180"
        stroke="#6366f1"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      <polygon points="292,175 292,185 298,180" fill="#6366f1" />
      <text x="275" y="225" fill="#6366f1" fontWeight="700" fontSize="11" textAnchor="middle">
        Event Loop
      </text>

      {/* Queues container */}
      <rect
        x="380"
        y="40"
        width="230"
        height="180"
        rx="8"
        fill={isDark ? "#18181b" : "#ffffff"}
        stroke={border}
        strokeWidth="1.5"
      />

      {/* Microtask Queue (Priority 1) */}
      <rect x="395" y="55" width="200" height="65" rx="6" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1" />
      <text x="405" y="73" fill="#10b981" fontWeight="700" fontSize="11">
        ⚡ Microtask Queue (Prioridad 1)
      </text>
      <text x="405" y="90" fill={textColor} fontSize="10">
        • Promise.then / queueMicrotask
      </text>
      <text x="405" y="105" fill="#047857" fontWeight="600" fontSize="9">
        ¡Se vacía COMPLETAMENTE antes de pintar!
      </text>

      {/* Macrotask Queue (Priority 2) */}
      <rect x="395" y="135" width="200" height="70" rx="6" fill={isDark ? "#451a03" : "#fffbeb"} stroke="#f59e0b" strokeWidth="1" />
      <text x="405" y="155" fill="#f59e0b" fontWeight="700" fontSize="11">
        ⏳ Macrotask / Task Queue (P2)
      </text>
      <text x="405" y="172" fill={textColor} fontSize="10">
        • setTimeout, setInterval, I/O
      </text>
      <text x="405" y="188" fill="#b45309" fontSize="9">
        1 macrotarea por ciclo del loop
      </text>
    </svg>
  );
  },

  "js-engine-architecture": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill="#eab308" fontSize="12" fontWeight="bold" textAnchor="middle">Arquitectura del Motor V8 (Google Chrome / Node.js)</text>
      
      <rect x="25" y="48" width="105" height="135" rx="6" fill={isDark ? "#1f2937" : "#ffffff"} stroke="#eab308" strokeWidth="1.2" />
      <text x="77" y="68" fill="#eab308" fontSize="9.5" fontWeight="bold" textAnchor="middle">1. Parser</text>
      <text x="32" y="90" fill={textColor} fontSize="7.5">• Tokenizer / Léxico</text>
      <text x="32" y="104" fill={textColor} fontSize="7.5">• Gramática sintáctica</text>
      <text x="32" y="118" fill="#eab308" fontSize="7.5" fontWeight="bold">Genera AST</text>
      <text x="32" y="132" fill={subtextColor} fontSize="7">(Árbol de Sintaxis)</text>

      <path d="M132 115 L148 115" stroke="#eab308" strokeWidth="1.5" />
      <polygon points="152,115 146,111 146,119" fill="#eab308" />

      <rect x="154" y="48" width="135" height="135" rx="6" fill={isDark ? "#1e1b4b" : "#eef2ff"} stroke="#6366f1" strokeWidth="1.2" />
      <text x="221" y="68" fill="#6366f1" fontSize="9.5" fontWeight="bold" textAnchor="middle">2. Intérprete Ignition</text>
      <text x="162" y="90" fill={textColor} fontSize="7.5">• Ejecución inmediata</text>
      <text x="162" y="104" fill={textColor} fontSize="7.5">• Genera Bytecode</text>
      <text x="162" y="118" fill={textColor} fontSize="7.5">• Recopila feedback</text>
      <text x="162" y="132" fill="#6366f1" fontSize="7.5" fontWeight="bold">Perfilado de tipos</text>
      <text x="162" y="146" fill={subtextColor} fontSize="7">Detecta funciones hot</text>

      <path d="M291 115 L307 115" stroke="#6366f1" strokeWidth="1.5" />
      <polygon points="311,115 305,111 305,119" fill="#6366f1" />

      <rect x="313" y="48" width="145" height="135" rx="6" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.2" />
      <text x="385" y="68" fill="#10b981" fontSize="9.5" fontWeight="bold" textAnchor="middle">3. JIT TurboFan</text>
      <text x="321" y="90" fill={textColor} fontSize="7.5">• Compilación optimizada</text>
      <text x="321" y="104" fill={textColor} fontSize="7.5">• Código máquina nativo</text>
      <text x="321" y="118" fill={textColor} fontSize="7.5">• Inline caches (IC)</text>
      <text x="321" y="132" fill="#10b981" fontSize="7.5" fontWeight="bold">Deoptimización</text>
      <text x="321" y="146" fill={subtextColor} fontSize="7">Bailout si tipo cambia</text>

      <path d="M460 115 L476 115" stroke="#10b981" strokeWidth="1.5" />
      <polygon points="480,115 474,111 474,119" fill="#10b981" />

      <rect x="482" y="48" width="135" height="135" rx="6" fill={isDark ? "#142d3d" : "#e0f2fe"} stroke="#0284c7" strokeWidth="1.2" />
      <text x="549" y="68" fill="#0284c7" fontSize="9.5" fontWeight="bold" textAnchor="middle">4. CPU / Hardware</text>
      <text x="490" y="90" fill={textColor} fontSize="7.5">• Ensamblador directo</text>
      <text x="490" y="104" fill={textColor} fontSize="7.5">• x86_64 / ARM64</text>
      <text x="490" y="118" fill={textColor} fontSize="7.5">• Orinoco / Oilpan (GC)</text>
      <text x="490" y="132" fill="#0284c7" fontSize="7.5" fontWeight="bold">⚡ Velocidad C++</text>

      <rect x="25" y="190" width="592" height="18" rx="4" fill={isDark ? "#1f2937" : "#f1f5f9"} />
      <text x="320" y="202" fill={subtextColor} fontSize="8.5" textAnchor="middle">El pipeline JIT equilibra inicio rápido (Ignition) con velocidad de ejecución pico (TurboFan).</text>
    </svg>
  );
  },

  "js-scope-var-let-const": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill="#6366f1" fontSize="12" fontWeight="bold" textAnchor="middle">Alcance y Ciclo de Declaración: var vs let vs const</text>

      <rect x="25" y="45" width="185" height="145" rx="8" fill={isDark ? "#450a0a" : "#fef2f2"} stroke="#ef4444" strokeWidth="1.2" />
      <text x="117" y="67" fill="#ef4444" fontSize="11" fontWeight="bold" textAnchor="middle">var (Legacy)</text>
      <text x="35" y="90" fill={textColor} fontSize="8">• Scope: Función (o Global)</text>
      <text x="35" y="106" fill={textColor} fontSize="8">• Ignora bloques if / for</text>
      <text x="35" y="122" fill={textColor} fontSize="8">• Permite redeclaración</text>
      <text x="35" y="138" fill={textColor} fontSize="8">• Hoisting: inicializa undefined</text>
      <text x="35" y="154" fill="#ef4444" fontSize="8" fontWeight="bold">⛔ Fuga al window global</text>

      <rect x="227" y="45" width="185" height="145" rx="8" fill={isDark ? "#1e1b4b" : "#eef2ff"} stroke="#6366f1" strokeWidth="1.2" />
      <text x="319" y="67" fill="#6366f1" fontSize="11" fontWeight="bold" textAnchor="middle">let (Moderno)</text>
      <text x="237" y="90" fill={textColor} fontSize="8">• Scope: Bloque &#123; &#125;</text>
      <text x="237" y="106" fill={textColor} fontSize="8">• No permite redeclarar</text>
      <text x="237" y="122" fill={textColor} fontSize="8">• Permite reasignación</text>
      <text x="237" y="138" fill={textColor} fontSize="8">• Hoisting con TDZ</text>
      <text x="237" y="154" fill="#6366f1" fontSize="8" fontWeight="bold">✅ ReferenceError en TDZ</text>

      <rect x="429" y="45" width="185" height="145" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.2" />
      <text x="521" y="67" fill="#10b981" fontSize="11" fontWeight="bold" textAnchor="middle">const (Inmutable Ref)</text>
      <text x="439" y="90" fill={textColor} fontSize="8">• Scope: Bloque &#123; &#125;</text>
      <text x="439" y="106" fill={textColor} fontSize="8">• Inicialización obligatoria</text>
      <text x="439" y="122" fill={textColor} fontSize="8">• Reasignación prohibida</text>
      <text x="439" y="138" fill={textColor} fontSize="8">• Mutación de objetos permitida</text>
      <text x="439" y="154" fill="#10b981" fontSize="8" fontWeight="bold">✅ Inmutabilidad de enlace</text>
    </svg>
  );
  },

  "js-equality-coercion": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill="#8b5cf6" fontSize="12" fontWeight="bold" textAnchor="middle">Operadores de Comparación: == (Coerción) vs === (Estricto)</text>

      <rect x="30" y="45" width="270" height="145" rx="8" fill={isDark ? "#450a0a" : "#fef2f2"} stroke="#ef4444" strokeWidth="1.2" />
      <text x="165" y="67" fill="#ef4444" fontSize="11" fontWeight="bold" textAnchor="middle">Igualdad Débil (==) con Coerción</text>
      <text x="45" y="90" fill={textColor} fontSize="8.5">• Convierte tipos implícitamente (ToNumber)</text>
      <text x="45" y="106" fill={textColor} fontSize="8.5">• &apos;5&apos; == 5 ➔ <tspan fill="#10b981" fontWeight="bold">true</tspan></text>
      <text x="45" y="122" fill={textColor} fontSize="8.5">• null == undefined ➔ <tspan fill="#10b981" fontWeight="bold">true</tspan></text>
      <text x="45" y="138" fill={textColor} fontSize="8.5">• 0 == false ➔ <tspan fill="#10b981" fontWeight="bold">true</tspan></text>
      <text x="45" y="154" fill={textColor} fontSize="8.5">• &quot;&quot; == false ➔ <tspan fill="#10b981" fontWeight="bold">true</tspan></text>
      <text x="45" y="172" fill="#ef4444" fontSize="8" fontWeight="bold">⚠️ Inconsistente y propenso a bugs</text>

      <rect x="340" y="45" width="270" height="145" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.2" />
      <text x="475" y="67" fill="#10b981" fontSize="11" fontWeight="bold" textAnchor="middle">Igualdad Estricta (===) Sin Coerción</text>
      <text x="355" y="90" fill={textColor} fontSize="8.5">• Compara Tipo Y Valor sin conversión</text>
      <text x="355" y="106" fill={textColor} fontSize="8.5">• &apos;5&apos; === 5 ➔ <tspan fill="#ef4444" fontWeight="bold">false</tspan> (string !== number)</text>
      <text x="355" y="122" fill={textColor} fontSize="8.5">• null === undefined ➔ <tspan fill="#ef4444" fontWeight="bold">false</tspan></text>
      <text x="355" y="138" fill={textColor} fontSize="8.5">• 0 === false ➔ <tspan fill="#ef4444" fontWeight="bold">false</tspan></text>
      <text x="355" y="154" fill={textColor} fontSize="8.5">• NaN === NaN ➔ <tspan fill="#ef4444" fontWeight="bold">false</tspan> (usar Object.is)</text>
      <text x="355" y="172" fill="#10b981" fontSize="8" fontWeight="bold">✅ Determinista y recomendado por ESLint</text>
    </svg>
  );
  },

  "js-primitives-vs-reference": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill="#3b82f6" fontSize="12" fontWeight="bold" textAnchor="middle">Tipos Primitivos (Call Stack) vs Objetos por Referencia (Memory Heap)</text>

      <rect x="30" y="48" width="270" height="140" rx="8" fill={isDark ? "#1e1b4b" : "#ede9fe"} stroke="#6366f1" strokeWidth="1.2" />
      <text x="165" y="70" fill="#6366f1" fontSize="10.5" fontWeight="bold" textAnchor="middle">Call Stack (Primitivos por Valor)</text>
      <text x="45" y="93" fill={textColor} fontSize="8">• 7 Primitivos: string, number, bigint, boolean, symbol, null, undefined</text>
      <text x="45" y="110" fill={textColor} fontSize="8">• Almacenamiento continuo de tamaño fijo</text>
      <text x="45" y="127" fill={textColor} fontSize="8">• Copia independiente por valor: let b = a</text>
      <text x="45" y="144" fill={textColor} fontSize="8">• Inmutables (no pueden alterarse internamente)</text>
      <text x="45" y="162" fill="#6366f1" fontSize="8" fontWeight="bold">⚡ Acceso de lectura ultra-rápido</text>

      <rect x="340" y="48" width="270" height="140" rx="8" fill={isDark ? "#142d3d" : "#e0f2fe"} stroke="#0284c7" strokeWidth="1.2" />
      <text x="475" y="70" fill="#0284c7" fontSize="10.5" fontWeight="bold" textAnchor="middle">Memory Heap (Objetos por Referencia)</text>
      <text x="355" y="93" fill={textColor} fontSize="8">• Objetos, Arrays, Functions, Sets, Maps</text>
      <text x="355" y="110" fill={textColor} fontSize="8">• Memoria dinámica no estructurada</text>
      <text x="355" y="127" fill={textColor} fontSize="8">• Variables guardan punteros a dirección en memoria</text>
      <text x="355" y="144" fill={textColor} fontSize="8">• Mutación compartida: objB.name muta objA</text>
      <text x="355" y="162" fill="#0284c7" fontSize="8" fontWeight="bold">♻️ Liberado por Garbage Collector</text>
    </svg>
  );
  },

  "js-nan-ieee754": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill="#f59e0b" fontSize="12" fontWeight="bold" textAnchor="middle">Naturaleza de NaN (IEEE 754 Floating Point)</text>

      <rect x="25" y="48" width="180" height="135" rx="6" fill={isDark ? "#1f2937" : "#ffffff"} stroke="#f59e0b" strokeWidth="1.2" />
      <text x="115" y="70" fill="#f59e0b" fontSize="10" fontWeight="bold" textAnchor="middle">Definición</text>
      <text x="35" y="94" fill={textColor} fontSize="8">• &quot;Not-a-Number&quot;</text>
      <text x="35" y="110" fill={textColor} fontSize="8">• typeof NaN === &apos;number&apos;</text>
      <text x="35" y="126" fill={textColor} fontSize="8">• Estándar IEEE 754</text>
      <text x="35" y="142" fill={textColor} fontSize="8">• 0 / 0 o Math.sqrt(-1)</text>

      <rect x="225" y="48" width="190" height="135" rx="6" fill={isDark ? "#450a0a" : "#fef2f2"} stroke="#ef4444" strokeWidth="1.2" />
      <text x="320" y="70" fill="#ef4444" fontSize="10" fontWeight="bold" textAnchor="middle">La Paradoja de Igualdad</text>
      <text x="235" y="94" fill={textColor} fontSize="8">• NaN === NaN ➔ <tspan fill="#ef4444" fontWeight="bold">false</tspan></text>
      <text x="235" y="110" fill={textColor} fontSize="8">• Único valor no idéntico a sí mismo</text>
      <text x="235" y="126" fill={textColor} fontSize="8">• isNaN(&apos;hola&apos;) ➔ true (coerción defectuosa)</text>
      <text x="235" y="142" fill="#ef4444" fontSize="8" fontWeight="bold">⛔ isNaN global es inseguro</text>

      <rect x="435" y="48" width="180" height="135" rx="6" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.2" />
      <text x="525" y="70" fill="#10b981" fontSize="10" fontWeight="bold" textAnchor="middle">Verificación Correcta</text>
      <text x="445" y="94" fill="#10b981" fontSize="8" fontFamily="monospace">Number.isNaN(val)</text>
      <text x="445" y="110" fill={textColor} fontSize="8">• Sin conversión previa</text>
      <text x="445" y="126" fill="#10b981" fontSize="8" fontFamily="monospace">Object.is(NaN, NaN)</text>
      <text x="445" y="142" fill={textColor} fontSize="8">• Devuelve true</text>
      <text x="445" y="160" fill="#10b981" fontSize="8" fontWeight="bold">✅ Solución estándar ES6</text>
    </svg>
  );
  },

  "js-null-vs-undefined": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill="#6366f1" fontSize="12" fontWeight="bold" textAnchor="middle">Diferencias Semánticas: null vs undefined</text>

      <rect x="30" y="45" width="270" height="145" rx="8" fill={isDark ? "#142d3d" : "#e0f2fe"} stroke="#0284c7" strokeWidth="1.2" />
      <text x="165" y="68" fill="#0284c7" fontSize="11" fontWeight="bold" textAnchor="middle">undefined (No Inicializado)</text>
      <text x="45" y="92" fill={textColor} fontSize="8.5">• Variable declarada pero sin valor asignado</text>
      <text x="45" y="108" fill={textColor} fontSize="8.5">• Retorno por defecto de funciones sin &apos;return&apos;</text>
      <text x="45" y="124" fill={textColor} fontSize="8.5">• Parámetros omitidos en llamadas</text>
      <text x="45" y="140" fill={textColor} fontSize="8.5">• typeof undefined === &apos;undefined&apos;</text>
      <text x="45" y="160" fill="#0284c7" fontSize="8" fontWeight="bold">Representa ausencia involuntaria o inicial</text>

      <rect x="340" y="45" width="270" height="145" rx="8" fill={isDark ? "#1e1b4b" : "#ede9fe"} stroke="#6366f1" strokeWidth="1.2" />
      <text x="475" y="68" fill="#6366f1" fontSize="11" fontWeight="bold" textAnchor="middle">null (Ausencia Intencional)</text>
      <text x="355" y="92" fill={textColor} fontSize="8.5">• Asignado deliberadamente por el programador</text>
      <text x="355" y="108" fill={textColor} fontSize="8.5">• Indica &quot;este objeto o valor no existe&quot;</text>
      <text x="355" y="124" fill={textColor} fontSize="8.5">• Retorno de DOM methods cuando no hay match</text>
      <text x="355" y="140" fill={textColor} fontSize="8.5">• typeof null === &apos;object&apos; (bug histórico JS)</text>
      <text x="355" y="160" fill="#6366f1" fontSize="8" fontWeight="bold">Representa valor vacío explícito</text>
    </svg>
  );
  },

  "js-json-serialization": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill="#10b981" fontSize="12" fontWeight="bold" textAnchor="middle">Ciclo de Serialización JSON: Objetos JS ➔ Texto JSON ➔ Objetos JS</text>

      <rect x="25" y="55" width="160" height="125" rx="6" fill={isDark ? "#1f2937" : "#ffffff"} stroke="#6366f1" strokeWidth="1.2" />
      <text x="105" y="77" fill="#6366f1" fontSize="10" fontWeight="bold" textAnchor="middle">Objeto en Memoria</text>
      <text x="35" y="98" fill={textColor} fontSize="8">• Objeto JavaScript vivo</text>
      <text x="35" y="112" fill={textColor} fontSize="8">• Heap memory pointer</text>
      <text x="35" y="126" fill={textColor} fontSize="8">• Tipos: Date, BigInt, etc.</text>

      <path d="M190 115 L235 115" stroke="#10b981" strokeWidth="2" />
      <polygon points="238,115 231,111 231,119" fill="#10b981" />
      <text x="212" y="105" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">JSON.stringify()</text>

      <rect x="240" y="55" width="160" height="125" rx="6" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.2" />
      <text x="320" y="77" fill="#10b981" fontSize="10" fontWeight="bold" textAnchor="middle">Payload String JSON</text>
      <text x="250" y="98" fill={textColor} fontSize="8">• Texto plano UTF-8</text>
      <text x="250" y="112" fill={textColor} fontSize="8">• Transmisión HTTP / Red</text>
      <text x="250" y="126" fill={textColor} fontSize="8">• Almacenamiento en disco</text>

      <path d="M405 115 L450 115" stroke="#0284c7" strokeWidth="2" />
      <polygon points="453,115 446,111 446,119" fill="#0284c7" />
      <text x="427" y="105" fill="#0284c7" fontSize="8" fontWeight="bold" textAnchor="middle">JSON.parse()</text>

      <rect x="455" y="55" width="160" height="125" rx="6" fill={isDark ? "#142d3d" : "#e0f2fe"} stroke="#0284c7" strokeWidth="1.2" />
      <text x="535" y="77" fill="#0284c7" fontSize="10" fontWeight="bold" textAnchor="middle">Nuevo Objeto JS</text>
      <text x="465" y="98" fill={textColor} fontSize="8">• Instancia clonada</text>
      <text x="465" y="112" fill={textColor} fontSize="8">• Pérdida de métodos/funciones</text>
      <text x="465" y="126" fill={textColor} fontSize="8">• Fechas convertidas a string</text>
    </svg>
  );
  },

  "js-use-strict-mode": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill="#ef4444" fontSize="12" fontWeight="bold" textAnchor="middle">Efectos y Protecciones de &quot;use strict&quot; (Modo Estricto)</text>

      <rect x="25" y="48" width="185" height="135" rx="8" fill={isDark ? "#450a0a" : "#fef2f2"} stroke="#ef4444" strokeWidth="1.2" />
      <text x="117" y="70" fill="#ef4444" fontSize="10" fontWeight="bold" textAnchor="middle">Sin Modo Estricto (Sloppy)</text>
      <text x="35" y="95" fill={textColor} fontSize="8">• x = 10 crea global window.x</text>
      <text x="35" y="112" fill={textColor} fontSize="8">• this en función apunta a window</text>
      <text x="35" y="129" fill={textColor} fontSize="8">• Parámetros duplicados permitidos</text>
      <text x="35" y="146" fill={textColor} fontSize="8">• Asignación a readonly falla en silencio</text>

      <rect x="227" y="48" width="185" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.2" />
      <text x="319" y="70" fill="#10b981" fontSize="10" fontWeight="bold" textAnchor="middle">Con &quot;use strict&quot;</text>
      <text x="237" y="95" fill={textColor} fontSize="8">• x = 10 lanza ReferenceError</text>
      <text x="237" y="112" fill={textColor} fontSize="8">• this en función es undefined</text>
      <text x="237" y="129" fill={textColor} fontSize="8">• Parámetros duplicados dan SyntaxError</text>
      <text x="237" y="146" fill={textColor} fontSize="8">• Asignación a readonly lanza TypeError</text>

      <rect x="429" y="48" width="185" height="135" rx="8" fill={isDark ? "#1e1b4b" : "#ede9fe"} stroke="#6366f1" strokeWidth="1.2" />
      <text x="521" y="70" fill="#6366f1" fontSize="10" fontWeight="bold" textAnchor="middle">En JavaScript Moderno</text>
      <text x="439" y="95" fill={textColor} fontSize="8">• Activado por defecto en ES Modules</text>
      <text x="439" y="112" fill={textColor} fontSize="8">• Activado por defecto en clases (class)</text>
      <text x="439" y="129" fill={textColor} fontSize="8">• Mejor optimización en V8 TurboFan</text>
      <text x="439" y="146" fill="#10b981" fontSize="8" fontWeight="bold">✅ Estándar de la industria</text>
    </svg>
  );
  },

  "js-hoisting-tdz": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill="#6366f1" fontSize="12" fontWeight="bold" textAnchor="middle">Hoisting y Temporal Dead Zone (TDZ)</text>

      <rect x="30" y="50" width="180" height="135" rx="6" fill={isDark ? "#1f2937" : "#ffffff"} stroke="#6366f1" strokeWidth="1.2" />
      <text x="120" y="72" fill="#6366f1" fontSize="10" fontWeight="bold" textAnchor="middle">1. Fase de Creación</text>
      <text x="40" y="95" fill={textColor} fontSize="8">• Escaneo de declaraciones</text>
      <text x="40" y="110" fill={textColor} fontSize="8">• function foo() &#123; &#125; ➔ enlazada 100%</text>
      <text x="40" y="125" fill={textColor} fontSize="8">• var x ➔ enlazada como undefined</text>
      <text x="40" y="140" fill={textColor} fontSize="8">• let/const y ➔ reservada sin init</text>

      <rect x="230" y="50" width="180" height="135" rx="6" fill={isDark ? "#450a0a" : "#fef2f2"} stroke="#ef4444" strokeWidth="1.2" />
      <text x="320" y="72" fill="#ef4444" fontSize="10" fontWeight="bold" textAnchor="middle">2. Temporal Dead Zone</text>
      <text x="240" y="95" fill={textColor} fontSize="8">• Inicio del bloque &#123;</text>
      <text x="240" y="112" fill="#ef4444" fontSize="8" fontWeight="bold">Zona Prohibida para let/const</text>
      <text x="240" y="128" fill={textColor} fontSize="8">• Intento de lectura ➔ ReferenceError</text>
      <text x="240" y="145" fill={textColor} fontSize="8">• Protege contra accesos prematuros</text>

      <rect x="430" y="50" width="180" height="135" rx="6" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.2" />
      <text x="520" y="72" fill="#10b981" fontSize="10" fontWeight="bold" textAnchor="middle">3. Declaración Evaluada</text>
      <text x="440" y="95" fill="#10b981" fontSize="8" fontFamily="monospace">let y = 42;</text>
      <text x="440" y="115" fill={textColor} fontSize="8">• Se asigna el valor real en memoria</text>
      <text x="440" y="132" fill={textColor} fontSize="8">• Fin de la Temporal Dead Zone</text>
      <text x="440" y="149" fill="#10b981" fontSize="8" fontWeight="bold">✅ Variable accesible</text>
    </svg>
  );
  },

  "js-callback-pattern": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill="#3b82f6" fontSize="12" fontWeight="bold" textAnchor="middle">Patrón de Funciones Callback: Síncrono vs Asíncrono</text>

      <rect x="30" y="48" width="270" height="140" rx="8" fill={isDark ? "#1e1b4b" : "#ede9fe"} stroke="#6366f1" strokeWidth="1.2" />
      <text x="165" y="70" fill="#6366f1" fontSize="10.5" fontWeight="bold" textAnchor="middle">Callback Síncrono (Inmediato)</text>
      <text x="45" y="93" fill={textColor} fontSize="8">• Se ejecuta inmediatamente en el Call Stack</text>
      <text x="45" y="109" fill={textColor} fontSize="8">• Array.prototype.map((item) =&gt; item * 2)</text>
      <text x="45" y="125" fill={textColor} fontSize="8">• Array.prototype.filter() / forEach()</text>
      <text x="45" y="141" fill={textColor} fontSize="8">• Bloquea el hilo hasta terminar la iteración</text>

      <rect x="340" y="48" width="270" height="140" rx="8" fill={isDark ? "#142d3d" : "#e0f2fe"} stroke="#0284c7" strokeWidth="1.2" />
      <text x="475" y="70" fill="#0284c7" fontSize="10.5" fontWeight="bold" textAnchor="middle">Callback Asíncrono (Diferido)</text>
      <text x="355" y="93" fill={textColor} fontSize="8">• Se registra y cede el control al Event Loop</text>
      <text x="355" y="109" fill={textColor} fontSize="8">• setTimeout(callback, 1000)</text>
      <text x="355" y="125" fill={textColor} fontSize="8">• addEventListener(&apos;click&apos;, callback)</text>
      <text x="355" y="141" fill={textColor} fontSize="8">• Entra en Task Queue tras completarse el I/O</text>
      <text x="355" y="160" fill="#0284c7" fontSize="8" fontWeight="bold">⚠️ Callback Hell resuelto con Promesas</text>
    </svg>
  );
  },

  "js-promise-lifecycle": ({ isDark, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill="#10b981" fontSize="12" fontWeight="bold" textAnchor="middle">Máquina de Estados de una Promesa en JavaScript</text>

      <rect x="35" y="80" width="150" height="70" rx="8" fill={isDark ? "#1e1b4b" : "#ede9fe"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="110" y="110" fill="#6366f1" fontSize="11" fontWeight="bold" textAnchor="middle">pending</text>
      <text x="110" y="126" fill={subtextColor} fontSize="8" textAnchor="middle">Operación en curso</text>

      <path d="M185 100 L300 70" stroke="#10b981" strokeWidth="2" />
      <polygon points="304,69 296,66 298,74" fill="#10b981" />
      <text x="240" y="75" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">resolve(val)</text>

      <path d="M185 130 L300 160" stroke="#ef4444" strokeWidth="2" />
      <polygon points="304,161 298,156 296,164" fill="#ef4444" />
      <text x="240" y="155" fill="#ef4444" fontSize="8" fontWeight="bold" textAnchor="middle">reject(err)</text>

      <rect x="310" y="45" width="160" height="60" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="390" y="70" fill="#10b981" fontSize="11" fontWeight="bold" textAnchor="middle">fulfilled</text>
      <text x="390" y="86" fill={subtextColor} fontSize="8" textAnchor="middle">.then(onFulfilled)</text>

      <rect x="310" y="130" width="160" height="60" rx="8" fill={isDark ? "#450a0a" : "#fef2f2"} stroke="#ef4444" strokeWidth="1.5" />
      <text x="390" y="155" fill="#ef4444" fontSize="11" fontWeight="bold" textAnchor="middle">rejected</text>
      <text x="390" y="171" fill={subtextColor} fontSize="8" textAnchor="middle">.catch(onRejected)</text>

      <path d="M470 75 L520 105" stroke="#6366f1" strokeWidth="1.5" />
      <path d="M470 160 L520 125" stroke="#6366f1" strokeWidth="1.5" />
      <rect x="525" y="90" width="95" height="50" rx="6" fill={isDark ? "#1f2937" : "#ffffff"} stroke="#818cf8" strokeWidth="1.2" />
      <text x="572" y="112" fill="#818cf8" fontSize="9" fontWeight="bold" textAnchor="middle">settled</text>
      <text x="572" y="126" fill={subtextColor} fontSize="7.5" textAnchor="middle">.finally()</text>
    </svg>
  );
  },

  "js-async-await-flow": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill="#6366f1" fontSize="12" fontWeight="bold" textAnchor="middle">Flujo de Ejecución de async / await con Microtasks</text>

      <rect x="25" y="48" width="180" height="135" rx="8" fill={isDark ? "#1e1b4b" : "#ede9fe"} stroke="#6366f1" strokeWidth="1.2" />
      <text x="115" y="68" fill="#6366f1" fontSize="10.5" fontWeight="bold" textAnchor="middle">1. Entrada a async fn</text>
      <text x="35" y="90" fill={textColor} fontSize="8">• Código síncrono corre al instante</text>
      <text x="35" y="106" fill={textColor} fontSize="8">• Llega a la expresión: await fetch()</text>
      <text x="35" y="122" fill={textColor} fontSize="8">• Convierte operando a Promesa</text>
      <text x="35" y="140" fill="#6366f1" fontSize="8" fontWeight="bold">Pausa la función local</text>

      <rect x="230" y="48" width="180" height="135" rx="8" fill={isDark ? "#142d3d" : "#e0f2fe"} stroke="#0284c7" strokeWidth="1.2" />
      <text x="320" y="68" fill="#0284c7" fontSize="10.5" fontWeight="bold" textAnchor="middle">2. Cesión del Hilo Principal</text>
      <text x="240" y="90" fill={textColor} fontSize="8">• La función devuelve una Promesa pending</text>
      <text x="240" y="106" fill={textColor} fontSize="8">• Call Stack queda libre de inmediato</text>
      <text x="240" y="122" fill={textColor} fontSize="8">• La UI no se bloquea</text>
      <text x="240" y="140" fill="#0284c7" fontSize="8" fontWeight="bold">Yield al Event Loop</text>

      <rect x="435" y="48" width="180" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.2" />
      <text x="525" y="68" fill="#10b981" fontSize="10.5" fontWeight="bold" textAnchor="middle">3. Reanudación en Microtask</text>
      <text x="445" y="90" fill={textColor} fontSize="8">• La promesa de await se resuelve</text>
      <text x="445" y="106" fill={textColor} fontSize="8">• El resto de la función se encola</text>
      <text x="445" y="122" fill={textColor} fontSize="8">• Retoma con el valor resuelto</text>
      <text x="445" y="140" fill="#10b981" fontSize="8" fontWeight="bold">✅ try/catch captura rechazo</text>
    </svg>
  );
  },

  "js-arrow-functions-this": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill="#8b5cf6" fontSize="12" fontWeight="bold" textAnchor="middle">Funciones Flecha vs Funciones Estándar: Enlace de this</text>

      <rect x="30" y="48" width="270" height="140" rx="8" fill={isDark ? "#1f2937" : "#ffffff"} stroke="#6366f1" strokeWidth="1.2" />
      <text x="165" y="70" fill="#6366f1" fontSize="10.5" fontWeight="bold" textAnchor="middle">function() Tradicional (this Dinámico)</text>
      <text x="45" y="93" fill={textColor} fontSize="8">• this depende de CÓMO se invoca la función</text>
      <text x="45" y="109" fill={textColor} fontSize="8">• En métodos ➔ apunta al objeto contenedor</text>
      <text x="45" y="125" fill={textColor} fontSize="8">• En callbacks sueltos ➔ pierde this (window/undefined)</text>
      <text x="45" y="141" fill={textColor} fontSize="8">• Posee objeto &apos;arguments&apos; y prototype</text>
      <text x="45" y="160" fill="#6366f1" fontSize="8" fontWeight="bold">Puede ser usada como constructor (new)</text>

      <rect x="340" y="48" width="270" height="140" rx="8" fill={isDark ? "#1e1b4b" : "#ede9fe"} stroke="#8b5cf6" strokeWidth="1.2" />
      <text x="475" y="70" fill="#8b5cf6" fontSize="10.5" fontWeight="bold" textAnchor="middle">() =&gt; Flecha (this Léxico)</text>
      <text x="355" y="93" fill={textColor} fontSize="8">• Hereda this del contexto léxico exterior</text>
      <text x="355" y="109" fill={textColor} fontSize="8">• Inmune a call(), apply() y bind()</text>
      <text x="355" y="125" fill={textColor} fontSize="8">• Ideal para callbacks en métodos de clase y React</text>
      <text x="355" y="141" fill={textColor} fontSize="8">• NO tiene &apos;arguments&apos; (usar rest ...args)</text>
      <text x="355" y="160" fill="#ef4444" fontSize="8" fontWeight="bold">⛔ NO se puede usar como constructor</text>
    </svg>
  );
  },

  "js-destructuring-pattern": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill="#10b981" fontSize="12" fontWeight="bold" textAnchor="middle">Patrón de Desestructuración (Destructuring) de Objetos y Arrays</text>

      <rect x="30" y="48" width="270" height="140" rx="8" fill={isDark ? "#1e1b4b" : "#eef2ff"} stroke="#6366f1" strokeWidth="1.2" />
      <text x="165" y="70" fill="#6366f1" fontSize="10.5" fontWeight="bold" textAnchor="middle">Desestructuración de Objetos</text>
      <rect x="45" y="80" width="240" height="42" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} stroke="#818cf8" strokeWidth="1" />
      <text x="52" y="96" fill="#818cf8" fontSize="8" fontFamily="monospace">const &#123; name, role = &apos;Dev&apos;, id: userId &#125; = user;</text>
      <text x="45" y="136" fill={textColor} fontSize="8">• Coincidencia por NOMBRE de clave</text>
      <text x="45" y="150" fill={textColor} fontSize="8">• Renombrado: id: userId</text>
      <text x="45" y="164" fill={textColor} fontSize="8">• Valores por defecto si es undefined</text>

      <rect x="340" y="48" width="270" height="140" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.2" />
      <text x="475" y="70" fill="#10b981" fontSize="10.5" fontWeight="bold" textAnchor="middle">Desestructuración de Arrays</text>
      <rect x="355" y="80" width="240" height="42" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} stroke="#34d399" strokeWidth="1" />
      <text x="362" y="96" fill="#10b981" fontSize="8" fontFamily="monospace">const [first, second, ...rest] = items;</text>
      <text x="355" y="136" fill={textColor} fontSize="8">• Coincidencia por POSICIÓN ordenada</text>
      <text x="355" y="150" fill={textColor} fontSize="8">• Omitir elementos: const [, , third] = list;</text>
      <text x="355" y="164" fill={textColor} fontSize="8">• Operador Rest recolecta el resto en array</text>
    </svg>
  );
  },

  "js-modules-esm-vs-cjs": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill="#6366f1" fontSize="12" fontWeight="bold" textAnchor="middle">Módulos en JavaScript: ES Modules (ESM) vs CommonJS (CJS)</text>

      <rect x="30" y="48" width="270" height="140" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.2" />
      <text x="165" y="70" fill="#10b981" fontSize="10.5" fontWeight="bold" textAnchor="middle">ES Modules (Estándar Web Moderno)</text>
      <text x="45" y="92" fill={textColor} fontSize="8.5">• import &#123; x &#125; from &apos;./mod.js&apos; / export const x</text>
      <text x="45" y="108" fill={textColor} fontSize="8.5">• Análisis estático en tiempo de compilación</text>
      <text x="45" y="124" fill={textColor} fontSize="8.5">• Tree-shaking nativo (elimina código muerto)</text>
      <text x="45" y="140" fill={textColor} fontSize="8.5">• Carga asíncrona compatible con el navegador</text>
      <text x="45" y="160" fill="#10b981" fontSize="8" fontWeight="bold">✅ Estándar universal browser + Node</text>

      <rect x="340" y="48" width="270" height="140" rx="8" fill={isDark ? "#142d3d" : "#e0f2fe"} stroke="#0284c7" strokeWidth="1.2" />
      <text x="475" y="70" fill="#0284c7" fontSize="10.5" fontWeight="bold" textAnchor="middle">CommonJS (Histórico Node.js)</text>
      <text x="355" y="92" fill={textColor} fontSize="8.5">• const x = require(&apos;./mod&apos;) / module.exports</text>
      <text x="355" y="108" fill={textColor} fontSize="8.5">• Carga síncrona en tiempo de ejecución (runtime)</text>
      <text x="355" y="124" fill={textColor} fontSize="8.5">• No permite tree-shaking eficiente</text>
      <text x="355" y="140" fill={textColor} fontSize="8.5">• Incompatible con navegadores sin bundler</text>
      <text x="355" y="160" fill="#0284c7" fontSize="8" fontWeight="bold">Transicionando hacia ESM en ecosistema Node</text>
    </svg>
  );
  },

  "js-class-syntax-sugar": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill="#8b5cf6" fontSize="12" fontWeight="bold" textAnchor="middle">Clases ES6: Azúcar Sintáctico sobre la Cadena Prototípica</text>

      <rect x="30" y="48" width="270" height="140" rx="8" fill={isDark ? "#1e1b4b" : "#ede9fe"} stroke="#6366f1" strokeWidth="1.2" />
      <text x="165" y="70" fill="#6366f1" fontSize="10.5" fontWeight="bold" textAnchor="middle">Sintaxis class User &#123; ... &#125;</text>
      <text x="45" y="93" fill={textColor} fontSize="8">• constructor(name) &#123; this.name = name; &#125;</text>
      <text x="45" y="109" fill={textColor} fontSize="8">• code() &#123; ... &#125; (método de instancia)</text>
      <text x="45" y="125" fill={textColor} fontSize="8">• static create() &#123; ... &#125; (método estático)</text>
      <text x="45" y="141" fill={textColor} fontSize="8">• #privateField (campo privado nativo)</text>
      <text x="45" y="160" fill="#6366f1" fontSize="8" fontWeight="bold">Azúcar limpio y estructurado de ES6</text>

      <path d="M305 118 L335 118" stroke="#8b5cf6" strokeWidth="2" />
      <polygon points="338,118 331,114 331,122" fill="#8b5cf6" />

      <rect x="340" y="48" width="270" height="140" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.2" />
      <text x="475" y="70" fill="#10b981" fontSize="10.5" fontWeight="bold" textAnchor="middle">Realidad Interna en Motor V8</text>
      <text x="355" y="93" fill={textColor} fontSize="8">• typeof User === &apos;function&apos;</text>
      <text x="355" y="109" fill={textColor} fontSize="8">• User.prototype.code = function() &#123; ... &#125;</text>
      <text x="355" y="125" fill={textColor} fontSize="8">• User.create = function() &#123; ... &#125;</text>
      <text x="355" y="141" fill={textColor} fontSize="8">• Instancia hereda vía [[Prototype]]</text>
      <text x="355" y="160" fill="#10b981" fontSize="8" fontWeight="bold">Sigue siendo 100% prototípico por debajo</text>
    </svg>
  );
  },

  "js-this-binding-rules": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="28" fill="#3b82f6" fontSize="12" fontWeight="bold" textAnchor="middle">Las 4 Reglas de Resolución de this en JavaScript</text>

      <rect x="25" y="44" width="135" height="145" rx="6" fill={isDark ? "#1f2937" : "#ffffff"} stroke="#6366f1" strokeWidth="1.2" />
      <text x="92" y="64" fill="#6366f1" fontSize="9" fontWeight="bold" textAnchor="middle">1. Default Binding</text>
      <text x="32" y="85" fill={textColor} fontSize="7.5">• Llamada suelta:</text>
      <text x="32" y="98" fill="#6366f1" fontSize="7.5" fontFamily="monospace">foo();</text>
      <text x="32" y="115" fill={textColor} fontSize="7.5">• Modo sloppy:</text>
      <text x="32" y="128" fill={subtextColor} fontSize="7.5">window / global</text>
      <text x="32" y="145" fill={textColor} fontSize="7.5">• &quot;use strict&quot;:</text>
      <text x="32" y="158" fill="#ef4444" fontSize="7.5" fontWeight="bold">undefined</text>

      <rect x="175" y="44" width="135" height="145" rx="6" fill={isDark ? "#142d3d" : "#e0f2fe"} stroke="#0284c7" strokeWidth="1.2" />
      <text x="242" y="64" fill="#0284c7" fontSize="9" fontWeight="bold" textAnchor="middle">2. Implicit Binding</text>
      <text x="182" y="85" fill={textColor} fontSize="7.5">• Invocado como método:</text>
      <text x="182" y="98" fill="#0284c7" fontSize="7.5" fontFamily="monospace">user.greet();</text>
      <text x="182" y="115" fill={textColor} fontSize="7.5">• this apunta al objeto</text>
      <text x="182" y="128" fill={subtextColor} fontSize="7.5">que precede el punto</text>
      <text x="182" y="145" fill="#f59e0b" fontSize="7.5" fontWeight="bold">⚠️ Cuidado:</text>
      <text x="182" y="158" fill={subtextColor} fontSize="7.5">Se pierde si se extrae</text>

      <rect x="325" y="44" width="145" height="145" rx="6" fill={isDark ? "#1e1b4b" : "#ede9fe"} stroke="#8b5cf6" strokeWidth="1.2" />
      <text x="397" y="64" fill="#8b5cf6" fontSize="9" fontWeight="bold" textAnchor="middle">3. Explicit Binding</text>
      <text x="332" y="85" fill={textColor} fontSize="7.5">• Forzado manual:</text>
      <text x="332" y="98" fill="#8b5cf6" fontSize="7" fontFamily="monospace">fn.call(ctx, 1, 2)</text>
      <text x="332" y="110" fill="#8b5cf6" fontSize="7" fontFamily="monospace">fn.apply(ctx, [1, 2])</text>
      <text x="332" y="122" fill="#8b5cf6" fontSize="7" fontFamily="monospace">fn.bind(ctx)()</text>
      <text x="332" y="142" fill={textColor} fontSize="7.5">• bind crea función nueva</text>
      <text x="332" y="155" fill={subtextColor} fontSize="7.5">con this amarrado</text>

      <rect x="485" y="44" width="130" height="145" rx="6" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.2" />
      <text x="550" y="64" fill="#10b981" fontSize="9" fontWeight="bold" textAnchor="middle">4. new Operator</text>
      <text x="492" y="85" fill={textColor} fontSize="7.5">• Constructor:</text>
      <text x="492" y="98" fill="#10b981" fontSize="7.5" fontFamily="monospace">new Foo();</text>
      <text x="492" y="115" fill={textColor} fontSize="7.5">• Crea nuevo objeto &#123;&#125;</text>
      <text x="492" y="128" fill={textColor} fontSize="7.5">• Enlaza prototype</text>
      <text x="492" y="145" fill="#10b981" fontSize="7.5" fontWeight="bold">this = nuevo objeto</text>
    </svg>
  );
  },

  "js-mutability-memory-heap": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill="#10b981" fontSize="12" fontWeight="bold" textAnchor="middle">Inmutabilidad vs Mutación: Shallow Copy vs Deep Copy</text>

      <rect x="25" y="48" width="185" height="135" rx="8" fill={isDark ? "#450a0a" : "#fef2f2"} stroke="#ef4444" strokeWidth="1.2" />
      <text x="117" y="70" fill="#ef4444" fontSize="10" fontWeight="bold" textAnchor="middle">Mutación por Referencia</text>
      <text x="35" y="95" fill={textColor} fontSize="8">• const b = a; b.age = 30;</text>
      <text x="35" y="112" fill={textColor} fontSize="8">• Ambas variables apuntan al</text>
      <text x="35" y="125" fill={subtextColor} fontSize="8">mismo slot en el Heap</text>
      <text x="35" y="142" fill="#ef4444" fontSize="8" fontWeight="bold">Efecto secundario no deseado</text>

      <rect x="227" y="48" width="185" height="135" rx="8" fill={isDark ? "#1e1b4b" : "#ede9fe"} stroke="#6366f1" strokeWidth="1.2" />
      <text x="319" y="70" fill="#6366f1" fontSize="10" fontWeight="bold" textAnchor="middle">Shallow Copy (Superficial)</text>
      <text x="237" y="95" fill={textColor} fontSize="8">• &#123; ...a &#125; o Object.assign()</text>
      <text x="237" y="112" fill={textColor} fontSize="8">• Clona el primer nivel</text>
      <text x="237" y="125" fill={textColor} fontSize="8">• Objetos anidados siguen</text>
      <text x="237" y="138" fill={subtextColor} fontSize="8">compartiendo referencia</text>
      <text x="237" y="155" fill="#f59e0b" fontSize="8" fontWeight="bold">Incompleto para árboles</text>

      <rect x="429" y="48" width="185" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.2" />
      <text x="521" y="70" fill="#10b981" fontSize="10" fontWeight="bold" textAnchor="middle">Deep Copy (Profunda)</text>
      <text x="439" y="95" fill={textColor} fontSize="8">• structuredClone(a)</text>
      <text x="439" y="112" fill={textColor} fontSize="8">• Clona recursivamente todo</text>
      <text x="439" y="125" fill={textColor} fontSize="8">• Soporta referencias circulares</text>
      <text x="439" y="138" fill={textColor} fontSize="8">• Copia Sets, Maps y Dates</text>
      <text x="439" y="155" fill="#10b981" fontSize="8" fontWeight="bold">✅ Inmutabilidad real</text>
    </svg>
  );
  },

  "js-closure-lexical-environment": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill="#6366f1" fontSize="12" fontWeight="bold" textAnchor="middle">Mecánica de un Closure: Función Interna + Entorno Léxico Retenido</text>

      <rect x="25" y="48" width="280" height="140" rx="8" fill={isDark ? "#1e1b4b" : "#ede9fe"} stroke="#6366f1" strokeWidth="1.2" />
      <text x="165" y="70" fill="#6366f1" fontSize="10.5" fontWeight="bold" textAnchor="middle">Función Externa createCounter()</text>
      <rect x="35" y="80" width="260" height="35" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} stroke="#818cf8" strokeWidth="1" />
      <text x="45" y="102" fill="#818cf8" fontSize="8.5" fontFamily="monospace">let count = 0; // Variable privada</text>
      <text x="35" y="135" fill={textColor} fontSize="8">• La función externa sale del Call Stack tras retornar</text>
      <text x="35" y="150" fill={textColor} fontSize="8">• Sin embargo, su Environment Record NO se destruye</text>
      <text x="35" y="165" fill="#10b981" fontSize="8" fontWeight="bold">Preservado en el Heap por referencia activa</text>

      <path d="M310 118 L330 118" stroke="#10b981" strokeWidth="2" />
      <polygon points="333,118 326,114 326,122" fill="#10b981" />

      <rect x="335" y="48" width="280" height="140" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.2" />
      <text x="475" y="70" fill="#10b981" fontSize="10.5" fontWeight="bold" textAnchor="middle">Función Interna increment() (Closure)</text>
      <rect x="345" y="80" width="260" height="35" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} stroke="#34d399" strokeWidth="1" />
      <text x="355" y="102" fill="#34d399" fontSize="8.5" fontFamily="monospace">return () =&gt; ++count;</text>
      <text x="345" y="135" fill={textColor} fontSize="8">• Mantiene el puntero [[Scopes]] hacia &apos;count&apos;</text>
      <text x="345" y="150" fill={textColor} fontSize="8">• Encapsulación real: count es inaccesible desde afuera</text>
      <text x="345" y="165" fill="#10b981" fontSize="8" fontWeight="bold">✅ Base de currying, memoize y reactividad</text>
    </svg>
  );
  },

  "js-prototype-chain": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill="#8b5cf6" fontSize="12" fontWeight="bold" textAnchor="middle">La Cadena de Prototipos (Prototype Chain)</text>

      <rect x="25" y="65" width="130" height="100" rx="6" fill={isDark ? "#1f2937" : "#ffffff"} stroke="#6366f1" strokeWidth="1.2" />
      <text x="90" y="87" fill="#6366f1" fontSize="9.5" fontWeight="bold" textAnchor="middle">Instancia dev</text>
      <text x="35" y="108" fill={textColor} fontSize="7.5">name: &quot;Diego&quot;</text>
      <text x="35" y="122" fill={textColor} fontSize="7.5">role: &quot;Architect&quot;</text>
      <text x="35" y="145" fill={subtextColor} fontSize="7">__proto__ ➔</text>

      <path d="M160 115 L185 115" stroke="#6366f1" strokeWidth="2" />
      <polygon points="188,115 181,111 181,119" fill="#6366f1" />

      <rect x="190" y="65" width="150" height="100" rx="6" fill={isDark ? "#1e1b4b" : "#ede9fe"} stroke="#8b5cf6" strokeWidth="1.2" />
      <text x="265" y="87" fill="#8b5cf6" fontSize="9.5" fontWeight="bold" textAnchor="middle">Developer.prototype</text>
      <text x="200" y="108" fill={textColor} fontSize="7.5">code: function() &#123;&#125;</text>
      <text x="200" y="122" fill={subtextColor} fontSize="7.5">Métodos compartidos</text>
      <text x="200" y="145" fill={subtextColor} fontSize="7">__proto__ ➔</text>

      <path d="M345 115 L370 115" stroke="#8b5cf6" strokeWidth="2" />
      <polygon points="373,115 366,111 366,119" fill="#8b5cf6" />

      <rect x="375" y="65" width="145" height="100" rx="6" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.2" />
      <text x="447" y="87" fill="#10b981" fontSize="9.5" fontWeight="bold" textAnchor="middle">Object.prototype</text>
      <text x="385" y="108" fill={textColor} fontSize="7.5">hasOwnProperty()</text>
      <text x="385" y="122" fill={textColor} fontSize="7.5">toString() / valueOf()</text>
      <text x="385" y="145" fill={subtextColor} fontSize="7">__proto__ ➔</text>

      <path d="M525 115 L550 115" stroke="#10b981" strokeWidth="2" />
      <polygon points="553,115 546,111 546,119" fill="#10b981" />

      <rect x="555" y="90" width="65" height="50" rx="6" fill={isDark ? "#111827" : "#e2e8f0"} stroke="#64748b" strokeWidth="1.2" />
      <text x="587" y="120" fill="#64748b" fontSize="10" fontWeight="bold" textAnchor="middle">null</text>
    </svg>
  );
  },

  "js-functional-pipeline": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill="#10b981" fontSize="12" fontWeight="bold" textAnchor="middle">Programación Funcional: Pipeline de Funciones Puras e Inmutables</text>

      <rect x="25" y="55" width="115" height="110" rx="6" fill={isDark ? "#1f2937" : "#ffffff"} stroke="#6366f1" strokeWidth="1.2" />
      <text x="82" y="77" fill="#6366f1" fontSize="9" fontWeight="bold" textAnchor="middle">Datos Iniciales</text>
      <text x="32" y="100" fill={textColor} fontSize="7.5">[1, 2, 3, 4, 5]</text>
      <text x="32" y="120" fill="#10b981" fontSize="7.5" fontWeight="bold">Inmutable</text>

      <path d="M145 110 L165 110" stroke="#6366f1" strokeWidth="1.5" />
      <polygon points="168,110 162,106 162,114" fill="#6366f1" />

      <rect x="170" y="55" width="130" height="110" rx="6" fill={isDark ? "#1e1b4b" : "#ede9fe"} stroke="#6366f1" strokeWidth="1.2" />
      <text x="235" y="77" fill="#6366f1" fontSize="9" fontWeight="bold" textAnchor="middle">filter(isEven)</text>
      <text x="178" y="100" fill={textColor} fontSize="7.5">Función Pura</text>
      <text x="178" y="115" fill={subtextColor} fontSize="7.5">Sin side effects</text>
      <text x="178" y="135" fill="#6366f1" fontSize="7.5" fontFamily="monospace">[2, 4]</text>

      <path d="M305 110 L325 110" stroke="#6366f1" strokeWidth="1.5" />
      <polygon points="328,110 322,106 322,114" fill="#6366f1" />

      <rect x="330" y="55" width="130" height="110" rx="6" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.2" />
      <text x="395" y="77" fill="#10b981" fontSize="9" fontWeight="bold" textAnchor="middle">map(double)</text>
      <text x="338" y="100" fill={textColor} fontSize="7.5">Mapeo Determinista</text>
      <text x="338" y="115" fill={subtextColor} fontSize="7.5">f(x) siempre igual</text>
      <text x="338" y="135" fill="#10b981" fontSize="7.5" fontFamily="monospace">[4, 8]</text>

      <path d="M465 110 L485 110" stroke="#10b981" strokeWidth="1.5" />
      <polygon points="488,110 482,106 482,114" fill="#10b981" />

      <rect x="490" y="55" width="125" height="110" rx="6" fill={isDark ? "#142d3d" : "#e0f2fe"} stroke="#0284c7" strokeWidth="1.2" />
      <text x="552" y="77" fill="#0284c7" fontSize="9" fontWeight="bold" textAnchor="middle">reduce(sum)</text>
      <text x="498" y="100" fill={textColor} fontSize="7.5">Acumulador</text>
      <text x="498" y="115" fill={subtextColor} fontSize="7.5">Resultado final</text>
      <text x="498" y="138" fill="#0284c7" fontSize="9" fontWeight="bold" fontFamily="monospace">12</text>
    </svg>
  );
  },

  "js-currying-partial-application": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill="#6366f1" fontSize="12" fontWeight="bold" textAnchor="middle">Currying y Aplicación Parcial: f(a, b, c) ➔ f(a)(b)(c)</text>

      <rect x="30" y="48" width="270" height="140" rx="8" fill={isDark ? "#1f2937" : "#ffffff"} stroke="#6366f1" strokeWidth="1.2" />
      <text x="165" y="70" fill="#6366f1" fontSize="10.5" fontWeight="bold" textAnchor="middle">Función Normal Multiaridad</text>
      <rect x="45" y="80" width="240" height="35" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} stroke="#818cf8" strokeWidth="1" />
      <text x="52" y="102" fill="#818cf8" fontSize="8" fontFamily="monospace">const add = (a, b, c) =&gt; a + b + c;</text>
      <text x="45" y="135" fill={textColor} fontSize="8">• Exige todos los argumentos a la vez: add(1, 2, 3)</text>
      <text x="45" y="150" fill={textColor} fontSize="8">• No reutilizable para configuración parcial</text>

      <rect x="340" y="48" width="270" height="140" rx="8" fill={isDark ? "#1e1b4b" : "#ede9fe"} stroke="#8b5cf6" strokeWidth="1.2" />
      <text x="475" y="70" fill="#8b5cf6" fontSize="10.5" fontWeight="bold" textAnchor="middle">Función Curried (Unaria Enlazada)</text>
      <rect x="355" y="80" width="240" height="35" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} stroke="#a78bfa" strokeWidth="1" />
      <text x="362" y="102" fill="#a78bfa" fontSize="8" fontFamily="monospace">const add = a =&gt; b =&gt; c =&gt; a + b + c;</text>
      <text x="355" y="135" fill={textColor} fontSize="8">• Aplicación parcial: const add5 = add(5);</text>
      <text x="355" y="150" fill={textColor} fontSize="8">• Composición funcional pura y tipado unario</text>
      <text x="355" y="165" fill="#10b981" fontSize="8" fontWeight="bold">✅ add(5)(10)(20) ➔ 35</text>
    </svg>
  );
  },

  "js-memoization-cache": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill="#10b981" fontSize="12" fontWeight="bold" textAnchor="middle">Arquitectura de Memoización: Evitar Cálculos Repetitivos</text>

      <rect x="25" y="65" width="130" height="90" rx="6" fill={isDark ? "#1f2937" : "#ffffff"} stroke="#6366f1" strokeWidth="1.2" />
      <text x="90" y="90" fill="#6366f1" fontSize="10" fontWeight="bold" textAnchor="middle">Invocación</text>
      <text x="35" y="112" fill={textColor} fontSize="8">fn(arg1, arg2)</text>
      <text x="35" y="128" fill={subtextColor} fontSize="7.5">Args serializados</text>

      <path d="M160 110 L195 110" stroke="#6366f1" strokeWidth="1.5" />
      <polygon points="198,110 192,106 192,114" fill="#6366f1" />

      <rect x="200" y="48" width="180" height="135" rx="8" fill={isDark ? "#142d3d" : "#e0f2fe"} stroke="#0284c7" strokeWidth="1.2" />
      <text x="290" y="70" fill="#0284c7" fontSize="10.5" fontWeight="bold" textAnchor="middle">Cache Lookup (Map)</text>
      <text x="210" y="94" fill={textColor} fontSize="8">• ¿Existe key en cache?</text>
      <text x="210" y="115" fill="#10b981" fontSize="8" fontWeight="bold">SÍ (Cache Hit):</text>
      <text x="210" y="128" fill={subtextColor} fontSize="7.5">Retorna resultado O(1)</text>
      <text x="210" y="148" fill="#ef4444" fontSize="8" fontWeight="bold">NO (Cache Miss):</text>
      <text x="210" y="161" fill={subtextColor} fontSize="7.5">Calcula y guarda</text>

      <path d="M385 110 L430 110" stroke="#10b981" strokeWidth="1.5" />
      <polygon points="433,110 426,106 426,114" fill="#10b981" />

      <rect x="435" y="48" width="180" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.2" />
      <text x="525" y="70" fill="#10b981" fontSize="10.5" fontWeight="bold" textAnchor="middle">Retorno Inmediato</text>
      <text x="445" y="95" fill={textColor} fontSize="8">• fibonacci(45)</text>
      <text x="445" y="112" fill={textColor} fontSize="8">• 1er llamado: 1500 ms</text>
      <text x="445" y="129" fill="#10b981" fontSize="8.5" fontWeight="bold">• 2do llamado: 0.1 ms</text>
      <text x="445" y="150" fill="#059669" fontSize="8" fontWeight="bold">⚡ Aceleración exponencial</text>
    </svg>
  );
  },

  "js-event-delegation-bubbling": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill="#6366f1" fontSize="12" fontWeight="bold" textAnchor="middle">Delegación de Eventos: Capturing ➔ Target ➔ Bubbling</text>

      <rect x="30" y="48" width="260" height="140" rx="8" fill={isDark ? "#1e1b4b" : "#ede9fe"} stroke="#6366f1" strokeWidth="1.2" />
      <text x="160" y="70" fill="#6366f1" fontSize="10.5" fontWeight="bold" textAnchor="middle">Las 3 Fases del Evento</text>
      <text x="45" y="95" fill="#3b82f6" fontSize="8.5" fontWeight="bold">1. Capturing Phase (Hacia abajo)</text>
      <text x="45" y="110" fill={subtextColor} fontSize="7.5">window ➔ document ➔ body ➔ contenedor</text>
      <text x="45" y="127" fill="#ef4444" fontSize="8.5" fontWeight="bold">2. Target Phase</text>
      <text x="45" y="142" fill={subtextColor} fontSize="7.5">Elemento exacto clickeado (e.target)</text>
      <text x="45" y="159" fill="#10b981" fontSize="8.5" fontWeight="bold">3. Bubbling Phase (Hacia arriba)</text>
      <text x="45" y="174" fill={subtextColor} fontSize="7.5">Sube hasta window activando listeners</text>

      <rect x="320" y="48" width="290" height="140" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.2" />
      <text x="465" y="70" fill="#10b981" fontSize="10.5" fontWeight="bold" textAnchor="middle">Patrón Event Delegation</text>
      <rect x="330" y="80" width="270" height="42" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} stroke="#34d399" strokeWidth="1" />
      <text x="338" y="96" fill="#10b981" fontSize="7.5" fontFamily="monospace">list.addEventListener(&apos;click&apos;, (e) =&gt; &#123;</text>
      <text x="345" y="110" fill="#38bdf8" fontSize="7.5" fontFamily="monospace">  if (e.target.matches(&apos;button.delete&apos;)) ...</text>
      <text x="330" y="136" fill={textColor} fontSize="8">• 1 solo listener en el padre para 10,000 items</text>
      <text x="330" y="150" fill={textColor} fontSize="8">• Funciona automáticamente para elementos creados a futuro</text>
      <text x="330" y="166" fill="#10b981" fontSize="8" fontWeight="bold">⚡ Ahorro masivo de memoria RAM</text>
    </svg>
  );
  },

  "js-abort-controller-signal": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill="#ef4444" fontSize="12" fontWeight="bold" textAnchor="middle">AbortController: Cancelación Asíncrona Cooperativa</text>

      <rect x="30" y="48" width="260" height="140" rx="8" fill={isDark ? "#1e1b4b" : "#ede9fe"} stroke="#6366f1" strokeWidth="1.2" />
      <text x="160" y="70" fill="#6366f1" fontSize="10.5" fontWeight="bold" textAnchor="middle">AbortController &amp; Signal</text>
      <rect x="40" y="80" width="240" height="38" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} stroke="#818cf8" strokeWidth="1" />
      <text x="48" y="96" fill="#818cf8" fontSize="8" fontFamily="monospace">const ctrl = new AbortController();</text>
      <text x="48" y="108" fill="#10b981" fontSize="8" fontFamily="monospace">fetch(url, &#123; signal: ctrl.signal &#125;);</text>
      <text x="40" y="135" fill={textColor} fontSize="8">• ctrl.signal se pasa a APIs asíncronas</text>
      <text x="40" y="150" fill={textColor} fontSize="8">• Soporta addEventListener y streams</text>

      <path d="M295 118 L335 118" stroke="#ef4444" strokeWidth="2" strokeDasharray="3 3" />
      <polygon points="338,118 331,114 331,122" fill="#ef4444" />
      <text x="315" y="110" fill="#ef4444" fontSize="8" fontWeight="bold" textAnchor="middle">abort()</text>

      <rect x="340" y="48" width="270" height="140" rx="8" fill={isDark ? "#450a0a" : "#fef2f2"} stroke="#ef4444" strokeWidth="1.2" />
      <text x="475" y="70" fill="#ef4444" fontSize="10.5" fontWeight="bold" textAnchor="middle">Cancelación Inmediata</text>
      <text x="355" y="93" fill={textColor} fontSize="8">• ctrl.abort() cambia signal.aborted = true</text>
      <text x="355" y="109" fill={textColor} fontSize="8">• La petición de red HTTP se aborta de raíz</text>
      <text x="355" y="125" fill={textColor} fontSize="8">• La promesa se rechaza con DOMException (AbortError)</text>
      <text x="355" y="141" fill={textColor} fontSize="8">• Limpieza indispensable en useEffect de React</text>
      <text x="355" y="160" fill="#ef4444" fontSize="8" fontWeight="bold">🛑 Cero memory leaks o race conditions</text>
    </svg>
  );
  },

  "js-microtasks-vs-macrotasks": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill="#6366f1" fontSize="12" fontWeight="bold" textAnchor="middle">Prioridades del Event Loop: Microtask Queue vs Macrotask Queue</text>

      <rect x="25" y="48" width="180" height="135" rx="8" fill={isDark ? "#1f2937" : "#ffffff"} stroke="#6366f1" strokeWidth="1.2" />
      <text x="115" y="70" fill="#6366f1" fontSize="10.5" fontWeight="bold" textAnchor="middle">Call Stack (Síncrono)</text>
      <text x="35" y="94" fill={textColor} fontSize="8">• Código síncrono</text>
      <text x="35" y="110" fill={textColor} fontSize="8">• Funciones ordinarias</text>
      <text x="35" y="126" fill="#6366f1" fontSize="8" fontWeight="bold">Debe quedar 100% vacío</text>
      <text x="35" y="140" fill={subtextColor} fontSize="7.5">antes de revisar colas</text>

      <path d="M210 115 L230 115" stroke="#10b981" strokeWidth="2" />
      <polygon points="233,115 226,111 226,119" fill="#10b981" />

      <rect x="235" y="48" width="180" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.2" />
      <text x="325" y="70" fill="#10b981" fontSize="10.5" fontWeight="bold" textAnchor="middle">Microtasks (Prioridad 1)</text>
      <text x="245" y="94" fill={textColor} fontSize="8">• Promises (.then / .catch)</text>
      <text x="245" y="110" fill={textColor} fontSize="8">• queueMicrotask()</text>
      <text x="245" y="126" fill={textColor} fontSize="8">• MutationObserver</text>
      <text x="245" y="142" fill="#10b981" fontSize="8" fontWeight="bold">Se vacía TODA la cola</text>
      <text x="245" y="156" fill={subtextColor} fontSize="7.5">incluso nuevas microtasks</text>

      <path d="M420 115 L440 115" stroke="#f59e0b" strokeWidth="2" />
      <polygon points="443,115 436,111 436,119" fill="#f59e0b" />

      <rect x="445" y="48" width="170" height="135" rx="8" fill={isDark ? "#451a03" : "#fffbeb"} stroke="#f59e0b" strokeWidth="1.2" />
      <text x="530" y="70" fill="#f59e0b" fontSize="10.5" fontWeight="bold" textAnchor="middle">Macrotasks (Prioridad 2)</text>
      <text x="455" y="94" fill={textColor} fontSize="8">• setTimeout / setInterval</text>
      <text x="455" y="110" fill={textColor} fontSize="8">• I/O de red y usuario</text>
      <text x="455" y="126" fill={textColor} fontSize="8">• postMessage</text>
      <text x="455" y="142" fill="#f59e0b" fontSize="8" fontWeight="bold">Solo 1 por cada ciclo</text>
      <text x="455" y="156" fill={subtextColor} fontSize="7.5">Cede el turno a render</text>
    </svg>
  );
  },

  "js-generator-state-machine": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill="#8b5cf6" fontSize="12" fontWeight="bold" textAnchor="middle">Generators (function*): Máquina de Estados Pausable con yield</text>

      <rect x="30" y="48" width="260" height="140" rx="8" fill={isDark ? "#1e1b4b" : "#ede9fe"} stroke="#8b5cf6" strokeWidth="1.2" />
      <text x="160" y="70" fill="#8b5cf6" fontSize="10.5" fontWeight="bold" textAnchor="middle">function* generator()</text>
      <rect x="40" y="80" width="240" height="42" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} stroke="#a78bfa" strokeWidth="1" />
      <text x="48" y="95" fill="#a78bfa" fontSize="7.5" fontFamily="monospace">yield &apos;Primer valor&apos;; // Pausa</text>
      <text x="48" y="109" fill="#a78bfa" fontSize="7.5" fontFamily="monospace">yield &apos;Segundo valor&apos;;</text>
      <text x="40" y="136" fill={textColor} fontSize="8">• La ejecución se detiene exactamente en yield</text>
      <text x="40" y="150" fill={textColor} fontSize="8">• Conserva todo el contexto local congelado</text>

      <path d="M295 118 L335 118" stroke="#10b981" strokeWidth="2" />
      <polygon points="338,118 331,114 331,122" fill="#10b981" />
      <text x="315" y="110" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">.next()</text>

      <rect x="340" y="48" width="270" height="140" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.2" />
      <text x="475" y="70" fill="#10b981" fontSize="10.5" fontWeight="bold" textAnchor="middle">Objeto Iterador &#123; value, done &#125;</text>
      <text x="355" y="93" fill={textColor} fontSize="8">• gen.next() ➔ &#123; value: &apos;Primer valor&apos;, done: false &#125;</text>
      <text x="355" y="110" fill={textColor} fontSize="8">• gen.next() ➔ &#123; value: &apos;Segundo valor&apos;, done: false &#125;</text>
      <text x="355" y="127" fill={textColor} fontSize="8">• gen.next() ➔ &#123; value: undefined, done: true &#125;</text>
      <text x="355" y="145" fill={textColor} fontSize="8">• Soporta secuencias infinitas con bajo consumo de RAM</text>
      <text x="355" y="162" fill="#10b981" fontSize="8" fontWeight="bold">✅ Base de sagas (Redux Saga) y lazy eval</text>
    </svg>
  );
  },

  "js-weakmap-garbage-collection": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill="#10b981" fontSize="12" fontWeight="bold" textAnchor="middle">WeakMap / WeakSet: Referencias Débiles y Garbage Collection</text>

      <rect x="30" y="48" width="260" height="140" rx="8" fill={isDark ? "#450a0a" : "#fef2f2"} stroke="#ef4444" strokeWidth="1.2" />
      <text x="160" y="70" fill="#ef4444" fontSize="10.5" fontWeight="bold" textAnchor="middle">Map Normal (Referencia Fuerte)</text>
      <text x="45" y="93" fill={textColor} fontSize="8">• Retiene el objeto clave con fuerza</text>
      <text x="45" y="110" fill={textColor} fontSize="8">• Si el objeto original se desvincula (obj = null),</text>
      <text x="45" y="125" fill={textColor} fontSize="8">el Map SIGUE impidiendo que el GC lo libere</text>
      <text x="45" y="145" fill="#ef4444" fontSize="8" fontWeight="bold">⚠️ Provoca fugas de memoria (Memory Leaks)</text>

      <rect x="330" y="48" width="280" height="140" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.2" />
      <text x="470" y="70" fill="#10b981" fontSize="10.5" fontWeight="bold" textAnchor="middle">WeakMap (Referencia Débil)</text>
      <text x="345" y="93" fill={textColor} fontSize="8">• Las claves DEBEN ser objetos obligatoriamente</text>
      <text x="345" y="110" fill={textColor} fontSize="8">• No impide que el Garbage Collector recolecte el objeto</text>
      <text x="345" y="125" fill={textColor} fontSize="8">• Cuando el objeto muere, su entrada desaparece sola</text>
      <text x="345" y="142" fill={textColor} fontSize="8">• No es iterable (no tiene .size ni for...of)</text>
      <text x="345" y="160" fill="#10b981" fontSize="8" fontWeight="bold">✅ Ideal para metadatos privados y listeners</text>
    </svg>
  );
  },

  "js-proxy-reflect-traps": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill="#6366f1" fontSize="12" fontWeight="bold" textAnchor="middle">Proxy &amp; Reflect: Metaprogramación e Intercepción Reactiva</text>

      <rect x="25" y="50" width="165" height="135" rx="8" fill={isDark ? "#1f2937" : "#ffffff"} stroke="#6366f1" strokeWidth="1.2" />
      <text x="107" y="72" fill="#6366f1" fontSize="10" fontWeight="bold" textAnchor="middle">1. Acceso a Propiedad</text>
      <text x="35" y="95" fill={textColor} fontSize="8">proxy.count = 42;</text>
      <text x="35" y="110" fill={textColor} fontSize="8">console.log(proxy.name);</text>
      <text x="35" y="130" fill={subtextColor} fontSize="7.5">El consumidor interactúa</text>
      <text x="35" y="142" fill={subtextColor} fontSize="7.5">como con un objeto normal</text>

      <path d="M195 117 L225 117" stroke="#6366f1" strokeWidth="2" />
      <polygon points="228,117 221,113 221,121" fill="#6366f1" />

      <rect x="230" y="50" width="180" height="135" rx="8" fill={isDark ? "#1e1b4b" : "#ede9fe"} stroke="#8b5cf6" strokeWidth="1.2" />
      <text x="320" y="72" fill="#8b5cf6" fontSize="10" fontWeight="bold" textAnchor="middle">2. Proxy Handler (Traps)</text>
      <text x="240" y="95" fill="#8b5cf6" fontSize="7.5" fontFamily="monospace">get(target, prop, receiver)</text>
      <text x="240" y="108" fill="#8b5cf6" fontSize="7.5" fontFamily="monospace">set(target, prop, val)</text>
      <text x="240" y="126" fill={textColor} fontSize="8">• Dispara lógica de reactividad</text>
      <text x="240" y="140" fill={textColor} fontSize="8">• Validación de esquemas</text>
      <text x="240" y="154" fill="#10b981" fontSize="8" fontWeight="bold">Llama a Reflect.set(...)</text>

      <path d="M415 117 L445 117" stroke="#10b981" strokeWidth="2" />
      <polygon points="448,117 441,113 441,121" fill="#10b981" />

      <rect x="450" y="50" width="165" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.2" />
      <text x="532" y="72" fill="#10b981" fontSize="10" fontWeight="bold" textAnchor="middle">3. Target Object</text>
      <text x="460" y="95" fill={textColor} fontSize="8">• Objeto real mutado</text>
      <text x="460" y="110" fill={textColor} fontSize="8">• Dispara re-render UI</text>
      <text x="460" y="130" fill="#059669" fontSize="8" fontWeight="bold">⚡ Base de Vue 3 Reactivity</text>
      <text x="460" y="145" fill={subtextColor} fontSize="7.5">y Zustand / MobX</text>
    </svg>
  );
  },

  "js-observer-pubsub": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill="#3b82f6" fontSize="12" fontWeight="bold" textAnchor="middle">Patrón Observer / EventEmitter: Desacoplamiento 1 a N</text>

      <rect x="25" y="60" width="180" height="110" rx="8" fill={isDark ? "#1e1b4b" : "#ede9fe"} stroke="#6366f1" strokeWidth="1.2" />
      <text x="115" y="85" fill="#6366f1" fontSize="10" fontWeight="bold" textAnchor="middle">Subject / Publisher</text>
      <text x="35" y="108" fill={textColor} fontSize="8">• Mantiene lista de observers</text>
      <text x="35" y="123" fill="#6366f1" fontSize="8" fontFamily="monospace">notify(data)</text>
      <text x="35" y="140" fill={subtextColor} fontSize="7.5">No conoce a los receptores</text>

      <path d="M210 95 L270 75" stroke="#10b981" strokeWidth="1.5" />
      <polygon points="274,74 266,72 268,80" fill="#10b981" />

      <path d="M210 115 L270 115" stroke="#10b981" strokeWidth="1.5" />
      <polygon points="274,115 267,111 267,119" fill="#10b981" />

      <path d="M210 135 L270 155" stroke="#10b981" strokeWidth="1.5" />
      <polygon points="274,156 268,150 266,158" fill="#10b981" />

      <rect x="280" y="48" width="160" height="42" rx="4" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1" />
      <text x="290" y="65" fill="#10b981" fontSize="8" fontWeight="bold">Observer 1: UI Widget</text>
      <text x="290" y="78" fill={subtextColor} fontSize="7">Actualiza vista en pantalla</text>

      <rect x="280" y="95" width="160" height="42" rx="4" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1" />
      <text x="290" y="112" fill="#10b981" fontSize="8" fontWeight="bold">Observer 2: Analytics</text>
      <text x="290" y="125" fill={subtextColor} fontSize="7">Registra evento en servidor</text>

      <rect x="280" y="142" width="160" height="42" rx="4" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1" />
      <text x="290" y="159" fill="#10b981" fontSize="8" fontWeight="bold">Observer 3: LocalStorage</text>
      <text x="290" y="172" fill={subtextColor} fontSize="7">Persiste estado en disco</text>

      <rect x="460" y="48" width="155" height="135" rx="8" fill={isDark ? "#142d3d" : "#e0f2fe"} stroke="#0284c7" strokeWidth="1.2" />
      <text x="537" y="70" fill="#0284c7" fontSize="9.5" fontWeight="bold" textAnchor="middle">Ventajas</text>
      <text x="470" y="93" fill={textColor} fontSize="8">• Desacoplamiento total</text>
      <text x="470" y="109" fill={textColor} fontSize="8">• Escalable a N observers</text>
      <text x="470" y="125" fill={textColor} fontSize="8">• RxJS, CustomEvent</text>
      <text x="470" y="145" fill="#0284c7" fontSize="8" fontWeight="bold">Reactividad asíncrona</text>
    </svg>
  );
  },

  "js-structured-clone-algorithm": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill="#10b981" fontSize="12" fontWeight="bold" textAnchor="middle">structuredClone() vs JSON.parse(JSON.stringify())</text>

      <rect x="30" y="48" width="270" height="140" rx="8" fill={isDark ? "#450a0a" : "#fef2f2"} stroke="#ef4444" strokeWidth="1.2" />
      <text x="165" y="70" fill="#ef4444" fontSize="10.5" fontWeight="bold" textAnchor="middle">JSON.parse(JSON.stringify()) (Hack Antiguo)</text>
      <text x="45" y="94" fill={textColor} fontSize="8">• Lanza error ante referencias circulares</text>
      <text x="45" y="110" fill={textColor} fontSize="8">• Convierte objetos Date en strings planos</text>
      <text x="45" y="126" fill={textColor} fontSize="8">• Convierte Map y Set a objetos vacíos &#123;&#125;</text>
      <text x="45" y="142" fill={textColor} fontSize="8">• Descarta undefined, Symbol y BigInt</text>
      <text x="45" y="160" fill="#ef4444" fontSize="8" fontWeight="bold">⛔ Lento y con pérdida de datos</text>

      <rect x="340" y="48" width="270" height="140" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.2" />
      <text x="475" y="70" fill="#10b981" fontSize="10.5" fontWeight="bold" textAnchor="middle">structuredClone() (Estándar Nativo)</text>
      <text x="355" y="94" fill={textColor} fontSize="8">• Soporta referencias circulares sin error</text>
      <text x="355" y="110" fill={textColor} fontSize="8">• Preserva objetos Date, RegExp, Error</text>
      <text x="355" y="126" fill={textColor} fontSize="8">• Clona correctamente Map, Set, ArrayBuffer</text>
      <text x="355" y="142" fill={textColor} fontSize="8">• Soporta transferencia de objetos pesados</text>
      <text x="355" y="160" fill="#10b981" fontSize="8" fontWeight="bold">✅ Algoritmo C++ nativo de alta velocidad</text>
    </svg>
  );
  },

  "js-temporal-api-architecture": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill="#6366f1" fontSize="12" fontWeight="bold" textAnchor="middle">Temporal API (TC39): El Reemplazo Definitivo de Date</text>

      <rect x="25" y="48" width="180" height="135" rx="8" fill={isDark ? "#450a0a" : "#fef2f2"} stroke="#ef4444" strokeWidth="1.2" />
      <text x="115" y="70" fill="#ef4444" fontSize="10" fontWeight="bold" textAnchor="middle">Date Legacy (Defectuoso)</text>
      <text x="35" y="93" fill={textColor} fontSize="8">• Meses indexados en 0 (0 = enero)</text>
      <text x="35" y="109" fill={textColor} fontSize="8">• Objeto mutable (setHours muta instancia)</text>
      <text x="35" y="125" fill={textColor} fontSize="8">• Pésimo soporte de zonas horarias</text>
      <text x="35" y="141" fill={textColor} fontSize="8">• Parsing no estándar entre navegadores</text>
      <text x="35" y="158" fill="#ef4444" fontSize="8" fontWeight="bold">Causa obligada de usar Moment/date-fns</text>

      <rect x="225" y="48" width="390" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.2" />
      <text x="420" y="70" fill="#10b981" fontSize="10.5" fontWeight="bold" textAnchor="middle">Temporal API (Inmutable y Tipado)</text>
      <text x="240" y="93" fill="#10b981" fontSize="8" fontFamily="monospace">Temporal.Now.zonedDateTimeISO()</text>
      <text x="240" y="108" fill="#10b981" fontSize="8" fontFamily="monospace">Temporal.PlainDate.from(&apos;2026-09-15&apos;)</text>
      <text x="240" y="123" fill="#10b981" fontSize="8" fontFamily="monospace">Temporal.Duration.from(&#123; hours: 2 &#125;)</text>
      <text x="240" y="143" fill={textColor} fontSize="8">• 100% Inmutable (todas las operaciones devuelven nueva instancia)</text>
      <text x="240" y="158" fill="#059669" fontSize="8" fontWeight="bold">✅ Soporte nativo exacto de IANA Timezones y cálculos de fechas</text>
    </svg>
  );
  }
};
