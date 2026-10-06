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
      level: "basico",
      visualDiagram: {
        id: "diag-html-document-structure",
        title: "Estructura del Documento HTML5",
        caption: "Árbol jerárquico: DOCTYPE ➔ Elemento raíz <html> ➔ Metadatos en <head> y DOM visible en <body>.",
        diagramType: "html-document-structure"
      },
      codeExample: {
        language: "html",
        code: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Estructura Estándar HTML5</title>
</head>
<body>
  <header>
    <h1>Plataforma Frontend</h1>
  </header>
  <main>
    <p>Estructura básica y semántica para la web moderna.</p>
  </main>
</body>
</html>`,
        explanation: "Esqueleto mínimo estándar W3C para garantizar renderizado predecible en todos los navegadores."
      },
      interviewTips: {
        whatInterviewersWant: "Que entiendas HTML como lenguaje de marcado que define estructura y semántica, separado de presentación (CSS) y comportamiento (JS).",
        commonPitfalls: [
          "Llamar a HTML 'lenguaje de programación'.",
          "Usar HTML para fines de presentación visual en vez de semánticos."
        ],
        followUps: [
          "¿Cómo convierte el navegador el HTML en el DOM?",
          "¿Qué ocurre cuando el navegador encuentra HTML mal formado?"
        ]
      },
      quiz: {
        question: "¿Qué responsabilidad tiene HTML en la arquitectura de una página web?",
        options: [
          "Gestionar la lógica y la interactividad",
          "Definir la apariencia visual",
          "Definir la estructura y el significado del contenido",
          "Almacenar datos en el servidor"
        ],
        correctIndex: 2,
        explanation: "HTML define estructura y semántica; CSS se encarga de la presentación y JavaScript del comportamiento. Separar estas capas mejora la accesibilidad y la mantenibilidad."
      }
    },
    {
      title: "¿Cuál es la diferencia entre etiquetas de bloque y en línea?",
      response:
        "Las etiquetas de bloque ocupan todo el ancho disponible y empiezan en nueva línea (div, p, h1). Las etiquetas en línea solo ocupan el espacio de su contenido (span, a, strong).",
      level: "basico",
      visualDiagram: {
        id: "diag-html-block-vs-inline",
        title: "Elementos de Bloque vs en Línea",
        caption: "Bloques ocupan 100% de la fila con saltos de línea; elementos en línea fluyen dentro del texto horizontal.",
        diagramType: "html-block-vs-inline"
      },
      codeExample: {
        language: "html",
        code: `<!-- Elementos de Bloque: apilamiento vertical automático -->
<div style="background: #3b82f6; color: white; padding: 8px;">
  Bloque (div): Ancho 100%, inicia en nueva línea
</div>
<p style="background: #6366f1; color: white; padding: 8px;">
  Bloque (p): Fuerza un nuevo renglón y acepta margen vertical.
</p>

<!-- Elementos en Línea: flujo horizontal continuo -->
<span style="background: #f59e0b; padding: 4px;">En línea 1 (span)</span>
<a href="#" style="background: #10b981; color: white; padding: 4px;">En línea 2 (a)</a>`,
        explanation: "Demuestra visualmente la ocupación de ancho y la ruptura de renglón entre ambos modelos."
      },
      interviewTips: {
        whatInterviewersWant: "Que expliques el flujo normal del documento y el comportamiento de los elementos bloque e inline.",
        commonPitfalls: [
          "Creer que margin y padding vertical funcionan igual en elementos inline.",
          "Anidar elementos bloque dentro de inline de forma inválida (ej. <div> dentro de <span>)."
        ],
        followUps: [
          "¿Por qué width y height no afectan a un elemento inline?",
          "¿Cómo cambia este modelo con display: flex o grid?"
        ]
      },
      quiz: {
        question: "¿Por qué width y height no tienen efecto sobre un <span> por defecto?",
        options: [
          "Porque necesita el atributo size",
          "Porque es un elemento inline: su tamaño lo determina su contenido",
          "Porque solo admite estilos inline",
          "Porque <span> está obsoleto"
        ],
        correctIndex: 1,
        explanation: "Los elementos inline fluyen dentro de la línea de texto e ignoran width y height. Con display: inline-block o block sí aceptan dimensiones."
      }
    },
    {
      title: "¿Qué es el DOCTYPE en HTML?",
      response:
        "Es una declaración que indica al navegador la versión de HTML que se está utilizando, asegurando el renderizado correcto. En HTML5 se usa <!DOCTYPE html> para activar el Standards Mode.",
      level: "basico",
      visualDiagram: {
        id: "diag-html-doctype-modes",
        title: "Modos de Renderizado del DOCTYPE",
        caption: "Activa el modo estándar completo (Standards Mode) evitando el modo histórico Quirks de IE5.",
        diagramType: "html-doctype-modes"
      },
      interviewTips: {
        whatInterviewersWant: "Que expliques que el DOCTYPE activa el modo estándar frente al quirks mode.",
        commonPitfalls: [
          "Creer que el DOCTYPE es una etiqueta HTML.",
          "Desconocer las consecuencias visuales del quirks mode (box model distinto)."
        ],
        followUps: [
          "¿Qué es el quirks mode y cómo puedes detectarlo con document.compatMode?",
          "¿Por qué el DOCTYPE de HTML5 es tan corto?"
        ]
      },
      quiz: {
        question: "¿Qué ocurre si omites el <!DOCTYPE html> en un documento?",
        options: [
          "Se renderiza como texto plano",
          "No ocurre nada: el DOCTYPE es solo un comentario",
          "El navegador se niega a renderizarlo",
          "El navegador entra en quirks mode y emula comportamientos antiguos, como otro box model"
        ],
        correctIndex: 3,
        explanation: "Sin DOCTYPE el navegador activa el quirks mode por compatibilidad con páginas antiguas. Puedes comprobarlo con document.compatMode ('BackCompat' frente a 'CSS1Compat')."
      }
    },
    {
      title: "¿Qué diferencia hay entre <div> y <span>?",
      response:
        "<div> es un contenedor de bloque, usado para agrupar secciones grandes. <span> es un contenedor en línea, usado para resaltar o dar estilo a un texto específico dentro de un párrafo.",
      level: "basico",
      visualDiagram: {
        id: "diag-html-div-vs-span",
        title: "Uso Arquitectónico: <div> vs <span>",
        caption: "<div> como contenedor estructural de componentes vs <span> como marcador tipográfico.",
        diagramType: "html-div-vs-span"
      },
      codeExample: {
        language: "html",
        code: `<!-- <div> como contenedor estructural de componente -->
<div class="user-card" style="border: 1px solid #3b82f6; padding: 12px; border-radius: 8px;">
  <h3 style="margin: 0 0 8px;">Diego Villa</h3>
  <!-- <span> para estilizar palabras específicas sin quebrar la línea -->
  <p>Estado actual: <span style="color: #10b981; font-weight: bold;">En línea</span></p>
</div>`,
        explanation: "El div encapsula la estructura del componente; el span aporta estilo o interactividad a un fragmento de texto."
      },
      interviewTips: {
        whatInterviewersWant: "Que sepas que ambos son contenedores genéricos sin semántica y que deben ser el último recurso.",
        commonPitfalls: [
          "Abusar de <div> (divitis) cuando existe un elemento semántico adecuado.",
          "Usar <div onClick> en vez de <button>, perdiendo foco y soporte de teclado."
        ],
        followUps: [
          "¿Qué problemas de accesibilidad causa un <div> clicable?",
          "¿Qué elementos semánticos sustituirían a los <div> de un layout típico?"
        ]
      },
      quiz: {
        question: "Necesitas un elemento clicable que ejecute una acción en la página. ¿Qué es lo correcto?",
        options: [
          "<a href=\"#\">",
          "<button type=\"button\">",
          "<div onclick=\"...\">",
          "<span role=\"button\">"
        ],
        correctIndex: 1,
        explanation: "<button> ofrece de forma nativa foco, activación con Enter y Espacio, y el rol correcto para lectores de pantalla. Un <div> clicable no tiene nada de esto."
      }
    },
    {
      title: "¿Qué son los atributos en HTML? Da ejemplos.",
      response:
        "Son propiedades que agregan información adicional a las etiquetas. Ejemplo: <img src='imagen.jpg' alt='Descripción'> donde src y alt son atributos.",
      level: "basico",
      visualDiagram: {
        id: "diag-html-attribute-anatomy",
        title: "Anatomía de Elementos y Atributos",
        caption: "Clave (nombre), operador de asignación '=', valor entre comillas y atributos booleanos.",
        diagramType: "html-attribute-anatomy"
      },
      codeExample: {
        language: "html",
        code: `<!-- Atributos obligatorios de accesibilidad, seguridad y funcionalidad -->
<a
  href="https://cabuweb.com"
  target="_blank"
  rel="noopener noreferrer"
  class="cta-button"
  id="hero-cta"
  aria-label="Ir al sitio oficial de Cabuweb en nueva pestaña"
>
  Explorar Cursos
</a>

<!-- Atributo booleano: su presencia activa el estado true -->
<input type="text" disabled required placeholder="Campo obligatorio">`,
        explanation: "Ilustra atributos estándar de clave-valor y atributos booleanos de presencia."
      },
      interviewTips: {
        whatInterviewersWant: "Que distingas atributos globales y específicos, y la diferencia entre atributos HTML y propiedades del DOM.",
        commonPitfalls: [
          "Confundir atributos (HTML inicial) con propiedades (estado vivo del DOM), por ejemplo value.",
          "Olvidar que los atributos booleanos se activan solo por su presencia (disabled='false' sigue deshabilitado)."
        ],
        followUps: [
          "¿Qué diferencia hay entre getAttribute('value') y element.value?",
          "¿Cómo funcionan los atributos booleanos como disabled o checked?"
        ]
      },
      quiz: {
        question: "En <input value=\"Ana\">, el usuario escribe 'Luis'. ¿Qué devuelve input.getAttribute('value')?",
        options: [
          "null",
          "'Luis'",
          "'Ana'",
          "undefined"
        ],
        correctIndex: 2,
        explanation: "El atributo refleja el valor inicial del HTML. La propiedad input.value refleja el estado vivo ('Luis'). Es la diferencia entre atributos y propiedades del DOM."
      }
    },
    {
      title: "¿Para qué sirve la etiqueta <a> en HTML?",
      response:
        "Sirve para crear enlaces (hipervínculos) a otras páginas o recursos. Se usa con el atributo href, por ejemplo: <a href='https://example.com'>Visitar</a>.",
      level: "basico",
      visualDiagram: {
        id: "diag-html-anchor-navigation",
        title: "Patrones de Navegación con <a>",
        caption: "Navegación externa segura (rel=noopener), rutas internas, saltos ancla (#id) y protocolos.",
        diagramType: "html-anchor-navigation"
      },
      codeExample: {
        language: "html",
        code: `<!-- 1. Enlace externo seguro (evita vulnerabilidades de window.opener) -->
<a href="https://cabuweb.com" target="_blank" rel="noopener noreferrer">
  Sitio Oficial
</a>

<!-- 2. Salto ancla intra-página hacia una sección con ID -->
<a href="#modulo-html">Saltar al Temario de HTML</a>

<!-- 3. Protocolos de acción del sistema operativo -->
<a href="mailto:soporte@cabuweb.com?subject=Consulta">Enviar Correo</a>
<a href="tel:+34900112233">Llamar a Soporte</a>`,
        explanation: "Cubre navegación externa con mitigación de seguridad, navegación por anclas internas y protocolos nativos."
      },
      interviewTips: {
        whatInterviewersWant: "Que conozcas href, target, rel, download y las implicaciones de seguridad y accesibilidad de los enlaces.",
        commonPitfalls: [
          "Usar <a> sin href como botón, o <button> para navegar.",
          "Desconocer el riesgo de tabnabbing con target='_blank' en navegadores antiguos sin rel='noopener'."
        ],
        followUps: [
          "¿Qué hace rel='noopener noreferrer' y por qué era necesario?",
          "¿Cuándo usar un <a> y cuándo un <button>?"
        ]
      },
      quiz: {
        question: "¿Qué hace rel=\"noopener\" en un enlace con target=\"_blank\"?",
        options: [
          "Indica a los buscadores que no sigan el enlace",
          "Precarga la página de destino",
          "Evita que el enlace se abra en una pestaña nueva",
          "Impide que la página abierta acceda a window.opener de la original"
        ],
        correctIndex: 3,
        explanation: "Sin noopener, la página abierta podía usar window.opener.location para redirigir la pestaña original (tabnabbing). Los navegadores modernos lo aplican por defecto con _blank."
      }
    },
    {
      title: "¿Cuál es la diferencia entre <id> y <class> en HTML?",
      response:
        "id identifica de forma única un elemento en la página. class permite agrupar varios elementos con el mismo estilo o comportamiento. Un id no debe repetirse.",
      level: "basico",
      visualDiagram: {
        id: "diag-html-id-vs-class",
        title: "id vs class: Cardinalidad y Especificidad",
        caption: "id único 1:1 con especificidad (0,1,0,0) vs class reutilizable 1:N con especificidad (0,0,1,0).",
        diagramType: "html-id-vs-class"
      },
      codeExample: {
        language: "html",
        code: `<!-- ID único: identificador singular para anclas de URL y acceso directo -->
<section id="panel-principal">
  <!-- Clases reutilizables compuestas -->
  <button class="btn btn-primary btn-large">Guardar Cambios</button>
  <button class="btn btn-secondary btn-large">Cancelar</button>
</section>

<script>
  // ID: recupera exactamente 1 elemento en O(1)
  const panel = document.getElementById('panel-principal');

  // Class: recupera una colección NodeList reutilizable
  const actionButtons = document.querySelectorAll('.btn');
</script>`,
        explanation: "Distingue la unicidad y especificidad del id frente a la modularidad y reutilización de class."
      },
      interviewTips: {
        whatInterviewersWant: "Que expliques unicidad del id, reutilización de class y su impacto en especificidad CSS y en JavaScript.",
        commonPitfalls: [
          "Usar ids para estilos, creando especificidad difícil de sobrescribir.",
          "Duplicar ids en la página, rompiendo labels, ARIA y anclas."
        ],
        followUps: [
          "¿Por qué un id duplicado rompe la accesibilidad de formularios?",
          "¿Qué pasa con los ids al renderizar un componente varias veces (useId en React)?"
        ]
      },
      quiz: {
        question: "¿Qué problema causa tener dos elementos con el mismo id?",
        options: [
          "Ninguno: el navegador los renombra",
          "El HTML no se renderiza",
          "Los estilos dejan de aplicarse a ambos",
          "Rompe asociaciones como label for, aria-labelledby y las anclas, y getElementById devuelve solo el primero"
        ],
        correctIndex: 3,
        explanation: "El id debe ser único. Los duplicados generan comportamiento impredecible en la accesibilidad, en la navegación por anclas y en las consultas JavaScript."
      }
    },
    // === MEDIO ===
    {
      title: "¿Qué es la semántica en HTML y por qué es importante?",
      response:
        "La semántica se refiere al uso de etiquetas con significado, como <header>, <footer>, <article>, <section>. Ayuda a la accesibilidad, SEO, y claridad del código para máquinas y desarrolladores.",
      level: "medio",
      visualDiagram: {
        id: "diag-html-semantic-tree",
        title: "Estructura Semántica W3C",
        caption: "Árbol de landmarks: header, nav, main, article, aside y footer para SEO y accesibilidad.",
        diagramType: "html-semantic-tree"
      },
      codeExample: {
        language: "html",
        code: `<!-- Estructura Semántica Estándar W3C (Accesible y Optimizada para SEO) -->
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Artículo Técnico - Cabuweb</title>
</head>
<body>
  <header>
    <nav aria-label="Navegación principal">
      <ul>
        <li><a href="/">Inicio</a></li>
        <li><a href="/cursos">Cursos</a></li>
      </ul>
    </nav>
  </header>

  <main id="contenido-principal">
    <article>
      <header>
        <h1>Arquitectura Frontend con Web Components</h1>
        <time datetime="2026-09-15">15 de Septiembre, 2026</time>
      </header>
      <section>
        <p>Los Custom Elements y Shadow DOM permiten encapsulación nativa...</p>
      </section>
    </article>

    <aside aria-label="Artículos relacionados">
      <h2>Relacionados</h2>
      <!-- Enlaces laterales -->
    </aside>
  </main>

  <footer>
    <p>&copy; 2026 Cabuweb. Todos los derechos reservados.</p>
  </footer>
</body>
</html>`,
        explanation: "Evita la 'sopa de divs', permitiendo que los lectores de pantalla y motores de búsqueda comprendan los roles de cada sección."
      },
      interviewTips: {
        whatInterviewersWant: "Que relaciones semántica con accesibilidad, SEO y mantenibilidad con ejemplos concretos de landmarks.",
        commonPitfalls: [
          "Usar <section> como sustituto genérico de <div>.",
          "Saltar niveles de encabezado (h1 a h4) por motivos estéticos."
        ],
        followUps: [
          "¿Qué diferencia hay entre <section> y <article>?",
          "¿Cómo usa un lector de pantalla los landmarks para navegar?"
        ]
      },
      quiz: {
        question: "¿Cuándo es correcto usar <article>?",
        options: [
          "Para cualquier bloque que necesite un estilo",
          "Para contenido autocontenido que tiene sentido por sí mismo, como un post, un comentario o una tarjeta de producto",
          "Solo para artículos de prensa",
          "Como sustituto de <main>"
        ],
        correctIndex: 1,
        explanation: "<article> representa una composición independiente y redistribuible. <section> agrupa contenido temático dentro de un documento y normalmente lleva un encabezado."
      }
    },
    {
      title: "¿Qué diferencia hay entre <strong>/<b> y <em>/<i>?",
      response:
        "<strong> y <em> aportan significado semántico (énfasis importante y énfasis en el tono). <b> y <i> solo cambian la apariencia visual (negrita y cursiva) sin aportar semántica a lectores de pantalla.",
      level: "medio",
      visualDiagram: {
        id: "diag-html-semantic-text-formatting",
        title: "Semántica vs Presentación en Formato",
        caption: "strong y em transmiten significado acústico a screen readers; b e i son meramente visuales.",
        diagramType: "html-semantic-text-formatting"
      },
      codeExample: {
        language: "html",
        code: `<!-- strong: Gran importancia / advertencia leída con énfasis por lectores de pantalla -->
<p><strong>Atención:</strong> Guarde sus credenciales antes de salir de la sesión.</p>

<!-- b: Estilístico, resaltar visualmente sin transmitir importancia o urgencia -->
<p>El término <b>Frontend</b> abarca las tecnologías web que ejecutan en el navegador.</p>

<!-- em: Énfasis tónico que altera el sentido o intención de la oración -->
<p>No <em>todos</em> los navegadores implementan la misma especificación al mismo tiempo.</p>

<!-- i: Términos en otro idioma, nombres científicos o voz técnica -->
<p>El perro doméstico se clasifica científicamente como <i>Canis lupus familiaris</i>.</p>`,
        explanation: "Los screen readers alteran el tono de voz ante strong y em, pero ignoran b e i tratándolos como texto plano."
      },
      interviewTips: {
        whatInterviewersWant: "Que distingas el significado semántico (importancia, énfasis) de la presentación visual.",
        commonPitfalls: [
          "Usar <b> o <i> pensando que aportan significado.",
          "Usar <strong> solo para poner texto en negrita sin intención semántica."
        ],
        followUps: [
          "¿Cuándo es correcto usar <b> o <i> en HTML5?",
          "¿Cómo anuncian los lectores de pantalla <strong> y <em>?"
        ]
      },
      quiz: {
        question: "¿Qué diferencia hay entre <strong> y <b>?",
        options: [
          "<strong> está obsoleto en HTML5",
          "<b> es más accesible",
          "Ninguna: son alias",
          "<strong> indica importancia semántica; <b> solo resalta visualmente sin añadir significado"
        ],
        correctIndex: 3,
        explanation: "<strong> comunica importancia (los lectores de pantalla pueden enfatizarla). <b> sirve para llamar la atención sin importancia extra, por ejemplo palabras clave."
      }
    },
    {
      title: "¿Qué son las meta-etiquetas en HTML y cuáles son comunes?",
      response:
        "Son etiquetas dentro de <head> que proveen metadatos. Ejemplos: <meta charset='UTF-8'> para codificación, <meta name='viewport'> para responsive design, <meta name='description'> para SEO.",
      level: "medio",
      visualDiagram: {
        id: "diag-html-meta-head-graph",
        title: "Ecosistema de Meta-Etiquetas del <head>",
        caption: "Configuración de viewport móvil, indexación SEO y tarjetas enriquecidas Open Graph.",
        diagramType: "html-meta-head-graph"
      },
      codeExample: {
        language: "html",
        code: `<!-- Meta tags esenciales para Responsive Design, SEO y Redes Sociales (Open Graph) -->
<head>
  <meta charset="UTF-8">
  <!-- Viewport obligatorio para responsive design sin zoom distorsionado -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <title>Aprende Frontend Moderno | Cabuweb</title>
  <meta name="description" content="Plataforma de preparación técnica para Frontend Engineers con teoría, diagramas y código.">
  
  <!-- Open Graph para compartir en LinkedIn, Twitter y Slack -->
  <meta property="og:title" content="Aprende Frontend Moderno">
  <meta property="og:description" content="Preguntas de entrevista técnica y arquitectura web.">
  <meta property="og:image" content="https://cabuweb.com/og-banner.png">
  <meta property="og:type" content="website">
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
</head>`,
        explanation: "Configura el renderizado móvil, la indexación en Google y las vistas previas enriquecidas en redes sociales."
      },
      interviewTips: {
        whatInterviewersWant: "Que conozcas charset, viewport, description, Open Graph y robots, y su impacto en renderizado, SEO y compartición.",
        commonPitfalls: [
          "Olvidar el meta viewport, rompiendo el diseño responsive en móviles.",
          "Usar user-scalable=no o maximum-scale=1, que perjudica la accesibilidad."
        ],
        followUps: [
          "¿Cómo controlarías la vista previa al compartir un enlace en redes sociales?",
          "¿Por qué meta charset debe aparecer en los primeros 1024 bytes?"
        ]
      },
      quiz: {
        question: "¿Qué meta etiqueta es imprescindible para que un diseño responsive se vea bien en móviles?",
        options: [
          "<meta name=\"description\">",
          "<meta name=\"robots\">",
          "<meta charset=\"UTF-8\">",
          "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">"
        ],
        correctIndex: 3,
        explanation: "Sin la meta viewport, los móviles renderizan la página con un ancho virtual de unos 980px y la reducen, ignorando las media queries pensadas para pantallas pequeñas."
      }
    },
    {
      title: "¿Qué diferencia hay entre <ol>, <ul> y <dl>?",
      response:
        "<ol> es lista ordenada, <ul> es lista no ordenada y <dl> es lista de definiciones con pares <dt> (término) y <dd> (definición).",
      level: "medio",
      visualDiagram: {
        id: "diag-html-lists-types",
        title: "Estructuras de Listas: <ul>, <ol> y <dl>",
        caption: "Listas desordenadas con viñetas, ordenadas con secuencia lógica y pares clave-valor de definición.",
        diagramType: "html-lists-types"
      },
      codeExample: {
        language: "html",
        code: `<!-- 1. Lista no ordenada: menú de navegación sin jerarquía obligatoria -->
<ul>
  <li><a href="/react">React 19</a></li>
  <li><a href="/typescript">TypeScript 5</a></li>
</ul>

<!-- 2. Lista ordenada: secuencia de pasos algorítmica -->
<ol>
  <li>Descargar repositorio con Git</li>
  <li>Instalar dependencias con pnpm</li>
  <li>Ejecutar suite de tests unitarios</li>
</ol>

<!-- 3. Lista de definiciones: pares término/descripción altamente accesibles -->
<dl>
  <dt>DOM</dt>
  <dd>Document Object Model: representación en árbol de los nodos HTML.</dd>
  <dt>AOM</dt>
  <dd>Accessibility Object Model: árbol semántico consumido por lectores de pantalla.</dd>
</dl>`,
        explanation: "dl es semánticamente superior a listas de divs para representar diccionarios, metadatos y glosarios."
      },
      interviewTips: {
        whatInterviewersWant: "Que elijas el tipo de lista según la semántica del contenido.",
        commonPitfalls: [
          "Usar <br> o <div> para simular listas.",
          "Eliminar list-style y perder la semántica de lista en Safari/VoiceOver."
        ],
        followUps: [
          "¿Por qué un menú de navegación suele ser una <ul>?",
          "¿Qué atributos tiene <ol> (start, reversed, type)?"
        ]
      },
      quiz: {
        question: "¿Qué lista es la adecuada para un glosario de términos con sus definiciones?",
        options: [
          "<ul>",
          "<ol>",
          "<dl> con <dt> y <dd>",
          "<menu>"
        ],
        correctIndex: 2,
        explanation: "<dl> representa pares nombre-valor: <dt> para el término y <dd> para su descripción. También sirve para metadatos clave-valor."
      }
    },
    {
      title: "¿Qué es un formulario en HTML y qué elementos lo componen?",
      response:
        "Un formulario (<form>) permite capturar datos del usuario. Incluye inputs (<input>, <textarea>, <select>, <button>) y atributos como action y method (GET/POST).",
      level: "medio",
      visualDiagram: {
        id: "diag-html-form-lifecycle",
        title: "Ciclo y Componentes de Formularios HTML5",
        caption: "Agrupación accesible con fieldset/legend, inputs vinculados a labels y validación nativa.",
        diagramType: "html-form-lifecycle"
      },
      codeExample: {
        language: "html",
        code: `<!-- Formulario Accesible con validación nativa HTML5 sin JavaScript -->
<form action="/api/login" method="POST" class="auth-form" novalidate>
  <fieldset>
    <legend>Credenciales de Acceso</legend>

    <div class="form-group">
      <label for="email">Correo Electrónico:</label>
      <input
        type="email"
        id="email"
        name="email"
        required
        autocomplete="email"
        placeholder="tu@correo.com"
        aria-describedby="email-hint"
      >
      <small id="email-hint">Nunca compartiremos tu correo.</small>
    </div>

    <div class="form-group">
      <label for="password">Contraseña:</label>
      <input
        type="password"
        id="password"
        name="password"
        required
        minlength="8"
        pattern="(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
        title="Debe incluir al menos 8 caracteres, 1 mayúscula y 1 número"
        autocomplete="current-password"
      >
    </div>

    <button type="submit">Iniciar Sesión</button>
  </fieldset>
</form>`,
        explanation: "Utiliza fieldset/legend y atributos aria-describedby para cumplir con las directrices de accesibilidad WCAG 2.2."
      },
      interviewTips: {
        whatInterviewersWant: "Que conozcas el ciclo de vida del formulario, la validación nativa y la importancia de labels accesibles.",
        commonPitfalls: [
          "Usar placeholder en vez de <label>.",
          "Desactivar la validación nativa sin implementar una alternativa accesible."
        ],
        followUps: [
          "¿Cómo funciona la Constraint Validation API?",
          "¿Qué diferencia hay entre los eventos submit e input?"
        ]
      },
      quiz: {
        question: "¿Por qué no debes usar placeholder como sustituto de <label>?",
        options: [
          "Porque placeholder no funciona en Safari",
          "Porque placeholder solo acepta números",
          "Porque desaparece al escribir, suele tener bajo contraste y no siempre se anuncia como nombre accesible",
          "Porque bloquea la validación nativa"
        ],
        correctIndex: 2,
        explanation: "La etiqueta debe estar siempre visible y asociada al campo. El placeholder es solo una pista opcional de formato."
      }
    },
    {
      title: "¿Qué diferencia hay entre inline, inline-block y block en display?",
      response:
        "inline no inicia en nueva línea y no acepta width/height. block ocupa todo el ancho y empieza en nueva línea. inline-block se comporta como inline pero permite definir alto y ancho.",
      level: "medio",
      visualDiagram: {
        id: "diag-html-display-modes",
        title: "Modelos de Visualización: inline vs inline-block vs block",
        caption: "inline fluye en texto sin dimensiones; inline-block admite dimensiones; block ocupa toda la línea.",
        diagramType: "html-display-modes"
      },
      codeExample: {
        language: "html",
        code: `<!-- Demostración de modelos de visualización con estilos inline -->
<style>
  .box-inline { display: inline; background: #93c5fd; padding: 4px; } /* Ignora width y height */
  .box-inline-block { display: inline-block; width: 140px; height: 36px; background: #86efac; padding: 4px; }
  .box-block { display: block; width: 100%; height: 44px; background: #fca5a5; padding: 4px; }
</style>

<span class="box-inline">Inline (Fluye con texto)</span>
<div class="box-inline-block">Inline-Block (Caja en línea)</div>
<div class="box-block">Block (Ocupa fila completa con salto)</div>`,
        explanation: "inline-block permite dimensiones precisas de caja sin romper el flujo horizontal de la fila."
      },
      interviewTips: {
        whatInterviewersWant: "Que expliques el comportamiento de cada modo y cuándo inline-block resuelve problemas reales.",
        commonPitfalls: [
          "Desconocer el espacio en blanco entre elementos inline-block.",
          "Usar inline-block para layouts complejos en lugar de Flexbox o Grid."
        ],
        followUps: [
          "¿De dónde sale el espacio entre elementos inline-block y cómo se elimina?",
          "¿Qué hace display: contents?"
        ]
      },
      quiz: {
        question: "¿Qué combinación ofrece display: inline-block?",
        options: [
          "Oculta el elemento sin quitarle espacio",
          "Ocupa todo el ancho e ignora width",
          "Fluye en línea con el texto pero acepta width, height y márgenes verticales",
          "Convierte a los hijos en flex items"
        ],
        correctIndex: 2,
        explanation: "inline-block se coloca en línea como el texto pero se dimensiona como un bloque. Su efecto secundario es el espacio en blanco entre elementos del HTML."
      }
    },
    {
      title: "¿Qué es el atributo defer y async en <script>?",
      response:
        "async carga y ejecuta el script tan pronto esté disponible (no garantiza orden). defer carga en paralelo pero ejecuta los scripts en orden después de parsear todo el HTML.",
      level: "medio",
      visualDiagram: {
        id: "diag-html-script-loading",
        title: "Líneas de Tiempo de Carga de Scripts",
        caption: "Bloqueo síncrono del parser vs descarga asíncrona inmediata vs defer ordenado.",
        diagramType: "html-script-loading"
      },
      codeExample: {
        language: "html",
        code: `<!-- Estrategias de carga de JavaScript y bloqueo del hilo principal -->

<!-- 1. Normal (Bloqueante): Detiene el parser HTML mientras descarga y ejecuta -->
<script src="legacy.js"></script>

<!-- 2. Async: Descarga en paralelo, ejecuta de inmediato en cuanto llega (orden impredecible) -->
<!-- Ideal para analytics o trackers independientes que no dependen del DOM -->
<script src="https://analytics.google.com/gtag.js" async></script>

<!-- 3. Defer: Descarga en paralelo, garantiza ejecución en orden cronológico tras parsear el DOM -->
<!-- Recomendado para bundles de la aplicación y librerías que interactúan con el DOM -->
<script src="vendor.js" defer></script>
<script src="app.js" defer></script>`,
        explanation: "defer es el estándar recomendado para apps modernas porque no bloquea el First Contentful Paint (FCP)."
      },
      interviewTips: {
        whatInterviewersWant: "Que expliques cómo cada uno afecta al parsing del HTML, el orden de ejecución y cuándo usar cada uno.",
        commonPitfalls: [
          "Usar async en scripts que dependen entre sí.",
          "No saber que los type='module' son defer por defecto."
        ],
        followUps: [
          "¿Cómo se comportan los <script type='module'> respecto a defer?",
          "¿Cuándo se dispara DOMContentLoaded con scripts defer?"
        ]
      },
      quiz: {
        question: "Tienes tres scripts que dependen uno del otro y deben ejecutarse en orden sin bloquear el parsing. ¿Qué usas?",
        options: [
          "async",
          "defer",
          "type=\"text/plain\"",
          "Ninguno: colocarlos en el <head> sin atributos"
        ],
        correctIndex: 1,
        explanation: "defer descarga en paralelo y ejecuta en orden de aparición cuando el HTML termina de parsearse. async ejecuta en cuanto cada script llega, sin garantizar el orden."
      }
    },
    {
      title: "¿Qué son los custom data attributes en HTML (data-*)?",
      response:
        "Son atributos personalizados que comienzan con data-, permiten almacenar información adicional en elementos. Se accede desde JS con element.dataset. Ejemplo: <div data-user-id='123'>.",
      level: "medio",
      visualDiagram: {
        id: "diag-html-dataset-binding",
        title: "Enlace Bidireccional de data-*",
        caption: "Atributos en marcado conectados con selectores CSS y la API dataset en JavaScript.",
        diagramType: "html-dataset-binding"
      },
      codeExample: {
        language: "html",
        code: `<!-- Elemento con atributos data-* personalizados -->
<article
  id="card-101"
  data-category="frontend"
  data-published-year="2026"
  data-is-premium="true"
>
  Tarjeta de Contenido
</article>

<script>
  const article = document.getElementById('card-101');

  // Lectura con dataset (conversión automática a camelCase)
  console.log(article.dataset.category);      // 'frontend'
  console.log(article.dataset.publishedYear); // '2026'

  // Mutación reactiva
  article.dataset.isPremium = 'false';
</script>`,
        explanation: "Permite enlazar metadata del DOM con scripts o selectores CSS (ej. [data-is-premium='true'])."
      },
      interviewTips: {
        whatInterviewersWant: "Que sepas acceder a ellos con dataset y cuándo son apropiados frente a estado en JavaScript.",
        commonPitfalls: [
          "Guardar datos sensibles en data-* (son visibles en el HTML).",
          "Usar data-* como fuente de verdad del estado de la aplicación."
        ],
        followUps: [
          "¿Cómo se convierte data-user-id a la propiedad dataset correspondiente?",
          "¿Cómo usarías data-* en selectores CSS o en tests E2E?"
        ]
      },
      quiz: {
        question: "¿Cómo accedes desde JavaScript al atributo data-user-id?",
        options: [
          "element.dataset.userId",
          "element.dataset['user-id']",
          "element.attributes.userId",
          "element.data.userId"
        ],
        correctIndex: 0,
        explanation: "dataset convierte los nombres kebab-case en camelCase: data-user-id pasa a ser dataset.userId. Los valores siempre son strings."
      }
    },
    // === AVANZADO ===
    {
      title: "¿Qué es la accesibilidad (A11y) en HTML?",
      response:
        "Es la práctica de diseñar contenido web usable por personas con discapacidades. Incluye atributos alt en imágenes, roles ARIA, etiquetas <label> en formularios, navegación por teclado y contraste de colores adecuado.",
      level: "avanzado",
      visualDiagram: {
        id: "diag-html-a11y-pillars",
        title: "Los 4 Pilares de Accesibilidad WCAG (POUR)",
        caption: "Perceptible, Operable, Comprensible y Robusto para tecnologías asistivas.",
        diagramType: "html-a11y-pillars"
      },
      codeExample: {
        language: "html",
        code: `<!-- 1. Enlace de salto (Skip-link) para saltar menús con tabulador -->
<a href="#main-content" class="skip-link">Saltar al contenido principal</a>

<!-- 2. Imagen informativa con alt descriptivo -->
<img src="/diagrama-arquitectura.webp" alt="Diagrama de flujo unidireccional de datos en React 19">

<!-- 3. Botón semántico con anuncio de estado expandible -->
<button
  type="button"
  aria-expanded="false"
  aria-controls="menu-navegacion"
  id="btn-menu"
>
  Menú Principal
</button>

<!-- 4. Contenedor principal enfocable tras el salto -->
<main id="main-content" tabindex="-1">
  <h1>Arquitectura Accesible</h1>
</main>`,
        explanation: "Garantiza navegación completa por teclado, compatibilidad con screen readers y evitación de trampas de foco."
      },
      interviewTips: {
        whatInterviewersWant: "Que demuestres conocimiento práctico: semántica, teclado, foco, contraste, alternativas textuales y ARIA solo cuando haga falta.",
        commonPitfalls: [
          "Pensar que añadir ARIA soluciona la accesibilidad por sí solo.",
          "Eliminar outline de :focus sin proporcionar una alternativa visible."
        ],
        followUps: [
          "¿Cómo probarías la accesibilidad de una página solo con el teclado?",
          "¿Qué diferencia hay entre :focus y :focus-visible?"
        ]
      },
      quiz: {
        question: "¿Cuál de estas prácticas rompe la accesibilidad de la navegación por teclado?",
        options: [
          "Usar elementos <button> nativos",
          "Aplicar outline: none sin ofrecer un indicador de foco alternativo",
          "Mantener el orden del DOM igual al orden visual",
          "Usar :focus-visible para estilizar el foco"
        ],
        correctIndex: 1,
        explanation: "Sin indicador de foco, quien navega con teclado no sabe dónde está. Puedes personalizar el estilo, pero nunca eliminarlo sin dar una alternativa visible."
      }
    },
    {
      title: "¿Qué son los atributos ARIA en HTML y para qué se usan?",
      response:
        "ARIA (Accessible Rich Internet Applications) son atributos que mejoran la accesibilidad para lectores de pantalla. Incluyen role (button, dialog), aria-label, aria-hidden, aria-live, aria-expanded.",
      level: "avanzado",
      visualDiagram: {
        id: "diag-html-dom-a11y-tree",
        title: "Mapeo de HTML a Accessibility Tree (AOM)",
        caption: "Transformación de roles y estados ARIA en nodos consumidos por lectores de pantalla.",
        diagramType: "html-dom-a11y-tree"
      },
      codeExample: {
        language: "html",
        code: `<!-- Modal de diálogo 100% accesible con ARIA (WAI-ARIA Pattern) -->
<div
  role="dialog"
  id="modal-confirm"
  aria-modal="true"
  aria-labelledby="modal-title"
  aria-describedby="modal-desc"
  class="modal-backdrop"
>
  <div class="modal-surface">
    <h2 id="modal-title">Confirmar Eliminación</h2>
    
    <p id="modal-desc">
      ¿Estás seguro de que deseas eliminar este proyecto? Esta acción no se puede deshacer.
    </p>

    <!-- Región en vivo para anunciar estados dinámicos a screen readers -->
    <div aria-live="polite" class="sr-only" id="status-announcer"></div>

    <div class="modal-actions">
      <button type="button" class="btn-cancel">Cancelar</button>
      <button type="button" class="btn-danger" aria-label="Confirmar y eliminar proyecto definitivamente">
        Eliminar
      </button>
    </div>
  </div>
</div>`,
        explanation: "aria-modal='true' confina el foco y lector de pantalla al diálogo sin que interactúe con el fondo inactivo."
      },
      interviewTips: {
        whatInterviewersWant: "Que conozcas roles, estados y propiedades ARIA y la primera regla de ARIA.",
        commonPitfalls: [
          "Usar role='button' en un <div> sin manejar teclado ni foco.",
          "Abusar de aria-label sobre contenido que ya tiene texto visible."
        ],
        followUps: [
          "¿Cuál es la primera regla de ARIA?",
          "¿Cuándo usar aria-live y qué diferencia hay entre polite y assertive?"
        ]
      },
      quiz: {
        question: "¿Qué dice la primera regla de ARIA?",
        options: [
          "Usa aria-label en todos los botones",
          "Si existe un elemento HTML nativo con la semántica y el comportamiento que necesitas, úsalo en lugar de ARIA",
          "Añade siempre role a todos los elementos",
          "ARIA sustituye a las pruebas con lectores de pantalla"
        ],
        correctIndex: 1,
        explanation: "ARIA solo cambia lo que se anuncia, no añade comportamiento. Un <button> nativo es siempre mejor que un <div role=\"button\"> al que hay que programar teclado y foco."
      }
    },
    {
      title: "¿Qué es el atributo srcset en la etiqueta <img>?",
      response:
        "Permite definir múltiples versiones de una imagen para que el navegador elija la más adecuada según la resolución y viewport, optimizando carga y rendimiento en responsive design.",
      level: "avanzado",
      visualDiagram: {
        id: "diag-html-responsive-images",
        title: "Negociación de Imágenes con <picture> y srcset",
        caption: "Selección automática de formatos AVIF/WebP y densidades según el viewport.",
        diagramType: "html-responsive-images"
      },
      codeExample: {
        language: "html",
        code: `<!-- Imagen Responsiva con formatos de última generación (AVIF/WebP) y densidades (srcset) -->
<picture>
  <!-- Formato ultra-comprimido AVIF para navegadores modernos -->
  <source
    type="image/avif"
    srcset="/hero-400.avif 400w, /hero-800.avif 800w, /hero-1200.avif 1200w"
    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 1200px"
  >

  <!-- Formato WebP compatible universalmente -->
  <source
    type="image/webp"
    srcset="/hero-400.webp 400w, /hero-800.webp 800w, /hero-1200.webp 1200w"
    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 1200px"
  >

  <!-- Fallback estándar JPEG con carga diferida y decodificación asíncrona -->
  <img
    src="/hero-800.jpg"
    alt="Desarrollador trabajando en arquitectura frontend moderna"
    loading="lazy"
    decoding="async"
    width="1200"
    height="675"
  >
</picture>`,
        explanation: "Optimiza drásticamente la métrica Core Web Vital LCP al servir solo los bytes necesarios según pantalla y densidad."
      },
      interviewTips: {
        whatInterviewersWant: "Que expliques los descriptores w y x junto con sizes y cómo el navegador elige la imagen.",
        commonPitfalls: [
          "Usar descriptores w sin el atributo sizes.",
          "Confundir srcset (resolución) con <picture> (dirección de arte o formatos)."
        ],
        followUps: [
          "¿Cuándo usar <picture> en lugar de srcset?",
          "¿Cómo servirías AVIF/WebP con fallback a JPEG?"
        ]
      },
      quiz: {
        question: "¿Qué atributo debe acompañar a srcset con descriptores de ancho (w) para que el navegador elija bien la imagen?",
        options: [
          "loading",
          "decoding",
          "alt",
          "sizes"
        ],
        correctIndex: 3,
        explanation: "sizes indica qué ancho ocupará la imagen en el layout según el viewport. Sin él, el navegador asume 100vw y puede descargar una imagen demasiado grande."
      }
    },
    {
      title: "¿Qué diferencia hay entre iframes y Web Components?",
      response:
        "<iframe> inserta otra página completa dentro de la actual con su propio contexto. Web Components (Custom Elements + Shadow DOM) permiten crear componentes encapsulados nativos sin un documento separado.",
      level: "avanzado",
      visualDiagram: {
        id: "diag-html-iframe-vs-webcomponents",
        title: "iframe (Contexto Separado) vs Web Components (DOM Nativo)",
        caption: "Aislamiento pesado con window/document independiente frente a encapsulación ligera con Shadow DOM.",
        diagramType: "html-iframe-vs-webcomponents"
      },
      codeExample: {
        language: "html",
        code: `<!-- 1. Iframe: Contexto aislado de navegación (alta sobrecarga de RAM) -->
<iframe
  src="https://pasarela-segura.com/pay"
  title="Pasarela de pago segura"
  sandbox="allow-scripts allow-forms allow-same-origin"
  width="100%"
  height="300"
></iframe>

<!-- 2. Web Component: Elemento nativo rápido en el mismo hilo de ejecución -->
<user-profile-badge user-id="42" theme="dark"></user-profile-badge>`,
        explanation: "El iframe genera un documento separado con su propio event loop; el Web Component ejecuta nativamente en el mismo documento con Shadow DOM."
      },
      interviewTips: {
        whatInterviewersWant: "Que compares aislamiento total (iframe) frente a encapsulación de componentes (Web Components) y sus costes.",
        commonPitfalls: [
          "Usar iframes para componentes de UI, con el coste de memoria y comunicación que implican.",
          "Creer que el Shadow DOM aísla JavaScript igual que un iframe."
        ],
        followUps: [
          "¿Cómo se comunica una página con un iframe (postMessage)?",
          "¿Qué hace el atributo sandbox de un iframe?"
        ]
      },
      quiz: {
        question: "¿Cómo se comunica de forma segura una página con un iframe de otro origen?",
        options: [
          "Accediendo directamente a iframe.contentWindow.document",
          "Con window.postMessage, validando event.origin en el receptor",
          "Mediante cookies de terceros",
          "Compartiendo variables globales"
        ],
        correctIndex: 1,
        explanation: "La Same-Origin Policy impide el acceso directo al DOM de otro origen. postMessage permite intercambiar mensajes, y el receptor debe verificar el origen."
      }
    },
    {
      title: "¿Qué atributos globales avanzados conoces (hidden, contenteditable, tabindex)?",
      response:
        "hidden oculta un elemento del DOM. contenteditable permite editar texto en línea. tabindex define el orden de tabulación: 0 sigue el orden natural, -1 lo excluye del tab, valores positivos definen orden explícito.",
      level: "avanzado",
      visualDiagram: {
        id: "diag-html-global-attributes",
        title: "Atributos Globales Interactivos",
        caption: "hidden semántico, contenteditable en vivo, control de foco tabindex y atributo inert.",
        diagramType: "html-global-attributes"
      },
      codeExample: {
        language: "html",
        code: `<!-- 1. hidden="until-found": Oculto visualmente pero indexable y buscable con Ctrl+F -->
<section hidden="until-found" id="acordeon-faq">
  Respuesta técnica revelada automáticamente por el navegador si el usuario la busca.
</section>

<!-- 2. contenteditable: Área editable directamente en el navegador -->
<div contenteditable="true" spellcheck="true" role="textbox" aria-multiline="true">
  Escribe aquí notas o comentarios técnicos...
</div>

<!-- 3. tabindex="-1": Permite enfocar programáticamente desde JavaScript -->
<div id="toast-notificacion" tabindex="-1" role="status">
  Operación completada con éxito.
</div>`,
        explanation: "Permite enriquecer la interactividad nativa del navegador sin depender de librerías externas de UI."
      },
      interviewTips: {
        whatInterviewersWant: "Que conozcas el comportamiento de hidden, contenteditable, tabindex e inert y sus implicaciones de accesibilidad.",
        commonPitfalls: [
          "Usar tabindex positivos, que rompen el orden natural de navegación.",
          "Creer que hidden equivale a visibility: hidden."
        ],
        followUps: [
          "¿Qué hace el atributo inert y cuándo es útil?",
          "¿Qué diferencia hay entre tabindex='0' y tabindex='-1'?"
        ]
      },
      quiz: {
        question: "¿Qué hace el atributo inert en un contenedor?",
        options: [
          "Hace que el contenido no sea enfocable ni interactivo y lo excluye del árbol de accesibilidad",
          "Impide que JavaScript lo modifique",
          "Desactiva sus estilos CSS",
          "Lo oculta visualmente"
        ],
        correctIndex: 0,
        explanation: "inert es ideal para el contenido de fondo mientras hay un modal abierto: evita que el foco escape hacia él sin tener que gestionar tabindex a mano."
      }
    },
    {
      title: "¿Qué es el elemento <template> y <slot> en HTML?",
      response:
        "<template> define contenido HTML reutilizable que no se renderiza hasta ser clonado con JS. <slot> permite insertar contenido dinámico dentro de Web Components, actuando como punto de inserción.",
      level: "avanzado",
      visualDiagram: {
        id: "diag-html-template-slot",
        title: "Plantillas Inertes y Proyección con Slots",
        caption: "Fragmentos en memoria clonables y puntos de anclaje de contenido en Shadow DOM.",
        diagramType: "html-template-slot"
      },
      codeExample: {
        language: "html",
        code: `<!-- Plantilla HTML inerte que no ejecuta scripts ni descarga imágenes hasta ser clonada -->
<template id="user-card-tpl">
  <div class="user-card">
    <h3 class="user-name"></h3>
    <p class="user-role"></p>
  </div>
</template>

<div id="container"></div>

<script>
  const template = document.getElementById('user-card-tpl');
  const container = document.getElementById('container');

  // Clonación profunda de alta velocidad
  const clone = template.content.cloneNode(true);
  clone.querySelector('.user-name').textContent = 'Diego Villa';
  clone.querySelector('.user-role').textContent = 'Principal Frontend Architect';

  container.appendChild(clone);
</script>`,
        explanation: "El contenido de <template> se almacena en un DocumentFragment inerte, sin coste de renderizado inicial."
      },
      interviewTips: {
        whatInterviewersWant: "Que expliques que <template> es contenido inerte clonable y que <slot> proyecta el Light DOM en el Shadow DOM.",
        commonPitfalls: [
          "Creer que el contenido de <template> se ejecuta o carga recursos al parsearse.",
          "Confundir slots nombrados con slots por defecto."
        ],
        followUps: [
          "¿Por qué se usa template.content.cloneNode(true)?",
          "¿Qué evento se dispara cuando cambia el contenido de un slot?"
        ]
      },
      quiz: {
        question: "¿Qué ocurre con un <img> dentro de un <template> al cargar la página?",
        options: [
          "Se descarga pero no se muestra",
          "Se descarga y se muestra oculto",
          "Nada: el contenido de <template> es inerte, no se renderiza ni descarga recursos hasta que se clona e inserta",
          "Lanza un error de validación"
        ],
        correctIndex: 2,
        explanation: "El contenido de <template> vive en un DocumentFragment inerte. Solo al clonarlo con template.content.cloneNode(true) e insertarlo en el DOM se activa."
      }
    },
    {
      title: "¿Qué es el atributo loading='lazy' y cuándo se usa?",
      response:
        "Es un atributo nativo para imágenes e iframes que difiere su carga hasta que estén cerca del viewport. Mejora el LCP y reduce el consumo de datos sin necesidad de bibliotecas externas.",
      level: "avanzado",
      visualDiagram: {
        id: "diag-html-lazy-loading-threshold",
        title: "Mecanismo de Carga Perezosa por Umbral de Scroll",
        caption: "Descarga inmediata de recursos Above the Fold y espera diferida para Below the Fold.",
        diagramType: "html-lazy-loading-threshold"
      },
      codeExample: {
        language: "html",
        code: `<!-- Imagen Above the Fold (LCP crítico): Carga inmediata con alta prioridad -->
<img
  src="/hero.webp"
  alt="Portada de Arquitectura Frontend"
  loading="eager"
  fetchpriority="high"
  width="1200"
  height="600"
>

<!-- Imagen Below the Fold: Carga diferida con aspect-ratio para prevenir CLS -->
<img
  src="/footer-banner.webp"
  alt="Banner de cursos relacionados"
  loading="lazy"
  decoding="async"
  width="600"
  height="300"
  style="aspect-ratio: 600 / 300;"
>`,
        explanation: "loading='lazy' delega al navegador la activación de la descarga cuando el usuario se acerca mediante scroll."
      },
      interviewTips: {
        whatInterviewersWant: "Que sepas cuándo aplicar lazy loading y cuándo perjudica el rendimiento.",
        commonPitfalls: [
          "Aplicar loading='lazy' a la imagen LCP, empeorando el LCP.",
          "Olvidar width y height, provocando CLS."
        ],
        followUps: [
          "¿Por qué nunca debes poner lazy a la imagen hero?",
          "¿Qué hace fetchpriority='high'?"
        ]
      },
      quiz: {
        question: "¿A qué imagen NO deberías aplicarle loading=\"lazy\"?",
        options: [
          "Los avatares de los comentarios",
          "La imagen hero que es el elemento LCP",
          "Las imágenes del footer",
          "Las miniaturas de una galería larga"
        ],
        correctIndex: 1,
        explanation: "Diferir la imagen LCP retrasa su descarga y empeora la métrica. Para esa imagen conviene cargarla de inmediato e incluso usar fetchpriority=\"high\"."
      }
    },
    // === EXPERTO ===
    {
      title: "¿Qué es el Shadow DOM y cómo se relaciona con HTML?",
      response:
        "Es una API de Web Components que encapsula el DOM y los estilos de un componente, evitando colisiones CSS. Crea un árbol DOM aislado (shadow tree) dentro de un host element. Se accede con attachShadow({ mode: 'open' }).",
      level: "experto",
      visualDiagram: {
        id: "diag-web-components-shadow-dom",
        title: "Arquitectura del Shadow DOM",
        caption: "Shadow Host creando un Shadow Root con estilos y DOM encapsulados sin colisiones globales.",
        diagramType: "web-components-shadow-dom"
      },
      codeExample: {
        language: "html",
        code: `<div id="host-element"></div>

<script>
  const host = document.getElementById('host-element');
  // Creación del Shadow Root encapsulado en modo abierto
  const shadow = host.attachShadow({ mode: 'open' });

  // Los estilos dentro del shadow root nunca se filtran al exterior ni son afectados por reglas externas
  shadow.innerHTML = \`
    <style>
      p {
        color: #8b5cf6;
        font-family: monospace;
        font-size: 1.1rem;
      }
    </style>
    <p>Texto encapsulado en Shadow DOM: blindado contra colisiones CSS globales.</p>
  \`;
</script>`,
        explanation: "El Shadow DOM garantiza encapsulación de estilos real sin recurrir a BEM, CSS Modules o scoping artificial."
      },
      interviewTips: {
        whatInterviewersWant: "Que expliques la encapsulación de DOM y estilos y cómo se compone con el Light DOM mediante slots.",
        commonPitfalls: [
          "Pensar que mode: 'closed' es una medida de seguridad.",
          "Ignorar el impacto de la encapsulación en tests y en estilos globales."
        ],
        followUps: [
          "¿Cómo atraviesan el Shadow DOM las CSS Custom Properties?",
          "¿Qué es el Declarative Shadow DOM?"
        ]
      },
      quiz: {
        question: "¿Qué SÍ atraviesa la frontera de un Shadow DOM desde la página principal?",
        options: [
          "document.querySelector",
          "Los estilos de un <style> global aplicados a etiquetas",
          "Los selectores de clase globales",
          "Las CSS Custom Properties heredadas"
        ],
        correctIndex: 3,
        explanation: "El Shadow DOM aísla selectores y consultas, pero las propiedades heredables y las variables CSS atraviesan la frontera, lo que permite tematizar componentes."
      }
    },
    {
      title: "¿Cuál es la diferencia entre HTML y XHTML?",
      response:
        "XHTML es una versión estricta basada en XML donde las etiquetas deben estar siempre cerradas, bien anidadas, y en minúsculas. HTML5 es más flexible y tolerante con errores de sintaxis.",
      level: "experto",
      visualDiagram: {
        id: "diag-html-vs-xhtml-parsing",
        title: "Tolerancia de Parsing: HTML5 vs XHTML",
        caption: "Parser permisivo resiliente de HTML5 vs analizador XML estricto de ruptura fatal.",
        diagramType: "html-vs-xhtml-parsing"
      },
      interviewTips: {
        whatInterviewersWant: "Que conozcas las diferencias de parsing (HTML tolerante vs XML estricto) y por qué HTML5 se impuso.",
        commonPitfalls: [
          "Creer que cerrar etiquetas vacías (<br />) convierte un documento en XHTML.",
          "Desconocer que XHTML servido como application/xhtml+xml falla ante cualquier error."
        ],
        followUps: [
          "¿Qué determina si un documento se parsea como HTML o XML?",
          "¿Por qué JSX exige cerrar todas las etiquetas como XHTML?"
        ]
      },
      quiz: {
        question: "¿Qué ocurre si un documento servido como application/xhtml+xml tiene una etiqueta sin cerrar?",
        options: [
          "El navegador la cierra automáticamente",
          "Se ignora esa etiqueta",
          "Se renderiza en quirks mode",
          "El parser XML muestra un error y no renderiza la página"
        ],
        correctIndex: 3,
        explanation: "El parsing XML es estricto (draconiano): cualquier error de buena formación detiene el renderizado. El parser HTML, en cambio, corrige los errores de forma tolerante."
      }
    },
    {
      title: "¿Cómo influye el HTML semántico en el SEO y la accesibilidad?",
      response:
        "Los bots de búsqueda y lectores de pantalla usan la semántica HTML para entender la estructura: <main> identifica el contenido principal, <nav> la navegación, <article> contenido independiente. Mejora el ranking y la usabilidad.",
      level: "experto",
      visualDiagram: {
        id: "diag-html-semantic-seo-crawler",
        title: "Rastreo de Landmarks y Datos Estructurados SEO",
        caption: "Googlebot extrayendo jerarquías de contenido y Schema.org JSON-LD para Rich Snippets.",
        diagramType: "html-semantic-seo-crawler"
      },
      codeExample: {
        language: "html",
        code: `<!-- Marcado semántico + Datos estructurados Schema.org para Rich Snippets -->
<article>
  <header>
    <h1>Curso Avanzado de Arquitectura Frontend</h1>
    <time datetime="2026-09-15">15 de Septiembre, 2026</time>
  </header>
  <p>Domina React 19, Web Components nativos y Core Web Vitals.</p>
</article>

<!-- JSON-LD interpretado directamente por el crawler de Google -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Curso Avanzado de Arquitectura Frontend",
  "description": "Preparación técnica integral para Frontend Engineers a Staff Level.",
  "provider": {
    "@type": "Organization",
    "name": "Cabuweb",
    "sameAs": "https://cabuweb.com"
  }
}
</script>`,
        explanation: "Combina semántica estructural para el parseo del contenido con JSON-LD para enriquecer la tarjeta en Google SERP."
      },
      interviewTips: {
        whatInterviewersWant: "Que relaciones landmarks, encabezados y datos estructurados con el SEO y con la navegación asistida.",
        commonPitfalls: [
          "Creer que el SEO solo depende de meta tags.",
          "Usar varios <main> visibles o ninguno."
        ],
        followUps: [
          "¿Qué son los datos estructurados JSON-LD?",
          "¿Cómo audita Lighthouse la semántica de una página?"
        ]
      },
      quiz: {
        question: "¿Qué elemento identifica el contenido principal de la página para lectores de pantalla y buscadores?",
        options: [
          "<article>",
          "<section>",
          "<div id=\"content\">",
          "<main>"
        ],
        correctIndex: 3,
        explanation: "<main> es un landmark único por página. Permite a los lectores de pantalla saltar directamente al contenido principal y ayuda a los buscadores a priorizarlo."
      }
    },
    {
      title: "¿Qué son los Web Components nativos y qué APIs los componen?",
      response:
        "Son componentes HTML reutilizables sin frameworks. Se componen de 3 APIs: Custom Elements (define nuevas etiquetas), Shadow DOM (encapsula estilos), HTML Templates (contenido inerte reutilizable con <template> y <slot>).",
      level: "experto",
      visualDiagram: {
        id: "diag-html-webcomponents-trio",
        title: "La Tríada de APIs de Web Components",
        caption: "1. Custom Elements, 2. Shadow DOM y 3. HTML Templates para componentes nativos reutilizables.",
        diagramType: "html-webcomponents-trio"
      },
      codeExample: {
        language: "typescript",
        code: `// Componente Web Autónomo nativo en TypeScript sin dependencias
class MetricBadge extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });
    const label = this.getAttribute('label') || 'Métrica';
    const value = this.getAttribute('value') || '0';

    shadow.innerHTML = \`
      <style>
        :host { display: inline-block; font-family: system-ui, sans-serif; }
        .badge {
          display: flex; gap: 8px; padding: 6px 12px;
          background: #1e1b4b; border: 1px solid #6366f1;
          border-radius: 9999px; color: #c7d2fe; font-size: 0.85rem;
        }
        .val { font-weight: bold; color: #34d399; }
      </style>
      <div class="badge">
        <span>\${label}:</span>
        <span class="val">\${value}</span>
      </div>
    \`;
  }
}

customElements.define('metric-badge', MetricBadge);`,
        explanation: "Encapsula marcado, estilos con el selector :host y lógica en una etiqueta personalizada reutilizable en cualquier framework."
      },
      interviewTips: {
        whatInterviewersWant: "Que conozcas Custom Elements, Shadow DOM y templates, y su interoperabilidad con frameworks.",
        commonPitfalls: [
          "Olvidar el guion obligatorio en el nombre del custom element.",
          "Ignorar los problemas de SSR sin Declarative Shadow DOM."
        ],
        followUps: [
          "¿Cómo pasarías objetos complejos a un Web Component desde React?",
          "¿Qué callbacks del ciclo de vida ofrecen los Custom Elements?"
        ]
      },
      quiz: {
        question: "¿Qué requisito obligatorio tiene el nombre de un Custom Element?",
        options: [
          "Tener un máximo de 8 caracteres",
          "Empezar con mayúscula",
          "Contener al menos un guion, por ejemplo <user-card>",
          "Terminar en -element"
        ],
        correctIndex: 2,
        explanation: "El guion evita colisiones con futuras etiquetas estándar de HTML, que nunca llevarán guion."
      }
    },
    {
      title: "¿Qué es el Content Model en HTML5 y cómo afecta la validación?",
      response:
        "Define qué tipo de contenido puede contener cada elemento: flow, phrasing, embedded, interactive, metadata, sectioning, heading. Un <p> solo acepta phrasing content, por lo que un <div> dentro de <p> es inválido.",
      level: "experto",
      visualDiagram: {
        id: "diag-html-content-models",
        title: "Content Models y Reglas de Anidamiento HTML5",
        caption: "Categorías formales (Flow, Phrasing, Sectioning, Interactive) y restricciones gramaticales.",
        diagramType: "html-content-models"
      },
      interviewTips: {
        whatInterviewersWant: "Que expliques las categorías de contenido y cómo el parser corrige anidamientos inválidos.",
        commonPitfalls: [
          "Anidar un <div> dentro de un <p>, lo que hace que el parser cierre el <p> automáticamente.",
          "Ignorar los errores de hidratación causados por HTML inválido en SSR."
        ],
        followUps: [
          "¿Por qué un <div> dentro de un <p> provoca errores de hidratación en React?",
          "¿Qué elementos pueden contener contenido interactivo?"
        ]
      },
      quiz: {
        question: "¿Qué hace el parser HTML con <p><div>Hola</div></p>?",
        options: [
          "Lo renderiza tal cual",
          "Cierra el <p> antes del <div>, generando un DOM distinto al escrito",
          "Elimina el <div>",
          "Convierte el <div> en <span>"
        ],
        correctIndex: 1,
        explanation: "<p> solo admite contenido phrasing. Al encontrar un <div>, el parser cierra el párrafo implícitamente. En SSR esto provoca errores de hidratación porque el DOM no coincide con el virtual."
      }
    },
    {
      title: "¿Qué es la Speculation Rules API y cómo mejora la navegación?",
      response:
        "Es una API moderna que permite declarar reglas de prerendering/prefetching en un <script type='speculationrules'>. El navegador prerenderiza páginas futuras basándose en probabilidades, logrando navegación prácticamente instantánea.",
      level: "experto",
      visualDiagram: {
        id: "diag-html-speculation-rules",
        title: "Prerendering Especulativo con Speculation Rules",
        caption: "Descarga y renderizado invisible en segundo plano para transiciones instantáneas a 0ms.",
        diagramType: "html-speculation-rules"
      },
      codeExample: {
        language: "html",
        code: `<!-- Speculation Rules API: Navegación instantánea (0ms) en navegadores Chromium -->
<script type="speculationrules">
{
  "prerender": [
    {
      "source": "list",
      "urls": ["/dashboard", "/preguntas/react-19"],
      "eagerness": "moderate"
    }
  ],
  "prefetch": [
    {
      "where": { "and": [{ "href_matches": "/*" }] },
      "eagerness": "conservative"
    }
  ]
}
</script>`,
        explanation: "El motor del navegador descarga y prerenderiza páginas completas en memoria en segundo plano para transiciones instantáneas."
      },
      interviewTips: {
        whatInterviewersWant: "Que expliques prefetch frente a prerender, el formato JSON de reglas y los riesgos de prerenderizar.",
        commonPitfalls: [
          "Prerenderizar URLs con efectos secundarios (logout, añadir al carrito).",
          "No considerar el coste en datos y analítica de prerenderizados no visitados."
        ],
        followUps: [
          "¿Cómo detectarías que una página fue prerenderizada (document.prerendering)?",
          "¿Qué diferencia hay con <link rel='prefetch'>?"
        ]
      },
      quiz: {
        question: "¿Qué riesgo tiene prerenderizar con Speculation Rules una URL como /logout?",
        options: [
          "Que se ejecuten efectos secundarios del servidor (cerrar sesión) aunque el usuario nunca visite la página",
          "Que el SEO penalice el sitio",
          "Que el navegador bloquee la página",
          "Ninguno: el prerender no ejecuta código"
        ],
        correctIndex: 0,
        explanation: "Prerenderizar hace una petición real y ejecuta la página. Las URLs con efectos secundarios deben excluirse de las reglas de especulación."
      }
    }
  ]
};

export default questionsHTML;
