import { ISection } from "../../types";

export const questionsAngular: ISection = {
  title: "Angular",
  collapse: "collapseAngular",
  icon: "angular",
  questions: [
    {
      title: "¿Qué es Angular y en qué se diferencia de AngularJS?",
      response:
        "Angular es un framework moderno para construir aplicaciones web basadas en TypeScript. AngularJS fue la primera versión (basada en JavaScript y MVC). Angular es totalmente reescrito, usa TypeScript, RxJS y un enfoque modular más escalable."
    },
    {
      title: "¿Qué es un componente en Angular y qué elementos lo componen?",
      response:
        "Un componente es la unidad básica de la UI en Angular. Incluye: clase TypeScript (lógica), template HTML (vista), estilos CSS/SCSS, y metadatos definidos en el decorador @Component."
    },
    {
      title: "¿Qué diferencia hay entre un componente y un módulo?",
      response:
        "Un componente representa una parte visual y lógica de la aplicación, mientras que un módulo (NgModule) agrupa componentes, directivas, pipes y servicios para organizarlos y reutilizarlos."
    },
    {
      title:
        "Explica la diferencia entre property binding, event binding y two-way binding.",
      response:
        "Property binding: pasar datos del TS al template `[prop]`. Event binding: escuchar eventos del template `(event)`. Two-way binding: combinación de ambos con `[(ngModel)]`."
    },
    {
      title: "¿Qué es NgModule y qué decoradores principales conoces?",
      response:
        "NgModule organiza bloques de código Angular (componentes, directivas, pipes, servicios). Los principales decoradores son: @Component, @Directive, @Pipe, @Injectable, @NgModule."
    },
    {
      title:
        "¿Qué son las directivas y qué diferencias hay entre estructurales y de atributos?",
      response:
        "Las directivas alteran el DOM o el comportamiento de los elementos. Estructurales cambian la estructura (`*ngIf`, `*ngFor`), y de atributos cambian apariencia o comportamiento (`ngClass`, `ngStyle`)."
    },
    {
      title:
        "¿Qué diferencia hay entre ngOnInit y el constructor de una clase en Angular?",
      response:
        "El constructor se ejecuta al instanciar el componente, mientras que ngOnInit es un hook del ciclo de vida que se ejecuta cuando Angular ha inicializado las propiedades vinculadas."
    },
    {
      title: "¿Qué es el data binding en Angular y cuántos tipos existen?",
      response:
        "Es la sincronización de datos entre la vista y la lógica. Tipos: interpolación `{{}}`, property binding `[prop]`, event binding `(event)` y two-way binding `[(ngModel)]`."
    },
    {
      title: "¿Qué es el router de Angular y cómo defines rutas básicas?",
      response:
        "El router permite navegación SPA. Se definen rutas en un arreglo con `path` y `component`, y se configuran con `RouterModule.forRoot(routes)`."
    },
    {
      title: "¿Para qué sirve el archivo angular.json?",
      response:
        "Configura el proyecto: scripts, estilos globales, assets, configuración de compilación y entornos."
    },
    {
      title: "¿Qué es RxJS y qué papel cumplen los Observables en Angular?",
      response:
        "RxJS es una librería para programación reactiva basada en flujos de datos asíncronos. Los Observables representan esos flujos y Angular los usa en HTTP, formularios y eventos."
    },
    {
      title:
        "Diferencia entre Observables y Promises. ¿Cuándo usarías cada uno?",
      response:
        "Promise maneja un único valor asincrónico. Observable maneja múltiples valores en el tiempo y permite cancelación. Angular recomienda Observables para flujos reactivos."
    },
    {
      title: "¿Qué son los servicios en Angular y cómo se inyectan?",
      response:
        "Son clases con lógica de negocio o conexión a APIs. Se inyectan con Dependency Injection mediante el decorador @Injectable y se registran en providers."
    },
    {
      title: "¿Qué son los pipes? ¿Cómo crear uno personalizado?",
      response:
        "Los pipes transforman datos en la vista (ej: date, uppercase). Un pipe personalizado se crea con @Pipe y la interfaz PipeTransform."
    },
    {
      title: "Diferencia entre template-driven forms y reactive forms.",
      response:
        "Template-driven: más simples, declarativos en el HTML. Reactive: controlados por código TS, más escalables, con validaciones complejas y mayor testabilidad."
    },
    {
      title: "Explica el ciclo de vida completo de un componente en Angular.",
      response:
        "Incluye hooks como: ngOnChanges, ngOnInit, ngDoCheck, ngAfterContentInit, ngAfterContentChecked, ngAfterViewInit, ngAfterViewChecked, ngOnDestroy."
    },
    {
      title: "¿Qué es Change Detection y cómo funciona en Angular?",
      response:
        "Es el mecanismo de Angular que actualiza la vista cuando cambian los datos. Por defecto recorre el árbol de componentes; se puede optimizar con OnPush."
    },
    {
      title:
        "¿Qué diferencia hay entre Subject, BehaviorSubject y ReplaySubject?",
      response:
        "Subject: emite valores a los subscriptores. BehaviorSubject: guarda el último valor y lo entrega al nuevo suscriptor. ReplaySubject: guarda varios valores anteriores y los entrega a nuevos suscriptores."
    },
    {
      title: "¿Qué es un Guard en el router de Angular?",
      response:
        "Son funciones/clases que controlan acceso a rutas (`CanActivate`, `CanDeactivate`, `Resolve`, `CanLoad`) para seguridad o pre-carga de datos."
    },
    {
      title: "¿Qué es el async pipe y por qué se prefiere usarlo?",
      response:
        "Es un pipe que se suscribe automáticamente a un Observable o Promise y maneja la cancelación de la suscripción. Evita fugas de memoria."
    },
    {
      title: "¿Cómo manejas lazy loading de módulos y qué ventajas tiene?",
      response:
        "Se carga un módulo solo cuando la ruta es accedida, optimizando el performance inicial. Se configura con loadChildren en las rutas."
    },
    {
      title: "¿Qué es un interceptor HTTP y qué casos de uso tiene?",
      response:
        "Es una clase que intercepta las peticiones/respuestas HTTP. Se usa para logging, manejo de errores, autenticación (tokens), o añadir headers."
    },
    {
      title:
        "¿Cómo funciona la estrategia de Change Detection en Angular? Explica Default vs OnPush.",
      response:
        "Default: revisa todo el árbol de componentes. OnPush: solo revisa cuando cambian inputs, un evento o un Observable emite, mejorando rendimiento."
    },
    {
      title: "¿Qué es NgZone y cómo optimiza la detección de cambios?",
      response:
        "NgZone controla la ejecución de código asincrónico para disparar Change Detection. Permite optimizar corriendo tareas fuera de Angular y reducir ciclos innecesarios."
    },
    {
      title: "¿Qué es un Standalone Component y qué ventajas tiene?",
      response:
        "Es un componente independiente (sin necesidad de NgModule) introducido en Angular 14+. Simplifica la estructura y facilita lazy loading."
    },
    {
      title:
        "¿Cómo manejarías la optimización de performance en una app Angular grande?",
      response:
        "Usar OnPush, trackBy en *ngFor, lazy loading, preloading selectivo, dividir bundles, tree-shaking, y evitar Change Detection innecesario."
    },
    {
      title: "¿Qué es State Management en Angular? ¿Qué librerías conoces?",
      response:
        "Es la gestión centralizada del estado de la aplicación. Librerías: NgRx, Akita, NGXS. Mejoran consistencia, escalabilidad y debugging."
    },
    {
      title:
        "¿Qué son los Signals en Angular (desde Angular 16+) y cómo se comparan con RxJS?",
      response:
        "Los signals son una API reactiva para manejo de estado local. Son sincrónicos, fáciles de usar y optimizados para Change Detection. RxJS es más potente para flujos complejos asincrónicos."
    },
    {
      title: "¿Cómo implementarías SSR con Angular Universal?",
      response:
        "Usando Angular Universal, que renderiza la app en el servidor para mejorar SEO y performance. Se configura con @nguniversal/express-engine."
    },
    {
      title:
        "¿Qué es preloading strategy en Angular Router y cuándo conviene usarlo?",
      response:
        "Es una estrategia para precargar módulos después de cargar la app inicial. Ejemplo: PreloadAllModules. Se usa cuando se quiere mejorar UX sin afectar el tiempo inicial de carga."
    },
    {
      title: "¿Qué son los diferentes niveles de inyección en Angular?",
      response:
        "root: disponible en toda la app. platform: compartido entre múltiples apps en la misma plataforma. any: crea una nueva instancia en cada inyección. component: ligado al componente y descendientes."
    },
    {
      title: "¿Cómo manejarías la internacionalización (i18n) en Angular?",
      response:
        "Con el módulo i18n integrado, usando etiquetas de marcado y comandos de Angular CLI para extraer y compilar traducciones. También con librerías como Transloco o ngx-translate."
    },
    {
      title: "¿Qué es un dynamic component loader y cuándo se usaría?",
      response:
        "Es la carga dinámica de componentes en tiempo de ejecución con ViewContainerRef y ComponentFactoryResolver. Útil en modales, dashboards configurables o CMS."
    },
    {
      title:
        "¿Qué técnicas conoces para mejorar el tiempo de carga inicial de una aplicación Angular?",
      response:
        "Lazy loading, preloading selectivo, Angular Universal (SSR), tree-shaking, code splitting, optimización de assets, y uso de Service Workers."
    }
  ]
};

export default questionsAngular;
