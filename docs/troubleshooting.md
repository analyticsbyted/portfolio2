# Troubleshooting Guide

This document provides solutions to common issues encountered during development and deployment.

## Development Issues

### Blank White Screen

**Symptoms:** Page loads but shows blank white screen with no content.

**Possible Causes:**
1. JavaScript error in console
2. React version mismatch between `react` and `react-dom`
3. Missing import or asset
4. Syntax error in component
5. Incorrect route configuration

**Solutions:**
1. **Check Browser Console:**
   - Open DevTools (F12 or Cmd+Option+I)
   - Check Console tab for JavaScript errors
   - Fix any errors shown

2. **Verify React Versions:**
   ```bash
   # Check package.json
   cat package.json | grep -A 2 '"react"'
   
   # Versions should match exactly
   # Example:
   # "react": "^19.2.0"
   # "react-dom": "^19.2.0"
   
   # If mismatch, update:
   npm install react@^19.2.0 react-dom@^19.2.0
   ```

3. **Check Import Paths:**
   - Verify all imports use correct paths
   - Use relative paths: `'../components/Component'`
   - Check file extensions (`.jsx`, `.js`)

4. **Verify Asset Imports:**
   - Check image/assets exist in correct directory
   - Verify import syntax: `import image from '../assets/image.png'`

5. **Check Route Configuration:**
   - Verify route paths in `App.jsx`
   - Ensure all page components are imported
   - Check for typos in route paths

**Example Error:**
```
Error: Incompatible React versions: The "react" and "react-dom" packages must have the exact same version.
```
**Solution:** Update `react-dom` to match `react` version in `package.json`.

---

### Images Not Loading

**Symptoms:** Images don't appear, show broken icon, or appear as empty space.

**Possible Causes:**
1. Incorrect import path
2. Asset not in correct directory
3. Browser cache
4. Vite cache
5. File doesn't exist

**Solutions:**
1. **Verify Import Path:**
   ```javascript
   // Correct:
   import poster from '../assets/webapps/movie-poster.png';
   
   // Incorrect:
   import poster from '../assets/movie-poster.png'; // Wrong path
   ```

2. **Check File Exists:**
   ```bash
   # Verify file exists
   ls -la src/assets/webapps/movie-poster.png
   ```

3. **Clear Browser Cache:**
   - Hard refresh: `Cmd + Shift + R` (Mac) or `Ctrl + Shift + R` (Windows)
   - Or: DevTools → Network tab → Disable cache checkbox

4. **Clear Vite Cache:**
   ```bash
   rm -rf node_modules/.vite
   npm run dev
   ```

5. **Verify Asset Import:**
   - Ensure using ES Module import (not `require()`)
   - Check file extension matches actual file
   - Verify case-sensitive file names

---

### Styling Not Applying

**Symptoms:** Tailwind CSS classes not working or styles not appearing.

**Possible Causes:**
1. Class not in Tailwind config `content` globs
2. Class name typo
3. Purging in production build
4. CSS not loaded
5. Dark mode class not applied

**Solutions:**
1. **Check Tailwind Config:**
   ```javascript
   // tailwind.config.js
   content: [
     "./index.html",
     "./src/**/*.{js,ts,jsx,tsx}",
   ],
   ```
   - Verify your file matches these globs
   - Add file path if needed

2. **Restart Dev Server:**
   ```bash
   # Stop dev server (Ctrl+C)
   npm run dev
   ```

3. **Check Class Syntax:**
   ```jsx
   // Correct:
   <div className="bg-card text-gray-900">
   
   // Incorrect:
   <div className="bg card"> // Space instead of hyphen
   ```

4. **Verify CSS Import:**
   - Check `src/index.css` has `@tailwind` directives
   - Verify `src/main.jsx` imports `'./index.css'`

5. **Dark Mode:**
   - Check `<html>` has `dark` class for dark mode
   - Verify `dark:` prefix classes for dark mode styles

---

### Hot Module Replacement Not Working

**Symptoms:** Changes don't update automatically in browser.

**Possible Causes:**
1. File not watched by Vite
2. Browser cache
3. Syntax error preventing HMR
4. Dev server not running

**Solutions:**
1. **Check File Location:**
   - File must be in `src/` directory
   - Or included in Vite config

2. **Check Browser Console:**
   - Look for HMR errors
   - Fix any syntax errors

3. **Save File Again:**
   - Make small change and save
   - Should trigger HMR update

4. **Restart Dev Server:**
   ```bash
   # Stop (Ctrl+C)
   npm run dev
   ```

5. **Clear Browser Cache:**
   - Hard refresh: `Cmd + Shift + R`

---

### Theme Not Persisting

**Symptoms:** Theme resets to light mode after page refresh.

**Possible Causes:**
1. localStorage cleared
2. Theme state not initialized correctly
3. `setHtmlTheme` not called on mount

**Solutions:**
1. **Check Theme Initialization:**
   ```javascript
   // App.jsx
   const [theme, setTheme] = useState(() => {
     return localStorage.getItem(THEME_KEY) || 'light';
   });
   ```

2. **Verify Theme Application:**
   ```javascript
   useEffect(() => {
     setHtmlTheme(theme);
   }, [theme]);
   ```

3. **Check localStorage:**
   - DevTools → Application → Local Storage
   - Verify `theme-preference` key exists
   - Check value is `'light'` or `'dark'`

4. **Clear localStorage:**
   - DevTools → Application → Local Storage → Clear

---

### Page Transitions Not Working

**Symptoms:** Pages change instantly without animation, or animations are missing.

**Possible Causes:**
1. `AnimatePresence` not wrapping `useRoutes` result
2. Missing `key` prop on element
3. Routes not wrapped in `<AnimatedPage>`
4. Framer Motion not installed
5. Incorrect `cloneElement` pattern

**Solutions:**
1. **Check AnimatePresence:**
   ```javascript
   // App.jsx - must wrap useRoutes result
   <AnimatePresence mode="wait" initial={false}>
     {element && cloneElement(element, { key: location.pathname })}
   </AnimatePresence>
   ```

2. **Verify cloneElement:**
   - Must use `cloneElement` to add `key` prop
   - Key should be `location.pathname`
   - Element must exist before cloning

3. **Check Routes:**
   - All routes must be wrapped in `<AnimatedPage>`
   - Verify routes array structure
   - Check imports (`AnimatedPage` must be imported)

4. **Check Framer Motion:**
   ```bash
   npm list framer-motion
   # Should show framer-motion@12.23.24
   ```

5. **Check Browser Console:**
   - Look for Framer Motion errors
   - Verify `motion` and `AnimatePresence` are imported correctly

**See Also:** `docs/page-transitions.md` for detailed implementation guide

---

### Contact Form Not Submitting

**Symptoms:** Form doesn't submit or shows error.

**Possible Causes:**
1. Missing `VITE_AWS_HTTPAPI_URL` environment variable
2. API endpoint CORS not configured
3. Network error
4. Validation error

**Solutions:**
1. **Check Environment Variable:**
   ```bash
   # Verify .env file exists
   cat .env
   
   # Should contain:
   # VITE_AWS_HTTPAPI_URL=https://your-api.example.com/contact
   ```

2. **Restart Dev Server:**
   - Environment variables loaded at build time
   - Restart after changing `.env`

3. **Check API Endpoint:**
   - Verify URL is correct
   - Test with curl or Postman
   - Check CORS headers allow your origin

4. **Check Network Tab:**
   - DevTools → Network tab
   - Submit form and check request
   - Look for CORS errors or 404s

5. **Check Form Validation:**
   - Verify all required fields filled
   - Check email format
   - Honeypot field should be empty

---

## Build Issues

### Build Fails

**Symptoms:** `npm run build` fails with error.

**Possible Causes:**
1. Syntax error in code
2. Missing dependency
3. Import error
4. Type error (if TypeScript)

**Solutions:**
1. **Check Error Message:**
   ```bash
   npm run build
   # Read error message carefully
   ```

2. **Fix Syntax Errors:**
   - Check all imports
   - Verify all components exported
   - Check for missing closing tags

3. **Reinstall Dependencies:**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

4. **Check Import Paths:**
   - Verify all imports use correct paths
   - Check file extensions

---

### Production Build Shows Blank Screen

**Symptoms:** Production build works locally but shows blank screen on server.

**Possible Causes:**
1. SPA routing not configured
2. Base path incorrect
3. Asset paths incorrect
4. CORS issue

**Solutions:**
1. **Check SPA Routing:**
   - Verify CloudFront Function configured
   - Or custom error pages set up
   - See `SPA-ROUTING-SETUP.md`

2. **Check Base Path:**
   - Verify `vite.config.js` base path
   - Should be `'/'` for root deployment

3. **Check Asset Paths:**
   - Verify assets load correctly
   - Check Network tab for 404s

4. **Check Console:**
   - Look for JavaScript errors
   - Check for CORS errors

---

## Deployment Issues

### SPA Routing 404s

**Symptoms:** Refreshing `/work` or other routes shows 404 error.

**Possible Causes:**
1. CloudFront Function not configured
2. Custom error pages not set up
3. S3 error document not configured

**Solutions:**
1. **Configure CloudFront Function:**
   - See `SPA-ROUTING-SETUP.md`
   - Associate function with viewer-request event

2. **Configure Custom Error Pages:**
   - CloudFront → Error Pages
   - Add 403 → `/index.html` (200 status)
   - Add 404 → `/index.html` (200 status)

3. **Verify S3 Configuration:**
   - S3 → Static website hosting
   - Error document: `index.html`

---

### Images Not Loading in Production

**Symptoms:** Images work locally but not in production.

**Possible Causes:**
1. Asset paths incorrect
2. Assets not uploaded
3. CORS issue
4. Cache issue

**Solutions:**
1. **Check Build Output:**
   ```bash
   # Build locally
   npm run build
   
   # Check dist/assets/ has images
   ls -la dist/assets/
   ```

2. **Verify Upload:**
   - Check all files in `dist/` uploaded to S3
   - Verify asset paths match

3. **Check Cache:**
   - Invalidate CloudFront cache
   - Or wait for cache to expire

4. **Check Paths:**
   - Verify asset paths in production
   - Check Network tab for 404s

---

## Performance Issues

### Slow Page Load

**Symptoms:** Page takes long time to load.

**Possible Causes:**
1. Large bundle size
2. Unoptimized images
3. Too many requests
4. No code splitting

**Solutions:**
1. **Check Bundle Size:**
   ```bash
   npm run build
   # Check dist/assets/ file sizes
   ```

2. **Optimize Images:**
   - Use WebP format
   - Resize to appropriate dimensions
   - Compress images

3. **Code Splitting:**
   - Use `React.lazy()` for large components
   - Already implemented for `Work.jsx`

4. **Check Network Tab:**
   - Identify slow requests
   - Check for unnecessary requests

---

## Common Error Messages

### "Cannot find module"
**Error:** `Error: Cannot find module '../components/Component'`

**Solution:**
- Check import path is correct
- Verify file exists
- Check file extension

### "Incompatible React versions"
**Error:** `Incompatible React versions: The "react" and "react-dom" packages must have the exact same version.`

**Solution:**
```bash
npm install react@^19.2.0 react-dom@^19.2.0
```

### "Module not found"
**Error:** `Module not found: Error: Can't resolve './assets/image.png'`

**Solution:**
- Verify file exists at path
- Check import path is correct
- Use relative path from file location

### "Unexpected token"
**Error:** `SyntaxError: Unexpected token`

**Solution:**
- Check for syntax errors
- Verify JSX syntax
- Check for missing closing tags

---

## Getting Help

If you encounter an issue not covered here:

1. **Check Documentation:**
   - `docs/context.md`: Project context
   - `docs/architecture.md`: Architecture details
   - `docs/development-workflow.md`: Development guide

2. **Search Issues:**
   - Check for similar issues in project
   - Search error message online

3. **Debug:**
   - Check browser console
   - Check terminal output
   - Enable verbose logging

4. **Ask for Help:**
   - Provide error message
   - Include steps to reproduce
   - Share relevant code

---

**Last Updated:** 2025-01-11

