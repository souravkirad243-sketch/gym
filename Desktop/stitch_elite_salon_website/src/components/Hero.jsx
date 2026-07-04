import React from "react";

export default function Hero({ eyebrow, title, text, image, compact = false }) {
  return (
    <section className={`relative flex items-center justify-center overflow-hidden ${compact ? "h-[560px]" : "min-h-screen"}`}>
      {image ? (
        <div className="absolute inset-0">
          <img
            className="h-full w-full scale-105 object-cover"
            src={image}
            alt=""
            loading={compact ? "lazy" : "eager"}
            decoding="async"
            fetchPriority={compact ? "auto" : "high"}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-primary/50" />
        </div>
      ) : (
        <div className="absolute inset-0 bg-surface-container-low" />
      )}
      <div className="relative z-10 mx-auto max-w-3xl px-margin-mobile text-center md:px-margin-desktop">
        {eyebrow && <span className="mb-6 block font-body text-label-md uppercase tracking-[0.25em] text-on-primary/90">{eyebrow}</span>}
        <h1 className={`font-display ${image ? "text-on-primary" : "text-primary"} text-display-lg-mobile md:text-display-lg`}>{title}</h1>
        {text && <p className={`mx-auto mt-6 max-w-2xl font-body text-body-lg ${image ? "text-on-primary/90" : "text-secondary"}`}>{text}</p>}
      </div>
    </section>
  );
}
