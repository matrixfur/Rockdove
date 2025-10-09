# Rock Dove Aviation - Component Structure

## Overview
The website has been completely restructured with a modern, responsive component-based architecture featuring horror-themed interactive animations.

## Component Structure

### Main Components
- **Layout.tsx** - Main layout component that orchestrates all sections
- **Header.tsx** - Navigation header with responsive design
- **Hero.tsx** - Hero section with animated title and call-to-action
- **Clients.tsx** - Client showcase section
- **Services.tsx** - Service cards with hover effects
- **Inventory.tsx** - Inventory showcase with interactive elements
- **Stats.tsx** - Statistics section with animated counters
- **Features.tsx** - Feature highlights with spooky animations
- **FAQ.tsx** - Interactive FAQ section with expand/collapse
- **Contact.tsx** - Contact section with call-to-action
- **Footer.tsx** - Footer with company information and links

### UI Components
- **Button.tsx** - Reusable button component
- **Card.tsx** - Card component for content display
- **Accordion.tsx** - Accordion component for FAQ

## Horror-Themed Features

### Animations
- **Flicker Effect** - Text and elements that flicker like old neon signs
- **Spooky Glow** - Glowing text effects with pulsing intensity
- **Ghost Float** - Floating animations for images and elements
- **Spooky Shake** - Shake effects on hover for interactive elements
- **Horror Fade-in** - Dramatic fade-in effects with blur and scale

### Interactive Elements
- Hover effects with brightness and contrast changes
- Spooky shadows with glowing edges
- Responsive animations that adapt to screen size
- Horror-themed transitions with cubic-bezier easing

## Responsive Design

### Breakpoints
- **Mobile**: < 768px - Single column layout, smaller text
- **Tablet**: 768px - 1024px - Two column layouts, medium text
- **Desktop**: > 1024px - Full multi-column layouts, large text

### Responsive Features
- Flexible grid layouts that adapt to screen size
- Responsive typography with appropriate scaling
- Mobile-optimized navigation
- Touch-friendly interactive elements

## File Structure
```
src/
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Clients.tsx
│   ├── Services.tsx
│   ├── Inventory.tsx
│   ├── Stats.tsx
│   ├── Features.tsx
│   ├── FAQ.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── Layout.tsx
│   └── ui/
│       ├── button.tsx
│       ├── card.tsx
│       └── accordion.tsx
├── styles/
│   └── horror-effects.css
└── index.tsx
```

## Custom CSS Classes

### Horror Effects
- `.horror-text` - Flickering text animation
- `.spooky-glow` - Glowing text effect
- `.ghost-float` - Floating animation
- `.spooky-hover` - Hover shake effect
- `.horror-transition` - Smooth horror-themed transitions
- `.spooky-shadow` - Glowing shadow effects

### Animation Classes
- `.animate-flicker` - Flickering animation
- `.animate-glow` - Glowing animation
- `.animate-float` - Floating animation
- `.animate-spooky-float` - Spooky floating animation
- `.animate-fade-up` - Fade up animation
- `.animate-shake` - Shake animation

## Usage

The website is now fully responsive and includes:
- Modern React component architecture
- Horror-themed interactive animations
- Responsive design for all screen sizes
- Smooth transitions and hover effects
- Accessible navigation and interactions

All components are self-contained and can be easily modified or extended as needed.
