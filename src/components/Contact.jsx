import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (formData.phone.trim() && !/^[0-9+\s()-]{7,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    // Simulate reliable form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 600);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Contact & Location</span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Visit our restaurant in Harrow or send us a message. We look forward to serving you!
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Contact Information + Map */}
          <div className="contact-info-card" id="location">
            <div className="contact-detail-group">
              {/* Phone */}
              <div className="contact-detail-item">
                <div className="contact-icon-box" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className="contact-detail-text">
                  <h4>Phone</h4>
                  <a href="tel:02030156449">020 3015 6449</a>
                </div>
              </div>

              {/* Email */}
              <div className="contact-detail-item">
                <div className="contact-icon-box" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div className="contact-detail-text">
                  <h4>Email</h4>
                  <a href="mailto:info@pizzavala.co.uk">info@pizzavala.co.uk</a>
                </div>
              </div>

              {/* Address */}
              <div className="contact-detail-item">
                <div className="contact-icon-box" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="contact-detail-text">
                  <h4>Address</h4>
                  <p>76, The Station Rd, Harrow HA1 2UB, London</p>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="contact-detail-item">
                <div className="contact-icon-box" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <div className="contact-detail-text">
                  <h4>Opening Hours</h4>
                  <p><strong>7 Days a Week</strong>: 8:00 AM – 12:00 AM</p>
                </div>
              </div>
            </div>

            {/* Interactive Map Embed */}
            <div className="contact-map-container">
              <iframe
                title="Pizzavala Harrow Location Map"
                className="contact-map-iframe"
                src="https://maps.google.com/maps?q=176%20Station%20Road,%20Harrow%20HA1%202UB&t=&z=15&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-card">
            <h3 className="contact-form-title">Send Us a Message</h3>
            <p className="contact-form-desc">
              Fill in the form below and our team will get back to you promptly.
            </p>

            {isSuccess ? (
              <div className="form-success-banner" role="alert">
                <div className="form-success-icon" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', color: 'var(--color-charcoal)' }}>
                  Message Sent Successfully!
                </h4>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', maxWidth: '360px' }}>
                  Thank you for reaching out to Pizzavala. We have received your inquiry and will be in touch shortly.
                </p>
                <button
                  type="button"
                  className="btn btn-primary btn-sm"
                  onClick={() => setIsSuccess(false)}
                  style={{ marginTop: '8px' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                {/* Name */}
                <div className="form-group">
                  <label htmlFor="contact-name" className="form-label">
                    Full Name <span style={{ color: 'var(--color-orange)' }}>*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={`form-input ${errors.name ? 'error' : ''}`}
                    aria-invalid={errors.name ? 'true' : 'false'}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    required
                  />
                  {errors.name && (
                    <span id="name-error" className="form-error-msg" role="alert">
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div className="form-group">
                  <label htmlFor="contact-email" className="form-label">
                    Email Address <span style={{ color: 'var(--color-orange)' }}>*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className={`form-input ${errors.email ? 'error' : ''}`}
                    aria-invalid={errors.email ? 'true' : 'false'}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    required
                  />
                  {errors.email && (
                    <span id="email-error" className="form-error-msg" role="alert">
                      {errors.email}
                    </span>
                  )}
                </div>

                {/* Phone */}
                <div className="form-group">
                  <label htmlFor="contact-phone" className="form-label">
                    Phone Number (Optional)
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="07771 236042"
                    className={`form-input ${errors.phone ? 'error' : ''}`}
                    aria-invalid={errors.phone ? 'true' : 'false'}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                  />
                  {errors.phone && (
                    <span id="phone-error" className="form-error-msg" role="alert">
                      {errors.phone}
                    </span>
                  )}
                </div>

                {/* Message */}
                <div className="form-group">
                  <label htmlFor="contact-message" className="form-label">
                    Your Message <span style={{ color: 'var(--color-orange)' }}>*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we assist you?"
                    className={`form-textarea ${errors.message ? 'error' : ''}`}
                    aria-invalid={errors.message ? 'true' : 'false'}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    required
                  />
                  {errors.message && (
                    <span id="message-error" className="form-error-msg" role="alert">
                      {errors.message}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%', marginTop: '8px' }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
