import React, { ComponentType, lazy, Suspense } from "react";
import { IVisualDiagram } from "../../types";
import { createDiagramTheme, IDiagramTheme, TDiagramType } from "./diagram.types";
import {
  getDiagramGroup,
  loadDiagramGroup,
  TDiagramGroup
} from "./registry";

interface DiagramRendererProps {
  diagram: IVisualDiagram;
  isDark?: boolean;
}

interface DiagramGroupProps {
  type: TDiagramType;
  theme: IDiagramTheme;
}

// Un componente lazy por grupo, creado una sola vez: React cachea el chunk tras la primera carga.
const lazyGroups = new Map<TDiagramGroup, ComponentType<DiagramGroupProps>>();

const getLazyGroup = (group: TDiagramGroup) => {
  let LazyGroup = lazyGroups.get(group);
  if (!LazyGroup) {
    LazyGroup = lazy(() =>
      loadDiagramGroup(group).then((registry) => ({
        default: ({ type, theme }: DiagramGroupProps) => registry[type]?.(theme) ?? null
      }))
    );
    lazyGroups.set(group, LazyGroup);
  }
  return LazyGroup;
};

const DiagramSkeleton: React.FC<{ border: string }> = ({ border }) => (
  <div
    className="w-full h-56 rounded-xl animate-pulse"
    style={{ backgroundColor: border }}
    aria-label="Cargando diagrama"
  />
);

export const DiagramRenderer: React.FC<DiagramRendererProps> = ({
  diagram,
  isDark = true
}) => {
  const theme = createDiagramTheme(isDark);
  const { bgCard, border, subtextColor } = theme;
  const group = getDiagramGroup(diagram.diagramType);
  const DiagramGroup = group && getLazyGroup(group);

  return (
    <div
      className="diagram-container rounded-xl p-4 overflow-hidden my-3 border"
      style={{
        backgroundColor: bgCard,
        borderColor: border
      }}
    >
      <div className="flex items-center justify-between mb-3 pb-2 border-b" style={{ borderColor: border }}>
        <div className="flex items-center space-x-2">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse" />
          <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-400">
            {diagram.title}
          </h4>
        </div>
        <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-mono">
          Minimalist Vector SVG
        </span>
      </div>

      <div className="flex justify-center items-center py-1">
        {DiagramGroup && (
          <Suspense fallback={<DiagramSkeleton border={border} />}>
            <DiagramGroup type={diagram.diagramType} theme={theme} />
          </Suspense>
        )}
      </div>

      <p className="text-xs text-center mt-2 italic" style={{ color: subtextColor }}>
        💡 {diagram.caption}
      </p>
    </div>
  );
};
