import { DiagramRegistry } from "../diagram.types";

/** Diagramas SVG del módulo Expresiones Regulares. */
export const regularExpressionsDiagrams: DiagramRegistry = {
  "regex-engine-nfa-dfa": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Input String */}
      <rect x="35" y="45" width="150" height="135" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="45" y="70" fill="#60a5fa" fontWeight="700" fontSize="11">Cadena de Entrada</text>
      <rect x="45" y="80" width="130" height="30" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="55" y="100" fill={textColor} fontSize="10" fontFamily="monospace">&quot;admin_123&quot;</text>
      <text x="45" y="130" fill={subtextColor} fontSize="8">Secuencia de caracteres</text>
      <text x="45" y="145" fill={subtextColor} fontSize="8">a ser evaluada</text>

      <path d="M195 110 L235 110" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrow)" />

      {/* RegEx Engine / Automaton */}
      <rect x="240" y="35" width="180" height="150" rx="8" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#818cf8" strokeWidth="1.5" />
      <text x="250" y="58" fill="#818cf8" fontWeight="700" fontSize="11">Motor RegEx (NFA)</text>
      <rect x="250" y="68" width="160" height="26" rx="4" fill={isDark ? "#1e1b4b" : "#ffffff"} />
      <text x="256" y="85" fill="#a5b4fc" fontSize="9" fontFamily="monospace">/^[a-z]+_\d+$/</text>
      
      {/* State circles */}
      <circle cx="270" cy="120" r="12" fill={isDark ? "#1e1b4b" : "#ddd6fe"} stroke="#818cf8" strokeWidth="1" />
      <text x="270" y="124" fill={textColor} fontSize="8" textAnchor="middle">S0</text>
      <path d="M282 120 L308 120" stroke="#818cf8" strokeWidth="1.5" />
      <circle cx="320" cy="120" r="12" fill={isDark ? "#1e1b4b" : "#ddd6fe"} stroke="#818cf8" strokeWidth="1" />
      <text x="320" y="124" fill={textColor} fontSize="8" textAnchor="middle">S1</text>
      <path d="M332 120 L358 120" stroke="#818cf8" strokeWidth="1.5" />
      <circle cx="370" cy="120" r="12" fill={isDark ? "#064e3b" : "#d1fae5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="370" y="124" fill="#10b981" fontSize="8" textAnchor="middle">S2</text>

      <text x="250" y="160" fill={subtextColor} fontSize="8">Transiciones de estados</text>
      <text x="250" y="172" fill="#818cf8" fontSize="8">con backtracking interno</text>

      <path d="M430 110 L465 110" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow)" />

      {/* Match Output */}
      <rect x="470" y="45" width="140" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="480" y="70" fill="#34d399" fontWeight="700" fontSize="11">Resultado Match</text>
      <rect x="480" y="80" width="120" height="40" rx="4" fill={isDark ? "#022c22" : "#ffffff"} />
      <text x="488" y="96" fill="#10b981" fontSize="9" fontFamily="monospace">Match: true</text>
      <text x="488" y="112" fill={subtextColor} fontSize="8" fontFamily="monospace">index: 0, len: 9</text>
      <text x="480" y="145" fill="#34d399" fontSize="8" fontWeight="bold">Coincidencia exacta</text>
    </svg>
  );
  },

  "regex-literal-vs-constructor": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Literal */}
      <rect x="35" y="35" width="270" height="155" rx="10" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="50" y="60" fill="#34d399" fontWeight="700" fontSize="12">1. Notación Literal (/.../)</text>
      <rect x="50" y="72" width="240" height="32" rx="4" fill={isDark ? "#022c22" : "#ffffff"} />
      <text x="58" y="92" fill="#34d399" fontSize="10" fontFamily="monospace">const regex = /^\d+$/i;</text>
      <text x="50" y="122" fill={textColor} fontSize="9">✅ <tspan fontWeight="bold">Compilación anticipada:</tspan> en tiempo de parseo JS.</text>
      <text x="50" y="140" fill={textColor} fontSize="9">✅ Rendimiento superior: instancia evaluada una sola vez.</text>
      <text x="50" y="158" fill={textColor} fontSize="9">✅ No requiere escapar dobles barras invertidas (\).</text>
      <text x="50" y="176" fill={subtextColor} fontSize="8" fontStyle="italic">Ideal para: Patrones fijos y constantes del sistema</text>

      {/* Constructor */}
      <rect x="335" y="35" width="270" height="155" rx="10" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="350" y="60" fill="#60a5fa" fontWeight="700" fontSize="12">2. Constructor (new RegExp)</text>
      <rect x="350" y="72" width="240" height="32" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="358" y="92" fill="#60a5fa" fontSize="9" fontFamily="monospace">new RegExp(&quot;^&quot; + dynamic + &quot;$&quot;, &quot;i&quot;)</text>
      <text x="350" y="122" fill={textColor} fontSize="9">✅ <tspan fontWeight="bold">Patrones dinámicos:</tspan> concatena variables en runtime.</text>
      <text x="350" y="140" fill="#f59e0b" fontSize="9">⚠️ Compilación en tiempo de ejecución (mayor CPU).</text>
      <text x="350" y="158" fill="#f87171" fontSize="9">⚠️ Exige doble escape: &quot;\\d+&quot; para representar \d.</text>
      <text x="350" y="176" fill={subtextColor} fontSize="8" fontStyle="italic">Ideal para: Filtros con input de usuario en tiempo real</text>
    </svg>
  );
  },

  "regex-anchors-boundary": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Anchors Header */}
      <rect x="190" y="22" width="260" height="26" rx="13" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#818cf8" strokeWidth="1" />
      <text x="320" y="39" fill="#818cf8" fontSize="10" fontWeight="bold" textAnchor="middle">Aserciones de Posición (Longitud Cero)</text>

      {/* ^ Anchor */}
      <rect x="35" y="60" width="170" height="135" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="45" y="83" fill="#60a5fa" fontWeight="700" fontSize="12">^ (Inicio de Línea)</text>
      <rect x="45" y="93" width="150" height="28" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="52" y="111" fill="#93c5fd" fontSize="9" fontFamily="monospace">/^Error/</text>
      <text x="45" y="137" fill={textColor} fontSize="8">Coincide únicamente si</text>
      <text x="45" y="150" fill={textColor} fontSize="8">empieza en el índice 0.</text>
      <text x="45" y="175" fill="#10b981" fontSize="8">&quot;Error: 404&quot; ✅</text>
      <text x="45" y="188" fill="#ef4444" fontSize="8">&quot;Fatal Error&quot; ❌</text>

      {/* \b Boundary */}
      <rect x="235" y="60" width="170" height="135" rx="8" fill={isDark ? "#2e1065" : "#faf5ff"} stroke="#a855f7" strokeWidth="1.5" />
      <text x="245" y="83" fill="#c084fc" fontWeight="700" fontSize="12">\b (Límite de Palabra)</text>
      <rect x="245" y="93" width="150" height="28" rx="4" fill={isDark ? "#1e1b4b" : "#ffffff"} />
      <text x="252" y="111" fill="#c084fc" fontSize="9" fontFamily="monospace">/\bcat\b/</text>
      <text x="245" y="137" fill={textColor} fontSize="8">Frontera entre carácter \w</text>
      <text x="245" y="150" fill={textColor} fontSize="8">y no palabra (\W o inicio/fin).</text>
      <text x="245" y="175" fill="#10b981" fontSize="8">&quot;the cat sits&quot; ✅</text>
      <text x="245" y="188" fill="#ef4444" fontSize="8">&quot;scattered&quot; ❌</text>

      {/* $ Anchor */}
      <rect x="435" y="60" width="170" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="445" y="83" fill="#34d399" fontWeight="700" fontSize="12">$ (Fin de Línea)</text>
      <rect x="445" y="93" width="150" height="28" rx="4" fill={isDark ? "#022c22" : "#ffffff"} />
      <text x="452" y="111" fill="#34d399" fontSize="9" fontFamily="monospace">/\.png$/</text>
      <text x="445" y="137" fill={textColor} fontSize="8">Coincide al final absoluto</text>
      <text x="445" y="150" fill={textColor} fontSize="8">de la cadena o línea.</text>
      <text x="445" y="175" fill="#10b981" fontSize="8">&quot;logo.png&quot; ✅</text>
      <text x="445" y="188" fill="#ef4444" fontSize="8">&quot;logo.png.bak&quot; ❌</text>
    </svg>
  );
  },

  "regex-quantifiers-cardinality": ({ isDark, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Box * */}
      <rect x="35" y="35" width="130" height="155" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="45" y="60" fill="#60a5fa" fontWeight="700" fontSize="14">* (Cero o más)</text>
      <rect x="45" y="70" width="110" height="28" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="55" y="88" fill="#93c5fd" fontSize="10" fontFamily="monospace">/go*l/</text>
      <text x="45" y="116" fill={subtextColor} fontSize="8">Rango: &#123;0, ∞&#125;</text>
      <text x="45" y="135" fill="#10b981" fontSize="8">&quot;gl&quot; (0 veces) ✅</text>
      <text x="45" y="150" fill="#10b981" fontSize="8">&quot;gol&quot; (1 vez) ✅</text>
      <text x="45" y="165" fill="#10b981" fontSize="8">&quot;goool&quot; (3) ✅</text>

      {/* Box + */}
      <rect x="180" y="35" width="130" height="155" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="190" y="60" fill="#34d399" fontWeight="700" fontSize="14">+ (Uno o más)</text>
      <rect x="190" y="70" width="110" height="28" rx="4" fill={isDark ? "#022c22" : "#ffffff"} />
      <text x="200" y="88" fill="#34d399" fontSize="10" fontFamily="monospace">/go+l/</text>
      <text x="190" y="116" fill={subtextColor} fontSize="8">Rango: &#123;1, ∞&#125;</text>
      <text x="190" y="135" fill="#ef4444" fontSize="8">&quot;gl&quot; (0 veces) ❌</text>
      <text x="190" y="150" fill="#10b981" fontSize="8">&quot;gol&quot; (1 vez) ✅</text>
      <text x="190" y="165" fill="#10b981" fontSize="8">&quot;goool&quot; (3) ✅</text>

      {/* Box ? */}
      <rect x="325" y="35" width="130" height="155" rx="8" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#818cf8" strokeWidth="1.5" />
      <text x="335" y="60" fill="#818cf8" fontWeight="700" fontSize="14">? (Opcional)</text>
      <rect x="335" y="70" width="110" height="28" rx="4" fill={isDark ? "#1e1b4b" : "#ffffff"} />
      <text x="345" y="88" fill="#a5b4fc" fontSize="10" fontFamily="monospace">/colou?r/</text>
      <text x="335" y="116" fill={subtextColor} fontSize="8">Rango: &#123;0, 1&#125;</text>
      <text x="335" y="135" fill="#10b981" fontSize="8">&quot;color&quot; (0) ✅</text>
      <text x="335" y="150" fill="#10b981" fontSize="8">&quot;colour&quot; (1) ✅</text>
      <text x="335" y="165" fill="#ef4444" fontSize="8">&quot;colouur&quot; (2) ❌</text>

      {/* Box {n,m} */}
      <rect x="470" y="35" width="135" height="155" rx="8" fill={isDark ? "#713f12" : "#fef9c3"} stroke="#eab308" strokeWidth="1.5" />
      <text x="480" y="60" fill="#facc15" fontWeight="700" fontSize="14">&#123;n, m&#125; (Rango)</text>
      <rect x="480" y="70" width="115" height="28" rx="4" fill={isDark ? "#422006" : "#ffffff"} />
      <text x="488" y="88" fill="#facc15" fontSize="10" fontFamily="monospace">/\d&#123;2,4&#125;/</text>
      <text x="480" y="116" fill={subtextColor} fontSize="8">Entre n y m veces</text>
      <text x="480" y="135" fill="#ef4444" fontSize="8">&quot;7&quot; (1 dígito) ❌</text>
      <text x="480" y="150" fill="#10b981" fontSize="8">&quot;42&quot; (2 dígitos) ✅</text>
      <text x="480" y="165" fill="#10b981" fontSize="8">&quot;2026&quot; (4 dígitos) ✅</text>
    </svg>
  );
  },

  "regex-character-classes-shorthand": ({ isDark, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* \d vs \D */}
      <rect x="35" y="35" width="170" height="155" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="45" y="60" fill="#60a5fa" fontWeight="700" fontSize="12">Dígitos: \d vs \D</text>
      <rect x="45" y="72" width="150" height="40" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="55" y="90" fill="#38bdf8" fontSize="9" fontFamily="monospace">\d = [0-9]</text>
      <text x="55" y="104" fill={subtextColor} fontSize="8">Cualquier dígito decimal</text>

      <rect x="45" y="122" width="150" height="40" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="55" y="140" fill="#f87171" fontSize="9" fontFamily="monospace">\D = [^0-9]</text>
      <text x="55" y="154" fill={subtextColor} fontSize="8">Cualquier no-dígito</text>
      <text x="45" y="178" fill="#60a5fa" fontSize="8">&quot;4&quot; ➔ \d | &quot;A&quot; ➔ \D</text>

      {/* \w vs \W */}
      <rect x="235" y="35" width="170" height="155" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="245" y="60" fill="#34d399" fontWeight="700" fontSize="12">Palabra: \w vs \W</text>
      <rect x="245" y="72" width="150" height="40" rx="4" fill={isDark ? "#022c22" : "#ffffff"} />
      <text x="255" y="90" fill="#34d399" fontSize="9" fontFamily="monospace">\w = [a-zA-Z0-9_]</text>
      <text x="255" y="104" fill={subtextColor} fontSize="8">Alfanumérico + guion bajo</text>

      <rect x="245" y="122" width="150" height="40" rx="4" fill={isDark ? "#022c22" : "#ffffff"} />
      <text x="255" y="140" fill="#f87171" fontSize="9" fontFamily="monospace">\W = [^a-zA-Z0-9_]</text>
      <text x="255" y="154" fill={subtextColor} fontSize="8">Símbolos, espacios, guiones</text>
      <text x="245" y="178" fill="#10b981" fontSize="8">&quot;_x&quot; ➔ \w | &quot;@&quot; ➔ \W</text>

      {/* \s vs \S */}
      <rect x="435" y="35" width="170" height="155" rx="8" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#818cf8" strokeWidth="1.5" />
      <text x="445" y="60" fill="#818cf8" fontWeight="700" fontSize="12">Espacios: \s vs \S</text>
      <rect x="445" y="72" width="150" height="40" rx="4" fill={isDark ? "#1e1b4b" : "#ffffff"} />
      <text x="455" y="90" fill="#a5b4fc" fontSize="9" fontFamily="monospace">\s = [ \t\n\r\f\v]</text>
      <text x="455" y="104" fill={subtextColor} fontSize="8">Espacio, tabulador, salto</text>

      <rect x="445" y="122" width="150" height="40" rx="4" fill={isDark ? "#1e1b4b" : "#ffffff"} />
      <text x="455" y="140" fill="#f87171" fontSize="9" fontFamily="monospace">\S = [^ \t\n\r\f\v]</text>
      <text x="455" y="154" fill={subtextColor} fontSize="8">Cualquier no-espacio</text>
      <text x="445" y="178" fill="#818cf8" fontSize="8">&quot; &quot; ➔ \s | &quot;K&quot; ➔ \S</text>
    </svg>
  );
  },

  "regex-flags-matrix": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Flag g */}
      <rect x="35" y="30" width="170" height="75" rx="6" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1" />
      <text x="45" y="52" fill="#60a5fa" fontWeight="bold" fontSize="12" fontFamily="monospace">g (Global)</text>
      <text x="45" y="70" fill={textColor} fontSize="9">Encuentra todas las coincidencias.</text>
      <text x="45" y="85" fill={subtextColor} fontSize="8">Sin él se detiene en la 1ª ocurrencia.</text>

      {/* Flag i */}
      <rect x="235" y="30" width="170" height="75" rx="6" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1" />
      <text x="245" y="52" fill="#34d399" fontWeight="bold" fontSize="12" fontFamily="monospace">i (Ignore Case)</text>
      <text x="245" y="70" fill={textColor} fontSize="9">Insensible a mayúsculas/minúsculas.</text>
      <text x="245" y="85" fill={subtextColor} fontSize="8">/abc/i coincide con &quot;ABC&quot; y &quot;AbC&quot;.</text>

      {/* Flag m */}
      <rect x="435" y="30" width="170" height="75" rx="6" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#818cf8" strokeWidth="1" />
      <text x="445" y="52" fill="#818cf8" fontWeight="bold" fontSize="12" fontFamily="monospace">m (Multiline)</text>
      <text x="445" y="70" fill={textColor} fontSize="9">^ y $ aplican al inicio y fin</text>
      <text x="445" y="85" fill={subtextColor} fontSize="8">de cada línea individual (\n).</text>

      {/* Flag s */}
      <rect x="35" y="120" width="170" height="75" rx="6" fill={isDark ? "#713f12" : "#fef9c3"} stroke="#eab308" strokeWidth="1" />
      <text x="45" y="142" fill="#facc15" fontWeight="bold" fontSize="12" fontFamily="monospace">s (dotAll)</text>
      <text x="45" y="160" fill={textColor} fontSize="9">Permite que el punto (.)</text>
      <text x="45" y="175" fill={subtextColor} fontSize="8">coincida también con saltos de línea \n.</text>

      {/* Flag u */}
      <rect x="235" y="120" width="170" height="75" rx="6" fill={isDark ? "#2e1065" : "#faf5ff"} stroke="#a855f7" strokeWidth="1" />
      <text x="245" y="142" fill="#c084fc" fontWeight="bold" fontSize="12" fontFamily="monospace">u (Unicode)</text>
      <text x="245" y="160" fill={textColor} fontSize="9">Soporta pares sustitutos UTF-16</text>
      <text x="245" y="175" fill={subtextColor} fontSize="8">y propiedades \p&#123;Letter&#125;.</text>

      {/* Flag y */}
      <rect x="435" y="120" width="170" height="75" rx="6" fill={isDark ? "#450a0a" : "#fee2e2"} stroke="#ef4444" strokeWidth="1" />
      <text x="445" y="142" fill="#f87171" fontWeight="bold" fontSize="12" fontFamily="monospace">y (Sticky)</text>
      <text x="445" y="160" fill={textColor} fontSize="9">Busca coincidencia estricta</text>
      <text x="445" y="175" fill={subtextColor} fontSize="8">únicamente en la posición lastIndex.</text>
    </svg>
  );
  },

  "regex-capturing-vs-non-capturing": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Capturing Group */}
      <rect x="35" y="35" width="270" height="155" rx="10" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="50" y="60" fill="#60a5fa" fontWeight="700" fontSize="12">Grupo Capturante: (abc)</text>
      <rect x="50" y="72" width="240" height="32" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="58" y="92" fill="#93c5fd" fontSize="9" fontFamily="monospace">/(\d&#123;4&#125;)-(\d&#123;2&#125;)/</text>
      <text x="50" y="122" fill={textColor} fontSize="9">📦 Guarda la coincidencia en memoria de captura.</text>
      <text x="50" y="138" fill={textColor} fontSize="9">Referenciable como <tspan fill="#3b82f6" fontFamily="monospace">$1, $2</tspan> en String.replace().</text>
      <text x="50" y="154" fill="#f59e0b" fontSize="8">⚠️ Incurre en coste de asignación de arrays.</text>
      <text x="50" y="172" fill={subtextColor} fontSize="8">Array: [&quot;2026-09&quot;, &quot;2026&quot;, &quot;09&quot;]</text>

      {/* Non-Capturing Group */}
      <rect x="335" y="35" width="270" height="155" rx="10" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="350" y="60" fill="#34d399" fontWeight="700" fontSize="12">No Capturante: (?:abc)</text>
      <rect x="350" y="72" width="240" height="32" rx="4" fill={isDark ? "#022c22" : "#ffffff"} />
      <text x="358" y="92" fill="#34d399" fontSize="9" fontFamily="monospace">/(?:https?|ftp):\/\//</text>
      <text x="350" y="122" fill={textColor} fontSize="9">⚡ Agrupa lógicamente para aplicar cuantificadores | o +.</text>
      <text x="350" y="138" fill="#34d399" fontSize="9">❌ NO reserva slots de memoria en el array de retorno.</text>
      <text x="350" y="154" fill="#10b981" fontSize="8">✅ Optimización crítica en parsing masivo de texto.</text>
      <text x="350" y="172" fill={subtextColor} fontSize="8">Array: [&quot;https://&quot;] (Sin sub-grupos)</text>
    </svg>
  );
  },

  "regex-greedy-vs-lazy": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Input Target */}
      <rect x="35" y="25" width="570" height="40" rx="6" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke={border} strokeWidth="1" />
      <text x="50" y="49" fill={subtextColor} fontSize="9">Texto evaluado:</text>
      <text x="140" y="49" fill={textColor} fontSize="10" fontFamily="monospace">&lt;div&gt;&lt;span&gt;Contenido&lt;/span&gt;&lt;/div&gt;</text>

      {/* Greedy lane */}
      <rect x="35" y="75" width="270" height="115" rx="8" fill={isDark ? "#450a0a" : "#fee2e2"} stroke="#ef4444" strokeWidth="1.5" />
      <text x="45" y="98" fill="#f87171" fontWeight="700" fontSize="12">Codicioso / Greedy (&lt;.*&gt;)</text>
      <text x="45" y="118" fill={textColor} fontSize="9">Consume la mayor cantidad posible de texto:</text>
      <rect x="45" y="128" width="250" height="30" rx="4" fill={isDark ? "#1f2937" : "#ffffff"} />
      <text x="55" y="147" fill="#f87171" fontSize="8" fontFamily="monospace">&lt;div&gt;&lt;span&gt;Contenido&lt;/span&gt;&lt;/div&gt;</text>
      <text x="45" y="175" fill="#ef4444" fontSize="8">Se expande hasta el ÚLTIMO &apos;&gt;&apos; encontrado</text>

      {/* Lazy lane */}
      <rect x="335" y="75" width="270" height="115" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="345" y="98" fill="#34d399" fontWeight="700" fontSize="12">Perezoso / Lazy (&lt;.*?&gt;)</text>
      <text x="345" y="118" fill={textColor} fontSize="9">Añadir &apos;?&apos; detiene en la primera coincidencia:</text>
      <rect x="345" y="128" width="250" height="30" rx="4" fill={isDark ? "#022c22" : "#ffffff"} />
      <text x="355" y="147" fill="#34d399" fontSize="9" fontFamily="monospace">&lt;div&gt;</text>
      <text x="345" y="175" fill="#10b981" fontSize="8">Se detiene inmediatamente en el PRIMER &apos;&gt;&apos;</text>
    </svg>
  );
  },

  "regex-matching-methods-api": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* RegExp.test */}
      <rect x="35" y="35" width="170" height="155" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="45" y="58" fill="#34d399" fontWeight="700" fontSize="12">RegExp.prototype.test()</text>
      <rect x="45" y="70" width="150" height="30" rx="4" fill={isDark ? "#022c22" : "#ffffff"} />
      <text x="52" y="88" fill="#10b981" fontSize="9" fontFamily="monospace">regex.test(str)</text>
      <text x="45" y="118" fill={textColor} fontSize="9">Retorna booleano:</text>
      <text x="45" y="132" fill="#34d399" fontSize="10" fontWeight="bold">true | false</text>
      <text x="45" y="155" fill="#10b981" fontSize="8">⚡ Máxima velocidad O(1) memoria.</text>
      <text x="45" y="170" fill={subtextColor} fontSize="8">Solo valida existencia sin extraer datos.</text>

      {/* String.match */}
      <rect x="235" y="35" width="170" height="155" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="245" y="58" fill="#60a5fa" fontWeight="700" fontSize="12">String.prototype.match()</text>
      <rect x="245" y="70" width="150" height="30" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="252" y="88" fill="#60a5fa" fontSize="9" fontFamily="monospace">str.match(regex)</text>
      <text x="245" y="118" fill={textColor} fontSize="9">Retorna:</text>
      <text x="245" y="132" fill="#60a5fa" fontSize="9" fontFamily="monospace">RegExpMatchArray | null</text>
      <text x="245" y="155" fill={textColor} fontSize="8">Sin flag /g: extrae grupos del 1º.</text>
      <text x="245" y="170" fill={subtextColor} fontSize="8">Con flag /g: array simple de strings.</text>

      {/* String.matchAll */}
      <rect x="435" y="35" width="170" height="155" rx="8" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#818cf8" strokeWidth="1.5" />
      <text x="445" y="58" fill="#818cf8" fontWeight="700" fontSize="12">String.matchAll() (ES2020)</text>
      <rect x="445" y="70" width="150" height="30" rx="4" fill={isDark ? "#1e1b4b" : "#ffffff"} />
      <text x="452" y="88" fill="#a5b4fc" fontSize="9" fontFamily="monospace">str.matchAll(regex)</text>
      <text x="445" y="118" fill={textColor} fontSize="9">Retorna iterador lazy:</text>
      <text x="445" y="132" fill="#818cf8" fontSize="9" fontFamily="monospace">Iterator&lt;RegExpMatch&gt;</text>
      <text x="445" y="155" fill="#818cf8" fontSize="8">✨ Extrae todos los grupos de captura</text>
      <text x="445" y="170" fill={subtextColor} fontSize="8">de cada ocurrencia global.</text>
    </svg>
  );
  },

  "regex-email-validation-anatomy": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Title */}
      <text x="320" y="32" fill="#818cf8" fontSize="11" fontWeight="bold" textAnchor="middle">Anatomía de Validación de Correo Electrónico</text>

      {/* Pipeline Boxes */}
      <rect x="25" y="48" width="590" height="42" rx="6" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="40" y="74" fill="#60a5fa" fontSize="11" fontFamily="monospace" fontWeight="bold">/^ [a-zA-Z0-9._%+-]+ @ [a-zA-Z0-9.-]+ \. [a-zA-Z]&#123;2,&#125; $/</text>

      {/* Segment 1: User */}
      <rect x="35" y="105" width="160" height="85" rx="6" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1" />
      <text x="45" y="125" fill="#34d399" fontWeight="bold" fontSize="10">1. Parte Local / Usuario</text>
      <text x="45" y="142" fill={textColor} fontSize="8" fontFamily="monospace">[a-zA-Z0-9._%+-]+</text>
      <text x="45" y="160" fill={subtextColor} fontSize="8">Alfanumérico y caracteres</text>
      <text x="45" y="173" fill={subtextColor} fontSize="8">válidos de buzón (1 o más)</text>

      {/* Segment 2: Domain */}
      <rect x="220" y="105" width="170" height="85" rx="6" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#818cf8" strokeWidth="1" />
      <text x="230" y="125" fill="#818cf8" fontWeight="bold" fontSize="10">2. Host / Dominio</text>
      <text x="230" y="142" fill={textColor} fontSize="8" fontFamily="monospace">@[a-zA-Z0-9.-]+</text>
      <text x="230" y="160" fill={subtextColor} fontSize="8">Arroba obligatoria seguida</text>
      <text x="230" y="173" fill={subtextColor} fontSize="8">del nombre del servidor</text>

      {/* Segment 3: TLD */}
      <rect x="415" y="105" width="190" height="85" rx="6" fill={isDark ? "#713f12" : "#fef9c3"} stroke="#eab308" strokeWidth="1" />
      <text x="425" y="125" fill="#facc15" fontWeight="bold" fontSize="10">3. TLD (Top Level Domain)</text>
      <text x="425" y="142" fill={textColor} fontSize="8" fontFamily="monospace">\.[a-zA-Z]&#123;2,&#125;$</text>
      <text x="425" y="160" fill={subtextColor} fontSize="8">Punto literal y extensión</text>
      <text x="425" y="173" fill={subtextColor} fontSize="8">de mínimo 2 letras al final</text>
    </svg>
  );
  },

  "regex-lookaheads-assertion": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Input text */}
      <rect x="35" y="25" width="570" height="35" rx="6" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke={border} strokeWidth="1" />
      <text x="50" y="47" fill={textColor} fontSize="10" fontFamily="monospace">Texto: &quot;padding: 24px; margin: 12rem;&quot;</text>

      {/* Positive Lookahead */}
      <rect x="35" y="70" width="270" height="125" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="50" y="93" fill="#34d399" fontWeight="700" fontSize="12">Positive Lookahead: (?=...)</text>
      <rect x="50" y="103" width="240" height="28" rx="4" fill={isDark ? "#022c22" : "#ffffff"} />
      <text x="58" y="121" fill="#34d399" fontSize="9" fontFamily="monospace">/\d+(?=px)/</text>
      <text x="50" y="148" fill={textColor} fontSize="9">Coincide dígitos si van seguidos de &apos;px&apos;:</text>
      <text x="50" y="165" fill="#10b981" fontSize="10" fontWeight="bold">Match: &quot;24&quot; (el &apos;px&apos; NO se consume)</text>
      <text x="50" y="182" fill={subtextColor} fontSize="8">Aserción de longitud cero hacia adelante</text>

      {/* Negative Lookahead */}
      <rect x="335" y="70" width="270" height="125" rx="8" fill={isDark ? "#450a0a" : "#fee2e2"} stroke="#ef4444" strokeWidth="1.5" />
      <text x="350" y="93" fill="#f87171" fontWeight="700" fontSize="12">Negative Lookahead: (?!...)</text>
      <rect x="350" y="103" width="240" height="28" rx="4" fill={isDark ? "#1f2937" : "#ffffff"} />
      <text x="358" y="121" fill="#f87171" fontSize="9" fontFamily="monospace">/\d+(?!px)/</text>
      <text x="350" y="148" fill={textColor} fontSize="9">Coincide dígitos si NO van seguidos de &apos;px&apos;:</text>
      <text x="350" y="165" fill="#ef4444" fontSize="10" fontWeight="bold">Match: &quot;12&quot; (seguido de &apos;rem&apos;)</text>
      <text x="350" y="182" fill={subtextColor} fontSize="8">Descarta coincidencias no deseadas</text>
    </svg>
  );
  },

  "regex-lookbehinds-assertion": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Input text */}
      <rect x="35" y="25" width="570" height="35" rx="6" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke={border} strokeWidth="1" />
      <text x="50" y="47" fill={textColor} fontSize="10" fontFamily="monospace">Texto: &quot;Precios: $150 USD y €200 EUR&quot;</text>

      {/* Positive Lookbehind */}
      <rect x="35" y="70" width="270" height="125" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="50" y="93" fill="#34d399" fontWeight="700" fontSize="12">Positive Lookbehind: (?&lt;=...)</text>
      <rect x="50" y="103" width="240" height="28" rx="4" fill={isDark ? "#022c22" : "#ffffff"} />
      <text x="58" y="121" fill="#34d399" fontSize="9" fontFamily="monospace">/(?&lt;=\$)\d+/</text>
      <text x="50" y="148" fill={textColor} fontSize="9">Coincide dígitos precedidos de &apos;$&apos;:</text>
      <text x="50" y="165" fill="#10b981" fontSize="10" fontWeight="bold">Match: &quot;150&quot; (el &apos;$&apos; no forma parte del match)</text>
      <text x="50" y="182" fill={subtextColor} fontSize="8">Aserción de longitud cero hacia atrás (ES2018)</text>

      {/* Negative Lookbehind */}
      <rect x="335" y="70" width="270" height="125" rx="8" fill={isDark ? "#450a0a" : "#fee2e2"} stroke="#ef4444" strokeWidth="1.5" />
      <text x="350" y="93" fill="#f87171" fontWeight="700" fontSize="12">Negative Lookbehind: (?&lt;!...)</text>
      <rect x="350" y="103" width="240" height="28" rx="4" fill={isDark ? "#1f2937" : "#ffffff"} />
      <text x="358" y="121" fill="#f87171" fontSize="9" fontFamily="monospace">/(?&lt;!\$)\d+/</text>
      <text x="350" y="148" fill={textColor} fontSize="9">Coincide dígitos que NO estén precedidos de &apos;$&apos;:</text>
      <text x="350" y="165" fill="#ef4444" fontSize="10" fontWeight="bold">Match: &quot;200&quot; (precedido por &apos;€&apos;)</text>
      <text x="350" y="182" fill={subtextColor} fontSize="8">Filtra prefijos no autorizados</text>
    </svg>
  );
  },

  "regex-named-capturing-groups": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Pattern */}
      <rect x="35" y="25" width="570" height="42" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="50" y="51" fill="#60a5fa" fontWeight="bold" fontSize="10" fontFamily="monospace">/(?&lt;year&gt;\d&#123;4&#125;)-(?&lt;month&gt;\d&#123;2&#125;)-(?&lt;day&gt;\d&#123;2&#125;)/</text>

      {/* Match output mapping */}
      <path d="M140 68 L140 100" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow)" />
      <path d="M320 68 L320 100" stroke="#a855f7" strokeWidth="2" markerEnd="url(#arrow)" />
      <path d="M500 68 L500 100" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrow)" />

      {/* Named Groups Card */}
      <rect x="35" y="105" width="570" height="85" rx="8" fill={isDark ? "#0f172a" : "#ffffff"} stroke={border} strokeWidth="1" />
      <text x="50" y="125" fill={textColor} fontWeight="bold" fontSize="11">const &#123; groups &#125; = &quot;2026-09-15&quot;.match(regex)!;</text>
      
      <rect x="50" y="135" width="160" height="42" rx="4" fill={isDark ? "#064e3b" : "#ecfdf5"} />
      <text x="60" y="152" fill="#34d399" fontSize="9" fontFamily="monospace">groups.year</text>
      <text x="60" y="167" fill={textColor} fontSize="10" fontWeight="bold">&quot;2026&quot;</text>

      <rect x="235" y="135" width="160" height="42" rx="4" fill={isDark ? "#2e1065" : "#faf5ff"} />
      <text x="245" y="152" fill="#c084fc" fontSize="9" fontFamily="monospace">groups.month</text>
      <text x="245" y="167" fill={textColor} fontSize="10" fontWeight="bold">&quot;09&quot;</text>

      <rect x="420" y="135" width="160" height="42" rx="4" fill={isDark ? "#713f12" : "#fef9c3"} />
      <text x="430" y="152" fill="#facc15" fontSize="9" fontFamily="monospace">groups.day</text>
      <text x="430" y="167" fill={textColor} fontSize="10" fontWeight="bold">&quot;15&quot;</text>
    </svg>
  );
  },

  "regex-flag-v-unicode-sets": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Header ES2024 */}
      <rect x="200" y="20" width="240" height="25" rx="12" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#818cf8" strokeWidth="1" />
      <text x="320" y="36" fill="#818cf8" fontSize="9" fontWeight="bold" textAnchor="middle">Flag /v (Unicode Sets - ECMAScript 2024)</text>

      {/* Set Intersection */}
      <rect x="35" y="55" width="175" height="135" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="45" y="78" fill="#60a5fa" fontWeight="700" fontSize="11">1. Intersección (&amp;&amp;)</text>
      <rect x="45" y="88" width="155" height="30" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="52" y="106" fill="#93c5fd" fontSize="8" fontFamily="monospace">[[a-z] &amp;&amp; [^aeiou]]/v</text>
      <text x="45" y="135" fill={textColor} fontSize="8">Consonantes minúsculas:</text>
      <text x="45" y="150" fill="#10b981" fontSize="8">&quot;b&quot;, &quot;c&quot;, &quot;z&quot; ✅</text>
      <text x="45" y="165" fill="#ef4444" fontSize="8">&quot;a&quot;, &quot;e&quot;, &quot;i&quot; ❌</text>

      {/* Set Subtraction */}
      <rect x="230" y="55" width="180" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="240" y="78" fill="#34d399" fontWeight="700" fontSize="11">2. Sustracción (--) </text>
      <rect x="240" y="88" width="160" height="30" rx="4" fill={isDark ? "#022c22" : "#ffffff"} />
      <text x="246" y="106" fill="#34d399" fontSize="8" fontFamily="monospace">[\p&#123;Decimal&#125;--[0-9]]/v</text>
      <text x="240" y="135" fill={textColor} fontSize="8">Dígitos decimales no arábigos</text>
      <text x="240" y="150" fill={subtextColor} fontSize="8">(dígitos devanagari, etc.):</text>
      <text x="240" y="165" fill="#10b981" fontSize="8">&quot;१&quot; ✅ | &quot;5&quot; ❌</text>

      {/* Graphemes */}
      <rect x="430" y="55" width="175" height="135" rx="8" fill={isDark ? "#2e1065" : "#faf5ff"} stroke="#a855f7" strokeWidth="1.5" />
      <text x="440" y="78" fill="#c084fc" fontWeight="700" fontSize="11">3. Emojis Compuestos</text>
      <rect x="440" y="88" width="155" height="30" rx="4" fill={isDark ? "#1e1b4b" : "#ffffff"} />
      <text x="446" y="106" fill="#c084fc" fontSize="8" fontFamily="monospace">[\p&#123;RGI_Emoji&#125;]/v</text>
      <text x="440" y="135" fill={textColor} fontSize="8">Soporta secuencias ZWJ</text>
      <text x="440" y="150" fill={textColor} fontSize="8">y tonos de piel como 1 carácter:</text>
      <text x="440" y="165" fill="#34d399" fontSize="8">👨‍👩‍👦 (Familia completa) ✅</text>
    </svg>
  );
  },

  "regex-lastindex-stateful-mutation": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Warning banner */}
      <rect x="180" y="20" width="280" height="25" rx="12" fill={isDark ? "#450a0a" : "#fee2e2"} stroke="#ef4444" strokeWidth="1" />
      <text x="320" y="36" fill="#f87171" fontSize="9" fontWeight="bold" textAnchor="middle">Estado Interno Mutable en Flags /g e /y</text>

      {/* String target with indexes */}
      <rect x="35" y="55" width="570" height="40" rx="6" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke={border} strokeWidth="1" />
      <text x="50" y="78" fill={subtextColor} fontSize="9">Cadena: &quot;b a n a n a&quot; | Patrón: /a/g</text>

      {/* Step 1 */}
      <rect x="35" y="105" width="130" height="85" rx="6" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#818cf8" strokeWidth="1" />
      <text x="45" y="123" fill="#818cf8" fontWeight="bold" fontSize="9">1ª Llamada .test()</text>
      <text x="45" y="140" fill={textColor} fontSize="8">Inicio: lastIndex = 0</text>
      <text x="45" y="155" fill="#10b981" fontSize="8">Match en pos 1</text>
      <text x="45" y="172" fill="#818cf8" fontSize="8" fontWeight="bold">Nuevo lastIndex = 2</text>

      {/* Step 2 */}
      <rect x="180" y="105" width="130" height="85" rx="6" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#818cf8" strokeWidth="1" />
      <text x="190" y="123" fill="#818cf8" fontWeight="bold" fontSize="9">2ª Llamada .test()</text>
      <text x="190" y="140" fill={textColor} fontSize="8">Inicio: lastIndex = 2</text>
      <text x="190" y="155" fill="#10b981" fontSize="8">Match en pos 3</text>
      <text x="190" y="172" fill="#818cf8" fontSize="8" fontWeight="bold">Nuevo lastIndex = 4</text>

      {/* Step 3 */}
      <rect x="325" y="105" width="130" height="85" rx="6" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#818cf8" strokeWidth="1" />
      <text x="335" y="123" fill="#818cf8" fontWeight="bold" fontSize="9">3ª Llamada .test()</text>
      <text x="335" y="140" fill={textColor} fontSize="8">Inicio: lastIndex = 4</text>
      <text x="335" y="155" fill="#10b981" fontSize="8">Match en pos 5</text>
      <text x="335" y="172" fill="#818cf8" fontSize="8" fontWeight="bold">Nuevo lastIndex = 6</text>

      {/* Step 4: Reset */}
      <rect x="470" y="105" width="135" height="85" rx="6" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1" />
      <text x="480" y="123" fill="#34d399" fontWeight="bold" fontSize="9">4ª Llamada .test()</text>
      <text x="480" y="140" fill={textColor} fontSize="8">Inicio: lastIndex = 6</text>
      <text x="480" y="155" fill="#ef4444" fontSize="8">No hay más matches</text>
      <text x="480" y="172" fill="#10b981" fontSize="8" fontWeight="bold">lastIndex reset ➔ 0</text>
    </svg>
  );
  },

  "regex-catastrophic-backtracking-redos": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Pattern & Input */}
      <rect x="35" y="25" width="570" height="42" rx="8" fill={isDark ? "#450a0a" : "#fee2e2"} stroke="#ef4444" strokeWidth="1.5" />
      <text x="50" y="45" fill="#f87171" fontWeight="bold" fontSize="10" fontFamily="monospace">Patrón: /(a+)+$/ | Entrada maliciosa: &quot;aaaaaaaaaaaaaaaa!&quot;</text>
      <text x="50" y="58" fill={textColor} fontSize="8">La entrada casi coincide pero el &apos;!&apos; final fuerza al motor a probar toda combinación posible.</text>

      {/* Tree Branching */}
      <rect x="35" y="80" width="360" height="115" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke={border} strokeWidth="1.5" />
      <text x="45" y="100" fill="#f87171" fontWeight="bold" fontSize="10">Explosión Combinatoria O(2^n):</text>
      <text x="45" y="120" fill={textColor} fontSize="8" fontFamily="monospace">Nivel 1: (a)(a)(a)...(a)</text>
      <text x="45" y="135" fill={textColor} fontSize="8" fontFamily="monospace">Nivel 2: (aa)(a)...(a)</text>
      <text x="45" y="150" fill={textColor} fontSize="8" fontFamily="monospace">Nivel 3: (a)(aa)...(a) ... 2^20 combinaciones</text>
      <text x="45" y="175" fill="#ef4444" fontSize="8" fontWeight="bold">Backtracking infinito congelando el motor</text>

      {/* Impact Box */}
      <rect x="415" y="80" width="190" height="115" rx="8" fill={isDark ? "#450a0a" : "#fee2e2"} stroke="#ef4444" strokeWidth="1.5" />
      <text x="425" y="103" fill="#f87171" fontWeight="bold" fontSize="11">Impacto ReDoS</text>
      <rect x="425" y="113" width="170" height="30" rx="4" fill={isDark ? "#1f2937" : "#ffffff"} />
      <text x="435" y="132" fill="#ef4444" fontSize="10" fontWeight="bold">💥 100% CPU Bloqueada</text>
      <text x="425" y="160" fill={textColor} fontSize="8">Main Thread congelado.</text>
      <text x="425" y="175" fill={subtextColor} fontSize="8">Denegación de servicio frontend.</text>
    </svg>
  );
  },

  "regex-redos-mitigation-defenses": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* 4 Shield Pillars */}
      <rect x="35" y="35" width="130" height="155" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="45" y="60" fill="#34d399" fontWeight="700" fontSize="11">1. Límite Longitud</text>
      <rect x="45" y="70" width="110" height="30" rx="4" fill={isDark ? "#022c22" : "#ffffff"} />
      <text x="52" y="88" fill="#10b981" fontSize="8" fontFamily="monospace">input.length &lt; 100</text>
      <text x="45" y="120" fill={textColor} fontSize="8">Validar longitud</text>
      <text x="45" y="135" fill={textColor} fontSize="8">ANTES de ejecutar</text>
      <text x="45" y="150" fill={textColor} fontSize="8">la expresión regular.</text>
      <text x="45" y="175" fill="#34d399" fontSize="8">Barrera rápida</text>

      <rect x="180" y="35" width="130" height="155" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="190" y="60" fill="#60a5fa" fontWeight="700" fontSize="11">2. No Cuantificadores</text>
      <rect x="190" y="70" width="110" height="30" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="196" y="88" fill="#60a5fa" fontSize="8" fontFamily="monospace">Evitar (a+)+</text>
      <text x="190" y="120" fill={textColor} fontSize="8">Prohibir anidación</text>
      <text x="190" y="135" fill={textColor} fontSize="8">de repeticiones</text>
      <text x="190" y="150" fill={textColor} fontSize="8">ambiguas superpuestas.</text>
      <text x="190" y="175" fill="#60a5fa" fontSize="8">Linter: regexp</text>

      <rect x="325" y="35" width="130" height="155" rx="8" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#818cf8" strokeWidth="1.5" />
      <text x="335" y="60" fill="#818cf8" fontWeight="700" fontSize="11">3. Web Worker</text>
      <rect x="335" y="70" width="110" height="30" rx="4" fill={isDark ? "#1e1b4b" : "#ffffff"} />
      <text x="342" y="88" fill="#a5b4fc" fontSize="8" fontFamily="monospace">worker.terminate()</text>
      <text x="335" y="120" fill={textColor} fontSize="8">Aislar parsing en</text>
      <text x="335" y="135" fill={textColor} fontSize="8">hilo secundario con</text>
      <text x="335" y="150" fill={textColor} fontSize="8">timeout de 500ms.</text>
      <text x="335" y="175" fill="#818cf8" fontSize="8">Protege la UI</text>

      <rect x="470" y="35" width="135" height="155" rx="8" fill={isDark ? "#2e1065" : "#faf5ff"} stroke="#a855f7" strokeWidth="1.5" />
      <text x="480" y="60" fill="#c084fc" fontWeight="700" fontSize="11">4. Motores RE2</text>
      <rect x="480" y="70" width="115" height="30" rx="4" fill={isDark ? "#1e1b4b" : "#ffffff"} />
      <text x="488" y="88" fill="#c084fc" fontSize="8" fontFamily="monospace">Linear-Time O(n)</text>
      <text x="480" y="120" fill={textColor} fontSize="8">Motores DFA sin</text>
      <text x="480" y="135" fill={textColor} fontSize="8">backtracking que</text>
      <text x="480" y="150" fill={textColor} fontSize="8">garantizan tiempo lineal.</text>
      <text x="480" y="175" fill="#c084fc" fontSize="8">Inmune a ReDoS</text>
    </svg>
  );
  },

  "regex-compiler-optimization-bench": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Checklist items */}
      <rect x="35" y="25" width="570" height="36" rx="6" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1" />
      <text x="50" y="47" fill="#34d399" fontSize="10" fontWeight="bold">1. Hoisting de Instancias:</text>
      <text x="185" y="47" fill={textColor} fontSize="9">Declarar `const REGEX = /.../` fuera de componentes y loops para compilar una sola vez.</text>

      <rect x="35" y="68" width="570" height="36" rx="6" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1" />
      <text x="50" y="90" fill="#60a5fa" fontSize="10" fontWeight="bold">2. Grupos No Capturantes:</text>
      <text x="205" y="90" fill={textColor} fontSize="9">Usar `(?:...)` en lugar de `(...)` para eliminar costes de memoria de captura.</text>

      <rect x="35" y="111" width="570" height="36" rx="6" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#818cf8" strokeWidth="1" />
      <text x="50" y="133" fill="#818cf8" fontSize="10" fontWeight="bold">3. Anclaje al Inicio (^):</text>
      <text x="180" y="133" fill={textColor} fontSize="9">Evita que el motor escanee subcadenas si solo te interesa el formato completo.</text>

      <rect x="35" y="154" width="570" height="36" rx="6" fill={isDark ? "#713f12" : "#fef9c3"} stroke="#eab308" strokeWidth="1" />
      <text x="50" y="176" fill="#facc15" fontSize="10" fontWeight="bold">4. Orden de Alternativas:</text>
      <text x="195" y="176" fill={textColor} fontSize="9">Colocar las opciones más probables primero en `(común|raro)` para retorno rápido O(1).</text>
    </svg>
  );
  }
};
