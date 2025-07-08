import { useState } from 'react';
import { AcademicCapIcon, StarIcon, TrophyIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import CTASection from '../components/CTASection';
import agileExplorer from '../assets/certifications/agile-explorer.png';
import alteryxFoundational from '../assets/certifications/alteryx-foundational-micro-credential.png';
import ibmMlSpecialist from '../assets/certifications/ibm-ml-specialist-associate.png';
import awsSAAssociate from '../assets/certifications/aws-sa-associate.png';
import msAzureDataFundamentals from '../assets/certifications/ms-azure-data-fundamentals.png';
import snowflakeDW from '../assets/certifications/snowflake-dw.png';
import pythonDataScience from '../assets/certifications/python-for-data-science.png';
import appliedDataSciencePython from '../assets/certifications/applied-data-science-with-python-level-2.png';
import deliveringBusinessValue from '../assets/certifications/delivering-business-value.png';
import awsCloudPractitioner from '../assets/certifications/aws-certified-cloud-practitioner.png';
import msCertifiedAzureFundamentals from '../assets/certifications/microsoft-certified-azure-fundamentals.png';
import msCertifiedAzureAIFundamentals from '../assets/certifications/microsoft-certified-azure-ai-fundamentals.png';
import sasProgramming1 from '../assets/certifications/sas-programming-1-essentials.png';
import awsPartnerTechnical from '../assets/certifications/aws-partner-technical-accredited.png';
import dataVizPython from '../assets/certifications/data-visualization-python.png';
import dataAnalysisPython from '../assets/certifications/data-analysis-python.png';
import cloudPakData35 from '../assets/certifications/ibm-cloud-pak-for-data.png';
import communicatingValue from '../assets/certifications/ibm-consulting-communicating-value.png';
import ibmAgileExplorer from '../assets/certifications/ibm-agile-explorer.png';
import cloudPakDataScientist from '../assets/certifications/ibm-cloud-pak-data-scientist.png';
import alteryxDesignerCore from '../assets/certifications/alteryx-designer-core.png';
import enterpriseDesign from '../assets/certifications/enterprise-design-thinking-practitioner.png';
import handsOnEssentials from '../assets/certifications/hands-on-essentials-data-applications.png';
import dataSharing from '../assets/certifications/hands-on-essentials-data-sharing.png';
import cloudPakDataScience from '../assets/certifications/ibm-cloud-pak-data-science.png';
import garageEssentials from '../assets/certifications/ibm-garage-essentials.png';
import garageFoundation from '../assets/certifications/ibm-garage-foundation.png';
import logoTableau from '../assets/certifications/logo-tableau.png';
import harvardBusiness from '../assets/certifications/hbs.png';
import React from 'react'; // Added for useEffect

const certificationsData = [
  {
    id: 1,
    name: "Agile Explorer",
    categories: ["Agile", "Project Management"],
    issuingOrganization: "IBM-SkillsBuild",
    badgeImage: agileExplorer,
    verificationLink: "https://www.credly.com/badges/4952def5-059d-4711-953c-1397c66def43/public_url",
    description: "Description about the certification goes here.",
  },
  {
    id: 2,
    name: "IBM Machine Learning Specialist - Associate",
    categories: ["Data Science", "Machine Learning"],
    issuingOrganization: "IBM",
    badgeImage: ibmMlSpecialist,
    verificationLink: "https://www.credly.com/badges/0a351d5c-f078-4545-bdb2-48549ac7bf45/public_url",
    description: "The successful badge earner understands the requirements, terms and concepts associated with successfully developing and deploying AI solutions in their enterprises. The earner can install and use tools like Python, Jupyter Notebooks, SQL, and Docker, as well as connecting to various open source data sources. Earners are confident separating fact from fiction (buzzwords) in AI and Cloud, and equipped to analyze and discuss these technologies critically.",
  },
  {
    id: 3,
    name: "AWS Certified Solutions Architect - Associate",
    categories: ["AWS", "Project Management"],
    issuingOrganization: "AWS",
    badgeImage: awsSAAssociate,
    verificationLink: "https://www.credly.com/badges/edc5eb3b-6ac6-4656-9750-7572b9a5bf6c/public_url",
    description: "Earners of this certification have a comprehensive understanding of AWS services and technologies. They demonstrated the ability to build secure and robust solutions using architectural design principles based on customer requirements. Badge owners are able to strategically design well-architected distributed systems that are scalable, resilient, efficient, and fault-tolerant.",
  },
  {
    id: 4,
    name: "Alteryx Foundation Micro Credential",
    categories: ["Data Analytics", "Alteryx", "Cosmos DB", "Data Tools", "Data Engineering"],
    issuingOrganization: "Alteryx",
    badgeImage: alteryxFoundational,
    verificationLink: "https://www.credly.com/badges/66bcc8d2-2fab-4e84-9216-c5c566e38ac7/public_url",
    description: "Earners of this micro-credential have a basic understanding of data analytics concepts and key Designer functionality. They can identify data types and data formats as well as recognize the foundational elements of Alteryx Designer and associate the most used tools with their functionality.",
  },
  {
    id: 21,
    name: "Alteryx Designer Core - General Knowledge",
    categories: ["Alteryx",  "Data Preparation", "workfloes", "Machine Learning", "Cloud", "Docker"],
    issuingOrganization: "Alteryx",
    badgeImage: alteryxDesignerCore, 
    verificationLink: "https://www.credly.com/badges/659f876b-800f-4150-a040-f2a665d78d64/public_url",
    description: "Earners of this certification have a thorough understanding of the Alteryx Designer environment. They are able to navigate the user interface, find Designer resources, identify file formats, share and export workflows, and optimize workflows. This micro-certification can be stacked with the Alteryx Designer Core Micro-Credentials Data Preparation, Data Manipulation, and Data Transformation to achieve the full Designer Core Certification.",
  },
  {
    id: 5,
    name: "Microsoft Certified: Azure Data Fundamentals",
    categories: ["Data Analytics", "Azure", "Microsoft", "Data Science", "Data Warehouse","Azure Synapse Analytics", "Azure Databricks"],
    issuingOrganization: "Microsoft",
    badgeImage: msAzureDataFundamentals,
    verificationLink: "https://www.credly.com/badges/da1b9066-a4a5-4fa5-bba3-46acb9f02ef8/public_url",
    description: "Earners of the Azure Data Fundamentals certification have demonstrated foundational knowledge of core data concepts and how they are implemented using Microsoft Azure data services.",
  },
  {
    id: 6,
    name: "Snowflake Essentials: Data Warehousing",
    categories: ["Database",  "Data Science", "Data Warehouse"],
    issuingOrganization: "Snowflake",
    badgeImage: snowflakeDW,
    verificationLink: "https://www.credly.com/badges/48640c20-a3cb-4c24-8c77-b22f454d67c5/public_url",
    description: "The Data Warehouse badge is the first badge in Snowflake's Hands On Essentials Series. Users earning this credential have completed coursework, passed a written exam and scored 90% or better on submitted project work. Topics covered: User Roles, Navigation, Creating Database Objects, Virtual Warehouse creation and configuration, loading and querying CSV and JSON data.",
  },
  {
    id: 7,
    name: "Python for Data Science",
    categories: ["Programming",  "Data Science", "Python", "Data Analytics", "Jupyter"],
    issuingOrganization: "IBM",
    badgeImage: pythonDataScience,
    verificationLink: "https://www.credly.com/badges/cec32f6a-c4bb-4c9a-b706-7c92a0cc5a04/public_url",
    description: "The badge earner is able to write their own Python scripts and perform basic hands-on data analysis using IBM's Jupyter-based lab environment.",
  },
  {
    id: 8,
    name: "Applied Data Science with Python - Level 2",
    categories: ["Programming",  "Data Science", "Python", "Data Analytics", "Visualization", "matplotlib"],
    issuingOrganization: "IBM",
    badgeImage: appliedDataSciencePython, 
    verificationLink: "https://www.credly.com/badges/87d25096-01cb-4a61-8324-d70b2711185f/public_url",
    description: "This badge earner is able to code in Python for data science. They can analyze and visualize data with Python with packages like scikit-learn, matplotlib and bokeh.",
  },
  {
    id: 9,
    name: "IBM Consulting - Delivering Business Value",
    categories: ["Project management",  "Consulting"],
    issuingOrganization: "IBM",
    badgeImage: deliveringBusinessValue, 
    verificationLink: "https://www.credly.com/badges/87d25096-01cb-4a61-8324-d70b2711185f/public_url",
    description: "The badge earner is able to deliver business value by performing Consulting Discipline activities using well established IBM assets, methods and engagement practices. IBM is a leader in transforming industries, societies and the workplace through data, cloud, social and mobile utilising world class IBM Consulting experience.",
  },
  {
    id: 10,
    name: "AWS Certified Cloud Practitioner",
    categories: ["Cloud",  "Cloud Services", "Cloud Platform", "Cloud Computing"],
    issuingOrganization: "AWS",
    badgeImage: awsCloudPractitioner, 
    verificationLink: "https://www.credly.com/badges/4efd9378-9a6f-4a84-bf05-bee24becad6c/public_url",
    description: "Earners of this certification have a fundamental understanding of IT services and their uses in the AWS Cloud. They demonstrated cloud fluency and foundational AWS knowledge. Badge owners are able to identify essential AWS services necessary to set up AWS-focused projects.",
  },
  {
    id: 11,
    name: "Microsoft Certified: Azure Fundamentals",
    categories: ["Cloud",  "Cloud Services", "Cloud Platform", "Cloud Computing"],
    issuingOrganization: "Microsoft",
    badgeImage: msCertifiedAzureFundamentals, 
    verificationLink: "https://www.credly.com/badges/b8bc667c-062c-4026-8b54-faf301055dec/public_url",
    description: "Earners of the Azure Fundamentals certification have demonstrated foundational level knowledge of cloud services and how those services are provided with Microsoft Azure.",
  },
  {
    id: 12,
    name: "Microsoft Certified: Azure AI Fundamentals",
    categories: ["Cloud",  "Azure Machine Learning", "Artificial Intelligence", "Cognitive Services"],
    issuingOrganization: "Microsoft",
    badgeImage: msCertifiedAzureAIFundamentals, 
    verificationLink: "https://www.credly.com/badges/da8468ed-ff6b-48f6-b67b-964dff928704/public_url",
    description: "Earners of the Azure AI Fundamentals certification have demonstrated foundational knowledge of machine learning (ML) and artificial intelligence (AI) concepts and related Microsoft Azure services.",
  },
  {
    id: 13,
    name: "SAS Programming 1: Essentials",
    categories: ["SAS",  "programming", "Base SAS",],
    issuingOrganization: "SAS",
    badgeImage: sasProgramming1, 
    verificationLink: "https://www.credly.com/badges/da8468ed-ff6b-48f6-b67b-964dff928704/public_url",
    description: "This course is for users who want to learn how to write SAS programs to access, explore, prepare, and analyze data. It is the entry point to learning SAS programming for data science, machine learning, and artificial intelligence. It is a prerequisite to many other SAS courses.",
  },
  {
    id: 14,
    name: "AWS Partner: Technical Accredited",
    categories: ["AWS",  "AWS Cloud", "AWS Partner",],
    issuingOrganization: "AWS",
    badgeImage: awsPartnerTechnical, 
    verificationLink: "https://www.credly.com/badges/da8468ed-ff6b-48f6-b67b-964dff928704/public_url",
    description: "Earners of this badge are AWS Partners who have developed fundamental, technical knowledge of AWS cloud computing, global infrastructure, services, solutions, migration and security.",
  },
  {
    id: 15,
    name: "Data Visualization using Python",
    categories: ["Python",  "data visualization", "business intelligence",],
    issuingOrganization: "IBM",
    badgeImage: dataVizPython, 
    verificationLink: "https://www.credly.com/badges/34ef6b01-3e53-4ec7-acda-ec5de45f417d/public_url",
    description: "This badge earner understands how Python libraries such as Matplotib, Seaborn and Folium are used for the creation and customization of graphical representation outputs for both small and large-scale data sets.",
  },
  {
    id: 16,
    name: "Data Analysis using Python",
    categories: ["Python",  "data analysis", "data analytics", "Jupyter", "Machine Learning"],
    issuingOrganization: "IBM",
    badgeImage: dataAnalysisPython, 
    verificationLink: "https://www.credly.com/badges/31ed2a1d-884a-420c-9379-00ce11811450/public_url",
    description: "This badge earner understands the essential steps necessary to analyze data in Python using multi-dimensional arrays, manipulating DataFrames in pandas, using SciPy library of mathematical routines and performing machine learning using scikit-learn. This includes hands-on demonstration using Jupyter notebook in JupyterLab Python tools.",
  },
  {
    id: 17,
    name: "IBM Cloud Pak for Data V3.5.x Essentials",
    categories: ["IBM Cloud Pak",  "data sources", "ETL",],
    issuingOrganization: "IBM",
    badgeImage: cloudPakData35, 
    verificationLink: "https://www.credly.com/badges/ec8f694e-52e6-46fe-b00a-ddfad14219cd/public_url",
    description: "The successful badge earner can comprehend the platform and architecture of IBM Cloud Pak for Data, and the workflow and collaboration between the personas. The earner can access the various supported data sources, and catalog, govern, and perform extract, transform, and load (ETL) on that data. The badge earner can perform basic administrative tasks, set up projects, and analyze the data by using or constructing a wide range of components: notebooks, RStudio, and machine learning models.",
  },
  {
    id: 18,
    name: "IBM Consulting - Communicating Value",
    categories: ["Communication",  "Presentations", "Consulting",],
    issuingOrganization: "IBM",
    badgeImage: communicatingValue, 
    verificationLink: "https://www.credly.com/badges/68797612-3207-4419-b4fa-6f2ccdfc92c5/public_url",
    description: "The badge earner is able to communicate value by performing Consulting Discipline activities using well established IBM assets, methods and engagement practices. IBM is a leader in transforming industries, societies and the workplace through data, cloud, social and mobile utilising world class IBM Consulting experience.",
  },
  {
    id: 19,
    name: "IBM Agile Explorer",
    categories: ["Project Management",  "Agile", "Consulting",],
    issuingOrganization: "IBM",
    badgeImage: ibmAgileExplorer, 
    verificationLink: "https://www.credly.com/badges/99b6fef1-11c6-4877-8dbc-c497677b3530/public_url",
    description: "The Agile Explorer has a foundational understanding of Agile values, principles, and practices that allows them to initiate an Agile conversation with co-workers and colleagues. This badge is available to IBM employees only.",
  },
  {
    id: 20,
    name: "IBM Cloud Pak for Data V3.5.x Data Scientist",
    categories: ["Data Scientist",  "Governance", "Microservice", "Machine Learning", "Cloud", "Docker"],
    issuingOrganization: "IBM",
    badgeImage: cloudPakDataScientist, 
    verificationLink: "https://www.credly.com/badges/34a96a03-5205-40a2-98c6-31ee2daea22b/public_url",
    description: "The successful badge earner understands the core technologies, platform, and architecture of IBM Cloud Pak for Data. The earner knows how to collaborate, build and deploy analytics models, and knows the tasks of the different built-in roles in IBM Cloud Pak for Data, with a special emphasis on the tasks performed by the data scientist in a real-world, working environment.",
  },
  {
    id: 22,
    name: "Enterprise Design Thinking Practitioner",
    categories: ["Design",  "User Experience", "User Research", "Machine Learning", "Cloud", "Docker"],
    issuingOrganization: "IBM",
    badgeImage: enterpriseDesign, 
    verificationLink: "https://www.credly.com/badges/b2003fd9-7086-4437-915c-b873b4a36a90/public_url",
    description: "The earner has acquired knowledge of applying Enterprise Design Thinking and its value. As a Practitioner, the badge earner finds opportunities to try it out in their every day work.",
  },
  {
    id: 23,
    name: "Hands On Essentials - Data Applications",
    categories: ["Design",  "User Experience", "User Research", "Machine Learning", "Cloud", "Docker"],
    issuingOrganization: "Snowflake",
    badgeImage: handsOnEssentials, 
    verificationLink: "https://www.credly.com/badges/6449f5e1-d0a1-45c3-965b-d15426c73290/public_url",
    description: "The Data Applications badge is the second badge in Snowflake's Hands On Essentials Series. Users earning this credential have demonstrated an ability to use Python to read from and write to their Snowflake database tables. Badge earners after April 2022 built a Streamlit application which can be viewed as part of their GitHub repository. Please contact the badge earner for details. Badge Earners Prior to May 2022 built an IOT data pipeline using SoftwareAG tools.",
  },
  {
    id: 24,
    name: "Hands On Essentials - Data Sharing",
    categories: ["Database", ],
    issuingOrganization: "Snowflake",
    badgeImage: dataSharing, 
    verificationLink: "https://www.credly.com/badges/94914ac5-b702-4f94-896e-857047f0bead/public_url",
    description: "The Data Sharing badge is the third badge in Snowflake's Hands On Essentials Series. Users earning this credential have demonstrated an ability to use Snowflake's three data sharing technologies, including: Direct Sharing, the Snowflake Data Marketplace, and Snowflake's Private Data Exchanges.",
  },
  {
    id: 25,
    name: "IBM Cloud Pak for Data V3.5.x - Data Science",
    categories: ["Data Science", "Data Analyst", "Data Engineer", "Business Analyst", ],
    issuingOrganization: "IBM",
    badgeImage: cloudPakDataScience, 
    verificationLink: "https://www.credly.com/badges/776973b0-17fe-453e-bcb3-b8c14549a9ed/public_url",
    description: "The successful badge earner knows how to use Data Refinery, AutoAI Experiment, notebooks, JupyterLab, and is familiar with projects, jobs, connected data, analytics models, and deployment. The earner will also know how to collaborate with others on the Cloud Pak for Data 3.5 platform.",
  },
  {
    id: 26,
    name: "IBM Garage Essentials",
    categories: ["Agile", "Design Thinking", "Methodology", "IBM Garage"],
    issuingOrganization: "IBM",
    badgeImage: garageEssentials, 
    verificationLink: "https://www.credly.com/badges/f328ee45-cb16-4a02-a544-653393b7b691/public_url",
    description: "This badge earner is able to demonstrate understanding of IBM Garage Methodology, assets and platforms.",
  },
  {
    id: 27,
    name: "IBM Garage Foundation",
    categories: ["Agile", "Design Thinking", "Methodology", "IBM Garage"],
    issuingOrganization: "IBM",
    badgeImage: garageFoundation, 
    verificationLink: "https://www.credly.com/badges/eec90555-27bc-4c0b-9062-02f8868e07df/public_url",
    description: "This badge earner has gained a basic understanding and skill necessary to perform in an IBM Garage engagement.",
  },
  {
    id: 28,
    name: "Desktop 1: Fundamentals",
    categories: ["Data Visualization", "Business Intelligence", "Dashboards",],
    issuingOrganization: "Tableau",
    badgeImage: logoTableau, 
    verificationLink: "http://verify.skilljar.com/c/rvmqhai52mr6",
    description: "This badge earner has gained a basic understanding and skill necessary to perform in an IBM Garage engagement.",
  },
  {
    id: 29,
    name: "Spreadsheet Modeling",
    categories: ["Excel", "data modeling", ],
    issuingOrganization: "Harvard Business Publishing",
    badgeImage: harvardBusiness, 
    verificationLink: "https://eproduct.hbsp.harvard.edu/eproduct/product/spreadsheet_2013/content/index.html",
    description: "This badge earner has gained a basic understanding and skill necessary to perform in an IBM Garage engagement.",
  },
];

const certificationStats = [
  { label: 'Active Certifications', value: '29', icon: '🏆' },
  { label: 'Cloud Platforms', value: '3', icon: '☁️' },
  { label: 'Programming Languages', value: '3', icon: '💻' },
  { label: 'Data Science Tools', value: '10+', icon: '📊' }
];

function Certifications() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedIssuer, setSelectedIssuer] = useState('All');
  const [selectedCertification, setSelectedCertification] = useState(null);

  // Get unique categories and issuers
  const categories = Array.from(new Set(certificationsData.flatMap(cert => cert.categories))).sort();
  const issuers = Array.from(new Set(certificationsData.map(cert => cert.issuingOrganization))).sort();

  // Filter certifications
  const filteredCertifications = certificationsData.filter(cert => {
    const matchesSearch =
      cert.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.issuingOrganization.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || cert.categories.includes(selectedCategory);
    const matchesIssuer = selectedIssuer === 'All' || cert.issuingOrganization === selectedIssuer;
    return matchesSearch && matchesCategory && matchesIssuer;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
          Professional
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Certifications
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
          A comprehensive collection of industry-recognized certifications spanning Data Science, Cloud Computing, Analytics, and emerging technologies.
        </p>
      </section>

      {/* Stats Grid */}
      <section className="mb-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {certificationStats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">Explore Certifications</h2>
        <div className="flex flex-col lg:flex-row lg:space-x-6 gap-4 items-center justify-center bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="flex-1 max-w-md">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Search</label>
            <input
              type="text"
              placeholder="Search certifications..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full px-6 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-400/20 focus:border-blue-500 transition-all duration-300 text-lg"
              aria-label="Search certifications"
            />
          </div>
          <div className="flex-1 max-w-md">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Category</label>
            <select
              value={selectedCategory}
              onChange={e => setSelectedCategory(e.target.value)}
              className="w-full px-6 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-400/20 focus:border-blue-500 transition-all duration-300 text-lg"
              aria-label="Filter by category"
            >
              <option value="All">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
          <div className="flex-1 max-w-md">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Issuer</label>
            <select
              value={selectedIssuer}
              onChange={e => setSelectedIssuer(e.target.value)}
              className="w-full px-6 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-400/20 focus:border-blue-500 transition-all duration-300 text-lg"
              aria-label="Filter by issuer"
            >
              <option value="All">All Issuers</option>
              {issuers.map(issuer => (
                <option key={issuer} value={issuer}>{issuer}</option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCertifications.map(cert => (
            <div
              key={cert.id}
              className="bg-white dark:bg-gray-800 rounded-2xl border-2 border-gray-200 dark:border-gray-700 shadow-lg p-6 flex flex-col items-center cursor-pointer hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 hover:border-blue-400 dark:hover:border-blue-600 group"
              onClick={() => setSelectedCertification(cert)}
              tabIndex={0}
              role="button"
              aria-label={`View details for ${cert.name}`}
              onKeyDown={e => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setSelectedCertification(cert);
                }
              }}
            >
              <div className="w-24 h-24 mb-4 flex items-center justify-center bg-gray-50 dark:bg-gray-700 rounded-2xl p-2 group-hover:scale-110 transition-transform duration-300">
                <img src={cert.badgeImage} alt={cert.name} className="w-full h-full object-contain" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-center text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">{cert.name}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm text-center font-medium">{cert.issuingOrganization}</p>
              
              {/* Category tags */}
              <div className="flex flex-wrap gap-1 mt-3 justify-center">
                {cert.categories.slice(0, 2).map((category, i) => (
                  <span key={i} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium">
                    {category}
                  </span>
                ))}
                {cert.categories.length > 2 && (
                  <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full text-xs font-medium">
                    +{cert.categories.length - 2}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Modal */}
      {selectedCertification && (
        <Modal onClose={() => setSelectedCertification(null)}>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 max-w-2xl w-full relative border-2 border-gray-200 dark:border-gray-700">
            <button
              className="absolute top-4 right-4 w-10 h-10 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-all duration-300"
              onClick={() => setSelectedCertification(null)}
              aria-label="Close"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 flex items-center justify-center bg-gray-50 dark:bg-gray-700 rounded-2xl p-4">
                <img src={selectedCertification.badgeImage} alt={selectedCertification.name} className="w-full h-full object-contain" />
              </div>
              
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white leading-tight">{selectedCertification.name}</h2>
              
              <div className="mb-6">
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">
                  <span className="font-semibold text-gray-900 dark:text-white">Issued by:</span> {selectedCertification.issuingOrganization}
                </p>
                
                {/* Category badges */}
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  {selectedCertification.categories.map((category, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                      {category}
                    </span>
                  ))}
                </div>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed text-left">{selectedCertification.description}</p>
              
              <a
                href={selectedCertification.verificationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <TrophyIcon className="w-5 h-5 mr-2" />
                Verify Certification
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </Modal>
      )}

      {/* CTA Section */}
      <CTASection
        title="Ready to Leverage Expertise?"
        description="These certifications represent continuous learning and proven expertise across data science, cloud computing, and analytics technologies."
        primaryButton={{
          href: "/work",
          text: "See My Work",
          ariaLabel: "View Ted's portfolio projects"
        }}
        secondaryButton={{
          href: "/contact",
          text: "Let's Connect",
          ariaLabel: "Contact Ted"
        }}
      />
    </div>
  );
}

// Modal component for accessibility
function Modal({ children, onClose }) {
  // Trap focus inside modal
  React.useEffect(() => {
    const focusableSelectors = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const modal = document.getElementById('cert-modal');
    if (!modal) return;
    const focusableEls = modal.querySelectorAll(focusableSelectors);
    const firstEl = focusableEls[0];
    const lastEl = focusableEls[focusableEls.length - 1];
    function trap(e) {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstEl) {
            e.preventDefault();
            lastEl.focus();
          }
        } else {
          if (document.activeElement === lastEl) {
            e.preventDefault();
            firstEl.focus();
          }
        }
      } else if (e.key === 'Escape') {
        onClose();
      }
    }
    modal.addEventListener('keydown', trap);
    // Focus first element
    firstEl && firstEl.focus();
    return () => modal.removeEventListener('keydown', trap);
  }, [onClose]);
  // Restore focus to last focused element
  const lastActiveRef = React.useRef(document.activeElement);
  React.useEffect(() => {
    return () => {
      lastActiveRef.current && lastActiveRef.current.focus();
    };
  }, []);
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50" role="dialog" aria-modal="true" id="cert-modal">
      {children}
    </div>
  );
}

export default Certifications;