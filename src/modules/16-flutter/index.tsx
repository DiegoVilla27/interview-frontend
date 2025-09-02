import { ISection } from "../../types";

export const questionsFlutter: ISection = {
  title: "Flutter",
  collapse: "collapseFlutter",
  icon: "flutter",
  questions: [
    {
      title: "¿Qué es Flutter?",
      response:
        "Un framework de Google para crear aplicaciones móviles, web y de escritorio desde una sola base de código."
    },
    {
      title: "¿Qué lenguaje usa Flutter?",
      response: "Usa el lenguaje Dart."
    },
    {
      title: "¿Qué es un Widget en Flutter?",
      response:
        "Es el bloque básico de construcción de la interfaz de usuario en Flutter."
    },
    {
      title: "¿Qué diferencia hay entre StatelessWidget y StatefulWidget?",
      response:
        "StatelessWidget no cambia de estado una vez creado, mientras que StatefulWidget puede actualizarse y renderizarse de nuevo."
    },
    {
      title:
        "¿Cómo se ejecuta un proyecto Flutter en un emulador o dispositivo?",
      response: "Usando el comando `flutter run`."
    },
    {
      title: "¿Qué comando se usa para crear un nuevo proyecto en Flutter?",
      response: "`flutter create nombre_proyecto`."
    },
    {
      title:
        "¿Qué archivo contiene la configuración principal del proyecto Flutter?",
      response: "El archivo `pubspec.yaml`."
    },
    {
      title: "¿Qué es Hot Reload en Flutter?",
      response:
        "Es la capacidad de actualizar la app inmediatamente sin perder el estado."
    },
    {
      title: "¿Qué es DartPad?",
      response:
        "Un editor online para probar código en Dart y Flutter sin necesidad de instalar nada."
    },
    {
      title: "¿Cómo se define el punto de entrada en una aplicación Flutter?",
      response: "Con la función `main()`."
    },
    {
      title: "¿Qué es el árbol de widgets en Flutter?",
      response:
        "Es la estructura jerárquica que representa cómo los widgets se organizan y renderizan en la interfaz."
    },
    {
      title: "¿Qué es el BuildContext en Flutter?",
      response:
        "Es un objeto que permite acceder al árbol de widgets y a información sobre el lugar donde se construye un widget."
    },
    {
      title:
        "¿Qué diferencia hay entre Navigator.push y Navigator.pushReplacement?",
      response:
        "Navigator.push agrega una nueva pantalla encima, mientras que pushReplacement reemplaza la pantalla actual."
    },
    {
      title: "¿Qué es un Future en Dart?",
      response:
        "Un objeto que representa un valor que estará disponible en el futuro, similar a una Promesa en JavaScript."
    },
    {
      title: "¿Qué es un Stream en Dart?",
      response:
        "Una secuencia asíncrona de datos que pueden recibirse a lo largo del tiempo."
    },
    {
      title: "¿Cómo se manejan los estados globales en Flutter?",
      response: "Con patrones como Provider, Riverpod, Bloc o Redux."
    },
    {
      title: "¿Qué es un Key en Flutter?",
      response:
        "Es un identificador único que ayuda a Flutter a diferenciar widgets cuando el árbol cambia."
    },
    {
      title: "¿Qué es setState en Flutter?",
      response:
        "Un método que notifica a Flutter que el estado cambió y necesita reconstruir el widget."
    },
    {
      title: "¿Qué diferencia hay entre const y final en Dart?",
      response:
        "`const` define constantes en tiempo de compilación y `final` en tiempo de ejecución."
    },
    {
      title: "¿Cómo se agregan dependencias externas en Flutter?",
      response:
        "Editando el archivo `pubspec.yaml` en la sección de `dependencies`."
    },
    {
      title: "¿Qué es un CustomPainter en Flutter?",
      response:
        "Una clase para dibujar gráficos personalizados en el canvas de Flutter."
    },
    {
      title: "¿Cómo funciona el ciclo de vida de un StatefulWidget?",
      response:
        "Incluye métodos como initState, build, didUpdateWidget y dispose."
    },
    {
      title: "¿Qué es un Isolate en Dart?",
      response:
        "Es un hilo independiente que permite ejecutar tareas en paralelo sin bloquear el hilo principal."
    },
    {
      title: "¿Qué es el render tree en Flutter?",
      response:
        "Es la representación optimizada del árbol de widgets que Flutter usa para dibujar en pantalla."
    },
    {
      title: "¿Cómo se implementa lazy loading en Flutter?",
      response:
        "Usando widgets como ListView.builder o métodos de paginación personalizados."
    },
    {
      title: "¿Qué es un Sliver en Flutter?",
      response:
        "Es un tipo especial de widget que permite scrolls avanzados y efectos como listas expandibles."
    },
    {
      title: "¿Qué es un InheritedWidget?",
      response:
        "Un widget que permite pasar datos eficientemente a widgets descendientes en el árbol."
    },
    {
      title: "¿Cómo funciona el árbol de elementos (Element Tree) en Flutter?",
      response:
        "Es la capa intermedia entre el árbol de widgets y el árbol de render, encargada de mantener el estado."
    },
    {
      title: "¿Qué es la arquitectura BLoC?",
      response:
        "Business Logic Component, un patrón para separar la lógica de negocio del UI usando Streams."
    },
    {
      title: "¿Cómo se optimiza el rendimiento en Flutter?",
      response:
        "Usando const widgets, evitando reconstrucciones innecesarias, optimizando listas y usando Isolates."
    },
    {
      title:
        "¿Qué diferencia hay entre el Widget Tree, Element Tree y Render Tree en Flutter?",
      response:
        "El Widget Tree define la UI declarativa, el Element Tree mantiene instancias y estado, y el Render Tree gestiona la disposición y el renderizado."
    },
    {
      title: "¿Qué es el motor Skia en Flutter?",
      response:
        "Es el motor gráfico usado por Flutter para renderizar en pantallas móviles, web y escritorio."
    },
    {
      title:
        "¿Cómo implementar un canal nativo (Platform Channels) en Flutter?",
      response:
        "Permite la comunicación entre código Dart y código nativo (Java/Kotlin en Android, Swift/Objective-C en iOS)."
    },
    {
      title: "¿Qué es FFI en Flutter?",
      response:
        "Foreign Function Interface, que permite llamar librerías nativas desde Dart."
    },
    {
      title: "¿Qué diferencia hay entre Isolates y microtasks en Dart?",
      response:
        "Isolates corren en hilos separados, mientras que microtasks se ejecutan en el event loop actual."
    },
    {
      title: "¿Qué es un RenderObject en Flutter?",
      response:
        "Es la base de bajo nivel usada para definir cómo un widget se pinta y se mide en pantalla."
    },
    {
      title: "¿Cómo manejar animaciones complejas en Flutter?",
      response:
        "Usando AnimationController, Tween, CurvedAnimation y librerías como Rive o Lottie."
    },
    {
      title: "¿Qué es la arquitectura Clean en Flutter?",
      response:
        "Un enfoque para dividir la app en capas (domain, data, presentation) que mejora mantenibilidad y escalabilidad."
    },
    {
      title: "¿Qué es Dart DevTools?",
      response:
        "Un conjunto de herramientas de depuración y análisis para Flutter y Dart."
    },
    {
      title: "¿Cómo implementar testing avanzado en Flutter?",
      response:
        "Con unit tests, widget tests, integration tests y herramientas como Mockito para mocks."
    }
  ]
};

export default questionsFlutter;
