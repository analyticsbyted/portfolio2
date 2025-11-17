# Getting Started

This guide will help you set up and run the portfolio project locally.

## Prerequisites

### Required Software
- **Node.js 18+** (recommended): JavaScript runtime
- **npm**: Package manager (comes with Node.js)
- **Git**: Version control (optional, for cloning repository)

### Operating System
- macOS (tested on macOS 25.1.0)
- Linux (Ubuntu, Debian, etc.)
- Windows (Windows 10/11)

### Development Tools (Recommended)
- **Code Editor**: VS Code with ESLint extension
- **Browser**: Chrome, Firefox, Safari, or Edge (latest versions)
- **Git**: For version control

## Installation

### 1. Clone Repository
If you have the repository URL:
```bash
git clone <repository-url>
cd portfolio2
```

Or if you already have the project:
```bash
cd portfolio2
```

### 2. Install Dependencies
```bash
npm install
```

This installs all dependencies listed in `package.json`:
- React 19.2.0
- React Router v7.6.3
- Tailwind CSS 3.4.3
- Vite 7.2.2
- And other development dependencies

**Note:** This may take a few minutes on first install.

### 3. Create Environment File
Create a `.env` file at the project root (same level as `package.json`):

```env
VITE_AWS_HTTPAPI_URL=https://your-api.example.com/contact
```

**Important:** 
- Replace `https://your-api.example.com/contact` with your actual API endpoint
- This is required for the contact form to work
- See `docs/environment.md` for details

### 4. Start Development Server
```bash
npm run dev
```

The dev server will start on `http://localhost:5173` (or next available port).

**Features:**
- **Hot Module Replacement (HMR):** Changes update instantly
- **Fast Refresh:** React components update without full page reload
- **Error Overlay:** Errors displayed in browser overlay
- **Source Maps:** Debug with original source code

### 5. Open in Browser
The dev server should automatically open your browser. If not:
- Navigate to `http://localhost:5173`
- Or check the terminal output for the correct port

## Project Layout

### Directory Structure
```
portfolio2/
├── src/                    # Source code
│   ├── App.jsx            # Main router, navigation, theme
│   ├── main.jsx           # React entry point
│   ├── index.css          # Global CSS, Tailwind directives
│   ├── pages/             # Page components
│   ├── components/        # Reusable UI components
│   ├── hooks/             # Custom React hooks
│   └── assets/            # Images, SVGs, posters
├── public/                # Static assets (copied as-is)
├── docs/                  # Project documentation
├── scripts/               # Utility scripts
├── dist/                  # Production build output (gitignored)
├── index.html             # Root HTML shell
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── package.json           # Dependencies and scripts
```

### Key Files
- **`src/main.jsx`**: React entry point, bootstraps React application
- **`src/App.jsx`**: Main router, navigation, theme toggle, layout shell
- **`index.html`**: Root HTML shell with React mount point
- **`vite.config.js`**: Vite build tool configuration
- **`tailwind.config.js`**: Tailwind CSS configuration
- **`src/index.css`**: Global CSS, CSS variables, Tailwind directives

## Common Commands

### Development
```bash
npm run dev          # Start dev server with HMR (http://localhost:5173)
npm run build        # Build production bundle into dist/
npm run preview      # Serve production build locally (http://localhost:4173)
npm run lint         # Run ESLint to check code quality
```

### Build & Deployment
```bash
npm run build        # Create production build
npm run preview      # Preview production build locally
```

### Code Quality
```bash
npm run lint         # Run ESLint (check for errors/warnings)
```

## Verification

### Check Installation
After installation, verify everything works:

1. **Dev Server Starts:**
   ```bash
   npm run dev
   ```
   - Should start on `http://localhost:5173`
   - Browser should open automatically
   - No errors in terminal

2. **Pages Load:**
   - Home page loads correctly
   - Navigation works (click links)
   - Theme toggle works (light/dark)

3. **Build Works:**
   ```bash
   npm run build
   ```
   - Should create `dist/` directory
   - No build errors
   - Files generated in `dist/`

4. **Preview Works:**
   ```bash
   npm run preview
   ```
   - Should start preview server
   - Production build works locally

## Next Steps

### For New Developers
1. **Read Documentation:**
   - Start with `docs/context.md` ⭐ (comprehensive project context)
   - Read `docs/architecture.md` (architecture overview)
   - Check `docs/pages-and-components.md` (component documentation)

2. **Explore Codebase:**
   - Start with `src/App.jsx` (main application)
   - Check `src/pages/Home.jsx` (landing page)
   - Look at `src/components/` (reusable components)

3. **Run Project:**
   - `npm run dev` to start development server
   - Make a small change to see HMR in action
   - Test navigation and features

### For LLM Models
1. **Load Context:**
   - Read `docs/context.md` for comprehensive project context
   - Review `docs/architecture.md` for architecture decisions
   - Check `docs/pages-and-components.md` for component structure

2. **Understand Structure:**
   - Review directory structure
   - Check `package.json` for dependencies
   - Review `tailwind.config.js` for styling system

3. **Follow Conventions:**
   - Use ES Module syntax (`import`/`export`)
   - Follow component structure patterns
   - Use Tailwind utility classes

## Troubleshooting

### Port Already in Use
**Error:** `Port 5173 is already in use`

**Solutions:**
1. **Stop Other Process:**
   - Find process using port: `lsof -i :5173` (Mac/Linux)
   - Kill process: `kill -9 <PID>`

2. **Change Port:**
   - Set environment variable: `PORT=3000 npm run dev`
   - Or use `--port` flag: `npm run dev -- --port 3000`

### Dependencies Not Installing
**Error:** `npm install` fails

**Solutions:**
1. **Clear Cache:**
   ```bash
   npm cache clean --force
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Check Node Version:**
   ```bash
   node --version    # Should be 18+
   npm --version
   ```

3. **Update npm:**
   ```bash
   npm install -g npm@latest
   ```

### Blank Page on Deep Link Refresh
**Issue:** Refreshing `/work` or other routes shows 404

**Cause:** SPA routing not configured in production

**Solution:** See `docs/deployment.md` and `SPA-ROUTING-SETUP.md`

### Module Not Found
**Error:** `Error: Cannot find module '../components/Component'`

**Solutions:**
1. Check import path is correct
2. Verify file exists at path
3. Check file extension (`.jsx`, `.js`)

For more troubleshooting help, see `docs/troubleshooting.md`.

## Resources

### Documentation
- `docs/context.md`: Comprehensive project context ⭐
- `docs/architecture.md`: Architecture overview
- `docs/development-workflow.md`: Development guide
- `docs/troubleshooting.md`: Troubleshooting guide

### External Resources
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vite.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Router Documentation](https://reactrouter.com/)

---

**Last Updated:** 2025-01-11


