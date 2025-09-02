import { ISection } from "../../types";

export const questionsBuildTools: ISection = {
  title: "Build Tools",
  collapse: "collapseBuildTools",
  icon: "build-tools",
  questions: [
    {
      title: "¿Qué son las build tools?",
      response:
        "Son herramientas que automatizan tareas en el desarrollo como la compilación, minificación, empaquetado, optimización y despliegue del código."
    },
    {
      title: "¿Cuál es la diferencia entre un bundler y un task runner?",
      response:
        "Un bundler (como Webpack, Parcel, Vite) se enfoca en empaquetar módulos y optimizar el código para producción. Un task runner (como Gulp o npm scripts) se centra en automatizar tareas repetitivas como limpiar carpetas, mover archivos, ejecutar pruebas, etc."
    },
    {
      title: "¿Qué es Webpack?",
      response:
        "Webpack es un empaquetador de módulos que toma dependencias y las convierte en archivos optimizados para el navegador, soportando loaders y plugins para transformar recursos como JS, CSS e imágenes."
    },
    {
      title: "¿Qué es Vite y en qué se diferencia de Webpack?",
      response:
        "Vite es una build tool moderna que utiliza ES Modules nativos para desarrollo rápido, con hot reload casi instantáneo. A diferencia de Webpack, que necesita empaquetar todo para servir, Vite sirve los archivos directamente y solo los empaqueta al hacer build."
    },
    {
      title: "¿Qué es Babel y para qué sirve?",
      response:
        "Babel es un transpilador de JavaScript que convierte código moderno (ES6+) en una versión compatible con navegadores más antiguos."
    },
    {
      title: "¿Qué es un polyfill?",
      response:
        "Es un fragmento de código que implementa características modernas de JavaScript en navegadores que no las soportan de forma nativa."
    },
    {
      title: "¿Qué es tree shaking?",
      response:
        "Es una técnica usada por bundlers para eliminar código que no se utiliza en la aplicación, reduciendo el tamaño final del bundle."
    },
    {
      title: "¿Qué es minificación?",
      response:
        "Es el proceso de eliminar espacios, saltos de línea y renombrar variables para reducir el tamaño de los archivos sin cambiar su funcionalidad."
    },
    {
      title: "¿Qué es uglificación?",
      response:
        "Es similar a la minificación, pero además transforma el código para hacerlo menos legible al humano, dificultando su comprensión."
    },
    {
      title: "¿Qué es el code splitting?",
      response:
        "Es una técnica que divide el código en múltiples archivos pequeños que se cargan bajo demanda, mejorando la carga inicial de la aplicación."
    },
    {
      title: "¿Qué es un sourcemap?",
      response:
        "Es un archivo que mapea el código minificado/transpilado con el código fuente original, facilitando la depuración en el navegador."
    },
    {
      title: "¿Qué es Gulp?",
      response:
        "Gulp es un task runner que permite automatizar tareas de construcción usando un sistema de streams para procesar archivos."
    },
    {
      title: "¿Qué es Grunt?",
      response:
        "Grunt es un task runner más antiguo que Gulp, basado en configuraciones declarativas en lugar de flujos de código."
    },
    {
      title: "¿Qué es esbuild?",
      response:
        "Es una herramienta de build ultrarrápida escrita en Go, usada para transpilar y empaquetar código JavaScript/TypeScript con gran rendimiento."
    },
    {
      title: "¿Qué es Rollup?",
      response:
        "Es un bundler optimizado para librerías, que genera bundles más pequeños y simples, usando tree-shaking de manera muy eficiente."
    },
    {
      title: "¿Qué significa transpilar?",
      response:
        "Es convertir código escrito en un lenguaje o versión a otra que sea compatible (por ejemplo, TypeScript a JavaScript o ES6 a ES5)."
    },
    {
      title:
        "¿Qué diferencia hay entre desarrollo y producción en build tools?",
      response:
        "En desarrollo se prioriza la velocidad y la depuración (con sourcemaps, sin minificación). En producción se prioriza la optimización (minificación, tree shaking, code splitting)."
    },
    {
      title: "¿Qué son los loaders en Webpack?",
      response:
        "Son transformadores que permiten importar archivos que no son JavaScript (como CSS, imágenes, TypeScript) y convertirlos en módulos válidos."
    },
    {
      title: "¿Qué son los plugins en Webpack?",
      response:
        "Son extensiones que permiten modificar y extender el proceso de construcción (ejemplo: optimizar imágenes, limpiar carpetas, generar HTML automáticamente)."
    },
    {
      title: "¿Qué ventajas tiene usar Vite sobre Webpack?",
      response:
        "Mayor velocidad en el desarrollo, menor configuración, soporte nativo de ES Modules, integración directa con frameworks modernos como Vue, React y Svelte."
    }
  ]
};

export default questionsBuildTools;
