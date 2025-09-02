import { ISection } from "../../types";

export const questionsVersionControl: ISection = {
  title: "Version Control",
  collapse: "collapseVersionControl",
  icon: "version-control",
  questions: [
    {
      title: "¿Qué es el control de versiones?",
      response:
        "Es un sistema que permite registrar y gestionar los cambios realizados en un proyecto a lo largo del tiempo, facilitando la colaboración, la recuperación de versiones anteriores y el control del historial."
    },
    {
      title: "¿Cuál es la diferencia entre Git y GitHub?",
      response:
        "Git es un sistema de control de versiones distribuido que funciona localmente. GitHub es una plataforma en la nube que permite alojar repositorios Git y colaborar en ellos."
    },
    {
      title: "¿Qué diferencia hay entre 'git pull' y 'git fetch'?",
      response:
        "'git fetch' descarga los cambios remotos pero no los integra en tu rama local. 'git pull' hace 'fetch' y además realiza un 'merge' (o 'rebase' si está configurado)."
    },
    {
      title: "¿Qué hace el comando 'git clone'?",
      response:
        "Crea una copia exacta de un repositorio remoto en tu máquina local, incluyendo todas las ramas, commits y etiquetas."
    },
    {
      title: "¿Qué es un commit en Git?",
      response:
        "Es una instantánea de los cambios realizados en el proyecto en un momento determinado. Cada commit tiene un identificador único (hash)."
    },
    {
      title: "¿Qué diferencia hay entre 'git merge' y 'git rebase'?",
      response:
        "'git merge' combina el historial de dos ramas manteniendo la secuencia de commits. 'git rebase' reescribe el historial para aplicar los commits de una rama sobre otra, creando un historial más lineal."
    },
    {
      title: "¿Qué es un 'branch' en Git?",
      response:
        "Es una rama que permite trabajar en una línea de desarrollo independiente sin afectar la principal (por ejemplo, 'main' o 'master')."
    },
    {
      title: "¿Qué es un 'tag' en Git?",
      response:
        "Es una referencia estática a un commit específico, normalmente utilizada para marcar versiones de lanzamiento."
    },
    {
      title: "¿Qué es un 'stash' en Git?",
      response:
        "Es un espacio temporal donde puedes guardar cambios no confirmados para limpiar tu área de trabajo y recuperarlos más adelante."
    },
    {
      title: "¿Qué diferencia hay entre 'git reset' y 'git revert'?",
      response:
        "'git reset' mueve el puntero del HEAD a un commit anterior y puede alterar el historial. 'git revert' crea un nuevo commit que revierte los cambios de un commit específico sin modificar el historial existente."
    },
    {
      title: "¿Qué es un 'fork' en GitHub?",
      response:
        "Es una copia de un repositorio en tu propia cuenta, que te permite modificarlo sin afectar al proyecto original."
    },
    {
      title: "¿Qué es un 'pull request'?",
      response:
        "Es una solicitud para que los cambios realizados en una rama (normalmente en un fork) sean revisados e integrados en el repositorio principal."
    },
    {
      title: "¿Qué es el archivo '.gitignore'?",
      response:
        "Es un archivo que define qué archivos o carpetas deben ser ignorados por Git y no incluidos en el control de versiones."
    },
    {
      title: "¿Qué diferencia hay entre un repositorio local y remoto?",
      response:
        "El repositorio local está en tu computadora y el remoto está en un servidor (como GitHub, GitLab o Bitbucket). Puedes sincronizar ambos mediante 'push' y 'pull'."
    }
  ]
};

export default questionsVersionControl;
