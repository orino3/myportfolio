# Design System Document

## 1. Brand Identity

### Brand Values
- Professional
- Innovative
- Technical
- Approachable
- Forward-thinking

### Tone and Voice
- Clear and concise
- Technical yet accessible
- Professional but personable
- Confident and competent
- Solution-oriented

## 2. Color System

### Primary Colors
```css
--primary-900: #0A2647; /* Deep Navy */
--primary-800: #144272; /* Navy */
--primary-700: #205295; /* Rich Blue */
--primary-600: #2C74B3; /* Bright Blue */
--primary-500: #419FD9; /* Light Blue */
```

### Secondary Colors
```css
--secondary-900: #2D2727; /* Deep Gray */
--secondary-800: #413F42; /* Dark Gray */
--secondary-700: #635985; /* Medium Purple */
--secondary-600: #8B7E74; /* Light Purple */
--secondary-500: #9DB2BF; /* Light Gray */
```

### Accent Colors
```css
--accent-success: #4CAF50; /* Green */
--accent-warning: #FFA726; /* Orange */
--accent-error: #EF5350;   /* Red */
--accent-info: #29B6F6;    /* Blue */
```

### Neutral Colors
```css
--neutral-900: #121212; /* Almost Black */
--neutral-800: #262626;
--neutral-700: #404040;
--neutral-600: #525252;
--neutral-500: #737373;
--neutral-400: #A3A3A3;
--neutral-300: #D4D4D4;
--neutral-200: #E5E5E5;
--neutral-100: #F5F5F5;
--neutral-50: #FAFAFA;  /* Almost White */
```

## 3. Typography System

### Font Families
```css
/* Primary Font - For headings and important text */
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;

/* Secondary Font - For body text */
--font-secondary: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;

/* Monospace Font - For code blocks */
--font-mono: 'Fira Code', 'Roboto Mono', monospace;
```

### Type Scale
```css
/* Font Sizes */
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
--text-5xl: 3rem;      /* 48px */
```

### Font Weights
```css
--font-thin: 100;
--font-light: 300;
--font-regular: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
--font-black: 900;
```

## 4. Spacing System

### Base Units
```css
--space-1: 0.25rem;  /* 4px */
--space-2: 0.5rem;   /* 8px */
--space-3: 0.75rem;  /* 12px */
--space-4: 1rem;     /* 16px */
--space-5: 1.25rem;  /* 20px */
--space-6: 1.5rem;   /* 24px */
--space-8: 2rem;     /* 32px */
--space-10: 2.5rem;  /* 40px */
--space-12: 3rem;    /* 48px */
--space-16: 4rem;    /* 64px */
```

### Layout Spacing
```css
--layout-xs: 1rem;     /* 16px */
--layout-sm: 1.5rem;   /* 24px */
--layout-md: 2rem;     /* 32px */
--layout-lg: 3rem;     /* 48px */
--layout-xl: 4rem;     /* 64px */
--layout-2xl: 6rem;    /* 96px */
```

## 5. Component Library

### Buttons
```css
/* Button Sizes */
.btn-sm {
  padding: var(--space-1) var(--space-2);
  font-size: var(--text-sm);
}

.btn-md {
  padding: var(--space-2) var(--space-4);
  font-size: var(--text-base);
}

.btn-lg {
  padding: var(--space-3) var(--space-6);
  font-size: var(--text-lg);
}

/* Button Variants */
.btn-primary {
  background: var(--primary-600);
  color: white;
}

.btn-secondary {
  background: var(--secondary-600);
  color: white;
}

.btn-outline {
  border: 2px solid var(--primary-600);
  color: var(--primary-600);
}
```

### Cards
```css
.card {
  border-radius: 8px;
  padding: var(--space-6);
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card-hover {
  transition: transform 0.2s ease;
}

.card-hover:hover {
  transform: translateY(-4px);
}
```

### Input Fields
```css
.input {
  padding: var(--space-2) var(--space-3);
  border: 1px solid var(--neutral-300);
  border-radius: 4px;
  font-size: var(--text-base);
}

.input:focus {
  border-color: var(--primary-600);
  outline: none;
  box-shadow: 0 0 0 3px rgba(44, 116, 179, 0.2);
}
```

## 6. Grid System

### Breakpoints
```css
/* Breakpoint tokens */
--screen-sm: 640px;
--screen-md: 768px;
--screen-lg: 1024px;
--screen-xl: 1280px;
--screen-2xl: 1536px;
```

### Container Widths
```css
.container {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--space-4);
  padding-right: var(--space-4);
}

@media (min-width: 640px) {
  .container {
    max-width: 640px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }
}

/* Continue for other breakpoints */
```

## 7. Animation System

### Timing Functions
```css
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
```

### Duration Tokens
```css
--duration-75: 75ms;
--duration-100: 100ms;
--duration-150: 150ms;
--duration-200: 200ms;
--duration-300: 300ms;
--duration-500: 500ms;
```

### Animation Presets
```css
.transition-transform {
  transition-property: transform;
  transition-timing-function: var(--ease-out);
  transition-duration: var(--duration-200);
}

.transition-opacity {
  transition-property: opacity;
  transition-timing-function: var(--ease-in-out);
  transition-duration: var(--duration-150);
}
```

## 8. Shadow System

```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
```

## 9. Border System

```css
--border-radius-sm: 0.125rem;
--border-radius-md: 0.25rem;
--border-radius-lg: 0.5rem;
--border-radius-xl: 1rem;
--border-radius-full: 9999px;
```

## 10. UI States

### Interactive States
```css
/* Focus States */
.focus-ring {
  outline: none;
  box-shadow: 0 0 0 3px rgba(44, 116, 179, 0.5);
}

/* Hover States */
.hover-lift {
  transition: transform var(--duration-200) var(--ease-out);
}

.hover-lift:hover {
  transform: translateY(-2px);
}
```

### Loading States
```css
.skeleton {
  background: linear-gradient(
    90deg,
    var(--neutral-200) 0%,
    var(--neutral-300) 50%,
    var(--neutral-200) 100%
  );
  background-size: 200% 100%;
  animation: skeleton-loading 1.5s infinite;
}

@keyframes skeleton-loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
```

## 11. Icons and Graphics

### Icon System
- Use Lucide React icons for consistency
- Default icon sizes:
  - sm: 16px
  - md: 24px
  - lg: 32px
  - xl: 48px

### Illustration Guidelines
- Consistent stroke width
- Color palette adherence
- Responsive scaling
- Optional animation

## 12. Accessibility Patterns

### Focus Indicators
```css
/* Visible focus indicators */
:focus-visible {
  outline: 2px solid var(--primary-600);
  outline-offset: 2px;
}
```

### Color Contrast
- Minimum contrast ratio: 4.5:1 for normal text
- Minimum contrast ratio: 3:1 for large text
- Test all color combinations

### Motion and Animation
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

## 13. Dark Mode

```css
:root[data-theme="dark"] {
  --primary-900: #0D47A1;
  --primary-800: #1976D2;
  --primary-700: #2196F3;
  --primary-600: #42A5F5;
  --primary-500: #90CAF9;
  
  /* Continue for all color tokens */
  
  --bg-primary: var(--neutral-900);
  --text-primary: var(--neutral-100);
  --text-secondary: var(--neutral-300);
}
```

## 14. Implementation Guidelines

### CSS Class Naming
- Follow BEM methodology
- Use meaningful, descriptive names
- Maintain consistent naming patterns

### Component Architecture
- Build from atomic components
- Maintain consistent prop patterns
- Document component variants
- Include accessibility requirements

### Performance Considerations
- Optimize asset loading
- Minimize CSS specificity
- Use CSS custom properties for theming
- Implement code splitting