import { ISection } from "../../types";

export const questionsVersionControl: ISection = {
  title: "Version Control",
  collapse: "collapseVersionControl",
  icon: "version-control",
  questions: [
    { title: "¿Qué es el control de versiones?", response: "Es un sistema que registra y gestiona los cambios en un proyecto a lo largo del tiempo, facilitando la colaboración, recuperación de versiones anteriores y trazabilidad.", level: "basico" },
    { title: "¿Cuál es la diferencia entre Git y GitHub?", response: "Git es un sistema de control de versiones distribuido que funciona localmente. GitHub es una plataforma en la nube que aloja repositorios Git y añade colaboración (PRs, Issues, Actions).", level: "basico" },
    { title: "¿Qué hace el comando 'git clone'?", response: "Crea una copia completa de un repositorio remoto en tu máquina local, incluyendo todas las ramas, commits, etiquetas e historial.", level: "basico" },
    { title: "¿Qué es un commit en Git?", response: "Es una instantánea de los cambios en un momento determinado. Cada commit tiene un hash SHA-1 único, autor, fecha y mensaje descriptivo.", level: "basico" },
    { title: "¿Qué es un 'branch' en Git?", response: "Es un puntero móvil a un commit que permite trabajar en una línea de desarrollo independiente sin afectar la rama principal (main/master).", level: "basico" },
    { title: "¿Qué es el archivo '.gitignore'?", response: "Define qué archivos o carpetas deben ser ignorados por Git: node_modules, .env, dist, archivos de IDE, etc.", level: "basico" },
    { title: "¿Qué diferencia hay entre 'git pull' y 'git fetch'?", response: "'git fetch' descarga cambios remotos sin integrarlos. 'git pull' hace fetch + merge (o rebase si está configurado). Fetch es más seguro para revisar cambios antes de integrar.", level: "medio" },
    { title: "¿Qué diferencia hay entre 'git merge' y 'git rebase'?", response: "merge combina historial manteniendo la secuencia de commits (crea merge commit). rebase reescribe el historial aplicando commits sobre otra rama (historial lineal). Rebase NO en ramas compartidas.", level: "medio" },
    { title: "¿Qué es un 'stash' en Git?", response: "Espacio temporal para guardar cambios no confirmados. git stash guarda, git stash pop restaura. Útil para cambiar de rama sin commitear trabajo en progreso.", level: "medio" },
    { title: "¿Qué diferencia hay entre 'git reset' y 'git revert'?", response: "reset mueve HEAD a un commit anterior y puede alterar historial (--soft, --mixed, --hard). revert crea un nuevo commit que deshace cambios sin modificar historial. revert es seguro en ramas compartidas.", level: "medio" },
    { title: "¿Qué es un 'pull request'?", response: "Es una solicitud para que cambios en una rama sean revisados (code review) e integrados en la rama principal. Permite discusión, CI checks y aprobaciones antes del merge.", level: "medio" },
    { title: "¿Qué es un 'tag' en Git?", response: "Referencia estática a un commit específico. Annotated tags guardan metadatos (autor, fecha, mensaje). Se usan para marcar versiones de release (v1.0.0).", level: "medio" },
    { title: "¿Qué es git bisect y cuándo se usa?", response: "Es un comando que usa búsqueda binaria para encontrar el commit que introdujo un bug. Se marca un commit 'good' y uno 'bad', y Git navega el historial automáticamente.", level: "avanzado" },
    { title: "¿Qué es git cherry-pick?", response: "Permite aplicar un commit específico de otra rama a la rama actual sin hacer merge completo. Útil para hotfixes selectivos.", level: "avanzado" },
    { title: "¿Qué es un interactive rebase y cuándo se usa?", response: "git rebase -i permite reorganizar, squash, editar o eliminar commits antes de integrar. Ideal para limpiar historial antes de un PR: combinar WIP commits en uno limpio.", level: "avanzado" },
    { title: "¿Qué estrategias de branching conoces?", response: "GitFlow (develop/feature/release/hotfix), GitHub Flow (main + feature branches), Trunk Based Development (main con feature flags). TBD es preferida para CI/CD rápido.", level: "avanzado" },
    { title: "¿Qué es un git hook y para qué se usa?", response: "Son scripts que se ejecutan automáticamente en eventos Git: pre-commit (lint), commit-msg (formato), pre-push (tests). Se gestionan con Husky o lefthook.", level: "avanzado" },
    { title: "¿Qué es Conventional Commits y por qué es importante?", response: "Es un estándar de mensajes de commit (feat:, fix:, chore:, etc.) que permite semantic versioning automático, changelog generation, y un historial legible y machine-readable.", level: "avanzado" },
    { title: "¿Qué son los git submodules y cuándo se usan?", response: "Permiten incluir repositorios Git dentro de otro como dependencias versionadas. Útiles para compartir código entre proyectos, pero complejos de manejar. Alternativas: git subtree o package managers.", level: "experto" },
    { title: "¿Cómo resolverías un conflicto de merge complejo?", response: "1) Entender ambos cambios, 2) Usar merge tool (VSCode, IntelliJ), 3) Aplicar rerere para conflictos recurrentes, 4) Si es destructivo, abort y replanear. Comunicación con el equipo es clave.", level: "experto" },
    { title: "¿Qué es git worktree y para qué sirve?", response: "Permite tener múltiples working directories del mismo repo simultáneamente, cada uno en una rama diferente. Ideal para trabajar en hotfix sin stashear cambios de feature.", level: "experto" }
  ]
};

export default questionsVersionControl;
