import React, { useEffect, useState } from 'react';

const ORDER_URL = "https://pizzavalaharrow.co.uk/";

const menuSheets = [
  {
    title: 'Classics 1',
    description: 'Margherita, Garden Fresh, Vegetarian Volcano, Golden Veg, Jain/Swaminarayan, Indian Style & Tandoori',
    image: '/images/menu/menu-classics-1.jpg'
  },
  {
    title: 'Classics 2',
    description: 'BBQ Hot, Country Chicken, Mexican, Texas BBQ, Pepperoni Veg, New Yorker, Hot & Spicy & Hawaiian',
    image: '/images/menu/menu-classics-2.jpg'
  },
  {
    title: 'Pizzavala Specials',
    description: 'Paneer Chilli, Manchurian, Pavbhaji, Garlic, Ame Gujarati Spicy, Peri Peri Mushroom & Four Cheese',
    image: '/images/menu/menu-specials.jpg'
  },
  {
    title: 'Live Puff & Street Food',
    description: 'Panipuri, Sev Puri, Dabeli, Vada Pav, Frankies, Bombay Sandwiches & Live Freshly Baked Puffs',
    image: '/images/menu/menu-streetfood-puff.jpg'
  }
];

export default function MenuModal({ isOpen, onClose, initialTab = 0 }) {
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  // Lock body scroll and handle Escape key
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className={`modal-backdrop ${isOpen ? 'open' : ''}`}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="menu-modal-title"
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <h3 id="menu-modal-title" className="modal-title">Pizzavala Full Menu</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginTop: '2px' }}>
              Official restaurant menu & price list
            </p>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close menu modal"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className="modal-body">
          {/* Menu Category Tabs */}
          <div className="menu-tabs" role="tablist">
            {menuSheets.map((sheet, index) => (
              <button
                key={sheet.title}
                role="tab"
                aria-selected={activeTab === index}
                type="button"
                className={`menu-tab-btn ${activeTab === index ? 'active' : ''}`}
                onClick={() => setActiveTab(index)}
              >
                {sheet.title}
              </button>
            ))}
          </div>

          <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginBottom: '16px', textAlign: 'center' }}>
            {menuSheets[activeTab].description}
          </p>

          <img
            src={menuSheets[activeTab].image}
            alt={menuSheets[activeTab].title}
            className="modal-menu-sheet-img"
          />
        </div>

        <div className="modal-footer">
          <span style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
            Order for fast collection or delivery in Harrow
          </span>
          <a
            href={ORDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
          >
            <span>Order Online Now</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
