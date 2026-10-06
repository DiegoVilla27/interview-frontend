import { ISection } from "../../types";

export const questionsAngular: ISection = {
  id: "angular",
  title: "Angular",
  collapse: "collapseAngular",
  icon: "angular",
  category: "frameworks",
  description:
    "Signals, inyección de dependencias, RxJS, Change Detection Zoneless y arquitectura modular.",
  questions: [
    {
        "id": "ng-01",
        "title": "¿Qué es Angular y qué elementos componen un Componente?",
        "level": "basico",
        "tags": [
            "Angular",
            "Component",
            "Decorators",
            "TypeScript",
            "Standalone",
            "Metadata"
        ],
        "response": "Angular es un framework de desarrollo frontend robusto, integral y basado en TypeScript, mantenido por Google y orientado a la creación de aplicaciones web de nivel empresarial.\n\nA diferencia de librerías de renderizado que requieren un ecosistema heterogéneo de herramientas externas, Angular proporciona una plataforma completa y cohesiva: motor de inyección de dependencias jerárquico, cliente HTTP tipado, sistema de enrutamiento con guards, validación reactiva de formularios y el nuevo compilador de reactividad con Signals.\n\nUn **Componente** es el bloque de construcción fundamental de la interfaz de usuario en Angular y está constituido por cuatro piezas acopladas:\n1. **Clase TypeScript (`.ts`)**: Contiene el estado, las propiedades reactivas (Signals o variables), los métodos de interacción del usuario y la inyección de servicios mediante el `constructor` o la función moderna `inject()`.\n2. **Plantilla HTML (`.html` o inline `template`)**: Define la vista declarativa con enlace de datos (data binding) y el nuevo sistema de Control Flow sintáctico (`@if`, `@for`, `@switch`).\n3. **Estilos CSS/SCSS (`.scss` o inline `styles`)**: Estilizan la vista. Por defecto, Angular aplica `ViewEncapsulation.Emulated`, inyectando atributos únicos en tiempo de compilación para que los estilos no contaminen el resto de la aplicación.\n4. **Decorador `@Component`**: Metadatos que unen las tres piezas anteriores e instruyen al compilador cómo instanciar el componente (`selector`, `standalone: true`, `imports`, `changeDetection`).",
        "codeExample": {
            "language": "typescript",
            "code": "import { Component, signal, ChangeDetectionStrategy } from '@angular/core';\nimport { CommonModule } from '@angular/common';\n\n@Component({\n  selector: 'app-metric-card',\n  standalone: true,\n  imports: [CommonModule],\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  template: `\n    <article class=\"metric-card\">\n      <header class=\"text-sm text-slate-400\">{{ label() }}</header>\n      <p class=\"text-2xl font-bold text-sky-400\">{{ value() }} {{ unit() }}</p>\n      <button (click)=\"increment()\" class=\"btn-action\">Incrementar</button>\n    </article>\n  `,\n  styles: [`\n    .metric-card {\n      padding: 1rem;\n      border-radius: 0.5rem;\n      background: #0f172a;\n      border: 1px solid #334155;\n    }\n    .btn-action {\n      margin-top: 0.5rem;\n      padding: 0.25rem 0.75rem;\n      background: #0284c7;\n      color: white;\n      border-radius: 0.25rem;\n    }\n  `]\n})\nexport class MetricCardComponent {\n  // Estado reactivo moderno con Signals:\n  label = signal<string>('Rendimiento');\n  value = signal<number>(100);\n  unit = signal<string>('ms');\n\n  increment() {\n    this.value.update(v => v + 10);\n  }\n}"
        },
        "visualDiagram": {
            "id": "diag-ng-01",
            "title": "Anatomía de un Componente en Angular",
            "caption": "El decorador @Component une la lógica TypeScript, la plantilla HTML declarativa y los estilos encapsulados en un componente Standalone.",
            "diagramType": "ng-component-anatomy-metadata"
        },
        "interviewTips": {
            "whatInterviewersWant": "Destacar que en Angular moderno los componentes son Standalone por defecto, prescindiendo de NgModule.",
            "commonPitfalls": [
                "Confundir el selector CSS del componente con una directiva.",
                "No saber que ViewEncapsulation.Emulated añade atributos únicos (como _ngcontent) al DOM para aislar CSS."
            ],
            "followUps": [
                "¿Qué hace el selector de un componente?",
                "¿Qué diferencia hay entre templateUrl y template inline?"
            ]
        },
        "quiz": {
            "question": "¿Cuál es la función del decorador @Component en Angular?",
            "options": [
                "Proporcionar metadatos al compilador para vincular la clase TypeScript con su plantilla HTML, selector y estilos encapsulados.",
                "Convertir el código TypeScript en un archivo JSON para la base de datos.",
                "Compilar la aplicación a código máquina de Java.",
                "Crear un hilo de Web Workers independiente en el navegador."
            ],
            "correctIndex": 0,
            "explanation": "@Component es un decorador de metadatos que le indica a Angular cómo procesar, instanciar y renderizar la vista y la lógica asociada a un selector específico."
        }
    },
    {
        "id": "ng-02",
        "title": "¿Qué tipos de Data Binding existen en Angular?",
        "level": "basico",
        "tags": [
            "Data-Binding",
            "Interpolation",
            "Property-Binding",
            "Event-Binding",
            "Two-Way-Binding",
            "Templates"
        ],
        "response": "El Data Binding en Angular es el mecanismo declarativo que comunica la clase lógica TypeScript con la plantilla HTML. Se clasifica en cuatro categorías según la dirección del flujo de datos:\n\n1. **Interpolación (`{{ expresion }}`) - Unidireccional (Clase ➔ DOM)**:\n   - Inserta valores evaluados de TypeScript directamente como texto plano dentro del marcado HTML o en atributos no vinculables: `<h1>Hola {{ user.name }}</h1>`.\n2. **Property Binding (`[propiedad]=\"expresion\"`) - Unidireccional (Clase ➔ DOM)**:\n   - Envía datos desde la clase hacia una propiedad nativa del elemento DOM o hacia un `@Input()` / `input()` de un componente hijo: `<button [disabled]=\"isSubmitting()\">`.\n   - A diferencia de la interpolación de cadenas, permite transferir tipos complejos reales (booleanos, arrays, objetos).\n3. **Event Binding (`(evento)=\"metodo($event)\"`) - Unidireccional (DOM ➔ Clase)**:\n   - Escucha eventos del usuario en el navegador (clicks, pulsaciones de teclas, blur) o `@Output()` emitidos por componentes hijos para invocar métodos en la clase: `<input (input)=\"onTextChange($event)\">`.\n4. **Two-Way Binding (`[(ngModel)]=\"propiedad\"` o `[(model)]`) - Bidireccional**:\n   - Conocido como la sintaxis *\"Banana in a box\"* (`[()]`), combina Property Binding `[]` y Event Binding `()`.\n   - Sincroniza simultáneamente el valor del control en pantalla con la propiedad de TypeScript: los cambios en el input mutan la variable, y mutaciones en la variable actualizan el input en pantalla.",
        "codeExample": {
            "language": "typescript",
            "code": "import { Component, signal } from '@angular/core';\nimport { FormsModule } from '@angular/forms';\n\n@Component({\n  selector: 'app-binding-demo',\n  standalone: true,\n  imports: [FormsModule],\n  template: `\n    <section class=\"p-4 bg-slate-900 rounded-lg\">\n      <!-- 1. Interpolación: Clase ➔ Texto DOM -->\n      <h2 class=\"text-sky-400\">Usuario: {{ username }}</h2>\n\n      <!-- 2. Property Binding: Clase ➔ Propiedad DOM -->\n      <img [src]=\"avatarUrl\" [alt]=\"username\" class=\"w-16 h-16 rounded-full my-2\" />\n\n      <!-- 3. Event Binding: DOM ➔ Método Clase -->\n      <button (click)=\"resetName()\" [disabled]=\"isLocked()\" class=\"btn\">\n        Restablecer\n      </button>\n\n      <!-- 4. Two-Way Binding: Sincronización Bidireccional -->\n      <input [(ngModel)]=\"username\" placeholder=\"Edita tu nombre...\" class=\"input-field\" />\n    </section>\n  `\n})\nexport class BindingDemoComponent {\n  username = 'Carlos Slim';\n  avatarUrl = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100';\n  isLocked = signal<boolean>(false);\n\n  resetName() {\n    this.username = 'Invitado';\n  }\n}"
        },
        "visualDiagram": {
            "id": "diag-ng-02",
            "title": "Los 4 Cuadrantes de Data Binding en Angular",
            "caption": "Interpolación {{ }}, Property Binding [ ], Event Binding ( ) y Two-Way Binding [(ngModel)] con sus respectivas direcciones de flujo.",
            "diagramType": "ng-data-binding-quadrants"
        },
        "interviewTips": {
            "whatInterviewersWant": "Explicar con precisión la dirección del flujo de datos en cada tipo de binding y la convención de Two-Way binding.",
            "commonPitfalls": [
                "Confundir atributos HTML (strings estáticos) con propiedades del DOM (valores tipados en Property Binding).",
                "Olvidar importar FormsModule al utilizar [(ngModel)]."
            ],
            "followUps": [
                "¿Qué es banana-in-a-box [( )]?",
                "¿Qué diferencia hay entre property binding y attribute binding?"
            ]
        },
        "quiz": {
            "question": "¿Por qué se utiliza [propiedad]=\"valor\" en lugar de propiedad=\"{{ valor }}\" cuando se envía un booleano al DOM?",
            "options": [
                "Porque [propiedad] evalúa la expresión con su tipo nativo booleano, mientras que con {{ }} se convierte en el string 'true'/'false'.",
                "Porque la sintaxis de corchetes compila el código en WebAssembly.",
                "Porque las llaves dobles están prohibidas en todos los elementos de formulario.",
                "No hay ninguna diferencia; ambas opciones son idénticas en tiempo de ejecución."
            ],
            "correctIndex": 0,
            "explanation": "Property Binding ([prop]) enlaza propiedades del objeto DOM con su tipo real en memoria (ej: boolean, object), mientras que la interpolación {{ }} siempre evalúa a cadena de texto."
        }
    },
    {
        "id": "ng-03",
        "title": "¿Qué es el nuevo Control Flow sintáctico (@if, @for, @switch) en Angular?",
        "level": "basico",
        "tags": [
            "Control-Flow",
            "Angular-17",
            "Built-In",
            "If-Else",
            "For-Track",
            "Empty-Block",
            "Performance"
        ],
        "response": "Introducido en Angular 17, el **Built-in Control Flow** es una de las mayores modernizaciones de la historia del framework, sustituyendo por completo a las directivas estructurales heredadas (`*ngIf`, `*ngFor`, `*ngSwitch`):\n\nVentajas técnicas de la nueva sintaxis declarativa:\n1. **Integración Nativa en el Compilador**: No requiere importar `CommonModule`, `NgIf` o `NgFor` en los componentes Standalone.\n2. **Inferencia y Estrechamiento de Tipos (Type Narrowing)**: Dentro de un bloque `@if (user())`, TypeScript infiere automáticamente que `user()` no es `null` ni `undefined` sin necesidad de casts `!`.\n3. **Parámetro `track` Obligatorio en `@for`**: Elimina la verbosa función `trackBy` de `*ngFor`. Obliga a especificar una clave de seguimiento única (`track item.id`) en tiempo de compilación, optimizando el algoritmo de reconciliación en el DOM y evitando fugas de rendimiento.\n4. **Bloque `@empty` Nativo**: Proporciona una plantilla alternativa inmediata que se renderiza automáticamente si la colección está vacía, eliminando verificaciones manuales de `array.length === 0`.\n5. **Rendimiento de Compilación y Renderizado**: Hasta un **90% más rápido** en tiempo de ejecución y una reducción sustancial en el tiempo de compilación previa al bundle.",
        "codeExample": {
            "language": "html",
            "code": "<!-- 1. Bloque Condicional @if / @else if / @else -->\n@if (user(); as u) {\n  <div class=\"user-profile\">\n    <h2>Bienvenido, {{ u.name }}</h2>\n    <span class=\"badge\">{{ u.role }}</span>\n  </div>\n} @else if (isLoading()) {\n  <p class=\"skeleton-loader\">Cargando información del usuario...</p>\n} @else {\n  <p class=\"alert-empty\">Inicia sesión para continuar.</p>\n}\n\n<!-- 2. Bloque Bucle @for con track obligatorio y bloque @empty -->\n<ul class=\"project-list\">\n  @for (project of projects(); track project.id) {\n    <li class=\"item-row\">\n      <strong>{{ project.title }}</strong> - {{ project.status }}\n    </li>\n  } @empty {\n    <li class=\"empty-state\">No se encontraron proyectos asignados.</li>\n  }\n}\n\n<!-- 3. Bloque Selección @switch / @case / @default -->\n@switch (accountType()) {\n  @case ('enterprise') { <span class=\"tier-gold\">Plan Empresarial Dedicado</span> }\n  @case ('pro')        { <span class=\"tier-silver\">Plan Profesional</span> }\n  @default             { <span class=\"tier-free\">Plan Básico Gratuito</span> }\n}"
        },
        "visualDiagram": {
            "id": "diag-ng-03",
            "title": "Nuevo Control Flow (@if, @for, @switch) vs Directivas Legacy",
            "caption": "El nuevo Control Flow nativo integrado en el compilador elimina NgIf/NgFor, exige track explícito y añade el bloque @empty.",
            "diagramType": "ng-control-flow-syntax"
        },
        "interviewTips": {
            "whatInterviewersWant": "Resaltar que track es obligatorio en @for para optimizar el diffing en el DOM y que no requiere importar CommonModule.",
            "commonPitfalls": [
                "Intentar usar la sintaxis legacy *ngFor en proyectos Angular 17+.",
                "Usar track $index sin necesidad en colecciones mutables."
            ],
            "followUps": [
                "¿Por qué @for requiere track?",
                "¿Qué ventajas de rendimiento tiene el control flow frente a *ngIf y *ngFor?"
            ]
        },
        "quiz": {
            "question": "¿Por qué el parámetro 'track' es obligatorio en la nueva sintaxis @for de Angular?",
            "options": [
                "Para permitir al algoritmo de reconciliación identificar de forma única cada nodo del DOM y reutilizarlo eficientemente ante mutaciones de la lista.",
                "Para contar el número de usuarios que visitan la página en Google Analytics.",
                "Para ordenar alfabéticamente la lista de forma automática.",
                "Para descargar las imágenes de los elementos en segundo plano."
            ],
            "correctIndex": 0,
            "explanation": "track es un requisito estricto en @for para que Angular pueda rastrear la identidad de los elementos de la colección y evitar recrear nodos DOM innecesariamente durante reordenamientos o mutaciones."
        }
    },
    {
        "id": "ng-04",
        "title": "¿Qué son las Directivas y qué tipos existen?",
        "level": "basico",
        "tags": [
            "Directives",
            "Component-Directive",
            "Attribute-Directive",
            "Structural-Directive",
            "ViewContainerRef",
            "DOM"
        ],
        "response": "En Angular, una **Directiva** es una clase decorada con `@Directive` que permite extender la funcionalidad, la apariencia o la estructura del Document Object Model (DOM).\n\nSe dividen en tres grandes familias arquitectónicas:\n1. **Directivas de Componente**:\n   - Son componentes (`@Component`). Tienen una plantilla HTML asociada y representan la directiva más común en Angular.\n2. **Directivas de Atributo**:\n   - Modifican la apariencia, el estilo o el comportamiento de un elemento, componente u otra directiva existente sin alterar la jerarquía del DOM.\n   - Ejemplos nativos: `ngClass`, `ngStyle`.\n   - Se aplican como atributos HTML: `<button [appHighlight]=\"'#38bdf8'\">`.\n   - Utilizan `@HostBinding` / `host` y `@HostListener` para escuchar y responder a eventos sobre el elemento anfitrión.\n3. **Directivas Estructurales**:\n   - Modifican la estructura física del árbol DOM añadiendo, eliminando o manipulando elementos HTML.\n   - En la sintaxis clásica se identifican por el asterisco (`*ngIf`, `*ngFor`), el cual es azúcar sintáctico sobre `<ng-template>`.\n   - Interactúan directamente con **`TemplateRef`** (el contenido a renderizar) y **`ViewContainerRef`** (el contenedor en el DOM donde se insertan las vistas).",
        "codeExample": {
            "language": "typescript",
            "code": "import { Directive, ElementRef, HostListener, Input, inject } from '@angular/core';\n\n// Directiva de Atributo personalizada que añade un efecto visual hover al elemento anfitrión:\n@Directive({\n  selector: '[appHighlight]',\n  standalone: true,\n})\nexport class HighlightDirective {\n  private el = inject(ElementRef);\n\n  @Input() appHighlight = '#0284c7';\n  @Input() defaultColor = 'transparent';\n\n  @HostListener('mouseenter') onMouseEnter() {\n    this.highlight(this.appHighlight);\n  }\n\n  @HostListener('mouseleave') onMouseLeave() {\n    this.highlight(this.defaultColor);\n  }\n\n  private highlight(color: string) {\n    this.el.nativeElement.style.backgroundColor = color;\n    this.el.nativeElement.style.transition = 'background-color 0.2s ease';\n  }\n}\n\n// Uso en plantilla de cualquier componente:\n// <p [appHighlight]=\"'#38bdf8'\" [defaultColor]=\"'#0f172a'\">Pasa el ratón por aquí</p>"
        },
        "visualDiagram": {
            "id": "diag-ng-04",
            "title": "Clasificación de Directivas en Angular",
            "caption": "Las tres clases de directivas: Componentes (con vista propia), de Atributo (modifican apariencia/conducta) y Estructurales (alteran nodos del DOM).",
            "diagramType": "ng-directives-classification"
        },
        "interviewTips": {
            "whatInterviewersWant": "Saber distinguir claramente entre directivas de atributo y estructurales, explicando cómo estas últimas manipulan TemplateRef y ViewContainerRef.",
            "commonPitfalls": [
                "Intentar poner más de una directiva estructural con asterisco (*) en un mismo elemento DOM.",
                "Manipular el DOM directamente con ElementRef.nativeElement en lugar de usar Renderer2 o HostBinding."
            ],
            "followUps": [
                "¿Qué diferencia hay entre directivas estructurales y de atributo?",
                "¿Cómo crearías una directiva personalizada con HostListener?"
            ]
        },
        "quiz": {
            "question": "¿Cuál es la diferencia fundamental entre una Directiva de Atributo y una Directiva Estructural?",
            "options": [
                "La de Atributo modifica la apariencia o comportamiento de un nodo existente; la Estructural añade o destruye nodos físicos en el árbol DOM mediante TemplateRef y ViewContainerRef.",
                "La de Atributo solo funciona en CSS y la Estructural solo en TypeScript.",
                "Las directivas de Atributo requieren un servidor Node.js y las Estructurales se ejecutan en el cliente.",
                "No existe diferencia; son dos nombres para el mismo concepto."
            ],
            "correctIndex": 0,
            "explanation": "Las directivas de atributo alteran estilos o eventos de un elemento sin modificar el DOM, mientras que las estructurales alteran la forma del árbol insertando o quitando fragmentos del DOM."
        }
    },
    {
        "id": "ng-05",
        "title": "¿Qué son los Pipes y cómo se utilizan?",
        "level": "basico",
        "tags": [
            "Pipes",
            "Pure-Pipe",
            "Impure-Pipe",
            "Transform",
            "Formatting",
            "Performance"
        ],
        "response": "Un **Pipe** en Angular es una clase decorada con `@Pipe` que implementa la interfaz `PipeTransform`. Se utiliza en las plantillas mediante el operador de barra vertical (`|`) para transformar y formatear datos antes de presentarlos al usuario, sin alterar los valores originales en el modelo.\n\nAngular incluye pipes nativos como `DatePipe`, `CurrencyPipe`, `DecimalPipe`, `UpperCasePipe` y `JsonPipe`.\n\nLa distinción arquitectónica más crítica radica en su comportamiento de ejecución:\n\n1. **Pipes Puros (`@Pipe({ pure: true })` - Por Defecto)**:\n   - Angular ejecuta el método `transform()` **únicamente cuando detecta un cambio en el valor de entrada**.\n   - Si la entrada es un primitivo (número, string), comprueba igualdad por valor.\n   - Si la entrada es un objeto o array, comprueba **igualdad de referencia (`===`)**.\n   - **Rendimiento Óptimo**: Los resultados se memoizan; si la referencia no ha cambiado, no se re-evalúa la función, logrando un coste O(1).\n2. **Pipes Impuros (`@Pipe({ pure: false })`)**:\n   - Angular ejecuta el método `transform()` en **cada ciclo de Change Detection**, ante cualquier evento del navegador (un click, un timer, una tecla pulsada).\n   - **Riesgo**: Si un pipe impuro realiza operaciones pesadas (como filtrado u ordenación de arrays), degrada severamente los FPS de la aplicación.",
        "codeExample": {
            "language": "typescript",
            "code": "import { Pipe, PipeTransform } from '@angular/core';\n\n// Pipe Puro de alto rendimiento para convertir bytes a formato legible:\n@Pipe({\n  name: 'fileSize',\n  standalone: true,\n  pure: true // Memoizado: solo se ejecuta si cambia el número de bytes\n})\nexport class FileSizePipe implements PipeTransform {\n  transform(bytes: number, decimals: number = 2): string {\n    if (bytes === 0) return '0 Bytes';\n    const k = 1024;\n    const dm = decimals < 0 ? 0 : decimals;\n    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];\n    const i = Math.floor(Math.log(bytes) / Math.log(k));\n    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];\n  }\n}\n\n// Uso en plantilla:\n// <p>Tamaño del fichero: {{ documentSize | fileSize:1 }}</p>\n// Renderiza: 1048576 ➔ '1.0 MB'"
        },
        "visualDiagram": {
            "id": "diag-ng-05",
            "title": "Pipes Puros (Memoizados O(1)) vs Pipes Impuros",
            "caption": "Un Pipe Puro solo se re-evalúa si cambia el valor primitivo o la referencia del objeto; un Pipe Impuro corre en cada ciclo de Change Detection.",
            "diagramType": "ng-pipes-pure-vs-impure"
        },
        "interviewTips": {
            "whatInterviewersWant": "Explicar por qué los pipes puros requieren inmutabilidad (cambio de referencia) para re-evaluarse y advertir contra el uso de pipes impuros para filtrado de listas.",
            "commonPitfalls": [
                "Crear pipes impuros para filtrar arrays grandes provocando caídas de 60 FPS.",
                "Mutar un array in-place (.push) esperando que un pipe puro se ejecute."
            ],
            "followUps": [
                "¿Por qué los pipes impuros pueden afectar al rendimiento?",
                "¿Cuándo un pipe es preferible a un método en la plantilla?"
            ]
        },
        "quiz": {
            "question": "¿Por qué un Pipe Puro no se ejecuta de nuevo si agregas un elemento a un array mediante array.push()?",
            "options": [
                "Porque array.push() muta el array en su misma posición de memoria y los Pipes Puros solo verifican si la referencia en memoria (===) ha cambiado.",
                "Porque los Pipes Puros tienen deshabilitada la memoria caché.",
                "Porque Angular bloquea el uso de arrays en las plantillas.",
                "Porque solo funciona con datos descargados mediante WebSocket."
            ],
            "correctIndex": 0,
            "explanation": "Los Pipes Puros comprueban la referencia de los objetos (referential integrity). Al mutar el array con push(), la referencia sigue siendo idéntica y Angular asume que no hay cambios, omitiendo la ejecución."
        }
    },
    {
        "id": "ng-06",
        "title": "¿Qué diferencia hay entre ngOnInit y el constructor?",
        "level": "basico",
        "tags": [
            "Lifecycle",
            "Constructor",
            "ngOnInit",
            "Dependency-Injection",
            "Initialization",
            "Inputs"
        ],
        "response": "La diferencia entre el `constructor` y el hook `ngOnInit` radica en los límites entre el lenguaje TypeScript y el ciclo de vida gestionado por el framework Angular:\n\n1. **`constructor()` (Método Nativo de Clase TypeScript)**:\n   - Es una característica propia del motor de JavaScript/TypeScript, invocada al instanciar la clase (`new MyComponent()`).\n   - Se ejecuta en la fase inicial de resolución del sistema de Inyección de Dependencias (DI).\n   - **Estado del Componente**: En este instante, **los enlaces `@Input()` y `input()` de Angular aún NO han sido resueltos (`undefined`)**, el DOM del componente no ha sido creado y las vistas hijas no existen.\n   - **Propósito Único**: Inyectar servicios y configurar propiedades locales triviales. **Nunca debe contener lógica de negocio, peticiones HTTP ni suscripciones**.\n\n2. **`ngOnInit()` (Hook de Ciclo de Vida de Angular)**:\n   - Es invocado por Angular una única vez, inmediatamente después del primer ciclo de Change Detection en el que todos los `@Input()` y bindings iniciales ya han sido comprobados y asignados.\n   - **Estado del Componente**: Los inputs tienen sus valores reales listos para ser consumidos y el componente está inicializado en el contexto de Angular.\n   - **Propósito**: Es el lugar estándar para ejecutar la inicialización de la lógica de negocio, invocar llamadas a APIs de backend, preparar Signals y suscribirse a Observables.",
        "codeExample": {
            "language": "typescript",
            "code": "import { Component, OnInit, Input, inject } from '@angular/core';\nimport { UserService } from './user.service';\n\n@Component({\n  selector: 'app-user-detail',\n  standalone: true,\n  template: `<p>Usuario ID: {{ userId }} | Datos: {{ userData?.name }}</p>`\n})\nexport class UserDetailComponent implements OnInit {\n  // Inyección moderna de dependencias:\n  private userService = inject(UserService);\n\n  @Input({ required: true }) userId!: string;\n  userData: any = null;\n\n  constructor() {\n    // ⚠️ AQUÍ this.userId es 'undefined' porque Angular aún no ha procesado las propiedades:\n    console.log('Constructor - userId:', this.userId); // undefined\n  }\n\n  ngOnInit(): void {\n    // ✅ AQUÍ this.userId ya tiene el valor asignado por el componente padre:\n    console.log('ngOnInit - userId:', this.userId); // 'usr_456'\n    this.loadUserDetails();\n  }\n\n  private loadUserDetails() {\n    this.userService.getUserById(this.userId).subscribe(data => {\n      this.userData = data;\n    });\n  }\n}"
        },
        "visualDiagram": {
            "id": "diag-ng-06",
            "title": "Línea Temporal: constructor() vs ngOnInit()",
            "caption": "El constructor instancia la clase e inyecta dependencias pero sus @Input() son undefined; ngOnInit se ejecuta con los inputs listos.",
            "diagramType": "ng-constructor-vs-ngoninit"
        },
        "interviewTips": {
            "whatInterviewersWant": "Saber que los @Input() están indefinidos en el constructor y que ngOnInit es donde Angular garantiza que los enlaces iniciales están listos.",
            "commonPitfalls": [
                "Realizar llamadas HTTP pesadas en el constructor.",
                "Intentar leer valores de @Input() dentro del constructor."
            ],
            "followUps": [
                "¿Por qué los inputs no están disponibles en el constructor?",
                "¿Qué hace la función inject() frente a la inyección por constructor?"
            ]
        },
        "quiz": {
            "question": "¿Qué valor tiene una propiedad decorada con @Input() si intentas leerla dentro del constructor() de la clase?",
            "options": [
                "undefined, porque Angular aún no ha ejecutado el ciclo de vinculación de datos en esa fase de instanciación.",
                "El valor definitivo enviado por el componente padre.",
                "Lanza una excepción de compilación NullPointerException.",
                "Retorna una Promesa pendiente."
            ],
            "correctIndex": 0,
            "explanation": "El constructor es invocado por el motor de JavaScript antes de que Angular tenga oportunidad de inicializar y enlazar las entradas (@Input), por lo que siempre será undefined."
        }
    },
    {
        "id": "ng-07",
        "title": "¿Qué son los Standalone Components y por qué reemplazan a NgModule?",
        "level": "medio",
        "tags": [
            "Standalone-Components",
            "NgModule",
            "Architecture",
            "Tree-Shaking",
            "Angular-15+",
            "DX"
        ],
        "response": "Los **Standalone Components** representan el estándar oficial por defecto en Angular desde Angular 15, eliminando la necesidad de declarar componentes, directivas y pipes dentro de los módulos monolíticos tradicionales (`@NgModule`).\n\n1. **El Problema de `NgModule` (Arquitectura Legacy)**:\n   - Cada componente debía registrarse obligatoriamente en un `NgModule` (`declarations`).\n   - Si un componente requería usar `CommonModule`, botones o formularios, debía importar el módulo completo que los contenía, dificultando saber qué dependencias reales utilizaba cada archivo.\n   - Creaba anti-patrones como los gigantescos `SharedModule`, que inflaban los bundles y estropeaban el **Tree-Shaking** al empaquetar código que muchas pantallas nunca utilizaban.\n\n2. **La Solución Standalone (`standalone: true`)**:\n   - Cada componente, directiva o pipe es **autosuficiente y autónomo**.\n   - Declara directamente en su decorador `@Component({ imports: [ButtonComponent, DatePipe] })` las dependencias precisas que consume su plantilla.\n   - **Bootstrapping Directo**: La aplicación se inicia directamente con `bootstrapApplication(RootComponent, { providers: [...] })`.\n   - **Carga Perezosa Simplificada (Lazy Loading)**: El router carga directamente componentes individuales con `loadComponent: () => import('./profile.component')`, reduciendo el código boilerplate a cero.",
        "codeExample": {
            "language": "typescript",
            "code": "import { Component } from '@angular/core';\nimport { bootstrapApplication } from '@angular/platform-browser';\nimport { provideRouter, Routes } from '@angular/router';\n\n// 1. Componente Standalone autónomo:\n@Component({\n  selector: 'app-user-profile',\n  standalone: true,\n  template: `<h2>Perfil de Usuario Autónomo</h2>`\n})\nexport class UserProfileComponent {}\n\n// 2. Rutas con carga perezosa directa de componentes sin NgModules:\nconst routes: Routes = [\n  {\n    path: 'profile',\n    loadComponent: () =>\n      import('./user-profile.component').then(m => m.UserProfileComponent),\n  }\n];\n\n// 3. Inicio moderno de la aplicación sin AppModule:\n@Component({\n  selector: 'app-root',\n  standalone: true,\n  template: `<router-outlet></router-outlet>`\n})\nexport class AppComponent {}\n\nbootstrapApplication(AppComponent, {\n  providers: [provideRouter(routes)],\n});"
        },
        "visualDiagram": {
            "id": "diag-ng-07",
            "title": "Standalone Components vs Arquitectura NgModule Legacy",
            "caption": "Los Standalone Components declaran sus dependencias directas con imports: [], permitiendo tree-shaking óptimo y carga con loadComponent.",
            "diagramType": "ng-standalone-vs-ngmodule"
        },
        "interviewTips": {
            "whatInterviewersWant": "Explicar cómo los Standalone Components simplifican el bootstrapping de la aplicación con bootstrapApplication() y mejoran el tree-shaking.",
            "commonPitfalls": [
                "Olvidar importar directivas o componentes hijos en el array imports del Standalone Component.",
                "Seguir creando módulos NgModule en aplicaciones nuevas."
            ],
            "followUps": [
                "¿Cómo se configura el bootstrap con bootstrapApplication?",
                "¿Cómo migrarías un proyecto de NgModules a standalone?"
            ]
        },
        "quiz": {
            "question": "¿Cuál es la principal ventaja técnica de los Standalone Components frente a NgModule?",
            "options": [
                "Permiten un Tree-Shaking quirúrgico al declarar dependencias directas en imports: [] y simplifican la carga perezosa con loadComponent().",
                "Permiten que la aplicación se ejecute en navegadores sin soporte de JavaScript.",
                "Hacen que Angular deje de usar TypeScript y use Python.",
                "Eliminan la necesidad de escribir hojas de estilos CSS."
            ],
            "correctIndex": 0,
            "explanation": "Al eliminar el nivel de indirección de NgModule, las herramientas de empaquetado (esbuild/Vite) pueden analizar con precisión las dependencias usadas y descartar código muerto de forma óptima."
        }
    },
    {
        "id": "ng-08",
        "title": "¿Qué son los Signals en Angular (Angular 16+) y cómo funcionan?",
        "level": "medio",
        "tags": [
            "Signals",
            "Reactivity",
            "Angular-16+",
            "Fine-Grained",
            "computed",
            "effect",
            "Zoneless"
        ],
        "response": "Introducidos en Angular 16 y consolidados en Angular 17/18, los **Signals** son el nuevo modelo de **reactividad granular (Fine-Grained Reactivity)** de Angular, inspirados en modelos de compilación reactiva modernos como SolidJS.\n\nUn Signal es una envoltura alrededor de un valor que notifica a los consumidores cuando ese valor cambia. Se basa en un grafo de dependencias dinámico y sincrónico.\n\nLos tres bloques fundamentales son:\n1. **Writable Signals (`signal(valor)`)**:\n   - Almacenan un valor mutable que se lee invocándolo como función: `count()`.\n   - Se actualizan mediante `.set(nuevoValor)` o `.update(fnActualizadora)`.\n2. **Computed Signals (`computed(() => expresion)`)**:\n   - Señales derivadas de solo lectura cuyo valor se calcula a partir de otros signals.\n   - **Memoización Perezosa (Lazy & Memoized)**: No se recalculan hasta que se leen, y recuerdan su último valor si sus dependencias no han cambiado.\n3. **Effects (`effect(() => ...)`)**:\n   - Operaciones con efectos secundarios que se ejecutan automáticamente cada vez que alguno de los signals que leen dentro emite un nuevo valor (ideal para logs o analíticas).\n\n**Diferencia clave con RxJS**: Los Signals son **sincrónicos, siempre tienen un valor actual, están libres de condiciones de carrera (glitch-free)** y no requieren suscripciones ni desuscripciones manuales.",
        "codeExample": {
            "language": "typescript",
            "code": "import { Component, signal, computed, effect } from '@angular/core';\n\n@Component({\n  selector: 'app-cart-summary',\n  standalone: true,\n  template: `\n    <div class=\"cart-panel\">\n      <p>Items: {{ quantity() }}</p>\n      <p>Precio Unitario: ${{ unitPrice() }}</p>\n      <p class=\"total\">Total: ${{ subtotal() }} (Impuestos: ${{ tax() }})</p>\n      <button (click)=\"addItem()\" class=\"btn\">Añadir Item</button>\n    </div>\n  `\n})\nexport class CartSummaryComponent {\n  // 1. Writable Signals (Estado base):\n  quantity = signal<number>(1);\n  unitPrice = signal<number>(50);\n\n  // 2. Computed Signals (Derivados y memoizados automáticamente):\n  subtotal = computed(() => this.quantity() * this.unitPrice());\n  tax = computed(() => this.subtotal() * 0.21);\n\n  constructor() {\n    // 3. Effect: Reacciona automáticamente a cambios en quantity:\n    effect(() => {\n      console.log(`[Auditoría] Carrito actualizado: ${this.quantity()} unidades. Total: $${this.subtotal()}`);\n    });\n  }\n\n  addItem() {\n    this.quantity.update(q => q + 1);\n  }\n}"
        },
        "visualDiagram": {
            "id": "diag-ng-08",
            "title": "Grafo de Reactividad Granular con Angular Signals",
            "caption": "Writable Signal ➔ Computed Signal memoizado ➔ Actualización quirúrgica del nodo DOM exacto sin verificar el árbol completo.",
            "diagramType": "ng-signals-fine-grained-reactivity"
        },
        "interviewTips": {
            "whatInterviewersWant": "Diferenciar claramente Signals (reactividad sincrónica, sin suscripción, siempre con valor) de RxJS Observables (flujos asíncronos de eventos continuos).",
            "commonPitfalls": [
                "Escribir en un signal dentro de un computed() (viola la pureza).",
                "Usar effect() para sincronizar estados en lugar de usar computed()."
            ],
            "followUps": [
                "¿Qué diferencia hay entre computed y effect?",
                "¿Cómo convertirías un Observable en Signal (toSignal)?"
            ]
        },
        "quiz": {
            "question": "¿Cuál es la principal diferencia entre un Signal de Angular y un Observable de RxJS?",
            "options": [
                "Un Signal es sincrónico, siempre posee un valor actual y no requiere desuscripción manual, mientras que un Observable representa un flujo de eventos asíncrono.",
                "Un Signal solo funciona en navegadores móviles.",
                "Un Observable solo puede emitir números y un Signal strings.",
                "Los Signals solo pueden ser utilizados dentro de directivas de atributo."
            ],
            "correctIndex": 0,
            "explanation": "Los Signals ofrecen un valor sincrónico siempre disponible y libre de fugas de memoria sin suscripción explícita, mientras que los Observables manejan secuencias asíncronas de eventos en el tiempo."
        }
    },
    {
        "id": "ng-09",
        "title": "¿Qué diferencia hay entre Template-driven Forms y Reactive Forms?",
        "level": "medio",
        "tags": [
            "Forms",
            "Reactive-Forms",
            "Template-Driven",
            "FormGroup",
            "FormControl",
            "Validation"
        ],
        "response": "Angular ofrece dos enfoques arquitectónicos radicalmente distintos para la gestión de formularios:\n\n1. **Reactive Forms (`ReactiveFormsModule`) - Estándar Empresarial**:\n   - **Paradigma**: Controlado directamente desde la clase TypeScript mediante instancias explícitas de `FormGroup`, `FormControl` y `FormArray`.\n   - **Flujo de Datos**: 100% síncrono. Cada cambio de valor emite a través de flujos tipados (`valueChanges`).\n   - **Inmutabilidad y Tipado**: Desde Angular 14, soporta tipado estricto en TypeScript (`FormGroup<{ email: FormControl<string> }>`), previniendo errores en tiempo de compilación.\n   - **Testabilidad**: Extraordinariamente fácil de probar mediante tests unitarios en memoria, sin necesidad de montar el DOM ni usar herramientas visuales.\n   - **Casos de Uso**: Formularios complejos, validaciones dinámicas cruzadas entre campos, formularios con campos variables y lógica empresarial estricta.\n\n2. **Template-driven Forms (`FormsModule`)**:\n   - **Paradigma**: Se declara directamente en la plantilla HTML mediante directivas (`[(ngModel)]`, `ngForm`).\n   - **Flujo de Datos**: Asíncrono. Angular crea los objetos de control en segundo plano tras inspeccionar el marcado HTML del DOM.\n   - **Testabilidad**: Requiere pruebas de integración pesadas que rendericen el DOM para simular la interacción.\n   - **Casos de Uso**: Formularios muy sencillos o pantallas de login elementales sin validaciones complejas.",
        "codeExample": {
            "language": "typescript",
            "code": "import { Component } from '@angular/core';\nimport { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';\n\n// Formulario Reactivo Fuertemente Tipado:\ninterface RegisterForm {\n  email: FormControl<string>;\n  password: FormControl<string>;\n}\n\n@Component({\n  selector: 'app-register',\n  standalone: true,\n  imports: [ReactiveFormsModule],\n  template: `\n    <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" class=\"space-y-4\">\n      <div>\n        <input formControlName=\"email\" type=\"email\" placeholder=\"Correo electrónico\" />\n        @if (form.controls.email.invalid && form.controls.email.touched) {\n          <p class=\"error\">Email inválido o requerido.</p>\n        }\n      </div>\n      <button type=\"submit\" [disabled]=\"form.invalid\">Registrar</button>\n    </form>\n  `\n})\nexport class RegisterComponent {\n  form = new FormGroup<RegisterForm>({\n    email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),\n    password: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(8)] }),\n  });\n\n  onSubmit() {\n    if (this.form.valid) {\n      console.log('Payload tipado:', this.form.getRawValue());\n    }\n  }\n}"
        },
        "visualDiagram": {
            "id": "diag-ng-09",
            "title": "Reactive Forms (TypeScript Síncrono) vs Template-Driven",
            "caption": "Reactive Forms gestiona el modelo FormGroup tipado en TypeScript; Template-driven depende de directivas asíncronas en el HTML.",
            "diagramType": "ng-reactive-vs-template-forms"
        },
        "interviewTips": {
            "whatInterviewersWant": "Preferir categóricamente Reactive Forms para cualquier aplicación empresarial debido a su tipado estricto, sincronía y facilidad de pruebas.",
            "commonPitfalls": [
                "Mezclar [(ngModel)] con formControlName en el mismo input (antipatrón desaconsejado por Angular).",
                "No tipar los controles de Reactive Forms en TypeScript."
            ],
            "followUps": [
                "¿Qué ventajas de tipado tienen los Reactive Forms tipados?",
                "¿Cómo crearías un validador asíncrono?"
            ]
        },
        "quiz": {
            "question": "¿Cuál es la principal ventaja de Reactive Forms sobre Template-driven Forms para pruebas unitarias?",
            "options": [
                "El modelo del formulario (FormGroup) se crea en TypeScript, permitiendo validar lógica y valores sin necesidad de renderizar el DOM.",
                "No permite cometer errores ortográficos en el HTML.",
                "Envía los datos automáticamente a una base de datos Firebase.",
                "Elimina los requisitos de contraseña segura en el navegador."
            ],
            "correctIndex": 0,
            "explanation": "En Reactive Forms el formulario existe independientemente del DOM en TypeScript, facilitando escribir tests unitarios rápidos y deterministas sobre la lógica de validación sin instanciar componentes visuales."
        }
    },
    {
        "id": "ng-10",
        "title": "¿Qué es el Async Pipe y por qué es una buena práctica?",
        "level": "medio",
        "tags": [
            "Async-Pipe",
            "RxJS",
            "Observables",
            "Memory-Leaks",
            "OnPush",
            "Unsubscribe"
        ],
        "response": "El pipe `async` (`| async`) en Angular es una utilidad fundamental para consumir flujos de datos asíncronos (`Observable` o `Promise`) directamente en las plantillas HTML.\n\nVentajas críticas que lo convierten en el estándar de oro:\n1. **Suscripción Automática**: Se suscribe internamente al Observable en el momento en que el componente se renderiza en pantalla.\n2. **Prevención Total de Fugas de Memoria (Zero Memory Leaks)**: Cuando el componente es destruido (`ngOnDestroy`), el `async` pipe ejecuta automáticamente `.unsubscribe()`, liberando recursos sin requerir operadores como `takeUntilDestroyed()`, `Subject` ni suscripciones manuales en el archivo `.ts`.\n3. **Integración con `ChangeDetectionStrategy.OnPush`**: Cada vez que el Observable emite un nuevo valor, el pipe `async` invoca automáticamente `ChangeDetectorRef.markForCheck()`, garantizando que la vista se actualice incluso en componentes optimizados con OnPush.\n4. **Patrón `as data`**: Al combinarlo con `@if (stream$ | async; as data)`, permite desenvolver el valor una sola vez y reutilizarlo en múltiples puntos del bloque sin duplicar peticiones de red.",
        "codeExample": {
            "language": "typescript",
            "code": "import { Component, inject } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { HttpClient } from '@angular/common/http';\nimport { Observable } from 'rxjs';\n\ninterface User { id: number; name: string; email: string; }\n\n@Component({\n  selector: 'app-users',\n  standalone: true,\n  imports: [CommonModule],\n  template: `\n    <div class=\"container\">\n      <!-- El async pipe suscribe y desuscribe automáticamente sin memory leaks -->\n      @if (users$ | async; as users) {\n        <ul class=\"divide-y divide-slate-800\">\n          @for (user of users; track user.id) {\n            <li class=\"py-2 text-slate-200\">{{ user.name }} ({{ user.email }})</li>\n          }\n        </ul>\n      } @else {\n        <p class=\"text-sky-400\">Cargando usuarios desde la API...</p>\n      }\n    </div>\n  `\n})\nexport class UsersComponent {\n  private http = inject(HttpClient);\n  // El Observable se expone directamente a la plantilla sin suscribirse en el .ts:\n  users$: Observable<User[]> = this.http.get<User[]>('/api/users');\n}"
        },
        "visualDiagram": {
            "id": "diag-ng-10",
            "title": "Async Pipe: Gestión de Suscripción y Prevención de Fugas",
            "caption": "El Async Pipe maneja .subscribe() en el render, emite hacia la plantilla y llama .unsubscribe() automáticamente al destruir el componente.",
            "diagramType": "ng-async-pipe-auto-unsubscribe"
        },
        "interviewTips": {
            "whatInterviewersWant": "Explicar que async pipe previene memory leaks al desuscribirse automáticamente y que marca el componente para revisión en OnPush.",
            "commonPitfalls": [
                "Usar múltiples pipes async sobre el mismo observable disparando múltiples peticiones HTTP duplicadas (solución: usar @if (... | async as data)).",
                "Suscribirse manualmente en el .ts y guardar el valor en una variable local cuando un async pipe era suficiente."
            ],
            "followUps": [
                "¿Cómo evita el async pipe las fugas de memoria?",
                "¿Cómo combinarías varios observables en la plantilla?"
            ]
        },
        "quiz": {
            "question": "¿Cuál es la principal ventaja del pipe async en Angular al destruir un componente?",
            "options": [
                "Se desuscribe automáticamente del Observable, evitando fugas de memoria (memory leaks) sin necesidad de código manual.",
                "Guarda una copia de seguridad en el almacenamiento local del navegador.",
                "Reinicia la aplicación para refrescar los datos del servidor.",
                "Convierte los Observables en llamadas REST síncronas."
            ],
            "correctIndex": 0,
            "explanation": "El async pipe llama a .unsubscribe() automáticamente en el hook ngOnDestroy, eliminando el riesgo de retener suscripciones activas en memoria que provocarían memory leaks."
        }
    },
    {
        "id": "ng-11",
        "title": "¿Qué diferencia hay entre Subject, BehaviorSubject y ReplaySubject en RxJS?",
        "level": "medio",
        "tags": [
            "RxJS",
            "Subject",
            "BehaviorSubject",
            "ReplaySubject",
            "Multicast",
            "State"
        ],
        "response": "En RxJS y Angular, los **Subjects** son variantes especiales de `Observable` que implementan multidifusión (**Multicast**), actuando simultáneamente como `Observable` (emiten datos a múltiples observadores) y como `Observer` (pueden invocar `.next(valor)` para emitir datos).\n\nLas tres variantes principales difieren en la retención y entrega de valores pasados:\n\n1. **`Subject` (Multidifusión Simple Sin Memoria)**:\n   - No tiene valor inicial y no almacena historial.\n   - Los suscriptores solo reciben los eventos emitidos **después** del momento exacto en que se suscribieron.\n   - Si un suscriptor llega tarde, no recibe nada de lo ocurrido previamente.\n\n2. **`BehaviorSubject` (Estado Actual con Valor Inicial Obligatorio)**:\n   - Exige un valor por defecto en su instanciación: `new BehaviorSubject<User>(initialUser)`.\n   - Almacena siempre el **último valor emitido**.\n   - Cualquier nuevo suscriptor recibe **inmediatamente** el último valor actual al suscribirse.\n   - Permite inspección sincrónica mediante `subject.getValue()`. Ideal para modelar estados de sesión o autenticación en arquitecturas legacy.\n\n3. **`ReplaySubject(bufferSize)` (Búfer Histórico Configurable)**:\n   - No requiere valor inicial. Almacena en memoria un historial de los últimos **N** valores emitidos (`bufferSize`), e incluso puede configurarse una ventana temporal máxima de validez (`windowTime`).\n   - Cuando un observador se suscribe tarde, recibe en ráfaga secuencial los N valores previos registrados.",
        "codeExample": {
            "language": "typescript",
            "code": "import { Subject, BehaviorSubject, ReplaySubject } from 'rxjs';\n\n// 1. Subject simple (sin historial):\nconst subject$ = new Subject<number>();\nsubject$.next(1);\nsubject$.subscribe(v => console.log('Subject tardío:', v)); // No imprime nada\n\n// 2. BehaviorSubject (emite el último valor inmediatamente):\nconst behavior$ = new BehaviorSubject<string>('Estado Inicial');\nbehavior$.next('Sesión Activa');\nbehavior$.subscribe(v => console.log('BehaviorSubject tardío:', v)); // Imprime: 'Sesión Activa'\n\n// 3. ReplaySubject (reemite los últimos N valores en búfer):\nconst replay$ = new ReplaySubject<number>(2);\nreplay$.next(100);\nreplay$.next(200);\nreplay$.next(300);\nreplay$.subscribe(v => console.log('ReplaySubject tardío:', v)); // Imprime: 200, 300"
        },
        "visualDiagram": {
            "id": "diag-ng-11",
            "title": "Comparativa de RxJS Subjects: Subject vs BehaviorSubject vs ReplaySubject",
            "caption": "Subject no retiene eventos pasados; BehaviorSubject emite de inmediato el último valor; ReplaySubject repite un buffer de N emisiones.",
            "diagramType": "ng-rxjs-subjects-comparison"
        },
        "interviewTips": {
            "whatInterviewersWant": "Saber cuándo usar BehaviorSubject (estado con valor actual) vs ReplaySubject (historial de eventos) vs Signals en Angular moderno.",
            "commonPitfalls": [
                "Abusar de .getValue() en BehaviorSubject rompiendo el flujo reactivo.",
                "Olvidar liberar memoria en ReplaySubject con buffers infinitos."
            ],
            "followUps": [
                "¿Qué subject usarías para el estado del usuario actual?",
                "¿Qué diferencia hay con AsyncSubject?"
            ]
        },
        "quiz": {
            "question": "¿Qué ocurre si un componente se suscribe a un BehaviorSubject que ya ha emitido varios valores en el pasado?",
            "options": [
                "Recibe de forma inmediata el último valor emitido en el momento de la suscripción.",
                "No recibe ningún valor hasta que se llame a .next() de nuevo.",
                "Recibe todos los valores emitidos desde el inicio de la aplicación.",
                "Lanza un error de tipo ObservableTimeoutException."
            ],
            "correctIndex": 0,
            "explanation": "BehaviorSubject almacena internamente el último valor emitido y lo despacha de inmediato a cualquier suscriptor entrante tan pronto como se completa la suscripción."
        }
    },
    {
        "id": "ng-12",
        "title": "¿Qué son los Guards en el Router de Angular y cómo funcionan los funcionales?",
        "level": "medio",
        "tags": [
            "Router",
            "Guards",
            "Functional-Guards",
            "canActivate",
            "canMatch",
            "Auth"
        ],
        "response": "Los **Guards** son funciones de control de acceso integradas en el Router de Angular que determinan si la navegación hacia o desde una ruta está permitida.\n\nTipos principales de Guards:\n1. **`canMatch`**: Evalúa si la URL solicitada puede emparejarse con una definición de ruta. Su gran ventaja es que **evita descargar el bundle de código (chunk JS)** de la ruta perezosa si el usuario no tiene los permisos requeridos.\n2. **`canActivate`**: Determina si un componente de ruta puede ser instanciado y mostrado en pantalla (ideal para autenticación y roles).\n3. **`resolve`**: Pre-descarga datos necesarios antes de activar la ruta, garantizando que el componente no se monte con una pantalla en blanco.\n4. **`canDeactivate`**: Comprueba si el usuario puede abandonar la ruta actual (ejemplo: advertir sobre cambios no guardados en un formulario).\n\n**Guards Funcionales (`CanActivateFn`) desde Angular 15+**:\nLas antiguas clases con la interfaz `CanActivate` están deprecadas. Hoy se utilizan **funciones puras simples** que consumen servicios directamente mediante la función **`inject()`**, facilitando la composición, la reutilización y los tests unitarios.",
        "codeExample": {
            "language": "typescript",
            "code": "import { inject } from '@angular/core';\nimport { CanActivateFn, Router, Routes } from '@angular/router';\nimport { AuthService } from './auth.service';\n\n// Guard funcional limpio y directo con inject():\nexport const authGuard: CanActivateFn = (route, state) => {\n  const authService = inject(AuthService);\n  const router = inject(Router);\n\n  if (authService.isAuthenticated()) {\n    return true;\n  }\n\n  // Redirección segura retornando un UrlTree:\n  return router.createUrlTree(['/login'], { queryParams: { returnUrl: state.url } });\n};\n\n// Configuración en el archivo de rutas:\nexport const routes: Routes = [\n  {\n    path: 'admin',\n    canMatch: [authGuard], // Ni siquiera descarga el bundle si no pasa el guard\n    loadComponent: () => import('./admin.component').then(m => m.AdminComponent),\n  }\n];"
        },
        "visualDiagram": {
            "id": "diag-ng-12",
            "title": "Pipeline de Navegación con Router Guards Funcionales",
            "caption": "Flujo de navegación: canMatch (previene descarga) ➔ canActivate (permisos) ➔ resolve (datos) ➔ activación ➔ canDeactivate.",
            "diagramType": "ng-router-guards-pipeline"
        },
        "interviewTips": {
            "whatInterviewersWant": "Resaltar el uso de Functional Guards con inject() y la ventaja de canMatch sobre canActivate para evitar la descarga de bundles de código.",
            "commonPitfalls": [
                "Seguir implementando clases con la interfaz CanActivate deprecated.",
                "Retornar false sin redirigir al usuario (debe retornarse un UrlTree hacia /login)."
            ],
            "followUps": [
                "¿Qué diferencia hay entre canActivate y canMatch?",
                "¿Cómo protegerías rutas lazy?"
            ]
        },
        "quiz": {
            "question": "¿Cuál es la ventaja de utilizar canMatch en lugar de canActivate en rutas con carga perezosa (lazy loading)?",
            "options": [
                "canMatch impide que el navegador descargue el bundle de JavaScript del microfrontend o módulo si el usuario no tiene permisos.",
                "canMatch permite usar Angular sin configurar un servidor web.",
                "canMatch cifra el código de la pantalla con claves cuánticas.",
                "canMatch funciona únicamente en navegadores Firefox."
            ],
            "correctIndex": 0,
            "explanation": "canMatch se evalúa antes de resolver la ruta; si retorna false, el Router ni siquiera descarga el chunk de JavaScript asociado, ahorrando ancho de banda y protegiendo el código de clientes no autorizados."
        }
    },
    {
        "id": "ng-13",
        "title": "¿Qué es un HTTP Interceptor y cuáles son sus casos de uso?",
        "level": "medio",
        "tags": [
            "HTTP",
            "Interceptor",
            "HttpClient",
            "Bearer-Token",
            "Retry",
            "Error-Handling"
        ],
        "response": "Un **HTTP Interceptor** es un middleware en la capa de red de Angular que intercepta todas las peticiones salientes (`HttpRequest`) y respuestas entrantes (`HttpResponse`) procesadas por el servicio `HttpClient`.\n\nDesde Angular 15+, los interceptores se implementan mediante **funciones (`HttpInterceptorFn`)** registradas en `provideHttpClient(withInterceptors([authInterceptor, errorInterceptor]))`.\n\nCasos de uso empresariales fundamentales:\n1. **Inyección de Tokens de Autenticación**: Clonar la petición saliente para insertar la cabecera `Authorization: Bearer <JWT>` automáticamente en cada llamada hacia el backend.\n2. **Manejo Centralizado de Errores**: Interceptar errores `401 Unauthorized` para disparar el refresco del token de sesión o errores `500` para notificar al usuario con un toast de error.\n3. **Indicador de Carga Global (Spinner)**: Incrementar un contador de peticiones activas al salir la solicitud y decrementarlo al recibir la respuesta para mostrar un spinner en pantalla.\n4. **Mecanismos de Reintento (`retry`)**: Reintentar peticiones fallidas automáticamente con retroceso exponencial ante fallos transitorios de red.\n\n*Nota de diseño*: Las peticiones HTTP en Angular son **inmutables**. Para modificar una cabecera o URL, se debe utilizar obligatoriamente `req.clone()`.",
        "codeExample": {
            "language": "typescript",
            "code": "import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';\nimport { inject } from '@angular/core';\nimport { catchError, throwError } from 'rxjs';\nimport { AuthService } from './auth.service';\n\n// Interceptor funcional moderno para inyección de token JWT y control de errores:\nexport const authInterceptor: HttpInterceptorFn = (req, next) => {\n  const authService = inject(AuthService);\n  const token = authService.getToken();\n\n  // Las peticiones son inmutables: debemos clonarlas para mutar cabeceras:\n  const authReq = token\n    ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } })\n    : req;\n\n  return next(authReq).pipe(\n    catchError((error: HttpErrorResponse) => {\n      if (error.status === 401) {\n        authService.logout();\n      }\n      return throwError(() => error);\n    })\n  );\n};"
        },
        "visualDiagram": {
            "id": "diag-ng-13",
            "title": "Cadena de Middleware HTTP: Interceptors Salientes y Entrantes",
            "caption": "Petición saliente enriquecida con cabecera JWT por authInterceptor y respuesta procesada por errorInterceptor para manejo centralizado.",
            "diagramType": "ng-http-interceptor-chain"
        },
        "interviewTips": {
            "whatInterviewersWant": "Saber que los requests en Angular son inmutables y deben clonarse con req.clone(), y conocer la sintaxis moderna de HttpInterceptorFn.",
            "commonPitfalls": [
                "Intentar mutar directamente el objeto req (lanza error, es inmutable).",
                "Provocar bucles infinitos al refrescar tokens 401 sin control de reintento."
            ],
            "followUps": [
                "¿Cómo implementarías un refresh token con interceptores?",
                "¿En qué orden se ejecutan varios interceptores?"
            ]
        },
        "quiz": {
            "question": "¿Por qué es obligatorio utilizar req.clone() dentro de un HTTP Interceptor para modificar una cabecera?",
            "options": [
                "Porque las instancias de HttpRequest son objetos inmutables para garantizar consistencia en la cadena de middleware y reintentos.",
                "Porque la memoria RAM del navegador se corrompería de lo contrario.",
                "Porque Angular compila los interceptores en archivos JSON estáticos.",
                "Para duplicar la velocidad de transferencia en la red."
            ],
            "correctIndex": 0,
            "explanation": "Los objetos HttpRequest son deliberadamente inmutables para que múltiples interceptores o mecanismos de reintento puedan operar sobre la solicitud original sin efectos colaterales imprevistos."
        }
    },
    {
        "id": "ng-14",
        "title": "¿Cómo funciona Change Detection: Default vs OnPush?",
        "level": "avanzado",
        "tags": [
            "Change-Detection",
            "OnPush",
            "Default",
            "Performance",
            "Immutability",
            "Optimization"
        ],
        "response": "El motor de **Change Detection** de Angular es el mecanismo responsable de sincronizar el estado de los componentes con el DOM.\n\nAngular ofrece dos estrategias de detección configurables en `@Component({ changeDetection: ... })`:\n\n1. **`ChangeDetectionStrategy.Default` (`CheckAlways`)**:\n   - Cada vez que ocurre **cualquier evento asíncrono** en el navegador (click, timer, respuesta HTTP interceptada por Zone.js), Angular inicia un recorrido en profundidad (Depth-First Search) verificando **todos y cada uno de los componentes de la aplicación**, de arriba a abajo.\n   - En aplicaciones con cientos o miles de componentes, verificar expresiones en todo el árbol introduce una sobrecarga masiva de CPU.\n\n2. **`ChangeDetectionStrategy.OnPush` (`CheckOnce`)**:\n   - Angular **omite por completo la verificación del componente y de todo su subárbol de hijos**, a menos que se cumpla al menos una de las siguientes condiciones:\n     1. La referencia de un `@Input()` cambia (comprobado por **igualdad estricta de referencia `===`**, lo que exige **inmutabilidad de datos**).\n     2. El propio componente o uno de sus hijos dispara un evento de usuario (ej. un click dentro del componente).\n     3. Un Observable emite un valor a través de un `async` pipe en la plantilla (`markForCheck()`).\n     4. Un Signal leído en la plantilla actualiza su valor.\n     5. Se invoca explícitamente `ChangeDetectorRef.markForCheck()`.\n   - **Resultado**: Reduce la complejidad de chequeo de O(N) a O(log N) o O(1), multiplicando el rendimiento.",
        "codeExample": {
            "language": "typescript",
            "code": "import { Component, Input, ChangeDetectionStrategy } from '@angular/core';\n\ninterface Product {\n  id: string;\n  name: string;\n  price: number;\n}\n\n@Component({\n  selector: 'app-product-row',\n  standalone: true,\n  // OnPush omite el componente si las referencias no cambian:\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  template: `\n    <div class=\"row\">\n      <span>{{ product.name }}</span>\n      <span>\\${{ product.price }}</span>\n    </div>\n  `\n})\nexport class ProductRowComponent {\n  // Para que OnPush re-renderice este componente al actualizar el precio,\n  // el padre DEBE emitir un nuevo objeto con nueva referencia ({ ...product, price: 99 }),\n  // nunca mutar product.price = 99 directamente.\n  @Input({ required: true }) product!: Product;\n}"
        },
        "visualDiagram": {
            "id": "diag-ng-14",
            "title": "Change Detection: Default (Árbol Completo) vs OnPush (Subárboles Saltados)",
            "caption": "Default verifica todos los componentes ante cualquier evento; OnPush salta subárboles completos si las referencias de inputs no cambian.",
            "diagramType": "ng-change-detection-default-vs-onpush"
        },
        "interviewTips": {
            "whatInterviewersWant": "Explicar con exactitud los disparadores que reactivan un componente OnPush y por qué exige inmutabilidad estricta.",
            "commonPitfalls": [
                "Mutar un objeto o array in-place en OnPush impidiendo que la vista se actualice.",
                "Pensar que un setTimeout dentro de un OnPush actualizará la vista automáticamente sin llamar a markForCheck()."
            ],
            "followUps": [
                "¿Qué dispara change detection en un componente OnPush?",
                "¿Qué hace markForCheck()?"
            ]
        },
        "quiz": {
            "question": "¿Qué ocurre si en un componente OnPush mutas una propiedad interna de un objeto recibido por @Input() sin cambiar la referencia del objeto?",
            "options": [
                "Angular omite la verificación del componente y la vista NO se actualiza, porque OnPush compara referencias mediante ===.",
                "Angular detecta la mutación profunda automáticamente en 16 milisegundos.",
                "La aplicación se cuelga con un error de memoria.",
                "El componente padre fuerza la destrucción y recreación del hijo."
            ],
            "correctIndex": 0,
            "explanation": "OnPush solo comprueba si la referencia en memoria del input ha cambiado (prev !== curr). Al mutar el objeto internamente conservando la misma referencia, Angular asume que no hubo cambios y salta el render."
        }
    },
    {
        "id": "ng-15",
        "title": "¿Qué son las Deferrable Views (@defer) y cómo optimizan la carga inicial?",
        "level": "avanzado",
        "tags": [
            "Deferrable-Views",
            "Defer",
            "Code-Splitting",
            "Lazy-Loading",
            "Angular-17+",
            "Performance"
        ],
        "response": "Las **Deferrable Views (`@defer`)** introducidas en Angular 17 son una funcionalidad declarativa a nivel de compilador que permite aplicar **Code-Splitting y Lazy-Loading granular directamente desde la plantilla HTML** sin necesidad de configurar rutas de navegación independientes.\n\nCualquier componente standalone, directiva, pipe o librería pesada (como gráficas, editores WYSIWYG o comentarios) envuelto en un bloque `@defer` es extraído automáticamente a un **chunk de JavaScript independiente** que no se descarga hasta que se active el disparador.\n\nEstructura de cuatro bloques:\n1. **`@defer (disparador)`**: El bloque principal con los componentes pesados a diferir.\n2. **`@placeholder (minimum 500ms)`**: Se pinta inmediatamente en el primer render (skeleton loader o miniatura) para evitar saltos visuales (CLS).\n3. **`@loading (minimum 200ms)`**: Se muestra mientras el chunk de código se está descargando activamente por red.\n4. **`@error`**: Se muestra si la descarga del chunk falla por problemas de red.\n\n**Disparadores Potentes (Triggers)**:\n- `on viewport`: Se descarga cuando el placeholder entra en el campo de visión del usuario (usando `IntersectionObserver`).\n- `on interaction`: Se activa al hacer click o foco sobre el placeholder.\n- `on hover`: Se descarga al posar el ratón.\n- `on timer(2s)`: Tras un tiempo determinado.\n- `prefetch on idle`: Pre-descarga el chunk en momentos ociosos de la CPU pero difiere su renderizado hasta la interacción.",
        "codeExample": {
            "language": "html",
            "code": "<!-- Carga diferida ultra-optimizada para métricas Core Web Vitals -->\n@defer (on viewport; prefetch on idle) {\n  <!-- Este componente y sus librerías asociadas (ej. Chart.js) van en un chunk separado: -->\n  <app-heavy-analytics-chart [data]=\"chartData()\" />\n} @placeholder {\n  <div class=\"h-64 bg-slate-800 rounded-lg flex items-center justify-center text-slate-500\">\n    <span>Haz scroll para cargar analíticas interactivas...</span>\n  </div>\n} @loading (minimum 300ms) {\n  <div class=\"h-64 bg-slate-800 rounded-lg animate-pulse flex items-center justify-center text-sky-400\">\n    <span>Descargando bundle de visualización de datos...</span>\n  </div>\n} @error {\n  <div class=\"alert-error\">Error al cargar el módulo interactivo. Revisa tu conexión.</div>\n}"
        },
        "visualDiagram": {
            "id": "diag-ng-15",
            "title": "Ciclo de Vida de Deferrable Views (@defer): Estados y Triggers",
            "caption": "@defer coordina @placeholder inmediato ➔ trigger (viewport/interaction) ➔ @loading de chunk JS ➔ renderizado final diferido.",
            "diagramType": "ng-deferrable-views-triggers"
        },
        "interviewTips": {
            "whatInterviewersWant": "Destacar cómo @defer reduce drásticamente el First Contentful Paint (FCP) y el bundle inicial sin necesidad de configurar rutas lazy.",
            "commonPitfalls": [
                "Usar componentes no-standalone dentro de @defer (los componentes diferidos deben ser Standalone obligatoriamente).",
                "Olvidar especificar @placeholder dejando un espacio en blanco durante la carga."
            ],
            "followUps": [
                "¿Qué triggers ofrece @defer (on viewport, on idle, on interaction)?",
                "¿Qué hacen los bloques @placeholder y @loading?"
            ]
        },
        "quiz": {
            "question": "¿Cuál es la principal ventaja de utilizar @defer (on viewport) para una sección de comentarios al final de un artículo largo?",
            "options": [
                "Evita descargar el código JavaScript de la sección de comentarios hasta que el usuario hace scroll y llega a esa zona de la pantalla.",
                "Obliga a los usuarios a registrarse antes de comentar.",
                "Convierte los comentarios en texto indexable por Bing automáticamente.",
                "Hace que los comentarios no requieran una base de datos."
            ],
            "correctIndex": 0,
            "explanation": "on viewport utiliza IntersectionObserver para retrasar la descarga del bundle JavaScript del componente hasta que el usuario se desplaza visualmente hasta la posición del elemento."
        }
    },
    {
        "id": "ng-16",
        "title": "¿Cómo funciona la Inyección de Dependencias Jerárquica y los modificadores de resolución?",
        "level": "avanzado",
        "tags": [
            "Dependency-Injection",
            "Hierarchical-DI",
            "ElementInjector",
            "EnvironmentInjector",
            "Resolution-Modifiers"
        ],
        "response": "El sistema de **Inyección de Dependencias (DI)** de Angular es jerárquico y se compone de dos árboles de inyectores paralelos:\n\n1. **`EnvironmentInjector` Tree (Inyectores de Entorno)**:\n   - Encabezado por el `root` injector (`@Injectable({ providedIn: 'root' })`).\n   - Los servicios provistos en `root` son **Singletons** para toda la aplicación y se benefician de Tree-Shaking si ningún componente los inyecta.\n2. **`ElementInjector` Tree (Inyectores de Elemento / Componente)**:\n   - Cada componente o directiva que declara `providers: [MyService]` en su decorador crea un nuevo inyector local en ese punto del árbol DOM.\n   - Las instancias provistas aquí están **aisladas**: el componente y sus hijos comparten esa instancia específica, que se destruye cuando el componente es desmontado.\n\n**Búsqueda y Modificadores de Resolución**:\nPor defecto, Angular busca la dependencia en el inyector local; si no la encuentra, asciende por los ancestros hasta llegar al inyector raíz. Los modificadores alteran esta búsqueda:\n- **`@Self()`**: Busca únicamente en el inyector del elemento actual. Si no existe, lanza `NullInjectorError`.\n- **`@SkipSelf()`**: Omite el inyector del elemento actual y comienza la búsqueda directamente desde el componente padre.\n- **`@Optional()`**: Si la dependencia no se encuentra en ningún nivel, devuelve `null` en lugar de lanzar una excepción fatal.\n- **`@Host()`**: Limita la búsqueda ascendente hasta el componente anfitrión (host) que contiene la plantilla actual.",
        "codeExample": {
            "language": "typescript",
            "code": "import { Component, Injectable, Optional, Self, SkipSelf, inject } from '@angular/core';\n\n@Injectable()\nexport class SessionService {\n  id = Math.random();\n}\n\n@Component({\n  selector: 'app-child-widget',\n  standalone: true,\n  template: `<p>Session ID: {{ session?.id ?? 'Sin sesión local' }}</p>`\n})\nexport class ChildWidgetComponent {\n  // 1. Modificador @Optional: No falla si el servicio no está provisto en ancestros:\n  session = inject(SessionService, { optional: true });\n\n  // 2. Modificador @SkipSelf: Ignora el proveedor de este componente y busca en el padre:\n  parentSession = inject(SessionService, { skipSelf: true, optional: true });\n}\n\n@Component({\n  selector: 'app-parent-container',\n  standalone: true,\n  imports: [ChildWidgetComponent],\n  // Proveedor aislado en el ElementInjector: crea una nueva instancia para este subárbol:\n  providers: [SessionService],\n  template: `<app-child-widget />`\n})\nexport class ParentContainerComponent {}"
        },
        "visualDiagram": {
            "id": "diag-ng-16",
            "title": "Árbol Jerárquico de Inyección y Modificadores de Resolución",
            "caption": "EnvironmentInjector raíz (Singleton) conectado al ElementInjector de cada componente con modificadores @Self, @SkipSelf, @Optional y @Host.",
            "diagramType": "ng-hierarchical-di-tree"
        },
        "interviewTips": {
            "whatInterviewersWant": "Entendimiento claro de la jerarquía de inyectores y cuándo usar providers a nivel de componente para instancias aisladas.",
            "commonPitfalls": [
                "Declarar un servicio en providers de un componente creyendo que será singleton global (crea una instancia nueva en cada componente).",
                "Confundir EnvironmentInjector con ElementInjector."
            ],
            "followUps": [
                "¿Qué hacen los modificadores @Optional, @Self, @SkipSelf y @Host?",
                "¿Qué diferencia hay entre providedIn: 'root' y declarar el provider en un componente?"
            ]
        },
        "quiz": {
            "question": "¿Qué ocurre si declaras un servicio en el array 'providers' de un componente que se renderiza 10 veces en pantalla?",
            "options": [
                "Se crearán 10 instancias independientes del servicio en memoria, una para cada componente y sus respectivos hijos.",
                "Angular creará una única instancia compartida entre los 10 componentes.",
                "Lanzará un error de inyector duplicado en tiempo de compilación.",
                "El servicio se convertirá automáticamente en una cookie de sesión."
            ],
            "correctIndex": 0,
            "explanation": "Al declarar un servicio en los providers de un componente, cada elemento instanciado genera su propio ElementInjector, creando una instancia aislada del servicio por cada componente en pantalla."
        }
    },
    {
        "id": "ng-17",
        "title": "¿Qué es NgZone y cómo funciona Zone.js?",
        "level": "avanzado",
        "tags": [
            "NgZone",
            "Zone.js",
            "Monkey-Patching",
            "ApplicationRef",
            "Zoneless",
            "Event-Loop"
        ],
        "response": "**Zone.js** y **`NgZone`** han constituido históricamente el núcleo reactivo de Angular para automatizar la sincronización de la interfaz sin requerir llamadas explícitas a métodos de renderizado:\n\n1. **El Mecanismo de Zone.js (Monkey-Patching)**:\n   - Al cargar la aplicación, Zone.js intercepta y reemplaza (\"mono-parchea\") en tiempo de ejecución todas las APIs asíncronas estándar del navegador web:\n     - Temporizadores: `setTimeout`, `setInterval`.\n     - Eventos del DOM: `addEventListener` (clicks, inputs, keydowns).\n     - Promesas y microtareas: `Promise.then`.\n     - Peticiones de red: `fetch`, `XMLHttpRequest`.\n   - Cada vez que una tarea asíncrona concluye en el Event Loop del navegador, Zone.js intercepta la finalización y notifica a **`NgZone`**.\n\n2. **`NgZone` y `ApplicationRef.tick()`**:\n   - `NgZone` es un envoltorio de Angular sobre Zone.js.\n   - Cuando se vacía la cola de microtareas (`onMicrotaskEmpty`), NgZone emite un evento que le indica a Angular: *\"Algo asíncrono ha ocurrido; ejecuta `ApplicationRef.tick()` para recorrer el árbol de componentes y actualizar el DOM\"*.\n\n3. **Optimización con `runOutsideAngular()`**:\n   - Para operaciones de muy alta frecuencia (como eventos de `scroll`, `mousemove`, animaciones `requestAnimationFrame` o renderizado Canvas), la ejecución de ticks continuos destruye el rendimiento.\n   - `ngZone.runOutsideAngular(() => ...)` permite ejecutar código en el navegador **sin despertar a Zone.js**, evitando que Angular ejecute ciclos de detección de cambios innecesarios.",
        "codeExample": {
            "language": "typescript",
            "code": "import { Component, ElementRef, NgZone, OnInit, OnDestroy, inject } from '@angular/core';\n\n@Component({\n  selector: 'app-scroll-tracker',\n  standalone: true,\n  template: `<p class=\"text-xs\">Scroll tracked outside Angular Zone</p>`\n})\nexport class ScrollTrackerComponent implements OnInit, OnDestroy {\n  private ngZone = inject(NgZone);\n  private el = inject(ElementRef);\n\n  ngOnInit() {\n    // Ejecuta listeners de alta frecuencia fuera de Angular Zone para no disparar ticks:\n    this.ngZone.runOutsideAngular(() => {\n      window.addEventListener('scroll', this.onScrollHeavy);\n    });\n  }\n\n  private onScrollHeavy = () => {\n    // Operación matemática rápida sin activar Change Detection:\n    const scrollY = window.scrollY;\n    if (scrollY > 500) {\n      // Si necesitamos actualizar la UI de Angular puntualmente, reingresamos a la zona:\n      this.ngZone.run(() => {\n        console.log('Scroll superó umbral, notificando a Angular.');\n      });\n    }\n  };\n\n  ngOnDestroy() {\n    window.removeEventListener('scroll', this.onScrollHeavy);\n  }\n}"
        },
        "visualDiagram": {
            "id": "diag-ng-17",
            "title": "Zone.js: Monkey Patching de APIs y Notificación a NgZone",
            "caption": "Zone.js parcha APIs asíncronas del navegador (setTimeout, fetch); al terminar el callback, notifica a NgZone para ejecutar ApplicationRef.tick().",
            "diagramType": "ng-zonejs-monkey-patching"
        },
        "interviewTips": {
            "whatInterviewersWant": "Explicar monkey-patching y saber cómo optimizar animaciones o eventos de scroll con runOutsideAngular.",
            "commonPitfalls": [
                "Dejar scroll listeners pesados corriendo dentro de NgZone provocando caídas de FPS.",
                "No saber que Zone.js añade una sobrecarga de ~35KB y retraso en microtareas que Angular moderno elimina con Zoneless."
            ],
            "followUps": [
                "¿Cómo ejecutarías código fuera de la zona (runOutsideAngular)?",
                "¿Qué APIs parchea Zone.js?"
            ]
        },
        "quiz": {
            "question": "¿Cuál es la función principal de ngZone.runOutsideAngular()?",
            "options": [
                "Ejecutar código asíncrono o listeners de alta frecuencia sin activar el ciclo de detección de cambios de Angular en cada evento.",
                "Permitir la conexión de la app a bases de datos relacionales sin backend.",
                "Ocultar el código fuente en las herramientas de desarrollo de Chrome.",
                "Forzar la recarga del navegador tras una llamada de red."
            ],
            "correctIndex": 0,
            "explanation": "runOutsideAngular ejecuta el código fuera del contexto monitoreado por Zone.js, impidiendo que eventos masivos (como mousemove o scroll) despierten a Angular y ejecuten ApplicationRef.tick() decenas de veces por segundo."
        }
    },
    {
        "id": "ng-18",
        "title": "¿Qué es signalInputs, signalOutputs y model() en Angular moderno?",
        "level": "avanzado",
        "tags": [
            "Signal-Inputs",
            "Signal-Outputs",
            "Model",
            "Angular-17.2+",
            "Two-Way-Binding",
            "Reactivity"
        ],
        "response": "A partir de Angular 17.1 y 17.2, Angular reemplaza los decoradores heredados (`@Input()`, `@Output()`) por una suite completa de **primitivas reactivas basadas en funciones**, armonizando la comunicación de componentes con el paradigma de Signals:\n\n1. **`input()` y `input.required()` (Signal Inputs)**:\n   - Reemplaza a `@Input()`. Devuelve un **`InputSignal<T>` de solo lectura**.\n   - Permite enlazar directamente propiedades en `computed()` sin necesidad de `ngOnChanges`.\n   - Soporta transformadores nativos: `input(false, { transform: booleanAttribute })`.\n2. **`output()` (Signal Outputs)**:\n   - Reemplaza a `@Output()` y a la clase `EventEmitter`.\n   - Proporciona un emisor tipado ultraligero (`OutputEmitterRef<T>`) que no depende de RxJS por debajo, simplificando la emisión con `.emit(valor)`.\n3. **`model()` y `model.required()` (Two-Way Binding Signals)**:\n   - Resuelve el problema histórico del Two-Way binding manual (que exigía declarar un `@Input() foo` y un `@Output() fooChange`).\n   - Declara un **`ModelSignal<T>` de lectura y escritura**.\n   - El componente hijo puede invocar `this.value.set(nuevo)` o `this.value.update(...)` y el cambio se sincronizará bidireccionalmente con la propiedad del padre mediante la sintaxis `[(value)]=\"parentState\"`.",
        "codeExample": {
            "language": "typescript",
            "code": "import { Component, input, output, model, booleanAttribute, computed } from '@angular/core';\n\n@Component({\n  selector: 'app-counter-control',\n  standalone: true,\n  template: `\n    <div class=\"counter-box\">\n      <h4>{{ uppercaseTitle() }}</h4>\n      <button (click)=\"decrement()\">-</button>\n      <span>{{ count() }}</span>\n      <button (click)=\"increment()\">+</button>\n      <button (click)=\"resetRequested.emit()\">Reiniciar</button>\n    </div>\n  `\n})\nexport class CounterControlComponent {\n  // 1. Signal Input de solo lectura con transformación de tipo:\n  title = input.required<string>();\n  disabled = input(false, { transform: booleanAttribute });\n\n  // Computed derivado de un input sin usar ngOnChanges:\n  uppercaseTitle = computed(() => this.title().toUpperCase());\n\n  // 2. Model: Two-Way Binding reactivo para el valor numérico:\n  count = model.required<number>();\n\n  // 3. Output ligero sin RxJS EventEmitter:\n  resetRequested = output<void>();\n\n  increment() {\n    if (!this.disabled()) this.count.update(c => c + 1);\n  }\n\n  decrement() {\n    if (!this.disabled()) this.count.update(c => c - 1);\n  }\n}"
        },
        "visualDiagram": {
            "id": "diag-ng-18",
            "title": "Primitivas de Comunicación Reactivas: input(), output() y model()",
            "caption": "input() genera un Signal de lectura, output() emite eventos ligeros y model() proporciona Two-Way binding reactivo sin decoradores.",
            "diagramType": "ng-signal-inputs-outputs-model"
        },
        "interviewTips": {
            "whatInterviewersWant": "Demostrar familiaridad con la modernización de Angular eliminando decoradores en favor de funciones de primer orden reactivas.",
            "commonPitfalls": [
                "Intentar escribir en un input() ordinario (es de solo lectura; para mutación bidireccional se debe usar model()).",
                "Seguir usando decoradores @Input y @Output en código nuevo."
            ],
            "followUps": [
                "¿Qué diferencia hay entre input() y @Input()?",
                "¿Cómo funciona model() para el two-way binding?"
            ]
        },
        "quiz": {
            "question": "¿Cuál es el propósito principal de la función model() en un componente Angular moderno?",
            "options": [
                "Crear un Signal de lectura y escritura que habilita Two-Way Binding automático ([(prop)]) entre padre e hijo sin declarar outputs manuales.",
                "Descargar modelos de Inteligencia Artificial en el cliente.",
                "Generar automáticamente esquemas SQL para bases de datos.",
                "Convertir el componente en un modelo 3D con Three.js."
            ],
            "correctIndex": 0,
            "explanation": "model() genera un ModelSignal que unifica el input y el output de cambio, permitiendo enlace bidireccional [(value)] con mutación directa vía .set() y .update()."
        }
    },
    {
        "id": "ng-19",
        "title": "¿Qué es Zoneless Angular y cómo se logra un rendimiento extremo?",
        "level": "experto",
        "tags": [
            "Zoneless",
            "Angular-18+",
            "Signals",
            "provideExperimentalZonelessChangeDetection",
            "Scheduler",
            "Performance"
        ],
        "response": "**Zoneless Angular** es el mayor hito arquitectónico en la evolución de Angular desde la versión 2, introducido oficialmente en Angular 18 a través de `provideExperimentalZonelessChangeDetection()`.\n\n1. **Eliminación Total de Zone.js**:\n   - Se elimina la dependencia `zone.js` del archivo `angular.json` y de los polyfills del navegador.\n   - Reduce el tamaño del bundle inicial en aproximadamente **35 KB de JavaScript puro**.\n   - Desaparece el mono-parcheo de las APIs nativas del navegador (`window`, `setTimeout`, `fetch`), devolviendo al navegador su comportamiento nativo estándar.\n   - Las pilas de llamadas (Stack Traces) en caso de error se vuelven limpias y comprensibles, sin miles de líneas de envolturas de Zone.\n\n2. **¿Cómo se sincroniza el DOM sin Zone.js?**:\n   - La reactividad pasa a estar guiada al 100% por **Signals** y notificaciones explícitas de la aplicación.\n   - Cuando un Signal muta (`signal.set()` o `model.update()`), notifica directamente al **Planificador Interno de Angular (Internal Scheduler)**.\n   - El Scheduler marca exclusivamente la **vista local afectada como sucia** y encola una microtarea en el Event Loop.\n   - Se actualiza **quirúrgicamente el fragmento del DOM correspondiente**, sin recorrer jamás el árbol entero de componentes de la aplicación.\n   - Máximo rendimiento en métricas de **Core Web Vitals (INP - Interaction to Next Paint)**.",
        "codeExample": {
            "language": "typescript",
            "code": "import { bootstrapApplication } from '@angular/platform-browser';\nimport { Component, signal, provideExperimentalZonelessChangeDetection } from '@angular/core';\n\n@Component({\n  selector: 'app-zoneless-demo',\n  standalone: true,\n  template: `\n    <div class=\"p-6 bg-slate-900 border border-slate-800 rounded-xl\">\n      <h2 class=\"text-emerald-400 font-bold text-xl\">Angular 18+ Zoneless</h2>\n      <p class=\"text-slate-300 my-2\">Contador reactivo sin Zone.js: {{ count() }}</p>\n      <button (click)=\"increment()\" class=\"btn-zoneless\">Incrementar</button>\n    </div>\n  `\n})\nexport class ZonelessDemoComponent {\n  count = signal<number>(0);\n\n  increment() {\n    // En Zoneless, la mutación del signal notifica al scheduler en microtask directamente:\n    this.count.update(c => c + 1);\n  }\n}\n\n// Bootstrap sin Zone.js en main.ts:\nbootstrapApplication(ZonelessDemoComponent, {\n  providers: [\n    provideExperimentalZonelessChangeDetection(),\n  ]\n});"
        },
        "visualDiagram": {
            "id": "diag-ng-19",
            "title": "Arquitectura Zoneless: Signals y Planificador Directo vs Zone.js",
            "caption": "Zoneless elimina Zone.js y mono-parches: las mutaciones de Signals notifican directamente al Scheduler para actualizar solo la vista sucia.",
            "diagramType": "ng-zoneless-architecture"
        },
        "interviewTips": {
            "whatInterviewersWant": "Explicar que Zoneless elimina el mono-parcheo de Zone.js y hace que la reactividad dependa exclusivamente de Signals y el nuevo Scheduler de Angular.",
            "commonPitfalls": [
                "Intentar usar Zoneless en componentes con mutaciones imperativas sin Signals ni OnPush (la vista no se actualizará).",
                "Creer que Zoneless no soporta RxJS (funciona perfectamente con el async pipe o convertidores toSignal)."
            ],
            "followUps": [
                "¿Qué hace provideZonelessChangeDetection?",
                "¿Qué librerías pueden dejar de funcionar sin Zone.js?"
            ]
        },
        "quiz": {
            "question": "¿Cómo sabe Angular qué partes de la interfaz debe actualizar en una aplicación Zoneless?",
            "options": [
                "A través de las notificaciones que emiten los Signals y los pipes async directamente al Planificador de Angular al mutar su valor.",
                "Escaneando todo el árbol de componentes cada 100 milisegundos con un bucle while infinito.",
                "Enviando una petición HTTP al servidor para que decida qué renderizar.",
                "Monitoreando la tarjeta gráfica mediante WebGPU."
            ],
            "correctIndex": 0,
            "explanation": "En Zoneless, los Signals y el pipe async comunican directamente al scheduler de Angular qué vistas han cambiado, encolando una microtarea para actualizar exclusivamente los nodos afectados."
        }
    },
    {
        "id": "ng-20",
        "title": "¿Cómo implementar Non-Destructive Hydration con SSR en Angular?",
        "level": "experto",
        "tags": [
            "SSR",
            "Hydration",
            "Non-Destructive",
            "provideClientHydration",
            "SEO",
            "Core-Web-Vitals"
        ],
        "response": "En arquitecturas web modernas, el **Server-Side Rendering (SSR)** es imprescindible para optimizar el SEO y acelerar el First Contentful Paint (FCP).\n\n1. **El Problema de la Hidratación Destructiva Legacy (Angular Universal antiguo)**:\n   - El servidor enviaba HTML pre-renderizado estático al navegador.\n   - En cuanto el bundle de JavaScript del cliente se descargaba y arrancaba, Angular **destruía completamente el DOM existente generado por el servidor y lo recreaba desde cero**.\n   - **Consecuencias**: Parpadeo visual molesto (**FOUC - Flash of Unstyled Content**), pérdida de foco en inputs donde el usuario ya estaba escribiendo y reinicio del scroll.\n\n2. **Non-Destructive Hydration (`provideClientHydration()`)**:\n   - Introducida en Angular 16 y optimizada en 17/18.\n   - El servidor serializa el árbol del DOM incorporando anotaciones de hidratación (`ngh`).\n   - Al iniciar en el navegador, Angular **reutiliza los nodos HTML existentes sin destruir nada**: mapea las estructuras de datos, vincula los escuchadores de eventos y sincroniza los Signals directamente sobre el marcado del servidor.\n   - Soporta **Event Replay (`withEventReplay()`)**: si un usuario hace click en un botón antes de que el bundle JS termine de hidratar, Angular captura el evento y lo reproduce en cuanto la hidratación finaliza sin perder la acción del usuario.",
        "codeExample": {
            "language": "typescript",
            "code": "import { bootstrapApplication } from '@angular/platform-browser';\nimport { provideClientHydration, withEventReplay } from '@angular/platform-browser';\nimport { provideHttpClient, withFetch } from '@angular/common/http';\nimport { AppComponent } from './app/app.component';\n\n// Configuración de arranque en cliente con Hidratación No Destructiva y Event Replay:\nbootstrapApplication(AppComponent, {\n  providers: [\n    // 1. Activa hidratación no destructiva con captura y reproducción de eventos tempranos:\n    provideClientHydration(withEventReplay()),\n    // 2. HttpClient optimizado con fetch nativo para SSR:\n    provideHttpClient(withFetch()),\n  ]\n});"
        },
        "visualDiagram": {
            "id": "diag-ng-20",
            "title": "Non-Destructive Hydration con Event Replay en SSR",
            "caption": "El servidor emite HTML con metadatos ngh; el cliente reutiliza los nodos sin destruirlos y reproduce eventos capturados antes de la hidratación.",
            "diagramType": "ng-non-destructive-hydration-ssr"
        },
        "interviewTips": {
            "whatInterviewersWant": "Explicar el contraste entre hidratación destructiva (destrucción y parpadeo) y no destructiva (reutilización de nodos y event replay).",
            "commonPitfalls": [
                "Manipular el DOM directamente con window o document rompiendo la hidratación en el servidor.",
                "No usar isPlatformBrowser() para proteger código dependiente de APIs de navegador."
            ],
            "followUps": [
                "¿Qué problema de parpadeo resuelve la hidratación no destructiva?",
                "¿Qué es la event replay en la hidratación de Angular?"
            ]
        },
        "quiz": {
            "question": "¿Qué problema resuelve la opción withEventReplay() en la hidratación no destructiva de Angular?",
            "options": [
                "Captura las interacciones del usuario (como clicks) ocurridas antes de que el JavaScript termine de hidratar y las reproduce automáticamente al completar la carga.",
                "Permite grabar videos de la pantalla del usuario en formato MP4.",
                "Repite las peticiones HTTP fallidas hasta que el servidor responda con éxito.",
                "Sincroniza las pestañas del navegador mediante WebRTC."
            ],
            "correctIndex": 0,
            "explanation": "Event Replay retiene los eventos disparados por el usuario durante la ventana de tiempo en que el HTML ya era visible pero el JS aún no había terminado de hidratar, reproduciéndolos sin perder la intención del usuario."
        }
    },
    {
        "id": "ng-21",
        "title": "¿Cómo estructurar el Estado Global con NgRx SignalStore?",
        "level": "experto",
        "tags": [
            "NgRx",
            "SignalStore",
            "State-Management",
            "withState",
            "withComputed",
            "withMethods",
            "withHooks"
        ],
        "response": "**NgRx SignalStore** (`@ngrx/signals`) es la solución de gestión de estado de nueva generación para aplicaciones Angular empresariales, diseñada para reemplazar el boilerplate masivo de NgRx Store clásico (Actions, Reducers, Selectors y Effects).\n\nSe basa en una arquitectura funcional y composable mediante la función `signalStore`:\n\nComponentes de un SignalStore:\n1. **`withState({ ... })`**: Declara el estado reactivo base fuertemente tipado. Cada propiedad se expone automáticamente como un Signal de solo lectura.\n2. **`withComputed((store) => ({ ... }))`**: Añade propiedades derivadas memoizadas construidas con `computed()`, re-evaluadas automáticamente ante cambios del estado.\n3. **`withMethods((store, service = inject(Service)) => ({ ... }))`**: Expone métodos de mutación utilizando la función `patchState(store, ...)` y métodos asíncronos mediante `rxMethod` para orquestar efectos y llamadas HTTP con RxJS.\n4. **`withHooks({ onInit(store), onDestroy(store) })`**: Conecta acciones automáticas del ciclo de vida del Store.\n\nPuede inyectarse globalmente (`providedIn: 'root'`) como Singleton o a nivel de componente (`providers: [UserStore]`) para gestionar estados locales aislados.",
        "codeExample": {
            "language": "typescript",
            "code": "import { signalStore, withState, withComputed, withMethods, withHooks, patchState } from '@ngrx/signals';\nimport { rxMethod } from '@ngrx/signals/rxjs-interop';\nimport { computed, inject } from '@angular/core';\nimport { pipe, switchMap, tap } from 'rxjs';\nimport { HttpClient } from '@angular/common/http';\n\ninterface User { id: number; name: string; active: boolean; }\ninterface UserState { users: User[]; filter: string; isLoading: boolean; }\n\nconst initialState: UserState = { users: [], filter: '', isLoading: false };\n\nexport const UserStore = signalStore(\n  { providedIn: 'root' },\n  withState(initialState),\n  withComputed(({ users, filter }) => ({\n    filteredUsers: computed(() => users().filter(u => u.name.toLowerCase().includes(filter().toLowerCase()))),\n    activeCount: computed(() => users().filter(u => u.active).length),\n  })),\n  withMethods((store, http = inject(HttpClient)) => ({\n    updateFilter: (filter: string) => patchState(store, { filter }),\n    loadUsers: rxMethod<void>(\n      pipe(\n        tap(() => patchState(store, { isLoading: true })),\n        switchMap(() => http.get<User[]>('/api/users')),\n        tap(users => patchState(store, { users, isLoading: false }))\n      )\n    )\n  })),\n  withHooks({\n    onInit(store) {\n      store.loadUsers();\n    }\n  })\n);"
        },
        "visualDiagram": {
            "id": "diag-ng-21",
            "title": "Arquitectura Modular de NgRx SignalStore",
            "caption": "signalStore compone withState (estado base), withComputed (derivados), withMethods (mutaciones/HTTP) y withHooks sin boilerplate de reducers.",
            "diagramType": "ng-ngrx-signal-store-architecture"
        },
        "interviewTips": {
            "whatInterviewersWant": "Destacar la simplicidad composable de SignalStore frente al boilerplate de NgRx Store clásico, y su integración nativa con Signals.",
            "commonPitfalls": [
                "Mutar el estado directamente sin patchState().",
                "Crear stores monolíticos gigantes en lugar de stores pequeños y desacoplados por feature."
            ],
            "followUps": [
                "¿Qué diferencia hay entre withState, withComputed y withMethods?",
                "¿Cuándo preferirías el NgRx Store clásico?"
            ]
        },
        "quiz": {
            "question": "¿Cuál es la función encargada de mutar el estado de forma inmutable dentro de un método en NgRx SignalStore?",
            "options": [
                "patchState(store, { ...updates })",
                "store.mutate()",
                "store.commitState()",
                "this.state.push()"
            ],
            "correctIndex": 0,
            "explanation": "patchState es la utilidad oficial y tipada de NgRx SignalStore para aplicar mutaciones parciales de estado de forma inmutable y reactiva hacia los Signals del store."
        }
    },
    {
        "id": "ng-22",
        "title": "¿Cómo diseñar una arquitectura empresarial escalable con NX y Module Federation en Angular?",
        "level": "experto",
        "tags": [
            "Nx",
            "Module-Federation",
            "Microfrontends",
            "Monorepo",
            "Enterprise-Architecture",
            "Linting-Rules"
        ],
        "response": "El diseño de sistemas frontend distribuidos a gran escala con Angular se fundamenta en la combinación de **Nx Monorepo** y **Module Federation**:\n\n1. **Estructura Monorepo con Nx (Domain-Driven Design)**:\n   - El código se estructura por dominios de negocio (`apps/` y `libs/`).\n   - Las librerías (`libs/`) se segmentan en cuatro capas estrictas con responsabilidades unívocas:\n     - **`feature-*`**: Componentes inteligentes con enrutamiento y orquestación de pantallas.\n     - **`ui-*`**: Componentes tontos (dumb components) reutilizables del Design System.\n     - **`data-access-*`**: Servicios, clientes HTTP, modelos de datos y SignalStores.\n     - **`util-*`**: Funciones puras, helpers, validadores e interceptores.\n   - **Reglas de Límites de Módulos (Nx ESLint Rules)**: La regla `@nx/enforce-module-boundaries` impide que capas inferiores importen de capas superiores o que un dominio acceda a los módulos privados de otro dominio sin una API pública (`index.ts`).\n\n2. **Microfrontends con Module Federation (`@angular-architects/module-federation`)**:\n   - Una aplicación contenedora principal (**Host Shell**) orquesta la navegación y el layout global.\n   - Los dominios independientes (**Remotes**: ej. `checkout`, `catalog`) se compilan y despliegan de forma desacoplada en sus propios pipelines CI/CD.\n   - **Carga Dinámica**: El Host utiliza `loadRemoteModule` para descargar los microfrontends bajo demanda por HTTP.\n   - **Singletons Compartidos (Shared Dependencies)**: Se configuran `@angular/core`, `@angular/common`, RxJS y NgRx como dependencias compartidas para garantizar que solo se cargue una instancia en memoria.",
        "codeExample": {
            "language": "typescript",
            "code": "// Configuración de rutas en la aplicación Host Shell usando Module Federation dinámico:\nimport { Routes } from '@angular/router';\nimport { loadRemoteModule } from '@angular-architects/module-federation';\n\nexport const routes: Routes = [\n  {\n    path: '',\n    redirectTo: 'catalog',\n    pathMatch: 'full'\n  },\n  {\n    path: 'catalog',\n    // Carga perezosa del microfrontend remoto compilado de forma independiente:\n    loadChildren: () =>\n      loadRemoteModule({\n        type: 'module',\n        remoteEntry: 'https://cdn.empresa.com/remotes/catalog/remoteEntry.js',\n        exposedModule: './Routes'\n      }).then(m => m.CATALOG_ROUTES)\n  },\n  {\n    path: 'checkout',\n    loadChildren: () =>\n      loadRemoteModule({\n        type: 'module',\n        remoteEntry: 'https://cdn.empresa.com/remotes/checkout/remoteEntry.js',\n        exposedModule: './Routes'\n      }).then(m => m.CHECKOUT_ROUTES)\n  }\n];"
        },
        "visualDiagram": {
            "id": "diag-ng-22",
            "title": "Arquitectura Empresarial: Nx Monorepo y Module Federation",
            "caption": "App Shell Host cargando microfrontends remotos (Catalog/Checkout) con librerías compartidas (UI, Data-Access) y límites Nx.",
            "diagramType": "ng-nx-module-federation-enterprise"
        },
        "interviewTips": {
            "whatInterviewersWant": "Explicar la división por capas (feature, ui, data-access, util) en Nx y cómo Module Federation comparte dependencias clave para evitar duplicación de bundles.",
            "commonPitfalls": [
                "Permitir dependencias cruzadas entre features en un monorepo sin reglas de linting.",
                "No configurar dependencias compartidas como singletons en Module Federation provocando múltiples instancias de Angular en runtime."
            ],
            "followUps": [
                "¿Cómo forzarías límites entre librerías con las tags de Nx?",
                "¿Cómo compartirías dependencias en Module Federation?"
            ]
        },
        "quiz": {
            "question": "¿Por qué es crucial configurar dependencias compartidas como @angular/core en formato singleton en Module Federation?",
            "options": [
                "Para evitar que el navegador instancie múltiples copias de Angular en memoria, lo que rompería el contexto de inyección de dependencias e inflaría el bundle.",
                "Para que las fuentes tipográficas se carguen en negrita.",
                "Para permitir la instalación de extensiones de navegador de terceros.",
                "Para evitar que Google indexe los microfrontends en el buscador."
            ],
            "correctIndex": 0,
            "explanation": "Al compartir paquetes core de Angular como singletons en Module Federation, todos los microfrontends remotos reutilizan la misma instancia en memoria, previniendo errores críticos de inyección y reduciendo el consumo de red."
        }
    }
]
};

export default questionsAngular;
