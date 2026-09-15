import { ISection } from "../../types";

export const questionsTesting: ISection = {
  title: "Testing",
  collapse: "collapseTesting",
  icon: "testing",
  category: "arquitectura-ops",
  description: "Pirámide de pruebas, tests unitarios, de integración y E2E con Vitest, Jest, RTL y Playwright.",
  questions: [
    {
        "title": "¿Qué es la Pirámide de Testing vs el Testing Trophy de Kent C. Dodds y cómo balancear coste, velocidad y confianza en proyectos enterprise?",
        "response": "Históricamente, la **Pirámide de Testing** (propuesta por Mike Cohn) recomendaba una base masiva de pruebas unitarias, una capa intermedia de integración y un vértice mínimo de pruebas End-to-End (E2E).\n\n### La Disrupción del Testing Trophy en Frontend:\nEn aplicaciones frontend modernas con React y ricas en interfaces de usuario, aislar cada componente y mockear todo a su alrededor mediante tests unitarios puros a menudo produce tests que pasan en verde mientras la aplicación real falla en producción. Por ello, **Kent C. Dodds introdujo el Testing Trophy**:\n\n1. **Static Analysis (TypeScript, ESLint, Prettier)**:\n   - La base del trofeo: detecta errores de sintaxis, tipos incompatibles y llamadas a variables inexistentes antes de ejecutar un solo test, con coste prácticamente cero.\n2. **Unit Tests (Pruebas Unitarias)**:\n   - Enfocadas exclusivamente en **lógica de negocio pura y utilidades desacopladas** (cálculos de impuestos, formateadores, parsers de datos, algoritmos puros).\n3. **Integration Tests (El Centro de Gravedad del Trofeo)**:\n   - **El mayor retorno de inversión (ROI)**: Prueba cómo cooperan múltiples componentes reales junto con su gestor de estado (Zustand/Redux) y el cliente HTTP interceptado por MSW.\n   - Simulan flujos de usuario completos (p. ej. renderizar un formulario, escribir datos, hacer clic en enviar y verificar el cambio en la vista).\n4. **End-to-End (E2E con Playwright)**:\n   - Prueban los flujos críticos de negocio (el 'happy path' de registro, login, checkout y pagos) en navegadores reales levantando el frontend y el backend.",
        "codeExample": {
            "language": "typescript",
            "code": "// Test de Integración con RTL + MSW (El corazón del Testing Trophy):\nimport { render, screen } from '@testing-library/react';\nimport userEvent from '@testing-library/user-event';\nimport { UserProfileContainer } from './UserProfileContainer';\nimport { createTestQueryClientWrapper } from '@/test/test-utils';\n\ntest('flujo de integración: edita el perfil y persiste los cambios en la UI', async () => {\n  const user = userEvent.setup();\n  \n  // Renderiza el contenedor completo con sus Providers y MSW activo:\n  render(<UserProfileContainer userId=\"usr_10\" />, {\n    wrapper: createTestQueryClientWrapper(),\n  });\n\n  // 1. Espera a que cargue la data inicial de red:\n  const nameInput = await screen.findByRole('textbox', { name: /nombre/i });\n  \n  // 2. Interacción real del usuario:\n  await user.clear(nameInput);\n  await user.type(nameInput, 'Diego Villa');\n  await user.click(screen.getByRole('button', { name: /guardar/i }));\n\n  // 3. Aserción de comportamiento en el DOM visible:\n  expect(await screen.findByText(/perfil actualizado con éxito/i)).toBeInTheDocument();\n});"
        },
        "visualDiagram": {
            "id": "diag-tst-01",
            "title": "Pirámide de Testing vs Testing Trophy (Kent C. Dodds)",
            "caption": "El Testing Trophy sitúa a las pruebas de integración en el centro de gravedad del frontend: máxima confianza al menor coste de mantenimiento.",
            "diagramType": "test-pyramid-trophy-distribution"
        },
        "interviewTips": {
            "whatInterviewersWant": "Justificar por qué en frontend las pruebas de integración con RTL tienen mayor retorno de inversión que llenar el proyecto de tests unitarios aislados con mocks excesivos.",
            "commonPitfalls": [
                "Intentar alcanzar 100% de cobertura únicamente con pruebas unitarias sobre componentes vacíos mockeando todos sus hooks hijos.",
                "Abusar de pruebas E2E lentas para validar validaciones de formularios que se resuelven en milisegundos con tests de integración."
            ]
        },
        "quiz": {
            "question": "¿Por qué el modelo 'Testing Trophy' sitúa a las pruebas de integración como el nivel más amplio y recomendado para aplicaciones frontend?",
            "options": [
                "Porque son más rápidas de ejecutar que el tipado estático de TypeScript",
                "Porque ofrecen el mayor retorno de inversión (ROI), combinando alta confianza de comportamiento real con velocidad de ejecución y resiliencia ante refactorizaciones",
                "Porque eliminan por completo la necesidad de compilar el código",
                "Porque garantizan automáticamente la compatibilidad con Internet Explorer"
            ],
            "correctIndex": 1,
            "explanation": "Las pruebas de integración validan cómo colaboran los componentes con el DOM, el estado y las llamadas simuladas de red, aportando una fidelidad casi idéntica a producción sin la lentitud ni fragilidad de los tests E2E."
        },
        "level": "basico"
    },
    {
        "title": "¿Cuál es la taxonomía formal de los Test Doubles de Martin Fowler (Dummy, Stub, Spy, Mock, Fake) y cuándo aplicar cada uno?",
        "response": "El término coloquial 'mock' suele usarse indiscriminadamente para cualquier sustituto de prueba. Sin embargo, en el estándar formal de arquitectura definido por Gerard Meszaros y popularizado por **Martin Fowler**, existen **cinco tipos distintos de Test Doubles (Dobles de Prueba)**:\n\n1. **Dummy**:\n   - Objetos que se pasan simplemente para satisfacer la firma de un método o constructor (p. ej. un argumento obligatorio `logger`), pero **nunca se leen ni se invocan realmente** en el test.\n2. **Stub**:\n   - Proporciona **respuestas fijas enlatadas** a las llamadas realizadas durante la prueba. No le interesa cuántas veces se le llamó ni con qué argumentos; solo suministra datos (`vi.fn().mockResolvedValue({ id: 1 })`).\n3. **Spy**:\n   - Envuelve una función real o método existente y **registra métricas de invocación** (cuántas veces fue llamada, qué argumentos recibió, qué retornó), manteniendo la implementación original intacta a menos que se sobreescriba (`vi.spyOn(console, 'error')`).\n4. **Mock**:\n   - Objeto preprogramado con **expectativas estrictas de comportamiento**. Si el código bajo prueba no invoca el método exactamente con los parámetros esperados, la prueba falla explícitamente (`expect(mockSend).toHaveBeenCalledWith('token')`).\n5. **Fake**:\n   - Una **implementación funcional real y simplificada**, no apta para producción por temas de rendimiento o persistencia, pero ideal para tests (p. ej. `InMemoryUserRepository` con un `Map` local en vez de conectar a PostgreSQL).",
        "codeExample": {
            "language": "typescript",
            "code": "// 1. Stub: Solo provee datos enlatados\nconst authStub = { getUser: () => ({ id: 'usr_1', role: 'admin' }) };\n\n// 2. Spy: Envuelve y audita la función real\nconst trackingSpy = vi.spyOn(analyticsService, 'trackEvent');\n\n// 3. Mock: Define expectativa estricta de contrato\nconst emailMock = vi.fn();\n// Ejecución del código...\nexpect(emailMock).toHaveBeenCalledTimes(1);\nexpect(emailMock).toHaveBeenCalledWith('diego@dev.com', 'Bienvenido');\n\n// 4. Fake: Implementación completa simplificada en memoria\nclass FakeAuthRepository {\n  private users = new Map<string, User>();\n  async save(user: User) { this.users.set(user.id, user); }\n  async findById(id: string) { return this.users.get(id) ?? null; }\n}"
        },
        "visualDiagram": {
            "id": "diag-tst-02",
            "title": "Taxonomía Formal de Test Doubles (Martin Fowler)",
            "caption": "Diferencias funcionales: desde objetos de relleno (Dummy), respuestas fijas (Stub), espionaje (Spy), expectativas estrictas (Mock) hasta implementaciones en memoria (Fake).",
            "diagramType": "test-test-doubles-taxonomy"
        },
        "interviewTips": {
            "whatInterviewersWant": "Demostrar precisión técnica distinguiendo un Stub (estado de salida) de un Mock (verificación de comportamiento) y un Fake (lógica real en memoria).",
            "commonPitfalls": [
                "Llamar 'mock' a cualquier función simulada en la entrevista sin saber qué la distingue de un stub o spy.",
                "Usar Mocks para todo en vez de Fakes o Stubs, lo que acopla la prueba al detalle de cómo se invoca una función interna en lugar del resultado producido."
            ]
        },
        "quiz": {
            "question": "¿Cuál es la diferencia fundamental entre un Stub y un Mock según la definición de Martin Fowler?",
            "options": [
                "El Stub se escribe en TypeScript y el Mock en JavaScript",
                "El Stub únicamente provee respuestas fijas para alimentar la prueba sin validar interacciones, mientras el Mock verifica que se hayan cumplido expectativas de comportamiento específicas",
                "El Mock solo se puede utilizar en entornos backend",
                "El Stub ejecuta el código en un navegador real"
            ],
            "correctIndex": 1,
            "explanation": "Los Stubs verifican estado (proveen datos predefinidos sin importar cómo se llamen), mientras que los Mocks verifican comportamiento (inspeccionan si se invocaron los métodos esperados con los parámetros exactos)."
        },
        "level": "basico"
    },
    {
        "title": "¿Cuáles son los principios rectores de React Testing Library (RTL) y por qué se prohíbe el testing de detalles de implementación?",
        "response": "**React Testing Library (RTL)** fue creada por Kent C. Dodds para reemplazar librerías como Enzyme, cuyo paradigma promovía probar el estado interno (`wrapper.state()`) y las props internas de los componentes.\n\n### El Principio Rector Fundamental:\n> *'The more your tests resemble the way your software is used, the more confidence they can give you.'*\n\n### Por qué se Prohíbe Testear Detalles de Implementación:\n1. **Fragilidad ante Refactorizaciones (False Negatives)**:\n   - Si un test verifica `expect(wrapper.state('isOpen')).toBe(true)` y el equipo decide migrar de `useState` a un custom hook o Zustand sin alterar la interfaz visual, el test de Enzyme falla estrepitosamente a pesar de que la aplicación funciona a la perfección para el usuario.\n2. **Falsa Sensación de Seguridad (False Positives)**:\n   - Un test puede comprobar que la función interna `onClick` fue invocada, pero si el botón tiene un CSS con `pointer-events: none` o está tapado por un modal, el usuario real no puede hacer clic en la pantalla física aunque el test pase en verde.\n\n### La Solución de RTL:\n- RTL interactúa con el componente **única y exclusivamente a través del DOM renderizado**, simulando eventos reales de usuario (`userEvent`) y buscando elementos mediante su accesibilidad (roles ARIA, etiquetas visibles y nombres accesibles).",
        "codeExample": {
            "language": "tsx",
            "code": "// ❌ ANTI-PATRÓN (Enzyme / Detalles de implementación):\n// wrapper.find('Button').prop('onClick')();\n// expect(wrapper.state('count')).toBe(1);\n\n// ✅ PATRÓN OFICIAL RTL (Centrado en el usuario):\nimport { render, screen } from '@testing-library/react';\nimport userEvent from '@testing-library/user-event';\nimport { Counter } from './Counter';\n\ntest('incrementa el contador visible al hacer clic', async () => {\n  const user = userEvent.setup();\n  render(<Counter initialCount={0} />);\n\n  // Busca el botón tal como lo percibe una persona o lector de pantalla:\n  const incrementBtn = screen.getByRole('button', { name: /incrementar/i });\n  \n  // Simula el click real con dispatch de eventos (mousedown, mouseup, click):\n  await user.click(incrementBtn);\n\n  // Aserción sobre el contenido perceptible en pantalla:\n  expect(screen.getByText(/contador: 1/i)).toBeInTheDocument();\n});"
        },
        "visualDiagram": {
            "id": "diag-tst-03",
            "title": "Filosofía de React Testing Library: Testear como el Usuario",
            "caption": "Enzyme acoplaba las pruebas al estado interno generando tests frágiles; RTL prueba la experiencia real en el DOM perceptible resistiendo refactors.",
            "diagramType": "test-rtl-guiding-principles"
        },
        "interviewTips": {
            "whatInterviewersWant": "Citar el principio de Kent C. Dodds y explicar cómo RTL evita tanto los falsos negativos (tests rotos tras un refactor limpio) como los falsos positivos (tests en verde con UI rota en pantalla).",
            "commonPitfalls": [
                "Usar `fireEvent` en vez de `@testing-library/user-event` (`fireEvent` solo dispara un evento sintético plano sin simular el foco, hover ni la secuencia completa del navegador).",
                "Intentar inspeccionar el estado de un hook o props dentro de un test de RTL."
            ]
        },
        "quiz": {
            "question": "¿Qué problema grave causaba en los proyectos el testeo de detalles de implementación (como validar el state interno de React)?",
            "options": [
                "Hacía que las pruebas consumieran más memoria RAM en el servidor de CI",
                "Hacía que los tests fallaran cada vez que se refactorizaba el código interno aunque la interfaz visual siguiera funcionando perfectamente para el usuario (falsos negativos)",
                "Impedía que el código se compilara con TypeScript",
                "Desactivaba el sistema de Hot Module Replacement"
            ],
            "correctIndex": 1,
            "explanation": "El acoplamiento a detalles de implementación genera falsos negativos constantes: cualquier mejora de código que cambie un nombre de variable o mueva el estado rompe las pruebas, encareciendo drásticamente el mantenimiento."
        },
        "level": "basico"
    },
    {
        "title": "¿Cuál es la jerarquía de prioridad de las queries de RTL (Role > LabelText > Placeholder > TestId) y las diferencias asíncronas entre getBy, queryBy y findBy?",
        "response": "React Testing Library establece una **jerarquía estricta de selectores** diseñada para promover buenas prácticas de accesibilidad (a11y) y semántica web.\n\n### 1. Jerarquía de Prioridad de Queries:\n1. **Accesibles a todos (Máxima Prioridad)**:\n   - **`getByRole`**: El rey de los selectores (`screen.getByRole('button', { name: /enviar/i })`). Valida tanto la semántica HTML (`<button>`, `<input>`, `<nav>`) como el árbol de accesibilidad.\n   - **`getByLabelText`**: Ideal para campos de formularios asociados a un `<label>`.\n2. **Semánticos Semivisuales**:\n   - **`getByPlaceholderText`**: Solo si el input carece de label permanente.\n   - **`getByText`**: Para contenido no interactivo (párrafos, títulos, spans).\n3. **Fidelidad Visual**:\n   - **`getByAltText`** (imágenes) y **`getByTitle`** (tooltips/SVGs).\n4. **Último Recurso (Escape Hatch)**:\n   - **`getByTestId`** (`data-testid=\"custom-id\"`): Usar únicamente cuando el elemento no tiene rol ni texto visible o para layouts dinámicos donde ningún selector accesible sea viable.\n\n### 2. Diferencias Asíncronas: `getBy` vs `queryBy` vs `findBy`:\n\n| Prefijo | Sincrónico / Asíncrono | Si NO encuentra el elemento | Si encuentra > 1 elemento | Caso de Uso Principal |\n| :--- | :--- | :--- | :--- | :--- |\n| **`getBy...`** | Sincrónico | **Lanza ERROR fatal** | Lanza ERROR | Elemento que DEBE estar en el DOM en este instante. |\n| **`queryBy...`** | Sincrónico | **Retorna `null`** | Lanza ERROR | **Única query para verificar AUSENCIA** (`expect(queryBy...).not.toBeInTheDocument()`). |\n| **`findBy...`** | **Asíncrono** (devuelve Promise) | **Lanza ERROR tras timeout** (1000ms) | Lanza ERROR | Elementos que aparecen tras peticiones de red o animaciones. |",
        "codeExample": {
            "language": "tsx",
            "code": "// Ejemplos de uso según la situación:\n\n// 1. getByRole para el 90% de los elementos inmediatos:\nconst submitBtn = screen.getByRole('button', { name: /confirmar orden/i });\n\n// 2. queryByRole: ÚNICA forma válida de asertar que algo NO existe en el DOM:\n// ❌ INCORRECTO: expect(screen.getByText('Error')).not.toBeInTheDocument(); // ¡Lanza error antes del expect!\n// ✅ CORRECTO:\nexpect(screen.queryByRole('alert')).not.toBeInTheDocument();\n\n// 3. findByRole: Espera automáticamente a que el elemento aparezca en pantalla:\nconst successBanner = await screen.findByRole('heading', { name: /felicidades/i });\nexpect(successBanner).toBeVisible();"
        },
        "visualDiagram": {
            "id": "diag-tst-04",
            "title": "Jerarquía de Queries & Métodos Asíncronos en React Testing Library",
            "caption": "Prioridad accesible (Role > LabelText > Text > TestId) y matriz de comportamiento sincrónico vs asíncrono para getBy, queryBy y findBy.",
            "diagramType": "test-rtl-queries-priority-matrix"
        },
        "interviewTips": {
            "whatInterviewersWant": "Detectar si conoces el bug clásico de usar `getBy` para comprobar ausencia (lanza excepción antes de que `expect` pueda evaluar) y dominar `findBy` para operaciones asíncronas.",
            "commonPitfalls": [
                "Usar `screen.getByTestId` para todo por pereza, perdiendo la verificación de accesibilidad que provee `getByRole`.",
                "Escribir `await waitFor(() => screen.getByText('x'))` en vez de usar directamente `await screen.findByText('x')` (findBy ya envuelve waitFor internamente)."
            ]
        },
        "quiz": {
            "question": "¿Por qué NUNCA debe usarse 'screen.getByText(...)' para verificar que un elemento NO está presente en el documento?",
            "options": [
                "Porque getByText solo funciona con números",
                "Porque si el elemento no existe, getByText lanza un error inmediatamente y aborta el test antes de que el assertion .not.toBeInTheDocument() pueda evaluarse",
                "Porque getByText devuelve true si no lo encuentra",
                "Porque getByText bloquea el hilo principal durante 5 segundos"
            ],
            "correctIndex": 1,
            "explanation": "Las queries 'getBy' lanzan una excepción de inmediato si no encuentran el nodo en el DOM. Para asertar ausencia se debe utilizar obligatoriamente 'queryBy', que retorna null de forma segura."
        },
        "level": "medio"
    },
    {
        "title": "¿Por qué Vitest supera arquitectónicamente a Jest en entornos modernos basados en Vite (ESM nativo, pipelines de transformación unificados y multi-threading)?",
        "response": "**Vitest** fue concebido como el motor de pruebas de nueva generación diseñado específicamente para integrarse de forma nativa con **Vite**, superando las limitaciones arquitectónicas heredadas de **Jest**.\n\n### Comparativa Arquitectónica:\n\n1. **Pipeline de Transformación Unificado**:\n   - **Jest**: No tiene conocimiento de Vite. Requiere configurar Babel, `ts-jest` o `esbuild-jest` por separado. Esto produce inconsistencias severas: un plugin de Vite (ej. `@vitejs/plugin-react` o resolución de alias `@/`) funciona en la app pero falla en Jest si no se duplica la configuración en `jest.config.js`.\n   - **Vitest**: Reutiliza **el mismo archivo `vite.config.ts`**, los mismos loaders y los mismos plugins que la aplicación web. Lo que compila en tu servidor de desarrollo compila exactamente igual en tus tests sin configuración adicional.\n2. **Soporte Nativo de ECMAScript Modules (ESM)**:\n   - Jest nació en la era CommonJS de Node.js. Soporta ESM de forma experimental y con fricción continua.\n   - Vitest opera de forma nativa sobre ESM en memoria con resolución de dependencias ultra-rápida.\n3. **Rendimiento y Multi-Threading**:\n   - Vitest ejecuta tests en paralelo mediante **Worker Threads (`tinypool`)**, aprovechando todos los núcleos sin el alto coste de memoria de los procesos hijos (`child_process`) de Jest.\n4. **Hot Module Replacement (HMR) en Tests**:\n   - En modo watch (`vitest dev`), Vitest utiliza el grafo de módulos de Vite para re-ejecutar en milisegundos **únicamente los tests afectados por el archivo guardado**.",
        "codeExample": {
            "language": "typescript",
            "code": "// vitest.config.ts (hereda automáticamente la configuración de vite.config.ts):\nimport { defineConfig, mergeConfig } from 'vitest/config';\nimport viteConfig from './vite.config';\n\nexport default mergeConfig(\n  viteConfig,\n  defineConfig({\n    test: {\n      globals: true, // Habilita describe, it, expect sin importarlos\n      environment: 'jsdom', // o 'happy-dom' para máxima velocidad\n      setupFiles: ['./src/test/setup.ts'],\n      include: ['src/**/*.{test,spec}.{ts,tsx}'],\n      coverage: {\n        provider: 'v8', // Cobertura nativa en C++ del motor V8\n        reporter: ['text', 'json', 'html'],\n      },\n    },\n  })\n);"
        },
        "visualDiagram": {
            "id": "diag-tst-05",
            "title": "Arquitectura Interna: Vitest (Vite Engine) vs Jest (Legacy Node)",
            "caption": "Vitest comparte el mismo pipeline de plugins y transformaciones que Vite, ejecutando sobre Worker Threads nativos con soporte ESM total.",
            "diagramType": "test-vitest-vs-jest-architecture"
        },
        "interviewTips": {
            "whatInterviewersWant": "Explicar la ventaja del pipeline unificado (cero discrepancias de plugins/alias entre tests y aplicación) y el uso de Happy-DOM o V8 coverage en Vitest.",
            "commonPitfalls": [
                "Creer que migrar de Jest a Vitest requiere reescribir todos los tests (la API de `describe`, `it`, `expect` y `vi` es prácticamente idéntica a Jest con compatibilidad de mocks).",
                "Olvidar configurar el entorno `jsdom` o `happy-dom` en Vitest para tests de componentes React que necesitan la API del DOM."
            ]
        },
        "quiz": {
            "question": "¿Cuál es la principal ventaja arquitectónica de Vitest frente a Jest en un proyecto construido con Vite?",
            "options": [
                "Vitest no requiere escribir assertions",
                "Vitest reutiliza exactamente la misma configuración, plugins y pipeline de compilación de vite.config.ts, eliminando la duplicación de configs de Babel/ts-jest",
                "Vitest solo ejecuta tests en la nube de AWS",
                "Jest no permite probar funciones asíncronas"
            ],
            "correctIndex": 1,
            "explanation": "Al compartir el motor de Vite, Vitest elimina las fricciones clásicas de Jest con alias de rutas, plugins de CSS/SVGs y soporte de TypeScript, procesando los tests a través del mismo pipeline que la aplicación real."
        },
        "level": "medio"
    },
    {
        "title": "¿Cómo funciona Mock Service Worker (MSW v2) a bajo nivel interceptando peticiones de red mediante Service Workers y HTTP Interceptors en Node/Vitest?",
        "response": "**Mock Service Worker (MSW)** revolucionó el testing frontend al introducir **simulación a nivel de red real** sin modificar el código de la aplicación ni mockear librerías de cliente HTTP (`axios`, `fetch`).\n\n### 1. Mecánica en el Navegador (Service Worker):\n- Al inicializar MSW en el navegador (`msw.start()`), registra un archivo **`mockServiceWorker.js`**.\n- Cuando tu aplicación ejecuta `fetch('/api/users')`, la petición sale del hilo principal de JavaScript y entra en la tubería de red del navegador.\n- El Service Worker intercepta el evento `fetch` en la capa de red del sistema operativo:\n  - Si la URL coincide con un handler configurado (`http.get('/api/users')`), responde con un `HttpResponse.json(...)` simulado.\n  - En la pestaña *Network* de DevTools, la petición aparece con status `200 OK` (marcada como servida por ServiceWorker).\n\n### 2. Mecánica en Node.js / Vitest (Class-based Interceptors):\n- Dado que Node.js no tiene Service Workers, MSW v2 utiliza la librería interna `@mswjs/interceptors`.\n- Parchea de forma transparente los módulos de red de bajo nivel (`http.ClientRequest`, `https.request`, y el cliente nativo `fetch`/`undici` de Node v18+).\n- **Beneficio Máximo**: Puedes reutilizar **los mismos handlers de simulación** tanto para tus tests de integración en Vitest como para el desarrollo local interactivo en el navegador y Storybook.",
        "codeExample": {
            "language": "typescript",
            "code": "// 1. Definición de Handlers de red en src/mocks/handlers.ts (MSW v2):\nimport { http, HttpResponse } from 'msw';\n\nexport const handlers = [\n  http.get('https://api.acme.com/v1/users/:id', ({ params }) => {\n    const { id } = params;\n    if (id === '404') {\n      return new HttpResponse(null, { status: 404, statusText: 'Not Found' });\n    }\n    return HttpResponse.json({\n      id,\n      name: 'Diego Villa',\n      role: 'Staff Engineer',\n    });\n  }),\n];\n\n// 2. Setup en Vitest (src/test/setup.ts):\nimport { setupServer } from 'msw/node';\nimport { handlers } from '../mocks/handlers';\n\nexport const server = setupServer(...handlers);\nbeforeAll(() => server.listen({ onUnhandledRequest: 'error' }));\nafterEach(() => server.resetHandlers());\nafterAll(() => server.close());"
        },
        "visualDiagram": {
            "id": "diag-tst-06",
            "title": "Mock Service Worker (MSW v2): Intercepción Real a Nivel de Red",
            "caption": "Intercepción transparente: Service Workers en navegador y parchado de protocolos HTTP/undici en Node.js sin alterar el código de la aplicación.",
            "diagramType": "test-msw-network-interception"
        },
        "interviewTips": {
            "whatInterviewersWant": "Explicar por qué mockear `axios` o `fetch` con `vi.mock('axios')` es un anti-patrón (oculta errores de serialización, headers y query params) frente a la pureza de intercepción de red de MSW.",
            "commonPitfalls": [
                "Olvidar llamar a `server.resetHandlers()` en el hook `afterEach`, provocando que mocks temporales de un test contaminen tests posteriores.",
                "Usar la sintaxis legacy de MSW v1 (`rest.get` en vez de `http.get` y `res(ctx.json)` en vez de `HttpResponse.json`)."
            ]
        },
        "quiz": {
            "question": "¿Por qué utilizar MSW (Mock Service Worker) proporciona mayor fidelidad que mockear directamente 'axios' o 'window.fetch' con jest.mock?",
            "options": [
                "Porque MSW reescribe el backend en Java automáticamente",
                "Porque la aplicación emite peticiones HTTP reales que son interceptadas en la capa de red del protocolo, probando headers, serialización y middlewares sin alterar el cliente HTTP",
                "Porque MSW solo funciona con bases de datos MySQL",
                "Porque mockear axios está prohibido por la especificación de ECMAScript"
            ],
            "correctIndex": 1,
            "explanation": "Al interceptar a nivel de red, todo el código real del cliente HTTP (interceptores de Axios, serialización de datos, React Query cache) se ejecuta exactamente igual que en producción."
        },
        "level": "medio"
    },
    {
        "title": "¿Cuál es la arquitectura interna de Playwright frente a Cypress y Selenium (conexión por Chrome DevTools Protocol / WebSocket, aislamiento de BrowserContexts y paralelismo nativo)?",
        "response": "**Playwright** (creado por Microsoft) revolucionó el testing End-to-End (E2E) al resolver las limitaciones históricas que afectaban a Selenium (basado en peticiones HTTP WebDriver bloqueantes) y Cypress (ejecutado dentro del mismo iframe del navegador).\n\n### 1. Conexión WebSocket Fuera de Proceso (CDP):\n- **Cypress**: Corre dentro del navegador en un iframe junto con tu aplicación. Sufre restricciones de seguridad del DOM, no puede manejar múltiples pestañas ni múltiples dominios (`multi-origin`) sin trucos, y puede colapsar si la app consume mucha memoria.\n- **Playwright**: Corre como un **proceso Node.js externo** que controla el navegador mediante una conexión persistente **WebSocket bidireccional de baja latencia** usando el protocolo **Chrome DevTools Protocol (CDP)** para Chromium y equivalentes nativos para Firefox y WebKit.\n\n### 2. BrowserContexts: Aislamiento Ultrarrápido O(1):\n- En Selenium o Cypress, aislar dos tests solía requerir cerrar y volver a arrancar el proceso del navegador (lo que toma de 2 a 5 segundos por test).\n- Playwright arranca **una sola instancia del navegador** y para cada test crea un **`BrowserContext`** independiente en memoria (equivalente a una ventana de incógnito):\n  - Cookies, `localStorage`, sessionStorage y caché 100% aislados.\n  - Tiempo de creación: **menos de 5 milisegundos**.\n\n### 3. Auto-Waiting Nativo:\n- Playwright espera automáticamente a que los elementos sean visibles, estables, no estén cubiertos por overlays y acepten eventos antes de hacer clic, eliminando el 99% de los tests inestables (flaky tests).",
        "codeExample": {
            "language": "typescript",
            "code": "// tests/checkout.spec.ts con Playwright:\nimport { test, expect } from '@playwright/test';\n\ntest('flujo multi-pestaña: checkout con confirmación de soporte', async ({ context, page }) => {\n  // 1. Navegación en pestaña principal:\n  await page.goto('/checkout');\n  await page.getByRole('button', { name: /pagar orden/i }).click();\n\n  // 2. Manejo nativo de apertura de nueva pestaña o popup:\n  const [supportPage] = await Promise.all([\n    context.waitForEvent('page'),\n    page.getByRole('link', { name: /abrir chat de soporte/i }).click(),\n  ]);\n\n  // 3. Interactúa con la nueva pestaña independiente:\n  await supportPage.getByRole('textbox').fill('¿Mi orden fue aprobada?');\n  await expect(supportPage.getByText(/agente conectado/i)).toBeVisible();\n});"
        },
        "visualDiagram": {
            "id": "diag-tst-07",
            "title": "Arquitectura de Playwright: WebSocket CDP & BrowserContexts",
            "caption": "Control fuera de proceso vía WebSocket bidireccional, BrowserContexts aislados en milisegundos y soporte multi-tab real.",
            "diagramType": "test-playwright-architecture-cdp"
        },
        "interviewTips": {
            "whatInterviewersWant": "Saber contrastar Playwright con Cypress (múltiples tabs, soporte nativo de WebKit de Safari real, paralelismo de workers y ejecución fuera de iframe).",
            "commonPitfalls": [
                "Escribir `page.waitForTimeout(5000)` en Playwright (anti-patrón: Playwright tiene auto-waiting nativo para todas las acciones).",
                "Creer que Cypress y Playwright son iguales en capacidades multi-ventana."
            ]
        },
        "quiz": {
            "question": "¿Cómo logra Playwright aislar completamente las cookies y el almacenamiento entre tests sin penalizar el tiempo de ejecución?",
            "options": [
                "Reiniciando el sistema operativo del runner en cada prueba",
                "Creando BrowserContexts independientes en memoria dentro de una única instancia del navegador en menos de 5 milisegundos",
                "Borrando la base de datos de producción antes de cada test",
                "Desactivando el almacenamiento en disco"
            ],
            "correctIndex": 1,
            "explanation": "Los BrowserContexts operan como sesiones de incógnito independientes creadas instantáneamente dentro de un único proceso del navegador, garantizando aislamiento total de storage sin el coste de reiniciar el binario del browser."
        },
        "level": "avanzado"
    },
    {
        "title": "¿Cómo se aplica Test-Driven Development (TDD) estricto en frontend (Ciclo Red-Green-Refactor) y cómo modelar interfaces testeables antes de implementar?",
        "response": "**Test-Driven Development (TDD)** no es una técnica de testing, sino una **metodología de diseño y arquitectura de software** que fuerza a pensar en el contrato, la semántica y la experiencia del usuario antes de escribir una sola línea de código de implementación.\n\n### El Ciclo Riguroso Red-Green-Refactor:\n1. **RED (Fallo Inicial Obligatorio)**:\n   - Escribir un test unitario o de integración que describa el comportamiento deseado.\n   - **Ejecutar el test y comprobar que FALLA**: Este paso es crucial para verificar que el test realmente evalúa algo y no pasa por error o falsos positivos.\n2. **GREEN (Código Mínimo)**:\n   - Escribir la implementación **mínima y más sencilla posible** para hacer que el test pase a verde.\n   - En esta fase se permite código poco elegante o 'hardcodeado' con tal de satisfacer el contrato.\n3. **REFACTOR (Limpieza y Diseño Arquitectónico)**:\n   - Con la red de seguridad del test en verde, refactorizar el código: eliminar duplicaciones, abstraer en custom hooks, optimizar rendimiento y aplicar Clean Code.\n   - Si un cambio rompe el comportamiento, el test avisa de inmediato.\n\n### Beneficio en Frontend:\nObliga a crear componentes con interfaces desacopladas basadas en roles accesibles y props limpias, erradicando componentes monolíticos difíciles de testear.",
        "codeExample": {
            "language": "tsx",
            "code": "// 1. FASE RED: Escribir el test antes de que DiscountBadge exista:\n// DiscountBadge.test.tsx\ntest('muestra 20% de descuento y clase verde cuando el valor es 0.2', () => {\n  render(<DiscountBadge discount={0.2} />);\n  const badge = screen.getByRole('status');\n  expect(badge).toHaveTextContent('-20%');\n  expect(badge).toHaveClass('badge-success');\n});\n// -> Falla: Module not found './DiscountBadge'\n\n// 2. FASE GREEN: Código mínimo en DiscountBadge.tsx:\nexport function DiscountBadge({ discount }: { discount: number }) {\n  return <span role=\"status\" className=\"badge-success\">-{discount * 100}%</span>;\n}\n// -> Pasa en verde.\n\n// 3. FASE REFACTOR: Soportar redondeos y tipado estricto sin romper el test:\nexport function DiscountBadge({ discount }: { discount: number }) {\n  const formatted = Math.round(discount * 100);\n  const isPositive = formatted > 0;\n  return (\n    <span role=\"status\" className={isPositive ? 'badge-success' : 'badge-neutral'}>\n      -{formatted}%\n    </span>\n  );\n}"
        },
        "visualDiagram": {
            "id": "diag-tst-08",
            "title": "Metodología Test-Driven Development (TDD): Red - Green - Refactor",
            "caption": "Ciclo iterativo: Primero el test falla (Red), se implementa lo mínimo para pasar (Green) y se limpia la arquitectura sin romper el contrato (Refactor).",
            "diagramType": "test-tdd-cycle-refactoring"
        },
        "interviewTips": {
            "whatInterviewersWant": "Demostrar que entiendes que TDD es una herramienta de diseño: reduce el sobre-diseño ('You Aren't Gonna Need It' - YAGNI) y garantiza 100% de testabilidad desde el minuto uno.",
            "commonPitfalls": [
                "Saltarse la fase RED (si nunca viste fallar el test, no tienes garantía de que no pase siempre por error en la aserción).",
                "Intentar refactorizar mientras el test está en rojo (solo se refactoriza cuando el test está en verde)."
            ]
        },
        "quiz": {
            "question": "¿Por qué es un paso obligatorio en TDD ver fallar el test (fase RED) antes de escribir el código de implementación?",
            "options": [
                "Para vaciar la memoria caché de Git",
                "Para confirmar que el test efectivamente evalúa la funcionalidad requerida y que no pasa falsamente debido a una aserción defectuosa",
                "Para avisar al servidor de CI de que se iniciará una compilación",
                "Porque TypeScript no permite compilar tests sin errores previos"
            ],
            "correctIndex": 1,
            "explanation": "Ver el test fallar inicialmente garantiza que la prueba es válida y está midiendo la ausencia de la característica requerida, eliminando falsos positivos donde el test pasaría accidentalmente sin código real."
        },
        "level": "medio"
    },
    {
        "title": "¿Cómo se testea la lógica reactiva de Custom Hooks complejos con @testing-library/react (renderHook, act(), concurrencia y timers simulados)?",
        "response": "Los **Custom Hooks** en React no pueden invocarse directamente como funciones normales de JavaScript porque dependen internamente del ciclo de vida y los dispatchers de React (`useState`, `useEffect`, `useContext`).\n\n### 1. La Utilidad `renderHook()`:\n- Proporcionada por `@testing-library/react` (integrada en React 18+).\n- Crea un componente contenedor 'fantasma' en memoria y monta el hook dentro de él.\n- Retorna un objeto **`result.current`**, que almacena siempre el valor de retorno más reciente del hook.\n\n### 2. La Función `act()`:\n- Cualquier invocación de método del hook que dispare una actualización de estado de React (`setCount`, `dispatch`) debe envolverse en **`act(() => { ... })`** (o ser disparada por métodos de `userEvent` que ya lo integran).\n- `act()` asegura que todas las actualizaciones pendientes de React y las microtasks se vacíen en el Virtual DOM antes de ejecutar la aserción.\n\n### 3. Timers Simulados (`vi.useFakeTimers()`):\n- Para hooks con debouncing, throttling o intervalos (`useDebounce`, `useInterval`), se congelan los temporizadores del sistema para avanzar el tiempo de forma determinista con `vi.advanceTimersByTime(500)`.",
        "codeExample": {
            "language": "typescript",
            "code": "import { renderHook, act } from '@testing-library/react';\nimport { useDebounce } from './useDebounce';\n\ndescribe('useDebounce', () => {\n  beforeEach(() => {\n    vi.useFakeTimers(); // Congelar el reloj real del sistema\n  });\n  afterEach(() => {\n    vi.useRealTimers();\n  });\n\n  test('actualiza el valor debounced solo tras el delay fijado', () => {\n    const { result, rerender } = renderHook(\n      ({ value, delay }) => useDebounce(value, delay),\n      { initialProps: { value: 'inicial', delay: 500 } }\n    );\n\n    expect(result.current).toBe('inicial');\n\n    // Cambiar la prop de entrada:\n    rerender({ value: 'modificado', delay: 500 });\n    // Inmediatamente aún conserva el valor viejo:\n    expect(result.current).toBe('inicial');\n\n    // Avanzar el reloj virtual 500ms dentro de act():\n    act(() => {\n      vi.advanceTimersByTime(500);\n    });\n\n    // Ahora sí se actualizó el estado reactivo:\n    expect(result.current).toBe('modificado');\n  });\n});"
        },
        "visualDiagram": {
            "id": "diag-tst-09",
            "title": "Testing de Custom Hooks: renderHook(), act() y Wrappers de Contexto",
            "caption": "renderHook monta el hook en un componente invisible; act() vacía las microtasks y vi.advanceTimersByTime controla el tiempo sin sleeps lentos.",
            "diagramType": "test-custom-hooks-renderhook"
        },
        "interviewTips": {
            "whatInterviewersWant": "Saber explicar por qué no se pueden llamar hooks directamente en tests y cómo resolver el típico warning 'An update to Component inside a test was not wrapped in act(...)'.",
            "commonPitfalls": [
                "Guardar `const count = result.current.count` al inicio del test (es una variable primitiva inmutable por copia; siempre debe leerse directamente como `result.current.count`).",
                "Usar `await new Promise(r => setTimeout(r, 500))` en vez de `vi.useFakeTimers()` (hace que los tests de CI sean lentos e inestables)."
            ]
        },
        "quiz": {
            "question": "¿Por qué al testear un Custom Hook con renderHook se debe acceder a los valores a través de 'result.current' en lugar de desestructurar 'const { count } = result.current' al inicio?",
            "options": [
                "Porque desestructurar variables está prohibido en TypeScript",
                "Porque los valores primitivos desestructurados se copian por valor y no se actualizarán en el test cuando el hook mute su estado interno",
                "Porque result.current se borra en cada render",
                "Para evitar fugas de memoria en Jest"
            ],
            "correctIndex": 1,
            "explanation": "Si desestructuras 'count' en una variable local al montar el hook, esa variable retiene el valor inicial. El objeto 'result.current' es una referencia mutable que se actualiza en cada re-render del hook."
        },
        "level": "avanzado"
    },
    {
        "title": "¿Qué es Mutation Testing con herramientas como Stryker y por qué el 100% de Code Coverage (cobertura de líneas) puede ser una métrica engañosa?",
        "response": "En la industria del software, exigir un '100% de Code Coverage' suele convertirse en una **métrica de vanidad peligrosa**: un desarrollador puede ejecutar una línea de código simplemente invocando una función, sin haber escrito ninguna aserción (`expect`) que valide su resultado.\n\n### Mutation Testing (La Prueba de las Pruebas):\n**Mutation Testing** (implementado en JS/TS por **Stryker Dashboard / Stryker Mutator**) invierte la pregunta: en vez de medir qué líneas de código tocan tus tests, mide **si tus tests son capaces de detectar bugs inyectados deliberadamente**.\n\n### Mecánica de Stryker:\n1. **Mutación del AST**: Stryker lee tu código fuente y crea docenas de versiones modificadas llamadas **Mutantes**:\n   - Cambia operadores lógicos: `a && b` ➔ `a || b`.\n   - Invierte comparadores: `age >= 18` ➔ `age < 18`.\n   - Elimina llamadas a métodos o reemplaza retornos: `return total;` ➔ `return undefined;`.\n2. **Ejecución del Test Suite contra cada Mutante**:\n   - **Mutante Asesinado (Killed - Exitoso)**: Si al menos un test falla ante el código alterado, significa que tus assertions detectaron el bug.\n   - **Mutante Sobreviviente (Survived - Peligro)**: Si todos tus tests pasan en verde a pesar de que el código fue saboteado, **tu test suite tiene un agujero ciego crítico**.\n3. **Mutation Score**:\n   `Mutation Score = (Mutantes Asesinados / Total de Mutantes) * 100`. Una métrica del 85%+ indica un test suite verdaderamente robusto.",
        "codeExample": {
            "language": "bash",
            "code": "# 1. Instalar y ejecutar Stryker en un proyecto Vite + Vitest:\npnpm add -D @stryker-mutator/core @stryker-mutator/vitest-runner\n\n# 2. Ejecutar análisis de mutación:\nnpx stryker run\n\n# Salida típica del reporte de mutación:\n# ------------------------------------------------------------\n# Mutation score: 78.50%\n# Mutants killed: 78\n# Mutants survived: 18  <-- ¡Bugs potenciales que tus tests ignoran!\n# Mutants timeout: 2\n# Total mutants: 100\n#\n# Mutante Sobreviviente detectado en src/utils/pricing.ts:14\n# - if (discount >= 0.5) return price * 0.5;\n# + if (discount > 0.5) return price * 0.5;  // Faltaba test para caso exacto 0.5"
        },
        "visualDiagram": {
            "id": "diag-tst-10",
            "title": "Mutation Testing: ¿Quién Evalúa la Calidad de tus Tests? (Stryker)",
            "caption": "Stryker altera el código fuente con bugs sintéticos; si los tests pasan en verde con el mutante, se expone un falso positivo de cobertura.",
            "diagramType": "test-mutation-testing-stryker"
        },
        "interviewTips": {
            "whatInterviewersWant": "Demostrar madurez de ingeniería: argumentar por qué el 100% de cobertura de líneas no garantiza calidad y explicar cómo Mutation Testing mide la efectividad real de las aserciones.",
            "commonPitfalls": [
                "Intentar correr Stryker en cada commit en CI sin límites (es muy intensivo en CPU al ejecutar los tests cientos de veces; se suele correr en nightly builds o sobre PRs en modo incremental).",
                "Confundir cobertura de código con cobertura de casos borde."
            ]
        },
        "quiz": {
            "question": "¿Qué significa que un 'mutante ha sobrevivido' (Survived) durante una sesión de Mutation Testing con Stryker?",
            "options": [
                "Que el mutante era un virus informático y no pudo eliminarse",
                "Que Stryker alteró el código fuente introduciendo un bug y aun así todos los tests pasaron en verde, evidenciando una aserción faltante o débil",
                "Que los tests tardaron más de 10 segundos en ejecutarse",
                "Que el archivo fue excluido de gitignore"
            ],
            "correctIndex": 1,
            "explanation": "Un mutante superviviente demuestra que tus pruebas no están verificando adecuadamente esa condición o lógica: el código fue modificado con un comportamiento erróneo y ningún test fue capaz de detectarlo."
        },
        "level": "avanzado"
    },
    {
        "title": "¿Cómo funciona el Visual Regression Testing (Playwright screenshot testing, Chromatic, Percy) y cómo gestionar la tolerancia anti-aliasing y flaky diffs?",
        "response": "El **Visual Regression Testing** previene uno de los fallos más comunes en frontend: regresiones visuales donde la funcionalidad sigue activa pero un cambio accidental de CSS o Tailwind rompe la alineación, el padding o los colores de la interfaz.\n\n### Arquitectura del Visual Testing:\n1. **Captura de Baseline (Golden Master)**:\n   - Se toma una captura de pantalla de referencia del componente o página en un entorno controlado (mismo SO, resolución, DPI y fuentes instaladas) y se almacena como referencia.\n2. **Comparación Pixel a Pixel en CI**:\n   - En cada Pull Request, el pipeline compila la aplicación, renderiza la vista y toma un screenshot nuevo en modo headless.\n   - Un motor de comparación de imágenes (como `pixelmatch`) compara ambas imágenes píxel a píxel y genera una tercera imagen de diff resaltando las discrepancias en color magenta/rosa.\n\n### Gestión de Falsos Positivos (Flaky Visual Diffs):\n- **Anti-aliasing de Fuentes**: El renderizado de fuentes varía entre GPUs y CPUs. Se soluciona configurando un umbral de tolerancia (`threshold: 0.2`, `maxDiffPixels: 50`).\n- **Animaciones y Cursors**: Congelar animaciones CSS (`page.emulateMedia({ reducedMotion: 'reduce' })`) y ocultar cursores parpadeantes.\n- **Contenido Dinámico (Fechas, Avatares)**: Usar la opción de **máscaras (`mask: [locator]`)** en Playwright para tapar elementos que cambian con rectángulos neutros antes de la foto.",
        "codeExample": {
            "language": "typescript",
            "code": "// visual-regression.spec.ts con Playwright:\nimport { test, expect } from '@playwright/test';\n\ntest('diseño visual consistente de la tarjeta de precios', async ({ page }) => {\n  await page.goto('/pricing');\n  \n  // Enmascarar elementos dinámicos que causan flaky tests (como la fecha de hoy):\n  const dateBadge = page.getByTestId('current-date');\n  \n  // Comparación contra la imagen baseline guardada en disco:\n  await expect(page.locator('.pricing-card')).toHaveScreenshot('pricing-card.png', {\n    maxDiffPixelRatio: 0.01, // Permitir hasta un 1% de tolerancia por anti-aliasing\n    animations: 'disabled', // Detener animaciones CSS y transiciones\n    mask: [dateBadge], // Tapar la fecha dinámica con un bloque sólido\n  });\n});"
        },
        "visualDiagram": {
            "id": "diag-tst-11",
            "title": "Visual Regression Testing: Comparación Pixel-a-Pixel (Chromatic / Playwright)",
            "caption": "Detección de regresiones visuales: comparación de screenshots contra el golden master, enmascaramiento dinámico y diffs en magenta.",
            "diagramType": "test-visual-regression-pixel-diff"
        },
        "interviewTips": {
            "whatInterviewersWant": "Explicar cómo evitar tests visuales inestables: contenedores Docker en CI con fuentes fijas de Linux, enmascaramiento de datos dinámicos y umbrales de anti-aliasing.",
            "commonPitfalls": [
                "Tomar screenshots en macOS en local y compararlos contra Ubuntu en CI (las fuentes se renderizan de forma diferente entre SOs y fallarán el 100% de las veces).",
                "No deshabilitar animaciones CSS antes de tomar la captura."
            ]
        },
        "quiz": {
            "question": "¿Por qué se recomienda ejecutar los tests de regresión visual dentro de contenedores Docker estandarizados tanto en local como en CI?",
            "options": [
                "Para que las imágenes pesen menos de 10 KB",
                "Porque los motores de renderizado y el suavizado de fuentes (anti-aliasing) varían según el sistema operativo y la GPU, provocando falsos positivos si los entornos difieren",
                "Porque Docker es obligatorio para ejecutar Playwright",
                "Para evitar pagar licencias de fuentes tipográficas"
            ],
            "correctIndex": 1,
            "explanation": "El renderizado sub-píxel de fuentes y bordes difiere entre macOS, Windows y Linux. Ejecutar en un contenedor Docker con la misma versión de Chromium y fuentes garantiza comparaciones idénticas."
        },
        "level": "avanzado"
    },
    {
        "title": "¿Qué es Consumer-Driven Contract Testing con Pact y cómo garantiza la compatibilidad independiente de microservicios y APIs frontend-backend sin desplegar ambos?",
        "response": "En arquitecturas de microservicios o equipos distribuidos donde el Frontend y el Backend evolucionan en repositorios independientes, los tests de integración E2E tradicionales son frágiles, lentos y requieren levantar toda la infraestructura completa para validar si una API cambió.\n\n### Consumer-Driven Contract Testing (Pact):\nEl enfoque **Consumer-Driven** invierte la responsabilidad: **el consumidor (Frontend) define el contrato de lo que necesita de la API**.\n\n### Flujo Operativo con Pact:\n1. **El Frontend escribe el test de contrato (Consumer Test)**:\n   - Define: *'Cuando solicite `GET /users/1`, espero exactamente los campos `{ id: number, name: string }` con código 200'*. No le importan otros 40 campos que el backend tenga y él no use.\n   - Al ejecutar el test, Pact genera un archivo JSON estandarizado llamado **Pact File (Contrato)**.\n2. **Publicación al Pact Broker**:\n   - El CI del frontend sube el contrato al **Pact Broker** (un servidor central que almacena matrices de compatibilidad).\n3. **Verificación Independiente en el Backend (Provider Test)**:\n   - Cuando el equipo de Backend compila en su propio CI, Pact descarga el contrato del broker y lanza peticiones reales contra el endpoint del backend.\n   - Si un desarrollador del backend renombra `name` a `fullName`, **el CI del backend colapsa de inmediato** avisándole que romperá la versión en producción del frontend.",
        "codeExample": {
            "language": "typescript",
            "code": "// consumer.spec.ts en el repositorio Frontend con Pact:\nimport { PactV3, MatchersV3 } from '@pact-foundation/pact';\nimport { fetchUserProfile } from './api';\n\nconst provider = new PactV3({\n  consumer: 'WebFrontend',\n  provider: 'UserMicroservice',\n});\n\ntest('el contrato con UserMicroservice valida el perfil de usuario', async () => {\n  provider\n    .given('existe un usuario con id 1')\n    .uponReceiving('una petición para obtener el usuario 1')\n    .withRequest({ method: 'GET', path: '/api/v1/users/1' })\n    .willRespondWith({\n      status: 200,\n      body: {\n        id: MatchersV3.integer(1),\n        name: MatchersV3.string('Diego Villa'),\n        email: MatchersV3.regex('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$', 'd@d.com'),\n      },\n    });\n\n  await provider.executeTest(async (mockserver) => {\n    const user = await fetchUserProfile(mockserver.url, 1);\n    expect(user.name).toBe('Diego Villa');\n  });\n});"
        },
        "visualDiagram": {
            "id": "diag-tst-12",
            "title": "Consumer-Driven Contract Testing: Arquitectura Pact",
            "caption": "El frontend genera el contrato JSON; el Pact Broker coordina la validación en el CI del backend sin necesidad de levantar ambos servicios a la vez.",
            "diagramType": "test-consumer-driven-contracts-pact"
        },
        "interviewTips": {
            "whatInterviewersWant": "Explicar la herramienta `can-i-deploy` del Pact Broker y cómo Contract Testing elimina la necesidad de entornos de staging masivos e inestables para validar APIs.",
            "commonPitfalls": [
                "Creer que Contract Testing valida lógica funcional del backend (solo valida la estructura del esquema, serialización y compatibilidad del contrato de comunicación).",
                "Escribir contratos en el backend hacia el frontend en vez de Consumer-Driven (el frontend solo debe especificar los campos que realmente consume)."
            ]
        },
        "quiz": {
            "question": "¿Cuál es la principal ventaja de Consumer-Driven Contract Testing frente a las pruebas End-to-End en entornos de microservicios?",
            "options": [
                "Que no requiere escribir código de pruebas",
                "Permite verificar la compatibilidad entre frontend y backend de forma asíncrona e independiente en CI sin tener que desplegar ambos servicios simultáneamente",
                "Que reemplaza a los servidores de producción",
                "Que convierte el backend a GraphQL automáticamente"
            ],
            "correctIndex": 1,
            "explanation": "Contract Testing desacopla los pipelines: el frontend genera el contrato y el backend lo valida en su propio entorno, detectando roturas de contrato antes de desplegar sin los costes de un entorno E2E integrado."
        },
        "level": "experto"
    },
    {
        "title": "¿Qué es Property-Based Testing (con herramientas como fast-check) y cómo descubre edge-cases automáticamente mediante fuzzing de invariantes matemáticas?",
        "response": "En el testing tradicional basado en ejemplos (**Example-based Testing**), los desarrolladores escriben 2 o 3 casos arbitrarios que se les ocurren (`sort([3, 1, 2]) ➔ [1, 2, 3]`). Esto sufre del sesgo de confirmación humano: rara vez probamos entradas insólitas como cadenas Unicode compuestas, `NaN`, `-0`, arrays de 10,000 elementos o caracteres de control.\n\n### Property-Based Testing (fast-check en JS/TS):\nEn lugar de probar ejemplos específicos, **defines propiedades universales (invariantes)** que siempre deben cumplirse para **cualquier entrada válida**, y el framework genera cientos o miles de casos aleatorios mediante **fuzzing** guiado.\n\n### Conceptos Clave de Property-Based Testing:\n1. **Arbitrarios (Generadores de Tipos)**:\n   - `fc.array(fc.integer())`, `fc.string()`, `fc.record({ email: fc.emailAddress() })` generan miles de combinaciones estocásticas.\n2. **Invariantes Lógicas**:\n   - *Idempotencia*: `fn(fn(x)) === fn(x)` (ej. formatear una moneda o sanitizar un HTML dos veces da el mismo resultado).\n   - *Inversibilidad (Round-trip)*: `deserialize(serialize(x)) === x` (JSON, compresión, codificadores).\n   - *Conservación*: La longitud de un array ordenado debe ser idéntica a la longitud del array original.\n3. **Shrinking Automático (Reducción al Mínimo Contraejemplo)**:\n   - Si el framework encuentra un fallo con un array aleatorio de 400 elementos raros, **reduce automáticamente el caso de prueba** hasta encontrar el input mínimo absoluto que provoca el bug (ej. `[0, -0]`).",
        "codeExample": {
            "language": "typescript",
            "code": "import { describe, it } from 'vitest';\nimport fc from 'fast-check';\n\n// Función bajo prueba:\nfunction encodeQueryString(params: Record<string, string>): string {\n  return new URLSearchParams(params).toString();\n}\nfunction decodeQueryString(query: string): Record<string, string> {\n  return Object.fromEntries(new URLSearchParams(query).entries());\n}\n\ndescribe('Property-Based Test: Roundtrip de Query String', () => {\n  it('garantiza que codificar y decodificar preserva los datos para cualquier string unicode', () => {\n    fc.assert(\n      fc.property(\n        // Generador de records arbitrarios con strings de cualquier alfabeto:\n        fc.dictionary(fc.string(), fc.string()),\n        (params) => {\n          const encoded = encodeQueryString(params);\n          const decoded = decodeQueryString(encoded);\n          // Propiedad invariante: el objeto resultante debe ser idéntico al original\n          return JSON.stringify(decoded) === JSON.stringify(params);\n        }\n      ),\n      { numRuns: 1000 } // Ejecutar 1,000 escenarios aleatorios por test\n    );\n  });\n});"
        },
        "visualDiagram": {
            "id": "diag-tst-13",
            "title": "Property-Based Testing: Generación Fuzzing con fast-check",
            "caption": "Generación aleatoria de miles de inputs para validar propiedades invariantes y shrinking automático al contraejemplo mínimo reproducible.",
            "diagramType": "test-property-based-testing-fuzzing"
        },
        "interviewTips": {
            "whatInterviewersWant": "Explicar el concepto de 'Shrinking' (reducción de un contraejemplo complejo a su expresión mínima) e invariantes matemáticas como round-trip o idempotencia.",
            "commonPitfalls": [
                "Reimplementar la lógica de la función dentro del assertion de la propiedad en vez de asertar invariantes de alto nivel.",
                "Usar property-based testing para pruebas de componentes visuales (es ideal para lógica de negocio, parsers, validadores y transformadores de datos)."
            ]
        },
        "quiz": {
            "question": "¿Qué es la técnica de 'Shrinking' en un framework de Property-Based Testing como fast-check?",
            "options": [
                "Comprimir el código fuente para que ocupe menos espacio en disco",
                "El proceso automático de reducir y simplificar un contraejemplo que provocó un fallo hasta el input mínimo posible que reproduce el bug",
                "Reducir el tamaño de las fuentes tipográficas en los reportes de consola",
                "Eliminar los tests que tardan más de 1 segundo"
            ],
            "correctIndex": 1,
            "explanation": "Cuando fast-check detecta un fallo con un input complejo generado aleatoriamente, aplica algoritmos de poda para encontrar la combinación mínima y más simple posible que sigue provocando el fallo, facilitando la depuración inmediata."
        },
        "level": "experto"
    },
    {
        "title": "¿Cómo se automatiza el testing de accesibilidad (a11y) con axe-core, @axe-core/react y Playwright para cumplir las directrices WCAG 2.2 AA?",
        "response": "La accesibilidad web (**a11y**) no es solo un imperativo ético de inclusión para usuarios con discapacidades motoras o visuales, sino un **requisito legal mandatorio** bajo normativas como la directiva europea EAA (European Accessibility Act) y la ADA en Estados Unidos.\n\n### El Motor axe-core:\nDesarrollado por Deque Systems, **`axe-core`** es el estándar de la industria para auditoría estática de accesibilidad. Evalúa el árbol DOM en tiempo de ejecución contra las reglas **WCAG 2.1 y 2.2 Niveles A y AA** con cero falsos positivos garantizados.\n\n### Estrategia de Automatización en Dos Capas:\n1. **Capa de Componente / Integración (Vitest/Jest + `jest-axe`)**:\n   - Evalúa cada componente renderizado en aislamiento: valida que los botones tengan texto accesible, los formularios tengan etiquetas vinculadas (`for`/`id`) y las imágenes tengan atributos `alt`.\n2. **Capa End-to-End (Playwright + `@axe-core/playwright`)**:\n   - Escanea páginas completas en navegadores reales: valida **ratios de contraste de color** (mínimo 4.5:1 para texto normal y 3:1 para texto grande), orden de foco de teclado (`tabindex`) y que modales abiertos atrapen el foco de navegación (`focus trap`).",
        "codeExample": {
            "language": "typescript",
            "code": "// 1. Test de Componente con Vitest + jest-axe:\nimport { render } from '@testing-library/react';\nimport { axe, toHaveNoViolations } from 'jest-axe';\nimport { ModalDialog } from './ModalDialog';\n\nexpect.extend(toHaveNoViolations);\n\ntest('ModalDialog no presenta violaciones de accesibilidad WCAG A/AA', async () => {\n  const { container } = render(\n    <ModalDialog title=\"Confirmación\" isOpen={true}>\n      <p>¿Desea continuar?</p>\n    </ModalDialog>\n  );\n  const results = await axe(container);\n  expect(results).toHaveNoViolations();\n});\n\n// 2. Test E2E de Página Completa con Playwright:\n// import AxeBuilder from '@axe-core/playwright';\n// const accessibilityScanResults = await new AxeBuilder({ page })\n//   .withTags(['wcag2a', 'wcag2aa', 'wcag22aa'])\n//   .analyze();\n// expect(accessibilityScanResults.violations).toEqual([]);"
        },
        "visualDiagram": {
            "id": "diag-tst-14",
            "title": "Automatización de Accesibilidad (a11y) con axe-core & WCAG 2.2 AA",
            "caption": "Inspección automatizada de accesibilidad: jest-axe para estructura de componentes y Playwright para contraste visual y foco de teclado.",
            "diagramType": "test-accessibility-axe-core"
        },
        "interviewTips": {
            "whatInterviewersWant": "Explicar que `axe-core` automatizado detecta aproximadamente el 40-57% de los problemas de a11y (los estructurales); el resto (como navegación lógica con lector de pantalla y coherencia semántica) requiere pruebas manuales exploratorias.",
            "commonPitfalls": [
                "Creer que si `axe-core` pasa con 0 violaciones el sitio es 100% accesible (un botón con `aria-label=\"asdf\"` pasa las reglas sintácticas pero es inútil para un usuario invidente).",
                "Usar `aria-hidden=\"true\"` indiscriminadamente para silenciar errores de accesibilidad."
            ]
        },
        "quiz": {
            "question": "¿Qué porcentaje aproximado de las barreras de accesibilidad WCAG pueden ser detectadas de forma 100% automatizada mediante herramientas como axe-core?",
            "options": [
                "100% de todos los problemas de accesibilidad",
                "Entre el 40% y el 57% (aquellos con reglas deterministas como contraste, etiquetas faltantes y roles inválidos), requiriendo pruebas manuales para el resto",
                "Menos del 5%",
                "Solo detecta si la página tiene colores oscuros"
            ],
            "correctIndex": 1,
            "explanation": "Las herramientas automáticas solo detectan violaciones programáticas y de contraste; cuestiones como la claridad del texto alternativo, la lógica del flujo de lectura o la experiencia de navegación con screen readers requieren auditoría manual humana."
        },
        "level": "medio"
    },
    {
        "title": "¿Qué causas provocan 'Flaky Tests' en pipelines de CI/CD (condiciones de carrera, timers desincronizados, mutación de estado global) y cómo erradicarlos?",
        "response": "Un **Flaky Test (Test Inestable o Intermitente)** es aquel que puede pasar o fallar ejecutándose sobre exactamente el mismo commit de código sin que haya mediado ningún cambio. Son el problema de ingeniería más destructivo en CI/CD: erosionan la confianza del equipo, retrasan releases y provocan que los desarrolladores ignoren fallos reales.\n\n### Principales Causas Raíz en Frontend:\n1. **Sleeps Hardcodeados (`setTimeout` / `sleep(1000)`)**:\n   - Lo que tarda 200ms en el MacBook M3 de un desarrollador puede tardar 1,200ms en un runner saturado de GitHub Actions. Usar sleeps fijos garantiza fallos intermitentes.\n   - *Solución*: Utilizar **polling reactivo con timeouts dinámicos** (`waitFor` en RTL, `toBeVisible()` con auto-waiting en Playwright).\n2. **Mutación de Estado Global Compartido**:\n   - Módulos singletons, caches de React Query o stores de Zustand que no se resetean entre tests: si el Test A añade un usuario al store, el Test B falla si se ejecuta después del Test A pero pasa si se ejecuta solo.\n   - *Solución*: Limpiar stores y caches en ganchos `afterEach()` o inyectar instancias nuevas por test.\n3. **Condiciones de Carrera Asíncronas (Race Conditions)**:\n   - Variaciones en el orden de resolución de múltiples llamadas a microservicios simulados.\n\n### Estrategia de Mitigación en CI/CD:\n- **Cuarentena (Quarantine)**: Mover los tests flaky a una suite aislada que corre en paralelo sin bloquear los merges de PR mientras el equipo los repara.\n- **Detección de Repetición**: Herramientas que ejecutan el test sospechoso 100 veces seguidas (`test.describe.configure({ retries: 0 })`) en CI para confirmar su estabilidad.",
        "codeExample": {
            "language": "typescript",
            "code": "// ❌ CÓDIGO FLAKY (Altamente inestable en CI):\nawait user.click(screen.getByText('Guardar'));\nawait new Promise((r) => setTimeout(r, 500)); // ¡SLEEP ARBITRARIO!\nexpect(screen.getByText('Guardado')).toBeInTheDocument();\n\n// ✅ CÓDIGO DETERMINISTA RESILIENTE:\nawait user.click(screen.getByRole('button', { name: /guardar/i }));\n// findBy realiza polling continuo en el DOM durante 1,000ms:\nexpect(await screen.findByText(/guardado/i)).toBeVisible();\n\n// Limpieza obligatoria de estado en setup.ts:\nafterEach(() => {\n  vi.clearAllMocks();\n  queryClient.clear(); // Limpia caché de React Query\n  localStorage.clear();\n});"
        },
        "visualDiagram": {
            "id": "diag-tst-15",
            "title": "Anatomía & Erradicación de Flaky Tests en CI/CD",
            "caption": "Causas de inestabilidad (sleeps, carreras de red, estado global mutable) y protocolos de remediación con auto-waiting y cuarentena.",
            "diagramType": "test-flaky-tests-quarantine-mitigation"
        },
        "interviewTips": {
            "whatInterviewersWant": "Demostrar experiencia real en CI/CD: saber diagnosticar por qué un test pasa en local y falla en CI (runners con menos CPU) y cómo erradicarlos con auto-waiting y aislamiento de estado.",
            "commonPitfalls": [
                "Configurar `retries: 3` en CI y considerarlo una solución (los retries ocultan la deuda técnica y ralentizan la ejecución del pipeline al triple).",
                "Usar `Date.now()` en assertions sin mockear el reloj del sistema."
            ]
        },
        "quiz": {
            "question": "¿Cuál es la forma correcta de esperar a que un elemento aparezca en pantalla tras una acción asíncrona sin introducir flakiness?",
            "options": [
                "Añadir await new Promise(r => setTimeout(r, 3000))",
                "Utilizar auto-waiting determinista como 'await screen.findByRole(...)' o las aserciones asíncronas de Playwright que realizan sondeo reactivo",
                "Ejecutar los tests siempre en un único hilo con --runInBand",
                "Aumentar el timeout global de Jest a 60 segundos"
            ],
            "correctIndex": 1,
            "explanation": "El polling reactivo (como findBy en RTL o los locators de Playwright) comprueba el DOM en micro-intervalos y se resuelve en cuanto el elemento está listo, adaptándose a la velocidad de cualquier máquina sin sleeps fijos."
        },
        "level": "avanzado"
    },
    {
        "title": "¿Cómo se prueban componentes integrados con stores globales (Zustand, Redux Toolkit, TanStack Query) evitando el sobre-mockeado?",
        "response": "Uno de los errores más destructivos en el testing de aplicaciones React es **mockear los stores globales** (p. ej. `vi.mock('@/store/useAuthStore')`). Al hacer esto, no estás probando si tus reducers o acciones realmente mutan el estado ni si los selectores filtran los datos adecuadamente.\n\n### Estrategia de Testing de Integración con Stores:\n1. **Utilizar el Store Real en Memoria**:\n   - Ejecutar la implementación real de Zustand o Redux Toolkit durante la prueba.\n2. **Aislamiento de Instancia por Test**:\n   - Para evitar que los datos de una prueba previa afecten a la siguiente, se debe **crear una instancia fresca del store o resetear su estado inicial** en cada test.\n3. **Custom Test Wrapper (Providers)**:\n   - Crear una utilidad `renderWithProviders()` que envuelva el componente bajo prueba con las instancias limpias de `QueryClientProvider` (con `retry: false`), `Provider` de Redux o contexto de Zustand.",
        "codeExample": {
            "language": "tsx",
            "code": "// src/test/test-utils.tsx: Custom Render con Providers reales limpios\nimport { render, RenderOptions } from '@testing-library/react';\nimport { QueryClient, QueryClientProvider } from '@tanstack/react-query';\nimport { ReactElement } from 'react';\n\nexport function renderWithProviders(\n  ui: ReactElement,\n  options?: Omit<RenderOptions, 'wrapper'>\n) {\n  // 1. Instancia fresca de QueryClient por test con retries desactivados:\n  const testQueryClient = new QueryClient({\n    defaultOptions: {\n      queries: { retry: false, gcTime: 0 },\n    },\n  });\n\n  function Wrapper({ children }: { children: React.ReactNode }) {\n    return (\n      <QueryClientProvider client={testQueryClient}>\n        {children}\n      </QueryClientProvider>\n    );\n  }\n\n  return { ...render(ui, { wrapper: Wrapper, ...options }), testQueryClient };\n}"
        },
        "visualDiagram": {
            "id": "diag-tst-16",
            "title": "Testing de Integración con Stores Globales (Zustand / Redux / Query)",
            "caption": "Inyección de stores reales limpios en custom wrappers: ejecución fiel de reducers y selectores sin sobre-mockeado frágil.",
            "diagramType": "test-state-management-integration-store"
        },
        "interviewTips": {
            "whatInterviewersWant": "Demostrar cómo diseñar un `renderWithProviders` reutilizable que configure QueryClient con `retry: false` para evitar que peticiones fallidas esperen reintentos innecesarios en tests.",
            "commonPitfalls": [
                "Dejar `retry: 3` activo en el QueryClient de tests (hace que un test que espera un error 500 tarde varios segundos en reintentar).",
                "Reutilizar el mismo singleton de store global entre tests concurrentes."
            ]
        },
        "quiz": {
            "question": "¿Por qué es crucial configurar 'queries: { retry: false }' en el QueryClient utilizado durante las pruebas de integración?",
            "options": [
                "Porque TanStack Query no funciona en modo desarrollo sin retries",
                "Para que los tests que validan escenarios de error de red (como 404 o 500) fallen inmediatamente sin esperar 3 reintentos con backoff exponencial, acelerando la suite",
                "Porque los reintentos saturan la memoria de Node.js",
                "Para evitar pagar peticiones adicionales al servidor"
            ],
            "correctIndex": 1,
            "explanation": "Si una prueba valida cómo reacciona la UI ante un error 500 y el QueryClient tiene reintentos activos, el test esperará varios segundos realizando reintentos innecesarios antes de renderizar el mensaje de error."
        },
        "level": "avanzado"
    },
    {
        "title": "¿Cuáles son los riesgos, falsos positivos y anti-patrones de los Snapshot Tests en Jest/Vitest y cuándo es legítimo su uso?",
        "response": "Los **Snapshot Tests** fueron promocionados intensamente en los primeros años de Jest como una forma 'mágica' de testear interfaces: serializaban el DOM completo del componente en un archivo `.snap` de cientos de líneas.\n\n### La Fatiga de Mantenimiento y los Falsos Positivos:\n1. **Ceguera de Revisión en Pull Requests**:\n   - Cuando un componente cambia un estilo de Tailwind o un texto insignificante, el archivo de snapshot se rompe con un diff de 400 líneas.\n   - Los revisores de PRs y desarrolladores experimentan fatiga visual y ejecutan a ciegas: **`jest -u` (Update Snapshot)** sin revisar el contenido.\n   - Como resultado, regresiones visuales y bugs reales son aceptados silenciosamente dentro del snapshot nuevo.\n2. **Fragilidad Extrema**:\n   - Se rompen ante cualquier refactorización cosmética interna que no altere la funcionalidad.\n\n### Cuándo SÍ es Legítimo Usar Snapshots:\n- **Inline Snapshots Cortos (5 a 15 líneas)**: Con `toMatchInlineSnapshot()`, donde el resultado se escribe directamente en el archivo del test y es legible al instante.\n- **Serialización de ASTs, Compiladores y Schemas de Datos**: Probar que un generador de SQL, un parser tipado o un contrato JSON produce la estructura esperada.\n- **Configuraciones Complejas**: Validar que una función de configuración emita el objeto de opciones exacto.",
        "codeExample": {
            "language": "typescript",
            "code": "// ❌ ANTI-PATRÓN (Snapshot gigante de 500 líneas de HTML):\n// expect(container).toMatchSnapshot();\n\n// ✅ USO LEGÍTIMO (Inline Snapshot conciso para contratos/ASTs):\ntest('genera el schema de metadata de OpenGraph correctamente', () => {\n  const metadata = generateOpenGraphMeta({\n    title: 'Testing Enterprise',\n    description: 'Guía de Testing',\n    url: 'https://acme.dev',\n  });\n\n  expect(metadata).toMatchInlineSnapshot(`\n    {\n      \"og:description\": \"Guía de Testing\",\n      \"og:title\": \"Testing Enterprise\",\n      \"og:type\": \"website\",\n      \"og:url\": \"https://acme.dev\",\n    }\n  `);\n});"
        },
        "visualDiagram": {
            "id": "diag-tst-17",
            "title": "Snapshot Testing: Fatiga de Mantenimiento vs Uso Legítimo",
            "caption": "Los snapshots masivos de DOM generan ceguera en PRs y fatiga con 'jest -u'; los inline snapshots cortos son óptimos para estructuras de datos y schemas.",
            "diagramType": "test-snapshots-anti-patterns"
        },
        "interviewTips": {
            "whatInterviewersWant": "Demostrar pragmatismo senior: reconocer que los snapshots de páginas enteras son un anti-patrón en frontend moderno y defender el uso de assertions explícitas con RTL.",
            "commonPitfalls": [
                "Presumir de alta cobertura porque todo el proyecto tiene un solo `expect(container).toMatchSnapshot()` por componente.",
                "Hacer commit de archivos `.snap` sin revisarlos línea por línea en el diff del PR."
            ]
        },
        "quiz": {
            "question": "¿Cuál es el mayor riesgo asociado a tener archivos Snapshot (.snap) masivos de cientos de líneas de HTML en un repositorio?",
            "options": [
                "Que ocupan demasiado espacio en disco para Git",
                "Que los desarrolladores terminan actualizándolos a ciegas con el comando 'update snapshot' sin leer el diff, dejando pasar bugs y regresiones desapercibidas",
                "Que impiden el funcionamiento de TypeScript",
                "Que solo funcionan en modo producción"
            ],
            "correctIndex": 1,
            "explanation": "La fatiga de revisión ante diffs gigantescos provoca que los desarrolladores usen 'jest -u' por inercia para que el CI pase a verde, neutralizando por completo el propósito del test y aprobando regresiones silenciosas."
        },
        "level": "medio"
    },
    {
        "title": "¿Cómo se implementa el patrón Page Object Model (POM) y Component Object Model en Playwright con TypeScript estricto y fixtures tipadas?",
        "response": "En pruebas End-to-End (E2E) con Playwright, escribir selectores de locators (`page.locator('#email')`) y acciones directamente dentro de los archivos de prueba genera duplicación masiva: si la página de checkout cambia el selector de un botón, habría que editar docenas de tests dispersos.\n\n### Page Object Model (POM):\nEl patrón **Page Object Model** encapsula la estructura del DOM, los selectores y las interacciones de una página o componente dentro de una **clase tipada en TypeScript**:\n1. **Encapsulación de Locators**: Los selectores residen en un solo archivo centralizado como propiedades `readonly`.\n2. **Métodos de Negocio de Alto Nivel**: Expone acciones semánticas (`login()`, `addProductToCart()`) en lugar de clics mecánicos sueltos.\n3. **Component Objects**: Para componentes reutilizables y complejos (Navbar, Modal, DatePicker) que aparecen en múltiples páginas.\n\n### Integración con Custom Fixtures en Playwright:\nMediante `test.extend()`, se inyectan las instancias de los Page Objects directamente en los argumentos del test, logrando inicialización perezosa (lazy) y código limpio y declarativo.",
        "codeExample": {
            "language": "typescript",
            "code": "// 1. LoginPage.ts (Page Object Model tipado):\nimport { type Page, type Locator } from '@playwright/test';\n\nexport class LoginPage {\n  readonly page: Page;\n  readonly emailInput: Locator;\n  readonly passwordInput: Locator;\n  readonly submitButton: Locator;\n\n  constructor(page: Page) {\n    this.page = page;\n    this.emailInput = page.getByLabel(/correo electrónico/i);\n    this.passwordInput = page.getByLabel(/contraseña/i);\n    this.submitButton = page.getByRole('button', { name: /iniciar sesión/i });\n  }\n\n  async goto() { await this.page.goto('/login'); }\n  async login(user: string, pass: string) {\n    await this.emailInput.fill(user);\n    await this.passwordInput.fill(pass);\n    await this.submitButton.click();\n  }\n}\n\n// 2. login.spec.ts consumiendo el POM de forma declarativa:\n// test('login exitoso', async ({ page }) => {\n//   const loginPage = new LoginPage(page);\n//   await loginPage.goto();\n//   await loginPage.login('diego@dev.com', 'SuperPass123');\n//   await expect(page).toHaveURL('/dashboard');\n// });"
        },
        "visualDiagram": {
            "id": "diag-tst-18",
            "title": "Patrón Page Object Model (POM) en Playwright con TypeScript",
            "caption": "Desacoplamiento arquitectónico: la clase POM encapsula selectores y acciones de usuario, manteniendo los specs limpios y legibles.",
            "diagramType": "test-e2e-page-object-model"
        },
        "interviewTips": {
            "whatInterviewersWant": "Explicar cómo el patrón POM mantiene la suite E2E escalable y cómo las fixtures de Playwright permiten compartir estado autenticado (`storageState`) sin repetir el login manual en cada prueba.",
            "commonPitfalls": [
                "Poner aserciones (`expect`) dentro de los métodos del Page Object en vez de mantenerlas en el test spec (los POMs representan la página y sus acciones; los tests evalúan las expectativas).",
                "Crear clases POM gigantescas de 2,000 líneas en lugar de dividir en Component Objects (ej. `HeaderComponent`, `PaginationComponent`)."
            ]
        },
        "quiz": {
            "question": "¿Cuál es la responsabilidad primordial de una clase Page Object según las mejores prácticas arquitectónicas?",
            "options": [
                "Ejecutar los assertions de negocio de la prueba",
                "Encapsular los selectores del DOM y ofrecer métodos de interacción de alto nivel que representen las acciones del usuario en esa vista",
                "Compilar el código TypeScript del navegador",
                "Gestionar la base de datos del servidor"
            ],
            "correctIndex": 1,
            "explanation": "Un Page Object actúa como una interfaz de abstracción sobre la página web: centraliza los selectores y las operaciones que un usuario puede realizar, dejando las aserciones de validación para los archivos de test."
        },
        "level": "experto"
    },
    {
        "title": "¿Cómo miden los motores de cobertura (V8 Coverage vs Estambul/Babel) las métricas de Line, Branch, Function y Statement Coverage?",
        "response": "El reporte de cobertura de código (**Code Coverage**) desglosa el análisis en cuatro métricas fundamentales calculadas a partir del recorrido del código durante la ejecución de los tests.\n\n### Las 4 Métricas de Cobertura:\n1. **Statement Coverage (Sentencias)**: Porcentaje de declaraciones ejecutables completadas.\n2. **Line Coverage (Líneas)**: Porcentaje de líneas físicas de código fuente alcanzadas por al menos un test.\n3. **Function Coverage (Funciones)**: Porcentaje de funciones o métodos declarados que fueron invocados al menos una vez.\n4. **Branch Coverage (Ramas - LA MÁS CRÍTICA)**:\n   - Evalúa si cada camino de una bifurcación lógica condicional (`if/else`, operadores ternarios `? :`, cortocircuitos `&&`, `||`, y `??`) ha sido ejecutado tanto en su vertiente **verdadera (TRUE)** como en su vertiente **falsa (FALSE)**.\n   - Un código puede tener 100% de Line Coverage ejecutando solo la rama positiva de un `if`; si no se prueba la rama negativa, el Branch Coverage bajará al 50%.\n\n### Motores de Medición: Istanbul vs V8 Native Profiler:\n- **Istanbul / Babel**: Instrumenta el código fuente antes de correrlo, inyectando contadores en cada línea (`cov_123.s[0]++`). Es preciso pero añade una penalización del 30-50% en el tiempo de ejecución.\n- **V8 Coverage (Vitest / Node.js nativo)**: Utiliza la API interna de profiling en C++ del motor V8 de Google Chrome. Mide el código en memoria en tiempo real sin alterar el código fuente, resultando **hasta 10 veces más rápido**.",
        "codeExample": {
            "language": "typescript",
            "code": "// Ejemplo de discrepancia entre Line Coverage y Branch Coverage:\nexport function canAccessAdmin(user?: { role: string; isBanned: boolean }) {\n  // Línea 2:\n  return user && user.role === 'admin' && !user.isBanned;\n}\n\n// Test 1:\ntest('permite acceso a admin activo', () => {\n  expect(canAccessAdmin({ role: 'admin', isBanned: false })).toBe(true);\n});\n// -> Line Coverage: 100% (¡La línea 2 fue ejecutada!)\n// -> Branch Coverage: 33% (Solo se probó el camino donde todas las condiciones son true.\n//    Falta probar: user undefined, role distinto de admin, y isBanned true)."
        },
        "visualDiagram": {
            "id": "diag-tst-19",
            "title": "Métricas de Cobertura de Código: Line, Branch, Function & Statement",
            "caption": "Branch Coverage como indicador de calidad real: evalúa ambos caminos de cada bifurcación lógica con el motor nativo de V8 Profiler.",
            "diagramType": "test-code-coverage-metrics-v8"
        },
        "interviewTips": {
            "whatInterviewersWant": "Demostrar que entiendes por qué Branch Coverage es superior a Line Coverage y conocer la ventaja de rendimiento del provider `v8` en Vitest frente a `istanbul`.",
            "commonPitfalls": [
                "Fijar metas de 100% Line Coverage ignorando el Branch Coverage (lo que fomenta tests superficiales que no cubren ramas de error).",
                "Incluir archivos de configuración (`vite.config.ts`, `.eslintrc`) en las métricas de cobertura."
            ]
        },
        "quiz": {
            "question": "¿Por qué un fragmento de código puede tener 100% de Line Coverage pero tener un Branch Coverage deficiente del 50%?",
            "options": [
                "Porque el archivo no tiene comentarios",
                "Porque la línea fue ejecutada en su camino verdadero (true), pero ninguna prueba evaluó los caminos falsos (false) de las condiciones lógicas internas de esa misma línea",
                "Porque las variables eran de tipo any",
                "Porque Vitest no soporta funciones flecha"
            ],
            "correctIndex": 1,
            "explanation": "Una sola línea física puede contener múltiples ramas lógicas (ej. 'if (a && b) return c;'). Ejecutarla una vez marca la línea como cubierta al 100%, pero si no se prueban los casos donde 'a' o 'b' son falsos, la cobertura de ramas queda incompleta."
        },
        "level": "medio"
    },
    {
        "title": "¿Cómo se integran pruebas automatizadas de rendimiento y Core Web Vitals (LCP, INP, CLS) en CI/CD mediante Lighthouse CI (LHCI)?",
        "response": "El rendimiento web no debe auditarse manualmente de forma esporádica antes de un lanzamiento; debe ser tratado como un **criterio de aceptación continuo (Performance Budget)** automatizado en los Pull Requests de CI/CD.\n\n### Lighthouse CI (LHCI):\n**Lighthouse CI** es una suite oficial de Google que automatiza la ejecución de auditorías de Lighthouse sobre builds de producción en pipelines de CI (GitHub Actions, GitLab CI).\n\n### Mecánica de Ejecución en CI:\n1. **`build`**: Compila los bundles de producción (`pnpm run build`).\n2. **`collect`**: Levanta un servidor local preview y lanza una instancia headless de Chrome. Ejecuta la auditoría **entre 3 y 5 veces consecutivas** para calcular la **mediana estadística**, eliminando el ruido de fluctuaciones transitorias de CPU.\n3. **`assert`**: Evalúa los resultados contra presupuestos de rendimiento estrictos configurados en `lighthouserc.json`:\n   - **LCP (Largest Contentful Paint)**: `<= 2.5s`\n   - **INP (Interaction to Next Paint)**: `<= 200ms`\n   - **CLS (Cumulative Layout Shift)**: `<= 0.1`\n4. **Status Check en GitHub**: Si un PR introduce una imagen sin optimizar de 3 MB o un script bloqueante que empeora el LCP, **el gate de CI falla y bloquea el merge**.",
        "codeExample": {
            "language": "json",
            "code": "// lighthouserc.json en la raíz del proyecto:\n{\n  \"ci\": {\n    \"collect\": {\n      \"startServerCommand\": \"pnpm run preview\",\n      \"startServerReadyPattern\": \"ready in\",\n      \"numberOfRuns\": 3,\n      \"url\": [\"http://localhost:4173/\", \"http://localhost:4173/dashboard\"]\n    },\n    \"assert\": {\n      \"assertions\": {\n        \"categories:performance\": [\"error\", { \"minScore\": 0.9 }],\n        \"categories:accessibility\": [\"error\", { \"minScore\": 0.95 }],\n        \"largest-contentful-paint\": [\"error\", { \"maxNumericValue\": 2500 }],\n        \"cumulative-layout-shift\": [\"error\", { \"maxNumericValue\": 0.1 }]\n      }\n    },\n    \"upload\": {\n      \"target\": \"temporary-public-storage\"\n    }\n  }\n}"
        },
        "visualDiagram": {
            "id": "diag-tst-20",
            "title": "Auditoría Automatizada de Core Web Vitals con Lighthouse CI (LHCI)",
            "caption": "Ejecución automatizada de múltiples pasadas en CI para calcular la mediana de Core Web Vitals y bloquear PRs que degraden la UX.",
            "diagramType": "test-performance-testing-lighthouse-ci"
        },
        "interviewTips": {
            "whatInterviewersWant": "Explicar por qué LHCI ejecuta al menos 3 pasadas (para calcular la mediana y descartar variaciones de CPU de los runners) y cómo fijar presupuestos sobre Core Web Vitals.",
            "commonPitfalls": [
                "Correr Lighthouse sobre el servidor de desarrollo en lugar de la versión compilada y minificada de producción.",
                "Fijar umbrales irreales de 100/100 en runners de CI compartidos sin considerar la variabilidad de red y CPU."
            ]
        },
        "quiz": {
            "question": "¿Por qué Lighthouse CI realiza por defecto múltiples ejecuciones (p. ej. 3 o 5 pasadas) antes de evaluar las aserciones de rendimiento?",
            "options": [
                "Para verificar si el servidor web tiene fugas de memoria",
                "Para calcular la mediana estadística de las métricas y neutralizar las fluctuaciones transitorias de CPU y latencia del entorno de CI",
                "Porque los primeros dos intentos siempre fallan",
                "Para calentar la memoria caché del navegador del desarrollador"
            ],
            "correctIndex": 1,
            "explanation": "Los runners de CI compartidos (como GitHub Actions) sufren fluctuaciones temporales de CPU y congestión de disco. Ejecutar múltiples pasadas y tomar la mediana previene falsos positivos por picos transitorios de carga del runner."
        },
        "level": "experto"
    }
]
};

export default questionsTesting;
