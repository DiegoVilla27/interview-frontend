/**
 * Devuelve una copia barajada con Fisher-Yates: todas las permutaciones son
 * equiprobables (a diferencia de `sort(() => Math.random() - 0.5)`).
 */
export const shuffle = <T>(items: readonly T[], random: () => number = Math.random): T[] => {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};

/** Baraja las opciones de un quiz y recalcula el índice de la respuesta correcta. */
export const shuffleOptions = (
  options: readonly string[],
  correctIndex: number,
  random: () => number = Math.random
): { options: string[]; correctIndex: number } => {
  const order = shuffle(
    options.map((_, index) => index),
    random
  );
  return {
    options: order.map((index) => options[index]),
    correctIndex: order.indexOf(correctIndex)
  };
};
