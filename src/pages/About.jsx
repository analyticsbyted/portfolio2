import PageTitle from '../components/PageTitle';
import PageSubtitle from '../components/PageSubtitle';
import Button from '../components/Button';

function About() {
  return (
    <section className="max-w-2xl mx-auto text-center px-2 py-4">
      <PageTitle>About Me</PageTitle>
      <PageSubtitle>Blending Data, Cloud, and AI to Drive Results</PageSubtitle>
      <p className="text-gray-700 mb-2 dark:text-gray-300 text-base">
        I'm Ted Dickey II, a data science and cloud solutions specialist with a passion for transforming data into actionable insights. My journey spans advanced analytics, machine learning, and cloud architecture, empowering organizations to make smarter, data-driven decisions.
      </p>
      <p className="text-gray-700 mb-2 dark:text-gray-300 text-base">
        With an MS in Customer Analytics and an MBA in Business Intelligence from Xavier University, I've developed and deployed solutions that have improved organizational performance, optimized operations, and enabled innovation across multiple industries. I'm currently pursuing a PhD in Technology, focusing on the intersection of AI, ML, and business impact.
      </p>
      <div className="mb-2">
        <span className="font-semibold">Expertise:</span>
        <ul className="list-disc list-inside text-left mx-auto max-w-md mt-1 mb-1 text-gray-700 dark:text-gray-300 text-sm">
          <li>Statistical Analysis & Experimental Design (ANOVA, regression, multivariate analysis, clustering, A/B testing, hypothesis testing, time series analysis, and more)</li>
          <li>Tools: SPSS, Excel, R, Python, Tableau, Power BI</li>
          <li>Data Science & Advanced Analytics</li>
          <li>Cloud Architecture & Migration (AWS, Azure, IBM Certified)</li>
          <li>Machine Learning & AI (NLP, Forecasting, Image Analysis)</li>
          <li>Business Intelligence & Operational Analytics</li>
          <li>Technical Training & Workshops</li>
        </ul>
      </div>
      <p className="text-gray-700 mb-2 dark:text-gray-300 text-base">
        I'm driven by curiosity and a commitment to continuous learning. Whether collaborating on a challenging project or mentoring others, I strive to create value and foster innovation. I'm open to consulting, collaboration, and new opportunities—let's connect and explore how I can help you achieve your goals.
      </p>
      <p className="text-gray-700 mb-2 dark:text-gray-300 text-base">
        Certified in AWS, Microsoft, Azure, IBM, Snowflake, Alteryx, Tableau, Python, and more. See my{' '}
        <a href="https://www.credly.com/users/theodore-dickey-ii.8c3308d7/badges" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline dark:text-blue-400">Credly profile</a>{' '}for details.
      </p>
      <div className="mt-4">
        <Button href="/work" ariaLabel="Explore Ted Dickey's work">
          Explore My Work
        </Button>
      </div>
    </section>
  );
}

export default About;