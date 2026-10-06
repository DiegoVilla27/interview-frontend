import { ISection } from "../../types";

export const questionsCSS: ISection = {
  id: "css",
  title: "CSS",
  collapse: "collapseCSS",
  icon: "css",
  category: "fundamentos",
  description:
    "Hojas de estilo en cascada, modelos de layout modernos (Flexbox/Grid), Container Queries, capas de cascada (@layer) y animaciones optimizadas por GPU.",
  questions: [
    // ==========================================
    // === BÁSICO (1 - 7) =======================
    // ==========================================
    {
      id: "css-01",
      title: "¿Qué es CSS?",
      level: "basico",
      tags: ["CSS", "CSSOM", "Cascada", "Render Tree"],
      response:
        "CSS (Cascading Style Sheets) es el lenguaje de hojas de estilo estándar de la web que describe la presentación de documentos estructurados en HTML o XML. Opera combinando las reglas de la cascada (prioridad por origen, capas, especificidad y orden de código), el cálculo de herencia y la construcción del CSSOM (CSS Object Model). Junto con el DOM, el motor del navegador genera el Render Tree para ejecutar el pipeline crítico: Layout (Reflow de cajas geométricas), Paint (Rasterizado de píxeles) y Composite (Ensamblado final de capas en la GPU).",
      codeExample: {
        language: "css",
        code: `/* Anatomía fundamental de una regla CSS */
/* Selector { Propiedad: Valor; } */
:root {
  --font-primary: system-ui, -apple-system, sans-serif;
  --color-primary: #6366f1;
}

/* Reset universal básico y predecible */
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--font-primary);
  line-height: 1.5;
  color: #1e293b;
  background-color: #f8fafc;
}`,
        explanation: "CSS separa la semántica del HTML de las reglas visuales, alimentando el pipeline de renderizado del navegador."
      },
      visualDiagram: {
        id: "diag-css-render-tree",
        title: "Pipeline de Renderizado del Navegador: DOM + CSSOM",
        caption: "HTML ➔ DOM y CSS ➔ CSSOM se fusionan en el Render Tree antes de Layout, Paint y Composite.",
        diagramType: "css-render-tree-pipeline"
      },
      interviewTips: {
        whatInterviewersWant: "Comprender la diferencia entre sintaxis CSS y cómo el motor del navegador (Blink, Gecko, WebKit) procesa el CSSOM y el Render Tree.",
        commonPitfalls: ["Creer que CSS solo 'decora' sin entender el costo computacional de Layout y Paint en el hilo principal."],
        followUps: [
          "¿Qué significa la 'C' de Cascade y qué factores determinan qué regla gana?",
          "¿Cómo convierte el navegador el CSS en el CSSOM?"
        ]
      },
      quiz: {
        question: "¿Qué dos estructuras del navegador se combinan para construir el Render Tree?",
        options: [
          "El DOM Tree y el CSSOM Tree",
          "El HTML Parser y el JavaScript Engine",
          "El Accessibility Tree y el Layer Tree",
          "El BOM (Browser Object Model) y el DOM"
        ],
        correctIndex: 0,
        explanation: "El navegador procesa el HTML para crear el DOM y el CSS para crear el CSSOM; ambos se cruzan para formar el Render Tree que contiene solo elementos visibles con sus estilos calculados."
      }
    },
    {
      id: "css-02",
      title: "¿Cuál es la diferencia entre inline, internal y external styles?",
      level: "basico",
      tags: ["Inline", "Internal", "External", "link", "style", "Caché"],
      response:
        "Existen tres métodos para enlazar CSS a un documento: 1) **Inline Styles**: Escritos directamente en el atributo style del elemento (<p style='color: red'>). Tienen una especificidad altísima (1,0,0,0), rompen la separación de responsabilidades y no se almacenan en caché HTTP. 2) **Internal Styles**: Declarados dentro de una etiqueta <style> en el <head>. Son útiles para inyectar CSS Crítico (Above-the-fold) para mejorar el FCP, pero no se comparten entre diferentes páginas. 3) **External Styles**: Archivos .css enlazados con <link rel='stylesheet'>. Es el estándar indiscutible de la industria porque desacopla el diseño, se descarga en paralelo y se cachea de forma eficiente en CDN y navegadores.",
      codeExample: {
        language: "html",
        code: `<!-- 1. EXTERNAL: Estándar recomendado (con caché HTTP y CDN) -->
<link rel="stylesheet" href="/styles/main.css">

<!-- 2. INTERNAL: Útil para CSS Crítico 'Above-the-fold' (FCP) -->
<style>
  .hero-banner { display: block; min-height: 100vh; background: #09090b; }
</style>

<!-- 3. INLINE: Antipatrón para diseño en escala (salvo valores dinámicos JS) -->
<div style="--dynamic-x: 120px;">Elemento</div>`,
        explanation: "Usa archivos externos para la lógica global y estilos internos solo para acelerar la primera pintura crítica."
      },
      visualDiagram: {
        id: "diag-css-inclusion",
        title: "Métodos de Inclusión CSS y Estrategia de Caché",
        caption: "Inline (alta especificidad, sin caché) vs Internal (CSS crítico) vs External (estándar con caché global).",
        diagramType: "css-inclusion-methods"
      },
      interviewTips: {
        whatInterviewersWant: "Evaluar tu comprensión sobre rendimiento de red (HTTP Caching, CDNs) y especificidad arquitectónica.",
        commonPitfalls: ["No justificar cuándo los estilos internos (<style>) sí son recomendables (CSS Crítico para Web Vitals)."],
        followUps: [
          "¿Por qué el CSS externo es render-blocking y cómo se mitiga con Critical CSS?",
          "¿Cuándo tiene sentido usar estilos inline en una aplicación moderna?"
        ]
      },
      quiz: {
        question: "¿Por qué los estilos externos (<link>) son la mejor práctica para aplicaciones web en producción?",
        options: [
          "Porque permiten ser cacheados por el navegador y compartidos entre todas las páginas del sitio",
          "Porque tienen mayor especificidad que los estilos inline",
          "Porque no bloquean el renderizado inicial de la página",
          "Porque se ejecutan en un Web Worker independiente"
        ],
        correctIndex: 0,
        explanation: "Los archivos CSS externos se descargan una sola vez y quedan cacheados en el navegador y en los nodos edge de la CDN, reduciendo drásticamente el peso de las visitas subsecuentes."
      }
    },
    {
      id: "css-03",
      title: "¿Qué es el Box Model y cuáles son sus componentes?",
      level: "basico",
      tags: ["Box Model", "box-sizing", "border-box", "Layout"],
      response:
        "El Box Model (Modelo de Caja) es el núcleo del motor de renderizado CSS. Cada elemento HTML se representa como una caja rectangular compuesta por 4 capas concéntricas: 1) **Content**: El área donde reside el texto, imagen u otros elementos. 2) **Padding**: Espacio transparente interno entre el contenido y el borde. 3) **Border**: Borde que rodea el padding y el contenido. 4) **Margin**: Espacio transparente externo que separa la caja de otros elementos circundantes.",
      codeExample: {
        language: "css",
        code: `/* Reset universal estándar en la industria */
*, *::before, *::after {
  box-sizing: border-box; /* width incluye padding y border */
}

.card {
  width: 300px;
  height: 200px;
  padding: 20px;
  border: 4px solid #6366f1;
  margin: 16px auto;
  /* Con border-box: ancho total en pantalla = 300px exactos */
  /* Con content-box (antiguo): ancho total = 300 + 40 + 8 = 348px */
}`,
        output: "border-box garantiza dimensiones predecibles sin desbordar el layout",
        explanation: "Con box-sizing: border-box, el padding y el border se restan del espacio de contenido en lugar de sumarse al ancho exterior."
      },
      visualDiagram: {
        id: "diag-box-model",
        title: "CSS Box Model: Capas Concéntricas",
        caption: "Margin (externo) -> Border -> Padding (interno) -> Content (width x height)",
        diagramType: "css-box-model"
      },
      interviewTips: {
        whatInterviewersWant: "Verificar si comprendes la diferencia crucial entre 'content-box' (default histórico) y 'border-box' (estándar moderno).",
        commonPitfalls: ["Olvidar que los márgenes verticales colapsan (margin collapsing) en elementos en bloque normales."],
        followUps: [
          "¿Cómo se comportan los márgenes colapsados (margin collapsing)?",
          "¿El padding afecta al área de clic de un elemento?"
        ]
      },
      quiz: {
        question: "Si un elemento tiene width: 200px, padding: 20px, border: 5px y box-sizing: border-box, ¿cuál es su ancho total en pantalla?",
        options: [
          "250px",
          "200px",
          "240px",
          "175px"
        ],
        correctIndex: 1,
        explanation: "Con box-sizing: border-box, el ancho total especificado (200px) ya incluye el padding y el border, encogiendo el contenido según sea necesario."
      }
    },
    {
      id: "css-04",
      title: "¿Cuál es la diferencia entre display: none y visibility: hidden?",
      level: "basico",
      tags: ["display", "visibility", "opacity", "Reflow", "Repaint", "a11y"],
      response:
        "**display: none** remueve completamente el elemento del Render Tree; la caja colapsa a 0x0px, sus hermanos ocupan su espacio geométrico y el navegador dispara un costoso Reflow (Layout). Además, es ignorado por lectores de pantalla (salvo configuraciones específicas). **visibility: hidden** oculta visualmente el elemento y lo excluye del árbol de accesibilidad, pero **preserva intactas sus dimensiones y su espacio en el flujo del documento**, disparando únicamente un Repaint sin recalcular el layout. Por contraste, **opacity: 0** hace el elemento 100% transparente pero sigue ocupando espacio y responde a eventos del cursor.",
      codeExample: {
        language: "css",
        code: `/* 1. display: none (colapsa espacio y dispara Reflow) */
.hidden-collapse {
  display: none;
}

/* 2. visibility: hidden (preserva hueco y dispara solo Repaint) */
.hidden-preserve-space {
  visibility: hidden;
}

/* 3. Patrón 'sr-only': Oculto a la vista pero accesible a Screen Readers */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}`,
        explanation: "Nunca uses display: none o visibility: hidden si quieres que el texto sea leído por tecnologías de asistencia."
      },
      visualDiagram: {
        id: "diag-display-vs-visibility",
        title: "display: none vs visibility: hidden vs opacity: 0",
        caption: "display: none elimina la caja del flujo; visibility: hidden preserva el espacio geométrico intacto.",
        diagramType: "css-display-none-vs-visibility"
      },
      interviewTips: {
        whatInterviewersWant: "Evaluar si conoces el impacto en accesibilidad (Screen Readers) y en el ciclo de renderizado (Reflow vs Repaint).",
        commonPitfalls: ["Olvidar que 'opacity: 0' permite que los usuarios hagan clic en el elemento invisible si no se desactiva con 'pointer-events: none'."],
        followUps: [
          "¿Cómo afecta cada opción a la accesibilidad y a los lectores de pantalla?",
          "¿Qué diferencia hay con opacity: 0 o content-visibility: hidden?"
        ]
      },
      quiz: {
        question: "¿Qué ocurre con el espacio que ocupa un elemento en la pantalla cuando se le aplica 'visibility: hidden'?",
        options: [
          "Se conserva exactamente igual, como un hueco invisible",
          "Colapsa a 0 píxeles de alto y ancho",
          "Se desplaza hacia la parte inferior del viewport",
          "Se destruye en el árbol DOM del navegador"
        ],
        correctIndex: 0,
        explanation: "A diferencia de display: none, visibility: hidden solo evita que los píxeles se pinten en pantalla, pero la caja sigue ocupando su tamaño original dentro del layout."
      }
    },
    {
      id: "css-05",
      title: "¿Cuál es la diferencia entre em, rem y px?",
      level: "basico",
      tags: ["rem", "em", "px", "Unidades", "Tipografía", "Accesibilidad"],
      response:
        "**px** es una unidad absoluta en pantalla que no escala si el usuario ajusta el tamaño de fuente predeterminado en la configuración de su navegador, violando pautas de accesibilidad WCAG. **em** es una unidad relativa calculada en base al font-size del elemento padre directo; tiene el riesgo del 'efecto compuesto' (compounding effect), donde elementos anidados multiplican su escala sucesivamente. **rem** (root em) es una unidad relativa calculada estrictamente en base al font-size del elemento raíz (:root o <html>, usualmente 16px por defecto), garantizando una escala predecible y 100% compatible con el zoom del usuario.",
      codeExample: {
        language: "css",
        code: `/* Configuración de escala accesible en :root */
:root {
  font-size: 100%; /* 1rem = 16px (respeta preferencia del SO) */
}

/* Tipografía consistente con rem */
h1 { font-size: 2rem; } /* 32px exactos */
p  { font-size: 1rem; } /* 16px exactos */

/* Caso de uso ideal para em: Paddings proporcionales al tamaño del botón */
.btn {
  font-size: 1rem;
  padding: 0.5em 1em; /* Se adapta automáticamente si el botón cambia de escala */
}

.btn-lg {
  font-size: 1.5rem; /* El padding crece proporcionalmente sin definir nuevas reglas */
}`,
        explanation: "Usa 'rem' para dimensiones de layout y tipografía; usa 'em' para paddings de componentes que deben escalar con su texto."
      },
      visualDiagram: {
        id: "diag-units-rem-em-px",
        title: "Comparativa de Unidades: rem, em y px",
        caption: "rem toma la raíz (:root) de forma predecible; em sufre efecto compuesto de padres anidados.",
        diagramType: "css-units-rem-em-px"
      },
      interviewTips: {
        whatInterviewersWant: "Identificar si construyes interfaces accesibles y si sabes prevenir el 'font compounding' de la unidad em.",
        commonPitfalls: ["Fijar font-size en px en el elemento html, anulando las preferencias de zoom de texto de personas con baja visión."],
        followUps: [
          "¿Por qué rem respeta mejor el tamaño de fuente configurado por el usuario?",
          "¿Qué problema de composición tienen las unidades em anidadas?"
        ]
      },
      quiz: {
        question: "Si el elemento :root tiene 16px y un contenedor tiene font-size: 2em, ¿cuánto medirá font-size: 1.5rem en un hijo de ese contenedor?",
        options: [
          "24px",
          "48px",
          "32px",
          "16px"
        ],
        correctIndex: 0,
        explanation: "1.5rem siempre se calcula multiplicando 1.5 por el font-size del root (16px * 1.5 = 24px), ignorando completamente los 2em del contenedor padre."
      }
    },
    {
      id: "css-06",
      title: "¿Qué es el Box-Sizing?",
      level: "basico",
      tags: ["box-sizing", "border-box", "content-box", "Layout"],
      response:
        "**box-sizing** define la fórmula matemática que emplea el motor de renderizado para calcular las dimensiones visibles de una caja. Con **content-box** (valor inicial de la W3C), el ancho declarado (`width`) solo cubre el contenido; cualquier `padding` o `border` se suma hacia afuera incrementando el tamaño final en pantalla y provocando desbordamientos inesperados. Con **border-box** (estándar de la industria moderna), el ancho y alto declarados representan el tamaño exterior total, y el navegador descuenta el padding y el border del área interna del contenido.",
      codeExample: {
        language: "css",
        code: `/* Reset universal estándar obligatorio en todo proyecto */
*, *::before, *::after {
  box-sizing: border-box;
}

/* Comparativa de cálculo */
.caja-content-box {
  box-sizing: content-box;
  width: 200px;
  padding: 20px;
  border: 5px solid red;
  /* Ancho en pantalla = 200 + (20*2) + (5*2) = 250px (¡Desborda!) */
}

.caja-border-box {
  box-sizing: border-box;
  width: 200px;
  padding: 20px;
  border: 5px solid green;
  /* Ancho en pantalla = 200px exactos (el contenido se contrae a 150px) */
}`,
        explanation: "border-box hace que las dimensiones de columnas en layouts porcentuales o fraccionales nunca se rompan."
      },
      visualDiagram: {
        id: "diag-box-sizing",
        title: "Comparativa de Modelos de Caja: content-box vs border-box",
        caption: "content-box suma paddings hacia afuera; border-box absorbe padding y bordes dentro del width.",
        diagramType: "css-box-sizing-comparison"
      },
      interviewTips: {
        whatInterviewersWant: "Comprobar que dominas los cálculos geométricos de CSS y aplicas el reset universal de forma natural.",
        commonPitfalls: ["Olvidar incluir los pseudo-elementos (*::before, *::after) en el reset de box-sizing."],
        followUps: [
          "¿Por qué se recomienda aplicar box-sizing: border-box globalmente?",
          "¿Cómo calcula el navegador el ancho total con content-box?"
        ]
      },
      quiz: {
        question: "¿Por qué toda la industria adopta box-sizing: border-box como estándar universal?",
        options: [
          "Porque hace que el ancho especificado sea predecible y no crezca al añadir padding o bordes",
          "Porque mejora la aceleración por hardware de la GPU",
          "Porque elimina automáticamente los márgenes colapsados",
          "Porque convierte elementos en línea en elementos de bloque"
        ],
        correctIndex: 0,
        explanation: "Con border-box, una caja con width: 100% o width: 300px nunca desbordará su contenedor si se le agregan paddings o bordes."
      }
    },
    {
      id: "css-07",
      title: "¿Qué es una variable en CSS?",
      level: "basico",
      tags: ["CSS Variables", "Custom Properties", "var()", "Dark Mode", "Cascada"],
      response:
        "Las Variables CSS (oficialmente **CSS Custom Properties**) son entidades declaradas con el prefijo `--nombre` que almacenan valores reutilizables accesibles mediante la función `var(--nombre, fallback)`. A diferencia de las variables estáticas de compiladores como Sass o Less, las Custom Properties **viven en tiempo de ejecución en el navegador**, respetan la herencia del DOM, se actualizan dinámicamente con JavaScript (`element.style.setProperty`) y permiten crear arquitecturas avanzadas de theming (como Dark Mode) redefiniendo variables en subárboles.",
      codeExample: {
        language: "css",
        code: `/* 1. Declaración global en :root */
:root {
  --color-bg: #ffffff;
  --color-text: #0f172a;
  --color-accent: #6366f1;
}

/* 2. Redefinición temática para Dark Mode sin tocar selectores hijos */
[data-theme="dark"] {
  --color-bg: #09090b;
  --color-text: #f8fafc;
  --color-accent: #818cf8;
}

/* 3. Consumo con fallback de seguridad */
.card {
  background-color: var(--color-bg);
  color: var(--color-text);
  border: 1px solid var(--color-accent, blue);
}`,
        explanation: "Las Custom Properties se recalculan al vuelo en el cliente sin necesidad de compilar CSS."
      },
      visualDiagram: {
        id: "diag-custom-properties-scope",
        title: "Ámbito y Herencia de CSS Custom Properties",
        caption: "Las variables declaradas en :root descienden por el DOM y pueden sobreescribirse localmente.",
        diagramType: "css-custom-properties-scope"
      },
      interviewTips: {
        whatInterviewersWant: "Diferenciar variables CSS dinámicas de variables de Sass/SCSS y explicar patrones de theming.",
        commonPitfalls: ["No saber que las variables CSS pueden leerse y mutarse desde JavaScript de manera instantánea."],
        followUps: [
          "¿Qué diferencia hay entre las Custom Properties y las variables de Sass?",
          "¿Cómo implementarías un theme switcher (dark mode) con variables CSS?"
        ]
      },
      quiz: {
        question: "¿Cuál es la principal ventaja de las CSS Custom Properties sobre las variables de SASS?",
        options: [
          "Existen en tiempo de ejecución en el navegador y pueden mutar dinámicamente según el DOM o JS",
          "Tienen una velocidad de procesamiento 10x mayor en la CPU",
          "Permiten cálculos matemáticos sin la función calc()",
          "Soportan bucles for y condicionales if nativos"
        ],
        correctIndex: 0,
        explanation: "Las variables de Sass se resuelven en tiempo de compilación y se transforman en valores estáticos; las variables CSS viven en el cliente y pueden redefinirse dinámicamente."
      }
    },

    // ==========================================
    // === MEDIO (8 - 15) =======================
    // ==========================================
    {
      id: "css-08",
      title: "¿Qué son los Media Queries?",
      level: "medio",
      tags: ["Media Queries", "Responsive Design", "Mobile First", "prefers-color-scheme", "Breakpoints"],
      response:
        "Los Media Queries son directivas condicionales (`@media`) que aplican bloques de reglas de estilo según las características del dispositivo o contexto de visualización (ancho de pantalla, orientación, resolución o preferencias del sistema operativo). La práctica recomendada es **Mobile-First**, comenzando con estilos base para pantallas pequeñas y escalando con media queries progresivas usando `min-width`. Además, soportan consultas de accesibilidad cruciales como `@media (prefers-reduced-motion: reduce)` y preferencias visuales como `@media (prefers-color-scheme: dark)`.",
      codeExample: {
        language: "css",
        code: `/* 1. Mobile First (Estilos base por defecto sin media queries) */
.layout-grid {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* 2. Breakpoint Tablet (min-width: 768px) */
@media (min-width: 768px) {
  .layout-grid {
    display: grid;
    grid-template-columns: 240px 1fr;
  }
}

/* 3. Accesibilidad: Desactivar animaciones si el usuario lo solicita en el SO */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}`,
        explanation: "La estrategia Mobile-First con min-width reduce el volumen de código y la sobreescritura de reglas."
      },
      visualDiagram: {
        id: "diag-media-queries",
        title: "Estrategia Mobile-First con Media Queries y Breakpoints",
        caption: "Eje horizontal con min-width progresivo: Mobile base (<640px) ➔ Tablet (768px) ➔ Desktop (1024px).",
        diagramType: "css-media-queries-breakpoints"
      },
      interviewTips: {
        whatInterviewersWant: "Asegurarse de que aplicas Mobile-First en vez de Desktop-First con max-width y conoces media features de a11y.",
        commonPitfalls: ["Definir decenas de breakpoints arbitrarios en lugar de basarse en el contenido o en escalas universales."],
        followUps: [
          "¿Por qué se recomienda un enfoque mobile-first con min-width?",
          "¿Qué otras media features existen además del ancho (prefers-color-scheme, hover, pointer)?"
        ]
      },
      quiz: {
        question: "¿Por qué se prefiere el enfoque 'Mobile-First' con 'min-width' en arquitecturas CSS modernas?",
        options: [
          "Porque los móviles cargan los estilos base directamente y el código escala de forma aditiva y limpia",
          "Porque los navegadores móviles no interpretan max-width",
          "Porque reduce el peso de las imágenes automáticamente",
          "Porque elimina la necesidad del meta tag viewport"
        ],
        correctIndex: 0,
        explanation: "Mobile-first permite que los dispositivos con menores recursos de hardware procesen los estilos base sin anular reglas complejas de desktop."
      }
    },
    {
      id: "css-09",
      title: "¿Cuál es la diferencia entre Flexbox y CSS Grid?",
      level: "medio",
      tags: ["Flexbox", "CSS Grid", "Layout", "Unidimensional", "Bidimensional"],
      response:
        "La diferencia fundamental radica en la dimensionalidad y la filosofía de diseño: **Flexbox es unidimensional (1D)**: opera a lo largo de un solo eje a la vez (Main Axis en fila o columna); es impulsado por el contenido ('content-driven'), ideal para alinear elementos, barras de navegación o repartir espacio entre ítems dinámicos. **CSS Grid es bidimensional (2D)**: permite definir simultáneamente filas y columnas ('layout-driven'), ideal para estructurar la composición macro de la aplicación, galerías o dashboards. En aplicaciones profesionales se complementan: Grid estructura el layout general exterior y Flexbox organiza los componentes internos.",
      codeExample: {
        language: "css",
        code: `/* 1. Flexbox: Unidimensional (alineación de navegación o barras) */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

/* 2. Grid: Bidimensional (layout de tarjetas responsivo sin media queries) */
.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}`,
        explanation: "Flexbox gestiona contenido fluyendo en 1 eje; CSS Grid impone estructura simultánea en filas y columnas."
      },
      visualDiagram: {
        id: "diag-flexbox-vs-grid",
        title: "Flexbox (1D) vs CSS Grid (2D)",
        caption: "Flexbox organiza ítems a lo largo de un eje; CSS Grid controla filas y columnas bidimensionalmente.",
        diagramType: "css-flexbox-vs-grid"
      },
      interviewTips: {
        whatInterviewersWant: "Evitar respuestas simplistas; demostrar que sabes cuándo usar cada uno en una arquitectura de UI real.",
        commonPitfalls: ["Intentar construir una grilla compleja 2D con flex-wrap y hacks de porcentajes en lugar de CSS Grid."],
        followUps: [
          "¿Cuándo combinarías Flexbox y Grid en el mismo layout?",
          "¿Qué es subgrid y qué problema resuelve?"
        ]
      },
      quiz: {
        question: "¿Cuál es la mejor combinación arquitectónica recomendada en frontend moderno?",
        options: [
          "CSS Grid para el layout macro y exterior; Flexbox para componentes y alineación micro en 1 eje",
          "Usar solo Flexbox para todo y evitar CSS Grid por falta de soporte",
          "Usar float y inline-block para compatibilidad absoluta",
          "Usar CSS Grid exclusivamente y descartar Flexbox"
        ],
        correctIndex: 0,
        explanation: "Grid es óptimo para la estructura de página y cuadrículas 2D; Flexbox es superior para alinear contenidos internos (botones, barras de navegación, iconos)."
      }
    },
    {
      id: "css-10",
      title: "¿Qué tipos de especificidad existen en CSS?",
      level: "medio",
      tags: ["Especificidad", "Cascada", "!important", "where", "is", "Selectores"],
      response:
        "La especificidad es el sistema de puntuación que resuelve conflictos de estilos cuando múltiples selectores apuntan al mismo elemento. Se representa como un vector de 4 dígitos `(a, b, c, d)`: **a (1,0,0,0)**: Estilos en línea (`style='...'`). **b (0,1,0,0)**: Selectores de ID (`#id`). **c (0,0,1,0)**: Clases (`.btn`), atributos (`[type='text']`) y pseudo-clases (`:hover`, `:nth-child`). **d (0,0,0,1)**: Elementos HTML (`div`, `p`) y pseudo-elementos (`::before`). `!important` anula el vector regular pero rompe la cascada natural. Las pseudo-clases modernas como `:where()` tienen **especificidad cero (0,0,0,0)**, permitiendo crear estilos base fácilmente sobreescribibles.",
      codeExample: {
        language: "css",
        code: `/* Ejemplos de puntuación de especificidad: */
p                       { /* (0, 0, 0, 1) Elemento */ }
.card p                 { /* (0, 0, 1, 1) Clase + Elemento */ }
#header .card p         { /* (0, 1, 1, 1) ID + Clase + Elemento */ }
#header .card p:hover   { /* (0, 1, 2, 1) ID + 2 Clases/Pseudo-clases + Elemento */ }

/* :where() tiene especificidad CERO absoluta (0, 0, 0, 0) */
:where(.btn, .link) {
  padding: 8px 16px; /* Fácilmente sobreescribible por cualquier clase */
}

.btn-custom {
  padding: 12px; /* Gana sin importar el orden ni requerir !important */
}`,
        explanation: "Un solo selector de ID supera a 100 clases combinadas debido a la prioridad por columnas del vector (a,b,c,d)."
      },
      visualDiagram: {
        id: "diag-specificity",
        title: "Jerarquía y Vector de Especificidad en CSS",
        caption: "!important > Inline (1,0,0,0) > ID (0,1,0,0) > Clase (0,0,1,0) > Elemento (0,0,0,1) > :where() (0,0,0,0).",
        diagramType: "css-specificity-hierarchy"
      },
      interviewTips: {
        whatInterviewersWant: "Explicar el cálculo como una tupla (a,b,c,d) y saber cómo usar :where() para crear librerías de UI limpias.",
        commonPitfalls: ["Creer que 10 o 100 clases juntas pueden superar a un ID (las columnas del vector nunca se desbordan a la izquierda)."],
        followUps: [
          "¿Cómo se calcula la especificidad de un selector como #nav .item a:hover?",
          "¿Cómo reducen :where() y @layer los problemas de especificidad?"
        ]
      },
      quiz: {
        question: "¿Cuál selector tiene mayor especificidad entre '#menu' y '.nav .list .item .link'?",
        options: [
          "#menu, porque un ID (0,1,0,0) siempre supera a cualquier cantidad de clases (0,0,4,0)",
          ".nav .list .item .link, porque tiene 4 clases acumuladas",
          "Ambos tienen exactamente la misma especificidad",
          "El que aparezca más abajo en el archivo CSS"
        ],
        correctIndex: 0,
        explanation: "La especificidad compara columnas de izquierda a derecha. 1 en la columna de IDs vence a cualquier número en la columna de clases."
      }
    },
    {
      id: "css-11",
      title: "¿Qué son las pseudo-clases y pseudo-elementos?",
      level: "medio",
      tags: ["Pseudo-clases", "Pseudo-elementos", "hover", "focus-visible", "before", "after"],
      response:
        "**Pseudo-clases** (sintaxis con un dos puntos `:`): seleccionan un elemento existente en base a su estado dinámico (`:hover`, `:active`, `:focus-visible`), su posición en el árbol DOM (`:first-child`, `:nth-child()`) o relaciones lógicas (`:has()`, `:is()`, `:not()`). **Pseudo-elementos** (sintaxis con dos puntos dobles `::`): crean elementos virtuales decorativos en el Render Tree sin agregar etiquetas al HTML (`::before`, `::after` con la propiedad requerida `content`), o permiten dar estilo a partes específicas de un elemento (`::placeholder`, `::selection`, `::marker`).",
      codeExample: {
        language: "css",
        code: `/* 1. Pseudo-elementos (::): Creación de nodos decorativos virtuales */
.btn-badge {
  position: relative;
}

.btn-badge::before {
  content: "★";
  margin-right: 6px;
  color: #fbbf24;
}

/* 2. Pseudo-clases (:): Estados de interacción y accesibilidad */
.btn-badge:hover {
  background-color: #4f46e5;
}

/* Estado de foco por teclado accesible (no se activa con mouse click) */
.btn-badge:focus-visible {
  outline: 3px solid #818cf8;
  outline-offset: 2px;
}`,
        explanation: "Los pseudo-elementos (::) generan nodos virtuales; las pseudo-clases (:) reaccionan a estados del elemento real."
      },
      visualDiagram: {
        id: "diag-pseudoclasses-pseudoelements",
        title: "Pseudo-clases (:) vs Pseudo-elementos (::)",
        caption: ":hover y :focus reaccionan a estados dinámicos; ::before y ::after inyectan contenido decorativo virtual.",
        diagramType: "css-pseudoclasses-vs-pseudoelements"
      },
      interviewTips: {
        whatInterviewersWant: "Comprobar si utilizas la sintaxis moderna W3C (:: para pseudo-elementos y : para pseudo-clases) y conoces :focus-visible.",
        commonPitfalls: ["Olvidar la propiedad 'content: \\\"\\\"' al crear ::before o ::after, lo que provoca que no se rendericen."],
        followUps: [
          "¿Por qué los pseudo-elementos ::before y ::after necesitan la propiedad content?",
          "¿Qué diferencia hay entre :focus y :focus-visible?"
        ]
      },
      quiz: {
        question: "¿Cuál es la diferencia sintáctica estandarizada por CSS3 entre pseudo-clases y pseudo-elementos?",
        options: [
          "Las pseudo-clases usan un solo dos puntos (ej. :hover) y los pseudo-elementos usan doble dos puntos (ej. ::before)",
          "Las pseudo-clases usan punto (.hover) y los pseudo-elementos almohadilla (#before)",
          "No existe ninguna diferencia sintáctica en ningún estándar",
          "Las pseudo-clases solo se usan con JavaScript"
        ],
        correctIndex: 0,
        explanation: "CSS3 introdujo la notación de doble dos puntos (::) para pseudo-elementos para diferenciarlos claramente de las pseudo-clases (:)."
      }
    },
    {
      id: "css-12",
      title: "¿Qué diferencia hay entre relative, absolute, fixed y sticky?",
      level: "medio",
      tags: ["Positioning", "relative", "absolute", "fixed", "sticky", "Layout"],
      response:
        "Definen el flujo y coordenadas de una caja: 1) **static**: Valor inicial por defecto; sigue el flujo normal del HTML e ignora top/left/z-index. 2) **relative**: Se desplaza con top/left respecto a su hueco original sin alterar el flujo de sus vecinos; sirve de marco de referencia de coordenadas para hijos absolutos. 3) **absolute**: Se remueve del flujo y se posiciona respecto al ancestro posicionado más cercano (`position != static`). 4) **fixed**: Se remueve del flujo y se fija respecto al viewport del navegador, inmune al scroll. 5) **sticky**: Se comporta como `relative` hasta alcanzar un umbral de scroll (ej. `top: 0`), momento en el que se fija dentro de los confines de su contenedor padre.",
      codeExample: {
        language: "css",
        code: `/* 1. Header pegajoso que se fija al hacer scroll */
.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(15, 23, 42, 0.85);
  backdrop-filter: blur(8px);
}

/* 2. Tarjeta contenedor como marco de referencia */
.card-container {
  position: relative;
  overflow: visible;
}

/* 3. Badge flotante anclado a la esquina de la tarjeta */
.badge-top-right {
  position: absolute;
  top: -8px;
  right: -8px;
}`,
        explanation: "Sticky requiere un contenedor sin 'overflow: hidden' en sus ancestros para poder fijarse correctamente."
      },
      visualDiagram: {
        id: "diag-positioning-types",
        title: "Modelos de Posicionamiento: static, relative, absolute, fixed, sticky",
        caption: "Comparativa de flujo normal, offsets relativos, anclaje al viewport y fijación condicional con scroll.",
        diagramType: "css-positioning-types"
      },
      interviewTips: {
        whatInterviewersWant: "Saber cuándo position: sticky deja de funcionar (problema común de overflow en padres) y cómo se anclan los absolutos.",
        commonPitfalls: ["Olvidar que 'position: absolute' buscará hasta la etiqueta <html> si ningún ancestro tiene 'position: relative'."],
        followUps: [
          "¿Por qué position: sticky a veces no funciona (overflow en un ancestro)?",
          "¿Respecto a qué elemento se posiciona un elemento absolute?"
        ]
      },
      quiz: {
        question: "¿Qué ocurre si un elemento tiene 'position: sticky; top: 0;' pero uno de sus ancestros tiene 'overflow: hidden'?",
        options: [
          "El comportamiento sticky deja de funcionar y el elemento hace scroll normalmente",
          "El navegador arroja un error de sintaxis en la consola",
          "El elemento se convierte en position: fixed automáticamente",
          "El elemento desaparece de la pantalla"
        ],
        correctIndex: 0,
        explanation: "Cualquier propiedad 'overflow' distinta de 'visible' en un ancestro corta el contexto de desplazamiento que necesita sticky para calcular el umbral."
      }
    },
    {
      id: "css-13",
      title: "¿Qué es la propiedad z-index y cómo funciona el stacking context?",
      level: "medio",
      tags: ["z-index", "Stacking Context", "isolation", "Eje Z", "Capas"],
      response:
        "`z-index` controla la superposición visual en el eje Z (profundidad). Sin embargo, solo opera dentro de su **Stacking Context (Contexto de Apilamiento)** local. Si un elemento hijo tiene `z-index: 999999` dentro de un contenedor padre que tiene `z-index: 1`, jamás podrá pintar por encima de un contenedor hermano con `z-index: 2`, porque el padre gana jerárquicamente. Nuevos Stacking Contexts se crean con: `position` con `z-index != auto`, `opacity < 1`, `transform`, `filter`, `container-type` o la propiedad moderna recomendada `isolation: isolate`.",
      codeExample: {
        language: "css",
        code: `/* Solución arquitectónica moderna: aislar componentes con isolation */
.modal-component {
  position: relative;
  isolation: isolate; /* Crea un Stacking Context local estricto */
  z-index: 100;
}

/* Este z-index vive únicamente dentro del componente sin contaminar la app */
.modal-component .tooltip {
  z-index: 999;
}

/* Tarjeta hermana sin guerras de z-index */
.sidebar {
  position: relative;
  z-index: 50;
}`,
        explanation: "isolation: isolate evita guerras destructivas de z-index: 999999 al encapsular el contexto de capas."
      },
      visualDiagram: {
        id: "diag-stacking-context",
        title: "Árbol Jerárquico de Stacking Contexts y z-index",
        caption: "Un z-index: 9999 atrapado en un contexto con z-index: 1 nunca superará a un contexto con z-index: 2.",
        diagramType: "css-stacking-context-tree"
      },
      interviewTips: {
        whatInterviewersWant: "Verificar si sabes por qué z-index: 999999 a veces no funciona y cómo resolverlo profesionalmente con 'isolation: isolate'.",
        commonPitfalls: ["Subir infinitamente el z-index en lugar de investigar qué ancestro creó un Stacking Context prematuro."],
        followUps: [
          "¿Qué propiedades crean un nuevo stacking context además de z-index?",
          "¿Por qué un z-index: 9999 puede quedar detrás de otro elemento?"
        ]
      },
      quiz: {
        question: "¿Por qué un modal con z-index: 9999 puede quedar oculto detrás de una barra lateral con z-index: 2?",
        options: [
          "Porque el modal está dentro de un Stacking Context padre cuyo z-index es menor que 2",
          "Porque el navegador no admite valores de z-index mayores a 1000",
          "Porque z-index solo funciona en elementos con display: flex",
          "Porque la barra lateral tiene mayor especificidad CSS"
        ],
        correctIndex: 0,
        explanation: "El orden de apilamiento global se evalúa a nivel de Stacking Contexts raíz; los hijos están limitados al nivel que determine su contenedor padre."
      }
    },
    {
      id: "css-14",
      title: "¿Qué es SASS/SCSS y qué ventajas ofrece?",
      level: "medio",
      tags: ["SASS", "SCSS", "Preprocesadores", "Mixins", "Dart Sass"],
      response:
        "Sass (Syntactically Awesome Style Sheets) es un preprocesador que extiende la sintaxis de CSS con capacidades avanzadas de programación. La sintaxis **SCSS** es 100% compatible con CSS puro y ofrece: variables con tipado (`$primary`), mixins reutilizables (`@mixin` y `@include`), anidación estructurada (`&`), funciones matemáticas (`sass:math`), modularización estricta (`@use` y `@forward` que sustituyeron al obsoleto `@import`) y generación de source maps. En tiempo de build, el motor Dart Sass transpila el código a CSS estándar optimizado.",
      codeExample: {
        language: "scss",
        code: `// Arquitectura SCSS moderna con sistema de módulos
@use "sass:math";

$spacing-base: 8px;
$primary-color: #6366f1;

@mixin respond-to($breakpoint) {
  @if $breakpoint == "desktop" {
    @media (min-width: 1024px) { @content; }
  }
}

.card {
  padding: $spacing-base * 2;
  border: 1px solid $primary-color;

  &__title {
    font-size: 1.25rem;
  }

  @include respond-to("desktop") {
    padding: $spacing-base * 4;
  }
}`,
        explanation: "Sass organiza sistemas de diseño complejos y compila a CSS estándar sin penalización en tiempo de ejecución."
      },
      visualDiagram: {
        id: "diag-sass-flow",
        title: "Pipeline de Preprocesamiento: De SCSS a CSS de Producción",
        caption: "Archivos SCSS modulares (_variables, _mixins) ➔ Compilador Dart Sass ➔ CSS minificado para el browser.",
        diagramType: "css-sass-preprocessing-flow"
      },
      interviewTips: {
        whatInterviewersWant: "Saber qué características de Sass ya existen en CSS nativo (CSS Variables, Native Nesting) y cuáles siguen justificando Sass (@use, mixins).",
        commonPitfalls: ["Anidar más de 3 niveles con el selector '&', lo que genera selectores CSS pesados y difíciles de sobreescribir."],
        followUps: [
          "¿Siguen siendo necesarios los preprocesadores con CSS nativo moderno (nesting, variables)?",
          "¿Qué diferencia hay entre @use y el obsoleto @import en Sass?"
        ]
      },
      quiz: {
        question: "¿Cuál es la regla de oro para evitar un mal uso de la anidación en SCSS?",
        options: [
          "No anidar más de 3 niveles de profundidad para evitar selectores hiper-específicos e ineficientes",
          "Anidar siempre hasta 6 niveles para reflejar la estructura exacta del HTML",
          "Nunca usar variables dentro de bloques anidados",
          "Compilar solo usando el formato de indentación Sass antiguo"
        ],
        correctIndex: 0,
        explanation: "La anidación profunda (Inception Rule) crea selectores como '.a .b .c .d' que sobrecargan la especificidad y degradan el rendimiento de matching del motor CSS."
      }
    },
    {
      id: "css-15",
      title: "¿Qué es BEM?",
      level: "medio",
      tags: ["BEM", "Metodología", "Arquitectura CSS", "Nomenclatura", "Modularidad"],
      response:
        "BEM (Block, Element, Modifier) es una metodología de nomenclatura CSS diseñada para estructurar interfaces en componentes desacoplados y predecibles: 1) **Block (`.card`)**: Entidad independiente reutilizable con significado propio. 2) **Element (`.card__title`, `.card__btn`)**: Parte interna estructural dependiente del bloque (separada por doble guión bajo `__`). 3) **Modifier (`.card--featured`, `.card__btn--disabled`)**: Variante temática o estado visual (separada por doble guión medio `--`). Su ventaja principal es que mantiene una **especificidad plana (0,0,1,0)** en toda la hoja de estilos, previniendo colisiones en equipos grandes.",
      codeExample: {
        language: "html",
        code: `<!-- Estructura BEM limpia y desacoplada -->
<article class="product-card product-card--featured">
  <img class="product-card__image" src="product.jpg" alt="Producto">
  <div class="product-card__content">
    <h3 class="product-card__title">Cámara Pro</h3>
    <button class="product-card__button product-card__button--primary">
      Comprar
    </button>
  </div>
</article>`,
        explanation: "Cada clase tiene exactamente especificidad (0,0,1,0), permitiendo mover componentes sin romper estilos."
      },
      visualDiagram: {
        id: "diag-bem-arch",
        title: "Anatomía de Componentes con Metodología BEM",
        caption: ".card (Block) ➔ .card__title (Element con __) ➔ .card--featured (Modifier con --) con especificidad plana.",
        diagramType: "css-bem-architecture"
      },
      interviewTips: {
        whatInterviewersWant: "Reconocer cómo BEM resuelve problemas de cascada descontrolada y facilita el trabajo colaborativo en código legacy y moderno.",
        commonPitfalls: ["Crear elementos anidados con sintaxis incorrecta como '.card__header__title' (BEM solo permite un nivel de Element: '.card__title')."],
        followUps: [
          "¿Cómo se compara BEM con CSS Modules o Tailwind?",
          "¿Qué problemas de escalabilidad resuelve BEM en equipos grandes?"
        ]
      },
      quiz: {
        question: "¿Por qué en BEM es un error escribir '.card__header__title'?",
        options: [
          "Porque un Element siempre pertenece directamente al Block (.card__title), sin encadenar elementos anidados",
          "Porque CSS no admite dos guiones bajos seguidos",
          "Porque los nombres de clase no pueden superar los 15 caracteres",
          "Porque el selector debe llevar un ID antes del modificador"
        ],
        correctIndex: 0,
        explanation: "BEM mantiene la jerarquía plana; un elemento siempre se asocia directamente a su bloque padre (.block__element), independientemente de la profundidad en el HTML."
      }
    },

    // ==========================================
    // === AVANZADO (16 - 22) ===================
    // ==========================================
    {
      id: "css-16",
      title: "¿Qué son las animaciones en CSS y cómo se optimizan?",
      level: "avanzado",
      tags: ["Animaciones", "@keyframes", "GPU", "Compositor", "Reflow", "will-change"],
      response:
        "Las animaciones CSS se declaran con `@keyframes` y se aplican mediante la propiedad `animation`. Para lograr animaciones a 60/120 FPS sin caídas de cuadros (jank), **solo se deben animar propiedades que se ejecutan en el hilo Compositor de la GPU: `transform` y `opacity`**. Animar propiedades como `top`, `left`, `width`, `height` o `margin` dispara un costoso Reflow (Layout); animar `background-color` o `box-shadow` dispara un Repaint. La propiedad `will-change: transform` indica al navegador que promueva el elemento a su propia capa de composición de hardware antes de que inicie la interacción.",
      codeExample: {
        language: "css",
        code: `/* Animación a 60 FPS acelerada por GPU (Compositor Thread) */
@keyframes slideFadeIn {
  from {
    opacity: 0;
    transform: translateY(12px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.modal-enter {
  /* Anima solo transform y opacity para evitar reflows costosos */
  animation: slideFadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  will-change: transform, opacity;
}`,
        explanation: "Evita animar propiedades como top, left, width o height que fuerzan recalcular el Layout del navegador."
      },
      visualDiagram: {
        id: "diag-compositor-reflow",
        title: "Pipeline de Animaciones: Layout vs Paint vs Compositor GPU",
        caption: "Animar transform y opacity salta Layout y Paint, ejecutándose en el Compositor a 60 FPS fijos.",
        diagramType: "css-compositor-vs-reflow"
      },
      interviewTips: {
        whatInterviewersWant: "Evaluar tu entendimiento de los hilos del navegador (Main Thread vs Compositor Thread) y optimización de render.",
        commonPitfalls: ["Usar 'will-change' en cientos de elementos simultáneamente, lo que agota la memoria VRAM de la tarjeta gráfica."],
        followUps: [
          "¿Por qué animar transform y opacity es más barato que animar width o top?",
          "¿Cuándo usarías will-change y qué riesgos tiene abusar de él?"
        ]
      },
      quiz: {
        question: "¿Cuáles son las dos únicas propiedades CSS que el navegador puede animar exclusivamente en el hilo del Compositor (GPU)?",
        options: [
          "transform y opacity",
          "width y height",
          "top y left",
          "background-color y box-shadow"
        ],
        correctIndex: 0,
        explanation: "transform y opacity no alteran la geometría del layout ni repintan píxeles; simplemente transforman las capas de textura cargadas previamente en la GPU."
      }
    },
    {
      id: "css-17",
      title: "¿Qué es CSS Grid y cómo se define un layout complejo?",
      level: "avanzado",
      tags: ["CSS Grid", "grid-template-areas", "Responsive Layout", "minmax", "fr"],
      response:
        "CSS Grid es el sistema de layout bidimensional más potente de la web. Permite definir cuadrículas complejas mediante `grid-template-columns`, `grid-template-rows` y áreas semánticas nombradas con `grid-template-areas`. Proporciona unidades fraccionales flexibles (`fr`), funciones de límite como `minmax(min, max)`, repetición automática (`repeat(auto-fit, minmax(280px, 1fr))`) y control de separación con `gap`. La ventaja de `grid-template-areas` es que permite reorganizar visualmente toda una aplicación entre Desktop y Mobile con una sola regla en una media query sin alterar el DOM.",
      codeExample: {
        language: "css",
        code: `/* Layout de aplicación completo con CSS Grid */
.app-shell {
  display: grid;
  min-height: 100vh;
  grid-template-columns: 260px 1fr;
  grid-template-rows: 64px 1fr 48px;
  grid-template-areas:
    "header  header"
    "sidebar main"
    "footer  footer";
}

.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main    { grid-area: main; }
.footer  { grid-area: footer; }

/* Reorganización completa en Mobile sin tocar HTML */
@media (max-width: 768px) {
  .app-shell {
    grid-template-columns: 1fr;
    grid-template-areas:
      "header"
      "main"
      "sidebar"
      "footer";
  }
}`,
        explanation: "grid-template-areas transforma radicalmente el orden visual en mobile manteniendo un marcado HTML limpio."
      },
      visualDiagram: {
        id: "diag-grid-areas",
        title: "Arquitectura de Layout con CSS grid-template-areas",
        caption: "Áreas nombradas (header, sidebar, main, footer) reordenadas en mobile mediante CSS puro.",
        diagramType: "css-grid-template-areas"
      },
      interviewTips: {
        whatInterviewersWant: "Dominio de fr units, auto-fit/auto-fill, y la capacidad de orquestar plantillas completas con grid-template-areas.",
        commonPitfalls: ["No saber cómo dejar una celda vacía en grid-template-areas (se utiliza el carácter de punto '.')."],
        followUps: [
          "¿Cómo funcionan grid-template-areas y las líneas con nombre?",
          "¿Qué diferencia hay entre auto-fill y auto-fit en repeat()?"
        ]
      },
      quiz: {
        question: "¿Cómo se deja una celda vacía en una fila definida con grid-template-areas?",
        options: [
          "Escribiendo un punto (.) en la posición correspondiente",
          "Escribiendo la palabra reservada 'none'",
          "Dejando un espacio en blanco entre comillas (\\\"\\\")",
          "Escribiendo 'auto' o 'null'"
        ],
        correctIndex: 0,
        explanation: "En la sintaxis de grid-template-areas, uno o más caracteres de punto consecutivos (.) representan una celda de cuadrícula vacía."
      }
    },
    {
      id: "css-18",
      title: "¿Qué son las Container Queries y en qué se diferencian de Media Queries?",
      level: "avanzado",
      tags: ["Container Queries", "@container", "Responsive Components", "inline-size"],
      response:
        "Las Container Queries (`@container`) resuelven la limitación histórica de las Media Queries: en lugar de evaluar el ancho de la ventana gráfica global (viewport), **evalúan las dimensiones del contenedor padre directo del componente**. Se activan declarando `container-type: inline-size` en el contenedor. Esto permite crear componentes verdaderamente modulares que adaptan su diseño si se ubican en una barra lateral estrecha (diseño vertical apilado) o en el área principal amplia (diseño horizontal), sin importar la resolución global de la pantalla.",
      codeExample: {
        language: "css",
        code: `/* 1. Definir el contenedor como contexto de medición */
.card-wrapper {
  container-type: inline-size;
  container-name: cardContainer;
}

/* 2. El componente se adapta al ancho de su padre, no de la pantalla */
.user-card {
  display: flex;
  flex-direction: column;
}

@container cardContainer (min-width: 450px) {
  .user-card {
    flex-direction: row; /* Horizontal si el contenedor mide más de 450px */
    align-items: center;
  }
}`,
        explanation: "Permite que un mismo componente de UI se adapte correctamente en una barra lateral estrecha o en el área principal."
      },
      visualDiagram: {
        id: "diag-container-queries",
        title: "Container Queries (@container) vs Media Queries (@media)",
        caption: "El mismo componente adapta su layout al ancho de su padre inmediato dentro de un mismo viewport.",
        diagramType: "css-container-queries-flow"
      },
      interviewTips: {
        whatInterviewersWant: "Explicar cómo Container Queries habilita la verdadera modularidad de componentes de UI en Design Systems modernos.",
        commonPitfalls: ["Olvidar declarar 'container-type: inline-size' en el elemento ancestro, lo que hace que @container no responda."],
        followUps: [
          "¿Qué es container-type y por qué es obligatorio para consultar un contenedor?",
          "¿Qué unidades de container queries existen (cqi, cqw)?"
        ]
      },
      quiz: {
        question: "¿Qué propiedad es obligatoria en el contenedor padre para que sus hijos respondan a @container?",
        options: [
          "container-type: inline-size (o normal / size)",
          "display: container-grid",
          "overflow: container-query",
          "contain: strict-responsive"
        ],
        correctIndex: 0,
        explanation: "Para que un elemento sirva como contexto de consulta de contenedor, se debe definir container-type (usualmente 'inline-size' para medir ancho)."
      }
    },
    {
      id: "css-19",
      title: "¿Qué es la función clamp() y cómo se usa en tipografía fluida?",
      level: "avanzado",
      tags: ["clamp()", "Tipografía Fluida", "Responsive", "Funciones Matemáticas"],
      response:
        "`clamp(min, preferred, max)` es una función matemática que restringe un valor entre un límite inferior y un límite superior. En tipografía fluida, se combina un valor base estático con una tasa de crecimiento basada en unidades de viewport (`vw`), permitiendo que el tamaño de fuente escale de forma continua y suave a medida que cambia el ancho de la pantalla, sin dar saltos bruscos ni requerir docenas de media queries intermedias.",
      codeExample: {
        language: "css",
        code: `/* Tipografía fluida entre 16px (1rem) y 36px (2.25rem) según viewport */
h1.hero-title {
  /* Mínimo: 1.5rem, Ideal: 4vw + 1rem, Máximo: 3rem */
  font-size: clamp(1.5rem, 4vw + 1rem, 3rem);
  line-height: 1.15;
  letter-spacing: -0.02em;
}`,
        explanation: "clamp() combina límites mínimos y máximos con valores relativos, eliminando decenas de media queries intermedias."
      },
      visualDiagram: {
        id: "diag-clamp-curve",
        title: "Curva Gráfica de clamp(min, val, max)",
        caption: "Meseta inferior (piso), pendiente proporcional al viewport y meseta superior (techo protector).",
        diagramType: "css-clamp-fluid-curve"
      },
      interviewTips: {
        whatInterviewersWant: "Evaluar el uso de funciones matemáticas modernas (min, max, clamp, calc) para simplificar hojas de estilos responsivas.",
        commonPitfalls: ["Usar solo unidades 'vw' en la tipografía (como 4vw) sin clamp(), lo que hace que el texto sea ilegible en móviles muy pequeños."],
        followUps: [
          "¿Cómo garantizas que la tipografía fluida respete el zoom del usuario (WCAG)?",
          "¿Cómo calcularías el valor preferido en vw para un clamp()?"
        ]
      },
      quiz: {
        question: "Si font-size es clamp(1rem, 5vw, 2rem) y la pantalla mide 320px (donde 5vw = 16px), ¿cuál será el font-size final?",
        options: [
          "1rem (16px), porque no baja del valor mínimo",
          "5vw (16px), pero saltando a 2rem",
          "0.8rem por factor de escala",
          "2rem (32px)"
        ],
        correctIndex: 0,
        explanation: "clamp() devuelve el valor preferido (5vw = 16px) siempre que se encuentre dentro del rango delimitado por el mínimo (1rem = 16px) y el máximo (2rem = 32px)."
      }
    },
    {
      id: "css-20",
      title: "¿Qué son las Cascade Layers (@layer) en CSS?",
      level: "avanzado",
      tags: ["@layer", "Cascade Layers", "Cascada", "Especificidad", "Arquitectura CSS"],
      response:
        "Las Cascade Layers (`@layer`) representan la mayor evolución en el motor de cascada de CSS. Permiten definir capas explícitas de prioridad de estilos (ejemplo: `@layer reset, base, components, utilities;`). La regla de oro es que **la capa posterior gana siempre sobre las anteriores, sin importar la especificidad de los selectores**. Una clase simple en `@layer utilities` superará a un selector con IDs y múltiples clases en `@layer components`, eliminando para siempre las guerras de especificidad y la necesidad de usar `!important`.",
      codeExample: {
        language: "css",
        code: `/* 1. Definir la jerarquía de capas explícita */
@layer reset, components, utilities;

@layer components {
  /* Selector complejo de alta especificidad (0, 2, 1, 0) */
  .card .card__header .title {
    color: #1e293b;
  }
}

@layer utilities {
  /* Selector de baja especificidad (0, 0, 1, 0) pero en capa posterior: ¡GANA! */
  .text-indigo {
    color: #6366f1;
  }
}`,
        explanation: "Las Cascade Layers resuelven la prioridad a nivel de capa antes de evaluar la especificidad del selector."
      },
      visualDiagram: {
        id: "diag-cascade-layers",
        title: "Pila de Prioridad de Cascade Layers (@layer)",
        caption: "reset ➔ base ➔ components ➔ utilities. Las capas posteriores vencen a selectores de alta especificidad.",
        diagramType: "css-cascade-layers-stack"
      },
      interviewTips: {
        whatInterviewersWant: "Demostrar conocimiento de CSS moderno avanzado para gestionar sistemas de diseño y librerías de terceros.",
        commonPitfalls: ["Desconocer que los estilos fuera de cualquier capa (unlayered styles) tienen mayor prioridad que cualquier estilo dentro de @layer."],
        followUps: [
          "¿Cómo interactúan las capas con !important?",
          "¿Cómo integrarías estilos de terceros dentro de una capa de baja prioridad?"
        ]
      },
      quiz: {
        question: "Entre un estilo dentro de '@layer components' con selector '#id .class' y un estilo fuera de cualquier @layer con selector 'p', ¿cuál gana?",
        options: [
          "El estilo 'p' sin capa, porque los estilos sin capa (unlayered) vencen a cualquier capa",
          "El estilo '#id .class', por su mayor especificidad numérica",
          "Se produce un empate resuelto por orden alfabético",
          "El navegador ignora los estilos sin capa si existe @layer"
        ],
        correctIndex: 0,
        explanation: "En la especificación oficial de Cascade Layers, cualquier estilo escrito fuera de un @layer tiene prioridad superior sobre los estilos dentro de capas para garantizar retrocompatibilidad."
      }
    },
    {
      id: "css-21",
      title: "¿Qué es la función :has() y por qué es revolucionaria?",
      level: "avanzado",
      tags: [":has()", "Parent Selector", "Relational Pseudo-class", "Lógica CSS"],
      response:
        "`:has()` es la pseudo-clase relacional de CSS, históricamente conocida como el **selector de padre**. Permite seleccionar y aplicar estilos a un elemento ancestro o hermano previo en base a los hijos o descendientes que contiene (`.card:has(img)` o `form:has(input:invalid)`). Resuelve de forma nativa en la hoja de estilos patrones que antes exigían MutationObservers, state management o event listeners en JavaScript, con un rendimiento de matching ultra optimizado en el motor del navegador.",
      codeExample: {
        language: "css",
        code: `/* 1. Seleccionar el contenedor padre si contiene una imagen destacada */
.article-card:has(.featured-image) {
  grid-column: span 2;
  border-color: #6366f1;
}

/* 2. Seleccionar el formulario si algún input es inválido */
form:has(input:invalid) button[type="submit"] {
  opacity: 0.5;
  pointer-events: none;
}`,
        explanation: ":has() actúa como selector relacional de ancestros y hermanos previos, reduciendo drásticamente la necesidad de JavaScript."
      },
      visualDiagram: {
        id: "diag-has-selector",
        title: "Selector Relacional :has() (El 'Parent Selector' Nativo)",
        caption: "La presencia o estado de un hijo (ej. input inválido) viaja hacia arriba para dar estilo al contenedor padre.",
        diagramType: "css-has-parent-selector"
      },
      interviewTips: {
        whatInterviewersWant: "Explicar cómo :has() elimina código JavaScript innecesario y su limitación de no poder anidar un :has() dentro de otro :has().",
        commonPitfalls: ["Intentar anidar ':has(:has(...))', lo cual es inválido por especificación para evitar loops de evaluación infinitos."],
        followUps: [
          "¿Qué implicaciones de rendimiento tiene :has() en selectores complejos?",
          "¿Cómo usarías :has() para estilizar un formulario según la validez de sus campos?"
        ]
      },
      quiz: {
        question: "¿Qué permite hacer la pseudo-clase :has() que antes era imposible en CSS puro?",
        options: [
          "Seleccionar y dar estilos a un elemento padre o ancestro según el estado o presencia de sus hijos",
          "Crear variables locales que no se hereden",
          "Modificar el valor de un atributo HTML directamente",
          "Interrumpir la descarga de una imagen pesada"
        ],
        correctIndex: 0,
        explanation: ":has() es el selector relacional que permite evaluar descendientes para dar estilo a elementos ancestros o hermanos anteriores sin JavaScript."
      }
    },
    {
      id: "css-22",
      title: "¿Cómo se optimiza el rendimiento del CSS en aplicaciones grandes?",
      level: "avanzado",
      tags: ["CSS Performance", "content-visibility", "Critical CSS", "Containment", "Core Web Vitals"],
      response:
        "La optimización de CSS a escala empresarial impacta directamente en Core Web Vitals (FCP, LCP, CLS): 1) **Critical CSS**: Extraer e inyectar inline en el `<head>` los estilos críticos de la primera pantalla y cargar el resto asíncronamente con `<link rel='preload' as='style'>`. 2) **content-visibility: auto**: Salta el renderizado (layout y pintura) de elementos fuera del viewport hasta que el usuario hace scroll hacia ellos, acelerando la carga inicial hasta un 70%. 3) **contain-intrinsic-size**: Reserva el espacio geométrico de elementos con content-visibility para evitar layout shifts (CLS). 4) **Evitar @import en CSS**: Ya que crea peticiones secuenciales en cascada bloqueantes.",
      codeExample: {
        language: "css",
        code: `/* 1. Optimización masiva de listas largas de cards */
.feed-item {
  /* El navegador omite el layout y paint mientras esté fuera de pantalla */
  content-visibility: auto;
  /* Dimensiones estimadas de reserva para garantizar scrollbar fluido y 0 CLS */
  contain-intrinsic-size: auto 320px;
}

/* 2. Aceleración de transiciones con capas promovidas limpiamente */
.interactive-widget {
  contain: layout paint;
  will-change: transform;
}`,
        explanation: "content-visibility: auto es la virtualización nativa del navegador en CSS puro sin dependencias."
      },
      visualDiagram: {
        id: "diag-performance-path",
        title: "Optimización del Critical Rendering Path y Carga de CSS",
        caption: "Critical CSS inline en <head> logra FCP en 0.5s; el CSS no crítico se difiere de forma asíncrona.",
        diagramType: "css-performance-critical-path"
      },
      interviewTips: {
        whatInterviewersWant: "Conocimiento de Core Web Vitals, el costo de las cascadas de red (@import) y APIs modernas de renderizado como content-visibility.",
        commonPitfalls: ["Usar content-visibility: auto sin contain-intrinsic-size, lo que provoca que el scrollbar salte de forma errática."],
        followUps: [
          "¿Qué es el Critical CSS y cómo se extrae?",
          "¿Cómo detectarías y eliminarías CSS no utilizado en producción?"
        ]
      },
      quiz: {
        question: "¿Qué hace la propiedad 'content-visibility: auto' en elementos fuera del viewport?",
        options: [
          "Omite completamente su fase de Layout y Paint hasta que el usuario se aproxima a ellos con el scroll",
          "Los convierte en display: none permanentemente",
          "Comprime sus imágenes en formato WebP en el cliente",
          "Reduce su especificidad a cero automáticamente"
        ],
        correctIndex: 0,
        explanation: "content-visibility: auto indica al motor del navegador que no gaste ciclos de CPU en calcular geometría ni pintar elementos que el usuario aún no ve."
      }
    },

    // ==========================================
    // === EXPERTO (23 - 27) ====================
    // ==========================================
    {
      id: "css-23",
      title: "¿Qué es CSS Containment (contain) y cuándo se usa?",
      level: "experto",
      tags: ["contain", "CSS Containment", "Reflow Isolation", "Paint", "Layout"],
      response:
        "**CSS Containment (`contain`)** es una directiva para el motor de renderizado que declara que el subárbol de un elemento es independiente del resto de la página. Sus valores son: `layout` (mutaciones de geometría en sus hijos no provocan reflow en el resto del documento), `paint` (sus descendientes no pueden pintar fuera de sus límites; crea un stacking context), `size` (el tamaño del elemento se calcula sin examinar a sus hijos) y los shorthands `contain: content` (layout + paint) y `contain: strict` (layout + paint + size). Es crucial para aislar widgets dinámicos pesados y evitar caídas de FPS en feeds de alta frecuencia.",
      codeExample: {
        language: "css",
        code: `/* Widget financiero con actualizaciones dinámicas a 60 FPS */
.live-stock-ticker {
  /* Aísla layout y pintura: mutaciones internas no disparan reflow global */
  contain: content;
  /* Shorthand equivalente a: contain: layout paint; */
}

/* Modal completamente estricto e independiente */
.isolated-dialog {
  contain: strict;
  /* Shorthand equivalente a: contain: size layout paint; */
}`,
        explanation: "contain actúa como un cortafuegos que confina el cálculo de Reflow y Repaint al subárbol del elemento."
      },
      visualDiagram: {
        id: "diag-containment",
        title: "Barrera de Aislamiento con CSS Containment (contain: content)",
        caption: "Las mutaciones del DOM interno quedan confinadas al subárbol sin propagar Reflow al documento global.",
        diagramType: "css-containment-boundary"
      },
      interviewTips: {
        whatInterviewersWant: "Entender el funcionamiento del motor de renderizado en aplicaciones a escala y cómo evitar reflows globales en el DOM.",
        commonPitfalls: ["Confundir 'contain' con 'container-type' (el primero aísla render; el segundo habilita Container Queries)."],
        followUps: [
          "¿Qué diferencia hay entre contain: layout, paint, size y content?",
          "¿Cómo mejora content-visibility: auto el renderizado de páginas largas?"
        ]
      },
      quiz: {
        question: "¿Qué beneficio de rendimiento aporta aplicar 'contain: layout' a un componente complejo?",
        options: [
          "Garantiza que cualquier cambio en las dimensiones de sus hijos no forzará recalcular el Layout del resto de la página",
          "Convierte el componente en un canvas WebGL acelerado",
          "Evita que el navegador descargue las fuentes tipográficas del componente",
          "Fija las dimensiones del componente a 100vw"
        ],
        correctIndex: 0,
        explanation: "contain: layout aísla el árbol de layout: el navegador sabe que ningún hijo modificará la geometría de los elementos exteriores."
      }
    },
    {
      id: "css-24",
      title: "¿Qué son los Scroll-driven Animations en CSS?",
      level: "experto",
      tags: ["Scroll-driven Animations", "animation-timeline", "scroll()", "view()", "GPU"],
      response:
        "Las Scroll-driven Animations permiten controlar el avance de animaciones CSS en base al progreso del scrollbar o a la posición de un elemento dentro del viewport, en lugar de una duración temporal fija. Utilizan dos funciones: `animation-timeline: scroll()` (sincronizada con el desplazamiento vertical o de un contenedor) y `animation-timeline: view()` (sincronizada con la visibilidad del elemento al cruzar el viewport). Su ventaja arquitectónica crítica es que **se ejecutan al 100% en el hilo GPU Compositor**, garantizando 60/120 FPS sin listeners pasivos de scroll en JavaScript ni dependencias de librerías externas.",
      codeExample: {
        language: "css",
        code: `/* 1. Barra de progreso de lectura ligada al scroll de la página */
@keyframes progressWidth {
  from { transform: scaleX(0); }
  to   { transform: scaleX(1); }
}

.reading-progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: #6366f1;
  transform-origin: left;
  animation: progressWidth linear;
  animation-timeline: scroll(root block);
}

/* 2. Tarjeta con efecto reveal al entrar en pantalla */
@keyframes cardReveal {
  from { opacity: 0; transform: translateY(50px); }
  to   { opacity: 1; transform: translateY(0); }
}

.timeline-card {
  animation: cardReveal linear both;
  animation-timeline: view();
  animation-range: entry 10% cover 30%;
}`,
        explanation: "Se ejecutan en el hilo Compositor de la GPU sin consumir ciclos de CPU en el hilo principal de JavaScript."
      },
      visualDiagram: {
        id: "diag-scroll-driven",
        title: "Scroll-driven Animations: Timeline de Scroll y View",
        caption: "El avance del scrollbar o la entrada del elemento controla la animación directamente en la GPU sin JS.",
        diagramType: "css-scroll-driven-animations"
      },
      interviewTips: {
        whatInterviewersWant: "Dominar los nuevos estándares de animación web (Scroll-driven y View Transitions) para sustituir librerías pesadas de parallax.",
        commonPitfalls: ["No especificar animation-range en animation-timeline: view(), lo que hace que la animación empiece y termine en los límites por defecto."],
        followUps: [
          "¿Qué diferencia hay entre scroll() y view() timelines?",
          "¿Cómo garantizas un fallback para navegadores sin soporte (@supports)?"
        ]
      },
      quiz: {
        question: "¿Por qué las Scroll-driven Animations nativas en CSS superan a las implementaciones clásicas con listeners en JavaScript?",
        options: [
          "Porque corren directamente en el hilo del Compositor de la GPU, inmunes al lag del hilo principal de JS",
          "Porque comprimen los fotogramas clave en WebAssembly",
          "Porque eliminan el renderizado de la barra de scroll",
          "Porque solo funcionan en pantallas táctiles"
        ],
        correctIndex: 0,
        explanation: "Al no pasar por el hilo principal de JavaScript, el desplazamiento y la animación se mantienen perfectamente sincronizados a 60 o 120 FPS incluso si JS está ocupado."
      }
    },
    {
      id: "css-25",
      title: "¿Qué es @scope en CSS y cómo cambia la encapsulación de estilos?",
      level: "experto",
      tags: ["@scope", "Donut Scoping", "Encapsulación", "CSS Modules", "Shadow DOM"],
      response:
        "`@scope` es la directiva estándar de CSS que permite limitar el alcance de un grupo de selectores a un subárbol del DOM (Scoping Root) con la opción de definir una frontera de exclusión (Scoping Limit): `@scope (.card) to (.card__content) { ... }`. Esto crea el patrón **Donut Scoping**: los estilos afectan a la tarjeta y a su encabezado, pero se detienen exactamente al entrar en el contenido interno (por ejemplo, markdown o comentarios de usuario), protegiéndolo de colisiones. Además, introduce la regla de **Proximidad de Alcance (Scope Proximity)**: ante igual especificidad, siempre gana el selector cuyo scope raíz esté más cerca en el DOM.",
      codeExample: {
        language: "css",
        code: `/* Donut Scoping: Aplica a .card pero se detiene en .content */
@scope (.card) to (.content) {
  /* Da estilo a párrafos o títulos de la card */
  p {
    color: #64748b;
    font-size: 0.875rem;
  }

  /* .content y todo lo que esté dentro de él queda 100% protegido */
}

/* Proximidad de Alcance: el scope más cercano al nodo gana */
@scope (.theme-light) {
  a { color: blue; }
}

@scope (.theme-dark) {
  a { color: cyan; } /* Si están anidados, gana el más próximo sin importar especificidad */
}`,
        explanation: "@scope ofrece encapsulación nativa sin necesidad de Shadow DOM ni compiladores de hashing como CSS Modules."
      },
      visualDiagram: {
        id: "diag-donut-scoping",
        title: "Encapsulación con @scope y Donut Scoping",
        caption: "@scope (.card) to (.content): Estilos aplicados al contenedor pero excluidos del hueco interno del donut.",
        diagramType: "css-scope-donut-scoping"
      },
      interviewTips: {
        whatInterviewersWant: "Conocer las soluciones nativas modernas de encapsulación frente a herramientas externas como CSS Modules, BEM o Shadow DOM.",
        commonPitfalls: ["Confundir el límite de exclusión con un selector descendiente normal (to () define dónde deja de aplicarse el estilo)."],
        followUps: [
          "¿Qué diferencia hay entre @scope y el aislamiento del Shadow DOM?",
          "¿Qué es el 'donut scoping' y para qué sirve?"
        ]
      },
      quiz: {
        question: "¿Qué es el concepto de 'Donut Scoping' que habilita la directiva @scope?",
        options: [
          "Definir un elemento raíz donde inician los estilos y un elemento límite interior donde se dejan de aplicar",
          "Crear bordes circulares automáticos en avatares de usuario",
          "Aplicar estilos únicamente a elementos que tengan forma de anillo SVG",
          "Dividir una hoja de estilos en 8 partes iguales"
        ],
        correctIndex: 0,
        explanation: "Donut Scoping permite que un componente padre de estilos a su estructura exterior mientras deja el 'hueco interior' (ej. contenido enriquecido) libre de contaminación."
      }
    },
    {
      id: "css-26",
      title: "¿Qué son las View Transitions API y cómo se integran con CSS?",
      level: "experto",
      tags: ["View Transitions", "startViewTransition", "Animaciones SPA", "Cross-Document"],
      response:
        "La **View Transitions API** permite crear transiciones visuales y morphings animados entre diferentes estados de la página (tanto en SPAs mediante `document.startViewTransition()` como en MPAs mediante `@view-transition { navigation: auto; }`). El navegador captura instantáneas del estado anterior y posterior, generando un pseudo-árbol temporal en el DOM: `::view-transition` ➔ `::view-transition-group` ➔ `::view-transition-old` (captura saliente) y `::view-transition-new` (captura entrante). Mediante la propiedad CSS `view-transition-name: hero;`, elementos coincidentes se interpolan en posición y tamaño con fluidez de 60 FPS.",
      codeExample: {
        language: "css",
        code: `/* 1. Habilitar transiciones nativas entre páginas MPA */
@view-transition {
  navigation: auto;
}

/* 2. Vincular un elemento para morphing entre vistas */
.product-hero-image {
  view-transition-name: product-hero;
}

/* 3. Personalizar la animación en el pseudo-árbol generado */
::view-transition-old(product-hero) {
  animation: 0.3s ease-out both fade-out;
}

::view-transition-new(product-hero) {
  animation: 0.3s ease-out both fade-in;
}`,
        explanation: "La View Transitions API sustituye bibliotecas complejas de animación compartida como Framer Motion en transiciones de página."
      },
      visualDiagram: {
        id: "diag-view-transitions-tree",
        title: "Árbol de Pseudo-elementos de la View Transitions API",
        caption: "::view-transition ➔ ::view-transition-group ➔ Cross-fade entre captura ::view-transition-old y ::view-transition-new.",
        diagramType: "css-view-transitions-tree"
      },
      interviewTips: {
        whatInterviewersWant: "Explicar cómo desacoplar la lógica de animación de las librerías de enrutamiento y cómo los navegadores manejan las capturas en memoria.",
        commonPitfalls: ["Asignar el mismo 'view-transition-name' a múltiples elementos simultáneamente en la misma pantalla (deben ser nombres únicos)."],
        followUps: [
          "¿Cómo funcionan las transiciones entre documentos (cross-document) en MPAs?",
          "¿Cómo respetarías prefers-reduced-motion en una View Transition?"
        ]
      },
      quiz: {
        question: "¿Qué requisito es indispensable para la propiedad 'view-transition-name' en una vista activa?",
        options: [
          "Cada valor de view-transition-name debe ser único en la página en un momento dado",
          "Debe declararse obligatoriamente en el elemento <body>",
          "Solo puede aplicarse a etiquetas <img> o <video>",
          "Requiere una clave pública de Web Animations API"
        ],
        correctIndex: 0,
        explanation: "view-transition-name actúa como un identificador único para que el navegador sepa emparejar la captura del estado saliente con la del entrante."
      }
    },
    {
      id: "css-27",
      title: "¿Cómo implementarías un design system con CSS puro usando @layer, custom properties y @container?",
      level: "experto",
      tags: ["Design System", "@layer", "Custom Properties", "@container", "Arquitectura"],
      response:
        "Una arquitectura de Design System de escala empresarial en CSS puro moderno se construye en 3 niveles desacoplados: 1) **Capa de Tokens (`@layer tokens`)**: Custom Properties en `:root` que definen primitivas agnósticas (paleta cruda, escala rem, sombras) y tokens semánticos (color de fondo, acentos, superficies). 2) **Jerarquía de Capas (`@layer reset, base, components, utilities`)**: Garantiza que las clases utilitarias (`.hidden`, `.text-brand`) siempre ganen a los componentes sin `!important`. 3) **Componentes Autónomos con `@container` y `:has()`**: Cada componente se auto-adapta al ancho de su padre y gestiona su lógica de variantes internamente, eliminando la necesidad de Tailwind compilado o librerías de CSS-in-JS.",
      codeExample: {
        language: "css",
        code: `/* 1. Arquitectura de Capas de Cascada */
@layer tokens, reset, base, components, utilities;

/* 2. Tokens de Diseño Globales */
@layer tokens {
  :root {
    --color-primary: #6366f1;
    --radius-md: 8px;
    --space-unit: 1rem;
  }
}

/* 3. Componentes Autónomos con Container Queries */
@layer components {
  .design-card {
    container-type: inline-size;
    border-radius: var(--radius-md);
    border: 1px solid var(--color-primary);
  }

  @container (min-width: 480px) {
    .design-card {
      display: grid;
      grid-template-columns: auto 1fr;
    }
  }
}`,
        explanation: "Esta arquitectura produce un CSS modular, mantenible y sin dependencias de frameworks o herramientas de compilación."
      },
      visualDiagram: {
        id: "diag-design-system",
        title: "Arquitectura de Design System en CSS Puro Moderno",
        caption: "Tier 1: Design Tokens (:root) ➔ Tier 2: Cascade Layers (@layer) ➔ Tier 3: Componentes Autónomos (@container).",
        diagramType: "css-design-system-architecture"
      },
      interviewTips: {
        whatInterviewersWant: "Comprobar si posees visión de Principal Frontend Architect para diseñar sistemas de diseño robustos sin sobredependencia de herramientas externas.",
        commonPitfalls: ["No estructurar un orden claro de capas al inicio del archivo o dispersar variables en múltiples selectores arbitrarios."],
        followUps: [
          "¿Cómo versionarías y distribuirías los design tokens a varios equipos?",
          "¿Cómo evitarías que los consumidores del design system sobrescriban estilos internos?"
        ]
      },
      quiz: {
        question: "¿Cuál es la principal ventaja de estructurar un Design System con @layer sobre un enfoque clásico con BEM y SCSS?",
        options: [
          "Garantiza el orden de prioridad de estilos explícitamente sin importar la especificidad ni el orden de importación de archivos",
          "Hace que los navegadores desactiven el motor de renderizado antiguo",
          "Evita que se tengan que escribir nombres de clases en HTML",
          "Reduce el tamaño de las fuentes TrueType automáticamente"
        ],
        correctIndex: 0,
        explanation: "Cascade Layers permite que los equipos consuman componentes y apliquen utilidades de diseño con total predictibilidad, eliminando las guerras de especificidad."
      }
    }
  ]
};

export default questionsCSS;
