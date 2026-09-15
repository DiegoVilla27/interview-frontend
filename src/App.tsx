import { useEffect, useState } from "react";
import LayoutScreen from "./layout";
import { sections as sectionsModule } from "./modules";
import { IQuestion, ISection } from "./types";
import { saveStorage } from "./utils/storage.utils";
import { useLearningStore } from "./store/learningStore";

import { DashboardHeader } from "./features/dashboard/DashboardHeader";
import { CategoryRoadmap } from "./features/dashboard/CategoryRoadmap";
import { FlashcardView } from "./features/flashcards/FlashcardView";
import { BookmarksView } from "./features/dashboard/BookmarksView";
import { StatsView } from "./features/dashboard/StatsView";
import { QuestionDetailModal } from "./features/question-viewer/QuestionDetailModal";
import { QuizModal } from "./features/quiz/QuizModal";

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
      </div>

      {/* Question Detail Modal (Theory, Practice Code, SVG Diagrams, Interview Tips, Mini Quiz) */}
      <QuestionDetailModal
        question={selectedQuestion}
        isOpen={selectedQuestion !== null}
        onClose={() => setSelectedQuestion(null)}
        moduleTitle={activeQuestionModule}
      />

      {/* Interactive Quiz / Mock Interview Modal */}
      <QuizModal
        isOpen={isQuizOpen}
        onClose={() => {
          setIsQuizOpen(false);
          setActiveQuizModule(null);
        }}
        sections={sections}
        initialModuleTitle={activeQuizModule}
      />
    </LayoutScreen>
  );
};

export default App;
