# FreshTRACK Logo System

## Overview

The FreshTRACK logo system provides a complete, flexible brand identity solution with multiple components and size variations. The logo features a modern leaf icon representing freshness and sustainability, paired with the FreshTRACK wordmark.

## Components

### 1. FreshTrackLogo (Icon Only)

The standalone logo icon - perfect for favicons, app icons, and compact spaces.

```tsx
import { FreshTrackLogo } from '@/components/freshtrack/logo';

<FreshTrackLogo size="md" />
```

**Available Sizes:**
- `xs` - 24px (compact UI elements)
- `sm` - 32px (small buttons, badges)
- `md` - 48px (default, general use)
- `lg` - 64px (prominent placements)
- `xl` - 96px (hero sections)

### 2. FreshTrackWordmark (Complete Logo)

Full logo with icon and brand text - use in headers, navigation, and primary branding.

```tsx
import { FreshTrackWordmark } from '@/components/freshtrack/logo';

<FreshTrackWordmark size="md" showIcon={true} />
```

**Available Sizes:**
- `sm` - Small (icon: 32px, text: text-lg)
- `md` - Medium (icon: 48px, text: text-2xl)
- `lg` - Large (icon: 64px, text: text-4xl)

**Props:**
- `showIcon` - Toggle icon visibility (default: true)
- `size` - Size variant
- `className` - Additional CSS classes

### 3. FreshTrackText (Text Only)

Text-only wordmark for use when icon is shown separately or space is constrained.

```tsx
import { FreshTrackText } from '@/components/freshtrack/logo';

<FreshTrackText size="md" />
```

**Available Sizes:**
- `sm` - text-base
- `md` - text-xl
- `lg` - text-3xl

## SVG Assets

Pre-rendered SVG files are available in `/public/images/`:

- **freshtrack-icon.svg** - Standalone logo icon (48x48px)
- **freshtrack-wordmark.svg** - Complete wordmark with icon (240x48px)
- **logo.svg** - Legacy logo (kept for compatibility)

## Brand Colors

The logo uses FreshTRACK's official color palette defined in globals.css:

| Color | Hex | CSS Variable | Usage |
|-------|-----|--------------|-------|
| Dark Green | #008000 | --freshtrack-dark-green | Primary brand, "Fresh" text, main leaf |
| Lime Green | #7CB342 | --freshtrack-lime-green | Secondary accent, leaf vein, indicator dot |
| Light Green | #A5D6A7 | --freshtrack-light-green | Accent highlights, secondary veins |
| Gray | #9E9E9E | --freshtrack-gray | Supporting text, "TRACK" wordmark |

## Usage Examples

### Header/Navigation

```tsx
<header className="border-b border-gray-200">
  <div className="container mx-auto px-6 py-4">
    <FreshTrackWordmark size="md" />
  </div>
</header>
```

### Favicon

Use the SVG icon directly in your layout:

```html
<link rel="icon" href="/images/freshtrack-icon.svg" />
```

### Centered Hero Logo

```tsx
<div className="flex items-center justify-center min-h-screen">
  <FreshTrackWordmark size="lg" />
</div>
```

### Mobile App Icon

```tsx
<FreshTrackLogo size="xl" className="mx-auto" />
```

## Design Guidelines

### ✅ DO

- Use the full wordmark in headers and primary navigation
- Use icon-only for favicons, app icons, and compact spaces
- Maintain consistent sizing throughout the application
- Ensure sufficient contrast with background colors
- Use appropriate size variants for different contexts

### ❌ DON'T

- Don't distort or stretch the logo proportions
- Don't change brand colors arbitrarily
- Don't use low-contrast backgrounds
- Don't place logo on busy or patterned backgrounds
- Don't rotate or skew the logo
- Don't recreate the logo with different fonts

## Responsive Behavior

The logo components are built with responsive design in mind:

```tsx
<FreshTrackWordmark
  size="sm"
  className="md:hidden" // Mobile only
/>
<FreshTrackWordmark
  size="lg"
  className="hidden md:block" // Desktop only
/>
```

## Accessibility

All logo components include:
- Proper `aria-label` attributes
- Semantic HTML structure
- SVG with descriptive comments
- High contrast color combinations (WCAG AA compliant)

## Theme Support

The logo automatically adapts to theme changes through CSS custom properties:

- Light mode: Full brand colors
- Dark mode: Colors adjust via CSS variables (defined in globals.css)

## Component Props Reference

### FreshTrackLogo

```typescript
interface LogoProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}
```

### FreshTrackWordmark

```typescript
interface WordmarkProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showIcon?: boolean;
}
```

### FreshTrackText

```typescript
interface TextProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}
```

## Visual Showcase

To see all logo variations and usage examples, visit:
```
/logo-showcase
```

This page demonstrates:
- All size variations
- Background variations
- Usage guidelines
- Color reference
- Best practices

## Technical Details

- **Format**: React components with inline SVG
- **Styling**: Tailwind CSS + CSS custom properties
- **Framework**: Next.js 15+
- **Type Safety**: Full TypeScript support
- **Performance**: Zero external dependencies, optimized SVG paths
- **Accessibility**: WCAG 2.1 Level AA compliant

## Files

- `/src/components/freshtrack/logo.tsx` - React components
- `/public/images/freshtrack-icon.svg` - Icon SVG
- `/public/images/freshtrack-wordmark.svg` - Wordmark SVG
- `/src/app/logo-showcase/page.tsx` - Visual showcase
- `/src/app/globals.css` - Brand color definitions

## Support

For questions or suggestions about the logo system, please consult:
- Design system documentation
- Color palette in globals.css
- Logo showcase page at /logo-showcase
