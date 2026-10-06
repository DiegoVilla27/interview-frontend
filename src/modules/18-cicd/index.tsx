import { ISection } from "../../types";

export const questionsCICD: ISection = {
  title: "CI/CD",
  collapse: "collapseCICD",
  icon: "cicd",
  category: "arquitectura-ops",
  description: "Automatización con GitHub Actions, pipelines de integración continua y despliegues seguros.",
  questions: [
    {
        "title": "¿Qué significa CI/CD y cuál es la diferencia arquitectónica entre Continuous Integration, Continuous Delivery y Continuous Deployment?",
        "response": "El acrónimo **CI/CD** define la columna vertebral de la ingeniería de software moderna, transformando el ciclo de entrega de código desde integraciones manuales traumáticas hacia un pipeline automatizado, determinista y continuo:\n\n### 1. Continuous Integration (CI - Integración Continua):\n* **Objetivo**: Erradicar el infierno de integración (*Integration Hell*) que ocurría cuando múltiples desarrolladores trabajaban en ramas aisladas durante semanas y sufrían colisiones masivas al intentar fusionar su código.\n* **Mecánica**: Los desarrolladores integran su trabajo en la rama principal (`main`/`trunk`) con alta frecuencia (varias veces al día).\n* Cada Pull Request o push detona automáticamente un pipeline en un runner aislado que clona el código, instala dependencias, ejecuta linters (`eslint`, `prettier`), valida tipos estáticos (`tsc --noEmit`), corre suites de tests unitarios y de integración (`vitest`/`jest`) y audita vulnerabilidades en dependencias.\n* **Resultado**: Si cualquier prueba o regla falla, el build se marca en rojo y el merge a la rama principal queda completamente bloqueado.\n\n### 2. Continuous Delivery (Entrega Continua):\n* **Objetivo**: Garantizar que el software en la rama principal esté **siempre en un estado desplegable y listo para producción** en cualquier instante.\n* **Mecánica**: Extiende la fase de CI automatizando la compilación de producción (`vite build`), la creación de contenedores o artefactos versionados, y el despliegue automático a entornos de prueba (*Staging / Pre-producción*), donde se ejecutan pruebas E2E.\n* **El Gate Humano**: El paso a **Producción Real** requiere una **aprobación manual humana** (un clic de un Release Manager o Product Owner tras verificar métricas o aprobaciones de negocio).\n\n### 3. Continuous Deployment (Despliegue Continuo):\n* **Objetivo**: Automatización total de extremo a extremo sin fricción ni burocracia manual.\n* **Mecánica**: No existe ningún botón de aprobación humana. Todo commit que pasa con éxito la totalidad de los gates de CI y los tests de regresión en Staging **se despliega de forma 100% automática a producción** en cuestión de minutos.\n* **Requisito Fundamental**: Demanda una madurez de ingeniería altísima: cobertura de pruebas rigurosa, observabilidad en tiempo real, feature flags y mecanismos de rollback automático ante anomalías.",
        "codeExample": {
            "language": "yaml",
            "code": "# .github/workflows/ci-cd-pipeline.yml\nname: Enterprise CI/CD Pipeline\n\non:\n  push:\n    branches: [main]\n  pull_request:\n    branches: [main]\n\njobs:\n  # FASE 1: CONTINUOUS INTEGRATION (Verificaciones de calidad y tests)\n  continuous-integration:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: pnpm/action-setup@v3\n        with:\n          version: 9\n      - uses: actions/setup-node@v4\n        with:\n          node-version: 20\n          cache: 'pnpm'\n\n      - name: Instalar dependencias congeladas\n        run: pnpm install --frozen-lockfile\n\n      - name: Validación de Tipos y Linters\n        run: |\n          pnpm tsc --noEmit\n          pnpm eslint .\n\n      - name: Pruebas Unitarias y de Integración con Cobertura\n        run: pnpm vitest run --coverage\n\n  # FASE 2: CONTINUOUS DELIVERY (Compilación y despliegue a Staging)\n  continuous-delivery:\n    needs: [continuous-integration]\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - name: Build de Producción\n        run: pnpm build\n      - name: Desplegar a Entorno Staging\n        run: ./scripts/deploy.sh --env=staging\n\n  # FASE 3: CONTINUOUS DEPLOYMENT (Solo en push a main con entorno protegido)\n  continuous-deployment:\n    needs: [continuous-delivery]\n    if: github.ref == 'refs/heads/main'\n    runs-on: ubuntu-latest\n    environment:\n      name: production # Requiere aprobación en GitHub Enterprise o despliega directo\n      url: https://app.enterprise.com\n    steps:\n      - name: Despliegue Automatizado a Producción\n        run: ./scripts/deploy.sh --env=production"
        },
        "visualDiagram": {
            "id": "diag-cicd-01",
            "title": "Flujo de CI vs Continuous Delivery vs Continuous Deployment",
            "caption": "CI valida la calidad del código; Continuous Delivery deja el paquete listo con aprobación manual; Continuous Deployment automatiza hasta producción sin intervención.",
            "diagramType": "cicd-pipeline-ci-cd-cd-flow"
        },
        "interviewTips": {
            "whatInterviewersWant": "Diferenciar con precisión Delivery (paquete listo pero gate manual a producción) de Deployment (100% automatizado directo a usuarios finales) y explicar qué requisitos de ingeniería son indispensables para este último.",
            "commonPitfalls": ["Creer que Continuous Deployment es viable sin suites de pruebas automatizadas E2E y sin observabilidad en tiempo real.", "Confundir un script de despliegue básico con una arquitectura de CI/CD resiliente."],
            "followUps": [
                "¿Qué requisitos debe cumplir un equipo para hacer Continuous Deployment?",
                "¿Qué métricas DORA conoces?"
            ]
        },
        "quiz": {
            "question": "¿Cuál es la diferencia fundamental entre Continuous Delivery y Continuous Deployment?",
            "options": ["Continuous Delivery usa Docker y Continuous Deployment usa Kubernetes", "En Continuous Delivery el paso final a producción requiere aprobación manual, mientras que en Continuous Deployment el despliegue a producción es 100% automático tras superar los tests", "Continuous Delivery solo se ejecuta en servidores locales y Continuous Deployment en la nube", "Continuous Delivery no ejecuta pruebas unitarias"],
            "correctIndex": 1,
            "explanation": "Ambos automatizan la integración, pruebas y preparación del artefacto; la diferencia radica en que Continuous Delivery mantiene un control manual final para la salida a producción, mientras que Continuous Deployment despliega automáticamente a producción sin intervención humana."
        },
        "level": "basico"
    },
    {
        "title": "¿Cuál es la anatomía de un Pipeline moderno (Stages, Jobs, Steps) y cómo se modelan dependencias mediante un Grafo Acíclico Dirigido (DAG)?",
        "response": "Un pipeline de CI/CD enterprise no es una simple lista secuencial de comandos bash: es una estructura jerárquica modelada internamente como un **DAG (Directed Acyclic Graph - Grafo Acíclico Dirigido)** para maximizar la concurrencia y reducir el tiempo de feedback:\n\n### 1. Jerarquía Anatómica de un Pipeline:\n1. **Pipeline / Workflow**: La entidad raíz detonada por eventos del repositorio (`push`, `pull_request`, `schedule`, `workflow_dispatch`).\n2. **Stages (Etapas)**: Agrupaciones lógicas de alto nivel (p. ej. *Lint*, *Test*, *Build*, *Deploy*).\n3. **Jobs (Trabajos)**:\n   - Es la **unidad fundamental de aislamiento y paralelismo**.\n   - Cada Job se ejecuta en un **Runner independiente** (una máquina virtual o contenedor dedicado con su propio sistema de archivos y memoria).\n   - Dos jobs sin dependencias mutuas se ejecutan de forma **concurrente en paralelo**.\n4. **Steps (Pasos)**:\n   - Secuencia lineal de tareas que se ejecutan dentro del **mismo Runner y proceso**. Comparten disco y variables de entorno del job. Pueden ser acciones empaquetadas (`uses: actions/checkout@v4`) o comandos shell (`run: pnpm test`).\n\n### 2. Modelado con Grafo Acíclico Dirigido (DAG):\n* En pipelines antiguos, las etapas eran estrictamente secuenciales: la fase de *Build* esperaba a que terminasen TODOS los tests, incluso si un test no bloqueaba ese build específico.\n* Con la cláusula `needs: [job_a, job_b]`, un job declara explícitamente de quién depende:\n  - **Fan-Out (Bifurcación)**: Un job inicial exitoso dispara 5 jobs de pruebas independientes en paralelo.\n  - **Fan-In (Convergencia)**: El job de despliegue solo se inicia cuando convergen con éxito todos los jobs de validación requeridos.\n  - **Fail-Fast**: Si un job crítico falla en el grafo, el orquestador aborta inmediatamente los jobs dependientes aguas abajo, ahorrando minutos de cómputo.",
        "codeExample": {
            "language": "yaml",
            "code": "# Orquestación DAG en GitHub Actions:\nname: Advanced DAG Pipeline\non: [pull_request]\n\njobs:\n  # Jobs en Paralelo Inicial (Fan-Out):\n  lint:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - run: pnpm lint\n\n  typecheck:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - run: pnpm tsc --noEmit\n\n  unit-tests:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - run: pnpm vitest run\n\n  # Job que converge: solo inicia si lint, typecheck Y unit-tests pasaron en verde (Fan-In):\n  build-production:\n    needs: [lint, typecheck, unit-tests]\n    runs-on: ubuntu-latest\n    outputs:\n      build-hash: ${{ steps.bundle.outputs.hash }}\n    steps:\n      - uses: actions/checkout@v4\n      - id: bundle\n        run: |\n          pnpm build\n          echo \"hash=$(git rev-parse --short HEAD)\" >> $GITHUB_OUTPUT\n      - uses: actions/upload-artifact@v4\n        with:\n          name: dist-artifact\n          path: dist/\n\n  # Job downstream dependiente del build:\n  e2e-smoke-tests:\n    needs: [build-production]\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/download-artifact@v4\n        with:\n          name: dist-artifact\n      - run: pnpm playwright test tests/smoke/"
        },
        "visualDiagram": {
            "id": "diag-cicd-02",
            "title": "Orquestación en Grafo Acíclico Dirigido (DAG) y Paralelismo",
            "caption": "Ejecución paralela en abanico (Fan-Out) y convergencia (Fan-In) mediante la directiva needs, optimizando el tiempo total del pipeline.",
            "diagramType": "cicd-stages-jobs-dependencies-dag"
        },
        "interviewTips": {
            "whatInterviewersWant": "Demostrar que entiendes que los Jobs corren en máquinas separadas y no comparten disco entre sí (requiriendo artefactos o caché), mientras que los Steps comparten el disco del mismo runner.",
            "commonPitfalls": ["Creer que una variable exportada en un Step mediante `export FOO=1` estará disponible automáticamente en el siguiente Step (se debe escribir en `$GITHUB_ENV`).", "Olvidar usar `actions/upload-artifact` y esperar que los archivos generados en un job existan mágicamente en otro job posterior."],
            "followUps": [
                "¿Cómo paralelizarías jobs independientes?",
                "¿Qué hace la directiva needs en GitHub Actions?"
            ]
        },
        "quiz": {
            "question": "En GitHub Actions, ¿cuál es la diferencia clave entre un 'Job' y un 'Step'?",
            "options": ["Los Steps corren en Kubernetes y los Jobs en Docker", "Cada Job se ejecuta en un Runner independiente con su propio entorno y disco, mientras que los Steps se ejecutan secuencialmente dentro del mismo Runner compartiendo disco", "Los Steps no pueden ejecutar comandos bash", "Un Pipeline solo puede tener un único Job pero múltiples Steps"],
            "correctIndex": 1,
            "explanation": "Los Jobs son unidades aisladas que corren en paralelo en distintos agentes o máquinas virtuales; los Steps son las tareas secuenciales que se ejecutan dentro del contexto de ese Job en particular."
        },
        "level": "basico"
    },
    {
        "title": "¿Cuál es la diferencia técnica entre Hosted Runners y Self-Hosted Runners (Kubernetes ARC) y qué implicaciones de seguridad y rendimiento conllevan?",
        "response": "La elección de la infraestructura donde se ejecutan los jobs de CI/CD impacta radicalmente en la seguridad, la latencia de red y los costes de facturación:\n\n### 1. Hosted Runners (Nube Gestionada - GitHub/GitLab):\n* **Arquitectura**: Máquinas virtuales efímeras aprovisionadas bajo demanda en la infraestructura del proveedor (Azure/AWS).\n* **Seguridad**: Máximo aislamiento. Cada job se ejecuta en una máquina virtual de un solo uso que se destruye por completo al finalizar (`ephemeral runner`). Cero persistencia ni contaminación cruzada de secretos o archivos entre jobs.\n* **Desventajas**:\n  - Tiempos de arranque (*Cold Start*): Aprovisionar la VM toma entre 10 y 30 segundos.\n  - Sin acceso nativo a redes privadas (VPCs corporativas, bases de datos de staging internas o clusters de Kubernetes tras cortafuegos).\n  - Coste elevado por minuto en concurrencias masivas.\n\n### 2. Self-Hosted Runners (Servidores Propios / Kubernetes ARC):\n* **Arquitectura**: Servidores propios, instancias EC2 o pods en Kubernetes gestionados mediante **Actions Runner Controller (ARC)**.\n* **Ventajas**:\n  - Acceso directo a recursos de red privados dentro de la VPC corporativa sin exponer túneles públicos.\n  - Posibilidad de utilizar hardware de alto rendimiento a medida (CPUs dedicadas, GPUs para builds de IA o testing visual masivo, almacenamiento NVMe ultra-rápido).\n  - Caché persistente en disco local: evita descargar gigabytes de imágenes Docker o dependencias node_modules por red en cada job.\n* **Riesgos de Seguridad Críticos**:\n  - En repositorios públicos o con permisos de PR externos, un atacante puede enviar un PR con código malicioso (`eval`, script de minería de criptomonedas o acceso a los metadatos de AWS/GCP del runner).\n  - **Solución Enterprise**: Utilizar **ARC con Pods Efímeros**: Kubernetes levanta un pod limpio por job y lo destruye de inmediato tras terminar.",
        "codeExample": {
            "language": "yaml",
            "code": "# Configuración de Actions Runner Controller (ARC) en Kubernetes:\napiVersion: actions.summerwind.dev/v1alpha1\nkind: RunnerDeployment\nmetadata:\n  name: enterprise-frontend-runner\n  namespace: cicd-runners\nspec:\n  replicas: 5\n  template:\n    spec:\n      # Imagen base optimizada con Node 20, pnpm y dependencias de Playwright preinstaladas:\n      image: custom-ecr-registry.internal/ci/frontend-runner:v2.4\n      ephemeral: true # Destruye el pod inmediatamente al concluir el Job (Seguridad)\n      resources:\n        limits:\n          cpu: \"4000m\"\n          memory: \"8Gi\"\n        requests:\n          cpu: \"2000m\"\n          memory: \"4Gi\"\n      volumeMounts:\n        - mountPath: /cache/pnpm\n          name: pnpm-shared-cache\n\n---\n# En el workflow de GitHub Actions:\njobs:\n  heavy-build-and-test:\n    # Dirige la ejecución al cluster privado de Kubernetes interno:\n    runs-on: [self-hosted, kubernetes, linux, x64-highmem]\n    steps:\n      - uses: actions/checkout@v4\n      - name: Build ultra-rápido en NVMe interno\n        run: pnpm build"
        },
        "visualDiagram": {
            "id": "diag-cicd-03",
            "title": "Arquitectura de Runners: Hosted vs Self-Hosted con ARC en K8s",
            "caption": "Hosted runners proporcionan aislamiento efímero en la nube pública; Self-Hosted con ARC en K8s otorga acceso privado a VPC y alto rendimiento de cómputo.",
            "diagramType": "cicd-runners-hosted-vs-self-hosted"
        },
        "interviewTips": {
            "whatInterviewersWant": "Advertir el grave riesgo de seguridad de ejecutar Self-Hosted Runners no efímeros en repositorios públicos y explicar cómo ARC en Kubernetes resuelve el aislamiento destruyendo los pods tras cada ejecución.",
            "commonPitfalls": ["Configurar runners auto-hospedados compartidos donde un job deja archivos temporales o procesos en segundo plano que alteran el resultado del siguiente job.", "Dar permisos de `sudo` sin contraseña en self-hosted runners permitiendo que scripts de dependencias NPM comprometan el servidor host."],
            "followUps": [
                "¿Por qué los self-hosted runners son peligrosos en repositorios públicos?",
                "¿Cómo escalarías runners efímeros en Kubernetes?"
            ]
        },
        "quiz": {
            "question": "¿Por qué es peligroso utilizar un Self-Hosted Runner tradicional persistente para procesar Pull Requests provenientes de bifurcaciones (forks) públicas?",
            "options": ["Porque los repositorios públicos no permiten ejecutar scripts de Node.js", "Porque un atacante puede abrir un PR con código malicioso en el workflow que acceda a la red interna, robe secretos del host o persista scripts maliciosos para el siguiente job", "Porque los runners auto-hospedados solo admiten código compilado en C++", "Porque GitHub bloquea permanentemente la cuenta si se ejecutan más de 2 jobs al día"],
            "correctIndex": 1,
            "explanation": "Si el runner es persistente y procesa código de un PR externo no validado, el atacante puede ejecutar comandos en la máquina que aloja el runner, comprometiendo la red privada y extrayendo credenciales en memoria."
        },
        "level": "basico"
    },
    {
        "title": "¿Por qué las Access Keys de larga duración son un antipatrón en CI/CD y cómo se implementa autenticación sin secretos mediante OpenID Connect (OIDC)?",
        "response": "Históricamente, para desplegar una aplicación desde GitHub Actions hacia AWS (S3/CloudFront) o GCP, los equipos generaban credenciales IAM estáticas (`AWS_ACCESS_KEY_ID` y `AWS_SECRET_ACCESS_KEY`) y las guardaban en los secretos del repositorio.\n\n### 1. La Vulnerabilidad de las Claves de Larga Duración:\n* **Fugas de Secretos**: Si un atacante inyecta una vulnerabilidad en una dependencia o un script de CI hace un `echo` accidental, las claves quedan comprometidas indefinidamente.\n* **Falta de Rotación**: Las empresas rara vez rotan claves estáticas por miedo a romper los pipelines de producción.\n* **Violación del Mínimo Privilegio**: A menudo se asignan permisos amplios para evitar errores de despliegue.\n\n### 2. La Solución Moderna: Federación OIDC (OpenID Connect):\nMediante **OIDC**, GitHub Actions y la nube (AWS, Google Cloud, Azure) establecen una relación de confianza criptográfica directa **sin ninguna contraseña estática**:\n1. El Runner solicita un token JWT efímero firmado por el proveedor OIDC de GitHub (`permissions: id-token: write`).\n2. El token JWT contiene *claims* de identidad inmutables: el repositorio exacto (`repo:org/app`), la rama (`ref:refs/heads/main`) y el entorno (`environment:production`).\n3. El Runner presenta este JWT al servicio de seguridad de la nube (p. ej. **AWS STS** - `AssumeRoleWithWebIdentity`).\n4. AWS valida la firma criptográfica con las claves públicas de GitHub, comprueba que el repositorio coincide con la política de confianza del rol y emite **credenciales temporales válidas por 1 hora**.\n5. Al terminar el job, las credenciales caducan automáticamente.",
        "codeExample": {
            "language": "yaml",
            "code": "# Despliegue seguro a AWS sin secretos estáticos usando OIDC:\nname: Deploy Frontend with OIDC\non:\n  push:\n    branches: [main]\n\npermissions:\n  id-token: write # Requerido obligatoriamente para solicitar el JWT OIDC\n  contents: read\n\njobs:\n  deploy-to-aws:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n\n      # 1. Asumir Rol IAM de AWS mediante intercambio criptográfico OIDC:\n      - name: Configurar Credenciales de AWS vía OIDC\n        uses: aws-actions/configure-aws-credentials@v4\n        with:\n          role-to-assume: arn:aws:iam::123456789012:role/GitHubActionsFrontendDeployRole\n          aws-region: us-east-1\n          audience: sts.amazonaws.com\n\n      # 2. Despliegue atómico a S3 usando credenciales temporales (caducan en 1 hora):\n      - name: Sincronizar Assets con S3\n        run: |\n          aws s3 sync dist/ s3://my-enterprise-frontend-bucket/ --delete\n          aws cloudfront create-invalidation --distribution-id E123EXAMPLE --paths \"/*\""
        },
        "visualDiagram": {
            "id": "diag-cicd-04",
            "title": "Federación de Identidad OIDC: Cero Claves de Larga Duración",
            "caption": "GitHub emite un JWT efímero que AWS STS valida criptográficamente para otorgar credenciales temporales de mínimo privilegio.",
            "diagramType": "cicd-secrets-oidc-federation"
        },
        "interviewTips": {
            "whatInterviewersWant": "Explicar el flujo de intercambio entre el JWT de GitHub y el servicio STS/Workload Identity de la nube, destacando cómo los claims (`sub`, `repository`, `ref`) impiden que otros repositorios usen tu rol de IAM.",
            "commonPitfalls": ["Configurar la política de confianza del rol IAM de AWS aceptando cualquier repositorio de GitHub (`*`) en lugar de restringir estrictamente al repositorio exacto (`repo:mi-org/mi-repo:*`).", "Olvidar declarar `permissions: id-token: write` en el archivo del workflow, causando un fallo silencioso de autenticación."],
            "followUps": [
                "¿Cómo funciona el token OIDC entre GitHub y AWS?",
                "¿Cómo limitarías el rol a una rama concreta?"
            ]
        },
        "quiz": {
            "question": "¿Cuál es la principal ventaja de seguridad de utilizar OIDC frente a guardar Access Keys de AWS en los Secrets de GitHub?",
            "options": ["Permite descargar dependencias de npm sin conexión a internet", "Elimina por completo las credenciales estáticas de larga duración en el repositorio, utilizando tokens temporales de 1 hora generados criptográficamente bajo demanda", "Evita tener que pagar por el servicio de AWS S3", "Hace que los builds de Vite se ejecuten en la mitad de tiempo"],
            "correctIndex": 1,
            "explanation": "OIDC establece federación de identidad temporal: el runner recibe un token efímero con vigencia de 1 hora validado contra roles IAM específicos, eliminando el riesgo de filtración de claves estáticas guardadas en el repo."
        },
        "level": "medio"
    },
    {
        "title": "¿Cómo funciona el caching inteligente de dependencias y el Remote Caching en monorepos (Turborepo / Nx) para acelerar pipelines?",
        "response": "En proyectos frontend de gran escala o monorepos empresariales, ejecutar `pnpm install`, linters, tests y builds desde cero en cada ejecución de pipeline desperdicia cientos de horas de computación:\n\n### 1. Caching Tradicional de Paquetes (`actions/cache`):\n* Guarda en un almacenamiento en la nube el directorio global de paquetes (p. ej. `~/.local/share/pnpm/store`).\n* Utiliza una **clave basada en hash**: `pnpm-cache-${{ runner.os }}-${{ hashFiles('pnpm-lock.yaml') }}`.\n* Si el archivo `pnpm-lock.yaml` no ha cambiado, el runner restaura el store local en segundos y `pnpm install --frozen-lockfile` resuelve las dependencias en ~3 segundos sin tocar la red pública de npm.\n\n### 2. Remote Caching en Monorepos (Turborepo / Nx Cloud):\nEl verdadero salto de rendimiento para equipos grandes ocurre al aplicar el concepto de **Funciones Puras a las tareas de compilación y testing**:\n* **Cálculo de Firma (Input Hash)**: Turborepo calcula un hash criptográfico combinando:\n  - El código fuente del paquete (`src/**`).\n  - Las dependencias directas e indirectas en el monorepo.\n  - Las variables de entorno relevantes (`NODE_ENV`, `API_URL`).\n  - La versión de las herramientas de compilación.\n* **Cache Hit Distribuido**:\n  - Si ese hash ya fue ejecutado previamente por otro desarrollador en su máquina local o por un PR previo, **Turborepo descarga el artefacto resultante (`dist/`) y los logs directamente desde un bucket S3/Vercel Remote Cache**.\n  - Tareas que normalmente tardan 2 minutos se completan en **menos de 1 segundo (Cache Hit)**.",
        "codeExample": {
            "language": "yaml",
            "code": "# Configuración de Turborepo Remote Caching en GitHub Actions:\nname: Monorepo Fast CI\non: [pull_request]\n\nenv:\n  TURBO_TOKEN: ${{ secrets.TURBO_TOKEN }}\n  TURBO_TEAM: ${{ vars.TURBO_TEAM }}\n\njobs:\n  build-and-test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n\n      - uses: pnpm/action-setup@v3\n        with:\n          version: 9\n\n      - uses: actions/setup-node@v4\n        with:\n          node-version: 20\n          cache: 'pnpm'\n\n      - name: Instalar Dependencias (Cacheado localmente)\n        run: pnpm install --frozen-lockfile\n\n      # Turborepo solo compilará los paquetes modificados o no cacheados globalmente:\n      - name: Ejecutar Lint, Test y Build con Remote Cache\n        run: pnpm turbo run lint test build --api=\"https://api.vercel.com\" --token=$TURBO_TOKEN --team=$TURBO_TEAM"
        },
        "visualDiagram": {
            "id": "diag-cicd-05",
            "title": "Caching Inteligente y Remote Cache en Monorepos",
            "caption": "Hashing de dependencias y código fuente para restaurar artefactos en 1 segundo mediante Remote Cache distribuido.",
            "diagramType": "cicd-caching-monorepo-hash"
        },
        "interviewTips": {
            "whatInterviewersWant": "Explicar cómo Turborepo/Nx modelan las tareas como grafos dirigidos y cómo el hashing de inputs garantiza que una compilación cacheada sea determinista e idéntica a ejecutarla en frío.",
            "commonPitfalls": ["Invalidar el caché accidentalmente al incluir timestamps dinámicos o números de versión autoincrementales dentro del código fuente compilado.", "No configurar `--frozen-lockfile` en CI, permitiendo que `pnpm` o `npm` actualicen dependencias sutilmente y generen builds no reproducibles."],
            "followUps": [
                "¿Qué clave de caché usarías para node_modules?",
                "¿Qué riesgos tiene el cache poisoning?"
            ]
        },
        "quiz": {
            "question": "¿Qué ocurre cuando una tarea de compilación en Turborepo produce un 'Remote Cache Hit' en el pipeline de CI?",
            "options": ["El runner borra todos los archivos de node_modules", "Turborepo omite la ejecución del compilador y descarga directamente los artefactos generados previamente (dist/) y sus logs desde el almacenamiento en la nube en menos de 1 segundo", "El pipeline solicita confirmación manual al administrador del repositorio", "Se ejecuta un test de regresión visual de emergencia"],
            "correctIndex": 1,
            "explanation": "El Remote Cache almacena el output de tareas puras. Si los inputs y dependencias no han cambiado, el compilador descarga el resultado empaquetado previamente, logrando tiempos de build casi instantáneos."
        },
        "level": "medio"
    },
    {
        "title": "¿Cómo funciona la Estrategia de Matrices (Matrix Strategy) en pipelines y cómo se gestionan exclusiones y fallos rápidos (fail-fast)?",
        "response": "Al desarrollar librerías compartidas, SDKs o micro-frontends utilizados por múltiples equipos, es imperativo certificar que el código funciona en diversas combinaciones de entornos (sistemas operativos, versiones de Node.js, navegadores):\n\n### 1. Mecánica del Producto Cartesiano:\n* La estrategia de matriz permite definir un array de variables en la configuración del job. El motor de CI calcula automáticamente el **producto cartesiano** y genera un job concurrente independiente por cada combinación:\n  - `os: [ubuntu-latest, macos-latest, windows-latest]` (3 opciones)\n  - `node-version: [18, 20, 22]` (3 opciones)\n  - **Total**: $3 \\times 3 = 9$ **jobs ejecutados en paralelo**.\n\n### 2. Cláusulas Clave de Control de Matrices:\n* **`fail-fast: true` (por defecto)**: Si uno de los 9 jobs falla (p. ej. en Node 18 sobre Windows), GitHub Actions cancela inmediatamente los otros 8 jobs en curso para no malgastar minutos de facturación. Se suele desactivar (`fail-fast: false`) si se desea ver el informe completo de compatibilidad.\n* **`include`**: Permite inyectar combinaciones adicionales específicas o variables personalizadas (p. ej. probar experimentalmente con Node 23 solo en Ubuntu).\n* **`exclude`**: Permite descartar combinaciones incompatibles conocidas (p. ej. ignorar Node 18 en macOS).\n* **`max-parallel`**: Limita el número máximo de jobs concurrentes para no saturar los runners asignados a la organización.",
        "codeExample": {
            "language": "yaml",
            "code": "# Configuración de matriz de compatibilidad multi-entorno:\nname: Cross-Platform Matrix Test\non: [push, pull_request]\n\njobs:\n  matrix-test:\n    runs-on: ${{ matrix.os }}\n    strategy:\n      fail-fast: false # Permite que todos los jobs terminen para ver la matriz completa de errores\n      max-parallel: 6  # Evita colapsar la cuota de concurrencia de la cuenta\n      matrix:\n        os: [ubuntu-latest, macos-latest, windows-latest]\n        node-version: [18, 20, 22]\n        # Inclusión de caso experimental:\n        include:\n          - os: ubuntu-latest\n            node-version: 23-current\n            experimental: true\n        # Exclusión de combinación no soportada:\n        exclude:\n          - os: windows-latest\n            node-version: 18\n\n    steps:\n      - uses: actions/checkout@v4\n      - name: Configurar Node.js ${{ matrix.node-version }}\n        uses: actions/setup-node@v4\n        with:\n          node-version: ${{ matrix.node-version }}\n\n      - name: Ejecutar Pruebas\n        # Permite continuar si falla el entorno experimental:\n        continue-on-error: ${{ matrix.experimental == true }}\n        run: |\n          pnpm install --frozen-lockfile\n          pnpm test"
        },
        "visualDiagram": {
            "id": "diag-cicd-06",
            "title": "Estrategia de Matrices: Ejecución Cruzada Multiplataforma",
            "caption": "Generación automática del producto cartesiano de entornos (OS x Node.js) con control de fallos mediante fail-fast.",
            "diagramType": "cicd-matrix-strategy-matrix"
        },
        "interviewTips": {
            "whatInterviewersWant": "Demostrar cómo evitar costes excesivos en runners usando `fail-fast: true` en PRs ordinarios y cómo usar `continue-on-error` en combinación con la matriz para probar versiones canary/beta de Node sin romper el pipeline principal.",
            "commonPitfalls": ["Lanzar matrices masivas innecesarias (p. ej. 5 OS x 6 versiones de Node = 30 jobs) en cada commit individual, consumiendo la cuota mensual de CI en un par de días.", "Olvidar que los runners de macOS en GitHub Actions consumen hasta 10 veces más minutos de facturación que los de Linux."],
            "followUps": [
                "¿Qué hace fail-fast: false?",
                "¿Cómo excluirías combinaciones de la matriz?"
            ]
        },
        "quiz": {
            "question": "En una estrategia de matrices en GitHub Actions, ¿qué efecto tiene la propiedad 'fail-fast: true'?",
            "options": ["Acelera la velocidad del procesador de la máquina virtual", "Cancela inmediatamente todos los demás jobs activos de la matriz en cuanto uno de ellos falla", "Ignora los errores de TypeScript y continúa el pipeline", "Fuerza a que todos los jobs terminen en menos de 60 segundos o serán abortados"],
            "correctIndex": 1,
            "explanation": "Con 'fail-fast: true', si una de las combinaciones de la matriz falla, el orquestador aborta todos los demás jobs en progreso de esa matriz para ahorrar minutos de cómputo y dar feedback rápido."
        },
        "level": "medio"
    },
    {
        "title": "¿Qué son los Preview Deployments (Entornos Efímeros) por Pull Request y cómo se orquesta su ciclo de vida y limpieza automatizada?",
        "response": "En la ingeniería frontend moderna, depender de un único entorno compartido de *Staging* genera un cuello de botella severo: si un desarrollador despliega un cambio inestable a Staging, bloquea las pruebas del resto del equipo. La solución estándar son los **Preview Deployments (Entornos Efímeros)**:\n\n### 1. El Concepto de Entorno Efímero:\n* Cada Pull Request genera automáticamente un **despliegue completo y aislado** en una URL pública única protegida (p. ej. `https://pr-142.preview.enterprise.com`).\n* **Ventajas para el Negocio**:\n  - Los diseñadores de producto pueden validar el diseño pixel-perfect antes del merge.\n  - Los equipos de QA pueden ejecutar pruebas manuales y automatizadas sobre una instancia real sin competir con otros cambios.\n  - Los stakeholders de producto pueden interactuar con la funcionalidad real sin levantar el proyecto localmente en su máquina.\n\n### 2. Ciclo de Vida y Teardown Automatizado:\n1. **Creación**: El evento `pull_request: opened / synchronize` compila la app y la despliega en el Edge (Cloudflare Pages, Vercel, AWS Amplify o un namespace temporal en Kubernetes).\n2. **Notificación**: Un bot de CI comenta en el PR con la URL del preview y métricas iniciales de bundle size y Lighthouse.\n3. **Destrucción (Teardown Obligatorio)**:\n   - Al cerrar o fusionar el PR (`pull_request: closed`), se ejecuta un workflow de limpieza que destruye el deployment, purga los assets del CDN o elimina el namespace de Kubernetes.\n   - **Previene Infraestructura Huérfana**: Evita acumular miles de despliegues y costes ocultos en la nube.",
        "codeExample": {
            "language": "yaml",
            "code": "# .github/workflows/preview-deploy.yml\nname: Ephemeral Preview Deployment\non:\n  pull_request:\n    types: [opened, synchronize, closed]\n\njobs:\n  # 1. DESPLIEGUE CUANDO EL PR ESTÁ ACTIVO:\n  deploy-preview:\n    if: github.event.action != 'closed'\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - name: Build Preview\n        run: pnpm build\n      - name: Deploy to Cloudflare Pages (Branch Preview)\n        id: cloudflare\n        uses: cloudflare/wrangler-action@v3\n        with:\n          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}\n          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}\n          command: pages deploy dist --project-name=frontend-app --branch=pr-${{ github.event.number }}\n\n      - name: Comentar URL en el PR\n        uses: actions/github-script@v7\n        with:\n          script: |\n            github.rest.issues.createComment({\n              issue_number: context.issue.number,\n              owner: context.repo.owner,\n              repo: context.repo.repo,\n              body: `🚀 **Preview Deployment Listo**: [https://pr-${context.issue.number}.frontend-app.pages.dev](https://pr-${context.issue.number}.frontend-app.pages.dev)`\n            })\n\n  # 2. TEARDOWN Y LIMPIEZA AL CERRAR O MERGEAR EL PR:\n  cleanup-preview:\n    if: github.event.action == 'closed'\n    runs-on: ubuntu-latest\n    steps:\n      - name: Eliminar Despliegue Efímero\n        uses: cloudflare/wrangler-action@v3\n        with:\n          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}\n          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}\n          command: pages project delete-deployment --project-name=frontend-app --deployment-id=pr-${{ github.event.number }}`"
        },
        "visualDiagram": {
            "id": "diag-cicd-07",
            "title": "Ciclo de Vida de Preview Deployments y Entornos Efímeros",
            "caption": "Aprovisionamiento por Pull Request con notificación de URL en vivo y destrucción automática (teardown) al cerrar el PR.",
            "diagramType": "cicd-preview-ephemeral-environments"
        },
        "interviewTips": {
            "whatInterviewersWant": "Enfatizar la necesidad de automatizar la destrucción de entornos efímeros (teardown) para evitar explosión de costes de almacenamiento e infraestructura huérfana en la nube.",
            "commonPitfalls": ["No proteger los preview deployments contra acceso no autorizado (deben requerir autenticación básica o SSO corporativo para no indexarse en Google ni exponer datos confidenciales).", "Conectar los preview deployments a la base de datos de producción en lugar de utilizar réplicas o mocks aislados."],
            "followUps": [
                "¿Cómo gestionarías datos y secretos en entornos efímeros?",
                "¿Cómo limpiarías los entornos al cerrar el PR?"
            ]
        },
        "quiz": {
            "question": "¿Por qué es una buena práctica configurar un job de 'teardown' vinculado al evento 'pull_request: closed' en entornos efímeros?",
            "options": ["Para borrar la rama de Git del ordenador del desarrollador", "Para destruir y liberar automáticamente los recursos de infraestructura y despliegues temporales asociados al PR, evitando costes de nube y servidores huérfanos", "Para desinstalar Node.js del runner", "Para enviar un correo electrónico a todos los usuarios registrados en la app"],
            "correctIndex": 1,
            "explanation": "El teardown automatizado al cerrar o fusionar un PR destruye el entorno efímero creado para esa revisión, liberando recursos y evitando la acumulación de cientos de despliegues fantasma con costes continuos."
        },
        "level": "medio"
    },
    {
        "title": "¿Cómo se configuran Quality Gates automatizados con Branch Protection Rules y bots de reporte de cobertura en Pull Requests?",
        "response": "Un **Quality Gate** es un conjunto de criterios objetivos de calidad que el código debe satisfacer obligatoriamente antes de poder integrarse en la rama protegida (`main`). Garantiza que ningún código deficiente llegue a producción sin intervención manual de revisión de código:\n\n### 1. Los 4 Pilares del Quality Gate Frontend:\n1. **Estilo y Convenciones**: Linters (`eslint`, `prettier`, `biome`) con 0 errores y 0 advertencias no justificadas.\n2. **Integridad de Tipado**: Compilación estricta con `tsc --noEmit`. Prohibido el uso de `any` no justificado.\n3. **Cobertura de Pruebas (Test Coverage Gate)**:\n   - Umbral mínimo obligatorio (p. ej. >80% en líneas, branches y funciones).\n   - Si un PR añade 500 líneas de código nuevo sin sus correspondientes tests, la cobertura global cae y el pipeline **falla de inmediato**.\n4. **Seguridad y Auditoría**: Cero vulnerabilidades críticas o altas en dependencias (`pnpm audit`).\n\n### 2. Branch Protection Rules de GitHub:\n* **Require Status Checks to Pass**: Los checks de CI (`lint`, `typecheck`, `test-coverage`) deben figurar en verde.\n* **Require Branches to be Up to Date**: Obliga a que el PR esté actualizado con respecto al último commit de `main`, evitando que se mezclen cambios obsoletos que pasarían en local pero romperían en producción.\n* **Require Pull Request Reviews**: Exige la aprobación de al menos 1 o 2 ingenieros mediante archivo `CODEOWNERS`.\n\n### 3. Bots de Cobertura en PRs:\n* Herramientas como Codecov o acciones de GitHub parsean el reporte LCOV generado por Vitest y publican una tabla en los comentarios del PR mostrando el diferencial exacto de cobertura (+0.4% / -1.2%).",
        "codeExample": {
            "language": "yaml",
            "code": "# Configuración del Quality Gate con Vitest y reporte de cobertura automático:\nname: Quality Gate & Coverage Enforcement\non: [pull_request]\n\njobs:\n  validate-quality:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n\n      - uses: pnpm/action-setup@v3\n        with:\n          version: 9\n\n      - uses: actions/setup-node@v4\n        with:\n          node-version: 20\n          cache: 'pnpm'\n\n      - run: pnpm install --frozen-lockfile\n\n      # 1. Typecheck estricto:\n      - name: Strict Type Check\n        run: pnpm tsc --noEmit\n\n      # 2. Ejecutar Tests con umbral estricto en Vitest (falla si coverage < 80%):\n      - name: Tests con Cobertura y Umbrales\n        run: |\n          pnpm vitest run --coverage --coverage.thresholds.lines=80 --coverage.thresholds.branches=80\n\n      # 3. Publicar reporte en comentario del PR para visibilidad del equipo:\n      - name: Publicar Resumen de Cobertura en el PR\n        uses: davelosert/vitest-coverage-report-action@v2\n        if: always()\n        with:\n          github-token: ${{ secrets.GITHUB_TOKEN }}`"
        },
        "visualDiagram": {
            "id": "diag-cicd-08",
            "title": "Quality Gates Automatizados y Bot de Cobertura en PRs",
            "caption": "Branch Protection Rules bloqueando el merge hasta que linters, typecheck y umbrales de cobertura superen el 80% satisfactoriamente.",
            "diagramType": "cicd-quality-gates-coverage-bot"
        },
        "interviewTips": {
            "whatInterviewersWant": "Justificar por qué medir únicamente 'line coverage' es una métrica vanidosa y explicar la importancia de fijar umbrales en 'branch coverage' para asegurar que los caminos lógicos condicionales (if/else/switch) estén probados.",
            "commonPitfalls": ["Permitir que administradores de repositorio tengan habilitado el botón de 'Bypass branch protections', permitiendo merges de código en rojo.", "Fijar umbrales de cobertura al 100% irrealistas que fomentan tests inútiles sin aserciones reales solo para pasar el gate."],
            "followUps": [
                "¿Qué checks harías obligatorios para hacer merge?",
                "¿Cómo evitarías que la cobertura baje en cada PR?"
            ]
        },
        "quiz": {
            "question": "¿Por qué es fundamental auditar la métrica 'Branch Coverage' además del simple 'Line Coverage' en un Quality Gate?",
            "options": ["Porque mide la cantidad de ramas abiertas en Git", "Porque asegura que todos los caminos lógicos condicionales (ramas if/else, operadores ternarios) hayan sido evaluados por los tests, y no solo que la línea haya sido leída", "Porque reduce el peso del bundle final en producción", "Porque verifica que las imágenes SVG no contengan errores sintácticos"],
            "correctIndex": 1,
            "explanation": "El line coverage solo indica si el intérprete pasó por una línea; el branch coverage valida si se probaron todos los resultados posibles de las bifurcaciones condicionales (tanto la rama verdadera como la falsa), detectando bugs en casos extremos."
        },
        "level": "medio"
    },
    {
        "title": "¿Cómo se integra Lighthouse CI (LHCI) en el pipeline para auditar Core Web Vitals y prevenir regresiones de rendimiento en producción?",
        "response": "El rendimiento no es un objetivo puntual que se audita una vez al año: es una métrica continua que se degrada silenciosamente con cada dependencia añadida o imagen no optimizada. **Lighthouse CI (`@lhci/cli`)** automatiza las auditorías de rendimiento en cada PR:\n\n### 1. Arquitectura de Lighthouse CI:\n* El runner de CI levanta la aplicación (o apunta a la URL de Preview Deployment).\n* Inicia una instancia de **Headless Chrome** y ejecuta la auditoría de Lighthouse un número determinado de veces (típicamente 3 pasadas para calcular la **mediana estadística** y evitar variaciones de red).\n* Compara los resultados contra un archivo de **Presupuestos de Rendimiento (Performance Budgets)** declarados en `lighthouserc.json`.\n\n### 2. Aserciones y Presupuestos (Assertions):\n* Se configuran umbrales mínimos obligatorios:\n  - `categories:performance: 0.90` (Puntuación general mínima de 90).\n  - `largest-contentful-paint: ['error', { maxNumericValue: 2500 }]` (LCP < 2.5s).\n  - `cumulative-layout-shift: ['error', { maxNumericValue: 0.10 }]` (CLS < 0.1).\n  - `total-blocking-time: ['error', { maxNumericValue: 200 }]` (TBT < 200ms).\n* **Bloqueo de PR**: Si un cambio introduce una librería pesada que duplica el LCP a 3.8s, Lighthouse CI falla el job y **bloquea el merge** de inmediato.",
        "codeExample": {
            "language": "json",
            "code": "// lighthouserc.json - Configuración Enterprise de Lighthouse CI:\n{\n  \"ci\": {\n    \"collect\": {\n      \"numberOfRuns\": 3,\n      \"startServerCommand\": \"pnpm preview --port 4173\",\n      \"url\": [\"http://localhost:4173/\", \"http://localhost:4173/dashboard\"],\n      \"settings\": {\n        \"preset\": \"desktop\"\n      }\n    },\n    \"assert\": {\n      \"assertions\": {\n        \"categories:performance\": [\"error\", { \"minScore\": 0.90 }],\n        \"categories:accessibility\": [\"error\", { \"minScore\": 0.95 }],\n        \"categories:best-practices\": [\"error\", { \"minScore\": 0.95 }],\n        \"categories:seo\": [\"error\", { \"minScore\": 1.0 }],\n        \"largest-contentful-paint\": [\"error\", { \"maxNumericValue\": 2500 }],\n        \"cumulative-layout-shift\": [\"error\", { \"maxNumericValue\": 0.10 }],\n        \"total-blocking-time\": [\"error\", { \"maxNumericValue\": 200 }]\n      }\n    },\n    \"upload\": {\n      \"target\": \"temporary-public-storage\"\n    }\n  }\n}"
        },
        "visualDiagram": {
            "id": "diag-cicd-09",
            "title": "Auditoría Automatizada de Core Web Vitals con Lighthouse CI",
            "caption": "Ejecución de múltiples pasadas en Headless Chrome contra presupuestos de rendimiento, bloqueando PRs que degraden el LCP o CLS.",
            "diagramType": "cicd-lighthouse-ci-performance-budgets"
        },
        "interviewTips": {
            "whatInterviewersWant": "Explicar por qué es indispensable ejecutar múltiples pasadas (mínimo 3) en LHCI para calcular medianas y descartar fluctuaciones de CPU/red en los runners de GitHub.",
            "commonPitfalls": ["Ejecutar Lighthouse CI contra el servidor de desarrollo (`pnpm dev`) en lugar del build de producción minificado (`pnpm preview`), obteniendo métricas falsamente pésimas.", "Auditar únicamente la página de inicio e ignorar rutas críticas de negocio (como el catálogo o el checkout)."],
            "followUps": [
                "¿Cómo definirías los presupuestos de rendimiento?",
                "¿Cómo reducirías la variabilidad entre ejecuciones de Lighthouse?"
            ]
        },
        "quiz": {
            "question": "¿Por qué Lighthouse CI recomienda configurar 'numberOfRuns: 3' en su archivo de configuración?",
            "options": ["Para probar la web en tres idiomas diferentes", "Para obtener múltiples muestras y calcular la mediana estadística, mitigando la variabilidad de rendimiento de la CPU del runner en la nube", "Porque cada pasada evalúa un navegador distinto (Chrome, Firefox y Safari)", "Para triplicar la velocidad de carga de la página"],
            "correctIndex": 1,
            "explanation": "Los runners de CI en la nube sufren fluctuaciones temporales de CPU e I/O de disco ('noisy neighbors'). Realizar al menos 3 pasadas permite calcular la mediana y evitar falsos positivos que rompan el pipeline."
        },
        "level": "avanzado"
    },
    {
        "title": "¿Cómo funcionan las estrategias de despliegue en producción: Blue-Green vs Canary vs Rolling Deployments y qué trade-offs presentan?",
        "response": "Desplegar a producción reemplazando instancias en vivo a ciegas (*Big Bang Deployment*) es inaceptable en arquitecturas enterprise. Existen tres estrategias principales para mitigar el riesgo:\n\n### 1. Blue-Green Deployment:\n* **Mecánica**: Se mantienen dos entornos de producción idénticos: **Blue (activo sirviendo el 100% del tráfico)** y **Green (inactivo/reposo)**.\n* La nueva versión (v2.0) se despliega en Green. Se ejecutan pruebas de humo exhaustivas en Green sin impacto para los usuarios.\n* Tras validar, el enrutador/balanceador de carga conmuta atómicamente el tráfico: **Green pasa al 100% y Blue queda en reposo**.\n* **Ventajas**: Cero downtime y **Rollback instantáneo**: si v2.0 falla, se conmuta de vuelta a Blue en 1 segundo.\n* **Desventajas**: Duplica los costes de infraestructura al mantener dos entornos completos en paralelo.\n\n### 2. Canary Deployment:\n* **Mecánica**: Inspirado en los canarios de las minas de carbón. La nueva versión (v2.0) se despliega junto a la versión actual (v1.0), pero el balanceador solo le envía una **fracción mínima del tráfico real (p. ej. 5% - 10%)**.\n* Se monitorizan métricas críticas de observabilidad en tiempo real (tasa de errores 5xx, excepciones JS no capturadas, latencia p95).\n* Si las métricas son estables, el tráfico escala progresivamente: $10\\% \\rightarrow 25\\% \\rightarrow 50\\% \\rightarrow 100\\%$.\n* **Ventajas**: Exposición de riesgo mínima: un bug grave solo afecta al 5% de usuarios antes de detectarse.\n\n### 3. Rolling Deployment (Despliegue Progresivo):\n* **Mecánica**: En un clúster de $N$ servidores o pods, las instancias se actualizan secuencialmente por lotes (p. ej. 2 de 10 a la vez) mientras el resto sigue atendiendo peticiones.\n* **Ventajas**: No requiere duplicar infraestructura.\n* **Desventajas**: Durante el despliegue coexisten versiones v1 y v2 atendiendo tráfico simultáneamente, requiriendo que la API y la base de datos mantengan compatibilidad hacia atrás estricta.",
        "codeExample": {
            "language": "yaml",
            "code": "# Configuración de Canary Deployment en Kubernetes usando Argo Rollouts:\napiVersion: argoproj.io/v1alpha1\nkind: Rollout\nmetadata:\n  name: enterprise-frontend-rollout\nspec:\n  replicas: 10\n  strategy:\n    canary:\n      # Pasos progresivos de tráfico con pausas de análisis de métricas:\n      steps:\n        # Paso 1: Enviar solo el 10% del tráfico a la nueva versión (Canary):\n        - setWeight: 10\n        - pause: { duration: 10m } # Monitorear Sentry / Datadog durante 10 minutos\n\n        # Paso 2: Escalar al 30% si no hay anomalías:\n        - setWeight: 30\n        - pause: { duration: 15m }\n\n        # Paso 3: Escalar al 60%:\n        - setWeight: 60\n        - pause: { duration: 10m }\n\n        # Paso 4: Promoción al 100% definitiva:\n        - setWeight: 100\n\n      # Análisis automatizado de métricas en Prometheus:\n      analysis:\n        templates:\n          - templateName: success-rate-metric-check\n        args:\n          - name: service-name\n            value: frontend-service"
        },
        "visualDiagram": {
            "id": "diag-cicd-10",
            "title": "Estrategias de Despliegue: Blue-Green vs Canary Deployments",
            "caption": "Blue-Green conmuta el 100% del tráfico entre entornos idénticos; Canary expone la nueva versión progresivamente a un porcentaje controlado de usuarios.",
            "diagramType": "cicd-deployment-strategies-blue-green-canary"
        },
        "interviewTips": {
            "whatInterviewersWant": "Justificar la elección entre Blue-Green y Canary basándose en costes de infraestructura y tolerancia al riesgo, y destacar que durante un Rolling deployment ambas versiones deben convivir sin romper sesiones.",
            "commonPitfalls": ["Creer que Canary deployment se puede hacer sin un sistema robusto de métricas y observabilidad automatizada en tiempo real.", "Olvidar la retrocompatibilidad en APIs y cookies cuando usuarios saltan entre instancias v1 y v2 durante un despliegue progresivo."],
            "followUps": [
                "¿Cómo gestionarías las migraciones de base de datos en un Blue-Green?",
                "¿Qué métricas observarías durante un Canary?"
            ]
        },
        "quiz": {
            "question": "¿Cuál es la principal ventaja técnica de una estrategia de despliegue Canary frente a un despliegue Blue-Green tradicional?",
            "options": ["No requiere escribir archivos YAML", "Permite exponer la nueva versión a un porcentaje diminuto de tráfico real (5-10%) para validar métricas de error sin arriesgar a la totalidad de los usuarios ni duplicar el 100% de la infraestructura", "Elimina la necesidad de utilizar un CDN", "Garantiza que la aplicación funcione en modo offline"],
            "correctIndex": 1,
            "explanation": "Canary limita el radio de impacto (*blast radius*): si la nueva versión contiene un error crítico no detectado en tests, solo un pequeño porcentaje de usuarios experimenta el problema antes de activar el rollback."
        },
        "level": "avanzado"
    },
    {
        "title": "¿Cómo se garantiza un Despliegue Atómico de Frontend en CDNs y cómo se erradica el error crítico 'Failed to fetch dynamically imported module' (Chunk 404)?",
        "response": "Uno de los errores más frustrantes en Single Page Applications modernas en producción es el **Chunk Load Error (404)**: ocurre cuando un usuario tiene la aplicación abierta en una versión antigua, navega a una ruta con lazy loading (`React.lazy()` / `import()`), y el archivo JS que intenta descargar ya fue borrado del servidor por un despliegue reciente.\n\n### 1. La Causa del Problema: Despliegues Destructivos:\n* Si el pipeline de CI/CD ejecuta `aws s3 sync dist/ s3://bucket/ --delete`, elimina de inmediato todos los archivos JS de la versión previa.\n* Si el usuario cargó el `index.html` de las 14:00 (que referencia a `chunk-auth.a81f.js`), y a las 14:05 se despliega una nueva versión con `chunk-auth.99bc.js`, al hacer clic en 'Login' el navegador solicita el chunk antiguo, recibe un HTTP 404 y la aplicación se congela o lanza una pantalla en blanco.\n\n### 2. La Regla de Oro: Despliegue Atómico en 2 Fases:\n1. **Fase 1: Subida de Assets Inmutables (NUNCA BORRAR)**:\n   - Se suben todos los archivos JS, CSS, fuentes e imágenes versionadas con hash de contenido (`assets/**`).\n   - Se suben **SIN la bandera `--delete`** (las versiones viejas conviven en el bucket durante semanas).\n   - Se configuran con cabecera de caché eterna: `Cache-Control: public, max-age=31536000, immutable`.\n2. **Fase 2: Conmutación Atómica de `index.html`**:\n   - Una vez que todos los nuevos chunks están en el bucket y propagados, se sube el nuevo `index.html`.\n   - Se configura con cabecera de no-caché: `Cache-Control: no-cache, no-store, must-revalidate`.\n   - Se invalida la caché del CDN exclusivamente para `/index.html`.",
        "codeExample": {
            "language": "bash",
            "code": "#!/bin/bash\n# Script de Despliegue Atómico Enterprise para AWS S3 y CloudFront:\nset -e\n\nBUCKET=\"s3://enterprise-frontend-production\"\nDIST_DIR=\"dist\"\n\necho \"Paso 1: Subiendo assets versionados inmutables (SIN borrar versiones antiguas)...\"\naws s3 sync \"$DIST_DIR/assets\" \"$BUCKET/assets\" \\\n  --cache-control \"public, max-age=31536000, immutable\"\n\necho \"Paso 2: Subiendo archivos estáticos complementarios (iconos, manifest, robots)...\"\naws s3 sync \"$DIST_DIR\" \"$BUCKET\" \\\n  --exclude \"assets/*\" \\\n  --exclude \"index.html\" \\\n  --cache-control \"public, max-age=86400\"\n\necho \"Paso 3: Conmutación atómica de index.html (NUNCA cacheado en disco del navegador)...\"\naws s3 cp \"$DIST_DIR/index.html\" \"$BUCKET/index.html\" \\\n  --cache-control \"no-cache, no-store, must-revalidate\"\n\necho \"Paso 4: Invalidando únicamente el punto de entrada index.html en el CDN Edge...\"\naws cloudfront create-invalidation \\\n  --distribution-id E123EXAMPLE \\\n  --paths \"/index.html\" \"/\"\n\necho \"✅ Despliegue Atómico Completado con CERO errores 404 para sesiones activas.\""
        },
        "visualDiagram": {
            "id": "diag-cicd-11",
            "title": "Despliegue Atómico en CDN: Erradicación del Error 404 en Chunks",
            "caption": "Subida de assets inmutables con hashes únicos sin borrar versiones previas, seguida de la conmutación atómica del index.html.",
            "diagramType": "cicd-atomic-cdn-deployment-hashes"
        },
        "interviewTips": {
            "whatInterviewersWant": "Demostrar que comprendes por qué nunca se debe usar `--delete` a ciegas en el directorio de assets con hash y cómo configurar adecuadamente las cabeceras `Cache-Control` (`immutable` en chunks vs `no-cache` en `index.html`).",
            "commonPitfalls": ["Configurar `Cache-Control: max-age=31536000` en el archivo `index.html`, impidiendo que los usuarios reciban actualizaciones hasta que purguen la caché del navegador manualmente.", "Borrar chunks anteriores inmediatamente, provocando caídas de usuarios activos con sesiones de larga duración."],
            "followUps": [
                "¿Por qué deben subirse primero los assets y después el index.html?",
                "¿Cómo manejarías el error de chunk 404 en el cliente?"
            ]
        },
        "quiz": {
            "question": "¿Por qué es fundamental NO utilizar la bandera '--delete' al sincronizar los chunks de JavaScript con hash en un bucket de S3/CDN durante un despliegue de frontend?",
            "options": ["Porque la API de AWS cobra el doble por cada archivo borrado", "Porque los usuarios que tienen la aplicación abierta en ese instante solicitarán chunks con hashes antiguos vía lazy loading y recibirán un error HTTP 404 que romperá su sesión", "Porque los archivos borrados no pueden recuperarse de la papelera de reciclaje", "Porque provoca una sobrecarga en el servidor DNS"],
            "correctIndex": 1,
            "explanation": "Al retener los chunks de versiones anteriores en el CDN, cualquier usuario que mantenga una pestaña abierta con una versión previa podrá seguir descargando sus componentes secundarios sin errores de 'chunk load failed'."
        },
        "level": "avanzado"
    },
    {
        "title": "¿Cómo se estructuran las prácticas de DevSecOps en un pipeline moderno mediante SAST, DAST y Software Bill of Materials (SBOM)?",
        "response": "En la era del software moderno, la seguridad no es una auditoría final que se delega a un departamento externo al final del año: se integra de forma automatizada en el pipeline de entrega mediante **DevSecOps**:\n\n### 1. SAST (Static Application Security Testing):\n* **Qué hace**: Inspecciona el código fuente estático y su Árbol de Sintaxis Abstracta (AST) **antes de compilar**.\n* **Herramientas**: SonarQube, GitHub CodeQL, Snyk Code, Semgrep.\n* **Qué detecta**: Inyecciones XSS (`dangerouslySetInnerHTML`), llamadas a `eval()`, secretos y API keys hardcodeadas en commits, regex vulnerables a ReDoS y uso de métodos criptográficos débiles.\n* **Momento de ejecución**: En cada Pull Request. Bloquea el merge de inmediato si detecta vulnerabilidades de severidad alta.\n\n### 2. Software Bill of Materials (SBOM) & Dependencias:\n* **Qué hace**: Genera un inventario formal, estandarizado y verificable de todos los componentes de código abierto y dependencias directas y transitivas del proyecto.\n* **Estándares**: CycloneDX o SPDX.\n* **Herramientas**: Syft, Snyk, Grype, `pnpm audit`.\n* **Qué detecta**: Detección inmediata de CVEs conocidas (Common Vulnerabilities and Exposures) en dependencias de `node_modules` y control de cumplimiento de licencias restrictivas (GPL/AGPL).\n\n### 3. DAST (Dynamic Application Security Testing):\n* **Qué hace**: Ataca la aplicación **en tiempo de ejecución desde el exterior**, como lo haría un hacker real.\n* **Herramientas**: OWASP ZAP, StackHawk.\n* **Qué detecta**: Ausencia de cabeceras de seguridad HTTP (`Content-Security-Policy`, `Strict-Transport-Security`), vulnerabilidades de CORS mal configurado y cookies de sesión inseguras sin flags `HttpOnly` o `SameSite`.\n* **Momento de ejecución**: En el entorno de Staging o Preview Deployment antes de autorizar el pase a producción.",
        "codeExample": {
            "language": "yaml",
            "code": "# Pipeline de DevSecOps con SAST (CodeQL) y generación de SBOM (CycloneDX):\nname: DevSecOps Gate\non: [pull_request]\n\njobs:\n  sast-codeql-scan:\n    runs-on: ubuntu-latest\n    permissions:\n      security-events: write\n    steps:\n      - uses: actions/checkout@v4\n      - name: Inicializar CodeQL (Motor Semántico de Seguridad)\n        uses: github/codeql-action/init@v3\n        with:\n          languages: javascript-typescript\n      - name: Ejecutar Análisis SAST\n        uses: github/codeql-action/analyze@v3\n\n  dependency-sbom-audit:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: pnpm/action-setup@v3\n        with:\n          version: 9\n\n      # 1. Auditoría de vulnerabilidades conocidas en dependencias:\n      - name: Auditoría de Dependencias NPM\n        run: pnpm audit --audit-level=high\n\n      # 2. Generación del Software Bill of Materials (SBOM) estándar CycloneDX:\n      - name: Generar SBOM con CycloneDX\n        run: npx @cyclonedx/cyclonedx-npm --output-file sbom.json --output-format JSON\n\n      - name: Archivar SBOM como Artefacto Verificable\n        uses: actions/upload-artifact@v4\n        with:\n          name: software-bill-of-materials\n          path: sbom.json"
        },
        "visualDiagram": {
            "id": "diag-cicd-12",
            "title": "Ecosistema DevSecOps: SAST, SBOM y DAST en Pipelines",
            "caption": "SAST analiza el código fuente en PRs; SBOM audita las dependencias transitivas; DAST evalúa la aplicación en runtime en Staging.",
            "diagramType": "cicd-security-sast-dast-sbom"
        },
        "interviewTips": {
            "whatInterviewersWant": "Diferenciar con claridad SAST (código fuente estático sin ejecutar) de DAST (caja negra atacando la aplicación viva) y explicar para qué sirve un SBOM en auditorías de seguridad corporativas.",
            "commonPitfalls": ["Ignorar las alertas de dependencias transitivas (`pnpm audit`) hasta acumular cientos de vulnerabilidades inmanejables.", "Ejecutar herramientas DAST destructivas directamente contra la base de datos de producción."],
            "followUps": [
                "¿Qué diferencia hay entre SAST y DAST?",
                "¿Para qué sirve un SBOM ante una vulnerabilidad como Log4Shell?"
            ]
        },
        "quiz": {
            "question": "¿En qué etapa del pipeline de CI/CD opera una herramienta SAST como CodeQL o SonarQube?",
            "options": ["Ataca el balanceador de carga cuando la aplicación está en producción", "Analiza el código fuente estático y su árbol de sintaxis (AST) antes de compilar para detectar vulnerabilidades en los archivos del repositorio", "Monitorea el consumo de memoria RAM de los usuarios", "Reescribe los nombres de las variables para minificar el código"],
            "correctIndex": 1,
            "explanation": "SAST (Static Application Security Testing) analiza el código estático en el repositorio en busca de patrones de código inseguro, inyecciones o claves hardcodeadas antes de que el código sea compilado o desplegado."
        },
        "level": "avanzado"
    },
    {
        "title": "¿Qué es la Seguridad en la Cadena de Suministro (Supply Chain Security), el framework SLSA y cómo firmar artefactos con Sigstore y Cosign?",
        "response": "Ataques notorios como *SolarWinds* o la inyección de malware en paquetes de npm (*event-stream*, *ua-parser-js*) demostraron que el código puede ser 100% legítimo en Git, pero ser alterado maliciosamente durante el proceso de empaquetado en el runner de CI o en el registro de artefactos:\n\n### 1. El Framework SLSA (Supply-chain Levels for Software Artifacts):\nEs un estándar de seguridad de la industria liderado por OpenSSF y Google para certificar la integridad del software:\n* **SLSA Level 1**: Proceso de build automatizado con procedencia documentada.\n* **SLSA Level 2**: Control de versiones estricto y servicio de build autenticado.\n* **SLSA Level 3**: **Entorno de build hermético y aislado** (el runner de CI no puede ser manipulado externamente; genera atestaciones criptográficas no falsificables sobre qué commit exacto produjo qué binario).\n\n### 2. Firmas Criptográficas con Sigstore y Cosign:\n* Históricamente, firmar binarios requería gestionar claves privadas PGP complejas que solían extraviarse o filtrarse.\n* **Sigstore (Cosign)** introduce la **firma sin claves estáticas (Keyless Signing)**:\n  1. El runner de GitHub Actions solicita un certificado de corta duración (válido por 10 minutos) a la autoridad certificadora **Fulcio**, identificándose mediante su token OIDC.\n  2. Cosign firma criptográficamente el contenedor Docker o artefacto generado.\n  3. La firma y la atestación de procedencia se registran en **Rekor**, un libro de contabilidad público e inmutable basado en árboles de Merkle (*Transparency Log*).\n  4. En el momento del despliegue en Kubernetes, un controlador de admisión (**Kyverno** / **OPA**) verifica la firma en Rekor. Si alguien alteró un solo byte de la imagen, el clúster rechaza el pod de inmediato.",
        "codeExample": {
            "language": "yaml",
            "code": "# Firma criptográfica de contenedores de frontend usando Cosign y GitHub OIDC:\nname: Supply Chain Secure Build & Sign\non:\n  push:\n    tags: ['v*']\n\npermissions:\n  contents: read\n  packages: write\n  id-token: write # Necesario para Keyless Signing con Sigstore\n\njobs:\n  build-and-sign:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n\n      - name: Instalar Cosign (Herramienta de Firma de Sigstore)\n        uses: sigstore/cosign-installer@v3.5.0\n\n      - name: Login en GitHub Container Registry\n        uses: docker/login-action@v3\n        with:\n          registry: ghcr.io\n          username: ${{ github.actor }}\n          password: ${{ secrets.GITHUB_TOKEN }}\n\n      - name: Build y Push de Imagen Docker\n        id: docker_build\n        uses: docker/build-push-action@v5\n        with:\n          push: true\n          tags: ghcr.io/${{ github.repository }}:${{ github.ref_name }}\n\n      # Firma criptográfica no falsificable vinculada a la identidad del workflow:\n      - name: Firmar Imagen con Cosign (Keyless)\n        run: |\n          cosign sign --yes \\\n            ghcr.io/${{ github.repository }}:${{ github.ref_name }}"
        },
        "visualDiagram": {
            "id": "diag-cicd-13",
            "title": "Supply Chain Security: Firmas Criptográficas con Sigstore y Cosign",
            "caption": "Firma sin claves mediante identidad OIDC, registro inmutable en el Transparency Log Rekor y validación en clúster.",
            "diagramType": "cicd-supply-chain-sigstore-cosign"
        },
        "interviewTips": {
            "whatInterviewersWant": "Explicar el concepto de 'Keyless Signing' con OIDC y Fulcio, y cómo el registro de transparencia Rekor impide que atacantes inyecten binarios no auditados en producción.",
            "commonPitfalls": ["Creer que usar Docker tags como `:latest` o `:v1.0` es suficiente (los tags son mutables; solo los digests sha256 garantizan inmutabilidad estricta).", "Descargar scripts externos no verificados en el runner mediante `curl | bash` en medio del pipeline."],
            "followUps": [
                "¿Qué niveles define SLSA?",
                "¿Qué es el keyless signing de Sigstore?"
            ]
        },
        "quiz": {
            "question": "¿Cuál es la función principal de Cosign y Sigstore en la seguridad de pipelines de CI/CD?",
            "options": ["Comprimir archivos CSS para reducir su peso", "Firmar criptográficamente artefactos e imágenes de contenedores mediante identidades OIDC efímeras, garantizando que el binario proviene del repositorio legítimo y no fue alterado", "Crear copias de seguridad de bases de datos relacionales", "Reemplazar las funciones de React por Web Components"],
            "correctIndex": 1,
            "explanation": "Cosign y Sigstore permiten firmar criptográficamente los artefactos generados en CI sin necesidad de gestionar claves privadas de larga duración, registrando la prueba de procedencia en un log de transparencia inmutable."
        },
        "level": "avanzado"
    },
    {
        "title": "¿Cómo se implementa el desacoplamiento entre Despliegue (Deploy) y Lanzamiento (Release) mediante Feature Flags en flujos Trunk-Based?",
        "response": "Tradicionalmente, desplegar código a producción equivalía a entregárselo a los usuarios finales en ese mismo segundo. Si la funcionalidad tenía un fallo imprevisto, la única solución era un estresante rollback de emergencia.\n\n### 1. Despliegue (Deploy) != Lanzamiento (Release):\n* **Deploy (Evento Técnico)**: Proceso mediante el cual el código compilado se transfiere a los servidores o CDN de producción. El código reside en producción, pero está **apagado (inactivo)**.\n* **Release (Decisión de Negocio)**: Momento en el que la funcionalidad se vuelve **visible o interactiva para los usuarios finales**.\n\n### 2. Feature Flags en Trunk-Based Development:\n* Los Feature Flags permiten a los desarrolladores fusionar ramas pequeñas a `main` diariamente (*Trunk-Based Development*), incluso con código a medio terminar:\n  - El código incompleto se envuelve en un condicional: `if (flags.isEnabled('new-checkout'))`.\n  - El flag se mantiene en `false` por defecto en producción.\n  - **Elimina las Git Feature Branches de larga duración** que provocan conflictos dolorosos de merge.\n\n### 3. Estrategias de Rollout Progresivo y Kill-Switch:\n* **Segmentación Progresiva**: El flag se activa primero para el equipo interno (empleados) $\rightarrow$ 10% de usuarios beta $\rightarrow$ 50% $\rightarrow$ 100% global.\n* **Kill-Switch Instantáneo**: Si un error crítico se detecta a las 03:00 AM, un operador o product manager apaga el flag en el dashboard (LaunchDarkly, Unleash, GrowthBook) y la funcionalidad **desaparece para los usuarios en menos de 1 segundo sin necesidad de recompilar ni desplegar código**.",
        "codeExample": {
            "language": "typescript",
            "code": "// Implementación desacoplada con Feature Flags en React:\nimport React from 'react';\nimport { useFeatureFlag } from '@/services/feature-flags';\nimport { LegacyCheckout } from './LegacyCheckout';\nimport { ModernRedesignedCheckout } from './ModernRedesignedCheckout';\n\nexport function CheckoutContainer() {\n  // Evaluación del flag en tiempo real (evaluado en el edge o memoria local):\n  const { isEnabled, isLoading } = useFeatureFlag('checkout-v2-redesign', {\n    defaultValue: false,\n    attributes: {\n      userId: CurrentUser.id,\n      country: CurrentUser.country,\n      isBetaTester: CurrentUser.isBeta\n    }\n  });\n\n  if (isLoading) {\n    return <CheckoutSkeleton />;\n  }\n\n  // El código de la v2 reside en producción desde hace semanas, pero solo se activa\n  // cuando Producto decide cambiar el porcentaje de rollout en LaunchDarkly / Unleash:\n  return isEnabled ? (\n    <ModernRedesignedCheckout />\n  ) : (\n    <LegacyCheckout />\n  );\n}"
        },
        "visualDiagram": {
            "id": "diag-cicd-14",
            "title": "Desacoplamiento: Despliegue Técnico (Deploy) vs Release con Flags",
            "caption": "Código en producción con flag apagado, habilitando activación progresiva (10% -> 100%) y Kill-Switch instantáneo.",
            "diagramType": "cicd-feature-flags-decoupling-release"
        },
        "interviewTips": {
            "whatInterviewersWant": "Articular con claridad que los Feature Flags permiten Trunk-Based Development al evitar ramas de larga duración y enfatizar la importancia de tener un proceso de limpieza de deuda técnica para retirar flags obsoletos.",
            "commonPitfalls": ["Dejar feature flags activos indefinidamente en el código fuente, generando una maraña de condicionales espagueti imposibles de testear (*Flag Debt*).", "Evaluar feature flags mediante llamadas síncronas bloqueantes a la red en cada render del componente."],
            "followUps": [
                "¿Cómo evitarías la deuda técnica de flags olvidados?",
                "¿Qué diferencia hay entre release flags y ops flags?"
            ]
        },
        "quiz": {
            "question": "¿Cuál es la función principal de un 'Kill-Switch' implementado mediante Feature Flags en una aplicación web?",
            "options": ["Apagar el servidor físico del centro de datos", "Desactivar instantáneamente una funcionalidad problemática en producción para todos los usuarios en segundos sin requerir un nuevo build ni despliegue de código", "Borrar la cuenta del usuario si introduce contraseñas incorrectas", "Eliminar el repositorio de Git"],
            "correctIndex": 1,
            "explanation": "El Kill-Switch permite desactivar una funcionalidad defectuosa en tiempo real desde un panel de control, mitigando el impacto de incidentes sin tener que esperar a que un pipeline de emergencia compile y despliegue un parche."
        },
        "level": "avanzado"
    },
    {
        "title": "¿En qué consiste el paradigma GitOps y cómo funciona el bucle de reconciliación declarativa con herramientas como ArgoCD o Flux?",
        "response": "En los pipelines de CD tradicionales (*Push-based CD*), el runner de CI/CD tiene credenciales administrativas con acceso directo al clúster de producción y ejecuta comandos imperativos (`kubectl apply`). Si alguien modifica manualmente un pod en el clúster, el repositorio de Git queda desincronizado (**Configuration Drift**).\n\n### 1. Los 4 Principios de GitOps (OpenGitOps):\n1. **Declarativo**: El estado deseado de toda la aplicación e infraestructura se describe formalmente mediante manifiestos declarativos (YAML, Kustomize, Helm).\n2. **Versionado e Inmutable en Git**: Git es la **única fuente de verdad (Single Source of Truth)**. Todo cambio debe realizarse mediante un commit y Pull Request auditado.\n3. **Tirado Automáticamente (Pull-based)**: En lugar de que el CI empuje cambios al clúster, un **agente de software interno (ArgoCD / Flux)** corre dentro del clúster y monitorea el repositorio de Git.\n4. **Bucle de Reconciliación Continua (Reconciliation Loop)**:\n   - El operador compara continuamente el **Estado Deseado (en Git)** con el **Estado Real (en el Clúster)**.\n   - Si detecta divergencia (*Drift*), aplica los cambios necesarios automáticamente para sincronizar el clúster.\n\n### 2. Ventajas de Seguridad Radicales:\n* **Cero Credenciales en CI**: El runner de GitHub Actions no necesita claves de Kubernetes ni acceso a la red de producción. Solo hace un push al repositorio de manifiestos Git.\n* **Autocuración (Self-Healing)**: Si un desarrollador entra por terminal y borra un pod o altera una variable manualmente, ArgoCD detecta la discrepancia en segundos y **revierte el cambio manual** para coincidir con lo declarado en Git.",
        "codeExample": {
            "language": "yaml",
            "code": "# Manifiesto de Aplicación GitOps en ArgoCD:\napiVersion: argoproj.io/v1alpha1\nkind: Application\nmetadata:\n  name: enterprise-frontend-app\n  namespace: argocd\nspec:\n  project: default\n  # 1. Fuente de Verdad (Git Repository):\n  source:\n    repoURL: 'https://github.com/enterprise-org/k8s-manifests.git'\n    targetRevision: main\n    path: apps/frontend/production\n  # 2. Destino (Cluster interno de producción):\n  destination:\n    server: 'https://kubernetes.default.svc'\n    namespace: frontend-prod\n  # 3. Política de Sincronización Declarativa y Autocuración:\n  syncPolicy:\n    automated:\n      prune: true    # Borra recursos de K8s si fueron eliminados del archivo en Git\n      selfHeal: true # Si alguien muta el cluster manualmente, ArgoCD lo sobreescribe con Git\n    syncOptions:\n      - CreateNamespace=true"
        },
        "visualDiagram": {
            "id": "diag-cicd-15",
            "title": "Modelo GitOps: Sincronización y Reconciliación con ArgoCD",
            "caption": "Git como única fuente de verdad: el controlador dentro del clúster reconcilia el estado real y elimina el configuration drift.",
            "diagramType": "cicd-gitops-argocd-reconciliation"
        },
        "interviewTips": {
            "whatInterviewersWant": "Explicar la diferencia entre CI empujando cambios a ciegas (Push CD) y GitOps tirando cambios desde adentro del clúster (Pull CD), y cómo el 'Self-Healing' erradica los cambios manuales no auditados.",
            "commonPitfalls": ["Confundir guardar el código de la aplicación con guardar el repositorio de configuración de infraestructura (se recomienda separar el código de la app del repositorio de manifiestos de despliegue).", "Permitir que desarrolladores apliquen `kubectl edit` manual en producción rompiendo la filosofía GitOps."],
            "followUps": [
                "¿Qué diferencia hay entre el modelo push y el modelo pull en despliegues?",
                "¿Cómo detecta ArgoCD el drift?"
            ]
        },
        "quiz": {
            "question": "¿Cuál es una ventaja crítica de seguridad del modelo GitOps (Pull-based) frente a los pipelines de despliegue tradicionales (Push-based)?",
            "options": ["Hace que los navegadores web bloqueen los anuncios publicitarios", "El runner de CI en la nube no requiere credenciales de acceso administrativo ni puertos abiertos hacia el clúster de producción, ya que un agente interno en el clúster monitorea Git", "Obliga a que todos los commits se escriban en inglés", "Elimina la necesidad de utilizar contenedores Docker"],
            "correctIndex": 1,
            "explanation": "En GitOps, el agente corre dentro de la infraestructura privada y consulta Git hacia afuera; el pipeline de CI nunca almacena credenciales de acceso a producción ni requiere que el cortafuegos abra puertos hacia el clúster."
        },
        "level": "experto"
    },
    {
        "title": "¿Cómo se diseña un sistema de Rollback Automático basado en métricas de observabilidad en tiempo real (SLOs, Sentry, Prometheus)?",
        "response": "El despliegue continuo de nivel Staff no concluye cuando el script de despliegue retorna código de salida `0`. Concluye cuando el sistema de **Observabilidad en Tiempo Real** confirma que la nueva versión cumple los **SLOs (Service Level Objectives)** de estabilidad:\n\n### 1. El Bucle de Análisis Automático en Despliegues Progresivos:\n* Herramientas como **Argo Rollouts** o **Flagger** se integran con proveedores de telemetría (**Datadog, Prometheus, Sentry, CloudWatch**) durante los despliegues Canary.\n* Cada 30 segundos, el orquestador consulta métricas clave de la versión recién desplegada:\n  - **Error Rate (Tasa de Errores HTTP 5xx)**: Debe mantenerse por debajo del 0.05%.\n  - **Excepciones de JavaScript no capturadas**: Sentry reporta si una nueva excepción impacta a más del 0.1% de los usuarios de la versión Canary.\n  - **Latencia p95 / p99**: Debe ser igual o menor a la versión anterior.\n\n### 2. Disparo del Rollback Automático:\n* Si durante la ventana de análisis (p. ej. 10 minutos) cualquiera de las métricas viola el umbral de error tolerado:\n  1. El controlador aborta la promoción inmediatamente.\n  2. **Reconmuta el 100% del tráfico a la versión estable previa** en menos de 15 segundos.\n  3. Escala a cero las instancias defectuosas de la nueva versión.\n  4. Dispara una notificación de alerta PagerDuty / Slack al equipo de guardia con el enlace a los logs del fallo.\n* **Cero Intervención Humana**: El incidente se contiene automáticamente antes de convertirse en una caída masiva del servicio.",
        "codeExample": {
            "language": "yaml",
            "code": "# Métrica de Análisis Automatizado en Prometheus para Rollback con Argo Rollouts:\napiVersion: argoproj.io/v1alpha1\nkind: AnalysisTemplate\nmetadata:\n  name: frontend-error-rate-check\nspec:\n  metrics:\n    - name: http-5xx-and-js-exceptions\n      interval: 30s\n      successCondition: result[0] <= 0.005 # Éxito: tasa de error menor al 0.5%\n      failureLimit: 2                    # Falla el canary si 2 consultas consecutivas violan el SLO\n      provider:\n        prometheus:\n          address: http://prometheus-k8s.monitoring.svc:9090\n          query: |\n            sum(rate(nginx_ingress_controller_requests{status=~\"5.*\", service=\"frontend-canary\"}[2m]))\n            /\n            sum(rate(nginx_ingress_controller_requests{service=\"frontend-canary\"}[2m]))"
        },
        "visualDiagram": {
            "id": "diag-cicd-16",
            "title": "Rollback Automático Basado en Métricas de Observabilidad",
            "caption": "Detección de anomalías en tiempo real por Prometheus/Sentry disparando el rollback automático en menos de 15 segundos.",
            "diagramType": "cicd-automated-rollback-observability"
        },
        "interviewTips": {
            "whatInterviewersWant": "Demostrar que entiendes que un despliegue sin telemetría es ciego: vincular el éxito del despliegue a métricas reales de usuario (SLOs de error rate y excepciones) en lugar de simplemente verificar que el contenedor inició.",
            "commonPitfalls": ["Definir ventanas de análisis demasiado cortas (p. ej. 30 segundos) que no permiten acumular suficiente volumen de tráfico para que la métrica sea estadísticamente relevante.", "No alertar al equipo tras un rollback automático, dejando el repositorio en un estado inconsistente sin investigar la causa raíz."],
            "followUps": [
                "¿Qué umbrales dispararían un rollback automático?",
                "¿Cómo harías rollback del frontend sin redeploy?"
            ]
        },
        "quiz": {
            "question": "¿Qué condición provoca un Rollback Automático en un despliegue Canary gestionado con herramientas como Argo Rollouts o Flagger?",
            "options": ["Que un desarrollador cierre su sesión en Slack", "Que una consulta de métricas de observabilidad (como la tasa de errores HTTP 5xx o excepciones en Sentry) exceda el umbral de tolerancia definido en el AnalysisTemplate", "Que el archivo package.json contenga comentarios de texto", "Que la memoria RAM del ordenador local del programador llegue al 90%"],
            "correctIndex": 1,
            "explanation": "El sistema evalúa continuamente métricas reales. Si la tasa de errores supera el umbral del SLO, el orquestador aborta la promoción y reconmuta el tráfico a la versión estable previa de forma autónoma."
        },
        "level": "experto"
    },
    {
        "title": "¿Cómo funciona la automatización de versiones y changelogs mediante Semantic Release y Conventional Commits en pipelines de CI/CD?",
        "response": "Determinar el número de versión de un paquete o aplicación mediante reuniones humanas o decisiones arbitrarias es una fuente constante de inconsistencias y errores. **Semantic Release** automatiza todo el ciclo de publicación basándose estrictamente en el estándar de **SemVer (Versionado Semántico)** y **Conventional Commits**:\n\n### 1. El Estándar SemVer (MAJOR.MINOR.PATCH):\n* **PATCH (`v2.1.0` $\\rightarrow$ `v2.1.1`)**: Corrección de errores (*bug fixes*) retrocompatibles.\n* **MINOR (`v2.1.0` $\\rightarrow$ `v2.2.0`)**: Nuevas funcionalidades retrocompatibles.\n* **MAJOR (`v2.1.0` $\\rightarrow$ `v3.0.0`)**: Cambios que rompen la compatibilidad (*Breaking Changes*).\n\n### 2. Mapeo con Conventional Commits:\nSemantic Release inspecciona los mensajes de commit incorporados en `main` desde el último tag de Git:\n* Commits tipo `fix: resolver fuga de memoria en modal` $\\rightarrow$ Incrementa **PATCH**.\n* Commits tipo `feat: añadir autenticación biométrica` $\\rightarrow$ Incrementa **MINOR**.\n* Commits con pie de página `BREAKING CHANGE: eliminar método legacy()` o `feat!: ...` $\\rightarrow$ Incrementa **MAJOR**.\n* Commits tipo `docs:`, `style:`, `refactor:`, `test:` $\\rightarrow$ No disparan nueva versión.\n\n### 3. El Ciclo de Publicación Autónomo:\n1. Analiza el historial de commits y determina el siguiente número de versión matemáticamente.\n2. Genera y actualiza el archivo `CHANGELOG.md` agrupando los cambios por sección.\n3. Actualiza el `package.json` con la nueva versión.\n4. Crea un commit y un **Git Tag** firmado (p. ej. `v2.2.0`).\n5. Publica el paquete en el registro npm o genera una **GitHub Release** con sus artefactos.",
        "codeExample": {
            "language": "json",
            "code": "// .releaserc.json - Configuración Enterprise de Semantic Release:\n{\n  \"branches\": [\"main\"],\n  \"plugins\": [\n    \"@semantic-release/commit-analyzer\",\n    \"@semantic-release/release-notes-generator\",\n    [\n      \"@semantic-release/changelog\",\n      {\n        \"changelogFile\": \"CHANGELOG.md\"\n      }\n    ],\n    [\n      \"@semantic-release/npm\",\n      {\n        \"npmPublish\": true\n      }\n    ],\n    [\n      \"@semantic-release/git\",\n      {\n        \"assets\": [\"package.json\", \"CHANGELOG.md\"],\n        \"message\": \"chore(release): ${nextRelease.version} [skip ci]\\n\\n${nextRelease.notes}\"\n      }\n    ],\n    \"@semantic-release/github\"\n  ]\n}"
        },
        "visualDiagram": {
            "id": "diag-cicd-17",
            "title": "Semantic Release: Versionado y Changelog Autónomos",
            "caption": "Análisis matemático de commits convencionales para calcular SemVer, actualizar CHANGELOG.md y publicar releases.",
            "diagramType": "cicd-semantic-release-git-tag"
        },
        "interviewTips": {
            "whatInterviewersWant": "Explicar cómo la combinación de `commitlint` en pre-commit hooks con Semantic Release en CI erradica el debate humano sobre qué versión toca publicar y garantiza changelogs limpios y trazables.",
            "commonPitfalls": ["Olvidar incluir `[skip ci]` en el mensaje del commit generado por Semantic Release, provocando un bucle infinito donde el release se vuelve a detonar a sí mismo.", "Escribir mensajes de commit genéricos como `fix: changes` que ensucian el historial y las notas de release públicas."],
            "followUps": [
                "¿Cómo determina Semantic Release la siguiente versión?",
                "¿Cómo gestionarías releases pre-release (beta)?"
            ]
        },
        "quiz": {
            "question": "¿Qué incremento de versión de SemVer producirá Semantic Release al detectar un commit con el mensaje 'feat!: rediseñar API pública de autenticación'?",
            "options": ["PATCH", "MINOR", "MAJOR (cambio que rompe la compatibilidad indicado por el signo !)", "Ninguno, ignorará el commit"],
            "correctIndex": 2,
            "explanation": "La exclamación '!' tras el tipo (o el pie 'BREAKING CHANGE:') indica explícitamente un cambio incompatible con versiones anteriores, forzando a Semantic Release a incrementar el número de versión MAJOR."
        },
        "level": "medio"
    },
    {
        "title": "¿Cómo se optimizan suites masivas de pruebas End-to-End en CI mediante el particionamiento distribuido (Playwright Sharding)?",
        "response": "Las pruebas End-to-End con navegadores reales (Playwright) son las que mayor confianza aportan a la arquitectura frontend, pero sufren un grave problema de escalabilidad: una suite con 500 pruebas puede tardar entre **30 y 45 minutos** en ejecutarse en un solo runner de CI, destruyendo la velocidad del equipo:\n\n### 1. El Principio de Sharding (Particionamiento):\n* En lugar de ejecutar toda la suite en una única máquina, Playwright soporta de forma nativa la división de la carga mediante el parámetro `--shard=x/y`.\n* Si configuramos una matriz de **4 shards paralelos**:\n  - **Runner 1**: ejecuta `--shard=1/4` (Tests 1 al 125).\n  - **Runner 2**: ejecuta `--shard=2/4` (Tests 126 al 250).\n  - **Runner 3**: ejecuta `--shard=3/4` (Tests 251 al 375).\n  - **Runner 4**: ejecuta `--shard=4/4` (Tests 376 al 500).\n* Los 4 runners se ejecutan en máquinas independientes de forma simultánea. El tiempo total de ejecución cae de **40 minutos a solo 10 minutos (reducción del 75%)**.\n\n### 2. Consolidación de Reportes con Blob Reporter:\n* Cada shard individual produce un reporte binario intermedio (`blob report`).\n* Un job posterior de consolidación descarga los 4 blobs y ejecuta `npx playwright merge-reports` para generar un **único dashboard HTML integrado** con los vídeos, trazas y capturas de pantalla de todos los tests unificados.",
        "codeExample": {
            "language": "yaml",
            "code": "# Configuración de Playwright Sharding en GitHub Actions:\nname: Parallelized E2E Tests\non: [pull_request]\n\njobs:\n  e2e-sharded-tests:\n    timeout-minutes: 60\n    runs-on: ubuntu-latest\n    strategy:\n      fail-fast: false\n      matrix:\n        # Divide la suite completa en 4 runners paralelos independientes:\n        shardIndex: [1, 2, 3, 4]\n        shardTotal: [4]\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with:\n          node-version: 20\n      - run: pnpm install --frozen-lockfile\n      - run: npx playwright install --with-deps chromium\n\n      # Ejecuta únicamente la porción correspondiente a este shard:\n      - name: Ejecutar Shard ${{ matrix.shardIndex }} de ${{ matrix.shardTotal }}\n        run: |\n          npx playwright test --shard=${{ matrix.shardIndex }}/${{ matrix.shardTotal }} --reporter=blob\n\n      # Sube el reporte individual blob como artefacto:\n      - uses: actions/upload-artifact@v4\n        if: always()\n        with:\n          name: blob-report-${{ matrix.shardIndex }}\n          path: blob-report/\n\n  # Job que unifica los reportes de todos los shards:\n  merge-e2e-reports:\n    needs: [e2e-sharded-tests]\n    if: always()\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/download-artifact@v4\n        with:\n          path: all-blob-reports\n          pattern: blob-report-*\n          merge-multiple: true\n\n      - name: Consolidar Reportes en Dashboard HTML\n        run: npx playwright merge-reports --reporter=html ./all-blob-reports"
        },
        "visualDiagram": {
            "id": "diag-cicd-18",
            "title": "Playwright Test Sharding: Paralelismo Distribuido en CI",
            "caption": "Partición de la suite de pruebas E2E entre múltiples runners paralelos y consolidación en un único informe HTML.",
            "diagramType": "cicd-playwright-sharding-parallel"
        },
        "interviewTips": {
            "whatInterviewersWant": "Explicar cómo funciona `--shard=x/y` y la consolidación con `merge-reports`, destacando la diferencia entre paralelismo multi-hilo local en una máquina (`workers`) y sharding distribuido en múltiples máquinas de CI.",
            "commonPitfalls": ["Confundir `workers: 4` (hilos en una sola VM) con `shard: 1/4` (múltiples VMs completas en paralelo).", "No descargar todos los artefactos de reportes blob con `if: always()` impidiendo generar el reporte consolidado si un test falla."],
            "followUps": [
                "¿Cómo fusionarías los reportes de varios shards?",
                "¿Cómo balancearías los shards según la duración de los tests?"
            ]
        },
        "quiz": {
            "question": "¿Cuál es la principal ventaja técnica de utilizar Playwright Sharding (--shard=1/4) en pipelines de integración continua?",
            "options": ["Convierte el código TypeScript a JavaScript en un solo paso", "Distribuye la ejecución de una suite masiva de pruebas E2E entre múltiples máquinas virtuales independientes en paralelo, reduciendo drásticamente el tiempo total de espera", "Permite probar aplicaciones web en Internet Explorer 6", "Hace que los tests pasen siempre en verde aunque fallen las aserciones"],
            "correctIndex": 1,
            "explanation": "El sharding divide el volumen total de tests entre $N$ runners paralelos. Si una suite tarda 40 minutos en una sola máquina, dividirla en 4 shards reduce el tiempo a aproximadamente 10 minutos."
        },
        "level": "avanzado"
    },
    {
        "title": "¿Cómo se implementa el principio de inmutabilidad 'Build Once, Deploy Anywhere' y una estrategia de Disaster Recovery multi-región para frontends?",
        "response": "Recompilar la aplicación por cada entorno (`npm run build:staging`, `npm run build:prod`) es un grave antipatrón de arquitectura: introduce el riesgo de que el código que pasó las pruebas en Staging no sea idéntico al que se ejecuta en Producción debido a diferencias en dependencias o variables de compilación.\n\n### 1. El Principio 'Build Once, Deploy Anywhere':\n* El pipeline compila la aplicación **exactamente una sola vez** durante la fase de CI.\n* El resultado es un **Artefacto Inmutable** empaquetado con su hash criptográfico SHA-256.\n* Ese **idéntico artefacto** es el que se promociona a través de los entornos de Dev, QA, Staging y Producción.\n* **Inyección de Configuración en Runtime**:\n  - En lugar de inyectar variables de entorno en tiempo de compilación con `VITE_API_URL` (que quedan hardcodeadas en el JS), se cargan en tiempo de ejecución:\n    - Mediante un archivo `/config.json` servido por el servidor web o CDN.\n    - O mediante un script inyectado en el `<head>` del HTML (`window.__APP_CONFIG__`).\n\n### 2. Estrategia de Disaster Recovery Multi-Región:\n* Si la región principal del proveedor de nube sufre una caída masiva (p. ej. fallo total de `us-east-1` en AWS):\n  - **Topología Activo-Activo o Activo-Pasivo Caliente**: Los assets inmutables y el `index.html` se replican automáticamente en dos regiones geográficas independientes (`us-east-1` y `eu-west-1`).\n  - **DNS Global con Health Checks (Cloudflare / Route 53)**: Monitoriza los endpoints cada 10 segundos. Si la región principal no responde, conmuta automáticamente el tráfico a la región secundaria en < 30 segundos (**RTO < 30s, RPO ~ 0s**).",
        "codeExample": {
            "language": "typescript",
            "code": "// Inyección de configuración en Runtime para cumplir 'Build Once':\n// index.html (servido por el servidor o Edge):\n// <script src=\"/config.js\"></script> <!-- Generado dinámicamente según el entorno -->\n\n// config.js generado en el contenedor/edge al iniciar:\n// window.__ENV__ = Object.freeze({\n//   API_GATEWAY_URL: \"https://api.enterprise.com\",\n//   ENVIRONMENT_NAME: \"production\",\n//   SENTRY_DSN: \"https://abc@sentry.io/123\"\n// });\n\n// ConfigService en el código frontend (cero recompilaciones):\ninterface AppConfig {\n  apiGatewayUrl: string;\n  environmentName: string;\n  sentryDsn: string;\n}\n\nexport class RuntimeConfigService {\n  private static config: AppConfig;\n\n  public static get(): AppConfig {\n    if (!this.config) {\n      const runtimeEnv = (window as any).__ENV__;\n      if (!runtimeEnv) {\n        throw new Error('Configuración de entorno en runtime no encontrada');\n      }\n      this.config = {\n        apiGatewayUrl: runtimeEnv.API_GATEWAY_URL,\n        environmentName: runtimeEnv.ENVIRONMENT_NAME,\n        sentryDsn: runtimeEnv.SENTRY_DSN\n      };\n    }\n    return this.config;\n  }\n}"
        },
        "visualDiagram": {
            "id": "diag-cicd-19",
            "title": "Disaster Recovery Multi-Región e Inmutabilidad de Artefactos",
            "caption": "Principio 'Build Once': el mismo artefacto inmutable se despliega en regiones primarias y secundarias con failover por DNS.",
            "diagramType": "cicd-disaster-recovery-multi-region"
        },
        "interviewTips": {
            "whatInterviewersWant": "Defender el principio 'Build Once' explicando cómo desacoplar la configuración de entorno del bundle compilado mediante inyección en runtime, y definir las métricas RTO (Recovery Time Objective) y RPO (Recovery Point Objective).",
            "commonPitfalls": ["Compilar bundles separados para staging y producción usando variables de build diferentes, invalidando la validez de los tests de staging.", "Confiar en una sola región de nube sin tener automatizada la replicación de DNS ni el failover."],
            "followUps": [
                "¿Cómo inyectarías configuración por entorno sin recompilar?",
                "¿Qué RTO y RPO definirías para un frontend?"
            ]
        },
        "quiz": {
            "question": "¿Por qué la práctica de recompilar el código frontend con diferentes variables ('npm run build:staging' y 'npm run build:prod') es considerada un antipatrón en arquitectura enterprise?",
            "options": ["Porque los navegadores no admiten nombres de scripts con dos puntos", "Porque viola el principio de inmutabilidad: no garantiza que el binario testeado en Staging sea exactamente idéntico al que se ejecuta en Producción", "Porque los servidores de CI cobran impuestos adicionales por cada comando npm", "Porque duplica el tamaño de los archivos CSS"],
            "correctIndex": 1,
            "explanation": "El principio 'Build Once' exige compilar el código una sola vez. Al recompilar para cada entorno, se corre el riesgo de introducir discrepancias sutiles en dependencias o transpilación entre lo validado en staging y lo desplegado en producción."
        },
        "level": "experto"
    },
    {
        "title": "¿Cómo se aplican principios de FinOps en CI/CD para recortar costes de computación (concurrency cancellation, path filtering y right-sizing)?",
        "response": "En organizaciones de ingeniería con decenas o cientos de desarrolladores, los costes de pipelines de CI/CD pueden escalar descontroladamente a miles de dólares mensuales. La disciplina de **FinOps en CI/CD** optimiza la eficiencia operativa sin sacrificar la velocidad del equipo:\n\n### 1. Cancelación de Ejecuciones Obsoletas (`concurrency: cancel-in-progress`):\n* Cuando un desarrollador hace 3 pushes consecutivos en un intervalo de 2 minutos sobre la misma rama de PR, el comportamiento por defecto de GitHub Actions es encolar y ejecutar los 3 pipelines completos.\n* **Optimización**: Con `concurrency` y `cancel-in-progress: true`, en cuanto entra un nuevo commit en el PR, **el orquestador aborta inmediatamente los 2 pipelines anteriores** que estaban evaluando código obsoleto.\n* **Impacto**: Reduce hasta un **40% de minutos desperdiciados**.\n\n### 2. Filtrado Inteligente de Rutas (`paths` / `paths-ignore`):\n* Si un commit solo modifica documentación (`docs/**`, `README.md`, `.github/CODEOWNERS`), no tiene sentido ejecutar suites de compilación y tests E2E de 20 minutos.\n* Se configuran reglas de `paths-ignore` para que el pipeline no se detone ante cambios que no impactan al código ejecutable.\n\n### 3. Right-Sizing y Timeouts Defensivos:\n* **Dimensionamiento Adecuado de Runners**: No asignar máquinas de 16 cores para un linter ligero que corre en 5 segundos.\n* **Timeouts Obligatorios (`timeout-minutes: 15`)**: Si un test entra en un bucle infinito o se queda esperando una promesa de red sin resolver, un job sin timeout puede seguir consumiendo cómputo durante 6 horas (el límite por defecto de GitHub).\n* **Docker Multi-Stage con Buildx Caching**: Reutilización de capas de imagen Docker en registros remotos mediante `--cache-to` y `--cache-from`.",
        "codeExample": {
            "language": "yaml",
            "code": "# Optimización FinOps completa en GitHub Actions:\nname: Cost-Optimized CI Pipeline\n\non:\n  push:\n    branches: [main]\n    paths-ignore:\n      - '**.md'\n      - 'docs/**'\n      - '.vscode/**'\n      - 'LICENSE'\n  pull_request:\n    paths-ignore:\n      - '**.md'\n      - 'docs/**'\n\n# 1. CANCELACIÓN POR CONCURRENCIA: Aborta builds obsoletos del mismo PR\nconcurrency:\n  group: ${{ github.workflow }}-${{ github.head_ref || github.run_id }}\n  cancel-in-progress: true\n\njobs:\n  lint-and-validate:\n    # 2. TIMEOUT DEFENSIVO: Evita runners colgados facturando horas innecesarias\n    timeout-minutes: 10\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: pnpm/action-setup@v3\n        with:\n          version: 9\n      - uses: actions/setup-node@v4\n        with:\n          node-version: 20\n          cache: 'pnpm'\n\n      - name: Instalar y Verificar Calidad\n        run: |\n          pnpm install --frozen-lockfile\n          pnpm lint\n          pnpm tsc --noEmit"
        },
        "visualDiagram": {
            "id": "diag-cicd-20",
            "title": "FinOps en CI/CD: Concurrency Cancel y Filtrado de Rutas",
            "caption": "Ahorro de más del 60% en minutos de computación mediante cancelación de builds obsoletos y filtrado inteligente de paths.",
            "diagramType": "cicd-finops-compute-concurrency-cancel"
        },
        "interviewTips": {
            "whatInterviewersWant": "Demostrar conciencia de costes empresariales: cómo la directiva `concurrency: cancel-in-progress` y los timeouts defensivos protegen el presupuesto operativo y mejoran la latencia de feedback del equipo.",
            "commonPitfalls": ["Dejar jobs sin `timeout-minutes`, arriesgando facturas astronómicas si un test se cuelga indefinidamente.", "No configurar `paths-ignore` para cambios de documentación, disparando suites de testing pesado innecesariamente."],
            "followUps": [
                "¿Qué hace concurrency con cancel-in-progress?",
                "¿Cómo medirías el coste por pipeline?"
            ]
        },
        "quiz": {
            "question": "¿Qué problema resuelve la configuración 'concurrency: cancel-in-progress: true' en un workflow de GitHub Actions para Pull Requests?",
            "options": ["Elimina las colisiones de nombres de archivos en el repositorio", "Cancela automáticamente las ejecuciones de pipeline previas que aún estén en curso en esa misma rama si el desarrollador envía un nuevo commit, evitando malgastar minutos de cómputo en código ya obsoleto", "Fuerza a que todos los jobs de la matriz corran en servidores de Google Cloud", "Desactiva las pruebas de rendimiento de Lighthouse"],
            "correctIndex": 1,
            "explanation": "Si un desarrollador realiza múltiples pushes seguidos, 'cancel-in-progress: true' aborta inmediatamente las ejecuciones intermedias en curso para evaluar solo el commit más reciente, ahorrando tiempo y dinero en infraestructura."
        },
        "level": "experto"
    },
  ]
};

export default questionsCICD;