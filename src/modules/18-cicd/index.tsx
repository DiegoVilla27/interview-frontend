import { ISection } from "../../types";

export const questionsCICD: ISection = {
  title: "CI/CD",
  collapse: "collapseCICD",
  icon: "cicd",
  questions: [
    {
      title: "¿Qué significa CI/CD?",
      response:
        "CI/CD significa Integración Continua (Continuous Integration) y Entrega/Despliegue Continuo (Continuous Delivery/Deployment)."
    },
    {
      title: "¿Qué problema resuelve la Integración Continua?",
      response:
        "Detectar errores de integración rápidamente al ejecutar pruebas automáticas cada vez que se sube código."
    },
    {
      title:
        "¿Qué diferencia hay entre Continuous Delivery y Continuous Deployment?",
      response:
        "Continuous Delivery deja la decisión final de desplegar en producción al equipo; Continuous Deployment despliega automáticamente tras aprobar las pruebas."
    },
    {
      title: "Menciona un servicio popular para CI/CD.",
      response: "GitHub Actions, GitLab CI, CircleCI, Travis CI, Jenkins."
    },
    {
      title: "¿Qué es un pipeline en CI/CD?",
      response:
        "Es una secuencia de pasos automatizados para construir, probar y desplegar aplicaciones."
    },
    {
      title: "¿Qué es un runner en GitLab CI?",
      response: "Es el agente que ejecuta los jobs definidos en el pipeline."
    },
    {
      title: "¿Cómo se asegura la calidad del código en un pipeline?",
      response:
        "Con análisis estáticos (linting), pruebas unitarias, pruebas de integración y revisiones de seguridad automatizadas."
    },
    {
      title: "¿Qué ventaja tiene usar contenedores en pipelines?",
      response:
        "Garantizan entornos consistentes y reproducibles para construir y ejecutar la aplicación."
    },
    {
      title: "¿Qué es un artefacto en CI/CD?",
      response:
        "Es el resultado de un job (ejemplo: binario compilado, paquete npm, docker image) que puede ser reutilizado en otros pasos."
    },
    {
      title: "¿Qué diferencia hay entre un job y un stage?",
      response:
        "Un job es una tarea individual; un stage agrupa varios jobs que se ejecutan en paralelo o secuencia."
    },
    {
      title: "¿Cómo implementar despliegues blue-green?",
      response:
        "Se mantienen dos entornos (blue y green); uno atiende tráfico y el otro recibe la nueva versión. Se redirige el tráfico cuando la nueva versión está validada."
    },
    {
      title: "¿Qué es un despliegue canary?",
      response:
        "Se libera la nueva versión a un pequeño porcentaje de usuarios antes de extenderlo a todos."
    },
    {
      title: "¿Cómo manejar secretos en un pipeline de CI/CD?",
      response:
        "Usando gestores seguros como Vault, AWS Secrets Manager, GitHub Secrets o variables de entorno encriptadas."
    },
    {
      title:
        "¿Qué diferencia hay entre integración continua y entrega continua a nivel de frecuencia?",
      response:
        "La integración continua asegura que cada commit se integre y pruebe; la entrega continua busca que cada cambio esté siempre listo para producción."
    },
    {
      title: "¿Qué es Infrastructure as Code y cómo encaja en CI/CD?",
      response:
        "Es la gestión de infraestructuras mediante código (ej. Terraform, Ansible) que puede automatizarse en pipelines."
    },
    {
      title:
        "¿Cómo implementar un pipeline multi-entorno (dev, staging, producción)?",
      response:
        "Definiendo stages separados y reglas de despliegue condicionadas por ramas, tags o aprobaciones manuales."
    },
    {
      title: "¿Cómo integras pruebas de performance en un pipeline?",
      response:
        "Con herramientas como JMeter, k6 o Gatling dentro de jobs automatizados."
    },
    {
      title: "¿Qué es GitOps y cómo se relaciona con CI/CD?",
      response:
        "Es un enfoque donde el estado deseado de la infraestructura se gestiona en repositorios Git, y los cambios se aplican automáticamente con operadores como ArgoCD o Flux."
    },
    {
      title: "¿Cómo manejar despliegues en múltiples regiones con CI/CD?",
      response:
        "Usando pipelines paralelos/orquestados que apliquen despliegues en regiones distintas con balanceo progresivo."
    },
    {
      title:
        "¿Cómo aplicar políticas de seguridad y compliance en pipelines CI/CD?",
      response:
        "Con escaneos automáticos de dependencias, análisis SAST/DAST, validación de infraestructura, y gates de seguridad antes del despliegue."
    }
  ]
};

export default questionsCICD;
