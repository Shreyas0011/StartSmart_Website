import React from 'react';

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        <div className="footer-top">
          {/* Logo & Tagline */}
          <div className="footer-brand">
            <a href="#hero" className="nav-logo" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
              <img
                src="/logo.jpg"
                alt="Start Smart by SE Logo"
                style={{
                  width: '36px', height: '36px', borderRadius: '8px',
                  objectFit: 'cover', objectPosition: 'center',
                  border: '1px solid rgba(var(--accent-violet-rgb), 0.2)',
                  flexShrink: 0,
                }}
              />
              <span className="logo-text-smart">Start Smart</span>
              <span className="logo-badge">by SE</span>
            </a>
            <p className="footer-tagline">
              A results-driven marketing and technology studio that helps purposeful brands grow sustainably.
            </p>
          </div>

          {/* Links Grid */}
          <div className="footer-links-grid">
            <div className="footer-column">
              <h4>Navigation</h4>
              <ul>
                <li><a href="#about-us">About Us</a></li>
                <li><a href="#/founder">About Founder</a></li>
                <li><a href="#what-we-offer">Work We Do</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Solutions</h4>
              <ul>
                <li><a href="#offer-social-media">Social Media</a></li>
                <li><a href="#offer-web-dev">Web Development</a></li>
                <li><a href="#offer-automation">Automation & Tech</a></li>
                <li><a href="#offer-coaching">Coaching & Mentoring</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Connect</h4>
              <ul>
                <li><a href="#contact">Consultation</a></li>
                <li><a href="mailto:advisory@startsmart.com">Email Us</a></li>
                <li><a href="#" className="disabled-link" onClick={(e) => e.preventDefault()}>LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom Panel */}
        <div className="footer-bottom">
          <p className="copyright">
            &copy; 2026 Start Smart by SE. All rights reserved.
          </p>
          <div className="legal-links">
            <a href="#" className="disabled-link" onClick={(e) => e.preventDefault()}>Privacy Policy</a>
            <span>•</span>
            <a href="#" className="disabled-link" onClick={(e) => e.preventDefault()}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
