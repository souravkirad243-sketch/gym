import { Link } from 'react-router-dom';
import { brand } from '../assets/brand.js';
import { products } from '../data/products.js';
import ProductCard from '../components/ProductCard.jsx';
import Icon from '../components/Icon.jsx';

const heroImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBb59Lw1e334FSQhOBJBpMtyf-4xuNf4Y6XL9jSWOtEc9o0CmF7Be5oPkv4eg1p7i2UCGCpreVCE7u-9KTECZwWVKtuJL3nnXxs1HEMjxO4mbJ9JD-daE8AtR7gvY0GeWYH2-Mm11EvdTWahd24ISJqZXr7dz0wtdLVANtD1Xw7QwavqgJ_BfhfsHugYzhIIZ92Qt_iqgKiQsiWBeZOLX3JPbmpLf2m-2LPETed6mJICTgrsIWTG52U';

export default function Home() {
  return (
    <main>
      <section className="hero">
        <img src={heroImage} alt="Athlete training in a dark performance gym" />
        <div className="hero-overlay" />
        <div className="container hero-content reveal">
          <span className="eyebrow">Original supplements in Haryana</span>
          <h1>
            {brand.shopName}
            <span> Fuel Pure Strength</span>
          </h1>
          <p>
            {brand.category} for whey, creatine, pre-workout, recovery and clean daily nutrition.
            Premium formulas, hard-edged design, fast local support.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/products">
              Shop products <Icon name="arrow_forward" />
            </Link>
            <Link className="btn btn-outline" to="/contact">
              WhatsApp order
            </Link>
          </div>
        </div>
      </section>

      <section className="section dark-band">
        <div className="container category-grid">
          {['Whey Protein', 'Creatine', 'Pre Workout'].map((category) => (
            <Link className="category-tile" to="/products" key={category}>
              <span>{category}</span>
              <Icon name="trending_flat" />
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">The stack</span>
              <h2>Best Sellers</h2>
            </div>
            <Link to="/products">View all products</Link>
          </div>
          <div className="product-grid">
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="section science-section">
        <div className="container split">
          <div className="image-frame">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLucaEPDIF_GgzZvbm_0Yd0ZrZ3Iv3VOOnBSJQvbxLeoFRBufoTeSO5z4QmCopeb8-0zlQH3X4_1TKQ2N1NUq2oRtPwyPkZGUAPq_tAby3urUvjBl2mfgd8zfdB3nbDsIV05PDeYz-ds0PJ5k3JvJfvGg5YsjREEGRG0x2BW6pAwn1pIRlLLkwbhEAGhmlSIU5vDi_Bl3gb9kL-UkkNST6FYQboVSPXKH2bmlULBjuXq0FMIKf2q4L"
              alt="Protein powder close-up"
            />
            <strong>100% Original</strong>
          </div>
          <div>
            <span className="eyebrow">Why buy here</span>
            <h2>Haryana supplement store built for trust</h2>
            <p>
              We focus on authentic performance nutrition, clear product details, direct WhatsApp support,
              and a clean purchase flow from product selection to checkout.
            </p>
            <div className="feature-grid">
              <div>
                <h3>Original Stock</h3>
                <p>Curated products with a premium protein-store catalog structure.</p>
              </div>
              <div>
                <h3>Fast Cart</h3>
                <p>Add, remove and update quantities with totals saved between visits.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
