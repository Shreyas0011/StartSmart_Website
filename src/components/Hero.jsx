import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const stats = [
  { value: '50+', label: 'Brands Scaled' },
  { value: '3x', label: 'Avg. Growth' },
  { value: '100%', label: 'Founder-Led' },
];

const metricsData = {
  revenue: { value: '$1.2M+', growth: '+180%', label: 'REVENUE IMPACT', desc: 'Direct sales generated for startup cohorts.' },
  reach: { value: '45.8M', growth: '3.4x YoY', label: 'BRAND RESONANCE', desc: 'Combined organic content views across channels.' },
  efficiency: { value: '92%', growth: '-40h/wk', desc: 'Saved through client onboarding automation.' },
};

const techPills = [
  { name: 'React 19', color: '#C39BD3' },
  { name: 'Automation', color: '#D49B85' },
  { name: 'Serverless', color: '#ECC8B8' },
  { name: 'Narrative Strategy', color: '#D49B85' },
  { name: 'n8n Pipelines', color: '#C39BD3' },
  { name: 'GTM Strategy', color: '#ECC8B8' },
];

export default function Hero() {
  const [activeMetric, setActiveMetric] = useState('revenue');

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '110vh',
        overflow: 'hidden',
        paddingTop: '140px',
        paddingBottom: '100px',
      }}
    >
      {/* ── Animated background blobs ─────────────────── */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
        <motion.div
          style={{
            position: 'absolute', width: '700px', height: '700px',
            top: '-15%', right: '-12%',
            background: 'radial-gradient(circle, rgba(var(--accent-violet-rgb), 0.15) 0%, transparent 68%)',
            filter: 'blur(110px)', borderRadius: '50%',
          }}
          animate={{ x: [0, 45, -25, 0], y: [0, -55, 35, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          style={{
            position: 'absolute', width: '650px', height: '650px',
            bottom: '-18%', left: '-12%',
            background: 'radial-gradient(circle, rgba(195, 155, 211, 0.12) 0%, transparent 68%)',
            filter: 'blur(110px)', borderRadius: '50%',
          }}
          animate={{ x: [0, -35, 55, 0], y: [0, 45, -45, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Floating orb rings */}
        <motion.div
          style={{
            position: 'absolute', width: '320px', height: '320px',
            borderRadius: '50%', top: '18%', left: '6%',
            border: '1px solid rgba(var(--accent-violet-rgb), 0.1)',
            background: 'radial-gradient(circle, rgba(var(--accent-violet-rgb), 0.03) 0%, transparent 70%)',
          }}
          animate={{ y: [0, -28, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          style={{
            position: 'absolute', width: '240px', height: '240px',
            borderRadius: '50%', top: '22%', left: '8%',
            border: '1px solid rgba(195, 155, 211, 0.05)',
          }}
          animate={{ y: [0, -28, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        />
        <motion.div
          style={{
            position: 'absolute', width: '420px', height: '420px',
            borderRadius: '50%', bottom: '12%', right: '5%',
            border: '1px solid rgba(var(--accent-violet-rgb), 0.06)',
            background: 'radial-gradient(circle, rgba(var(--accent-violet-rgb), 0.02) 0%, transparent 70%)',
          }}
          animate={{ y: [0, 32, 0], rotate: [0, -4, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
      </div>

      {/* ── Main content ──────────────────────────────── */}
      <div style={{ position: 'relative', zIndex: 10, maxWidth: '1100px', padding: '0 32px', textAlign: 'center', width: '100%' }}>

        {/* Pill badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(var(--accent-violet-rgb), 0.08)',
            border: '1px solid rgba(var(--accent-violet-rgb), 0.28)',
            padding: '6px 18px', borderRadius: '999px',
            marginBottom: '32px',
            backdropFilter: 'blur(12px)',
          }}
        >
          <motion.span
            style={{
              width: '7px', height: '7px', borderRadius: '50%',
              background: 'var(--accent-violet)',
              boxShadow: '0 0 10px rgba(var(--accent-violet-rgb), 0.8)',
            }}
            animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          />
          <span style={{
            fontFamily: 'var(--font-heading)', fontSize: '0.78rem',
            fontWeight: 700, letterSpacing: '0.08em',
            textTransform: 'uppercase', color: 'var(--accent-violet)',
          }}>
            Marketing & Technology Studio
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontSize: 'clamp(2.8rem, 7.5vw, 5.5rem)',
            fontWeight: 900,
            letterSpacing: '-0.04em',
            lineHeight: 1.05,
            margin: '0 0 24px 0',
          }}
        >
          <span className="text-gradient">Start Smart</span>
          <br />
          <span className="text-serif-italic" style={{ fontWeight: 300, color: 'var(--text-secondary)' }}>by SE</span>
        </motion.h1>

        {/* Sub-tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.15rem)',
            color: 'var(--text-secondary)',
            lineHeight: 1.7,
            maxWidth: '650px',
            margin: '0 auto 40px auto',
          }}
        >
          We build digital landmarks for purposeful founders — integrating narrative-driven marketing strategy with scalable serverless engineering.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '64px' }}
        >
          <a href="#contact" className="btn primary-btn">
            Book Discovery Call
            <svg className="btn-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
          <a href="#about-us" className="btn secondary-btn">
            Learn About Us
          </a>
        </motion.div>

        {/* ── INTERACTIVE BENTO SHOWCASE ────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          onMouseMove={handleMouseMove}
          className="glass-card"
          style={{
            width: '100%',
            maxWidth: '920px',
            margin: '0 auto 64px auto',
            padding: '32px',
            textAlign: 'left',
            position: 'relative',
            border: '1px solid rgba(var(--accent-violet-rgb), 0.22)',
            overflow: 'hidden',
          }}
        >
          <div className="card-glow" />

          {/* Header row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(var(--accent-violet-rgb), 0.12)', paddingBottom: '18px', marginBottom: '24px' }}>
            <span style={{ fontSize: '0.65rem', fontWeight: 800, color: 'var(--accent-violet)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              System Terminal // Active Cohorts Preview
            </span>
            <div style={{ display: 'flex', gap: '6px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#EF4444', opacity: 0.7 }} />
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#F59E0B', opacity: 0.7 }} />
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981', opacity: 0.7 }} />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '28px' }}>
            {/* Column 1: Live pipelines */}
            <div>
              <h4 style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '14px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                Active Pipelines
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  { name: 'Core Narrative Pillars', status: 'Deployed', time: 'Just now' },
                  { name: 'Marketing Automation CRM', status: 'Online', time: 'Active' },
                  { name: 'React Landing Stack', status: 'Optimized', time: '0.8s load' },
                ].map((pipeline, i) => (
                  <div key={i} style={{ padding: '12px 16px', borderRadius: '8px', background: 'rgba(var(--accent-violet-rgb), 0.03)', border: '1px solid rgba(var(--accent-violet-rgb), 0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>{pipeline.name}</div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '2px' }}>{pipeline.time}</div>
                    </div>
                    <span style={{ fontSize: '0.65rem', fontWeight: 800, color: '#10B981', background: 'rgba(16, 185, 129, 0.08)', padding: '2px 8px', borderRadius: '4px', textTransform: 'uppercase' }}>
                      {pipeline.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: Interactive metrics */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h4 style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '14px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  Interactive Indicators
                </h4>
                <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
                  {Object.keys(metricsData).map((metric) => (
                    <button
                      key={metric}
                      onClick={() => setActiveMetric(metric)}
                      style={{
                        padding: '6px 12px',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        borderRadius: '6px',
                        border: activeMetric === metric ? '1px solid var(--accent-violet)' : '1px solid rgba(var(--accent-violet-rgb), 0.15)',
                        background: activeMetric === metric ? 'rgba(var(--accent-violet-rgb), 0.15)' : 'transparent',
                        color: activeMetric === metric ? 'var(--text-primary)' : 'var(--text-secondary)',
                        cursor: 'pointer',
                        transition: 'all 0.25s ease',
                      }}
                    >
                      {metric.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>

              <div style={{ background: 'rgba(var(--accent-violet-rgb), 0.03)', border: '1px solid rgba(var(--accent-violet-rgb), 0.08)', borderRadius: '10px', padding: '20px', minHeight: '120px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeMetric}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
                      <span style={{ fontSize: '2rem', fontWeight: 900, background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                        {metricsData[activeMetric].value}
                      </span>
                      <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#10B981' }}>
                        {metricsData[activeMetric].growth}
                      </span>
                    </div>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: '6px 0 0 0', lineHeight: 1.4 }}>
                      {metricsData[activeMetric].desc}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Column 3: Tech capabilities */}
            <div>
              <h4 style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '14px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                Capabilities Stack
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {techPills.map((pill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05, borderColor: pill.color }}
                    style={{
                      padding: '8px 12px',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      borderRadius: '8px',
                      background: 'rgba(var(--accent-violet-rgb), 0.02)',
                      border: '1px solid rgba(var(--accent-violet-rgb), 0.12)',
                      color: 'var(--text-primary)',
                      cursor: 'default',
                      transition: 'border-color 0.2s ease',
                    }}
                  >
                    <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', background: pill.color, marginRight: '8px' }} />
                    {pill.name}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            gap: '0', flexWrap: 'wrap',
          }}
        >
          {stats.map((stat, i) => (
            <React.Fragment key={stat.label}>
              <div style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                padding: '0 40px',
                borderLeft: i > 0 ? '1px solid rgba(var(--accent-violet-rgb), 0.2)' : 'none',
              }}>
                <span style={{
                  fontFamily: 'var(--font-heading)', fontSize: '2.2rem', fontWeight: 800,
                  background: 'var(--gradient-primary)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  {stat.value}
                </span>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: '4px' }}>
                  {stat.label}
                </span>
              </div>
            </React.Fragment>
          ))}
        </motion.div>
      </div>

      {/* ── Scroll indicator ──────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{
          position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
          zIndex: 10,
        }}
      >
        <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            width: '24px', height: '40px', borderRadius: '99px',
            border: '1.5px solid rgba(var(--accent-violet-rgb),0.3)',
            display: 'flex', justifyContent: 'center', paddingTop: '6px',
          }}
        >
          <motion.div
            animate={{ y: [0, 10, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{ width: '4px', height: '8px', borderRadius: '99px', background: 'var(--accent-violet)' }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
