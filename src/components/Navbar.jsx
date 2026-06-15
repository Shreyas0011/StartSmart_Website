import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ currentHash, activeServiceId, onSelectService }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update active section based on route/hash changes
  useEffect(() => {
    if (currentHash === '#/founder') {
      setActiveSection('about-founder');
    } else if (currentHash.startsWith('#') && !currentHash.startsWith('#/')) {
      const sectionId = currentHash.replace('#', '');
      setActiveSection(sectionId);
    }
  }, [currentHash]);

  // Intersection Observer for Active Section Highlighting on scroll
  useEffect(() => {
    if (currentHash === '#/founder') {
      setActiveSection('about-founder');
      return;
    }

    const sections = document.querySelectorAll('section[id], .service-card');
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -65% 0px',
      threshold: 0,
    };

    const observerCallback = (entries) => {
      if (window.location.hash === '#/founder') return;
      
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          if (id) {
            if (id.startsWith('offer-') || id === 'what-we-offer') {
              setActiveSection('what-we-offer');
            } else {
              setActiveSection(id);
            }
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [currentHash]);

  const navLinks = [
    { name: 'About Us', href: '#about-us', id: 'about-us' },
    { name: 'About Founder', href: '#/founder', id: 'about-founder' },
  ];

  const services = [
    {
      title: 'Social Media Management',
      desc: 'Build brand recall & consistent engagement.',
      href: '#offer-social-media',
      color: 'blue-glow',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      ),
    },
    {
      title: 'Website Development',
      desc: 'High-converting UX-first digital home.',
      href: '#offer-web-dev',
      color: 'purple-glow',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
    },
    {
      title: 'Automation & Tech',
      desc: 'Save time & scale personalized journeys.',
      href: '#offer-automation',
      color: 'emerald-glow',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      ),
    },
    {
      title: 'Coaching & Mentoring',
      desc: 'Empower teams to self-sustain growth.',
      href: '#offer-coaching',
      color: 'amber-glow',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      title: 'Marketing Strategy & GTM',
      desc: 'Convert fit into predictable revenue.',
      href: '#offer-gtm',
      color: 'rose-glow',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      ),
    },
    {
      title: 'Sales Strategy & Enablement',
      desc: 'Shorten sales cycles & close deals.',
      href: '#offer-sales',
      color: 'cyan-glow',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      ),
    },
  ];

  return (
    <header className="navbar-container">
      <nav
        className="glass-navbar"
        style={{
          padding: scrolled ? '8px 24px' : '12px 32px',
          background: scrolled ? 'var(--bg-navbar-scrolled)' : 'var(--bg-navbar)',
          boxShadow: scrolled
            ? '0 25px 50px -12px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
            : 'var(--glass-shadow)',
        }}
      >
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

        {/* Mobile Menu Button */}
        <button
          className={`menu-toggle ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Desktop & Mobile Menu */}
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.id} className={activeSection === link.id ? 'active' : ''}>
              <a
                href={link.href}
                className="nav-item-link"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}

          {/* Dropdown Section */}
          <li
            className={`dropdown ${activeSection === 'what-we-offer' ? 'active' : ''} ${
              isDropdownOpen ? 'active' : ''
            }`}
            onMouseEnter={() => window.innerWidth >= 992 && setIsDropdownOpen(true)}
            onMouseLeave={() => window.innerWidth >= 992 && setIsDropdownOpen(false)}
          >
            <a
              href="#what-we-offer"
              className="nav-item-link dropdown-toggle"
              onClick={(e) => {
                if (window.innerWidth < 992) {
                  e.preventDefault();
                  setIsDropdownOpen(!isDropdownOpen);
                }
              }}
            >
              Work we do
              <svg
                className="dropdown-chevron"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </a>

            {/* Dropdown Menu list */}
            <ul className="dropdown-menu">
              {services.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="dropdown-item"
                    onClick={() => {
                      setIsDropdownOpen(false);
                      setIsOpen(false);
                      if (onSelectService) {
                        const serviceId = item.href.replace('#', '');
                        onSelectService(serviceId);
                      }
                    }}
                  >
                    <div className={`dropdown-icon-wrapper ${item.color}`}>
                      {item.icon}
                    </div>
                    <div className="dropdown-item-content">
                      <span className="dropdown-item-title">{item.title}</span>
                      <span className="dropdown-item-desc">{item.desc}</span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </li>
        </ul>

        {/* CTA Button */}
        <div className="nav-cta-wrapper">
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=shriram.hr@seenterprises.in" target="_blank" rel="noopener noreferrer" className="cta-button glass-btn">
            Contact Us
          </a>
        </div>
      </nav>
    </header>
  );
}
