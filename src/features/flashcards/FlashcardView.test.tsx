import { Suspense } from "react";
import { beforeEach, describe, expect, it } from "vitest";
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FlashcardView } from "./FlashcardView";
import { useLearningStore } from "../../store/learningStore";

// React 19 solo reintenta un componente suspendido con use() dentro de un act asíncrono
const renderView = () =>
  act(async () => {
    render(
      <Suspense fallback={<p>Cargando…</p>}>
        <FlashcardView />
      </Suspense>
    );
  });

describe("FlashcardView", () => {
  beforeEach(() => useLearningStore.setState(useLearningStore.getInitialState(), true));

  it("permite repasar con el teclado y programa la tarjeta", async () => {
    const user = userEvent.setup();
    await renderView();

    expect(await screen.findByText("15 pendientes en esta sesión")).toBeInTheDocument();
    const title = screen.getByRole("heading", { level: 3 }).textContent ?? "";

    await user.keyboard(" ");
    expect(screen.getByText("Respuesta Clave")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Bien.*1 d/ })).toBeInTheDocument();

    await user.keyboard("3");
    expect(screen.getByText("14 pendientes en esta sesión")).toBeInTheDocument();
    expect(useLearningStore.getState().reviews[title]?.intervalDays).toBe(1);
  });

  it("reencola en la misma sesión las tarjetas falladas", async () => {
    const user = userEvent.setup();
    await renderView();
    await screen.findByText("15 pendientes en esta sesión");

    await user.keyboard(" ");
    await user.click(screen.getByRole("button", { name: /Otra vez/ }));
    expect(screen.getByText("15 pendientes en esta sesión")).toBeInTheDocument();
  });

  it("filtra por módulo y permite explorar todas las tarjetas", async () => {
    const user = userEvent.setup();
    await renderView();
    await screen.findByText("15 pendientes en esta sesión");

    await user.selectOptions(screen.getByRole("combobox", { name: "Filtrar por módulo" }), "17-solid");
    await user.click(screen.getByRole("tab", { name: "Explorar todas" }));
    expect(screen.getByText("Tarjeta 1 de 20")).toBeInTheDocument();
    expect(screen.getAllByText("SOLID").length).toBeGreaterThan(0);
  });
});
