import { ISection } from "../../types";

export const questionsSOLID: ISection = {
  id: "solid",
  title: "SOLID",
  collapse: "collapseSOLID",
  icon: "solid",
  category: "arquitectura-ops",
  description:
    "Principios fundamentales de diseño de software aplicados a arquitectura frontend, Clean Code, patrones y gobernanza.",
  questions: [
    {
        "id": "solid-01",
        "title": "¿Qué significan las siglas SOLID y cuál es su objetivo?",
        "level": "basico",
        "tags": [
            "SOLID",
            "CleanCode",
            "Architecture",
            "Coupling",
            "Cohesion"
        ],
        "response": "SOLID es un acrónimo mnemotécnico acuñado por Robert C. Martin ('Uncle Bob') a principios de los 2000 que agrupa **cinco principios fundamentales de diseño y arquitectura de software** orientados a objetos y programación modular:\n\n1. **S - Single Responsibility Principle (SRP)**: Un módulo, clase o función debe tener una única razón para cambiar (responder a un único actor o responsabilidad de negocio).\n2. **O - Open/Closed Principle (OCP)**: Las entidades de software deben estar abiertas a la extensión pero cerradas a la modificación directa.\n3. **L - Liskov Substitution Principle (LSP)**: Los objetos de un subtipo o clase derivada deben poder reemplazar a los del tipo base sin alterar la correctitud del programa.\n4. **I - Interface Segregation Principle (ISP)**: Los clientes no deben verse forzados a depender de interfaces o métodos que no utilizan (favorecer interfaces pequeñas y cohesivas).\n5. **D - Dependency Inversion Principle (DIP)**: Los módulos de alto nivel no deben acoplarse a módulos de bajo nivel; ambos deben depender de abstracciones (interfaces estables).\n\n**Objetivo Principal**:\nCombatir los cuatro síntomas de la degradación del software (*Code Rot*): **Rigidez** (el cambio más pequeño exige una cascada de cambios en otros módulos), **Fragilidad** (modificar una parte rompe funcionalidades aparentemente no relacionadas), **Inmovilidad** (imposibilidad de reutilizar módulos en otros proyectos debido al acoplamiento) y **Viscosidad** (es más fácil añadir un parche sucio que seguir el diseño arquitectónico correcto).",
        "codeExample": {
            "language": "typescript",
            "code": "// Demostración conceptual de los 5 principios conviviendo armónicamente\n\n// 1. ISP: Contrato mínimo segregado para envío de mensajes\nexport interface INotificationChannel {\n  send(recipient: string, message: string): Promise<boolean>;\n}\n\n// 2. OCP & LSP: Implementaciones sustituibles sin alterar clientes\nexport class EmailChannel implements INotificationChannel {\n  async send(recipient: string, message: string): Promise<boolean> {\n    console.log(`[Email] Enviando a ${recipient}: ${message}`);\n    return true;\n  }\n}\n\nexport class SlackChannel implements INotificationChannel {\n  async send(recipient: string, message: string): Promise<boolean> {\n    console.log(`[Slack Webhook] Publicando en #${recipient}: ${message}`);\n    return true;\n  }\n}\n\n// 3. SRP & DIP: Servicio de alto nivel depende de abstracción inyectada\nexport class AlertNotificationService {\n  // Inyección de dependencias (DIP)\n  constructor(private readonly channel: INotificationChannel) {}\n\n  async notifySecurityAlert(adminContact: string, alertDetail: string): Promise<void> {\n    // SRP: Solo se encarga de la política de alertas, no del transporte de red\n    const formattedMessage = `🚨 ALERTA CRÍTICA: ${alertDetail.toUpperCase()}`;\n    await this.channel.send(adminContact, formattedMessage);\n  }\n}"
        },
        "visualDiagram": {
            "id": "diag-solid-01",
            "diagramType": "solid-overview-pentagon",
            "title": "Los 5 Pilares de la Arquitectura SOLID",
            "caption": "S (Responsabilidad Única), O (Abierto/Cerrado), L (Liskov), I (Segregación de Interfaces) y D (Inversión de Dependencias)."
        },
        "interviewTips": {
            "whatInterviewersWant": "Demostrar que comprendes la motivación profunda de SOLID (combatir la rigidez, fragilidad y acoplamiento) y cómo estos principios se traducen de forma práctica en TypeScript y frameworks modernos.",
            "commonPitfalls": [
                "Recitar las definiciones de memoria como un dogma sin saber dar ejemplos prácticos aplicados a frontend o backend.",
                "Creer que SOLID solo aplica a lenguajes orientados a objetos como Java o C# (aplica igualmente a TypeScript y programación modular)."
            ]
        },
        "quiz": {
            "question": "¿Cuál es el objetivo primordial de aplicar los principios SOLID en un proyecto de software a largo plazo?",
            "options": [
                "Reducir automáticamente el uso de memoria RAM del navegador a la mitad.",
                "Combatir la rigidez, fragilidad y acoplamiento excesivo del código, facilitando el mantenimiento, la extensibilidad y el testing.",
                "Eliminar por completo la necesidad de escribir pruebas unitarias e integración.",
                "Garantizar que todo el código se ejecute en un único hilo síncrono."
            ],
            "correctIndex": 1,
            "explanation": "SOLID previene el deterioro del código (Code Rot), asegurando que el software pueda crecer, adaptarse a nuevos requerimientos y testearse con bajo riesgo de regresiones o efectos secundarios colaterales."
        }
    },
    {
        "id": "solid-02",
        "title": "¿Qué es el Principio de Responsabilidad Única (SRP)?",
        "level": "basico",
        "tags": [
            "SRP",
            "Cohesion",
            "Coupling",
            "Refactoring",
            "SeparationOfConcerns"
        ],
        "response": "El **Principio de Responsabilidad Única (Single Responsibility Principle - SRP)** establece que **'un módulo, clase o función debe tener una, y solo una, razón para cambiar'**.\n\nUna formulación más precisa y orientada al negocio explicada por Robert C. Martin es: **'Un módulo debe ser responsable ante un solo actor o grupo de interés'** (stakeholder):\n\n¿Por qué es crítico el SRP?\n1. **Alta Cohesión**: Todos los elementos internos de un módulo deben estar estrechamente relacionados con un propósito unificado.\n2. **Bajo Acoplamiento**: Si una clase o componente mezcla responsabilidades dispares (por ejemplo: consultar una API REST, validar reglas de negocio de tarjetas de crédito y pintar un componente visual en pantalla), responderá a tres actores diferentes (el administrador de sistemas, el departamento financiero y el diseñador de UX). Cualquier cambio solicitado por finanzas corre el riesgo de romper el layout de la pantalla.\n3. **Testeabilidad Directa**: Un módulo con una sola responsabilidad tiene casos de prueba atómicos, predecibles y fáciles de aislar sin requerir decenas de mocks complejos.",
        "codeExample": {
            "language": "typescript",
            "code": "// ❌ ANTI-PATRÓN: Violación de SRP (Múltiples razones de cambio)\nclass UserManagerBad {\n  async authenticateAndPrintReport(userId: string): Promise<void> {\n    // Razón 1: Lógica de red HTTP\n    const res = await fetch(`/api/users/${userId}`);\n    const user = await res.json();\n\n    // Razón 2: Validación de reglas de negocio\n    if (!user.isActive || user.failedAttempts > 3) {\n      throw new Error('Cuenta bloqueada');\n    }\n\n    // Razón 3: Formateo de presentación visual / HTML\n    const htmlReport = `<div class=\"card\"><h1>${user.name}</h1></div>`;\n    document.body.innerHTML = htmlReport;\n  }\n}\n\n// ✅ APLICACIÓN DE SRP: Cada pieza tiene una única responsabilidad\nexport class UserRepository {\n  async findById(id: string): Promise<User> {\n    const res = await fetch(`/api/users/${id}`);\n    return res.json();\n  }\n}\n\nexport class UserSecurityPolicy {\n  static isAccountAccessible(user: User): boolean {\n    return user.isActive && user.failedAttempts <= 3;\n  }\n}\n\nexport class UserCardPresenter {\n  static formatHtmlCard(user: User): string {\n    return `<div class=\"user-badge\"><h2>${user.name}</h2></div>`;\n  }\n}"
        },
        "visualDiagram": {
            "id": "diag-solid-02",
            "diagramType": "solid-srp-single-responsibility",
            "title": "Descomposición de Responsabilidades con SRP",
            "caption": "Módulo monolítico (4 razones de cambio) descompuesto en API, Validación de negocio y Presentación."
        },
        "interviewTips": {
            "whatInterviewersWant": "Explicar que 'responsabilidad única' no significa 'un método por clase', sino 'una sola razón de cambio ante un actor de negocio'.",
            "commonPitfalls": [
                "Llevar SRP al extremo absurdo fragmentando cada línea de código en un archivo diferente (crea parálisis y sobre-ingeniería).",
                "Confundir lo que una clase *hace* con la persona o área que solicita los cambios sobre ella."
            ]
        },
        "quiz": {
            "question": "¿Cuál es la definición más rigurosa del Principio de Responsabilidad Única (SRP)?",
            "options": [
                "Cada archivo de TypeScript debe contener exactamente una sola función que no supere las 10 líneas.",
                "Un módulo, clase o componente debe ser responsable ante un solo actor o tener una única razón para ser modificado.",
                "Todas las clases deben ser declaradas como singleton para que solo exista una instancia en memoria.",
                "Las funciones deben recibir un único parámetro primitivo obligatorio."
            ],
            "correctIndex": 1,
            "explanation": "SRP se define formalmente como la propiedad de que un módulo solo tenga una razón para cambiar, lo que equivale a responder a los requerimientos de un único actor de negocio o subsistema."
        }
    },
    {
        "id": "solid-03",
        "title": "¿Qué busca el Principio Abierto/Cerrado (OCP)?",
        "level": "basico",
        "tags": [
            "OCP",
            "Polymorphism",
            "Extensibility",
            "Refactoring",
            "Strategy"
        ],
        "response": "El **Principio Abierto/Cerrado (Open/Closed Principle - OCP)**, formulado originalmente por Bertrand Meyer en 1988, dictamina que **'las entidades de software (clases, módulos, componentes) deben estar abiertas para su extensión, pero cerradas para su modificación'**:\n\n1. **Abierto para su Extensión (Open for Extension)**:\n- Debe ser posible dotar al sistema de nuevos comportamientos, funcionalidades o algoritmos para satisfacer nuevos requerimientos del negocio.\n\n2. **Cerrado para su Modificación (Closed for Modification)**:\n- La incorporación de esas nuevas características **NO debe exigir alterar el código fuente existente y testeado** que ya está operando de forma estable en producción.\n\n¿Cómo se logra en la práctica?\n- Reemplazando sentencias condicionales masivas (`if / else` o `switch`) que evalúan tipos de entidades por **Polimorfismo**, **Inyección de Dependencias**, patrones de diseño como **Strategy** o **Decorator**, y en el frontend mediante **Composición de Componentes** (Composition over Inheritance).",
        "codeExample": {
            "language": "typescript",
            "code": "// ❌ ANTI-PATRÓN: Violación de OCP con switch condicional\nclass DiscountCalculatorBad {\n  calculate(customerType: string, amount: number): number {\n    // Cada nuevo tipo de cliente exige MODIFICAR este archivo (riesgo de regresión)\n    if (customerType === 'regular') return amount * 0.95;\n    if (customerType === 'premium') return amount * 0.85;\n    if (customerType === 'vip') return amount * 0.70;\n    return amount;\n  }\n}\n\n// ✅ APLICACIÓN DE OCP: Abierto a extensión mediante interfaces y polimorfismo\nexport interface IDiscountStrategy {\n  applyDiscount(amount: number): number;\n}\n\nexport class RegularCustomerDiscount implements IDiscountStrategy {\n  applyDiscount(amount: number): number { return amount * 0.95; }\n}\n\nexport class PremiumCustomerDiscount implements IDiscountStrategy {\n  applyDiscount(amount: number): number { return amount * 0.85; }\n}\n\n// ✨ NUEVA REGLA DE NEGOCIO: Solo creamos una nueva clase SIN TOCAR las anteriores\nexport class BlackFridayDiscount implements IDiscountStrategy {\n  applyDiscount(amount: number): number { return amount * 0.50; }\n}\n\nexport class OrderCheckoutService {\n  // Cerrado a modificación: opera contra cualquier estrategia que cumpla el contrato\n  processTotal(amount: number, discount: IDiscountStrategy): number {\n    return discount.applyDiscount(amount);\n  }\n}"
        },
        "visualDiagram": {
            "id": "diag-solid-03",
            "diagramType": "solid-ocp-open-closed",
            "title": "Principio Abierto / Cerrado mediante Estrategias Polimórficas",
            "caption": "El despachador central está cerrado a cambios; nuevos canales se agregan extendiendo contratos."
        },
        "interviewTips": {
            "whatInterviewersWant": "Demostrar cómo OCP previene el 'Efecto Dominó' de bugs al agregar features y cómo identificar violaciones cuando una clase tiene una lista interminable de `if (type === 'x')`.",
            "commonPitfalls": [
                "Crear jerarquías polimórficas anticipadas para código que nunca va a extenderse (aplicar primero YAGNI/KISS).",
                "Pensar que OCP prohíbe corregir errores en el código (los bugfixes no son extensiones de feature)."
            ]
        },
        "quiz": {
            "question": "¿Cuál es la señal más evidente de una violación del Principio Abierto/Cerrado (OCP) en una base de código?",
            "options": [
                "Tener más de dos interfaces en el mismo directorio.",
                "Tener una función con un bloque `switch` o múltiples `if/else` que debe ser editada cada vez que el negocio inventa una nueva variante o tipo de producto.",
                "Usar async/await en lugar de Promesas clásicas.",
                "Definir propiedades readonly en un modelo de TypeScript."
            ],
            "correctIndex": 1,
            "explanation": "Cuando cada nueva variante de negocio requiere abrir y modificar un `switch(tipo)` en un archivo existente, el módulo viola OCP porque está abierto a modificaciones en lugar de permitir la extensión polimórfica."
        }
    },
    {
        "id": "solid-04",
        "title": "¿Qué es el Principio de Sustitución de Liskov (LSP)?",
        "level": "basico",
        "tags": [
            "LSP",
            "Subtyping",
            "Invariants",
            "Contracts",
            "Inheritance"
        ],
        "response": "El **Principio de Sustitución de Liskov (LSP)**, presentado por Barbara Liskov en 1987, define la regla matemática y arquitectónica del subtipado coherente:\n\n> *'Si por cada objeto $o_1$ de tipo $S$ existe un objeto $o_2$ de tipo $T$ tal que para todos los programas $P$ definidos en términos de $T$, el comportamiento de $P$ permanece inalterado cuando $o_1$ es sustituido por $o_2$, entonces $S$ es un subtipo de $T$'.*\n\nEn términos de ingeniería práctica: **Los objetos de una clase hija o subtipo deben poder sustituir a los objetos de la clase padre o interfaz sin que el cliente note ninguna diferencia indeseada ni se rompa la correctitud del programa**.\n\nReglas de cumplimiento de LSP:\n1. **Precondiciones**: Una subclase **no puede exigir precondiciones más estrictas** que las de la clase base (ej. el padre acepta números positivos y el hijo solo acepta números pares).\n2. **Postcondiciones**: Una subclase **no puede debilitar las postcondiciones** (debe entregar como mínimo las mismas garantías que el padre prometió).\n3. **Invariantes**: Todas las condiciones invariantes de la clase base deben preservarse en la clase derivada.\n4. **Regla de Excepciones**: Un subtipo no debe lanzar nuevas excepciones no declaradas o no contempladas por el contrato del tipo base.",
        "codeExample": {
            "language": "typescript",
            "code": "// ❌ ANTI-PATRÓN: Violación de LSP (El clásico caso de aves que no vuelan)\nclass Bird {\n  fly(): string { return 'Volando por los cielos'; }\n}\n\nclass Penguin extends Bird {\n  // Rompe el contrato de Bird: lanza un error inesperado para el cliente\n  override fly(): string {\n    throw new Error('Los pingüinos no pueden volar!'); // 💥 Rompe LSP\n  }\n}\n\n// ✅ APLICACIÓN CORRECTA DE LSP: Segregación y modelado riguroso\nexport abstract class Animal {\n  abstract eat(): void;\n}\n\nexport interface IFlyingCreature {\n  fly(): string;\n}\n\nexport class Eagle extends Animal implements IFlyingCreature {\n  eat(): void { console.log('Águila comiendo'); }\n  fly(): string { return 'Águila volando a 3000 metros'; }\n}\n\nexport class PenguinSafe extends Animal {\n  eat(): void { console.log('Pingüino comiendo pescado'); }\n  // No implementa IFlyingCreature: el cliente nunca esperará que vuele\n}"
        },
        "visualDiagram": {
            "id": "diag-solid-04",
            "diagramType": "solid-lsp-liskov-substitution",
            "title": "Reglas de Sustitución de Liskov (LSP)",
            "caption": "Subtipos que cumplen contratos garantizan sustitución segura; subtipos que lanzan excepciones violan LSP."
        },
        "interviewTips": {
            "whatInterviewersWant": "Mencionar los conceptos de Precondiciones, Postcondiciones e Invariantes y explicar por qué la herencia 'es-un' del mundo real (un pingüino es un ave) no siempre es válida en diseño de software orientado a contratos.",
            "commonPitfalls": [
                "Creer que LSP se cumple solo porque el compilador de TypeScript compila sin errores de tipos.",
                "Sobrescribir métodos en una subclase dejando el cuerpo vacío (`{}`) o lanzando `throw new Error('No soportado')`."
            ]
        },
        "quiz": {
            "question": "¿Qué ocurre cuando una clase derivada sobrescribe un método del padre y lanza un `throw new Error('Operación no permitida')`?",
            "options": [
                "Se cumple perfectamente el polimorfismo de TypeScript.",
                "Se viola el Principio de Sustitución de Liskov (LSP), ya que el cliente que consume la interfaz base no espera dicha excepción y el programa se vuelve inestable.",
                "Se activa el recolector de basura de la máquina virtual de JavaScript.",
                "Se optimiza el tamaño del bundle en un 15%."
            ],
            "correctIndex": 1,
            "explanation": "Lanzar excepciones no anticipadas por el contrato de la clase base rompe la sustituibilidad de Liskov, forzando al cliente a añadir verificaciones sucias de tipo (`if (instance instanceof Penguin)`)."
        }
    },
    {
        "id": "solid-05",
        "title": "¿Qué es el Principio de Segregación de Interfaces (ISP)?",
        "level": "basico",
        "tags": [
            "ISP",
            "Interfaces",
            "RoleInterface",
            "Cohesion",
            "Coupling"
        ],
        "response": "El **Principio de Segregación de Interfaces (Interface Segregation Principle - ISP)** estipula que **'los clientes no deben ser forzados a depender de interfaces o métodos que no utilizan'**.\n\nEn el diseño de sistemas, es un error frecuente agrupar todas las operaciones de un dominio en una sola interfaz gigante y monolítica (conocida en la industria como **'Fat Interface'** o interfaz obesa).\n\nConsecuencias negativas de violar ISP:\n1. **Acoplamiento Artificial**: Si una clase implementa una interfaz de 25 métodos pero solo necesita 2, se ve forzada a implementar los otros 23 con código muerto (`return null;` o errores).\n2. **Efecto Cascada de Recompilación**: Si la interfaz compartida sufre un cambio en un método que la clase A no usa, la clase A y sus tests deben ser recompilados o revalidados de todas formas.\n\nSolución Arquitectónica: **Role Interfaces**:\n- Dividir los contratos en múltiples interfaces pequeñas, especializadas y altamente cohesivas orientadas al rol del consumidor (`IReadable`, `IWritable`, `IClonable`).\n- Una clase o componente puede componer e implementar tantas interfaces pequeñas como requiera, garantizando que cada consumidor solo conozca los métodos pertinentes.",
        "codeExample": {
            "language": "typescript",
            "code": "// ❌ ANTI-PATRÓN: Interfaz Monolítica Obesa (Fat Interface)\ninterface IMultiFunctionPrinter {\n  print(doc: string): void;\n  scan(): string;\n  fax(doc: string): void;\n}\n\n// Una impresora económica básica no tiene Fax ni Escáner\nclass SimplePrinterBad implements IMultiFunctionPrinter {\n  print(doc: string): void { console.log('Imprimiendo...'); }\n  scan(): string { throw new Error('Escáner no soportado'); } // ❌ Violación de ISP\n  fax(doc: string): void { throw new Error('Fax no soportado'); } // ❌ Violación de ISP\n}\n\n// ✅ APLICACIÓN DE ISP: Interfaces Segregadas por Rol Atómico\nexport interface IPrinter {\n  print(doc: string): void;\n}\n\nexport interface IScanner {\n  scan(): string;\n}\n\nexport interface IFaxMachine {\n  fax(doc: string): void;\n}\n\n// Dispositivo básico implementa solo su contrato real\nexport class BasicDeskjetPrinter implements IPrinter {\n  print(doc: string): void { console.log(`Imprimiendo: ${doc}`); }\n}\n\n// Dispositivo industrial compone múltiples interfaces según sus capacidades\nexport class EnterprisePrinterCenter implements IPrinter, IScanner, IFaxMachine {\n  print(doc: string): void { console.log('Impresión láser industrial'); }\n  scan(): string { return 'Documento escaneado en alta resolución'; }\n  fax(doc: string): void { console.log('Enviando fax corporativo'); }\n}"
        },
        "visualDiagram": {
            "id": "diag-solid-05",
            "diagramType": "solid-isp-interface-segregation",
            "title": "Segregación de Interfaces: Fat Interface vs Role Interfaces",
            "caption": "Fat interface monolítica fuerza métodos huérfanos; role interfaces permiten implementación granular exacta."
        },
        "interviewTips": {
            "whatInterviewersWant": "Demostrar cómo ISP se aplica en TypeScript utilizando utility types como `Pick`, `Omit` y tipos intersection (`A & B`), evitando pasar entidades gigantes a componentes de UI.",
            "commonPitfalls": [
                "Crear interfaces de 1 solo método indiscriminadamente cuando los métodos están inherentemente cohesionados.",
                "Obligar a componentes frontend a recibir el modelo completo de base de datos en sus props."
            ]
        },
        "quiz": {
            "question": "¿Cuál es la principal ventaja de aplicar el Principio de Segregación de Interfaces (ISP) en un sistema con múltiples consumidores?",
            "options": [
                "Permite compilar código TypeScript a lenguaje WebAssembly directamente.",
                "Evita que los clientes dependan de métodos que no necesitan, reduciendo el acoplamiento y previniendo que cambios en métodos no utilizados fuercen revalidaciones en clientes no relacionados.",
                "Elimina la necesidad de utilizar constructores en las clases.",
                "Fuerza a que todas las interfaces sean globales en el namespace window."
            ],
            "correctIndex": 1,
            "explanation": "ISP asegura que los contratos sean pequeños y específicos para cada rol de consumidor. Si un cliente solo lee datos, no debe verse obligado a conocer o depender de métodos de escritura o borrado."
        }
    },
    {
        "id": "solid-06",
        "title": "¿Qué es el Principio de Inversión de Dependencias (DIP)?",
        "level": "basico",
        "tags": [
            "DIP",
            "DependencyInversion",
            "Abstractions",
            "Decoupling",
            "IoC"
        ],
        "response": "El **Principio de Inversión de Dependencias (Dependency Inversion Principle - DIP)** es la piedra angular del diseño arquitectónico desacoplado y consta de **dos reglas fundamentales** formuladas por Robert C. Martin:\n\n1. **Los módulos de alto nivel no deben depender de módulos de bajo nivel. Ambos deben depender de abstracciones (interfaces o contratos abstractos)**.\n2. **Las abstracciones no deben depender de los detalles concretos. Los detalles concretos deben depender de las abstracciones**.\n\nConceptos clave:\n- **Módulo de Alto Nivel**: Es el núcleo que alberga la política de negocio central de la aplicación (ej. `CheckoutService`, `CalculationEngine`). No debe saber nada sobre MySQL, SQLite, Axios o LocalStorage.\n- **Módulo de Bajo Nivel**: Es el detalle de infraestructura o hardware que ejecuta operaciones técnicas periféricas (ej. driver de base de datos, cliente HTTP fetch, sistema de archivos).\n- **Por qué se llama 'Inversión'**: En la arquitectura tradicional orientada a capas, el flujo de dependencias sigue la dirección del control (Alto nivel depende de Bajo nivel). Con DIP, la dirección de la dependencia en código fuente se **invierte**: el módulo de bajo nivel debe apuntar hacia adentro e implementar la interfaz definida por el dominio de alto nivel.",
        "codeExample": {
            "language": "typescript",
            "code": "// ❌ ANTI-PATRÓN: Alto nivel acoplado directamente a bajo nivel\nclass SqliteDatabase {\n  query(sql: string): any[] { return []; }\n}\n\nclass FinancialAuditBad {\n  private db = new SqliteDatabase(); // 💥 Alto nivel acoplado a SQLite concreto\n\n  generateLedger() {\n    // Si queremos cambiar a PostgreSQL o testear con un Mock, debemos reescribir esta clase\n    return this.db.query('SELECT * FROM ledger');\n  }\n}\n\n// ✅ APLICACIÓN DE DIP: Ambos dependen de una interfaz abstracta estable\nexport interface IDatabaseConnection {\n  execute<T>(queryStr: string): Promise<T[]>;\n}\n\n// Módulo de Alto Nivel: Solo conoce el contrato\nexport class FinancialAuditService {\n  constructor(private readonly db: IDatabaseConnection) {} // Inyección de abstracción\n\n  async generateLedger(): Promise<LedgerEntry[]> {\n    return this.db.execute<LedgerEntry>('SELECT * FROM ledger WHERE is_closed = 1');\n  }\n}\n\n// Detalles de Bajo Nivel: Implementan la interfaz del dominio\nexport class PostgresAdapter implements IDatabaseConnection {\n  async execute<T>(queryStr: string): Promise<T[]> {\n    console.log(`[PostgreSQL] Ejecutando: ${queryStr}`);\n    return [] as T[];\n  }\n}\n\nexport class InMemoryMockAdapter implements IDatabaseConnection {\n  async execute<T>(queryStr: string): Promise<T[]> {\n    return [{ id: '1', balance: 5000 }] as unknown as T[]; // Para tests en memoria\n  }\n}"
        },
        "visualDiagram": {
            "id": "diag-solid-06",
            "diagramType": "solid-dip-dependency-inversion",
            "title": "Inversión de Dependencias: Módulo de Alto Nivel y Abstracciones",
            "caption": "El negocio depende de una interfaz; los detalles de infraestructura implementan dicha interfaz."
        },
        "interviewTips": {
            "whatInterviewersWant": "Articular con precisión las dos reglas de DIP y aclarar que DIP es el principio de diseño, mientras que Dependency Injection (DI) es solo la técnica que lo materializa.",
            "commonPitfalls": [
                "Crear una interfaz `SqliteDatabaseInterface` que replica los métodos específicos de SQLite (las abstracciones no deben depender de los detalles).",
                "Confundir DIP con usar clases singleton estáticas globales."
            ]
        },
        "quiz": {
            "question": "En el Principio de Inversión de Dependencias (DIP), ¿quién debe ser el dueño del contrato o interfaz abstracta?",
            "options": [
                "El driver de la base de datos o el fabricante del hardware de red.",
                "El módulo de alto nivel (el dominio de negocio), obligando a los módulos de bajo nivel a adaptarse a él.",
                "El servidor de balanceo de carga en la nube.",
                "El compilador de Webpack en tiempo de empaquetado."
            ],
            "correctIndex": 1,
            "explanation": "En una arquitectura limpia con DIP, la interfaz pertenece conceptualmente a la capa de alto nivel (dominio). La capa de infraestructura de bajo nivel simplemente implementa el puerto o contrato exigido por el negocio."
        }
    },
    {
        "id": "solid-07",
        "title": "¿Cómo se aplica SRP en componentes y hooks de React?",
        "level": "medio",
        "tags": [
            "React",
            "SRP",
            "CustomHooks",
            "ContainerView",
            "SeparationOfConcerns"
        ],
        "response": "En el ecosistema moderno de React, violar el Principio de Responsabilidad Única (SRP) es la causa principal de componentes 'espagueti' que resultan imposibles de testear y mantener.\n\nArquitectura SRP en React (Separación en 3 Capas Cohesivas):\n\n1. **Capa de Presentación / Vista (`UserView.tsx`)**:\n- **Responsabilidad**: Únicamente renderizar marcado JSX accesible, estilos Tailwind/CSS y vincular eventos del usuario a callbacks provistos por props.\n- Debe ser idealmente un componente puro o 'tonto' (Dumb Component) sin `useEffect`, sin peticiones `fetch` y con mínimo estado local exclusivamente de UI (ej. un modal abierto/cerrado).\n\n2. **Capa de Lógica de Estado y Orquestación (`useUserManagement.ts`)**:\n- **Responsabilidad**: Encapsular la orquestación del estado, mutaciones, suscripciones y validaciones en un **Custom Hook** dedicado.\n- Expone a la vista solo los datos listos y las funciones de acción limpias (`{ users, isLoading, deleteUser }`).\n\n3. **Capa de Servicios de Dominio / API (`userApi.ts`)**:\n- **Responsabilidad**: Ejecutar el transporte de red HTTP, serialización de cabeceras y manejo de errores de protocolo, completamente desacoplado de React (0 imports de `react`).",
        "codeExample": {
            "language": "tsx",
            "code": "// 1. CAPA SERVICIO (userApi.ts) - TypeScript puro sin React\nexport interface UserDto { id: string; name: string; email: string; }\nexport const userApi = {\n  async fetchAll(): Promise<UserDto[]> {\n    const res = await fetch('/api/users');\n    if (!res.ok) throw new Error('Error al consultar usuarios');\n    return res.json();\n  }\n};\n\n// 2. CAPA ESTADO Y NEGOCIO (useUserManagement.ts) - Hook de React\nimport { useState, useEffect } from 'react';\nexport const useUserManagement = () => {\n  const [users, setUsers] = useState<UserDto[]>([]);\n  const [isLoading, setIsLoading] = useState(true);\n  const [error, setError] = useState<string | null>(null);\n\n  useEffect(() => {\n    userApi.fetchAll()\n      .then(setUsers)\n      .catch(err => setError(err.message))\n      .finally(() => setIsLoading(false));\n  }, []);\n\n  return { users, isLoading, error };\n};\n\n// 3. CAPA PRESENTACIONAL (UserListView.tsx) - Solo marcado visual\nimport React from 'react';\nexport const UserListView: React.FC = () => {\n  const { users, isLoading, error } = useUserManagement();\n\n  if (isLoading) return <div className=\"animate-pulse p-4\">Cargando nómina...</div>;\n  if (error) return <div className=\"text-red-500\">Error crítico: {error}</div>;\n\n  return (\n    <ul className=\"divide-y divide-slate-200\">\n      {users.map(u => (\n        <li key={u.id} className=\"p-3 flex justify-between\">\n          <span className=\"font-medium\">{u.name}</span>\n          <span className=\"text-slate-500\">{u.email}</span>\n        </li>\n      ))}\n    </ul>\n  );\n};"
        },
        "visualDiagram": {
            "id": "diag-solid-07",
            "diagramType": "solid-srp-react-hooks-services",
            "title": "Arquitectura SRP en React: Vista, Hook y Servicio API",
            "caption": "Separación de responsabilidades: UserView (JSX) ➔ useUser (Estado) ➔ userApi (Transporte HTTP)."
        },
        "interviewTips": {
            "whatInterviewersWant": "Demostrar cómo la separación en Custom Hooks y Servicios API permite reutilizar la lógica en React Native o testing sin renderizar el DOM.",
            "commonPitfalls": [
                "Crear un Custom Hook que devuelve JSX, violando la separación de capas.",
                "Escribir componentes de más de 300 líneas con llamadas directas a `axios.post` dentro de handlers `onClick`."
            ]
        },
        "quiz": {
            "question": "¿Cuál es la principal ventaja de extraer las llamadas a la API a un servicio TypeScript fuera de los Custom Hooks en React según SRP?",
            "options": [
                "Aumenta la velocidad de compilación de Vite en un 90%.",
                "Permite testear las peticiones HTTP y transformaciones de datos con Node.js puro sin necesidad de montar un entorno DOM con jsdom o React Testing Library.",
                "Impide que el navegador almacene cookies de sesión.",
                "Fuerza a React a utilizar componentes de clase en lugar de funcionales."
            ],
            "correctIndex": 1,
            "explanation": "Al desacoplar el servicio de transporte HTTP de React, la capa de red se prueba con pruebas unitarias instantáneas sin simular componentes ni usar renderizadores virtuales."
        }
    },
    {
        "id": "solid-08",
        "title": "¿Cómo aplicar OCP en un componente de UI extensible?",
        "level": "medio",
        "tags": [
            "OCP",
            "DesignSystem",
            "SlotPattern",
            "CompoundComponents",
            "Composition"
        ],
        "response": "En el desarrollo de bibliotecas de componentes y **Design Systems**, violar el Principio Abierto/Cerrado (OCP) genera el anti-patrón de **'La Sopa de Props y Banderas Booleanas'** (`<Button isRed isRound isGoogle leftIcon size='lg' hasShadow ... />`).\n\nCada vez que un diseñador introduce una variante visual, el desarrollador se ve obligado a entrar al componente `<Button>`, añadir otra prop booleana y sumar un nuevo `if/else` a la cadena de estilos, arriesgando romper todos los botones existentes de la empresa.\n\nPatrones modernos para cumplir OCP en componentes de UI:\n\n1. **Composición y Slot Pattern (`asChild` / Radix UI)**:\n- El componente delega el renderizado de su elemento raíz a su hijo inmediato mediante un clonador o slot polimórfico, fusionando propiedades y accesibilidad.\n\n2. **Variantes Declarativas Tipadas (CVA - Class Variance Authority)**:\n- Se define un mapa estático de variantes visuales ortogonales (`variant`, `size`) cerrando la lógica del componente a modificaciones manuales.\n\n3. **Componentes Compuestos (Compound Components)**:\n- Estructuras como `<Select><Select.Trigger /><Select.Content><Select.Item /></Select></Select>` permiten extender la disposición de la interfaz agregando nuevos subcomponentes sin tocar la raíz.",
        "codeExample": {
            "language": "tsx",
            "code": "import React from 'react';\nimport { Slot } from '@radix-ui/react-slot'; // Patrón de Slot para OCP\nimport { cva, type VariantProps } from 'class-variance-authority';\n\n// 1. Matriz de Variantes estables y extensibles\nconst buttonVariants = cva(\n  'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none',\n  {\n    variants: {\n      variant: {\n        primary: 'bg-indigo-600 text-white hover:bg-indigo-700',\n        outline: 'border border-slate-300 text-slate-700 hover:bg-slate-50',\n        ghost: 'text-slate-600 hover:bg-slate-100',\n      },\n      size: {\n        sm: 'h-8 px-3 text-xs',\n        md: 'h-10 px-4 text-sm',\n        lg: 'h-12 px-6 text-base',\n      },\n    },\n    defaultVariants: { variant: 'primary', size: 'md' },\n  }\n);\n\nexport interface ButtonProps\n  extends React.ButtonHTMLAttributes<HTMLButtonElement>,\n    VariantProps<typeof buttonVariants> {\n  asChild?: boolean; // Permite convertir el botón en <a>, <Link> o <divCustom> sin tocar este archivo\n}\n\n// 2. Componente cerrado a modificaciones, 100% abierto a extensión vía composición\nexport const BaseButton = React.forwardRef<HTMLButtonElement, ButtonProps>(\n  ({ className, variant, size, asChild = false, ...props }, ref) => {\n    const Component = asChild ? Slot : 'button';\n    return (\n      <Component\n        className={buttonVariants({ variant, size, className })}\n        ref={ref}\n        {...props}\n      />\n    );\n  }\n);"
        },
        "visualDiagram": {
            "id": "diag-solid-08",
            "diagramType": "solid-ocp-ui-polymorphic-composition",
            "title": "OCP en UI: Composición y Slot Pattern vs Sopa de Banderas",
            "caption": "Sopa de flags requiere modificar el botón; composición con asChild extiende cualquier elemento limpiamente."
        },
        "interviewTips": {
            "whatInterviewersWant": "Explicar el patrón `asChild` (popularizado por Radix UI y shadcn/ui) y cómo el uso de `Composition over Inheritance` materializa el OCP en la Web moderna.",
            "commonPitfalls": [
                "Agregar props booleanas específicas de marca (ej. `isPayPalButton`) dentro de un botón genérico del Design System.",
                "Modificar el CSS base de un botón central para adaptarlo a una pantalla particular en lugar de componer clases utilitarias."
            ]
        },
        "quiz": {
            "question": "¿Cómo resuelve el patrón `asChild` (Slot Pattern) el principio Abierto/Cerrado (OCP) en componentes de React?",
            "options": [
                "Compilando los botones como Web Components nativos en tiempo de ejecución.",
                "Permitiendo delegar el renderizado al elemento o componente hijo (como un Link o un span), fusionando props y estilos sin necesidad de modificar el código del botón para cada nuevo caso de uso.",
                "Forzando a que los botones nunca tengan hijos ni texto interno.",
                "Convirtiendo todos los eventos de click en llamadas síncronas a un Web Worker."
            ],
            "correctIndex": 1,
            "explanation": "El patrón `asChild` permite al desarrollador transformar un botón en un tag `<a>`, un `<Link>` de React Router o cualquier elemento arbitrario simplemente pasando el elemento como hijo, sin requerir alterar el código fuente del componente original."
        }
    },
    {
        "id": "solid-09",
        "title": "¿Qué ejemplo clásico viola el Principio de Liskov (LSP) y cómo se corrige?",
        "level": "medio",
        "tags": [
            "LSP",
            "Geometry",
            "InheritanceMistake",
            "RectangleSquare",
            "Composition"
        ],
        "response": "El ejemplo clásico más célebre de violación del Principio de Sustitución de Liskov es el **Problema del Rectángulo y el Cuadrado** (*The Circle-Ellipse / Square-Rectangle Dilemma*):\n\nEl Problema en Geometría vs Código:\n- En matemáticas y en el lenguaje natural cotidiano, *'un Cuadrado ES UN Rectángulo'* (con todos sus lados de igual longitud).\n- Sin embargo, en el diseño de software orientado a contratos de comportamiento, **modelar `Square extends Rectangle` viola el LSP de forma categórica**.\n\n¿Por qué se rompe el LSP?:\n- La clase base `Rectangle` define que su ancho (`width`) y su alto (`height`) pueden variar de forma independiente. Un cliente que consume un `Rectangle` asume la invariante matemática:\n`rect.setWidth(5); rect.setHeight(4); expect(rect.getArea()).toBe(20);`\n- Si sustituimos `Rectangle` por una instancia de `Square`, para mantener la consistencia de un cuadrado la clase hija debe forzar que `setWidth(5)` altere también la altura a 5. Como consecuencia, el área calculada será **25 en lugar de 20**, **rompiendo las expectativas y la correctitud del código del cliente**.\n\nLa Solución Arquitectónica Correcta:\n- **Favorecer la Composición o una Abstracción Común**: Ninguno hereda del otro. Ambos implementan una interfaz común inmutable `IShape` con el método `getArea()`, o `Square` se modela como una estructura independiente.",
        "codeExample": {
            "language": "typescript",
            "code": "// ❌ ANTI-PATRÓN: Herencia 'es-un' incorrecta que rompe LSP\nclass RectangleBad {\n  constructor(protected width: number, protected height: number) {}\n  setWidth(w: number) { this.width = w; }\n  setHeight(h: number) { this.height = h; }\n  getArea(): number { return this.width * this.height; }\n}\n\nclass SquareBad extends RectangleBad {\n  override setWidth(w: number) { this.width = w; this.height = w; } // Muta la altura colateralmente\n  override setHeight(h: number) { this.width = h; this.height = h; }\n}\n\nfunction verifyRectangleBehavior(rect: RectangleBad) {\n  rect.setWidth(5);\n  rect.setHeight(4);\n  // Si pasas SquareBad, el test colapsa porque el área da 16 o 25 en vez de 20\n  if (rect.getArea() !== 20) throw new Error('Violación de LSP detectada!');\n}\n\n// ✅ APLICACIÓN CORRECTA DE LSP: Abstracción inmutable común\nexport interface IShape {\n  getArea(): number;\n}\n\nexport class Rectangle implements IShape {\n  constructor(public readonly width: number, public readonly height: number) {}\n  getArea(): number { return this.width * this.height; }\n}\n\nexport class Square implements IShape {\n  constructor(public readonly side: number) {}\n  getArea(): number { return this.side * this.side; }\n}\n\n// Ambos son sustitutos válidos de IShape sin efectos colaterales mutables\nexport function printArea(shape: IShape) {\n  console.log(`Área calculada correctamente: ${shape.getArea()}`);\n}"
        },
        "visualDiagram": {
            "id": "diag-solid-09",
            "diagramType": "solid-lsp-rectangle-square-violation",
            "title": "El Problema del Rectángulo y Cuadrado en LSP",
            "caption": "Mover width y height de forma acoplada viola la invariante de independencia de lados en Rectángulo."
        },
        "interviewTips": {
            "whatInterviewersWant": "Demostrar que la herencia en software no se guía por taxonomías de la vida real sino por compatibilidad de comportamiento e invariantes de estado.",
            "commonPitfalls": [
                "Creer que lanzar una advertencia en consola resuelve la violación de LSP.",
                "Afirmar que un Cuadrado debe heredar de Rectángulo 'porque en matemáticas un cuadrado es un tipo de rectángulo'."
            ]
        },
        "quiz": {
            "question": "¿Por qué la herencia `Square extends Rectangle` viola el Principio de Liskov si se permite mutar el ancho y alto independientemente?",
            "options": [
                "Porque los cuadrados ocupan más memoria RAM en el motor V8 de JavaScript.",
                "Porque al invocar `setWidth(x)`, el cuadrado se ve forzado a mutar también la altura para mantener sus lados iguales, rompiendo la invariante esperada por el cliente de que cambiar el ancho no altera el alto.",
                "Porque TypeScript prohíbe heredar de clases que calculen áreas.",
                "Porque los rectángulos solo pueden ser dibujados en elementos `<canvas>`."
            ],
            "correctIndex": 1,
            "explanation": "El cliente de un Rectángulo asume que `setWidth` no tiene efectos colaterales sobre `height`. Si una subclase muta ambas propiedades a la vez, rompe las invariantes del tipo base y provoca fallos en las funciones consumidoras."
        }
    },
    {
        "id": "solid-10",
        "title": "¿Cómo aplicar ISP en interfaces y props de TypeScript en el frontend?",
        "level": "medio",
        "tags": [
            "TypeScript",
            "ISP",
            "Pick",
            "Omit",
            "Props",
            "ReRenders"
        ],
        "response": "En el desarrollo frontend moderno con TypeScript, el Principio de Segregación de Interfaces (ISP) previene dos de los problemas más costosos en rendimiento y mantenibilidad:\n\n1. **Acoplamiento Tóxico a Modelos de Backend**:\n- Si un componente pequeño como `<UserBadge />` (que solo necesita mostrar el nombre y el avatar del usuario) declara su interfaz de props como `props: { user: UserEntity }` (donde `UserEntity` tiene 50 campos que incluyen contraseñas, tarjetas de crédito y direcciones), el componente queda innecesariamente acoplado a todo el esquema del backend.\n\n2. **Re-renderizados Inútiles y Dificultad de Testing**:\n- Si cualquier campo irrelevante de `UserEntity` cambia (por ejemplo, se actualiza la fecha de último login), el componente se re-renderiza innecesariamente.\n- Además, escribir pruebas unitarias o historias de Storybook para `<UserBadge />` obliga al desarrollador a fabricar un mock con 50 propiedades ficticias en lugar de dos.\n\nEstrategias idiomáticas de ISP en TypeScript:\n- **Uso de Utility Types (`Pick<T, K>`)**: Definir props seleccionando solo los campos requeridos (`type BadgeProps = Pick<UserEntity, 'name' | 'avatarUrl'>`).\n- **Interfaces de Rol Dedicadas**: Crear tipos nominales pequeños orientados al componente (`interface AvatarHolder { name: string; avatarUrl: string }`).\n- **Desestructuración de Parámetros Primitivos**: En lugar de recibir un objeto contenedor, recibir argumentos atómicos.",
        "codeExample": {
            "language": "tsx",
            "code": "// Modelo completo proveniente del servidor (60 campos)\nexport interface FullBackendUserAccount {\n  id: string;\n  username: string;\n  email: string;\n  avatarUrl: string;\n  billingAddress: string;\n  creditCardToken: string;\n  lastLoginTimestamp: number;\n  // ... docenas de campos más\n}\n\n// ❌ VIOLACIÓN DE ISP: El Avatar depende de datos bancarios y login\ninterface BadAvatarProps {\n  user: FullBackendUserAccount;\n}\n\n// ✅ APLICACIÓN RIGUROSA DE ISP EN TYPESCRIPT:\n// Opción A: Utility Type Pick\nexport type UserAvatarProps = Pick<FullBackendUserAccount, 'username' | 'avatarUrl'>;\n\n// Opción B: Interfaz segregada por capacidad visual\nexport interface IVisualAvatar {\n  username: string;\n  avatarUrl: string;\n  statusColor?: 'green' | 'gray' | 'red';\n}\n\nexport const UserAvatar: React.FC<IVisualAvatar> = React.memo(({ username, avatarUrl, statusColor = 'green' }) => {\n  return (\n    <div className=\"relative inline-block\">\n      <img src={avatarUrl} alt={username} className=\"w-10 h-10 rounded-full border\" />\n      <span className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-${statusColor}-500 ring-2 ring-white`} />\n    </div>\n  );\n});"
        },
        "visualDiagram": {
            "id": "diag-solid-10",
            "diagramType": "solid-isp-typescript-role-interfaces",
            "title": "Segregación de Interfaces en TypeScript: Pick y Role Props",
            "caption": "Pasar entidades monolíticas de 60 campos causa acoplamiento; Pick extrae contratos mínimos precisos."
        },
        "interviewTips": {
            "whatInterviewersWant": "Demostrar cómo ISP impacta directamente en la optimización de re-renders de React (`React.memo`) y en la facilidad de escribir mocks para Storybook y Jest sin librerías pesadas.",
            "commonPitfalls": [
                "Pasar todo el objeto `props={user}` con el operador spread `{...user}`, perdiendo el control de tipos y la encapsulación.",
                "Crear duplicaciones de interfaces en lugar de derivarlas limpiamente con `Pick<T, K>` o intersections."
            ]
        },
        "quiz": {
            "question": "¿Por qué pasar una entidad de datos completa con 40 campos a un componente de UI que solo utiliza 2 viola el principio ISP?",
            "options": [
                "Porque los navegadores bloquean la descarga de archivos con interfaces largas.",
                "Porque acopla artificialmente el componente a datos que no necesita, dificultando los tests unitarios y provocando re-renderizados innecesarios si cambian campos irrelevantes.",
                "Porque TypeScript solo permite un máximo de 5 campos por interfaz de props.",
                "Porque deshabilita el motor CSS Grid de Tailwind."
            ],
            "correctIndex": 1,
            "explanation": "Al depender de campos irrelevantes, el componente se ve afectado por cambios de esquema en datos que ni siquiera renderiza, y cualquier test requiere mockear propiedades ajenas a su función visual."
        }
    },
    {
        "id": "solid-11",
        "title": "¿Cómo se diferencia Inversión de Dependencias (DIP), Inyección de Dependencias (DI) e Inversión de Control (IoC)?",
        "level": "medio",
        "tags": [
            "DIP",
            "DI",
            "IoC",
            "SoftwareEngineering",
            "HollywoodPrinciple"
        ],
        "response": "Estos tres términos suelen confundirse como sinónimos, pero pertenecen a **tres niveles de abstracción arquitectónica completamente diferentes**:\n\n1. **DIP (Dependency Inversion Principle - El Principio Arquitectónico)**:\n- Es la **regla de diseño teórica** (la 'D' de SOLID).\n- Dicta **qué** debe depender de qué: el núcleo de alto nivel debe depender de contratos abstractos e interfaces, nunca de implementaciones concretas de bajo nivel.\n\n2. **IoC (Inversion of Control - El Concepto / Paradigma Arquitectónico)**:\n- Es el **paradigma general** donde el flujo de control de un programa se invierte: en lugar de que tu código llame a una biblioteca cuando quiere, es el **framework** quien llama a tu código cuando lo necesita (**El Principio de Hollywood**: *'No nos llames, nosotros te llamaremos'*).\n- Ejemplos de IoC: React invocando el ciclo de vida de tus componentes, frameworks web manejando el enrutamiento HTTP, o eventos del DOM disparando listeners.\n\n3. **DI (Dependency Injection - El Patrón de Diseño Concreto)**:\n- Es la **técnica o patrón de implementación** que materializa DIP e IoC suministrando las dependencias que un objeto necesita desde el exterior, en lugar de que el objeto las instancie internamente con `new`.\n- Modalidades comunes: Inyección por Constructor (`constructor(private service: IService)`), Inyección por Props (React), o mediante Contenedores de IoC (como InversifyJS o el sistema de inyección de Angular).",
        "codeExample": {
            "language": "typescript",
            "code": "// Tabla comparativa en código de los tres conceptos\n\n// 1. DIP: Definimos la abstracción (El Principio)\nexport interface ILogger {\n  log(msg: string): void;\n}\n\n// 2. DI: Inyección de la dependencia por constructor (El Patrón)\nexport class OrderProcessor {\n  // La dependencia es 'inyectada' desde afuera, no creada con new ConsoleLogger()\n  constructor(private readonly logger: ILogger) {}\n\n  process(orderId: string) {\n    this.logger.log(`Procesando orden #${orderId}`);\n  }\n}\n\n// 3. IoC Container: Gestiona el ciclo de vida y la resolución (El Framework)\nexport class SimpleIoCContainer {\n  private services = new Map<string, any>();\n\n  register<T>(key: string, instance: T): void {\n    this.services.set(key, instance);\n  }\n\n  resolve<T>(key: string): T {\n    const service = this.services.get(key);\n    if (!service) throw new Error(`Servicio ${key} no registrado`);\n    return service as T;\n  }\n}"
        },
        "visualDiagram": {
            "id": "diag-solid-11",
            "diagramType": "solid-dip-vs-di-vs-ioc-matrix",
            "title": "Matriz Comparativa: DIP (Principio) vs IoC (Concepto) vs DI (Mecanismo)",
            "caption": "DIP es la regla SOLID; IoC es la inversión del flujo (Hollywood); DI es la técnica de paso de objetos."
        },
        "interviewTips": {
            "whatInterviewersWant": "Citar el 'Principio de Hollywood' al definir IoC, identificar a DIP como la meta arquitectónica de SOLID y a DI como el mecanismo práctico que suministra los objetos.",
            "commonPitfalls": [
                "Decir que DI y DIP son la misma cosa.",
                "Creer que se necesita una librería pesada de IoC (como NestJS o InversifyJS) para hacer Dependency Injection en frontend (pasar props o Context en React ya es DI)."
            ]
        },
        "quiz": {
            "question": "¿Cuál es la relación exacta entre DIP, IoC y DI en ingeniería de software?",
            "options": [
                "Son tres nombres diferentes para la misma función matemática de recursión.",
                "DIP es el principio arquitectónico de SOLID, IoC es el concepto general de inversión de control del flujo, y DI es el patrón de diseño concreto que inyecta las dependencias externas.",
                "DI solo se utiliza en backend Java y DIP solo en frontend TypeScript.",
                "IoC es un plugin de ESLint para formatear código."
            ],
            "correctIndex": 1,
            "explanation": "DIP establece la regla de depender de abstracciones; IoC representa el cambio arquitectónico de quién orquesta el flujo; y DI es la técnica práctica de pasar las instancias desde afuera (constructor, props o inyector)."
        }
    },
    {
        "id": "solid-12",
        "title": "¿Cómo se relaciona OCP con patrones de diseño como Strategy y Factory?",
        "level": "avanzado",
        "tags": [
            "DesignPatterns",
            "Strategy",
            "Factory",
            "OCP",
            "Polymorphism"
        ],
        "response": "El Principio Abierto/Cerrado (OCP) encuentra su implementación más elegante y poderosa en la combinación de dos patrones clásicos del Gang of Four (GoF): el **Patrón Strategy** y el **Patrón Factory**:\n\n1. **Patrón Strategy (La Extensión Polimórfica)**:\n- Define una familia de algoritmos o comportamientos intercambiables bajo una misma interfaz (`PaymentStrategy`).\n- Cada algoritmo se encapsula en una clase independiente (`StripeStrategy`, `PayPalStrategy`, `ApplePayStrategy`).\n- Cumple OCP porque el consumidor central (ej. `CheckoutService`) está **cerrado a modificaciones**: solo conoce la interfaz `PaymentStrategy`. Incorporar un nuevo procesador de pagos consiste en escribir una clase nueva que implemente la interfaz, **sin tocar una sola línea del checkout**.\n\n2. **Patrón Factory (El Aislamiento de la Creación)**:\n- Si bien el `CheckoutService` no conoce las clases concretas, en algún lugar del sistema alguien debe instanciar la estrategia correcta a partir de un string o selección del usuario.\n- La **Factory** centraliza esa responsabilidad: mapea un identificador de tipo a la instancia correspondiente mediante un mapa o registro dinámico.\n- Con un registro dinámico (`Map<string, Strategy>`), la Factory también permanece cerrada a modificaciones, permitiendo registrar nuevas estrategias en tiempo de inicio (*plug-and-play*).",
        "codeExample": {
            "language": "typescript",
            "code": "// 1. Contrato de la Estrategia (Abstracción)\nexport interface IPaymentStrategy {\n  processPayment(amount: number): Promise<string>;\n}\n\nexport class StripePaymentStrategy implements IPaymentStrategy {\n  async processPayment(amount: number): Promise<string> {\n    return `Cobro de \\$${amount} procesado vía Stripe Token`;\n  }\n}\n\nexport class CryptoPaymentStrategy implements IPaymentStrategy {\n  async processPayment(amount: number): Promise<string> {\n    return `Cobro de \\$${amount} verificado en blockchain USDT`;\n  }\n}\n\n// 2. Factory con Registro Dinámico O(1) compatible con OCP\nexport class PaymentStrategyFactory {\n  private static registry = new Map<string, IPaymentStrategy>();\n\n  // Registro abierto a extensión sin alterar el core\n  static register(type: string, strategy: IPaymentStrategy): void {\n    this.registry.set(type.toLowerCase(), strategy);\n  }\n\n  static getStrategy(type: string): IPaymentStrategy {\n    const strategy = this.registry.get(type.toLowerCase());\n    if (!strategy) throw new Error(`Estrategia de pago '${type}' no soportada`);\n    return strategy;\n  }\n}\n\n// Inicialización en tiempo de arranque (Plug & Play):\nPaymentStrategyFactory.register('stripe', new StripePaymentStrategy());\nPaymentStrategyFactory.register('crypto', new CryptoPaymentStrategy());\n\n// 3. Cliente Checkout: Cerrado a modificaciones\nexport class CheckoutService {\n  async executeOrder(paymentType: string, total: number) {\n    const strategy = PaymentStrategyFactory.getStrategy(paymentType);\n    return await strategy.processPayment(total);\n  }\n}"
        },
        "visualDiagram": {
            "id": "diag-solid-12",
            "diagramType": "solid-ocp-strategy-factory-pattern",
            "title": "Arquitectura OCP con Strategy y Factory Dinámica",
            "caption": "El cliente checkout no tiene ifs; la Factory resuelve la estrategia y nuevas opciones se registran en Map."
        },
        "interviewTips": {
            "whatInterviewersWant": "Demostrar cómo la combinación de Factory y Strategy elimina por completo las cadenas de `if/else` condicionales y permite construir arquitecturas extensibles mediante plugins.",
            "commonPitfalls": [
                "Escribir una Factory que contiene un switch gigante sin registro dinámico (la Factory violaría OCP cada vez que se agregue un tipo).",
                "Usar Strategy para casos de uso triviales donde solo existe un único algoritmo inmutable."
            ]
        },
        "quiz": {
            "question": "¿Cómo se logra que una Factory de estrategias no viole el OCP al incorporar un nuevo algoritmo?",
            "options": [
                "Reescribiendo la Factory en lenguaje ensamblador.",
                "Utilizando un registro dinámico (como un mapa `Map<string, Strategy>`) donde nuevas estrategias se registran en tiempo de arranque sin modificar el código fuente interno de la Factory.",
                "Haciendo que la Factory sea privada y estática sin ningún método.",
                "Compilando la aplicación dos veces al día."
            ],
            "correctIndex": 1,
            "explanation": "Al usar un diccionario o mapa de registro dinámico, añadir una nueva estrategia no requiere modificar el código interno de la Factory; simplemente se invoca `Factory.register('nuevo', new MiStrategy())` en la configuración de la app."
        }
    },
    {
        "id": "solid-13",
        "title": "¿Cómo evitar el code smell 'God Object / God Component' aplicando SOLID?",
        "level": "avanzado",
        "tags": [
            "GodObject",
            "CodeSmell",
            "Refactoring",
            "SRP",
            "ISP",
            "TechnicalDebt"
        ],
        "response": "El **'God Object'** (o **'God Component'** en frameworks como React, Angular o Vue) es uno de los anti-patrones más destructivos del desarrollo de software: **un componente o clase titánica (de 1,000 a 3,000 líneas) que conoce demasiado, hace de todo y centraliza de manera desmedida el control del sistema**.\n\nSíntomas típicos de un God Component:\n- Docenas de variables de estado (`useState` / propiedades) mezclando UI, validación, sesión y caché.\n- Multiplicidad de peticiones HTTP acopladas directamente en listeners o `useEffect`.\n- Modales, tablas, formularios y gráficas renderizados en un único árbol monstruoso.\n- Miedo colectivo del equipo a tocar el archivo por riesgo a efectos secundarios no controlados.\n\nGuía de Refactorización Sistemática aplicando SOLID:\n1. **Fase 1: Aplicar SRP (Extracción de Cohesión)**:\n- Extraer llamadas de red hacia servicios de API (`apiService.ts`).\n- Extraer orquestación de estado a Custom Hooks cohesivos (`useOrderTable.ts`, `useOrderMetrics.ts`).\n- Fragmentar la vista en componentes pequeños especializados (< 150 líneas).\n2. **Fase 2: Aplicar ISP (Contratos Mínimos)**:\n- Eliminar el paso de entidades masivas; sustituirlas por interfaces mínimas o `Pick` de propiedades.\n3. **Fase 3: Aplicar DIP (Desacoplamiento)**:\n- Inyectar servicios o repositorios a través de Context / Inyección de dependencias para permitir pruebas aisladas.",
        "codeExample": {
            "language": "typescript",
            "code": "/* Plan de refactorización de un God Component:\n *\n * ❌ ANTES: AdminDashboard.tsx (1,800 líneas, 24 useStates, 8 fetches directos)\n *\n * ✅ DESPUÉS: Descomposición Modular SOLID:\n *\n * 1. src/features/admin-dashboard/\n *    ├── api/\n *    │    └── dashboardApi.ts         <-- SRP: Solo llamadas HTTP y DTOs\n *    ├── hooks/\n *    │    ├── useDashboardMetrics.ts  <-- SRP: Solo estado de métricas y caching\n *    │    └── useUserManagement.ts    <-- SRP: Solo paginación y mutaciones de tabla\n *    ├── components/\n *    │    ├── MetricsCardsView.tsx    <-- SRP/ISP: Solo renderiza tarjetas numéricas\n *    │    ├── UserTableList.tsx       <-- SRP/ISP: Solo renderiza filas con props mínimas\n *    │    └── UserDeleteModal.tsx     <-- SRP: Diálogo aislado de confirmación\n *    └── index.tsx                    <-- Orquestador limpio de < 80 líneas\n */\n\nimport React from 'react';\n// Orquestador limpio que compone las piezas desacopladas\nexport const RefactoredAdminDashboard: React.FC = () => {\n  return (\n    <div className=\"dashboard-container p-6 space-y-6\">\n      <header className=\"border-b pb-4\">\n        <h1 className=\"text-2xl font-bold\">Panel de Administración</h1>\n      </header>\n      {/* Cada componente vive en su propio archivo, con tests y tipos propios */}\n      <section aria-label=\"Métricas\">\n        {/* <MetricsCardsView /> */}\n      </section>\n      <section aria-label=\"Gestión de Usuarios\">\n        {/* <UserTableList /> */}\n      </section>\n    </div>\n  );\n};"
        },
        "visualDiagram": {
            "id": "diag-solid-13",
            "diagramType": "solid-god-object-refactoring",
            "title": "Refactorización de un God Component aplicando SOLID",
            "caption": "Archivo monstruo de 1,800 líneas descompuesto en piezas modulares con SRP, ISP y DIP."
        },
        "interviewTips": {
            "whatInterviewersWant": "Demostrar una metodología metódica de refactorización: primero tests de regresión (safety net), luego extracción de capas (API -> Hook -> Componente) sin romper la funcionalidad.",
            "commonPitfalls": [
                "Intentar refactorizar un God Component en un solo commit gigantesco sin tests previos, provocando errores en producción.",
                "Crear 'Mini-God Components' de 800 líneas creyendo que se resolvió el problema."
            ]
        },
        "quiz": {
            "question": "¿Cuál es el primer paso recomendado antes de comenzar a refactorizar un God Component masivo en componentes SOLID más pequeños?",
            "options": [
                "Borrar el archivo completo y reescribirlo desde cero un fin de semana.",
                "Contar con una suite de pruebas de regresión o pruebas end-to-end (E2E) que aseguren que el comportamiento visual y de negocio permanezca idéntico durante la extracción.",
                "Renombrar todas las variables a nombres de una sola letra.",
                "Cambiar de React a Vue inmediatamente."
            ],
            "correctIndex": 1,
            "explanation": "Antes de dividir un componente complejo, se debe contar con una red de seguridad (pruebas de integración o E2E). De lo contrario, no habrá manera de verificar si la separación de responsabilidades introdujo regresiones sutiles."
        }
    },
    {
        "id": "solid-14",
        "title": "¿Cómo implementar DIP en React mediante Context API y Contenedores IoC?",
        "level": "avanzado",
        "tags": [
            "React",
            "DIP",
            "ContextAPI",
            "IoC",
            "Mocking",
            "DependencyInjection"
        ],
        "response": "En aplicaciones React empresariales, componentes que realizan llamadas directas a librerías de infraestructura como `analytics.track()`, `localStorage.getItem()` o clientes Axios fijos violan el Principio de Inversión de Dependencias (DIP).\n\n¿Cómo implementar DIP en React sin librerías externas pesadas?:\n\n1. **Definir el Contrato Abstracto (TypeScript Interface)**:\n- Se declara una interfaz pura independiente del proveedor: `interface IAnalyticsService { trackEvent(name: string, data?: object): void }`.\n\n2. **Crear el Contenedor IoC con React Context**:\n- React Context actúa de forma natural como un **Contenedor de Inversión de Control (IoC Container)** que inyecta dependencias hacia abajo en el árbol de componentes.\n- Se crea un `AnalyticsContext = createContext<IAnalyticsService | null>(null)`.\n\n3. **Inyectar Adaptadores Concretos según el Entorno**:\n- **En Producción**: El `App.tsx` provee `GoogleAnalyticsAdapter` o `MixpanelAdapter`.\n- **En Pruebas Unitarias (Jest / Vitest)**: El test envuelve el componente con un `MockAnalyticsAdapter` que registra llamadas en memoria sin realizar peticiones de red reales.\n- El componente consumidor (`useAnalytics()`) **ignora por completo qué adaptador está corriendo**, logrando desacoplamiento absoluto (DIP).",
        "codeExample": {
            "language": "tsx",
            "code": "import React, { createContext, useContext } from 'react';\n\n// 1. Contrato abstracto (DIP)\nexport interface IAnalyticsGateway {\n  trackEvent(eventName: string, metadata?: Record<string, unknown>): void;\n}\n\n// 2. Contenedor IoC nativo de React\nconst AnalyticsContext = createContext<IAnalyticsGateway | null>(null);\n\nexport const useAnalytics = (): IAnalyticsGateway => {\n  const context = useContext(AnalyticsContext);\n  if (!context) throw new Error('useAnalytics debe usarse dentro de un AnalyticsProvider');\n  return context;\n};\n\n// 3. Adaptador de Producción\nexport class SegmentAnalyticsAdapter implements IAnalyticsGateway {\n  trackEvent(eventName: string, metadata?: Record<string, unknown>): void {\n    console.log(`[Segment CDN] Evento despachado: ${eventName}`, metadata);\n  }\n}\n\n// 4. Adaptador de Pruebas Unitarias\nexport class MockAnalyticsAdapter implements IAnalyticsGateway {\n  public recordedEvents: { name: string; meta?: any }[] = [];\n  trackEvent(eventName: string, metadata?: Record<string, unknown>): void {\n    this.recordedEvents.push({ name: eventName, meta: metadata });\n  }\n}\n\n// 5. Componente consumidor: Cumple DIP (solo conoce la interfaz)\nexport const PurchaseButton: React.FC<{ productId: string }> = ({ productId }) => {\n  const analytics = useAnalytics();\n\n  const handlePurchase = () => {\n    analytics.trackEvent('purchase_completed', { item: productId, timestamp: Date.now() });\n  };\n\n  return (\n    <button onClick={handlePurchase} className=\"bg-emerald-600 text-white p-2 rounded\">\n      Comprar Ahora\n    </button>\n  );\n};"
        },
        "visualDiagram": {
            "id": "diag-solid-14",
            "diagramType": "solid-dip-react-context-ioc",
            "title": "Inversión de Dependencias en React mediante Context API",
            "caption": "El componente depende de la interfaz; React Context inyecta Segment en Prod y Mock en Tests."
        },
        "interviewTips": {
            "whatInterviewersWant": "Demostrar cómo React Context resuelve la inyección de dependencias de forma idiomática sin requerir librerías como InversifyJS o Tsyringe.",
            "commonPitfalls": [
                "Llamar a `window.gtag()` o librerías analíticas globales directamente dentro de los componentes.",
                "Hacer que el Context dependa de la implementación de Google Analytics en lugar de una interfaz genérica."
            ]
        },
        "quiz": {
            "question": "¿Por qué envolver un servicio de analíticas en un React Context e interfaz abstracta cumple con el Principio de Inversión de Dependencias (DIP)?",
            "options": [
                "Porque elimina el tiempo de renderizado de los componentes.",
                "Porque los componentes de UI solo conocen el contrato `IAnalyticsGateway`, permitiendo intercambiar el SDK de analíticas (Mixpanel, GA4, Segment o un Mock de testing) simplemente cambiando el Provider sin tocar los componentes.",
                "Porque React Context cifra el tráfico con certificados SSL nativos.",
                "Porque evita que TypeScript verifique los tipos en tiempo de compilación."
            ],
            "correctIndex": 1,
            "explanation": "El componente depende de la interfaz abstracta provista por el Context. Si el día de mañana la empresa cambia de Mixpanel a Google Analytics, solo se reemplaza el Provider raíz; ningún componente de la app sufre modificaciones."
        }
    },
    {
        "id": "solid-15",
        "title": "¿Cómo se aplica LSP al diseñar componentes polimórficos en un Design System?",
        "level": "avanzado",
        "tags": [
            "LSP",
            "DesignSystem",
            "Polymorphism",
            "Accessibility",
            "TypeScript"
        ],
        "response": "En la ingeniería de **Design Systems**, diseñar componentes polimórficos respetando el Principio de Sustitución de Liskov (LSP) es mandatorio para garantizar que los componentes personalizados puedan sustituir a los elementos nativos de HTML sin romper accesibilidad (a11y), eventos ni contratos de TypeScript.\n\n¿Cómo se viola LSP en un Design System?:\n- Si creas un componente `<CustomButton />` que envuelve un botón nativo pero tu interfaz redefine `onClick` para recibir solo un string en lugar de un `MouseEvent`, rompes el contrato del botón W3C.\n- Si omites propagar las propiedades ARIA (`aria-label`, `role`), referencias de foco (`ref`) o eventos de teclado (`onKeyDown`), tu botón no es un sustituto válido de un `<button>` estándar y causará fallos en tecnologías de asistencia para personas con discapacidad.\n\nSolución Arquitectónica con TypeScript:\n- Extender formalmente los tipos nativos mediante **`ComponentPropsWithRef<'button'>`** o **`ComponentPropsWithoutRef<'button'>`**.\n- Usar `React.forwardRef` para garantizar que la referencia al nodo DOM físico no se pierda.\n- Propagar limpiamente el resto de las propiedades (`...restProps`) hacia el elemento nativo sin alterar sus precondiciones ni postcondiciones.",
        "codeExample": {
            "language": "tsx",
            "code": "import React, { forwardRef, ComponentPropsWithRef } from 'react';\n\n// ✅ Cumplimiento estricto de LSP en Design System:\n// Extiende al 100% el contrato del <button> nativo de HTML\nexport interface PolymorphicButtonProps extends ComponentPropsWithRef<'button'> {\n  variant?: 'solid' | 'outline' | 'danger';\n  isLoading?: boolean;\n}\n\nexport const AccessibleLspButton = forwardRef<HTMLButtonElement, PolymorphicButtonProps>(\n  ({ variant = 'solid', isLoading = false, children, disabled, className = '', ...props }, ref) => {\n    return (\n      <button\n        ref={ref}\n        // Preserva postcondición de disabled y accesibilidad nativa\n        disabled={disabled || isLoading}\n        aria-busy={isLoading}\n        className={`btn btn-${variant} ${className}`}\n        // ✅ LSP: ...props propaga onClick nativo, onFocus, onBlur, aria-*, data-* sin alteración\n        {...props}\n      >\n        {isLoading ? <span className=\"spinner\" aria-hidden=\"true\" /> : children}\n      </button>\n    );\n  }\n);\n\nAccessibleLspButton.displayName = 'AccessibleLspButton';"
        },
        "visualDiagram": {
            "id": "diag-solid-15",
            "diagramType": "solid-lsp-design-system-contracts",
            "title": "Cumplimiento de LSP en Design Systems con Contratos Nativos",
            "caption": "Extender ComponentPropsWithRef<'button'> preserva eventos nativos, refs y a11y sin romper el contrato."
        },
        "interviewTips": {
            "whatInterviewersWant": "Demostrar conocimiento de `ComponentPropsWithRef`, el uso indispensable de `forwardRef` y la preservación de atributos de accesibilidad ARIA para no degradar el contrato de la plataforma.",
            "commonPitfalls": [
                "Capturar eventos nativos en un componente del Design System y cancelar su propagación (`e.stopPropagation()`) por defecto sin justificación.",
                "Olvidar pasar la `ref` con `forwardRef`, rompiendo integraciones con librerías de formularios como React Hook Form."
            ]
        },
        "quiz": {
            "question": "¿Por qué un componente de botón en un Design System de React viola el principio de Liskov (LSP) si no implementa `React.forwardRef` ni propaga `...props`?",
            "options": [
                "Porque la suite de Tailwind CSS no compilará los colores en modo oscuro.",
                "Porque no puede sustituir fielmente a un `<button>` HTML nativo, impidiendo a los consumidores acceder a la referencia DOM para foco y perdiendo eventos estándar de accesibilidad.",
                "Porque los botones en React solo admiten texto plano y no iconos SVG.",
                "Porque obliga al navegador a cargar una fuente tipográfica adicional."
            ],
            "correctIndex": 1,
            "explanation": "Un componente que pretenda ser un botón debe poder reemplazar a un `<button>` nativo en cualquier contexto. Si bloquea el acceso a la `ref` o no acepta eventos estándar (`onFocus`, `onKeyDown`, `aria-*`), rompe la sustituibilidad de Liskov."
        }
    },
    {
        "id": "solid-16",
        "title": "¿Cómo convergen los principios SOLID en Arquitectura Hexagonal (Ports & Adapters) en el Frontend?",
        "level": "experto",
        "tags": [
            "HexagonalArchitecture",
            "PortsAndAdapters",
            "CleanArchitecture",
            "SOLID",
            "DomainLayer"
        ],
        "response": "La **Arquitectura Hexagonal (Puertos y Adaptadores - Ports & Adapters)**, propuesta por Alistair Cockburn, es la culminación arquitectónica donde los cinco principios **SOLID convergen en un diseño de software unificado y simétrico**:\n\nConvergencia de SOLID en el Hexágono:\n1. **El Núcleo Hexagonal (Domain + Application Core)**:\n- **SRP**: Contiene única y exclusivamente las Reglas de Negocio (Entities y Use Cases). No sabe qué es React, Angular, Tailwind, Axios ni LocalStorage.\n- **DIP**: El núcleo define los **Puertos (Ports)**, que son interfaces abstractas de TypeScript (`UserRepositoryPort`, `PaymentGatewayPort`). El núcleo solo depende de sus propios puertos.\n\n2. **Los Adaptadores Primarios (Driving / Inbound Adapters)**:\n- Inician las acciones hacia el sistema: Componentes visuales de React, controladores de formularios o rutas del navegador.\n- Invocan los Casos de Uso del núcleo a través de interfaces estables.\n\n3. **Los Adaptadores Secundarios (Driven / Outbound Adapters)**:\n- Son activados por el núcleo: Clientes HTTP (Axios/Fetch), adaptadores de IndexedDB, WebSocket, Firebase.\n- **OCP & LSP**: Implementan los Puertos definidos por el núcleo. Puedes cambiar el almacenamiento de `LocalStorageAdapter` a `IndexedDbAdapter` sin tocar una sola línea de código del dominio, ya que ambos son sustitutos perfectos que cumplen el mismo puerto.",
        "codeExample": {
            "language": "typescript",
            "code": "// 1. NÚCLEO HEXAGONAL (Core Domain - 0 dependencias externas)\nexport interface TransactionEntity {\n  id: string;\n  amount: number;\n  timestamp: number;\n}\n\n// PUERTO SECUNDARIO (Salida): Definido por el Dominio (DIP/ISP)\nexport interface TransactionRepositoryPort {\n  save(transaction: TransactionEntity): Promise<void>;\n  getHistory(): Promise<TransactionEntity[]>;\n}\n\n// CASO DE USO (SRP): Orquesta la lógica pura de negocio\nexport class TransferFundsUseCase {\n  constructor(private readonly repo: TransactionRepositoryPort) {}\n\n  async execute(amount: number): Promise<TransactionEntity> {\n    if (amount <= 0) throw new Error('El monto debe ser estrictamente positivo');\n    const tx: TransactionEntity = { id: crypto.randomUUID(), amount, timestamp: Date.now() };\n    await this.repo.save(tx);\n    return tx;\n  }\n}\n\n// 2. ADAPTADOR SECUNDARIO (Infraestructura - OCP/LSP)\nexport class LocalStorageTransactionAdapter implements TransactionRepositoryPort {\n  private key = 'tx_ledger';\n  async save(tx: TransactionEntity): Promise<void> {\n    const current = await this.getHistory();\n    localStorage.setItem(this.key, JSON.stringify([...current, tx]));\n  }\n  async getHistory(): Promise<TransactionEntity[]> {\n    return JSON.parse(localStorage.getItem(this.key) || '[]');\n  }\n}"
        },
        "visualDiagram": {
            "id": "diag-solid-16",
            "diagramType": "solid-hexagonal-ports-adapters",
            "title": "Arquitectura Hexagonal (Ports & Adapters) y Principios SOLID",
            "caption": "Núcleo puro en el centro con Puertos abstractos; Adaptadores de UI e Infraestructura en la periferia."
        },
        "interviewTips": {
            "whatInterviewersWant": "Explicar cómo la Arquitectura Hexagonal protege la inversión de código del negocio permitiendo cambiar de framework UI (ej. migrar de React a Svelte) sin reescribir Use Cases ni lógica de dominio.",
            "commonPitfalls": [
                "Permitir que un archivo del dominio (`domain/`) importe `react`, `axios` o `localStorage`.",
                "Definir puertos que exponen tipos específicos de la base de datos o DTOs del servidor en lugar de entidades del dominio."
            ]
        },
        "quiz": {
            "question": "¿Cuál es la función exacta de un 'Puerto' (Port) en una Arquitectura Hexagonal frontend?",
            "options": [
                "Un puerto de red TCP/IP abierto para recibir conexiones WebSocket.",
                "Una interfaz abstracta definida por el núcleo del dominio que establece el contrato que cualquier adaptador externo debe cumplir.",
                "Un conector USB físico en el dispositivo móvil.",
                "Un hook de React exclusivo para componentes de navegación."
            ],
            "correctIndex": 1,
            "explanation": "En Arquitectura Hexagonal, un Puerto es simplemente una interfaz de TypeScript que vive en el Dominio y define qué operaciones necesita el negocio, obligando a los adaptadores externos a implementarla."
        }
    },
    {
        "id": "solid-17",
        "title": "¿Cómo aplicar SOLID en paradigmas de Programación Funcional?",
        "level": "experto",
        "tags": [
            "FunctionalProgramming",
            "SOLID",
            "PureFunctions",
            "Composition",
            "Currying"
        ],
        "response": "Aunque los principios SOLID nacieron históricamente vinculados al paradigma orientado a objetos (OOP), **sus fundamentos matemáticos y conceptuales se traducen de forma idéntica o superior en la Programación Funcional (FP)**:\n\nMapeo de SOLID a Programación Funcional:\n1. **SRP en FP -> Funciones Puras de Propósito Único**:\n- Cada función debe hacer una sola transformación matemática predecible, sin efectos secundarios (*side effects*) y con transparencia referencial.\n2. **OCP en FP -> Higher-Order Functions (HOFs) y Composición (`pipe` / `compose`)**:\n- Una función está cerrada a modificaciones pero abierta a extensión recibiendo funciones transformadoras como argumentos (ej. `Array.prototype.map(fn)` o composición `pipe(validate, sanitize, hash)`).\n3. **LSP en FP -> Tipado Estructural y Compatibilidad de Firmas de Funciones**:\n- Cualquier función que cumpla la firma de tipo `(input: A) => B` puede sustituir transparentemente a otra donde se espere dicha firma.\n4. **ISP en FP -> Currying, Aplicación Parcial y Parámetros Atómicos**:\n- Evitar que las funciones reciban objetos gigantes con decenas de parámetros. Favorecer la descomposición unaria o aridades pequeñas mediante Currying.\n5. **DIP en FP -> Inyección de Dependencias como Argumentos de Función**:\n- En lugar de instanciar servicios con `new`, las dependencias de red o almacenamiento se pasan como argumentos en funciones de orden superior (*Higher-Order Dependency Injection*).",
        "codeExample": {
            "language": "typescript",
            "code": "// 1. SRP: Función pura de una sola tarea\nexport const calculateVat = (rate: number) => (amount: number): number => amount * (1 + rate);\nexport const formatCurrency = (currency: string) => (amount: number): string =>\n  `\\${amount.toFixed(2)} \\${currency}`;\n\n// 2. OCP: Composición extensible con pipe\nexport const pipe = <T>(...fns: Array<(arg: T) => T>) => (initialValue: T): T =>\n  fns.reduce((acc, fn) => fn(acc), initialValue);\n\n// 3. DIP en FP: Inyección de dependencias pasando la función de transporte\nexport type Fetcher<T> = (endpoint: string) => Promise<T>;\n\nexport const createUserDataReader = (fetcher: Fetcher<any>) => async (userId: string) => {\n  // La función de negocio depende de la abstracción inyectada 'fetcher'\n  return await fetcher(`/api/v1/users/\\${userId}`);\n};\n\n// En producción:\nconst liveReader = createUserDataReader(async (url) => (await fetch(url)).json());\n// En testing (cero mocks de bibliotecas, solo pasas una función pura):\nconst testReader = createUserDataReader(async () => ({ id: '123', name: 'Ada Lovelace' }));"
        },
        "visualDiagram": {
            "id": "diag-solid-17",
            "diagramType": "solid-functional-programming-equivalents",
            "title": "Mapeo de SOLID en Programación Funcional",
            "caption": "Funciones puras (SRP), HOFs y Composición (OCP), Tipado de firmas (LSP), Currying (ISP) e Inyección funcional (DIP)."
        },
        "interviewTips": {
            "whatInterviewersWant": "Demostrar versatilidad conceptual explicando que SOLID trata sobre modularidad, límites y acoplamiento, independientemente de si se usa `class` o `const fn = () =>`.",
            "commonPitfalls": [
                "Afirmar erróneamente que SOLID 'no aplica' en JavaScript/TypeScript funcional porque 'no usamos clases'.",
                "Crear cadenas de funciones con efectos secundarios impuros ocultos dentro de clausuras."
            ]
        },
        "quiz": {
            "question": "¿Cómo se materializa el Principio de Inversión de Dependencias (DIP) en Programación Funcional sin utilizar clases ni decoradores?",
            "options": [
                "Creando variables globales en el archivo index.html.",
                "Pasando las funciones de dependencia (como clientes de red o I/O) como argumentos a funciones de orden superior (Higher-Order Functions) o mediante aplicación parcial / currying.",
                "Importando todas las librerías de npm dentro de un bloque try/catch.",
                "Desactivando el tipado de TypeScript en los argumentos."
            ],
            "correctIndex": 1,
            "explanation": "En FP, la inyección de dependencias se logra de forma natural pasando las funciones que realizan el trabajo de infraestructura como parámetros a la función de negocio (Higher-Order Dependency Injection)."
        }
    },
    {
        "id": "solid-18",
        "title": "¿Cómo estructurar el Estado Global (Zustand/Redux) siguiendo principios SOLID?",
        "level": "experto",
        "tags": [
            "Zustand",
            "Redux",
            "StateManagement",
            "SOLID",
            "Slices",
            "Selectors"
        ],
        "response": "En aplicaciones de gran escala, tratar el estado global como un contenedor monolítico gigante introduce severos cuellos de botella y violaciones de arquitectura.\n\nAplicación estricta de SOLID en Zustand y Redux Toolkit:\n\n1. **SRP (Single Responsibility en Slices y Reducers)**:\n- Cada slice del store debe gobernar un único subdominio de negocio (`AuthSlice`, `CartSlice`, `NotificationSlice`).\n- Los reducers deben ser funciones puras cuya única razón de cambio sea la transición lógica de ese estado.\n\n2. **ISP (Interface Segregation con Selectores Atómicos)**:\n- Nunca consumir el estado global completo con `const store = useStore()`. Esto acopla el componente a todo el store y fuerza un re-render cada vez que cualquier propiedad muta.\n- Aplicar selectores atómicos específicos: `const token = useStore(state => state.token)`. El componente solo depende del contrato mínimo que necesita.\n\n3. **DIP (Dependency Inversion en Middlewares de Persistencia y Red)**:\n- Las acciones del store no deben acoplarse directamente a `localStorage` o a llamadas `fetch` de red.\n- Se inyectan adaptadores de almacenamiento (`createJSONStorage(() => sessionStorage)`) y servicios de API desacoplados a través de middlewares o thunks parametrizados.",
        "codeExample": {
            "language": "typescript",
            "code": "import { create, StateCreator } from 'zustand';\n\n// 1. SRP: Definición de Slice de Autenticación\nexport interface AuthSlice {\n  token: string | null;\n  setToken: (token: string | null) => void;\n}\nconst createAuthSlice: StateCreator<AuthSlice> = (set) => ({\n  token: null,\n  setToken: (token) => set({ token }),\n});\n\n// 2. SRP: Definición de Slice de Carrito\nexport interface CartSlice {\n  itemCount: number;\n  addItem: () => void;\n}\nconst createCartSlice: StateCreator<CartSlice> = (set) => ({\n  itemCount: 0,\n  addItem: () => set((s) => ({ itemCount: s.itemCount + 1 })),\n});\n\n// 3. Composición del Store Global\nexport const useBoundStore = create<AuthSlice & CartSlice>()((...a) => ({\n  ...createAuthSlice(...a),\n  ...createCartSlice(...a),\n}));\n\n// 4. ISP: Los componentes consumen solo el selector atómico que necesitan\nexport const CartBadge: React.FC = () => {\n  // Solo se suscribe a itemCount: inmune a cambios en token de sesión\n  const count = useBoundStore((s) => s.itemCount);\n  return <span className=\"badge\">{count}</span>;\n};"
        },
        "visualDiagram": {
            "id": "diag-solid-18",
            "diagramType": "solid-state-management-slices",
            "title": "SOLID en Estado Global: Slices (SRP) y Selectores Atómicos (ISP)",
            "caption": "Slices separados por dominio combinados en un store; selectores atómicos previenen re-renders cruzados."
        },
        "interviewTips": {
            "whatInterviewersWant": "Destacar que en Zustand/Redux la aplicación de ISP se traduce en el uso de selectores atómicos con comparación de igualdad estricta (`useShallow`) para evitar re-renderizados innecesarios.",
            "commonPitfalls": [
                "Destructurar todo el store: `const { user, cart, theme } = useStore();` (destruye la optimización y re-renderiza con cualquier cambio).",
                "Escribir efectos secundarios asíncronos mezclados en el cuerpo de los reducers en lugar de usar middlewares o actions."
            ]
        },
        "quiz": {
            "question": "¿Por qué el uso de selectores atómicos (`useStore(state => state.subProperty)`) en Zustand/Redux es una aplicación directa del Principio de Segregación de Interfaces (ISP)?",
            "options": [
                "Porque comprime las imágenes almacenadas en el estado global.",
                "Porque permite al componente suscribirse y depender únicamente de la pequeña porción de datos que necesita, aislándolo de re-renderizados cuando otras partes del store cambian.",
                "Porque convierte el estado global en una base de datos relacional SQL.",
                "Porque evita tener que definir tipos en TypeScript."
            ],
            "correctIndex": 1,
            "explanation": "ISP estipula que los clientes no deben depender de datos o métodos que no usan. Un selector atómico suscribe al componente exclusivamente a la propiedad requerida, evitando re-renders cuando el resto del estado muta."
        }
    },
    {
        "id": "solid-19",
        "title": "¿Cuáles son los trade-offs de SOLID y cuándo se incurre en Sobre-Ingeniería (Over-Engineering)?",
        "level": "experto",
        "tags": [
            "TradeOffs",
            "OverEngineering",
            "YAGNI",
            "KISS",
            "AccidentalComplexity"
        ],
        "response": "Como cualquier conjunto de herramientas de ingeniería, aplicar los principios SOLID de manera dogmática, ciega o desmedida sin considerar el contexto del proyecto introduce una grave patología técnica: **La Sobre-Ingeniería (Over-Engineering) y la Complejidad Accidental**.\n\nLos Costos Ocultos y Trade-offs de SOLID:\n1. **Indirección Cognitiva y Fragmentación**:\n- Crear 12 archivos, 4 fábricas y 6 interfaces abstractas para resolver una tarea simple (como mostrar un banner que cambiará una vez cada 3 años) multiplica la carga mental del equipo para rastrear el flujo de ejecución.\n2. **Abstracción Prematura (Violación de YAGNI)**:\n- Intentar anticipar extensiones hipotéticas que el negocio nunca solicitará (*'You Aren't Gonna Need It'*).\n3. **Viscosidad del Desarrollo Temprano (Time-to-Market)**:\n- En etapas de prototipado o startups que buscan validar el Product-Market Fit, la velocidad de iteración rápida es más valiosa que una arquitectura hexagonal perfecta.\n\nReglas Pragmáticas para Senior/Staff Architects:\n- **Principio KISS (Keep It Simple, Stupid)**: Comenzar siempre con la solución más simple y directa que funcione.\n- **La Regla de Tres (Rule of Three)**: No crear una abstracción o interfaz hasta que el patrón se duplique por tercera vez en el código real.\n- **Aplicar SOLID donde duele el cambio**: Enfocar la inversión arquitectónica en los módulos centrales que sufren cambios de negocio frecuentes y requieren alta cobertura de pruebas.",
        "codeExample": {
            "language": "typescript",
            "code": "/* Tabla de Decisiones de Arquitectura: ¿Cuándo aplicar SOLID vs KISS? */\nexport interface ArchitectureDecision {\n  context: string;\n  approach: 'KISS / YAGNI Directo' | 'SOLID Formal Estricto';\n  rationale: string;\n}\n\nexport const ARCHITECTURE_GUIDELINES: ArchitectureDecision[] = [\n  {\n    context: 'Prototipo de validación / MVP de 2 semanas',\n    approach: 'KISS / YAGNI Directo',\n    rationale: 'Priorizar velocidad de entrega; el 80% del código se descartará o mutará radicalmente.'\n  },\n  {\n    context: 'Lógica de cálculo de impuestos y checkout bancario',\n    approach: 'SOLID Formal Estricto',\n    rationale: 'Módulo de misión crítica donde un error cuesta dinero; requiere 100% testabilidad y DIP.'\n  },\n  {\n    context: 'Componente visual estático de Footer con enlaces de copyright',\n    approach: 'KISS / YAGNI Directo',\n    rationale: 'No necesita factories, strategies ni interfaces abstractas; una función pura basta.'\n  },\n  {\n    context: 'Sistema de pasarelas de pago con soporte multirregión en continua expansión',\n    approach: 'SOLID Formal Estricto',\n    rationale: 'OCP y Strategy permiten a equipos distribuidos agregar proveedores sin tocar el core.'\n  }\n];"
        },
        "visualDiagram": {
            "id": "diag-solid-19",
            "diagramType": "solid-yagni-kiss-overengineering-tradeoff",
            "title": "Equilibrio Arquitectónico: SOLID vs Sobre-Ingeniería (YAGNI/KISS)",
            "caption": "Abstracción prematura genera complejidad accidental; el balance senior aplica SOLID donde el cambio duele."
        },
        "interviewTips": {
            "whatInterviewersWant": "Demostrar pragmatismo y madurez profesional: saber cuándo decir 'aquí no necesitamos una fábrica ni una interfaz abstracta; una función simple de 15 líneas es superior'.",
            "commonPitfalls": [
                "Responder que 'SOLID debe aplicarse al 100% en todo el código sin excepciones' (demuestra inmadurez dogmática).",
                "Usar SOLID como justificación para retrasar entregas críticas de negocio creando código innecesariamente complejo."
            ]
        },
        "quiz": {
            "question": "¿En qué situación un Staff Architect debería desaconsejar la aplicación estricta de complejas jerarquías polimórficas de OCP y DIP?",
            "options": [
                "Cuando la base de datos se aloja en servidores Linux.",
                "En código desechable de prototipos rápidos (MVP), componentes estáticos triviales o cuando no hay evidencia de que la funcionalidad vaya a variar (Principio YAGNI).",
                "Cuando el equipo de desarrollo supera los 5 integrantes.",
                "Cuando se utiliza TypeScript en modo strict."
            ],
            "correctIndex": 1,
            "explanation": "La sobre-ingeniería introduce indirección y coste de mantenimiento. Aplicar abstracciones pesadas donde no hay variación real ni dolor de cambio viola el principio YAGNI y perjudica al proyecto."
        }
    },
    {
        "id": "solid-20",
        "title": "¿Cómo auditar la adhesión a SOLID de forma automatizada en CI/CD?",
        "level": "experto",
        "tags": [
            "CICD",
            "ArchitectureFitness",
            "DependencyCruiser",
            "ESLint",
            "SonarQube",
            "QualityGates"
        ],
        "response": "Para que los principios de diseño no se queden en intenciones teóricas olvidadas tras las primeras semanas de desarrollo, los equipos de alto rendimiento implementan **Funciones de Aptitud Arquitectónica (Architectural Fitness Functions)** automatizadas en sus pipelines de CI/CD (GitHub Actions, GitLab CI):\n\nHerramientas y Reglas Automatizadas en el Pipeline:\n\n1. **Auditoría de Inversión de Dependencias (DIP) y Límites Modulares**:\n- **`dependency-cruiser` / `eslint-plugin-boundaries`**: Reglas estáticas que impiden que el núcleo del dominio importe módulos de la capa de presentación o infraestructura.\n- **Detección de Dependencias Circulares**: Herramientas como `madge --circular` bloquean el build si dos módulos se importan mutuamente.\n\n2. **Auditoría de Responsabilidad Única (SRP) y Complejidad**:\n- **ESLint Complexity**: Reglas como `complexity: ['error', 10]` limitan la complejidad ciclomática de cualquier función.\n- **`max-lines-per-function` y `max-lines`**: Bloquean la creación de 'God Objects' antes de que el pull request sea aprobado.\n\n3. **Auditoría de Liskov (LSP) con Pruebas de Mutación**:\n- **Stryker Mutator**: Introduce mutaciones automáticas en el código para verificar que la suite de pruebas falle si se debilita un contrato o se altera una postcondición en un subtipo.",
        "codeExample": {
            "language": "typescript",
            "code": "// .dependency-cruiser.js - Gobernanza arquitectónica automatizada en CI\nmodule.exports = {\n  forbidden: [\n    // 1. Prohibir dependencias circulares en todo el proyecto\n    {\n      name: 'no-circular',\n      severity: 'error',\n      comment: 'Las dependencias circulares violan la modularidad y SRP',\n      from: {}, to: { circular: true }\n    },\n    // 2. Proteger la capa de Dominio (DIP): Nunca debe importar UI o Frameworks\n    {\n      name: 'domain-must-not-depend-on-ui',\n      severity: 'error',\n      comment: 'El Dominio es puro y no puede importar React ni capas de presentación',\n      from: { path: '^src/domain' },\n      to: { path: ['^src/components', '^src/views', 'react'] }\n    },\n    // 3. Respetar límites de Features (High Cohesion / Low Coupling)\n    {\n      name: 'no-cross-feature-private-imports',\n      severity: 'error',\n      comment: 'Las features solo pueden comunicarse vía su public API index.ts',\n      from: { path: '^src/features/([^/]+)/' },\n      to: {\n        path: '^src/features/([^/]+)/',\n        pathNot: ['^src/features/$1/', '^src/features/[^/]+/index\\\\.ts$']\n      }\n    }\n  ]\n};"
        },
        "visualDiagram": {
            "id": "diag-solid-20",
            "diagramType": "solid-ci-cd-architectural-fitness-functions",
            "title": "Gobernanza Automatizada en CI/CD con Architectural Fitness Functions",
            "caption": "Dependency-cruiser, ESLint complexity y pruebas de mutación garantizan SOLID en cada commit."
        },
        "interviewTips": {
            "whatInterviewersWant": "Mencionar 'Architectural Fitness Functions', `dependency-cruiser` para prevenir ciclos y violaciones de capas, y pruebas de mutación (Stryker) para blindar contratos.",
            "commonPitfalls": [
                "Confiar exclusivamente en code reviews humanos para detectar violaciones de capas arquitectónicas (los humanos se cansan; los linters de CI son implacables).",
                "Configurar reglas tan severas que paralicen al equipo de desarrollo."
            ]
        },
        "quiz": {
            "question": "¿Qué herramienta de análisis estático se utiliza comúnmente en CI/CD para impedir automáticamente que la capa de Dominio importe módulos de la interfaz visual (cumpliendo DIP)?",
            "options": [
                "Adobe Photoshop CLI.",
                "Dependency-Cruiser o eslint-plugin-boundaries con reglas de límites arquitectónicos configuradas.",
                "El reproductor VLC de vídeo.",
                "Un script de Bash que borra los archivos temporales de Chrome."
            ],
            "correctIndex": 1,
            "explanation": "`dependency-cruiser` y `eslint-plugin-boundaries` analizan el árbol de dependencias estáticas del proyecto en el pipeline de CI/CD y fallan automáticamente el build si un archivo en `src/domain` importa código de `src/presentation` o de librerías visuales como React."
        }
    }
]
};

export default questionsSOLID;
