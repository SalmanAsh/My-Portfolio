import React from "react";

const EngineerBackgroundAnimation = () => (
  <div className="absolute inset-0 -z-10">
    <svg
      viewBox="0 0 700 500"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {/* Light cone */}
      <polygon points="400,0 330,300 470,300" fill="#fff5d1" opacity="0.15" />

      {/* Animated desk shadow */}
      <ellipse cx="400" cy="450" rx="180" ry="20" fill="#000" opacity="0.1">
        <animate attributeName="opacity" values="0.08;0.12;0.08" dur="2s" repeatCount="indefinite" />
      </ellipse>

      {/* Animated lamp glow shadow */}
      <circle cx="400" cy="40" r="100" fill="#fff5d1" opacity="0.05">
        <animate attributeName="r" values="95;100;95" dur="2s" repeatCount="indefinite" />
      </circle>

      {/* Hanging lamp */}
      <circle cx="400" cy="0" r="20" fill="#9d7ad2" />
      <rect x="390" y="0" width="20" height="40" fill="#9d7ad2" />
      <circle cx="400" cy="40" r="10" fill="#fdf6d8">
        <animate attributeName="r" values="10;12;10" dur="1.2s" repeatCount="indefinite" />
      </circle>

      {/* Shelf */}
      <rect x="100" y="160" width="120" height="8" fill="#3a3a3a" />
      <rect x="110" y="130" width="20" height="30" fill="#45c28d" /> {/* Plant */}
      <path d="M120 130 Q115 120,110 130 Q115 125,120 130 Q125 125,130 130 Q125 120,120 130" fill="#68e0b4" />
      <rect x="140" y="135" width="10" height="25" fill="#e79acb" />
      <rect x="155" y="140" width="8" height="20" fill="#f4d35e" />
      <rect x="170" y="130" width="12" height="30" fill="#9ac9e3" />

      {/* Desk */}
      <rect x="200" y="420" width="400" height="20" fill="#2b1f2f" />
      <rect x="250" y="440" width="300" height="6" fill="#000" />

      {/* Monitor */}
      <rect x="300" y="250" width="200" height="130" rx="8" fill="#222" />
      <rect x="308" y="260" width="184" height="110" fill="#111" />

      {/* Screen blink animation */}
      <rect x="308" y="260" width="184" height="110" fill="#13ADC7" opacity="0.05">
        <animate attributeName="opacity" values="0.05;0.1;0.05" dur="2s" repeatCount="indefinite" />
      </rect>

      {/* Code lines scroll */}
      <g>
        {[...Array(8)].map((_, i) => (
          <rect
            key={i}
            x="315"
            y={270 + i * 10}
            width={(120 - i * 5).toString()}
            height="5"
            fill="#13ADC7"
            opacity="0.5"
          >
            <animate attributeName="y" values={`270;${260 + i * 10};270`} dur="4s" repeatCount="indefinite" />
          </rect>
        ))}
      </g>

      {/* Blinking Cursor */}
      <rect x="430" y="340" width="10" height="12" fill="#F46737">
        <animate attributeName="opacity" values="0;1;0" dur="1s" repeatCount="indefinite" />
      </rect>

      {/* Mug */}
      <rect x="230" y="410" width="20" height="20" rx="4" fill="#d66a6a" />
      <path d="M250 415 Q255 410 250 405" stroke="#d66a6a" strokeWidth="3" fill="none" />

      {/* Legs */}
      <rect x="360" y="380" width="10" height="40" fill="#945DD6" />
      <rect x="430" y="380" width="10" height="40" fill="#945DD6" />

    </svg>
  </div>
);

export default EngineerBackgroundAnimation;