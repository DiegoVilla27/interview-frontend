import { ISection } from "../../types";

export const questionsHTML: ISection = {
  title: "HTML",
  collapse: "collapseHTML",
  icon: "html",
  questions: [
    {
      title: "¿Qué es HTML y para qué se utiliza?",
      response:
        "HTML (HyperText Markup Language) es el lenguaje de marcado estándar para crear la estructura de páginas web. Define elementos como encabezados, párrafos, enlaces, imágenes, formularios, etc."
    },
    {
      title: "¿Cuál es la diferencia entre etiquetas de bloque y en línea?",
      response:
        "Las etiquetas de bloque ocupan todo el ancho disponible y empiezan en una nueva línea (ej: <div>, <p>, <h1>). Las etiquetas en línea solo ocupan el espacio de su contenido (ej: <span>, <a>, <strong>)."
    },
    {
      title: "¿Qué es el DOCTYPE en HTML?",
      response:
        "Es una declaración que indica al navegador la versión de HTML que se está utilizando, asegurando el renderizado correcto. En HTML5 se usa <!DOCTYPE html>."
    },
    {
      title: "¿Qué diferencia hay entre <div> y <span>?",
      response:
        "<div> es un contenedor de bloque, usado para agrupar secciones grandes. <span> es un contenedor en línea, usado para resaltar o dar estilo a un texto específico dentro de un párrafo."
    },
    {
      title: "¿Qué son los atributos en HTML? Da ejemplos.",
      response:
        "Son propiedades que agregan información adicional a las etiquetas. Ejemplo: <img src='imagen.jpg' alt='Descripción'> donde src y alt son atributos."
    },
    {
      title: "¿Para qué sirve la etiqueta <a> en HTML?",
      response:
        "Sirve para crear enlaces (hipervínculos) a otras páginas o recursos. Se usa con el atributo href, por ejemplo: <a href='https://example.com'>Visitar</a>."
    },
    {
      title: "¿Qué es la semántica en HTML y por qué es importante?",
      response:
        "La semántica se refiere al uso de etiquetas con significado, como <header>, <footer>, <article>, <section>. Ayuda a la accesibilidad, SEO y claridad del código."
    },
    {
      title: "¿Cuál es la diferencia entre <id> y <class> en HTML?",
      response:
        "id identifica de forma única un elemento en la página. class permite agrupar varios elementos con el mismo estilo o comportamiento."
    },
    {
      title: "¿Qué diferencia hay entre <strong> y <b>, y entre <em> y <i>?",
      response:
        "<strong> y <em> aportan significado semántico (énfasis importante y énfasis en el tono). <b> y <i> solo cambian la apariencia visual (negrita y cursiva) sin aportar semántica."
    },
    {
      title: "¿Qué es la accesibilidad (A11y) en HTML?",
      response:
        "Es la práctica de diseñar contenido web que pueda ser usado por personas con discapacidades. Incluye atributos como alt en imágenes, roles ARIA, etiquetas <label> en formularios."
    },
    {
      title: "¿Qué son las meta-etiquetas en HTML y cuáles son comunes?",
      response:
        "Son etiquetas dentro de <head> que proveen metadatos. Ejemplos: <meta charset='UTF-8'> para codificación, <meta name='viewport'> para responsive design, <meta name='description'> para SEO."
    },
    {
      title: "¿Qué diferencia hay entre <ol>, <ul> y <dl>?",
      response:
        "<ol> es lista ordenada, <ul> es lista no ordenada y <dl> es lista de definiciones con pares <dt> (término) y <dd> (definición)."
    },
    {
      title: "¿Qué es un formulario en HTML y qué elementos lo componen?",
      response:
        "Un formulario (<form>) permite capturar datos del usuario. Incluye inputs (<input>, <textarea>, <select>, <button>) y atributos como action y method."
    },
    {
      title:
        "¿Qué diferencia hay entre atributos globales como hidden, contenteditable y tabindex?",
      response:
        "hidden oculta un elemento. contenteditable permite editar texto en línea. tabindex define el orden de tabulación en la navegación con teclado."
    },
    {
      title: "¿Qué son los atributos ARIA en HTML y para qué se usan?",
      response:
        "ARIA (Accessible Rich Internet Applications) son atributos que mejoran la accesibilidad, indicando roles, estados y propiedades a los lectores de pantalla. Ejemplo: role='button', aria-label='Cerrar'."
    },
    {
      title: "¿Qué es el atributo srcset en la etiqueta <img>?",
      response:
        "Permite definir múltiples versiones de una imagen para que el navegador elija la más adecuada según la resolución de pantalla, optimizando carga y rendimiento."
    },
    {
      title: "¿Qué diferencia hay entre iframes y object/embed?",
      response:
        "<iframe> inserta otra página dentro de la actual. <object> y <embed> se usan para contenido multimedia o externo, aunque hoy en día se usan menos debido a HTML5 APIs."
    },
    {
      title: "¿Qué son los custom data attributes en HTML (data-*)?",
      response:
        "Son atributos personalizados que comienzan con data-, permiten almacenar información adicional en elementos. Ejemplo: <div data-user-id='123'>."
    },
    {
      title: "¿Qué es el Shadow DOM y cómo se relaciona con HTML?",
      response:
        "Es una característica de Web Components que encapsula el DOM y los estilos de un componente, evitando colisiones con el resto de la página."
    },
    {
      title: "¿Cuál es la diferencia entre HTML y XHTML?",
      response:
        "XHTML es una versión más estricta de HTML basada en XML, donde las etiquetas deben estar siempre cerradas y bien anidadas. HTML5 es más flexible."
    },
    {
      title: "¿Qué es el atributo defer y async en <script>?",
      response:
        "async carga y ejecuta el script tan pronto esté disponible (no garantiza orden). defer carga en paralelo pero ejecuta los scripts en orden después de parsear el HTML."
    }
  ]
};

export default questionsHTML;
