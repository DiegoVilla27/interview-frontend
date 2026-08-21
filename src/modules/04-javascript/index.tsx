import { ISection } from "../../types";

export const questionsJavascript: ISection = {
  title: "JavaScript",
  collapse: "collapseJavacript",
  icon: "javascript",
  questions: [
    // === BÁSICO ===
    { title: "¿Qué es JavaScript?", response: "JavaScript es un lenguaje de programación interpretado, de tipado débil y multiparadigma, que se utiliza principalmente en el desarrollo web para dotar de interactividad y dinamismo a las páginas.", level: "basico" },
    { title: "¿Cuál es la diferencia entre var, let y const?", response: "var tiene alcance de función y permite redeclaración. let tiene alcance de bloque y no permite redeclaración. const también tiene alcance de bloque pero define constantes que no pueden ser reasignadas (aunque objetos/arrays sí pueden mutar).", level: "basico" },
    { title: "¿Cuál es la diferencia entre == y ===?", response: "== compara valores con conversión implícita de tipos (coerción). === compara tanto valor como tipo de dato, siendo más estricto y recomendado.", level: "basico" },
    { title: "¿Qué tipos de datos primitivos existen en JavaScript?", response: "string, number, boolean, null, undefined, bigint y symbol. Son inmutables y se comparan por valor.", level: "basico" },
    { title: "¿Qué es NaN?", response: "Significa 'Not-a-Number'. Es un valor especial que indica un resultado numérico inválido. typeof NaN es 'number'. Se verifica con Number.isNaN() (no con ===).", level: "basico" },
    { title: "¿Qué diferencia hay entre null y undefined?", response: "undefined indica que una variable ha sido declarada pero no inicializada. null es un valor asignado intencionalmente para representar 'ausencia de valor'. typeof null es 'object' (bug histórico).", level: "basico" },
    { title: "¿Qué es el DOM?", response: "El DOM (Document Object Model) es la representación en forma de árbol de un documento HTML, que puede manipularse con JavaScript para modificar contenido, estructura o estilos.", level: "basico" },
    { title: "¿Qué es JSON?", response: "JSON (JavaScript Object Notation) es un formato ligero de intercambio de datos basado en texto. Se parsea con JSON.parse() y se serializa con JSON.stringify().", level: "basico" },
    { title: "¿Qué es el 'use strict'?", response: "Es un modo estricto que restringe ciertas características para prevenir errores comunes: prohíbe variables sin declarar, this global undefined, y duplicados en parámetros.", level: "basico" },
    // === MEDIO ===
    { title: "¿Qué es el hoisting en JavaScript?", response: "El hoisting eleva las declaraciones de variables y funciones al inicio de su contexto de ejecución. Funciones declaradas con function se pueden usar antes de declararlas. var se eleva con valor undefined. let/const tienen temporal dead zone.", level: "medio" },
    { title: "¿Qué es una función de callback?", response: "Es una función pasada como argumento a otra función, que se ejecuta posteriormente, normalmente tras completarse una operación asíncrona.", level: "medio" },
    { title: "¿Qué es una Promesa?", response: "Una Promesa es un objeto que representa el eventual resultado de una operación asíncrona. Tiene tres estados: pending, fulfilled y rejected. Se encadenan con .then(), .catch() y .finally().", level: "medio" },
    { title: "¿Qué es Async/Await?", response: "async define que una función devuelve una promesa, y await pausa la ejecución hasta que la promesa se resuelve. Simplifica el manejo de código asíncrono y los try/catch para errores.", level: "medio" },
    { title: "¿Qué son las funciones flecha y qué ventajas tienen?", response: "Las arrow functions tienen sintaxis más corta y no vinculan su propio this, sino que heredan el del contexto léxico en el que se crean. No tienen arguments ni pueden ser constructores.", level: "medio" },
    { title: "¿Qué es el destructuring?", response: "Es una sintaxis que extrae valores de arrays u objetos: const { name, age } = user; const [first, ...rest] = array; Soporta valores por defecto y renombrado.", level: "medio" },
    { title: "¿Qué son los módulos en JavaScript?", response: "Son archivos reutilizables que exportan/importan código. ES Modules usa import/export (estático, tree-shakeable). CommonJS usa require/module.exports (dinámico, Node.js).", level: "medio" },
    { title: "¿Qué son las clases en JavaScript?", response: "Son azúcar sintáctico sobre prototipos introducido en ES6. Permiten definir constructores, métodos, herencia (extends), propiedades estáticas y campos privados (#field).", level: "medio" },
    { title: "¿Qué es el this en JavaScript?", response: "this referencia el contexto de ejecución. Su valor depende de la invocación: método → objeto, función → global/undefined, arrow → léxico, call/apply/bind → explícito.", level: "medio" },
    { title: "¿Qué diferencia hay entre inmutabilidad y mutabilidad?", response: "Los primitivos son inmutables. Los objetos y arrays son mutables por referencia. Para inmutabilidad: Object.freeze(), spread operator, structuredClone() para deep copy.", level: "medio" },
    // === AVANZADO ===
    { title: "¿Qué es el event loop?", response: "Es el mecanismo que gestiona la ejecución en un entorno single-threaded. Ejecuta el call stack, luego todas las microtasks (Promises, queueMicrotask), y después la siguiente macrotask (setTimeout, I/O).", level: "avanzado" },
    { title: "¿Qué son los closures?", response: "Un closure es una función que 'recuerda' el scope en el que fue creada, manteniendo acceso a sus variables incluso después de que ese scope haya terminado. Es la base de patrones como módulos, factories y data privacy.", level: "avanzado" },
    { title: "¿Qué es el prototipo en JavaScript?", response: "El prototipo es un objeto del cual otros objetos heredan propiedades y métodos. Cada objeto tiene un [[Prototype]] interno. La cadena prototípica termina en Object.prototype → null.", level: "avanzado" },
    { title: "¿Qué es la programación funcional en JavaScript?", response: "Es un paradigma que trata funciones como ciudadanos de primera clase. Favorece inmutabilidad, composición, funciones puras (sin side effects), y HOFs como map, filter, reduce, flatMap.", level: "avanzado" },
    { title: "¿Qué es currying en JavaScript?", response: "Currying transforma f(a, b, c) en f(a)(b)(c). Permite aplicación parcial y composición. Ejemplo: const add = (a) => (b) => a + b; add(5)(3) → 8.", level: "avanzado" },
    { title: "¿Qué es memoization?", response: "Técnica de optimización que cachea resultados de funciones costosas. Si se invoca con los mismos argumentos, retorna el valor cacheado. Útil en recursión (fibonacci) y renders (React.memo).", level: "avanzado" },
    { title: "¿Qué es la event delegation?", response: "Técnica que maneja eventos en un elemento padre en lugar de cada hijo, aprovechando el event bubbling. Mejora rendimiento con listas dinámicas y reduce listeners.", level: "avanzado" },
    { title: "¿Qué es AbortController y cuándo se usa?", response: "API para cancelar operaciones asíncronas como fetch. Se crea un controller, se pasa su signal a la operación, y controller.abort() la cancela. Esencial para cleanup en React useEffect.", level: "avanzado" },
    { title: "¿Qué son los Web Workers?", response: "Son hilos en segundo plano que ejecutan JavaScript en paralelo sin bloquear el UI thread. Se comunican con postMessage/onmessage. Ideales para cálculos pesados.", level: "avanzado" },
    { title: "Explica la cola de microtareas vs macrotareas.", response: "Macrotasks: setTimeout, setInterval, I/O, requestAnimationFrame. Microtasks: Promises, queueMicrotask, MutationObserver. El event loop vacía TODAS las microtasks antes de la siguiente macrotask.", level: "avanzado" },
    // === EXPERTO ===
    { title: "¿Qué es un generator en JavaScript?", response: "Una función (function*) que puede pausar (yield) y reanudar su ejecución. Devuelve un iterator. Útil para iteración lazy, control de flujo asíncrono, y generación de secuencias infinitas.", level: "experto" },
    { title: "¿Qué es un WeakMap y un WeakSet?", response: "Estructuras con referencias débiles a objetos. Las claves (WeakMap) o valores (WeakSet) pueden ser garbage collected si no hay otras referencias. Ideales para metadatos privados y caches sin memory leaks.", level: "experto" },
    { title: "¿Qué son los proxies en JavaScript?", response: "Un Proxy envuelve un objeto e intercepta operaciones fundamentales (get, set, has, deleteProperty, apply). Permite validación reactiva, logging, lazy loading, y es la base de frameworks reactivos como Vue 3.", level: "experto" },
    { title: "¿Qué es el patrón Observer en JavaScript?", response: "Un patrón donde un subject notifica a observers cuando su estado cambia. Se implementa con EventEmitter, CustomEvent, o RxJS Observables. Base de la programación reactiva.", level: "experto" },
    { title: "¿Qué es Structured Clone y cuándo se usa?", response: "structuredClone() crea un deep clone de objetos, incluyendo Date, Map, Set, ArrayBuffer, y referencias circulares. A diferencia de JSON.parse(JSON.stringify()), preserva tipos especiales.", level: "experto" },
    { title: "¿Qué es el Temporal API y qué problemas resuelve?", response: "Temporal es la propuesta TC39 para reemplazar Date. Ofrece tipos inmutables (PlainDate, ZonedDateTime, Duration), manejo correcto de zonas horarias, aritmética de fechas, y API funcional sin las inconsistencias de Date.", level: "experto" },
    { title: "¿Qué son los Records y Tuples en JavaScript?", response: "Son propuestas TC39 para tipos inmutables: #{ name: 'Diego' } (Record) y #[1, 2, 3] (Tuple). Se comparan por valor (no por referencia), son hashables, y garantizan inmutabilidad profunda.", level: "experto" },
    { title: "¿Qué es el patrón Module con closures vs ES Modules?", response: "El Module pattern usa IIFEs y closures para encapsular estado privado. ES Modules ofrecen encapsulación nativa a nivel de archivo con import/export. ES Modules son estáticos (tree-shakeable), el pattern es dinámico.", level: "experto" }
  ]
};

export default questionsJavascript;
