import PageTitle from '../components/PageTitle';
import PageSubtitle from '../components/PageSubtitle';
import Button from '../components/Button';

function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] text-center bg-gradient-to-b from-white via-blue-50 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4">
      <PageTitle>Empowering Organizations with Data, Cloud, and AI Expertise</PageTitle>
      <PageSubtitle>
        I'm Ted Dickey, a data science and cloud solutions specialist passionate about helping businesses and teams unlock the full potential of their data and technology.
      </PageSubtitle>
      <p className="max-w-2xl text-gray-700 mb-6 dark:text-gray-300 text-lg">
        With a background spanning data science, business intelligence, and advanced analytics, I bring a blend of technical expertise and business acumen to every project. My experience covers a range of industries and roles, from developing predictive models and optimizing supply chains to building impactful data visualizations and deploying cloud-based solutions.
      </p>
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium dark:bg-yellow-900 dark:text-yellow-200">AWS Certified</span>
        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium dark:bg-blue-900 dark:text-blue-200">Microsoft Certified</span>
        <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium dark:bg-purple-900 dark:text-purple-200">Azure Certified</span>
        <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium dark:bg-gray-800 dark:text-gray-200">IBM Certified</span>
      </div>
      <div className="mb-8">
        <ul className="flex flex-wrap justify-center gap-4 text-base text-gray-800 dark:text-gray-200">
          <li className="bg-[#F8F7F4] dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-2 shadow-sm">Data Science & Analytics</li>
          <li className="bg-[#F8F7F4] dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-2 shadow-sm">Cloud Architecture & Migration</li>
          <li className="bg-[#F8F7F4] dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-2 shadow-sm">Machine Learning & AI Solutions</li>
          <li className="bg-[#F8F7F4] dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-2 shadow-sm">Business Intelligence</li>
          <li className="bg-[#F8F7F4] dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-2 shadow-sm">Technical Training & Workshops</li>
        </ul>
      </div>
      <Button href="/contact" ariaLabel="Contact Ted Dickey">
        Let's Connect
      </Button>
      <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm">Open to consulting, collaboration, and new opportunities.</p>
    </section>
  );
}

export default Home;