import { ISection } from "../../types";

export const questionsReactNative: ISection = {
  id: "react-native",
  title: "React Native",
  collapse: "collapseReactNative",
  icon: "react-native",
  category: "frameworks",
  description:
    "Desarrollo móvil nativo con React, New Architecture (Fabric, TurboModules), JSI, Reanimated 3, Hermes y Expo.",
  questions: [
    {
        "id": "rn-01",
        "title": "¿Qué es React Native y cómo se diferencia de React Web?",
        "level": "basico",
        "tags": [
            "React-Native",
            "Mobile",
            "Host-Views",
            "UIView",
            "Fabric",
            "Cross-Platform"
        ],
        "response": "React Native es un framework de código abierto creado por Meta para desarrollar aplicaciones móviles nativas para iOS y Android utilizando React y TypeScript/JavaScript. Su filosofía fundamental es \"Aprende una vez, escribe en cualquier parte\" (Learn once, write anywhere).\n\nA diferencia de React Web (donde ReactDOM genera un árbol del DOM virtual que se sincroniza con etiquetas HTML en un navegador), React Native no utiliza HTML, CSS tradicional ni un navegador web (WebView). En su lugar, el reconciliador de React interactúa con el motor de renderizado Fabric y Yoga (motor de layout C++) para instanciar y controlar directamente **componentes nativos reales del sistema operativo**:\n- En iOS, se generan vistas nativas basadas en UIKit (`UIView`, `UILabel`, `UIImageView`, etc.).\n- En Android, se generan vistas nativas de la jerarquía de Android (`android.view.ViewGroup`, `TextView`, `ImageView`, etc.).\n\nLa lógica de negocio y el estado se escriben de forma declarativa con la misma semántica de componentes y Hooks de React (`useState`, `useEffect`, custom hooks), pero la salida gráfica se ejecuta en el metal nativo a través de primitivos de plataforma, garantizando el rendimiento, la accesibilidad y el aspecto natural del sistema operativo.",
        "codeExample": {
            "language": "tsx",
            "code": "import React from 'react';\nimport { StyleSheet, Text, View, SafeAreaView } from 'react-native';\n\n// Los componentes emiten vistas nativas (UIView / android.view.ViewGroup):\nexport default function App() {\n  return (\n    <SafeAreaView style={styles.container}>\n      <View style={styles.card}>\n        <Text style={styles.title}>React Native Móvil</Text>\n        <Text style={styles.subtitle}>Renderizado nativo real sin DOM ni WebViews</Text>\n      </View>\n    </SafeAreaView>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    backgroundColor: '#0f172a',\n    justifyContent: 'center',\n    alignItems: 'center',\n  },\n  card: {\n    padding: 24,\n    borderRadius: 12,\n    backgroundColor: '#1e293b',\n    borderWidth: 1,\n    borderColor: '#334155',\n  },\n  title: {\n    fontSize: 20,\n    fontWeight: '700',\n    color: '#38bdf8',\n  },\n  subtitle: {\n    fontSize: 14,\n    color: '#94a3b8',\n    marginTop: 8,\n  },\n});"
        },
        "visualDiagram": {
            "id": "diag-rn-01",
            "title": "Arquitectura: React Web vs React Native",
            "caption": "React Web genera nodos HTML en el navegador, mientras que React Native genera Vistas Nativas del SO (UIView / android.view) mediante Fabric y Yoga.",
            "diagramType": "rn-web-vs-native-architecture"
        },
        "interviewTips": {
            "whatInterviewersWant": "Que dejes claro que React Native no es una WebView ni una PWA híbrida tipo Cordova, sino que compila y enlaza a vistas nativas de verdad del sistema operativo.",
            "commonPitfalls": [
                "Creer que React Native compila el código JavaScript a código Java/Swift (lo que compila o enlaza son las vistas nativas; el código JS corre en un motor como Hermes).",
                "Intentar usar etiquetas HTML como <div> o <p> en React Native."
            ]
        },
        "quiz": {
            "question": "¿Cuál es la principal diferencia arquitectónica entre React Web y React Native?",
            "options": [
                "React Web compila a HTML/DOM en un navegador, mientras React Native emite vistas nativas del SO (UIView/android.view) gestionadas por Fabric y Yoga.",
                "React Native convierte el código TypeScript en archivos binarios C++ directamente en el servidor.",
                "React Web solo funciona en ordenadores de sobremesa y React Native solo en tabletas.",
                "React Native ejecuta un navegador Chromium oculto dentro de cada pantalla."
            ],
            "correctIndex": 0,
            "explanation": "React Native reemplaza el DOM de los navegadores por primitivos nativos reales del sistema operativo anfitrión (iOS y Android), calculando su geometría mediante el motor C++ Yoga."
        }
    },
    {
        "id": "rn-02",
        "title": "¿Cuáles son los componentes primitivos equivalentes a HTML en React Native?",
        "level": "basico",
        "tags": [
            "Components",
            "Primitives",
            "View",
            "Text",
            "Image",
            "TextInput",
            "ScrollView"
        ],
        "response": "React Native no dispone de elementos HTML (`div`, `span`, `img`, `input`). En su lugar, proporciona un conjunto estricto de **componentes primitivos cross-platform** que se mapean a los equivalentes nativos de cada plataforma:\n\n1. **`<View>`**: El contenedor fundamental de layout. Equivale a `<div>` en la web. Se mapea a `UIView` en iOS y a `android.view.ViewGroup` en Android. Soporta Flexbox y estilos visuales (bordes, fondos, padding).\n2. **`<Text>`**: El único componente permitido para renderizar texto plano. En React Native, **está prohibido colocar texto suelto dentro de un `<View>`** (lanza un error de runtime en la app). Se mapea a `UILabel` / `UITextView` en iOS y `TextView` en Android. Soporta estilos tipográficos anidados.\n3. **`<Image>`**: Renderizado de recursos gráficos locales (mediante `require('./logo.png')`) o remotos (mediante `{ uri: 'https://...' }`). Mapeado a `UIImageView` e `ImageView`.\n4. **`<TextInput>`**: Entrada de datos editable por teclado. Equivale a `<input>` o `<textarea>`. Mapeado a `UITextField` y `EditText`.\n5. **`<ScrollView>`**: Contenedor con scroll vertical u horizontal para pantallas con contenido acotado. Mapeado a `UIScrollView` y `ScrollView` de Android.",
        "codeExample": {
            "language": "tsx",
            "code": "import React, { useState } from 'react';\nimport { View, Text, TextInput, Image, ScrollView, StyleSheet } from 'react-native';\n\nexport function UserProfileCard() {\n  const [username, setUsername] = useState('');\n\n  return (\n    <ScrollView contentContainerStyle={styles.scrollContainer}>\n      <View style={styles.card}>\n        {/* <Image> con asset remoto */}\n        <Image\n          source={{ uri: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200' }}\n          style={styles.avatar}\n        />\n        {/* Todo texto DEBE estar dentro de <Text> */}\n        <Text style={styles.name}>Elena Rostova</Text>\n        <Text style={styles.role}>Staff Mobile Engineer</Text>\n\n        {/* <TextInput> interactivo */}\n        <TextInput\n          style={styles.input}\n          placeholder=\"Actualizar apodo...\"\n          placeholderTextColor=\"#64748b\"\n          value={username}\n          onChangeText={setUsername}\n        />\n      </View>\n    </ScrollView>\n  );\n}\n\nconst styles = StyleSheet.create({\n  scrollContainer: { padding: 16 },\n  card: { backgroundColor: '#1e293b', borderRadius: 12, padding: 20, alignItems: 'center' },\n  avatar: { width: 80, height: 80, borderRadius: 40, marginBottom: 12 },\n  name: { fontSize: 18, fontWeight: 'bold', color: '#f8fafc' },\n  role: { fontSize: 13, color: '#38bdf8', marginBottom: 16 },\n  input: {\n    width: '100%',\n    backgroundColor: '#0f172a',\n    borderRadius: 8,\n    paddingHorizontal: 12,\n    paddingVertical: 10,\n    color: '#f8fafc',\n    borderWidth: 1,\n    borderColor: '#334155',\n  },\n});"
        },
        "visualDiagram": {
            "id": "diag-rn-02",
            "title": "Mapeo de Primitivos React Native a Vistas Nativas",
            "caption": "Mapeo de los componentes fundamentales de React Native a las clases nativas de UIKit (iOS) y Android Framework.",
            "diagramType": "rn-primitive-components-mapping"
        },
        "interviewTips": {
            "whatInterviewersWant": "Que conozcas de memoria los primitivos esenciales y enfatices la regla estricta de que todo texto debe estar obligatoriamente encapsulado en un <Text>.",
            "commonPitfalls": [
                "Colocar cadenas de texto directas dentro de un <View> provocando una excepción en tiempo de ejecución.",
                "Usar ScrollView para renderizar listas con cientos o miles de elementos en lugar de FlatList."
            ]
        },
        "quiz": {
            "question": "¿Qué ocurre en React Native si renderizas una cadena de texto directamente dentro de un <View> sin envolverla en <Text>?",
            "options": [
                "Lanza una excepción de runtime: 'Invariant Violation: Text strings must be rendered within a <Text> component'.",
                "React Native lo envuelve automáticamente en un <span> virtual sin error.",
                "El texto se renderiza como imagen vectorial en la GPU.",
                "Se ignora el texto silenciosamente en producción."
            ],
            "correctIndex": 0,
            "explanation": "En React Native es un error fatal renderizar strings fuera del componente <Text>, ya que la vista nativa contenedor (UIView/ViewGroup) no tiene capacidades de renderizado de texto por sí misma."
        }
    },
    {
        "id": "rn-03",
        "title": "¿Cómo funciona el sistema de estilos en React Native y qué motor utiliza?",
        "level": "basico",
        "tags": [
            "StyleSheet",
            "Yoga",
            "Flexbox",
            "Layout",
            "dp-units",
            "Styles"
        ],
        "response": "El sistema de estilos de React Native se basa en objetos JavaScript con propiedades camelCase, optimizados mediante la utilidad `StyleSheet.create({})`.\n\nLas características técnicas esenciales del motor de diseño son:\n1. **Motor Yoga (C++)**: React Native utiliza Yoga, una biblioteca de código abierto en C++ creada por Meta que implementa un subconjunto estricto de la especificación CSS Flexbox.\n2. **flexDirection: 'column' por defecto**: A diferencia de CSS en la web (donde `flexDirection` es `'row'`), en React Native el eje principal es vertical (`'column'`), ya que las interfaces móviles se estructuran naturalmente de arriba hacia abajo.\n3. **Puntos independientes de densidad (dp / pt)**: No existen las unidades en `px`, `rem` o `em`. Los números (ej: `padding: 16`) representan puntos independientes de densidad (dp en Android, pt en iOS). El sistema operativo los escala automáticamente a píxeles físicos según el pixel ratio de la pantalla (`PixelRatio.get()`).\n4. **Optimizaciones de StyleSheet**: `StyleSheet.create` valida las propiedades, previene mutaciones accidentales y asigna identificadores numéricos en memoria en el motor JS para reducir la sobrecarga de transferencia hacia el árbol de sombras (Shadow Tree).",
        "codeExample": {
            "language": "tsx",
            "code": "import React from 'react';\nimport { StyleSheet, View, Text, Platform } from 'react-native';\n\nexport function ResponsiveLayout() {\n  return (\n    <View style={styles.container}>\n      <View style={styles.box}><Text style={styles.text}>Elemento 1</Text></View>\n      <View style={[styles.box, styles.boxHighlight]}><Text style={styles.text}>Elemento 2</Text></View>\n      <View style={styles.box}><Text style={styles.text}>Elemento 3</Text></View>\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    // flexDirection es 'column' por defecto; podemos cambiarlo a 'row':\n    flexDirection: 'column',\n    justifyContent: 'center',\n    alignItems: 'stretch',\n    padding: 16, // 16dp / pt (sin unidad 'px')\n  },\n  box: {\n    height: 60,\n    backgroundColor: '#1e293b',\n    borderRadius: 8,\n    marginBottom: 12,\n    justifyContent: 'center',\n    alignItems: 'center',\n    // Sombra adaptativa:\n    ...Platform.select({\n      ios: { shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25 },\n      android: { elevation: 4 },\n    }),\n  },\n  boxHighlight: {\n    backgroundColor: '#0284c7',\n  },\n  text: {\n    color: '#ffffff',\n    fontWeight: '600',\n  },\n});"
        },
        "visualDiagram": {
            "id": "diag-rn-03",
            "title": "StyleSheet, Motor Yoga (C++) y Flexbox Móvil",
            "caption": "StyleSheet valida y cachea estilos que el motor C++ Yoga computa con flexDirection: column por defecto en unidades independientes de densidad (dp/pt).",
            "diagramType": "rn-stylesheet-yoga-flexbox"
        },
        "interviewTips": {
            "whatInterviewersWant": "Saber que Yoga (C++) es el motor detrás del layout, que flexDirection es 'column' por defecto y que no se usan unidades 'px'.",
            "commonPitfalls": [
                "Escribir unidades con string tipo '16px' en lugar de números enteros 16.",
                "Pensar que StyleSheet.create recrea los objetos en cada render (crea referencias fijas e IDs numéricos optimizados)."
            ]
        },
        "quiz": {
            "question": "¿Cuál es la dirección principal de Flexbox por defecto en React Native y qué unidad de medida se usa?",
            "options": [
                "flexDirection: 'column' por defecto, y se usan puntos independientes de densidad (dp/pt) sin escribir 'px'.",
                "flexDirection: 'row' por defecto, y se usan píxeles estrictos en formato string '16px'.",
                "flexDirection: 'row-reverse' por defecto, y se usan unidades rem.",
                "React Native no soporta Flexbox y utiliza CSS Grid exclusivamente."
            ],
            "correctIndex": 0,
            "explanation": "En React Native el valor por defecto de flexDirection es 'column' para adaptarse al formato vertical de los teléfonos, y las medidas son números sin sufijo representando dp (Android) o pt (iOS)."
        }
    },
    {
        "id": "rn-04",
        "title": "¿Qué diferencia hay entre TouchableOpacity, TouchableHighlight y Pressable?",
        "level": "basico",
        "tags": [
            "Pressable",
            "TouchableOpacity",
            "TouchableHighlight",
            "User-Interactions",
            "Gestures"
        ],
        "response": "En las primeras versiones de React Native, las interacciones táctiles se gestionaban mediante la familia `Touchable*`:\n- **`TouchableOpacity`**: Reduce la opacidad (`opacity`) del elemento hijo cuando se pulsa.\n- **`TouchableHighlight`**: Añade una capa de color de fondo (`underlayColor`) cuando se pulsa.\n\nSin embargo, ambos componentes presentan limitaciones arquitectónicas: tienen comportamientos visuales rígidos, manejan de forma tosca los retardos de interacción y carecen de información contextual sobre el ciclo del gesto.\n\n**`Pressable`** es el componente moderno recomendado oficialmente por Meta (introducido en React Native 0.63):\n1. **Render Props Dinámicos**: Permite definir `style` y `children` como funciones que reciben el estado de interacción actual: `({ pressed }) => [...]`.\n2. **Ciclo de Vida de Pulsación Granular**: Expone callbacks precisos para cada fase del gesto táctil: `onPressIn`, `onPressOut`, `onLongPress`, `onPress`, y eventos de ratón en web (`onHoverIn`, `onHoverOut`).\n3. **Control de Zona de Toque (hitSlop)**: Permite expandir el área táctil sin alterar las dimensiones visuales del componente, crucial para accesibilidad en pantallas táctiles.\n4. **Tiempo de Presión Configurable**: Propiedades como `delayLongPress` permiten ajustar los milisegundos para detectar pulsaciones prolongadas.",
        "codeExample": {
            "language": "tsx",
            "code": "import React from 'react';\nimport { Pressable, Text, StyleSheet, Platform } from 'react-native';\n\ninterface ButtonProps {\n  title: string;\n  onPress: () => void;\n}\n\nexport function PremiumButton({ title, onPress }: ButtonProps) {\n  return (\n    <Pressable\n      onPress={onPress}\n      // hitSlop amplía el área de toque en 12dp en todas las direcciones:\n      hitSlop={12}\n      // Render prop para feedback dinámico en tiempo real:\n      style={({ pressed }) => [\n        styles.baseButton,\n        pressed && styles.pressedButton,\n      ]}\n    >\n      {({ pressed }) => (\n        <Text style={[styles.buttonText, pressed && styles.pressedText]}>\n          {pressed ? '¡Pulsado!' : title}\n        </Text>\n      )}\n    </Pressable>\n  );\n}\n\nconst styles = StyleSheet.create({\n  baseButton: {\n    backgroundColor: '#0284c7',\n    paddingVertical: 14,\n    paddingHorizontal: 24,\n    borderRadius: 10,\n    alignItems: 'center',\n    transform: [{ scale: 1 }],\n  },\n  pressedButton: {\n    backgroundColor: '#0369a1',\n    // Efecto de feedback háptico/visual instantáneo:\n    transform: [{ scale: 0.97 }],\n    opacity: 0.9,\n  },\n  buttonText: {\n    color: '#ffffff',\n    fontWeight: '700',\n    fontSize: 16,\n  },\n  pressedText: {\n    color: '#e0f2fe',\n  },\n});"
        },
        "visualDiagram": {
            "id": "diag-rn-04",
            "title": "Máquina de Estados de Interacción de <Pressable>",
            "caption": "Pressable gestiona el flujo Idle ➔ onPressIn (pressed=true) ➔ longPress ➔ onPressOut ➔ onPress mediante render props dinámicos.",
            "diagramType": "rn-pressable-state-machine"
        },
        "interviewTips": {
            "whatInterviewersWant": "Que demuestres modernidad prefiriendo Pressable sobre TouchableOpacity debido a su flexibilidad con render props y mejor integración con la máquina de estados de gestos.",
            "commonPitfalls": [
                "Seguir usando TouchableOpacity por inercia en proyectos modernos.",
                "No manejar hitSlop para ampliar el área de pulsación en botones pequeños en pantallas táctiles."
            ]
        },
        "quiz": {
            "question": "¿Por qué Pressable es superior a TouchableOpacity para componentes interactivos?",
            "options": [
                "Porque admite render props en style y children ({ pressed }) y expone un ciclo de vida granular (onPressIn, onPressOut, onLongPress).",
                "Porque compila directamente a C++ sin pasar por el motor de JavaScript.",
                "Porque solo funciona en Android, reduciendo el código de iOS a cero.",
                "Porque bloquea la pantalla para evitar que el usuario pulse dos botones a la vez."
            ],
            "correctIndex": 0,
            "explanation": "Pressable proporciona acceso dinámico al estado pressed mediante render props, permitiendo personalizar animaciones de escala, colores y áreas táctiles (hitSlop) con total flexibilidad."
        }
    },
    {
        "id": "rn-05",
        "title": "¿Qué es Expo y qué ventajas ofrece sobre React Native CLI tradicional?",
        "level": "basico",
        "tags": [
            "Expo",
            "CLI",
            "EAS",
            "Expo-Go",
            "Tooling",
            "Developer-Experience"
        ],
        "response": "Expo es el framework y ecosistema de herramientas de nivel de producción oficialmente recomendado por Meta y la documentación central de React Native. Lejos de ser un simple sandbox educativo, Expo es una plataforma integral que cubre todo el ciclo de desarrollo móvil.\n\nSus cuatro pilares tecnológicos son:\n1. **Expo SDK**: Un conjunto exhaustivo de bibliotecas nativas de alta calidad mantenidas y actualizadas por el equipo de Expo (`expo-camera`, `expo-location`, `expo-notifications`, `expo-secure-store`), eliminando problemas de dependencias nativas incompatibles.\n2. **Expo CLI & Prebuild (Continuous Native Generation - CNG)**: Permite desarrollar sin necesidad de mantener las carpetas `ios/` y `android/` en Git. El comando `npx expo prebuild` genera las carpetas nativas determinísticamente en base a Config Plugins (`app.json`).\n3. **Expo Router**: El primer sistema de enrutamiento basado en archivos (File-Based Routing) para React Native, unificando deep linking y web out-of-the-box.\n4. **EAS (Expo Application Services)**:\n   - **EAS Build**: Compilación en la nube de binarios reales de producción (`.ipa` para iOS y `.aab` para Android) sin requerir un ordenador Mac local.\n   - **EAS Update**: Actualizaciones Over-The-Air (OTA) que publican arreglos de JavaScript al instante sin pasar por la aprobación de las tiendas.\n   - **EAS Submit**: Publicación automatizada directa en Apple App Store y Google Play Store.",
        "codeExample": {
            "language": "tsx",
            "code": "// app.json: Configuración con Config Plugins en Expo Managed Workflow:\n/*\n{\n  \"expo\": {\n    \"name\": \"FintechMobileApp\",\n    \"slug\": \"fintech-mobile-app\",\n    \"version\": \"1.0.0\",\n    \"plugins\": [\n      [\n        \"expo-camera\",\n        {\n          \"cameraPermission\": \"Permite a la app escanear códigos QR para pagos.\"\n        }\n      ],\n      \"expo-secure-store\"\n    ]\n  }\n}\n*/\n\nimport React, { useEffect, useState } from 'react';\nimport { View, Text, Button, StyleSheet } from 'react-native';\nimport * as SecureStore from 'expo-secure-store';\n\nexport function AuthSession() {\n  const [token, setToken] = useState<string | null>(null);\n\n  const saveToken = async (jwt: string) => {\n    // expo-secure-store utiliza Keychain en iOS y EncryptedSharedPreferences en Android:\n    await SecureStore.setItemAsync('user_jwt', jwt);\n    setToken(jwt);\n  };\n\n  return (\n    <View style={styles.container}>\n      <Text style={styles.text}>Token Seguro: {token ? 'Guardado' : 'No encontrado'}</Text>\n      <Button title=\"Guardar Sesión Segura\" onPress={() => saveToken('eyJhbGciOi...') } />\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: { padding: 20, alignItems: 'center' },\n  text: { color: '#f8fafc', marginBottom: 12 },\n});"
        },
        "visualDiagram": {
            "id": "diag-rn-05",
            "title": "Ecosistema Expo: CLI, SDK, Runtime y EAS Cloud",
            "caption": "Ecosistema Expo unificando Expo CLI local, SDK integrado, Prebuild determinista y servicios en la nube de EAS Build y EAS Submit.",
            "diagramType": "rn-expo-ecosystem-services"
        },
        "interviewTips": {
            "whatInterviewersWant": "Reconocer que Expo es el estándar moderno de producción (recomendado por Meta) y no simplemente un 'entorno para principiantes'.",
            "commonPitfalls": [
                "Creer que en Expo estás atrapado sin poder usar librerías nativas personalizadas (con Config Plugins y Prebuild puedes usar cualquier pod o módulo C++).",
                "Confundir Expo Go (la app cliente de pruebas) con el framework Expo en sí."
            ]
        },
        "quiz": {
            "question": "¿Cuál es la función principal de EAS Build en el ecosistema Expo?",
            "options": [
                "Compilar binarios nativos reales (IPA para iOS y AAB para Android) en servidores cloud optimizados sin requerir un entorno local complejo.",
                "Convertir la app móvil en un sitio web WordPress.",
                "Monitorear las llamadas telefónicas del usuario.",
                "Descargar paquetes npm en el dispositivo del usuario en tiempo real."
            ],
            "correctIndex": 0,
            "explanation": "EAS Build proporciona infraestructura cloud gestionada para compilar artefactos nativos de producción (IPA y AAB) compatibles con las App Stores, permitiendo builds de iOS incluso desde entornos Linux/Windows."
        }
    },
    {
        "id": "rn-06",
        "title": "¿Qué diferencia hay entre Expo Managed Workflow y Bare Workflow?",
        "level": "medio",
        "tags": [
            "Managed-Workflow",
            "Bare-Workflow",
            "Prebuild",
            "Config-Plugins",
            "Native-Code"
        ],
        "response": "La diferencia fundamental entre ambos enfoques radica en **quién tiene la propiedad y responsabilidad sobre los directorios nativos (`ios/` y `android/`)**:\n\n1. **Managed Workflow (Continuous Native Generation - CNG)**:\n   - Los directorios `ios/` y `android/` **no se suben al repositorio Git**.\n   - Toda la configuración nativa (permisos, iconos, splash screen, bundles ID, dependencias nativas de CocoaPods o Gradle) se declara en `app.json` mediante **Config Plugins**.\n   - El comando `npx expo prebuild` genera las carpetas nativas de forma efímera y determinista antes de la compilación.\n   - **Ventaja**: Actualizar de una versión de React Native a otra consiste únicamente en actualizar la versión del paquete `expo` en `package.json` y volver a compilar. Cero conflictos de merge en archivos nativos.\n\n2. **Bare Workflow (Legacy o Proyectos Tradicionales)**:\n   - Los directorios `ios/` y `android/` están permanentemente commiteados en el repositorio Git.\n   - El desarrollador debe gestionar manualmente los archivos `Podfile`, `Info.plist`, `build.gradle`, `AndroidManifest.xml`, y escribir código en Swift/Objective-C o Kotlin/Java.\n   - **Desventaja**: Las actualizaciones de versión de React Native requieren resolver a mano decenas de cambios en scripts de Gradle y CocoaPods, siendo una fuente constante de errores de build.",
        "codeExample": {
            "language": "json",
            "code": "{\n  \"expo\": {\n    \"name\": \"EnterpriseApp\",\n    \"slug\": \"enterprise-app\",\n    \"version\": \"2.4.0\",\n    \"ios\": {\n      \"bundleIdentifier\": \"com.company.enterprise\",\n      \"supportsTablet\": true\n    },\n    \"android\": {\n      \"package\": \"com.company.enterprise\",\n      \"adaptiveIcon\": {\n        \"foregroundImage\": \"./assets/adaptive-icon.png\",\n        \"backgroundColor\": \"#0f172a\"\n      }\n    },\n    \"plugins\": [\n      [\n        \"expo-local-authentication\",\n        {\n          \"faceIDPermission\": \"Permite usar Face ID para desbloquear la cuenta bancaria.\"\n        }\n      ]\n    ]\n  }\n}"
        },
        "visualDiagram": {
            "id": "diag-rn-06",
            "title": "Managed Workflow (CNG) vs Bare Workflow",
            "caption": "Managed Workflow genera carpetas nativas al vuelo con Prebuild y Config Plugins, mientras que Bare Workflow exige mantenimiento manual en Git.",
            "diagramType": "rn-managed-vs-bare-workflow"
        },
        "interviewTips": {
            "whatInterviewersWant": "Explicar Continuous Native Generation (CNG) y por qué mantener carpetas nativas manuales en Git genera deuda técnica en upgrades de React Native.",
            "commonPitfalls": [
                "Pensar que 'Managed' significa que no puedes escribir código nativo a medida (se hace mediante local config plugins o custom Expo modules)."
            ]
        },
        "quiz": {
            "question": "¿Cuál es la principal ventaja de Continuous Native Generation (CNG) en Expo Managed Workflow?",
            "options": [
                "Evita commitear las carpetas /ios y /android en Git, generándolas determinísticamente con prebuild y simplificando los upgrades de React Native.",
                "Hace que la app no use memoria RAM en el dispositivo.",
                "Permite que la app corra en consolas de videojuegos sin cambios.",
                "Elimina la necesidad de registrarse como desarrollador de Apple o Google."
            ],
            "correctIndex": 0,
            "explanation": "CNG genera los proyectos nativos al vuelo a partir de la configuración de plugins, eliminando la deuda técnica de mantener archivos de CocoaPods y Gradle en el control de versiones."
        }
    },
    {
        "id": "rn-07",
        "title": "¿Por qué se debe usar FlatList o SectionList en lugar de ScrollView para listas largas?",
        "level": "medio",
        "tags": [
            "FlatList",
            "SectionList",
            "ScrollView",
            "Virtualization",
            "Performance",
            "Memory"
        ],
        "response": "El uso de `<ScrollView>` frente a `<FlatList>` o `<SectionList>` para listas de datos representa una de las decisiones de rendimiento más críticas en React Native:\n\n1. **El Problema de `<ScrollView>` (Sin Virtualización)**:\n   - Renderiza **todos sus elementos hijos simultáneamente** en memoria al montarse.\n   - Si tienes una lista con 1,000 elementos, creará 1,000 nodos en el árbol de sombras de React y 1,000 vistas nativas (`UIView` o `ViewGroup`) en el sistema operativo, independientemente de si son visibles en pantalla.\n   - Esto provoca un consumo astronómico de memoria RAM, caídas drásticas de frames al scrollear y eventualmente un cierre forzado por falta de memoria (**OOM Crash - Out of Memory**).\n\n2. **La Solución de `<FlatList>` (Ventana Virtualizada / Windowing)**:\n   - Renderiza únicamente los elementos que caben en el área visible de la pantalla (viewport) más un pequeño buffer superior e inferior (`windowSize`).\n   - A medida que el usuario hace scroll, los elementos que salen del área visible son desmontados de la jerarquía nativa y su memoria es reciclada.\n   - **Optimización con `getItemLayout`**: Al proporcionar esta función, React Native calcula las posiciones (x, y, ancho, alto) de forma estática y matemática sin necesidad de medir dinámicamente cada celda en el hilo nativo, garantizando scroll a 60/120 FPS sin parpadeos.",
        "codeExample": {
            "language": "tsx",
            "code": "import React, { memo, useCallback } from 'react';\nimport { FlatList, View, Text, StyleSheet, ListRenderItem } from 'react-native';\n\ninterface Transaction {\n  id: string;\n  description: string;\n  amount: number;\n}\n\nconst ITEM_HEIGHT = 64; // Altura fija para cálculo O(1) con getItemLayout\n\n// Componente celda memorizado para evitar re-renders en scroll:\nconst TransactionItem = memo(({ item }: { item: Transaction }) => (\n  <View style={styles.itemRow}>\n    <Text style={styles.itemTitle}>{item.description}</Text>\n    <Text style={styles.itemAmount}>${item.amount.toFixed(2)}</Text>\n  </View>\n));\n\nexport function TransactionList({ data }: { data: Transaction[] }) {\n  const renderItem: ListRenderItem<Transaction> = useCallback(\n    ({ item }) => <TransactionItem item={item} />,\n    []\n  );\n\n  const keyExtractor = useCallback((item: Transaction) => item.id, []);\n\n  return (\n    <FlatList\n      data={data}\n      renderItem={renderItem}\n      keyExtractor={keyExtractor}\n      // Evita medir celdas dinámicamente en cada frame:\n      getItemLayout={(_, index) => ({\n        length: ITEM_HEIGHT,\n        offset: ITEM_HEIGHT * index,\n        index,\n      })}\n      // Configuración de buffer de virtualización:\n      initialNumToRender={10}\n      maxToRenderPerBatch={10}\n      windowSize={5}\n      removeClippedSubviews={true}\n    />\n  );\n}\n\nconst styles = StyleSheet.create({\n  itemRow: { height: ITEM_HEIGHT, paddingHorizontal: 16, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#334155' },\n  itemTitle: { color: '#f8fafc', fontSize: 15 },\n  itemAmount: { color: '#38bdf8', fontWeight: 'bold', fontSize: 16 },\n});"
        },
        "visualDiagram": {
            "id": "diag-rn-07",
            "title": "Virtualización: FlatList (Viewport Buffer) vs ScrollView",
            "caption": "ScrollView monta todos los nodos en memoria provocando cuelgues OOM, mientras que FlatList virtualiza y recicla solo las celdas visibles.",
            "diagramType": "rn-flatlist-virtualization-window"
        },
        "interviewTips": {
            "whatInterviewersWant": "Entendimiento profundo del consumo de memoria nativa y el uso de getItemLayout para evitar cálculos dinámicos de altura en tiempo de ejecución.",
            "commonPitfalls": [
                "Usar funciones anónimas inline en renderItem provocando re-renders innecesarios.",
                "No implementar getItemLayout cuando las celdas tienen una altura fija conocida.",
                "Omitir keyExtractor o usar índices del array como keys."
            ]
        },
        "quiz": {
            "question": "¿Qué ventaja crucial ofrece la propiedad getItemLayout en un FlatList?",
            "options": [
                "Permite a FlatList saltarse la medición asíncrona de dimensiones de las celdas, calculando offsets matemáticamente para un scroll instantáneo.",
                "Hace que las imágenes se descarguen más rápido desde el servidor.",
                "Convierte la lista en una cuadrícula CSS Grid de tres columnas.",
                "Elimina automáticamente los datos duplicados del array."
            ],
            "correctIndex": 0,
            "explanation": "Al especificar getItemLayout con una altura fija, FlatList no necesita que el sistema operativo mida cada elemento dinámicamente antes de renderizar, logrando un scroll ultra suave a 60/120 FPS."
        }
    },
    {
        "id": "rn-08",
        "title": "¿Cómo se maneja el enrutamiento con React Navigation y Expo Router?",
        "level": "medio",
        "tags": [
            "Routing",
            "React-Navigation",
            "Expo-Router",
            "File-Based",
            "Deep-Linking",
            "Stack"
        ],
        "response": "El enrutamiento en aplicaciones móviles difiere radicalmente de la web: en lugar de simples transiciones de URL, el móvil utiliza primitivos nativos como **Pilas de navegación (`UINavigationController` en iOS)** y pestañas inferiores con retención de estado.\n\nExisten dos paradigmas principales:\n\n1. **React Navigation (Basado en Componentes Imperativo/Declarativo)**:\n   - Es la biblioteca histórica estándar de la comunidad.\n   - Utiliza navegadores configurados como árboles de componentes: `createNativeStackNavigator`, `createBottomTabNavigator`, `createDrawerNavigator`.\n   - Se navega mediante el hook `useNavigation()`: `navigation.navigate('Details', { id: 123 })` o `navigation.push(...)`.\n   - Requiere configurar manualmente prefijos de esquemas (`myapp://`) para deep linking.\n\n2. **Expo Router (Enrutamiento Basado en Archivos / Estilo Next.js)**:\n   - Construido sobre el motor nativo de React Navigation, traslada el concepto de enrutamiento basado en archivos (File-Based Routing) al entorno móvil.\n   - La estructura de carpetas en `app/` determina las rutas:\n     - `app/_layout.tsx`: Define el Stack o Tabs contenedor global.\n     - `app/(tabs)/_layout.tsx`: Agrupa rutas bajo un Bottom Tab Navigator.\n     - `app/product/[id].tsx`: Genera automáticamente rutas dinámicas tipadas.\n   - **Deep Linking Nativo Universal**: Cada pantalla tiene una URL asociada out-of-the-box (`myapp://product/45`), permitiendo abrir la app exactamente en la vista requerida desde un enlace web, correo o notificación push sin configuración adicional.",
        "codeExample": {
            "language": "tsx",
            "code": "// app/(tabs)/_layout.tsx - Configuración de pestañas con Expo Router:\nimport { Tabs } from 'expo-router';\nimport { Home, User, Settings } from 'lucide-react-native';\n\nexport default function TabLayout() {\n  return (\n    <Tabs screenOptions={{ tabBarActiveTintColor: '#38bdf8', tabBarStyle: { backgroundColor: '#0f172a' } }}>\n      <Tabs.Screen\n        name=\"index\"\n        options={{\n          title: 'Inicio',\n          tabBarIcon: ({ color }) => <Home size={22} color={color} />,\n        }}\n      />\n      <Tabs.Screen\n        name=\"profile\"\n        options={{\n          title: 'Perfil',\n          tabBarIcon: ({ color }) => <User size={22} color={color} />,\n        }}\n      />\n    </Tabs>\n  );\n}\n\n// app/product/[id].tsx - Pantalla con parámetro dinámico tipado:\nimport { useLocalSearchParams, useRouter } from 'expo-router';\nimport { View, Text, Button } from 'react-native';\n\nexport function ProductDetailScreen() {\n  const { id } = useLocalSearchParams<{ id: string }>();\n  const router = useRouter();\n\n  return (\n    <View style={{ flex: 1, backgroundColor: '#0f172a', padding: 20 }}>\n      <Text style={{ color: '#fff', fontSize: 20 }}>Detalle del Producto ID: {id}</Text>\n      <Button title=\"Volver\" onPress={() => router.back()} />\n    </View>\n  );\n}"
        },
        "visualDiagram": {
            "id": "diag-rn-08",
            "title": "Enrutamiento Móvil: React Navigation Stack vs Expo Router File-Based",
            "caption": "Comparativa de navegación por componentes con Stack.Navigator frente al modelo de carpetas app/ con deep linking automático en Expo Router.",
            "diagramType": "rn-navigation-stack-tabs-filebased"
        },
        "interviewTips": {
            "whatInterviewersWant": "Comparar el enfoque declarativo basado en sistema de archivos de Expo Router con la configuración manual de React Navigation, resaltando deep linking.",
            "commonPitfalls": [
                "No configurar adecuadamente deep linking en React Navigation tradicional resultando en enlaces rotos desde notificaciones push.",
                "Intentar usar react-router-dom de la web en React Native."
            ]
        },
        "quiz": {
            "question": "¿Cuál es la principal ventaja de Expo Router frente a la configuración manual de React Navigation?",
            "options": [
                "Implementa File-Based Routing donde la estructura de carpetas define las rutas y genera deep linking universal automáticamente.",
                "Elimina por completo la necesidad de escribir código TypeScript en las pantallas.",
                "Permite navegar sin tener una conexión a internet instalada en el dispositivo.",
                "Hace que la app no necesite botones de retroceso en Android."
            ],
            "correctIndex": 0,
            "explanation": "Expo Router traduce la estructura del directorio app/ en rutas de navegación nativas con soporte automático de deep linking universal en móvil y web."
        }
    },
    {
        "id": "rn-09",
        "title": "¿Qué diferencia hay entre AsyncStorage y react-native-mmkv?",
        "level": "medio",
        "tags": [
            "AsyncStorage",
            "MMKV",
            "JSI",
            "Storage",
            "Performance",
            "Tencent"
        ],
        "response": "El almacenamiento de clave-valor persistente en el dispositivo es indispensable para almacenar tokens de autenticación, configuraciones de usuario y estado en caché:\n\n1. **`AsyncStorage` (Arquitectura Tradicional Asíncrona)**:\n   - Almacena datos en SQLite (Android) o archivos serializados en disco (iOS).\n   - **Cuello de Botella Asíncrono**: Cada operación (`getItem`, `setItem`) debe serializarse a un string JSON, enviarse a la cola del Bridge o IPC de forma asíncrona, procesarse en un hilo nativo de I/O y resolverse en una Promesa de JavaScript.\n   - Una sola lectura puede demorar **30 a 50 milisegundos**, retrasando el inicio de la app (pantalla blanca inicial mientras se lee el token de sesión).\n\n2. **`react-native-mmkv` (Arquitectura Moderna con JSI y C++)**:\n   - Desarrollada por WeChat/Tencent y adaptada a React Native por Marc Rousavy.\n   - Utiliza archivos mapeados en memoria mediante la llamada al sistema **`mmap`** de C++: los datos del disco se proyectan directamente en la memoria virtual del proceso.\n   - Conectado directamente a través de **JSI (JavaScript Interface)**: las lecturas y escrituras son **100% síncronas** y de latencia cero (aproximadamente **0.1 a 0.5 ms**).\n   - Es hasta **30 veces más rápido** que AsyncStorage y permite leer tokens instantáneamente antes del primer render.",
        "codeExample": {
            "language": "tsx",
            "code": "import { MMKV } from 'react-native-mmkv';\n\n// 1. Instanciación con soporte de cifrado por hardware:\nexport const storage = new MMKV({\n  id: 'user-cache-storage',\n  encryptionKey: 'super_secret_encryption_key',\n});\n\n// 2. Operaciones 100% SÍNCRONAS y de latencia cero (sin async/await):\nexport function saveUserToken(token: string) {\n  // Escritura síncrona en memoria mmap:\n  storage.set('auth_token', token);\n  storage.set('user_age', 28);\n  storage.set('is_verified', true);\n}\n\nexport function getUserToken(): string | undefined {\n  // Lectura síncrona instantánea (~0.2ms):\n  return storage.getString('auth_token');\n}\n\n// 3. Integración limpia con Zustand persist middleware:\nimport { create } from 'zustand';\nimport { persist, createJSONStorage } from 'zustand/middleware';\n\nconst mmkvStorage = {\n  getItem: (key: string) => storage.getString(key) ?? null,\n  setItem: (key: string, value: string) => storage.set(key, value),\n  removeItem: (key: string) => storage.delete(key),\n};\n\nexport const useSettingsStore = create(\n  persist(\n    (set) => ({ theme: 'dark', toggleTheme: () => set((s: any) => ({ theme: s.theme === 'dark' ? 'light' : 'dark' })) }),\n    { name: 'settings-storage', storage: createJSONStorage(() => mmkvStorage) }\n  )\n);"
        },
        "visualDiagram": {
            "id": "diag-rn-09",
            "title": "AsyncStorage (Bridge Asíncrono) vs MMKV (JSI Síncrono)",
            "caption": "AsyncStorage sufre serialización JSON lenta en el Bridge (~30ms), mientras MMKV accede síncronamente vía JSI y mmap en C++ (~0.5ms).",
            "diagramType": "rn-asyncstorage-vs-mmkv-jsi"
        },
        "interviewTips": {
            "whatInterviewersWant": "Que menciones JSI, mmap en C++ y acceso síncrono como la razón técnica de por qué MMKV pulveriza el rendimiento de AsyncStorage.",
            "commonPitfalls": [
                "Creer que todas las lecturas a disco deben ser asíncronas por definición (mmap mapea memoria virtual directamente a RAM).",
                "Guardar datos altamente sensibles sin habilitar cifrado en MMKV."
            ]
        },
        "quiz": {
            "question": "¿Por qué react-native-mmkv es capaz de ejecutar operaciones de lectura y escritura síncronas de forma instantánea?",
            "options": [
                "Porque utiliza mmap en C++ proyectando el archivo en memoria virtual y expone punteros directos al motor JS mediante JSI sin serialización JSON.",
                "Porque almacena todos los datos en la nube de Google Firebase.",
                "Porque desactiva la memoria caché del teléfono móvil.",
                "Porque ejecuta un worker de WebAssembly en el navegador."
            ],
            "correctIndex": 0,
            "explanation": "MMKV aprovecha la llamada del sistema mmap y la interfaz JSI de C++, permitiendo a JavaScript leer y escribir directamente en memoria compartida sin sobrecarga de serialización ni saltos de hilos."
        }
    },
    {
        "id": "rn-10",
        "title": "¿Cómo manejar código específico de plataforma en React Native de forma limpia?",
        "level": "medio",
        "tags": [
            "Platform",
            "Platform-Specific",
            "Platform.select",
            "File-Extensions",
            "Metro",
            "Clean-Code"
        ],
        "response": "En proyectos profesionales de React Native, adaptar componentes y estilos a las particularidades de iOS y Android sin ensuciar la base de código con anti-patrones es esencial:\n\n1. **Resolución por Extensión de Archivo (`.ios.tsx` / `.android.tsx`)**:\n   - Es el estándar más limpio para componentes con implementaciones nativas divergentes.\n   - Si creas `ActionButton.ios.tsx` y `ActionButton.android.tsx`, el empaquetador **Metro Bundler** resuelve automáticamente el archivo correspondiente durante el build time.\n   - **Beneficio**: Cero sobrecarga en tiempo de ejecución (`if (Platform.OS === 'ios')`) y el bundle final de Android no contiene el código de iOS ni viceversa (Tree-shaking efectivo).\n\n2. **`Platform.select({})`**:\n   - Ideal para valores puntuales de configuración, estilos o props de componentes.\n   - Permite declarar mapas limpios: `Platform.select({ ios: {...}, android: {...}, default: {...} })`.\n\n3. **`Platform.OS` y `Platform.Version`**:\n   - Para comprobaciones condicionales simples en tiempo de ejecución (ej: comprobar si la versión de iOS es mayor o igual a 16 para activar una API nativa de Apple).",
        "codeExample": {
            "language": "tsx",
            "code": "// 1. Archivo compartido con interfaz común:\n// ActionButton.types.ts\nexport interface ActionButtonProps {\n  label: string;\n  onPress: () => void;\n}\n\n// 2. Implementación específica para iOS (ActionButton.ios.tsx):\n// import { Button } from 'react-native';\n// export const ActionButton = ({ label, onPress }: ActionButtonProps) => (\n//   <Button title={label} onPress={onPress} color=\"#007aff\" />\n// );\n\n// 3. Implementación específica para Android (ActionButton.android.tsx):\n// import { Pressable, Text, StyleSheet } from 'react-native';\n// export const ActionButton = ({ label, onPress }: ActionButtonProps) => (\n//   <Pressable style={styles.rippleBtn} android_ripple={{ color: '#bae6fd' }} onPress={onPress}>\n//     <Text style={styles.text}>{label.toUpperCase()}</Text>\n//   </Pressable>\n// );\n\n// 4. Uso de Platform.select en estilos compartidos:\nimport { StyleSheet, Platform } from 'react-native';\n\nexport const cardStyles = StyleSheet.create({\n  card: {\n    backgroundColor: '#1e293b',\n    padding: 16,\n    borderRadius: 8,\n    ...Platform.select({\n      ios: {\n        shadowColor: '#000',\n        shadowOffset: { width: 0, height: 4 },\n        shadowOpacity: 0.3,\n        shadowRadius: 4.65,\n      },\n      android: {\n        elevation: 8,\n      },\n    }),\n  },\n});"
        },
        "visualDiagram": {
            "id": "diag-rn-10",
            "title": "Resolución de Plataforma: Extensiones Metro vs Platform.select",
            "caption": "Metro resuelve componentes .ios.tsx y .android.tsx en tiempo de compilación eliminando código sobrante, complementado por Platform.select en runtime.",
            "diagramType": "rn-platform-specific-resolution"
        },
        "interviewTips": {
            "whatInterviewersWant": "Preferir extensiones de archivo (.ios.tsx / .android.tsx) para componentes con implementaciones nativas complejas en lugar de llenar un solo archivo de condicionales if/else.",
            "commonPitfalls": [
                "Usar if (Platform.OS === 'ios') dentro de funciones críticas ejecutadas en cada frame.",
                "Empaquetar código nativo de iOS en bundles de Android al no usar extensiones de archivo."
            ]
        },
        "quiz": {
            "question": "¿Cuál es la principal ventaja técnica de usar extensiones de archivo .ios.tsx y .android.tsx frente aPlatform.OS en un mismo archivo?",
            "options": [
                "Metro Bundler resuelve el archivo en tiempo de compilación, empaquetando solo el código relevante y reduciendo el tamaño del bundle sin sobrecarga en runtime.",
                "Permite que la app funcione sin instalar React Native en el teléfono.",
                "Hace que los estilos de CSS funcionen en el navegador Safari.",
                "Evita que Apple cobre la comisión del 30% en la App Store."
            ],
            "correctIndex": 0,
            "explanation": "Al usar extensiones de archivo separadas, el empaquetador Metro descarta por completo el código de la otra plataforma durante la fase de empaquetado, optimizando el tamaño y la ejecución."
        }
    },
    {
        "id": "rn-11",
        "title": "¿Qué es la Nueva Arquitectura de React Native (Fabric y TurboModules)?",
        "level": "avanzado",
        "tags": [
            "New-Architecture",
            "Fabric",
            "TurboModules",
            "JSI",
            "Reconciliation",
            "C++"
        ],
        "response": "La Nueva Arquitectura de React Native es la reescritura más profunda del núcleo del framework desde su creación, diseñada para erradicar el cuello de botella histórico del **Bridge asíncrono y serializado**.\n\nSe compone de cuatro pilares arquitectónicos en C++:\n\n1. **JSI (JavaScript Interface)**:\n   - Capa de abstracción en C++ que permite al motor JS mantener referencias directas a objetos nativos de C++ (`HostObject`).\n   - Elimina la necesidad de convertir llamadas en cadenas JSON asíncronas.\n\n2. **Fabric Renderer (Nuevo Motor de Renderizado Concurrente)**:\n   - Reemplaza el antiguo subsistema de renderizado UI Manager.\n   - Opera con un árbol de sombras (**Shadow Tree**) inmutable en C++.\n   - Soporta nativamente las capacidades de **React 18 y React 19 Concurrentes** (`useTransition`, `Suspense`, renderizado priorizado e interrumpible) y sincronización con el refresco de pantalla del SO sin retrasos.\n\n3. **TurboModules (Módulos Nativos de Carga Perezosa)**:\n   - En la arquitectura antigua, todos los módulos nativos se instanciaban obligatoriamente al arrancar la app, ralentizando el inicio.\n   - Los TurboModules se inicializan **bajo demanda (lazy-loading)** en el momento exacto en que JavaScript los invoca por primera vez a través de JSI.\n\n4. **Codegen**:\n   - Herramienta de compilación que lee especificaciones en TypeScript o Flow y genera automáticamente código de enlace estricto en C++, Java y Objective-C, garantizando seguridad de tipos en tiempo de compilación entre JS y nativo.",
        "codeExample": {
            "language": "tsx",
            "code": "// Ejemplo de especificación de un TurboModule con TypeScript (Codegen):\n// NativeHaptics.ts\nimport type { TurboModule } from 'react-native';\nimport { TurboModuleRegistry } from 'react-native';\n\nexport interface Spec extends TurboModule {\n  // Invocación síncrona directa vía JSI en C++:\n  triggerHapticFeedback(type: string): void;\n  isSupported(): boolean;\n}\n\n// TurboModuleRegistry obtiene el módulo mediante JSI sin inicialización prematura:\nexport default TurboModuleRegistry.getEnforcing<Spec>('NativeHaptics');"
        },
        "visualDiagram": {
            "id": "diag-rn-11",
            "title": "La Nueva Arquitectura: JSI, Fabric y TurboModules",
            "caption": "Estructura de la Nueva Arquitectura: el motor Hermes interactúa vía JSI con el renderizador Fabric y los TurboModules de carga perezosa.",
            "diagramType": "rn-new-architecture-fabric-turbomodules"
        },
        "interviewTips": {
            "whatInterviewersWant": "Describir claramente los cuatro pilares (JSI, Fabric, TurboModules, Codegen) y explicar cómo eliminan la saturación del antiguo Bridge.",
            "commonPitfalls": [
                "Reducir la Nueva Arquitectura a solo 'Fabric' (olvidando TurboModules y JSI).",
                "No saber que Fabric opera con un árbol de sombras (Shadow Tree) inmutable en C++."
            ]
        },
        "quiz": {
            "question": "¿Cuál es la principal mejora introducida por TurboModules frente a los módulos nativos tradicionales?",
            "options": [
                "Se cargan perezosamente (lazy load) bajo demanda vía JSI y están fuertemente tipados por Codegen, en lugar de instanciarse todos al iniciar la app.",
                "Permiten usar bibliotecas de PHP directamente dentro de la app móvil.",
                "Convierten los módulos nativos en animaciones GIF.",
                "Reemplazan el sistema de archivos del teléfono por una base de datos Oracle."
            ],
            "correctIndex": 0,
            "explanation": "Los TurboModules se instancian únicamente cuando la aplicación los invoca por primera vez a través de JSI, reduciendo drásticamente el tiempo de arranque de la app (TTI) y el uso inicial de memoria."
        }
    },
    {
        "id": "rn-12",
        "title": "¿Qué es JSI (JavaScript Interface) y por qué supera al antiguo Bridge?",
        "level": "avanzado",
        "tags": [
            "JSI",
            "Bridge",
            "HostObject",
            "C++",
            "V8",
            "Hermes",
            "Zero-Serialization"
        ],
        "response": "Para entender la importancia de **JSI (JavaScript Interface)**, es imprescindible analizar el funcionamiento del antiguo **Bridge**:\n\n1. **El Problema del Antiguo Bridge (Legacy Architecture)**:\n   - JavaScript y el código nativo (Java/Swift) corrían en mundos completamente aislados.\n   - Para comunicarse, los datos debían:\n     1. Serializarse a una cadena de texto JSON en el hilo JS.\n     2. Encolarse en una tubería de mensajes asíncrona (Bridge Message Queue).\n     3. Deserializarse en el hilo nativo.\n   - **Consecuencias**: Si un usuario hacía scroll rápido o arrastraba un elemento, la cola del puente se saturaba (**Bridge Congestion**), produciendo parpadeos blancos y desincronización de eventos táctiles.\n\n2. **La Revolución de JSI (JavaScript Interface)**:\n   - JSI es una capa de C++ independiente del motor que permite al runtime de JavaScript (Hermes, V8, JavaScriptCore) interactuar directamente con el entorno nativo.\n   - Introduce el concepto de **`jsi::HostObject`**: un objeto C++ que se expone a JavaScript de forma que JS puede mantener un puntero directo en memoria a dicho objeto nativo.\n   - **Llamadas Síncronas**: JavaScript puede invocar un método nativo directamente (`nativeMethod(arg1, arg2)`) y recibir el valor de retorno en el mismo ciclo del procesador, con **cero serialización JSON** y cero saltos de hilos innecesarios.",
        "codeExample": {
            "language": "tsx",
            "code": "// Pseudocódigo representativo de cómo JSI enlaza C++ con JavaScript:\n/*\n// En C++ (Native Host Object):\nclass MathHostObject : public jsi::HostObject {\npublic:\n  jsi::Value get(jsi::Runtime& rt, const jsi::PropNameID& name) override {\n    if (name.utf8(rt) == \"fastMultiply\") {\n      return jsi::Function::createFromHostFunction(\n        rt, name, 2,\n        [](jsi::Runtime& rt, const jsi::Value& thisVal, const jsi::Value* args, size_t count) {\n          double a = args[0].asNumber();\n          double b = args[1].asNumber();\n          return jsi::Value(a * b); // Retorno síncrono instantáneo sin JSON\n        }\n      );\n    }\n    return jsi::Value::undefined();\n  }\n};\n*/\n\n// En JavaScript (Consumo vía JSI):\n// global.MathHostObject está disponible en el objeto global sin pasar por el Bridge:\ndeclare const MathHostObject: { fastMultiply: (a: number, b: number) => number };\n\nexport function calculateInstantMetric() {\n  // Invocación síncrona en C++ de latencia cero (~0.01ms):\n  const result = MathHostObject.fastMultiply(42, 100);\n  return result;\n}"
        },
        "visualDiagram": {
            "id": "diag-rn-12",
            "title": "JSI: Memoria Compartida C++ vs Antiguo Bridge Serializado",
            "caption": "El antiguo Bridge serializaba JSON asíncronamente en una cola; JSI permite a JavaScript tener punteros directos a objetos C++ nativos.",
            "diagramType": "rn-jsi-memory-host-objects"
        },
        "interviewTips": {
            "whatInterviewersWant": "Mencionar 'HostObject', memoria compartida C++, llamadas síncronas y eliminación de serialización JSON como conceptos clave.",
            "commonPitfalls": [
                "Confundir JSI con el motor JS (JSI es la interfaz abstracta que permite a React Native interactuar con cualquier motor como Hermes o V8).",
                "Creer que las llamadas síncronas por JSI deben usarse para tareas pesadas de disco o red (bloquearían el hilo JS)."
            ]
        },
        "quiz": {
            "question": "¿Por qué JSI permite una comunicación de latencia cero entre JavaScript y el código nativo?",
            "options": [
                "Porque expone objetos nativos de C++ (HostObjects) directamente al runtime de JS sin pasar por serialización JSON ni colas asíncronas.",
                "Porque conecta el teléfono con un satélite Starlink de baja órbita.",
                "Porque apaga la pantalla del teléfono durante las operaciones matemáticas.",
                "Porque sustituye todo el código por ensamblador x86."
            ],
            "correctIndex": 0,
            "explanation": "JSI permite al motor de JavaScript almacenar referencias en memoria a objetos nativos C++ (HostObjects), invocando métodos nativos de forma síncrona y sin serialización de mensajes."
        }
    },
    {
        "id": "rn-13",
        "title": "¿Cómo funciona React Native Reanimated 3 con Worklets?",
        "level": "avanzado",
        "tags": [
            "Reanimated",
            "Worklets",
            "UI-Thread",
            "SharedValue",
            "Animations",
            "Gestures"
        ],
        "response": "La animación fluida en dispositivos móviles requiere mantener una tasa de refresco constante de **60 a 120 FPS** (un frame cada 16.6ms o 8.3ms).\n\n1. **El Problema del Hilo de JavaScript (JS Thread)**:\n   - Si una animación corre en el JS Thread (como la API Animated clásica sin `useNativeDriver: true`), cualquier tarea pesada de JavaScript (un render grande, parseo de datos o navegación) bloqueará el hilo, provocando caídas de frames (**FPS Stutter**).\n\n2. **La Arquitectura de Worklets en Reanimated 3**:\n   - Reanimated introduce el concepto de **Worklets**: pequeñas funciones de JavaScript marcadas con la directiva `'worklet';` al inicio.\n   - Mediante un plugin de Babel, los worklets son extraídos y ejecutados directamente en el **hilo de UI nativo (UI / Render Thread)** dentro de un contexto de JavaScript secundario en C++.\n   - **`SharedValue` (`useSharedValue`)**: Estructura de memoria compartida y reactiva entre el JS Thread y el UI Thread.\n   - **Animaciones impulsadas por gestos**: Al combinarse con `react-native-gesture-handler`, los gestos del usuario (arrastre, pellizco, deslizamiento) manipulan el `SharedValue` y recalculan estilos con `useAnimatedStyle` directamente en el hilo de renderizado nativo sin tocar jamás el hilo de JavaScript.",
        "codeExample": {
            "language": "tsx",
            "code": "import React from 'react';\nimport { StyleSheet, View } from 'react-native';\nimport { GestureDetector, Gesture, GestureHandlerRootView } from 'react-native-gesture-handler';\nimport Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';\n\nexport function DragCard() {\n  // 1. SharedValue accesible concurrentemente en el UI Thread:\n  const translationX = useSharedValue(0);\n  const translationY = useSharedValue(0);\n  const prevTranslationX = useSharedValue(0);\n  const prevTranslationY = useSharedValue(0);\n\n  // 2. Gesto que ejecuta worklets directamente en el hilo nativo de UI:\n  const panGesture = Gesture.Pan()\n    .onStart(() => {\n      'worklet';\n      prevTranslationX.value = translationX.value;\n      prevTranslationY.value = translationY.value;\n    })\n    .onUpdate((event) => {\n      'worklet';\n      // Cálculo a 120 FPS en el hilo UI:\n      translationX.value = prevTranslationX.value + event.translationX;\n      translationY.value = prevTranslationY.value + event.translationY;\n    })\n    .onEnd(() => {\n      'worklet';\n      // Física de muelle natural ejecutada sin interferencia del hilo JS:\n      translationX.value = withSpring(0);\n      translationY.value = withSpring(0);\n    });\n\n  // 3. Estilo reactivo computado en el hilo de UI:\n  const animatedStyle = useAnimatedStyle(() => ({\n    transform: [\n      { translateX: translationX.value },\n      { translateY: translationY.value },\n    ],\n  }));\n\n  return (\n    <GestureHandlerRootView style={styles.container}>\n      <GestureDetector gesture={panGesture}>\n        <Animated.View style={[styles.box, animatedStyle]} />\n      </GestureDetector>\n    </GestureHandlerRootView>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },\n  box: { width: 100, height: 100, backgroundColor: '#38bdf8', borderRadius: 16 },\n});"
        },
        "visualDiagram": {
            "id": "diag-rn-13",
            "title": "Reanimated 3: Worklets en el UI Thread y SharedValues",
            "caption": "Los Worklets corren en el UI Thread de forma desacoplada del JS Thread, garantizando 60/120 FPS fluidos mediante SharedValues.",
            "diagramType": "rn-reanimated-worklets-ui-thread"
        },
        "interviewTips": {
            "whatInterviewersWant": "Explicar que los Worklets se ejecutan en el UI Thread mediante un runtime secundario, desacoplados del hilo principal de JavaScript.",
            "commonPitfalls": [
                "Acceder a variables regulares del JS Thread dentro de un worklet sin usar shared values.",
                "Olvidar instalar y registrar el plugin de Babel de Reanimated en babel.config.js."
            ]
        },
        "quiz": {
            "question": "¿En qué hilo se ejecutan los Worklets de Reanimated y por qué garantizan animaciones fluidas a 60/120 FPS?",
            "options": [
                "En el UI/Render Thread nativo, evitando caídas de frames incluso si el hilo de JavaScript se bloquea por cálculos pesados.",
                "En un servidor remoto en la nube de Amazon Web Services.",
                "En el hilo de audio del sistema operativo.",
                "En el hilo del compilador TypeScript en local."
            ],
            "correctIndex": 0,
            "explanation": "Los Worklets se ejecutan en el UI Thread gracias a un contexto de JavaScript secundario, garantizando que las animaciones y gestos no sufran interrupciones aunque el hilo principal de JS esté saturado."
        }
    },
    {
        "id": "rn-14",
        "title": "¿Cómo funciona el Bundler Metro en React Native y en qué se diferencia de Vite o Webpack?",
        "level": "avanzado",
        "tags": [
            "Metro",
            "Bundler",
            "Resolution",
            "Transformation",
            "Serialization",
            "Fast-Refresh"
        ],
        "response": "**Metro** es el empaquetador de JavaScript de ultra alto rendimiento desarrollado por Meta, diseñado específicamente para los requisitos de las aplicaciones móviles con React Native.\n\nA diferencia de Webpack o Vite (optimizados para navegadores web con scripts HTML, CSS modules y chunks dinámicos HTTP), Metro ejecuta un pipeline estricto en tres fases:\n\n1. **Resolution (Resolución de Módulos)**:\n   - Lee el grafo de dependencias a partir del punto de entrada (`index.js`).\n   - Resuelve extensiones de archivo con prioridades específicas de plataforma: si compila para iOS, buscará `Button.ios.tsx`, luego `Button.native.tsx` y finalmente `Button.tsx`.\n\n2. **Transformation (Transformación en Paralelo)**:\n   - Utiliza trabajadores (worker processes) en paralelo para transpilar TypeScript, JSX y JavaScript moderno usando Babel o el compilador Hermes.\n   - Cada archivo se transforma de forma independiente y se almacena en una caché en disco ultrarrápida.\n\n3. **Serialization (Serialización y Empaquetado)**:\n   - Combina todos los módulos procesados en un único archivo empaquetado binario (`index.bundle`) o en deltas incrementales para el servidor de desarrollo.\n   - **Fast Refresh**: Mantiene una conexión WebSocket con el dispositivo para enviar únicamente los módulos modificados (**Hot Module Replacement - HMR**) en milisegundos, preservando el estado de los componentes sin recargar la pantalla.",
        "codeExample": {
            "language": "javascript",
            "code": "// metro.config.js - Configuración profesional con monorepos y extensiones:\nconst { getDefaultConfig } = require('expo/metro-config');\nconst path = require('path');\n\nconst projectRoot = __dirname;\nconst workspaceRoot = path.resolve(projectRoot, '../..');\n\nconst config = getDefaultConfig(projectRoot);\n\n// 1. Añadir extensiones de recursos (svg, lottie):\nconfig.resolver.assetExts.push('lottie');\n\n// 2. Soporte para monorepos con pnpm / nx / turborepo:\nconfig.watchFolders = [workspaceRoot];\nconfig.resolver.nodeModulesPaths = [\n  path.resolve(projectRoot, 'node_modules'),\n  path.resolve(workspaceRoot, 'node_modules'),\n];\n\n// 3. Bloquear duplicación de instancias de React / React Native:\nconfig.resolver.extraNodeModules = {\n  react: path.resolve(projectRoot, 'node_modules/react'),\n  'react-native': path.resolve(projectRoot, 'node_modules/react-native'),\n};\n\nmodule.exports = config;"
        },
        "visualDiagram": {
            "id": "diag-rn-14",
            "title": "Pipeline de Metro Bundler: Resolution, Transformation y Serialization",
            "caption": "Metro resuelve extensiones móviles, transforma módulos en paralelo con workers y serializa el bundle con Fast Refresh instantáneo.",
            "diagramType": "rn-metro-bundler-pipeline"
        },
        "interviewTips": {
            "whatInterviewersWant": "Describir las tres etapas de Metro (Resolution, Transformation, Serialization) y cómo gestiona la resolución de extensiones de plataforma.",
            "commonPitfalls": [
                "Tratar a Metro como un bundler web genérico e intentar inyectar plugins de Webpack o Rollup sin adaptadores.",
                "No configurar watchFolders en entornos monorepo."
            ]
        },
        "quiz": {
            "question": "¿Cuáles son las tres fases secuenciales del pipeline de Metro Bundler?",
            "options": [
                "Resolution (resolver grafo y extensiones de plataforma), Transformation (transpilar código en paralelo) y Serialization (empaquetar el bundle final).",
                "Compilation, Minification y Deployment a la App Store.",
                "Download, Parsing y Upload al teléfono móvil.",
                "Sanitization, Verification y Code Obfuscation."
            ],
            "correctIndex": 0,
            "explanation": "Metro procesa el código en tres fases: Resolution (construye el árbol resolviendo .ios/.android), Transformation (compila con Babel/Hermes en paralelo) y Serialization (crea el bundle y deltas de Fast Refresh)."
        }
    },
    {
        "id": "rn-15",
        "title": "¿Qué es Codegen en la Nueva Arquitectura de React Native?",
        "level": "avanzado",
        "tags": [
            "Codegen",
            "Type-Safety",
            "TurboModule",
            "TypeScript",
            "Flow",
            "Build-Time"
        ],
        "response": "En la arquitectura tradicional de React Native existía una brecha crítica: JavaScript es un lenguaje dinámico débilmente tipado, mientras que iOS y Android requieren lenguajes estrictos y tipados estáticamente (C++, Java, Kotlin, Swift, Objective-C).\n\n**Codegen** es la herramienta de compilación automatizada de la Nueva Arquitectura que elimina esta brecha:\n\n1. **La Fuente de Verdad es TypeScript o Flow**:\n   - El desarrollador escribe una especificación formal de la interfaz del módulo o componente (`NativeMyModule.ts`) heredando de `TurboModule` o declarando un `HostComponent`.\n2. **Generación en Tiempo de Compilación (Build Time)**:\n   - Durante la fase de compilación nativa (mediante scripts de Gradle o CocoaPods), Codegen analiza el árbol sintáctico abstracto (AST) de la especificación TypeScript.\n3. **Emisión de Código Nativo Estricto**:\n   - Genera interfaces y clases base abstractas en **C++ (`.h` y `.cpp`)**, código de pegamento **JNI para Android (Java/Kotlin)** y protocolos formales en **Objective-C para iOS**.\n4. **Seguridad Total de Tipos (Compile-Time Type Safety)**:\n   - Si la implementación en Swift o Kotlin no cumple con los métodos o tipos definidos en TypeScript, la compilación de la app falla inmediatamente.\n   - Desaparecen los errores de tipo en tiempo de ejecución (`TypeError: undefined is not a function`).",
        "codeExample": {
            "language": "tsx",
            "code": "// Archivo de especificación para Codegen:\n// NativeDeviceInfo.ts\nimport type { TurboModule } from 'react-native';\nimport { TurboModuleRegistry } from 'react-native';\n\nexport interface Spec extends TurboModule {\n  // Métodos fuertemente tipados con primitivos validados por Codegen:\n  getDeviceModel(): string;\n  getBatteryLevel(): number;\n  isCharging(): boolean;\n  setNotificationBadge(count: number): Promise<boolean>;\n}\n\n// Al compilar, Codegen leerá este archivo y generará NativeDeviceInfoSpec.h en C++:\nexport default TurboModuleRegistry.getEnforcing<Spec>('NativeDeviceInfo');"
        },
        "visualDiagram": {
            "id": "diag-rn-15",
            "title": "Pipeline de Codegen: Especificación TS ➔ Código Nativo C++ / Java / Obj-C",
            "caption": "Codegen lee contratos de TypeScript y genera encabezados C++ y protocolos nativos garantizando compatibilidad de tipos en compilación.",
            "diagramType": "rn-codegen-type-contract-pipeline"
        },
        "interviewTips": {
            "whatInterviewersWant": "Saber que Codegen previene errores en tiempo de compilación generando código C++ y Java/Obj-C a partir de tipos de TypeScript.",
            "commonPitfalls": [
                "Creer que Codegen se ejecuta en tiempo de ejecución en el teléfono (corre durante el build nativo).",
                "Usar tipos prohibidos en especificaciones de Codegen (como any o uniones no tipadas)."
            ]
        },
        "quiz": {
            "question": "¿En qué momento se ejecuta Codegen y cuál es su objetivo principal?",
            "options": [
                "Durante el build nativo (Build Time), generando clases C++, Java y Obj-C a partir de tipos de TypeScript para garantizar seguridad estricta.",
                "En runtime en el teléfono cada vez que el usuario abre una nueva pantalla.",
                "En el servidor web antes de enviar una petición GraphQL.",
                "Únicamente cuando la aplicación sufre un error no capturado."
            ],
            "correctIndex": 0,
            "explanation": "Codegen se ejecuta durante el proceso de compilación nativa previa al empaquetado, generando código C++ y capas JNI que aseguran paridad estricta de tipos entre JavaScript y las capas nativas."
        }
    },
    {
        "id": "rn-16",
        "title": "¿Qué es el motor JavaScript Hermes y qué optimizaciones implementa?",
        "level": "experto",
        "tags": [
            "Hermes",
            "Bytecode",
            "AOT",
            "TTI",
            "Garbage-Collection",
            "Memory-Footprint"
        ],
        "response": "**Hermes** es un motor de JavaScript de código abierto creado por Meta, diseñado desde cero y optimizado específicamente para ejecutar aplicaciones de React Native en dispositivos móviles con recursos de CPU y memoria limitados.\n\nDesde React Native 0.70, Hermes es el motor oficial por defecto en iOS y Android, superando a JavaScriptCore (JSC) y V8 gracias a cuatro innovaciones arquitectónicas clave:\n\n1. **Compilación Anticipada a Bytecode (Ahead-Of-Time - AOT)**:\n   - Los motores web tradicionales (V8, JSC) descargan código JS como texto plano, debiendo parsearlo, compilarlo y optimizarlo con un compilador JIT (Just-In-Time) mientras la app arranca.\n   - Hermes compila el código JS a **Bytecode binario (HBC - Hermes Bytecode)** durante la fase de build en el ordenador del desarrollador o en el servidor CI/CD.\n2. **Arranque Instantáneo (Time-to-Interactive - TTI)**:\n   - Al abrir la aplicación, el teléfono no tiene que parsear millones de caracteres de JavaScript.\n   - El archivo de bytecode se mapea directamente en la memoria virtual del proceso con `mmap`, permitiendo que la primera pantalla se pinte de inmediato.\n3. **Garbage Collector Compacto y No Contiguo**:\n   - Diseñado para móviles: recolecta memoria de forma incremental en fragmentos pequeños, evitando pausas de basura que congelen las animaciones.\n4. **Menor Huella de Memoria (Low Memory Footprint)**:\n   - Reduce significativamente el consumo de RAM, disminuyendo la probabilidad de que el sistema operativo elimine la app en segundo plano.",
        "codeExample": {
            "language": "json",
            "code": "{\n  \"expo\": {\n    \"name\": \"PerformanceApp\",\n    \"slug\": \"performance-app\",\n    \"jsEngine\": \"hermes\",\n    \"ios\": {\n      \"supportsTablet\": true\n    },\n    \"android\": {\n      \"package\": \"com.company.performance\"\n    }\n  }\n}\n\n/*\nComprobación programática del motor Hermes en tiempo de ejecución:\nif (typeof HermesInternal !== 'undefined') {\n  console.log('⚡ Ejecutando sobre Hermes Engine con Bytecode AOT');\n  console.log('Versión de Bytecode:', HermesInternal.getRuntimeProperties?.()['Bytecode Version']);\n}\n*/"
        },
        "visualDiagram": {
            "id": "diag-rn-16",
            "title": "Hermes: Compilación AOT a Bytecode vs Motores JIT Tradicionales",
            "caption": "Hermes compila JS a Bytecode (HBC) en tiempo de build; en runtime se mapea con mmap logrando un TTI casi instantáneo y bajo consumo de RAM.",
            "diagramType": "rn-hermes-bytecode-aot-pipeline"
        },
        "interviewTips": {
            "whatInterviewersWant": "Destacar la compilación AOT a bytecode (HBC) y el uso de mmap para eliminar el tiempo de parseo inicial de la app.",
            "commonPitfalls": [
                "Pensar que Hermes usa un JIT agresivo (Hermes deliberadamente omite un JIT pesado para priorizar inicio rápido y bajo consumo de memoria).",
                "No saber que Hermes es el motor por defecto en React Native desde la versión 0.70."
            ]
        },
        "quiz": {
            "question": "¿Cuál es la razón principal por la que Hermes logra un tiempo de arranque (TTI) significativamente más rápido que V8 o JSC en móvil?",
            "options": [
                "Precompila el código JavaScript a Bytecode (HBC) en tiempo de build (AOT), eliminando el parseo y compilación durante el arranque.",
                "Descarga el código compilado desde la red 5G en milisegundos.",
                "Utiliza la GPU exclusivamente para ejecutar la lógica de JavaScript.",
                "Deshabilita el Garbage Collector para evitar liberar memoria."
            ],
            "correctIndex": 0,
            "explanation": "Al realizar la compilación AOT durante el build time, el dispositivo móvil solo necesita cargar el bytecode directamente en memoria con mmap, eliminando la fase de parseo en el inicio de la app."
        }
    },
    {
        "id": "rn-17",
        "title": "¿Cuál es el modelo de hilos (Threading Model) en React Native?",
        "level": "experto",
        "tags": [
            "Threading-Model",
            "JS-Thread",
            "Shadow-Thread",
            "UI-Thread",
            "Yoga",
            "Multi-Threading"
        ],
        "response": "React Native opera bajo un modelo concurrente **multi-hilo (Multi-Threaded Architecture)** diseñado para aislar la computación lógica de la presentación en pantalla:\n\n1. **JavaScript Thread (JS Thread)**:\n   - Es el hilo donde se ejecuta el motor JavaScript (Hermes/V8).\n   - Procesa la lógica de negocio, hooks de React (`useState`, `useEffect`), peticiones a APIs de red, dispatchers de Zustand/Redux y conciliación de componentes.\n   - Si este hilo se congela con un bucle pesado, la UI seguirá respondiendo a animaciones nativas pero los botones no procesarán eventos.\n\n2. **Shadow Thread (Layout Thread - Yoga C++)**:\n   - Un hilo de fondo en C++ donde el motor Yoga calcula la geometría y maquetación de la pantalla.\n   - Transforma las reglas de Flexbox (relaciones relativas) en coordenadas absolutas de píxeles (origen x, y, ancho y alto).\n\n3. **UI / Main Thread (Native OS Thread)**:\n   - El hilo principal del sistema operativo (`UIKit` en iOS, `MainLooper` en Android).\n   - Es el único hilo autorizado para instanciar, dibujar y manipular vistas nativas en pantalla y capturar eventos táctiles de hardware.\n   - Debe refrescar la pantalla cada 16.6ms (60 FPS) o 8.3ms (120 FPS ProMotion).\n\n4. **Native Modules ThreadPool**:\n   - Conjunto de hilos de fondo donde los módulos nativos ejecutan operaciones pesadas asíncronas (GPS, lectura/escritura en SQLite, decodificación de audio, cámara) sin bloquear ni el UI Thread ni el JS Thread.",
        "codeExample": {
            "language": "tsx",
            "code": "import React, { useEffect } from 'react';\nimport { View, Text, InteractionManager } from 'react-native';\n\nexport function NonBlockingScreen() {\n  useEffect(() => {\n    // InteractionManager difiere tareas pesadas hasta que terminen las transiciones y animaciones:\n    const task = InteractionManager.runAfterInteractions(() => {\n      // Esta computación pesada NO bloqueará la animación de entrada de la pantalla:\n      heavyDataProcessing();\n    });\n\n    return () => task.cancel();\n  }, []);\n\n  const heavyDataProcessing = () => {\n    console.log('Procesando datos en el JS Thread tras asegurar 60 FPS en la transición.');\n  };\n\n  return (\n    <View style={{ flex: 1, backgroundColor: '#0f172a', justifyContent: 'center', alignItems: 'center' }}>\n      <Text style={{ color: '#38bdf8', fontSize: 18 }}>Pantalla con Transición Suave</Text>\n    </View>\n  );\n}"
        },
        "visualDiagram": {
            "id": "diag-rn-17",
            "title": "Modelo Multi-Hilo de React Native",
            "caption": "Interacción entre los cuatro hilos principales: JS Thread (Hermes), Shadow Thread (Yoga C++), UI/Main Thread y Native Modules ThreadPool.",
            "diagramType": "rn-threading-model-multithread"
        },
        "interviewTips": {
            "whatInterviewersWant": "Nombrar con precisión los hilos principales (JS Thread, Shadow/Layout Thread, UI/Main Thread) y qué ejecuta cada uno.",
            "commonPitfalls": [
                "Pensar que JavaScript corre en el UI Thread principal del sistema operativo.",
                "Bloquear el UI Thread ejecutando cálculos pesados en métodos nativos sin despacharlos a un background thread."
            ]
        },
        "quiz": {
            "question": "¿Qué hilo en React Native es el único autorizado para crear, manipular y renderizar vistas nativas en la pantalla?",
            "options": [
                "El UI / Main Thread del sistema operativo (iOS Main RunLoop / Android Main Looper).",
                "El JS Thread donde corre el motor Hermes.",
                "El Shadow Thread donde corre Yoga.",
                "El hilo del servidor remoto donde está alojada la API."
            ],
            "correctIndex": 0,
            "explanation": "Por arquitectura de seguridad y diseño de los sistemas operativos móviles (iOS y Android), únicamente el hilo principal de la interfaz (UI/Main Thread) tiene permitido manipular la jerarquía de vistas en pantalla."
        }
    },
    {
        "id": "rn-18",
        "title": "¿Qué es el modo Bridgeless en React Native 0.74+?",
        "level": "experto",
        "tags": [
            "Bridgeless",
            "RN-0.74",
            "Architecture",
            "JSI",
            "Runtime-Dispatcher",
            "Meta"
        ],
        "response": "**Bridgeless Mode** representa la culminación definitiva de la Nueva Arquitectura de React Native. Introducido de manera experimental en versiones intermedias y activado **por defecto a partir de React Native 0.74**:\n\n1. **Eliminación Física del Bridge Legacy**:\n   - Durante las primeras etapas de transición a la Nueva Arquitectura, React Native mantenía una capa de compatibilidad del antiguo Bridge para que librerías obsoletas pudieran seguir funcionando.\n   - En el modo Bridgeless, **el antiguo Bridge está 100% deshabilitado y apagado**. No se inicializan las colas de mensajes del puente ni se cargan los módulos legacy de interoperabilidad.\n\n2. **Capa Runtime Dispatcher unificada**:\n   - Todas las llamadas entre JavaScript y las capas nativas fluyen exclusivamente a través de **JSI, TurboModules y Fabric**.\n   - Los eventos del sistema (como los eventos del ciclo de vida de la app o el hardware) se canalizan directamente mediante despachadores en C++.\n\n3. **Impacto en Rendimiento y Estabilidad**:\n   - **Arranque más rápido**: Ahorra el tiempo de inicialización de los componentes de comunicación legacy.\n   - **Menor consumo de memoria**: Se eliminan buffers y estructuras de datos intermedias.\n   - **Determinismo estricto**: Si una librería depende del Bridge antiguo sin haber migrado a TurboModules, fallará de forma explícita, incentivando un ecosistema 100% moderno y seguro.",
        "codeExample": {
            "language": "tsx",
            "code": "// Verificación de modo Bridgeless en runtime nativo (ejemplo de configuración en AppDelegate / MainActivity):\n/*\n// En React Native 0.74+ (ios/AppDelegate.mm o android/MainApplication.kt):\n// La propiedad newArchEnabled activa por defecto el modo Bridgeless:\n- (BOOL)bridgelessEnabled {\n  return YES; // Bridge completamente apagado\n}\n*/\n\nimport { Platform } from 'react-native';\n\nexport function checkArchitectureStatus() {\n  // En entornos modernos, podemos comprobar si estamos en la Nueva Arquitectura Bridgeless:\n  const isFabricActive = (global as any).nativeFabricUIManager != null;\n  console.log('¿Fabric y Bridgeless activos?:', isFabricActive);\n  return isFabricActive;\n}"
        },
        "visualDiagram": {
            "id": "diag-rn-18",
            "title": "Modo Bridgeless: Erradicación del Puente Legacy",
            "caption": "En React Native 0.74+ Bridgeless, el puente legacy es 100% erradicado; toda la comunicación opera sobre JSI y despachadores nativos C++.",
            "diagramType": "rn-bridgeless-mode-runtime"
        },
        "interviewTips": {
            "whatInterviewersWant": "Entender que Bridgeless es la culminación de la Nueva Arquitectura donde el puente legacy es físicamente erradicado del binario.",
            "commonPitfalls": [
                "Intentar usar bibliotecas antiguas no compatibles con TurboModules en modo Bridgeless sin adaptadores.",
                "Creer que Bridgeless significa que no hay comunicación con código nativo."
            ]
        },
        "quiz": {
            "question": "¿Qué significa que React Native esté funcionando en modo Bridgeless (0.74+)?",
            "options": [
                "Que el puente legacy de serialización JSON ha sido completamente desactivado y toda la comunicación opera exclusivamente vía JSI y TurboModules.",
                "Que la app no puede conectarse a redes Wi-Fi.",
                "Que no se puede usar TypeScript en el proyecto.",
                "Que la aplicación corre exclusivamente en la nube sin instalarse en el dispositivo."
            ],
            "correctIndex": 0,
            "explanation": "El modo Bridgeless elimina por completo las colas de mensajes del antiguo Bridge, obligando a que todas las interacciones nativas ocurran directamente a través de JSI, Fabric y TurboModules."
        }
    },
    {
        "id": "rn-19",
        "title": "¿Cómo diagnosticar y resolver caídas de frames (FPS drops) en React Native?",
        "level": "experto",
        "tags": [
            "FPS-Drops",
            "Profiling",
            "Performance",
            "Flamegraph",
            "Flipper",
            "Systrace",
            "Overdraw"
        ],
        "response": "Diagnosticar caídas de rendimiento en React Native exige una metodología de nivel senior capaz de aislar si el cuello de botella se produce en el **JS Thread** o en el **UI Thread**:\n\n1. **Diagnóstico de Caída en el JS Thread (`JS FPS < 60`)**:\n   - **Síntomas**: Retardo al pulsar botones, navegación tardía entre pantallas y lentitud en la actualización de estados.\n   - **Causas Frecuentes**: Re-renders masivos en componentes pesados, ordenación/filtrado síncrono de arrays grandes en el cuerpo de un componente, o paso de funciones inline como props a listas sin `useCallback` ni `React.memo`.\n   - **Herramientas**: React DevTools Profiler, Hermes Sampling Profiler y Flipper Flamegraphs.\n\n2. **Diagnóstico de Caída en el UI Thread (`UI FPS < 60`)**:\n   - **Síntomas**: Saltos visuales (stutter) en animaciones, scroll entrecortado y tirones al deslizar el dedo.\n   - **Causas Frecuentes**:\n     - **Overdraw excesivo**: Múltiples capas transparentes apiladas obligando a la GPU a pintar el mismo píxel varias veces.\n     - **Imágenes gigantescas sin redimensionar**: Cargar fotos de 12MP (4000x3000) en una celda de 80x80dp sin usar `resizeMode` ni librerías de caching como `expo-image`.\n     - **Sombras dinámicas complejas**: En iOS, `shadowOffset` y `shadowRadius` sin `shadowPath` obligan al motor CoreAnimation a calcular la silueta en cada frame fuera de pantalla (Off-screen rendering).\n   - **Herramientas**: Xcode Instruments (Time Profiler y Core Animation) y Android Studio Profiler (Systrace y GPU Overdraw).",
        "codeExample": {
            "language": "tsx",
            "code": "import React, { memo } from 'react';\nimport { StyleSheet, View } from 'react-native';\nimport { Image } from 'expo-image';\n\n// 1. Uso de expo-image para decodificación eficiente y caché en disco nativo:\nexport const OptimizedUserCard = memo(({ avatarUrl, name }: { avatarUrl: string; name: string }) => {\n  return (\n    <View style={styles.cardContainer}>\n      <Image\n        source={avatarUrl}\n        style={styles.avatar}\n        contentFit=\"cover\"\n        transition={200} // Crossfade suave en hardware\n        cachePolicy=\"memory-disk\" // Evita decodificar la imagen en cada render\n      />\n    </View>\n  );\n});\n\nconst styles = StyleSheet.create({\n  cardContainer: {\n    backgroundColor: '#1e293b',\n    borderRadius: 8,\n    padding: 12,\n    // Para sombras en iOS, evitar cálculos de silueta complejos en cada frame:\n    shadowColor: '#000',\n    shadowOffset: { width: 0, height: 2 },\n    shadowOpacity: 0.15,\n    shadowRadius: 3,\n  },\n  avatar: {\n    width: 60,\n    height: 60,\n    borderRadius: 30,\n  },\n});"
        },
        "visualDiagram": {
            "id": "diag-rn-19",
            "title": "Diagnóstico de Caídas de Frames: JS Thread vs UI Thread",
            "caption": "Diferenciación diagnóstica: cuellos de botella en JS Thread (re-renders, loops) vs cuellos de botella en UI Thread (overdraw, GPU rasterization).",
            "diagramType": "rn-fps-drops-profiling-flamegraph"
        },
        "interviewTips": {
            "whatInterviewersWant": "Saber distinguir con precisión quirúrgica entre un cuello de botella en el JS Thread y un problema de GPU/Rasterización en el UI Thread.",
            "commonPitfalls": [
                "Optimizar componentes de React cuando el problema es un overdraw nativo de sombras en Android.",
                "Usar animaciones sin useNativeDriver o sin Reanimated."
            ]
        },
        "quiz": {
            "question": "¿Cuál es la causa más común de caídas de frames en el UI Thread (UI FPS < 60) al hacer scroll?",
            "options": [
                "Imágenes de alta resolución sin redimensionar en celdas pequeñas, sombras complejas sin shadowPath y overdraw de capas transparentes en la GPU.",
                "Tener demasiadas variables let en el código TypeScript.",
                "Utilizar nombres de variables demasiado largos en JavaScript.",
                "Usar el operador ternario en lugar de sentencias if/else."
            ],
            "correctIndex": 0,
            "explanation": "Las caídas en el UI Thread se deben a sobrecarga en la GPU y el motor de rasterización nativo: decodificación de texturas pesadas, overdraw y cálculo de sombras complejas en tiempo real."
        }
    },
    {
        "id": "rn-20",
        "title": "¿Cómo implementar un Custom Native Module multiplataforma en C++ con TurboModules?",
        "level": "experto",
        "tags": [
            "TurboModules",
            "C++",
            "Cross-Platform",
            "Codegen",
            "Custom-Native-Module",
            "HostObject"
        ],
        "response": "En la arquitectura antigua de React Native, implementar un módulo nativo obligaba a escribir dos implementaciones completamente duplicadas: una en Java/Kotlin para Android y otra en Objective-C/Swift para iOS.\n\nCon **TurboModules y C++** en la Nueva Arquitectura, es posible implementar **código nativo multiplataforma compartido al 100% en C++**:\n\n1. **Definir la Especificación de Tipos (TypeScript)**:\n   - Se crea el archivo `NativeMathUtils.ts` que hereda de `TurboModule` y define las firmas de las funciones deseadas.\n2. **Ejecutar Codegen**:\n   - Codegen analiza la interfaz y genera las clases base abstractas en C++: `NativeMathUtilsSpec.h`.\n3. **Escribir la Lógica en C++ Compartido**:\n   - Se crea la clase `NativeMathUtils.cpp` que hereda directamente de `NativeMathUtilsSpec`.\n   - La implementación es pura en C++ y utiliza tipos de la librería estándar (`std::string`, `std::vector`, `double`).\n4. **Vincular en los Sistemas de Compilación de Plataforma**:\n   - En Android, se agrega el archivo C++ al `CMakeLists.txt`.\n   - En iOS, se agrega al `Podspec`.\n   - **Resultado**: La misma implementación C++ corre en iOS y Android sin necesidad de escribir una sola línea de Swift ni Kotlin, con invocación síncrona de latencia cero vía JSI.",
        "codeExample": {
            "language": "cpp",
            "code": "// 1. Archivo C++ multiplataforma compartido (NativeMathUtils.cpp):\n#include \"NativeMathUtils.h\"\n\nnamespace facebook::react {\n\nNativeMathUtils::NativeMathUtils(std::shared_ptr<CallInvoker> jsInvoker)\n    : NativeMathUtilsSpec(std::move(jsInvoker)) {}\n\ndouble NativeMathUtils::calculateHypotenuse(jsi::Runtime& rt, double a, double b) {\n  // Lógica nativa de alto rendimiento en C++ compartida al 100% entre iOS y Android:\n  return std::sqrt((a * a) + (b * b));\n}\n\nstd::string NativeMathUtils::hashPayload(jsi::Runtime& rt, std::string payload) {\n  // Procesamiento criptográfico directo en memoria nativa:\n  return \"sha256_\" + std::to_string(payload.length());\n}\n\n} // namespace facebook::react"
        },
        "visualDiagram": {
            "id": "diag-rn-20",
            "title": "Custom TurboModule en C++ Multiplataforma",
            "caption": "Una única implementación C++ compartida entre iOS y Android generada con Codegen y accesible síncronamente vía JSI.",
            "diagramType": "rn-custom-turbomodule-cpp"
        },
        "interviewTips": {
            "whatInterviewersWant": "Destacar que con C++ y TurboModules se logra verdadera reutilización de código nativo entre iOS y Android sin duplicar lógica en Swift y Kotlin.",
            "commonPitfalls": [
                "Creer que todavía es obligatorio escribir wrappers en Java y Objective-C para cualquier funcionalidad nativa.",
                "No usar Codegen para generar los contratos de tipos en C++."
            ]
        },
        "quiz": {
            "question": "¿Cuál es la principal ventaja de escribir un TurboModule nativo directamente en C++ en lugar de Swift/Kotlin?",
            "options": [
                "Permite compartir exactamente la misma implementación nativa entre iOS y Android sin duplicar código en Swift y Kotlin, con acceso directo vía JSI.",
                "Hace que la app no necesite ser aprobada por el equipo de revisión de Apple.",
                "Convierte la aplicación automáticamente en un ejecutable de Windows 95.",
                "Elimina la necesidad de usar una batería en el teléfono móvil."
            ],
            "correctIndex": 0,
            "explanation": "Al implementar el TurboModule en C++, el mismo código compila tanto para iOS (vía Clang) como para Android (vía NDK/CMake), logrando 100% de reutilización nativa y llamadas síncronas sin wrappers de plataforma."
        }
    }
]
};

export default questionsReactNative;
