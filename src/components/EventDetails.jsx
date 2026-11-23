// src/components/EventDetails.jsx
import React from 'react';
import AnimatedSection from './AnimatedSection';
import decoEsquinaTop from '../assets/image_1.png';
import decoEsquinaBottom from '../assets/image_2.png';

export default function EventDetails({ onOpenModal }) {
  return (
    <>
      {/* SECCIÓN 1: Celebración */}
      <section id="detalles" className="section visible">
        <div className="corner-deco corner-top-left"><img src={decoEsquinaTop} alt="" /></div>
        <div className="corner-deco corner-top-right"><img src={decoEsquinaTop} alt="" /></div>
        <div className="corner-deco corner-bottom-left"><img src={decoEsquinaBottom} alt="" /></div>
        <div className="corner-deco corner-bottom-right"><img src={decoEsquinaBottom} alt="" /></div>
        
        <h2>Celebración</h2>
        <div className="big-date-container">
          <div className="date-day-name">SÁBADO</div>
          <div className="date-number-big">13</div>
          <div className="date-month-year">de Febrero, 2027</div>
          <div className="time-box-styled"><div className="time-text">21:00 Hs</div></div>
          
          <button className="btn" style={{ marginTop: '15px', padding: '10px 30px', fontSize: '0.9rem' }} onClick={() => onOpenModal('calendar')}>
            <i className="far fa-calendar-alt"></i> Agendar
          </button>
        </div>
      </section>

      {/* SECCIÓN 2: Lugar de Encuentro */}
      <AnimatedSection>
        <div className="corner-deco corner-top-left"><img src={decoEsquinaTop} alt="" /></div>
        <div className="corner-deco corner-top-right"><img src={decoEsquinaTop} alt="" /></div>
        <div className="corner-deco corner-bottom-left"><img src={decoEsquinaBottom} alt="" /></div>
        <div className="corner-deco corner-bottom-right"><img src={decoEsquinaBottom} alt="" /></div>
        
        <h2>Lugar de Encuentro</h2>
        <div className="venue-subtitle">Te espero en...</div>
        <div className="venue-name">Salón "Antimi Eventos"</div>
        <div className="venue-address">Rosario 4570, Adolfo Sourdeaux, Buenos Aires</div>
        
        <button className="btn" style={{ padding: '15px 35px', fontSize: '1rem' }} onClick={() => onOpenModal('map')}>
          ¿Cómo Llegar?
        </button>
      </AnimatedSection>
    </>
  );
}