import { ISection } from "../../types";

export const questionsTypescript: ISection = {
  id: "typescript",
  title: "TypeScript",
  collapse: "collapseTypescript",
  icon: "typescript",
  category: "javascript-typescript",
  description:
    "Sistema de tipos estáticos, inferencia, genéricos, type narrowing, metaprogramación de tipos y utilidades avanzadas en TS 5.x.",
  questions: [
    {
      id: "ts-01",
      title: "\u00bfQu\u00e9 es TypeScript y en qu\u00e9 se diferencia de JavaScript?",
      level: "basico",
      tags: ["TypeScript", "Compiler", "tsc", "Type-Erasure", "Static-Typing"],
      response: "TypeScript es un superset tipado est\u00e1ticamente de JavaScript desarrollado por Microsoft que compila (transpila) a JavaScript est\u00e1ndar ejecutable en cualquier navegador o runtime (Node.js, Deno, Bun). Su principal prop\u00f3sito es detectar anomal\u00edas l\u00f3gicas, errores de contrato y tipos incompatibles en tiempo de compilaci\u00f3n (a trav\u00e9s del Type Checker de `tsc`), eliminando clases enteras de bugs antes del despliegue.\n\nA diferencia de JavaScript, donde el tipado es din\u00e1mico y d\u00e9bil (las variables no tienen tipo fijo y se verifican en runtime), TypeScript introduce contratos r\u00edgidos: interfaces, types, enums, gen\u00e9ricos y narrowing. Sin embargo, TypeScript implementa 'Type Erasure': en el paso de emisi\u00f3n, el compilador elimina el 100% de las anotaciones de tipos, interfaces y aserciones. El c\u00f3digo resultante es JavaScript puro sin sobrecarga de rendimiento en tiempo de ejecuci\u00f3n.",
      codeExample: {
        language: "typescript",
        code: "// C\u00f3digo TypeScript (.ts)\ninterface User {\n  readonly id: number;\n  name: string;\n  email: string;\n  role?: \"admin\" | \"member\";\n}\n\nfunction greetUser(user: User): string {\n  return `Hola, ${user.name} (${user.role ?? \"invitado\"})`;\n}\n\n// Validaci\u00f3n est\u00e1tica exitosa:\nconst admin: User = { id: 1, name: \"Diego\", email: \"diego@cabuweb.com\", role: \"admin\" };\nconsole.log(greetUser(admin));\n\n// JavaScript emitido tras compilaci\u00f3n (Type Erasure total):\n// function greetUser(user) {\n//   return `Hola, ${user.name} (${user.role ?? \"invitado\"})`;\n// }"
      },
      visualDiagram: {
        id: "diag-ts-01",
        title: "Pipeline de Compilaci\u00f3n y Type Erasure en TypeScript",
        caption: "El compilador (tsc) valida exhaustivamente los tipos est\u00e1ticos y emite JavaScript est\u00e1ndar eliminando todas las declaraciones de tipos.",
        diagramType: "typescript-pipeline"
      },
      interviewTips: {
        whatInterviewersWant: "Quieren comprobar que entiendes la naturaleza de TypeScript como herramienta de desarrollo en tiempo de compilaci\u00f3n y que tienes claro el concepto de 'Type Erasure' (los tipos no existen en runtime en el bundle JS final).",
        commonPitfalls: ["Creer err\u00f3neamente que las interfaces o tipos a\u00f1aden validaci\u00f3n autom\u00e1tica a los payloads de red en runtime.", "Confundir TypeScript con un lenguaje compilado a binario: siempre se convierte a JavaScript ECMAScript.", "Pensar que usar TypeScript introduce sobrecarga (overhead) de c\u00f3mputo en la ejecuci\u00f3n del navegador."]
      },
      quiz: {
        question: "\u00bfCu\u00e1ndo eval\u00faa TypeScript las interfaces y anotaciones de tipos?",
        options: ["Exclusivamente en tiempo de compilaci\u00f3n; se eliminan por completo (Type Erasure) en el JS final.", "En tiempo de ejecuci\u00f3n mediante un motor virtual inyectado en el navegador.", "Durante la carga del archivo mediante una librer\u00eda polyfill en runtime.", "En tiempo de ejecuci\u00f3n \u00fanicamente si se activa el modo estricto en tsconfig.json."],
        correctIndex: 0,
        explanation: "TypeScript opera exclusivamente en tiempo de compilaci\u00f3n (Static Analysis). Mediante 'Type Erasure', todas las interfaces, alias de tipo y anotaciones desaparecen del archivo JavaScript generado."
      }
    },
    {
      id: "ts-02",
      title: "\u00bfC\u00f3mo se declara un tipo b\u00e1sico en TypeScript?",
      level: "basico",
      tags: ["Primitives", "Type-Annotations", "Arrays", "Tuples", "Union-Types"],
      response: "En TypeScript, los tipos se asocian a identificadores utilizando la sintaxis de anotaci\u00f3n con dos puntos (`identificador: Tipo`). El sistema cuenta con primitivos fundamentales: `string`, `number`, `boolean`, `symbol`, `bigint`, `undefined` y `null`. Adem\u00e1s, soporta tipos compuestos como Arrays (`number[]` o `Array<number>`), Tuplas (arrays de longitud fija con tipos posicionales espec\u00edficos como `[string, number]`), y tipos uni\u00f3n (`string | number`).\n\nEs una regla cr\u00edtica de arquitectura utilizar siempre los tipos primitivos en min\u00fasculas (`string`, `number`, `boolean`) y nunca sus constructores de envoltorio en may\u00fasculas (`String`, `Number`, `Boolean`), ya que estos \u00faltimos hacen referencia a objetos contenedores de JavaScript poco comunes que provocan incompatibilidades de asignaci\u00f3n.",
      codeExample: {
        language: "typescript",
        code: "// Tipos primitivos elementales\nconst userName: string = \"Elena\";\nconst userAge: number = 29;\nconst isActive: boolean = true;\nconst bigId: bigint = 9007199254740991n;\nconst uniqueKey: symbol = Symbol(\"apiKey\");\n\n// Arrays y Tuplas\nconst scores: number[] = [98, 85, 92]; // o Array<number>\nconst coordinate: [latitude: number, longitude: number] = [40.4168, -3.7038];\n\n// Tipos uni\u00f3n y literales\nlet statusFilter: \"all\" | \"active\" | \"archived\" = \"all\";\n\n// Funciones con retorno expl\u00edcito\nfunction calculateTotal(price: number, taxRate: number = 0.21): number {\n  return price * (1 + taxRate);\n}"
      },
      visualDiagram: {
        id: "diag-ts-02",
        title: "Jerarqu\u00eda de Tipos Fundamentales en TypeScript",
        caption: "Relaci\u00f3n entre Top Types (unknown/any), primitivos del lenguaje, tipos compuestos (arrays, tuplas) y el Bottom Type (never).",
        diagramType: "ts-basic-types-hierarchy"
      },
      interviewTips: {
        whatInterviewersWant: "Verificar que conoces los primitivos reales, la sintaxis de tuplas con etiquetas descriptivas, y que no utilizas los constructores envoltorio con may\u00fascula (String/Number).",
        commonPitfalls: ["Declarar `let x: Number` en vez de `let x: number`, causando errores sutiles de asignaci\u00f3n.", "Confundir una tupla `[string, number]` con un array regular `(string | number)[]`.", "Anotar tipos innecesarios donde la inferencia directa de TypeScript ya es 100% precisa."]
      },
      quiz: {
        question: "\u00bfPor qu\u00e9 se debe evitar anotar variables con 'String' o 'Number' con inicial may\u00fascula?",
        options: ["Porque representan objetos envoltorio (wrappers) de JavaScript y no tipos primitivos escalares.", "Porque esas palabras clave est\u00e1n reservadas exclusivamente para TypeScript 2.0.", "Porque lanzan errores de sintaxis irrecuperables en el compilador tsc.", "Porque degradan la velocidad del Garbage Collector en el navegador."],
        correctIndex: 0,
        explanation: "En JavaScript y TypeScript, 'String', 'Number' y 'Boolean' se refieren a las interfaces de las funciones constructoras/objetos envoltorio. Para valores primitivos siempre se deben usar 'string', 'number' y 'boolean'."
      }
    },
    {
      id: "ts-03",
      title: "\u00bfQu\u00e9 son las interfaces en TypeScript?",
      level: "basico",
      tags: ["Interfaces", "Contracts", "Extends", "Declaration-Merging", "OOP"],
      response: "Una `interface` en TypeScript es una estructura formal que define un contrato sint\u00e1ctico sobre la forma (shape) que debe cumplir un objeto, clase o funci\u00f3n. A diferencia de las clases, las interfaces son puramente declarativas y no generan c\u00f3digo JavaScript tras la compilaci\u00f3n.\n\nLas interfaces destacan por dos caracter\u00edsticas esenciales:\n1. **Herencia mediante `extends`**: Permiten derivar contratos y componer modelos complejos de forma jer\u00e1rquica y legible.\n2. **Declaration Merging (Fusi\u00f3n de declaraciones)**: Si declaras m\u00faltiples interfaces con el mismo nombre en el mismo scope o en archivos de definici\u00f3n globales (.d.ts), el compilador fusiona autom\u00e1ticamente todos sus miembros en una \u00fanica interfaz unificada. Esta capacidad es el pilar para extender librer\u00edas de terceros y APIs globales del navegador como `Window` o `ProcessEnv`.",
      codeExample: {
        language: "typescript",
        code: "// Definici\u00f3n base y extensi\u00f3n\ninterface Identifiable {\n  id: string;\n  createdAt: Date;\n}\n\ninterface UserProfile extends Identifiable {\n  name: string;\n  email: string;\n  avatarUrl?: string; // Propiedad opcional\n}\n\n// Declaration Merging (vital para extender librer\u00edas y window)\ndeclare global {\n  interface Window {\n    analyticsTracker?: {\n      trackEvent: (name: string, payload: Record<string, unknown>) => void;\n    };\n  }\n}\n\n// Uso seguro y tipado\nwindow.analyticsTracker?.trackEvent(\"user_login\", { method: \"oauth\" });"
      },
      visualDiagram: {
        id: "diag-ts-03",
        title: "Extensi\u00f3n y Declaration Merging en Interfaces",
        caption: "Las interfaces permiten combinar definiciones coincidentes de forma aditiva y heredar propiedades mediante extends.",
        diagramType: "ts-interface-declaration-merging"
      },
      interviewTips: {
        whatInterviewersWant: "Conocer tu dominio sobre contratos de objetos, herencia con `extends`, y que comprendes el mecanismo de Declaration Merging (especialmente \u00fatil para declarar plugins en librer\u00edas).",
        commonPitfalls: ["Creer que una interfaz puede definir uniones directas de tipos primitivos (eso solo lo permite `type`).", "Olvidar marcar propiedades como opcionales (`?`) o de solo lectura (`readonly`).", "Desconocer que dos interfaces con el mismo nombre se combinan en vez de lanzar error de identificador duplicado."]
      },
      quiz: {
        question: "\u00bfQu\u00e9 ocurre en TypeScript si defines dos interfaces con el nombre 'Car' en el mismo scope?",
        options: ["El compilador realiza 'Declaration Merging', combinando los miembros de ambas en una sola interfaz.", "El compilador emite un error de tipo 'Duplicate identifier Car'.", "La segunda interfaz sobreescribe por completo a la primera eliminando sus propiedades.", "Se genera un warning de compilaci\u00f3n y se descarta la segunda definici\u00f3n."],
        correctIndex: 0,
        explanation: "TypeScript implementa 'Declaration Merging' para interfaces: m\u00faltiples declaraciones bajo el mismo identificador se combinan sumando todas las propiedades en una \u00fanica definici\u00f3n."
      }
    },
    {
      id: "ts-04",
      title: "\u00bfQu\u00e9 diferencia hay entre any y unknown?",
      level: "basico",
      tags: ["any", "unknown", "Type-Safety", "Top-Type", "Narrowing"],
      response: "`any` y `unknown` son los dos 'Top Types' (super-tipos que aceptan cualquier valor) en el sistema de tipos de TypeScript, pero tienen implicaciones radicalmente opuestas sobre la seguridad de tipos (Type Safety):\n\n1. **`any` (Inseguro / Bypass del Type Checker)**: Desactiva completamente la verificaci\u00f3n de tipos para esa variable. Permite acceder a cualquier propiedad inexistente, invocarla como funci\u00f3n o asignarla a cualquier otro tipo sin restricciones, lo que suele derivar en excepciones `TypeError` fatales en tiempo de ejecuci\u00f3n.\n\n2. **`unknown` (Type-Safe)**: Acepta cualquier valor pero **proh\u00edbe estrictamente** realizar operaciones sobre \u00e9l (leer propiedades, iterar o invocarlo) hasta que su tipo sea verificado y estrechado (Type Narrowing) mediante guardas de tipo (`typeof`, `instanceof`, o Type Predicates). Es el tipo recomendado para payloads de APIs, deserializaciones JSON y librer\u00edas defensivas.",
      codeExample: {
        language: "typescript",
        code: "// Peligro con 'any':\nlet dangerousData: any = 42;\n// TypeScript compila sin errores, pero explota en runtime:\n// dangerousData.toUpperCase(); // \ud83d\udca5 TypeError: dangerousData.toUpperCase is not a function\n\n// Seguridad con 'unknown':\nlet safeData: unknown = fetchApiResponse();\n\n// safeData.trim(); // \u274c Error TS2571: Object is of type 'unknown'.\n\n// Narrowing obligatorio para operar de forma segura:\nif (typeof safeData === \"string\") {\n  console.log(safeData.trim()); // \u2705 OK: el compilador sabe que es string\n} else if (Array.isArray(safeData)) {\n  console.log(safeData.length); // \u2705 OK: el compilador sabe que es Array\n}\n\nfunction fetchApiResponse(): unknown {\n  return JSON.parse('{\"status\":\"ok\"}');\n}"
      },
      visualDiagram: {
        id: "diag-ts-04",
        title: "Comparativa de Seguridad: any vs unknown",
        caption: "any cancela el verificador de tipos provocando errores en runtime; unknown exige comprobaciones previas para garantizar type-safety.",
        diagramType: "ts-any-vs-unknown-safety"
      },
      interviewTips: {
        whatInterviewersWant: "Evaluar tu compromiso con la seguridad de tipos. Responder que evitas `any` en favor de `unknown` demuestra madurez profesional en TypeScript.",
        commonPitfalls: ["Usar `any` como atajo para silenciar errores del compilador en lugar de modelar los tipos correctamente.", "No saber c\u00f3mo hacer narrowing de una variable `unknown` antes de interactuar con sus campos.", "Creer que `unknown` es id\u00e9ntico a `never` (never es el bottom type que no acepta ning\u00fan valor)."]
      },
      quiz: {
        question: "\u00bfPor qu\u00e9 'unknown' es superior a 'any' al tipar respuestas de APIs o entradas desconocidas?",
        options: ["Porque obliga al desarrollador a comprobar el tipo mediante guardas antes de realizar cualquier operaci\u00f3n sobre la variable.", "Porque convierte autom\u00e1ticamente los tipos en runtime al formato nativo correcto.", "Porque consume menos memoria en el runtime de V8.", "Porque solo admite tipos primitivos escalares y rechaza objetos."],
        correctIndex: 0,
        explanation: "unknown es el Top Type seguro de TypeScript: admite cualquier valor pero impide su manipulaci\u00f3n directa hasta que se demuestre su tipo espec\u00edfico mediante estrechamiento (type narrowing)."
      }
    },
    {
      id: "ts-05",
      title: "\u00bfQu\u00e9 son los tipos literales en TypeScript?",
      level: "basico",
      tags: ["Literal-Types", "Unions", "Exhaustive-Check", "Type-Narrowing"],
      response: "Los tipos literales permiten restringir el dominio de una variable no solo a un tipo general (como `string` o `number`), sino a un subconjunto exacto de valores literales concretos (como `\"GET\" | \"POST\"` o `1 | 2 | 3`).\n\nAl combinarse con tipos uni\u00f3n (`|`), forman **Uniones Discriminadas** y tipos de opciones finitas, lo que otorga autocompletado en el IDE y previene erratas tipogr\u00e1ficas en tiempo de compilaci\u00f3n. Cuando declaras una variable con `const`, TypeScript infiere por defecto su tipo literal (`\"dark\"`), mientras que con `let` realiza un ensanchamiento de tipo (Type Widening) hacia el tipo general (`string`).",
      codeExample: {
        language: "typescript",
        code: "// Tipos literales en uni\u00f3n\ntype HttpMethod = \"GET\" | \"POST\" | \"PUT\" | \"DELETE\";\ntype Direction = \"north\" | \"south\" | \"east\" | \"west\";\ntype DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;\n\nfunction executeRequest(url: string, method: HttpMethod): void {\n  console.log(`Solicitud ${method} enviada a ${url}`);\n}\n\nexecuteRequest(\"/api/v1/users\", \"GET\"); // \u2705 V\u00e1lido\n// executeRequest(\"/api/v1/users\", \"PATCH\"); // \u274c Error TS2345: Argument of type '\"PATCH\"' not assignable to 'HttpMethod'\n\n// Diferencia de inferencia entre const y let (Literal Widening):\nconst fixedTheme = \"dark\"; // Tipo inferido: \"dark\" (literal)\nlet variableTheme = \"dark\"; // Tipo inferido: string (widened)"
      },
      visualDiagram: {
        id: "diag-ts-05",
        title: "Estrechamiento con Tipos Literales y Uniones",
        caption: "Restricci\u00f3n de dominios infinitos (string) a subconjuntos de opciones discretas y exhaustivas garantizadas por el compilador.",
        diagramType: "ts-literal-types-narrowing"
      },
      interviewTips: {
        whatInterviewersWant: "Que expliques c\u00f3mo los tipos literales potencian el autocompletado y eliminan 'magic strings', adem\u00e1s de saber explicar la diferencia de inferencia entre `const` y `let` (Type Widening).",
        commonPitfalls: ["Pasar variables mutables (`let`) a funciones que esperan literales sin aplicar narrowing o `as const`.", "Crear uniones de literales redundantes mezcladas con su tipo general (`'a' | 'b' | string`), lo que elimina el chequeo estricto.", "No aprovechar comprobaciones exhaustivas con `never` en sentencias `switch`."]
      },
      quiz: {
        question: "\u00bfQu\u00e9 tipo infiere TypeScript para 'const mode = \"dark\"' frente a 'let mode = \"dark\"'?",
        options: ["'\"dark\"' para const (tipo literal) y 'string' para let (ensanchamiento de tipo).", "'string' para ambos porque las dos variables contienen cadenas de texto.", "'constant' para la primera y 'variable' para la segunda.", "'\"dark\"' para ambas variables sin distinci\u00f3n."],
        correctIndex: 0,
        explanation: "Como 'const' es inmutable, TypeScript infiere el tipo literal exacto '\"dark\"'. Para 'let', como su valor puede cambiar posteriormente, aplica 'type widening' infiriendo el tipo general 'string'."
      }
    },
    {
      id: "ts-06",
      title: "\u00bfQu\u00e9 diferencia hay entre null y undefined en TypeScript?",
      level: "basico",
      tags: ["null", "undefined", "strictNullChecks", "Optional-Chaining", "Nullish-Coalescing"],
      response: "En TypeScript (siguiendo las especificaciones de JavaScript), `undefined` y `null` representan conceptos sutilmente distintos de ausencia de valor:\n\n- **`undefined`**: Indica que una variable ha sido declarada pero a\u00fan no se le ha asignado valor, que una propiedad de un objeto no existe, o que un argumento opcional de una funci\u00f3n no fue suministrado.\n- **`null`**: Es un valor asignado expl\u00edcitamente para denotar la ausencia intencional de un objeto o dato.\n\nCon la bandera **`strictNullChecks: true`** (activada por defecto en el modo `strict`), `null` y `undefined` dejan de ser asignables a todos los dem\u00e1s tipos y requieren ser manejados expl\u00edcitamente mediante uniones (`string | null`), operadores de encadenamiento opcional (`?.`) o el operador de coalescencia nula (`??`).",
      codeExample: {
        language: "typescript",
        code: "// Con \"strictNullChecks\": true\ninterface UserAccount {\n  id: string;\n  nickname?: string;        // Tipo: string | undefined\n  deletedAt: Date | null;    // Ausencia intencional expl\u00edcita\n}\n\nconst user: UserAccount = {\n  id: \"usr_102\",\n  deletedAt: null // Indica expl\u00edcitamente que la cuenta NO est\u00e1 eliminada\n};\n\n// Acceso seguro defensivo:\nconst nickLength = user.nickname?.length; // number | undefined\nconst displayName = user.nickname ?? \"Usuario An\u00f3nimo\"; // Coalescencia nula\n\n// Asignaci\u00f3n estricta:\n// let email: string = null; // \u274c Error TS2322: Type 'null' is not assignable to type 'string'."
      },
      visualDiagram: {
        id: "diag-ts-06",
        title: "Gesti\u00f3n Estricta: undefined vs null y strictNullChecks",
        caption: "Diferenciaci\u00f3n sem\u00e1ntica y operadores de acceso seguro (?. y ??) bajo comprobaci\u00f3n estricta de nulos.",
        diagramType: "ts-null-vs-undefined-strict"
      },
      interviewTips: {
        whatInterviewersWant: "Que demuestres comprensi\u00f3n de `strictNullChecks`, la sem\u00e1ntica entre no inicializado (`undefined`) y vaciado intencional (`null`), y el uso de `?.` y `??`.",
        commonPitfalls: ["Usar el operador `||` en vez de `??`, provocando bugs con valores falsy leg\u00edtimos como `0` o `\"\"`.", "Desactivar `strictNullChecks`, reintroduciendo 'el error del bill\u00f3n de d\u00f3lares' de referencias nulas no detectadas.", "Usar aserciones no nulas compulsivas (`!`) para evadir el type-checker en lugar de manejar la condici\u00f3n."]
      },
      quiz: {
        question: "Con 'strictNullChecks: true', \u00bfse puede asignar 'null' a una variable de tipo 'string'?",
        options: ["No, generar\u00e1 un error de compilaci\u00f3n salvo que se declare expl\u00edcitamente como 'string | null'.", "S\u00ed, porque 'null' es un subtipo universal de todos los tipos primitivos.", "S\u00ed, pero emitir\u00e1 un aviso (warning) en la consola del navegador.", "Solo si la variable se define con la palabra clave 'var'."],
        correctIndex: 0,
        explanation: "Al activar 'strictNullChecks', 'null' y 'undefined' forman sus propios tipos independientes y no se pueden asignar a otros tipos a menos que se incluyan expl\u00edcitamente en una uni\u00f3n."
      }
    },
    {
      id: "ts-07",
      title: "\u00bfQu\u00e9 diferencia hay entre interface y type?",
      level: "medio",
      tags: ["interface", "type-alias", "Declaration-Merging", "Unions", "Architecture"],
      response: "Tanto `interface` como `type` (alias de tipo) sirven para definir la estructura de datos en TypeScript, pero difieren en capacidades t\u00e9cnicas y casos de uso arquitect\u00f3nico:\n\n1. **`interface` (Contrato abierto)**:\n   - Admite **Declaration Merging** (m\u00faltiples declaraciones se fusionan).\n   - Se extiende de manera limpia mediante la palabra clave `extends`.\n   - Mejor rendimiento de compilaci\u00f3n porque el compilador almacena en cach\u00e9 las relaciones de interfaces mediante identificadores nominales internos.\n   - Limitada \u00fanicamente a modelar la forma de objetos y clases.\n\n2. **`type` (Composici\u00f3n cerrada)**:\n   - Permite definir **uniones** (`type ID = string | number`), intersecciones complejas, primitivos, tuplas y tipos mapeados o condicionales.\n   - No permite Declaration Merging (declarar dos veces el mismo `type` provoca error de compilaci\u00f3n).\n   - Utiliza la sintaxis de intersecci\u00f3n `&` para componer estructuras.",
      codeExample: {
        language: "typescript",
        code: "// 1. Caso exclusivo para 'type': Uniones, tuplas y primitivos\ntype Status = \"pending\" | \"fulfilled\" | \"rejected\";\ntype Coordinate = [x: number, y: number];\ntype PrimitiveValue = string | number | boolean;\n\n// 2. Composici\u00f3n con 'type' (&) vs 'interface' (extends)\ntype BaseEntity = { id: string; createdAt: number };\ntype ProductType = BaseEntity & { title: string; price: number };\n\ninterface Entity {\n  id: string;\n  createdAt: number;\n}\ninterface ProductInterface extends Entity {\n  title: string;\n  price: number;\n}\n\n// 3. Regla Enterprise:\n// - Usa 'interface' para props de componentes, contratos de APIs y clases.\n// - Usa 'type' para uniones de estado, utilidades y tipos transformados."
      },
      visualDiagram: {
        id: "diag-ts-07",
        title: "Comparativa Arquitect\u00f3nica: interface vs type alias",
        caption: "Las interfaces ofrecen contratos extensibles y declaration merging; los types permiten uniones, primitivos y transformaciones avanzadas.",
        diagramType: "ts-interface-vs-type-comparison"
      },
      interviewTips: {
        whatInterviewersWant: "Pregunta cl\u00e1sica de Staff/Senior. Quieren escuchar las diferencias reales (Declaration Merging, soporte de uniones directas, rendimiento de cach\u00e9 del compilador) y cu\u00e1ndo elegir cada uno.",
        commonPitfalls: ["Decir 'son pr\u00e1cticamente lo mismo y es cuesti\u00f3n de gusto personal' sin argumentar las diferencias t\u00e9cnicas.", "Desconocer que los types no soportan Declaration Merging.", "No saber que las uniones `type A = B | C` son imposibles de modelar directamente con interfaces."]
      },
      quiz: {
        question: "\u00bfCu\u00e1l de las siguientes operaciones es EXCLUSIVA de 'type' y no puede realizarse con 'interface'?",
        options: ["Declarar una uni\u00f3n directa de tipos: type ID = string | number | bigint.", "Extender m\u00faltiples estructuras base.", "Definir propiedades opcionales o de solo lectura.", "Ser implementado por una clase mediante la palabra reservada 'implements'."],
        correctIndex: 0,
        explanation: "Las interfaces solo pueden definir formas de objetos o funciones; no pueden representar uniones directas de tipos primitivos (A | B), lo cual es competencia exclusiva de los type aliases."
      }
    },
    {
      id: "ts-08",
      title: "\u00bfQu\u00e9 son los tipos gen\u00e9ricos?",
      level: "medio",
      tags: ["Generics", "Type-Parameters", "Constraints", "Reusability", "extends"],
      response: "Los gen\u00e9ricos son par\u00e1metros de tipo (representados convencionalmente como `<T>`, `<K>`, `<V>`) que permiten escribir componentes, funciones, interfaces y clases reutilizables y type-safe que operan sobre una variedad de tipos en lugar de uno solo, preservando la informaci\u00f3n exacta del tipo en todo momento.\n\nEn lugar de usar `any` (que pierde la informaci\u00f3n de tipos), un gen\u00e9rico captura el tipo del argumento suministrado y lo propaga a los valores de retorno y estructuras dependientes. Los gen\u00e9ricos soportan:\n- **Restricciones (Constraints)**: Con la cl\u00e1usula `<T extends Constraint>`, limitando los tipos aceptados a aquellos que satisfacen un contrato.\n- **Valores por defecto**: `<T = string>`.\n- **M\u00faltiples par\u00e1metros vinculados**: `<T, K extends keyof T>`.",
      codeExample: {
        language: "typescript",
        code: "// Interface gen\u00e9rica para respuestas paginadas de backend\ninterface PaginatedResponse<TData> {\n  data: TData[];\n  page: number;\n  total: number;\n  hasMore: boolean;\n}\n\n// Funci\u00f3n gen\u00e9rica con restricci\u00f3n (Constraint)\nfunction findById<T extends { id: string | number }>(items: T[], targetId: T[\"id\"]): T | undefined {\n  return items.find((item) => item.id === targetId);\n}\n\n// Inferencia autom\u00e1tica de T sin casting:\ninterface Customer {\n  id: string;\n  name: string;\n  tier: \"gold\" | \"silver\";\n}\n\nconst customers: Customer[] = [\n  { id: \"c_1\", name: \"Carlos\", tier: \"gold\" },\n  { id: \"c_2\", name: \"Sof\u00eda\", tier: \"silver\" }\n];\n\nconst customer = findById(customers, \"c_1\"); // customer es de tipo Customer | undefined (Type-Safe!)"
      },
      visualDiagram: {
        id: "diag-ts-08",
        title: "Flujo de Par\u00e1metros de Tipo en Gen\u00e9ricos",
        caption: "Sustituci\u00f3n din\u00e1mica de par\u00e1metros <T> conservando la exactitud de tipos en retornos y estructuras internas sin casteo forzado.",
        diagramType: "ts-generics-type-parameter"
      },
      interviewTips: {
        whatInterviewersWant: "Capacidad para dise\u00f1ar APIs flexibles y robustas. Demostrar el uso de restricciones (`T extends ...`) y evitar gen\u00e9ricos innecesarios cuando no existe correlaci\u00f3n de tipos.",
        commonPitfalls: ["Usar gen\u00e9ricos superfluos donde un tipo concreto o uni\u00f3n bastar\u00eda (ej. `function log<T>(msg: T)` sin reutilizar T).", "No aplicar `extends` para restringir propiedades requeridas (`T.length` sin `T extends { length: number }`).", "Caer en anidaciones gen\u00e9ricas incomprensibles que perjudican la legibilidad del equipo."]
      },
      quiz: {
        question: "\u00bfQu\u00e9 utilidad tiene la sintaxis '<T extends { id: string }>' en una funci\u00f3n gen\u00e9rica?",
        options: ["Restringe el gen\u00e9rico T exigiendo que contenga obligatoriamente al menos una propiedad 'id' de tipo string.", "Convierte autom\u00e1ticamente cualquier objeto pasado para que tenga una propiedad 'id'.", "Hace que la funci\u00f3n devuelva siempre un string.", "Extiende una clase nativa de JavaScript en tiempo de ejecuci\u00f3n."],
        correctIndex: 0,
        explanation: "Es una restricci\u00f3n de gen\u00e9rico (Generic Constraint): garantiza al compilador que cualquier tipo suministrado como T posee al menos la estructura requerida, permitiendo acceder a 'item.id' con total seguridad."
      }
    },
    {
      id: "ts-09",
      title: "\u00bfQu\u00e9 es la inferencia de tipos en TypeScript?",
      level: "medio",
      tags: ["Inference", "Control-Flow-Analysis", "Contextual-Typing", "Narrowing", "Compiler"],
      response: "La inferencia de tipos es la habilidad del compilador de TypeScript para deducir autom\u00e1ticamente el tipo de una expresi\u00f3n, variable, par\u00e1metro o valor de retorno sin necesidad de anotaciones expl\u00edcitas por parte del desarrollador. El compilador analiza el valor inicial asignado (Best Common Type) o el contexto en el que se ejecuta el c\u00f3digo (Contextual Typing).\n\nUn pilar clave de la inferencia moderna es el **An\u00e1lisis de Flujo de Control (Control Flow Analysis - CFA)**: a medida que el c\u00f3digo atraviesa bifurcaciones condicionales (`if`, `switch`, guardas de tipo), el compilador estrecha din\u00e1micamente el tipo de la variable en cada rama del \u00e1rbol de ejecuci\u00f3n, sabiendo exactamente qu\u00e9 m\u00e9todos son seguros de invocar en cada l\u00ednea.",
      codeExample: {
        language: "typescript",
        code: "// 1. Inferencia directa por asignaci\u00f3n\nconst score = 100; // Infiere literal: 100\nlet active = false; // Infiere boolean\n\n// 2. Contextual Typing en callbacks\nconst names = [\"Ana\", \"Mateo\", \"Luc\u00eda\"];\n// 'name' se infiere autom\u00e1ticamente como string; 'i' como number:\nnames.forEach((name, i) => {\n  console.log(`${i}: ${name.toUpperCase()}`);\n});\n\n// 3. Control Flow Analysis (CFA) estrechando uniones:\nfunction formatValue(input: string | number | Date): string {\n  if (typeof input === \"string\") {\n    return input.trim().toLowerCase(); // input es string\n  }\n  if (typeof input === \"number\") {\n    return input.toFixed(2); // input es number\n  }\n  return input.toISOString(); // input es Date\n}"
      },
      visualDiagram: {
        id: "diag-ts-09",
        title: "Control Flow Analysis e Inferencia Contextual",
        caption: "El compilador rastrea las ramas de control l\u00f3gicas para estrechar tipos de forma autom\u00e1tica y segura en tiempo real.",
        diagramType: "ts-type-inference-control-flow"
      },
      interviewTips: {
        whatInterviewersWant: "Saber si entiendes cu\u00e1ndo confiar en la inferencia frente a cu\u00e1ndo anotar expl\u00edcitamente (sobre-anotar todo es un code-smell junior que a\u00f1ade ruido visual).",
        commonPitfalls: ["Anotar redundancias obvias como `const x: number = 5` o `const s: string = 'hello'`. ", "No anotar los retornos de funciones de APIs p\u00fablicas cr\u00edticas (lo que previene roturas accidentales de contrato).", "Desconocer que arrays vac\u00edos sin inicializar infieren `any[]` si no se tipan."]
      },
      quiz: {
        question: "\u00bfQu\u00e9 es el 'Contextual Typing' en TypeScript?",
        options: ["Cuando el tipo de una expresi\u00f3n es deducido a partir de la posici\u00f3n o contexto en el que se encuentra (ej. par\u00e1metros de un callback).", "Cuando se utilizan variables globales del navegador como window o document.", "Cuando se importa un m\u00f3dulo mediante sintaxis dynamic import().", "Una funci\u00f3n exclusiva de TypeScript que traduce tipos a metadatos de runtime."],
        correctIndex: 0,
        explanation: "El Contextual Typing ocurre cuando el compilador deduce el tipo bas\u00e1ndose en el lugar donde ocurre la expresi\u00f3n, como en las funciones an\u00f3nimas pasadas a array.map(), donde los tipos de los argumentos se infieren del array fuente."
      }
    },
    {
      id: "ts-10",
      title: "Explica Partial<T>, Required<T> y Pick<T, K>.",
      level: "medio",
      tags: ["Utility-Types", "Partial", "Required", "Pick", "Omit", "Transformations"],
      response: "Los Utility Types son tipos gen\u00e9ricos predefinidos en TypeScript que facilitan transformaciones comunes de contratos sin duplicar c\u00f3digo:\n\n1. **`Partial<T>`**: Hace que todas las propiedades del tipo `T` sean opcionales (`?`). Es ideal para representar objetos de actualizaci\u00f3n (payloads de mutaciones HTTP PATCH o formularios de edici\u00f3n parcial).\n2. **`Required<T>`**: Realiza la operaci\u00f3n inversa a `Partial`: elimina todos los modificadores opcionales (`-?`), exigiendo que el 100% de las propiedades est\u00e9n presentes.\n3. **`Pick<T, K>`**: Construye un nuevo tipo seleccionando exclusivamente el conjunto de claves `K` (donde `K extends keyof T`) del tipo `T`.\n4. **`Omit<T, K>`**: Complementario a `Pick`: construye un tipo con todas las propiedades de `T` excepto aquellas especificadas en `K`.",
      codeExample: {
        language: "typescript",
        code: "interface User {\n  id: string;\n  name: string;\n  email: string;\n  avatarUrl?: string;\n  bio?: string;\n}\n\n// 1. Partial: Para payloads de actualizaci\u00f3n parcial (PATCH)\ntype UpdateUserDto = Partial<User>;\nfunction updateUser(id: string, patch: UpdateUserDto): void {\n  // patch puede recibir solo { name: \"Nuevo\" } o { bio: \"Hola\" }\n}\n\n// 2. Required: Exige que incluso las props opcionales est\u00e9n presentes\ntype CompleteUser = Required<User>; // avatarUrl y bio son obligatorias\n\n// 3. Pick: Extrae solo los campos p\u00fablicos para la vista\ntype PublicUserPreview = Pick<User, \"id\" | \"name\" | \"avatarUrl\">;\n\n// 4. Omit: Excluye campos sensibles o autom\u00e1ticos\ntype CreateUserPayload = Omit<User, \"id\">;"
      },
      visualDiagram: {
        id: "diag-ts-10",
        title: "Matriz de Transformaci\u00f3n con Utility Types",
        caption: "Transformaciones declarativas de estructuras base mediante Partial, Required, Pick y Omit.",
        diagramType: "ts-utility-types-transform"
      },
      interviewTips: {
        whatInterviewersWant: "Que demuestres agilidad en el modelado de datos en arquitecturas limpias, evitando la duplicaci\u00f3n de interfaces para DTOs de creaci\u00f3n, actualizaci\u00f3n y consulta.",
        commonPitfalls: ["Duplicar manualmente modelos enteros para crear DTOs de creaci\u00f3n y actualizaci\u00f3n.", "Confundir `Pick` (seleccionar) con `Omit` (descartar).", "Olvidar que `Partial<T>` es 'shallow' por defecto (no hace opcionales los objetos anidados)."]
      },
      quiz: {
        question: "\u00bfC\u00f3mo est\u00e1 implementado internamente el tipo 'Partial<T>' en TypeScript?",
        options: ["type Partial<T> = { [P in keyof T]?: T[P]; };", "type Partial<T> = T extends object ? any : T;", "type Partial<T> = { [P in T]: undefined; };", "type Partial<T> = Object.freeze(T);"],
        correctIndex: 0,
        explanation: "Partial<T> se implementa como un Mapped Type que itera sobre todas las claves de T ('P in keyof T') y les a\u00f1ade el modificador opcional '?' a cada propiedad."
      }
    },
    {
      id: "ts-11",
      title: "\u00bfC\u00f3mo funciona Readonly<T> y cu\u00e1ndo se usa?",
      level: "medio",
      tags: ["Readonly", "Immutability", "ReadonlyArray", "DeepReadonly", "State-Management"],
      response: "`Readonly<T>` es un utility type que transforma todas las propiedades de un tipo `T` marc\u00e1ndolas con el modificador `readonly`. Esto proh\u00edbe cualquier reasignaci\u00f3n de sus miembros tras la inicializaci\u00f3n, levantando el error `TS2540: Cannot assign to 'x' because it is a read-only property` en tiempo de compilaci\u00f3n.\n\nSe utiliza intensivamente en arquitecturas de estado inmutable (como reducers de Redux, stores de Zustand, o props de componentes React) para garantizar que las mutaciones directas accidentales sean bloqueadas por el compilador. Tambi\u00e9n existen equivalentes como `ReadonlyArray<T>` (o `readonly T[]`), que inhabilita m\u00e9todos mutables de arrays como `.push()`, `.pop()` o `.splice()`.\n\n**Advertencia t\u00e9cnica**: `Readonly<T>` es superficial (shallow). Si un objeto contiene propiedades que a su vez son objetos anidados, dichos objetos hijos permanecen mutables a menos que se aplique un tipo recursivo como `DeepReadonly<T>`.",
      codeExample: {
        language: "typescript",
        code: "interface AppState {\n  version: string;\n  features: string[];\n  theme: { mode: \"dark\" | \"light\" };\n}\n\n// Estado completamente protegido contra mutaciones accidentales\ntype ImmutableState = Readonly<AppState>;\n\nconst state: ImmutableState = {\n  version: \"2.4.0\",\n  features: [\"auth\", \"dashboard\"],\n  theme: { mode: \"dark\" }\n};\n\n// state.version = \"3.0.0\"; // \u274c Error TS2540: Read-only property\n\n// Shallow vs Deep caveat:\n// state.theme.mode = \"light\"; // \u26a0\ufe0f Permitido porque Readonly es shallow!\n\n// Arrays inmutables para pipelines funcionales:\nconst readOnlyList: readonly number[] = [1, 2, 3];\n// readOnlyList.push(4); // \u274c Error TS2339: Property 'push' does not exist on type 'readonly number[]'."
      },
      visualDiagram: {
        id: "diag-ts-11",
        title: "Inmutabilidad Est\u00e1tica con Readonly y Restricci\u00f3n de Mutaci\u00f3n",
        caption: "Readonly bloquea la reasignaci\u00f3n de propiedades en tiempo de compilaci\u00f3n protegiendo la inmutabilidad del estado.",
        diagramType: "ts-readonly-immutability"
      },
      interviewTips: {
        whatInterviewersWant: "Entender si distingues entre inmutabilidad en tiempo de compilaci\u00f3n (`readonly`) e inmutabilidad en runtime (`Object.freeze()`), y si eres consciente del comportamiento shallow por defecto.",
        commonPitfalls: ["Asumir que `readonly` congela el objeto en tiempo de ejecuci\u00f3n (no emite ning\u00fan c\u00f3digo de runtime).", "Ignorar que los objetos anidados dentro de `Readonly<T>` siguen siendo mutables.", "No saber c\u00f3mo hacer un array de solo lectura con `readonly T[]`."]
      },
      quiz: {
        question: "\u00bfQu\u00e9 efecto tiene 'Readonly<T>' sobre las propiedades de objetos anidados de segundo nivel?",
        options: ["Ninguno: Readonly<T> es superficial (shallow) y solo afecta a las propiedades directas de primer nivel.", "Las congela recursivamente en memoria mediante Object.freeze.", "Genera un error de compilaci\u00f3n indicando que no soporta anidaci\u00f3n.", "Convierte todas las propiedades anidadas en unknown."],
        correctIndex: 0,
        explanation: "Por defecto, Readonly<T> es shallow. Para proteger propiedades profundamente anidadas se debe implementar un tipo utilitario recursivo (DeepReadonly)."
      }
    },
    {
      id: "ts-12",
      title: "\u00bfQu\u00e9 son los enums en TypeScript?",
      level: "medio",
      tags: ["Enums", "Numeric-Enums", "String-Enums", "Const-Enums", "as-const"],
      response: "Los `enums` permiten definir un conjunto de constantes nombradas. TypeScript soporta:\n1. **Enums num\u00e9ricos** (auto-incrementales desde 0): Emiten un objeto JavaScript en runtime con mapeo inverso (`Status[Status[\"Active\"] = 0] = \"Active\"`).\n2. **Enums de cadenas** (`enum Status { Active = \"ACTIVE\" }`): No admiten mapeo inverso pero son legibles en depuraci\u00f3n.\n3. **`const enum`**: El compilador elimina el objeto en runtime y sustituye las referencias directamente por sus valores literales en l\u00ednea (inlining).\n\n**El est\u00e1ndar moderno de la industria**: La mayor\u00eda de equipos enterprise y el propio manual de TypeScript recomiendan sustituir los `enums` por **objetos congelados con `as const`** (`const Status = { ... } as const`), ya que los enums son una de las pocas caracter\u00edsticas que emiten c\u00f3digo JavaScript propio que rompe la regla de TypeScript de limitarse a a\u00f1adir tipos, generan problemas con bundlers que procesan archivos de forma aislada (`isolatedModules`) y los enums num\u00e9ricos carecen de type safety estricto.",
      codeExample: {
        language: "typescript",
        code: "// 1. Enum tradicional (Emite IIFE con reverse-mapping en JS)\nenum LogLevel {\n  Debug = \"DEBUG\",\n  Info = \"INFO\",\n  Error = \"ERROR\"\n}\n\n// 2. Alternativa recomendada en TypeScript Enterprise:\nconst LOG_LEVELS = {\n  Debug: \"DEBUG\",\n  Info: \"INFO\",\n  Error: \"ERROR\"\n} as const;\n\n// Extracci\u00f3n autom\u00e1tica del tipo uni\u00f3n:\ntype LogLevelType = (typeof LOG_LEVELS)[keyof typeof LOG_LEVELS]; // \"DEBUG\" | \"INFO\" | \"ERROR\"\n\nfunction logMessage(level: LogLevelType, message: string): void {\n  console.log(`[${level}] ${message}`);\n}\n\nlogMessage(LOG_LEVELS.Info, \"Conexi\u00f3n establecida\"); // \u2705 100% Type-safe y 0 runtime JS raro"
      },
      visualDiagram: {
        id: "diag-ts-12",
        title: "Comparativa: Enums tradicionales vs Objeto 'as const'",
        caption: "Los enums generan c\u00f3digo IIFE en runtime; 'as const' preserva JavaScript idiom\u00e1tico y total compatibilidad con bundlers modernos.",
        diagramType: "ts-enums-vs-const-objects"
      },
      interviewTips: {
        whatInterviewersWant: "Saber si conoces las trampas de los enums num\u00e9ricos y por qu\u00e9 el ecosistema moderno (Vite, esbuild, Babel) prefiere objetos `as const` con uniones extra\u00eddas.",
        commonPitfalls: ["No saber que `const enum` falla catastr\u00f3ficamente con `--isolatedModules` si no se compila con tsc puro.", "Desconocer el mapeo inverso que a\u00f1ade peso innecesario al bundle en los enums num\u00e9ricos.", "Confiar ciegamente en enums num\u00e9ricos donde un valor num\u00e9rico cualquiera puede ser asignado sin que TS proteste."]
      },
      quiz: {
        question: "\u00bfPor qu\u00e9 muchas empresas prefieren 'const Roles = { Admin: \"ADMIN\" } as const' sobre 'enum Roles'?",
        options: ["Porque no emite c\u00f3digo runtime propietario, funciona con cualquier bundler (--isolatedModules) y es 100% JS est\u00e1ndar.", "Porque los enums fueron marcados como obsoletos (deprecated) en TypeScript 4.0.", "Porque 'as const' se ejecuta m\u00e1s r\u00e1pido en el motor V8 de Chrome.", "Porque los enums no permiten autocompletado en Visual Studio Code."],
        correctIndex: 0,
        explanation: "Los objetos con 'as const' son puro JavaScript est\u00e1ndar sin necesidad de emisiones de c\u00f3digo propietarias de TypeScript, haci\u00e9ndolos inmunes a problemas con bundlers r\u00e1pidos como esbuild, SWC o Vite con isolatedModules."
      }
    },
    {
      id: "ts-13",
      title: "\u00bfQu\u00e9 son los tipos condicionales?",
      level: "avanzado",
      tags: ["Conditional-Types", "Ternary", "Distributive", "Exclude", "Extract"],
      response: "Los tipos condicionales en TypeScript introducen l\u00f3gica ternaria a nivel de tipos (`T extends U ? X : Y`). Permiten que el tipo resultante dependa din\u00e1micamente de una relaci\u00f3n de subtipado evaluada por el compilador.\n\nUna caracter\u00edstica fundamental de los tipos condicionales es su **comportamiento distributivo sobre uniones** (Distributive Conditional Types): cuando se aplican sobre un par\u00e1metro de tipo desnudo (naked type parameter) que resulta ser una uni\u00f3n (`A | B`), la condici\u00f3n se distribuye autom\u00e1ticamente sobre cada miembro de la uni\u00f3n:\n`Condition<A | B>` equivale a `Condition<A> | Condition<B>`.\n\nEste mecanismo es el fundamento sobre el que se construyen utilidades esenciales del core como `Exclude<T, U>`, `Extract<T, U>` y `NonNullable<T>`.",
      codeExample: {
        language: "typescript",
        code: "// Tipo condicional b\u00e1sico:\ntype IsString<T> = T extends string ? true : false;\ntype A = IsString<\"hola\">; // true\ntype B = IsString<42>;     // false\n\n// Recreaci\u00f3n de la utilidad nativa Exclude usando distributividad y 'never':\ntype MyExclude<T, U> = T extends U ? never : T;\n\n// Se eval\u00faa miembro a miembro:\n// (\"admin\" extends \"guest\" ? never : \"admin\") | (\"user\" extends \"guest\" ? never : \"user\") | (\"guest\" extends \"guest\" ? never : \"guest\")\ntype AppRole = MyExclude<\"admin\" | \"user\" | \"guest\", \"guest\">; // \"admin\" | \"user\"\n\n// Evitar distributividad agrupando en tuplas [T]:\ntype NonDistributive<T> = [T] extends [string | number] ? true : false;"
      },
      visualDiagram: {
        id: "diag-ts-13",
        title: "Evaluaci\u00f3n y Distributividad de Tipos Condicionales",
        caption: "La expresi\u00f3n ternaria T extends U ? X : Y se bifurca y distribuye sobre cada miembro de una uni\u00f3n, filtrando mediante never.",
        diagramType: "ts-conditional-types-ternary"
      },
      interviewTips: {
        whatInterviewersWant: "Quieren que expliques la regla de distributividad sobre uniones y c\u00f3mo la combinaci\u00f3n con el tipo `never` permite filtrar elementos en el sistema de tipos.",
        commonPitfalls: ["Olvidar que las uniones se distribuyen autom\u00e1ticamente si el gen\u00e9rico no est\u00e1 envuelto en corchetes `[T] extends [U]`.", "No comprender por qu\u00e9 `never` desaparece de las uniones (`string | never` se simplifica a `string`).", "Crear condicionales profundamente anidados que colapsen el rendimiento del compilador (TS2589)."]
      },
      quiz: {
        question: "\u00bfQu\u00e9 resultado produce 'type Res = (\"a\" | \"b\" | \"c\") extends \"b\" ? true : false' en un tipo condicional distributivo gen\u00e9rico?",
        options: ["Una uni\u00f3n de los resultados evaluados para cada miembro: false | true.", "false, porque la uni\u00f3n completa no es id\u00e9ntica a 'b'.", "true, porque 'b' est\u00e1 contenido dentro de la uni\u00f3n.", "never."],
        correctIndex: 0,
        explanation: "Al ser distributivo sobre un par\u00e1metro gen\u00e9rico, la condici\u00f3n eval\u00faa 'a' (false), 'b' (true) y 'c' (false), unificando el resultado en la uni\u00f3n 'true | false' (boolean)."
      }
    },
    {
      id: "ts-14",
      title: "\u00bfQu\u00e9 son los mapped types?",
      level: "avanzado",
      tags: ["Mapped-Types", "keyof", "Modifiers", "Key-Remapping", "as"],
      response: "Los Mapped Types permiten crear nuevos tipos transformando sistem\u00e1ticamente las propiedades de un tipo existente mediante iteraci\u00f3n. Utilizan la sintaxis basada en listas de claves `[K in keyof T]`, an\u00e1loga a un bucle `for...in` en el espacio de tipos.\n\nSoportan:\n1. **Modificadores de acceso**: Con los prefijos `+` o `-` para a\u00f1adir o remover `readonly` y opcionalidad `?` (ej. `-readonly` o `-?`).\n2. **Remapeo de claves con `as` (Key Remapping, TS 4.1+)**: Permite filtrar claves (asignando a `never`) o transformar sus nombres utilizando tipos literales de plantilla (como prefijar con `get${Capitalize<K>}`).\n\nSon el mecanismo fundamental con el que est\u00e1n construidos `Partial`, `Required`, `Readonly` y `Record` en la librer\u00eda est\u00e1ndar de TypeScript.",
      codeExample: {
        language: "typescript",
        code: "interface UserEvents {\n  login: { timestamp: number };\n  logout: { reason: string };\n  purchase: { amount: number; itemId: string };\n}\n\n// 1. Mapped type con transformaci\u00f3n de valor\ntype EventPayloads<T> = {\n  readonly [K in keyof T]: (payload: T[K]) => void;\n};\n\n// 2. Key Remapping con 'as' para crear API de suscripci\u00f3n de eventos:\ntype EventBus<T> = {\n  [K in keyof T as `on${Capitalize<string & K>}`]: (handler: (data: T[K]) => void) => void;\n};\n\n// Genera autom\u00e1ticamente:\n// {\n//   onLogin: (handler: (data: { timestamp: number }) => void) => void;\n//   onLogout: (handler: (data: { reason: string }) => void) => void;\n//   onPurchase: (handler: (data: { amount: number; itemId: string }) => void) => void;\n// }\ntype MyBus = EventBus<UserEvents>;"
      },
      visualDiagram: {
        id: "diag-ts-14",
        title: "Mec\u00e1nica de Iteraci\u00f3n y Remapeo en Mapped Types",
        caption: "Iteraci\u00f3n [K in keyof T], control de modificadores (+/-) y transformaci\u00f3n de nombres de claves mediante la cl\u00e1usula 'as'.",
        diagramType: "ts-mapped-types-iteration"
      },
      interviewTips: {
        whatInterviewersWant: "Capacidad para crear abstracciones de tipos avanzadas sin duplicidad. Quieren escuchar sobre la cl\u00e1usula `as` (Key Remapping) y los modificadores `+` y `-`.",
        commonPitfalls: ["Desconocer que se pueden eliminar signos de interrogaci\u00f3n con `-?` para forzar requeridos.", "Olvidar limitar la clave a string (`string & K`) al usar `Capitalize` en el remapeo de claves.", "Intentar aplicar mapped types directamente dentro de una declaraci\u00f3n `interface` (solo se permiten en `type`)."]
      },
      quiz: {
        question: "\u00bfQu\u00e9 efecto tiene el modificador '-?' en la declaraci\u00f3n de un Mapped Type '{ [K in keyof T]-?: T[K] }'?",
        options: ["Elimina la opcionalidad de todas las propiedades, obligando a que sean 100% requeridas.", "Convierte todas las propiedades en tipos null o undefined.", "Elimina las propiedades privadas de la interfaz.", "Invierte el orden de las propiedades en el objeto resultante."],
        correctIndex: 0,
        explanation: "El operador '-?' elimina expl\u00edcitamente el modificador opcional '?' de cada propiedad iterada, transformando un objeto de propiedades opcionales en uno donde todas son obligatorias (as\u00ed funciona Required<T>)."
      }
    },
    {
      id: "ts-15",
      title: "\u00bfC\u00f3mo funciona keyof y typeof en combinaci\u00f3n?",
      level: "avanzado",
      tags: ["keyof", "typeof", "Value-Space", "Type-Space", "Single-Source-of-Truth"],
      response: "La combinaci\u00f3n `keyof typeof` es uno de los patrones arquitect\u00f3nicos m\u00e1s poderosos de TypeScript para enlazar el **Espacio de Valores (JavaScript runtime)** con el **Espacio de Tipos (TypeScript compile-time)**, creando una '\u00danica Fuente de Verdad' (Single Source of Truth):\n\n1. **`typeof variable`**: Cuando se utiliza en una posici\u00f3n de tipo, extrae la firma o estructura est\u00e1tica completa de un objeto o variable de JavaScript existente.\n2. **`keyof Type`**: Extrae una uni\u00f3n con todos los nombres de las propiedades (claves) de dicho tipo.\n\nAl combinarlos (`keyof typeof config`), se obtiene una uni\u00f3n de literales correspondiente a las claves reales del objeto sin tener que mantener manualmente una interfaz duplicada. Si se modifica el objeto JS en el c\u00f3digo, los tipos dependientes se actualizan autom\u00e1ticamente en cascada.",
      codeExample: {
        language: "typescript",
        code: "// Objeto en JavaScript (Espacio de Valores / Runtime)\nconst UI_THEME = {\n  primary: \"#3b82f6\",\n  secondary: \"#64748b\",\n  success: \"#10b981\",\n  danger: \"#ef4444\"\n} as const;\n\n// 1. Extraer el tipo del objeto (Espacio de Tipos)\ntype ThemeConfig = typeof UI_THEME;\n\n// 2. Extraer la uni\u00f3n de las claves:\ntype ThemeVariant = keyof typeof UI_THEME; // \"primary\" | \"secondary\" | \"success\" | \"danger\"\n\n// 3. Extraer la uni\u00f3n de los valores:\ntype ThemeColor = (typeof UI_THEME)[ThemeVariant]; // \"#3b82f6\" | \"#64748b\" | ...\n\n// Uso en funci\u00f3n con autocompletado y validaci\u00f3n estricta:\nfunction getButtonColor(variant: ThemeVariant): ThemeColor {\n  return UI_THEME[variant];\n}"
      },
      visualDiagram: {
        id: "diag-ts-15",
        title: "Puente de Espacios: de Valores a Tipos con keyof typeof",
        caption: "typeof captura la estructura del objeto en runtime y keyof deriva la uni\u00f3n de claves garantizando sincronizaci\u00f3n continua.",
        diagramType: "ts-keyof-typeof-operator"
      },
      interviewTips: {
        whatInterviewersWant: "Ver si entiendes la frontera entre el Value Space y el Type Space, y si sabes utilizar este patr\u00f3n para evitar desincronizaciones entre constantes de configuraci\u00f3n y contratos de tipos.",
        commonPitfalls: ["Confundir el operador `typeof` de JavaScript en runtime con el operador `typeof` de TypeScript en el espacio de tipos.", "Olvidar `as const` en el objeto fuente, lo que provocar\u00eda que las propiedades infieran `string` en vez de sus valores literales exactos.", "Declarar tipos manuales paralelos que requieren ser actualizados cada vez que cambia el objeto de configuraci\u00f3n."]
      },
      quiz: {
        question: "Dado 'const config = { host: \"localhost\", port: 8080 };', \u00bfqu\u00e9 tipo genera 'keyof typeof config'?",
        options: ["\"host\" | \"port\"", "string | number", "Record<string, any>", "{ host: string; port: number; }"],
        correctIndex: 0,
        explanation: "typeof config extrae el tipo '{ host: string; port: number; }', y keyof extrae la uni\u00f3n de los nombres de sus propiedades: '\"host\" | \"port\"'."
      }
    },
    {
      id: "ts-16",
      title: "\u00bfQu\u00e9 son los type guards y c\u00f3mo se implementan?",
      level: "avanzado",
      tags: ["Type-Guards", "Type-Predicates", "is-operator", "Narrowing", "Discriminated-Unions"],
      response: "Un Type Guard es una expresi\u00f3n en tiempo de ejecuci\u00f3n que confirma el tipo espec\u00edfico de una variable dentro de un bloque de c\u00f3digo mediante comprobaci\u00f3n l\u00f3gica. Permite estrechar uniones amplias (`A | B | unknown`) a un subtipo concreto.\n\nTypeScript incluye mecanismos nativos:\n1. **`typeof variable === \"tipo\"`**: Para primitivos (`string`, `number`, `boolean`).\n2. **`variable instanceof Clase`**: Para instancias de clases y objetos del DOM.\n3. **`\"propiedad\" in objeto`**: Para comprobar la existencia de un campo.\n\nPara estructuras complejas de negocio, se implementan **User-Defined Type Guards** utilizando la sintaxis de predicado de tipo (`parametro is TipoDestino`). Si la funci\u00f3n retorna `true`, el compilador estrecha la variable al tipo indicado en el bloque condicional subsiguiente. Tambi\u00e9n existen **Assertion Functions** (`asserts valor is Tipo`), que lanzan excepciones si el tipo no coincide.",
      codeExample: {
        language: "typescript",
        code: "interface Admin {\n  id: string;\n  role: \"admin\";\n  permissions: string[];\n}\n\ninterface Member {\n  id: string;\n  role: \"member\";\n}\n\ntype AppUser = Admin | Member;\n\n// User-Defined Type Guard con Type Predicate (user is Admin)\nfunction isAdmin(user: AppUser): user is Admin {\n  return user.role === \"admin\" && Array.isArray((user as Admin).permissions);\n}\n\nfunction processUserAccess(user: AppUser): void {\n  if (isAdmin(user)) {\n    // TypeScript estrecha autom\u00e1ticamente 'user' a 'Admin':\n    console.log(\"Permisos:\", user.permissions.join(\", \"));\n  } else {\n    // TypeScript sabe con certeza que aqu\u00ed 'user' es 'Member':\n    console.log(\"Miembro est\u00e1ndar:\", user.id);\n  }\n}"
      },
      visualDiagram: {
        id: "diag-ts-16",
        title: "Arquitectura de Estrechamiento con Type Guards y Predicados",
        caption: "Guardas nativas (typeof, instanceof, in) y predicados definidos por el usuario (x is T) para estrechar tipos con certeza.",
        diagramType: "ts-type-guards-narrowing"
      },
      interviewTips: {
        whatInterviewersWant: "Comprobar si conoces la diferencia entre una funci\u00f3n que retorna un simple `boolean` y una funci\u00f3n con predicado de tipo `x is T`. El compilador solo estrecha con la segunda.",
        commonPitfalls: ["Retornar `boolean` en lugar de `x is MyType`, perdiendo el estrechamiento autom\u00e1tico del compilador.", "Hacer aserciones inseguras dentro del type guard sin validar las propiedades reales.", "Abusar de `(data as any)` en vez de implementar un type guard exhaustivo para validar entradas externas."]
      },
      quiz: {
        question: "\u00bfQu\u00e9 firma de retorno es indispensable para que una funci\u00f3n personalizada estreche un tipo en TypeScript?",
        options: ["parametro is TipoDestino (Predicado de Tipo)", "boolean", "TipoDestino | undefined", "asserts boolean"],
        correctIndex: 0,
        explanation: "La firma 'parametro is TipoDestino' le comunica expl\u00edcitamente al Type Checker que, si la funci\u00f3n retorna true en tiempo de ejecuci\u00f3n, el argumento puede considerarse con total seguridad de tipo TipoDestino."
      }
    },
    {
      id: "ts-17",
      title: "\u00bfQu\u00e9 son los template literal types?",
      level: "avanzado",
      tags: ["Template-Literals", "String-Manipulation", "Capitalize", "Cartesian-Product", "Type-Safety"],
      response: "Introducidos en TypeScript 4.1, los Template Literal Types se basan en la sintaxis de las plantillas literales de JavaScript (backticks) pero operan exclusivamente en el espacio de tipos. Permiten componer y transformar tipos de cadenas de texto de forma din\u00e1mica.\n\nPoseen dos capacidades clave:\n1. **Producto Cartesiano de Uniones**: Si interpolas m\u00faltiples uniones de strings dentro de un template literal type, TypeScript genera autom\u00e1ticamente todas las combinaciones posibles.\n2. **Utilidades Intr\u00ednsecas de Manipulaci\u00f3n**: Trabajan mano a mano con modificadores internos provistos por el compilador: `Uppercase<StringType>`, `Lowercase<StringType>`, `Capitalize<StringType>` y `Uncapitalize<StringType>`.\n\nSon ampliamente utilizados en librer\u00edas de enrutamiento (como Next.js o TanStack Router) y sistemas de dise\u00f1o para tipar combinaciones complejas como clases Tailwind o nombres de eventos.",
      codeExample: {
        language: "typescript",
        code: "// 1. Producto cartesiano para variantes de dise\u00f1o:\ntype Size = \"sm\" | \"md\" | \"lg\";\ntype Color = \"primary\" | \"danger\";\n\n// Genera 6 combinaciones literales: \"sm-primary\" | \"sm-danger\" | \"md-primary\" | ...\ntype ButtonVariant = `${Size}-${Color}`;\n\n// 2. Validaci\u00f3n estricta de rutas API con comodines:\ntype ApiRoute = `/api/v1/${string}`;\nconst validRoute: ApiRoute = \"/api/v1/users\"; // \u2705 V\u00e1lido\n// const badRoute: ApiRoute = \"/v2/users\"; // \u274c Error TS2322\n\n// 3. Generaci\u00f3n de nombres de eventos con Capitalize:\ntype Entity = \"user\" | \"order\";\ntype Action = \"created\" | \"deleted\";\ntype DomainEvent = `on${Capitalize<Entity>}${Capitalize<Action>}`;\n// Tipo resultante: \"onUserCreated\" | \"onUserDeleted\" | \"onOrderCreated\" | \"onOrderDeleted\" "
      },
      visualDiagram: {
        id: "diag-ts-17",
        title: "Composici\u00f3n de Cadenas y Producto Cartesiano de Tipos",
        caption: "S\u00edntesis de tipos literales mediante interpolaci\u00f3n cartesiana de uniones y utilidades intr\u00ednsecas de texto.",
        diagramType: "ts-template-literal-types"
      },
      interviewTips: {
        whatInterviewersWant: "Verificar si est\u00e1s al d\u00eda con las capacidades modernas de TypeScript (TS 4.1+) para tipar APIs de estilo CSS, eventos tipados o parsers de rutas sin incurrir en combinaciones manuales.",
        commonPitfalls: ["Crear productos cartesianos desmesurados (ej. interpolar 4 uniones de 10 elementos = 10,000 tipos literales) que degraden el rendimiento del compilador.", "Desconocer utilidades intr\u00ednsecas como `Capitalize` o `Uppercase`.", "Intentar aplicar operaciones complejas de expresiones regulares (regex) en template literal types donde no est\u00e1 soportado."]
      },
      quiz: {
        question: "\u00bfQu\u00e9 tipo resulta de la expresi\u00f3n: type Align = `${'top' | 'bottom'}-${'left' | 'right'}`?",
        options: ["\"top-left\" | \"top-right\" | \"bottom-left\" | \"bottom-right\"", "string", "[\"top\" | \"bottom\", \"left\" | \"right\"]", "\"top-bottom-left-right\""],
        correctIndex: 0,
        explanation: "Los Template Literal Types calculan el producto cartesiano de todas las combinaciones posibles de las uniones interpoladas, produciendo los 4 literales resultantes."
      }
    },
    {
      id: "ts-18",
      title: "Explica c\u00f3mo funcionan los decorators en TypeScript.",
      level: "avanzado",
      tags: ["Decorators", "TC39-Stage-3", "TS-5.0", "Class-Method-Context", "Metaprogramming"],
      response: "Los decoradores son funciones especiales que permiten a\u00f1adir metadatos, interceptar o modificar el comportamiento de clases, m\u00e9todos, accesores (getters/setters), campos y par\u00e1metros sin alterar la implementaci\u00f3n interna de la clase (patr\u00f3n Decorator / Programaci\u00f3n Orientada a Aspectos).\n\n**Evoluci\u00f3n cr\u00edtica en TypeScript 5.0**: En versiones anteriores, TypeScript depend\u00eda de los decoradores experimentales (`experimentalDecorators: true`, con la librer\u00eda `reflect-metadata`). Desde TypeScript 5.0, el soporte se aline\u00f3 con la especificaci\u00f3n oficial de **ECMAScript (TC39 Stage 3)**.\n\nEn el est\u00e1ndar moderno, los decoradores de m\u00e9todos reciben dos argumentos formales:\n1. El valor del elemento decorado (ej. la funci\u00f3n original del m\u00e9todo).\n2. Un objeto de contexto fuertemente tipado (`ClassMethodDecoratorContext`, etc.) que contiene metadatos sobre el miembro: su nombre, si es est\u00e1tico o privado, y m\u00e9todos auxiliares como `addInitializer`.",
      codeExample: {
        language: "typescript",
        code: "// Decorador est\u00e1ndar moderno TC39 Stage 3 (TS 5.0+)\nfunction loggedMethod<This, Args extends any[], Return>(\n  target: (this: This, ...args: Args) => Return,\n  context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return>\n) {\n  const methodName = String(context.name);\n\n  return function (this: This, ...args: Args): Return {\n    console.log(`[LOG] Invocando m\u00e9todo: ${methodName} con argumentos:`, args);\n    const start = performance.now();\n    const result = target.call(this, ...args);\n    console.log(`[LOG] Finalizado: ${methodName} (${(performance.now() - start).toFixed(2)}ms)`);\n    return result;\n  };\n}\n\nclass InvoiceService {\n  @loggedMethod\n  generateInvoice(clientName: string, amount: number): string {\n    return `Factura para ${clientName}: $${amount}`;\n  }\n}"
      },
      visualDiagram: {
        id: "diag-ts-18",
        title: "Pipeline de Ejecuci\u00f3n de Decoradores Modernos (TC39 Stage 3)",
        caption: "Interceptaci\u00f3n limpia de miembros de clase y acceso a metadatos tipados mediante context sin dependencias obsoletas.",
        diagramType: "ts-decorators-stage3-execution"
      },
      interviewTips: {
        whatInterviewersWant: "Comprobar si conoces la diferencia entre los decoradores legacy/experimentales (usados en Angular cl\u00e1sico o NestJS) y la especificaci\u00f3n nativa moderna de ECMAScript introducida en TS 5.0.",
        commonPitfalls: ["Asumir que se requiere activar `experimentalDecorators` y usar `reflect-metadata` para escribir decoradores en TS 5.0+.", "Confundir la firma moderna `(target, context)` con la firma legacy `(target, propertyKey, descriptor)`.", "Utilizar decoradores para l\u00f3gica de negocio en lugar de aspectos transversales (logging, telemetr\u00eda, caching)."]
      },
      quiz: {
        question: "En los decoradores de ECMAScript Stage 3 (TS 5.0+), \u00bfqu\u00e9 informaci\u00f3n aporta el segundo par\u00e1metro 'context'?",
        options: ["Metadatos sobre el miembro decorado (nombre, tipo de miembro, visibilidad est\u00e1tica/privada) y utilidades como addInitializer.", "El prototype completo de la clase y el descriptor de propiedad cl\u00e1sico de Object.defineProperty.", "Una referencia directa al Garbage Collector de V8.", "Un objeto JSON con los types transpilados a string."],
        correctIndex: 0,
        explanation: "En el est\u00e1ndar TC39 Stage 3 implementado en TypeScript 5.0, el argumento 'context' proporciona informaci\u00f3n fuertemente tipada sobre el elemento objetivo (nombre, kind: 'method' | 'getter' | etc., static, private) y ganchos de inicializaci\u00f3n."
      }
    },
    {
      id: "ts-19",
      title: "\u00bfC\u00f3mo funciona el operador infer en tipos condicionales?",
      level: "experto",
      tags: ["infer", "Pattern-Matching", "Conditional-Types", "ReturnType", "Awaited"],
      response: "La palabra clave `infer` se utiliza exclusivamente dentro de la cl\u00e1usula `extends` de un tipo condicional para **declarar una variable de tipo que ser\u00e1 deducida autom\u00e1ticamente** mediante coincidencia de patrones (Pattern Matching).\n\nEn lugar de comparar contra un tipo fijo, `infer R` le indica al compilador: 'si este tipo encaja con este patr\u00f3n estructural, captura la pieza interna y almac\u00e9nala en la variable `R`'. Si la condici\u00f3n se cumple, `R` est\u00e1 disponible para ser devuelto en la rama verdadera del ternario; si no encaja, se resuelve por la rama falsa (t\u00edpicamente `never` o `any`).\n\nEste mecanismo es el motor que permite a TypeScript 'desempaquetar' promesas (`Awaited<T>`), extraer los argumentos de una funci\u00f3n (`Parameters<T>`), extraer el retorno de una funci\u00f3n (`ReturnType<T>`) o los elementos de un array.",
      codeExample: {
        language: "typescript",
        code: "// 1. Recreaci\u00f3n de la utilidad oficial ReturnType<T>:\ntype MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never;\n\n// Ejemplo de extracci\u00f3n:\nfunction fetchUser() {\n  return { id: 10, name: \"Lucas\", verified: true };\n}\ntype UserPayload = MyReturnType<typeof fetchUser>; // { id: number; name: string; verified: boolean }\n\n// 2. Extractor recursivo de promesas (an\u00e1logo a Awaited<T>):\ntype UnwrapPromise<T> = T extends Promise<infer Inner> ? UnwrapPromise<Inner> : T;\n\ntype DeepResolved = UnwrapPromise<Promise<Promise<string>>>; // string!\n\n// 3. Extraer el tipo de elemento de un Array:\ntype ElementType<T> = T extends (infer E)[] ? E : T;\ntype Item = ElementType<string[]>; // string"
      },
      visualDiagram: {
        id: "diag-ts-19",
        title: "Pattern Matching y Extracci\u00f3n de Tipos con 'infer'",
        caption: "infer captura partes internas de firmas de funciones, promesas o arrays evaluadas en la rama verdadera del condicional.",
        diagramType: "ts-infer-pattern-matching"
      },
      interviewTips: {
        whatInterviewersWant: "Saber si comprendes el patr\u00f3n de 'desempaquetado' en tipos avanzados. Explica con claridad c\u00f3mo `infer R` vincula una variable temporal que extrae el tipo interno.",
        commonPitfalls: ["Intentar usar `infer` fuera de una expresi\u00f3n `extends` en un tipo condicional (provoca error de sintaxis).", "Intentar acceder a la variable inferida en la rama falsa (`else`) del ternario.", "No contemplar llamadas as\u00edncronas anidadas o funciones sobrecargadas al inferir retornos."]
      },
      quiz: {
        question: "\u00bfD\u00f3nde est\u00e1 permitido utilizar la palabra clave 'infer' en TypeScript?",
        options: ["\u00danicamente dentro de la cl\u00e1usula 'extends' de un tipo condicional.", "En cualquier firma de par\u00e1metro de una funci\u00f3n convencional.", "En la definici\u00f3n de propiedades de una interface.", "Como prefijo de variables declaradas con const."],
        correctIndex: 0,
        explanation: "La palabra clave 'infer' solo puede emplearse dentro de la cl\u00e1usula de comprobaci\u00f3n de un tipo condicional ('T extends Pattern<infer R> ? R : never')."
      }
    },
    {
      id: "ts-20",
      title: "\u00bfQu\u00e9 es la varianza en TypeScript (covariance/contravariance)?",
      level: "experto",
      tags: ["Variance", "Covariance", "Contravariance", "Bivariance", "strictFunctionTypes"],
      response: "La varianza describe c\u00f3mo la relaci\u00f3n de subtipado entre tipos base (`Dog extends Animal`) se traslada a los tipos gen\u00e9ricos o funciones compuestos que los contienen:\n\n1. **Covarianza (Misma direcci\u00f3n)**: Si `Dog extends Animal`, entonces `Container<Dog> extends Container<Animal>`. Ocurre en **salidas y valores de retorno**: una funci\u00f3n que promete devolver un `Dog` es asignable donde se espera una funci\u00f3n que devuelva un `Animal`, porque un `Dog` cumple todo lo que un `Animal` tiene.\n\n2. **Contravarianza (Direcci\u00f3n inversa)**: Se invierte la relaci\u00f3n de subtipado. Ocurre en los **par\u00e1metros de entrada de funciones** (con `strictFunctionTypes: true`). Una funci\u00f3n que acepta cualquier `Animal` (`(a: Animal) => void`) es asignable donde se requiere `(d: Dog) => void`, ya que puede procesar sin problemas a cualquier perro.\n\n3. **Bivarianza**: Permite ambas direcciones. Ocurre por defecto en la sintaxis de m\u00e9todos (`method(x: Dog): void`) por compatibilidad hist\u00f3rica con JavaScript y arrays.\n\n4. **Invarianza**: Solo se acepta el tipo exacto sin relaci\u00f3n de subtipado (com\u00fan en referencias mutables bidireccionales de lectura/escritura).",
      codeExample: {
        language: "typescript",
        code: "class Animal { name = \"Animal\"; }\nclass Dog extends Animal { bark() { console.log(\"Guau\"); } }\n\n// 1. Covarianza en retornos (Outputs)\ntype Producer<T> = () => T;\nlet produceDog: Producer<Dog> = () => new Dog();\nlet produceAnimal: Producer<Animal> = produceDog; // \u2705 Covariante (un Dog es un Animal)\n\n// 2. Contravarianza en par\u00e1metros de funci\u00f3n (Inputs con strictFunctionTypes: true)\ntype Consumer<T> = (param: T) => void;\nlet handleAnimal: Consumer<Animal> = (a) => console.log(a.name);\nlet handleDog: Consumer<Dog> = handleAnimal; // \u2705 Contravariante: Quien atiende a cualquier Animal atiende a un Dog\n\n// Pero lo opuesto falla por seguridad:\nlet handleDogOnly: Consumer<Dog> = (d) => d.bark();\n// let illegal: Consumer<Animal> = handleDogOnly;\n// \u274c Error: Un Animal gen\u00e9rico (como un Gato) no tiene el m\u00e9todo .bark()!"
      },
      visualDiagram: {
        id: "diag-ts-20",
        title: "Mapa de Varianza de Subtipos: Covarianza vs Contravarianza",
        caption: "Los valores de retorno son covariantes (conservan direcci\u00f3n); los par\u00e1metros son contravariantes (invierten direcci\u00f3n).",
        diagramType: "ts-variance-co-contra"
      },
      interviewTips: {
        whatInterviewersWant: "Pregunta de nivel Staff/Architect. Demuestra solidez en teor\u00eda de tipos: explica por qu\u00e9 los par\u00e1metros deben ser contravariantes para prevenir llamadas inv\u00e1lidas y por qu\u00e9 los m\u00e9todos en interfaces son bivariantes por razones pragm\u00e1ticas.",
        commonPitfalls: ["Confundir la direcci\u00f3n: pensar que los par\u00e1metros de funci\u00f3n son covariantes.", "Desconocer la bandera `strictFunctionTypes` de tsconfig.", "No saber por qu\u00e9 la sintaxis de propiedad (`fn: (x: T) => void`) es m\u00e1s segura que la sintaxis de m\u00e9todo (`fn(x: T): void`)."]
      },
      quiz: {
        question: "Con 'strictFunctionTypes: true', \u00bfc\u00f3mo se comportan los tipos en los par\u00e1metros de entrada de las funciones?",
        options: ["Contravariante: la relaci\u00f3n de subtipado se invierte para garantizar la seguridad de llamadas.", "Covariante: preserva la misma direcci\u00f3n de subtipado.", "Bivariante: acepta asignaciones en cualquier sentido.", "Invariante estricto \u00fanicamente."],
        correctIndex: 0,
        explanation: "En los argumentos de funciones, los tipos son contravariantes bajo strictFunctionTypes: una funci\u00f3n que acepta un supertipo amplio puede usarse con seguridad en cualquier lugar donde se espere una funci\u00f3n que procese un subtipo espec\u00edfico."
      }
    },
    {
      id: "ts-21",
      title: "\u00bfC\u00f3mo crear\u00edas un tipo utilitario avanzado personalizado?",
      level: "experto",
      tags: ["DeepReadonly", "DeepPartial", "Recursive-Types", "Tuple-Mapping", "Advanced-Utilities"],
      response: "Los utility types avanzados combinan **tipos condicionales**, **mapped types**, el operador **`infer`** y **recursividad de tipos** para transformar estructuras de datos complejas sin alterar la fidelidad de tipos.\n\nPara crear un tipo como `DeepReadonly<T>` o `DeepPartial<T>`, el secreto radica en definir un caso base estricto que detenga la recursi\u00f3n. Si no se excluyen tipos primitivos escalares (`string`, `number`, `boolean`, etc.), funciones y objetos especiales del runtime (`Date`, `RegExp`, `Map`, `Set`), el compilador intentar\u00e1 iterar sobre los m\u00e9todos internos de los prototipos provocando errores o superando el l\u00edmite de profundidad de recursi\u00f3n (`TS2589: Type instantiation is excessively deep and possibly infinite`).",
      codeExample: {
        language: "typescript",
        code: "// Primitivos que no deben ser iterados recursivamente\ntype Primitive = string | number | boolean | bigint | symbol | undefined | null | Function;\n\n// Implementaci\u00f3n robusta y recursiva de DeepReadonly:\nexport type DeepReadonly<T> = T extends Primitive\n  ? T\n  : T extends Map<infer K, infer V>\n  ? ReadonlyMap<DeepReadonly<K>, DeepReadonly<V>>\n  : T extends Set<infer Item>\n  ? ReadonlySet<DeepReadonly<Item>>\n  : T extends readonly (infer Element)[]\n  ? readonly DeepReadonly<Element>[]\n  : { readonly [Key in keyof T]: DeepReadonly<T[Key]> };\n\n// Verificaci\u00f3n pr\u00e1ctica:\ninterface NestedConfig {\n  api: {\n    endpoints: {\n      auth: string;\n      timeout: number;\n    };\n    headers: string[];\n  };\n}\n\nconst config: DeepReadonly<NestedConfig> = {\n  api: {\n    endpoints: { auth: \"/oauth/token\", timeout: 5000 },\n    headers: [\"Authorization\", \"X-Request-ID\"]\n  }\n};\n\n// config.api.endpoints.timeout = 10000; // \u274c Error TS2540 en segundo nivel de anidaci\u00f3n!"
      },
      visualDiagram: {
        id: "diag-ts-21",
        title: "\u00c1rbol de Recursi\u00f3n para Utilidades Profundas (DeepReadonly)",
        caption: "Recorrido recursivo del grafo de tipos con detecci\u00f3n de casos base (primitivos, colecciones y funciones) para evitar recursi\u00f3n infinita.",
        diagramType: "ts-custom-deep-utility"
      },
      interviewTips: {
        whatInterviewersWant: "Ver c\u00f3mo resuelves un reto de ingenier\u00eda de tipos real. Es fundamental que menciones los casos base (`Primitive`, `Function`, `Date`) para no degradar el rendimiento del compilador ni transformar funciones en objetos vac\u00edos.",
        commonPitfalls: ["Hacer que la recursi\u00f3n convierta m\u00e9todos/funciones en objetos vac\u00edos `{}` por no tratarlos como primitivos.", "Provocar el error 'Type instantiation is excessively deep' por falta de condiciones de escape.", "Olvidar manejar arrays y colecciones especiales como `Map` o `Set`."]
      },
      quiz: {
        question: "\u00bfPor qu\u00e9 un tipo utilitario recursivo debe identificar primitivos y funciones como casos base?",
        options: ["Para evitar intentar iterar sobre sus propiedades internas, previniendo errores de compilador y l\u00edmites de recursi\u00f3n infinita.", "Porque TypeScript no permite recursi\u00f3n en ning\u00fan escenario.", "Para acelerar la ejecuci\u00f3n del c\u00f3digo en el navegador.", "Para obligar a que las funciones sean as\u00edncronas."],
        correctIndex: 0,
        explanation: "Si no se a\u00edslan las funciones y tipos primitivos en el caso base, un mapped type intentar\u00e1 recorrer sus propiedades protot\u00edpicas internas, rompiendo la signatura de m\u00e9todos y alcanzando el l\u00edmite de recursi\u00f3n del compilador."
      }
    },
    {
      id: "ts-22",
      title: "\u00bfQu\u00e9 es el operador satisfies y cu\u00e1ndo se usa?",
      level: "experto",
      tags: ["satisfies", "TS-4.9", "Type-Inference", "Type-Validation", "Widening"],
      response: "Introducido en TypeScript 4.9, el operador `satisfies` resuelve un dilema hist\u00f3rico en TypeScript: **\u00bfC\u00f3mo comprobar que un valor cumple con un contrato formal o tipo sin forzar el ensanchamiento (widening) de su tipo inferido?**\n\nTradicionalmente, anotar una variable expl\u00edcitamente (`const palette: Record<string, RGB | string> = { ... }`) valida que las propiedades cumplan la regla, pero **destruye el tipo literal espec\u00edfico**, unific\u00e1ndolo en `RGB | string`. En consecuencia, al acceder a `palette.red`, TypeScript no sabe si es un string o un array RGB, impidiendo usar m\u00e9todos como `.toUpperCase()` sin casteos manuales.\n\nEl operador `satisfies` permite:\n1. Validar exhaustivamente que el objeto satisfaga el contrato o interfaz.\n2. **Preservar el tipo literal m\u00e1s espec\u00edfico inferido** para cada miembro individual del objeto, manteniendo el autocompletado y eliminando la ambig\u00fcedad.",
      codeExample: {
        language: "typescript",
        code: "type RGB = [red: number, green: number, blue: number];\ntype Color = RGB | string;\n\n// PROBLEMA TRADICIONAL con anotaci\u00f3n de tipo:\nconst badPalette: Record<string, Color> = {\n  red: \"#ff0000\",\n  green: [0, 255, 0]\n};\n// badPalette.red.toLowerCase(); \u274c Error: Property 'toLowerCase' does not exist on type 'Color' (podr\u00eda ser RGB).\n\n// SOLUCI\u00d3N ELEGANTE con 'satisfies' (TS 4.9+):\nconst goodPalette = {\n  red: \"#ff0000\",\n  green: [0, 255, 0]\n} satisfies Record<string, Color>;\n\n// 1. El contrato est\u00e1 garantizado (si pones un boolean lanzar\u00e1 error est\u00e1tico).\n// 2. La inferencia literal se conserva intacta:\nconsole.log(goodPalette.red.toLowerCase()); // \u2705 Funciona perfecto: sabe que 'red' es string!\nconsole.log(goodPalette.green[0]);          // \u2705 Sabe que 'green' es la tupla [number, number, number]!"
      },
      visualDiagram: {
        id: "diag-ts-22",
        title: "Anotaci\u00f3n Tradicional vs Operador 'satisfies'",
        caption: "La anotaci\u00f3n cl\u00e1sica ensancha y degrada los tipos literales; satisfies valida el contrato y retiene la inferencia exacta de cada propiedad.",
        diagramType: "ts-satisfies-operator-inference"
      },
      interviewTips: {
        whatInterviewersWant: "Conocimiento moderno de TS 4.9+. Explicar con precisi\u00f3n la p\u00e9rdida de tipo por 'widening' al anotar frente a la preservaci\u00f3n del tipo espec\u00edfico que logra `satisfies`.",
        commonPitfalls: ["Confundir `satisfies` con una aserci\u00f3n de tipo forzada (`as`). `satisfies` rechaza datos inv\u00e1lidos en tiempo de compilaci\u00f3n; `as` los enmascara.", "Seguir utilizando `: Record<string, ...>` para objetos de configuraci\u00f3n cuando `satisfies` ofrece una experiencia infinitamente superior.", "Desconocer que `satisfies` tambi\u00e9n previene erratas tipogr\u00e1ficas en nombres de propiedades."]
      },
      quiz: {
        question: "\u00bfCu\u00e1l es la principal ventaja de 'satisfies' frente a una anotaci\u00f3n de tipo directa (const x: Tipo = ...)?",
        options: ["Verifica la compatibilidad con el tipo pero preserva la inferencia literal y espec\u00edfica del valor asignado.", "Convierte el objeto en una estructura mutable de solo lectura en memoria.", "A\u00f1ade validaci\u00f3n de esquemas en tiempo de ejecuci\u00f3n (runtime schema validation).", "Emite c\u00f3digo JavaScript adicional para serializaci\u00f3n JSON."],
        correctIndex: 0,
        explanation: "satisfies valida que el valor cumpla con el tipo deseado pero no ensancha la variable a ese tipo, reteniendo el tipo m\u00e1s espec\u00edfico posible de cada una de sus propiedades."
      }
    },
    {
      id: "ts-23",
      title: "\u00bfQu\u00e9 es const assertion (as const) y c\u00f3mo se usa?",
      level: "experto",
      tags: ["as-const", "Const-Assertions", "Tuple-Types", "Literal-Types", "Deep-Freeze"],
      response: "La aserci\u00f3n `as const` (Const Assertion) es una construcci\u00f3n sint\u00e1ctica especial de TypeScript que indica al compilador que trate una expresi\u00f3n con las reglas de inferencia m\u00e1s restrictivas e inmutables posibles a nivel est\u00e1tico:\n\n1. **Elimina el ensanchamiento de literales (Type Widening)**: Las cadenas, n\u00fameros y booleanos se infieren como sus valores literales exactos (`\"admin\"` en lugar de `string`, `42` en vez de `number`).\n2. **Convierte arrays en Tuplas de Solo Lectura**: Un array `[\"a\", \"b\"]` deja de inferir `string[]` mutable y pasa a inferir `readonly [\"a\", \"b\"]`.\n3. **Aplica `readonly` en profundidad**: Todas las propiedades de un objeto anidado se marcan autom\u00e1ticamente como de solo lectura.\n\nEs la herramienta por excelencia para construir cat\u00e1logos de constantes inmutables que sustituyen con creces a los `enums` tradicionales y para tipar de forma infalible sistemas de rutas y par\u00e1metros en frontend.",
      codeExample: {
        language: "typescript",
        code: "// Sin 'as const' (Inferencia mutable ensanchada):\nconst routeList = [\"/home\", \"/profile\", \"/settings\"];\n// Tipo inferido: string[] (se le pueden hacer .push() y no sirve para tipar rutas exactas)\n\n// Con 'as const' (Const Assertion):\nconst APP_ROUTES = [\"/home\", \"/profile\", \"/settings\"] as const;\n// Tipo inferido: readonly [\"/home\", \"/profile\", \"/settings\"]\n\n// Extracci\u00f3n autom\u00e1tica del tipo uni\u00f3n de rutas v\u00e1lidas:\ntype AppRoute = (typeof APP_ROUTES)[number]; // \"/home\" | \"/profile\" | \"/settings\"\n\nfunction navigateTo(route: AppRoute): void {\n  console.log(\"Navegando a:\", route);\n}\n\nnavigateTo(\"/home\"); // \u2705 OK\n// navigateTo(\"/dashboard\"); // \u274c Error TS2345: Argument not assignable to 'AppRoute'\n\n// Inmutabilidad est\u00e1tica profunda en objetos:\nconst CONFIG = {\n  api: { timeout: 3000, retry: 3 }\n} as const;\n// CONFIG.api.timeout = 5000; // \u274c Error TS2540: Cannot assign to 'timeout' because it is a read-only property."
      },
      visualDiagram: {
        id: "diag-ts-23",
        title: "Efecto de Const Assertion (as const) sobre Widening e Inmutabilidad",
        caption: "as const congela tipos literales y convierte arrays en tuplas readonly, permitiendo extraer uniones precisas con typeof.",
        diagramType: "ts-const-assertion-widening"
      },
      interviewTips: {
        whatInterviewersWant: "Que expliques c\u00f3mo `as const` evita el Type Widening, su uso conjunto con `typeof array[number]` para generar tipos uni\u00f3n, y por qu\u00e9 es el pilar de los cat\u00e1logos de constantes modernos.",
        commonPitfalls: ["Olvidar que `as const` solo act\u00faa en tiempo de compilaci\u00f3n y no aplica `Object.freeze()` nativo en tiempo de ejecuci\u00f3n.", "Intentar mutar un array `as const` con `.push()` o reasignar una clave.", "No saber c\u00f3mo extraer los tipos de los valores de un objeto `as const` usando `(typeof obj)[keyof typeof obj]`."]
      },
      quiz: {
        question: "Dado 'const statuses = [\"active\", \"inactive\"] as const;', \u00bfqu\u00e9 tipo produce '(typeof statuses)[number]'?",
        options: ["\"active\" | \"inactive\"", "string[]", "readonly [\"active\", \"inactive\"]", "number"],
        correctIndex: 0,
        explanation: "Al aplicar 'as const', el array se infiere como una tupla 'readonly [\"active\", \"inactive\"]'. La indexaci\u00f3n num\u00e9rica '[number]' extrae la uni\u00f3n de todos los tipos de sus elementos literales: '\"active\" | \"inactive\"'."
      }
    }
  ]
};

export default questionsTypescript;
