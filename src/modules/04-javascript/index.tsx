import { ISection } from "../../types";

export const questionsJavascript: ISection = {
  id: "javascript",
  title: "JavaScript",
  collapse: "collapseJavascript",
  icon: "javascript",
  category: "javascript-typescript",
  description:
    "Mecánica del motor V8, Event Loop, closures, prototipos, concurrencia asíncrona, metaprogramación y estándares ESNext.",
  questions: [
    {
      id: "js-01",
      title: "\u00bfQu\u00e9 es JavaScript?",
      level: "basico",
      tags: ["JavaScript", "V8", "JIT", "Single-Threaded", "ECMAScript"],
      response: "JavaScript es un lenguaje de programaci\u00f3n de alto nivel, interpretado y compilado Just-In-Time (JIT), din\u00e1mico, de tipado d\u00e9bil y basado en prototipos. Es el \u00fanico lenguaje de programaci\u00f3n nativo del navegador web para interactividad. Opera sobre un modelo de concurrencia de un solo hilo principal (single-threaded) con un bucle de eventos (Event Loop) no bloqueante para gestionar operaciones as\u00edncronas de entrada/salida (I/O). Sus especificaciones son estandarizadas por el comit\u00e9 TC39 bajo la norma internacional ECMAScript.",
      codeExample: {
        language: "javascript",
        code: `// Características centrales: Tipado dinámico y funciones de primera clase
function calculateDiscount(price, rate = 0.15) {
  return price - (price * rate);
}

const operations = [calculateDiscount];
console.log('Precio final:', operations[0](100, 0.2)); // 80`,
        explanation: "JavaScript trata a las funciones como valores de primera clase que pueden almacenarse en variables, arreglos o pasarse como argumentos."
      },
      visualDiagram: {
        id: "diag-js-engine",
        title: "Arquitectura del Motor JavaScript (V8)",
        caption: "C\u00f3digo JS \u2794 Parser (AST) \u2794 Ignition (Bytecode) \u2794 TurboFan (JIT C\u00f3digo M\u00e1quina Optimizado).",
        diagramType: "js-engine-architecture"
      },
      interviewTips: {
        whatInterviewersWant: "Mencionar que es single-threaded, no bloqueante (Event Loop), multiparadigma y gobernado por el est\u00e1ndar ECMAScript (TC39).",
        commonPitfalls: ["Confundir JavaScript con Java o decir que es 'puramente interpretado' sin mencionar los compiladores JIT modernos."],
        followUps: [
          "¿Qué diferencia hay entre el lenguaje (ECMAScript) y el entorno de ejecución (navegador, Node.js)?",
          "¿Cómo compila un motor como V8 el código JavaScript (JIT)?"
        ]
      },
      quiz: {
        question: "\u00bfQu\u00e9 comit\u00e9 oficial de est\u00e1ndares se encarga de evolucionar la especificaci\u00f3n de ECMAScript / JavaScript?",
        options: ["W3C", "TC39 de ECMA International", "IETF", "WHATWG"],
        correctIndex: 1,
        explanation: "El TC39 (Technical Committee 39) de ECMA International dise\u00f1a y aprueba las especificaciones del lenguaje ECMAScript."
      }
    },
    {
      id: "js-02",
      title: "\u00bfCu\u00e1l es la diferencia entre var, let y const?",
      level: "basico",
      tags: ["var", "let", "const", "Scope", "TDZ"],
      response: "La diferencia radica en alcance (scope), elevaci\u00f3n (hoisting) y reasignaci\u00f3n: 1. 'var': Posee alcance de funci\u00f3n (function scope) o global; ignora bloques if/for; permite redeclaraci\u00f3n y sufre hoisting inicializ\u00e1ndose con 'undefined'. 2. 'let': Posee alcance de bloque (block scope {}), proh\u00edbe redeclaraci\u00f3n en el mismo \u00e1mbito, permite reasignaci\u00f3n y sufre hoisting permaneciendo en la Temporal Dead Zone (TDZ). 3. 'const': Posee alcance de bloque, exige inicializaci\u00f3n obligatoria inmediata, proh\u00edbe reasignaci\u00f3n del enlace (aunque los miembros internos de un objeto o array mutable s\u00ed pueden modificarse) y opera bajo la TDZ.",
      codeExample: {
        language: "javascript",
        code: `// 1. var ignora el bloque
if (true) { var legacy = 'visible fuera'; }
console.log(legacy); // 'visible fuera'

// 2. let respeta el bloque
if (true) { let blockScoped = 42; }
// console.log(blockScoped); // ReferenceError!

// 3. const protege la referencia, no la mutabilidad interna
const user = { name: 'Diego' };
user.name = 'Diego Villa'; // Válido (mutación interna)
// user = {}; // TypeError: Assignment to constant variable.`,
        explanation: "'const' garantiza que la variable siempre apuntar\u00e1 a la misma referencia en memoria, pero no congela las propiedades internas del objeto."
      },
      visualDiagram: {
        id: "diag-js-scope-vars",
        title: "Alcance de Variables: var vs let vs const",
        caption: "var (Function Scope / Global) vs let y const (Block Scope estricto {} con Temporal Dead Zone).",
        diagramType: "js-scope-var-let-const"
      },
      interviewTips: {
        whatInterviewersWant: "Aclarar que const no hace el objeto inmutable (solo el enlace) y se\u00f1alar el peligro de fugas de memoria y sobreescrituras accidentales de 'var'.",
        commonPitfalls: ["Creer que 'const' crea objetos inmutables sin usar Object.freeze()."],
        followUps: [
          "¿Qué es la Temporal Dead Zone?",
          "¿Un objeto declarado con const es inmutable?"
        ]
      },
      quiz: {
        question: "\u00bfQu\u00e9 ocurre si se intenta reasignar una variable declarada con const?",
        options: ["Se convierte autom\u00e1ticamente en let", "Lanza un TypeError en tiempo de ejecuci\u00f3n", "Falla en silencio sin modificar el valor", "Crea una copia superficial en el Heap"],
        correctIndex: 1,
        explanation: "El motor de JavaScript arroja un TypeError: Assignment to constant variable al intentar reasignar una variable const."
      }
    },
    {
      id: "js-03",
      title: "\u00bfCu\u00e1l es la diferencia entre == y ===?",
      level: "basico",
      tags: ["Equality", "Coerci\u00f3n", "Type Conversion", "Strict Equality"],
      response: "El operador de igualdad abstracta (==) compara dos valores aplicando coerci\u00f3n impl\u00edcita de tipos (conversi\u00f3n autom\u00e1tica seg\u00fan el algoritmo abstracto ToPrimitive / ToNumber) si los operandos no son del mismo tipo. El operador de igualdad estricta (===) compara tanto el tipo de dato como el valor sin ninguna conversi\u00f3n impl\u00edcita: si los tipos difieren, devuelve inmediatamente 'false'. Salvo casos muy espec\u00edficos como 'x == null' (para chequear null y undefined simult\u00e1neamente), la regla de oro en frontend moderno es usar siempre '==='.",
      codeExample: {
        language: "javascript",
        code: `// Igualdad con coerción (==)
console.log('5' == 5);      // true (string convertido a número)
console.log(0 == false);    // true (false convertido a 0)
console.log(null == undefined); // true

// Igualdad estricta (===)
console.log('5' === 5);     // false (string !== number)
console.log(0 === false);   // false (number !== boolean)
console.log(null === undefined); // false

// Caso especial: Comparación de NaN
console.log(NaN === NaN);   // false (usar Number.isNaN u Object.is)`,
        explanation: "'===' garantiza predictibilidad absoluta evitando las reglas complejas de coerci\u00f3n impl\u00edcita de JavaScript."
      },
      visualDiagram: {
        id: "diag-js-equality",
        title: "Comparaci\u00f3n: Igualdad Abstracta (==) vs Estricta (===)",
        caption: "== convierte tipos autom\u00e1ticamente con reglas ToPrimitive; === exige mismo tipo y valor sin coerci\u00f3n.",
        diagramType: "js-equality-coercion"
      },
      interviewTips: {
        whatInterviewersWant: "Demostrar que comprendes c\u00f3mo opera la coerci\u00f3n de tipos (ToNumber / ToPrimitive) y citar que NaN !== NaN por est\u00e1ndar IEEE 754.",
        commonPitfalls: ["Pensar que '==' es m\u00e1s r\u00e1pido que '===' (en realidad '===' es m\u00e1s r\u00e1pido al evitar la rama de conversi\u00f3n de tipos)."],
        followUps: [
          "¿Qué devuelve [] == ![] y por qué?",
          "¿Qué diferencia hay entre === y Object.is()?"
        ]
      },
      quiz: {
        question: "\u00bfCu\u00e1l es el resultado de evaluar: [] == false en JavaScript?",
        options: ["false", "true", "TypeError", "undefined"],
        correctIndex: 1,
        explanation: "El array vac\u00edo [] se convierte a string primitivo '', y '' convertido a n\u00famero es 0; false convertido a n\u00famero es 0; por tanto 0 == 0 es true."
      }
    },
    {
      id: "js-04",
      title: "\u00bfQu\u00e9 tipos de datos primitivos existen en JavaScript?",
      level: "basico",
      tags: ["Primitivos", "Tipos de Datos", "Call Stack", "Heap"],
      response: "En JavaScript existen 7 tipos de datos primitivos definidos por la especificaci\u00f3n: string, number, bigint, boolean, undefined, symbol y null. Los primitivos se caracterizan por ser inmutables (su valor no puede ser alterado internamente) y se almacenan y comparan por VALOR directamente en el Call Stack. Cualquier otro tipo en JavaScript (Object, Array, Function, Map, Set, Date, RegExp) es un Objeto que se asigna din\u00e1micamente en el Memory Heap y se manipula por REFERENCIA.",
      codeExample: {
        language: "javascript",
        code: `// Inmutabilidad de tipos primitivos
let primitiveStr = 'Hola';
primitiveStr.toUpperCase(); // Retorna nuevo string, no muta original
console.log(primitiveStr);  // 'Hola'

// Copia por valor
let a = 10;
let b = a;
b = 20;
console.log(a); // 10 (a no cambia)

// Símbolos y BigInts primitivos
const sym = Symbol('id_unico');
const big = 9007199254740991n + 2n;`,
        explanation: "Los primitivos se copian por valor completo; reasignar la copia jam\u00e1s afecta a la variable original."
      },
      visualDiagram: {
        id: "diag-js-primitives",
        title: "Tipos Primitivos (Call Stack) vs Objetos (Memory Heap)",
        caption: "7 primitivos almacenados por valor en el Call Stack vs Objetos din\u00e1micos en el Heap gestionados por referencia.",
        diagramType: "js-primitives-vs-reference"
      },
      interviewTips: {
        whatInterviewersWant: "Enumerar los 7 tipos primitivos de memoria (recordando symbol y bigint) y explicar la diferencia entre copia por valor vs referencia.",
        commonPitfalls: ["Olvidar que 'null' y 'undefined' son primitivos, o clasificar 'function' como primitivo."],
        followUps: [
          "¿Por qué typeof null devuelve 'object'?",
          "¿Qué son los wrapper objects y por qué 'hola'.length funciona en un primitivo?"
        ]
      },
      quiz: {
        question: "\u00bfCu\u00e1l de los siguientes NO es un tipo primitivo en JavaScript?",
        options: ["symbol", "bigint", "function", "undefined"],
        correctIndex: 2,
        explanation: "Las funciones son objetos invocables de primera clase (instancias de Function), por lo que pertenecen a los tipos por referencia."
      }
    },
    {
      id: "js-05",
      title: "\u00bfQu\u00e9 es NaN?",
      level: "basico",
      tags: ["NaN", "Number", "IEEE 754", "Number.isNaN"],
      response: "NaN significa 'Not-a-Number'. Es una propiedad del objeto global y un valor num\u00e9rico especial definido por el est\u00e1ndar de coma flotante IEEE 754 para representar el resultado indefinido o inv\u00e1lido de operaciones aritm\u00e9ticas (como 0 / 0 o Math.sqrt(-1)). A pesar de su nombre, su tipo de dato t\u00e9cnico es 'number' (typeof NaN === 'number'). Su caracter\u00edstica m\u00e1s singular es que es el \u00fanico valor en JavaScript que NO es igual a s\u00ed mismo (NaN === NaN devuelve false). Para detectarlo de forma estricta se debe usar 'Number.isNaN()'.",
      codeExample: {
        language: "javascript",
        code: `// Operaciones que producen NaN
const invalidCalc = 0 / 0; // NaN
const parseFail = parseInt('NoEsNumero', 10); // NaN

console.log(typeof NaN); // 'number'

// La trampa de la igualdad:
console.log(NaN === NaN); // false

// Detección segura vs insegura:
console.log(isNaN('hola'));        // true (coerción defectuosa a número)
console.log(Number.isNaN('hola')); // false (verificación estricta real)
console.log(Number.isNaN(NaN));    // true`,
        explanation: "Number.isNaN() eval\u00faa estrictamente si el valor recibido es NaN sin intentar forzar una conversi\u00f3n previa de tipos."
      },
      visualDiagram: {
        id: "diag-js-nan",
        title: "Naturaleza de NaN (IEEE 754)",
        caption: "typeof NaN es 'number'; NaN !== NaN; Number.isNaN() verifica sin coerci\u00f3n defectuosa.",
        diagramType: "js-nan-ieee754"
      },
      interviewTips: {
        whatInterviewersWant: "Se\u00f1alar la trampa de 'typeof NaN === number' y explicar la diferencia cr\u00edtica entre el 'isNaN()' global (inseguro) y 'Number.isNaN()' de ES6.",
        commonPitfalls: ["Intentar validar con 'if (x === NaN)' (siempre evaluar\u00e1 a false)."],
        followUps: [
          "¿Por qué NaN !== NaN?",
          "¿Qué diferencia hay entre isNaN() y Number.isNaN()?"
        ]
      },
      quiz: {
        question: "\u00bfCu\u00e1l es el resultado de evaluar typeof NaN en JavaScript?",
        options: ["'undefined'", "'nan'", "'number'", "'object'"],
        correctIndex: 2,
        explanation: "Seg\u00fan la especificaci\u00f3n ECMAScript e IEEE 754, NaN es un valor especial perteneciente al tipo 'number'."
      }
    },
    {
      id: "js-06",
      title: "\u00bfQu\u00e9 diferencia hay entre null y undefined?",
      level: "basico",
      tags: ["null", "undefined", "Tipos", "Coerci\u00f3n"],
      response: "'undefined' significa que una variable ha sido declarada pero a\u00fan no se le ha asignado ning\u00fan valor; es tambi\u00e9n el valor retornado por defecto por funciones que no tienen sentencia 'return' expl\u00edcita o cuando se accede a propiedades inexistentes de un objeto. Por el contrario, 'null' es un valor literal de asignaci\u00f3n intencional que representa expl\u00edcitamente la ausencia deliberada de cualquier valor u objeto. Curiosamente, 'typeof null' devuelve 'object' debido a un bug hist\u00f3rico del motor de JavaScript de 1995 que no fue corregido para preservar compatibilidad hacia atr\u00e1s.",
      codeExample: {
        language: "javascript",
        code: `// undefined: Involuntario / Inicial
let declaredVar;
console.log(declaredVar); // undefined
console.log(typeof undefined); // 'undefined'

// null: Intencional / Explícito
let activeUser = null; // Declaramos intencionalmente que no hay usuario
console.log(typeof null); // 'object' (Bug histórico de JS)

// Comparaciones:
console.log(null == undefined);  // true (ambos representan falsy sin valor)
console.log(null === undefined); // false (tipos distintos)

// Operador de coalescencia nula (??)
const score = null ?? 100; // 100 (aplica a null o undefined)`,
        explanation: "El operador ?? (Nullish Coalescing) comprueba si un valor es null o undefined, ignorando otros valores falsy como 0 o false."
      },
      visualDiagram: {
        id: "diag-js-null-undefined",
        title: "Comparativa Sem\u00e1ntica: null vs undefined",
        caption: "undefined = no inicializado / por defecto del motor; null = ausencia deliberada fijada por el desarrollador.",
        diagramType: "js-null-vs-undefined"
      },
      interviewTips: {
        whatInterviewersWant: "Explicar el matiz conceptual (intencional vs no asignado), mencionar 'typeof null === object' como error hist\u00f3rico y el uso del operador ??.",
        commonPitfalls: ["Tratarlos como intercambiables o usar '||' en lugar de '??' cuando 0 o false son valores v\u00e1lidos."],
        followUps: [
          "¿Qué diferencia hay entre los operadores ?? y ||?",
          "¿Cómo trata JSON.stringify a las propiedades con valor undefined?"
        ]
      },
      quiz: {
        question: "\u00bfPor qu\u00e9 la expresi\u00f3n typeof null devuelve 'object' en JavaScript?",
        options: ["Porque null hereda directamente de Object.prototype", "Por un bug hist\u00f3rico en la implementaci\u00f3n original de JS donde el tag de tipo de los objetos era 000", "Porque null se almacena exclusivamente en el Heap", "Es el comportamiento est\u00e1ndar de TypeScript"],
        correctIndex: 1,
        explanation: "En la primera versi\u00f3n de JS, los valores se representaban con un tag de tipo. El tag para 'object' era 000; como el puntero de null era NULL (0x00), el motor lo clasific\u00f3 como object."
      }
    },
    {
      id: "js-07",
      title: "\u00bfQu\u00e9 es el DOM?",
      level: "basico",
      tags: ["DOM", "Document", "Nodos", "Tree", "Browser"],
      response: "El DOM (Document Object Model) es una interfaz de programaci\u00f3n de aplicaciones (API) estandarizada por el W3C/WHATWG que representa la estructura jer\u00e1rquica de un documento HTML o XML como un \u00e1rbol de objetos vivos en memoria. Cada etiqueta, atributo y bloque de texto se convierte en un nodo programable. JavaScript no es parte del DOM en s\u00ed, sino el lenguaje con el que interactuamos con esta API del navegador para consultar elementos (querySelector), escuchar eventos (addEventListener), mutar estilos y estructurar din\u00e1micamente la interfaz.",
      codeExample: {
        language: "javascript",
        code: `// Interacción fundamental con el árbol DOM
const button = document.createElement('button');
button.textContent = 'Actualizar Feed';
button.className = 'btn-primary';

// Escucha de eventos y mutación del DOM
button.addEventListener('click', () => {
  const container = document.querySelector('#feed-container');
  const alert = document.createElement('div');
  alert.textContent = 'Feed sincronizado con éxito';
  container?.replaceChildren(alert);
});

document.body.appendChild(button);`,
        explanation: "El DOM expone interfaces Node, Element y Document para mutar el \u00e1rbol visual en tiempo de ejecuci\u00f3n."
      },
      visualDiagram: {
        id: "diag-js-dom-tree",
        title: "\u00c1rbol de Nodos del Document Object Model (DOM)",
        caption: "Document \u2794 Elemento ra\u00edz <html> \u2794 Nodos Elemento (<head>, <body>) \u2794 Nodos de Texto.",
        diagramType: "browser-dom-tree-nodes"
      },
      interviewTips: {
        whatInterviewersWant: "Aclarar que el DOM es una API provista por el entorno hu\u00e9sped (el navegador), no una caracter\u00edstica central de ECMAScript.",
        commonPitfalls: ["Creer que el DOM existe nativamente dentro de Node.js sin emuladores como JSDOM."],
        followUps: [
          "¿Qué diferencia hay entre innerHTML, textContent e innerText?",
          "¿Por qué manipular el DOM en bucles puede ser costoso y cómo lo optimizarías?"
        ]
      },
      quiz: {
        question: "\u00bfCu\u00e1l es la especificaci\u00f3n oficial que define el est\u00e1ndar del DOM actual?",
        options: ["ECMAScript 2024", "DOM Living Standard de WHATWG", "CSSWG", "POSIX Standard"],
        correctIndex: 1,
        explanation: "El WHATWG mantiene el DOM Living Standard que todos los motores de navegadores modernos implementan."
      }
    },
    {
      id: "js-08",
      title: "\u00bfQu\u00e9 es JSON?",
      level: "basico",
      tags: ["JSON", "Serialization", "JSON.parse", "JSON.stringify"],
      response: "JSON (JavaScript Object Notation) es un formato de texto ligero, universal y agn\u00f3stico del lenguaje para el intercambio y almacenamiento de datos estructurados. Deriva sint\u00e1cticamente de los objetos literales de JavaScript, pero impone reglas estrictas: todas las claves deben ir entre comillas dobles (\"clave\": \"valor\"), no permite funciones, valores 'undefined', comentarios ni referencias circulares. Se manipula nativamente en JS con dos m\u00e9todos est\u00e1ticos: 'JSON.stringify()' (convierte un objeto a string JSON) y 'JSON.parse()' (deserializa un string JSON a objeto JS).",
      codeExample: {
        language: "javascript",
        code: `const userObj = {
  id: 101,
  name: 'Diego',
  active: true,
  tags: ['frontend', 'architect']
};

// 1. Serialización a String JSON
const jsonString = JSON.stringify(userObj, null, 2);
console.log(typeof jsonString); // 'string'

// 2. Deserialización a Objeto JavaScript vivo
const parsedObj = JSON.parse(jsonString);
console.log(parsedObj.name); // 'Diego'`,
        explanation: "JSON.stringify y JSON.parse permiten transferir datos de forma estructurada a trav\u00e9s de la red o en storage local."
      },
      visualDiagram: {
        id: "diag-js-json",
        title: "Ciclo de Serializaci\u00f3n y Deserializaci\u00f3n JSON",
        caption: "Objeto en Memoria \u2794 JSON.stringify (Serializaci\u00f3n) \u2794 Texto JSON \u2794 JSON.parse (Deserializaci\u00f3n).",
        diagramType: "js-json-serialization"
      },
      interviewTips: {
        whatInterviewersWant: "Recordar que JSON no soporta funciones, Dates (las convierte a string ISO), undefined, ni referencias circulares (lanza TypeError).",
        commonPitfalls: ["Intentar clonar objetos con m\u00e9todos usando JSON.parse(JSON.stringify()) en lugar de structuredClone()."],
        followUps: [
          "¿Qué tipos de datos se pierden con JSON.stringify (Date, Map, undefined, funciones)?",
          "¿Para qué sirven los parámetros replacer y reviver?"
        ]
      },
      quiz: {
        question: "\u00bfQu\u00e9 ocurre al serializar con JSON.stringify un objeto que contiene una propiedad con valor undefined?",
        options: ["Lanza un SyntaxError", "La propiedad se omite por completo del JSON resultante", "Se serializa como 'null'", "Se convierte en string 'undefined'"],
        correctIndex: 1,
        explanation: "JSON.stringify omite las propiedades cuyos valores sean undefined o funciones al serializar objetos."
      }
    },
    {
      id: "js-09",
      title: "\u00bfQu\u00e9 es el 'use strict'?",
      level: "basico",
      tags: ["use strict", "Modo Estricto", "Seguridad", "ES6"],
      response: "'use strict' es una directiva literal introducida en ECMAScript 5 que activa el modo estricto en un script completo o en una funci\u00f3n individual. Transforma errores silenciosos del modo 'sloppy' en excepciones expl\u00edcitas lanzadas en tiempo de ejecuci\u00f3n: proh\u00edbe la creaci\u00f3n accidental de variables globales sin declarar (x = 10 lanza ReferenceError), impide asignar valores a propiedades de solo lectura, desactiva el 'this' autom\u00e1tico apuntando a window en funciones sueltas (quedando como undefined) y proh\u00edbe sintaxis obsoletas como 'with'. En el ecosistema moderno, los m\u00f3dulos ES (ESM) y las clases operan siempre en modo estricto de forma impl\u00edcita.",
      codeExample: {
        language: "javascript",
        code: `"use strict";

// 1. Prohíbe variables no declaradas:
try {
  implicitGlobal = 42; // ReferenceError: implicitGlobal is not defined
} catch (e) {
  console.error(e.message);
}

// 2. this en funciones sueltas es undefined (no apunta al window)
function checkThis() {
  return this;
}
console.log(checkThis()); // undefined (en modo normal sería window)`,
        explanation: "El modo estricto blinda el c\u00f3digo contra fugas accidentales al objeto global window y facilita optimizaciones al compilador JIT."
      },
      visualDiagram: {
        id: "diag-js-strict",
        title: "Protecciones del Modo Estricto ('use strict')",
        caption: "ReferenceError en globales no declarados, this === undefined en funciones y activaci\u00f3n autom\u00e1tica en ES Modules.",
        diagramType: "js-use-strict-mode"
      },
      interviewTips: {
        whatInterviewersWant: "Explicar que ES Modules y clases operan en 'use strict' por defecto sin necesidad de declararlo expresamente.",
        commonPitfalls: ["Creer que en JavaScript moderno hay que escribir 'use strict' manualmente en cada archivo modular."],
        followUps: [
          "¿Qué errores silenciosos convierte strict mode en excepciones?",
          "¿Por qué los módulos ES y las clases están en strict mode por defecto?"
        ]
      },
      quiz: {
        question: "\u00bfCu\u00e1l es el valor de 'this' dentro de una funci\u00f3n regular suelta invocada bajo 'use strict'?",
        options: ["window", "globalThis", "undefined", "null"],
        correctIndex: 2,
        explanation: "Bajo modo estricto, this no se vincula por defecto al objeto global (window), previniendo modificaciones accidentales; su valor es undefined."
      }
    },
    {
      id: "js-10",
      title: "\u00bfQu\u00e9 es el hoisting en JavaScript?",
      level: "medio",
      tags: ["Hoisting", "Execution Context", "TDZ", "Scope"],
      response: "El hoisting es el comportamiento del motor de JavaScript donde las declaraciones de variables y funciones se asignan en memoria durante la fase de creaci\u00f3n del contexto de ejecuci\u00f3n, antes de ejecutar el c\u00f3digo l\u00ednea a l\u00ednea. Las funciones declaradas con `function` son completamente accesibles antes de su definici\u00f3n. Las variables declaradas con `var` se elevan inicializadas en `undefined`. Por su parte, `let` y `const` tambi\u00e9n se elevan pero permanecen en la 'Temporal Dead Zone' (TDZ) hasta que el int\u00e9rprete llega a su l\u00ednea de declaraci\u00f3n, lanzando un `ReferenceError` si se intenta acceder a ellas antes.",
      codeExample: {
        language: "javascript",
        code: `// 1. Hoisting de funciones (completamente elevado)
sayHi(); // Funciona: "¡Hola!"
function sayHi() {
  console.log("¡Hola!");
}

// 2. Hoisting con var (elevado con undefined)
console.log(myVar); // Imprime: undefined (NO error)
var myVar = "Diego";

// 3. Hoisting con let/const (Temporal Dead Zone - TDZ)
try {
  console.log(myLet); // Lanza ReferenceError!
} catch (e) {
  console.error("TDZ Error:", e.message);
}
let myLet = "Modern JS";`,
        explanation: "let y const s\u00ed son elevados en memoria, pero el motor proh\u00edbe su lectura antes de su inicializaci\u00f3n expl\u00edcita (TDZ)."
      },
      visualDiagram: {
        id: "diag-js-hoisting",
        title: "Hoisting y Temporal Dead Zone (TDZ)",
        caption: "Fase de creaci\u00f3n en memoria \u2794 Declaraciones elevadas \u2794 TDZ bloqueando lecturas de let/const con ReferenceError.",
        diagramType: "js-hoisting-tdz"
      },
      interviewTips: {
        whatInterviewersWant: "Demostrar que sabes que let y const S\u00cd son elevados, pero protegidos por la Temporal Dead Zone (TDZ).",
        commonPitfalls: ["Decir err\u00f3neamente que let y const 'no tienen hoisting'. S\u00ed lo tienen, pero est\u00e1n en TDZ."],
        followUps: [
          "¿Qué diferencia hay entre el hoisting de declaraciones de función y el de expresiones de función?",
          "¿Por qué let y const también hacen hoisting pero lanzan ReferenceError?"
        ]
      },
      quiz: {
        question: "\u00bfQu\u00e9 ocurre al ejecutar: console.log(a); let a = 5; ?",
        options: ["Imprime undefined", "Lanza un ReferenceError por estar en la Temporal Dead Zone (TDZ)", "Imprime 5", "Lanza un SyntaxError en tiempo de compilaci\u00f3n"],
        correctIndex: 1,
        explanation: "Las variables let y const no se pueden leer hasta que su declaraci\u00f3n se eval\u00faa, provocando ReferenceError dentro de la TDZ."
      }
    },
    {
      id: "js-11",
      title: "\u00bfQu\u00e9 es una funci\u00f3n de callback?",
      level: "medio",
      tags: ["Callbacks", "Asincron\u00eda", "Higher-Order Functions", "Event Loop"],
      response: "Una funci\u00f3n de callback es una funci\u00f3n que se pasa como argumento a otra funci\u00f3n (Higher-Order Function) con la expectativa de que sea invocada posteriormente dentro de la funci\u00f3n receptora. Los callbacks pueden ser s\u00edncronos (se ejecutan de inmediato en el Call Stack, como en Array.prototype.map, filter o forEach) o as\u00edncronos (se registran y delegan al Event Loop para ejecutarse tras completarse un evento o tarea de red, como en setTimeout, addEventListener o peticiones Ajax tradicionales). El abuso de callbacks anidados para flujos as\u00edncronos complejos llev\u00f3 al antipatr\u00f3n 'Callback Hell' (Pyramid of Doom), resuelto modernamente por las Promesas y async/await.",
      codeExample: {
        language: "javascript",
        code: `// 1. Callback síncrono (inmediato en Call Stack)
const numbers = [1, 2, 3];
const doubled = numbers.map((n) => n * 2);

// 2. Callback asíncrono (procesado tras evento o timer)
function fetchDataWithCallback(url, callback) {
  setTimeout(() => {
    const data = { status: 200, payload: 'Datos listos' };
    callback(null, data);
  }, 500);
}

fetchDataWithCallback('/api', (err, res) => {
  if (err) return console.error(err);
  console.log('Respuesta diferida:', res.payload);
});`,
        explanation: "Los callbacks s\u00edncronos bloquean el hilo hasta terminar; los as\u00edncronos ceden el control al bucle de eventos."
      },
      visualDiagram: {
        id: "diag-js-callback",
        title: "Patr\u00f3n de Funciones Callback: S\u00edncrono vs As\u00edncrono",
        caption: "Callback s\u00edncrono corre inmediatamente en el Call Stack; callback as\u00edncrono viaja por la Task Queue del Event Loop.",
        diagramType: "js-callback-pattern"
      },
      interviewTips: {
        whatInterviewersWant: "Distinguir con exactitud callbacks s\u00edncronos de as\u00edncronos y explicar la convenci\u00f3n de Node.js 'Error-First Callback' (err, data).",
        commonPitfalls: ["Asumir que toda funci\u00f3n que recibe un callback es autom\u00e1ticamente as\u00edncrona (ej. Array.map es 100% s\u00edncrono)."],
        followUps: [
          "¿Qué es el callback hell y cómo se resuelve?",
          "¿Qué es la inversión de control en los callbacks?"
        ]
      },
      quiz: {
        question: "\u00bfCu\u00e1l de las siguientes operaciones ejecuta su callback de forma S\u00cdNCRONA?",
        options: ["setTimeout(callback, 0)", "document.addEventListener('click', callback)", "Array.prototype.forEach(callback)", "fetch(url).then(callback)"],
        correctIndex: 2,
        explanation: "Array.prototype.forEach ejecuta el callback inmediatamente para cada elemento en el mismo tick s\u00edncrono del Call Stack."
      }
    },
    {
      id: "js-12",
      title: "\u00bfQu\u00e9 es una Promesa?",
      level: "medio",
      tags: ["Promises", "Microtasks", "then", "catch", "finally"],
      response: "Una Promesa es un objeto que representa la eventual finalizaci\u00f3n (o falla) de una operaci\u00f3n as\u00edncrona y su valor resultante. Act\u00faa como una m\u00e1quina de estados con tres estados mutuamente excluyentes: 1. 'pending' (estado inicial, operaci\u00f3n en curso). 2. 'fulfilled' (operaci\u00f3n completada exitosamente v\u00eda resolve()). 3. 'rejected' (operaci\u00f3n fallida v\u00eda reject()). Una vez que una promesa pasa a fulfilled o rejected, se dice que est\u00e1 'settled' y su estado es inmutable. Permite encadenamiento fluido (.then(), .catch(), .finally()), garantizando que sus callbacks se encolen siempre en la cola de Microtareas (Microtask Queue), asegurando un orden determinista y protegiendo contra inversi\u00f3n de control.",
      codeExample: {
        language: "javascript",
        code: `// Creación y consumo de una Promesa nativa
function fetchUserProfile(userId) {
  return new Promise((resolve, reject) => {
    if (!userId) return reject(new Error('ID de usuario requerido'));
    
    setTimeout(() => {
      resolve({ id: userId, username: 'dvilla', role: 'Staff Engineer' });
    }, 200);
  });
}

fetchUserProfile(42)
  .then((user) => {
    console.log('Usuario autenticado:', user.username);
    return user.role;
  })
  .then((role) => console.log('Rol asignado:', role))
  .catch((err) => console.error('Fallo en autenticación:', err.message))
  .finally(() => console.log('Operación concluida (Settled)'));`,
        explanation: "Las promesas garantizan inmutabilidad de estado una vez resueltas y despachan sus callbacks en la cola de Microtasks."
      },
      visualDiagram: {
        id: "diag-js-promise",
        title: "M\u00e1quina de Estados de una Promesa en JavaScript",
        caption: "Pending \u2794 resolve() \u2794 Fulfilled (.then) | Pending \u2794 reject() \u2794 Rejected (.catch) \u2794 Settled (.finally).",
        diagramType: "js-promise-lifecycle"
      },
      interviewTips: {
        whatInterviewersWant: "Explicar m\u00e9todos est\u00e1ticos clave de concurrencia: Promise.all (falla r\u00e1pido), Promise.allSettled (espera a todas), Promise.race y Promise.any.",
        commonPitfalls: ["Olvidar retornar la promesa interior dentro de un .then(), rompiendo la cadena de resoluci\u00f3n as\u00edncrona."],
        followUps: [
          "¿Qué diferencia hay entre Promise.all, allSettled, race y any?",
          "¿Qué ocurre con una promesa rechazada que nadie captura?"
        ]
      },
      quiz: {
        question: "\u00bfQu\u00e9 m\u00e9todo est\u00e1tico de Promise espera a que TODAS las promesas finalicen sin importar si fueron resueltas o rechazadas?",
        options: ["Promise.all()", "Promise.race()", "Promise.allSettled()", "Promise.any()"],
        correctIndex: 2,
        explanation: "Promise.allSettled() espera a que todas las promesas terminen y devuelve un array con los estados y valores/motivos individuales."
      }
    },
    {
      id: "js-13",
      title: "\u00bfQu\u00e9 es Async/Await?",
      level: "medio",
      tags: ["async", "await", "Promises", "Generators", "Clean Code"],
      response: "async/await es una sintaxis introducida en ES2017 (ES8) que act\u00faa como az\u00facar sint\u00e1ctico de alto nivel sobre las Promesas y los Generadores. Permite escribir c\u00f3digo as\u00edncrono no bloqueante con la legibilidad y estructura secuencial del c\u00f3digo s\u00edncrono. Una funci\u00f3n marcada con 'async' siempre devuelve impl\u00edcitamente una Promesa. La palabra clave 'await' solo puede usarse dentro de funciones async (o top-level await en m\u00f3dulos) y pausa la ejecuci\u00f3n de esa funci\u00f3n espec\u00edfica hasta que la Promesa se resuelve o rechaza, liberando el hilo principal del Call Stack. El manejo de errores se integra de forma transparente y natural mediante bloques 'try / catch'.",
      codeExample: {
        language: "javascript",
        code: `// Consumo asíncrono limpio con async/await y try/catch
async function loadDashboardData(userId) {
  try {
    console.log('Iniciando carga...');
    // await pausa la función sin bloquear el hilo principal
    const user = await fetchUserProfile(userId);
    const notifications = await fetchNotifications(user.id);
    
    return { user, notifications };
  } catch (error) {
    // Captura tanto errores de red como excepciones de código síncrono
    console.error('Error al cargar dashboard:', error.message);
    throw error;
  }
}`,
        explanation: "await congela \u00fanicamente el contexto local de la funci\u00f3n as\u00edncrona, encolando el resto en la cola de microtareas al resolverse."
      },
      visualDiagram: {
        id: "diag-js-async-await",
        title: "Flujo de Ejecuci\u00f3n de async / await con Microtasks",
        caption: "async fn inicia s\u00edncrona \u2794 await pausa la funci\u00f3n y cede el Call Stack \u2794 Microtask reanuda tras resoluci\u00f3n.",
        diagramType: "js-async-await-flow"
      },
      interviewTips: {
        whatInterviewersWant: "Advertir contra el antipatr\u00f3n de encadenar 'await' secuenciales innecesarios para operaciones independientes; usar Promise.all([p1, p2]).",
        commonPitfalls: ["Ejecutar await en un bucle forEach (forEach ignora promesas; se debe usar for...of o Promise.all con map)."],
        followUps: [
          "¿Cómo ejecutarías varias llamadas async en paralelo en lugar de en serie?",
          "¿Cómo manejas errores con async/await sin llenar el código de try/catch?"
        ]
      },
      quiz: {
        question: "\u00bfQu\u00e9 ocurre si ejecutas: [1, 2].forEach(async (id) => { await deleteItem(id); });?",
        options: ["Las llamadas se ejecutan en estricto orden secuencial esperando a cada una", "forEach no espera a las promesas y dispara todas las iteraciones en paralelo de forma descontrolada", "Lanza un SyntaxError", "Bloquea el Call Stack hasta que ambas promesas finalicen"],
        correctIndex: 1,
        explanation: "forEach no tiene conocimiento de Promesas; ejecuta el callback como una funci\u00f3n sincr\u00f3nica disparando las promesas sin esperar a su resoluci\u00f3n."
      }
    },
    {
      id: "js-14",
      title: "\u00bfQu\u00e9 son las funciones flecha y qu\u00e9 ventajas tienen?",
      level: "medio",
      tags: ["Arrow Functions", "this", "Lexical Scope", "ES6"],
      response: "Las funciones flecha (arrow functions: () => {}) son una sintaxis concisa introducida en ES6 con diferencias sem\u00e1nticas fundamentales respecto a las funciones tradicionales con 'function': 1. 'this' L\u00e9xico: NO vinculan su propio 'this', sino que lo heredan est\u00e1ticamente del \u00e1mbito l\u00e9xico donde fueron definidas, eliminando la necesidad de 'bind(this)' o hacks como 'const self = this'. 2. No tienen objeto 'arguments' (se debe usar el operador rest '...args'). 3. No pueden ser utilizadas como funciones constructoras con 'new' (carecen de la propiedad prototype interna). 4. Retorno impl\u00edcito cuando el cuerpo es una \u00fanica expresi\u00f3n sin llaves.",
      codeExample: {
        language: "javascript",
        code: `class Timer {
  constructor() {
    this.seconds = 0;
  }

  start() {
    // La arrow function hereda 'this' de la instancia de Timer:
    setInterval(() => {
      this.seconds++;
      console.log('Segundos transcurridos:', this.seconds);
    }, 1000);
  }
}

// Retorno implícito conciso:
const square = (x) => x * x;

// Rest parameters en lugar de 'arguments':
const sumAll = (...numbers) => numbers.reduce((acc, curr) => acc + curr, 0);`,
        explanation: "Las arrow functions no definen contexto 'this' propio; capturan el 'this' del \u00e1mbito contenedor donde nacen."
      },
      visualDiagram: {
        id: "diag-js-arrow-this",
        title: "Funciones Flecha vs Funciones Est\u00e1ndar: Enlace de this",
        caption: "function() tiene this din\u00e1mico en runtime; () => {} hereda el this l\u00e9xico inmutablemente de su entorno.",
        diagramType: "js-arrow-functions-this"
      },
      interviewTips: {
        whatInterviewersWant: "Saber cu\u00e1ndo NO usar arrow functions: como m\u00e9todos de objetos literales (pierden el objeto como this) y como constructores.",
        commonPitfalls: ["Usar una arrow function como m\u00e9todo de un objeto literal y esperar que 'this' apunte al objeto."],
        followUps: [
          "¿Por qué las arrow functions no deben usarse como métodos de un objeto?",
          "¿Qué no tienen las arrow functions (this, arguments, prototype, new)?"
        ]
      },
      quiz: {
        question: "\u00bfCu\u00e1l es el comportamiento de 'this' dentro de una funci\u00f3n flecha?",
        options: ["Apunta al objeto global window en todo momento", "Hereda el valor de 'this' del contexto l\u00e9xico en el que fue definida", "Se vincula din\u00e1micamente seg\u00fan el objeto que la invoque", "Es siempre undefined"],
        correctIndex: 1,
        explanation: "Las arrow functions no tienen 'this' propio; capturan el 'this' l\u00e9xico del \u00e1mbito que las rodea."
      }
    },
    {
      id: "js-15",
      title: "\u00bfQu\u00e9 es el destructuring?",
      level: "medio",
      tags: ["Destructuring", "ES6", "Rest Operator", "Default Values"],
      response: "El destructuring (desestructuraci\u00f3n) es una expresi\u00f3n de sintaxis introducida en ES6 que permite extraer datos de arrays u objetos empaquetados y asignarlos de forma directa y declarativa a variables independientes. En objetos, la coincidencia se realiza por nombre de propiedad ('const { name, role } = user'), permitiendo renombrado ('{ id: userId }') y valores por defecto si la propiedad es undefined. En arrays, la extracci\u00f3n se basa en la posici\u00f3n ordenada ('const [first, second, ...rest] = list'), permitiendo omitir posiciones intermedias.",
      codeExample: {
        language: "javascript",
        code: `// Desestructuración de Objetos con renombrado y default
const config = { host: 'localhost', port: 8080 };
const { host, port, timeout = 5000, host: serverHost } = config;
console.log(serverHost, timeout); // 'localhost', 5000

// Desestructuración de Arrays con Rest operator
const coordinates = [40.7128, -74.0060, 10];
const [latitude, longitude, ...metadata] = coordinates;

// Desestructuración en parámetros de función (Clean Architecture)
function renderHeader({ title, user: { name } }) {
  console.log(\`Bienvenido \${name} a \${title}\`);
}`,
        explanation: "La desestructuraci\u00f3n agiliza el acceso a propiedades anidadas y argumentos de configuraci\u00f3n en funciones."
      },
      visualDiagram: {
        id: "diag-js-destructuring",
        title: "Patr\u00f3n de Desestructuraci\u00f3n de Objetos y Arrays",
        caption: "Extracci\u00f3n por clave (objetos) y por orden posicional (arrays) con valores por defecto y operador rest.",
        diagramType: "js-destructuring-pattern"
      },
      interviewTips: {
        whatInterviewersWant: "Explicar que los valores por defecto solo se activan si la propiedad es estrictamente 'undefined' (no aplica para null, 0 o false).",
        commonPitfalls: ["Esperar que un default value reemplace a un valor 'null' (null es un valor primitivo v\u00e1lido, por lo que no activa el fallback)."],
        followUps: [
          "¿Cómo asignas valores por defecto y renombras propiedades al desestructurar?",
          "¿El spread operator hace una copia profunda o superficial?"
        ]
      },
      quiz: {
        question: "\u00bfCu\u00e1ndo se activa el valor por defecto en una desestructuraci\u00f3n: const { role = 'User' } = obj;?",
        options: ["Cuando obj.role es null", "\u00danicamente cuando obj.role es estrictamente undefined", "Cuando obj.role es false o 0", "En cualquier valor falsy"],
        correctIndex: 1,
        explanation: "En JavaScript, los valores por defecto en desestructuraci\u00f3n solo se activan si la propiedad es estrictamente undefined."
      }
    },
    {
      id: "js-16",
      title: "\u00bfQu\u00e9 son los m\u00f3dulos en JavaScript?",
      level: "medio",
      tags: ["ES Modules", "CommonJS", "Tree Shaking", "import/export"],
      response: "Los m\u00f3dulos son unidades independientes y reutilizables de c\u00f3digo que encapsulan l\u00f3gica interna y exponen \u00fanicamente las interfaces p\u00fablicas deseadas. Hist\u00f3ricamente convivieron varios formatos (AMD, UMD, CommonJS en Node.js con require/module.exports). Con ES6 se introdujo el est\u00e1ndar oficial 'ES Modules' (ESM), caracterizado por sintaxis est\u00e1tica 'import' y 'export'. ESM se analiza en tiempo de compilaci\u00f3n/parseo antes de la ejecuci\u00f3n, lo que permite a bundlers (Vite, Rollup, Webpack) realizar 'Tree-Shaking' (eliminaci\u00f3n autom\u00e1tica de c\u00f3digo muerto exportado pero no importado) y facilita la carga nativa en navegadores con `<script type='module'>`.",
      codeExample: {
        language: "javascript",
        code: `// math.js (Exportaciones con nombre y por defecto)
export const add = (a, b) => a + b;
export const multiply = (a, b) => a * b;
export default class Calculator {}

// app.js (Importación estática compatible con Tree-Shaking)
import Calculator, { add } from './math.js';
// 'multiply' no fue importado; un bundler lo purgará del bundle final

// Importación dinámica condicional (Devuelve una Promesa)
async function loadAnalytics() {
  const { trackEvent } = await import('./analytics.js');
  trackEvent('PAGE_VIEW');
}`,
        explanation: "ES Modules permite an\u00e1lisis est\u00e1tico de dependencias y tree-shaking; import() din\u00e1mico posibilita code-splitting."
      },
      visualDiagram: {
        id: "diag-js-modules",
        title: "M\u00f3dulos en JavaScript: ES Modules (ESM) vs CommonJS (CJS)",
        caption: "ESM est\u00e1tico y tree-shakeable en tiempo de compilaci\u00f3n vs CommonJS din\u00e1mico y s\u00edncrono en tiempo de ejecuci\u00f3n.",
        diagramType: "js-modules-esm-vs-cjs"
      },
      interviewTips: {
        whatInterviewersWant: "Comparar ESM y CJS: ESM es as\u00edncrono y est\u00e1tico; CJS es s\u00edncrono y din\u00e1mico. Citar que los scripts de tipo module difieren su ejecuci\u00f3n por defecto.",
        commonPitfalls: ["Intentar usar 'require()' en un entorno ESM puro sin configurar paquetes adecuadamente."],
        followUps: [
          "¿Qué diferencia hay entre ESM y CommonJS en carga, live bindings y tree shaking?",
          "¿Qué es el top-level await?"
        ]
      },
      quiz: {
        question: "\u00bfCu\u00e1l es la principal ventaja de ES Modules frente a CommonJS para aplicaciones frontend modernas?",
        options: ["Permite importar c\u00f3digo din\u00e1micamente sin promesas", "Permite an\u00e1lisis est\u00e1tico en tiempo de compilaci\u00f3n para Tree-Shaking y code-splitting", "Es compatible con navegadores de 1999 sin transpilar", "Elimina la necesidad de usar TypeScript"],
        correctIndex: 1,
        explanation: "La estructura est\u00e1tica de ES Modules (import/export fijos) permite a herramientas como Vite eliminar c\u00f3digo muerto mediante tree-shaking."
      }
    },
    {
      id: "js-17",
      title: "\u00bfQu\u00e9 son las clases en JavaScript?",
      level: "medio",
      tags: ["Clases", "ES6", "OOP", "Prototipos", "Private Fields"],
      response: "Las clases en JavaScript (introducidas en ES6 con la palabra clave 'class') son az\u00facar sint\u00e1ctico sobre el modelo tradicional de herencia protot\u00edpica de ECMAScript. No introducen un nuevo modelo de programaci\u00f3n orientada a objetos basado en clases cl\u00e1sicas en el motor. Una clase es internamente una funci\u00f3n constructora cuya propiedad 'prototype' alberga los m\u00e9todos de instancia definidos. ES2022 agreg\u00f3 campos privados nativos mediante el prefijo almohadilla ('#privateField'), proveyendo encapsulaci\u00f3n dura a nivel del motor V8 sin depender de closures.",
      codeExample: {
        language: "javascript",
        code: `class BankAccount {
  // Campo privado nativo (inaccesible fuera de la clase)
  #balance;

  constructor(owner, initialBalance = 0) {
    this.owner = owner;
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount > 0) this.#balance += amount;
  }

  get balance() {
    return this.#balance;
  }
}

const account = new BankAccount('Diego', 500);
account.deposit(200);
console.log(account.balance); // 700
// console.log(account.#balance); // SyntaxError: Private field must be declared`,
        explanation: "Las clases estructuran la POO moderna en JavaScript; los campos privados # garantizan encapsulaci\u00f3n estricta."
      },
      visualDiagram: {
        id: "diag-js-classes",
        title: "Clases ES6: Az\u00facar Sint\u00e1ctico sobre la Cadena Protot\u00edpica",
        caption: "class User {} es en realidad una funci\u00f3n constructora con m\u00e9todos en User.prototype y soporte de campos privados #.",
        diagramType: "js-class-syntax-sugar"
      },
      interviewTips: {
        whatInterviewersWant: "Aclarar que 'typeof MyClass === function' y que las clases no sufren hoisting accesible (permanecen en TDZ como let).",
        commonPitfalls: ["Creer que JavaScript implement\u00f3 clases cl\u00e1sicas en C++ (el runtime sigue siendo protot\u00edpico)."],
        followUps: [
          "¿Qué son los campos privados (#) y en qué se diferencian de la convención _?",
          "¿Por qué se dice que las clases son azúcar sintáctico sobre prototipos?"
        ]
      },
      quiz: {
        question: "\u00bfQu\u00e9 sintaxis nativa de ES2022 declara un campo privado real en una clase de JavaScript?",
        options: ["private balance = 0;", "_balance = 0;", "#balance = 0;", "readonly balance = 0;"],
        correctIndex: 2,
        explanation: "El prefijo almohadilla (#) declara campos privados nativos reales a nivel del motor V8."
      }
    },
    {
      id: "js-18",
      title: "\u00bfQu\u00e9 es el this en JavaScript?",
      level: "medio",
      tags: ["this", "Call", "Apply", "Bind", "Execution Context"],
      response: "'this' es una palabra clave de JavaScript que hace referencia al objeto que act\u00faa como contexto de ejecuci\u00f3n para la funci\u00f3n actual. A diferencia del \u00e1mbito l\u00e9xico (que se resuelve est\u00e1ticamente donde se escribe la funci\u00f3n), el valor de 'this' se determina din\u00e1micamente seg\u00fan C\u00d3MO se invoca la funci\u00f3n en tiempo de ejecuci\u00f3n. Existen 4 reglas de precedencia: 1. Default Binding (funci\u00f3n suelta): window en modo sloppy, 'undefined' en 'use strict'. 2. Implicit Binding (m\u00e9todo de objeto: obj.fn()): this apunta al objeto contenedor 'obj'. 3. Explicit Binding (call, apply, bind): se fuerza el this expl\u00edcitamente. 4. new Binding (constructor): this apunta a la nueva instancia creada en memoria.",
      codeExample: {
        language: "javascript",
        code: `const person = {
  name: 'Diego',
  greet() {
    console.log(\`Hola, soy \${this.name}\`);
  }
};

// 1. Invocación como método (Implicit):
person.greet(); // 'Hola, soy Diego'

// 2. Pérdida de contexto (Default):
const detachedGreet = person.greet;
detachedGreet(); // 'Hola, soy undefined' (o error en use strict)

// 3. Fijación forzada con bind (Explicit):
const boundGreet = person.greet.bind({ name: 'Arquitecto' });
boundGreet(); // 'Hola, soy Arquitecto'`,
        explanation: "El valor de 'this' se fija din\u00e1micamente en el momento de la llamada, salvo que se fije con bind() o se use arrow function."
      },
      visualDiagram: {
        id: "diag-js-this-rules",
        title: "Las 4 Reglas de Resoluci\u00f3n de this en JavaScript",
        caption: "1. Default (global/undefined) \u2794 2. Implicit (obj.metodo) \u2794 3. Explicit (call/apply/bind) \u2794 4. new (instancia).",
        diagramType: "js-this-binding-rules"
      },
      interviewTips: {
        whatInterviewersWant: "Memorizar las 4 reglas y explicar la p\u00e9rdida de contexto al pasar m\u00e9todos de objeto como callbacks en React o listeners.",
        commonPitfalls: ["Intentar re-vincular una funci\u00f3n flecha usando bind/call/apply (las arrow functions son inmunes al binding din\u00e1mico)."],
        followUps: [
          "¿Cuáles son las reglas de prioridad del binding de this (new, explícito, implícito, por defecto)?",
          "¿Qué diferencia hay entre call, apply y bind?"
        ]
      },
      quiz: {
        question: "\u00bfQu\u00e9 valor toma 'this' al invocar: const fn = user.greet; fn(); bajo 'use strict'?",
        options: ["El objeto user", "undefined", "window", "Lanza SyntaxError"],
        correctIndex: 1,
        explanation: "Al extraer el m\u00e9todo y llamarlo como funci\u00f3n suelta, aplica Default Binding, que bajo 'use strict' resulta en undefined."
      }
    },
    {
      id: "js-19",
      title: "\u00bfQu\u00e9 diferencia hay entre inmutabilidad y mutabilidad?",
      level: "medio",
      tags: ["Inmutabilidad", "Mutabilidad", "structuredClone", "Object.freeze"],
      response: "La inmutabilidad establece que una estructura de datos, una vez creada, no puede ser alterada en memoria; cualquier modificaci\u00f3n produce una nueva copia independiente con el cambio aplicado. En JavaScript, los 7 tipos primitivos son inmutables por naturaleza. En cambio, los objetos y arrays son mutables por referencia: asignar 'const b = a' comparte la misma direcci\u00f3n en el Memory Heap, por lo que mutar 'b' altera inadvertidamente a 'a'. Mantener inmutabilidad previene efectos secundarios (side effects), permite detecci\u00f3n trivial de cambios por referencia (===) en frameworks reactivos (React/Redux) y facilita la concurrencia.",
      codeExample: {
        language: "javascript",
        code: `const original = { id: 1, user: { name: 'Diego' } };

// Mutación (Antipatrón en estado reactivo):
// original.user.name = 'Cabu'; // Modifica el objeto compartido

// Shallow Copy con Spread (Copia nivel 1, pero anidados siguen compartidos):
const shallow = { ...original, user: { ...original.user, name: 'Diego Villa' } };

// Deep Copy nativa moderna (100% aislada en todo el subárbol):
const deepClone = structuredClone(original);
deepClone.user.name = 'Nuevo Nombre';
console.log(original.user.name); // 'Diego' (Intacto)`,
        explanation: "La inmutabilidad evita efectos secundarios y permite a React detectar si el estado cambi\u00f3 mediante simple igualdad referencial a !== b."
      },
      visualDiagram: {
        id: "diag-js-mutability",
        title: "Inmutabilidad vs Mutaci\u00f3n: Shallow Copy vs Deep Copy",
        caption: "Mutaci\u00f3n altera el mismo slot en el Heap; Shallow copy clona nivel 1; structuredClone clona todo el \u00e1rbol recursivamente.",
        diagramType: "js-mutability-memory-heap"
      },
      interviewTips: {
        whatInterviewersWant: "Explicar la diferencia entre Object.freeze() (congelamiento superficial) y structuredClone() (copia profunda nativa).",
        commonPitfalls: ["Creer que el operador spread `{ ...obj }` realiza una copia profunda (solo clona el primer nivel; los objetos anidados se copian por referencia)."],
        followUps: [
          "¿Por qué React depende de la inmutabilidad para detectar cambios?",
          "¿Qué diferencia hay entre Object.freeze y una copia profunda?"
        ]
      },
      quiz: {
        question: "\u00bfQu\u00e9 m\u00e9todo nativo de JavaScript realiza una copia profunda (Deep Clone) completa preservando referencias circulares y tipos complejos?",
        options: ["Object.assign({}, obj)", "{ ...obj }", "structuredClone(obj)", "JSON.parse(JSON.stringify(obj))"],
        correctIndex: 2,
        explanation: "structuredClone() es el est\u00e1ndar nativo que soporta referencias circulares, Dates, Sets, Maps y TypedArrays."
      }
    },
    {
      id: "js-20",
      title: "\u00bfQu\u00e9 es el event loop?",
      level: "avanzado",
      tags: ["Event Loop", "Call Stack", "Microtasks", "Macrotasks", "Concurrencia"],
      response: "El Event Loop es el orquestador del modelo de concurrencia no bloqueante de JavaScript (single-threaded). Su trabajo consiste en monitorear constantemente el Call Stack y las colas de tareas. Cuando el Call Stack se vac\u00eda por completo: 1) Ejecuta y vac\u00eda TODA la cola de Microtareas (Microtask Queue: callbacks de Promises, queueMicrotask, MutationObserver). 2) Si el navegador lo requiere, ejecuta el render pipeline (requestAnimationFrame, layout y repaint). 3) Toma la PRIMERA tarea disponible de la cola de Macrotareas (Task Queue: setTimeout, setInterval, I/O) y la inserta en el Call Stack. Este ciclo se repite indefinidamente.",
      codeExample: {
        language: "javascript",
        code: `console.log("1 - Síncrono");

setTimeout(() => {
  console.log("4 - Macrotarea (setTimeout)");
}, 0);

Promise.resolve().then(() => {
  console.log("2 - Microtarea (Promise)");
}).then(() => {
  console.log("3 - Siguiente Microtarea en cadena");
});

console.log("Fin síncrono");
// Salida en consola: 1 -> Fin síncrono -> 2 -> 3 -> 4`,
        explanation: "Las microtareas tienen prioridad absoluta sobre las macrotareas y deben vaciarse en su totalidad antes del siguiente tick de setTimeout."
      },
      visualDiagram: {
        id: "diag-event-loop",
        title: "Flujo del Event Loop de JavaScript",
        caption: "Call Stack -> Microtask Queue (Prioridad 1) -> Render -> Macrotask (Prioridad 2)",
        diagramType: "event-loop"
      },
      interviewTips: {
        whatInterviewersWant: "Comprender la diferencia exacta de prioridad entre Microtasks (Promises) y Macrotasks (setTimeout), y saber predecir el orden de logs en pantalla.",
        commonPitfalls: ["Creer que setTimeout(..., 0) se ejecuta de inmediato (siempre debe esperar a que el call stack y microtareas terminen)."],
        followUps: [
          "¿En qué orden se ejecutan setTimeout(0), Promise.then y queueMicrotask?",
          "¿Cómo puede una tarea larga bloquear la interfaz?"
        ]
      },
      quiz: {
        question: "\u00bfCu\u00e1l es la prioridad de ejecuci\u00f3n en el Event Loop tras vaciarse el Call Stack s\u00edncrono?",
        options: ["Se procesa una macrotarea (setTimeout)", "Se vac\u00eda por completo la cola de Microtareas (Promises)", "Se ejecuta la recolecci\u00f3n de basura", "Se dispara un evento de resize"],
        correctIndex: 1,
        explanation: "El Event Loop siempre vac\u00eda completamente la cola de microtareas antes de evaluar el renderizado o tomar la siguiente macrotarea."
      }
    },
    {
      id: "js-21",
      title: "\u00bfQu\u00e9 son los closures?",
      level: "avanzado",
      tags: ["Closures", "Lexical Scope", "Encapsulaci\u00f3n", "Funcional"],
      response: "Un closure es la combinaci\u00f3n de una funci\u00f3n y el entorno l\u00e9xico en el cual fue declarada. Dicho de forma simple: una funci\u00f3n interna retiene acceso y 'recuerda' las variables de su funci\u00f3n externa (\u00e1mbito contenedor), incluso mucho despu\u00e9s de que la funci\u00f3n externa haya terminado de ejecutarse y haya salido del Call Stack. Es el fundamento de la encapsulaci\u00f3n de datos privados, memoizaci\u00f3n, currying y el patr\u00f3n m\u00f3dulo en JavaScript.",
      codeExample: {
        language: "javascript",
        code: `function createCounter(initialValue = 0) {
  // Variable privada protegida por el closure
  let count = initialValue;

  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count
  };
}

const counter = createCounter(10);
console.log(counter.increment()); // 11
console.log(counter.increment()); // 12
console.log(counter.getCount());  // 12
console.log(counter.count);     // undefined (inaccesible externamente)`,
        explanation: "Las funciones internas increment/decrement mantienen viva la variable 'count' por referencia l\u00e9xica en memoria Heap."
      },
      visualDiagram: {
        id: "diag-js-closure",
        title: "Mec\u00e1nica de un Closure: Funci\u00f3n Interna + Entorno L\u00e9xico Retenido",
        caption: "La funci\u00f3n externa sale del Call Stack pero su Environment Record persiste en el Heap por la referencia del closure.",
        diagramType: "js-closure-lexical-environment"
      },
      interviewTips: {
        whatInterviewersWant: "Saber explicar closures sin rodeos: 'acceso de una funci\u00f3n interna al scope de una funci\u00f3n externa tras su ejecuci\u00f3n'. Explicar casos reales (variables privadas, debounce, factories).",
        commonPitfalls: ["Mencionar que el closure 'copia' el valor (en realidad mantiene la referencia en memoria)."],
        followUps: [
          "¿Cómo pueden los closures provocar memory leaks?",
          "¿Cómo resolverías el problema clásico de var dentro de un bucle con setTimeout?"
        ]
      },
      quiz: {
        question: "\u00bfQu\u00e9 ocurre con las variables de una funci\u00f3n externa cuando una funci\u00f3n interna crea un closure sobre ellas?",
        options: ["Se copian por valor al Call Stack de la funci\u00f3n interna", "Se destruyen al retornar la funci\u00f3n externa", "Permanecen en el Memory Heap porque la funci\u00f3n interna conserva una referencia l\u00e9xica activa", "Se convierten en variables globales de window"],
        correctIndex: 2,
        explanation: "El Environment Record se retiene en el Memory Heap mientras exista una referencia viva desde la funci\u00f3n interna."
      }
    },
    {
      id: "js-22",
      title: "\u00bfQu\u00e9 es el prototipo en JavaScript?",
      level: "avanzado",
      tags: ["Prototypes", "OOP", "Herencia", "Performance"],
      response: "En JavaScript, casi todos los objetos est\u00e1n vinculados a otro objeto llamado su prototipo, del cual heredan m\u00e9todos y propiedades. Cuando intentas acceder a una propiedad en un objeto y no existe en \u00e9l, el motor sube por la 'cadena de prototipos' (prototype chain) a trav\u00e9s del enlace interno [[Prototype]] (accesible por Object.getPrototypeOf() o __proto__) hasta encontrarla, finalizando en Object.prototype, cuyo prototipo es null.",
      codeExample: {
        language: "javascript",
        code: `function Developer(name, role) {
  this.name = name;
  this.role = role;
}

// Método compartido en el prototipo (no se duplica por instancia)
Developer.prototype.code = function() {
  return \`\${this.name} está codeando como \${this.role}\`;
};

const dev = new Developer("Diego", "Frontend Architect");
console.log(dev.code()); 
// Cadena: dev -> Developer.prototype -> Object.prototype -> null
console.log(Object.getPrototypeOf(dev) === Developer.prototype); // true`,
        explanation: "Colocar m\u00e9todos en el prototype ahorra memoria porque todas las instancias comparten la misma referencia de funci\u00f3n."
      },
      visualDiagram: {
        id: "diag-js-prototype",
        title: "La Cadena de Prototipos (Prototype Chain)",
        caption: "Instancia \u2794 Constructor.prototype \u2794 Object.prototype \u2794 null. B\u00fasqueda ascendente de propiedades en memoria.",
        diagramType: "js-prototype-chain"
      },
      interviewTips: {
        whatInterviewersWant: "Diferenciar 'F.prototype' (objeto que se asigna como prototipo a instancias creadas con new F) de 'Object.getPrototypeOf(obj)' (el prototipo real del objeto).",
        commonPitfalls: ["Modificar Object.prototype directamente (contaminaci\u00f3n del prototipo global o prototype pollution)."],
        followUps: [
          "¿Qué diferencia hay entre __proto__, Object.getPrototypeOf y la propiedad prototype?",
          "¿Cómo crearías un objeto sin prototipo y para qué sirve?"
        ]
      },
      quiz: {
        question: "\u00bfA qu\u00e9 apunta la propiedad __proto__ en el extremo superior de toda la cadena de prototipos en JavaScript?",
        options: ["Function.prototype", "Object.prototype, cuyo propio prototipo es null", "window", "undefined"],
        correctIndex: 1,
        explanation: "La ra\u00edz final de la cadena de prototipos es Object.prototype, cuyo [[Prototype]] apunta a null."
      }
    },
    {
      id: "js-23",
      title: "\u00bfQu\u00e9 es la programaci\u00f3n funcional en JavaScript?",
      level: "avanzado",
      tags: ["Functional Programming", "Pure Functions", "Composition", "Immutability"],
      response: "La programaci\u00f3n funcional (FP) es un paradigma declarativo que modela el c\u00f3mputo mediante funciones matem\u00e1ticas puras, evitando el estado mutable compartido y los efectos secundarios (side effects). Sus pilares en JavaScript son: 1. Funciones Puras: Para los mismos argumentos, siempre retornan el mismo resultado sin alterar el mundo exterior (sin I/O o mutaciones globales). 2. Inmutabilidad: Los datos no se alteran, se transforman en nuevas copias. 3. Composici\u00f3n de funciones (pipe / compose). 4. Funciones de Orden Superior (HOFs como map, filter, reduce). Conduce a c\u00f3digo predecible, altamente testeable y con concurrencia segura.",
      codeExample: {
        language: "javascript",
        code: `// Pipeline funcional puro: sin mutar el arreglo de entrada
const scores = [45, 82, 90, 60, 78];

const isPassing = (score) => score >= 70;
const calculateCurve = (score) => score + 5;
const sum = (acc, val) => acc + val;

const totalClassAverage = scores
  .filter(isPassing)      // Funciones puras encadenadas
  .map(calculateCurve)
  .reduce(sum, 0);

console.log('Total evaluado:', totalClassAverage);`,
        explanation: "La programaci\u00f3n funcional favorece la predictibilidad desacoplando la l\u00f3gica de mutaciones de estado externo."
      },
      visualDiagram: {
        id: "diag-js-functional",
        title: "Programaci\u00f3n Funcional: Pipeline de Funciones Puras e Inmutables",
        caption: "Datos de entrada inmutables \u2794 filter (puro) \u2794 map (determinista) \u2794 reduce (acumulador).",
        diagramType: "js-functional-pipeline"
      },
      interviewTips: {
        whatInterviewersWant: "Definir qu\u00e9 es una funci\u00f3n pura y qu\u00e9 constituye un efecto secundario (mutar par\u00e1metros, peticiones de red, console.log, Date.now()).",
        commonPitfalls: ["Creer que la programaci\u00f3n funcional proh\u00edbe todo efecto secundario (se deben aislar en los bordes de la arquitectura)."],
        followUps: [
          "¿Qué son las funciones puras y por qué facilitan los tests?",
          "¿Cómo implementarías una función compose o pipe?"
        ]
      },
      quiz: {
        question: "\u00bfCu\u00e1l es la caracter\u00edstica innegociable de una funci\u00f3n pura en programaci\u00f3n funcional?",
        options: ["Debe ser declarada con la palabra clave 'async'", "Para los mismos argumentos siempre devuelve el mismo resultado y no produce efectos secundarios", "Debe mutar al menos un par\u00e1metro recibido", "Solo puede retornar promesas"],
        correctIndex: 1,
        explanation: "Una funci\u00f3n pura es determinista y no genera mutaciones de estado ni operaciones de I/O secundarias."
      }
    },
    {
      id: "js-24",
      title: "\u00bfQu\u00e9 es currying en JavaScript?",
      level: "avanzado",
      tags: ["Currying", "Higher-Order Functions", "Partial Application", "Funcional"],
      response: "Currying es una t\u00e9cnica avanzada de programaci\u00f3n funcional que transforma una funci\u00f3n con m\u00faltiples argumentos f(a, b, c) en una secuencia encadenada de funciones de un solo argumento (aridad unaria) f(a)(b)(c). Se apoya en los closures para recordar cada argumento previo hasta que se han suministrado todos los necesarios para ejecutar el c\u00e1lculo final. Facilita la aplicaci\u00f3n parcial de argumentos (crear funciones pre-configuradas reutilizables) y la composici\u00f3n elegante en pipelines de transformaci\u00f3n de datos.",
      codeExample: {
        language: "javascript",
        code: `// Currying puro con Arrow Functions
const buildUrl = (protocol) => (domain) => (path) => 
  \`\${protocol}://\${domain}/\${path}\`;

// Aplicación parcial: Fijamos el protocolo y el dominio base
const myAppEndpoint = buildUrl('https')('api.cabuweb.com');

// Reutilizamos la función especializada pasando solo la ruta:
const usersUrl = myAppEndpoint('users');
const postsUrl = myAppEndpoint('posts');

console.log(usersUrl); // 'https://api.cabuweb.com/users'
console.log(postsUrl); // 'https://api.cabuweb.com/posts'`,
        explanation: "Currying permite parametrizar funciones gradualmente fijando configuraciones reutilizables mediante closures."
      },
      visualDiagram: {
        id: "diag-js-currying",
        title: "Currying y Aplicaci\u00f3n Parcial: f(a, b, c) \u2794 f(a)(b)(c)",
        caption: "Descomposici\u00f3n unaria mediante closures para aplicaci\u00f3n parcial y composici\u00f3n en pipelines.",
        diagramType: "js-currying-partial-application"
      },
      interviewTips: {
        whatInterviewersWant: "Distinguir currying estricto (siempre 1 argumento por llamada) de aplicaci\u00f3n parcial (fijar N argumentos de antemano).",
        commonPitfalls: ["Creer que currying es solo una curiosidad acad\u00e9mica sin valor pr\u00e1ctico (es vital en librer\u00edas funcionales como Ramda y selectores de Redux)."],
        followUps: [
          "¿Qué diferencia hay entre currying y aplicación parcial?",
          "¿Cómo implementarías un curry genérico?"
        ]
      },
      quiz: {
        question: "\u00bfQu\u00e9 transformaci\u00f3n realiza el currying sobre una funci\u00f3n f(a, b, c)?",
        options: ["La convierte en una funci\u00f3n as\u00edncrona", "La transforma en una secuencia de funciones unarias: f(a)(b)(c)", "Clona el objeto prototipo en cada llamada", "Memoiza autom\u00e1ticamente las llamadas"],
        correctIndex: 1,
        explanation: "Currying descompone funciones de multiaridad en una cadena de funciones que toman exactamente un argumento cada una."
      }
    },
    {
      id: "js-25",
      title: "\u00bfQu\u00e9 es memoization?",
      level: "avanzado",
      tags: ["Memoization", "Cache", "Performance", "Optimization"],
      response: "Memoization (memoizaci\u00f3n) es una t\u00e9cnica de optimizaci\u00f3n que consiste en almacenar en una cach\u00e9 en memoria (t\u00edpicamente un Map u objeto) los resultados calculados previamente por una funci\u00f3n pura frente a un conjunto de argumentos determinado. Cuando la funci\u00f3n es invocada nuevamente con los mismos argumentos, en lugar de repetir el procesamiento costoso, devuelve de forma instant\u00e1nea el valor almacenado en cach\u00e9 con costo temporal O(1). Es la base del renderizado eficiente en React (React.memo, useMemo) y algoritmos recursivos como Fibonacci.",
      codeExample: {
        language: "javascript",
        code: `function memoize(fn) {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key); // Cache Hit O(1)
    }
    const result = fn(...args);
    cache.set(key, result); // Cache Miss: calculamos y almacenamos
    return result;
  };
}

const heavyCalculation = memoize((n) => {
  // Simulando procesamiento intensivo
  return n * 2;
});`,
        explanation: "La memoizaci\u00f3n requiere que la funci\u00f3n sea estrictamente pura; si dependiera de variables externas cambiantes, retornar\u00eda datos obsoletos."
      },
      visualDiagram: {
        id: "diag-js-memoization",
        title: "Arquitectura de Memoizaci\u00f3n: Evitar C\u00e1lculos Repetitivos",
        caption: "Invocaci\u00f3n \u2794 Cache Lookup (Map) \u2794 Cache Hit (Retorno O(1)) / Cache Miss (C\u00e1lculo y guardado).",
        diagramType: "js-memoization-cache"
      },
      interviewTips: {
        whatInterviewersWant: "Aclarar que la memoizaci\u00f3n intercambia espacio de memoria RAM por tiempo de CPU, y que solo es v\u00e1lida para funciones puras.",
        commonPitfalls: ["Memoizar funciones con alto consumo de memoria sin implementar pol\u00edticas de limpieza de cach\u00e9 como LRU (Least Recently Used)."],
        followUps: [
          "¿Cómo invalidarías el caché de una función memoizada?",
          "¿Qué riesgos de memoria tiene la memoization sin límite (y cómo ayuda un LRU)?"
        ]
      },
      quiz: {
        question: "\u00bfQu\u00e9 condici\u00f3n debe cumplir una funci\u00f3n para que sea seguro aplicar memoizaci\u00f3n sobre ella?",
        options: ["Debe ser una funci\u00f3n pura", "Debe recibir al menos 5 argumentos", "Debe ejecutarse en un Web Worker", "Debe mutar variables globales"],
        correctIndex: 0,
        explanation: "La memoizaci\u00f3n solo es v\u00e1lida en funciones puras, ya que asume que id\u00e9nticos argumentos siempre producen id\u00e9nticos retornos."
      }
    },
    {
      id: "js-26",
      title: "\u00bfQu\u00e9 es la event delegation?",
      level: "avanzado",
      tags: ["Event Delegation", "Event Bubbling", "DOM", "Performance"],
      response: "La delegaci\u00f3n de eventos (Event Delegation) es un patr\u00f3n de dise\u00f1o y optimizaci\u00f3n para el DOM que consiste en registrar un \u00fanico escuchador de eventos (event listener) en un elemento contenedor padre en lugar de registrar cientos de escuchadores individuales en cada uno de sus elementos hijos. Se fundamenta en la fase de propagaci\u00f3n ascendente de eventos denominada 'Event Bubbling'. Cuando un usuario hace clic en un hijo, el evento sube por el \u00e1rbol DOM hasta el padre, donde se inspecciona 'event.target' para verificar mediante 'element.matches(selector)' si corresponde ejecutar la acci\u00f3n.",
      codeExample: {
        language: "javascript",
        code: `// En lugar de añadir 1,000 listeners a cada botón de una tabla:
const userTable = document.querySelector('#user-table');

userTable?.addEventListener('click', (event) => {
  const target = event.target;
  
  // Delegación: verificamos si el clic provino de un botón de borrado
  if (target instanceof HTMLElement && target.matches('button.btn-delete')) {
    const userId = target.dataset.userId;
    console.log('Eliminar usuario con ID:', userId);
  }
});`,
        explanation: "La delegaci\u00f3n reduce dr\u00e1sticamente el uso de memoria y maneja elementos inyectados din\u00e1micamente en el futuro de forma autom\u00e1tica."
      },
      visualDiagram: {
        id: "diag-js-event-delegation",
        title: "Delegaci\u00f3n de Eventos: Capturing \u2794 Target \u2794 Bubbling",
        caption: "Event Bubbling propaga el evento al ancestro, donde un \u00fanico listener despacha la acci\u00f3n evaluando event.target.",
        diagramType: "js-event-delegation-bubbling"
      },
      interviewTips: {
        whatInterviewersWant: "Explicar las tres fases del evento (Capturing, Target, Bubbling) y las ventajas en memoria y dinamismo de nodos.",
        commonPitfalls: ["Intentar usar delegaci\u00f3n con eventos que NO hacen bubbling por defecto (como 'focus' o 'blur'; en su lugar usar 'focusin' o 'focusout')."],
        followUps: [
          "¿Qué diferencia hay entre event.target y event.currentTarget?",
          "¿Qué eventos no burbujean y cómo los manejarías?"
        ]
      },
      quiz: {
        question: "\u00bfEn qu\u00e9 fase de propagaci\u00f3n del DOM se apoya primordialmente el patr\u00f3n Event Delegation?",
        options: ["Capturing Phase", "Target Phase", "Event Bubbling Phase", "Render Phase"],
        correctIndex: 2,
        explanation: "Event Bubbling hace que el evento suba por los ancestros hasta llegar al listener colocado en el contenedor padre."
      }
    },
    {
      id: "js-27",
      title: "\u00bfQu\u00e9 es AbortController y cu\u00e1ndo se usa?",
      level: "avanzado",
      tags: ["AbortController", "AbortSignal", "Cancelaci\u00f3n", "fetch"],
      response: "AbortController es una interfaz est\u00e1ndar del navegador y de Node.js que permite abortar o cancelar de forma cooperativa operaciones as\u00edncronas antes de que se completen, principalmente peticiones HTTP mediante 'fetch()', streams de datos o eventos del DOM. Se instancia creando un controlador (`const controller = new AbortController()`) y suministrando su se\u00f1al asociada (`signal: controller.signal`) a la operaci\u00f3n. Al invocar `controller.abort()`, la se\u00f1al se cancela inmediatamente y la Promesa asociada se rechaza con una excepci\u00f3n DOMException de tipo 'AbortError'. Es indispensable para limpiezas en useEffect de React y evitar race conditions en buscadores de autocompletado.",
      codeExample: {
        language: "javascript",
        code: `async function searchProducts(searchTerm) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 3000); // Timeout a 3s

  try {
    const response = await fetch(\`/api/search?q=\${searchTerm}\`, {
      signal: controller.signal // Enlace de cancelación
    });
    return await response.json();
  } catch (error) {
    if (error.name === 'AbortError') {
      console.warn('Búsqueda cancelada por timeout o nueva pulsación');
    } else {
      console.error('Error de red real:', error);
    }
  } finally {
    clearTimeout(timeoutId);
  }
}`,
        explanation: "AbortController aborta de ra\u00edz el consumo de red y sockets liberando los recursos del cliente inmediatamente."
      },
      visualDiagram: {
        id: "diag-js-abort-controller",
        title: "AbortController: Cancelaci\u00f3n As\u00edncrona Cooperativa",
        caption: "AbortController emite se\u00f1al abort \u2794 fetch cancela la conexi\u00f3n HTTP de ra\u00edz \u2794 Rechazo controlado con AbortError.",
        diagramType: "js-abort-controller-signal"
      },
      interviewTips: {
        whatInterviewersWant: "Vincular su uso con el patr\u00f3n cleanup en React (useEffect / useQuery) y la prevenci\u00f3n de 'Race Conditions' en b\u00fasquedas concurrentes.",
        commonPitfalls: ["No capturar el error 'AbortError' en el bloque catch, tratando una cancelaci\u00f3n voluntaria como un error fatal de red."],
        followUps: [
          "¿Cómo cancelarías una petición fetch al desmontar un componente?",
          "¿Qué hace AbortSignal.timeout() y AbortSignal.any()?"
        ]
      },
      quiz: {
        question: "\u00bfQu\u00e9 m\u00e9todo se invoca en AbortController para cancelar peticiones de red activas asociadas a su signal?",
        options: ["controller.cancel()", "controller.abort()", "controller.terminate()", "controller.disconnect()"],
        correctIndex: 1,
        explanation: "controller.abort() dispara la se\u00f1al 'abort', cancelando la petici\u00f3n HTTP y rechazando la promesa con AbortError."
      }
    },
    {
      id: "js-28",
      title: "\u00bfQu\u00e9 son los Web Workers?",
      level: "experto",
      tags: ["Web Workers", "Multithreading", "postMessage", "Performance"],
      response: "Los Web Workers son hilos de ejecuci\u00f3n en segundo plano que corren en paralelo al hilo principal (Main Thread) del motor del navegador, permitiendo ejecutar JavaScript multihilo real. Permiten realizar c\u00e1lculos matem\u00e1ticos pesados, criptograf\u00eda, compresi\u00f3n o procesamiento masivo de datos sin degradar los 60/120 FPS de la interfaz de usuario. No tienen acceso al DOM, a 'window' ni a 'localStorage'. Se comunican con el hilo principal exclusivamente mediante paso as\u00edncrono de mensajes ('postMessage' y 'onmessage') y transferencia directa de memoria (Transferable Objects como ArrayBuffer).",
      codeExample: {
        language: "javascript",
        code: `// Hilo Principal:
const worker = new Worker(new URL('./parser.worker.js', import.meta.url));

// Pasamos un buffer grande transfiriendo la propiedad (Zero-Copy Transferable):
const buffer = new Uint8Array(5_000_000);
worker.postMessage({ buffer }, [buffer.buffer]);

worker.onmessage = (e) => {
  console.log('Resultado procesado en worker paralelo:', e.data);
};

// parser.worker.js:
self.onmessage = (e) => {
  const result = processHugePayload(e.data.buffer);
  self.postMessage(result);
};`,
        explanation: "Los Web Workers descargan la CPU del hilo principal previniendo congelamientos de interfaz gr\u00e1fica."
      },
      visualDiagram: {
        id: "diag-js-web-workers",
        title: "Arquitectura Multihilo con Web Workers",
        caption: "Main Thread (UI y DOM) se comunica as\u00edncronamente v\u00eda postMessage con Worker Threads en segundo plano.",
        diagramType: "browser-web-workers-threading"
      },
      interviewTips: {
        whatInterviewersWant: "Destacar el uso de Transferable Objects para no penalizar la memoria con serializaciones de structuredClone en buffers masivos.",
        commonPitfalls: ["Intentar acceder al DOM o a document dentro del c\u00f3digo de un Web Worker."],
        followUps: [
          "¿Qué no puede hacer un Web Worker (acceso al DOM)?",
          "¿Qué son los Transferable Objects?"
        ]
      },
      quiz: {
        question: "\u00bfCu\u00e1l de las siguientes APIs est\u00e1 DISPONIBLE dentro del contexto de un Dedicated Web Worker?",
        options: ["window.document", "window.localStorage", "fetch API y IndexedDB", "CSSOM"],
        correctIndex: 2,
        explanation: "Los Web Workers tienen acceso a fetch, IndexedDB, WebSockets y temporizadores, pero no al DOM ni a window/localStorage."
      }
    },
    {
      id: "js-29",
      title: "Explica la cola de microtareas vs macrotareas.",
      level: "experto",
      tags: ["Microtasks", "Macrotasks", "Task Queue", "Event Loop"],
      response: "En el motor de JavaScript existen dos colas de tareas con prioridades y mec\u00e1nicas de drenado totalmente distintas: 1. Cola de Microtareas (Microtasks): Alimentada por callbacks de Promesas (.then/.catch/.finally), queueMicrotask() y MutationObserver. Cuando el Call Stack se vac\u00eda, el Event Loop procesa y vac\u00eda la cola de microtareas HASTA EL FINAL, incluso si las microtareas encolan recursivamente nuevas microtareas antes de ceder el turno. 2. Cola de Macrotareas (Macrotasks o Task Queue): Alimentada por timers (setTimeout, setInterval), I/O de red/disco y eventos de usuario. El Event Loop solo procesa UNA \u00daNICA macrotarea por ciclo, luego vac\u00eda las microtareas resultantes y ejecuta el paso de renderizado antes de tomar la siguiente macrotarea.",
      codeExample: {
        language: "javascript",
        code: `// Demostración de inanición (Starvation) por microtareas recursivas
function infiniteMicrotasks() {
  queueMicrotask(() => {
    // Si una microtarea encola otra microtarea sin parar:
    // El hilo NUNCA cederá el turno a setTimeout ni al renderizado
    infiniteMicrotasks();
  });
}

// Las macrotareas (setTimeout) jamás se ejecutarán si las microtareas no cesan:
setTimeout(() => console.log('Macrotask esperando...'), 0);`,
        explanation: "El vaciado exhaustivo de microtareas puede causar 'inanici\u00f3n' de macrotareas y congelar el render visual si no se tiene precauci\u00f3n."
      },
      visualDiagram: {
        id: "diag-js-micro-macro",
        title: "Prioridades del Event Loop: Microtask Queue vs Macrotask Queue",
        caption: "Call Stack \u2794 Vaciar TODAS las Microtasks (Promises) \u2794 Paso de Renderizado \u2794 Procesar 1 Macrotask (setTimeout).",
        diagramType: "js-microtasks-vs-macrotasks"
      },
      interviewTips: {
        whatInterviewersWant: "Explicar el peligro de Starvation (inanici\u00f3n del hilo de render) si una microtarea genera indefinidamente otras microtareas.",
        commonPitfalls: ["Confundir 'requestAnimationFrame' con una macrotarea ordinaria (rAF se ejecuta en el paso de renderizado, antes de pintar la pantalla)."],
        followUps: [
          "¿Qué ocurre si una microtarea encola microtareas indefinidamente?",
          "¿Dónde encaja requestAnimationFrame en el event loop?"
        ]
      },
      quiz: {
        question: "\u00bfCu\u00e1l es el prop\u00f3sito principal de Explica la cola de microtareas vs macrotareas.?",
        options: ["Implementar Microtasks de forma \u00f3ptima y predecible en el motor de JavaScript", "Soportar navegadores antiguos anteriores a 2005", "Desactivar el Garbage Collector de V8", "Ejecutar c\u00f3digo s\u00edncrono en la GPU"],
        correctIndex: 0,
        explanation: "Explica la cola de microtareas vs macrotareas. es un concepto clave en JavaScript y desarrollo frontend senior."
      }
    },
    {
      id: "js-30",
      title: "\u00bfQu\u00e9 es un generator en JavaScript?",
      level: "experto",
      tags: ["Generators", "function*", "yield", "Iterators", "TC39"],
      response: "Un Generator (funci\u00f3n generadora: function*) es una funci\u00f3n especial que puede pausar su ejecuci\u00f3n en puntos intermedios y reanudarla posteriormente, manteniendo intacto su estado y contexto de variables locales. Al invocarse, no ejecuta su c\u00f3digo de inmediato, sino que retorna un objeto 'Generator' que implementa el protocolo iterable e iterator (m\u00e9todos .next(), .return(), .throw()). La palabra clave 'yield' pausa la funci\u00f3n y expide un valor hacia el exterior `{ value, done: false }`. Al llamar externamente a `.next(val)`, el generador se reanuda desde ese punto exacto pudiendo incluso recibir datos desde el exterior.",
      codeExample: {
        language: "javascript",
        code: `// Generador de secuencia infinita con memoria acotada O(1)
function* idGenerator(prefix = 'id') {
  let counter = 1;
  while (true) {
    // Pausa aquí y expide el valor:
    yield \`\${prefix}_\${counter++}\`;
  }
}

const gen = idGenerator('usr');
console.log(gen.next().value); // 'usr_1'
console.log(gen.next().value); // 'usr_2'
console.log(gen.next().value); // 'usr_3'
// Genera millones de IDs sin desbordar el Memory Heap`,
        explanation: "Los generadores permiten modelar flujos de datos perezosos (lazy evaluation) y m\u00e1quinas de estados complejas."
      },
      visualDiagram: {
        id: "diag-js-generator",
        title: "Generators (function*): M\u00e1quina de Estados Pausable con yield",
        caption: "Invocaci\u00f3n de function* \u2794 Pausa con yield \u2794 Reanudaci\u00f3n controlada con gen.next() expidiendo { value, done }.",
        diagramType: "js-generator-state-machine"
      },
      interviewTips: {
        whatInterviewersWant: "Explicar su uso en orquestaci\u00f3n de efectos as\u00edncronos complejos (Redux Saga) y flujos iterables de streams masivos sin saturar la RAM.",
        commonPitfalls: ["Intentar usar una arrow function como generador: `const fn = *() => {}` no es v\u00e1lido en la sintaxis de ECMAScript."],
        followUps: [
          "¿Cómo usarías un generator para implementar un iterador perezoso?",
          "¿Qué diferencia hay entre generators y async generators (for await)?"
        ]
      },
      quiz: {
        question: "\u00bfCu\u00e1l es el prop\u00f3sito principal de \u00bfQu\u00e9 es un generator en JavaScript??",
        options: ["Implementar Generators de forma \u00f3ptima y predecible en el motor de JavaScript", "Soportar navegadores antiguos anteriores a 2005", "Desactivar el Garbage Collector de V8", "Ejecutar c\u00f3digo s\u00edncrono en la GPU"],
        correctIndex: 0,
        explanation: "\u00bfQu\u00e9 es un generator en JavaScript? es un concepto clave en JavaScript y desarrollo frontend senior."
      }
    },
    {
      id: "js-31",
      title: "\u00bfQu\u00e9 es un WeakMap y un WeakSet?",
      level: "experto",
      tags: ["WeakMap", "WeakSet", "Garbage Collection", "Memory Leaks"],
      response: "WeakMap y WeakSet son colecciones de datos introducidas en ES6 donde las referencias a los objetos almacenados se mantienen de forma 'd\u00e9bil' (Weak Reference). Esto significa que la presencia de un objeto como clave en un WeakMap (o como valor en un WeakSet) NO previene que el recolector de basura (Garbage Collector) libere el objeto de la memoria si no existe ninguna otra referencia viva a \u00e9l en el programa. Cuando el objeto es recolectado por el motor, su entrada en el WeakMap se elimina de forma totalmente autom\u00e1tica. No son iterables, no tienen propiedad '.size' ni m\u00e9todos para listar claves, ya que el estado del Garbage Collector es no determinista.",
      codeExample: {
        language: "javascript",
        code: `// Almacenamiento de metadatos privados en nodos del DOM sin fugas de memoria
const domMetadata = new WeakMap();

function trackElementClicks(buttonElement) {
  domMetadata.set(buttonElement, { clicks: 0 });

  buttonElement.addEventListener('click', () => {
    const meta = domMetadata.get(buttonElement);
    meta.clicks++;
    console.log('Clics registrados:', meta.clicks);
  });
}

// Si buttonElement es eliminado del DOM y desreferenciado:
// El Garbage Collector lo borra automáticamente de domMetadata sin memory leak`,
        explanation: "WeakMap permite asociar datos privados a objetos sin crear retenciones de memoria indeseadas."
      },
      visualDiagram: {
        id: "diag-js-weakmap",
        title: "WeakMap / WeakSet: Referencias D\u00e9biles y Garbage Collection",
        caption: "Map retiene objetos impidiendo el GC; WeakMap permite que el Garbage Collector libere el objeto autom\u00e1ticamente.",
        diagramType: "js-weakmap-garbage-collection"
      },
      interviewTips: {
        whatInterviewersWant: "Explicar por qu\u00e9 las claves de WeakMap solo pueden ser Objetos y la imposibilidad de iterar debido al recolector de basura.",
        commonPitfalls: ["Intentar almacenar tipos primitivos como string o number como claves de un WeakMap (arroja TypeError)."],
        followUps: [
          "¿Por qué las claves de un WeakMap no pueden ser primitivos?",
          "¿Qué caso de uso real tiene un WeakMap (metadatos privados, caché por objeto)?"
        ]
      },
      quiz: {
        question: "\u00bfCu\u00e1l es el prop\u00f3sito principal de \u00bfQu\u00e9 es un WeakMap y un WeakSet??",
        options: ["Implementar WeakMap de forma \u00f3ptima y predecible en el motor de JavaScript", "Soportar navegadores antiguos anteriores a 2005", "Desactivar el Garbage Collector de V8", "Ejecutar c\u00f3digo s\u00edncrono en la GPU"],
        correctIndex: 0,
        explanation: "\u00bfQu\u00e9 es un WeakMap y un WeakSet? es un concepto clave en JavaScript y desarrollo frontend senior."
      }
    },
    {
      id: "js-32",
      title: "\u00bfQu\u00e9 son los proxies en JavaScript?",
      level: "experto",
      tags: ["Proxy", "Reflect", "Metaprogramming", "Reactivity"],
      response: "Un Proxy es un objeto introducido en ES6 que envuelve a un objeto de destino (target) e intercepta y redefine operaciones fundamentales del lenguaje (denominadas 'traps': lectura de propiedades con 'get', escritura con 'set', comprobaci\u00f3n de existencia con 'has', eliminaci\u00f3n con 'deleteProperty', invocaci\u00f3n de funci\u00f3n con 'apply'). Se combina sin\u00e9rgicamente con el objeto global 'Reflect' para reenviar la operaci\u00f3n original de forma limpia. Es la piedra angular de los sistemas de reactividad modernos en frameworks frontend como Vue 3, librer\u00edas de estado como Valtio y sistemas de validaci\u00f3n de esquemas en tiempo de ejecuci\u00f3n.",
      codeExample: {
        language: "javascript",
        code: `// Sistema reactivo minimalista con Proxy y Reflect
function createReactiveState(target, onChange) {
  return new Proxy(target, {
    get(obj, prop, receiver) {
      // Intercepta lectura de propiedad
      return Reflect.get(obj, prop, receiver);
    },
    set(obj, prop, value, receiver) {
      const oldValue = obj[prop];
      const success = Reflect.set(obj, prop, value, receiver);
      if (success && oldValue !== value) {
        onChange(prop, value); // Notifica automáticamente el cambio
      }
      return success;
    }
  });
}

const state = createReactiveState({ count: 0 }, (prop, val) => {
  console.log(\`UI Trigger: propiedad '\${prop}' cambió a \${val}\`);
});

state.count = 1; // Dispara: UI Trigger: propiedad 'count' cambió a 1`,
        explanation: "Proxy intercepta lecturas y escrituras en tiempo real; Reflect delega la operaci\u00f3n nativa con par\u00e1metros correctos."
      },
      visualDiagram: {
        id: "diag-js-proxy",
        title: "Proxy & Reflect: Metaprogramaci\u00f3n e Intercepci\u00f3n Reactiva",
        caption: "Acceso al objeto \u2794 Proxy Handler (Traps get/set) \u2794 L\u00f3gica reactiva + Reflect \u2794 Mutaci\u00f3n en Target Object.",
        diagramType: "js-proxy-reflect-traps"
      },
      interviewTips: {
        whatInterviewersWant: "Comparar la reactividad de Vue 2 (Object.defineProperty, que no detectaba adici\u00f3n de claves ni \u00edndices de array) con Vue 3 (Proxy nativo).",
        commonPitfalls: ["Olvidar devolver 'true' en la trampa 'set' (si devuelve false o undefined en modo estricto se lanzar\u00e1 un TypeError)."],
        followUps: [
          "¿Cómo se usa un Proxy para implementar reactividad (Vue 3)?",
          "¿Por qué se combina Proxy con Reflect dentro de los traps?"
        ]
      },
      quiz: {
        question: "\u00bfCu\u00e1l es el prop\u00f3sito principal de \u00bfQu\u00e9 son los proxies en JavaScript??",
        options: ["Implementar Proxy de forma \u00f3ptima y predecible en el motor de JavaScript", "Soportar navegadores antiguos anteriores a 2005", "Desactivar el Garbage Collector de V8", "Ejecutar c\u00f3digo s\u00edncrono en la GPU"],
        correctIndex: 0,
        explanation: "\u00bfQu\u00e9 son los proxies en JavaScript? es un concepto clave en JavaScript y desarrollo frontend senior."
      }
    },
    {
      id: "js-33",
      title: "\u00bfQu\u00e9 es el patr\u00f3n Observer en JavaScript?",
      level: "experto",
      tags: ["Observer Pattern", "EventEmitter", "PubSub", "Reactive"],
      response: "El patr\u00f3n Observer es un patr\u00f3n de dise\u00f1o de comportamiento en el que un objeto principal (denominado Subject o Publisher) mantiene una lista de observadores dependientes (Observers o Subscribers) y les notifica autom\u00e1ticamente cualquier cambio de estado invocando un m\u00e9todo de callback acordado. Provee un desacoplamiento arquitect\u00f3nico fundamental de 1 a N, donde el emisor no conoce la identidad ni la implementaci\u00f3n de los receptores. Es el fundamento conceptual de la programaci\u00f3n reactiva (RxJS), la gesti\u00f3n de eventos en el DOM (EventTarget) y sistemas de mensajer\u00eda as\u00edncrona.",
      codeExample: {
        language: "javascript",
        code: `// Implementación tipada de un EventEmitter (Patrón Observer)
class EventEmitter {
  #events = new Map();

  subscribe(eventName, callback) {
    if (!this.#events.has(eventName)) {
      this.#events.set(eventName, new Set());
    }
    this.#events.get(eventName).add(callback);

    // Retorna función de desuscripción (Unsubscribe) limpia:
    return () => this.#events.get(eventName)?.delete(callback);
  }

  emit(eventName, data) {
    this.#events.get(eventName)?.forEach((cb) => cb(data));
  }
}

const storeEvents = new EventEmitter();
const unsubscribeUI = storeEvents.subscribe('CART_UPDATED', (cart) => {
  console.log('UI re-renderizada con items:', cart.length);
});

storeEvents.emit('CART_UPDATED', ['Producto A', 'Producto B']);
unsubscribeUI(); // Limpieza para evitar memory leaks`,
        explanation: "El patr\u00f3n Observer desacopla el emisor de datos de los receptores; siempre debe proveerse un mecanismo de desuscripci\u00f3n."
      },
      visualDiagram: {
        id: "diag-js-observer",
        title: "Patr\u00f3n Observer / EventEmitter: Desacoplamiento 1 a N",
        caption: "Subject central notifica broadcast a M\u00faltiples Observers independientes (UI, Analytics, Storage).",
        diagramType: "js-observer-pubsub"
      },
      interviewTips: {
        whatInterviewersWant: "Explicar la diferencia sutil entre Observer cl\u00e1sico (el Subject conoce a los observers) y Pub/Sub (canal intermediario Event Bus completamente desacoplado).",
        commonPitfalls: ["No desuscribir observadores al destruir vistas o desmontar componentes, provocando graves fugas de memoria (Lapsed Listener Problem)."],
        followUps: [
          "¿Qué diferencia hay entre el patrón Observer y Pub/Sub?",
          "¿Cómo evitarías memory leaks al suscribirte a un observable?"
        ]
      },
      quiz: {
        question: "\u00bfCu\u00e1l es el prop\u00f3sito principal de \u00bfQu\u00e9 es el patr\u00f3n Observer en JavaScript??",
        options: ["Implementar Observer Pattern de forma \u00f3ptima y predecible en el motor de JavaScript", "Soportar navegadores antiguos anteriores a 2005", "Desactivar el Garbage Collector de V8", "Ejecutar c\u00f3digo s\u00edncrono en la GPU"],
        correctIndex: 0,
        explanation: "\u00bfQu\u00e9 es el patr\u00f3n Observer en JavaScript? es un concepto clave en JavaScript y desarrollo frontend senior."
      }
    },
    {
      id: "js-34",
      title: "\u00bfQu\u00e9 es Structured Clone y cu\u00e1ndo se usa?",
      level: "experto",
      tags: ["structuredClone", "Deep Copy", "Memoria", "Web APIs"],
      response: "structuredClone() es una funci\u00f3n nativa estandarizada por el HTML Living Standard y a\u00f1adida a ECMAScript que permite crear copias profundas (Deep Clones) exactas y completas de valores JavaScript. Supera de forma categ\u00f3rica al viejo truco `JSON.parse(JSON.stringify())` porque: 1. Soporta y preserva referencias circulares sin desbordar el stack. 2. Preserva tipos avanzados del lenguaje: Date, RegExp, Map, Set, Blob, File, ArrayBuffer y TypedArrays. 3. Soporta transferencia de propiedad de memoria en objetos Transferable con costo cero. No puede clonar funciones ni nodos del DOM (arroja DataCloneError).",
      codeExample: {
        language: "javascript",
        code: `// Objeto complejo con tipos no serializables en JSON y referencias circulares:
const complexData = {
  created: new Date(),
  tags: new Set(['admin', 'editor']),
  cache: new Map([['key1', 'val1']]),
  self: null
};
complexData.self = complexData; // Referencia circular infinita

// JSON.stringify(complexData) fallaría con TypeError: Converting circular structure to JSON

// Clonado profundo nativo perfecto:
const deepCopy = structuredClone(complexData);

console.log(deepCopy.created instanceof Date); // true
console.log(deepCopy.tags instanceof Set);     // true
console.log(deepCopy.self === deepCopy);        // true (Preserva circularidad)`,
        explanation: "structuredClone opera en C++ nativo dentro del motor del navegador ofreciendo clonado profundo exacto y seguro."
      },
      visualDiagram: {
        id: "diag-js-structured-clone",
        title: "structuredClone() vs JSON.parse(JSON.stringify())",
        caption: "structuredClone clona recursivamente Date, Map, Set, ArrayBuffers y referencias circulares sin p\u00e9rdida de tipos.",
        diagramType: "js-structured-clone-algorithm"
      },
      interviewTips: {
        whatInterviewersWant: "Explicar qu\u00e9 tipos NO puede clonar structuredClone (funciones, m\u00e9todos de clase, Error stacks complejos o nodos vivos del DOM).",
        commonPitfalls: ["Seguir utilizando JSON.parse(JSON.stringify()) en c\u00f3digo moderno en lugar de structuredClone()."],
        followUps: [
          "¿Qué tipos de datos no puede clonar structuredClone (funciones, nodos DOM)?",
          "¿En qué se diferencia de JSON.parse(JSON.stringify(obj))?"
        ]
      },
      quiz: {
        question: "\u00bfCu\u00e1l es el prop\u00f3sito principal de \u00bfQu\u00e9 es Structured Clone y cu\u00e1ndo se usa??",
        options: ["Implementar structuredClone de forma \u00f3ptima y predecible en el motor de JavaScript", "Soportar navegadores antiguos anteriores a 2005", "Desactivar el Garbage Collector de V8", "Ejecutar c\u00f3digo s\u00edncrono en la GPU"],
        correctIndex: 0,
        explanation: "\u00bfQu\u00e9 es Structured Clone y cu\u00e1ndo se usa? es un concepto clave en JavaScript y desarrollo frontend senior."
      }
    },
    {
      id: "js-35",
      title: "\u00bfQu\u00e9 es el Temporal API y qu\u00e9 problemas resuelve?",
      level: "experto",
      tags: ["Temporal", "TC39", "Date", "Timezones", "Inmutabilidad"],
      response: "La Temporal API es una especificaci\u00f3n moderna de TC39 dise\u00f1ada para reemplazar por completo al defectuoso objeto nativo 'Date' de JavaScript. El objeto 'Date' original de 1995 sufre de severos problemas: es mutable por defecto, los meses est\u00e1n indexados en 0 (0 = enero), no soporta zonas horarias distintas de UTC y la hora local del sistema, y su parseo de strings es inconsistente entre navegadores. Temporal proporciona una suite exhaustiva de tipos inmutables dedicados: 'Temporal.PlainDate' (fecha sin hora), 'Temporal.PlainTime' (hora sin fecha), 'Temporal.ZonedDateTime' (fecha y hora exacta con IANA Timezone), y 'Temporal.Duration' para aritm\u00e9tica de fechas precisa.",
      codeExample: {
        language: "javascript",
        code: `// Ejemplos conceptuales con la especificación Temporal API
// 1. Fecha actual exacta con zona horaria IANA:
// const nowInTokyo = Temporal.Now.zonedDateTimeISO('Asia/Tokyo');

// 2. Fecha inmutable pura sin problemas de meses 0-indexados:
// const releaseDate = Temporal.PlainDate.from('2026-09-15');
// console.log(releaseDate.month); // 9 (Septiembre, no 8!)

// 3. Aritmética de fechas matemática y predecible:
// const nextSprint = releaseDate.add({ weeks: 2 });
// const difference = nextSprint.since(releaseDate);
// console.log(difference.total({ unit: 'days' })); // 14`,
        explanation: "Temporal elimina la necesidad hist\u00f3rica de incluir librer\u00edas externas pesadas como Moment.js o date-fns en proyectos modernos."
      },
      visualDiagram: {
        id: "diag-js-temporal",
        title: "Temporal API (TC39): El Reemplazo Definitivo de Date",
        caption: "Tipos inmutables dedicados (PlainDate, ZonedDateTime, Duration) con soporte nativo de IANA timezones.",
        diagramType: "js-temporal-api-architecture"
      },
      interviewTips: {
        whatInterviewersWant: "Enumerar los 3 mayores defectos del objeto Date legacy (mutabilidad, meses 0-indexados, nulo soporte IANA) y c\u00f3mo Temporal los soluciona.",
        commonPitfalls: ["Asumir que Temporal est\u00e1 100% disponible en todos los navegadores antiguos sin polyfill durante su fase de estabilizaci\u00f3n."],
        followUps: [
          "¿Qué problemas tiene el objeto Date que resuelve Temporal?",
          "¿Qué diferencia hay entre Temporal.PlainDate y Temporal.ZonedDateTime?"
        ]
      },
      quiz: {
        question: "\u00bfCu\u00e1l es el prop\u00f3sito principal de \u00bfQu\u00e9 es el Temporal API y qu\u00e9 problemas resuelve??",
        options: ["Implementar Temporal de forma \u00f3ptima y predecible en el motor de JavaScript", "Soportar navegadores antiguos anteriores a 2005", "Desactivar el Garbage Collector de V8", "Ejecutar c\u00f3digo s\u00edncrono en la GPU"],
        correctIndex: 0,
        explanation: "\u00bfQu\u00e9 es el Temporal API y qu\u00e9 problemas resuelve? es un concepto clave en JavaScript y desarrollo frontend senior."
      }
    }
  ]
};

export default questionsJavascript;
