import React, { useState } from 'react';
import { motion } from 'framer-motion';

const handleMouseMove = (e) => {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
  card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
};

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const pillars = [
  {
    id: 'pillar-mission',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
      </svg>
    ),
    bgClass: 'blue-bg',
    accentColor: '#D49B85',
    title: 'Our Mission',
    tagline: 'Why we exist',
    desc: 'To make strategic marketing and practical technology accessible to every founder — enabling small and local brands to compete and resonate globally while growing with integrity.',
  },
  {
    id: 'pillar-vision',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
      </svg>
    ),
    bgClass: 'purple-bg',
    accentColor: '#C39BD3',
    title: 'Our Vision',
    tagline: 'Where we\'re headed',
    desc: 'A world where every authentic business — regardless of size — has the tools, strategy, and support to grow sustainably, create social impact, and build enduring customer relationships.',
  },
  {
    id: 'pillar-philosophy',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path d="M12 6v6l4 2" />
      </svg>
    ),
    bgClass: 'emerald-bg',
    accentColor: '#ECC8B8',
    title: 'Our Philosophy',
    tagline: 'How we operate',
    desc: 'Growth should be organic, ethical, and founder-led. Instead of chasing vanity metrics, we focus on resonance — aligning marketing with what founders and their customers truly value.',
  },
];

const creativeApproach = [
  { step: '01', title: 'Founder-First Discovery', desc: 'We start by understanding the founder\'s intent, values, and long-term goals before touching tactics.' },
  { step: '02', title: 'Narrative-Led Strategy', desc: 'Brand stories and content that reflect authentic purpose and speak to the right audiences.' },
  { step: '03', title: 'Automation with Empathy', desc: 'Deploy automation to simplify operations and scale outreach without losing human touch.' },
  { step: '04', title: 'Measurement for Growth', desc: 'Every initiative tied to clear KPIs — retention, engagement, conversions, and social impact metrics.' },
  { step: '05', title: 'Iterative Collaboration', desc: 'We co-create with clients, iterate fast on learnings, and keep founders involved at every stage.' },
];

export default function About() {
  const [hoveredPillar, setHoveredPillar] = useState(null);

  return (
    <section id="about-us" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="section-container">

        {/* ── Section header ─────────────────────────── */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{ maxWidth: '700px' }}
        >
          <span className="section-tagline">ABOUT US</span>
          <h2 className="section-title">
            Purposeful Brands.{' '}
            <span className="text-gradient-serif">Enduring Impact.</span>
          </h2>
          <p className="section-desc" style={{ lineHeight: 1.8, fontSize: '1.08rem' }}>
            We are a results-driven marketing and technology studio that helps purposeful brands
            grow sustainably. Combining human-centered strategy with automation-first technology,
            we create organic, meaningful impact — building long-term value rather than short-term spikes.
          </p>
        </motion.div>

        {/* ── Pillars grid ───────────────────────────── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginTop: '16px' }}
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.id}
              id={pillar.id}
              variants={cardVariants}
              className="glass-card value-card"
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setHoveredPillar(pillar.id)}
              onMouseLeave={() => setHoveredPillar(null)}
              whileHover={{ y: -10 }}
              style={{
                padding: '40px',
                border: hoveredPillar === pillar.id
                  ? `1px solid rgba(var(--accent-violet-rgb),0.45)`
                  : 'var(--glass-border)',
                transition: 'border-color 0.3s ease',
                cursor: 'default',
              }}
            >
              <div className="card-glow" />
              {/* Top accent line */}
              <div style={{
                position: 'absolute', top: 0, left: '40px', right: '40px', height: '2px',
                background: `linear-gradient(90deg, transparent, ${pillar.accentColor}, transparent)`,
                opacity: hoveredPillar === pillar.id ? 1 : 0,
                transition: 'opacity 0.4s ease',
              }} />

              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '24px' }}>
                <div className={`card-icon-box ${pillar.bgClass}`}>{pillar.icon}</div>
                <span style={{
                  fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase',
                  letterSpacing: '0.1em', color: pillar.accentColor,
                  background: `rgba(var(--accent-violet-rgb),0.08)`,
                  border: `1px solid rgba(var(--accent-violet-rgb),0.2)`,
                  padding: '3px 10px', borderRadius: '99px',
                }}>
                  {pillar.tagline}
                </span>
              </div>

              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '14px', color: 'var(--text-primary)' }}>
                {pillar.title}
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75, fontSize: '0.95rem', margin: 0 }}>
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Methodology ────────────────────────────── */}
        <div style={{ marginTop: '100px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            style={{ marginBottom: '56px' }}
          >
            <span className="section-tagline">METHODOLOGY</span>
            <h3 style={{
              fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: '0',
            }}>
              Our <span className="text-gradient-serif">Creative Approach</span>
            </h3>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
          >
            {creativeApproach.map((step, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="glass-card"
                onMouseMove={handleMouseMove}
                whileHover={{ x: 8, borderColor: 'rgba(var(--accent-violet-rgb),0.45)' }}
                style={{
                  padding: '28px 36px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '32px',
                  transition: 'border-color 0.3s ease',
                }}
              >
                <div className="card-glow" />
                {/* Step number */}
                <span style={{
                  fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 900,
                  color: 'rgba(var(--accent-violet-rgb),0.3)', minWidth: '48px', letterSpacing: '-0.04em',
                  lineHeight: 1,
                }}>
                  {step.step}
                </span>
                {/* Divider */}
                <div style={{ width: '1px', height: '40px', background: 'rgba(var(--accent-violet-rgb), 0.15)', flexShrink: 0 }} />
                {/* Content */}
                <div style={{ flex: 1 }}>
                  <h4 style={{ color: 'var(--accent-violet)', fontSize: '1.05rem', fontWeight: 700, marginBottom: '6px' }}>
                    {step.title}
                  </h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                    {step.desc}
                  </p>
                </div>
                {/* Arrow */}
                <svg
                  width="18" height="18" viewBox="0 0 24 24" fill="none"
                  stroke="rgba(var(--accent-violet-rgb),0.4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  style={{ flexShrink: 0 }}
                >
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
