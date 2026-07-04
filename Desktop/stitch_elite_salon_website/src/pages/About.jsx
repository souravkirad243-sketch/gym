import React from "react";
import Hero from "../components/Hero.jsx";
import LinkButton from "../components/LinkButton.jsx";
import { team } from "../data/site.js";
import { images } from "../utils/images.js";
import { useReveal } from "../hooks/useReveal.js";

export default function About() {
  useReveal();

  return (
    <main>
      <Hero eyebrow="Our Philosophy" title="The Elevated Sanctuary" text="AD Unisex Salon was founded to create a space where beauty transcends the superficial and expert care restores calm." image={images.aboutHero} compact />
      <section className="mx-auto grid max-w-container-max grid-cols-1 items-center gap-16 px-margin-mobile py-24 md:grid-cols-2 md:px-margin-desktop md:py-section-gap">
        <div className="reveal-up space-y-7">
          <h2 className="font-display text-headline-md italic text-primary">Commitment to Excellence</h2>
          {["Holistic Rituals", "Bespoke Curation", "Ethical Luxury"].map((title, index) => (
            <div className="flex gap-5" key={title}>
              <span className="material-symbols-outlined text-3xl text-primary">{["spa", "temp_preferences_custom", "eco"][index]}</span>
              <div>
                <h3 className="font-body text-label-md uppercase tracking-widest text-secondary">{title}</h3>
                <p className="mt-2 text-on-surface-variant">Every detail is shaped around personalized care, considered products, and a calmer salon experience.</p>
              </div>
            </div>
          ))}
        </div>
        <div className="reveal-up relative">
          <img className="aspect-[4/5] w-full rounded-lg object-cover shadow-ambient" src={images.aboutDetail} alt="Stylist working with hair in a bright salon" loading="lazy" />
          <div className="absolute -bottom-8 -left-8 hidden w-48 rounded bg-secondary-fixed p-7 text-center md:block">
            <p className="font-body text-label-md italic text-on-secondary-fixed">Beauty is found in the moments of stillness.</p>
          </div>
        </div>
      </section>
      <section className="bg-surface-container px-margin-mobile py-24 md:px-margin-desktop md:py-section-gap">
        <div className="mx-auto max-w-container-max">
          <div className="reveal-up mb-14 text-center">
            <h2 className="font-display text-display-lg-mobile text-primary md:text-display-lg">Meet the Artisans</h2>
            <p className="mx-auto mt-4 max-w-xl text-secondary">A collective of globally trained stylists unified by technical precision and artistic expression.</p>
          </div>
          <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
            {team.map((member) => (
              <article className="reveal-up rounded-lg border border-secondary-fixed/30 bg-white p-8 text-center shadow-ambient" key={member.name}>
                <img className="mx-auto mb-6 h-36 w-36 rounded-full border-2 border-secondary-fixed object-cover p-1" src={member.image} alt={member.name} loading="lazy" />
                <span className="font-body text-label-md uppercase tracking-widest text-secondary">{member.role}</span>
                <h3 className="mt-2 font-display text-headline-sm text-primary">{member.name}</h3>
                <p className="mt-3 italic text-on-surface-variant">{member.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-primary px-margin-mobile py-24 text-on-primary md:px-margin-desktop md:py-section-gap">
        <div className="reveal-up mx-auto max-w-container-max">
          <h2 className="font-display text-display-lg-mobile md:text-display-lg">The AD Unisex Salon Promise</h2>
          <p className="mt-6 max-w-3xl font-body text-body-lg text-on-primary/80">Transparent pricing, continued education, and post-sanctuary care keep every visit precise, calm, and easy to maintain at home.</p>
          <LinkButton to="/book" className="mt-10 bg-secondary-fixed text-on-secondary-fixed hover:bg-secondary-fixed-dim">Experience the Difference</LinkButton>
        </div>
      </section>
    </main>
  );
}
