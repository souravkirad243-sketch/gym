import { Link, useParams } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { formatPrice, getProductBySlug, products } from '../data/products.js';
import { useCart } from '../components/CartContext.jsx';
import ProductCard from '../components/ProductCard.jsx';
import Icon from '../components/Icon.jsx';

export default function ProductDetails() {
  const { slug } = useParams();
  const product = getProductBySlug(slug) ?? products[0];
  const { addToCart } = useCart();
  const gallery = product.gallery?.length ? product.gallery : [product.image];
  const [activeImage, setActiveImage] = useState(gallery[0]);
  const related = useMemo(() => products.filter((item) => item.id !== product.id).slice(0, 3), [product.id]);

  return (
    <main className="page">
      <div className="container">
        <Link className="back-link" to="/products">
          <Icon name="arrow_back" /> Back to products
        </Link>
        <section className="details-grid">
          <div>
            <div className="main-product-image">
              <span className="badge">{product.badge}</span>
              <img src={activeImage} alt={product.name} />
            </div>
            <div className="thumb-row">
              {gallery.map((image) => (
                <button className={activeImage === image ? 'active' : ''} key={image} onClick={() => setActiveImage(image)}>
                  <img src={image} alt="" />
                </button>
              ))}
            </div>
          </div>
          <div className="details-copy">
            <span className="eyebrow">{product.category}</span>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <strong className="price-large">{formatPrice(product.price)}</strong>
            <div className="option-grid">
              <button className="selected">2LB <small>28 servings</small></button>
              <button>5LB <small>71 servings</small></button>
              <button className="selected">{product.flavor}</button>
              <button>{product.size}</button>
            </div>
            <button className="btn btn-primary btn-block details-cart" onClick={() => addToCart(product)}>
              Add to cart <Icon name="shopping_cart" />
            </button>
            <div className="trust-row">
              <span><Icon name="verified" /> Original supplement</span>
              <span><Icon name="local_shipping" /> Haryana support</span>
            </div>
          </div>
        </section>

        <section className="nutrition-panel">
          <div>
            <h2>Nutrition Facts</h2>
            {[
              ['Serving size', '1 scoop'],
              ['Protein', '25g'],
              ['Sugar', '0g'],
              ['BCAA', '5.5g'],
              ['Calories', '110'],
            ].map(([label, value]) => (
              <div className="fact-row" key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
          <div>
            <h2>Why it works</h2>
            <p>
              Designed for clean daily use with transparent macros, strong mixability and a premium performance feel.
            </p>
            <div className="meter"><span style={{ width: '92%' }} /></div>
            <small>Protein efficiency 92%</small>
          </div>
        </section>

        <div className="section-heading related-heading">
          <div>
            <span className="eyebrow">More products</span>
            <h2>Build your stack</h2>
          </div>
        </div>
        <div className="product-grid related-grid">
          {related.map((item) => (
            <ProductCard product={item} key={item.id} />
          ))}
        </div>
      </div>
    </main>
  );
}
