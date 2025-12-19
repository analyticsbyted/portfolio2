import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CTASection from '../components/CTASection';
import PageSubtitle from '../components/PageSubtitle';
import Card from '../components/Card';
import ImageWithSkeleton from '../components/ImageWithSkeleton';
import HeadMetadata from '../components/HeadMetadata';
import personSchema from '../seo/personSchema';
import BrowserFrame from '../components/BrowserFrame';

// Import project data
import {
  tabs,
  tabSubtitles,
  products,
  webEngineeringProjects,
  dataAnalyticsProjects,
  researchOperationsProjects
} from '../data/workData';

function Work() {
  const [activeTab, setActiveTab] = useState('products');


  // Determine which projects to show based on active tab
  const getProjectsForTab = () => {
    if (activeTab === 'products') return products;
    if (activeTab === 'web') return webEngineeringProjects;
    if (activeTab === 'data') return dataAnalyticsProjects;
    if (activeTab === 'research') return researchOperationsProjects;
    return [];
  };

  const currentProjects = getProjectsForTab();

  // Support deep-linking via ?tab= or #tab-<key>
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const q = params.get('tab');
    const hash = window.location.hash.replace('#', '');
    const fromHash = hash.startsWith('tab-') ? hash.slice(4) : null;
    const candidate = q || fromHash;
    const keys = tabs.map(t => t.key);
    if (candidate && keys.includes(candidate)) {
      setActiveTab(candidate);
    }
  }, []);

  // General CTA text and link
  const generalCTA = {
    text: 'Ready to discuss how these solutions can transform your business? Let\'s explore custom analytics solutions tailored to your needs.',
    link: '/contact',
    label: 'Start Your Project'
  };

  return (
    <>
      <HeadMetadata
        title="Shipped Work & Projects | Ted Dickey"
        description="A showcase of shipped mobile apps, full-stack web platforms, and data science research. Featuring Maris, Equity Screener, and more."
        canonical="/work"
        keywords="portfolio, indie developer, mobile apps, maris app, web development, data science, research"
        schema={personSchema}
      />
      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* Updated Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground dark:text-white mb-6 leading-tight font-headline">
            Shipped
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
              Work & Experiments
            </span>
          </h1>
          <p className="text-body-large md:text-body-large-md text-muted-foreground dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed font-body">
            A collection of native mobile apps, production web platforms, and deep dives into data science and AI.
          </p>
        </section>

        {/* Tab Navigation */}
        <section className="mb-16">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tabs.map(tab => (
              <button
                key={tab.key}
                className={`px-8 py-4 rounded-2xl text-button transition-all duration-300 border-2 font-headline ${activeTab === tab.key
                  ? 'bg-gradient-to-r from-brand-primary to-brand-secondary text-white border-brand-primary shadow-lg transform hover:scale-105'
                  : 'bg-card dark:bg-gray-800 text-foreground dark:text-gray-300 border-border dark:border-gray-700 hover:border-brand-primary/50 hover:shadow-md hover:bg-muted dark:hover:bg-gray-700'
                  }`}
                onClick={() => { setActiveTab(tab.key); }}
                role="tab"
                aria-selected={activeTab === tab.key}
                aria-controls={`tabpanel-${tab.key}`}
                id={`tab-${tab.key}`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </section>

        {/* Tab Subtitle */}
        <PageSubtitle>{tabSubtitles[activeTab]}</PageSubtitle>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.section
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mb-16"
            id={`tabpanel-${activeTab}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeTab}`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {(activeTab === 'products' || activeTab === 'web') ? (
                currentProjects.map((app, idx) => (
                  <Card
                    key={`${activeTab}-${app.title}`}
                    layoutId={`project-${app.title}`}
                    className="focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/60 hover:shadow-xl transition-shadow group h-full flex flex-col"
                  >
                    {/* Image Area - Different for Mobile vs Web */}
                    {app.type === 'mobile' && app.images ? (
                      <div className="relative bg-muted/40 overflow-hidden rounded-t-2xl mt-3 mx-3 pt-4">
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-primary/30 to-brand-secondary/30 z-10" aria-hidden="true" />
                        <div className="p-3 flex justify-center">
                          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
                            {app.images.map((image, imgIdx) => (
                              <div key={imgIdx} className="flex-shrink-0 w-32 md:w-36 h-auto flex items-center justify-center">
                                <ImageWithSkeleton
                                  src={image.src}
                                  alt={image.alt}
                                  className="h-full w-auto object-contain rounded-lg shadow-sm"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="p-6 mt-2">
                        <BrowserFrame className="group-hover:shadow-md transition-shadow duration-300">
                          <div className="aspect-[16/10] bg-muted dark:bg-muted/20 flex items-start overflow-hidden">
                            <ImageWithSkeleton
                              src={app.img}
                              alt={app.alt}
                              className="w-full h-auto object-cover object-top hover:-translate-y-[10%] transition-transform duration-[2000ms] ease-in-out cursor-pointer"
                            />
                          </div>
                        </BrowserFrame>
                      </div>
                    )}

                    {/* Content Area */}
                    <div className="p-6 flex-1 flex flex-col">
                      {/* Tech Stack Badges */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {app.stack.map((s, i) => (
                          <span key={i} className="px-2.5 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-md text-xs font-bold border border-blue-200 dark:border-blue-800">
                            {s}
                          </span>
                        ))}
                      </div>

                      <h3 className="text-headline-3 md:text-headline-3-md font-bold text-foreground dark:text-white mb-2 font-headline">{app.title}</h3>
                      <p className="text-body text-muted-foreground dark:text-gray-300 mb-6 flex-1 leading-relaxed font-body">{app.tagline}</p>

                      <ul className="space-y-2 text-muted-foreground dark:text-gray-300 mb-8 text-body-small font-body">
                        {app.features.map((f, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <span className="text-brand-primary dark:text-brand-accent mt-0.5 flex-shrink-0">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                            </span>
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex items-center gap-3 mt-auto pt-4 border-t border-border dark:border-gray-700">
                        <a
                          href={app.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-brand-primary to-brand-secondary text-white rounded-xl font-semibold hover:from-brand-accent hover:to-brand-accent-alt transition-all shadow-sm text-sm font-headline"
                          aria-label={`Open ${app.title}`}
                        >
                          {app.linkLabel}
                          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                        {app.repoLink && (
                          <a
                            href={app.repoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-5 py-2.5 text-sm font-semibold rounded-xl border border-gray-200 dark:border-gray-600 text-foreground dark:text-white hover:border-brand-primary dark:hover:border-brand-primary hover:text-brand-primary dark:hover:text-brand-primary hover:bg-brand-primary/5 dark:hover:bg-brand-primary/10 transition-all shadow-sm font-headline"
                            aria-label={`View Code for ${app.title}`}
                          >
                            {app.repoLabel || 'View Code'}
                          </a>
                        )}
                      </div>
                    </div>
                  </Card>
                ))
              ) : (
                currentProjects.map((proj, idx) => (
                  <Card
                    key={`${activeTab}-${proj.title}`}
                    layoutId={`project-${proj.title}`}
                    className="focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/60 hover:shadow-xl transition-shadow group h-full flex flex-col"
                  >
                    <div className={`relative h-48 bg-muted/40 dark:bg-muted/20 overflow-hidden rounded-t-2xl flex items-center justify-center p-4 mt-3 mx-3`}>
                      <div className="absolute top-0 right-0 bg-brand-primary/10 dark:bg-brand-primary/20 text-brand-primary dark:text-brand-accent text-xs font-bold px-3 py-1 rounded-bl-xl z-20">
                        {proj.category}
                      </div>
                      <ImageWithSkeleton
                        src={proj.img}
                        alt={proj.title}
                        className="h-full w-full object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                    </div>

                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {proj.skills && proj.skills.map((skill, i) => (
                          <span key={i} className="px-2.5 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-md text-xs font-bold border border-blue-200 dark:border-blue-800">
                            {skill}
                          </span>
                        ))}
                      </div>

                      <h3 className="text-headline-3 font-bold text-foreground dark:text-white mb-4 font-headline">{proj.title}</h3>

                      <div className="space-y-4 mb-6 flex-1">
                        <div>
                          <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground/70 dark:text-gray-500 mb-1 font-body">Problem</div>
                          <p className="text-sm text-muted-foreground dark:text-gray-300 leading-relaxed font-body">
                            {proj.problem}
                          </p>
                        </div>

                        <div>
                          <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground/70 dark:text-gray-500 mb-1 font-body">Approach</div>
                          <p className="text-sm text-muted-foreground dark:text-gray-300 leading-relaxed font-body">
                            {proj.approach}
                          </p>
                        </div>

                        <div>
                          <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground/70 dark:text-gray-500 mb-1 font-body">Result</div>
                          <p className="text-sm text-muted-foreground dark:text-gray-300 leading-relaxed font-body">
                            {proj.result}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 pt-4 border-t border-border dark:border-gray-700 mt-auto">
                        <a
                          href={proj.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-brand-primary to-brand-secondary text-white rounded-xl font-semibold hover:from-brand-accent hover:to-brand-accent-alt transition-all shadow-sm text-sm font-headline"
                        >
                          {proj.linkLabel}
                          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                        {proj.demoLink && (
                          <a
                            href={proj.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-5 py-2.5 text-sm font-semibold rounded-xl border border-gray-200 dark:border-gray-600 text-foreground dark:text-white hover:border-brand-primary dark:hover:border-brand-primary hover:text-brand-primary dark:hover:text-brand-primary hover:bg-brand-primary/5 dark:hover:bg-brand-primary/10 transition-all shadow-sm font-headline"
                          >
                            {proj.demoLabel}
                          </a>
                        )}
                      </div>
                    </div>
                  </Card>
                ))
              )}
            </div>
          </motion.section>
        </AnimatePresence>

        <CTASection
          title="Need a Product Engineer?"
          description={generalCTA.text}
          primaryButton={{
            href: generalCTA.link,
            text: generalCTA.label,
            ariaLabel: generalCTA.label
          }}
          secondaryButton={{
            href: "/about",
            text: "More About Me",
            ariaLabel: "Learn more about Ted's experience"
          }}
        />
      </div >
    </>
  );
}

export default Work;