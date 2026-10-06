import React, { useEffect, useRef } from "react";
import {
  Search,
  Trophy,
  Sparkles,
  Bookmark,
  Layers,
  Flame,
  BarChart3,
  BookOpen,
  Mic,
  Route
} from "lucide-react";
import { QuestionLevel, TActiveView } from "../../types";
import { ProgressBar } from "../../components/ui/ProgressBar";
import { Button } from "../../components/ui/Button";
import { useLearningStore } from "../../store/learningStore";

const VIEW_TABS: { view: TActiveView; label: string; Icon: typeof Layers }[] = [
  { view: "roadmap", label: "Roadmap & Módulos", Icon: Layers },
  { view: "paths", label: "Rutas", Icon: Route },
  { view: "interview", label: "Entrevista", Icon: Mic },
  { view: "flashcards", label: "Flashcards", Icon: BookOpen },
  { view: "bookmarks", label: "Guardadas", Icon: Bookmark },
  { view: "stats", label: "Estadísticas", Icon: BarChart3 }
];

interface DashboardHeaderProps {
  totalQuestions: number;
  onLaunchQuiz: () => void;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  totalQuestions,
  onLaunchQuiz
}) => {
  const {
    activeView,
    setActiveView,
    searchQuery,
    setSearchQuery,
    levelFilter,
    setLevelFilter,
    completedQuestionIds,
    bookmarkedQuestionIds,
    quizHistory,
    reviews
  } = useLearningStore();

  const searchInputRef = useRef<HTMLInputElement>(null);

  // Global Cmd+K keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const completedCount = Object.keys(completedQuestionIds).length;
  const bookmarkedCount = Object.keys(bookmarkedQuestionIds).length;
  const now = Date.now();
  const dueReviewsCount = Object.values(reviews).filter((review) => review.dueAt <= now).length;
  const masteryPercentage =
    totalQuestions > 0 ? Math.round((completedCount / totalQuestions) * 100) : 0;

  // Average quiz score
  const avgQuizScore =
    quizHistory.length > 0
      ? Math.round(
          quizHistory.reduce((acc, curr) => acc + curr.percentage, 0) /
            quizHistory.length
        )
      : 0;

  const levels: (QuestionLevel | "todos")[] = [
    "todos",
    "basico",
    "medio",
    "avanzado",
    "experto"
  ];

  return (
    <header className="space-y-6 pt-2 pb-6 border-b border-zinc-800/80">
      {/* Top Banner & Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
        <div className="md:col-span-2 space-y-2">
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-400 border border-indigo-500/30">
              Staff & Senior Prep
            </span>
            <span className="text-xs text-zinc-400 font-mono">21 Módulos W3C & Ecosistema</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Frontend Mastery Roadmap 🚀
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            Domina las preguntas de entrevista técnica más exigentes a nivel global con teoría profunda, ejemplos de código y diagramas visuales minimalistas.
          </p>
        </div>

        {/* Global Mastery Metric Card */}
        <div className="p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 space-y-2.5 shadow-lg">
          <div className="flex items-center justify-between text-xs">
            <span className="font-semibold text-zinc-300 flex items-center space-x-1.5">
              <Trophy className="w-4 h-4 text-amber-400" />
              <span>Maestría Frontend</span>
            </span>
            <span className="font-mono text-indigo-400 font-bold text-sm">
              {completedCount}/{totalQuestions}
            </span>
          </div>
          <ProgressBar value={masteryPercentage} size="md" />
          <div className="flex justify-between text-[11px] text-zinc-400 font-mono">
            <span>{masteryPercentage}% completado</span>
            <span>
              {totalQuestions - completedCount} restantes
            </span>
          </div>
        </div>

        {/* Quick Launch & Quiz Precision */}
        <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-950/40 to-purple-950/40 border border-indigo-500/30 space-y-3 flex flex-col justify-between shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1.5 text-xs text-indigo-300 font-semibold">
              <Flame className="w-4 h-4 text-indigo-400" />
              <span>Quiz tipo test</span>
            </div>
            {quizHistory.length > 0 && (
              <span className="text-xs font-mono font-bold text-emerald-400">
                {avgQuizScore}% éxito
              </span>
            )}
          </div>
          <Button
            variant="primary"
            size="sm"
            onClick={onLaunchQuiz}
            icon={<Sparkles className="w-4 h-4" />}
            className="w-full"
          >
            Quiz rápido (20 preguntas)
          </Button>
        </div>
      </div>

      {/* Navigation View Switcher & Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
        {/* View Switcher Tabs */}
        <div className="flex space-x-1 p-1 rounded-xl bg-zinc-900 border border-zinc-800 w-full sm:w-auto overflow-x-auto custom-scrollbar">
          {VIEW_TABS.map(({ view, label, Icon }) => (
            <button
              key={view}
              onClick={() => setActiveView(view)}
              aria-current={activeView === view ? "page" : undefined}
              className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer whitespace-nowrap ${
                activeView === view ? "bg-indigo-600 text-white shadow" : "text-zinc-400 hover:text-white"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{view === "bookmarks" ? `${label} (${bookmarkedCount})` : label}</span>
              {view === "flashcards" && dueReviewsCount > 0 && (
                <span
                  className="px-1.5 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-bold"
                  title="Tarjetas pendientes de repaso"
                >
                  {dueReviewsCount}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Global Search Bar with keyboard shortcut */}
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            ref={searchInputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar concepto o pregunta... (⌘K)"
            className="w-full pl-9 pr-14 py-2 text-xs rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
          />
          <kbd className="hidden sm:inline-block absolute right-2.5 top-1/2 -translate-y-1/2 px-1.5 py-0.5 text-[10px] font-mono text-zinc-400 bg-zinc-800 border border-zinc-700 rounded">
            ⌘K
          </kbd>
        </div>
      </div>

      {/* Difficulty Level Filter Chips */}
      {activeView === "roadmap" && (
        <div className="flex items-center space-x-2 overflow-x-auto pb-1 text-xs">
          <span className="text-zinc-500 font-medium mr-1 text-[11px] uppercase tracking-wider">
            Dificultad:
          </span>
          {levels.map((lvl) => {
            const isSelected = levelFilter === lvl;

            const getLevelClasses = () => {
              switch (lvl) {
                case "basico":
                  return isSelected
                    ? "bg-emerald-500/25 text-emerald-300 border-emerald-500 shadow-sm shadow-emerald-500/20 font-bold"
                    : "bg-emerald-950/20 text-emerald-400/80 border-emerald-500/30 hover:bg-emerald-950/40 hover:text-emerald-300";
                case "medio":
                  return isSelected
                    ? "bg-blue-500/25 text-blue-300 border-blue-500 shadow-sm shadow-blue-500/20 font-bold"
                    : "bg-blue-950/20 text-blue-400/80 border-blue-500/30 hover:bg-blue-950/40 hover:text-blue-300";
                case "avanzado":
                  return isSelected
                    ? "bg-purple-500/25 text-purple-300 border-purple-500 shadow-sm shadow-purple-500/20 font-bold"
                    : "bg-purple-950/20 text-purple-400/80 border-purple-500/30 hover:bg-purple-950/40 hover:text-purple-300";
                case "experto":
                  return isSelected
                    ? "bg-rose-500/25 text-rose-300 border-rose-500 shadow-sm shadow-rose-500/20 font-bold"
                    : "bg-rose-950/20 text-rose-400/80 border-rose-500/30 hover:bg-rose-950/40 hover:text-rose-300";
                default:
                  return isSelected
                    ? "bg-indigo-600 text-white border-indigo-500 shadow-sm shadow-indigo-500/30 font-bold"
                    : "bg-zinc-900/60 text-zinc-400 border-zinc-800 hover:text-zinc-200";
              }
            };

            return (
              <button
                key={lvl}
                onClick={() => setLevelFilter(lvl)}
                className={`px-3 py-1.5 rounded-full font-semibold border transition cursor-pointer capitalize whitespace-nowrap text-xs flex items-center space-x-1.5 ${getLevelClasses()}`}
              >
                {lvl !== "todos" && (
                  <span
                    className={`w-2 h-2 rounded-full ${
                      lvl === "basico"
                        ? "bg-emerald-400"
                        : lvl === "medio"
                        ? "bg-blue-400"
                        : lvl === "avanzado"
                        ? "bg-purple-400"
                        : "bg-rose-400"
                    }`}
                  />
                )}
                <span>{lvl === "todos" ? "Todos los niveles" : lvl}</span>
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
