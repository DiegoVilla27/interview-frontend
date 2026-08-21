import { ISection } from "../../types";

export const questionsUIUX: ISection = {
  title: "UI/UX",
  collapse: "collapseUIUX",
  icon: "ui-ux",
  questions: [
    // === BÁSICO ===
    {
      title: "¿Qué significa UI y UX y cuál es su diferencia principal?",
      response:
        "UI (User Interface) se enfoca en la capa visual, estética e interactiva (colores, tipografía, botones, espaciados). UX (User Experience) abarca la experiencia global, satisfacción, usabilidad, arquitectura de información y facilidad con la que el usuario cumple sus objetivos.",
      level: "basico"
    },
    {
      title: "¿Cuál es la diferencia entre Wireframe, Mockup y Prototipo?",
      response:
        "**Wireframe**: esquema estructural en escala de grises de baja fidelidad. **Mockup**: representación visual estática de alta fidelidad con colores y tipografía final. **Prototipo**: versión interactiva y navegable que simula el comportamiento real de la aplicación.",
      level: "basico"
    },
    {
      title: "¿Qué es el Diseño Responsive vs Diseño Adaptativo?",
      response:
        "El diseño responsive utiliza un único layout fluido basado en porcentajes, Flexbox/Grid y media queries que se adapta continuamente a cualquier resolución. El diseño adaptativo sirve layouts fijos predefinidos según breakpoints específicos del dispositivo detectado.",
      level: "basico"
    },
    {
      title: "¿Qué es la Accesibilidad Web (a11y) y las pautas WCAG?",
      response:
        "Es la disciplina que garantiza que los productos digitales sean utilizables por personas con diversas discapacidades (visuales, motoras, cognitivas). Se rige por los 4 principios WCAG: Perceptible, Operable, Comprensible y Robusto (POUR), con niveles de conformidad A, AA (estándar legal) y AAA.",
      level: "basico"
    },
    {
      title: "¿Qué es la Jerarquía Visual y cómo se establece?",
      response:
        "Es la organización intencional de los elementos para guiar el orden de lectura del ojo humano. Se establece mediante variaciones de tamaño de escala tipográfica, peso de fuente (bold vs regular), contraste de color, espacio en blanco (whitespace) y alineación.",
      level: "basico"
    },
    // === MEDIO ===
    {
      title: "¿Cuáles son las 10 Heurísticas de Usabilidad de Jakob Nielsen más importantes?",
      response:
        "1) Visibilidad del estado del sistema, 2) Coincidencia entre el sistema y el mundo real, 3) Control y libertad del usuario (undo/redo), 4) Consistencia y estándares, 5) Prevención de errores, 6) Reconocimiento antes que recuerdo, 7) Flexibilidad y eficiencia de uso, 8) Estética y diseño minimalista, 9) Ayuda ante errores claros, 10) Ayuda y documentación.",
      level: "medio"
    },
    {
      title: "¿Qué es la Ley de Fitts y cómo influye en el diseño de botones?",
      response:
        "Establece que el tiempo para alcanzar un objetivo depende de la distancia hacia él y del tamaño del objetivo. En UI significa que los botones primarios de acción (CTAs) deben ser lo suficientemente grandes y ubicarse en zonas de fácil alcance (como la parte inferior en móviles).",
      level: "medio"
    },
    {
      title: "¿Qué es la Ley de Hick y cómo previene la sobrecarga cognitiva?",
      response:
        "El tiempo que tarda un usuario en tomar una decisión aumenta logarítmicamente con el número y complejidad de las opciones. En UI se aplica simplificando formularios largos en pasos progresivos (Multi-step wizards) y reduciendo opciones en menús.",
      level: "medio"
    },
    {
      title: "¿Qué es un Design System y qué son los Design Tokens?",
      response:
        "Un Design System es el ecosistema unificado de guías de estilo, principios, patrones y componentes de código reutilizables. Los **Design Tokens** son las variables atómicas agnósticas a la plataforma (colores, espaciados, tipografías, elevaciones) que sincronizan diseño (Figma) con desarrollo (CSS/JS).",
      level: "medio"
    },
    {
      title: "¿Qué diferencia hay entre Test de Usabilidad y A/B Testing?",
      response:
        "El Test de Usabilidad es cualitativo (se observa a usuarios reales interactuar con el producto para identificar puntos de fricción y bloqueos). El A/B Testing es cuantitativo (se distribuyen dos variantes A y B al tráfico real para medir conversiones estadísticas de forma comparativa).",
      level: "medio"
    },
    // === AVANZADO ===
    {
      title: "¿Qué son las Microinteracciones y qué estructura siguen (Trigger, Rules, Feedback, Loops)?",
      response:
        "Son momentos sutiles de interacción que deleitan y brindan retroalimentación de estado: 1) **Trigger** (disparador del usuario o sistema), 2) **Rules** (lógica de qué ocurre), 3) **Feedback** (animación visual o háptica perceptible), 4) **Loops & Modes** (meta-reglas sobre repetición y persistencia).",
      level: "avanzado"
    },
    {
      title: "¿Qué es la Ley de Jakob y por qué el principio de familiaridad es crucial?",
      response:
        "Los usuarios pasan la mayor parte de su tiempo en otros sitios web; por ende, esperan que tu interfaz funcione de la misma manera que las que ya conocen. Romper convenciones arraigadas (como la posición del carrito o la navegación de retroceso) aumenta drásticamente la tasa de rebote.",
      level: "avanzado"
    },
    {
      title: "¿Cómo influyen los sesgos cognitivos: Efecto Zeigarnik y Efecto Von Restorff?",
      response:
        "**Efecto Zeigarnik**: las personas recuerdan mejor las tareas incompletas que las terminadas (base de barras de progreso de perfil al 80%). **Efecto Von Restorff (Aislamiento)**: el elemento que difiere visualmente del resto es el más recordado (base de destacar la tarjeta de precio 'Recomendada').",
      level: "avanzado"
    },
    {
      title: "¿Cómo diseñar interfaces inclusivas con soporte para Dark Mode y High Contrast?",
      response:
        "Utilizando pares semánticos de tokens (`bg-surface`, `text-primary`), respetando la media query `prefers-color-scheme`, evitando fondos negros puros `#000000` con texto blanco puro `#ffffff` para reducir fatiga visual (halación), y garantizando ratios de contraste mínimos WCAG de 4.5:1 para texto normal.",
      level: "avanzado"
    },
    {
      title: "¿Qué es la Coreografía de Movimiento (Motion Choreography) en interfaces web?",
      response:
        "Es el diseño coordinado de animaciones y transiciones de salida/entrada mediante curvas de aceleración naturales (cubic-bezier / ease-out) y desfases escalonados (stagger delays), guiando la atención del usuario sin generar mareo ni distracciones.",
      level: "avanzado"
    },
    // === EXPERTO ===
    {
      title: "¿Qué es la Teoría de la Carga Cognitiva (Intrínseca, Extraña y Germana) aplicada a software complejo?",
      response:
        "**Intrínseca**: esfuerzo inherente al problema. **Extraña**: ruido y fricción generada por mala UI/UX (debe reducirse a cero). **Germana**: esfuerzo mental constructivo para asimilar patrones. Un UX experto minimiza la carga extraña para liberar ancho de banda cognitivo del usuario.",
      level: "experto"
    },
    {
      title: "¿Cómo diseñar la Arquitectura de un Design System multi-marca y multi-plataforma a escala global?",
      response:
        "Estructurando Design Tokens en 3 niveles (Global Tokens -> Semantic/Alias Tokens -> Component Tokens), sincronizados automáticamente desde Figma vía Tokens Studio / Style Dictionary hacia CSS Variables, iOS Swift, Android XML/Compose, y empaquetados como paquetes versionados con pruebas de regresión visual.",
      level: "experto"
    },
    {
      title: "¿Cómo auditar la accesibilidad WCAG 2.2 de forma automatizada y manual?",
      response:
        "Automatizada: herramientas como axe-core, Pa11y y Lighthouse en CI/CD (detectan ~40% de fallos). Manual: navegación 100% por teclado (sin mouse) verificando `focus-visible`, lectores de pantalla reales (NVDA en Windows, VoiceOver en macOS/iOS, TalkBack en Android) y comprobación de target sizes mínimos de 24x24px / 44x44px.",
      level: "experto"
    },
    {
      title: "¿Qué es Spatial UI y cómo diseñar para interfaces espaciales (VisionOS / AR / VR)?",
      response:
        "Paradigma de diseño tridimensional donde las interfaces coexisten en el espacio físico del usuario. Requiere materiales vítreos dinámicos que se adaptan a la iluminación ambiental, interfaces controladas por 'Eye Tracking + Pinch Gesture', profundidad en el eje Z sin saturar la fatiga de convergencia ocular.",
      level: "experto"
    }
  ]
};

export default questionsUIUX;
