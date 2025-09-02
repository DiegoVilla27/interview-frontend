import { ISection } from "../../types";

export const questionsSOLID: ISection = {
  title: "SOLID",
  collapse: "collapseSOLID",
  icon: "solid",
  questions: [
    {
      title: "¿Qué significan las siglas SOLID?",
      response:
        "Son cinco principios de diseño de software: Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation y Dependency Inversion."
    },
    {
      title: "¿Cuál es el objetivo de los principios SOLID?",
      response:
        "Facilitar la mantenibilidad, escalabilidad y legibilidad del código."
    },
    {
      title:
        "¿Por qué SOLID es importante en la programación orientada a objetos?",
      response:
        "Porque ayuda a crear sistemas menos acoplados y más fáciles de mantener."
    },
    {
      title: "¿Qué es el principio de responsabilidad única (SRP)?",
      response:
        "Cada clase debe tener una única responsabilidad o razón de cambio."
    },
    {
      title: "¿Qué busca el principio abierto/cerrado (OCP)?",
      response:
        "Que el software esté abierto a extensión pero cerrado a modificación."
    },
    {
      title:
        "Explica con un ejemplo el principio de sustitución de Liskov (LSP).",
      response:
        "Las clases hijas deben poder sustituir a las clases padre sin alterar el correcto funcionamiento del programa."
    },
    {
      title: "¿Qué significa el principio de segregación de interfaces (ISP)?",
      response:
        "Una clase no debe estar obligada a implementar métodos que no necesita; se deben crear interfaces más específicas."
    },
    {
      title: "¿Qué es la inversión de dependencias (DIP)?",
      response:
        "Los módulos de alto nivel no deben depender de módulos de bajo nivel, ambos deben depender de abstracciones."
    },
    {
      title: "¿Cómo se relaciona SRP con el clean code?",
      response:
        "Un código con responsabilidad única facilita la legibilidad y reduce la complejidad."
    },
    {
      title: "¿Qué problema evita aplicar ISP en un sistema?",
      response:
        "Evita la creación de clases con dependencias innecesarias y el conocido 'fat interface'."
    },
    {
      title: "¿Cómo se puede aplicar DIP en un proyecto Angular o React?",
      response:
        "Mediante el uso de inyección de dependencias, donde los componentes dependen de interfaces o abstracciones en lugar de implementaciones concretas."
    },
    {
      title: "Explica cómo SOLID ayuda a evitar el 'code smell' de God Object.",
      response:
        "Aplicando SRP y ISP se fragmenta la lógica en múltiples clases con responsabilidades específicas, evitando concentrar demasiadas funciones en una sola."
    },
    {
      title:
        "¿Cuál es la relación entre OCP y patrones de diseño como Strategy?",
      response:
        "Permiten extender comportamientos definiendo nuevas estrategias sin modificar el código existente."
    },
    {
      title: "¿Cómo afecta LSP al diseño de jerarquías de clases?",
      response:
        "Obliga a diseñar clases hijas que mantengan la coherencia del contrato de la clase padre para evitar errores en el polimorfismo."
    },
    {
      title: "¿Qué consecuencias tiene violar DIP en proyectos grandes?",
      response:
        "Se genera un fuerte acoplamiento que dificulta el testing, la escalabilidad y la reutilización de código."
    },
    {
      title: "¿Cómo aplicarías SOLID en arquitecturas limpias o hexagonales?",
      response:
        "Usando SRP para dividir capas, OCP para permitir extensión de casos de uso, LSP para consistencia en implementaciones, ISP para separar interfaces de servicios y DIP para depender de abstracciones en lugar de detalles."
    },
    {
      title: "¿Cómo se integran los principios SOLID en microservicios?",
      response:
        "Cada microservicio tiene una única responsabilidad (SRP), sus APIs son específicas (ISP), son extensibles sin modificar (OCP), mantienen contratos claros (LSP) y dependen de abstracciones y no implementaciones concretas (DIP)."
    },
    {
      title:
        "¿Cómo aplicarías OCP en un sistema de pagos con múltiples pasarelas?",
      response:
        "Definiendo una interfaz de 'Pago' y extendiéndola con clases concretas para cada pasarela, sin modificar el código existente al añadir nuevas."
    },
    {
      title: "¿Qué patrones de diseño ejemplifican DIP en la práctica?",
      response:
        "Inyección de dependencias, inversion of control (IoC), y el patrón Factory."
    },
    {
      title:
        "¿Cómo aplicas SOLID en un contexto funcional (ej: con React hooks)?",
      response:
        "Separando responsabilidades en hooks específicos (SRP), creando hooks extensibles (OCP), componiéndolos de forma coherente (LSP), diseñando hooks específicos y no monolíticos (ISP) y desacoplando lógica de implementaciones concretas (DIP)."
    }
  ]
};

export default questionsSOLID;
