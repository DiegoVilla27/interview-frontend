import { ISection } from "../../types";

export const questionsReact: ISection = {
  title: "React",
  collapse: "collapseReact",
  icon: "react",
  questions: [
    {
      title: "¿Qué es React?",
      response:
        "Es una librería de JavaScript desarrollada por Facebook para construir interfaces de usuario basadas en componentes."
    },
    {
      title: "¿Cuáles son las características principales de React?",
      response:
        "Uso de componentes reutilizables, Virtual DOM, unidireccionalidad de datos, JSX y un ecosistema amplio."
    },
    {
      title: "¿Qué es React DOM?",
      response:
        "Es el paquete que permite que React interactúe con el DOM del navegador."
    },
    {
      title: "¿Qué es el Virtual DOM y cómo funciona en librerías como React?",
      response:
        "El Virtual DOM es una representación ligera en memoria del DOM real. Cuando el estado cambia, React crea un nuevo Virtual DOM, lo compara con la versión anterior usando un proceso llamado 'diffing' y aplica solo los cambios necesarios en el DOM real, optimizando el rendimiento."
    },
    {
      title:
        "¿Cuál es la ventaja principal de usar Virtual DOM frente a manipular directamente el DOM?",
      response:
        "La ventaja principal es el rendimiento: manipular el DOM real es costoso. El Virtual DOM minimiza la cantidad de operaciones sobre el DOM aplicando solo los cambios necesarios, lo que hace que las actualizaciones sean más rápidas y eficientes."
    },
    {
      title: "¿Qué es un componente en React?",
      response: "Es una pieza reutilizable de UI."
    },
    {
      title: "¿Qué tipos de componentes existen en React?",
      response:
        "Existen dos tipos principales de componentes en React: componentes controlados (donde el estado del formulario es manejado por React) y componentes no controlados (donde los valores se gestionan directamente en el DOM)."
    },
    {
      title: "¿Qué es JSX/TSX?",
      response:
        "Es una sintaxis que permite escribir estructuras similares a HTML dentro de JavaScript/TypeScript."
    },
    {
      title: "¿Qué son los props?",
      response:
        "Son parámetros que se pasan a los componentes para configurarlos y hacerlos dinámicos."
    },
    {
      title: "¿Qué es children en props?",
      response:
        "Es una prop especial que representa los elementos hijos pasados dentro de un componente."
    },
    {
      title: "¿Qué es render props?",
      response:
        "Es un patrón en el que un componente recibe una función como prop para renderizar contenido dinámico."
    },
    {
      title: "¿Qué es el ciclo de vida (Lifecycle) en React?",
      response:
        "Son fases de un componente (montaje, actualización, desmontaje). Se controlan con métodos de clase o hooks."
    },
    {
      title: "¿Qué son los Hooks en React?",
      response:
        "Son funciones que permiten usar estado y ciclo de vida en componentes funcionales. Ejemplos: useState, useEffect, useContext, useMemo, useRef."
    },
    {
      title: "¿Qué es Strict Mode?",
      response:
        "Es una herramienta de desarrollo que ayuda a identificar problemas potenciales en la aplicación."
    },
    {
      title: "¿Qué son los Side Effects en React?",
      response:
        "Son operaciones que afectan algo fuera del flujo normal de renderizado, como llamadas a APIs o manipulación del DOM. Se manejan con useEffect."
    },
    {
      title: "¿Qué es un HOC (High Order Component)?",
      response:
        "Es una función que recibe un componente y retorna un nuevo componente con funcionalidades adicionales."
    },
    {
      title: "¿Qué diferencia hay entre SPA, SSR y SSG?",
      response:
        "SPA: Renderizado en cliente, SSR: Renderizado en servidor, SSG: Generación estática en tiempo de build."
    },
    {
      title: "¿Qué es Compound Components Pattern?",
      response:
        "Es un patrón donde un componente principal coordina el comportamiento de múltiples subcomponentes internos."
    },
    {
      title: "¿Qué es Hydration y Reconciliation?",
      response:
        "Hydration: React enlaza eventos sobre HTML renderizado en servidor. Reconciliation: Proceso de React para actualizar el DOM de forma eficiente usando el Virtual DOM."
    },
    {
      title: "¿Qué es Suspense y Lazy en React?",
      response:
        "Suspense permite mostrar UI de carga mientras se resuelven recursos. Lazy permite carga diferida de componentes."
    },
    {
      title: "¿Qué es SyntheticEvent?",
      response:
        "Es el sistema de eventos de React que envuelve eventos nativos para hacerlos consistentes entre navegadores."
    },
    {
      title: "¿Qué es un Error Boundary?",
      response:
        "Es un componente que detecta errores de JavaScript en el árbol de componentes y muestra una UI alternativa."
    },
    {
      title: "¿Qué es Forward Refs y cómo se usan?",
      response:
        "Es una técnica para pasar refs a componentes hijos, útil para acceder a nodos DOM o instancias de componentes."
    },
    {
      title: "¿Qué es dangerousSetInnerHTML?",
      response:
        "Es una forma de inyectar HTML directamente en un componente. Puede ser peligroso si no se sanitiza el contenido."
    },
    {
      title: "¿Qué es cloneElement en React?",
      response:
        "Es una función que clona un elemento React y le agrega o modifica props."
    },
    {
      title: "¿Qué son los Portales en React?",
      response:
        "Es una técnica para renderizar un componente hijo en un nodo del DOM fuera del árbol padre."
    },
    {
      title: "¿Qué es el Profiler en React?",
      response:
        "Es una herramienta que mide el rendimiento de la aplicación y ayuda a detectar renders innecesarios."
    },
    {
      title: "¿Qué es FlushSync en React?",
      response:
        "Es una API que permite forzar la sincronización inmediata de actualizaciones de estado, útil en casos críticos de UI."
    },
    {
      title: "Explica cómo funciona el concurrent mode en React.",
      response:
        "Es un modo experimental que permite que React pause, interrumpa y retome renderizados para mejorar la experiencia de usuario en apps grandes."
    },
    {
      title:
        "¿Qué técnicas usarías para optimizar el rendimiento de una app en React?",
      response:
        "Uso de memoization (React.memo, useMemo, useCallback), lazy loading, splitting de código, Suspense, virtualización de listas."
    },
    {
      title: "¿Cómo implementarías server components en React?",
      response:
        "Son componentes que se renderizan en el servidor y permiten enviar solo HTML al cliente, reduciendo el bundle y mejorando performance."
    },
    {
      title:
        "¿Qué diferencias hay entre React y frameworks como Angular o Vue?",
      response:
        "React es una librería enfocada en la UI, mientras Angular es un framework completo y Vue un framework progresivo con integración más sencilla."
    }
  ]
};

export default questionsReact;
