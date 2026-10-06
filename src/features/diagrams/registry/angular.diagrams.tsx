import { DiagramRegistry } from "../diagram.types";

/** Diagramas SVG del módulo Angular. */
export const angularDiagrams: DiagramRegistry = {
  "ng-component-anatomy-metadata": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Center: Component Decorator */}
      <rect x="230" y="25" width="180" height="75" rx="8" fill={isDark ? "#450a0a" : "#fee2e2"} stroke="#ef4444" strokeWidth="1.5" />
      <text x="320" y="47" fill="#ef4444" fontWeight="bold" fontSize="11" textAnchor="middle">@Component(&#123;...&#125;)</text>
      <text x="320" y="65" fill={textColor} fontSize="9" textAnchor="middle">selector: &apos;app-card&apos;</text>
      <text x="320" y="80" fill="#10b981" fontSize="9" fontWeight="bold" textAnchor="middle">standalone: true</text>

      {/* Connecting lines */}
      <path d="M230 62 L150 120" stroke="#ef4444" strokeWidth="1.5" />
      <path d="M320 100 L320 120" stroke="#ef4444" strokeWidth="1.5" />
      <path d="M410 62 L490 120" stroke="#ef4444" strokeWidth="1.5" />

      {/* Pillar 1: Template HTML */}
      <rect x="40" y="120" width="165" height="75" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#38bdf8" strokeWidth="1.5" />
      <text x="122" y="142" fill="#38bdf8" fontWeight="bold" fontSize="10" textAnchor="middle">1. Vista (Template)</text>
      <text x="122" y="160" fill={textColor} fontSize="8" textAnchor="middle">HTML + Control Flow</text>
      <text x="122" y="176" fill={subtextColor} fontSize="8" textAnchor="middle">@if, @for, bindings</text>

      {/* Pillar 2: TypeScript Class */}
      <rect x="237" y="120" width="165" height="75" rx="8" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#818cf8" strokeWidth="1.5" />
      <text x="320" y="142" fill="#818cf8" fontWeight="bold" fontSize="10" textAnchor="middle">2. Lógica (TS Class)</text>
      <text x="320" y="160" fill={textColor} fontSize="8" textAnchor="middle">Signals, Métodos, Estado</text>
      <text x="320" y="176" fill={subtextColor} fontSize="8" textAnchor="middle">Inyección de Dependencias</text>

      {/* Pillar 3: Styles CSS */}
      <rect x="435" y="120" width="165" height="75" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="517" y="142" fill="#10b981" fontWeight="bold" fontSize="10" textAnchor="middle">3. Diseño (Styles)</text>
      <text x="517" y="160" fill={textColor} fontSize="8" textAnchor="middle">CSS / SCSS Encapsulado</text>
      <text x="517" y="176" fill={subtextColor} fontSize="8" textAnchor="middle">ViewEncapsulation.Emulated</text>
    </svg>
  );
  },

  "ng-data-binding-quadrants": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Quadrant 1: Interpolation */}
      <rect x="30" y="25" width="270" height="80" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#38bdf8" strokeWidth="1.5" />
      <text x="45" y="46" fill="#38bdf8" fontWeight="bold" fontSize="11">Interpolación: &#123;&#123; valor &#125;&#125;</text>
      <text x="45" y="65" fill={textColor} fontSize="9">Flujo: Componente ➔ DOM (Texto plano)</text>
      <rect x="45" y="73" width="240" height="22" rx="4" fill={isDark ? "#0f172a" : "#fff"} />
      <text x="55" y="88" fill="#38bdf8" fontSize="9" fontFamily="monospace">&lt;h1&gt;&#123;&#123; user.name &#125;&#125;&lt;/h1&gt;</text>

      {/* Quadrant 2: Property Binding */}
      <rect x="340" y="25" width="270" height="80" rx="8" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#818cf8" strokeWidth="1.5" />
      <text x="355" y="46" fill="#818cf8" fontWeight="bold" fontSize="11">Property Binding: [prop]=&quot;valor&quot;</text>
      <text x="355" y="65" fill={textColor} fontSize="9">Flujo: Componente ➔ Propiedad de DOM</text>
      <rect x="355" y="73" width="240" height="22" rx="4" fill={isDark ? "#1e1b4b" : "#fff"} />
      <text x="365" y="88" fill="#818cf8" fontSize="9" fontFamily="monospace">&lt;button [disabled]=&quot;isLoading()&quot;&gt;</text>

      {/* Quadrant 3: Event Binding */}
      <rect x="30" y="115" width="270" height="80" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="45" y="136" fill="#10b981" fontWeight="bold" fontSize="11">Event Binding: (event)=&quot;fn()&quot;</text>
      <text x="45" y="155" fill={textColor} fontSize="9">Flujo: DOM Evento ➔ Método Componente</text>
      <rect x="45" y="163" width="240" height="22" rx="4" fill={isDark ? "#065f46" : "#fff"} />
      <text x="55" y="178" fill="#34d399" fontSize="9" fontFamily="monospace">&lt;button (click)=&quot;saveData()&quot;&gt;</text>

      {/* Quadrant 4: Two-Way Binding */}
      <rect x="340" y="115" width="270" height="80" rx="8" fill={isDark ? "#713f12" : "#fef9c3"} stroke="#f59e0b" strokeWidth="1.5" />
      <text x="355" y="136" fill="#f59e0b" fontWeight="bold" fontSize="11">Two-Way: [(ngModel)]=&quot;valor&quot;</text>
      <text x="355" y="155" fill={textColor} fontSize="9">Banana-in-a-box: Sincronización Bidireccional</text>
      <rect x="355" y="163" width="240" height="22" rx="4" fill={isDark ? "#78350f" : "#fff"} />
      <text x="365" y="178" fill="#f59e0b" fontSize="9" fontFamily="monospace">&lt;input [(ngModel)]=&quot;username&quot;&gt;</text>
    </svg>
  );
  },

  "ng-control-flow-syntax": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* New Built-in Control Flow */}
      <rect x="30" y="25" width="270" height="170" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="165" y="48" fill="#10b981" fontWeight="bold" fontSize="11" textAnchor="middle">Nuevo Control Flow (Angular 17+)</text>
      
      <rect x="45" y="60" width="240" height="30" rx="4" fill={isDark ? "#065f46" : "#fff"} />
      <text x="55" y="79" fill="#34d399" fontSize="9" fontFamily="monospace">@if (user()) &#123; ... &#125; @else &#123; ... &#125;</text>
      
      <rect x="45" y="96" width="240" height="34" rx="4" fill={isDark ? "#065f46" : "#fff"} />
      <text x="55" y="112" fill="#34d399" fontSize="9" fontFamily="monospace">@for (u of users(); track u.id) &#123;</text>
      <text x="55" y="124" fill="#a7f3d0" fontSize="8" fontFamily="monospace">&#125; @empty &#123; &lt;p&gt;Sin datos&lt;/p&gt; &#125;</text>
      
      <text x="165" y="152" fill={textColor} fontSize="8" textAnchor="middle">✓ Chequeo de tipos estricto en compilación</text>
      <text x="165" y="168" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">⚡ Hasta 90% más rápido en SSR / hidratación</text>
      <text x="165" y="184" fill={subtextColor} fontSize="8" textAnchor="middle">Sin necesidad de importar CommonModule</text>

      {/* Legacy Directives */}
      <rect x="340" y="25" width="270" height="170" rx="8" fill={isDark ? "#450a0a" : "#fee2e2"} stroke="#ef4444" strokeWidth="1.5" />
      <text x="475" y="48" fill="#ef4444" fontWeight="bold" fontSize="11" textAnchor="middle">Directivas Estructurales Legacy</text>
      
      <rect x="355" y="60" width="240" height="30" rx="4" fill={isDark ? "#7f1d1d" : "#fff"} />
      <text x="365" y="79" fill="#fca5a5" fontSize="9" fontFamily="monospace">&lt;div *ngIf=&quot;user; else noUser&quot;&gt;</text>
      
      <rect x="355" y="96" width="240" height="34" rx="4" fill={isDark ? "#7f1d1d" : "#fff"} />
      <text x="365" y="112" fill="#fca5a5" fontSize="8" fontFamily="monospace">&lt;li *ngFor=&quot;let u of users;</text>
      <text x="365" y="124" fill="#fca5a5" fontSize="8" fontFamily="monospace">trackBy: customTrackFn&quot;&gt;</text>
      
      <text x="475" y="152" fill={textColor} fontSize="8" textAnchor="middle">⚠️ Requiere boilerplate con &lt;ng-template&gt;</text>
      <text x="475" y="168" fill="#ef4444" fontSize="8" fontWeight="bold" textAnchor="middle">⚠️ Función trackBy verbose y verbosa</text>
      <text x="475" y="184" fill={subtextColor} fontSize="8" textAnchor="middle">Exige importar NgIf, NgFor en cada componente</text>
    </svg>
  );
  },

  "ng-directives-classification": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Type 1: Component */}
      <rect x="30" y="30" width="175" height="155" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#38bdf8" strokeWidth="1.5" />
      <text x="117" y="55" fill="#38bdf8" fontWeight="bold" fontSize="11" textAnchor="middle">1. Componentes</text>
      <rect x="42" y="70" width="151" height="35" rx="4" fill={isDark ? "#0f172a" : "#fff"} />
      <text x="117" y="91" fill={textColor} fontSize="8" textAnchor="middle">Directiva con Template</text>
      <text x="117" y="125" fill={textColor} fontSize="8" textAnchor="middle">@Component(&#123;...&#125;)</text>
      <text x="117" y="142" fill={subtextColor} fontSize="8" textAnchor="middle">Posee vista visual propia</text>
      <text x="117" y="165" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle">&lt;app-navbar&gt;</text>

      {/* Type 2: Attribute Directive */}
      <rect x="232" y="30" width="175" height="155" rx="8" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#818cf8" strokeWidth="1.5" />
      <text x="319" y="55" fill="#818cf8" fontWeight="bold" fontSize="11" textAnchor="middle">2. De Atributo</text>
      <rect x="244" y="70" width="151" height="35" rx="4" fill={isDark ? "#1e1b4b" : "#fff"} />
      <text x="319" y="91" fill={textColor} fontSize="8" textAnchor="middle">Modifica apariencia / conducta</text>
      <text x="319" y="125" fill={textColor} fontSize="8" textAnchor="middle">[ngClass], [ngStyle]</text>
      <text x="319" y="142" fill={subtextColor} fontSize="8" textAnchor="middle">Directivas custom de tooltip</text>
      <text x="319" y="165" fill="#818cf8" fontSize="8" fontWeight="bold" textAnchor="middle">&lt;div [appHighlight]&gt;</text>

      {/* Type 3: Structural Directive */}
      <rect x="435" y="30" width="175" height="155" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="522" y="55" fill="#10b981" fontWeight="bold" fontSize="11" textAnchor="middle">3. Estructurales</text>
      <rect x="447" y="70" width="151" height="35" rx="4" fill={isDark ? "#065f46" : "#fff"} />
      <text x="522" y="91" fill={textColor} fontSize="8" textAnchor="middle">Altera la forma del DOM</text>
      <text x="522" y="125" fill={textColor} fontSize="8" textAnchor="middle">Agrega o destruye nodos</text>
      <text x="522" y="142" fill={subtextColor} fontSize="8" textAnchor="middle">Usa ViewContainerRef</text>
      <text x="522" y="165" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">&lt;ng-template [appRole]&gt;</text>
    </svg>
  );
  },

  "ng-pipes-pure-vs-impure": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Pure Pipe */}
      <rect x="30" y="25" width="270" height="170" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="165" y="48" fill="#10b981" fontWeight="bold" fontSize="11" textAnchor="middle">Pipe Puro (@Pipe(&#123; pure: true &#125;))</text>
      
      <rect x="50" y="62" width="230" height="26" rx="4" fill={isDark ? "#065f46" : "#fff"} />
      <text x="165" y="79" fill={textColor} fontSize="9" textAnchor="middle">Input: date | date:&apos;short&apos;</text>
      
      <path d="M165 88 L165 105" stroke="#10b981" strokeWidth="1.5" />
      
      <rect x="50" y="105" width="230" height="40" rx="4" fill={isDark ? "#047857" : "#a7f3d0"} />
      <text x="165" y="122" fill="#fff" fontSize="9" fontWeight="bold" textAnchor="middle">¿Cambió el primitivo o referencia (===)?</text>
      <text x="165" y="136" fill="#fff" fontSize="8" textAnchor="middle">NO ➔ Retorna valor cacheado O(1)</text>
      
      <text x="165" y="178" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">✓ Máximo rendimiento por memoización estricta</text>

      {/* Impure Pipe */}
      <rect x="340" y="25" width="270" height="170" rx="8" fill={isDark ? "#450a0a" : "#fee2e2"} stroke="#ef4444" strokeWidth="1.5" />
      <text x="475" y="48" fill="#ef4444" fontWeight="bold" fontSize="11" textAnchor="middle">Pipe Impuro (@Pipe(&#123; pure: false &#125;))</text>
      
      <rect x="360" y="62" width="230" height="26" rx="4" fill={isDark ? "#7f1d1d" : "#fff"} />
      <text x="475" y="79" fill={textColor} fontSize="9" textAnchor="middle">Input: array | filterByText</text>
      
      <path d="M475 88 L475 105" stroke="#ef4444" strokeWidth="1.5" />
      
      <rect x="360" y="105" width="230" height="40" rx="4" fill={isDark ? "#991b1b" : "#fca5a5"} />
      <text x="475" y="122" fill="#fff" fontSize="9" fontWeight="bold" textAnchor="middle">Se re-ejecuta en CADA ciclo de Change Detection</text>
      <text x="475" y="136" fill="#fff" fontSize="8" textAnchor="middle">Incluso ante clicks ajenos o timers</text>
      
      <text x="475" y="178" fill="#ef4444" fontSize="8" fontWeight="bold" textAnchor="middle">⚠️ Peligro de cuellos de botella y lentitud</text>
    </svg>
  );
  },

  "ng-constructor-vs-ngoninit": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Timeline Bar */}
      <line x1="60" y1="100" x2="580" y2="100" stroke={border} strokeWidth="3" />

      {/* Step 1: constructor */}
      <circle cx="140" cy="100" r="28" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#38bdf8" strokeWidth="2" />
      <text x="140" y="104" fill="#38bdf8" fontWeight="bold" fontSize="10" textAnchor="middle">1. new()</text>
      
      <rect x="60" y="30" width="160" height="50" rx="6" fill={isDark ? "#0f172a" : "#fff"} stroke="#38bdf8" strokeWidth="1" />
      <text x="140" y="48" fill="#38bdf8" fontWeight="bold" fontSize="10" textAnchor="middle">constructor() (TypeScript)</text>
      <text x="140" y="62" fill={textColor} fontSize="8" textAnchor="middle">Inyección de dependencias</text>
      <text x="140" y="73" fill="#ef4444" fontSize="7" textAnchor="middle">Inputs NO disponibles (undefined)</text>

      {/* Intermediate: Binding Pass */}
      <rect x="250" y="85" width="140" height="30" rx="4" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#818cf8" />
      <text x="320" y="103" fill="#818cf8" fontSize="8" fontWeight="bold" textAnchor="middle">Angular enlaza @Input()</text>

      {/* Step 2: ngOnInit */}
      <circle cx="500" cy="100" r="28" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="2" />
      <text x="500" y="104" fill="#10b981" fontWeight="bold" fontSize="10" textAnchor="middle">2. Init</text>
      
      <rect x="420" y="30" width="160" height="50" rx="6" fill={isDark ? "#065f46" : "#fff"} stroke="#10b981" strokeWidth="1" />
      <text x="500" y="48" fill="#10b981" fontWeight="bold" fontSize="10" textAnchor="middle">ngOnInit() (Lifecycle)</text>
      <text x="500" y="62" fill="#fff" fontSize="8" textAnchor="middle">Inputs listos para ser leídos</text>
      <text x="500" y="73" fill="#34d399" fontSize="7" textAnchor="middle">Peticiones HTTP e inicialización</text>

      <rect x="50" y="150" width="540" height="40" rx="6" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke={border} />
      <text x="320" y="168" fill={textColor} fontSize="9" textAnchor="middle">Regla de oro: No coloques lógica de negocio en el constructor; difiérela a ngOnInit().</text>
      <text x="320" y="182" fill={subtextColor} fontSize="8" textAnchor="middle">El constructor solo debe asignar referencias de servicios inyectados.</text>
    </svg>
  );
  },

  "ng-standalone-vs-ngmodule": ({ isDark, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Standalone (Modern) */}
      <rect x="30" y="25" width="270" height="170" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="165" y="48" fill="#10b981" fontWeight="bold" fontSize="11" textAnchor="middle">Standalone Components (Estándar)</text>
      
      <rect x="45" y="60" width="240" height="85" rx="4" fill={isDark ? "#065f46" : "#fff"} stroke={border} />
      <text x="55" y="78" fill="#34d399" fontSize="8" fontFamily="monospace">@Component(&#123;</text>
      <text x="65" y="92" fill="#fff" fontSize="8" fontFamily="monospace" fontWeight="bold">standalone: true,</text>
      <text x="65" y="106" fill="#34d399" fontSize="8" fontFamily="monospace">imports: [CardComponent, Button],</text>
      <text x="65" y="120" fill="#a7f3d0" fontSize="8" fontFamily="monospace">templateUrl: &apos;./profile.html&apos;</text>
      <text x="55" y="134" fill="#34d399" fontSize="8" fontFamily="monospace">&#125;)</text>
      
      <text x="165" y="165" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">✓ Tree-shaking quirúrgico sin sobrecarga</text>
      <text x="165" y="180" fill={subtextColor} fontSize="8" textAnchor="middle">Carga perezosa directa con loadComponent()</text>

      {/* NgModule (Legacy) */}
      <rect x="340" y="25" width="270" height="170" rx="8" fill={isDark ? "#450a0a" : "#fee2e2"} stroke="#ef4444" strokeWidth="1.5" />
      <text x="475" y="48" fill="#ef4444" fontWeight="bold" fontSize="11" textAnchor="middle">NgModule (Arquitectura Legacy)</text>
      
      <rect x="355" y="60" width="240" height="85" rx="4" fill={isDark ? "#7f1d1d" : "#fff"} stroke={border} />
      <text x="365" y="78" fill="#fca5a5" fontSize="8" fontFamily="monospace">@NgModule(&#123;</text>
      <text x="375" y="92" fill="#fca5a5" fontSize="8" fontFamily="monospace">declarations: [ProfileComponent, ...],</text>
      <text x="375" y="106" fill="#fca5a5" fontSize="8" fontFamily="monospace">imports: [CommonModule, SharedModule],</text>
      <text x="375" y="120" fill="#fca5a5" fontSize="8" fontFamily="monospace">exports: [ProfileComponent]</text>
      <text x="365" y="134" fill="#fca5a5" fontSize="8" fontFamily="monospace">&#125;)</text>
      
      <text x="475" y="165" fill="#ef4444" fontSize="8" fontWeight="bold" textAnchor="middle">⚠️ Fuerte acoplamiento e indirección de módulos</text>
      <text x="475" y="180" fill={subtextColor} fontSize="8" textAnchor="middle">Dificulta el análisis de dependencias muertas</text>
    </svg>
  );
  },

  "ng-signals-fine-grained-reactivity": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Writable Signal */}
      <rect x="30" y="40" width="160" height="135" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#38bdf8" strokeWidth="1.5" />
      <text x="110" y="65" fill="#38bdf8" fontWeight="bold" fontSize="11" textAnchor="middle">Writable Signal</text>
      <rect x="42" y="80" width="136" height="40" rx="4" fill={isDark ? "#0f172a" : "#fff"} />
      <text x="110" y="98" fill={textColor} fontSize="8" fontFamily="monospace" textAnchor="middle">count = signal(10);</text>
      <text x="110" y="112" fill="#38bdf8" fontSize="8" fontFamily="monospace" textAnchor="middle">count.set(15);</text>
      <text x="110" y="150" fill={subtextColor} fontSize="8" textAnchor="middle">Fuente de Verdad</text>

      <path d="M190 108 L235 108" stroke="#38bdf8" strokeWidth="2" />

      {/* Computed Signal */}
      <rect x="235" y="40" width="170" height="135" rx="8" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#818cf8" strokeWidth="1.5" />
      <text x="320" y="65" fill="#818cf8" fontWeight="bold" fontSize="11" textAnchor="middle">Computed Signal</text>
      <rect x="247" y="80" width="146" height="40" rx="4" fill={isDark ? "#1e1b4b" : "#fff"} />
      <text x="320" y="98" fill={textColor} fontSize="8" fontFamily="monospace" textAnchor="middle">double = computed(() =&gt;</text>
      <text x="320" y="112" fill="#818cf8" fontSize="8" fontFamily="monospace" textAnchor="middle">count() * 2);</text>
      <text x="320" y="150" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">Memoización perezosa</text>

      <path d="M405 108 L450 108" stroke="#818cf8" strokeWidth="2" />

      {/* Surgical DOM Node */}
      <rect x="450" y="40" width="160" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="530" y="65" fill="#10b981" fontWeight="bold" fontSize="11" textAnchor="middle">DOM Quirúrgico</text>
      <rect x="462" y="80" width="136" height="40" rx="4" fill={isDark ? "#065f46" : "#fff"} />
      <text x="530" y="98" fill="#34d399" fontSize="9" fontFamily="monospace" textAnchor="middle">&lt;span&gt;&#123;&#123; double() &#125;&#125;&lt;/span&gt;</text>
      <text x="530" y="112" fill="#a7f3d0" fontSize="8" textAnchor="middle">Pinta solo este nodo</text>
      <text x="530" y="150" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">Cero chequeo de árbol</text>
    </svg>
  );
  },

  "ng-reactive-vs-template-forms": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Reactive Forms */}
      <rect x="30" y="25" width="270" height="170" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="165" y="48" fill="#10b981" fontWeight="bold" fontSize="11" textAnchor="middle">Reactive Forms (Recomendado)</text>
      
      <rect x="45" y="60" width="240" height="26" rx="4" fill={isDark ? "#065f46" : "#fff"} />
      <text x="55" y="77" fill={textColor} fontSize="8">💻 Modelo en TypeScript: new FormGroup(&#123;...&#125;)</text>
      
      <rect x="45" y="93" width="240" height="26" rx="4" fill={isDark ? "#065f46" : "#fff"} />
      <text x="55" y="110" fill={textColor} fontSize="8">⚡ Síncrono y fuertemente tipado en TS</text>
      
      <rect x="45" y="126" width="240" height="26" rx="4" fill={isDark ? "#065f46" : "#fff"} />
      <text x="55" y="143" fill={textColor} fontSize="8">🧪 Tests unitarios sin montar el DOM</text>
      
      <text x="165" y="180" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">✓ Ideal para formularios complejos y dinámicos</text>

      {/* Template-driven Forms */}
      <rect x="340" y="25" width="270" height="170" rx="8" fill={isDark ? "#713f12" : "#fef9c3"} stroke="#f59e0b" strokeWidth="1.5" />
      <text x="475" y="48" fill="#f59e0b" fontWeight="bold" fontSize="11" textAnchor="middle">Template-driven Forms (Básico)</text>
      
      <rect x="355" y="60" width="240" height="26" rx="4" fill={isDark ? "#78350f" : "#fff"} />
      <text x="365" y="77" fill={textColor} fontSize="8">📄 Directivas en HTML: [(ngModel)], ngForm</text>
      
      <rect x="355" y="93" width="240" height="26" rx="4" fill={isDark ? "#78350f" : "#fff"} />
      <text x="365" y="110" fill={textColor} fontSize="8">⏳ Asíncrono (crea controles tras render del DOM)</text>
      
      <rect x="355" y="126" width="240" height="26" rx="4" fill={isDark ? "#78350f" : "#fff"} />
      <text x="365" y="143" fill={textColor} fontSize="8">⚠️ Difícil de probar sin entorno de navegador</text>
      
      <text x="475" y="180" fill="#f59e0b" fontSize="8" fontWeight="bold" textAnchor="middle">⚠️ Solo adecuado para formularios muy simples</text>
    </svg>
  );
  },

  "ng-async-pipe-auto-unsubscribe": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Observable Source */}
      <rect x="30" y="40" width="160" height="135" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#38bdf8" strokeWidth="1.5" />
      <text x="110" y="65" fill="#38bdf8" fontWeight="bold" fontSize="11" textAnchor="middle">Observable Stream</text>
      <rect x="42" y="80" width="136" height="40" rx="4" fill={isDark ? "#0f172a" : "#fff"} />
      <text x="110" y="98" fill={textColor} fontSize="8" fontFamily="monospace" textAnchor="middle">data$: Observable&lt;T&gt;</text>
      <text x="110" y="112" fill="#38bdf8" fontSize="8" textAnchor="middle">Emite nuevos valores</text>
      <text x="110" y="150" fill={subtextColor} fontSize="8" textAnchor="middle">RxJS Pipe</text>

      <path d="M190 108 L240 108" stroke="#38bdf8" strokeWidth="2" />

      {/* Async Pipe Center */}
      <rect x="240" y="35" width="160" height="145" rx="8" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#818cf8" strokeWidth="1.5" />
      <text x="320" y="60" fill="#818cf8" fontWeight="bold" fontSize="11" textAnchor="middle">| async Pipe</text>
      <rect x="252" y="75" width="136" height="35" rx="4" fill={isDark ? "#1e1b4b" : "#fff"} />
      <text x="320" y="96" fill="#34d399" fontSize="8" fontWeight="bold" textAnchor="middle">1. .subscribe() auto</text>
      <rect x="252" y="115" width="136" height="35" rx="4" fill={isDark ? "#1e1b4b" : "#fff"} />
      <text x="320" y="136" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">2. .unsubscribe() al destruir</text>
      <text x="320" y="168" fill="#a5b4fc" fontSize="8" textAnchor="middle">markForCheck() en OnPush</text>

      <path d="M400 108 L450 108" stroke="#818cf8" strokeWidth="2" />

      {/* Template Output */}
      <rect x="450" y="40" width="160" height="135" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="530" y="65" fill="#10b981" fontWeight="bold" fontSize="11" textAnchor="middle">Vista (Template)</text>
      <rect x="462" y="80" width="136" height="40" rx="4" fill={isDark ? "#065f46" : "#fff"} />
      <text x="530" y="98" fill="#fff" fontSize="8" fontFamily="monospace" textAnchor="middle">@if (data$ | async; as d)</text>
      <text x="530" y="112" fill="#a7f3d0" fontSize="8" textAnchor="middle">Valor desenvuelto</text>
      <text x="530" y="150" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">Cero Fugas de Memoria</text>
    </svg>
  );
  },

  "ng-rxjs-subjects-comparison": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Subject */}
      <rect x="30" y="30" width="175" height="155" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#38bdf8" strokeWidth="1.5" />
      <text x="117" y="55" fill="#38bdf8" fontWeight="bold" fontSize="11" textAnchor="middle">Subject</text>
      <rect x="42" y="70" width="151" height="40" rx="4" fill={isDark ? "#0f172a" : "#fff"} />
      <text x="117" y="90" fill={textColor} fontSize="8" textAnchor="middle">Sin valor inicial</text>
      <text x="117" y="102" fill="#38bdf8" fontSize="8" textAnchor="middle">Multidifusión simple</text>
      <text x="117" y="135" fill={subtextColor} fontSize="8" textAnchor="middle">Suscriptores tardíos</text>
      <text x="117" y="150" fill="#ef4444" fontSize="8" textAnchor="middle">NO reciben eventos pasados</text>

      {/* BehaviorSubject */}
      <rect x="232" y="30" width="175" height="155" rx="8" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#818cf8" strokeWidth="1.5" />
      <text x="319" y="55" fill="#818cf8" fontWeight="bold" fontSize="11" textAnchor="middle">BehaviorSubject</text>
      <rect x="244" y="70" width="151" height="40" rx="4" fill={isDark ? "#1e1b4b" : "#fff"} />
      <text x="319" y="90" fill={textColor} fontSize="8" textAnchor="middle">Exige valor inicial</text>
      <text x="319" y="102" fill="#818cf8" fontSize="8" textAnchor="middle">new BehaviorSubject(val)</text>
      <text x="319" y="135" fill={textColor} fontSize="8" textAnchor="middle">Emite de inmediato el</text>
      <text x="319" y="150" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">ÚLTIMO valor emitido</text>

      {/* ReplaySubject */}
      <rect x="435" y="30" width="175" height="155" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="522" y="55" fill="#10b981" fontWeight="bold" fontSize="11" textAnchor="middle">ReplaySubject(N)</text>
      <rect x="447" y="70" width="151" height="40" rx="4" fill={isDark ? "#065f46" : "#fff"} />
      <text x="522" y="90" fill={textColor} fontSize="8" textAnchor="middle">Buffer de tamaño N</text>
      <text x="522" y="102" fill="#a7f3d0" fontSize="8" textAnchor="middle">new ReplaySubject(3)</text>
      <text x="522" y="135" fill={textColor} fontSize="8" textAnchor="middle">Reemite los N valores</text>
      <text x="522" y="150" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">previos a suscriptores</text>
    </svg>
  );
  },

  "ng-router-guards-pipeline": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Header */}
      <text x="320" y="38" fill="#38bdf8" fontWeight="bold" fontSize="12" textAnchor="middle">Pipeline de Navegación con Guards Funcionales</text>

      {/* Step 1: canMatch */}
      <rect x="30" y="60" width="105" height="85" rx="6" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#38bdf8" strokeWidth="1.5" />
      <text x="82" y="82" fill="#38bdf8" fontWeight="bold" fontSize="10" textAnchor="middle">1. canMatch</text>
      <text x="82" y="102" fill={textColor} fontSize="8" textAnchor="middle">¿Coincide la ruta?</text>
      <text x="82" y="118" fill={subtextColor} fontSize="7" textAnchor="middle">Evita cargar bundle</text>

      <path d="M135 102 L150 102" stroke="#38bdf8" strokeWidth="2" />

      {/* Step 2: canActivate */}
      <rect x="150" y="60" width="105" height="85" rx="6" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#818cf8" strokeWidth="1.5" />
      <text x="202" y="82" fill="#818cf8" fontWeight="bold" fontSize="10" textAnchor="middle">2. canActivate</text>
      <text x="202" y="102" fill={textColor} fontSize="8" textAnchor="middle">¿Autenticado?</text>
      <text x="202" y="118" fill={subtextColor} fontSize="7" textAnchor="middle">Roles / Token</text>

      <path d="M255 102 L270 102" stroke="#818cf8" strokeWidth="2" />

      {/* Step 3: resolve */}
      <rect x="270" y="60" width="105" height="85" rx="6" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="322" y="82" fill="#10b981" fontWeight="bold" fontSize="10" textAnchor="middle">3. resolve</text>
      <text x="322" y="102" fill={textColor} fontSize="8" textAnchor="middle">Pre-fetch de datos</text>
      <text x="322" y="118" fill={subtextColor} fontSize="7" textAnchor="middle">Evita vista vacía</text>

      <path d="M375 102 L390 102" stroke="#10b981" strokeWidth="2" />

      {/* Step 4: Component Active */}
      <rect x="390" y="60" width="110" height="85" rx="6" fill={isDark ? "#0284c7" : "#e0f2fe"} stroke="#0284c7" strokeWidth="1.5" />
      <text x="445" y="82" fill={isDark ? "#fff" : "#0369a1"} fontWeight="bold" fontSize="10" textAnchor="middle">4. Componente</text>
      <text x="445" y="102" fill={isDark ? "#fff" : "#0369a1"} fontSize="8" textAnchor="middle">Vista Renderizada</text>
      <text x="445" y="118" fill={isDark ? "#e0f2fe" : "#0284c7"} fontSize="7" textAnchor="middle">Interacción usuario</text>

      <path d="M500 102 L515 102" stroke="#f59e0b" strokeWidth="2" />

      {/* Step 5: canDeactivate */}
      <rect x="515" y="60" width="100" height="85" rx="6" fill={isDark ? "#713f12" : "#fef9c3"} stroke="#f59e0b" strokeWidth="1.5" />
      <text x="565" y="82" fill="#f59e0b" fontWeight="bold" fontSize="9" textAnchor="middle">5. canDeact</text>
      <text x="565" y="102" fill={textColor} fontSize="8" textAnchor="middle">¿Salir de ruta?</text>
      <text x="565" y="118" fill={subtextColor} fontSize="7" textAnchor="middle">Previene pérdida</text>

      <text x="320" y="180" fill={subtextColor} fontSize="8" textAnchor="middle">Desde Angular 15+: Funciones puras CanActivateFn en lugar de clases con interfaces.</text>
    </svg>
  );
  },

  "ng-http-interceptor-chain": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Outgoing Pipeline */}
      <rect x="30" y="30" width="580" height="65" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#38bdf8" strokeWidth="1.5" />
      <text x="45" y="52" fill="#38bdf8" fontWeight="bold" fontSize="10">Petición Saliente (Request Pipeline):</text>
      
      <rect x="45" y="60" width="140" height="26" rx="4" fill={isDark ? "#0f172a" : "#fff"} />
      <text x="115" y="77" fill={textColor} fontSize="8" textAnchor="middle">1. HttpClient.get()</text>
      
      <path d="M185 73 L215 73" stroke="#38bdf8" strokeWidth="2" />
      
      <rect x="215" y="60" width="170" height="26" rx="4" fill={isDark ? "#0f172a" : "#fff"} />
      <text x="300" y="77" fill="#38bdf8" fontSize="8" textAnchor="middle">2. authInterceptor (Bearer JWT)</text>
      
      <path d="M385 73 L415 73" stroke="#38bdf8" strokeWidth="2" />
      
      <rect x="415" y="60" width="180" height="26" rx="4" fill={isDark ? "#0369a1" : "#bae6fd"} />
      <text x="505" y="77" fill={isDark ? "#fff" : "#0369a1"} fontSize="8" fontWeight="bold" textAnchor="middle">3. Servidor Backend API</text>

      {/* Incoming Pipeline */}
      <rect x="30" y="120" width="580" height="65" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="45" y="142" fill="#10b981" fontWeight="bold" fontSize="10">Respuesta Entrante (Response Pipeline):</text>
      
      <rect x="45" y="150" width="150" height="26" rx="4" fill={isDark ? "#065f46" : "#fff"} />
      <text x="120" y="167" fill={textColor} fontSize="8" textAnchor="middle">HTTP Response (200 / 401)</text>
      
      <path d="M195 163 L225 163" stroke="#10b981" strokeWidth="2" />
      
      <rect x="225" y="150" width="180" height="26" rx="4" fill={isDark ? "#065f46" : "#fff"} />
      <text x="315" y="167" fill="#34d399" fontSize="8" textAnchor="middle">errorInterceptor (Catch &amp; Refresh)</text>
      
      <path d="M405 163 L435 163" stroke="#10b981" strokeWidth="2" />
      
      <rect x="435" y="150" width="160" height="26" rx="4" fill={isDark ? "#047857" : "#a7f3d0"} />
      <text x="515" y="167" fill="#fff" fontSize="8" fontWeight="bold" textAnchor="middle">Component Subscription</text>
    </svg>
  );
  },

  "ng-change-detection-default-vs-onpush": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Default Strategy */}
      <rect x="30" y="25" width="270" height="170" rx="8" fill={isDark ? "#450a0a" : "#fee2e2"} stroke="#ef4444" strokeWidth="1.5" />
      <text x="165" y="48" fill="#ef4444" fontWeight="bold" fontSize="11" textAnchor="middle">Default (CheckAlways)</text>
      
      {/* Tree nodes */}
      <circle cx="165" cy="75" r="14" fill="#ef4444" />
      <text x="165" y="79" fill="#fff" fontSize="8" textAnchor="middle">Root</text>
      
      <circle cx="100" cy="115" r="14" fill="#ef4444" />
      <text x="100" y="119" fill="#fff" fontSize="8" textAnchor="middle">Hijo 1</text>
      <circle cx="230" cy="115" r="14" fill="#ef4444" />
      <text x="230" y="119" fill="#fff" fontSize="8" textAnchor="middle">Hijo 2</text>
      
      <text x="165" y="152" fill="#ef4444" fontSize="8" fontWeight="bold" textAnchor="middle">Verifica el ÁRBOL COMPLETO</text>
      <text x="165" y="168" fill={subtextColor} fontSize="8" textAnchor="middle">Ante cualquier evento, timer o click ajeno</text>
      <text x="165" y="182" fill="#ef4444" fontSize="7" textAnchor="middle">Ineficiente en árboles grandes (O(N))</text>

      {/* OnPush Strategy */}
      <rect x="340" y="25" width="270" height="170" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="475" y="48" fill="#10b981" fontWeight="bold" fontSize="11" textAnchor="middle">OnPush (CheckOnce)</text>
      
      <circle cx="475" cy="75" r="14" fill="#10b981" />
      <text x="475" y="79" fill="#fff" fontSize="8" textAnchor="middle">Root</text>
      
      <circle cx="410" cy="115" r="14" fill={isDark ? "#1e293b" : "#cbd5e1"} stroke="#94a3b8" />
      <text x="410" y="119" fill={textColor} fontSize="8" textAnchor="middle">Saltado</text>
      <circle cx="540" cy="115" r="14" fill="#10b981" />
      <text x="540" y="119" fill="#fff" fontSize="8" textAnchor="middle">Input mut</text>
      
      <text x="475" y="152" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">Salta subárboles completos</text>
      <text x="475" y="168" fill={subtextColor} fontSize="8" textAnchor="middle">Solo verifica si cambia la referencia @Input()</text>
      <text x="475" y="182" fill="#10b981" fontSize="7" textAnchor="middle">o si emite un Signal / Async Pipe local</text>
    </svg>
  );
  },

  "ng-deferrable-views-triggers": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Header */}
      <text x="320" y="38" fill="#a855f7" fontWeight="bold" fontSize="12" textAnchor="middle">Deferrable Views (@defer): Estados y Disparadores</text>

      {/* Block 1: @placeholder */}
      <rect x="30" y="55" width="135" height="110" rx="6" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#94a3b8" strokeWidth="1.5" />
      <text x="97" y="78" fill="#94a3b8" fontWeight="bold" fontSize="10" textAnchor="middle">@placeholder</text>
      <text x="97" y="98" fill={textColor} fontSize="8" textAnchor="middle">Render inicial</text>
      <text x="97" y="112" fill={textColor} fontSize="8" textAnchor="middle">instantáneo</text>
      <text x="97" y="145" fill={subtextColor} fontSize="7" textAnchor="middle">Skeleton / Botón</text>

      <path d="M165 110 L185 110" stroke="#a855f7" strokeWidth="2" />

      {/* Block 2: Trigger */}
      <rect x="185" y="55" width="125" height="110" rx="6" fill={isDark ? "#3b0764" : "#fdf4ff"} stroke="#a855f7" strokeWidth="1.5" />
      <text x="247" y="78" fill="#c084fc" fontWeight="bold" fontSize="10" textAnchor="middle">Disparador (Trigger)</text>
      <text x="247" y="98" fill={textColor} fontSize="8" textAnchor="middle">• on viewport</text>
      <text x="247" y="112" fill={textColor} fontSize="8" textAnchor="middle">• on interaction</text>
      <text x="247" y="126" fill={textColor} fontSize="8" textAnchor="middle">• on hover / timer</text>
      <text x="247" y="145" fill="#a855f7" fontSize="7" fontWeight="bold" textAnchor="middle">prefetch on idle</text>

      <path d="M310 110 L330 110" stroke="#a855f7" strokeWidth="2" />

      {/* Block 3: @loading */}
      <rect x="330" y="55" width="135" height="110" rx="6" fill={isDark ? "#713f12" : "#fef9c3"} stroke="#f59e0b" strokeWidth="1.5" />
      <text x="397" y="78" fill="#f59e0b" fontWeight="bold" fontSize="10" textAnchor="middle">@loading</text>
      <text x="397" y="98" fill={textColor} fontSize="8" textAnchor="middle">Descarga del chunk</text>
      <text x="397" y="112" fill={textColor} fontSize="8" textAnchor="middle">JS en paralelo</text>
      <text x="397" y="145" fill={subtextColor} fontSize="7" textAnchor="middle">minimum 500ms</text>

      <path d="M465 110 L485 110" stroke="#10b981" strokeWidth="2" />

      {/* Block 4: @defer content */}
      <rect x="485" y="55" width="125" height="110" rx="6" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="547" y="78" fill="#10b981" fontWeight="bold" fontSize="10" textAnchor="middle">@defer Contenido</text>
      <text x="547" y="98" fill="#fff" fontSize="8" textAnchor="middle">Componente</text>
      <text x="547" y="112" fill="#fff" fontSize="8" textAnchor="middle">pesado hidratado</text>
      <text x="547" y="145" fill="#10b981" fontSize="7" fontWeight="bold" textAnchor="middle">FCP ultrarrápido</text>

      <text x="320" y="185" fill={subtextColor} fontSize="8" textAnchor="middle">También cuenta con bloque @error si falla la red al descargar el bundle.</text>
    </svg>
  );
  },

  "ng-hierarchical-di-tree": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Root Environment Injector */}
      <rect x="170" y="25" width="300" height="40" rx="6" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#818cf8" strokeWidth="1.5" />
      <text x="320" y="45" fill="#818cf8" fontWeight="bold" fontSize="10" textAnchor="middle">EnvironmentInjector (providedIn: &apos;root&apos;)</text>
      <text x="320" y="58" fill={subtextColor} fontSize="8" textAnchor="middle">Instancia Singleton Global para toda la App</text>

      <path d="M320 65 L320 85" stroke="#818cf8" strokeWidth="1.5" />

      {/* Parent Element Injector */}
      <rect x="195" y="85" width="250" height="40" rx="6" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="320" y="104" fill="#10b981" fontWeight="bold" fontSize="10" textAnchor="middle">Parent ElementInjector (@Component providers)</text>
      <text x="320" y="117" fill={textColor} fontSize="8" textAnchor="middle">Nueva instancia para este subárbol</text>

      <path d="M320 125 L320 145" stroke="#10b981" strokeWidth="1.5" />

      {/* Child Element Injector */}
      <rect x="220" y="145" width="200" height="40" rx="6" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#38bdf8" strokeWidth="1.5" />
      <text x="320" y="164" fill="#38bdf8" fontWeight="bold" fontSize="10" textAnchor="middle">Child Component Injector</text>
      <text x="320" y="177" fill={textColor} fontSize="8" textAnchor="middle">inject(MyService) busca hacia arriba</text>

      {/* Modifiers Sidebar */}
      <rect x="25" y="50" width="125" height="135" rx="6" fill={isDark ? "#0f172a" : "#fff"} stroke={border} />
      <text x="87" y="70" fill="#38bdf8" fontWeight="bold" fontSize="9" textAnchor="middle">Modificadores</text>
      <text x="35" y="90" fill={textColor} fontSize="8">• @Self(): Solo local</text>
      <text x="35" y="110" fill={textColor} fontSize="8">• @SkipSelf(): Padre+</text>
      <text x="35" y="130" fill={textColor} fontSize="8">• @Optional(): Null</text>
      <text x="35" y="150" fill={textColor} fontSize="8">• @Host(): En host</text>
      <text x="87" y="172" fill="#10b981" fontSize="7" textAnchor="middle">Resolución precisa</text>
    </svg>
  );
  },

  "ng-zonejs-monkey-patching": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Step 1: Async Web API */}
      <rect x="30" y="35" width="165" height="150" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#38bdf8" strokeWidth="1.5" />
      <text x="112" y="58" fill="#38bdf8" fontWeight="bold" fontSize="10" textAnchor="middle">1. Web APIs Asíncronas</text>
      <rect x="42" y="72" width="141" height="48" rx="4" fill={isDark ? "#0f172a" : "#fff"} />
      <text x="112" y="90" fill={textColor} fontSize="8" fontFamily="monospace" textAnchor="middle">setTimeout / Promise</text>
      <text x="112" y="105" fill={textColor} fontSize="8" fontFamily="monospace" textAnchor="middle">addEventListener</text>
      <text x="112" y="145" fill={subtextColor} fontSize="8" textAnchor="middle">Navegador estándar</text>

      <path d="M195 110 L235 110" stroke="#38bdf8" strokeWidth="2" />

      {/* Step 2: Zone.js Monkey Patching */}
      <rect x="235" y="35" width="170" height="150" rx="8" fill={isDark ? "#713f12" : "#fef9c3"} stroke="#f59e0b" strokeWidth="1.5" />
      <text x="320" y="58" fill="#f59e0b" fontWeight="bold" fontSize="10" textAnchor="middle">2. Zone.js (Monkey Patch)</text>
      <rect x="247" y="72" width="146" height="48" rx="4" fill={isDark ? "#78350f" : "#fff"} />
      <text x="320" y="90" fill={textColor} fontSize="8" textAnchor="middle">Intercepta finalización</text>
      <text x="320" y="105" fill="#f59e0b" fontSize="8" fontWeight="bold" textAnchor="middle">onHasTask / onInvokeTask</text>
      <text x="320" y="145" fill={subtextColor} fontSize="8" textAnchor="middle">Envuelve cada callback</text>

      <path d="M405 110 L445 110" stroke="#f59e0b" strokeWidth="2" />

      {/* Step 3: ApplicationRef.tick() */}
      <rect x="445" y="35" width="165" height="150" rx="8" fill={isDark ? "#450a0a" : "#fee2e2"} stroke="#ef4444" strokeWidth="1.5" />
      <text x="527" y="58" fill="#ef4444" fontWeight="bold" fontSize="10" textAnchor="middle">3. Change Detection</text>
      <rect x="455" y="72" width="145" height="48" rx="4" fill={isDark ? "#7f1d1d" : "#fff"} />
      <text x="527" y="90" fill="#fca5a5" fontSize="8" fontFamily="monospace" textAnchor="middle">ApplicationRef.tick()</text>
      <text x="527" y="105" fill="#fff" fontSize="8" textAnchor="middle">Revisa el árbol completo</text>
      <text x="527" y="145" fill="#ef4444" fontSize="8" fontWeight="bold" textAnchor="middle">Sobrecarga innecesaria</text>
    </svg>
  );
  },

  "ng-signal-inputs-outputs-model": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Input Signal */}
      <rect x="30" y="30" width="175" height="155" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#38bdf8" strokeWidth="1.5" />
      <text x="117" y="55" fill="#38bdf8" fontWeight="bold" fontSize="11" textAnchor="middle">input() Signal</text>
      <rect x="42" y="70" width="151" height="45" rx="4" fill={isDark ? "#0f172a" : "#fff"} />
      <text x="117" y="88" fill={textColor} fontSize="8" fontFamily="monospace" textAnchor="middle">title = input.required</text>
      <text x="117" y="102" fill="#38bdf8" fontSize="8" fontFamily="monospace" textAnchor="middle">&lt;string&gt;();</text>
      <text x="117" y="135" fill={textColor} fontSize="8" textAnchor="middle">Reemplaza @Input()</text>
      <text x="117" y="150" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">Readonly Signal</text>

      {/* Output */}
      <rect x="232" y="30" width="175" height="155" rx="8" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#818cf8" strokeWidth="1.5" />
      <text x="319" y="55" fill="#818cf8" fontWeight="bold" fontSize="11" textAnchor="middle">output() Emitter</text>
      <rect x="244" y="70" width="151" height="45" rx="4" fill={isDark ? "#1e1b4b" : "#fff"} />
      <text x="319" y="88" fill={textColor} fontSize="8" fontFamily="monospace" textAnchor="middle">delete = output</text>
      <text x="319" y="102" fill="#818cf8" fontSize="8" fontFamily="monospace" textAnchor="middle">&lt;number&gt;();</text>
      <text x="319" y="135" fill={textColor} fontSize="8" textAnchor="middle">Reemplaza @Output()</text>
      <text x="319" y="150" fill="#818cf8" fontSize="8" fontWeight="bold" textAnchor="middle">delete.emit(id)</text>

      {/* Model Signal */}
      <rect x="435" y="30" width="175" height="155" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="522" y="55" fill="#10b981" fontWeight="bold" fontSize="11" textAnchor="middle">model() Two-Way</text>
      <rect x="447" y="70" width="151" height="45" rx="4" fill={isDark ? "#065f46" : "#fff"} />
      <text x="522" y="88" fill={textColor} fontSize="8" fontFamily="monospace" textAnchor="middle">checked = model</text>
      <text x="522" y="102" fill="#a7f3d0" fontSize="8" fontFamily="monospace" textAnchor="middle">&lt;boolean&gt;(false);</text>
      <text x="522" y="135" fill={textColor} fontSize="8" textAnchor="middle">Two-Way Reactivo</text>
      <text x="522" y="150" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">Writable Signal [(checked)]</text>
    </svg>
  );
  },

  "ng-zoneless-architecture": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Left: Zoneless Configuration */}
      <rect x="30" y="25" width="270" height="170" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="165" y="48" fill="#10b981" fontWeight="bold" fontSize="11" textAnchor="middle">Zoneless Angular (18+)</text>
      
      <rect x="45" y="60" width="240" height="35" rx="4" fill={isDark ? "#065f46" : "#fff"} />
      <text x="55" y="76" fill="#34d399" fontSize="8" fontFamily="monospace">bootstrapApplication(App, &#123;</text>
      <text x="55" y="88" fill="#fff" fontSize="8" fontFamily="monospace">  providers: [provideExperimentalZoneless...]</text>
      
      <text x="165" y="115" fill={textColor} fontSize="8" textAnchor="middle">🚫 Zone.js removido del bundle (-35KB)</text>
      <text x="165" y="132" fill={textColor} fontSize="8" textAnchor="middle">🚫 Cero monkey-patching en window/APIs</text>
      <text x="165" y="150" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">⚡ Reactividad 100% basada en Signals</text>
      <text x="165" y="175" fill={subtextColor} fontSize="8" textAnchor="middle">Mejor integración con Web Components nativos</text>

      {/* Right: Scheduler Mechanism */}
      <rect x="340" y="25" width="270" height="170" rx="8" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#818cf8" strokeWidth="1.5" />
      <text x="475" y="48" fill="#818cf8" fontWeight="bold" fontSize="11" textAnchor="middle">Notificación al Planificador (Scheduler)</text>
      
      <rect x="355" y="60" width="240" height="28" rx="4" fill={isDark ? "#1e1b4b" : "#fff"} />
      <text x="475" y="78" fill="#818cf8" fontSize="8" textAnchor="middle">1. Mutación de un Signal: count.set(42)</text>
      
      <path d="M475 88 L475 98" stroke="#818cf8" strokeWidth="1.5" />
      
      <rect x="355" y="98" width="240" height="28" rx="4" fill={isDark ? "#1e1b4b" : "#fff"} />
      <text x="475" y="116" fill={textColor} fontSize="8" textAnchor="middle">2. Marca la vista afectada como sucia</text>
      
      <path d="M475 126 L475 136" stroke="#818cf8" strokeWidth="1.5" />
      
      <rect x="355" y="136" width="240" height="28" rx="4" fill={isDark ? "#4338ca" : "#c7d2fe"} />
      <text x="475" y="154" fill={isDark ? "#fff" : "#312e81"} fontSize="8" fontWeight="bold" textAnchor="middle">3. Microtask Tick: Renderiza SOLO la vista</text>
      
      <text x="475" y="180" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">✓ Máximo rendimiento en Core Web Vitals</text>
    </svg>
  );
  },

  "ng-non-destructive-hydration-ssr": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Server Render */}
      <rect x="30" y="30" width="180" height="155" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#38bdf8" strokeWidth="1.5" />
      <text x="120" y="55" fill="#38bdf8" fontWeight="bold" fontSize="11" textAnchor="middle">Servidor (Angular SSR)</text>
      <rect x="42" y="70" width="156" height="40" rx="4" fill={isDark ? "#0f172a" : "#fff"} />
      <text x="120" y="88" fill={textColor} fontSize="8" textAnchor="middle">Renderiza HTML con</text>
      <text x="120" y="102" fill="#38bdf8" fontSize="8" fontFamily="monospace" textAnchor="middle">anotaciones ngh=&quot;...&quot;</text>
      <text x="120" y="135" fill={subtextColor} fontSize="8" textAnchor="middle">Entrega HTML estático</text>
      <text x="120" y="155" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">FCP ultrarrápido</text>

      <path d="M210 108 L250 108" stroke="#38bdf8" strokeWidth="2" />

      {/* Bridge: provideClientHydration */}
      <rect x="250" y="45" width="140" height="125" rx="8" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#818cf8" strokeWidth="1.5" />
      <text x="320" y="72" fill="#818cf8" fontWeight="bold" fontSize="10" textAnchor="middle">provideClient-</text>
      <text x="320" y="86" fill="#818cf8" fontWeight="bold" fontSize="10" textAnchor="middle">Hydration()</text>
      <rect x="258" y="100" width="124" height="40" rx="4" fill={isDark ? "#1e1b4b" : "#fff"} />
      <text x="320" y="118" fill={textColor} fontSize="7" textAnchor="middle">Reutiliza nodos DOM</text>
      <text x="320" y="130" fill="#10b981" fontSize="7" fontWeight="bold" textAnchor="middle">Cero destrucción</text>

      <path d="M390 108 L430 108" stroke="#818cf8" strokeWidth="2" />

      {/* Client Browser */}
      <rect x="430" y="30" width="180" height="155" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="520" y="55" fill="#10b981" fontWeight="bold" fontSize="11" textAnchor="middle">Cliente Navegador</text>
      <rect x="442" y="70" width="156" height="40" rx="4" fill={isDark ? "#065f46" : "#fff"} />
      <text x="520" y="88" fill="#34d399" fontSize="8" textAnchor="middle">Enlaza event listeners</text>
      <text x="520" y="102" fill="#fff" fontSize="8" textAnchor="middle">y activa Signals locales</text>
      <text x="520" y="135" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">Cero Parpadeo (FOUC)</text>
      <text x="520" y="155" fill={textColor} fontSize="7" textAnchor="middle">Preserva scroll y foco</text>
    </svg>
  );
  },

  "ng-ngrx-signal-store-architecture": ({ isDark, textColor, subtextColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Shell: signalStore */}
      <rect x="30" y="25" width="580" height="165" rx="10" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#818cf8" strokeWidth="1.5" />
      <text x="50" y="47" fill="#818cf8" fontWeight="bold" fontSize="11" fontFamily="monospace">const UserStore = signalStore(&#123; providedIn: &apos;root&apos; &#125;, ...)</text>

      {/* Feature 1: withState */}
      <rect x="50" y="62" width="125" height="95" rx="6" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1" />
      <text x="60" y="82" fill="#34d399" fontWeight="bold" fontSize="10">withState(&#123;...&#125;)</text>
      <text x="60" y="100" fill={textColor} fontSize="8">• users: User[]</text>
      <text x="60" y="114" fill={textColor} fontSize="8">• filter: string</text>
      <text x="60" y="140" fill={subtextColor} fontSize="8">Estado Primitivo</text>

      {/* Feature 2: withComputed */}
      <rect x="185" y="62" width="135" height="95" rx="6" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#818cf8" strokeWidth="1" />
      <text x="195" y="82" fill="#818cf8" fontWeight="bold" fontSize="10">withComputed()</text>
      <text x="195" y="100" fill={textColor} fontSize="8">• filteredUsers:</text>
      <text x="195" y="114" fill={textColor} fontSize="8">  computed(() =&gt; ...)</text>
      <text x="195" y="140" fill="#a5b4fc" fontSize="8">Valores Derivados</text>

      {/* Feature 3: withMethods */}
      <rect x="330" y="62" width="135" height="95" rx="6" fill={isDark ? "#713f12" : "#fef9c3"} stroke="#f59e0b" strokeWidth="1" />
      <text x="340" y="82" fill="#facc15" fontWeight="bold" fontSize="10">withMethods()</text>
      <text x="340" y="100" fill={textColor} fontSize="8">• loadUsers: rxMethod</text>
      <text x="340" y="114" fill={textColor} fontSize="8">• patchState(store)</text>
      <text x="340" y="140" fill="#ca8a04" fontSize="8">Mutaciones &amp; HTTP</text>

      {/* Feature 4: withHooks */}
      <rect x="475" y="62" width="120" height="95" rx="6" fill={isDark ? "#450a0a" : "#fee2e2"} stroke="#ef4444" strokeWidth="1" />
      <text x="485" y="82" fill="#f87171" fontWeight="bold" fontSize="10">withHooks()</text>
      <text x="485" y="100" fill={textColor} fontSize="8">• onInit()</text>
      <text x="485" y="114" fill={textColor} fontSize="8">• onDestroy()</text>
      <text x="485" y="140" fill="#ef4444" fontSize="8">Ciclo de Vida</text>

      <text x="50" y="176" fill={textColor} fontSize="8">Cero boilerplate: reemplaza reducers, actions y effects con un diseño componible en Signals.</text>
    </svg>
  );
  },

  "ng-nx-module-federation-enterprise": ({ isDark, textColor, border }) => {
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto max-h-72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="620" height="200" rx="12" fill={isDark ? "#111827" : "#f8fafc"} stroke={border} strokeWidth="1.5" />
      
      {/* Host Shell App */}
      <rect x="30" y="25" width="270" height="80" rx="8" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#38bdf8" strokeWidth="1.5" />
      <text x="45" y="46" fill="#38bdf8" fontWeight="bold" fontSize="11">App Host Shell (apps/shell)</text>
      <text x="45" y="65" fill={textColor} fontSize="8">Enrutador maestro + Layout global</text>
      <text x="45" y="85" fill="#38bdf8" fontSize="8" fontFamily="monospace">loadRemoteModule(&#123; remoteName: &apos;catalog&apos; &#125;)</text>

      {/* Remote Apps */}
      <rect x="340" y="25" width="270" height="80" rx="8" fill={isDark ? "#312e81" : "#ede9fe"} stroke="#818cf8" strokeWidth="1.5" />
      <text x="355" y="46" fill="#818cf8" fontWeight="bold" fontSize="11">Remotes Independientes (Microfrontends)</text>
      <rect x="355" y="58" width="115" height="35" rx="4" fill={isDark ? "#1e1b4b" : "#fff"} />
      <text x="412" y="78" fill="#818cf8" fontSize="8" fontWeight="bold" textAnchor="middle">apps/catalog</text>
      <rect x="480" y="58" width="115" height="35" rx="4" fill={isDark ? "#1e1b4b" : "#fff"} />
      <text x="537" y="78" fill="#a855f7" fontSize="8" fontWeight="bold" textAnchor="middle">apps/checkout</text>

      {/* Shared Libs in Nx Monorepo */}
      <rect x="30" y="120" width="580" height="75" rx="8" fill={isDark ? "#064e3b" : "#ecfdf5"} stroke="#10b981" strokeWidth="1.5" />
      <text x="45" y="140" fill="#10b981" fontWeight="bold" fontSize="10">Librerías Compartidas (Nx Monorepo):</text>
      
      <rect x="45" y="150" width="165" height="32" rx="4" fill={isDark ? "#065f46" : "#fff"} />
      <text x="127" y="170" fill="#34d399" fontSize="8" fontWeight="bold" textAnchor="middle">libs/shared/ui (Design System)</text>
      
      <rect x="230" y="150" width="180" height="32" rx="4" fill={isDark ? "#065f46" : "#fff"} />
      <text x="320" y="170" fill="#34d399" fontSize="8" fontWeight="bold" textAnchor="middle">libs/shared/data-access (API/Signals)</text>
      
      <rect x="430" y="150" width="165" height="32" rx="4" fill={isDark ? "#065f46" : "#fff"} />
      <text x="512" y="170" fill="#34d399" fontSize="8" fontWeight="bold" textAnchor="middle">libs/shared/util (Helpers)</text>
    </svg>
  );
  }
};
