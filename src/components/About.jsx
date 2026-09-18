import React from 'react';

export default function About() {
  const handleScrollToContact = (e) => {
    e.preventDefault();
    const contactEl = document.getElementById('contact');
    if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          {/* Left Column: Image of Pizzavala Storefront */}
          <div className="about-image-wrap">
            <img
              src="/images/gallery/restaurant-1.jpg"
              alt="Pizzavala Restaurant storefront at 176 Station Road, Harrow"
              className="about-img"
              width="600"
              height="420"
              loading="lazy"
            />
            <div className="about-image-caption">
              176 Station Road, Harrow HA1 2UB • Open 7 Days: 8AM – 12AM
            </div>
          </div>

          {/* Right Column: Restaurant Story */}
          <div className="about-content">
            <span className="section-eyebrow">About Pizzavala</span>
            <h2 className="about-heading">Good Food Brings People Together</h2>
            <p className="about-copy">
              Pizzavala brings together freshly made pizzas, live puff preparations and authentic Indian street food. Our focus is simple — great food, fresh ingredients and a welcoming place to enjoy it.
            </p>

            <div className="about-features">
              <div className="about-feature-item">
                <span className="about-feature-bullet"></span>
                <span>Fresh dough kneaded daily</span>
              </div>
              <div className="about-feature-item">
                <span className="about-feature-bullet"></span>
                <span>Authentic live puff preparation</span>
              </div>
              <div className="about-feature-item">
                <span className="about-feature-bullet"></span>
                <span>Genuine Indian street food</span>
              </div>
              <div className="about-feature-item">
                <span className="about-feature-bullet"></span>
                <span>Warm, family-friendly atmosphere</span>
              </div>
            </div>

            <a
              href="#contact"
              onClick={handleScrollToContact}
              className="btn btn-outline"
            >
              <span>Our Story & Location</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
