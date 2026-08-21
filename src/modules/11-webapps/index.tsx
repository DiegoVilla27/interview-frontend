import { ISection } from "../../types";

export const questionsWebapps: ISection = {
  title: "Web Apps",
  collapse: "collapseWebApps",
  icon: "web-apps",
  questions: [
    // === BÁSICO ===
    {
      title: "¿Qué es una WebApp?",
      response:
        "Es una aplicación interactiva que se ejecuta en un navegador web y se accede vía internet o red local, sin necesidad de instalación previa en la tienda del sistema operativo.",
      level: "basico"
    },
    {
      title: "¿Cuál es la diferencia entre un sitio web estático y una WebApp?",
      response:
        "Un sitio estático muestra contenido principalmente informativo y fijo (HTML/CSS), mientras que una WebApp procesa lógica de negocio, gestiona estado, maneja datos dinámicos y permite interacción bidireccional continua con el usuario.",
      level: "basico"
    },
    {
      title: "¿Qué es una SPA (Single Page Application)?",
      response:
        "Es una aplicación web que carga un único documento HTML inicial y actualiza dinámicamente la interfaz mediante JavaScript sin recargar la página completa al navegar entre vistas.",
      level: "basico"
    },
    {
      title: "¿Qué ventajas y desventajas tiene una SPA?",
      response:
        "Ventajas: experiencia de usuario fluida y reactiva similar a apps nativas, transiciones suaves y menor transferencia de datos tras la carga inicial. Desventajas: bundle inicial más pesado, tiempo hasta el primer render (FCP) más alto y mayores desafíos para SEO sin SSR.",
      level: "basico"
    },
    {
      title: "¿Qué es una PWA (Progressive Web App)?",
      response:
        "Es una aplicación web construida con estándares modernos que ofrece capacidades de app nativa: funcionamiento offline, instalación en pantalla de inicio, notificaciones push y acceso a hardware mediante APIs web avanzadas.",
      level: "basico"
    },
    // === MEDIO ===
    {
      title: "¿Qué diferencia hay entre CSR, SSR y SSG?",
      response:
        "CSR (Client-Side Rendering) procesa HTML en el navegador. SSR (Server-Side Rendering) genera el HTML en el servidor en cada petición mejorando SEO y TTFB. SSG (Static Site Generation) compila el HTML en tiempo de build para máxima velocidad y distribución por CDN.",
      level: "medio"
    },
    {
      title: "¿Qué es la hidratación (Hydration) y cómo funciona?",
      response:
        "Es el proceso mediante el cual el runtime de JavaScript en el cliente toma el HTML estático renderizado previamente por el servidor, adjunta los event listeners y reconstruye el árbol de estado en memoria para volverlo interactivo.",
      level: "medio"
    },
    {
      title: "¿Qué es un Service Worker y cuál es su ciclo de vida?",
      response:
        "Es un script proxy en segundo plano entre el navegador y la red. Su ciclo de vida consta de tres fases: Registro (Register), Instalación (Install, donde se precachean recursos estáticos) y Activación (Activate, donde se limpian cachés viejas y toma control de clientes).",
      level: "medio"
    },
    {
      title: "¿Qué estrategias de caching existen con Service Workers?",
      response:
        "Cache First (prioriza caché sobre red), Network First (intenta red y cae a caché si falla), Stale-While-Revalidate (sirve caché de inmediato mientras actualiza en segundo plano), y Network Only / Cache Only para recursos críticos específicos.",
      level: "medio"
    },
    {
      title: "¿Cómo se maneja el SEO y la indexación en aplicaciones SPA?",
      response:
        "Mediante Server-Side Rendering (SSR), Pre-rendering estático, generación dinámica de Open Graph / meta tags en cabeceras de respuesta, y sitemaps automáticos, permitiendo que crawlers sin soporte completo de JS indexen el contenido fielmente.",
      level: "medio"
    },
    {
      title: "¿Cómo implementar autenticación segura en una WebApp moderna?",
      response:
        "Utilizando cookies con atributos HttpOnly, Secure y SameSite=Strict/Lax para almacenar tokens de sesión o refresh tokens, mitigando XSS; implementando flujo OAuth 2.0 / OIDC con PKCE, y aplicando CSRF tokens en mutaciones de estado.",
      level: "medio"
    },
    // === AVANZADO ===
    {
      title: "¿Qué es ISR (Incremental Static Regeneration)?",
      response:
        "Es una técnica híbrida que permite regenerar páginas estáticas en el servidor en segundo plano bajo demanda o tras un intervalo de tiempo (revalidate) sin necesidad de recompilar toda la aplicación.",
      level: "avanzado"
    },
    {
      title: "¿Qué es la Arquitectura de Islas (Islands Architecture)?",
      response:
        "Un paradigma de renderizado donde la página se compone de HTML estático puro generado en servidor, salpicado de pequeños componentes interactivos aislados ('islas') que se hidratan de forma independiente y concurrente (implementado en frameworks como Astro).",
      level: "avanzado"
    },
    {
      title: "¿Qué son los Micro-frontends y qué patrones de integración existen?",
      response:
        "Es la descomposición de un frontend monolítico en aplicaciones independientes por dominio de negocio. Patrones de integración: Module Federation en runtime (Webpack/Vite), integración en build-time con paquetes npm, o integración basada en routing/iframes.",
      level: "avanzado"
    },
    {
      title: "¿Qué son las Core Web Vitals y cómo optimizarlas?",
      response:
        "Son métricas clave de Google para UX: LCP (Largest Contentful Paint < 2.5s), INP (Interaction to Next Paint < 200ms) y CLS (Cumulative Layout Shift < 0.1). Se optimizan con lazy-loading, reserva de espacios de imagen, compresión moderna (AVIF/WebP) y optimización del hilo principal.",
      level: "avanzado"
    },
    {
      title: "¿Qué es Content Security Policy (CSP) y cómo protege una WebApp?",
      response:
        "Es una cabecera de seguridad HTTP que restringe los orígenes permitidos para cargar scripts, estilos, imágenes y conexiones de red. Es la defensa fundamental contra inyecciones XSS y ataques de clickjacking.",
      level: "avanzado"
    },
    {
      title: "¿Cómo funciona el almacenamiento offline persistente con IndexedDB?",
      response:
        "IndexedDB es una base de datos NoSQL transaccional en el navegador capaz de almacenar gigabytes de datos complejos (objetos, blobs). Permite consultas indexadas asíncronas y sincronización en segundo plano con Background Sync API cuando regresa la conexión.",
      level: "avanzado"
    },
    // === EXPERTO ===
    {
      title: "¿Qué es Resumability vs Hydration (ej. Qwik)?",
      response:
        "A diferencia de la hidratación tradicional que re-ejecuta todo el código de componentes para montar listeners, la 'resumability' serializa el estado y los event handlers en el HTML mismo; el cliente no descarga ni ejecuta JS hasta que el usuario interactúa realmente con el elemento (0kb JS inicial).",
      level: "experto"
    },
    {
      title: "¿Qué es Edge Rendering y cómo optimiza la latencia global?",
      response:
        "Consiste en ejecutar lógica de renderizado y middlewares en nodos CDN distribuidos geográficamente cerca del usuario (Edge Workers con runtime V8 ligero). Permite personalizar contenido SSR con latencias cercanas a archivos estáticos (<50ms).",
      level: "experto"
    },
    {
      title: "¿Cómo se integra WebAssembly (Wasm) en una WebApp de alto rendimiento?",
      response:
        "Compilando código de C++/Rust a bytecode binario Wasm que se ejecuta a velocidades casi nativas dentro del sandbox del navegador. Se comunica con JS vía memoria compartida (SharedArrayBuffer) para tareas intensivas como edición de video, 3D/WebGL o criptografía.",
      level: "experto"
    },
    {
      title: "¿Cómo diseñar una estrategia de Resiliencia y Offline-First a escala?",
      response:
        "Arquitectura con Service Workers usando Stale-While-Revalidate, capa de sincronización bidireccional con colas de mutaciones persistentes en IndexedDB, resolución de conflictos (CRDTs o Last-Write-Wins), y degradación elegante ante caídas de red o microservicios.",
      level: "experto"
    },
    {
      title: "¿Cómo mitigar fugas de memoria y Memory Leaks en SPAs de larga duración?",
      response:
        "Limpieza estricta de event listeners, timers y observers (ResizeObserver, IntersectionObserver) en el ciclo de desmontaje, anulación de suscripciones RxJS/TanStack, uso de WeakMap/WeakSet para cachés, y auditoría con Chrome DevTools Memory Heap Snapshots y Allocation Timelines.",
      level: "experto"
    }
  ]
};

export default questionsWebapps;
