import React from "react";
import { Link } from "react-router-dom";

export default function LinkButton({ to, children, variant = "primary", className = "" }) {
  const styles =
    variant === "secondary"
      ? "border border-current text-on-primary hover:bg-on-primary hover:text-primary"
      : "bg-primary text-on-primary hover:bg-primary-container";

  return (
    <Link
      className={`inline-flex items-center justify-center rounded px-8 py-4 font-body text-label-md uppercase tracking-widest transition-all active:scale-95 focus-ring ${styles} ${className}`}
      to={to}
    >
      {children}
    </Link>
  );
}
