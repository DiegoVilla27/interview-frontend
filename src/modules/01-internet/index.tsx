import { ISection } from "../../types";

export const questionsInternet: ISection = {
  title: "Internet",
  collapse: "collapseInternet",
  icon: "internet",
  questions: [
    {
      title: "¿Qué es Internet?",
      response:
        "Es una red global de computadoras interconectadas que se comunican mediante protocolos estandarizados como TCP/IP."
    },
    {
      title: "¿Qué es un Packet?",
      response:
        "Es la unidad básica de datos que se transmite en una red. Cada paquete contiene información de origen, destino y el contenido de los datos."
    },
    {
      title: "¿Qué es un Router?",
      response:
        "Es un dispositivo que conecta diferentes redes y se encarga de enrutar los paquetes hacia su destino."
    },
    {
      title: "¿Qué es una Dirección IP?",
      response:
        "Es un identificador único asignado a cada dispositivo en una red, usado para localizar y enviar datos correctamente."
    },
    {
      title: "¿Qué es un Nombre de Dominio?",
      response:
        "Es un nombre legible por humanos que identifica un sitio web, como google.com, y se traduce a una dirección IP mediante DNS."
    },
    {
      title: "¿Qué es una URL?",
      response:
        "Es un Localizador Uniforme de Recursos que indica la dirección completa de un recurso en la web, como una página, imagen o archivo."
    },
    {
      title: "¿Cuál es la diferencia entre URL relativa y absoluta?",
      response:
        "La URL absoluta incluye el dominio y esquema completo (https://ejemplo.com/archivo.png). La URL relativa solo indica la ruta relativa al recurso (/archivo.png)."
    },
    {
      title: "¿Qué es DNS y cómo funciona?",
      response:
        "El Sistema de Nombres de Dominio traduce nombres de dominio (como google.com) en direcciones IP para que los navegadores puedan localizar los servidores."
    },
    {
      title: "¿Qué es y para qué sirve el protocolo HTTP?",
      response:
        "Es un protocolo de comunicación que permite la transferencia de hipertexto entre un cliente (navegador) y un servidor."
    },
    {
      title: "¿Qué diferencia hay entre HTTP y HTTPS?",
      response:
        "HTTPS cifra la comunicación entre cliente y servidor utilizando SSL/TLS, mientras que HTTP transmite datos en texto plano."
    },
    {
      title: "¿Qué son los Códigos de Estado HTTP?",
      response:
        "Son códigos que indican el resultado de una petición: 1xx (informativos), 2xx (éxito), 3xx (redirección), 4xx (errores del cliente), 5xx (errores del servidor)."
    },
    {
      title: "¿Qué diferencia hay entre TCP y UDP?",
      response:
        "TCP asegura la entrega ordenada y confiable de datos (ej. páginas web), mientras que UDP prioriza velocidad sobre confiabilidad (ej. streaming, juegos online)."
    },
    {
      title: "¿Qué es DHCP?",
      response:
        "Es el protocolo que asigna dinámicamente direcciones IP y otros parámetros de red a dispositivos conectados."
    },
    {
      title: "¿Qué es CORS?",
      response:
        "Cross-Origin Resource Sharing es un mecanismo de seguridad que controla cómo los navegadores permiten solicitudes entre diferentes dominios."
    },
    {
      title: "¿Qué es un CDN?",
      response:
        "Un Content Delivery Network es una red de servidores distribuidos globalmente que entrega contenido al usuario desde el servidor más cercano para mejorar velocidad y disponibilidad."
    },
    {
      title: "¿Qué es NAT?",
      response:
        "Network Address Translation es un método para mapear múltiples dispositivos de una red privada a una única dirección IP pública."
    },
    {
      title: "¿Qué es WebSocket?",
      response:
        "Es un protocolo que permite comunicación bidireccional en tiempo real entre cliente y servidor sobre una conexión TCP persistente."
    },
    {
      title: "¿Qué es SSL/TLS?",
      response:
        "Son protocolos de seguridad que cifran la comunicación entre cliente y servidor para garantizar confidencialidad e integridad de los datos."
    },
    {
      title: "¿Qué es un Proxy y qué tipos existen?",
      response:
        "Un proxy es un intermediario entre cliente y servidor. Puede ser directo (caché), inverso (protección y balanceo) o anónimo (ocultar IP del cliente)."
    },
    {
      title: "¿Qué es un Firewall?",
      response:
        "Es un sistema de seguridad que filtra el tráfico de red entrante y saliente según reglas definidas para proteger la red."
    },
    {
      title: "¿Qué es BGP y por qué es importante en Internet?",
      response:
        "El Border Gateway Protocol es el protocolo de enrutamiento que conecta diferentes sistemas autónomos en Internet, permitiendo que los datos viajen entre proveedores y redes."
    },
    {
      title: "¿Qué es DNS over HTTPS (DoH) y por qué se utiliza?",
      response:
        "Es un mecanismo que cifra las consultas DNS mediante HTTPS para proteger la privacidad y evitar manipulaciones de resoluciones DNS."
    },
    {
      title: "¿Qué es Anycast?",
      response:
        "Es una técnica de enrutamiento donde una misma dirección IP está asignada a múltiples servidores en distintas ubicaciones. El tráfico se enruta al servidor más cercano."
    },
    {
      title: "¿Qué diferencia hay entre IPv4 e IPv6?",
      response:
        "IPv4 usa direcciones de 32 bits (limitadas a ~4.3 mil millones), mientras que IPv6 usa direcciones de 128 bits, ofreciendo un espacio mucho mayor y mejoras en seguridad y eficiencia."
    },
    {
      title: "¿Qué es un ataque DDoS a nivel de red?",
      response:
        "Es un ataque de denegación de servicio distribuido que satura servidores o redes enviando un gran volumen de tráfico desde múltiples fuentes."
    },
    {
      title: "¿Qué es QUIC y en qué mejora a TCP?",
      response:
        "QUIC es un protocolo desarrollado por Google basado en UDP que ofrece conexiones más rápidas, seguras y resistentes a pérdidas de paquetes en comparación con TCP."
    }
  ]
};

export default questionsInternet;
