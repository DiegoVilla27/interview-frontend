import React from "react";
import { ArrowLeft, CheckCircle2, Code2, Mic, Route } from "lucide-react";
import { IQuestionRef } from "../../types";
import { Badge } from "../../components/ui/Badge";
import { Button } from "../../components/ui/Button";
import { ProgressBar } from "../../components/ui/ProgressBar";
import { useLearningStore } from "../../store/learningStore";
import { getLearningPath, getPathQuestions, ILearningPath, learningPaths } from "./learning-paths";

interface PathsViewProps {
  onSelectQuestion: (question: IQuestionRef) => void;
  onStartInterview: (pathId: string) => void;
}

export const PathsView: React.FC<PathsViewProps> = ({ onSelectQuestion, onStartInterview }) => {
  const { activePathId, setActivePathId } = useLearningStore();
  const activePath = getLearningPath(activePathId);

  if (activePath) {
    return (
      <PathDetail
        path={activePath}
        onBack={() => setActivePathId(null)}
        onSelectQuestion={onSelectQuestion}
        onStartInterview={() => onStartInterview(activePath.id)}
      />
    );
  }

  return (
    <div className="space-y-6 py-4">
      <div className="border-b border-zinc-800 pb-3">
        <h2 className="text-xl font-bold flex items-center space-x-2">
          <Route className="w-5 h-5 text-indigo-400" />
          <span>Rutas de preparación por rol</span>
        </h2>
        <p className="text-xs text-zinc-400">
          Un subconjunto ordenado del temario según el puesto al que aplicas: de lo básico a lo experto.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {learningPaths.map((path) => (
          <PathCard key={path.id} path={path} onOpen={() => setActivePathId(path.id)} />
        ))}
      </div>
    </div>
  );
};

const usePathProgress = (path: ILearningPath) => {
  const completedQuestionIds = useLearningStore((state) => state.completedQuestionIds);
  const questions = getPathQuestions(path);
  const completed = questions.filter((q) => completedQuestionIds[q.title]).length;
  const percentage = questions.length ? Math.round((completed / questions.length) * 100) : 0;
  return { questions, completed, percentage };
};

const PathCard: React.FC<{ path: ILearningPath; onOpen: () => void }> = ({ path, onOpen }) => {
  const { questions, completed, percentage } = usePathProgress(path);

  return (
    <button
      onClick={onOpen}
      className="text-left p-5 rounded-2xl border border-zinc-800 bg-[#141418] hover:border-indigo-500/50 transition cursor-pointer space-y-3 flex flex-col"
    >
      <div className="flex items-center justify-between">
        <span className="text-2xl" aria-hidden>
          {path.icon}
        </span>
        <span className="text-[11px] px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-300 font-semibold">
          {path.role}
        </span>
      </div>
      <div className="space-y-1 flex-1">
        <h3 className="font-bold text-base text-zinc-100">{path.title}</h3>
        <p className="text-xs text-zinc-400 leading-relaxed">{path.description}</p>
      </div>
      <div className="w-full space-y-1">
        <ProgressBar value={percentage} size="sm" showPercent={false} />
        <div className="flex justify-between text-[11px] text-zinc-500 font-mono">
          <span>
            {completed}/{questions.length} dominadas
          </span>
          <span>{path.modules.length} módulos</span>
        </div>
      </div>
    </button>
  );
};

const PathDetail: React.FC<{
  path: ILearningPath;
  onBack: () => void;
  onSelectQuestion: (question: IQuestionRef) => void;
  onStartInterview: () => void;
}> = ({ path, onBack, onSelectQuestion, onStartInterview }) => {
  const isQuestionCompleted = useLearningStore((state) => state.isQuestionCompleted);
  const { questions, completed, percentage } = usePathProgress(path);
  const nextQuestion = questions.find((q) => !isQuestionCompleted(q.title));

  return (
    <div className="space-y-6 py-4 max-w-4xl mx-auto">
      <button
        onClick={onBack}
        className="flex items-center space-x-1.5 text-xs text-zinc-400 hover:text-white transition cursor-pointer"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Todas las rutas</span>
      </button>

      <div className="p-5 rounded-2xl border border-indigo-500/30 bg-gradient-to-br from-indigo-950/40 to-purple-950/30 space-y-4">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div className="space-y-1">
            <h2 className="text-xl font-bold flex items-center space-x-2">
              <span aria-hidden>{path.icon}</span>
              <span>{path.title}</span>
              <span className="text-xs font-semibold text-zinc-400">· {path.role}</span>
            </h2>
            <p className="text-xs text-zinc-400 max-w-xl">{path.description}</p>
          </div>
          <div className="flex gap-2 flex-wrap">
            {nextQuestion && (
              <Button variant="outline" size="sm" onClick={() => onSelectQuestion(nextQuestion)}>
                Continuar donde lo dejé
              </Button>
            )}
            <Button variant="primary" size="sm" onClick={onStartInterview} icon={<Mic className="w-4 h-4" />}>
              Entrevista simulada
            </Button>
          </div>
        </div>
        <ProgressBar value={percentage} size="md" label={`${completed}/${questions.length}`} />
      </div>

      <ol className="divide-y divide-zinc-800 rounded-2xl border border-zinc-800 bg-zinc-900/60 overflow-hidden">
        {questions.map((item, index) => {
          const isCompleted = isQuestionCompleted(item.title);
          const isFirstOfModule = index === 0 || questions[index - 1].moduleId !== item.moduleId;
          return (
            <li key={item.title}>
              {isFirstOfModule && (
                <div className="px-4 py-2 bg-zinc-950/60 text-[11px] uppercase tracking-wider font-bold text-indigo-400">
                  {item.moduleTitle}
                </div>
              )}
              <button
                onClick={() => onSelectQuestion(item)}
                className="w-full text-left p-3.5 hover:bg-zinc-800/40 transition cursor-pointer flex items-center gap-3 text-sm group"
              >
                <span className="w-6 text-right font-mono text-xs text-zinc-500 shrink-0">{index + 1}</span>
                {isCompleted ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                ) : (
                  <span className="w-4 h-4 rounded-full border border-zinc-700 shrink-0" />
                )}
                <Badge variant={item.question.level}>{item.question.level}</Badge>
                <span
                  className={`flex-1 text-zinc-200 group-hover:text-indigo-300 ${isCompleted ? "line-through opacity-60" : ""}`}
                >
                  {item.title}
                </span>
                {item.question.hasCode && <Code2 className="w-3.5 h-3.5 text-indigo-400/80 shrink-0" />}
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
};
