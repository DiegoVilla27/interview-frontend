import { ISection } from "../../types";

export const questionsTypescript: ISection = {
  title: "TypeScript",
  collapse: "collapseTypescript",
  icon: "typescript",
  questions: [
    { title: "¿Qué es TypeScript y en qué se diferencia de JavaScript?", response: "Es un superset de JavaScript que añade tipado estático, interfaces y features avanzados. Se transpila a JS puro. Detecta errores en compilación, no en runtime.", level: "basico" },
    { title: "¿Cómo se declara un tipo básico en TypeScript?", response: "let age: number = 25; let name: string = 'Diego'; let active: boolean = true; let items: string[] = []; let tuple: [string, number] = ['a', 1];", level: "basico" },
    { title: "¿Qué son las interfaces en TypeScript?", response: "Contratos que definen la forma de un objeto. Son extensibles con extends y se pueden implementar en clases. Ideal para definir props, API responses, y domain models.", level: "basico" },
    { title: "¿Qué diferencia hay entre any y unknown?", response: "any desactiva el tipado completamente. unknown también acepta cualquier valor pero obliga a comprobar el tipo antes de usarlo (type guard). unknown es type-safe, any no.", level: "basico" },
    { title: "¿Qué son los tipos literales en TypeScript?", response: "Restringen una variable a valores específicos: type Direction = 'up' | 'down' | 'left' | 'right'. Permiten autocompletado y previenen valores inválidos.", level: "basico" },
    { title: "¿Qué diferencia hay entre null y undefined en TypeScript?", response: "undefined: no se ha asignado valor. null: ausencia intencional. Con strictNullChecks, ambos deben manejarse explícitamente. Operador ?. para optional chaining.", level: "basico" },
    { title: "¿Qué diferencia hay entre interface y type?", response: "Ambos definen formas de objetos. type soporta uniones (|), intersecciones (&), mapped types. interface es extensible (extends, declaration merging). Para objetos: interface. Para uniones/utilities: type.", level: "medio" },
    { title: "¿Qué son los tipos genéricos?", response: "Plantillas que permiten reutilizar código tipado: function identity<T>(arg: T): T { return arg; }. Permiten constraints: <T extends HasId>, defaults: <T = string>.", level: "medio" },
    { title: "¿Qué es la inferencia de tipos en TypeScript?", response: "TypeScript deduce tipos automáticamente: const x = 5 (number), const arr = [1, 2] (number[]). Funciona en returns de funciones, callbacks, genérics, y narrowing con control flow.", level: "medio" },
    { title: "Explica Partial<T>, Required<T> y Pick<T, K>.", response: "Partial<T>: todas las props opcionales. Required<T>: todas obligatorias. Pick<T, 'a' | 'b'>: selecciona props. Omit<T, 'c'>: excluye props. Son utility types built-in.", level: "medio" },
    { title: "¿Cómo funciona Readonly<T> y cuándo se usa?", response: "Hace todas las propiedades inmutables. Útil para proteger state, props, configs. Para arrays: ReadonlyArray<T> o readonly T[]. Profundo con DeepReadonly (custom).", level: "medio" },
    { title: "¿Qué son los enums en TypeScript?", response: "Enumeraciones que definen un conjunto de constantes nombradas: enum Direction { Up, Down }. Pueden ser numéricos o string. Alternativa moderna: as const + tipo union.", level: "medio" },
    { title: "¿Qué son los tipos condicionales?", response: "Tipos que dependen de una condición: T extends U ? X : Y. Permiten lógica de tipos: type IsString<T> = T extends string ? true : false. Base de tipos utilitarios avanzados.", level: "avanzado" },
    { title: "¿Qué son los mapped types?", response: "Crean nuevos tipos iterando sobre claves: { [K in keyof T]: boolean }. Con modificadores: +/- readonly, +/- optional. Base de Partial, Required, Readonly internamente.", level: "avanzado" },
    { title: "¿Cómo funciona keyof y typeof en combinación?", response: "keyof obtiene claves como unión: keyof User → 'name' | 'age'. typeof convierte valor a tipo. Juntos: const config = {...}; type Config = typeof config; type Keys = keyof Config.", level: "avanzado" },
    { title: "¿Qué son los type guards y cómo se implementan?", response: "Funciones que estrechan tipos en runtime: typeof, instanceof, in, o custom: function isUser(x: unknown): x is User { return 'name' in x; }. Permiten narrowing seguro.", level: "avanzado" },
    { title: "¿Qué son los template literal types?", response: "Tipos construidos con template strings: type Event = `on${Capitalize<string>}`. Permiten: type Routes = `/api/${string}/items`. Útiles para APIs type-safe.", level: "avanzado" },
    { title: "Explica cómo funcionan los decorators en TypeScript.", response: "Funciones especiales que se aplican a clases, métodos o propiedades (@decorator). Añaden metadatos o lógica (logging, validation). TC39 Stage 3. Angular los usa extensivamente.", level: "avanzado" },
    { title: "¿Cómo funciona el operador infer en tipos condicionales?", response: "infer captura un tipo dentro de una condición: type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never. Permite extraer tipos de funciones, promises, arrays, etc.", level: "experto" },
    { title: "¿Qué es la varianza en TypeScript (covariance/contravariance)?", response: "Covariance: A extends B implica Container<A> extends Container<B> (outputs). Contravariance: lo opuesto (inputs). TypeScript es covariante por defecto en arrays y objetos, lo cual puede causar unsoundness.", level: "experto" },
    { title: "¿Cómo crearías un tipo utilitario avanzado personalizado?", response: "Combinando condicionales + mapped + infer: type DeepPartial<T> = { [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K] }. Permite transformaciones recursivas de tipos.", level: "experto" },
    { title: "¿Qué es el operador satisfies y cuándo se usa?", response: "Valida que un valor cumple un tipo sin ensancharlo: const palette = { ... } satisfies Record<string, Color>. Mantiene la inferencia literal mientras verifica la estructura.", level: "experto" },
    { title: "¿Qué es const assertion (as const) y cómo se usa?", response: "as const convierte valores en tipos literales inmutables: const routes = ['/', '/about'] as const → readonly ['/', '/about']. Reemplaza enums con más type safety.", level: "experto" }
  ]
};

export default questionsTypescript;
