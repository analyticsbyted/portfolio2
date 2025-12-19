import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CTASection from '../components/CTASection';
import PageSubtitle from '../components/PageSubtitle';
import Card from '../components/Card';
import ImageWithSkeleton from '../components/ImageWithSkeleton';
import HeadMetadata from '../components/HeadMetadata';
import personSchema from '../seo/personSchema';
import moviePoster from '../assets/webapps/movie-explorer-poster.png';
import tvPoster from '../assets/webapps/tv-explorer-poster.png';
import cifarPoster from '../assets/webapps/cifar10-classifier-poster.png';
import economicPulsePoster from '../assets/webapps/economic-kpi-pulse-poster.png';
import equityScreenerPoster from '../assets/webapps/equity-screener-poster.png';
import marisWebsitePoster from '../assets/webapps/maris-website-poster.png';
import marisHome from '../assets/apps/maris-home.png';
import marisIntent from '../assets/apps/maris-intent.png';
import marisTimer from '../assets/apps/maris-timer.png';
import learnYourAdhdHome from '../assets/apps/learn-your-adhd.png';


import BrowserFrame from '../components/BrowserFrame';

// Import images for project visuals
import customerSegmentsImg from '../assets/certifications/customerSegments.webp';
import featureImportanceRFImg from '../assets/certifications/featureImportanceRF.webp';
import sentAnalysisWearablesImg from '../assets/certifications/sentAnalysis_wearables.webp';
import dataAnalysisPythonImg from '../assets/certifications/data-analysis-python.webp';
import dataVisualizationPythonImg from '../assets/certifications/data-visualization-python.webp';
import weeklyDemandImg from '../assets/certifications/weeklyDemand.webp';
import procCapacity1Img from '../assets/certifications/procCapacity1.webp';
import flowtime6Img from '../assets/certifications/flowtime6.webp';
import procDistributionImg from '../assets/certifications/procDistribution.webp';
import imdbTableauImg from '../assets/certifications/imdbTableau.webp';
import vaderImg from '../assets/certifications/vader.webp';
import researchDoctoralPoster from '../assets/research/research-doctoral-v2.svg';
import researchAiEthicsPoster from '../assets/research/research-ai-ethics.svg';
import researchExplainableHealthcarePoster from '../assets/research/research-explainable-healthcare.svg';
import researchEmployeeEngagementPoster from '../assets/research/research-employee-engagement.svg';
import powerBiPoster from '../assets/bi/power-bi-dashboard.svg';
import textMiningPoster from '../assets/nlp/text-mining.svg';

const tabs = [
  { name: 'Products', key: 'products' },
  { name: 'Web Engineering', key: 'web' },
  { name: 'Data & Analytics', key: 'data' },
  { name: 'Research & Operations', key: 'research' },
];

const tabSubtitles = {
  products: 'Mobile apps and featured web platforms—shipped to production and available to use today.',
  web: 'Modern web applications built with React, TypeScript, and production-grade tooling.',
  data: 'Data science models, machine learning, and analytics projects—from clustering to deep learning.',
  research: 'Academic research and operations analysis—exploring AI ethics, healthcare, and process optimization.'
};

// Products Tab: Mobile apps + Featured web apps
const products = [
  {
    type: 'mobile',
    title: 'Maris',
    tagline: 'Cognitive behavioral tool for ADHD brains—when willpower isn\'t enough.',
    features: [
      'Intent-based friction: Type why you need to unlock (10-second pause activates rational brain before impulse hijacks)',
      'Strict Mode: 5-second delay before quitting (gives working memory time to catch up with impulse)',
      'Visually Quiet UI: Morphing gradients and soft glass elements reduce sensory overload',
      'Available on iOS and Android: Native mobile apps for both platforms',
      'CBT-based intervention: Rewires automatic dopamine response over time'
    ],
    stack: ['React Native', 'Expo', 'TypeScript', 'Supabase', 'RevenueCat', 'Skia', 'Screen Time API'],
    images: [
      { src: marisHome, alt: 'Maris home screen with Deep Work session card' },
      { src: marisIntent, alt: 'Maris intent-based unlocking screen' },
      { src: marisTimer, alt: 'Maris active timer screen showing Brainstorming Session' }
    ],
    link: 'https://trymaris.com',
    linkLabel: 'Visit Website',
  },
  {
    type: 'web',
    title: 'Learn Your ADHD',
    tagline: 'ADHD screening and education platform bridging the gap between uncertainty and diagnosis.',
    features: [
      'Interactive WHO ASRS v1.1 Screening: Validated assessment tool with instant feedback',
      'Educational Content Hub: Resource library for understanding adult ADHD symptoms',
      'Secure & Private: Anonymous screening with privacy-first architecture'
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    img: learnYourAdhdHome,
    alt: 'Learn Your ADHD website screenshot',
    link: 'https://learnyouradhd.com',
    linkLabel: 'Visit Platform',
    featured: true,
  },
  {
    type: 'web',
    title: 'Equity Screener',
    tagline: 'Production financial app for equity screening, watchlist management, and automated alerts.',
    features: [
      'Real-time price tracking and technical indicators (RSI, MACD)',
      'Preset screening filters and custom watchlists',
      'Automated email alerts and news aggregation'
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'Prisma', 'PostgreSQL', 'Finnhub API', 'Tailwind'],
    img: equityScreenerPoster,
    alt: 'Equity Screener dashboard screenshot',
    link: 'https://equity-screener.onrender.com/',
    linkLabel: 'Live App',
    repoLink: 'https://github.com/analyticsbyted/equity-screener',
    repoLabel: 'View Repo',
    featured: true,
  },
  {
    type: 'web',
    title: 'Economic KPI Pulse',
    tagline: 'Business‑friendly dashboard of inflation, labor, and rates with exportable charts.',
    features: [
      'KPI tiles with YoY/MoM',
      'Time‑series charts with recession shading and rich tooltips',
      'Compare indicators and export PNG/CSV'
    ],
    stack: ['React', 'TypeScript', 'TanStack Query', 'Recharts', 'Tailwind', 'FRED API'],
    img: economicPulsePoster,
    alt: 'Economic KPI Pulse dashboard screenshot',
    link: 'https://economic-pulse.vercel.app/',
    linkLabel: 'Live App',
    repoLink: 'https://github.com/analyticsbyted/economic-pulse',
    repoLabel: 'View Repo',
    featured: true,
  },
];

// Web Engineering Tab: All web apps with technical focus
const webEngineeringProjects = [
  {
    type: 'web',
    title: 'Learn Your ADHD',
    tagline: 'ADHD screening and education platform bridging the gap between uncertainty and diagnosis.',
    features: [
      'Interactive WHO ASRS v1.1 Screening: Validated assessment tool with instant feedback',
      'Educational Content Hub: Resource library for understanding adult ADHD symptoms',
      'Secure & Private: Anonymous screening with privacy-first architecture'
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    img: learnYourAdhdHome,
    alt: 'Learn Your ADHD website screenshot',
    link: 'https://learnyouradhd.com',
    linkLabel: 'Visit Website',
  },
  {
    type: 'web',
    title: 'Maris Website',
    tagline: 'High-performance marketing site and compliance hub for the Maris focus app.',
    features: [
      'Premium Dark Mode UI: Custom Tailwind theme optimized for OLED screens',
      'Static Export Architecture: Zero-runtime deployment on AWS S3 & CloudFront',
      'Compliance Hub: Accessible Privacy Policy and Terms for App Store approval'
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'AWS S3'],
    img: marisWebsitePoster,
    alt: 'Maris website home screen',
    link: 'https://trymaris.com',
    linkLabel: 'Visit Website',
  },
  {
    type: 'web',
    title: 'Equity Screener',
    tagline: 'Production financial app for equity screening, watchlist management, and automated alerts.',
    features: [
      'Real-time price tracking and technical indicators (RSI, MACD)',
      'Preset screening filters and custom watchlists',
      'Automated email alerts and news aggregation'
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'Prisma', 'PostgreSQL', 'Finnhub API', 'Tailwind'],
    img: equityScreenerPoster,
    alt: 'Equity Screener dashboard screenshot',
    link: 'https://equity-screener.onrender.com/',
    linkLabel: 'Live App',
    repoLink: 'https://github.com/analyticsbyted/equity-screener',
    repoLabel: 'View Repo',
  },
  {
    type: 'web',
    title: 'Economic KPI Pulse',
    tagline: 'Business‑friendly dashboard of inflation, labor, and rates with exportable charts.',
    features: [
      'KPI tiles with YoY/MoM',
      'Time‑series charts with recession shading and rich tooltips',
      'Compare indicators and export PNG/CSV'
    ],
    stack: ['React', 'TypeScript', 'TanStack Query', 'Recharts', 'Tailwind', 'FRED API'],
    img: economicPulsePoster,
    alt: 'Economic KPI Pulse dashboard screenshot',
    link: 'https://economic-pulse.vercel.app/',
    linkLabel: 'Live App',
    repoLink: 'https://github.com/analyticsbyted/economic-pulse',
    repoLabel: 'View Repo',
  },
  {
    type: 'web',
    title: 'Movie Explorer',
    tagline: 'Web app to discover movies with rich details and recommendations.',
    features: [
      'Browse trending and popular movies',
      'Search and discover new titles',
      'Movie details with cast and similar titles'
    ],
    stack: ['React', 'TypeScript', 'TanStack Query', 'TMDB API', 'Tailwind'],
    img: moviePoster,
    alt: 'Movie Explorer web app screenshot',
    link: 'https://moviez-explorer.netlify.app/',
    linkLabel: 'Live App',
    repoLink: 'https://github.com/analyticsbyted/movie-explorer',
    repoLabel: 'View Repo',
  },
  {
    type: 'web',
    title: 'TV Explorer',
    tagline: 'Web app to discover and explore TV series with live data.',
    features: [
      'Browse trending and popular series',
      'Search and filter by title',
      'Series details with cast and recommendations'
    ],
    stack: ['React', 'TypeScript', 'TanStack Query', 'TMDB API', 'Tailwind'],
    img: tvPoster,
    alt: 'TV Explorer web app screenshot',
    link: 'https://tvexplorer.netlify.app/',
    linkLabel: 'Live App',
    repoLink: 'https://github.com/analyticsbyted/tv-explorer',
    repoLabel: 'View Repo',
  },
];

// Data & Analytics Tab: Data Science, ML, Analytics, BI, NLP
const dataAnalyticsProjects = [
  // Deep Learning / CNN
  {
    category: 'Deep Learning',
    title: 'CIFAR‑10 Image Classification (CNN)',
    problem: 'Build a robust CNN to classify images across 10 object categories while mitigating overfitting.',
    approach: 'Implemented a TensorFlow/Keras CNN with data augmentation, batch normalization, and max‑pooling.',
    result: 'Achieved ~79% test accuracy with detailed classification report and confusion matrix.',
    img: cifarPoster,
    link: 'https://github.com/analyticsbyted/CNN-Image-Classification-CIFAR10',
    linkLabel: 'View Repo',
    demoLink: 'https://huggingface.co/spaces/analyticsbyted/CIFAR10-Classifier',
    demoLabel: 'Live Demo',
    details: 'CNN with image augmentation (RandomFlip/Rotation/Zoom), BatchNorm + MaxPool.',
    skills: ['Python', 'TensorFlow', 'Keras', 'Deep Learning']
  },
  // Data Science
  {
    category: 'Data Science',
    title: 'Customer Segmentation (Clustering)',
    problem: 'Identify distinct customer groups for targeted marketing.',
    approach: 'Applied clustering algorithms to shopping mall customer data using Python.',
    result: 'Revealed actionable segments, enabling more effective marketing strategies.',
    img: customerSegmentsImg,
    link: 'https://github.com/analyticsbyted/customerSegmentation/blob/main/segmentation.ipynb',
    linkLabel: 'View Project',
    details: 'Tools: Python, scikit-learn, pandas. Identify optimal clusters.',
    skills: ['Python', 'scikit-learn', 'Clustering']
  },
  {
    category: 'Data Science',
    title: 'Predicting Customer Behavior (KNN)',
    problem: 'Predict adoption of wearable tech among new customers.',
    approach: 'Used K Nearest Neighbors to classify and predict customer behavior.',
    result: 'Improved targeting for marketing wearable technology.',
    img: sentAnalysisWearablesImg,
    link: 'https://rpubs.com/dickeyt/wearabletech',
    linkLabel: 'View Project',
    details: 'Tools: R, caret. Feature selection and scaling for KNN.',
    skills: ['R', 'caret', 'KNN']
  },
  // Data Analysis
  {
    category: 'Data Analysis',
    title: 'Data Cleaning in SQL (ETL)',
    problem: 'Ensure real estate data is clean and analysis ready.',
    approach: 'Extracted, cleaned, and transformed data using SQL Server.',
    result: 'Standardized formats, handled missing data, and removed duplicates.',
    img: dataAnalysisPythonImg,
    link: 'https://github.com/analyticsbyted/PortfolioProjects/blob/main/DataCleaninginSQL.sql',
    linkLabel: 'View Project',
    details: 'Tools: SQL Server. Ensuring data consistency.',
    skills: ['SQL Server', 'ETL']
  },
  {
    category: 'Data Analysis',
    title: 'Demand Planning Forecasting',
    problem: 'Optimize inventory and reduce costs in supply chain operations.',
    approach: 'Developed a demand forecasting model using historical sales data.',
    result: 'Enabled better inventory planning and cost reduction.',
    img: weeklyDemandImg,
    link: 'https://github.com/analyticsbyted/demandForecasting',
    linkLabel: 'View Project',
    details: 'Tools: Python, pandas. Handling seasonality and demand variability.',
    skills: ['Python', 'pandas', 'scikit-learn']
  },
  // BI
  {
    category: 'Business Intelligence',
    title: 'Tableau Public Portfolio',
    problem: 'Communicate insights through interactive dashboards.',
    approach: 'Developed a collection of Tableau dashboards and data visualizations.',
    result: 'Enabled stakeholders to explore and understand complex data visually.',
    img: imdbTableauImg,
    link: 'https://public.tableau.com/app/profile/tdickey/',
    linkLabel: 'View Tableau Profile',
    details: 'Tools: Tableau, SQL. Creating interactive/visually appealing dashboards.',
    skills: ['Tableau', 'SQL']
  },
  // NLP
  {
    category: 'NLP',
    title: 'Sentiment Analysis (VADER/RoBERTa)',
    problem: 'Extract sentiment insights from Amazon Fine Food Reviews.',
    approach: 'Applied VADER and RoBERTa models to analyze sentiment polarity.',
    result: 'Compared model results and visualized insights.',
    img: vaderImg,
    link: 'https://github.com/analyticsbyted/sentiment_analysis/blob/main/sentiment.ipynb',
    linkLabel: 'View Project',
    details: 'Tools: Python, scikit-learn. Interpreting sentiment polarity.',
    skills: ['Python', 'NLP', 'BERT']
  },
];

// Research & Operations Tab: Research projects and Operations analysis
const researchOperationsProjects = [
  // Research
  {
    category: 'Research',
    title: 'Didactic & Doctoral Research',
    problem: 'Original research in organizational leadership and analytics.',
    approach: 'Exploring analytics and ML for measuring employee engagement and performance.',
    result: 'Ongoing research and publication.',
    img: researchDoctoralPoster,
    link: '#',
    linkLabel: 'In Progress',
    details: 'Tools: Python, pandas. Challenge: Complex data analysis in social science contexts.',
    skills: ['Research', 'Python', 'Statistics']
  },
  {
    category: 'Research',
    title: 'Explainable AI for Healthcare',
    problem: 'How can we make deep learning models interpretable for clinical decision support?',
    approach: 'Developing interpretable models for transparency and trust in medical AI.',
    result: 'Focus on model interpretability techniques (SHAP, LIME).',
    img: researchExplainableHealthcarePoster,
    link: '#',
    linkLabel: 'Coming Soon',
    details: 'Tools: Python, SHAP. Challenge: Trust in AI systems.',
    skills: ['Python', 'XAI', 'Healthcare']
  },
  {
    category: 'Research',
    title: 'AI Ethics & Responsible ML',
    problem: 'How can organizations deploy AI ethically and responsibly?',
    approach: 'Researching frameworks and best practices for ethical AI deployment.',
    result: 'Focus on bias mitigation and transparency.',
    img: researchAiEthicsPoster,
    link: '#',
    linkLabel: 'Coming Soon',
    details: 'Focus: Algorithmic bias, fairness, transparency.',
    skills: ['Research', 'AI Ethics']
  },
  // Operations / Process Analysis
  {
    category: 'Operations',
    title: 'Process Capacity Analysis',
    problem: 'Identify bottlenecks in a manufacturing line.',
    approach: 'Calculated process capacity and performed scenario analysis.',
    result: 'Provided recommendations for process improvement.',
    img: procCapacity1Img,
    link: 'https://github.com/analyticsbyted/operationsAnalysis/blob/main/processCapacity.ipynb',
    linkLabel: 'View Project',
    details: 'Tools: Python. Challenge: Assessing variability.',
    skills: ['Python', 'Operations']
  },
  {
    category: 'Operations',
    title: 'Hospital Process Flow',
    problem: 'Improve patient flow in an emergency room.',
    approach: 'Analyzed patient flow using Little\'s Law and process mapping.',
    result: 'Insights into wait times and process efficiency.',
    img: flowtime6Img,
    link: 'https://github.com/analyticsbyted/flowTimeAnalysis/blob/main/flowtime.ipynb',
    linkLabel: 'View Project',
    details: 'Tools: Python. Challenge: Healthcare operations data.',
    skills: ['Python', 'Healthcare']
  },
  {
    category: 'Operations',
    title: 'Manufacturing Quality Analysis',
    problem: 'Assess and improve process quality.',
    approach: 'Evaluated process capability (Cpk) and identified defect sources.',
    result: 'Recommendations for quality improvement.',
    img: procDistributionImg,
    link: 'https://github.com/analyticsbyted/processQuality/blob/main/process_qlty.ipynb',
    linkLabel: 'View Project',
    details: 'Tools: Python. Challenge: Quality control stats.',
    skills: ['Python', 'Quality']
  }
];

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