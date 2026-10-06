import { DiagramRender } from "../diagram.types";

/**
 * Diagrama genérico usado cuando el diagramType no tiene un SVG dedicado
 * (cicd-pipeline, flux-architecture, concept-model, generic-flow o tipos desconocidos).
 */
export const renderFallbackDiagram: DiagramRender = ({ isDark, textColor, subtextColor, border }) => {
return (
  <svg
    viewBox="0 0 640 220"
    className="w-full h-auto max-h-72"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="10"
      y="10"
      width="620"
      height="200"
      rx="12"
      fill={isDark ? "#111827" : "#f8fafc"}
      stroke={border}
      strokeWidth="1.5"
    />

    {/* Step 1: Input / Context */}
    <rect
      x="30"
      y="35"
      width="160"
      height="150"
      rx="10"
      fill={isDark ? "#18181b" : "#f1f5f9"}
      stroke="#3b82f6"
      strokeWidth="1.5"
    />
    <circle cx="55" cy="60" r="10" fill="#3b82f6" />
    <text x="55" y="64" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">1</text>
    <text x="75" y="64" fill="#60a5fa" fontWeight="700" fontSize="12">Entrada & Estado</text>
    <rect x="45" y="85" width="130" height="30" rx="6" fill={isDark ? "#27272a" : "#e2e8f0"} />
    <text x="55" y="104" fill={textColor} fontSize="10" fontFamily="monospace">Invocación / Input</text>
    <rect x="45" y="125" width="130" height="42" rx="6" fill={isDark ? "#27272a" : "#e2e8f0"} />
    <text x="55" y="143" fill={subtextColor} fontSize="9">Contexto léxico</text>
    <text x="55" y="157" fill="#3b82f6" fontSize="9" fontWeight="bold">Scope & Parámetros</text>

    {/* Connection Arrow 1 -> 2 */}
    <path d="M195 110 L230 110" stroke="#6366f1" strokeWidth="2" strokeDasharray="4 4" />
    <polygon points="233,110 226,106 226,114" fill="#6366f1" />

    {/* Step 2: Processing Engine */}
    <rect
      x="240"
      y="35"
      width="160"
      height="150"
      rx="10"
      fill={isDark ? "#1e1b4b" : "#ede9fe"}
      stroke="#6366f1"
      strokeWidth="1.5"
    />
    <circle cx="265" cy="60" r="10" fill="#6366f1" />
    <text x="265" y="64" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">2</text>
    <text x="285" y="64" fill="#a5b4fc" fontWeight="700" fontSize="12">Motor / Browser</text>
    <rect x="255" y="85" width="130" height="30" rx="6" fill={isDark ? "#312e81" : "#ddd6fe"} />
    <text x="265" y="104" fill="#c7d2fe" fontSize="10" fontFamily="monospace">Lógica Interna</text>
    <rect x="255" y="125" width="130" height="42" rx="6" fill={isDark ? "#312e81" : "#ddd6fe"} />
    <text x="265" y="143" fill="#a5b4fc" fontSize="9">Ejecución en Engine</text>
    <text x="265" y="157" fill="#818cf8" fontSize="9" fontWeight="bold">Evaluación & Diffing</text>

    {/* Connection Arrow 2 -> 3 */}
    <path d="M405 110 L440 110" stroke="#10b981" strokeWidth="2" strokeDasharray="4 4" />
    <polygon points="443,110 436,106 436,114" fill="#10b981" />

    {/* Step 3: Result / Output */}
    <rect
      x="450"
      y="35"
      width="160"
      height="150"
      rx="10"
      fill={isDark ? "#064e3b" : "#ecfdf5"}
      stroke="#10b981"
      strokeWidth="1.5"
    />
    <circle cx="475" cy="60" r="10" fill="#10b981" />
    <text x="475" y="64" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">3</text>
    <text x="495" y="64" fill="#6ee7b7" fontWeight="700" fontSize="12">Salida & DOM</text>
    <rect x="465" y="85" width="130" height="30" rx="6" fill={isDark ? "#022c22" : "#d1fae5"} />
    <text x="475" y="104" fill="#a7f3d0" fontSize="10" fontFamily="monospace">Resultado Final</text>
    <rect x="465" y="125" width="130" height="42" rx="6" fill={isDark ? "#022c22" : "#d1fae5"} />
    <text x="475" y="143" fill="#6ee7b7" fontSize="9">Retorno / Mutación</text>
    <text x="475" y="157" fill="#34d399" fontSize="9" fontWeight="bold">UI Actualizada</text>
  </svg>
);
};
