import { ISection } from "../../types";

export const questionsFlutter: ISection = {
  id: "flutter",
  title: "Flutter",
  collapse: "collapseFlutter",
  icon: "flutter",
  category: "frameworks",
  description:
    "Renderizado nativo acelerado por GPU con Impeller, arquitectura de 3 árboles, gestión de estado con BLoC y Dart AOT.",
  questions: [
    {
        "id": "flutter-01",
        "title": "¿Qué es Flutter y qué lenguaje utiliza?",
        "level": "basico",
        "tags": [
            "Flutter",
            "Dart",
            "Cross-Platform",
            "Skia",
            "Impeller",
            "AOT"
        ],
        "response": "Flutter es un framework de código abierto desarrollado por Google para crear aplicaciones nativas multiplataforma compiladas directamente a código máquina ARM/x86 desde una única base de código para **iOS, Android, Web, Windows, macOS y Linux**.\n\nA diferencia de frameworks basados en WebView (como Ionic) o puentes de abstracción sobre widgets del sistema operativo (como React Native), Flutter adopta una arquitectura similar a un motor de videojuegos: **dibuja cada píxel de la interfaz directamente en la pantalla** mediante su propio motor gráfico acelerado por GPU (**Impeller** en iOS/Android moderno y **Skia** como fallback histórico).\n\nFlutter utiliza exclusivamente el lenguaje **Dart** por tres razones de arquitectura esenciales:\n1. **Compilación Dual (JIT y AOT)**: Durante el desarrollo, Dart se ejecuta en una máquina virtual con compilación **Just-In-Time (JIT)**, lo que permite el *Stateful Hot Reload* en submilisegundos. En producción para release, se compila **Ahead-Of-Time (AOT)** directamente a binario nativo de la CPU, eliminando cualquier intérprete o puente en tiempo de ejecución.\n2. **Garbage Collector Generacional Optimizado**: Dart implementa un recolector de basura de dos generaciones ultra veloz para la asignación y destrucción efímera de objetos inmutables de vida corta (como los Widgets), evitando pausas visibles de recolección a 60 o 120 FPS.\n3. **Tipado Estricto con Sound Null Safety**: Garantiza que los valores nunca puedan ser nulos de manera accidental a menos que se declaren explícitamente (`String?`), eliminando las excepciones de puntero nulo en tiempo de ejecución.",
        "codeExample": {
            "language": "dart",
            "code": "import 'package:flutter/material.dart';\n\n// Función de arranque de la aplicación Flutter\nvoid main() {\n  runApp(const FinancialApp());\n}\n\nclass FinancialApp extends StatelessWidget {\n  const FinancialApp({super.key});\n\n  @override\n  Widget build(BuildContext context) {\n    return MaterialApp(\n      title: 'Banca Corporativa',\n      debugShowCheckedModeBanner: false,\n      theme: ThemeData(\n        useMaterial3: true,\n        colorScheme: ColorScheme.fromSeed(seedColor: Colors.indigo),\n      ),\n      home: const DashboardScreen(),\n    );\n  }\n}\n\nclass DashboardScreen extends StatelessWidget {\n  const DashboardScreen({super.key});\n\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(\n        title: const Text('Resumen de Cuenta'),\n        elevation: 2,\n      ),\n      body: Center(\n        child: Column(\n          mainAxisAlignment: MainAxisAlignment.center,\n          children: [\n            const Text(\n              'Saldo Disponible:',\n              style: TextStyle(fontSize: 18, color: Colors.grey),\n            ),\n            const SizedBox(height: 8),\n            Text(\n              '\\$45,820.00 USD',\n              style: Theme.of(context).textTheme.headlineMedium?.copyWith(\n                fontWeight: FontWeight.bold,\n                color: Colors.indigo,\n              ),\n            ),\n          ],\n        ),\n      ),\n    );\n  }\n}"
        },
        "visualDiagram": {
            "id": "diag-flutter-01",
            "diagramType": "flutter-framework-architecture",
            "title": "Arquitectura en Capas de Flutter: Framework, Engine y Embedder",
            "caption": "Capas desde los widgets en Dart hasta el Embedder nativo y el motor gráfico GPU (Impeller/Skia)."
        },
        "interviewTips": {
            "whatInterviewersWant": "Demostrar que comprendes por qué Flutter eligió Dart (JIT para hot reload vs AOT para release, GC generacional) y cómo su renderizado propio en Canvas GPU lo diferencia de WebViews y bridges nativos.",
            "commonPitfalls": [
                "Creer que Flutter compila los widgets a controles nativos de UIKit o Android Views (Flutter dibuja directamente en un canvas propio).",
                "Ignorar el concepto de Sound Null Safety en Dart moderno (introducido en Dart 2.12+)."
            ]
        },
        "quiz": {
            "question": "¿Por qué Flutter utiliza Dart en lugar de JavaScript o Python como lenguaje de desarrollo?",
            "options": [
                "Porque Dart es el único lenguaje que puede interpretar archivos HTML dentro de un APK.",
                "Por su capacidad de compilación JIT para Hot Reload en desarrollo y AOT a código binario nativo de CPU en producción, sumado a un GC optimizado para crear miles de widgets efímeros.",
                "Porque Dart fue diseñado específicamente por Apple para reemplazar Objective-C en iOS.",
                "Porque Dart no requiere compilación previa y se interpreta como texto plano en el teléfono."
            ],
            "correctIndex": 1,
            "explanation": "Dart proporciona una combinación única: compilación JIT con Hot Reload instantáneo en desarrollo, compilación AOT a código máquina ARM sin puente en producción, y un recolector de basura generacional optimizado para la asignación masiva de widgets."
        }
    },
    {
        "id": "flutter-02",
        "title": "¿Qué es un Widget en Flutter y qué tipos principales existen?",
        "level": "basico",
        "tags": [
            "Widget",
            "StatelessWidget",
            "StatefulWidget",
            "State",
            "Immutable"
        ],
        "response": "En Flutter, **'todo es un Widget'**. Un Widget es la descripción declarativa e **inmutable** de una porción de la interfaz de usuario. No representa un elemento de pantalla vivo ni dibuja píxeles directamente; es simplemente un plano o configuración arquitectónica que Flutter utiliza para construir el árbol de elementos (`Element Tree`) y el árbol de renderizado (`Render Tree`).\n\nLos dos tipos fundamentales de Widgets son:\n\n1. **`StatelessWidget` (Inmutable y sin estado interno mutable)**:\n- Se utiliza cuando la apariencia del widget depende únicamente de la información de configuración que recibe en su constructor o de variables de contexto estáticas.\n- Su ciclo de vida es atómico: sólo implementa el método `Widget build(BuildContext context)`.\n- Al ser inmutable (`@immutable`), todos sus campos de clase deben ser rigurosamente `final`.\n- Es extremadamente ligero: crear y destruir miles de `StatelessWidget` tiene un coste computacional prácticamente nulo.\n\n2. **`StatefulWidget` (Con estado mutable persistente)**:\n- Se utiliza cuando la interfaz debe cambiar dinámicamente durante el tiempo de ejecución en respuesta a interacciones del usuario, respuestas de red o temporizadores.\n- Se divide en **dos clases acopladas**:\n  * La clase `StatefulWidget` (inmutable), que implementa `State createState()`.\n  * La clase `State<T>` (mutable y persistente), que retiene las variables de estado y sobrevive a las reconstrucciones continuas de su widget padre.\n- El método `setState(() { ... })` marca el elemento como 'dirty' en el pipeline de renderizado, notificando a Flutter que debe re-ejecutar el método `build()` en el siguiente frame.",
        "codeExample": {
            "language": "dart",
            "code": "import 'package:flutter/material.dart';\n\n// 1. StatelessWidget: Solo recibe datos por constructor\nclass UserBadge extends StatelessWidget {\n  final String username;\n  final bool isVerified;\n\n  const UserBadge({\n    super.key,\n    required this.username,\n    this.isVerified = false,\n  });\n\n  @override\n  Widget build(BuildContext context) {\n    return Row(\n      mainAxisSize: MainAxisSize.min,\n      children: [\n        Text(username, style: const TextStyle(fontWeight: FontWeight.bold)),\n        if (isVerified) ...[\n          const SizedBox(width: 4),\n          const Icon(Icons.verified, color: Colors.blue, size: 16),\n        ],\n      ],\n    );\n  }\n}\n\n// 2. StatefulWidget: Maneja estado mutable interno\nclass CounterCard extends StatefulWidget {\n  final int initialValue;\n  const CounterCard({super.key, this.initialValue = 0});\n\n  @override\n  State<CounterCard> createState() => _CounterCardState();\n}\n\nclass _CounterCardState extends State<CounterCard> {\n  late int _counter;\n\n  @override\n  void initState() {\n    super.initState();\n    _counter = widget.initialValue;\n  }\n\n  void _increment() {\n    setState(() {\n      _counter++;\n    });\n  }\n\n  @override\n  Widget build(BuildContext context) {\n    return ElevatedButton(\n      onPressed: _increment,\n      child: Text('Clics: $_counter'),\n    );\n  }\n}"
        },
        "visualDiagram": {
            "id": "diag-flutter-02",
            "diagramType": "flutter-stateless-vs-stateful-lifecycle",
            "title": "Comparativa Estructural: StatelessWidget vs StatefulWidget",
            "caption": "StatelessWidget inmutable efímero vs StatefulWidget con objeto State persistente y mutación con setState."
        },
        "interviewTips": {
            "whatInterviewersWant": "Claridad en por qué un StatefulWidget está dividido en dos clases (el Widget inmutable se destruye y recrea continuamente; el State persiste en el Element Tree).",
            "commonPitfalls": [
                "Declarar campos no-final dentro de un StatelessWidget, violando la regla de inmutabilidad.",
                "Llamar a código asíncrono pesado dentro de la clausura de `setState()` en lugar de mutar solo las variables de estado sincrónicamente."
            ]
        },
        "quiz": {
            "question": "¿Por qué un StatefulWidget en Flutter requiere dos clases separadas en su definición?",
            "options": [
                "Porque Dart no permite la herencia simple en clases gráficas.",
                "Porque la clase Widget es inmutable y se destruye en cada reconstrucción, mientras que la clase State persiste en memoria dentro del Element Tree conservando los datos.",
                "Porque una clase se compila para Android y la otra para iOS en tiempo de compilación.",
                "Porque el motor Skia/Impeller exige una clase exclusiva para cada hilo de la CPU."
            ],
            "correctIndex": 1,
            "explanation": "El Widget es una configuración ligera e inmutable que se descarta y recrea constantemente. La clase State permanece viva en el Element Tree para conservar el estado y las suscripciones a lo largo del tiempo."
        }
    },
    {
        "id": "flutter-03",
        "title": "¿Qué diferencia hay entre const y final en Dart?",
        "level": "basico",
        "tags": [
            "const",
            "final",
            "Canonicalization",
            "Compile-Time",
            "Memory"
        ],
        "response": "En Dart, tanto **`final`** como **`const`** se utilizan para definir variables inmutables (que no pueden ser reasignadas una vez inicializadas). Sin embargo, difieren radicalmente en **cuándo se evalúan** y en **cómo se gestionan en memoria**:\n\n1. **`final` (Constante en Tiempo de Ejecución / Runtime)**:\n- El valor se calcula y asigna en **tiempo de ejecución** cuando el código alcanza dicha instrucción.\n- Puede depender de datos que solo se conocen en runtime (como `DateTime.now()`, respuestas HTTP de una API o lecturas de sensores).\n- Cada vez que se crea un objeto instanciado con `final`, se reserva un **nuevo bloque de memoria en el Heap**.\n\n2. **`const` (Constante en Tiempo de Compilación / Compile-Time Canonicalization)**:\n- El valor DEBE ser conocido y computable estrictamente en **tiempo de compilación** (números literales, cadenas fijas, u objetos cuyos constructores y parámetros sean todos `const`).\n- Aplica **Canonicalización de Memoria (Canonical Instances)**: Dart almacena una única instancia del objeto en una tabla de símbolos de solo lectura. Sin importar cuántas veces se invoque `const Text('Atrás')` a lo largo de la aplicación, todas las llamadas apuntarán a la **misma dirección física de memoria**.\n- En Flutter, usar constructores `const` en widgets permite al framework saber que el subárbol nunca cambiará, **omitiendo por completo su reconstrucción** durante los ciclos de build del widget padre.",
        "codeExample": {
            "language": "dart",
            "code": "void main() {\n  // final: Se resuelve en tiempo de ejecución\n  final DateTime runtimeDate = DateTime.now();\n  // const DateTime compileDate = DateTime.now(); // ❌ ERROR: DateTime.now() no es constante de compilación\n\n  // const: Se resuelve en tiempo de compilación con canonicalización\n  const List<int> listA = [1, 2, 3];\n  const List<int> listB = [1, 2, 3];\n\n  // En const, ambas referencias apuntan exactamente al MISMO objeto en memoria\n  print(identical(listA, listB)); // true ✅\n\n  final List<int> listC = [1, 2, 3];\n  final List<int> listD = [1, 2, 3];\n  print(identical(listC, listD)); // false ❌ (dos instancias distintas en Heap)\n}\n\n// Optimización en Flutter con constructores const:\nclass HeavyItem extends StatelessWidget {\n  const HeavyItem({super.key}); // Constructor const\n\n  @override\n  Widget build(BuildContext context) {\n    // Al ser const, Flutter NUNCA volverá a llamar a este build() al hacer setState en el padre\n    return const Padding(\n      padding: EdgeInsets.all(16.0),\n      child: Text('Widget totalmente canonicalizado'),\n    );\n  }\n}"
        },
        "visualDiagram": {
            "id": "diag-flutter-03",
            "diagramType": "flutter-const-vs-final-memory",
            "title": "Gestión de Memoria en Dart: final (Runtime Heap) vs const (Canonicalización)",
            "caption": "final genera instancias individuales en Heap; const reutiliza una única referencia canónica en memoria."
        },
        "interviewTips": {
            "whatInterviewersWant": "Explicar el concepto de 'Canonicalización' y cómo el uso de widgets const previene reconstrucciones innecesarias en el pipeline de renderizado de Flutter.",
            "commonPitfalls": [
                "Creer que `final` y `const` son sinónimos.",
                "Olvidar agregar constructores `const` a widgets personalizados que no dependen de propiedades mutables."
            ]
        },
        "quiz": {
            "question": "¿Qué impacto directo de rendimiento tiene anteponer la palabra clave `const` al instanciar un Widget en Flutter?",
            "options": [
                "Fuerza a que el widget se renderice como un archivo bitmap PNG en disco.",
                "Canonicaliza el widget en memoria, permitiendo que Flutter omita su reconstrucción durante el rebuild del widget padre.",
                "Convierte el widget en un servicio web en segundo plano.",
                "Inhabilita la detección de toques y gestos táctiles del usuario."
            ],
            "correctIndex": 1,
            "explanation": "Al marcar un widget como `const`, Flutter reutiliza la misma instancia canónica en memoria y, al saber que su configuración nunca mutará, omite la re-ejecución de su método `build()` al refrescar el árbol."
        }
    },
    {
        "id": "flutter-04",
        "title": "¿Qué es el BuildContext en Flutter?",
        "level": "basico",
        "tags": [
            "BuildContext",
            "ElementTree",
            "InheritedWidget",
            "Navigator",
            "Theme"
        ],
        "response": "El **`BuildContext`** es uno de los conceptos más fundamentales y frecuentemente malinterpretados en Flutter. Lejos de ser un simple identificador abstracto, **`BuildContext` es una interfaz que representa la ubicación exacta de un Widget dentro del Árbol de Elementos (`Element Tree`)**.\n\nAspectos clave de su funcionamiento arquitectónico:\n1. **Correspondencia 1 a 1 con un Element**:\n- Cada objeto `Element` implementa la interfaz `BuildContext`. Cuando Flutter llama al método `Widget.build(BuildContext context)`, el argumento `context` pasado es literalmente el `Element` correspondiente a ese widget.\n- Por esta razón, el `BuildContext` de un widget padre es diferente al `BuildContext` de sus widgets hijos.\n\n2. **Navegación Ascendente en el Árbol (Lookup de Ancestros)**:\n- `BuildContext` permite a un widget consultar información de sus ancestros mediante llamadas estáticas como `Theme.of(context)`, `MediaQuery.of(context)` o `Navigator.of(context)`.\n- El método recorre el árbol de elementos hacia arriba hasta encontrar el `InheritedElement` más cercano que coincida con el tipo solicitado.\n\n3. **Suscripción Reactiva Automática**:\n- Cuando usas `Theme.of(context)` o `MediaQuery.of(context)`, `BuildContext` suscribe automáticamente el elemento actual a ese `InheritedWidget`. Si el tema o la orientación de pantalla cambian, Flutter sabe exactamente qué widgets deben reconstruirse.",
        "codeExample": {
            "language": "dart",
            "code": "import 'package:flutter/material.dart';\n\nclass ContextTrapDemo extends StatelessWidget {\n  const ContextTrapDemo({super.key});\n\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(title: const Text('BuildContext Demo')),\n      // ⚠️ ERROR CLÁSICO: ScaffoldMessenger.of(context) o Scaffold.of(context)\n      // Si usamos este 'context', el Scaffold actual NO está en sus ancestros (está en el mismo nivel).\n      body: Builder(\n        // El widget Builder provee un nuevo context que es HIJO directo del Scaffold\n        builder: (BuildContext innerContext) {\n          return Center(\n            child: ElevatedButton(\n              onPressed: () {\n                // Consultar dimensiones y tema usando el context interno\n                final isLandscape =\n                    MediaQuery.of(innerContext).orientation == Orientation.landscape;\n                \n                ScaffoldMessenger.of(innerContext).showSnackBar(\n                  SnackBar(\n                    content: Text('Orientación horizontal: $isLandscape'),\n                    backgroundColor: Theme.of(innerContext).colorScheme.primary,\n                  ),\n                );\n              },\n              child: const Text('Mostrar Información de Contexto'),\n            ),\n          );\n        },\n      ),\n    );\n  }\n}"
        },
        "visualDiagram": {
            "id": "diag-flutter-04",
            "diagramType": "flutter-build-context-tree",
            "title": "Búsqueda Ascendente en el Element Tree mediante BuildContext",
            "caption": "El BuildContext localiza el Element y navega hacia arriba buscando InheritedElements (Theme, MediaQuery)."
        },
        "interviewTips": {
            "whatInterviewersWant": "Comprender que BuildContext es literalmente la instancia de Element en el árbol. Explicar el error común de llamar a `Scaffold.of(context)` en el mismo método build que declara el Scaffold y cómo solucionarlo con `Builder`.",
            "commonPitfalls": [
                "Utilizar `BuildContext` a través de un salto asíncrono (`await`) sin verificar antes `if (context.mounted)`.",
                "Creer que todos los widgets de una pantalla comparten la misma instancia de BuildContext."
            ]
        },
        "quiz": {
            "question": "¿Qué representa técnicamente el objeto `BuildContext` pasado al método `build()` de un Widget?",
            "options": [
                "Un puntero al archivo fuente de Dart en el disco duro del desarrollador.",
                "Una instancia de la clase Element que ocupa la posición exacta del Widget dentro del Árbol de Elementos.",
                "Un token de sesión criptográfico para comunicarse con Firebase.",
                "El lienzo gráfico de Skia/Impeller sobre el cual se pintan los píxeles."
            ],
            "correctIndex": 1,
            "explanation": "Cada Element en el Element Tree implementa BuildContext. Es el handle que permite al widget conocer su ubicación jerárquica y consultar ancestros de tipo InheritedWidget."
        }
    },
    {
        "id": "flutter-05",
        "title": "¿Qué es Hot Reload vs Hot Restart en Flutter?",
        "level": "basico",
        "tags": [
            "Hot Reload",
            "Hot Restart",
            "Dart VM",
            "JIT",
            "State Preservation"
        ],
        "response": "La velocidad de iteración de Flutter se apoya en la máquina virtual de Dart en modo JIT y sus dos mecanismos de actualización de código en tiempo de ejecución:\n\n1. **Hot Reload (Recarga en Caliente - Menos de 1 segundo)**:\n- **Mecanismo**: Inyecta únicamente el nuevo código fuente modificado en la máquina virtual de Dart en ejecución.\n- **Preservación de Estado**: La VM actualiza las definiciones de clases y campos y fuerza al framework a reconstruir el árbol de widgets (`build()`), **conservando intacto el estado actual en memoria** (entradas de texto, navegación actual, scroll, contadores).\n- **Limitaciones**: No puede reflejar cambios en la función `main()`, variables estáticas inicializadas previamente, cambios en tipos genéricos o modificaciones en métodos de ciclo de vida iniciales como `initState()`.\n\n2. **Hot Restart (Reinicio en Caliente - 2 a 5 segundos)**:\n- **Mecanismo**: Reinicia completamente la máquina virtual de Dart.\n- **Destrucción de Estado**: **Destruye por completo el estado en memoria de la aplicación** y vuelve a invocar la función `main()`, ejecutando nuevamente todos los `initState()` desde la raíz.\n- **Cuándo es obligatorio**: Al cambiar variables globales, modificar inicializaciones en `main()`, alterar código en `initState()` o modificar esquemas de datos.",
        "codeExample": {
            "language": "dart",
            "code": "import 'package:flutter/material.dart';\n\n// Variable a nivel superior (Top-level)\n// ⚠️ Si cambias este valor, Hot Reload NO lo actualizará; requieres Hot Restart.\nconst String appVersion = 'v2.4.0';\n\nclass ReloadComparisonDemo extends StatefulWidget {\n  const ReloadComparisonDemo({super.key});\n\n  @override\n  State<ReloadComparisonDemo> createState() => _ReloadComparisonDemoState();\n}\n\nclass _ReloadComparisonDemoState extends State<ReloadComparisonDemo> {\n  int _sessionScore = 100;\n\n  @override\n  void initState() {\n    super.initState();\n    // ⚠️ Si cambias este código, Hot Reload NO lo re-ejecuta (el State ya existe).\n    print('initState ejecutado');\n  }\n\n  @override\n  Widget build(BuildContext context) {\n    // ✅ Si cambias el color, el texto o el padding aquí,\n    // Hot Reload actualiza la UI instantáneamente manteniendo _sessionScore intacto.\n    return Scaffold(\n      body: Center(\n        child: Column(\n          mainAxisAlignment: MainAxisAlignment.center,\n          children: [\n            const Text('Versión: $appVersion'),\n            Text('Puntaje: $_sessionScore',\n                style: const TextStyle(fontSize: 24, color: Colors.teal)),\n          ],\n        ),\n      ),\n    );\n  }\n}"
        },
        "visualDiagram": {
            "id": "diag-flutter-01",
            "diagramType": "flutter-hot-reload-vs-restart-vm",
            "title": "Comparativa en la Dart VM: Hot Reload vs Hot Restart",
            "caption": "Hot Reload inyecta cambios de clase conservando el State; Hot Restart reinicia la VM desde main()."
        },
        "interviewTips": {
            "whatInterviewersWant": "Diferenciar con precisión qué preserva cada uno (Hot Reload preserva el State de la VM; Hot Restart lo borra) y qué cambios exigen recompilación completa nativa (código Swift/Kotlin o nuevos plugins en pubspec).",
            "commonPitfalls": [
                "Creer que Hot Reload re-ejecuta `initState()`.",
                "No saber que agregar un nuevo plugin nativo en `pubspec.yaml` requiere detener la app y hacer un `flutter run` completo."
            ]
        },
        "quiz": {
            "question": "¿Por qué un cambio dentro del método `initState()` de un StatefulWidget no surte efecto tras ejecutar un Hot Reload?",
            "options": [
                "Porque `initState()` solo se compila cuando la app se publica en la tienda de aplicaciones.",
                "Porque el objeto State ya fue instanciado previamente en el Element Tree y Hot Reload solo re-ejecuta los métodos `build()`, sin volver a crear el State.",
                "Porque Flutter desactiva la clase State cuando se conecta el debugger por cable.",
                "Porque los cambios en Dart requieren obligatoriamente recompilar el motor de C++."
            ],
            "correctIndex": 1,
            "explanation": "Hot Reload inyecta las nuevas definiciones de funciones y reconstruye los widgets mediante `build()`. Como la instancia del `State` ya existe en el árbol de elementos y no se destruye, `initState()` no vuelve a invocarse."
        }
    },
    {
        "id": "flutter-06",
        "title": "¿Cómo funciona el ciclo de vida de un StatefulWidget?",
        "level": "medio",
        "tags": [
            "Lifecycle",
            "initState",
            "didChangeDependencies",
            "build",
            "dispose"
        ],
        "response": "El ciclo de vida de un **`StatefulWidget`** representa la secuencia rigurosa de estados por los que transita su objeto `State` desde que se inserta en el árbol de elementos hasta que se destruye definitivamente de la memoria.\n\nEtapas canónicas del ciclo de vida:\n1. **`createState()`**: El framework invoca este método para crear la instancia mutable del `State` asociada al widget.\n2. **`initState()`**: Se ejecuta **exactamente una vez** cuando el `State` se inserta en el árbol. Ideal para inicializar controladores (`TextEditingController`, `AnimationController`), suscribirse a streams o programar eventos iniciales. *Restricción*: El `BuildContext` aún no está completamente configurado para buscar `InheritedWidgets`.\n3. **`didChangeDependencies()`**: Se ejecuta inmediatamente después de `initState()` y cada vez que un `InheritedWidget` del cual depende este widget cambia (por ejemplo, cambio de tema oscuro/claro o de locale). Aquí sí es seguro acceder a `Theme.of(context)` o `MediaQuery.of(context)`.\n4. **`build(BuildContext context)`**: Se invoca repetidamente cada vez que el widget necesita repintarse (tras `setState()`, cambios en el widget padre o en `InheritedWidgets`). Debe ser una función pura, rápida y sin efectos secundarios.\n5. **`didUpdateWidget(covariant T oldWidget)`**: Se invoca si el widget padre reconstruye y envía nuevos parámetros de configuración con la misma clave (`key`) y tipo (`runtimeType`). Permite comparar `oldWidget` con `widget` para reaccionar a cambios de props.\n6. **`deactivate()`**: El objeto `State` es retirado temporalmente del árbol (puede reinsertarse antes del fin del frame actual, por ejemplo con `GlobalKey`).\n7. **`dispose()`**: El objeto `State` es **destruido permanentemente**. Es mandatorio cancelar timers, suscripciones de streams y llamar a `.dispose()` en todos los controladores para evitar memory leaks catastróficos.",
        "codeExample": {
            "language": "dart",
            "code": "import 'dart:async';\nimport 'package:flutter/material.dart';\n\nclass RobustLifecycleDemo extends StatefulWidget {\n  final String streamEndpoint;\n  const RobustLifecycleDemo({super.key, required this.streamEndpoint});\n\n  @override\n  State<RobustLifecycleDemo> createState() => _RobustLifecycleDemoState();\n}\n\nclass _RobustLifecycleDemoState extends State<RobustLifecycleDemo> {\n  late TextEditingController _textController;\n  Timer? _pollingTimer;\n\n  @override\n  void initState() {\n    super.initState();\n    _textController = TextEditingController();\n    _pollingTimer = Timer.periodic(const Duration(seconds: 5), (_) {\n      print('Sondeo periódico activo...');\n    });\n  }\n\n  @override\n  void didChangeDependencies() {\n    super.didChangeDependencies();\n    // Seguro para consultar Theme, Locale o MediaQuery\n    final isDark = Theme.of(context).brightness == Brightness.dark;\n    print('Tema oscuro activo: $isDark');\n  }\n\n  @override\n  void didUpdateWidget(covariant RobustLifecycleDemo oldWidget) {\n    super.didUpdateWidget(oldWidget);\n    // Reaccionar si el padre cambió el endpoint\n    if (oldWidget.streamEndpoint != widget.streamEndpoint) {\n      print('Endpoint actualizado de ${oldWidget.streamEndpoint} a ${widget.streamEndpoint}');\n    }\n  }\n\n  @override\n  void dispose() {\n    // Limpieza obligatoria para prevenir pérdidas de memoria\n    _pollingTimer?.cancel();\n    _textController.dispose();\n    super.dispose();\n  }\n\n  @override\n  Widget build(BuildContext context) {\n    return TextField(controller: _textController);\n  }\n}"
        },
        "visualDiagram": {
            "id": "diag-flutter-06",
            "diagramType": "flutter-stateful-widget-lifecycle-flow",
            "title": "Diagrama de Flujo del Ciclo de Vida de StatefulWidget",
            "caption": "createState ➔ initState ➔ didChangeDependencies ➔ build ➔ didUpdateWidget ➔ deactivate ➔ dispose."
        },
        "interviewTips": {
            "whatInterviewersWant": "Dominar el orden exacto de ejecución, saber por qué no se debe llamar a `InheritedWidgets` en `initState()`, y la responsabilidad ineludible de liberar recursos en `dispose()`.",
            "commonPitfalls": [
                "Olvidar llamar a `super.initState()` o `super.dispose()`.",
                "Iniciar suscripciones que nunca se cancelan en `dispose()`, acumulando listeners zombis en memoria."
            ]
        },
        "quiz": {
            "question": "¿En qué método del ciclo de vida de un StatefulWidget es seguro acceder por primera vez a un `InheritedWidget` (como `Theme.of(context)`)?",
            "options": [
                "En el constructor de la clase StatefulWidget.",
                "En didChangeDependencies().",
                "En initState().",
                "En deactivate()."
            ],
            "correctIndex": 1,
            "explanation": "En `initState()`, la relación del Element con sus dependencias aún no está completamente cableada. `didChangeDependencies()` se invoca inmediatamente después y es el primer lugar del ciclo donde es seguro interactuar con `InheritedWidgets`."
        }
    },
    {
        "id": "flutter-07",
        "title": "¿Qué diferencia hay entre Future y Stream en Dart?",
        "level": "medio",
        "tags": [
            "Future",
            "Stream",
            "Async",
            "StreamBuilder",
            "FutureBuilder",
            "Yield"
        ],
        "response": "En Dart, la programación asíncrona se estructura sobre dos primitivas fundamentales: **`Future`** y **`Stream`**:\n\n1. **`Future<T>` (Operación Asíncrona de 1 Solo Valor)**:\n- Representa una computación que entregará un único resultado (`T`) o un error en un momento futuro.\n- Posee dos estados: *Uncompleted* (pendiente) y *Completed* (con valor o error).\n- Se consume de forma síncrona visualmente mediante la sintaxis `async / await` o con el método `.then()`.\n- En Flutter se enlaza con la UI usando el widget **`FutureBuilder<T>`**.\n- Ideal para peticiones HTTP REST individuales, lectura de archivos locales o consulta de geolocalización puntual.\n\n2. **`Stream<T>` (Flujo Continuo de Múltiples Eventos Asíncronos)**:\n- Representa una secuencia continua de eventos temporales (cero, uno o múltiples valores a lo largo del tiempo) hasta que se cierra o emite un error.\n- Se genera mediante generadores asíncronos (`async*` con `yield`) o controladores (`StreamController<T>`).\n- Puede ser de dos tipos:\n  * *Single-Subscription*: Solo permite un único listener (ej. lectura secuencial de un archivo).\n  * *Broadcast*: Permite múltiples listeners simultáneos (ej. eventos de sensores, WebSockets, bus de eventos).\n- En Flutter se enlaza con la UI usando el widget **`StreamBuilder<T>`** o patrones reactivos como BLoC.",
        "codeExample": {
            "language": "dart",
            "code": "import 'dart:async';\nimport 'package:flutter/material.dart';\n\n// 1. Future: Retorna exactamente UN valor\nFuture<String> fetchUserProfile() async {\n  await Future.delayed(const Duration(seconds: 2));\n  return 'Diego Villa (Staff Architect)';\n}\n\n// 2. Stream: Emite MÚLTIPLES valores continuos en el tiempo\nStream<int> stockPriceTicker() async* {\n  int price = 150;\n  while (true) {\n    await Future.delayed(const Duration(seconds: 1));\n    price += (price.isEven ? 2 : -1);\n    yield price; // Emite el nuevo evento por el stream\n  }\n}\n\nclass AsyncWidgetsDemo extends StatelessWidget {\n  const AsyncWidgetsDemo({super.key});\n\n  @override\n  Widget build(BuildContext context) {\n    return Column(\n      children: [\n        // Consumo de Future\n        FutureBuilder<String>(\n          future: fetchUserProfile(),\n          builder: (context, snapshot) {\n            if (snapshot.connectionState == ConnectionState.waiting) {\n              return const CircularProgressIndicator();\n            }\n            return Text('Usuario: ${snapshot.data}');\n          },\n        ),\n        const Divider(),\n        // Consumo de Stream\n        StreamBuilder<int>(\n          stream: stockPriceTicker(),\n          builder: (context, snapshot) {\n            if (!snapshot.hasData) return const Text('Conectando al mercado...');\n            return Text('Precio en vivo: \\$${snapshot.data} USD',\n                style: const TextStyle(fontWeight: FontWeight.bold));\n          },\n        ),\n      ],\n    );\n  }\n}"
        },
        "visualDiagram": {
            "id": "diag-flutter-07",
            "diagramType": "flutter-future-vs-stream-async",
            "title": "Modelos Asíncronos en Dart: Future (1 Evento) vs Stream (Flujo Continuo)",
            "caption": "Future entrega 1 resultado o error; Stream entrega una secuencia infinita o finita de eventos en el tiempo."
        },
        "interviewTips": {
            "whatInterviewersWant": "Demostrar cómo y cuándo utilizar `FutureBuilder` vs `StreamBuilder`, y la diferencia entre un Stream Single-Subscription y un Broadcast Stream.",
            "commonPitfalls": [
                "Crear una nueva instancia del Future dentro del método `build()` en lugar de almacenarlo en una variable del State; esto provoca que la petición HTTP se re-dispare en cada frame.",
                "Olvidar cancelar suscripciones manuales a Streams (`StreamSubscription.cancel()`) en el método `dispose()`."
            ]
        },
        "quiz": {
            "question": "¿Qué grave error de rendimiento ocurre si declaras `future: fetchUserData()` directamente dentro del método `build()` de un FutureBuilder?",
            "options": [
                "El compilador de Dart abortará con una excepción de sintaxis.",
                "Cada vez que el widget padre o el árbol se reconstruya, se creará un nuevo Future y se volverá a ejecutar la petición de red repetidamente.",
                "El FutureBuilder convertirá la conexión en un socket TCP bloqueante.",
                "Flutter eliminará la caché de imágenes de la aplicación."
            ],
            "correctIndex": 1,
            "explanation": "El método `build()` puede ejecutarse hasta 60 o 120 veces por segundo. Si se invoca la función asíncrona dentro del `build()`, cada reconstrucción creará una nueva instancia del Future, disparando peticiones duplicadas sin control."
        }
    },
    {
        "id": "flutter-08",
        "title": "¿Qué son los Keys en Flutter y cuándo son obligatorios?",
        "level": "medio",
        "tags": [
            "Keys",
            "ValueKey",
            "ObjectKey",
            "UniqueKey",
            "GlobalKey",
            "ElementMatching"
        ],
        "response": "En Flutter, un **`Key`** es un identificador asignado a un `Widget` que el framework utiliza para preservar el estado o controlar el emparejamiento entre los widgets del `Widget Tree` y sus instancias vivas en el `Element Tree`.\n\nPor defecto, cuando el árbol de widgets se reconstruye, Flutter decide si un `Element` existente puede reutilizarse evaluando el método estático `Widget.canUpdate(oldWidget, newWidget)`:\n`oldWidget.key == newWidget.key && oldWidget.runtimeType == newWidget.runtimeType`\n\n¿Cuándo son estrictamente obligatorios los Keys?\n1. **Colecciones con Estado que Cambian de Orden o se Eliminan**:\n- Si tienes una lista de widgets con estado (`StatefulWidget`) del mismo tipo (por ejemplo, una lista de tareas con un checkbox interno) y reordenas o eliminas un elemento, Flutter comparará únicamente `runtimeType` (que es idéntico para todos). Sin Keys, **el Element reutilizará el State del elemento anterior**, provocando que el checkbox marcado permanezca en la posición visual original aunque los datos hayan cambiado de orden.\n\nTipos principales de Keys:\n- **`ValueKey<T>`**: Identifica el widget mediante un valor primitivo único (ej. ID de base de datos `ValueKey(user.id)`). Es el más utilizado.\n- **`ObjectKey`**: Identifica el widget mediante la identidad en memoria de un objeto.\n- **`UniqueKey`**: Genera una clave aleatoria garantizada como única en cada ejecución.\n- **`GlobalKey`**: Identificador global único en toda la aplicación. Permite acceder al estado (`currentState`) o render box de un widget desde cualquier parte del árbol o mover un widget entre padres diferentes sin perder su estado (debe usarse con cautela por su alto coste).",
        "codeExample": {
            "language": "dart",
            "code": "import 'package:flutter/material.dart';\n\nclass TodoItem {\n  final String id;\n  final String title;\n  TodoItem(this.id, this.title);\n}\n\nclass ReorderableTodoList extends StatefulWidget {\n  const ReorderableTodoList({super.key});\n\n  @override\n  State<ReorderableTodoList> createState() => _ReorderableTodoListState();\n}\n\nclass _ReorderableTodoListState extends State<ReorderableTodoList> {\n  final List<TodoItem> _items = [\n    TodoItem('task-1', 'Auditar Arquitectura de Estado'),\n    TodoItem('task-2', 'Configurar Shaders Impeller'),\n    TodoItem('task-3', 'Optimizar Memoria en DevTools'),\n  ];\n\n  @override\n  Widget build(BuildContext context) {\n    return ListView.builder(\n      itemCount: _items.length,\n      itemBuilder: (context, index) {\n        final item = _items[index];\n        // ✅ OBLIGATORIO: ValueKey garantiza que el Element Tree asocie\n        // el State correcto al reordenar o eliminar items de la lista.\n        return Dismissible(\n          key: ValueKey(item.id),\n          onDismissed: (_) {\n            setState(() => _items.removeAt(index));\n          },\n          child: ListTile(title: Text(item.title)),\n        );\n      },\n    );\n  }\n}"
        },
        "visualDiagram": {
            "id": "diag-flutter-08",
            "diagramType": "flutter-keys-widget-element-match",
            "title": "Emparejamiento de Árboles con Keys: Widget.canUpdate()",
            "caption": "Sin Key, Element reutiliza el State incorrecto al reordenar; con ValueKey se preserva la identidad exacta."
        },
        "interviewTips": {
            "whatInterviewersWant": "Demostrar que entiendes `Widget.canUpdate` y el famoso caso de estudio de la lista de StatefulWidgets que intercambian posiciones perdiendo o mezclando su estado si no tienen Keys.",
            "commonPitfalls": [
                "Usar `UniqueKey()` directamente dentro del método `build()`, lo que crea una clave nueva en cada frame destruyendo y recreando el estado innecesariamente.",
                "Abusar de `GlobalKey` para comunicación entre componentes en lugar de un gestor de estado (BLoC/Riverpod)."
            ]
        },
        "quiz": {
            "question": "¿Qué problema visual y de estado ocurre al reordenar una lista de StatefulWidgets del mismo tipo si no se asignan Keys explícitas?",
            "options": [
                "La aplicación lanza un error fatal de índice fuera de rango en la GPU.",
                "El Element Tree compara solo el runtimeType idéntico y reutiliza los objetos State en las posiciones antiguas, provocando que los datos internos (como checkboxes marcados) no se muevan con su ítem.",
                "Flutter elimina todos los elementos de la lista permanentemente.",
                "Los widgets se convierten en StatelessWidget automáticamente."
            ],
            "correctIndex": 1,
            "explanation": "Al no haber Keys, `Widget.canUpdate()` solo verifica que el `runtimeType` coincida. Como todos son de la misma clase, Flutter asume que no cambiaron de identidad y reasigna los objetos `State` viejos a los nuevos widgets en su posición de índice."
        }
    },
    {
        "id": "flutter-09",
        "title": "¿Qué es InheritedWidget y cómo funciona Provider/Riverpod sobre él?",
        "level": "medio",
        "tags": [
            "InheritedWidget",
            "Provider",
            "Riverpod",
            "PropDrilling",
            "O(1) Lookup"
        ],
        "response": "En el desarrollo de interfaces jerárquicas, pasar datos manualmente a través de decenas de constructores intermedios (**Prop Drilling**) es un grave anti-patrón de mantenibilidad y rendimiento.\n\n**`InheritedWidget`** es la primitiva arquitectónica de bajo nivel integrada en el núcleo de Flutter que permite **propagar datos hacia abajo en el árbol de widgets de manera eficiente con un coste de búsqueda O(1)**:\n\n1. **Búsqueda O(1) en el Element Tree**:\n- Cada vez que un `InheritedElement` se monta en el árbol, se registra en una tabla hash interna (`Map<Type, InheritedElement>`) que los elementos descendientes heredan.\n- Cuando un widget hijo invoca `context.dependOnInheritedWidgetOfExactType<MyInheritedWidget>()`, la búsqueda no recorre el árbol nodo por nodo; accede a la tabla hash en tiempo constante **O(1)**.\n\n2. **Notificación Granular (`updateShouldNotify`)**:\n- El método `bool updateShouldNotify(covariant MyInheritedWidget oldWidget)` compara los datos nuevos contra los anteriores.\n- Si retorna `true`, Flutter notifica **únicamente a los elementos descendientes que se hayan suscrito formalmente** a ese tipo, omitiendo los nodos intermedios que no consumen la información.\n\n3. **Relación con Provider y Riverpod**:\n- **Provider**: Es un wrapper ergonómico construido directamente sobre `InheritedWidget` que facilita la inyección de dependencias y el enlace con `ChangeNotifier` sin escribir el boilerplate del `InheritedWidget` nativo.\n- **Riverpod**: Es una reimplementación radical del mismo concepto creada por el mismo autor, pero diseñada para **desacoplarse del Widget Tree y del BuildContext**, permitiendo lecturas globales seguras en tiempo de compilación y sin errores de `ProviderNotFoundException`.",
        "codeExample": {
            "language": "dart",
            "code": "import 'package:flutter/material.dart';\n\n// 1. InheritedWidget Nativo de Flutter\nclass AuthSessionScope extends InheritedWidget {\n  final String userToken;\n  final String role;\n\n  const AuthSessionScope({\n    super.key,\n    required this.userToken,\n    required this.role,\n    required super.child,\n  });\n\n  // Método estático convencional de acceso O(1)\n  static AuthSessionScope? of(BuildContext context) {\n    return context.dependOnInheritedWidgetOfExactType<AuthSessionScope>();\n  }\n\n  @override\n  bool updateShouldNotify(covariant AuthSessionScope oldWidget) {\n    // Solo notifica a los suscriptores si el token o el rol cambiaron\n    return oldWidget.userToken != userToken || oldWidget.role != role;\n  }\n}\n\n// 2. Consumo en cualquier nivel profundo sin prop drilling\nclass DeepChildProfile extends StatelessWidget {\n  const DeepChildProfile({super.key});\n\n  @override\n  Widget build(BuildContext context) {\n    final session = AuthSessionScope.of(context);\n    return Text('Rol activo: ${session?.role ?? \"Invitado\"}');\n  }\n}"
        },
        "visualDiagram": {
            "id": "diag-flutter-09",
            "diagramType": "flutter-inherited-widget-propagation",
            "title": "Propagación de Datos y Suscripción O(1) con InheritedWidget",
            "caption": "Suscripción directa O(1) entre el InheritedWidget raíz y el hijo profundo sin prop drilling."
        },
        "interviewTips": {
            "whatInterviewersWant": "Explicar por qué el acceso a InheritedWidget es O(1) en vez de O(N) gracias al mapa de tipos de los Elements, y cómo funciona `updateShouldNotify`.",
            "commonPitfalls": [
                "Confundir `dependOnInheritedWidgetOfExactType` (se suscribe y reconstruye) con `findAncestorWidgetOfExactType` (solo busca el widget sin suscribirse a cambios).",
                "Crear lógica de mutación pesada dentro del `InheritedWidget` (el InheritedWidget debe ser inmutable; la mutación reside en un State o ChangeNotifier externo)."
            ]
        },
        "quiz": {
            "question": "¿Cuál es la complejidad temporal de buscar un InheritedWidget en el árbol mediante `context.dependOnInheritedWidgetOfExactType`?",
            "options": [
                "O(N), donde N es la profundidad del árbol hasta la raíz.",
                "O(1), porque cada Element hereda una tabla hash directa con las referencias de los tipos de InheritedElements ancestros.",
                "O(log N), mediante un árbol binario de balanceo en tiempo de ejecución.",
                "O(N^2), debido a la verificación de tipos reflectiva."
            ],
            "correctIndex": 1,
            "explanation": "Los Elements en Flutter mantienen un mapa indexado por tipo de los `InheritedElement` ancestros disponibles. Por tanto, la resolución es inmediata en tiempo constante O(1)."
        }
    },
    {
        "id": "flutter-10",
        "title": "¿Qué son los Slivers y cuándo utilizarlos?",
        "level": "medio",
        "tags": [
            "Slivers",
            "CustomScrollView",
            "SliverAppBar",
            "SliverList",
            "ScrollPhysics"
        ],
        "response": "En Flutter, un widget de scroll ordinario como `ListView` o `GridView` maneja un único viewport con un protocolo de renderizado de cajas rígido (**Box Protocol**). Cuando una pantalla requiere coordinar múltiples comportamientos de desplazamiento avanzados (un encabezado que colapsa con el dedo, una cuadrícula que continúa inmediatamente en una lista y efectos de snapping elástico), `ListView` se vuelve inviable.\n\nLos **Slivers** son porciones de un área con scroll que implementan el protocolo especializado **Sliver Protocol** (basado en `SliverConstraints` y `SliverGeometry` en lugar de dimensiones de caja estáticas):\n\n1. **Mecanismo de Renderizado Eficiente (Lazy Viewport)**:\n- A diferencia de una caja rígida que calcula ancho y alto fijos, un Sliver calcula solo la porción visible dentro del viewport en función del desplazamiento (`scrollOffset`), reciclando memoria agresivamente.\n\n2. **Orquestación con `CustomScrollView`**:\n- Los Slivers se componen dentro de un contenedor maestro llamado `CustomScrollView(slivers: [ ... ])`.\n\nComponentes Sliver fundamentales:\n- **`SliverAppBar`**: Encabezado adaptable que puede expandirse (`expandedHeight`), flotar (`floating`), anclarse (`pinned`) o colapsar con efecto parallax flexible (`FlexibleSpaceBar`).\n- **`SliverList` / `SliverGrid`**: Listas y cuadrículas virtualizadas que consumen delegados (`SliverChildBuilderDelegate`) para renderizado O(1) de elementos infinitos.\n- **`SliverToBoxAdapter`**: Puente que permite integrar cualquier widget de caja tradicional (como un `Card` o `Container`) dentro de la secuencia de slivers.",
        "codeExample": {
            "language": "dart",
            "code": "import 'package:flutter/material.dart';\n\nclass AdvancedSliverScreen extends StatelessWidget {\n  const AdvancedSliverScreen({super.key});\n\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      body: CustomScrollView(\n        physics: const BouncingScrollPhysics(), // Físicas elásticas estilo iOS\n        slivers: [\n          // 1. SliverAppBar con efecto colapsable pinned\n          SliverAppBar(\n            expandedHeight: 220.0,\n            floating: false,\n            pinned: true,\n            flexibleSpace: FlexibleSpaceBar(\n              title: const Text('Portafolio Global'),\n              background: Container(\n                decoration: const BoxDecoration(\n                  gradient: LinearGradient(colors: [Colors.indigo, Colors.blueAccent]),\n                ),\n              ),\n            ),\n          ),\n          // 2. Adaptador para contenido de caja tradicional\n          SliverToBoxAdapter(\n            child: Padding(\n              padding: const EdgeInsets.all(16.0),\n              child: Text('Activos Financieros (52)',\n                  style: Theme.of(context).textTheme.titleLarge),\n            ),\n          ),\n          // 3. Lista virtualizada eficiente\n          SliverList.builder(\n            itemCount: 50,\n            itemBuilder: (context, index) {\n              return ListTile(\n                leading: CircleAvatar(child: Text('${index + 1}')),\n                title: Text('Bono del Tesoro #${index + 1}'),\n                subtitle: const Text('Rendimiento anual: 5.2%'),\n              );\n            },\n          ),\n        ],\n      ),\n    );\n  }\n}"
        },
        "visualDiagram": {
            "id": "diag-flutter-10",
            "diagramType": "flutter-slivers-custom-scroll-view",
            "title": "Arquitectura de Desplazamiento Coordinado con Slivers",
            "caption": "CustomScrollView orquestando SliverAppBar colapsable, SliverToBoxAdapter y SliverList virtualizado."
        },
        "interviewTips": {
            "whatInterviewersWant": "Explicar la diferencia entre el protocolo de cajas (RenderBox con BoxConstraints) y el protocolo de slivers (RenderSliver con SliverConstraints/SliverGeometry).",
            "commonPitfalls": [
                "Intentar colocar un `ListView` directamente dentro de `CustomScrollView.slivers` sin envolverlo o en lugar de usar `SliverList`.",
                "Olvidar usar `SliverToBoxAdapter` cuando se desea insertar un widget de caja estándar en el arreglo de slivers."
            ]
        },
        "quiz": {
            "question": "¿Qué protocolo geométrico utiliza un Sliver en Flutter a diferencia de un Widget tradicional basado en RenderBox?",
            "options": [
                "Utiliza el modelo Flexbox de CSS3 tradicional.",
                "Recibe `SliverConstraints` (que incluyen scrollOffset, viewport overlap y dirección) y calcula una `SliverGeometry` con el tramo visible a pintar.",
                "Convierte todos los elementos a vectores WebGL antes de calcular el layout.",
                "Exige que todos los elementos hijos tengan una altura fija de 50 píxeles obligatoria."
            ],
            "correctIndex": 1,
            "explanation": "Los Slivers operan con `SliverConstraints` y producen `SliverGeometry`, permitiendo al viewport calcular únicamente el segmento visible que intersecta con la ventana de desplazamiento en tiempo real."
        }
    },
    {
        "id": "flutter-11",
        "title": "¿Cómo interactúan los 3 Árboles en Flutter: Widget Tree, Element Tree y Render Tree?",
        "level": "avanzado",
        "tags": [
            "ThreeTrees",
            "WidgetTree",
            "ElementTree",
            "RenderTree",
            "RenderObject"
        ],
        "response": "Para lograr un rendimiento consistente de 60/120 FPS sin bloqueos, Flutter no manipula directamente la pantalla en cada frame. En su lugar, orquesta **tres árboles conceptuales paralelos y sincronizados**:\n\n1. **`Widget Tree` (El Plano Arquitectónico / Configuración Declarativa)**:\n- Compuesto por objetos `Widget` inmutables y ultraligeros.\n- Su única responsabilidad es **describir cómo debe lucir la UI**.\n- Se destruye, descarta y recrea masivamente en cada llamada a `build()` con un coste de CPU minúsculo.\n\n2. **`Element Tree` (El Director de Obra / Estructura Viva Persistente)**:\n- Compuesto por objetos `Element` que representan la instancia viva del widget en el árbol jerárquico.\n- Retiene el estado mutable (`State`) en memoria y gestiona el ciclo de vida.\n- Cuando un nuevo `Widget` se genera, el `Element` correspondiente evalúa `Widget.canUpdate()`. Si el tipo y la clave coinciden, el `Element` **no se destruye**; simplemente actualiza su puntero al nuevo widget y marca el nodo necesario para layout o pintura.\n\n3. **`Render Tree` (La Cuadrilla de Pintores / Píxeles en GPU)**:\n- Compuesto por objetos `RenderObject` de bajo nivel (`RenderBox`, `RenderParagraph`, `RenderFlex`).\n- Es el árbol más pesado y costoso: se encarga de calcular el diseño físico (`performLayout()`), resolver tamaños intrínsecos, escuchar eventos de interacción táctil (`hitTest()`) y pintar vectores sobre la capa gráfica (`paint()`).\n- Flutter **solo muta las propiedades de un RenderObject si sus dimensiones o estilos cambiaron**, evitando recalcular el layout del 99% de la pantalla.",
        "codeExample": {
            "language": "dart",
            "code": "/* Demostración conceptual de la relación entre los 3 Árboles:\n *\n * 1. WIDGET TREE (Inmutable, declarativo, efímero):\n *    Container(\n *      color: Colors.blue,\n *      child: const Text('Hola Arquitectura'),\n *    )\n *\n * 2. ELEMENT TREE (Persistente, retiene State y ciclo de vida):\n *    ComponentElement (Container)\n *      └── SingleChildRenderObjectElement (DecoratedBox)\n *            └── MultiChildRenderObjectElement (RichText)\n *\n * 3. RENDER TREE (Cálculo de layout, tamaño y pintura en GPU):\n *    RenderDecoratedBox (Dibuja el fondo azul con Paint)\n *      └── RenderParagraph (Calcula glifos de texto y layout en píxeles)\n */\n\nimport 'package:flutter/material.dart';\n\nclass ThreeTreesVerification extends StatelessWidget {\n  const ThreeTreesVerification({super.key});\n\n  @override\n  Widget build(BuildContext context) {\n    // context es el 'Element' actuando como puente entre el Widget y el RenderObject\n    WidgetsBinding.instance.addPostFrameCallback((_) {\n      final RenderBox? renderBox = context.findRenderObject() as RenderBox?;\n      print('Dimensiones físicas calculadas en Render Tree: ${renderBox?.size}');\n    });\n\n    return const SizedBox(width: 200, height: 100);\n  }\n}"
        },
        "visualDiagram": {
            "id": "diag-flutter-11",
            "diagramType": "flutter-three-trees-architecture",
            "title": "Los 3 Árboles de Flutter: Widget Tree, Element Tree y Render Tree",
            "caption": "Widget (plano inmutable) ➔ Element (orquestador persistente) ➔ RenderObject (layout y píxeles en GPU)."
        },
        "interviewTips": {
            "whatInterviewersWant": "Explicar con exactitud el rol de cada árbol. La pregunta clave es: '¿Por qué Flutter puede recrear widgets miles de veces por segundo sin perder rendimiento?' (Porque el Element Tree reutiliza los RenderObjects existentes sin rehacer layout innecesario).",
            "commonPitfalls": [
                "Creer que el Widget Tree es el que se pinta directamente en la pantalla.",
                "Pensar que al recrear un Widget se destruye su RenderObject asociado."
            ]
        },
        "quiz": {
            "question": "¿Cuál de los tres árboles en la arquitectura de Flutter es responsable de ejecutar el algoritmo de layout (dimensionamiento) y pintar los píxeles en el canvas gráfico?",
            "options": [
                "El Widget Tree.",
                "El Element Tree.",
                "El Render Tree (compuesto por RenderObjects).",
                "El V8 Bytecode Tree."
            ],
            "correctIndex": 2,
            "explanation": "El Render Tree está compuesto por instancias de `RenderObject` que calculan el tamaño exacto (`performLayout()`), gestionan los toques y pintan los gráficos sobre las capas rasterizadas de la GPU."
        }
    },
    {
        "id": "flutter-12",
        "title": "¿Qué es el nuevo motor de renderizado Impeller vs Skia?",
        "level": "avanzado",
        "tags": [
            "Impeller",
            "Skia",
            "Shaders",
            "Jank",
            "Vulkan",
            "Metal"
        ],
        "response": "Históricamente, Flutter utilizó **Skia** (el mismo motor 2D de Google Chrome y Android) para rasterizar gráficos. Aunque maduro y versátil, Skia adolece de una limitación intrínseca en aplicaciones móviles modernas: **el problema del Shader Compilation Jank** (micro-tirones y caída abrupta de frames).\n\nEl problema con Skia (Shader Compilation Jank):\n- Cuando una app Flutter muestra una animación o efecto gráfico por primera vez en Skia, el motor debe compilar los **shaders de GPU en tiempo de ejecución (JIT)** en el hilo de renderizado.\n- Esa compilación en runtime puede tardar de 50ms a varios cientos de milisegundos, superando ampliamente el presupuesto de 16.6ms por frame y provocando un parón visible en la pantalla.\n\nLa solución revolucionaria: **Impeller**:\n- **Impeller** es el motor de renderizado gráfico de nueva generación desarrollado por Google específicamente para Flutter (activo por defecto en iOS desde Flutter 3.10 y en Android progresivamente en versiones 3.16+).\n- **Precompilación AOT de Shaders**: Todos los shaders se compilan **en tiempo de compilación de la aplicación (Build Time)** en código binario específico para las GPUs de destino.\n- **Aprovechamiento de APIs Modernas de Hardware**: Utiliza directamente **Metal** en iOS/macOS y **Vulkan** en Android, omitiendo capas de abstracción heredadas de OpenGL.\n- **Arquitectura Tesselation y Caching Agresivo**: Optimiza la teselación de curvas vectoriales para lograr trazados impecables con un uso de CPU y memoria predecible a 60 FPS y 120 FPS constantes.",
        "codeExample": {
            "language": "dart",
            "code": "/* Tabla comparativa de Arquitectura de Renderizado Gráfico */\nclass GraphicEngineBenchmark {\n  final String engineName;\n  final String shaderStrategy;\n  final String primaryApi;\n  final String jankProfile;\n\n  const GraphicEngineBenchmark({\n    required this.engineName,\n    required this.shaderStrategy,\n    required this.primaryApi,\n    required this.jankProfile,\n  });\n}\n\nconst List<GraphicEngineBenchmark> COMPARISON = [\n  GraphicEngineBenchmark(\n    engineName: 'Skia (Legacy)',\n    shaderStrategy: 'JIT (Compila shaders en tiempo de ejecución al interactuar)',\n    primaryApi: 'OpenGL ES / Metal abstraction layer',\n    jankProfile: 'Propenso a caídas de frame (jank) en la primera aparición de animaciones',\n  ),\n  GraphicEngineBenchmark(\n    engineName: 'Impeller (Next-Gen)',\n    shaderStrategy: 'AOT (Precompila todos los shaders durante flutter build)',\n    primaryApi: 'Metal nativo (iOS) / Vulkan nativo (Android)',\n    jankProfile: 'Cero shader jank: frames fluidos estables a 60 y 120 FPS',\n  ),\n];"
        },
        "visualDiagram": {
            "id": "diag-flutter-12",
            "diagramType": "flutter-impeller-vs-skia-pipeline",
            "title": "Pipeline Gráfico: Impeller (AOT Precompiled) vs Skia (JIT Compilation)",
            "caption": "Impeller precompila shaders en tiempo de build eliminando el shader jank en Metal y Vulkan."
        },
        "interviewTips": {
            "whatInterviewersWant": "Explicar claramente qué es el 'Shader Compilation Jank' y por qué la precompilación AOT en Impeller resuelve el mayor problema histórico de fluidez en Flutter.",
            "commonPitfalls": [
                "Creer que Impeller es un nuevo lenguaje de programación (es un motor de renderizado gráfico en C++ que sustituye a Skia).",
                "Desconocer que Impeller opera sobre Metal en iOS y Vulkan en Android."
            ]
        },
        "quiz": {
            "question": "¿Cuál es la causa principal del 'Shader Compilation Jank' que el motor Impeller erradica por completo en Flutter?",
            "options": [
                "La lentitud de la red móvil 4G al descargar fuentes de texto.",
                "La necesidad de compilar shaders de GPU en tiempo de ejecución durante el renderizado del frame en Skia, superando el límite de 16.6 milisegundos.",
                "El uso de Widgets StatelessWidget en lugar de StatefulWidget.",
                "La falta de memoria swap en los emuladores de Android."
            ],
            "correctIndex": 1,
            "explanation": "Skia compilaba los shaders en runtime en el momento exacto en que aparecía una animación nueva. Al tomar decenas de milisegundos, el hilo de renderizado perdía el frame budget. Impeller precompila todos los shaders AOT en build time, garantizando 0 jank."
        }
    },
    {
        "id": "flutter-13",
        "title": "¿Cómo funciona la Arquitectura BLoC (Business Logic Component)?",
        "level": "avanzado",
        "tags": [
            "BLoC",
            "Cubit",
            "Streams",
            "Events",
            "States",
            "CleanArchitecture"
        ],
        "response": "El patrón **BLoC (Business Logic Component)**, ideado por ingenieros de Google, es el estándar de arquitectura empresarial más robusto y testeable para la gestión de estado en aplicaciones Flutter de escala media y masiva.\n\nPrincipios arquitectónicos de BLoC:\n1. **Separación Radical de Responsabilidades**:\n- La capa visual (**UI**) es completamente 'tonta': no contiene lógica de negocio, cálculos de datos ni peticiones de red.\n- La lógica reside exclusivamente dentro del **BLoC**, desacoplado del framework de widgets de Flutter.\n\n2. **Flujo de Datos Unidireccional Reactivo (Unidirectional Data Flow)**:\n- **Entrada**: La UI envía **Eventos** (`Events`) inmutables al BLoC (ej. `LoginSubmitted(email, pass)`).\n- **Procesamiento**: El BLoC escucha los eventos mediante handlers `on<Event>((event, emit) async { ... })`, coordina casos de uso con repositorios y procesa la lógica.\n- **Salida**: El BLoC emite **Estados** (`States`) inmutables a través de un Stream (ej. `AuthLoadingState` -> `AuthSuccessState`).\n- La UI consume estos estados con widgets especializados como `BlocBuilder` (reconstruye UI) o `BlocListener` (ejecuta efectos secundarios como snackbars o navegación).\n\n3. **Cubit vs BLoC**:\n- **Cubit**: Una versión simplificada que elimina los eventos y los reemplaza por funciones directas (`cubit.increment()`), emitiendo estados. Ideal para estados locales sencillos.\n- **BLoC Completo**: Obligatorio cuando se requiere trazabilidad estricta de eventos, debounce/throttle de búsquedas reactivas con RxDart o auditoría de acciones del usuario.",
        "codeExample": {
            "language": "dart",
            "code": "import 'package:flutter_bloc/flutter_bloc.dart';\n\n// 1. EVENTOS (Entradas inmutables)\nabstract class AuthEvent {}\nclass LoginRequested extends AuthEvent {\n  final String email;\n  final String password;\n  LoginRequested(this.email, this.password);\n}\n\n// 2. ESTADOS (Salidas inmutables)\nabstract class AuthState {}\nclass AuthInitial extends AuthState {}\nclass AuthLoading extends AuthState {}\nclass AuthSuccess extends AuthState {\n  final String userId;\n  AuthSuccess(this.userId);\n}\nclass AuthFailure extends AuthState {\n  final String error;\n  AuthFailure(this.error);\n}\n\n// 3. BLOC (Lógica de Negocio y Transformación)\nclass AuthBloc extends Bloc<AuthEvent, AuthState> {\n  AuthBloc() : super(AuthInitial()) {\n    // Registro reactivo de eventos\n    on<LoginRequested>((event, emit) async {\n      emit(AuthLoading());\n      try {\n        // Simular llamada asíncrona a repositorio\n        await Future.delayed(const Duration(seconds: 1));\n        if (event.email.contains('@')) {\n          emit(AuthSuccess('user-9912'));\n        } else {\n          emit(AuthFailure('Formato de correo inválido'));\n        }\n      } catch (e) {\n        emit(AuthFailure(e.toString()));\n      }\n    });\n  }\n}"
        },
        "visualDiagram": {
            "id": "diag-flutter-13",
            "diagramType": "flutter-bloc-event-state-stream",
            "title": "Flujo Unidireccional de Datos en la Arquitectura BLoC",
            "caption": "UI dispara Eventos hacia el BLoC; BLoC procesa lógica asíncrona y emite Estados hacia BlocBuilder."
        },
        "interviewTips": {
            "whatInterviewersWant": "Demostrar comprensión del flujo unidireccional (Event -> BLoC -> State), saber cuándo usar `BlocBuilder` vs `BlocListener` vs `BlocConsumer`, y la diferencia entre Cubit y BLoC.",
            "commonPitfalls": [
                "Llamar a `Navigator.push()` dentro del método builder de `BlocBuilder` (las acciones de navegación deben ir en un `BlocListener`).",
                "Emitir el mismo objeto de estado mutado sin crear una nueva instancia (Equatable o freeze es vital para que BLoC detecte el cambio de estado)."
            ]
        },
        "quiz": {
            "question": "¿Cuál es la diferencia fundamental de uso entre `BlocBuilder` y `BlocListener` en Flutter Bloc?",
            "options": [
                "BlocBuilder solo funciona con Cubits y BlocListener solo con Streams.",
                "BlocBuilder debe ser una función pura que devuelve widgets según el estado; BlocListener se utiliza exclusivamente para disparar efectos secundarios (navegación, SnackBars, diálogos) una sola vez por cambio de estado.",
                "BlocListener compila el código a JavaScript para la web.",
                "No hay diferencia, son alias intercambiables."
            ],
            "correctIndex": 1,
            "explanation": "`BlocBuilder` se ejecuta en cada frame para retornar el árbol visual correspondiente al estado. `BlocListener` tiene un callback `listener` diseñado para ejecutar efectos secundarios una sola vez (como mostrar un SnackBar o hacer `Navigator.push`)."
        }
    },
    {
        "id": "flutter-14",
        "title": "¿Qué es un CustomPainter y cómo funciona el Canvas en Flutter?",
        "level": "avanzado",
        "tags": [
            "CustomPainter",
            "Canvas",
            "Paint",
            "GPU",
            "VectorGraphics",
            "CustomPaint"
        ],
        "response": "Cuando los widgets preconstruidos de Flutter (como `Container`, `Card` o `Icons`) no son suficientes para crear interfaces altamente especializadas (como gráficas interactivas financieras, diagramas circulares, efectos de ondas de audio o animaciones vectoriales procedurales), Flutter expone su motor gráfico de bajo nivel mediante la API **`CustomPainter`** y **`Canvas`**.\n\nArquitectura de dibujo con CustomPainter:\n1. **El Widget `CustomPaint`**:\n- Actúa como puente dentro del árbol de widgets. Recibe una instancia de una clase que hereda de `CustomPainter` (`painter`) y define las dimensiones físicas en el layout (`size`).\n\n2. **La Clase `CustomPainter` y sus dos métodos clave**:\n- **`void paint(Canvas canvas, Size size)`**:\n  * Provee acceso directo al objeto **`Canvas`** del motor gráfico.\n  * Permite dibujar geometrías puras: `drawCircle`, `drawRect`, `drawLine`, `drawRRect` o trazados bezier complejos con `drawPath`.\n  * Utiliza objetos **`Paint`** para configurar el color, modo de mezcla (blend mode), shader de gradiente, grosor de trazo (`strokeWidth`) y estilo (`PaintingStyle.stroke` vs `PaintingStyle.fill`).\n- **`bool shouldRepaint(covariant CustomPainter oldDelegate)`**:\n  * Controla la optimización de repintado: compara los parámetros del pintor nuevo contra el anterior.\n  * Si retorna `false`, Flutter reutiliza el búfer de dibujo anterior en memoria **sin gastar ciclos de GPU ni CPU** en volver a pintar las líneas.",
        "codeExample": {
            "language": "dart",
            "code": "import 'package:flutter/material.dart';\n\n// Pintor de gráfica de onda procedural acelerada por GPU\nclass WaveChartPainter extends CustomPainter {\n  final double progress;\n  final Color waveColor;\n\n  const WaveChartPainter({required this.progress, required this.waveColor});\n\n  @override\n  void paint(Canvas canvas, Size size) {\n    // 1. Configurar pincel de trazado\n    final paint = Paint()\n      ..color = waveColor\n      ..style = PaintingStyle.stroke\n      ..strokeWidth = 3.5\n      ..strokeCap = StrokeCap.round;\n\n    // 2. Definir trazado Bezier fluido\n    final path = Path();\n    path.moveTo(0, size.height * 0.7);\n    path.quadraticBezierTo(\n      size.width * 0.35,\n      size.height * 0.2 * progress,\n      size.width * 0.65,\n      size.height * 0.6,\n    );\n    path.quadraticBezierTo(\n      size.width * 0.85,\n      size.height * 0.9,\n      size.width,\n      size.height * 0.3,\n    );\n\n    // 3. Pintar en el lienzo de hardware\n    canvas.drawPath(path, paint);\n  }\n\n  @override\n  bool shouldRepaint(covariant WaveChartPainter oldDelegate) {\n    // Solo repinta si el progreso o el color cambiaron\n    return oldDelegate.progress != progress || oldDelegate.waveColor != waveColor;\n  }\n}"
        },
        "visualDiagram": {
            "id": "diag-flutter-14",
            "diagramType": "flutter-custom-painter-canvas",
            "title": "Arquitectura de Pintura Gráfica con CustomPaint y Canvas",
            "caption": "CustomPaint provee el viewport; CustomPainter define paint() y shouldRepaint() directo a GPU."
        },
        "interviewTips": {
            "whatInterviewersWant": "Demostrar dominio de la API de Canvas, la responsabilidad de optimización con `shouldRepaint()` y saber cómo evitar asignaciones de objetos pesadas (como crear instancias de `Paint` en cada frame dentro de `paint()`).",
            "commonPitfalls": [
                "Retornar siempre `true` en `shouldRepaint()`, saturando la GPU con repintados innecesarios a 60 FPS.",
                "Instanciar objetos `Paint` o `Path` complejos dentro de `paint()` en cada frame en lugar de reciclarlos o cachearlos."
            ]
        },
        "quiz": {
            "question": "¿Qué optimización crítica debe implementarse en una clase `CustomPainter` para evitar caídas de frames durante animaciones frecuentes?",
            "options": [
                "Compilar los trazados en archivos SVG temporales en el disco flash del teléfono.",
                "Implementar correctamente `shouldRepaint()` comparando propiedades para retornar `false` si los datos no cambiaron, y reutilizar instancias de Paint fuera del método de dibujo.",
                "Convertir el widget CustomPaint en un StatefulWidget con 50 microtareas síncronas.",
                "Dibujar exclusivamente cuadrados y no utilizar curvas de Bezier."
            ],
            "correctIndex": 1,
            "explanation": "Retornar `false` en `shouldRepaint()` permite a Flutter conservar la capa rasterizada sin ejecutar el pipeline de dibujo. Asimismo, evitar instanciar nuevos objetos `Paint` dentro de `paint()` previene la presión sobre el recolector de basura."
        }
    },
    {
        "id": "flutter-15",
        "title": "¿Qué son los Isolates en Dart y cómo difieren del Event Loop?",
        "level": "avanzado",
        "tags": [
            "Isolates",
            "EventLoop",
            "Multithreading",
            "compute",
            "SendPort",
            "ReceivePort"
        ],
        "response": "Por defecto, las aplicaciones Dart y Flutter se ejecutan en un **modelo de concurrencia basado en un único hilo (Single-Threaded Event Loop)**:\n\n- El **Event Loop** procesa dos colas continuas en el hilo principal: la **Microtask Queue** (alta prioridad) y la **Event Queue** (eventos de toques, temporizadores, I/O de red).\n- Una llamada asíncrona con `Future` o `async/await` **NO crea un nuevo hilo de ejecución**; simplemente cede el turno en el Event Loop hasta que una operación externa de red o disco se completa.\n- Si ejecutas una tarea computacionalmente intensiva en el hilo principal (como descomprimir un archivo zip de 200MB, analizar un JSON de 50MB o cifrar datos pesados), **el Event Loop se congela**, la UI deja de responder y los frames caen a 0 (la app parece bloqueada).\n\nPara computación intensiva en paralelo real existen los **`Isolates`**:\n\n1. **Memoria Aislada (Zero-Shared Memory Architecture)**:\n- A diferencia de los hilos tradicionales en Java o C++ que comparten el mismo espacio de memoria (requiriendo locks y mutexes propensos a deadlocks y race conditions), cada `Isolate` posee **su propio espacio de memoria (Heap privado)** y su propio Event Loop independiente.\n\n2. **Comunicación por Paso de Mensajes**:\n- Dos Isolates no pueden leer las variables del otro. Solo se comunican intercambiando mensajes asíncronos a través de **`SendPort`** y **`ReceivePort`**.\n\n3. **Función de Alto Nivel `Isolate.run()` / `compute()`**:\n- En Flutter moderno, para tareas puntuales se utiliza `Isolate.run<T>(() => heavyTask())`, que genera un Isolate efímero en un núcleo secundario de la CPU, ejecuta la computación, devuelve el resultado al hilo principal y destruye el Isolate automáticamente sin bloquear la pantalla.",
        "codeExample": {
            "language": "dart",
            "code": "import 'dart:convert';\nimport 'dart:isolate';\nimport 'package:flutter/foundation.dart';\n\n// Función estática o de nivel superior para parseo pesado\nList<Map<String, dynamic>> parseGiantJson(String jsonString) {\n  final decoded = jsonDecode(jsonString) as List<dynamic>;\n  return decoded.map((e) => e as Map<String, dynamic>).toList();\n}\n\nclass IsolateProcessorService {\n  // 1. Uso moderno con Isolate.run (Dart 2.19+)\n  static Future<List<Map<String, dynamic>>> processInParallel(String rawData) async {\n    // Se ejecuta en un worker thread real sin compartir memoria\n    return await Isolate.run<List<Map<String, dynamic>>>(() {\n      return parseGiantJson(rawData);\n    });\n  }\n\n  // 2. Uso con compute() en Flutter\n  static Future<List<Map<String, dynamic>>> processWithCompute(String rawData) async {\n    return await compute(parseGiantJson, rawData);\n  }\n}"
        },
        "visualDiagram": {
            "id": "diag-flutter-15",
            "diagramType": "flutter-isolates-vs-event-loop",
            "title": "Arquitectura de Concurrencia: Event Loop (Main Isolate) vs Worker Isolate",
            "caption": "Main Isolate maneja la UI con su Event Loop; Worker Isolate ejecuta cálculo pesado en Heap aislado."
        },
        "interviewTips": {
            "whatInterviewersWant": "Aclarar que `async/await` en Dart no crea hilos secundarios y explicar por qué los Isolates de Dart no tienen condiciones de carrera (por carecer de memoria compartida).",
            "commonPitfalls": [
                "Creer que un `Future` previene que un bucle `for` de 10 millones de iteraciones congele la interfaz de usuario (el bucle bloquea el Main Thread; se debe usar un Isolate).",
                "Intentar pasar objetos con referencias a widgets o `BuildContext` a través de un `SendPort` (los Isolates solo pueden intercambiar tipos de datos primitivos o transferibles)."
            ]
        },
        "quiz": {
            "question": "¿Por qué dos Isolates en Dart son inmunes a las condiciones de carrera (Race Conditions) y bloqueos mutuos (Deadlocks) comunes en hilos de Java o C++?",
            "options": [
                "Porque Dart deshabilita el acceso multinúcleo en el procesador del teléfono.",
                "Porque cada Isolate posee su propio espacio de memoria (Heap privado) totalmente aislado y se comunican únicamente mediante paso de mensajes serializados.",
                "Porque el motor gráfico Skia pausa los cálculos cada 5 milisegundos.",
                "Porque todos los programas de Dart se ejecutan dentro de una sola corrutina síncrona."
            ],
            "correctIndex": 1,
            "explanation": "En Dart, los Isolates no comparten memoria física; cada uno tiene su propio Heap y recolector de basura. Al no haber variables compartidas accesibles simultáneamente, es imposible que ocurran condiciones de carrera de memoria."
        }
    },
    {
        "id": "flutter-16",
        "title": "¿Cómo funciona la comunicación con código nativo mediante Platform Channels y FFI?",
        "level": "experto",
        "tags": [
            "PlatformChannels",
            "MethodChannel",
            "DartFFI",
            "Swift",
            "Kotlin",
            "C++"
        ],
        "response": "Para interactuar con APIs propietarias del sistema operativo (iOS/Android) o bibliotecas nativas de C/C++/Rust de alto rendimiento, Flutter ofrece dos mecanismos arquitectónicos complementarios:\n\n1. **Platform Channels (Puente Asíncrono de Mensajería Binaria)**:\n- Funciona mediante el paso asíncrono de mensajes serializados a través del **`BinaryMessenger`** del Flutter Engine.\n- **`MethodChannel`**: Permite invocar métodos nominales en código nativo (Swift/Objective-C en iOS, Kotlin/Java en Android) y recibir respuestas asíncronas.\n- **`EventChannel`**: Expone un stream de eventos continuos desde el host nativo hacia Dart (ideal para sensores como giroscopio, acelerómetro o estado de batería).\n- Los argumentos se codifican automáticamente en formato binario mediante **`StandardMessageCodec`**.\n\n2. **Dart FFI (Foreign Function Interface - Acceso Directo de Cero Copia)**:\n- Cuando se requiere rendimiento extremo (ej. modelos de machine learning con TensorFlow C API, decodificación de audio/video o criptografía), Platform Channels introduce la sobrecarga de serialización.\n- **Dart FFI** permite a Dart interactuar **directamente con bibliotecas dinámicas compartidas de C (`.so`, `.dylib`, `.dll`) en el mismo espacio de memoria sin serialización ni cambio de hilo de ejecución**, utilizando punteros nativos de memoria de bajísima latencia.",
        "codeExample": {
            "language": "dart",
            "code": "import 'package:flutter/services.dart';\n\nclass BatteryNativeBridge {\n  // Canal de métodos con identificador único de namespace\n  static const MethodChannel _channel = MethodChannel('com.empresa.app/battery');\n  static const EventChannel _eventChannel = EventChannel('com.empresa.app/charging_stream');\n\n  // 1. Invocación de método nativo en Swift / Kotlin\n  static Future<int> getBatteryLevel() async {\n    try {\n      final int result = await _channel.invokeMethod('getBatteryLevel');\n      return result;\n    } on PlatformException catch (e) {\n      print('Fallo al consultar batería nativa: ${e.message}');\n      return -1;\n    }\n  }\n\n  // 2. Escucha de eventos continuos de hardware nativo\n  static Stream<bool> get chargingStatusStream {\n    return _eventChannel.receiveBroadcastStream().map((event) => event as bool);\n  }\n}\n\n/* Lado Nativo en Kotlin (Android): MainActivity.kt\nMethodChannel(flutterEngine.dartExecutor.binaryMessenger, \"com.empresa.app/battery\")\n    .setMethodCallHandler { call, result ->\n        if (call.method == \"getBatteryLevel\") {\n            val batteryLevel = getSystemBatteryLevel()\n            result.success(batteryLevel)\n        } else {\n            result.notImplemented()\n        }\n    }\n*/"
        },
        "visualDiagram": {
            "id": "diag-flutter-16",
            "diagramType": "flutter-platform-channels-ffi",
            "title": "Arquitectura de Interoperabilidad Nativa: Platform Channels vs Dart FFI",
            "caption": "Platform Channels serializa con BinaryMessenger; Dart FFI accede directamente a punteros de memoria C/Rust."
        },
        "interviewTips": {
            "whatInterviewersWant": "Explicar cuándo elegir `MethodChannel` vs `EventChannel` vs `Dart FFI` (FFI para bibliotecas de C/C++/Rust con cero sobrecarga de copia; Channels para interactuar con APIs del sistema iOS/Android).",
            "commonPitfalls": [
                "Bloquear el Main Thread nativo en Swift o Kotlin al responder a un `MethodChannel`, congelando el renderizado de la UI de Flutter.",
                "Olvidar manejar la excepción `PlatformException` cuando el canal no está implementado en una de las plataformas soportadas."
            ]
        },
        "quiz": {
            "question": "¿Por qué Dart FFI (Foreign Function Interface) es significativamente más rápido que MethodChannel para invocar bibliotecas nativas de C/C++?",
            "options": [
                "Porque Dart FFI desactiva la pantalla del dispositivo durante la ejecución de la función.",
                "Porque interactúa directamente con punteros de memoria en el mismo proceso sin la sobrecarga de serialización binaria ni cambios de hilo que requiere Platform Channels.",
                "Porque compila el código C++ a lenguaje Dart antes de correr la app.",
                "Porque Dart FFI almacena los datos en el portapapeles del sistema operativo."
            ],
            "correctIndex": 1,
            "explanation": "Dart FFI invoca funciones nativas en memoria directamente a través de punteros binarios sin costo de codificación/decodificación (`StandardMessageCodec`) ni cola de mensajería asíncrona, operando a velocidad nativa de C puro."
        }
    },
    {
        "id": "flutter-17",
        "title": "¿Cómo crear un RenderObject personalizado (LeafRenderObjectWidget)?",
        "level": "experto",
        "tags": [
            "RenderObject",
            "LeafRenderObjectWidget",
            "performLayout",
            "paint",
            "BoxConstraints"
        ],
        "response": "Aunque la gran mayoría de requerimientos de UI en Flutter se resuelven componiendo widgets estándar (`Container`, `Stack`, `Row`), las aplicaciones de nivel empresarial o bibliotecas de alto rendimiento a veces necesitan un control absoluto sobre las dimensiones, hit-testing y el pipeline de renderizado gráfico de bajo nivel mediante la creación de un **`RenderObject` personalizado**.\n\nAnatomía de implementación de bajo nivel:\n1. **`LeafRenderObjectWidget`**:\n- Widget inmutable sin hijos que actúa como plano en el Widget Tree. Implementa `createRenderObject(BuildContext context)` para instanciar el `RenderObject` y `updateRenderObject` para sincronizar sus propiedades si el widget cambia.\n\n2. **`RenderBox` (Subclase de RenderObject para geometría de cajas 2D)**:\n- **Regla de oro del Layout en Flutter**: *'Constraints go down, Sizes go up, Parent sets position'*. El padre entrega restricciones de tamaño (`constraints`) hacia abajo; el hijo calcula su propio tamaño (`size`) hacia arriba respetando esos límites; finalmente el padre define la posición en coordenadas `Offset`.\n- **`performLayout()`**: Calcula el tamaño intrínseco del objeto asignando la propiedad obligatoria `size = constraints.constrain(Size(w, h))`.\n- **`paint(PaintingContext context, Offset offset)`**: Dibuja directamente sobre el `PaintingContext`, agregando capas al compositor de hardware de la GPU.\n- **`hitTestSelf(Offset position)`**: Determina si un toque de pantalla intersecta con las coordenadas exactas de este objeto.",
        "codeExample": {
            "language": "dart",
            "code": "import 'package:flutter/material.dart';\n\n// 1. Widget conector sin hijos en el Widget Tree\nclass SizedCircleWidget extends LeafRenderObjectWidget {\n  final double radius;\n  final Color color;\n\n  const SizedCircleWidget({super.key, required this.radius, required this.color});\n\n  @override\n  RenderSizedCircle createRenderObject(BuildContext context) {\n    return RenderSizedCircle(radius: radius, color: color);\n  }\n\n  @override\n  void updateRenderObject(BuildContext context, RenderSizedCircle renderObject) {\n    renderObject\n      ..radius = radius\n      ..color = color;\n  }\n}\n\n// 2. RenderObject de bajo nivel en el Render Tree\nclass RenderSizedCircle extends RenderBox {\n  double _radius;\n  Color _color;\n\n  RenderSizedCircle({required double radius, required Color color})\n      : _radius = radius,\n        _color = color;\n\n  set radius(double val) {\n    if (_radius == val) return;\n    _radius = val;\n    markNeedsLayout(); // Notifica que las dimensiones cambiaron\n  }\n\n  set color(Color val) {\n    if (_color == val) return;\n    _color = val;\n    markNeedsPaint(); // Notifica que solo el color cambió (sin re-layout)\n  }\n\n  @override\n  void performLayout() {\n    final desiredDiameter = _radius * 2;\n    // Respetar 'Constraints go down, Sizes go up'\n    size = constraints.constrain(Size(desiredDiameter, desiredDiameter));\n  }\n\n  @override\n  void paint(PaintingContext context, Offset offset) {\n    final paint = Paint()..color = _color;\n    final center = offset + Offset(size.width / 2, size.height / 2);\n    context.canvas.drawCircle(center, size.width / 2, paint);\n  }\n}"
        },
        "visualDiagram": {
            "id": "diag-flutter-17",
            "diagramType": "flutter-render-object-pipeline",
            "title": "Pipeline de RenderObject: Constraints Down, Sizes Up, Parent Positions",
            "caption": "El padre baja BoxConstraints; el hijo calcula su size en performLayout(); el padre posiciona con paint()."
        },
        "interviewTips": {
            "whatInterviewersWant": "Citar y explicar la regla de oro: 'Constraints go down, Sizes go up, Parent sets position', y diferenciar entre `markNeedsLayout()` (dimensiones alteradas) y `markNeedsPaint()` (solo apariencia modificada sin relayout).",
            "commonPitfalls": [
                "Llamar a `markNeedsLayout()` cuando solo cambió un color, forzando un recalculo innecesario de layout en todo el subárbol.",
                "Asignar un `size` en `performLayout()` que no cumpla con las `constraints` recibidas del padre (arroja un assert de runtime)."
            ]
        },
        "quiz": {
            "question": "¿Qué regla cardinal de diseño geométrico rige estrictamente el método `performLayout()` de cualquier RenderBox en Flutter?",
            "options": [
                "El hijo puede forzar al padre a expandirse indefinidamente sin importar la pantalla.",
                "'Constraints go down, Sizes go up, Parent sets position': el padre envía restricciones descendentes, el hijo calcula su tamaño respetándolas y el padre define su posición Offset.",
                "Todos los RenderBox deben tener exactamente el ancho de la pantalla física.",
                "El layout se resuelve mediante consultas asíncronas a una base de datos SQLite."
            ],
            "correctIndex": 1,
            "explanation": "Es la regla de oro del layout de Flutter: las restricciones bajan del padre (`constraints`), el hijo determina su tamaño dentro de esos límites (`size`), y el padre asigna la coordenada física (`offset`) de pintura."
        }
    },
    {
        "id": "flutter-18",
        "title": "¿Cómo aplicar Clean Architecture con Domain-Driven Design (DDD) en Flutter?",
        "level": "experto",
        "tags": [
            "CleanArchitecture",
            "DDD",
            "UseCases",
            "RepositoryPattern",
            "DomainLayer",
            "DataLayer"
        ],
        "response": "En aplicaciones empresariales de gran envergadura, acoplar la lógica de negocio o las peticiones HTTP directamente a los widgets o a los gestores de estado conduce a bases de código monolíticas, frágiles y difíciles de probar.\n\nLa aplicación de **Clean Architecture con principios de Domain-Driven Design (DDD)** en Flutter divide el código en tres capas estrictamente desacopladas mediante la **Regla de Dependencia** (las capas externas conocen a las internas, pero las internas tienen **cero dependencias** hacia afuera):\n\n1. **Capa de Dominio (`Domain Layer` - Núcleo Puro de Negocio)**:\n- La capa más interna y protegida. **No contiene ninguna importación de Flutter (`package:flutter`) ni de librerías de infraestructura**; es Dart puro.\n- **Entities & Value Objects**: Modelos del núcleo del negocio con validaciones intrínsecas inmutables.\n- **Use Cases (Interactors)**: Acciones atómicas de negocio (ej. `AuthenticateUser`, `TransferFunds`).\n- **Contratos de Repositorio (Interfaces Abstractas)**: Define qué datos se necesitan sin saber de dónde provienen (`abstract class UserRepository`).\n\n2. **Capa de Datos (`Data Layer` - Infraestructura e I/O)**:\n- Implementa los contratos definidos en el Dominio (`UserRepositoryImpl`).\n- **DataSources**: Conexiones concretas a APIs REST (`Dio`), WebSockets, Firebase o bases de datos locales (`Isar` / `Drift`).\n- **Models (DTOs)**: Serialización/deserialización JSON (`fromJson`, `toJson`) y mapeo hacia las `Entities` del Dominio.\n\n3. **Capa de Presentación (`Presentation Layer` - UI y Estado)**:\n- **State Management**: BLoCs o Notifiers de Riverpod que invocan Casos de Uso y emiten estados de interfaz.\n- **Widgets & Pages**: Interfaz puramente declarativa que reacciona a los estados emitidos.",
        "codeExample": {
            "language": "dart",
            "code": "// 1. CAPA DOMINIO (Dart Puro, 0 dependencias externas)\nclass AccountEntity {\n  final String id;\n  final double balance;\n  AccountEntity({required this.id, required this.balance});\n}\n\nabstract class AccountRepository {\n  Future<AccountEntity> getAccountDetails(String id);\n}\n\nclass GetAccountUseCase {\n  final AccountRepository repository;\n  GetAccountUseCase(this.repository);\n\n  Future<AccountEntity> call(String id) async {\n    return await repository.getAccountDetails(id);\n  }\n}\n\n// 2. CAPA DATOS (Implementación de infraestructura y DTOs)\nclass AccountModel extends AccountEntity {\n  AccountModel({required super.id, required super.balance});\n\n  factory AccountModel.fromJson(Map<String, dynamic> json) {\n    return AccountModel(\n      id: json['account_id'] as String,\n      balance: (json['balance'] as num).toDouble(),\n    );\n  }\n}\n\nclass AccountRepositoryImpl implements AccountRepository {\n  // Inyección de cliente HTTP o base de datos local\n  @override\n  Future<AccountEntity> getAccountDetails(String id) async {\n    // Simulación: Llamada a API externa y mapeo de DTO a Entity\n    final fakeJson = {'account_id': id, 'balance': 98500.50};\n    return AccountModel.fromJson(fakeJson);\n  }\n}"
        },
        "visualDiagram": {
            "id": "diag-flutter-18",
            "diagramType": "flutter-clean-architecture-ddd",
            "title": "Clean Architecture con DDD en Flutter: Domain, Data y Presentation",
            "caption": "Domain puro (0 dependencias) ➔ Data (DTOs y DataSources) ➔ Presentation (BLoC y Widgets)."
        },
        "interviewTips": {
            "whatInterviewersWant": "Defender por qué la Capa de Dominio no debe tener dependencias de Flutter ni de librerías de terceros (permite testear el 100% del negocio sin widgets y cambiar de backend sin alterar la UI).",
            "commonPitfalls": [
                "Utilizar los mismos modelos DTO con `fromJson` directamente como entidades del dominio (acopla el negocio al contrato JSON del backend).",
                "Hacer que los Use Cases dependan de paquetes de presentación o almacenen estado de widgets."
            ]
        },
        "quiz": {
            "question": "¿Por qué la Capa de Dominio en una arquitectura limpia con DDD en Flutter no debe importar ningún paquete de `package:flutter`?",
            "options": [
                "Porque los widgets de Flutter aumentan el tamaño del compilador de C++.",
                "Para garantizar que las reglas y entidades del negocio sean completamente independientes del framework visual, permitiendo pruebas unitarias instantáneas y desacoplamiento absoluto de la UI.",
                "Porque Dart prohíbe importar librerías en archivos que contengan clases abstractas.",
                "Porque la tienda Google Play rechaza aplicaciones con más de dos capas de software."
            ],
            "correctIndex": 1,
            "explanation": "El núcleo del negocio (Domain) debe ser agnóstico de la plataforma e interfaz gráfica. Al no depender de Flutter, puede probarse con pruebas unitarias ultrarrápidas y reutilizarse incluso en servidores Dart (shelf) o CLI sin modificar una línea de código."
        }
    },
    {
        "id": "flutter-19",
        "title": "¿Cómo optimizar el rendimiento y consumo de memoria en apps Flutter de escala masiva?",
        "level": "experto",
        "tags": [
            "Performance",
            "DevTools",
            "MemoryLeaks",
            "Timeline",
            "RasterThread",
            "saveLayer"
        ],
        "response": "Garantizar una experiencia a 60 o 120 FPS sin consumo excesivo de batería ni fugas de memoria (**Memory Leaks**) en aplicaciones móviles Flutter exige auditoría técnica y aplicación de patrones de alto rendimiento:\n\nEstrategias arquitectónicas de optimización:\n\n1. **Análisis de los Hilos en Flutter DevTools Timeline**:\n- La herramienta **Timeline** separa la actividad en dos hilos críticos:\n  * **UI Thread**: Ejecuta el código Dart, orquesta el ciclo de vida y calcula el layout.\n  * **Raster Thread (GPU Thread)**: Transforma las capas del Compositor en llamadas gráficas a la GPU.\n- Si el UI Thread excede los 16.6ms (o 8.3ms en 120Hz), la causa son widgets complejos o cálculos síncronos pesados (solución: Isolates o micro-optimizaciones). Si el Raster Thread se desborda, la causa son operaciones gráficas costosas (solución: reducir `saveLayer` y optimizar shaders).\n\n2. **Evitar el Costo Oculto de `saveLayer()`**:\n- Widgets como `Opacity` (cuando se usa con valores intermedios y subárboles grandes) o ciertos recortes de `ClipRRect` invocan `saveLayer()` internamente, creando un búfer fuera de pantalla (**Offscreen Buffer**) en la GPU que requiere cambiar el destino de renderizado (*render target switch*), duplicando el trabajo de rasterizado.\n\n3. **Virtualización Rigurosa y Cache de Imágenes**:\n- Usar `ListView.builder` especificando siempre `itemExtent` o `prototypeItem` cuando los elementos tengan una altura uniforme, evitando que Flutter tenga que calcular las dimensiones de cada elemento de forma dinámica durante el scroll.\n- Dimensionar imágenes de red (`cacheWidth` y `cacheHeight`) para que la GPU no almacene texturas en memoria con resoluciones mayores a las que físicamente se muestran en pantalla.",
        "codeExample": {
            "language": "dart",
            "code": "import 'package:flutter/material.dart';\n\nclass HighPerformanceImageFeed extends StatelessWidget {\n  const HighPerformanceImageFeed({super.key});\n\n  @override\n  Widget build(BuildContext context) {\n    return ListView.builder(\n      // 1. itemExtent: Cálculo O(1) de scroll sin medir widgets hijos\n      itemExtent: 80.0,\n      itemCount: 1000,\n      itemBuilder: (context, index) {\n        return ListTile(\n          leading: Image.network(\n            'https://api.empresa.com/avatar/$index.jpg',\n            // 2. Redimensionado en memoria: Decodifica la imagen a 120x120\n            // en lugar de almacenar una foto de 4K en la RAM de la GPU\n            cacheWidth: 120,\n            cacheHeight: 120,\n          ),\n          title: Text('Transacción Financiera #$index'),\n          // 3. Widget const: Omitido en todos los rebuilds\n          trailing: const Icon(Icons.arrow_forward_ios, size: 14),\n        );\n      },\n    );\n  }\n}"
        },
        "visualDiagram": {
            "id": "diag-flutter-19",
            "diagramType": "flutter-performance-profiling-devtools",
            "title": "Presupuesto de Cuadros (Frame Budget) y Perfilado en Flutter DevTools",
            "caption": "Presupuesto de 16.6ms (60 FPS) entre UI Thread y Raster Thread; auditoría de saveLayer y memoria."
        },
        "interviewTips": {
            "whatInterviewersWant": "Explicar la diferencia entre el UI Thread y el Raster Thread en DevTools, el impacto destructivo de `saveLayer()` y cómo optimizar memoria decodificando imágenes con `cacheWidth`/`cacheHeight`.",
            "commonPitfalls": [
                "Cargar imágenes de 10 megapíxeles directamente en elementos de lista pequeños sin limitar el tamaño de decodificación en memoria.",
                "Usar el widget `Opacity` en animaciones continuas sobre subárboles enteros en lugar de `AnimatedOpacity` o colorear directamente con el canal alpha en `Paint`."
            ]
        },
        "quiz": {
            "question": "¿Por qué el uso descuidado del widget `Opacity` sobre subárboles complejos puede causar severos problemas de rendimiento (jank) en la GPU?",
            "options": [
                "Porque convierte todo el texto del subárbol en código ASCII binario.",
                "Porque invoca internamente `saveLayer()`, forzando a la GPU a crear un búfer de renderizado fuera de pantalla (Offscreen Buffer) y cambiar de contexto de textura.",
                "Porque desactiva la conexión Wi-Fi del dispositivo móvil.",
                "Porque obliga al recolector de basura de Dart a ejecutarse cada 2 milisegundos."
            ],
            "correctIndex": 1,
            "explanation": "Al aplicar opacidad a un subárbol, Flutter debe renderizarlo primero completo en un búfer intermedio fuera de pantalla (`saveLayer()`) para luego componerlo con transparencia sobre la escena principal, lo que duplica el consumo de memoria y tiempo de la GPU."
        }
    },
    {
        "id": "flutter-20",
        "title": "¿Qué es Tree Shaking de fuentes y código en Flutter para Web y Móvil?",
        "level": "experto",
        "tags": [
            "TreeShaking",
            "AOT",
            "ReleaseBuild",
            "FontOptimization",
            "DeadCodeElimination"
        ],
        "response": "En aplicaciones empresariales con cientos de pantallas y decenas de dependencias de terceros en `pubspec.yaml`, el tamaño del binario final descargado por el usuario (APK, AAB, IPA o bundle Web) tiene un impacto directo en las tasas de instalación y en el tiempo de arranque de la app.\n\nEl **Tree Shaking** es un proceso de optimización estático que el compilador AOT de Dart y el pipeline de empaquetado de Flutter ejecutan durante las compilaciones de producción (`flutter build apk --release`, `flutter build ipa` o `flutter build web`):\n\n1. **Tree Shaking de Código (Dead Code Elimination)**:\n- El compilador AOT analiza estáticamente el grafo de llamadas partiendo desde la función `main()`.\n- Cualquier clase, método, función o librería importada que no sea alcanzable de forma transitiva a través de una ruta de ejecución real es **completamente eliminada del binario compilado**.\n- Esto garantiza que importar un paquete gigante de utilidades para usar solo una función no aumente artificialmente el peso del binario.\n\n2. **Font Icon Tree Shaking (Reducción Masiva de Fuentes de Iconos)**:\n- Paquetes de fuentes como `MaterialIcons` o `CupertinoIcons` contienen miles de glifos vectoriales que pesan varios megabytes.\n- Durante el build de release, Flutter inspecciona todos los iconos constantes referenciados en el código (ej. `Icons.add`, `Icons.favorite`), **genera una nueva fuente TTF recortada que contiene ÚNICAMENTE los glifos realmente utilizados** y descarta el resto.\n- Esta optimización reduce el peso de la fuente de iconos típicamente en un **99%** (de varios megabytes a escasos kilobytes).",
        "codeExample": {
            "language": "dart",
            "code": "/* Demostración de requisitos de código para Font Tree Shaking:\n *\n * ✅ PERMITE FONT TREE SHAKING (Referencia constante conocida en build):\n * const Icon(Icons.home);\n * const Icon(Icons.credit_card);\n *\n * ❌ IMPIDE FONT TREE SHAKING (Referencia dinámica en runtime):\n * Icon(IconData(dynamicCodePoint, fontFamily: 'MaterialIcons'));\n * // Si el analizador no puede saber qué glifos se usarán estáticamente,\n * // se verá obligado a empaquetar la fuente completa o lanzar una advertencia de build.\n */\n\nimport 'package:flutter/material.dart';\n\nclass OptimizedIconsBar extends StatelessWidget {\n  const OptimizedIconsBar({super.key});\n\n  @override\n  Widget build(BuildContext context) {\n    // Los glifos 'lock' y 'shield' son identificados en compilación AOT\n    // y empaquetados en un subconjunto de fuente ultraligero.\n    return const Row(\n      mainAxisAlignment: MainAxisAlignment.spaceAround,\n      children: [\n        Icon(Icons.lock, color: Colors.green),\n        Icon(Icons.shield, color: Colors.blue),\n      ],\n    );\n  }\n}\n\n/* Comando de compilación optimizada con AOT y Tree Shaking activo:\n * flutter build appbundle --release --obfuscate --split-debug-info=./symbols\n */"
        },
        "visualDiagram": {
            "id": "diag-flutter-20",
            "diagramType": "flutter-aot-tree-shaking-compiler",
            "title": "Pipeline de Compilación AOT: Dead Code Elimination y Font Tree Shaking",
            "caption": "Dart AOT analiza el grafo de llamadas, poda clases huérfanas y reduce las fuentes de iconos en un 99%."
        },
        "interviewTips": {
            "whatInterviewersWant": "Explicar cómo opera el Dead Code Elimination y el Font Tree Shaking, y advertir que instanciar `IconData` con códigos numéricos dinámicos en runtime puede deshabilitar el tree shaking de fuentes.",
            "commonPitfalls": [
                "Cargar glifos de iconos mediante variables numéricas dinámicas que provienen de una base de datos, deshabilitando el Font Tree Shaking en release.",
                "Confundir la compilación JIT de desarrollo (que incluye todo) con los binarios depurados AOT de release."
            ]
        },
        "quiz": {
            "question": "¿Qué condición de código es necesaria para que el Font Tree Shaking de Flutter pueda podar los iconos no utilizados de la fuente MaterialIcons?",
            "options": [
                "Los iconos deben ser imágenes PNG alojadas en un servidor web externo.",
                "Los iconos deben ser referenciados como constantes estáticas conocidas en tiempo de compilación (ej. `const Icon(Icons.check)`).",
                "La aplicación debe estar configurada en idioma inglés exclusivamente.",
                "El dispositivo debe contar con permisos de superusuario (root)."
            ],
            "correctIndex": 1,
            "explanation": "El compilador estático de Flutter analiza el código fuente en búsqueda de constantes de `IconData`. Si los iconos se declaran estáticamente como `const`, Flutter extrae solo esos caracteres y elimina todos los demás de la fuente final."
        }
    }
]
};

export default questionsFlutter;
