import { AcademicCapIcon, BuildingOfficeIcon, ChartBarIcon, PresentationChartBarIcon, BookOpenIcon, ClockIcon, BeakerIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import Button from '../components/Button';
import CTASection from '../components/CTASection';
import HeadMetadata from '../components/HeadMetadata';
import personSchema from '../seo/personSchema';

const educationStats = [
  { label: 'Degrees Earned', value: '3', icon: <AcademicCapIcon className="w-8 h-8 text-blue-600 dark:text-blue-400" /> },
  { label: 'Currently Pursuing', value: '2', icon: <BookOpenIcon className="w-8 h-8 text-green-600 dark:text-green-400" /> },
  { label: 'Years of Study', value: '15+', icon: <ClockIcon className="w-8 h-8 text-purple-600 dark:text-purple-400" /> },
  { label: 'Research Projects', value: '8+', icon: <BeakerIcon className="w-8 h-8 text-orange-600 dark:text-orange-400" /> }
];

function Education() {
  const [activeSection, setActiveSection] = useState('timeline');

  return (
    <>
      <HeadMetadata
        title="Education"
        description="Review Ted Dickey's academic journey spanning DBA and PhD studies, master's degrees in analytics and business intelligence, and ongoing research initiatives."
        canonical="/education"
        keywords="Ted Dickey education, DBA organizational leadership, PhD technology AI, Xavier University, Walsh College, academic research"
        schema={personSchema}
      />
      <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
          Academic
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
            Excellence
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
          A continuous journey of learning and research, building the academic foundation for data science innovation and organizational leadership.
        </p>
      </section>

      {/* Stats Grid */}
      <section className="mb-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {educationStats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-4xl mb-3 flex justify-center">{stat.icon}</div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="mb-16">
        <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 mb-12">
          {[
            { key: 'timeline', label: 'Academic Timeline' },
            { key: 'research', label: 'Research & Projects' },
            { key: 'presentations', label: 'Conferences' }
          ].map(tab => (
            <button
              key={tab.key}
              className={`px-4 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold text-sm sm:text-lg transition-all duration-300 border-2 flex-1 sm:flex-none ${
                activeSection === tab.key 
                  ? 'bg-gradient-to-r from-brand-primary to-brand-secondary text-white border-brand-primary shadow-lg' 
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-blue-400 hover:shadow-md'
              }`}
              onClick={() => setActiveSection(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* Content Sections */}
      {activeSection === 'timeline' && (
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">Academic Journey</h2>
          
          <div className="space-y-8">
            {/* DBA */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border-2 border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-shrink-0 flex items-center justify-center lg:items-start">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center">
                    <AcademicCapIcon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">DBA in Organizational Leadership</h3>
                      <p className="text-lg text-gray-600 dark:text-gray-300">Walsh College</p>
                    </div>
                    <div className="mt-2 lg:mt-0">
                      <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full font-semibold">
                        Expected 2026
                      </span>
                    </div>
                  </div>
                  <div className="space-y-3 text-gray-700 dark:text-gray-300">
                    <p><strong>Focus:</strong> Organizational Leadership, change management, executive strategy</p>
                    <p><strong>Current Research:</strong> Leadership in data-driven organizations</p>
                  </div>
                  <div className="mt-4">
                    <span className="inline-block px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-sm font-medium">
                      📝 Dissertation in Progress
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* PhD */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border-2 border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-shrink-0 flex items-center justify-center lg:items-start">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center">
                    <AcademicCapIcon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">PhD in Technology (AI/ML Concentration)</h3>
                      <p className="text-lg text-gray-600 dark:text-gray-300">Walsh College</p>
                    </div>
                    <div className="mt-2 lg:mt-0">
                      <span className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full font-semibold">
                        Expected 2026
                      </span>
                    </div>
                  </div>
                  <div className="space-y-3 text-gray-700 dark:text-gray-300">
                    <p><strong>Focus:</strong> Advanced AI/ML methodologies, deep learning, NLP</p>
                    <p><strong>Current Research:</strong> Predictive analytics, deep learning for unstructured data</p>
                  </div>
                  <div className="mt-4">
                    <span className="inline-block px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-sm font-medium">
                      📝 Dissertation in Progress
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* MS */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border-2 border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-shrink-0 flex items-center justify-center lg:items-start">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center">
                    <BuildingOfficeIcon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">M.S. in Customer Analytics</h3>
                      <p className="text-lg text-gray-600 dark:text-gray-300">Xavier University</p>
                    </div>
                    <div className="mt-2 lg:mt-0">
                      <span className="inline-block px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full font-semibold">
                        2022
                      </span>
                    </div>
                  </div>
                  <div className="space-y-3 text-gray-700 dark:text-gray-300">
                    <p><strong>Focus:</strong> Data analysis, customer insights, predictive analytics</p>
                    <p><strong>Capstone:</strong> Predictive Analytics for Customer Retention</p>
                  </div>
                </div>
              </div>
            </div>

            {/* MBA */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border-2 border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-shrink-0 flex items-center justify-center lg:items-start">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-2xl flex items-center justify-center">
                    <ChartBarIcon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">MBA - Business Intelligence Concentration</h3>
                      <p className="text-lg text-gray-600 dark:text-gray-300">Xavier University</p>
                    </div>
                    <div className="mt-2 lg:mt-0">
                      <span className="inline-block px-4 py-2 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full font-semibold">
                        2021
                      </span>
                    </div>
                  </div>
                  <div className="space-y-3 text-gray-700 dark:text-gray-300">
                    <p><strong>Focus:</strong> Strategic decision-making, BI tools, data-driven strategies</p>
                  </div>
                </div>
              </div>
            </div>

            {/* BBA */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border-2 border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-shrink-0 flex items-center justify-center lg:items-start">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                    <BuildingOfficeIcon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">BBA in Finance</h3>
                      <p className="text-lg text-gray-600 dark:text-gray-300">University of Cincinnati</p>
                    </div>
                    <div className="mt-2 lg:mt-0">
                      <span className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full font-semibold">
                        2010
                      </span>
                    </div>
                  </div>
                  <div className="space-y-3 text-gray-700 dark:text-gray-300">
                    <p><strong>Focus:</strong> Finance principles, financial modeling, corporate strategy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Research & Projects Section */}
      {activeSection === 'research' && (
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">Research & Projects</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border-2 border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-xl flex items-center justify-center">
                  <PresentationChartBarIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Academic Projects</h3>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-200 dark:border-indigo-800">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Deep Learning Applications in Healthcare</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Exploring AI applications for medical diagnosis and treatment optimization.</p>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Predictive Analytics for Customer Retention</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Capstone project developing ML models for customer behavior prediction.</p>
                </div>
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Model Interpretability in NLP</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Research into explainable AI for natural language processing applications.</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border-2 border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center">
                  <AcademicCapIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Core Curriculum</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Advanced Machine Learning & Deep Learning</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Neural Networks & NLP</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Ethical AI & Governance</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">AI in Cloud Computing</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">AI in Healthcare Applications</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Blockchain & AI Integration</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Research Methods & Experimental Design</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Conferences & Presentations Section */}
      {activeSection === 'presentations' && (
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">Conferences & Presentations</h2>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border-2 border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-700 rounded-xl flex items-center justify-center">
                <PresentationChartBarIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Speaking Engagements</h3>
            </div>
            
            <div className="space-y-6">
              <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm font-medium">Upcoming</span>
                  <span className="text-gray-600 dark:text-gray-400">2024</span>
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Conference Name 1</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Title:</strong> "Title of your presentation"</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Date, Location</p>
              </div>

              <div className="p-6 bg-purple-50 dark:bg-purple-900/20 rounded-xl border border-purple-200 dark:border-purple-800">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-purple-500 text-white rounded-full text-sm font-medium">Upcoming</span>
                  <span className="text-gray-600 dark:text-gray-400">2024</span>
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Conference Name 2</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Overview:</strong> Overview of another upcoming presentation</p>
              </div>

              <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-green-500 text-white rounded-full text-sm font-medium">Completed</span>
                  <span className="text-gray-600 dark:text-gray-400">2023</span>
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Event Name 1</h4>
                <p className="text-gray-700 dark:text-gray-300">Title and summary of your past presentation</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <CTASection
        title="Explore My Credentials"
        description="Discover the certifications and professional achievements that complement this academic foundation."
        primaryButton={{
          href: "/certifications",
          text: "View Certifications",
          ariaLabel: "View certifications and achievements"
        }}
        secondaryButton={{
          href: "/work",
          text: "See My Work",
          ariaLabel: "View portfolio projects"
        }}
      />
    </div>
    </>
  );
}

export default Education;