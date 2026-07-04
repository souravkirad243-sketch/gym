import React, { useState } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero.jsx";
import LinkButton from "../components/LinkButton.jsx";
import { serviceCards, testimonials } from "../data/site.js";
import { images } from "../utils/images.js";
import { useReveal } from "../hooks/useReveal.js";

export default function Home() {
  const [testimonial, setTestimonial] = useState(0);
  useReveal();

  const active = testimonials[testimonial];

  return (
    <main>
      <Hero
        eyebrow="Reimagine Your Radiance"
        title="An Elevated Sanctuary for the Modern Soul"
        text="Experience bespoke beauty rituals curated to harmonize your spirit and enhance your natural elegance in our boutique lounge."
        image={images.hero}
      />
      <section className="bg-surface px-margin-mobile py-24 md:px-margin-desktop md:py-section-gap">
        <div className="mx-auto grid max-w-container-max grid-cols-1 items-center gap-16 md:grid-cols-2">
          <div className="reveal-up relative">
            <div className="image-fill aspect-[4/5] rounded-lg shadow-ambient" style={{ backgroundImage: `url("${images.story}")` }} />
            <div className="absolute -bottom-8 -right-8 hidden w-60 rounded-lg border border-secondary-fixed bg-secondary-fixed/80 p-7 shadow-ambient lg:block">
              <p className="font-display text-headline-sm italic text-on-secondary-fixed-variant">"Beauty is found in the quiet moments of care."</p>
            </div>
          </div>
          <div className="reveal-up">
            <h2 className="font-display text-headline-md text-primary">Our Sanctuary Story</h2>
            <div className="my-8 h-1 w-20 bg-primary-fixed-dim" />
            <p className="mb-6 font-body text-body-lg text-secondary">Founded on holistic renewal, AD Unisex Salon is more than a salon. It is a curated escape where time slows down and focus returns to the self.</p>
            <p className="mb-8 font-body text-body-md text-secondary/85">Every service is a bespoke ritual, combining world-class technique with botanical elements so you leave feeling revitalized inside and out.</p>
            <Link className="inline-flex items-center gap-3 font-body text-label-md uppercase tracking-widest text-primary transition-transform hover:translate-x-2" to="/about">
              Learn about our philosophy <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-surface-container-low px-margin-mobile py-24 md:px-margin-desktop md:py-section-gap">
        <div className="mx-auto max-w-container-max">
          <div className="reveal-up mb-14 text-center">
            <span className="font-body text-label-md uppercase tracking-widest text-on-secondary-container">The Ritual Menu</span>
            <h2 className="mt-2 font-display text-headline-md text-primary">Signature Offerings</h2>
          </div>
          <div className="grid grid-cols-1 gap-gutter md:grid-cols-12">
            {serviceCards.map((card, index) => {
              const widthClass = index === 0 || index === 3 ? "md:col-span-8" : "md:col-span-4";
              return (
              <Link
                key={card.title}
                to={card.to}
                className={`reveal-up group relative min-h-[360px] overflow-hidden rounded-lg bg-white shadow-ambient transition-shadow hover:shadow-xl ${widthClass}`}
              >
                <div className="image-fill h-full transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url("${card.image}")` }} />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-primary/85 to-transparent p-8">
                  <h3 className="font-display text-headline-sm text-on-primary">{card.title}</h3>
                  <p className="mt-2 max-w-md text-on-primary/85">{card.text}</p>
                  <span className="mt-5 w-fit border-b border-on-primary/50 pb-1 font-body text-label-md uppercase tracking-widest text-on-primary">Explore</span>
                </div>
              </Link>
              );
            })}
          </div>
        </div>
      </section>
      <section className="bg-surface px-margin-mobile py-24 md:px-margin-desktop md:py-section-gap">
        <div className="mx-auto grid max-w-container-max grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="reveal-up">
            <span className="font-body text-label-md uppercase tracking-widest text-primary-container">Voices of AD Unisex Salon</span>
            <h2 className="mb-8 mt-2 font-display text-headline-md text-primary">Client Reflections</h2>
            <blockquote className="border-l-4 border-primary-fixed-dim pl-8">
              <p className="mb-5 font-display text-headline-sm italic text-secondary">"{active.quote}"</p>
              <footer className="font-body text-label-md uppercase tracking-widest text-primary">{active.name}, {active.role}</footer>
            </blockquote>
            <div className="mt-8 flex gap-3">
              {testimonials.map((item, index) => (
                <button key={item.name} className={`h-3 w-8 rounded-full transition-colors ${index === testimonial ? "bg-primary" : "bg-secondary-fixed"}`} onClick={() => setTestimonial(index)} aria-label={`Show testimonial ${index + 1}`} />
              ))}
            </div>
          </div>
          <div className="reveal-up">
            <img className="aspect-square w-full rounded-full border-[12px] border-surface-container object-cover shadow-ambient" src={images.testimonial} alt="Smiling salon client with styled hair" loading="lazy" />
          </div>
        </div>
      </section>
      <section className="px-margin-mobile py-24 md:px-margin-desktop md:py-section-gap">
        <div className="reveal-up mx-auto max-w-container-max rounded-lg bg-primary px-8 py-20 text-center shadow-ambient">
          <h2 className="font-display text-display-lg-mobile text-on-primary md:text-display-lg">Begin Your Ritual</h2>
          <p className="mx-auto mb-9 mt-5 max-w-xl font-body text-body-lg text-on-primary/80">Elevate your routine into a ritual of care. Our artisans are waiting to welcome you.</p>
          <LinkButton to="/book" className="bg-secondary-fixed text-on-secondary-fixed hover:bg-secondary-fixed-dim">Book Your Appointment</LinkButton>
        </div>
      </section>
    </main>
  );
}
