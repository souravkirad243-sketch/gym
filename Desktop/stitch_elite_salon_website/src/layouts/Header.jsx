import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navItems } from "../data/site.js";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 z-50 w-full border-b border-secondary-container/30 bg-surface/85 backdrop-blur-md transition-shadow ${scrolled ? "shadow-md" : "shadow-sm"}`}>
      <nav className="mx-auto flex h-20 max-w-container-max items-center justify-between px-margin-mobile md:px-margin-desktop">
        <Link className="font-display text-headline-md italic text-primary focus-ring" to="/" onClick={() => setOpen(false)}>
          Lumina Salon
        </Link>
        <div className="hidden items-center gap-9 md:flex">
          {navItems.map((item) => (
            <NavLink
              className={({ isActive }) =>
                `font-body text-label-md uppercase tracking-widest transition-colors focus-ring ${
                  isActive ? "border-b-2 border-primary pb-1 text-primary" : "text-secondary hover:text-primary"
                }`
              }
              key={item.to}
              to={item.to}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <Link className="hidden rounded bg-primary px-6 py-3 font-body text-label-md uppercase tracking-widest text-on-primary transition-all hover:bg-primary-container active:scale-95 focus-ring sm:inline-flex" to="/book">
            Book Now
          </Link>
          <button className="rounded border border-secondary-fixed p-3 text-primary md:hidden focus-ring" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label="Toggle navigation">
            <span className="material-symbols-outlined">{open ? "close" : "menu"}</span>
          </button>
        </div>
      </nav>
      {open && (
        <div className="border-t border-secondary-container/30 bg-surface px-margin-mobile py-5 md:hidden">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <NavLink className="font-body text-label-md uppercase tracking-widest text-primary" key={item.to} to={item.to} onClick={() => setOpen(false)}>
                {item.label}
              </NavLink>
            ))}
            <Link className="rounded bg-primary px-6 py-3 text-center font-body text-label-md uppercase tracking-widest text-on-primary" to="/book" onClick={() => setOpen(false)}>
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
