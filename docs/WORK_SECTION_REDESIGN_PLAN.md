# Work Section Redesign Plan

**Date:** December 2024  
**Status:** Planning  
**Goal:** Align Work section with "Indie Developer" positioning by emphasizing shipped products over consulting work

---

## 🎯 Problem Statement

### Current Issues
1. **Signal-to-Noise Ratio**: 7 tabs (Apps, Web, DS, DA, BI, NLP, Research) dilutes the "Indie Developer" brand
2. **Consultancy Feel**: Hero copy "Portfolio of Data, AI, and Web Solutions" sounds corporate/consultancy
3. **Buried Products**: Maris and top web apps (Equity Screener, Movie Explorer) are mixed with data science work
4. **Visual Hierarchy**: Web apps don't get the same premium treatment as Maris

### Target Outcome
- **Clear Product Focus**: "I build and ship products" is immediately obvious
- **Reduced Cognitive Load**: 3 tabs instead of 7
- **Featured Products**: Maris + top web apps elevated to "Shipped" section
- **Archive Feel**: Data science work accessible but de-emphasized

---

## 📋 Implementation Plan

### Phase 1: Tab Consolidation

#### Current Structure (7 tabs)
```
1. Applications (mobileApps)
2. Web Development (webDevProjects)
3. Predictive Modeling & ML (dataScienceProjects)
4. Data Analysis / Operations (dataAnalysisProjects)
5. Business Intelligence / Dashboards (biProjects)
6. NLP & Text Analytics (nlpProjects)
7. Research (researchProjects)
```

#### Proposed Structure (3 tabs)
```
1. Products (NEW - combines Apps + Featured Web Apps)
   - Maris (mobile app)
   - Equity Screener (web app - featured)
   - Movie Explorer (web app - featured)
   - TV Explorer (web app - featured)
   - Economic KPI Pulse (web app - featured)

2. Web Engineering (renamed from "Web Development")
   - All web apps (including featured ones, but in full list)
   - Focus on technical implementation, stack, architecture

3. Data & Research (NEW - consolidates DS, DA, BI, NLP, Research)
   - Predictive Modeling & ML
   - Data Analysis / Operations
   - Business Intelligence / Dashboards
   - NLP & Text Analytics
   - Research
```

#### Implementation Steps
1. **Create new `products` tab** combining mobile apps + featured web apps
2. **Rename `web` tab** to `web-engineering` with updated subtitle
3. **Create new `data-research` tab** consolidating all data science work
4. **Update tab array** to 3 tabs
5. **Update tab subtitles** with new messaging
6. **Update default active tab** to `products`
7. **Update URL routing** for deep linking

---

### Phase 2: Hero Section Redesign

#### Current Hero
```jsx
<h1>
  Portfolio of
  <span>Data, AI, and Web Solutions</span>
</h1>
<p>
  Explore real‑world projects across Web Development, Mobile Applications, 
  AI/ML, Data Science, Business Intelligence, and NLP—focused on shipping 
  practical, production‑ready outcomes.
</p>
```

#### Proposed Hero
```jsx
<h1>
  Shipped Products
  <span>& Experiments</span>
</h1>
<p>
  A collection of native apps, web platforms, and AI experiments—built in public, 
  deployed to production, and available to use today.
</p>
```

**Alternative Options:**
- "Building in Public" (more personal/indie feel)
- "Products & Experiments" (clearer product focus)
- "Shipped Work" (simplest, most direct)

---

### Phase 3: Featured Products Section

#### Concept
Create a prominent "Featured Products" section at the top of the `products` tab that showcases:
- **Maris** (mobile app) - already has premium treatment
- **Equity Screener** (web app) - elevate with device mockup
- **Movie Explorer** (web app) - elevate with device mockup
- **TV Explorer** (web app) - elevate with device mockup
- **Economic KPI Pulse** (web app) - elevate with device mockup

#### Visual Treatment
- **Maris**: Keep existing carousel with 3 screenshots
- **Web Apps**: Add browser window mockup or device frame using CSS
  - Use `PhoneMockup` component pattern (if exists) or create `BrowserMockup` component
  - Apply same premium styling as Maris (shadows, borders, hover effects)

#### Layout
```
[Featured Products Section]
├── Maris (full width, carousel)
├── Equity Screener (browser mockup)
├── Movie Explorer (browser mockup)
├── TV Explorer (browser mockup)
└── Economic KPI Pulse (browser mockup)

[All Products Grid]
└── All products in card grid (including featured ones)
```

---

### Phase 4: Tab Content Reorganization

#### Products Tab Structure
```jsx
// Featured Products (top section)
<FeaturedProducts>
  - Maris (mobile app with carousel)
  - Equity Screener (web app with browser mockup)
  - Movie Explorer (web app with browser mockup)
  - TV Explorer (web app with browser mockup)
  - Economic KPI Pulse (web app with browser mockup)
</FeaturedProducts>

// All Products Grid (below featured)
<ProductsGrid>
  - All mobile apps
  - All web apps (including featured ones)
</ProductsGrid>
```

#### Web Engineering Tab Structure
```jsx
// Focus on technical implementation
<WebEngineeringProjects>
  - All web apps with technical details
  - Stack, architecture, deployment
  - Code quality, performance metrics
  - Live demos, GitHub repos
</WebEngineeringProjects>
```

#### Data & Research Tab Structure
```jsx
// Consolidated data science work
<DataResearchProjects>
  - Predictive Modeling & ML
  - Data Analysis / Operations
  - Business Intelligence / Dashboards
  - NLP & Text Analytics
  - Research
</DataResearchProjects>
```

---

### Phase 5: Component Creation

#### New Components Needed

1. **`BrowserMockup` Component**
   ```jsx
   <BrowserMockup 
     src={screenshot}
     alt="App screenshot"
     url="https://app.com"
     className="..."
   />
   ```
   - Browser chrome (address bar, window controls)
   - Screenshot inside
   - Optional URL display
   - Hover effects (similar to PhoneMockup)

2. **`FeaturedProducts` Component** (optional)
   - Wrapper for featured products section
   - Consistent styling
   - Responsive grid

3. **`ProductCard` Component** (optional)
   - Enhanced card for products
   - Badge for "Featured" or "Shipped"
   - App Store badges (iOS/Android)
   - Live demo links

---

## 🔧 Technical Implementation Details

### File Structure Changes
```
src/pages/Work.jsx
├── tabs array (3 tabs instead of 7)
├── tabSubtitles object (updated)
├── products array (NEW - combines mobileApps + featured webDevProjects)
├── webEngineeringProjects array (renamed from webDevProjects)
├── dataResearchProjects array (NEW - combines all data science)
└── FeaturedProducts section (NEW)
```

### Data Structure Changes

#### Products Array
```javascript
const products = [
  // Mobile Apps
  ...mobileApps,
  
  // Featured Web Apps (with featured: true flag)
  {
    ...equityScreener,
    featured: true,
    type: 'web'
  },
  {
    ...movieExplorer,
    featured: true,
    type: 'web'
  },
  // ... other featured web apps
];
```

#### Data & Research Array
```javascript
const dataResearchProjects = [
  // Group by category
  {
    category: 'Predictive Modeling & ML',
    projects: [...dataScienceProjects]
  },
  {
    category: 'Data Analysis / Operations',
    projects: [...dataAnalysisProjects]
  },
  {
    category: 'Business Intelligence',
    projects: [...biProjects]
  },
  {
    category: 'NLP & Text Analytics',
    projects: [...nlpProjects]
  },
  {
    category: 'Research',
    projects: [...researchProjects]
  }
];
```

---

## 📐 Design Specifications

### Featured Products Section
- **Layout**: Full-width cards with browser/device mockups
- **Spacing**: `mb-16` between featured products
- **Visual Treatment**: 
  - Browser chrome with URL bar
  - Subtle shadow and border
  - Hover: scale(1.02), enhanced shadow
  - Badge: "Featured" or "Shipped" in top-right

### Products Grid
- **Layout**: Responsive grid (1 col mobile, 2 cols tablet, 3 cols desktop)
- **Card Style**: Enhanced product cards with:
  - App icon/logo (if available)
  - "Live App" / "View Repo" buttons
  - Stack badges
  - Featured badge (if applicable)

### Tab Navigation
- **Style**: Keep existing modern tab design
- **Count**: 3 tabs (reduced from 7)
- **Default**: `products` tab active

---

## ✅ Success Criteria

### User Experience
- [ ] User immediately sees "I build products" message
- [ ] Featured products (Maris + web apps) are prominent
- [ ] Data science work is accessible but not primary focus
- [ ] Navigation is simpler (3 tabs vs 7)

### Visual Design
- [ ] Web apps get premium treatment (browser mockups)
- [ ] Consistent visual language across all products
- [ ] Clear hierarchy: Featured → All Products → Technical Details

### Technical
- [ ] All existing projects preserved
- [ ] Deep linking still works (`?tab=products`)
- [ ] Responsive design maintained
- [ ] Performance not degraded

---

## 🚀 Implementation Order

### Step 1: Tab Consolidation (Foundation)
1. Create new `products` tab structure
2. Create new `data-research` tab structure
3. Rename `web` to `web-engineering`
4. Update tab array and routing
5. Test tab switching

### Step 2: Hero Section Update
1. Update hero headline
2. Update hero description
3. Test responsive text sizing

### Step 3: Featured Products Section
1. Create `BrowserMockup` component
2. Create featured products section
3. Add Maris (existing carousel)
4. Add featured web apps with browser mockups
5. Style and test responsive layout

### Step 4: Products Grid
1. Combine mobile apps + web apps into products array
2. Update grid rendering
3. Add featured badges
4. Test filtering/sorting (if needed)

### Step 5: Data & Research Tab
1. Combine all data science projects
2. Add category headers (optional)
3. Update card rendering
4. Test layout

### Step 6: Polish & Testing
1. Update SEO metadata
2. Test deep linking
3. Test responsive design
4. Update documentation

---

## 📝 Content Updates Needed

### Tab Subtitles
```javascript
const tabSubtitles = {
  products: 'Native mobile apps and web platforms—shipped to production and available to use today.',
  'web-engineering': 'Modern web applications built with React, TypeScript, and production-grade tooling.',
  'data-research': 'Machine learning, data analysis, and research projects—exploring AI, analytics, and insights.'
};
```

### SEO Metadata
```javascript
<HeadMetadata
  title="Shipped Products & Experiments"
  description="A collection of native apps, web platforms, and AI experiments—built in public, deployed to production, and available to use today."
  keywords="mobile apps, web apps, React Native, React, TypeScript, Maris, Equity Screener, Movie Explorer, shipped products"
/>
```

---

## 🎨 Design Inspiration

### Browser Mockup Reference
- Use similar styling to `PhoneMockup` component
- Browser chrome: rounded top corners, address bar, window controls
- Screenshot: contained within browser frame
- Hover: subtle scale and shadow

### Featured Products Layout
- Full-width cards (not grid)
- Each product gets prominent space
- Clear visual separation between products
- Consistent spacing and typography

---

## ⚠️ Considerations

### Backward Compatibility
- Keep all existing project data
- Maintain deep linking (`?tab=web` should still work, redirect to `products` or `web-engineering`)
- Preserve all project details and links

### Migration Path
- Can implement gradually (Phase 1 → Phase 2 → Phase 3)
- Test each phase before moving to next
- Rollback plan: keep old tab structure as fallback

### Content Strategy
- Featured products should be "shipped" and "live"
- Web apps should have working demos
- Data science work can be "experiments" or "research"

---

## 📊 Metrics to Track

### Before/After Comparison
- **Tab Count**: 7 → 3 (57% reduction)
- **Featured Products**: 1 → 5 (400% increase)
- **Hero Clarity**: "Data, AI, Web Solutions" → "Shipped Products & Experiments"
- **Time to Find Products**: Should decrease (fewer tabs to navigate)

---

## 🔄 Future Enhancements

### Phase 2 Ideas (Post-Launch)
1. **Product Status Badges**: "Live", "Beta", "Archived"
2. **Metrics Display**: User count, GitHub stars, downloads
3. **Case Studies**: Detailed pages for featured products
4. **Filtering**: Filter products by type (mobile/web), stack, status
5. **Search**: Search across all products

---

## 📚 Related Documentation

- `docs/work-catalog.md` - Current Work page structure
- `docs/brand-guidelines.md` - Design system reference
- `PORTFOLIO_PIVOT_PLAN.md` - Overall portfolio pivot strategy

---

**Status:** Ready for implementation  
**Estimated Effort:** 4-6 hours  
**Priority:** High (aligns with Indie Developer positioning)


