import { beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BookmarksView } from "./BookmarksView";
import { contentIndex } from "../../content";
import { useLearningStore } from "../../store/learningStore";

describe("BookmarksView", () => {
  beforeEach(() => useLearningStore.setState(useLearningStore.getInitialState(), true));

  it("muestra un estado vacío que lleva al roadmap", async () => {
    render(<BookmarksView sections={contentIndex} onSelectQuestion={vi.fn()} />);
    expect(screen.getByText("No tienes preguntas guardadas todavía")).toBeInTheDocument();

    await userEvent.click(screen.getByRole("button", { name: /Explorar Preguntas/ }));
    expect(useLearningStore.getState().activeView).toBe("roadmap");
  });

  it("lista las guardadas y abre la pregunta con su módulo", async () => {
    useLearningStore.getState().toggleBookmark("¿Qué es la propiedad z-index y cómo funciona el stacking context?");
    const onSelect = vi.fn();
    render(<BookmarksView sections={contentIndex} onSelectQuestion={onSelect} />);

    await userEvent.click(screen.getByText("¿Qué es la propiedad z-index y cómo funciona el stacking context?"));
    expect(onSelect).toHaveBeenCalledWith({
      moduleId: "03-css",
      title: "¿Qué es la propiedad z-index y cómo funciona el stacking context?"
    });
  });
});
