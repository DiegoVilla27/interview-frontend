import { ISection } from "../../types";

export const questionsBrowser: ISection = {
  id: "browser",
  title: "Browser",
  collapse: "collapseBrowser",
  icon: "browser",
  category: "fundamentos",
  description:
    "Arquitectura interna de navegadores web: Critical Rendering Path, motor de renderizado y JavaScript, BOM/DOM, APIs de almacenamiento, hilos y seguridad.",
  questions: [
    {
      id: "browser-01",
      title: "\u00bfQu\u00e9 lenguajes son reconocidos por el navegador?",
      level: "basico",
      tags: ["HTML", "CSS", "JavaScript", "WebAssembly", "Browser Runtime"],
      response: "De forma nativa, los motores de los navegadores web modernos reconocen e interpretan cuatro tecnolog\u00edas primordiales: HTML para la estructura jer\u00e1rquica del contenido; CSS para el formateo visual y las reglas de dise\u00f1o; JavaScript (ECMAScript) como el lenguaje de programaci\u00f3n imperativo y din\u00e1mico que gobierna el comportamiento y la interactividad; y WebAssembly (Wasm), un formato binario de bajo nivel y ejecuci\u00f3n casi nativa dise\u00f1ado para computaci\u00f3n intensiva (motores gr\u00e1ficos, criptograf\u00eda, edici\u00f3n multimedia). Cualquier otro lenguaje de alto nivel (TypeScript, Dart, Sass, Rust, C++) debe ser transpilado o compilado previamente hacia JS, CSS o Wasm antes de que el runtime del browser pueda ejecutarlo.",
      codeExample: {
        language: "javascript",
        code: `// Carga y ejecución nativa de WebAssembly junto a JavaScript
async function loadWasmModule() {
  // WebAssembly se compila y enlaza en el mismo hilo de ejecución
  const response = await fetch('/math.wasm');
  const buffer = await response.arrayBuffer();
  const { instance } = await WebAssembly.instantiate(buffer);

  // Llamada a función compilada en C/Rust ejecutada por el motor V8/JSC
  const result = instance.exports.calculateFibonacci(40);
  console.log('Resultado Wasm:', result);

  // Manipulación del DOM mediante JavaScript
  document.getElementById('output').textContent = 'Cálculo: ' + result;
}`,
        explanation: "JavaScript orquesta la UI y el DOM, mientras WebAssembly ejecuta c\u00f3digo binario compilado de alto rendimiento en el mismo entorno de ejecuci\u00f3n seguro (sandbox)."
      },
      visualDiagram: {
        id: "diag-browser-languages",
        title: "Tecnolog\u00edas Nativas del Motor del Navegador",
        caption: "HTML (Parser DOM), CSS (Parser CSSOM), JavaScript (Motor JIT) y WebAssembly (Wasm Engine) convergen en la p\u00e1gina.",
        diagramType: "browser-languages-runtime"
      },
      interviewTips: {
        whatInterviewersWant: "Verificar si reconoces WebAssembly como la cuarta tecnolog\u00eda nativa del navegador adem\u00e1s de HTML, CSS y JS, y entender que TypeScript o Sass requieren compilaci\u00f3n previa.",
        commonPitfalls: ["Decir que TypeScript o Sass son interpretados directamente por el navegador.", "Ignorar el papel de WebAssembly en el desarrollo web moderno."],
        followUps: [
          "¿Qué es WebAssembly y cómo convive con JavaScript?",
          "¿Cómo procesa el navegador cada uno de estos lenguajes?"
        ]
      },
      quiz: {
        question: "\u00bfCu\u00e1l de las siguientes tecnolog\u00edas es ejecutada NATIVAMENTE por los navegadores modernos sin transpilaci\u00f3n previa?",
        options: ["TypeScript", "WebAssembly (Wasm)", "Sass (SCSS)", "JSX"],
        correctIndex: 1,
        explanation: "WebAssembly es un est\u00e1ndar W3C con formato de c\u00f3digo binario ejecutado directamente por los motores de los navegadores junto a JavaScript."
      }
    },
    {
      id: "browser-02",
      title: "\u00bfQu\u00e9 es el DOM?",
      level: "basico",
      tags: ["DOM", "Document Object Model", "Nodos", "Tree", "JavaScript"],
      response: "El DOM (Document Object Model) es una interfaz de programaci\u00f3n de aplicaciones orientada a objetos que representa la estructura jer\u00e1rquica de un documento HTML o XML como un \u00e1rbol de nodos (Tree of Nodes). Cuando el motor del navegador analiza los bytes de un archivo HTML, realiza tokenizaci\u00f3n, construcci\u00f3n de nodos y ensambla este \u00e1rbol en memoria viva. Cada elemento, atributo y fragmento de texto se convierte en un nodo programable (interfaces Node, Element, HTMLElement, Text) que JavaScript puede consultar, agregar, modificar o eliminar din\u00e1micamente en tiempo de ejecuci\u00f3n, desencadenando la actualizaci\u00f3n del renderizado.",
      codeExample: {
        language: "javascript",
        code: `// Creación y ensamblado de nodos en el DOM
const card = document.createElement('article');
card.className = 'profile-card';

const title = document.createElement('h2');
title.textContent = 'Diego Villa';

const badge = document.createElement('span');
badge.classList.add('badge', 'badge-verified');
badge.setAttribute('aria-label', 'Usuario verificado');
badge.textContent = 'Pro';

// Construcción de la jerarquía de árbol
card.appendChild(title);
card.appendChild(badge);

// Inserción en el documento vivo
document.querySelector('#user-container')?.replaceChildren(card);`,
        explanation: "El DOM expone APIs est\u00e1ndar del W3C para crear nodos en memoria y anexarlos al \u00e1rbol principal del documento."
      },
      visualDiagram: {
        id: "diag-browser-dom-tree",
        title: "Estructura Jer\u00e1rquica del \u00c1rbol DOM",
        caption: "Document \u2794 Elemento Ra\u00edz (<html>) \u2794 Ramas (<head>, <body>) \u2794 Elementos y Nodos de Texto.",
        diagramType: "browser-dom-tree-nodes"
      },
      interviewTips: {
        whatInterviewersWant: "Demostrar conocimiento de que el DOM no es el archivo HTML original, sino una representaci\u00f3n en memoria viva de objetos creada tras el parseo del HTML.",
        commonPitfalls: ["Confundir el DOM con el c\u00f3digo fuente HTML original visto en 'Ver c\u00f3digo fuente'.", "Ignorar que los nodos de texto y comentarios tambi\u00e9n forman parte del DOM."],
        followUps: [
          "¿Qué diferencia hay entre el DOM y el HTML fuente?",
          "¿Qué es un DocumentFragment y por qué mejora el rendimiento?"
        ]
      },
      quiz: {
        question: "\u00bfQu\u00e9 diferencia principal existe entre el c\u00f3digo fuente HTML original y el DOM?",
        options: ["No hay diferencia; son exactamente la misma representaci\u00f3n en disco.", "El DOM es un modelo de objetos vivo en memoria que puede ser mutado din\u00e1micamente por scripts y corregido por el parser.", "El DOM solo contiene los elementos que tienen estilos CSS aplicados.", "El c\u00f3digo fuente HTML se almacena en la GPU y el DOM en la CPU."],
        correctIndex: 1,
        explanation: "El DOM es el \u00e1rbol en memoria generado tras el parsing de HTML que refleja correcciones autom\u00e1ticas de sintaxis e interactividad en tiempo real."
      }
    },
    {
      id: "browser-03",
      title: "\u00bfQu\u00e9 es el BOM?",
      level: "basico",
      tags: ["BOM", "window", "navigator", "location", "history", "screen"],
      response: "El BOM (Browser Object Model) es el conjunto de objetos e interfaces que el entorno del navegador proporciona a JavaScript para interactuar con la ventana y el contexto de ejecuci\u00f3n fuera del contenido del documento HTML en s\u00ed. El objeto ra\u00edz global es 'window', el cual act\u00faa simult\u00e1neamente como \u00e1mbito global de JavaScript y punto de acceso al BOM. Los subm\u00f3dulos clave del BOM son: 'navigator' (metadatos del navegador, hardware, geolocalizaci\u00f3n, clipboard), 'location' (manipulaci\u00f3n y an\u00e1lisis de la URL actual), 'history' (navegaci\u00f3n del historial de sesi\u00f3n y APIs de pushState), 'screen' (dimensiones f\u00edsicas del monitor y profundidad de color) y 'localStorage/sessionStorage'. A diferencia del DOM, el BOM hist\u00f3ricamente carec\u00eda de un est\u00e1ndar estricto, aunque hoy est\u00e1 unificado bajo la especificaci\u00f3n HTML de WHATWG.",
      codeExample: {
        language: "javascript",
        code: `// Ejemplos de APIs del Browser Object Model (BOM)

// 1. window.location: manipulación de URL y query params
const currentUrl = new URL(window.location.href);
const searchParam = currentUrl.searchParams.get('filter');

// 2. window.history: navegación SPA sin recarga de página
window.history.pushState({ pageId: 42 }, 'Detalle', '/articulos/42');

// 3. window.navigator: capacidades del dispositivo y portapapeles
if (navigator.clipboard && navigator.onLine) {
  navigator.clipboard.writeText('https://cabuweb.com');
  console.log('User Agent:', navigator.userAgent);
}

// 4. window.screen: dimensiones físicas de la pantalla
console.log('Resolución de pantalla: ' + screen.width + 'x' + screen.height);`,
        explanation: "El BOM abarca 'window' y sus subm\u00f3dulos de contexto del cliente: location, history, navigator y screen."
      },
      visualDiagram: {
        id: "diag-browser-bom-hierarchy",
        title: "Jerarqu\u00eda del Browser Object Model (BOM)",
        caption: "Objeto global Window conteniendo document (DOM), navigator, location, history y screen.",
        diagramType: "browser-bom-hierarchy"
      },
      interviewTips: {
        whatInterviewersWant: "Saber distinguir con precisi\u00f3n el \u00e1mbito del documento (DOM) frente al \u00e1mbito del cliente/ventana del navegador (BOM).",
        commonPitfalls: ["Creer que 'document' est\u00e1 fuera de 'window' cuando en realidad 'window.document' es la ra\u00edz del DOM.", "Asumir que el BOM solo sirve para alertas y modales antiguos."],
        followUps: [
          "¿Qué objetos componen el BOM (window, navigator, location, history, screen)?",
          "¿Por qué el BOM no estuvo estandarizado durante años?"
        ]
      },
      quiz: {
        question: "\u00bfCu\u00e1l de los siguientes objetos NO pertenece al BOM (Browser Object Model)?",
        options: ["window.navigator", "window.history", "document.getElementById", "window.location"],
        correctIndex: 2,
        explanation: "'document.getElementById' pertenece a la especificaci\u00f3n del DOM (interfaz Document/Element), no a las APIs del contenedor BOM."
      }
    },
    {
      id: "browser-04",
      title: "\u00bfQu\u00e9 es el localStorage?",
      level: "basico",
      tags: ["localStorage", "Web Storage", "Persistencia", "Key-Value"],
      response: "localStorage es una API s\u00edncrona de almacenamiento clave-valor en el cliente definida en la especificaci\u00f3n Web Storage de WHATWG. Permite a las aplicaciones web persistir datos sin fecha de expiraci\u00f3n; es decir, los datos persisten indefinidamente incluso tras cerrar pesta\u00f1as, reiniciar el navegador o apagar el sistema operativo, hasta que sean eliminados expl\u00edcitamente por el usuario o mediante c\u00f3digo (localStorage.clear()). Su cuota est\u00e1ndar es de aproximadamente 5 MB por origen (protocolo + dominio + puerto). Solo almacena cadenas de texto (DOMString), por lo que objetos complejos deben serializarse con JSON.stringify(). Al ser una API s\u00edncrona y ejecutarse en el hilo principal (main thread), lecturas o escrituras de grandes vol\u00famenes de datos pueden causar microbloqueos en la interfaz.",
      codeExample: {
        language: "typescript",
        code: `// Helper con tipado seguro y manejo de cuota para localStorage
export class SafeStorage {
  static setItem<T>(key: string, value: T): boolean {
    try {
      const serialized = JSON.stringify(value);
      localStorage.setItem(key, serialized);
      return true;
    } catch (error) {
      if (error instanceof DOMException && error.name === 'QuotaExceededError') {
        console.error('Límite de cuota de localStorage (~5MB) alcanzado.');
      }
      return false;
    }
  }

  static getItem<T>(key: string, fallback: T): T {
    try {
      const raw = localStorage.getItem(key);
      return raw ? (JSON.parse(raw) as T) : fallback;
    } catch {
      return fallback;
    }
  }
}`,
        explanation: "localStorage requiere serializaci\u00f3n JSON y control de errores por l\u00edmite de cuota (QuotaExceededError) y modo inc\u00f3gnito estricto."
      },
      visualDiagram: {
        id: "diag-browser-localstorage",
        title: "Ciclo de Vida y Persistencia de localStorage",
        caption: "Almacenamiento persistente en disco sin caducidad, ligado al origen (protocolo + host + puerto).",
        diagramType: "browser-localstorage-lifecycle"
      },
      interviewTips: {
        whatInterviewersWant: "Mencionar el l\u00edmite de cuota (~5MB), la naturaleza s\u00edncrona/bloqueante del hilo principal, la serializaci\u00f3n string y la vulnerabilidad XSS si se guardan tokens sensibles.",
        commonPitfalls: ["Almacenar JWTs o datos sensibles en localStorage sin reconocer el riesgo de robo mediante Cross-Site Scripting (XSS).", "Olvidar que las claves y valores solo aceptan strings."],
        followUps: [
          "¿Por qué localStorage es síncrono y qué impacto tiene en el rendimiento?",
          "¿Por qué no deberías guardar tokens de autenticación en localStorage?"
        ]
      },
      quiz: {
        question: "\u00bfCu\u00e1l es el comportamiento de persistencia de localStorage al cerrar el navegador?",
        options: ["Los datos se borran autom\u00e1ticamente al cerrar la pesta\u00f1a activa.", "Los datos se transfieren autom\u00e1ticamente a cookies HTTP.", "Los datos se conservan indefinidamente en disco hasta que se borren manualmente o por script.", "Los datos expiran tras 24 horas exactas por defecto."],
        correctIndex: 2,
        explanation: "localStorage no tiene tiempo de expiraci\u00f3n integrado; persiste en disco hasta ser eliminado expl\u00edcitamente."
      }
    },
    {
      id: "browser-05",
      title: "\u00bfQu\u00e9 es el sessionStorage?",
      level: "basico",
      tags: ["sessionStorage", "Web Storage", "Pesta\u00f1a", "Session LifeCycle"],
      response: "sessionStorage es una interfaz de Web Storage s\u00edncrona dise\u00f1ada para retener datos clave-valor mientras dure la sesi\u00f3n de navegaci\u00f3n de la p\u00e1gina. A diferencia de localStorage, el ciclo de vida de sessionStorage est\u00e1 estrictamente vinculado a la pesta\u00f1a o ventana del navegador que lo origin\u00f3. Aunque la p\u00e1gina se recargue (F5 o navegaci\u00f3n hacia adelante/atr\u00e1s), los datos se preservan; sin embargo, en el instante en que la pesta\u00f1a o ventana se cierra, todos los datos almacenados se eliminan de forma irreversible. Adem\u00e1s, sessionStorage est\u00e1 aislado por contexto de navegaci\u00f3n: abrir la misma URL exacta en dos pesta\u00f1as separadas crea dos almacenes de sessionStorage completamente independientes y aislados entre s\u00ed.",
      codeExample: {
        language: "javascript",
        code: `// Gestión de estado de formulario temporal en sessionStorage
const FORM_CACHE_KEY = 'draft_checkout_step2';

function persistFormDraft(formData) {
  sessionStorage.setItem(FORM_CACHE_KEY, JSON.stringify(formData));
}

function restoreFormDraft() {
  const cached = sessionStorage.getItem(FORM_CACHE_KEY);
  return cached ? JSON.parse(cached) : null;
}

// Escuchar cambios de input para auto-guardado en la sesión
document.querySelector('#checkout-form')?.addEventListener('input', (e) => {
  const target = e.target;
  const current = restoreFormDraft() || {};
  current[target.name] = target.value;
  persistFormDraft(current);
});`,
        explanation: "sessionStorage es perfecto para wizards o flujos de checkout por pasos donde los datos no deben persistir tras abandonar la pesta\u00f1a."
      },
      visualDiagram: {
        id: "diag-browser-sessionstorage",
        title: "Aislamiento por Pesta\u00f1a de sessionStorage",
        caption: "Dos pesta\u00f1as en el mismo dominio poseen instancias de sessionStorage 100% aisladas e independientes.",
        diagramType: "browser-sessionstorage-scope"
      },
      interviewTips: {
        whatInterviewersWant: "Asegurar que entiendes que duplicar una pesta\u00f1a (cmd+click o click derecho) puede copiar el estado inicial, pero modificar una no afectar\u00e1 a la otra.",
        commonPitfalls: ["Creer que sessionStorage se comparte entre pesta\u00f1as del mismo dominio como lo hace localStorage."],
        followUps: [
          "¿sessionStorage se comparte entre pestañas del mismo origen?",
          "¿Qué ocurre con sessionStorage al duplicar una pestaña?"
        ]
      },
      quiz: {
        question: "\u00bfQu\u00e9 ocurre con los datos de sessionStorage si el usuario abre una nueva pesta\u00f1a con la misma URL?",
        options: ["La nueva pesta\u00f1a comparte el mismo almac\u00e9n reactivo en tiempo real.", "La nueva pesta\u00f1a recibe un almac\u00e9n de sessionStorage nuevo y completamente independiente.", "Se genera un error de concurrencia en el navegador.", "Los datos de la pesta\u00f1a anterior son sobreescritos autom\u00e1ticamente."],
        correctIndex: 1,
        explanation: "sessionStorage est\u00e1 estrictamente delimitado al contexto de navegaci\u00f3n (pesta\u00f1a individual). Cada pesta\u00f1a tiene su propio almac\u00e9n aislado."
      }
    },
    {
      id: "browser-06",
      title: "\u00bfQu\u00e9 es una cookie?",
      level: "basico",
      tags: ["Cookies", "HttpOnly", "Secure", "SameSite", "Headers"],
      response: "Una cookie HTTP es un peque\u00f1o fragmento de datos (l\u00edmite de ~4 KB) que un servidor web env\u00eda al navegador mediante la cabecera 'Set-Cookie' o que puede ser gestionada en el cliente mediante 'document.cookie'. El navegador almacena las cookies y las reenv\u00eda autom\u00e1ticamente en cada solicitud HTTP subsiguiente al mismo dominio a trav\u00e9s de la cabecera 'Cookie'. Las cookies poseen directivas de seguridad cruciales: 'HttpOnly' (impide que scripts de JS accedan a la cookie, mitigando ataques XSS contra tokens de sesi\u00f3n), 'Secure' (obliga a transmitirla \u00fanicamente mediante canales cifrados HTTPS) y 'SameSite=Strict|Lax|None' (controla si la cookie se adjunta en solicitudes cross-site, protegiendo contra ataques CSRF).",
      codeExample: {
        language: "javascript",
        code: `// 1. Escritura de cookie desde cliente (solo si NO es HttpOnly)
function setClientCookie(name, value, days = 7) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value) +
    '; expires=' + expires + '; path=/; SameSite=Lax; Secure';
}

// 2. Cabecera ideal generada por un servidor (Express/Node) para autenticación:
// Set-Cookie: sessionId=xyz123abc; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=3600

// 3. Lectura de cookies en JavaScript:
function getCookie(name) {
  return document.cookie
    .split('; ')
    .find((row) => row.startsWith(name + '='))
    ?.split('=')[1];
}`,
        explanation: "Las cookies con flag HttpOnly NO son legibles por document.cookie, blindando tokens de autenticaci\u00f3n contra fugas por XSS."
      },
      visualDiagram: {
        id: "diag-browser-cookies",
        title: "Banderas de Seguridad Cr\u00edticas en Cookies",
        caption: "HttpOnly bloquea acceso JS (anti-XSS), Secure exige HTTPS y SameSite previene ataques CSRF.",
        diagramType: "browser-cookies-security-flags"
      },
      interviewTips: {
        whatInterviewersWant: "Distinguir de inmediato HttpOnly, Secure y SameSite (Lax, Strict, None) y explicar por qu\u00e9 los tokens de sesi\u00f3n sensibles NUNCA deben dejarse expuestos en document.cookie.",
        commonPitfalls: ["Olvidar que las cookies viajan en la cabecera de CADA petici\u00f3n HTTP, aumentando el payload de red si se almacenan datos innecesarios."],
        followUps: [
          "¿Qué hacen los atributos HttpOnly, Secure y SameSite?",
          "¿Qué diferencia hay entre SameSite=Strict, Lax y None?"
        ]
      },
      quiz: {
        question: "\u00bfQu\u00e9 atributo de una cookie impide de manera efectiva que JavaScript acceda a ella v\u00eda document.cookie?",
        options: ["SameSite=Strict", "HttpOnly", "Secure", "Domain=localhost"],
        correctIndex: 1,
        explanation: "La directiva HttpOnly instruye al navegador para que oculte la cookie del entorno de JavaScript (document.cookie), previniendo su exfiltraci\u00f3n mediante XSS."
      }
    },
    {
      id: "browser-07",
      title: "\u00bfQu\u00e9 es la cach\u00e9 del navegador?",
      level: "basico",
      tags: ["HTTP Cache", "Cache-Control", "ETag", "Disk Cache", "Memory Cache"],
      response: "La cach\u00e9 del navegador es un subsistema de almacenamiento temporal en memoria RAM (Memory Cache) y disco local (Disk Cache) que retiene copias de recursos web (documentos HTML, hojas CSS, bundles JS, fuentes e im\u00e1genes). Su prop\u00f3sito es evitar peticiones de red redundantes, reducir la latencia, economizar ancho de banda y acelerar dr\u00e1sticamente los tiempos de carga en visitas recurrentes. La cach\u00e9 opera seg\u00fan las cabeceras HTTP de respuesta: 'Cache-Control' (max-age, no-cache, no-store, immutable), validadores condicionales como 'ETag' (hash del contenido) y 'Last-Modified' (fecha de modificaci\u00f3n), los cuales permiten al navegador emitir peticiones condicionales con 'If-None-Match' y recibir respuestas ultra ligeras '304 Not Modified'.",
      codeExample: {
        language: "javascript",
        code: `// Control de la estrategia de caché mediante la Fetch API nativa
async function fetchAssetWithPolicy(url) {
  // Opciones de cache: 'default', 'no-store', 'reload', 'no-cache', 'force-cache'
  const response = await fetch(url, {
    cache: 'no-cache', // Valida con el servidor (ETag) antes de usar la copia local
    headers: {
      'Accept': 'application/json'
    }
  });

  if (response.status === 304) {
    console.log('Recurso no modificado: servido desde caché del cliente.');
  }

  return response.json();
}`,
        explanation: "La directiva 'no-cache' obliga al navegador a revalidar el recurso con el servidor mediante ETag antes de consumirlo de la cach\u00e9 local."
      },
      visualDiagram: {
        id: "diag-browser-cache",
        title: "Flujo de Decisi\u00f3n de la Cach\u00e9 del Navegador",
        caption: "Memory Cache \u2794 Disk Cache \u2794 Petici\u00f3n Condicional (ETag / 304) \u2794 Petici\u00f3n de Red Completa (200).",
        diagramType: "browser-cache-mechanisms"
      },
      interviewTips: {
        whatInterviewersWant: "Comprender la diferencia exacta entre 'no-store' (nunca guardar nada) y 'no-cache' (guardar pero revalidar siempre antes de usar con ETag).",
        commonPitfalls: ["Creer que 'no-cache' significa 'no almacenar'. Para no guardar jam\u00e1s se debe usar estrictamente 'Cache-Control: no-store'."],
        followUps: [
          "¿Qué diferencia hay entre Cache-Control: no-cache y no-store?",
          "¿Cómo funcionan las validaciones con ETag y Last-Modified?"
        ]
      },
      quiz: {
        question: "\u00bfQu\u00e9 cabecera Cache-Control impide por completo que el navegador guarde el recurso en cualquier tipo de cach\u00e9?",
        options: ["Cache-Control: no-cache", "Cache-Control: max-age=0", "Cache-Control: no-store", "Cache-Control: must-revalidate"],
        correctIndex: 2,
        explanation: "'no-store' proh\u00edbe taxativamente guardar el recurso en memoria o disco, ideal para datos altamente confidenciales o din\u00e1micos."
      }
    },
    {
      id: "browser-08",
      title: "\u00bfCu\u00e1l es la diferencia entre DOM y BOM?",
      level: "medio",
      tags: ["DOM", "BOM", "window vs document", "W3C", "WHATWG"],
      response: "La diferencia medular reside en su \u00e1mbito de responsabilidad: El DOM (Document Object Model) representa exclusivamente el contenido y la jerarqu\u00eda de etiquetas del documento HTML/XML cargado; est\u00e1 estandarizado por el W3C/WHATWG y su ra\u00edz es el objeto 'document'. Por su parte, el BOM (Browser Object Model) representa el entorno hu\u00e9sped proporcionado por el navegador para interactuar con la ventana, el hardware y la navegaci\u00f3n web fuera del documento mismo (pantalla, portapapeles, historial, geolocalizaci\u00f3n, barra de direcciones); su ra\u00edz es el objeto 'window'. Estructuralmente, 'document' es una propiedad hija de 'window' (window.document), integrando el DOM como un subsistema dentro del entorno global del navegador.",
      codeExample: {
        language: "javascript",
        code: `// CONTRASTE: APIs del DOM vs APIs del BOM

// 1. DOM: Operaciones sobre el documento, elementos y contenido
const mainTitle = window.document.querySelector('h1');
mainTitle.style.color = '#38bdf8';
const newParagraph = document.createElement('p');
document.body.appendChild(newParagraph);

// 2. BOM: Operaciones sobre la ventana, navegación y entorno del cliente
const isOnline = window.navigator.onLine;
const userViewportWidth = window.innerWidth;
window.history.back(); // Navegación en el historial
window.scrollTo({ top: 0, behavior: 'smooth' });`,
        explanation: "El DOM manipula los nodos del documento activo, mientras el BOM controla la ventana del navegador y sus capacidades del sistema."
      },
      visualDiagram: {
        id: "diag-browser-dom-bom",
        title: "Comparativa Estructural: DOM vs BOM",
        caption: "Window (BOM) engloba las APIs del navegador y contiene a Document (DOM) como su \u00e1rbol de contenido.",
        diagramType: "browser-dom-vs-bom"
      },
      interviewTips: {
        whatInterviewersWant: "Escuchar que 'window.document' conecta ambos mundos y que el DOM se centra en el \u00e1rbol HTML mientras el BOM se enfoca en el cliente/navegador.",
        commonPitfalls: ["Afirmar que son APIs independientes y desconectadas sin advertir que 'document' cuelga directamente de 'window'."],
        followUps: [
          "¿window.document forma parte del BOM o del DOM?",
          "¿Qué APIs del BOM se usan en una SPA para el enrutamiento (History API)?"
        ]
      },
      quiz: {
        question: "\u00bfCu\u00e1l de las siguientes afirmaciones describe con exactitud la relaci\u00f3n entre window y document?",
        options: ["window y document son objetos hermanos sin conexi\u00f3n jer\u00e1rquica.", "document es el objeto padre global y window es una propiedad de document.", "window es el objeto global ra\u00edz del BOM y document es una propiedad de window que representa la ra\u00edz del DOM.", "El DOM solo existe en Node.js y el BOM solo en navegadores."],
        correctIndex: 2,
        explanation: "En los navegadores, window es el contenedor global de nivel superior, y document (la ra\u00edz del DOM) es una propiedad de window (window.document)."
      }
    },
    {
      id: "browser-09",
      title: "\u00bfQu\u00e9 es el event loop en los navegadores?",
      level: "medio",
      tags: ["Event Loop", "Call Stack", "Microtasks", "Macrotasks", "requestAnimationFrame"],
      response: "El Event Loop (bucle de eventos) es el mecanismo de coordinaci\u00f3n del navegador que permite a JavaScript ejecutar c\u00f3digo no bloqueante y as\u00edncrono sobre un \u00fanico hilo principal (Single Threaded). El ciclo opera continuamente: 1. Ejecuta el c\u00f3digo s\u00edncrono en el Call Stack hasta vaciarlo. 2. Drena por completo la cola de Microtasks (Promises: then/catch/finally, queueMicrotask, MutationObserver), procesando incluso microtareas encoladas por otras microtareas. 3. Si corresponde refrescar la pantalla (t\u00edpicamente a 60Hz/120Hz), ejecuta los callbacks de renderizado como requestAnimationFrame() y prosigue con el pipeline de Layout y Paint. 4. Toma una \u00fanica Macrotask (Task Queue: setTimeout, setInterval, eventos I/O de red o usuario) y la coloca en el Call Stack. El ciclo se repite indefinidamente.",
      codeExample: {
        language: "javascript",
        code: `// Orden de ejecución predecible del Event Loop
console.log('1. Call Stack síncrono');

setTimeout(() => {
  console.log('4. Macrotask (Task Queue)');
}, 0);

Promise.resolve().then(() => {
  console.log('2. Microtask 1 (Microtask Queue)');
}).then(() => {
  console.log('3. Microtask 2 (Microtask drenada antes de render)');
});

requestAnimationFrame(() => {
  console.log('Animación: render step antes del repaint visual');
});`,
        explanation: "Las microtareas (Promises) se vac\u00edan inmediatamente tras el Call Stack y tienen prioridad absoluta sobre las macrotareas (setTimeout)."
      },
      visualDiagram: {
        id: "diag-browser-event-loop",
        title: "Arquitectura del Event Loop en el Navegador",
        caption: "Call Stack \u2794 Vaciar Cola de Microtasks \u2794 requestAnimationFrame / Render \u2794 1 Macrotask.",
        diagramType: "event-loop"
      },
      interviewTips: {
        whatInterviewersWant: "Explicar el orden estricto de precedencia: Call Stack s\u00edncrono -> Todas las Microtasks -> Render/rAF -> Una Macrotask.",
        commonPitfalls: ["Pensar que setTimeout(fn, 0) se ejecuta de inmediato sin ceder el turno a las microtareas y al renderizado."],
        followUps: [
          "¿Dónde encaja el renderizado del navegador dentro del event loop?",
          "¿Cómo detectarías tareas largas (Long Tasks) en producción?"
        ]
      },
      quiz: {
        question: "\u00bfQu\u00e9 cola se drena completamente antes de procesar la siguiente macrotarea (como setTimeout)?",
        options: ["La cola de eventos de clic del usuario.", "La cola de Microtasks (Microtask Queue: Promises, queueMicrotask).", "La cola de Web Workers.", "La cola de recolecci\u00f3n de basura (Garbage Collector)."],
        correctIndex: 1,
        explanation: "La cola de Microtasks se procesa y vac\u00eda exhaustivamente en cuanto el Call Stack queda libre, antes de permitir que cualquier Macrotask se ejecute."
      }
    },
    {
      id: "browser-10",
      title: "\u00bfQu\u00e9 son los Web Workers?",
      level: "medio",
      tags: ["Web Workers", "Hilos", "Multithreading", "postMessage", "Main Thread"],
      response: "Los Web Workers son hilos de ejecuci\u00f3n en segundo plano (Background Threads) que corren en paralelo al hilo principal (Main Thread) del navegador. Permiten ejecutar c\u00e1lculos matem\u00e1ticos pesados, procesamiento de im\u00e1genes o parsing masivo sin congelar la interfaz gr\u00e1fica ni degradar la tasa de cuadros (60/120 FPS). Operan en un contexto global aislado ('self' o DedicatedWorkerGlobalScope) y NO tienen acceso al DOM, a 'window' ni a 'document'. La comunicaci\u00f3n entre el hilo principal y el Worker es as\u00edncrona y basada en paso de mensajes mediante 'postMessage()' y el evento 'onmessage', utilizando Structured Clone Algorithm o transferencia de memoria directa de objetos ArrayBuffer (Transferable Objects) con costo de copia cero.",
      codeExample: {
        language: "javascript",
        code: `// Hilo Principal (Main Thread)
const worker = new Worker(new URL('./heavy-calc.worker.ts', import.meta.url));

// Transferencia de memoria de alto rendimiento (Zero-Copy Transferable)
const dataBuffer = new Float64Array(10_000_000);
worker.postMessage({ buffer: dataBuffer.buffer }, [dataBuffer.buffer]);

worker.onmessage = (event) => {
  console.log('Cálculo finalizado por el worker:', event.data);
};

// Dentro de heavy-calc.worker.ts (Background Thread)
self.onmessage = (event) => {
  const { buffer } = event.data;
  const view = new Float64Array(buffer);
  // Procesamiento intensivo sin congelar la UI...
  self.postMessage({ success: true, processedSize: view.length });
};`,
        explanation: "Los Web Workers evitan bloquear el main thread enviando datos pesados mediante postMessage y objetos Transferable."
      },
      visualDiagram: {
        id: "diag-browser-web-workers",
        title: "Arquitectura Multihilo con Web Workers",
        caption: "Main Thread (UI y DOM) se comunica as\u00edncronamente v\u00eda postMessage con Worker Threads en segundo plano.",
        diagramType: "browser-web-workers-threading"
      },
      interviewTips: {
        whatInterviewersWant: "Mencionar que no tienen acceso al DOM, que evitan el jank en la UI y explicar el uso de Transferable Objects para no clonar buffers gigantes.",
        commonPitfalls: ["Intentar manipular 'document' o 'window' dentro de un Web Worker.", "Olvidar que el paso de objetos pesados no transferidos por postMessage implica un clonado con costo de serializaci\u00f3n."],
        followUps: [
          "¿Cómo se comunican el hilo principal y un worker?",
          "¿Cuándo no compensa usar un Web Worker por el coste de serialización?"
        ]
      },
      quiz: {
        question: "\u00bfA cu\u00e1l de los siguientes elementos TIENE acceso directo un Dedicated Web Worker?",
        options: ["document.body", "window.localStorage", "fetch API y self.crypto", "CSSOM y requestAnimationFrame"],
        correctIndex: 2,
        explanation: "Los Web Workers no acceden al DOM ni a window/localStorage, pero s\u00ed cuentan con fetch, WebSockets, IndexedDB, crypto y temporizadores."
      }
    },
    {
      id: "browser-11",
      title: "\u00bfQu\u00e9 es CORS en el navegador?",
      level: "medio",
      tags: ["CORS", "Cross-Origin", "Preflight", "OPTIONS", "Access-Control"],
      response: "CORS (Cross-Origin Resource Sharing) es un mecanismo de seguridad implementado de forma obligatoria por los navegadores que utiliza cabeceras HTTP para permitir o restringir que una aplicaci\u00f3n web alojada en un origen acceda a recursos ubicados en un origen diferente (protocolo, dominio o puerto distintos). Si una petici\u00f3n no es 'simple' (por ejemplo, usa m\u00e9todos como PUT/DELETE, env\u00eda un Content-Type 'application/json' o adjunta headers personalizados), el navegador detiene la petici\u00f3n y env\u00eda de forma transparente una solicitud previa denominada 'Preflight' (m\u00e9todo HTTP OPTIONS). Si el servidor no responde favorablemente con cabeceras como 'Access-Control-Allow-Origin' y 'Access-Control-Allow-Methods', el navegador bloquea la respuesta y arroja un error en la consola.",
      codeExample: {
        language: "javascript",
        code: `// Petición compleja que detonará una solicitud Preflight (OPTIONS)
async function makeAuthorizedApiCall() {
  try {
    const response = await fetch('https://api.empresa.com/v1/users/42', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json', // No simple -> Dispara OPTIONS
        'Authorization': 'Bearer eyJhbGciOi...'
      },
      body: JSON.stringify({ active: true }),
      credentials: 'include' // Envía cookies HttpOnly en peticiones cross-origin
    });
    return await response.json();
  } catch (err) {
    // Si el backend no tiene cabeceras CORS configuradas, JS cae aquí
    console.error('Petición bloqueada por política CORS del navegador:', err);
  }
}`,
        explanation: "El navegador intercepta la respuesta si las cabeceras Access-Control-* no coinciden con el origen o las credenciales requeridas."
      },
      visualDiagram: {
        id: "diag-browser-cors",
        title: "Flujo de Solicitud Preflight CORS (OPTIONS)",
        caption: "Cliente env\u00eda OPTIONS Preflight \u2794 Servidor valida cabeceras permitidas \u2794 Cliente env\u00eda petici\u00f3n real (PUT/POST).",
        diagramType: "cors-preflight"
      },
      interviewTips: {
        whatInterviewersWant: "Resaltar que CORS es una restricci\u00f3n impuesta por el NAVEGADOR para proteger al usuario, no un firewall del servidor. Herramientas como curl o Postman no ejecutan validaciones CORS.",
        commonPitfalls: ["Creer que la petici\u00f3n nunca lleg\u00f3 al servidor; con peticiones simples o sin preflight el servidor s\u00ed recibe y procesa la solicitud, pero el navegador oculta la respuesta."],
        followUps: [
          "¿Qué cabeceras intervienen en una petición con credenciales?",
          "¿Por qué CORS protege al usuario y no al servidor?"
        ]
      },
      quiz: {
        question: "\u00bfPor qu\u00e9 Postman o curl pueden realizar una petici\u00f3n a una API sin recibir errores de CORS, pero un navegador la bloquea?",
        options: ["Porque Postman cifra las cabeceras con HTTPS autom\u00e1ticamente.", "Porque CORS es una pol\u00edtica de seguridad impuesta exclusivamente por el runtime del navegador web.", "Porque las peticiones de Postman siempre usan el m\u00e9todo OPTIONS por defecto.", "Porque los servidores solo aplican CORS a sistemas operativos Windows."],
        correctIndex: 1,
        explanation: "CORS es una restricci\u00f3n del lado del cliente impuesta por los navegadores para proteger a los usuarios frente a scripts maliciosos cross-origin."
      }
    },
    {
      id: "browser-12",
      title: "\u00bfQu\u00e9 es el Same-Origin Policy?",
      level: "medio",
      tags: ["SOP", "Same-Origin Policy", "Origen", "Seguridad", "iframes"],
      response: "La Same-Origin Policy (SOP o Pol\u00edtica del Mismo Origen) es la piedra angular de la seguridad web implementada en todos los navegadores modernos. Establece que un script cargado desde un origen espec\u00edfico solo puede acceder e interactuar con recursos (DOM, cookies, almacenamiento local, peticiones de red Ajax) de su id\u00e9ntico origen. Un origen se define estrictamente por la tupla: Protocolo (Esquema), Dominio (Host) y Puerto. Por ejemplo, https://app.com:443 difiere de http://app.com (distinto protocolo), de https://api.app.com (distinto subdominio) y de https://app.com:8080 (distinto puerto). SOP evita que un sitio malicioso incruste tu banco en un iframe y lea tus datos privados o tokens.",
      codeExample: {
        language: "javascript",
        code: `// Evaluación matemática de la regla de Mismo Origen (SOP)
// Origen Base: https://midominio.com:443/perfil

// 1. https://midominio.com/configuracion    -> MISMO ORIGEN (mismo proto, host, puerto)
// 2. http://midominio.com/perfil            -> BLOQUEADO (protocolo http !== https)
// 3. https://api.midominio.com/perfil       -> BLOQUEADO (subdominio distinto)
// 4. https://midominio.com:8443/perfil      -> BLOQUEADO (puerto 8443 !== 443)

// Comunicación segura entre orígenes controlada mediante postMessage:
window.addEventListener('message', (event) => {
  // Validación innegociable de seguridad:
  if (event.origin !== 'https://partner-seguro.com') return;
  console.log('Mensaje confiable recibido de iframe:', event.data);
});`,
        explanation: "SOP eval\u00faa la tupla (Protocolo + Host + Puerto). La comunicaci\u00f3n cross-origin leg\u00edtima exige validar event.origin en window.postMessage."
      },
      visualDiagram: {
        id: "diag-browser-sop",
        title: "Regla de Oro de Same-Origin Policy (SOP)",
        caption: "Protocolo, Host y Puerto deben ser 100% id\u00e9nticos para conceder acceso directo al DOM o Storage.",
        diagramType: "browser-same-origin-policy"
      },
      interviewTips: {
        whatInterviewersWant: "Citar de memoria los tres componentes del origen (Protocolo + Host + Puerto) y explicar c\u00f3mo relajarlo leg\u00edtimamente (CORS, postMessage con validaci\u00f3n de origen).",
        commonPitfalls: ["Creer que cambiar solo de subdominio (app.com a api.app.com) califica como mismo origen."],
        followUps: [
          "¿Qué define exactamente un mismo origen (esquema, host, puerto)?",
          "¿Qué mecanismos permiten comunicación cross-origin de forma controlada?"
        ]
      },
      quiz: {
        question: "\u00bfCu\u00e1l de las siguientes URLs comparte el MISMO origen con 'https://tienda.com:443/productos'?",
        options: ["http://tienda.com:443/carrito", "https://tienda.com/checkout", "https://checkout.tienda.com:443/pago", "https://tienda.com:8080/productos"],
        correctIndex: 1,
        explanation: "'https://tienda.com/checkout' usa https (443 por defecto) y tienda.com; por lo tanto, protocolo, host y puerto coinciden con exactitud."
      }
    },
    {
      id: "browser-13",
      title: "\u00bfQu\u00e9 diferencia hay entre localStorage, sessionStorage y cookies?",
      level: "medio",
      tags: ["localStorage", "sessionStorage", "Cookies", "Comparativa", "Seguridad"],
      response: "Las tres tecnolog\u00edas de almacenamiento en el cliente difieren dr\u00e1sticamente en persistencia, capacidad, transmisi\u00f3n de red y seguridad: 1. Capacidad: localStorage y sessionStorage ofrecen ~5-10 MB por origen, mientras que las cookies se limitan a ~4 KB. 2. Tr\u00e1fico de Red: Las cookies se env\u00edan autom\u00e1ticamente al servidor en cada cabecera HTTP del dominio coincidente; Web Storage (local/session) es puramente del lado cliente y nunca se env\u00eda autom\u00e1ticamente por la red. 3. Ciclo de Vida: localStorage persiste sin expiraci\u00f3n hasta borrado expl\u00edcito; sessionStorage se destruye al cerrar la pesta\u00f1a; las cookies viven seg\u00fan su fecha 'Expires/Max-Age' (o mueren al cerrar sesi\u00f3n si son de sesi\u00f3n). 4. Seguridad: Las cookies con flags 'HttpOnly' y 'Secure' son inmunes a lectura directa por XSS, a diferencia de localStorage y sessionStorage, que son completamente legibles por cualquier script malicioso inyectado.",
      codeExample: {
        language: "typescript",
        code: `// Matriz comparativa de uso programático
interface StorageStrategies {
  // localStorage: Preferencias visuales o flags no sensibles (Persiste siempre)
  persistTheme(theme: 'dark' | 'light'): void;
  // sessionStorage: Datos temporales de wizards o filtros activos (Muere al cerrar tab)
  persistWizardStep(step: number): void;
  // Cookie: Tokens de sesión autenticados (Gestionados por el servidor con HttpOnly)
  // document.cookie = 'authToken=...'; // Anti-patrón: debe setearse vía HTTP header
}

export const appStorage: StorageStrategies = {
  persistTheme: (theme) => localStorage.setItem('ui-theme', theme),
  persistWizardStep: (step) => sessionStorage.setItem('wizard-step', String(step)),
};`,
        explanation: "Usa localStorage para preferencias duraderas, sessionStorage para estados de vista en curso y cookies HttpOnly para sesiones seguras."
      },
      visualDiagram: {
        id: "diag-browser-storage-comp",
        title: "Matriz Comparativa: Storage vs Cookies",
        caption: "Capacidad (~5MB vs ~4KB), Tr\u00e1fico de red autom\u00e1tico vs local, y mitigaci\u00f3n XSS mediante HttpOnly.",
        diagramType: "browser-storage-comparison"
      },
      interviewTips: {
        whatInterviewersWant: "Evaluar tu criterio arquitect\u00f3nico: saber qu\u00e9 almacenar en cada lugar y enfatizar el peligro de guardar tokens JWT de sesi\u00f3n en localStorage por riesgos de XSS.",
        commonPitfalls: ["Recomendar localStorage para guardar JWTs de autenticaci\u00f3n sin mencionar el riesgo de XSS."],
        followUps: [
          "¿Qué almacenamiento elegirías para un token de sesión y por qué?",
          "¿Qué límites de tamaño tiene cada mecanismo?"
        ]
      },
      quiz: {
        question: "\u00bfQu\u00e9 mecanismo de almacenamiento se transmite AUTOM\u00c1TICAMENTE en cada solicitud HTTP hacia el servidor?",
        options: ["localStorage", "sessionStorage", "IndexedDB", "Cookies HTTP"],
        correctIndex: 3,
        explanation: "Las cookies se adjuntan autom\u00e1ticamente en la cabecera 'Cookie:' de cada petici\u00f3n HTTP que coincida con el dominio y la ruta especificados."
      }
    },
    {
      id: "browser-14",
      title: "\u00bfQu\u00e9 es el render tree y c\u00f3mo se construye?",
      level: "avanzado",
      tags: ["Render Tree", "DOM", "CSSOM", "display: none", "Layout"],
      response: "El Render Tree (\u00c1rbol de Renderizado) es la estructura interna que el motor del navegador construye combinando el DOM (\u00e1rbol de contenido) y el CSSOM (\u00e1rbol de estilos calculados). Su prop\u00f3sito es determinar exclusivamente los elementos visuales que deben ser dibujados en la pantalla junto con sus estilos calculados finales (Computed Styles). El proceso de construcci\u00f3n recorre cada nodo del DOM visible: omite nodos invisibles que no afectan la presentaci\u00f3n visual como <head>, <script>, <meta> o cualquier elemento con 'display: none' (incluyendo a todos sus descendientes). En contraste, elementos con 'visibility: hidden' u 'opacity: 0' S\u00cd forman parte del Render Tree porque ocupan espacio geom\u00e9trico en el lienzo. Una vez generado, el Render Tree sirve como insumo inmediato para el paso de Layout (Reflow).",
      codeExample: {
        language: "javascript",
        code: `// Impacto directo en el Render Tree según la propiedad CSS utilizada
const elA = document.getElementById('modal');
const elB = document.getElementById('tooltip');

// Exclusión total del Render Tree:
// No consume espacio geométrico ni desencadena cálculo de cajas de layout
elA.style.display = 'none';

// Inclusión en el Render Tree:
// Sí genera caja geométrica y reserva espacio en el Layout, aunque no dibuje píxeles visibles
elB.style.visibility = 'hidden';

// Pseudo-elementos (::before, ::after) con 'content':
// NO existen en el DOM pero SÍ forman nodos propios dentro del Render Tree.`,
        explanation: "'display: none' descarta el elemento del Render Tree; 'visibility: hidden' lo conserva para reservar espacio en el Layout."
      },
      visualDiagram: {
        id: "diag-browser-render-tree",
        title: "Construcci\u00f3n del Render Tree (DOM + CSSOM)",
        caption: "Nodos visibles del DOM + reglas del CSSOM = Render Tree. Elementos con display:none son excluidos.",
        diagramType: "browser-render-tree-construction"
      },
      interviewTips: {
        whatInterviewersWant: "Distinguir n\u00edtidamente por qu\u00e9 'display: none' no entra al Render Tree mientras 'visibility: hidden' s\u00ed entra, y se\u00f1alar que los pseudo-elementos existen en el Render Tree sin estar en el DOM.",
        commonPitfalls: ["Creer que el Render Tree es un clon exacto del DOM con colores asignados."],
        followUps: [
          "¿Qué elementos se excluyen del render tree?",
          "¿Cómo afecta el CSS bloqueante a la construcción del render tree?"
        ]
      },
      quiz: {
        question: "\u00bfCu\u00e1l de los siguientes elementos S\u00cd se incluye como nodo dentro del Render Tree?",
        options: ["Un elemento <div> con estilo 'display: none'", "La etiqueta <script> ubicada en el <body>", "Un elemento <div> con estilo 'visibility: hidden'", "La etiqueta <meta charset='UTF-8'>"],
        correctIndex: 2,
        explanation: "'visibility: hidden' genera una caja de renderizado porque conserva sus dimensiones espaciales y afecta el flujo geom\u00e9trico del Layout."
      }
    },
    {
      id: "browser-15",
      title: "\u00bfQu\u00e9 es el reflow y repaint?",
      level: "avanzado",
      tags: ["Reflow", "Repaint", "Layout Thrashing", "fastdom", "requestAnimationFrame"],
      response: "Reflow (tambi\u00e9n llamado Layout) es el proceso computacional mediante el cual el motor del navegador calcula o recalcula las dimensiones espaciales exactas, coordenadas geom\u00e9tricas y posici\u00f3n relativa de cada nodo del Render Tree dentro del viewport. Es una operaci\u00f3n s\u00edncrona sumamente costosa para la CPU porque un cambio en un elemento puede provocar un efecto domin\u00f3 que obligue a recalcular a sus ancestros, hermanos o hijos. Repaint (o Redraw) ocurre cuando cambian atributos puramente visuales que no alteran la geometr\u00eda espacial (como 'color', 'background-color' o 'box-shadow'); el navegador simplemente vuelve a pintar los p\u00edxeles en el buffer gr\u00e1fico sin alterar el layout. El peor antipatr\u00f3n de rendimiento es el 'Layout Thrashing' (o Forced Synchronous Layout), provocado por alternar repetidamente lecturas de geometr\u00edas (offsetHeight, getBoundingClientRect) y escrituras en el DOM en el mismo ciclo.",
      codeExample: {
        language: "javascript",
        code: `// ANTIPATRÓN: Layout Thrashing (Lectura y escritura alternadas)
function badResizeElements(elements) {
  elements.forEach((el) => {
    // Lectura (fuerza cálculo de layout síncrono)
    const currentWidth = el.offsetWidth;
    // Escritura (invalida el layout inmediatamente)
    el.style.width = (currentWidth + 10) + 'px';
  });
}

// SOLUCIÓN ÓPTIMA: Agrupar lecturas primero, luego escrituras con rAF
function goodResizeElements(elements) {
  // 1. Fase de solo lectura
  const widths = elements.map((el) => el.offsetWidth);

  // 2. Fase de escritura agrupada
  requestAnimationFrame(() => {
    elements.forEach((el, index) => {
      el.style.width = (widths[index] + 10) + 'px';
    });
  });
}`,
        explanation: "Agrupar todas las lecturas geom\u00e9tricas antes de efectuar escrituras evita forzar m\u00faltiples reflows s\u00edncronos en el mismo frame."
      },
      visualDiagram: {
        id: "diag-browser-reflow-repaint",
        title: "Ciclo de Rendimiento: Reflow vs Repaint vs Composite",
        caption: "Reflow (Geometr\u00eda/Layout) \u2794 Repaint (Pintura/Raster) \u2794 Composite (Capas en GPU).",
        diagramType: "browser-reflow-repaint-cycle"
      },
      interviewTips: {
        whatInterviewersWant: "Explicar c\u00f3mo priorizar propiedades que solo activan Composite (transform, opacity) para delegar animaciones directamente a la GPU a 60/120 FPS sin tocar Reflow ni Repaint.",
        commonPitfalls: ["Animar propiedades como 'left', 'top', 'width' o 'height' que disparan Reflow constante en cada frame en lugar de usar 'transform'."],
        followUps: [
          "¿Qué es el layout thrashing y cómo se evita?",
          "¿Qué propiedades disparan solo composite sin layout ni paint?"
        ]
      },
      quiz: {
        question: "\u00bfCu\u00e1l de las siguientes propiedades CSS se anima exclusivamente en la GPU sin desencadenar Reflow ni Repaint?",
        options: ["width", "margin-top", "transform", "border-width"],
        correctIndex: 2,
        explanation: "'transform' y 'opacity' no alteran el Layout ni requieren Repaint; son ensambladas como capas independientes directamente por el procesador gr\u00e1fico (GPU Composite)."
      }
    },
    {
      id: "browser-16",
      title: "\u00bfQu\u00e9 es el Critical Rendering Path?",
      level: "avanzado",
      tags: ["CRP", "Critical Rendering Path", "FCP", "LCP", "Render Blocking"],
      response: "El Critical Rendering Path (CRP o Ruta Cr\u00edtica de Renderizado) es la secuencia progresiva de etapas que el navegador ejecuta desde la recepci\u00f3n del primer byte HTML hasta que los p\u00edxeles son pintados en pantalla: 1. Parseo de HTML y construcci\u00f3n progresiva del DOM. 2. Descarga, parseo de hojas de estilo y construcci\u00f3n del CSSOM (CSS es un recurso que bloquea el renderizado por defecto). 3. Ejecuci\u00f3n de scripts JS (por defecto, los scripts bloquean el parser de HTML a menos que usen 'defer' o 'async'). 4. Combinaci\u00f3n de DOM y CSSOM en el Render Tree. 5. Layout (c\u00e1lculo de geometr\u00edas de cajas). 6. Paint (dibujado de p\u00edxeles) y Composite (ensamblado de capas GPU). La optimizaci\u00f3n del CRP busca minimizar la cantidad de recursos bloqueantes cr\u00edticos y acortar la longitud de la ruta para maximizar m\u00e9tricas Core Web Vitals como FCP y LCP.",
      codeExample: {
        language: "html",
        code: `<!-- Optimización integral del Critical Rendering Path -->
<head>
  <!-- 1. Resource Hints tempranos para resolver DNS y TLS -->
  <link rel="preconnect" href="https://fonts.googleapis.com" crossorigin />
  
  <!-- 2. CSS Crítico (Above-the-fold) inyectado inline para evitar peticiones bloqueantes -->
  <style>
    body { margin: 0; font-family: system-ui; }
    .hero-banner { min-height: 80vh; background: #0f172a; }
  </style>

  <!-- 3. CSS diferido no crítico cargado de forma asíncrona -->
  <link rel="preload" href="/styles/deferred.css" as="style" onload="this.rel='stylesheet'" />

  <!-- 4. JavaScript con 'defer': no bloquea el parser HTML y se ejecuta al finalizar el DOM -->
  <script src="/scripts/app.js" defer></script>
</head>`,
        explanation: "CSS inline cr\u00edtico + JS con 'defer' garantiza que el parser de HTML no se detenga, logrando First Contentful Paint inmediato."
      },
      visualDiagram: {
        id: "diag-browser-crp",
        title: "Secuencia del Critical Rendering Path (CRP)",
        caption: "HTML \u2794 DOM + CSS \u2794 CSSOM \u2794 Render Tree \u2794 Layout \u2794 Paint \u2794 Composite.",
        diagramType: "browser-rendering-path"
      },
      interviewTips: {
        whatInterviewersWant: "Entender el impacto de recursos 'render-blocking' (CSS est\u00e1ndar) y 'parser-blocking' (scripts sincr\u00f3nicos sin defer/async) en las m\u00e9tricas First Contentful Paint (FCP) y Largest Contentful Paint (LCP).",
        commonPitfalls: ["Ignorar que el CSS es render-blocking por dise\u00f1o para evitar el parpadeo de contenido sin estilo (FOUC)."],
        followUps: [
          "¿Cómo medirías el CRP en una página real?",
          "¿Qué técnicas reducen los recursos críticos?"
        ]
      },
      quiz: {
        question: "\u00bfPor qu\u00e9 el navegador bloquea el renderizado de la p\u00e1gina mientras descarga y procesa hojas de estilo CSS externas?",
        options: ["Para evitar FOUC (Flash of Unstyled Content) y no realizar repaints innecesarios con estilos incorrectos.", "Porque el protocolo HTTP no permite descargar im\u00e1genes y CSS en paralelo.", "Porque CSS se ejecuta en el mismo hilo que WebAssembly.", "Es un error del navegador; CSS nunca deber\u00eda bloquear el renderizado."],
        correctIndex: 0,
        explanation: "CSS es un recurso que bloquea el renderizado (render-blocking) para evitar que el usuario visualice contenido temporalmente sin formato y prevenir m\u00faltiples reflows ca\u00f3ticos."
      }
    },
    {
      id: "browser-17",
      title: "\u00bfQu\u00e9 son los Service Workers?",
      level: "avanzado",
      tags: ["Service Workers", "PWA", "Offline-first", "Cache API", "Fetch Event"],
      response: "Un Service Worker es un proxy de red programable del lado del cliente que se ejecuta en un hilo en segundo plano, independiente de la p\u00e1gina web y de su ciclo de vida. Es la base t\u00e9cnica de las Progressive Web Apps (PWAs). Permite interceptar, modificar y responder a todas las solicitudes de red HTTP emitidas por la aplicaci\u00f3n mediante el evento 'fetch', posibilitando estrategias avanzadas de almacenamiento con la Cache API nativa (Cache-First, Network-First, Stale-While-Revalidate) para ofrecer soporte 100% offline. Asimismo, habilita Push Notifications y Background Sync incluso cuando el navegador o la pesta\u00f1a est\u00e1n cerrados. Por motivos de seguridad indispensables, los Service Workers solo operan bajo protocolos HTTPS (o localhost en desarrollo).",
      codeExample: {
        language: "javascript",
        code: `// sw.js: Service Worker con estrategia Cache-First (Offline-Ready)
const CACHE_NAME = 'app-v2.1';
const STATIC_ASSETS = ['/', '/index.html', '/styles.css', '/bundle.js'];

self.addEventListener('install', (event) => {
  // Pre-cacheo de recursos críticos durante la instalación
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Retorna de caché si existe; sino, ejecuta petición a red
      return cachedResponse || fetch(event.request);
    })
  );
});`,
        explanation: "El Service Worker intercepta peticiones en el evento 'fetch' y sirve recursos desde la Cache API de manera instant\u00e1nea sin conexi\u00f3n a internet."
      },
      visualDiagram: {
        id: "diag-browser-service-worker",
        title: "Ciclo de Vida y Proxy de un Service Worker",
        caption: "Registro \u2794 Install (Precache) \u2794 Activate (Limpieza) \u2794 Fetch Proxy (Cache API / Network).",
        diagramType: "browser-service-worker-lifecycle"
      },
      interviewTips: {
        whatInterviewersWant: "Conocer las tres fases del ciclo de vida: Registration, Installation (pre-caching), Activation (limpieza de cach\u00e9s viejas con skipWaiting/clients.claim) y explicar las estrategias de Cache API.",
        commonPitfalls: ["Confundir Service Workers con Web Workers ordinarios (los Service Workers act\u00faan como proxy de red y retienen estado de cach\u00e9 fuera de pesta\u00f1as activas)."],
        followUps: [
          "¿Cómo actualizarías un Service Worker sin romper sesiones activas?",
          "¿Qué estrategias de caché implementarías con un Service Worker?"
        ]
      },
      quiz: {
        question: "\u00bfEn qu\u00e9 evento del Service Worker se suelen depurar y eliminar versiones obsoletas de cach\u00e9s previas?",
        options: ["install", "activate", "fetch", "sync"],
        correctIndex: 1,
        explanation: "El evento 'activate' se dispara una vez que la nueva versi\u00f3n del Service Worker toma el control, siendo el momento \u00f3ptimo para purgar cach\u00e9s viejas."
      }
    },
    {
      id: "browser-18",
      title: "\u00bfQu\u00e9 es el prefetching y preloading en navegadores?",
      level: "avanzado",
      tags: ["Resource Hints", "preload", "prefetch", "preconnect", "dns-prefetch"],
      response: "Tanto 'preload' como 'prefetch' son Resource Hints declarativos definidos mediante la etiqueta <link rel='...'> que instruyen al navegador sobre c\u00f3mo priorizar la descarga anticipada de recursos futuros: 1. 'preload' (<link rel='preload' as='...'>) es imperativo y de ALTA prioridad para la navegaci\u00f3n ACTUAL. Se utiliza para recursos cr\u00edticos descubiertos tard\u00edamente por el parser (como fuentes web declaradas en CSS externo, im\u00e1genes LCP destacadas o chunks JS cr\u00edticos) para que se descarguen en paralelo al parseo inicial. 2. 'prefetch' (<link rel='prefetch'>) es especulativo y de BAJA prioridad para navegaciones FUTURAS probables (por ejemplo, el bundle de la siguiente ruta o vista que el usuario clickear\u00e1). El navegador solo lo descargar\u00e1 cuando la CPU y la red est\u00e9n ociosas.",
      codeExample: {
        language: "javascript",
        code: `// Inyector dinámico de Resource Hints según intención de navegación
export function hintNextRoute(assetUrl, type = 'prefetch') {
  if (document.querySelector('link[href="' + assetUrl + '"]')) return;

  const link = document.createElement('link');
  link.rel = type;
  link.href = assetUrl;
  
  if (type === 'preload') {
    link.as = 'script';
    link.setAttribute('fetchpriority', 'high');
  }

  document.head.appendChild(link);
}

// Al posar el mouse sobre un botón de checkout, anticipamos la ruta
document.querySelector('#btn-checkout')?.addEventListener('pointerenter', () => {
  hintNextRoute('/modules/checkout.chunk.js', 'prefetch');
});`,
        explanation: "'preload' fuerza la descarga inmediata con alta prioridad; 'prefetch' aprovecha momentos de inactividad para anticipar vistas futuras."
      },
      visualDiagram: {
        id: "diag-browser-resource-hints",
        title: "Priorizaci\u00f3n de Recursos: Preload vs Prefetch",
        caption: "Preload (Alta Prioridad / Vista Actual) vs Prefetch (Baja Prioridad / Rutas Futuras Ociosas).",
        diagramType: "browser-resource-hints-priority"
      },
      interviewTips: {
        whatInterviewersWant: "Diferenciar con claridad el alcance temporal: Preload es para la vista presente que se est\u00e1 cargando; Prefetch es para vistas futuras anticipadas.",
        commonPitfalls: ["Usar 'preload' excesivamente para recursos no cr\u00edticos, saturando el ancho de banda y compitiendo con activos verdaderamente cr\u00edticos de la p\u00e1gina actual."],
        followUps: [
          "¿Qué diferencia hay entre preload, prefetch y preconnect?",
          "¿Qué riesgo tiene abusar de preload?"
        ]
      },
      quiz: {
        question: "\u00bfCu\u00e1l es la directiva correcta para cargar con ALTA prioridad una fuente web cr\u00edtica para la p\u00e1gina que se est\u00e1 renderizando?",
        options: ["<link rel='prefetch' as='font' ...>", "<link rel='preload' as='font' type='font/woff2' crossorigin ...>", "<link rel='dns-prefetch' as='font' ...>", "<link rel='prerender' href='font.woff2' ...>"],
        correctIndex: 1,
        explanation: "'preload' con el atributo 'as=font' y 'crossorigin' garantiza que la fuente cr\u00edtica se descargue con la m\u00e1xima prioridad durante el render de la p\u00e1gina actual."
      }
    },
    {
      id: "browser-19",
      title: "\u00bfQu\u00e9 es el throttling y debouncing en el navegador?",
      level: "avanzado",
      tags: ["Debounce", "Throttle", "Event Optimization", "Performance"],
      response: "Throttling y Debouncing son dos t\u00e9cnicas esenciales de optimizaci\u00f3n de rendimiento para limitar la tasa de ejecuci\u00f3n de funciones que responden a eventos de alta frecuencia disparados por el navegador (como scroll, resize, mousemove, keydown o inputs de b\u00fasqueda): 1. Debounce (Agrupamiento por reposo): Pospone la ejecuci\u00f3n de la funci\u00f3n hasta que transcurra un intervalo de silencio (ej. 300ms) sin que el evento se haya vuelto a disparar. Si el usuario sigue tecleando o interactuando, el temporizador se reinicia. Es ideal para buscadores con autocompletado y validaciones de formularios. 2. Throttle (Regulador de flujo por intervalo): Garantiza que la funci\u00f3n se ejecute como m\u00e1ximo una \u00fanica vez dentro de una ventana de tiempo predeterminada (ej. cada 100ms), sin importar cu\u00e1ntas decenas de veces ocurra el evento mientras tanto. Es ideal para listeners de scroll, rec\u00e1lculos de posici\u00f3n para scroll infinito o redimensionamiento continuo de la ventana.",
      codeExample: {
        language: "typescript",
        code: `// Implementación pura y tipada de Debounce y Throttle

// Debounce: espera un tiempo de inactividad antes de invocar
export function debounce<T extends (...args: any[]) => void>(fn: T, delayMs: number) {
  let timerId: ReturnType<typeof setTimeout> | null = null;
  return (...args: Parameters<T>) => {
    if (timerId) clearTimeout(timerId);
    timerId = setTimeout(() => fn(...args), delayMs);
  };
}

// Throttle: ejecuta como máximo una vez por ventana de tiempo fija
export function throttle<T extends (...args: any[]) => void>(fn: T, limitMs: number) {
  let inThrottle = false;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => { inThrottle = false; }, limitMs);
    }
  };
}`,
        explanation: "Debounce congela la ejecuci\u00f3n hasta que cesa la r\u00e1faga de eventos; throttle espacia las ejecuciones peri\u00f3dicamente a intervalos regulares."
      },
      visualDiagram: {
        id: "diag-browser-debounce-throttle",
        title: "Comparativa Temporal: Raw vs Debounce vs Throttle",
        caption: "Disparos continuos \u2794 Debounce espera inactividad final \u2794 Throttle ejecuta a intervalos regulares constantes.",
        diagramType: "browser-debounce-vs-throttle"
      },
      interviewTips: {
        whatInterviewersWant: "Poder codificar o razonar ambas funciones en vivo y dar ejemplos de uso concretos: Debounce para inputs de autocompletado y Throttle para scroll/resize continuo.",
        commonPitfalls: ["Confundirlos entre s\u00ed o no limpiar los temporizadores (clearTimeout) al desmontar componentes en React/Vue."],
        followUps: [
          "¿Qué técnica usarías para un buscador con autocompletado y cuál para el evento scroll?",
          "¿Cómo implementarías un debounce con cancelación?"
        ]
      },
      quiz: {
        question: "\u00bfQu\u00e9 t\u00e9cnica es m\u00e1s apropiada para implementar un buscador con autocompletado que consulta una API seg\u00fan lo que escribe el usuario?",
        options: ["Throttling a 16ms", "Debouncing con retraso de 300ms", "Web Workers s\u00edncronos", "MutationObserver directo"],
        correctIndex: 1,
        explanation: "Debouncing a 300ms evita saturar la API con peticiones intermedias, esperando a que el usuario termine de teclear para enviar la b\u00fasqueda."
      }
    },
    {
      id: "browser-20",
      title: "\u00bfQu\u00e9 es IndexedDB y cu\u00e1ndo se usa?",
      level: "avanzado",
      tags: ["IndexedDB", "NoSQL", "ObjectStore", "Transacciones", "Offline"],
      response: "IndexedDB es un sistema de gesti\u00f3n de base de datos NoSQL transaccional, as\u00edncrono y orientado a objetos integrado de forma nativa en los navegadores web. A diferencia de localStorage (~5 MB y s\u00edncrono), IndexedDB permite almacenar vol\u00famenes masivos de datos estructurados (centenares de megabytes o gigabytes seg\u00fan el espacio libre en disco del cliente), incluidos objetos JavaScript complejos, tipos binarios (Blobs, File, ArrayBuffers). Soporta \u00edndices de b\u00fasqueda r\u00e1pida, transacciones ACID seguras (readwrite, readonly) y cursores de iteraci\u00f3n. Es la tecnolog\u00eda indispensable para aplicaciones de grado empresarial con capacidades offline completas (Google Docs offline, reproductores de audio/video locales, clientes de correo o editores gr\u00e1ficos web).",
      codeExample: {
        language: "javascript",
        code: `// Inicialización y escritura transaccional con IndexedDB nativo
function saveArticleOffline(article) {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('AppDatabase', 1);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains('articles')) {
        // Creación del ObjectStore con clave primaria e índice
        const store = db.createObjectStore('articles', { keyPath: 'id' });
        store.createIndex('by_tag', 'tags', { multiEntry: true });
      }
    };

    request.onsuccess = (event) => {
      const db = event.target.result;
      const tx = db.transaction('articles', 'readwrite');
      const store = tx.objectStore('articles');
      store.put(article); // Almacena objeto completo sin stringify manual
      tx.oncomplete = () => resolve(article);
      tx.onerror = () => reject(tx.error);
    };

    request.onerror = () => reject(request.error);
  });
}`,
        explanation: "IndexedDB opera mediante transacciones as\u00edncronas no bloqueantes sobre Object Stores, ideal para almacenar objetos y binarios complejos."
      },
      visualDiagram: {
        id: "diag-browser-indexeddb",
        title: "Arquitectura Interna de IndexedDB",
        caption: "Database \u2794 Object Stores \u2794 \u00cdndices de B\u00fasqueda \u2794 Transacciones ACID (Read/Write).",
        diagramType: "browser-indexeddb-architecture"
      },
      interviewTips: {
        whatInterviewersWant: "Resaltar su naturaleza transaccional as\u00edncrona, su alta capacidad basada en cuota de disco y la habilidad de guardar objetos binarios sin necesidad de serializarlos a string.",
        commonPitfalls: ["Usar la API cruda basada en callbacks antiguos en proyectos grandes sin librer\u00edas de envoltorio basadas en Promesas como 'idb'."],
        followUps: [
          "¿Cómo manejarías las migraciones de esquema en IndexedDB?",
          "¿Qué librerías simplifican la API de IndexedDB (idb, Dexie)?"
        ]
      },
      quiz: {
        question: "\u00bfCu\u00e1l de las siguientes afirmaciones sobre IndexedDB es VERDADERA?",
        options: ["Es s\u00edncrono y se limita a 5 MB por origen.", "Solo permite almacenar cadenas de texto primitivas.", "Es una base de datos NoSQL as\u00edncrona que almacena objetos y binarios con soporte de transacciones e \u00edndices.", "Solo funciona si la p\u00e1gina cuenta con un Service Worker registrado previamente."],
        correctIndex: 2,
        explanation: "IndexedDB es una base de datos NoSQL orientada a objetos en el cliente que maneja transacciones ACID y grandes vol\u00famenes de datos binarios y estructurados."
      }
    },
    {
      id: "browser-21",
      title: "\u00bfQu\u00e9 es el navegador headless y para qu\u00e9 se usa?",
      level: "experto",
      tags: ["Headless Browser", "Puppeteer", "Playwright", "CDP", "E2E Testing"],
      response: "Un navegador Headless (Headless Browser) es una instancia completa del motor de un navegador web (como Chromium, WebKit o Firefox Gecko) que se ejecuta sin una interfaz gr\u00e1fica de usuario (GUI) visible ni ventanas en pantalla. Se controla \u00edntegramente de manera program\u00e1tica mediante bibliotecas de automatizaci\u00f3n (Puppeteer, Playwright) a trav\u00e9s de protocolos internos de depuraci\u00f3n de bajo nivel, principalmente el Chrome DevTools Protocol (CDP) o el est\u00e1ndar WebDriver BiDi. Se utiliza en pipelines de CI/CD para pruebas end-to-end (E2E) hiper-realistas, generaci\u00f3n automatizada de capturas de pantalla y PDFs con fidelidad visual exacta, web scraping avanzado de p\u00e1ginas din\u00e1micas que requieren ejecuci\u00f3n de JavaScript y renderizado en servidor (SSR/pre-rendering din\u00e1mico) para bots de indexaci\u00f3n SEO.",
      codeExample: {
        language: "javascript",
        code: `// Script de automatización Headless con Playwright/CDP
import { chromium } from 'playwright';

async function generateAuditReport(url) {
  // Inicialización de Chromium en modo headless (sin interfaz visual)
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  // Navegación y espera al cese de tráfico de red
  await page.goto(url, { waitUntil: 'networkidle' });

  // Extracción de métricas de rendimiento del navegador en tiempo de ejecución
  const performanceMetrics = await page.evaluate(() => {
    const nav = performance.getEntriesByType('navigation')[0];
    return { domInteractive: nav.domInteractive, loadEventEnd: nav.loadEventEnd };
  });

  // Generación de PDF con motor de impresión Chromium nativo
  await page.pdf({ path: 'audit-report.pdf', format: 'A4' });

  await browser.close();
  return performanceMetrics;
}`,
        explanation: "Los navegadores headless ejecutan el pipeline completo de renderizado y JavaScript controlados por c\u00f3digo mediante DevTools Protocol."
      },
      visualDiagram: {
        id: "diag-browser-headless",
        title: "Arquitectura de Control de Navegadores Headless",
        caption: "C\u00f3digo de Automatizaci\u00f3n (Playwright/Puppeteer) \u2794 Chrome DevTools Protocol (CDP) \u2794 Motor Headless.",
        diagramType: "browser-headless-cdp-architecture"
      },
      interviewTips: {
        whatInterviewersWant: "Mencionar el Chrome DevTools Protocol (CDP) o WebDriver BiDi y explicar por qu\u00e9 superan a herramientas basadas en emulaciones falsas del DOM como JSDOM para pruebas de layout real.",
        commonPitfalls: ["Creer que JSDOM es un navegador headless; JSDOM solo emula un subconjunto de APIs de DOM en Node.js sin un motor real de layout o rasterizado."],
        followUps: [
          "¿Qué es el Chrome DevTools Protocol?",
          "¿Cómo se usan los navegadores headless en testing E2E y en SSR/scraping?"
        ]
      },
      quiz: {
        question: "\u00bfQu\u00e9 protocolo de bajo nivel utilizan herramientas como Puppeteer para comunicarse directamente con instancias de Chromium headless?",
        options: ["BGP Routing Protocol", "Chrome DevTools Protocol (CDP)", "FTP Control Channel", "SOAP Web Services"],
        correctIndex: 1,
        explanation: "Chrome DevTools Protocol (CDP) permite inspeccionar, perfilar, depurar y controlar el motor Chromium a trav\u00e9s de WebSockets estructurados."
      }
    },
    {
      id: "browser-22",
      title: "\u00bfQu\u00e9 es la Compression Streams API?",
      level: "experto",
      tags: ["Compression Streams", "gzip", "deflate", "Streams API", "Performance"],
      response: "La Compression Streams API es una interfaz nativa del navegador que permite comprimir y descomprimir flujos continuos de datos binarios o texto utilizando los algoritmos est\u00e1ndar 'gzip', 'deflate' o 'deflate-raw' directamente en JavaScript, sin depender de librer\u00edas externas pesadas como pako o fflate. Se basa en el est\u00e1ndar de Streams (ReadableStream, WritableStream y TransformStream), permitiendo conectar flujos mediante canalizaciones (pipeThrough). Es de alto valor para aplicaciones que env\u00edan grandes payloads de telemetr\u00eda o logs hacia el backend reduciendo el consumo de datos de red, o para descomprimir respuestas HTTP gigantescas en tiempo real de manera progresiva con un impacto de memoria sumamente bajo.",
      codeExample: {
        language: "javascript",
        code: `// Compresión nativa con gzip mediante Compression Streams API
async function compressPayload(textData) {
  // 1. Convertir texto a ReadableStream binario (Uint8Array)
  const stream = new Blob([textData]).stream();

  // 2. Canalizar a través de un TransformStream de compresión gzip nativo
  const compressedStream = stream.pipeThrough(
    new CompressionStream('gzip')
  );

  // 3. Obtener el resultado comprimido como Blob
  const response = new Response(compressedStream);
  const compressedBlob = await response.blob();
  
  console.log('Original: ' + textData.length + ' B | Comprimido: ' + compressedBlob.size + ' B');
  return compressedBlob;
}

// Descompresión inversa con DecompressionStream('gzip')
async function decompressPayload(compressedBlob) {
  const decompressedStream = compressedBlob.stream().pipeThrough(
    new DecompressionStream('gzip')
  );
  return await new Response(decompressedStream).text();
}`,
        explanation: "CompressionStream y DecompressionStream operan de forma nativa por streaming con cero dependencias externas."
      },
      visualDiagram: {
        id: "diag-browser-compression-streams",
        title: "Tuber\u00eda de la Compression Streams API",
        caption: "ReadableStream (Bytes) \u2794 CompressionStream('gzip') \u2794 Transformaci\u00f3n Streaming \u2794 Blob comprimido.",
        diagramType: "browser-compression-streams"
      },
      interviewTips: {
        whatInterviewersWant: "Destacar el modelo de Streams (TransformStream) y la ventaja de eliminar bundles de terceros para compresi\u00f3n en el cliente.",
        commonPitfalls: ["Intentar usarla en navegadores muy antiguos sin comprobar previamente la existencia global de 'window.CompressionStream'."],
        followUps: [
          "¿Cuándo comprimirías datos en el cliente antes de subirlos?",
          "¿Qué formatos soporta CompressionStream (gzip, deflate)?"
        ]
      },
      quiz: {
        question: "\u00bfQu\u00e9 interfaces nativas provee la Compression Streams API para codificar y decodificar datos en el cliente?",
        options: ["GzipEncoder y GzipDecoder", "CompressionStream y DecompressionStream", "ZipArchiveReader y ZipArchiveWriter", "BinaryStreamCompressor"],
        correctIndex: 1,
        explanation: "Las clases est\u00e1ndar nativas son CompressionStream y DecompressionStream, que implementan la interfaz TransformStream."
      }
    },
    {
      id: "browser-23",
      title: "\u00bfQu\u00e9 es el Scheduler API (scheduler.postTask)?",
      level: "experto",
      tags: ["Scheduler API", "postTask", "Prioridades", "INP", "Main Thread Yielding"],
      response: "La Prioritized Task Scheduling API (Scheduler API), expuesta globalmente en 'window.scheduler.postTask()', es la API web moderna dise\u00f1ada para resolver el problema de la contenci\u00f3n del hilo principal y mejorar directamente la m\u00e9trica Interaction to Next Paint (INP). Permite a los desarrolladores programar tareas as\u00edncronas asign\u00e1ndoles niveles de prioridad expl\u00edcitos gestionados por el navegador: 1. 'user-blocking' (m\u00e1xima prioridad para feedback inmediato a interacciones del usuario). 2. 'user-visible' (prioridad media predeterminada para renderizado y procesamiento perceptible). 3. 'background' (prioridad baja para logging, anal\u00edticas o pre-c\u00e1lculos no urgentes). Adem\u00e1s, soporta cancelaci\u00f3n cooperativa y cambios de prioridad en vuelo mediante 'TaskController' (extensi\u00f3n de AbortController), superando por completo las limitaciones arcaicas de setTimeout(fn, 0) o requestIdleCallback.",
      codeExample: {
        language: "javascript",
        code: `// Programación de tareas con Scheduler API y fallback resiliente
async function scheduleTaskWithPriority(fn, priority = 'user-visible') {
  if ('scheduler' in window && 'postTask' in window.scheduler) {
    // API moderna: el navegador intercala la tarea inteligentemente según prioridad
    return window.scheduler.postTask(fn, { priority });
  }

  // Fallback para navegadores antiguos:
  if (priority === 'background' && 'requestIdleCallback' in window) {
    return new Promise((resolve) => requestIdleCallback(() => resolve(fn())));
  }
  return new Promise((resolve) => setTimeout(() => resolve(fn()), 0));
}

// Ejemplo: Ejecución en background sin congelar el hilo ante clics del usuario
const controller = new TaskController({ priority: 'background' });
window.scheduler?.postTask(() => sendTelemetryBatch(), { signal: controller.signal });`,
        explanation: "scheduler.postTask permite priorizar tareas finamente ('user-blocking', 'user-visible', 'background') optimizando el INP."
      },
      visualDiagram: {
        id: "diag-browser-scheduler",
        title: "Niveles de Prioridad en Scheduler API",
        caption: "user-blocking (Alta / Input) > user-visible (Media / Render) > background (Baja / Telemetr\u00eda).",
        diagramType: "browser-scheduler-priorities"
      },
      interviewTips: {
        whatInterviewersWant: "Vincular el Scheduler API directamente con la optimizaci\u00f3n de la m\u00e9trica Core Web Vital INP (Interaction to Next Paint) y el concepto de 'yielding to the main thread'.",
        commonPitfalls: ["Confundirlo con Web Workers; el Scheduler API programa tareas en el MISMO hilo principal, organizando su cola con precisi\u00f3n."],
        followUps: [
          "¿Qué prioridades ofrece scheduler.postTask?",
          "¿Qué hace scheduler.yield() y cómo mejora el INP?"
        ]
      },
      quiz: {
        question: "\u00bfCu\u00e1l de los siguientes niveles de prioridad en scheduler.postTask tiene la mayor urgencia para no degradar el INP?",
        options: ["'background'", "'user-blocking'", "'user-visible'", "'idle-priority'"],
        correctIndex: 1,
        explanation: "'user-blocking' asigna la prioridad m\u00e1s alta para que la tarea se despache de inmediato y no retrase el feedback visual de la interacci\u00f3n del usuario."
      }
    },
    {
      id: "browser-24",
      title: "\u00bfQu\u00e9 son los Shared Workers y en qu\u00e9 se diferencian de los Web Workers?",
      level: "experto",
      tags: ["Shared Worker", "MessagePort", "Multi-tab", "Cross-tab Sync"],
      response: "Un Shared Worker (Trabajador Compartido) es un tipo especializado de Web Worker que puede ser compartido simult\u00e1neamente por m\u00faltiples contextos de navegaci\u00f3n pertenecientes al mismo origen, incluyendo m\u00faltiples pesta\u00f1as abiertas, ventanas independientes o iframes. A diferencia de un Dedicated Web Worker ordinario, que pertenece en exclusiva a la pesta\u00f1a que lo instanci\u00f3 y se destruye cuando dicha pesta\u00f1a se cierra, el Shared Worker vive mientras exista al menos un contexto conectado a \u00e9l. Su modelo de comunicaci\u00f3n no utiliza postMessage directo en el worker, sino puertos bidireccionales dedicados ('MessagePort') que se inicializan mediante el evento 'onconnect'. Permite centralizar conexiones WebSocket \u00fanicas para ahorrar recursos de servidor, sincronizar el estado entre pesta\u00f1as o gestionar descargas complejas de manera unificada.",
      codeExample: {
        language: "javascript",
        code: `// 1. En cada pestaña cliente conectada:
const sharedWorker = new SharedWorker('/workers/sync.shared-worker.js');
sharedWorker.port.start(); // Necesario si no se usa onmessage directo

// Enviar datos al worker compartido
sharedWorker.port.postMessage({ type: 'UPDATE_CART', itemsCount: 3 });

// Escuchar cambios transmitidos por otras pestañas
sharedWorker.port.onmessage = (event) => {
  console.log('Notificación compartida multi-tab:', event.data);
};

// 2. En sync.shared-worker.js:
const connectedPorts = new Set();

self.onconnect = (event) => {
  const port = event.ports[0];
  connectedPorts.add(port);

  port.onmessage = (e) => {
    // Difundir el mensaje recibido a TODAS las pestañas conectadas
    connectedPorts.forEach((p) => p.postMessage(e.data));
  };
};`,
        explanation: "Un Shared Worker mantiene una \u00fanica instancia y un Set de puertos para sincronizar eventos en tiempo real entre m\u00faltiples pesta\u00f1as."
      },
      visualDiagram: {
        id: "diag-browser-shared-worker",
        title: "Topolog\u00eda de Red de un Shared Worker",
        caption: "M\u00faltiples pesta\u00f1as (Tab 1, Tab 2, Iframes) comparten un \u00fanico Shared Worker central mediante MessagePorts.",
        diagramType: "browser-shared-worker-topology"
      },
      interviewTips: {
        whatInterviewersWant: "Explicar el ciclo de vida multi-pesta\u00f1a, la conexi\u00f3n a trav\u00e9s de 'MessagePort' en el evento 'onconnect' y casos reales (como una \u00fanica conexi\u00f3n SSE/WebSocket compartida entre 5 pesta\u00f1as).",
        commonPitfalls: ["Olvidar llamar a 'port.start()' si se utiliza addEventListener en lugar de port.onmessage.", "Asumir compatibilidad universal (Safari hist\u00f3ricamente tuvo soporte limitado o deshabilitado para Shared Workers)."],
        followUps: [
          "¿Qué soporte tienen los Shared Workers en navegadores móviles?",
          "¿Cómo se comunica un Shared Worker con varias pestañas mediante MessagePort?"
        ]
      },
      quiz: {
        question: "\u00bfQu\u00e9 evento fundamental debe escuchar un Shared Worker para aceptar conexiones entrantes de nuevas pesta\u00f1as?",
        options: ["self.onmessage", "self.onconnect", "self.onhandshake", "self.onopen"],
        correctIndex: 1,
        explanation: "El evento 'onconnect' se dispara cada vez que una nueva pesta\u00f1a o iframe se conecta al Shared Worker, proporcionando el MessagePort de comunicaci\u00f3n."
      }
    },
    {
      id: "browser-25",
      title: "\u00bfQu\u00e9 es la Storage Access API y por qu\u00e9 es necesaria?",
      level: "experto",
      tags: ["Storage Access API", "Third-Party Cookies", "Privacy Sandbox", "iframes", "ITP"],
      response: "La Storage Access API es una interfaz web estandarizada dise\u00f1ada para permitir que contenidos integrados en or\u00edgenes cruzados (t\u00edpicamente iframes de terceros, como widgets de comentarios, pasarelas de pago o botones de autenticaci\u00f3n federada SSO) soliciten acceso expl\u00edcito a su almacenamiento de primer origen (cookies con credenciales, localStorage) en navegadores que bloquean cookies de terceros (Third-Party Cookies) por defecto (como Safari con ITP, Firefox con ETP y Chrome con Privacy Sandbox). Para proteger la privacidad del usuario y prevenir el rastreo encubierto cross-site, la API exige una interacci\u00f3n activa del usuario (User Gesture, como un clic en el iframe) antes de resolver favorablemente la promesa de 'document.requestStorageAccess()'.",
      codeExample: {
        language: "javascript",
        code: `// Solicitud de acceso a cookies dentro de un iframe embebido cross-origin
async function accessAuthenticatedCookieStorage() {
  if (!('requestStorageAccess' in document)) {
    console.warn('Storage Access API no requerida o no soportada.');
    return;
  }

  try {
    // 1. Verificar si ya cuenta con acceso otorgado
    const hasAccess = await document.hasStorageAccess();
    if (!hasAccess) {
      // 2. Solicitar acceso (DEBE ejecutarse dentro de un User Gesture como un click)
      await document.requestStorageAccess();
      console.log('Acceso a cookies de primer origen concedido por el usuario.');
    }
    
    // 3. Ahora el iframe puede leer sus cookies de sesión auténticas
    console.log('Cookies desbloqueadas:', document.cookie);
  } catch (error) {
    console.error('El usuario o la política de privacidad denegó el acceso:', error);
  }
}`,
        explanation: "La Storage Access API requiere hasStorageAccess() para chequear permisos y requestStorageAccess() dentro de un evento de usuario para desbloquear cookies en iframes."
      },
      visualDiagram: {
        id: "diag-browser-storage-access",
        title: "Flujo de Solicitud de la Storage Access API",
        caption: "Iframe de terceros \u2794 Clic del usuario (User Gesture) \u2794 requestStorageAccess() \u2794 Desbloqueo de cookies.",
        diagramType: "browser-storage-access-api"
      },
      interviewTips: {
        whatInterviewersWant: "Demostrar conocimiento del fin de las third-party cookies, Apple Intelligent Tracking Prevention (ITP) y c\u00f3mo la Storage Access API reconcilia la privacidad con casos leg\u00edtimos de autenticaci\u00f3n e integraci\u00f3n.",
        commonPitfalls: ["Llamar a 'document.requestStorageAccess()' sin una interacci\u00f3n previa del usuario (User Gesture), lo cual causar\u00e1 el rechazo inmediato de la promesa."],
        followUps: [
          "¿Qué problemas causa el bloqueo de cookies de terceros en iframes embebidos?",
          "¿Qué diferencia hay entre Storage Access API y CHIPS (cookies particionadas)?"
        ]
      },
      quiz: {
        question: "\u00bfCu\u00e1l es el requisito indispensable del navegador para que document.requestStorageAccess() sea evaluado positivamente?",
        options: ["Que el iframe se cargue en modo sandbox sin permisos.", "Que la solicitud se ejecute en respuesta directa a un gesto de interacci\u00f3n del usuario (User Gesture como un clic).", "Que la conexi\u00f3n no utilice HTTPS.", "Que el servidor responda con 'Access-Control-Allow-Origin: *'."],
        correctIndex: 1,
        explanation: "El navegador exige un User Gesture expl\u00edcito (clic o interacci\u00f3n intencional) para evitar que scripts de rastreo soliciten acceso de forma autom\u00e1tica en segundo plano."
      }
    },
    {
      id: "browser-26",
      title: "¿Qué es la Broadcast Channel API y cómo funciona la comunicación entre pestañas?",
      level: "experto",
      tags: ["Broadcast Channel", "Web APIs", "Cross-tab Communication", "Same-Origin", "Pub/Sub", "Multi-tab Sync"],
      response: "La Broadcast Channel API es una interfaz web estandarizada que implementa un modelo de mensajería Publicador/Suscriptor (Pub/Sub) 1-a-N en memoria entre diferentes contextos de navegación que comparten el mismo origen (mismo protocolo, dominio y puerto). Permite que múltiples pestañas abiertas, ventanas auxiliares, iframes y Web Workers envíen y reciban mensajes de forma bidireccional sin necesidad de un servidor backend (WebSockets o SSE) ni la sobrecarga de un Shared Worker. Cuando un contexto invoca channel.postMessage(), el mensaje se clona con el algoritmo Structured Clone y se difunde a todos los oyentes con el mismo nombre de canal, excluyendo automáticamente a la pestaña emisora para evitar bucles. A diferencia de localStorage con eventos de 'storage', opera 100% en memoria sin tocar disco ni bloquear el hilo principal con serializaciones JSON. Para prevenir fugas de memoria, es fundamental cerrar el canal invocando channel.close() cuando se destruye el contexto.",
      codeExample: {
        language: "javascript",
        code: `// 1. Instanciar o suscribirse al canal con un nombre compartido
const authChannel = new BroadcastChannel('auth_sync_channel');

// 2. Función para emitir un evento a todas las demás pestañas del mismo origen
function broadcastLogout(reason = 'Sesión cerrada por el usuario') {
  authChannel.postMessage({
    action: 'LOGOUT',
    timestamp: Date.now(),
    reason
  });

  // Limpieza local de la pestaña emisora
  sessionStorage.removeItem('access_token');
  window.location.href = '/login';
}

// 3. Escuchar notificaciones emitidas por OTRAS pestañas
// (Nota: la pestaña emisora NO recibe su propio mensaje)
authChannel.onmessage = (event) => {
  const { action, reason } = event.data;
  if (action === 'LOGOUT') {
    console.warn(\`Sincronización multi-pestaña: \${reason}\`);
    sessionStorage.removeItem('access_token');
    window.location.href = '/login';
  }
};

// 4. Limpieza de recursos al desmontar o cerrar la pestaña
window.addEventListener('beforeunload', () => {
  authChannel.close(); // Libera la referencia en el motor del navegador
});`,
        explanation: "La Broadcast Channel API permite enviar objetos nativos clonados mediante Structured Clone entre pestañas del mismo origen en memoria viva. Es clave invocar channel.close() para liberar memoria."
      },
      visualDiagram: {
        id: "diag-browser-broadcast-channel",
        title: "Topología Pub/Sub de Broadcast Channel API",
        caption: "Difusión 1 a N en memoria: La pestaña emisora transmite al canal 'auth' sin recibir su propio evento; Pestaña 2, Ventana y Worker se sincronizan al instante.",
        diagramType: "browser-broadcast-channel"
      },
      interviewTips: {
        whatInterviewersWant: "Evaluar el conocimiento de comunicación cross-tab moderna en el navegador (Broadcast Channel vs SharedWorker vs evento 'storage'), comprensión del límite Same-Origin, la exclusión del emisor en los mensajes recibidos y la importancia de liberar recursos con .close().",
        commonPitfalls: [
          "Creer que funciona entre diferentes dominios (está restringido por Same-Origin Policy).",
          "Esperar que la pestaña emisora reciba el evento en su propio onmessage (el emisor no recibe su propio mensaje por diseño).",
          "Olvidar llamar a channel.close() al desmontar componentes o cerrar ventanas, generando memory leaks."
        ],
        followUps: [
          "¿Por qué es superior Broadcast Channel frente a escuchar window.addEventListener('storage', ...) con localStorage?",
          "¿En qué escenario seguirías prefiriendo un Shared Worker sobre un Broadcast Channel?"
        ]
      },
      quiz: {
        question: "¿Cuál de las siguientes afirmaciones describe de manera precisa el comportamiento de la Broadcast Channel API?",
        options: [
          "Permite enviar mensajes entre pestañas de diferentes dominios web (cross-origin).",
          "Difunde mensajes 1-a-N en memoria entre contextos del mismo origen y la pestaña emisora no recibe su propio mensaje.",
          "Persiste los mensajes enviados en disco de forma similar a una tabla de base de datos.",
          "Requiere que la pestaña emisora mantenga una referencia directa de objeto ventana (window) con cada pestaña receptora."
        ],
        correctIndex: 1,
        explanation: "Broadcast Channel implementa un bus Pub/Sub en memoria restringido al mismo origen (Same-Origin). Por diseño de la especificación WHATWG, el emisor de postMessage() queda excluido del evento onmessage resultante."
      }
    }
  ]
};

export default questionsBrowser;
