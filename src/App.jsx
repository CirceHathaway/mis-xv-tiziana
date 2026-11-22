// src/App.jsx
import React, { useState } from 'react';
import SplashScreen from './components/SplashScreen';
import BackgroundEffects from './components/BackgroundEffects';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import EventDetails from './components/EventDetails';
import Gallery from './components/Gallery';
import Gifts from './components/Gifts';         
import DressCode from './components/DressCode';
import RSVP from './components/RSVP';
import Modal from './components/Modal';
import './App.css';

export default function App() {
  const [activeModal, setActiveModal] = useState(null); // 'calendar', 'map', o null
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {/* PANTALLA DE INTRODUCCIÓN */}
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      
      {/* Contenedor principal */}
      <div className={`app-container ${showSplash ? 'no-scroll-intro' : ''}`}>
        
        {/* Efectos de fondo: Luciérnagas plateadas + lluvia de polvo */}
        <BackgroundEffects />
        
        <Hero />
        
        <div className="after-hero-container">
          <Countdown targetDate="2027-02-07T21:00:00" />
        </div>

        <EventDetails onOpenModal={setActiveModal} />
        
        <div className="silver-line"></div>
        
        <Gallery />
        
        <div className="silver-line"></div>
        
        <Gifts />
        <DressCode />
        <RSVP />

        <footer><p>Mis 15 Años - Tiziana | 2027 ✨</p></footer>

        {/* Modal de Calendario */}
        {activeModal === 'calendar' && (
          <Modal title="Agendar Fecha" onClose={() => setActiveModal(null)}>
            <p style={{ marginBottom: '25px', color: 'var(--text-muted)', fontSize: '1.1rem' }}>
              Domingo 7 de Febrero, 2027 - 21:00 Hs
            </p>
            
            {/* Opción 1: Google Calendar */}
            <a 
              href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Mis+15+Años+-+Tiziana&dates=20270207T210000/20270208T050000&details=Te+espero+para+compartir+esta+noche+mágica.&location=Salón+SMILE+Black,+Boulogne+Sur+Mer+633,+Pacheco,+Buenos+Aires" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="modal-btn-option"
            >
              <i className="fab fa-google" style={{ marginRight: '10px' }}></i> 
              Google Calendar
            </a>

            {/* Opción 2: Apple Calendar / Outlook */}
            <a 
              href="data:text/calendar;charset=utf8,BEGIN:VCALENDAR%0AVERSION:2.0%0ABEGIN:VEVENT%0ADTSTART:20270207T210000%0ADTEND:20270208T050000%0ASUMMARY:Mis%2015%20A%C3%B1os%20-%20Tiziana%0ADESCRIPTION:Te%20espero%20para%20compartir%20esta%20noche%20m%C3%A1gica.%0ALOCATION:Sal%C3%B3n%20SMILE%20Black%2C%20Boulogne%20Sur%20Mer%20633%2C%20Pacheco%0AEND:VEVENT%0AEND:VCALENDAR" 
              download="Mis_15_Tiziana.ics" 
              className="modal-btn-option"
            >
              <i className="fab fa-apple" style={{ marginRight: '10px' }}></i> 
              Apple Calendar
            </a>
          </Modal>
        )}

        {/* Modal Map (se mantiene el lugar provisional) */}
        {activeModal === 'map' && (
          <Modal title="Cómo llegar a la fiesta" onClose={() => setActiveModal(null)}>
             <div className="map-wrapper">
                <iframe 
                  className="map-frame loaded" 
                  src="https://maps.google.com/maps?q=Boulogne%20Sur%20Mer%20633,%20Pacheco,%20Buenos%20Aires&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                  allowFullScreen="" 
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{ width: '100%', height: '100%', border: 'none' }}
                ></iframe>
             </div>
             
             <a 
                href="https://www.google.com/maps/search/?api=1&query=Boulogne+Sur+Mer+633,+Pacheco,+Buenos+Aires" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn"
                style={{ marginTop: '20px' }}
             >
                Abrir en App de Maps
             </a>
          </Modal>
        )}
      </div>
    </>
  );
}