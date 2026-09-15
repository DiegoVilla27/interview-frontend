import React from "react";

interface ProgressBarProps {
  value: number; // 0 to 100
  label?: string;
  showPercent?: boolean;
  color?: string;
  size?: "sm" | "md" | "lg";
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  label,
  showPercent = true,
  color = "#6366f1",
  size = "md"
}) => {
  const clamped = Math.min(100, Math.max(0, Math.round(value)));

  const getHeight = () => {
    switch (size) {
      case "sm":
        return "6px";
      case "lg":
        return "12px";
      default:
        return "8px";
    }
  };

  return (
    <div className="w-full">
      {(label || showPercent) && (
        <div className="flex justify-between items-center text-xs font-semibold mb-1.5">
          {label && <span className="opacity-80">{label}</span>}
          {showPercent && (
            <span className="font-mono text-indigo-400 font-bold">
              {clamped}%
            </span>
          )}
        </div>
      )}
      <div
        className="w-full rounded-full overflow-hidden bg-zinc-700/30 backdrop-blur-sm"
        style={{ height: getHeight() }}
      >
        <div
          className="h-full rounded-full transition-all duration-500 ease-out"
          style={{
            width: `${clamped}%`,
            background:
              clamped === 100
                ? "linear-gradient(90deg, #10b981, #059669)"
                : `linear-gradient(90deg, ${color}, #8b5cf6)`
          }}
        />
      </div>
    </div>
  );
};
