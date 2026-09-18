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
