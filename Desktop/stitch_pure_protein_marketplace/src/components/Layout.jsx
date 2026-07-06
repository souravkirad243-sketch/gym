import { NavLink, Outlet } from 'react-router-dom';
import { brand } from '../assets/brand.js';
import { useCart } from './CartContext.jsx';
import Icon from './Icon.jsx';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/contact', label: 'Contact' },
];

export default function Layout() {
  const { itemCount } = useCart();

  return (
    <>
      <header className="site-header">
        <NavLink className="brand-mark" to="/">
          {brand.shopName}
        </NavLink>
        <nav className="main-nav">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={({ isActive }) => (isActive ? 'active' : '')}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="nav-actions">
          <NavLink className="icon-button" to="/contact" title="WhatsApp contact">
            <Icon name="call" />
          </NavLink>
          <NavLink className="cart-link" to="/cart" title="Cart">
            <Icon name="shopping_cart" />
            {itemCount > 0 && <span>{itemCount}</span>}
          </NavLink>
        </div>
      </header>
      <Outlet />
      <footer className="footer">
        <div>
          <h2>{brand.shopName}</h2>
          <p>{brand.category}. Premium dark-store experience for serious athletes in {brand.location}.</p>
        </div>
        <div className="footer-links">
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/cart">Cart</NavLink>
          <NavLink to="/checkout">Checkout</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
        <p className="copyright">© 2026 {brand.shopName}. Original supplements. Placeholder WhatsApp: {brand.whatsapp}</p>
      </footer>
    </>
  );
}
