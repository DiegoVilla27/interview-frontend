import { ISection } from "../../types";

export const questionsReactNative: ISection = {
  title: "React Native",
  collapse: "collapseReactNative",
  icon: "react-native",
  questions: [
    {
      title: "¿Qué es React Native?",
      response:
        "React Native es un framework de desarrollo móvil creado por Meta que permite construir aplicaciones nativas para iOS y Android utilizando JavaScript y React."
    },
    {
      title: "¿Cuál es la diferencia principal entre React y React Native?",
      response:
        "React se utiliza principalmente para construir interfaces web, mientras que React Native se centra en crear aplicaciones móviles nativas. En React se usan elementos HTML, y en React Native se utilizan componentes propios como View, Text o ScrollView."
    },
    {
      title: "¿Qué ventajas ofrece React Native?",
      response:
        "Permite compartir gran parte del código entre iOS y Android, reduce tiempos de desarrollo, ofrece rendimiento cercano al nativo y cuenta con una gran comunidad de soporte."
    },
    {
      title: "¿Qué limitaciones tiene React Native?",
      response:
        "Algunas características avanzadas del dispositivo requieren desarrollo en código nativo (Java/Kotlin para Android y Objective-C/Swift para iOS). Además, puede haber problemas de compatibilidad con librerías de terceros."
    },
    {
      title: "¿Qué son los componentes nativos en React Native?",
      response:
        "Son los componentes básicos que provee React Native como View, Text, Image, ScrollView, TextInput, que se traducen a elementos nativos en cada plataforma."
    },
    {
      title: "¿Qué es Expo y para qué se utiliza?",
      response:
        "Expo es un conjunto de herramientas y servicios que simplifican el desarrollo con React Native, permitiendo ejecutar, compilar y probar apps sin necesidad de configurar entornos nativos al inicio."
    },
    {
      title: "¿Cómo maneja React Native el diseño?",
      response:
        "React Native utiliza un sistema de estilos basado en Flexbox, muy similar a CSS, pero con sus propias propiedades y reglas."
    },
    {
      title: "¿Cómo se comunican React Native y el código nativo?",
      response:
        "A través de un puente (bridge) que conecta el código JavaScript con los módulos nativos, permitiendo acceder a funcionalidades del dispositivo como cámara, GPS o notificaciones."
    }
  ]
};

export default questionsReactNative;
