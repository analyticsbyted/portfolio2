# Analytics & User Tracking

This document covers the integration and usage of Google Analytics and Microsoft Clarity for tracking user behavior, performance metrics, and user experience insights.

## Overview

**Google Analytics 4 (GA4):**
- Comprehensive web analytics platform
- Tracks page views, user interactions, conversions, and custom events
- Provides audience insights, user flow analysis, and real-time data
- Free tier available with robust features

**Microsoft Clarity:**
- Free user behavior analytics tool
- Session recordings (heatmaps, click maps, scroll maps)
- Dead clicks and rage clicks detection
- User session replay for debugging UX issues
- Complements Google Analytics with visual insights

## Prerequisites

1. **Google Analytics Account:**
   - Create account at [analytics.google.com](https://analytics.google.com)
   - Create a GA4 property for your website
   - Obtain Measurement ID (format: `G-XXXXXXXXXX`)

2. **Microsoft Clarity Account:**
   - Create account at [clarity.microsoft.com](https://clarity.microsoft.com)
   - Create a new project for your website
   - Obtain Project ID (alphanumeric string)

## Setup Instructions

### 1. Install Dependencies

```bash
npm install react-ga4
```

**Note:** `react-ga4` is the official React library for Google Analytics 4. Microsoft Clarity uses a simple script injection (no npm package needed).

### 2. Environment Variables

Add to `.env` file:

```env
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
VITE_CLARITY_PROJECT_ID=your-project-id
```

**Important:** Replace with your actual IDs from Google Analytics and Microsoft Clarity dashboards.

### 3. Create Analytics Utility

Create `src/lib/analytics.js`:

```javascript
import ReactGA from 'react-ga4';

/**
 * Initialize Google Analytics
 * Call this once in your app entry point (main.jsx)
 */
export const initGA = () => {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  
  if (!measurementId) {
    console.warn('Google Analytics Measurement ID not found. Analytics disabled.');
    return;
  }

  ReactGA.initialize(measurementId, {
    testMode: import.meta.env.DEV, // Disable in development
  });

  // Send initial pageview
  ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
};

/**
 * Track page views
 * Call this on route changes (in App.jsx or router)
 */
export const trackPageView = (path) => {
  ReactGA.send({ hitType: 'pageview', page: path });
};

/**
 * Track custom events
 * @param {string} category - Event category (e.g., 'Navigation', 'Form', 'Button')
 * @param {string} action - Event action (e.g., 'Click', 'Submit', 'Download')
 * @param {string} label - Optional label for additional context
 * @param {number} value - Optional numeric value
 */
export const trackEvent = (category, action, label = null, value = null) => {
  ReactGA.event({
    category,
    action,
    label,
    value,
  });
};

/**
 * Track form submissions
 */
export const trackFormSubmission = (formName, success = true) => {
  trackEvent('Form', success ? 'Submit Success' : 'Submit Error', formName);
};

/**
 * Track external link clicks
 */
export const trackExternalLink = (url) => {
  trackEvent('External Link', 'Click', url);
};

/**
 * Track file downloads
 */
export const trackDownload = (fileName, fileType) => {
  trackEvent('Download', 'File', `${fileName} (${fileType})`);
};

/**
 * Track button clicks (CTA tracking)
 */
export const trackButtonClick = (buttonName, location) => {
  trackEvent('Button', 'Click', buttonName, null, { location });
};

/**
 * Track project card interactions
 */
export const trackProjectView = (projectName, category) => {
  trackEvent('Project', 'View', projectName, null, { category });
};

/**
 * Track project link clicks (repo, demo, etc.)
 */
export const trackProjectLink = (projectName, linkType, url) => {
  trackEvent('Project', 'Link Click', `${projectName} - ${linkType}`, null, { url });
};
```

### 4. Initialize Microsoft Clarity

Create `src/lib/clarity.js`:

```javascript
/**
 * Initialize Microsoft Clarity
 * Call this once in your app entry point (main.jsx)
 */
export const initClarity = () => {
  const projectId = import.meta.env.VITE_CLARITY_PROJECT_ID;

  if (!projectId) {
    console.warn('Microsoft Clarity Project ID not found. Clarity disabled.');
    return;
  }

  // Only initialize in production
  if (import.meta.env.PROD) {
    (function(c, l, a, r, i, t, y) {
      c[a] = c[a] || function() { (c[a].q = c[a].q || []).push(arguments) };
      t = l.createElement(r);
      t.async = 1;
      t.src = 'https://www.clarity.ms/tag/' + i;
      y = l.getElementsByTagName(r)[0];
      y.parentNode.insertBefore(t, y);
    })(window, document, 'clarity', 'script', projectId);
  }
};
```

### 5. Integrate into App

**Update `src/main.jsx`:**

```javascript
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import ErrorBoundary from './components/ErrorBoundary';
import { initGA } from './lib/analytics';
import { initClarity } from './lib/clarity';

// Initialize analytics
initGA();
initClarity();

// Global error boundary as a last resort safety net
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary
      fallbackTitle="Application Error"
      fallbackMessage="We encountered a critical error. Please refresh the page or contact support if the problem persists."
    >
      <App />
    </ErrorBoundary>
  </StrictMode>,
);
```

**Update `src/App.jsx` to track route changes:**

```javascript
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from './lib/analytics';

function AppContent() {
  const location = useLocation();

  // Track page views on route changes
  useEffect(() => {
    trackPageView(location.pathname);
  }, [location.pathname]);

  // ... rest of component
}
```

### 6. Track Key Interactions

**Example: Track Contact Form Submission**

In `src/pages/Contact.jsx`:

```javascript
import { trackFormSubmission } from '../lib/analytics';

// In form submission handler:
const onSubmit = async (data) => {
  try {
    const response = await fetch(import.meta.env.VITE_AWS_HTTPAPI_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...data,
        timestamp: new Date().toISOString(),
        source: 'portfolio-contact-form-rhf',
      }),
    });

    if (response.ok) {
      trackFormSubmission('Contact Form', true);
      reset();
      // Show success message
    } else {
      trackFormSubmission('Contact Form', false);
      setError('root', { message: 'Failed to send message. Please try again.' });
    }
  } catch (error) {
    trackFormSubmission('Contact Form', false);
    setError('root', { message: 'Network error. Please check your connection.' });
  }
};
```

**Example: Track Button Clicks**

In `src/components/Button.jsx`:

```javascript
import { trackButtonClick } from '../lib/analytics';

const Button = ({ children, onClick, href, ariaLabel, ...props }) => {
  const handleClick = (e) => {
    // Track button click
    const buttonName = ariaLabel || children || 'Unknown Button';
    const location = window.location.pathname;
    trackButtonClick(buttonName, location);

    // Call original onClick if provided
    if (onClick) {
      onClick(e);
    }
  };

  // ... rest of component
};
```

**Example: Track Project Card Interactions**

In `src/pages/Work.jsx`:

```javascript
import { trackProjectView, trackProjectLink } from '../lib/analytics';

// When rendering project cards:
const handleProjectClick = (project) => {
  trackProjectView(project.title, activeTab);
};

const handleLinkClick = (project, linkType, url) => {
  trackProjectLink(project.title, linkType, url);
};
```

## Usage Instructions

### Google Analytics Dashboard

**Access:** [analytics.google.com](https://analytics.google.com)

**Key Reports:**

1. **Realtime:**
   - See active users right now
   - Current page views
   - Top pages and traffic sources

2. **Engagement:**
   - Pages and screens: Most viewed pages
   - Events: Custom events tracked
   - Conversions: Goal completions

3. **Acquisition:**
   - Traffic sources (direct, search, social, referral)
   - User acquisition channels
   - Campaign performance

4. **Audience:**
   - Demographics (age, gender, location)
   - Technology (browser, device, OS)
   - User behavior (new vs. returning, engagement)

**Custom Events to Monitor:**

- `Form > Submit Success` - Contact form submissions
- `Button > Click` - CTA button interactions
- `Project > View` - Project card views
- `Project > Link Click` - Project link clicks (repo, demo)
- `External Link > Click` - External link clicks

**Setting Up Goals:**

1. Go to Admin > Events
2. Mark important events as conversions:
   - Contact form submissions
   - Newsletter signups
   - Project link clicks

### Microsoft Clarity Dashboard

**Access:** [clarity.microsoft.com](https://clarity.microsoft.com)

**Key Features:**

1. **Dashboard:**
   - Overview of sessions, users, bounce rate
   - Top pages and user flows
   - Dead clicks and rage clicks summary

2. **Recordings:**
   - Watch individual user sessions
   - See exactly how users interact with your site
   - Filter by page, device, country, etc.

3. **Heatmaps:**
   - **Click Heatmap:** Where users click most
   - **Scroll Heatmap:** How far users scroll
   - **Move Heatmap:** Mouse movement patterns

4. **Insights:**
   - Dead clicks (clicks that don't do anything)
   - Rage clicks (rapid repeated clicks)
   - JavaScript errors
   - Slow pages

**Using Recordings:**

1. Go to Recordings tab
2. Filter by:
   - Page URL
   - Device type
   - Country
   - Date range
3. Click on a session to watch replay
4. Use insights to identify UX issues

**Using Heatmaps:**

1. Go to Heatmaps tab
2. Select a page
3. View click, scroll, and move heatmaps
4. Identify:
   - Unclickable elements users try to click
   - Content that's below the fold
   - Optimal placement for CTAs

## Best Practices

### Privacy & Compliance

1. **GDPR Compliance:**
   - Add cookie consent banner
   - Only initialize analytics after user consent
   - Provide opt-out mechanism
   - Update privacy policy with analytics usage

2. **Cookie Consent Implementation:**

```javascript
// Example: Only initialize after consent
const hasConsent = localStorage.getItem('analytics-consent') === 'true';

if (hasConsent) {
  initGA();
  initClarity();
}
```

3. **IP Anonymization:**
   - Google Analytics anonymizes IPs by default in GA4
   - Microsoft Clarity doesn't collect IP addresses

### Performance

1. **Lazy Load Analytics:**
   - Initialize after page load
   - Use `requestIdleCallback` if available

2. **Development Mode:**
   - Disable analytics in development
   - Use `testMode` flag in react-ga4

3. **Error Handling:**
   - Wrap analytics calls in try-catch
   - Don't let analytics errors break your app

### Event Tracking

1. **Naming Conventions:**
   - Use consistent category/action/label structure
   - Document all custom events
   - Use descriptive labels

2. **Track Meaningful Events:**
   - User actions (clicks, form submissions)
   - Business goals (conversions, signups)
   - UX issues (errors, dead clicks)

3. **Avoid Over-Tracking:**
   - Don't track every single interaction
   - Focus on actionable insights
   - Balance detail with performance

## Troubleshooting

### Analytics Not Working

**Check:**
1. Environment variables set correctly
2. Measurement ID/Project ID correct
3. Analytics initialized in `main.jsx`
4. Browser console for errors
5. Ad blockers (may block analytics)

**Debug Mode:**

```javascript
// Enable debug mode in development
if (import.meta.env.DEV) {
  ReactGA.set({ debug: true });
}
```

### Events Not Showing

**Check:**
1. Events sent correctly (use browser console)
2. Real-time report (events appear immediately)
3. Event names match exactly (case-sensitive)
4. Wait 24-48 hours for full data processing

### Clarity Recordings Not Appearing

**Check:**
1. Project ID correct
2. Script loaded (check Network tab)
3. Wait 1-2 hours for recordings to appear
4. Minimum traffic required (may need more users)

## Privacy Policy Updates

Add to your privacy policy:

```markdown
## Analytics

We use Google Analytics 4 and Microsoft Clarity to understand how visitors interact with our website. These services collect information such as:

- Pages visited
- Time spent on pages
- Click patterns
- Device and browser information
- Geographic location (country-level)

Google Analytics uses cookies. You can opt out by installing the [Google Analytics Opt-out Browser Add-on](https://tools.google.com/dlpage/gaoptout).

Microsoft Clarity does not collect personally identifiable information. You can learn more about Clarity's privacy practices [here](https://clarity.microsoft.com/terms).

All data is used solely for improving website functionality and user experience.
```

## Additional Resources

- [Google Analytics 4 Documentation](https://developers.google.com/analytics/devguides/collection/ga4)
- [react-ga4 Documentation](https://github.com/codler/react-ga4)
- [Microsoft Clarity Documentation](https://docs.clarity.microsoft.com/)
- [GDPR Compliance Guide](https://gdpr.eu/)

---

**Last Updated:** 2025-01-11  
**Status:** Ready for Implementation
