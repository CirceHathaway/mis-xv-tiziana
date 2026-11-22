// src/components/SplashScreen.jsx
import React, { useState } from 'react';
import CrownIcon from './CrownIcon';
import BackgroundEffects from './BackgroundEffects';

export default function SplashScreen({ onComplete }) {
  const [fadeOut, setFadeOut] = useState(false);

  const handleClose = () => {
    setFadeOut(true);
    setTimeout(() => {
      onComplete();
    }, 800);
  };

  return (
    <div className={`splash-overlay ${fadeOut ? 'fade-out' : ''}`} onClick={handleClose}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none' }}>
        <BackgroundEffects />
      </div>
      
      <div className="splash-content" style={{ position: 'relative', zIndex: 10 }}>
        <CrownIcon className="splash-crown" />
        
        <h1 className="splash-title">Mis XV Años</h1>
        <h2 className="splash-name">Tiziana</h2>
        
        <p className="splash-tap">Toca para entrar</p>
      </div>
    </div>
  );
}