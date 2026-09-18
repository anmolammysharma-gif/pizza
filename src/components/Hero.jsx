import React from 'react';

const ORDER_URL = "https://pizzavalaharrow.co.uk/";
const WHATSAPP_URL = "https://wa.me/442030156449?text=Hi%20Pizzavala!%20I%20would%20like%20to%20order%20or%20ask%20a%20question.";

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
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg hero-whatsapp-btn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm0 18.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.23 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.59.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.17-.48-.29z"/>
                </svg>
                <span>WhatsApp Us</span>
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
