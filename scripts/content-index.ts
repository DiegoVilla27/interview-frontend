import { moduleCatalog } from "../src/content/catalog";
import { ISection, ISectionSummary } from "../src/types";

export const INDEX_PATH = "src/content/content-index.generated.ts";

export const loadAllSections = async (): Promise<{ id: string; section: ISection }[]> =>
  Promise.all(moduleCatalog.map(async (entry) => ({ id: entry.id, section: await entry.load() })));

/** Construye el índice ligero (sin respuestas, código ni quizzes) a partir del contenido. */
export const buildContentIndex = async (): Promise<ISectionSummary[]> =>
  Promise.all(
    moduleCatalog.map(async (entry) => {
      const section = await entry.load();
      return {
        id: entry.id,
        title: section.title,
        icon: section.icon,
        category: entry.category,
        description: entry.description,
        questions: section.questions.map((question) => ({
          title: question.title,
          level: question.level,
          tags: question.tags ?? [],
          hasCode: Boolean(question.codeExample)
        }))
      };
    })
  );

export const renderContentIndex = (index: ISectionSummary[]): string =>
  `// Archivo generado por \`pnpm content:index\`. No editar a mano.
import { ISectionSummary } from "../types";

export const contentIndex: ISectionSummary[] = ${JSON.stringify(index, null, 2)};
`;
