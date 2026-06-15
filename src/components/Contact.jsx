import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section className="contact-section" id="contact" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="section-container" style={{ display: 'flex', justifyContent: 'center' }}>
        {/* Centered Glass Container Card */}
        <motion.div
          className="glass-card contact-form-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          onMouseMove={handleMouseMove}
          style={{
            maxWidth: '850px',
            width: '100%',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div className="card-glow"></div>
          
          <span className="section-tagline" style={{ letterSpacing: '0.15em', marginBottom: '16px' }}>
            COMMENCE SCALING
          </span>
          <h2 className="section-title" style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', marginBottom: '20px', lineHeight: 1.15 }}>
            Ready to build <span className="text-gradient-serif">something legendary?</span>
          </h2>
          <p className="contact-lead-text" style={{ maxWidth: '620px', margin: '0 auto 44px auto', color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.65 }}>
            Skip the trial and error. Book a complimentary 20-minute strategic consultation with Shriram HR to dissect your current bottleneck.
          </p>

          {/* Details Row */}
          <div 
            className="contact-details-box" 
            style={{ 
              flexDirection: 'row', 
              gap: '40px', 
              justifyContent: 'center', 
              flexWrap: 'wrap',
              marginBottom: '44px',
              width: '100%'
            }}
          >
            <div className="contact-detail-item" style={{ textAlign: 'left' }}>
              <div className="item-icon-wrapper">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div className="item-text">
                <span className="detail-label">Direct Communication</span>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=shriram.hr@seenterprises.in" target="_blank" rel="noopener noreferrer" className="detail-value" style={{ textDecoration: 'none', color: 'inherit' }}>
                  shriram.hr@seenterprises.in
                </a>
              </div>
            </div>
          </div>

          {/* Call to Action Button */}
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=shriram.hr@seenterprises.in" target="_blank" rel="noopener noreferrer" className="btn primary-btn" style={{ padding: '16px 36px', fontSize: '1.05rem' }}>
            Contact Us
            <svg
              className="btn-arrow"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ marginLeft: '8px' }}
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
