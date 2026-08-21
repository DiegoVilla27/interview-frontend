import { ISection } from "../../types";

export const questionsTesting: ISection = {
  title: "Testing",
  collapse: "collapseTesting",
  icon: "testing",
  questions: [
    { title: "¿Qué es testing en el desarrollo frontend?", response: "Es el proceso de verificar que el código funciona como se espera. Permite detectar errores antes de producción, documentar comportamiento esperado y refactorizar con confianza.", level: "basico" },
    { title: "¿Qué tipos de pruebas existen?", response: "Unitarias: funciones aisladas. Integración: interacción entre módulos. E2E: flujo completo del usuario. Visual: regresiones de UI. Performance: métricas de rendimiento.", level: "basico" },
    { title: "¿Qué es el TDD (Test Driven Development)?", response: "Metodología: 1) Escribir test que falle (Red), 2) Escribir código mínimo para pasar (Green), 3) Refactorizar (Refactor). Garantiza cobertura y diseño orientado a testabilidad.", level: "basico" },
    { title: "¿Qué beneficios aporta la cobertura de código?", response: "Mide qué porcentaje del código está cubierto por tests (líneas, ramas, funciones). Ayuda a identificar código no validado. Un 80%+ es buen objetivo, pero cobertura ≠ calidad.", level: "basico" },
    { title: "¿Qué es Jest y por qué es popular?", response: "Framework de testing de JavaScript por Meta. Zero-config, rápido (ejecución paralela), incluye mocks automáticos, snapshots, cobertura integrada, y soporte para React/Vue/Node.", level: "basico" },
    { title: "¿Cuál es la diferencia entre mocks, stubs y spies?", response: "Mocks: objetos simulados que verifican interacciones. Stubs: proveen respuestas predefinidas sin verificar uso. Spies: envuelven funciones reales y registran cómo se llamaron.", level: "medio" },
    { title: "¿Qué son los snapshot tests en Jest?", response: "Guardan la salida serializada de un componente y comparan con ejecuciones futuras. Detectan cambios inesperados en la UI. Útiles pero frágiles; actualizar con --updateSnapshot.", level: "medio" },
    { title: "¿Cómo se configuran pruebas asíncronas en Jest?", response: "Con async/await, return de Promise, o callback done(). Para timers: jest.useFakeTimers(). Para fetch: msw (Mock Service Worker) o jest.mock().", level: "medio" },
    { title: "¿Qué es React Testing Library (RTL)?", response: "Librería que promueve testing desde la perspectiva del usuario. Busca por texto, role, label (no por implementación). Principio: 'The more your tests resemble how software is used, the more confidence they give'.", level: "medio" },
    { title: "¿Qué diferencia hay entre getBy, queryBy y findBy en RTL?", response: "getBy: lanza error si no encuentra. queryBy: retorna null si no encuentra (útil para verificar ausencia). findBy: async, espera hasta encontrar (ideal para cambios de estado).", level: "medio" },
    { title: "¿Qué es Vitest y por qué reemplaza a Jest?", response: "Framework de testing compatible con Jest pero nativo de Vite. Usa el mismo config y pipeline de transformación, soporta ESM nativo, es más rápido y tiene HMR de tests.", level: "avanzado" },
    { title: "¿Qué es Cypress y para qué se usa?", response: "Framework de testing E2E que ejecuta tests en un navegador real. Permite interactuar con la UI, hacer assertions visuales, interceptar network requests, y time-travel debugging.", level: "avanzado" },
    { title: "¿Qué es Playwright y cómo se compara con Cypress?", response: "Framework E2E de Microsoft que soporta Chromium, Firefox y WebKit. Multi-tab, multi-origin, parallelism nativo. Cypress es más simple pero limitado a un tab y un origin.", level: "avanzado" },
    { title: "¿Qué es MSW (Mock Service Worker)?", response: "Librería que intercepta requests HTTP a nivel de Service Worker. Permite mockear APIs sin modificar código de la app. Funciona en tests (Jest/Vitest) y en desarrollo (browser).", level: "avanzado" },
    { title: "¿Cómo testeas custom hooks en React?", response: "Con @testing-library/react y renderHook(). Se llama al hook, se actúan los cambios (act()), y se verifican los resultados. No se renderiza UI, solo la lógica del hook.", level: "avanzado" },
    { title: "¿Qué es mutation testing?", response: "Técnica que introduce cambios (mutaciones) en el código fuente y verifica que los tests los detecten. Si un mutante sobrevive, indica un test débil. Herramienta: Stryker.", level: "avanzado" },
    { title: "¿Cómo diseñarías una estrategia de testing para una app enterprise?", response: "Pirámide de testing: muchos unit tests (rápidos), integración media, pocos E2E (lentos). Contract testing entre servicios. Visual regression con Chromatic. Performance testing con Lighthouse CI.", level: "experto" },
    { title: "¿Qué es contract testing y cuándo se usa?", response: "Verifica que el contrato (schema) entre un API provider y consumer se mantiene. Herramientas: Pact. Evita roturas cuando frontend y backend evolucionan independientemente.", level: "experto" },
    { title: "¿Qué es visual regression testing?", response: "Compara screenshots pixel-por-pixel entre versiones. Detecta cambios visuales inesperados. Herramientas: Chromatic (Storybook), Percy, BackstopJS. Esencial en design systems.", level: "experto" },
    { title: "¿Qué es property-based testing?", response: "En lugar de casos específicos, defines propiedades que siempre deben cumplirse y el framework genera inputs aleatorios. Encuentra edge cases. Herramientas: fast-check (JS), Hypothesis (Python).", level: "experto" }
  ]
};

export default questionsTesting;
