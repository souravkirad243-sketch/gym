import React from "react";

export default function LegalPage({ title }) {
  return (
    <main className="mx-auto min-h-[70vh] max-w-container-max px-margin-mobile py-32 md:px-margin-desktop">
      <h1 className="font-display text-display-lg-mobile text-primary md:text-display-lg">{title}</h1>
      <div className="mt-8 max-w-3xl space-y-5 font-body text-body-md text-secondary">
        <p>This page provides placeholder policy content for the production React conversion. Replace it with approved legal copy before launch.</p>
        <p>Lumina Salon uses submitted contact details only to respond to appointment, service, and career enquiries. We do not sell client information.</p>
        <p>For questions about this policy, contact hello@luminaelevated.com.</p>
      </div>
    </main>
  );
}
