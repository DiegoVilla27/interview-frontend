import { ISection } from "../../types";

export const questionsAngular: ISection = {
  title: "Angular",
  collapse: "collapseAngular",
  icon: "angular",
  questions: [
    // === BÁSICO ===
    {
      title: "¿Qué es Angular y qué elementos componen un Componente?",
      response:
        "Angular es un framework TypeScript integral para aplicaciones web escalables. Un componente se compone de: clase TypeScript (lógica), template HTML (vista), estilos CSS/SCSS (diseño) y el decorador `@Component` con metadatos asociados.",
      level: "basico"
    },
    {
      title: "¿Qué tipos de Data Binding existen en Angular?",
      response:
        "Interpolación `{{ valor }}`, Property Binding `[prop]='valor'` (envía datos al DOM), Event Binding `(event)='metodo()'` (escucha eventos de la vista) y Two-Way Binding `[(ngModel)]='valor'` (sincronización bidireccional).",
      level: "basico"
    },
    {
      title: "¿Qué es el nuevo Control Flow sintáctico (@if, @for, @switch) en Angular?",
      response:
        "Introducido en Angular 17 para reemplazar las directivas estructurales `*ngIf`, `*ngFor` y `*ngSwitch`. Ofrece mejor rendimiento de compilación, chequeo de tipos estricto y bloque `@empty` nativo en `@for`.",
      level: "basico"
    },
    {
      title: "¿Qué son las Directivas y qué tipos existen?",
      response:
        "Las directivas extienden el comportamiento o estructura del DOM. Se dividen en: Directivas de Componente (con vista propia), Directivas de Atributo (modifican apariencia o conducta: `ngClass`, `ngStyle`) y Directivas Estructurales (alteran la estructura del árbol DOM).",
      level: "basico"
    },
    {
      title: "¿Qué son los Pipes y cómo se utilizan?",
      response:
        "Son funciones de transformación de datos en plantillas (`{{ fecha | date:'short' }}`). Existen pipes puros (se ejecutan solo ante cambios primitivos o de referencia) e impuros (se re-evalúan en cada ciclo de detección de cambios).",
      level: "basico"
    },
    {
      title: "¿Qué diferencia hay entre ngOnInit y el constructor?",
      response:
        "El `constructor` es un método de TypeScript para instanciar la clase e inyectar dependencias. `ngOnInit` es un hook del ciclo de vida de Angular que se ejecuta cuando los `@Input()` y bindings iniciales ya están listos.",
      level: "basico"
    },
    // === MEDIO ===
    {
      title: "¿Qué son los Standalone Components y por qué reemplazan a NgModule?",
      response:
        "Son componentes independientes que declaran sus propias dependencias (`imports: [...]`) directamente en el decorador `@Component({ standalone: true })`. Simplifican la arquitectura, eliminan el boilerplate de `NgModule` y facilitan el tree-shaking.",
      level: "medio"
    },
    {
      title: "¿Qué son los Signals en Angular (Angular 16+) y cómo funcionan?",
      response:
        "Son primitivas reactivas (`signal(valor)`, `computed(() => ...)`, `effect(() => ...)`) que notifican granularmente a Angular qué partes específicas del DOM deben actualizarse, habilitando reactividad sincrónica y libre de Zone.js.",
      level: "medio"
    },
    {
      title: "¿Qué diferencia hay entre Template-driven Forms y Reactive Forms?",
      response:
        "Template-driven: declarativos en el template, asíncronos y pensados para formularios simples. Reactive Forms: controlados por TypeScript (`FormGroup`, `FormControl`), sincrónicos, fuertemente tipados y óptimos para validaciones dinámicas complejas.",
      level: "medio"
    },
    {
      title: "¿Qué es el Async Pipe y por qué es una buena práctica?",
      response:
        "Es un pipe (`observable$ | async`) que se suscribe automáticamente a un Observable o Promise, desenvuelve su valor en la plantilla y se desuscribe al destruir el componente, evitando memory leaks.",
      level: "medio"
    },
    {
      title: "¿Qué diferencia hay entre Subject, BehaviorSubject y ReplaySubject en RxJS?",
      response:
        "`Subject`: multidifusión simple sin valor inicial. `BehaviorSubject`: almacena y emite de inmediato el último valor a nuevos suscriptores. `ReplaySubject`: almacena un buffer histórico de N valores emitidos para nuevos suscriptores.",
      level: "medio"
    },
    {
      title: "¿Qué son los Guards en el Router de Angular?",
      response:
        "Son interfaces o funciones funcionales (`canActivate`, `canDeactivate`, `canMatch`, `resolve`) que restringen o condicionan la navegación a rutas según autenticación, roles o resolución de datos previos.",
      level: "medio"
    },
    {
      title: "¿Qué es un HTTP Interceptor y cuáles son sus casos de uso?",
      response:
        "Es una función o servicio que intercepta peticiones y respuestas HTTP. Casos de uso: inyección automática de Bearer tokens, manejo centralizado de errores, loaders globales y reintentos de peticiones.",
      level: "medio"
    },
    // === AVANZADO ===
    {
      title: "¿Cómo funciona Change Detection: Default vs OnPush?",
      response:
        "`Default` revisa el árbol completo de componentes ante cualquier evento en el navegador. `OnPush` solo dispara la verificación si cambian las referencias de los `@Input()`, si se dispara un evento originado en el propio componente, o si emite un Signal/Observable con async pipe.",
      level: "avanzado"
    },
    {
      title: "¿Qué son las Deferrable Views (@defer) y cómo optimizan la carga inicial?",
      response:
        "Permiten cargar bloques de template y sus dependencias de forma perezosa (lazy) según disparadores como `on viewport`, `on interaction`, `on hover` o `when condición`, reduciendo el First Contentful Paint drásticamente.",
      level: "avanzado"
    },
    {
      title: "¿Cómo funciona la Inyección de Dependencias Jerárquica y los modificadores de resolución?",
      response:
        "Angular busca dependencias ascendiendo por el árbol de inyectores (ElementInjector -> EnvironmentInjector). Modificadores: `@Self()` (solo inyector actual), `@SkipSelf()` (inicia en el padre), `@Optional()` (retorna null si falta), `@Host()` (limita al host component).",
      level: "avanzado"
    },
    {
      title: "¿Qué es NgZone y cómo funciona Zone.js?",
      response:
        "Zone.js parcha todas las APIs asíncronas del navegador (setTimeout, fetch, addEventListener) para notificar a Angular cuándo una tarea terminó y ejecutar `ApplicationRef.tick()` automáticamente.",
      level: "avanzado"
    },
    {
      title: "¿Qué es signalInputs, signalOutputs y model() en Angular moderno?",
      response:
        "Nuevas APIs basadas en Signals: `input()` reemplaza `@Input()`, `output()` reemplaza `@Output()`, y `model()` provee Two-Way Binding tipado reactivo basado en Signals.",
      level: "avanzado"
    },
    // === EXPERTO ===
    {
      title: "¿Qué es Zoneless Angular y cómo se logra un rendimiento extremo?",
      response:
        "Es la capacidad de ejecutar Angular sin la sobrecarga de `Zone.js` (`provideExperimentalZonelessChangeDetection()`). La detección de cambios se vuelve 100% reactiva y local basada en Signals, reduciendo el bundle y eliminando ciclos de chequeo global innecesarios.",
      level: "experto"
    },
    {
      title: "¿Cómo implementar Non-Destructive Hydration con SSR en Angular?",
      response:
        "A diferencia de la hidratación destructiva tradicional que destruía y recreaba el DOM, `provideClientHydration()` reutiliza los nodos DOM generados por el servidor preservando el estado de inputs y scroll sin parpadeos visuales.",
      level: "experto"
    },
    {
      title: "¿Cómo estructurar el Estado Global con NgRx SignalStore?",
      response:
        "NgRx SignalStore es una solución ligera basada en Signals con arquitectura modular: `signalStore(withState(...), withComputed(...), withMethods(...), withHooks(...))`. Ofrece tipado estricto, reactividad nativa y cero boilerplate comparado con reducers tradicionales.",
      level: "experto"
    },
    {
      title: "¿Cómo diseñar una arquitectura empresarial escalable con NX y Module Federation en Angular?",
      response:
        "Monorepo estructurado con NX aplicando librerías por capa (feature, ui, data-access, util) con reglas de linting estrictas (`eslint-plugin-nx`), carga dinámica de microfrontends con Module Federation (`@angular-architects/module-federation`) y Caché de Computación Distribuido.",
      level: "experto"
    }
  ]
};

export default questionsAngular;
