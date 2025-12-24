import { useState, useEffect } from 'react';
import CTASection from '../components/CTASection';
import PageSubtitle from '../components/PageSubtitle';
import HeadMetadata from '../components/HeadMetadata';
import personSchema from '../seo/personSchema';
import TabNavigation from '../components/work/TabNavigation';
import ProjectGrid from '../components/work/ProjectGrid';

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
        <section className="mb-16 flex justify-center">
          <TabNavigation
            tabs={tabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </section>

        {/* Tab Subtitle */}
        <PageSubtitle>{tabSubtitles[activeTab]}</PageSubtitle>

        {/* Tab Content */}
        <ProjectGrid
          activeTab={activeTab}
          projects={currentProjects}
        />

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