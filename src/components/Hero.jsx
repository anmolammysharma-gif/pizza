import React from 'react';

const ORDER_URL = "https://pizzavalaharrow.co.uk/";

export default function Hero({ onOpenMenuModal }) {
  const handleScrollToMenu = (e) => {
    e.preventDefault();
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Information and CTAs */}
          <div className="hero-content">
            <div className="hero-eyebrow">
              <span>PIZZA • LIVE PUFF • INDIAN STREET FOOD</span>
            </div>

            <h1 className="hero-headline">
              GOOD FOOD.<br />
              <span className="hero-headline-accent">HAPPIER PEOPLE.</span>
            </h1>

            <p className="hero-description">
              Freshly made pizza, live puff preparations and authentic Indian street food.
            </p>

            <div className="hero-actions">
              <a
                href={ORDER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
              >
                <span>Order Online</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>

              <a
                href="#menu"
                onClick={handleScrollToMenu}
                className="btn btn-outline btn-lg"
              >
                <span>View Menu</span>
              </a>
            </div>

            {/* Badges / Commitments */}
            <div className="hero-badges">
              <div className="hero-badge-item">
                <svg className="hero-badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Fresh Daily Dough</span>
              </div>
              <div className="hero-badge-item">
                <svg className="hero-badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Live Hot Puffs</span>
              </div>
              <div className="hero-badge-item">
                <svg className="hero-badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Harrow, London</span>
              </div>
            </div>
          </div>

          {/* Right Column: High Quality Food Image (STRICTLY NO OVERLAY) */}
          <div className="hero-image-col">
            <div className="hero-image-card">
              <img
                src="/images/banner/hero-pizza.jpg"
                alt="Freshly baked Pizzavala specialty pizza with melted cheese pull, fresh peppers, paneer and authentic spices"
                className="hero-food-img"
                width="600"
                height="480"
                loading="eager"
              />
              <div className="hero-floating-pill">
                <span className="hero-floating-dot"></span>
                <span className="hero-floating-text">Freshly Made To Order</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
