import { Link } from 'react-router-dom';
import { formatPrice } from '../data/products.js';
import { useCart } from './CartContext.jsx';
import Icon from './Icon.jsx';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <article className="product-card">
      <Link to={`/products/${product.slug}`} className="product-image" aria-label={`View ${product.name}`}>
        {product.badge && <span className="badge">{product.badge}</span>}
        <img src={product.image} alt={product.name} />
      </Link>
      <div className="product-body">
        <div className="rating" aria-label={`${product.rating} star rating`}>
          {Array.from({ length: 5 }, (_, index) => (
            <Icon key={index} name="star" filled={index < Math.floor(product.rating)} />
          ))}
          <small>({product.reviews})</small>
        </div>
        <div className="product-title-row">
          <Link to={`/products/${product.slug}`}>{product.name}</Link>
          <strong>{formatPrice(product.price)}</strong>
        </div>
        <p>{product.macros}</p>
        <button className="btn btn-primary btn-block" onClick={() => addToCart(product)}>
          <Icon name="shopping_cart" /> Add to cart
        </button>
      </div>
    </article>
  );
}
