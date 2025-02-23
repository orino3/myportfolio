# Component Specification Document

## 1. Core Components

### Button Component
```typescript
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outline' | 'ghost';
  size: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}
```

States:
- Default
- Hover
- Active
- Disabled
- Loading
- Focus

Usage Example:
```tsx
<Button 
  variant="primary"
  size="md"
  onClick={() => handleClick()}
  disabled={isLoading}
  loading={isLoading}
>
  View Project
</Button>
```

### Card Component
```typescript
interface CardProps {
  title: string;
  description?: string;
  image?: {
    src: string;
    alt: string;
  };
  tags?: string[];
  link?: string;
  className?: string;
  children?: React.ReactNode;
}
```

Variants:
- Basic Card
- Project Card
- Feature Card
- Testimonial Card

States:
- Default
- Hover
- Interactive
- Loading

### Input Component
```typescript
interface InputProps {
  type: 'text' | 'email' | 'password' | 'number';
  label: string;
  placeholder?: string;
  error?: string;
  helper?: string;
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  required?: boolean;
  className?: string;
}
```

States:
- Default
- Focus
- Error
- Disabled
- Filled

## 2. Navigation Components

### Header Component
```typescript
interface HeaderProps {
  transparent?: boolean;
  sticky?: boolean;
  onMenuToggle?: () => void;
}

interface NavigationItem {
  label: string;
  href: string;
  active?: boolean;
  icon?: React.ReactNode;
}
```

Features:
- Responsive navigation
- Mobile menu toggle
- Theme switcher
- Active page indicator

### Footer Component
```typescript
interface FooterProps {
  showSocialLinks?: boolean;
  showNewsletter?: boolean;
  className?: string;
}

interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
}
```

Sections:
- Quick links
- Social media
- Newsletter signup
- Copyright notice

## 3. Layout Components

### Container Component
```typescript
interface ContainerProps {
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  padding?: boolean;
  center?: boolean;
  className?: string;
  children: React.ReactNode;
}
```

Variants:
- Default container
- Narrow container
- Full-width container
- Centered container

### Grid Component
```typescript
interface GridProps {
  cols?: number;
  gap?: number;
  responsive?: boolean;
  className?: string;
  children: React.ReactNode;
}
```

Features:
- Responsive grid layout
- Custom column count
- Gap control
- Auto-flow options

## 4. Project Components

### ProjectCard Component
```typescript
interface ProjectCard {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}
```

Features:
- Image preview
- Technology tags
- Quick links
- Hover animation

### ProjectDetail Component
```typescript
interface ProjectDetail {
  title: string;
  overview: string;
  challenge: string;
  solution: string;
  technologies: string[];
  images: Array<{
    src: string;
    alt: string;
  }>;
  results?: string[];
  testimonial?: {
    text: string;
    author: string;
    role: string;
  };
}
```

Sections:
- Project hero
- Overview
- Technical details
- Results
- Gallery

## 5. Skills Components

### SkillCard Component
```typescript
interface SkillCard {
  category: string;
  skills: Array<{
    name: string;
    level: number;
    icon?: React.ReactNode;
  }>;
  description?: string;
}
```

Features:
- Skill level indicator
- Category grouping
- Icon support
- Hover details

### SkillGrid Component
```typescript
interface SkillGrid {
  skills: SkillCard[];
  columns?: number;
  showLevel?: boolean;
  interactive?: boolean;
}
```

Layout:
- Responsive grid
- Category sections
- Filter options
- Search functionality

## 6. Form Components

### ContactForm Component
```typescript
interface ContactForm {
  onSubmit: (data: FormData) => void;
  initialValues?: Partial<FormData>;
  loading?: boolean;
  success?: boolean;
  error?: string;
}

interface FormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}
```

Features:
- Form validation
- Error handling
- Success feedback
- Loading state

### Newsletter Component
```typescript
interface Newsletter {
  onSubscribe: (email: string) => void;
  loading?: boolean;
  success?: boolean;
  error?: string;
}
```

States:
- Default
- Submitting
- Success
- Error

## 7. Interactive Components

### CodeSnippet Component
```typescript
interface CodeSnippet {
  code: string;
  language: string;
  showLineNumbers?: boolean;
  highlightLines?: number[];
  copyable?: boolean;
}
```

Features:
- Syntax highlighting
- Line numbers
- Copy button
- Line highlighting

### Demo Component
```typescript
interface Demo {
  title: string;
  description?: string;
  component: React.ReactNode;
  code?: string;
  controls?: DemoControl[];
}

interface DemoControl {
  label: string;
  type: 'toggle' | 'select' | 'range';
  value: any;
  onChange: (value: any) => void;
}
```

Features:
- Live preview
- Code view
- Control panel
- Reset option

## 8. Feedback Components

### Toast Component
```typescript
interface Toast {
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
  duration?: number;
  onClose?: () => void;
}
```

States:
- Show
- Hide
- Progress

### Modal Component
```typescript
interface Modal {
  open: boolean;
  onClose: () => void;
  title?: string;
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}
```

Features:
- Backdrop
- Close button
- Animation
- Keyboard support

## 9. Loading Components

### Skeleton Component
```typescript
interface Skeleton {
  variant: 'text' | 'circular' | 'rectangular';
  width?: string | number;
  height?: string | number;
  animation?: 'pulse' | 'wave' | none;
}
```

Variants:
- Text skeleton
- Card skeleton
- Image skeleton
- Custom skeleton

### Spinner Component
```typescript
interface Spinner {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  thickness?: number;
}
```

Features:
- Size variations
- Color options
- Custom duration
- Accessibility

## 10. Animation Components

### Transition Component
```typescript
interface Transition {
  show: boolean;
  type: 'fade' | 'slide' | 'scale';
  duration?: number;
  children: React.ReactNode;
}
```

Types:
- Fade transition
- Slide transition
- Scale transition
- Custom transition

## 11. Component Implementation Guidelines

### State Management
- Use React hooks for local state
- Context for global state
- Props for component configuration
- Custom hooks for shared logic

### Error Handling
- Prop validation
- Error boundaries
- Fallback UI
- Error reporting

### Accessibility
- ARIA labels
- Keyboard navigation
- Screen reader support
- Focus management

### Performance
- Lazy loading
- Code splitting
- Memoization
- Event debouncing

## 12. Testing Requirements

### Unit Tests
- Component rendering
- Props validation
- State changes
- Event handling

### Integration Tests
- Component interaction
- Form submission
- API integration
- Navigation flow

### Accessibility Tests
- ARIA compliance
- Keyboard usage
- Screen reader
- Color contrast

## 13. Documentation Requirements

### Props Documentation
- Prop types
- Default values
- Required props
- Examples

### Usage Guidelines
- Basic usage
- Advanced usage
- Best practices
- Common pitfalls

### Storybook Stories
- Component variants
- Interactive examples
- Documentation
- Testing scenarios