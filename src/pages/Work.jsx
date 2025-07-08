import { useState } from 'react';
import PageTitle from '../components/PageTitle';
import PageSubtitle from '../components/PageSubtitle';
import Button from '../components/Button';

// Import images for project visuals
import customerSegmentsImg from '../assets/certifications/customerSegments.png';
import featureImportanceRFImg from '../assets/certifications/featureImportanceRF.png';
import sentAnalysisWearablesImg from '../assets/certifications/sentAnalysis_wearables.png';
import randomforestImg from '../assets/certifications/randomforest.png';
import dataAnalysisPythonImg from '../assets/certifications/data-analysis-python.png';
import dataVisualizationPythonImg from '../assets/certifications/data-visualization-python.png';
import weeklyDemandImg from '../assets/certifications/weeklyDemand.png';
import procCapacity1Img from '../assets/certifications/procCapacity1.png';
import flowtime6Img from '../assets/certifications/flowtime6.png';
import procDistributionImg from '../assets/certifications/procDistribution.png';
import imdbTableauImg from '../assets/certifications/imdbTableau.png';
import logoTableauImg from '../assets/certifications/logo-tableau.png';
import vaderImg from '../assets/certifications/vader.png';
import robertaImg from '../assets/certifications/roberta.png';
import pythonForDataScienceImg from '../assets/certifications/python-for-data-science.png';
import ibmCloudPakDataScienceImg from '../assets/certifications/ibm-cloud-pak-data-science.png';
import handsOnEssentialsDataApplicationsImg from '../assets/certifications/hands-on-essentials-data-applications.png';
import ibmConsultingCommunicatingValueImg from '../assets/certifications/ibm-consulting-communicating-value.png';

const tabs = [
  { name: 'Data Science', key: 'ds' },
  { name: 'Data Analysis / Operations', key: 'da' },
  { name: 'Business Intelligence / Dashboards', key: 'bi' },
  { name: 'NLP & Text Analytics', key: 'nlp' },
  { name: 'Research', key: 'research' },
];

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
    title: 'Deep Learning Project (Placeholder)',
    problem: 'Coming soon: A deep learning project in image classification or NLP.',
    approach: 'Stay tuned for updates!',
    result: '',
    img: randomforestImg,
    link: '#',
    linkLabel: 'Coming Soon',
    details: '',
    skills: ['Deep Learning']
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
    img: logoTableauImg,
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
    img: robertaImg,
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
    img: pythonForDataScienceImg,
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
    img: ibmCloudPakDataScienceImg,
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
    img: handsOnEssentialsDataApplicationsImg,
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
    img: ibmConsultingCommunicatingValueImg,
    link: '#',
    linkLabel: 'Coming Soon',
    details: 'Tools: Python, pandas, scikit-learn. Challenge: Measuring and predicting employee engagement in a large organization.',
    skills: ['Python', 'pandas', 'scikit-learn']
  }
];

function Work() {
  const [activeTab, setActiveTab] = useState('ds');
  const [expandedIdx, setExpandedIdx] = useState(null);

  let projects = [];
  if (activeTab === 'ds') projects = dataScienceProjects;
  else if (activeTab === 'da') projects = dataAnalysisProjects;
  else if (activeTab === 'bi') projects = biProjects;
  else if (activeTab === 'nlp') projects = nlpProjects;
  else if (activeTab === 'research') projects = researchProjects;

  // General CTA text and link
  const generalCTA = {
    text: 'Contact to discuss consulting, collaboration, or custom analytics solutions.',
    link: '/contact',
    label: 'Contact Now'
  };

  return (
    <section className="max-w-4xl mx-auto px-4">
      <PageTitle>Work</PageTitle>
      <PageSubtitle>Explore projects in Data Science, Data Analysis, Business Intelligence, and NLP/Text Analytics</PageSubtitle>
      <div className="flex gap-2 md:gap-4 overflow-x-auto no-scrollbar mb-8 py-2" style={{ WebkitOverflowScrolling: 'touch' }} role="tablist" aria-label="Project categories">
        {tabs.map(tab => (
          <button
            key={tab.key}
            className={`min-w-[8rem] px-4 py-2 rounded-full font-medium transition border text-base md:text-sm ${activeTab === tab.key ? 'bg-blue-600 text-white border-blue-600 dark:bg-blue-700' : 'bg-[#F8F7F4] text-blue-600 border-blue-200 hover:bg-blue-50 dark:bg-gray-900 dark:text-blue-300 dark:border-gray-700 dark:hover:bg-gray-800'}`}
            onClick={() => { setActiveTab(tab.key); setExpandedIdx(null); }}
            style={{ fontSize: '1rem' }}
            role="tab"
            aria-selected={activeTab === tab.key}
            aria-controls={`tabpanel-${tab.key}`}
            id={`tab-${tab.key}`}
            tabIndex={activeTab === tab.key ? 0 : -1}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="space-y-4" id={`tabpanel-${activeTab}`} role="tabpanel" aria-labelledby={`tab-${activeTab}`}>
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className={`p-6 rounded-lg border bg-[#F8F7F4] shadow-sm dark:bg-gray-900 dark:border-gray-700 flex flex-col md:flex-row gap-4 items-center transition-all duration-200 cursor-pointer hover:shadow-md ${expandedIdx === idx ? 'ring-2 ring-blue-400' : ''}`}
            onClick={() => setExpandedIdx(expandedIdx === idx ? null : idx)}
            tabIndex={0}
            role="button"
            aria-label={`Expand details for ${proj.title}`}
            aria-expanded={expandedIdx === idx}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                setExpandedIdx(expandedIdx === idx ? null : idx);
              }
            }}
          >
            <img src={proj.img} alt={proj.title} className="w-32 h-32 object-contain rounded mb-2 md:mb-0 md:mr-4 border flex-shrink-0" />
            <div className="flex-1 text-left">
              {/* Skill/tool badges */}
              <div className="flex flex-wrap gap-2 mb-2">
                {proj.skills && proj.skills.map((skill, i) => (
                  <span key={i} className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold border border-blue-200 dark:bg-blue-900 dark:text-blue-200 dark:border-blue-700">
                    {skill}
                  </span>
                ))}
              </div>
              <h2 className="text-lg font-semibold mb-1 dark:text-gray-100">{proj.title}</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-1"><span className="font-semibold">Problem:</span> {proj.problem}</p>
              <p className="text-gray-700 dark:text-gray-300 mb-1"><span className="font-semibold">Approach:</span> {proj.approach}</p>
              {proj.result && <p className="text-gray-700 dark:text-gray-300 mb-1"><span className="font-semibold">Result or Impact:</span> {proj.result}</p>}
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 px-4 py-2 rounded bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition"
                onClick={e => e.stopPropagation()}
                aria-label={`Open project: ${proj.title}`}
              >
                {proj.linkLabel}
              </a>
              {expandedIdx === idx && proj.details && (
                <div className="mt-3 p-3 bg-blue-50 dark:bg-gray-800 rounded border border-blue-200 dark:border-gray-700 text-sm text-gray-800 dark:text-gray-200">
                  {proj.details}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Button href={generalCTA.link} ariaLabel={generalCTA.label}>
          {generalCTA.label}
        </Button>
      </div>
      <p className="text-center text-gray-600 dark:text-gray-300 mt-2 text-base">{generalCTA.text}</p>
    </section>
  );
}

export default Work;