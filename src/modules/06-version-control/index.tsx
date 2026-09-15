import { ISection } from "../../types";

export const questionsVersionControl: ISection = {
  title: "Version Control",
  collapse: "collapseVersionControl",
  icon: "version-control",
  category: "arquitectura-ops",
  description: "Arquitectura interna de Git (DAG), gestión de ramas, resolución de conflictos, gobernanza de Pull Requests y recuperación forense.",
  questions: [
    {
        "title": "¿Qué es el control de versiones y cuál es la arquitectura interna de Git (DAG y objetos inmutables)?",
        "response": "Un **Sistema de Control de Versiones (VCS)** gestiona la evolución del código fuente a lo largo del tiempo, permitiendo trazabilidad histórica, experimentación en ramas y colaboración multi-desarrollador sin sobreescrituras destructivas.\n\nA diferencia de los sistemas centralizados heredados (SVN, CVS) que almacenan diferencias delta entre archivos sobre un servidor central, **Git es un sistema distribuido direccionable por contenido** estructurado sobre un **Grafo Acíclico Dirigido (DAG - Directed Acyclic Graph)**:\n\n1. **Cada cliente posee un clon completo**: Todo desarrollador tiene una copia íntegra de la base de datos de objetos y del historial en su máquina local (`.git/`).\n2. **Los 4 Objetos Fundamentales de Git** (guardados bajo `.git/objects/` e identificados por un hash SHA-1 o SHA-256):\n   - **Blob (Binary Large Object)**: Almacena únicamente el contenido en bruto de un archivo comprimido con zlib (sin metadatos de permisos ni nombre).\n   - **Tree**: Representa un directorio del sistema de archivos. Contiene una lista de punteros a blobs (con sus nombres y permisos Unix `100644` / `100755`) y a otros sub-trees.\n   - **Commit**: Apunta al Tree raíz del proyecto en ese instante, enlaza a su(s) commit(s) padre(s), y registra autor, committer, fecha y mensaje.\n   - **Annotated Tag**: Puntero inmutable a un commit con mensaje, fecha y firma criptográfica GPG opcional.",
        "codeExample": {
            "language": "bash",
            "code": "# Inspección forense de la base de datos de objetos de Git\n\n# 1. Ver el tipo de objeto al que apunta un commit (HEAD)\ngit cat-file -t HEAD\n# Output: commit\n\n# 2. Inspeccionar el contenido en bruto del commit\ngit cat-file -p HEAD\n# Output típico:\n# tree 4b825dc642cb6eb9a060e54bf8d69288fbee4904\n# parent e1f20a91283c038374d6e64c398328c0b299e123\n# author Diego Villa <diego@dev.com> 1726435200 +0200\n# committer Diego Villa <diego@dev.com> 1726435200 +0200\n#\n# feat: inicializar arquitectura de módulos\n\n# 3. Inspeccionar el objeto Tree raíz para ver la estructura de archivos\ngit cat-file -p 4b825dc642cb6eb9a060e54bf8d69288fbee4904\n# Output:\n# 100644 blob a94a8fe5ccb19ba61c4c0873d391e987982fbbd3    package.json\n# 040000 tree d832910e529a7fed7693003058863f684cf05c31    src"
        },
        "visualDiagram": {
            "id": "diag-git-01",
            "title": "Arquitectura Interna de Git: El Grafo DAG y Objetos Inmutables",
            "caption": "Git es una base de datos clave-valor donde el hash SHA es la clave inmutable que conecta Commits, Trees y Blobs en un Grafo Acíclico Dirigido.",
            "diagramType": "git-dag-object-model"
        },
        "interviewTips": {
            "whatInterviewersWant": "Demostrar que entiendes que Git no guarda diffs parche tras parche, sino snapshots completos indexados por contenido criptográfico, y saber explicar la relación entre Blob, Tree y Commit.",
            "commonPitfalls": [
                "Afirmar erróneamente que Git guarda los archivos como diferencias línea por línea (SVN hace eso; Git almacena árboles de snapshots completos comprimidos).",
                "No saber explicar qué contiene la carpeta `.git`."
            ]
        },
        "quiz": {
            "question": "¿Cuál de los cuatro objetos fundamentales de Git almacena exclusivamente el contenido binario de un archivo sin guardar su nombre ni permisos?",
            "options": [
                "Tree",
                "Blob",
                "Commit",
                "Tag"
            ],
            "correctIndex": 1,
            "explanation": "El Blob solo almacena el contenido binario zlib. El nombre del archivo y sus permisos de ejecución residen en el objeto Tree que lo contiene."
        },
        "level": "basico"
    },
    {
        "title": "¿Cuáles son las 3 Áreas de Git (Working Directory, Staging Area, Repository) y cómo transitan los archivos?",
        "response": "Git organiza el ciclo de vida de los cambios alrededor de **tres árboles lógicos de trabajo** (más el repositorio remoto):\n\n1. **Working Directory (Directorio de Trabajo)**: Es la copia del proyecto en el disco local que puedes ver y editar con tu IDE. Los archivos aquí pueden estar en estado *Untracked* (nuevos no rastreados) o *Modified* (archivos seguidos con modificaciones respecto al último commit).\n2. **Staging Area / Index (Área de Preparación)**: Es un archivo binario simple y de altísimo rendimiento ubicado en `.git/index`. Actúa como la 'mesa de trabajo' donde se previsualiza y compone con precisión quirúrgica el próximo snapshot antes de confirmarlo.\n3. **Git Repository (Base de Datos Local / HEAD)**: La base de datos permanente de objetos inmutables bajo `.git/objects`. Cuando se ejecuta `git commit`, el contenido exacto del Index se empaqueta en un Tree y un Commit inmutable, y el puntero de la rama actual se mueve hacia él.\n\n**Transición de Comandos**:\n- `Working Directory` ➔ `Index`: `git add <file>` (o de forma granular interactiva con `git add -p`).\n- `Index` ➔ `Working Directory`: `git restore --staged <file>`. \n- `Index` ➔ `Repository`: `git commit -m '...'`.\n- Descartar modificaciones locales sin tocar el Index: `git restore <file>`.",
        "codeExample": {
            "language": "bash",
            "code": "# Flujo de trabajo profesional entre las 3 áreas de Git\n\n# 1. Verificar estado actual de las 3 áreas\ngit status -s\n#  M src/components/Button.tsx (Modificado solo en Working Tree)\n# ?? src/utils/math.ts         (Untracked nuevo en Working Tree)\n\n# 2. Preparar selectivamente solo líneas específicas (Staging granular)\ngit add -p src/components/Button.tsx\n# Permite elegir bloques (hunks: y/n/s/e) para commits atómicos\n\n# 3. Inspeccionar las diferencias preparadas en el Staging Area frente a HEAD\ngit diff --staged\n\n# 4. Confirmar el snapshot preparado en el repositorio local\ngit commit -m \"feat(ui): añadir variante outline al botón\"\n\n# 5. Si necesitas sacar un archivo del Staging Area sin perder tus cambios locales\ngit restore --staged src/components/Button.tsx"
        },
        "visualDiagram": {
            "id": "diag-git-02",
            "title": "Las 3 Áreas de Git: Working Directory ➔ Staging Area (Index) ➔ Repository",
            "caption": "El Staging Area (Index) permite desacoplar los cambios brutos en disco de la composición atómica del próximo commit.",
            "diagramType": "git-three-trees-staging"
        },
        "interviewTips": {
            "whatInterviewersWant": "Saber explicar por qué existe el Staging Area en Git y cómo permite hacer commits atómicos y limpios utilizando herramientas como `git add -p` en vez del antipatrón `git add .`.",
            "commonPitfalls": [
                "Creer que `git commit -a` es una buena práctica cotidiana (elimina el beneficio de revisar qué se está subiendo y empaqueta cambios no deseados).",
                "No distinguir entre `git diff` (compara Working Tree contra Index) y `git diff --staged` (compara Index contra el último commit de HEAD)."
            ]
        },
        "quiz": {
            "question": "¿Qué comando permite inspeccionar exclusivamente las modificaciones preparadas en el Staging Area frente al último commit confirmado en HEAD?",
            "options": [
                "git diff",
                "git diff --staged (o git diff --cached)",
                "git log -p",
                "git status --all"
            ],
            "correctIndex": 1,
            "explanation": "'git diff --staged' (o '--cached') compara el Staging Area contra HEAD; mientras que 'git diff' a secas compara el Working Tree no preparado contra el Staging Area."
        },
        "level": "basico"
    },
    {
        "title": "¿Qué es un Commit en Git, qué metadatos contiene y cómo funciona el hashing SHA-1 / SHA-256?",
        "response": "Un **Commit** en Git no es una lista de líneas añadidas o borradas, sino una **instantánea fotográfica completa (Snapshot)** del proyecto en un instante de tiempo.\n\nUn commit contiene exactamente 5 metadatos estructurados:\n1. **Tree Pointer**: Un hash que apunta al directorio raíz del proyecto para esa versión exacta.\n2. **Parent Pointer(s)**: El hash del commit inmediatamente anterior en el historial (los commits normales tienen 1 padre; los merge commits tienen 2 o más; el commit inicial tiene 0).\n3. **Autor**: Nombre, correo electrónico y marca temporal (*timestamp*) de cuándo se escribió el código original.\n4. **Committer**: Nombre, correo electrónico y *timestamp* de cuándo y quién confirmó o aplicó el commit al repositorio (puede diferir del autor en rebase o cherry-pick).\n5. **Commit Message**: Texto descriptivo del cambio.\n\n**Inmutabilidad por Hashing Criptográfico**:\nEl identificador del commit (tradicionalmente un hash SHA-1 de 40 caracteres hexadecimales, actualmente migrando a SHA-256) se calcula computando el resumen criptográfico de toda esta información concatenada. Si alteras un solo carácter del código, la fecha o el commit padre, **su hash cambia completamente**, impidiendo alterar el pasado sin romper la cadena histórica.",
        "codeExample": {
            "language": "bash",
            "code": "# Creación y firma criptográfica de un commit\n\n# 1. Commit convencional firmado con clave GPG o SSH\ngit commit -S -m \"feat(auth): implementar autenticación biométrica WebAuthn\"\n\n# 2. Verificación de la firma criptográfica y metadatos completos\ngit log -1 --show-signature\n# Output:\n# gpg: Signature made Tue Sep 15 2026 by Key ID 9B72C8D...\n# gpg: Good signature from \"Diego Villa <diego@dev.com>\"\n# commit 7f8a9b2c3d4e5f601726435200abcdeffedcba12\n# Author:     Diego Villa <diego@dev.com>\n# AuthorDate: Tue Sep 15 22:30:00 2026 +0200\n# Commit:     Diego Villa <diego@dev.com>\n# CommitDate: Tue Sep 15 22:30:00 2026 +0200\n\n# 3. Corregir el último commit local sin crear uno nuevo (reescribe el SHA)\ngit commit --amend --no-edit"
        },
        "visualDiagram": {
            "id": "diag-git-03",
            "title": "Anatomía de un Commit: Inmutabilidad Criptográfica SHA-1 / SHA-256",
            "caption": "El hash del commit se calcula sobre el árbol raíz, los padres, autor, fecha y mensaje. La alteración de cualquier byte altera irreversiblemente el hash.",
            "diagramType": "git-commit-anatomy-hash"
        },
        "interviewTips": {
            "whatInterviewersWant": "Comprender la diferencia entre Autor (quien concibió el cambio) y Committer (quien lo integró), la firma GPG en repositorios corporativos y por qué en Git los commits son inmutables.",
            "commonPitfalls": [
                "Creer que `git commit --amend` modifica el commit existente (en realidad crea un commit completamente nuevo con otro hash y abandona el anterior a merced del garbage collector).",
                "Pensar que Git guarda diferencias incrementales (diffs) en lugar de un puntero a un árbol completo de snapshots."
            ]
        },
        "quiz": {
            "question": "¿Qué sucede internamente en Git cuando ejecutas 'git commit --amend' para cambiar el mensaje de tu último commit?",
            "options": [
                "Modifica el archivo del commit existente en su lugar sin cambiar el hash SHA",
                "Crea un objeto Commit completamente nuevo con un nuevo hash SHA y mueve el puntero de la rama hacia él, dejando el commit viejo huérfano",
                "Borra el repositorio local y lo vuelve a clonar desde el servidor",
                "Obliga a recrear todos los blobs del proyecto desde cero"
            ],
            "correctIndex": 1,
            "explanation": "Debido a que los hashes criptográficos garantizan inmutabilidad, cualquier cambio en metadatos o mensaje produce un nuevo commit con un hash diferente."
        },
        "level": "basico"
    },
    {
        "title": "¿Qué es una Rama (Branch) en Git, cómo funciona el puntero HEAD y qué es el estado Detached HEAD?",
        "response": "En Git, una **Rama (Branch)** no es una carpeta copiada en disco ni un contenedor pesado; es simplemente **un archivo de texto plano de 41 bytes que contiene el hash SHA de un commit** ubicado en `.git/refs/heads/<branch-name>`.\n\n**El puntero HEAD**:\nEs una referencia especial ubicada en `.git/HEAD` que le dice a Git sobre qué rama o commit estás posicionado actualmente en tu Working Tree. En condiciones normales, `HEAD` apunta a una rama (ej. `ref: refs/heads/main`), y a su vez la rama apunta al último commit.\n\n**El Estado 'Detached HEAD' (HEAD Desacoplado)**:\n- Ocurre cuando haces checkout directamente a un commit específico, un tag o una rama remota en lugar de una rama local (`git checkout <commit-hash>`).\n- En este estado, `HEAD` apunta directamente al commit y no a un puntero de rama.\n- **Peligro**: Si creas commits en Detached HEAD y luego cambias de rama (`git checkout main`), esos nuevos commits quedan **huérfanos** (sin ninguna rama que los referencie) y el recolector de basura de Git (*Garbage Collector*) los destruirá con el tiempo. Para salvarlos, debes crear una rama antes de moverte: `git switch -c rescue-branch`.",
        "codeExample": {
            "language": "bash",
            "code": "# Gestión moderna de ramas con 'git switch' (Git 2.23+)\n\n# 1. Ver qué contiene el archivo HEAD internamente\ncat .git/HEAD\n# Output normal: ref: refs/heads/main\n\n# 2. Crear y saltar a una nueva rama de feature de forma atómica\ngit switch -c feat/dark-mode\n\n# 3. Navegar a un commit pasado (provoca Detached HEAD)\ngit checkout 8c12a7f\n# Warning: You are in 'detached HEAD' state...\ncat .git/HEAD\n# Output en Detached HEAD: 8c12a7f928c0b299e1234b825dc642cb6eb9a060\n\n# 4. Salvar commits realizados en estado Detached HEAD antes de perderlos\ngit switch -c feature-rescatada"
        },
        "visualDiagram": {
            "id": "diag-git-04",
            "title": "Ramas como Punteros Ligeros & El Estado HEAD",
            "caption": "Las ramas son punteros móviles ultra livianos. HEAD apunta a la rama activa, salvo en 'Detached HEAD' donde apunta directo a un commit.",
            "diagramType": "git-branching-head-pointer"
        },
        "interviewTips": {
            "whatInterviewersWant": "Distinguir entre comandos modernos (`git switch`, `git restore`) y el sobrecargado comando legado `git checkout`, y saber explicar con seguridad qué es el estado Detached HEAD y cómo solucionarlo.",
            "commonPitfalls": [
                "Creer que crear una rama duplica los archivos del proyecto (solo crea un puntero de texto de 41 bytes, haciéndolo instantáneo O(1)).",
                "Entrar en pánico ante un Detached HEAD en lugar de crear una rama a partir de ese estado con `git switch -c <name>`."
            ]
        },
        "quiz": {
            "question": "¿Qué ocurre si realizas 3 commits en estado 'Detached HEAD' y luego ejecutas 'git checkout main' sin haber creado una rama previa?",
            "options": [
                "Los commits se integran automáticamente en la rama main",
                "Los commits quedan huérfanos sin ninguna rama que los referencie y quedarán expuestos a eliminación por el garbage collector (a menos que uses git reflog)",
                "Git rechaza el comando checkout y genera un error fatal",
                "Se crea un merge commit en segundo plano"
            ],
            "correctIndex": 1,
            "explanation": "Al salir de Detached HEAD sin crear una rama, esos commits no tienen punteros de referencia y se convierten en objetos inalcanzables que solo se pueden recuperar vía reflog."
        },
        "level": "basico"
    },
    {
        "title": "¿Qué es y cómo se configura estratégicamente el archivo .gitignore, .gitattributes y Git LFS?",
        "response": "La gobernanza y sanidad de un repositorio profesional se sustenta en tres archivos de control en la raíz:\n\n1. **`.gitignore`**: Especifica patrones glob de archivos y carpetas que Git debe ignorar deliberadamente. Debe excluir:\n   - Dependencias de terceros (`node_modules/`, `vendor/`).\n   - Artefactos compilados y temporales (`dist/`, `.next/`, `coverage/`).\n   - Secretos y variables de entorno sensibles (`.env`, `.env.local`, `*.pem`).\n   - Basura del sistema operativo (`.DS_Store`, `Thumbs.db`).\n\n2. **`.gitattributes` (Normalización Multiplataforma)**:\n   - Controla finales de línea (LF en Unix/Mac vs CRLF en Windows). El clásico error en Windows de commitear CRLF causa diffs masivos de archivo completo en servidores Linux en CI.\n   - Configurar `* text=auto eol=lf` garantiza que todos los archivos de texto se normalicen a LF en el repositorio.\n\n3. **Git LFS (Large File Storage)**:\n   - Git no está diseñado para versionar binarios pesados (videos, modelos 3D, datasets de 100MB). Cada modificación de 1 byte duplicaría el archivo completo en `.git/objects` inflando el repositorio a gigabytes.\n   - Git LFS intercepta el archivo y lo reemplaza en el repo por un **puntero de texto de 100 bytes**, almacenando el binario real en un bucket de almacenamiento en la nube (S3).",
        "codeExample": {
            "language": "bash",
            "code": "# Configuración profesional de .gitattributes y Git LFS\n\n# Contenido recomendado para .gitattributes en la raíz:\n# -----------------------------------------------------\n# 1. Forzar normalización de saltos de línea a LF\n# * text=auto eol=lf\n# *.bat text eol=crlf\n#\n# 2. Evitar diffs gigantescos en binarios o bundles generados\n# *.min.js -diff\n# *.svg -diff\n\n# Instalación e inicialización de Git LFS para assets multimedia\ngit lfs install\n\n# Rastrear archivos de video y modelos pesados con LFS\ngit lfs track \"*.mp4\"\ngit lfs track \"*.glb\"\ngit add .gitattributes\ngit commit -m \"chore: configurar git lfs para assets pesados\""
        },
        "visualDiagram": {
            "id": "diag-git-05",
            "title": "Gobernanza de Repositorio: .gitignore, .gitattributes & Git LFS",
            "caption": ".gitignore previene la fuga de secretos, .gitattributes unifica finales de línea LF y Git LFS delega binarios a almacenamiento externo.",
            "diagramType": "git-ignore-attributes-lfs"
        },
        "interviewTips": {
            "whatInterviewersWant": "Conocimiento sobre seguridad (no commitear `.env`), resolución del conflicto histórico LF vs CRLF entre desarrolladores de Windows y macOS, y cómo evitar que un repo pese 5 GB mediante Git LFS.",
            "commonPitfalls": [
                "Añadir un archivo al `.gitignore` DESPUÉS de haberlo commiteado (si ya está en el index, .gitignore no lo ignora; se requiere `git rm --cached <file>`).",
                "Olvidar configurar `.gitattributes` en equipos con desarrolladores en Windows, rompiendo los chequeos de Prettier/ESLint en pipelines de CI."
            ]
        },
        "quiz": {
            "question": "Si un archivo secreto '.env' fue commiteado por error en el historial y luego se agrega '.env' a '.gitignore', ¿qué sucede?",
            "options": [
                "Git borra automáticamente el archivo de todos los commits pasados",
                "Git continuará rastreando el archivo .env porque ya existe en el Index; es necesario ejecutar 'git rm --cached .env' para desindexarlo",
                "El comando 'git push' queda bloqueado permanentemente",
                "El archivo se encripta automáticamente con GPG"
            ],
            "correctIndex": 1,
            "explanation": "'.gitignore' solo impide que se añadan archivos no rastreados. Si un archivo ya está bajo control de versiones, debe removerse del tracking con 'git rm --cached'."
        },
        "level": "basico"
    },
    {
        "title": "¿Qué diferencia fundamental hay entre 'git fetch', 'git pull' y 'git pull --rebase'?",
        "response": "La comunicación con el repositorio remoto involucra ramas de seguimiento (*remote-tracking branches* como `origin/main`):\n\n1. **`git fetch` (Descarga Segura Sin Fusión)**:\n   - Consulta el remoto y descarga todos los commits, ramas y tags nuevos hacia tu base de datos local en `refs/remotes/origin/*`.\n   - **NO toca tu Working Directory ni tu rama local activa**.\n   - Te permite inspeccionar los cambios del equipo con `git log HEAD..origin/main` o `git diff` antes de decidir integrarlos.\n\n2. **`git pull` (Fetch + Merge Implícito)**:\n   - Ejecuta `git fetch` y acto seguido realiza un `git merge origin/main` en tu rama actual.\n   - **Problema**: Si tú y un compañero hicieron commits divergentes, genera automáticamente un molesto y sucio **Merge Commit** (*«Merge branch 'main' of github.com...»*), contaminando el historial con bifurcaciones innecesarias.\n\n3. **`git pull --rebase` (Fetch + Rebase - Estándar Profesional)**:\n   - Ejecuta `git fetch` y luego trasplanta tus commits locales pendientes encima de los últimos commits descargados del remoto.\n   - Mantiene el historial de commits **100% lineal y limpio** sin merge commits superfluos.",
        "codeExample": {
            "language": "bash",
            "code": "# Configuración y uso profesional de fetch y pull\n\n# 1. Flujo recomendado: Inspeccionar antes de integrar\ngit fetch origin\n# Ver qué commits entraron sin alterar tu código\ngit log HEAD..origin/main --oneline\n# Ver los cambios exactos de código\ngit diff HEAD..origin/main\n\n# 2. Integrar limpiamente aplicando rebase\ngit pull --rebase origin main\n\n# 3. Configurar Git globalmente para que siempre haga rebase en pull por defecto\ngit config --global pull.rebase true\n# Configurar para que rechace pull si requiere merge no lineal\ngit config --global pull.ff only"
        },
        "visualDiagram": {
            "id": "diag-git-06",
            "title": "Diferencia Crítica: git fetch vs git pull",
            "caption": "git fetch descarga objetos a remote-tracking branches sin tocar archivos locales; git pull fuerza una integración inmediata en el working tree.",
            "diagramType": "git-fetch-vs-pull-flow"
        },
        "interviewTips": {
            "whatInterviewersWant": "Demostrar que comprendes por qué `git pull` a secas es una mala práctica común en equipos juniors y por qué se prefiere configurar `pull.rebase true` para preservar un historial lineal.",
            "commonPitfalls": [
                "Hacer `git pull` a ciegas y resolver conflictos de merge commit sorpresa sin saber qué código entró del remoto.",
                "Confundir `origin/main` (rama de tracking remota en tu disco) con `main` en el servidor de GitHub."
            ]
        },
        "quiz": {
            "question": "¿Por qué los equipos de desarrollo senior configuran 'git config --global pull.rebase true' en lugar del comportamiento por defecto de git pull?",
            "options": [
                "Porque reduce a la mitad el tamaño del bundle de JavaScript en producción",
                "Porque evita la generación constante de merge commits accidentales cuando existen commits divergentes, manteniendo el historial limpio y lineal",
                "Porque bloquea el acceso de usuarios no autorizados al repositorio",
                "Porque elimina la necesidad de ejecutar 'git push'"
            ],
            "correctIndex": 1,
            "explanation": "Por defecto, 'git pull' ejecuta un merge no fast-forward creando un merge commit superfluo cada vez que el remoto tiene novedades, ensuciando la trazabilidad del log."
        },
        "level": "medio"
    },
    {
        "title": "¿Qué diferencia hay entre 'git merge' y 'git rebase', y cuál es la Regla de Oro?",
        "response": "Ambos comandos integran cambios de una rama a otra, pero con filosofías e impactos estructurales opuestos en el grafo DAG:\n\n1. **`git merge` (Preservación del Historial No Lineal)**:\n   - Une dos ramas creando un **Merge Commit de 3 vías** con 2 padres.\n   - **Ventaja**: Preserva el contexto cronológico exacto de cuándo y cómo se desarrolló la rama.\n   - **Desventaja**: El historial visual se vuelve caótico (*«trenzas de metro»*) con decenas de ramas paralelas y merge commits repetitivos.\n\n2. **`git rebase` (Reescritura de Historial Lineal)**:\n   - Toma los commits de tu rama actual y los trasplanta uno a uno en la punta de la rama destino.\n   - **Ventaja**: El historial queda en una línea perfectamente recta, facilitando búsquedas con `git bisect` y auditorías de código limpias.\n   - **Desventaja**: Al trasplantar los commits, **cambia sus hashes SHA**, reescribiendo la historia.\n\n**LA REGLA DE ORO DEL REBASE**:\n> *«NUNCA hagas rebase sobre una rama pública o compartida con otros desarrolladores (como main o staging).»*\n\nSi reescribes los hashes de una rama donde otros compañeros ya están trabajando, sus ramas divergirán, obligándolos a resolver conflictos cíclicos y forzar pushes destructivos (`--force`).",
        "codeExample": {
            "language": "bash",
            "code": "# Comparativa práctica de merge vs rebase\n\n# Estrategia 1: Actualizar tu rama de feature con respecto a main usando REBASE\ngit switch feat/carrito\ngit fetch origin\ngit rebase origin/main\n# Tus commits de feature ahora se aplican encima de lo último de main\n\n# Si surgen conflictos durante el rebase:\n# 1. Resolver conflicto en el archivo\ngit add src/cart.ts\n# 2. Continuar el trasplante del siguiente commit\ngit rebase --continue\n# Si deseas cancelar y volver al estado intacto anterior:\ngit rebase --abort\n\n# Estrategia 2: Integrar a main con Pull Request (Squash and Merge)\n# En GitHub/GitLab: Se hace squash en un único commit atómico hacia main."
        },
        "visualDiagram": {
            "id": "diag-git-07",
            "title": "Integración de Código: git merge vs git rebase",
            "caption": "git merge conserva la historia completa con merge commits; git rebase reescribe los hashes para generar una línea temporal limpia y recta.",
            "diagramType": "git-merge-vs-rebase-dag"
        },
        "interviewTips": {
            "whatInterviewersWant": "Comprensión de los tradeoffs: merge preserva la verdad histórica a costa de legibilidad; rebase ofrece legibilidad prístina pero reescribe hashes. Saber enunciar con firmeza la Regla de Oro.",
            "commonPitfalls": [
                "Rebasear ramas públicas compartidas y forzar `push -f` rompiendo el trabajo de los compañeros.",
                "Usar `git push -f` en lugar del comando más seguro `git push --force-with-lease`."
            ]
        },
        "quiz": {
            "question": "¿Cuál es la 'Regla de Oro' indiscutible respecto al uso de 'git rebase' en equipos de software?",
            "options": [
                "Nunca hacer rebase si el proyecto tiene más de 100 archivos TypeScript",
                "Nunca hacer rebase sobre ramas públicas o compartidas con otros desarrolladores (como main o develop)",
                "Solo se puede hacer rebase en días viernes antes del despliegue",
                "El rebase solo está permitido si se utiliza la interfaz gráfica de VS Code"
            ],
            "correctIndex": 1,
            "explanation": "El rebase recalcula nuevos hashes para cada commit. Si se aplica sobre una rama pública compartida, corrompe el historial de los demás integrantes del equipo."
        },
        "level": "medio"
    },
    {
        "title": "¿Qué es 'git stash', cómo opera su pila interna (LIFO) y qué comandos avanzados ofrece?",
        "response": "**`git stash`** es el mecanismo que permite guardar temporalmente el estado modificado de tu Working Directory y del Staging Area en un espacio de almacenamiento temporal sin necesidad de crear un commit preliminar o roto (*WIP commit*).\n\nInternamente, el stash se almacena en una **pila LIFO (Last-In, First-Out)** bajo `refs/stash`, donde la entrada más reciente siempre es `stash@{0}` y las anteriores se desplazan a `stash@{1}`, `stash@{2}`, etc.\n\n**Comandos y Flags Esenciales para Staff Engineers**:\n- `git stash push -u -m 'mensaje'`: Guarda incluyendo archivos *untracked* nuevos (`-u` o `--include-untracked`) y añade un mensaje descriptivo para no olvidar qué contenía.\n- `git stash list`: Lista todas las instantáneas guardadas en la pila.\n- `git stash show -p stash@{0}`: Inspecciona el diff exacto del stash sin aplicarlo.\n- `git stash pop`: Aplica los cambios de `stash@{0}` y **lo elimina** de la pila.\n- `git stash apply`: Aplica los cambios pero **lo conserva** en la pila (ideal si quieres probarlo en múltiples ramas).\n- `git stash branch <nueva-rama>`: Crea una nueva rama a partir del commit donde se creó el stash y le aplica los cambios, evitando conflictos si la rama original cambió drásticamente.",
        "codeExample": {
            "language": "bash",
            "code": "# Flujo avanzado con la pila de git stash\n\n# 1. Guardar cambios en curso con archivos nuevos y mensaje explícito\ngit stash push -u -m \"WIP: migración de endpoints a TanStack Query\"\n\n# 2. El Working Tree queda limpio para atender un hotfix urgente\ngit switch hotfix/security-patch\n# ... corregir hotfix, testear y commitear ...\n\n# 3. Regresar a la rama de trabajo\ngit switch feat/tanstack-query\n\n# 4. Inspeccionar la pila de stashes acumulados\ngit stash list\n# Output:\n# stash@{0}: On feat/tanstack-query: WIP: migración de endpoints a TanStack Query\n# stash@{1}: On main: WIP checkout layout\n\n# 5. Restaurar los cambios y limpiar la pila de forma segura\ngit stash pop stash@{0}"
        },
        "visualDiagram": {
            "id": "diag-git-08",
            "title": "Arquitectura de git stash: Pila LIFO de Trabajo en Progreso (WIP)",
            "caption": "git stash almacena cambios sucios de index y worktree en una estructura LIFO en refs/stash, recuperables con pop o apply.",
            "diagramType": "git-stash-stack-architecture"
        },
        "interviewTips": {
            "whatInterviewersWant": "Dominio de los flags avanzados (`-u` para incluir archivos untracked, mensaje descriptivo con `-m`) y la diferencia entre `stash pop` (aplica y destruye) y `stash apply` (aplica y preserva).",
            "commonPitfalls": [
                "Hacer `git stash` y sorprenderse de que los archivos nuevos creados sigan en el Working Tree (por defecto git stash NO guarda archivos untracked a menos que pases `-u`).",
                "Acumular 30 stashes sin nombre durante meses y perder el rastro de qué contenía cada uno."
            ]
        },
        "quiz": {
            "question": "¿Por qué es crucial añadir el flag '-u' (--include-untracked) al ejecutar 'git stash push'?",
            "options": [
                "Para forzar la subida inmediata de los cambios al servidor remoto",
                "Porque por defecto git stash ignora los archivos nuevos recién creados que aún no han sido rastreados, dejándolos expuestos en el working directory",
                "Para encriptar el stash con contraseña",
                "Para evitar conflictos de merge automáticamente"
            ],
            "correctIndex": 1,
            "explanation": "Sin el flag '-u', los archivos nuevos recién creados en el proyecto no son guardados en el stash y permanecen en el Working Tree."
        },
        "level": "medio"
    },
    {
        "title": "¿Qué diferencia hay entre 'git reset' (--soft, --mixed, --hard) y 'git revert'?",
        "response": "Ambos comandos sirven para deshacer cambios, pero actúan de forma radicalmente distinta en el grafo DAG y la seguridad del historial:\n\n1. **`git reset` (Rebobina el Puntero de la Rama Hacia Atrás)**:\n   Mueve el puntero de la rama actual a un commit anterior en el tiempo. Existen 3 modos según cómo maneja el Staging Area y el Working Directory:\n   - **`--soft`**: Mueve el puntero de la rama. Deja todos los cambios de los commits cancelados en el **Staging Area** (listos para volver a commitear en un solo commit).\n   - **`--mixed` (por defecto)**: Mueve la rama y vacía el Staging Area. Deja los cambios intactos en tu **Working Directory** (como modificaciones no preparadas).\n   - **`--hard`**: Mueve la rama, limpia el Staging Area y **borra irreversiblemente** todos los cambios de tu Working Directory al estado exacto del commit destino.\n\n2. **`git revert` (Crea un Nuevo Commit Hacia Adelante)**:\n   - No toca el puntero de la rama ni reescribe commits anteriores.\n   - Calcula la operación matemática inversa de los cambios introducidos por el commit indicado y genera un **nuevo commit seguro** en la punta del árbol (*«Revert 'feat: checkout'»*).\n   - **Es la única forma segura de revertir cambios en ramas compartidas o producción**.",
        "codeExample": {
            "language": "bash",
            "code": "# Escenarios reales de reset vs revert\n\n# Escenario A: Cometiste un error en tu máquina local y aún NO hiciste push\n# Deshacer el último commit pero conservar el código preparado en stage:\ngit reset --soft HEAD~1\n\n# Deshacer el commit y descartar todo cambio local en disco (peligroso):\ngit reset --hard HEAD~1\n\n# Escenario B: El código ya fue subido al servidor remoto / rama main\n# Revertir de forma limpia y transparente sin alterar la historia de tus colegas:\ngit revert 7f8a9b2\n# Abre el editor para confirmar el mensaje 'Revert \"feat(auth): ...\"'\n# Se sube con un simple push normal sin forzar flags:\ngit push origin main"
        },
        "visualDiagram": {
            "id": "diag-git-09",
            "title": "Deshacer Cambios: git reset vs git revert",
            "caption": "git reset mueve HEAD hacia atrás reescribiendo la historia; git revert avanza hacia adelante creando un commit inverso seguro para ramas compartidas.",
            "diagramType": "git-reset-vs-revert-matrix"
        },
        "interviewTips": {
            "whatInterviewersWant": "Comprensión de los tres modos de reset (`--soft`, `--mixed`, `--hard`), saber cuándo usar cada uno y la regla de oro: nunca hacer `reset --hard` de commits compartidos en remoto (usar siempre `revert`).",
            "commonPitfalls": [
                "Usar `git reset --hard` para resolver un conflicto en producción y perder cambios no guardados.",
                "No saber cómo deshacer un commit conservando los cambios preparados (la respuesta correcta es `git reset --soft HEAD~1`)."
            ]
        },
        "quiz": {
            "question": "¿Cuál es el comando apropiado para deshacer el último commit local manteniendo todos sus cambios intactos dentro del Staging Area?",
            "options": [
                "git reset --hard HEAD~1",
                "git reset --soft HEAD~1",
                "git revert HEAD",
                "git checkout --all"
            ],
            "correctIndex": 1,
            "explanation": "'git reset --soft HEAD~1' mueve el puntero de la rama al commit anterior pero preserva todas las modificaciones en el Staging Area, ideal para reformular un commit."
        },
        "level": "medio"
    },
    {
        "title": "¿Qué es un Pull Request (PR), cómo funciona la gobernanza de Code Reviews y las Branch Protection Rules?",
        "response": "Un **Pull Request (PR)** o **Merge Request (MR)** no es una función nativa de Git puro, sino un mecanismo de colaboración y gobernanza introducido por plataformas como GitHub y GitLab para auditar el código antes de fusionarlo a ramas críticas.\n\n**Flujo de Gobernanza Empresarial**:\n1. **Branch Protection Rules (Reglas de Protección de Rama)**:\n   - Prohíben hacer `git push origin main` directo a cualquier usuario (incluso administradores).\n   - Exigen que todo cambio provenga obligatoriamente de un Pull Request con un historial lineal (*Require linear history*).\n2. **Status Checks Automatizados (CI Gates)**:\n   - El PR queda bloqueado si el pipeline de integración continua falla: linters (ESLint), compilación de tipos (`tsc`), suite de pruebas unitarias/E2E y análisis de vulnerabilidades de dependencias.\n3. **Peer Code Review Obligatorio**:\n   - Mínimo de 1 a 2 aprobaciones de otros desarrolladores calificados (o asignación por `CODEOWNERS`).\n   - Todos los hilos de conversación y sugerencias deben estar marcados como resueltos antes del merge.\n4. **Estrategia de Fusión en la Plataforma**:\n   - **Squash and Merge**: Combina todos los commits desordenados del PR en un único commit atómico limpio en `main`.\n   - **Rebase and Merge**: Aplica los commits de forma lineal sin merge commit.\n   - **Merge Commit (Create a merge commit)**: Crea un commit de 3 vías con 2 padres.",
        "codeExample": {
            "language": "bash",
            "code": "# Archivo .github/CODEOWNERS para asignación automática de revisores\n# -----------------------------------------------------------------\n# Cada cambio en el módulo de pagos requiere aprobación del equipo fintech\n# src/modules/payments/    @acme-corp/fintech-team\n#\n# Modificaciones en componentes core requieren aprobación de diseño/UI\n# src/components/          @acme-corp/design-system-core\n\n# Creación y gestión de PR desde la terminal con GitHub CLI (gh)\n# 1. Crear rama y abrir PR interactivo con template automático\ngh pr create --title \"feat(auth): soporte para OAuth2 PKCE\" \\\n             --body \"Resuelve issue #104. Incluye tests unitarios y validación a11y.\" \\\n             --base main \\\n             --reviewer diegovilla\n\n# 2. Consultar estado de los CI checks del PR actual\ngh pr checks\n\n# 3. Hacer squash and merge cuando todos los checks aprueben\ngh pr merge --squash --delete-branch"
        },
        "visualDiagram": {
            "id": "diag-git-10",
            "title": "Gobernanza de Pull Request & Reglas de Protección de Rama",
            "caption": "Las ramas principales protegidas exigen validación automatizada de CI, revisión por pares y resolución de comentarios antes del merge.",
            "diagramType": "git-pr-governance-pipeline"
        },
        "interviewTips": {
            "whatInterviewersWant": "Visión de madurez de ingeniería: cómo las Branch Protection Rules, CODEOWNERS y la estrategia de 'Squash and Merge' protegen la estabilidad de producción y el historial de la empresa.",
            "commonPitfalls": [
                "Abrir PRs monstruosos de 3.000 líneas de código que nadie puede revisar eficazmente (los PRs deben ser pequeños y atómicos, menores a 400 líneas).",
                "Permitir que desarrolladores hagan bypass de las reglas de protección sin auditoría."
            ]
        },
        "quiz": {
            "question": "¿Cuál es la principal ventaja de la estrategia 'Squash and Merge' al cerrar un Pull Request hacia la rama main?",
            "options": [
                "Borra automáticamente los tests unitarios para que la app pese menos",
                "Condensa todos los commits iterativos y de prueba del branch en un único commit atómico y limpio en main, manteniendo el historial de producción perfectamente legible",
                "Evita tener que ejecutar el pipeline de CI/CD",
                "Permite compilar el código TypeScript en lenguaje C++"
            ],
            "correctIndex": 1,
            "explanation": "'Squash and Merge' empaqueta todos los commits de trabajo en curso ('wip', 'typo', 'fix') en un solo commit semántico atómico, facilitando revertir cambios y auditar la historia."
        },
        "level": "medio"
    },
    {
        "title": "¿Qué es un Tag en Git, qué diferencia hay entre Lightweight y Annotated tags, y cómo se aplican a SemVer?",
        "response": "Un **Tag (Etiqueta)** en Git es una referencia estática permanente que marca un punto específico en el historial del DAG como relevante (habitualmente un despliegue a producción o lanzamiento de versión).\n\nA diferencia de una rama (que se mueve automáticamente con cada nuevo commit), **un tag nunca se mueve**.\n\n**Diferencias entre los dos tipos de Tags**:\n1. **Lightweight Tag (Etiqueta Ligera)**:\n   - Es simplemente un puntero estático directo al commit (similar a una rama que nunca avanza).\n   - Se crea con `git tag v1.0.0`.\n   - No contiene metadatos de autor, fecha ni mensaje propio.\n2. **Annotated Tag (Etiqueta Anotada - Estándar para Releases)**:\n   - Se almacena como un **objeto completo e inmutable** en la base de datos de Git (`.git/objects`).\n   - Contiene el nombre y correo del autor del tag, fecha de etiquetado, un mensaje descriptivo de release y soporte para **firma digital con clave GPG** (`-s`).\n   - Se crea con `git tag -a v1.0.0 -m 'Release inicial de producción'`.\n\n**Integración con Semantic Versioning 2.0.0 (SemVer)**:\nLos tags estructuran las versiones bajo el contrato `MAJOR.MINOR.PATCH` (ej. `v2.4.1`), permitiendo a herramientas de despliegue automatizado compilar changelogs y publicar paquetes en registros (npm, PyPI).",
        "codeExample": {
            "language": "bash",
            "code": "# Creación, firma y gestión de tags en producción\n\n# 1. Crear un Annotated Tag firmado criptográficamente con GPG\ngit tag -s v2.1.0 -m \"Release v2.1.0: Soporte para Web Components y Dark Mode\"\n\n# 2. Inspeccionar los metadatos y firma del tag anotado\ngit show v2.1.0\n# Output:\n# tag v2.1.0\n# Tagger: Diego Villa <diego@dev.com>\n# Date:   Tue Sep 15 2026\n# -----BEGIN PGP SIGNATURE-----\n# ...\n# commit 4b825dc... (commit al que apunta)\n\n# 3. Los tags NO se suben con 'git push' normal; se deben enviar explícitamente\ngit push origin v2.1.0\n# O subir todos los tags pendientes al remoto:\ngit push origin --tags"
        },
        "visualDiagram": {
            "id": "diag-git-11",
            "title": "Git Tags & Semantic Versioning 2.0.0 (SemVer)",
            "caption": "Los tags anotados son objetos inmutables con metadatos y firmas GPG; mapean lanzamientos siguiendo la especificación MAJOR.MINOR.PATCH.",
            "diagramType": "git-tags-semver-lifecycle"
        },
        "interviewTips": {
            "whatInterviewersWant": "Saber por qué en entornos de producción se exigen Annotated Tags firmados (`git tag -a -s`) en lugar de Lightweight tags, y recordar que `git push` no envía tags por defecto a menos que se especifique.",
            "commonPitfalls": [
                "Creer que `git push` envía los tags locales al remoto (si no pones `git push origin <tag>` o `--tags`, el tag se queda solo en tu máquina local).",
                "Usar tags ligeros para releases formales de producción."
            ]
        },
        "quiz": {
            "question": "¿Cuál es la diferencia fundamental entre un Lightweight Tag y un Annotated Tag en Git?",
            "options": [
                "Los lightweight tags solo funcionan en Linux",
                "Un Annotated Tag es un objeto inmutable completo en la base de datos de Git con autor, fecha, mensaje y firma GPG, mientras que un Lightweight Tag es solo un puntero directo sin metadatos",
                "Los annotated tags no permiten volver a descargar el código",
                "No hay diferencia, son alias del mismo comando"
            ],
            "correctIndex": 1,
            "explanation": "Los Annotated Tags son objetos formales de Git con autoría, fecha, mensaje y opción de verificación criptográfica GPG, indispensables para auditorías de release."
        },
        "level": "avanzado"
    },
    {
        "title": "¿Qué es 'git bisect' y cómo automatizar la detección de regresiones críticas en CI/CD con búsqueda binaria?",
        "response": "**`git bisect`** es una de las herramientas forenses más potentes de Git. Utiliza el algoritmo de **Búsqueda Binaria ($O(\\log N)$)** para encontrar con precisión quirúrgica el commit exacto que introdujo una regresión o bug en el código.\n\n**Cómo opera manualmente**:\n1. Inicias la sesión con `git bisect start`.\n2. Le indicas a Git un commit roto (generalmente el actual): `git bisect bad`.\n3. Le indicas un commit en el pasado donde el sistema funcionaba correctamente: `git bisect good v1.0.0`.\n4. Git calcula el punto medio exacto del historial y hace checkout automático allí.\n5. Pruebas la app: si el bug persiste marcas `git bisect bad`; si funciona marcas `git bisect good`.\n6. Git repite la partición a la mitad hasta aislar el commit culpable en un puñado de pasos.\n\n**Automatización Total con `git bisect run`**:\nEn lugar de probar a mano, puedes pasarle un script de prueba o comando de test (ej. `npm test` o un script en bash). Si el script devuelve código `0` es considerado 'good'; si devuelve `1` o más es considerado 'bad'. **Git probará cientos de commits de forma 100% desatendida en pocos segundos**.",
        "codeExample": {
            "language": "bash",
            "code": "# Búsqueda binaria automatizada de una regresión en 500 commits\n\n# 1. Iniciar bisect declarando extremos\ngit bisect start\ngit bisect bad HEAD              # En HEAD el login falla con 500\ngit bisect good v2.0.0           # En la versión v2.0.0 funcionaba perfecto\n# Git responde: Bisecting: 250 revisions left to test after this (roughly 8 steps)\n\n# 2. Automatizar la búsqueda con un script de test unitario\ngit bisect run pnpm test:auth\n\n# Git ejecutará 'pnpm test:auth' en cada commit del árbol binario.\n# En segundos arrojará el veredicto final:\n# -----------------------------------------------------------------\n# 8c12a7f928c0b299e1234b825dc642cb6eb9a060 is the first bad commit\n# Author: Dev Junior <junior@dev.com>\n# Date:   Mon Sep 14 2026\n#\n#     fix(cache): reducir TTL del token de sesión\n\n# 3. Finalizar y regresar a la rama original\ngit bisect reset"
        },
        "visualDiagram": {
            "id": "diag-git-12",
            "title": "git bisect: Depuración Forense con Búsqueda Binaria O(log N)",
            "caption": "Entre miles de commits, git bisect aísla el commit exacto que introdujo el bug en solo log2(N) pasos de verificación.",
            "diagramType": "git-bisect-binary-search"
        },
        "interviewTips": {
            "whatInterviewersWant": "Demostrar que conoces la existencia de `git bisect run <script>` para resolver bugs misteriosos en proyectos grandes sin perder días buscando a ciegas commit por commit.",
            "commonPitfalls": [
                "Hacer pruebas manuales lentas en vez de automatizar con `git bisect run`.",
                "Olvidar ejecutar `git bisect reset` al terminar, dejando el repositorio atascado en un commit intermedio en estado Detached HEAD."
            ]
        },
        "quiz": {
            "question": "Aproximadamente, ¿cuántas comprobaciones requiere 'git bisect' para localizar con certeza el commit que introdujo un bug en un historial de 1.024 commits?",
            "options": [
                "1.024 comprobaciones lineales",
                "Aproximadamente 10 comprobaciones (log2 de 1024)",
                "512 comprobaciones",
                "Solo 1 comprobación"
            ],
            "correctIndex": 1,
            "explanation": "Debido a la naturaleza matemática de la búsqueda binaria, log2(1024) = 10, requiriendo un máximo de 10 verificaciones para aislar el commit causante."
        },
        "level": "avanzado"
    },
    {
        "title": "¿Qué es 'git cherry-pick', cuándo debe usarse y cuáles son sus riesgos de duplicación de hashes?",
        "response": "**`git cherry-pick <commit-hash>`** permite seleccionar un commit específico de cualquier rama del repositorio y aplicar su diff exacto como un **nuevo commit en la rama actual**.\n\n**Casos de uso legítimos**:\n1. **Hotfix Urgente en Producción**: Se descubre un bug crítico en producción; un desarrollador ya lo corrigió en una rama de feature que contiene otros 20 commits inmaduros. Con cherry-pick extraes exclusivamente el commit del fix hacia `main` sin fusionar la rama incompleta.\n2. **Rescate de Trabajo Deseado**: Recuperar una funcionalidad concreta desarrollada en una rama experimental que finalmente fue descartada.\n\n**Riesgos y Por Qué Usarlo con Prudencia**:\n- **Duplicación de Código y Hashes**: Cherry-pick crea un **nuevo commit con un nuevo SHA**. Ahora el mismo cambio existe dos veces en el grafo DAG con diferentes identificadores.\n- Si posteriormente se fusiona la rama original con la rama destino, Git puede requerir resolver conflictos duplicados a menos que se use el flag `-x` (`git cherry-pick -x <hash>`), el cual añade en el mensaje de commit una referencia trazable al commit original (*«(cherry picked from commit ...)»*).",
        "codeExample": {
            "language": "bash",
            "code": "# Flujo quirúrgico de cherry-pick para hotfixes\n\n# 1. Localizar el hash del commit deseado en la rama de feature\ngit log feature/checkout --oneline -n 5\n# Output:\n# e4d3c2b feat: agregar animación a botón\n# a1b2c3d fix(payment): corregir validación de tarjeta de crédito (HOTFIX)\n# 9f8e7d6 feat: nuevo layout de checkout\n\n# 2. Moverse a la rama principal de producción\ngit switch main\n\n# 3. Aplicar exclusivamente el commit del hotfix con trazabilidad (-x)\ngit cherry-pick -x a1b2c3d\n\n# 4. Si surgen conflictos, resolverlos en el archivo y continuar\ngit add src/payment.ts\ngit cherry-pick --continue\n\n# 5. Subir el parche a producción de inmediato\ngit push origin main"
        },
        "visualDiagram": {
            "id": "diag-git-13",
            "title": "git cherry-pick: Trasplante Quirúrgico de Commits",
            "caption": "git cherry-pick aplica el diff de un único commit sobre otra rama sin fusionar el resto de cambios experimentales.",
            "diagramType": "git-cherry-pick-transplant"
        },
        "interviewTips": {
            "whatInterviewersWant": "Conocer los casos legítimos (hotfixes aislados) y los peligros (duplicidad de código y desincronización de DAGs), además del uso del flag `-x` para trazabilidad.",
            "commonPitfalls": [
                "Abusar de cherry-pick como sustituto sistemático de una buena estrategia de branching y merges.",
                "Hacer cherry-pick de 15 commits en fila en lugar de hacer rebase interactivo o merge parcial."
            ]
        },
        "quiz": {
            "question": "¿Cuál es la consecuencia directa de aplicar un commit mediante 'git cherry-pick <hash>' sobre otra rama?",
            "options": [
                "El commit original se elimina de la rama origen",
                "Se crea un nuevo commit con un hash SHA diferente en la rama destino que contiene el mismo cambio, duplicando conceptualmente el cambio en el DAG",
                "Ambas ramas quedan fusionadas permanentemente",
                "Se crea un tag automático en GitHub"
            ],
            "correctIndex": 1,
            "explanation": "Cherry-pick trasplanta el parche pero genera un nuevo commit con nuevo timestamp y nuevo hash, existiendo el mismo cambio bajo dos identificadores distintos."
        },
        "level": "avanzado"
    },
    {
        "title": "¿Qué es un Interactive Rebase ('git rebase -i') y cómo realizar squash, edit, reword y fixup antes de integrar?",
        "response": "El **Rebase Interactivo (`git rebase -i <base>`)** es la herramienta por excelencia para la **curaduría de historial**. Permite pausar el proceso de rebase para reordenar, fusionar, modificar o descartar commits antes de enviar un Pull Request al equipo.\n\nAl ejecutar `git rebase -i HEAD~4`, Git abre un editor de texto mostrando la lista cronológica de commits desde el más antiguo al más reciente con una serie de comandos disponibles:\n\n1. **`pick` (p)**: Conserva el commit tal como está.\n2. **`reword` (r)**: Mantiene el contenido del commit pero abre el editor para reescribir y mejorar su mensaje.\n3. **`edit` (e)**: Pausa el rebase inmediatamente después de aplicar este commit, permitiéndote añadir archivos, modificar código o dividirlo en varios commits con `git commit --amend`.\n4. **`squash` (s)**: Fusiona el commit en el commit inmediatamente anterior y abre el editor para combinar y redactar un único mensaje de commit conjunto.\n5. **`fixup` (f)**: Igual que `squash`, pero **descarta por completo el mensaje** del commit absorbido (ideal para commits tipo *«fix typo»* o *«console.log removido»*).\n6. **`drop` (d)**: Elimina el commit del historial por completo.",
        "codeExample": {
            "language": "bash",
            "code": "# Curaduría interactiva antes de abrir Pull Request\n\n# 1. Abrir los últimos 4 commits en modo interactivo\ngit rebase -i HEAD~4\n\n# El editor mostrará:\n# ---------------------------------------------------------\n# pick a1b2c3d feat(auth): implementar formulario de login\n# squash d4e5f6a fix typos en labels de inputs\n# fixup 7b8c9d0 limpiar imports no utilizados\n# reword 1a2b3c4 feat: anadir validacion de contrasenas\n#\n# Comandos: pick, reword, edit, squash, fixup, drop\n# ---------------------------------------------------------\n\n# 2. Al guardar y cerrar el editor, Git ejecutará las fusiones.\n# Si es tu rama privada y ya habías hecho push previo, actualiza con:\ngit push --force-with-lease origin feat/auth"
        },
        "visualDiagram": {
            "id": "diag-git-14",
            "title": "git rebase -i: Curaduría de Historial y Squash de Commits",
            "caption": "El rebase interactivo permite agrupar commits desordenados (squash/fixup) antes de compartirlos en un Pull Request.",
            "diagramType": "git-interactive-rebase-squash"
        },
        "interviewTips": {
            "whatInterviewersWant": "Destreza en la limpieza de ramas de feature antes de abrir un PR, conocimiento de los comandos `squash` vs `fixup` y el uso responsable de `git push --force-with-lease`.",
            "commonPitfalls": [
                "Confundir `squash` (combina mensajes) con `fixup` (descarta el mensaje secundario).",
                "Usar `git push --force` a secas (que puede pisar commits ajenos) en vez del seguro `--force-with-lease`."
            ]
        },
        "quiz": {
            "question": "En un 'git rebase -i', ¿cuál es la diferencia entre el comando 'squash' y el comando 'fixup'?",
            "options": [
                "'fixup' borra el código y 'squash' lo conserva",
                "Ambos combinan el commit en el anterior, pero 'squash' te pide editar y combinar los mensajes, mientras que 'fixup' descarta el mensaje del commit absorbido",
                "'squash' solo funciona en GitHub y 'fixup' en GitLab",
                "'fixup' requiere conexión a Internet obligatoria"
            ],
            "correctIndex": 1,
            "explanation": "'fixup' es ideal para commits menores de corrección rápida (typos, formato) ya que absorbe los cambios en el commit previo sin obligar a editar el texto."
        },
        "level": "avanzado"
    },
    {
        "title": "¿Qué estrategias de Branching existen (GitFlow vs GitHub Flow vs Trunk-Based Development) y cuál es el estándar de élite?",
        "response": "Una **Estrategia de Branching** define las reglas de colaboración y ciclo de vida de las ramas en un equipo de ingeniería:\n\n1. **GitFlow (Vincent Driessen, 2010)**:\n   - **Estructura**: Múltiples ramas de larga duración (`main`, `develop`, `feature/*`, `release/*`, `hotfix/*`).\n   - **Filosofía**: Diseñado para software empaquetado tradicional con ciclos de lanzamiento lentos y programados (mensuales/trimestrales).\n   - **Problema**: Ramas que viven semanas generan dolorosos *Merge Hells*; frena la integración continua y es considerado un antipatrón en empresas modernas.\n\n2. **GitHub Flow (Ligero y Web-first)**:\n   - **Estructura**: Una sola rama principal protegida (`main`) y ramas de feature cortas (`feat/*`).\n   - **Filosofía**: Se abre un Pull Request, pasa CI, se revisa por pares y se mergea directamente a `main` para despliegue inmediato.\n\n3. **Trunk-Based Development (TBD - El Estándar DORA de Alto Rendimiento)**:\n   - **Estructura**: Todos los ingenieros integran su código a la rama principal (`trunk` o `main`) con ramas efímeras que viven **menos de 1 o 2 días** (o incluso commiteando directo a main con pair programming).\n   - **Pilar Clave: Feature Flags (Toggles)**: ¿Cómo subir código incompleto a main sin romper producción? Ocultándolo tras un condicional de feature flag en tiempo de ejecución.\n   - **Métricas DORA**: TBD es el mayor predictor de alta frecuencia de despliegue y bajo tiempo de restauración ante fallos.",
        "codeExample": {
            "language": "typescript",
            "code": "// Patrón Trunk-Based Development: Feature Flags en Frontend\n// Permite mergear a 'main' diariamente aunque la función no esté terminada\n\ninterface FeatureFlagService {\n  isEnabled(flagKey: string, userId?: string): boolean;\n}\n\nexport const CheckoutModule: React.FC<{ flags: FeatureFlagService; userId: string }> = ({\n  flags,\n  userId,\n}) => {\n  // Feature Flag: El nuevo checkout vive en 'main' pero solo se activa a beta testers\n  const hasOneClickCheckout = flags.isEnabled('feat_one_click_checkout', userId);\n\n  if (hasOneClickCheckout) {\n    return <OneClickCheckoutComponent />; // Código nuevo en prueba continua\n  }\n\n  return <LegacyCheckoutComponent />;    // Flujo estable de producción garantizado\n};"
        },
        "visualDiagram": {
            "id": "diag-git-15",
            "title": "Estrategias de Branching: GitFlow vs Trunk-Based Development",
            "caption": "GitFlow utiliza ramas pesadas de larga duración; Trunk-Based Development promueve integración continua con ramas cortas y Feature Flags.",
            "diagramType": "git-branching-strategies-comparison"
        },
        "interviewTips": {
            "whatInterviewersWant": "Demostrar que sabes que la industria ha migrado de GitFlow hacia Trunk-Based Development para habilitar Continuous Delivery (DORA metrics) y cómo las Feature Flags resuelven el miedo a mergear a main.",
            "commonPitfalls": [
                "Defender GitFlow como la panacea para startups o SaaS que buscan desplegar 10 veces al día.",
                "No saber explicar la relación simbiótica entre Trunk-Based Development y las Feature Flags."
            ]
        },
        "quiz": {
            "question": "¿Cuál es la práctica arquitectónica indispensable en Trunk-Based Development que permite mergear código incompleto a 'main' sin poner en riesgo la estabilidad de producción?",
            "options": [
                "Crear ramas secundarias que duren más de 6 meses",
                "El uso de Feature Flags (Toggles) para ocultar las funciones en desarrollo en tiempo de ejecución hasta que estén listas",
                "Desactivar las pruebas automáticas en CI",
                "Evitar el uso de TypeScript en la rama trunk"
            ],
            "correctIndex": 1,
            "explanation": "Las Feature Flags desacoplan el despliegue de código (deployment) del lanzamiento de la funcionalidad (release), permitiendo integrar a main continuamente."
        },
        "level": "avanzado"
    },
    {
        "title": "¿Qué son los Git Hooks y cómo automatizar calidad en pre-commit, commit-msg y pre-push con Husky y Lint-staged?",
        "response": "Los **Git Hooks** son scripts ejecutables automáticos que Git dispara cuando ocurren eventos clave en el ciclo de vida del repositorio (ubicados de forma nativa en `.git/hooks/`).\n\nSe dividen en **Client-Side Hooks** (en la máquina del desarrollador) y **Server-Side Hooks** (en el servidor remoto de GitHub/GitLab).\n\n**El Ecosistema Husky + Lint-staged (Control de Calidad Atómico)**:\nPor defecto, `.git/hooks/` no se incluye en el control de versiones. **Husky** soluciona esto sincronizando los scripts bajo la carpeta `.husky/` en el repositorio.\n\nLos 3 hooks clave en frontend moderno:\n1. **`pre-commit`**: Se ejecuta antes de generar el commit. Con **`lint-staged`**, ejecuta ESLint y Prettier únicamente sobre los archivos staged (`git add`), formateándolos y abortando el commit si existen errores de lint.\n2. **`commit-msg`**: Se ejecuta tras escribir el mensaje. Con **`commitlint`**, valida que el mensaje cumpla la especificación estricta de Conventional Commits (`feat: ...`, `fix: ...`).\n3. **`pre-push`**: Se ejecuta antes de subir cambios con `git push`. Corre validación estricta de tipos (`tsc --noEmit`) y tests unitarios rápidos para evitar romper el pipeline de CI remoto.",
        "codeExample": {
            "language": "json",
            "code": "// package.json & configuración de Husky + lint-staged\n{\n  \"name\": \"frontend-enterprise\",\n  \"scripts\": {\n    \"prepare\": \"husky\"\n  },\n  \"lint-staged\": {\n    \"*.{ts,tsx}\": [\n      \"eslint --fix\",\n      \"prettier --write\"\n    ],\n    \"*.{json,css,md}\": [\n      \"prettier --write\"\n    ]\n  }\n}\n\n// Contenido de .husky/pre-commit:\n# !/usr/bin/env sh\n# pnpm lint-staged\n\n// Contenido de .husky/commit-msg:\n# !/usr/bin/env sh\n# pnpm commitlint --edit \"$1\""
        },
        "visualDiagram": {
            "id": "diag-git-16",
            "title": "Automatización con Git Hooks & Husky en el Flujo de Desarrollo",
            "caption": "Husky orquesta pre-commit (lint-staged), commit-msg (commitlint) y pre-push para garantizar código impecable antes del envío.",
            "diagramType": "git-hooks-husky-lifecycle"
        },
        "interviewTips": {
            "whatInterviewersWant": "Explicar por qué es indispensable usar `lint-staged` en lugar de ejecutar `eslint .` en cada commit (analizar todo el proyecto en cada commit demora minutos y genera frustración; lint-staged analiza en 200ms solo lo modificado).",
            "commonPitfalls": [
                "Abusar del flag `--no-verify` (`git commit --no-verify`) para saltarse los hooks locales.",
                "Creer que los client hooks sustituyen a los CI checks (los hooks locales se pueden saltar; el servidor CI es el verdadero guardián de calidad)."
            ]
        },
        "quiz": {
            "question": "¿Cuál es la principal ventaja de utilizar la biblioteca 'lint-staged' en conjunto con el hook de 'pre-commit'?",
            "options": [
                "Compila el bundle de producción en Webpack automáticamente",
                "Ejecuta linters y formateadores únicamente sobre los archivos que están preparados en el Staging Area, logrando verificaciones instantáneas sin analizar todo el proyecto",
                "Permite subir commits al repositorio sin tener Git instalado",
                "Convierte código CSS a TypeScript en tiempo real"
            ],
            "correctIndex": 1,
            "explanation": "'lint-staged' optimiza el tiempo de desarrollo ejecutando ESLint y Prettier solo en los archivos modificados que van a entrar en el commit."
        },
        "level": "experto"
    },
    {
        "title": "¿Qué es la especificación Conventional Commits y cómo automatiza Semantic Release y changelogs?",
        "response": "**Conventional Commits** es una convención estandarizada sobre los mensajes de commit inspirada en las directrices de Angular. Define una estructura legible tanto por seres humanos como por máquinas (*machine-readable*):\n\n$$\\text{<type>}[\\text{optional scope}]: \\text{<description>}$$\n\n**Tipos Semánticos Principales**:\n- **`feat:`**: Una nueva funcionalidad para el usuario ➔ Mapea a un incremento **MINOR** en SemVer (`v1.1.0` -> `v1.2.0`).\n- **`fix:`**: Corrección de un bug ➔ Mapea a un incremento **PATCH** (`v1.1.0` -> `v1.1.1`).\n- **`BREAKING CHANGE:`** o sufijo `!` (ej. `feat!:` o pie de página `BREAKING CHANGE: ...`) ➔ Mapea a un incremento **MAJOR** (`v1.0.0` -> `v2.0.0`).\n- **Tipos auxiliares sin impacto de versión**: `chore:`, `refactor:`, `docs:`, `perf:`, `test:`, `style:`, `ci:`.\n\n**El Poder de Semantic Release en CI/CD**:\nAl adoptar Conventional Commits, herramientas como **`semantic-release`** automatizan al 100% el ciclo de entrega: analizan los commits desde el último tag de Git, deducen automáticamente el siguiente número de versión SemVer, generan el archivo `CHANGELOG.md` estructurado y publican el tag y paquete sin intervención humana.",
        "codeExample": {
            "language": "bash",
            "code": "# Ejemplos reales de Conventional Commits y configuración de commitlint\n\n# 1. Feature con scope opcional\ngit commit -m \"feat(checkout): añadir soporte para pagos con Apple Pay\"\n\n# 2. Bugfix crítico\ngit commit -m \"fix(auth): corregir refresco de token JWT expirado\"\n\n# 3. Cambio con ruptura de compatibilidad (Breaking Change)\ngit commit -m \"feat(api)!: migrar endpoints REST a GraphQL\n\nBREAKING CHANGE: Los endpoints v1/users han sido eliminados en favor del nuevo esquema GraphQL.\"\n\n# commitlint.config.js\n# module.exports = { extends: ['@commitlint/config-conventional'] };"
        },
        "visualDiagram": {
            "id": "diag-git-17",
            "title": "Conventional Commits & Semantic Release Automático",
            "caption": "Los commits semánticos permiten que los pipelines de CI/CD deriven automáticamente el versionado SemVer y generen el CHANGELOG.",
            "diagramType": "git-conventional-commits-semver"
        },
        "interviewTips": {
            "whatInterviewersWant": "Demostrar conocimiento del estándar de Conventional Commits, cómo mapea a la especificación SemVer (Major/Minor/Patch) y el valor de automatizar el changelog y release con herramientas como `semantic-release`.",
            "commonPitfalls": [
                "Escribir mensajes vagos e inútiles como 'fixes', 'changes', 'update' o 'WIP'.",
                "Incrementar números de versión a mano modificando `package.json` en lugar de delegar el versionado semántico al pipeline automatizado."
            ]
        },
        "quiz": {
            "question": "En la especificación Conventional Commits, ¿qué prefijo de commit dispara automáticamente un incremento de versión MINOR en SemVer mediante Semantic Release?",
            "options": [
                "fix:",
                "chore:",
                "feat:",
                "docs:"
            ],
            "correctIndex": 2,
            "explanation": "'feat:' añade nueva funcionalidad retrocompatible, lo cual corresponde a un salto MINOR en SemVer (ej. de 1.2.0 a 1.3.0)."
        },
        "level": "experto"
    },
    {
        "title": "¿Cómo resolver conflictos complejos de merge/rebase y cómo acelerarlo con 'git rerere' (Reuse Recorded Resolution)?",
        "response": "Un conflicto ocurre cuando dos ramas modifican las mismas líneas de un archivo o cuando un archivo es eliminado en una rama y modificado en otra. Git no puede adivinar la intención de negocio y detiene la operación insertando marcadores de conflicto de 3 vías:\n\n```text\n<<<<<<< HEAD (Tus cambios locales actuales)\n  const API_TIMEOUT = 5000;\n=======\n  const API_TIMEOUT = 10000;\n>>>>>>> origin/main (Cambios entrantes remotos)\n```\n\n**Protocolo Profesional de Resolución**:\n1. Comprender la intención de ambos cambios antes de borrar marcadores.\n2. Apoyarse en herramientas de 3-way merge (VS Code Merge Editor, IntelliJ o KDiff3).\n3. Ejecutar pruebas unitarias locales para validar que la integración no rompió contratos.\n4. Si la situación se vuelve destructiva: abortar limpiamente con `git merge --abort` o `git rebase --abort`.\n\n**El Superpoder Oculto: `git rerere` (Reuse Recorded Resolution)**:\n- Cuando se activan ramas de feature de larga vida o se rebasean múltiples commits, resolver el mismo conflicto 10 veces seguidas es agotador.\n- Al habilitar `git config --global rerere.enabled true`, Git toma una huella digital (*fingerprint*) de la pre-imagen del conflicto y de cómo lo solucionaste. Si ese conflicto vuelve a surgir durante el rebase, **Git lo resuelve automáticamente en 0 segundos**.",
        "codeExample": {
            "language": "bash",
            "code": "# Activación y uso de git rerere para resolución automática de conflictos\n\n# 1. Habilitar git rerere a nivel global\ngit config --global rerere.enabled true\ngit config --global rerere.autoupdate true\n\n# 2. Si surge un conflicto durante un merge o rebase:\n# Git guarda la pre-imagen en .git/rr-cache/\n# Output: Recorded preimage for 'src/api/config.ts'\n\n# 3. Resuelves el conflicto manualmente y añades el archivo:\ngit add src/api/config.ts\ngit commit -m \"merge: resolver conflicto en config API\"\n# Output: Recorded resolution for 'src/api/config.ts'\n\n# 4. En el futuro, si vuelves a rebasear o cherry-pickear:\n# Git resolverá el conflicto de forma automática y transparente:\n# Output: Resolved 'src/api/config.ts' using previous resolution."
        },
        "visualDiagram": {
            "id": "diag-git-18",
            "title": "Resolución de Conflictos & git rerere (Reuse Recorded Resolution)",
            "caption": "Los marcadores delimitan cambios locales y remotos; git rerere memoriza las resoluciones para auto-resolver conflictos idénticos futuros.",
            "diagramType": "git-merge-conflicts-rerere"
        },
        "interviewTips": {
            "whatInterviewersWant": "Conocimiento sobre anatomía de marcadores de conflicto, cómo abortar una operación corrupta (`--abort`) y mencionar `git rerere` como muestra de experiencia senior en repositorios complejos.",
            "commonPitfalls": [
                "Dejar restos de marcadores (`<<<<<<<` o `=======`) en el código y commitearlos a producción.",
                "Elegir ciegamente 'Accept Current Change' o 'Accept Incoming' sin entender la lógica de ambos lados."
            ]
        },
        "quiz": {
            "question": "¿Qué función cumple la herramienta integrada 'git rerere' (Reuse Recorded Resolution)?",
            "options": [
                "Desinstala Git y lo reinstala en caso de corrupción del sistema operativo",
                "Registra la forma en que resolviste un conflicto y reutiliza automáticamente esa solución si el mismo conflicto vuelve a ocurrir en futuros merges o rebases",
                "Envía un correo a los autores del conflicto solicitando aprobación",
                "Reescribe el código en formato WebAssembly"
            ],
            "correctIndex": 1,
            "explanation": "'git rerere' memoriza cómo resolviste un conflicto entre dos bloques de código y aplica la misma resolución si vuelve a presentarse en el historial."
        },
        "level": "experto"
    },
    {
        "title": "¿Qué es 'git worktree' y cómo permite trabajar en múltiples ramas en paralelo sin context-switching ni stashing?",
        "response": "Tradicionalmente, para cambiar de rama en Git debías hacer `git stash`, cambiar de rama con `git switch`, esperar que tu entorno reconstruya los artefactos y luego volver. Si querías correr dos ramas al mismo tiempo, la única alternativa era clonar el repositorio entero por segunda vez (duplicando gigabytes de historial).\n\n**`git worktree`** resuelve este problema de raíz:\n- Permite vincular **múltiples directorios de trabajo independientes en tu disco**, cada uno posicionado en una rama diferente, pero **apuntando todos al mismo repositorio central `.git`**.\n\n**Casos de uso de alto impacto**:\n1. **Hotfixes sin interrumpir tu feature**: Estás a mitad de una migración grande y surge un bug urgente en producción. Creas un worktree en una carpeta paralela (`git worktree add ../hotfix main`), abres otra ventana de VS Code, solucionas el bug, lo subes, borras el worktree y sigues en tu feature sin haber tocado ni stasheado tu trabajo.\n2. **Code Reviews con ejecución local**: Puedes probar la rama de un PR de un compañero en un worktree separado mientras tus servidores de desarrollo locales continúan corriendo intactos en tu rama principal.",
        "codeExample": {
            "language": "bash",
            "code": "# Flujo de trabajo profesional con git worktree\n\n# 1. Crear un directorio de trabajo paralelo para un hotfix urgente\ngit worktree add ../repo-hotfix -b hotfix/login-crash main\n# Output: Preparing worktree (new branch 'hotfix/login-crash')\n# HEAD is now at 4b825dc feat: stable main\n\n# 2. Navegar a la carpeta paralela e instalar dependencias\ncd ../repo-hotfix\n# Aquí puedes trabajar, testear y commitear de forma 100% aislada\ngit commit -am \"fix: resolver null pointer en login\"\ngit push origin hotfix/login-crash\n\n# 3. Regresar a tu carpeta original y listar los worktrees activos\ncd ../repo-principal\ngit worktree list\n# Output:\n# /Users/dev/repo-principal  f48c9e8 [feat/checkout]\n# /Users/dev/repo-hotfix     a1b2c3d [hotfix/login-crash]\n\n# 4. Eliminar el worktree temporal tras completar la tarea\ngit worktree remove ../repo-hotfix"
        },
        "visualDiagram": {
            "id": "diag-git-19",
            "title": "git worktree: Desarrollo Concurrente en Múltiples Ramas",
            "caption": "Múltiples carpetas de trabajo independientes apuntan a una única base de datos .git, eliminando el coste de stashing y context-switching.",
            "diagramType": "git-worktree-multi-directory"
        },
        "interviewTips": {
            "whatInterviewersWant": "Entender la eficiencia en el flujo de trabajo: cómo evitar clonar dos veces el repositorio o evitar perder tiempo con `git stash` constante usando `git worktree`.",
            "commonPitfalls": [
                "Intentar abrir la misma rama en dos worktrees diferentes simultáneamente (Git lo bloquea intencionalmente para evitar corrupción del índice).",
                "Borrar la carpeta del worktree con `rm -rf` en vez de usar `git worktree remove` (provoca worktrees fantasmas que requieren `git worktree prune`)."
            ]
        },
        "quiz": {
            "question": "¿Cuál es la principal ventaja de utilizar 'git worktree' frente a clonar el repositorio en una segunda carpeta?",
            "options": [
                "Permite compilar el código sin usar Node.js",
                "Comparte la misma base de datos de objetos .git subyacente sin duplicar almacenamiento en disco y sincroniza ramas y configuraciones de inmediato",
                "Elimina la necesidad de hacer commits",
                "Garantiza que no existan conflictos de merge"
            ],
            "correctIndex": 1,
            "explanation": "'git worktree' crea un nuevo árbol de trabajo vinculado al mismo almacén .git, evitando duplicar gigabytes de historial y manteniendo la sincronización entre ramas."
        },
        "level": "experto"
    },
    {
        "title": "¿Qué es 'git reflog' y cómo realizar recuperación forense de commits, ramas o resets accidentales?",
        "response": "**`git reflog` (Reference Log)** es la 'caja negra' de Git. Es un registro cronológico local estricto que graba **cada uno de los movimientos que el puntero HEAD realiza en tu máquina** (hacer commits, cambiar de rama, rebasear, resetear o cherry-pickear).\n\n**El Mito de que los Cambios se Pierden**:\nMuchos desarrolladores entran en pánico tras ejecutar por error un `git reset --hard HEAD~5` o borrar accidentalmente una rama con `git branch -D`, creyendo que su trabajo de días se ha volatilizado.\n\nEn Git, **casi nada se pierde de forma inmediata**:\n1. Cuando 'borras' una rama o 'retrocedes' con un reset, los commits no se destruyen; simplemente se convierten en **commits inalcanzables (huérfanos)**.\n2. Esos commits permanecen intactos en la base de datos de objetos durante un período de gracia (por defecto **30 a 90 días**) antes de que el recolector de basura (`git gc`) los purgue.\n3. Ejecutando `git reflog`, puedes localizar el hash exacto donde te encontrabas antes del desastre (`HEAD@{1}`) y resucitarlo instantáneamente creando una nueva rama: `git branch recuperacion HEAD@{1}`.",
        "codeExample": {
            "language": "bash",
            "code": "# Procedimiento forense de rescate tras un desastre de 'git reset --hard'\n\n# Situación: Ejecutaste accidentalmente un reset destructivo\ngit reset --hard HEAD~3\n# ¡Tus últimos 3 commits de trabajo parecen haber desaparecido!\n\n# 1. Consultar el reflog cronológico de HEAD\ngit reflog\n# Output:\n# a1b2c3d (HEAD -> main) HEAD@{0}: reset: moving to HEAD~3\n# f7e8d9c HEAD@{1}: commit: feat(auth): 2 días de trabajo intenso\n# d4e5f6a HEAD@{2}: commit: feat: servicios de api completados\n# 9c8b7a6 HEAD@{3}: checkout: moving from develop to main\n\n# 2. Rescatar los commits huérfanos creando una rama apuntando a HEAD@{1}\ngit branch rescate-exitoso HEAD@{1}\n\n# 3. Cambiar a la rama rescatada y verificar que todo el código ha vuelto\ngit switch rescate-exitoso\n# ¡Todo el historial y los archivos vuelven a estar 100% a salvo!"
        },
        "visualDiagram": {
            "id": "diag-git-20",
            "title": "Recuperación Forense con git reflog: El Rescate de Commits Huérfanos",
            "caption": "git reflog registra cada movimiento de HEAD, permitiendo resucitar commits huérfanos tras resets destructivos o ramas borradas.",
            "diagramType": "git-reflog-recovery-forensics"
        },
        "interviewTips": {
            "whatInterviewersWant": "Tranquilidad y maestría forense ante emergencias: saber cómo usar `git reflog` para rescatar ramas o commits perdidos y entender el rol del garbage collector (`git gc`).",
            "commonPitfalls": [
                "Creer que `git log` y `git reflog` son lo mismo (`git log` muestra el historial del DAG de la rama; `git reflog` muestra el historial de movimientos de HEAD en tu máquina local).",
                "Pensar que el reflog se comparte con el servidor remoto (el reflog es 100% privado y local a tu máquina)."
            ]
        },
        "quiz": {
            "question": "Si ejecutas por error 'git reset --hard HEAD~5' y pierdes 5 commits locales no subidos al remoto, ¿cómo puedes recuperarlos intactos?",
            "options": [
                "Es imposible recuperarlos; los archivos han sido destruidos físicamente de inmediato",
                "Consultando 'git reflog' para obtener el hash anterior al reset (HEAD@{1}) y creando una rama a partir de esa referencia",
                "Ejecutando 'git clone' nuevamente",
                "Desconectando y volviendo a conectar el cable de red"
            ],
            "correctIndex": 1,
            "explanation": "'git reflog' guarda el historial de saltos de HEAD. El commit previo al reset destructivo queda registrado y se puede recuperar con 'git branch rescate HEAD@{1}'."
        },
        "level": "experto"
    }
]
};

export default questionsVersionControl;
