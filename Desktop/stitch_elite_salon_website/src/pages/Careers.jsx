import React from "react";
import LinkButton from "../components/LinkButton.jsx";

export default function Careers() {
  return (
    <main className="mx-auto min-h-[70vh] max-w-container-max px-margin-mobile py-32 md:px-margin-desktop">
      <span className="font-body text-label-md uppercase tracking-widest text-secondary">Careers</span>
      <h1 className="mt-3 font-display text-display-lg-mobile text-primary md:text-display-lg">Join the Collective</h1>
      <p className="mt-6 max-w-2xl font-body text-body-lg text-secondary">
        We welcome thoughtful stylists, colorists, estheticians, and guest-care specialists who value technical excellence and calm hospitality.
      </p>
      <div className="mt-10 grid grid-cols-1 gap-gutter md:grid-cols-3">
        {["Senior Stylist", "Color Specialist", "Guest Concierge"].map((role) => (
          <article className="rounded-lg border border-secondary-fixed/30 bg-white p-7 shadow-ambient" key={role}>
            <h2 className="font-display text-headline-sm text-primary">{role}</h2>
            <p className="mt-3 text-secondary">Full-time role with continued education and a collaborative studio culture.</p>
          </article>
        ))}
      </div>
      <LinkButton to="/contact" className="mt-10">Apply Now</LinkButton>
    </main>
  );
}
