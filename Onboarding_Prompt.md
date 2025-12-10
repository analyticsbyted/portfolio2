# Onboarding Prompt for Portfolio Project Handover

**Project:** Portfolio Website (portfolio2)  
**Date:** December 2024  
**Context:** This project has recently undergone a significant pivot from data science consulting to product development focus.

---

## 🎯 Project Overview

This is a modern React SPA portfolio website for Ted Dickey II, showcasing professional work across mobile apps, web development, and data science projects. The site has been **recently pivoted** to emphasize product development (mobile apps and web experiences) over data science consulting.

### Key Context
- **Primary Focus:** Mobile app development (iOS/Android) and modern web experiences
- **Featured Project:** Maris - a mobile focus timer app for iOS and Android
- **Technology Stack:** React 19, Vite, React Router, Framer Motion, Tailwind CSS
- **Deployment:** Static hosting (AWS S3 + CloudFront)

---

## 📋 Essential Reading (In Order)

1. **`CONTEXT.md`** - Current project state, recent changes, and pivot details
2. **`PORTFOLIO_PIVOT_PLAN.md`** - Detailed pivot strategy and implementation plan
3. **`README.md`** - Quick start guide and project overview
4. **`docs/context.md`** - Comprehensive technical documentation

---

## 🔄 Recent Changes (December 2024)

### Portfolio Pivot Implementation Status

**Completed:**
- ✅ Hero section updated (product developer messaging)
- ✅ Tab reordering (Applications tab first)
- ✅ Maris app added to Applications tab with 3 screenshots
- ✅ Technologies section updated (React Native, Expo, etc.)
- ✅ About page services cards updated (Mobile App Dev, Web Dev, Full-Stack, Product Design)
- ✅ About page technical expertise updated (React Native, React, TypeScript, etc.)
- ✅ About page hero and journey sections updated
- ✅ Footer updated to product development focus
- ✅ "See outcomes in Portfolio" button text updated

**Pending (from PORTFOLIO_PIVOT_PLAN.md):**
- [ ] Replace Featured Project: Switch from Economic KPI Pulse to Maris mobile app
- [ ] Update 'What I Do' Section: Replace 'AI/Agents' with 'Mobile Apps', replace 'Data Platforms' with 'Full-Stack Solutions'
- [ ] Rewrite Services Section: Update all 4 service cards to focus on product development
- [ ] Update Hero Stats: Add product metrics (Apps in App Store, Websites Launched, Products Shipped)
- [ ] Review Testimonials: Remove or reframe enterprise consulting testimonials
- [ ] Update Meta Tags & SEO: Update page descriptions and keywords to focus on mobile app development
- [ ] Update Contact Page: Align messaging for product development services

---

## 🏗️ Project Structure

```
portfolio2/
├── src/
│   ├── pages/
│   │   ├── Home.jsx          # Landing page (recently updated)
│   │   ├── Work.jsx          # Portfolio page (Applications tab added, reordered)
│   │   ├── About.jsx         # About page (services & expertise updated)
│   │   └── ...
│   ├── components/           # Reusable UI components
│   ├── assets/
│   │   ├── apps/             # Mobile app screenshots (NEW: maris-home.png, maris-intent.png, maris-timer.png)
│   │   └── webapps/          # Web app screenshots
│   └── ...
├── docs/                     # Comprehensive documentation
├── PORTFOLIO_PIVOT_PLAN.md   # Pivot strategy document
├── CONTEXT.md                # Current project state
└── README.md                 # Quick start guide
```

---

## 🎨 Key Design Patterns

### Brand Colors
- `brand-primary` / `brand-secondary` - Gradient colors for CTAs and highlights
- Use semantic tokens: `bg-brand-primary`, `from-brand-primary to-brand-secondary`

### Typography
- Headlines: `font-headline` (Inter)
- Body: `font-body` (Source Serif Pro)
- Use semantic tokens: `text-headline-1`, `text-body-large`, etc.

### Components
- **Card**: Reusable card component with hover effects
- **AnimatedPage**: Framer Motion wrapper for page transitions
- **ImageWithSkeleton**: Lazy-loaded images with loading states
- **Button**: Link-styled button component

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## 📝 Important Notes

1. **Pivot in Progress:** The portfolio is transitioning from data science consulting to product development. Some sections may still reference consulting work.

2. **Maris App:** The featured mobile app (Maris) is a cognitive behavioral tool for ADHD. It's available on iOS and Android. Screenshots are in `src/assets/apps/`.

3. **Tab Order:** Applications tab is now first in the Work page, followed by Web Development. Data science tabs are still present but de-emphasized.

4. **Technology Focus:** The site now emphasizes React Native, Expo, TypeScript, and modern web development tools over data science tools (R, Tableau, etc.).

5. **Messaging:** All new content should emphasize product building, shipping to app stores, and full-stack development rather than consulting services.

---

## 🔍 Key Files to Review

### Recently Modified
- `src/pages/Home.jsx` - Hero section, technologies, button text
- `src/pages/Work.jsx` - Tab reordering, Maris app addition
- `src/pages/About.jsx` - Services cards, technical expertise, journey
- `src/components/Footer.jsx` - Product development messaging

### Configuration
- `tailwind.config.js` - Brand colors and typography tokens
- `vite.config.js` - Build configuration
- `package.json` - Dependencies

---

## 🎯 Next Steps

1. Review `CONTEXT.md` for current state
2. Review `PORTFOLIO_PIVOT_PLAN.md` for remaining tasks
3. Check `docs/context.md` for technical details
4. Continue implementing pending pivot tasks if needed
5. Test the site locally: `npm run dev`
6. Review all pages to ensure consistency with new messaging

---

## ❓ Common Questions

**Q: Should I remove all data science content?**  
A: No. Keep data science work visible but de-emphasized. It shows technical depth and versatility.

**Q: What's the priority for new features?**  
A: Complete the pivot implementation first (see PORTFOLIO_PIVOT_PLAN.md), then add new features.

**Q: Where are the Maris app screenshots?**  
A: `src/assets/apps/maris-home.png`, `maris-intent.png`, `maris-timer.png`

**Q: How do I add a new mobile app project?**  
A: Add to `mobileApps` array in `src/pages/Work.jsx`, following the Maris example.

---

## 📞 Support

- See `docs/context.md` for comprehensive technical documentation
- See `docs/troubleshooting.md` for common issues
- See `PORTFOLIO_PIVOT_PLAN.md` for pivot strategy details

---

**Last Updated:** December 2024  
**Status:** Pivot in progress - core changes implemented, some tasks pending
