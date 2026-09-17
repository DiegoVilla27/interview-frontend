import React, { useState, useEffect } from "react";
import {
  Trophy,
  CheckCircle2,
  XCircle,
  Clock,
  RotateCcw,
  Sparkles,
  ChevronRight,
  Flame,
  Award
} from "lucide-react";
import confetti from "canvas-confetti";
import { ISection } from "../../types";
import { Modal } from "../../components/ui/Modal";
import { Button } from "../../components/ui/Button";
import { ProgressBar } from "../../components/ui/ProgressBar";
import { Badge } from "../../components/ui/Badge";
import { useLearningStore } from "../../store/learningStore";

/**
 * Shuffles quiz options using Fisher-Yates and returns the
 * new options array along with the updated correctIndex.
 */
function shuffleOptions(
  options: string[],
  correctIndex: number
): { shuffledOptions: string[]; newCorrectIndex: number } {
  const indices = options.map((_, i) => i);

  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }

  const shuffledOptions = indices.map((idx) => options[idx]);
  const newCorrectIndex = indices.indexOf(correctIndex);

  return { shuffledOptions, newCorrectIndex };
}

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  sections: ISection[];
  initialModuleTitle?: string | null;
}

interface QuizQuestionItem {
  id: string;
  moduleTitle: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  level: string;
}

export const QuizModal: React.FC<QuizModalProps> = ({
  isOpen,
  onClose,
  sections,
  initialModuleTitle
}) => {
  const { addQuizResult } = useLearningStore();

  const [questions, setQuestions] = useState<QuizQuestionItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [userAnswers, setUserAnswers] = useState<{ selected: number; isCorrect: boolean }[]>([]);
  const [isFinished, setIsFinished] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(true);

  // Generate quiz questions pool
  const initQuiz = () => {
    const pool: QuizQuestionItem[] = [];

    // Collect questions with predefined quiz items or synthesized quizzes
    sections.forEach((section) => {
      if (initialModuleTitle && section.title !== initialModuleTitle) {
        return;
      }

      section.questions.forEach((q, idx) => {
        if (q.quiz) {
          const { shuffledOptions, newCorrectIndex } = shuffleOptions(
            q.quiz.options,
            q.quiz.correctIndex
          );

          pool.push({
            id: q.id || `${section.title}-${idx}`,
            moduleTitle: section.title,
            question: q.quiz.question,
            options: shuffledOptions,
            correctIndex: newCorrectIndex,
            explanation: q.quiz.explanation,
            level: q.level
          });
        } else {
          // Synthesize interactive quiz question from title & response
          const rawOptions = [
            q.response.slice(0, 160) + (q.response.length > 160 ? "..." : ""),
            "Es un mecanismo deprecado en HTML5 que no debe usarse en navegadores modernos.",
            "Es una directiva exclusiva de Node.js que no tiene efecto en el motor del navegador.",
            "No tiene relación con el frontend y solo aplica a bases de datos relacionales."
          ];

          const { shuffledOptions, newCorrectIndex } = shuffleOptions(rawOptions, 0);

          pool.push({
            id: q.id || `${section.title}-${idx}`,
            moduleTitle: section.title,
            question: `Respecto a "${q.title}", ¿cuál de las siguientes opciones es la afirmación correcta?`,
            options: shuffledOptions,
            correctIndex: newCorrectIndex,
            explanation: q.response,
            level: q.level
          });
        }
      });
    });

    // Shuffle and pick 20 questions
    const shuffled = [...pool].sort(() => 0.5 - Math.random()).slice(0, 20);
    setQuestions(shuffled);
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setUserAnswers([]);
    setIsFinished(false);
    setTimerSeconds(0);
    setIsTimerRunning(true);
  };

  useEffect(() => {
    if (isOpen) {
      initQuiz();
    }
  }, [isOpen, initialModuleTitle]);

  // Timer ticker
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isOpen && isTimerRunning && !isFinished) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isOpen, isTimerRunning, isFinished]);

  if (!isOpen || questions.length === 0) return null;

  const currentQ = questions[currentIndex];
  const progressPercent = Math.round((currentIndex / questions.length) * 100);

  const handleSelectOption = (idx: number) => {
    if (isAnswered) return;
    setSelectedOption(idx);
  };

  const handleConfirmAnswer = () => {
    if (selectedOption === null) return;
    const isCorrect = selectedOption === currentQ.correctIndex;
    setIsAnswered(true);
    setUserAnswers((prev) => [...prev, { selected: selectedOption, isCorrect }]);

    if (isCorrect) {
      confetti({ particleCount: 30, spread: 45, origin: { y: 0.8 } });
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      // Finished!
      setIsFinished(true);
      setIsTimerRunning(false);

      const correctCount = userAnswers.filter((a) => a.isCorrect).length;
      const percentage = Math.round((correctCount / questions.length) * 100);

      addQuizResult({
        date: new Date().toLocaleDateString(),
        moduleTitle: initialModuleTitle || "Simulador General",
        score: correctCount,
        totalQuestions: questions.length,
        percentage
      });

      if (percentage >= 70) {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 }
        });
      }
    }
  };

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const correctAnswersCount = userAnswers.filter((a) => a.isCorrect).length;
  const scorePercentage = Math.round((correctAnswersCount / questions.length) * 100);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      maxWidth="2xl"
      title={
        <div className="flex items-center justify-between w-full pr-6">
          <div className="flex items-center space-x-2">
            <Trophy className="w-5 h-5 text-amber-400" />
            <span className="font-bold text-base sm:text-lg">
              {initialModuleTitle
                ? `Quiz: ${initialModuleTitle}`
                : "Simulador de Entrevista Técnica"}
            </span>
          </div>

          <div className="flex items-center space-x-2 text-xs font-mono text-zinc-400 bg-zinc-800/80 px-2.5 py-1 rounded-full border border-zinc-700">
            <Clock className="w-3.5 h-3.5 text-indigo-400" />
            <span>{formatTimer(timerSeconds)}</span>
          </div>
        </div>
      }
    >
      {!isFinished ? (
        <div className="space-y-5">
          {/* Progress bar */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs text-zinc-400 font-medium">
              <span>
                Pregunta {currentIndex + 1} de {questions.length}
              </span>
              <span className="text-indigo-400 font-bold">{progressPercent}% completado</span>
            </div>
            <ProgressBar value={progressPercent} size="sm" showPercent={false} />
          </div>

          {/* Module tag & Level */}
          <div className="flex items-center space-x-2 text-xs">
            <span className="px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-medium">
              {currentQ.moduleTitle}
            </span>
            <Badge variant={currentQ.level as any}>{currentQ.level}</Badge>
          </div>

          {/* Question title */}
          <h3 className="text-base sm:text-lg font-bold text-zinc-100 leading-snug">
            {currentQ.question}
          </h3>

          {/* Options */}
          <div className="space-y-2.5">
            {currentQ.options.map((option, idx) => {
              const isSelected = selectedOption === idx;
              const isCorrect = idx === currentQ.correctIndex;

              let optionClasses =
                "w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm transition cursor-pointer flex items-start space-x-3 ";

              if (isAnswered) {
                if (isCorrect) {
                  optionClasses +=
                    "bg-emerald-950/40 border-emerald-500/80 text-emerald-200 font-semibold";
                } else if (isSelected && !isCorrect) {
                  optionClasses +=
                    "bg-rose-950/40 border-rose-500/80 text-rose-300 font-semibold";
                } else {
                  optionClasses += "border-zinc-800 text-zinc-500 opacity-40";
                }
              } else {
                if (isSelected) {
                  optionClasses +=
                    "bg-indigo-950/50 border-indigo-500 text-indigo-200 shadow-md font-semibold";
                } else {
                  optionClasses +=
                    "border-zinc-800 hover:border-zinc-700 bg-zinc-900/40 text-zinc-300 hover:text-white";
                }
              }

              return (
                <button
                  key={idx}
                  disabled={isAnswered}
                  onClick={() => handleSelectOption(idx)}
                  className={optionClasses}
                >
                  <span
                    className={`w-6 h-6 rounded-full border flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5 ${
                      isSelected
                        ? "border-indigo-400 bg-indigo-600 text-white"
                        : "border-zinc-700 text-zinc-400"
                    }`}
                  >
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="flex-1 leading-relaxed">{option}</span>
                  {isAnswered && isCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  )}
                  {isAnswered && isSelected && !isCorrect && (
                    <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation when answered */}
          {isAnswered && (
            <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 text-xs sm:text-sm text-zinc-300 space-y-1.5 animate-fade-in">
              <span className="font-bold text-indigo-400 uppercase tracking-wider block text-xs flex items-center space-x-1.5">
                <Sparkles className="w-4 h-4" />
                <span>Explicación del Concepto</span>
              </span>
              <p className="leading-relaxed">{currentQ.explanation}</p>
            </div>
          )}

          {/* Footer Actions */}
          <div className="flex items-center justify-end pt-2 border-t border-zinc-800/80 space-x-3">
            {!isAnswered ? (
              <Button
                variant="primary"
                size="md"
                disabled={selectedOption === null}
                onClick={handleConfirmAnswer}
              >
                Confirmar Respuesta
              </Button>
            ) : (
              <Button
                variant="primary"
                size="md"
                onClick={handleNext}
                icon={<ChevronRight className="w-4 h-4" />}
              >
                {currentIndex + 1 < questions.length ? "Siguiente Pregunta" : "Ver Resultados"}
              </Button>
            )}
          </div>
        </div>
      ) : (
        /* Results screen */
        <div className="text-center py-6 space-y-6">
          <div className="w-20 h-20 mx-auto rounded-full bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
            {scorePercentage >= 70 ? (
              <Award className="w-10 h-10 text-amber-400" />
            ) : (
              <Flame className="w-10 h-10 text-indigo-400" />
            )}
          </div>

          <div className="space-y-1">
            <h3 className="text-2xl font-bold text-zinc-100">
              {scorePercentage >= 90
                ? "¡Nivel Staff / Lead Engineer! 🚀"
                : scorePercentage >= 70
                ? "¡Excelente Preparación Técnica! 🎯"
                : "¡Buen Intento! A seguir repasando 💪"}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400">
              Tiempo total: <span className="font-mono text-zinc-200">{formatTimer(timerSeconds)}</span>
            </p>
          </div>

          {/* Score cards */}
          <div className="grid grid-cols-3 gap-3 max-w-md mx-auto">
            <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
              <span className="block text-2xl font-mono font-bold text-indigo-400">
                {scorePercentage}%
              </span>
              <span className="text-[11px] text-zinc-400">Puntuación</span>
            </div>
            <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
              <span className="block text-2xl font-mono font-bold text-emerald-400">
                {correctAnswersCount}
              </span>
              <span className="text-[11px] text-zinc-400">Correctas</span>
            </div>
            <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
              <span className="block text-2xl font-mono font-bold text-rose-400">
                {questions.length - correctAnswersCount}
              </span>
              <span className="text-[11px] text-zinc-400">A Mejorar</span>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-3 pt-4">
            <Button
              variant="outline"
              size="md"
              onClick={initQuiz}
              icon={<RotateCcw className="w-4 h-4" />}
            >
              Reintentar Quiz
            </Button>
            <Button variant="primary" size="md" onClick={onClose}>
              Volver al Dashboard
            </Button>
          </div>
        </div>
      )}
    </Modal>
  );
};
