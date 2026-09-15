import React from "react";
import { QuestionLevel } from "../../types";

interface BadgeProps {
  children: React.ReactNode;
  variant?: QuestionLevel | "tag" | "success" | "warning" | "info" | "default";
  size?: "sm" | "md";
  className?: string;
}

const LEVEL_COLORS: Record<QuestionLevel, { bg: string; text: string; border: string }> = {
  basico: {
    bg: "rgba(16, 185, 129, 0.12)",
    text: "#10b981",
    border: "rgba(16, 185, 129, 0.25)"
  },
  medio: {
    bg: "rgba(59, 130, 246, 0.12)",
    text: "#3b82f6",
    border: "rgba(59, 130, 246, 0.25)"
  },
  avanzado: {
    bg: "rgba(168, 85, 247, 0.12)",
    text: "#a855f7",
    border: "rgba(168, 85, 247, 0.25)"
  },
  experto: {
    bg: "rgba(244, 63, 94, 0.12)",
    text: "#f43f5e",
    border: "rgba(244, 63, 94, 0.25)"
  }
};

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
  size = "sm",
  className = ""
}) => {
  const isLevel = ["basico", "medio", "avanzado", "experto"].includes(variant);

  let style: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    fontWeight: 600,
    borderRadius: "9999px",
    letterSpacing: "0.025em",
    textTransform: isLevel ? "capitalize" : "none",
    fontSize: size === "sm" ? "11px" : "12px",
    padding: size === "sm" ? "2px 8px" : "4px 12px",
    borderWidth: "1px",
    borderStyle: "solid"
  };

  if (isLevel) {
    const conf = LEVEL_COLORS[variant as QuestionLevel];
    style = {
      ...style,
      backgroundColor: conf.bg,
      color: conf.text,
      borderColor: conf.border
    };
  } else if (variant === "tag") {
    style = {
      ...style,
      backgroundColor: "rgba(156, 163, 175, 0.12)",
      color: "var(--text-color, #9ca3af)",
      borderColor: "rgba(156, 163, 175, 0.2)"
    };
  } else if (variant === "success") {
    style = {
      ...style,
      backgroundColor: "rgba(16, 185, 129, 0.12)",
      color: "#10b981",
      borderColor: "rgba(16, 185, 129, 0.25)"
    };
  } else {
    style = {
      ...style,
      backgroundColor: "rgba(99, 102, 241, 0.12)",
      color: "#6366f1",
      borderColor: "rgba(99, 102, 241, 0.25)"
    };
  }

  return (
    <span style={style} className={`badge-pill ${className}`}>
      {children}
    </span>
  );
};
