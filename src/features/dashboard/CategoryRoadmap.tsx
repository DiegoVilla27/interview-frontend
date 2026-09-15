import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Play,
  CheckCircle2,
  Code2,
  Sparkles,
  HelpCircle,
  BookOpen,
  Image as ImageIcon
} from "lucide-react";
import { IQuestion, ISection, TCategory } from "../../types";
import { Badge } from "../../components/ui/Badge";
import { ProgressBar } from "../../components/ui/ProgressBar";
import { useLearningStore } from "../../store/learningStore";

interface CategoryRoadmapProps {
  sections: ISection[];
  onSelectQuestion: (question: IQuestion, moduleTitle: string) => void;
  onLaunchModuleQuiz: (moduleTitle: string) => void;
}

const CATEGORY_METADATA: Record<TCategory, { title: string; subtitle: string; icon: string }> = {
  fundamentos: {
    title: "1. Fundamentos Web & Estándares W3C",
    subtitle: "Protocolos, HTML semántico, CSS moderno, Browser APIs y Web Components nativos",
    icon: "🌐"
  },
  "javascript-typescript": {
    title: "2. JavaScript & TypeScript Core",
    subtitle: "Event Loop, prototipos, closures, tipado estricto y regex para entrevistas FAANG",
    icon: "⚡"
  },
  frameworks: {
    title: "3. Frameworks & Ecosistema UI",
    subtitle: "React 19, Angular, Solid, Mobile (React Native/Flutter) y Principios de UI/UX",
    icon: "⚛️"
  },
  "arquitectura-ops": {
    title: "4. Arquitectura, Calidad & DevOps",
    subtitle: "Testing Trophy, Bundlers, Git workflows, CI/CD pipelines y Web Apps escalables",
    icon: "🛠️"
  }
};

export const CategoryRoadmap: React.FC<CategoryRoadmapProps> = ({
  sections,
  onSelectQuestion,
  onLaunchModuleQuiz
}) => {
  const {
    searchQuery,
    levelFilter,
    isQuestionCompleted,
    isQuestionBookmarked
  } = useLearningStore();

  // Requisito 6: Todos los dropdowns inician cerrados
  const [expandedModules, setExpandedModules] = useState<Record<string, boolean>>({});

  const toggleModule = (moduleTitle: string) => {
    setExpandedModules((prev) => ({
      ...prev,
      [moduleTitle]: !prev[moduleTitle]
    }));
  };

  const categories: TCategory[] = [
    "fundamentos",
    "javascript-typescript",
    "frameworks",
    "arquitectura-ops"
  ];

  // Helper to filter questions based on user search and difficulty level
  const filterQuestion = (q: IQuestion) => {
    if (levelFilter !== "todos" && q.level !== levelFilter) {
      return false;
    }
    if (searchQuery.trim() !== "") {
      const qText = `${q.title} ${q.response} ${q.tags?.join(" ") || ""}`.toLowerCase();
      if (!qText.includes(searchQuery.toLowerCase())) {
        return false;
      }
    }
    return true;
  };

  return (
    <div className="space-y-10 py-4">
      {categories.map((catKey) => {
        const catMeta = CATEGORY_METADATA[catKey];
        const categorySections = sections.filter((s) => s.category === catKey);

        if (categorySections.length === 0) return null;

        return (
          <section key={catKey} className="space-y-4">
            {/* Category Header */}
            <div className="flex items-start justify-between border-b border-zinc-800/80 pb-3">
              <div>
                <h2 className="text-lg sm:text-xl font-bold flex items-center space-x-2 text-zinc-100">
                  <span className="text-xl">{catMeta.icon}</span>
                  <span>{catMeta.title}</span>
                </h2>
                <p className="text-xs sm:text-sm text-zinc-400 mt-0.5">
                  {catMeta.subtitle}
                </p>
              </div>
            </div>

            {/* Modules Grid */}
            <div className="grid grid-cols-1 gap-4">
              {categorySections.map((section) => {
                const filteredQuestions = section.questions.filter(filterQuestion);
                if (
                  (searchQuery.trim() !== "" || levelFilter !== "todos") &&
                  filteredQuestions.length === 0
                ) {
                  return null;
                }

                const totalSectionQuestions = section.questions.length;
                const completedCount = section.questions.filter((q) =>
                  isQuestionCompleted(q.title)
                ).length;
                const modulePercentage = Math.round(
                  (completedCount / (totalSectionQuestions || 1)) * 100
                );

                // Expand if user clicked toggle, or if searching with a non-empty text query
                const isExpanded =
                  Boolean(expandedModules[section.title]) ||
                  searchQuery.trim() !== "";

                return (
                  <div
                    key={section.title}
                    className="rounded-2xl border border-zinc-800/90 bg-[#141418] overflow-hidden shadow-lg transition hover:border-zinc-700/80"
                  >
                    {/* Module Accordion Header */}
                    <div
                      onClick={() => toggleModule(section.title)}
                      className="p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 cursor-pointer hover:bg-zinc-800/30 transition select-none"
                    >
                      <div className="flex items-center space-x-3.5 flex-1">
                        <div className="w-10 h-10 rounded-xl bg-zinc-800/90 flex items-center justify-center p-2 shrink-0 border border-zinc-700/60 shadow-inner">
                          <img
                            src={`/icons/${section.icon}-white.svg`}
                            alt={section.title}
                            className="w-6 h-6 object-contain"
                            onError={(e) => {
                              (e.target as HTMLElement).style.display = "none";
                            }}
                          />
                        </div>

                        <div>
                          <div className="flex items-center space-x-2">
                            <h3 className="font-bold text-base sm:text-lg text-white">
                              {section.title}
                            </h3>
                            {section.title === "Web Components" && (
                              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                                Nuevo Módulo
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-zinc-400">
                            {section.description ||
                              `${totalSectionQuestions} preguntas de entrevista técnica`}
                          </p>
                        </div>
                      </div>

                      {/* Module Progress & Action Buttons */}
                      <div
                        className="flex items-center space-x-4 w-full sm:w-auto justify-between sm:justify-end pt-2 sm:pt-0 border-t sm:border-t-0 border-zinc-800"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="w-28 sm:w-36 text-right">
                          <ProgressBar
                            value={modulePercentage}
                            size="sm"
                            label={`${completedCount}/${totalSectionQuestions}`}
                          />
                        </div>

                        <button
                          onClick={() => onLaunchModuleQuiz(section.title)}
                          className="flex items-center space-x-1 px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-600/20 text-indigo-300 border border-indigo-500/30 hover:bg-indigo-600/40 transition cursor-pointer shrink-0"
                          title="Iniciar Quiz de este módulo"
                        >
                          <Play className="w-3 h-3 fill-current" />
                          <span>Quiz</span>
                        </button>

                        <button
                          onClick={() => toggleModule(section.title)}
                          className="p-1.5 rounded-lg text-zinc-400 hover:text-white cursor-pointer"
                          aria-label={isExpanded ? "Colapsar módulo" : "Expandir módulo"}
                        >
                          {isExpanded ? (
                            <ChevronUp className="w-5 h-5 text-indigo-400" />
                          ) : (
                            <ChevronDown className="w-5 h-5" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Questions List (when expanded) */}
                    {isExpanded && (
                      <div className="border-t border-zinc-800/80 bg-[#0c0c0f] divide-y divide-zinc-800/50">
                        {filteredQuestions.map((question) => {
                          const isCompleted = isQuestionCompleted(question.title);
                          const isBookmarked = isQuestionBookmarked(question.title);

                          return (
                            <div
                              key={question.title}
                              onClick={() => onSelectQuestion(question, section.title)}
                              className="p-3.5 sm:p-4 hover:bg-zinc-800/40 transition cursor-pointer flex items-center justify-between gap-3 text-xs sm:text-sm group"
                            >
                              <div className="flex items-start space-x-3 flex-1 min-w-0">
                                <div className="mt-0.5 shrink-0">
                                  {isCompleted ? (
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                                  ) : (
                                    <div className="w-4 h-4 rounded-full border border-zinc-700 group-hover:border-indigo-400 transition" />
                                  )}
                                </div>

                                <div className="space-y-1.5 min-w-0 flex-1">
                                  {/* Requisito 1: Al lado de (basico) solo mostrar ICONOS, sin palabras de texto */}
                                  <div className="flex items-center space-x-2.5">
                                    <Badge variant={question.level}>
                                      {question.level}
                                    </Badge>

                                    {/* Iconos de lo que lleva la pregunta */}
                                    <div className="flex items-center space-x-1.5 text-zinc-400">
                                      <span title="Teoría conceptual">
                                        <BookOpen className="w-3.5 h-3.5 text-sky-400/90" />
                                      </span>
                                      {question.codeExample && (
                                        <span title="Ejemplo de código práctico">
                                          <Code2 className="w-3.5 h-3.5 text-indigo-400/90" />
                                        </span>
                                      )}
                                      <span title="Diagrama visual">
                                        <ImageIcon className="w-3.5 h-3.5 text-pink-400/90" />
                                      </span>
                                      <span title="Tips de entrevistador">
                                        <Sparkles className="w-3.5 h-3.5 text-amber-400/90" />
                                      </span>
                                      <span title="Mini Quiz">
                                        <HelpCircle className="w-3.5 h-3.5 text-emerald-400/90" />
                                      </span>
                                    </div>
                                  </div>

                                  <h4
                                    className={`font-semibold text-zinc-200 group-hover:text-indigo-300 transition truncate leading-relaxed ${
                                      isCompleted ? "line-through opacity-60" : ""
                                    }`}
                                  >
                                    {question.title}
                                  </h4>
                                </div>
                              </div>

                              <div className="flex items-center space-x-2 shrink-0">
                                {isBookmarked && (
                                  <span className="text-amber-400 text-xs">★</span>
                                )}
                                <span className="text-xs text-zinc-500 group-hover:text-indigo-400 font-medium">
                                  Explorar →
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
};
