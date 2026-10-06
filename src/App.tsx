import { lazy, Suspense, useEffect, useState } from "react";
import LayoutScreen from "./layout";
import { sections as sectionsModule } from "./modules";
import { IQuestion, ISection } from "./types";
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
  const sections: ISection[] = sectionsModule;

  const {
    activeView,
    selectedQuestion,
    setSelectedQuestion,
    activeQuizModule,
    setActiveQuizModule
  } = useLearningStore();

  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [activeQuestionModule, setActiveQuestionModule] = useState<string>("");

  // Always apply dark theme
  useEffect(() => {
    saveStorage(true);
  }, []);

  // Total questions count across all 21 modules
  const totalQuestions = sections.reduce(
    (acc, sec) => acc + sec.questions.length,
    0
  );

  const handleSelectQuestion = (question: IQuestion, moduleTitle: string) => {
    setActiveQuestionModule(moduleTitle);
    setSelectedQuestion(question);
  };

  const handleLaunchGeneralQuiz = () => {
    setActiveQuizModule(null);
    setIsQuizOpen(true);
  };

  const handleLaunchModuleQuiz = (moduleTitle: string) => {
    setActiveQuizModule(moduleTitle);
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
            sections={sections}
            onSelectQuestion={handleSelectQuestion}
            onLaunchModuleQuiz={handleLaunchModuleQuiz}
          />
        )}

        <Suspense fallback={<ViewFallback />}>
          {activeView === "flashcards" && (
            <FlashcardView sections={sections} />
          )}

          {activeView === "bookmarks" && (
            <BookmarksView
              sections={sections}
              onSelectQuestion={handleSelectQuestion}
            />
          )}

          {activeView === "stats" && (
            <StatsView sections={sections} />
          )}
        </Suspense>
      </div>

      <Suspense fallback={null}>
        {/* Question Detail Modal (Theory, Practice Code, SVG Diagrams, Interview Tips, Mini Quiz) */}
        {selectedQuestion && (
          <QuestionDetailModal
            question={selectedQuestion}
            isOpen
            onClose={() => setSelectedQuestion(null)}
            moduleTitle={activeQuestionModule}
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
            sections={sections}
            initialModuleTitle={activeQuizModule}
          />
        )}
      </Suspense>
    </LayoutScreen>
  );
};

export default App;
