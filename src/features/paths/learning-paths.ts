import { contentIndex } from "../../content";
import { IQuestionRef, IQuestionSummary, QuestionLevel, TModuleId } from "../../types";

export interface ILearningPath {
  id: string;
  title: string;
  role: string;
  description: string;
  icon: string;
  /** Módulos en el orden recomendado de estudio. */
  modules: TModuleId[];
  levels: QuestionLevel[];
}

export interface IPathQuestion extends IQuestionRef {
  question: IQuestionSummary;
  moduleTitle: string;
}

export const LEVEL_ORDER: QuestionLevel[] = ["basico", "medio", "avanzado", "experto"];

export const learningPaths: ILearningPath[] = [
  {
    id: "junior-frontend",
    title: "Junior Frontend",
    role: "0–2 años",
    description: "Los fundamentos que se dan por sabidos en cualquier primera entrevista: web, HTML, CSS, JavaScript y Git.",
    icon: "🌱",
    modules: ["01-internet", "02-html", "03-css", "04-javascript", "05-browser", "06-version-control"],
    levels: ["basico", "medio"]
  },
  {
    id: "mid-react",
    title: "React Developer",
    role: "Mid · 2–4 años",
    description: "JavaScript sólido, TypeScript, React moderno y las herramientas del día a día: testing y bundlers.",
    icon: "⚛️",
    modules: ["04-javascript", "10-typescript", "12-react", "05-browser", "09-testing", "08-build-tools"],
    levels: ["medio", "avanzado"]
  },
  {
    id: "senior-react",
    title: "Senior React",
    role: "Senior · 5+ años",
    description: "Rendimiento, arquitectura de aplicaciones, React 19 en profundidad, calidad y entrega continua.",
    icon: "🚀",
    modules: ["12-react", "10-typescript", "11-webapps", "09-testing", "08-build-tools", "17-solid", "18-cicd"],
    levels: ["avanzado", "experto"]
  },
  {
    id: "senior-angular",
    title: "Senior Angular",
    role: "Senior · 5+ años",
    description: "Signals, change detection, DI jerárquica, RxJS y arquitectura enterprise con Nx.",
    icon: "🅰️",
    modules: ["14-angular", "10-typescript", "04-javascript", "11-webapps", "09-testing", "17-solid"],
    levels: ["medio", "avanzado", "experto"]
  },
  {
    id: "mobile",
    title: "Mobile Cross-Platform",
    role: "Mid–Senior",
    description: "React Native, Flutter e Ionic: arquitectura, rendimiento y acceso nativo.",
    icon: "📱",
    modules: ["13-react-native", "16-flutter", "15-ionic", "04-javascript", "20-ui-ux"],
    levels: ["basico", "medio", "avanzado", "experto"]
  },
  {
    id: "staff-architecture",
    title: "Staff / Arquitectura",
    role: "Staff · Lead",
    description: "Decisiones de arquitectura, design systems, monorepos, seguridad de la cadena de suministro y CI/CD.",
    icon: "🏛️",
    modules: ["11-webapps", "17-solid", "21-web-components", "08-build-tools", "07-package-managers", "18-cicd", "09-testing"],
    levels: ["avanzado", "experto"]
  }
];

export const getLearningPath = (id: string | null): ILearningPath | undefined =>
  learningPaths.find((path) => path.id === id);

/** Preguntas de una ruta en orden de estudio: por módulo y, dentro de cada módulo, por nivel. */
export const getPathQuestions = (path: ILearningPath): IPathQuestion[] =>
  path.modules.flatMap((moduleId) => {
    const section = contentIndex.find((s) => s.id === moduleId);
    if (!section) return [];
    return section.questions
      .filter((question) => path.levels.includes(question.level))
      .sort((a, b) => LEVEL_ORDER.indexOf(a.level) - LEVEL_ORDER.indexOf(b.level))
      .map((question) => ({ moduleId, title: question.title, question, moduleTitle: section.title }));
  });
