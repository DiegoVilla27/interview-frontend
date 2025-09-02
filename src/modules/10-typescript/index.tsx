import { ISection } from "../../types";

export const questionsTypescript: ISection = {
  title: "Typescript",
  collapse: "collapseTypescript",
  icon: "typescript",
  questions: [
    {
      title: "¿Qué es TypeScript y en qué se diferencia de JavaScript?",
      response:
        "Es un superset de JavaScript que añade tipado estático y características avanzadas para mejorar el desarrollo."
    },
    {
      title: "¿Cómo se declara un tipo básico en TypeScript?",
      response:
        "Usando `let age: number = 25;`, `let name: string = 'Diego';`, `let active: boolean = true;`."
    },
    {
      title: "¿Qué son las interfaces en TypeScript?",
      response:
        "Son contratos que definen la forma de un objeto, asegurando que tenga ciertas propiedades y métodos."
    },
    {
      title: "¿Qué diferencia hay entre `any` y `unknown`?",
      response:
        "`any` desactiva el tipado, mientras que `unknown` obliga a comprobar el tipo antes de usarlo."
    },
    {
      title: "¿Qué son los tipos literales en TypeScript?",
      response:
        "Permiten restringir una variable a un conjunto específico de valores. Ejemplo: `type Direction = 'up' | 'down'`."
    },
    {
      title: "¿Qué diferencia hay entre `interface` y `type`?",
      response:
        "Ambos definen formas de objetos, pero `type` también puede combinar tipos (uniones, intersecciones) y `interface` es más extensible (puede hacerse `extends`)."
    },
    {
      title: "¿Qué son los tipos genéricos?",
      response:
        "Son plantillas que permiten reutilizar código fuertemente tipado. Ejemplo: `function identity<T>(arg: T): T { return arg; }`."
    },
    {
      title: "¿Qué diferencia hay entre `null` y `undefined` en TypeScript?",
      response:
        "`undefined` indica que no se ha asignado un valor, `null` indica la ausencia intencional de un valor."
    },
    {
      title: "¿Qué son los tipos condicionales?",
      response:
        "Son tipos que dependen de una condición. Ejemplo: `T extends U ? X : Y`."
    },
    {
      title: "Explica `Partial<T>` y `Required<T>`.",
      response:
        "`Partial<T>` hace que todas las propiedades de un tipo sean opcionales. `Required<T>` las hace todas obligatorias."
    },
    {
      title: "¿Cómo funciona `Readonly<T>` y en qué casos lo usarías?",
      response:
        "Hace que todas las propiedades de un objeto sean inmutables, útil para proteger datos que no deben cambiar."
    },
    {
      title: "¿Qué son los mapped types en TypeScript?",
      response:
        "Son tipos que permiten crear nuevos tipos iterando sobre las claves de otro tipo. Ejemplo: `{ [K in keyof T]: boolean }`."
    },
    {
      title: "Explica cómo funcionan los `decorators` en TypeScript.",
      response:
        "Son funciones especiales que se aplican a clases, métodos o propiedades para añadir metadatos o lógica extra (requiere configuración experimental)."
    },
    {
      title:
        "¿Qué es la inferencia de tipos en profundidad y cómo la aprovechas?",
      response:
        "TypeScript deduce automáticamente tipos complejos en funciones, callbacks y genéricos, lo que permite escribir menos anotaciones y mantener seguridad de tipos."
    },
    {
      title: "¿Cómo funciona `keyof` y `typeof` en combinación?",
      response:
        "`keyof` obtiene las claves de un tipo como unión de strings, `typeof` convierte una variable en su tipo. Juntos permiten crear tipos dinámicos basados en objetos existentes."
    },
    {
      title:
        "Explica cómo crear un tipo utilitario propio con condicionales y mapped types.",
      response:
        "Puedes combinar `T extends U ? X : Y` con `[K in keyof T]` para construir tipos avanzados que transformen objetos o restrinjan propiedades."
    }
  ]
};

export default questionsTypescript;
