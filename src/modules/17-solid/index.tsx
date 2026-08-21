import { ISection } from "../../types";

export const questionsSOLID: ISection = {
  title: "SOLID",
  collapse: "collapseSOLID",
  icon: "solid",
  questions: [
    // === BÁSICO ===
    {
      title: "¿Qué significan las siglas SOLID y cuál es su objetivo?",
      response:
        "Son cinco principios de diseño de software orientados a objetos y modularidad: Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation y Dependency Inversion. Su objetivo es crear código mantenible, desacoplado, testeable y extensible ante cambios.",
      level: "basico"
    },
    {
      title: "¿Qué es el Principio de Responsabilidad Única (SRP)?",
      response:
        "Establece que una clase, módulo o componente debe tener 'una única razón para cambiar' (un solo rol o actor al que responde). Por ejemplo, un componente de React no debe encargarse a la vez de renderizar la UI, hacer peticiones fetch a la API y formatear fechas complejas.",
      level: "basico"
    },
    {
      title: "¿Qué busca el Principio Abierto/Cerrado (OCP)?",
      response:
        "Las entidades de software deben estar 'abiertas para su extensión, pero cerradas para su modificación'. Debe ser posible añadir nuevo comportamiento sin alterar el código fuente existente, previniendo regresiones.",
      level: "basico"
    },
    {
      title: "¿Qué es el Principio de Sustitución de Liskov (LSP)?",
      response:
        "Los objetos de una subclase o subtipo deben poder sustituir a los objetos de la clase base sin alterar la correctitud ni el comportamiento esperado del programa.",
      level: "basico"
    },
    {
      title: "¿Qué es el Principio de Segregación de Interfaces (ISP)?",
      response:
        "Ningún cliente debe ser forzado a depender de métodos o interfaces que no utiliza. Es preferible tener múltiples interfaces pequeñas y específicas ('role interfaces') en lugar de una interfaz monolítica ('fat interface').",
      level: "basico"
    },
    {
      title: "¿Qué es el Principio de Inversión de Dependencias (DIP)?",
      response:
        "1) Los módulos de alto nivel no deben depender de módulos de bajo nivel; ambos deben depender de abstracciones (interfaces). 2) Las abstracciones no deben depender de los detalles; los detalles deben depender de las abstracciones.",
      level: "basico"
    },
    // === MEDIO ===
    {
      title: "¿Cómo se aplica SRP en componentes y hooks de React?",
      response:
        "Dividiendo responsabilidades: 1) Componente Presentacional (solo renderiza JSX), 2) Custom Hook (`useUserForm`, maneja estado y validación) y 3) Capa de Servicios/API (`userService.ts`, llamadas HTTP). Cada archivo tiene un único propósito.",
      level: "medio"
    },
    {
      title: "¿Cómo aplicar OCP en un componente de UI (ej. botón o tabla)?",
      response:
        "Utilizando composición (Composition over Inheritance) y props polimórficas (como `variant`, `leftIcon`, render props o slots) o el patrón Strategy, permitiendo extender variantes visuales o acciones sin modificar el código base del componente.",
      level: "medio"
    },
    {
      title: "¿Qué ejemplo clásico viola el Principio de Liskov (LSP)?",
      response:
        "El problema del 'Rectángulo y Cuadrado'. Si `Cuadrado` hereda de `Rectángulo` y sobrescribe `setWidth` modificando también el alto, rompe el invariante de que cambiar el ancho no afecta el alto en un rectángulo genérico.",
      level: "medio"
    },
    {
      title: "¿Cómo aplicar ISP en interfaces de TypeScript en el frontend?",
      response:
        "Evitando crear una interfaz `IUser` gigante con 50 campos si un componente de avatar solo necesita `{ name: string; avatarUrl: string }`. Se crea un tipo específico `UserAvatarProps` o se usa `Pick<IUser, 'name' | 'avatarUrl'>`.",
      level: "medio"
    },
    {
      title: "¿Cómo se diferencia Inversión de Dependencias (DIP), Inyección de Dependencias (DI) e Inversión de Control (IoC)?",
      response:
        "DIP es el **principio de diseño**. IoC es el **concepto arquitectónico** donde el control de flujo es delegado al framework. DI es el **patrón de diseño específico** que suministra las dependencias desde el exterior (vía constructor, props o inyectores).",
      level: "medio"
    },
    // === AVANZADO ===
    {
      title: "¿Cómo se relaciona OCP con patrones de diseño como Strategy y Factory?",
      response:
        "El patrón Strategy permite definir una familia de algoritmos (ej. pasarelas de pago Stripe, PayPal, MercadoPago) e intercambiarlos en runtime. Para añadir un nuevo método de pago solo se crea una nueva clase que implemente `PaymentStrategy` sin tocar el código existente.",
      level: "avanzado"
    },
    {
      title: "¿Cómo evitar el code smell 'God Object' aplicando SOLID?",
      response:
        "Aplicando SRP para extraer responsabilidades a servicios cohesivos pequeños, ISP para fragmentar contratos públicos en interfaces atómicas, y DIP para orquestar la comunicación a través de interfaces inyectables.",
      level: "avanzado"
    },
    {
      title: "¿Cómo implementar DIP en React sin frameworks con IoC Containers?",
      response:
        "Utilizando React Context como contenedor de inyección: se define una interfaz TypeScript `IAnalyticsService`, se crea un Context con dicha interfaz, y los componentes consumen `useAnalytics()`. En tests se inyecta un mock provider sin cambiar los componentes.",
      level: "avanzado"
    },
    {
      title: "¿Cómo se aplica LSP al diseñar sistemas de Design Systems y jerarquías polimórficas?",
      response:
        "Asegurando que cualquier componente que extienda las propiedades nativas de HTML (`ComponentProps<'button'>`) respete todos los eventos, accesibilidad (a11y) y contratos estándar sin lanzar excepciones ni anular comportamientos esperados.",
      level: "avanzado"
    },
    // === EXPERTO ===
    {
      title: "¿Cómo convergen los principios SOLID en Arquitectura Hexagonal (Ports & Adapters) en el Frontend?",
      response:
        "El núcleo del dominio (Entities + Use Cases) no conoce React, Angular ni fetch (SRP/DIP). Las interfaces definen 'Puertos' (ej. `UserRepositoryPort`). Los 'Adaptadores' (servicios HTTP con axios/fetch o almacenamiento en localStorage) implementan dichos puertos sin contaminar la lógica de negocio.",
      level: "experto"
    },
    {
      title: "¿Cómo aplicar SOLID en paradigmas de Programación Funcional?",
      response:
        "SRP: funciones puras de una sola tarea. OCP: Higher-Order Functions (HOFs) y composición de funciones (`pipe`/`compose`). LSP: tipado estructural coherente y sustitución de tipos en firmas de funciones. ISP: parámetros atómicos y Currying. DIP: inyección de dependencias pasando funciones como argumentos (Partial Application).",
      level: "experto"
    },
    {
      title: "¿Cuáles son los trade-offs y cuándo NO sobre-aplicar SOLID?",
      response:
        "La sobre-ingeniería genera abstracciones prematuras ('YAGNI'), proliferación innecesaria de archivos/interfaces, fragmentación excesiva e indirección cognitiva difícil de rastrear. En prototipos rápidos o lógica trivial, el código simple y directo suele ser superior.",
      level: "experto"
    },
    {
      title: "¿Cómo validar y auditar la adhesión a SOLID en pipelines de CI/CD?",
      response:
        "Midiendo métricas de acoplamiento eferente/aferente e inestabilidad con SonarQube, reglas de ESLint para complejidad ciclomática (`complexity`), prohibición de dependencias circulares con `madge` o `dependency-cruiser`, y pruebas de mutación (Stryker).",
      level: "experto"
    }
  ]
};

export default questionsSOLID;
