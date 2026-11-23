// src/components/Gifts.jsx
import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import decoEsquinaTop from '../assets/image_1.png';
import decoEsquinaBottom from '../assets/image_2.png';

export default function Gifts() {
  const [showToast, setShowToast] = useState(false);

  const copyAlias = () => {
    navigator.clipboard.writeText("tiziiii.738.mp").then(() => {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    });
  };

  return (
    <>
      <AnimatedSection>
        <div className="corner-deco corner-top-left"><img src={decoEsquinaTop} alt="" /></div>
        <div className="corner-deco corner-top-right"><img src={decoEsquinaTop} alt="" /></div>
        <div className="corner-deco corner-bottom-left"><img src={decoEsquinaBottom} alt="" /></div>
        <div className="corner-deco corner-bottom-right"><img src={decoEsquinaBottom} alt="" /></div>

        <i className="fas fa-gift" style={{ fontSize: '2.5rem', color: 'var(--silver)', marginBottom: '20px' }}></i>
        <h2>Regalos</h2>
        <p>El mejor regalo es tu presencia. Si deseas regalarme algo más que tu hermosa presencia...</p>
        <p style={{ marginTop: '14px', fontSize: '1.1rem', letterSpacing: '0.5px' }}>
          Alias: <strong>tiziiii.738.mp</strong>
        </p>
        
        <button className="btn" onClick={copyAlias}>
          <i className="fas fa-copy"></i> Copiar Alias
        </button>
      </AnimatedSection>

      <div className={`toast ${showToast ? 'show' : ''}`}>
        ¡Alias copiado al portapapeles!
      </div>
    </>
  );
}