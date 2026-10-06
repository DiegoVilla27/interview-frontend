import { DiagramRegistry } from "../diagram.types";

/** Diagramas SVG del módulo CI/CD. */
export const cicdDiagrams: DiagramRegistry = {
  "cicd-pipeline-ci-cd-cd-flow": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Header */}
      <text x="320" y="32" fill={textColor} fontWeight="bold" fontSize="12" textAnchor="middle">Flujo Completo: Continuous Integration vs Delivery vs Deployment</text>

      {/* Stage 1: CI */}
      <rect x="25" y="50" width="180" height="135" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="115" y="68" fill="#60a5fa" fontWeight="bold" fontSize="10" textAnchor="middle">1. Continuous Integration</text>
      <rect x="35" y="78" width="160" height="24" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="115" y="94" fill={textColor} fontSize="8" textAnchor="middle">Code Push &amp; Pull Request</text>
      <rect x="35" y="108" width="160" height="24" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="115" y="124" fill="#3b82f6" fontSize="8" fontWeight="bold" textAnchor="middle">Lint, Typecheck, Tests Unitarios</text>
      <text x="115" y="152" fill={subtextColor} fontSize="7" textAnchor="middle">• Previene el &quot;Integration Hell&quot;</text>
      <text x="115" y="166" fill="#10b981" fontSize="7" fontWeight="bold" textAnchor="middle">✅ Validaciones Continuas</text>

      {/* Arrow 1 -> 2 */}
      <path d="M210 115 L225 115" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrow)" />

      {/* Stage 2: Continuous Delivery */}
      <rect x="230" y="50" width="180" height="135" rx="8" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#818cf8" strokeWidth="1.5" />
      <text x="320" y="68" fill="#818cf8" fontWeight="bold" fontSize="10" textAnchor="middle">2. Continuous Delivery</text>
      <rect x="240" y="78" width="160" height="24" rx="4" fill={isDark ? "#1e1b4b" : "#ffffff"} />
      <text x="320" y="94" fill={textColor} fontSize="8" textAnchor="middle">Build de Producción &amp; E2E</text>
      <rect x="240" y="108" width="160" height="24" rx="4" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1" />
      <text x="320" y="124" fill="#d97706" fontSize="8" fontWeight="bold" textAnchor="middle">⏸ Aprobación Manual Humana</text>
      <text x="320" y="152" fill={subtextColor} fontSize="7" textAnchor="middle">• Empaquetado listo para release</text>
      <text x="320" y="166" fill="#818cf8" fontSize="7" fontWeight="bold" textAnchor="middle">📦 Deploy a Staging Automático</text>

      {/* Arrow 2 -> 3 */}
      <path d="M415 115 L430 115" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow)" />

      {/* Stage 3: Continuous Deployment */}
      <rect x="435" y="50" width="180" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="525" y="68" fill="#10b981" fontWeight="bold" fontSize="10" textAnchor="middle">3. Continuous Deployment</text>
      <rect x="445" y="78" width="160" height="24" rx="4" fill={isDark ? "#022c22" : "#ffffff"} />
      <text x="525" y="94" fill={textColor} fontSize="8" textAnchor="middle">Merge a rama &apos;main&apos;</text>
      <rect x="445" y="108" width="160" height="24" rx="4" fill="#d1fae5" stroke="#10b981" strokeWidth="1" />
      <text x="525" y="124" fill="#047857" fontSize="8" fontWeight="bold" textAnchor="middle">⚡ Despliegue 100% Automático</text>
      <text x="525" y="152" fill={subtextColor} fontSize="7" textAnchor="middle">• Sin intervención humana</text>
      <text x="525" y="166" fill="#059669" fontSize="7" fontWeight="bold" textAnchor="middle">🚀 Producción en Minutos</text>

      <rect x="25" y="193" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="204" fill={subtextColor} fontSize="7.5" textAnchor="middle">CI valida calidad; Continuous Delivery deja el paquete listo con aprobación manual; Continuous Deployment automatiza hasta producción.</text>
    </svg>
  );
  },

  "cicd-stages-jobs-dependencies-dag": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="11" textAnchor="middle">Grafo Acíclico Dirigido (DAG): Dependencias y Paralelismo en Pipelines</text>

      {/* Stage 1 Parallel Jobs: Lint & Unit Tests */}
      <rect x="30" y="50" width="140" height="50" rx="6" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="100" y="70" fill="#60a5fa" fontWeight="bold" fontSize="9" textAnchor="middle">Job: lint-and-types</text>
      <text x="100" y="86" fill={subtextColor} fontSize="7" textAnchor="middle">eslint + tsc --noEmit</text>

      <rect x="30" y="125" width="140" height="50" rx="6" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="100" y="145" fill="#60a5fa" fontWeight="bold" fontSize="9" textAnchor="middle">Job: unit-tests</text>
      <text x="100" y="161" fill={subtextColor} fontSize="7" textAnchor="middle">vitest run --coverage</text>

      {/* Arrows to Build */}
      <path d="M175 75 L230 110" stroke="#3b82f6" strokeWidth="1.5" markerEnd="url(#arrow)" />
      <path d="M175 150 L230 115" stroke="#3b82f6" strokeWidth="1.5" markerEnd="url(#arrow)" />

      {/* Stage 2: Build Job */}
      <rect x="235" y="85" width="150" height="60" rx="6" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#818cf8" strokeWidth="1.5" />
      <text x="310" y="106" fill="#818cf8" fontWeight="bold" fontSize="9" textAnchor="middle">Job: build-app</text>
      <text x="310" y="120" fill="#a5b4fc" fontSize="7" fontFamily="monospace" textAnchor="middle">needs: [lint, tests]</text>
      <text x="310" y="134" fill={subtextColor} fontSize="7" textAnchor="middle">Genera artefacto dist/</text>

      {/* Arrows from Build to Deploy Staging & E2E */}
      <path d="M390 105 L445 75" stroke="#10b981" strokeWidth="1.5" markerEnd="url(#arrow)" />
      <path d="M390 125 L445 155" stroke="#10b981" strokeWidth="1.5" markerEnd="url(#arrow)" />

      {/* Stage 3: E2E and Staging */}
      <rect x="450" y="50" width="155" height="50" rx="6" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="527" y="70" fill="#34d399" fontWeight="bold" fontSize="9" textAnchor="middle">Job: deploy-staging</text>
      <text x="527" y="86" fill={textColor} fontSize="7" textAnchor="middle">needs: [build-app]</text>

      <rect x="450" y="125" width="155" height="50" rx="6" fill={isDark ? "#2e1065" : "#faf5ff"} stroke="#a855f7" strokeWidth="1.5" />
      <text x="527" y="145" fill="#c084fc" fontWeight="bold" fontSize="9" textAnchor="middle">Job: e2e-playwright</text>
      <text x="527" y="161" fill={textColor} fontSize="7" textAnchor="middle">needs: [deploy-staging]</text>

      <rect x="30" y="192" width="575" height="16" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="317" y="204" fill={subtextColor} fontSize="7.5" textAnchor="middle">La cláusula &apos;needs&apos; modela la orquestación DAG: paralelismo masivo inicial y convergencia secuencial antes del despliegue.</text>
    </svg>
  );
  },

  "cicd-runners-hosted-vs-self-hosted": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      <text x="320" y="32" fill={textColor} fontWeight="bold" fontSize="11" textAnchor="middle">Comparativa Arquitectónica: Hosted Runners vs Self-Hosted Runners</text>

      {/* Cloud Hosted Runners */}
      <rect x="30" y="50" width="270" height="135" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="165" y="70" fill="#60a5fa" fontWeight="bold" fontSize="10.5" textAnchor="middle">GitHub-Hosted Runners</text>
      <rect x="40" y="80" width="250" height="22" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="165" y="95" fill={textColor} fontSize="7.5" textAnchor="middle">Máquinas virtuales limpias y efímeras por job</text>
      <text x="45" y="120" fill={textColor} fontSize="7.5">✅ Mantenimiento cero (parches SO y software listo)</text>
      <text x="45" y="135" fill={textColor} fontSize="7.5">✅ Aislamiento total de seguridad entre ejecuciones</text>
      <text x="45" y="150" fill="#ef4444" fontSize="7.5">❌ Sin acceso directo a VPC o recursos privados</text>
      <text x="45" y="165" fill="#ef4444" fontSize="7.5">❌ Límites de hardware y coste alto por minuto</text>

      {/* Self Hosted Runners */}
      <rect x="340" y="50" width="270" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="475" y="70" fill="#34d399" fontWeight="bold" fontSize="10.5" textAnchor="middle">Self-Hosted (Kubernetes ARC)</text>
      <rect x="350" y="80" width="250" height="22" rx="4" fill={isDark ? "#022c22" : "#ffffff"} />
      <text x="475" y="95" fill={textColor} fontSize="7.5" textAnchor="middle">Pods en clúster propio con Actions Runner Controller</text>
      <text x="355" y="120" fill={textColor} fontSize="7.5">✅ Acceso nativo a VPC privada, bases de datos y registros</text>
      <text x="355" y="135" fill={textColor} fontSize="7.5">✅ Hardware a medida (CPUs dedicadas, GPUs, SSDs)</text>
      <text x="355" y="150" fill={textColor} fontSize="7.5">✅ Caché persistente en disco sin límites de red</text>
      <text x="355" y="165" fill="#f59e0b" fontSize="7.5">⚠️ Requiere gestión de escalado y seguridad de pods</text>

      <rect x="30" y="193" width="580" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="204" fill={subtextColor} fontSize="7.5" textAnchor="middle">Hosted es ideal para simplicidad y aislamiento; Self-Hosted con ARC en K8s optimiza costes y acceso a redes corporativas.</text>
    </svg>
  );
  },

  "cicd-secrets-oidc-federation": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="11" textAnchor="middle">Federación de Identidad OIDC: Adiós a Secretos de Larga Duración</text>

      {/* Step 1: Runner */}
      <rect x="25" y="50" width="165" height="135" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="107" y="70" fill="#60a5fa" fontWeight="bold" fontSize="9.5" textAnchor="middle">1. CI Runner (Job)</text>
      <rect x="35" y="80" width="145" height="35" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="107" y="95" fill={textColor} fontSize="7" textAnchor="middle">Solicita token OIDC</text>
      <text x="107" y="107" fill="#3b82f6" fontSize="6.5" fontFamily="monospace" textAnchor="middle">id-token: write</text>
      <text x="107" y="132" fill={subtextColor} fontSize="7" textAnchor="middle">Sin Access Keys estáticas</text>
      <text x="107" y="145" fill={subtextColor} fontSize="7" textAnchor="middle">guardadas en el repo</text>
      <text x="107" y="165" fill="#10b981" fontSize="7" fontWeight="bold" textAnchor="middle">🔐 Cero Fuga de Credenciales</text>

      {/* Arrow 1 -> 2 */}
      <path d="M195 105 L225 105" stroke="#3b82f6" strokeWidth="1.5" markerEnd="url(#arrow)" />

      {/* Step 2: GitHub OIDC Provider */}
      <rect x="230" y="50" width="170" height="135" rx="8" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#818cf8" strokeWidth="1.5" />
      <text x="315" y="70" fill="#818cf8" fontWeight="bold" fontSize="9.5" textAnchor="middle">2. OIDC Provider (GitHub)</text>
      <rect x="240" y="80" width="150" height="42" rx="4" fill={isDark ? "#1e1b4b" : "#ffffff"} />
      <text x="315" y="95" fill="#a5b4fc" fontSize="7" fontWeight="bold" textAnchor="middle">Emite JWT firmado</text>
      <text x="315" y="107" fill={textColor} fontSize="6.5" textAnchor="middle">Claims: repo, actor, branch, env</text>
      <text x="315" y="135" fill={subtextColor} fontSize="7" textAnchor="middle">Firma criptográfica P-256</text>
      <text x="315" y="148" fill={subtextColor} fontSize="7" textAnchor="middle">válida durante 1 hora</text>
      <text x="315" y="165" fill="#818cf8" fontSize="7" fontWeight="bold" textAnchor="middle">📜 Identidad Verificable</text>

      {/* Arrow 2 -> 3 */}
      <path d="M405 105 L435 105" stroke="#10b981" strokeWidth="1.5" markerEnd="url(#arrow)" />

      {/* Step 3: Cloud IAM */}
      <rect x="440" y="50" width="175" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="527" y="70" fill="#10b981" fontWeight="bold" fontSize="9.5" textAnchor="middle">3. Cloud IAM (AWS / GCP)</text>
      <rect x="450" y="80" width="155" height="42" rx="4" fill={isDark ? "#022c22" : "#ffffff"} />
      <text x="527" y="95" fill="#047857" fontSize="7" fontWeight="bold" textAnchor="middle">AssumeRoleWithWebIdentity</text>
      <text x="527" y="107" fill={textColor} fontSize="6.5" textAnchor="middle">Valida emisor y repo exacto</text>
      <text x="527" y="135" fill={textColor} fontSize="7" textAnchor="middle">Retorna credenciales STS</text>
      <text x="527" y="148" fill={textColor} fontSize="7" textAnchor="middle">efímeras para el despliegue</text>
      <text x="527" y="165" fill="#059669" fontSize="7" fontWeight="bold" textAnchor="middle">🛡️ Mínimo Privilegio</text>

      <rect x="25" y="193" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="204" fill={subtextColor} fontSize="7.5" textAnchor="middle">OIDC elimina las claves estáticas de AWS/GCP: el proveedor emite tokens de corta duración verificados contra roles de IAM.</text>
    </svg>
  );
  },

  "cicd-caching-monorepo-hash": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="11" textAnchor="middle">Estrategias de Caching Inteligente y Remote Cache en Monorepos</text>

      {/* Lockfile & Inputs Hash */}
      <rect x="25" y="50" width="165" height="135" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="107" y="70" fill="#60a5fa" fontWeight="bold" fontSize="9.5" textAnchor="middle">1. Hashing de Inputs</text>
      <rect x="35" y="80" width="145" height="35" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="107" y="94" fill={textColor} fontSize="6.5" fontFamily="monospace" textAnchor="middle">hash(pnpm-lock.yaml)</text>
      <text x="107" y="106" fill={textColor} fontSize="6.5" fontFamily="monospace" textAnchor="middle">+ hash(src/**)</text>
      <text x="107" y="132" fill={subtextColor} fontSize="7" textAnchor="middle">Calcula la firma de código</text>
      <text x="107" y="145" fill={subtextColor} fontSize="7" textAnchor="middle">antes de compilar o testear</text>
      <text x="107" y="165" fill="#3b82f6" fontSize="7" fontWeight="bold" textAnchor="middle">Clave Determinista</text>

      {/* Split: Hit vs Miss */}
      <path d="M195 90 L240 75" stroke="#10b981" strokeWidth="1.5" markerEnd="url(#arrow)" />
      <path d="M195 140 L240 155" stroke="#f59e0b" strokeWidth="1.5" markerEnd="url(#arrow)" />

      {/* Remote Cache Bucket */}
      <rect x="245" y="50" width="170" height="60" rx="6" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="330" y="68" fill="#10b981" fontWeight="bold" fontSize="9" textAnchor="middle">⚡ CACHE HIT (Turborepo / Nx)</text>
      <text x="330" y="82" fill={textColor} fontSize="7" textAnchor="middle">Restaura artefactos dist/ y logs en 1.2s</text>
      <text x="330" y="96" fill="#047857" fontSize="7" fontWeight="bold" textAnchor="middle">Replay instantáneo sin recompilar</text>

      <rect x="245" y="125" width="170" height="60" rx="6" fill={isDark ? "#451a03" : "#fffbeb"} stroke="#f59e0b" strokeWidth="1.5" />
      <text x="330" y="143" fill="#d97706" fontWeight="bold" fontSize="9" textAnchor="middle">⚠️ CACHE MISS</text>
      <text x="330" y="157" fill={textColor} fontSize="7" textAnchor="middle">Ejecuta compilación completa (45s)</text>
      <text x="330" y="171" fill="#b45309" fontSize="7" fontWeight="bold" textAnchor="middle">Sube nuevo artefacto al caché cloud</text>

      {/* Impact Metric */}
      <rect x="435" y="50" width="180" height="135" rx="8" fill={isDark ? "#2e1065" : "#faf5ff"} stroke="#a855f7" strokeWidth="1.5" />
      <text x="525" y="70" fill="#c084fc" fontWeight="bold" fontSize="9.5" textAnchor="middle">Impacto en CI/CD</text>
      <rect x="445" y="82" width="160" height="30" rx="4" fill={isDark ? "#1e1b4b" : "#ffffff"} />
      <text x="525" y="98" fill="#a855f7" fontSize="9" fontWeight="bold" textAnchor="middle">Reducción del 85%</text>
      <text x="525" y="106" fill={subtextColor} fontSize="6" textAnchor="middle">de tiempo de ejecución en PRs</text>
      <text x="525" y="132" fill={textColor} fontSize="7" textAnchor="middle">• Compartido entre todos los devs</text>
      <text x="525" y="146" fill={textColor} fontSize="7" textAnchor="middle">• Ahorro masivo en minutos CI</text>
      <text x="525" y="165" fill="#10b981" fontSize="7" fontWeight="bold" textAnchor="middle">🚀 Feedback Inmediato</text>

      <rect x="25" y="193" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="204" fill={subtextColor} fontSize="7.5" textAnchor="middle">El caching distribuido en monorepos reutiliza resultados de compilación y tests si los hashes de entrada no han cambiado.</text>
    </svg>
  );
  },

  "cicd-matrix-strategy-matrix": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="11" textAnchor="middle">Estrategia de Matrices: Ejecución Cruzada Multiplataforma en Paralelo</text>

      {/* Matrix Definition */}
      <rect x="25" y="50" width="180" height="135" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="115" y="70" fill="#60a5fa" fontWeight="bold" fontSize="9.5" textAnchor="middle">Configuración YAML</text>
      <rect x="35" y="80" width="160" height="60" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="42" y="95" fill="#60a5fa" fontSize="6.5" fontFamily="monospace">strategy:</text>
      <text x="42" y="106" fill={textColor} fontSize="6.5" fontFamily="monospace">  matrix:</text>
      <text x="52" y="117" fill="#34d399" fontSize="6.5" fontFamily="monospace">os: [ubuntu, macos, win]</text>
      <text x="52" y="128" fill="#c084fc" fontSize="6.5" fontFamily="monospace">node: [18, 20, 22]</text>
      <text x="115" y="156" fill={subtextColor} fontSize="7" textAnchor="middle">Producto Cartesiano: 3 x 3</text>
      <text x="115" y="170" fill="#3b82f6" fontSize="7" fontWeight="bold" textAnchor="middle">= 9 Jobs Paralelos</text>

      {/* Arrow */}
      <path d="M210 115 L235 115" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrow)" />

      {/* Parallel Runners Grid */}
      <rect x="240" y="50" width="375" height="135" rx="8" fill={isDark ? "#0f172a" : "#ffffff"} stroke={border} strokeWidth="1.5" />
      <text x="427" y="68" fill={textColor} fontWeight="bold" fontSize="9.5" textAnchor="middle">Matriz de Ejecución Concurrente</text>

      {/* Row 1 */}
      <rect x="255" y="78" width="110" height="24" rx="4" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#10b981" strokeWidth="1" />
      <text x="310" y="93" fill="#10b981" fontSize="7" fontWeight="bold" textAnchor="middle">ubuntu • node 18 ✅</text>

      <rect x="375" y="78" width="110" height="24" rx="4" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#10b981" strokeWidth="1" />
      <text x="430" y="93" fill="#10b981" fontSize="7" fontWeight="bold" textAnchor="middle">ubuntu • node 20 ✅</text>

      <rect x="495" y="78" width="110" height="24" rx="4" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#10b981" strokeWidth="1" />
      <text x="550" y="93" fill="#10b981" fontSize="7" fontWeight="bold" textAnchor="middle">ubuntu • node 22 ✅</text>

      {/* Row 2 */}
      <rect x="255" y="108" width="110" height="24" rx="4" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#10b981" strokeWidth="1" />
      <text x="310" y="123" fill="#10b981" fontSize="7" fontWeight="bold" textAnchor="middle">macos • node 18 ✅</text>

      <rect x="375" y="108" width="110" height="24" rx="4" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#10b981" strokeWidth="1" />
      <text x="430" y="123" fill="#10b981" fontSize="7" fontWeight="bold" textAnchor="middle">macos • node 20 ✅</text>

      <rect x="495" y="108" width="110" height="24" rx="4" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#10b981" strokeWidth="1" />
      <text x="550" y="123" fill="#10b981" fontSize="7" fontWeight="bold" textAnchor="middle">macos • node 22 ✅</text>

      {/* Row 3 */}
      <rect x="255" y="138" width="110" height="24" rx="4" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#10b981" strokeWidth="1" />
      <text x="310" y="153" fill="#10b981" fontSize="7" fontWeight="bold" textAnchor="middle">windows • node 18 ✅</text>

      <rect x="375" y="138" width="110" height="24" rx="4" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#10b981" strokeWidth="1" />
      <text x="430" y="153" fill="#10b981" fontSize="7" fontWeight="bold" textAnchor="middle">windows • node 20 ✅</text>

      <rect x="495" y="138" width="110" height="24" rx="4" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#10b981" strokeWidth="1" />
      <text x="550" y="153" fill="#10b981" fontSize="7" fontWeight="bold" textAnchor="middle">windows • node 22 ✅</text>

      <rect x="255" y="168" width="350" height="12" rx="2" fill={isDark ? "#1e1b4b" : "#ede9fe"} />
      <text x="430" y="177" fill="#818cf8" fontSize="6.5" textAnchor="middle">Soporta fail-fast: true/false para cancelar jobs restantes si uno falla.</text>

      <rect x="25" y="193" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="204" fill={subtextColor} fontSize="7.5" textAnchor="middle">Matrix strategy garantiza la compatibilidad multi-entorno sin duplicación de código en el archivo de pipeline.</text>
    </svg>
  );
  },

  "cicd-preview-ephemeral-environments": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="11" textAnchor="middle">Preview Deployments y Entornos Efímeros por Pull Request</text>

      {/* Step 1: PR creation */}
      <rect x="25" y="50" width="165" height="135" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="107" y="70" fill="#60a5fa" fontWeight="bold" fontSize="9.5" textAnchor="middle">1. Pull Request #142</text>
      <rect x="35" y="80" width="145" height="35" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="107" y="95" fill={textColor} fontSize="7" textAnchor="middle">feat: checkout-redesign</text>
      <text x="107" y="106" fill={subtextColor} fontSize="6.5" textAnchor="middle">Dispara GitHub Action</text>
      <text x="107" y="132" fill={textColor} fontSize="7" textAnchor="middle">• Compila build aislado</text>
      <text x="107" y="145" fill={textColor} fontSize="7" textAnchor="middle">• Inyecta variables de preview</text>
      <text x="107" y="165" fill="#3b82f6" fontSize="7" fontWeight="bold" textAnchor="middle">Disparo Automático</text>

      {/* Arrow 1 -> 2 */}
      <path d="M195 105 L225 105" stroke="#3b82f6" strokeWidth="1.5" markerEnd="url(#arrow)" />

      {/* Step 2: Ephemeral URL */}
      <rect x="230" y="50" width="180" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="320" y="70" fill="#10b981" fontWeight="bold" fontSize="9.5" textAnchor="middle">2. Despliegue Efímero</text>
      <rect x="240" y="80" width="160" height="38" rx="4" fill="#d1fae5" stroke="#10b981" strokeWidth="1" />
      <text x="320" y="96" fill="#047857" fontSize="7" fontFamily="monospace" fontWeight="bold" textAnchor="middle">pr-142.preview.app</text>
      <text x="320" y="108" fill="#065f46" fontSize="6.5" textAnchor="middle">Entorno aislado en el Edge</text>
      <text x="320" y="132" fill={textColor} fontSize="7" textAnchor="middle">• QA y Diseño prueban en vivo</text>
      <text x="320" y="145" fill={textColor} fontSize="7" textAnchor="middle">• Tests E2E corren contra esta URL</text>
      <text x="320" y="165" fill="#10b981" fontSize="7" fontWeight="bold" textAnchor="middle">🌐 URL Pública Única</text>

      {/* Arrow 2 -> 3 */}
      <path d="M415 105 L445 105" stroke="#a855f7" strokeWidth="1.5" markerEnd="url(#arrow)" />

      {/* Step 3: Lifecycle Management */}
      <rect x="450" y="50" width="165" height="135" rx="8" fill={isDark ? "#2e1065" : "#faf5ff"} stroke="#a855f7" strokeWidth="1.5" />
      <text x="532" y="70" fill="#c084fc" fontWeight="bold" fontSize="9.5" textAnchor="middle">3. Teardown / Cleanup</text>
      <rect x="460" y="80" width="145" height="35" rx="4" fill={isDark ? "#1e1b4b" : "#ffffff"} />
      <text x="532" y="95" fill="#c084fc" fontSize="7" fontWeight="bold" textAnchor="middle">Al mergear o cerrar PR:</text>
      <text x="532" y="106" fill={textColor} fontSize="6.5" textAnchor="middle">Destrucción automática</text>
      <text x="532" y="132" fill={textColor} fontSize="7" textAnchor="middle">• Cero infra huérfana</text>
      <text x="532" y="145" fill={textColor} fontSize="7" textAnchor="middle">• Cero costes innecesarios</text>
      <text x="532" y="165" fill="#a855f7" fontSize="7" fontWeight="bold" textAnchor="middle">♻️ Limpieza Garantizada</text>

      <rect x="25" y="193" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="204" fill={subtextColor} fontSize="7.5" textAnchor="middle">Los entornos efímeros permiten validar el comportamiento visual y funcional de cada PR en aislamiento total antes del merge.</text>
    </svg>
  );
  },

  "cicd-quality-gates-coverage-bot": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="11" textAnchor="middle">Quality Gates Automatizados en Pull Requests</text>

      {/* Validation Steps */}
      <rect x="25" y="50" width="260" height="135" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="155" y="70" fill="#60a5fa" fontWeight="bold" fontSize="10" textAnchor="middle">Gates de Validación Requeridos</text>

      <rect x="35" y="80" width="240" height="22" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="45" y="94" fill="#10b981" fontSize="7.5">✅ ESLint &amp; Prettier: 0 errores / 0 warnings</text>

      <rect x="35" y="106" width="240" height="22" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="45" y="120" fill="#10b981" fontSize="7.5">✅ TypeScript: tsc --noEmit estricto</text>

      <rect x="35" y="132" width="240" height="22" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="45" y="146" fill="#10b981" fontSize="7.5">✅ Cobertura de Tests: 84.6% (&gt; umbral 80%)</text>

      <rect x="35" y="158" width="240" height="20" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="45" y="172" fill="#10b981" fontSize="7.5">✅ Audit: 0 vulnerabilidades críticas/altas</text>

      {/* Arrow */}
      <path d="M290 115 L320 115" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow)" />

      {/* Automated PR Bot Card */}
      <rect x="325" y="50" width="290" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="470" y="70" fill="#10b981" fontWeight="bold" fontSize="10" textAnchor="middle">🤖 GitHub Bot: Reporte de Cobertura</text>

      <rect x="335" y="80" width="270" height="70" rx="4" fill={isDark ? "#022c22" : "#ffffff"} stroke={border} strokeWidth="1" />
      <text x="345" y="95" fill={textColor} fontSize="7" fontWeight="bold">Coverage Summary:</text>
      <text x="345" y="108" fill={subtextColor} fontSize="6.5">Statements: 86.2% | Branches: 81.4%</text>
      <text x="345" y="119" fill={subtextColor} fontSize="6.5">Functions:  89.0% | Lines:    85.8%</text>
      <text x="345" y="136" fill="#10b981" fontSize="7" fontWeight="bold">🟢 All checks have passed • Merge habilitado</text>

      <rect x="335" y="156" width="270" height="22" rx="4" fill={isDark ? "#1e293b" : "#d1fae5"} />
      <text x="470" y="170" fill="#047857" fontSize="7" fontWeight="bold" textAnchor="middle">Branch Protection Rule: Require Status Checks</text>

      <rect x="25" y="193" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="204" fill={subtextColor} fontSize="7.5" textAnchor="middle">Las Branch Protection Rules bloquean el merge a &apos;main&apos; si cualquiera de los Quality Gates falla en el runner.</text>
    </svg>
  );
  },

  "cicd-lighthouse-ci-performance-budgets": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="11" textAnchor="middle">Lighthouse CI (LHCI): Presupuestos de Rendimiento en Pipelines</text>

      {/* Performance Budget Config */}
      <rect x="25" y="50" width="200" height="135" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="125" y="70" fill="#60a5fa" fontWeight="bold" fontSize="9.5" textAnchor="middle">Presupuestos (@lhci/cli)</text>
      <rect x="35" y="80" width="180" height="65" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="42" y="95" fill={textColor} fontSize="6.5" fontFamily="monospace">assert: &#123;</text>
      <text x="50" y="106" fill="#10b981" fontSize="6.5" fontFamily="monospace">&quot;categories:performance&quot;: 0.90</text>
      <text x="50" y="117" fill="#3b82f6" fontSize="6.5" fontFamily="monospace">&quot;largest-contentful-paint&quot;: 2500</text>
      <text x="50" y="128" fill="#f59e0b" fontSize="6.5" fontFamily="monospace">&quot;cumulative-layout-shift&quot;: 0.10</text>
      <text x="42" y="139" fill={textColor} fontSize="6.5" fontFamily="monospace">&#125;</text>
      <text x="125" y="165" fill={subtextColor} fontSize="7" textAnchor="middle">Umbrales estrictos por ruta</text>

      {/* Arrow */}
      <path d="M230 115 L255 115" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrow)" />

      {/* Execution Card */}
      <rect x="260" y="50" width="355" height="135" rx="8" fill={isDark ? "#0f172a" : "#ffffff"} stroke={border} strokeWidth="1.5" />
      <text x="437" y="68" fill={textColor} fontWeight="bold" fontSize="9.5" textAnchor="middle">Auditoría Automatizada contra Preview Deploy</text>

      {/* Score 1 */}
      <rect x="275" y="80" width="70" height="45" rx="6" fill="#d1fae5" stroke="#10b981" strokeWidth="1" />
      <text x="310" y="100" fill="#047857" fontSize="14" fontWeight="bold" textAnchor="middle">98</text>
      <text x="310" y="115" fill="#065f46" fontSize="6" textAnchor="middle">Performance</text>

      {/* Score 2 */}
      <rect x="360" y="80" width="70" height="45" rx="6" fill="#d1fae5" stroke="#10b981" strokeWidth="1" />
      <text x="395" y="100" fill="#047857" fontSize="14" fontWeight="bold" textAnchor="middle">100</text>
      <text x="395" y="115" fill="#065f46" fontSize="6" textAnchor="middle">Accessibility</text>

      {/* Score 3 */}
      <rect x="445" y="80" width="70" height="45" rx="6" fill="#d1fae5" stroke="#10b981" strokeWidth="1" />
      <text x="480" y="100" fill="#047857" fontSize="14" fontWeight="bold" textAnchor="middle">100</text>
      <text x="480" y="115" fill="#065f46" fontSize="6" textAnchor="middle">Best Practices</text>

      {/* Score 4 */}
      <rect x="530" y="80" width="70" height="45" rx="6" fill="#d1fae5" stroke="#10b981" strokeWidth="1" />
      <text x="565" y="100" fill="#047857" fontSize="14" fontWeight="bold" textAnchor="middle">100</text>
      <text x="565" y="115" fill="#065f46" fontSize="6" textAnchor="middle">SEO</text>

      <rect x="275" y="135" width="325" height="38" rx="4" fill={isDark ? "#1e293b" : "#f8fafc"} />
      <text x="285" y="149" fill={textColor} fontSize="7">• LCP: 1.4s (&lt; 2.5s) | CLS: 0.01 (&lt; 0.1) | TBT: 40ms</text>
      <text x="285" y="163" fill="#10b981" fontSize="7" fontWeight="bold">✅ Presupuesto de rendimiento CUMPLIDO: PR aprobado para merge</text>

      <rect x="25" y="193" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="204" fill={subtextColor} fontSize="7.5" textAnchor="middle">Lighthouse CI detiene PRs que degraden los Core Web Vitals antes de que lleguen a producción.</text>
    </svg>
  );
  },

  "cicd-deployment-strategies-blue-green-canary": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="11" textAnchor="middle">Estrategias de Despliegue: Blue-Green vs Canary Deployments</text>

      {/* Blue-Green Section */}
      <rect x="25" y="50" width="280" height="135" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="165" y="70" fill="#60a5fa" fontWeight="bold" fontSize="10" textAnchor="middle">Blue-Green Deployment</text>

      <rect x="35" y="80" width="120" height="40" rx="4" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1" />
      <text x="95" y="96" fill="#1d4ed8" fontSize="7.5" fontWeight="bold" textAnchor="middle">BLUE (v1.0)</text>
      <text x="95" y="110" fill="#1e40af" fontSize="6.5" textAnchor="middle">Tráfico: 100% ➔ 0%</text>

      <rect x="175" y="80" width="120" height="40" rx="4" fill="#d1fae5" stroke="#10b981" strokeWidth="1" />
      <text x="235" y="96" fill="#047857" fontSize="7.5" fontWeight="bold" textAnchor="middle">GREEN (v2.0)</text>
      <text x="235" y="110" fill="#065f46" fontSize="6.5" textAnchor="middle">Tráfico: 0% ➔ 100%</text>

      <path d="M155 100 L170 100" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="2 2" />
      <text x="165" y="138" fill={textColor} fontSize="7" textAnchor="middle">Conmutación atómica en Router/DNS</text>
      <text x="165" y="152" fill={subtextColor} fontSize="6.5" textAnchor="middle">Rollback instantáneo volviendo a Blue</text>
      <text x="165" y="168" fill="#3b82f6" fontSize="7" fontWeight="bold" textAnchor="middle">⚡ Cero Downtime</text>

      {/* Canary Section */}
      <rect x="330" y="50" width="285" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="472" y="70" fill="#10b981" fontWeight="bold" fontSize="10" textAnchor="middle">Canary Deployment</text>

      <rect x="340" y="80" width="130" height="40" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} stroke="#3b82f6" strokeWidth="1" />
      <text x="405" y="96" fill="#3b82f6" fontSize="7.5" fontWeight="bold" textAnchor="middle">Base (v1.0): 90%</text>
      <text x="405" y="110" fill={subtextColor} fontSize="6.5" textAnchor="middle">Mayoría del tráfico</text>

      <rect x="480" y="80" width="125" height="40" rx="4" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1" />
      <text x="542" y="96" fill="#d97706" fontSize="7.5" fontWeight="bold" textAnchor="middle">Canary (v2.0): 10%</text>
      <text x="542" y="110" fill="#b45309" fontSize="6.5" textAnchor="middle">Usuarios muestra</text>

      <text x="472" y="138" fill={textColor} fontSize="7" textAnchor="middle">Monitorea métricas en tiempo real</text>
      <text x="472" y="152" fill={subtextColor} fontSize="6.5" textAnchor="middle">Si tasa de error &lt; 0.01% ➔ escala a 100%</text>
      <text x="472" y="168" fill="#10b981" fontSize="7" fontWeight="bold" textAnchor="middle">🛡️ Riesgo Mínimo de Regresión</text>

      <rect x="25" y="193" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="204" fill={subtextColor} fontSize="7.5" textAnchor="middle">Blue-Green conmuta todo el tráfico tras pruebas en Green; Canary expone la nueva versión a un porcentaje pequeño de tráfico real.</text>
    </svg>
  );
  },

  "cicd-atomic-cdn-deployment-hashes": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="11" textAnchor="middle">Despliegue Atómico en CDN: Evitando el Error 404 en Chunks JS</text>

      {/* Step 1: Immutable Assets Upload */}
      <rect x="25" y="50" width="180" height="135" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="115" y="70" fill="#60a5fa" fontWeight="bold" fontSize="9.5" textAnchor="middle">Paso 1: Subir Assets Inmutables</text>
      <rect x="35" y="80" width="160" height="35" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="115" y="94" fill="#3b82f6" fontSize="6.5" fontFamily="monospace" textAnchor="middle">chunk.a81f.js</text>
      <text x="115" y="106" fill={subtextColor} fontSize="6" textAnchor="middle">Cache-Control: max-age=31536000</text>
      <text x="115" y="130" fill={textColor} fontSize="7" textAnchor="middle">• Nunca sobreescribir archivos</text>
      <text x="115" y="144" fill={textColor} fontSize="7" textAnchor="middle">• Preservar chunks de versiones previas</text>
      <text x="115" y="165" fill="#10b981" fontSize="7" fontWeight="bold" textAnchor="middle">📦 S3 / Cloud Storage</text>

      {/* Arrow 1 -> 2 */}
      <path d="M210 115 L235 115" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrow)" />

      {/* Step 2: Atomic Index Swap */}
      <rect x="240" y="50" width="180" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="330" y="70" fill="#10b981" fontWeight="bold" fontSize="9.5" textAnchor="middle">Paso 2: Reemplazo de index.html</text>
      <rect x="250" y="80" width="160" height="35" rx="4" fill={isDark ? "#022c22" : "#ffffff"} />
      <text x="330" y="94" fill="#10b981" fontSize="7" fontFamily="monospace" textAnchor="middle">index.html (v2.0)</text>
      <text x="330" y="106" fill={subtextColor} fontSize="6" textAnchor="middle">Cache-Control: no-cache</text>
      <text x="330" y="130" fill={textColor} fontSize="7" textAnchor="middle">• Subida atómica al bucket</text>
      <text x="330" y="144" fill={textColor} fontSize="7" textAnchor="middle">• Invalida la entrada en el Edge</text>
      <text x="330" y="165" fill="#059669" fontSize="7" fontWeight="bold" textAnchor="middle">⚡ Conmutación Instantánea</text>

      {/* Arrow 2 -> 3 */}
      <path d="M425 115 L450 115" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow)" />

      {/* Step 3: Result for Users */}
      <rect x="455" y="50" width="160" height="135" rx="8" fill={isDark ? "#2e1065" : "#faf5ff"} stroke="#a855f7" strokeWidth="1.5" />
      <text x="535" y="70" fill="#c084fc" fontWeight="bold" fontSize="9.5" textAnchor="middle">Resultado en Clientes</text>
      <rect x="465" y="80" width="140" height="35" rx="4" fill={isDark ? "#1e1b4b" : "#ffffff"} />
      <text x="535" y="94" fill="#10b981" fontSize="7" fontWeight="bold" textAnchor="middle">Sesiones Abiertas: OK</text>
      <text x="535" y="106" fill={subtextColor} fontSize="6.5" textAnchor="middle">Sus chunks viejos siguen en CDN</text>
      <text x="535" y="130" fill={textColor} fontSize="7" textAnchor="middle">• Nuevos usuarios reciben v2</text>
      <text x="535" y="144" fill={textColor} fontSize="7" textAnchor="middle">• 0 errores de carga dinámica</text>
      <text x="535" y="165" fill="#10b981" fontSize="7" fontWeight="bold" textAnchor="middle">🛡️ 0 Roturas de UI</text>

      <rect x="25" y="193" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="204" fill={subtextColor} fontSize="7.5" textAnchor="middle">Subir assets inmutables antes de reemplazar index.html previene que usuarios en pestañas abiertas sufran errores 404 de lazy loading.</text>
    </svg>
  );
  },

  "cicd-security-sast-dast-sbom": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="11" textAnchor="middle">DevSecOps en Pipelines: SAST, DAST y Software Bill of Materials (SBOM)</text>

      {/* 1. SAST */}
      <rect x="25" y="50" width="180" height="135" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="115" y="70" fill="#60a5fa" fontWeight="bold" fontSize="9.5" textAnchor="middle">1. SAST (Código Estático)</text>
      <rect x="35" y="80" width="160" height="30" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="115" y="98" fill="#3b82f6" fontSize="7.5" fontWeight="bold" textAnchor="middle">SonarQube / CodeQL</text>
      <text x="115" y="125" fill={textColor} fontSize="7" textAnchor="middle">• Detección de XSS y eval()</text>
      <text x="115" y="138" fill={textColor} fontSize="7" textAnchor="middle">• Secretos hardcodeados en Git</text>
      <text x="115" y="151" fill={textColor} fontSize="7" textAnchor="middle">• Escaneo del AST en tiempo de CI</text>
      <text x="115" y="168" fill="#3b82f6" fontSize="7" fontWeight="bold" textAnchor="middle">Análisis Previo al Build</text>

      {/* 2. Dependency Audit & SBOM */}
      <rect x="230" y="50" width="180" height="135" rx="8" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#818cf8" strokeWidth="1.5" />
      <text x="320" y="70" fill="#818cf8" fontWeight="bold" fontSize="9.5" textAnchor="middle">2. SBOM &amp; Dependencias</text>
      <rect x="240" y="80" width="160" height="30" rx="4" fill={isDark ? "#1e1b4b" : "#ffffff"} />
      <text x="320" y="98" fill="#818cf8" fontSize="7.5" fontWeight="bold" textAnchor="middle">Snyk / CycloneDX</text>
      <text x="320" y="125" fill={textColor} fontSize="7" textAnchor="middle">• Auditoría de CVEs en node_modules</text>
      <text x="320" y="138" fill={textColor} fontSize="7" textAnchor="middle">• Generación de SBOM estándar</text>
      <text x="320" y="151" fill={textColor} fontSize="7" textAnchor="middle">• Detección de licencias GPL no deseadas</text>
      <text x="320" y="168" fill="#818cf8" fontSize="7" fontWeight="bold" textAnchor="middle">Cadena de Suministro</text>

      {/* 3. DAST */}
      <rect x="435" y="50" width="180" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="525" y="70" fill="#10b981" fontWeight="bold" fontSize="9.5" textAnchor="middle">3. DAST (Dinámico en Runtime)</text>
      <rect x="445" y="80" width="160" height="30" rx="4" fill={isDark ? "#022c22" : "#ffffff"} />
      <text x="525" y="98" fill="#10b981" fontSize="7.5" fontWeight="bold" textAnchor="middle">OWASP ZAP / StackHawk</text>
      <text x="525" y="125" fill={textColor} fontSize="7" textAnchor="middle">• Ataques simulados a Staging</text>
      <text x="525" y="138" fill={textColor} fontSize="7" textAnchor="middle">• Verificación de cabeceras CSP/HSTS</text>
      <text x="525" y="151" fill={textColor} fontSize="7" textAnchor="middle">• Fugas de información en cookies</text>
      <text x="525" y="168" fill="#10b981" fontSize="7" fontWeight="bold" textAnchor="middle">Validación en Ejecución</text>

      <rect x="25" y="193" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="204" fill={subtextColor} fontSize="7.5" textAnchor="middle">La combinación SAST (código fuente), SBOM (dependencias) y DAST (entorno en vivo) blinda la seguridad del pipeline.</text>
    </svg>
  );
  },

  "cicd-supply-chain-sigstore-cosign": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="11" textAnchor="middle">Supply Chain Security: Firmas Criptográficas con Sigstore y Cosign</text>

      {/* Build Artifact */}
      <rect x="25" y="50" width="165" height="135" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="107" y="70" fill="#60a5fa" fontWeight="bold" fontSize="9.5" textAnchor="middle">1. Build Runner Aislado</text>
      <rect x="35" y="80" width="145" height="35" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="107" y="95" fill={textColor} fontSize="7" textAnchor="middle">Genera imagen o bundle</text>
      <text x="107" y="107" fill="#3b82f6" fontSize="6.5" fontFamily="monospace" textAnchor="middle">app:sha256-4f81c</text>
      <text x="107" y="132" fill={subtextColor} fontSize="7" textAnchor="middle">SLSA Level 3 Compliant</text>
      <text x="107" y="145" fill={subtextColor} fontSize="7" textAnchor="middle">Entorno hermético sin root</text>
      <text x="107" y="165" fill="#3b82f6" fontSize="7" fontWeight="bold" textAnchor="middle">Artefacto Inmutable</text>

      {/* Arrow 1 -> 2 */}
      <path d="M195 105 L225 105" stroke="#3b82f6" strokeWidth="1.5" markerEnd="url(#arrow)" />

      {/* Cosign Signing */}
      <rect x="230" y="50" width="175" height="135" rx="8" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#818cf8" strokeWidth="1.5" />
      <text x="317" y="70" fill="#818cf8" fontWeight="bold" fontSize="9.5" textAnchor="middle">2. Firma con Cosign</text>
      <rect x="240" y="80" width="155" height="35" rx="4" fill={isDark ? "#1e1b4b" : "#ffffff"} />
      <text x="317" y="95" fill="#a5b4fc" fontSize="7" fontFamily="monospace" textAnchor="middle">cosign sign --keyless</text>
      <text x="317" y="107" fill={textColor} fontSize="6.5" textAnchor="middle">Transparencia en Rekor Log</text>
      <text x="317" y="132" fill={subtextColor} fontSize="7" textAnchor="middle">Certificado de identidad efímero</text>
      <text x="317" y="145" fill={subtextColor} fontSize="7" textAnchor="middle">asociado al workflow de GitHub</text>
      <text x="317" y="165" fill="#818cf8" fontSize="7" fontWeight="bold" textAnchor="middle">Firma Criptográfica</text>

      {/* Arrow 2 -> 3 */}
      <path d="M410 105 L440 105" stroke="#10b981" strokeWidth="1.5" markerEnd="url(#arrow)" />

      {/* Admission Controller */}
      <rect x="445" y="50" width="170" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="530" y="70" fill="#10b981" fontWeight="bold" fontSize="9.5" textAnchor="middle">3. Admission Controller</text>
      <rect x="455" y="80" width="150" height="35" rx="4" fill="#d1fae5" stroke="#10b981" strokeWidth="1" />
      <text x="530" y="95" fill="#047857" fontSize="7" fontWeight="bold" textAnchor="middle">Policy: Kyverno / OPA</text>
      <text x="530" y="107" fill="#065f46" fontSize="6.5" textAnchor="middle">Valida firma antes de ejecutar</text>
      <text x="530" y="132" fill={textColor} fontSize="7" textAnchor="middle">• Rechaza binarios no firmados</text>
      <text x="530" y="145" fill={textColor} fontSize="7" textAnchor="middle">• Previene inyección de malware</text>
      <text x="530" y="165" fill="#059669" fontSize="7" fontWeight="bold" textAnchor="middle">🛡️ Producción Protegida</text>

      <rect x="25" y="193" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="204" fill={subtextColor} fontSize="7.5" textAnchor="middle">Cosign y Sigstore permiten verificar la procedencia criptográfica de los artefactos para blindar la cadena de suministro.</text>
    </svg>
  );
  },

  "cicd-feature-flags-decoupling-release": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="11" textAnchor="middle">Desacoplamiento: Despliegue Técnico (Deploy) != Lanzamiento a Usuarios (Release)</text>

      {/* Deploy Phase */}
      <rect x="25" y="50" width="270" height="135" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="160" y="70" fill="#60a5fa" fontWeight="bold" fontSize="10" textAnchor="middle">Despliegue a Producción (Deploy)</text>

      <rect x="35" y="80" width="250" height="35" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="160" y="95" fill={textColor} fontSize="7.5" textAnchor="middle">Código mergeado en main y desplegado</text>
      <text x="160" y="107" fill="#ef4444" fontSize="7" fontWeight="bold" textAnchor="middle">FLAG: new-checkout = FALSE (Apagado)</text>

      <text x="45" y="132" fill={textColor} fontSize="7">• Trunk-Based Development continuo</text>
      <text x="45" y="146" fill={textColor} fontSize="7">• Elimina ramas de larga duración (long-lived branches)</text>
      <text x="45" y="160" fill={textColor} fontSize="7">• Despliegues frecuentes de bajo impacto</text>
      <text x="160" y="174" fill="#3b82f6" fontSize="7" fontWeight="bold" textAnchor="middle">Evento Técnico sin Riesgo de Negocio</text>

      {/* Release Phase */}
      <rect x="340" y="50" width="275" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="477" y="70" fill="#10b981" fontWeight="bold" fontSize="10" textAnchor="middle">Activación Progresiva (Release)</text>

      <rect x="350" y="80" width="255" height="35" rx="4" fill="#d1fae5" stroke="#10b981" strokeWidth="1" />
      <text x="477" y="95" fill="#047857" fontSize="7" fontWeight="bold" textAnchor="middle">LaunchDarkly / Unleash Flag Engine</text>
      <text x="477" y="107" fill="#065f46" fontSize="6.5" textAnchor="middle">10% Empleados ➔ 25% Beta ➔ 100% General</text>

      <text x="355" y="132" fill={textColor} fontSize="7">• Activación en tiempo real sin nuevo build</text>
      <text x="355" y="146" fill={textColor} fontSize="7">• Pruebas A/B controladas por métricas</text>
      <text x="355" y="160" fill="#10b981" fontSize="7" fontWeight="bold">• Kill-Switch instantáneo ante bugs imprevistos</text>
      <text x="477" y="174" fill="#059669" fontSize="7" fontWeight="bold" textAnchor="middle">Decisión de Negocio y Producto</text>

      <rect x="25" y="193" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="204" fill={subtextColor} fontSize="7.5" textAnchor="middle">Los Feature Flags desacoplan la entrega técnica de código de su activación visual, permitiendo trunk-based development seguro.</text>
    </svg>
  );
  },

  "cicd-gitops-argocd-reconciliation": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="11" textAnchor="middle">Modelo GitOps: Sincronización Declarativa con ArgoCD</text>

      {/* Git Repo: Desired State */}
      <rect x="25" y="50" width="175" height="135" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="112" y="70" fill="#60a5fa" fontWeight="bold" fontSize="9.5" textAnchor="middle">1. Git: Desired State</text>
      <rect x="35" y="80" width="155" height="35" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="112" y="95" fill={textColor} fontSize="7" fontFamily="monospace" textAnchor="middle">git commit -m &quot;app: v2.4&quot;</text>
      <text x="112" y="107" fill={subtextColor} fontSize="6.5" textAnchor="middle">Manifiestos K8s / Helm / Kustomize</text>
      <text x="112" y="132" fill={textColor} fontSize="7" textAnchor="middle">• Única Fuente de Verdad</text>
      <text x="112" y="145" fill={textColor} fontSize="7" textAnchor="middle">• Trazabilidad y auditoría en Git</text>
      <text x="112" y="165" fill="#3b82f6" fontSize="7" fontWeight="bold" textAnchor="middle">Declarativo e Inmutable</text>

      {/* Arrow 1 -> 2 */}
      <path d="M205 105 L230 105" stroke="#3b82f6" strokeWidth="1.5" markerEnd="url(#arrow)" />

      {/* ArgoCD Controller */}
      <rect x="235" y="50" width="170" height="135" rx="8" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#818cf8" strokeWidth="1.5" />
      <text x="320" y="70" fill="#818cf8" fontWeight="bold" fontSize="9.5" textAnchor="middle">2. ArgoCD Controller</text>
      <rect x="245" y="80" width="150" height="40" rx="4" fill={isDark ? "#1e1b4b" : "#ffffff"} />
      <text x="320" y="95" fill="#a5b4fc" fontSize="7" fontWeight="bold" textAnchor="middle">Bucle de Reconciliación</text>
      <text x="320" y="108" fill={textColor} fontSize="6.5" textAnchor="middle">Detecta Drift entre Git y K8s</text>
      <text x="320" y="134" fill={subtextColor} fontSize="7" textAnchor="middle">• Corre DENTRO del clúster</text>
      <text x="320" y="147" fill={subtextColor} fontSize="7" textAnchor="middle">• El runner CI no tiene credenciales</text>
      <text x="320" y="165" fill="#818cf8" fontSize="7" fontWeight="bold" textAnchor="middle">🔄 Auto-Sync &amp; Self-Heal</text>

      {/* Arrow 2 -> 3 */}
      <path d="M410 105 L435 105" stroke="#10b981" strokeWidth="1.5" markerEnd="url(#arrow)" />

      {/* Kubernetes Cluster: Actual State */}
      <rect x="440" y="50" width="175" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="527" y="70" fill="#10b981" fontWeight="bold" fontSize="9.5" textAnchor="middle">3. K8s: Live State</text>
      <rect x="450" y="80" width="155" height="40" rx="4" fill="#d1fae5" stroke="#10b981" strokeWidth="1" />
      <text x="527" y="95" fill="#047857" fontSize="7" fontWeight="bold" textAnchor="middle">Pods Actualizados a v2.4</text>
      <text x="527" y="108" fill="#065f46" fontSize="6.5" textAnchor="middle">Estado del clúster sincronizado</text>
      <text x="527" y="134" fill={textColor} fontSize="7" textAnchor="middle">• Si alguien muta el clúster manual,</text>
      <text x="527" y="147" fill={textColor} fontSize="7" textAnchor="middle">ArgoCD lo revierte a lo que dice Git</text>
      <text x="527" y="165" fill="#059669" fontSize="7" fontWeight="bold" textAnchor="middle">🛡️ Sin Config Drift</text>

      <rect x="25" y="193" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="204" fill={subtextColor} fontSize="7.5" textAnchor="middle">GitOps opera mediante agentes internos que tiran (pull) del repositorio, eliminando la necesidad de abrir puertos de CI hacia producción.</text>
    </svg>
  );
  },

  "cicd-automated-rollback-observability": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="11" textAnchor="middle">Rollback Automático Basado en Métricas de Observabilidad (SLOs)</text>

      {/* Step 1: Canary Deploy */}
      <rect x="25" y="50" width="165" height="135" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="107" y="70" fill="#60a5fa" fontWeight="bold" fontSize="9.5" textAnchor="middle">1. Despliegue Canary</text>
      <rect x="35" y="80" width="145" height="35" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="107" y="95" fill={textColor} fontSize="7" textAnchor="middle">Nueva versión v2.1.0</text>
      <text x="107" y="107" fill="#3b82f6" fontSize="6.5" textAnchor="middle">recibe el 10% del tráfico</text>
      <text x="107" y="132" fill={subtextColor} fontSize="7" textAnchor="middle">Comienza evaluación de SLOs</text>
      <text x="107" y="145" fill={subtextColor} fontSize="7" textAnchor="middle">durante ventana de 5 minutos</text>
      <text x="107" y="165" fill="#3b82f6" fontSize="7" fontWeight="bold" textAnchor="middle">Tráfico Controlado</text>

      {/* Arrow 1 -> 2 */}
      <path d="M195 105 L225 105" stroke="#ef4444" strokeWidth="1.5" markerEnd="url(#arrow)" />

      {/* Step 2: Metric Spike */}
      <rect x="230" y="50" width="180" height="135" rx="8" fill={isDark ? "#450a0a" : "#fee2e2"} stroke="#ef4444" strokeWidth="1.5" />
      <text x="320" y="70" fill="#ef4444" fontWeight="bold" fontSize="9.5" textAnchor="middle">2. Pico de Errores (Sentry)</text>
      <rect x="240" y="80" width="160" height="40" rx="4" fill={isDark ? "#1f2937" : "#ffffff"} stroke="#ef4444" strokeWidth="1" />
      <text x="320" y="95" fill="#ef4444" fontSize="7.5" fontWeight="bold" textAnchor="middle">💥 Error Rate: 2.8% (&gt; 0.1%)</text>
      <text x="320" y="108" fill={textColor} fontSize="6.5" textAnchor="middle">Excepción no capturada en checkout</text>
      <text x="320" y="134" fill={subtextColor} fontSize="7" textAnchor="middle">• Prometheus alerta breach de SLO</text>
      <text x="320" y="147" fill={subtextColor} fontSize="7" textAnchor="middle">• Dispara webhook de emergencia</text>
      <text x="320" y="165" fill="#ef4444" fontSize="7" fontWeight="bold" textAnchor="middle">Alerta Inmediata</text>

      {/* Arrow 2 -> 3 */}
      <path d="M415 105 L445 105" stroke="#10b981" strokeWidth="1.5" markerEnd="url(#arrow)" />

      {/* Step 3: Automated Rollback */}
      <rect x="450" y="50" width="165" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="532" y="70" fill="#10b981" fontWeight="bold" fontSize="9.5" textAnchor="middle">3. Rollback Automático</text>
      <rect x="460" y="80" width="145" height="40" rx="4" fill="#d1fae5" stroke="#10b981" strokeWidth="1" />
      <text x="532" y="95" fill="#047857" fontSize="7" fontWeight="bold" textAnchor="middle">Tráfico 100% ➔ v2.0.9</text>
      <text x="532" y="108" fill="#065f46" fontSize="6.5" textAnchor="middle">Ejecutado en &lt; 15 segundos</text>
      <text x="532" y="134" fill={textColor} fontSize="7" textAnchor="middle">• Sin intervención humana</text>
      <text x="532" y="147" fill={textColor} fontSize="7" textAnchor="middle">• Notificación a canal de incidentes</text>
      <text x="532" y="165" fill="#059669" fontSize="7" fontWeight="bold" textAnchor="middle">🛡️ Disponibilidad Protegida</text>

      <rect x="25" y="193" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="204" fill={subtextColor} fontSize="7.5" textAnchor="middle">El rollback automatizado monitorea las métricas en producción y revierte el despliegue en segundos si se vulneran los umbrales de calidad.</text>
    </svg>
  );
  },

  "cicd-semantic-release-git-tag": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="11" textAnchor="middle">Semantic Release: Versionado SemVer y Changelog Automatizados</text>

      {/* Conventional Commits */}
      <rect x="25" y="50" width="180" height="135" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="115" y="70" fill="#60a5fa" fontWeight="bold" fontSize="9.5" textAnchor="middle">1. Conventional Commits</text>
      <rect x="35" y="80" width="160" height="20" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="42" y="94" fill="#3b82f6" fontSize="6.5" fontFamily="monospace">fix: null pointer in cart</text>
      <rect x="35" y="105" width="160" height="20" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="42" y="119" fill="#10b981" fontSize="6.5" fontFamily="monospace">feat: add dark mode toggle</text>
      <rect x="35" y="130" width="160" height="20" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="42" y="144" fill="#ef4444" fontSize="6.5" fontFamily="monospace">feat!: drop legacy node 16</text>
      <text x="115" y="170" fill={subtextColor} fontSize="7" textAnchor="middle">Commits estructurados y tipados</text>

      {/* Arrow 1 -> 2 */}
      <path d="M210 115 L235 115" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrow)" />

      {/* SemVer Calculation */}
      <rect x="240" y="50" width="180" height="135" rx="8" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#818cf8" strokeWidth="1.5" />
      <text x="330" y="70" fill="#818cf8" fontWeight="bold" fontSize="9.5" textAnchor="middle">2. Cálculo de SemVer</text>
      <rect x="250" y="80" width="160" height="60" rx="4" fill={isDark ? "#1e1b4b" : "#ffffff"} />
      <text x="260" y="96" fill="#3b82f6" fontSize="7">fix: ➔ PATCH (v2.1.0 ➔ v2.1.1)</text>
      <text x="260" y="112" fill="#10b981" fontSize="7">feat: ➔ MINOR (v2.1.0 ➔ v2.2.0)</text>
      <text x="260" y="128" fill="#ef4444" fontSize="7">BREAKING: ➔ MAJOR (v2 ➔ v3.0.0)</text>
      <text x="330" y="156" fill={subtextColor} fontSize="7" textAnchor="middle">Determinación matemática sin error</text>
      <text x="330" y="170" fill="#818cf8" fontSize="7" fontWeight="bold" textAnchor="middle">Cero Debate Humano</text>

      {/* Arrow 2 -> 3 */}
      <path d="M425 115 L450 115" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow)" />

      {/* Output artifacts */}
      <rect x="455" y="50" width="160" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="535" y="70" fill="#10b981" fontWeight="bold" fontSize="9.5" textAnchor="middle">3. Publicación Automática</text>
      <rect x="465" y="80" width="140" height="22" rx="4" fill="#d1fae5" />
      <text x="535" y="95" fill="#047857" fontSize="7" fontWeight="bold" textAnchor="middle">📄 CHANGELOG.md actualizado</text>
      <rect x="465" y="108" width="140" height="22" rx="4" fill="#d1fae5" />
      <text x="535" y="123" fill="#047857" fontSize="7" fontWeight="bold" textAnchor="middle">🏷️ Git Tag v2.2.0</text>
      <rect x="465" y="136" width="140" height="22" rx="4" fill="#d1fae5" />
      <text x="535" y="151" fill="#047857" fontSize="7" fontWeight="bold" textAnchor="middle">📦 npm publish / GitHub Release</text>
      <text x="535" y="172" fill="#059669" fontSize="7" fontWeight="bold" textAnchor="middle">🚀 Proceso 100% Autónomo</text>

      <rect x="25" y="193" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="204" fill={subtextColor} fontSize="7.5" textAnchor="middle">Semantic Release analiza los commits convencionales para versionar, generar changelogs y publicar releases sin intervención manual.</text>
    </svg>
  );
  },

  "cicd-playwright-sharding-parallel": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="11" textAnchor="middle">Playwright Test Sharding: Paralelismo Distribuido de Pruebas E2E</text>

      {/* Test Suite Input */}
      <rect x="25" y="50" width="140" height="135" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="95" y="70" fill="#60a5fa" fontWeight="bold" fontSize="9.5" textAnchor="middle">Suite Completa E2E</text>
      <rect x="35" y="80" width="120" height="35" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="95" y="95" fill={textColor} fontSize="7" fontWeight="bold" textAnchor="middle">400 Tests E2E</text>
      <text x="95" y="107" fill="#ef4444" fontSize="6.5" textAnchor="middle">24 minutos en 1 solo runner</text>
      <text x="95" y="132" fill={subtextColor} fontSize="7" textAnchor="middle">Cuello de botella en CI</text>
      <text x="95" y="145" fill={subtextColor} fontSize="7" textAnchor="middle">Solución: Sharding</text>
      <text x="95" y="165" fill="#3b82f6" fontSize="7" fontWeight="bold" textAnchor="middle">Partición 1 a N</text>

      {/* Fan out arrows */}
      <path d="M170 100 L215 70" stroke="#3b82f6" strokeWidth="1.5" markerEnd="url(#arrow)" />
      <path d="M170 110 L215 98" stroke="#3b82f6" strokeWidth="1.5" markerEnd="url(#arrow)" />
      <path d="M170 120 L215 132" stroke="#3b82f6" strokeWidth="1.5" markerEnd="url(#arrow)" />
      <path d="M170 130 L215 160" stroke="#3b82f6" strokeWidth="1.5" markerEnd="url(#arrow)" />

      {/* 4 Shards */}
      <rect x="220" y="52" width="190" height="28" rx="4" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1" />
      <text x="315" y="70" fill="#10b981" fontSize="7.5" fontWeight="bold" textAnchor="middle">Shard 1/4: Tests 1-100 (6 min) ✅</text>

      <rect x="220" y="84" width="190" height="28" rx="4" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1" />
      <text x="315" y="102" fill="#10b981" fontSize="7.5" fontWeight="bold" textAnchor="middle">Shard 2/4: Tests 101-200 (6 min) ✅</text>

      <rect x="220" y="116" width="190" height="28" rx="4" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1" />
      <text x="315" y="134" fill="#10b981" fontSize="7.5" fontWeight="bold" textAnchor="middle">Shard 3/4: Tests 201-300 (6 min) ✅</text>

      <rect x="220" y="148" width="190" height="28" rx="4" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1" />
      <text x="315" y="166" fill="#10b981" fontSize="7.5" fontWeight="bold" textAnchor="middle">Shard 4/4: Tests 301-400 (6 min) ✅</text>

      {/* Fan in arrows */}
      <path d="M415 70 L460 100" stroke="#10b981" strokeWidth="1.5" markerEnd="url(#arrow)" />
      <path d="M415 98 L460 110" stroke="#10b981" strokeWidth="1.5" markerEnd="url(#arrow)" />
      <path d="M415 132 L460 120" stroke="#10b981" strokeWidth="1.5" markerEnd="url(#arrow)" />
      <path d="M415 160 L460 130" stroke="#10b981" strokeWidth="1.5" markerEnd="url(#arrow)" />

      {/* Merge Reports */}
      <rect x="465" y="50" width="150" height="135" rx="8" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#818cf8" strokeWidth="1.5" />
      <text x="540" y="70" fill="#818cf8" fontWeight="bold" fontSize="9.5" textAnchor="middle">Reporte Consolidado</text>
      <rect x="475" y="80" width="130" height="35" rx="4" fill={isDark ? "#1e1b4b" : "#ffffff"} />
      <text x="540" y="95" fill="#a5b4fc" fontSize="7" fontFamily="monospace" textAnchor="middle">npx playwright merge</text>
      <text x="540" y="107" fill={textColor} fontSize="6.5" textAnchor="middle">Combina reportes blob</text>
      <text x="540" y="132" fill="#10b981" fontSize="9" fontWeight="bold" textAnchor="middle">⚡ 6 Minutos Total</text>
      <text x="540" y="145" fill={subtextColor} fontSize="6.5" textAnchor="middle">Aceleración 4x</text>
      <text x="540" y="165" fill="#818cf8" fontSize="7" fontWeight="bold" textAnchor="middle">📊 HTML Dashboard</text>

      <rect x="25" y="193" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="204" fill={subtextColor} fontSize="7.5" textAnchor="middle">El sharding de Playwright divide la carga de pruebas E2E en múltiples runners paralelos, reduciendo el tiempo de build de 24 a 6 minutos.</text>
    </svg>
  );
  },

  "cicd-disaster-recovery-multi-region": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="11" textAnchor="middle">Disaster Recovery Multi-Región e Inmutabilidad de Artefactos</text>

      {/* Build Once */}
      <rect x="25" y="50" width="165" height="135" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="107" y="70" fill="#60a5fa" fontWeight="bold" fontSize="9.5" textAnchor="middle">1. Build Once (Inmutable)</text>
      <rect x="35" y="80" width="145" height="35" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="107" y="95" fill={textColor} fontSize="7" textAnchor="middle">Compila exactamente 1 vez</text>
      <text x="107" y="107" fill="#3b82f6" fontSize="6.5" fontFamily="monospace" textAnchor="middle">digest: sha256-9b81</text>
      <text x="107" y="132" fill={subtextColor} fontSize="7" textAnchor="middle">El MISMO binario se</text>
      <text x="107" y="145" fill={subtextColor} fontSize="7" textAnchor="middle">promociona a todas las regiones</text>
      <text x="107" y="165" fill="#3b82f6" fontSize="7" fontWeight="bold" textAnchor="middle">Cero Recompilaciones</text>

      {/* Multi-region deploy arrows */}
      <path d="M195 90 L240 75" stroke="#10b981" strokeWidth="1.5" markerEnd="url(#arrow)" />
      <path d="M195 140 L240 155" stroke="#10b981" strokeWidth="1.5" markerEnd="url(#arrow)" />

      {/* Region 1 */}
      <rect x="245" y="50" width="170" height="60" rx="6" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="330" y="68" fill="#10b981" fontWeight="bold" fontSize="9" textAnchor="middle">Región Primaria: us-east-1</text>
      <text x="330" y="82" fill={textColor} fontSize="7" textAnchor="middle">Cluster K8s + CDN Edge Activo</text>
      <text x="330" y="96" fill="#047857" fontSize="7" fontWeight="bold" textAnchor="middle">Salud: 100% OK ✅</text>

      {/* Region 2 */}
      <rect x="245" y="125" width="170" height="60" rx="6" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#818cf8" strokeWidth="1.5" />
      <text x="330" y="143" fill="#818cf8" fontWeight="bold" fontSize="9" textAnchor="middle">Región Secundaria: eu-west-1</text>
      <text x="330" y="157" fill={textColor} fontSize="7" textAnchor="middle">Standby Caliente o Activo-Activo</text>
      <text x="330" y="171" fill="#818cf8" fontSize="7" fontWeight="bold" textAnchor="middle">Réplica de Datos en Tiempo Real</text>

      {/* Global DNS Failover */}
      <rect x="435" y="50" width="180" height="135" rx="8" fill={isDark ? "#0f172a" : "#ffffff"} stroke={border} strokeWidth="1.5" />
      <text x="525" y="70" fill={textColor} fontWeight="bold" fontSize="9.5" textAnchor="middle">DNS Failover (Route53)</text>
      <rect x="445" y="80" width="160" height="35" rx="4" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1" />
      <text x="525" y="95" fill="#d97706" fontSize="7" fontWeight="bold" textAnchor="middle">Health Check continuo (10s)</text>
      <text x="525" y="107" fill="#b45309" fontSize="6.5" textAnchor="middle">Conmutación ante caída total de datacenter</text>
      <text x="525" y="132" fill={textColor} fontSize="7" textAnchor="middle">• RTO (Recovery Time) &lt; 30s</text>
      <text x="525" y="145" fill={textColor} fontSize="7" textAnchor="middle">• RPO (Recovery Point) ~ 0s</text>
      <text x="525" y="165" fill="#10b981" fontSize="7" fontWeight="bold" textAnchor="middle">🛡️ Alta Disponibilidad (99.99%)</text>

      <rect x="25" y="193" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="204" fill={subtextColor} fontSize="7.5" textAnchor="middle">El principio &apos;Build Once&apos; asegura que el binario validado en Staging sea exactamente el mismo que se despliega de forma multi-región.</text>
    </svg>
  );
  },

  "cicd-finops-compute-concurrency-cancel": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="11" textAnchor="middle">FinOps en CI/CD: Cancelación por Concurrencia y Filtrado de Rutas</text>

      {/* Technique 1: Concurrency Cancel */}
      <rect x="25" y="50" width="180" height="135" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="115" y="70" fill="#60a5fa" fontWeight="bold" fontSize="9.5" textAnchor="middle">1. Cancel in Progress</text>
      <rect x="35" y="80" width="160" height="42" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="42" y="95" fill="#60a5fa" fontSize="6.5" fontFamily="monospace">concurrency:</text>
      <text x="50" y="106" fill={textColor} fontSize="6.5" fontFamily="monospace">group: pr-$&#123;&#123; github.ref &#125;&#125;</text>
      <text x="50" y="117" fill="#ef4444" fontSize="6.5" fontFamily="monospace">cancel-in-progress: true</text>
      <text x="115" y="140" fill={textColor} fontSize="7" textAnchor="middle">Si un dev hace 3 pushes rápidos,</text>
      <text x="115" y="153" fill={subtextColor} fontSize="6.5" textAnchor="middle">los primeros 2 se abortan de inmediato</text>
      <text x="115" y="170" fill="#3b82f6" fontSize="7" fontWeight="bold" textAnchor="middle">0 Minutos Desperdiciados</text>

      {/* Technique 2: Path filtering */}
      <rect x="230" y="50" width="180" height="135" rx="8" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#818cf8" strokeWidth="1.5" />
      <text x="320" y="70" fill="#818cf8" fontWeight="bold" fontSize="9.5" textAnchor="middle">2. Filtrado de Rutas</text>
      <rect x="240" y="80" width="160" height="42" rx="4" fill={isDark ? "#1e1b4b" : "#ffffff"} />
      <text x="247" y="95" fill="#818cf8" fontSize="6.5" fontFamily="monospace">paths-ignore:</text>
      <text x="255" y="106" fill={textColor} fontSize="6.5" fontFamily="monospace">- &apos;docs/**&apos;</text>
      <text x="255" y="117" fill={textColor} fontSize="6.5" fontFamily="monospace">- &apos;**.md&apos;, &apos;LICENSE&apos;</text>
      <text x="320" y="140" fill={textColor} fontSize="7" textAnchor="middle">Cambios puramente documentales</text>
      <text x="320" y="153" fill={subtextColor} fontSize="6.5" textAnchor="middle">NO ejecutan pipelines de build pesados</text>
      <text x="320" y="170" fill="#818cf8" fontSize="7" fontWeight="bold" textAnchor="middle">Disparo Inteligente</text>

      {/* Financial Result */}
      <rect x="435" y="50" width="180" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="525" y="70" fill="#10b981" fontWeight="bold" fontSize="9.5" textAnchor="middle">3. Ahorro de Costes (FinOps)</text>
      <rect x="445" y="80" width="160" height="42" rx="4" fill="#d1fae5" stroke="#10b981" strokeWidth="1" />
      <text x="525" y="96" fill="#047857" fontSize="10" fontWeight="bold" textAnchor="middle">-65% Minutos de CI</text>
      <text x="525" y="110" fill="#065f46" fontSize="6.5" textAnchor="middle">Miles de dólares ahorrados al año</text>
      <text x="525" y="140" fill={textColor} fontSize="7" textAnchor="middle">• Colas de espera descongestionadas</text>
      <text x="525" y="153" fill={textColor} fontSize="7" textAnchor="middle">• Feedback más rápido para el equipo</text>
      <text x="525" y="170" fill="#059669" fontSize="7" fontWeight="bold" textAnchor="middle">💰 Eficiencia de Recursos</text>

      <rect x="25" y="193" width="590" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="204" fill={subtextColor} fontSize="7.5" textAnchor="middle">La cancelación de concurrencia y el filtrado estricto de paths evitan quemar computación innecesaria en commits intermedios.</text>
    </svg>
  );
  }
};
