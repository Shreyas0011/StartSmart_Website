import React from 'react';
import { motion } from 'framer-motion';

export default function Services({ activeServiceId, setActiveServiceId }) {
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const offers = [
    {
      id: 'offer-social-media',
      bgClass: 'blue-bg',
      accentColor: 'var(--accent-blue)',
      glowColor: 'rgba(56, 189, 248, 0.2)',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      ),
      title: 'Social Media Management',
      details: [
        'Strategy & Content Planning: Audience research, channel prioritization, content pillars, posting cadence.',
        'Creative Execution: Copywriting, visual concepts, short-form video, and repurposing for multi-channel distribution.',
        'Community & Reputation: Engagement playbooks, response templates, reputation monitoring.',
        'Performance & Optimization: KPI dashboards, A/B testing content formats, monthly insights and action plans.'
      ],
      value: 'Builds brand recall and consistent engagement that drives loyalty and inbound leads.'
    },
    {
      id: 'offer-web-dev',
      bgClass: 'purple-bg',
      accentColor: 'var(--accent-violet)',
      glowColor: 'rgba(192, 132, 252, 0.2)',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
      title: 'Website Development',
      details: [
        'UX-first Design: User journeys that prioritize conversions and clarity of message.',
        'Responsive Development: SEO-friendly, fast-loading websites built on scalable platforms (CMS or custom).',
        'Conversion Optimization: Landing pages, forms, CTAs, and analytics to maximize lead capture.',
        'Maintenance & Support: Updates, backups, security monitoring, and iterative improvements.'
      ],
      value: 'A high-converting digital home that reflects brand purpose and supports growth funnels.'
    },
    {
      id: 'offer-automation',
      bgClass: 'emerald-bg',
      accentColor: 'var(--accent-emerald)',
      glowColor: 'rgba(52, 211, 153, 0.2)',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      ),
      title: 'Automation & Tech Lifecycle',
      details: [
        'Process Audit: Map current workflows and identify automation opportunities.',
        'Tool Selection & Integration: CRM setup, marketing automation, chatbots, payment flows, and API integrations.',
        'Implementation: Build workflows for lead capture, nurturing, billing, and fulfillment.',
        'Monitoring & Optimization: Lifecycle analytics, error handling, and continuous improvement.'
      ],
      value: 'Saves time, reduces manual errors, and scales personalized customer journeys.'
    },
    {
      id: 'offer-coaching',
      bgClass: 'amber-bg',
      accentColor: 'var(--accent-amber)',
      glowColor: 'rgba(251, 146, 60, 0.2)',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: 'Coaching & Mentoring',
      details: [
        'Founder Coaching: GTM clarity, messaging practice, prioritization, and growth playbooks.',
        'Team Workshops: Upskilling in content, automation tools, sales operations, and analytics.',
        'Advisory Sessions: Quarterly planning, KPI reviews, and go-to-market refinement.'
      ],
      value: 'Empowers founders and teams with repeatable skills to self-sustain growth.'
    },
    {
      id: 'offer-gtm',
      bgClass: 'rose-bg',
      accentColor: 'var(--accent-copper)',
      glowColor: 'rgba(212, 155, 133, 0.2)',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      ),
      title: 'Marketing Strategy & GTM',
      details: [
        'Market & Competitor Research: Positioning, value-prop testing, and opportunity mapping.',
        'Go-to-Market Planning: Launch plans, channel mix, pricing and sales motions tailored to the business model.',
        'Demand Generation: Integrated campaigns combining organic, paid, partnerships, and content.',
        'Sales Enablement: Playbooks, CRM flows, lead scoring, and pitch support.'
      ],
      value: 'A clear, executable plan that converts product-market fit into predictable revenue.'
    },
    {
      id: 'offer-sales',
      bgClass: 'cyan-bg',
      accentColor: 'var(--accent-blue)',
      glowColor: 'rgba(56, 189, 248, 0.2)',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      ),
      title: 'Sales Strategy & Enablement',
      details: [
        'Sales Process Design: Define stages, metrics, and handoffs between marketing and sales.',
        'CRM Implementation: Custom pipelines, automation, reporting, and lead routing.',
        'Training & Collateral: Scripts, email templates, decks, and objection handling frameworks.',
        'Performance Tracking: Dashboards and incentive design to drive seller behavior.'
      ],
      value: 'Shortens sales cycles and increases close rates through structured processes.'
    }
  ];

  return (
    <section className="what-we-offer-section" id="what-we-offer">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-tagline">WORK WE DO</span>
          <h2 className="section-title">
            Tailored Growth <span className="text-gradient-serif">Solutions</span>
          </h2>
          <p className="section-desc centered">
            We offer end-to-end services across marketing, technology, and growth operations. Each service is tailored for founders who want sustainable growth and measurable results.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid-three-col services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px'
          }}
        >
          {offers.map((offer) => (
            <motion.div
              key={offer.id}
              className="glass-card service-card"
              id={offer.id}
              variants={cardVariants}
              onMouseMove={handleMouseMove}
              onClick={() => setActiveServiceId(offer.id)}
              whileHover={{ y: -6 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '24px 30px',
                minHeight: '90px',
                cursor: 'pointer',
                border: activeServiceId === offer.id ? `1px solid ${offer.accentColor}` : 'var(--glass-border)',
                boxShadow: activeServiceId === offer.id ? `0 15px 30px color-mix(in srgb, ${offer.accentColor} 12%, transparent), var(--glass-shadow)` : 'var(--glass-shadow)',
                background: activeServiceId === offer.id ? `color-mix(in srgb, ${offer.accentColor} 6%, transparent)` : 'var(--bg-dark-card)',
                '--glow-color': offer.glowColor,
                '--glow-border': offer.accentColor,
                '--glow-shadow': `color-mix(in srgb, ${offer.accentColor} 8%, transparent)`
              }}
            >
              <div className="card-glow"></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
                <div className={`service-icon-box ${offer.bgClass}`} style={{ margin: 0 }}>
                  {offer.icon}
                </div>
                <h3 style={{ fontSize: '1.18rem', fontWeight: 700, margin: 0, color: 'var(--text-primary)', lineHeight: 1.3 }}>
                  {offer.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Dynamic Service Details Display */}
        <div style={{ marginTop: '40px' }}>
          {(() => {
            const selectedOffer = offers.find(o => o.id === activeServiceId) || offers[0];
            if (!selectedOffer) return null;
            return (
              <motion.div
                key={selectedOffer.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card"
                style={{
                  padding: '35px',
                  border: `1px solid color-mix(in srgb, ${selectedOffer.accentColor} 35%, transparent)`,
                  background: 'var(--bg-deliverables-card)',
                  boxShadow: 'var(--glass-shadow)',
                  '--glow-color': selectedOffer.glowColor,
                  '--glow-border': selectedOffer.accentColor,
                  '--glow-shadow': `color-mix(in srgb, ${selectedOffer.accentColor} 8%, transparent)`
                }}
              >
                <div className="card-glow"></div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '28px', flexWrap: 'wrap' }}>
                  <div className={`service-icon-box ${selectedOffer.bgClass}`} style={{ margin: 0 }}>
                    {selectedOffer.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.65rem', fontWeight: 800, margin: 0, color: 'var(--text-primary)' }}>
                      {selectedOffer.title}
                    </h3>
                    <p style={{ margin: '4px 0 0 0', color: selectedOffer.accentColor, fontSize: '0.88rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Service Deliverables & Scope
                    </p>
                  </div>
                </div>
 
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginBottom: '28px' }}>
                  {selectedOffer.details.map((detail, idx) => {
                    const parts = detail.split(': ');
                    return (
                      <motion.div 
                        key={idx} 
                        whileHover={{ y: -4, borderColor: selectedOffer.accentColor }}
                        style={{ 
                          padding: '20px', 
                          borderRadius: '12px', 
                          background: `color-mix(in srgb, ${selectedOffer.accentColor} 6%, transparent)`, 
                          border: `1px solid color-mix(in srgb, ${selectedOffer.accentColor} 25%, transparent)`,
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '6px',
                          transition: 'border-color 0.25s ease'
                        }}
                      >
                        {parts.length > 1 ? (
                          <>
                            <h5 style={{ color: selectedOffer.accentColor, fontWeight: 700, fontSize: '0.95rem', margin: 0 }}>
                              {parts[0]}
                            </h5>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', margin: 0, opacity: 0.9, lineHeight: 1.45 }}>
                              {parts[1]}
                            </p>
                          </>
                        ) : (
                          <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', margin: 0, opacity: 0.9, lineHeight: 1.45 }}>
                            {detail}
                          </p>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
 
                <div 
                  style={{ 
                    padding: '16px 24px', 
                    borderRadius: '10px', 
                    background: `color-mix(in srgb, ${selectedOffer.accentColor} 12%, transparent)`, 
                    border: `1px solid color-mix(in srgb, ${selectedOffer.accentColor} 35%, transparent)`, 
                    fontSize: '0.92rem', 
                    color: 'var(--text-secondary)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    flexWrap: 'wrap'
                  }}
                >
                  <span style={{ 
                    background: selectedOffer.accentColor, 
                    color: 'var(--bg-dark-obsidian)', 
                    padding: '4px 10px', 
                    borderRadius: '6px', 
                    fontWeight: 700, 
                    fontSize: '0.72rem', 
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    Value Add
                  </span>
                  <span style={{ fontWeight: 500, lineHeight: 1.4 }}>{selectedOffer.value}</span>
                </div>
              </motion.div>
            );
          })()}
        </div>
      </div>
    </section>
  );
}
