import { ISection } from "../../types";

export const questionsIonic: ISection = {
  title: "Ionic",
  collapse: "collapseIonic",
  icon: "ionic",
  questions: [
    // === BÁSICO ===
    {
      title: "¿Qué es Ionic Framework y para qué se utiliza?",
      response:
        "Es un toolkit de interfaz de usuario de código abierto para construir aplicaciones multiplataforma (iOS, Android, PWA, Electron) usando estándares web (HTML, CSS, TypeScript) compatibles con Angular, React, Vue o JavaScript puro.",
      level: "basico"
    },
    {
      title: "¿Qué diferencia hay entre Ionic y React Native / Flutter?",
      response:
        "Ionic renderiza dentro de una WebView nativa acelerada por hardware usando Web Components, mientras que React Native y Flutter compilan y renderizan directamente sobre primitivas de interfaz nativas o lienzos gráficos dedicados (Skia/Impeller).",
      level: "basico"
    },
    {
      title: "¿Qué es Capacitor y por qué reemplazó a Apache Cordova?",
      response:
        "Capacitor es el runtime multiplataforma nativo oficial de Ionic. A diferencia de Cordova, Capacitor expone los proyectos nativos reales de Xcode y Android Studio, tiene soporte First-Class para TypeScript, APIs modernas y un sistema de plugins más estable y tipado.",
      level: "basico"
    },
    {
      title: "¿Cómo maneja Ionic la apariencia visual adaptativa (iOS vs Android)?",
      response:
        "Ionic detecta automáticamente el sistema operativo y aplica el modo de diseño correspondiente: 'ios' (Human Interface Guidelines) o 'md' (Material Design de Google), adaptando animaciones, tipografías, íconos y comportamiento de modales.",
      level: "basico"
    },
    {
      title: "¿Qué son los Web Components en Ionic?",
      response:
        "Desde Ionic 4+, todos los componentes de UI (`ion-button`, `ion-card`, `ion-modal`) son Web Components nativos construidos con Stencil, lo que garantiza encapsulación de estilos con Shadow DOM y compatibilidad con cualquier framework.",
      level: "basico"
    },
    // === MEDIO ===
    {
      title: "¿Cómo funciona el ciclo de vida de navegación en Ionic?",
      response:
        "Ionic mantiene las vistas previas vivas en el DOM en una pila de navegación para transiciones fluidas. Provee hooks específicos: `ionViewWillEnter`, `ionViewDidEnter`, `ionViewWillLeave` y `ionViewDidLeave` para disparar acciones al entrar o salir de pantalla.",
      level: "medio"
    },
    {
      title: "¿Qué es IonRouterOutlet y cómo gestiona el stack de navegación?",
      response:
        "Es el contenedor de enrutamiento adaptado para móviles. A diferencia del router estándar de la web, gestiona una pila de historial móvil (Stack Navigation) con soporte para gestos táctiles de deslizamiento (swipe-to-go-back en iOS).",
      level: "medio"
    },
    {
      title: "¿Cómo se accede a la cámara y galería con Capacitor?",
      response:
        "Instalando `@capacitor/camera` y ejecutando `Camera.getPhoto({ resultType: CameraResultType.Uri, source: CameraSource.Camera })`. Capacitor maneja automáticamente los diálogos de permisos del sistema operativo.",
      level: "medio"
    },
    {
      title: "¿Cómo manejar almacenamiento local persistente con Capacitor Preferences / SQLite?",
      response:
        "`@capacitor/preferences` ofrece almacenamiento clave-valor nativo (UserDefaults en iOS y SharedPreferences en Android). Para bases de datos relacionales offline complejas se utiliza el plugin oficial `@capacitor-community/sqlite`.",
      level: "medio"
    },
    {
      title: "¿Cómo implementar Modales y Sheets interactivos con IonModal?",
      response:
        "`<ion-modal>` soporta puntos de interrupción táctiles (`breakpoints: [0, 0.5, 0.8]`, `initialBreakpoint: 0.5`), permitiendo crear paneles deslizables (Sheet Modals) nativos con gestos táctiles directos.",
      level: "medio"
    },
    // === AVANZADO ===
    {
      title: "¿Cómo funciona la API de Animaciones de Ionic (AnimationController)?",
      response:
        "`createAnimation()` permite construir animaciones web aceleradas por GPU sin bibliotecas externas pesadas. Manipula `transform` y `opacity` utilizando la Web Animations API nativa para garantizar 60 FPS consistentes.",
      level: "avanzado"
    },
    {
      title: "¿Cómo optimizar el rendimiento de listas masivas en Ionic?",
      response:
        "Utilizando virtualización de listas (`cdk-virtual-scroll-viewport` en Angular o virtualizadores en React/Vue) combinada con `<ion-infinite-scroll>` e `<ion-virtual-scroll>` para reciclar nodos DOM y mantener bajo el uso de memoria de la WebView.",
      level: "avanzado"
    },
    {
      title: "¿Cómo manejar la barra de estado y áreas seguras (Safe Areas / Notch) en dispositivos modernos?",
      response:
        "Usando `@capacitor/status-bar` para alternar estilos de color y visibilidad, y aplicando variables de entorno CSS (`padding-top: env(safe-area-inset-top)`) junto con las clases utilitarias de Ionic para respetar notches y dynamic islands.",
      level: "avanzado"
    },
    {
      title: "¿Cómo depurar una aplicación Ionic/Capacitor en dispositivos reales?",
      response:
        "Para Android: habilitar depuración USB y abrir `chrome://inspect` en Google Chrome. Para iOS: conectar el iPhone, abrir Safari en Mac y seleccionar el dispositivo en el menú 'Desarrollo' para inspeccionar el DOM, consola y red de la WebView.",
      level: "avanzado"
    },
    {
      title: "¿Cómo funciona el sistema de Push Notifications con Capacitor?",
      response:
        "Con `@capacitor/push-notifications` registrando el dispositivo con Firebase Cloud Messaging (FCM) o Apple Push Notification service (APNs). El plugin entrega el token de registro al backend y escucha eventos de recepción y click.",
      level: "avanzado"
    },
    // === EXPERTO ===
    {
      title: "¿Cómo crear un Plugin personalizado de Capacitor con Swift y Kotlin?",
      response:
        "Se define la interfaz en TypeScript con `@CapacitorPlugin`. En iOS se crea una clase que hereda de `CAPPlugin` con métodos decorados `@objc`, y en Android una clase `Plugin` con anotaciones `@PluginMethod`. Se devuelven datos con `call.resolve(JSObject)`.",
      level: "experto"
    },
    {
      title: "¿Cómo implementar autenticación biométrica segura (Face ID / Fingerprint) en Ionic?",
      response:
        "Usando `@pantrist/capacitor-plugin-biometrics` o plugins nativos equivalentes para invocar `LocalAuthentication` en iOS y `BiometricPrompt` en Android. Las credenciales sensibles se guardan en el Keychain de iOS o Android Keystore.",
      level: "experto"
    },
    {
      title: "¿Cómo configurar Deep Linking y Universal Links / App Links en Ionic?",
      response:
        "Configurando `apple-app-site-association` en el servidor y domains en los entitlements de Xcode para iOS, y `assetlinks.json` con intent filters en `AndroidManifest.xml` para Android. `@capacitor/app` escucha el evento `appUrlOpen`.",
      level: "experto"
    },
    {
      title: "¿Cómo proteger el código fuente de una app Ionic/Capacitor contra ingeniería inversa?",
      response:
        "Ofuscación de JavaScript/CSS con Terser/JScrambler, habilitación de SSL Pinning en peticiones de red para prevenir ataques Man-in-the-Middle, desactivación de depuración web en builds de producción y cifrado de bases de datos locales.",
      level: "experto"
    },
    {
      title: "¿Cómo diseñar una estrategia de actualización continua en vivo (Live Updates / OTA)?",
      response:
        "Utilizando servicios como Ionic Appflow Live Updates o Capawesome Cloud. Permite descargar e inyectar nuevos bundles web (HTML/JS/CSS) en segundo plano directamente al dispositivo sin necesidad de pasar por el proceso de revisión de las tiendas de apps.",
      level: "experto"
    }
  ]
};

export default questionsIonic;
