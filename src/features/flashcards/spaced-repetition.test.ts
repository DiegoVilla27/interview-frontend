import { describe, expect, it } from "vitest";
import {
  buildReviewQueue,
  DAY_MS,
  formatNextInterval,
  INITIAL_EASE,
  IReviewState,
  scheduleReview
} from "./spaced-repetition";

const NOW = Date.UTC(2026, 9, 6);

describe("scheduleReview", () => {
  it("una tarjeta nueva respondida 'Bien' vuelve en 1 día y luego en 6", () => {
    const first = scheduleReview(undefined, "good", NOW);
    expect(first).toMatchObject({ intervalDays: 1, repetitions: 1, ease: INITIAL_EASE, dueAt: NOW + DAY_MS });

    const second = scheduleReview(first, "good", NOW + DAY_MS);
    expect(second.intervalDays).toBe(6);

    const third = scheduleReview(second, "good", NOW + 7 * DAY_MS);
    expect(third.intervalDays).toBe(Math.round(6 * INITIAL_EASE));
  });

  it("'Fácil' acelera el intervalo y sube la facilidad", () => {
    const state = scheduleReview(undefined, "easy", NOW);
    expect(state.intervalDays).toBe(4);
    expect(state.ease).toBeGreaterThan(INITIAL_EASE);
  });

  it("'Otra vez' reinicia la tarjeta, cuenta un fallo y la reprograma en 10 minutos", () => {
    const learned = scheduleReview(scheduleReview(undefined, "good", NOW), "good", NOW);
    const lapsed = scheduleReview(learned, "again", NOW);
    expect(lapsed).toMatchObject({ intervalDays: 0, repetitions: 0, lapses: 1 });
    expect(lapsed.dueAt - NOW).toBe(10 * 60 * 1000);
    expect(lapsed.ease).toBeLessThan(learned.ease);
  });

  it("la facilidad nunca baja de 1.3", () => {
    let state: IReviewState | undefined;
    for (let i = 0; i < 20; i++) state = scheduleReview(state, "again", NOW);
    expect(state?.ease).toBe(1.3);
  });
});

describe("formatNextInterval", () => {
  it("muestra el intervalo de cada botón", () => {
    expect(formatNextInterval(undefined, "again")).toBe("10 min");
    expect(formatNextInterval(undefined, "good")).toBe("1 d");
    expect(formatNextInterval({ ...scheduleReview(undefined, "good", 0), intervalDays: 40, repetitions: 5 }, "good")).toBe("3 m");
  });
});

describe("buildReviewQueue", () => {
  const cards = ["a", "b", "c", "d", "e"].map((title) => ({ title }));

  it("pone primero las vencidas (las más atrasadas antes) y luego nuevas hasta el límite", () => {
    const reviews: Record<string, IReviewState> = {
      a: { ...scheduleReview(undefined, "good", 0), dueAt: NOW - 1000 },
      b: { ...scheduleReview(undefined, "good", 0), dueAt: NOW + DAY_MS },
      c: { ...scheduleReview(undefined, "good", 0), dueAt: NOW - DAY_MS }
    };
    const queue = buildReviewQueue(cards, reviews, NOW, 1);
    expect(queue.map((card) => card.title)).toEqual(["c", "a", "d"]);
  });
});
