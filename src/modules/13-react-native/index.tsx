import { ISection } from "../../types";

export const questionsReactNative: ISection = {
  title: "React Native",
  collapse: "collapseReactNative",
  icon: "react-native",
  questions: [
    // === BÁSICO ===
    {
      title: "¿Qué es React Native y cómo se diferencia de React Web?",
      response:
        "React Native es un framework de Meta para crear aplicaciones móviles nativas para iOS y Android usando React. En lugar de compilar a HTML/DOM, compila a componentes de interfaz nativos (UIView en iOS, android.view en Android).",
      level: "basico"
    },
    {
      title: "¿Cuáles son los componentes primitivos equivalentes a HTML?",
      response:
        "`<View>` equivale a `<div>`, `<Text>` a `<p>/<span>`, `<Image>` a `<img>`, `<TextInput>` a `<input>`, y `<ScrollView>` a contenedores con scroll.",
      level: "basico"
    },
    {
      title: "¿Cómo funciona el sistema de estilos en React Native?",
      response:
        "Se usa `StyleSheet.create({})` con sintaxis de objetos camelCase basada en Flexbox. A diferencia de la web, la dirección por defecto de Flexbox es `flexDirection: 'column'` y no existen unidades en `px` (usa puntos independientes de densidad, dp).",
      level: "basico"
    },
    {
      title: "¿Qué diferencia hay entre TouchableOpacity, TouchableHighlight y Pressable?",
      response:
        "`Pressable` es el componente moderno recomendado por React Native que provee feedback granular en fases de interacción (pressIn, pressOut, longPress, hover) y render props dinámicos, superando a los viejos componentes `Touchable*`.",
      level: "basico"
    },
    {
      title: "¿Qué es Expo y qué ventajas ofrece?",
      response:
        "Expo es un ecosistema de herramientas y servicios para React Native que elimina la necesidad de configurar Xcode/Android Studio en etapas iniciales (Expo Go), ofrece bibliotecas nativas integradas y servicio de compilación en la nube (EAS Build).",
      level: "basico"
    },
    // === MEDIO ===
    {
      title: "¿Qué diferencia hay entre Expo Managed Workflow y Bare Workflow?",
      response:
        "En Managed Workflow, Expo gestiona los proyectos nativos (`ios/` y `android/`) automáticamente mediante prebuild / config plugins. En Bare Workflow, tienes acceso directo y manual al código nativo en Swift/Objective-C y Kotlin/Java.",
      level: "medio"
    },
    {
      title: "¿Por qué se debe usar FlatList o SectionList en lugar de ScrollView para listas largas?",
      response:
        "`ScrollView` renderiza todos los elementos hijos en memoria simultáneamente, causando bloqueos de memoria en listas grandes. `FlatList` virtualiza los elementos, renderizando únicamente aquellos visibles en la ventana de visualización (viewport) más un buffer.",
      level: "medio"
    },
    {
      title: "¿Cómo se maneja el enrutamiento con React Navigation y Expo Router?",
      response:
        "`React Navigation` utiliza navegadores por pilas (Stack), pestañas (Bottom Tabs) y cajón (Drawer). `Expo Router` introduce enrutamiento basado en archivos (File-based Routing) sobre React Navigation, similar al modelo de Next.js.",
      level: "medio"
    },
    {
      title: "¿Qué diferencia hay entre AsyncStorage y react-native-mmkv?",
      response:
        "`AsyncStorage` es asíncrono y lento (usa SQLite/SharedPreferences pasando por el puente serializado). `react-native-mmkv` usa C++ y JSI para acceso síncrono a memoria de almacenamiento, siendo hasta 30 veces más rápido.",
      level: "medio"
    },
    {
      title: "¿Cómo manejar código específico de plataforma en React Native?",
      response:
        "Usando el módulo `Platform.OS === 'ios'`, `Platform.select({ ios: ..., android: ... })` o extensiones de archivo dedicadas que el bundler Metro resuelve automáticamente (`Boton.ios.tsx` y `Boton.android.tsx`).",
      level: "medio"
    },
    // === AVANZADO ===
    {
      title: "¿Qué es la Nueva Arquitectura de React Native (Fabric y TurboModules)?",
      response:
        "Es la modernización del core de React Native que elimina el puente asíncrono (Bridge). Se compone de Fabric (nuevo motor de renderizado C++ concurrente) y TurboModules (carga perezosa de módulos nativos bajo demanda vía JSI).",
      level: "avanzado"
    },
    {
      title: "¿Qué es JSI (JavaScript Interface) y por qué supera al antiguo Bridge?",
      response:
        "JSI permite que el motor de JavaScript mantenga referencias directas a objetos de C++ nativos (Host Objects). Elimina la serialización/deserialización JSON por hilos asíncronos, permitiendo invocaciones de métodos síncronas y de latencia cero.",
      level: "avanzado"
    },
    {
      title: "¿Cómo funciona React Native Reanimated 3 con Worklets?",
      response:
        "Reanimated ejecuta animaciones y gestos directamente en el hilo de UI nativo (UI Thread) a 60/120 FPS sin saturar el hilo de JavaScript, mediante pequeñas funciones compiladas en C++ llamadas 'Worklets' (`useAnimatedStyle`, `withSpring`).",
      level: "avanzado"
    },
    {
      title: "¿Cómo funciona el Bundler Metro en React Native?",
      response:
        "Metro es el empaquetador ultrarrápido de React Native. Transforma y resuelve dependencias a través de tres fases (Resolution, Transformation, Serialization) y soporta Fast Refresh para recarga de módulos en milisegundos sin perder el estado de la UI.",
      level: "avanzado"
    },
    {
      title: "¿Qué es Codegen en la Nueva Arquitectura de React Native?",
      response:
        "Es una herramienta que genera código de enlace estricto en C++, Java y Objective-C a partir de interfaces de TypeScript o Flow, asegurando compatibilidad de tipos en tiempo de compilación entre JavaScript y las capas nativas.",
      level: "avanzado"
    },
    // === EXPERTO ===
    {
      title: "¿Qué es el motor JavaScript Hermes y qué optimizaciones implementa?",
      response:
        "Hermes es un motor JS optimizado por Meta para React Native. Precompila el código JavaScript a bytecode binario (HBC) durante el build (AOT), reduce el tiempo de arranque de la app (TTI), disminuye el uso de memoria RAM y optimiza el Garbage Collector.",
      level: "experto"
    },
    {
      title: "¿Cuál es el modelo de hilos (Threading Model) en React Native?",
      response:
        "Consta de: 1) **JS Thread** (ejecuta lógica de negocio de React), 2) **Shadow Thread** (calcula layout con el motor Yoga en C++), 3) **UI/Main Thread** (renderiza vistas nativas del SO) y 4) **Background Modules Threads** para tareas nativas pesadas.",
      level: "experto"
    },
    {
      title: "¿Qué es el modo Bridgeless en React Native 0.74+?",
      response:
        "Es el estado donde el legacy Bridge de JavaScript queda 100% deshabilitado. Todas las comunicaciones de renderizado y módulos nativos fluyen exclusivamente a través de JSI, Fabric y TurboModules sin emulación de compatibilidad.",
      level: "experto"
    },
    {
      title: "¿Cómo diagnosticar y resolver caídas de frames (FPS drops) en React Native?",
      response:
        "Utilizando Flipper / React DevTools Profiler para detectar renders innecesarios en el JS Thread; verificando que las animaciones usen `useNativeDriver: true` o Reanimated; y usando Android Studio Profiler / Xcode Instruments para detectar cuellos de botella en el hilo nativo.",
      level: "experto"
    },
    {
      title: "¿Cómo implementar un Custom Native Module con C++ y TurboModules?",
      response:
        "Se define la especificación de tipos en TypeScript (`TurboModuleRegistry.getEnforcing<Spec>`), se corre Codegen para generar los headers C++, y se implementa la lógica en C++ heredando de la clase generada, logrando código multiplataforma nativo compartido entre iOS y Android.",
      level: "experto"
    }
  ]
};

export default questionsReactNative;
