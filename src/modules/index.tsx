import { ISection } from "../types";

import questionsInternet from "./01-internet";
import questionsHTML from "./02-html";
import questionsCSS from "./03-css";
import questionsJavascript from "./04-javascript";
import questionsBrowser from "./05-browser";
import questionsVersionControl from "./06-version-control";
import questionsPackageManager from "./07-package-managers";
import questionsBuildTools from "./08-build-tools";
import questionsTesting from "./09-testing";
import questionsTypescript from "./10-typescript";
import questionsWebapps from "./11-webapps";
import questionsReact from "./12-react";
import questionsReactNative from "./13-react-native";
import questionsAngular from "./14-angular";
import questionsIonic from "./15-ionic";
import questionsFlutter from "./16-flutter";
import questionsSOLID from "./17-solid";
import questionsCICD from "./18-cicd";
import questionsRegularExpresions from "./19-regular-expresions";
import questionsUIUX from "./20-ui-ux";
import questionsWebComponents from "./21-web-components";

// Asignación de categorías semánticas y descripciones para el dashboard
questionsInternet.category = "fundamentos";
questionsInternet.description = "Protocolos de red, modelo TCP/IP, DNS, HTTP/HTTPS, WebSockets y seguridad en la web.";

questionsHTML.category = "fundamentos";
questionsHTML.description = "Semántica W3C, accesibilidad a11y, estructura DOM, formularios modernos y optimización SEO.";

questionsCSS.category = "fundamentos";
questionsCSS.description = "Layout moderno con Flexbox y CSS Grid, especificidad, cascada, animaciones y diseño responsivo.";

questionsBrowser.category = "fundamentos";
questionsBrowser.description = "Critical Rendering Path, render tree, reflow y repaint, almacenamiento y eventos del navegador.";

questionsWebComponents.category = "fundamentos";
questionsWebComponents.description = "Custom Elements nativos, Shadow DOM, templates, slots, Lit y compiladores como Stencil.";

questionsJavascript.category = "javascript-typescript";
questionsJavascript.description = "Motor V8, Event Loop, closures, prototipos, asincronía, promesas y ESNext.";

questionsTypescript.category = "javascript-typescript";
questionsTypescript.description = "Sistema de tipos estáticos, genéricos, utility types, narrowing, inferencia y compilador tsc.";

questionsRegularExpresions.category = "javascript-typescript";
questionsRegularExpresions.description = "Patrones de búsqueda, validación de cadenas, grupos de captura, lookaheads y rendimiento.";

questionsReact.category = "frameworks";
questionsReact.description = "React 19, Server Components, Hooks, reconciliación Fiber, Virtual DOM y gestión de estado.";

questionsAngular.category = "frameworks";
questionsAngular.description = "Signals, inyección de dependencias, RxJS, Change Detection Zoneless y arquitectura modular.";

questionsSOLID.category = "frameworks";
questionsSOLID.description = "Principios SOLID, patrones de diseño de software y arquitectura limpia aplicados a frontend.";

questionsReactNative.category = "frameworks";
questionsReactNative.description = "Desarrollo móvil nativo con React, New Architecture (Fabric, TurboModules) y puente JSI.";

questionsIonic.category = "frameworks";
questionsIonic.description = "Aplicaciones móviles híbridas con Capacitor, Web Components y acceso a APIs del dispositivo.";

questionsFlutter.category = "frameworks";
questionsFlutter.description = "Desarrollo multiplataforma en Dart, árbol de widgets, renderizado con Impeller y estado reactivo.";

questionsUIUX.category = "frameworks";
questionsUIUX.description = "Sistemas de diseño, heurísticas de usabilidad de Nielsen, jerarquía visual y accesibilidad.";

questionsVersionControl.category = "arquitectura-ops";
questionsVersionControl.description = "Git avanzado, ramas, rebase interactivo, cherry-pick, conflictos y conventional commits.";

questionsPackageManager.category = "arquitectura-ops";
questionsPackageManager.description = "Gestión con npm, pnpm y yarn, resolución de árboles de dependencias y monorepos.";

questionsBuildTools.category = "arquitectura-ops";
questionsBuildTools.description = "Empaquetadores modernos (Vite, Webpack, Rollup), tree-shaking, code splitting y optimización.";

questionsTesting.category = "arquitectura-ops";
questionsTesting.description = "Pirámide de pruebas, tests unitarios, de integración y E2E con Vitest, Jest, RTL y Playwright.";

questionsWebapps.category = "arquitectura-ops";
questionsWebapps.description = "Arquitecturas SPA, MPA, SSR y SSG, Progressive Web Apps (PWA) y Service Workers.";

questionsCICD.category = "arquitectura-ops";
questionsCICD.description = "Automatización con GitHub Actions, pipelines de integración continua y despliegues seguros.";

const sections: ISection[] = [
  questionsInternet,
  questionsHTML,
  questionsCSS,
  questionsJavascript,
  questionsBrowser,
  questionsWebComponents,
  questionsVersionControl,
  questionsPackageManager,
  questionsBuildTools,
  questionsTesting,
  questionsTypescript,
  questionsWebapps,
  questionsReact,
  questionsReactNative,
  questionsAngular,
  questionsIonic,
  questionsFlutter,
  questionsSOLID,
  questionsCICD,
  questionsRegularExpresions,
  questionsUIUX
];

export { sections };
