import { ISection } from "../../types";

export const questionsInternet: ISection = {
  title: "Internet",
  collapse: "collapseInternet",
  icon: "internet",
  questions: [
    // === BÁSICO ===
    {
      title: "¿Qué es Internet?",
      response:
        "Es una red global de computadoras interconectadas que se comunican mediante protocolos estandarizados como TCP/IP.",
      level: "basico"
    },
    {
      title: "¿Qué es un Packet?",
      response:
        "Es la unidad básica de datos que se transmite en una red. Cada paquete contiene información de origen, destino y el contenido de los datos.",
      level: "basico"
    },
    {
      title: "¿Qué es un Router?",
      response:
        "Es un dispositivo que conecta diferentes redes y se encarga de enrutar los paquetes hacia su destino.",
      level: "basico"
    },
    {
      title: "¿Qué es una Dirección IP?",
      response:
        "Es un identificador único asignado a cada dispositivo en una red, usado para localizar y enviar datos correctamente.",
      level: "basico"
    },
    {
      title: "¿Qué es un Nombre de Dominio?",
      response:
        "Es un nombre legible por humanos que identifica un sitio web, como google.com, y se traduce a una dirección IP mediante DNS.",
      level: "basico"
    },
    {
      title: "¿Qué es una URL?",
      response:
        "Es un Localizador Uniforme de Recursos que indica la dirección completa de un recurso en la web, como una página, imagen o archivo.",
      level: "basico"
    },
    {
      title: "¿Qué es y para qué sirve el protocolo HTTP?",
      response:
        "Es un protocolo de comunicación que permite la transferencia de hipertexto entre un cliente (navegador) y un servidor.",
      level: "basico"
    },
    {
      title: "¿Qué es un Firewall?",
      response:
        "Es un sistema de seguridad que filtra el tráfico de red entrante y saliente según reglas definidas para proteger la red.",
      level: "basico"
    },
    // === MEDIO ===
    {
      title: "¿Cuál es la diferencia entre URL relativa y absoluta?",
      response:
        "La URL absoluta incluye el dominio y esquema completo (https://ejemplo.com/archivo.png). La URL relativa solo indica la ruta relativa al recurso (/archivo.png).",
      level: "medio"
    },
    {
      title: "¿Qué es DNS y cómo funciona?",
      response:
        "El Sistema de Nombres de Dominio traduce nombres de dominio (como google.com) en direcciones IP para que los navegadores puedan localizar los servidores. Usa una jerarquía de servidores: raíz, TLD, autoritativo y resolver.",
      level: "medio"
    },
    {
      title: "¿Qué diferencia hay entre HTTP y HTTPS?",
      response:
        "HTTPS cifra la comunicación entre cliente y servidor utilizando SSL/TLS, mientras que HTTP transmite datos en texto plano. HTTPS protege contra ataques man-in-the-middle.",
      level: "medio"
    },
    {
      title: "¿Qué son los Códigos de Estado HTTP?",
      response:
        "Son códigos que indican el resultado de una petición: 1xx (informativos), 2xx (éxito), 3xx (redirección), 4xx (errores del cliente), 5xx (errores del servidor).",
      level: "medio"
    },
    {
      title: "¿Qué diferencia hay entre TCP y UDP?",
      response:
        "TCP asegura la entrega ordenada y confiable de datos (ej. páginas web), mientras que UDP prioriza velocidad sobre confiabilidad (ej. streaming, juegos online). TCP usa handshake de 3 vías.",
      level: "medio"
    },
    {
      title: "¿Qué es DHCP?",
      response:
        "Es el protocolo que asigna dinámicamente direcciones IP y otros parámetros de red a dispositivos conectados, evitando la configuración manual.",
      level: "medio"
    },
    {
      title: "¿Qué es CORS?",
      response:
        "Cross-Origin Resource Sharing es un mecanismo de seguridad que controla cómo los navegadores permiten solicitudes entre diferentes dominios. Se configura con headers como Access-Control-Allow-Origin.",
      level: "medio"
    },
    {
      title: "¿Qué es un CDN?",
      response:
        "Un Content Delivery Network es una red de servidores distribuidos globalmente que entrega contenido al usuario desde el servidor más cercano para mejorar velocidad y disponibilidad.",
      level: "medio"
    },
    {
      title: "¿Qué es SSL/TLS?",
      response:
        "Son protocolos de seguridad que cifran la comunicación entre cliente y servidor para garantizar confidencialidad e integridad de los datos. TLS es la evolución moderna de SSL.",
      level: "medio"
    },
    {
      title: "¿Qué diferencia hay entre IPv4 e IPv6?",
      response:
        "IPv4 usa direcciones de 32 bits (limitadas a ~4.3 mil millones), mientras que IPv6 usa direcciones de 128 bits, ofreciendo un espacio mucho mayor y mejoras en seguridad y eficiencia.",
      level: "medio"
    },
    // === AVANZADO ===
    {
      title: "¿Qué es NAT y por qué es importante?",
      response:
        "Network Address Translation mapea múltiples dispositivos de una red privada a una única dirección IP pública. Fue crucial para paliar la escasez de IPv4 y añade una capa de seguridad al ocultar IPs internas.",
      level: "avanzado"
    },
    {
      title: "¿Qué es WebSocket y en qué se diferencia de HTTP?",
      response:
        "WebSocket permite comunicación bidireccional en tiempo real sobre una conexión TCP persistente. A diferencia de HTTP (request-response), WebSocket mantiene la conexión abierta para enviar y recibir datos sin overhead de headers repetidos.",
      level: "avanzado"
    },
    {
      title: "¿Qué es un Proxy y qué tipos existen?",
      response:
        "Un proxy es un intermediario entre cliente y servidor. Forward proxy actúa en nombre del cliente (caché, filtrado). Reverse proxy protege al servidor (balanceo, SSL termination). Transparent proxy intercepta sin configuración del cliente.",
      level: "avanzado"
    },
    {
      title: "¿Qué es DNS over HTTPS (DoH) y por qué se utiliza?",
      response:
        "Es un mecanismo que cifra las consultas DNS mediante HTTPS para proteger la privacidad y evitar manipulaciones de resoluciones DNS por parte de ISPs o atacantes.",
      level: "avanzado"
    },
    {
      title: "¿Qué es Anycast y cómo mejora la disponibilidad?",
      response:
        "Es una técnica de enrutamiento donde una misma dirección IP está asignada a múltiples servidores en distintas ubicaciones. El tráfico se enruta al servidor más cercano, mejorando latencia y resistencia a fallos.",
      level: "avanzado"
    },
    {
      title: "¿Qué son los headers HTTP más importantes para seguridad?",
      response:
        "Content-Security-Policy (previene XSS), Strict-Transport-Security (fuerza HTTPS), X-Content-Type-Options (previene MIME sniffing), X-Frame-Options (previene clickjacking), y Referrer-Policy (controla información de referencia).",
      level: "avanzado"
    },
    {
      title: "¿Qué es HTTP/2 y qué mejoras ofrece sobre HTTP/1.1?",
      response:
        "HTTP/2 introduce multiplexing (múltiples solicitudes en una conexión), compresión de headers (HPACK), server push y priorización de streams, reduciendo latencia significativamente.",
      level: "avanzado"
    },
    // === EXPERTO ===
    {
      title: "¿Qué es BGP y por qué es crítico para Internet?",
      response:
        "Border Gateway Protocol es el protocolo de enrutamiento que conecta sistemas autónomos (AS) en Internet. Determina las rutas óptimas entre redes de diferentes proveedores. Un error en BGP puede provocar caídas masivas de Internet.",
      level: "experto"
    },
    {
      title: "¿Qué es un ataque DDoS y qué estrategias de mitigación existen?",
      response:
        "Es un ataque que satura servidores enviando tráfico masivo desde múltiples fuentes. Mitigación: rate limiting, Anycast, WAF, scrubbing centers (Cloudflare, AWS Shield), BGP blackholing, y detección basada en ML.",
      level: "experto"
    },
    {
      title: "¿Qué es QUIC y en qué mejora a TCP?",
      response:
        "QUIC es un protocolo de Google basado en UDP que integra TLS 1.3. Ofrece 0-RTT connection establishment, multiplexing sin head-of-line blocking, migración de conexión entre redes, y es la base de HTTP/3.",
      level: "experto"
    },
    {
      title: "¿Qué es HTTP/3 y por qué usa QUIC en lugar de TCP?",
      response:
        "HTTP/3 es la última versión del protocolo HTTP, construido sobre QUIC/UDP. Elimina el head-of-line blocking de TCP, ofrece conexiones más rápidas (0-RTT), y maneja mejor redes inestables como mobile.",
      level: "experto"
    },
    {
      title: "¿Qué es mTLS y cuándo se utiliza?",
      response:
        "Mutual TLS es una autenticación bidireccional donde tanto cliente como servidor presentan certificados. Se usa en comunicación entre microservicios, APIs financieras, y zero-trust architectures.",
      level: "experto"
    }
  ]
};

export default questionsInternet;
