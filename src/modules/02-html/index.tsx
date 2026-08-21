import { ISection } from "../../types";

export const questionsHTML: ISection = {
  title: "HTML",
  collapse: "collapseHTML",
  icon: "html",
  questions: [
    // === BÁSICO ===
    {
      title: "¿Qué es HTML y para qué se utiliza?",
      response:
        "HTML (HyperText Markup Language) es el lenguaje de marcado estándar para crear la estructura de páginas web. Define elementos como encabezados, párrafos, enlaces, imágenes, formularios, etc.",
      level: "basico"
    },
    {
      title: "¿Cuál es la diferencia entre etiquetas de bloque y en línea?",
      response:
        "Las etiquetas de bloque ocupan todo el ancho disponible y empiezan en nueva línea (div, p, h1). Las etiquetas en línea solo ocupan el espacio de su contenido (span, a, strong).",
      level: "basico"
    },
    {
      title: "¿Qué es el DOCTYPE en HTML?",
      response:
        "Es una declaración que indica al navegador la versión de HTML que se está utilizando, asegurando el renderizado correcto. En HTML5 se usa <!DOCTYPE html>.",
      level: "basico"
    },
    {
      title: "¿Qué diferencia hay entre <div> y <span>?",
      response:
        "<div> es un contenedor de bloque, usado para agrupar secciones grandes. <span> es un contenedor en línea, usado para resaltar o dar estilo a un texto específico dentro de un párrafo.",
      level: "basico"
    },
    {
      title: "¿Qué son los atributos en HTML? Da ejemplos.",
      response:
        "Son propiedades que agregan información adicional a las etiquetas. Ejemplo: <img src='imagen.jpg' alt='Descripción'> donde src y alt son atributos.",
      level: "basico"
    },
    {
      title: "¿Para qué sirve la etiqueta <a> en HTML?",
      response:
        "Sirve para crear enlaces (hipervínculos) a otras páginas o recursos. Se usa con el atributo href, por ejemplo: <a href='https://example.com'>Visitar</a>.",
      level: "basico"
    },
    {
      title: "¿Cuál es la diferencia entre <id> y <class> en HTML?",
      response:
        "id identifica de forma única un elemento en la página. class permite agrupar varios elementos con el mismo estilo o comportamiento. Un id no debe repetirse.",
      level: "basico"
    },
    // === MEDIO ===
    {
      title: "¿Qué es la semántica en HTML y por qué es importante?",
      response:
        "La semántica se refiere al uso de etiquetas con significado, como <header>, <footer>, <article>, <section>. Ayuda a la accesibilidad, SEO, y claridad del código para máquinas y desarrolladores.",
      level: "medio"
    },
    {
      title: "¿Qué diferencia hay entre <strong>/<b> y <em>/<i>?",
      response:
        "<strong> y <em> aportan significado semántico (énfasis importante y énfasis en el tono). <b> y <i> solo cambian la apariencia visual (negrita y cursiva) sin aportar semántica a lectores de pantalla.",
      level: "medio"
    },
    {
      title: "¿Qué son las meta-etiquetas en HTML y cuáles son comunes?",
      response:
        "Son etiquetas dentro de <head> que proveen metadatos. Ejemplos: <meta charset='UTF-8'> para codificación, <meta name='viewport'> para responsive design, <meta name='description'> para SEO.",
      level: "medio"
    },
    {
      title: "¿Qué diferencia hay entre <ol>, <ul> y <dl>?",
      response:
        "<ol> es lista ordenada, <ul> es lista no ordenada y <dl> es lista de definiciones con pares <dt> (término) y <dd> (definición).",
      level: "medio"
    },
    {
      title: "¿Qué es un formulario en HTML y qué elementos lo componen?",
      response:
        "Un formulario (<form>) permite capturar datos del usuario. Incluye inputs (<input>, <textarea>, <select>, <button>) y atributos como action y method (GET/POST).",
      level: "medio"
    },
    {
      title: "¿Qué diferencia hay entre inline, inline-block y block en display?",
      response:
        "inline no inicia en nueva línea y no acepta width/height. block ocupa todo el ancho y empieza en nueva línea. inline-block se comporta como inline pero permite definir alto y ancho.",
      level: "medio"
    },
    {
      title: "¿Qué es el atributo defer y async en <script>?",
      response:
        "async carga y ejecuta el script tan pronto esté disponible (no garantiza orden). defer carga en paralelo pero ejecuta los scripts en orden después de parsear todo el HTML.",
      level: "medio"
    },
    {
      title: "¿Qué son los custom data attributes en HTML (data-*)?",
      response:
        "Son atributos personalizados que comienzan con data-, permiten almacenar información adicional en elementos. Se accede desde JS con element.dataset. Ejemplo: <div data-user-id='123'>.",
      level: "medio"
    },
    // === AVANZADO ===
    {
      title: "¿Qué es la accesibilidad (A11y) en HTML?",
      response:
        "Es la práctica de diseñar contenido web usable por personas con discapacidades. Incluye atributos alt en imágenes, roles ARIA, etiquetas <label> en formularios, navegación por teclado y contraste de colores adecuado.",
      level: "avanzado"
    },
    {
      title: "¿Qué son los atributos ARIA en HTML y para qué se usan?",
      response:
        "ARIA (Accessible Rich Internet Applications) son atributos que mejoran la accesibilidad para lectores de pantalla. Incluyen role (button, dialog), aria-label, aria-hidden, aria-live, aria-expanded.",
      level: "avanzado"
    },
    {
      title: "¿Qué es el atributo srcset en la etiqueta <img>?",
      response:
        "Permite definir múltiples versiones de una imagen para que el navegador elija la más adecuada según la resolución y viewport, optimizando carga y rendimiento en responsive design.",
      level: "avanzado"
    },
    {
      title: "¿Qué diferencia hay entre iframes y Web Components?",
      response:
        "<iframe> inserta otra página completa dentro de la actual con su propio contexto. Web Components (Custom Elements + Shadow DOM) permiten crear componentes encapsulados nativos sin un documento separado.",
      level: "avanzado"
    },
    {
      title: "¿Qué atributos globales avanzados conoces (hidden, contenteditable, tabindex)?",
      response:
        "hidden oculta un elemento del DOM. contenteditable permite editar texto en línea. tabindex define el orden de tabulación: 0 sigue el orden natural, -1 lo excluye del tab, valores positivos definen orden explícito.",
      level: "avanzado"
    },
    {
      title: "¿Qué es el elemento <template> y <slot> en HTML?",
      response:
        "<template> define contenido HTML reutilizable que no se renderiza hasta ser clonado con JS. <slot> permite insertar contenido dinámico dentro de Web Components, actuando como punto de inserción.",
      level: "avanzado"
    },
    {
      title: "¿Qué es el atributo loading='lazy' y cuándo se usa?",
      response:
        "Es un atributo nativo para imágenes e iframes que difiere su carga hasta que estén cerca del viewport. Mejora el LCP y reduce el consumo de datos sin necesidad de bibliotecas externas.",
      level: "avanzado"
    },
    // === EXPERTO ===
    {
      title: "¿Qué es el Shadow DOM y cómo se relaciona con HTML?",
      response:
        "Es una API de Web Components que encapsula el DOM y los estilos de un componente, evitando colisiones CSS. Crea un árbol DOM aislado (shadow tree) dentro de un host element. Se accede con attachShadow({ mode: 'open' }).",
      level: "experto"
    },
    {
      title: "¿Cuál es la diferencia entre HTML y XHTML?",
      response:
        "XHTML es una versión estricta basada en XML donde las etiquetas deben estar siempre cerradas, bien anidadas, y en minúsculas. HTML5 es más flexible y tolerante con errores de sintaxis.",
      level: "experto"
    },
    {
      title: "¿Cómo influye el HTML semántico en el SEO y la accesibilidad?",
      response:
        "Los bots de búsqueda y lectores de pantalla usan la semántica HTML para entender la estructura: <main> identifica el contenido principal, <nav> la navegación, <article> contenido independiente. Mejora el ranking y la usabilidad.",
      level: "experto"
    },
    {
      title: "¿Qué son los Web Components nativos y qué APIs los componen?",
      response:
        "Son componentes HTML reutilizables sin frameworks. Se componen de 3 APIs: Custom Elements (define nuevas etiquetas), Shadow DOM (encapsula estilos), HTML Templates (contenido inerte reutilizable con <template> y <slot>).",
      level: "experto"
    },
    {
      title: "¿Qué es el Content Model en HTML5 y cómo afecta la validación?",
      response:
        "Define qué tipo de contenido puede contener cada elemento: flow, phrasing, embedded, interactive, metadata, sectioning, heading. Un <p> solo acepta phrasing content, por lo que un <div> dentro de <p> es inválido.",
      level: "experto"
    },
    {
      title: "¿Qué es la Speculation Rules API y cómo mejora la navegación?",
      response:
        "Es una API moderna que permite declarar reglas de prerendering/prefetching en un <script type='speculationrules'>. El navegador prerenderiza páginas futuras basándose en probabilidades, logrando navegación prácticamente instantánea.",
      level: "experto"
    }
  ]
};

export default questionsHTML;
