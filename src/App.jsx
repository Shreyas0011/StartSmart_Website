import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Founder from './components/Founder';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash || '#/');
  const lenisRef = useRef(null);

  // Handle hashchange event for simple client-side routing
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash || '#/');
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Scroll to top when page changes to founder
  useEffect(() => {
    if (currentHash === '#/founder') {
      window.scrollTo(0, 0);
      if (lenisRef.current) {
        lenisRef.current.scrollTo(0, { duration: 0, immediate: true });
      }
    }
  }, [currentHash]);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.9, // Snappier scroll response to avoid latency sensation
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -8 * t)), // Balanced quick-response velocity curve
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
    });

    lenisRef.current = lenis;

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // Smooth scroll for anchor clicks using Lenis scroll method
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a');
      if (!target) return;
      
      const href = target.getAttribute('href');
      // Ignore hash routes (like #/founder) and only process in-page anchors
      if (href && href.startsWith('#') && !href.startsWith('#/') && href.length > 1) {
        const element = document.querySelector(href);
        if (element) {
          e.preventDefault();
          lenis.scrollTo(element, {
            offset: -100, // Account for fixed glass header
            duration: 1.2,
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  // Effect to handle scrolling to home page sections after transition from Founder page
  useEffect(() => {
    if (currentHash && currentHash.startsWith('#') && !currentHash.startsWith('#/')) {
      const element = document.querySelector(currentHash);
      if (element && lenisRef.current) {
        // Wait a brief moment for DOM mounting and layout calculation
        setTimeout(() => {
          lenisRef.current.scrollTo(element, {
            offset: -100,
            duration: 1.2,
          });
        }, 150);
      }
    }
  }, [currentHash]);

  const [activeServiceId, setActiveServiceId] = useState('offer-social-media');
  const isFounderPage = currentHash === '#/founder';

  return (
    <>
      {/* Global Ambient background glow layers */}
      <div className="ambient-glow glow-1"></div>
      <div className="ambient-glow glow-2"></div>
      <div className="ambient-glow glow-3"></div>
      <div className="ambient-glow glow-4"></div>

      <Navbar 
        currentHash={currentHash}
        activeServiceId={activeServiceId} 
        onSelectService={(id) => {
          setActiveServiceId(id);
          if (window.location.hash === '#/founder') {
            window.location.hash = '#what-we-offer';
          } else {
            const el = document.getElementById('what-we-offer');
            if (el && lenisRef.current) {
              lenisRef.current.scrollTo(el, { offset: -100, duration: 1.2 });
            }
          }
        }} 
      />
      <main>
        {isFounderPage ? (
          <Founder />
        ) : (
          <>
            <Hero />
            <About />
            <Services activeServiceId={activeServiceId} setActiveServiceId={setActiveServiceId} />
            <Contact />
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
