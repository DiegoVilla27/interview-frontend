import React from "react";
import {
  Trophy,
  BarChart2,
  CheckCircle2,
  Calendar,
  RotateCcw,
  Target,
  Award
} from "lucide-react";
import { ISectionSummary, TCategory } from "../../types";
import { ProgressBar } from "../../components/ui/ProgressBar";
import { Button } from "../../components/ui/Button";
import { useLearningStore } from "../../store/learningStore";

interface StatsViewProps {
  sections: ISectionSummary[];
}

export const StatsView: React.FC<StatsViewProps> = ({ sections }) => {
  const {
    completedQuestionIds,
    bookmarkedQuestionIds,
    quizHistory,
    resetProgress
  } = useLearningStore();

  let totalQuestions = 0;
  const categoryStats: Record<TCategory, { total: number; completed: number }> = {
    fundamentos: { total: 0, completed: 0 },
    "javascript-typescript": { total: 0, completed: 0 },
    frameworks: { total: 0, completed: 0 },
    "arquitectura-ops": { total: 0, completed: 0 }
  };

  sections.forEach((sec) => {
    const cat = sec.category;
    sec.questions.forEach((q) => {
      totalQuestions++;
      categoryStats[cat].total++;
      if (completedQuestionIds[q.title]) {
        categoryStats[cat].completed++;
      }
    });
  });

  const completedTotal = Object.keys(completedQuestionIds).length;
  const totalPercentage =
    totalQuestions > 0 ? Math.round((completedTotal / totalQuestions) * 100) : 0;

  const categoryLabels: Record<TCategory, string> = {
    fundamentos: "🌐 Fundamentos Web & Web Components",
    "javascript-typescript": "⚡ JavaScript & TypeScript Core",
    frameworks: "⚛️ Frameworks UI & Ecosistema",
    "arquitectura-ops": "🛠️ Arquitectura, Testing & DevOps"
  };

  const handleReset = () => {
    if (
      window.confirm(
        "¿Estás seguro de que deseas reiniciar todo tu progreso y resultados de quizzes?"
      )
    ) {
      resetProgress();
    }
  };

  return (
    <div className="space-y-8 py-4 max-w-4xl mx-auto">
      <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
        <div>
          <h2 className="text-xl font-bold flex items-center space-x-2">
            <BarChart2 className="w-5 h-5 text-indigo-400" />
            <span>Métricas de Preparación para Entrevistas</span>
          </h2>
          <p className="text-xs text-zinc-400">
            Diagnóstico de conocimientos y progreso por área de especialización.
          </p>
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={handleReset}
          icon={<RotateCcw className="w-3.5 h-3.5" />}
        >
          Reiniciar Progreso
        </Button>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-4 rounded-2xl bg-zinc-900/70 border border-zinc-800 space-y-1">
          <span className="text-xs text-zinc-400 flex items-center space-x-1">
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>Maestría Total</span>
          </span>
          <p className="text-2xl font-mono font-extrabold text-indigo-400">
            {totalPercentage}%
          </p>
          <span className="text-[11px] text-zinc-500 font-mono">
            {completedTotal} de {totalQuestions}
          </span>
        </div>

        <div className="p-4 rounded-2xl bg-zinc-900/70 border border-zinc-800 space-y-1">
          <span className="text-xs text-zinc-400 flex items-center space-x-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Dominadas</span>
          </span>
          <p className="text-2xl font-mono font-extrabold text-emerald-400">
            {completedTotal}
          </p>
          <span className="text-[11px] text-zinc-500 font-mono">
            {totalQuestions - completedTotal} pendientes
          </span>
        </div>

        <div className="p-4 rounded-2xl bg-zinc-900/70 border border-zinc-800 space-y-1">
          <span className="text-xs text-zinc-400 flex items-center space-x-1">
            <Target className="w-3.5 h-3.5 text-pink-400" />
            <span>Quizzes Completados</span>
          </span>
          <p className="text-2xl font-mono font-extrabold text-pink-400">
            {quizHistory.length}
          </p>
          <span className="text-[11px] text-zinc-500 font-mono">
            Simuladores realizados
          </span>
        </div>

        <div className="p-4 rounded-2xl bg-zinc-900/70 border border-zinc-800 space-y-1">
          <span className="text-xs text-zinc-400 flex items-center space-x-1">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>Preguntas Guardadas</span>
          </span>
          <p className="text-2xl font-mono font-extrabold text-amber-400">
            {Object.keys(bookmarkedQuestionIds).length}
          </p>
          <span className="text-[11px] text-zinc-500 font-mono">
            Para repaso final
          </span>
        </div>
      </div>

      {/* Category Progress Breakdown */}
      <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-5 shadow-lg">
        <h3 className="font-bold text-base text-zinc-100">
          Progreso por Especialidad Técnica
        </h3>

        <div className="space-y-4">
          {(Object.keys(categoryStats) as TCategory[]).map((catKey) => {
            const stat = categoryStats[catKey];
            const pct =
              stat.total > 0 ? Math.round((stat.completed / stat.total) * 100) : 0;

            return (
              <div key={catKey} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs sm:text-sm font-semibold">
                  <span>{categoryLabels[catKey]}</span>
                  <span className="font-mono text-indigo-400">
                    {stat.completed}/{stat.total} ({pct}%)
                  </span>
                </div>
                <ProgressBar value={pct} showPercent={false} size="md" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Quiz History Table */}
      {quizHistory.length > 0 && (
        <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-4 shadow-lg">
          <h3 className="font-bold text-base text-zinc-100 flex items-center space-x-2">
            <Calendar className="w-4 h-4 text-indigo-400" />
            <span>Historial Reciente de Quizzes & Mock Interviews</span>
          </h3>

          <div className="divide-y divide-zinc-800 border border-zinc-800 rounded-xl overflow-hidden bg-zinc-950/40">
            {quizHistory.map((entry, idx) => (
              <div
                key={idx}
                className="p-3.5 flex items-center justify-between text-xs sm:text-sm"
              >
                <div className="space-y-0.5">
                  <span className="font-semibold text-zinc-200">
                    {entry.moduleTitle || "Simulador General"}
                  </span>
                  <span className="text-zinc-500 block text-xs">
                    {entry.date}
                  </span>
                </div>

                <div className="flex items-center space-x-3 font-mono">
                  <span className="text-zinc-400">
                    {entry.score}/{entry.totalQuestions} aciertos
                  </span>
                  <span
                    className={`font-bold px-2 py-0.5 rounded text-xs ${
                      entry.percentage >= 70
                        ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                        : "bg-rose-500/20 text-rose-400 border border-rose-500/30"
                    }`}
                  >
                    {entry.percentage}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
