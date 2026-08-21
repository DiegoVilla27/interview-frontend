import { ISection } from "../../types";

export const questionsCICD: ISection = {
  title: "CI/CD",
  collapse: "collapseCICD",
  icon: "cicd",
  questions: [
    // === BÁSICO ===
    {
      title: "¿Qué significa CI/CD y qué problema resuelve?",
      response:
        "CI (Continuous Integration) y CD (Continuous Delivery / Continuous Deployment). Resuelve el 'integration hell' automatizando la validación, pruebas, empaquetado y entrega de software de forma continua y frecuente.",
      level: "basico"
    },
    {
      title: "¿Cuál es la diferencia entre Continuous Delivery y Continuous Deployment?",
      response:
        "En Continuous Delivery, cada cambio probado se empaqueta y queda automáticamente listo para producción, pero el despliegue final requiere aprobación manual humana. En Continuous Deployment, el despliegue a producción es 100% automático sin intervención humana si todos los tests pasan.",
      level: "basico"
    },
    {
      title: "¿Qué es un Pipeline y qué son los Jobs y Stages?",
      response:
        "Un Pipeline es el flujo automatizado de pasos de CI/CD. Los 'Stages' son fases lógicas (Lint -> Test -> Build -> Deploy). Los 'Jobs' son unidades individuales de ejecución dentro de un stage (ej. 'unit-tests', 'e2e-tests') que pueden correr en paralelo.",
      level: "basico"
    },
    {
      title: "¿Qué es un Runner o Agente en CI/CD?",
      response:
        "Es el servidor o contenedor (máquina virtual) que escucha eventos del repositorio y ejecuta los comandos definidos en el archivo de pipeline (ej. GitHub Actions Hosted Runners, GitLab Runners, Jenkins Agents).",
      level: "basico"
    },
    {
      title: "¿Qué herramientas populares de CI/CD existen en la actualidad?",
      response:
        "GitHub Actions, GitLab CI/CD, Bitbucket Pipelines, CircleCI, Jenkins, ArgoCD (GitOps) y plataformas de hosting con CI integrado como Vercel, Netlify y Cloudflare Pages.",
      level: "basico"
    },
    // === MEDIO ===
    {
      title: "¿Cómo se asegura la calidad del código frontend dentro de un pipeline?",
      response:
        "Encadenando gates de validación: 1) Linters y formateo (`eslint`, `prettier`), 2) Type-checking (`tsc --noEmit`), 3) Tests unitarios y de integración (`vitest`/`jest` con umbral de cobertura), 4) Auditoría de dependencias (`pnpm audit`), 5) Build de producción sin errores.",
      level: "medio"
    },
    {
      title: "¿Qué es un Artefacto (Artifact) en CI/CD y cuándo se genera?",
      response:
        "Es un archivo o conjunto de archivos generado durante un job de build (ej. directorio `dist/`, reporte de cobertura de tests, imagen Docker o paquete npm) que se guarda temporalmente en el sistema de CI para ser consumido por jobs posteriores de despliegue.",
      level: "medio"
    },
    {
      title: "¿Cómo se gestionan Secretos y Variables de Entorno de forma segura?",
      response:
        "Utilizando gestores de secretos dedicados (GitHub Actions Secrets, AWS Secrets Manager, HashiCorp Vault). Los secretos nunca se commitean en Git, se inyectan en tiempo de ejecución del runner y se enmascaran automáticamente en los logs de salida.",
      level: "medio"
    },
    {
      title: "¿Cómo funciona el Caching de dependencias y builds en GitHub Actions?",
      response:
        "Usando `actions/cache` o `setup-node` con caché nativo (`cache: 'pnpm'`). Guarda y restaura el store de dependencias basado en el hash del lockfile (`pnpm-lock.yaml`), reduciendo el tiempo de ejecución del pipeline de minutos a segundos.",
      level: "medio"
    },
    {
      title: "¿Qué es una Matriz de Ejecución (Matrix Strategy)?",
      response:
        "Una configuración de pipeline que ejecuta un job en múltiples combinaciones de entornos simultáneamente (ej. Node.js 18, 20, 22 sobre Ubuntu, macOS y Windows), asegurando compatibilidad multiplataforma sin duplicar código YAML.",
      level: "medio"
    },
    // === AVANZADO ===
    {
      title: "¿Qué estrategias de despliegue existen: Blue-Green vs Canary vs Rolling?",
      response:
        "**Blue-Green**: dos entornos idénticos; se despliega en el inactivo (Green) y se conmuta el router instantáneamente. **Canary**: se envía la nueva versión al 5-10% del tráfico y se escala tras monitorear errores. **Rolling**: se actualizan instancias secuencialmente sin downtime.",
      level: "avanzado"
    },
    {
      title: "¿Cómo integrar Lighthouse CI (LHCI) en el pipeline para auditar Core Web Vitals?",
      response:
        "Ejecutando `@lhci/cli` en el pipeline contra un build local o preview deploy. Establece presupuestos de rendimiento (Performance Budget), fallando el PR si las métricas de Performance, Accesibilidad, SEO o LCP caen por debajo de los umbrales configurados.",
      level: "avanzado"
    },
    {
      title: "¿Qué son los Preview Deployments / Ephemeral Environments?",
      response:
        "Son despliegues automáticos y aislados de cada Pull Request en una URL única temporal (como hace Vercel o Cloudflare Pages). Permite que QA, diseñadores y stakeholders prueben los cambios visual y funcionalmente antes del merge a `main`.",
      level: "avanzado"
    },
    {
      title: "¿Qué es SAST y DAST en la seguridad de pipelines?",
      response:
        "**SAST** (Static Application Security Testing): analiza el código fuente estático en busca de vulnerabilidades conocidas (SonarQube, Snyk Code, CodeQL). **DAST** (Dynamic Application Security Testing): ataca la app en ejecución en un entorno de staging (OWASP ZAP) para detectar fallos en runtime.",
      level: "avanzado"
    },
    {
      title: "¿Cómo implementar Feature Flags en combinación con CI/CD?",
      response:
        "Permite desacoplar el **despliegue de código** de la **activación de la funcionalidad**. Usando plataformas como LaunchDarkly o flags propios, el código nuevo se despliega a producción en modo apagado y se activa progresivamente a usuarios específicos sin nuevos builds.",
      level: "avanzado"
    },
    // === EXPERTO ===
    {
      title: "¿Qué es GitOps y cómo funciona con ArgoCD / Flux?",
      response:
        "Es un modelo operativo donde un repositorio Git es la 'única fuente de verdad' para la infraestructura y estado deseado de la aplicación. Un operador dentro del clúster (ArgoCD) monitoriza el repo y aplica reconciliaciones automáticas para corregir cualquier 'drift' de configuración.",
      level: "experto"
    },
    {
      title: "¿Cómo lograr Zero-Downtime y Atomic Frontend Deployments a nivel de CDN?",
      response:
        "Subiendo los assets estáticos con content-hashing inmutable a un bucket S3/Cloud Storage, manteniendo todas las versiones previas disponibles (evitando errores 404 en usuarios con sesiones abiertas). El archivo `index.html` se actualiza de forma atómica invalidando solo su entrada en el CDN edge.",
      level: "experto"
    },
    {
      title: "¿Cómo diseñar una estrategia de Rollback Automático basada en métricas de observabilidad?",
      response:
        "Integrando herramientas como Datadog, Sentry o Prometheus en el pipeline de CD. Si tras un despliegue Canary la tasa de errores HTTP 5xx o excepciones JS supera el 0.1%, el pipeline dispara un webhook de rollback automático en segundos sin intervención humana.",
      level: "experto"
    },
    {
      title: "¿Cómo asegurar la Supply Chain Security (SLSA framework) en frontend?",
      response:
        "Implementando firmas criptográficas de commits y artefactos (Sigstore/Cosign), generando Software Bill of Materials (SBOM) con CycloneDX, usando lockfiles inmutables congelados (`--frozen-lockfile`) y verificando procedencia de paquetes npm contra ataques de typosquatting y malware inyectado.",
      level: "experto"
    }
  ]
};

export default questionsCICD;
