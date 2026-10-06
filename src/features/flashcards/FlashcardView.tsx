import React, { use, useEffect, useState } from "react";
import {
  Sparkles,
  RotateCw,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Bookmark,
  Shuffle,
  Brain,
  Layers,
  PartyPopper
} from "lucide-react";
import confetti from "canvas-confetti";
import { IQuestion, TModuleId } from "../../types";
import { loadAllContent, moduleCatalog } from "../../content";
import { Badge } from "../../components/ui/Badge";
import { Button } from "../../components/ui/Button";
import { useLearningStore } from "../../store/learningStore";
import { shuffle } from "../../utils/shuffle.utils";
import {
  buildReviewQueue,
  formatNextInterval,
  TReviewGrade
} from "./spaced-repetition";

/** Tarjetas nuevas que se introducen como máximo en cada sesión de repaso. */
const NEW_CARDS_PER_SESSION = 15;

interface ICard {
  title: string;
  question: IQuestion;
  moduleId: TModuleId;
  moduleTitle: string;
}

type TMode = "review" | "explore";

const GRADES: { grade: TReviewGrade; label: string; key: string; className: string }[] = [
  { grade: "again", label: "Otra vez", key: "1", className: "border-rose-500/40 text-rose-300 hover:bg-rose-950/40" },
  { grade: "hard", label: "Difícil", key: "2", className: "border-amber-500/40 text-amber-300 hover:bg-amber-950/40" },
  { grade: "good", label: "Bien", key: "3", className: "border-emerald-500/40 text-emerald-300 hover:bg-emerald-950/40" },
  { grade: "easy", label: "Fácil", key: "4", className: "border-sky-500/40 text-sky-300 hover:bg-sky-950/40" }
];

export const FlashcardView: React.FC = () => {
  const sections = use(loadAllContent());
  const [mode, setMode] = useState<TMode>("review");
  const [moduleFilter, setModuleFilter] = useState<TModuleId | "all">("all");

  const allCards: ICard[] = sections.flatMap((section, index) =>
    section.questions.map((question) => ({
      title: question.title,
      question,
      moduleId: moduleCatalog[index].id,
      moduleTitle: section.title
    }))
  );
  const cards = moduleFilter === "all" ? allCards : allCards.filter((card) => card.moduleId === moduleFilter);

  return (
    <div className="max-w-2xl mx-auto py-6 px-4 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-bold flex items-center space-x-2">
            <Sparkles className="w-5 h-5 text-indigo-400" />
            <span>Flashcards</span>
          </h2>
          <p className="text-xs text-zinc-400">
            {mode === "review"
              ? "Repetición espaciada: repasas cada tarjeta justo antes de olvidarla."
              : "Navega libremente por todas las tarjetas."}
          </p>
        </div>

        <select
          value={moduleFilter}
          onChange={(e) => setModuleFilter(e.target.value as TModuleId | "all")}
          className="px-3 py-2 text-xs rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-200 focus:outline-none focus:border-indigo-500"
          aria-label="Filtrar por módulo"
        >
          <option value="all">Todos los módulos</option>
          {sections.map((section, index) => (
            <option key={moduleCatalog[index].id} value={moduleCatalog[index].id}>
              {section.title}
            </option>
          ))}
        </select>
      </div>

      <div className="flex space-x-1 p-1 rounded-xl bg-zinc-900 border border-zinc-800 w-fit" role="tablist">
        {([
          ["review", "Repaso del día", Brain],
          ["explore", "Explorar todas", Layers]
        ] as const).map(([id, label, Icon]) => (
          <button
            key={id}
            role="tab"
            aria-selected={mode === id}
            onClick={() => setMode(id)}
            className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
              mode === id ? "bg-indigo-600 text-white shadow" : "text-zinc-400 hover:text-white"
            }`}
          >
            <Icon className="w-3.5 h-3.5" />
            <span>{label}</span>
          </button>
        ))}
      </div>

      {mode === "review" ? (
        <ReviewSession key={moduleFilter} cards={cards} onExplore={() => setMode("explore")} />
      ) : (
        <ExploreDeck key={moduleFilter} cards={cards} />
      )}
    </div>
  );
};

const ReviewSession: React.FC<{ cards: ICard[]; onExplore: () => void }> = ({ cards, onExplore }) => {
  const reviews = useLearningStore((state) => state.reviews);
  const reviewQuestion = useLearningStore((state) => state.reviewQuestion);

  // La cola se fija al empezar la sesión; las tarjetas falladas se reencolan al final
  const [queue, setQueue] = useState(() =>
    buildReviewQueue(cards, useLearningStore.getState().reviews, Date.now(), NEW_CARDS_PER_SESSION)
  );
  const [position, setPosition] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [reviewedCount, setReviewedCount] = useState(0);

  const current = queue[position];

  const handleGrade = (grade: TReviewGrade) => {
    if (!current) return;
    reviewQuestion(current.title, grade);
    setReviewedCount((count) => count + 1);
    if (grade === "again") setQueue((prev) => [...prev, current]);
    setPosition((prev) => prev + 1);
    setIsFlipped(false);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!current || e.target instanceof HTMLSelectElement) return;
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        setIsFlipped((flipped) => !flipped);
      }
      const grade = GRADES.find((g) => g.key === e.key);
      if (grade && isFlipped) handleGrade(grade.grade);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  useEffect(() => {
    if (!current && reviewedCount > 0) confetti({ particleCount: 80, spread: 70 });
  }, [current, reviewedCount]);

  if (!current) {
    const upcoming = cards
      .map((card) => reviews[card.title]?.dueAt)
      .filter((dueAt): dueAt is number => dueAt !== undefined)
      .sort((a, b) => a - b)[0];

    return (
      <div className="py-12 text-center space-y-4 rounded-2xl border border-zinc-800 bg-zinc-900/60">
        <PartyPopper className="w-10 h-10 mx-auto text-amber-400" />
        <div className="space-y-1">
          <h3 className="text-lg font-bold text-zinc-100">
            {reviewedCount > 0 ? `¡Repaso completado! (${reviewedCount} respuestas)` : "No tienes tarjetas pendientes"}
          </h3>
          {upcoming && (
            <p className="text-xs text-zinc-400">
              Próximo repaso: {new Date(upcoming).toLocaleString("es", { dateStyle: "medium", timeStyle: "short" })}
            </p>
          )}
        </div>
        <Button variant="outline" size="sm" onClick={onExplore} icon={<Layers className="w-3.5 h-3.5" />}>
          Explorar todas las tarjetas
        </Button>
      </div>
    );
  }

  const isNew = !reviews[current.title];
  const remaining = queue.length - position;

  return (
    <div className="space-y-5">
      <div className="flex justify-between items-center text-xs text-zinc-400 font-medium">
        <span>
          {remaining} pendiente{remaining === 1 ? "" : "s"} en esta sesión
        </span>
        {isNew && (
          <span className="px-2 py-0.5 rounded-full bg-sky-500/10 text-sky-300 border border-sky-500/30 font-semibold">
            Nueva
          </span>
        )}
      </div>

      <FlashcardFace card={current} isFlipped={isFlipped} onFlip={() => setIsFlipped((f) => !f)} />

      {isFlipped ? (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2" aria-label="¿Qué tal lo recordabas?">
          {GRADES.map(({ grade, label, key, className }) => (
            <button
              key={grade}
              onClick={() => handleGrade(grade)}
              className={`p-2.5 rounded-xl border bg-zinc-900/60 text-xs font-semibold transition cursor-pointer ${className}`}
            >
              <span className="block">{label}</span>
              <span className="block font-mono text-[10px] opacity-70">
                {formatNextInterval(reviews[current.title], grade)} · {key}
              </span>
            </button>
          ))}
        </div>
      ) : (
        <p className="text-center text-xs text-zinc-500">
          Responde mentalmente y gira la tarjeta (clic o Espacio). Después califícate con 1–4.
        </p>
      )}
    </div>
  );
};

const ExploreDeck: React.FC<{ cards: ICard[] }> = ({ cards: initialCards }) => {
  const [cards, setCards] = useState(initialCards);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  if (cards.length === 0) return null;

  return (
    <div className="space-y-5">
      <div className="flex justify-between items-center text-xs text-zinc-400 font-medium">
        <span>
          Tarjeta {currentIndex + 1} de {cards.length}
        </span>
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            setCards(shuffle(cards));
            setCurrentIndex(0);
            setIsFlipped(false);
          }}
          icon={<Shuffle className="w-3.5 h-3.5" />}
        >
          Barajar
        </Button>
      </div>

      <FlashcardFace card={cards[currentIndex]} isFlipped={isFlipped} onFlip={() => setIsFlipped((f) => !f)} />

      <div className="flex items-center justify-between">
        <Button variant="outline" size="md" onClick={handlePrev} icon={<ChevronLeft className="w-4 h-4" />}>
          Anterior
        </Button>
        <span className="text-xs text-zinc-500">Usa las flechas ← → o haz clic en la tarjeta</span>
        <Button variant="primary" size="md" onClick={handleNext} icon={<ChevronRight className="w-4 h-4" />}>
          Siguiente
        </Button>
      </div>
    </div>
  );
};

const FlashcardFace: React.FC<{ card: ICard; isFlipped: boolean; onFlip: () => void }> = ({
  card,
  isFlipped,
  onFlip
}) => {
  const { isQuestionCompleted, toggleQuestionCompleted, isQuestionBookmarked, toggleBookmark } =
    useLearningStore();
  const q = card.question;
  const isCompleted = isQuestionCompleted(q.title);
  const isBookmarked = isQuestionBookmarked(q.title);

  return (
    <div className="w-full min-h-[340px] cursor-pointer perspective-1000" onClick={onFlip}>
      <div
        className={`relative w-full min-h-[340px] rounded-2xl p-6 sm:p-8 border border-zinc-700/60 shadow-xl transition-all duration-300 flex flex-col justify-between ${
          isFlipped ? "bg-zinc-900 border-indigo-500/50" : "bg-zinc-900/70 hover:border-zinc-600"
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              {card.moduleTitle}
            </span>
            <Badge variant={q.level}>{q.level}</Badge>
          </div>

          <div className="flex items-center space-x-2 text-xs text-zinc-400 font-mono">
            <RotateCw className="w-3.5 h-3.5" />
            <span>{isFlipped ? "Ver Pregunta" : "Girar Respuesta"}</span>
          </div>
        </div>

        <div className="my-auto py-6">
          {!isFlipped ? (
            <div className="space-y-4 text-center">
              <span className="text-xs uppercase tracking-wider text-indigo-400 font-bold block">
                Pregunta de Entrevista
              </span>
              <h3 className="text-xl sm:text-2xl font-bold leading-relaxed text-zinc-100">{q.title}</h3>
            </div>
          ) : (
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-wider text-emerald-400 font-bold flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>Respuesta Clave</span>
              </span>
              <p className="text-zinc-200 text-sm sm:text-base leading-relaxed whitespace-pre-line">{q.response}</p>
              {q.codeExample && (
                <div className="p-3 rounded-lg bg-black/40 border border-zinc-800 font-mono text-xs text-indigo-300">
                  <code>{q.codeExample.code.slice(0, 150)}...</code>
                </div>
              )}
            </div>
          )}
        </div>

        <div
          className="flex items-center justify-between pt-4 border-t border-zinc-800 text-xs text-zinc-400"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => toggleBookmark(q.title)}
            className={`flex items-center space-x-1.5 hover:text-white transition cursor-pointer ${
              isBookmarked ? "text-amber-400 font-semibold" : ""
            }`}
          >
            <Bookmark className="w-4 h-4" fill={isBookmarked ? "currentColor" : "none"} />
            <span>{isBookmarked ? "Guardada" : "Guardar"}</span>
          </button>

          <button
            onClick={() => {
              if (!isCompleted) confetti({ particleCount: 30, spread: 50 });
              toggleQuestionCompleted(q.title);
            }}
            className={`flex items-center space-x-1.5 hover:text-white transition cursor-pointer ${
              isCompleted ? "text-emerald-400 font-semibold" : ""
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>{isCompleted ? "Dominada" : "Marcar Dominada"}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
