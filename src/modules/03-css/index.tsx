import { ISection } from "../../types";

export const questionsCSS: ISection = {
  title: "CSS",
  collapse: "collapseCSS",
  icon: "css",
  questions: [
    {
      title: "¿Qué es CSS?",
      response:
        "CSS (Cascading Style Sheets) es un lenguaje de estilos utilizado para describir la presentación de un documento HTML. Define cómo se muestran los elementos, controlando el diseño, colores, fuentes y disposición visual."
    },
    {
      title: "¿Cuál es la diferencia entre inline, internal y external styles?",
      response:
        "Inline styles se aplican directamente en el atributo style del elemento. Internal styles se definen dentro de una etiqueta <style> en el documento. External styles se almacenan en un archivo .css separado y se enlazan con <link>, siendo la forma más recomendable."
    },
    {
      title: "¿Qué es el Box Model y cuáles son sus componentes?",
      response:
        "El Box Model define cómo se renderizan los elementos en CSS. Sus componentes son: content (contenido), padding (espaciado interno), border (borde) y margin (espaciado externo)."
    },
    {
      title: "¿Cuál es la estructura de un bloque de declaración?",
      response:
        "Un bloque de declaración en CSS tiene un selector y un conjunto de propiedades con sus valores. Ejemplo: p { color: red; font-size: 16px; }."
    },
    {
      title: "¿Cuál es la diferencia entre display: none y visibility: hidden?",
      response:
        "display: none elimina el elemento del flujo del documento como si no existiera. visibility: hidden lo oculta visualmente pero sigue ocupando espacio en el layout."
    },
    {
      title: "¿Qué son los Media Queries?",
      response:
        "Son reglas CSS que permiten aplicar estilos condicionales en función de las características del dispositivo, como ancho de pantalla o resolución. Ejemplo: @media (max-width: 768px) { ... }."
    },
    {
      title: "¿Cuál es la diferencia entre em, rem y px?",
      response:
        "px es un valor absoluto. em es relativo al tamaño de la fuente del elemento padre. rem es relativo al tamaño de la fuente del elemento raíz (html)."
    },
    {
      title: "¿Qué tipos de especificidad existen?",
      response:
        "La especificidad se calcula según el tipo de selector. Orden de mayor a menor: selectores de ID (#), clases, atributos y pseudo-clases (.), elementos y pseudo-elementos (p, ::before). El inline style tiene la mayor prioridad."
    },
    {
      title: "¿Qué es el Box-Sizing?",
      response:
        "Es una propiedad que define cómo se calculan los anchos y altos de un elemento. content-box (por defecto) incluye solo el contenido, mientras que border-box incluye padding y borde en el cálculo."
    },
    {
      title: "¿Cuál es la diferencia entre Flexbox y CSS Grid?",
      response:
        "Flexbox es un sistema unidimensional (fila o columna) ideal para alinear y distribuir elementos. Grid es bidimensional, permitiendo trabajar simultáneamente en filas y columnas para layouts más complejos."
    },
    {
      title: "¿Qué es Flex?",
      response:
        "Flex es un modelo de diseño en CSS que facilita la alineación y distribución de elementos dentro de un contenedor flexible usando display: flex y propiedades como justify-content, align-items, flex-grow, etc."
    },
    {
      title: "¿Qué es SASS/SCSS?",
      response:
        "SASS/SCSS son preprocesadores de CSS que añaden características como variables, anidación, mixins y herencia, lo que facilita la organización y mantenibilidad del código CSS."
    },
    {
      title: "¿Qué es BEM?",
      response:
        "BEM (Block, Element, Modifier) es una metodología de nomenclatura para CSS que facilita la organización y escalabilidad del código. Ejemplo: .boton (bloque), .boton__icono (elemento), .boton--grande (modificador)."
    },
    {
      title: "¿Qué son las pseudo-clases y pseudo-elementos?",
      response:
        "Las pseudo-clases (:hover, :focus, :nth-child) permiten aplicar estilos en un estado específico de un elemento. Los pseudo-elementos (::before, ::after) permiten generar contenido virtual y aplicarle estilo."
    },
    {
      title: "¿Qué diferencia hay entre inline, inline-block y block?",
      response:
        "inline no inicia en nueva línea y ocupa solo el ancho de su contenido. block ocupa todo el ancho y empieza en nueva línea. inline-block se comporta como inline pero permite definir alto y ancho."
    },
    {
      title: "¿Qué es la especificidad y el !important?",
      response:
        "La especificidad define qué regla prevalece entre varias que aplican al mismo elemento. !important fuerza a una regla a tener máxima prioridad, aunque debe usarse con moderación."
    },
    {
      title: "¿Qué es la propiedad z-index?",
      response:
        "z-index controla la superposición de los elementos posicionados. Un valor mayor coloca un elemento por encima de otro en el eje Z."
    },
    {
      title: "¿Qué diferencia hay entre relative, absolute, fixed y sticky?",
      response:
        "relative posiciona en relación a su posición original. absolute lo hace respecto a su contenedor posicionado. fixed lo fija en la pantalla incluso con scroll. sticky combina relative y fixed dependiendo del scroll."
    },
    {
      title: "¿Qué es una variable en CSS?",
      response:
        "Son propiedades personalizadas que permiten almacenar valores reutilizables. Se declaran con --nombre-variable y se usan con var(--nombre-variable)."
    },
    {
      title: "¿Qué son las animaciones en CSS?",
      response:
        "Son efectos definidos con @keyframes que permiten cambiar propiedades de forma progresiva en el tiempo, aplicadas con la propiedad animation."
    }
  ]
};

export default questionsCSS;
