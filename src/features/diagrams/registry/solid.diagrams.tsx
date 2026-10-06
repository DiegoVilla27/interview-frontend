import { DiagramRegistry } from "../diagram.types";

/** Diagramas SVG del módulo SOLID. */
export const solidDiagrams: DiagramRegistry = {
  "solid-overview-pentagon": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#0f172a" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* 5 Pillars */}
      <rect x="25" y="35" width="110" height="150" rx="8" fill={isDark ? "#1e293b" : "#e0f2fe"} stroke="#0284c7" strokeWidth="1.5" />
      <text x="80" y="60" fill="#0284c7" fontWeight="bold" fontSize="16" textAnchor="middle">S</text>
      <text x="80" y="80" fill="#0284c7" fontWeight="bold" fontSize="8" textAnchor="middle">Single Resp.</text>
      <text x="80" y="110" fill={textColor} fontSize="7" textAnchor="middle">Una sola razón</text>
      <text x="80" y="125" fill={textColor} fontSize="7" textAnchor="middle">para cambiar</text>
      <text x="80" y="165" fill="#0284c7" fontSize="7" fontWeight="bold" textAnchor="middle">Alta Cohesión</text>

      <rect x="145" y="35" width="110" height="150" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="200" y="60" fill="#10b981" fontWeight="bold" fontSize="16" textAnchor="middle">O</text>
      <text x="200" y="80" fill="#10b981" fontWeight="bold" fontSize="8" textAnchor="middle">Open / Closed</text>
      <text x="200" y="110" fill={textColor} fontSize="7" textAnchor="middle">Abierto extensión</text>
      <text x="200" y="125" fill={textColor} fontSize="7" textAnchor="middle">Cerrado modif.</text>
      <text x="200" y="165" fill="#10b981" fontSize="7" fontWeight="bold" textAnchor="middle">Polimorfismo</text>

      <rect x="265" y="35" width="110" height="150" rx="8" fill={isDark ? "#431407" : "#fff7ed"} stroke="#f97316" strokeWidth="1.5" />
      <text x="320" y="60" fill="#f97316" fontWeight="bold" fontSize="16" textAnchor="middle">L</text>
      <text x="320" y="80" fill="#f97316" fontWeight="bold" fontSize="8" textAnchor="middle">Liskov Subst.</text>
      <text x="320" y="110" fill={textColor} fontSize="7" textAnchor="middle">Subtipos deben</text>
      <text x="320" y="125" fill={textColor} fontSize="7" textAnchor="middle">respetar contratos</text>
      <text x="320" y="165" fill="#f97316" fontSize="7" fontWeight="bold" textAnchor="middle">Correctitud</text>

      <rect x="385" y="35" width="110" height="150" rx="8" fill={isDark ? "#1e1e38" : "#e0e7ff"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="440" y="60" fill="#818cf8" fontWeight="bold" fontSize="16" textAnchor="middle">I</text>
      <text x="440" y="80" fill="#818cf8" fontWeight="bold" fontSize="8" textAnchor="middle">Interface Segr.</text>
      <text x="440" y="110" fill={textColor} fontSize="7" textAnchor="middle">Interfaces chicas</text>
      <text x="440" y="125" fill={textColor} fontSize="7" textAnchor="middle">y específicas</text>
      <text x="440" y="165" fill="#818cf8" fontSize="7" fontWeight="bold" textAnchor="middle">Cero Grasa</text>

      <rect x="505" y="35" width="110" height="150" rx="8" fill={isDark ? "#311042" : "#fdf4ff"} stroke="#c084fc" strokeWidth="1.5" />
      <text x="560" y="60" fill="#c084fc" fontWeight="bold" fontSize="16" textAnchor="middle">D</text>
      <text x="560" y="80" fill="#c084fc" fontWeight="bold" fontSize="8" textAnchor="middle">Dep. Inversion</text>
      <text x="560" y="110" fill={textColor} fontSize="7" textAnchor="middle">Depender de</text>
      <text x="560" y="125" fill={textColor} fontSize="7" textAnchor="middle">abstracciones</text>
      <text x="560" y="165" fill="#c084fc" fontSize="7" fontWeight="bold" textAnchor="middle">Desacoplamiento</text>
    </svg>
  );
  },

  "solid-srp-single-responsibility": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Violación SRP */}
      <rect x="30" y="30" width="270" height="160" rx="8" fill={isDark ? "#450a0a" : "#fef2f2"} stroke="#ef4444" strokeWidth="1.5" />
      <text x="165" y="52" fill="#ef4444" fontWeight="bold" fontSize="10" textAnchor="middle">❌ Violación: Componente Monolítico</text>
      <rect x="45" y="65" width="240" height="85" rx="4" fill={isDark ? "#1e293b" : "#fff"} />
      <text x="165" y="82" fill="#ef4444" fontSize="8" fontFamily="monospace" textAnchor="middle">UserProfile.tsx (4 Razones para cambiar)</text>
      <text x="165" y="100" fill={textColor} fontSize="7" textAnchor="middle">• Petición HTTP directa (fetch / axios)</text>
      <text x="165" y="115" fill={textColor} fontSize="7" textAnchor="middle">• Validación y estado de formulario</text>
      <text x="165" y="130" fill={textColor} fontSize="7" textAnchor="middle">• Formateo de fechas e internacionalización</text>
      <text x="165" y="145" fill={textColor} fontSize="7" textAnchor="middle">• Renderizado de JSX y estilos Tailwind</text>
      <text x="165" y="175" fill="#ef4444" fontSize="8" fontWeight="bold" textAnchor="middle">Cualquier cambio de negocio rompe el archivo</text>

      {/* Aplicación SRP */}
      <rect x="340" y="30" width="270" height="160" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="475" y="52" fill="#10b981" fontWeight="bold" fontSize="10" textAnchor="middle">✅ SRP: Responsabilidad Única Modular</text>
      <rect x="355" y="65" width="240" height="20" rx="3" fill={isDark ? "#065f46" : "#fff"} />
      <text x="475" y="79" fill="#10b981" fontSize="8" textAnchor="middle">1. userApi.ts ➔ Solo llamadas de red</text>
      <rect x="355" y="90" width="240" height="20" rx="3" fill={isDark ? "#065f46" : "#fff"} />
      <text x="475" y="104" fill="#10b981" fontSize="8" textAnchor="middle">2. useUserForm.ts ➔ Solo estado y validación</text>
      <rect x="355" y="115" width="240" height="20" rx="3" fill={isDark ? "#065f46" : "#fff"} />
      <text x="475" y="129" fill="#10b981" fontSize="8" textAnchor="middle">3. formatters.ts ➔ Funciones puras de fechas</text>
      <rect x="355" y="140" width="240" height="20" rx="3" fill={isDark ? "#065f46" : "#fff"} />
      <text x="475" y="154" fill="#10b981" fontSize="8" textAnchor="middle">4. UserProfileView.tsx ➔ Solo renderizado JSX</text>
      <text x="475" y="178" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">1 actor, 1 razón de cambio por módulo</text>
    </svg>
  );
  },

  "solid-ocp-open-closed": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Base Dispatcher (Closed for modification) */}
      <rect x="30" y="55" width="200" height="110" rx="8" fill={isDark ? "#1e293b" : "#e0e7ff"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="130" y="80" fill="#818cf8" fontWeight="bold" fontSize="10" textAnchor="middle">NotificationDispatcher</text>
      <rect x="45" y="95" width="170" height="35" rx="4" fill={isDark ? "#18182b" : "#fff"} />
      <text x="130" y="112" fill={textColor} fontSize="8" textAnchor="middle">dispatch(strategy, msg)</text>
      <text x="130" y="124" fill="#818cf8" fontSize="7" textAnchor="middle">strategy.send(msg)</text>
      <text x="130" y="152" fill="#818cf8" fontSize="8" fontWeight="bold" textAnchor="middle">🔒 CERRADO para modificación</text>

      <path d="M230 110 L300 110" stroke="#10b981" strokeWidth="2" />
      <text x="265" y="102" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">Extiende</text>

      {/* Strategies (Open for extension) */}
      <rect x="300" y="25" width="310" height="170" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="455" y="48" fill="#10b981" fontWeight="bold" fontSize="10" textAnchor="middle">🔓 ABIERTO para extensión (Polimorfismo)</text>
      
      <rect x="320" y="60" width="270" height="28" rx="4" fill={isDark ? "#065f46" : "#fff"} />
      <text x="455" y="78" fill="#10b981" fontSize="8" textAnchor="middle">class EmailNotification implements INotificationStrategy</text>
      
      <rect x="320" y="95" width="270" height="28" rx="4" fill={isDark ? "#065f46" : "#fff"} />
      <text x="455" y="113" fill="#10b981" fontSize="8" textAnchor="middle">class SlackNotification implements INotificationStrategy</text>
      
      <rect x="320" y="130" width="270" height="28" rx="4" fill={isDark ? "#065f46" : "#fff"} />
      <text x="455" y="148" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle">✨ NUEVO: class WhatsAppNotification (0 cambios en core)</text>
      
      <text x="455" y="180" fill={textColor} fontSize="8" textAnchor="middle">Se añade nuevo canal sin alterar el código existente</text>
    </svg>
  );
  },

  "solid-lsp-liskov-substitution": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Base Type */}
      <rect x="220" y="25" width="200" height="48" rx="6" fill={isDark ? "#1e293b" : "#e0e7ff"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="320" y="45" fill="#818cf8" fontWeight="bold" fontSize="10" textAnchor="middle">Tipo Base: T</text>
      <text x="320" y="60" fill={textColor} fontSize="8" textAnchor="middle">Contrato: process(data) ➔ Promise&lt;Result&gt;</text>

      <path d="M270 73 L180 105" stroke="#ef4444" strokeWidth="1.5" />
      <path d="M370 73 L460 105" stroke="#10b981" strokeWidth="1.5" />

      {/* Subtype S1 - Violation */}
      <rect x="40" y="105" width="260" height="90" rx="8" fill={isDark ? "#450a0a" : "#fef2f2"} stroke="#ef4444" strokeWidth="1.5" />
      <text x="170" y="125" fill="#ef4444" fontWeight="bold" fontSize="9" textAnchor="middle">❌ Subtipo S1 (Viola LSP)</text>
      <text x="170" y="145" fill={textColor} fontSize="7" textAnchor="middle">• Lanza excepción no esperada por el cliente</text>
      <text x="170" y="160" fill={textColor} fontSize="7" textAnchor="middle">• Exige precondiciones más estrictas</text>
      <text x="170" y="180" fill="#ef4444" fontSize="8" fontWeight="bold" textAnchor="middle">Rompe el programa al sustituir a T</text>

      {/* Subtype S2 - Compliant */}
      <rect x="340" y="105" width="260" height="90" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="470" y="125" fill="#10b981" fontWeight="bold" fontSize="9" textAnchor="middle">✅ Subtipo S2 (Cumple LSP)</text>
      <text x="470" y="145" fill={textColor} fontSize="7" textAnchor="middle">• Mantiene todas las invariantes de T</text>
      <text x="470" y="160" fill={textColor} fontSize="7" textAnchor="middle">• Debilita precondiciones o fortalece postcondiciones</text>
      <text x="470" y="180" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">Sustitución transparente garantizada</text>
    </svg>
  );
  },

  "solid-isp-interface-segregation": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Fat Interface */}
      <rect x="30" y="30" width="260" height="160" rx="8" fill={isDark ? "#450a0a" : "#fef2f2"} stroke="#ef4444" strokeWidth="1.5" />
      <text x="160" y="52" fill="#ef4444" fontWeight="bold" fontSize="10" textAnchor="middle">❌ Interfaz Monolítica (&apos;Fat Interface&apos;)</text>
      <rect x="45" y="65" width="230" height="80" rx="4" fill={isDark ? "#1e293b" : "#fff"} />
      <text x="160" y="82" fill="#ef4444" fontSize="8" fontFamily="monospace" textAnchor="middle">interface IUniversalWorker &#123;</text>
      <text x="160" y="96" fill={textColor} fontSize="7" fontFamily="monospace" textAnchor="middle">  work(): void;</text>
      <text x="160" y="108" fill={textColor} fontSize="7" fontFamily="monospace" textAnchor="middle">  eat(): void;</text>
      <text x="160" y="120" fill={textColor} fontSize="7" fontFamily="monospace" textAnchor="middle">  sleep(): void;</text>
      <text x="160" y="132" fill={textColor} fontSize="7" fontFamily="monospace" textAnchor="middle">  writeCode(): void;</text>
      <text x="160" y="142" fill={textColor} fontSize="7" fontFamily="monospace" textAnchor="middle">&#125;</text>
      <text x="160" y="175" fill="#ef4444" fontSize="8" fontWeight="bold" textAnchor="middle">Un RobotWorker se ve forzado a implementar eat()</text>

      {/* Segregated Interfaces */}
      <rect x="330" y="30" width="280" height="160" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="470" y="52" fill="#10b981" fontWeight="bold" fontSize="10" textAnchor="middle">✅ Interfaces Segregadas por Rol</text>
      
      <rect x="345" y="65" width="120" height="35" rx="3" fill={isDark ? "#065f46" : "#fff"} />
      <text x="405" y="80" fill="#10b981" fontSize="7" fontWeight="bold" textAnchor="middle">interface IWorkable</text>
      <text x="405" y="93" fill={textColor} fontSize="7" textAnchor="middle">work(): void</text>

      <rect x="475" y="65" width="120" height="35" rx="3" fill={isDark ? "#065f46" : "#fff"} />
      <text x="535" y="80" fill="#10b981" fontSize="7" fontWeight="bold" textAnchor="middle">interface IEatable</text>
      <text x="535" y="93" fill={textColor} fontSize="7" textAnchor="middle">eat(): void</text>

      <rect x="345" y="110" width="250" height="40" rx="3" fill={isDark ? "#065f46" : "#fff"} />
      <text x="470" y="126" fill="#fff" fontSize="8" textAnchor="middle">class Robot implements IWorkable</text>
      <text x="470" y="142" fill="#a7f3d0" fontSize="7" textAnchor="middle">Solo implementa los métodos que realmente usa</text>

      <text x="470" y="178" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">Cero acoplamiento a métodos irrelevantes</text>
    </svg>
  );
  },

  "solid-dip-dependency-inversion": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* High Level Module */}
      <rect x="40" y="70" width="170" height="80" rx="8" fill={isDark ? "#1e293b" : "#e0e7ff"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="125" y="95" fill="#818cf8" fontWeight="bold" fontSize="10" textAnchor="middle">Módulo Alto Nivel</text>
      <text x="125" y="115" fill={textColor} fontSize="8" textAnchor="middle">CheckoutService</text>
      <text x="125" y="135" fill="#818cf8" fontSize="7" fontWeight="bold" textAnchor="middle">Reglas de Negocio</text>

      {/* Abstraction in Middle */}
      <path d="M210 110 L255 110" stroke="#10b981" strokeWidth="2" />
      
      <rect x="255" y="55" width="150" height="110" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="2" />
      <text x="330" y="80" fill="#10b981" fontWeight="bold" fontSize="10" textAnchor="middle">ABSTRACCIÓN</text>
      <rect x="270" y="95" width="120" height="35" rx="4" fill={isDark ? "#065f46" : "#fff"} />
      <text x="330" y="112" fill="#10b981" fontSize="8" fontFamily="monospace" textAnchor="middle">IPaymentGateway</text>
      <text x="330" y="124" fill={textColor} fontSize="7" textAnchor="middle">pay(amount): Promise</text>
      <text x="330" y="152" fill="#10b981" fontSize="7" fontWeight="bold" textAnchor="middle">Contrato Estable</text>

      {/* Low Level Implementation */}
      <path d="M445 110 L405 110" stroke="#10b981" strokeWidth="2" />
      
      <rect x="445" y="55" width="165" height="110" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#64748b" strokeWidth="1.5" />
      <text x="527" y="80" fill="#94a3b8" fontWeight="bold" fontSize="10" textAnchor="middle">Módulo Bajo Nivel</text>
      <rect x="455" y="95" width="145" height="45" rx="4" fill={isDark ? "#0f172a" : "#fff"} />
      <text x="527" y="112" fill={textColor} fontSize="8" textAnchor="middle">StripeGateway</text>
      <text x="527" y="128" fill={textColor} fontSize="8" textAnchor="middle">PayPalGateway</text>
      <text x="527" y="152" fill="#94a3b8" fontSize="7" fontWeight="bold" textAnchor="middle">Detalle Tecnológico</text>
    </svg>
  );
  },

  "solid-srp-react-hooks-services": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* View */}
      <rect x="30" y="40" width="165" height="140" rx="8" fill={isDark ? "#1e293b" : "#e0f2fe"} stroke="#0284c7" strokeWidth="1.5" />
      <text x="112" y="65" fill="#0284c7" fontWeight="bold" fontSize="10" textAnchor="middle">1. Vista (Presentación)</text>
      <text x="112" y="85" fill={textColor} fontSize="8" textAnchor="middle">UserProfileView.tsx</text>
      <text x="112" y="115" fill={textColor} fontSize="7" textAnchor="middle">• Renderiza JSX / HTML</text>
      <text x="112" y="130" fill={textColor} fontSize="7" textAnchor="middle">• Dispara callbacks de UI</text>
      <text x="112" y="165" fill="#0284c7" fontSize="8" fontWeight="bold" textAnchor="middle">Cero lógica de datos</text>

      <path d="M195 110 L235 110" stroke="#6366f1" strokeWidth="2" />

      {/* Custom Hook */}
      <rect x="235" y="40" width="170" height="140" rx="8" fill={isDark ? "#1e1e38" : "#e0e7ff"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="320" y="65" fill="#818cf8" fontWeight="bold" fontSize="10" textAnchor="middle">2. Hook (Estado)</text>
      <text x="320" y="85" fill={textColor} fontSize="8" textAnchor="middle">useUserProfile.ts</text>
      <text x="320" y="115" fill={textColor} fontSize="7" textAnchor="middle">• TanStack Query / useState</text>
      <text x="320" y="130" fill={textColor} fontSize="7" textAnchor="middle">• Maneja loading y error</text>
      <text x="320" y="165" fill="#818cf8" fontSize="8" fontWeight="bold" textAnchor="middle">Cero marcado JSX</text>

      <path d="M405 110 L445 110" stroke="#10b981" strokeWidth="2" />

      {/* Service */}
      <rect x="445" y="40" width="165" height="140" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="527" y="65" fill="#10b981" fontWeight="bold" fontSize="10" textAnchor="middle">3. Servicio (Infraestructura)</text>
      <text x="527" y="85" fill={textColor} fontSize="8" textAnchor="middle">userApiService.ts</text>
      <text x="527" y="115" fill={textColor} fontSize="7" textAnchor="middle">• Peticiones fetch / Axios</text>
      <text x="527" y="130" fill={textColor} fontSize="7" textAnchor="middle">• Serialización de DTOs</text>
      <text x="527" y="165" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">Cero estado de React</text>
    </svg>
  );
  },

  "solid-ocp-ui-polymorphic-composition": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Bad: Flag Soup */}
      <rect x="30" y="30" width="270" height="160" rx="8" fill={isDark ? "#450a0a" : "#fef2f2"} stroke="#ef4444" strokeWidth="1.5" />
      <text x="165" y="52" fill="#ef4444" fontWeight="bold" fontSize="10" textAnchor="middle">❌ Anti-patrón: Sopa de Flags Modificables</text>
      <rect x="45" y="65" width="240" height="85" rx="4" fill={isDark ? "#1e293b" : "#fff"} />
      <text x="165" y="83" fill="#ef4444" fontSize="7" fontFamily="monospace" textAnchor="middle">&lt;Button isRound isRed withIcon isGoogle ... /&gt;</text>
      <text x="165" y="105" fill={textColor} fontSize="7" textAnchor="middle">Cada variante requiere modificar el código interno</text>
      <text x="165" y="120" fill={textColor} fontSize="7" textAnchor="middle">del componente Button con nuevos ifs condicionales.</text>
      <text x="165" y="140" fill="#ef4444" fontSize="8" fontWeight="bold" textAnchor="middle">Riesgo continuo de regresión en UI</text>

      {/* Good: Composition */}
      <rect x="340" y="30" width="270" height="160" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="475" y="52" fill="#10b981" fontWeight="bold" fontSize="10" textAnchor="middle">✅ OCP: Composición y Slot Pattern</text>
      <rect x="355" y="65" width="240" height="85" rx="4" fill={isDark ? "#065f46" : "#fff"} />
      <text x="475" y="83" fill="#10b981" fontSize="7" fontFamily="monospace" textAnchor="middle">&lt;Button asChild variant=&apos;outline&apos;&gt;</text>
      <text x="475" y="98" fill="#fff" fontSize="7" fontFamily="monospace" textAnchor="middle">  &lt;Link href=&apos;/home&apos;&gt;&lt;Icon /&gt; Ir&lt;/Link&gt;</text>
      <text x="475" y="113" fill="#10b981" fontSize="7" fontFamily="monospace" textAnchor="middle">&lt;/Button&gt;</text>
      <text x="475" y="135" fill={textColor} fontSize="7" textAnchor="middle">Extensible con cualquier hijo o elemento HTML</text>
      <text x="475" y="175" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">Cerrado a modificaciones, abierto a slots</text>
    </svg>
  );
  },

  "solid-lsp-rectangle-square-violation": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Rectangle Base */}
      <rect x="30" y="30" width="270" height="160" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#38bdf8" strokeWidth="1.5" />
      <text x="165" y="52" fill="#38bdf8" fontWeight="bold" fontSize="10" textAnchor="middle">Clase Base: Rectangle</text>
      <rect x="100" y="65" width="130" height="60" rx="4" fill={isDark ? "#0f172a" : "#e0f2fe"} stroke="#38bdf8" strokeWidth="1" />
      <text x="165" y="98" fill={textColor} fontSize="8" textAnchor="middle">w = 5, h = 4 ➔ Área = 20</text>
      <text x="165" y="145" fill={textColor} fontSize="7" textAnchor="middle">Invariante esperada por el cliente:</text>
      <text x="165" y="160" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle">setWidth(x) NO muta el alto (h)</text>

      {/* Square Derived */}
      <rect x="340" y="30" width="270" height="160" rx="8" fill={isDark ? "#450a0a" : "#fef2f2"} stroke="#ef4444" strokeWidth="1.5" />
      <text x="475" y="52" fill="#ef4444" fontWeight="bold" fontSize="10" textAnchor="middle">❌ Derivada: Square (Rompe LSP)</text>
      <rect x="435" y="65" width="80" height="80" rx="4" fill={isDark ? "#1e293b" : "#fee2e2"} stroke="#ef4444" strokeWidth="1" />
      <text x="475" y="108" fill="#ef4444" fontSize="8" textAnchor="middle">w = 5, h = 5</text>
      <text x="475" y="155" fill={textColor} fontSize="7" textAnchor="middle">setWidth(5) muta h a 5 forzosamente.</text>
      <text x="475" y="175" fill="#ef4444" fontSize="8" fontWeight="bold" textAnchor="middle">Área esperada: 20 | Área real: 25 (BUG)</text>
    </svg>
  );
  },

  "solid-isp-typescript-role-interfaces": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Fat Model */}
      <rect x="30" y="30" width="260" height="160" rx="8" fill={isDark ? "#450a0a" : "#fef2f2"} stroke="#ef4444" strokeWidth="1.5" />
      <text x="160" y="52" fill="#ef4444" fontWeight="bold" fontSize="10" textAnchor="middle">❌ Interfaz Monolítica de Backend</text>
      <rect x="45" y="65" width="230" height="85" rx="4" fill={isDark ? "#1e293b" : "#fff"} />
      <text x="160" y="82" fill="#ef4444" fontSize="8" fontFamily="monospace" textAnchor="middle">interface UserAccount (60 campos)</text>
      <text x="160" y="98" fill={textColor} fontSize="7" textAnchor="middle">id, email, passwordHash, ssn, billingDetails...</text>
      <text x="160" y="125" fill={textColor} fontSize="7" textAnchor="middle">Pasar `user: UserAccount` a un Avatar</text>
      <text x="160" y="140" fill={textColor} fontSize="7" textAnchor="middle">causa re-renders por campos no usados.</text>
      <text x="160" y="175" fill="#ef4444" fontSize="8" fontWeight="bold" textAnchor="middle">Acoplamiento tóxico a toda la entidad</text>

      {/* Segregated Pick Props */}
      <rect x="330" y="30" width="280" height="160" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="470" y="52" fill="#10b981" fontWeight="bold" fontSize="10" textAnchor="middle">✅ Role Props Segregadas en TypeScript</text>
      <rect x="345" y="65" width="250" height="40" rx="4" fill={isDark ? "#065f46" : "#fff"} />
      <text x="470" y="82" fill="#10b981" fontSize="7" fontFamily="monospace" textAnchor="middle">type AvatarProps = Pick&lt;UserAccount, &apos;name&apos; | &apos;avatarUrl&apos;&gt;;</text>
      <text x="470" y="96" fill="#fff" fontSize="7" textAnchor="middle">El componente solo pide lo que va a pintar</text>
      <text x="470" y="125" fill={textColor} fontSize="7" textAnchor="middle">• Fácil de mockear en pruebas unitarias</text>
      <text x="470" y="140" fill={textColor} fontSize="7" textAnchor="middle">• Cero re-render si cambia el billingAddress</text>
      <text x="470" y="175" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">Componentes puros con contratos mínimos</text>
    </svg>
  );
  },

  "solid-dip-vs-di-vs-ioc-matrix": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* DIP */}
      <rect x="30" y="30" width="175" height="160" rx="8" fill={isDark ? "#1e293b" : "#e0f2fe"} stroke="#0284c7" strokeWidth="1.5" />
      <text x="117" y="55" fill="#0284c7" fontWeight="bold" fontSize="11" textAnchor="middle">DIP (El Principio)</text>
      <text x="117" y="75" fill={textColor} fontSize="8" textAnchor="middle">Dependency Inversion</text>
      <rect x="45" y="90" width="145" height="40" rx="4" fill={isDark ? "#0f172a" : "#fff"} />
      <text x="117" y="107" fill="#0284c7" fontSize="7" textAnchor="middle">Regla Arquitectónica:</text>
      <text x="117" y="120" fill={textColor} fontSize="7" textAnchor="middle">Depender de abstracciones</text>
      <text x="117" y="150" fill={textColor} fontSize="7" textAnchor="middle">Define QUÉ debe hacerse</text>
      <text x="117" y="175" fill="#0284c7" fontSize="8" fontWeight="bold" textAnchor="middle">Regla Teórica SOLID</text>

      {/* IoC */}
      <rect x="230" y="30" width="180" height="160" rx="8" fill={isDark ? "#1e1e38" : "#e0e7ff"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="320" y="55" fill="#818cf8" fontWeight="bold" fontSize="11" textAnchor="middle">IoC (El Concepto)</text>
      <text x="320" y="75" fill={textColor} fontSize="8" textAnchor="middle">Inversion of Control</text>
      <rect x="245" y="90" width="150" height="40" rx="4" fill={isDark ? "#18182b" : "#fff"} />
      <text x="320" y="107" fill="#818cf8" fontSize="7" textAnchor="middle">Hollywood Principle:</text>
      <text x="320" y="120" fill={textColor} fontSize="7" textAnchor="middle">&apos;Don&apos;t call us, we call you&apos;</text>
      <text x="320" y="150" fill={textColor} fontSize="7" textAnchor="middle">El framework controla el flujo</text>
      <text x="320" y="175" fill="#818cf8" fontSize="8" fontWeight="bold" textAnchor="middle">Patrón Arquitectónico</text>

      {/* DI */}
      <rect x="435" y="30" width="175" height="160" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="522" y="55" fill="#10b981" fontWeight="bold" fontSize="11" textAnchor="middle">DI (El Mecanismo)</text>
      <text x="522" y="75" fill={textColor} fontSize="8" textAnchor="middle">Dependency Injection</text>
      <rect x="450" y="90" width="145" height="40" rx="4" fill={isDark ? "#065f46" : "#fff"} />
      <text x="522" y="107" fill="#10b981" fontSize="7" textAnchor="middle">Inyección Concreta:</text>
      <text x="522" y="120" fill={textColor} fontSize="7" textAnchor="middle">Pasar dependencias vía props</text>
      <text x="522" y="150" fill={textColor} fontSize="7" textAnchor="middle">Técnica de CÓMO pasarlo</text>
      <text x="522" y="175" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">Implementación en Código</text>
    </svg>
  );
  },

  "solid-ocp-strategy-factory-pattern": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Client Checkout */}
      <rect x="30" y="70" width="140" height="80" rx="8" fill={isDark ? "#1e293b" : "#e0f2fe"} stroke="#0284c7" strokeWidth="1.5" />
      <text x="100" y="95" fill="#0284c7" fontWeight="bold" fontSize="10" textAnchor="middle">CheckoutFlow</text>
      <text x="100" y="115" fill={textColor} fontSize="7" textAnchor="middle">strategy.process(cart)</text>
      <text x="100" y="135" fill="#0284c7" fontSize="7" fontWeight="bold" textAnchor="middle">0 if/else de pago</text>

      <path d="M170 110 L210 110" stroke="#6366f1" strokeWidth="2" />

      {/* Factory */}
      <rect x="210" y="55" width="150" height="110" rx="8" fill={isDark ? "#1e1e38" : "#e0e7ff"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="285" y="80" fill="#818cf8" fontWeight="bold" fontSize="10" textAnchor="middle">PaymentFactory</text>
      <text x="285" y="100" fill={textColor} fontSize="7" textAnchor="middle">create(method: PaymentType)</text>
      <rect x="225" y="115" width="120" height="35" rx="4" fill={isDark ? "#18182b" : "#fff"} />
      <text x="285" y="132" fill="#818cf8" fontSize="7" textAnchor="middle">Lookup Map O(1)</text>
      <text x="285" y="144" fill={textColor} fontSize="6" textAnchor="middle">retorna Strategy instanciada</text>

      <path d="M360 110 L400 110" stroke="#10b981" strokeWidth="2" />

      {/* Strategies */}
      <rect x="400" y="30" width="210" height="160" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="505" y="50" fill="#10b981" fontWeight="bold" fontSize="9" textAnchor="middle">Estrategias Polimórficas (OCP)</text>
      <rect x="415" y="62" width="180" height="24" rx="3" fill={isDark ? "#065f46" : "#fff"} />
      <text x="505" y="78" fill="#10b981" fontSize="7" textAnchor="middle">CreditCardStrategy</text>
      <rect x="415" y="92" width="180" height="24" rx="3" fill={isDark ? "#065f46" : "#fff"} />
      <text x="505" y="108" fill="#10b981" fontSize="7" textAnchor="middle">CryptoStrategy</text>
      <rect x="415" y="122" width="180" height="24" rx="3" fill={isDark ? "#065f46" : "#fff"} />
      <text x="505" y="138" fill="#38bdf8" fontSize="7" fontWeight="bold" textAnchor="middle">ApplePayStrategy (Extensible)</text>
      <text x="505" y="175" fill={textColor} fontSize="7" textAnchor="middle">Añadir método = Registrar en Map</text>
    </svg>
  );
  },

  "solid-god-object-refactoring": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Monster God Object */}
      <rect x="30" y="30" width="240" height="160" rx="8" fill={isDark ? "#450a0a" : "#fef2f2"} stroke="#ef4444" strokeWidth="1.5" />
      <text x="150" y="55" fill="#ef4444" fontWeight="bold" fontSize="10" textAnchor="middle">☠️ God Component (1,800 líneas)</text>
      <rect x="45" y="70" width="210" height="90" rx="4" fill={isDark ? "#1e293b" : "#fff"} />
      <text x="150" y="90" fill="#ef4444" fontSize="8" fontFamily="monospace" textAnchor="middle">AdminDashboard.tsx</text>
      <text x="150" y="108" fill={textColor} fontSize="7" textAnchor="middle">• Maneja 24 useStates globales</text>
      <text x="150" y="122" fill={textColor} fontSize="7" textAnchor="middle">• 8 peticiones fetch mezcladas</text>
      <text x="150" y="136" fill={textColor} fontSize="7" textAnchor="middle">• Modales, tablas y charts en un solo return</text>
      <text x="150" y="175" fill="#ef4444" fontSize="8" fontWeight="bold" textAnchor="middle">Imposible de testear o refactorizar</text>

      <path d="M270 110 L330 110" stroke="#10b981" strokeWidth="2" />
      <text x="300" y="102" fill="#10b981" fontSize="7" fontWeight="bold" textAnchor="middle">SOLID</text>

      {/* Refactored Architecture */}
      <rect x="330" y="25" width="280" height="170" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="470" y="45" fill="#10b981" fontWeight="bold" fontSize="10" textAnchor="middle">✨ Arquitectura Descompuesta</text>
      <rect x="345" y="55" width="250" height="22" rx="3" fill={isDark ? "#065f46" : "#fff"} />
      <text x="470" y="70" fill="#10b981" fontSize="7" textAnchor="middle">DashboardMetrics.tsx (SRP UI)</text>
      <rect x="345" y="82" width="250" height="22" rx="3" fill={isDark ? "#065f46" : "#fff"} />
      <text x="470" y="97" fill="#10b981" fontSize="7" textAnchor="middle">UserManagementTable.tsx (SRP UI)</text>
      <rect x="345" y="109" width="250" height="22" rx="3" fill={isDark ? "#065f46" : "#fff"} />
      <text x="470" y="124" fill="#818cf8" fontSize="7" textAnchor="middle">useDashboardAnalytics.ts (Custom Hook)</text>
      <rect x="345" y="136" width="250" height="22" rx="3" fill={isDark ? "#065f46" : "#fff"} />
      <text x="470" y="151" fill="#38bdf8" fontSize="7" textAnchor="middle">analyticsRepository.ts (DIP API Service)</text>
      <text x="470" y="180" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">Módulos de &lt; 150 líneas altamente testeables</text>
    </svg>
  );
  },

  "solid-dip-react-context-ioc": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Contract Interface */}
      <rect x="220" y="25" width="200" height="40" rx="6" fill={isDark ? "#1e1e38" : "#e0e7ff"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="320" y="45" fill="#818cf8" fontWeight="bold" fontSize="9" textAnchor="middle">interface IAnalyticsService</text>
      <text x="320" y="58" fill={textColor} fontSize="7" textAnchor="middle">trackEvent(name, payload): void</text>

      <path d="M260 65 L160 95" stroke="#0284c7" strokeWidth="1.5" />
      <path d="M380 65 L480 95" stroke="#10b981" strokeWidth="1.5" />

      {/* Prod Provider */}
      <rect x="40" y="95" width="240" height="65" rx="6" fill={isDark ? "#1e293b" : "#e0f2fe"} stroke="#0284c7" strokeWidth="1.5" />
      <text x="160" y="115" fill="#0284c7" fontWeight="bold" fontSize="8" textAnchor="middle">Producción: GoogleAnalyticsProvider</text>
      <text x="160" y="132" fill={textColor} fontSize="7" textAnchor="middle">value=&#123;new GoogleAnalyticsAdapter()&#125;</text>
      <text x="160" y="150" fill="#0284c7" fontSize="7" textAnchor="middle">Envía eventos a GA4 en producción</text>

      {/* Test Provider */}
      <rect x="360" y="95" width="240" height="65" rx="6" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="480" y="115" fill="#10b981" fontWeight="bold" fontSize="8" textAnchor="middle">Tests: MockAnalyticsProvider</text>
      <text x="480" y="132" fill={textColor} fontSize="7" textAnchor="middle">value=&#123;new MockAnalyticsAdapter()&#125;</text>
      <text x="480" y="150" fill="#10b981" fontSize="7" textAnchor="middle">Verifica llamadas en Jest sin hacer red</text>

      {/* Consumer Component */}
      <rect x="180" y="170" width="280" height="35" rx="6" fill={isDark ? "#0f172a" : "#fff"} stroke={border} strokeWidth="1" />
      <text x="320" y="188" fill={textColor} fontSize="8" textAnchor="middle">Componente: const &#123; trackEvent &#125; = useAnalytics();</text>
      <text x="320" y="198" fill="#818cf8" fontSize="7" fontWeight="bold" textAnchor="middle">El componente ignora si corre en Producción o en Test (DIP Total)</text>
    </svg>
  );
  },

  "solid-lsp-design-system-contracts": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* HTML Button Contract */}
      <rect x="30" y="30" width="260" height="160" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#38bdf8" strokeWidth="1.5" />
      <text x="160" y="52" fill="#38bdf8" fontWeight="bold" fontSize="10" textAnchor="middle">Contrato Nativo W3C: &lt;button&gt;</text>
      <rect x="45" y="65" width="230" height="85" rx="4" fill={isDark ? "#0f172a" : "#fff"} />
      <text x="160" y="85" fill={textColor} fontSize="7" textAnchor="middle">• onClick, onKeyDown, onFocus...</text>
      <text x="160" y="100" fill={textColor} fontSize="7" textAnchor="middle">• disabled, type=&apos;submit&apos; | &apos;button&apos;</text>
      <text x="160" y="115" fill={textColor} fontSize="7" textAnchor="middle">• Accesibilidad aria-* y role</text>
      <text x="160" y="135" fill="#38bdf8" fontSize="7" fontWeight="bold" textAnchor="middle">Estándar web nativo universal</text>
      <text x="160" y="175" fill={textColor} fontSize="8" textAnchor="middle">Cualquier botón personalizado debe respetarlo</text>

      {/* Custom Button LSP */}
      <rect x="330" y="30" width="280" height="160" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="470" y="52" fill="#10b981" fontWeight="bold" fontSize="10" textAnchor="middle">✅ ComponentPropsWithoutRef&lt;&apos;button&apos;&gt;</text>
      <rect x="345" y="65" width="250" height="85" rx="4" fill={isDark ? "#065f46" : "#fff"} />
      <text x="470" y="83" fill="#10b981" fontSize="7" fontFamily="monospace" textAnchor="middle">interface ButtonProps extends</text>
      <text x="470" y="96" fill="#fff" fontSize="7" fontFamily="monospace" textAnchor="middle">  ComponentPropsWithoutRef&lt;&apos;button&apos;&gt; &#123;</text>
      <text x="470" y="109" fill="#10b981" fontSize="7" fontFamily="monospace" textAnchor="middle">  variant?: &apos;primary&apos; | &apos;ghost&apos;;</text>
      <text x="470" y="122" fill="#fff" fontSize="7" fontFamily="monospace" textAnchor="middle">&#125;</text>
      <text x="470" y="140" fill="#a7f3d0" fontSize="7" textAnchor="middle">Pasa ...props al botón real sin anular eventos</text>
      <text x="470" y="175" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">Sustituto perfecto del &lt;button&gt; nativo</text>
    </svg>
  );
  },

  "solid-hexagonal-ports-adapters": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Primary Adapter (UI) */}
      <rect x="30" y="60" width="140" height="100" rx="8" fill={isDark ? "#1e293b" : "#e0f2fe"} stroke="#0284c7" strokeWidth="1.5" />
      <text x="100" y="85" fill="#0284c7" fontWeight="bold" fontSize="9" textAnchor="middle">Adaptador Primario</text>
      <text x="100" y="105" fill={textColor} fontSize="8" textAnchor="middle">React / Vue Views</text>
      <text x="100" y="120" fill={textColor} fontSize="7" textAnchor="middle">Formularios / CLI</text>
      <text x="100" y="145" fill="#0284c7" fontSize="7" fontWeight="bold" textAnchor="middle">Inicia la acción</text>

      <path d="M170 110 L230 110" stroke="#0284c7" strokeWidth="1.5" />

      {/* Core Domain & Ports */}
      <rect x="230" y="30" width="180" height="160" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="2" />
      <text x="320" y="55" fill="#10b981" fontWeight="bold" fontSize="10" textAnchor="middle">Núcleo Hexagonal (Puro)</text>
      <rect x="245" y="70" width="150" height="30" rx="4" fill={isDark ? "#065f46" : "#fff"} />
      <text x="320" y="88" fill="#fff" fontSize="8" textAnchor="middle">Entities &amp; Use Cases</text>
      <rect x="245" y="110" width="150" height="40" rx="4" fill={isDark ? "#065f46" : "#fff"} />
      <text x="320" y="127" fill="#a7f3d0" fontSize="7" fontWeight="bold" textAnchor="middle">PUERTOS (Interfaces)</text>
      <text x="320" y="140" fill="#fff" fontSize="7" textAnchor="middle">UserRepositoryPort</text>
      <text x="320" y="175" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">0 dependencias de React/Fetch</text>

      <path d="M410 110 L470 110" stroke="#6366f1" strokeWidth="1.5" />

      {/* Secondary Adapter (Infra) */}
      <rect x="470" y="60" width="140" height="100" rx="8" fill={isDark ? "#1e1e38" : "#e0e7ff"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="540" y="85" fill="#818cf8" fontWeight="bold" fontSize="9" textAnchor="middle">Adaptador Secundario</text>
      <text x="540" y="105" fill={textColor} fontSize="8" textAnchor="middle">Axios / Fetch API</text>
      <text x="540" y="120" fill={textColor} fontSize="7" textAnchor="middle">LocalStorage / IndexedDB</text>
      <text x="540" y="145" fill="#818cf8" fontSize="7" fontWeight="bold" textAnchor="middle">Implementa el Puerto</text>
    </svg>
  );
  },

  "solid-functional-programming-equivalents": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Table of Equivalents */}
      <rect x="30" y="25" width="580" height="170" rx="8" fill={isDark ? "#0f172a" : "#fff"} stroke={border} strokeWidth="1" />
      <text x="140" y="48" fill="#818cf8" fontWeight="bold" fontSize="10" textAnchor="middle">Principio SOLID (OOP)</text>
      <text x="440" y="48" fill="#10b981" fontWeight="bold" fontSize="10" textAnchor="middle">Equivalente en Programación Funcional (FP)</text>
      
      <line x1="30" y1="60" x2="610" y2="60" stroke={border} strokeWidth="1" />
      
      <text x="140" y="82" fill={textColor} fontSize="8" textAnchor="middle">S - Single Responsibility</text>
      <text x="440" y="82" fill="#10b981" fontSize="8" textAnchor="middle">Funciones Puras de propósito único sin side effects</text>
      
      <text x="140" y="108" fill={textColor} fontSize="8" textAnchor="middle">O - Open / Closed</text>
      <text x="440" y="108" fill="#10b981" fontSize="8" textAnchor="middle">Higher-Order Functions (HOFs) y Composición (pipe/compose)</text>
      
      <text x="140" y="134" fill={textColor} fontSize="8" textAnchor="middle">L - Liskov Substitution</text>
      <text x="440" y="134" fill="#10b981" fontSize="8" textAnchor="middle">Tipado estructural y compatibilidad de firmas de funciones</text>
      
      <text x="140" y="160" fill={textColor} fontSize="8" textAnchor="middle">I - Interface Segregation</text>
      <text x="440" y="160" fill="#10b981" fontSize="8" textAnchor="middle">Parámetros atómicos y Currying (evitar objetos gigantes)</text>
      
      <text x="140" y="184" fill={textColor} fontSize="8" textAnchor="middle">D - Dependency Inversion</text>
      <text x="440" y="184" fill="#10b981" fontSize="8" textAnchor="middle">Inyección de dependencias pasando funciones como argumentos</text>
    </svg>
  );
  },

  "solid-state-management-slices": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Global Store */}
      <rect x="30" y="25" width="180" height="170" rx="8" fill={isDark ? "#1e1e38" : "#e0e7ff"} stroke="#6366f1" strokeWidth="1.5" />
      <text x="120" y="48" fill="#818cf8" fontWeight="bold" fontSize="10" textAnchor="middle">Store Global Compuesto</text>
      <rect x="45" y="60" width="150" height="32" rx="4" fill={isDark ? "#18182b" : "#fff"} />
      <text x="120" y="80" fill="#0284c7" fontSize="8" textAnchor="middle">AuthSlice (SRP)</text>
      <rect x="45" y="100" width="150" height="32" rx="4" fill={isDark ? "#18182b" : "#fff"} />
      <text x="120" y="120" fill="#10b981" fontSize="8" textAnchor="middle">CartSlice (SRP)</text>
      <rect x="45" y="140" width="150" height="32" rx="4" fill={isDark ? "#18182b" : "#fff"} />
      <text x="120" y="160" fill="#ea580c" fontSize="8" textAnchor="middle">ThemeSlice (SRP)</text>

      <path d="M210 110 L270 110" stroke="#10b981" strokeWidth="2" />

      {/* Atomic Selectors (ISP) */}
      <rect x="270" y="25" width="340" height="170" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="440" y="48" fill="#10b981" fontWeight="bold" fontSize="10" textAnchor="middle">Selectores Atómicos (ISP en Zustand / Redux)</text>
      
      <rect x="285" y="60" width="310" height="36" rx="4" fill={isDark ? "#065f46" : "#fff"} />
      <text x="440" y="76" fill="#10b981" fontSize="7" fontFamily="monospace" textAnchor="middle">const user = useStore(state =&gt; state.user);</text>
      <text x="440" y="88" fill={textColor} fontSize="7" textAnchor="middle">Solo se suscribe a &apos;user&apos;. Si cambia &apos;cart&apos;, NO re-renderiza</text>

      <rect x="285" y="105" width="310" height="36" rx="4" fill={isDark ? "#065f46" : "#fff"} />
      <text x="440" y="121" fill="#10b981" fontSize="7" fontFamily="monospace" textAnchor="middle">const cartItems = useStore(state =&gt; state.cartItems);</text>
      <text x="440" y="133" fill={textColor} fontSize="7" textAnchor="middle">Solo se suscribe a &apos;cartItems&apos;. Inmune a cambios de Theme</text>

      <text x="440" y="175" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">DIP: Middlewares (persist, devtools) inyectados como capas externas</text>
    </svg>
  );
  },

  "solid-yagni-kiss-overengineering-tradeoff": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Overengineering Trap */}
      <rect x="30" y="30" width="270" height="160" rx="8" fill={isDark ? "#450a0a" : "#fef2f2"} stroke="#ef4444" strokeWidth="1.5" />
      <text x="165" y="52" fill="#ef4444" fontWeight="bold" fontSize="10" textAnchor="middle">⚠️ Trampa de Sobre-Ingeniería (YAGNI)</text>
      <rect x="45" y="65" width="240" height="85" rx="4" fill={isDark ? "#1e293b" : "#fff"} />
      <text x="165" y="82" fill="#ef4444" fontSize="7" textAnchor="middle">Crear 12 interfaces y 4 fábricas para mostrar</text>
      <text x="165" y="96" fill="#ef4444" fontSize="7" textAnchor="middle">un texto estático que nunca cambiará.</text>
      <text x="165" y="115" fill={textColor} fontSize="7" textAnchor="middle">• Indirección cognitiva agotadora</text>
      <text x="165" y="128" fill={textColor} fontSize="7" textAnchor="middle">• Parálisis de análisis y boilerplate infinito</text>
      <text x="165" y="141" fill={textColor} fontSize="7" textAnchor="middle">• Abstracción prematura (&apos;Accidental Complexity&apos;)</text>
      <text x="165" y="175" fill="#ef4444" fontSize="8" fontWeight="bold" textAnchor="middle">Costo de mantenimiento &gt; Beneficio</text>

      {/* Pragmatic Balance */}
      <rect x="340" y="30" width="270" height="160" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="475" y="52" fill="#10b981" fontWeight="bold" fontSize="10" textAnchor="middle">⚖️ Pragmatismo Senior (KISS + SOLID)</text>
      <rect x="355" y="65" width="240" height="85" rx="4" fill={isDark ? "#065f46" : "#fff"} />
      <text x="475" y="82" fill="#10b981" fontSize="7" textAnchor="middle">1. Escribir código simple y directo primero (KISS)</text>
      <text x="475" y="98" fill="#10b981" fontSize="7" textAnchor="middle">2. Regla de Tres: Abstraer cuando el patrón</text>
      <text x="475" y="112" fill="#10b981" fontSize="7" textAnchor="middle">se repita formalmente por 3ra vez.</text>
      <text x="475" y="132" fill={textColor} fontSize="7" textAnchor="middle">3. Aplicar SOLID donde el dolor del cambio</text>
      <text x="475" y="146" fill={textColor} fontSize="7" textAnchor="middle">y el testing lo justifiquen económicamente.</text>
      <text x="475" y="175" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">Diseño evolutivo guiado por necesidades reales</text>
    </svg>
  );
  },

  "solid-ci-cd-architectural-fitness-functions": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Pipeline Header */}
      <rect x="30" y="25" width="580" height="35" rx="6" fill={isDark ? "#0f172a" : "#fff"} stroke="#6366f1" strokeWidth="1" />
      <text x="320" y="47" fill="#818cf8" fontWeight="bold" fontSize="10" textAnchor="middle">Pipeline CI/CD: Architectural Fitness Functions (Gobernanza Automatizada)</text>

      {/* Check 1 */}
      <rect x="30" y="70" width="180" height="120" rx="6" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#38bdf8" strokeWidth="1.5" />
      <text x="120" y="92" fill="#38bdf8" fontWeight="bold" fontSize="9" textAnchor="middle">1. Dependency-Cruiser</text>
      <text x="120" y="115" fill={textColor} fontSize="7" textAnchor="middle">• Prohíbe ciclos circulares</text>
      <text x="120" y="130" fill={textColor} fontSize="7" textAnchor="middle">• Previene que Domain</text>
      <text x="120" y="142" fill={textColor} fontSize="7" textAnchor="middle">importe Presentation (DIP)</text>
      <text x="120" y="172" fill="#38bdf8" fontSize="7" fontWeight="bold" textAnchor="middle">Límites Modulares Estrictos</text>

      {/* Check 2 */}
      <rect x="230" y="70" width="180" height="120" rx="6" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#10b981" strokeWidth="1.5" />
      <text x="320" y="92" fill="#10b981" fontWeight="bold" fontSize="9" textAnchor="middle">2. ESLint Complexity</text>
      <text x="320" y="115" fill={textColor} fontSize="7" textAnchor="middle">• max-lines-per-function: 50</text>
      <text x="320" y="130" fill={textColor} fontSize="7" textAnchor="middle">• complexity: 8 (SRP)</text>
      <text x="320" y="142" fill={textColor} fontSize="7" textAnchor="middle">• Bloquea God Components</text>
      <text x="320" y="172" fill="#10b981" fontSize="7" fontWeight="bold" textAnchor="middle">Alta Cohesión Garantizada</text>

      {/* Check 3 */}
      <rect x="430" y="70" width="180" height="120" rx="6" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#f59e0b" strokeWidth="1.5" />
      <text x="520" y="92" fill="#f59e0b" fontWeight="bold" fontSize="9" textAnchor="middle">3. Stryker (Mutation Test)</text>
      <text x="520" y="115" fill={textColor} fontSize="7" textAnchor="middle">• Muta código para validar</text>
      <text x="520" y="130" fill={textColor} fontSize="7" textAnchor="middle">que los tests fallen</text>
      <text x="520" y="142" fill={textColor} fontSize="7" textAnchor="middle">si se altera un contrato (LSP)</text>
      <text x="520" y="172" fill="#f59e0b" fontSize="7" fontWeight="bold" textAnchor="middle">Correctitud de Pruebas</text>
    </svg>
  );
  }
};
