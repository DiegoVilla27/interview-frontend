import { ISectionSummary, TModuleId } from "../types";
import { contentIndex } from "./content-index.generated";

export { contentIndex };
export { moduleCatalog } from "./catalog";
export {
  findQuestion,
  loadAllContent,
  loadModuleContent,
  loadModulesContent,
  useLoadedContent
} from "./content-loader";

export const totalQuestions = contentIndex.reduce((acc, section) => acc + section.questions.length, 0);

export const getSectionSummary = (id: TModuleId): ISectionSummary | undefined =>
  contentIndex.find((section) => section.id === id);
