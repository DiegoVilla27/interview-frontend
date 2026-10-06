import { create } from "zustand";
import { IQuestion, ISection, TModuleId } from "../types";
import { moduleCatalog } from "./catalog";

interface LoadedContentState {
  sections: Partial<Record<TModuleId, ISection>>;
}

/** Módulos ya descargados, para consumidores que no deben suspender (p. ej. la búsqueda). */
export const useLoadedContent = create<LoadedContentState>(() => ({ sections: {} }));

// Promesas cacheadas: `use()` exige recibir la misma promesa en cada render.
const moduleCache = new Map<TModuleId, Promise<ISection>>();
const groupCache = new Map<string, Promise<ISection[]>>();

export const loadModuleContent = (id: TModuleId): Promise<ISection> => {
  let promise = moduleCache.get(id);
  if (!promise) {
    const entry = moduleCatalog.find((module) => module.id === id);
    if (!entry) throw new Error(`Módulo desconocido: ${id}`);
    promise = entry.load().then((section) => {
      useLoadedContent.setState((state) => ({ sections: { ...state.sections, [id]: section } }));
      return section;
    });
    moduleCache.set(id, promise);
  }
  return promise;
};

/** Contenido de varios módulos (promesa estable por combinación, apta para `use()`). */
export const loadModulesContent = (ids: readonly TModuleId[]): Promise<ISection[]> => {
  const key = ids.join("|");
  let promise = groupCache.get(key);
  if (!promise) {
    promise = Promise.all(ids.map(loadModuleContent));
    groupCache.set(key, promise);
  }
  return promise;
};

/** Contenido completo de todos los módulos, en el orden del catálogo. */
export const loadAllContent = (): Promise<ISection[]> =>
  loadModulesContent(moduleCatalog.map((module) => module.id));

export const findQuestion = (section: ISection, title: string): IQuestion | undefined =>
  section.questions.find((question) => question.title === title);
