import { brand } from '../assets/brand.js';
import Icon from '../components/Icon.jsx';

export default function Contact() {
  return (
    <main className="page contact-page">
      <div className="container contact-grid">
        <section>
          <span className="eyebrow">Contact</span>
          <h1>Talk to {brand.shopName}</h1>
          <p>
            Ask about product availability, original supplement verification, bulk gym orders, or local delivery in Haryana.
          </p>
          <div className="contact-cards">
            <div>
              <Icon name="call" />
              <span>WhatsApp</span>
              <strong>{brand.whatsapp}</strong>
            </div>
            <div>
              <Icon name="location_on" />
              <span>Location</span>
              <strong>{brand.location}</strong>
            </div>
            <div>
              <Icon name="mail" />
              <span>Email</span>
              <strong>{brand.email}</strong>
            </div>
          </div>
        </section>
        <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
          <h2>Send inquiry</h2>
          <input required placeholder="Full name" />
          <input required placeholder="Phone / WhatsApp" />
          <input placeholder="Product interest" />
          <textarea required rows="5" placeholder="Message" />
          <button className="btn btn-primary btn-block">Submit inquiry</button>
        </form>
      </div>
    </main>
  );
}
