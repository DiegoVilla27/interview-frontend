import { describe, expect, it } from "vitest";
import { shuffle, shuffleOptions } from "./shuffle.utils";

/** Generador determinista para que los tests sean reproducibles. */
const seeded = (seed: number) => () => {
  seed = (seed * 16807) % 2147483647;
  return (seed - 1) / 2147483646;
};

describe("shuffle", () => {
  it("devuelve una permutación sin mutar el original", () => {
    const original = [1, 2, 3, 4, 5];
    const result = shuffle(original, seeded(42));
    expect(original).toEqual([1, 2, 3, 4, 5]);
    expect([...result].sort()).toEqual(original);
  });

  it("produce todas las permutaciones con frecuencias similares (sin sesgo)", () => {
    const counts = new Map<string, number>();
    const random = seeded(7);
    const runs = 24000;
    for (let i = 0; i < runs; i++) {
      const key = shuffle(["a", "b", "c"], random).join("");
      counts.set(key, (counts.get(key) ?? 0) + 1);
    }
    expect(counts.size).toBe(6);
    for (const count of counts.values()) {
      expect(count / runs).toBeGreaterThan(1 / 6 - 0.02);
      expect(count / runs).toBeLessThan(1 / 6 + 0.02);
    }
  });
});

describe("shuffleOptions", () => {
  it("sigue apuntando a la opción correcta tras barajar", () => {
    const options = ["A", "B", "C", "D"];
    for (let seed = 1; seed < 50; seed++) {
      const result = shuffleOptions(options, 2, seeded(seed));
      expect(result.options[result.correctIndex]).toBe("C");
    }
  });
});
