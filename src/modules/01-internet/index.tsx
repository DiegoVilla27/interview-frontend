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
        "Es una red global de computadoras interconectadas que se comunican mediante protocolos estandarizados como TCP/IP, organizada en una topología jerárquica de proveedores Tier 1 (troncal global), Tier 2 (regionales) y Tier 3 (última milla).",
      level: "basico",
      visualDiagram: {
        id: "diag-internet-mesh",
        title: "Malla y Troncal Global de Internet",
        caption: "Jerarquía de interconexión global: Backbone Tier 1, Puntos de Intercambio IXP y última milla.",
        diagramType: "internet-global-mesh"
      }
    },
    {
      title: "¿Qué es un Packet?",
      response:
        "Es la unidad básica de datos que se transmite en una red. Cada paquete contiene información de origen, destino y el contenido de los datos.",
      level: "basico",
      visualDiagram: {
        id: "diag-packet-anatomy",
        title: "Anatomía de un Paquete de Red",
        caption: "Cabecera IP (Capa 3: Enrutamiento) ➔ Cabecera TCP (Capa 4: Control de flujo) ➔ Payload de Datos ➔ Trailer CRC32",
        diagramType: "packet-anatomy"
      },
      codeExample: {
        language: "typescript",
        code: `// Simulación de deserialización de un paquete IP en TypeScript
interface IPPacket {
  version: number;
  ttl: number;
  protocol: 'TCP' | 'UDP';
  sourceIp: string;
  destIp: string;
  payload: Uint8Array;
}

function parsePacketHeader(buffer: DataView): IPPacket {
  const version = (buffer.getUint8(0) >> 4) & 0x0f;
  const ttl = buffer.getUint8(8);
  const protocolCode = buffer.getUint8(9);

  return {
    version,
    ttl,
    protocol: protocolCode === 6 ? 'TCP' : 'UDP',
    sourceIp: \`\${buffer.getUint8(12)}.\${buffer.getUint8(13)}.\${buffer.getUint8(14)}.\${buffer.getUint8(15)}\`,
    destIp: \`\${buffer.getUint8(16)}.\${buffer.getUint8(17)}.\${buffer.getUint8(18)}.\${buffer.getUint8(19)}\`,
    payload: new Uint8Array(buffer.buffer.slice(20))
  };
}`,
        explanation: "Demuestra cómo los encabezados binarios de red son analizados en capas inferiores para extraer IPs y datos útiles."
      }
    },
    {
      title: "¿Qué es un Router?",
      response:
        "Es un dispositivo de Capa 3 que conecta diferentes redes y examina las direcciones IP de destino en cada paquete para reenviarlo por la interfaz óptima según su tabla de enrutamiento.",
      level: "basico",
      visualDiagram: {
        id: "diag-router-routing-table",
        title: "Tabla de Enrutamiento del Router",
        caption: "Conmutación de paquetes entre LAN local y WAN externa mediante el salto siguiente (Next-Hop).",
        diagramType: "router-routing-table"
      }
    },
    {
      title: "¿Qué es una Dirección IP?",
      response:
        "Es un identificador único asignado a cada dispositivo en una red, usado para localizar y enviar datos correctamente.",
      level: "basico",
      visualDiagram: {
        id: "diag-ip-addressing",
        title: "Estructura de Direccionamiento IP",
        caption: "Segmentación en octetos de IPv4 vs hextetos de IPv6 con máscaras de subred.",
        diagramType: "ip-addressing"
      },
      codeExample: {
        language: "typescript",
        code: `// Validación y categorización estricta de direcciones IP en TypeScript
export function validateIp(ip: string): 'IPv4' | 'IPv6' | 'Invalida' {
  const ipv4Regex = /^(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}$/;
  const ipv6Regex = /^(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;

  if (ipv4Regex.test(ip)) return 'IPv4';
  if (ipv6Regex.test(ip)) return 'IPv6';
  return 'Invalida';
}

// Comprobar si una IP pertenece al rango privado (RFC 1918)
export function isPrivateSubnet(ip: string): boolean {
  const octets = ip.split('.').map(Number);
  return (
    octets[0] === 10 ||
    (octets[0] === 172 && octets[1] >= 16 && octets[1] <= 31) ||
    (octets[0] === 192 && octets[1] === 168)
  );
}`,
        explanation: "Permite validar en frontend o backend el formato y clase de red de una dirección IP."
      }
    },
    {
      title: "¿Qué es un Nombre de Dominio?",
      response:
        "Es un nombre legible por humanos que identifica un sitio web, como google.com, y se traduce a una dirección IP mediante DNS.",
      level: "basico",
      visualDiagram: {
        id: "diag-domain-fqdn-hierarchy",
        title: "Jerarquía de un FQDN",
        caption: "Desglose desde el punto raíz (Root) y TLD (.com) hasta el subdominio y host.",
        diagramType: "domain-fqdn-hierarchy"
      }
    },
    {
      title: "¿Qué es una URL?",
      response:
        "Es un Localizador Uniforme de Recursos que indica la dirección completa de un recurso en la web, como una página, imagen o archivo.",
      level: "basico",
      visualDiagram: {
        id: "diag-url-anatomy",
        title: "Anatomía Estándar de una URL",
        caption: "Esquema, host/dominio, puerto, ruta de acceso, parámetros query y fragmento.",
        diagramType: "url-anatomy"
      },
      codeExample: {
        language: "typescript",
        code: `// Manipulación moderna de URLs y query params con la API estándar
const url = new URL('https://api.cabuweb.com:443/v1/search?category=frontend#resumen');

console.log(url.protocol); // 'https:'
console.log(url.hostname); // 'api.cabuweb.com'
console.log(url.pathname); // '/v1/search'

// Modificar parámetros de búsqueda de forma reactiva
url.searchParams.set('level', 'experto');
url.searchParams.append('tag', 'react');
url.searchParams.append('tag', 'typescript');

console.log(url.toString());
// 'https://api.cabuweb.com/v1/search?category=frontend&level=experto&tag=react&tag=typescript#resumen'`,
        explanation: "El objeto URL nativo previene vulnerabilidades de inyección y escapa parámetros automáticamente."
      }
    },
    {
      title: "¿Qué es y para qué sirve el protocolo HTTP?",
      response:
        "Es un protocolo de comunicación que permite la transferencia de hipertexto entre un cliente (navegador) y un servidor.",
      level: "basico",
      visualDiagram: {
        id: "diag-http-request-response",
        title: "Ciclo Request-Response HTTP",
        caption: "Petición cliente con método/cabeceras y respuesta del servidor con código de estado y cuerpo.",
        diagramType: "http-request-response"
      },
      codeExample: {
        language: "typescript",
        code: `// Petición HTTP robusta con AbortController, headers y tipado
interface RequestOptions {
  token?: string;
  timeoutMs?: number;
}

async function fetchWithTimeout<T>(url: string, options: RequestOptions = {}): Promise<T> {
  const { token, timeoutMs = 5000 } = options;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        ...(token && { Authorization: \`Bearer \${token}\` })
      },
      signal: controller.signal
    });

    if (!response.ok) {
      throw new Error(\`HTTP \${response.status}: \${response.statusText}\`);
    }

    return (await response.json()) as T;
  } finally {
    clearTimeout(timer);
  }
}`,
        explanation: "Implementa el ciclo de petición y respuesta HTTP con control de timeouts y cabeceras de autorización."
      }
    },
    {
      title: "¿Qué es un Firewall?",
      response:
        "Es un sistema de seguridad que filtra el tráfico de red entrante y saliente según reglas definidas para proteger la red.",
      level: "basico",
      visualDiagram: {
        id: "diag-firewall-inspection",
        title: "Inspección de Tráfico en Firewall",
        caption: "Filtrado stateful de puertos, IPs y mitigación de tráfico no autorizado.",
        diagramType: "firewall-inspection"
      }
    },
    // === MEDIO ===
    {
      title: "¿Cuál es la diferencia entre URL relativa y absoluta?",
      response:
        "La URL absoluta incluye el dominio y esquema completo (https://ejemplo.com/archivo.png). La URL relativa solo indica la ruta relativa al recurso (/archivo.png).",
      level: "medio",
      visualDiagram: {
        id: "diag-url-relative-vs-absolute",
        title: "URL Absoluta vs Relativa",
        caption: "Resolución independiente con origen completo vs resolución relativa a la base.",
        diagramType: "url-relative-vs-absolute"
      },
      codeExample: {
        language: "typescript",
        code: `// Resolución dinámica de URLs relativas y absolutas con new URL(path, base)
const baseUrl = 'https://cabuweb.com/dashboard/settings/';

// 1. URL Absoluta (independiente del contexto base)
const absolute = new URL('https://cdn.cabuweb.com/logo.svg');
console.log(absolute.href); // 'https://cdn.cabuweb.com/logo.svg'

// 2. Relativa a la raíz del dominio (inicia con /)
const rootRelative = new URL('/api/auth', baseUrl);
console.log(rootRelative.href); // 'https://cabuweb.com/api/auth'

// 3. Relativa a la ruta actual (sin barra inicial)
const pathRelative = new URL('avatar.png', baseUrl);
console.log(pathRelative.href); // 'https://cabuweb.com/dashboard/settings/avatar.png'`,
        explanation: "Demuestra cómo el constructor new URL resuelve rutas relativas contra una base determinada."
      }
    },
    {
      title: "¿Qué es DNS y cómo funciona?",
      response:
        "El Sistema de Nombres de Dominio traduce nombres de dominio (como google.com) en direcciones IP para que los navegadores puedan localizar los servidores. Usa una jerarquía de servidores: raíz, TLD, autoritativo y resolver.",
      level: "medio",
      visualDiagram: {
        id: "diag-dns-resolution-tree",
        title: "Árbol de Resolución Recursiva DNS",
        caption: "Búsqueda jerárquica: Resolver ➔ Root (.) ➔ TLD (.com) ➔ Autoritativo.",
        diagramType: "dns-resolution-tree"
      },
      codeExample: {
        language: "typescript",
        code: `// Consulta programática a DNS mediante la API estándar de DNS-over-HTTPS (DoH)
async function lookupDomainIp(domain: string): Promise<string[]> {
  const dohEndpoint = \`https://cloudflare-dns.com/dns-query?name=\${encodeURIComponent(domain)}&type=A\`;

  const response = await fetch(dohEndpoint, {
    headers: { Accept: 'application/dns-json' }
  });

  const data = await response.json();
  
  // Extraer las direcciones IPv4 devueltas por el servidor autoritativo
  return data.Answer?.map((record: { data: string }) => record.data) || [];
}

// Ejemplo de uso:
// const ips = await lookupDomainIp('cabuweb.com'); // ['104.21.45.2', '172.67.180.1']`,
        explanation: "Permite resolver nombres de dominio a direcciones IP reales desde el navegador usando HTTPS."
      }
    },
    {
      title: "¿Qué diferencia hay entre HTTP y HTTPS?",
      response:
        "HTTPS cifra la comunicación entre cliente y servidor utilizando SSL/TLS, mientras que HTTP transmite datos en texto plano. HTTPS protege contra ataques man-in-the-middle.",
      level: "medio",
      visualDiagram: {
        id: "diag-http-vs-https",
        title: "HTTP en Claro vs HTTPS Cifrado",
        caption: "Túnel TLS protegiendo los datos contra intercepción Man-in-the-Middle.",
        diagramType: "http-vs-https"
      },
      codeExample: {
        language: "typescript",
        code: `// Middleware para forzar HTTPS y cabeceras HSTS (Next.js / Express)
export function forceHttps(req: Request): Response | null {
  const proto = req.headers.get('x-forwarded-proto') || 'http';
  const host = req.headers.get('host');

  // Si llega en HTTP sin cifrar, redirigir permanentemente (301) a HTTPS
  if (proto === 'http' && host && !host.includes('localhost')) {
    const secureUrl = \`https://\${host}\${new URL(req.url).pathname}\`;
    return new Response(null, {
      status: 301,
      headers: {
        Location: secureUrl,
        // HSTS obliga al navegador a usar HTTPS durante 1 año
        'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload'
      }
    });
  }
  return null;
}`,
        explanation: "Asegura que el tráfico no viaje en texto plano configurando la cabecera HSTS."
      }
    },
    {
      title: "¿Qué son los Códigos de Estado HTTP?",
      response:
        "Son códigos que indican el resultado de una petición: 1xx (informativos), 2xx (éxito), 3xx (redirección), 4xx (errores del cliente), 5xx (errores del servidor).",
      level: "medio",
      visualDiagram: {
        id: "diag-http-status-codes",
        title: "Familias de Códigos de Estado HTTP",
        caption: "1xx Informativo, 2xx Éxito, 3xx Redirección, 4xx Cliente, 5xx Servidor.",
        diagramType: "http-status-codes"
      },
      codeExample: {
        language: "typescript",
        code: `// Dispatcher de códigos de estado HTTP en un cliente API frontend
export async function handleApiResponse<T>(response: Response): Promise<T> {
  switch (response.status) {
    case 200:
    case 201:
      return await response.json();
    case 204:
      return null as T;
    case 401:
      // Token caducado: activar renovación de credenciales
      throw new Error('No autorizado: Token expirado o inválido');
    case 403:
      throw new Error('Prohibido: Permisos insuficientes para esta operación');
    case 404:
      throw new Error('Recurso no encontrado en el servidor');
    case 429:
      const retryAfter = response.headers.get('Retry-After') || '60';
      throw new Error(\`Límite de peticiones alcanzado. Reintentar en \${retryAfter}s\`);
    case 500:
    case 502:
    case 503:
      throw new Error('Error interno del servidor. Intente más tarde.');
    default:
      throw new Error(\`Error inesperado: \${response.status}\`);
  }
}`,
        explanation: "Estructura profesional para gestionar respuestas semánticas del protocolo HTTP en el cliente."
      }
    },
    {
      title: "¿Qué diferencia hay entre TCP y UDP?",
      response:
        "TCP asegura la entrega ordenada y confiable de datos (ej. páginas web), mientras que UDP prioriza velocidad sobre confiabilidad (ej. streaming, juegos online). TCP usa handshake de 3 vías.",
      level: "medio",
      visualDiagram: {
        id: "diag-tcp-vs-udp",
        title: "TCP (Confiable) vs UDP (Baja Latencia)",
        caption: "Handshake de 3 vías con retransmisión vs datagramas rápidos sin conexión.",
        diagramType: "tcp-vs-udp"
      },
      codeExample: {
        language: "typescript",
        code: `// Canal de datos sin orden ni retransmisión (UDP equivalente) con WebRTC
function createFastUdpChannel(pc: RTCPeerConnection) {
  // Configuración con latencia mínima, sin retransmisión de paquetes perdidos
  const channel = pc.createDataChannel('telemetry', {
    ordered: false,         // No bloquear streams esperando paquetes fuera de orden
    maxRetransmits: 0       // Desactivar retransmisiones (comportamiento puro UDP)
  });

  channel.onopen = () => {
    // Envío constante de coordenadas a 60 FPS sin sobrecarga TCP
    channel.send(JSON.stringify({ x: 140.2, y: 320.8, time: performance.now() }));
  };

  return channel;
}`,
        explanation: "Muestra cómo el navegador emula la semántica de UDP para aplicaciones en tiempo real mediante WebRTC."
      }
    },
    {
      title: "¿Qué es DHCP?",
      response:
        "Es el protocolo que asigna dinámicamente direcciones IP y otros parámetros de red a dispositivos conectados, evitando la configuración manual.",
      level: "medio",
      visualDiagram: {
        id: "diag-dhcp-dora",
        title: "Ciclo D.O.R.A de DHCP",
        caption: "Discover, Offer, Request y Acknowledge para concesión dinámica de IP.",
        diagramType: "dhcp-dora"
      }
    },
    {
      title: "¿Qué es CORS?",
      response:
        "Cross-Origin Resource Sharing es un mecanismo de seguridad que controla cómo los navegadores permiten solicitudes entre diferentes dominios. Se configura con headers como Access-Control-Allow-Origin.",
      level: "medio",
      visualDiagram: {
        id: "diag-cors-preflight",
        title: "Flujo Preflight OPTIONS de CORS",
        caption: "Validación de políticas de origen cruzado antes del envío de la petición real.",
        diagramType: "cors-preflight"
      },
      codeExample: {
        language: "typescript",
        code: `// Configuración segura de CORS en backend Node.js / Express
import cors from 'cors';
import express from 'express';

const app = express();
const allowedOrigins = ['https://cabuweb.com', 'https://admin.cabuweb.com'];

app.use(cors({
  origin: (origin, callback) => {
    // Permitir llamadas sin origin (Postman/Mobile) o en la lista blanca
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Bloqueado por política de CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  maxAge: 86400 // Cachear preflight durante 24 horas
}));`,
        explanation: "Configura la validación de orígenes cruzados y el almacenamiento en caché de peticiones preflight OPTIONS."
      }
    },
    {
      title: "¿Qué es un CDN?",
      response:
        "Un Content Delivery Network es una red de servidores distribuidos globalmente que entrega contenido al usuario desde el servidor más cercano para mejorar velocidad y disponibilidad.",
      level: "medio",
      visualDiagram: {
        id: "diag-cdn-edge-distribution",
        title: "Distribución de Contenidos Edge en CDN",
        caption: "Caché geodistribuida reduciendo la latencia y la carga en el servidor origen.",
        diagramType: "cdn-edge-distribution"
      },
      codeExample: {
        language: "typescript",
        code: `// Configuración de cabeceras de caché inmutable para assets en CDN
export const cdnCacheHeaders = {
  // 1 año de caché local y perimetral, inmutable (sin revalidación innecesaria)
  'Cache-Control': 'public, max-age=31536000, immutable',
  // Identificador de versión o hash criptográfico del archivo
  'ETag': '"33a64df551425fcc55e4d42a148795d9f25f89d4"',
  // Varía según soporte de compresión moderna del cliente (brotli/gzip)
  'Vary': 'Accept-Encoding'
};`,
        explanation: "Indica a los nodos Edge del CDN y al navegador que el archivo estático con hash nunca cambiará."
      }
    },
    {
      title: "¿Qué es SSL/TLS?",
      response:
        "Son protocolos de seguridad que cifran la comunicación entre cliente y servidor para garantizar confidencialidad e integridad de los datos. TLS es la evolución moderna de SSL.",
      level: "medio",
      visualDiagram: {
        id: "diag-ssl-tls-handshake",
        title: "Handshake Cifrado TLS 1.3",
        caption: "Negociación en 1-RTT con intercambio de claves efímeras ECDHE y certificados.",
        diagramType: "ssl-tls-handshake"
      }
    },
    {
      title: "¿Qué diferencia hay entre IPv4 e IPv6?",
      response:
        "IPv4 usa direcciones de 32 bits (limitadas a ~4.3 mil millones), mientras que IPv6 usa direcciones de 128 bits, ofreciendo un espacio mucho mayor y mejoras en seguridad y eficiencia.",
      level: "medio",
      visualDiagram: {
        id: "diag-ip-addressing-comparison",
        title: "Comparativa IPv4 vs IPv6",
        caption: "Espacio de 32 bits agotado frente a 128 bits casi infinitos con autoconfiguración.",
        diagramType: "ip-addressing"
      }
    },
    // === AVANZADO ===
    {
      title: "¿Qué es NAT y por qué es importante?",
      response:
        "Network Address Translation mapea múltiples dispositivos de una red privada a una única dirección IP pública. Fue crucial para paliar la escasez de IPv4 y añade una capa de seguridad al ocultar IPs internas.",
      level: "avanzado",
      visualDiagram: {
        id: "diag-router-nat",
        title: "Traducción de Direcciones de Red (NAT)",
        caption: "Mapeo de múltiples IPs privadas a una sola IP pública mediante puertos.",
        diagramType: "router-nat"
      }
    },
    {
      title: "¿Qué es WebSocket y en qué se diferencia de HTTP?",
      response:
        "WebSocket permite comunicación bidireccional en tiempo real sobre una conexión TCP persistente. A diferencia de HTTP (request-response), WebSocket mantiene la conexión abierta para enviar y recibir datos sin overhead de headers repetidos.",
      level: "avanzado",
      visualDiagram: {
        id: "diag-websocket-full-duplex",
        title: "Canal Full-Duplex de WebSockets",
        caption: "Upgrade HTTP 101 a conexión TCP persistente y bidireccional de baja sobrecarga.",
        diagramType: "websocket-full-duplex"
      },
      codeExample: {
        language: "typescript",
        code: `// Cliente WebSocket auto-reconnectable con backoff exponencial
export class ReconnectingWebSocket {
  private ws: WebSocket | null = null;
  private retryCount = 0;

  constructor(private url: string) {
    this.connect();
  }

  private connect(): void {
    this.ws = new WebSocket(this.url);

    this.ws.onopen = () => {
      console.log('✓ Canal WebSocket establecido');
      this.retryCount = 0;
    };

    this.ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log('Evento recibido:', data);
    };

    this.ws.onclose = () => {
      // Reintento con backoff: 1s, 2s, 4s, 8s hasta un máximo de 30s
      const delay = Math.min(1000 * Math.pow(2, this.retryCount), 30000);
      this.retryCount++;
      setTimeout(() => this.connect(), delay);
    };
  }

  public send(payload: unknown): void {
    if (this.ws?.readyState === WebSocket.OPEN) {
      this.ws.send(JSON.stringify(payload));
    }
  }
}`,
        explanation: "Patrón de producción esencial en entrevistas para mantener conexiones de tiempo real tolerantes a fallos."
      }
    },
    {
      title: "¿Qué es un Proxy y qué tipos existen?",
      response:
        "Un proxy es un intermediario entre cliente y servidor. Forward proxy actúa en nombre del cliente (caché, filtrado). Reverse proxy protege al servidor (balanceo, SSL termination). Transparent proxy intercepta sin configuración del cliente.",
      level: "avanzado",
      visualDiagram: {
        id: "diag-forward-vs-reverse-proxy",
        title: "Forward Proxy vs Reverse Proxy",
        caption: "Protección y caché para clientes frente a balanceo y seguridad para servidores.",
        diagramType: "forward-vs-reverse-proxy"
      },
      codeExample: {
        language: "typescript",
        code: `// Configuración de Reverse Proxy local en vite.config.ts para evitar CORS en desarrollo
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      // Redirige peticiones /api del frontend al backend sin disparar CORS
      '/api': {
        target: 'https://api.empresa.com',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\\/api/, '/v1')
      }
    }
  }
});`,
        explanation: "Permite al cliente frontend comunicarse localmente con /api mientras Vite actúa como Reverse Proxy."
      }
    },
    {
      title: "¿Qué es DNS over HTTPS (DoH) y por qué se utiliza?",
      response:
        "Es un mecanismo que cifra las consultas DNS mediante HTTPS para proteger la privacidad y evitar manipulaciones de resoluciones DNS por parte de ISPs o atacantes.",
      level: "avanzado",
      visualDiagram: {
        id: "diag-doh-dns-over-https",
        title: "Túnel DNS over HTTPS (DoH)",
        caption: "Cifrado de consultas en puerto 443 para impedir espionaje y manipulación de ISP.",
        diagramType: "doh-dns-over-https"
      }
    },
    {
      title: "¿Qué es Anycast y cómo mejora la disponibilidad?",
      response:
        "Es una técnica de enrutamiento donde una misma dirección IP está asignada a múltiples servidores en distintas ubicaciones. El tráfico se enruta al servidor más cercano, mejorando latencia y resistencia a fallos.",
      level: "avanzado",
      visualDiagram: {
        id: "diag-anycast-routing",
        title: "Enrutamiento Anycast Multirregión",
        caption: "Una misma IP anunciada globalmente y enrutada al PoP más cercano por BGP.",
        diagramType: "anycast-routing"
      }
    },
    {
      title: "¿Qué son los headers HTTP más importantes para seguridad?",
      response:
        "Content-Security-Policy (previene XSS), Strict-Transport-Security (fuerza HTTPS), X-Content-Type-Options (previene MIME sniffing), X-Frame-Options (previene clickjacking), y Referrer-Policy (controla información de referencia).",
      level: "avanzado",
      visualDiagram: {
        id: "diag-security-headers",
        title: "Matriz de Cabeceras HTTP de Seguridad",
        caption: "CSP contra XSS, HSTS para forzar HTTPS, y protección contra Clickjacking.",
        diagramType: "security-headers"
      },
      codeExample: {
        language: "typescript",
        code: `// Cabeceras HTTP de seguridad para producción en frontend (Next.js / Nginx)
export const enterpriseSecurityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: "default-src 'self'; script-src 'self' https://cdn.cabuweb.com; object-src 'none';"
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin'
  }
];`,
        explanation: "Blindaje de cabeceras recomendado por OWASP para prevenir XSS, Clickjacking y degradación de protocolo."
      }
    },
    {
      title: "¿Qué es HTTP/2 y qué mejoras ofrece sobre HTTP/1.1?",
      response:
        "HTTP/2 introduce multiplexing (múltiples solicitudes en una conexión), compresión de headers (HPACK), server push y priorización de streams, reduciendo latencia significativamente.",
      level: "avanzado",
      visualDiagram: {
        id: "diag-http1-vs-http2",
        title: "HTTP/1.1 vs Multiplexación HTTP/2",
        caption: "Eliminación del bloqueo de cabeza de línea mediante streams binarios paralelos.",
        diagramType: "http1-vs-http2"
      },
      codeExample: {
        language: "typescript",
        code: `// Cliente HTTP/2 con streams multiplexados en una sola conexión TCP (Node.js)
import http2 from 'node:http2';

// 1 única sesión TCP compartida
const client = http2.connect('https://cabuweb.com');

// Stream 1 (HTML)
const req1 = client.request({ ':path': '/' });
req1.on('data', (chunk) => console.log('HTML recibido'));

// Stream 2 concurrente sin bloqueo en cabeza de línea (CSS)
const req2 = client.request({ ':path': '/main.css' });
req2.on('data', (chunk) => console.log('CSS recibido'));`,
        explanation: "Demuestra cómo HTTP/2 canaliza múltiples peticiones paralelas sin abrir conexiones TCP adicionales."
      }
    },
    // === EXPERTO ===
    {
      title: "¿Qué es BGP y por qué es crítico para Internet?",
      response:
        "Border Gateway Protocol es el protocolo de enrutamiento que conecta sistemas autónomos (AS) en Internet. Determina las rutas óptimas entre redes de diferentes proveedores. Un error en BGP puede provocar caídas masivas de Internet.",
      level: "experto",
      visualDiagram: {
        id: "diag-bgp-routing",
        title: "Enrutamiento BGP entre Sistemas Autónomos",
        caption: "Propagación y selección de prefijos IP óptimos entre redes de proveedores mundiales.",
        diagramType: "bgp-routing"
      }
    },
    {
      title: "¿Qué es un ataque DDoS y qué estrategias de mitigación existen?",
      response:
        "Es un ataque que satura servidores enviando tráfico masivo desde múltiples fuentes. Mitigación: rate limiting, Anycast, WAF, scrubbing centers (Cloudflare, AWS Shield), BGP blackholing, y detección basada en ML.",
      level: "experto",
      visualDiagram: {
        id: "diag-ddos-mitigation",
        title: "Mitigación de Ataques DDoS",
        caption: "Filtrado en Scrubbing Centers con Anycast y WAF protegiendo al servidor origen.",
        diagramType: "ddos-mitigation"
      }
    },
    {
      title: "¿Qué es QUIC y en qué mejora a TCP?",
      response:
        "QUIC es un protocolo de Google basado en UDP que integra TLS 1.3. Ofrece 0-RTT connection establishment, multiplexing sin head-of-line blocking, migración de conexión entre redes, y es la base de HTTP/3.",
      level: "experto",
      visualDiagram: {
        id: "diag-quic-protocol-stack",
        title: "Arquitectura de la Pila QUIC",
        caption: "QUIC sobre UDP con TLS 1.3 integrado en user space y Connection IDs para migración.",
        diagramType: "quic-protocol-stack"
      }
    },
    {
      title: "¿Qué es HTTP/3 y por qué usa QUIC en lugar de TCP?",
      response:
        "HTTP/3 es la última versión del protocolo HTTP, construido sobre QUIC/UDP. Elimina el head-of-line blocking de TCP, ofrece conexiones más rápidas (0-RTT), y maneja mejor redes inestables como mobile.",
      level: "experto",
      visualDiagram: {
        id: "diag-http3-quic",
        title: "Pila de Protocolos HTTP/3",
        caption: "Independencia de streams que elimina el bloqueo de cabeza de línea a nivel transporte.",
        diagramType: "http3-quic"
      }
    },
    {
      title: "¿Qué es mTLS y cuándo se utiliza?",
      response:
        "Mutual TLS es una autenticación bidireccional donde tanto cliente como servidor presentan certificados. Se usa en comunicación entre microservicios, APIs financieras, y zero-trust architectures.",
      level: "experto",
      visualDiagram: {
        id: "diag-mtls-zero-trust",
        title: "Autenticación Mutua mTLS Zero-Trust",
        caption: "Intercambio y verificación bidireccional de certificados X.509 entre cliente y servidor.",
        diagramType: "mtls-zero-trust"
      },
      codeExample: {
        language: "typescript",
        code: `// Cliente con autenticación mutua mTLS (Certificado de Cliente + Verificación de Servidor)
import https from 'node:https';
import fs from 'node:fs';

const agent = new https.Agent({
  cert: fs.readFileSync('client-cert.pem'), // Certificado del cliente
  key: fs.readFileSync('client-key.pem'),   // Clave privada del cliente
  ca: fs.readFileSync('ca-bundle.pem'),     // Certificados CA autorizados
  rejectUnauthorized: true                  // Validar obligatoriamente el servidor
});

// Petición segura a endpoint de alta seguridad financiera o microservicio interno
https.get('https://api-finanzas.internal.net/v1/ledger', { agent }, (res) => {
  console.log(\`Autenticado con mTLS. Status: \${res.statusCode}\`);
});`,
        explanation: "En mTLS, el servidor exige un certificado al cliente antes de responder, garantizando una arquitectura Zero-Trust."
      }
    }
  ]
};

export default questionsInternet;
