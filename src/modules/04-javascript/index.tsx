import { ISection } from "../../types";

export const questionsJavascript: ISection = {
  title: "Javacript",
  collapse: "collapseJavacript",
  icon: "javascript",
  questions: [
    {
      title: "¿Qué es JavaScript?",
      response:
        "JavaScript es un lenguaje de programación interpretado, de tipado débil y multiparadigma, que se utiliza principalmente en el desarrollo web para dotar de interactividad y dinamismo a las páginas."
    },
    {
      title: "¿Qué es el hoisting en JavaScript?",
      response:
        "El hoisting es el comportamiento por el cual las declaraciones de variables y funciones se mueven implícitamente al inicio de su contexto de ejecución (scope). En el caso de funciones declaradas con function, se pueden usar antes de declararlas. Para variables declaradas con var se 'elevan' pero sin inicializar."
    },
    {
      title: "¿Cuál es la diferencia de hoisting entre var, let y const?",
      response:
        "Las variables declaradas con var se elevan pero con valor undefined. Las declaradas con let y const también se elevan, pero no pueden usarse hasta que se ejecuta su declaración (temporal dead zone)."
    },
    {
      title: "¿Cuál es la diferencia entre var, let y const?",
      response:
        "var tiene alcance de función y permite redeclaración. let tiene alcance de bloque y no permite redeclaración en el mismo ámbito. const también tiene alcance de bloque pero define constantes que no pueden ser reasignadas."
    },
    {
      title: "¿Cuál es la diferencia entre == y ===?",
      response:
        "== compara valores con conversión implícita de tipos (coerción). === compara tanto valor como tipo de dato, por lo que es más estricto."
    },
    {
      title: "¿Qué tipos de datos primitivos existen en JavaScript?",
      response: "string, number, boolean, null, undefined, bigint y symbol."
    },
    {
      title: "¿Qué es NaN?",
      response:
        "Significa 'Not-a-Number'. Es un valor especial que indica un resultado numérico inválido. Ejemplo: parseInt('abc')."
    },
    {
      title: "¿Qué es el 'use strict'?",
      response:
        "Es un modo estricto que restringe ciertas características de JavaScript para prevenir errores comunes. Por ejemplo, prohíbe usar variables sin declararlas."
    },
    {
      title: "¿Qué es el DOM?",
      response:
        "El DOM (Document Object Model) es la representación en forma de árbol de un documento HTML, que puede manipularse con JavaScript para modificar su contenido, estructura o estilos."
    },
    {
      title: "¿Qué es el BOM?",
      response:
        "El BOM (Browser Object Model) representa el navegador y su entorno, incluyendo objetos como window, navigator, screen, location y history."
    },
    {
      title: "¿Qué es una función de callback?",
      response:
        "Es una función pasada como argumento a otra función, que se ejecuta posteriormente, normalmente tras completarse una tarea."
    },
    {
      title: "¿Qué es Hoisting?",
      response:
        "Es el comportamiento de JavaScript en el que las declaraciones de variables (var) y funciones se 'elevan' al inicio de su contexto de ejecución, aunque las asignaciones no."
    },
    {
      title: "¿Qué es una Promesa?",
      response:
        "Una Promesa es un objeto que representa el eventual resultado de una operación asíncrona. Tiene tres estados: pending, fulfilled y rejected."
    },
    {
      title: "¿Qué es Async/Await?",
      response:
        "Async/Await es una sintaxis que simplifica el manejo de código asíncrono. async define que una función devuelve una promesa, y await pausa la ejecución hasta que la promesa se resuelve."
    },
    {
      title: "¿Qué son las funciones flecha y qué ventajas tienen?",
      response:
        "Las arrow functions tienen una sintaxis más corta y no vinculan su propio this, sino que heredan el del contexto en el que se crean."
    },
    {
      title: "¿Qué es el event loop?",
      response:
        "Es el mecanismo de JavaScript que gestiona la ejecución de tareas, el stack y la cola de eventos, permitiendo la programación asíncrona en un entorno single-threaded."
    },
    {
      title: "¿Qué diferencia hay entre null y undefined?",
      response:
        "undefined indica que una variable ha sido declarada pero no inicializada. null es un valor asignado intencionalmente para representar 'ausencia de valor'."
    },
    {
      title: "¿Qué son los closures?",
      response:
        "Un closure es una función que 'recuerda' el contexto en el que fue creada, pudiendo acceder a las variables de dicho ámbito incluso después de que éste haya terminado."
    },
    {
      title: "Dame un ejemplo de closure en JavaScript.",
      response:
        "function crearContador() { let contador = 0; return function() { contador++; return contador; }; } const miContador = crearContador(); miContador(); // 1, miContador(); // 2."
    },
    {
      title:
        "¿Qué diferencia hay entre inmutabilidad y mutabilidad en JavaScript?",
      response:
        "Los tipos primitivos son inmutables (string, number, boolean), mientras que los objetos y arrays son mutables y pueden modificarse sin cambiar su referencia."
    },
    {
      title: "¿Qué es JSON?",
      response:
        "JSON (JavaScript Object Notation) es un formato ligero de intercambio de datos basado en texto, ampliamente usado en APIs."
    },
    {
      title: "¿Qué es el destructuring?",
      response:
        "Es una sintaxis que permite extraer valores de arrays u objetos y asignarlos a variables de forma más concisa."
    },
    {
      title: "¿Qué son los módulos en JavaScript?",
      response:
        "Son archivos reutilizables que exportan y/o importan código (variables, funciones, clases). Desde ES6 se implementa con import y export."
    },
    {
      title: "¿Qué es el prototipo en JavaScript?",
      response:
        "El prototipo es un objeto del cual otros objetos heredan propiedades y métodos. Es la base del sistema de herencia prototípica en JavaScript."
    },
    {
      title: "¿Qué son las clases en JavaScript?",
      response:
        "Son una forma sintáctica introducida en ES6 para trabajar con objetos y herencia de forma más clara, aunque internamente usan prototipos."
    },
    {
      title: "¿Qué es el this en JavaScript?",
      response:
        "this hace referencia al contexto de ejecución actual. Su valor depende de cómo se invoque la función: puede ser el objeto global, un objeto específico o undefined en strict mode."
    },
    {
      title: "¿Qué es la programación funcional en JavaScript?",
      response:
        "Es un paradigma que trata las funciones como ciudadanos de primera clase, favoreciendo la inmutabilidad, composición y el uso de funciones puras como map, filter, reduce."
    },
    {
      title: "¿Qué es el patrón Observer en JavaScript?",
      response:
        "Es un patrón de diseño en el que un objeto (subject) notifica automáticamente a otros (observers) cuando su estado cambia. Se usa en eventos y en librerías reactivas."
    },
    {
      title: "¿Qué es un generator en JavaScript?",
      response:
        "Un generator es una función especial (definida con function*) que puede pausar y reanudar su ejecución, devolviendo múltiples valores a través de yield."
    },
    {
      title: "¿Qué es un WeakMap y un WeakSet?",
      response:
        "Son estructuras de datos similares a Map y Set pero con referencias débiles a los objetos, lo que permite la recolección de basura automática sin generar fugas de memoria."
    },
    {
      title: "¿Qué es AbortController y explicar su uso?",
      response:
        "AbortController es una API que permite cancelar operaciones asíncronas como fetch. Se usa creando un controller, pasando su signal a la operación y llamando a controller.abort() para detenerla."
    },
    {
      title: "¿Qué aporta el uso de TypeScript en lugar de JavaScript?",
      response:
        "TypeScript agrega tipado estático, interfaces, enums y otras características que mejoran la mantenibilidad, detección temprana de errores y escalabilidad de proyectos grandes."
    },
    {
      title:
        "Explica cómo funciona la cola de microtareas y macrotareas en JavaScript.",
      response:
        "Las macrotareas incluyen setTimeout, setInterval, I/O, etc. Las microtareas incluyen Promises y MutationObserver. El event loop ejecuta primero todas las microtareas pendientes antes de pasar a la siguiente macrotarea."
    },
    {
      title: "¿Qué es currying en JavaScript?",
      response:
        "Currying es transformar una función que recibe múltiples argumentos en una secuencia de funciones que reciben un solo argumento cada una."
    },
    {
      title: "¿Qué es memoization?",
      response:
        "Es una técnica de optimización que almacena los resultados de funciones costosas y devuelve el resultado en caché cuando se invocan con los mismos argumentos."
    },
    {
      title: "¿Qué son los Web Workers?",
      response:
        "Son hilos en segundo plano que permiten ejecutar código JavaScript en paralelo sin bloquear el hilo principal (UI thread)."
    },
    {
      title: "¿Qué es la event delegation?",
      response:
        "Es una técnica que consiste en manejar eventos en un elemento padre en lugar de en cada hijo, aprovechando el bubbling para mejorar el rendimiento."
    },
    {
      title: "¿Qué son los proxies en JavaScript?",
      response:
        "Un Proxy es un objeto que envuelve a otro objeto o función y permite interceptar y redefinir operaciones fundamentales como lectura, escritura o invocación."
    }
  ]
};

export default questionsJavascript;
