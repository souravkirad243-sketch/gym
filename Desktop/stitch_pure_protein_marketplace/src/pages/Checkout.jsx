import { useState } from 'react';
import { Link } from 'react-router-dom';
import CartSummary from '../components/CartSummary.jsx';
import { useCart } from '../components/CartContext.jsx';
import { formatPrice } from '../data/products.js';
import { brand } from '../assets/brand.js';
import Icon from '../components/Icon.jsx';

export default function Checkout() {
  const { items, itemCount, clearCart } = useCart();
  const [placed, setPlaced] = useState(false);

  const placeOrder = (event) => {
    event.preventDefault();
    if (!itemCount) return;
    setPlaced(true);
    clearCart();
  };

  if (placed) {
    return (
      <main className="page">
        <div className="container">
          <div className="success-panel">
            <Icon name="check_circle" />
            <h1>Order request placed</h1>
            <p>
              This demo checkout is complete. Connect payment/shipping APIs later; for now, customers can confirm
              through WhatsApp at {brand.whatsapp}.
            </p>
            <Link className="btn btn-primary" to="/products">Continue shopping</Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="page">
      <div className="container">
        <div className="breadcrumb">Cart <Icon name="chevron_right" /> Information <Icon name="chevron_right" /> Payment</div>
        <div className="checkout-layout">
          <form className="checkout-form" onSubmit={placeOrder}>
            <section>
              <h2>Contact Information</h2>
              <input required placeholder="Email or mobile phone number" type="text" />
              <label className="inline-check">
                <input type="checkbox" /> Keep me updated on offers from {brand.shopName}
              </label>
            </section>
            <section>
              <h2>Shipping Address</h2>
              <div className="form-grid">
                <input required placeholder="First name" />
                <input required placeholder="Last name" />
                <input className="wide" required placeholder="Address" />
                <input placeholder="Apartment, suite, etc. (optional)" className="wide" />
                <input required placeholder="City" />
                <input required placeholder="State" defaultValue="Haryana" />
                <input required placeholder="PIN code" />
                <input required placeholder="Phone / WhatsApp" />
              </div>
            </section>
            <section>
              <h2>Payment</h2>
              <div className="payment-box">
                <div><Icon name="credit_card" /> Demo secure card payment</div>
                <input required placeholder="Card number" />
                <div className="form-grid">
                  <input required placeholder="MM / YY" />
                  <input required placeholder="CVV" />
                </div>
              </div>
            </section>
            <button className="btn btn-primary btn-block" disabled={!itemCount}>
              Place order <Icon name="lock" />
            </button>
          </form>
          <aside>
            <div className="checkout-items">
              <h2>Items</h2>
              {items.length ? (
                items.map((item) => (
                  <div className="checkout-item" key={item.id}>
                    <img src={item.image} alt={item.name} />
                    <div>
                      <strong>{item.name}</strong>
                      <span>Qty {item.quantity}</span>
                    </div>
                    <strong>{formatPrice(item.price * item.quantity)}</strong>
                  </div>
                ))
              ) : (
                <p>No items in cart.</p>
              )}
            </div>
            <CartSummary showCheckout={false} />
          </aside>
        </div>
      </div>
    </main>
  );
}
