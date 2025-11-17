# Development Workflow

This document describes the development workflow, best practices, and common tasks for working on the portfolio project.

## Prerequisites

- **Node.js 18+**: Required for running npm scripts
- **npm**: Package manager (comes with Node.js)
- **Git**: Version control
- **Code Editor**: VS Code recommended (with ESLint extension)

## Initial Setup

### 1. Clone Repository
```bash
git clone <repository-url>
cd portfolio2
```

### 2. Install Dependencies
```bash
npm install
```

This installs all dependencies listed in `package.json`.

### 3. Create Environment File
Create a `.env` file at the project root:

```env
VITE_AWS_HTTPAPI_URL=https://your-api.example.com/contact
```

See `docs/environment.md` for details.

### 4. Start Development Server
```bash
npm run dev
```

The dev server starts on `http://localhost:5173` (or next available port).

**Features:**
- Hot Module Replacement (HMR): Changes update instantly
- Fast Refresh: React components update without full page reload
- Error Overlay: Errors displayed in browser overlay
- Source Maps: Debug with original source code
- Page Transitions: Framer Motion provides smooth transitions between routes
- Mobile Navigation: Animated slide-in menu with backdrop overlay

## Development Commands

### Development Server
```bash
npm run dev
```
- Starts Vite dev server
- Opens browser automatically (if configured)
- HMR enabled for instant updates
- Runs on `http://localhost:5173` by default

### Build for Production
```bash
npm run build
```
- Builds production bundle in `dist/` directory
- Optimizes and minifies code
- Hashes assets for cache-busting
- Generates source maps (for debugging)

### Preview Production Build
```bash
npm run preview
```
- Serves production build locally
- Useful for testing production build before deployment
- Runs on `http://localhost:4173` by default

### Lint Code
```bash
npm run lint
```
- Runs ESLint on all source files
- Checks for code quality issues
- Reports errors and warnings

## File Structure & Organization

### Adding a New Page
1. Create component in `src/pages/[PageName].jsx`
2. Add route in `src/App.jsx` routes array:
```javascript
import NewPage from './pages/NewPage';
import AnimatedPage from './components/AnimatedPage';

// In routes array:
const routes = [
  // ... existing routes
  {
    path: '/new-page',
    element: (
      <AnimatedPage>
        <NewPage />
      </AnimatedPage>
    ),
  },
];
```
3. Add navigation link in `App.jsx` navbar

**Note:** All routes must be wrapped in `<AnimatedPage>` for page transitions to work.

### Adding a New Component
1. Create component in `src/components/[ComponentName].jsx`
2. Export component:
```javascript
export default function ComponentName() {
  return <div>...</div>;
}
```
3. Import where needed:
```javascript
import ComponentName from '../components/ComponentName';
```

### Adding Assets
1. **Images/Posters:** Save to `src/assets/[category]/[name]-poster.png`
2. **Icons:** Use Heroicons React (`@heroicons/react`) or inline SVG
3. **Fonts:** Load via Google Fonts in `index.html` or import in CSS

**Import Assets:**
```javascript
import posterImage from '../assets/webapps/project-poster.png';

<img src={posterImage} alt="Project poster" />
```

## Code Style & Conventions

### Naming Conventions
- **Components:** PascalCase (`Card.jsx`, `PageSubtitle.jsx`)
- **Hooks:** camelCase with `use` prefix (`useContactForm.js`)
- **Assets:** kebab-case (`movie-explorer-poster.png`)
- **CSS Classes:** Tailwind utility classes

### Import Order
1. External libraries (React, React Router, etc.)
2. Internal components
3. Hooks
4. Assets (images, SVGs)
5. Utilities/helpers
6. Types (if TypeScript)

**Example:**
```javascript
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';
import { useContactForm } from '../hooks/useContactForm';
import posterImage from '../assets/webapps/poster.png';
```

### Component Structure
```javascript
import { useState } from 'react';
import Component from '../components/Component';

function MyComponent() {
  // 1. Hooks
  const [state, setState] = useState();
  
  // 2. Handlers
  const handleClick = () => {
    // Handler logic
  };
  
  // 3. Effects
  useEffect(() => {
    // Effect logic
  }, []);
  
  // 4. Render
  return (
    <div>
      {/* Component JSX */}
    </div>
  );
}

export default MyComponent;
```

### TypeScript Considerations
**Current Status:** JavaScript only  
**Future:** Consider migrating to TypeScript for type safety

If using TypeScript:
- File extension: `.tsx` for React components
- Type definitions: Define props interfaces
- Strict mode: Enable strict type checking

## Git Workflow

### Branch Naming
- `main`: Production-ready code
- `develop`: Development branch (if using Git Flow)
- `feature/[feature-name]`: New features
- `fix/[bug-name]`: Bug fixes
- `docs/[doc-name]`: Documentation updates

### Commit Messages
Use conventional commit format:

```
feat: add new project card to portfolio
fix: correct image display issue
docs: update deployment documentation
style: adjust card spacing
refactor: extract common component
test: add unit tests for hook
chore: update dependencies
```

### Before Committing
1. **Run Linter:** `npm run lint`
2. **Build Successfully:** `npm run build`
3. **Test Locally:** `npm run preview`
4. **Check Changes:** `git diff`
5. **Review Staged Files:** `git status`

### Common Git Commands
```bash
# Check status
git status

# Add files
git add .

# Commit
git commit -m "feat: add new feature"

# Push
git push origin main

# Pull latest
git pull origin main

# Create branch
git checkout -b feature/new-feature

# Switch branch
git checkout main
```

## Debugging

### Browser DevTools
- **React DevTools:** Install React DevTools browser extension
- **Console:** Check for JavaScript errors
- **Network:** Monitor API requests (contact form)
- **Elements:** Inspect DOM and CSS

### Vite DevTools
- **Error Overlay:** Errors shown in browser overlay
- **HMR Logs:** Check browser console for HMR updates
- **Source Maps:** Debug with original source code

### Common Issues

#### Blank White Screen
**Symptoms:** Page loads but shows blank screen

**Causes:**
- JavaScript error in console
- React version mismatch
- Missing import or asset

**Solutions:**
1. Check browser console for errors
2. Verify `react` and `react-dom` versions match in `package.json`
3. Check import paths are correct
4. Verify all assets exist

#### Images Not Loading
**Symptoms:** Images don't appear or show broken icon

**Causes:**
- Incorrect import path
- Asset not in correct directory
- Browser cache

**Solutions:**
1. Verify import path matches file location
2. Check file exists in `src/assets/`
3. Hard refresh browser (`Cmd + Shift + R` on Mac)
4. Clear Vite cache: `rm -rf node_modules/.vite`

#### Styling Not Applying
**Symptoms:** Tailwind classes not working

**Causes:**
- Class not in Tailwind config `content` globs
- Purging in production build
- Syntax error

**Solutions:**
1. Check `tailwind.config.js` `content` array includes your file
2. Restart dev server
3. Verify class syntax (no typos)
4. Check browser DevTools for applied styles

#### Hot Module Replacement Not Working
**Symptoms:** Changes don't update automatically

**Causes:**
- File not watched by Vite
- Browser cache
- Syntax error preventing HMR

**Solutions:**
1. Check file is in `src/` directory
2. Check browser console for HMR errors
3. Save file again (triggers HMR)
4. Restart dev server if needed

## Testing

### Manual Testing Checklist
Before committing, test:
- [ ] All pages load without errors
- [ ] Navigation works (desktop + mobile)
- [ ] Theme toggle works (light/dark)
- [ ] Theme persists after page refresh
- [ ] All images load correctly
- [ ] Contact form submits successfully
- [ ] Responsive design works on mobile/tablet/desktop
- [ ] SPA routing works (no 404s on refresh)
- [ ] External links open in new tabs
- [ ] Accessibility: Keyboard navigation, focus indicators

### Browser Testing
Test in:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

### Performance Testing
- **Lighthouse:** Run Lighthouse audit in Chrome DevTools
- **Network Tab:** Monitor load times and bundle sizes
- **Production Build:** Test production build locally (`npm run preview`)

## Deployment Checklist

Before deploying:
- [ ] Run `npm run lint` (no errors)
- [ ] Run `npm run build` (successful)
- [ ] Test production build locally (`npm run preview`)
- [ ] Verify all images load correctly
- [ ] Test contact form submission
- [ ] Check responsive design on mobile
- [ ] Verify SPA routing works (refresh on `/work`)
- [ ] Update environment variables in deployment environment
- [ ] Invalidate CloudFront cache (`index.html`)

## Best Practices

### Component Design
- **Single Responsibility:** Each component should do one thing
- **Reusability:** Extract common patterns into reusable components
- **Composition:** Compose complex components from simple ones
- **Props:** Use props for configuration, not imperative calls

### Performance
- **Lazy Loading:** Use `React.lazy()` for large components
- **Image Optimization:** Use WebP where possible, appropriate sizes
- **Code Splitting:** Split code at route level
- **Memoization:** Use `useMemo`/`useCallback` for expensive computations

### Accessibility
- **Semantic HTML:** Use semantic elements (`<nav>`, `<main>`, etc.)
- **ARIA Labels:** Provide labels for interactive elements
- **Keyboard Navigation:** Ensure all interactive elements are keyboard accessible
- **Focus Indicators:** Visible focus rings for keyboard navigation
- **Alt Text:** Provide alt text for all images

### Code Quality
- **DRY:** Don't Repeat Yourself - extract common logic
- **Consistent:** Follow project conventions
- **Documented:** Add comments for complex logic
- **Tested:** Test manually before committing

## Resources

### Documentation
- `docs/context.md`: Comprehensive project context
- `docs/architecture.md`: Architecture overview
- `docs/pages-and-components.md`: Component documentation
- `docs/styling-and-theming.md`: Styling guidelines

### External Resources
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vite.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Router Documentation](https://reactrouter.com/)

### Tools
- **React DevTools:** Browser extension for debugging React
- **Tailwind CSS IntelliSense:** VS Code extension for Tailwind autocomplete
- **ESLint:** Code linting
- **Prettier:** Code formatting (optional)

## Troubleshooting

See `docs/troubleshooting.md` for detailed troubleshooting guide.

---

**Last Updated:** 2025-01-11

