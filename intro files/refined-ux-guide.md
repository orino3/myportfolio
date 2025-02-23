# UI/UX Formatting Guide

## 1. Color System

### Primary Colors (60% Usage)
```css
:root {
  /* Main Colors */
  --deep-space: #0B1C3D;    /* Main background */
  --electric-blue: #0052D4;  /* Primary interactive elements */
  --midnight-slate: #1D273B; /* Secondary background, cards */
}
```

### Secondary & Accent Colors (30% Usage)
```css
:root {
  /* Secondary */
  --tech-grey: #AEB8C2;     /* Secondary text, disabled states */
  --neon-cyan: #00FFFF;     /* Highlights, accents, focus states */
}
```

### Neutral Colors (10% Usage)
```css
:root {
  --white: #FFFFFF;         /* Primary text, high contrast elements */
  --charcoal: #121212;      /* Dark elements, shadows */
}
```

### Color Application Guide

1. Backgrounds
```css
/* Main layout */
.body-background {
  background-color: var(--deep-space);
}

/* Cards and sections */
.card {
  background-color: var(--midnight-slate);
}

/* Interactive containers */
.interactive-section {
  background-color: var(--midnight-slate);
  border: 1px solid var(--electric-blue);
}
```

2. Text Colors
```css
/* Primary text */
.text-primary {
  color: var(--white);
}

/* Secondary text */
.text-secondary {
  color: var(--tech-grey);
}

/* Interactive text */
.text-interactive {
  color: var(--electric-blue);
}

/* Accent text */
.text-accent {
  color: var(--neon-cyan);
}
```

3. Interactive Elements
```css
/* Primary button */
.button-primary {
  background-color: var(--electric-blue);
  color: var(--white);
}

.button-primary:hover {
  background-color: var(--neon-cyan);
  color: var(--deep-space);
}

/* Secondary button */
.button-secondary {
  background-color: transparent;
  border: 2px solid var(--electric-blue);
  color: var(--electric-blue);
}

.button-secondary:hover {
  border-color: var(--neon-cyan);
  color: var(--neon-cyan);
}
```

## 2. Typography

### Font Stack
```css
:root {
  --font-primary: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'Fira Code', monospace;
}
```

### Text Styles

1. Headings
```css
h1 {
  font-family: var(--font-primary);
  font-size: 3.5rem;      /* 56px */
  font-weight: 900;       /* Black */
  color: var(--white);
  letter-spacing: -0.02em;
  line-height: 1.1;
}

h2 {
  font-size: 2.5rem;      /* 40px */
  font-weight: 700;       /* Bold */
  color: var(--white);
  letter-spacing: -0.01em;
  line-height: 1.2;
}

h3 {
  font-size: 2rem;        /* 32px */
  font-weight: 600;       /* Semibold */
  color: var(--white);
  line-height: 1.3;
}
```

2. Body Text
```css
/* Default body text */
body {
  font-family: var(--font-primary);
  font-size: 1rem;        /* 16px */
  font-weight: 400;       /* Regular */
  line-height: 1.5;
  color: var(--white);
}

/* Large text */
.text-lg {
  font-size: 1.125rem;    /* 18px */
  line-height: 1.6;
}

/* Small text */
.text-sm {
  font-size: 0.875rem;    /* 14px */
  line-height: 1.4;
  color: var(--tech-grey);
}

/* Code text */
.text-code {
  font-family: var(--font-mono);
  font-size: 0.875rem;    /* 14px */
  color: var(--neon-cyan);
}
```

## 3. Spacing System

```css
:root {
  --space-1: 0.25rem;     /* 4px */
  --space-2: 0.5rem;      /* 8px */
  --space-3: 0.75rem;     /* 12px */
  --space-4: 1rem;        /* 16px */
  --space-6: 1.5rem;      /* 24px */
  --space-8: 2rem;        /* 32px */
  --space-12: 3rem;       /* 48px */
  --space-16: 4rem;       /* 64px */
}
```

### Layout Spacing
```css
/* Section spacing */
.section {
  padding: var(--space-16) 0;
}

/* Card spacing */
.card {
  padding: var(--space-6);
  margin-bottom: var(--space-8);
}

/* Text spacing */
p {
  margin-bottom: var(--space-4);
}

h1, h2, h3 {
  margin-bottom: var(--space-6);
}
```

## 4. Effects

### Shadows
```css
:root {
  --shadow-sm: 0 2px 4px rgba(18, 18, 18, 0.1);
  --shadow-md: 0 4px 6px rgba(18, 18, 18, 0.1);
  --shadow-lg: 0 10px 15px rgba(18, 18, 18, 0.1);
}
```

### Glows
```css
.glow-effect {
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.3);
}

.interactive-glow:hover {
  box-shadow: 0 0 20px rgba(0, 82, 212, 0.4);
}
```

## 5. Responsive Breakpoints

```css
:root {
  --screen-sm: 640px;
  --screen-md: 768px;
  --screen-lg: 1024px;
  --screen-xl: 1280px;
}

/* Responsive text */
@media (max-width: 768px) {
  h1 { font-size: 2.5rem; }  /* 40px */
  h2 { font-size: 2rem; }    /* 32px */
  h3 { font-size: 1.5rem; }  /* 24px */
}

@media (max-width: 640px) {
  h1 { font-size: 2rem; }    /* 32px */
  h2 { font-size: 1.5rem; }  /* 24px */
  h3 { font-size: 1.25rem; } /* 20px */
  body { font-size: 0.875rem; } /* 14px */
}
```