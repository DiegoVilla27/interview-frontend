import { describe, expect, it } from "vitest";
import { contentIndex, findQuestion, loadModuleContent, loadModulesContent, useLoadedContent } from ".";

describe("content loader", () => {
  it("devuelve la misma promesa para el mismo módulo (requisito de use())", () => {
    expect(loadModuleContent("03-css")).toBe(loadModuleContent("03-css"));
    expect(loadModulesContent(["03-css", "12-react"])).toBe(loadModulesContent(["03-css", "12-react"]));
  });

  it("carga el contenido completo y lo publica en el store de módulos cargados", async () => {
    const section = await loadModuleContent("03-css");
    expect(useLoadedContent.getState().sections["03-css"]).toBe(section);

    const summary = contentIndex.find((s) => s.id === "03-css");
    expect(section.questions.map((q) => q.title)).toEqual(summary?.questions.map((q) => q.title));
    expect(findQuestion(section, summary!.questions[0].title)?.quiz.options).toHaveLength(4);
  });
});
