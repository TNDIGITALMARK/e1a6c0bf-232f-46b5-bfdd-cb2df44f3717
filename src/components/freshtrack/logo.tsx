import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

interface WordmarkProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showIcon?: boolean;
}

/**
 * FreshTRACK Logo Icon
 * Clean, modern leaf icon representing freshness and sustainability
 */
export function FreshTrackLogo({ className = '', size = 'md' }: LogoProps) {
  const sizeMap = {
    xs: 24,
    sm: 32,
    md: 48,
    lg: 64,
    xl: 96
  };

  const pixelSize = sizeMap[size];

  return (
    <svg
      width={pixelSize}
      height={pixelSize}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="FreshTRACK Logo"
    >
      {/* Outer leaf shape - Dark Green */}
      <path
        d="M24 6C24 6 10 12 10 24C10 31.732 16.268 38 24 38C31.732 38 38 31.732 38 24C38 12 24 6 24 6Z"
        fill="hsl(var(--freshtrack-dark-green))"
        className="transition-colors"
      />

      {/* Leaf vein - central line */}
      <path
        d="M24 6L24 38"
        stroke="hsl(var(--freshtrack-lime-green))"
        strokeWidth="2.5"
        strokeLinecap="round"
        className="transition-colors"
      />

      {/* Secondary veins */}
      <path
        d="M24 14C24 14 28 18 28 24"
        stroke="hsl(var(--freshtrack-light-green))"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.6"
        className="transition-colors transition-opacity"
      />
      <path
        d="M24 14C24 14 20 18 20 24"
        stroke="hsl(var(--freshtrack-light-green))"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.6"
        className="transition-colors transition-opacity"
      />

      {/* Freshness indicator dot */}
      <circle
        cx="24"
        cy="10"
        r="2"
        fill="hsl(var(--freshtrack-lime-green))"
        className="transition-colors"
      />
    </svg>
  );
}

/**
 * FreshTRACK Wordmark
 * Complete logo with icon and brand text
 */
export function FreshTrackWordmark({ className = '', size = 'md', showIcon = true }: WordmarkProps) {
  const textSizeMap = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-4xl'
  };

  const iconSizeMap = {
    sm: 'sm' as const,
    md: 'md' as const,
    lg: 'lg' as const
  };

  const gapMap = {
    sm: 'gap-2',
    md: 'gap-3',
    lg: 'gap-4'
  };

  return (
    <div className={`flex items-center ${gapMap[size]} ${className}`}>
      {showIcon && <FreshTrackLogo size={iconSizeMap[size]} />}
      <div className={`${textSizeMap[size]} font-bold leading-none`}>
        <span className="text-[hsl(var(--freshtrack-dark-green))]">Fresh</span>
        <span className="text-[hsl(var(--freshtrack-gray))]">TRACK</span>
      </div>
    </div>
  );
}

/**
 * Minimal text-only wordmark
 * For use in tight spaces or when icon is shown separately
 */
export function FreshTrackText({ className = '', size = 'md' }: { className?: string; size?: 'sm' | 'md' | 'lg' }) {
  const textSizeMap = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-3xl'
  };

  return (
    <div className={`${textSizeMap[size]} font-bold leading-none ${className}`}>
      <span className="text-[hsl(var(--freshtrack-dark-green))]">Fresh</span>
      <span className="text-[hsl(var(--freshtrack-gray))]">TRACK</span>
    </div>
  );
}
