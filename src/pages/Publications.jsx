import { BookOpenIcon, DocumentTextIcon } from '@heroicons/react/24/outline';
import PageTitle from '../components/PageTitle';

function Publications() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <PageTitle>Publications</PageTitle>
      <ul className="space-y-8">
        {/* Book */}
        <li className="bg-[#F8F7F4] dark:bg-gray-900 rounded-xl shadow p-6 border border-gray-200 dark:border-gray-800 flex flex-col md:flex-row gap-6 items-center">
          <BookOpenIcon className="w-10 h-10 text-blue-500 dark:text-blue-400 flex-shrink-0" />
          <div className="flex-1">
            <h2 className="text-xl font-semibold dark:text-gray-100 mb-1">Magnetic Leadership: Aligning Values, Vision, and Actions</h2>
            <span className="inline-block text-xs bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 px-2 py-0.5 rounded mb-2">Coming Soon (2024)</span>
            <p className="text-gray-700 dark:text-gray-300 mb-2">A practical guide to cultivating authentic, values-driven leadership that inspires teams and drives organizational success.</p>
            {/* <a href="#" className="text-blue-600 hover:underline dark:text-blue-400">Learn more</a> */}
          </div>
        </li>
        {/* Article Placeholder 1 */}
        <li className="bg-[#F8F7F4] dark:bg-gray-900 rounded-xl shadow p-6 border border-gray-200 dark:border-gray-800 flex flex-col md:flex-row gap-6 items-center">
          <DocumentTextIcon className="w-10 h-10 text-green-500 dark:text-green-400 flex-shrink-0" />
          <div className="flex-1">
            <h2 className="text-lg font-semibold dark:text-gray-100 mb-1">Article Title Placeholder</h2>
            <span className="inline-block text-xs bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 px-2 py-0.5 rounded mb-2">In Preparation</span>
            <p className="text-gray-700 dark:text-gray-300 mb-2">A forthcoming article on a topic related to leadership, analytics, or AI. Details will be added upon publication.</p>
          </div>
        </li>
        {/* Article Placeholder 2 */}
        <li className="bg-[#F8F7F4] dark:bg-gray-900 rounded-xl shadow p-6 border border-gray-200 dark:border-gray-800 flex flex-col md:flex-row gap-6 items-center">
          <DocumentTextIcon className="w-10 h-10 text-green-500 dark:text-green-400 flex-shrink-0" />
          <div className="flex-1">
            <h2 className="text-lg font-semibold dark:text-gray-100 mb-1">Article Title Placeholder</h2>
            <span className="inline-block text-xs bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 px-2 py-0.5 rounded mb-2">In Preparation</span>
            <p className="text-gray-700 dark:text-gray-300 mb-2">A forthcoming article on a topic related to leadership, analytics, or AI. Details will be added upon publication.</p>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default Publications;