// src/components/Hero.jsx
import React from 'react';
import separadorHorizontal from '../assets/image_24.png';
import CrownIcon from './CrownIcon';

export default function Hero() {
  return (
    <header className="hero">
      <div className="hero-center-layout">
        <div className="hero-text-content">
          <CrownIcon className="hero-crown" />
          
          <div className="top-title">Mis XV Años</div>
          <h1>Tiziana</h1>
          
          <div className="hero-quote">
            <i className="fas fa-quote-left"></i>
            Te espero para compartir la alegría de esa noche que será para mí mágica, inolvidable y única.
            <i className="fas fa-quote-right"></i>
          </div>
        </div>
      </div>
      
      <div className="horizontal-separator-container">
        <img src={separadorHorizontal} className="horizontal-separator-img" alt="" />
      </div>
    </header>
  );
}