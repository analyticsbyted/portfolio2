import React from 'react'

const VizzesSection = ({ closeSection }) => {
  return (
    <article id="vizzes" className="max-w-4xl">
      <h2 className="text-3xl font-bold mb-6">Dashboards</h2>
      
      <p className="text-gray-300 mb-8">
        In this section, you'll find a collection of stunning visual representations of complex data sets. As a data analyst, 
        I specialize in using Tableau to transform raw data into insightful and impactful visualizations. However, I also have experience working with other powerful tools such as Power BI, Looker, RShiny, IBM Cognos Analytics, and Excel to bring data to life. Take a look around and explore the power of data visualization!
      </p>
      
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-bold mb-4">
            <a href="https://public.tableau.com/views/IMDBMovies_16871427180720/IMDBDashboard?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link" target="_blank" className="text-blue-400 hover:text-blue-300">
              IMDb Movies
            </a>
          </h3>
          
          <div className="mb-4">
            <img src="/images/imdbTableau2.png" alt="IMDb Movies Dashboard" className="w-full rounded-lg" />
          </div>
          
          <p className="text-gray-300 mb-4">
            An interactive Tableau dashboard illustrating movie information from an IMDb movie dataset found on Kaggle.
          </p>
          
          <div className="flex gap-4">
            <a 
              href="/pages/imdbFindings.html" 
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Read Findings Report
            </a>
            <a 
              href="/moviedashboard.html" 
              className="inline-block px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-semibold"
            >
              View Embedded Dashboard
            </a>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-4">
            <a href="https://public.tableau.com/app/profile/tdickey/viz/TaxHavens_15973738382660/OffshoreCash" target="_blank" className="text-blue-400 hover:text-blue-300">
              Tax Havens
            </a>
          </h3>
          
          <div className="mb-4">
            <img src="/images/taxhavens.PNG" alt="Tax Havens Dashboard" className="w-full rounded-lg" />
          </div>
          
          <p className="text-gray-300 mb-4">
            An interactive Tableau dashboard illustrating countries housing offshore corporate cash. Through ability to filter on specific companies, we are able to determine the amount, estimated Tax bill and total subsidiaries with location.
          </p>
          
          <a 
            href="https://public.tableau.com/app/profile/tdickey/viz/TaxHavens_15973738382660/OffshoreCash" 
            target="_blank"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            View Dashboard
          </a>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-4">Power BI</h3>
          
          <p className="text-gray-300 mb-4">
            Below are a couple of screenshots of reports and dashboards in My Workspace, available through the Power BI service. For access to these and others, shoot me a message using the contact form so that I can create and send you organization login credentials. This is necessary due to the RLS and other security features I have set up in the environment. Those of you that are familiar with the Power BI service will understand.
          </p>
          
          <div className="mb-4">
            <img src="/images/imdb draft.png" alt="IMDb Power BI Report" className="w-full rounded-lg" />
          </div>
          
          <p className="text-gray-300 mb-4">
            Report shows various KPIs for the IMDb film-rating website. The data came from Kaggle and includes titles from 1920 to 2020.
          </p>
          
          <a 
            href="https://app.powerbi.com/links/j-Ez1OHevp?ctid=cf8b8d18-928b-45b8-98c5-a8a4434034c2&pbi_source=linkShare" 
            target="_blank"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold mb-6"
          >
            View Dashboard
          </a>
          
          <div className="mb-4">
            <img src="/images/draft.png" alt="Supplier Performance Dashboard" className="w-full rounded-lg" />
          </div>
          
          <p className="text-gray-300 mb-4">
            Here is a screen shot of another Power BI report. This includes Performance tracking for supplier based out of India.
          </p>
          
          <a 
            href="https://app.powerbi.com/links/xr-XGshizo?ctid=cf8b8d18-928b-45b8-98c5-a8a4434034c2&pbi_source=linkShare" 
            target="_blank"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            View Dashboard
          </a>
        </div>
      </div>
    </article>
  )
}

export default VizzesSection