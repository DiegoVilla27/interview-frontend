import { ISection } from "../../types";

export const questionsTesting: ISection = {
  title: "Testing",
  collapse: "collapseTesting",
  icon: "testing",
  questions: [
    {
      title:
        "¿Qué es testing en el desarrollo frontend y por qué es importante?",
      response:
        "Es el proceso de verificar que el código funciona como se espera. Permite detectar errores antes de producción y asegurar la calidad del software."
    },
    {
      title:
        "¿Qué diferencias existen entre pruebas unitarias, de integración y end-to-end?",
      response:
        "Las unitarias prueban funciones aisladas, las de integración validan la interacción entre varios módulos y las E2E simulan el flujo completo de usuario en la aplicación."
    },
    {
      title: "¿Qué es el TDD (Test Driven Development)?",
      response:
        "Es una metodología en la que primero se escriben pruebas fallidas, luego el código para pasarlas y finalmente se refactoriza."
    },
    {
      title: "¿Qué beneficios aporta la cobertura de código en pruebas?",
      response:
        "Permite medir qué porcentaje del código está cubierto por tests, ayudando a identificar partes no validadas."
    },
    {
      title: "¿Cuál es la diferencia entre mocks, stubs y spies?",
      response:
        "Mocks simulan dependencias, stubs proveen respuestas predefinidas y spies registran cómo se llaman las funciones."
    },
    {
      title: "¿Qué es Jest y por qué es popular en el frontend?",
      response:
        "Es un framework de testing de JavaScript creado por Facebook, rápido y con funcionalidades como mocks automáticos y soporte para snapshots."
    },
    {
      title: "¿Qué son los snapshot tests en Jest?",
      response:
        "Son pruebas que guardan la salida de un componente y comparan ejecuciones futuras para detectar cambios inesperados."
    },
    {
      title: "¿Cómo se configuran pruebas asíncronas en Jest?",
      response:
        "Se puede usar async/await o la función done para esperar la resolución de promesas."
    },
    {
      title: "¿Qué es un mock en Jest y cómo se usa?",
      response:
        "Un mock reemplaza funciones o módulos para controlar su comportamiento en pruebas. Se usa con jest.fn() o jest.mock()."
    },
    {
      title: "¿Cómo se corre una sola prueba en Jest?",
      response: "Se puede usar test.only o it.only en la prueba deseada."
    },
    {
      title: "¿Qué es Karma y para qué se utiliza en Angular?",
      response:
        "Es un test runner que ejecuta pruebas en navegadores reales, usado comúnmente en Angular junto con Jasmine."
    },
    {
      title: "¿Qué es Jasmine?",
      response:
        "Es un framework de testing para JavaScript que proporciona sintaxis tipo BDD para escribir pruebas legibles."
    },
    {
      title: "¿Qué diferencia hay entre 'describe' e 'it' en Jasmine?",
      response:
        "describe agrupa un conjunto de pruebas relacionadas, mientras que it define un caso de prueba individual."
    },
    {
      title: "¿Cómo se manejan pruebas asíncronas en Jasmine?",
      response:
        "Se usa la función done dentro de la prueba o async/await en versiones modernas."
    },
    {
      title: "¿Qué ventajas y desventajas tiene Karma frente a Jest?",
      response:
        "Karma ejecuta en navegadores reales, útil para compatibilidad, pero es más lento que Jest que corre en Node con JSDOM."
    }
  ]
};

export default questionsTesting;
