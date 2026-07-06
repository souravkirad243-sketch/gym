import { Link } from 'react-router-dom';
import { formatPrice } from '../data/products.js';
import { useCart } from './CartContext.jsx';
import Icon from './Icon.jsx';

export default function CartSummary({ showCheckout = true }) {
  const { subtotal, tax, total, itemCount } = useCart();

  return (
    <aside className="summary-panel">
      <h2>Order Summary</h2>
      <div className="summary-line">
        <span>Items</span>
        <strong>{itemCount}</strong>
      </div>
      <div className="summary-line">
        <span>Subtotal</span>
        <strong>{formatPrice(subtotal)}</strong>
      </div>
      <div className="summary-line">
        <span>Shipping</span>
        <strong className="lime">Free</strong>
      </div>
      <div className="summary-line">
        <span>Estimated tax</span>
        <strong>{formatPrice(tax)}</strong>
      </div>
      <div className="summary-total">
        <span>Total</span>
        <strong>{formatPrice(total)}</strong>
      </div>
      {showCheckout && (
        <Link className={`btn btn-primary btn-block ${itemCount === 0 ? 'disabled' : ''}`} to="/checkout">
          Proceed to checkout <Icon name="arrow_forward" />
        </Link>
      )}
    </aside>
  );
}
