import { DiagramRegistry } from "../diagram.types";

/** Diagramas SVG del módulo Ionic. */
export const ionicDiagrams: DiagramRegistry = {
  "ionic-hybrid-crossplatform-architecture": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Top: Single Web Codebase */}
      <rect x="50" y="25" width="540" height="38" rx="6" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#38bdf8" strokeWidth="1.5" />
      <text x="320" y="48" fill="#38bdf8" fontWeight="bold" fontSize="11" textAnchor="middle">Código Web Único: HTML5, CSS3, TypeScript (Angular / React / Vue)</text>

      {/* Middle: Capacitor Bridge */}
      <rect x="120" y="75" width="400" height="30" rx="6" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#818cf8" strokeWidth="1.5" />
      <text x="320" y="94" fill="#818cf8" fontWeight="bold" fontSize="11" textAnchor="middle">Ionic UI (Web Components) + Capacitor Native Runtime</text>

      {/* Target 1: iOS */}
      <rect x="40" y="120" width="125" height="75" rx="6" fill={isDark ? "#0f172a" : "#fff"} stroke="#38bdf8" strokeWidth="1" />
      <text x="102" y="142" fill="#38bdf8" fontWeight="bold" fontSize="10" textAnchor="middle">iOS App</text>
      <text x="102" y="160" fill={textColor} fontSize="8" textAnchor="middle">WKWebView</text>
      <text x="102" y="176" fill={subtextColor} fontSize="7" textAnchor="middle">App Store (.ipa)</text>

      {/* Target 2: Android */}
      <rect x="180" y="120" width="125" height="75" rx="6" fill={isDark ? "#0f172a" : "#fff"} stroke="#10b981" strokeWidth="1" />
      <text x="242" y="142" fill="#10b981" fontWeight="bold" fontSize="10" textAnchor="middle">Android App</text>
      <text x="242" y="160" fill={textColor} fontSize="8" textAnchor="middle">System WebView</text>
      <text x="242" y="176" fill={subtextColor} fontSize="7" textAnchor="middle">Play Store (.aab)</text>

      {/* Target 3: Desktop */}
      <rect x="320" y="120" width="125" height="75" rx="6" fill={isDark ? "#0f172a" : "#fff"} stroke="#a855f7" strokeWidth="1" />
      <text x="382" y="142" fill="#a855f7" fontWeight="bold" fontSize="10" textAnchor="middle">Desktop</text>
      <text x="382" y="160" fill={textColor} fontSize="8" textAnchor="middle">Electron / Tauri</text>
      <text x="382" y="176" fill={subtextColor} fontSize="7" textAnchor="middle">Mac / Windows / Linux</text>

      {/* Target 4: PWA */}
      <rect x="460" y="120" width="130" height="75" rx="6" fill={isDark ? "#0f172a" : "#fff"} stroke="#f59e0b" strokeWidth="1" />
      <text x="525" y="142" fill="#f59e0b" fontWeight="bold" fontSize="10" textAnchor="middle">PWA Web</text>
      <text x="525" y="160" fill={textColor} fontSize="8" textAnchor="middle">Service Workers</text>
      <text x="525" y="176" fill={subtextColor} fontSize="7" textAnchor="middle">Instalable en Web</text>
    </svg>
  );
  },

  "ionic-vs-reactnative-vs-flutter": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Column 1: Ionic */}
      <rect x="30" y="25" width="175" height="170" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#38bdf8" strokeWidth="1.5" />
      <text x="117" y="48" fill="#38bdf8" fontWeight="bold" fontSize="11" textAnchor="middle">Ionic / Capacitor</text>
      <rect x="42" y="60" width="151" height="42" rx="4" fill={isDark ? "#0f172a" : "#fff"} />
      <text x="117" y="78" fill={textColor} fontSize="8" textAnchor="middle">WebView Nativa</text>
      <text x="117" y="92" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle">HTML5, CSS3, DOM</text>
      <text x="117" y="122" fill={textColor} fontSize="8" textAnchor="middle">• 100% Estándares Web</text>
      <text x="117" y="138" fill={textColor} fontSize="8" textAnchor="middle">• Reutiliza UI existente</text>
      <text x="117" y="154" fill={textColor} fontSize="8" textAnchor="middle">• PWA + Móvil idéntico</text>
      <text x="117" y="180" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">Time-to-Market récord</text>

      {/* Column 2: React Native */}
      <rect x="232" y="25" width="175" height="170" rx="8" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#818cf8" strokeWidth="1.5" />
      <text x="319" y="48" fill="#818cf8" fontWeight="bold" fontSize="11" textAnchor="middle">React Native</text>
      <rect x="244" y="60" width="151" height="42" rx="4" fill={isDark ? "#1e1b4b" : "#fff"} />
      <text x="319" y="78" fill={textColor} fontSize="8" textAnchor="middle">Vistas Nativas (Host Views)</text>
      <text x="319" y="92" fill="#818cf8" fontSize="8" fontWeight="bold" textAnchor="middle">UIView / android.view</text>
      <text x="319" y="122" fill={textColor} fontSize="8" textAnchor="middle">• JSI &amp; Fabric C++</text>
      <text x="319" y="138" fill={textColor} fontSize="8" textAnchor="middle">• Sin elementos DOM</text>
      <text x="319" y="154" fill={textColor} fontSize="8" textAnchor="middle">• Look &amp; Feel nativo</text>
      <text x="319" y="180" fill="#818cf8" fontSize="8" fontWeight="bold" textAnchor="middle">Rendimiento UI nativo</text>

      {/* Column 3: Flutter */}
      <rect x="435" y="25" width="175" height="170" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="522" y="48" fill="#10b981" fontWeight="bold" fontSize="11" textAnchor="middle">Flutter</text>
      <rect x="447" y="60" width="151" height="42" rx="4" fill={isDark ? "#065f46" : "#fff"} />
      <text x="522" y="78" fill={textColor} fontSize="8" textAnchor="middle">Motor Gráfico Directo</text>
      <text x="522" y="92" fill="#34d399" fontSize="8" fontWeight="bold" textAnchor="middle">Impeller / Skia en Canvas</text>
      <text x="522" y="122" fill={textColor} fontSize="8" textAnchor="middle">• Lenguaje Dart puro</text>
      <text x="522" y="138" fill={textColor} fontSize="8" textAnchor="middle">• Dibuja cada píxel</text>
      <text x="522" y="154" fill={textColor} fontSize="8" textAnchor="middle">• Render consistente</text>
      <text x="522" y="180" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">Control de píxeles 100%</text>
    </svg>
  );
  },

  "ionic-capacitor-vs-cordova": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Cordova Legacy */}
      <rect x="30" y="25" width="270" height="170" rx="8" fill={isDark ? "#450a0a" : "#fee2e2"} stroke="#ef4444" strokeWidth="1.5" />
      <text x="165" y="48" fill="#ef4444" fontWeight="bold" fontSize="11" textAnchor="middle">Apache Cordova (Legacy)</text>
      
      <rect x="45" y="60" width="240" height="26" rx="4" fill={isDark ? "#7f1d1d" : "#fff"} />
      <text x="55" y="77" fill={textColor} fontSize="8">📦 Proyectos nativos abstraídos como caja negra</text>
      
      <rect x="45" y="93" width="240" height="26" rx="4" fill={isDark ? "#7f1d1d" : "#fff"} />
      <text x="55" y="110" fill={textColor} fontSize="8">📄 Configuración centralizada en config.xml</text>
      
      <rect x="45" y="126" width="240" height="26" rx="4" fill={isDark ? "#7f1d1d" : "#fff"} />
      <text x="55" y="143" fill={textColor} fontSize="8">⚠️ Hooks frágiles que fallan al actualizar</text>
      
      <text x="165" y="180" fill="#ef4444" fontSize="8" fontWeight="bold" textAnchor="middle">Obsolescencia y mantenimiento complejo</text>

      {/* Capacitor Modern */}
      <rect x="340" y="25" width="270" height="170" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="475" y="48" fill="#10b981" fontWeight="bold" fontSize="11" textAnchor="middle">Capacitor (Oficial Moderno)</text>
      
      <rect x="355" y="60" width="240" height="26" rx="4" fill={isDark ? "#065f46" : "#fff"} />
      <text x="365" y="77" fill={textColor} fontSize="8">📁 Proyectos reales de Xcode y Android Studio</text>
      
      <rect x="355" y="93" width="240" height="26" rx="4" fill={isDark ? "#065f46" : "#fff"} />
      <text x="365" y="110" fill={textColor} fontSize="8">⚡ Soporte First-Class para TypeScript nativo</text>
      
      <rect x="355" y="126" width="240" height="26" rx="4" fill={isDark ? "#065f46" : "#fff"} />
      <text x="365" y="143" fill={textColor} fontSize="8">🔌 Plugins modernos con Swift y Kotlin directos</text>
      
      <text x="475" y="180" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">✓ Integración total con herramientas oficiales</text>
    </svg>
  );
  },

  "ionic-adaptive-styling-ios-md": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* iOS Mode */}
      <rect x="30" y="25" width="270" height="170" rx="8" fill={isDark ? "#0f172a" : "#f1f5f9"} stroke="#38bdf8" strokeWidth="1.5" />
      <text x="165" y="48" fill="#38bdf8" fontWeight="bold" fontSize="11" textAnchor="middle">Modo iOS (mode=&quot;ios&quot; - Apple HIG)</text>
      
      <rect x="50" y="60" width="230" height="35" rx="4" fill={isDark ? "#1e293b" : "#fff"} stroke={border} />
      <text x="65" y="82" fill="#38bdf8" fontSize="9">&lt; Volver</text>
      <text x="165" y="82" fill={textColor} fontSize="9" fontWeight="bold" textAnchor="middle">Título Centrado</text>
      
      <rect x="50" y="105" width="230" height="35" rx="4" fill={isDark ? "#1e293b" : "#fff"} />
      <text x="165" y="127" fill={textColor} fontSize="8" textAnchor="middle">Animación de transición swipe horizontal</text>
      
      <text x="165" y="165" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle">• Tipografía San Francisco / Bordes redondeados</text>
      <text x="165" y="180" fill={subtextColor} fontSize="7" textAnchor="middle">Efecto translúcido Backdrop Blur en Toolbar</text>

      {/* MD Mode */}
      <rect x="340" y="25" width="270" height="170" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="475" y="48" fill="#10b981" fontWeight="bold" fontSize="11" textAnchor="middle">Modo Android (mode=&quot;md&quot; - Material Design)</text>
      
      <rect x="360" y="60" width="230" height="35" rx="4" fill={isDark ? "#065f46" : "#fff"} stroke={border} />
      <text x="375" y="82" fill="#10b981" fontSize="9">☰</text>
      <text x="400" y="82" fill={textColor} fontSize="9" fontWeight="bold">Título a la Izquierda</text>
      
      <rect x="360" y="105" width="230" height="35" rx="4" fill={isDark ? "#065f46" : "#fff"} />
      <text x="475" y="127" fill={textColor} fontSize="8" textAnchor="middle">Efecto Ripple (onda expansiva) al tocar</text>
      
      <text x="475" y="165" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">• Tipografía Roboto / Elevación con Sombras</text>
      <text x="475" y="180" fill={subtextColor} fontSize="7" textAnchor="middle">Transiciones verticales fluidas de Material 3</text>
    </svg>
  );
  },

  "ionic-web-components-stencil": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Left: Stencil Compiler */}
      <rect x="30" y="35" width="165" height="150" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#38bdf8" strokeWidth="1.5" />
      <text x="112" y="58" fill="#38bdf8" fontWeight="bold" fontSize="11" textAnchor="middle">Stencil Compiler</text>
      <rect x="42" y="70" width="141" height="50" rx="4" fill={isDark ? "#0f172a" : "#fff"} />
      <text x="112" y="90" fill={textColor} fontSize="8" textAnchor="middle">Compila componentes</text>
      <text x="112" y="104" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle">TypeScript + JSX</text>
      <text x="112" y="145" fill={subtextColor} fontSize="8" textAnchor="middle">Cero sobrecarga de runtime</text>

      <path d="M195 110 L235 110" stroke="#38bdf8" strokeWidth="2" />

      {/* Center: Standard Web Components */}
      <rect x="235" y="35" width="170" height="150" rx="8" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#818cf8" strokeWidth="1.5" />
      <text x="320" y="58" fill="#818cf8" fontWeight="bold" fontSize="10" textAnchor="middle">Ionic Web Components</text>
      <rect x="247" y="70" width="146" height="50" rx="4" fill={isDark ? "#1e1b4b" : "#fff"} />
      <text x="320" y="88" fill={textColor} fontSize="8" fontFamily="monospace" textAnchor="middle">&lt;ion-button&gt;</text>
      <text x="320" y="102" fill={textColor} fontSize="8" fontFamily="monospace" textAnchor="middle">&lt;ion-modal&gt;</text>
      <text x="320" y="140" fill="#a5b4fc" fontSize="8" textAnchor="middle">Shadow DOM encapsulado</text>
      <text x="320" y="155" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">W3C Custom Elements</text>

      <path d="M405 110 L445 110" stroke="#818cf8" strokeWidth="2" />

      {/* Right: Consumer Frameworks */}
      <rect x="445" y="35" width="165" height="150" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="527" y="58" fill="#10b981" fontWeight="bold" fontSize="10" textAnchor="middle">Framework Agnóstico</text>
      <rect x="455" y="70" width="145" height="24" rx="3" fill={isDark ? "#065f46" : "#fff"} />
      <text x="527" y="86" fill="#ef4444" fontSize="8" fontWeight="bold" textAnchor="middle">@ionic/angular</text>
      <rect x="455" y="98" width="145" height="24" rx="3" fill={isDark ? "#065f46" : "#fff"} />
      <text x="527" y="114" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle">@ionic/react</text>
      <rect x="455" y="126" width="145" height="24" rx="3" fill={isDark ? "#065f46" : "#fff"} />
      <text x="527" y="142" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">@ionic/vue</text>
      <text x="527" y="170" fill={subtextColor} fontSize="7" textAnchor="middle">O JavaScript / HTML plano</text>
    </svg>
  );
  },

  "ionic-navigation-lifecycle-hooks": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Header */}
      <text x="320" y="35" fill="#38bdf8" fontWeight="bold" fontSize="12" textAnchor="middle">Ciclo de Vida de Navegación Móvil en Ionic</text>

      {/* Entering Phase */}
      <rect x="30" y="55" width="270" height="85" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="165" y="75" fill="#10b981" fontWeight="bold" fontSize="10" textAnchor="middle">Fase de Entrada (Entering)</text>
      <rect x="45" y="85" width="115" height="42" rx="4" fill={isDark ? "#065f46" : "#fff"} />
      <text x="102" y="102" fill="#a7f3d0" fontSize="8" fontWeight="bold" textAnchor="middle">ionViewWillEnter</text>
      <text x="102" y="116" fill={textColor} fontSize="7" textAnchor="middle">Antes de animar</text>
      <rect x="170" y="85" width="115" height="42" rx="4" fill={isDark ? "#065f46" : "#fff"} />
      <text x="227" y="102" fill="#a7f3d0" fontSize="8" fontWeight="bold" textAnchor="middle">ionViewDidEnter</text>
      <text x="227" y="116" fill={textColor} fontSize="7" textAnchor="middle">Animación completa</text>

      {/* Exiting Phase */}
      <rect x="340" y="55" width="270" height="85" rx="8" fill={isDark ? "#713f12" : "#fef9c3"} stroke="#f59e0b" strokeWidth="1.5" />
      <text x="475" y="75" fill="#f59e0b" fontWeight="bold" fontSize="10" textAnchor="middle">Fase de Salida (Exiting)</text>
      <rect x="355" y="85" width="115" height="42" rx="4" fill={isDark ? "#78350f" : "#fff"} />
      <text x="412" y="102" fill="#fde68a" fontSize="8" fontWeight="bold" textAnchor="middle">ionViewWillLeave</text>
      <text x="412" y="116" fill={textColor} fontSize="7" textAnchor="middle">Comienza transición</text>
      <rect x="480" y="85" width="115" height="42" rx="4" fill={isDark ? "#78350f" : "#fff"} />
      <text x="537" y="102" fill="#fde68a" fontSize="8" fontWeight="bold" textAnchor="middle">ionViewDidLeave</text>
      <text x="537" y="116" fill={textColor} fontSize="7" textAnchor="middle">Pasa a segundo plano</text>

      {/* Bottom Insight */}
      <rect x="45" y="152" width="550" height="38" rx="6" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke={border} />
      <text x="320" y="168" fill={textColor} fontSize="8" textAnchor="middle">⚠️ ¡La página NO se destruye al navegar! Permanece viva en el DOM en la pila de navegación.</text>
      <text x="320" y="181" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">Por ello, ngOnInit solo corre una vez; usa ionViewWillEnter para refrescar datos.</text>
    </svg>
  );
  },

  "ionic-router-outlet-stack": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Shell: IonRouterOutlet */}
      <rect x="30" y="25" width="580" height="165" rx="10" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#38bdf8" strokeWidth="1.5" />
      <text x="50" y="47" fill="#38bdf8" fontWeight="bold" fontSize="11" fontFamily="monospace">&lt;ion-router-outlet&gt; (Pila de Navegación Móvil)</text>

      {/* Page 1 (Root in stack) */}
      <rect x="50" y="65" width="165" height="110" rx="6" fill={isDark ? "#0f172a" : "#fff"} stroke="#94a3b8" />
      <text x="132" y="88" fill="#94a3b8" fontWeight="bold" fontSize="10" textAnchor="middle">Página 1 (Listado)</text>
      <text x="132" y="108" fill={subtextColor} fontSize="8" textAnchor="middle">En segundo plano</text>
      <text x="132" y="124" fill={textColor} fontSize="8" textAnchor="middle">DOM en memoria</text>
      <text x="132" y="145" fill="#10b981" fontSize="8" textAnchor="middle">Preserva scroll</text>

      <path d="M215 120 L245 120" stroke="#38bdf8" strokeWidth="2" />

      {/* Page 2 (Active Foreground) */}
      <rect x="245" y="65" width="175" height="110" rx="6" fill={isDark ? "#0284c7" : "#e0f2fe"} stroke="#0284c7" strokeWidth="1.5" />
      <text x="332" y="88" fill={isDark ? "#fff" : "#0369a1"} fontWeight="bold" fontSize="10" textAnchor="middle">Página 2 (Detalle Activo)</text>
      <text x="332" y="108" fill={isDark ? "#fff" : "#0369a1"} fontSize="8" textAnchor="middle">Visible en pantalla</text>
      <text x="332" y="128" fill={isDark ? "#e0f2fe" : "#0284c7"} fontSize="8" fontWeight="bold" textAnchor="middle">ionViewDidEnter activo</text>
      <text x="332" y="150" fill={isDark ? "#fff" : "#0369a1"} fontSize="8" textAnchor="middle">Transición swipe back</text>

      {/* Swipe gesture arrow */}
      <path d="M280 155 L255 155" stroke="#ef4444" strokeWidth="2" />
      <text x="332" y="165" fill="#ef4444" fontSize="7" textAnchor="middle">Swipe-to-go-back</text>

      {/* Web Router contrast */}
      <rect x="440" y="65" width="155" height="110" rx="6" fill={isDark ? "#450a0a" : "#fee2e2"} stroke="#ef4444" strokeWidth="1" />
      <text x="517" y="88" fill="#ef4444" fontWeight="bold" fontSize="9" textAnchor="middle">Router Web Clásico</text>
      <text x="517" y="108" fill={textColor} fontSize="8" textAnchor="middle">Destruye componentes</text>
      <text x="517" y="124" fill={textColor} fontSize="8" textAnchor="middle">anteriores al navegar</text>
      <text x="517" y="150" fill="#ef4444" fontSize="8" textAnchor="middle">Pierde estado y scroll</text>
    </svg>
  );
  },

  "ionic-capacitor-camera-pipeline": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Step 1: JS Invocation */}
      <rect x="30" y="40" width="165" height="135" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#38bdf8" strokeWidth="1.5" />
      <text x="112" y="65" fill="#38bdf8" fontWeight="bold" fontSize="10" textAnchor="middle">1. Código TypeScript</text>
      <rect x="42" y="80" width="141" height="40" rx="4" fill={isDark ? "#0f172a" : "#fff"} />
      <text x="112" y="96" fill={textColor} fontSize="8" fontFamily="monospace" textAnchor="middle">Camera.getPhoto(&#123;</text>
      <text x="112" y="110" fill="#38bdf8" fontSize="8" fontFamily="monospace" textAnchor="middle">resultType: Uri &#125;)</text>
      <text x="112" y="145" fill={subtextColor} fontSize="8" textAnchor="middle">@capacitor/camera</text>

      <path d="M195 108 L235 108" stroke="#38bdf8" strokeWidth="2" />

      {/* Step 2: Capacitor Native Bridge */}
      <rect x="235" y="40" width="170" height="135" rx="8" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#818cf8" strokeWidth="1.5" />
      <text x="320" y="65" fill="#818cf8" fontWeight="bold" fontSize="10" textAnchor="middle">2. Capacitor Bridge</text>
      <rect x="247" y="80" width="146" height="40" rx="4" fill={isDark ? "#1e1b4b" : "#fff"} />
      <text x="320" y="96" fill={textColor} fontSize="8" textAnchor="middle">Verifica permisos SO</text>
      <text x="320" y="110" fill="#818cf8" fontSize="8" textAnchor="middle">NSCameraUsageDescription</text>
      <text x="320" y="145" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">Diálogo de permisos</text>

      <path d="M405 108 L445 108" stroke="#818cf8" strokeWidth="2" />

      {/* Step 3: Native Output */}
      <rect x="445" y="40" width="165" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="527" y="65" fill="#10b981" fontWeight="bold" fontSize="10" textAnchor="middle">3. Salida Nativa</text>
      <rect x="455" y="80" width="145" height="40" rx="4" fill={isDark ? "#065f46" : "#fff"} />
      <text x="527" y="96" fill="#a7f3d0" fontSize="8" fontFamily="monospace" textAnchor="middle">image.webPath</text>
      <text x="527" y="110" fill="#fff" fontSize="8" textAnchor="middle">Retorno síncrono URL</text>
      <text x="527" y="145" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">Muestra en &lt;img&gt; sin lag</text>
    </svg>
  );
  },

  "ionic-storage-preferences-sqlite": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Preferences */}
      <rect x="30" y="25" width="270" height="170" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#38bdf8" strokeWidth="1.5" />
      <text x="165" y="48" fill="#38bdf8" fontWeight="bold" fontSize="11" textAnchor="middle">@capacitor/preferences</text>
      <rect x="50" y="62" width="230" height="35" rx="4" fill={isDark ? "#0f172a" : "#fff"} />
      <text x="165" y="84" fill={textColor} fontSize="9" textAnchor="middle">Almacenamiento Clave-Valor</text>
      
      <text x="165" y="118" fill={textColor} fontSize="8" textAnchor="middle">• iOS: NSUserDefaults nativo</text>
      <text x="165" y="134" fill={textColor} fontSize="8" textAnchor="middle">• Android: SharedPreferences</text>
      <text x="165" y="150" fill={textColor} fontSize="8" textAnchor="middle">• Web: localStorage fallback</text>
      
      <text x="165" y="180" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle">Ideal para JWT, tema y flags</text>

      {/* SQLite */}
      <rect x="340" y="25" width="270" height="170" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="475" y="48" fill="#10b981" fontWeight="bold" fontSize="11" textAnchor="middle">@capacitor-community/sqlite</text>
      <rect x="360" y="62" width="230" height="35" rx="4" fill={isDark ? "#065f46" : "#fff"} />
      <text x="475" y="84" fill="#fff" fontSize="9" fontWeight="bold" textAnchor="middle">Base de Datos Relacional SQLite</text>
      
      <text x="475" y="118" fill={textColor} fontSize="8" textAnchor="middle">• Tablas, índices, transacciones ACID</text>
      <text x="475" y="134" fill={textColor} fontSize="8" textAnchor="middle">• Cifrado por hardware con SQLCipher</text>
      <text x="475" y="150" fill={textColor} fontSize="8" textAnchor="middle">• Miles de registros sin cuelgues de RAM</text>
      
      <text x="475" y="180" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">Ideal para Apps Offline-First</text>
    </svg>
  );
  },

  "ionic-modal-sheet-breakpoints": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Phone Mockup Frame */}
      <rect x="40" y="25" width="160" height="170" rx="16" fill={isDark ? "#0f172a" : "#fff"} stroke={border} strokeWidth="2" />
      
      {/* Backdrop Dim */}
      <rect x="45" y="30" width="150" height="85" fill="#000" opacity="0.4" />
      
      {/* Sheet Modal Drawer */}
      <rect x="45" y="95" width="150" height="95" rx="12" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#38bdf8" />
      {/* Drag handle */}
      <rect x="105" y="102" width="30" height="3" rx="1.5" fill="#94a3b8" />
      <text x="120" y="125" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle">&lt;ion-modal&gt;</text>
      <text x="120" y="145" fill={textColor} fontSize="7" textAnchor="middle">Sheet Modal Arrastrable</text>

      {/* Breakpoints Logic */}
      <rect x="230" y="25" width="380" height="170" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#38bdf8" strokeWidth="1.5" />
      <text x="420" y="48" fill="#38bdf8" fontWeight="bold" fontSize="11" textAnchor="middle">Configuración de Puntos de Interrupción (Breakpoints)</text>
      
      <rect x="250" y="60" width="340" height="30" rx="4" fill={isDark ? "#0f172a" : "#fff"} />
      <text x="260" y="79" fill="#10b981" fontSize="9" fontFamily="monospace">[breakpoints]=&quot;[0, 0.25, 0.5, 1.0]&quot;</text>
      
      <rect x="250" y="98" width="340" height="28" rx="4" fill={isDark ? "#0f172a" : "#fff"} />
      <text x="260" y="116" fill="#818cf8" fontSize="9" fontFamily="monospace">[initialBreakpoint]=&quot;0.5&quot;</text>
      
      <text x="420" y="145" fill={textColor} fontSize="8" textAnchor="middle">• Gesto táctil nativo con arrastre de inercia y rebote</text>
      <text x="420" y="160" fill={textColor} fontSize="8" textAnchor="middle">• 0.25: Barra compacta inferior | 0.5: Media pantalla | 1.0: Pantalla completa</text>
      <text x="420" y="180" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">✓ Idéntico a los Bottom Sheets de iOS Maps y Apple Music</text>
    </svg>
  );
  },

  "ionic-animation-controller-gpu": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* createAnimation Code */}
      <rect x="30" y="25" width="270" height="170" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#38bdf8" strokeWidth="1.5" />
      <text x="165" y="48" fill="#38bdf8" fontWeight="bold" fontSize="11" textAnchor="middle">AnimationController API</text>
      
      <rect x="45" y="60" width="240" height="85" rx="4" fill={isDark ? "#0f172a" : "#fff"} />
      <text x="55" y="78" fill="#38bdf8" fontSize="8" fontFamily="monospace">const anim = createAnimation()</text>
      <text x="65" y="92" fill={textColor} fontSize="8" fontFamily="monospace">.addElement(myCard)</text>
      <text x="65" y="106" fill="#10b981" fontSize="8" fontFamily="monospace">.fromTo(&apos;transform&apos;, &apos;...&apos;)</text>
      <text x="65" y="120" fill="#10b981" fontSize="8" fontFamily="monospace">.fromTo(&apos;opacity&apos;, &apos;0&apos;, &apos;1&apos;)</text>
      <text x="55" y="134" fill="#38bdf8" fontSize="8" fontFamily="monospace">anim.play();</text>
      
      <text x="165" y="165" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">Cero librerías externas adicionales</text>
      <text x="165" y="180" fill={subtextColor} fontSize="7" textAnchor="middle">Construido sobre Web Animations API nativa</text>

      {/* GPU Compositor Pipeline */}
      <rect x="340" y="25" width="270" height="170" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="475" y="48" fill="#10b981" fontWeight="bold" fontSize="11" textAnchor="middle">Aceleración por Hardware (GPU)</text>
      
      <rect x="355" y="60" width="240" height="35" rx="4" fill={isDark ? "#065f46" : "#fff"} />
      <text x="475" y="77" fill="#34d399" fontSize="8" fontWeight="bold" textAnchor="middle">Solo altera transform y opacity</text>
      <text x="475" y="89" fill={textColor} fontSize="7" textAnchor="middle">Evita Reflow (Layout) y Repaint costosos</text>
      
      <rect x="355" y="105" width="240" height="40" rx="4" fill={isDark ? "#047857" : "#a7f3d0"} />
      <text x="475" y="124" fill="#fff" fontSize="10" fontWeight="bold" textAnchor="middle">60 / 120 FPS en el Compositor Thread</text>
      <text x="475" y="138" fill="#fff" fontSize="8" textAnchor="middle">Fluidez táctil sin interferencias del hilo JS</text>
      
      <text x="475" y="175" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">✓ Limpieza automática de estilos al finalizar</text>
    </svg>
  );
  },

  "ionic-virtual-scroll-infinite": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Virtual Scroll Window */}
      <rect x="30" y="25" width="270" height="170" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="165" y="48" fill="#10b981" fontWeight="bold" fontSize="11" textAnchor="middle">Virtual Scrolling (Reciclaje de DOM)</text>
      
      <rect x="50" y="60" width="230" height="22" rx="3" fill={isDark ? "#065f46" : "#a7f3d0"} opacity="0.4" />
      <text x="165" y="75" fill={textColor} fontSize="8" textAnchor="middle">Buffer Superior (Fuera de vista)</text>
      
      <rect x="50" y="86" width="230" height="42" rx="4" fill={isDark ? "#047857" : "#34d399"} stroke="#10b981" />
      <text x="165" y="104" fill="#fff" fontSize="9" fontWeight="bold" textAnchor="middle">Ventana Activa Visible en Pantalla</text>
      <text x="165" y="118" fill="#fff" fontSize="8" textAnchor="middle">Solo 6-8 nodos DOM creados en total</text>
      
      <rect x="50" y="132" width="230" height="22" rx="3" fill={isDark ? "#065f46" : "#a7f3d0"} opacity="0.4" />
      <text x="165" y="147" fill={textColor} fontSize="8" textAnchor="middle">Buffer Inferior (Fuera de vista)</text>
      
      <text x="165" y="180" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">✓ Evita agotar la memoria de la WebView</text>

      {/* Infinite Scroll */}
      <rect x="340" y="25" width="270" height="170" rx="8" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#818cf8" strokeWidth="1.5" />
      <text x="475" y="48" fill="#818cf8" fontWeight="bold" fontSize="11" textAnchor="middle">&lt;ion-infinite-scroll&gt;</text>
      
      <rect x="355" y="65" width="240" height="50" rx="4" fill={isDark ? "#1e1b4b" : "#fff"} />
      <text x="475" y="86" fill={textColor} fontSize="8" textAnchor="middle">Disparador al acercarse al final:</text>
      <text x="475" y="102" fill="#818cf8" fontSize="8" fontFamily="monospace" textAnchor="middle">threshold=&quot;100px&quot;</text>
      
      <rect x="355" y="125" width="240" height="35" rx="4" fill={isDark ? "#4338ca" : "#c7d2fe"} />
      <text x="475" y="142" fill={isDark ? "#fff" : "#312e81"} fontSize="8" fontWeight="bold" textAnchor="middle">Descarga lote de 20 items en background</text>
      <text x="475" y="154" fill={isDark ? "#e0e7ff" : "#4338ca"} fontSize="7" textAnchor="middle">event.target.complete()</text>
      
      <text x="475" y="180" fill="#818cf8" fontSize="8" fontWeight="bold" textAnchor="middle">Paginación transparente e infinita</text>
    </svg>
  );
  },

  "ionic-safe-areas-notch-inset": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Notch Area */}
      <rect x="180" y="25" width="280" height="30" rx="6" fill={isDark ? "#450a0a" : "#fee2e2"} stroke="#ef4444" strokeWidth="1.5" />
      <circle cx="320" cy="40" r="5" fill="#ef4444" />
      <text x="250" y="44" fill="#ef4444" fontSize="8" fontWeight="bold">Notch / Dynamic Island</text>
      <text x="410" y="44" fill={textColor} fontSize="8">env(safe-area-inset-top)</text>

      {/* Safe Screen Content */}
      <rect x="180" y="65" width="280" height="90" rx="6" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="320" y="100" fill="#10b981" fontWeight="bold" fontSize="11" textAnchor="middle">Área Segura de Contenido (Safe Area)</text>
      <text x="320" y="118" fill={textColor} fontSize="8" textAnchor="middle">Botones, textos y listas dentro de los márgenes</text>
      <text x="320" y="134" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">Cero solapamiento con la cámara frontal</text>

      {/* Bottom Home Indicator */}
      <rect x="180" y="165" width="280" height="28" rx="6" fill={isDark ? "#713f12" : "#fef9c3"} stroke="#f59e0b" strokeWidth="1.5" />
      <rect x="280" y="177" width="80" height="4" rx="2" fill="#f59e0b" />
      <text x="410" y="182" fill={textColor} fontSize="7">env(safe-area-inset-bottom)</text>

      {/* Side explanations */}
      <rect x="25" y="55" width="135" height="110" rx="6" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke={border} />
      <text x="92" y="80" fill="#38bdf8" fontWeight="bold" fontSize="9" textAnchor="middle">Capacitor StatusBar</text>
      <text x="92" y="100" fill={textColor} fontSize="7" textAnchor="middle">StatusBar.setStyle()</text>
      <text x="92" y="118" fill={textColor} fontSize="7" textAnchor="middle">StatusBar.setOverlays-</text>
      <text x="92" y="130" fill={textColor} fontSize="7" textAnchor="middle">WebView({'{ overlays: true }'})</text>
      <text x="92" y="152" fill="#10b981" fontSize="7" fontWeight="bold" textAnchor="middle">Color adaptativo</text>

      <rect x="480" y="55" width="135" height="110" rx="6" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke={border} />
      <text x="547" y="80" fill="#a855f7" fontWeight="bold" fontSize="9" textAnchor="middle">CSS Viewport Meta</text>
      <text x="547" y="100" fill={textColor} fontSize="7" textAnchor="middle">viewport-fit=cover</text>
      <text x="547" y="125" fill={textColor} fontSize="7" textAnchor="middle">Permite extender el</text>
      <text x="547" y="138" fill={textColor} fontSize="7" textAnchor="middle">fondo a pantalla completa</text>
      <text x="547" y="152" fill="#a855f7" fontSize="7" fontWeight="bold" textAnchor="middle">Immersive UI</text>
    </svg>
  );
  },

  "ionic-debugging-chrome-safari-inspect": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Android Debugging */}
      <rect x="30" y="25" width="270" height="170" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="165" y="48" fill="#10b981" fontWeight="bold" fontSize="11" textAnchor="middle">Depuración Android (Google Chrome)</text>
      
      <rect x="50" y="62" width="230" height="28" rx="4" fill={isDark ? "#065f46" : "#fff"} />
      <text x="165" y="80" fill="#fff" fontSize="9" fontFamily="monospace" textAnchor="middle">chrome://inspect/#devices</text>
      
      <text x="165" y="112" fill={textColor} fontSize="8" textAnchor="middle">1. Activar &apos;Depuración por USB&apos; en Ajustes</text>
      <text x="165" y="128" fill={textColor} fontSize="8" textAnchor="middle">2. Conectar dispositivo Android por cable</text>
      <text x="165" y="144" fill={textColor} fontSize="8" textAnchor="middle">3. Click en &apos;Inspect&apos; sobre la WebView activa</text>
      
      <text x="165" y="178" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">Acceso completo a DevTools, Console y Network</text>

      {/* iOS Debugging */}
      <rect x="340" y="25" width="270" height="170" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#38bdf8" strokeWidth="1.5" />
      <text x="475" y="48" fill="#38bdf8" fontWeight="bold" fontSize="11" textAnchor="middle">Depuración iOS (Apple Safari)</text>
      
      <rect x="360" y="62" width="230" height="28" rx="4" fill={isDark ? "#0f172a" : "#fff"} />
      <text x="475" y="80" fill="#38bdf8" fontSize="9" textAnchor="middle">Safari ➔ Menú Desarrollo ➔ [iPhone]</text>
      
      <text x="475" y="112" fill={textColor} fontSize="8" textAnchor="middle">1. Ajustes iPhone ➔ Safari ➔ Avanzado ➔ Web Inspector</text>
      <text x="475" y="128" fill={textColor} fontSize="8" textAnchor="middle">2. Conectar iPhone a Mac y confiar en el ordenador</text>
      <text x="475" y="144" fill={textColor} fontSize="8" textAnchor="middle">3. Inspeccionar el contenedor WKWebView</text>
      
      <text x="475" y="178" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle">Depuración de CSS, breakpoints JS y Storage</text>
    </svg>
  );
  },

  "ionic-push-notifications-flow": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Step 1: Device Registration */}
      <rect x="30" y="40" width="160" height="135" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#38bdf8" strokeWidth="1.5" />
      <text x="110" y="65" fill="#38bdf8" fontWeight="bold" fontSize="10" textAnchor="middle">1. Registro del Token</text>
      <rect x="42" y="80" width="136" height="40" rx="4" fill={isDark ? "#0f172a" : "#fff"} />
      <text x="110" y="98" fill={textColor} fontSize="8" textAnchor="middle">PushNotifications</text>
      <text x="110" y="110" fill="#38bdf8" fontSize="8" fontFamily="monospace" textAnchor="middle">.register()</text>
      <text x="110" y="145" fill={subtextColor} fontSize="8" textAnchor="middle">Pide permisos</text>

      <path d="M190 108 L235 108" stroke="#38bdf8" strokeWidth="2" />

      {/* Step 2: Push Gateway (APNs / FCM) */}
      <rect x="235" y="40" width="170" height="135" rx="8" fill={isDark ? "#713f12" : "#fef9c3"} stroke="#f59e0b" strokeWidth="1.5" />
      <text x="320" y="65" fill="#f59e0b" fontWeight="bold" fontSize="10" textAnchor="middle">2. Pasarelas Cloud</text>
      <rect x="247" y="80" width="146" height="40" rx="4" fill={isDark ? "#78350f" : "#fff"} />
      <text x="320" y="98" fill="#f59e0b" fontSize="8" fontWeight="bold" textAnchor="middle">APNs (Apple) / FCM (Google)</text>
      <text x="320" y="110" fill={textColor} fontSize="7" textAnchor="middle">Entrega token único al backend</text>
      <text x="320" y="145" fill={subtextColor} fontSize="8" textAnchor="middle">Infraestructura nativa</text>

      <path d="M405 108 L450 108" stroke="#f59e0b" strokeWidth="2" />

      {/* Step 3: Notification Received */}
      <rect x="450" y="40" width="160" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="530" y="65" fill="#10b981" fontWeight="bold" fontSize="10" textAnchor="middle">3. Manejo en la App</text>
      <rect x="462" y="80" width="136" height="40" rx="4" fill={isDark ? "#065f46" : "#fff"} />
      <text x="530" y="96" fill="#a7f3d0" fontSize="8" textAnchor="middle">pushNotification-</text>
      <text x="530" y="110" fill="#a7f3d0" fontSize="8" textAnchor="middle">ActionPerformed</text>
      <text x="530" y="145" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">Deep link a la vista</text>
    </svg>
  );
  },

  "ionic-custom-capacitor-plugin": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* TS Interface */}
      <rect x="30" y="35" width="165" height="150" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#38bdf8" strokeWidth="1.5" />
      <text x="112" y="58" fill="#38bdf8" fontWeight="bold" fontSize="10" textAnchor="middle">1. Interfaz TypeScript</text>
      <rect x="42" y="70" width="141" height="55" rx="4" fill={isDark ? "#0f172a" : "#fff"} />
      <text x="112" y="88" fill={textColor} fontSize="8" fontFamily="monospace" textAnchor="middle">export interface Echo &#123;</text>
      <text x="112" y="102" fill="#38bdf8" fontSize="8" fontFamily="monospace" textAnchor="middle">echo(opts: &#123;val: str&#125;):</text>
      <text x="112" y="116" fill="#38bdf8" fontSize="8" fontFamily="monospace" textAnchor="middle">Promise&lt;&#123;val: str&#125;&gt;;</text>
      <text x="112" y="150" fill={subtextColor} fontSize="8" textAnchor="middle">Contrato fuertemente tipado</text>

      <path d="M195 110 L235 110" stroke="#38bdf8" strokeWidth="2" />

      {/* iOS Swift Implementation */}
      <rect x="235" y="35" width="175" height="150" rx="8" fill={isDark ? "#0284c7" : "#e0f2fe"} stroke="#0284c7" strokeWidth="1.5" />
      <text x="322" y="58" fill={isDark ? "#fff" : "#0369a1"} fontWeight="bold" fontSize="10" textAnchor="middle">2. iOS (Swift / CAPPlugin)</text>
      <rect x="247" y="70" width="151" height="55" rx="4" fill={isDark ? "#0f172a" : "#fff"} />
      <text x="322" y="88" fill={textColor} fontSize="8" fontFamily="monospace" textAnchor="middle">@objc public func echo(</text>
      <text x="322" y="102" fill="#0284c7" fontSize="8" fontFamily="monospace" textAnchor="middle">_ call: CAPPluginCall) &#123;</text>
      <text x="322" y="116" fill={textColor} fontSize="8" fontFamily="monospace" textAnchor="middle">call.resolve([&quot;val&quot;: ...])&#125;</text>
      <text x="322" y="150" fill={isDark ? "#fff" : "#0369a1"} fontSize="8" fontWeight="bold" textAnchor="middle">Xcode Framework nativo</text>

      <path d="M410 110 L450 110" stroke="#10b981" strokeWidth="2" />

      {/* Android Kotlin Implementation */}
      <rect x="450" y="35" width="160" height="150" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="530" y="58" fill="#10b981" fontWeight="bold" fontSize="10" textAnchor="middle">3. Android (Kotlin / Java)</text>
      <rect x="460" y="70" width="140" height="55" rx="4" fill={isDark ? "#065f46" : "#fff"} />
      <text x="530" y="88" fill="#a7f3d0" fontSize="8" fontFamily="monospace" textAnchor="middle">@PluginMethod</text>
      <text x="530" y="102" fill="#fff" fontSize="8" fontFamily="monospace" textAnchor="middle">fun echo(call: PluginCall)&#123;</text>
      <text x="530" y="116" fill="#a7f3d0" fontSize="8" fontFamily="monospace" textAnchor="middle">call.resolve(ret) &#125;</text>
      <text x="530" y="150" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">Android Studio Gradle</text>
    </svg>
  );
  },

  "ionic-biometric-auth-keychain": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* User Interaction */}
      <rect x="30" y="35" width="165" height="150" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#38bdf8" strokeWidth="1.5" />
      <text x="112" y="58" fill="#38bdf8" fontWeight="bold" fontSize="10" textAnchor="middle">1. Sensor Biométrico</text>
      <circle cx="112" cy="95" r="22" fill={isDark ? "#0f172a" : "#fff"} stroke="#38bdf8" />
      <text x="112" y="99" fill="#38bdf8" fontSize="16" textAnchor="middle">🔒</text>
      <text x="112" y="135" fill={textColor} fontSize="8" textAnchor="middle">Face ID / Touch ID / Huella</text>
      <text x="112" y="155" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">Validado por hardware</text>

      <path d="M195 110 L235 110" stroke="#38bdf8" strokeWidth="2" />

      {/* Hardware Enclave */}
      <rect x="235" y="35" width="170" height="150" rx="8" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#818cf8" strokeWidth="1.5" />
      <text x="320" y="58" fill="#818cf8" fontWeight="bold" fontSize="10" textAnchor="middle">2. Secure Enclave / Keystore</text>
      <rect x="247" y="75" width="146" height="45" rx="4" fill={isDark ? "#1e1b4b" : "#fff"} />
      <text x="320" y="94" fill={textColor} fontSize="8" textAnchor="middle">Criptoprocesador aislado</text>
      <text x="320" y="108" fill="#818cf8" fontSize="8" fontWeight="bold" textAnchor="middle">Desbloquea clave simétrica</text>
      <text x="320" y="145" fill={subtextColor} fontSize="8" textAnchor="middle">Protección anti-tamper</text>

      <path d="M405 110 L445 110" stroke="#818cf8" strokeWidth="2" />

      {/* Decrypted Payload */}
      <rect x="445" y="35" width="165" height="150" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="527" y="58" fill="#10b981" fontWeight="bold" fontSize="10" textAnchor="middle">3. Desbloqueo Seguro</text>
      <rect x="455" y="75" width="145" height="45" rx="4" fill={isDark ? "#065f46" : "#fff"} />
      <text x="527" y="94" fill="#a7f3d0" fontSize="8" fontFamily="monospace" textAnchor="middle">JWT Session Token</text>
      <text x="527" y="108" fill="#fff" fontSize="8" textAnchor="middle">Entregado a la WebView</text>
      <text x="527" y="145" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">Acceso Bancario Concedido</text>
    </svg>
  );
  },

  "ionic-deep-linking-universal-links": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Web Link Click */}
      <rect x="30" y="35" width="160" height="150" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#38bdf8" strokeWidth="1.5" />
      <text x="110" y="58" fill="#38bdf8" fontWeight="bold" fontSize="10" textAnchor="middle">1. Enlace Universal</text>
      <rect x="42" y="75" width="136" height="40" rx="4" fill={isDark ? "#0f172a" : "#fff"} />
      <text x="110" y="94" fill={textColor} fontSize="7" fontFamily="monospace" textAnchor="middle">https://empresa.com/</text>
      <text x="110" y="106" fill="#38bdf8" fontSize="7" fontFamily="monospace" textAnchor="middle">pedido/8492</text>
      <text x="110" y="140" fill={subtextColor} fontSize="8" textAnchor="middle">Email / SMS / Web</text>

      <path d="M190 110 L230 110" stroke="#38bdf8" strokeWidth="2" />

      {/* OS Domain Verification */}
      <rect x="230" y="35" width="180" height="150" rx="8" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#818cf8" strokeWidth="1.5" />
      <text x="320" y="58" fill="#818cf8" fontWeight="bold" fontSize="10" textAnchor="middle">2. Validación del SO</text>
      <rect x="242" y="75" width="156" height="45" rx="4" fill={isDark ? "#1e1b4b" : "#fff"} />
      <text x="320" y="93" fill={textColor} fontSize="7" textAnchor="middle">iOS: apple-app-site-association</text>
      <text x="320" y="106" fill={textColor} fontSize="7" textAnchor="middle">Android: assetlinks.json</text>
      <text x="320" y="140" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">Firma de dominio verificada</text>

      <path d="M410 110 L450 110" stroke="#818cf8" strokeWidth="2" />

      {/* App Launch Direct */}
      <rect x="450" y="35" width="160" height="150" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="530" y="58" fill="#10b981" fontWeight="bold" fontSize="10" textAnchor="middle">3. Enrutamiento en App</text>
      <rect x="462" y="75" width="136" height="45" rx="4" fill={isDark ? "#065f46" : "#fff"} />
      <text x="530" y="93" fill="#a7f3d0" fontSize="8" fontFamily="monospace" textAnchor="middle">App.addListener(</text>
      <text x="530" y="106" fill="#a7f3d0" fontSize="8" fontFamily="monospace" textAnchor="middle">&apos;appUrlOpen&apos;)</text>
      <text x="530" y="140" fill="#fff" fontSize="8" fontWeight="bold" textAnchor="middle">Abre pantalla de Pedido</text>
    </svg>
  );
  },

  "ionic-security-obfuscation-pinning": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Header */}
      <text x="320" y="38" fill="#ef4444" fontWeight="bold" fontSize="12" textAnchor="middle">Estrategia de Seguridad en Profundidad para Ionic / Capacitor</text>

      {/* Defense 1: Obfuscation */}
      <rect x="30" y="55" width="135" height="135" rx="6" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#38bdf8" strokeWidth="1.5" />
      <text x="97" y="78" fill="#38bdf8" fontWeight="bold" fontSize="9" textAnchor="middle">1. Ofuscación JS</text>
      <text x="97" y="102" fill={textColor} fontSize="8" textAnchor="middle">• Terser &amp; JScrambler</text>
      <text x="97" y="120" fill={textColor} fontSize="8" textAnchor="middle">• Renombrado variables</text>
      <text x="97" y="138" fill={textColor} fontSize="8" textAnchor="middle">• Strings encriptados</text>
      <text x="97" y="165" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle">Anti Reverse-Eng</text>

      {/* Defense 2: SSL Pinning */}
      <rect x="175" y="55" width="135" height="135" rx="6" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#818cf8" strokeWidth="1.5" />
      <text x="242" y="78" fill="#818cf8" fontWeight="bold" fontSize="9" textAnchor="middle">2. SSL Pinning</text>
      <text x="242" y="102" fill={textColor} fontSize="8" textAnchor="middle">• Valida hash clave pública</text>
      <text x="242" y="120" fill={textColor} fontSize="8" textAnchor="middle">• Bloquea proxys MitM</text>
      <text x="242" y="138" fill={textColor} fontSize="8" textAnchor="middle">• (Charles / Burp Suite)</text>
      <text x="242" y="165" fill="#818cf8" fontSize="8" fontWeight="bold" textAnchor="middle">Cifrado Estricto</text>

      {/* Defense 3: Root/Jailbreak */}
      <rect x="320" y="55" width="140" height="135" rx="6" fill={isDark ? "#713f12" : "#fef9c3"} stroke="#f59e0b" strokeWidth="1.5" />
      <text x="390" y="78" fill="#f59e0b" fontWeight="bold" fontSize="9" textAnchor="middle">3. Anti-Root / Tamper</text>
      <text x="390" y="102" fill={textColor} fontSize="8" textAnchor="middle">• Detecta Magisk / Cydia</text>
      <text x="390" y="120" fill={textColor} fontSize="8" textAnchor="middle">• Detección de depurador</text>
      <text x="390" y="138" fill={textColor} fontSize="8" textAnchor="middle">• Cierra la app si hay riesgo</text>
      <text x="390" y="165" fill="#f59e0b" fontSize="8" fontWeight="bold" textAnchor="middle">Entorno Hostil</text>

      {/* Defense 4: Webview Lockdown */}
      <rect x="470" y="55" width="140" height="135" rx="6" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="540" y="78" fill="#10b981" fontWeight="bold" fontSize="9" textAnchor="middle">4. Bloqueo WebView</text>
      <text x="540" y="102" fill={textColor} fontSize="8" textAnchor="middle">• Desactiva web debugging</text>
      <text x="540" y="120" fill={textColor} fontSize="8" textAnchor="middle">• Encripta SQLite local</text>
      <text x="540" y="138" fill={textColor} fontSize="8" textAnchor="middle">• Desactiva capturas pantalla</text>
      <text x="540" y="165" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">Cero Fugas</text>
    </svg>
  );
  },

  "ionic-live-updates-ota": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Cloud Deploy */}
      <rect x="30" y="35" width="165" height="150" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#38bdf8" strokeWidth="1.5" />
      <text x="112" y="58" fill="#38bdf8" fontWeight="bold" fontSize="10" textAnchor="middle">1. Nube (Appflow / Cloud)</text>
      <rect x="42" y="72" width="141" height="42" rx="4" fill={isDark ? "#0f172a" : "#fff"} />
      <text x="112" y="90" fill={textColor} fontSize="8" textAnchor="middle">git push origin main</text>
      <text x="112" y="104" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle">Nuevo bundle HTML/JS/CSS</text>
      <text x="112" y="145" fill={subtextColor} fontSize="8" textAnchor="middle">Genera manifiesto delta</text>

      <path d="M195 110 L235 110" stroke="#38bdf8" strokeWidth="2" />

      {/* Background Delta Download */}
      <rect x="235" y="35" width="170" height="150" rx="8" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#818cf8" strokeWidth="1.5" />
      <text x="320" y="58" fill="#818cf8" fontWeight="bold" fontSize="10" textAnchor="middle">2. Descarga en Segundo Plano</text>
      <rect x="247" y="72" width="146" height="42" rx="4" fill={isDark ? "#1e1b4b" : "#fff"} />
      <text x="320" y="90" fill={textColor} fontSize="8" textAnchor="middle">Descarga silenciosa solo de</text>
      <text x="320" y="104" fill="#818cf8" fontSize="8" fontWeight="bold" textAnchor="middle">archivos modificados (.zip)</text>
      <text x="320" y="145" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">Cero consumo de datos extra</text>

      <path d="M405 110 L445 110" stroke="#818cf8" strokeWidth="2" />

      {/* Hot Reload on Next Launch */}
      <rect x="445" y="35" width="165" height="150" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="527" y="58" fill="#10b981" fontWeight="bold" fontSize="10" textAnchor="middle">3. Aplicación Instantánea</text>
      <rect x="455" y="72" width="145" height="42" rx="4" fill={isDark ? "#065f46" : "#fff"} />
      <text x="527" y="90" fill="#a7f3d0" fontSize="8" textAnchor="middle">Reemplaza carpeta web</text>
      <text x="527" y="104" fill="#fff" fontSize="8" fontWeight="bold" textAnchor="middle">Sin pasar por App Store</text>
      <text x="527" y="145" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">⚡ Bugfixes en producción en 2m</text>
    </svg>
  );
  }
};
