import { ISection, TCategory, TModuleId } from "../types";

interface IModuleCatalogEntry {
  id: TModuleId;
  category: TCategory;
  description: string;
  /** Carga diferida del contenido completo: cada módulo es un chunk propio. */
  load: () => Promise<ISection>;
}

/** Orden y metadatos de los módulos. El contenido vive en src/modules/<id>. */
export const moduleCatalog: IModuleCatalogEntry[] = [
  {
    id: "01-internet",
    category: "fundamentos",
    description: "Protocolos de red, modelo TCP/IP, DNS, HTTP/HTTPS, WebSockets y seguridad en la web.",
    load: () => import("../modules/01-internet").then((m) => m.default)
  },
  {
    id: "02-html",
    category: "fundamentos",
    description: "Semántica W3C, accesibilidad a11y, estructura DOM, formularios modernos y optimización SEO.",
    load: () => import("../modules/02-html").then((m) => m.default)
  },
  {
    id: "03-css",
    category: "fundamentos",
    description: "Layout moderno con Flexbox y CSS Grid, especificidad, cascada, animaciones y diseño responsivo.",
    load: () => import("../modules/03-css").then((m) => m.default)
  },
  {
    id: "04-javascript",
    category: "javascript-typescript",
    description: "Motor V8, Event Loop, closures, prototipos, asincronía, promesas y ESNext.",
    load: () => import("../modules/04-javascript").then((m) => m.default)
  },
  {
    id: "05-browser",
    category: "fundamentos",
    description: "Critical Rendering Path, render tree, reflow y repaint, almacenamiento y eventos del navegador.",
    load: () => import("../modules/05-browser").then((m) => m.default)
  },
  {
    id: "21-web-components",
    category: "fundamentos",
    description: "Custom Elements nativos, Shadow DOM, templates, slots, Lit y compiladores como Stencil.",
    load: () => import("../modules/21-web-components").then((m) => m.default)
  },
  {
    id: "06-version-control",
    category: "arquitectura-ops",
    description: "Git avanzado, ramas, rebase interactivo, cherry-pick, conflictos y conventional commits.",
    load: () => import("../modules/06-version-control").then((m) => m.default)
  },
  {
    id: "07-package-managers",
    category: "arquitectura-ops",
    description: "Gestión con npm, pnpm y yarn, resolución de árboles de dependencias y monorepos.",
    load: () => import("../modules/07-package-managers").then((m) => m.default)
  },
  {
    id: "08-build-tools",
    category: "arquitectura-ops",
    description: "Empaquetadores modernos (Vite, Webpack, Rollup), tree-shaking, code splitting y optimización.",
    load: () => import("../modules/08-build-tools").then((m) => m.default)
  },
  {
    id: "09-testing",
    category: "arquitectura-ops",
    description: "Pirámide de pruebas, tests unitarios, de integración y E2E con Vitest, Jest, RTL y Playwright.",
    load: () => import("../modules/09-testing").then((m) => m.default)
  },
  {
    id: "10-typescript",
    category: "javascript-typescript",
    description: "Sistema de tipos estáticos, genéricos, utility types, narrowing, inferencia y compilador tsc.",
    load: () => import("../modules/10-typescript").then((m) => m.default)
  },
  {
    id: "11-webapps",
    category: "arquitectura-ops",
    description: "Arquitecturas SPA, MPA, SSR y SSG, Progressive Web Apps (PWA) y Service Workers.",
    load: () => import("../modules/11-webapps").then((m) => m.default)
  },
  {
    id: "12-react",
    category: "frameworks",
    description: "React 19, Server Components, Hooks, reconciliación Fiber, Virtual DOM y gestión de estado.",
    load: () => import("../modules/12-react").then((m) => m.default)
  },
  {
    id: "13-react-native",
    category: "frameworks",
    description: "Desarrollo móvil nativo con React, New Architecture (Fabric, TurboModules) y puente JSI.",
    load: () => import("../modules/13-react-native").then((m) => m.default)
  },
  {
    id: "14-angular",
    category: "frameworks",
    description: "Signals, inyección de dependencias, RxJS, Change Detection Zoneless y arquitectura modular.",
    load: () => import("../modules/14-angular").then((m) => m.default)
  },
  {
    id: "15-ionic",
    category: "frameworks",
    description: "Aplicaciones móviles híbridas con Capacitor, Web Components y acceso a APIs del dispositivo.",
    load: () => import("../modules/15-ionic").then((m) => m.default)
  },
  {
    id: "16-flutter",
    category: "frameworks",
    description: "Desarrollo multiplataforma en Dart, árbol de widgets, renderizado con Impeller y estado reactivo.",
    load: () => import("../modules/16-flutter").then((m) => m.default)
  },
  {
    id: "17-solid",
    category: "frameworks",
    description: "Principios SOLID, patrones de diseño de software y arquitectura limpia aplicados a frontend.",
    load: () => import("../modules/17-solid").then((m) => m.default)
  },
  {
    id: "18-cicd",
    category: "arquitectura-ops",
    description: "Automatización con GitHub Actions, pipelines de integración continua y despliegues seguros.",
    load: () => import("../modules/18-cicd").then((m) => m.default)
  },
  {
    id: "19-regular-expresions",
    category: "javascript-typescript",
    description: "Patrones de búsqueda, validación de cadenas, grupos de captura, lookaheads y rendimiento.",
    load: () => import("../modules/19-regular-expresions").then((m) => m.default)
  },
  {
    id: "20-ui-ux",
    category: "frameworks",
    description: "Sistemas de diseño, heurísticas de usabilidad de Nielsen, jerarquía visual y accesibilidad.",
    load: () => import("../modules/20-ui-ux").then((m) => m.default)
  }
];
