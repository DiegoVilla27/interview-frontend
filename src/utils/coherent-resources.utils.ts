import { IInterviewTips, IQuestion, IQuizItem, IVisualDiagram } from "../types";

export const getCoherentDiagram = (
  question: IQuestion,
  moduleTitle = ""
): IVisualDiagram => {
  if (question.visualDiagram) {
    return question.visualDiagram;
  }

  const titleLower = question.title.toLowerCase();
  const respLower = question.response.toLowerCase();
  const qText = `${titleLower} ${respLower} ${moduleTitle.toLowerCase()}`;

  // 1. Packet
  if (titleLower.includes("packet") || titleLower.includes("paquete")) {
    return {
      id: "diag-packet",
      title: "Anatomía de un Paquete de Red TCP/IP",
      caption: "Cabecera IP (Capa 3: Enrutamiento) ➔ Cabecera TCP (Capa 4: Control de flujo) ➔ Payload de Datos ➔ Trailer CRC32",
      diagramType: "packet-anatomy"
    };
  }

  // 2. DNS & Dominio
  if (titleLower.includes("dns") || titleLower.includes("dominio") || titleLower.includes("nombre de dominio") || titleLower.includes("doh")) {
    return {
      id: "diag-dns",
      title: "Árbol de Resolución Jerárquica DNS",
      caption: "Cliente ➔ Recursive Resolver ➔ Root (.) ➔ TLD (.com) ➔ Servidor Autoritativo (A Record) ➔ IP en Caché",
      diagramType: "dns-resolution-tree"
    };
  }

  // 3. Router / NAT
  if (titleLower.includes("router") || titleLower.includes("nat") || titleLower.includes("enrutador")) {
    return {
      id: "diag-router-nat",
      title: "Enrutamiento & Traducción de Direcciones (NAT)",
      caption: "Subred LAN Privada (RFC 1918) ➔ Router Gateway con Tabla NAT ➔ Salida a Internet con IP Pública Única",
      diagramType: "router-nat"
    };
  }

  // 4. IP / IPv4 / IPv6
  if (titleLower.includes("ip") || titleLower.includes("ipv4") || titleLower.includes("ipv6") || titleLower.includes("dirección ip")) {
    return {
      id: "diag-ip",
      title: "Arquitectura de Direccionamiento: IPv4 vs IPv6",
      caption: "IPv4 (32 bits, 4 octetos decimales, agotamiento de espacio) vs IPv6 (128 bits, 8 bloques hex, autoconfiguración SLAAC)",
      diagramType: "ip-addressing"
    };
  }

  // 5. URL
  if (titleLower.includes("url")) {
    return {
      id: "diag-url",
      title: "Anatomía y Estructura Estándar de una URL",
      caption: "Esquema (Protocolo) + Host (Dominio FQDN) + Puerto + Ruta (Path) + Query String (?params) + Fragmento (#hash)",
      diagramType: "url-anatomy"
    };
  }

  // 6. HTTP vs HTTPS / SSL / TLS
  if (titleLower.includes("https") || titleLower.includes("ssl") || titleLower.includes("tls") || (titleLower.includes("http") && titleLower.includes("diferencia"))) {
    return {
      id: "diag-https",
      title: "Seguridad en Tránsito: HTTP vs HTTPS (TLS 1.3)",
      caption: "Tráfico en texto plano vulnerable a sniffing vs Túnel Criptográfico con Certificado CA y Cifrado AES-256-GCM",
      diagramType: "http-vs-https"
    };
  }

  // 7. Códigos de Estado HTTP
  if (titleLower.includes("estado") || titleLower.includes("status code") || titleLower.includes("códigos")) {
    return {
      id: "diag-status-codes",
      title: "Familias Semánticas de Códigos de Estado HTTP",
      caption: "1xx (Informativos) | 2xx (Éxito) | 3xx (Redirección) | 4xx (Error Cliente) | 5xx (Error Servidor)",
      diagramType: "http-status-codes"
    };
  }

  // 8. TCP vs UDP
  if (titleLower.includes("tcp") || titleLower.includes("udp")) {
    return {
      id: "diag-tcp-udp",
      title: "Protocolos de Transporte: TCP Confiable vs UDP Datagramas",
      caption: "TCP (Handshake SYN-ACK, flujo ordenado y retransmisión) vs UDP (0-handshake, datagramas directos para streaming y gaming)",
      diagramType: "tcp-vs-udp"
    };
  }

  // 9. DHCP
  if (titleLower.includes("dhcp")) {
    return {
      id: "diag-dhcp",
      title: "Proceso D.O.R.A de Asignación Automática DHCP",
      caption: "Discover (Broadcast cliente) ➔ Offer (Propuesta servidor) ➔ Request (Aceptación cliente) ➔ Acknowledge (Confirmación lease)",
      diagramType: "dhcp-dora"
    };
  }

  // 10. CORS
  if (titleLower.includes("cors")) {
    return {
      id: "diag-cors",
      title: "Mecanismo de Seguridad CORS & Preflight OPTIONS",
      caption: "Petición Preflight OPTIONS ➔ Validación de cabecera Origin por Servidor (204) ➔ Petición Real (GET/POST) permitida",
      diagramType: "cors-preflight"
    };
  }

  // 11. CDN & Anycast
  if (titleLower.includes("cdn") || titleLower.includes("anycast")) {
    return {
      id: "diag-cdn",
      title: "Distribución Global de Contenidos mediante CDN & Anycast",
      caption: "Servidor Origen sincronizando assets cacheados hacia Edge PoPs perimetrales para responder con mínima latencia (<15ms)",
      diagramType: "cdn-edge-distribution"
    };
  }

  // 12. Firewall
  if (titleLower.includes("firewall") || titleLower.includes("cortafuegos")) {
    return {
      id: "diag-firewall",
      title: "Inspección de Tráfico y Reglas de Firewall (WAF)",
      caption: "Inspección de paquetes entrantes y salientes: filtrado por puerto, protocolo, IP y reglas de seguridad aplicadas en tiempo real",
      diagramType: "firewall-inspection"
    };
  }

  // 13. WebSocket
  if (titleLower.includes("websocket")) {
    return {
      id: "diag-ws",
      title: "Arquitectura WebSocket: Handshake Upgrade & Full-Duplex",
      caption: "Actualización HTTP 101 Switching Protocols ➔ Canal TCP persistente bidireccional en tiempo real con mínima sobrecarga",
      diagramType: "websocket-full-duplex"
    };
  }

  // 14. Proxy
  if (titleLower.includes("proxy")) {
    return {
      id: "diag-proxy",
      title: "Topologías Proxy: Forward Proxy vs Reverse Proxy",
      caption: "Forward Proxy (actúa en nombre del cliente para privacidad y caché) vs Reverse Proxy (protege servidores y balancea carga)",
      diagramType: "forward-vs-reverse-proxy"
    };
  }

  // 15. Headers de Seguridad
  if (titleLower.includes("headers") || titleLower.includes("cabeceras") || titleLower.includes("csp") || titleLower.includes("hsts")) {
    return {
      id: "diag-sec-headers",
      title: "Escudo de Cabeceras HTTP de Seguridad",
      caption: "CSP (Anti-XSS), HSTS (Fuerza HTTPS), X-Frame-Options (Anti-Clickjacking), X-Content-Type-Options (nosniff)",
      diagramType: "security-headers"
    };
  }

  // 16. HTTP/2
  if (titleLower.includes("http/2")) {
    return {
      id: "diag-http2",
      title: "Evolución HTTP/1.1 vs HTTP/2 (Multiplexing Binario)",
      caption: "Eliminación del bloqueo en cabeza de línea mediante una única conexión TCP con streams concurrentes intercalados",
      diagramType: "http1-vs-http2"
    };
  }

  // 17. HTTP/3 / QUIC
  if (titleLower.includes("http/3") || titleLower.includes("quic")) {
    return {
      id: "diag-http3",
      title: "Stack de Protocolos HTTP/3 sobre QUIC y UDP",
      caption: "Streams independientes sin bloqueo HoL por pérdida de paquetes, cifrado TLS 1.3 integrado y 0-RTT connection migration",
      diagramType: "http3-quic"
    };
  }

  // 18. DDoS
  if (titleLower.includes("ddos") || titleLower.includes("ataque")) {
    return {
      id: "diag-ddos",
      title: "Arquitectura de Mitigación y Depuración DDoS",
      caption: "Tráfico de botnet absorbido por Scrubbing Centers Anycast distribuidos globalmente ➔ Tráfico limpio canalizado al Origen",
      diagramType: "ddos-mitigation"
    };
  }

  // 19. Semántica HTML
  if (titleLower.includes("semántica") || titleLower.includes("doctype") || titleLower.includes("content model") || titleLower.includes("etiquetas de bloque")) {
    return {
      id: "diag-html-tree",
      title: "Árbol Estructural y Semántica Estándar HTML5",
      caption: "Jerarquía estándar W3C (<header>, <nav>, <main>, <article>, <aside>, <footer>) optimizada para SEO y accesibilidad",
      diagramType: "html-semantic-tree"
    };
  }

  // 20. A11y / ARIA
  if (titleLower.includes("accesibilidad") || titleLower.includes("aria") || titleLower.includes("a11y")) {
    return {
      id: "diag-a11y-tree",
      title: "Mapeo DOM Visual ➔ Accessibility Tree (AOM)",
      caption: "Conversión de elementos y atributos ARIA en roles, estados y propiedades semánticas consumidas por lectores de pantalla",
      diagramType: "html-dom-a11y-tree"
    };
  }

  // 21. CSS Box Model
  if (titleLower.includes("box model") || titleLower.includes("caja") || titleLower.includes("margin") || titleLower.includes("padding")) {
    return {
      id: "diag-box-model",
      title: "El Modelo de Caja Estándar de CSS",
      caption: "Content Box (ancho x alto) ➔ Padding (relleno interno) ➔ Border (borde perimetral) ➔ Margin (espacio exterior)",
      diagramType: "css-box-model"
    };
  }

  // 22. Event Loop
  if (titleLower.includes("event loop") || titleLower.includes("call stack") || titleLower.includes("microtask") || titleLower.includes("asincron") || titleLower.includes("concurrencia")) {
    return {
      id: "diag-event-loop",
      title: "Arquitectura del Event Loop y Colas de Tareas",
      caption: "Call Stack (LIFO) ➔ Microtask Queue (Prioridad absoluta tras cada tarea) ➔ Macrotask Queue (1 por ciclo)",
      diagramType: "event-loop"
    };
  }

  // 23. React Fiber
  if (titleLower.includes("reconcil") || titleLower.includes("virtual dom") || titleLower.includes("fiber") || (titleLower.includes("react") && titleLower.includes("funciona"))) {
    return {
      id: "diag-react-fiber",
      title: "Arquitectura React Fiber & Proceso de Reconciliación",
      caption: "Current Tree (DOM en pantalla) ➔ Render Phase (Diffing asíncrono e interrumpible) ➔ Commit Phase (Mutación síncrona del DOM)",
      diagramType: "react-fiber-reconciliation"
    };
  }

  // 24. Web Components / Shadow DOM
  if (titleLower.includes("shadow dom") || titleLower.includes("web component") || titleLower.includes("custom element") || titleLower.includes("slot") || titleLower.includes("template")) {
    return {
      id: "diag-shadow-dom",
      title: "Encapsulación Shadow DOM & Proyección de Slots",
      caption: "Light DOM (Documento principal) ➔ Shadow Boundary Aislado ➔ Shadow Tree encapsulado con slots proyectados",
      diagramType: "web-components-shadow-dom"
    };
  }

  // 25. Git Workflow
  if (
    qText.includes("git") ||
    qText.includes("version control") ||
    qText.includes("branch") ||
    qText.includes("commit") ||
    qText.includes("merge") ||
    qText.includes("rebase")
  ) {
    return {
      id: "diag-git",
      title: "Ciclo de Control de Versiones Git",
      caption: "Working Directory ➔ Staging Area (git add) ➔ Repositorio Local (git commit) ➔ Remoto (git push)",
      diagramType: "git-workflow"
    };
  }

  // 25.5 Broadcast Channel API
  if (
    qText.includes("broadcast") ||
    qText.includes("broadcastchannel") ||
    qText.includes("broadcast channel")
  ) {
    return {
      id: "diag-browser-broadcast",
      title: "Topología Pub/Sub de Broadcast Channel API",
      caption: "Difusión 1 a N en memoria entre pestañas del mismo origen excluyendo a la emisora.",
      diagramType: "browser-broadcast-channel"
    };
  }

  // 26. Critical Rendering Path
  if (
    qText.includes("browser") ||
    qText.includes("rendering") ||
    qText.includes("reflow") ||
    qText.includes("repaint") ||
    qText.includes("critical rendering")
  ) {
    return {
      id: "diag-browser-render",
      title: "Critical Rendering Path del Navegador",
      caption: "HTML ➔ DOM | CSS ➔ CSSOM ➔ Render Tree ➔ Layout (Reflow) ➔ Paint ➔ Composite",
      diagramType: "browser-rendering-path"
    };
  }

  // 27. TypeScript Pipeline
  if (
    qText.includes("typescript") ||
    qText.includes("interface") ||
    qText.includes("tipado") ||
    qText.includes("generics") ||
    qText.includes("narrowing")
  ) {
    return {
      id: "diag-ts",
      title: "Pipeline de Tipado Estático de TypeScript",
      caption: "Código TypeScript (.ts) ➔ Chequeo Estricto de Tipos ➔ Eliminación de tipos (Erasure) ➔ JavaScript Estándar (.js)",
      diagramType: "typescript-pipeline"
    };
  }

  // 28. Testing Trophy
  if (
    qText.includes("test") ||
    qText.includes("unit") ||
    qText.includes("integration") ||
    qText.includes("e2e") ||
    qText.includes("jest") ||
    qText.includes("cypress")
  ) {
    return {
      id: "diag-testing",
      title: "Estrategia de Pirámide & Trofeo de Pruebas",
      caption: "Análisis Estático (Tipos/Lints) ➔ Tests Unitarios ➔ Tests de Integración ➔ Tests End-to-End (E2E)",
      diagramType: "testing-trophy"
    };
  }

  // 29. CI/CD
  if (
    qText.includes("ci/cd") ||
    qText.includes("pipeline") ||
    qText.includes("deploy") ||
    qText.includes("docker") ||
    qText.includes("build tools") ||
    qText.includes("webpack") ||
    qText.includes("vite")
  ) {
    return {
      id: "diag-cicd",
      title: "Pipeline Automatizado de CI/CD",
      caption: "Commit & Push ➔ Linters & Unit Tests ➔ Build de Producción ➔ Staging ➔ Producción",
      diagramType: "cicd-pipeline"
    };
  }

  // 30. Flux / State
  if (
    qText.includes("state") ||
    qText.includes("redux") ||
    qText.includes("zustand") ||
    qText.includes("flux") ||
    qText.includes("context")
  ) {
    return {
      id: "diag-flux",
      title: "Flujo Unidireccional de Datos (Arquitectura Flux)",
      caption: "Evento de Usuario ➔ Dispatch Action ➔ Actualización Atómica del Store ➔ Re-render de Vista",
      diagramType: "flux-architecture"
    };
  }

  // 31. Internet general
  if (titleLower.includes("internet") || titleLower.includes("red")) {
    return {
      id: "diag-network-global",
      title: "Topología Global de Internet & Protocolos Web",
      caption: "Red mallada de Sistemas Autónomos (AS), Puntos de Intercambio (IXP) y Enrutamiento BGP mundial",
      diagramType: "client-server-network"
    };
  }

  return {
    id: `diag-concept-${question.title.slice(0, 10)}`,
    title: `Modelo Conceptual: ${question.title.slice(0, 42)}`,
    caption: "Contexto & Entrada ➔ Evaluación en el Motor Frontend ➔ Resultado & Comportamiento en UI",
    diagramType: "concept-model"
  };
};

export const getCoherentTips = (
  question: IQuestion,
  moduleTitle = ""
): IInterviewTips => {
  const genericFollowUps = [
    "¿Cuáles son las principales limitaciones o trade-offs de esta solución frente a alternativas modernas?",
    "¿Cómo medirías o depurarías este comportamiento en una aplicación en producción?"
  ];

  if (question.interviewTips) {
    return question.interviewTips.followUps?.length
      ? question.interviewTips
      : { ...question.interviewTips, followUps: genericFollowUps };
  }

  const scope = moduleTitle ? `en el contexto de ${moduleTitle}` : "en desarrollo frontend";

  return {
    whatInterviewersWant: `El entrevistador busca verificar cómo aplicas este principio ${scope}, evaluando tu criterio de diseño y rendimiento más allá de una definición de memoria: "${question.response.slice(0, 120)}..."`,
    commonPitfalls: [
      "Dar una respuesta teórica sin explicar el impacto real en rendimiento, seguridad o mantenibilidad.",
      "Confundir la sintaxis o comportamiento de librerías externas con los estándares oficiales del navegador."
    ],
    followUps: genericFollowUps
  };
};

export const getCoherentQuiz = (question: IQuestion): IQuizItem => {
  if (question.quiz) {
    return question.quiz;
  }

  const cleanAns =
    question.response.length > 140
      ? question.response.slice(0, 135) + "..."
      : question.response;

  return {
    question: `Respecto a "${question.title}", ¿cuál de las siguientes opciones describe con mayor precisión su concepto?`,
    options: [
      cleanAns,
      "Es una directiva obsoleta en HTML5 que los navegadores modernos ignoran deliberadamente.",
      "Es una función exclusiva de entornos de servidor Node.js que genera error de sintaxis en el navegador.",
      "Es un concepto puramente de diseño visual sin ninguna relevancia en la arquitectura del código."
    ],
    correctIndex: 0,
    explanation: question.response
  };
};
