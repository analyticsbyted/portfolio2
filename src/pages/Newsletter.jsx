import PageTitle from '../components/PageTitle';
import PageSubtitle from '../components/PageSubtitle';
import Button from '../components/Button';

function Newsletter() {
  // Placeholder articles
  const articles = [
    {
      id: 1,
      title: 'How Data Science is Transforming Business',
      date: '2024-07-01',
      preview: 'A look at real-world examples of data-driven decision making in modern organizations.'
    },
    {
      id: 2,
      title: 'Top 5 Python Libraries for Data Analysis',
      date: '2024-06-24',
      preview: 'Discover the essential Python libraries every data analyst should know.'
    },
    {
      id: 3,
      title: 'Machine Learning: From Theory to Practice',
      date: '2024-06-17',
      preview: 'Bridging the gap between ML concepts and real-world applications.'
    }
  ];

  return (
    <section className="max-w-2xl mx-auto">
      <PageTitle>Newsletter</PageTitle>
      <PageSubtitle>Weekly insights and articles on data science, analytics, and more. Subscribe to access full content.</PageSubtitle>
      <div className="flex justify-center mb-8">
        <Button ariaLabel="Subscribe to newsletter">Subscribe</Button>
      </div>
      <ul className="space-y-6">
        {articles.map(article => (
          <li key={article.id} className="p-6 rounded-lg border bg-[#F8F7F4] shadow-sm flex flex-col md:flex-row md:items-center md:justify-between dark:bg-gray-900 dark:border-gray-700">
            <div>
              <h2 className="text-lg font-semibold mb-1 dark:text-gray-100">{article.title}</h2>
              <div className="text-sm text-gray-400 mb-2 dark:text-gray-500">{article.date}</div>
              <p className="text-gray-600 mb-2 dark:text-gray-300">{article.preview}</p>
            </div>
            <button className="mt-2 md:mt-0 px-4 py-2 bg-gray-100 text-blue-600 rounded hover:bg-blue-50 font-medium border border-blue-100 transition dark:bg-gray-800 dark:text-blue-300 dark:border-gray-700 dark:hover:bg-gray-900" aria-label="Login to read full article">Login to Read</button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Newsletter;