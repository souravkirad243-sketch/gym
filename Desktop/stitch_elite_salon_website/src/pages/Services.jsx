import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero.jsx";
import { serviceGroups } from "../data/site.js";
import { useReveal } from "../hooks/useReveal.js";

export default function Services() {
  useReveal();

  return (
    <main className="pt-20">
      <Hero compact title="Elevated Sanctuary" text="Discover a curated collection of premium beauty and wellness treatments designed for renewal." />
      <nav className="sticky top-20 z-30 border-b border-secondary-container/30 bg-surface/90 py-4 backdrop-blur-md">
        <div className="mx-auto flex max-w-container-max justify-center gap-8 px-margin-mobile md:gap-16 md:px-margin-desktop">
          {serviceGroups.map((group) => (
            <a key={group.id} className="font-body text-label-md uppercase tracking-widest text-secondary transition-colors hover:text-primary" href={`#${group.id}`}>
              {group.title.split(" ")[0]}
            </a>
          ))}
        </div>
      </nav>
      <div className="mx-auto max-w-container-max px-margin-mobile py-20 md:px-margin-desktop">
        {serviceGroups.map((section) => (
          <section className="reveal-up mb-section-gap scroll-mt-36 last:mb-0" id={section.id} key={section.id}>
            <div className="grid grid-cols-1 gap-gutter lg:grid-cols-12">
              <div className="lg:col-span-4">
                <div className="lg:sticky lg:top-40">
                  <h2 className="font-display text-headline-md italic text-primary">{section.title}</h2>
                  <p className="mb-8 mt-4 font-body text-body-md text-secondary">{section.intro}</p>
                  {section.image && <div className="image-fill aspect-[3/4] rounded-lg shadow-ambient" style={{ backgroundImage: `url("${section.image}")` }} />}
                </div>
              </div>
              <div className="space-y-12 lg:col-span-8">
                {section.groups.map((group) => (
                  <div key={group.label} className="rounded-lg border border-secondary-fixed/30 bg-surface-container-lowest p-6 shadow-ambient md:p-8">
                    <h3 className="mb-7 border-b border-secondary-container pb-3 font-body text-label-md uppercase tracking-[0.2em] text-primary-container">{group.label}</h3>
                    <div className="space-y-8">
                      {group.items.map((item) => (
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_auto]" key={item.name}>
                          <div>
                            <div className="flex items-baseline gap-3">
                              <h4 className="font-display text-headline-sm text-primary">{item.name}</h4>
                              <div className="hidden flex-1 border-b border-dotted border-secondary-fixed md:block" />
                              <span className="font-display text-headline-sm text-primary">{item.price}</span>
                            </div>
                            <p className="mt-1 font-body text-body-md italic text-secondary">{item.description} ({item.duration})</p>
                          </div>
                          <Link className="h-fit rounded bg-secondary-container px-6 py-3 text-center font-body text-label-md uppercase tracking-widest text-on-secondary-container transition-all hover:bg-primary hover:text-on-primary" to={`/book?service=${encodeURIComponent(item.name)}`}>
                            Book
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
