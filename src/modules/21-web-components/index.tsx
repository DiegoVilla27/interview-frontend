import { ISection } from "../../types";

export const questionsWebComponents: ISection = {
  id: "web-components",
  title: "Web Components",
  collapse: "collapseWebComponents",
  icon: "web-components",
  category: "fundamentos",
  description:
    "Estándares W3C de componentes web nativos reutilizables, encapsulados con Shadow DOM, y los frameworks líderes: Lit y Stencil.",
  questions: [
    // === BÁSICO ===
    {
      id: "wc-01",
      title: "¿Qué son los Web Components y cuáles son sus estándares fundamentales?",
      level: "basico",
      tags: ["Web Components", "W3C", "Shadow DOM", "Custom Elements"],
      response:
        "Los Web Components son un conjunto de estándares oficiales de la W3C que permiten crear etiquetas HTML personalizadas, reutilizables y completamente encapsuladas, interoperables en cualquier framework (React, Vue, Angular) o vanilla JavaScript. Sus pilares son: 1) Custom Elements (definición de nuevas etiquetas), 2) Shadow DOM (árbol DOM encapsulado para estilos y markup aislados), y 3) HTML Templates & Slots (<template> y <slot> para marcado inerte y proyección de contenido).",
      codeExample: {
        language: "javascript",
        code: `// 1. Definir la clase extendiendo HTMLElement
class MyBadge extends HTMLElement {
  connectedCallback() {
    this.innerHTML = \`<span class="badge">🚀 \${this.getAttribute('text') || 'Nuevo'}</span>\`;
  }
}

// 2. Registrar la etiqueta personalizada (debe contener un guion)
customElements.define('my-badge', MyBadge);

// Uso en HTML:
// <my-badge text="Entrevista Pro"></my-badge>`,
        output: "Renderiza: <my-badge> -> 🚀 Entrevista Pro",
        explanation:
          "El nombre del elemento DEBE incluir al menos un guion (-) para evitar colisiones con futuras etiquetas nativas de HTML."
      },
      visualDiagram: {
        id: "diag-wc-standards",
        title: "Los 3 Pilares de Web Components",
        caption:
          "Custom Elements (API del navegador) + Shadow DOM (Encapsulación) + Templates/Slots (Composición)",
        diagramType: "wc-standards-pillars"
      },
      interviewTips: {
        whatInterviewersWant:
          "Verificar si conoces los estándares W3C que lo componen y la regla del guion obligatorio en el nombre.",
        commonPitfalls: [
          "Olvidar que el nombre debe llevar guion (ej. 'mycard' fallará, 'my-card' es válido).",
          "Creer que los Web Components reemplazan obligatoriamente a React o Angular, en lugar de complementarlos."
        ],
        followUps: [
          "¿Por qué es obligatorio el guion en el nombre del elemento?",
          "¿Qué sucede si registras dos veces el mismo nombre con customElements.define?"
        ]
      },
      quiz: {
        question:
          "¿Por qué los Custom Elements deben incluir obligatoriamente un guion (-) en su nombre?",
        options: [
          "Por convención de CSS BEM",
          "Para evitar colisiones de nombres con futuras etiquetas estándar de HTML",
          "Para que el motor de JavaScript los reconozca como módulos ES",
          "Porque el parser XML lo requiere históricamente"
        ],
        correctIndex: 1,
        explanation:
          "La especificación de la W3C exige al menos un guion para garantizar que ninguna futura etiqueta nativa de HTML (como <dialog> o <search>) colisione con elementos creados por desarrolladores."
      }
    },
    {
      id: "wc-02",
      title: "¿Qué es el Shadow DOM y en qué se diferencia del Light DOM?",
      level: "basico",
      tags: ["Shadow DOM", "Encapsulación", "CSS Scoping"],
      response:
        "El Light DOM es el árbol DOM normal donde residen los hijos comunes de un elemento, accesible mediante document.querySelector() y afectado por todos los estilos globales. El Shadow DOM es un subárbol DOM separado y encapsulado que se acopla a un elemento (shadow host). Los estilos definidos dentro del Shadow DOM NO se filtran hacia afuera, y las reglas CSS globales NO penetran el Shadow DOM (salvo propiedades heredables como color y font-family, o CSS Custom Properties).",
      codeExample: {
        language: "javascript",
        code: `class UserCard extends HTMLElement {
  constructor() {
    super();
    // Crea un Shadow Root en modo 'open'
    const shadow = this.attachShadow({ mode: 'open' });

    shadow.innerHTML = \`
      <style>
        /* Este estilo solo afecta a la tarjeta, no a la página entera */
        p { color: #6366f1; font-weight: bold; }
      </style>
      <div class="card">
        <p>Usuario: <slot name="username">Anónimo</slot></p>
      </div>
    \`;
  }
}
customElements.define('user-card', UserCard);`,
        output: "Los estilos <style> p { color: #6366f1 } NO afectan a los <p> externos",
        explanation:
          "attachShadow({ mode: 'open' }) permite acceder al shadowRoot mediante el.shadowRoot. En mode 'closed', shadowRoot devuelve null."
      },
      visualDiagram: {
        id: "diag-wc-shadow-dom",
        title: "Arquitectura Shadow DOM vs Light DOM",
        caption:
          "Shadow Boundary aísla completamente los estilos y el marcado interior respecto al árbol global.",
        diagramType: "web-components-shadow-dom"
      },
      interviewTips: {
        whatInterviewersWant:
          "Explicar con claridad el concepto de 'Shadow Boundary', los modos 'open' vs 'closed', y cómo las variables CSS pueden penetrarlo intencionalmente.",
        commonPitfalls: [
          "Creer que mode: 'closed' ofrece seguridad criptográfica (solo oculta la referencia pero no previene ingeniería inversa).",
          "Intentar usar document.querySelector para buscar un elemento que está dentro de un Shadow DOM."
        ],
        followUps: [
          "¿Cómo pueden los estilos de la página padre atravesar el Shadow DOM?",
          "¿Qué diferencia hay entre attachShadow({ mode: 'open' }) y { mode: 'closed' }?"
        ]
      },
      quiz: {
        question:
          "¿Cuál de los siguientes elementos CSS SÍ puede atravesar y heredar sus valores dentro de un Shadow DOM?",
        options: [
          "Reglas globales p { font-size: 20px }",
          "Selectores de clase como .card",
          "CSS Custom Properties (Variables CSS como var(--primary-color))",
          "Animaciones @keyframes declaradas en el archivo global"
        ],
        correctIndex: 2,
        explanation:
          "Las CSS Custom Properties se heredan por el árbol DOM cruzando de forma natural las fronteras del Shadow DOM, siendo el mecanismo estándar para theming."
      }
    },
    {
      id: "wc-03",
      title: "¿Cuáles son los métodos del Ciclo de Vida de un Custom Element nativo?",
      level: "medio",
      tags: ["Ciclo de Vida", "connectedCallback", "attributeChangedCallback"],
      response:
        "Los Custom Elements nativos implementan callbacks de ciclo de vida definidos por la W3C: 1) constructor() (instanciación del elemento y attachShadow; NO se debe manipular el DOM aquí), 2) connectedCallback() (se invoca cada vez que el elemento se inserta en el DOM; aquí se configuran listeners, renders y fetches), 3) disconnectedCallback() (cuando se elimina del DOM; ideal para limpieza de memoria y timers), 4) attributeChangedCallback(name, oldValue, newValue) (se dispara cuando cambia un atributo listado en static get observedAttributes()), y 5) adoptedCallback() (cuando el elemento se mueve a un nuevo documento, por ejemplo en un iframe).",
      codeExample: {
        language: "javascript",
        code: `class CounterBadge extends HTMLElement {
  static get observedAttributes() {
    return ['count']; // Atributos observados obligatorios
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  disconnectedCallback() {
    console.log('Elemento removido: limpiando listeners...');
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'count' && oldValue !== newValue) {
      this.render();
    }
  }

  render() {
    this.shadowRoot.innerHTML = \`<span class="badge">\${this.getAttribute('count') || 0}</span>\`;
  }
}
customElements.define('counter-badge', CounterBadge);`,
        output: "Actualiza automáticamente el badge cuando cambia el atributo 'count'",
        explanation:
          "attributeChangedCallback solo responde a los atributos declarados en observedAttributes."
      },
      visualDiagram: {
        id: "diag-wc-lifecycle",
        title: "Ciclo de Vida de un Custom Element",
        caption:
          "constructor -> connectedCallback -> attributeChangedCallback -> disconnectedCallback",
        diagramType: "wc-lifecycle-hooks"
      },
      interviewTips: {
        whatInterviewersWant:
          "Verificar si sabes qué operaciones van en constructor() vs connectedCallback(), y cómo funciona observedAttributes.",
        commonPitfalls: [
          "Inspeccionar o manipular atributos o hijos en constructor() (el elemento aún no está en el DOM).",
          "Olvidar registrar observedAttributes al usar attributeChangedCallback."
        ]
      },
      quiz: {
        question:
          "¿Qué método estático DEBE implementarse para que attributeChangedCallback se ejecute?",
        options: [
          "static watchAttributes()",
          "static get observedAttributes()",
          "static registerProps()",
          "static props = []"
        ],
        correctIndex: 1,
        explanation:
          "El navegador consulta la propiedad estática observedAttributes (que devuelve un array de strings) para saber qué atributos vigilar."
      }
    },
    {
      id: "wc-04",
      title: "¿Cómo funciona la estilización en Shadow DOM con :host, ::slotted y ::part?",
      level: "medio",
      tags: ["CSS", ":host", "::slotted", "::part", "Design Systems"],
      response:
        "La estilización dentro de Shadow DOM utiliza pseudoclases y pseudoelementos dedicados: 1) :host selecciona el elemento raíz que contiene el shadow DOM. :host(.active) o :host([disabled]) permite estilizarlo según clases o atributos externos. 2) :host-context(.dark-theme) aplica estilos si un ancestro cumple con el selector (ideal para theming). 3) ::slotted(selector) estiliza elementos proyectados en un <slot> (solo selecciona elementos de primer nivel). 4) ::part(nombre) permite que estilos globales penetren intencionalmente elementos específicos que exponen part='nombre'.",
      codeExample: {
        language: "css",
        code: `/* Dentro del <style> del Shadow DOM */
:host {
  display: inline-block;
  border-radius: 8px;
  background-color: var(--card-bg, #ffffff); /* Penetración vía Custom Property */
}

:host([theme="dark"]) {
  background-color: #1e1e2f;
  color: #ffffff;
}

/* Estiliza solo el contenido inyectado en el slot */
::slotted(h3) {
  margin: 0;
  color: #3b82f6;
}

/* En la página externa (CSS global) usando ::part */
custom-card::part(confirm-button) {
  background-color: #10b981;
  color: white;
}`,
        output: "Theming dinámico y penetración controlada con ::part() y CSS variables",
        explanation:
          "::part() es la forma oficial y segura para crear Design Systems con Web Components manteniendo la encapsulación."
      },
      visualDiagram: {
        id: "diag-wc-styling",
        title: "Estilización en Shadow DOM con :host, ::slotted y ::part",
        caption:
          ":host para el contenedor exterior, ::slotted para contenido proyectado y ::part() para penetración de Design Systems.",
        diagramType: "wc-styling-host-slotted-part"
      },
      interviewTips: {
        whatInterviewersWant:
          "Demostrar dominio de :host, ::slotted y ::part para crear librerías de componentes configurables sin romper el aislamiento.",
        commonPitfalls: [
          "Intentar aplicar ::slotted a elementos descendientes anidados (::slotted solo selecciona el nodo raíz proyectado).",
          "Pensar que las variables CSS (--my-var) no atraviesan el Shadow DOM (las custom properties SÍ penetran)."
        ]
      },
      quiz: {
        question:
          "¿Qué selector permite a los estilos CSS externos modificar un elemento interno específico del Shadow DOM que expone un identificador?",
        options: [
          "::deep",
          "::slotted",
          "::part()",
          "::shadow-penetrate"
        ],
        correctIndex: 2,
        explanation:
          "La especificación CSS Shadow Parts define ::part(nombre) para estilizar selectivamente nodos internos que tengan el atributo part='nombre'."
      }
    },
    {
      id: "wc-05",
      title: "¿Qué es Lit (LitElement) y qué ventajas ofrece frente a Web Components nativos?",
      level: "medio",
      tags: ["Lit", "LitElement", "lit-html", "Reactividad"],
      response:
        "Lit es una librería ultraligera (~5KB) desarrollada por Google que elimina el boilerplate de los Web Components nativos. Proporciona: 1) Reactividad declarativa con decoradores como @property() y @state(), 2) Renderizado ultra-rápido mediante 'lit-html' y tagged template literals (html`...`), que solo actualiza las expresiones dinámicas en el DOM sin recrear el árbol, y 3) Manejo automático de ciclo de vida y updates asíncronos en batch (similar a React pero nativo sobre estándares web).",
      codeExample: {
        language: "typescript",
        code: `import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

@customElement('simple-greeting')
export class SimpleGreeting extends LitElement {
  static styles = css\`
    p { color: #6366f1; font-family: sans-serif; }
    button { cursor: pointer; padding: 4px 8px; }
  \`;

  // Propiedad pública reflejada en atributo HTML
  @property({ type: String }) name = 'Mundo';

  // Estado interno privado
  @state() private count = 0;

  private increment() {
    this.count++;
  }

  render() {
    return html\`
      <p>¡Hola, \${this.name}! Clicks: \${this.count}</p>
      <button @click=\${this.increment}>+1</button>
    \`;
  }
}`,
        output: "Componente Lit compilado como Custom Element 100% estándar W3C",
        explanation:
          "Lit compila a estándares web nativos sin imponer un runtime pesado en producción."
      },
      visualDiagram: {
        id: "diag-wc-lit",
        title: "Arquitectura de Rendimiento de Lit",
        caption:
          "LitElement Class -> Tagged Template Literal -> Actualizaciones quirúrgicas directas en el DOM sin Virtual DOM",
        diagramType: "wc-lit-architecture"
      },
      interviewTips: {
        whatInterviewersWant:
          "Explicar por qué Lit supera a React en peso de bundle y velocidad para Design Systems y micro-frontends.",
        commonPitfalls: [
          "Confundir lit-html con JSX (lit-html utiliza tagged templates nativos de JavaScript sin necesidad de compilación forzada)."
        ]
      },
      quiz: {
        question:
          "¿Cómo logra lit-html actualizar el DOM a una velocidad superior al Virtual DOM tradicional?",
        options: [
          "Reconstruye todo el subárbol en cada render",
          "Separa las partes estáticas de las dinámicas usando template literals y solo muta los nodos dinámicos",
          "Usa un hilo de Web Worker en segundo plano para procesar el CSS",
          "Convierte el código a WebAssembly"
        ],
        correctIndex: 1,
        explanation:
          "lit-html procesa el string una sola vez, cachea las referencias a los nodos dinámicos y solo actualiza esos valores exactos cuando cambian."
      }
    },
    {
      id: "wc-06",
      title: "¿Qué es Stencil.js y cuál es su arquitectura para Design Systems empresariales?",
      level: "avanzado",
      tags: ["Stencil", "Compilador", "Design Systems", "TypeScript", "JSX"],
      response:
        "Stencil es un compilador (toolchain) desarrollado por el equipo de Ionic que genera Web Components 100% estándar a partir de código TypeScript y JSX. A diferencia de frameworks como Angular o React que envían un runtime pesado al navegador, Stencil solo actúa en tiempo de compilación. Genera Web Components con: 1) Lazy loading automático de componentes por tag, 2) Server-Side Rendering (SSR) nativo con prerender, 3) Framework Bindings automáticos (genera wrappers nativos para React, Angular y Vue desde una sola base de código), y 4) Rendimiento extremo sin dependencias en producción.",
      codeExample: {
        language: "typescript",
        code: `import { Component, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'enterprise-button',
  styleUrl: 'enterprise-button.css',
  shadow: true,
})
export class EnterpriseButton {
  @Prop() variant: 'primary' | 'secondary' = 'primary';
  @State() isPressed: boolean = false;

  render() {
    return (
      <button 
        class={\`btn btn-\${this.variant} \${this.isPressed ? 'pressed' : ''}\`}
        onClick={() => this.isPressed = !this.isPressed}
      >
        <slot />
      </button>
    );
  }
}`,
        output: "Genera Web Components estándar + bindings automáticos para React, Angular y Vue",
        explanation:
          "Stencil es el estándar de la industria (usado por Apple, Porsche, Ionic) para Design Systems multi-framework."
      },
      visualDiagram: {
        id: "diag-wc-stencil",
        title: "Arquitectura del Compilador Stencil",
        caption:
          "TypeScript + JSX -> Stencil Compiler -> Componentes Web Nativos + Wrappers React/Angular/Vue",
        diagramType: "stencil-architecture"
      },
      interviewTips: {
        whatInterviewersWant:
          "Saber cuándo recomendar Stencil frente a Lit: Stencil es ideal cuando una empresa necesita un único Design System que funcione de forma nativa en equipos de React, Angular y Vue con soporte TypeScript estricto.",
        commonPitfalls: [
          "Creer que Stencil es un framework que corre en el cliente; es un compilador que genera componentes web puros."
        ]
      },
      quiz: {
        question:
          "¿Cuál es una de las mayores ventajas de Stencil.js para Design Systems empresariales multi-equipo?",
        options: [
          "Obliga a toda la empresa a migrar a Angular",
          "Genera automáticamente bindings y paquetes nativos para React, Angular y Vue desde una única fuente de verdad",
          "Elimina el uso de CSS en toda la organización",
          "Solo funciona en entornos móviles"
        ],
        correctIndex: 1,
        explanation:
          "Stencil genera wrappers tipados para React, Angular y Vue automáticamente, permitiendo a cada equipo consumir los componentes como si fueran de su propio framework."
      }
    },
    {
      id: "wc-07",
      title: "Shadow DOM vs Virtual DOM: ¿Cuáles son sus diferencias arquitectónicas?",
      level: "avanzado",
      tags: ["Shadow DOM", "Virtual DOM", "Arquitectura", "Performance"],
      response:
        "La confusión común es creer que compiten directamente, cuando resuelven problemas distintos en capas diferentes: 1) Shadow DOM es un estándar oficial del navegador implementado en C++ a nivel del motor de renderizado. Su objetivo exclusivo es el encapsulamiento de estilos CSS y la privacidad del subárbol DOM. 2) Virtual DOM es un patrón de diseño en JavaScript (usado por React/Vue) que mantiene una representación en memoria del árbol para minimizar manipulaciones costosas mediante diffing y reconciliación. Pueden usarse juntos: un componente React puede renderizar dentro de un Shadow DOM para tener estilos encapsulados.",
      codeExample: {
        language: "javascript",
        code: `// FUSIÓN: Renderizar React dentro de un Shadow DOM nativo
import React from 'react';
import ReactDOM from 'react-dom/client';

class ReactWidgetElement extends HTMLElement {
  connectedCallback() {
    // 1. Shadow DOM para encapsulación total de CSS
    const shadowRoot = this.attachShadow({ mode: 'open' });
    
    // 2. React Virtual DOM montado en el Shadow Root
    const reactMountPoint = document.createElement('div');
    shadowRoot.appendChild(reactMountPoint);
    
    const root = ReactDOM.createRoot(reactMountPoint);
    root.render(<h1>Hola desde React encapsulado en Shadow DOM</h1>);
  }
}
customElements.define('react-widget', ReactWidgetElement);`,
        output: "React ejecutando su reconciliación Virtual DOM DENTRO del Shadow DOM nativo",
        explanation:
          "No son mutuamente excluyentes: Shadow DOM proporciona encapsulación; Virtual DOM optimiza renders."
      },
      visualDiagram: {
        id: "diag-wc-shadow-vs-virtual-dom",
        title: "Comparativa: Shadow DOM (Nativo) vs Virtual DOM (JS)",
        caption:
          "Shadow DOM proporciona encapsulación en C++ del navegador; Virtual DOM optimiza operaciones de re-renderizado en JavaScript.",
        diagramType: "wc-shadow-dom-vs-virtual-dom"
      },
      interviewTips: {
        whatInterviewersWant:
          "Aclarar inmediatamente que NO son alternativas excluyentes: uno es un estándar de encapsulación del navegador y el otro es una técnica de optimización de render en JS.",
        commonPitfalls: [
          "Afirmar que Shadow DOM hace que las páginas sean más rápidas por hacer 'diffing' (Shadow DOM no hace ningún diffing)."
        ]
      },
      quiz: {
        question:
          "¿Cuál es el objetivo primordial del Shadow DOM en el navegador web?",
        options: [
          "Optimizar el tiempo de diffing en JavaScript",
          "Proporcionar encapsulación nativa de marcado HTML y aislamiento de estilos CSS",
          "Reemplazar a Redux en la gestión de estado",
          "Generar llamadas asíncronas automáticas al servidor"
        ],
        correctIndex: 1,
        explanation:
          "El Shadow DOM existe específicamente para aislar el CSS y ocultar el subárbol DOM respecto a la página principal."
      }
    },
    {
      id: "wc-08",
      title: "¿Qué es Declarative Shadow DOM y qué problema soluciona en SSR?",
      level: "experto",
      tags: ["Declarative Shadow DOM", "SSR", "Next.js", "Hydration"],
      response:
        "Históricamente, el Shadow DOM solo podía crearse mediante JavaScript imperativo (element.attachShadow()). Esto impedía el Server-Side Rendering (SSR) porque el navegador recibía HTML plano y no podía pintar el Shadow DOM hasta que se descargaba y ejecutaba el bundle de JS (causando Flash of Unstyled Content o FOUC). Declarative Shadow DOM resuelve esto permitiendo definir el shadow root directamente en el HTML con <template shadowrootmode='open'>. El parser de HTML lo interpreta y pinta al instante antes de que el JS cargue.",
      codeExample: {
        language: "html",
        code: `<!-- Renderizado por el servidor (SSR / Next.js / Astro) -->
<user-badge>
  <template shadowrootmode="open">
    <style>
      .badge {
        background: linear-gradient(135deg, #6366f1, #a855f7);
        color: white;
        padding: 4px 12px;
        border-radius: 9999px;
        font-family: system-ui;
      }
    </style>
    <span class="badge">Staff Engineer</span>
  </template>
</user-badge>

<!-- El navegador parsea esto nativamente SIN esperar al archivo JS -->`,
        output: "Renderizado instantáneo en el primer frame HTML sin FOUC",
        explanation:
          "shadowrootmode reemplazó al anterior shadowroot (deprecado). Soporta 'open' y 'closed'."
      },
      visualDiagram: {
        id: "diag-wc-declarative-shadow-dom",
        title: "Declarative Shadow DOM y SSR sin FOUC",
        caption:
          "El servidor emite <template shadowrootmode='open'> para que el parser HTML renderice el Shadow DOM en el primer frame.",
        diagramType: "wc-declarative-shadow-dom"
      },
      interviewTips: {
        whatInterviewersWant:
          "Demostrar conocimiento de vanguardia (HTML living standard) sobre cómo resolver FOUC y streaming SSR en arquitecturas modernas como Astro o Next.js.",
        commonPitfalls: [
          "Mencionar la sintaxis antigua 'shadowroot' en lugar de la actual 'shadowrootmode'.",
          "No saber por qué SSR y Web Components eran antes incompatibles sin JS."
        ]
      },
      quiz: {
        question:
          "¿Qué atributo de la etiqueta <template> activa el Declarative Shadow DOM nativo en los navegadores modernos?",
        options: [
          "declarative-shadow='true'",
          "shadowrootmode='open'",
          "scoped-root='active'",
          "ssr-shadow='enabled'"
        ],
        correctIndex: 1,
        explanation:
          "La especificación del HTML Living Standard estandarizó shadowrootmode='open' (o 'closed') dentro del elemento <template>."
      }
    },
    {
      id: "wc-09",
      title: "¿Cómo funciona el Event Retargeting en Web Components?",
      level: "experto",
      tags: ["Events", "Event Retargeting", "composedPath"],
      response:
        "Cuando un evento ocurre dentro del Shadow DOM y sube (bubbles) hacia el DOM principal, el navegador ejecuta 'Event Retargeting': modifica la propiedad event.target para que apunte al elemento host (el contenedor exterior) en lugar del elemento interno privado del Shadow DOM. Esto preserva la encapsulación, impidiendo que el mundo exterior dependa de la estructura interna del componente. Si el componente necesita inspeccionar la ruta completa, puede usar event.composedPath().",
      codeExample: {
        language: "javascript",
        code: `// Dentro del Shadow DOM de <modal-dialog> hay un <button id="closeBtn">X</button>

// Listener en la página principal:
document.addEventListener('click', (event) => {
  // Event Retargeting:
  console.log(event.target); 
  // Imprime: <modal-dialog> (NO el botón interno <button id="closeBtn">)

  // Para ver la ruta real (si el evento es composed: true):
  console.log(event.composedPath());
  // Imprime: [button#closeBtn, shadowRoot, modal-dialog, body, html, document, Window]
});

// Al disparar eventos personalizados desde el Shadow DOM:
this.dispatchEvent(new CustomEvent('modal-closed', {
  bubbles: true,   // Permite que suba por el árbol
  composed: true   // Permite que atraviese la frontera del Shadow DOM
}));`,
        output: "event.target se reasigna al Host para mantener la privacidad interna",
        explanation:
          "Sin composed: true, un CustomEvent se detiene en la frontera del Shadow DOM y no llega al documento exterior."
      },
      visualDiagram: {
        id: "diag-wc-event-retargeting",
        title: "Event Retargeting y Propagación Cruzada",
        caption:
          "event.target se reasigna al Host para mantener la privacidad interna; composed: true permite cruzar la frontera del Shadow DOM.",
        diagramType: "wc-event-retargeting"
      },
      interviewTips: {
        whatInterviewersWant:
          "Explicar por qué existe el retargeting (privacidad y no acoplamiento) y cómo composed: true permite que los eventos crucen el shadow boundary.",
        commonPitfalls: [
          "Crear CustomEvents con { bubbles: true } pero olvidar { composed: true }, haciendo que nunca lleguen a listeners externos."
        ]
      },
      quiz: {
        question:
          "Para que un CustomEvent disparado dentro del Shadow DOM cruce el límite y sea escuchado en la página principal, ¿qué propiedad debe tener en true?",
        options: ["crossOrigin", "penetrate", "composed", "capture"],
        correctIndex: 2,
        explanation:
          "La propiedad composed: true es la que indica al navegador que el evento tiene permiso para cruzar las fronteras del Shadow DOM hacia el árbol superior."
      }
    },
    {
      id: "wc-10",
      title: "¿Cómo se integran Web Components con formularios nativos usando ElementInternals?",
      level: "experto",
      tags: ["ElementInternals", "Forms", "Accessibility", "W3C"],
      response:
        "Tradicionalmente, un Custom Element no podía enviar valores en un <form> ni participar en la validación nativa (como :valid o :invalid). La API ElementInternals (this.attachInternals()) resuelve esto convirtiendo el componente en un 'Form-Associated Custom Element'. Permite: 1) static formAssociated = true, 2) this.internals.setFormValue(value), 3) validación personalizada con setValidity(), y 4) soporte de ARIA y accesibilidad sin ensuciar el marcado del host.",
      codeExample: {
        language: "javascript",
        code: `class FormRating extends HTMLElement {
  static formAssociated = true;

  constructor() {
    super();
    this.internals = this.attachInternals();
    this.value = 5;
  }

  connectedCallback() {
    // Sincroniza el valor inicial con el formulario contenedor
    this.internals.setFormValue(this.value.toString());
  }

  setRating(stars) {
    this.value = stars;
    this.internals.setFormValue(stars.toString());
    
    // Validación nativa: si es menor a 3, marcar como inválido
    if (stars < 3) {
      this.internals.setValidity({ customError: true }, 'Se requiere al menos 3 estrellas');
    } else {
      this.internals.setValidity({});
    }
  }
}
customElements.define('form-rating', FormRating);`,
        output: "Funciona con <form action='/submit'> y FormData(form) automáticamente",
        explanation:
          "ElementInternals elimina los antiguos 'hacks' de inyectar <input type='hidden'> ocultos en el DOM."
      },
      visualDiagram: {
        id: "diag-wc-element-internals",
        title: "ElementInternals y Formularios Nativos",
        caption:
          "static formAssociated = true y attachInternals() permiten asociar el Custom Element al <form> con validación y FormData.",
        diagramType: "wc-element-internals-form"
      },
      interviewTips: {
        whatInterviewersWant:
          "Demostrar experiencia construyendo inputs de formulario de calidad empresarial con validación nativa y FormData.",
        commonPitfalls: [
          "No declarar static formAssociated = true antes de llamar a attachInternals()."
        ]
      },
      quiz: {
        question:
          "¿Qué propiedad estática debe declarar una clase de Custom Element para que attachInternals() le permita asociarse a un formulario?",
        options: [
          "static isFormInput = true",
          "static formAssociated = true",
          "static participatesInForm = true",
          "static formTarget = 'input'"
        ],
        correctIndex: 1,
        explanation:
          "El estándar exige static formAssociated = true para activar las capacidades de asociación a formularios nativos."
      }
    }
  ]
};

export default questionsWebComponents;
