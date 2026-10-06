import { beforeEach, describe, expect, it } from "vitest";
import { useLearningStore } from "./learningStore";

const initialState = useLearningStore.getInitialState();

describe("learningStore", () => {
  beforeEach(() => useLearningStore.setState(initialState, true));

  it("alterna preguntas dominadas y guardadas", () => {
    const { toggleQuestionCompleted, toggleBookmark } = useLearningStore.getState();
    toggleQuestionCompleted("¿Qué es CSS?");
    toggleBookmark("¿Qué es CSS?");
    expect(useLearningStore.getState().isQuestionCompleted("¿Qué es CSS?")).toBe(true);
    expect(useLearningStore.getState().isQuestionBookmarked("¿Qué es CSS?")).toBe(true);

    toggleQuestionCompleted("¿Qué es CSS?");
    expect(useLearningStore.getState().isQuestionCompleted("¿Qué es CSS?")).toBe(false);
  });

  it("registra repasos de repetición espaciada y los persiste", () => {
    useLearningStore.getState().reviewQuestion("¿Qué es CSS?", "good");
    expect(useLearningStore.getState().reviews["¿Qué es CSS?"].intervalDays).toBe(1);

    const persisted = JSON.parse(localStorage.getItem("interview-frontend-storage") ?? "{}");
    expect(persisted.version).toBe(1);
    expect(persisted.state.reviews["¿Qué es CSS?"]).toBeDefined();
    expect(persisted.state).not.toHaveProperty("selectedQuestion");
  });

  it("limita el historial de entrevistas a 20 entradas", () => {
    const { addInterviewResult } = useLearningStore.getState();
    for (let i = 0; i < 25; i++) {
      addInterviewResult({ date: `d${i}`, source: "Todo", totalQuestions: 1, selfScore: 50 });
    }
    expect(useLearningStore.getState().interviewHistory).toHaveLength(20);
    expect(useLearningStore.getState().interviewHistory[0].date).toBe("d24");
  });

  it("reiniciar el progreso borra dominadas, guardadas, repasos e historiales", () => {
    const state = useLearningStore.getState();
    state.toggleQuestionCompleted("q");
    state.toggleBookmark("q");
    state.reviewQuestion("q", "easy");
    state.addInterviewResult({ date: "d", source: "s", totalQuestions: 1, selfScore: 100 });
    state.resetProgress();

    const after = useLearningStore.getState();
    expect(after.completedQuestionIds).toEqual({});
    expect(after.bookmarkedQuestionIds).toEqual({});
    expect(after.reviews).toEqual({});
    expect(after.interviewHistory).toEqual([]);
  });

  it("la migración v0 → v1 conserva el progreso y descarta isDark", async () => {
    localStorage.setItem(
      "interview-frontend-storage",
      JSON.stringify({ version: 0, state: { isDark: true, completedQuestionIds: { "¿Qué es HTML?": true } } })
    );
    await useLearningStore.persist.rehydrate();
    const state = useLearningStore.getState() as unknown as Record<string, unknown>;
    expect(state.completedQuestionIds).toEqual({ "¿Qué es HTML?": true });
    expect(state).not.toHaveProperty("isDark");
  });
});
