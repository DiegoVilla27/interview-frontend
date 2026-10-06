import { create } from "zustand";
import { persist } from "zustand/middleware";
import { IQuestionRef, IQuizResult, QuestionLevel, TActiveView, TModuleId } from "../types";

interface LearningState {
  // Navigation & Views
  activeView: TActiveView;
  setActiveView: (view: TActiveView) => void;
  selectedQuestion: IQuestionRef | null;
  setSelectedQuestion: (question: IQuestionRef | null) => void;

  // Filter & Search
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  levelFilter: QuestionLevel | "todos";
  setLevelFilter: (level: QuestionLevel | "todos") => void;

  // Progress & Mastery
  completedQuestionIds: Record<string, boolean>;
  toggleQuestionCompleted: (questionTitle: string) => void;
  isQuestionCompleted: (questionTitle: string) => boolean;

  // Bookmarks
  bookmarkedQuestionIds: Record<string, boolean>;
  toggleBookmark: (questionTitle: string) => void;
  isQuestionBookmarked: (questionTitle: string) => boolean;

  // Quiz State & History
  quizHistory: IQuizResult[];
  addQuizResult: (result: IQuizResult) => void;
  activeQuizModule: TModuleId | null;
  setActiveQuizModule: (moduleId: TModuleId | null) => void;

  // Reset Progress
  resetProgress: () => void;
}

export const useLearningStore = create<LearningState>()(
  persist(
    (set, get) => ({
      // Navigation & Views
      activeView: "roadmap",
      setActiveView: (activeView) => set({ activeView }),
      selectedQuestion: null,
      setSelectedQuestion: (selectedQuestion) => set({ selectedQuestion }),

      // Filter & Search
      searchQuery: "",
      setSearchQuery: (searchQuery) => set({ searchQuery }),
      levelFilter: "todos",
      setLevelFilter: (levelFilter) => set({ levelFilter }),

      // Progress & Mastery
      completedQuestionIds: {},
      toggleQuestionCompleted: (questionTitle: string) =>
        set((state) => {
          const current = state.completedQuestionIds[questionTitle];
          const updated = { ...state.completedQuestionIds };
          if (current) {
            delete updated[questionTitle];
          } else {
            updated[questionTitle] = true;
          }
          return { completedQuestionIds: updated };
        }),
      isQuestionCompleted: (questionTitle: string) =>
        !!get().completedQuestionIds[questionTitle],

      // Bookmarks
      bookmarkedQuestionIds: {},
      toggleBookmark: (questionTitle: string) =>
        set((state) => {
          const current = state.bookmarkedQuestionIds[questionTitle];
          const updated = { ...state.bookmarkedQuestionIds };
          if (current) {
            delete updated[questionTitle];
          } else {
            updated[questionTitle] = true;
          }
          return { bookmarkedQuestionIds: updated };
        }),
      isQuestionBookmarked: (questionTitle: string) =>
        !!get().bookmarkedQuestionIds[questionTitle],

      // Quiz State & History
      quizHistory: [],
      addQuizResult: (result: IQuizResult) =>
        set((state) => ({
          quizHistory: [result, ...state.quizHistory.slice(0, 19)]
        })),
      activeQuizModule: null,
      setActiveQuizModule: (activeQuizModule) => set({ activeQuizModule }),

      // Reset
      resetProgress: () =>
        set({
          completedQuestionIds: {},
          bookmarkedQuestionIds: {},
          quizHistory: []
        })
    }),
    {
      name: "interview-frontend-storage",
      partialize: (state) => ({
        completedQuestionIds: state.completedQuestionIds,
        bookmarkedQuestionIds: state.bookmarkedQuestionIds,
        quizHistory: state.quizHistory
      })
    }
  )
);
