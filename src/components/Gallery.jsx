import React, { useState, useEffect } from 'react';

const galleryItems = [
  {
    id: 1,
    title: 'Pizzavala Harrow Restaurant',
    subtitle: '176 Station Road Storefront',
    image: '/images/gallery/restaurant-1.jpg'
  },
  {
    id: 2,
    title: 'Signature Paneer Pizza',
    subtitle: 'Freshly Baked with Melted Cheese Pull',
    image: '/images/gallery/pizza-1.jpg'
  },
  {
    id: 3,
    title: 'Freshly Baked Live Puffs',
    subtitle: 'Golden Flaky Pastry with Mint Chutney',
    image: '/images/gallery/live-puff-1.jpg'
  },
  {
    id: 4,
    title: 'Authentic Indian Street Chaat',
    subtitle: 'Loaded with Sev, Chutney & Spices',
    image: '/images/gallery/street-food-1.jpg'
  },
  {
    id: 5,
    title: 'Stone-Baked Pizza Classics',
    subtitle: 'Fresh Tomato, Basil & Mushroom',
    image: '/images/gallery/pizza-2.jpg'
  },
  {
    id: 6,
    title: 'Refreshing Beverages',
    subtitle: 'Chilled Mango Lassi & Coolers',
    image: '/images/gallery/beverages-1.jpg'
  }
];

export default function Gallery() {
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    if (activeImage) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') setActiveImage(null);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [activeImage]);

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Our Gallery</span>
          <h2 className="section-title">Fresh Flavours in Every Bite</h2>
          <p className="section-subtitle">
            Take a look at our authentic dishes, golden live puffs, and restaurant atmosphere.
          </p>
        </div>

        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="gallery-item"
              onClick={() => setActiveImage(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveImage(item);
                }
              }}
              aria-label={`View ${item.title}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="gallery-img"
                loading="lazy"
                width="400"
                height="300"
              />
              <div className="gallery-overlay">
                <div className="gallery-icon-pill">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    <line x1="11" y1="8" x2="11" y2="14"></line>
                    <line x1="8" y1="11" x2="14" y2="11"></line>
                  </svg>
                  <span>View</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="modal-backdrop open"
          onClick={() => setActiveImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="gallery-lightbox-modal" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="gallery-lightbox-close"
              onClick={() => setActiveImage(null)}
              aria-label="Close image lightbox"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <img
              src={activeImage.image}
              alt={activeImage.title}
              className="gallery-lightbox-img"
            />
            <div style={{ textAlign: 'center', marginTop: '12px', color: '#ffffff' }}>
              <h4 style={{ fontSize: '1.1rem', fontWeight: '700' }}>{activeImage.title}</h4>
              <p style={{ fontSize: '0.9rem', opacity: 0.85 }}>{activeImage.subtitle}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
