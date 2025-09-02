import { ISection } from "../../types";

export const questionsBrowser: ISection = {
  title: "Browser",
  collapse: "collapseBrowser",
  icon: "browser",
  questions: [
    {
      title: "¿Qué lenguajes son reconocidos por el navegador?",
      response:
        "El navegador actualmente solo reconoce y lee los comandos de Javascript, HTML y CSS. Siendo Javascript el único lenguaje de programación."
    },
    {
      title: "¿Qué es el DOM?",
      response:
        "El DOM (Document Object Model) es una representación en forma de árbol de la estructura de un documento HTML o XML. Permite a los lenguajes de programación, como JavaScript, interactuar y manipular el contenido, estructura y estilo de una página web."
    },
    {
      title: "¿Qué es el BOM?",
      response:
        "El BOM (Browser Object Model) es el modelo que permite interactuar con las propiedades y métodos del navegador, como `window`, `navigator`, `screen`, `history` y `location`."
    },
    {
      title: "¿Cuál es la diferencia entre DOM y BOM?",
      response:
        "El DOM representa el contenido del documento (HTML, XML), mientras que el BOM representa las características del navegador que no forman parte del documento, como la URL, el historial y la ventana del navegador."
    },
    {
      title: "¿Qué es la caché del navegador?",
      response:
        "La caché del navegador almacena recursos estáticos (como imágenes, CSS y JavaScript) para que no se descarguen en cada visita, mejorando el rendimiento y reduciendo el consumo de red."
    },
    {
      title: "¿Qué es el localStorage?",
      response:
        "Es una API del navegador que permite almacenar datos de forma persistente en el cliente en formato clave-valor. Los datos no expiran al cerrar el navegador."
    },
    {
      title: "¿Qué es el sessionStorage?",
      response:
        "Es similar a localStorage, pero los datos solo se mantienen durante la sesión del navegador. Una vez que se cierra la pestaña o ventana, los datos se eliminan."
    },
    {
      title: "¿Qué es una cookie?",
      response:
        "Una cookie es un pequeño archivo de datos que un servidor envía al navegador para almacenar información del usuario, como preferencias, autenticación o seguimiento de sesión."
    },
    {
      title: "¿Qué es el event loop en los navegadores?",
      response:
        "Es el mecanismo que maneja la ejecución de múltiples tareas, callbacks y eventos en JavaScript dentro del navegador, asegurando la ejecución no bloqueante y asíncrona."
    },
    {
      title: "¿Qué son los Web Workers?",
      response:
        "Son hilos en segundo plano que permiten ejecutar código JavaScript de manera paralela al hilo principal, evitando bloqueos en la interfaz de usuario."
    },
    {
      title: "¿Qué es CORS en el navegador?",
      response:
        "CORS (Cross-Origin Resource Sharing) es una política de seguridad que controla cómo los navegadores permiten solicitudes HTTP entre diferentes orígenes (dominios)."
    },
    {
      title: "¿Qué es el Same-Origin Policy?",
      response:
        "Es una política de seguridad que restringe cómo los documentos o scripts cargados desde un origen pueden interactuar con recursos de otro origen."
    },
    {
      title: "¿Qué es el render tree?",
      response:
        "Es la estructura que crea el navegador combinando el DOM y los estilos CSS para renderizar cómo se verá la página en pantalla."
    },
    {
      title: "¿Qué es el reflow y repaint?",
      response:
        "Reflow ocurre cuando el navegador recalcula posiciones y dimensiones de los elementos en la página. Repaint ocurre cuando se actualizan los estilos visuales como colores o fondos sin modificar el layout."
    },
    {
      title: "¿Qué es el Critical Rendering Path?",
      response:
        "Es la secuencia de pasos que sigue el navegador para convertir el HTML, CSS y JavaScript en píxeles renderizados en la pantalla."
    },
    {
      title: "¿Qué son los Service Workers?",
      response:
        "Son scripts que se ejecutan en segundo plano en el navegador, permitiendo funciones como caché avanzado, notificaciones push y aplicaciones web offline (PWA)."
    },
    {
      title: "¿Qué diferencia hay entre HTTP y HTTPS en el navegador?",
      response:
        "HTTPS cifra la comunicación entre cliente y servidor usando TLS/SSL, protegiendo la integridad y privacidad de los datos. HTTP no tiene cifrado."
    },
    {
      title: "¿Qué es el prefetching en los navegadores?",
      response:
        "Es una técnica en la que el navegador carga recursos por adelantado (como DNS, scripts o páginas) que probablemente serán necesarios después."
    },
    {
      title: "¿Qué es el throttling en el navegador?",
      response:
        "Es la limitación intencional de recursos, como la velocidad de red o el uso de CPU, que los navegadores aplican en tareas como timers, peticiones o Web Workers para optimizar el rendimiento."
    },
    {
      title: "¿Qué es el navegador headless?",
      response:
        "Un navegador headless es un navegador sin interfaz gráfica, utilizado para pruebas automatizadas, scraping o procesamiento de páginas."
    }
  ]
};

export default questionsBrowser;
