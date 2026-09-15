import { ISection } from "../../types";

export const questionsUIUX: ISection = {
  title: "UI/UX",
  collapse: "collapseUIUX",
  icon: "ui-ux",
  category: "frameworks",
  description: "Sistemas de diseño, heurísticas de usabilidad de Nielsen, jerarquía visual, accesibilidad WCAG 2.2 y psicología cognitiva.",
  questions: [
    {
        "title": "¿Qué significa UI y UX y cuál es su diferencia fundamental?",
        "response": "**UI (User Interface)** y **UX (User Experience)** son disciplinas interdependientes pero conceptualmente distintas:\n\n1. **UX (Experiencia de Usuario)**: Es la disciplina holística y metodológica que investiga, comprende y optimiza el viaje integral del usuario antes, durante y después de interactuar con un producto. Abarca investigación cualitativa y cuantitativa (user research), arquitectura de información (IA), mapeo de flujos (user journey maps), heurísticas de usabilidad y minimización de la fricción cognitiva.\n\n2. **UI (Interfaz de Usuario)**: Es la materialización visual, estética e interactiva de la solución. Comprende el diseño de layout, tipografía, sistemas de color, iconografía, componentes interactivos (botones, inputs, toggles), microinteracciones y coreografía de movimiento.\n\n3. **La analogía del automóvil**: UX es el motor, la ergonomía de los asientos, la suavidad del embrague y la seguridad en curvas; UI es el tablero digital, el tapizado de cuero, el color de la carrocería y el diseño elegante del volante.",
        "visualDiagram": {
            "id": "diag-uiux-01",
            "title": "Diferenciación Fundamental: UI vs UX",
            "caption": "UI abarca la estética visual y los controles; UX gobierna la investigación, la arquitectura mental y la satisfacción global.",
            "diagramType": "uiux-ui-vs-ux-venn"
        },
        "interviewTips": {
            "whatInterviewersWant": "Claridad sobre cómo la investigación de UX informa las decisiones de diseño de UI y cómo el ingeniero frontend conecta ambos mundos mediante métricas de rendimiento y accesibilidad.",
            "commonPitfalls": [
                "Reducir UX a 'hacer que la pantalla se vea bonita'.",
                "Ignorar la arquitectura de información o considerar que la accesibilidad solo le compete a diseño.",
                "No mencionar métricas cuantificables de UX (SUS score, Task Success Rate, Time on Task)."
            ]
        },
        "quiz": {
            "question": "¿Cuál es la principal distinción de responsabilidades entre UI y UX?",
            "options": [
                "UI es código frontend (HTML/CSS) y UX es investigación de mercado de marketing",
                "UI se enfoca en los elementos visuales e interactivos, mientras que UX investiga y optimiza el viaje global, la usabilidad y la satisfacción del usuario",
                "UX solo se aplica en aplicaciones móviles y UI solo en aplicaciones web de escritorio",
                "No existe diferencia; son dos términos sinónimos para referirse al diseño gráfico digital"
            ],
            "correctIndex": 1,
            "explanation": "UI diseña los puntos de contacto visuales y controles (paletas, tipografía, componentes), mientras que UX abarca la investigación de usuarios, la arquitectura de información y la usabilidad global."
        },
        "level": "basico",
        "codeExample": {
            "language": "tsx",
            "code": "import React, { useState, useEffect } from 'react';\n\n// Contrato de Telemetría UX: Mide fricción humana (TimeToInteract, Errores)\ninterface UXMetrics {\n  flowId: string;\n  timeSpentMs: number;\n  clicksCount: number;\n  hasErrors: boolean;\n}\n\n// Hook de Telemetría UX\nexport const useUXTracker = (flowId: string) => {\n  const [startTime] = useState<number>(() => performance.now());\n  const [clicks, setClicks] = useState<number>(0);\n\n  const recordInteraction = () => setClicks((prev) => prev + 1);\n\n  const completeFlow = (hasErrors = false): UXMetrics => {\n    const duration = Math.round(performance.now() - startTime);\n    const metrics: UXMetrics = {\n      flowId,\n      timeSpentMs: duration,\n      clicksCount: clicks,\n      hasErrors,\n    };\n    // Enviar a analítica (Mixpanel, Datadog RUM, PostHog)\n    console.info('[UX Telemetry]', metrics);\n    return metrics;\n  };\n\n  return { recordInteraction, completeFlow };\n};\n\n// Capa UI: Botón accesible con microinteracción visual\ninterface ButtonUIProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {\n  variant?: 'primary' | 'secondary';\n  isLoading?: boolean;\n}\n\nexport const ActionButton: React.FC<ButtonUIProps> = ({\n  children,\n  variant = 'primary',\n  isLoading,\n  onClick,\n  ...props\n}) => {\n  const { recordInteraction } = useUXTracker('action-button-click');\n\n  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {\n    recordInteraction();\n    onClick?.(e);\n  };\n\n  const baseClasses = 'px-5 py-2.5 rounded-lg font-medium transition-all duration-200 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none';\n  const variants = {\n    primary: 'bg-indigo-600 text-white hover:bg-indigo-700 active:scale-95 shadow-sm',\n    secondary: 'bg-slate-100 text-slate-900 hover:bg-slate-200 active:scale-95',\n  };\n\n  return (\n    <button\n      {...props}\n      onClick={handleClick}\n      disabled={isLoading || props.disabled}\n      className={`${baseClasses} ${variants[variant]} ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}\n    >\n      {isLoading ? 'Procesando...' : children}\n    </button>\n  );\n};"
        }
    },
    {
        "title": "¿Cuál es la diferencia entre Wireframe, Mockup, Prototipo y Design System?",
        "response": "El ciclo de diseño de producto digital avanza a través de niveles crecientes de fidelidad y abstracción sistémica:\n\n1. **Wireframe (Baja Fidelidad)**: Esquema estructural monocromático (escala de grises) sin colores ni fuentes definitivas. Su propósito es definir la distribución espacial, jerarquía de contenidos y flujos de navegación sin el sesgo estético del color.\n\n2. **Mockup (Alta Fidelidad Estática)**: Representación visual fotorrealista con la paleta de color final, tipografía, iconografía, sombras y assets reales. Muestra cómo se verá el producto exactamente pero carece de interactividad.\n\n3. **Prototipo (Simulación Dinámica)**: Versión interactiva navegable (en Figma, ProtoPie o código) que simula microinteracciones, transiciones de estado, clics y transiciones de pantalla para pruebas con usuarios reales.\n\n4. **Design System (Fundación Sistémica)**: La fuente única de verdad que unifica principios de diseño, componentes UI codificados y design tokens agnósticos sincronizados entre diseño y desarrollo.",
        "visualDiagram": {
            "id": "diag-uiux-02",
            "title": "Evolución de Fidelidad: Wireframe ➔ Mockup ➔ Prototipo",
            "caption": "La progresión de fidelidad permite validar arquitectura estructural en wireframes antes de invertir en assets o lógica de prototipado.",
            "diagramType": "uiux-wireframe-mockup-prototype"
        },
        "interviewTips": {
            "whatInterviewersWant": "Comprensión del valor económico de cada fase: fallar rápido y barato en wireframes en lugar de refactorizar código de producción en sprints avanzados.",
            "commonPitfalls": [
                "Confundir un Mockup con un Prototipo (el mockup es estático; el prototipo es navegable e interactivo).",
                "Iniciar directamente en alta fidelidad sin haber validado los requerimientos estructurales en wireframes."
            ]
        },
        "quiz": {
            "question": "¿Cuál es la ventaja fundamental de validar la experiencia de usuario en Wireframes antes de pasar a Mockups?",
            "options": [
                "Permite compilar el código TypeScript con anticipación",
                "Permite probar algoritmos de optimización de imágenes en CDN",
                "Permite evaluar la arquitectura, distribución y jerarquía del contenido sin distracciones estéticas ni costos de diseño detallado",
                "Garantiza el cumplimiento de WCAG nivel AAA de forma automática"
            ],
            "correctIndex": 2,
            "explanation": "Los wireframes aíslan la estructura y jerarquía de información en escala de grises, permitiendo detectar fallos de usabilidad antes de invertir tiempo en diseño visual o código."
        },
        "level": "basico",
        "codeExample": {
            "language": "tsx",
            "code": "import React from 'react';\n\n// 1. Wireframe Placeholder (Baja fidelidad para maquetación rápida)\nexport const WireframeCard: React.FC = () => (\n  <div className=\"border-2 border-dashed border-slate-300 p-4 rounded-lg bg-slate-50 animate-pulse\">\n    <div className=\"w-full h-32 bg-slate-200 rounded mb-3 flex items-center justify-center text-slate-400 font-mono text-xs\">\n      [Image Placeholder]\n    </div>\n    <div className=\"h-4 bg-slate-300 rounded w-3/4 mb-2\" />\n    <div className=\"h-3 bg-slate-200 rounded w-1/2 mb-4\" />\n    <div className=\"h-8 bg-slate-300 rounded w-full\" />\n  </div>\n);\n\n// 2. Mockup / Componente Producción (Alta fidelidad conectado al Design System)\ninterface ProductCardProps {\n  imageUrl: string;\n  title: string;\n  price: number;\n  onAddToCart: () => void;\n}\n\nexport const ProductionProductCard: React.FC<ProductCardProps> = ({\n  imageUrl,\n  title,\n  price,\n  onAddToCart,\n}) => (\n  <article className=\"group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200\">\n    <div className=\"aspect-video w-full overflow-hidden bg-slate-100\">\n      <img\n        src={imageUrl}\n        alt={title}\n        loading=\"lazy\"\n        className=\"w-full h-full object-cover group-hover:scale-105 transition-transform duration-300\"\n      />\n    </div>\n    <div className=\"p-4\">\n      <h3 className=\"font-semibold text-slate-900 dark:text-white text-base line-clamp-1\">\n        {title}\n      </h3>\n      <p className=\"text-indigo-600 dark:text-indigo-400 font-bold text-lg mt-1 mb-3\">\n        {new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(price)}\n      </p>\n      <button\n        onClick={onAddToCart}\n        className=\"w-full py-2 px-4 rounded-lg bg-indigo-600 hover:bg-indigo-700 active:scale-98 text-white font-medium text-sm transition-all focus-visible:ring-2 focus-visible:ring-indigo-500\"\n      >\n        Añadir al Carrito\n      </button>\n    </div>\n  </article>\n);"
        }
    },
    {
        "title": "¿Qué es el Diseño Responsive vs Diseño Adaptativo y cómo aplicar Fluid Typography?",
        "response": "Ambos enfoques resuelven la multiplicidad de dispositivos, pero con filosofías arquitectónicas opuestas:\n\n1. **Diseño Responsive (Fluido)**: Utiliza un único código base con rejillas flexibles (CSS Grid / Flexbox), unidades relativas (`vw`, `vh`, `%`, `rem`) y Media Queries. La interfaz fluye y escala de forma continua y continua ante cualquier ancho de viewport.\n\n2. **Diseño Adaptativo (Breakpoints Fijos)**: Detecta el dispositivo o tamaño de pantalla y sirve un layout rígido predefinido (ej. 320px, 768px, 1280px). Entre breakpoints la interfaz se congela, dejando márgenes vacíos.\n\n3. **Fluid Typography con `clamp()`**: La técnica moderna estándar que elimina saltos bruscos de texto entre media queries utilizando la función CSS `clamp(min, preferred_fluid, max)`:\n   - `font-size: clamp(1rem, 0.75rem + 1.25vw, 1.75rem);`\n4. **Container Queries (`@container`)**: El estándar actual donde los componentes responden al tamaño de su contenedor padre inmediato en lugar del viewport global de la ventana.",
        "visualDiagram": {
            "id": "diag-uiux-03",
            "title": "Responsive Design (Fluido) vs Adaptive Design (Rígido)",
            "caption": "El diseño responsivo fluye continuamente con clamp() y Container Queries; el diseño adaptativo salta entre plantillas rígidas fijas.",
            "diagramType": "uiux-responsive-vs-adaptive-layout"
        },
        "interviewTips": {
            "whatInterviewersWant": "Demostrar conocimiento de CSS moderno (Container Queries y `clamp()`) y explicar por qué los breakpoints fijos en media queries son insuficientes en arquitecturas modulares.",
            "commonPitfalls": [
                "Creer que Responsive y Adaptativo son lo mismo.",
                "Usar decenas de Media Queries con tamaños de fuentes fijos en `px` en lugar de una escala fluida con `rem` y `clamp()`.",
                "Ignorar que un componente puede estar en un sidebar de 300px dentro de un monitor 4K (justificación de Container Queries)."
            ]
        },
        "quiz": {
            "question": "¿Cuál es la principal ventaja de utilizar Container Queries (@container) frente a Media Queries tradicionales?",
            "options": [
                "Permiten escribir código CSS en formato binario para que cargue más rápido",
                "Permiten que un componente responda a las dimensiones de su contenedor directo, facilitando su reutilización en sidebars, modales o grillas principales",
                "Eliminan la necesidad de usar Flexbox o CSS Grid",
                "Son compatibles únicamente con navegadores móviles nativos"
            ],
            "correctIndex": 1,
            "explanation": "Container Queries permiten componibilidad real: el componente ajusta su diseño según el ancho de la columna o tarjeta donde se aloje, independientemente de la resolución global de la ventana."
        },
        "level": "basico",
        "codeExample": {
            "language": "css",
            "code": "/* CSS Moderno: Tipografía y Espaciado Fluido */\n:root {\n  /* Fluid Typography: min 16px, escala fluida a 24px entre 375px y 1280px */\n  --text-fluid-body: clamp(1rem, 0.9rem + 0.45vw, 1.25rem);\n  --text-fluid-h1: clamp(2rem, 1.2rem + 3.4vw, 3.75rem);\n  \n  /* Fluid Gap: espacio fluido sin saltos de media query */\n  --space-fluid: clamp(0.75rem, 0.5rem + 1.2vw, 2rem);\n}\n\n/* Componente con Container Queries: se adapta a su columna, no a la pantalla */\n.card-container {\n  container-type: inline-size;\n  container-name: cardContext;\n}\n\n/* Si el contenedor padre tiene menos de 400px: Layout vertical */\n.responsive-card {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-fluid);\n  font-size: var(--text-fluid-body);\n}\n\n/* Si el contenedor padre supera los 450px: Layout horizontal automático */\n@container cardContext (min-width: 450px) {\n  .responsive-card {\n    flex-direction: row;\n    align-items: center;\n  }\n  .responsive-card-image {\n    width: 35%;\n  }\n}"
        }
    },
    {
        "title": "¿Qué es la Accesibilidad Web (a11y) y los 4 principios WCAG 2.2 (P.O.U.R.)?",
        "response": "La **Accesibilidad Web (a11y)** garantiza que las interfaces digitales sean utilizables por todas las personas, incluyendo aquellas con discapacidades visuales, auditivas, motoras o cognitivas.\n\nLas pautas **WCAG 2.2** se estructuran en los **4 principios P.O.U.R.**:\n1. **Perceptible**: La información e interfaz deben presentarse a los usuarios de modo que puedan percibirlas (textos alternativos en imágenes, subtítulos, contraste cromático suficiente >= 4.5:1 para texto normal).\n2. **Operable**: Los componentes de interfaz y navegación deben ser operables (navegación completa por teclado sin trampas de foco, tamaño de objetivos táctiles de al menos 24x24px / 44x44px, sin desencadenar convulsiones por destellos).\n3. **Understandable (Comprensible)**: La información y la operación de la interfaz deben ser entendibles (lenguaje claro, mensajes de error explícitos que indican cómo corregir, formularios predecibles).\n4. **Robust (Robusto)**: El contenido debe ser interpretado con fiabilidad por una amplia variedad de agentes de usuario, incluyendo tecnologías asistivas (HTML semántico nativo, roles y estados ARIA válidos).\n\n**Niveles de conformidad**: Nivel A (mínimo absoluto), Nivel AA (estándar legal global exigido por la UE y EE.UU.) y Nivel AAA (máxima excelencia especializada).",
        "visualDiagram": {
            "id": "diag-uiux-04",
            "title": "WCAG 2.2: Los 4 Pilares P.O.U.R. y Niveles de Conformidad",
            "caption": "Los principios Perceptible, Operable, Comprensible y Robusto garantizan accesibilidad plena en Nivel AA para tecnologías asistivas.",
            "diagramType": "uiux-wcag-pour-principles"
        },
        "interviewTips": {
            "whatInterviewersWant": "Conocimiento exacto del estándar WCAG 2.2 AA, gestión de foco por teclado (`aria-modal`, `:focus-visible`), contraste de color y uso de HTML semántico antes de recurrir a ARIA.",
            "commonPitfalls": [
                "Creer que `aria-*` soluciona cualquier HTML mal estructurado (Primera regla de ARIA: No uses ARIA si existe un elemento HTML nativo equivalente).",
                "Quitar el outline del foco (`outline: none`) sin proveer un reemplazo accesible (`focus-visible`).",
                "No atrapar el foco dentro de modales o no restaurarlo al elemento previo tras cerrarlos."
            ]
        },
        "quiz": {
            "question": "¿Cuál es el nivel de conformidad WCAG que constituye el estándar legal exigido por regulaciones internacionales como la Directiva Europea de Accesibilidad y la ADA estadounidense?",
            "options": [
                "Nivel A",
                "Nivel AA",
                "Nivel AAA",
                "Nivel AAAA"
            ],
            "correctIndex": 1,
            "explanation": "El nivel WCAG AA es el estándar de referencia legal y contractual adoptado universalmente en el sector público y corporativo para garantizar accesibilidad sustancial."
        },
        "level": "basico",
        "codeExample": {
            "language": "tsx",
            "code": "import React, { useRef, useEffect } from 'react';\n\ninterface AccessibleModalProps {\n  isOpen: boolean;\n  onClose: () => void;\n  title: string;\n  children: React.ReactNode;\n}\n\nexport const AccessibleModal: React.FC<AccessibleModalProps> = ({\n  isOpen,\n  onClose,\n  title,\n  children,\n}) => {\n  const modalRef = useRef<HTMLDivElement>(null);\n  const previousActiveElement = useRef<HTMLElement | null>(null);\n\n  useEffect(() => {\n    if (isOpen) {\n      previousActiveElement.current = document.activeElement as HTMLElement;\n      // Foco inicial accesible al abrir modal\n      modalRef.current?.focus();\n    } else {\n      // Restaurar foco al cerrar (principio Operable)\n      previousActiveElement.current?.focus();\n    }\n  }, [isOpen]);\n\n  if (!isOpen) return null;\n\n  return (\n    <div\n      className=\"fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm\"\n      onClick={onClose}\n    >\n      <div\n        ref={modalRef}\n        role=\"dialog\"\n        aria-modal=\"true\"\n        aria-labelledby=\"modal-title-id\"\n        tabIndex={-1}\n        onClick={(e) => e.stopPropagation()}\n        onKeyDown={(e) => {\n          if (e.key === 'Escape') onClose();\n        }}\n        className=\"bg-white dark:bg-slate-900 rounded-xl p-6 max-w-md w-full shadow-xl border border-slate-200 dark:border-slate-800 outline-none focus:ring-2 focus:ring-indigo-500\"\n      >\n        <div className=\"flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800\">\n          <h2 id=\"modal-title-id\" className=\"text-lg font-bold text-slate-900 dark:text-white\">\n            {title}\n          </h2>\n          <button\n            onClick={onClose}\n            aria-label=\"Cerrar diálogo\"\n            className=\"p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-md focus-visible:ring-2 focus-visible:ring-indigo-500\"\n          >\n            ✕\n          </button>\n        </div>\n        <div className=\"mt-4 text-slate-600 dark:text-slate-300\">{children}</div>\n      </div>\n    </div>\n  );\n};"
        }
    },
    {
        "title": "¿Qué es la Jerarquía Visual y cómo se establece con escala tipográfica modular y whitespace?",
        "response": "La **Jerarquía Visual** es la estructuración deliberada de elementos en una pantalla para guiar la atención del ojo humano en el orden exacto de importancia requerido.\n\nSe fundamenta en 5 palancas de diseño:\n1. **Escala Tipográfica Modular**: Emplear ratios matemáticos (ej. Major Third 1.25 o Perfect Fourth 1.33) para derivar tamaños armónicos desde un base font (`16px -> 20px -> 25px -> 31.25px -> 39px`). Esto evita tamaños arbitrarios y crea contraste de proporciones inequívoco.\n2. **Peso de Fuente y Color (Contraste Cromático)**: Reservar pesos pesados (`bold`, `800`) y colores de alto contraste para titulares y puntos clave; textos secundarios con menor peso y tonos atenuados (`text-slate-500`).\n3. **Whitespace (Espacio en Blanco)**: El vacío es un elemento activo de diseño. Agrupar elementos relacionados con poco margen y separar secciones dispares con mayor espacio (Ley de Proximidad de Gestalt).\n4. **Patrones de Escaneo Ocular**: El cerebro no lee línea por línea; escanea en **F-Pattern** (bloques de texto y noticias) o **Z-Pattern** (landing pages con banners y CTAs).",
        "visualDiagram": {
            "id": "diag-uiux-05",
            "title": "Jerarquía Visual: Escala Tipográfica Modular & Patrones de Escaneo",
            "caption": "La combinación de ratios tipográficos matemáticos, contrastes de peso y patrones oculares (F y Z) guía la atención del usuario sin confusión.",
            "diagramType": "uiux-visual-hierarchy-scale"
        },
        "interviewTips": {
            "whatInterviewersWant": "Explicar cómo se traslada una escala matemática de diseño a variables CSS o configuración de Tailwind (grid de 8 puntos) y cómo el espaciado previene la fatiga visual.",
            "commonPitfalls": [
                "Elegir tamaños de fuente arbitrarios en cada componente (`17px`, `23px`, `31px`).",
                "Saturar toda la interfaz con texto en negrita y botones llamativos (si todo grita, nada se escucha).",
                "Apretar los elementos con poco margen por miedo al espacio en blanco."
            ]
        },
        "quiz": {
            "question": "¿Qué patrón de escaneo ocular suele exhibir un usuario al navegar por una página de inicio (Landing page) orientada a la conversión?",
            "options": [
                "Patrón circular en sentido de las agujas del reloj",
                "Patrón Z (Z-Pattern), escaneando de izquierda a derecha arriba, cruzando en diagonal al centro y cerrando en el CTA inferior",
                "Patrón aleatorio guiado únicamente por el puntero del mouse",
                "Patrón vertical ascendente de abajo hacia arriba"
            ],
            "correctIndex": 1,
            "explanation": "El patrón Z es típico de páginas con poca densidad de texto y elementos de alto impacto visual (encabezado, hero visual y llamada a la acción)."
        },
        "level": "basico",
        "codeExample": {
            "language": "css",
            "code": "/* Escala Tipográfica Modular (Ratio 1.25 - Major Third) */\n:root {\n  --font-step-0: 1rem;       /* 16px - Base / Body */\n  --font-step-1: 1.25rem;    /* 20px - H4 / Subtitles */\n  --font-step-2: 1.563rem;   /* 25px - H3 / Cards */\n  --font-step-3: 1.953rem;   /* 31.25px - H2 / Section */\n  --font-step-4: 2.441rem;   /* 39.06px - H1 / Hero */\n  \n  /* Escala de Espaciado Modular (Grid de 8pt) */\n  --space-2: 0.5rem;   /* 8px */\n  --space-4: 1rem;     /* 16px */\n  --space-6: 1.5rem;   /* 24px */\n  --space-8: 2rem;     /* 32px */\n  --space-12: 3rem;    /* 48px */\n}\n\n/* Tarjeta con Jerarquía Visual Estricta */\n.article-card {\n  padding: var(--space-6);\n  border-radius: 12px;\n  background-color: var(--surface-primary);\n}\n\n/* 1° Ancla de Atención: Titular destacado */\n.article-card h2 {\n  font-size: var(--font-step-3);\n  font-weight: 700;\n  line-height: 1.2;\n  color: var(--text-high-contrast);\n  margin-bottom: var(--space-2);\n}\n\n/* 2° Nivel: Cuerpo legible */\n.article-card p {\n  font-size: var(--font-step-0);\n  line-height: 1.6;\n  color: var(--text-medium-contrast);\n  margin-bottom: var(--space-4);\n}\n\n/* 3° Nivel: Metadata atenuada */\n.article-card .meta {\n  font-size: 0.8125rem;\n  color: var(--text-low-contrast);\n}"
        }
    },
    {
        "title": "¿Cuáles son las 10 Heurísticas de Usabilidad de Jakob Nielsen aplicadas a interfaces modernas?",
        "response": "Formuladas por Jakob Nielsen y Rolf Molich, son los 10 principios generales de diseño de interacción:\n\n1. **Visibilidad del estado del sistema**: Feedback inmediato de lo que ocurre (spinners, barras de progreso, badges de guardado).\n2. **Coincidencia entre el sistema y el mundo real**: Vocabulario y metáforas conocidas por el usuario (icono de carrito, papelera, lenguaje natural sin jerga técnica).\n3. **Control y libertad del usuario**: Vías de escape claras para corregir errores (Undo / Deshacer, Cancelar, botón Atrás sin romper estado).\n4. **Consistencia y estándares**: La misma acción no debe llamarse 'Modificar' en una pantalla y 'Editar' en otra (cumplir Ley de Jakob).\n5. **Prevención de errores**: Diseñar para evitar el error antes de que ocurra (confirmar acciones destructivas, desactivar inputs inválidos, autocompletado).\n6. **Reconocimiento antes que recuerdo**: Hacer visibles las opciones y acciones en lugar de exigir memorización.\n7. **Flexibilidad y eficiencia de uso**: Atajos para expertos (`Cmd+K`, gestos) sin abrumar a novatos.\n8. **Diseño estético y minimalista**: Eliminar información superflua que compita con los datos relevantes.\n9. **Ayuda ante errores con diagnóstico claro**: Mensajes en lenguaje humano que expliquen exactamente qué falló y cómo solucionarlo.\n10. **Ayuda y documentación**: Buscadores contextuales de soporte fáciles de encontrar.",
        "visualDiagram": {
            "id": "diag-uiux-06",
            "title": "Las 10 Heurísticas de Usabilidad de Jakob Nielsen",
            "caption": "Las 10 heurísticas organizadas en Feedback & Control, Consistencia & Prevención, y Eficiencia & Claridad.",
            "diagramType": "uiux-nielsen-heuristics-radar"
        },
        "interviewTips": {
            "whatInterviewersWant": "Ejemplos prácticos de cada heurística en aplicaciones modernas (ej. la barra de búsqueda de Slack, el botón de Deshacer de Gmail, confirmaciones de Stripe).",
            "commonPitfalls": [
                "Memorizar las 10 heurísticas como una lista teórica sin saber cómo se audita un componente en código real.",
                "Mostrar mensajes de error genéricos como 'Error 500: Algo falló' en lugar de guiar constructivamente la resolución (Violación de Heurística #9)."
            ]
        },
        "quiz": {
            "question": "¿Qué heurística de Nielsen se aplica al proveer un toast con la opción de 'Deshacer' (Undo) inmediatamente después de que el usuario elimina un registro?",
            "options": [
                "Coincidencia entre el sistema y el mundo real",
                "Control y libertad del usuario",
                "Estética y diseño minimalista",
                "Ayuda y documentación técnica"
            ],
            "correctIndex": 1,
            "explanation": "El botón 'Deshacer' encarna el principio de 'Control y libertad del usuario', proveyendo una salida de emergencia rápida ante acciones no deseadas sin requerir procesos de soporte."
        },
        "level": "medio",
        "codeExample": {
            "language": "tsx",
            "code": "import React, { useState } from 'react';\n\n// Heurística #3 (Libertad con Undo) y Heurística #5 (Prevención de Error)\nexport const DeletableItemManager: React.FC = () => {\n  const [items, setItems] = useState<string[]>(['Reporte_Q1.pdf', 'Auditoria_Seguridad.xlsx']);\n  const [recentlyDeleted, setRecentlyDeleted] = useState<{ item: string; index: number } | null>(null);\n\n  const handleDelete = (index: number) => {\n    const item = items[index];\n    setRecentlyDeleted({ item, index });\n    setItems((prev) => prev.filter((_, i) => i !== index));\n  };\n\n  const handleUndo = () => {\n    if (!recentlyDeleted) return;\n    setItems((prev) => {\n      const next = [...prev];\n      next.splice(recentlyDeleted.index, 0, recentlyDeleted.item);\n      return next;\n    });\n    setRecentlyDeleted(null);\n  };\n\n  return (\n    <div className=\"p-4 max-w-sm border rounded-lg dark:border-slate-800\">\n      <h4 className=\"font-bold text-sm mb-3\">Archivos del Proyecto</h4>\n      <ul className=\"space-y-2 mb-4\">\n        {items.map((item, idx) => (\n          <li key={item} className=\"flex items-center justify-between text-sm py-1 border-b dark:border-slate-800\">\n            <span>{item}</span>\n            <button\n              onClick={() => handleDelete(idx)}\n              className=\"text-xs text-red-600 hover:text-red-700 font-medium\"\n            >\n              Eliminar\n            </button>\n          </li>\n        ))}\n      </ul>\n\n      {/* Toast con Acción Deshacer (Heurística #3: User Freedom) */}\n      {recentlyDeleted && (\n        <div className=\"flex items-center justify-between p-3 bg-slate-900 text-white text-xs rounded shadow-lg animate-fade-in\">\n          <span>Elemento &apos;{recentlyDeleted.item}&apos; eliminado.</span>\n          <button\n            onClick={handleUndo}\n            className=\"ml-3 text-indigo-300 font-bold uppercase tracking-wider hover:underline\"\n          >\n            Deshacer\n          </button>\n        </div>\n      )}\n    </div>\n  );\n};"
        }
    },
    {
        "title": "¿Qué es la Ley de Fitts y cómo influye en el diseño táctil y la Thumb Zone en móviles?",
        "response": "La **Ley de Fitts (Paul Fitts, 1954)** modela matemáticamente el movimiento humano hacia un objetivo:\n\n$$\\text{MT} = a + b \\cdot \\log_2\\left(\\frac{2D}{W}\\right)$$\n\n- **MT (Movement Time)**: Tiempo requerido para adquirir y hacer clic/tap en el objetivo.\n- **D (Distance)**: Distancia al objetivo.\n- **W (Width / Size)**: Ancho o tamaño físico del objetivo interactivo.\n\n**Implicaciones críticas en Frontend y Móvil**:\n1. **Tamaño Mínimo de Touch Targets**: Las directrices de Apple (iOS Human Interface) exigen al menos **44x44 pt**, y Google (Material Design) **48x48 dp**. En web, WCAG 2.2 exige un mínimo estricto de **24x24 px** (Criterio 2.5.8).\n2. **The Thumb Zone (Zona del Pulgar)**: Más del 75% de los usuarios manejan smartphones con una sola mano. La zona natural de menor esfuerzo motor está en el tercio inferior de la pantalla. Por ello, las barras de navegación primarias, modales de acción (bottom sheets) y CTAs flotantes se ubican abajo.\n3. **Bordes y Esquinas en Desktop**: En pantallas con cursor, los bordes de la pantalla tienen un 'ancho infinito' ($W = \\infty$) porque el cursor no puede sobrepasarlos, haciendo que las esquinas y bordes sean los puntos más rápidos de seleccionar.",
        "visualDiagram": {
            "id": "diag-uiux-07",
            "title": "Ley de Fitts & Ergonomía Móvil (The Thumb Zone)",
            "caption": "A mayor tamaño de objetivo y menor distancia motora, menor tiempo de adquisición. Los controles esenciales residen en la zona natural del pulgar.",
            "diagramType": "uiux-fitts-law-thumb-zone"
        },
        "interviewTips": {
            "whatInterviewersWant": "Citar la fórmula matemática de Fitts, los estándares mínimos de tamaño táctil (44px / 48px) y explicar la diferencia ergonómica entre cursor y pantalla táctil.",
            "commonPitfalls": [
                "Diseñar botones táctiles diminutos de 16x16px donde el usuario comete constantes clics erróneos.",
                "Ubicar acciones principales en las esquinas superiores de smartphones gigantes donde el usuario no llega con una sola mano."
            ]
        },
        "quiz": {
            "question": "Según la Ley de Fitts, ¿cuál es la razón ergonómica por la que las barras de navegación principales en smartphones se sitúan en la parte inferior de la pantalla?",
            "options": [
                "Para evitar que la batería del teléfono se descargue por el brillo superior",
                "Porque la parte inferior corresponde a la zona de alcance natural del pulgar (Thumb Zone), minimizando la distancia motora (D) y reduciendo el tiempo de adquisición",
                "Porque el sistema operativo bloquea los toques en el tercio superior de la pantalla",
                "Es un estándar impuesto por los motores de búsqueda para indexación web"
            ],
            "correctIndex": 1,
            "explanation": "La 'Thumb Zone' permite interactuar con una sola mano con mínimo esfuerzo articular, reduciendo la distancia (D) según la ecuación de Fitts."
        },
        "level": "medio",
        "codeExample": {
            "language": "tsx",
            "code": "import React from 'react';\n\ninterface AccessibleIconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {\n  icon: React.ReactNode;\n  label: string;\n}\n\n// Ley de Fitts: El icono visual puede ser de 20px, pero el área de tap es de 48px\nexport const ThumbFriendlyIconButton: React.FC<AccessibleIconButtonProps> = ({\n  icon,\n  label,\n  onClick,\n  ...props\n}) => (\n  <button\n    {...props}\n    onClick={onClick}\n    aria-label={label}\n    className=\"relative flex items-center justify-center min-w-[48px] min-h-[48px] rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 active:scale-95 transition-transform focus-visible:ring-2 focus-visible:ring-indigo-500\"\n  >\n    {/* Icono visual compacto */}\n    <span className=\"w-5 h-5 text-slate-700 dark:text-slate-200 pointer-events-none\">\n      {icon}\n    </span>\n    {/* Hitbox extendida invisible garantizada por min-w/min-h */}\n  </button>\n);\n\n// Mobile Bottom Bar (Thumb Zone Ergonomics)\nexport const MobileBottomNavigation: React.FC = () => (\n  <nav\n    aria-label=\"Navegación Móvil Principal\"\n    className=\"fixed bottom-0 left-0 right-0 h-16 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center justify-around px-2 z-40 pb-[env(safe-area-inset-bottom)]\"\n  >\n    {/* Controles primarios al alcance inmediato del pulgar */}\n    <button className=\"flex flex-col items-center justify-center min-w-[48px] min-h-[48px] text-indigo-600\">\n      <span className=\"text-xs font-medium\">Inicio</span>\n    </button>\n    <button className=\"flex flex-col items-center justify-center min-w-[48px] min-h-[48px] text-slate-500\">\n      <span className=\"text-xs font-medium\">Buscar</span>\n    </button>\n    <button className=\"flex flex-col items-center justify-center min-w-[48px] min-h-[48px] text-slate-500\">\n      <span className=\"text-xs font-medium\">Perfil</span>\n    </button>\n  </nav>\n);"
        }
    },
    {
        "title": "¿Qué es la Ley de Hick y cómo previene la sobrecarga cognitiva mediante Progressive Disclosure?",
        "response": "La **Ley de Hick (William Edmund Hick y Ray Hyman, 1952)** establece que el tiempo que tarda un ser humano en tomar una decisión aumenta logarítmicamente con el número y la complejidad de las opciones disponibles:\n\n$$\\text{RT} = b \\cdot \\log_2(n + 1)$$\n\n- **RT (Reaction Time)**: Tiempo de reacción / decisión.\n- **n**: Número de alternativas u opciones simultáneas.\n\n**El peligro de la Parálisis por Análisis**:\nCuando se presenta un menú con 30 opciones o un formulario monolítico con 40 campos sin estructurar, el usuario experimenta fatiga cognitiva y abandona el flujo.\n\n**Solución Arquitectónica: Divulgación Progresiva (Progressive Disclosure)**:\nPatrón de diseño interactivo que presenta solo la información esencial y opciones indispensables en el momento inicial, aplazando las opciones avanzadas o secundarias a pasos posteriores (ej. Multi-step wizards, acordeones o paneles expandibles).",
        "visualDiagram": {
            "id": "diag-uiux-08",
            "title": "Ley de Hick-Hyman & Patrón Progressive Disclosure",
            "caption": "El tiempo de decisión escala logarítmicamente. Desglosar formularios largos en pasos secuenciales reduce la fricción y dispara la conversión.",
            "diagramType": "uiux-hick-law-cognitive-load"
        },
        "interviewTips": {
            "whatInterviewersWant": "Demostrar cómo la reducción de opciones cognitivas por pantalla impacta directamente el embudo de conversión y previene el abandono.",
            "commonPitfalls": [
                "Crear formularios de 30 inputs en una sola pantalla sin orden jerárquico.",
                "Confundir la Ley de Hick con la Ley de Fitts (Hick trata del tiempo para decidir; Fitts del tiempo para ejecutar el movimiento físico del puntero)."
            ]
        },
        "quiz": {
            "question": "¿Qué establece la Ley de Hick respecto a la experiencia de usuario?",
            "options": [
                "Que a mayor velocidad de conexión, mayor es la satisfacción del cliente",
                "Que el tiempo para tomar una decisión aumenta logarítmicamente con el número y complejidad de opciones presentadas",
                "Que los usuarios recuerdan mejor los elementos ubicados en las esquinas inferiores",
                "Que el tamaño del botón debe ser proporcional al precio del producto"
            ],
            "correctIndex": 1,
            "explanation": "La Ley de Hick establece que a mayor cantidad de opciones simultáneas, mayor es la carga mental y el tiempo requerido por el usuario para elegir."
        },
        "level": "medio",
        "codeExample": {
            "language": "tsx",
            "code": "import React, { useState } from 'react';\n\n// Patrón Progressive Disclosure: Multi-step Wizard que reduce n opciones a la vez\nexport const CheckoutWizard: React.FC = () => {\n  const [step, setStep] = useState<1 | 2 | 3>(1);\n  const [formData, setFormData] = useState({ email: '', address: '', paymentMethod: '' });\n\n  return (\n    <div className=\"p-6 max-w-md mx-auto bg-white dark:bg-slate-900 rounded-xl shadow-md border dark:border-slate-800\">\n      {/* Indicador de Progreso Visual */}\n      <div className=\"flex items-center justify-between mb-6\">\n        {[1, 2, 3].map((s) => (\n          <div key={s} className=\"flex items-center space-x-2\">\n            <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${\n              step >= s ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-600'\n            }`}>\n              {s}\n            </span>\n            <span className=\"text-xs text-slate-500\">Paso {s}</span>\n          </div>\n        ))}\n      </div>\n\n      {/* Paso 1: Solo credenciales básicas */}\n      {step === 1 && (\n        <div className=\"space-y-4\">\n          <h3 className=\"font-bold text-base\">1. Datos de Contacto</h3>\n          <input\n            type=\"email\"\n            placeholder=\"correo@empresa.com\"\n            value={formData.email}\n            onChange={(e) => setFormData({ ...formData, email: e.target.value })}\n            className=\"w-full p-2.5 border rounded-lg dark:bg-slate-800 dark:border-slate-700\"\n          />\n          <button\n            onClick={() => setStep(2)}\n            className=\"w-full py-2.5 bg-indigo-600 text-white rounded-lg font-medium\"\n          >\n            Continuar a Envío\n          </button>\n        </div>\n      )}\n\n      {/* Paso 2: Dirección */}\n      {step === 2 && (\n        <div className=\"space-y-4\">\n          <h3 className=\"font-bold text-base\">2. Dirección de Entrega</h3>\n          <input\n            type=\"text\"\n            placeholder=\"Calle Principal 123\"\n            value={formData.address}\n            onChange={(e) => setFormData({ ...formData, address: e.target.value })}\n            className=\"w-full p-2.5 border rounded-lg dark:bg-slate-800 dark:border-slate-700\"\n          />\n          <div className=\"flex space-x-2\">\n            <button onClick={() => setStep(1)} className=\"w-1/2 py-2 border rounded-lg\">Atrás</button>\n            <button onClick={() => setStep(3)} className=\"w-1/2 py-2 bg-indigo-600 text-white rounded-lg\">Continuar</button>\n          </div>\n        </div>\n      )}\n\n      {/* Paso 3: Pago */}\n      {step === 3 && (\n        <div className=\"space-y-4\">\n          <h3 className=\"font-bold text-base\">3. Confirmación & Pago</h3>\n          <p className=\"text-xs text-slate-500\">Revisa tus datos antes de autorizar el cobro.</p>\n          <button onClick={() => alert('¡Compra procesada!')} className=\"w-full py-2.5 bg-green-600 text-white rounded-lg font-bold\">\n            Pagar Ahora\n          </button>\n        </div>\n      )}\n    </div>\n  );\n};"
        }
    },
    {
        "title": "¿Qué es un Design System y cómo estructurar Design Tokens en 3 niveles (W3C DTCG)?",
        "response": "Un **Design System** es la fuente única de verdad inter-disciplinaria que unifica directrices de diseño, bibliotecas de componentes de código y patrones de UI para acelerar el desarrollo y garantizar consistencia de marca.\n\nEl estándar internacional del **W3C Design Tokens Community Group (DTCG)** define una arquitectura de tokens en 3 niveles jerárquicos:\n1. **Nivel 1 - Global / Option Tokens (Raw)**: Valores primarios fijos, agnósticos de su contexto o intención semántica (`color.blue.500 = #3b82f6`, `spacing.4 = 16px`, `font.sans = 'Inter'`).\n2. **Nivel 2 - Semantic / Alias Tokens**: Asignan significado e intención de negocio a los tokens globales (`color.primary.action = {color.blue.500}`, `surface.card = {color.slate.100}`, `border.focus = {color.indigo.500}`). Este nivel es el que cambia en runtime al activar Dark Mode o al cambiar de marca.\n3. **Nivel 3 - Component Tokens**: Específicos para un componente atómico (`button.primary.background = {color.primary.action}`, `card.border.radius = {radius.lg}`). Permiten que un componente altere su estilo sin impactar globalmente a otros componentes.\n\n**Pipeline automatizado**: Tokens en formato JSON sincronizados desde Figma mediante Tokens Studio, procesados por **Style Dictionary** y exportados a variables CSS, Tailwind plugins, iOS Swift y Android Jetpack Compose.",
        "visualDiagram": {
            "id": "diag-uiux-09",
            "title": "Arquitectura de Design Tokens de 3 Niveles (W3C DTCG)",
            "caption": "Los tokens semánticos desacoplan las intenciones de UI de los valores crudos, permitiendo Dark Mode y soporte multi-marca sin romper contratos de componentes.",
            "diagramType": "uiux-design-tokens-architecture"
        },
        "interviewTips": {
            "whatInterviewersWant": "Dominio de la jerarquía Global -> Semantic -> Component tokens y explicación del tooling moderno (Style Dictionary, Tokens Studio, Tailwind presets).",
            "commonPitfalls": [
                "Acoplar los nombres de componentes a colores directos (ej. nombrar un token `--color-blue` en lugar de `--color-primary-interactive`).",
                "Gestionar temas creando dos archivos CSS duplicados en lugar de simplemente redefinir las CSS variables semánticas en el selector `[data-theme='dark']`."
            ]
        },
        "quiz": {
            "question": "¿Por qué es crucial contar con una capa intermedia de Tokens Semánticos (Alias Tokens) entre los tokens globales y los componentes?",
            "options": [
                "Para evitar que el navegador tenga que descargar fuentes tipográficas",
                "Porque permite cambiar de tema (Light/Dark Mode) o de marca remapeando la semántica sin alterar el código ni los contratos de los componentes individuales",
                "Porque es un requisito indispensable del motor de renderizado V8",
                "Para permitir que los componentes utilicen variables binarias en lugar de strings"
            ],
            "correctIndex": 1,
            "explanation": "Los tokens semánticos definen la función ('color-surface', 'text-primary') y no el valor absoluto ('#fff'), permitiendo alternar temas cambiando únicamente el mapeo del alias."
        },
        "level": "medio",
        "codeExample": {
            "language": "json",
            "code": "// schema-tokens.json (W3C DTCG Specification Format)\n{\n  \"global\": {\n    \"color\": {\n      \"indigo\": { \"600\": { \"$value\": \"#4f46e5\", \"$type\": \"color\" } },\n      \"slate\": { \"100\": { \"$value\": \"#f1f5f9\", \"$type\": \"color\" } }\n    },\n    \"dimension\": {\n      \"spacing-4\": { \"$value\": \"1rem\", \"$type\": \"dimension\" }\n    }\n  },\n  \"semantic\": {\n    \"action\": {\n      \"primary\": { \"$value\": \"{global.color.indigo.600}\", \"$type\": \"color\" }\n    },\n    \"surface\": {\n      \"canvas\": { \"$value\": \"{global.color.slate.100}\", \"$type\": \"color\" }\n    }\n  },\n  \"component\": {\n    \"button\": {\n      \"cta\": {\n        \"background\": { \"$value\": \"{semantic.action.primary}\", \"$type\": \"color\" },\n        \"padding\": { \"$value\": \"{global.dimension.spacing-4}\", \"$type\": \"dimension\" }\n      }\n    }\n  }\n}\n\n// Output generado por Style Dictionary -> CSS Custom Properties\n/*\n:root {\n  --btn-cta-bg: var(--action-primary, #4f46e5);\n  --btn-cta-padding: 1rem;\n}\n*/"
        }
    },
    {
        "title": "¿Qué diferencia hay entre Test de Usabilidad Cualitativo y A/B Testing Cuantitativo?",
        "response": "Ambas metodologías de investigación son complementarias y responden preguntas fundamentales distintas:\n\n1. **Test de Usabilidad (Cualitativo - ¿POR QUÉ?)**:\n   - **Metodología**: Sesiones moderadas o no moderadas donde se observa a **5 a 8 usuarios representativos** ejecutar tareas clave pensando en voz alta (*Think Aloud Protocol*).\n   - **Objetivo**: Identificar modelos mentales divergentes, puntos de fricción, ambigüedades en textos o elementos que pasan desapercibidos.\n   - **Regla de Nielsen**: Con solo 5 usuarios se detecta el **~85% de los problemas de usabilidad** graves.\n\n2. **A/B Testing (Cuantitativo - ¿QUÉ PASÓ?)**:\n   - **Metodología**: División de tráfico real de producción (50/50 o multi-armed bandit) entre una variante de control (A) y una variante retadora (B) con tracking de eventos.\n   - **Objetivo**: Medir impacto estadístico en KPIs de negocio (tasa de conversión, ticket promedio, rebote, CTR) con un nivel de significancia estadística ($p < 0.05$).\n\n3. **La Sinergia Perfecta**: El test de usabilidad cualitativo revela el problema y genera la hipótesis de diseño; el test A/B valida a gran escala el impacto cuantitativo de la solución en producción.",
        "visualDiagram": {
            "id": "diag-uiux-10",
            "title": "Investigación Cualitativa (Usability Test) vs Cuantitativa (A/B Test)",
            "caption": "El test de usabilidad cualitativo explica el 'por qué' de los bloqueos humanos; el A/B testing cuantitativo mide el 'qué' estadístico a escala.",
            "diagramType": "uiux-usability-testing-vs-ab"
        },
        "interviewTips": {
            "whatInterviewersWant": "Comprensión de por qué no se debe confiar ciegamente en A/B testing sin investigación cualitativa (optimización de máximos locales) y el valor de la regla de los 5 usuarios de Nielsen.",
            "commonPitfalls": [
                "Lanzar tests A/B sin tráfico suficiente para alcanzar significancia estadística (muestras muy pequeñas con falsos positivos).",
                "Asumir que si una variante gana en A/B testing, la experiencia es necesariamente mejor (puede ser un Dark Pattern que aumente clics pero degrade la lealtad a largo plazo)."
            ]
        },
        "quiz": {
            "question": "¿Cuál es la regla fundamental postulada por Jakob Nielsen respecto al número óptimo de participantes en pruebas de usabilidad cualitativas?",
            "options": [
                "Se requieren al menos 10.000 usuarios con tracking estadístico",
                "Probar con 5 usuarios representativos descubre aproximadamente el 85% de los problemas de usabilidad esenciales",
                "Solo los ingenieros de software senior deben participar en las pruebas",
                "Las pruebas con usuarios son obsoletas frente al testeo automatizado con axe-core"
            ],
            "correctIndex": 1,
            "explanation": "Nielsen demostró matemáticamente que los retornos son decrecientes: con 5 participantes se descubre casi todo el espectro de fallos graves, siendo más rentable iterar múltiples ciclos de 5 usuarios que uno solo de 50."
        },
        "level": "medio",
        "codeExample": {
            "language": "tsx",
            "code": "import { useEffect, useState } from 'react';\n\n// Hook de A/B Testing con soporte para asignación determinista y telemetría\ninterface ABExperimentConfig {\n  experimentId: string;\n  userId: string;\n}\n\nexport const useABTestVariant = ({ experimentId, userId }: ABExperimentConfig) => {\n  const [variant, setVariant] = useState<'control' | 'variant_b'>('control');\n\n  useEffect(() => {\n    // Asignación pseudoaleatoria determinista basada en hash del userId\n    const hash = Array.from(userId + experimentId).reduce(\n      (acc, char) => acc + char.charCodeAt(0),\n      0\n    );\n    const assignedVariant = hash % 2 === 0 ? 'control' : 'variant_b';\n    setVariant(assignedVariant);\n\n    // Registrar exposición en analítica de experimentación\n    console.info('[Experiment Exposure]', {\n      experimentId,\n      userId,\n      variant: assignedVariant,\n      timestamp: new Date().toISOString(),\n    });\n  }, [experimentId, userId]);\n\n  return variant;\n};\n\n// Componente que consume la variante para A/B Test\nexport const CheckoutCTAButton: React.FC<{ userId: string; onClick: () => void }> = ({\n  userId,\n  onClick,\n}) => {\n  const variant = useABTestVariant({ experimentId: 'exp_checkout_cta_color', userId });\n\n  return variant === 'variant_b' ? (\n    <button\n      onClick={onClick}\n      className=\"w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-lg\"\n    >\n      Completar Compra Segura (Envío Gratis) 🚀\n    </button>\n  ) : (\n    <button\n      onClick={onClick}\n      className=\"w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg\"\n    >\n      Pagar Pedido\n    </button>\n  );\n};"
        }
    },
    {
        "title": "¿Qué son las Microinteracciones y cómo diseñar su anatomía de 4 partes (Trigger, Rules, Feedback, Loops)?",
        "response": "Las **Microinteracciones (Dan Saffer)** son momentos individuales contenidos alrededor de una sola tarea de interfaz. Transforman un producto funcional en uno placentero, intuitivo y humano (ej. cambiar un toggle, dar 'Like', deslizar para refrescar).\n\nSe componen estrictamente de **4 fases arquitectónicas**:\n1. **Trigger (Disparador)**: Inicia la microinteracción. Puede ser disparado por el **usuario** (clic, tap, hover, swipe) o por el **sistema** (llegada de un mensaje, batería baja, temporizador cumplido).\n2. **Rules (Reglas)**: Determinan qué sucede en la lógica de estado tras el disparo. Es el modelo invisible que define las restricciones y el cambio de estado (`if (active) state = inactive`).\n3. **Feedback (Retroalimentación Perceptible)**: Lo que el usuario ve, escucha o siente, confirmando que la regla se ejecutó con éxito (animación física, vibración háptica con `navigator.vibrate`, cambio de color).\n4. **Loops & Modes (Bucles y Modos)**: Meta-reglas que rigen la microinteracción en el tiempo. ¿Qué pasa si el usuario vuelve a presionar el botón? ¿Se repite el sonido o se silencia? ¿Se recuerda la preferencia en localStorage?",
        "visualDiagram": {
            "id": "diag-uiux-11",
            "title": "Anatomía de una Microinteracción (Modelo de Dan Saffer)",
            "caption": "El ciclo continuo Trigger ➔ Rules ➔ Feedback ➔ Loops & Modes confiere dinamismo y retroalimentación táctil/visual al usuario.",
            "diagramType": "uiux-microinteractions-anatomy"
        },
        "interviewTips": {
            "whatInterviewersWant": "Demostrar cómo la animación y la retroalimentación háptica comunican el cambio de estado del sistema sin saturar de texto ni generar distracciones excesivas.",
            "commonPitfalls": [
                "Diseñar microinteracciones puramente cosméticas que carecen de feedback útil y retrasan la respuesta del sistema.",
                "Olvidar la accesibilidad en animaciones (ignorar la preferencia `prefers-reduced-motion`)."
            ]
        },
        "quiz": {
            "question": "En el modelo de 4 partes de Dan Saffer, ¿qué elemento determina qué sucede en el estado del sistema cuando se acciona una microinteracción?",
            "options": [
                "El Trigger",
                "Las Rules (Reglas)",
                "El Feedback",
                "El Render Engine"
            ],
            "correctIndex": 1,
            "explanation": "Las Rules (Reglas) representan la lógica de negocio y transición de estado que define las condiciones y consecuencias del disparador."
        },
        "level": "avanzado",
        "codeExample": {
            "language": "tsx",
            "code": "import React, { useState } from 'react';\n\n// Microinteracción: Botón 'Me Gusta' con Anatomía de Dan Saffer\nexport const FavoriteButton: React.FC = () => {\n  const [isFavorite, setIsFavorite] = useState<boolean>(false);\n  const [isAnimating, setIsAnimating] = useState<boolean>(false);\n\n  // 1. Trigger (Click de Usuario)\n  const handleTrigger = () => {\n    // 2. Rules (Invertir estado y disparar animación)\n    const nextState = !isFavorite;\n    setIsFavorite(nextState);\n    setIsAnimating(true);\n\n    // 3. Feedback: Háptico (Vibration API) si está soportado\n    if (typeof window !== 'undefined' && 'vibrate' in navigator) {\n      navigator.vibrate(nextState ? [15, 30, 15] : 10);\n    }\n\n    // 4. Loops & Modes: Persistencia en LocalStorage\n    localStorage.setItem('user_pref_favorite', JSON.stringify(nextState));\n  };\n\n  return (\n    <button\n      onClick={handleTrigger}\n      onAnimationEnd={() => setIsAnimating(false)}\n      aria-label={isFavorite ? 'Quitar de favoritos' : 'Añadir a favoritos'}\n      className={`p-3 rounded-full transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-red-400 ${\n        isFavorite ? 'bg-red-50 text-red-600' : 'bg-slate-100 text-slate-400 hover:text-slate-600'\n      }`}\n    >\n      <svg\n        viewBox=\"0 0 24 24\"\n        className={`w-6 h-6 transition-transform ${\n          isAnimating ? 'scale-125 animate-bounce' : 'scale-100'\n        } ${isFavorite ? 'fill-current' : 'fill-none stroke-current stroke-2'}`}\n      >\n        <path d=\"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z\" />\n      </svg>\n    </button>\n  );\n};"
        }
    },
    {
        "title": "¿Qué es la Ley de Jakob y por qué innovar en navegación básica destruye la conversión?",
        "response": "La **Ley de Jakob (Jakob Nielsen, 2000)** postula:\n\n> *«Los usuarios pasan la mayor parte de su tiempo en otros sitios web. Esto significa que los usuarios prefieren que tu sitio funcione de la misma manera que todos los demás sitios que ya conocen.»*\n\n**El concepto de Modelos Mentales**:\nA lo largo de años de navegación en gigantes como Google, Amazon, YouTube y Apple, los usuarios han interiorizado convenciones canónicas inconscientes:\n- El logo corporativo superior izquierdo siempre regresa al Inicio (*Home*).\n- La barra de búsqueda vive en la cabecera central o derecha identificada con una lupa.\n- El icono de carrito y perfil residen en la esquina superior derecha.\n- El botón de navegación hacia atrás en móviles está en la esquina superior izquierda.\n\n**La trampa de la sobreingeniería visual**:\nCuando una agencia o equipo reinventa la navegación (ej. un menú circular giratorio en Canvas, scroll horizontal forzado para leer un blog, o un botón de checkout oculto bajo gestos raros), obliga al usuario a gastar valiosa energía cognitiva aprendiendo a operar la interfaz en lugar de consumir el producto. El resultado inmediato es una tasa de rebote masiva (*bounce rate*).",
        "visualDiagram": {
            "id": "diag-uiux-12",
            "title": "Ley de Jakob: Modelos Mentales & Patrones Canónicos",
            "caption": "Aprovechar las convenciones familiares de navegación permite al usuario interactuar instantáneamente sin curva de aprendizaje ni fricción.",
            "diagramType": "uiux-jakobs-law-mental-models"
        },
        "interviewTips": {
            "whatInterviewersWant": "Demostrar equilibrio entre innovación de marca y respeto a convenciones de usabilidad: innovar en la propuesta de valor y solución al problema, respetar las leyes canónicas en navegación y checkout.",
            "commonPitfalls": [
                "Creer que la creatividad de un diseñador/frontend consiste en cambiar la ubicación del carrito de compras o del botón de cerrar modal.",
                "Ignorar los atajos estándar de teclado (`Escape` para cerrar, `Enter` para submit, `Tab` para navegar)."
            ]
        },
        "quiz": {
            "question": "¿Qué postula fundamentalmente la Ley de Jakob en diseño y arquitectura de software?",
            "options": [
                "Que todas las aplicaciones deben ser desarrolladas con TypeScript estricto",
                "Que los usuarios pasan la mayor parte de su tiempo en otras aplicaciones, por lo que esperan que tu producto funcione bajo las mismas convenciones y patrones que ya conocen",
                "Que las bases de datos relacionales son superiores a las no relacionales para almacenar UI state",
                "Que el color rojo siempre debe usarse para botones primarios de compra"
            ],
            "correctIndex": 1,
            "explanation": "La Ley de Jakob advierte que romper convenciones arraigadas genera confusión y sobrecarga cognitiva, recomendando innovar en el contenido y mantener canónica la navegación."
        },
        "level": "avanzado",
        "codeExample": {
            "language": "tsx",
            "code": "import React from 'react';\n\n// Cabecera que cumple estrictamente la Ley de Jakob y accesibilidad canónica\nexport const CanonicalHeader: React.FC = () => (\n  <header className=\"sticky top-0 z-50 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800\">\n    {/* Enlace para saltar directamente al contenido (a11y standard) */}\n    <a\n      href=\"#main-content\"\n      className=\"sr-only focus:not-sr-only focus:absolute focus:p-3 focus:bg-indigo-600 focus:text-white focus:z-50\"\n    >\n      Saltar al contenido principal\n    </a>\n\n    <div className=\"max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4\">\n      {/* Convención 1: Logo a la izquierda redirige a Home */}\n      <a href=\"/\" className=\"flex items-center space-x-2 font-bold text-lg text-slate-900 dark:text-white\">\n        <span className=\"w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center\">A</span>\n        <span>Acme Corp</span>\n      </a>\n\n      {/* Convención 2: Búsqueda central visible con icono de lupa */}\n      <div className=\"flex-1 max-w-md\">\n        <div className=\"relative\">\n          <input\n            type=\"search\"\n            placeholder=\"Buscar productos o documentación... (Cmd+K)\"\n            className=\"w-full pl-9 pr-4 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500\"\n          />\n          <span className=\"absolute left-3 top-2.5 text-slate-400\">🔍</span>\n        </div>\n      </div>\n\n      {/* Convención 3: Notificaciones, Carrito y Cuenta a la derecha */}\n      <div className=\"flex items-center space-x-3\">\n        <button aria-label=\"Carrito de compras\" className=\"p-2 text-slate-600 dark:text-slate-300 relative\">\n          🛒\n          <span className=\"absolute top-0 right-0 w-4 h-4 bg-indigo-600 text-white rounded-full text-[10px] flex items-center justify-center font-bold\">\n            2\n          </span>\n        </button>\n        <button aria-label=\"Perfil de usuario\" className=\"w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 font-bold text-xs\">\n          DV\n        </button>\n      </div>\n    </div>\n  </header>\n);"
        }
    },
    {
        "title": "¿Cómo influyen los sesgos cognitivos en UX: Efecto Zeigarnik, Efecto Von Restorff y Anclaje?",
        "response": "Los sesgos cognitivos son atajos heurísticos del cerebro humano que condicionan la percepción y toma de decisiones. En UX se emplean para facilitar la acción de forma ética (evitando *Dark Patterns*):\n\n1. **Efecto Zeigarnik (Bluma Zeigarnik, 1927)**:\n   - Las personas recuerdan con mayor intensidad y sienten incomodidad mental ante **tareas incompletas** en comparación con tareas ya cerradas.\n   - **Aplicación en UI**: Barras de progreso de perfil (*«Tu perfil está al 80% completo - Añade tu foto para ganar tu insignia»*), contadores de pasos en wizards y listas de tareas tipo checklist.\n\n2. **Efecto Von Restorff (Aislamiento Visual)**:\n   - Cuando se presentan múltiples elementos homogéneos, el que difiere visualmente del resto (por color, escala o elevación) es recordado un **80% más** y seleccionado con mayor probabilidad.\n   - **Aplicación en UI**: En tablas de precios SaaS con 3 planes (Básico, Pro, Enterprise), el plan 'Pro' se agranda, se resalta con un borde de color primario y lleva la insignia *«Más Popular / Recomendado»*.\n\n3. **Efecto Anclaje (Anchoring)**:\n   - La primera pieza de información recibida (el ancla) condiciona el juicio de los valores posteriores (ej. mostrar el precio original tachado `~99€~` junto al precio promocional `49€`).",
        "visualDiagram": {
            "id": "diag-uiux-13",
            "title": "Sesgos Cognitivos en UX: Efecto Zeigarnik vs Efecto Von Restorff",
            "caption": "El aislamiento visual atrae la memoria y decisión; la incomodidad por tareas inconclusas estimula el cierre de onboarding.",
            "diagramType": "uiux-cognitive-biases-matrix"
        },
        "interviewTips": {
            "whatInterviewersWant": "Saber aplicar psicología cognitiva para mejorar la conversión y retención del producto sin cruzar la línea hacia patrones oscuros (Dark Patterns) que engañan al usuario.",
            "commonPitfalls": [
                "Abusar del efecto de escasez ficticia ('¡Solo quedan 2 habitaciones!' sin datos reales), destruyendo la confianza de marca.",
                "No saber explicar la diferencia entre el Efecto Zeigarnik y el Efecto Von Restorff."
            ]
        },
        "quiz": {
            "question": "¿Cómo se define el Efecto Zeigarnik y cómo se utiliza habitualmente en interfaces de software?",
            "options": [
                "Es la regla que dice que las fuentes sin serifa cargan más rápido en navegadores antiguos",
                "Es el fenómeno psicológico por el cual las personas recuerdan con mayor intensidad y sienten tensión mental por tareas inconclusas, usado en barras de progreso de perfil y checklists de onboarding",
                "Es el sesgo que hace que los usuarios siempre prefieran el primer resultado en un buscador",
                "Es la técnica para animar botones usando aceleración por hardware en la GPU"
            ],
            "correctIndex": 1,
            "explanation": "El Efecto Zeigarnik muestra que las tareas incompletas crean un impulso psicológico de finalización, siendo el motor de las barras de progreso 'Completa tu perfil'."
        },
        "level": "avanzado",
        "codeExample": {
            "language": "tsx",
            "code": "import React from 'react';\n\n// Efecto Von Restorff (Tarjeta Aislada) y Efecto Anclaje en Planes de Pricing\nexport const PricingMatrix: React.FC = () => (\n  <div className=\"grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto p-6 items-center\">\n    {/* Plan 1: Básico */}\n    <div className=\"p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900\">\n      <h3 className=\"font-bold text-lg\">Starter</h3>\n      <p className=\"text-3xl font-extrabold my-4\">9€ <span className=\"text-xs font-normal text-slate-500\">/mes</span></p>\n      <button className=\"w-full py-2 border rounded-lg font-medium hover:bg-slate-50\">Elegir Starter</button>\n    </div>\n\n    {/* Plan 2: Pro (Aislamiento Visual - Von Restorff) */}\n    <div className=\"relative p-8 rounded-2xl border-2 border-indigo-600 bg-indigo-50/20 dark:bg-indigo-950/30 shadow-xl scale-105\">\n      <span className=\"absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-[11px] font-bold uppercase tracking-wider py-1 px-3 rounded-full shadow\">\n        ★ Más Popular\n      </span>\n      <h3 className=\"font-bold text-xl text-indigo-900 dark:text-indigo-300\">Pro Scale</h3>\n      {/* Anclaje: Precio anterior tachado */}\n      <div className=\"my-4 flex items-baseline space-x-2\">\n        <span className=\"text-sm text-slate-400 line-through\">49€</span>\n        <span className=\"text-4xl font-extrabold text-indigo-600 dark:text-indigo-400\">29€</span>\n        <span className=\"text-xs text-slate-500\">/mes</span>\n      </div>\n      <button className=\"w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-md transition-transform active:scale-95\">\n        Comenzar Prueba Gratis\n      </button>\n    </div>\n\n    {/* Plan 3: Enterprise */}\n    <div className=\"p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900\">\n      <h3 className=\"font-bold text-lg\">Enterprise</h3>\n      <p className=\"text-3xl font-extrabold my-4\">99€ <span className=\"text-xs font-normal text-slate-500\">/mes</span></p>\n      <button className=\"w-full py-2 border rounded-lg font-medium hover:bg-slate-50\">Contactar Ventas</button>\n    </div>\n  </div>\n);"
        }
    },
    {
        "title": "¿Cómo diseñar interfaces inclusivas con Dark Mode, High Contrast y prevención de halación?",
        "response": "El soporte para **Dark Mode** e interfaces inclusivas no consiste en un simple filtro `invert(100%)`, sino en una arquitectura cuidada de superficies cromáticas y contraste:\n\n1. **Evitar el Negro Puro (#000000)**:\n   - Colocar texto blanco puro `#FFFFFF` sobre negro absoluto `#000000` genera un contraste excesivo (21:1) que produce **halación visual** (desenfoque brillante alrededor del texto), provocando cefaleas y fatiga en personas con astigmatismo (~50% de la población).\n   - El estándar es emplear fondos pizarra o grises oscuros profundos (`#121826`, `#0f172a`, `#1e1e1e`).\n\n2. **Elevación por Iluminación de Superficie (Surface Elevation)**:\n   - En modo claro, la elevación en el eje Z se transmite mediante sombras oscuras (`box-shadow: 0 4px 6px rgba(0,0,0,0.1)`).\n   - En modo oscuro, las sombras son invisibles; la elevación se representa **aclarando progresivamente el tono de la superficie** (Nivel 0: `#0f172a` -> Card Nivel 1: `#1e293b` -> Modal Nivel 2: `#334155`).\n\n3. **Consultas de Medios y Alta Accesibilidad**:\n   - Respetar `@media (prefers-color-scheme: dark)`.\n   - Soporte para `@media (forced-colors: active)` para el modo de Alto Contraste de Windows, utilizando colores de sistema como `CanvasText` y `Highlight`.",
        "visualDiagram": {
            "id": "diag-uiux-14",
            "title": "Diseño Inclusivo: Arquitectura de Dark Mode y Contraste WCAG 2.2",
            "caption": "Eliminar el negro puro #000 previene la halación visual; elevar superficies en el eje Z se logra aclarando el fondo en modo oscuro.",
            "diagramType": "uiux-inclusive-dark-mode-contrast"
        },
        "interviewTips": {
            "whatInterviewersWant": "Explicar la halación visual, cómo se logra la elevación en dark mode sin sombras y el soporte para `prefers-color-scheme` y `forced-colors`.",
            "commonPitfalls": [
                "Usar `#000000` con `#FFFFFF` asumiendo que 'más contraste siempre es mejor'.",
                "Saturar colores neón en modo oscuro que provocan vibración cromática y no pasan pruebas de contraste APCA / WCAG."
            ]
        },
        "quiz": {
            "question": "¿Por qué se desaconseja utilizar fondo negro puro (#000000) con texto blanco puro (#FFFFFF) en Dark Mode?",
            "options": [
                "Porque los navegadores consumen el doble de memoria RAM al renderizar negro puro",
                "Porque produce el efecto de halación visual (bleeding), generando fatiga ocular severa en usuarios con astigmatismo y eliminando la percepción de sombras en elevaciones",
                "Porque los servidores CDN no pueden comprimir el color negro puro en gzip",
                "Porque viola automáticamente el estándar HTML5"
            ],
            "correctIndex": 1,
            "explanation": "El contraste 21:1 absoluto de blanco puro sobre negro puro causa difracción de luz en la retina (halación) y anula la profundidad visual."
        },
        "level": "avanzado",
        "codeExample": {
            "language": "css",
            "code": "/* Arquitectura de Tokens Semánticos para Dark Mode y High Contrast */\n:root {\n  --color-canvas-base: #f8fafc;       /* Fondo claro */\n  --color-surface-card: #ffffff;      /* Tarjeta elevada */\n  --color-text-primary: #0f172a;      /* Texto alto contraste */\n  --color-text-muted: #64748b;        /* Texto secundario */\n  --color-border: #e2e8f0;\n}\n\n/* Modo Oscuro: Fondos de pizarra profunda sin negro puro */\n@media (prefers-color-scheme: dark) {\n  :root {\n    --color-canvas-base: #0b0f19;     /* Fondo base suave */\n    --color-surface-card: #151d30;    /* Elevación visible más clara */\n    --color-text-primary: #f1f5f9;    /* Blanco roto (evita halación) */\n    --color-text-muted: #94a3b8;\n    --color-border: #1e293b;\n  }\n}\n\n/* Soporte para Modo de Alto Contraste Forzado (Windows High Contrast) */\n@media (forced-colors: active) {\n  .interactive-button {\n    forced-color-adjust: none;\n    border: 2px solid ButtonText;\n    background-color: ButtonFace;\n    color: ButtonText;\n  }\n  .interactive-button:focus-visible {\n    outline: 3px solid Highlight;\n  }\n}"
        }
    },
    {
        "title": "¿Qué es Motion Choreography y cómo crear animaciones a 60 FPS respetando prefers-reduced-motion?",
        "response": "La **Coreografía de Movimiento (Motion Choreography)** es el diseño estructurado y coherente de transiciones y animaciones que guían la atención del usuario sin mareo ni desorientación espacial.\n\nSe rige por 4 principios de ingeniería y diseño:\n1. **Curvas de Aceleración Físicas (Easing)**: En la naturaleza, ningún objeto inicia o frena su movimiento a velocidad constante. La aceleración `linear` luce mecánica y artificial. Se debe usar **Ease-Out** (arranque rápido y frenado suave) para elementos que entran a pantalla, y **Ease-In** para elementos que salen.\n2. **Duración Óptima**: Entre **200ms y 350ms**. Menos de 100ms es imperceptible; más de 400ms se percibe como lentitud del sistema (*lag* percibido).\n3. **Efecto Stagger (Cascada Escalonada)**: Al animar listas o grillas, desfasar la entrada de cada elemento entre 30ms y 50ms crea una coreografía fluida y natural.\n4. **Accesibilidad con `prefers-reduced-motion`**: Personas con trastornos vestibulares pueden experimentar náuseas y vértigo ante desplazamientos o zoom pronunciados. Es imperativo reemplazar desplazamientos por sutiles transiciones de opacidad (*crossfade*) o desactivar la animación.",
        "visualDiagram": {
            "id": "diag-uiux-15",
            "title": "Coreografía de Movimiento (Motion Design) & Curvas de Aceleración",
            "caption": "Las curvas ease-out simulan física realista en 200-300ms; prefers-reduced-motion conmuta hacia sutiles desvanecimientos sin desplazamiento.",
            "diagramType": "uiux-motion-choreography-timing"
        },
        "interviewTips": {
            "whatInterviewersWant": "Comprensión del impacto de las animaciones en Core Web Vitals (CLS y FID/INP), uso exclusivo de `transform` y `opacity` para garantizar GPU composite a 60 FPS, y respeto a `prefers-reduced-motion`.",
            "commonPitfalls": [
                "Animar propiedades de Layout como `top`, `left`, `width` o `height` (provoca Reflow masivo y caídas a 15 FPS).",
                "Hacer esperar al usuario 2 segundos con animaciones de splash o tarjetas lentas."
            ]
        },
        "quiz": {
            "question": "¿Qué propiedades CSS deben animarse exclusivamente para garantizar 60/120 FPS sin desencadenar Layout ni Repaint?",
            "options": [
                "width y height",
                "margin y padding",
                "transform y opacity",
                "top y left con display: block"
            ],
            "correctIndex": 2,
            "explanation": "Las mutaciones de 'transform' y 'opacity' son procesadas directamente en el subproceso Compositor de la GPU, evitando reflows y repaints costosos."
        },
        "level": "avanzado",
        "codeExample": {
            "language": "tsx",
            "code": "import React from 'react';\n\n// Hook y estilos respetuosos de prefers-reduced-motion\nexport const StaggeredList: React.FC<{ items: string[] }> = ({ items }) => (\n  <ul className=\"space-y-3\">\n    {items.map((item, index) => (\n      <li\n        key={item}\n        style={{ '--stagger-delay': `${index * 40}ms` } as React.CSSProperties}\n        className=\"stagger-card p-4 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm\"\n      >\n        {item}\n      </li>\n    ))}\n  </ul>\n);\n\n/*\n.stagger-card {\n  animation: slideInUp 280ms cubic-bezier(0.16, 1, 0.3, 1) both;\n  animation-delay: var(--stagger-delay, 0ms);\n}\n\n@keyframes slideInUp {\n  from {\n    opacity: 0;\n    transform: translateY(16px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n// Respeto estricto a la preferencia del usuario por salud vestibular\n@media (prefers-reduced-motion: reduce) {\n  .stagger-card {\n    animation: fadeInOnly 150ms ease-out both !important;\n    animation-delay: 0ms !important;\n  }\n  @keyframes fadeInOnly {\n    from { opacity: 0; }\n    to { opacity: 1; }\n  }\n}\n*/"
        }
    },
    {
        "title": "¿Qué es la Teoría de la Carga Cognitiva (Intrínseca, Extraña y Germana) aplicada a productos complejos?",
        "response": "Formulada por el psicólogo educacional **John Sweller (1988)**, la Teoría de la Carga Cognitiva modela la capacidad limitada de la memoria de trabajo humana para procesar nueva información simultáneamente.\n\nEn software complejo (Fintech, Healthcare, Cloud Dashboards) se dividen en 3 tipos de carga:\n1. **Carga Cognitiva Intrínseca**: Es el esfuerzo mental inherente a la dificultad intrínseca del problema a resolver (ej. calcular la retención de impuestos o balancear una cartera de inversión). **No puede eliminarse**, pero el UX la gestiona descomponiéndola en pasos lógicos (Wizards, guías).\n2. **Carga Cognitiva Extraña (Extraneous Load - El Ruido)**: Es la fricción mental innecesaria causada por un mal diseño de interfaz: fuentes ilegibles, botones difíciles de encontrar, navegación confusa, datos redundantes y falta de feedback. **El objetivo primordial de la ingeniería de UI/UX es reducirla a CERO**.\n3. **Carga Cognitiva Germana**: Es el esfuerzo mental constructivo que el usuario invierte en asimilar modelos, adquirir patrones y aprender a dominar el software. Debe optimizarse para que el usuario se sienta productivo y empoderado.",
        "visualDiagram": {
            "id": "diag-uiux-16",
            "title": "Teoría de la Carga Cognitiva de John Sweller en Interfaces",
            "caption": "La memoria de trabajo es finita. Reducir la carga extraña (ruido visual y fricción) libera ancho de banda para resolver la tarea principal.",
            "diagramType": "uiux-cognitive-load-theory"
        },
        "interviewTips": {
            "whatInterviewersWant": "Demostrar cómo la simplificación visual y el diseño de interacción reducen el cansancio de usuarios que utilizan software empresarial 8 horas al día.",
            "commonPitfalls": [
                "Creer que un software empresarial potente debe ser complejo y confuso.",
                "Ocultar funciones esenciales bajo menús contextuales profundos de 4 niveles en lugar de emplear paletas de comandos (`Cmd+K`)."
            ]
        },
        "quiz": {
            "question": "¿Cuál de las tres categorías de la Teoría de la Carga Cognitiva es responsabilidad directa de los ingenieros y diseñadores eliminar por completo?",
            "options": [
                "La Carga Intrínseca",
                "La Carga Extraña (Extraneous Cognitive Load)",
                "La Carga Germana",
                "La Carga Temporal"
            ],
            "correctIndex": 1,
            "explanation": "La carga extraña es el ruido mental generado por mala distribución, textos confusos y fallos de usabilidad; erradicarla libera la mente del usuario para su tarea real."
        },
        "level": "experto",
        "codeExample": {
            "language": "tsx",
            "code": "import React, { useState } from 'react';\n\n// Interfaz Enterprise diseñada para eliminar Carga Extraña\ninterface Transaction {\n  id: string;\n  client: string;\n  amount: number;\n  status: 'completado' | 'pendiente' | 'fallido';\n}\n\nexport const HighDensityDataTable: React.FC<{ data: Transaction[] }> = ({ data }) => {\n  const [filter, setFilter] = useState<string>('');\n\n  const filtered = data.filter((t) =>\n    t.client.toLowerCase().includes(filter.toLowerCase())\n  );\n\n  return (\n    <div className=\"border rounded-xl bg-white dark:bg-slate-900 overflow-hidden\">\n      {/* Filtro inmediato con shortcut claro (reduce carga extraña) */}\n      <div className=\"p-3 border-b bg-slate-50 dark:bg-slate-800/50 flex justify-between items-center\">\n        <input\n          type=\"search\"\n          placeholder=\"Filtrar por cliente (Escribe para filtrar)...\"\n          value={filter}\n          onChange={(e) => setFilter(e.target.value)}\n          className=\"text-xs p-2 rounded border bg-white dark:bg-slate-800 w-64\"\n        />\n        <span className=\"text-xs text-slate-500 font-mono\">{filtered.length} resultados</span>\n      </div>\n\n      {/* Tabla con estados visuales inequívocos y tipografía tabular */}\n      <table className=\"w-full text-left text-xs\">\n        <thead className=\"bg-slate-100 dark:bg-slate-800 text-slate-600 font-semibold\">\n          <tr>\n            <th className=\"p-3\">ID</th>\n            <th className=\"p-3\">Cliente</th>\n            <th className=\"p-3 text-right\">Monto</th>\n            <th className=\"p-3 text-center\">Estado</th>\n          </tr>\n        </thead>\n        <tbody className=\"divide-y dark:divide-slate-800\">\n          {filtered.map((item) => (\n            <tr key={item.id} className=\"hover:bg-slate-50/80 dark:hover:bg-slate-800/50\">\n              <td className=\"p-3 font-mono text-slate-400\">{item.id}</td>\n              <td className=\"p-3 font-medium\">{item.client}</td>\n              <td className=\"p-3 text-right font-mono font-semibold\">\n                {item.amount.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' })}\n              </td>\n              <td className=\"p-3 text-center\">\n                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${\n                  item.status === 'completado' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300' :\n                  item.status === 'pendiente' ? 'bg-amber-100 text-amber-800' : 'bg-red-100 text-red-800'\n                }`}>\n                  {item.status}\n                </span>\n              </td>\n            </tr>\n          ))}\n        </tbody>\n      </table>\n    </div>\n  );\n};"
        }
    },
    {
        "title": "¿Cómo diseñar la Arquitectura de un Design System Multi-Marca y Multi-Tenant a escala global?",
        "response": "En empresas con múltiples marcas (ej. Unilever, Santander, Inditex) o aplicaciones SaaS multi-tenant, construir una biblioteca de componentes separada por marca es insostenible.\n\nLa solución arquitectónica staff consiste en **desacoplar el comportamiento de los tokens de estilo** mediante una jerarquía por capas:\n1. **Core Foundation Agnóstica (`@ds/core`)**: Provee los componentes con su lógica completa, accesibilidad ARIA 1.2, gestión de foco por teclado, tests unitarios y slots estructurales. Cero colores o radios de borde codificados a fuego (*hardcoded*).\n2. **Themes Package (`@ds/themes`)**: Diccionarios de CSS Custom Properties que definen la personalidad de cada marca:\n   - **Marca A (Fintech)**: Tipografía sobria (Inter), radios pequeños (2px), colores azul marino, animaciones lineales sutiles.\n   - **Marca B (Gen-Z Gaming)**: Tipografía audaz (Poppins), bordes píldora redondeados (24px), colores neón, animaciones elásticas (*spring physics*).\n3. **Inyección en Runtime**: Inyectar las variables CSS en el elemento `:root` o contenedor padre mediante atributos `data-brand='brand-a'`, permitiendo cambios instantáneos sin recrear el DOM ni recompilar el JavaScript.",
        "visualDiagram": {
            "id": "diag-uiux-17",
            "title": "Arquitectura de Design System Multi-Marca y Multi-Tenant",
            "caption": "El core unifica la lógica accesible y estructura DOM; cada marca inyecta sus CSS variables en runtime sin duplicar código.",
            "diagramType": "uiux-multi-brand-design-system"
        },
        "interviewTips": {
            "whatInterviewersWant": "Explicar cómo escalar un monorepo con cientos de aplicaciones consumiendo un único core con temas dinámicos e integración en CI/CD con pruebas de regresión visual (Chromatic/Percy).",
            "commonPitfalls": [
                "Crear una biblioteca entera de componentes por cada marca (duplicando deuda técnica y bugs de accesibilidad).",
                "Usar CSS-in-JS en runtime con recálculo dinámico masivo que degrade el rendimiento del renderizado en React."
            ]
        },
        "quiz": {
            "question": "¿Cuál es la estrategia recomendada para soportar decenas de marcas diferentes en un único Design System sin multiplicar la deuda técnica?",
            "options": [
                "Crear 10 repositorios distintos de Git con bifurcaciones del código",
                "Separar una capa Core agnóstica de componentes accesibles y consumir paquetes de temas basados en CSS Custom Properties intercambiables en runtime",
                "Escribir todos los estilos directamente en inline style sin usar clases",
                "Compilar una versión separada de React para cada marca"
            ],
            "correctIndex": 1,
            "explanation": "El desacoplamiento del core respecto a los tokens de tema permite que todas las marcas compartan componentes accesibles y probados, alterando únicamente las variables de presentación."
        },
        "level": "experto",
        "codeExample": {
            "language": "tsx",
            "code": "import React, { createContext, useContext, useState } from 'react';\n\ntype BrandId = 'fintech-pro' | 'neon-arcade';\n\ninterface BrandThemeContextType {\n  brand: BrandId;\n  setBrand: (brand: BrandId) => void;\n}\n\nconst BrandThemeContext = createContext<BrandThemeContextType>({\n  brand: 'fintech-pro',\n  setBrand: () => {},\n});\n\n// Brand Theme Provider en el Root de la aplicación\nexport const BrandProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {\n  const [brand, setBrand] = useState<BrandId>('fintech-pro');\n\n  return (\n    <BrandThemeContext.Provider value={{ brand, setBrand }}>\n      {/* El atributo data-brand controla las CSS Custom Properties en cascada */}\n      <div data-brand={brand} className=\"brand-container min-h-screen transition-colors duration-300\">\n        {children}\n      </div>\n    </BrandThemeContext.Provider>\n  );\n};\n\n// Componente Core Agnóstico: Reutiliza el 100% de la lógica en cualquier marca\nexport const CoreButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({\n  children,\n  ...props\n}) => (\n  <button\n    {...props}\n    style={{\n      backgroundColor: 'var(--brand-primary)',\n      color: 'var(--brand-text-on-primary)',\n      borderRadius: 'var(--brand-radius)',\n      padding: 'var(--brand-btn-padding)',\n      fontFamily: 'var(--brand-font-family)',\n    }}\n    className=\"font-medium transition-all active:scale-95 focus-visible:ring-2 focus-visible:outline-none\"\n  >\n    {children}\n  </button>\n);"
        }
    },
    {
        "title": "¿Cómo realizar una Auditoría de Accesibilidad WCAG 2.2 Integral (Automatizada, Manual y con Screen Readers)?",
        "response": "Una auditoría de accesibilidad robusta y profesional sigue una estrategia piramidal en 3 capas:\n\n1. **Capa 1: Auditoría Automatizada en CI/CD (Detecta ~35-40% de fallos)**:\n   - Motores como **axe-core**, **Pa11y**, **Lighthouse** y linter `eslint-plugin-jsx-a11y`.\n   - Detecta rápidamente contrastes de color insuficientes, imágenes sin atributo `alt`, IDs duplicados o roles ARIA inválidos sintácticamente.\n   - **Aviso crítico**: Tener un score de 100 en Lighthouse **NO** significa que el sitio sea accesible.\n\n2. **Capa 2: Auditoría Manual con Teclado**:\n   - Navegación estricta utilizando únicamente `Tab`, `Shift+Tab`, `Enter`, `Space` y las flechas de dirección (sin tocar el ratón).\n   - Validar orden lógico del foco en el DOM, indicadores de foco visibles (`:focus-visible`), ausencia de trampas de foco (*focus traps*) y saltos de navegación (*Skip Links*).\n\n3. **Capa 3: Auditoría con Lectores de Pantalla (Screen Readers)**:\n   - Probar en combinaciones reales: **VoiceOver con Safari** (macOS/iOS), **NVDA con Chrome** (Windows), y **TalkBack** (Android).\n   - Validar que los diálogos modales anuncien su nombre accesible, que los estados dinámicos se anuncien con `aria-live` y que las tablas tengan cabeceras vinculadas correctamente.",
        "visualDiagram": {
            "id": "diag-uiux-18",
            "title": "Pirámide de Auditoría de Accesibilidad Web (WCAG 2.2)",
            "caption": "Las herramientas automáticas cubren el 40% sintáctico; la validación manual por teclado y lectores de pantalla reales garantizan usabilidad humana.",
            "diagramType": "uiux-accessibility-audit-pyramid"
        },
        "interviewTips": {
            "whatInterviewersWant": "Entender que las herramientas automatizadas (Lighthouse/axe) son un filtro inicial necesario pero insuficiente, y demostrar familiaridad en el uso real de lectores de pantalla (VoiceOver/NVDA).",
            "commonPitfalls": [
                "Afirmar que un sitio es accesible solo porque Lighthouse dio 100.",
                "Colocar `alt='imagen'` o `alt='foto'` en lugar de descripciones contextuales o `alt=''` en imágenes decorativas."
            ]
        },
        "quiz": {
            "question": "¿Qué porcentaje aproximado de problemas de accesibilidad WCAG pueden detectar las herramientas automatizadas como axe-core o Lighthouse?",
            "options": [
                "El 100% de todos los problemas posibles",
                "Aproximadamente entre el 35% y el 40%, requiriendo el resto verificación manual y pruebas con lectores de pantalla",
                "Menos del 1%",
                "Solo detectan errores tipográficos de ortografía"
            ],
            "correctIndex": 1,
            "explanation": "Las herramientas automáticas solo validan reglas estáticas en el DOM (contraste, etiquetas presentes); no pueden juzgar si el texto alternativo tiene sentido humano o si el orden de foco es coherente."
        },
        "level": "experto",
        "codeExample": {
            "language": "typescript",
            "code": "import { test, expect } from '@playwright/test';\nimport AxeBuilder from '@axe-core/playwright';\n\n// Test E2E de Accesibilidad Automatizada con axe-core y Playwright\ntest.describe('Auditoría a11y WCAG 2.2 AA', () => {\n  test('Página de Checkout debe cumplir los criterios WCAG 2.2 AA sin violaciones', async ({\n    page,\n  }) => {\n    await page.goto('/checkout');\n    await page.waitForSelector('#main-content');\n\n    // Escaneo profundo con axe-core\n    const accessibilityScanResults = await new AxeBuilder({ page })\n      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'])\n      .exclude('#third-party-chat-widget') // Exclusión justificada si aplica\n      .analyze();\n\n    // Verificación estricta: Cero violaciones permitidas en CI/CD\n    expect(accessibilityScanResults.violations).toEqual([]);\n  });\n\n  test('Navegación por teclado debe respetar el orden lógico de foco', async ({\n    page,\n  }) => {\n    await page.goto('/login');\n    // Validar Skip Link al inicio del DOM\n    await page.keyboard.press('Tab');\n    await expect(page.locator(':focus')).toHaveText('Saltar al contenido');\n\n    // Siguiente foco al input de correo\n    await page.keyboard.press('Tab');\n    await expect(page.locator(':focus')).toHaveAttribute('type', 'email');\n  });\n});"
        }
    },
    {
        "title": "¿Qué es Spatial UI y cómo diseñar para interfaces inmersivas y espaciales (VisionOS / XR)?",
        "response": "**Spatial UI (Computación Espacial)** es el nuevo paradigma de diseño donde las interfaces abandonan los rectángulos planos de pantalla para coexistir en el entorno físico tridimensional del usuario (introducido con Apple VisionOS, Meta Quest y WebXR).\n\nPrincipios arquitectónicos de Spatial UI:\n1. **Material de Cristal Dinámico (Glassmorphism Espacial)**: Las ventanas no son paneles opacos con fondo blanco o negro; son láminas translúcidas de cristal que reflejan la luz física de la habitación en tiempo real (*specular highlights*) y proyectan sombras sutiles sobre el suelo o muebles reales.\n2. **El Eje Z (Profundidad y Jerarquía)**: La jerarquía no se expresa solo por tamaño, sino alejando o acercando planos en el eje Z. Los modales y diálogos de alerta flotan físicamente más cerca de los ojos del usuario.\n3. **Nuevo Modelo de Entrada: Eye Tracking + Pinch Gesture**:\n   - **Eye Tracking (Mirada)**: Cumple la función del `hover`. Al mirar un botón, este se ilumina sutilmente sin requerir que el usuario mueva las manos ni canse sus hombros.\n   - **Pinch (Pellizco)**: Juntar el dedo índice y el pulgar apoyando la mano en el regazo ejecuta el `click / tap`.\n4. **Zona Ergonómica Visual**: Los contenidos deben residir dentro de un cono de visión cómodo de **60 grados** para evitar fatiga cervical.",
        "visualDiagram": {
            "id": "diag-uiux-19",
            "title": "Spatial UI (VisionOS / XR): Profundidad en Eje Z, Eye-Tracking y Pinch",
            "caption": "Las interfaces flotan en el espacio con materiales translúcidos, navegación dirigida por eye-tracking y selección por microgestos.",
            "diagramType": "uiux-spatial-ui-depth-z-index"
        },
        "interviewTips": {
            "whatInterviewersWant": "Visión de futuro sobre la evolución del frontend hacia interfaces espaciales (WebXR, Three.js, VisionOS) y comprensión de la ergonomía visual (evitar la fatiga de convergencia ocular y el cansancio de brazos 'Gorilla Arm').",
            "commonPitfalls": [
                "Diseñar interfaces espaciales como ventanas opacas gigantes que bloquean la visión del mundo real del usuario.",
                "Requerir que el usuario mantenga los brazos levantados en el aire para presionar botones virtuales."
            ]
        },
        "quiz": {
            "question": "¿Cuál es el modelo principal de interacción e input establecido por Apple en VisionOS para interfaces espaciales?",
            "options": [
                "Teclado físico inalámbrico obligatorio para todas las acciones",
                "Eye tracking (fijación de la mirada) para el hover/enfoque y gesto de pellizco (Pinch) con dedos relajados para la selección o clic",
                "Comandos de voz continuos exclusivamente",
                "Guantes hápticos cableados con sensores inerciales pesados"
            ],
            "correctIndex": 1,
            "explanation": "El seguimiento ocular detecta el elemento que el usuario desea operar y el pellizco de los dedos (incluso apoyados sobre las piernas) confirma la acción con mínimo esfuerzo ergonómico."
        },
        "level": "experto",
        "codeExample": {
            "language": "tsx",
            "code": "import React from 'react';\n\n// Simulación CSS de Superficie Espacial Dinámica (Spatial Glass Sheet)\nexport const SpatialGlassWindow: React.FC<{ title: string; children: React.ReactNode }> = ({\n  title,\n  children,\n}) => (\n  <div\n    style={{\n      // Simulación de material de cristal VisionOS en CSS moderno\n      background: 'rgba(255, 255, 255, 0.15)',\n      backdropFilter: 'blur(32px) saturate(180%)',\n      WebkitBackdropFilter: 'blur(32px) saturate(180%)',\n      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), inset 0 1px 1px 0 rgba(255, 255, 255, 0.4)',\n      transform: 'translateZ(20px)', // Elevación en el eje Z\n    }}\n    className=\"p-6 rounded-3xl border border-white/20 text-white max-w-lg shadow-2xl\"\n  >\n    <header className=\"flex items-center justify-between pb-4 border-b border-white/10\">\n      <h2 className=\"text-lg font-semibold tracking-wide\">{title}</h2>\n      {/* Orbe de cierre espacial */}\n      <button\n        aria-label=\"Cerrar ventana espacial\"\n        className=\"w-7 h-7 rounded-full bg-white/10 hover:bg-white/30 flex items-center justify-center text-xs transition-colors\"\n      >\n        ✕\n      </button>\n    </header>\n    <main className=\"mt-4 text-sm text-white/90 leading-relaxed\">{children}</main>\n  </div>\n);"
        }
    },
    {
        "title": "¿Qué son los 5 Estados de la UI (Scott Hurff) y cómo diseñar resiliencia en interfaces frontend?",
        "response": "Diseñar únicamente la pantalla 'perfecta' con datos completos es el fallo más común en el desarrollo de software. **Scott Hurff** identificó los **5 estados fundamentales de cualquier interfaz**:\n\n1. **Ideal State (Estado Ideal)**: La pantalla cuando el usuario tiene todo configurado, con datos abundantes y métricas activas (la vista que suele aparecer en los mockups de Figma).\n2. **Empty State (Estado Vacío)**: La primera vez que el usuario ingresa o cuando borra todos los registros. Debe orientar, educar y presentar una llamada a la acción (*Call to Action*) clara para crear el primer registro (evitando pantallas blancas fantasma).\n3. **Loading State (Estado de Carga)**: Mientras se obtienen datos del servidor. Se deben priorizar **Skeleton Loaders** que preservan la estructura del layout antes que spinners giratorios genéricos, previniendo saltos de diseño (*Cumulative Layout Shift - CLS*).\n4. **Partial State (Estado Parcial / Edge Cases)**: La pantalla cuando solo existe 1 elemento, cuando los títulos son excesivamente largos (300 caracteres) o cuando la búsqueda arroja 0 coincidencias.\n5. **Error State (Estado de Error)**: Cuando la red falla o la API devuelve 500. Debe explicar con empatía qué ocurrió, cómo solucionarlo y proveer un botón directo de reintento (*Retry Button*).",
        "visualDiagram": {
            "id": "diag-uiux-20",
            "title": "Los 5 Estados Fundamentales de la UI (Modelo de Scott Hurff)",
            "caption": "Diseñar para Ideal, Empty, Loading, Partial y Error states garantiza aplicaciones resilientes que nunca dejan al usuario desamparado.",
            "diagramType": "uiux-ui-states-pentagon"
        },
        "interviewTips": {
            "whatInterviewersWant": "Demostrar que en el mundo real la aplicación pasa el 70% del tiempo en estados transicionales (carga, vacíos, errores de red) y no en el estado ideal de Figma.",
            "commonPitfalls": [
                "Dejar pantallas en blanco cuando no hay datos en lugar de proveer un empty state con CTA.",
                "Usar spinners a pantalla completa que desorientan al usuario y provocan Cumulative Layout Shift (CLS) en lugar de skeletons."
            ]
        },
        "quiz": {
            "question": "¿Cuál es la ventaja de emplear Skeleton Screens frente a Spinners genéricos durante el Loading State?",
            "options": [
                "Los skeletons ejecutan código WebAssembly de fondo",
                "Comunican la estructura visual anticipada del contenido, reducen el tiempo de carga percibido y previenen el Cumulative Layout Shift (CLS)",
                "Permiten realizar peticiones HTTP síncronas",
                "Ocupan menos bytes en el bundle final de JavaScript"
            ],
            "correctIndex": 1,
            "explanation": "Los Skeleton Screens anticipan la distribución espacial del contenido real, estabilizando el layout y haciendo que la espera se perciba como significativamente más corta."
        },
        "level": "experto",
        "codeExample": {
            "language": "tsx",
            "code": "import React from 'react';\n\ninterface StateViewProps<T> {\n  isLoading: boolean;\n  error: Error | null;\n  data: T[] | null;\n  onRetry: () => void;\n  onCreateFirst: () => void;\n  renderItem: (item: T) => React.ReactNode;\n}\n\n// Controlador Polimórfico de los 5 Estados de Scott Hurff\nexport function UniversalStateController<T>({\n  isLoading,\n  error,\n  data,\n  onRetry,\n  onCreateFirst,\n  renderItem,\n}: StateViewProps<T>) {\n  // 1. Loading State (Skeletons)\n  if (isLoading) {\n    return (\n      <div className=\"space-y-3 p-4 animate-pulse\">\n        <div className=\"h-6 bg-slate-200 dark:bg-slate-800 rounded w-1/3\" />\n        <div className=\"h-20 bg-slate-200 dark:bg-slate-800 rounded\" />\n        <div className=\"h-20 bg-slate-200 dark:bg-slate-800 rounded\" />\n      </div>\n    );\n  }\n\n  // 2. Error State (Constructivo con acción de reintento)\n  if (error) {\n    return (\n      <div className=\"p-8 text-center rounded-xl bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900\">\n        <p className=\"text-red-600 dark:text-red-400 font-semibold mb-2\">No pudimos cargar tus datos</p>\n        <p className=\"text-xs text-slate-500 mb-4\">Comprueba tu conexión a Internet y vuelve a intentarlo.</p>\n        <button onClick={onRetry} className=\"px-4 py-2 bg-red-600 text-white rounded-lg text-xs font-bold\">\n          Reintentar Carga\n        </button>\n      </div>\n    );\n  }\n\n  // 3. Empty State (Oportunidad de Onboarding)\n  if (!data || data.length === 0) {\n    return (\n      <div className=\"p-12 text-center border-2 border-dashed rounded-xl\">\n        <span className=\"text-4xl\">📦</span>\n        <h3 className=\"font-bold mt-2 text-base\">No hay elementos registrados</h3>\n        <p className=\"text-xs text-slate-500 my-2\">Empieza creando tu primer elemento en un solo clic.</p>\n        <button onClick={onCreateFirst} className=\"px-4 py-2 bg-indigo-600 text-white text-xs font-bold rounded-lg\">\n          + Crear Primer Registro\n        </button>\n      </div>\n    );\n  }\n\n  // 4 & 5. Ideal & Partial State (Renderizado de la colección)\n  return (\n    <div className=\"grid gap-4\">\n      {data.map((item) => renderItem(item))}\n    </div>\n  );\n}"
        }
    }
]
};

export default questionsUIUX;
