import { DiagramRegistry } from "../diagram.types";

/** Diagramas SVG del módulo React Native. */
export const reactNativeDiagrams: DiagramRegistry = {
  "rn-web-vs-native-architecture": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* React Web Side */}
      <rect x="30" y="25" width="270" height="170" rx="8" fill={isDark ? "#0f172a" : "#f1f5f9"} stroke="#38bdf8" strokeWidth="1.5" />
      <text x="165" y="48" fill="#38bdf8" fontWeight="bold" fontSize="12" textAnchor="middle">React Web (Navegador)</text>
      
      <rect x="50" y="65" width="230" height="30" rx="4" fill={isDark ? "#1e293b" : "#e2e8f0"} />
      <text x="165" y="84" fill={textColor} fontSize="10" textAnchor="middle">React Reconciler + JSX</text>
      <path d="M165 95 L165 110" stroke="#38bdf8" strokeWidth="1.5" />
      
      <rect x="50" y="110" width="230" height="30" rx="4" fill={isDark ? "#1e293b" : "#e2e8f0"} />
      <text x="165" y="129" fill={textColor} fontSize="10" textAnchor="middle">ReactDOM ➔ HTML DOM Tree</text>
      <path d="M165 140 L165 155" stroke="#38bdf8" strokeWidth="1.5" />
      
      <rect x="50" y="155" width="230" height="30" rx="4" fill={isDark ? "#0369a1" : "#bae6fd"} />
      <text x="165" y="174" fill={isDark ? "#fff" : "#0369a1"} fontSize="10" fontWeight="bold" textAnchor="middle">Browser Render (&lt;div&gt;, CSSOM)</text>

      {/* React Native Side */}
      <rect x="340" y="25" width="270" height="170" rx="8" fill={isDark ? "#1e1b4b" : "#ede9fe"} stroke="#61dafb" strokeWidth="1.5" />
      <text x="475" y="48" fill="#61dafb" fontWeight="bold" fontSize="12" textAnchor="middle">React Native (Móvil)</text>
      
      <rect x="360" y="65" width="230" height="30" rx="4" fill={isDark ? "#312e81" : "#ddd6fe"} />
      <text x="475" y="84" fill={textColor} fontSize="10" textAnchor="middle">React Reconciler (Fiber / Hooks)</text>
      <path d="M475 95 L475 110" stroke="#61dafb" strokeWidth="1.5" />
      
      <rect x="360" y="110" width="230" height="30" rx="4" fill={isDark ? "#312e81" : "#ddd6fe"} />
      <text x="475" y="129" fill={textColor} fontSize="10" textAnchor="middle">Fabric + Yoga Engine (C++ Layout)</text>
      <path d="M475 140 L475 155" stroke="#61dafb" strokeWidth="1.5" />
      
      <rect x="360" y="155" width="230" height="30" rx="4" fill={isDark ? "#4338ca" : "#c7d2fe"} />
      <text x="475" y="174" fill={isDark ? "#fff" : "#312e81"} fontSize="10" fontWeight="bold" textAnchor="middle">Vistas Nativas (UIView / android.view)</text>
    </svg>
  );
  },

  "rn-primitive-components-mapping": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Table Header */}
      <rect x="30" y="25" width="180" height="28" rx="4" fill={isDark ? "#1e293b" : "#e2e8f0"} />
      <text x="120" y="43" fill="#38bdf8" fontWeight="bold" fontSize="11" textAnchor="middle">Primitivo React Native</text>
      
      <rect x="230" y="25" width="180" height="28" rx="4" fill={isDark ? "#1e293b" : "#e2e8f0"} />
      <text x="320" y="43" fill="#a855f7" fontWeight="bold" fontSize="11" textAnchor="middle">iOS (UIKit)</text>
      
      <rect x="430" y="25" width="180" height="28" rx="4" fill={isDark ? "#1e293b" : "#e2e8f0"} />
      <text x="520" y="43" fill="#10b981" fontWeight="bold" fontSize="11" textAnchor="middle">Android (Framework)</text>

      {/* Row 1: View */}
      <rect x="30" y="60" width="180" height="24" rx="4" fill={isDark ? "#0f172a" : "#fff"} stroke={border} />
      <text x="120" y="76" fill={textColor} fontSize="10" fontFamily="monospace" textAnchor="middle">&lt;View&gt;</text>
      <rect x="230" y="60" width="180" height="24" rx="4" fill={isDark ? "#0f172a" : "#fff"} stroke={border} />
      <text x="320" y="76" fill="#c084fc" fontSize="10" fontFamily="monospace" textAnchor="middle">UIView</text>
      <rect x="430" y="60" width="180" height="24" rx="4" fill={isDark ? "#0f172a" : "#fff"} stroke={border} />
      <text x="520" y="76" fill="#34d399" fontSize="10" fontFamily="monospace" textAnchor="middle">ViewGroup / View</text>

      {/* Row 2: Text */}
      <rect x="30" y="90" width="180" height="24" rx="4" fill={isDark ? "#0f172a" : "#fff"} stroke={border} />
      <text x="120" y="106" fill={textColor} fontSize="10" fontFamily="monospace" textAnchor="middle">&lt;Text&gt;</text>
      <rect x="230" y="90" width="180" height="24" rx="4" fill={isDark ? "#0f172a" : "#fff"} stroke={border} />
      <text x="320" y="106" fill="#c084fc" fontSize="10" fontFamily="monospace" textAnchor="middle">UITextView / UILabel</text>
      <rect x="430" y="90" width="180" height="24" rx="4" fill={isDark ? "#0f172a" : "#fff"} stroke={border} />
      <text x="520" y="106" fill="#34d399" fontSize="10" fontFamily="monospace" textAnchor="middle">TextView</text>

      {/* Row 3: Image */}
      <rect x="30" y="120" width="180" height="24" rx="4" fill={isDark ? "#0f172a" : "#fff"} stroke={border} />
      <text x="120" y="136" fill={textColor} fontSize="10" fontFamily="monospace" textAnchor="middle">&lt;Image&gt;</text>
      <rect x="230" y="120" width="180" height="24" rx="4" fill={isDark ? "#0f172a" : "#fff"} stroke={border} />
      <text x="320" y="136" fill="#c084fc" fontSize="10" fontFamily="monospace" textAnchor="middle">UIImageView</text>
      <rect x="430" y="120" width="180" height="24" rx="4" fill={isDark ? "#0f172a" : "#fff"} stroke={border} />
      <text x="520" y="136" fill="#34d399" fontSize="10" fontFamily="monospace" textAnchor="middle">ImageView</text>

      {/* Row 4: TextInput */}
      <rect x="30" y="150" width="180" height="24" rx="4" fill={isDark ? "#0f172a" : "#fff"} stroke={border} />
      <text x="120" y="166" fill={textColor} fontSize="10" fontFamily="monospace" textAnchor="middle">&lt;TextInput&gt;</text>
      <rect x="230" y="150" width="180" height="24" rx="4" fill={isDark ? "#0f172a" : "#fff"} stroke={border} />
      <text x="320" y="166" fill="#c084fc" fontSize="10" fontFamily="monospace" textAnchor="middle">UITextField</text>
      <rect x="430" y="150" width="180" height="24" rx="4" fill={isDark ? "#0f172a" : "#fff"} stroke={border} />
      <text x="520" y="166" fill="#34d399" fontSize="10" fontFamily="monospace" textAnchor="middle">EditText</text>

      {/* Row 5: ScrollView */}
      <rect x="30" y="180" width="180" height="22" rx="4" fill={isDark ? "#0f172a" : "#fff"} stroke={border} />
      <text x="120" y="195" fill={textColor} fontSize="10" fontFamily="monospace" textAnchor="middle">&lt;ScrollView&gt;</text>
      <rect x="230" y="180" width="180" height="22" rx="4" fill={isDark ? "#0f172a" : "#fff"} stroke={border} />
      <text x="320" y="195" fill="#c084fc" fontSize="10" fontFamily="monospace" textAnchor="middle">UIScrollView</text>
      <rect x="430" y="180" width="180" height="22" rx="4" fill={isDark ? "#0f172a" : "#fff"} stroke={border} />
      <text x="520" y="195" fill="#34d399" fontSize="10" fontFamily="monospace" textAnchor="middle">ScrollView / ReactScrollView</text>
    </svg>
  );
  },

  "rn-stylesheet-yoga-flexbox": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Left Box: StyleSheet.create */}
      <rect x="30" y="30" width="220" height="160" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#38bdf8" strokeWidth="1.5" />
      <text x="45" y="52" fill="#38bdf8" fontWeight="bold" fontSize="11" fontFamily="monospace">StyleSheet.create(&#123;...&#125;)</text>
      <rect x="45" y="65" width="190" height="110" rx="4" fill={isDark ? "#0f172a" : "#fff"} stroke={border} />
      <text x="55" y="85" fill={textColor} fontSize="9" fontFamily="monospace">flexDirection: &apos;column&apos;,</text>
      <text x="55" y="102" fill={subtextColor} fontSize="8">(Vertical por defecto en RN)</text>
      <text x="55" y="122" fill={textColor} fontSize="9" fontFamily="monospace">padding: 16,</text>
      <text x="55" y="139" fill={subtextColor} fontSize="8">(Puntos de densidad dp/pt, sin &apos;px&apos;)</text>
      <text x="55" y="158" fill="#10b981" fontSize="8" fontWeight="bold">✓ Caching &amp; ID numérico en memoria</text>

      {/* Middle Arrow with Yoga Engine */}
      <rect x="270" y="75" width="100" height="70" rx="6" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#818cf8" strokeWidth="1.5" />
      <text x="320" y="100" fill="#818cf8" fontWeight="bold" fontSize="11" textAnchor="middle">Yoga Engine</text>
      <text x="320" y="116" fill={textColor} fontSize="9" textAnchor="middle">Motor C++</text>
      <text x="320" y="132" fill={subtextColor} fontSize="8" textAnchor="middle">Flexbox Layout</text>
      <path d="M250 110 L270 110" stroke="#818cf8" strokeWidth="2" />
      <path d="M370 110 L390 110" stroke="#818cf8" strokeWidth="2" />

      {/* Right Box: Visual Layout */}
      <rect x="390" y="30" width="220" height="160" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="500" y="50" fill="#10b981" fontWeight="bold" fontSize="11" textAnchor="middle">Resultado en Pantalla</text>
      <rect x="410" y="60" width="180" height="36" rx="4" fill={isDark ? "#047857" : "#a7f3d0"} />
      <text x="500" y="82" fill="#fff" fontSize="9" fontWeight="bold" textAnchor="middle">Hijo 1 (Columna Arriba)</text>
      <rect x="410" y="102" width="180" height="36" rx="4" fill={isDark ? "#059669" : "#6ee7b7"} />
      <text x="500" y="124" fill="#fff" fontSize="9" fontWeight="bold" textAnchor="middle">Hijo 2 (Columna Medio)</text>
      <rect x="410" y="144" width="180" height="36" rx="4" fill={isDark ? "#10b981" : "#34d399"} />
      <text x="500" y="166" fill="#fff" fontSize="9" fontWeight="bold" textAnchor="middle">Hijo 3 (Columna Abajo)</text>
    </svg>
  );
  },

  "rn-pressable-state-machine": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* State Timeline */}
      <text x="320" y="35" fill="#a855f7" fontWeight="bold" fontSize="12" textAnchor="middle">Máquina de Estados de &lt;Pressable&gt;</text>
      
      {/* 1. Idle */}
      <circle cx="80" cy="80" r="30" fill={isDark ? "#1e293b" : "#e2e8f0"} stroke="#94a3b8" strokeWidth="1.5" />
      <text x="80" y="84" fill={textColor} fontSize="10" fontWeight="bold" textAnchor="middle">Idle</text>
      <text x="80" y="125" fill={subtextColor} fontSize="8" textAnchor="middle">pressed = false</text>

      <path d="M110 80 L160 80" stroke="#a855f7" strokeWidth="2" />
      <text x="135" y="73" fill="#a855f7" fontSize="8" textAnchor="middle">Touch Down</text>

      {/* 2. PressIn */}
      <circle cx="190" cy="80" r="30" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#818cf8" strokeWidth="1.5" />
      <text x="190" y="84" fill="#818cf8" fontSize="9" fontWeight="bold" textAnchor="middle">onPressIn</text>
      <text x="190" y="125" fill="#818cf8" fontSize="8" textAnchor="middle">pressed = true</text>

      <path d="M220 80 L290 80" stroke="#ec4899" strokeWidth="2" />
      <text x="255" y="73" fill="#ec4899" fontSize="8" textAnchor="middle">&gt; 500ms</text>

      {/* 3. LongPress */}
      <circle cx="320" cy="80" r="30" fill={isDark ? "#500724" : "#fdf2f8"} stroke="#ec4899" strokeWidth="1.5" />
      <text x="320" y="84" fill="#ec4899" fontSize="9" fontWeight="bold" textAnchor="middle">LongPress</text>
      <text x="320" y="125" fill="#ec4899" fontSize="8" textAnchor="middle">onLongPress</text>

      <path d="M350 80 L420 80" stroke="#f59e0b" strokeWidth="2" />
      <text x="385" y="73" fill="#f59e0b" fontSize="8" textAnchor="middle">Touch Up</text>

      {/* 4. PressOut */}
      <circle cx="450" cy="80" r="30" fill={isDark ? "#713f12" : "#fef9c3"} stroke="#f59e0b" strokeWidth="1.5" />
      <text x="450" y="84" fill="#f59e0b" fontSize="9" fontWeight="bold" textAnchor="middle">onPressOut</text>
      <text x="450" y="125" fill="#f59e0b" fontSize="8" textAnchor="middle">pressed = false</text>

      <path d="M480 80 L530 80" stroke="#10b981" strokeWidth="2" />
      <text x="505" y="73" fill="#10b981" fontSize="8" textAnchor="middle">Confirm</text>

      {/* 5. OnPress */}
      <circle cx="560" cy="80" r="30" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="2" />
      <text x="560" y="84" fill="#10b981" fontSize="9" fontWeight="bold" textAnchor="middle">onPress</text>
      <text x="560" y="125" fill="#10b981" fontSize="8" textAnchor="middle">Acción final</text>

      {/* Bottom code hint */}
      <rect x="50" y="150" width="540" height="42" rx="6" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke={border} />
      <text x="320" y="168" fill={textColor} fontSize="9" fontFamily="monospace" textAnchor="middle">style=&#123;(&#123; pressed &#125;) =&gt; [styles.btn, pressed &amp;&amp; styles.btnPressed]&#125;</text>
      <text x="320" y="184" fill={subtextColor} fontSize="8" textAnchor="middle">Render Props dinámicos superan a la opacidad fija de TouchableOpacity</text>
    </svg>
  );
  },

  "rn-expo-ecosystem-services": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* 1. Dev Machine */}
      <rect x="30" y="30" width="165" height="155" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#38bdf8" strokeWidth="1.5" />
      <text x="112" y="52" fill="#38bdf8" fontWeight="bold" fontSize="11" textAnchor="middle">1. Expo CLI &amp; App</text>
      <rect x="42" y="65" width="141" height="30" rx="4" fill={isDark ? "#0f172a" : "#fff"} />
      <text x="112" y="84" fill={textColor} fontSize="9" textAnchor="middle">npx create-expo-app</text>
      <rect x="42" y="103" width="141" height="30" rx="4" fill={isDark ? "#0f172a" : "#fff"} />
      <text x="112" y="122" fill={textColor} fontSize="9" textAnchor="middle">Config Plugins (app.json)</text>
      <rect x="42" y="141" width="141" height="32" rx="4" fill={isDark ? "#0369a1" : "#bae6fd"} />
      <text x="112" y="161" fill={isDark ? "#fff" : "#0369a1"} fontSize="9" fontWeight="bold" textAnchor="middle">Metro Fast Refresh</text>

      <path d="M195 105 L235 105" stroke="#38bdf8" strokeWidth="2" />

      {/* 2. Expo SDK & Client */}
      <rect x="235" y="30" width="165" height="155" rx="8" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#818cf8" strokeWidth="1.5" />
      <text x="317" y="52" fill="#818cf8" fontWeight="bold" fontSize="11" textAnchor="middle">2. Expo SDK &amp; Runtime</text>
      <rect x="247" y="65" width="141" height="30" rx="4" fill={isDark ? "#1e1b4b" : "#fff"} />
      <text x="317" y="84" fill={textColor} fontSize="9" textAnchor="middle">expo-camera / secure-store</text>
      <rect x="247" y="103" width="141" height="30" rx="4" fill={isDark ? "#1e1b4b" : "#fff"} />
      <text x="317" y="122" fill={textColor} fontSize="9" textAnchor="middle">Expo Go / Custom Dev Client</text>
      <rect x="247" y="141" width="141" height="32" rx="4" fill={isDark ? "#4338ca" : "#c7d2fe"} />
      <text x="317" y="161" fill={isDark ? "#fff" : "#312e81"} fontSize="9" fontWeight="bold" textAnchor="middle">Pruebas en dispositivo</text>

      <path d="M400 105 L440 105" stroke="#818cf8" strokeWidth="2" />

      {/* 3. EAS Cloud */}
      <rect x="440" y="30" width="170" height="155" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="525" y="52" fill="#10b981" fontWeight="bold" fontSize="11" textAnchor="middle">3. EAS (Cloud Services)</text>
      <rect x="452" y="65" width="146" height="30" rx="4" fill={isDark ? "#065f46" : "#fff"} />
      <text x="525" y="84" fill={textColor} fontSize="9" textAnchor="middle">EAS Build (IPA / AAB binarios)</text>
      <rect x="452" y="103" width="146" height="30" rx="4" fill={isDark ? "#065f46" : "#fff"} />
      <text x="525" y="122" fill={textColor} fontSize="9" textAnchor="middle">EAS Update (OTA Instantáneo)</text>
      <rect x="452" y="141" width="146" height="32" rx="4" fill={isDark ? "#059669" : "#a7f3d0"} />
      <text x="525" y="161" fill="#fff" fontSize="9" fontWeight="bold" textAnchor="middle">EAS Submit ➔ App Stores</text>
    </svg>
  );
  },

  "rn-managed-vs-bare-workflow": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Managed Workflow */}
      <rect x="30" y="25" width="270" height="170" rx="8" fill={isDark ? "#0f172a" : "#f1f5f9"} stroke="#38bdf8" strokeWidth="1.5" />
      <text x="165" y="48" fill="#38bdf8" fontWeight="bold" fontSize="11" textAnchor="middle">Managed Workflow (Recomendado)</text>
      
      <rect x="45" y="60" width="240" height="26" rx="4" fill={isDark ? "#1e293b" : "#fff"} />
      <text x="55" y="77" fill={textColor} fontSize="9">📁 No existen carpetas /ios ni /android</text>
      
      <rect x="45" y="93" width="240" height="26" rx="4" fill={isDark ? "#1e293b" : "#fff"} />
      <text x="55" y="110" fill={textColor} fontSize="9">⚙️ npx expo prebuild genera nativo al vuelo</text>
      
      <rect x="45" y="126" width="240" height="26" rx="4" fill={isDark ? "#1e293b" : "#fff"} />
      <text x="55" y="143" fill={textColor} fontSize="9">🔌 Config Plugins inyectan permisos en Gradle</text>
      
      <text x="165" y="180" fill="#10b981" fontSize="9" fontWeight="bold" textAnchor="middle">✓ Actualizaciones de versión sin fricción</text>

      {/* Bare Workflow */}
      <rect x="340" y="25" width="270" height="170" rx="8" fill={isDark ? "#2e1065" : "#faf5ff"} stroke="#a855f7" strokeWidth="1.5" />
      <text x="475" y="48" fill="#c084fc" fontWeight="bold" fontSize="11" textAnchor="middle">Bare Workflow (Legacy / Nativo)</text>
      
      <rect x="355" y="60" width="240" height="26" rx="4" fill={isDark ? "#3b0764" : "#fff"} />
      <text x="365" y="77" fill={textColor} fontSize="9">📁 Carpetas /ios y /android commiteadas en Git</text>
      
      <rect x="355" y="93" width="240" height="26" rx="4" fill={isDark ? "#3b0764" : "#fff"} />
      <text x="365" y="110" fill={textColor} fontSize="9">🛠️ Requiere Xcode y Android Studio obligatorios</text>
      
      <rect x="355" y="126" width="240" height="26" rx="4" fill={isDark ? "#3b0764" : "#fff"} />
      <text x="365" y="143" fill={textColor} fontSize="9">⚠️ Gestión manual de CocoaPods y Gradle</text>
      
      <text x="475" y="180" fill="#f59e0b" fontSize="9" fontWeight="bold" textAnchor="middle">⚠️ Mayor mantenimiento y conflictos en upgrades</text>
    </svg>
  );
  },

  "rn-flatlist-virtualization-window": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* ScrollView (Inefficient) */}
      <rect x="30" y="25" width="260" height="170" rx="8" fill={isDark ? "#450a0a" : "#fee2e2"} stroke="#ef4444" strokeWidth="1.5" />
      <text x="160" y="48" fill="#ef4444" fontWeight="bold" fontSize="11" textAnchor="middle">&lt;ScrollView&gt; (Sin Virtualizar)</text>
      <rect x="50" y="60" width="220" height="110" rx="4" fill={isDark ? "#7f1d1d" : "#fca5a5"} stroke="#ef4444" strokeDasharray="3 3" />
      <text x="160" y="85" fill="#fff" fontSize="9" textAnchor="middle">Item 01 (En memoria)</text>
      <text x="160" y="105" fill="#fff" fontSize="9" textAnchor="middle">Item 02... Item 500 (En memoria)</text>
      <text x="160" y="125" fill="#fff" fontSize="9" textAnchor="middle">Item 1000 (En memoria)</text>
      <text x="160" y="152" fill="#fee2e2" fontSize="9" fontWeight="bold" textAnchor="middle">💥 Out of Memory / Fuga de RAM</text>
      <text x="160" y="185" fill="#ef4444" fontSize="8" textAnchor="middle">Monta todos los nodos en el Host View nativo</text>

      {/* FlatList (Virtual Window) */}
      <rect x="350" y="25" width="260" height="170" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="480" y="48" fill="#10b981" fontWeight="bold" fontSize="11" textAnchor="middle">&lt;FlatList&gt; (Virtual Windowing)</text>
      
      <rect x="370" y="60" width="220" height="25" rx="3" fill={isDark ? "#065f46" : "#a7f3d0"} opacity="0.4" />
      <text x="480" y="76" fill={textColor} fontSize="8" textAnchor="middle">Buffer Superior (Pre-render)</text>
      
      <rect x="370" y="90" width="220" height="48" rx="4" fill={isDark ? "#047857" : "#34d399"} stroke="#10b981" strokeWidth="1.5" />
      <text x="480" y="112" fill="#fff" fontSize="10" fontWeight="bold" textAnchor="middle">Ventana Visible en Pantalla (Viewport)</text>
      <text x="480" y="128" fill="#fff" fontSize="8" textAnchor="middle">Solo 5-10 celdas activas en memoria</text>
      
      <rect x="370" y="143" width="220" height="25" rx="3" fill={isDark ? "#065f46" : "#a7f3d0"} opacity="0.4" />
      <text x="480" y="159" fill={textColor} fontSize="8" textAnchor="middle">Buffer Inferior (Pre-render)</text>
      
      <text x="480" y="185" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">✓ Reciclaje de vistas en scroll continuo a 60 FPS</text>
    </svg>
  );
  },

  "rn-navigation-stack-tabs-filebased": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* React Navigation (Stack) */}
      <rect x="30" y="25" width="270" height="170" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#38bdf8" strokeWidth="1.5" />
      <text x="165" y="48" fill="#38bdf8" fontWeight="bold" fontSize="11" textAnchor="middle">React Navigation (Component-Based)</text>
      
      <rect x="50" y="60" width="230" height="32" rx="4" fill={isDark ? "#0f172a" : "#fff"} stroke={border} />
      <text x="165" y="80" fill={textColor} fontSize="9" fontFamily="monospace" textAnchor="middle">&lt;Stack.Navigator&gt;</text>
      
      <rect x="65" y="100" width="200" height="26" rx="4" fill={isDark ? "#334155" : "#e2e8f0"} />
      <text x="165" y="117" fill={textColor} fontSize="8" textAnchor="middle">Pantalla A ➔ navigation.push(&apos;Detail&apos;)</text>
      
      <rect x="65" y="132" width="200" height="26" rx="4" fill={isDark ? "#0369a1" : "#bae6fd"} />
      <text x="165" y="149" fill={isDark ? "#fff" : "#0369a1"} fontSize="8" fontWeight="bold" textAnchor="middle">Pantalla B (Detalle apilado con botón Back)</text>
      
      <text x="165" y="180" fill={subtextColor} fontSize="8" textAnchor="middle">Navegación nativa fluida con UINavigationController</text>

      {/* Expo Router (File-Based) */}
      <rect x="340" y="25" width="270" height="170" rx="8" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#818cf8" strokeWidth="1.5" />
      <text x="475" y="48" fill="#818cf8" fontWeight="bold" fontSize="11" textAnchor="middle">Expo Router (File-Based / Next.js Style)</text>
      
      <rect x="360" y="60" width="230" height="100" rx="4" fill={isDark ? "#1e1b4b" : "#fff"} stroke={border} />
      <text x="375" y="78" fill="#818cf8" fontSize="9" fontFamily="monospace">app/</text>
      <text x="390" y="94" fill={textColor} fontSize="9" fontFamily="monospace">├── _layout.tsx (Stack raíz)</text>
      <text x="390" y="110" fill={textColor} fontSize="9" fontFamily="monospace">├── (tabs)/_layout.tsx (BottomTabs)</text>
      <text x="405" y="126" fill={textColor} fontSize="9" fontFamily="monospace">├── index.tsx (Home tab)</text>
      <text x="390" y="142" fill="#ec4899" fontSize="9" fontFamily="monospace">└── product/[id].tsx (Ruta dinámica)</text>
      
      <text x="475" y="180" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">✓ Deep linking web/móvil universal automático</text>
    </svg>
  );
  },

  "rn-asyncstorage-vs-mmkv-jsi": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* AsyncStorage */}
      <rect x="30" y="25" width="270" height="170" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#ef4444" strokeWidth="1.5" />
      <text x="165" y="48" fill="#ef4444" fontWeight="bold" fontSize="11" textAnchor="middle">AsyncStorage (Legacy Asíncrono)</text>
      
      <rect x="50" y="60" width="230" height="26" rx="4" fill={isDark ? "#0f172a" : "#fff"} />
      <text x="165" y="77" fill={textColor} fontSize="9" textAnchor="middle">JS Thread: await getItem(&apos;token&apos;)</text>
      <path d="M165 86 L165 98" stroke="#ef4444" strokeWidth="1.5" />
      
      <rect x="50" y="98" width="230" height="26" rx="4" fill={isDark ? "#7f1d1d" : "#fee2e2"} />
      <text x="165" y="115" fill="#ef4444" fontSize="8" textAnchor="middle">Bridge Queue: JSON Stringify / Serialize</text>
      <path d="M165 124 L165 136" stroke="#ef4444" strokeWidth="1.5" />
      
      <rect x="50" y="136" width="230" height="26" rx="4" fill={isDark ? "#0f172a" : "#fff"} />
      <text x="165" y="153" fill={textColor} fontSize="9" textAnchor="middle">SQLite / SharedPreferences (~30ms)</text>
      
      <text x="165" y="182" fill="#ef4444" fontSize="8" textAnchor="middle">Cuello de botella asíncrono en inicio de app</text>

      {/* MMKV via JSI */}
      <rect x="340" y="25" width="270" height="170" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="475" y="48" fill="#10b981" fontWeight="bold" fontSize="11" textAnchor="middle">react-native-mmkv (JSI Directo)</text>
      
      <rect x="360" y="60" width="230" height="26" rx="4" fill={isDark ? "#065f46" : "#fff"} />
      <text x="475" y="77" fill={textColor} fontSize="9" textAnchor="middle">JS Thread: storage.getString(&apos;token&apos;)</text>
      <path d="M475 86 L475 98" stroke="#10b981" strokeWidth="2" />
      
      <rect x="360" y="98" width="230" height="32" rx="4" fill={isDark ? "#047857" : "#a7f3d0"} />
      <text x="475" y="114" fill="#fff" fontSize="9" fontWeight="bold" textAnchor="middle">Puntero C++ Directo vía JSI (Sin Bridge)</text>
      <path d="M475 130 L475 140" stroke="#10b981" strokeWidth="2" />
      
      <rect x="360" y="140" width="230" height="26" rx="4" fill={isDark ? "#065f46" : "#fff"} />
      <text x="475" y="157" fill={textColor} fontSize="9" textAnchor="middle">Acceso síncrono mmap en RAM (~0.5ms)</text>
      
      <text x="475" y="182" fill="#10b981" fontSize="9" fontWeight="bold" textAnchor="middle">⚡ Hasta 30x más rápido y 100% síncrono</text>
    </svg>
  );
  },

  "rn-platform-specific-resolution": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* File Extensions Resolution */}
      <rect x="30" y="25" width="270" height="170" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#38bdf8" strokeWidth="1.5" />
      <text x="165" y="48" fill="#38bdf8" fontWeight="bold" fontSize="11" textAnchor="middle">1. Resolución por Extensión (Build Time)</text>
      
      <rect x="50" y="62" width="230" height="24" rx="4" fill={isDark ? "#0f172a" : "#fff"} stroke={border} />
      <text x="165" y="78" fill={textColor} fontSize="9" fontFamily="monospace" textAnchor="middle">import Button from &apos;./Button&apos;;</text>
      
      <path d="M120 90 L85 110" stroke="#38bdf8" strokeWidth="1.5" />
      <path d="M210 90 L245 110" stroke="#10b981" strokeWidth="1.5" />
      
      <rect x="45" y="110" width="105" height="42" rx="4" fill={isDark ? "#0284c7" : "#e0f2fe"} />
      <text x="97" y="128" fill={isDark ? "#fff" : "#0369a1"} fontSize="8" fontWeight="bold" textAnchor="middle">iOS Bundle</text>
      <text x="97" y="142" fill={isDark ? "#e0f2fe" : "#0284c7"} fontSize="8" fontFamily="monospace" textAnchor="middle">Button.ios.tsx</text>
      
      <rect x="180" y="110" width="105" height="42" rx="4" fill={isDark ? "#059669" : "#d1fae5"} />
      <text x="232" y="128" fill={isDark ? "#fff" : "#065f46"} fontSize="8" fontWeight="bold" textAnchor="middle">Android Bundle</text>
      <text x="232" y="142" fill={isDark ? "#d1fae5" : "#059669"} fontSize="8" fontFamily="monospace" textAnchor="middle">Button.android.tsx</text>
      
      <text x="165" y="180" fill={subtextColor} fontSize="8" textAnchor="middle">Metro empaqueta solo el archivo correspondiente</text>

      {/* Runtime Platform API */}
      <rect x="340" y="25" width="270" height="170" rx="8" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#818cf8" strokeWidth="1.5" />
      <text x="475" y="48" fill="#818cf8" fontWeight="bold" fontSize="11" textAnchor="middle">2. Platform.select (Runtime)</text>
      
      <rect x="355" y="62" width="240" height="85" rx="4" fill={isDark ? "#1e1b4b" : "#fff"} stroke={border} />
      <text x="365" y="80" fill={textColor} fontSize="9" fontFamily="monospace">const elevation = Platform.select(&#123;</text>
      <text x="380" y="96" fill="#38bdf8" fontSize="9" fontFamily="monospace">ios: &#123; shadowOpacity: 0.25 &#125;,</text>
      <text x="380" y="112" fill="#10b981" fontSize="9" fontFamily="monospace">android: &#123; elevation: 4 &#125;,</text>
      <text x="380" y="128" fill="#f59e0b" fontSize="9" fontFamily="monospace">default: &#123; border: &apos;1px solid&apos; &#125;,</text>
      <text x="365" y="142" fill={textColor} fontSize="9" fontFamily="monospace">&#125;);</text>
      
      <text x="475" y="180" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">✓ Código adaptativo limpio para sombras y bordes</text>
    </svg>
  );
  },

  "rn-new-architecture-fabric-turbomodules": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Top: JS Runtime */}
      <rect x="50" y="25" width="540" height="35" rx="6" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#38bdf8" strokeWidth="1.5" />
      <text x="320" y="47" fill="#38bdf8" fontWeight="bold" fontSize="11" textAnchor="middle">JavaScript Runtime (Hermes) + React 19 Concurrent</text>

      {/* Middle: JSI */}
      <rect x="120" y="72" width="400" height="28" rx="6" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#818cf8" strokeWidth="1.5" />
      <text x="320" y="90" fill="#818cf8" fontWeight="bold" fontSize="11" textAnchor="middle">JSI (JavaScript Interface - Capa C++ sin Puente Asíncrono)</text>

      {/* Left Pillar: Fabric */}
      <rect x="50" y="110" width="250" height="85" rx="6" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="175" y="130" fill="#10b981" fontWeight="bold" fontSize="11" textAnchor="middle">Fabric Renderer</text>
      <text x="175" y="148" fill={textColor} fontSize="8" textAnchor="middle">• Renderizado concurrente C++</text>
      <text x="175" y="162" fill={textColor} fontSize="8" textAnchor="middle">• Shadow Tree inmutable + Yoga</text>
      <text x="175" y="178" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">➔ Host Views Nativos Directos</text>

      {/* Right Pillar: TurboModules */}
      <rect x="340" y="110" width="250" height="85" rx="6" fill={isDark ? "#713f12" : "#fef9c3"} stroke="#f59e0b" strokeWidth="1.5" />
      <text x="465" y="130" fill="#f59e0b" fontWeight="bold" fontSize="11" textAnchor="middle">TurboModules</text>
      <text x="465" y="148" fill={textColor} fontSize="8" textAnchor="middle">• Carga perezosa (Lazy loading)</text>
      <text x="465" y="162" fill={textColor} fontSize="8" textAnchor="middle">• Invocación síncrona / tipada con Codegen</text>
      <text x="465" y="178" fill="#f59e0b" fontSize="8" fontWeight="bold" textAnchor="middle">➔ Métodos Nativos C++ / Swift / Kotlin</text>
    </svg>
  );
  },

  "rn-jsi-memory-host-objects": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* JS Heap */}
      <rect x="30" y="30" width="200" height="155" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#38bdf8" strokeWidth="1.5" />
      <text x="130" y="52" fill="#38bdf8" fontWeight="bold" fontSize="11" textAnchor="middle">JavaScript Heap (Hermes)</text>
      <rect x="45" y="68" width="170" height="40" rx="4" fill={isDark ? "#0f172a" : "#fff"} stroke={border} />
      <text x="130" y="88" fill={textColor} fontSize="9" textAnchor="middle">const module = ...</text>
      <text x="130" y="101" fill="#38bdf8" fontSize="8" fontFamily="monospace" textAnchor="middle">jsi::HostObject</text>
      <rect x="45" y="120" width="170" height="48" rx="4" fill={isDark ? "#0369a1" : "#e0f2fe"} />
      <text x="130" y="140" fill={isDark ? "#fff" : "#0369a1"} fontSize="9" fontWeight="bold" textAnchor="middle">Puntero Directo a Memoria</text>
      <text x="130" y="156" fill={isDark ? "#bae6fd" : "#0284c7"} fontSize="8" textAnchor="middle">(Zero serialización JSON)</text>

      {/* Direct Bridge-less Arrow */}
      <path d="M230 108 L400 108" stroke="#10b981" strokeWidth="3" strokeDasharray="4 4" />
      <rect x="260" y="93" width="110" height="30" rx="4" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" />
      <text x="315" y="112" fill="#10b981" fontWeight="bold" fontSize="9" textAnchor="middle">Invocación Síncrona</text>

      {/* Native C++ Memory */}
      <rect x="410" y="30" width="200" height="155" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="510" y="52" fill="#10b981" fontWeight="bold" fontSize="11" textAnchor="middle">Memoria C++ Nativa</text>
      <rect x="425" y="68" width="170" height="40" rx="4" fill={isDark ? "#065f46" : "#fff"} stroke={border} />
      <text x="510" y="88" fill={textColor} fontSize="9" fontFamily="monospace" textAnchor="middle">class NativeModule :</text>
      <text x="510" y="101" fill="#10b981" fontSize="8" fontFamily="monospace" textAnchor="middle">public jsi::HostObject</text>
      <rect x="425" y="120" width="170" height="48" rx="4" fill={isDark ? "#047857" : "#a7f3d0"} />
      <text x="510" y="140" fill="#fff" fontSize="9" fontWeight="bold" textAnchor="middle">Ejecución en Metal</text>
      <text x="510" y="156" fill="#fff" fontSize="8" textAnchor="middle">Sin demoras por IPC / Bridge</text>
    </svg>
  );
  },

  "rn-reanimated-worklets-ui-thread": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* JS Thread */}
      <rect x="30" y="30" width="240" height="155" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#38bdf8" strokeWidth="1.5" />
      <text x="150" y="52" fill="#38bdf8" fontWeight="bold" fontSize="11" textAnchor="middle">JavaScript Thread (React)</text>
      <rect x="45" y="68" width="210" height="35" rx="4" fill={isDark ? "#0f172a" : "#fff"} stroke={border} />
      <text x="150" y="89" fill={textColor} fontSize="9" textAnchor="middle">Lógica de la App / State / Redux</text>
      
      <rect x="45" y="112" width="210" height="55" rx="4" fill={isDark ? "#334155" : "#e2e8f0"} />
      <text x="150" y="132" fill="#f59e0b" fontSize="9" fontWeight="bold" textAnchor="middle">Si el JS Thread se congela:</text>
      <text x="150" y="148" fill={textColor} fontSize="8" textAnchor="middle">¡La animación NO se interrumpe!</text>

      {/* Connection: Shared Value */}
      <path d="M270 108 L370 108" stroke="#a855f7" strokeWidth="2" />
      <rect x="280" y="93" width="80" height="30" rx="4" fill={isDark ? "#3b0764" : "#fdf4ff"} stroke="#a855f7" />
      <text x="320" y="112" fill="#c084fc" fontSize="8" fontWeight="bold" textAnchor="middle">SharedValue</text>

      {/* UI Thread */}
      <rect x="370" y="30" width="240" height="155" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="490" y="52" fill="#10b981" fontWeight="bold" fontSize="11" textAnchor="middle">UI / Render Thread (Worklets)</text>
      <rect x="385" y="68" width="210" height="35" rx="4" fill={isDark ? "#065f46" : "#fff"} stroke={border} />
      <text x="490" y="89" fill={textColor} fontSize="9" textAnchor="middle">Worklets: useAnimatedStyle / Gestos</text>
      
      <rect x="385" y="112" width="210" height="55" rx="4" fill={isDark ? "#047857" : "#a7f3d0"} />
      <text x="490" y="132" fill="#fff" fontSize="10" fontWeight="bold" textAnchor="middle">60 / 120 FPS Nativos Fluidos</text>
      <text x="490" y="150" fill="#fff" fontSize="8" textAnchor="middle">withSpring / withTiming directo en GPU</text>
    </svg>
  );
  },

  "rn-metro-bundler-pipeline": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Step 1: Resolution */}
      <rect x="30" y="40" width="160" height="135" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#38bdf8" strokeWidth="1.5" />
      <text x="110" y="65" fill="#38bdf8" fontWeight="bold" fontSize="11" textAnchor="middle">1. Resolution</text>
      <rect x="42" y="80" width="136" height="40" rx="4" fill={isDark ? "#0f172a" : "#fff"} />
      <text x="110" y="100" fill={textColor} fontSize="8" textAnchor="middle">Construye árbol</text>
      <text x="110" y="112" fill={textColor} fontSize="8" textAnchor="middle">de dependencias</text>
      <text x="110" y="145" fill={subtextColor} fontSize="8" textAnchor="middle">Filtra .ios/.android</text>

      <path d="M190 108 L235 108" stroke="#38bdf8" strokeWidth="2" />

      {/* Step 2: Transformation */}
      <rect x="235" y="40" width="170" height="135" rx="8" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#818cf8" strokeWidth="1.5" />
      <text x="320" y="65" fill="#818cf8" fontWeight="bold" fontSize="11" textAnchor="middle">2. Transformation</text>
      <rect x="247" y="80" width="146" height="40" rx="4" fill={isDark ? "#1e1b4b" : "#fff"} />
      <text x="320" y="100" fill={textColor} fontSize="8" textAnchor="middle">Babel / Hermes</text>
      <text x="320" y="112" fill={textColor} fontSize="8" textAnchor="middle">JSX ➔ JS Bytecode</text>
      <text x="320" y="145" fill={subtextColor} fontSize="8" textAnchor="middle">Compilación en paralelo</text>

      <path d="M405 108 L450 108" stroke="#818cf8" strokeWidth="2" />

      {/* Step 3: Serialization */}
      <rect x="450" y="40" width="160" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="530" y="65" fill="#10b981" fontWeight="bold" fontSize="11" textAnchor="middle">3. Serialization</text>
      <rect x="462" y="80" width="136" height="40" rx="4" fill={isDark ? "#065f46" : "#fff"} />
      <text x="530" y="100" fill={textColor} fontSize="8" textAnchor="middle">Empaqueta en bundle</text>
      <text x="530" y="112" fill={textColor} fontSize="8" textAnchor="middle">único optimizado</text>
      <text x="530" y="145" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">Fast Refresh HMR</text>
    </svg>
  );
  },

  "rn-codegen-type-contract-pipeline": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Input Spec */}
      <rect x="30" y="40" width="165" height="135" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#38bdf8" strokeWidth="1.5" />
      <text x="112" y="65" fill="#38bdf8" fontWeight="bold" fontSize="11" textAnchor="middle">Spec TypeScript</text>
      <rect x="42" y="80" width="141" height="50" rx="4" fill={isDark ? "#0f172a" : "#fff"} />
      <text x="112" y="98" fill={textColor} fontSize="8" fontFamily="monospace" textAnchor="middle">interface Spec extends</text>
      <text x="112" y="112" fill={textColor} fontSize="8" fontFamily="monospace" textAnchor="middle">TurboModule &#123; ... &#125;</text>
      <text x="112" y="150" fill={subtextColor} fontSize="8" textAnchor="middle">Contrato tipado único</text>

      <path d="M195 108 L235 108" stroke="#38bdf8" strokeWidth="2" />

      {/* Codegen Tool */}
      <rect x="235" y="40" width="170" height="135" rx="8" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#818cf8" strokeWidth="1.5" />
      <text x="320" y="65" fill="#818cf8" fontWeight="bold" fontSize="11" textAnchor="middle">React Native Codegen</text>
      <rect x="247" y="80" width="146" height="50" rx="4" fill={isDark ? "#1e1b4b" : "#fff"} />
      <text x="320" y="100" fill={textColor} fontSize="8" textAnchor="middle">Parser estático AST</text>
      <text x="320" y="114" fill="#a855f7" fontSize="8" fontWeight="bold" textAnchor="middle">Build-time generation</text>
      <text x="320" y="150" fill={subtextColor} fontSize="8" textAnchor="middle">Valida tipos sin errores</text>

      <path d="M405 108 L445 108" stroke="#818cf8" strokeWidth="2" />

      {/* Generated Code */}
      <rect x="445" y="40" width="165" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="527" y="65" fill="#10b981" fontWeight="bold" fontSize="11" textAnchor="middle">Archivos Generados</text>
      <rect x="455" y="80" width="145" height="24" rx="3" fill={isDark ? "#065f46" : "#fff"} />
      <text x="527" y="96" fill="#34d399" fontSize="8" fontFamily="monospace" textAnchor="middle">C++ Headers (.h)</text>
      <rect x="455" y="108" width="145" height="24" rx="3" fill={isDark ? "#065f46" : "#fff"} />
      <text x="527" y="124" fill="#38bdf8" fontSize="8" fontFamily="monospace" textAnchor="middle">Java / Kotlin JNI Glue</text>
      <rect x="455" y="136" width="145" height="24" rx="3" fill={isDark ? "#065f46" : "#fff"} />
      <text x="527" y="152" fill="#c084fc" fontSize="8" fontFamily="monospace" textAnchor="middle">Obj-C Protocols</text>
    </svg>
  );
  },

  "rn-hermes-bytecode-aot-pipeline": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Build Time Phase */}
      <rect x="30" y="25" width="270" height="170" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#38bdf8" strokeWidth="1.5" />
      <text x="165" y="48" fill="#38bdf8" fontWeight="bold" fontSize="11" textAnchor="middle">Fase de Build (AOT Ahead-of-Time)</text>
      
      <rect x="50" y="65" width="230" height="30" rx="4" fill={isDark ? "#0f172a" : "#fff"} />
      <text x="165" y="84" fill={textColor} fontSize="9" textAnchor="middle">Código JavaScript / TypeScript Fuente</text>
      
      <path d="M165 95 L165 115" stroke="#38bdf8" strokeWidth="1.5" />
      
      <rect x="50" y="115" width="230" height="35" rx="4" fill={isDark ? "#0369a1" : "#bae6fd"} />
      <text x="165" y="132" fill={isDark ? "#fff" : "#0369a1"} fontSize="9" fontWeight="bold" textAnchor="middle">Hermes Compiler ➔ index.android.bundle</text>
      <text x="165" y="145" fill={isDark ? "#e0f2fe" : "#0284c7"} fontSize="8" textAnchor="middle">Hermes Bytecode Binario (HBC)</text>
      
      <text x="165" y="178" fill={subtextColor} fontSize="8" textAnchor="middle">Optimización de parser antes de la instalación</text>

      {/* Runtime Phase */}
      <rect x="340" y="25" width="270" height="170" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="475" y="48" fill="#10b981" fontWeight="bold" fontSize="11" textAnchor="middle">Tiempo de Ejecución en Dispositivo</text>
      
      <rect x="360" y="65" width="230" height="40" rx="4" fill={isDark ? "#065f46" : "#fff"} />
      <text x="475" y="84" fill="#34d399" fontSize="9" fontWeight="bold" textAnchor="middle">Cero Tiempo de Parseo JS al Inicio</text>
      <text x="475" y="98" fill={textColor} fontSize="8" textAnchor="middle">HBC se carga directo con mmap a memoria</text>
      
      <rect x="360" y="115" width="230" height="35" rx="4" fill={isDark ? "#047857" : "#a7f3d0"} />
      <text x="475" y="133" fill="#fff" fontSize="9" fontWeight="bold" textAnchor="middle">⚡ TTI (Time-to-Interactive) Inmediato</text>
      <text x="475" y="146" fill="#fff" fontSize="8" textAnchor="middle">Menor consumo de RAM y Garbage Collector ágil</text>
      
      <text x="475" y="178" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">✓ Motor nativo oficial por defecto de Meta</text>
    </svg>
  );
  },

  "rn-threading-model-multithread": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Thread 1: JS Thread */}
      <rect x="30" y="25" width="135" height="165" rx="6" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#38bdf8" strokeWidth="1.5" />
      <text x="97" y="48" fill="#38bdf8" fontWeight="bold" fontSize="10" textAnchor="middle">1. JS Thread</text>
      <text x="97" y="70" fill={textColor} fontSize="8" textAnchor="middle">• Código React</text>
      <text x="97" y="86" fill={textColor} fontSize="8" textAnchor="middle">• Hooks &amp; State</text>
      <text x="97" y="102" fill={textColor} fontSize="8" textAnchor="middle">• Event handlers</text>
      <text x="97" y="118" fill={textColor} fontSize="8" textAnchor="middle">• Llamadas API</text>
      <rect x="40" y="145" width="115" height="25" rx="4" fill={isDark ? "#0f172a" : "#fff"} />
      <text x="97" y="161" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle">Hermes Engine</text>

      {/* Thread 2: Shadow Thread */}
      <rect x="175" y="25" width="135" height="165" rx="6" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#818cf8" strokeWidth="1.5" />
      <text x="242" y="48" fill="#818cf8" fontWeight="bold" fontSize="10" textAnchor="middle">2. Shadow Thread</text>
      <text x="242" y="70" fill={textColor} fontSize="8" textAnchor="middle">• Árbol Shadow</text>
      <text x="242" y="86" fill={textColor} fontSize="8" textAnchor="middle">• Cálculo Flexbox</text>
      <text x="242" y="102" fill={textColor} fontSize="8" textAnchor="middle">• Coordenadas (x,y)</text>
      <text x="242" y="118" fill={textColor} fontSize="8" textAnchor="middle">• Medidas (w,h)</text>
      <rect x="185" y="145" width="115" height="25" rx="4" fill={isDark ? "#1e1b4b" : "#fff"} />
      <text x="242" y="161" fill="#818cf8" fontSize="8" fontWeight="bold" textAnchor="middle">Yoga C++</text>

      {/* Thread 3: UI/Main Thread */}
      <rect x="320" y="25" width="145" height="165" rx="6" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="392" y="48" fill="#10b981" fontWeight="bold" fontSize="10" textAnchor="middle">3. UI / Main Thread</text>
      <text x="392" y="70" fill={textColor} fontSize="8" textAnchor="middle">• Render vistas SO</text>
      <text x="392" y="86" fill={textColor} fontSize="8" textAnchor="middle">• Touch &amp; Gestos</text>
      <text x="392" y="102" fill={textColor} fontSize="8" textAnchor="middle">• 60/120 FPS vsync</text>
      <text x="392" y="118" fill={textColor} fontSize="8" textAnchor="middle">• Pixel compositing</text>
      <rect x="330" y="145" width="125" height="25" rx="4" fill={isDark ? "#065f46" : "#fff"} />
      <text x="392" y="161" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">UIKit / Android OS</text>

      {/* Thread 4: Background Native */}
      <rect x="475" y="25" width="135" height="165" rx="6" fill={isDark ? "#713f12" : "#fef9c3"} stroke="#f59e0b" strokeWidth="1.5" />
      <text x="542" y="48" fill="#f59e0b" fontWeight="bold" fontSize="10" textAnchor="middle">4. Native Modules</text>
      <text x="542" y="70" fill={textColor} fontSize="8" textAnchor="middle">• Sensores GPS</text>
      <text x="542" y="86" fill={textColor} fontSize="8" textAnchor="middle">• I/O Archivos</text>
      <text x="542" y="102" fill={textColor} fontSize="8" textAnchor="middle">• Descargas de red</text>
      <text x="542" y="118" fill={textColor} fontSize="8" textAnchor="middle">• Base de datos</text>
      <rect x="485" y="145" width="115" height="25" rx="4" fill={isDark ? "#78350f" : "#fff"} />
      <text x="542" y="161" fill="#f59e0b" fontSize="8" fontWeight="bold" textAnchor="middle">ThreadPool</text>
    </svg>
  );
  },

  "rn-bridgeless-mode-runtime": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Left: Legacy Bridge Model */}
      <rect x="30" y="25" width="270" height="170" rx="8" fill={isDark ? "#450a0a" : "#fee2e2"} stroke="#ef4444" strokeWidth="1.5" />
      <text x="165" y="48" fill="#ef4444" fontWeight="bold" fontSize="11" textAnchor="middle">Legacy Architecture (Bridge)</text>
      
      <rect x="50" y="65" width="230" height="26" rx="4" fill={isDark ? "#0f172a" : "#fff"} />
      <text x="165" y="82" fill={textColor} fontSize="9" textAnchor="middle">JS Thread (React)</text>
      
      <rect x="50" y="98" width="230" height="30" rx="4" fill={isDark ? "#7f1d1d" : "#fca5a5"} stroke="#ef4444" />
      <text x="165" y="116" fill="#fff" fontSize="9" fontWeight="bold" textAnchor="middle">Puente JSON Asíncrono (Cuello de botella)</text>
      
      <rect x="50" y="135" width="230" height="26" rx="4" fill={isDark ? "#0f172a" : "#fff"} />
      <text x="165" y="152" fill={textColor} fontSize="9" textAnchor="middle">Native Modules &amp; UIViews</text>
      
      <text x="165" y="182" fill="#ef4444" fontSize="8" textAnchor="middle">Inundación de mensajes (Bridge congestion)</text>

      {/* Right: Modern Bridgeless Mode */}
      <rect x="340" y="25" width="270" height="170" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="475" y="48" fill="#10b981" fontWeight="bold" fontSize="11" textAnchor="middle">Bridgeless Mode (RN 0.74+)</text>
      
      <rect x="360" y="65" width="230" height="26" rx="4" fill={isDark ? "#065f46" : "#fff"} />
      <text x="475" y="82" fill={textColor} fontSize="9" textAnchor="middle">JS Runtime (Hermes)</text>
      
      <rect x="360" y="98" width="230" height="30" rx="4" fill={isDark ? "#047857" : "#a7f3d0"} stroke="#10b981" />
      <text x="475" y="116" fill="#fff" fontSize="9" fontWeight="bold" textAnchor="middle">JSI Runtime Dispatcher (Cero Bridge)</text>
      
      <rect x="360" y="135" width="230" height="26" rx="4" fill={isDark ? "#065f46" : "#fff"} />
      <text x="475" y="152" fill={textColor} fontSize="9" textAnchor="middle">TurboModules &amp; Fabric C++</text>
      
      <text x="475" y="182" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">⚡ El puente fue 100% deshabilitado y erradicado</text>
    </svg>
  );
  },

  "rn-fps-drops-profiling-flamegraph": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Header */}
      <text x="320" y="38" fill="#f59e0b" fontWeight="bold" fontSize="12" textAnchor="middle">Diagnóstico de Caídas de Frames (JS vs UI Thread)</text>

      {/* JS Thread Drop Diagnostic */}
      <rect x="30" y="55" width="270" height="135" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#38bdf8" strokeWidth="1.5" />
      <text x="165" y="76" fill="#38bdf8" fontWeight="bold" fontSize="10" textAnchor="middle">Caída en JS Thread (JS FPS &lt; 60)</text>
      <rect x="45" y="88" width="240" height="24" rx="4" fill={isDark ? "#0f172a" : "#fff"} />
      <text x="55" y="104" fill={textColor} fontSize="8">🔴 Síntoma: Retardo en respuesta al toque</text>
      <rect x="45" y="118" width="240" height="24" rx="4" fill={isDark ? "#0f172a" : "#fff"} />
      <text x="55" y="134" fill={textColor} fontSize="8">🔍 Causa: Renders masivos, loops síncronos</text>
      <rect x="45" y="148" width="240" height="24" rx="4" fill={isDark ? "#0369a1" : "#e0f2fe"} />
      <text x="55" y="164" fill={isDark ? "#fff" : "#0369a1"} fontSize="8" fontWeight="bold">🛠️ Herramienta: React Profiler / Flipper</text>

      {/* UI Thread Drop Diagnostic */}
      <rect x="340" y="55" width="270" height="135" rx="8" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#818cf8" strokeWidth="1.5" />
      <text x="475" y="76" fill="#818cf8" fontWeight="bold" fontSize="10" textAnchor="middle">Caída en UI Thread (UI FPS &lt; 60)</text>
      <rect x="355" y="88" width="240" height="24" rx="4" fill={isDark ? "#1e1b4b" : "#fff"} />
      <text x="365" y="104" fill={textColor} fontSize="8">🔴 Síntoma: Stutter en animaciones y scrolls</text>
      <rect x="355" y="118" width="240" height="24" rx="4" fill={isDark ? "#1e1b4b" : "#fff"} />
      <text x="365" y="134" fill={textColor} fontSize="8">🔍 Causa: Overdraw, imágenes 4K sin reescalar</text>
      <rect x="355" y="148" width="240" height="24" rx="4" fill={isDark ? "#4338ca" : "#c7d2fe"} />
      <text x="365" y="164" fill={isDark ? "#fff" : "#312e81"} fontSize="8" fontWeight="bold">🛠️ Herramienta: Xcode Instruments / Systrace</text>
    </svg>
  );
  },

  "rn-custom-turbomodule-cpp": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Step 1: Spec */}
      <rect x="30" y="35" width="165" height="150" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#38bdf8" strokeWidth="1.5" />
      <text x="112" y="58" fill="#38bdf8" fontWeight="bold" fontSize="10" textAnchor="middle">1. Spec TypeScript</text>
      <rect x="42" y="70" width="141" height="60" rx="4" fill={isDark ? "#0f172a" : "#fff"} />
      <text x="112" y="88" fill={textColor} fontSize="8" fontFamily="monospace" textAnchor="middle">export interface Spec &#123;</text>
      <text x="112" y="102" fill="#38bdf8" fontSize="8" fontFamily="monospace" textAnchor="middle">multiply(a: number,</text>
      <text x="112" y="116" fill="#38bdf8" fontSize="8" fontFamily="monospace" textAnchor="middle">b: number): number;</text>
      <text x="112" y="128" fill={textColor} fontSize="8" fontFamily="monospace" textAnchor="middle">&#125;</text>
      <text x="112" y="160" fill={subtextColor} fontSize="8" textAnchor="middle">TurboModuleRegistry</text>

      <path d="M195 110 L235 110" stroke="#38bdf8" strokeWidth="2" />

      {/* Step 2: Codegen */}
      <rect x="235" y="35" width="165" height="150" rx="8" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#818cf8" strokeWidth="1.5" />
      <text x="317" y="58" fill="#818cf8" fontWeight="bold" fontSize="10" textAnchor="middle">2. Codegen Pipeline</text>
      <rect x="247" y="70" width="141" height="60" rx="4" fill={isDark ? "#1e1b4b" : "#fff"} />
      <text x="317" y="92" fill={textColor} fontSize="8" textAnchor="middle">Genera headers C++</text>
      <text x="317" y="108" fill="#818cf8" fontSize="8" fontFamily="monospace" textAnchor="middle">NativeMathSpec.h</text>
      <text x="317" y="160" fill={subtextColor} fontSize="8" textAnchor="middle">Tipos C++ estrictos</text>

      <path d="M400 110 L440 110" stroke="#818cf8" strokeWidth="2" />

      {/* Step 3: Pure C++ Implementation */}
      <rect x="440" y="35" width="170" height="150" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="525" y="58" fill="#10b981" fontWeight="bold" fontSize="10" textAnchor="middle">3. Implementación C++</text>
      <rect x="452" y="70" width="146" height="60" rx="4" fill={isDark ? "#065f46" : "#fff"} />
      <text x="525" y="90" fill="#a7f3d0" fontSize="8" fontFamily="monospace" textAnchor="middle">double multiply(</text>
      <text x="525" y="104" fill="#a7f3d0" fontSize="8" fontFamily="monospace" textAnchor="middle">double a, double b) &#123;</text>
      <text x="525" y="118" fill="#fff" fontSize="8" fontFamily="monospace" fontWeight="bold" textAnchor="middle">return a * b; &#125;</text>
      <text x="525" y="150" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">100% Compartido iOS &amp; Android</text>
      <text x="525" y="168" fill={subtextColor} fontSize="7" textAnchor="middle">Sin envoltorios Java ni Swift</text>
    </svg>
  );
  }
};
