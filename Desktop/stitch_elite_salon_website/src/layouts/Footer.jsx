import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-primary py-16 text-on-primary md:pt-section-gap">
      <div className="mx-auto grid max-w-container-max grid-cols-1 gap-gutter px-margin-mobile md:grid-cols-4 md:px-margin-desktop">
        <div className="md:col-span-2">
          <Link className="mb-5 block font-display text-headline-sm text-secondary-fixed" to="/">
            Lumina Elevated Sanctuary
          </Link>
          <p className="max-w-sm text-on-primary/75">Crafting timeless elegance and mindful beauty through bespoke rituals and artisanal care.</p>
        </div>
        <div className="flex flex-col gap-3">
          <span className="font-body text-label-md uppercase tracking-widest text-secondary-fixed">Quick Links</span>
          <Link to="/privacy-policy" className="text-on-primary/80 hover:text-secondary-fixed">Privacy Policy</Link>
          <Link to="/terms-of-service" className="text-on-primary/80 hover:text-secondary-fixed">Terms of Service</Link>
          <Link to="/careers" className="text-on-primary/80 hover:text-secondary-fixed">Careers</Link>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-on-primary/80 hover:text-secondary-fixed">Instagram</a>
        </div>
        <div className="flex flex-col gap-3">
          <span className="font-body text-label-md uppercase tracking-widest text-secondary-fixed">Contact</span>
          <p className="text-on-primary/80">428 Ivory Lane, Suite 100<br />Chelsea, NY 10011</p>
          <a className="text-on-primary/80 hover:text-secondary-fixed" href="tel:+12125550198">+1 (212) 555-0198</a>
          <a className="text-on-primary/80 hover:text-secondary-fixed" href="mailto:hello@luminaelevated.com">hello@luminaelevated.com</a>
        </div>
      </div>
      <div className="mx-auto mt-14 max-w-container-max border-t border-on-primary/10 px-margin-mobile pt-8 text-center text-on-primary/55 md:px-margin-desktop">
        © 2026 Lumina Elevated Sanctuary. All rights reserved.
      </div>
    </footer>
  );
}
