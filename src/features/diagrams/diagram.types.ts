import { ReactElement } from "react";
import { IVisualDiagram } from "../../types";

export type TDiagramType = IVisualDiagram["diagramType"];

/** Paleta derivada del tema activo que comparten todos los diagramas. */
export interface IDiagramTheme {
  isDark: boolean;
  textColor: string;
  subtextColor: string;
  bgCard: string;
  border: string;
}

export type DiagramRender = (theme: IDiagramTheme) => ReactElement;

export type DiagramRegistry = Partial<Record<TDiagramType, DiagramRender>>;

export const createDiagramTheme = (isDark: boolean): IDiagramTheme => ({
  isDark,
  textColor: isDark ? "#f3f4f6" : "#1f2937",
  subtextColor: isDark ? "#9ca3af" : "#6b7280",
  bgCard: isDark ? "#18181b" : "#ffffff",
  border: isDark ? "#27272a" : "#e5e7eb"
});
