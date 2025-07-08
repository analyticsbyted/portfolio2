import React from 'react'

const IntroSection = ({ closeSection }) => {
  return (
    <article id="intro" className="max-w-4xl">
      <h2 className="text-3xl font-bold mb-6">Intro</h2>
      
      <div className="space-y-4 text-gray-300 leading-relaxed">
        <p>Hello and welcome to my digital portfolio! My name is Ted Dickey and I am a Data Scientist with over 7 years of experience in SQL, Tableau, and Power BI. I am also proficient in Python and R. I am excited to share my expertise in data analytics, machine learning, NLP, and data visualizations with you.</p>
        
        <p>I hold a Master of Science in Customer Analytics and a Master of Business Administration in Business Intelligence degrees from Xavier University, where I further developed and gained extensive knowledge in data analytics and business intelligence. I also hold a Bachelor of Business Administration in Finance from the University of Cincinnati.</p>
        
        <p>Throughout my career, I have been fortunate enough to work on a range of exciting projects in various industries, from conducting market research in the real estate industry to developing predictive models for container fleet voyages to optimize routes and reduce costs. Currently, as a Data Scientist - Advanced Analytics professional, I work on implementing advanced analytical models to improve business outcomes for clients.</p>
        
        <p>On this website, you will find a collection of my projects that showcase my skills in data analysis, visualization, and predictive modeling. Each project highlights a unique challenge and demonstrates my ability to effectively communicate insights to stakeholders.</p>
        
        <p>I believe that data has the power to transform organizations and industries, and my goal is to leverage my expertise to drive positive change. Whether you're a potential employer, collaborator, or simply curious about the world of data science, I hope you find this portfolio informative and inspiring.</p>
      </div>
      
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">
          <a href="https://www.credly.com/users/theodore-dickey-ii.8c3308d7/badges" target="_blank" className="text-blue-400 hover:text-blue-300">
            Certifications
          </a>
        </h2>
        
        <p className="text-gray-300 mb-4">
          Here, you will find a small collection of badges and certifications that I have earned throughout my career in data science. These badges represent a variety of skills and tools, including AWS Solutions Architect, AWS Cloud Practitioner, Microsoft, Snowflake, Alteryx, Tableau, Python, and many more. I have also included a verification link to my Credly profile page, where you can explore my full collection of badges and certifications. In addition, be sure to check out my{' '}
          <a href="https://www.linkedin.com/in/teddickey/" target="_blank" className="text-blue-400 hover:text-blue-300 font-bold">
            LinkedIn profile
          </a>{' '}
          for even more badges and certifications, including SAS, R, and Advanced Excel Spreadsheet Modeling.
        </p>
        
        <div className="mb-4">
          <img src="/images/credly.png" alt="Credly Certifications" className="w-full rounded-lg" />
        </div>
        
        <div className="flex justify-center">
          <a 
            href="https://www.credly.com/users/theodore-dickey-ii.8c3308d7/badges" 
            target="_blank"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            View My Credly Profile Page
          </a>
        </div>
        
        <p className="text-gray-300 mt-6">Thank you for visiting, and please don't hesitate to reach out with any questions or feedback!</p>
      </div>
    </article>
  )
}

export default IntroSection