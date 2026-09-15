import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger" | "success";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  icon,
  children,
  className = "",
  disabled,
  style,
  ...props
}) => {
  const getPadding = () => {
    switch (size) {
      case "sm":
        return "6px 12px";
      case "lg":
        return "12px 24px";
      default:
        return "8px 16px";
    }
  };

  const getFontSize = () => {
    switch (size) {
      case "sm":
        return "12px";
      case "lg":
        return "15px";
      default:
        return "13px";
    }
  };

  const getVariantStyles = (): React.CSSProperties => {
    switch (variant) {
      case "secondary":
        return {
          backgroundColor: "rgba(99, 102, 241, 0.12)",
          color: "#818cf8",
          border: "1px solid rgba(99, 102, 241, 0.3)"
        };
      case "outline":
        return {
          backgroundColor: "transparent",
          color: "currentColor",
          border: "1px solid rgba(156, 163, 175, 0.3)"
        };
      case "ghost":
        return {
          backgroundColor: "transparent",
          color: "currentColor",
          border: "1px solid transparent"
        };
      case "danger":
        return {
          backgroundColor: "#e11d48",
          color: "#ffffff",
          border: "1px solid #be123c"
        };
      case "success":
        return {
          backgroundColor: "#10b981",
          color: "#ffffff",
          border: "1px solid #059669"
        };
      default:
        return {
          backgroundColor: "#4f46e5",
          color: "#ffffff",
          border: "1px solid #4338ca",
          boxShadow: "0 2px 8px rgba(79, 70, 229, 0.25)"
        };
    }
  };

  const baseStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    fontWeight: 600,
    borderRadius: "8px",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    transition: "all 0.2s ease",
    padding: getPadding(),
    fontSize: getFontSize(),
    ...getVariantStyles(),
    ...style
  };

  return (
    <button
      style={baseStyle}
      disabled={disabled}
      className={`btn-modern ${className}`}
      {...props}
    >
      {icon && <span className="btn-icon">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};
