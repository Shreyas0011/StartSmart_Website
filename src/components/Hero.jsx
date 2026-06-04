import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const progress = Math.min(scrollPos / 150, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
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
          <span className="text-serif-italic" style={{ fontWeight: 300, color: 'var(--text-secondary)', display: 'inline-block', marginTop: '12px' }}>by SE</span>
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
          style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '0' }}
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
      </div>

      {/* ── Scroll indicator ──────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 - scrollProgress }}
        style={{
          position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)',
          display: scrollProgress >= 0.95 ? 'none' : 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
          zIndex: 10,
          pointerEvents: 'none',
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
