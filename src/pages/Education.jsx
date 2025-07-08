import { AcademicCapIcon, BuildingOfficeIcon, ChartBarIcon, PresentationChartBarIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import PageTitle from '../components/PageTitle';
import PageSubtitle from '../components/PageSubtitle';
import Button from '../components/Button';

function Education() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <header className="mb-10 text-center">
        <PageTitle>Education</PageTitle>
        <PageSubtitle>Lifelong learning and academic achievements</PageSubtitle>
      </header>

      {/* Degrees Timeline */}
      <div className="space-y-8">
        {/* DBA */}
        <div className="bg-[#F8F7F4] dark:bg-gray-900 rounded-xl shadow p-6 flex flex-col md:flex-row gap-6 border border-gray-200 dark:border-gray-800">
          <div className="flex-shrink-0 flex items-center justify-center">
            <AcademicCapIcon className="w-10 h-10 text-blue-400 dark:text-blue-300" />
          </div>
          <div>
            <h2 className="text-xl font-semibold dark:text-gray-100">DBA in Organizational Leadership</h2>
            <div className="text-gray-600 dark:text-gray-300">Walsh College <span className="ml-2 text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded">Expected 2026</span></div>
            <ul className="list-disc ml-5 mt-2 text-gray-700 dark:text-gray-400 text-sm space-y-1">
              <li>Focus: Organizational Leadership, change management, executive strategy</li>
              <li>Current research: Leadership in data-driven organizations</li>
            </ul>
            <div className="mt-2">
              <span className="inline-block text-xs bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 px-2 py-0.5 rounded">Dissertation in progress</span>
            </div>
          </div>
        </div>
        {/* PhD */}
        <div className="bg-[#F8F7F4] dark:bg-gray-900 rounded-xl shadow p-6 flex flex-col md:flex-row gap-6 border border-gray-200 dark:border-gray-800">
          <div className="flex-shrink-0 flex items-center justify-center">
            <AcademicCapIcon className="w-10 h-10 text-blue-500 dark:text-blue-400" />
          </div>
          <div>
            <h2 className="text-xl font-semibold dark:text-gray-100">PhD in Technology (AI/ML Concentration)</h2>
            <div className="text-gray-600 dark:text-gray-300">Walsh College <span className="ml-2 text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded">Expected 2026</span></div>
            <ul className="list-disc ml-5 mt-2 text-gray-700 dark:text-gray-400 text-sm space-y-1">
              <li>Advanced AI/ML methodologies, deep learning, NLP</li>
              <li>Current research: Predictive analytics, deep learning for unstructured data</li>
            </ul>
            <div className="mt-2">
              <span className="inline-block text-xs bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 px-2 py-0.5 rounded">Dissertation in progress</span>
            </div>
          </div>
        </div>
        {/* MS */}
        <div className="bg-[#F8F7F4] dark:bg-gray-900 rounded-xl shadow p-6 flex flex-col md:flex-row gap-6 border border-gray-200 dark:border-gray-800">
          <div className="flex-shrink-0 flex items-center justify-center">
            <BuildingOfficeIcon className="w-10 h-10 text-green-500 dark:text-green-400" />
          </div>
          <div>
            <h2 className="text-xl font-semibold dark:text-gray-100">M.S. in Customer Analytics</h2>
            <div className="text-gray-600 dark:text-gray-300">Xavier University <span className="ml-2 text-xs bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-2 py-0.5 rounded">2022</span></div>
            <ul className="list-disc ml-5 mt-2 text-gray-700 dark:text-gray-400 text-sm space-y-1">
              <li>Data analysis, customer insights, predictive analytics</li>
              <li>Capstone: Predictive Analytics for Customer Retention</li>
            </ul>
          </div>
        </div>
        {/* MBA */}
        <div className="bg-[#F8F7F4] dark:bg-gray-900 rounded-xl shadow p-6 flex flex-col md:flex-row gap-6 border border-gray-200 dark:border-gray-800">
          <div className="flex-shrink-0 flex items-center justify-center">
            <ChartBarIcon className="w-10 h-10 text-yellow-500 dark:text-yellow-400" />
          </div>
          <div>
            <h2 className="text-xl font-semibold dark:text-gray-100">MBA - Business Intelligence Concentration</h2>
            <div className="text-gray-600 dark:text-gray-300">Xavier University <span className="ml-2 text-xs bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 px-2 py-0.5 rounded">2021</span></div>
            <ul className="list-disc ml-5 mt-2 text-gray-700 dark:text-gray-400 text-sm space-y-1">
              <li>Strategic decision-making, BI tools, data-driven strategies</li>
            </ul>
          </div>
        </div>
        {/* BBA */}
        <div className="bg-[#F8F7F4] dark:bg-gray-900 rounded-xl shadow p-6 flex flex-col md:flex-row gap-6 border border-gray-200 dark:border-gray-800">
          <div className="flex-shrink-0 flex items-center justify-center">
            <BuildingOfficeIcon className="w-10 h-10 text-purple-500 dark:text-purple-400" />
          </div>
          <div>
            <h2 className="text-xl font-semibold dark:text-gray-100">BBA in Finance</h2>
            <div className="text-gray-600 dark:text-gray-300">University of Cincinnati <span className="ml-2 text-xs bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 px-2 py-0.5 rounded">2010</span></div>
            <ul className="list-disc ml-5 mt-2 text-gray-700 dark:text-gray-400 text-sm space-y-1">
              <li>Finance principles, financial modeling, corporate strategy</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Academic Projects & Curriculum */}
      <div className="mt-12 grid md:grid-cols-2 gap-8">
        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="flex items-center gap-2 text-lg font-semibold mb-2 dark:text-gray-100">
            <PresentationChartBarIcon className="w-6 h-6 text-indigo-500 dark:text-indigo-400" /> Academic Projects
          </h3>
          <ul className="list-disc ml-5 text-gray-700 dark:text-gray-400 text-sm space-y-1">
            <li>Deep Learning Applications in Healthcare</li>
            <li>Capstone: Predictive Analytics for Customer Retention</li>
            <li>Research: Model interpretability in NLP</li>
          </ul>
        </div>
        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="flex items-center gap-2 text-lg font-semibold mb-2 dark:text-gray-100">
            <AcademicCapIcon className="w-6 h-6 text-blue-500 dark:text-blue-400" /> Core Curriculum (PhD)
          </h3>
          <ul className="list-disc ml-5 text-gray-700 dark:text-gray-400 text-sm space-y-1">
            <li>Advanced Machine Learning, Deep Learning & Neural Networks</li>
            <li>Ethical AI & Governance, AI in Cloud Computing</li>
            <li>AI in Healthcare, Blockchain & AI Integration</li>
            <li>Research Methods, Experimental Design, Data Analytics</li>
          </ul>
        </div>
      </div>

      {/* Conferences & Presentations */}
      <div className="mt-12 bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="flex items-center gap-2 text-lg font-semibold mb-2 dark:text-gray-100">
          <PresentationChartBarIcon className="w-6 h-6 text-pink-500 dark:text-pink-400" /> Conferences & Presentations
        </h3>
        <ul className="list-disc ml-5 text-gray-700 dark:text-gray-400 text-sm space-y-1">
          <li><span className="font-medium">Upcoming:</span> Conference Name 1 – "Title of your presentation", Date, Location</li>
          <li><span className="font-medium">Upcoming:</span> Conference Name 2 – "Overview of another upcoming presentation"</li>
          <li><span className="font-medium">Past:</span> Event Name 1 – "Title and summary of your past presentation"</li>
        </ul>
      </div>

      {/* Certifications CTA */}
      <div className="mt-12 flex flex-col items-center">
        <Button href="/certifications" ariaLabel="View certifications and achievements">
          View Certifications & Achievements
        </Button>
      </div>
    </section>
  );
}

export default Education;