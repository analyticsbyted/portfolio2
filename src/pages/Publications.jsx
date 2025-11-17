import { BookOpenIcon, DocumentTextIcon, PresentationChartBarIcon, AcademicCapIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import Button from '../components/Button';
import CTASection from '../components/CTASection';
import { publishedArticles } from '../data/publicationHelper';

const publicationStats = [
  { label: 'Book in Progress', value: '1', icon: '📖' },
  { label: 'Articles Planned', value: '3+', icon: '📄' },
  { label: 'Research Areas', value: '4', icon: '🔬' },
  { label: 'Target Journals', value: '5+', icon: '🎯' }
];

function Publications() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
          Publications &
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
            Research
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
          Bridging academic research with practical applications in data science, leadership, and organizational transformation.
        </p>
      </section>

      {/* Stats Grid */}
      <section className="mb-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {publicationStats.map((stat, index) => (
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

      {/* Publications Section */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">Current Publications</h2>
        <div className="space-y-8">
          {/* Book */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border-2 border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex-shrink-0 flex items-center justify-center lg:items-start">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-2xl flex items-center justify-center">
                  <BookOpenIcon className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Magnetic Leadership: Aligning Values, Vision, and Actions</h3>
                    <p className="text-lg text-gray-600 dark:text-gray-300">Leadership Guide</p>
                  </div>
                  <div className="mt-2 lg:mt-0">
                    <span className="inline-block px-4 py-2 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full font-semibold">
                      Coming 2025
                    </span>
                  </div>
                </div>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Focus:</strong> A practical guide to cultivating authentic, values-driven leadership that inspires teams and drives organizational success.</p>
                  <p><strong>Target Audience:</strong> Executives, managers, and emerging leaders seeking to build magnetic leadership capabilities</p>
                  <p><strong>Key Topics:</strong> Values alignment, vision clarity, authentic action, team inspiration, organizational transformation</p>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                    Leadership
                  </span>
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">
                    Management
                  </span>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
                    Organizational Development
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* === START: PUBLISHED ARTICLES & FEATURES === */}
          <section className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-900/20 dark:to-blue-900/20 rounded-2xl p-8 border border-gray-200 dark:border-gray-800" aria-labelledby="published-articles-heading">
            <header>
              <h3 id="published-articles-heading" className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Published Articles & Features</h3>
            </header>
            {/* Loading State (if needed in future) */}
            {/* <div className="text-center text-blue-500">Loading articles...</div> */}
            {publishedArticles.length === 0 ? (
              <div className="text-center text-gray-500 italic" role="status">No published articles found.</div>
            ) : (
              <div className="flex flex-col gap-6">
                {publishedArticles.map((article) => (
                  <article
                    key={article.title}
                    className="flex flex-col md:flex-row bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 group md:items-center"
                  >
                    <div className="bg-gray-100 dark:bg-gray-700 flex items-center justify-center rounded-t-xl md:rounded-t-none md:rounded-l-xl overflow-hidden md:ml-4 p-2 md:p-3">
                      <img 
                        src={article.imageSrc} 
                        alt={article.imageAlt} 
                        className="w-full h-auto object-contain object-center max-w-sm max-h-60"
                        onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/400x400/374151/FFFFFF?text=Image+Not+Found'; }}
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div>
                        <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium mb-4">
                          {article.publication}
                        </span>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          <a href={article.href} target="_blank" rel="noopener noreferrer" aria-label={`Read article: ${article.title} (${article.publication})`} className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">
                            {article.title}
                          </a>
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                          {article.description}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {article.tags.map(tag => {
                          let tagColor = '';
                          if (tag === 'Leadership') tagColor = 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200';
                          else if (tag === 'Management') tagColor = 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200';
                          else if (tag === 'Organizational Development') tagColor = 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200';
                          else if (tag === 'Data Science') tagColor = 'bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200';
                          else tagColor = 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200';
                          return (
                            <span key={tag} className={`px-2 py-1 rounded-full text-xs font-medium ${tagColor}`}>{tag}</span>
                          );
                        })}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </section>
          {/* === END: PUBLISHED ARTICLES & FEATURES === */}

          {/* Upcoming Articles Grid */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Upcoming Research & Articles</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Article 1 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center">
                    <DocumentTextIcon className="w-5 h-5 text-white" />
                  </div>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
                    In Preparation
                  </span>
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">AI Ethics in Organizational Decision Making</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">Exploring frameworks for ethical AI implementation in business contexts.</p>
                <div className="flex flex-wrap gap-1">
                  {['AI Ethics', 'Leadership'].map(tag => {
                    let tagColor = '';
                    if (tag === 'Leadership') tagColor = 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200';
                    else if (tag === 'Management') tagColor = 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200';
                    else if (tag === 'Organizational Development') tagColor = 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200';
                    else tagColor = 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200';
                    return (
                      <span key={tag} className={`px-2 py-1 rounded text-xs font-medium ${tagColor}`}>{tag}</span>
                    );
                  })}
                </div>
              </div>
              
              {/* Article 2 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center">
                    <AcademicCapIcon className="w-5 h-5 text-white" />
                  </div>
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">
                    Research Phase
                  </span>
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Data-Driven Leadership in Digital Transformation</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">How leaders can leverage analytics for strategic decision-making during organizational change.</p>
                <div className="flex flex-wrap gap-1">
                  {['Data Science', 'Digital Transformation'].map(tag => {
                    let tagColor = '';
                    if (tag === 'Leadership') tagColor = 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200';
                    else if (tag === 'Management') tagColor = 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200';
                    else if (tag === 'Organizational Development') tagColor = 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200';
                    else if (tag === 'Data Science') tagColor = 'bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200';
                    else tagColor = 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200';
                    return (
                      <span key={tag} className={`px-2 py-1 rounded text-xs font-medium ${tagColor}`}>{tag}</span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          
          {/* Research Areas */}
          <div className="mt-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Research Focus Areas</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl mx-auto mb-3 flex items-center justify-center">
                  <PresentationChartBarIcon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white text-sm">Ethical AI</h4>
                <p className="text-gray-600 dark:text-gray-400 text-xs mt-1">Responsible AI deployment</p>
              </div>
              
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-xl mx-auto mb-3 flex items-center justify-center">
                  <AcademicCapIcon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white text-sm">Data Science</h4>
                <p className="text-gray-600 dark:text-gray-400 text-xs mt-1">Analytics for decision-making</p>
              </div>

              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl mx-auto mb-3 flex items-center justify-center">
                  <PresentationChartBarIcon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white text-sm">Organizational Development</h4>
                <p className="text-gray-600 dark:text-gray-400 text-xs mt-1">Transforming organizations for the future</p>
              </div>

              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-xl mx-auto mb-3 flex items-center justify-center">
                  <PresentationChartBarIcon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white text-sm">Leadership</h4>
                <p className="text-gray-600 dark:text-gray-400 text-xs mt-1">Leading with impact and purpose</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <CTASection
        title="Stay Updated on Research"
        description="Follow my journey as I bridge academic research with practical business applications in data science and leadership."
        primaryButton={{
          href: "/newsletter",
          text: "Subscribe to Updates",
          ariaLabel: "Subscribe to newsletter"
        }}
        secondaryButton={{
          href: "/education",
          text: "View Academic Background",
          ariaLabel: "View academic background"
        }}
      />
    </div>
  );
}

export default Publications;
