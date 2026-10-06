import { DiagramRegistry } from "../diagram.types";

/** Diagramas SVG del módulo Flutter. */
export const flutterDiagrams: DiagramRegistry = {
  "flutter-framework-architecture": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#0f172a" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Layer 1: Framework (Dart) */}
      <rect x="30" y="25" width="580" height="50" rx="8" fill={isDark ? "#0284c7" : "#e0f2fe"} stroke="#0284c7" strokeWidth="1.5" />
      <text x="50" y="45" fill="#0284c7" fontWeight="bold" fontSize="11">Framework (Dart)</text>
      <text x="50" y="62" fill={textColor} fontSize="8">Material / Cupertino (UI) • Widgets • Rendering • Animation • Gestures • Painting</text>
      
      {/* Layer 2: Engine (C/C++) */}
      <rect x="30" y="85" width="580" height="50" rx="8" fill={isDark ? "#4338ca" : "#e0e7ff"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="50" y="105" fill="#818cf8" fontWeight="bold" fontSize="11">Flutter Engine (C/C++)</text>
      <text x="50" y="122" fill={textColor} fontSize="8">Impeller / Skia (Render GPU) • Dart Runtime / JIT / AOT • Platform Channels • Text Layout</text>
      
      {/* Layer 3: Embedder (Platform Specific) */}
      <rect x="30" y="145" width="580" height="50" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#64748b" strokeWidth="1.5" />
      <text x="50" y="165" fill="#94a3b8" fontWeight="bold" fontSize="11">Embedder (Nativo por SO)</text>
      <text x="50" y="182" fill={textColor} fontSize="8">iOS (Objective-C/Swift) • Android (Java/Kotlin) • Windows (C++) • macOS / Linux • Web (Wasm/Canvas)</text>
    </svg>
  );
  },

  "flutter-stateless-vs-stateful-lifecycle": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* StatelessWidget */}
      <rect x="30" y="30" width="270" height="160" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#38bdf8" strokeWidth="1.5" />
      <text x="165" y="55" fill="#38bdf8" fontWeight="bold" fontSize="11" textAnchor="middle">StatelessWidget (Inmutable)</text>
      <rect x="50" y="70" width="230" height="35" rx="4" fill={isDark ? "#0f172a" : "#fff"} />
      <text x="165" y="92" fill={textColor} fontSize="9" textAnchor="middle">build(BuildContext context)</text>
      <text x="165" y="125" fill={textColor} fontSize="8" textAnchor="middle">• Configuración 100% estática</text>
      <text x="165" y="142" fill={textColor} fontSize="8" textAnchor="middle">• Sin estado mutable interno</text>
      <text x="165" y="159" fill={textColor} fontSize="8" textAnchor="middle">• Ultraligero y destruible en cada frame</text>
      <text x="165" y="178" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle">Reconstrucción solo si el padre cambia</text>

      {/* StatefulWidget */}
      <rect x="340" y="30" width="270" height="160" rx="8" fill={isDark ? "#431407" : "#fff7ed"} stroke="#f97316" strokeWidth="1.5" />
      <text x="475" y="55" fill="#f97316" fontWeight="bold" fontSize="11" textAnchor="middle">StatefulWidget + State&lt;T&gt;</text>
      <rect x="360" y="70" width="230" height="35" rx="4" fill={isDark ? "#1c1917" : "#fff"} />
      <text x="475" y="92" fill="#f97316" fontSize="9" textAnchor="middle">setState(() &#123; data = val; &#125;)</text>
      <text x="475" y="125" fill={textColor} fontSize="8" textAnchor="middle">• Objeto State persiste entre builds</text>
      <text x="475" y="142" fill={textColor} fontSize="8" textAnchor="middle">• Marca elemento como &apos;dirty&apos;</text>
      <text x="475" y="159" fill={textColor} fontSize="8" textAnchor="middle">• Dispara re-ejecución de build()</text>
      <text x="475" y="178" fill="#f97316" fontSize="8" fontWeight="bold" textAnchor="middle">Maneja ciclos de vida y streams</text>
    </svg>
  );
  },

  "flutter-const-vs-final-memory": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* final */}
      <rect x="30" y="30" width="270" height="160" rx="8" fill={isDark ? "#1e1e38" : "#eef2ff"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="165" y="55" fill="#818cf8" fontWeight="bold" fontSize="11" textAnchor="middle">final (Runtime Constant)</text>
      <rect x="50" y="70" width="230" height="35" rx="4" fill={isDark ? "#18182b" : "#fff"} />
      <text x="165" y="92" fill="#818cf8" fontSize="8" fontFamily="monospace" textAnchor="middle">final now = DateTime.now();</text>
      <text x="165" y="125" fill={textColor} fontSize="8" textAnchor="middle">• Se evalúa en tiempo de ejecución</text>
      <text x="165" y="142" fill={textColor} fontSize="8" textAnchor="middle">• Se asigna una sola vez (Inmutable)</text>
      <text x="165" y="159" fill={textColor} fontSize="8" textAnchor="middle">• Crea una NUEVA instancia en memoria</text>
      <text x="165" y="178" fill="#818cf8" fontSize="8" fontWeight="bold" textAnchor="middle">Memoria dinámica Heap individual</text>

      {/* const */}
      <rect x="340" y="30" width="270" height="160" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="475" y="55" fill="#10b981" fontWeight="bold" fontSize="11" textAnchor="middle">const (Compile-Time Canonical)</text>
      <rect x="360" y="70" width="230" height="35" rx="4" fill={isDark ? "#065f46" : "#fff"} />
      <text x="475" y="92" fill="#10b981" fontSize="8" fontFamily="monospace" textAnchor="middle">const Text(&apos;Hola&apos;);</text>
      <text x="475" y="125" fill={textColor} fontSize="8" textAnchor="middle">• Evaluado en tiempo de compilación</text>
      <text x="475" y="142" fill={textColor} fontSize="8" textAnchor="middle">• Canonicalización: 1 solo objeto compartido</text>
      <text x="475" y="159" fill={textColor} fontSize="8" textAnchor="middle">• Cero Garbage Collection en rebuilds</text>
      <text x="475" y="178" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">⚡ Widget reciclado sin re-renderizado</text>
    </svg>
  );
  },

  "flutter-build-context-tree": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Tree Nodes */}
      <rect x="235" y="25" width="170" height="36" rx="6" fill={isDark ? "#1e293b" : "#e0e7ff"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="320" y="47" fill="#818cf8" fontWeight="bold" fontSize="10" textAnchor="middle">Theme / MaterialApp</text>
      
      <path d="M320 61 L320 80" stroke="#6366f1" strokeWidth="1.5" />
      
      <rect x="235" y="80" width="170" height="36" rx="6" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#38bdf8" strokeWidth="1.5" />
      <text x="320" y="102" fill="#38bdf8" fontWeight="bold" fontSize="10" textAnchor="middle">Scaffold (Element Node)</text>
      
      <path d="M320 116 L320 135" stroke="#38bdf8" strokeWidth="1.5" />
      
      <rect x="180" y="135" width="280" height="42" rx="6" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="320" y="153" fill="#10b981" fontWeight="bold" fontSize="9" textAnchor="middle">BuildContext = Handle al Element en el árbol</text>
      <text x="320" y="167" fill={textColor} fontSize="8" textAnchor="middle">Theme.of(context) busca hacia arriba en el Element Tree</text>
      
      <path d="M420 145 C490 145, 490 43, 410 43" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />
      <text x="505" y="95" fill="#10b981" fontSize="8" textAnchor="middle">Búsqueda ascendente</text>
      <text x="505" y="107" fill="#10b981" fontSize="8" textAnchor="middle">de InheritedElement</text>
    </svg>
  );
  },

  "flutter-hot-reload-vs-restart-vm": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Hot Reload */}
      <rect x="30" y="25" width="270" height="170" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="165" y="50" fill="#10b981" fontWeight="bold" fontSize="11" textAnchor="middle">⚡ Hot Reload (&lt; 1s)</text>
      <rect x="45" y="65" width="240" height="32" rx="4" fill={isDark ? "#065f46" : "#fff"} />
      <text x="165" y="85" fill="#10b981" fontSize="8" fontFamily="monospace" textAnchor="middle">Inyecta nuevo código en Dart VM</text>
      <text x="165" y="115" fill={textColor} fontSize="8" textAnchor="middle">• Mantiene el estado en memoria intacto</text>
      <text x="165" y="132" fill={textColor} fontSize="8" textAnchor="middle">• Reconstruye el Widget Tree modificado</text>
      <text x="165" y="149" fill={textColor} fontSize="8" textAnchor="middle">• No re-ejecuta initState() ni main()</text>
      <text x="165" y="178" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">Ideal para diseñar UI y ajustar layouts</text>

      {/* Hot Restart */}
      <rect x="340" y="25" width="270" height="170" rx="8" fill={isDark ? "#431407" : "#fff7ed"} stroke="#ea580c" strokeWidth="1.5" />
      <text x="475" y="50" fill="#ea580c" fontWeight="bold" fontSize="11" textAnchor="middle">🔄 Hot Restart (2s - 5s)</text>
      <rect x="355" y="65" width="240" height="32" rx="4" fill={isDark ? "#1c1917" : "#fff"} />
      <text x="475" y="85" fill="#ea580c" fontSize="8" fontFamily="monospace" textAnchor="middle">Reinicia Dart VM desde main()</text>
      <text x="475" y="115" fill={textColor} fontSize="8" textAnchor="middle">• Destruye todo el estado en memoria</text>
      <text x="475" y="132" fill={textColor} fontSize="8" textAnchor="middle">• Re-ejecuta initState() en todos los widgets</text>
      <text x="475" y="149" fill={textColor} fontSize="8" textAnchor="middle">• Obligatorio si cambian variables globales</text>
      <text x="475" y="178" fill="#ea580c" fontSize="8" fontWeight="bold" textAnchor="middle">Requerido al alterar plugins o main()</text>
    </svg>
  );
  },

  "flutter-stateful-widget-lifecycle-flow": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Steps */}
      <rect x="25" y="35" width="85" height="42" rx="6" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#38bdf8" strokeWidth="1" />
      <text x="67" y="55" fill="#38bdf8" fontWeight="bold" fontSize="8" textAnchor="middle">createState</text>
      <text x="67" y="68" fill={textColor} fontSize="7" textAnchor="middle">Crea State</text>

      <path d="M110 56 L125 56" stroke="#38bdf8" strokeWidth="1.5" />

      <rect x="125" y="35" width="85" height="42" rx="6" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#38bdf8" strokeWidth="1" />
      <text x="167" y="55" fill="#38bdf8" fontWeight="bold" fontSize="8" textAnchor="middle">initState</text>
      <text x="167" y="68" fill={textColor} fontSize="7" textAnchor="middle">Una sola vez</text>

      <path d="M210 56 L225 56" stroke="#38bdf8" strokeWidth="1.5" />

      <rect x="225" y="35" width="95" height="42" rx="6" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#38bdf8" strokeWidth="1" />
      <text x="272" y="53" fill="#38bdf8" fontWeight="bold" fontSize="8" textAnchor="middle">didChange-</text>
      <text x="272" y="66" fill="#38bdf8" fontWeight="bold" fontSize="8" textAnchor="middle">Dependencies</text>

      <path d="M320 56 L340 56" stroke="#38bdf8" strokeWidth="1.5" />

      {/* Build Loop */}
      <rect x="340" y="30" width="115" height="52" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="2" />
      <text x="397" y="52" fill="#10b981" fontWeight="bold" fontSize="10" textAnchor="middle">build()</text>
      <text x="397" y="68" fill={textColor} fontSize="7" textAnchor="middle">Retorna árbol Widget</text>

      {/* Rebuild loop with setState */}
      <path d="M430 82 C430 115, 365 115, 365 82" stroke="#f59e0b" strokeWidth="1.5" fill="none" />
      <text x="397" y="112" fill="#f59e0b" fontSize="7" fontWeight="bold" textAnchor="middle">setState() / dirty</text>

      <path d="M455 56 L475 56" stroke="#64748b" strokeWidth="1.5" />

      <rect x="475" y="35" width="70" height="42" rx="6" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#94a3b8" strokeWidth="1" />
      <text x="510" y="55" fill="#94a3b8" fontWeight="bold" fontSize="8" textAnchor="middle">deactivate</text>
      <text x="510" y="68" fill={textColor} fontSize="7" textAnchor="middle">Removido</text>

      <path d="M545 56 L560 56" stroke="#ef4444" strokeWidth="1.5" />

      <rect x="560" y="35" width="60" height="42" rx="6" fill={isDark ? "#450a0a" : "#fef2f2"} stroke="#ef4444" strokeWidth="1.5" />
      <text x="590" y="55" fill="#ef4444" fontWeight="bold" fontSize="8" textAnchor="middle">dispose</text>
      <text x="590" y="68" fill={textColor} fontSize="7" textAnchor="middle">Limpieza</text>

      <text x="320" y="150" fill={textColor} fontSize="8" textAnchor="middle">dispose(): Liberación obligatoria de TextEditingControllers, AnimationControllers y StreamSubscriptions</text>
      <text x="320" y="172" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">didUpdateWidget() se dispara si el widget padre reconstruye y pasa nuevos parámetros al widget hijo</text>
    </svg>
  );
  },

  "flutter-future-vs-stream-async": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Future */}
      <rect x="30" y="30" width="270" height="160" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#38bdf8" strokeWidth="1.5" />
      <text x="165" y="55" fill="#38bdf8" fontWeight="bold" fontSize="11" textAnchor="middle">Future&lt;T&gt; (1 Solo Evento)</text>
      
      <circle cx="70" cy="95" r="14" fill="#38bdf8" />
      <text x="70" y="99" fill="#fff" fontSize="8" textAnchor="middle">Start</text>
      <path d="M84 95 L220 95" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3 3" />
      <circle cx="235" cy="95" r="14" fill="#10b981" />
      <text x="235" y="99" fill="#fff" fontSize="8" textAnchor="middle">Value</text>
      
      <text x="165" y="132" fill={textColor} fontSize="8" textAnchor="middle">• Una promesa de 1 valor futuro o 1 error</text>
      <text x="165" y="149" fill={textColor} fontSize="8" textAnchor="middle">• Consumible con async / await o .then()</text>
      <text x="165" y="175" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle">Widget: FutureBuilder&lt;T&gt;</text>

      {/* Stream */}
      <rect x="340" y="30" width="270" height="160" rx="8" fill={isDark ? "#311042" : "#fdf4ff"} stroke="#c084fc" strokeWidth="1.5" />
      <text x="475" y="55" fill="#c084fc" fontWeight="bold" fontSize="11" textAnchor="middle">Stream&lt;T&gt; (Flujo Continuo en Tiempo)</text>
      
      <circle cx="375" cy="95" r="10" fill="#c084fc" />
      <path d="M385 95 L425 95" stroke="#c084fc" strokeWidth="1.5" />
      <circle cx="435" cy="95" r="10" fill="#c084fc" />
      <path d="M445 95 L485 95" stroke="#c084fc" strokeWidth="1.5" />
      <circle cx="495" cy="95" r="10" fill="#c084fc" />
      <path d="M505 95 L555 95" stroke="#c084fc" strokeWidth="1.5" />
      <rect x="555" y="87" width="16" height="16" rx="2" fill="#10b981" />
      
      <text x="475" y="132" fill={textColor} fontSize="8" textAnchor="middle">• Secuencia asíncrona de múltiples eventos</text>
      <text x="475" y="149" fill={textColor} fontSize="8" textAnchor="middle">• Soporta yield*, transform, listen()</text>
      <text x="475" y="175" fill="#c084fc" fontSize="8" fontWeight="bold" textAnchor="middle">Widget: StreamBuilder&lt;T&gt;</text>
    </svg>
  );
  },

  "flutter-keys-widget-element-match": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Without Key */}
      <rect x="30" y="30" width="270" height="160" rx="8" fill={isDark ? "#450a0a" : "#fef2f2"} stroke="#ef4444" strokeWidth="1.5" />
      <text x="165" y="55" fill="#ef4444" fontWeight="bold" fontSize="10" textAnchor="middle">❌ Sin Key (Confusión de Estado)</text>
      <rect x="45" y="70" width="110" height="30" rx="4" fill={isDark ? "#1e293b" : "#fff"} />
      <text x="100" y="89" fill={textColor} fontSize="8" textAnchor="middle">Widget A (Pos 1)</text>
      <rect x="175" y="70" width="110" height="30" rx="4" fill={isDark ? "#1e293b" : "#fff"} />
      <text x="230" y="89" fill={textColor} fontSize="8" textAnchor="middle">Widget B (Pos 2)</text>
      
      <text x="165" y="125" fill={textColor} fontSize="8" textAnchor="middle">Al reordenar la lista, el Element Tree</text>
      <text x="165" y="139" fill={textColor} fontSize="8" textAnchor="middle">sólo compara runtimeType idéntico y</text>
      <text x="165" y="153" fill={textColor} fontSize="8" textAnchor="middle">asigna el State del ítem 1 al ítem 2 (BUG)</text>
      <text x="165" y="178" fill="#ef4444" fontSize="8" fontWeight="bold" textAnchor="middle">Pérdida o mezcla de estado de inputs</text>

      {/* With Key */}
      <rect x="340" y="30" width="270" height="160" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="475" y="55" fill="#10b981" fontWeight="bold" fontSize="10" textAnchor="middle">✅ Con ValueKey(&apos;id&apos;) (Match Exacto)</text>
      <rect x="355" y="70" width="115" height="30" rx="4" fill={isDark ? "#065f46" : "#fff"} />
      <text x="412" y="89" fill="#10b981" fontSize="8" textAnchor="middle">Key(&apos;A&apos;) ➔ Element A</text>
      <rect x="480" y="70" width="115" height="30" rx="4" fill={isDark ? "#065f46" : "#fff"} />
      <text x="537" y="89" fill="#10b981" fontSize="8" textAnchor="middle">Key(&apos;B&apos;) ➔ Element B</text>

      <text x="475" y="125" fill={textColor} fontSize="8" textAnchor="middle">El Element Tree usa Widget.canUpdate():</text>
      <text x="475" y="139" fill={textColor} fontSize="8" textAnchor="middle">(oldWidget.key == newWidget.key &amp;&amp;</text>
      <text x="475" y="153" fill={textColor} fontSize="8" textAnchor="middle">oldWidget.runtimeType == newWidget.runtimeType)</text>
      <text x="475" y="178" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">Estado perfectamente retenido en scroll</text>
    </svg>
  );
  },

  "flutter-inherited-widget-propagation": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Top Node */}
      <rect x="230" y="25" width="180" height="40" rx="8" fill={isDark ? "#0284c7" : "#e0f2fe"} stroke="#0284c7" strokeWidth="1.5" />
      <text x="320" y="45" fill="#0284c7" fontWeight="bold" fontSize="10" textAnchor="middle">InheritedWidget (Root Data)</text>
      <text x="320" y="58" fill={textColor} fontSize="7" textAnchor="middle">updateShouldNotify(oldWidget)</text>

      {/* Intermediate nodes */}
      <path d="M280 65 L210 100" stroke="#64748b" strokeWidth="1" />
      <path d="M360 65 L430 100" stroke="#64748b" strokeWidth="1" />

      <rect x="140" y="100" width="140" height="30" rx="6" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke={border} strokeWidth="1" />
      <text x="210" y="119" fill={textColor} fontSize="8" textAnchor="middle">Contenedor Intermedio (Ignora)</text>

      <rect x="360" y="100" width="140" height="30" rx="6" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke={border} strokeWidth="1" />
      <text x="430" y="119" fill={textColor} fontSize="8" textAnchor="middle">Contenedor Intermedio (Ignora)</text>

      {/* Deep child subscribing */}
      <path d="M430 130 L430 155" stroke="#10b981" strokeWidth="1.5" />
      <rect x="340" y="155" width="180" height="42" rx="6" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="430" y="173" fill="#10b981" fontWeight="bold" fontSize="9" textAnchor="middle">Consumidor O(1) Directo</text>
      <text x="430" y="187" fill={textColor} fontSize="7" textAnchor="middle">context.dependOnInheritedWidgetOfExactType()</text>

      {/* Direct O(1) registration line */}
      <path d="M410 45 C540 45, 540 176, 520 176" stroke="#0284c7" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />
      <text x="560" y="115" fill="#0284c7" fontSize="8" textAnchor="middle">Suscripción O(1)</text>
      <text x="560" y="128" fill="#0284c7" fontSize="8" textAnchor="middle">sin Prop Drilling</text>
    </svg>
  );
  },

  "flutter-slivers-custom-scroll-view": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* CustomScrollView Frame */}
      <rect x="40" y="25" width="560" height="170" rx="8" fill={isDark ? "#0f172a" : "#f1f5f9"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="55" y="42" fill="#818cf8" fontWeight="bold" fontSize="10">CustomScrollView(slivers: [ ... ])</text>

      {/* Sliver 1: SliverAppBar */}
      <rect x="60" y="52" width="520" height="34" rx="4" fill={isDark ? "#1e1e38" : "#e0e7ff"} stroke="#6366f1" strokeWidth="1" />
      <text x="320" y="73" fill="#818cf8" fontWeight="bold" fontSize="9" textAnchor="middle">SliverAppBar(pinned: true, expandedHeight: 200) • Header Colapsable Dinámico</text>

      {/* Sliver 2: SliverList */}
      <rect x="60" y="93" width="250" height="42" rx="4" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1" />
      <text x="185" y="112" fill="#10b981" fontWeight="bold" fontSize="9" textAnchor="middle">SliverList.builder(delegate)</text>
      <text x="185" y="126" fill={textColor} fontSize="7" textAnchor="middle">Reciclaje infinito O(1) de items</text>

      {/* Sliver 3: SliverGrid */}
      <rect x="330" y="93" width="250" height="42" rx="4" fill={isDark ? "#431407" : "#fff7ed"} stroke="#ea580c" strokeWidth="1" />
      <text x="455" y="112" fill="#ea580c" fontWeight="bold" fontSize="9" textAnchor="middle">SliverGrid(gridDelegate)</text>
      <text x="455" y="126" fill={textColor} fontSize="7" textAnchor="middle">Cuadrículas sincronizadas en el scroll</text>

      {/* Sliver 4: SliverToBoxAdapter */}
      <rect x="60" y="142" width="520" height="32" rx="4" fill={isDark ? "#1e293b" : "#fff"} stroke={border} strokeWidth="1" />
      <text x="320" y="162" fill={textColor} fontSize="8" textAnchor="middle">SliverToBoxAdapter: Integra cualquier widget de caja rígido (Container, Card) dentro del scroll continuo</text>
    </svg>
  );
  },

  "flutter-three-trees-architecture": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Tree 1: Widget Tree */}
      <rect x="30" y="30" width="175" height="155" rx="8" fill={isDark ? "#1e293b" : "#e0f2fe"} stroke="#38bdf8" strokeWidth="1.5" />
      <text x="117" y="52" fill="#38bdf8" fontWeight="bold" fontSize="10" textAnchor="middle">1. Widget Tree</text>
      <text x="117" y="68" fill={textColor} fontSize="8" textAnchor="middle">Configuración Inmutable</text>
      <rect x="45" y="80" width="145" height="24" rx="4" fill={isDark ? "#0f172a" : "#fff"} />
      <text x="117" y="96" fill="#38bdf8" fontSize="8" textAnchor="middle">Container() / Text()</text>
      <text x="117" y="125" fill={textColor} fontSize="8" textAnchor="middle">• Declarativo y barato</text>
      <text x="117" y="142" fill={textColor} fontSize="8" textAnchor="middle">• Destruido en cada frame</text>
      <text x="117" y="165" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle">Plano Arquitectónico</text>

      <path d="M205 107 L235 107" stroke="#6366f1" strokeWidth="2" />

      {/* Tree 2: Element Tree */}
      <rect x="235" y="30" width="175" height="155" rx="8" fill={isDark ? "#1e1e38" : "#e0e7ff"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="322" y="52" fill="#818cf8" fontWeight="bold" fontSize="10" textAnchor="middle">2. Element Tree</text>
      <text x="322" y="68" fill={textColor} fontSize="8" textAnchor="middle">Estructura Viva Persistente</text>
      <rect x="250" y="80" width="145" height="24" rx="4" fill={isDark ? "#18182b" : "#fff"} />
      <text x="322" y="96" fill="#818cf8" fontSize="8" textAnchor="middle">ComponentElement / State</text>
      <text x="322" y="125" fill={textColor} fontSize="8" textAnchor="middle">• Orquesta ciclo de vida</text>
      <text x="322" y="142" fill={textColor} fontSize="8" textAnchor="middle">• Retiene State en memoria</text>
      <text x="322" y="165" fill="#818cf8" fontSize="8" fontWeight="bold" textAnchor="middle">Gerente de Obra</text>

      <path d="M410 107 L440 107" stroke="#10b981" strokeWidth="2" />

      {/* Tree 3: Render Tree */}
      <rect x="440" y="30" width="170" height="155" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="525" y="52" fill="#10b981" fontWeight="bold" fontSize="10" textAnchor="middle">3. Render Tree</text>
      <text x="525" y="68" fill={textColor} fontSize="8" textAnchor="middle">Pintado en Pantalla</text>
      <rect x="455" y="80" width="140" height="24" rx="4" fill={isDark ? "#065f46" : "#fff"} />
      <text x="525" y="96" fill="#10b981" fontSize="8" textAnchor="middle">RenderParagraph / RenderBox</text>
      <text x="525" y="125" fill={textColor} fontSize="8" textAnchor="middle">• performLayout()</text>
      <text x="525" y="142" fill={textColor} fontSize="8" textAnchor="middle">• paint(PaintingContext)</text>
      <text x="525" y="165" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">Píxeles en GPU</text>
    </svg>
  );
  },

  "flutter-impeller-vs-skia-pipeline": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Skia */}
      <rect x="30" y="30" width="270" height="160" rx="8" fill={isDark ? "#450a0a" : "#fef2f2"} stroke="#ef4444" strokeWidth="1.5" />
      <text x="165" y="55" fill="#ef4444" fontWeight="bold" fontSize="11" textAnchor="middle">Skia (Legacy Engine)</text>
      <rect x="45" y="70" width="240" height="30" rx="4" fill={isDark ? "#1e293b" : "#fff"} />
      <text x="165" y="89" fill="#ef4444" fontSize="8" fontFamily="monospace" textAnchor="middle">JIT Shader Compilation en Runtime</text>
      <text x="165" y="125" fill={textColor} fontSize="8" textAnchor="middle">• Al aparecer una animación nueva,</text>
      <text x="165" y="140" fill={textColor} fontSize="8" textAnchor="middle">compila el shader en el hilo de render</text>
      <text x="165" y="155" fill={textColor} fontSize="8" textAnchor="middle">• Causa caídas de frames (&apos;Shader Jank&apos;)</text>
      <text x="165" y="178" fill="#ef4444" fontSize="8" fontWeight="bold" textAnchor="middle">Micro-tirones al abrir pantallas</text>

      {/* Impeller */}
      <rect x="340" y="30" width="270" height="160" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="475" y="55" fill="#10b981" fontWeight="bold" fontSize="11" textAnchor="middle">⚡ Impeller (Motor Moderno Next-Gen)</text>
      <rect x="355" y="70" width="240" height="30" rx="4" fill={isDark ? "#065f46" : "#fff"} />
      <text x="475" y="89" fill="#10b981" fontSize="8" fontFamily="monospace" textAnchor="middle">AOT Precompiled Shaders en Build Time</text>
      <text x="475" y="125" fill={textColor} fontSize="8" textAnchor="middle">• Shaders precompilados antes de ejecutar</text>
      <text x="475" y="140" fill={textColor} fontSize="8" textAnchor="middle">• Metal directo en iOS / Vulkan en Android</text>
      <text x="475" y="155" fill={textColor} fontSize="8" textAnchor="middle">• Cero stutter en primera interacción</text>
      <text x="475" y="178" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">60 FPS y 120 FPS fluidos garantizados</text>
    </svg>
  );
  },

  "flutter-bloc-event-state-stream": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* UI Component */}
      <rect x="30" y="65" width="150" height="90" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#38bdf8" strokeWidth="1.5" />
      <text x="105" y="90" fill="#38bdf8" fontWeight="bold" fontSize="11" textAnchor="middle">UI (Widget)</text>
      <text x="105" y="108" fill={textColor} fontSize="8" textAnchor="middle">BlocBuilder&lt;B, S&gt;</text>
      <text x="105" y="135" fill="#38bdf8" fontSize="8" textAnchor="middle">Dispara context.read()</text>

      {/* Event Flow */}
      <path d="M180 85 L260 85" stroke="#f59e0b" strokeWidth="2" />
      <text x="220" y="77" fill="#f59e0b" fontSize="8" fontWeight="bold" textAnchor="middle">Event</text>

      {/* BLoC Engine */}
      <rect x="260" y="35" width="180" height="150" rx="8" fill={isDark ? "#1e1e38" : "#e0e7ff"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="350" y="58" fill="#818cf8" fontWeight="bold" fontSize="11" textAnchor="middle">BLoC (Business Logic)</text>
      <rect x="275" y="70" width="150" height="40" rx="4" fill={isDark ? "#18182b" : "#fff"} />
      <text x="350" y="88" fill={textColor} fontSize="8" textAnchor="middle">on&lt;SubmitEvent&gt;((ev, emit) &#123;</text>
      <text x="350" y="102" fill="#818cf8" fontSize="8" textAnchor="middle">  emit(LoadingState());</text>
      <text x="350" y="135" fill={textColor} fontSize="8" textAnchor="middle">• Flujo unidireccional estricto</text>
      <text x="350" y="152" fill={textColor} fontSize="8" textAnchor="middle">• 100% testeable sin widgets</text>
      <text x="350" y="172" fill="#818cf8" fontSize="8" fontWeight="bold" textAnchor="middle">RxDart / Streams</text>

      {/* State Flow */}
      <path d="M260 140 L180 140" stroke="#10b981" strokeWidth="2" />
      <text x="220" y="155" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">New State</text>

      {/* Data Layer */}
      <rect x="475" y="65" width="135" height="90" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="542" y="90" fill="#10b981" fontWeight="bold" fontSize="10" textAnchor="middle">Repository / API</text>
      <text x="542" y="115" fill={textColor} fontSize="8" textAnchor="middle">Llamada async</text>
      <text x="542" y="130" fill={textColor} fontSize="8" textAnchor="middle">Base de Datos / Red</text>
      <path d="M440 100 L475 100" stroke="#10b981" strokeWidth="1.5" strokeDasharray="2 2" />
    </svg>
  );
  },

  "flutter-custom-painter-canvas": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* CustomPaint Widget */}
      <rect x="30" y="30" width="170" height="160" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#38bdf8" strokeWidth="1.5" />
      <text x="115" y="55" fill="#38bdf8" fontWeight="bold" fontSize="10" textAnchor="middle">CustomPaint Widget</text>
      <text x="115" y="78" fill={textColor} fontSize="8" textAnchor="middle">painter: ChartPainter()</text>
      <text x="115" y="95" fill={textColor} fontSize="8" textAnchor="middle">size: Size(300, 200)</text>
      <text x="115" y="130" fill={textColor} fontSize="8" textAnchor="middle">• Se integra en el árbol</text>
      <text x="115" y="145" fill={textColor} fontSize="8" textAnchor="middle">• Pasa Canvas y Size</text>
      <text x="115" y="175" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle">Contenedor UI</text>

      <path d="M200 110 L235 110" stroke="#6366f1" strokeWidth="2" />

      {/* CustomPainter Class */}
      <rect x="235" y="30" width="200" height="160" rx="8" fill={isDark ? "#1e1e38" : "#e0e7ff"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="335" y="55" fill="#818cf8" fontWeight="bold" fontSize="10" textAnchor="middle">class ChartPainter : CustomPainter</text>
      <rect x="245" y="70" width="180" height="50" rx="4" fill={isDark ? "#18182b" : "#fff"} />
      <text x="335" y="88" fill={textColor} fontSize="7" fontFamily="monospace" textAnchor="middle">paint(Canvas canvas, Size size)</text>
      <text x="335" y="104" fill="#818cf8" fontSize="7" fontFamily="monospace" textAnchor="middle">canvas.drawPath(path, paint)</text>
      <text x="335" y="145" fill={textColor} fontSize="8" textAnchor="middle">bool shouldRepaint(oldDelegate)</text>
      <text x="335" y="175" fill="#818cf8" fontSize="8" fontWeight="bold" textAnchor="middle">Lógica de Trazado Vectorial</text>

      <path d="M435 110 L470 110" stroke="#10b981" strokeWidth="2" />

      {/* Raster Screen Canvas */}
      <rect x="470" y="30" width="140" height="160" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="540" y="55" fill="#10b981" fontWeight="bold" fontSize="10" textAnchor="middle">Lienzo Gráfico</text>
      <path d="M490 140 Q 520 70 550 110 T 590 80" stroke="#10b981" strokeWidth="3" fill="none" />
      <circle cx="550" cy="110" r="5" fill="#f59e0b" />
      <text x="540" y="165" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">Rasterizado Directo GPU</text>
    </svg>
  );
  },

  "flutter-isolates-vs-event-loop": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Main Isolate */}
      <rect x="30" y="25" width="260" height="170" rx="8" fill={isDark ? "#0284c7" : "#e0f2fe"} stroke="#0284c7" strokeWidth="1.5" />
      <text x="160" y="48" fill="#0284c7" fontWeight="bold" fontSize="11" textAnchor="middle">Main Isolate (UI Thread)</text>
      
      <rect x="45" y="60" width="230" height="35" rx="4" fill={isDark ? "#0369a1" : "#fff"} />
      <text x="160" y="78" fill="#fff" fontSize="8" fontWeight="bold" textAnchor="middle">Event Loop (Microtasks + Event Queue)</text>
      <text x="160" y="89" fill={isDark ? "#e0f2fe" : "#64748b"} fontSize="7" textAnchor="middle">Renderizado UI • Gestos • Animaciones</text>
      
      <rect x="45" y="105" width="230" height="40" rx="4" fill={isDark ? "#075985" : "#f0f9ff"} />
      <text x="160" y="122" fill="#fff" fontSize="8" textAnchor="middle">Espacio de Memoria Propio (Heap A)</text>
      <text x="160" y="136" fill={textColor} fontSize="7" textAnchor="middle">Sin memoria compartida</text>

      <text x="160" y="180" fill="#0284c7" fontSize="8" fontWeight="bold" textAnchor="middle">⚠️ Bloquearlo más de 16ms causa lag</text>

      {/* Communication ports */}
      <path d="M290 95 L350 95" stroke="#f59e0b" strokeWidth="2" />
      <text x="320" y="88" fill="#f59e0b" fontSize="7" fontWeight="bold" textAnchor="middle">SendPort</text>
      <path d="M350 125 L290 125" stroke="#10b981" strokeWidth="2" />
      <text x="320" y="140" fill="#10b981" fontSize="7" fontWeight="bold" textAnchor="middle">ReceivePort</text>

      {/* Worker Isolate */}
      <rect x="350" y="25" width="260" height="170" rx="8" fill={isDark ? "#4338ca" : "#e0e7ff"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="480" y="48" fill="#818cf8" fontWeight="bold" fontSize="11" textAnchor="middle">Background Isolate (Worker / compute)</text>
      
      <rect x="365" y="60" width="230" height="35" rx="4" fill={isDark ? "#3730a3" : "#fff"} />
      <text x="480" y="78" fill="#fff" fontSize="8" fontWeight="bold" textAnchor="middle">Cálculos Pesados en Paralelo</text>
      <text x="480" y="89" fill={isDark ? "#e0e7ff" : "#64748b"} fontSize="7" textAnchor="middle">Parseo JSON masivo • Criptografía • Imágenes</text>
      
      <rect x="365" y="105" width="230" height="40" rx="4" fill={isDark ? "#312e81" : "#f5f3ff"} />
      <text x="480" y="122" fill="#fff" fontSize="8" textAnchor="middle">Espacio de Memoria Separado (Heap B)</text>
      <text x="480" y="136" fill={textColor} fontSize="7" textAnchor="middle">Cero riesgo de condiciones de carrera (Race)</text>

      <text x="480" y="180" fill="#818cf8" fontSize="8" fontWeight="bold" textAnchor="middle">⚡ 100% CPU en paralelo sin trabar la UI</text>
    </svg>
  );
  },

  "flutter-platform-channels-ffi": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Dart Side */}
      <rect x="30" y="30" width="160" height="160" rx="8" fill={isDark ? "#0284c7" : "#e0f2fe"} stroke="#0284c7" strokeWidth="1.5" />
      <text x="110" y="55" fill="#0284c7" fontWeight="bold" fontSize="11" textAnchor="middle">Dart (Flutter)</text>
      <rect x="45" y="70" width="130" height="30" rx="4" fill={isDark ? "#0369a1" : "#fff"} />
      <text x="110" y="89" fill="#fff" fontSize="8" textAnchor="middle">MethodChannel</text>
      <rect x="45" y="115" width="130" height="30" rx="4" fill={isDark ? "#0369a1" : "#fff"} />
      <text x="110" y="134" fill="#fff" fontSize="8" textAnchor="middle">Dart FFI (Punteros)</text>

      {/* Bridge 1: MethodChannel */}
      <path d="M190 85 L310 85" stroke="#f59e0b" strokeWidth="2" />
      <rect x="205" y="68" width="90" height="18" rx="3" fill="#f59e0b" />
      <text x="250" y="80" fill="#fff" fontSize="7" fontWeight="bold" textAnchor="middle">BinaryCodec (Async)</text>

      {/* Bridge 2: FFI */}
      <path d="M190 130 L450 130" stroke="#10b981" strokeWidth="2" strokeDasharray="3 3" />
      <rect x="235" y="135" width="170" height="18" rx="3" fill="#10b981" />
      <text x="320" y="147" fill="#fff" fontSize="7" fontWeight="bold" textAnchor="middle">Dart FFI (Cero Copia en Memoria)</text>

      {/* Native OS Side */}
      <rect x="310" y="30" width="140" height="80" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#64748b" strokeWidth="1.5" />
      <text x="380" y="50" fill="#94a3b8" fontWeight="bold" fontSize="9" textAnchor="middle">Host Nativo</text>
      <text x="380" y="68" fill={textColor} fontSize="7" textAnchor="middle">iOS: Swift / Obj-C</text>
      <text x="380" y="82" fill={textColor} fontSize="7" textAnchor="middle">Android: Kotlin / Java</text>
      <text x="380" y="98" fill="#f59e0b" fontSize="7" fontWeight="bold" textAnchor="middle">APIs del Sistema</text>

      {/* C/C++/Rust Library */}
      <rect x="450" y="70" width="160" height="120" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="530" y="95" fill="#10b981" fontWeight="bold" fontSize="10" textAnchor="middle">Librerías C / C++ / Rust</text>
      <text x="530" y="118" fill={textColor} fontSize="7" textAnchor="middle">• SQLite nativo</text>
      <text x="530" y="132" fill={textColor} fontSize="7" textAnchor="middle">• TensorFlow Lite / OpenCV</text>
      <text x="530" y="146" fill={textColor} fontSize="7" textAnchor="middle">• Motores de audio/video</text>
      <text x="530" y="172" fill="#10b981" fontSize="7" fontWeight="bold" textAnchor="middle">⚡ Rendimiento de Hardware Puro</text>
    </svg>
  );
  },

  "flutter-render-object-pipeline": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Step 1: Constraints Down */}
      <rect x="30" y="30" width="165" height="160" rx="8" fill={isDark ? "#1e293b" : "#e0f2fe"} stroke="#0284c7" strokeWidth="1.5" />
      <text x="112" y="55" fill="#0284c7" fontWeight="bold" fontSize="10" textAnchor="middle">1. Constraints Down</text>
      <rect x="45" y="70" width="135" height="35" rx="4" fill={isDark ? "#0f172a" : "#fff"} />
      <text x="112" y="92" fill="#0284c7" fontSize="8" textAnchor="middle">BoxConstraints(min, max)</text>
      <text x="112" y="125" fill={textColor} fontSize="8" textAnchor="middle">El padre indica al hijo</text>
      <text x="112" y="140" fill={textColor} fontSize="8" textAnchor="middle">las restricciones espaciales</text>
      <text x="112" y="175" fill="#0284c7" fontSize="8" fontWeight="bold" textAnchor="middle">Flujo Descendente ⬇️</text>

      <path d="M195 110 L235 110" stroke="#6366f1" strokeWidth="2" />

      {/* Step 2: Size Up */}
      <rect x="235" y="30" width="165" height="160" rx="8" fill={isDark ? "#1e1e38" : "#e0e7ff"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="317" y="55" fill="#818cf8" fontWeight="bold" fontSize="10" textAnchor="middle">2. Sizes Up</text>
      <rect x="250" y="70" width="135" height="35" rx="4" fill={isDark ? "#18182b" : "#fff"} />
      <text x="317" y="92" fill="#818cf8" fontSize="8" textAnchor="middle">performLayout() ➔ size</text>
      <text x="317" y="125" fill={textColor} fontSize="8" textAnchor="middle">El hijo decide su tamaño</text>
      <text x="317" y="140" fill={textColor} fontSize="8" textAnchor="middle">respetando constraints</text>
      <text x="317" y="175" fill="#818cf8" fontSize="8" fontWeight="bold" textAnchor="middle">Flujo Ascendente ⬆️</text>

      <path d="M400 110 L440 110" stroke="#10b981" strokeWidth="2" />

      {/* Step 3: Parent Sets Position */}
      <rect x="440" y="30" width="170" height="160" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="525" y="55" fill="#10b981" fontWeight="bold" fontSize="10" textAnchor="middle">3. Parent Sets Position</text>
      <rect x="455" y="70" width="140" height="35" rx="4" fill={isDark ? "#065f46" : "#fff"} />
      <text x="525" y="92" fill="#10b981" fontSize="8" textAnchor="middle">paint(context, offset)</text>
      <text x="525" y="125" fill={textColor} fontSize="8" textAnchor="middle">El padre posiciona al hijo</text>
      <text x="525" y="140" fill={textColor} fontSize="8" textAnchor="middle">en sus coordenadas Offset</text>
      <text x="525" y="175" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">Compositor Layer Paint</text>
    </svg>
  );
  },

  "flutter-clean-architecture-ddd": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Domain Layer */}
      <rect x="30" y="30" width="180" height="160" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="2" />
      <text x="120" y="55" fill="#10b981" fontWeight="bold" fontSize="11" textAnchor="middle">1. Domain Layer (Núcleo)</text>
      <rect x="45" y="70" width="150" height="28" rx="4" fill={isDark ? "#065f46" : "#fff"} />
      <text x="120" y="88" fill="#fff" fontSize="8" textAnchor="middle">Entities &amp; Value Objects</text>
      <rect x="45" y="105" width="150" height="28" rx="4" fill={isDark ? "#065f46" : "#fff"} />
      <text x="120" y="123" fill="#fff" fontSize="8" textAnchor="middle">Use Cases (Interactors)</text>
      <text x="120" y="152" fill={textColor} fontSize="8" textAnchor="middle">• Contratos de Repositorio</text>
      <text x="120" y="175" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">🛡️ 0 Dependencias de Flutter</text>

      <path d="M210 110 L235 110" stroke="#6366f1" strokeWidth="2" />

      {/* Data Layer */}
      <rect x="235" y="30" width="180" height="160" rx="8" fill={isDark ? "#1e1e38" : "#e0e7ff"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="325" y="55" fill="#818cf8" fontWeight="bold" fontSize="11" textAnchor="middle">2. Data Layer</text>
      <rect x="250" y="70" width="150" height="28" rx="4" fill={isDark ? "#18182b" : "#fff"} />
      <text x="325" y="88" fill={textColor} fontSize="8" textAnchor="middle">Models (DTOs + fromJson)</text>
      <rect x="250" y="105" width="150" height="28" rx="4" fill={isDark ? "#18182b" : "#fff"} />
      <text x="325" y="123" fill={textColor} fontSize="8" textAnchor="middle">DataSources (API / SQLite)</text>
      <text x="325" y="152" fill={textColor} fontSize="8" textAnchor="middle">• Implementación Repositorio</text>
      <text x="325" y="175" fill="#818cf8" fontSize="8" fontWeight="bold" textAnchor="middle">Infraestructura y Red</text>

      <path d="M415 110 L440 110" stroke="#38bdf8" strokeWidth="2" />

      {/* Presentation Layer */}
      <rect x="440" y="30" width="170" height="160" rx="8" fill={isDark ? "#1e293b" : "#e0f2fe"} stroke="#38bdf8" strokeWidth="1.5" />
      <text x="525" y="55" fill="#38bdf8" fontWeight="bold" fontSize="11" textAnchor="middle">3. Presentation Layer</text>
      <rect x="455" y="70" width="140" height="28" rx="4" fill={isDark ? "#0f172a" : "#fff"} />
      <text x="525" y="88" fill={textColor} fontSize="8" textAnchor="middle">State (BLoC / Riverpod)</text>
      <rect x="455" y="105" width="140" height="28" rx="4" fill={isDark ? "#0f172a" : "#fff"} />
      <text x="525" y="123" fill={textColor} fontSize="8" textAnchor="middle">Widgets &amp; Pages</text>
      <text x="525" y="152" fill={textColor} fontSize="8" textAnchor="middle">• Mapeo de State a UI</text>
      <text x="525" y="175" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle">Experiencia de Usuario</text>
    </svg>
  );
  },

  "flutter-performance-profiling-devtools": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Timeline Frame Budget */}
      <rect x="30" y="25" width="580" height="90" rx="8" fill={isDark ? "#0f172a" : "#fff"} stroke="#6366f1" strokeWidth="1" />
      <text x="50" y="45" fill="#818cf8" fontWeight="bold" fontSize="10">Flutter DevTools: Timeline Frame Budget (16.6ms para 60 FPS / 8.3ms para 120 FPS)</text>
      
      {/* UI Thread Bar */}
      <rect x="50" y="58" width="220" height="18" rx="3" fill="#38bdf8" />
      <text x="160" y="71" fill="#fff" fontSize="8" fontWeight="bold" textAnchor="middle">UI Thread (Dart Code &amp; Layout): 4.2ms</text>
      
      {/* Raster Thread Bar */}
      <rect x="275" y="58" width="180" height="18" rx="3" fill="#10b981" />
      <text x="365" y="71" fill="#fff" fontSize="8" fontWeight="bold" textAnchor="middle">Raster Thread (GPU Paint): 5.1ms</text>
      
      {/* Safe Budget line */}
      <line x1="500" y1="52" x2="500" y2="82" stroke="#ef4444" strokeWidth="2" strokeDasharray="2 2" />
      <text x="500" y="98" fill="#ef4444" fontSize="7" textAnchor="middle">16.6ms límite</text>

      {/* Profiling Guidelines */}
      <rect x="30" y="125" width="180" height="65" rx="6" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke={border} strokeWidth="1" />
      <text x="120" y="145" fill="#38bdf8" fontWeight="bold" fontSize="9" textAnchor="middle">1. Const Rebuilds</text>
      <text x="120" y="162" fill={textColor} fontSize="7" textAnchor="middle">Widgets const previenen</text>
      <text x="120" y="174" fill={textColor} fontSize="7" textAnchor="middle">re-ejecuciones de build()</text>

      <rect x="230" y="125" width="180" height="65" rx="6" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke={border} strokeWidth="1" />
      <text x="320" y="145" fill="#f59e0b" fontWeight="bold" fontSize="9" textAnchor="middle">2. Evitar saveLayer()</text>
      <text x="320" y="162" fill={textColor} fontSize="7" textAnchor="middle">Opacity / ClipRRect sin cache</text>
      <text x="320" y="174" fill={textColor} fontSize="7" textAnchor="middle">crean offscreen buffers caros</text>

      <rect x="430" y="125" width="180" height="65" rx="6" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke={border} strokeWidth="1" />
      <text x="520" y="145" fill="#10b981" fontWeight="bold" fontSize="9" textAnchor="middle">3. Memory Allocation</text>
      <text x="520" y="162" fill={textColor} fontSize="7" textAnchor="middle">Detección de memory leaks</text>
      <text x="520" y="174" fill={textColor} fontSize="7" textAnchor="middle">en controllers sin dispose()</text>
    </svg>
  );
  },

  "flutter-aot-tree-shaking-compiler": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Input Sources */}
      <rect x="30" y="30" width="155" height="160" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#38bdf8" strokeWidth="1.5" />
      <text x="107" y="55" fill="#38bdf8" fontWeight="bold" fontSize="10" textAnchor="middle">Código Fuente &amp; Assets</text>
      <rect x="45" y="70" width="125" height="26" rx="4" fill={isDark ? "#0f172a" : "#fff"} />
      <text x="107" y="87" fill={textColor} fontSize="8" textAnchor="middle">Dart Source (.dart)</text>
      <rect x="45" y="103" width="125" height="26" rx="4" fill={isDark ? "#0f172a" : "#fff"} />
      <text x="107" y="120" fill={textColor} fontSize="8" textAnchor="middle">Paquetes pub.dev</text>
      <rect x="45" y="136" width="125" height="26" rx="4" fill={isDark ? "#0f172a" : "#fff"} />
      <text x="107" y="153" fill={textColor} fontSize="8" textAnchor="middle">Icon Fonts (Material)</text>

      <path d="M185 110 L220 110" stroke="#6366f1" strokeWidth="2" />

      {/* AOT Compiler Pipeline */}
      <rect x="220" y="30" width="200" height="160" rx="8" fill={isDark ? "#1e1e38" : "#e0e7ff"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="320" y="55" fill="#818cf8" fontWeight="bold" fontSize="11" textAnchor="middle">Dart AOT Compiler</text>
      <rect x="235" y="70" width="170" height="30" rx="4" fill={isDark ? "#18182b" : "#fff"} />
      <text x="320" y="89" fill="#818cf8" fontSize="8" fontWeight="bold" textAnchor="middle">Dead Code Elimination</text>
      <rect x="235" y="108" width="170" height="30" rx="4" fill={isDark ? "#18182b" : "#fff"} />
      <text x="320" y="127" fill="#818cf8" fontSize="8" fontWeight="bold" textAnchor="middle">Font Tree Shaking</text>
      <text x="320" y="160" fill={textColor} fontSize="8" textAnchor="middle">Elimina el 99% de iconos no usados</text>
      <text x="320" y="176" fill="#818cf8" fontSize="8" fontWeight="bold" textAnchor="middle">Análisis Estático de Llamadas</text>

      <path d="M420 110 L455 110" stroke="#10b981" strokeWidth="2" />

      {/* Optimized Output */}
      <rect x="455" y="30" width="155" height="160" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="532" y="55" fill="#10b981" fontWeight="bold" fontSize="10" textAnchor="middle">Binario Compilado</text>
      <rect x="470" y="75" width="125" height="30" rx="4" fill={isDark ? "#065f46" : "#fff"} />
      <text x="532" y="94" fill="#fff" fontSize="8" fontWeight="bold" textAnchor="middle">libapp.so (ARM64)</text>
      <text x="532" y="130" fill={textColor} fontSize="8" textAnchor="middle">• Código máquina directo</text>
      <text x="532" y="145" fill={textColor} fontSize="8" textAnchor="middle">• Tamaño binario reducido</text>
      <text x="532" y="172" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">⚡ Arranque Instantáneo</text>
    </svg>
  );
  }
};
