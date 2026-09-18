import React from 'react';

const categories = [
  {
    id: 'pizzas',
    name: 'Pizzas',
    tag: 'Classics & Specials',
    description: 'Freshly kneaded daily dough topped with rich tomato sauce, premium mozzarella, paneer, and authentic spices.',
    image: '/images/menu/pizzas.jpg',
    tabIndex: 0
  },
  {
    id: 'live-puff',
    name: 'Live Puff',
    tag: 'Baked Fresh Daily',
    description: 'Crispy, multi-layered golden flaky puffs filled with savory masala, paneer, schezwan, cheese and sev.',
    image: '/images/menu/live-puff.jpg',
    tabIndex: 3
  },
  {
    id: 'street-food',
    name: 'Indian Street Food',
    tag: 'Authentic Street Flavours',
    description: 'Crispy Panipuri, spicy Vada Pav, Frankie rolls, flavorful chaats, and Bombay grilled sandwiches.',
    image: '/images/menu/street-food.jpg',
    tabIndex: 3
  },
  {
    id: 'beverages',
    name: 'Beverages',
    tag: 'Chilled & Refreshing',
    description: 'Sweet Mango Lassi, traditional hot Masala Chai, and ice-cold soft drinks to pair with your feast.',
    image: '/images/menu/beverages.jpg',
    tabIndex: 3
  }
];

export default function Menu({ onOpenMenuModal }) {
  return (
    <section id="menu" className="menu-section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Our Menu</span>
          <h2 className="section-title">Something for every craving.</h2>
          <p className="section-subtitle">
            Explore our visual menu categories. All items are prepared freshly using quality ingredients and traditional spices.
          </p>
        </div>

        <div className="menu-grid">
          {categories.map((cat) => (
            <article key={cat.id} className="menu-card">
              <div className="menu-card-img-wrap">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="menu-card-img"
                  width="400"
                  height="210"
                  loading="lazy"
                />
                <span className="menu-card-tag">{cat.tag}</span>
              </div>
              <div className="menu-card-body">
                <h3 className="menu-card-title">{cat.name}</h3>
                <p className="menu-card-desc">{cat.description}</p>
                <button
                  type="button"
                  className="menu-card-btn"
                  onClick={() => onOpenMenuModal(cat.tabIndex)}
                >
                  <span>View Menu</span>
                  <span aria-hidden="true">&rarr;</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
