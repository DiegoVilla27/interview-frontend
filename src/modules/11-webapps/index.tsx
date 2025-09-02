import { ISection } from "../../types";

export const questionsWebapps: ISection = {
  title: "Web Apps",
  collapse: "collapseWebApps",
  icon: "web-apps",
  questions: [
    {
      title: "¿Qué es una WebApp?",
      response:
        "Es una aplicación que se ejecuta en un navegador web y se accede mediante internet, sin necesidad de instalación."
    },
    {
      title:
        "¿Cuál es la diferencia entre una página web estática y una WebApp?",
      response:
        "Una página estática solo muestra contenido fijo, mientras que una WebApp permite interacción dinámica con el usuario."
    },
    {
      title: "¿Qué es una SPA (Single Page Application)?",
      response:
        "Es una aplicación web que carga una sola página HTML y actualiza dinámicamente su contenido sin recargar toda la página."
    },
    {
      title: "¿Qué ventajas tiene una SPA frente a aplicaciones tradicionales?",
      response:
        "Mayor fluidez, mejor experiencia de usuario, menos recargas completas de página y un frontend más interactivo."
    },
    {
      title: "¿Qué es un Service Worker?",
      response:
        "Es un script que el navegador ejecuta en segundo plano, permitiendo cachear recursos, notificaciones push y soporte offline."
    },
    {
      title: "¿Qué diferencia hay entre una WebApp y una PWA?",
      response:
        "Una PWA es una WebApp mejorada con características como soporte offline, instalación en dispositivos y notificaciones push."
    },
    {
      title: "¿Qué problemas comunes enfrentan las WebApps en navegadores?",
      response:
        "Compatibilidad entre navegadores, rendimiento en dispositivos móviles, problemas de seguridad y caching inconsistente."
    },
    {
      title:
        "¿Cómo funciona el renderizado en el lado del cliente vs. servidor?",
      response:
        "En el cliente, el navegador procesa el JavaScript para renderizar vistas; en el servidor, se generan HTML completos listos para el navegador."
    },
    {
      title: "¿Qué es el hydration en una WebApp?",
      response:
        "Es el proceso donde una aplicación del lado del cliente toma el HTML ya renderizado en el servidor y lo convierte en una SPA interactiva."
    },
    {
      title: "¿Cómo implementarías autenticación segura en una WebApp?",
      response:
        "Usando tokens (JWT), cookies seguras con HttpOnly, HTTPS, y manejando la expiración de sesiones correctamente."
    },
    {
      title: "¿Cómo optimizarías el rendimiento de una WebApp grande?",
      response:
        "Aplicando lazy loading, code splitting, optimización de imágenes, caching, memoización y uso de un CDN."
    },
    {
      title: "¿Cómo manejarías SEO en una SPA?",
      response:
        "Implementando SSR (Server-Side Rendering) o pre-rendering para que los bots de búsqueda puedan indexar el contenido correctamente."
    },
    {
      title: "¿Cómo harías que una WebApp funcione offline?",
      response:
        "Implementando un Service Worker con estrategias de caching y almacenamiento local como IndexedDB."
    },
    {
      title: "¿Qué es un microfrontend?",
      response:
        "Es una arquitectura donde una WebApp se divide en múltiples aplicaciones pequeñas e independientes que se integran en una sola interfaz."
    },
    {
      title:
        "¿Cómo manejarías una migración de una aplicación tradicional a una WebApp moderna?",
      response:
        "Lo haría de forma incremental: modularizando la aplicación, integrando APIs, migrando partes críticas a SPA/PWA y asegurando retrocompatibilidad."
    }
  ]
};

export default questionsWebapps;
