import { ISection } from "../../types";

export const questionsPackageManager: ISection = {
  title: "Package Manager",
  collapse: "collapsePackageManager",
  icon: "package-manager",
  questions: [
    {
      title: "¿Qué es un package manager?",
      response:
        "Un package manager (gestor de paquetes) es una herramienta que automatiza la instalación, actualización, configuración y eliminación de librerías, dependencias y paquetes en un proyecto."
    },
    {
      title: "¿Cuáles son los package managers más usados en JavaScript?",
      response: "Los más usados son NPM (Node Package Manager), Yarn y PNPM."
    },
    {
      title: "¿Qué diferencia hay entre NPM y Yarn?",
      response:
        "Ambos manejan dependencias de Node.js, pero Yarn surgió como una alternativa más rápida y segura que NPM en sus primeras versiones. Hoy en día NPM ha mejorado mucho en rendimiento y seguridad."
    },
    {
      title: "¿Qué es PNPM y por qué es diferente?",
      response:
        "PNPM es un package manager que ahorra espacio en disco al usar enlaces simbólicos y un almacenamiento centralizado de dependencias. Esto lo hace más eficiente en proyectos grandes."
    },
    {
      title:
        "¿Qué archivo define las dependencias en un proyecto con NPM o Yarn?",
      response:
        "El archivo `package.json` define las dependencias, scripts y metadatos del proyecto."
    },
    {
      title: "¿Qué diferencia hay entre dependencias y devDependencies?",
      response:
        "Las `dependencies` son necesarias para que la aplicación funcione en producción, mientras que las `devDependencies` son solo para desarrollo, como linters, herramientas de testing o compiladores."
    },
    {
      title: "¿Qué es el archivo package-lock.json o yarn.lock?",
      response:
        "Son archivos de bloqueo que registran la versión exacta de cada dependencia instalada para garantizar que el proyecto sea reproducible en cualquier entorno."
    },
    {
      title: "¿Cómo instalas todas las dependencias de un proyecto?",
      response:
        "Con el comando `npm install`, `yarn install` o `pnpm install`, según el gestor usado."
    },
    {
      title: "¿Cómo instalas una librería específica en NPM?",
      response:
        "Con `npm install nombre-paquete`, o si quieres que sea solo para desarrollo, `npm install nombre-paquete --save-dev`."
    },
    {
      title: "¿Cómo actualizas un paquete a su última versión?",
      response:
        "Con `npm update nombre-paquete`, `yarn upgrade nombre-paquete` o `pnpm update nombre-paquete`."
    },
    {
      title: "¿Qué comando elimina un paquete instalado?",
      response:
        "En NPM se usa `npm uninstall nombre-paquete`, en Yarn `yarn remove nombre-paquete` y en PNPM `pnpm remove nombre-paquete`."
    },
    {
      title: "¿Qué diferencia hay entre instalar un paquete global y local?",
      response:
        "Un paquete instalado local queda en el proyecto y se usa en ese contexto, mientras que un paquete global se instala en todo el sistema y puede usarse desde cualquier proyecto."
    },
    {
      title: "¿Qué es Semantic Versioning (SemVer)?",
      response:
        "Es el sistema de versionado que usan la mayoría de paquetes en JavaScript, con el formato `MAJOR.MINOR.PATCH` (ejemplo: 1.2.3)."
    },
    {
      title:
        "¿Qué significan los símbolos ^ y ~ en las versiones de package.json?",
      response:
        "`^` permite actualizar a cualquier versión que no cambie el número mayor (ej: ^1.2.3 → 1.x.x). `~` permite actualizar solo dentro de la misma versión menor (ej: ~1.2.3 → 1.2.x)."
    }
  ]
};

export default questionsPackageManager;
