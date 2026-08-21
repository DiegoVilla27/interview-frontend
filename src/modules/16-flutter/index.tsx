import { ISection } from "../../types";

export const questionsFlutter: ISection = {
  title: "Flutter",
  collapse: "collapseFlutter",
  icon: "flutter",
  questions: [
    // === BÁSICO ===
    {
      title: "¿Qué es Flutter y qué lenguaje utiliza?",
      response:
        "Flutter es el framework de UI de Google para construir aplicaciones nativas compiladas para móvil (iOS, Android), web y desktop desde una única base de código. Utiliza el lenguaje Dart.",
      level: "basico"
    },
    {
      title: "¿Qué es un Widget en Flutter y qué tipos principales existen?",
      response:
        "En Flutter, 'todo es un Widget' (la unidad declarativa de UI). Los dos tipos básicos son: `StatelessWidget` (inmutable, no almacena estado que cambie en runtime) y `StatefulWidget` (posee un objeto `State` que puede mutar y disparar reconstrucciones con `setState`).",
      level: "basico"
    },
    {
      title: "¿Qué diferencia hay entre `const` y `final` en Dart?",
      response:
        "`final` es una variable de asignación única evaluada en tiempo de ejecución (runtime). `const` es una constante evaluada en tiempo de compilación (compile-time) que canonicaliza objetos en memoria, evitando reconstrucciones de widgets.",
      level: "basico"
    },
    {
      title: "¿Qué es el BuildContext en Flutter?",
      response:
        "Es una referencia a la ubicación exacta de un widget dentro del árbol de elementos (`Element Tree`). Permite interactuar con widgets ancestros (como `Theme.of(context)`, `MediaQuery.of(context)` o `Navigator.of(context)`).",
      level: "basico"
    },
    {
      title: "¿Qué es Hot Reload vs Hot Restart en Flutter?",
      response:
        "`Hot Reload` inyecta el código fuente actualizado en la Dart Virtual Machine conservando el estado actual de la app en menos de 1 segundo. `Hot Restart` destruye el estado y reinicia la app desde `main()`, siendo necesario al cambiar dependencias o código nativo.",
      level: "basico"
    },
    // === MEDIO ===
    {
      title: "¿Cómo funciona el ciclo de vida de un StatefulWidget?",
      response:
        "Secuencia: `createState()` -> `initState()` -> `didChangeDependencies()` -> `build()` -> (opcional `didUpdateWidget()`) -> `deactivate()` -> `dispose()`. `dispose()` es fundamental para cancelar streams, timers y controllers.",
      level: "medio"
    },
    {
      title: "¿Qué diferencia hay entre Future y Stream en Dart?",
      response:
        "Un `Future<T>` representa un único valor asíncrono que se completará una sola vez (o emitirá error). Un `Stream<T>` es una secuencia continua de múltiples eventos asíncronos en el tiempo (consumibles con `StreamBuilder` o `await for`).",
      level: "medio"
    },
    {
      title: "¿Qué son los Keys en Flutter y cuándo son obligatorios?",
      response:
        "Son identificadores únicos (`ValueKey`, `ObjectKey`, `UniqueKey`, `GlobalKey`) que preservan el estado cuando los widgets cambian de posición o se reordenan dentro de una colección del árbol de elementos.",
      level: "medio"
    },
    {
      title: "¿Qué es InheritedWidget y cómo funciona Provider/Riverpod sobre él?",
      response:
        "`InheritedWidget` es la base del paso eficiente de datos hacia abajo en el árbol de widgets sin prop drilling. Notifica automáticamente a los widgets suscritos cuando su data cambia. Provider y Riverpod simplifican este patrón con inyección reactiva.",
      level: "medio"
    },
    {
      title: "¿Qué son los Slivers y cuándo utilizarlos?",
      response:
        "Son porciones de área con scroll (`CustomScrollView`) que implementan efectos avanzados y bajo consumo de memoria: `SliverAppBar` expandible, `SliverList`, `SliverGrid` y `SliverToBoxAdapter`.",
      level: "medio"
    },
    // === AVANZADO ===
    {
      title: "¿Cómo interactúan los 3 Árboles en Flutter: Widget Tree, Element Tree y Render Tree?",
      response:
        "1) **Widget Tree**: Configuración declarativa inmutable y ligera. 2) **Element Tree**: Instancia intermedia que administra el ciclo de vida y retiene el estado. 3) **Render Tree**: Objetos `RenderObject` de bajo nivel que calculan layout, dimensiones y pintan píxeles en pantalla.",
      level: "avanzado"
    },
    {
      title: "¿Qué es el nuevo motor de renderizado Impeller vs Skia?",
      response:
        "Impeller es el motor gráfico de nueva generación de Flutter diseñado para reemplazar Skia en iOS y Android. Precompila todos los shaders en build time (AOT) eliminando el 'shader compilation jank' y logrando 60/120 FPS estables.",
      level: "avanzado"
    },
    {
      title: "¿Cómo funciona la Arquitectura BLoC (Business Logic Component)?",
      response:
        "Separa la presentación de la lógica de negocio usando Streams y RxDart. La UI envía `Events` al BLoC, el BLoC procesa la lógica y emite nuevos `States` inmutables que son consumidos por `BlocBuilder` o `BlocConsumer`.",
      level: "avanzado"
    },
    {
      title: "¿Qué es un CustomPainter y cómo funciona el Canvas en Flutter?",
      response:
        "Es una clase que hereda de `CustomPainter` implementando `paint(Canvas canvas, Size size)` y `shouldRepaint()`. Permite dibujar gráficos vectoriales, formas personalizadas, trazados de paths y shaders directos sobre el canvas.",
      level: "avanzado"
    },
    {
      title: "¿Qué son los Isolates en Dart y cómo difieren del Event Loop?",
      response:
        "Dart es single-threaded por defecto (manejado por el Event Loop con microtasks y event queues). Un `Isolate` es un hilo de ejecución independiente con su propio espacio de memoria no compartida. Se comunican exclusivamente mediante paso de mensajes (`SendPort`/`ReceivePort`) o `compute()`.",
      level: "avanzado"
    },
    // === EXPERTO ===
    {
      title: "¿Cómo funciona la comunicación con código nativo mediante Platform Channels y FFI?",
      response:
        "`MethodChannel` y `EventChannel` comunican Dart con Java/Kotlin o Swift/Obj-C serializando datos de forma binaria. Para máximo rendimiento, `Dart FFI` (Foreign Function Interface) permite invocar bibliotecas nativas de C/C++/Rust directamente en memoria sin serialización.",
      level: "experto"
    },
    {
      title: "¿Cómo crear un RenderObject personalizado (`LeafRenderObjectWidget` / `SingleChildRenderObjectWidget`)?",
      response:
        "Sobrescribiendo `createRenderObject()`, `performLayout()` para definir el algoritmo de sizing y layout intrínseco, y `paint(PaintingContext context, Offset offset)` para control absoluto del pipeline de rasterizado del framework.",
      level: "experto"
    },
    {
      title: "¿Cómo aplicar Clean Architecture con Domain-Driven Design (DDD) en Flutter?",
      response:
        "Dividiendo la aplicación en 3 capas estrictas: 1) **Domain** (Entities, Value Objects, Use Cases, Interfaces de Repositorio; 0 dependencias externas), 2) **Data** (DataSources, Models DTOs, Implementación de Repositorios), y 3) **Presentation** (BLoC/Riverpod, Widgets, Pages).",
      level: "experto"
    },
    {
      title: "¿Cómo optimizar el rendimiento y consumo de memoria en apps Flutter de escala masiva?",
      response:
        "Uso estricto de widgets `const`, evitar `saveLayer()` en Canvas por el costo de offscreen buffers, cachear imágenes con `cached_network_image`, virtualizar listas con `ListView.builder(itemExtent: ...)`, e inspeccionar con Flutter DevTools Timeline y Memory Allocation Tracing.",
      level: "experto"
    },
    {
      title: "¿Qué es Tree Shaking de fuentes y código en Flutter para Web y Móvil?",
      response:
        "Durante el build de release (`flutter build --release`), el compilador AOT de Dart analiza el grafo de dependencias y elimina código, clases, métodos y glifos de fuentes no referenciados, reduciendo el binario final a su mínima expresión.",
      level: "experto"
    }
  ]
};

export default questionsFlutter;
