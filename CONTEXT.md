# Portfolio Project Context

**Project:** Portfolio Website (portfolio2)  
**Last Updated:** December 2024  
**Status:** Pivot in progress - transitioning from data science consulting to product development

---

## 🎯 Current Project State

### Primary Focus
The portfolio has been **pivoted** to emphasize:
- **Mobile App Development** (iOS & Android with React Native/Expo)
- **Modern Web Experiences** (React, TypeScript, Next.js)
- **Product Development** (end-to-end from concept to App Store)

### Previous Focus
- Data Science & AI Consulting
- Business Intelligence Dashboards
- Predictive Modeling & Analytics

---

## 📊 Pivot Status

### ✅ Completed Changes

1. **Hero Section (Home.jsx)**
   - Badge: "Product Developer & Full-Stack Engineer"
   - Headline: "Building Mobile Apps & Modern Web Experiences"
   - Subheadline: Product-focused messaging
   - Button text: "Start Your Project"

2. **Portfolio Page (Work.jsx)**
   - New "Applications" tab added (first position)
   - Maris mobile app added with 3 screenshots
   - Tab order: Applications → Web Development → Data Science → Research
   - Applications tab subtitle: "Native mobile applications for iOS and Android"

3. **About Page (About.jsx)**
   - Services cards updated:
     - Mobile App Development
     - Web Development
     - Full-Stack Solutions
     - Product Design & UX
   - Technical expertise updated:
     - React Native (90%)
     - React (95%)
     - TypeScript (92%)
     - JavaScript (93%)
     - Node.js (85%)
     - Supabase/PostgreSQL (88%)
   - Hero section: "Building Mobile Apps & Modern Web Experiences"
   - Journey section mentions Maris launch

4. **Technologies Section (Home.jsx)**
   - Updated to: React, React Native, TypeScript, JavaScript, Expo, Next.js, Node.js, Supabase, PostgreSQL, Tailwind CSS, Python, AWS, Docker, Git
   - Removed: R, Tableau, Power BI, Azure, Snowflake, Alteryx, TensorFlow, scikit-learn

5. **Footer (Footer.jsx)**
   - Updated to: "Full-stack product developer building mobile apps and modern web experiences"

6. **Button Text**
   - "See outcomes in Portfolio" (updated from "See outcomes in Work")

### ⏳ Pending Changes (from PORTFOLIO_PIVOT_PLAN.md)

1. **Featured Project Section**
   - Replace Economic KPI Pulse with Maris mobile app
   - Update description and links

2. **"What I Do" Section (Home.jsx)**
   - Replace "AI / Agents" with "Mobile Apps"
   - Replace "Data Platforms" with "Full-Stack Solutions"
   - Update links and descriptions

3. **Services Section (Home.jsx)**
   - Rewrite all 4 service cards:
     - End-to-End Product Development
     - Mobile-First Design & Development
     - Modern Web Experiences
     - From Concept to Launch

4. **Hero Stats**
   - Add product metrics:
     - Apps in App Store (1+)
     - Websites Launched
     - Products Shipped

5. **Testimonials**
   - Review and reframe enterprise consulting testimonials
   - Replace with product-focused feedback if available

6. **Meta Tags & SEO**
   - Update page descriptions
   - Update keywords (mobile app development focus)
   - Reduce data science emphasis

7. **Contact Page**
   - Align messaging for product development services
   - Remove heavy consulting language

---

## 🏗️ Technical Architecture

### Technology Stack
- **Frontend:** React 19.2.0 with Vite 7.2.2
- **Routing:** React Router v7.6.3
- **Animations:** Framer Motion 12.23.24
- **Styling:** Tailwind CSS 3.4.3
- **Build:** Vite (HMR, code splitting)
- **Deployment:** AWS S3 + CloudFront (static hosting)

### Key Components
- `AnimatedPage` - Page transition wrapper (Framer Motion)
- `Card` - Reusable card component
- `ImageWithSkeleton` - Lazy-loaded images
- `Button` - Link-styled button
- `HeadMetadata` - Dynamic meta tags and SEO

### Project Structure
```
portfolio2/
├── src/
│   ├── pages/
│   │   ├── Home.jsx          # Landing (updated)
│   │   ├── Work.jsx          # Portfolio (Applications tab added)
│   │   ├── About.jsx         # About (services updated)
│   │   └── ...
│   ├── components/           # Reusable UI components
│   ├── assets/
│   │   ├── apps/             # Mobile app screenshots (NEW)
│   │   │   ├── maris-home.png
│   │   │   ├── maris-intent.png
│   │   │   └── maris-timer.png
│   │   └── webapps/          # Web app screenshots
│   └── ...
├── docs/                     # Comprehensive documentation
├── PORTFOLIO_PIVOT_PLAN.md   # Pivot strategy
└── README.md                 # Quick start
```

---

## 📱 Featured Project: Maris

**Maris** is a mobile focus timer app for iOS and Android, designed as a cognitive behavioral tool for ADHD.

### Key Features
- Intent-based friction (10-second pause before unlocking)
- Strict Mode (5-second delay before quitting)
- "Liquid Glass" UI (visually quiet design)
- CBT-based intervention
- Available on iOS and Android

### Technology Stack
- React Native, Expo, TypeScript
- Supabase (backend)
- RevenueCat (subscriptions)
- Skia, Reanimated (animations)
- Screen Time API (iOS), Android Accessibility Service

### Location in Portfolio
- **Tab:** Applications (first tab)
- **Screenshots:** `src/assets/apps/maris-*.png`
- **Link:** https://trymaris.com

---

## 🎨 Design System

### Brand Colors
- `brand-primary` / `brand-secondary` - Gradient colors
- Use semantic tokens: `bg-brand-primary`, `from-brand-primary to-brand-secondary`

### Typography
- Headlines: `font-headline` (Inter)
- Body: `font-body` (Source Serif Pro)
- Semantic tokens: `text-headline-1`, `text-body-large`, etc.

### Component Patterns
- Cards use `Card` component with hover effects
- Pages wrapped in `AnimatedPage` for transitions
- Images use `ImageWithSkeleton` for lazy loading

---

## 🔄 Development Workflow

### Commands
```bash
npm install          # Install dependencies
npm run dev          # Start dev server (localhost:5173)
npm run build        # Build for production
npm run preview      # Preview production build
npm test             # Run tests
npm run lint         # Lint code
```

### Adding a New Mobile App Project
1. Add screenshots to `src/assets/apps/`
2. Add project object to `mobileApps` array in `src/pages/Work.jsx`
3. Follow Maris example structure:
   ```javascript
   {
     title: 'App Name',
     tagline: 'Description',
     features: ['Feature 1', 'Feature 2'],
     stack: ['React Native', 'Expo', ...],
     images: [
       { src: image1, alt: 'Alt text' },
       { src: image2, alt: 'Alt text' }
     ],
     link: 'https://website.com',
     linkLabel: 'Visit Website'
   }
   ```

---

## 📝 Key Decisions

1. **Keep Data Science Work Visible**
   - Shows technical depth and versatility
   - De-emphasized but not removed
   - Still valuable for certain opportunities

2. **Applications Tab First**
   - Prioritizes product work
   - Shows mobile app capability immediately
   - Aligns with new positioning

3. **Maris as Featured Project**
   - Demonstrates product ownership
   - Shows App Store deployment capability
   - More relevant to new direction

4. **Technology Stack Update**
   - Emphasizes modern web/mobile tools
   - Removes heavy data science tools
   - Keeps Python/AWS for versatility

---

## 🎯 Target Audience

### Primary
- Startups building mobile/web products
- Agencies needing full-stack capabilities
- Product-focused companies
- Indie developer communities

### Secondary
- Companies needing data science + product development
- Organizations wanting full-stack solutions

---

## 📚 Documentation

- **`README.md`** - Quick start guide
- **`PORTFOLIO_PIVOT_PLAN.md`** - Detailed pivot strategy
- **`Onboarding_Prompt.md`** - Handover guide for new developers/LLMs
- **`docs/context.md`** - Comprehensive technical documentation
- **`docs/work-catalog.md`** - Portfolio page structure

---

## ⚠️ Important Notes

1. **Pivot in Progress:** Some sections may still reference consulting work. Continue updating as per PORTFOLIO_PIVOT_PLAN.md.

2. **Maris App:** The featured mobile app. Screenshots are in `src/assets/apps/`. Website: https://trymaris.com

3. **Tab Order:** Applications → Web Development → Data Science → Research. Applications is now first.

4. **Messaging:** All new content should emphasize product building, shipping to app stores, and full-stack development.

5. **Balance:** Keep data science work visible but de-emphasized. It shows versatility and technical depth.

---

## 🚀 Next Steps

1. Complete pending pivot tasks (see PORTFOLIO_PIVOT_PLAN.md)
2. Update meta tags and SEO
3. Review and update testimonials
4. Update Contact page messaging
5. Add more mobile app projects as they're built

---

**Last Updated:** December 2024  
**Status:** Core pivot implemented, some tasks pending
