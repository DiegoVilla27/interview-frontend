import { ISection } from "../../types";

export const questionsBrowser: ISection = {
  title: "Browser",
  collapse: "collapseBrowser",
  icon: "browser",
  questions: [
    // === BÁSICO ===
    { title: "¿Qué lenguajes son reconocidos por el navegador?", response: "El navegador reconoce HTML (estructura), CSS (estilos) y JavaScript (lógica e interactividad). JavaScript es el único lenguaje de programación nativo del browser.", level: "basico" },
    { title: "¿Qué es el DOM?", response: "El DOM (Document Object Model) es una representación en forma de árbol de la estructura de un documento HTML. Permite a JavaScript interactuar y manipular el contenido, estructura y estilo de la página.", level: "basico" },
    { title: "¿Qué es el BOM?", response: "El BOM (Browser Object Model) permite interactuar con el navegador: window (ventana), navigator (info del browser), screen (pantalla), history (historial) y location (URL).", level: "basico" },
    { title: "¿Qué es el localStorage?", response: "API del navegador que almacena datos persistentes en formato clave-valor (hasta ~5MB). Los datos no expiran al cerrar el navegador. Solo acepta strings.", level: "basico" },
    { title: "¿Qué es el sessionStorage?", response: "Similar a localStorage pero los datos solo se mantienen durante la sesión. Al cerrar la pestaña o ventana, se eliminan. Cada pestaña tiene su propio sessionStorage.", level: "basico" },
    { title: "¿Qué es una cookie?", response: "Un pequeño archivo (~4KB) que el servidor envía al navegador para almacenar información: autenticación, preferencias, tracking. Se envían automáticamente en cada request HTTP al dominio.", level: "basico" },
    { title: "¿Qué es la caché del navegador?", response: "Almacena recursos estáticos (imágenes, CSS, JS) para no descargarlos en cada visita. Se controla con headers como Cache-Control, ETag, y Last-Modified.", level: "basico" },
    // === MEDIO ===
    { title: "¿Cuál es la diferencia entre DOM y BOM?", response: "El DOM representa el contenido del documento (HTML), mientras que el BOM representa las características del navegador (URL, historial, ventana) que no forman parte del documento.", level: "medio" },
    { title: "¿Qué es el event loop en los navegadores?", response: "El mecanismo que maneja la ejecución de tareas: ejecuta el call stack, vacía las microtasks (Promises), ejecuta requestAnimationFrame, y luego la siguiente macrotask (setTimeout).", level: "medio" },
    { title: "¿Qué son los Web Workers?", response: "Hilos en segundo plano que ejecutan JavaScript en paralelo al hilo principal, evitando bloqueos en la UI. Se comunican con postMessage y no tienen acceso al DOM.", level: "medio" },
    { title: "¿Qué es CORS en el navegador?", response: "CORS (Cross-Origin Resource Sharing) controla solicitudes HTTP entre diferentes orígenes. El servidor responde con headers (Access-Control-Allow-Origin) para autorizar o denegar la solicitud.", level: "medio" },
    { title: "¿Qué es el Same-Origin Policy?", response: "Política de seguridad que restringe cómo los scripts de un origen (protocolo + dominio + puerto) pueden interactuar con recursos de otro origen. CORS es la forma de relajar esta restricción.", level: "medio" },
    { title: "¿Qué diferencia hay entre localStorage, sessionStorage y cookies?", response: "localStorage: persistente, ~5MB, solo JS. sessionStorage: por pestaña/sesión, ~5MB. Cookies: ~4KB, se envían en cada HTTP request, soportan expiración y flags (HttpOnly, Secure, SameSite).", level: "medio" },
    // === AVANZADO ===
    { title: "¿Qué es el render tree y cómo se construye?", response: "Se construye combinando DOM + CSSOM. Excluye elementos no visibles (display: none, <head>). Es el input para el layout (calcular posiciones) y el paint (dibujar píxeles).", level: "avanzado" },
    { title: "¿Qué es el reflow y repaint?", response: "Reflow recalcula posiciones y dimensiones (costoso). Lo provocan cambios en width, height, font-size, DOM. Repaint actualiza solo estilos visuales (color, background). Batch DOM changes para minimizarlos.", level: "avanzado" },
    { title: "¿Qué es el Critical Rendering Path?", response: "La secuencia: HTML → DOM, CSS → CSSOM, DOM + CSSOM → Render Tree → Layout → Paint → Composite. Optimizar el CRP (reducir CSS blocking, defer JS) mejora el First Contentful Paint.", level: "avanzado" },
    { title: "¿Qué son los Service Workers?", response: "Scripts que corren en segundo plano, independientes de la página. Permiten caché avanzado (offline-first), notificaciones push, background sync, y son la base de las PWA.", level: "avanzado" },
    { title: "¿Qué es el prefetching y preloading en navegadores?", response: "Prefetch: carga recursos que probablemente se necesitarán en navegaciones futuras (baja prioridad). Preload: carga recursos necesarios para la página actual con alta prioridad (<link rel='preload'>).", level: "avanzado" },
    { title: "¿Qué es el throttling y debouncing en el navegador?", response: "Throttle: ejecuta una función como máximo una vez cada X ms (scroll, resize). Debounce: ejecuta solo después de X ms sin actividad (búsqueda). Ambos optimizan rendimiento.", level: "avanzado" },
    { title: "¿Qué es IndexedDB y cuándo se usa?", response: "Es una base de datos NoSQL del navegador para almacenar grandes cantidades de datos estructurados. Soporta transacciones, índices y cursors. Ideal para apps offline y caché de datos.", level: "avanzado" },
    // === EXPERTO ===
    { title: "¿Qué es el navegador headless y para qué se usa?", response: "Un navegador sin interfaz gráfica (Puppeteer, Playwright). Se usa para testing E2E, scraping, generación de PDFs, screenshots, y pre-rendering de SPAs para SEO.", level: "experto" },
    { title: "¿Qué es la Compression Streams API?", response: "API nativa del navegador para comprimir/descomprimir datos con gzip o deflate usando streams. Permite procesar datos comprimidos sin librerías externas.", level: "experto" },
    { title: "¿Qué es el Scheduler API (scheduler.postTask)?", response: "Permite priorizar tareas en el main thread con niveles: 'user-blocking' (alta), 'user-visible' (media), 'background' (baja). Evita que tareas pesadas bloqueen la interactividad.", level: "experto" },
    { title: "¿Qué son los Shared Workers y en qué se diferencian de los Web Workers?", response: "Un Shared Worker es compartido entre múltiples tabs/iframes del mismo origen. Los Web Workers son exclusivos de un contexto. Shared Workers permiten sincronizar estado entre pestañas.", level: "experto" },
    { title: "¿Qué es la Storage Access API y por qué es necesaria?", response: "Permite a iframes de terceros solicitar acceso a sus cookies en navegadores que bloquean third-party cookies por defecto. Esencial para autenticación federada y widgets embebidos.", level: "experto" }
  ]
};

export default questionsBrowser;
