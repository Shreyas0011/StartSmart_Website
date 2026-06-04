import React from 'react';
import { motion } from 'framer-motion';

export default function Founder() {
  const stats = [
    { value: 'Estd 2024', desc: 'Year Founded' },
    { value: 'GTM & Product', desc: 'Core Discipline' },
    { value: 'Client First', desc: 'Empathy & Scale' },
  ];

  return (
    <section className="about-founder-section light-section" id="about-founder" style={{ paddingTop: '160px', paddingBottom: '120px', display: 'flex', alignItems: 'center' }}>
      <div className="section-container">
        <div className="founder-layout">
          {/* Left Side: Visual Representation of Founder */}
          <motion.div
            className="founder-visual"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="founder-glow"></div>
            <div className="founder-photo-card">
              <div className="avatar-fallback flex items-center justify-center p-4">
                <img src="/logo.jpg" alt="Start Smart Logo" className="w-full h-full object-contain rounded-xl" />
              </div>
              <div className="founder-badge">FOUNDER</div>
            </div>
          </motion.div>

          {/* Right Side: Biography & Quote */}
          <motion.div
            className="founder-details"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="section-tagline">BEHIND THE VISION</span>
            <h2 className="section-title">
              Meet <span className="text-gradient-serif">Shriram HR</span>
            </h2>
            <h3 className="founder-subtitle">
              Founder & Principal Architect, Start Smart by SE
            </h3>
            <p className="founder-bio">
              Shriram founded the company in 2024 with a clear mission: democratize access to quality marketing and technology for small and local brands. Rooted in experience across GTM, digital strategy, and product-led growth, Shriram’s leadership blends strategic discipline with an empathetic client-first approach.
            </p>
            <p className="founder-bio">
              He works closely with every client to understand what “resonates” for them—the core belief or problem that inspired their product or service—and builds tailored, outcome-focused solutions that scale. Under his guidance, the team ensures services are affordable, transparent, and designed for lasting impact.
            </p>

            {/* Blockquote Quote */}
            <motion.blockquote
              className="founder-quote"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <svg className="quote-icon" width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.748-9.762 9-10.985v2.759c-3.14 1.195-4.897 3.805-5.077 7.824h5.06v7.8h-9v-.008zm-14 0v-7.391c0-5.704 3.748-9.762 9-10.985v2.759c-3.14 1.195-4.897 3.805-5.077 7.824h5.06v7.8h-9v-.007z" />
              </svg>
              <p>
                “Growth should be organic, ethical, and founder led. We align marketing and technology pipelines with what founders and customers truly value.”
              </p>
              <cite>— Shriram HR, Founder</cite>
            </motion.blockquote>

            {/* Credentials Row */}
            <motion.div
              className="founder-credentials"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.1, delayChildren: 0.4 }}
            >
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  className="cred-item"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="cred-value">{stat.value}</span>
                  <span className="cred-desc">{stat.desc}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
