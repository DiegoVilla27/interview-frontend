import { DiagramRegistry } from "../diagram.types";

/** Diagramas SVG del módulo Version Control. */
export const versionControlDiagrams: DiagramRegistry = {
  "git-workflow": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* Working Tree */}
      <rect x="25" y="45" width="130" height="135" rx="8" fill={isDark ? "#18181b" : "#f1f5f9"} stroke="#ef4444" strokeWidth="1.5" />
      <text x="35" y="70" fill="#f87171" fontWeight="700" fontSize="11">Working Tree</text>
      <text x="35" y="90" fill={subtextColor} fontSize="9">Archivos locales</text>
      <rect x="35" y="105" width="110" height="25" rx="4" fill={isDark ? "#27272a" : "#e2e8f0"} />
      <text x="42" y="122" fill={textColor} fontSize="9" fontFamily="monospace">Modificados</text>

      {/* Staging Area */}
      <rect x="180" y="45" width="130" height="135" rx="8" fill={isDark ? "#1c1917" : "#fef3c7"} stroke="#f59e0b" strokeWidth="1.5" />
      <text x="190" y="70" fill="#fbbf24" fontWeight="700" fontSize="11">Staging Area</text>
      <text x="190" y="90" fill={subtextColor} fontSize="9">git add & preparación</text>
      <rect x="190" y="105" width="110" height="25" rx="4" fill={isDark ? "#292524" : "#fde68a"} />
      <text x="197" y="122" fill="#f59e0b" fontSize="9" fontFamily="monospace">Index (Tracked)</text>

      {/* Local Repo */}
      <rect x="335" y="45" width="130" height="135" rx="8" fill={isDark ? "#1e1b4b" : "#ede9fe"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="345" y="70" fill="#818cf8" fontWeight="700" fontSize="11">Local Repo</text>
      <text x="345" y="90" fill={subtextColor} fontSize="9">git commit (HEAD)</text>
      <rect x="345" y="105" width="110" height="25" rx="4" fill={isDark ? "#312e81" : "#ddd6fe"} />
      <text x="352" y="122" fill="#a5b4fc" fontSize="9" fontFamily="monospace">Historial local</text>

      {/* Remote Repo */}
      <rect x="490" y="45" width="130" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="500" y="70" fill="#34d399" fontWeight="700" fontSize="11">Remote (Origin)</text>
      <text x="500" y="90" fill={subtextColor} fontSize="9">git push / GitHub</text>
      <rect x="500" y="105" width="110" height="25" rx="4" fill={isDark ? "#022c22" : "#d1fae5"} />
      <text x="507" y="122" fill="#10b981" fontSize="9" fontFamily="monospace">main / origin</text>

      {/* Git Arrows */}
      <path d="M158 115 L176 115" stroke="#f59e0b" strokeWidth="1.5" />
      <text x="167" y="105" fill="#f59e0b" fontSize="8" textAnchor="middle">add</text>
      <path d="M313 115 L331 115" stroke="#6366f1" strokeWidth="1.5" />
      <text x="322" y="105" fill="#6366f1" fontSize="8" textAnchor="middle">commit</text>
      <path d="M468 115 L486 115" stroke="#10b981" strokeWidth="1.5" />
      <text x="477" y="105" fill="#10b981" fontSize="8" textAnchor="middle">push</text>
    </svg>
  );
  },

  "git-dag-object-model": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Arquitectura Interna de Git: El Grafo DAG y Objetos Inmutables</text>

      {/* Commit Object */}
      <rect x="30" y="55" width="130" height="95" rx="8" fill={isDark ? "#1e1b4b" : "#eef2ff"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="95" y="75" fill="#818cf8" fontWeight="bold" fontSize="10" textAnchor="middle">Commit Object</text>
      <text x="40" y="93" fill={textColor} fontSize="7.5">• SHA: a8f9c2d...</text>
      <text x="40" y="107" fill={textColor} fontSize="7.5">• Tree: 4b825dc</text>
      <text x="40" y="121" fill={textColor} fontSize="7.5">• Parent: e1f20a</text>
      <text x="40" y="135" fill={subtextColor} fontSize="7">• Author &amp; Message</text>

      {/* Arrow to Tree */}
      <path d="M162 102 L192 102" stroke="#6366f1" strokeWidth="2" />
      <polygon points="194,102 187,98 187,106" fill="#6366f1" />

      {/* Tree Object */}
      <rect x="195" y="55" width="130" height="95" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="260" y="75" fill="#34d399" fontWeight="bold" fontSize="10" textAnchor="middle">Tree Object (Directorio)</text>
      <text x="205" y="93" fill={textColor} fontSize="7.5">• 100644 blob e69de29</text>
      <text x="205" y="107" fill={subtextColor} fontSize="7">  (src/index.ts)</text>
      <text x="205" y="121" fill={textColor} fontSize="7.5">• 040000 tree d832910</text>
      <text x="205" y="135" fill={subtextColor} fontSize="7">  (subcarpeta /components)</text>

      {/* Arrow to Blob */}
      <path d="M327 102 L357 102" stroke="#10b981" strokeWidth="2" />
      <polygon points="359,102 352,98 352,106" fill="#10b981" />

      {/* Blob Object */}
      <rect x="360" y="55" width="125" height="95" rx="8" fill={isDark ? "#451a03" : "#fff7ed"} stroke="#f97316" strokeWidth="1.5" />
      <text x="422" y="75" fill="#fb923c" fontWeight="bold" fontSize="10" textAnchor="middle">Blob (Contenido Puro)</text>
      <text x="370" y="93" fill={textColor} fontSize="7.5">• Solo guarda bytes</text>
      <text x="370" y="107" fill={textColor} fontSize="7.5">• Cero metadatos/nombres</text>
      <text x="370" y="121" fill={textColor} fontSize="7.5">• Compresión zlib</text>
      <text x="422" y="140" fill="#f97316" fontSize="7" fontWeight="bold" textAnchor="middle">Inmutable por SHA</text>

      {/* Tag Object */}
      <rect x="500" y="55" width="110" height="95" rx="8" fill={isDark ? "#3b0764" : "#faf5ff"} stroke="#a855f7" strokeWidth="1.5" />
      <text x="555" y="75" fill="#c084fc" fontWeight="bold" fontSize="10" textAnchor="middle">Annotated Tag</text>
      <text x="510" y="93" fill={textColor} fontSize="7.5">• Puntero fijo a commit</text>
      <text x="510" y="107" fill={textColor} fontSize="7.5">• Metadatos y firma GPG</text>
      <text x="510" y="121" fill={textColor} fontSize="7.5">• Ej: v1.0.0 (Release)</text>
      <text x="555" y="140" fill="#a855f7" fontSize="7" fontWeight="bold" textAnchor="middle">Puntero Permanente</text>

      <rect x="30" y="170" width="580" height="30" rx="4" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="188" fill={subtextColor} fontSize="7.5" textAnchor="middle">Git es un almacén de objetos de valor-clave direccionable por contenido: el hash SHA es la clave inmutable del archivo.</text>
    </svg>
  );
  },

  "git-three-trees-staging": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Las 3 Áreas de Git: Working Directory ➔ Staging Area (Index) ➔ Repository</text>

      {/* 1. Working Tree */}
      <rect x="30" y="50" width="165" height="110" rx="8" fill={isDark ? "#450a0a" : "#fee2e2"} stroke="#ef4444" strokeWidth="1.5" />
      <text x="112" y="70" fill="#ef4444" fontWeight="bold" fontSize="10" textAnchor="middle">1. Working Directory</text>
      <text x="40" y="90" fill={textColor} fontSize="7.5">• Archivos reales en disco</text>
      <text x="40" y="105" fill={textColor} fontSize="7.5">• Estados: Untracked / Modified</text>
      <text x="40" y="120" fill={textColor} fontSize="7.5">• Cambios sin preparar</text>
      <text x="112" y="145" fill="#ef4444" fontSize="7" fontWeight="bold" textAnchor="middle">Área de Trabajo en Bruto</text>

      {/* Arrow: git add */}
      <path d="M198 95 L232 95" stroke="#6366f1" strokeWidth="2" />
      <polygon points="234,95 227,91 227,99" fill="#6366f1" />
      <text x="216" y="88" fill="#6366f1" fontSize="7" fontWeight="bold" textAnchor="middle">git add</text>

      {/* 2. Staging Area */}
      <rect x="238" y="50" width="165" height="110" rx="8" fill={isDark ? "#1e1b4b" : "#eef2ff"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="320" y="70" fill="#818cf8" fontWeight="bold" fontSize="10" textAnchor="middle">2. Staging Area (Index)</text>
      <text x="248" y="90" fill={textColor} fontSize="7.5">• Archivo binario .git/index</text>
      <text x="248" y="105" fill={textColor} fontSize="7.5">• Snapshot preparado</text>
      <text x="248" y="120" fill={textColor} fontSize="7.5">• Filtra commits atómicos</text>
      <text x="320" y="145" fill="#818cf8" fontSize="7" fontWeight="bold" textAnchor="middle">Borrador del Próximo Commit</text>

      {/* Arrow: git commit */}
      <path d="M405 95 L439 95" stroke="#10b981" strokeWidth="2" />
      <polygon points="441,95 434,91 434,99" fill="#10b981" />
      <text x="423" y="88" fill="#10b981" fontSize="7" fontWeight="bold" textAnchor="middle">git commit</text>

      {/* 3. Repository */}
      <rect x="445" y="50" width="165" height="110" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="527" y="70" fill="#34d399" fontWeight="bold" fontSize="10" textAnchor="middle">3. Git Repository (.git)</text>
      <text x="455" y="90" fill={textColor} fontSize="7.5">• Base de datos inmutable</text>
      <text x="455" y="105" fill={textColor} fontSize="7.5">• HEAD apuntando a la rama</text>
      <text x="455" y="120" fill={textColor} fontSize="7.5">• Historial seguro y permanente</text>
      <text x="527" y="145" fill="#10b981" fontSize="7" fontWeight="bold" textAnchor="middle">Instantánea Criptográfica</text>

      {/* Bottom: git checkout / restore */}
      <path d="M445 130 C350 160, 250 160, 195 130" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 3" />
      <text x="320" y="160" fill="#f59e0b" fontSize="7" fontWeight="bold" textAnchor="middle">git restore / checkout (Descartar cambios de vuelta al Working Tree)</text>

      <rect x="30" y="180" width="580" height="22" rx="4" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="195" fill={subtextColor} fontSize="7.5" textAnchor="middle">La existencia del Staging Area permite componer commits limpios y atómicos dividiendo cambios con `git add -p`.</text>
    </svg>
  );
  },

  "git-commit-anatomy-hash": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Anatomía de un Commit: Inmutabilidad Criptográfica SHA-1 / SHA-256</text>

      {/* Commit Object Block */}
      <rect x="30" y="50" width="340" height="135" rx="8" fill={isDark ? "#1e1b4b" : "#eef2ff"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="200" y="68" fill="#818cf8" fontWeight="bold" fontSize="10" textAnchor="middle">Objeto Commit (.git/objects/f4/8c9e...)</text>
      <rect x="45" y="78" width="310" height="18" rx="3" fill={isDark ? "#312e81" : "#c7d2fe"} />
      <text x="55" y="90" fill="#e0e7ff" fontSize="7" fontFamily="monospace">tree 2a4b8c... (Raíz del proyecto en este instante)</text>
      <rect x="45" y="100" width="310" height="18" rx="3" fill={isDark ? "#312e81" : "#c7d2fe"} />
      <text x="55" y="112" fill="#e0e7ff" fontSize="7" fontFamily="monospace">parent d7e1f9... (Hash del commit anterior en el DAG)</text>
      <text x="45" y="132" fill={textColor} fontSize="7">author Diego Villa &lt;diego@dev.com&gt; 1726435200 +0200</text>
      <text x="45" y="145" fill={textColor} fontSize="7">committer Diego Villa &lt;diego@dev.com&gt; 1726435200 +0200</text>
      <text x="45" y="165" fill="#10b981" fontSize="7.5" fontWeight="bold">feat(auth): implementar flujo OAuth2 con PKCE</text>

      {/* SHA Box */}
      <rect x="390" y="50" width="220" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="500" y="70" fill="#34d399" fontWeight="bold" fontSize="10" textAnchor="middle">Hash Criptográfico Único</text>
      <rect x="405" y="85" width="190" height="30" rx="4" fill={isDark ? "#065f46" : "#a7f3d0"} />
      <text x="500" y="103" fill="#064e3b" fontSize="8" fontWeight="bold" fontFamily="monospace" textAnchor="middle">f48c9e82a17b0c3d4e...</text>
      <text x="410" y="130" fill={textColor} fontSize="7">• Si cambia un solo espacio en el código</text>
      <text x="410" y="143" fill={textColor} fontSize="7">• Si cambia la fecha o el autor</text>
      <text x="410" y="156" fill={textColor} fontSize="7">• Si cambia el commit padre</text>
      <text x="500" y="174" fill="#ef4444" fontSize="7.5" fontWeight="bold" textAnchor="middle">➔ El hash cambia por completo</text>

      <rect x="30" y="192" width="580" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">La integridad criptográfica del DAG impide alterar el historial pasado sin romper la cadena de hashes.</text>
    </svg>
  );
  },

  "git-branching-head-pointer": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Ramas como Punteros Ligeros &amp; El Estado HEAD</text>

      {/* Commits DAG */}
      <circle cx="90" cy="115" r="18" fill="#6366f1" />
      <text x="90" y="119" fill="#ffffff" fontWeight="bold" fontSize="8" textAnchor="middle">C1</text>

      <path d="M108 115 L162 115" stroke="#6366f1" strokeWidth="2" />
      <polygon points="162,115 155,111 155,119" fill="#6366f1" />

      <circle cx="180" cy="115" r="18" fill="#6366f1" />
      <text x="180" y="119" fill="#ffffff" fontWeight="bold" fontSize="8" textAnchor="middle">C2</text>

      {/* Split */}
      <path d="M198 115 L260 80" stroke="#10b981" strokeWidth="2" />
      <polygon points="260,80 252,78 256,86" fill="#10b981" />

      <path d="M198 115 L260 150" stroke="#f59e0b" strokeWidth="2" />
      <polygon points="260,150 256,144 252,152" fill="#f59e0b" />

      {/* Main branch commit */}
      <circle cx="280" cy="80" r="18" fill="#10b981" />
      <text x="280" y="84" fill="#ffffff" fontWeight="bold" fontSize="8" textAnchor="middle">C3</text>

      {/* Feature branch commit */}
      <circle cx="280" cy="150" r="18" fill="#f59e0b" />
      <text x="280" y="154" fill="#ffffff" fontWeight="bold" fontSize="8" textAnchor="middle">C4</text>

      {/* Branch pointer: main */}
      <rect x="330" y="68" width="70" height="24" rx="4" fill="#10b981" />
      <text x="365" y="83" fill="#ffffff" fontWeight="bold" fontSize="8" textAnchor="middle">main</text>

      {/* Branch pointer: feature */}
      <rect x="330" y="138" width="85" height="24" rx="4" fill="#f59e0b" />
      <text x="372" y="153" fill="#ffffff" fontWeight="bold" fontSize="8" textAnchor="middle">feat/login</text>

      {/* HEAD Pointer */}
      <rect x="440" y="138" width="60" height="24" rx="4" fill="#ef4444" />
      <text x="470" y="153" fill="#ffffff" fontWeight="bold" fontSize="8" textAnchor="middle">HEAD ➔</text>
      <path d="M440 150 L418 150" stroke="#ef4444" strokeWidth="2" />

      {/* Right Explanation Box */}
      <rect x="520" y="55" width="100" height="135" rx="6" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#94a3b8" />
      <text x="570" y="75" fill={textColor} fontWeight="bold" fontSize="8" textAnchor="middle">¿Qué es HEAD?</text>
      <text x="530" y="95" fill={subtextColor} fontSize="6.5">• Puntero que indica</text>
      <text x="530" y="108" fill={subtextColor} fontSize="6.5">  dónde estás parado</text>
      <text x="530" y="125" fill="#f59e0b" fontWeight="bold" fontSize="6.5">Detached HEAD:</text>
      <text x="530" y="138" fill={subtextColor} fontSize="6.5">Cuando HEAD apunta</text>
      <text x="530" y="150" fill={subtextColor} fontSize="6.5">directo a un commit</text>
      <text x="530" y="162" fill={subtextColor} fontSize="6.5">en vez de una rama</text>

      <rect x="30" y="185" width="470" height="22" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="265" y="199" fill={subtextColor} fontSize="7.5" textAnchor="middle">Crear una rama en Git toma 0.001s: es solo escribir un string de 41 bytes en .git/refs/heads/.</text>
    </svg>
  );
  },

  "git-ignore-attributes-lfs": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Gobernanza de Repositorio: .gitignore, .gitattributes &amp; Git LFS</text>

      {/* 1. .gitignore */}
      <rect x="25" y="50" width="185" height="135" rx="8" fill={isDark ? "#450a0a" : "#fee2e2"} stroke="#ef4444" strokeWidth="1.5" />
      <text x="117" y="68" fill="#ef4444" fontWeight="bold" fontSize="10" textAnchor="middle">1. .gitignore (Exclusión)</text>
      <text x="35" y="88" fill={textColor} fontSize="7.5">• Secretos y claves (.env, *.pem)</text>
      <text x="35" y="103" fill={textColor} fontSize="7.5">• Dependencias (node_modules/)</text>
      <text x="35" y="118" fill={textColor} fontSize="7.5">• Compilados (dist/, build/, .next/)</text>
      <text x="35" y="133" fill={textColor} fontSize="7.5">• Basura del OS (.DS_Store, Thumbs.db)</text>
      <text x="117" y="165" fill="#ef4444" fontSize="7" fontWeight="bold" textAnchor="middle">Evita contaminar el repositorio</text>

      {/* 2. .gitattributes */}
      <rect x="228" y="50" width="185" height="135" rx="8" fill={isDark ? "#1e1b4b" : "#eef2ff"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="320" y="68" fill="#818cf8" fontWeight="bold" fontSize="10" textAnchor="middle">2. .gitattributes (Normalización)</text>
      <text x="238" y="88" fill={textColor} fontSize="7.5">• * text=auto eol=lf</text>
      <text x="238" y="103" fill={subtextColor} fontSize="6.5">  (Fuerza finales LF en Windows y Mac)</text>
      <text x="238" y="118" fill={textColor} fontSize="7.5">• *.svg -diff</text>
      <text x="238" y="133" fill={subtextColor} fontSize="6.5">  (Evita diffs masivos en minificados)</text>
      <text x="320" y="165" fill="#6366f1" fontSize="7" fontWeight="bold" textAnchor="middle">Previene conflictos de fin de línea</text>

      {/* 3. Git LFS */}
      <rect x="430" y="50" width="185" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="522" y="68" fill="#34d399" fontWeight="bold" fontSize="10" textAnchor="middle">3. Git LFS (Archivos Grandes)</text>
      <text x="440" y="88" fill={textColor} fontSize="7.5">• Videos, Modelos 3D, Binarios &gt; 50MB</text>
      <text x="440" y="103" fill={textColor} fontSize="7.5">• Reemplaza binario por puntero texto</text>
      <text x="440" y="118" fill={textColor} fontSize="7.5">• El archivo real vive en storage S3</text>
      <text x="440" y="133" fill={textColor} fontSize="7.5">• git lfs track &quot;*.psd&quot;</text>
      <text x="522" y="165" fill="#10b981" fontSize="7" fontWeight="bold" textAnchor="middle">Mantiene el repo ágil y liviano</text>

      <rect x="30" y="192" width="580" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">Un error común de Windows es commitear finales CRLF, rompiendo linters en entornos Linux en CI/CD.</text>
    </svg>
  );
  },

  "git-fetch-vs-pull-flow": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Diferencia Crítica: git fetch vs git pull</text>

      {/* Remote Box */}
      <rect x="30" y="55" width="160" height="120" rx="8" fill={isDark ? "#1e1b4b" : "#eef2ff"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="110" y="75" fill="#818cf8" fontWeight="bold" fontSize="10" textAnchor="middle">Remoto (origin/main)</text>
      <rect x="45" y="90" width="130" height="20" rx="4" fill="#6366f1" />
      <text x="110" y="103" fill="#ffffff" fontSize="7.5" fontWeight="bold" textAnchor="middle">Commits C3 y C4</text>
      <text x="110" y="130" fill={textColor} fontSize="7" textAnchor="middle">Servidor en GitHub/GitLab</text>
      <text x="110" y="150" fill={subtextColor} fontSize="6.5" textAnchor="middle">Fuente de la verdad remota</text>

      {/* Arrow: Fetch */}
      <path d="M192 85 L260 85" stroke="#10b981" strokeWidth="2" />
      <polygon points="262,85 255,81 255,89" fill="#10b981" />
      <text x="227" y="78" fill="#10b981" fontSize="7.5" fontWeight="bold" textAnchor="middle">git fetch</text>

      {/* Local Remote-Tracking */}
      <rect x="265" y="55" width="160" height="60" rx="6" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="345" y="75" fill="#34d399" fontWeight="bold" fontSize="9" textAnchor="middle">Remote-Tracking Branch</text>
      <text x="345" y="92" fill={textColor} fontSize="7" textAnchor="middle">refs/remotes/origin/main</text>
      <text x="345" y="105" fill="#10b981" fontSize="6.5" fontWeight="bold" textAnchor="middle">Descarga Cero Riesgo</text>

      {/* Arrow: Merge */}
      <path d="M345 116 L345 140" stroke="#f59e0b" strokeWidth="2" />
      <polygon points="345,142 341,135 349,135" fill="#f59e0b" />
      <text x="380" y="132" fill="#f59e0b" fontSize="7" fontWeight="bold">git merge</text>

      {/* Local Working Directory */}
      <rect x="265" y="145" width="160" height="50" rx="6" fill={isDark ? "#451a03" : "#fff7ed"} stroke="#f97316" strokeWidth="1.5" />
      <text x="345" y="165" fill="#fb923c" fontWeight="bold" fontSize="9" textAnchor="middle">Rama Local (main)</text>
      <text x="345" y="180" fill={textColor} fontSize="7" textAnchor="middle">Modifica tus archivos en disco</text>

      {/* Direct Pull Bracket */}
      <path d="M192 145 C215 170, 240 170, 260 170" stroke="#ef4444" strokeWidth="2" strokeDasharray="3 3" />
      <text x="210" y="188" fill="#ef4444" fontSize="8" fontWeight="bold">git pull</text>

      {/* Right Comparison summary */}
      <rect x="445" y="55" width="165" height="120" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#94a3b8" />
      <text x="527" y="75" fill={textColor} fontWeight="bold" fontSize="9" textAnchor="middle">Ecuación Fundamental</text>
      <text x="455" y="95" fill="#10b981" fontSize="7.5" fontWeight="bold">• git fetch:</text>
      <text x="455" y="108" fill={subtextColor} fontSize="6.5">  Solo descarga objetos. No altera</text>
      <text x="455" y="118" fill={subtextColor} fontSize="6.5">  tus archivos locales de trabajo.</text>
      <text x="455" y="135" fill="#ef4444" fontSize="7.5" fontWeight="bold">• git pull = fetch + merge</text>
      <text x="455" y="148" fill={subtextColor} fontSize="6.5">  Puede generar conflictos</text>
      <text x="455" y="158" fill={subtextColor} fontSize="6.5">  de sorpresa en tu código.</text>

      <rect x="30" y="196" width="580" height="14" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="206" fill={subtextColor} fontSize="7" textAnchor="middle">Mejor práctica profesional: Usar &apos;git fetch&apos; seguido de &apos;git diff HEAD..origin/main&apos; antes de integrar.</text>
    </svg>
  );
  },

  "git-merge-vs-rebase-dag": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Integración de Código: git merge vs git rebase</text>

      {/* Left: git merge */}
      <rect x="25" y="48" width="280" height="140" rx="8" fill={isDark ? "#1e1b4b" : "#eef2ff"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="165" y="66" fill="#818cf8" fontWeight="bold" fontSize="10" textAnchor="middle">git merge (Historial No Lineal)</text>

      <circle cx="55" cy="95" r="12" fill="#6366f1" />
      <text x="55" y="98" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle">C1</text>
      <circle cx="115" cy="95" r="12" fill="#6366f1" />
      <text x="115" y="98" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle">C2</text>
      <circle cx="175" cy="80" r="12" fill="#10b981" />
      <text x="175" y="83" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle">C3</text>
      <circle cx="175" cy="115" r="12" fill="#f59e0b" />
      <text x="175" y="118" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle">C4</text>

      {/* Merge commit */}
      <circle cx="255" cy="95" r="14" fill="#a855f7" stroke="#ffffff" strokeWidth="1" />
      <text x="255" y="98" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle">M5</text>
      <path d="M187 80 L242 90 M187 115 L242 100" stroke="#a855f7" strokeWidth="1.5" />

      <text x="165" y="152" fill={textColor} fontSize="7" textAnchor="middle">• Crea commit M5 con 2 padres</text>
      <text x="165" y="165" fill={textColor} fontSize="7" textAnchor="middle">• Preserva la historia real completa sin alterar hashes</text>
      <text x="165" y="178" fill="#818cf8" fontSize="7" fontWeight="bold" textAnchor="middle">✅ Seguro para ramas públicas</text>

      {/* Right: git rebase */}
      <rect x="335" y="48" width="280" height="140" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="475" y="66" fill="#34d399" fontWeight="bold" fontSize="10" textAnchor="middle">git rebase (Historial 100% Lineal)</text>

      <circle cx="365" cy="95" r="12" fill="#6366f1" />
      <text x="365" y="98" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle">C1</text>
      <circle cx="415" cy="95" r="12" fill="#6366f1" />
      <text x="415" y="98" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle">C2</text>
      <circle cx="465" cy="95" r="12" fill="#10b981" />
      <text x="465" y="98" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle">C3</text>
      {/* Replayed commit */}
      <circle cx="520" cy="95" r="12" fill="#f59e0b" stroke="#34d399" strokeWidth="1.5" />
      <text x="520" y="98" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle">C4&apos;</text>
      <path d="M377 95 L403 95 M427 95 L453 95 M477 95 L508 95" stroke="#10b981" strokeWidth="1.5" />

      <text x="475" y="135" fill={textColor} fontSize="7" textAnchor="middle">• Reescribe C4 como nuevo commit C4&apos;</text>
      <text x="475" y="148" fill={textColor} fontSize="7" textAnchor="middle">• Historial lineal limpio sin merge commits</text>
      <text x="475" y="165" fill="#ef4444" fontSize="7" fontWeight="bold" textAnchor="middle">❌ NUNCA en ramas compartidas (fuerza push -f)</text>

      <rect x="30" y="195" width="580" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="205" fill={subtextColor} fontSize="7" textAnchor="middle">Regla de Oro: Rebase local para limpiar ramas de feature; merge en ramas compartidas o protegidas.</text>
    </svg>
  );
  },

  "git-stash-stack-architecture": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Arquitectura de git stash: Pila LIFO de Trabajo en Progreso (WIP)</text>

      {/* Worktree */}
      <rect x="30" y="55" width="180" height="120" rx="8" fill={isDark ? "#1e1b4b" : "#eef2ff"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="120" y="75" fill="#818cf8" fontWeight="bold" fontSize="10" textAnchor="middle">Working Tree Sucio</text>
      <text x="40" y="95" fill={textColor} fontSize="7.5">• Feature a medio terminar</text>
      <text x="40" y="110" fill={textColor} fontSize="7.5">• Surge un Bug urgente en prod</text>
      <text x="40" y="125" fill={textColor} fontSize="7.5">• No quieres commitear código roto</text>
      <text x="120" y="155" fill="#6366f1" fontSize="7" fontWeight="bold" textAnchor="middle">git stash push -u -m &quot;WIP&quot;</text>

      {/* Arrows */}
      <path d="M212 90 L248 90" stroke="#f59e0b" strokeWidth="2" />
      <polygon points="250,90 243,86 243,94" fill="#f59e0b" />
      <text x="230" y="82" fill="#f59e0b" fontSize="7" fontWeight="bold">push</text>

      <path d="M248 135 L212 135" stroke="#10b981" strokeWidth="2" />
      <polygon points="210,135 217,131 217,139" fill="#10b981" />
      <text x="230" y="128" fill="#10b981" fontSize="7" fontWeight="bold">pop</text>

      {/* Stash Stack */}
      <rect x="255" y="50" width="180" height="130" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="345" y="70" fill="#34d399" fontWeight="bold" fontSize="10" textAnchor="middle">Pila Stash (refs/stash)</text>
      <rect x="265" y="80" width="160" height="22" rx="4" fill="#10b981" />
      <text x="345" y="94" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle">stash@&#123;0&#125;: WIP login flow</text>
      <rect x="265" y="106" width="160" height="20" rx="4" fill={isDark ? "#065f46" : "#a7f3d0"} />
      <text x="345" y="119" fill="#064e3b" fontSize="6.5" textAnchor="middle">stash@&#123;1&#125;: WIP checkout fix</text>
      <rect x="265" y="130" width="160" height="20" rx="4" fill={isDark ? "#065f46" : "#a7f3d0"} />
      <text x="345" y="143" fill="#064e3b" fontSize="6.5" textAnchor="middle">stash@&#123;2&#125;: refactor styles</text>
      <text x="345" y="168" fill={subtextColor} fontSize="6.5" textAnchor="middle">Estructura LIFO (Last In, First Out)</text>

      {/* Right: Best commands */}
      <rect x="450" y="55" width="160" height="120" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#94a3b8" />
      <text x="530" y="75" fill={textColor} fontWeight="bold" fontSize="9" textAnchor="middle">Comandos Clave</text>
      <text x="460" y="95" fill={textColor} fontSize="7">• git stash list</text>
      <text x="460" y="110" fill={textColor} fontSize="7">• git stash pop (aplica y borra)</text>
      <text x="460" y="125" fill={textColor} fontSize="7">• git stash apply (aplica y conserva)</text>
      <text x="460" y="140" fill={textColor} fontSize="7">• git stash show -p stash@&#123;0&#125;</text>
      <text x="460" y="155" fill="#f97316" fontSize="7" fontWeight="bold">• git stash branch &lt;name&gt;</text>

      <rect x="30" y="190" width="580" height="18" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="202" fill={subtextColor} fontSize="7.5" textAnchor="middle">El flag &apos;-u&apos; (--include-untracked) es vital para asegurar archivos nuevos creados que aún no han sido rastreados.</text>
    </svg>
  );
  },

  "git-reset-vs-revert-matrix": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Deshacer Cambios: git reset vs git revert</text>

      {/* Left: git reset */}
      <rect x="25" y="48" width="280" height="140" rx="8" fill={isDark ? "#450a0a" : "#fee2e2"} stroke="#ef4444" strokeWidth="1.5" />
      <text x="165" y="66" fill="#ef4444" fontWeight="bold" fontSize="10" textAnchor="middle">git reset (Rebobinar Puntero HEAD)</text>
      <text x="35" y="86" fill={textColor} fontSize="7.5">• Mueve el puntero de la rama hacia atrás en el DAG</text>
      <text x="35" y="101" fill="#f59e0b" fontSize="7.5" fontWeight="bold">--soft:</text>
      <text x="75" y="101" fill={textColor} fontSize="7.5">Mantiene cambios en Staging Area (preparados)</text>
      <text x="35" y="116" fill="#6366f1" fontSize="7.5" fontWeight="bold">--mixed (default):</text>
      <text x="120" y="116" fill={textColor} fontSize="7.5">Mantiene en Working Tree sin stagear</text>
      <text x="35" y="131" fill="#ef4444" fontSize="7.5" fontWeight="bold">--hard:</text>
      <text x="75" y="131" fill={textColor} fontSize="7.5">¡Destruye todos los cambios en disco!</text>
      <text x="165" y="172" fill="#ef4444" fontSize="7" fontWeight="bold" textAnchor="middle">⚠️ Reescribe historial: Prohibido en ramas compartidas</text>

      {/* Right: git revert */}
      <rect x="335" y="48" width="280" height="140" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="475" y="66" fill="#34d399" fontWeight="bold" fontSize="10" textAnchor="middle">git revert (Nuevo Commit Inverso)</text>
      <text x="345" y="86" fill={textColor} fontSize="7.5">• NO mueve HEAD hacia atrás; camina hacia ADELANTE</text>
      <text x="345" y="101" fill={textColor} fontSize="7.5">• Calcula el diff inverso exacto del commit objetivo</text>
      <text x="345" y="116" fill={textColor} fontSize="7.5">• Genera un nuevo commit seguro: &quot;Revert &apos;feat: pay&apos;&quot;</text>
      <text x="345" y="135" fill="#10b981" fontSize="8" fontWeight="bold">• No rompe el historial de los colaboradores</text>
      <text x="345" y="150" fill="#10b981" fontSize="8" fontWeight="bold">• Permite git push sin flags forzados</text>
      <text x="475" y="172" fill="#10b981" fontSize="7" fontWeight="bold" textAnchor="middle">✅ Estándar corporativo para revertir en producción</text>

      <rect x="30" y="195" width="580" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="205" fill={subtextColor} fontSize="7" textAnchor="middle">Regla mnemotécnica: ¿El commit ya fue subido con &apos;push&apos;? Usa &apos;revert&apos;. ¿Es local en tu máquina? Usa &apos;reset&apos;.</text>
    </svg>
  );
  },

  "git-pr-governance-pipeline": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Gobernanza de Pull Request &amp; Reglas de Protección de Rama</text>

      {/* Step 1: Push Branch */}
      <rect x="25" y="55" width="125" height="115" rx="8" fill={isDark ? "#1e1b4b" : "#eef2ff"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="87" y="75" fill="#818cf8" fontWeight="bold" fontSize="9" textAnchor="middle">1. Feature Branch</text>
      <text x="35" y="95" fill={textColor} fontSize="7">• git push origin</text>
      <text x="35" y="108" fill={textColor} fontSize="7">  feat/checkout-flow</text>
      <text x="35" y="125" fill={subtextColor} fontSize="6.5">• Creación de PR</text>
      <text x="87" y="152" fill="#6366f1" fontSize="7" fontWeight="bold" textAnchor="middle">Abre discusión</text>

      {/* Arrow 1 */}
      <path d="M152 110 L172 110" stroke="#6366f1" strokeWidth="2" />
      <polygon points="174,110 167,106 167,114" fill="#6366f1" />

      {/* Step 2: CI Automation */}
      <rect x="175" y="55" width="135" height="115" rx="8" fill={isDark ? "#451a03" : "#fff7ed"} stroke="#f97316" strokeWidth="1.5" />
      <text x="242" y="75" fill="#fb923c" fontWeight="bold" fontSize="9" textAnchor="middle">2. CI Checks (Gate)</text>
      <text x="185" y="95" fill="#10b981" fontSize="7">✓ ESLint &amp; Prettier</text>
      <text x="185" y="108" fill="#10b981" fontSize="7">✓ Typecheck (tsc)</text>
      <text x="185" y="121" fill="#10b981" fontSize="7">✓ Unit Tests &gt; 80%</text>
      <text x="185" y="134" fill="#10b981" fontSize="7">✓ Build Vite/Next.js</text>
      <text x="242" y="155" fill="#f97316" fontSize="6.5" fontWeight="bold" textAnchor="middle">Bloquea si falla alguno</text>

      {/* Arrow 2 */}
      <path d="M312 110 L332 110" stroke="#f97316" strokeWidth="2" />
      <polygon points="334,110 327,106 327,114" fill="#f97316" />

      {/* Step 3: Peer Code Review */}
      <rect x="335" y="55" width="135" height="115" rx="8" fill={isDark ? "#3b0764" : "#faf5ff"} stroke="#a855f7" strokeWidth="1.5" />
      <text x="402" y="75" fill="#c084fc" fontWeight="bold" fontSize="9" textAnchor="middle">3. Peer Review</text>
      <text x="345" y="95" fill={textColor} fontSize="7">• Mínimo 1-2 aprobaciones</text>
      <text x="345" y="110" fill={textColor} fontSize="7">• Sugerencias &amp; refactors</text>
      <text x="345" y="125" fill={textColor} fontSize="7">• Resolución de hilos</text>
      <text x="402" y="152" fill="#a855f7" fontSize="7" fontWeight="bold" textAnchor="middle">Validación Humana</text>

      {/* Arrow 3 */}
      <path d="M472 110 L492 110" stroke="#10b981" strokeWidth="2" />
      <polygon points="494,110 487,106 487,114" fill="#10b981" />

      {/* Step 4: Squash & Merge */}
      <rect x="495" y="55" width="120" height="115" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="555" y="75" fill="#34d399" fontWeight="bold" fontSize="9" textAnchor="middle">4. Merge Seguro</text>
      <text x="505" y="95" fill={textColor} fontSize="7">• Squash and Merge</text>
      <text x="505" y="110" fill={textColor} fontSize="7">• Elimina rama remota</text>
      <text x="505" y="125" fill={textColor} fontSize="7">• Despliegue a Staging</text>
      <text x="555" y="152" fill="#10b981" fontSize="7" fontWeight="bold" textAnchor="middle">Rama main protegida</text>

      <rect x="30" y="180" width="580" height="25" rx="4" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="196" fill={subtextColor} fontSize="7.5" textAnchor="middle">Branch Protection Rules impiden hacer &apos;git push origin main&apos; directo; todo cambio pasa por CI y revisión obligatoria.</text>
    </svg>
  );
  },

  "git-tags-semver-lifecycle": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Git Tags &amp; Semantic Versioning 2.0.0 (SemVer)</text>

      {/* SemVer Anatomy Box */}
      <rect x="30" y="50" width="340" height="135" rx="8" fill={isDark ? "#1e1b4b" : "#eef2ff"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="200" y="70" fill="#818cf8" fontWeight="bold" fontSize="10" textAnchor="middle">Estructura SemVer: MAJOR . MINOR . PATCH</text>

      <rect x="45" y="85" width="90" height="40" rx="4" fill="#ef4444" />
      <text x="90" y="102" fill="#ffffff" fontWeight="bold" fontSize="10" textAnchor="middle">MAJOR</text>
      <text x="90" y="116" fill="#fee2e2" fontSize="6.5" textAnchor="middle">Breaking Changes</text>

      <rect x="155" y="85" width="90" height="40" rx="4" fill="#f59e0b" />
      <text x="200" y="102" fill="#ffffff" fontWeight="bold" fontSize="10" textAnchor="middle">MINOR</text>
      <text x="200" y="116" fill="#fef3c7" fontSize="6.5" textAnchor="middle">Nueva Feature retrocompatible</text>

      <rect x="265" y="85" width="90" height="40" rx="4" fill="#10b981" />
      <text x="310" y="102" fill="#ffffff" fontWeight="bold" fontSize="10" textAnchor="middle">PATCH</text>
      <text x="310" y="116" fill="#d1fae5" fontSize="6.5" textAnchor="middle">Bugfix retrocompatible</text>

      <text x="45" y="145" fill={textColor} fontSize="7.5">• v2.0.0 ➔ Ruptura de API (requiere migración del consumidor)</text>
      <text x="45" y="158" fill={textColor} fontSize="7.5">• v2.1.0 ➔ Añade nuevos endpoints o props sin romper contratos</text>
      <text x="45" y="171" fill={textColor} fontSize="7.5">• v2.1.4 ➔ Corrige fallo de seguridad o memoria</text>

      {/* Right: Tag Types */}
      <rect x="390" y="50" width="220" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="500" y="70" fill="#34d399" fontWeight="bold" fontSize="10" textAnchor="middle">Tipos de Tags en Git</text>
      <rect x="405" y="82" width="190" height="35" rx="4" fill={isDark ? "#065f46" : "#a7f3d0"} />
      <text x="415" y="96" fill="#064e3b" fontSize="7.5" fontWeight="bold">Lightweight Tag:</text>
      <text x="415" y="108" fill="#064e3b" fontSize="6.5">git tag v1.0.0 (Simple puntero directo)</text>

      <rect x="405" y="125" width="190" height="50" rx="4" fill={isDark ? "#065f46" : "#a7f3d0"} />
      <text x="415" y="140" fill="#064e3b" fontSize="7.5" fontWeight="bold">Annotated Tag (Recomendado):</text>
      <text x="415" y="152" fill="#064e3b" fontSize="6.5">git tag -a v1.0.0 -m &quot;Release Q3&quot; -s</text>
      <text x="415" y="165" fill="#064e3b" fontSize="6.5">Guarda autor, fecha y firma criptográfica GPG</text>

      <rect x="30" y="192" width="580" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">Los releases se publican con tags remotos: &apos;git push origin --tags&apos; dispara los pipelines de despliegue en CI.</text>
    </svg>
  );
  },

  "git-bisect-binary-search": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">git bisect: Depuración Forense con Búsqueda Binaria O(log N)</text>

      {/* Commits Line */}
      <line x1="60" y1="90" x2="580" y2="90" stroke={textColor} strokeWidth="2" />

      {/* Good commit C1 */}
      <circle cx="70" cy="90" r="14" fill="#10b981" />
      <text x="70" y="94" fill="#ffffff" fontWeight="bold" fontSize="8" textAnchor="middle">C1</text>
      <text x="70" y="118" fill="#10b981" fontWeight="bold" fontSize="7.5" textAnchor="middle">GOOD (v1.0)</text>

      {/* Commits in between */}
      <circle cx="145" cy="90" r="10" fill="#6366f1" />
      <text x="145" y="93" fill="#ffffff" fontSize="6.5" textAnchor="middle">C2</text>

      <circle cx="220" cy="90" r="10" fill="#10b981" />
      <text x="220" y="93" fill="#ffffff" fontSize="6.5" textAnchor="middle">C3</text>
      <text x="220" y="118" fill="#10b981" fontSize="7" textAnchor="middle">good</text>

      {/* Culprit commit C4 */}
      <circle cx="295" cy="90" r="15" fill="#ef4444" stroke="#f59e0b" strokeWidth="2" />
      <text x="295" y="94" fill="#ffffff" fontWeight="bold" fontSize="8" textAnchor="middle">C4</text>
      <text x="295" y="122" fill="#ef4444" fontWeight="bold" fontSize="8" textAnchor="middle">🔥 CULPABLE</text>

      <circle cx="370" cy="90" r="10" fill="#ef4444" />
      <text x="370" y="93" fill="#ffffff" fontSize="6.5" textAnchor="middle">C5</text>
      <text x="370" y="118" fill="#ef4444" fontSize="7" textAnchor="middle">bad</text>

      <circle cx="445" cy="90" r="10" fill="#ef4444" />
      <text x="445" y="93" fill="#ffffff" fontSize="6.5" textAnchor="middle">C6</text>

      {/* Bad commit C7 */}
      <circle cx="570" cy="90" r="14" fill="#ef4444" />
      <text x="570" y="94" fill="#ffffff" fontWeight="bold" fontSize="8" textAnchor="middle">C7</text>
      <text x="570" y="118" fill="#ef4444" fontWeight="bold" fontSize="7.5" textAnchor="middle">BAD (HEAD)</text>

      {/* Midpoint Bracket */}
      <path d="M370 70 L370 55 L220 55 L220 70" stroke="#f59e0b" strokeWidth="1.5" />
      <text x="295" y="48" fill="#f59e0b" fontSize="7.5" fontWeight="bold" textAnchor="middle">Paso 1: Punto medio C5 (falla ➔ bisect bad) | Paso 2: Punto medio C3 (pasa ➔ bisect good)</text>

      {/* Terminal Box */}
      <rect x="30" y="135" width="580" height="50" rx="6" fill={isDark ? "#0f172a" : "#1e293b"} />
      <text x="45" y="152" fill="#a5b4fc" fontSize="7.5" fontFamily="monospace">$ git bisect start &amp;&amp; git bisect bad HEAD &amp;&amp; git bisect good v1.0</text>
      <text x="45" y="166" fill="#34d399" fontSize="7.5" fontFamily="monospace">$ git bisect run npm test (¡Automatiza 100% la búsqueda en segundos!)</text>
      <text x="45" y="178" fill="#f87171" fontSize="7.5" fontFamily="monospace">➔ 8c12a7f is the first bad commit: &quot;fix: update memory cache TTL&quot;</text>

      <rect x="30" y="195" width="580" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="205" fill={subtextColor} fontSize="7" textAnchor="middle">Entre 1.000 commits, git bisect encuentra el bug en solo 10 comprobaciones binarias log2(1000) ≈ 10.</text>
    </svg>
  );
  },

  "git-cherry-pick-transplant": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">git cherry-pick: Trasplante Quirúrgico de Commits</text>

      {/* Main Branch Line */}
      <text x="40" y="80" fill="#10b981" fontWeight="bold" fontSize="9">main (prod)</text>
      <line x1="100" y1="75" x2="520" y2="75" stroke="#10b981" strokeWidth="2" />
      <circle cx="130" cy="75" r="12" fill="#10b981" />
      <text x="130" y="78" fill="#ffffff" fontSize="7" textAnchor="middle">M1</text>
      <circle cx="210" cy="75" r="12" fill="#10b981" />
      <text x="210" y="78" fill="#ffffff" fontSize="7" textAnchor="middle">M2</text>

      {/* Cherry-picked commit on main */}
      <circle cx="420" cy="75" r="14" fill="#f59e0b" stroke="#ffffff" strokeWidth="2" />
      <text x="420" y="78" fill="#ffffff" fontWeight="bold" fontSize="7" textAnchor="middle">C3&apos;</text>
      <text x="420" y="55" fill="#f59e0b" fontWeight="bold" fontSize="7.5" textAnchor="middle">Hotfix Trasplantado</text>

      {/* Feature Branch Line */}
      <text x="40" y="150" fill="#6366f1" fontWeight="bold" fontSize="9">feature/v2</text>
      <line x1="100" y1="145" x2="520" y2="145" stroke="#6366f1" strokeWidth="2" />
      <circle cx="130" cy="145" r="12" fill="#6366f1" />
      <text x="130" y="148" fill="#ffffff" fontSize="7" textAnchor="middle">F1</text>
      <circle cx="210" cy="145" r="12" fill="#6366f1" />
      <text x="210" y="148" fill="#ffffff" fontSize="7" textAnchor="middle">F2</text>

      {/* Target Commit C3 */}
      <circle cx="300" cy="145" r="14" fill="#f59e0b" stroke="#ffffff" strokeWidth="2" />
      <text x="300" y="148" fill="#ffffff" fontWeight="bold" fontSize="7" textAnchor="middle">C3</text>
      <text x="300" y="172" fill="#f59e0b" fontWeight="bold" fontSize="7.5" textAnchor="middle">Hotfix Parche (C3)</text>

      <circle cx="390" cy="145" r="12" fill="#6366f1" />
      <text x="390" y="148" fill="#ffffff" fontSize="7" textAnchor="middle">F3</text>

      {/* Arc from C3 to C3' */}
      <path d="M305 130 C330 95, 380 90, 405 82" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 3" />
      <polygon points="407,82 399,82 403,89" fill="#f59e0b" />
      <text x="370" y="112" fill="#f59e0b" fontSize="7.5" fontWeight="bold">git cherry-pick C3</text>

      <rect x="30" y="182" width="580" height="25" rx="4" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="198" fill={subtextColor} fontSize="7.5" textAnchor="middle">Aplica el diff de C3 sobre main sin fusionar los commits experimentales F1, F2 y F3 de la rama de feature.</text>
    </svg>
  );
  },

  "git-interactive-rebase-squash": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">git rebase -i: Curaduría de Historial y Squash de Commits</text>

      {/* Editor buffer mockup */}
      <rect x="30" y="50" width="290" height="135" rx="8" fill={isDark ? "#0f172a" : "#1e293b"} />
      <text x="45" y="70" fill="#94a3b8" fontSize="8" fontFamily="monospace"># git rebase -i HEAD~4</text>
      <text x="45" y="90" fill="#38bdf8" fontSize="8" fontFamily="monospace">pick   a1b2c3 feat(auth): login base</text>
      <text x="45" y="105" fill="#f59e0b" fontSize="8" fontFamily="monospace">squash d4e5f6 fix typos en formulario</text>
      <text x="45" y="120" fill="#f59e0b" fontSize="8" fontFamily="monospace">fixup  7a8b9c console.log removidos</text>
      <text x="45" y="135" fill="#ef4444" fontSize="8" fontFamily="monospace">drop   3d2e1a archivo temporal test</text>
      <text x="45" y="165" fill="#a5b4fc" fontSize="7" fontFamily="monospace">Comandos: pick | reword | edit | squash | fixup | drop</text>

      {/* Arrow */}
      <path d="M330 115 L360 115" stroke="#10b981" strokeWidth="2" />
      <polygon points="362,115 355,111 355,119" fill="#10b981" />

      {/* Resulting Clean History */}
      <rect x="370" y="50" width="240" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="490" y="72" fill="#34d399" fontWeight="bold" fontSize="10" textAnchor="middle">Historial Resultante Limpio</text>
      <rect x="385" y="88" width="210" height="40" rx="4" fill="#10b981" />
      <text x="490" y="105" fill="#ffffff" fontWeight="bold" fontSize="8" textAnchor="middle">1 Solo Commit Atómico Impecable</text>
      <text x="490" y="118" fill="#d1fae5" fontSize="6.5" textAnchor="middle">feat(auth): implementar inicio de sesión completo</text>
      <text x="385" y="145" fill={textColor} fontSize="7.5">• Elimina ruido de &quot;WIP&quot; y parches temporales</text>
      <text x="385" y="160" fill={textColor} fontSize="7.5">• Historial fácil de auditar en Code Review</text>
      <text x="490" y="176" fill="#10b981" fontSize="7" fontWeight="bold" textAnchor="middle">Listo para abrir Pull Request</text>

      <rect x="30" y="192" width="580" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">El rebase interactivo permite agrupar commits desordenados antes de compartirlos con el equipo.</text>
    </svg>
  );
  },

  "git-branching-strategies-comparison": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Estrategias de Branching: GitFlow vs Trunk-Based Development</text>

      {/* GitFlow */}
      <rect x="25" y="48" width="280" height="140" rx="8" fill={isDark ? "#1e1b4b" : "#eef2ff"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="165" y="66" fill="#818cf8" fontWeight="bold" fontSize="10" textAnchor="middle">GitFlow (Múltiples Ramas de Larga Vida)</text>
      <text x="35" y="86" fill={textColor} fontSize="7.5">• Ramas: master, develop, feature/*, release/*, hotfix/*</text>
      <text x="35" y="100" fill={textColor} fontSize="7.5">• Ramas de feature viven semanas o meses</text>
      <text x="35" y="115" fill={textColor} fontSize="7.5">• Alto riesgo de &apos;Merge Hell&apos; al integrar a develop</text>
      <text x="35" y="130" fill={textColor} fontSize="7.5">• Releases programados periódicos (mensuales/trimestrales)</text>
      <text x="165" y="172" fill="#ef4444" fontSize="7" fontWeight="bold" textAnchor="middle">❌ Lento para CI/CD moderno</text>

      {/* Trunk-Based */}
      <rect x="335" y="48" width="280" height="140" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="475" y="66" fill="#34d399" fontWeight="bold" fontSize="10" textAnchor="middle">Trunk-Based Development (TBD - Estándar Moderno)</text>
      <text x="345" y="86" fill={textColor} fontSize="7.5">• Una sola rama principal (&apos;main&apos; / &apos;trunk&apos;)</text>
      <text x="345" y="100" fill={textColor} fontSize="7.5">• Ramas efímeras (Short-lived branches &lt; 1-2 días)</text>
      <text x="345" y="115" fill={textColor} fontSize="7.5">• Código incompleto oculto tras Feature Flags / Toggles</text>
      <text x="345" y="130" fill={textColor} fontSize="7.5">• Múltiples despliegues diarios automatizados a producción</text>
      <text x="475" y="172" fill="#10b981" fontSize="7" fontWeight="bold" textAnchor="middle">✅ Prerrequisito para Continuous Delivery (DORA)</text>

      <rect x="30" y="195" width="580" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="205" fill={subtextColor} fontSize="7" textAnchor="middle">Las empresas de élite (Google, Meta, Netflix) usan Trunk-Based Development con pruebas automatizadas en CI.</text>
    </svg>
  );
  },

  "git-hooks-husky-lifecycle": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Automatización con Git Hooks &amp; Husky en el Flujo de Desarrollo</text>

      {/* Hook 1: pre-commit */}
      <rect x="30" y="55" width="165" height="115" rx="8" fill={isDark ? "#1e1b4b" : "#eef2ff"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="112" y="75" fill="#818cf8" fontWeight="bold" fontSize="9.5" textAnchor="middle">1. pre-commit</text>
      <text x="40" y="95" fill={textColor} fontSize="7.5">• Se ejecuta antes de crear commit</text>
      <text x="40" y="110" fill={textColor} fontSize="7.5">• lint-staged (ESLint + Prettier)</text>
      <text x="40" y="125" fill={textColor} fontSize="7.5">• Solo analiza archivos en Stage</text>
      <text x="112" y="152" fill="#6366f1" fontSize="7" fontWeight="bold" textAnchor="middle">Garantiza Formato Limpio</text>

      {/* Arrow 1 */}
      <path d="M198 112 L228 112" stroke="#6366f1" strokeWidth="2" />
      <polygon points="230,112 223,108 223,116" fill="#6366f1" />

      {/* Hook 2: commit-msg */}
      <rect x="235" y="55" width="170" height="115" rx="8" fill={isDark ? "#451a03" : "#fff7ed"} stroke="#f97316" strokeWidth="1.5" />
      <text x="320" y="75" fill="#fb923c" fontWeight="bold" fontSize="9.5" textAnchor="middle">2. commit-msg</text>
      <text x="245" y="95" fill={textColor} fontSize="7.5">• Valida el mensaje ingresado</text>
      <text x="245" y="110" fill={textColor} fontSize="7.5">• commitlint --edit</text>
      <text x="245" y="125" fill={textColor} fontSize="7.5">• Exige Conventional Commits</text>
      <text x="320" y="152" fill="#f97316" fontSize="7" fontWeight="bold" textAnchor="middle">feat: / fix: Obligatorio</text>

      {/* Arrow 2 */}
      <path d="M408 112 L438 112" stroke="#10b981" strokeWidth="2" />
      <polygon points="440,112 433,108 433,116" fill="#10b981" />

      {/* Hook 3: pre-push */}
      <rect x="445" y="55" width="165" height="115" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="527" y="75" fill="#34d399" fontWeight="bold" fontSize="9.5" textAnchor="middle">3. pre-push</text>
      <text x="455" y="95" fill={textColor} fontSize="7.5">• Se ejecuta antes del push remoto</text>
      <text x="455" y="110" fill={textColor} fontSize="7.5">• tsc --noEmit (Tipos estrictos)</text>
      <text x="455" y="125" fill={textColor} fontSize="7.5">• pnpm test:unit (Tests rápidos)</text>
      <text x="527" y="152" fill="#10b981" fontSize="7" fontWeight="bold" textAnchor="middle">Previene CI Roto</text>

      <rect x="30" y="180" width="580" height="25" rx="4" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="196" fill={subtextColor} fontSize="7.5" textAnchor="middle">Husky instala scripts en .husky/ y sincroniza la configuración de hooks en el repo sin requerir setup manual.</text>
    </svg>
  );
  },

  "git-conventional-commits-semver": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Conventional Commits &amp; Semantic Release Automático</text>

      {/* Syntax Spec Box */}
      <rect x="30" y="50" width="320" height="135" rx="8" fill={isDark ? "#1e1b4b" : "#eef2ff"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="190" y="70" fill="#818cf8" fontWeight="bold" fontSize="10" textAnchor="middle">Sintaxis Formal</text>
      <rect x="45" y="80" width="290" height="22" rx="4" fill={isDark ? "#312e81" : "#c7d2fe"} />
      <text x="190" y="95" fill="#e0e7ff" fontSize="8" fontFamily="monospace" textAnchor="middle">&lt;type&gt;[optional scope]: &lt;description&gt;</text>
      <text x="45" y="120" fill="#10b981" fontSize="7.5" fontWeight="bold">• feat: nueva funcionalidad (MINOR)</text>
      <text x="45" y="135" fill="#38bdf8" fontSize="7.5" fontWeight="bold">• fix: corrección de error (PATCH)</text>
      <text x="45" y="150" fill="#f59e0b" fontSize="7.5">• chore: / refactor: / docs: / perf: / test:</text>
      <text x="45" y="165" fill="#ef4444" fontSize="7.5" fontWeight="bold">• BREAKING CHANGE: o feat!: (MAJOR)</text>

      {/* Semantic Release Pipeline */}
      <rect x="370" y="50" width="240" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="490" y="70" fill="#34d399" fontWeight="bold" fontSize="10" textAnchor="middle">Pipeline Semantic-Release</text>
      <text x="385" y="92" fill={textColor} fontSize="7.5">1. Analiza commits desde el último tag</text>
      <text x="385" y="107" fill={textColor} fontSize="7.5">2. Determina el salto de versión exacto</text>
      <text x="385" y="122" fill={textColor} fontSize="7.5">3. Genera automáticamente CHANGELOG.md</text>
      <text x="385" y="137" fill={textColor} fontSize="7.5">4. Crea tag Git (ej. v1.4.0) y GitHub Release</text>
      <text x="385" y="152" fill={textColor} fontSize="7.5">5. Publica paquete en npm registry</text>
      <text x="490" y="174" fill="#10b981" fontSize="7.5" fontWeight="bold" textAnchor="middle">0% Intervención Manual</text>

      <rect x="30" y="192" width="580" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">Elimina el error humano en versionado y democratiza el changelog legible tanto por humanos como por máquinas.</text>
    </svg>
  );
  },

  "git-merge-conflicts-rerere": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Resolución de Conflictos &amp; git rerere (Reuse Recorded Resolution)</text>

      {/* Conflict Markers */}
      <rect x="30" y="50" width="280" height="135" rx="8" fill={isDark ? "#0f172a" : "#1e293b"} />
      <text x="45" y="70" fill="#ef4444" fontSize="8" fontFamily="monospace">&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD (Tus cambios locales)</text>
      <text x="45" y="85" fill="#38bdf8" fontSize="8" fontFamily="monospace">  const API_URL = &apos;https://api.v2.com&apos;;</text>
      <text x="45" y="100" fill="#f59e0b" fontSize="8" fontFamily="monospace">=======</text>
      <text x="45" y="115" fill="#34d399" fontSize="8" fontFamily="monospace">  const API_URL = &apos;https://api-prod.v2.com&apos;;</text>
      <text x="45" y="130" fill="#ef4444" fontSize="8" fontFamily="monospace">&gt;&gt;&gt;&gt;&gt;&gt;&gt; origin/main (Cambios entrantes)</text>
      <text x="45" y="165" fill="#94a3b8" fontSize="7" fontFamily="monospace">Tres partes: HEAD | Separador | Remoto</text>

      {/* rerere explanation */}
      <rect x="330" y="50" width="280" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="470" y="70" fill="#34d399" fontWeight="bold" fontSize="10" textAnchor="middle">¿Qué hace git rerere?</text>
      <rect x="345" y="80" width="250" height="20" rx="3" fill={isDark ? "#065f46" : "#a7f3d0"} />
      <text x="470" y="93" fill="#064e3b" fontSize="7" fontFamily="monospace" textAnchor="middle">git config --global rerere.enabled true</text>
      <text x="345" y="115" fill={textColor} fontSize="7.5">• Guarda una huella digital del conflicto y tu solución</text>
      <text x="345" y="130" fill={textColor} fontSize="7.5">• Si durante un rebase largo el mismo conflicto reaparece:</text>
      <text x="345" y="145" fill="#10b981" fontSize="7.5" fontWeight="bold">  ➔ Git lo resuelve automáticamente en 0 segundos</text>
      <text x="470" y="172" fill="#10b981" fontSize="7" fontWeight="bold" textAnchor="middle">Ahorra horas en rebases complejos</text>

      <rect x="30" y="192" width="580" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">rerere almacena resoluciones en .git/rr-cache; si el merge sale mal, &apos;git merge --abort&apos; cancela la operación limpiamente.</text>
    </svg>
  );
  },

  "git-worktree-multi-directory": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">git worktree: Desarrollo Concurrente en Múltiples Ramas</text>

      {/* Central .git database */}
      <rect x="230" y="55" width="180" height="60" rx="8" fill={isDark ? "#1e1b4b" : "#eef2ff"} stroke="#6366f1" strokeWidth="2" />
      <text x="320" y="78" fill="#818cf8" fontWeight="bold" fontSize="10" textAnchor="middle">Repositorio Central .git</text>
      <text x="320" y="95" fill={textColor} fontSize="7.5" textAnchor="middle">1 solo almacén de objetos y branches</text>

      {/* Left Worktree (Feature) */}
      <path d="M250 115 L140 135" stroke="#6366f1" strokeWidth="1.5" />
      <rect x="30" y="135" width="180" height="48" rx="6" fill={isDark ? "#451a03" : "#fff7ed"} stroke="#f97316" strokeWidth="1.5" />
      <text x="120" y="152" fill="#fb923c" fontWeight="bold" fontSize="8.5" textAnchor="middle">Carpeta: ~/repo-feature</text>
      <text x="120" y="168" fill={textColor} fontSize="7" textAnchor="middle">Rama: feat/checkout (En progreso)</text>

      {/* Center Worktree (Hotfix) */}
      <path d="M320 115 L320 135" stroke="#6366f1" strokeWidth="1.5" />
      <rect x="230" y="135" width="180" height="48" rx="6" fill={isDark ? "#450a0a" : "#fee2e2"} stroke="#ef4444" strokeWidth="1.5" />
      <text x="320" y="152" fill="#ef4444" fontWeight="bold" fontSize="8.5" textAnchor="middle">Carpeta: ~/repo-hotfix</text>
      <text x="320" y="168" fill={textColor} fontSize="7" textAnchor="middle">Rama: hotfix/pago (Parche urgente)</text>

      {/* Right Worktree (PR Review) */}
      <path d="M390 115 L500 135" stroke="#6366f1" strokeWidth="1.5" />
      <rect x="430" y="135" width="180" height="48" rx="6" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="520" y="152" fill="#34d399" fontWeight="bold" fontSize="8.5" textAnchor="middle">Carpeta: ~/repo-review</text>
      <text x="520" y="168" fill={textColor} fontSize="7" textAnchor="middle">Rama: pr-124 (Probando build local)</text>

      <rect x="30" y="192" width="580" height="18" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="204" fill={subtextColor} fontSize="7" textAnchor="middle">git worktree add ../repo-hotfix hotfix/pago evita stashear o reinstalar node_modules al cambiar de contexto.</text>
    </svg>
  );
  },

  "git-reflog-recovery-forensics": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="320" y="30" fill={textColor} fontWeight="bold" fontSize="13" textAnchor="middle">Recuperación Forense con git reflog: El Rescate de Commits Huérfanos</text>

      {/* Terminal reflog output */}
      <rect x="30" y="50" width="330" height="135" rx="8" fill={isDark ? "#0f172a" : "#1e293b"} />
      <text x="45" y="70" fill="#94a3b8" fontSize="8" fontFamily="monospace">$ git reflog</text>
      <text x="45" y="88" fill="#ef4444" fontSize="7.5" fontFamily="monospace">a1b2c3d HEAD@&#123;0&#125;: reset: moving to HEAD~3 (¡Oops!)</text>
      <text x="45" y="105" fill="#34d399" fontSize="7.5" fontFamily="monospace">f7e8d9c HEAD@&#123;1&#125;: commit: feat: 3 días de trabajo</text>
      <text x="45" y="122" fill="#38bdf8" fontSize="7.5" fontFamily="monospace">d4e5f6a HEAD@&#123;2&#125;: commit: feat: base componentes</text>
      <text x="45" y="139" fill="#94a3b8" fontSize="7.5" fontFamily="monospace">9c8b7a6 HEAD@&#123;3&#125;: checkout: moving from main</text>
      <text x="45" y="165" fill="#f59e0b" fontSize="7.5" fontFamily="monospace">$ git branch rescate-heroico HEAD@&#123;1&#125;</text>

      {/* Right: Explanation */}
      <rect x="380" y="50" width="230" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="495" y="70" fill="#34d399" fontWeight="bold" fontSize="10" textAnchor="middle">La Caja Negra de Git</text>
      <text x="395" y="92" fill={textColor} fontSize="7.5">• Registra CADA movimiento de HEAD</text>
      <text x="395" y="107" fill={textColor} fontSize="7.5">• Guarda historial de commits borrados</text>
      <text x="395" y="122" fill={textColor} fontSize="7.5">• Los commits no se eliminan al instante</text>
      <text x="395" y="137" fill={textColor} fontSize="7.5">• Viven ~30-90 días antes del Garbage Collector</text>
      <text x="495" y="165" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">¡Casi NADA se pierde en Git!</text>

      <rect x="30" y="192" width="580" height="15" rx="3" fill={isDark ? "#1e293b" : "#f1f5f9"} />
      <text x="320" y="203" fill={subtextColor} fontSize="7.5" textAnchor="middle">Incluso tras un &apos;git reset --hard&apos; o borrar una rama accidentalmente, reflog permite resucitar el commit intacto.</text>
    </svg>
  );
  }
};
