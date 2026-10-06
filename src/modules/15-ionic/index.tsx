import { ISection } from "../../types";

export const questionsIonic: ISection = {
  id: "ionic",
  title: "Ionic",
  collapse: "collapseIonic",
  icon: "ionic",
  category: "frameworks",
  description:
    "Aplicaciones móviles híbridas con Capacitor, Web Components, arquitectura offline-first y acceso a APIs de hardware nativas.",
  questions: [
    {
        "id": "ionic-01",
        "title": "¿Qué es Ionic Framework y para qué se utiliza?",
        "level": "basico",
        "tags": [
            "Ionic",
            "Capacitor",
            "WebView",
            "PWA",
            "Cross-Platform"
        ],
        "response": "Ionic Framework es un toolkit de interfaz de usuario de código abierto diseñado para construir aplicaciones multiplataforma de alto rendimiento (iOS, Android, PWA y aplicaciones de escritorio con Electron) utilizando una base de código única basada en tecnologías web estándar (HTML, CSS y TypeScript/JavaScript).\n\nA diferencia de frameworks tradicionales acoplados a una sola librería, Ionic es agnóstico del framework frontend: ofrece soporte de primera clase con adaptadores oficiales para **Angular** (`@ionic/angular`), **React** (`@ionic/react`), **Vue** (`@ionic/vue`) e incluso **JavaScript Vanilla** con Web Components puros.\n\nArquitectura fundamental de una aplicación Ionic:\n1. **Capa de Presentación (UI Toolkit)**: Más de 100 componentes visuales (`IonButton`, `IonList`, `IonModal`, `IonTabs`) construidos como Custom Elements con Stencil, garantizando aislamiento total mediante Shadow DOM y soporte nativo para temas Material Design ('md') y Cupertino ('ios').\n2. **Capa de Renderizado (WebView)**: El código web se ejecuta dentro del motor web optimizado del sistema operativo (`WKWebView` en iOS y Android System WebView/Chromium en Android), acelerado por GPU de hardware.\n3. **Capa de Enlace Nativo (Capacitor Runtime)**: Provee un puente bidireccional asíncrono y de bajísima latencia que expone el hardware y APIs del sistema operativo (Cámara, GPS, Biometría, FileSystem, SQLite) a través de promesas de TypeScript seguras.",
        "codeExample": {
            "language": "tsx",
            "code": "import React from 'react';\nimport {\n  IonApp,\n  IonHeader,\n  IonToolbar,\n  IonTitle,\n  IonContent,\n  IonButton,\n  IonCard,\n  IonCardHeader,\n  IonCardTitle,\n  IonCardContent,\n  setupIonicReact\n} from '@ionic/react';\n\n/* Importación de estilos base de Ionic */\nimport '@ionic/react/css/core.css';\nimport '@ionic/react/css/normalize.css';\nimport '@ionic/react/css/structure.css';\nimport '@ionic/react/css/typography.css';\n\nsetupIonicReact({\n  mode: 'ios', // Opcional: forzar estilo iOS o dejar automático según dispositivo\n  animated: true\n});\n\nexport const HomeScreen: React.FC = () => (\n  <IonApp>\n    <IonHeader translucent>\n      <IonToolbar color=\"primary\">\n        <IonTitle>Finanzas Móviles</IonTitle>\n      </IonToolbar>\n    </IonHeader>\n\n    <IonContent fullscreen className=\"ion-padding\">\n      <IonCard>\n        <IonCardHeader>\n          <IonCardTitle>Saldo Disponible</IonCardTitle>\n        </IonCardHeader>\n        <IonCardContent>\n          <p className=\"text-2xl font-bold\">$14,250.00 USD</p>\n          <IonButton expand=\"block\" color=\"secondary\" className=\"ion-margin-top\">\n            Transferir Fondos\n          </IonButton>\n        </IonCardContent>\n      </IonCard>\n    </IonContent>\n  </IonApp>\n);"
        },
        "visualDiagram": {
            "id": "diag-ionic-01",
            "diagramType": "ionic-hybrid-crossplatform-architecture",
            "title": "Arquitectura Híbrida de Ionic con Capacitor y WebView",
            "caption": "Capas desde la UI Web (React/Angular/Vue) hasta el hardware del dispositivo mediante Capacitor Bridge."
        },
        "interviewTips": {
            "whatInterviewersWant": "Claridad conceptual: Ionic es el UI toolkit y Capacitor es el runtime de conexión nativa. Comprensión del modelo de renderizado en WebView frente a alternativas 100% nativas y el valor de time-to-market.",
            "commonPitfalls": [
                "Confundir Ionic con Apache Cordova (Cordova es legacy; Capacitor es la herramienta moderna estándar).",
                "Asumir que Ionic solo funciona con Angular (es agnóstico desde la versión 4 y soporte formal para React y Vue).",
                "Creer que una WebView no puede alcanzar 60 FPS (con aceleración por hardware y Web Animations API rinde excelentemente)."
            ],
            "followUps": [
                "¿Qué frameworks de UI puede usar Ionic (Angular, React, Vue)?",
                "¿Cuándo Ionic no es la mejor opción?"
            ]
        },
        "quiz": {
            "question": "¿Cuál es la función exacta de Capacitor en una aplicación moderna construida con Ionic Framework?",
            "options": [
                "Compilar el código TypeScript directamente a código máquina ARM binario en tiempo de compilación.",
                "Servir como runtime de contenedor y puente nativo que expone APIs de hardware a la WebView mediante promesas tipadas.",
                "Actuar exclusivamente como emulador local de Android e iOS en el navegador web.",
                "Remplazar el DOM de la WebView por componentes de UIKit y Jetpack Compose en tiempo de ejecución."
            ],
            "correctIndex": 1,
            "explanation": "Capacitor aloja la aplicación web dentro de una WebView nativa del sistema operativo y gestiona un puente (Bridge) asíncrono y altamente eficiente que traduce llamadas de JavaScript/TypeScript hacia APIs y código nativo (Swift, Java, Kotlin)."
        }
    },
    {
        "id": "ionic-02",
        "title": "¿Qué diferencia hay entre Ionic y React Native / Flutter?",
        "level": "basico",
        "tags": [
            "Ionic",
            "React Native",
            "Flutter",
            "WebView",
            "Native Bridges",
            "Skia"
        ],
        "response": "La diferencia fundamental entre **Ionic**, **React Native** y **Flutter** radica en su **estrategia de renderizado** y el nivel de acoplamiento con la plataforma nativa:\n\n1. **Ionic (Enfoque Web-First / WebView Híbrido)**:\n- **Renderizado**: Se ejecuta dentro de la WebView nativa del dispositivo (`WKWebView` / Android System WebView).\n- **Primitivas visuales**: DOM estándar (HTML/CSS), enriquecido con Web Components compilados con Stencil.\n- **Acceso nativo**: A través del puente de Capacitor o plugins personalizados.\n- **Ventajas**: Reutilización del 100% de la lógica y librerías web (npm, Tailwind, TanStack Query, Zustand), ciclo de desarrollo instantáneo en navegador, excelente como PWA.\n\n2. **React Native (Enfoque Native Bridge / Fabric)**:\n- **Renderizado**: No utiliza WebView. El código JavaScript/TypeScript interactúa con la arquitectura JSI (JavaScript Interface) para instanciar componentes nativos directos del SO (`UIView` en iOS, `android.view.View` en Android).\n- **Primitivas visuales**: `<View>`, `<Text>`, `<ScrollView>`.\n- **Ventajas**: Look & feel y comportamiento gestual 100% idéntico al sistema nativo, mayor rendimiento en transiciones complejas de hardware.\n\n3. **Flutter (Enfoque Canvas Propio / Skia & Impeller)**:\n- **Renderizado**: Dibuja cada píxel en la pantalla utilizando su propio motor gráfico acelerado por GPU (Impeller en iOS, Vulkan/Skia en Android). No utiliza ni DOM ni vistas del SO.\n- **Lenguaje**: Dart.\n- **Ventajas**: Consistencia visual pixel-perfect milimétrica en cualquier dispositivo y animaciones fluidas a 120 FPS.",
        "codeExample": {
            "language": "tsx",
            "code": "/* Tabla comparativa de decisiones de arquitectura móvil */\nexport interface PlatformComparison {\n  framework: 'Ionic + Capacitor' | 'React Native' | 'Flutter';\n  renderEngine: string;\n  codeReusabilityWithWeb: string;\n  idealUseCase: string;\n}\n\nexport const ARCHITECTURE_MATRIX: PlatformComparison[] = [\n  {\n    framework: 'Ionic + Capacitor',\n    renderEngine: 'WKWebView / Android WebView (Acelerado por GPU)',\n    codeReusabilityWithWeb: '90% - 100% (Mismo stack web React/Angular/Vue)',\n    idealUseCase: 'Apps corporativas, dashboards, e-commerce, PWAs y time-to-market veloz'\n  },\n  {\n    framework: 'React Native',\n    renderEngine: 'Vistas nativas de iOS/Android vía JSI / Fabric',\n    codeReusabilityWithWeb: '40% - 70% (Lógica compartida, UI nativa distinta)',\n    idealUseCase: 'Redes sociales con gestos intensivos, feeds multimedia continuos'\n  },\n  {\n    framework: 'Flutter',\n    renderEngine: 'Canvas propio GPU (Impeller / Skia en Dart)',\n    codeReusabilityWithWeb: 'Baja (Ecosistema Dart independiente)',\n    idealUseCase: 'UIs personalizadas con diseño idéntico estricto en todas las pantallas'\n  }\n];"
        },
        "visualDiagram": {
            "diagramType": "ionic-vs-reactnative-vs-flutter",
            "title": "Comparativa de Arquitecturas de Renderizado: Ionic vs React Native vs Flutter",
            "id": "diag-ionic-02",
            "caption": "WebView vs Primitivas del SO (JSI) vs Canvas Gráfico de Renderizado Propio (Impeller/Skia)."
        },
        "interviewTips": {
            "whatInterviewersWant": "Capacidad para recomendar objetivamente el framework correcto según requerimientos técnicos y presupuesto. Comprensión clara de los compromisos (trade-offs): velocidad de entrega vs costo de micro-optimización nativa. Entender que Ionic permite compilar simultáneamente como sitio Web, PWA y apps de Apple Store y Google Play.",
            "commonPitfalls": [
                "Decir despectivamente que 'Ionic es lento': en smartphones modernos la WebView rinde de sobra para el 95% de aplicaciones comerciales.",
                "Ignorar el impacto del mantenimiento: mantener React Native o Flutter requiere lidiar con bridges nativos en cada actualización de SO."
            ],
            "followUps": [
                "¿Qué diferencias de rendimiento hay entre WebView y renderizado nativo?",
                "¿Cómo elegirías entre Ionic, React Native y Flutter para un proyecto?"
            ]
        },
        "quiz": {
            "question": "¿Cuál es la principal ventaja técnica de Ionic con Capacitor sobre React Native para un equipo con una plataforma web existente?",
            "options": [
                "Ionic genera código assembler de mayor fidelidad que el motor V8 de Android.",
                "Permite reutilizar directamente componentes, librerías CSS, paquetes npm y lógica web existente sin reescribir la UI para primitivas de vista nativas.",
                "Ionic no requiere certificados de desarrollador de Apple o Google para publicar en las tiendas oficiales.",
                "Ionic compila automáticamente a Dart para aprovechar el motor Impeller en segundo plano."
            ],
            "explanation": "Al ejecutarse sobre la WebView utilizando estándares web y componentes React/Angular/Vue, un equipo puede compartir el 90-100% del código, diseño y librerías entre la aplicación web y móvil.",
            "correctIndex": 1
        }
    },
    {
        "id": "ionic-03",
        "title": "¿Qué es Capacitor y por qué reemplazó a Apache Cordova?",
        "level": "basico",
        "tags": [
            "Capacitor",
            "Cordova",
            "Native Projects",
            "TypeScript",
            "CLI"
        ],
        "response": "**Capacitor** es el runtime multiplataforma nativo oficial creado por el equipo de Ionic para sustituir por completo al histórico **Apache Cordova (PhoneGap)**.\n\nAunque ambos persiguen el objetivo de ejecutar código web en dispositivos móviles accediendo a hardware nativo, Capacitor resuelve las fallas estructurales fundamentales de Cordova:\n\n1. **Proyectos Nativos como Artefactos de Origen (Source Artifacts)**:\n- *Cordova*: Los directorios de `ios` y `android` eran generados dinámicamente como artefactos de compilación temporales en `.gitignore`. Si editabas código en Xcode o Android Studio, Cordova lo sobreescribía.\n- *Capacitor*: Trata los directorios `/ios` y `/android` como **código fuente de primera clase** versionado en Git. Los desarrolladores pueden abrir Xcode (`npx cap open ios`) y Android Studio directamente, configurar capacidades nativas (Sign In with Apple, Push, HealthKit) y escribir código Swift/Kotlin sin que la CLI de Ionic lo borre.\n\n2. **Arquitectura de Plugins Moderna con TypeScript**:\n- *Cordova*: Utilizaba un complejo sistema de hooks en XML (`plugin.xml`), configuraciones frágiles y callbacks globales en JavaScript con soporte deficiente de tipos.\n- *Capacitor*: Todos los plugins oficiales y de la comunidad son paquetes npm estándar escritos con soporte nativo de **TypeScript** y promesas asíncronas (`async/await`).\n\n3. **PWA y Soporte Web Out-of-the-Box**:\n- En Capacitor, los plugins tienen soporte de fallback para la Web (`web.ts`), lo que permite que una llamada a la API Geolocation o Camera funcione en el navegador de desarrollo sin lanzar excepciones.",
        "codeExample": {
            "language": "tsx",
            "code": "// capacitor.config.ts - Configuración tipada de Capacitor en la raíz del proyecto\nimport type { CapacitorConfig } from '@capacitor/cli';\n\nconst config: CapacitorConfig = {\n  appId: 'com.empresa.banca',\n  appName: 'BancaDigital',\n  webDir: 'dist', // Carpeta de build de Vite/React/Angular\n  bundledWebRuntime: false,\n  server: {\n    androidScheme: 'https', // Carga segura en Android sin problemas de CORS local\n    cleartext: false\n  },\n  plugins: {\n    SplashScreen: {\n      launchShowDuration: 2000,\n      backgroundColor: '#0f172a',\n      androidSplashResourceName: 'splash'\n    },\n    PushNotifications: {\n      presentationOptions: ['badge', 'sound', 'alert']\n    }\n  }\n};\n\nexport default config;\n\n/* Comandos de consola esenciales de Capacitor:\n * 1. pnpm run build       -> Genera el bundle en /dist\n * 2. npx cap sync         -> Copia el bundle web y sincroniza plugins con /ios y /android\n * 3. npx cap open ios     -> Abre el proyecto real en Xcode\n * 4. npx cap open android -> Abre el proyecto real en Android Studio\n */"
        },
        "visualDiagram": {
            "diagramType": "ionic-capacitor-vs-cordova",
            "title": "Arquitectura de Gestión de Proyectos: Capacitor vs Cordova",
            "id": "diag-ionic-03",
            "caption": "Proyectos nativos versionados en Git vs generación dinámica opaca con sobreescritura."
        },
        "interviewTips": {
            "whatInterviewersWant": "Entender la filosofía de 'Native Projects as Source Code' en Capacitor. Conocer el flujo de trabajo: `build` -> `cap sync` -> `cap run` / abrir en IDE nativo. Mencionar la facilidad para depurar errores nativos directamente en Xcode o Android Studio.",
            "commonPitfalls": [
                "Creer que `npx cap sync` borra las personalizaciones hechas en Swift o Kotlin en el proyecto nativo (sólo sincroniza plugins y copia la carpeta web).",
                "Olvidar compilar la app web (`pnpm run build`) antes de ejecutar `npx cap sync` o `npx cap copy`."
            ],
            "followUps": [
                "¿Por qué Capacitor trata los proyectos nativos como código fuente versionado?",
                "¿Pueden usarse plugins de Cordova en Capacitor?"
            ]
        },
        "quiz": {
            "question": "¿Por qué es una gran ventaja que Capacitor mantenga las carpetas /ios y /android versionadas en Git como código fuente?",
            "options": [
                "Porque elimina la necesidad de tener instalados Xcode y Android Studio en las máquinas de desarrollo.",
                "Porque permite a los desarrolladores integrar SDKs nativos, configurar permisos en Info.plist/AndroidManifest y editar Swift/Kotlin sin riesgo de ser sobreescritos por la CLI.",
                "Porque permite compilar proyectos de iOS directamente en entornos Windows sin usar hardware de Apple.",
                "Porque reduce automáticamente el peso de las imágenes SVG dentro del bundle web."
            ],
            "explanation": "Al tratar los proyectos nativos como código fuente, los equipos pueden usar bibliotecas nativas de terceros (Cocoapods, SPM, Gradle), modificar configuraciones de seguridad y ajustar código nativo directamente sin depender de hooks de compilación frágiles.",
            "correctIndex": 1
        }
    },
    {
        "id": "ionic-04",
        "title": "¿Cómo maneja Ionic la apariencia visual adaptativa (iOS vs Android)?",
        "level": "basico",
        "tags": [
            "Mode",
            "iOS",
            "Material Design",
            "CSS Variables",
            "Platform Detection"
        ],
        "response": "Ionic implementa un sofisticado sistema de **estilo adaptativo (Adaptive Styling)** que ajusta automáticamente la tipografía, iconos, animaciones y estructura visual de cada componente para que luzca y se comporte como una aplicación nativa según el sistema operativo en el que se ejecuta:\n\n1. **Detección Automática de Modo ('ios' vs 'md')**:\n- Cuando la app inicia, Ionic evalúa el User Agent del dispositivo y la API `window.matchMedia`.\n- En dispositivos Apple (iPhone, iPad), aplica el modo `ios`, implementando las guías de **Apple Human Interface Guidelines** (títulos grandes colapsables con scroll, botones con esquinas redondeadas suaves, transiciones de deslizamiento lateral hacia atrás y diálogos de acción centrados en la parte inferior).\n- En dispositivos Android, aplica el modo `md`, implementando **Material Design** de Google (efectos ripple táctiles en botones, encabezados planos con elevaciones de sombra sutiles, transiciones de fade/escalado y tabs en la parte superior o inferior con indicador activo).\n\n2. **Personalización y Forzado de Modos**:\n- Es posible forzar un modo globalmente en `setupIonicReact({ mode: 'ios' })` o a nivel de componente individual mediante la prop `mode='ios'` o `mode='md'`.\n\n3. **Variables CSS Específicas de Plataforma**:\n- Ionic provee clases globales en el elemento `body` (`.ios`, `.md`, `.plt-mobile`, `.plt-android`, `.plt-ios`) permitiendo aplicar reglas de estilo CSS condicionales con selectores puros o variables temáticas (`--ion-font-family`, `--ion-color-primary`).",
        "codeExample": {
            "language": "tsx",
            "code": "import React from 'react';\nimport {\n  IonHeader,\n  IonToolbar,\n  IonTitle,\n  IonButtons,\n  IonBackButton,\n  IonButton,\n  IonIcon,\n  IonContent,\n  isPlatform\n} from '@ionic/react';\nimport { shareOutline, shareSocialSharp } from 'ionicons/icons';\n\nexport const AdaptiveHeader: React.FC = () => {\n  // Detección programática de plataforma\n  const isIos = isPlatform('ios');\n\n  return (\n    <IonHeader translucent={isIos}>\n      <IonToolbar>\n        <IonButtons slot=\"start\">\n          {/* El botón de volver adopta flecha minimalista en iOS y flecha Material en Android */}\n          <IonBackButton defaultHref=\"/home\" text={isIos ? 'Atrás' : ''} />\n        </IonButtons>\n\n        <IonTitle>{isIos ? 'Detalle de Cuenta' : 'DETALLE DE CUENTA'}</IonTitle>\n\n        <IonButtons slot=\"end\">\n          <IonButton onClick={() => console.log('Compartir')}>\n            {/* Iconos adaptativos automáticos de Ionicons */}\n            <IonIcon\n              slot=\"icon-only\"\n              ios={shareOutline}\n              md={shareSocialSharp}\n            />\n          </IonButton>\n        </IonButtons>\n      </IonToolbar>\n    </IonHeader>\n  );\n};"
        },
        "visualDiagram": {
            "diagramType": "ionic-adaptive-styling-ios-md",
            "title": "Mapeo Visual Adaptativo de Ionic: Modo iOS vs Modo Material Design",
            "id": "diag-ionic-04",
            "caption": "Comparativa de componentes: Header translúcido vs Flat elevation, Back button y Action Sheets."
        },
        "interviewTips": {
            "whatInterviewersWant": "Demostrar conocimiento de la utilidad `isPlatform()` para lógica condicional de plataforma. Saber cómo Ionicons gestiona pares de iconos `ios={...}` y `md={...}` en un solo componente `<IonIcon>`. Explicar cómo personalizar CSS scoped utilizando selectores de modo `.ios ion-toolbar` y `.md ion-toolbar`.",
            "commonPitfalls": [
                "Escribir cientos de líneas de JavaScript para detectar el OS en lugar de apoyarse en las clases automáticas `.ios` y `.md` de Ionic.",
                "Romper las expectativas de los usuarios forzando Material Design en iOS o iOS Cupertino en Android sin justificación de marca."
            ],
            "followUps": [
                "¿Cómo forzarías el modo iOS en Android?",
                "¿Qué variables CSS expone Ionic para el theming?"
            ]
        },
        "quiz": {
            "question": "¿Cómo maneja Ionicons el icono correcto para cada sistema operativo en un componente IonIcon?",
            "options": [
                "Descarga dos paquetes de fuentes diferentes según la tienda de aplicaciones donde se publique.",
                "Permite definir las propiedades 'ios' y 'md' en el componente IonIcon, seleccionando la variante correspondiente según el modo activo.",
                "Obliga al desarrollador a crear dos componentes completamente separados para Android e iOS.",
                "Convierte todos los iconos a imágenes PNG de mapa de bits en tiempo de ejecución."
            ],
            "explanation": "IonIcon acepta las propiedades `ios` y `md` (por ejemplo `ios={heartOutline}` y `md={heartSharp}`) y renderiza automáticamente la variante visual adecuada según el modo de plataforma detectado.",
            "correctIndex": 1
        }
    },
    {
        "id": "ionic-05",
        "title": "¿Qué son los Web Components en Ionic y qué rol cumple Stencil?",
        "level": "basico",
        "tags": [
            "Web Components",
            "Stencil",
            "Shadow DOM",
            "Framework Agnostic",
            "Custom Elements"
        ],
        "response": "A partir de **Ionic 4**, el equipo de ingeniería reescribió todos los componentes visuales de Ionic desde cero como **Web Components estándar de la W3C**, utilizando su propio compilador de alto rendimiento llamado **Stencil**.\n\n1. **¿Qué son los Web Components en Ionic?**:\n- Son elementos HTML personalizados (`<ion-button>`, `<ion-card>`, `<ion-item>`) registrados en el navegador mediante la API nativa `customElements.define()`.\n- Utilizan **Shadow DOM** para encapsular completamente sus estilos internos y estructura de marcado. Esto previene que los estilos CSS globales de la aplicación colisionen con los estilos del componente o viceversa.\n- Se comunican a través de propiedades estándar del DOM, eventos personalizados (`CustomEvent`) y CSS Custom Properties (variables CSS expuestas como `--background`, `--color`, `--border-radius`).\n\n2. **El rol de Stencil**:\n- **Stencil** es un compilador y toolchain que toma componentes escritos en TypeScript con decoradores similares a Angular y JSX similar a React, y genera Web Components puros 100% nativos del navegador, ultra ligeros y sin runtime externo pesado.\n- Genera automáticamente los bindings y wrappers oficiales para Angular (`@ionic/angular`), React (`@ionic/react`) y Vue (`@ionic/vue`), permitiendo que los componentes nativos se sientan y comporten como componentes idiomáticos en cada framework.\n- Incluye soporte de lazy loading granular: sólo se descargan del bundle los Web Components que realmente se renderizan en la vista actual.",
        "codeExample": {
            "language": "tsx",
            "code": "/* Demostración de cómo se estiliza un Web Component con Shadow DOM en Ionic */\nimport React from 'react';\nimport { IonButton } from '@ionic/react';\n\n// Archivo CSS: custom-button.css\n/*\n❌ INCORRECTO: Intentar sobreescribir clases internas del Shadow DOM:\nion-button .button-inner {\n  background: #ff5722; // FALLARÁ porque el Shadow Root aísla este selector\n}\n\n✅ CORRECTO: Usar las CSS Shadow Custom Properties expuestas por el componente:\nion-button.custom-action {\n  --background: #ff5722;\n  --background-hover: #f4511e;\n  --border-radius: 24px;\n  --box-shadow: 0 4px 12px rgba(255, 87, 34, 0.4);\n  --color: #ffffff;\n}\n*/\n\nexport const ShadowDomButtonDemo: React.FC = () => (\n  <div className=\"p-4\">\n    <IonButton className=\"custom-action\" expand=\"block\">\n      Confirmar Operación Cifrada\n    </IonButton>\n  </div>\n);"
        },
        "visualDiagram": {
            "diagramType": "ionic-web-components-stencil",
            "title": "Arquitectura de Componentes Ionic con Stencil y Shadow DOM",
            "id": "diag-ionic-05",
            "caption": "De TypeScript + JSX a Web Components estándar con wrappers idiomáticos para React, Angular y Vue."
        },
        "interviewTips": {
            "whatInterviewersWant": "Comprender el concepto de Shadow DOM y por qué las reglas de CSS tradicionales no pueden penetrar el shadow root sin CSS Variables. Reconocer el papel de Stencil como compilador que genera Web Components estándares y sus wrappers de framework. Explicar la ventaja de que los componentes de Ionic nunca quedan obsoletos cuando un framework cambia de versión mayor.",
            "commonPitfalls": [
                "Usar `!important` en selectores CSS generales intentando forzar estilos en elementos dentro del Shadow DOM.",
                "Creer que Stencil es un framework pesado en tiempo de ejecución: Stencil desaparece en compilación y deja JavaScript estándar."
            ],
            "followUps": [
                "¿Qué ventajas aporta que los componentes de Ionic sean Web Components?",
                "¿Cómo se personalizan mediante CSS Shadow Parts?"
            ]
        },
        "quiz": {
            "question": "¿Por qué no se pueden estilizar los elementos internos de un botón de Ionic (`<ion-button>`) usando selectores CSS convencionales como `ion-button > button`?",
            "options": [
                "Porque Ionic bloquea el acceso a las hojas de estilo mediante una directiva de seguridad CSP en tiempo de compilación.",
                "Porque el componente encapsula su marcado interno dentro de un Shadow DOM, requiriendo el uso de CSS Custom Properties (--variable) o la pseudo-clase ::part().",
                "Porque los botones de Ionic se renderizan en un elemento `<canvas>` gráfico que no posee nodos de texto.",
                "Porque la etiqueta `<ion-button>` se reemplaza por un iframe asíncrono en cada render."
            ],
            "explanation": "El Shadow DOM impide que los selectores CSS externos penetren la barrera de encapsulación. Para personalizar los estilos, se deben utilizar las variables CSS (`--background`, etc.) o el atributo `::part()` provistos por el componente.",
            "correctIndex": 1
        }
    },
    {
        "id": "ionic-06",
        "title": "¿Cómo funciona el ciclo de vida de navegación en Ionic?",
        "level": "medio",
        "tags": [
            "Lifecycle",
            "ionViewWillEnter",
            "ionViewDidEnter",
            "ionViewWillLeave",
            "ionViewDidLeave"
        ],
        "response": "En las aplicaciones web tradicionales, cuando un usuario navega a una nueva ruta, la vista anterior se destruye por completo del DOM y se crea la nueva. Sin embargo, en aplicaciones móviles nativas, las páginas anteriores se mantienen en memoria dentro de una **pila de navegación (Navigation Stack)** para permitir transiciones fluidas de deslizamiento hacia atrás y conservar el estado de scroll.\n\nIonic emula este comportamiento nativo: **las vistas previas NO se desmontan del DOM**, permanecen ocultas con estilos `display: none` o transformaciones CSS en segundo plano. Por ello, los hooks habituales como `useEffect` (con array vacío) o `ngOnInit` **no se vuelven a ejecutar** cuando el usuario regresa a una pantalla ya visitada.\n\nPara resolver esto, Ionic provee eventos de ciclo de vida específicos disponibles en todos los frameworks soportados:\n\n1. **`ionViewWillEnter`**: Se dispara cuando la página está a punto de entrar en la vista y la animación de transición está a punto de comenzar. Ideal para refrescar datos, reanudar suscripciones o verificar tokens de autenticación.\n2. **`ionViewDidEnter`**: Se dispara una vez que la página completó su transición visual y ya es visible e interactiva. Ideal para iniciar animaciones pesadas, mapas o analíticas de pantalla.\n3. **`ionViewWillLeave`**: Se dispara cuando la página está por abandonar el foco y la transición de salida inicia. Ideal para pausar timers, audios o cancelar peticiones no críticas.\n4. **`ionViewDidLeave`**: Se dispara cuando la transición concluyó y la página quedó oculta en el stack. Ideal para liberar memoria o listeners de eventos del hardware.",
        "codeExample": {
            "language": "tsx",
            "code": "import React, { useState } from 'react';\nimport {\n  IonPage,\n  IonHeader,\n  IonToolbar,\n  IonTitle,\n  IonContent,\n  useIonViewWillEnter,\n  useIonViewDidEnter,\n  useIonViewWillLeave,\n  useIonViewDidLeave\n} from '@ionic/react';\n\nexport const ProfileScreen: React.FC = () => {\n  const [notificationsCount, setNotificationsCount] = useState<number>(0);\n\n  // Se ejecuta SIEMPRE que la pantalla va a entrar, incluso si viene de 'atrás'\n  useIonViewWillEnter(() => {\n    console.log('[Lifecycle] ionViewWillEnter: Consultando estado del usuario...');\n    // Simular lectura de datos actualizados\n    setNotificationsCount(Math.floor(Math.random() * 10));\n  });\n\n  useIonViewDidEnter(() => {\n    console.log('[Lifecycle] ionViewDidEnter: Transición finalizada, pantalla activa');\n  });\n\n  useIonViewWillLeave(() => {\n    console.log('[Lifecycle] ionViewWillLeave: La pantalla comenzará a salir');\n  });\n\n  useIonViewDidLeave(() => {\n    console.log('[Lifecycle] ionViewDidLeave: Pantalla en segundo plano en el stack');\n  });\n\n  return (\n    <IonPage>\n      <IonHeader>\n        <IonToolbar>\n          <IonTitle>Mi Perfil</IonTitle>\n        </IonToolbar>\n      </IonHeader>\n      <IonContent className=\"ion-padding\">\n        <p>Notificaciones pendientes: <strong>{notificationsCount}</strong></p>\n      </IonContent>\n    </IonPage>\n  );\n};"
        },
        "visualDiagram": {
            "diagramType": "ionic-navigation-lifecycle-hooks",
            "title": "Ciclo de Vida de Navegación Móvil de Ionic",
            "id": "diag-ionic-06",
            "caption": "Secuencia temporal: ionViewWillEnter -> ionViewDidEnter -> ionViewWillLeave -> ionViewDidLeave."
        },
        "interviewTips": {
            "whatInterviewersWant": "Explicar claramente por qué `useEffect([], ...)` falla al intentar recargar datos cuando el usuario vuelve hacia atrás en Ionic. Demostrar el uso de los hooks `useIonViewWillEnter` (React) o métodos de interfaz `ViewWillEnter` (Angular). Saber que `IonPage` debe ser el elemento raíz directo para que los eventos de ciclo de vida se propaguen correctamente.",
            "commonPitfalls": [
                "Olvidar envolver las pantallas con el componente `<IonPage>`, lo que provoca que los eventos de ciclo de vida no se disparen.",
                "Crear memory leaks acumulando suscripciones repetidas en `ionViewWillEnter` sin cancelarlas en `ionViewDidLeave`."
            ],
            "followUps": [
                "¿Qué diferencia hay entre ionViewWillEnter y ngOnInit?",
                "¿Por qué ngOnInit no se vuelve a llamar al regresar a una página?"
            ]
        },
        "quiz": {
            "question": "¿Por qué un desarrollador no debe confiar en un `useEffect(() => {}, [])` de React para refrescar la lista de productos en una pantalla de Ionic?",
            "options": [
                "Porque React 19 deshabilitó la función useEffect en navegadores móviles.",
                "Porque Ionic mantiene las páginas previas vivas en memoria en el Navigation Stack sin desmontarlas al navegar a otra pantalla; al volver atrás no se remonta el componente.",
                "Porque Ionic sólo permite peticiones HTTP dentro de web workers externos.",
                "Porque el Garbage Collector de JavaScript elimina las variables de estado cuando la app entra en modo background."
            ],
            "explanation": "Al navegar entre vistas en una app móvil con Ionic, las páginas anteriores se apilan en el stack para permitir animaciones de retroceso fluidas. El componente no se desmonta, por lo que el montaje inicial (`mount`) no vuelve a ocurrir; se debe utilizar `useIonViewWillEnter`.",
            "correctIndex": 1
        }
    },
    {
        "id": "ionic-07",
        "title": "¿Qué es IonRouterOutlet y cómo gestiona el stack de navegación?",
        "level": "medio",
        "tags": [
            "IonRouterOutlet",
            "Navigation Stack",
            "Swipe-To-Go-Back",
            "Mobile Router"
        ],
        "response": "En la web tradicional, un enrutador (como React Router `<Routes>` o el `<router-outlet>` de Angular) simplemente intercambia un nodo en el DOM por otro cuando cambia la URL. En desarrollo móvil nativo, este modelo destruye la ilusión de aplicación nativa, ya que imposibilita las transiciones espaciales y los gestos táctiles de retroceso.\n\n**`IonRouterOutlet`** es el contenedor de vistas de enrutamiento especializado de Ionic que orquesta la **pila de navegación (Stack Navigation)**:\n\n1. **Gestión de la Pila (Stack Architecture)**:\n- Cuando navegas de la Pantalla A a la Pantalla B mediante un `push`, `IonRouterOutlet` mantiene el DOM de la Pantalla A, monta la Pantalla B encima y ejecuta la animación de transición de hardware correspondiente a la plataforma (`ios-transition` o `md-transition`).\n- Cuando el usuario retrocede (`pop`), la Pantalla B se anima hacia afuera y se destruye, dejando activa la Pantalla A con su estado de scroll intacto.\n\n2. **Soporte de Gestos Táctiles (Swipe to Go Back)**:\n- En dispositivos iOS, `IonRouterOutlet` habilita automáticamente el gesto nativo de arrastre desde el borde izquierdo de la pantalla para deslizar la vista actual y revelar la anterior interactivamente al 100% de fluidez.\n\n3. **Integración con Enrutadores Declarativos**:\n- Se integra directamente sobre las librerías líderes: `IonReactRouter` (sobre React Router v5/v6) y `@ionic/angular` (sobre Angular Router).",
        "codeExample": {
            "language": "tsx",
            "code": "import React from 'react';\nimport { Route, Redirect } from 'react-router-dom';\nimport { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';\nimport { IonReactRouter } from '@ionic/react-router';\n\nimport { FeedScreen } from './pages/FeedScreen';\nimport { ArticleDetailScreen } from './pages/ArticleDetailScreen';\nimport { SettingsScreen } from './pages/SettingsScreen';\n\nsetupIonicReact();\n\nexport const AppNavigation: React.FC = () => (\n  <IonApp>\n    <IonReactRouter>\n      {/* IonRouterOutlet orquesta la pila de vistas y transiciones */}\n      <IonRouterOutlet animated={true}>\n        <Route exact path=\"/feed\" component={FeedScreen} />\n        <Route exact path=\"/article/:id\" component={ArticleDetailScreen} />\n        <Route exact path=\"/settings\" component={SettingsScreen} />\n        <Route exact path=\"/\">\n          <Redirect to=\"/feed\" />\n        </Route>\n      </IonRouterOutlet>\n    </IonReactRouter>\n  </IonApp>\n);"
        },
        "visualDiagram": {
            "diagramType": "ionic-router-outlet-stack",
            "title": "Arquitectura de Pila Móvil de IonRouterOutlet",
            "id": "diag-ionic-07",
            "caption": "Stack de navegación: Vista activa vs Vistas retenidas en segundo plano y swipe-to-go-back."
        },
        "interviewTips": {
            "whatInterviewersWant": "Explicar la diferencia entre un router web plano (renderiza uno y destruye otro) y el stack de Ionic. Mencionar la animación nativa sincronizada con gestos de arrastre táctil (swipe back gesture). Conocer cómo manejar tabs persistentes combinando `<IonTabs>` e `<IonRouterOutlet>`.",
            "commonPitfalls": [
                "Utilizar directamente el `<Switch>` clásico de React Router en lugar de `<IonRouterOutlet>`, lo que destruye las transiciones y el stack.",
                "Provocar desincronización de URLs haciendo navegación con `window.location.href` en vez del router de Ionic."
            ],
            "followUps": [
                "¿Cómo mantiene IonRouterOutlet las páginas en el DOM?",
                "¿Cómo gestiona el botón atrás de Android?"
            ]
        },
        "quiz": {
            "question": "¿Qué comportamiento introduce IonRouterOutlet frente a un enrutador web convencional?",
            "options": [
                "Recarga la página completa del servidor en cada cambio de URL para limpiar memoria.",
                "Retiene las vistas anteriores en una pila DOM virtual y ejecuta transiciones cinemáticas adaptadas al sistema operativo.",
                "Desactiva las URLs para que la aplicación no pueda ser indexada por motores de búsqueda.",
                "Fuerza a que todas las rutas sean cargadas de forma síncrona en el paquete inicial (bundle)."
            ],
            "explanation": "IonRouterOutlet implementa una pila de historial móvil (stack) que mantiene vivas las vistas precedentes en el DOM y gestiona las animaciones de entrada, salida y retroceso táctil nativo.",
            "correctIndex": 1
        }
    },
    {
        "id": "ionic-08",
        "title": "¿Cómo se accede a la cámara y galería con Capacitor Camera?",
        "level": "medio",
        "tags": [
            "Capacitor",
            "Camera",
            "Permissions",
            "Photo",
            "Base64",
            "WebPath"
        ],
        "response": "El plugin oficial **`@capacitor/camera`** proporciona una interfaz unificada, declarativa y fuertemente tipada en TypeScript para capturar fotos, grabar videos o seleccionar imágenes de la galería del dispositivo, gestionando de forma transparente los permisos del sistema operativo.\n\nFlujo de trabajo de arquitectura con `@capacitor/camera`:\n1. **Gestión de Permisos Nativos**:\n- En iOS: Requiere configurar `NSCameraUsageDescription` y `NSPhotoLibraryUsageDescription` en el archivo `Info.plist`.\n- En Android: Requiere `android.permission.CAMERA` y `READ_MEDIA_IMAGES` en `AndroidManifest.xml`.\n- El plugin invoca el diálogo de permisos del sistema de forma automática en tiempo de ejecución o permite consultar su estado previo con `Camera.checkPermissions()` y `Camera.requestPermissions()`.\n\n2. **Formatos de Retorno Óptimos (`CameraResultType`)**:\n- `Uri` / `Path` (**Recomendado**): Devuelve una ruta local segura de archivo accesible mediante `Capacitor.convertFileSrc(photo.path)`. Permite cargar imágenes pesadas en elementos `<img>` con mínimo impacto en memoria y sin desbordar el heap de JavaScript.\n- `Base64`: Devuelve la imagen serializada en un string en base64. Útil para transmitir de inmediato vía JSON o sockets, pero ineficiente para imágenes de alta resolución (incrementa el uso de RAM un 33%).\n\n3. **Fallback Web Automático**:\n- Si se ejecuta en un navegador de escritorio (PWA), Capacitor utiliza el componente opcional `@ionic/pwa-elements` para mostrar un modal con la webcam del ordenador sin fallar.",
        "codeExample": {
            "language": "tsx",
            "code": "import React, { useState } from 'react';\nimport {\n  IonButton,\n  IonImg,\n  IonCard,\n  IonCardContent,\n  IonIcon\n} from '@ionic/react';\nimport { cameraOutline, imagesOutline } from 'ionicons/icons';\nimport {\n  Camera,\n  CameraResultType,\n  CameraSource,\n  Photo\n} from '@capacitor/camera';\n\nexport const PhotoCaptureService: React.FC = () => {\n  const [imageUrl, setImageUrl] = useState<string | null>(null);\n\n  const takePhoto = async (source: CameraSource) => {\n    try {\n      // Verificar y solicitar permisos si es necesario\n      const permissions = await Camera.checkPermissions();\n      if (permissions.camera !== 'granted' && source === CameraSource.Camera) {\n        const request = await Camera.requestPermissions({ permissions: ['camera'] });\n        if (request.camera !== 'granted') return;\n      }\n\n      const photo: Photo = await Camera.getPhoto({\n        quality: 85,\n        allowEditing: true,\n        resultType: CameraResultType.Uri, // Formato más eficiente en memoria\n        source: source,\n        saveToGallery: false\n      });\n\n      // photo.webPath es una URL interna segura para el WebView\n      if (photo.webPath) {\n        setImageUrl(photo.webPath);\n      }\n    } catch (error) {\n      console.error('Error al capturar imagen:', error);\n    }\n  };\n\n  return (\n    <IonCard>\n      <IonCardContent className=\"text-center\">\n        {imageUrl && <IonImg src={imageUrl} alt=\"Foto capturada\" className=\"rounded-lg mb-4\" />}\n        <div className=\"flex gap-2 justify-center\">\n          <IonButton onClick={() => takePhoto(CameraSource.Camera)}>\n            <IonIcon slot=\"start\" icon={cameraOutline} /> Tomar Foto\n          </IonButton>\n          <IonButton fill=\"outline\" onClick={() => takePhoto(CameraSource.Photos)}>\n            <IonIcon slot=\"start\" icon={imagesOutline} /> Galería\n          </IonButton>\n        </div>\n      </IonCardContent>\n    </IonCard>\n  );\n};"
        },
        "visualDiagram": {
            "diagramType": "ionic-capacitor-camera-pipeline",
            "title": "Pipeline de Captura de Cámara en Capacitor",
            "id": "diag-ionic-08",
            "caption": "Verificación de permisos nativos -> Llamada de hardware -> Conversión a WebPath seguro."
        },
        "interviewTips": {
            "whatInterviewersWant": "Demostrar por qué preferir `CameraResultType.Uri` frente a `Base64` en dispositivos móviles con recursos limitados. Explicar los permisos nativos obligatorios en `Info.plist` (iOS) y `AndroidManifest.xml` (Android). Mencionar la importancia de `@ionic/pwa-elements` para no romper la experiencia en web y pruebas unitarias.",
            "commonPitfalls": [
                "Intentar convertir imágenes de 48 megapíxeles a Base64 directamente, causando cierres inesperados (OOM Crash de la WebView).",
                "Olvidar agregar los textos descriptivos de permisos en `Info.plist`, lo que provoca el rechazo automático de la app en la App Store de Apple."
            ],
            "followUps": [
                "¿Cómo gestionarías los permisos denegados por el usuario?",
                "¿Cómo reducirías el tamaño de la imagen antes de subirla?"
            ]
        },
        "quiz": {
            "question": "¿Cuál es la principal razón para usar `CameraResultType.Uri` en vez de `CameraResultType.Base64` al capturar fotos con Capacitor?",
            "options": [
                "Base64 no es compatible con pantallas Retina o AMOLED de alta resolución.",
                "Uri proporciona una ruta de archivo local que la WebView carga eficientemente sin saturar la memoria RAM del motor JavaScript.",
                "Base64 requiere una conexión a Internet constante para decodificar los bytes de la imagen.",
                "Uri cifra automáticamente la imagen con un algoritmo AES-256 en la nube."
            ],
            "explanation": "`CameraResultType.Uri` entrega una referencia URI local que el navegador/WebView renderiza directamente por streaming de archivo, evitando inflar un string en memoria que colapsaría el heap de JS con imágenes de alta definición.",
            "correctIndex": 1
        }
    },
    {
        "id": "ionic-09",
        "title": "¿Cómo manejar almacenamiento local persistente con Capacitor Preferences vs SQLite?",
        "level": "medio",
        "tags": [
            "Capacitor Preferences",
            "SQLite",
            "Offline-First",
            "Storage",
            "Relational DB"
        ],
        "response": "En el desarrollo móvil híbrido, elegir la estrategia de almacenamiento local correcta es vital para la estabilidad y persistencia de los datos, ya que el almacenamiento web tradicional (`localStorage` e `IndexedDB`) puede ser purgado por el sistema operativo (iOS) si el dispositivo se queda sin espacio en disco.\n\nPara garantizar persistencia absoluta, Capacitor provee dos soluciones según la complejidad del modelo de datos:\n\n1. **Capacitor Preferences (`@capacitor/preferences`) - Almacenamiento Clave-Valor Ligero**:\n- **Bajo el capó**: Utiliza `NSUserDefaults` en iOS, `SharedPreferences` en Android y `localStorage` en la web.\n- **Caso de uso**: Tokens JWT de sesión, temas visuales (dark mode), flags de onboarding y configuraciones simples de usuario.\n- **Características**: Lectura/escritura síncrona/asíncrona muy rápida, pero no apto para consultas complejas o miles de registros.\n\n2. **Capacitor SQLite (`@capacitor-community/sqlite`) - Base de Datos Relacional Offline-First**:\n- **Bajo el capó**: Instancia un motor SQLite nativo en el dispositivo (`sqlite3`), completamente aislado de las cuotas de almacenamiento de la WebView.\n- **Caso de uso**: Aplicaciones offline-first que sincronizan catálogos de productos masivos, historiales de transacciones, migraciones de esquema SQL y soporte de transacciones ACID.\n- **Cifrado**: Soporta cifrado completo de base de datos en reposo mediante **SQLCipher** con claves seguras obtenidas del Keychain/Keystore.",
        "codeExample": {
            "language": "tsx",
            "code": "import { Preferences } from '@capacitor/preferences';\nimport { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite';\n\n// 1. Almacenamiento Ligero con Preferences\nexport const AuthStorage = {\n  async saveToken(token: string): Promise<void> {\n    await Preferences.set({ key: 'auth_token', value: token });\n  },\n  async getToken(): Promise<string | null> {\n    const { value } = await Preferences.get({ key: 'auth_token' });\n    return value;\n  }\n};\n\n// 2. Almacenamiento Relacional Robusto con SQLite Nativo\nexport class DatabaseManager {\n  private sqlite: SQLiteConnection;\n  private db: SQLiteDBConnection | null = null;\n\n  constructor() {\n    this.sqlite = new SQLiteConnection(CapacitorSQLite);\n  }\n\n  async initialize(): Promise<void> {\n    this.db = await this.sqlite.createConnection(\n      'banco_local',\n      false, // encrypted\n      'no-encryption',\n      1,\n      false\n    );\n    await this.db.open();\n    await this.db.execute(`\n      CREATE TABLE IF NOT EXISTS transacciones (\n        id TEXT PRIMARY KEY,\n        monto REAL NOT NULL,\n        categoria TEXT,\n        fecha INTEGER\n      );\n    `);\n  }\n\n  async insertTransaction(id: string, monto: number, categoria: string): Promise<void> {\n    if (!this.db) throw new Error('DB not initialized');\n    const query = 'INSERT INTO transacciones (id, monto, categoria, fecha) VALUES (?, ?, ?, ?)';\n    await this.db.run(query, [id, monto, categoria, Date.now()]);\n  }\n}"
        },
        "visualDiagram": {
            "diagramType": "ionic-storage-preferences-sqlite",
            "title": "Estrategia de Almacenamiento Móvil: Preferences vs SQLite Nativo",
            "id": "diag-ionic-09",
            "caption": "Preferences (SharedPreferences/UserDefaults) vs SQLite Nativo (SQLCipher) en disco persistente."
        },
        "interviewTips": {
            "whatInterviewersWant": "Conocer el peligro de usar `localStorage` o `IndexedDB` puro en iOS (WebKit puede purgarlo tras días sin uso). Saber cuándo recomendar una base de datos relacional nativa frente a un almacén clave-valor. Mencionar la posibilidad de cifrar bases de datos locales mediante SQLCipher para cumplimiento regulatorio (GDPR/PCI-DSS).",
            "commonPitfalls": [
                "Guardar catálogos relacionales de miles de objetos en `Preferences` serializados como strings JSON gigantes.",
                "Olvidar inicializar la conexión SQLite antes de ejecutar consultas durante el arranque de la app."
            ],
            "followUps": [
                "¿Cuándo usar Preferences y cuándo SQLite?",
                "¿Cómo cifrarías los datos almacenados?"
            ]
        },
        "quiz": {
            "question": "¿Por qué no se debe confiar en `localStorage` del navegador para guardar datos críticos offline en una app de producción en iOS?",
            "options": [
                "Porque Apple no permite la ejecución de JavaScript síncrono en dispositivos móviles.",
                "Porque el motor WebKit de iOS puede purgar el almacenamiento web local si el dispositivo entra en condiciones de bajo almacenamiento en disco.",
                "Porque localStorage solo admite almacenar números binarios flotantes de 16 bits.",
                "Porque el plugin de Capacitor Camera inhabilita el acceso al disco del navegador."
            ],
            "explanation": "El sistema operativo iOS clasifica los datos de almacenamiento web (localStorage e IndexedDB) como temporales y puede eliminarlos discrecionalmente si el espacio libre en el dispositivo es bajo. Se debe usar Preferences o SQLite nativo.",
            "correctIndex": 1
        }
    },
    {
        "id": "ionic-10",
        "title": "¿Cómo implementar Modales y Sheets interactivos con IonModal y breakpoints?",
        "level": "medio",
        "tags": [
            "IonModal",
            "Sheet Modal",
            "Breakpoints",
            "Gestures",
            "Bottom Sheet"
        ],
        "response": "El componente **`<IonModal>`** de Ionic incluye soporte nativo de primera clase para crear paneles inferiores interactivos (**Sheet Modals** o Bottom Sheets) controlados por gestos táctiles, imitando la experiencia de aplicaciones líderes como Apple Maps, Spotify o Google Maps.\n\nCaracterísticas clave del Sheet Modal en Ionic:\n1. **Puntos de Interrupción (`breakpoints`)**:\n- Se define un arreglo decimal entre `0` y `1` (por ejemplo, `breakpoints={[0, 0.25, 0.5, 0.95]}`), donde `0` representa el cierre total, `0.25` la vista compacta, `0.5` la mitad de la pantalla y `0.95` la pantalla casi completa.\n- La propiedad `initialBreakpoint` define la posición inicial en la que se despliega el modal al abrirse.\n\n2. **Interacción con el Fondo (`backdropBreakpoint`)**:\n- Permite especificar hasta qué altura el usuario puede seguir interactuando con la pantalla detrás del modal (como arrastrar un mapa mientras el sheet está abierto al 25%).\n\n3. **Físicas Táctiles de Deslizamiento (Inertial Gestures)**:\n- Soporta gestos cinemáticos automáticos: el usuario puede deslizar con el dedo y el modal se acopla magnéticamente al breakpoint más cercano mediante resortes (spring physics) acelerados por hardware.",
        "codeExample": {
            "language": "tsx",
            "code": "import React, { useRef, useState } from 'react';\nimport {\n  IonButton,\n  IonModal,\n  IonHeader,\n  IonToolbar,\n  IonTitle,\n  IonContent,\n  IonList,\n  IonItem,\n  IonLabel\n} from '@ionic/react';\n\nexport const SheetModalDemo: React.FC = () => {\n  const modalRef = useRef<HTMLIonModalElement>(null);\n  const [isOpen, setIsOpen] = useState(false);\n\n  return (\n    <div className=\"p-4\">\n      <IonButton expand=\"block\" onClick={() => setIsOpen(true)}>\n        Ver Filtros Avanzados\n      </IonButton>\n\n      <IonModal\n        ref={modalRef}\n        isOpen={isOpen}\n        initialBreakpoint={0.5} // Inicia a media pantalla\n        breakpoints={[0, 0.25, 0.5, 0.9]} // Snap points disponibles\n        backdropBreakpoint={0.5} // Fondo interactivo si está <= 50%\n        onDidDismiss={() => setIsOpen(false)}\n        handleBehavior=\"cycle\" // Tocar la barra superior salta entre breakpoints\n      >\n        <IonHeader>\n          <IonToolbar>\n            <IonTitle>Filtros de Búsqueda</IonTitle>\n          </IonToolbar>\n        </IonHeader>\n        <IonContent className=\"ion-padding\">\n          <IonList>\n            <IonItem><IonLabel>Más Populares</IonLabel></IonItem>\n            <IonItem><IonLabel>Menor Precio</IonLabel></IonItem>\n            <IonItem><IonLabel>Calificación 5 Estrellas</IonLabel></IonItem>\n          </IonList>\n        </IonContent>\n      </IonModal>\n    </div>\n  );\n};"
        },
        "visualDiagram": {
            "diagramType": "ionic-modal-sheet-breakpoints",
            "title": "Arquitectura de Sheet Modal con Breakpoints en Ionic",
            "id": "diag-ionic-10",
            "caption": "Posicionamiento magnético por gestos: 0 (Cierre) -> 0.25 (Mini) -> 0.5 (Mitad) -> 0.9 (Expandido)."
        },
        "interviewTips": {
            "whatInterviewersWant": "Demostrar cómo configurar `breakpoints` e `initialBreakpoint` de forma declarativa. Explicar el valor de `backdropBreakpoint` para casos de uso como mapas interactivos (Uber, Google Maps). Mencionar la propiedad `handle={true}` para mostrar la barra visual de arrastre táctil.",
            "commonPitfalls": [
                "Olvidar incluir el valor `0` en la lista de `breakpoints`, lo que impide cerrar el modal deslizando hacia abajo.",
                "Colocar scroll views sin scroll elástico dentro del modal, provocando conflictos entre el gesto de scroll y el arrastre del sheet."
            ],
            "followUps": [
                "¿Cómo funcionan los breakpoints de un sheet modal?",
                "¿Cómo gestionarías la accesibilidad de un modal?"
            ]
        },
        "quiz": {
            "question": "¿Qué ocurre si omites el valor '0' en el array de `breakpoints={[0.25, 0.5, 0.8]}` de un IonModal?",
            "options": [
                "El modal causará un error fatal en tiempo de compilación.",
                "El modal no se podrá cerrar completamente mediante el gesto táctil de arrastrar hacia abajo.",
                "El modal se abrirá siempre en modo pantalla completa ignorando los otros valores.",
                "La aplicación invertirá el sentido de la animación apareciendo desde la barra de estado superior."
            ],
            "explanation": "El punto `0` representa la posición completamente descartada (cerrada). Si no se incluye en los breakpoints, el gesto de deslizamiento hacia abajo se detendrá en el breakpoint menor definido (en este caso 0.25) impidiendo su cierre por arrastre.",
            "correctIndex": 1
        }
    },
    {
        "id": "ionic-11",
        "title": "¿Cómo funciona la API de Animaciones de Ionic (AnimationController) a 60 FPS?",
        "level": "avanzado",
        "tags": [
            "AnimationController",
            "Web Animations API",
            "GPU",
            "Transform",
            "Opacity"
        ],
        "response": "Para lograr animaciones a **60 FPS** (o 120 FPS en pantallas ProMotion) en una WebView móvil, no se pueden usar animaciones ingenuas en JavaScript con `setInterval` ni manipular propiedades que desencadenen recalculo de diseño (Layout) o pintura (Repaint) como `top`, `left`, `width` o `margin`.\n\nIonic provee el **`AnimationController`** (`createAnimation`), una API fluida y reactiva construida sobre la **Web Animations API (WAAPI)** nativa del navegador:\n\n1. **Aceleración por Hardware (Offloading a la GPU)**:\n- La API optimiza el trabajo para operar exclusivamente sobre las dos propiedades compuestas por GPU: **`transform`** (translate, scale, rotate) y **`opacity`**.\n- El cálculo cinemático se ejecuta en el Compositor Thread del navegador nativo, lo que significa que la animación continúa fluida e inmune incluso si el hilo principal de JavaScript está ocupado procesando datos de red o lógica compleja.\n\n2. **Composición y Agrupación Jerárquica**:\n- Permite encadenar (`addAnimation`) múltiples animaciones hijas para ejecutarlas en paralelo o en secuencia con un solo control maestro (`play()`, `pause()`, `stop()`, `progressStep()`).\n\n3. **Control por Gestos Táctiles (Gesture-Driven Animations)**:\n- Se integra directamente con la API `createGesture` de Ionic. Permite vincular el avance de la animación milimétricamente a la posición del dedo del usuario (`animation.progressStep(step)`), creando transiciones interactivas reversibles idénticas a las del sistema nativo.",
        "codeExample": {
            "language": "tsx",
            "code": "import React, { useRef } from 'react';\nimport { IonButton, IonCard, IonCardContent, createAnimation } from '@ionic/react';\n\nexport const GpuAnimationDemo: React.FC = () => {\n  const cardRef = useRef<HTMLDivElement>(null);\n\n  const triggerPulseAnimation = () => {\n    if (!cardRef.current) return;\n\n    // Construir animación con aceleración por GPU\n    const animation = createAnimation()\n      .addElement(cardRef.current)\n      .duration(600)\n      .iterations(1)\n      .easing('cubic-bezier(0.34, 1.56, 0.64, 1)') // Efecto resorte elástico\n      .fromTo('transform', 'scale(1) translateY(0px)', 'scale(1.08) translateY(-12px)')\n      .fromTo('opacity', '0.7', '1')\n      .fromTo('box-shadow', '0 4px 6px rgba(0,0,0,0.1)', '0 20px 25px rgba(59,130,246,0.3)');\n\n    animation.play();\n  };\n\n  return (\n    <div className=\"p-4\">\n      <div ref={cardRef}>\n        <IonCard color=\"light\">\n          <IonCardContent>\n            <h3 className=\"font-bold text-lg\">Tarjeta con Aceleración GPU</h3>\n            <p>Animación fluida impulsada por Web Animations API sin saltos de frames.</p>\n          </IonCardContent>\n        </IonCard>\n      </div>\n\n      <IonButton expand=\"block\" className=\"ion-margin-top\" onClick={triggerPulseAnimation}>\n        Animar con Web Animations API\n      </IonButton>\n    </div>\n  );\n};"
        },
        "visualDiagram": {
            "diagramType": "ionic-animation-controller-gpu",
            "title": "Flujo de Animaciones a 60 FPS con AnimationController y WAAPI",
            "id": "diag-ionic-11",
            "caption": "Compositor Thread y GPU frente a bloqueo del Main Thread de JavaScript."
        },
        "interviewTips": {
            "whatInterviewersWant": "Explicar por qué las propiedades `transform` y `opacity` no causan Reflow/Repaint. Demostrar conocimiento de Web Animations API (WAAPI) y su soporte nativo en WebKit y Chromium. Saber cómo conectar `createGesture` con `animation.progressStep()` para animaciones arrastrables con el dedo.",
            "commonPitfalls": [
                "Animar propiedades de coste pesado como `height`, `margin` o `box-shadow` dinámico con JavaScript en bucle.",
                "Importar librerías JS pesadas de animación que duplican lo que Ionic ya resuelve de manera óptima y nativa."
            ],
            "followUps": [
                "¿Por qué AnimationController usa la Web Animations API?",
                "¿Cómo crearías una animación basada en gestos?"
            ]
        },
        "quiz": {
            "question": "¿Por qué las animaciones creadas con `createAnimation()` en Ionic pueden correr a 60 FPS constantes incluso si JavaScript está ejecutando tareas pesadas?",
            "options": [
                "Porque Ionic apaga los demás procesos del teléfono mientras corre una animación.",
                "Porque utiliza la Web Animations API, la cual es ejecutada y compuesta directamente por el motor gráfico del navegador en el hilo del Compositor (GPU) fuera del hilo principal de JS.",
                "Porque compila el código CSS a lenguaje C++ mediante WebAssembly en tiempo real.",
                "Porque reduce la resolución de la pantalla a 720p temporalmente."
            ],
            "explanation": "La Web Animations API permite al navegador delegar el cálculo de transformaciones y opacidades directamente a la GPU y al hilo de composición del motor de renderizado, evitando que la saturación del Main Thread de JS cause caídas de frames (jank).",
            "correctIndex": 1
        }
    },
    {
        "id": "ionic-12",
        "title": "¿Cómo optimizar el rendimiento de listas masivas con Virtual Scroll e Infinite Scroll?",
        "level": "avanzado",
        "tags": [
            "Virtual Scroll",
            "Infinite Scroll",
            "DOM Recycling",
            "Performance",
            "Memory"
        ],
        "response": "Renderizar miles de elementos en una lista dentro de una WebView móvil es una de las causas más frecuentes de colapso de memoria (**Out-of-Memory Crash**) y pérdida de fluidez de scroll en aplicaciones híbridas, ya que cada nodo en el DOM consume memoria RAM y tiempo de renderizado.\n\nEstrategias de nivel staff para listas masivas en Ionic:\n\n1. **Virtualización del DOM (DOM Recycling)**:\n- La técnica de **Virtual Scroll** renderiza únicamente los elementos que son visibles en la ventana gráfica actual (viewport) más un pequeño buffer superior e inferior (por ejemplo, 15 elementos en lugar de 10,000).\n- A medida que el usuario hace scroll, los nodos fuera de pantalla se reciclan y sus datos se intercambian dinámicamente, manteniendo el número total de nodos en el DOM rigurosamente constante.\n- En **React**: Se utiliza `@tanstack/react-virtual` o `react-window`.\n- En **Angular**: Se utiliza el módulo oficial `@angular/cdk/scrolling` con `<cdk-virtual-scroll-viewport>`.\n\n2. **Paginación Dinámica con `<IonInfiniteScroll>`**:\n- Permite solicitar datos al backend en lotes (ej. de 25 en 25) cuando el usuario se aproxima al final del contenido (`threshold='150px'`).\n- Una vez obtenidos los datos, se invoca `event.target.complete()` para ocultar el spinner de carga y notificar al motor que el scroll puede continuar.",
        "codeExample": {
            "language": "tsx",
            "code": "import React, { useState } from 'react';\nimport {\n  IonContent,\n  IonList,\n  IonItem,\n  IonLabel,\n  IonInfiniteScroll,\n  IonInfiniteScrollContent,\n  IonPage\n} from '@ionic/react';\n\nexport const OptimizedTransactionList: React.FC = () => {\n  const [items, setItems] = useState<string[]>(\n    Array.from({ length: 30 }, (_, i) => `Transacción #${i + 1} - $${(Math.random() * 500).toFixed(2)}`)\n  );\n  const [isDone, setIsDone] = useState(false);\n\n  const loadMoreData = (ev: CustomEvent<void>) => {\n    setTimeout(() => {\n      if (items.length >= 150) {\n        setIsDone(true);\n      } else {\n        const newBatch = Array.from({ length: 25 }, (_, i) => \n          `Transacción #${items.length + i + 1} - $${(Math.random() * 500).toFixed(2)}`\n        );\n        setItems(prev => [...prev, ...newBatch]);\n      }\n      // Indispensable notificar a Ionic que la carga asíncrona finalizó\n      (ev.target as HTMLIonInfiniteScrollElement).complete();\n    }, 800);\n  };\n\n  return (\n    <IonPage>\n      <IonContent fullscreen>\n        <IonList>\n          {items.map((item, index) => (\n            <IonItem key={index}>\n              <IonLabel>{item}</IonLabel>\n            </IonItem>\n          ))}\n        </IonList>\n\n        {/* Infinite scroll con umbral anticipado */}\n        <IonInfiniteScroll\n          onIonInfinite={loadMoreData}\n          threshold=\"120px\"\n          disabled={isDone}\n        >\n          <IonInfiniteScrollContent\n            loadingSpinner=\"bubbles\"\n            loadingText=\"Cargando más transacciones...\"\n          />\n        </IonInfiniteScroll>\n      </IonContent>\n    </IonPage>\n  );\n};"
        },
        "visualDiagram": {
            "diagramType": "ionic-virtual-scroll-infinite",
            "title": "Reciclaje de Nodos DOM con Virtual Scroll e Infinite Scroll",
            "id": "diag-ionic-12",
            "caption": "Viewport visible fijo de 10-15 nodos reciclados vs lista infinita que desborda memoria."
        },
        "interviewTips": {
            "whatInterviewersWant": "Explicar el concepto de DOM recycling y cómo la virtualización previene OOM crashes. Demostrar el uso correcto de `event.target.complete()` en `<IonInfiniteScroll>`. Mencionar la importancia de alturas fijas o aproximadas en elementos virtualizados para un cálculo de scroll suave.",
            "commonPitfalls": [
                "Olvidar llamar a `.complete()` en el evento de InfiniteScroll, provocando que el spinner se quede girando eternamente.",
                "Renderizar listas de miles de elementos complejos con imágenes pesadas en el DOM plano sin virtualizar."
            ],
            "followUps": [
                "¿Qué alternativas a ion-virtual-scroll existen hoy?",
                "¿Cómo implementarías infinite scroll con paginación?"
            ]
        },
        "quiz": {
            "question": "¿Cuál es el propósito fundamental de aplicar Virtual Scrolling en una aplicación Ionic móvil?",
            "options": [
                "Aumentar automáticamente el ancho de banda de la conexión Wi-Fi del dispositivo.",
                "Mantener en el DOM únicamente los nodos que caben en la pantalla del usuario, reciclándolos al deslizar para mantener constante el uso de RAM.",
                "Convertir los textos de la lista en imágenes SVG vectoriales.",
                "Forzar a que la lista se dibuje exclusivamente en un canvas WebGL tridimensional."
            ],
            "explanation": "El Virtual Scrolling previene la degradación de rendimiento y saturación de memoria manteniendo solo un pequeño número de nodos en el DOM (los visibles más un margen), reciclando los elementos al hacer scroll sin importar si la lista tiene 100,000 registros.",
            "correctIndex": 1
        }
    },
    {
        "id": "ionic-13",
        "title": "¿Cómo manejar la barra de estado y áreas seguras (Safe Areas / Notch) en dispositivos modernos?",
        "level": "avanzado",
        "tags": [
            "Safe Areas",
            "Notch",
            "env(safe-area-inset)",
            "StatusBar",
            "Dynamic Island"
        ],
        "response": "Los teléfonos modernos (desde el iPhone X hasta los modelos con Dynamic Island y dispositivos Android con cámaras perforadas en pantalla) presentan geometrías complejas con esquinas redondeadas y zonas que interfieren con el contenido visual.\n\nPara evitar que los encabezados o botones queden ocultos detrás del Notch, la cámara frontal o la barra de gestos inferior, Ionic implementa un manejo exhaustivo de **Safe Areas** y control nativo de la barra de estado:\n\n1. **Variables de Entorno CSS (`env(safe-area-inset-*)`)**:\n- En el archivo `index.html`, la etiqueta meta del viewport DEBE incluir `viewport-fit=cover`:\n`<meta name='viewport' content='width=device-width, initial-scale=1.0, viewport-fit=cover' />`\n- Esto permite al navegador web extenderse por toda la pantalla física y habilita las cuatro variables de entorno del estándar CSS:\n  * `env(safe-area-inset-top)`: Espacio ocupado por el Notch / Dynamic Island / Status Bar.\n  * `env(safe-area-inset-bottom)`: Espacio para la barra de inicio de gestos de iOS.\n  * `env(safe-area-inset-left)` y `env(safe-area-inset-right)`: Espacio en modo horizontal (Landscape).\n\n2. **Componentes Nativos de Ionic**:\n- `<IonHeader>`, `<IonToolbar>` y `<IonTabBar>` aplican estos paddings protectores automáticamente sin requerir intervención manual del desarrollador.\n\n3. **Plugin `@capacitor/status-bar`**:\n- Permite controlar programáticamente si la barra de estado es visible, cambiar su estilo (`Style.Dark` o `Style.Light` para contrastar texto blanco o negro) y habilitar o deshabilitar la superposición del contenido (`setOverlaysWebView`).",
        "codeExample": {
            "language": "tsx",
            "code": "import React, { useEffect } from 'react';\nimport { StatusBar, Style } from '@capacitor/status-bar';\nimport { Capacitor } from '@capacitor/core';\nimport {\n  IonPage,\n  IonHeader,\n  IonToolbar,\n  IonTitle,\n  IonContent\n} from '@ionic/react';\n\nexport const NotchSafeScreen: React.FC = () => {\n  useEffect(() => {\n    // Configuración nativa de la barra de estado con Capacitor\n    const setupStatusBar = async () => {\n      if (Capacitor.isNativePlatform()) {\n        await StatusBar.setStyle({ style: Style.Dark });\n        await StatusBar.setBackgroundColor({ color: '#0f172a' });\n      }\n    };\n    setupStatusBar();\n  }, []);\n\n  return (\n    <IonPage>\n      {/* IonHeader incluye internamente padding-top: env(safe-area-inset-top) */}\n      <IonHeader>\n        <IonToolbar color=\"dark\">\n          <IonTitle>Safe Area & Notch Control</IonTitle>\n        </IonToolbar>\n      </IonHeader>\n\n      <IonContent fullscreen className=\"ion-padding\">\n        {/* En contenedores personalizados sin IonToolbar, usar CSS safe-area */}\n        <div style={{\n          paddingBottom: 'calc(16px + env(safe-area-inset-bottom))',\n          border: '1px dashed #3b82f6'\n        }} className=\"p-4 rounded-xl\">\n          <p>Botón o contenido flotante protegido de la barra de gestos de iOS.</p>\n        </div>\n      </IonContent>\n    </IonPage>\n  );\n};"
        },
        "visualDiagram": {
            "diagramType": "ionic-safe-areas-notch-inset",
            "title": "Mapeo de Safe Areas, Notches y Dynamic Island en Ionic",
            "id": "diag-ionic-13",
            "caption": "Insets superiores e inferiores: viewport-fit=cover y env(safe-area-inset-*)."
        },
        "interviewTips": {
            "whatInterviewersWant": "Saber que `viewport-fit=cover` en el `<meta name='viewport'>` es un requisito indispensable para que `env(safe-area-inset-*)` funcione. Explicar cómo `@capacitor/status-bar` interactúa con el sistema operativo nativo. Conocer cómo resolver problemas de solapamiento en footers personalizados usando `calc(1rem + env(safe-area-inset-bottom))`.",
            "commonPitfalls": [
                "Hardcodear valores fijos de padding (como `paddingTop: '44px'`), lo que romperá el diseño en dispositivos Android o modelos con diferentes tamaños de notch.",
                "Olvidar llamar a `Capacitor.isNativePlatform()` antes de invocar métodos de StatusBar en desarrollo web."
            ],
            "followUps": [
                "¿Qué son env(safe-area-inset-top) y viewport-fit=cover?",
                "¿Cómo controlarías la status bar con Capacitor?"
            ]
        },
        "quiz": {
            "question": "¿Qué configuración es estrictamente necesaria en el `<head>` del archivo `index.html` para que las variables CSS `env(safe-area-inset-*)` funcionen en dispositivos con notch?",
            "options": [
                "Agregar la propiedad `viewport-fit=cover` dentro de la etiqueta `<meta name=\"viewport\">`.",
                "Importar el script de jQuery Mobile en la cabecera.",
                "Definir el atributo `notch='true'` en la etiqueta `<html>`.",
                "Configurar una directiva CSP que permita la ejecución de WebAssembly."
            ],
            "explanation": "Sin la directiva `viewport-fit=cover` en el meta viewport, el navegador web aplica márgenes seguros automáticos (letterboxing) y todas las variables `env(safe-area-inset-*)` devuelven 0px.",
            "correctIndex": 0
        }
    },
    {
        "id": "ionic-14",
        "title": "¿Cómo depurar una aplicación Ionic/Capacitor en dispositivos físicos Android e iOS?",
        "level": "avanzado",
        "tags": [
            "Debugging",
            "Chrome Inspect",
            "Safari Web Inspector",
            "DevTools",
            "Mobile Web"
        ],
        "response": "Una de las mayores ventajas arquitectónicas de Ionic frente a frameworks con motores cerrados es que, al ejecutarse sobre una WebView estándar, se puede conectar directamente el motor de **Developer Tools (DevTools)** completo del navegador de escritorio para inspeccionar el DOM, breakpoints de TypeScript, tráfico de red (Network) y almacenamiento local en un dispositivo físico real conectado por USB o Wi-Fi.\n\n1. **Flujo de Depuración en Android (Google Chrome DevTools)**:\n- Activar **Depuración por USB (USB Debugging)** en las Opciones de Desarrollador del teléfono Android.\n- Conectar el dispositivo por cable a la computadora.\n- Abrir Google Chrome en el ordenador y navegar a la URL especial: **`chrome://inspect/#devices`**.\n- La pantalla mostrará el dispositivo conectado y listará la WebView activa con el nombre de la app. Hacer clic en **'Inspect'**.\n- Se abre la ventana completa de Chrome DevTools vinculada en tiempo real a la app física.\n\n2. **Flujo de Depuración en iOS (Apple Safari Web Inspector)**:\n- En el iPhone/iPad: Ir a **Ajustes ➔ Safari ➔ Avanzado** y activar la opción **'Web Inspector'**.\n- Conectar el iPhone a una Mac mediante cable USB y pulsar 'Confiar en este ordenador'.\n- Abrir **Safari** en macOS. En la barra de menú superior, seleccionar **Desarrollo (Develop) ➔ [Nombre del iPhone] ➔ [Página de la App / localhost]**.\n- Se abre el Safari Web Inspector con acceso al árbol de elementos, consola de errores, perfilador de memoria y estilos CSS en vivo.",
        "codeExample": {
            "language": "tsx",
            "code": "/* Script de configuración y diagnóstico para depuración remota de WebView */\nimport { Capacitor } from '@capacitor/core';\n\nexport const configureWebViewDebugging = () => {\n  if (import.meta.env.DEV) {\n    console.log('[DEBUG] Plataforma activa:', Capacitor.getPlatform());\n    console.log('[DEBUG] Es nativo:', Capacitor.isNativePlatform());\n\n    // En Android nativo, el flag WebView.setWebContentsDebuggingEnabled(true)\n    // se activa automáticamente en builds de Debug generadas por Capacitor.\n    \n    // Listener global para capturar errores de JavaScript no manejados\n    window.addEventListener('error', (event) => {\n      console.error('[Global Error Trapped]:', event.message, event.filename, event.lineno);\n    });\n\n    window.addEventListener('unhandledrejection', (event) => {\n      console.error('[Unhandled Promise Rejection]:', event.reason);\n    });\n  }\n};\n\n/* Guía rápida de comandos de ejecución directa en dispositivo:\n * Android: npx cap run android -l --external (Habilita Live Reload en IP local)\n * iOS:     npx cap run ios -l --external     (Habilita Live Reload en IP local)\n */"
        },
        "visualDiagram": {
            "diagramType": "ionic-debugging-chrome-safari-inspect",
            "title": "Arquitectura de Depuración Remota: Chrome Inspect y Safari Web Inspector",
            "id": "diag-ionic-14",
            "caption": "Dispositivos físicos conectados por USB depurados con DevTools completas en la computadora."
        },
        "interviewTips": {
            "whatInterviewersWant": "Conocer las dos herramientas fundamentales: `chrome://inspect` (Android) y menú 'Desarrollo' de Safari (iOS). Explicar la técnica de Live Reload con `npx cap run [ios|android] -l --external` para desarrollar sin recompilar nativamente en cada cambio. Saber cómo inspeccionar peticiones de red fallidas (CORS o certificados SSL autofirmados en entornos locales).",
            "commonPitfalls": [
                "Intentar usar Chrome DevTools para depurar una app de iOS o Safari para Android (WebKit requiere Safari en macOS; Chromium requiere Chrome).",
                "Olvidar desactivar la depuración web (`setWebContentsDebuggingEnabled(false)`) en compilaciones finales de producción para evitar vulnerabilidades."
            ],
            "followUps": [
                "¿Cómo depurarías el WebView de Android con chrome://inspect?",
                "¿Cómo depurarías en iOS con el Safari Web Inspector?"
            ]
        },
        "quiz": {
            "question": "¿Qué herramienta oficial se utiliza para depurar el DOM y la consola de JavaScript de una app Ionic/Capacitor corriendo en un dispositivo Android físico?",
            "options": [
                "Apple Xcode Instruments.",
                "La URL interna `chrome://inspect/#devices` en Google Chrome en el ordenador conectado por USB.",
                "El monitor de serial port de Arduino.",
                "Un script de inyección de alert() en cada componente."
            ],
            "explanation": "Al conectar un dispositivo Android con depuración USB habilitada, `chrome://inspect/#devices` detecta la WebView del sistema y permite abrir la suite completa de Chrome DevTools para inspeccionar la app en tiempo real.",
            "correctIndex": 1
        }
    },
    {
        "id": "ionic-15",
        "title": "¿Cómo funciona el sistema de Push Notifications con Capacitor (APNs y FCM)?",
        "level": "avanzado",
        "tags": [
            "Push Notifications",
            "APNs",
            "FCM",
            "Device Token",
            "Background Messages"
        ],
        "response": "El sistema de notificaciones push en aplicaciones móviles híbridas requiere una estrecha orquestación entre el sistema operativo, los servicios de pasarela de los fabricantes de hardware (**Apple Push Notification service - APNs** en iOS y **Firebase Cloud Messaging - FCM** en Android) y el plugin nativo **`@capacitor/push-notifications`**.\n\nArquitectura del pipeline de Push Notifications:\n1. **Solicitud de Permisos y Registro**:\n- La app solicita permiso al usuario en tiempo de ejecución: `PushNotifications.requestPermissions()`.\n- Si es concedido, se invoca `PushNotifications.register()`.\n- El sistema operativo móvil contacta a su pasarela (APNs/FCM) y devuelve un **Device Token único**.\n\n2. **Entrega del Token al Backend**:\n- El evento `registration` captura el token en la aplicación web. El cliente debe transmitir este token a la base de datos del backend para asociarlo con el ID de usuario.\n\n3. **Escucha y Manejo de Eventos**:\n- `pushNotificationReceived`: Se dispara si la notificación llega mientras la aplicación está en primer plano (Foreground).\n- `pushNotificationActionPerformed`: Se dispara cuando el usuario toca la notificación en la barra del sistema (Background / Terminated), permitiendo leer el payload (`data`) y ejecutar un deep link directo hacia la pantalla de destino.",
        "codeExample": {
            "language": "tsx",
            "code": "import React, { useEffect } from 'react';\nimport {\n  PushNotifications,\n  Token,\n  PushNotificationSchema,\n  ActionPerformed\n} from '@capacitor/push-notifications';\nimport { Capacitor } from '@capacitor/core';\nimport { useHistory } from 'react-router-dom';\n\nexport const usePushNotifications = () => {\n  const history = useHistory();\n\n  useEffect(() => {\n    if (!Capacitor.isNativePlatform()) return;\n\n    const initPush = async () => {\n      // 1. Solicitar permisos\n      let permStatus = await PushNotifications.checkPermissions();\n      if (permStatus.receive === 'prompt') {\n        permStatus = await PushNotifications.requestPermissions();\n      }\n      if (permStatus.receive !== 'granted') return;\n\n      // 2. Registrar con APNs / FCM\n      await PushNotifications.register();\n\n      // 3. Obtener el Token de registro del dispositivo\n      PushNotifications.addListener('registration', (token: Token) => {\n        console.log('[PUSH] Token obtenido con éxito:', token.value);\n        // Enviar token al servidor backend: api.saveDeviceToken(token.value)\n      });\n\n      // 4. Notificación recibida con la app abierta (Foreground)\n      PushNotifications.addListener('pushNotificationReceived', (notification: PushNotificationSchema) => {\n        console.log('[PUSH] Notificación en primer plano:', notification.title, notification.body);\n      });\n\n      // 5. Usuario hizo clic en la notificación\n      PushNotifications.addListener('pushNotificationActionPerformed', (action: ActionPerformed) => {\n        const redirectUrl = action.notification.data?.targetRoute;\n        if (redirectUrl) {\n          history.push(redirectUrl);\n        }\n      });\n    };\n\n    initPush();\n\n    return () => {\n      PushNotifications.removeAllListeners();\n    };\n  }, [history]);\n};"
        },
        "visualDiagram": {
            "diagramType": "ionic-push-notifications-flow",
            "title": "Arquitectura y Flujo de Notificaciones Push con Capacitor",
            "id": "diag-ionic-15",
            "caption": "Backend -> Pasarela APNs/FCM -> Sistema Operativo -> Capacitor Bridge -> Router de la App."
        },
        "interviewTips": {
            "whatInterviewersWant": "Conocer los eventos clave: `registration`, `registrationError`, `pushNotificationReceived` y `pushNotificationActionPerformed`. Entender la diferencia entre APNs (Apple) y FCM (Google) y cómo Capacitor unifica ambos con la misma API en TypeScript. Explicar cómo navegar a una vista específica (Deep Linking) cuando el usuario toca la notificación.",
            "commonPitfalls": [
                "No desuscribir los listeners al desmontar componentes o añadir listeners duplicados en cada render.",
                "Intentar probar Push Notifications en el simulador de iOS antiguo (se requiere un dispositivo físico o configuraciones especiales en Xcode moderno)."
            ],
            "followUps": [
                "¿Qué diferencia hay entre APNs y FCM?",
                "¿Cómo manejarías una notificación recibida con la app en primer plano?"
            ]
        },
        "quiz": {
            "question": "¿Qué evento de `@capacitor/push-notifications` permite detectar cuando un usuario pulsó sobre una notificación push en la bandeja de su teléfono?",
            "options": [
                "pushNotificationReceived",
                "pushNotificationActionPerformed",
                "notificationUserClickedHook",
                "systemTrayEvent"
            ],
            "explanation": "`pushNotificationActionPerformed` se activa específicamente cuando el usuario interactúa o toca la notificación en el centro de notificaciones del dispositivo, entregando los datos personalizados (`data`) para realizar acciones como navegación profunda.",
            "correctIndex": 1
        }
    },
    {
        "id": "ionic-16",
        "title": "¿Cómo crear un Plugin personalizado de Capacitor con Swift y Kotlin?",
        "level": "experto",
        "tags": [
            "Custom Plugin",
            "CapacitorPlugin",
            "Swift",
            "Kotlin",
            "Native Bridge"
        ],
        "response": "Cuando una aplicación requiere acceder a un hardware muy específico (por ejemplo, un lector de código de barras láser industrial, una impresora térmica Bluetooth o un SDK bancario propietario) y no existe un plugin en npm, Capacitor permite construir **Plugins Nativos Personalizados** de forma limpia y tipada.\n\nEstructura y ciclo de vida de un Plugin de Capacitor:\n\n1. **Definición de la Interfaz en TypeScript**:\n- Se declara la interfaz TypeScript con los métodos y tipos de datos. Se registra con `registerPlugin<MiPluginInterface>('MiPlugin')`.\n\n2. **Implementación en iOS (Swift / Objective-C)**:\n- Se crea una clase que hereda de `CAPPlugin` decorada con `@objc(MiPlugin)`.\n- Los métodos invocables desde JavaScript se decoran con `@objc func miMetodo(_ call: CAPPluginCall)`.\n- Se reciben argumentos con `call.getString('param')` y se responde con éxito mediante `call.resolve(['resultado': valor])` o error con `call.reject('mensaje')`.\n\n3. **Implementación en Android (Kotlin / Java)**:\n- Se crea una clase que hereda de `Plugin` decorada con `@CapacitorPlugin(name = 'MiPlugin')`.\n- Cada método se decora con `@PluginMethod public fun miMetodo(call: PluginCall)`.\n- Se retornan los datos estructurados en un `JSObject()` invocando `call.resolve(ret)`.",
        "codeExample": {
            "language": "tsx",
            "code": "// 1. Definición en TypeScript: src/plugins/thermal-printer.ts\nimport { registerPlugin } from '@capacitor/core';\n\nexport interface ThermalPrinterPlugin {\n  printReceipt(options: { text: string; copies: number }): Promise<{ success: boolean; bytesPrinted: number }>;\n}\n\nexport const ThermalPrinter = registerPlugin<ThermalPrinterPlugin>('ThermalPrinter', {\n  web: () => import('./web').then(m => new m.ThermalPrinterWeb()),\n});\n\n/* 2. Implementación en iOS (Swift): ios/App/App/ThermalPrinterPlugin.swift\nimport Foundation\nimport Capacitor\n\n@objc(ThermalPrinterPlugin)\npublic class ThermalPrinterPlugin: CAPPlugin {\n    @objc func printReceipt(_ call: CAPPluginCall) {\n        guard let text = call.getString(\"text\") else {\n            call.reject(\"Texto requerido\")\n            return\n        }\n        let copies = call.getInt(\"copies\") ?? 1\n        \n        // Ejecución nativa contra el SDK de la impresora Bluetooth...\n        call.resolve([\n            \"success\": true,\n            \"bytesPrinted\": text.utf8.count * copies\n        ])\n    }\n}\n*/\n\n/* 3. Implementación en Android (Kotlin): android/app/src/main/java/.../ThermalPrinterPlugin.kt\n@CapacitorPlugin(name = \"ThermalPrinter\")\nclass ThermalPrinterPlugin : Plugin() {\n    @PluginMethod\n    fun printReceipt(call: PluginCall) {\n        val text = call.getString(\"text\") ?: return call.reject(\"Texto requerido\")\n        val copies = call.getInt(\"copies\", 1)\n        \n        val ret = JSObject()\n        ret.put(\"success\", true)\n        ret.put(\"bytesPrinted\", text.length * copies)\n        call.resolve(ret)\n    }\n}\n*/"
        },
        "visualDiagram": {
            "diagramType": "ionic-custom-capacitor-plugin",
            "title": "Arquitectura de Plugin Personalizado de Capacitor: TS a Swift y Kotlin",
            "id": "diag-ionic-16",
            "caption": "Puente tipado: CAPPluginCall en Swift y PluginCall en Kotlin con resolución JSObject."
        },
        "interviewTips": {
            "whatInterviewersWant": "Demostrar cómo `registerPlugin` proporciona tipado estricto en el frontend. Conocer los objetos de llamada nativa: `CAPPluginCall` (Swift) y `PluginCall` (Kotlin/Java). Saber que `call.resolve()` y `call.reject()` traducen directamente a `resolve` y `reject` de la Promesa en JavaScript.",
            "commonPitfalls": [
                "Olvidar llamar a `call.resolve()` o `call.reject()`, dejando la promesa de JavaScript colgada indefinidamente en memoria (Memory Leak).",
                "Bloquear el Main Thread nativo con operaciones de red o I/O lentas en el plugin sin utilizar corrutinas o DispatchQueues en segundo plano."
            ],
            "followUps": [
                "¿Cómo se registra un plugin y se expone a JavaScript?",
                "¿Cómo tiparías la interfaz del plugin en TypeScript?"
            ]
        },
        "quiz": {
            "question": "¿Qué ocurre en la aplicación frontend si un método nativo en Swift o Kotlin de un plugin de Capacitor nunca ejecuta `call.resolve()` ni `call.reject()`?",
            "options": [
                "El sistema operativo cierra inmediatamente la aplicación por inactividad.",
                "La llamada asíncrona (`await miPlugin.metodo()`) nunca se resuelve ni se rechaza, quedando la promesa colgada eternamente en JavaScript.",
                "Capacitor reintenta la llamada automáticamente cada 250 milisegundos.",
                "El navegador genera un error sintáctico de tipo NaN en la consola."
            ],
            "explanation": "El puente de Capacitor vincula la promesa de JavaScript a la instancia de `CAPPluginCall`/`PluginCall`. Si el código nativo no invoca `resolve()` o `reject()`, el callback nunca regresa y la promesa queda pendiente indefinidamente.",
            "correctIndex": 1
        }
    },
    {
        "id": "ionic-17",
        "title": "¿Cómo implementar autenticación biométrica segura (Face ID / Fingerprint) en Ionic?",
        "level": "experto",
        "tags": [
            "Biometrics",
            "Face ID",
            "Fingerprint",
            "Keychain",
            "Android Keystore"
        ],
        "response": "La autenticación biométrica en aplicaciones móviles corporativas y bancarias no consiste simplemente en mostrar un diálogo de huella y recibir un `true`. Una arquitectura de seguridad sólida debe vincular la biometría al hardware criptográfico del dispositivo (**Secure Enclave** en Apple y **TEE / StrongBox** en Android) para proteger tokens de sesión.\n\nArquitectura de autenticación biométrica de grado bancario:\n\n1. **Verificación de Disponibilidad de Hardware**:\n- Se consulta si el dispositivo cuenta con sensores biométricos registrados mediante la API nativa (`LocalAuthentication` en iOS con `LAContext`, `BiometricPrompt` en Android).\n- Se determina el tipo de biometría disponible: Face ID, Touch ID o reconocimiento de iris.\n\n2. **El Problema del Falso Positivo / 'Bypass'**:\n- Un error de principiante es guardar un token en texto plano en `localStorage` y sólo proteger la navegación con una condición `if (isBiometricSuccess)`. Un atacante puede saltarse esto modificando el bundle o inspeccionando el almacenamiento local.\n\n3. **Almacenamiento Criptográfico Seguro (Keychain / Keystore)**:\n- La clave de cifrado o el Refresh Token sensible se guarda en el **iOS Keychain** con la bandera de control de acceso `kSecAccessControlBiometryAny` o en el **Android Keystore** con `setUserAuthenticationRequired(true)`.\n- El sistema operativo sólo libera los bytes de la clave cuando el usuario se autentica exitosamente contra el hardware biométrico. Si el sensor falla, la clave nunca sale del enclave seguro y no se pueden desencriptar los datos.",
        "codeExample": {
            "language": "tsx",
            "code": "import { NativeBiometric, BiometryType } from 'capacitor-native-biometric';\nimport { Preferences } from '@capacitor/preferences';\n\nexport class SecureVaultService {\n  private static SERVER_KEY = 'com.banco.app.refreshtoken';\n\n  // 1. Comprobar si el dispositivo soporta biometría nativa\n  static async checkAvailability(): Promise<boolean> {\n    const result = await NativeBiometric.isAvailable();\n    return result.isAvailable;\n  }\n\n  // 2. Guardar token sensible protegido por Keychain / Keystore criptográfico\n  static async storeSecureToken(userId: string, token: string): Promise<void> {\n    await NativeBiometric.setCredentials({\n      server: this.SERVER_KEY,\n      username: userId,\n      password: token\n    });\n  }\n\n  // 3. Autenticar con Face ID / Huella y recuperar credenciales descifradas por hardware\n  static async unlockAndGetToken(userId: string): Promise<string | null> {\n    try {\n      // Solicitar autenticación nativa obligatoria al Secure Enclave\n      await NativeBiometric.verifyIdentity({\n        reason: 'Verifique su identidad para acceder a sus cuentas bancarias',\n        title: 'Autenticación Biométrica',\n        subtitle: 'Ingrese su huella o Face ID',\n        description: 'Protección de alta seguridad'\n      });\n\n      // Si la verificación fue exitosa en el hardware, el Keychain libera el valor cifrado\n      const credentials = await NativeBiometric.getCredentials({\n        server: this.SERVER_KEY\n      });\n\n      return credentials.password;\n    } catch (error) {\n      console.warn('[SECURITY] Falló la verificación biométrica o el usuario canceló:', error);\n      return null;\n    }\n  }\n}"
        },
        "visualDiagram": {
            "diagramType": "ionic-biometric-auth-keychain",
            "title": "Arquitectura de Autenticación Biométrica Segura con Hardware Enclave",
            "id": "diag-ionic-17",
            "caption": "LocalAuthentication / BiometricPrompt -> Secure Enclave -> iOS Keychain / Android Keystore."
        },
        "interviewTips": {
            "whatInterviewersWant": "Distinguir entre una simple validación booleana en JS vs protección criptográfica en Secure Enclave / Keystore. Conocer los requisitos de iOS (`NSFaceIDUsageDescription` en `Info.plist`) para no ser rechazado por Apple. Mencionar cómo gestionar alternativas cuando el usuario no tiene biometría configurada (fallback a PIN/Password).",
            "commonPitfalls": [
                "Almacenar el token en `localStorage` o `Preferences` ordinario tras pasar la biometría (cualquier debugger puede extraerlo).",
                "No manejar el caso donde el usuario cancela voluntariamente el modal de biometría."
            ],
            "followUps": [
                "¿Por qué no basta con validar la biometría en el frontend?",
                "¿Cómo vincularías la biometría a credenciales del Keychain o Keystore?"
            ]
        },
        "quiz": {
            "question": "¿Por qué es una vulnerabilidad crítica de seguridad almacenar un token en `localStorage` y protegerlo únicamente con una condición `if (biometricSuccess)`?",
            "options": [
                "Porque `localStorage` se borra automáticamente cada 2 horas en dispositivos móviles.",
                "Porque el token en localStorage no está cifrado en reposo y un atacante con acceso físico o con una app en modo debug puede leerlo sin interactuar con el sensor biométrico.",
                "Porque la biometría requiere que el token tenga formato XML.",
                "Porque Face ID deshabilita la conexión a Internet si detecta un token en texto plano."
            ],
            "explanation": "Si los datos sensibles no están almacenados dentro del Keychain o Keystore con control de acceso criptográfico ligado al hardware, cualquier atacante o script malicioso puede leer el token directamente del disco sin necesidad de pasar por el sensor biométrico.",
            "correctIndex": 1
        }
    },
    {
        "id": "ionic-18",
        "title": "¿Cómo configurar Deep Linking y Universal Links / App Links en Ionic?",
        "level": "experto",
        "tags": [
            "Deep Linking",
            "Universal Links",
            "App Links",
            "AASA",
            "Assetlinks",
            "Capacitor App"
        ],
        "response": "El **Deep Linking** permite a una aplicación móvil responder a enlaces web estándar (`https://midominio.com/producto/42`), abriendo la aplicación nativa directamente en la pantalla solicitada en lugar de abrir el navegador web.\n\nPara implementar enlaces profundos de forma profesional y segura, se utilizan **Universal Links** (en iOS) y **App Links** (en Android), los cuales se basan en una relación de confianza criptográfica bidireccional entre el dominio web y la aplicación móvil instalada:\n\n1. **Configuración en el Servidor Web (Asociación de Dominio)**:\n- **iOS**: Se debe alojar un archivo JSON en la raíz HTTPS del dominio bajo la ruta estricta `https://midominio.com/.well-known/apple-app-site-association` (AASA), especificando el `appID` (`TeamID.BundleIdentifier`) y las rutas soportadas.\n- **Android**: Se debe alojar el archivo `https://midominio.com/.well-known/assetlinks.json`, especificando el `package_name` y la huella digital SHA-256 del certificado de firma de la app.\n\n2. **Configuración en los Proyectos Nativos**:\n- En Xcode: Agregar el entitlement **Associated Domains** con el valor `applinks:midominio.com`.\n- En Android Studio: Agregar un `<intent-filter android:autoVerify=\"true\">` dentro de la actividad principal en `AndroidManifest.xml`.\n\n3. **Captura del Enlace en la Aplicación Ionic (`@capacitor/app`)**:\n- Se escucha el evento `appUrlOpen`. Cuando el usuario hace clic en el enlace, Capacitor entrega la URL completa y el enrutador de Ionic navega a la vista interna correspondiente.",
        "codeExample": {
            "language": "tsx",
            "code": "import React, { useEffect } from 'react';\nimport { App, URLOpenListenerEvent } from '@capacitor/app';\nimport { useHistory } from 'react-router-dom';\n\nexport const DeepLinkHandler: React.FC = () => {\n  const history = useHistory();\n\n  useEffect(() => {\n    // Escuchar eventos de apertura mediante Universal Links / App Links / Custom Schemes\n    const listener = App.addListener('appUrlOpen', (event: URLOpenListenerEvent) => {\n      console.log('[DEEP LINK] URL recibida:', event.url);\n      \n      // Ejemplo: 'https://midominio.com/tienda/producto/99'\n      // o esquema personalizado: 'mi-app://tienda/producto/99'\n      const parsedUrl = new URL(event.url);\n      const internalPath = parsedUrl.pathname + parsedUrl.search;\n\n      // Navegar internamente usando el router de Ionic / React Router\n      if (internalPath) {\n        history.push(internalPath);\n      }\n    });\n\n    return () => {\n      listener.then(l => l.remove());\n    };\n  }, [history]);\n\n  return null; // Componente de efecto global montado en la raíz de la app\n};"
        },
        "visualDiagram": {
            "diagramType": "ionic-deep-linking-universal-links",
            "title": "Verificación de Deep Linking: Universal Links (iOS) y App Links (Android)",
            "id": "diag-ionic-18",
            "caption": "apple-app-site-association y assetlinks.json validan la apertura segura sin diálogos ambiguos."
        },
        "interviewTips": {
            "whatInterviewersWant": "Conocer los nombres exactos de los archivos de asociación: `apple-app-site-association` (sin extensión .json) y `assetlinks.json`. Entender la diferencia entre Custom URL Schemes (`miapp://`) y Universal Links (`https://`). Los Universal Links son más seguros porque nadie puede usurpar tu dominio verificado. Saber cómo capturar y despachar la ruta recibida en `@capacitor/app` con `App.addListener('appUrlOpen')`.",
            "commonPitfalls": [
                "Servir el archivo `apple-app-site-association` con redirecciones HTTP 301/302 (iOS exige respuesta 200 directa y encabezado `content-type: application/json`).",
                "Olvidar configurar `android:autoVerify=\"true\"`, provocando que Android muestre el diálogo molesto de 'Abrir con el navegador o la aplicación'."
            ],
            "followUps": [
                "¿Qué archivos de verificación requieren Universal Links (apple-app-site-association) y App Links (assetlinks.json)?",
                "¿Cómo enrutarías un deep link dentro de la app?"
            ]
        },
        "quiz": {
            "question": "¿Por qué los Universal Links (iOS) y App Links (Android) basados en HTTPS son mucho más seguros que los esquemas de URL personalizados (Custom Schemes como `miapp://`)?",
            "options": [
                "Porque los Custom Schemes no funcionan con redes 4G o 5G móviles.",
                "Porque cualquier aplicación maliciosa instalada en el dispositivo puede registrar el mismo Custom Scheme (`miapp://`) y secuestrar el tráfico del usuario; los Universal Links verifican la propiedad del dominio HTTPS en el servidor.",
                "Porque los Universal Links no requieren ningún archivo de configuración en el servidor web.",
                "Porque Apple y Google pagan una comisión monetaria a los dominios verificados."
            ],
            "explanation": "Cualquier app puede reclamar un protocolo arbitrario como `banco://` en su manifiesto. En cambio, Universal Links y App Links validan criptográficamente en el servidor HTTPS (`apple-app-site-association` y `assetlinks.json`) que solo la aplicación oficial del propietario puede abrir dichos enlaces.",
            "correctIndex": 1
        }
    },
    {
        "id": "ionic-19",
        "title": "¿Cómo proteger el código fuente de una app Ionic/Capacitor contra ingeniería inversa?",
        "level": "experto",
        "tags": [
            "Security",
            "SSL Pinning",
            "Reverse Engineering",
            "Obfuscation",
            "Keystore"
        ],
        "response": "Al compilar una aplicación híbrida en un APK/AAB de Android o un archivo IPA de iOS, el paquete web (HTML, JavaScript, CSS e imágenes) se aloja dentro del directorio de assets del paquete nativo. Si un atacante descomprime el archivo binario, puede inspeccionar el código fuente con facilidad a menos que se implemente una **estrategia de defensa en profundidad (Defense-in-Depth)**:\n\n1. **Ofuscación y Minificación Avanzada del Bundle Web**:\n- Ir más allá de la simple minificación de Vite/Webpack mediante herramientas como **JScrambler** o Terser con polimorfismo de código, aplanamiento de flujo de control (control flow flattening), cifrado de cadenas de texto y defensas antimanipulación (anti-tampering) que bloquean la ejecución si se detecta un debugger abierto.\n\n2. **SSL / TLS Certificate Pinning**:\n- Las llamadas `fetch` o `axios` en la WebView utilizan el almacén de certificados del sistema, lo que hace vulnerable la app a ataques Man-in-the-Middle (MitM) mediante proxies como Charles o Burp Suite.\n- Se implementa **SSL Pinning** mediante `@capacitor-community/http` o plugins nativos dedicados, validando los hashes de las claves públicas (Public Key Pinning) del servidor en código nativo (Swift/Kotlin) antes de enviar las peticiones.\n\n3. **Desactivación de Depuración en Builds de Release**:\n- Asegurar que en Android `setWebContentsDebuggingEnabled(false)` esté inactivo y eliminar `android:debuggable=\"true\"` del manifiesto.\n- Implementar comprobación de dispositivos rooteados o con Jailbreak mediante plugins nativos, impidiendo la ejecución en entornos inseguros.",
        "codeExample": {
            "language": "tsx",
            "code": "// Implementación de peticiones seguras con SSL Pinning y bypass del WebView\nimport { CapacitorHttp, HttpResponse } from '@capacitor/core';\nimport { Capacitor } from '@capacitor/core';\n\nexport class SecureApiService {\n  private static BASE_URL = 'https://api.bancocentral.com/v1';\n\n  // Usar CapacitorHttp ejecuta la petición en el motor nativo del SO (URLSession / OkHttp)\n  // en vez de usar la red de la WebView, respetando el SSL Pinning nativo configurado\n  static async executeSecurePost<T>(endpoint: string, payload: unknown): Promise<T> {\n    if (!Capacitor.isNativePlatform()) {\n      console.warn('[SECURITY] Modo web: SSL Pinning nativo inactivo');\n    }\n\n    const response: HttpResponse = await CapacitorHttp.post({\n      url: `${this.BASE_URL}${endpoint}`,\n      headers: {\n        'Content-Type': 'application/json',\n        'X-Requested-With': 'com.banco.app.native'\n      },\n      data: payload,\n      // Configuración de timeouts estrictos contra ataques de latencia\n      connectTimeout: 10000,\n      readTimeout: 10000\n    });\n\n    if (response.status !== 200 && response.status !== 201) {\n      throw new Error(`Error de red seguro: Código ${response.status}`);\n    }\n\n    return response.data as T;\n  }\n}"
        },
        "visualDiagram": {
            "diagramType": "ionic-security-obfuscation-pinning",
            "title": "Estrategia de Seguridad en Capas: Ofuscación, SSL Pinning y Detección de Root",
            "id": "diag-ionic-19",
            "caption": "Defensa en profundidad: Assets Web Cifrados -> SSL Pinning Nativo -> Detección de Jailbreak."
        },
        "interviewTips": {
            "whatInterviewersWant": "Explicar por qué las peticiones estándar de la WebView (`fetch`/`xhr`) son vulnerables a inspección por proxy MitM. Demostrar conocimiento del uso de `CapacitorHttp` para canalizar llamadas a través de las capas nativas de iOS y Android. Mencionar la regla de oro: NUNCA almacenar llaves privadas secretas o contraseñas maestras codificadas en el bundle JavaScript.",
            "commonPitfalls": [
                "Dejar llaves maestras de API (por ejemplo `AWS_SECRET_KEY` o `STRIPE_SECRET_KEY`) hardcodeadas en variables de entorno del frontend.",
                "Creer que minificar el código con Terser es suficiente protección contra decompilación profesional."
            ],
            "followUps": [
                "¿Qué es el SSL pinning?",
                "¿Por qué no debes incluir secretos en el bundle de la app?"
            ]
        },
        "quiz": {
            "question": "¿Cuál es la principal ventaja de utilizar `CapacitorHttp` en lugar del `fetch()` nativo de JavaScript para peticiones a servicios críticos?",
            "options": [
                "CapacitorHttp convierte todas las respuestas de JSON a tablas binarias de Excel.",
                "Ejecuta las peticiones a través de las capas de red nativas del SO (URLSession en iOS y OkHttp en Android), permitiendo aplicar SSL Certificate Pinning e ignorando restricciones de CORS de la WebView.",
                "CapacitorHttp no requiere que el dispositivo cuente con una dirección IP válida.",
                "Permite descargar paquetes de npm en tiempo de ejecución sin conexión a Internet."
            ],
            "explanation": "Al derivar la petición hacia las librerías nativas (`URLSession` en iOS y `OkHttp` en Android), `CapacitorHttp` elude las limitaciones de CORS de la WebView y permite aplicar validaciones estrictas de certificados SSL (Pinning) imposibles de alterar en JS.",
            "correctIndex": 1
        }
    },
    {
        "id": "ionic-20",
        "title": "¿Cómo diseñar una estrategia de actualización continua en vivo (Live Updates / OTA)?",
        "level": "experto",
        "tags": [
            "Live Updates",
            "OTA",
            "Appflow",
            "Capawesome",
            "CodePush",
            "Hot Reload"
        ],
        "response": "En las tiendas de aplicaciones tradicionales (Apple App Store y Google Play Store), publicar una corrección urgente de un error crítico o actualizar un banner promocional puede tardar días debido a los tiempos de revisión y aprobación humana.\n\nDado que una aplicación Ionic/Capacitor se compone de un contenedor nativo estable y un paquete web dinámico (HTML, JavaScript, CSS), es posible implementar una estrategia de **Actualizaciones en Vivo por el Aire (Live Updates / OTA - Over The Air)**:\n\n1. **Cumplimiento de las Normas de las Tiendas (App Store Guidelines)**:\n- **Regla 3.3.2 de Apple**: Apple permite explícitamente actualizar el código interpretado (JavaScript, HTML, CSS y assets) de una aplicación sin pasar por una nueva revisión de la App Store, **siempre y cuando NO se altere la naturaleza o propósito principal de la aplicación** registrado originalmente.\n\n2. **Mecanismo Técnico de Live Updates (Ej. Ionic Appflow / Capawesome Cloud)**:\n- **Detección de Versión**: Al iniciar la app en segundo plano, un plugin de Capacitor consulta a un servidor CDN seguro si existe una nueva versión (`manifest.json` con hash de compilación).\n- **Descarga en Segundo Plano**: Descarga el archivo `.zip` con el nuevo bundle web y verifica su firma criptográfica.\n- **Descompresión y Redirección del Servidor Local**: El plugin descomprime el bundle en un directorio local seguro y redirige el puntero del servidor interno de Capacitor (`Capacitor.getServerBasePath()`) a la nueva versión sin requerir reinstalación.\n\n3. **Mecanismo de Rollback Automático**:\n- Si el nuevo bundle arroja un error crítico no capturado durante el arranque, el sistema detecta el fallo, revierte inmediatamente a la versión nativa original que venía de fábrica y reporta la telemetría al servidor.",
        "codeExample": {
            "language": "tsx",
            "code": "// Arquitectura de actualización OTA con el plugin oficial de Live Updates\nimport { Deploy } from '@ionic/appflow-deploy';\nimport { Capacitor } from '@capacitor/core';\n\nexport class LiveUpdateManager {\n  // Comprueba y aplica actualizaciones transparentes al reiniciar la app\n  static async performLiveUpdate(): Promise<void> {\n    if (!Capacitor.isNativePlatform()) return;\n\n    try {\n      console.log('[OTA] Buscando actualizaciones en el CDN...');\n      // 1. Consultar si hay nueva versión del bundle web en el canal configurado\n      const update = await Deploy.checkForUpdate();\n      \n      if (update.available) {\n        console.log('[OTA] Nueva versión detectada. Descargando bundle...');\n        \n        // 2. Descargar y descomprimir el paquete en almacenamiento seguro local\n        await Deploy.downloadUpdate((progress) => {\n          console.log(`[OTA] Progreso de descarga: ${progress}%`);\n        });\n\n        // 3. Extraer los archivos del bundle\n        await Deploy.extractUpdate();\n\n        console.log('[OTA] Actualización lista. Se aplicará de forma transparente');\n        // 4. Opcional: Recargar de inmediato si es una corrección crítica de seguridad\n        // await Deploy.reloadApp();\n      } else {\n        console.log('[OTA] La app cuenta con la última versión del bundle');\n      }\n    } catch (error) {\n      console.error('[OTA] Error al verificar Live Updates:', error);\n      // En caso de fallo de red, la app continúa operando con el bundle local actual\n    }\n  }\n}"
        },
        "visualDiagram": {
            "diagramType": "ionic-live-updates-ota",
            "title": "Arquitectura de Actualizaciones en Vivo Over-The-Air (OTA) con Capacitor",
            "id": "diag-ionic-20",
            "caption": "CI/CD -> CDN Seguro -> Descarga de bundle web -> Hot swap del basePath local con rollback."
        },
        "interviewTips": {
            "whatInterviewersWant": "Explicar la Regla 3.3.2 de Apple sobre código interpretado y por qué Live Updates no infringe las normas de la App Store. Entender qué cosas se pueden actualizar vía OTA (código web, TS/JS/CSS, assets) y cuáles NO (plugins nativos de Swift/Kotlin, permisos de Info.plist o iconos de app). Mencionar la importancia de un mecanismo de rollback de seguridad ante fallos inesperados en producción.",
            "commonPitfalls": [
                "Intentar agregar un nuevo plugin nativo de Capacitor mediante una actualización OTA sin subir un nuevo binario a las tiendas (causará un crash inmediato).",
                "Modificar sustancialmente la funcionalidad principal de la app mediante OTA para eludir la revisión de la App Store (motivo de expulsión de la cuenta de Apple)."
            ],
            "followUps": [
                "¿Qué cambios se pueden distribuir por OTA y cuáles requieren pasar por la tienda?",
                "¿Cómo harías rollback de una actualización OTA defectuosa?"
            ]
        },
        "quiz": {
            "question": "¿Qué cambio NO puede aplicarse a una aplicación Ionic/Capacitor a través de una actualización Live Update (OTA) sin publicar un nuevo binario en Google Play y App Store?",
            "options": [
                "Corregir un error de lógica en una función de validación de un formulario en TypeScript.",
                "Actualizar el estilo de los botones y la paleta de colores corporativa en CSS.",
                "Agregar un nuevo plugin nativo en Swift/Kotlin o solicitar un nuevo permiso en `Info.plist` / `AndroidManifest.xml`.",
                "Modificar el texto de un banner promocional en la pantalla principal."
            ],
            "explanation": "Las actualizaciones OTA sólo pueden reemplazar los archivos del bundle web (JS, HTML, CSS, assets). Cualquier modificación que involucre código nativo compilado (Swift, Kotlin, Java), dependencias nativas o permisos del sistema requiere forzosamente compilar un nuevo binario y someterlo a revisión de las tiendas.",
            "correctIndex": 2
        }
    }
]
};

export default questionsIonic;
