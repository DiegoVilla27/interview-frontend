import { ISection } from "../../types";

export const questionsPackageManager: ISection = {
  title: "Package Manager",
  collapse: "collapsePackageManager",
  icon: "package-manager",
  questions: [
    { title: "¿Qué es un package manager?", response: "Es una herramienta que automatiza la instalación, actualización, configuración y eliminación de librerías y dependencias en un proyecto de software.", level: "basico" },
    { title: "¿Cuáles son los package managers más usados en JavaScript?", response: "NPM (incluido con Node.js), Yarn (de Meta, enfocado en velocidad), y PNPM (eficiente con disco usando hard links y symlinks).", level: "basico" },
    { title: "¿Qué archivo define las dependencias de un proyecto?", response: "El archivo package.json define dependencias, scripts, metadatos, motores (engines) y configuración del proyecto.", level: "basico" },
    { title: "¿Qué diferencia hay entre dependencias y devDependencies?", response: "dependencies son necesarias en producción (react, axios). devDependencies son solo para desarrollo (eslint, jest, typescript). En producción, npm install --omit=dev las excluye.", level: "basico" },
    { title: "¿Cómo instalas todas las dependencias de un proyecto?", response: "npm install, yarn install, o pnpm install. Lee el lockfile para instalar versiones exactas reproducibles.", level: "basico" },
    { title: "¿Qué es Semantic Versioning (SemVer)?", response: "Sistema de versionado MAJOR.MINOR.PATCH. MAJOR: cambios incompatibles, MINOR: funcionalidad nueva compatible, PATCH: correcciones. Ejemplo: 2.1.3.", level: "medio" },
    { title: "¿Qué significan ^ y ~ en las versiones de package.json?", response: "^1.2.3 permite updates que no cambien MAJOR (→ 1.x.x). ~1.2.3 permite updates solo en PATCH (→ 1.2.x). Sin símbolo: versión exacta.", level: "medio" },
    { title: "¿Qué es el archivo lockfile (package-lock.json / yarn.lock)?", response: "Registra la versión exacta de cada dependencia y sub-dependencia instalada. Garantiza builds reproducibles en cualquier entorno. Siempre debe commitearse.", level: "medio" },
    { title: "¿Qué diferencia hay entre NPM, Yarn y PNPM?", response: "NPM: estándar, incluido con Node. Yarn: paralelismo, workspaces maduros. PNPM: content-addressable store (ahorra disco), symlinks, estricto con phantom dependencies.", level: "medio" },
    { title: "¿Qué diferencia hay entre instalar un paquete global y local?", response: "Local: en node_modules del proyecto, listado en package.json. Global: en el sistema, accesible desde cualquier proyecto. Preferir local para reproducibilidad; global solo para CLIs.", level: "medio" },
    { title: "¿Qué son los workspaces en un monorepo?", response: "Permiten gestionar múltiples paquetes en un solo repositorio. NPM, Yarn y PNPM soportan workspaces. Comparten dependencias, facilitan linking interno y CI unificado.", level: "avanzado" },
    { title: "¿Qué es npx y para qué se usa?", response: "npx ejecuta binarios de paquetes sin instalarlos globalmente. Busca en node_modules/.bin local, luego descarga temporalmente. Ideal para CLIs como create-react-app o eslint.", level: "avanzado" },
    { title: "¿Qué son las peer dependencies?", response: "Son dependencias que un paquete necesita pero espera que el consumidor las provea. Evitan duplicados de librerías compartidas (ej: un plugin de React requiere react como peer).", level: "avanzado" },
    { title: "¿Qué son las phantom dependencies y cómo PNPM las previene?", response: "Son dependencias accesibles pero no declaradas en package.json (hoisted por NPM/Yarn). PNPM usa una estructura strict de symlinks que solo expone dependencias explícitamente declaradas.", level: "avanzado" },
    { title: "¿Cómo auditas la seguridad de las dependencias?", response: "npm audit / yarn audit / pnpm audit escanean vulnerabilidades conocidas. npm audit fix aplica parches. Para CI: integrar Snyk, Socket.dev, o Dependabot para monitoreo continuo.", level: "avanzado" },
    { title: "¿Qué es un registry privado y cuándo se usa?", response: "Es un servidor de paquetes privado (Verdaccio, GitHub Packages, AWS CodeArtifact) para publicar paquetes internos de la empresa sin exponerlos al registry público de NPM.", level: "experto" },
    { title: "¿Qué es changesets y cómo automatiza el versionado en monorepos?", response: "changesets es una herramienta que gestiona versiones y changelogs en monorepos. Los devs crean 'changesets' describiendo cambios, y el CI genera releases con SemVer automático.", level: "experto" },
    { title: "¿Cómo optimizarías el tiempo de instalación en CI/CD?", response: "Cachear node_modules o el store de PNPM, usar lockfile frozen (--frozen-lockfile), PNPM por su velocidad, corepack para gestionar versiones, y prune devDependencies en producción.", level: "experto" }
  ]
};

export default questionsPackageManager;
