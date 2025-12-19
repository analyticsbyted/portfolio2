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

export const tabs = [
    { name: 'Products', key: 'products' },
    { name: 'Web Engineering', key: 'web' },
    { name: 'Data & Analytics', key: 'data' },
    { name: 'Research & Operations', key: 'research' },
];

export const tabSubtitles = {
    products: 'Mobile apps and featured web platforms—shipped to production and available to use today.',
    web: 'Modern web applications built with React, TypeScript, and production-grade tooling.',
    data: 'Data science models, machine learning, and analytics projects—from clustering to deep learning.',
    research: 'Academic research and operations analysis—exploring AI ethics, healthcare, and process optimization.'
};

// Products Tab: Mobile apps + Featured web apps
export const products = [
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
export const webEngineeringProjects = [
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
export const dataAnalyticsProjects = [
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
export const researchOperationsProjects = [
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
