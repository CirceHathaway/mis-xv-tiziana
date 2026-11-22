// src/components/DressCode.jsx
import React from 'react';
import AnimatedSection from './AnimatedSection';
import decoEsquinaTop from '../assets/image_1.png';
import decoEsquinaBottom from '../assets/image_2.png';

export default function DressCode() {
  return (
    <AnimatedSection>
      <div className="corner-deco corner-top-left"><img src={decoEsquinaTop} alt="Decoración superior" /></div>
      <div className="corner-deco corner-top-right"><img src={decoEsquinaTop} alt="Decoración superior" /></div>
      <div className="corner-deco corner-bottom-left"><img src={decoEsquinaBottom} alt="Decoración inferior" /></div>
      <div className="corner-deco corner-bottom-right"><img src={decoEsquinaBottom} alt="Decoración inferior" /></div>

      <i className="fas fa-user-tie" style={{ fontSize: '2.5rem', color: 'var(--silver)', marginBottom: '20px' }}></i>
      <h2>Dress Code</h2>
      <p>Para esta noche tan especial, el código de vestimenta es:</p>
      <div style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: '1.5rem', color: 'var(--silver-glow)', marginTop: '10px' }}>
        Elegante Sport
      </div>
    </AnimatedSection>
  );
}