import { ISection } from "../../types";

export const questionsReact: ISection = {
  id: "react",
  title: "React",
  collapse: "collapseReact",
  icon: "react",
  category: "frameworks",
  description:
    "React 19+, arquitectura Fiber, Server Components (RSC), Actions, TanStack Query, Zustand y arquitectura Feature-First.",
  questions: [
    {
      id: "react-01",
      title: "\u00bfQu\u00e9 es React y cu\u00e1les son sus caracter\u00edsticas principales?",
      level: "basico",
      tags: ["React", "Declarative", "Component-Based", "Unidirectional-Data-Flow", "Virtual-DOM"],
      response: "React es una biblioteca de JavaScript declarativa, eficiente y basada en componentes para la construcci\u00f3n de interfaces de usuario interactivas, desarrollada y mantenida por Meta y una comunidad global. A diferencia de los frameworks monol\u00edticos basados en plantillas, React se fundamenta en la composici\u00f3n de c\u00f3digo JavaScript/TypeScript donde la interfaz es una funci\u00f3n directa del estado: UI = f(state).\n\nSus cuatro pilares arquitect\u00f3nicos esenciales son:\n1. **Programaci\u00f3n Declarativa**: Describes c\u00f3mo debe lucir la UI en cualquier estado dado, y React se encarga de realizar las mutaciones del DOM subyacentes de manera eficiente.\n2. **Arquitectura Basada en Componentes**: Piezas aisladas, reutilizables y autocontenidas que gestionan su propia l\u00f3gica, ciclo de vida y renderizado.\n3. **Flujo Unidireccional de Datos (One-Way Data Binding)**: Los datos descienden de padres a hijos mediante `props`, mientras que los eventos y callbacks ascienden para solicitar mutaciones de estado, facilitando el razonamiento y la depuraci\u00f3n del sistema.\n4. **Virtual DOM y Motor Fiber**: Una representaci\u00f3n en memoria del \u00e1rbol del DOM que permite calcular diferencias (diffing) y actualizar el navegador con un n\u00famero m\u00ednimo de operaciones en lote.",
      codeExample: {
        language: "tsx",
        code: "// Componente funcional declarativo con TypeScript:\ninterface MetricProps {\n  label: string;\n  value: number;\n  unit?: string;\n}\n\nexport function MetricCard({ label, value, unit = \"ms\" }: MetricProps) {\n  // La UI es una funci\u00f3n pura del estado y las propiedades recibidas:\n  return (\n    <article className=\"p-4 rounded-lg bg-slate-900 border border-slate-800\">\n      <span className=\"text-xs text-slate-400 uppercase tracking-wider\">{label}</span>\n      <p className=\"text-2xl font-bold text-sky-400 mt-1\">\n        {value} <span className=\"text-sm font-normal text-slate-300\">{unit}</span>\n      </p>\n    </article>\n  );\n}"
      },
      visualDiagram: {
        id: "diag-react-01",
        title: "\u00c1rbol de Componentes y Flujo Unidireccional de Datos",
        caption: "Las propiedades (props) descienden jer\u00e1rquicamente mientras los eventos ascienden hacia la fuente de verdad del estado.",
        diagramType: "react-component-tree-unidirectional"
      },
      interviewTips: {
        whatInterviewersWant: "Que expliques React como una biblioteca declarativa centrada en 'UI = f(state)' con flujo unidireccional, en contraste con el enlace bidireccional (two-way binding) de frameworks tradicionales.",
        commonPitfalls: ["Llamar a React un 'framework completo' (es una biblioteca de UI que se combina con routing y state management).", "Pensar que los datos pueden fluir directamente entre componentes hermanos sin elevar el estado al padre com\u00fan o usar un store.", "Creer que manipular el DOM directamente con document.getElementById es aceptable dentro del ciclo de render de React."],
        followUps: [
          "¿Qué significa que React sea declarativo?",
          "¿Por qué React es una librería y no un framework?"
        ]
      },
      quiz: {
        question: "\u00bfCu\u00e1l es la principal ventaja del flujo de datos unidireccional en React?",
        options: ["Hace que el flujo de informaci\u00f3n sea predecible y f\u00e1cil de rastrear, ya que el estado desciende y las mutaciones solo ocurren mediante eventos expl\u00edcitos.", "Permite que los componentes hijos modifiquen directamente las props de sus padres sin intermediarios.", "Elimina por completo la necesidad de compilar el c\u00f3digo JavaScript.", "Acelera la velocidad del Garbage Collector de V8 en un 50%."],
        correctIndex: 0,
        explanation: "El flujo unidireccional garantiza que los componentes hijos solo lean props de sus padres y soliciten cambios mediante callbacks, haciendo el rastreo de estados completamente predecible."
      }
    },
    {
      id: "react-02",
      title: "\u00bfQu\u00e9 es JSX / TSX?",
      level: "basico",
      tags: ["JSX", "TSX", "Babel", "SWC", "React-Element", "jsx-runtime"],
      response: "JSX (JavaScript XML) y TSX (TypeScript XML) son extensiones sint\u00e1cticas para JavaScript/TypeScript que permiten escribir la estructura de la interfaz de usuario con una sintaxis visualmente an\u00e1loga a HTML directamente dentro de la l\u00f3gica del componente.\n\nJSX **no es HTML real ni cadenas de texto**: el navegador no puede interpretarlo nativamente. Durante el proceso de compilaci\u00f3n (mediante herramientas como SWC, Vite, Babel o esbuild), el JSX se transforma en llamadas a funciones del runtime de React (`jsx()` o `React.createElement()`).\n\nCada elemento JSX se convierte en un **React Element**: un objeto de JavaScript ligero, plano e inmutable (`{ $$typeof: Symbol(react.element), type: 'div', props: {...} }`) que describe qu\u00e9 debe renderizarse en pantalla sin tocar el DOM f\u00edsico.",
      codeExample: {
        language: "tsx",
        code: "// 1. C\u00f3digo fuente en TSX:\nconst element = (\n  <button className=\"btn-primary\" onClick={() => console.log(\"click\")}>\n    Confirmar Compra\n  </button>\n);\n\n// 2. Transpilaci\u00f3n generada por el compilador (New JSX Transform de React 17+):\n// import { jsx as _jsx } from \"react/jsx-runtime\";\n// const element = _jsx(\"button\", {\n//   className: \"btn-primary\",\n//   onClick: () => console.log(\"click\"),\n//   children: \"Confirmar Compra\"\n// });\n\n// 3. Objeto React Element resultante en memoria:\n// {\n//   $$typeof: Symbol.for('react.element'), // Protecci\u00f3n de seguridad contra ataques XSS\n//   type: 'button',\n//   key: null,\n//   props: { className: 'btn-primary', children: 'Confirmar Compra', onClick: [Function] }\n// }"
      },
      visualDiagram: {
        id: "diag-react-02",
        title: "Pipeline de Transpilaci\u00f3n de JSX a React Elements",
        caption: "Transformaci\u00f3n de sintaxis JSX a llamadas funcionales del runtime y creaci\u00f3n de objetos React Elements planos e inmutables.",
        diagramType: "react-jsx-transpilation-runtime"
      },
      interviewTips: {
        whatInterviewersWant: "Saber si entiendes qu\u00e9 es JSX por debajo (objetos planos en memoria creados por el compilador) y conocer la existencia de `$$typeof: Symbol.for('react.element')` como mecanismo de seguridad contra inyecciones XSS de JSON malicioso.",
        commonPitfalls: ["Creer que JSX es una plantilla HTML interpretada por el navegador en tiempo de ejecuci\u00f3n.", "Asumir que se debe importar `import React from 'react'` en cada archivo (en el nuevo JSX Transform de React 17+ ya no es necesario).", "Confundir un componente (una funci\u00f3n) con un elemento (el objeto retornado al invocar `<Component />`)."],
        followUps: [
          "¿En qué se transforma JSX con el nuevo JSX transform?",
          "¿Por qué los componentes deben empezar con mayúscula?"
        ]
      },
      quiz: {
        question: "\u00bfQu\u00e9 prop\u00f3sito tiene la propiedad interna '$$typeof: Symbol.for(\"react.element\")' en los elementos de React?",
        options: ["Prevenir vulnerabilidades XSS impidiendo que un atacante inyecte un objeto JSON plano que el cliente intente renderizar como nodo de React.", "Indicar el orden cronol\u00f3gico en el que el componente fue montado en el DOM.", "Vincular el componente con su hoja de estilos CSS correspondiente.", "Informar al navegador de la tasa de refresco en Hertz para animaciones."],
        correctIndex: 0,
        explanation: "Los s\u00edmbolos (Symbols) no pueden ser serializados en JSON; por tanto, si un servidor vulnerable devuelve un payload JSON malicioso simulando un elemento React, React lo rechazar\u00e1 porque carece de un Symbol leg\u00edtimo en '$$typeof'."
      }
    },
    {
      id: "react-03",
      title: "\u00bfQu\u00e9 son los props y c\u00f3mo se diferencian del state?",
      level: "basico",
      tags: ["Props", "State", "Immutability", "Reactivity", "Re-render"],
      response: "En React, tanto los `props` como el `state` son objetos planos de JavaScript que determinan la salida renderizada del componente, pero poseen naturalezas y responsabilidades arquitect\u00f3nicas opuestas:\n\n1. **`props` (Propiedades / Inputs Externos)**:\n   - Datos pasados **de un componente padre a un componente hijo**.\n   - **Estrictamente inmutables (de solo lectura)** para el componente que los recibe. Un componente jam\u00e1s debe mutar sus propios props.\n   - An\u00e1logos a los par\u00e1metros pasados a una funci\u00f3n pura.\n\n2. **`state` (Estado / Memoria Interna Reactiva)**:\n   - Informaci\u00f3n privada y encapsulada gestionada **internamente por el propio componente** a lo largo del tiempo (mediante `useState` o `useReducer`).\n   - Su valor se actualiza exclusivamente mediante la funci\u00f3n disparadora (`setState`), lo cual agenda un nuevo ciclo de reconciliaci\u00f3n y re-renderizado.\n   - Es la fuente viva de interactividad para cambios inducidos por el usuario, timers o respuestas de red.",
      codeExample: {
        language: "tsx",
        code: "// Ejemplo que combina props externas con estado interno:\ninterface CounterProps {\n  initialCount?: number; // Prop externa inmutable\n  maxLimit: number;\n}\n\nexport function Counter({ initialCount = 0, maxLimit }: CounterProps) {\n  // State interno mutable reactivo a la interacci\u00f3n:\n  const [count, setCount] = useState(initialCount);\n\n  const handleIncrement = () => {\n    if (count < maxLimit) {\n      setCount(prev => prev + 1); // Actualizaci\u00f3n funcional segura\n    }\n  };\n\n  return (\n    <div className=\"flex items-center gap-3\">\n      <span className=\"text-lg font-mono\">Valor: {count} / {maxLimit}</span>\n      <button onClick={handleIncrement} disabled={count >= maxLimit} className=\"px-3 py-1 bg-sky-600 rounded\">\n        +1\n      </button>\n    </div>\n  );\n}"
      },
      visualDiagram: {
        id: "diag-react-03",
        title: "Diferenciaci\u00f3n de Responsabilidades: Props vs State",
        caption: "Las props son inmutables y externas; el state es interno, reactivo y desencadena re-renders.",
        diagramType: "react-props-vs-state-flow"
      },
      interviewTips: {
        whatInterviewersWant: "Que destaques la inmutabilidad de los props y el car\u00e1cter reactivo del state, explicando por qu\u00e9 no se debe mutar `props` directamente ni duplicar props en el state salvo para inicializaciones deliberadas.",
        commonPitfalls: ["Copiar props en el state (`useState(props.val)`) creyendo que el state se sincronizar\u00e1 autom\u00e1ticamente cuando la prop cambie (crea desincronizaciones de datos).", "Intentar mutar un prop directamente (`props.user.name = 'nuevo'`), violando la pureza de React.", "No usar la forma funcional de actualizaci\u00f3n `setCount(prev => prev + 1)` cuando el nuevo estado depende del anterior."],
        followUps: [
          "¿Qué ocurre si mutas el state directamente?",
          "¿Cuándo conviene elevar el estado (lifting state up)?"
        ]
      },
      quiz: {
        question: "\u00bfQu\u00e9 ocurre si un componente intenta mutar directamente una de sus propiedades: 'props.title = \"Nuevo\"'?",
        options: ["Viola el contrato de pureza de React; en TypeScript lanzar\u00e1 error de compilaci\u00f3n y en runtime fallar\u00e1 si las props est\u00e1n congeladas.", "React detectar\u00e1 el cambio y re-renderizar\u00e1 al componente padre de forma inmediata.", "La mutaci\u00f3n se aplicar\u00e1 pero emitir\u00e1 un warning leve en la consola.", "Se crear\u00e1 una copia profunda de la propiedad en memoria de forma silenciosa."],
        correctIndex: 0,
        explanation: "Las props deben ser tratadas como valores de solo lectura estrictos para preservar la predictibilidad del flujo unidireccional y la detecci\u00f3n de cambios en React."
      }
    },
    {
      id: "react-04",
      title: "\u00bfQu\u00e9 es la prop especial 'children'?",
      level: "basico",
      tags: ["children", "Composition", "Slots", "Inversion-of-Control", "Prop-Drilling"],
      response: "La prop `children` es un mecanismo nativo de composici\u00f3n en React que contiene autom\u00e1ticamente cualquier contenido (elementos JSX, componentes, cadenas de texto o funciones) colocado **entre las etiquetas de apertura y cierre** de un componente: `<Layout>{children}</Layout>`.\n\nEn la arquitectura de software frontend, `children` representa el principio de **Inversi\u00f3n de Control (Inversion of Control)** y emula el concepto de *Slots* o transclusi\u00f3n de Web Components. Permite a los componentes contenedores estructurar el dise\u00f1o visual, estilos, padding o contexto sin necesitar conocer a priori qu\u00e9 componentes hijos espec\u00edficos residir\u00e1n en su interior, resolviendo de forma limpia problemas graves de **Prop Drilling**.",
      codeExample: {
        language: "tsx",
        code: "import { ReactNode } from \"react\";\n\ninterface CardProps {\n  title: string;\n  children: ReactNode; // Acepta cualquier elemento renderizable en React\n  footer?: ReactNode;\n}\n\n// Componente contenedor desacoplado:\nexport function Card({ title, children, footer }: CardProps) {\n  return (\n    <div className=\"rounded-xl border border-slate-700 bg-slate-900 p-6 shadow-xl\">\n      <header className=\"border-b border-slate-800 pb-3 mb-4\">\n        <h3 className=\"text-lg font-semibold text-slate-100\">{title}</h3>\n      </header>\n      \n      {/* Inyecci\u00f3n de los hijos composables */}\n      <div className=\"text-slate-300\">{children}</div>\n\n      {footer && <footer className=\"mt-4 pt-3 border-t border-slate-800\">{footer}</footer>}\n    </div>\n  );\n}"
      },
      visualDiagram: {
        id: "diag-react-04",
        title: "Patr\u00f3n de Composici\u00f3n mediante la Prop 'children'",
        caption: "Inyecci\u00f3n de contenido e inversi\u00f3n de control para evitar prop drilling en componentes contenedores.",
        diagramType: "react-children-composition-slot"
      },
      interviewTips: {
        whatInterviewersWant: "Demostrar c\u00f3mo utilizar `children` para componer layouts limpios y evitar pasar datos a trav\u00e9s de 4 componentes intermediarios innecesarios (anti-prop-drilling).",
        commonPitfalls: ["Tipar `children` como `JSX.Element` en vez de `ReactNode` (rechazar\u00eda primitivos v\u00e1lidos como strings, n\u00fameros o fragmentos).", "Manipular directamente el array de `children` con m\u00e9todos est\u00e1ndar de Array sin usar utilidades seguras como `Children.map`.", "Crear componentes hiper-parametrizados con 20 props cuando una composici\u00f3n limpia con `children` resolver\u00eda la necesidad."],
        followUps: [
          "¿Qué es el patrón render props frente a children?",
          "¿Cómo pasarías varias zonas de contenido a un componente (slots por props)?"
        ]
      },
      quiz: {
        question: "\u00bfQu\u00e9 tipo de TypeScript es el est\u00e1ndar recomendado para tipar la prop 'children' en componentes funcionales modernos?",
        options: ["React.ReactNode", "JSX.Element", "HTMLElement", "Record<string, unknown>"],
        correctIndex: 0,
        explanation: "React.ReactNode es el supertipo can\u00f3nico que abarca elementos JSX, strings, n\u00fameros, fragmentos, booleanos, null y undefined, cubriendo cualquier hijo v\u00e1lido en React."
      }
    },
    {
      id: "react-05",
      title: "\u00bfQu\u00e9 son los Hooks y cu\u00e1les son las reglas fundamentales para usarlos?",
      level: "basico",
      tags: ["Hooks", "Rules-of-Hooks", "Fiber-Node", "Linked-List", "Functional-Components"],
      response: "Los Hooks son funciones nativas (introducidas en React 16.8) que permiten 'enganchar' (hook into) estado, referencias y ciclo de vida de React dentro de componentes funcionales sin requerir clases de ES6.\n\nPara que el motor de React pueda mapear de manera infalible qu\u00e9 estado corresponde a cada llamada, existen **dos Reglas de Oro inquebrantables (Rules of Hooks)**:\n\n1. **Solo llamar Hooks en el nivel superior (Top Level)**: Jam\u00e1s deben invocarse dentro de condicionales (`if`), bucles (`for`), o funciones anidadas. Deben ejecutarse siempre en el mismo orden exacto en cada ciclo de render.\n2. **Solo llamar Hooks desde componentes de React o Custom Hooks**: Nunca deben invocarse desde funciones regulares de JavaScript.\n\n**Justificaci\u00f3n interna (Mec\u00e1nica de Fiber)**:\nReact no almacena el estado de los hooks en un diccionario indexado por nombre, sino en una **Lista Enlazada simple** dentro del objeto `FiberNode.memoizedState`. Si un hook se ejecuta condicionalmente en un render y en el siguiente no, el puntero `next` de la lista enlazada se desalinea por completo, corrompiendo el estado de todos los hooks posteriores.",
      codeExample: {
        language: "tsx",
        code: "// \u274c ANTIPATR\u00d3N FATAL: Rompe el orden de la lista enlazada en Fiber\nfunction BadProfile({ userId }: { userId?: string }) {\n  if (userId) {\n    // \ud83d\udca5 Error de Hooks: La cantidad y orden de hooks var\u00eda entre renders!\n    const [user] = useState<User | null>(null);\n  }\n  const [theme] = useState(\"dark\");\n  return <div>...</div>;\n}\n\n// \u2705 PATR\u00d3N CORRECTO: Siempre en el top level\nfunction GoodProfile({ userId }: { userId?: string }) {\n  const [user, setUser] = useState<User | null>(null);\n  const [theme] = useState(\"dark\");\n\n  useEffect(() => {\n    if (userId) {\n      // La l\u00f3gica condicional reside DENTRO del efecto, no envolviendo al hook!\n    }\n  }, [userId]);\n\n  return <div>...</div>;\n}"
      },
      visualDiagram: {
        id: "diag-react-05",
        title: "Estructura de Lista Enlazada de Hooks en el Nodo Fiber",
        caption: "Los hooks se encadenan mediante punteros 'next' en memoria; romper el orden desalinea los estados subsiguientes.",
        diagramType: "react-hooks-linked-list"
      },
      interviewTips: {
        whatInterviewersWant: "La justificaci\u00f3n t\u00e9cnica de bajo nivel: que expliques la lista enlazada de hooks en el Fiber Node y por qu\u00e9 un `if` provocar\u00eda que el estado del hook 2 se le asigne por error al hook 3.",
        commonPitfalls: ["Creer que React asocia los hooks con variables m\u00e1gicas o por su nombre.", "Desactivar la regla de ESLint `react-hooks/rules-of-hooks` para parchar un c\u00f3digo incorrecto.", "Llamar a un hook dentro de un controlador de eventos (`onClick`) en lugar de en el cuerpo del componente."],
        followUps: [
          "¿Por qué los hooks no pueden llamarse dentro de condicionales?",
          "¿Cómo se crea un custom hook?"
        ]
      },
      quiz: {
        question: "\u00bfC\u00f3mo almacena internamente React el estado de m\u00faltiples hooks dentro de un componente?",
        options: ["En una lista enlazada donde cada hook apunta al siguiente nodo mediante una referencia fija evaluada en orden secuencial.", "En una tabla hash (HashMap) indexada por el nombre de la variable destructurada.", "En el LocalStorage del navegador sincronizado por thread.", "En el registro global de Window utilizando el id del componente."],
        correctIndex: 0,
        explanation: "El nodo Fiber de React contiene una lista enlazada de objetos Hook. Cada render recorre la lista en orden secuencial estricto; por ello, la cantidad y orden de llamadas debe ser exactamente id\u00e9ntica en cada render."
      }
    },
    {
      id: "react-06",
      title: "\u00bfQu\u00e9 diferencia hay entre componentes controlados y no controlados?",
      level: "basico",
      tags: ["Controlled", "Uncontrolled", "useRef", "Forms", "Single-Source-of-Truth"],
      response: "La distinci\u00f3n reside en **qui\u00e9n gobierna y almacena la fuente de verdad (Source of Truth)** de los datos del formulario:\n\n1. **Componentes Controlados**:\n   - El estado de React es la **\u00fanica fuente de verdad**.\n   - El valor del input se fuerza mediante la prop `value={state}` y se actualiza a trav\u00e9s del callback `onChange={e => setState(e.target.value)}`.\n   - **Ventajas**: Validaci\u00f3n inmediata car\u00e1cter a car\u00e1cter, deshabilitaci\u00f3n condicional de botones en vivo y formateo instant\u00e1neo de entradas (ej. tarjetas de cr\u00e9dito).\n\n2. **Componentes No Controlados**:\n   - El **propio DOM del navegador** mantiene y gestiona el valor interno del campo de texto de manera nativa.\n   - El valor se lee a demanda (por ejemplo, en el evento `onSubmit`) utilizando una referencia de React (`useRef`).\n   - **Ventajas**: M\u00e1ximo rendimiento (cero re-renderizados de componentes mientras el usuario teclea) e integraci\u00f3n natural con inputs nativos que no admiten control de valor directo como `<input type=\"file\" />`.\n   - Es la base de rendimiento de librer\u00edas de alto impacto como **React Hook Form**.",
      codeExample: {
        language: "tsx",
        code: "// 1. Controlado: Re-renderiza en cada tecla pulsada\nexport function ControlledInput() {\n  const [val, setVal] = useState(\"\");\n  return (\n    <input\n      value={val}\n      onChange={e => setVal(e.target.value.toUpperCase())} // Forzado en tiempo real\n      placeholder=\"Controlado en React State\"\n    />\n  );\n}\n\n// 2. No Controlado: 0 re-renders, lectura directa del nodo DOM\nexport function UncontrolledInput() {\n  const inputRef = useRef<HTMLInputElement>(null);\n\n  const handleSubmit = (e: React.FormEvent) => {\n    e.preventDefault();\n    console.log(\"Valor le\u00eddo a demanda:\", inputRef.current?.value);\n  };\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <input ref={inputRef} defaultValue=\"Valor inicial\" />\n      <button type=\"submit\">Enviar</button>\n    </form>\n  );\n}"
      },
      visualDiagram: {
        id: "diag-react-06",
        title: "Arquitectura: Input Controlado (State) vs No Controlado (DOM Nativo)",
        caption: "El componente controlado sincroniza el ciclo reactivo en cada tecla; el no controlado delega en el DOM para m\u00e1ximo rendimiento.",
        diagramType: "react-controlled-vs-uncontrolled"
      },
      interviewTips: {
        whatInterviewersWant: "Saber que comprendes los pros y contras de rendimiento: un formulario de 50 inputs controlados con `useState` genera re-renders masivos innecesarios, motivo por el cual librer\u00edas modernas como React Hook Form usan componentes no controlados con suscripciones aisladas.",
        commonPitfalls: ["Pasar de no controlado a controlado por inicializar un input con `undefined` y luego asignar un string (provoca warning de React).", "Usar 20 hooks `useState` en formularios largos en lugar de utilizar React Hook Form con Zod.", "Intentar controlar un input de archivo `<input type=\"file\" />` (el navegador proh\u00edbe asignar su valor por motivos de seguridad)."],
        followUps: [
          "¿Cómo integrarías un input no controlado con React Hook Form?",
          "¿Por qué aparece el warning 'changing an uncontrolled input to be controlled'?"
        ]
      },
      quiz: {
        question: "\u00bfPor qu\u00e9 un campo '<input type=\"file\" />' debe ser implementado obligatoriamente como un componente no controlado en React?",
        options: ["Porque su valor es de solo lectura en el navegador por razones de seguridad del sistema de archivos y no se puede programar mediante props.", "Porque React no soporta subida de archivos binarios.", "Porque solo funciona con Server Components.", "Porque requiere el compilador de WebAssembly."],
        correctIndex: 0,
        explanation: "El valor de un input de tipo file no puede ser establecido mediante JavaScript por razones de seguridad del navegador; por ende, siempre es no controlado y se accede mediante una ref al DOM."
      }
    },
    {
      id: "react-07",
      title: "\u00bfPor qu\u00e9 las listas en React requieren una propiedad 'key'?",
      level: "basico",
      tags: ["Keys", "List-Diffing", "Reconciliation", "Identity", "Performance"],
      response: "La prop `key` proporciona una **identidad persistente y \u00fanica** a cada elemento de una lista a trav\u00e9s de los ciclos de renderizado. Permite al algoritmo de reconciliaci\u00f3n (diffing) de React determinar con precisi\u00f3n matem\u00e1tica qu\u00e9 elementos han sido agregados, eliminados, conservados o simplemente reordenados en el DOM f\u00edsico.\n\n**El peligro de usar el \u00edndice del array (`key={index}`)**:\nSi insertas, eliminas o reordenas elementos en una lista tipada con su \u00edndice num\u00e9rico:\n1. El elemento insertado en la posici\u00f3n 0 adopta el \u00edndice 0, empujando los dem\u00e1s.\n2. React comparar\u00e1 el elemento viejo con el nuevo bas\u00e1ndose en la key `0`, asumiendo err\u00f3neamente que el nodo existente cambi\u00f3 de contenido en lugar de haberse desplazado.\n3. Provoca que el DOM sea mutado destructivamente por completo, se pierda el foco de teclado, y se mezclen estados locales no controlados (como el contenido de inputs o checkboxes seleccionados) entre \u00edtems distintos.",
      codeExample: {
        language: "tsx",
        code: "interface TodoItem {\n  id: string; // Identificador UUID o id de BD \u00fanico e inmutable\n  text: string;\n}\n\nexport function TodoList({ todos }: { todos: TodoItem[] }) {\n  return (\n    <ul>\n      {todos.map((todo) => (\n        // \u2705 CORRECTO: La key es estable e intr\u00ednseca al dato\n        <li key={todo.id} className=\"py-2 border-b border-slate-800\">\n          <input type=\"checkbox\" />\n          <span>{todo.text}</span>\n        </li>\n      ))}\n    </ul>\n  );\n}\n\n// \u274c ANTIPATR\u00d3N: todos.map((todo, index) => <li key={index}>...</li>)\n// Si filtras o eliminas el primer \u00edtem, el checkbox del 2do quedar\u00e1 marcado por error!"
      },
      visualDiagram: {
        id: "diag-react-07",
        title: "Algoritmo de Reconciliaci\u00f3n con Keys Estables vs \u00cdndices Mutables",
        caption: "Las keys \u00fanicas permiten a React reordenar nodos en el DOM; usar \u00edndices provoca mutaciones destructivas y bugs de estado.",
        diagramType: "react-list-keys-diffing"
      },
      interviewTips: {
        whatInterviewersWant: "Que expliques con exactitud qu\u00e9 ocurre cuando se usa `key={index}` al insertar un elemento al inicio de la lista: mutaciones en cascada y bugs de preservaci\u00f3n de estado en componentes con inputs internos.",
        commonPitfalls: ["Usar `key={index}` como soluci\u00f3n r\u00e1pida para silenciar la advertencia de la consola.", "Generar keys aleatorias en cada render (`key={Math.random()}`), provocando la destrucci\u00f3n y remontado continuo del 100% de la lista en cada frame.", "Usar identificadores duplicados, lo que confunde al algoritmo de reconciliaci\u00f3n de Fiber."],
        followUps: [
          "¿Por qué usar el índice como key es problemático?",
          "¿Cómo usarías una key para resetear el estado de un componente?"
        ]
      },
      quiz: {
        question: "\u00bfQu\u00e9 consecuencia cr\u00edtica ocurre al renderizar una lista con 'key={Math.random()}'?",
        options: ["En cada render, todas las keys cambian, obligando a React a destruir y volver a montar desde cero cada nodo en el DOM real.", "Mejora la velocidad de renderizado porque evita colisiones de identificadores.", "React congela la aplicaci\u00f3n al detectar n\u00fameros flotantes.", "Convierte los componentes en Server Components autom\u00e1ticamente."],
        correctIndex: 0,
        explanation: "Al cambiar la key en cada ciclo de render, React asume que son componentes totalmente nuevos, desmontando y destruyendo los nodos existentes del DOM y recre\u00e1ndolos, arruinando el rendimiento y el estado local."
      }
    },
    {
      id: "react-08",
      title: "\u00bfQu\u00e9 es el Virtual DOM y c\u00f3mo funciona la reconciliaci\u00f3n (Fiber)?",
      level: "medio",
      tags: ["Virtual-DOM", "React-Fiber", "Reconciliaci\u00f3n", "Diffing", "Concurrent"],
      response: "El Virtual DOM es un \u00e1rbol inmutable de nodos en memoria (React Elements). React Fiber es el motor de reconciliaci\u00f3n reescrito para permitir renderizado incremental y concurrente. Funciona en dos fases:\n\n1. **Render Phase (As\u00edncrona e interrumpible)**: Compara el \u00e1rbol 'current' con el nuevo \u00e1rbol 'workInProgress' usando un algoritmo heur\u00edstico O(n), calculando la lista de mutaciones. Puede pausarse para ceder tiempo al navegador.\n2. **Commit Phase (S\u00edncrona)**: Aplica las mutaciones en lote al DOM real y ejecuta los efectos visuales.",
      codeExample: {
        language: "tsx",
        code: "// Modelo estructural de un nodo Fiber en memoria:\ninterface FiberNode {\n  tag: number;                 // Componente funcional, host element (div), etc.\n  key: null | string;         // Para reconciliaci\u00f3n de listas\n  type: any;                  // Funci\u00f3n del componente o tag string\n  stateNode: HTMLElement | null; // Instancia en el DOM real\n  child: FiberNode | null;    // Primer hijo (Lista enlazada)\n  sibling: FiberNode | null;  // Siguiente hermano\n  return: FiberNode | null;   // Nodo padre\n  alternate: FiberNode | null;// Conexi\u00f3n entre Current y WorkInProgress\n  flags: number;              // Banderas de mutaci\u00f3n ('Placement', 'Update', 'Deletion')\n}\n\n// Fiber convierte la recursi\u00f3n del \u00e1rbol en una lista enlazada interrumpible\n// que puede pausar el diffing sin perder el cursor de trabajo."
      },
      visualDiagram: {
        id: "diag-react-08",
        title: "Reconciliaci\u00f3n Fiber: Current vs WorkInProgress",
        caption: "Render Phase (as\u00edncrono/diffing) vs Commit Phase (mutaci\u00f3n s\u00edncrona del DOM)",
        diagramType: "react-fiber-reconciliation"
      },
      interviewTips: {
        whatInterviewersWant: "Saber que Fiber introdujo dos fases (Render y Commit) y que el Virtual DOM no es solo diffing, sino scheduling de prioridades concurrentes.",
        commonPitfalls: ["Creer que la reconciliaci\u00f3n entera bloquea el hilo principal (en React 18/19 la Render Phase es interrumpible con concurrent features).", "Confundir la Render Phase (c\u00e1lculo) con la Commit Phase (escritura en pantalla).", "Asumir que el Virtual DOM es inherentemente m\u00e1s r\u00e1pido que el DOM directo; su ventaja es la programaci\u00f3n declarativa con mutaciones m\u00ednimas calculadas."],
        followUps: [
          "¿Qué heurísticas usa el algoritmo de diffing?",
          "¿Es el Virtual DOM siempre más rápido que manipular el DOM directamente?"
        ]
      },
      quiz: {
        question: "\u00bfCu\u00e1l de las dos fases del motor Fiber de React es s\u00edncrona e ininterrumpible para garantizar que no haya parpadeos en el DOM?",
        options: ["Commit Phase (Mutaci\u00f3n del DOM)", "Render Phase (Diffing)", "Scheduler Phase", "Compilation Phase"],
        correctIndex: 0,
        explanation: "La Commit Phase es estrictamente s\u00edncrona para que todas las mutaciones del DOM se pinten en un \u00fanico frame sin inconsistencias visuales ni parpadeos (tearing)."
      }
    },
    {
      id: "react-09",
      title: "\u00bfPor qu\u00e9 NO se debe usar useEffect para fetching de datos en apps modernas?",
      level: "medio",
      tags: ["useEffect", "TanStack-Query", "Data-Fetching", "Race-Conditions", "Waterfalls"],
      response: "El uso de `useEffect` para el fetching de datos fue el patr\u00f3n m\u00e1s extendido en React tradicional, pero hoy se considera un **grave antipatr\u00f3n de arquitectura** documentado oficialmente por el equipo de React por m\u00faltiples razones cr\u00edticas:\n\n1. **Condiciones de Carrera (Race Conditions)**: Si el usuario cambia r\u00e1pidamente de p\u00e1gina o filtros, las respuestas as\u00edncronas pueden resolverse en orden inverso al solicitado, sobreescribiendo el estado m\u00e1s reciente con datos antiguos obsoletos.\n2. **Network Waterfalls (Cascadas de Red)**: Si los componentes padre e hijos hacen fetching en sus respectivos `useEffect`, la red espera a que el padre monte y termine para apenas comenzar el fetch del hijo, degradando la carga en segundos.\n3. **Cero Cach\u00e9 y Deduplicaci\u00f3n**: Cada desmontaje y montaje vuelve a disparar la petici\u00f3n desde cero, saturando el backend.\n4. **Renders Dobles en StrictMode**: En desarrollo, React ejecuta los efectos dos veces para verificar idempotencia.\n\n**El Est\u00e1ndar Enterprise**: Se debe utilizar **TanStack Query (React Query)** en Client Components o Server Components (RSC) y el hook nativo `use()` con Suspense en React 19.",
      codeExample: {
        language: "tsx",
        code: "// \u274c ANTIPATR\u00d3N: useEffect para fetching (Fr\u00e1gil y con race conditions)\nfunction BadUserView({ userId }: { userId: string }) {\n  const [data, setData] = useState(null);\n  useEffect(() => {\n    fetch(`/api/users/${userId}`)\n      .then(res => res.json())\n      .then(d => setData(d)); // Si userId cambia antes de responder: Race Condition!\n  }, [userId]);\n}\n\n// \u2705 EST\u00c1NDAR ENTERPRISE: TanStack Query v5\nimport { useQuery } from \"@tanstack/react-query\";\n\nexport function UserView({ userId }: { userId: string }) {\n  const { data: user, isLoading, error } = useQuery({\n    queryKey: [\"users\", userId],\n    queryFn: () => fetchUserById(userId),\n    staleTime: 1000 * 60 * 5, // 5 minutos de cach\u00e9 fresca instant\u00e1nea\n  });\n\n  if (isLoading) return <Skeleton />;\n  if (error) return <ErrorMessage error={error} />;\n  return <h1>{user.name}</h1>;\n}"
      },
      visualDiagram: {
        id: "diag-react-09",
        title: "Antipatr\u00f3n useEffect vs Arquitectura TanStack Query",
        caption: "useEffect genera race conditions y waterfalls; TanStack Query gestiona cach\u00e9, deduplicaci\u00f3n y refetching en background.",
        diagramType: "react-useeffect-vs-tanstack-query"
      },
      interviewTips: {
        whatInterviewersWant: "Demostrar alineaci\u00f3n con el protocolo de arquitectura oficial de React: separar claramente el Server State del Client State y argumentar las race conditions con abort controllers.",
        commonPitfalls: ["Almacenar datos de APIs en `useState` o Redux manualmente.", "No limpiar peticiones pendientes en `useEffect` con `AbortController` si se fuerza el uso de efectos.", "Ignorar los beneficios del patr\u00f3n Stale-While-Revalidate en la percepci\u00f3n de velocidad del usuario."],
        followUps: [
          "¿Qué race conditions aparecen al hacer fetch en useEffect?",
          "¿Qué te aporta TanStack Query (caché, deduplicación, reintentos)?"
        ]
      },
      quiz: {
        question: "\u00bfQu\u00e9 problema grave ocurre cuando un useEffect hace fetching basado en un id din\u00e1mico sin control de cancelaci\u00f3n?",
        options: ["Race Conditions: una respuesta lenta de una b\u00fasqueda anterior puede llegar despu\u00e9s de la actual y sobreescribir los datos correctos.", "El navegador bloquea la tarjeta de red por violaci\u00f3n de CORS.", "TypeScript emite un error de tipo incompatible en runtime.", "El servidor descarta autom\u00e1ticamente los paquetes TCP."],
        correctIndex: 0,
        explanation: "Al no sincronizar ni cancelar peticiones previas con AbortController, las respuestas de red desordenadas provocan Race Conditions donde datos obsoletos sobreescriben la UI actual."
      }
    },
    {
      id: "react-10",
      title: "\u00bfQu\u00e9 diferencia hay entre useMemo, useCallback y React.memo?",
      level: "medio",
      tags: ["useMemo", "useCallback", "React.memo", "Memoization", "Performance"],
      response: "Estos tres mecanismos constituyen el tr\u00edo de optimizaci\u00f3n manual de renderizado en React, operando en distintos niveles de granularidad:\n\n1. **`React.memo(Componente, [arePropsEqual])` (HOC a nivel Componente)**:\n   - Envuelve un componente funcional completo.\n   - Antes de re-renderizarlo, compara sus props actuales con las anteriores (comparaci\u00f3n superficial / shallow equal). Si las props no cambiaron, **omite el re-renderizado del componente** y reutiliza el \u00faltimo DOM virtual generado.\n\n2. **`useMemo(() => c\u00e1lculo, [deps])` (A nivel Valor Calculado)**:\n   - Ejecuta una funci\u00f3n de c\u00f3mputo intensivo y **memoriza su valor retornado**.\n   - Solo vuelve a ejecutar el c\u00e1lculo si alguna dependencia en el array cambia.\n\n3. **`useCallback(fn, [deps])` (A nivel Referencia de Funci\u00f3n)**:\n   - **Memoriza la referencia en memoria de una funci\u00f3n** entre renders.\n   - Equivale exactamente a `useMemo(() => fn, [deps])`.\n   - Su prop\u00f3sito primordial es evitar que funciones recreadas en cada render rompan la igualdad referencial de componentes hijos envueltos en `React.memo`.",
      codeExample: {
        language: "tsx",
        code: "// 1. React.memo protege al hijo de re-renders innecesarios:\nconst ExpensiveList = React.memo(function ExpensiveList({\n  items,\n  onItemClick\n}: {\n  items: string[];\n  onItemClick: (item: string) => void;\n}) {\n  console.log(\"Renderizando ExpensiveList\");\n  return <ul>{items.map(i => <li key={i} onClick={() => onItemClick(i)}>{i}</li>)}</ul>;\n});\n\n// 2. useMemo y useCallback estabilizan referencias en el padre:\nexport function ParentDashboard({ rawData, filter }: { rawData: string[]; filter: string }) {\n  // useMemo: Solo filtra cuando rawData o filter cambian\n  const filteredItems = useMemo(() => {\n    return rawData.filter(d => d.includes(filter));\n  }, [rawData, filter]);\n\n  // useCallback: Preserva la misma referencia de funci\u00f3n en cada render\n  const handleItemClick = useCallback((item: string) => {\n    console.log(\"Seleccionado:\", item);\n  }, []); // Sin dependencias: misma instancia siempre\n\n  return <ExpensiveList items={filteredItems} onItemClick={handleItemClick} />;\n}"
      },
      visualDiagram: {
        id: "diag-react-10",
        title: "Tr\u00edo de Memoizaci\u00f3n: React.memo vs useMemo vs useCallback",
        caption: "React.memo evita re-renderizar componentes hijos; useMemo estabiliza c\u00e1lculos y useCallback preserva referencias de funciones.",
        diagramType: "react-memoization-trio"
      },
      interviewTips: {
        whatInterviewersWant: "Que expliques la interdependencia: `useCallback` solo cobra verdadero sentido cuando se pasa a componentes optimizados con `React.memo` o arrays de dependencias de otros hooks, y que abusar de ellos a\u00f1ade coste de memoria innecesario.",
        commonPitfalls: ["Envolver cada funci\u00f3n en `useCallback` por defecto sin medir si existe un problema de rendimiento real.", "Pasar una funci\u00f3n sin `useCallback` a un componente con `React.memo` (la nueva referencia rompe la memoizaci\u00f3n siempre).", "Olvidar dependencias cr\u00edticas en el array `[deps]`, produciendo cierres l\u00e9xicos obsoletos (stale closures)."],
        followUps: [
          "¿Cuándo es contraproducente memoizar?",
          "¿Cómo cambia este panorama con el React Compiler?"
        ]
      },
      quiz: {
        question: "\u00bfCu\u00e1l es la relaci\u00f3n t\u00e9cnica exacta entre 'useCallback(fn, deps)' y 'useMemo'?",
        options: ["useCallback(fn, deps) equivale exactamente a useMemo(() => fn, deps).", "useCallback solo funciona en entornos de servidor.", "useMemo crea hilos secundarios en segundo plano.", "useCallback re-renderiza el \u00e1rbol de componentes autom\u00e1ticamente."],
        correctIndex: 0,
        explanation: "Internamente en el c\u00f3digo de React, useCallback(fn, deps) es una abstracci\u00f3n conveniente de useMemo(() => fn, deps), almacenando la funci\u00f3n en lugar del resultado de su invocaci\u00f3n."
      }
    },
    {
      id: "react-11",
      title: "\u00bfQu\u00e9 es Context API y cu\u00e1ndo usar Zustand en su lugar?",
      level: "medio",
      tags: ["Context-API", "Zustand", "State-Management", "Selectors", "Atomic-State"],
      response: "La elecci\u00f3n entre **React Context** y una biblioteca de estado at\u00f3mico como **Zustand** se basa en la **frecuencia de cambio de los datos y el rendimiento de renderizado**:\n\n1. **React Context API (Baja Frecuencia)**:\n   - Mecanismo nativo de inyecci\u00f3n de dependencias.\n   - **Limitaci\u00f3n de rendimiento cr\u00edtica**: Context **no admite selectores at\u00f3micos**. Cuando el valor del Provider cambia, **absolutamente todos los componentes consumidores se re-renderizan**, incluso si solo le\u00edan una propiedad que no cambi\u00f3.\n   - **Caso de uso \u00f3ptimo**: Datos casi est\u00e1ticos o de muy baja frecuencia de actualizaci\u00f3n: tema visual (oscuro/claro), configuraci\u00f3n de idioma (i18n) o usuario autenticado actual.\n\n2. **Zustand (Alta Frecuencia / Client State)**:\n   - Gestor de estado cliente ligero, desacoplado y fuera del \u00e1rbol de React.\n   - **Suscripciones At\u00f3micas por Selector**: Permite que los componentes se suscriban \u00fanicamente al fragmento de estado exacto que consumen (`useStore(s => s.cartCount)`), garantizando que solo se re-rendericen cuando ese valor espec\u00edfico muta.\n   - **Caso de uso \u00f3ptimo**: Carrito de compras, formularios multipaso complejos, paneles con gr\u00e1ficos en tiempo real, men\u00fas interactivos y filtros din\u00e1micos.",
      codeExample: {
        language: "tsx",
        code: "// Store de Zustand Enterprise con TypeScript:\nimport { create } from \"zustand\";\n\ninterface UIStore {\n  sidebarOpen: boolean;\n  themeMode: \"light\" | \"dark\";\n  toggleSidebar: () => void;\n}\n\nexport const useUIStore = create<UIStore>((set) => ({\n  sidebarOpen: false,\n  themeMode: \"dark\",\n  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),\n}));\n\n// Consumidor 1: Solo se re-renderiza si cambia 'sidebarOpen' (0 re-renders por themeMode!)\nexport function SidebarToggle() {\n  const sidebarOpen = useUIStore((s) => s.sidebarOpen);\n  const toggleSidebar = useUIStore((s) => s.toggleSidebar);\n  return <button onClick={toggleSidebar}>Sidebar: {sidebarOpen ? \"Abierto\" : \"Cerrado\"}</button>;\n}"
      },
      visualDiagram: {
        id: "diag-react-11",
        title: "React Context (Re-renders Globales) vs Zustand (Suscripci\u00f3n At\u00f3mica)",
        caption: "Context re-renderiza a todos sus consumidores; Zustand utiliza selectores at\u00f3micos para aislar actualizaciones a 60 FPS.",
        diagramType: "react-context-vs-zustand"
      },
      interviewTips: {
        whatInterviewersWant: "Que demuestres criterio t\u00e9cnico: descartar Redux por exceso de boilerplate en proyectos nuevos, argumentar el problema de re-render en cascada de Context API y elegir Zustand para estado global cliente.",
        commonPitfalls: ["Usar React Context como store global de alta frecuencia (ej. animaciones o inputs de texto), degradando dr\u00e1sticamente el rendimiento.", "Envolver la aplicaci\u00f3n entera en 15 Context Providers anidados (el infame 'Provider Hell').", "Consumir todo el store de Zustand sin selectores (`const store = useStore()`), perdiendo la optimizaci\u00f3n at\u00f3mica."],
        followUps: [
          "¿Por qué un cambio de valor en Context re-renderiza a todos sus consumidores?",
          "¿Cómo evitan los selectores de Zustand re-renders innecesarios?"
        ]
      },
      quiz: {
        question: "\u00bfPor qu\u00e9 React Context no es adecuado para gestionar estados globales de alta frecuencia de actualizaci\u00f3n?",
        options: ["Porque carece de un sistema de selectores at\u00f3micos integrado, obligando a re-renderizar a todos los componentes consumidores ante cualquier cambio en el Provider.", "Porque los Providers de Context no admiten objetos complejos.", "Porque Context requiere que la aplicaci\u00f3n se compile en Node.js.", "Porque la API de Context fue declarada obsoleta en React 19."],
        correctIndex: 0,
        explanation: "En Context API, cualquier cambio en el valor del Provider notifica a todos los componentes que usen useContext, provocando renders innecesarios en consumidores que no utilizan la propiedad alterada."
      }
    },
    {
      id: "react-12",
      title: "\u00bfQu\u00e9 es un Error Boundary y c\u00f3mo se implementa?",
      level: "medio",
      tags: ["Error-Boundary", "Resilience", "Component-Did-Catch", "Fallback-UI", "Crash-Prevention"],
      response: "Un **Error Boundary** es un componente especial de React que intercepta errores de JavaScript no capturados ocurridos durante el **renderizado**, en **m\u00e9todos de ciclo de vida** o en **constructores** de todo su sub\u00e1rbol de componentes hijos. En lugar de permitir que la pantalla entera de la aplicaci\u00f3n colapse en blanco (White Screen of Death), captura la excepci\u00f3n y renderiza una interfaz visual de rescate (Fallback UI).\n\n**Implementaci\u00f3n**:\nPor razones hist\u00f3ricas de la arquitectura de React, los Error Boundaries deben implementarse mediante **componentes de clase** que definan al menos uno de estos m\u00e9todos:\n1. `static getDerivedStateFromError(error)`: Renderiza la UI de fallback de forma s\u00edncrona.\n2. `componentDidCatch(error, errorInfo)`: Registra el error en servicios de telemetr\u00eda (como Sentry, Datadog o LogRocket).\n\nEn proyectos modernos se utiliza la librer\u00eda oficial est\u00e1ndar **`react-error-boundary`**, que expone componentes funcionales con callbacks y reseteo de estado.",
      codeExample: {
        language: "tsx",
        code: "import React, { Component, ErrorInfo, ReactNode } from \"react\";\n\ninterface Props {\n  children: ReactNode;\n  fallback?: ReactNode;\n}\n\ninterface State {\n  hasError: boolean;\n}\n\nexport class ErrorBoundary extends Component<Props, State> {\n  state: State = { hasError: false };\n\n  static getDerivedStateFromError(_: Error): State {\n    return { hasError: true }; // Actualiza el estado para mostrar el fallback en el siguiente render\n  }\n\n  componentDidCatch(error: Error, errorInfo: ErrorInfo) {\n    console.error(\"[Telemetry] Error capturado en sub\u00e1rbol:\", error, errorInfo);\n  }\n\n  render() {\n    if (this.state.hasError) {\n      return this.props.fallback || (\n        <div className=\"p-6 rounded-lg bg-red-950 border border-red-800 text-red-200\">\n          <h2>Se produjo un error al cargar esta secci\u00f3n.</h2>\n          <button onClick={() => this.setState({ hasError: false })} className=\"mt-2 px-3 py-1 bg-red-800 rounded\">\n            Reintentar\n          </button>\n        </div>\n      );\n    }\n    return this.props.children;\n  }\n}"
      },
      visualDiagram: {
        id: "diag-react-12",
        title: "Aislamiento y Contenci\u00f3n de Fallos con Error Boundaries",
        caption: "Un error en un sub\u00e1rbol es contenido por el boundary, preservando el resto de la aplicaci\u00f3n 100% activa.",
        diagramType: "react-error-boundary-tree"
      },
      interviewTips: {
        whatInterviewersWant: "Saber qu\u00e9 errores NO captura un Error Boundary: NO captura errores en controladores de eventos (onClick), c\u00f3digo as\u00edncrono (setTimeout, promises de fetch) ni errores del propio Error Boundary.",
        commonPitfalls: ["Creer que un Error Boundary captura errores dentro de un `onClick={() => { throw new Error(); }}` (esos se manejan con try/catch est\u00e1ndar).", "Colocar un \u00fanico Error Boundary en la ra\u00edz absoluta de la app: si falla un widget secundario, se oculta toda la aplicaci\u00f3n.", "No implementar mecanismos de reintento o telemetr\u00eda para notificar a observabilidad."],
        followUps: [
          "¿Qué errores no captura un Error Boundary?",
          "¿Cómo reportarías errores capturados a Sentry?"
        ]
      },
      quiz: {
        question: "\u00bfCu\u00e1l de los siguientes errores NO es capturado por un Error Boundary de React?",
        options: ["Errores ocurridos dentro de manejadores de eventos como 'onClick' o callbacks as\u00edncronos.", "Errores en la funci\u00f3n de render de un componente hijo.", "Errores en constructores de clases hijas.", "Errores durante el montaje del DOM virtual de los descendientes."],
        correctIndex: 0,
        explanation: "Los Error Boundaries solo capturan errores ocurridos durante el proceso de renderizado del \u00e1rbol. Los eventos como 'onClick' ocurren fuera del render loop y deben protegerse con bloques try/catch est\u00e1ndar."
      }
    },
    {
      id: "react-13",
      title: "\u00bfQu\u00e9 es Suspense y React.lazy para Code Splitting?",
      level: "medio",
      tags: ["Suspense", "React.lazy", "Code-Splitting", "Dynamic-Import", "Bundle-Optimization"],
      response: "`React.lazy()` y `<Suspense>` forman la dupla can\u00f3nica de React para implementar **Divisi\u00f3n de C\u00f3digo (Code Splitting)** basada en componentes a trav\u00e9s de importaciones din\u00e1micas (`import()`).\n\n- **`React.lazy(() => import('./Modulo'))`**: Permite cargar un componente de forma diferida en un archivo JavaScript (chunk) independiente. En lugar de incluir todo el c\u00f3digo en el bundle inicial, el navegador solo descarga ese fragmento de red cuando el componente realmente se va a renderizar en pantalla.\n- **`<Suspense fallback={<Skeleton />}>`**: Act\u00faa como un boundary de coordinaci\u00f3n as\u00edncrona. Si alg\u00fan componente dentro de su sub\u00e1rbol suspende su renderizado (porque su chunk de c\u00f3digo o sus datos a\u00fan est\u00e1n viajando por la red), React pausa la visualizaci\u00f3n y renderiza el contenido visual definido en `fallback` de manera fluida y sin parpadeos.",
      codeExample: {
        language: "tsx",
        code: "import { lazy, Suspense } from \"react\";\n\n// El componente pesado AnalyticsDashboard se emite en un chunk separado:\nconst AnalyticsDashboard = lazy(() => import(\"./features/analytics/AnalyticsDashboard\"));\n\nexport function AdminPanel() {\n  return (\n    <div className=\"space-y-6\">\n      <h1>Panel de Control</h1>\n      \n      {/* Suspense muestra el Skeleton hasta que el chunk se descargue y ejecute */}\n      <Suspense fallback={<div className=\"h-64 animate-pulse bg-slate-800 rounded-lg\" />}>\n        <AnalyticsDashboard />\n      </Suspense>\n    </div>\n  );\n}"
      },
      visualDiagram: {
        id: "diag-react-13",
        title: "Code Splitting y Carga Din\u00e1mica con React.lazy y Suspense",
        caption: "Descarga de chunks bajo demanda sobre la red con presentaci\u00f3n fluida de fallbacks sin bloqueo de la UI.",
        diagramType: "react-suspense-code-splitting"
      },
      interviewTips: {
        whatInterviewersWant: "Entender si usas Code Splitting en rutas y componentes pesados (gr\u00e1ficos, editores enriquecidos, modales) para reducir el First Contentful Paint (FCP) y el bundle size inicial.",
        commonPitfalls: ["Usar `React.lazy` sin envolverlo en un `<Suspense>`, lo que lanza un error fatal en tiempo de render.", "Hacer code-splitting excesivo y granular en componentes microsc\u00f3picos de 20 l\u00edneas (genera demasiadas peticiones HTTP peque\u00f1as innecesarias).", "Olvidar que `React.lazy` requiere exportaciones por defecto (`export default`)."],
        followUps: [
          "¿Cómo evitarías los spinners en cascada (waterfalls) con varios Suspense?",
          "¿Cómo precargarías un componente lazy antes de que se necesite?"
        ]
      },
      quiz: {
        question: "\u00bfQu\u00e9 requisito sint\u00e1ctico debe cumplir un componente para poder ser cargado mediante 'React.lazy()'?",
        options: ["Debe ser la exportaci\u00f3n por defecto (default export) del m\u00f3dulo din\u00e1mico importado.", "Debe ser obligatoriamente un componente de clase.", "Debe implementar la interfaz de Redux Toolkit.", "Debe exportar una constante llamada 'renderChunk'."],
        correctIndex: 0,
        explanation: "React.lazy() asume que la promesa devuelta por import() resuelve un m\u00f3dulo que posee una exportaci\u00f3n default con un componente de React v\u00e1lido."
      }
    },
    {
      id: "react-14",
      title: "\u00bfQu\u00e9 es el Strict Mode y por qu\u00e9 ejecuta efectos dos veces en desarrollo?",
      level: "medio",
      tags: ["Strict-Mode", "Idempotence", "Effect-Cleanup", "Double-Invoke", "Diagnostics"],
      response: "`<React.StrictMode>` es un componente de diagn\u00f3stico que no produce ning\u00fan elemento visible en el DOM pero activa comprobaciones y advertencias estrictas para su sub\u00e1rbol exclusivamente en **modo desarrollo**.\n\n**Por qu\u00e9 ejecuta efectos y montajes dos veces (Double Invocation)**:\nDesde React 18, StrictMode deliberadamente simula un ciclo de:\n**Montar \u2794 Desmontar \u2794 Volver a Montar**\n\nEste comportamiento tiene como objetivo forzar a los desarrolladores a escribir **efectos limpios e idempotentes**: si tu `useEffect` abre una conexi\u00f3n WebSocket, suscribe un event listener o manipula el DOM, debe proveer obligatoriamente una **funci\u00f3n de limpieza (cleanup function)** que deshaga exactamente lo creado. Si tu c\u00f3digo falla o duplica conexiones en desarrollo, significa que ten\u00eda un memory leak latente que habr\u00eda estallado en producci\u00f3n ante re-renders o navegaci\u00f3n entre p\u00e1ginas.",
      codeExample: {
        language: "tsx",
        code: "export function LiveChatSocket({ channelId }: { channelId: string }) {\n  useEffect(() => {\n    // 1. Setup: Se ejecuta en el montaje\n    const socket = new WebSocket(`wss://api.cabuweb.com/chat/${channelId}`);\n    socket.onmessage = (event) => console.log(\"Mensaje recibido:\", event.data);\n\n    // 2. Cleanup OBLIGATORIO para sobrevivir a React.StrictMode e idempotencia:\n    return () => {\n      // Si no cierras el socket, StrictMode revelar\u00e1 2 conexiones fantasma abiertas!\n      socket.close();\n    };\n  }, [channelId]);\n\n  return <div>Chat en vivo conectado</div>;\n}"
      },
      visualDiagram: {
        id: "diag-react-14",
        title: "Ciclo de Diagn\u00f3stico de Idempotencia en React.StrictMode",
        caption: "Montaje \u2794 Limpieza simulada \u2794 Remontaje en desarrollo para garantizar efectos puros sin fugas de memoria.",
        diagramType: "react-strict-mode-double-invoke"
      },
      interviewTips: {
        whatInterviewersWant: "Saber que comprendes que la doble ejecuci\u00f3n no es un 'bug de React' sino una feature de diagn\u00f3stico vital para preparar la app para caracter\u00edsticas concurrentes y navegaci\u00f3n r\u00e1pida sin memory leaks.",
        commonPitfalls: ["Intentar hackear el doble montaje con un `useRef(false)` para silenciar la segunda ejecuci\u00f3n en vez de escribir la funci\u00f3n de limpieza correcta.", "Creer que la doble ejecuci\u00f3n ocurre en producci\u00f3n (en modo producci\u00f3n solo se ejecuta una \u00fanica vez).", "Olvidar limpiar `addEventListener`, timers `setInterval`, o suscripciones a observables en el return del efecto."],
        followUps: [
          "¿Qué bugs ayuda a detectar el doble montaje en desarrollo?",
          "¿Afecta Strict Mode a producción?"
        ]
      },
      quiz: {
        question: "\u00bfPor qu\u00e9 React.StrictMode monta, desmonta y remonta componentes dos veces en modo de desarrollo?",
        options: ["Para verificar que las funciones de limpieza (cleanups) de los efectos sean idempotentes y prevenir fugas de memoria en producci\u00f3n.", "Para probar la velocidad de la tarjeta gr\u00e1fica del usuario.", "Para forzar la compilaci\u00f3n en caliente de Webpack.", "Para duplicar los logs en la pesta\u00f1a de Performance de Chrome."],
        correctIndex: 0,
        explanation: "El doble montaje en desarrollo garantiza que los efectos secundarios tengan un cleanup sim\u00e9trico que deje el entorno limpio, previniendo memory leaks y preparando la app para navegaci\u00f3n concurrente."
      }
    },
    {
      id: "react-15",
      title: "\u00bfQu\u00e9 es el nuevo React Compiler (React Forget) en React 19?",
      level: "avanzado",
      tags: ["React-19", "React-Compiler", "React-Forget", "Auto-Memoization", "AST-Optimization"],
      response: "El **React Compiler** (originalmente conocido como *React Forget* y formalizado como parte del ecosistema React 19) es un compilador optimizador que analiza el c\u00f3digo fuente en tiempo de compilaci\u00f3n para **insertar memoizaci\u00f3n autom\u00e1tica de grano fino** a nivel de expresiones, valores y nodos JSX.\n\nTradicionalmente, React requer\u00eda que los ingenieros optimizaran manualmente el c\u00f3digo mediante `useMemo`, `useCallback` y `React.memo` para preservar la igualdad referencial y evitar re-renders superfluos, lo que introduc\u00eda una carga cognitiva inmensa y arrays de dependencias propensos a errores.\n\nEl React Compiler entiende la sem\u00e1ntica estricta de las reglas de JavaScript y los componentes de React: infiere cu\u00e1ndo los valores son inmutables y memoriza autom\u00e1ticamente los bloques de c\u00f3digo necesarios. Como resultado, **elimina la necesidad manual de `useMemo` y `useCallback` en la gran mayor\u00eda de casos**, permitiendo escribir c\u00f3digo idiom\u00e1tico y limpio con rendimiento \u00f3ptimo garantizado.",
      codeExample: {
        language: "tsx",
        code: "// C\u00f3digo escrito por el desarrollador en React 19 (Idiom\u00e1tico y limpio):\nexport function ProductFilter({ items, query }: { items: Product[]; query: string }) {\n  // Sin useMemo ni useCallback manuales:\n  const filtered = items.filter(p => p.name.includes(query));\n  \n  const handleSelect = (id: string) => {\n    trackSelection(id);\n  };\n\n  return <ProductList items={filtered} onSelect={handleSelect} />;\n}\n\n// Lo que el React Compiler genera internamente en el bundle:\n// Inserta comprobaciones de cach\u00e9 en AST ($_memo_cache) que memorizan autom\u00e1ticamente\n// tanto el array 'filtered' como la referencia de 'handleSelect' y el JSX de 'ProductList'."
      },
      visualDiagram: {
        id: "diag-react-15",
        title: "Optimizaci\u00f3n en AST: Memoizaci\u00f3n Manual vs React 19 Compiler",
        caption: "El compilador analiza el \u00e1rbol sint\u00e1ctico e inserta guardas de cach\u00e9 autom\u00e1ticas sin sobrecarga cognitiva.",
        diagramType: "react-compiler-auto-memoization"
      },
      interviewTips: {
        whatInterviewersWant: "Conocimiento de la vanguardia de React 19: explicar que la memoizaci\u00f3n manual es un parche del pasado y que el futuro es escribir JavaScript idiom\u00e1tico siguiendo estrictamente las reglas de pureza para que el compilador optimice.",
        commonPitfalls: ["Pensar que el compilador permite mutar variables directamente: el compilador exige estricta inmutabilidad y componentes puros.", "Seguir saturando componentes nuevos de `useCallback` sin motivo cuando el compilador ya est\u00e1 activo.", "No utilizar el linter oficial `eslint-plugin-react-compiler` para verificar la conformidad del c\u00f3digo."],
        followUps: [
          "¿Qué reglas debe cumplir el código para que el compilador lo optimice?",
          "¿Sigue siendo necesario useMemo con el React Compiler?"
        ]
      },
      quiz: {
        question: "\u00bfCu\u00e1l es el objetivo primordial del nuevo React Compiler introducido con React 19?",
        options: ["Automatizar la memoizaci\u00f3n a nivel de expresiones y JSX en tiempo de compilaci\u00f3n, eliminando la necesidad de useMemo y useCallback manuales.", "Compilar los componentes de React a WebAssembly binario.", "Reemplazar el motor V8 de Google Chrome por una m\u00e1quina virtual interna.", "Forzar el uso exclusivo de componentes basados en clases."],
        correctIndex: 0,
        explanation: "El React Compiler analiza el c\u00f3digo est\u00e1ticamente y genera c\u00f3digo altamente optimizado con memoizaciones internas autom\u00e1ticas, liberando al desarrollador de tener que escribir useMemo o useCallback."
      }
    },
    {
      id: "react-16",
      title: "\u00bfC\u00f3mo funciona el nuevo hook `use()` en React 19?",
      level: "avanzado",
      tags: ["React-19", "use-hook", "Promises", "Conditional-Hooks", "Suspense-Streaming"],
      response: "El hook `use()` es una primitiva fundamental introducida en React 19 dise\u00f1ada para **leer el valor de un recurso as\u00edncrono (una Promise) o un Context** de manera declarativa y flexible.\n\nPosee dos diferencias revolucionarias respecto a los hooks tradicionales:\n1. **Lectura Condicional**: A diferencia de todos los dem\u00e1s hooks, `use()` **se puede invocar condicionalmente dentro de bloques `if` o bucles `for`**, lo que rompe la restricci\u00f3n hist\u00f3rica del top-level exclusivamente para esta primitiva.\n2. **Integraci\u00f3n Nativa con `<Suspense>`**: Cuando pasas una Promise a `use(promise)`, React **suspende autom\u00e1ticamente el renderizado del componente** hasta que la promesa se resuelve, delegando la visualizaci\u00f3n al `<Suspense fallback={<Spinner />}>` padre. Si la promesa se rechaza, delega el error en el Error Boundary m\u00e1s cercano.",
      codeExample: {
        language: "tsx",
        code: "import { use, Suspense } from \"react\";\n\n// Componente consumidor con React 19:\nfunction UserProfile({ userPromise }: { userPromise: Promise<User> }) {\n  // use() suspende la renderizaci\u00f3n hasta que userPromise se cumpla:\n  const user = use(userPromise);\n\n  return (\n    <div className=\"p-4 rounded bg-slate-900 border border-slate-800\">\n      <h2 className=\"text-xl font-bold\">{user.name}</h2>\n      <p className=\"text-slate-400\">{user.email}</p>\n    </div>\n  );\n}\n\n// Invocaci\u00f3n desde el padre con boundary de Suspense:\nexport function ProfilePage() {\n  const promise = fetchUserApi(\"101\"); // Se dispara la promesa (Render-as-You-Fetch)\n\n  return (\n    <Suspense fallback={<p className=\"animate-pulse\">Cargando perfil con use()...</p>}>\n      <UserProfile userPromise={promise} />\n    </Suspense>\n  );\n}"
      },
      visualDiagram: {
        id: "diag-react-16",
        title: "Lectura As\u00edncrona con el Hook use() y Suspense en React 19",
        caption: "use() permite lectura condicional y suspende la ejecuci\u00f3n hasta la resoluci\u00f3n de promesas sin useEffect.",
        diagramType: "react-use-hook-promise-suspense"
      },
      interviewTips: {
        whatInterviewersWant: "Saber que conoces las dos grandes novedades de `use()`: la posibilidad de ser llamado condicionalmente y su integraci\u00f3n directa con Suspense para Promises y Context.",
        commonPitfalls: ["Crear una nueva Promise dentro de la funci\u00f3n del componente en cada render (`use(fetch())`), lo que generar\u00eda un bucle infinito de re-fetch (la promesa debe originarse en un Server Component, librer\u00eda o cach\u00e9).", "Pensar que `use()` sustituye a `useState` para mutaciones locales interactivas.", "Olvidar envolver el componente en un `<Suspense>` padre cuando se leen promesas con `use()`."],
        followUps: [
          "¿Por qué use() sí puede llamarse condicionalmente?",
          "¿Qué problema aparece si creas la promesa dentro del render?"
        ]
      },
      quiz: {
        question: "\u00bfQu\u00e9 regla tradicional de los hooks de React rompe de forma intencional el nuevo hook 'use()' en React 19?",
        options: ["Puede invocarse de forma condicional dentro de estructuras 'if' o bucles 'for'.", "Puede ejecutarse fuera de la aplicaci\u00f3n de React en scripts bash.", "No requiere ser importado desde 'react'.", "Permite mutar los props de los componentes directamente."],
        correctIndex: 0,
        explanation: "use() es el \u00fanico hook en React dise\u00f1ado para poder ser invocado condicionalmente dentro de bloques 'if' o loops, permitiendo leer contextos o promesas solo cuando se cumplen ciertas condiciones."
      }
    },
    {
      id: "react-17",
      title: "\u00bfQu\u00e9 son los Hooks de Acciones `useActionState` y `useFormStatus`?",
      level: "avanzado",
      tags: ["React-19", "useActionState", "useFormStatus", "Server-Actions", "Form-Handling"],
      response: "En React 19, las **Acciones (Actions)** estandarizan el manejo de env\u00edos de formularios y transiciones as\u00edncronas de datos, eliminando por completo el boilerplate manual de `isSubmitting`, `errors` y `useState`:\n\n1. **`useActionState(actionFn, initialState)`**:\n   - Gestiona el ciclo completo de una mutaci\u00f3n as\u00edncrona.\n   - Retorna una tupla: `[state, formAction, isPending]`.\n   - `formAction` se pasa directamente a la prop `<form action={formAction}>`.\n   - React maneja autom\u00e1ticamente el estado de carga (`isPending`) y almacena el resultado devuelto en `state`.\n\n2. **`useFormStatus()`**:\n   - Hook contextual que se invoca dentro de cualquier componente hijo colocado en el interior de un `<form>`.\n   - Proporciona acceso a `{ pending, data, method }` del formulario padre sin necesidad de pasar props manualmente ni crear contextos adicionales.",
      codeExample: {
        language: "tsx",
        code: "// Definici\u00f3n de la acci\u00f3n de actualizaci\u00f3n:\nasync function updateProfile(previousState: any, formData: FormData) {\n  const name = formData.get(\"name\") as string;\n  const res = await api.updateName(name);\n  return res.ok ? { success: true, message: \"Actualizado con \u00e9xito\" } : { success: false, error: \"Fall\u00f3\" };\n}\n\n// Bot\u00f3n de submit hijo aut\u00f3nomo con useFormStatus:\nfunction SubmitButton() {\n  const { pending } = useFormStatus(); // Lee el estado del form padre autom\u00e1ticamente\n  return (\n    <button type=\"submit\" disabled={pending} className=\"px-4 py-2 bg-sky-600 rounded disabled:opacity-50\">\n      {pending ? \"Guardando...\" : \"Actualizar Perfil\"}\n    </button>\n  );\n}\n\n// Formulario principal con useActionState:\nexport function ProfileForm() {\n  const [state, formAction, isPending] = useActionState(updateProfile, null);\n\n  return (\n    <form action={formAction} className=\"space-y-4\">\n      <input name=\"name\" placeholder=\"Nombre completo\" required className=\"p-2 border rounded\" />\n      <SubmitButton />\n      {state?.message && <p className=\"text-emerald-400\">{state.message}</p>}\n      {state?.error && <p className=\"text-red-400\">{state.error}</p>}\n    </form>\n  );\n}"
      },
      visualDiagram: {
        id: "diag-react-17",
        title: "Arquitectura de Form Actions con useActionState y useFormStatus",
        caption: "Manejo unificado de estados de formulario (state, formAction, isPending) sin useState manual.",
        diagramType: "react-actions-useactionstate"
      },
      interviewTips: {
        whatInterviewersWant: "Que demuestres c\u00f3mo React 19 reduce la complejidad de los formularios aline\u00e1ndose con los est\u00e1ndares web nativos (`<form action>`) y delegando los estados de pending en `useActionState`.",
        commonPitfalls: ["Llamar a `useFormStatus` en el mismo componente que declara el `<form>` (debe llamarse en un componente HIJO dentro del form).", "Seguir implementando handlers `onSubmit` manuales con 4 `useState` para `isSubmitting`, `error` y `data`.", "Olvidar asignar la prop `name` en los inputs del formulario para que viajen en el `FormData`."],
        followUps: [
          "¿Cómo se gestiona el estado pendiente de un formulario con useFormStatus?",
          "¿Cómo encajan las Server Actions con useActionState?"
        ]
      },
      quiz: {
        question: "\u00bfD\u00f3nde debe ser invocado el hook 'useFormStatus()' para acceder al estado 'pending' del formulario?",
        options: ["Exclusivamente en un componente hijo renderizado dentro del elemento <form>.", "En el componente padre que contiene la etiqueta <form>.", "En cualquier parte de la aplicaci\u00f3n fuera del \u00e1rbol de React.", "\u00danicamente en archivos de configuraci\u00f3n de Vite."],
        correctIndex: 0,
        explanation: "useFormStatus() lee el contexto del formulario padre; por tanto, debe colocarse dentro de un componente hijo (como un bot\u00f3n de submit) que resida en el interior del <form>."
      }
    },
    {
      id: "react-18",
      title: "\u00bfC\u00f3mo implementar actualizaciones optimistas con `useOptimistic`?",
      level: "avanzado",
      tags: ["React-19", "useOptimistic", "Optimistic-UI", "Zero-Latency", "State-Rollback"],
      response: "El hook `useOptimistic` de React 19 permite implementar **Actualizaciones Optimistas (Optimistic UI)** con **cero latencia percibida**, actualizando la interfaz de usuario de forma inmediata con el valor esperado antes de que la petici\u00f3n de red al servidor haya finalizado.\n\n**Mec\u00e1nica de funcionamiento**:\n1. Recibe el estado real actual y una funci\u00f3n reductora optimista: `const [optimisticState, setOptimistic] = useOptimistic(passthroughState, updateFn)`.\n2. Al ocurrir una acci\u00f3n del usuario (ej. dar un 'Like' o enviar un mensaje en un chat), se despacha inmediatamente `setOptimistic(nuevoValor)`.\n3. La interfaz se repinta instant\u00e1neamente reflejando el cambio de forma visual a 0ms.\n4. La petici\u00f3n as\u00edncrona se ejecuta en segundo plano. Si la petici\u00f3n se completa con \u00e9xito, React sincroniza el estado real; si la petici\u00f3n falla o es rechazada, **React revierte autom\u00e1ticamente el estado optimista** al valor original sin c\u00f3digo manual de rollback.",
      codeExample: {
        language: "tsx",
        code: "import { useOptimistic } from \"react\";\n\ninterface Message {\n  id: string;\n  text: string;\n  sending?: boolean; // Indicador de estado optimista\n}\n\nexport function ChatList({ messages, onSendMessage }: { messages: Message[]; onSendMessage: (text: string) => Promise<void> }) {\n  // Configuraci\u00f3n del hook optimista en React 19:\n  const [optimisticMessages, addOptimisticMessage] = useOptimistic(\n    messages,\n    (state, newText: string) => [\n      ...state,\n      { id: crypto.randomUUID(), text: newText, sending: true } // UI instant\u00e1nea\n    ]\n  );\n\n  const formAction = async (formData: FormData) => {\n    const text = formData.get(\"message\") as string;\n    addOptimisticMessage(text); // 1. Se pinta inmediatamente\n    await onSendMessage(text);  // 2. Network request (si falla, React hace rollback solo)\n  };\n\n  return (\n    <div>\n      {optimisticMessages.map(m => (\n        <p key={m.id} className={m.sending ? \"opacity-50 italic\" : \"opacity-100\"}>\n          {m.text} {m.sending && \"(Enviando...)\"}\n        </p>\n      ))}\n      <form action={formAction}>\n        <input name=\"message\" required />\n        <button type=\"submit\">Enviar</button>\n      </form>\n    </div>\n  );\n}"
      },
      visualDiagram: {
        id: "diag-react-18",
        title: "Flujo de Actualizaciones Optimistas con useOptimistic en React 19",
        caption: "Mutaci\u00f3n inmediata de la UI a 0ms con reconciliaci\u00f3n en background y rollback autom\u00e1tico en fallos.",
        diagramType: "react-useoptimistic-flow"
      },
      interviewTips: {
        whatInterviewersWant: "Que demuestres c\u00f3mo brindar una experiencia de usuario de nivel 'Apple/Stripe' con latencia cero, explicando c\u00f3mo React 19 abstrae el dolor de cabeza de gestionar manualmente estados previos para hacer rollback.",
        commonPitfalls: ["Creer que se necesita un `try/catch` para revertir el estado optimista (React lo hace solo cuando la acci\u00f3n termina o falla).", "No proveer pistas visuales sutiles (como opacidad reducida o spinner) para avisar que el dato a\u00fan est\u00e1 confirm\u00e1ndose en red.", "Usar `useOptimistic` fuera de transiciones concurrentes o form actions de React 19."],
        followUps: [
          "¿Qué ocurre con la actualización optimista si la petición falla?",
          "¿Cómo gestionarías varias actualizaciones optimistas concurrentes?"
        ]
      },
      quiz: {
        question: "\u00bfQu\u00e9 ocurre autom\u00e1ticamente en 'useOptimistic' si la acci\u00f3n as\u00edncrona de fondo es rechazada con un error?",
        options: ["React descarta autom\u00e1ticamente la mutaci\u00f3n optimista y restaura el estado visual real previo.", "La aplicaci\u00f3n lanza un error fatal y desmonta toda la pantalla.", "El valor optimista queda congelado en pantalla indefinidamente.", "Se fuerza una recarga completa de la p\u00e1gina en el navegador."],
        correctIndex: 0,
        explanation: "El hook useOptimistic est\u00e1 acoplado al ciclo de vida de la transici\u00f3n de React: si la acci\u00f3n falla, la mutaci\u00f3n optimista es descartada y la UI se reconcilia con el estado base previo."
      }
    },
    {
      id: "react-19",
      title: "\u00bfQu\u00e9 es useTransition y useDeferredValue en Concurrent React?",
      level: "avanzado",
      tags: ["useTransition", "useDeferredValue", "Concurrent-React", "Time-Slicing", "Non-Urgent"],
      response: "En Concurrent React (introducido en React 18 y potenciado en React 19), no todas las actualizaciones de estado tienen la misma urgencia visual. `useTransition` y `useDeferredValue` permiten **priorizar la interactividad de la interfaz** separando tareas urgentes de tareas secundarias pesadas:\n\n1. **Actualizaciones Urgentes (High Priority)**:\n   - Clicks, tecleo en un input o selecciones t\u00e1ctiles. Deben responder en menos de 16ms para que el usuario no perciba lag en su teclado o rat\u00f3n.\n\n2. **Transiciones No Urgentes con `useTransition()`**:\n   - `const [isPending, startTransition] = useTransition()`.\n   - Todo el estado envuelto dentro de `startTransition(() => setState())` se marca con **baja prioridad e interrumpible**. Si el usuario contin\u00faa tecleando mientras React calcula una lista pesada, React interrumpe la transici\u00f3n, procesa la pulsaci\u00f3n de tecla inmediata y luego reanuda el c\u00e1lculo secundario.\n\n3. **`useDeferredValue(value)`**:\n   - Aplica el mismo principio pero a nivel de un valor prop o primitivo en lugar de una funci\u00f3n setter. Pospone la actualizaci\u00f3n del valor para componentes hijos pesados.",
      codeExample: {
        language: "tsx",
        code: "export function SearchableLargeList({ allItems }: { allItems: string[] }) {\n  const [searchTerm, setSearchTerm] = useState(\"\");\n  const [filteredItems, setFilteredItems] = useState(allItems);\n  const [isPending, startTransition] = useTransition();\n\n  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {\n    const value = e.target.value;\n    \n    // 1. Tarea Urgente: El input se actualiza instant\u00e1neamente en pantalla (0ms lag)\n    setSearchTerm(value);\n\n    // 2. Tarea No Urgente: El filtrado de 10,000 elementos no congela la UI\n    startTransition(() => {\n      setFilteredItems(allItems.filter(item => item.toLowerCase().includes(value.toLowerCase())));\n    });\n  };\n\n  return (\n    <div>\n      <input value={searchTerm} onChange={handleInputChange} placeholder=\"Escribe para buscar...\" />\n      {isPending && <span className=\"text-xs text-amber-400 ml-2\">Actualizando resultados...</span>}\n      <ul className={isPending ? \"opacity-50\" : \"opacity-100\"}>\n        {filteredItems.slice(0, 50).map(i => <li key={i}>{i}</li>)}\n      </ul>\n    </div>\n  );\n}"
      },
      visualDiagram: {
        id: "diag-react-19",
        title: "Priorizaci\u00f3n Concurrente con useTransition y useDeferredValue",
        caption: "Las actualizaciones urgentes (teclado) tienen prioridad absoluta; las transiciones pesadas son interrumpibles.",
        diagramType: "react-concurrent-usetransition"
      },
      interviewTips: {
        whatInterviewersWant: "Que demuestres c\u00f3mo mantener interfaces a 60 FPS sin recurrir a 'debounces' arbitrarios de tiempo (`setTimeout`), aprovechando la planificaci\u00f3n de prioridades colaborativa nativa de React.",
        commonPitfalls: ["Envolver la actualizaci\u00f3n del propio input de texto dentro de `startTransition` (har\u00eda que el cursor y las letras tecleadas sufran retardo).", "Usar `useTransition` para tareas triviales que no causan lentitud en pantalla.", "No utilizar el indicador `isPending` para brindar retroalimentaci\u00f3n visual al usuario durante el c\u00e1lculo."],
        followUps: [
          "¿Qué diferencia hay entre useTransition y debounce?",
          "¿Cuándo usarías useDeferredValue en lugar de useTransition?"
        ]
      },
      quiz: {
        question: "\u00bfQu\u00e9 sucede si el usuario sigue tecleando mientras React est\u00e1 calculando una actualizaci\u00f3n envuelta en 'startTransition'?",
        options: ["React interrumpe inmediatamente el renderizado de baja prioridad para reflejar la tecla pulsada y luego reanuda la transici\u00f3n.", "El navegador se bloquea hasta que la transici\u00f3n pesada concluya.", "React cancela la pulsaci\u00f3n de la tecla y emite un warning.", "Se descarta el componente y se monta un Error Boundary."],
        correctIndex: 0,
        explanation: "El motor concurrente de Fiber permite pausar o descartar renderizados de baja prioridad (transiciones) para ceder el hilo principal a eventos de entrada urgentes del usuario, manteniendo 60 FPS."
      }
    },
    {
      id: "react-20",
      title: "\u00bfQu\u00e9 es el patr\u00f3n Compound Components y cu\u00e1ndo aplicarlo?",
      level: "avanzado",
      tags: ["Compound-Components", "Design-Patterns", "Internal-Context", "Flexible-APIs", "Radix-UI"],
      response: "El patr\u00f3n **Compound Components (Componentes Compuestos)** es un patr\u00f3n de dise\u00f1o arquitect\u00f3nico avanzado en el que un conjunto de componentes colaboran estrechamente compartiendo **estado impl\u00edcito y l\u00f3gica interna entre s\u00ed mediante un Contexto oculto**, ofreciendo al consumidor una API declarativa, altamente expresiva y desacoplada de la jerarqu\u00eda visual.\n\nEs an\u00e1logo a los elementos nativos de HTML como `<select>` y `<option>`, donde `<option>` conoce el valor seleccionado y el evento de cambio sin que el desarrollador tenga que pasar props manualmente a cada una.\n\n**Ventajas arquitect\u00f3nicas**:\n- **Flexibilidad Total de UI**: El consumidor puede reordenar, envolver en divs o alterar la disposici\u00f3n visual de los subcomponentes sin romper la comunicaci\u00f3n.\n- **Zero Prop-Drilling**: El estado no se pasa a trav\u00e9s de props complejas de configuraci\u00f3n (`config={{...}}`).\n- Es el patr\u00f3n fundacional de las librer\u00edas de componentes headless de mayor prestigio de la industria (como **Radix UI**, **Headless UI** y **Shadcn/UI**).",
      codeExample: {
        language: "tsx",
        code: "import { createContext, useContext, useState, ReactNode } from \"react\";\n\n// 1. Contexto interno impl\u00edcito\ninterface TabsContextType {\n  activeTab: string;\n  setActiveTab: (id: string) => void;\n}\nconst TabsContext = createContext<TabsContextType | null>(null);\n\n// 2. Componente Padre Contenedor\nexport function Tabs({ defaultTab, children }: { defaultTab: string; children: ReactNode }) {\n  const [activeTab, setActiveTab] = useState(defaultTab);\n  return (\n    <TabsContext.Provider value={{ activeTab, setActiveTab }}>\n      <div className=\"tabs-container\">{children}</div>\n    </TabsContext.Provider>\n  );\n}\n\n// 3. Subcomponentes asociados\nTabs.Trigger = function TabsTrigger({ id, label }: { id: string; label: string }) {\n  const ctx = useContext(TabsContext);\n  if (!ctx) throw new Error(\"Tabs.Trigger debe usarse dentro de <Tabs>\");\n  const isActive = ctx.activeTab === id;\n  return (\n    <button onClick={() => ctx.setActiveTab(id)} className={isActive ? \"text-sky-400 font-bold\" : \"text-slate-400\"}>\n      {label}\n    </button>\n  );\n};\n\nTabs.Content = function TabsContent({ id, children }: { id: string; children: ReactNode }) {\n  const ctx = useContext(TabsContext);\n  if (!ctx) throw new Error(\"Tabs.Content debe usarse dentro de <Tabs>\");\n  return ctx.activeTab === id ? <div className=\"p-4\">{children}</div> : null;\n};"
      },
      visualDiagram: {
        id: "diag-react-20",
        title: "Arquitectura del Patr\u00f3n Compound Components con Context Oculto",
        caption: "El componente padre coordina estado y eventos con subcomponentes mediante Context sin acoplar el dise\u00f1o.",
        diagramType: "react-compound-components-pattern"
      },
      interviewTips: {
        whatInterviewersWant: "Que demuestres c\u00f3mo dise\u00f1ar sistemas de dise\u00f1o (Design Systems) escalables con APIs declarativas tipo `<Accordion>`, `<Tabs>` o `<Menu>` usando subcomponentes est\u00e1ticos.",
        commonPitfalls: ["No comprobar si el contexto es `null` en los subcomponentes, lo que provocar\u00eda errores cr\u00edpticos si alguien los usa fuera del padre.", "Usar props monol\u00edticas r\u00edgidas como `options={[{label, value}]}` que impiden personalizar el markup individual de cada \u00edtem.", "Exponer el Context de forma p\u00fablica, rompiendo la encapsulaci\u00f3n del componente."],
        followUps: [
          "¿Cómo comparten estado los subcomponentes de un compound component?",
          "¿Qué ventajas de API ofrece frente a pasar muchas props?"
        ]
      },
      quiz: {
        question: "\u00bfCu\u00e1l es la principal ventaja de utilizar Compound Components en librer\u00edas de dise\u00f1o de interfaz?",
        options: ["Permite componer interfaces flexibles donde los subcomponentes comparten estado sin prop drilling y sin imponer una estructura r\u00edgida de HTML.", "Convierte el c\u00f3digo en Server Components autom\u00e1ticamente.", "Reduce el tama\u00f1o del bundle de JavaScript a la mitad.", "Elimina la necesidad de utilizar CSS en la aplicaci\u00f3n."],
        correctIndex: 0,
        explanation: "El patr\u00f3n Compound Components desacopla la l\u00f3gica interna del dise\u00f1o visual, permitiendo al desarrollador estructurar los subcomponentes libremente sin tener que pasar props manuales."
      }
    },
    {
      id: "react-21",
      title: "\u00bfQu\u00e9 es React Portals y para qu\u00e9 casos de uso se utiliza?",
      level: "avanzado",
      tags: ["Portals", "createPortal", "Modals", "DOM-Hierarchy", "Z-Index-Escaping"],
      response: "Un **React Portal** (creado mediante `createPortal(children, domNode)`) permite renderizar un componente hijo en un **nodo f\u00edsico del DOM diferente** que existe fuera de la jerarqu\u00eda DOM del componente padre, mientras **conserva intacta su posici\u00f3n y comportamiento en el \u00e1rbol de componentes virtual de React**.\n\n**Casos de uso indispensables**:\n1. **Modales y Di\u00e1logos**: Si un modal se monta dentro de un contenedor padre con `overflow: hidden`, `position: relative` o un stacking context con `z-index` restringido, el modal quedar\u00e1 recortado o tapado. Con un Portal se monta directamente en `<div id=\"modal-root\">` al final del `<body>`.\n2. **Tooltips, Popovers y Dropdowns**: Para flotar sobre toda la interfaz sin sufrir recortes por layouts restrictivos.\n3. **Banners de Notificaciones Globales (Toasts)**.\n\n**Propagaci\u00f3n de Eventos M\u00e1gica**:\nA pesar de que el nodo f\u00edsico est\u00e9 en otra parte del HTML, **los eventos de React (como `onClick`) se propagan (bubble up) a trav\u00e9s del \u00e1rbol l\u00f3gico de componentes de React**, permitiendo que un padre capture eventos de un modal montado en el Portal.",
      codeExample: {
        language: "tsx",
        code: "import { createPortal } from \"react-dom\";\nimport { ReactNode, useEffect, useState } from \"react\";\n\nexport function ModalPortal({ children, onClose }: { children: ReactNode; onClose: () => void }) {\n  const [mounted, setMounted] = useState(false);\n\n  useEffect(() => {\n    setMounted(true);\n    return () => setMounted(false);\n  }, []);\n\n  if (!mounted) return null;\n\n  // Renderiza en <div id=\"portal-root\"> fuera del \u00e1rbol DOM principal:\n  return createPortal(\n    <div className=\"fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm\">\n      <div className=\"bg-slate-900 border border-slate-700 p-6 rounded-xl shadow-2xl relative\">\n        <button onClick={onClose} className=\"absolute top-2 right-2 text-slate-400 hover:text-white\">\u2715</button>\n        {children}\n      </div>\n    </div>,\n    document.getElementById(\"portal-root\") || document.body\n  );\n}"
      },
      visualDiagram: {
        id: "diag-react-21",
        title: "React Portals: \u00c1rbol L\u00f3gico Virtual vs Montaje F\u00edsico en DOM",
        caption: "createPortal renderiza el nodo f\u00edsico fuera del contenedor padre para escapar de overflow y z-index, conservando la propagaci\u00f3n de eventos.",
        diagramType: "react-portals-dom-hierarchy"
      },
      interviewTips: {
        whatInterviewersWant: "Saber que conoces el problema del stacking context CSS (`overflow: hidden` y `z-index`) y que entiendes que la propagaci\u00f3n de eventos sint\u00e9ticos de React sigue el \u00e1rbol de componentes de React y no el \u00e1rbol del DOM real.",
        commonPitfalls: ["Intentar acceder a `document.getElementById('portal-root')` en Server-Side Rendering (SSR) antes de que el componente monte en cliente.", "Creer que los eventos no subir\u00e1n al componente padre de React porque el nodo est\u00e1 f\u00edsicamente en `<body>`.", "Olvidar gestionar la accesibilidad (Focus Trap y teclado Escape) dentro del modal montado en el portal."],
        followUps: [
          "¿Cómo se propagan los eventos desde un portal?",
          "¿Qué consideraciones de accesibilidad tiene un modal con portal (focus trap)?"
        ]
      },
      quiz: {
        question: "\u00bfC\u00f3mo se comporta la propagaci\u00f3n (bubbling) de un evento 'onClick' originado dentro de un React Portal?",
        options: ["Se propaga hacia arriba siguiendo el \u00e1rbol l\u00f3gico de componentes de React, alcanzando a sus padres virtuales aunque est\u00e9n en otro nodo del DOM f\u00edsico.", "Se detiene de forma inmediata y no puede ser escuchado por ning\u00fan componente padre.", "Se propaga exclusivamente a trav\u00e9s del \u00e1rbol del DOM f\u00edsico del navegador.", "Solo se propaga si se invoca 'event.continuePropagation()'."],
        correctIndex: 0,
        explanation: "El sistema de eventos sint\u00e9ticos de React mapea la propagaci\u00f3n bas\u00e1ndose en la jerarqu\u00eda del \u00e1rbol virtual de componentes; por tanto, los eventos generados en un Portal suben a sus padres l\u00f3gicos de React."
      }
    },
    {
      id: "react-22",
      title: "\u00bfQu\u00e9 son los React Server Components (RSC) y qu\u00e9 beneficios aportan?",
      level: "experto",
      tags: ["RSC", "Server-Components", "0kb-Bundle", "Next.js", "Streaming-Wire-Format"],
      response: "Los **React Server Components (RSC)** representan un cambio de paradigma arquitect\u00f3nico fundamental introducido en React 19 y adoptado en frameworks como Next.js App Router. Permiten que ciertos componentes se ejecuten **exclusiva y perpetuamente en el servidor**, sin enviar una sola l\u00ednea de su c\u00f3digo JavaScript al bundle del cliente.\n\n**Beneficios revolucionarios**:\n1. **Zero Bundle Impact (0 KB de JavaScript en el cliente)**: Las dependencias pesadas utilizadas exclusivamente en el servidor (como parsers de markdown de 100kb, librer\u00edas de fechas o formateadores) se ejecutan en el backend y no engordan el bundle del navegador.\n2. **Acceso Directo a Recursos del Backend**: Pueden hacer consultas directas a bases de datos (SQL/Prisma), interactuar con el sistema de archivos o consumir microservicios internos con latencia de red local de microsegundos.\n3. **Seguridad Absoluta por Dise\u00f1o**: Claves de API secretas, credenciales de base de datos y l\u00f3gica propietaria nunca se exponen al navegador.\n4. **Streaming en Formato Cable (RSC Wire Format)**: En lugar de emitir solo HTML o JSON, transmiten un stream de descripci\u00f3n de interfaz serializado que se fusiona con los componentes interactivos del cliente (`'use client'`) sin perder estado.",
      codeExample: {
        language: "tsx",
        code: "// Server Component por defecto (Sin 'use client'):\nimport db from \"@/lib/db\";\nimport { marked } from \"marked\"; // Esta librer\u00eda de 50kb NUNCA llegar\u00e1 al bundle del cliente!\nimport { LikeButton } from \"./LikeButton\"; // Client Component interactivo\n\nexport async function BlogPost({ postId }: { postId: string }) {\n  // Acceso directo a base de datos en el servidor:\n  const post = await db.post.findUnique({ where: { id: postId } });\n  if (!post) return <p>Art\u00edculo no encontrado</p>;\n\n  const htmlContent = marked.parse(post.content);\n\n  return (\n    <article className=\"prose prose-invert max-w-2xl mx-auto py-8\">\n      <h1>{post.title}</h1>\n      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />\n      \n      {/* Frontera cliente/servidor: El bot\u00f3n interactivo s\u00ed descarga JS para onClick */}\n      <LikeButton initialLikes={post.likes} postId={post.id} />\n    </article>\n  );\n}"
      },
      visualDiagram: {
        id: "diag-react-22",
        title: "Arquitectura de React Server Components (RSC) vs Client Components",
        caption: "Los Server Components ejecutan en backend con 0kb bundle; los Client Components aportan interactividad con 'use client'.",
        diagramType: "react-server-components-rsc"
      },
      interviewTips: {
        whatInterviewersWant: "Pregunta imprescindible de Staff/Architect. Aclara que RSC no es lo mismo que el SSR cl\u00e1sico: SSR genera HTML est\u00e1tico que luego requiere hidratar todo el JS; RSC nunca hidrata los componentes servidor ni descarga su JS.",
        commonPitfalls: ["Confundir RSC con SSR (Server-Side Rendering cl\u00e1sico): RSC no es un reemplazo de SSR, trabajan juntos.", "Poner `'use client'` en todos los archivos por inercia (rompe todas las ventajas de 0kb bundle de RSC).", "Intentar usar hooks de ciclo de vida (`useState`, `useEffect`) o eventos (`onClick`) dentro de un Server Component (provoca error de compilaci\u00f3n)."],
        followUps: [
          "¿Qué diferencia hay entre RSC y SSR?",
          "¿Qué no puede hacer un Server Component (hooks de estado, eventos)?"
        ]
      },
      quiz: {
        question: "\u00bfCu\u00e1l es la diferencia fundamental entre React Server Components (RSC) y el SSR tradicional de React?",
        options: ["En RSC el c\u00f3digo JavaScript de los Server Components nunca se env\u00eda al cliente ni se hidrata, mientras que en SSR tradicional todo el c\u00f3digo JS se env\u00eda para hidratar la p\u00e1gina.", "RSC solo funciona en navegadores m\u00f3viles.", "SSR tradicional no admite consultas a bases de datos.", "RSC requiere convertir la base de datos a GraphQL obligatoriamente."],
        correctIndex: 0,
        explanation: "El SSR cl\u00e1sico genera un HTML inicial pero env\u00eda el 100% del JavaScript de todos los componentes para hidratarlos. En RSC, los Server Components ejecutan en backend, emiten un stream y tienen un impacto de 0 KB en el bundle del cliente."
      }
    },
    {
      id: "react-23",
      title: "\u00bfC\u00f3mo funciona internamente la arquitectura React Fiber?",
      level: "experto",
      tags: ["Fiber-Architecture", "Time-Slicing", "Work-Loop", "Lanes", "Linked-List-Tree"],
      response: "React Fiber es la reescritura total del motor de reconciliaci\u00f3n de React (comenzada en React 16 y que sustenta todas las caracter\u00edsticas concurrentes modernas). Reemplaz\u00f3 el antiguo algoritmo recursivo s\u00edncrono en pila (Stack Reconciler), que una vez iniciado no pod\u00eda detenerse hasta procesar todo el \u00e1rbol, bloqueando el hilo principal del navegador.\n\n**Mec\u00e1nica de la Arquitectura Fiber**:\n1. **Estructura de Lista Enlazada de Unidad de Trabajo**: Modela cada componente como un nodo Fiber con referencias `child`, `sibling` y `return` (padre). Esta estructura lineal permite pausar la ejecuci\u00f3n en cualquier momento y reanudarla sin perder el contexto de la llamada.\n2. **Time Slicing (Presupuesto de 5ms)**: En su bucle de trabajo (`workLoopConcurrent`), React procesa unidades de trabajo comprobando continuamente `shouldYieldToHost()`. Si el tiempo de renderizado supera los ~5ms, React cede voluntariamente el control al Event Loop del navegador para que atienda eventos de entrada y frames de animaci\u00f3n a 60 FPS.\n3. **Modelo de Prioridades con Lanes (Carriles de Prioridad)**: Utiliza una m\u00e1scara de 31 bits (`Lanes`) para asignar prioridades binarias a cada actualizaci\u00f3n (`SyncLane`, `InputContinuousLane`, `DefaultLane`, `IdleLane`), permitiendo que actualizaciones urgentes adelanten a c\u00e1lculos secundarios pesados.",
      codeExample: {
        language: "tsx",
        code: "// Pseudoc\u00f3digo mental del Concurrent Work Loop en React Fiber:\nfunction workLoopConcurrent() {\n  // Mientras haya unidades de trabajo y el navegador NO necesite el hilo:\n  while (workInProgress !== null && !shouldYieldToHost()) {\n    performUnitOfWork(workInProgress);\n  }\n}\n\nfunction performUnitOfWork(unitOfWork: FiberNode): void {\n  const current = unitOfWork.alternate; // Nodo Fiber de la pantalla actual\n  \n  // 1. Inicia el trabajo en el nodo (invoca componente, calcula hooks):\n  let next = beginWork(current, unitOfWork, renderLanes);\n  \n  // 2. Si no hay m\u00e1s hijos, completa el trabajo y pasa a hermanos/padres:\n  if (next === null) {\n    completeUnitOfWork(unitOfWork);\n  } else {\n    workInProgress = next;\n  }\n}"
      },
      visualDiagram: {
        id: "diag-react-23",
        title: "Bucle Concurrente y Time Slicing en la Arquitectura React Fiber",
        caption: "Reconciliaci\u00f3n basada en listas enlazadas que cede el hilo al navegador en trozos de 5ms seg\u00fan prioridades Lane.",
        diagramType: "react-fiber-work-loop-slicing"
      },
      interviewTips: {
        whatInterviewersWant: "Entrevista de Staff/Principal Engineer. Demuestra que comprendes la transici\u00f3n del Stack Reconciler a Fiber, el mecanismo `shouldYieldToHost` (MessageChannel en navegador) y c\u00f3mo las m\u00e1scaras de bits `Lanes` gestionan prioridades.",
        commonPitfalls: ["Creer que Fiber es un hilo de Web Worker separado (corre en el hilo principal cooperativamente mediante time-slicing).", "Desconocer el patr\u00f3n 'Double Buffering': React mantiene dos \u00e1rboles Fiber en memoria simult\u00e1neamente (`current` y `workInProgress`).", "Confundir la fase de render (interrumpible) con la fase de commit (at\u00f3mica y s\u00edncrona)."],
        followUps: [
          "¿Qué son los lanes de prioridad en Fiber?",
          "¿Qué diferencia hay entre la fase de render y la fase de commit?"
        ]
      },
      quiz: {
        question: "\u00bfPor qu\u00e9 la arquitectura de Fiber organiza los componentes en una lista enlazada (child, sibling, return) en lugar de un \u00e1rbol recursivo convencional?",
        options: ["Para poder pausar, guardar el puntero de ejecuci\u00f3n, ceder el hilo al navegador y reanudar el trabajo de reconciliaci\u00f3n en cualquier instante.", "Porque JavaScript proh\u00edbe el uso de \u00e1rboles binarios en el navegador.", "Para reducir el uso de memoria RAM a cero bytes.", "Para compilar el c\u00f3digo directamente a lenguaje ensamblador."],
        correctIndex: 0,
        explanation: "La recursi\u00f3n convencional en la pila de llamadas no puede pausarse a mitad de camino. La estructura de lista enlazada permite a Fiber detener el bucle de trabajo en cualquier nodo y retomar la tarea exactamente donde la dej\u00f3."
      }
    },
    {
      id: "react-24",
      title: "\u00bfC\u00f3mo gestionar Server State a escala enterprise con TanStack Query?",
      level: "experto",
      tags: ["TanStack-Query", "Enterprise-Architecture", "QueryCache", "staleTime", "gcTime"],
      response: "A escala enterprise, gestionar el Server State con **TanStack Query (React Query v5)** requiere una arquitectura estricta para garantizar consistencia de cach\u00e9, rendimiento sub-segundo y cero redundancia de red:\n\n1. **F\u00e1brica Centralizada de Query Keys Tipadas (Query Key Factory)**:\n   - Prohibir strings m\u00e1gicos sueltos. Se define una estructura jer\u00e1rquica de claves fuertemente tipada (`users.all()`, `users.detail(id)`, `users.filtered(filters)`) que permite invalidaciones quir\u00fargicas (`queryClient.invalidateQueries({ queryKey: users.all() })`).\n2. **Estrategia Rigurosa de Tiempos de Cach\u00e9**:\n   - **`staleTime`**: Per\u00edodo durante el cual el dato se considera fresco y no disparar\u00e1 refetch en pantalla (ej. 5 minutos para cat\u00e1logos).\n   - **`gcTime` (Garbage Collection Time)**: Tiempo que los datos inactivos permanecen en memoria antes de ser purgados del `QueryCache` (ej. 30 minutos).\n3. **Mutaciones con Optimistic Updates y Rollback**:\n   - Implementar `onMutate` cancelando queries salientes (`cancelQueries`), guardando una instant\u00e1nea del estado anterior y actualizando la cach\u00e9 al instante. Si `onError` se dispara, se restaura la instant\u00e1nea; en `onSettled` se invalida para sincronizaci\u00f3n definitiva.",
      codeExample: {
        language: "tsx",
        code: "// 1. F\u00e1brica de Claves de Consulta Centralizada:\nexport const userKeys = {\n  all: [\"users\"] as const,\n  lists: () => [...userKeys.all, \"list\"] as const,\n  detail: (id: string) => [...userKeys.all, \"detail\", id] as const,\n};\n\n// 2. Mutaci\u00f3n optimista enterprise con rollback autom\u00e1tico:\nexport function useUpdateUserMutation() {\n  const queryClient = useQueryClient();\n\n  return useMutation({\n    mutationFn: (updatedUser: User) => api.updateUser(updatedUser),\n    onMutate: async (newUser) => {\n      // Cancela peticiones en curso para evitar sobreescrituras:\n      await queryClient.cancelQueries({ queryKey: userKeys.detail(newUser.id) });\n\n      // Guarda snapshot previo para rollback en caso de fallo:\n      const previousUser = queryClient.getQueryData<User>(userKeys.detail(newUser.id));\n\n      // Actualiza optimistamente la cach\u00e9:\n      queryClient.setQueryData(userKeys.detail(newUser.id), newUser);\n\n      return { previousUser };\n    },\n    onError: (err, newUser, context) => {\n      // Rollback al valor previo si la red falla:\n      if (context?.previousUser) {\n        queryClient.setQueryData(userKeys.detail(newUser.id), context.previousUser);\n      }\n    },\n    onSettled: (data, err, newUser) => {\n      // Revalida la clave para asegurar sincronizaci\u00f3n con base de datos:\n      queryClient.invalidateQueries({ queryKey: userKeys.detail(newUser.id) });\n    },\n  });\n}"
      },
      visualDiagram: {
        id: "diag-react-24",
        title: "Arquitectura de Server State con TanStack Query y Query Key Factory",
        caption: "Ciclo de vida de cach\u00e9 con staleTime, invalidaci\u00f3n quir\u00fargica y mutaciones optimistas con snapshot rollback.",
        diagramType: "react-tanstack-query-architecture"
      },
      interviewTips: {
        whatInterviewersWant: "Demostrar que no solo sabes usar `useQuery`, sino que dominas el dise\u00f1o a gran escala: query key factories tipadas, invalidaciones jer\u00e1rquicas y patrones robustos de optimistic updates con rollback.",
        commonPitfalls: ["Dejar `staleTime: 0` por defecto en toda la aplicaci\u00f3n, provocando r\u00e1fagas masivas de refetch en cada cambio de ventana.", "Confundir `staleTime` (validez del dato) con `gcTime` (persistencia en memoria inactiva).", "No cancelar queries en curso (`cancelQueries`) antes de aplicar mutaciones optimistas, provocando race conditions en la cach\u00e9."],
        followUps: [
          "¿Qué diferencia hay entre staleTime y gcTime?",
          "¿Cómo estructurarías las query keys en una aplicación grande?"
        ]
      },
      quiz: {
        question: "En TanStack Query v5, \u00bfcu\u00e1l es la diferencia exacta entre 'staleTime' y 'gcTime'?",
        options: ["staleTime define cu\u00e1nto tiempo el dato se considera fresco sin disparar refetch; gcTime define cu\u00e1nto tiempo el dato inactivo permanece en memoria antes de ser eliminado por el garbage collector.", "Son nombres id\u00e9nticos para la misma configuraci\u00f3n en versiones antiguas.", "staleTime es para peticiones GET y gcTime es exclusivamente para peticiones POST.", "gcTime solo funciona si el usuario tiene activado Google Chrome."],
        correctIndex: 0,
        explanation: "staleTime determina la frescura del dato (mientras no est\u00e9 'stale', no vuelve a pedir datos de red al montar el componente). gcTime (antiguo cacheTime) define cu\u00e1ndo la memoria no utilizada se purga del QueryCache."
      }
    },
    {
      id: "react-25",
      title: "\u00bfC\u00f3mo funciona el Streaming SSR y Progressive Hydration con Selective Hydration?",
      level: "experto",
      tags: ["Streaming-SSR", "renderToPipeableStream", "Selective-Hydration", "Progressive-Hydration", "TTFB"],
      response: "En el SSR tradicional (React 17 y anteriores), el servidor deb\u00eda esperar a que **el 100% de los datos estuvieran listos** antes de poder enviar un solo byte de HTML al navegador (`renderToString`), y el cliente deb\u00eda esperar a **descargar todo el JavaScript de la p\u00e1gina** antes de poder hidratar cualquier secci\u00f3n (*All-or-Nothing bottleneck*).\n\nReact 18 y 19 resuelven este cuello de botella con **Streaming SSR y Selective Hydration** apoy\u00e1ndose en la API `renderToPipeableStream` y `<Suspense>`:\n\n1. **Streaming SSR**: El servidor env\u00eda de inmediato una c\u00e1scara b\u00e1sica de HTML (Header, Layout, Nav) con un **Time to First Byte (TTFB) ultra-r\u00e1pido**. Los bloques lentos envueltos en `<Suspense>` env\u00edan un placeholder ligero y contin\u00faan transmitiendo los trozos de HTML restantes a medida que los datos van resolviendo por la conexi\u00f3n HTTP en streaming.\n2. **Selective Hydration (Hidrataci\u00f3n Selectiva)**: Los fragmentos de la p\u00e1gina se hidratan de forma aut\u00f3noma sin esperar al resto del bundle. Si el usuario hace click en un componente que a\u00fan no se ha hidratado (por ejemplo, en la secci\u00f3n de comentarios), **React interrumpe la hidrataci\u00f3n secuencial normal y prioriza inmediatamente la hidrataci\u00f3n de ese componente**, reproduciendo el click del usuario de forma transparente.",
      codeExample: {
        language: "tsx",
        code: "// Servidor Node.js con renderToPipeableStream (Streaming SSR nativo):\nimport { renderToPipeableStream } from \"react-dom/server\";\n\napp.use(\"/app\", (req, res) => {\n  const { pipe } = renderToPipeableStream(<App />, {\n    bootstrapScripts: [\"/bundle.js\"],\n    onShellReady() {\n      // 1. Env\u00eda el shell inicial con c\u00f3digo 200 de forma instant\u00e1nea:\n      res.statusCode = 200;\n      res.setHeader(\"Content-Type\", \"text/html\");\n      pipe(res); // El stream queda abierto enviando trozos de <Suspense> en tiempo real!\n    },\n    onError(err) {\n      console.error(\"[Streaming Error]\", err);\n    }\n  });\n});"
      },
      visualDiagram: {
        id: "diag-react-25",
        title: "Arquitectura de Streaming SSR y Selective Hydration",
        caption: "Transmisi\u00f3n progresiva de chunks de HTML y priorizaci\u00f3n en cliente de componentes interactuados por el usuario.",
        diagramType: "react-streaming-ssr-selective-hydration"
      },
      interviewTips: {
        whatInterviewersWant: "Que expliques c\u00f3mo React elimin\u00f3 el cuello de botella 'todo o nada' del SSR tradicional y c\u00f3mo Selective Hydration garantiza interactividad instant\u00e1nea en conexiones m\u00f3viles lentas.",
        commonPitfalls: ["Pensar que Streaming SSR requiere WebSockets (funciona sobre conexiones est\u00e1ndar HTTP/1.1 o HTTP/2 en streaming).", "Creer que si una consulta de datos lenta falla en streaming la p\u00e1gina entera se rompe (Suspense permite degradar a cliente).", "No utilizar `<Suspense>` en los puntos cr\u00edticos de lentitud de la interfaz en SSR."],
        followUps: [
          "¿Cómo prioriza React la hidratación de la zona con la que interactúa el usuario?",
          "¿Qué diferencia hay entre renderToPipeableStream y renderToString?"
        ]
      },
      quiz: {
        question: "\u00bfQu\u00e9 ocurre durante la Selective Hydration de React si un usuario hace click en un bot\u00f3n cuya secci\u00f3n a\u00fan no ha terminado de hidratarse?",
        options: ["React pausa la hidrataci\u00f3n de otras partes menos prioritarias, hidrata inmediatamente el componente clickeado y despacha el evento del usuario.", "El click se descarta y el navegador emite un sonido de error.", "La p\u00e1gina web se recarga por completo desde el servidor.", "El navegador congela la pantalla durante 3 segundos."],
        correctIndex: 0,
        explanation: "Selective Hydration detecta la interacci\u00f3n del usuario como una se\u00f1al de m\u00e1xima prioridad, interrumpe el orden de hidrataci\u00f3n est\u00e1ndar, hidrata de inmediato el \u00e1rbol del componente interactuado y reproduce el click."
      }
    },
    {
      id: "react-26",
      title: "\u00bfC\u00f3mo dise\u00f1ar una arquitectura Modular Feature-First en proyectos enterprise?",
      level: "experto",
      tags: ["Architecture", "Feature-First", "Enterprise-Patterns", "Module-Boundaries", "Clean-Code"],
      response: "El patr\u00f3n tradicional de carpetas por tipo t\u00e9cnico (`components/`, `hooks/`, `services/`) colapsa a escala enterprise generando el antipatr\u00f3n del 'Giant Components Folder', dependencias circulares inmanejables y fricci\u00f3n cognitiva en equipos multifuncionales.\n\nEl est\u00e1ndar **Modular Feature-First** (mandatado en los protocolos de Principal React Architect) encapsula la aplicaci\u00f3n en **m\u00f3dulos autocontenidos por dominio de negocio** dentro de `src/features/[feature-name]/`, con l\u00edmites estrictos:\n\n```text\nsrc/features/[feature-name]/\n\u251c\u2500\u2500 models/       # Interfaces de dominio y esquemas Zod\n\u251c\u2500\u2500 services/     # L\u00f3gica pura de negocio independiente de React\n\u251c\u2500\u2500 api/          # Hooks de TanStack Query (queries y mutaciones)\n\u251c\u2500\u2500 store/        # Stores de Zustand locales de la feature\n\u251c\u2500\u2500 components/   # Componentes visuales (Smart & Dumb)\n\u2514\u2500\u2500 index.ts      # Public API estricta (Barrel File)\n```\n\n**Reglas de Frontera Inquebrantables**:\n1. Los componentes **NUNCA realizan llamadas `fetch()` directas**; consumen hooks del layer `api/`.\n2. **Aislamiento Horizontal**: Una feature jam\u00e1s puede importar archivos internos de otra feature (`from '../other-feature/components/Internal'`). Toda comunicaci\u00f3n entre dominios debe realizarse exclusivamente a trav\u00e9s del archivo barril p\u00fablico `index.ts` de la feature expuesta.",
      codeExample: {
        language: "tsx",
        code: "// 1. Definici\u00f3n de la frontera p\u00fablica en src/features/auth/index.ts:\n// Solo se exporta lo que otras partes de la app tienen permiso de consumir:\nexport { LoginForm } from \"./components/LoginForm\";\nexport { useAuthStore } from \"./store/auth-store\";\nexport type { UserProfileDto } from \"./models/auth.models\";\n// Los servicios internos, helpers de cifrado y queries privadas permanecen ocultos!\n\n// 2. Consumo leg\u00edtimo en otra feature o layout:\nimport { LoginForm, useAuthStore } from \"@/features/auth\";\n\nexport function Header() {\n  const user = useAuthStore(s => s.user);\n  return user ? <span>Bienvenido {user.name}</span> : <LoginForm />;\n}"
      },
      visualDiagram: {
        id: "diag-react-26",
        title: "Arquitectura Modular Feature-First y Fronteras de Dominio",
        caption: "M\u00f3dulos desacoplados por dominio con capas internas aisladas y barrel files index.ts como barrera estricta.",
        diagramType: "react-modular-feature-first"
      },
      interviewTips: {
        whatInterviewersWant: "Pregunta de Principal Architect. Argumenta c\u00f3mo este dise\u00f1o permite a m\u00faltiples equipos trabajar simult\u00e1neamente sin conflictos de merge en Git, facilita micro-frontends y hace que eliminar una feature sea tan simple como borrar su carpeta.",
        commonPitfalls: ["Permitir que las features crucen importaciones de archivos internos de otros dominios sin pasar por el `index.ts` p\u00fablico.", "Crear una carpeta `shared/` o `common/` masiva que se convierte en un basurero de c\u00f3digo no modularizado.", "Mezclar llamadas de red y l\u00f3gica de negocio directamente dentro de los componentes de presentaci\u00f3n JSX."],
        followUps: [
          "¿Cómo evitarías dependencias circulares entre features?",
          "¿Cómo forzarías los límites entre módulos con ESLint?"
        ]
      },
      quiz: {
        question: "\u00bfCu\u00e1l es la regla fundamental de frontera entre m\u00f3dulos en una arquitectura Feature-First?",
        options: ["Las features no pueden importar archivos internos de otros dominios; deben interactuar exclusivamente mediante el archivo barril p\u00fablico 'index.ts'.", "Cada feature debe contener su propio archivo package.json obligatorio.", "Todos los componentes deben estar escritos en un solo archivo index.tsx.", "Est\u00e1 prohibido utilizar TypeScript en la capa de modelos."],
        correctIndex: 0,
        explanation: "La regla de frontera de m\u00f3dulo exige que cada feature exponga su API p\u00fablica exclusivamente mediante su 'index.ts', prohibiendo el acoplamiento a componentes o servicios internos de otros dominios."
      }
    }
  ]
};

export default questionsReact;
