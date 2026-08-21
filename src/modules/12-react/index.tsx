import { ISection } from "../../types";

export const questionsReact: ISection = {
  title: "React",
  collapse: "collapseReact",
  icon: "react",
  questions: [
    // === BÁSICO ===
    {
      title: "¿Qué es React y cuáles son sus características principales?",
      response:
        "Es una biblioteca declarativa y basada en componentes creada por Meta. Se caracteriza por su flujo unidireccional de datos (unidirectional data flow), sintaxis JSX/TSX, Virtual DOM con algoritmo de reconciliación y un ecosistema modular masivo.",
      level: "basico"
    },
    {
      title: "¿Qué es JSX / TSX?",
      response:
        "Es una extensión sintáctica de JavaScript/TypeScript que permite escribir estructuras con apariencia HTML dentro del código. El compilador (Babel/SWC) lo transforma en llamadas `React.createElement` o en la nueva JSX runtime transformation `jsx()`.",
      level: "basico"
    },
    {
      title: "¿Qué son los props y cómo se diferencian del state?",
      response:
        "Los `props` son datos inmutables pasados de un componente padre a un hijo para parametrizar su comportamiento. El `state` es información mutable interna que el propio componente gestiona a lo largo del tiempo y cuyo cambio dispara re-renders.",
      level: "basico"
    },
    {
      title: "¿Qué es la prop especial 'children'?",
      response:
        "Es una prop que React inyecta automáticamente conteniendo los nodos, elementos o texto colocados entre las etiquetas de apertura y cierre de un componente, facilitando patrones de composición de UI.",
      level: "basico"
    },
    {
      title: "¿Qué son los Hooks y cuáles son las reglas fundamentales para usarlos?",
      response:
        "Son funciones que permiten usar estado y características del ciclo de vida en componentes funcionales (useState, useEffect, etc.). Reglas: solo deben invocarse en el nivel superior (top-level) del componente (nunca dentro de loops o condicionales) y solo dentro de componentes o custom hooks.",
      level: "basico"
    },
    {
      title: "¿Qué diferencia hay entre componentes controlados y no controlados?",
      response:
        "Un componente controlado delega el valor de sus inputs al estado de React (`value` + `onChange`). Un componente no controlado almacena el valor directamente en el DOM y se accede mediante referencias (`useRef`).",
      level: "basico"
    },
    {
      title: "¿Por qué las listas en React requieren una propiedad 'key'?",
      response:
        "La `key` ayuda al algoritmo de reconciliación a identificar qué elementos han cambiado, se han agregado o eliminado entre renders de forma unívoca, evitando re-creaciones destructivas del DOM y preservando el estado de los componentes hijos.",
      level: "basico"
    },
    // === MEDIO ===
    {
      title: "¿Qué es el Virtual DOM y cómo funciona la reconciliación (Fiber)?",
      response:
        "El Virtual DOM es un árbol de objetos ligeros en memoria. React compara el árbol previo con el nuevo mediante 'diffing' heurístico O(n) y calcula la lista mínima de mutaciones para aplicar en lote (batching) al DOM real.",
      level: "medio"
    },
    {
      title: "¿Por qué NO se debe usar useEffect para fetching de datos en apps modernas?",
      response:
        "Porque produce race conditions, waterfall requests, no maneja caché ni deduplicación, y causa renders dobles en Strict Mode. El estándar de la industria es utilizar **TanStack Query (React Query)** o el hook `use()` con Suspense.",
      level: "medio"
    },
    {
      title: "¿Qué diferencia hay entre useMemo, useCallback y React.memo?",
      response:
        "`React.memo` es un HOC que evita re-renderizar un componente si sus props no cambiaron. `useMemo` memoriza el valor resultante de un cálculo costoso. `useCallback` memoriza la referencia de una función entre renders.",
      level: "medio"
    },
    {
      title: "¿Qué es Context API y cuándo usar Zustand en su lugar?",
      response:
        "Context API está diseñada para datos de baja frecuencia de cambio (tema, usuario autenticado); cualquier cambio re-evalúa a todos los consumidores. Zustand es ideal para estado global frecuente porque ofrece suscripciones atómicas y selector-based re-renders.",
      level: "medio"
    },
    {
      title: "¿Qué es un Error Boundary y cómo se implementa?",
      response:
        "Es un componente especial que captura errores de JavaScript durante el renderizado, métodos de ciclo de vida y constructores en su subárbol, mostrando una UI de fallback en lugar de quequear la app entera (implementado con `componentDidCatch` o librerías como `react-error-boundary`).",
      level: "medio"
    },
    {
      title: "¿Qué es Suspense y React.lazy para Code Splitting?",
      response:
        "`React.lazy()` permite importar componentes dinámicamente como chunks separados (`import()`). `<Suspense fallback={<Spinner />}>` envuelve el componente y muestra la UI de espera mientras el chunk se descarga y resuelve.",
      level: "medio"
    },
    {
      title: "¿Qué es el Strict Mode y por qué ejecuta efectos dos veces en desarrollo?",
      response:
        "Es una herramienta de diagnóstico que detecta efectos secundarios no limpios, APIs obsoletas y memory leaks. En desarrollo monta, desmonta y vuelve a montar componentes para verificar que los cleanups de `useEffect` sean idempotentes.",
      level: "medio"
    },
    // === AVANZADO ===
    {
      title: "¿Qué es el nuevo React Compiler (React Forget) en React 19?",
      response:
        "Es un compilador optimizador automático que analiza el código en tiempo de compilación e inserta memoización automática a nivel de expresiones y JSX, eliminando la necesidad manual de `useMemo`, `useCallback` y `React.memo` en la mayoría de los casos.",
      level: "avanzado"
    },
    {
      title: "¿Cómo funciona el nuevo hook `use()` en React 19?",
      response:
        "Es un hook que permite leer Promises o Context de forma condicional (dentro de if o bucles). Cuando se le pasa una Promise, se integra nativamente con `<Suspense>`, pausando el render hasta que la Promise se resuelve.",
      level: "avanzado"
    },
    {
      title: "¿Qué son los Hooks de Acciones `useActionState` y `useFormStatus`?",
      response:
        "`useActionState` maneja el estado de transiciones y formularios asíncronos gestionando `state`, `action` y `isPending` sin `useState` manual. `useFormStatus` provee información del formulario padre (pending, data, method) a componentes hijos.",
      level: "avanzado"
    },
    {
      title: "¿Cómo implementar actualizaciones optimistas con `useOptimistic`?",
      response:
        "Permite actualizar la interfaz instantáneamente con el valor esperado antes de que la petición al servidor responda. Si la petición falla o completa, React restaura o sincroniza automáticamente el estado real con cero latencia percibida.",
      level: "avanzado"
    },
    {
      title: "¿Qué es useTransition y useDeferredValue en Concurrent React?",
      response:
        "`useTransition` marca actualizaciones de estado como no urgentes (transiciones), permitiendo que la UI responda a eventos inmediatos (clicks/teclado) mientras se computa el cambio pesado. `useDeferredValue` difiere la actualización de un valor específico.",
      level: "avanzado"
    },
    {
      title: "¿Qué es el patrón Compound Components y cuándo aplicarlo?",
      response:
        "Un patrón arquitectónico donde un componente padre (ej. `<Select>`) comparte estado implícito con subcomponentes asociados (`<Select.Option>`, `<Select.Trigger>`) mediante Context interno, ofreciendo APIs declarativas y altamente flexibles.",
      level: "avanzado"
    },
    {
      title: "¿Qué es React Portals y para qué casos de uso se utiliza?",
      response:
        "`createPortal(children, domNode)` permite renderizar un componente en un nodo del DOM que existe fuera de la jerarquía del componente padre, esencial para modales, tooltips y dropdowns para evitar problemas de `overflow: hidden` o `z-index`.",
      level: "avanzado"
    },
    // === EXPERTO ===
    {
      title: "¿Qué son los React Server Components (RSC) y qué beneficios aportan?",
      response:
        "Son componentes que se ejecutan exclusivamente en el servidor y nunca se envían al bundle de JavaScript del cliente. Tienen acceso directo a bases de datos y microservicios, reducen drásticamente el tamaño del bundle a 0kb JS para esa vista, y transmiten un stream de UI serializado.",
      level: "experto"
    },
    {
      title: "¿Cómo funciona internamente la arquitectura React Fiber?",
      response:
        "Fiber es la reescritura del motor de reconciliación de React. Modela el árbol de componentes como una lista enlazada de unidades de trabajo ('fiber nodes'). Permite pausar, abortar, priorizar y reanudar el trabajo de renderizado en trozos (time slicing) cooperando con el browser event loop.",
      level: "experto"
    },
    {
      title: "¿Cómo gestionar Server State a escala enterprise con TanStack Query?",
      response:
        "Definiendo Query Keys tipadas centralizadas, utilizando `staleTime` y `gcTime` estratégicos para evitar overfetching, gestionando mutaciones con rollback optimista mediante `onMutate`/`onError`, y prefetching en rutas clave para navegación instantánea.",
      level: "experto"
    },
    {
      title: "¿Cómo funciona el Streaming SSR y Progressive Hydration con Selective Hydration?",
      response:
        "El servidor envía el HTML en trozos (streams) utilizando `<Suspense>` y `renderToPipeableStream`. Las partes de la página se hidratan de forma independiente tan pronto como su código JS llega al cliente o cuando el usuario interactúa prioritariamente con esa sección (Selective Hydration).",
      level: "experto"
    },
    {
      title: "¿Cómo diseñar una arquitectura Modular Feature-First en proyectos enterprise?",
      response:
        "Encapsulando módulos por dominio en `src/features/[feature]/` con capas aisladas (`models/`, `services/`, `api/` con TanStack Query, `store/` con Zustand, `components/`, y `index.ts` como barril público restringido). Se prohíben dependencias circulares y llamadas fetch directas en componentes.",
      level: "experto"
    }
  ]
};

export default questionsReact;
