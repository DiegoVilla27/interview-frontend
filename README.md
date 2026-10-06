# Frontend Interview Pro 🚀

Plataforma para preparar entrevistas técnicas de Frontend: 465 preguntas en 21 módulos, con teoría, código, diagramas SVG, tips del entrevistador, quizzes, flashcards con repetición espaciada y entrevistas simuladas.

- React 19 · TypeScript 5.9 · Vite 7 · Zustand · Tailwind CSS
- Node ≥ 22 · pnpm 11 (fijado en `packageManager`)

## Funciones ✨

| Función | Descripción |
| --- | --- |
| **Roadmap** | 21 módulos agrupados en 4 áreas, con filtro por nivel y búsqueda (títulos y tags al instante, respuestas completas en segundo plano). |
| **Detalle de pregunta** | Teoría, código práctico, diagrama SVG, tips del entrevistador con preguntas de seguimiento y mini quiz. |
| **Rutas por rol** | Junior, React, Senior React, Senior Angular, Mobile y Staff: un subconjunto ordenado del temario con su progreso. |
| **Entrevista simulada** | Respuesta abierta con tiempo (escrita o dictada por voz), respuesta modelo, errores típicos y repreguntas. Evaluación opcional con Claude usando tu propia API key. |
| **Flashcards** | Repetición espaciada (SM-2): repaso diario con Otra vez / Difícil / Bien / Fácil (teclas 1–4) y modo explorar. |
| **Quiz rápido** | 20 preguntas tipo test con opciones barajadas. |
| **Offline (PWA)** | Instalable; todo el temario queda precacheado para estudiar sin conexión. |

## Desarrollo 🛠️

```bash
pnpm install
pnpm dev            # http://localhost:3000
```

| Script | Qué hace |
| --- | --- |
| `pnpm build` | Typecheck + build de producción |
| `pnpm lint` | ESLint |
| `pnpm typecheck` | Tipos de la app y de los scripts/tests |
| `pnpm test` | Tests unitarios y de componentes (Vitest + Testing Library) |
| `pnpm test:e2e` | Tests E2E con Playwright sobre el build de producción |
| `pnpm content:index` | Regenera el índice ligero de preguntas |
| `pnpm content:validate` | Valida todo el contenido con el esquema Zod |

La primera vez, instala el navegador de los E2E con `pnpm exec playwright install chromium`.

## Arquitectura 🏛️

```text
src/
├── modules/<id>/index.tsx         # Contenido completo de cada módulo (fuente de verdad)
├── content/
│   ├── catalog.ts                 # Orden, categoría, descripción y carga diferida de cada módulo
│   ├── content-index.generated.ts # Índice ligero (generado): roadmap, rutas, marcadores y stats
│   ├── content-loader.ts          # Promesas cacheadas para use() + Suspense
│   └── content.schema.ts          # Esquema Zod del contenido
├── features/
│   ├── diagrams/                  # DiagramRenderer + registro de SVG por módulo (chunks diferidos)
│   ├── flashcards/                # Repetición espaciada (spaced-repetition.ts)
│   ├── interview/                 # Entrevista simulada, dictado y evaluación con IA
│   ├── paths/                     # Rutas de aprendizaje por rol
│   └── ...                        # dashboard, question-viewer, quiz, settings
└── store/                         # Zustand (progreso persistido y ajustes)
```

- **Carga inicial mínima**: solo el índice ligero y React (~110 KB gzip). El contenido de cada módulo, los diagramas, las vistas secundarias y el SDK de Anthropic se cargan bajo demanda.
- **El progreso se guarda por título de pregunta**: los títulos deben ser únicos (lo comprueba `content:validate`).

### Añadir o editar preguntas

1. Edita `src/modules/<id>/index.tsx`. Cada pregunta necesita `visualDiagram`, `interviewTips` (con al menos 2 `followUps`) y `quiz` (4 opciones).
2. Si añades un diagrama, regístralo en `src/features/diagrams/registry/<módulo>.diagrams.tsx`; su `diagramType` debe usar el prefijo del módulo.
3. Ejecuta `pnpm content:index` y `pnpm content:validate`.

## Evaluación con IA 🤖

En **Ajustes** puedes añadir tu API key de Anthropic. Claude (`claude-opus-5-5`) puntúa tus respuestas de la entrevista simulada. La clave se guarda solo en el localStorage del navegador y se envía únicamente a `api.anthropic.com`; cada evaluación consume créditos de tu cuenta.

## Commits 📝

Se sigue [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` nueva funcionalidad
- `fix:` corrección de un bug
- `perf:` mejora de rendimiento
- `refactor:` cambio interno sin alterar el comportamiento
- `test:` tests nuevos o actualizados
- `docs:` documentación
- `chore:` dependencias, configuración o tooling

La CI (`.github/workflows/ci.yml`) ejecuta lint, tipos, validación de contenido, tests, build y E2E en cada push y PR.
