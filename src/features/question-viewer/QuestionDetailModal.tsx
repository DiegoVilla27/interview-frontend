import React, { Suspense, use, useMemo, useState } from "react";
import {
  BookOpen,
  Code2,
  Image as ImageIcon,
  Sparkles,
  Bookmark,
  CheckCircle2,
  HelpCircle,
  AlertTriangle,
  Lightbulb,
  ArrowRight
} from "lucide-react";
import confetti from "canvas-confetti";
import { IQuestionRef } from "../../types";
import { findQuestion, loadModuleContent } from "../../content";
import { Modal } from "../../components/ui/Modal";
import { Badge } from "../../components/ui/Badge";
import { Button } from "../../components/ui/Button";
import { Tabs, TabItem } from "../../components/ui/Tabs";
import { CodeBlock } from "../../components/ui/CodeBlock";
import { DiagramRenderer } from "../diagrams/DiagramRenderer";
import { useLearningStore } from "../../store/learningStore";
import { shuffleOptions } from "../../utils/shuffle.utils";

interface QuestionDetailModalProps {
  questionRef: IQuestionRef;
  onClose: () => void;
}

const LoadingModal: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <Modal isOpen onClose={onClose} maxWidth="3xl" title="Cargando pregunta…">
    <div className="space-y-3 animate-pulse" aria-busy="true">
      <div className="h-8 w-2/3 rounded-lg bg-zinc-800" />
      <div className="h-40 rounded-xl bg-zinc-800/70" />
    </div>
  </Modal>
);

export const QuestionDetailModal: React.FC<QuestionDetailModalProps> = ({ questionRef, onClose }) => (
  <Suspense fallback={<LoadingModal onClose={onClose} />}>
    <QuestionDetailContent key={questionRef.title} questionRef={questionRef} onClose={onClose} />
  </Suspense>
);

const QuestionDetailContent: React.FC<QuestionDetailModalProps> = ({ questionRef, onClose }) => {
  const section = use(loadModuleContent(questionRef.moduleId));
  const question = findQuestion(section, questionRef.title);
  const moduleTitle = section.title;

  // Siempre se abre en la pestaña de teoría (el key del padre resetea el estado por pregunta)
  const [activeTab, setActiveTab] = useState<string>("teoria");
  const [quizSelectedOption, setQuizSelectedOption] = useState<number | null>(null);
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);

  const {
    isQuestionCompleted,
    toggleQuestionCompleted,
    isQuestionBookmarked,
    toggleBookmark
  } = useLearningStore();

  // Opciones barajadas una vez por pregunta para que la posición no delate la respuesta
  const quiz = useMemo(
    () =>
      question && {
        ...question.quiz,
        ...shuffleOptions(question.quiz.options, question.quiz.correctIndex)
      },
    [question]
  );

  if (!question || !quiz) return null;

  const isCompleted = isQuestionCompleted(question.title);
  const isBookmarked = isQuestionBookmarked(question.title);

  const handleToggleComplete = () => {
    if (!isCompleted) {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 }
      });
    }
    toggleQuestionCompleted(question.title);
  };

  // Obligatorios: Teoría, Diagrama, Tips, Quiz. Opcional: Práctica (solo si hay código).
  const tips = question.interviewTips;

  const tabs: TabItem[] = [
    {
      id: "teoria",
      label: "Teoría",
      icon: <BookOpen className="w-4 h-4 text-sky-400" />
    }
  ];

  // Práctica es OPCIONAL: solo si tiene código coherente
  if (question.codeExample) {
    tabs.push({
      id: "codigo",
      label: "Práctica & Código",
      icon: <Code2 className="w-4 h-4 text-indigo-400" />
    });
  }

  // Diagrama es OBLIGATORIO y COHERENTE
  tabs.push({
    id: "diagrama",
    label: "Diagrama Visual",
    icon: <ImageIcon className="w-4 h-4 text-pink-400" />
  });

  // Tip es OBLIGATORIO
  tabs.push({
    id: "tips",
    label: "Tips Entrevistador",
    icon: <Sparkles className="w-4 h-4 text-amber-400" />
  });

  // Quiz es OBLIGATORIO
  tabs.push({
    id: "quiz",
    label: "Mini Quiz",
    icon: <HelpCircle className="w-4 h-4 text-emerald-400" />
  });

  return (
    <Modal
      isOpen
      onClose={onClose}
      maxWidth="3xl"
      title={
        <div className="flex flex-col space-y-1.5">
          <div className="flex items-center flex-wrap gap-2 text-xs font-normal">
            {moduleTitle && (
              <span className="text-indigo-400 font-semibold uppercase tracking-wider">
                {moduleTitle}
              </span>
            )}
            <Badge variant={question.level}>{question.level}</Badge>
            {isCompleted && (
              <span className="flex items-center text-emerald-400 text-xs font-semibold space-x-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Dominada</span>
              </span>
            )}
          </div>
          <h2 className="text-lg sm:text-xl font-bold leading-snug text-white">
            {question.title}
          </h2>
        </div>
      }
    >
      {/* Top Action Toolbar */}
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-zinc-800 flex-wrap gap-2">
        <Tabs
          tabs={tabs}
          activeTab={activeTab}
          onChange={(tab) => {
            setActiveTab(tab);
            setQuizSelectedOption(null);
            setQuizSubmitted(false);
          }}
        />

        <div className="flex items-center space-x-2">
          <button
            onClick={() => toggleBookmark(question.title)}
            className={`p-2 rounded-lg border transition cursor-pointer flex items-center space-x-1.5 text-xs font-medium ${
              isBookmarked
                ? "bg-amber-500/15 border-amber-500/40 text-amber-400"
                : "border-zinc-700/60 text-zinc-400 hover:text-white hover:bg-zinc-800"
            }`}
            title={isBookmarked ? "Quitar de favoritos" : "Guardar para repasar"}
          >
            <Bookmark className="w-4 h-4" fill={isBookmarked ? "currentColor" : "none"} />
            <span className="hidden sm:inline">
              {isBookmarked ? "Guardada" : "Guardar"}
            </span>
          </button>

          <Button
            variant={isCompleted ? "secondary" : "primary"}
            size="sm"
            onClick={handleToggleComplete}
            icon={<CheckCircle2 className="w-4 h-4" />}
          >
            {isCompleted ? "Marcar pendiente" : "Marcar dominada"}
          </Button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="tab-body text-sm leading-relaxed">
        {activeTab === "teoria" && (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
              <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-2 flex items-center space-x-1.5">
                <BookOpen className="w-4 h-4" />
                <span>Explicación Conceptual</span>
              </h3>
              <p className="text-zinc-200 whitespace-pre-line text-sm sm:text-base leading-relaxed">
                {question.response}
              </p>
            </div>

            {/* Tags */}
            {question.tags && question.tags.length > 0 && (
              <div className="flex items-center flex-wrap gap-1.5 pt-2">
                <span className="text-xs text-zinc-500 font-semibold mr-1">
                  Conceptos clave:
                </span>
                {question.tags.map((tag) => (
                  <Badge key={tag} variant="tag">
                    #{tag}
                  </Badge>
                ))}
              </div>
            )}

            {/* Quick prompt to view code (only if code is available) */}
            {question.codeExample && (
              <div
                onClick={() => setActiveTab("codigo")}
                className="flex items-center justify-between p-3 rounded-xl bg-indigo-950/30 border border-indigo-500/30 hover:bg-indigo-900/30 transition cursor-pointer text-xs sm:text-sm text-indigo-300 font-medium"
              >
                <div className="flex items-center space-x-2">
                  <Code2 className="w-4 h-4 text-indigo-400" />
                  <span>Ver implementación práctica y código</span>
                </div>
                <ArrowRight className="w-4 h-4" />
              </div>
            )}
          </div>
        )}

        {/* Tab Código (solo si question.codeExample existe y es coherente) */}
        {activeTab === "codigo" && question.codeExample && (
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-400 flex items-center space-x-1.5">
                <Code2 className="w-4 h-4" />
                <span>Implementación Práctica para Entrevistas</span>
              </h3>
            </div>
            <CodeBlock example={question.codeExample} />
          </div>
        )}

        {/* Tab Diagrama (obligatorio y coherente) */}
        {activeTab === "diagrama" && (
          <div>
            <DiagramRenderer diagram={question.visualDiagram} />
          </div>
        )}

        {/* Tab Tips (obligatorio) */}
        {activeTab === "tips" && (
          <div className="space-y-4">
            {/* What interviewers want */}
            <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 text-emerald-300">
              <h4 className="font-bold text-xs uppercase tracking-wider mb-1.5 flex items-center space-x-1.5 text-emerald-400">
                <Lightbulb className="w-4 h-4" />
                <span>¿Qué busca el entrevistador realmente?</span>
              </h4>
              <p className="text-sm text-zinc-200">
                {tips.whatInterviewersWant}
              </p>
            </div>

            {/* Common pitfalls */}
            {tips.commonPitfalls && tips.commonPitfalls.length > 0 && (
              <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-500/30 text-rose-300">
                <h4 className="font-bold text-xs uppercase tracking-wider mb-2 flex items-center space-x-1.5 text-rose-400">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Errores comunes y señales de alerta (Red Flags)</span>
                </h4>
                <ul className="list-disc list-inside space-y-1.5 text-sm text-zinc-300">
                  {tips.commonPitfalls.map((pitfall, idx) => (
                    <li key={idx}>{pitfall}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Follow-up questions */}
            {tips.followUps && tips.followUps.length > 0 && (
              <div className="p-4 rounded-xl bg-indigo-950/20 border border-indigo-500/30">
                <h4 className="font-bold text-xs uppercase tracking-wider mb-2 flex items-center space-x-1.5 text-indigo-400">
                  <Sparkles className="w-4 h-4" />
                  <span>Preguntas de seguimiento habituales</span>
                </h4>
                <ul className="space-y-2 text-sm text-zinc-300">
                  {tips.followUps.map((followUp, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <span className="text-indigo-400 font-bold">•</span>
                      <span>{followUp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Tab Quiz (obligatorio) */}
        {activeTab === "quiz" && (
          <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-4">
            <h4 className="font-bold text-base text-zinc-100">
              {quiz.question}
            </h4>

            <div className="space-y-2">
              {quiz.options.map((option, idx) => {
                const isSelected = quizSelectedOption === idx;
                const isCorrect = idx === quiz.correctIndex;
                let optionClasses =
                  "w-full text-left p-3 rounded-lg border text-sm transition cursor-pointer ";

                if (quizSubmitted) {
                  if (isCorrect) {
                    optionClasses +=
                      "bg-emerald-950/40 border-emerald-500 text-emerald-200 font-semibold";
                  } else if (isSelected && !isCorrect) {
                    optionClasses +=
                      "bg-rose-950/40 border-rose-500 text-rose-300 line-through";
                  } else {
                    optionClasses +=
                      "border-zinc-800 text-zinc-500 opacity-50";
                  }
                } else {
                  if (isSelected) {
                    optionClasses +=
                      "bg-indigo-950/40 border-indigo-500 text-indigo-200 font-semibold";
                  } else {
                    optionClasses +=
                      "border-zinc-800 hover:border-zinc-700 bg-zinc-900/40 text-zinc-300 hover:text-white";
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={quizSubmitted}
                    onClick={() => setQuizSelectedOption(idx)}
                    className={optionClasses}
                  >
                    <div className="flex items-center space-x-2">
                      <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-xs font-mono shrink-0">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span>{option}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {!quizSubmitted ? (
              <Button
                variant="primary"
                size="md"
                disabled={quizSelectedOption === null}
                onClick={() => {
                  setQuizSubmitted(true);
                  if (quizSelectedOption === quiz.correctIndex) {
                    confetti({ particleCount: 40, spread: 50 });
                  }
                }}
              >
                Comprobar Respuesta
              </Button>
            ) : (
              <div className="p-3 rounded-lg bg-zinc-800/80 border border-zinc-700/60 text-xs text-zinc-300 space-y-1">
                <span className="font-bold text-indigo-400 uppercase tracking-wider block">
                  {quizSelectedOption === quiz.correctIndex
                    ? "🎉 ¡Respuesta Correcta!"
                    : "❌ Respuesta Incorrecta"}
                </span>
                <p>{quiz.explanation}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </Modal>
  );
};
