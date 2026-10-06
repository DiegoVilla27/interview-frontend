import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { DiagramRenderer } from "./DiagramRenderer";
import { getDiagramGroup } from "./registry";

describe("DiagramRenderer", () => {
  it("muestra un esqueleto y después el SVG cargado bajo demanda", async () => {
    const { container } = render(
      <DiagramRenderer diagram={{ id: "d", title: "Event Loop", caption: "Pila y colas", diagramType: "event-loop" }} />
    );
    expect(screen.getByLabelText("Cargando diagrama")).toBeInTheDocument();
    expect(await screen.findByText("Event Loop")).toBeInTheDocument();
    await screen.findByText((_, el) => el?.tagName.toLowerCase() === "svg");
    expect(container.querySelector("svg")).not.toBeNull();
    expect(screen.queryByLabelText("Cargando diagrama")).not.toBeInTheDocument();
  });

  it("asigna cada prefijo de diagramType a su grupo", () => {
    expect(getDiagramGroup("event-loop")).toBe("javascript");
    expect(getDiagramGroup("dns-resolution-tree")).toBe("internet");
    expect(getDiagramGroup("ng-zoneless-architecture")).toBe("angular");
    expect(getDiagramGroup("uiux-ui-states-pentagon")).toBe("ui-ux");
  });
});
