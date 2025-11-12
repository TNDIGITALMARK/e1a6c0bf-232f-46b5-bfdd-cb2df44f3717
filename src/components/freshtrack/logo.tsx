import React from 'react';

export function FreshTrackLogo({ className = '', size = 'md' }: { className?: string; size?: 'sm' | 'md' | 'lg' }) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Circular swirl background */}
        <circle cx="100" cy="100" r="95" fill="url(#freshtrack-gradient)" />

        {/* Swirl pattern - 6 curved blades */}
        <path d="M100 100 Q 140 80, 160 100 Q 140 120, 100 100 Z" fill="#fff" opacity="0.9" />
        <path d="M100 100 Q 120 60, 140 40 Q 120 60, 100 100 Z" fill="#fff" opacity="0.8" />
        <path d="M100 100 Q 80 60, 60 40 Q 80 60, 100 100 Z" fill="#fff" opacity="0.8" />
        <path d="M100 100 Q 60 80, 40 100 Q 60 120, 100 100 Z" fill="#fff" opacity="0.9" />
        <path d="M100 100 Q 80 140, 60 160 Q 80 140, 100 100 Z" fill="#fff" opacity="0.8" />
        <path d="M100 100 Q 120 140, 140 160 Q 120 140, 100 100 Z" fill="#fff" opacity="0.8" />

        {/* Center circle with carrot */}
        <circle cx="100" cy="100" r="30" fill="#008000" />

        {/* Carrot icon */}
        <path d="M 95 85 L 105 85 L 107 80 L 103 80 L 105 75 L 100 75 L 98 80 L 93 80 L 95 85 Z" fill="#7CB342" />
        <path d="M 100 85 L 90 115 Q 90 120, 95 120 L 105 120 Q 110 120, 110 115 L 100 85 Z" fill="#fff" />
        <path d="M 95 90 L 94 95" stroke="#008000" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M 100 92 L 100 97" stroke="#008000" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M 105 90 L 106 95" stroke="#008000" strokeWidth="1.5" strokeLinecap="round" />

        {/* Gradient definitions */}
        <defs>
          <linearGradient id="freshtrack-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#008000" />
            <stop offset="50%" stopColor="#7CB342" />
            <stop offset="100%" stopColor="#A5D6A7" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export function FreshTrackWordmark({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <FreshTrackLogo size="md" />
      <div className="text-2xl font-bold">
        <span className="text-[#008000]">Fresh</span>
        <span className="text-[#9E9E9E]">TRACK</span>
      </div>
    </div>
  );
}
