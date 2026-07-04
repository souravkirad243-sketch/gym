import React, { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { faqs, serviceGroups } from "../data/site.js";
import { images } from "../utils/images.js";

export default function Booking() {
  const [params] = useSearchParams();
  const [status, setStatus] = useState("idle");
  const [openFaq, setOpenFaq] = useState(0);
  const services = useMemo(() => serviceGroups.flatMap((group) => group.groups.flatMap((section) => section.items.map((item) => item.name))), []);
  const selectedService = params.get("service") || services[0];

  function handleSubmit(event) {
    event.preventDefault();
    setStatus("loading");
    window.setTimeout(() => {
      setStatus("sent");
      event.currentTarget.reset();
      window.setTimeout(() => setStatus("idle"), 2500);
    }, 700);
  }

  return (
    <main className="px-margin-mobile pb-24 pt-32 md:px-margin-desktop md:pb-section-gap">
      <section className="mx-auto mb-16 max-w-container-max text-center">
        <h1 className="font-display text-display-lg-mobile text-primary md:text-display-lg">Reserve Your Moment</h1>
        <p className="mx-auto mt-5 max-w-2xl font-body text-body-lg text-secondary">Select your desired treatment and let our specialists guide your transformation.</p>
      </section>
      <div className="mx-auto grid max-w-container-max grid-cols-1 gap-gutter lg:grid-cols-12">
        <section className="rounded-lg border border-secondary-fixed/30 bg-surface-container-lowest p-8 shadow-ambient md:p-12 lg:col-span-7">
          <h2 className="mb-8 font-display text-headline-md text-primary">Appointment Request</h2>
          <form className="space-y-7" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-gutter md:grid-cols-2">
              <label className="block">
                <span className="mb-2 block font-body text-label-md uppercase tracking-wider text-secondary">Full Name</span>
                <input className="w-full rounded border border-secondary-fixed bg-white px-4 py-4" name="name" placeholder="Evelyn Thorne" required type="text" />
              </label>
              <label className="block">
                <span className="mb-2 block font-body text-label-md uppercase tracking-wider text-secondary">Email Address</span>
                <input className="w-full rounded border border-secondary-fixed bg-white px-4 py-4" name="email" placeholder="evelyn@example.com" required type="email" />
              </label>
            </div>
            <div className="grid grid-cols-1 gap-gutter md:grid-cols-2">
              <label className="block">
                <span className="mb-2 block font-body text-label-md uppercase tracking-wider text-secondary">Select Service</span>
                <select className="w-full rounded border border-secondary-fixed bg-white px-4 py-4" name="service" defaultValue={selectedService}>
                  {services.map((service) => <option key={service}>{service}</option>)}
                </select>
              </label>
              <label className="block">
                <span className="mb-2 block font-body text-label-md uppercase tracking-wider text-secondary">Preferred Specialist</span>
                <select className="w-full rounded border border-secondary-fixed bg-white px-4 py-4" name="specialist">
                  <option>No Preference</option>
                  <option>Elena Voss</option>
                  <option>Julian Thorne</option>
                  <option>Maya Kalu</option>
                </select>
              </label>
            </div>
            <div className="grid grid-cols-1 gap-gutter md:grid-cols-2">
              <label className="block">
                <span className="mb-2 block font-body text-label-md uppercase tracking-wider text-secondary">Preferred Date</span>
                <input className="w-full rounded border border-secondary-fixed bg-white px-4 py-4" name="date" required type="date" />
              </label>
              <label className="block">
                <span className="mb-2 block font-body text-label-md uppercase tracking-wider text-secondary">Preferred Time</span>
                <input className="w-full rounded border border-secondary-fixed bg-white px-4 py-4" name="time" required type="time" />
              </label>
            </div>
            <label className="block">
              <span className="mb-2 block font-body text-label-md uppercase tracking-wider text-secondary">Additional Notes</span>
              <textarea className="w-full resize-none rounded border border-secondary-fixed bg-white px-4 py-4" name="notes" placeholder="Tell us about your hair history or specific goals..." rows="4" />
            </label>
            <button className="flex w-full items-center justify-center gap-3 rounded bg-primary py-5 font-body text-label-md uppercase tracking-widest text-on-primary transition-all hover:bg-primary-container disabled:opacity-75" disabled={status === "loading"} type="submit">
              <span className="material-symbols-outlined">{status === "sent" ? "check_circle" : status === "loading" ? "progress_activity" : "arrow_forward"}</span>
              {status === "sent" ? "Request Sent" : status === "loading" ? "Processing" : "Request Appointment"}
            </button>
            <p className="text-center font-body text-caption text-secondary/70">Our concierge will contact you within 2 business hours to confirm.</p>
          </form>
        </section>
        <aside className="space-y-gutter lg:col-span-5">
          <div className="rounded-lg border border-secondary-fixed/20 bg-surface-container-high p-8">
            <h3 className="mb-6 font-display text-headline-sm text-primary">Salon Details</h3>
            <div className="space-y-5 text-secondary">
              <p><span className="font-body text-label-md uppercase tracking-wider text-primary">Address</span><br />428 Ivory Lane, Suite 100<br />Chelsea, NY 10011</p>
              <p><span className="font-body text-label-md uppercase tracking-wider text-primary">Direct Line</span><br /><a href="tel:+12125550198">+1 (212) 555-0198</a></p>
              <p><span className="font-body text-label-md uppercase tracking-wider text-primary">Enquiries</span><br /><a href="mailto:hello@luminaelevated.com">hello@luminaelevated.com</a></p>
            </div>
          </div>
          <div className="image-fill h-64 rounded-lg shadow-ambient" style={{ backgroundImage: `url("${images.bookingAccent}")` }} aria-label="Salon product display" />
          <div className="rounded-lg border border-secondary-fixed/30 bg-white p-6 shadow-ambient">
            <h3 className="mb-4 font-display text-headline-sm text-primary">Booking Questions</h3>
            {faqs.map((faq, index) => (
              <div className="border-t border-secondary-fixed/40 py-4" key={faq.question}>
                <button className="flex w-full items-center justify-between text-left font-body text-label-md uppercase tracking-widest text-primary" onClick={() => setOpenFaq(openFaq === index ? -1 : index)} type="button">
                  {faq.question}
                  <span className="material-symbols-outlined">{openFaq === index ? "remove" : "add"}</span>
                </button>
                {openFaq === index && <p className="mt-3 text-secondary">{faq.answer}</p>}
              </div>
            ))}
          </div>
        </aside>
      </div>
      <section className="mx-auto mt-section-gap max-w-container-max overflow-hidden rounded-lg border border-secondary-fixed/30 bg-surface-container shadow-ambient">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="bg-primary p-10 text-on-primary">
            <h2 className="font-display text-headline-md italic">Visit Our Sanctuary</h2>
            <p className="my-6 text-on-primary/80">Located in the heart of Chelsea, with valet parking available for guests.</p>
            <a className="inline-flex items-center gap-2 font-body text-label-md uppercase tracking-widest text-secondary-fixed" href="https://maps.google.com/?q=Chelsea%20New%20York" target="_blank" rel="noreferrer">
              Get Directions <span className="material-symbols-outlined">north_east</span>
            </a>
          </div>
          <img className="h-[360px] w-full object-cover lg:col-span-2 lg:h-full" src={images.map} alt="Map showing the Chelsea salon location" loading="lazy" />
        </div>
      </section>
    </main>
  );
}
