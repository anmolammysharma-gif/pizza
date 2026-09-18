import React from "react";

const ORDER_URL = "https://pizzavalaharrow.co.uk/";
const WHATSAPP_URL = "https://wa.me/442030156449?text=Hi%20Pizzavala!%20I%20would%20like%20to%20order%20or%20ask%20a%20question.";

export default function MobileAppNavBar({ onOpenMenuModal }) {
  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="mobile-app-nav-bar" aria-label="Mobile Bottom App Navigation">
      <div className="mobile-app-nav-inner">
        {/* Home */}
        <a
          href="#home"
          onClick={(e) => handleScrollTo(e, "home")}
          className="mobile-app-nav-item"
          aria-label="Home"
        >
          <div className="mobile-app-nav-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
          </div>
          <span className="mobile-app-nav-label">Home</span>
        </a>

        {/* Menu */}
        <button
          type="button"
          onClick={() => onOpenMenuModal(0)}
          className="mobile-app-nav-item"
          aria-label="Menu"
        >
          <div className="mobile-app-nav-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="2" x2="12" y2="22"></line>
              <path d="M12 12L4.93 4.93"></path>
              <path d="M12 12l7.07-7.07"></path>
            </svg>
          </div>
          <span className="mobile-app-nav-label">Menu</span>
        </button>

        {/* WhatsApp */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-app-nav-item mobile-app-nav-whatsapp"
          aria-label="WhatsApp Chat"
        >
          <div className="mobile-app-nav-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
          </div>
          <span className="mobile-app-nav-label">WhatsApp</span>
        </a>

        {/* Call */}
        <a
          href="tel:02030156449"
          className="mobile-app-nav-item"
          aria-label="Call Pizzavala"
        >
          <div className="mobile-app-nav-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </div>
          <span className="mobile-app-nav-label">Call</span>
        </a>

        {/* Order CTA Highlight */}
        <a
          href={ORDER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-app-nav-order-pill"
          aria-label="Order Online"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
          <span>Order</span>
        </a>
      </div>
    </nav>
  );
}

