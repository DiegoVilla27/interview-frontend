import React, { useState } from "react";
import {
  Sparkles,
  RotateCw,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Bookmark,
  Shuffle
} from "lucide-react";
import confetti from "canvas-confetti";
import { IQuestion, ISection } from "../../types";
import { Badge } from "../../components/ui/Badge";
import { Button } from "../../components/ui/Button";
import { useLearningStore } from "../../store/learningStore";

interface FlashcardViewProps {
  sections: ISection[];
}

export const FlashcardView: React.FC<FlashcardViewProps> = ({ sections }) => {
  const {
    isQuestionCompleted,
    toggleQuestionCompleted,
    isQuestionBookmarked,
    toggleBookmark
  } = useLearningStore();

  // Aggregate all questions with their module title
  const allCards: { question: IQuestion; moduleTitle: string }[] = [];
  sections.forEach((section) => {
    section.questions.forEach((q) => {
      allCards.push({ question: q, moduleTitle: section.title });
    });
  });

  const [cards, setCards] = useState(allCards);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  if (cards.length === 0) return null;

  const currentItem = cards[currentIndex];
  const q = currentItem.question;
  const isCompleted = isQuestionCompleted(q.title);
  const isBookmarked = isQuestionBookmarked(q.title);

  const handleShuffle = () => {
    const shuffled = [...cards].sort(() => 0.5 - Math.random());
    setCards(shuffled);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const handleToggleCompleted = () => {
    if (!isCompleted) {
      confetti({ particleCount: 30, spread: 50 });
    }
    toggleQuestionCompleted(q.title);
  };

  return (
    <div className="max-w-2xl mx-auto py-6 px-4 space-y-6">
      {/* Top bar controls */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold flex items-center space-x-2">
            <Sparkles className="w-5 h-5 text-indigo-400" />
            <span>Flashcards: Repaso Activo</span>
          </h2>
          <p className="text-xs text-zinc-400">
            Intenta responder mentalmente antes de voltear la tarjeta.
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleShuffle}
            icon={<Shuffle className="w-3.5 h-3.5" />}
          >
            Barajar
          </Button>
        </div>
      </div>

      {/* Progress counter */}
      <div className="flex justify-between items-center text-xs text-zinc-400 font-medium">
        <span>
          Tarjeta {currentIndex + 1} de {cards.length}
        </span>
        <span className="text-indigo-400 font-mono">
          {Math.round(((currentIndex + 1) / cards.length) * 100)}%
        </span>
      </div>

      {/* 3D Flip Card Container */}
      <div
        className="w-full min-h-[340px] cursor-pointer perspective-1000"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div
          className={`relative w-full min-h-[340px] rounded-2xl p-6 sm:p-8 border border-zinc-700/60 shadow-xl transition-all duration-300 flex flex-col justify-between ${
            isFlipped
              ? "bg-zinc-900 border-indigo-500/50"
              : "bg-zinc-900/70 hover:border-zinc-600"
          }`}
        >
          {/* Card Top Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                {currentItem.moduleTitle}
              </span>
              <Badge variant={q.level}>{q.level}</Badge>
            </div>

            <div className="flex items-center space-x-2 text-xs text-zinc-400 font-mono">
              <RotateCw className="w-3.5 h-3.5" />
              <span>{isFlipped ? "Ver Pregunta" : "Girar Respuesta"}</span>
            </div>
          </div>

          {/* Card Content Body */}
          <div className="my-auto py-6">
            {!isFlipped ? (
              <div className="space-y-4 text-center">
                <span className="text-xs uppercase tracking-wider text-indigo-400 font-bold block">
                  Pregunta de Entrevista
                </span>
                <h3 className="text-xl sm:text-2xl font-bold leading-relaxed text-zinc-100">
                  {q.title}
                </h3>
              </div>
            ) : (
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-wider text-emerald-400 font-bold block flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Respuesta Clave</span>
                </span>
                <p className="text-zinc-200 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                  {q.response}
                </p>
                {q.codeExample && (
                  <div className="p-3 rounded-lg bg-black/40 border border-zinc-800 font-mono text-xs text-indigo-300">
                    <code>{q.codeExample.code.slice(0, 150)}...</code>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Card Footer Actions */}
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
              onClick={handleToggleCompleted}
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

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          size="md"
          onClick={handlePrev}
          icon={<ChevronLeft className="w-4 h-4" />}
        >
          Anterior
        </Button>

        <span className="text-xs text-zinc-500">
          Usa las flechas o haz clic en la tarjeta
        </span>

        <Button
          variant="primary"
          size="md"
          onClick={handleNext}
          icon={<ChevronRight className="w-4 h-4" />}
        >
          Siguiente
        </Button>
      </div>
    </div>
  );
};
