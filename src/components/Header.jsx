import React, { useState, useEffect } from 'react';

const ORDER_URL = "https://pizzavalaharrow.co.uk/";

export default function Header({ onOpenMenuModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'menu', 'about', 'gallery', 'contact', 'location'];
      const scrollPos = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
    { name: 'Location', href: '#location' }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container header-container">
          {/* Logo */}
          <a
            href="#home"
            className="header-logo-link"
            onClick={(e) => handleNavClick(e, '#home')}
            aria-label="Pizzavala Home"
          >
            <img
              src="/images/logo/pizzavala-logo-light.png"
              alt="PIZZAVALA — Pizza • Live Puff • Indian Street Food"
              className="header-logo-img"
              width="220"
              height="48"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`nav-link ${activeSection === link.href.replace('#', '') ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action */}
          <div className="header-cta-wrapper">
            <a
              href={ORDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm header-order-btn"
            >
              <span>Order Online</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className="mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Backdrop */}
      <div
        className={`mobile-nav-backdrop ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Navigation Drawer */}
      <div
        className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
      >
        <div className="mobile-nav-header">
          <img
            src="/images/logo/pizzavala-logo-light.png"
            alt="Pizzavala Logo"
            className="mobile-nav-logo"
          />
          <button
            type="button"
            className="mobile-nav-close"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <nav className="mobile-nav-links" aria-label="Mobile links">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`mobile-nav-link ${activeSection === link.href.replace('#', '') ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="mobile-nav-cta">
          <a
            href={ORDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            onClick={() => setMobileMenuOpen(false)}
          >
            Order Online Now
          </a>
          <a href="tel:02030156449" className="mobile-nav-phone">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <span>020 3015 6449</span>
          </a>
        </div>
      </div>
    </>
  );
}
