import { Link } from 'react-router-dom';
import CartSummary from '../components/CartSummary.jsx';
import { useCart } from '../components/CartContext.jsx';
import { formatPrice } from '../data/products.js';
import Icon from '../components/Icon.jsx';

export default function Cart() {
  const { items, increaseQuantity, decreaseQuantity, removeItem } = useCart();

  return (
    <main className="page">
      <div className="container">
        <div className="page-heading compact">
          <span className="eyebrow">Review your stack</span>
          <h1>Cart</h1>
        </div>
        <div className="cart-layout">
          <section className="cart-list">
            {items.length === 0 ? (
              <div className="empty-state">
                <h2>Your cart is empty</h2>
                <p>Add protein, creatine or recovery products to start your order.</p>
                <Link className="btn btn-primary" to="/products">Shop products</Link>
              </div>
            ) : (
              items.map((item) => (
                <article className="cart-item" key={item.id}>
                  <img src={item.image} alt={item.name} />
                  <div>
                    <h2>{item.name}</h2>
                    <p>{item.flavor} / {item.size}</p>
                    <strong>{formatPrice(item.price)}</strong>
                  </div>
                  <div className="quantity-control">
                    <button onClick={() => decreaseQuantity(item.id)} aria-label={`Decrease ${item.name}`}>
                      <Icon name="remove" />
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.id)} aria-label={`Increase ${item.name}`}>
                      <Icon name="add" />
                    </button>
                  </div>
                  <button className="remove-button" onClick={() => removeItem(item.id)}>
                    <Icon name="delete" /> Remove
                  </button>
                </article>
              ))
            )}
          </section>
          <CartSummary />
        </div>
      </div>
    </main>
  );
}
