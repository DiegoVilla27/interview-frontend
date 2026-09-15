import React from "react";
import { Bookmark, BookOpen } from "lucide-react";
import { IQuestion, ISection } from "../../types";
import { Badge } from "../../components/ui/Badge";
import { Button } from "../../components/ui/Button";
import { useLearningStore } from "../../store/learningStore";

interface BookmarksViewProps {
  sections: ISection[];
  onSelectQuestion: (question: IQuestion, moduleTitle: string) => void;
}

export const BookmarksView: React.FC<BookmarksViewProps> = ({
  sections,
  onSelectQuestion
}) => {
  const { bookmarkedQuestionIds, setActiveView } = useLearningStore();

  const bookmarkedList: { question: IQuestion; moduleTitle: string }[] = [];
  sections.forEach((sec) => {
    sec.questions.forEach((q) => {
      if (bookmarkedQuestionIds[q.title]) {
        bookmarkedList.push({ question: q, moduleTitle: sec.title });
      }
    });
  });

  if (bookmarkedList.length === 0) {
    return (
      <div className="py-16 text-center space-y-4 max-w-md mx-auto">
        <div className="w-16 h-16 mx-auto rounded-full bg-zinc-800/80 flex items-center justify-center text-zinc-500">
          <Bookmark className="w-8 h-8" />
        </div>
        <div className="space-y-1">
          <h3 className="text-lg font-bold text-zinc-200">
            No tienes preguntas guardadas todavía
          </h3>
          <p className="text-xs text-zinc-400">
            Haz clic en el icono de marcador (Guardar) dentro de cualquier pregunta para repasarla antes de tu entrevista.
          </p>
        </div>
        <Button
          variant="primary"
          size="sm"
          onClick={() => setActiveView("roadmap")}
          icon={<BookOpen className="w-4 h-4" />}
        >
          Explorar Preguntas
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-4 py-4 max-w-4xl mx-auto">
      <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
        <h2 className="text-xl font-bold flex items-center space-x-2">
          <Bookmark className="w-5 h-5 text-amber-400 fill-amber-400" />
          <span>Preguntas Guardadas ({bookmarkedList.length})</span>
        </h2>
        <span className="text-xs text-zinc-400">
          Lista de repaso prioritaria
        </span>
      </div>

      <div className="divide-y divide-zinc-800 rounded-2xl border border-zinc-800 bg-zinc-900/60 overflow-hidden shadow-lg">
        {bookmarkedList.map(({ question, moduleTitle }) => (
          <div
            key={question.title}
            onClick={() => onSelectQuestion(question, moduleTitle)}
            className="p-4 hover:bg-zinc-800/40 transition cursor-pointer flex items-center justify-between gap-3 text-sm group"
          >
            <div className="space-y-1 flex-1">
              <div className="flex items-center space-x-2">
                <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  {moduleTitle}
                </span>
                <Badge variant={question.level}>{question.level}</Badge>
              </div>
              <h4 className="font-semibold text-zinc-100 group-hover:text-indigo-300 transition">
                {question.title}
              </h4>
            </div>

            <span className="text-xs text-indigo-400 font-medium shrink-0">
              Repasar →
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
