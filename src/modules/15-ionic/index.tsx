import { ISection } from "../../types";

export const questionsIonic: ISection = {
  title: "Ionic",
  collapse: "collapseIonic",
  icon: "ionic",
  questions: [
    {
      title: "¿Qué es Ionic y para qué se utiliza?",
      response:
        "Ionic es un framework para desarrollar aplicaciones móviles multiplataforma (iOS, Android y web) usando tecnologías web como HTML, CSS y JavaScript/TypeScript."
    },
    {
      title: "¿Qué diferencia hay entre Ionic y React Native?",
      response:
        "React Native usa componentes nativos, mientras que Ionic renderiza usando WebView. Ionic es ideal para aplicaciones híbridas rápidas de desarrollar, React Native ofrece un rendimiento más cercano al nativo."
    },
    {
      title: "¿Qué es Capacitor en Ionic?",
      response:
        "Capacitor es la herramienta oficial de Ionic para acceder a funcionalidades nativas (cámara, GPS, archivos, etc.) y compilar las apps en Android e iOS."
    },
    {
      title: "¿Cuál es la diferencia entre Capacitor y Cordova?",
      response:
        "Cordova es más antiguo y con muchos plugins de terceros. Capacitor es moderno, con mejor integración en Ionic, soporte activo y plugins oficiales optimizados."
    },
    {
      title: "¿Cómo funciona el ciclo de vida en Ionic?",
      response:
        "Ionic extiende el ciclo de vida de Angular o React con eventos como ionViewWillEnter, ionViewDidEnter, ionViewWillLeave, y ionViewDidLeave, útiles para manejar lógica al entrar o salir de una vista."
    },
    {
      title: "¿Qué son los componentes de Ionic?",
      response:
        "Son bloques de UI listos para usar, como ion-button, ion-card, ion-input, optimizados para funcionar en múltiples plataformas con un diseño adaptativo."
    },
    {
      title: "¿Qué es el IonRouterOutlet?",
      response:
        "Es el contenedor de navegación que maneja el enrutamiento en Ionic, similar al <router-outlet> de Angular."
    },
    {
      title: "¿Cómo se manejan los formularios en Ionic?",
      response:
        "Ionic soporta tanto formularios reactivos como template-driven en Angular, o librerías como React Hook Form en proyectos con React."
    },
    {
      title: "¿Qué es lazy loading en Ionic?",
      response:
        "Es la técnica de cargar los módulos/páginas solo cuando se necesitan, mejorando el rendimiento inicial de la aplicación."
    },
    {
      title: "¿Cómo se accede a la cámara en Ionic?",
      response:
        "Usando el plugin oficial de Capacitor @capacitor/camera, que permite tomar fotos o seleccionar imágenes de la galería."
    },
    {
      title: "¿Cómo funcionan los modales en Ionic?",
      response:
        "Se crean usando IonModal, que permite abrir componentes como ventanas emergentes con animaciones y soporte táctil."
    },
    {
      title: "¿Cómo se integra Ionic con APIs externas?",
      response:
        "Usando HTTPClient en Angular o fetch/axios en React, igual que en cualquier app web, pero con la posibilidad de usar almacenamiento nativo para caché."
    }
  ]
};

export default questionsIonic;
