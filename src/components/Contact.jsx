import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    stage: '',
    bottleneck: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API Network Delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1800);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="section-container">
        <div className="contact-layout">
          {/* Left Column: Direct Info */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="section-tagline">COMMENCE SCALING</span>
            <h2 className="section-title">
              Ready to build <span className="text-gradient-serif">something legendary?</span>
            </h2>
            <p className="contact-lead-text">
              Skip the trial and error. Book a complimentary 20-minute strategic consultation with Shriram HR to dissect your current bottleneck.
            </p>

            <div className="contact-details-box">
              <div className="contact-detail-item">
                <div className="item-icon-wrapper">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div className="item-text">
                  <span className="detail-label">Direct Communication</span>
                  <span className="detail-value">advisory@startsmart-se.com</span>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="item-icon-wrapper">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div className="item-text">
                  <span className="detail-label">Response Time</span>
                  <span className="detail-value">Within 24 business hours</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form Container Card */}
          <motion.div
            className="glass-card contact-form-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            onMouseMove={handleMouseMove}
          >
            <div className="card-glow"></div>
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                  key="contact-form-content"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="form-title">Request a Strategy Brief</h3>
                  <form onSubmit={handleSubmit} className="discovery-form">
                    <div className="form-row">
                      <div className="input-group">
                        <label htmlFor="founder-name">Your Name</label>
                        <input
                          type="text"
                          id="founder-name"
                          name="name"
                          placeholder="e.g., Alex Carter"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="input-group">
                        <label htmlFor="company-name">Company Name</label>
                        <input
                          type="text"
                          id="company-name"
                          name="company"
                          placeholder="e.g., Nexus AI"
                          value={formData.company}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="input-group">
                      <label htmlFor="email-address">Email Address</label>
                      <input
                        type="email"
                        id="email-address"
                        name="email"
                        placeholder="e.g., alex@nexus.io"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="input-group">
                      <label htmlFor="current-stage">Startup Stage</label>
                      <select
                        id="current-stage"
                        name="stage"
                        className="custom-select"
                        value={formData.stage}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="" disabled>Select current stage...</option>
                        <option value="ideation">Ideation / Pitch Prep</option>
                        <option value="pre-seed">Pre-Seed (MVP built)</option>
                        <option value="seed">Seed (Actively Raising / Revenue)</option>
                        <option value="series-a">Series A / Scaling</option>
                      </select>
                    </div>

                    <div className="input-group">
                      <label htmlFor="primary-bottleneck">What is your #1 strategic bottleneck?</label>
                      <textarea
                        id="primary-bottleneck"
                        name="bottleneck"
                        rows="3"
                        placeholder="e.g., We have a functional product but struggle to define our exact Ideal Customer Profile (ICP)..."
                        value={formData.bottleneck}
                        onChange={handleInputChange}
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn primary-btn full-width"
                      style={{ pointerEvents: isSubmitting ? 'none' : 'auto' }}
                    >
                      {isSubmitting ? (
                        <>
                          Sending Strategy Request...
                          <motion.svg
                            className="loading-spinner"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                            style={{ marginLeft: '8px' }}
                          >
                            <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
                            <path d="M4 12a8 8 0 0 1 8-8" />
                          </motion.svg>
                        </>
                      ) : (
                        <>
                          Submit Consultation Request
                          <svg
                            className="btn-arrow"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                          </svg>
                        </>
                      )}
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="contact-success-content"
                  className="form-feedback success-message"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="feedback-icon-box">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h4>Request Received!</h4>
                  <p>Your strategic assessment is being analyzed. Shriram HR will reach out within 24 hours to schedule your strategy brief.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
