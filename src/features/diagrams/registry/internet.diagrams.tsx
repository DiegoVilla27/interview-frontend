import { DiagramRegistry } from "../diagram.types";

/** Diagramas SVG del módulo Internet. */
export const internetDiagrams: DiagramRegistry = {
  "client-server-network": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* Client Browser */}
      <rect x="30" y="35" width="160" height="150" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="45" y="60" fill="#3b82f6" fontWeight="700" fontSize="12">Cliente (Navegador)</text>
      <rect x="45" y="75" width="130" height="30" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="55" y="95" fill={textColor} fontSize="10" fontFamily="monospace">URL: cabuweb.com</text>
      <rect x="45" y="115" width="130" height="55" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="55" y="133" fill={subtextColor} fontSize="9">Petición HTTP/HTTPS</text>
      <text x="55" y="148" fill={textColor} fontSize="9">TCP Handshake (SYN)</text>
      <text x="55" y="162" fill="#3b82f6" fontSize="9" fontWeight="bold">Headers & Payload</text>

      {/* DNS Server */}
      <rect x="235" y="35" width="170" height="150" rx="8" fill={isDark ? "#1e1b4b" : "#ede9fe"} stroke="#8b5cf6" strokeWidth="1.5" />
      <text x="250" y="60" fill="#8b5cf6" fontWeight="700" fontSize="12">Servidor DNS (Nameserver)</text>
      <rect x="250" y="75" width="140" height="30" rx="4" fill={isDark ? "#312e81" : "#ddd6fe"} />
      <text x="260" y="95" fill="#a5b4fc" fontSize="10" fontFamily="monospace">Lookup: Dominio ➔ IP</text>
      <rect x="250" y="115" width="140" height="55" rx="4" fill={isDark ? "#312e81" : "#ddd6fe"} />
      <text x="260" y="135" fill={textColor} fontSize="9">A Record: 192.0.2.1</text>
      <text x="260" y="152" fill={subtextColor} fontSize="9">Caché DNS local / ISP</text>

      {/* Arrows Client <-> DNS */}
      <path d="M195 90 L230 90" stroke="#8b5cf6" strokeWidth="1.5" strokeDasharray="3 3" />

      {/* Web Server */}
      <rect x="450" y="35" width="160" height="150" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="465" y="60" fill="#10b981" fontWeight="700" fontSize="12">Servidor Web / CDN</text>
      <rect x="465" y="75" width="130" height="30" rx="4" fill={isDark ? "#022c22" : "#d1fae5"} />
      <text x="475" y="95" fill="#10b981" fontSize="10" fontFamily="monospace">200 OK / SSL TLS</text>
      <rect x="465" y="115" width="130" height="55" rx="4" fill={isDark ? "#022c22" : "#d1fae5"} />
      <text x="475" y="133" fill="#6ee7b7" fontSize="9">HTML / CSS / JS</text>
      <text x="475" y="148" fill={subtextColor} fontSize="9">Response Stream</text>
      <text x="475" y="162" fill="#10b981" fontSize="9" fontWeight="bold">Paquetes de Datos</text>

      {/* Arrows DNS -> Server */}
      <path d="M410 90 L445 90" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3 3" />
    </svg>
  );
  },

  "dns-resolution-tree": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* 1. Browser */}
      <rect x="25" y="45" width="105" height="135" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="35" y="70" fill="#3b82f6" fontWeight="700" fontSize="11">1. Navegador</text>
      <text x="35" y="90" fill={subtextColor} fontSize="9">¿IP de dominio?</text>
      <rect x="33" y="105" width="89" height="25" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="38" y="121" fill={textColor} fontSize="8" fontFamily="monospace">cabuweb.com</text>

      {/* 2. Recursive Resolver */}
      <rect x="150" y="45" width="130" height="135" rx="8" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="160" y="70" fill="#818cf8" fontWeight="700" fontSize="11">2. Resolver DNS</text>
      <text x="160" y="88" fill={subtextColor} fontSize="9">ISP / 1.1.1.1 / 8.8.8.8</text>
      <rect x="160" y="102" width="110" height="65" rx="4" fill={isDark ? "#1e1b4b" : "#ddd6fe"} />
      <text x="168" y="120" fill="#c7d2fe" fontSize="8" fontWeight="bold">Caché Resolver</text>
      <text x="168" y="135" fill={textColor} fontSize="8">Consulta jerárquica</text>
      <text x="168" y="150" fill="#a5b4fc" fontSize="8">Retorna IP final</text>

      {/* 3. Hierarchy Servers Stack */}
      <rect x="305" y="30" width="170" height="50" rx="6" fill={isDark ? "#1f1d2b" : "#fdf4ff"} stroke="#c084fc" strokeWidth="1" />
      <text x="315" y="50" fill="#c084fc" fontWeight="700" fontSize="10">3. Root Server (.)</text>
      <text x="315" y="65" fill={subtextColor} fontSize="8">Apunta a servidores TLD</text>

      <rect x="305" y="87" width="170" height="50" rx="6" fill={isDark ? "#1e1b4b" : "#f3e8ff"} stroke="#a855f7" strokeWidth="1" />
      <text x="315" y="107" fill="#a855f7" fontWeight="700" fontSize="10">4. TLD Server (.com)</text>
      <text x="315" y="122" fill={subtextColor} fontSize="8">Apunta a nombres autoritativos</text>

      <rect x="305" y="144" width="170" height="55" rx="6" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="315" y="164" fill="#10b981" fontWeight="700" fontSize="10">5. Autoritativo (NS)</text>
      <text x="315" y="179" fill={textColor} fontSize="8" fontFamily="monospace">A: 198.51.100.42</text>
      <text x="315" y="191" fill="#6ee7b7" fontSize="8">Respuesta definitiva</text>

      {/* 4. Resolved IP Result */}
      <rect x="500" y="45" width="125" height="135" rx="8" fill={isDark ? "#022c22" : "#d1fae5"} stroke="#34d399" strokeWidth="1.5" />
      <text x="510" y="70" fill="#34d399" fontWeight="700" fontSize="11">6. IP Retornada</text>
      <rect x="510" y="85" width="105" height="40" rx="4" fill={isDark ? "#064e3b" : "#a7f3d0"} />
      <text x="515" y="102" fill="#ffffff" fontSize="9" fontWeight="bold" fontFamily="monospace">198.51.100.42</text>
      <text x="515" y="116" fill="#a7f3d0" fontSize="8">Conexión TCP lista</text>
      <text x="510" y="145" fill={subtextColor} fontSize="8">TTL: 3600 segundos</text>
      <text x="510" y="160" fill={textColor} fontSize="8">Caché en navegador</text>

      <path d="M130 110 L148 110" stroke="#6366f1" strokeWidth="1.5" />
      <path d="M280 60 L303 60" stroke="#c084fc" strokeWidth="1" strokeDasharray="2 2" />
      <path d="M280 112 L303 112" stroke="#a855f7" strokeWidth="1" strokeDasharray="2 2" />
      <path d="M280 165 L303 165" stroke="#10b981" strokeWidth="1" strokeDasharray="2 2" />
      <path d="M475 165 L498 110" stroke="#34d399" strokeWidth="1.5" />
    </svg>
  );
  },

  "packet-anatomy": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="30" y="38" fill="#60a5fa" fontWeight="700" fontSize="12">Estructura de un Paquete de Red (TCP/IP)</text>
      
      {/* IP Header */}
      <rect x="30" y="55" width="170" height="135" rx="8" fill={isDark ? "#1e293b" : "#e0f2fe"} stroke="#0284c7" strokeWidth="1.5" />
      <text x="40" y="77" fill="#0284c7" fontWeight="700" fontSize="11">Cabecera IP (20 Bytes)</text>
      <rect x="40" y="88" width="150" height="22" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="48" y="103" fill={textColor} fontSize="8" fontFamily="monospace">Src: 192.168.1.10</text>
      <rect x="40" y="115" width="150" height="22" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="48" y="130" fill={textColor} fontSize="8" fontFamily="monospace">Dst: 142.250.190.46</text>
      <text x="42" y="155" fill={subtextColor} fontSize="8">TTL: 64 • Protocolo: 6 (TCP)</text>
      <text x="42" y="172" fill="#38bdf8" fontSize="8">Enrutamiento en Capa 3</text>

      {/* TCP Header */}
      <rect x="210" y="55" width="170" height="135" rx="8" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="220" y="77" fill="#818cf8" fontWeight="700" fontSize="11">Cabecera TCP (20 Bytes)</text>
      <rect x="220" y="88" width="150" height="22" rx="4" fill={isDark ? "#1e1b4b" : "#ffffff"} />
      <text x="228" y="103" fill={textColor} fontSize="8" fontFamily="monospace">Port: 54321 ➔ 443</text>
      <rect x="220" y="115" width="150" height="22" rx="4" fill={isDark ? "#1e1b4b" : "#ffffff"} />
      <text x="228" y="130" fill={textColor} fontSize="8" fontFamily="monospace">Seq: 1042 • Ack: 890</text>
      <text x="222" y="155" fill={subtextColor} fontSize="8">Flags: SYN, ACK, PSH, FIN</text>
      <text x="222" y="172" fill="#a5b4fc" fontSize="8">Control de flujo Capa 4</text>

      {/* Payload (Data) */}
      <rect x="390" y="55" width="140" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="400" y="77" fill="#10b981" fontWeight="700" fontSize="11">Payload / Datos</text>
      <rect x="400" y="88" width="120" height="50" rx="4" fill={isDark ? "#022c22" : "#ffffff"} />
      <text x="408" y="107" fill="#6ee7b7" fontSize="8" fontFamily="monospace">GET /api/v1...</text>
      <text x="408" y="122" fill={textColor} fontSize="8" fontFamily="monospace">HTTP Body JSON</text>
      <text x="402" y="155" fill={subtextColor} fontSize="8">Datos de la App Web</text>
      <text x="402" y="172" fill="#34d399" fontSize="8">Hasta MTU (1500B)</text>

      {/* Trailer (CRC) */}
      <rect x="540" y="55" width="80" height="135" rx="8" fill={isDark ? "#713f12" : "#fef08a"} stroke="#eab308" strokeWidth="1.5" />
      <text x="546" y="77" fill="#ca8a04" fontWeight="700" fontSize="10">Trailer</text>
      <rect x="546" y="88" width="68" height="30" rx="4" fill={isDark ? "#422006" : "#ffffff"} />
      <text x="550" y="107" fill="#facc15" fontSize="8" fontFamily="monospace">CRC32</text>
      <text x="546" y="140" fill={subtextColor} fontSize="8">Checksum</text>
      <text x="546" y="158" fill={textColor} fontSize="8">Detecta</text>
      <text x="546" y="172" fill="#ca8a04" fontSize="8">errores</text>
    </svg>
  );
  },

  "http-vs-https": ({ isDark, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* HTTP Column */}
      <rect x="25" y="35" width="285" height="155" rx="8" fill={isDark ? "#450a0a" : "#fef2f2"} stroke="#ef4444" strokeWidth="1.5" />
      <text x="40" y="60" fill="#ef4444" fontWeight="700" fontSize="12">HTTP (Puerto 80) — Inseguro</text>
      <text x="40" y="78" fill={subtextColor} fontSize="9">Texto plano transmitido sin cifrado</text>
      <rect x="40" y="90" width="255" height="50" rx="6" fill={isDark ? "#1c1917" : "#ffffff"} stroke="#dc2626" strokeWidth="1" />
      <text x="50" y="110" fill="#f87171" fontSize="9" fontFamily="monospace">GET /login?user=diego&amp;pass=12345</text>
      <text x="50" y="126" fill="#fca5a5" fontSize="8">⚠️ Vulnerable a Sniffing y Man-in-the-Middle (MITM)</text>
      <text x="40" y="165" fill="#ef4444" fontSize="9" fontWeight="bold">Sin autenticidad de servidor • Sin integridad</text>

      {/* HTTPS Column */}
      <rect x="330" y="35" width="285" height="155" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="345" y="60" fill="#10b981" fontWeight="700" fontSize="12">HTTPS (Puerto 443) — TLS 1.3 Seguro</text>
      <text x="345" y="78" fill={subtextColor} fontSize="9">Túnel criptográfico de clave asimétrica + simétrica</text>
      <rect x="345" y="90" width="255" height="50" rx="6" fill={isDark ? "#022c22" : "#ffffff"} stroke="#059669" strokeWidth="1" />
      <text x="355" y="110" fill="#6ee7b7" fontSize="9" fontFamily="monospace">🔒 7f3b89a1c8e0... [Cifrado AES-256-GCM]</text>
      <text x="355" y="126" fill="#a7f3d0" fontSize="8">✓ Certificado emitido por Autoridad Certificadora (CA)</text>
      <text x="345" y="165" fill="#10b981" fontSize="9" fontWeight="bold">Confidencialidad • Integridad de datos • Autenticación</text>
    </svg>
  );
  },

  "router-nat": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* LAN Devices */}
      <rect x="25" y="35" width="160" height="150" rx="8" fill={isDark ? "#18181b" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="35" y="58" fill="#3b82f6" fontWeight="700" fontSize="11">Red Local (LAN Privada)</text>
      <rect x="35" y="72" width="140" height="30" rx="4" fill={isDark ? "#27272a" : "#ffffff"} />
      <text x="42" y="88" fill={textColor} fontSize="8" fontFamily="monospace">PC: 192.168.1.15:5200</text>
      <rect x="35" y="110" width="140" height="30" rx="4" fill={isDark ? "#27272a" : "#ffffff"} />
      <text x="42" y="126" fill={textColor} fontSize="8" fontFamily="monospace">Móvil: 192.168.1.20:5300</text>
      <text x="35" y="162" fill={subtextColor} fontSize="8">IPs privadas RFC 1918</text>

      {/* NAT Router */}
      <rect x="230" y="35" width="180" height="150" rx="8" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#6366f1" strokeWidth="2" />
      <text x="245" y="58" fill="#818cf8" fontWeight="700" fontSize="12">Router Gateway + NAT</text>
      <rect x="240" y="72" width="160" height="65" rx="4" fill={isDark ? "#1e1b4b" : "#ffffff"} />
      <text x="246" y="88" fill="#a5b4fc" fontSize="8" fontWeight="bold">Tabla de Traducción NAT:</text>
      <text x="246" y="103" fill={textColor} fontSize="8" fontFamily="monospace">192.168.1.15:5200 ➔ :40001</text>
      <text x="246" y="118" fill={textColor} fontSize="8" fontFamily="monospace">192.168.1.20:5300 ➔ :40002</text>
      <text x="245" y="155" fill="#818cf8" fontSize="8" fontWeight="bold">IP Pública: 203.0.113.4</text>
      <text x="245" y="170" fill={subtextColor} fontSize="8">Mapea N privadas a 1 pública</text>

      {/* WAN Server */}
      <rect x="455" y="35" width="160" height="150" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="468" y="58" fill="#10b981" fontWeight="700" fontSize="11">Internet / WAN Destino</text>
      <rect x="468" y="72" width="134" height="40" rx="4" fill={isDark ? "#022c22" : "#ffffff"} />
      <text x="475" y="90" fill="#6ee7b7" fontSize="8" fontFamily="monospace">Servidor: 198.51.100.1</text>
      <text x="475" y="104" fill={textColor} fontSize="8" fontFamily="monospace">Puerto 443 (HTTPS)</text>
      <text x="468" y="135" fill={subtextColor} fontSize="8">Solo ve la IP Pública</text>
      <text x="468" y="150" fill="#34d399" fontSize="8">Protege IPs privadas</text>

      <path d="M187 100 L228 100" stroke="#6366f1" strokeWidth="1.5" />
      <path d="M412 100 L453 100" stroke="#10b981" strokeWidth="1.5" />
    </svg>
  );
  },

  "tcp-vs-udp": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* TCP */}
      <rect x="25" y="35" width="285" height="155" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="40" y="60" fill="#3b82f6" fontWeight="700" fontSize="12">TCP (Transmisión Confiable)</text>
      <text x="40" y="78" fill={subtextColor} fontSize="9">3-Way Handshake + Control de Flujo</text>
      <rect x="40" y="88" width="255" height="55" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="48" y="104" fill="#60a5fa" fontSize="8" fontFamily="monospace">1. SYN ➔ (Cliente inicia)</text>
      <text x="48" y="118" fill="#818cf8" fontSize="8" fontFamily="monospace">2. SYN-ACK ⬅ (Servidor responde)</text>
      <text x="48" y="132" fill="#34d399" fontSize="8" fontFamily="monospace">3. ACK ➔ (Conexión establecida)</text>
      <text x="40" y="160" fill={textColor} fontSize="8">✓ Reordenamiento y retransmisión de paquetes</text>
      <text x="40" y="174" fill="#3b82f6" fontSize="8" fontWeight="bold">Uso: HTTP/1.1, HTTP/2, WebSockets, SSH, Email</text>

      {/* UDP */}
      <rect x="330" y="35" width="285" height="155" rx="8" fill={isDark ? "#451a03" : "#fffbeb"} stroke="#f59e0b" strokeWidth="1.5" />
      <text x="345" y="60" fill="#f59e0b" fontWeight="700" fontSize="12">UDP (Velocidad & Baja Latencia)</text>
      <text x="345" y="78" fill={subtextColor} fontSize="9">Sin Handshake (Datagramas sin conexión)</text>
      <rect x="345" y="88" width="255" height="55" rx="4" fill={isDark ? "#292524" : "#ffffff"} />
      <text x="353" y="104" fill="#fbbf24" fontSize="8" fontFamily="monospace">Datagrama 1 ➔ [Envío inmediato]</text>
      <text x="353" y="118" fill="#fbbf24" fontSize="8" fontFamily="monospace">Datagrama 2 ➔ [Sin esperar ACKs]</text>
      <text x="353" y="132" fill="#f87171" fontSize="8" fontFamily="monospace">Pérdidas toleradas (no retransmite)</text>
      <text x="345" y="160" fill={textColor} fontSize="8">⚡ 0 sobrecarga de establecimiento de conexión</text>
      <text x="345" y="174" fill="#f59e0b" fontSize="8" fontWeight="bold">Uso: DNS, WebRTC, Streaming en vivo, HTTP/3 (QUIC)</text>
    </svg>
  );
  },

  "cors-preflight": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* Step 1: Preflight Request */}
      <rect x="25" y="35" width="180" height="150" rx="8" fill={isDark ? "#1e1b4b" : "#ede9fe"} stroke="#8b5cf6" strokeWidth="1.5" />
      <text x="35" y="58" fill="#a78bfa" fontWeight="700" fontSize="11">1. Preflight OPTIONS</text>
      <text x="35" y="75" fill={subtextColor} fontSize="8">Browser pregunta al servidor:</text>
      <rect x="35" y="85" width="160" height="50" rx="4" fill={isDark ? "#312e81" : "#ffffff"} />
      <text x="40" y="100" fill="#c4b5fd" fontSize="8" fontFamily="monospace">OPTIONS /api/users</text>
      <text x="40" y="114" fill={textColor} fontSize="8" fontFamily="monospace">Origin: app.ejemplo.com</text>
      <text x="40" y="128" fill="#a5b4fc" fontSize="8" fontFamily="monospace">Access-Control-Method: POST</text>
      <text x="35" y="155" fill={subtextColor} fontSize="8">Petición automática de</text>
      <text x="35" y="168" fill="#8b5cf6" fontSize="8" fontWeight="bold">seguridad del navegador</text>

      {/* Step 2: Preflight Response */}
      <rect x="230" y="35" width="180" height="150" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="240" y="58" fill="#34d399" fontWeight="700" fontSize="11">2. Respuesta 204 No Content</text>
      <text x="240" y="75" fill={subtextColor} fontSize="8">Servidor autoriza con headers:</text>
      <rect x="240" y="85" width="160" height="50" rx="4" fill={isDark ? "#022c22" : "#ffffff"} />
      <text x="246" y="100" fill="#6ee7b7" fontSize="8" fontFamily="monospace">Access-Control-Allow-Origin:</text>
      <text x="246" y="114" fill="#a7f3d0" fontSize="8" fontFamily="monospace">https://app.ejemplo.com</text>
      <text x="246" y="128" fill="#34d399" fontSize="8" fontFamily="monospace">Max-Age: 86400 (Caché)</text>
      <text x="240" y="155" fill={subtextColor} fontSize="8">Si el Origin no coincide,</text>
      <text x="240" y="168" fill="#f87171" fontSize="8" fontWeight="bold">el navegador bloquea</text>

      {/* Step 3: Actual Request */}
      <rect x="435" y="35" width="180" height="150" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="445" y="58" fill="#60a5fa" fontWeight="700" fontSize="11">3. Petición Real Ejecutada</text>
      <text x="445" y="75" fill={subtextColor} fontSize="8">Browser procede al envío:</text>
      <rect x="445" y="85" width="160" height="50" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="452" y="100" fill="#38bdf8" fontSize="8" fontFamily="monospace">POST /api/users HTTP/1.1</text>
      <text x="452" y="114" fill={textColor} fontSize="8" fontFamily="monospace">Authorization: Bearer...</text>
      <text x="452" y="128" fill="#34d399" fontSize="8" fontFamily="monospace">200 OK Response Data</text>
      <text x="445" y="155" fill={subtextColor} fontSize="8">Datos recibidos por el</text>
      <text x="445" y="168" fill="#3b82f6" fontSize="8" fontWeight="bold">cliente frontend</text>

      <path d="M207 110 L228 110" stroke="#10b981" strokeWidth="1.5" />
      <path d="M412 110 L433 110" stroke="#3b82f6" strokeWidth="1.5" />
    </svg>
  );
  },

  "websocket-full-duplex": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* Handshake Phase */}
      <rect x="25" y="35" width="280" height="155" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#8b5cf6" strokeWidth="1.5" />
      <text x="35" y="58" fill="#8b5cf6" fontWeight="700" fontSize="11">Fase 1: Handshake HTTP 101</text>
      <text x="35" y="75" fill={subtextColor} fontSize="8">Actualización de protocolo (Upgrade):</text>
      <rect x="35" y="85" width="260" height="60" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="42" y="102" fill="#c4b5fd" fontSize="8" fontFamily="monospace">GET /chat HTTP/1.1</text>
      <text x="42" y="116" fill={textColor} fontSize="8" fontFamily="monospace">Upgrade: websocket • Connection: Upgrade</text>
      <text x="42" y="130" fill="#a7f3d0" fontSize="8" fontFamily="monospace">HTTP/1.1 101 Switching Protocols</text>
      <text x="35" y="162" fill={subtextColor} fontSize="8">Reutiliza el puerto 80/443 sin cortafuegos bloqueantes</text>

      {/* Full-Duplex Stream Phase */}
      <rect x="330" y="35" width="285" height="155" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="345" y="58" fill="#10b981" fontWeight="700" fontSize="11">Fase 2: Canal Bidireccional Full-Duplex</text>
      <text x="345" y="75" fill={subtextColor} fontSize="8">Conexión TCP persistente en tiempo real:</text>
      <rect x="345" y="85" width="255" height="60" rx="4" fill={isDark ? "#022c22" : "#ffffff"} />
      <text x="355" y="104" fill="#34d399" fontSize="9" fontFamily="monospace">Cliente ➔ Servidor: Mensaje instantáneo</text>
      <text x="355" y="124" fill="#6ee7b7" fontSize="9" fontFamily="monospace">Cliente ⬅ Servidor: Eventos Push en vivo</text>
      <text x="345" y="160" fill={textColor} fontSize="8">⚡ 2 a 10 bytes de sobrecarga por frame (vs 1KB de HTTP)</text>
      <text x="345" y="174" fill="#10b981" fontSize="8" fontWeight="bold">Ideal para: chats, trading, juegos multijugador, dashboards</text>
    </svg>
  );
  },

  "url-anatomy": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="30" y="38" fill="#818cf8" fontWeight="700" fontSize="12">Anatomía Estándar de un URI / URL</text>
      
      {/* Complete URL Bar */}
      <rect x="30" y="55" width="580" height="38" rx="6" fill={isDark ? "#0f172a" : "#f1f5f9"} stroke="#4f46e5" strokeWidth="1.5" />
      <text x="40" y="78" fontSize="11" fontFamily="monospace">
        <tspan fill="#38bdf8">https://</tspan>
        <tspan fill="#818cf8">api.</tspan>
        <tspan fill="#a855f7">cabuweb.com</tspan>
        <tspan fill="#fbbf24">:443</tspan>
        <tspan fill="#34d399">/v1/interview/frontend</tspan>
        <tspan fill="#f43f5e">?sort=asc&amp;lang=es</tspan>
        <tspan fill="#a78bfa">#resumen</tspan>
      </text>

      {/* Breakdown Cards */}
      <rect x="30" y="110" width="85" height="75" rx="6" fill={isDark ? "#082f49" : "#e0f2fe"} stroke="#0284c7" strokeWidth="1" />
      <text x="38" y="130" fill="#38bdf8" fontWeight="bold" fontSize="10">Esquema</text>
      <text x="38" y="148" fill={textColor} fontSize="9" fontFamily="monospace">https://</text>
      <text x="38" y="166" fill={subtextColor} fontSize="8">Protocolo</text>

      <rect x="125" y="110" width="115" height="75" rx="6" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#6366f1" strokeWidth="1" />
      <text x="133" y="130" fill="#818cf8" fontWeight="bold" fontSize="10">Host (Dominio)</text>
      <text x="133" y="148" fill={textColor} fontSize="9" fontFamily="monospace">cabuweb.com</text>
      <text x="133" y="166" fill={subtextColor} fontSize="8">FQDN / Server</text>

      <rect x="250" y="110" width="60" height="75" rx="6" fill={isDark ? "#451a03" : "#fef3c7"} stroke="#d97706" strokeWidth="1" />
      <text x="256" y="130" fill="#fbbf24" fontWeight="bold" fontSize="10">Puerto</text>
      <text x="256" y="148" fill={textColor} fontSize="9" fontFamily="monospace">:443</text>
      <text x="256" y="166" fill={subtextColor} fontSize="8">TCP Port</text>

      <rect x="320" y="110" width="135" height="75" rx="6" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1" />
      <text x="328" y="130" fill="#34d399" fontWeight="bold" fontSize="10">Ruta (Path)</text>
      <text x="328" y="148" fill={textColor} fontSize="9" fontFamily="monospace">/v1/interview</text>
      <text x="328" y="166" fill={subtextColor} fontSize="8">Recurso en server</text>

      <rect x="465" y="110" width="145" height="75" rx="6" fill={isDark ? "#4c0519" : "#ffe4e6"} stroke="#f43f5e" strokeWidth="1" />
      <text x="473" y="130" fill="#f43f5e" fontWeight="bold" fontSize="10">Query &amp; Hash</text>
      <text x="473" y="148" fill={textColor} fontSize="8" fontFamily="monospace">?sort=asc #resumen</text>
      <text x="473" y="166" fill={subtextColor} fontSize="8">Parámetros &amp; Anchor</text>
    </svg>
  );
  },

  "http-status-codes": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="30" y="36" fill="#f3f4f6" fontWeight="700" fontSize="12">Familias de Códigos de Estado HTTP</text>
      
      {/* 1xx */}
      <rect x="25" y="50" width="110" height="140" rx="6" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#0ea5e9" strokeWidth="1.5" />
      <text x="35" y="72" fill="#0ea5e9" fontWeight="700" fontSize="11">1xx Info</text>
      <text x="35" y="90" fill={subtextColor} fontSize="8">Informativos</text>
      <rect x="33" y="100" width="94" height="20" rx="3" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="38" y="114" fill={textColor} fontSize="8" fontFamily="monospace">101 Switch</text>
      <rect x="33" y="125" width="94" height="20" rx="3" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="38" y="139" fill={textColor} fontSize="8" fontFamily="monospace">103 Hints</text>

      {/* 2xx */}
      <rect x="145" y="50" width="110" height="140" rx="6" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="155" y="72" fill="#10b981" fontWeight="700" fontSize="11">2xx Éxito</text>
      <text x="155" y="90" fill={subtextColor} fontSize="8">Solicitud exitosa</text>
      <rect x="153" y="100" width="94" height="20" rx="3" fill={isDark ? "#022c22" : "#ffffff"} />
      <text x="158" y="114" fill="#34d399" fontSize="8" fontFamily="monospace">200 OK</text>
      <rect x="153" y="125" width="94" height="20" rx="3" fill={isDark ? "#022c22" : "#ffffff"} />
      <text x="158" y="139" fill="#34d399" fontSize="8" fontFamily="monospace">201 Created</text>
      <rect x="153" y="150" width="94" height="20" rx="3" fill={isDark ? "#022c22" : "#ffffff"} />
      <text x="158" y="164" fill="#34d399" fontSize="8" fontFamily="monospace">204 No Content</text>

      {/* 3xx */}
      <rect x="265" y="50" width="110" height="140" rx="6" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#8b5cf6" strokeWidth="1.5" />
      <text x="275" y="72" fill="#8b5cf6" fontWeight="700" fontSize="11">3xx Redir</text>
      <text x="275" y="90" fill={subtextColor} fontSize="8">Redirecciones</text>
      <rect x="273" y="100" width="94" height="20" rx="3" fill={isDark ? "#1e1b4b" : "#ffffff"} />
      <text x="278" y="114" fill="#a78bfa" fontSize="8" fontFamily="monospace">301 Moved</text>
      <rect x="273" y="125" width="94" height="20" rx="3" fill={isDark ? "#1e1b4b" : "#ffffff"} />
      <text x="278" y="139" fill="#a78bfa" fontSize="8" fontFamily="monospace">302 Found</text>
      <rect x="273" y="150" width="94" height="20" rx="3" fill={isDark ? "#1e1b4b" : "#ffffff"} />
      <text x="278" y="164" fill="#a78bfa" fontSize="8" fontFamily="monospace">304 Not Mod</text>

      {/* 4xx */}
      <rect x="385" y="50" width="115" height="140" rx="6" fill={isDark ? "#451a03" : "#fffbeb"} stroke="#f59e0b" strokeWidth="1.5" />
      <text x="395" y="72" fill="#f59e0b" fontWeight="700" fontSize="11">4xx Error Cli</text>
      <text x="395" y="90" fill={subtextColor} fontSize="8">Error del cliente</text>
      <rect x="393" y="100" width="99" height="20" rx="3" fill={isDark ? "#292524" : "#ffffff"} />
      <text x="398" y="114" fill="#fbbf24" fontSize="8" fontFamily="monospace">400 Bad Req</text>
      <rect x="393" y="125" width="99" height="20" rx="3" fill={isDark ? "#292524" : "#ffffff"} />
      <text x="398" y="139" fill="#fbbf24" fontSize="8" fontFamily="monospace">401 Unauth</text>
      <rect x="393" y="150" width="99" height="20" rx="3" fill={isDark ? "#292524" : "#ffffff"} />
      <text x="398" y="164" fill="#fbbf24" fontSize="8" fontFamily="monospace">404 Not Found</text>

      {/* 5xx */}
      <rect x="510" y="50" width="105" height="140" rx="6" fill={isDark ? "#4c0519" : "#ffe4e6"} stroke="#ef4444" strokeWidth="1.5" />
      <text x="520" y="72" fill="#ef4444" fontWeight="700" fontSize="11">5xx Error Srv</text>
      <text x="520" y="90" fill={subtextColor} fontSize="8">Fallo en servidor</text>
      <rect x="518" y="100" width="89" height="20" rx="3" fill={isDark ? "#1c1917" : "#ffffff"} />
      <text x="523" y="114" fill="#f87171" fontSize="8" fontFamily="monospace">500 Internal</text>
      <rect x="518" y="125" width="89" height="20" rx="3" fill={isDark ? "#1c1917" : "#ffffff"} />
      <text x="523" y="139" fill="#f87171" fontSize="8" fontFamily="monospace">502 Bad GW</text>
      <rect x="518" y="150" width="89" height="20" rx="3" fill={isDark ? "#1c1917" : "#ffffff"} />
      <text x="523" y="164" fill="#f87171" fontSize="8" fontFamily="monospace">503 Unavail</text>
    </svg>
  );
  },

  "cdn-edge-distribution": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* Origin Server */}
      <rect x="25" y="45" width="150" height="135" rx="8" fill={isDark ? "#1e1b4b" : "#ede9fe"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="35" y="70" fill="#818cf8" fontWeight="700" fontSize="11">Servidor Origen</text>
      <text x="35" y="88" fill={subtextColor} fontSize="8">Base de Datos &amp; API Master</text>
      <rect x="35" y="100" width="130" height="40" rx="4" fill={isDark ? "#312e81" : "#ffffff"} />
      <text x="42" y="118" fill="#c7d2fe" fontSize="8" fontFamily="monospace">US-East (Virginia)</text>
      <text x="42" y="132" fill="#a5b4fc" fontSize="8">Contenido dinámico</text>
      <text x="35" y="162" fill={subtextColor} fontSize="8">Sincroniza caché a edges</text>

      {/* Edge PoPs (Points of Presence) */}
      <rect x="220" y="25" width="200" height="50" rx="6" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1" />
      <text x="230" y="45" fill="#34d399" fontWeight="700" fontSize="10">Edge PoP Europa (Madrid)</text>
      <text x="230" y="60" fill={textColor} fontSize="8">Caché Assets: JS, CSS, WebP • Latencia: 12ms</text>

      <rect x="220" y="85" width="200" height="50" rx="6" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1" />
      <text x="230" y="105" fill="#34d399" fontWeight="700" fontSize="10">Edge PoP Asia (Tokio)</text>
      <text x="230" y="120" fill={textColor} fontSize="8">Caché Assets: JS, CSS, WebP • Latencia: 18ms</text>

      <rect x="220" y="145" width="200" height="50" rx="6" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1" />
      <text x="230" y="165" fill="#34d399" fontWeight="700" fontSize="10">Edge PoP Sudamérica (São Paulo)</text>
      <text x="230" y="180" fill={textColor} fontSize="8">Caché Assets: JS, CSS, WebP • Latencia: 15ms</text>

      {/* End Users */}
      <rect x="465" y="45" width="150" height="135" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="475" y="70" fill="#3b82f6" fontWeight="700" fontSize="11">Usuarios Globales</text>
      <text x="475" y="88" fill={subtextColor} fontSize="8">Enrutados por Anycast DNS</text>
      <rect x="475" y="100" width="130" height="40" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="482" y="118" fill="#38bdf8" fontSize="8" fontWeight="bold">0 buffer / TTFB &lt; 50ms</text>
      <text x="482" y="132" fill="#34d399" fontSize="8">Descarga ultra-rápida</text>
      <text x="475" y="162" fill={subtextColor} fontSize="8">Reduce carga en el Origen 85%</text>

      <path d="M175 110 L218 50" stroke="#10b981" strokeWidth="1" strokeDasharray="2 2" />
      <path d="M175 110 L218 110" stroke="#10b981" strokeWidth="1" strokeDasharray="2 2" />
      <path d="M175 110 L218 170" stroke="#10b981" strokeWidth="1" strokeDasharray="2 2" />
      <path d="M422 110 L463 110" stroke="#3b82f6" strokeWidth="1.5" />
    </svg>
  );
  },

  "ip-addressing": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* IPv4 */}
      <rect x="25" y="35" width="285" height="155" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#0284c7" strokeWidth="1.5" />
      <text x="40" y="60" fill="#0284c7" fontWeight="700" fontSize="12">IPv4 (32 Bits — 4 Octetos)</text>
      <text x="40" y="78" fill={subtextColor} fontSize="9">Formato decimal con puntos:</text>
      <rect x="40" y="88" width="255" height="35" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="50" y="110" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="bold">192 . 168 . 1 . 45</text>
      <text x="40" y="142" fill={textColor} fontSize="8">• Capacidad: 2^32 ≈ 4.29 mil millones (Agotado)</text>
      <text x="40" y="157" fill={textColor} fontSize="8">• Requiere NAT para compartir direcciones públicas</text>
      <text x="40" y="172" fill="#ef4444" fontSize="8" fontWeight="bold">Configuración manual o DHCP obligatoria</text>

      {/* IPv6 */}
      <rect x="330" y="35" width="285" height="155" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="345" y="60" fill="#10b981" fontWeight="700" fontSize="12">IPv6 (128 Bits — 8 Hextetos)</text>
      <text x="345" y="78" fill={subtextColor} fontSize="9">Formato hexadecimal con dos puntos:</text>
      <rect x="345" y="88" width="255" height="35" rx="4" fill={isDark ? "#022c22" : "#ffffff"} />
      <text x="352" y="110" fill="#34d399" fontSize="9" fontFamily="monospace" fontWeight="bold">2001:0db8:85a3::8a2e:0370:7334</text>
      <text x="345" y="142" fill={textColor} fontSize="8">• Capacidad: 2^128 ≈ 3.4×10^38 direcciones (Prácticamente infinito)</text>
      <text x="345" y="157" fill={textColor} fontSize="8">• IPSec integrado nativamente en la arquitectura</text>
      <text x="345" y="172" fill="#10b981" fontSize="8" fontWeight="bold">Autoconfiguración automática (SLAAC) sin servidor</text>
    </svg>
  );
  },

  "security-headers": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="30" y="36" fill="#10b981" fontWeight="700" fontSize="12">Escudo de Seguridad HTTP para Navegadores Modernos</text>
      
      {/* CSP */}
      <rect x="25" y="50" width="140" height="140" rx="6" fill={isDark ? "#1e1b4b" : "#ede9fe"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="35" y="72" fill="#818cf8" fontWeight="700" fontSize="10">Content-Security-Policy</text>
      <text x="35" y="88" fill={subtextColor} fontSize="8">Anti-XSS Shield</text>
      <rect x="33" y="98" width="124" height="42" rx="3" fill={isDark ? "#312e81" : "#ffffff"} />
      <text x="38" y="112" fill="#c7d2fe" fontSize="7" fontFamily="monospace">{"default-src 'self';"}</text>
      <text x="38" y="125" fill="#c7d2fe" fontSize="7" fontFamily="monospace">{"script-src 'self' cdn;"}</text>
      <text x="35" y="155" fill={textColor} fontSize="8">Bloquea scripts</text>
      <text x="35" y="170" fill="#818cf8" fontSize="8" fontWeight="bold">maliciosos externos</text>

      {/* HSTS */}
      <rect x="175" y="50" width="140" height="140" rx="6" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="185" y="72" fill="#10b981" fontWeight="700" fontSize="10">Strict-Transport-Security</text>
      <text x="185" y="88" fill={subtextColor} fontSize="8">Fuerza HTTPS Siempre</text>
      <rect x="183" y="98" width="124" height="42" rx="3" fill={isDark ? "#022c22" : "#ffffff"} />
      <text x="188" y="112" fill="#6ee7b7" fontSize="7" fontFamily="monospace">max-age=63072000;</text>
      <text x="188" y="125" fill="#6ee7b7" fontSize="7" fontFamily="monospace">includeSubDomains</text>
      <text x="185" y="155" fill={textColor} fontSize="8">Previene ataques de</text>
      <text x="185" y="170" fill="#10b981" fontSize="8" fontWeight="bold">degradación a HTTP</text>

      {/* X-Frame-Options */}
      <rect x="325" y="50" width="140" height="140" rx="6" fill={isDark ? "#451a03" : "#fffbeb"} stroke="#f59e0b" strokeWidth="1.5" />
      <text x="335" y="72" fill="#f59e0b" fontWeight="700" fontSize="10">X-Frame-Options</text>
      <text x="335" y="88" fill={subtextColor} fontSize="8">Anti-Clickjacking</text>
      <rect x="333" y="98" width="124" height="42" rx="3" fill={isDark ? "#292524" : "#ffffff"} />
      <text x="338" y="112" fill="#fbbf24" fontSize="7" fontFamily="monospace">DENY |</text>
      <text x="338" y="125" fill="#fbbf24" fontSize="7" fontFamily="monospace">SAMEORIGIN</text>
      <text x="335" y="155" fill={textColor} fontSize="8">Impide incrustar la app</text>
      <text x="335" y="170" fill="#f59e0b" fontSize="8" fontWeight="bold">en &lt;iframe&gt; malicioso</text>

      {/* X-Content-Type */}
      <rect x="475" y="50" width="140" height="140" rx="6" fill={isDark ? "#4c0519" : "#ffe4e6"} stroke="#f43f5e" strokeWidth="1.5" />
      <text x="485" y="72" fill="#f43f5e" fontWeight="700" fontSize="10">X-Content-Type-Options</text>
      <text x="485" y="88" fill={subtextColor} fontSize="8">Anti-MIME Sniffing</text>
      <rect x="483" y="98" width="124" height="42" rx="3" fill={isDark ? "#1c1917" : "#ffffff"} />
      <text x="488" y="118" fill="#f43f5e" fontSize="7" fontFamily="monospace">nosniff</text>
      <text x="485" y="155" fill={textColor} fontSize="8">Obliga al browser a</text>
      <text x="485" y="170" fill="#f43f5e" fontSize="8" fontWeight="bold">respetar el Content-Type</text>
    </svg>
  );
  },

  "http1-vs-http2": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* HTTP/1.1 */}
      <rect x="25" y="35" width="285" height="155" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#ef4444" strokeWidth="1.5" />
      <text x="40" y="60" fill="#ef4444" fontWeight="700" fontSize="12">HTTP/1.1 — Bloqueo en Cabeza de Línea</text>
      <text x="40" y="78" fill={subtextColor} fontSize="8">Múltiples conexiones TCP (máx 6 por dominio):</text>
      <rect x="40" y="88" width="255" height="22" rx="3" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="48" y="103" fill="#f87171" fontSize="8" fontFamily="monospace">TCP 1: [Req HTML] ➔ [Espera Resp] ➔ [Req CSS]</text>
      <rect x="40" y="115" width="255" height="22" rx="3" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="48" y="130" fill="#f87171" fontSize="8" fontFamily="monospace">TCP 2: [Req JS] ➔ [Bloqueado por latencia]</text>
      <text x="40" y="155" fill={textColor} fontSize="8">⚠️ Cabeceras redundantes sin compresión</text>
      <text x="40" y="170" fill="#ef4444" fontSize="8" fontWeight="bold">Alto consumo de recursos y latencia RTT</text>

      {/* HTTP/2 */}
      <rect x="330" y="35" width="285" height="155" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="345" y="60" fill="#10b981" fontWeight="700" fontSize="12">HTTP/2 — Multiplexación Binaria</text>
      <text x="345" y="78" fill={subtextColor} fontSize="8">1 sola conexión TCP con Streams intercalados:</text>
      <rect x="345" y="88" width="255" height="50" rx="4" fill={isDark ? "#022c22" : "#ffffff"} />
      <text x="353" y="104" fill="#34d399" fontSize="8" fontFamily="monospace">Stream 1 (HTML) | Stream 3 (CSS) | Stream 5 (JS)</text>
      <text x="353" y="122" fill="#6ee7b7" fontSize="8" fontFamily="monospace">Entramado Binario (Binary Framing Layer)</text>
      <text x="345" y="155" fill={textColor} fontSize="8">✓ Compresión de cabeceras HPACK • Server Push</text>
      <text x="345" y="170" fill="#10b981" fontSize="8" fontWeight="bold">0 bloqueo: múltiples peticiones concurrentes</text>
    </svg>
  );
  },

  "http3-quic": ({ isDark, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* HTTP/2 Stack */}
      <rect x="25" y="35" width="285" height="155" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="40" y="58" fill="#818cf8" fontWeight="700" fontSize="11">HTTP/2 (Sobre TCP + TLS 1.2/1.3)</text>
      <rect x="40" y="70" width="255" height="25" rx="3" fill={isDark ? "#312e81" : "#ffffff"} />
      <text x="48" y="86" fill="#a5b4fc" fontSize="8" fontWeight="bold">HTTP/2 Application Layer</text>
      <rect x="40" y="98" width="255" height="25" rx="3" fill={isDark ? "#1e1b4b" : "#ffffff"} />
      <text x="48" y="114" fill="#c7d2fe" fontSize="8">TLS Layer (Seguridad)</text>
      <rect x="40" y="126" width="255" height="25" rx="3" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="48" y="142" fill="#f87171" fontSize="8">TCP Layer (Pérdida de 1 paquete bloquea todo)</text>
      <text x="40" y="172" fill="#ef4444" fontSize="8">Handshake: 2 a 3 RTTs de latencia inicial</text>

      {/* HTTP/3 Stack */}
      <rect x="330" y="35" width="285" height="155" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="345" y="58" fill="#10b981" fontWeight="700" fontSize="11">HTTP/3 (Sobre QUIC / UDP)</text>
      <rect x="345" y="70" width="255" height="25" rx="3" fill={isDark ? "#065f46" : "#ffffff"} />
      <text x="353" y="86" fill="#6ee7b7" fontSize="8" fontWeight="bold">HTTP/3 Application Layer (QPACK)</text>
      <rect x="345" y="98" width="255" height="25" rx="3" fill={isDark ? "#022c22" : "#ffffff"} />
      <text x="353" y="114" fill="#34d399" fontSize="8">QUIC (Transporte + Cifrado TLS 1.3 integrado)</text>
      <rect x="345" y="126" width="255" height="25" rx="3" fill={isDark ? "#064e3b" : "#ffffff"} />
      <text x="353" y="142" fill="#a7f3d0" fontSize="8">UDP (Datagramas sin bloqueo HoL entre streams)</text>
      <text x="345" y="172" fill="#10b981" fontSize="8" fontWeight="bold">0-RTT Reconnect • Migración móvil (Wi-Fi ➔ 5G)</text>
    </svg>
  );
  },

  "forward-vs-reverse-proxy": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* Forward Proxy */}
      <rect x="25" y="35" width="285" height="155" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="40" y="58" fill="#3b82f6" fontWeight="700" fontSize="11">Forward Proxy (Protege Clientes)</text>
      <text x="40" y="74" fill={subtextColor} fontSize="8">Cliente ➔ Forward Proxy ➔ Internet</text>
      <rect x="40" y="85" width="255" height="50" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="48" y="102" fill="#60a5fa" fontSize="8" fontFamily="monospace">Oculta la IP real del cliente (Anonimato)</text>
      <text x="48" y="116" fill={textColor} fontSize="8" fontFamily="monospace">Filtro corporativo de contenidos y caché LAN</text>
      <text x="48" y="130" fill="#34d399" fontSize="8" fontFamily="monospace">Ej: Squid, Proxies corporativos VPN</text>
      <text x="40" y="160" fill={subtextColor} fontSize="8">El servidor destino no sabe quién es el cliente real</text>

      {/* Reverse Proxy */}
      <rect x="330" y="35" width="285" height="155" rx="8" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#8b5cf6" strokeWidth="1.5" />
      <text x="345" y="58" fill="#8b5cf6" fontWeight="700" fontSize="11">Reverse Proxy (Protege Servidores)</text>
      <text x="345" y="74" fill={subtextColor} fontSize="8">Internet ➔ Reverse Proxy ➔ Servidores Internos</text>
      <rect x="345" y="85" width="255" height="50" rx="4" fill={isDark ? "#1e1b4b" : "#ffffff"} />
      <text x="353" y="102" fill="#c4b5fd" fontSize="8" fontFamily="monospace">Balanceo de carga (Round-Robin, IP Hash)</text>
      <text x="353" y="116" fill={textColor} fontSize="8" fontFamily="monospace">Terminación SSL/TLS • Mitigación DDoS</text>
      <text x="353" y="130" fill="#a7f3d0" fontSize="8" fontFamily="monospace">Ej: Nginx, Traefik, HAProxy, Cloudflare</text>
      <text x="345" y="160" fill={subtextColor} fontSize="8">El cliente nunca conoce las IPs privadas del backend</text>
    </svg>
  );
  },

  "dhcp-dora": ({ isDark, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="30" y="38" fill="#f59e0b" fontWeight="700" fontSize="12">Proceso D.O.R.A de Asignación de IP Dinámica (DHCP)</text>
      
      {/* 1. Discover */}
      <rect x="25" y="55" width="135" height="135" rx="6" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="35" y="77" fill="#3b82f6" fontWeight="700" fontSize="11">1. Discover (D)</text>
      <text x="35" y="93" fill={subtextColor} fontSize="8">Broadcast del cliente</text>
      <rect x="33" y="105" width="119" height="40" rx="3" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="38" y="122" fill="#60a5fa" fontSize="8" fontFamily="monospace">¿Hay un servidor</text>
      <text x="38" y="136" fill="#60a5fa" fontSize="8" fontFamily="monospace">DHCP en la red?</text>
      <text x="35" y="165" fill={subtextColor} fontSize="8">IP: 255.255.255.255</text>

      {/* 2. Offer */}
      <rect x="175" y="55" width="135" height="135" rx="6" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="185" y="77" fill="#818cf8" fontWeight="700" fontSize="11">2. Offer (O)</text>
      <text x="185" y="93" fill={subtextColor} fontSize="8">Servidor propone IP</text>
      <rect x="183" y="105" width="119" height="40" rx="3" fill={isDark ? "#1e1b4b" : "#ffffff"} />
      <text x="188" y="122" fill="#c7d2fe" fontSize="8" fontFamily="monospace">Te ofrezco la IP:</text>
      <text x="188" y="136" fill="#a5b4fc" fontSize="8" fontFamily="monospace">192.168.1.50</text>
      <text x="185" y="165" fill={subtextColor} fontSize="8">Incluye máscara y DNS</text>

      {/* 3. Request */}
      <rect x="325" y="55" width="135" height="135" rx="6" fill={isDark ? "#451a03" : "#fffbeb"} stroke="#f59e0b" strokeWidth="1.5" />
      <text x="335" y="77" fill="#f59e0b" fontWeight="700" fontSize="11">3. Request (R)</text>
      <text x="335" y="93" fill={subtextColor} fontSize="8">Cliente acepta oferta</text>
      <rect x="333" y="105" width="119" height="40" rx="3" fill={isDark ? "#292524" : "#ffffff"} />
      <text x="338" y="122" fill="#fbbf24" fontSize="8" fontFamily="monospace">Acepto usar la IP</text>
      <text x="338" y="136" fill="#fbbf24" fontSize="8" fontFamily="monospace">192.168.1.50</text>
      <text x="335" y="165" fill={subtextColor} fontSize="8">Notifica a otros servers</text>

      {/* 4. Acknowledge */}
      <rect x="475" y="55" width="140" height="135" rx="6" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="485" y="77" fill="#10b981" fontWeight="700" fontSize="11">4. Acknowledge (A)</text>
      <text x="485" y="93" fill={subtextColor} fontSize="8">Confirmación de lease</text>
      <rect x="483" y="105" width="124" height="40" rx="3" fill={isDark ? "#022c22" : "#ffffff"} />
      <text x="488" y="122" fill="#34d399" fontSize="8" fontFamily="monospace">IP Confirmada</text>
      <text x="488" y="136" fill="#a7f3d0" fontSize="8" fontFamily="monospace">Lease: 24 Horas</text>
      <text x="485" y="165" fill="#10b981" fontSize="8" fontWeight="bold">Dispositivo conectado</text>
    </svg>
  );
  },

  "firewall-inspection": ({ isDark, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* Incoming Traffic */}
      <rect x="25" y="45" width="140" height="135" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#64748b" strokeWidth="1.5" />
      <text x="35" y="70" fill="#94a3b8" fontWeight="700" fontSize="11">Tráfico Entrante</text>
      <rect x="35" y="85" width="120" height="25" rx="4" fill={isDark ? "#064e3b" : "#d1fae5"} />
      <text x="40" y="102" fill="#34d399" fontSize="8" fontFamily="monospace">Puerto 443 (HTTPS)</text>
      <rect x="35" y="118" width="120" height="25" rx="4" fill={isDark ? "#450a0a" : "#fee2e2"} />
      <text x="40" y="135" fill="#f87171" fontSize="8" fontFamily="monospace">Puerto 23 (Telnet Malicioso)</text>
      <text x="35" y="165" fill={subtextColor} fontSize="8">Paquetes WAN</text>

      {/* Firewall Core */}
      <rect x="210" y="35" width="220" height="155" rx="8" fill={isDark ? "#713f12" : "#fef08a"} stroke="#eab308" strokeWidth="2" />
      <text x="225" y="60" fill="#ca8a04" fontWeight="700" fontSize="12">Firewall (Inspección Stateful)</text>
      <rect x="225" y="75" width="190" height="65" rx="4" fill={isDark ? "#422006" : "#ffffff"} />
      <text x="233" y="93" fill="#facc15" fontSize="8" fontWeight="bold">Tabla de Reglas de Seguridad:</text>
      <text x="233" y="108" fill="#a7f3d0" fontSize="8" fontFamily="monospace">✓ ALLOW tcp:443 (Web Pública)</text>
      <text x="233" y="122" fill="#fca5a5" fontSize="8" fontFamily="monospace">✗ DROP tcp:23 (Inseguro)</text>
      <text x="233" y="135" fill="#fca5a5" fontSize="8" fontFamily="monospace">✗ DROP flood_rate &gt; 1000/s</text>
      <text x="225" y="165" fill={subtextColor} fontSize="8">Filtra Capas 3, 4 y 7 (WAF)</text>

      {/* Clean Internal Traffic */}
      <rect x="475" y="45" width="140" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="485" y="70" fill="#10b981" fontWeight="700" fontSize="11">Red Interna Segura</text>
      <rect x="485" y="85" width="120" height="40" rx="4" fill={isDark ? "#022c22" : "#ffffff"} />
      <text x="492" y="103" fill="#6ee7b7" fontSize="8" fontFamily="monospace">Servidores Web</text>
      <text x="492" y="118" fill="#a7f3d0" fontSize="8" fontFamily="monospace">&amp; Microservicios</text>
      <text x="485" y="150" fill="#34d399" fontSize="8" fontWeight="bold">✓ Tráfico Autorizado</text>
      <text x="485" y="165" fill={subtextColor} fontSize="8">Cero ataques directos</text>

      <path d="M168 105 L205 105" stroke="#eab308" strokeWidth="1.5" />
      <path d="M433 105 L470 105" stroke="#10b981" strokeWidth="1.5" />
    </svg>
  );
  },

  "ddos-mitigation": ({ isDark, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* Botnet Traffic */}
      <rect x="25" y="40" width="150" height="145" rx="8" fill={isDark ? "#450a0a" : "#fef2f2"} stroke="#ef4444" strokeWidth="1.5" />
      <text x="35" y="65" fill="#ef4444" fontWeight="700" fontSize="11">Ataque DDoS (Botnet)</text>
      <rect x="35" y="80" width="130" height="45" rx="4" fill={isDark ? "#1c1917" : "#ffffff"} />
      <text x="42" y="98" fill="#f87171" fontSize="8" fontFamily="monospace">500 Gbps SYN Flood</text>
      <text x="42" y="113" fill="#fca5a5" fontSize="8">Millones de IPs zombis</text>
      <text x="35" y="145" fill={subtextColor} fontSize="8">Intenta saturar ancho</text>
      <text x="35" y="160" fill="#f87171" fontSize="8">de banda y CPU</text>

      {/* Scrubbing Center */}
      <rect x="220" y="35" width="200" height="155" rx="8" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#6366f1" strokeWidth="2" />
      <text x="235" y="60" fill="#818cf8" fontWeight="700" fontSize="12">Scrubbing Center (Anycast)</text>
      <rect x="235" y="75" width="170" height="65" rx="4" fill={isDark ? "#1e1b4b" : "#ffffff"} />
      <text x="242" y="93" fill="#c7d2fe" fontSize="8" fontWeight="bold">Capacidad Terabit Global:</text>
      <text x="242" y="108" fill="#f87171" fontSize="8" fontFamily="monospace">✗ Filtra SYN/UDP flood</text>
      <text x="242" y="122" fill="#a7f3d0" fontSize="8" fontFamily="monospace">✓ Valida HTTP Challenge</text>
      <text x="242" y="135" fill="#34d399" fontSize="8" fontFamily="monospace">✓ Rate Limiting por token</text>
      <text x="235" y="165" fill={subtextColor} fontSize="8">Cloudflare / AWS Shield / Akamai</text>

      {/* Protected Origin */}
      <rect x="465" y="40" width="150" height="145" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="475" y="65" fill="#10b981" fontWeight="700" fontSize="11">Servidor Origen Limpio</text>
      <rect x="475" y="80" width="130" height="45" rx="4" fill={isDark ? "#022c22" : "#ffffff"} />
      <text x="482" y="98" fill="#34d399" fontSize="8" fontFamily="monospace">Tráfico Real: 200 Mbps</text>
      <text x="482" y="113" fill="#a7f3d0" fontSize="8">100% Usuarios Legítimos</text>
      <text x="475" y="145" fill="#10b981" fontSize="8" fontWeight="bold">0 caídas de servicio</text>
      <text x="475" y="160" fill={subtextColor} fontSize="8">Disponibilidad 99.999%</text>

      <path d="M178 110 L215 110" stroke="#ef4444" strokeWidth="1.5" />
      <path d="M423 110 L460 110" stroke="#10b981" strokeWidth="1.5" />
    </svg>
  );
  },

  "internet-global-mesh": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* Tier 1 Backbone */}
      <rect x="25" y="35" width="170" height="155" rx="8" fill={isDark ? "#1e1b4b" : "#ede9fe"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="35" y="58" fill="#818cf8" fontWeight="700" fontSize="11">Tier 1 Backbone Global</text>
      <text x="35" y="74" fill={subtextColor} fontSize="8">Cables submarinos transoceánicos</text>
      <rect x="35" y="85" width="150" height="42" rx="4" fill={isDark ? "#312e81" : "#ffffff"} />
      <text x="42" y="102" fill="#c7d2fe" fontSize="8" fontFamily="monospace">Lumen, Telia, AT&amp;T, NTT</text>
      <text x="42" y="116" fill="#a5b4fc" fontSize="8">Peering mutuo sin costo (Settlement-free)</text>
      <text x="35" y="148" fill={textColor} fontSize="8">Enrutamiento intercontinental</text>
      <text x="35" y="162" fill="#818cf8" fontSize="8" fontWeight="bold">Troncal global de Internet</text>

      {/* Tier 2 & IXP */}
      <rect x="235" y="35" width="170" height="155" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="245" y="58" fill="#10b981" fontWeight="700" fontSize="11">Tier 2 ISPs &amp; IXPs</text>
      <text x="245" y="74" fill={subtextColor} fontSize="8">Puntos de intercambio de tráfico</text>
      <rect x="245" y="85" width="150" height="42" rx="4" fill={isDark ? "#022c22" : "#ffffff"} />
      <text x="252" y="102" fill="#6ee7b7" fontSize="8" fontFamily="monospace">Redes Regionales / Datacenters</text>
      <text x="252" y="116" fill="#a7f3d0" fontSize="8">Tránsito pagado a Tier 1</text>
      <text x="245" y="148" fill={textColor} fontSize="8">Distribución nacional de paquetes</text>
      <text x="245" y="162" fill="#10b981" fontSize="8" fontWeight="bold">Interconexión neutral (IXP)</text>

      {/* Tier 3 & End Users */}
      <rect x="445" y="35" width="170" height="155" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="455" y="58" fill="#3b82f6" fontWeight="700" fontSize="11">Tier 3 ISPs &amp; Clientes</text>
      <text x="455" y="74" fill={subtextColor} fontSize="8">Acceso residencial y móvil</text>
      <rect x="455" y="85" width="150" height="42" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="462" y="102" fill="#38bdf8" fontSize="8" fontFamily="monospace">Fibra óptica local, 5G, Wi-Fi</text>
      <text x="462" y="116" fill="#7dd3fc" fontSize="8">Hogares, empresas y móviles</text>
      <text x="455" y="148" fill={textColor} fontSize="8">Protocolos estándar: TCP/IP</text>
      <text x="455" y="162" fill="#3b82f6" fontSize="8" fontWeight="bold">Última milla conectada</text>

      <path d="M198 112 L232 112" stroke="#6366f1" strokeWidth="1.5" />
      <path d="M408 112 L442 112" stroke="#10b981" strokeWidth="1.5" />
    </svg>
  );
  },

  "router-routing-table": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* LAN */}
      <rect x="25" y="35" width="145" height="155" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="35" y="58" fill="#3b82f6" fontWeight="700" fontSize="11">Red Local (LAN)</text>
      <text x="35" y="74" fill={subtextColor} fontSize="8">192.168.1.0/24</text>
      <rect x="35" y="85" width="125" height="40" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="42" y="102" fill="#60a5fa" fontSize="8" fontFamily="monospace">Host A: .10</text>
      <text x="42" y="116" fill="#60a5fa" fontSize="8" fontFamily="monospace">Host B: .25</text>
      <text x="35" y="150" fill={textColor} fontSize="8">Interfaz eth0</text>
      <text x="35" y="165" fill="#3b82f6" fontSize="8" fontWeight="bold">Tráfico interno</text>

      {/* Router Core */}
      <rect x="205" y="35" width="230" height="155" rx="8" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#6366f1" strokeWidth="2" />
      <text x="215" y="58" fill="#818cf8" fontWeight="700" fontSize="12">Router (Tabla de Enrutamiento)</text>
      <rect x="215" y="72" width="210" height="75" rx="4" fill={isDark ? "#1e1b4b" : "#ffffff"} />
      <text x="222" y="88" fill="#c7d2fe" fontSize="7" fontFamily="monospace">Red Destino    | Próximo Salto | Interfaz</text>
      <text x="222" y="102" fill="#a5b4fc" fontSize="7" fontFamily="monospace">192.168.1.0/24 | Enlace Directo| eth0 (LAN)</text>
      <text x="222" y="116" fill="#a7f3d0" fontSize="7" fontFamily="monospace">10.0.0.0/8     | 172.16.0.1    | eth1 (VPN)</text>
      <text x="222" y="130" fill="#fde047" fontSize="7" fontFamily="monospace">0.0.0.0/0 (Def)| 203.0.113.1   | eth2 (WAN)</text>
      <text x="215" y="165" fill={textColor} fontSize="8">Examina IP destino del paquete y lo reenvía al Next-Hop</text>

      {/* WAN */}
      <rect x="470" y="35" width="145" height="155" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="480" y="58" fill="#10b981" fontWeight="700" fontSize="11">Internet (WAN)</text>
      <text x="480" y="74" fill={subtextColor} fontSize="8">IP Pública: 203.0.113.4</text>
      <rect x="480" y="85" width="125" height="40" rx="4" fill={isDark ? "#022c22" : "#ffffff"} />
      <text x="487" y="102" fill="#34d399" fontSize="8" fontFamily="monospace">Hacia ISP Gateway</text>
      <text x="487" y="116" fill="#a7f3d0" fontSize="8" fontFamily="monospace">Fibra / Troncal</text>
      <text x="480" y="150" fill={textColor} fontSize="8">Interfaz eth2</text>
      <text x="480" y="165" fill="#10b981" fontSize="8" fontWeight="bold">Tráfico hacia el mundo</text>

      <path d="M172 112 L202 112" stroke="#3b82f6" strokeWidth="1.5" />
      <path d="M437 112 L467 112" stroke="#10b981" strokeWidth="1.5" />
    </svg>
  );
  },

  "domain-fqdn-hierarchy": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="30" y="38" fill="#818cf8" fontWeight="700" fontSize="12">Jerarquía de un FQDN (Fully Qualified Domain Name)</text>
      
      {/* Full domain bar */}
      <rect x="30" y="55" width="580" height="38" rx="6" fill={isDark ? "#0f172a" : "#f1f5f9"} stroke="#4f46e5" strokeWidth="1.5" />
      <text x="50" y="78" fontSize="12" fontFamily="monospace">
        <tspan fill="#38bdf8">api.</tspan>
        <tspan fill="#818cf8">store.</tspan>
        <tspan fill="#a855f7">cabuweb</tspan>
        <tspan fill="#10b981">.com</tspan>
        <tspan fill="#f59e0b">.</tspan>
      </text>

      {/* Hierarchical breakdown cards */}
      <rect x="30" y="110" width="105" height="75" rx="6" fill={isDark ? "#082f49" : "#e0f2fe"} stroke="#0284c7" strokeWidth="1" />
      <text x="38" y="130" fill="#38bdf8" fontWeight="bold" fontSize="10">Subdominios</text>
      <text x="38" y="148" fill={textColor} fontSize="9" fontFamily="monospace">api.store.</text>
      <text x="38" y="166" fill={subtextColor} fontSize="8">Servicio específico</text>

      <rect x="145" y="110" width="145" height="75" rx="6" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#6366f1" strokeWidth="1" />
      <text x="153" y="130" fill="#818cf8" fontWeight="bold" fontSize="10">Second-Level (SLD)</text>
      <text x="153" y="148" fill={textColor} fontSize="9" fontFamily="monospace">cabuweb</text>
      <text x="153" y="166" fill={subtextColor} fontSize="8">Marca o nombre de entidad</text>

      <rect x="300" y="110" width="145" height="75" rx="6" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1" />
      <text x="308" y="130" fill="#10b981" fontWeight="bold" fontSize="10">Top-Level (TLD)</text>
      <text x="308" y="148" fill={textColor} fontSize="9" fontFamily="monospace">.com / .org / .es</text>
      <text x="308" y="166" fill={subtextColor} fontSize="8">Gestionado por registros ICANN</text>

      <rect x="455" y="110" width="155" height="75" rx="6" fill={isDark ? "#451a03" : "#fef3c7"} stroke="#d97706" strokeWidth="1" />
      <text x="463" y="130" fill="#fbbf24" fontWeight="bold" fontSize="10">Root Zone (.)</text>
      <text x="463" y="148" fill={textColor} fontSize="9" fontFamily="monospace">. (Punto raíz implícito)</text>
      <text x="463" y="166" fill={subtextColor} fontSize="8">13 clústeres de servidores raíz</text>
    </svg>
  );
  },

  "http-request-response": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* Client / Browser */}
      <rect x="25" y="35" width="200" height="155" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="35" y="58" fill="#3b82f6" fontWeight="700" fontSize="11">1. Cliente (HTTP Request)</text>
      <rect x="35" y="70" width="180" height="65" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="42" y="88" fill="#38bdf8" fontSize="8" fontFamily="monospace">GET /api/users HTTP/1.1</text>
      <text x="42" y="102" fill={textColor} fontSize="8" fontFamily="monospace">Host: cabuweb.com</text>
      <text x="42" y="116" fill="#a5b4fc" fontSize="8" fontFamily="monospace">Accept: application/json</text>
      <text x="42" y="128" fill="#6ee7b7" fontSize="8" fontFamily="monospace">Authorization: Bearer token...</text>
      <text x="35" y="160" fill={subtextColor} fontSize="8">Petición sin estado con verbos semánticos</text>
      <text x="35" y="174" fill="#3b82f6" fontSize="8" fontWeight="bold">GET, POST, PUT, DELETE, PATCH</text>

      {/* Server / Backend */}
      <rect x="415" y="35" width="200" height="155" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="425" y="58" fill="#10b981" fontWeight="700" fontSize="11">2. Servidor (HTTP Response)</text>
      <rect x="425" y="70" width="180" height="65" rx="4" fill={isDark ? "#022c22" : "#ffffff"} />
      <text x="432" y="88" fill="#34d399" fontSize="8" fontFamily="monospace">HTTP/1.1 200 OK</text>
      <text x="432" y="102" fill={textColor} fontSize="8" fontFamily="monospace">Content-Type: application/json</text>
      <text x="432" y="116" fill="#6ee7b7" fontSize="8" fontFamily="monospace">Cache-Control: max-age=3600</text>
      <text x="432" y="128" fill="#a7f3d0" fontSize="8" fontFamily="monospace">{"Body: [{ id: 1, name: 'Diego' }]"}</text>
      <text x="425" y="160" fill={subtextColor} fontSize="8">Código de estado + cabeceras + payload</text>
      <text x="425" y="174" fill="#10b981" fontSize="8" fontWeight="bold">Respuesta procesada por el frontend</text>

      {/* Arrows */}
      <path d="M232 90 L408 90" stroke="#3b82f6" strokeWidth="2" />
      <polygon points="412,90 404,86 404,94" fill="#3b82f6" />
      <text x="320" y="82" fill="#3b82f6" fontSize="8" textAnchor="middle" fontWeight="bold">Request ➔</text>

      <path d="M408 135 L232 135" stroke="#10b981" strokeWidth="2" />
      <polygon points="228,135 236,131 236,139" fill="#10b981" />
      <text x="320" y="148" fill="#10b981" fontSize="8" textAnchor="middle" fontWeight="bold">⬅ Response</text>
    </svg>
  );
  },

  "url-relative-vs-absolute": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="30" y="38" fill="#818cf8" fontWeight="700" fontSize="12">Comparación: URL Absoluta vs Relativa a Raíz vs Relativa a Ruta</text>
      
      {/* Context bar */}
      <rect x="30" y="52" width="580" height="26" rx="4" fill={isDark ? "#1e1b4b" : "#ede9fe"} />
      <text x="40" y="69" fill="#818cf8" fontSize="9" fontFamily="monospace">Página Base Actual: https://cabuweb.com/docs/guides/index.html</text>

      {/* Absolute */}
      <rect x="30" y="90" width="180" height="95" rx="6" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="40" y="110" fill="#3b82f6" fontWeight="bold" fontSize="10">1. URL Absoluta</text>
      <rect x="40" y="120" width="160" height="28" rx="3" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="45" y="137" fill="#60a5fa" fontSize="7" fontFamily="monospace">https://cdn.cabuweb.com/img.png</text>
      <text x="40" y="162" fill={textColor} fontSize="8">Incluye origen completo.</text>
      <text x="40" y="174" fill="#3b82f6" fontSize="8" fontWeight="bold">Independiente de la base</text>

      {/* Root Relative */}
      <rect x="230" y="90" width="180" height="95" rx="6" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="240" y="110" fill="#10b981" fontWeight="bold" fontSize="10">2. Relativa a la Raíz (/)</text>
      <rect x="240" y="120" width="160" height="28" rx="3" fill={isDark ? "#022c22" : "#ffffff"} />
      <text x="245" y="137" fill="#34d399" fontSize="8" fontFamily="monospace">/api/v1/user</text>
      <text x="240" y="162" fill={textColor} fontSize="8">Resuelve desde el host:</text>
      <text x="240" y="174" fill="#10b981" fontSize="8" fontWeight="bold">cabuweb.com/api/v1/user</text>

      {/* Path Relative */}
      <rect x="430" y="90" width="180" height="95" rx="6" fill={isDark ? "#451a03" : "#fffbeb"} stroke="#f59e0b" strokeWidth="1.5" />
      <text x="440" y="110" fill="#f59e0b" fontWeight="bold" fontSize="10">3. Relativa a la Ruta</text>
      <rect x="440" y="120" width="160" height="28" rx="3" fill={isDark ? "#292524" : "#ffffff"} />
      <text x="445" y="137" fill="#fbbf24" fontSize="8" fontFamily="monospace">setup.html (sin / inicial)</text>
      <text x="440" y="162" fill={textColor} fontSize="8">Resuelve en la carpeta actual:</text>
      <text x="440" y="174" fill="#f59e0b" fontSize="8" fontWeight="bold">cabuweb.com/docs/guides/setup</text>
    </svg>
  );
  },

  "ssl-tls-handshake": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="30" y="36" fill="#10b981" fontWeight="700" fontSize="12">TLS 1.3 Handshake (1-RTT Negociación Cifrada)</text>
      
      {/* Client Column */}
      <rect x="30" y="52" width="140" height="140" rx="6" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="40" y="74" fill="#3b82f6" fontWeight="bold" fontSize="11">Navegador (Cliente)</text>
      <rect x="38" y="85" width="124" height="42" rx="3" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="44" y="102" fill="#60a5fa" fontSize="8" fontFamily="monospace">Genera par de claves</text>
      <text x="44" y="116" fill="#60a5fa" fontSize="8" fontFamily="monospace">Efeméricas (ECDHE)</text>
      <text x="40" y="155" fill={textColor} fontSize="8">Verifica el certificado</text>
      <text x="40" y="170" fill="#3b82f6" fontSize="8" fontWeight="bold">con Autoridades CA</text>

      {/* Handshake flow messages */}
      <rect x="190" y="52" width="260" height="140" rx="6" fill={isDark ? "#1e1b4b" : "#ede9fe"} stroke="#6366f1" strokeWidth="1" />
      
      {/* Step 1 */}
      <path d="M175 75 L450 75" stroke="#3b82f6" strokeWidth="1.5" />
      <text x="320" y="70" fill="#60a5fa" fontSize="8" textAnchor="middle" fontFamily="monospace">1. ClientHello + Cipher Suites + KeyShare ➔</text>

      {/* Step 2 */}
      <path d="M450 115 L175 115" stroke="#10b981" strokeWidth="1.5" />
      <text x="320" y="110" fill="#34d399" fontSize="8" textAnchor="middle" fontFamily="monospace">⬅ 2. ServerHello + Cert X.509 + KeyShare</text>

      {/* Step 3 */}
      <path d="M175 155 L450 155" stroke="#a855f7" strokeWidth="2" strokeDasharray="3 3" />
      <text x="320" y="150" fill="#c084fc" fontSize="8" textAnchor="middle" fontFamily="monospace">⚡ Datos HTTP Cifrados (AES-256-GCM) ➔ ⬅</text>
      <text x="320" y="180" fill={subtextColor} fontSize="8" textAnchor="middle">1 solo viaje de ida y vuelta (1-RTT) para seguridad total</text>

      {/* Server Column */}
      <rect x="470" y="52" width="140" height="140" rx="6" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="480" y="74" fill="#10b981" fontWeight="bold" fontSize="11">Servidor Web</text>
      <rect x="478" y="85" width="124" height="42" rx="3" fill={isDark ? "#022c22" : "#ffffff"} />
      <text x="484" y="102" fill="#34d399" fontSize="8" fontFamily="monospace">Certificado X.509</text>
      <text x="484" y="116" fill="#34d399" fontSize="8" fontFamily="monospace">Clave Privada RSA/EC</text>
      <text x="480" y="155" fill={textColor} fontSize="8">Deriva clave simétrica</text>
      <text x="480" y="170" fill="#10b981" fontSize="8" fontWeight="bold">Forward Secrecy</text>
    </svg>
  );
  },

  "doh-dns-over-https": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* DNS Tradicional (Inseguro) */}
      <rect x="25" y="35" width="285" height="155" rx="8" fill={isDark ? "#450a0a" : "#fef2f2"} stroke="#ef4444" strokeWidth="1.5" />
      <text x="38" y="58" fill="#ef4444" fontWeight="700" fontSize="11">DNS Tradicional (Puerto 53 UDP)</text>
      <text x="38" y="74" fill={subtextColor} fontSize="8">Sin cifrado • Texto plano vulnerable</text>
      <rect x="38" y="85" width="258" height="45" rx="4" fill={isDark ? "#1c1917" : "#ffffff"} />
      <text x="45" y="102" fill="#f87171" fontSize="8" fontFamily="monospace">Cliente ➔ ISP: &quot;¿IP de mi-banco.com?&quot;</text>
      <text x="45" y="118" fill="#fca5a5" fontSize="8" fontFamily="monospace">⚠️ Expuesto a DNS Spoofing, espionaje e ISP tracking</text>
      <text x="38" y="152" fill={textColor} fontSize="8">Cualquier router intermedio puede alterar la IP</text>
      <text x="38" y="168" fill="#ef4444" fontSize="8" fontWeight="bold">Vulnerabilidad MITM severa</text>

      {/* DoH (Cifrado) */}
      <rect x="330" y="35" width="285" height="155" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="345" y="58" fill="#10b981" fontWeight="700" fontSize="11">DNS over HTTPS (DoH - RFC 8484)</text>
      <text x="345" y="74" fill={subtextColor} fontSize="8">Puerto 443 TCP/TLS • Tráfico web indistinguible</text>
      <rect x="345" y="85" width="255" height="45" rx="4" fill={isDark ? "#022c22" : "#ffffff"} />
      <text x="352" y="102" fill="#34d399" fontSize="8" fontFamily="monospace">GET /dns-query?name=banco.com HTTP/2</text>
      <text x="352" y="118" fill="#6ee7b7" fontSize="8" fontFamily="monospace">🔒 Túnel HTTPS seguro hacia Cloudflare (1.1.1.1) / Google</text>
      <text x="345" y="152" fill={textColor} fontSize="8">El ISP solo ve una conexión HTTPS genérica</text>
      <text x="345" y="168" fill="#10b981" fontSize="8" fontWeight="bold">Privacidad total &amp; Integridad garantizada</text>
    </svg>
  );
  },

  "anycast-routing": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* Anycast Definition */}
      <text x="30" y="36" fill="#818cf8" fontWeight="700" fontSize="12">Enrutamiento Anycast (1 IP Compartida por Múltiples Servidores Globales)</text>
      
      {/* IP Box */}
      <rect x="30" y="52" width="160" height="140" rx="6" fill={isDark ? "#1e1b4b" : "#ede9fe"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="40" y="74" fill="#818cf8" fontWeight="bold" fontSize="11">IP Única Global</text>
      <rect x="38" y="85" width="144" height="32" rx="3" fill={isDark ? "#312e81" : "#ffffff"} />
      <text x="45" y="105" fill="#c7d2fe" fontSize="10" fontFamily="monospace" fontWeight="bold">1.1.1.1 / 8.8.8.8</text>
      <text x="40" y="135" fill={textColor} fontSize="8">Anunciada simultáneamente</text>
      <text x="40" y="150" fill={textColor} fontSize="8">por cientos de Data Centers</text>
      <text x="40" y="170" fill="#818cf8" fontSize="8" fontWeight="bold">Enrutamiento BGP autónomo</text>

      {/* PoPs */}
      <rect x="230" y="50" width="180" height="42" rx="4" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1" />
      <text x="240" y="68" fill="#34d399" fontSize="9" fontWeight="bold">PoP Madrid (1.1.1.1)</text>
      <text x="240" y="82" fill={textColor} fontSize="8">Atiende a usuarios de Europa (10ms)</text>

      <rect x="230" y="102" width="180" height="42" rx="4" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1" />
      <text x="240" y="120" fill="#34d399" fontSize="9" fontWeight="bold">PoP Miami (1.1.1.1)</text>
      <text x="240" y="134" fill={textColor} fontSize="8">Atiende a usuarios de América (12ms)</text>

      <rect x="230" y="154" width="180" height="42" rx="4" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1" />
      <text x="240" y="172" fill="#34d399" fontSize="9" fontWeight="bold">PoP Tokio (1.1.1.1)</text>
      <text x="240" y="186" fill={textColor} fontSize="8">Atiende a usuarios de Asia (14ms)</text>

      {/* Users Benefit */}
      <rect x="445" y="52" width="165" height="140" rx="6" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="455" y="74" fill="#3b82f6" fontWeight="bold" fontSize="11">Beneficios Clave</text>
      <text x="455" y="98" fill="#10b981" fontSize="8" fontWeight="bold">✓ Latencia mínima:</text>
      <text x="455" y="112" fill={textColor} fontSize="8">Ruta más corta según BGP</text>
      <text x="455" y="132" fill="#6366f1" fontSize="8" fontWeight="bold">✓ Alta disponibilidad:</text>
      <text x="455" y="146" fill={textColor} fontSize="8">Failover automático si cae un nodo</text>
      <text x="455" y="166" fill="#f59e0b" fontSize="8" fontWeight="bold">✓ Absorción DDoS distribuida</text>

      <path d="M192 100 L228 71" stroke="#10b981" strokeWidth="1.5" />
      <path d="M192 115 L228 123" stroke="#10b981" strokeWidth="1.5" />
      <path d="M192 130 L228 175" stroke="#10b981" strokeWidth="1.5" />
    </svg>
  );
  },

  "bgp-routing": ({ isDark, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="30" y="36" fill="#f59e0b" fontWeight="700" fontSize="12">BGP (Border Gateway Protocol) — El Pegamento de Internet</text>
      
      {/* AS 13335 */}
      <rect x="25" y="55" width="165" height="135" rx="6" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#3b82f6" strokeWidth="1.5" />
      <text x="35" y="77" fill="#3b82f6" fontWeight="700" fontSize="10">AS 13335 (Cloudflare)</text>
      <rect x="33" y="88" width="149" height="35" rx="3" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="38" y="104" fill="#60a5fa" fontSize="8" fontFamily="monospace">Anuncia Prefijo:</text>
      <text x="38" y="116" fill="#a5b4fc" fontSize="8" fontFamily="monospace">104.16.0.0/12</text>
      <text x="35" y="145" fill={subtextColor} fontSize="8">Sistema Autónomo de</text>
      <text x="35" y="160" fill="#3b82f6" fontSize="8" fontWeight="bold">Servicios Edge &amp; CDN</text>

      {/* AS 15169 */}
      <rect x="235" y="55" width="170" height="135" rx="6" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="245" y="77" fill="#818cf8" fontWeight="700" fontSize="10">AS 15169 (Google)</text>
      <rect x="243" y="88" width="154" height="35" rx="3" fill={isDark ? "#1e1b4b" : "#ffffff"} />
      <text x="248" y="104" fill="#c7d2fe" fontSize="8" fontFamily="monospace">eBGP Peering Session</text>
      <text x="248" y="116" fill="#a5b4fc" fontSize="8" fontFamily="monospace">AS-Path: [15169, 13335]</text>
      <text x="245" y="145" fill={subtextColor} fontSize="8">Intercambio de rutas óptimas</text>
      <text x="245" y="160" fill="#818cf8" fontSize="8" fontWeight="bold">Políticas de Tráfico Global</text>

      {/* AS Local */}
      <rect x="450" y="55" width="165" height="135" rx="6" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="460" y="77" fill="#10b981" fontWeight="700" fontSize="10">AS 3352 (ISP Local)</text>
      <rect x="458" y="88" width="149" height="35" rx="3" fill={isDark ? "#022c22" : "#ffffff"} />
      <text x="463" y="104" fill="#34d399" fontSize="8" fontFamily="monospace">Enruta paquetes de</text>
      <text x="463" y="116" fill="#a7f3d0" fontSize="8" fontFamily="monospace">usuarios finales</text>
      <text x="460" y="145" fill={subtextColor} fontSize="8">Aprende la ruta más corta</text>
      <text x="460" y="160" fill="#10b981" fontSize="8" fontWeight="bold">Conectividad mundial</text>

      <path d="M192 110 L232 110" stroke="#6366f1" strokeWidth="2" strokeDasharray="3 3" />
      <path d="M407 110 L447 110" stroke="#10b981" strokeWidth="2" strokeDasharray="3 3" />
    </svg>
  );
  },

  "quic-protocol-stack": ({ isDark, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      {/* Traditional Stack */}
      <rect x="25" y="35" width="285" height="155" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="40" y="58" fill="#818cf8" fontWeight="700" fontSize="11">Pila Tradicional (HTTP/2)</text>
      <rect x="40" y="68" width="255" height="22" rx="3" fill={isDark ? "#312e81" : "#ffffff"} />
      <text x="48" y="83" fill="#a5b4fc" fontSize="8" fontWeight="bold">HTTP/2 (Aplicación)</text>
      <rect x="40" y="93" width="255" height="22" rx="3" fill={isDark ? "#1e1b4b" : "#ffffff"} />
      <text x="48" y="108" fill="#c7d2fe" fontSize="8">TLS 1.2 / 1.3 (Capa separada de seguridad)</text>
      <rect x="40" y="118" width="255" height="22" rx="3" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="48" y="133" fill="#f87171" fontSize="8">TCP (Espacio del Kernel — Difícil de actualizar)</text>
      <text x="40" y="162" fill={subtextColor} fontSize="8">Bloqueo de cabeza de línea ante pérdidas en red</text>
      <text x="40" y="176" fill="#ef4444" fontSize="8" fontWeight="bold">Conexión atada a IP:puerto (rompe al cambiar a 4G/5G)</text>

      {/* QUIC Stack */}
      <rect x="330" y="35" width="285" height="155" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="345" y="58" fill="#10b981" fontWeight="700" fontSize="11">Pila Moderna QUIC (HTTP/3)</text>
      <rect x="345" y="68" width="255" height="22" rx="3" fill={isDark ? "#065f46" : "#ffffff"} />
      <text x="353" y="83" fill="#6ee7b7" fontSize="8" fontWeight="bold">HTTP/3 (QPACK Framing)</text>
      <rect x="345" y="93" width="255" height="34" rx="3" fill={isDark ? "#022c22" : "#ffffff"} />
      <text x="353" y="108" fill="#34d399" fontSize="8" fontWeight="bold">QUIC (Transporte + TLS 1.3 Integrado en User-Space)</text>
      <text x="353" y="122" fill="#a7f3d0" fontSize="7">Control de congestión independiente por cada stream</text>
      <rect x="345" y="130" width="255" height="20" rx="3" fill={isDark ? "#064e3b" : "#ffffff"} />
      <text x="353" y="144" fill="#a7f3d0" fontSize="8">UDP (Datagramas ultrarrápidos)</text>
      <text x="345" y="168" fill="#10b981" fontSize="8" fontWeight="bold">Connection ID: Migración transparente Wi-Fi ➔ Móvil</text>
    </svg>
  );
  },

  "mtls-zero-trust": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      <text x="30" y="36" fill="#8b5cf6" fontWeight="700" fontSize="12">mTLS (Mutual TLS) — Autenticación Criptográfica Bidireccional Zero-Trust</text>
      
      {/* Client microservice */}
      <rect x="25" y="52" width="170" height="140" rx="6" fill={isDark ? "#1e1b4b" : "#ede9fe"} stroke="#8b5cf6" strokeWidth="1.5" />
      <text x="35" y="74" fill="#8b5cf6" fontWeight="bold" fontSize="10">Microservicio / Cliente</text>
      <rect x="33" y="85" width="154" height="42" rx="3" fill={isDark ? "#312e81" : "#ffffff"} />
      <text x="38" y="102" fill="#c4b5fd" fontSize="7" fontFamily="monospace">Certificado X.509 de Cliente</text>
      <text x="38" y="116" fill="#a5b4fc" fontSize="7" fontFamily="monospace">+ Clave Privada de Cliente</text>
      <text x="35" y="145" fill={textColor} fontSize="8">Verifica el certificado del</text>
      <text x="35" y="160" fill="#8b5cf6" fontSize="8" fontWeight="bold">servidor contra CA de confianza</text>

      {/* Verification Arrows */}
      <rect x="215" y="52" width="210" height="140" rx="6" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#6366f1" strokeWidth="1" />
      <path d="M225 80 L415 80" stroke="#3b82f6" strokeWidth="1.5" />
      <text x="320" y="74" fill="#60a5fa" fontSize="8" textAnchor="middle" fontFamily="monospace">1. Cliente envía Certificado ➔</text>
      
      <path d="M415 110 L225 110" stroke="#10b981" strokeWidth="1.5" />
      <text x="320" y="104" fill="#34d399" fontSize="8" textAnchor="middle" fontFamily="monospace">⬅ 2. Servidor envía Certificado</text>

      <rect x="225" y="125" width="190" height="45" rx="4" fill={isDark ? "#0f172a" : "#ffffff"} />
      <text x="232" y="143" fill="#34d399" fontSize="8" fontWeight="bold">✓ Cifrado + Doble Identidad Validada</text>
      <text x="232" y="157" fill={textColor} fontSize="8">Ninguna parte confía sin credenciales</text>

      {/* Server microservice */}
      <rect x="445" y="52" width="170" height="140" rx="6" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="455" y="74" fill="#10b981" fontWeight="bold" fontSize="10">API Interna / Servidor</text>
      <rect x="453" y="85" width="154" height="42" rx="3" fill={isDark ? "#022c22" : "#ffffff"} />
      <text x="458" y="102" fill="#6ee7b7" fontSize="7" fontFamily="monospace">Certificado X.509 de Servidor</text>
      <text x="458" y="116" fill="#a7f3d0" fontSize="7" fontFamily="monospace">+ Clave Privada de Servidor</text>
      <text x="455" y="145" fill={textColor} fontSize="8">Verifica el certificado del</text>
      <text x="455" y="160" fill="#10b981" fontSize="8" fontWeight="bold">cliente contra CA corporativa</text>
    </svg>
  );
  }
};
