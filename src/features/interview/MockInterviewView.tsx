import React, { Suspense, use, useEffect, useState } from "react";
import {
  Bot,
  CheckCircle2,
  Clock,
  KeyRound,
  Lightbulb,
  Loader2,
  Mic,
  MicOff,
  Play,
  RotateCcw,
  Send,
  Sparkles,
  AlertTriangle
} from "lucide-react";
import { contentIndex, findQuestion, loadModulesContent } from "../../content";
import { IQuestion, IQuestionRef, TModuleId } from "../../types";
import { Badge } from "../../components/ui/Badge";
import { Button } from "../../components/ui/Button";
import { ProgressBar } from "../../components/ui/ProgressBar";
import { useLearningStore } from "../../store/learningStore";
import { useSettingsStore } from "../../store/settingsStore";
import { shuffle } from "../../utils/shuffle.utils";
import { getLearningPath, getPathQuestions, learningPaths } from "../paths/learning-paths";
import { TReviewGrade } from "../flashcards/spaced-repetition";
import type { IAnswerEvaluation } from "./ai-evaluation";
import { useSpeechDictation } from "./useSpeechDictation";

export const ALL_TOPICS = "all";

interface IInterviewConfig {
  source: string;
  questionCount: number;
  /** Segundos por pregunta; 0 = sin límite. */
  secondsPerQuestion: number;
}

interface IAnsweredQuestion {
  ref: IQuestionRef;
  answer: string;
  selfScore: number;
  aiScore?: number;
}

const SELF_ASSESSMENT: { label: string; score: number; grade: TReviewGrade; className: string }[] = [
  { label: "No la sabía", score: 0, grade: "again", className: "border-rose-500/40 text-rose-300 hover:bg-rose-950/40" },
  { label: "Parcial", score: 50, grade: "hard", className: "border-amber-500/40 text-amber-300 hover:bg-amber-950/40" },
  { label: "La clavé", score: 100, grade: "good", className: "border-emerald-500/40 text-emerald-300 hover:bg-emerald-950/40" }
];

const sourceLabel = (source: string) =>
  source === ALL_TOPICS ? "Todo el temario" : getLearningPath(source)?.title ?? "Todo el temario";

const pickQuestions = (config: IInterviewConfig): IQuestionRef[] => {
  const path = getLearningPath(config.source);
  const pool: IQuestionRef[] = path
    ? getPathQuestions(path)
    : contentIndex.flatMap((section) => section.questions.map((q) => ({ moduleId: section.id, title: q.title })));
  return shuffle(pool)
    .slice(0, config.questionCount)
    .map(({ moduleId, title }) => ({ moduleId, title }));
};

const formatTime = (seconds: number) => `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;

interface MockInterviewViewProps {
  initialSource: string;
  onOpenSettings: () => void;
}

export const MockInterviewView: React.FC<MockInterviewViewProps> = ({ initialSource, onOpenSettings }) => {
  const [config, setConfig] = useState<IInterviewConfig>({
    source: initialSource,
    questionCount: 5,
    secondsPerQuestion: 180
  });
  const [session, setSession] = useState<{ id: number; refs: IQuestionRef[] } | null>(null);

  if (session) {
    return (
      <Suspense
        fallback={<div className="h-64 rounded-2xl bg-zinc-800/40 animate-pulse" aria-label="Preparando entrevista" />}
      >
        <InterviewSession
          key={session.id}
          refs={session.refs}
          config={config}
          onOpenSettings={onOpenSettings}
          onRestart={() => setSession({ id: Date.now(), refs: pickQuestions(config) })}
          onExit={() => setSession(null)}
        />
      </Suspense>
    );
  }

  return (
    <InterviewSetup
      config={config}
      onChange={setConfig}
      onOpenSettings={onOpenSettings}
      onStart={() => setSession({ id: Date.now(), refs: pickQuestions(config) })}
    />
  );
};

const InterviewSetup: React.FC<{
  config: IInterviewConfig;
  onChange: (config: IInterviewConfig) => void;
  onStart: () => void;
  onOpenSettings: () => void;
}> = ({ config, onChange, onStart, onOpenSettings }) => {
  const hasApiKey = useSettingsStore((state) => Boolean(state.anthropicApiKey));
  const history = useLearningStore((state) => state.interviewHistory);
  const selectClass =
    "w-full px-3 py-2 text-sm rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-100 focus:outline-none focus:border-indigo-500";

  return (
    <div className="max-w-2xl mx-auto py-4 space-y-6">
      <div className="space-y-1">
        <h2 className="text-xl font-bold flex items-center space-x-2">
          <Mic className="w-5 h-5 text-indigo-400" />
          <span>Entrevista simulada</span>
        </h2>
        <p className="text-xs text-zinc-400">
          Como en una entrevista real: lees la pregunta, respondes con tus palabras (escribiendo o dictando) y luego
          comparas con la respuesta modelo y las repreguntas del entrevistador.
        </p>
      </div>

      <div className="p-5 rounded-2xl border border-zinc-800 bg-zinc-900/60 space-y-4">
        <label className="block space-y-1.5">
          <span className="text-xs font-semibold text-zinc-300">Temario</span>
          <select
            className={selectClass}
            value={config.source}
            onChange={(e) => onChange({ ...config, source: e.target.value })}
          >
            <option value={ALL_TOPICS}>Todo el temario</option>
            {learningPaths.map((path) => (
              <option key={path.id} value={path.id}>
                Ruta: {path.title} ({path.role})
              </option>
            ))}
          </select>
        </label>

        <div className="grid grid-cols-2 gap-4">
          <label className="block space-y-1.5">
            <span className="text-xs font-semibold text-zinc-300">Preguntas</span>
            <select
              className={selectClass}
              value={config.questionCount}
              onChange={(e) => onChange({ ...config, questionCount: Number(e.target.value) })}
            >
              {[3, 5, 10, 15].map((n) => (
                <option key={n} value={n}>
                  {n} preguntas
                </option>
              ))}
            </select>
          </label>
          <label className="block space-y-1.5">
            <span className="text-xs font-semibold text-zinc-300">Tiempo por pregunta</span>
            <select
              className={selectClass}
              value={config.secondsPerQuestion}
              onChange={(e) => onChange({ ...config, secondsPerQuestion: Number(e.target.value) })}
            >
              <option value={120}>2 minutos</option>
              <option value={180}>3 minutos</option>
              <option value={300}>5 minutos</option>
              <option value={0}>Sin límite</option>
            </select>
          </label>
        </div>

        <div
          className={`flex items-start gap-3 p-3 rounded-xl border text-xs ${
            hasApiKey ? "border-emerald-500/30 bg-emerald-950/20 text-emerald-200" : "border-zinc-700 bg-zinc-950/40 text-zinc-400"
          }`}
        >
          <Bot className="w-4 h-4 shrink-0 mt-0.5" />
          <div className="flex-1 space-y-1">
            <p>
              {hasApiKey
                ? "Evaluación con IA activada: podrás pedir a Claude que puntúe cada respuesta."
                : "Opcional: añade tu API key de Anthropic para que Claude evalúe tus respuestas."}
            </p>
          </div>
          <button onClick={onOpenSettings} className="font-semibold text-indigo-300 hover:text-indigo-200 cursor-pointer shrink-0">
            {hasApiKey ? "Ajustes" : "Configurar"}
          </button>
        </div>

        <Button variant="primary" size="md" onClick={onStart} icon={<Play className="w-4 h-4" />} className="w-full">
          Empezar entrevista
        </Button>
      </div>

      {history.length > 0 && (
        <div className="space-y-2">
          <h3 className="text-sm font-bold text-zinc-200">Entrevistas recientes</h3>
          <ul className="divide-y divide-zinc-800 rounded-xl border border-zinc-800 bg-zinc-900/40 text-xs">
            {history.slice(0, 5).map((entry, index) => (
              <li key={index} className="p-3 flex items-center justify-between gap-2">
                <span className="text-zinc-300">
                  {entry.source} · {entry.totalQuestions} preguntas
                  <span className="block text-zinc-500">{entry.date}</span>
                </span>
                <span className="font-mono text-zinc-200">
                  {entry.selfScore}%{entry.aiScore !== undefined && ` · IA ${entry.aiScore.toFixed(1)}/10`}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const InterviewSession: React.FC<{
  refs: IQuestionRef[];
  config: IInterviewConfig;
  onRestart: () => void;
  onExit: () => void;
  onOpenSettings: () => void;
}> = ({ refs, config, onRestart, onExit, onOpenSettings }) => {
  // Solo se descargan los módulos que aparecen en esta entrevista
  const moduleIds = [...new Set(refs.map((ref) => ref.moduleId))].sort() as TModuleId[];
  const sections = use(loadModulesContent(moduleIds));
  const questions = refs.map((ref) => {
    const section = sections[moduleIds.indexOf(ref.moduleId)];
    return { ref, moduleTitle: section.title, question: findQuestion(section, ref.title) as IQuestion };
  });

  const reviewQuestion = useLearningStore((state) => state.reviewQuestion);
  const addInterviewResult = useLearningStore((state) => state.addInterviewResult);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<IAnsweredQuestion[]>([]);

  const isFinished = index >= questions.length;

  useEffect(() => {
    if (!isFinished || answers.length === 0) return;
    const aiScores = answers.flatMap((a) => (a.aiScore === undefined ? [] : [a.aiScore]));
    addInterviewResult({
      date: new Date().toLocaleString("es", { dateStyle: "medium", timeStyle: "short" }),
      source: sourceLabel(config.source),
      totalQuestions: answers.length,
      selfScore: Math.round(answers.reduce((acc, a) => acc + a.selfScore, 0) / answers.length),
      aiScore: aiScores.length ? aiScores.reduce((a, b) => a + b, 0) / aiScores.length : undefined
    });
    // Se registra una sola vez al terminar la sesión
  }, [isFinished]);

  if (isFinished) {
    return <InterviewSummary questions={questions} answers={answers} onRestart={onRestart} onExit={onExit} />;
  }

  const current = questions[index];

  return (
    <div className="max-w-3xl mx-auto py-4 space-y-5">
      <div className="space-y-1.5">
        <div className="flex justify-between text-xs text-zinc-400 font-medium">
          <span>
            Pregunta {index + 1} de {questions.length} · {sourceLabel(config.source)}
          </span>
          <button onClick={onExit} className="hover:text-white cursor-pointer">
            Abandonar
          </button>
        </div>
        <ProgressBar value={Math.round((index / questions.length) * 100)} size="sm" showPercent={false} />
      </div>

      <QuestionRound
        key={current.ref.title}
        question={current.question}
        moduleTitle={current.moduleTitle}
        secondsPerQuestion={config.secondsPerQuestion}
        onOpenSettings={onOpenSettings}
        onDone={(answer, selfAssessment, aiScore) => {
          reviewQuestion(current.ref.title, selfAssessment.grade);
          setAnswers((prev) => [...prev, { ref: current.ref, answer, selfScore: selfAssessment.score, aiScore }]);
          setIndex((prev) => prev + 1);
        }}
      />
    </div>
  );
};

const QuestionRound: React.FC<{
  question: IQuestion;
  moduleTitle: string;
  secondsPerQuestion: number;
  onOpenSettings: () => void;
  onDone: (answer: string, selfAssessment: (typeof SELF_ASSESSMENT)[number], aiScore?: number) => void;
}> = ({ question, moduleTitle, secondsPerQuestion, onOpenSettings, onDone }) => {
  const [answer, setAnswer] = useState("");
  const [isRevealed, setIsRevealed] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(secondsPerQuestion);
  const dictation = useSpeechDictation((text) => setAnswer((prev) => (prev ? `${prev} ${text}` : text)));

  const reveal = () => {
    dictation.stop();
    setIsRevealed(true);
  };

  useEffect(() => {
    if (isRevealed || secondsPerQuestion === 0) return;
    if (secondsLeft <= 0) {
      reveal();
      return;
    }
    const timer = setTimeout(() => setSecondsLeft((s) => s - 1), 1000);
    return () => clearTimeout(timer);
  }, [secondsLeft, isRevealed, secondsPerQuestion]);

  return (
    <div className="space-y-4">
      <div className="p-5 rounded-2xl border border-zinc-800 bg-zinc-900/60 space-y-3">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-xs">
            <span className="px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-medium">
              {moduleTitle}
            </span>
            <Badge variant={question.level}>{question.level}</Badge>
          </div>
          {secondsPerQuestion > 0 && !isRevealed && (
            <span
              className={`flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-full border ${
                secondsLeft <= 30 ? "border-rose-500/50 text-rose-300" : "border-zinc-700 text-zinc-300"
              }`}
              aria-live="polite"
            >
              <Clock className="w-3.5 h-3.5" />
              {formatTime(secondsLeft)}
            </span>
          )}
        </div>
        <h3 className="text-lg font-bold text-zinc-100 leading-snug">{question.title}</h3>
      </div>

      {!isRevealed ? (
        <div className="space-y-3">
          <div className="relative">
            <textarea
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              rows={8}
              placeholder="Responde como lo harías en voz alta frente al entrevistador…"
              aria-label="Tu respuesta"
              className="w-full p-4 text-sm rounded-2xl bg-zinc-950/60 border border-zinc-800 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-indigo-500 resize-y"
            />
            {dictation.interim && (
              <p className="absolute bottom-3 left-4 right-4 text-xs text-zinc-500 italic truncate">{dictation.interim}</p>
            )}
          </div>
          {dictation.error && <p className="text-xs text-rose-400">{dictation.error}</p>}
          <div className="flex flex-wrap items-center justify-between gap-2">
            {dictation.isSupported ? (
              <Button
                variant="outline"
                size="sm"
                onClick={dictation.isListening ? dictation.stop : dictation.start}
                icon={dictation.isListening ? <MicOff className="w-4 h-4 text-rose-400" /> : <Mic className="w-4 h-4" />}
              >
                {dictation.isListening ? "Detener dictado" : "Dictar respuesta"}
              </Button>
            ) : (
              <span className="text-xs text-zinc-500">Tu navegador no soporta dictado por voz.</span>
            )}
            <div className="flex gap-2">
              <Button variant="secondary" size="sm" onClick={reveal}>
                No lo sé
              </Button>
              <Button variant="primary" size="sm" onClick={reveal} disabled={!answer.trim()} icon={<Send className="w-4 h-4" />}>
                Enviar respuesta
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <RevealPanel question={question} answer={answer} onOpenSettings={onOpenSettings} onDone={onDone} />
      )}
    </div>
  );
};

const RevealPanel: React.FC<{
  question: IQuestion;
  answer: string;
  onOpenSettings: () => void;
  onDone: (answer: string, selfAssessment: (typeof SELF_ASSESSMENT)[number], aiScore?: number) => void;
}> = ({ question, answer, onOpenSettings, onDone }) => {
  const apiKey = useSettingsStore((state) => state.anthropicApiKey);
  const [evaluation, setEvaluation] = useState<IAnswerEvaluation | null>(null);
  const [evaluationError, setEvaluationError] = useState<string | null>(null);
  const [isEvaluating, setIsEvaluating] = useState(false);

  const handleEvaluate = async () => {
    setIsEvaluating(true);
    setEvaluationError(null);
    // Zod y el SDK de Anthropic solo se descargan si el usuario pide una evaluación
    const { evaluateAnswer, describeEvaluationError } = await import("./ai-evaluation");
    try {
      setEvaluation(
        await evaluateAnswer({
          apiKey,
          question: question.title,
          level: question.level,
          modelAnswer: question.response,
          pitfalls: question.interviewTips.commonPitfalls,
          candidateAnswer: answer
        })
      );
    } catch (error) {
      setEvaluationError(await describeEvaluationError(error));
    } finally {
      setIsEvaluating(false);
    }
  };

  return (
    <div className="space-y-4 animate-fade-in">
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="p-4 rounded-2xl border border-zinc-800 bg-zinc-950/50 space-y-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">Tu respuesta</h4>
          <p className="text-sm text-zinc-200 whitespace-pre-line">{answer || <em className="text-zinc-500">Sin respuesta</em>}</p>
        </div>
        <div className="p-4 rounded-2xl border border-emerald-500/30 bg-emerald-950/20 space-y-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4" />
            Respuesta modelo
          </h4>
          <p className="text-sm text-zinc-200 whitespace-pre-line">{question.response}</p>
        </div>
      </div>

      <div className="p-4 rounded-2xl border border-rose-500/30 bg-rose-950/20">
        <h4 className="text-xs font-bold uppercase tracking-wider text-rose-400 mb-2 flex items-center gap-1.5">
          <AlertTriangle className="w-4 h-4" />
          Errores que el entrevistador busca
        </h4>
        <ul className="list-disc list-inside space-y-1 text-sm text-zinc-300">
          {question.interviewTips.commonPitfalls.map((pitfall) => (
            <li key={pitfall}>{pitfall}</li>
          ))}
        </ul>
      </div>

      <div className="p-4 rounded-2xl border border-indigo-500/30 bg-indigo-950/20">
        <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-2 flex items-center gap-1.5">
          <Sparkles className="w-4 h-4" />
          El entrevistador repregunta
        </h4>
        <ul className="space-y-1.5 text-sm text-zinc-300">
          {question.interviewTips.followUps.map((followUp) => (
            <li key={followUp}>• {followUp}</li>
          ))}
        </ul>
      </div>

      <AiEvaluationPanel
        hasApiKey={Boolean(apiKey)}
        hasAnswer={Boolean(answer.trim())}
        evaluation={evaluation}
        error={evaluationError}
        isEvaluating={isEvaluating}
        onEvaluate={handleEvaluate}
        onOpenSettings={onOpenSettings}
      />

      <div className="pt-2 border-t border-zinc-800 space-y-2">
        <p className="text-xs text-zinc-400">
          ¿Cómo te fue? Tu autoevaluación programa el próximo repaso de esta pregunta en las flashcards.
        </p>
        <div className="grid grid-cols-3 gap-2">
          {SELF_ASSESSMENT.map((option) => (
            <button
              key={option.label}
              onClick={() => onDone(answer, option, evaluation?.score)}
              className={`p-2.5 rounded-xl border bg-zinc-900/60 text-sm font-semibold transition cursor-pointer ${option.className}`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const AiEvaluationPanel: React.FC<{
  hasApiKey: boolean;
  hasAnswer: boolean;
  evaluation: IAnswerEvaluation | null;
  error: string | null;
  isEvaluating: boolean;
  onEvaluate: () => void;
  onOpenSettings: () => void;
}> = ({ hasApiKey, hasAnswer, evaluation, error, isEvaluating, onEvaluate, onOpenSettings }) => {
  if (!hasApiKey) {
    return (
      <button
        onClick={onOpenSettings}
        className="w-full p-3 rounded-2xl border border-dashed border-zinc-700 text-xs text-zinc-400 hover:text-zinc-200 hover:border-zinc-500 transition cursor-pointer flex items-center justify-center gap-2"
      >
        <KeyRound className="w-4 h-4" />
        Añade tu API key de Anthropic para que Claude evalúe tu respuesta
      </button>
    );
  }

  if (!evaluation) {
    return (
      <div className="space-y-2">
        <Button
          variant="outline"
          size="sm"
          onClick={onEvaluate}
          disabled={isEvaluating || !hasAnswer}
          icon={isEvaluating ? <Loader2 className="w-4 h-4 animate-spin" /> : <Bot className="w-4 h-4" />}
        >
          {isEvaluating ? "Claude está evaluando…" : "Evaluar con IA"}
        </Button>
        {!hasAnswer && <p className="text-xs text-zinc-500">Escribe o dicta una respuesta para poder evaluarla.</p>}
        {error && <p className="text-xs text-rose-400">{error}</p>}
      </div>
    );
  }

  return (
    <div className="p-4 rounded-2xl border border-sky-500/30 bg-sky-950/20 space-y-3">
      <div className="flex items-center justify-between">
        <h4 className="text-xs font-bold uppercase tracking-wider text-sky-300 flex items-center gap-1.5">
          <Bot className="w-4 h-4" />
          Evaluación de Claude
        </h4>
        <span className="font-mono font-bold text-sky-200">
          {evaluation.score}/10 · {evaluation.verdict}
        </span>
      </div>
      {evaluation.strengths.length > 0 && (
        <div>
          <p className="text-xs font-semibold text-emerald-300">Aciertos</p>
          <ul className="list-disc list-inside text-sm text-zinc-300">
            {evaluation.strengths.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      )}
      {evaluation.gaps.length > 0 && (
        <div>
          <p className="text-xs font-semibold text-amber-300">Lo que faltó</p>
          <ul className="list-disc list-inside text-sm text-zinc-300">
            {evaluation.gaps.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </div>
      )}
      <p className="text-sm text-zinc-300">
        <span className="font-semibold text-indigo-300">Repregunta: </span>
        {evaluation.followUpQuestion}
      </p>
      <details className="text-sm text-zinc-300">
        <summary className="cursor-pointer text-xs font-semibold text-zinc-400 flex items-center gap-1.5">
          <Lightbulb className="w-3.5 h-3.5" />
          Ver respuesta mejorada
        </summary>
        <p className="mt-2 whitespace-pre-line">{evaluation.improvedAnswer}</p>
      </details>
    </div>
  );
};

const InterviewSummary: React.FC<{
  questions: { ref: IQuestionRef; moduleTitle: string; question: IQuestion }[];
  answers: IAnsweredQuestion[];
  onRestart: () => void;
  onExit: () => void;
}> = ({ questions, answers, onRestart, onExit }) => {
  const selfAverage = Math.round(answers.reduce((acc, a) => acc + a.selfScore, 0) / (answers.length || 1));

  return (
    <div className="max-w-3xl mx-auto py-4 space-y-5">
      <div className="text-center space-y-1">
        <h2 className="text-2xl font-bold text-zinc-100">Entrevista completada</h2>
        <p className="text-sm text-zinc-400">
          Autoevaluación media: <span className="font-mono font-bold text-indigo-300">{selfAverage}%</span>
        </p>
      </div>

      <ul className="divide-y divide-zinc-800 rounded-2xl border border-zinc-800 bg-zinc-900/60">
        {answers.map((answered, i) => {
          const assessment = SELF_ASSESSMENT.find((option) => option.score === answered.selfScore);
          return (
            <li key={answered.ref.title} className="p-4 space-y-1">
              <div className="flex items-start justify-between gap-3">
                <span className="text-sm font-semibold text-zinc-200">
                  {i + 1}. {answered.ref.title}
                </span>
                <span className="text-xs font-mono shrink-0 text-zinc-300">
                  {assessment?.label}
                  {answered.aiScore !== undefined && ` · IA ${answered.aiScore}/10`}
                </span>
              </div>
              <span className="text-xs text-zinc-500">{questions[i].moduleTitle}</span>
            </li>
          );
        })}
      </ul>

      <div className="flex justify-center gap-3">
        <Button variant="outline" size="md" onClick={onExit}>
          Cambiar configuración
        </Button>
        <Button variant="primary" size="md" onClick={onRestart} icon={<RotateCcw className="w-4 h-4" />}>
          Otra ronda
        </Button>
      </div>
    </div>
  );
};
