// src/components/BackgroundEffects.jsx
import React, { useEffect, useRef } from 'react';

// Luces bokeh suaves y desenfocadas para dar profundidad de fiesta
const BOKEH_ORBS = [
  { top: '12%', left: '14%', size: 170, duration: '18s', delay: '0s' },
  { top: '26%', left: '82%', size: 220, duration: '22s', delay: '-4s' },
  { top: '52%', left: '8%', size: 190, duration: '20s', delay: '-8s' },
  { top: '68%', left: '86%', size: 160, duration: '17s', delay: '-2s' },
  { top: '85%', left: '25%', size: 210, duration: '24s', delay: '-10s' },
  { top: '40%', left: '55%', size: 140, duration: '19s', delay: '-6s' },
];

export default function BackgroundEffects() {
  const firefliesRef = useRef(null);
  const dustRef = useRef(null);
  const sparklesRef = useRef(null);

  useEffect(() => {
    // Paleta diamante/cristal: blanco puro, hielo sutil y plata brillante
    const dustPalette = [
      { bg: '#ffffff', glow: 'rgba(255, 255, 255, 1)' },
      { bg: '#f8fafc', glow: 'rgba(224, 242, 254, 0.95)' },
      { bg: '#e2e8f0', glow: 'rgba(255, 255, 255, 0.85)' },
      { bg: '#cbd5e1', glow: 'rgba(226, 232, 240, 0.8)' }
    ];

    // --- 1. LLUVIA DE POLVO DE DIAMANTE ---
    function createDustParticle() {
      if (!dustRef.current) return;

      const dust = document.createElement('div');
      dust.classList.add('dust-particle');

      const color = dustPalette[Math.floor(Math.random() * dustPalette.length)];
      const size = Math.random() * 3.8 + 1.6;
      const duration = Math.random() * 6 + 5.5;
      const driftX = (Math.random() * 90 - 45) + 'px';

      dust.style.left = Math.random() * 100 + 'vw';
      dust.style.width = size + 'px';
      dust.style.height = size + 'px';
      dust.style.backgroundColor = color.bg;
      dust.style.boxShadow = `0 0 ${size * 3}px ${color.glow}`;
      dust.style.setProperty('--driftX', driftX);
      dust.style.animationDuration = duration + 's';
      dust.style.animationDelay = Math.random() * 1.2 + 's';

      dustRef.current.appendChild(dust);

      setTimeout(() => {
        if (dust.parentNode) dust.remove();
      }, (duration + 2) * 1000);
    }

    for (let i = 0; i < 32; i++) {
      setTimeout(createDustParticle, i * 100);
    }
    const dustInterval = setInterval(createDustParticle, 160);

    // --- 2. LUCIÉRNAGAS CRISTAL ---
    function createFirefly() {
      if (!firefliesRef.current) return;

      const firefly = document.createElement('div');
      firefly.classList.add('firefly');

      const isDiamond = Math.random() > 0.4;
      firefly.style.left = Math.random() * 100 + 'vw';
      firefly.style.top = Math.random() * 100 + 'vh';
      firefly.style.backgroundColor = '#ffffff';
      firefly.style.boxShadow = isDiamond
        ? '0 0 10px #ffffff, 0 0 22px #ffffff, 0 0 34px rgba(224, 242, 254, 0.85)'
        : '0 0 10px #ffffff, 0 0 20px #e2e8f0';

      const moveX = (Math.random() * 200 - 100) + 'px';
      const moveY = (Math.random() * 200 - 100) + 'px';
      firefly.style.setProperty('--moveX', moveX);
      firefly.style.setProperty('--moveY', moveY);
      firefly.style.animationDuration = (Math.random() * 2.8 + 2.2) + 's';

      firefliesRef.current.appendChild(firefly);

      setTimeout(() => {
        if (firefly.parentNode) firefly.remove();
      }, 5500);
    }

    const fireflyInterval = setInterval(createFirefly, 300);

    // --- 3. DESTELLOS DE 4 PUNTAS (EFECTO LENTEJUELA / ESPEJO) ---
    function createSparkleStar() {
      if (!sparklesRef.current) return;

      const star = document.createElement('div');
      star.classList.add('sparkle-star');

      const size = Math.random() * 16 + 10; // Entre 10px y 26px
      const duration = Math.random() * 1.8 + 1.4; // Destello ágil entre 1.4s y 3.2s

      star.style.left = Math.random() * 98 + 'vw';
      star.style.top = Math.random() * 98 + 'vh';
      star.style.width = size + 'px';
      star.style.height = size + 'px';
      star.style.animationDuration = duration + 's';

      sparklesRef.current.appendChild(star);

      setTimeout(() => {
        if (star.parentNode) star.remove();
      }, (duration + 0.3) * 1000);
    }

    for (let i = 0; i < 8; i++) {
      setTimeout(createSparkleStar, i * 250);
    }
    const sparkleInterval = setInterval(createSparkleStar, 450);

    return () => {
      clearInterval(dustInterval);
      clearInterval(fireflyInterval);
      clearInterval(sparkleInterval);
    };
  }, []);

  return (
    <>
      <div className="bokeh-container" aria-hidden="true">
        {BOKEH_ORBS.map((orb, idx) => (
          <div
            key={idx}
            className="bokeh-orb"
            style={{
              top: orb.top,
              left: orb.left,
              width: `${orb.size}px`,
              height: `${orb.size}px`,
              animationDuration: orb.duration,
              animationDelay: orb.delay,
            }}
          />
        ))}
      </div>
      <div className="firefly-container" ref={firefliesRef}></div>
      <div className="dust-container" ref={dustRef}></div>
      <div className="sparkle-container" ref={sparklesRef}></div>
    </>
  );
}