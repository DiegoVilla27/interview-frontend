import { lazy, Suspense, useState } from "react";
import LayoutScreen from "./layout";
import { contentIndex, totalQuestions } from "./content";
import { IQuestionRef, TModuleId } from "./types";
import { useLearningStore } from "./store/learningStore";
import { UpdatePrompt } from "./components/ui/UpdatePrompt";

import { DashboardHeader } from "./features/dashboard/DashboardHeader";
import { CategoryRoadmap } from "./features/dashboard/CategoryRoadmap";

// Vistas y modales secundarios: se descargan solo cuando el usuario los abre.
const FlashcardView = lazy(() =>
  import("./features/flashcards/FlashcardView").then((m) => ({ default: m.FlashcardView }))
);
const BookmarksView = lazy(() =>
  import("./features/dashboard/BookmarksView").then((m) => ({ default: m.BookmarksView }))
);
const StatsView = lazy(() =>
  import("./features/dashboard/StatsView").then((m) => ({ default: m.StatsView }))
);
const QuestionDetailModal = lazy(() =>
  import("./features/question-viewer/QuestionDetailModal").then((m) => ({
    default: m.QuestionDetailModal
  }))
);
const PathsView = lazy(() =>
  import("./features/paths/PathsView").then((m) => ({ default: m.PathsView }))
);
const MockInterviewView = lazy(() =>
  import("./features/interview/MockInterviewView").then((m) => ({ default: m.MockInterviewView }))
);
const SettingsModal = lazy(() =>
  import("./features/settings/SettingsModal").then((m) => ({ default: m.SettingsModal }))
);
const QuizModal = lazy(() =>
  import("./features/quiz/QuizModal").then((m) => ({ default: m.QuizModal }))
);

const ViewFallback = () => (
  <div className="h-64 rounded-2xl bg-zinc-800/40 animate-pulse" aria-label="Cargando vista" />
);

export const App = () => {
  const {
    activeView,
    setActiveView,
    selectedQuestion,
    setSelectedQuestion,
    activeQuizModule,
    setActiveQuizModule
  } = useLearningStore();

  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [interviewSource, setInterviewSource] = useState("all");

  const handleSelectQuestion = (question: IQuestionRef) => setSelectedQuestion(question);

  const handleStartPathInterview = (pathId: string) => {
    setInterviewSource(pathId);
    setActiveView("interview");
  };

  const handleLaunchGeneralQuiz = () => {
    setActiveQuizModule(null);
    setIsQuizOpen(true);
  };

  const handleLaunchModuleQuiz = (moduleId: TModuleId) => {
    setActiveQuizModule(moduleId);
    setIsQuizOpen(true);
  };

  return (
    <LayoutScreen onOpenSettings={() => setIsSettingsOpen(true)}>
      <div className="space-y-6">
        {/* Dashboard Header with Stats, Search, Filters & Quick Actions */}
        <DashboardHeader
          totalQuestions={totalQuestions}
          onLaunchQuiz={handleLaunchGeneralQuiz}
        />

        {/* Dynamic View Body */}
        {activeView === "roadmap" && (
          <CategoryRoadmap
            sections={contentIndex}
            onSelectQuestion={handleSelectQuestion}
            onLaunchModuleQuiz={handleLaunchModuleQuiz}
          />
        )}

        <Suspense fallback={<ViewFallback />}>
          {activeView === "paths" && (
            <PathsView onSelectQuestion={handleSelectQuestion} onStartInterview={handleStartPathInterview} />
          )}

          {activeView === "interview" && (
            <MockInterviewView
              key={interviewSource}
              initialSource={interviewSource}
              onOpenSettings={() => setIsSettingsOpen(true)}
            />
          )}

          {activeView === "flashcards" && (
            <FlashcardView />
          )}

          {activeView === "bookmarks" && (
            <BookmarksView
              sections={contentIndex}
              onSelectQuestion={handleSelectQuestion}
            />
          )}

          {activeView === "stats" && (
            <StatsView sections={contentIndex} />
          )}
        </Suspense>
      </div>

      <Suspense fallback={null}>
        {/* Question Detail Modal (Theory, Practice Code, SVG Diagrams, Interview Tips, Mini Quiz) */}
        {selectedQuestion && (
          <QuestionDetailModal
            questionRef={selectedQuestion}
            onClose={() => setSelectedQuestion(null)}
          />
        )}

        {/* Interactive Quiz / Mock Interview Modal */}
        {isQuizOpen && (
          <QuizModal
            isOpen
            onClose={() => {
              setIsQuizOpen(false);
              setActiveQuizModule(null);
            }}
            moduleId={activeQuizModule}
          />
        )}

        {isSettingsOpen && <SettingsModal onClose={() => setIsSettingsOpen(false)} />}
      </Suspense>

      <UpdatePrompt />
    </LayoutScreen>
  );
};

export default App;
