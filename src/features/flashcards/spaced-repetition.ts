/**
 * Planificador de repetición espaciada basado en SM-2 (el algoritmo de Anki),
 * con cuatro respuestas. Es una función pura para poder testearla con fechas fijas.
 */

export type TReviewGrade = "again" | "hard" | "good" | "easy";

export interface IReviewState {
  /** Factor de facilidad: multiplica el intervalo en cada acierto (mínimo 1.3). */
  ease: number;
  /** Intervalo actual en días (0 mientras la tarjeta está en aprendizaje). */
  intervalDays: number;
  /** Aciertos consecutivos desde el último fallo. */
  repetitions: number;
  lapses: number;
  /** Timestamp (ms) a partir del cual la tarjeta vuelve a estar pendiente. */
  dueAt: number;
  lastReviewedAt: number;
}

export const DAY_MS = 24 * 60 * 60 * 1000;
export const INITIAL_EASE = 2.5;
const MIN_EASE = 1.3;
const RELEARN_DELAY_MS = 10 * 60 * 1000;

const clampEase = (ease: number) => Math.max(MIN_EASE, Math.round(ease * 100) / 100);

/** Calcula el nuevo estado de una tarjeta tras responderla. */
export const scheduleReview = (
  previous: IReviewState | undefined,
  grade: TReviewGrade,
  now: number
): IReviewState => {
  const ease = previous?.ease ?? INITIAL_EASE;
  const repetitions = previous?.repetitions ?? 0;
  const intervalDays = previous?.intervalDays ?? 0;
  const lapses = previous?.lapses ?? 0;

  if (grade === "again") {
    return {
      ease: clampEase(ease - 0.2),
      intervalDays: 0,
      repetitions: 0,
      lapses: previous ? lapses + 1 : 0,
      dueAt: now + RELEARN_DELAY_MS,
      lastReviewedAt: now
    };
  }

  let nextInterval: number;
  let nextEase = ease;

  if (grade === "hard") {
    nextInterval = repetitions === 0 ? 1 : Math.max(intervalDays + 1, Math.round(intervalDays * 1.2));
    nextEase = ease - 0.15;
  } else if (repetitions === 0) {
    nextInterval = grade === "easy" ? 4 : 1;
  } else if (repetitions === 1) {
    nextInterval = grade === "easy" ? 8 : 6;
  } else {
    nextInterval = Math.round(intervalDays * ease * (grade === "easy" ? 1.3 : 1));
  }

  if (grade === "easy") nextEase = ease + 0.15;

  return {
    ease: clampEase(nextEase),
    intervalDays: nextInterval,
    repetitions: repetitions + 1,
    lapses,
    dueAt: now + nextInterval * DAY_MS,
    lastReviewedAt: now
  };
};

export const isDue = (state: IReviewState | undefined, now: number): boolean =>
  state !== undefined && state.dueAt <= now;

/** Texto corto del próximo intervalo para mostrar en cada botón ("10 min", "6 d"...). */
export const formatNextInterval = (previous: IReviewState | undefined, grade: TReviewGrade): string => {
  const next = scheduleReview(previous, grade, 0);
  if (next.intervalDays === 0) return "10 min";
  if (next.intervalDays < 30) return `${next.intervalDays} d`;
  if (next.intervalDays < 365) return `${Math.round(next.intervalDays / 30)} m`;
  return `${(next.intervalDays / 365).toFixed(1)} a`;
};

/**
 * Cola de repaso: primero las tarjetas vencidas (las más atrasadas antes) y después
 * hasta `newLimit` tarjetas nunca vistas, respetando el orden del temario.
 */
export const buildReviewQueue = <T extends { title: string }>(
  cards: readonly T[],
  reviews: Readonly<Record<string, IReviewState>>,
  now: number,
  newLimit: number
): T[] => {
  const due = cards
    .filter((card) => isDue(reviews[card.title], now))
    .sort((a, b) => reviews[a.title].dueAt - reviews[b.title].dueAt);
  const fresh = cards.filter((card) => !reviews[card.title]).slice(0, newLimit);
  return [...due, ...fresh];
};
