import React from 'react';

const ORDER_URL = "https://pizzavalaharrow.co.uk/";

export default function Footer({ onOpenMenuModal }) {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Col */}
          <div className="footer-brand-col">
            <img
              src="/images/logo/pizzavala-logo-light.png"
              alt="Pizzavala Logo"
              className="footer-logo-img"
              width="200"
              height="44"
            />
            <p className="footer-tagline">
              PIZZA • LIVE PUFF • INDIAN STREET FOOD
            </p>
            <p className="footer-desc">
              Freshly made pizzas, live puff preparations and authentic Indian street food in Harrow, London.
            </p>
            <div className="footer-social-links">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="Pizzavala on Facebook"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="Pizzavala on Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="https://wa.me/442030156449?text=Hi%20Pizzavala!%20I%20would%20like%20to%20order%20or%20ask%20a%20question."
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn footer-social-whatsapp"
                aria-label="Chat with Pizzavala on WhatsApp"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm0 18.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.23 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.59.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.17-.48-.29z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <a href="#home" className="footer-link" onClick={(e) => handleNavClick(e, 'home')}>
                  Home
                </a>
              </li>
              <li>
                <a href="#menu" className="footer-link" onClick={(e) => handleNavClick(e, 'menu')}>
                  Menu
                </a>
              </li>
              <li>
                <a href="#about" className="footer-link" onClick={(e) => handleNavClick(e, 'about')}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#gallery" className="footer-link" onClick={(e) => handleNavClick(e, 'gallery')}>
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="footer-link" onClick={(e) => handleNavClick(e, 'contact')}>
                  Contact
                </a>
              </li>
              <li>
                <a href="#location" className="footer-link" onClick={(e) => handleNavClick(e, 'location')}>
                  Location
                </a>
              </li>
            </ul>
          </div>

          {/* Menu Links */}
          <div>
            <h4 className="footer-title">Our Food</h4>
            <ul className="footer-links">
              <li>
                <button
                  type="button"
                  className="footer-link"
                  onClick={() => onOpenMenuModal(0)}
                  style={{ textAlign: 'left', padding: 0 }}
                >
                  Pizzavala Classics
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="footer-link"
                  onClick={() => onOpenMenuModal(2)}
                  style={{ textAlign: 'left', padding: 0 }}
                >
                  Specialty Pizzas
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="footer-link"
                  onClick={() => onOpenMenuModal(3)}
                  style={{ textAlign: 'left', padding: 0 }}
                >
                  Live Puffs
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="footer-link"
                  onClick={() => onOpenMenuModal(3)}
                  style={{ textAlign: 'left', padding: 0 }}
                >
                  Indian Street Food
                </button>
              </li>
              <li>
                <a
                  href={ORDER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                  style={{ color: 'var(--color-orange)', fontWeight: '700' }}
                >
                  Order Online &rarr;
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="footer-title">Visit Us</h4>
            <div className="footer-contact-item">
              <strong>Address:</strong><br />
              76, The Station Rd<br />
              Harrow HA1 2UB, London
            </div>
            <div className="footer-contact-item">
              <strong>Phone:</strong><br />
              <a href="tel:02030156449" className="footer-link">020 3015 6449</a>
            </div>
            <div className="footer-contact-item">
              <strong>Opening Hours:</strong><br />
              7 Days a Week: 8AM – 12AM
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Pizzavala. All rights reserved.</p>
          <p>Freshly Crafted in Harrow, London.</p>
        </div>
      </div>
    </footer>
  );
}
