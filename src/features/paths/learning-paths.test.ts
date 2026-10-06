import { describe, expect, it } from "vitest";
import { contentIndex } from "../../content";
import { getPathQuestions, learningPaths, LEVEL_ORDER } from "./learning-paths";

describe("learning paths", () => {
  it.each(learningPaths.map((path) => [path.title, path] as const))(
    "%s solo incluye sus módulos y niveles, ordenados por módulo y nivel",
    (_, path) => {
      const questions = getPathQuestions(path);
      expect(questions.length).toBeGreaterThan(10);

      for (const item of questions) {
        expect(path.modules).toContain(item.moduleId);
        expect(path.levels).toContain(item.question.level);
      }

      const moduleOrder = questions.map((q) => path.modules.indexOf(q.moduleId));
      expect(moduleOrder).toEqual([...moduleOrder].sort((a, b) => a - b));

      for (let i = 1; i < questions.length; i++) {
        if (questions[i].moduleId === questions[i - 1].moduleId) {
          expect(LEVEL_ORDER.indexOf(questions[i].question.level)).toBeGreaterThanOrEqual(
            LEVEL_ORDER.indexOf(questions[i - 1].question.level)
          );
        }
      }
    }
  );

  it("todos los módulos referenciados existen en el índice", () => {
    const ids = new Set(contentIndex.map((section) => section.id));
    for (const path of learningPaths) for (const id of path.modules) expect(ids).toContain(id);
  });
});
