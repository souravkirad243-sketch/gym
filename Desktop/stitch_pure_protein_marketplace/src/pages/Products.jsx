import { useMemo, useState } from 'react';
import ProductCard from '../components/ProductCard.jsx';
import { products } from '../data/products.js';

export default function Products() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [sort, setSort] = useState('popular');

  const categories = ['All', ...new Set(products.map((product) => product.category))];

  const visibleProducts = useMemo(() => {
    return products
      .filter((product) => category === 'All' || product.category === category)
      .filter((product) => product.name.toLowerCase().includes(query.toLowerCase()))
      .sort((a, b) => {
        if (sort === 'low') return a.price - b.price;
        if (sort === 'high') return b.price - a.price;
        return b.reviews - a.reviews;
      });
  }, [category, query, sort]);

  return (
    <main className="page">
      <div className="container">
        <div className="page-heading">
          <span className="eyebrow">Original supplement protein store</span>
          <h1>Products</h1>
          <p>Search and filter clean performance products for strength, recovery and daily nutrition.</p>
        </div>

        <div className="shop-layout">
          <aside className="filters">
            <label>
              Search
              <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Protein, creatine..." />
            </label>
            <label>
              Sort by
              <select value={sort} onChange={(event) => setSort(event.target.value)}>
                <option value="popular">Popularity</option>
                <option value="low">Price: low to high</option>
                <option value="high">Price: high to low</option>
              </select>
            </label>
            <div>
              <h3>Category</h3>
              {categories.map((item) => (
                <button
                  className={category === item ? 'filter-chip active' : 'filter-chip'}
                  key={item}
                  onClick={() => setCategory(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </aside>
          <section className="product-grid products-page-grid">
            {visibleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </section>
        </div>
      </div>
    </main>
  );
}
