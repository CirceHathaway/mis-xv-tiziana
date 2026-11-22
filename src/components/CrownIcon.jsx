// src/components/CrownIcon.jsx
import React from 'react';

export default function CrownIcon({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 85"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Corona plateada"
    >
      <defs>
        <linearGradient id="silverCrownGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8e97a4" />
          <stop offset="30%" stopColor="#ffffff" />
          <stop offset="55%" stopColor="#b8c0cc" />
          <stop offset="80%" stopColor="#f8fafc" />
          <stop offset="100%" stopColor="#5c6370" />
        </linearGradient>
      </defs>

      {/* Joyas superiores */}
      <circle cx="14" cy="24" r="4.5" fill="url(#silverCrownGrad)" />
      <circle cx="38" cy="14" r="5" fill="url(#silverCrownGrad)" />
      <circle cx="60" cy="8" r="6" fill="url(#silverCrownGrad)" />
      <circle cx="82" cy="14" r="5" fill="url(#silverCrownGrad)" />
      <circle cx="106" cy="24" r="4.5" fill="url(#silverCrownGrad)" />

      {/* Cuerpo de la corona */}
      <path
        d="M18 66L13 30L34 45L39 20L54 41L60 15L66 41L81 20L86 45L107 30L102 66H18Z"
        fill="url(#silverCrownGrad)"
        stroke="#ffffff"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* Base ornamental */}
      <rect
        x="17"
        y="68"
        width="86"
        height="10"
        rx="4"
        fill="url(#silverCrownGrad)"
        stroke="#ffffff"
        strokeWidth="1.2"
      />

      {/* Detalles cristal en la base */}
      <circle cx="34" cy="73" r="2" fill="#1a1d24" />
      <circle cx="60" cy="73" r="2.5" fill="#1a1d24" />
      <circle cx="86" cy="73" r="2" fill="#1a1d24" />
    </svg>
  );
}