import React from 'react';
import Image from 'next/image';

export function FreshTrackLogo({ className = '', size = 'md' }: { className?: string; size?: 'sm' | 'md' | 'lg' }) {
  const sizeMap = {
    sm: 32,
    md: 48,
    lg: 64
  };

  const pixelSize = sizeMap[size];

  return (
    <div className={`relative ${className}`} style={{ width: pixelSize, height: pixelSize }}>
      <Image
        src="/images/freshtrack-logo.png"
        alt="FreshTRACK Logo"
        width={pixelSize}
        height={pixelSize}
        className="object-contain"
        priority
      />
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
