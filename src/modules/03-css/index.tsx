import { ISection } from "../../types";

export const questionsCSS: ISection = {
  title: "CSS",
  collapse: "collapseCSS",
  icon: "css",
  questions: [
    // === BÁSICO ===
    {
      title: "¿Qué es CSS?",
      response:
        "CSS (Cascading Style Sheets) es un lenguaje de estilos que describe la presentación de un documento HTML. Controla diseño, colores, fuentes, disposición visual y animaciones.",
      level: "basico"
    },
    {
      title: "¿Cuál es la diferencia entre inline, internal y external styles?",
      response:
        "Inline: atributo style en el elemento. Internal: etiqueta <style> en el documento. External: archivo .css enlazado con <link>. External es la forma más recomendable para mantenibilidad.",
      level: "basico"
    },
    {
      title: "¿Qué es el Box Model y cuáles son sus componentes?",
      response:
        "El Box Model define cómo se renderizan los elementos. Componentes: content (contenido), padding (espaciado interno), border (borde) y margin (espaciado externo).",
      level: "basico"
    },
    {
      title: "¿Cuál es la diferencia entre display: none y visibility: hidden?",
      response:
        "display: none elimina el elemento del flujo del documento como si no existiera. visibility: hidden lo oculta visualmente pero sigue ocupando espacio en el layout.",
      level: "basico"
    },
    {
      title: "¿Cuál es la diferencia entre em, rem y px?",
      response:
        "px es un valor absoluto. em es relativo al font-size del elemento padre. rem es relativo al font-size del elemento raíz (html), lo que lo hace más predecible.",
      level: "basico"
    },
    {
      title: "¿Qué es el Box-Sizing?",
      response:
        "Es una propiedad que define cómo se calculan width/height. content-box (por defecto) solo incluye contenido. border-box incluye padding y borde, siendo más intuitivo.",
      level: "basico"
    },
    {
      title: "¿Qué es una variable en CSS?",
      response:
        "Son propiedades personalizadas que almacenan valores reutilizables. Se declaran con --nombre y se usan con var(--nombre). Facilitan theming y mantenibilidad.",
      level: "basico"
    },
    // === MEDIO ===
    {
      title: "¿Qué son los Media Queries?",
      response:
        "Son reglas CSS que aplican estilos condicionales según características del dispositivo (ancho, resolución, orientación, prefers-color-scheme). Base del responsive design.",
      level: "medio"
    },
    {
      title: "¿Cuál es la diferencia entre Flexbox y CSS Grid?",
      response:
        "Flexbox es unidimensional (fila o columna) ideal para alinear elementos. Grid es bidimensional, permite trabajar simultáneamente en filas y columnas para layouts complejos. Se complementan.",
      level: "medio"
    },
    {
      title: "¿Qué tipos de especificidad existen en CSS?",
      response:
        "Orden de mayor a menor: !important > inline styles > ID (#) > clases, atributos, pseudo-clases (.) > elementos, pseudo-elementos (p, ::before). La especificidad se calcula como tupla (a,b,c,d).",
      level: "medio"
    },
    {
      title: "¿Qué son las pseudo-clases y pseudo-elementos?",
      response:
        "Pseudo-clases (:hover, :focus, :nth-child, :is, :where) aplican estilos en un estado específico. Pseudo-elementos (::before, ::after, ::placeholder) generan contenido virtual.",
      level: "medio"
    },
    {
      title: "¿Qué diferencia hay entre relative, absolute, fixed y sticky?",
      response:
        "relative: posiciona respecto a su posición original. absolute: respecto a su contenedor posicionado. fixed: fijo en la pantalla incluso con scroll. sticky: combina relative y fixed según el scroll.",
      level: "medio"
    },
    {
      title: "¿Qué es la propiedad z-index y cómo funciona el stacking context?",
      response:
        "z-index controla la superposición en el eje Z. Solo funciona en elementos posicionados. Un nuevo stacking context se crea con position, opacity < 1, transform, filter, o isolation: isolate.",
      level: "medio"
    },
    {
      title: "¿Qué es SASS/SCSS y qué ventajas ofrece?",
      response:
        "Son preprocesadores CSS que añaden variables, anidación, mixins, herencia, funciones y partials. SCSS tiene sintaxis compatible con CSS puro, facilitando la migración.",
      level: "medio"
    },
    {
      title: "¿Qué es BEM?",
      response:
        "BEM (Block, Element, Modifier) es una metodología de nomenclatura CSS. Block: .boton, Element: .boton__icono, Modifier: .boton--grande. Mejora escalabilidad y evita conflictos.",
      level: "medio"
    },
    // === AVANZADO ===
    {
      title: "¿Qué son las animaciones en CSS y cómo se optimizan?",
      response:
        "Se definen con @keyframes y la propiedad animation. Para 60fps, se deben animar solo propiedades que no provocan layout: transform y opacity (GPU-accelerated). Usar will-change con moderación.",
      level: "avanzado"
    },
    {
      title: "¿Qué es CSS Grid y cómo se define un layout complejo?",
      response:
        "Grid permite definir layouts con grid-template-columns, grid-template-rows y grid-template-areas. Soporta fr units, minmax(), auto-fill/auto-fit para grids responsivos sin media queries.",
      level: "avanzado"
    },
    {
      title: "¿Qué son las Container Queries y en qué se diferencian de Media Queries?",
      response:
        "Container Queries (@container) aplican estilos según el tamaño del contenedor padre, no del viewport. Permiten componentes verdaderamente responsivos e independientes del contexto donde se usen.",
      level: "avanzado"
    },
    {
      title: "¿Qué es la función clamp() y cómo se usa en tipografía fluida?",
      response:
        "clamp(min, preferred, max) permite definir valores responsivos sin media queries. Ejemplo: font-size: clamp(1rem, 2.5vw, 2rem) crea tipografía que escala fluidamente entre 1rem y 2rem.",
      level: "avanzado"
    },
    {
      title: "¿Qué son las Cascade Layers (@layer) en CSS?",
      response:
        "Son una forma de organizar la cascada explícitamente. Con @layer base, components, utilities; se controla el orden de prioridad sin depender del orden de los archivos ni de la especificidad.",
      level: "avanzado"
    },
    {
      title: "¿Qué es la función :has() y por qué es revolucionaria?",
      response:
        ":has() es el 'parent selector' de CSS. Permite seleccionar un elemento basándose en sus hijos: .card:has(img) selecciona cards que contienen imágenes. Habilita lógica condicional sin JavaScript.",
      level: "avanzado"
    },
    {
      title: "¿Cómo se optimiza el rendimiento del CSS en aplicaciones grandes?",
      response:
        "Evitar selectores universales (*), reducir profundidad de selectores, usar content-visibility: auto para lazy rendering, minimizar reflows, agrupar propiedades animadas (transform), y usar CSS containment.",
      level: "avanzado"
    },
    // === EXPERTO ===
    {
      title: "¿Qué es CSS Containment (contain) y cuándo se usa?",
      response:
        "La propiedad contain indica al navegador que un elemento es independiente del resto: contain: layout paint style. Mejora el rendimiento al limitar el alcance del reflow/repaint. content-visibility: auto lo aplica automáticamente.",
      level: "experto"
    },
    {
      title: "¿Qué son los Scroll-driven Animations en CSS?",
      response:
        "Son animaciones controladas por el progreso del scroll en lugar del tiempo. Usan animation-timeline: scroll() o view(). Permiten efectos de parallax, reveal y progress bars sin JavaScript.",
      level: "experto"
    },
    {
      title: "¿Qué es @scope en CSS y cómo cambia la encapsulación de estilos?",
      response:
        "@scope permite limitar el alcance de los selectores a un subárbol del DOM: @scope (.card) to (.card__footer) { ... }. Ofrece encapsulación nativa sin Shadow DOM ni convenciones BEM.",
      level: "experto"
    },
    {
      title: "¿Qué son las View Transitions API y cómo se integran con CSS?",
      response:
        "Permiten transiciones fluidas entre estados de página usando ::view-transition-old y ::view-transition-new. Se activan con document.startViewTransition(). CSS controla las animaciones con view-transition-name.",
      level: "experto"
    },
    {
      title: "¿Cómo implementarías un design system con CSS puro usando @layer, custom properties y @container?",
      response:
        "Capas: @layer tokens, reset, base, components, utilities. Tokens como custom properties en :root. Componentes responsivos con @container. Overrides en la capa utilities. Todo con cascade layers para prioridad controlada.",
      level: "experto"
    }
  ]
};

export default questionsCSS;
