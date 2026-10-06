import { lazy, Suspense, useEffect, useState } from "react";
import LayoutScreen from "./layout";
import { contentIndex, totalQuestions } from "./content";
import { IQuestionRef, TModuleId } from "./types";
import { saveStorage } from "./utils/storage.utils";
import { useLearningStore } from "./store/learningStore";

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
const QuizModal = lazy(() =>
  import("./features/quiz/QuizModal").then((m) => ({ default: m.QuizModal }))
);

const ViewFallback = () => (
  <div className="h-64 rounded-2xl bg-zinc-800/40 animate-pulse" aria-label="Cargando vista" />
);

export const App = () => {
  const {
    activeView,
    selectedQuestion,
    setSelectedQuestion,
    activeQuizModule,
    setActiveQuizModule
  } = useLearningStore();

  const [isQuizOpen, setIsQuizOpen] = useState(false);

  // Always apply dark theme
  useEffect(() => {
    saveStorage(true);
  }, []);

  const handleSelectQuestion = (question: IQuestionRef) => setSelectedQuestion(question);

  const handleLaunchGeneralQuiz = () => {
    setActiveQuizModule(null);
    setIsQuizOpen(true);
  };

  const handleLaunchModuleQuiz = (moduleId: TModuleId) => {
    setActiveQuizModule(moduleId);
    setIsQuizOpen(true);
  };

  return (
    <LayoutScreen>
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
      </Suspense>
    </LayoutScreen>
  );
};

export default App;
