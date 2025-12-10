import { useState, useEffect } from 'react';
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
import marisHome from '../assets/apps/maris-home.png';
import marisIntent from '../assets/apps/maris-intent.png';
import marisTimer from '../assets/apps/maris-timer.png';

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
  { name: 'Applications', key: 'apps' },
  { name: 'Web Development', key: 'web' },
  { name: 'Predictive Modeling & ML', key: 'ds' },
  { name: 'Data Analysis / Operations', key: 'da' },
  { name: 'Business Intelligence / Dashboards', key: 'bi' },
  { name: 'NLP & Text Analytics', key: 'nlp' },
  { name: 'Research', key: 'research' },
];

const tabSubtitles = {
  ds: 'Supervised and unsupervised ML—classification, clustering, and model evaluation for business impact.',
  da: 'ETL, EDA, forecasting, and operations analysis to optimize processes and decisions.',
  bi: 'Interactive dashboards and KPIs to communicate insights with Tableau and Power BI.',
  nlp: 'Text analytics and NLP—sentiment, embeddings, and retrieval on unstructured data.',
  web: 'Production web apps built with React, TypeScript, and modern tooling.',
  apps: 'Native mobile applications for iOS and Android—health, productivity, and cognitive tools.',
  research: 'Academic and applied research exploring AI, ethics, healthcare, and organizational analytics.'
};

const dataScienceProjects = [
  {
    title: 'Customer Segmentation (Clustering, Python)',
    problem: 'How can we identify distinct customer groups for targeted marketing?',
    approach: 'Applied clustering algorithms to shopping mall customer data using Python.',
    result: 'Revealed actionable segments, enabling more effective marketing strategies.',
    img: customerSegmentsImg,
    link: 'https://github.com/analyticsbyted/customerSegmentation/blob/main/segmentation.ipynb',
    linkLabel: 'View Project',
    details: 'Tools: Python, scikit-learn, pandas. Challenge: Identifying optimal number of clusters and interpreting business value.',
    skills: ['Python', 'scikit-learn', 'pandas', 'Clustering']
  },
  {
    title: 'Classification and Regression Trees for Organic Grocer',
    problem: 'How can a grocery retailer predict which customers will purchase organic foods?',
    approach: 'Built CART models on a dataset of 9114 observations to classify and predict purchasers.',
    result: 'Enabled targeted promotions and improved customer engagement.',
    img: featureImportanceRFImg,
    link: 'https://github.com/analyticsbyted/organic_grocer/blob/main/organicGrocer1markdown.md',
    linkLabel: 'View Project',
    details: 'Tools: R, rpart, caret. Challenge: Handling class imbalance and model interpretability.',
    skills: ['R', 'rpart', 'caret', 'CART']
  },
  {
    title: 'Predicting Customer Behavior using KNN',
    problem: 'How can we predict adoption of wearable tech among new customers?',
    approach: 'Used K Nearest Neighbors to classify and predict customer behavior.',
    result: 'Improved targeting for marketing wearable technology.',
    img: sentAnalysisWearablesImg,
    link: 'https://rpubs.com/dickeyt/wearabletech',
    linkLabel: 'View Project',
    details: 'Tools: R, caret. Challenge: Feature selection and scaling for KNN.',
    skills: ['R', 'caret', 'KNN']
  },
  {
    title: 'CIFAR‑10 Image Classification (CNN, TensorFlow/Keras)',
    problem: 'How can we build a robust CNN to classify images across 10 object categories while mitigating overfitting?',
    approach: 'Implemented a TensorFlow/Keras CNN with data augmentation (RandomFlip/Rotation/Zoom), batch normalization, and max‑pooling to improve generalization and stabilize training.',
    result: 'Achieved ~79% test accuracy with detailed classification report and confusion matrix analysis for model diagnostics.',
    img: cifarPoster,
    link: 'https://github.com/analyticsbyted/CNN-Image-Classification-CIFAR10',
    linkLabel: 'View Repo',
    demoLink: 'https://huggingface.co/spaces/analyticsbyted/CIFAR10-Classifier',
    demoLabel: 'Live Demo',
    details: 'CNN with image augmentation (RandomFlip/Rotation/Zoom), BatchNorm + MaxPool; ~79% test accuracy with full classification report and confusion matrix.',
    skills: ['Python', 'TensorFlow', 'Keras', 'Deep Learning']
  }
];

const dataAnalysisProjects = [
  {
    title: 'Data Cleaning in SQL (ETL)',
    problem: 'How do we ensure real estate data is clean and analysis ready?',
    approach: 'Extracted, cleaned, and transformed data using SQL Server.',
    result: 'Standardized formats, handled missing data, and removed duplicates for reliable analysis.',
    img: dataAnalysisPythonImg,
    link: 'https://github.com/analyticsbyted/PortfolioProjects/blob/main/DataCleaninginSQL.sql',
    linkLabel: 'View Project',
    details: 'Tools: SQL Server. Challenge: Ensuring data consistency and handling large datasets.',
    skills: ['SQL Server']
  },
  {
    title: 'Exploratory Data Analysis in R (Political Contributions)',
    problem: 'What trends exist in Cincinnati political contributions?',
    approach: 'Used R to create summary statistics, interactive tables, and visualizations.',
    result: 'Uncovered key trends and insights for stakeholders.',
    img: dataVisualizationPythonImg,
    link: 'https://rpubs.com/dickeyt/contributions',
    linkLabel: 'View Project',
    details: 'Tools: R, ggplot2, dplyr. Challenge: Handling categorical data and creating meaningful visualizations.',
    skills: ['R', 'ggplot2', 'dplyr']
  },
  {
    title: 'Demand Planning Forecasting (Supply Chain, Python)',
    problem: 'How can we optimize inventory and reduce costs in supply chain operations?',
    approach: 'Developed a demand forecasting model using historical sales data.',
    result: 'Enabled better inventory planning and cost reduction.',
    img: weeklyDemandImg,
    link: 'https://github.com/analyticsbyted/demandForecasting',
    linkLabel: 'View Project',
    details: 'Tools: Python, pandas, scikit-learn. Challenge: Handling seasonality and demand variability.',
    skills: ['Python', 'pandas', 'scikit-learn']
  },
  {
    title: 'Process Capacity Analysis (Manufacturing, Python)',
    problem: 'Where are the bottlenecks in a manufacturing line, and how can we improve capacity?',
    approach: 'Calculated process capacity and performed scenario analysis using Python.',
    result: 'Identified bottlenecks and provided recommendations for process improvement.',
    img: procCapacity1Img,
    link: 'https://github.com/analyticsbyted/operationsAnalysis/blob/main/processCapacity.ipynb',
    linkLabel: 'View Project',
    details: 'Tools: Python, pandas, scikit-learn. Challenge: Assessing process variability and capacity utilization.',
    skills: ['Python', 'pandas', 'scikit-learn']
  },
  {
    title: 'Process Flow Analysis (Hospital, Python)',
    problem: 'How can we improve patient flow and efficiency in a hospital emergency room?',
    approach: 'Analyzed patient flow using Little Law and process mapping.',
    result: 'Provided actionable insights into wait times and process efficiency.',
    img: flowtime6Img,
    link: 'https://github.com/analyticsbyted/flowTimeAnalysis/blob/main/flowtime.ipynb',
    linkLabel: 'View Project',
    details: 'Tools: Python, pandas, matplotlib. Challenge: Handling complex data and creating meaningful visualizations.',
    skills: ['Python', 'pandas', 'matplotlib']
  },
  {
    title: 'Process Quality Analysis (Manufacturing, Python)',
    problem: 'How can we assess and improve process quality in manufacturing?',
    approach: 'Evaluated process capability, calculated Cpk, and identified defects.',
    result: 'Delivered recommendations for quality improvement.',
    img: procDistributionImg,
    link: 'https://github.com/analyticsbyted/processQuality/blob/main/process_qlty.ipynb',
    linkLabel: 'View Project',
    details: 'Tools: Python, pandas, scikit-learn. Challenge: Assessing process stability and identifying root causes of defects.',
    skills: ['Python', 'pandas', 'scikit-learn']
  }
];

const biProjects = [
  {
    title: 'Tableau Public Portfolio',
    problem: 'How can we communicate insights through interactive dashboards?',
    approach: 'Developed a collection of Tableau dashboards and data visualizations.',
    result: 'Enabled stakeholders to explore and understand complex data visually.',
    img: imdbTableauImg,
    link: 'https://public.tableau.com/app/profile/tdickey/',
    linkLabel: 'View Tableau Profile',
    details: 'Tools: Tableau, SQL. Challenge: Creating interactive and visually appealing dashboards.',
    skills: ['Tableau', 'SQL']
  },
  {
    title: 'Power BI KPI Dashboard (Placeholder)',
    problem: 'A Power BI dashboard project will be added here soon.',
    approach: 'For now, see my Tableau public profile for examples.',
    result: '',
    img: powerBiPoster,
    link: '#',
    linkLabel: 'Coming Soon',
    details: '',
    skills: ['Power BI']
  }
];

const nlpProjects = [
  {
    title: 'Sentiment Analysis of Amazon Reviews (NLP, VADER and RoBERTa)',
    problem: 'How can we extract sentiment insights from Amazon Fine Food Reviews?',
    approach: 'Applied VADER and RoBERTa models to analyze sentiment polarity.',
    result: 'Compared model results and visualized insights for business use.',
    img: vaderImg,
    link: 'https://github.com/analyticsbyted/sentiment_analysis/blob/main/sentiment.ipynb',
    linkLabel: 'View Project',
    details: 'Tools: Python, scikit-learn, pandas. Challenge: Interpreting sentiment polarity and creating meaningful visualizations.',
    skills: ['Python', 'scikit-learn', 'pandas']
  },
  {
    title: 'Web Scraping and Text Mining (Placeholder)',
    problem: 'A web scraping or text mining project will be added here soon.',
    approach: 'Stay tuned for updates!',
    result: '',
    img: textMiningPoster,
    link: '#',
    linkLabel: 'Coming Soon',
    details: '',
    skills: ['Web Scraping', 'Text Mining']
  }
];

const researchProjects = [
  {
    title: 'Doctoral Research (In Progress)',
    problem: 'Original research in the field of organizational leadership and analytics.',
    approach: 'Details will be shared after defense and publication.',
    result: '',
    img: researchDoctoralPoster,
    link: '#',
    linkLabel: 'In Progress',
    details: 'Tools: Python, pandas, scikit-learn. Challenge: Conducting comprehensive research and analyzing complex data.',
    skills: ['Python', 'pandas', 'scikit-learn']
  },
  {
    title: 'AI Ethics and Responsible Machine Learning',
    problem: 'How can organizations deploy AI ethically and responsibly?',
    approach: 'Researching frameworks and best practices for ethical AI deployment.',
    result: 'Focus on bias mitigation and transparency.',
    img: researchAiEthicsPoster,
    link: '#',
    linkLabel: 'Coming Soon',
    details: 'Tools: Python, pandas, scikit-learn. Challenge: Identifying ethical AI frameworks and best practices.',
    skills: ['Python', 'pandas', 'scikit-learn']
  },
  {
    title: 'Explainable AI for Healthcare',
    problem: 'How can we make deep learning models interpretable for clinical decision support?',
    approach: 'Developing interpretable models for transparency and trust in medical AI.',
    result: '',
    img: researchExplainableHealthcarePoster,
    link: '#',
    linkLabel: 'Coming Soon',
    details: 'Tools: Python, pandas, scikit-learn. Challenge: Developing interpretable models for medical AI.',
    skills: ['Python', 'pandas', 'scikit-learn']
  },
  {
    title: 'AI Driven Employee Engagement Analytics',
    problem: 'How can machine learning improve employee engagement and organizational performance?',
    approach: 'Exploring analytics and ML for measuring and predicting engagement.',
    result: '',
    img: researchEmployeeEngagementPoster,
    link: '#',
    linkLabel: 'Coming Soon',
    details: 'Tools: Python, pandas, scikit-learn. Challenge: Measuring and predicting employee engagement in a large organization.',
    skills: ['Python', 'pandas', 'scikit-learn']
  }
];

// Web Development (app-focused cards)
const webDevProjects = [
  {
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
  {
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
];

// Mobile Applications (app-focused cards)
const mobileApps = [
  {
    title: 'Maris',
    tagline: 'Cognitive behavioral tool for ADHD brains—when willpower isn\'t enough.',
    features: [
      'Intent-based friction: Type why you need to unlock (10-second pause activates rational brain before impulse hijacks)',
      'Strict Mode: 5-second delay before quitting (gives working memory time to catch up with impulse)',
      'Visually Quiet "Liquid Glass" UI: Morphing gradients and soft glass elements reduce sensory overload',
      'Available on iOS and Android: Native mobile apps for both platforms',
      'CBT-based intervention: Rewires automatic dopamine response over time, not just blocking'
    ],
    stack: ['React Native', 'Expo', 'TypeScript', 'Supabase', 'RevenueCat', 'Skia', 'Reanimated', 'Screen Time API', 'Android Accessibility Service'],
    images: [
      { src: marisHome, alt: 'Maris home screen with Deep Work session card' },
      { src: marisIntent, alt: 'Maris intent-based unlocking screen' },
      { src: marisTimer, alt: 'Maris active timer screen showing Brainstorming Session' }
    ],
    link: 'https://trymaris.com',
    linkLabel: 'Visit Website',
  },
];

function Work() {
  const [activeTab, setActiveTab] = useState('apps');
  const [expandedIdx, setExpandedIdx] = useState(null);

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

  let projects = [];
  if (activeTab === 'ds') projects = dataScienceProjects;
  else if (activeTab === 'da') projects = dataAnalysisProjects;
  else if (activeTab === 'bi') projects = biProjects;
  else if (activeTab === 'nlp') projects = nlpProjects;
  else if (activeTab === 'research') projects = researchProjects;
  // web and apps tabs use distinct renderer

  // General CTA text and link
  const generalCTA = {
    text: 'Ready to discuss how these solutions can transform your business? Let\'s explore custom analytics solutions tailored to your needs.',
    link: '/contact',
    label: 'Start Your Project'
  };

  return (
    <>
      <HeadMetadata
        title="Portfolio"
        description="Explore Ted Dickey's portfolio of production-ready web apps, mobile applications, AI/ML solutions, analytics platforms, and research projects that deliver measurable business impact."
        canonical="/work"
        keywords="portfolio, web apps, mobile apps, AI/ML solutions, Economic KPI Pulse, Movie Explorer, Equity Screener, Maris, CNN image classifier, business intelligence projects"
        schema={personSchema}
      />
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight font-headline">
          Portfolio of
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
            Data, AI, and Web Solutions
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed font-body">
          Explore real‑world projects across Web Development, Mobile Applications, AI/ML, Data Science, Business Intelligence, and NLP—focused on shipping practical, production‑ready outcomes.
        </p>
      </section>
      {/* Modern Tab Navigation */}
      <section className="mb-16">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map(tab => (
            <button
              key={tab.key}
              className={`px-8 py-4 rounded-2xl text-button transition-all duration-300 border-2 ${
                activeTab === tab.key 
                  ? 'bg-gradient-to-r from-brand-primary to-brand-secondary text-white border-brand-primary shadow-lg transform hover:scale-105' 
                  : 'bg-card dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-blue-400 hover:shadow-md hover:bg-blue-50 dark:hover:bg-gray-700'
              }`}
              onClick={() => { setActiveTab(tab.key); setExpandedIdx(null); }}
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
      {/* Project Grid */}
      {activeTab !== 'web' && activeTab !== 'apps' ? (
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" id={`tabpanel-${activeTab}`} role="tabpanel" aria-labelledby={`tab-${activeTab}`}>
            {projects.map((proj, idx) => (
              <Card
                key={idx}
                className="cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 hover:shadow-xl transition-shadow group"
                onClick={() => setExpandedIdx(expandedIdx === idx ? null : idx)}
                tabIndex={0}
                role="button"
                aria-label={`Expand details for ${proj.title}`}
                aria-expanded={expandedIdx === idx}
                aria-labelledby={`proj-title-${idx}`}
                onKeyDown={e => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setExpandedIdx(expandedIdx === idx ? null : idx);
                  }
                }}
              >
                {/* Project Image */}
                <div className={`relative ${proj.imageHeight || 'h-48'} bg-muted/40 overflow-hidden rounded-t-2xl flex items-center justify-center ${proj.imagePadding || 'p-4'} mt-3`}>
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-primary/30 to-brand-secondary/30" aria-hidden="true" />
                  <ImageWithSkeleton
                    src={proj.img}
                    alt={proj.title}
                    className="h-full w-full object-contain"
                  />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Skill Badges */}
                  <div className="flex flex-wrap gap-2 mt-2 mb-3">
                    {proj.skills && proj.skills.map((skill, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-badge">
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Project Title */}
                  <h3 id={`proj-title-${idx}`} className="text-headline-3 text-gray-900 dark:text-white mb-3 font-headline">{proj.title}</h3>

                  {/* Problem Statement */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Challenge</h4>
                    <p className={`text-gray-600 dark:text-gray-300 leading-relaxed ${expandedIdx === idx ? '' : 'line-clamp-3'}`}>{proj.problem}</p>
                  </div>

                  {/* Approach */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Solution</h4>
                    <p className={`text-gray-600 dark:text-gray-300 leading-relaxed ${expandedIdx === idx ? '' : 'line-clamp-3'}`}>{proj.approach}</p>
                  </div>

                  {/* Result */}
                  {proj.result && (
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Impact</h4>
                      <p className={`text-gray-600 dark:text-gray-300 leading-relaxed ${expandedIdx === idx ? '' : 'line-clamp-3'}`}>{proj.result}</p>
                    </div>
                  )}

                  {/* Project Link and Expand Button */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <a
                        href={proj.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-brand-primary to-brand-secondary text-white rounded-xl text-button hover:from-brand-accent hover:to-brand-accent-alt hover:-translate-y-1 hover:shadow-xl active:translate-y-0 active:shadow-md transition-all duration-300 shadow-lg font-headline"
                        onClick={e => e.stopPropagation()}
                        aria-label={`Open project: ${proj.title} repository`}
                      >
                        {/* Repo CTA */}{proj.linkLabel}
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                      {proj.demoLink && (
                        <a
                          href={proj.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-6 py-3 bg-surface dark:bg-gray-800 text-blue-600 dark:text-blue-300 border-2 border-blue-300 dark:border-blue-600 rounded-xl text-button hover:bg-blue-50 dark:hover:bg-gray-700 hover:-translate-y-1 hover:shadow-xl active:translate-y-0 active:shadow-md transition-all duration-300 font-headline"
                          onClick={e => e.stopPropagation()}
                          aria-label={`Open ${proj.title} live demo`}
                        >
                          {proj.demoLabel}
                          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                    </div>
                    {proj.details && (
                      <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                        <span className="mr-2">{expandedIdx === idx ? 'Hide Details' : 'Show Details'}</span>
                        <svg className={`w-5 h-5 transition-transform duration-300 ${expandedIdx === idx ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Expanded Details */}
                  {expandedIdx === idx && proj.details && (
                    <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Technical Details</h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{proj.details}</p>
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </section>
      ) : activeTab === 'web' ? (
        <section className="mb-16" id={`tabpanel-${activeTab}`} role="tabpanel" aria-labelledby={`tab-${activeTab}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {webDevProjects.map((app, idx) => (
              <Card key={idx} className="focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 hover:shadow-xl transition-shadow">
                {/* Poster */}
                <div className={`relative ${app.imageHeight || 'h-48'} bg-muted/40 overflow-hidden rounded-t-2xl flex items-center justify-center p-4 mt-3`}>
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-primary/30 to-brand-secondary/30" aria-hidden="true" />
                  <ImageWithSkeleton
                    src={app.img}
                    alt={app.alt}
                    className="h-full w-full object-contain"
                  />
                </div>
                {/* Content */}
                <div className="p-6">
                  {/* Stack badges (consistent placement and color with other tabs) */}
                  <div className="flex flex-wrap gap-2 mt-2 mb-3">
                    {app.stack.map((s, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-badge">
                        {s}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-headline-3 text-gray-900 dark:text-white mb-2 font-headline">{app.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{app.tagline}</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 mb-4">
                    {app.features.map((f, i) => (<li key={i}>{f}</li>))}
                  </ul>
                  <div className="flex items-center gap-3">
                    <a
                      href={app.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-brand-primary to-brand-secondary text-white rounded-xl font-semibold hover:from-brand-accent hover:to-brand-accent-alt hover:-translate-y-1 hover:shadow-xl active:translate-y-0 active:shadow-md transition-all duration-300 shadow-lg text-base sm:text-lg font-headline"
                      aria-label={`Open ${app.title} live app`}
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
                        className="inline-flex items-center px-6 py-3 bg-surface dark:bg-gray-800 text-blue-600 dark:text-blue-300 border-2 border-blue-300 dark:border-blue-600 rounded-xl hover:bg-blue-50 dark:hover:bg-gray-700 hover:-translate-y-1 hover:shadow-xl active:translate-y-0 active:shadow-md transition-all duration-300 text-base sm:text-lg font-headline"
                        aria-label={`Open ${app.title} repository`}
                      >
                        {app.repoLabel || 'View Repo'}
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      ) : (
        <section className="mb-16" id={`tabpanel-${activeTab}`} role="tabpanel" aria-labelledby={`tab-${activeTab}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mobileApps.map((app, idx) => (
              <Card key={idx} className="focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 hover:shadow-xl transition-shadow">
                {/* Poster - Support multiple images for mobile apps */}
                {app.images ? (
                  <div className="relative bg-muted/40 overflow-hidden rounded-t-2xl mt-3">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-primary/30 to-brand-secondary/30 z-10" aria-hidden="true" />
                    <div className="p-3 flex justify-center">
                      <div className="flex gap-2 overflow-x-auto no-scrollbar">
                        {app.images.map((image, imgIdx) => (
                          <div key={imgIdx} className="flex-shrink-0 w-36 h-64 flex items-center justify-center">
                            <ImageWithSkeleton
                              src={image.src}
                              alt={image.alt}
                              className="h-full w-auto object-contain rounded-lg"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className={`relative ${app.imageHeight || 'h-48'} bg-muted/40 overflow-hidden rounded-t-2xl flex items-center justify-center p-4 mt-3`}>
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-primary/30 to-brand-secondary/30" aria-hidden="true" />
                    <ImageWithSkeleton
                      src={app.img}
                      alt={app.alt}
                      className="h-full w-full object-contain"
                    />
                  </div>
                )}
                {/* Content */}
                <div className="p-6">
                  {/* Stack badges (consistent placement and color with other tabs) */}
                  <div className="flex flex-wrap gap-2 mt-2 mb-3">
                    {app.stack.map((s, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-badge">
                        {s}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-headline-3 text-gray-900 dark:text-white mb-2 font-headline">{app.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{app.tagline}</p>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                    {app.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0">✓</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-3">
                    <a
                      href={app.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-brand-primary to-brand-secondary text-white rounded-xl font-semibold hover:from-brand-accent hover:to-brand-accent-alt hover:-translate-y-1 hover:shadow-xl active:translate-y-0 active:shadow-md transition-all duration-300 shadow-lg text-base sm:text-lg font-headline"
                      aria-label={`Open ${app.title} live app`}
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
                        className="inline-flex items-center px-6 py-3 bg-surface dark:bg-gray-800 text-blue-600 dark:text-blue-300 border-2 border-blue-300 dark:border-blue-600 rounded-xl hover:bg-blue-50 dark:hover:bg-gray-700 hover:-translate-y-1 hover:shadow-xl active:translate-y-0 active:shadow-md transition-all duration-300 text-base sm:text-lg font-headline"
                        aria-label={`Open ${app.title} repository`}
                      >
                        {app.repoLabel || 'View Repo'}
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      )}
      {/* Modern CTA Section */}
      <CTASection
        title="Ready to Transform Your Business?"
        description={generalCTA.text}
        primaryButton={{
          href: generalCTA.link,
          text: generalCTA.label,
          ariaLabel: generalCTA.label
        }}
        secondaryButton={{
          href: "/about",
          text: "Learn More About Me",
          ariaLabel: "Learn more about Ted's experience"
        }}
      />
    </div>
    </>
  );
}

export default Work;