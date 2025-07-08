import React from 'react'
import PageLayout from '../components/PageLayout'

const ForecastPage = () => {
  return (
    <PageLayout title="Forecasting">
      <div className="text-gray-300 space-y-4 mb-8">
        <p>The PJM Hourly Energy Consumption Forecasting project aims to predict the hourly consumption in the PJM Interconnection region using time series analysis. The dataset used in this project, PJM_Load_hourly.csv, contains historical hourly energy consumption data in megawatts (MW) for the PJM region.</p>
        
        <p>The project employs XGBoost, a powerful gradient boosting algorithm, to build a forecasting model. By training the model on past energy consumption patterns, it can make accurate predictions of future energy demand, enabling better planning and management of resources.</p>
        
        <p>The <code className="bg-gray-800 px-2 py-1 rounded">time_series.ipynb</code> notebook in the repository demonstrates the data preprocessing steps, model training, and evaluation. The forecasted values are compared with the actual energy consumption, and the results are visualized using line plots.</p>
      </div>
      
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-bold mb-4">
            <a href="https://github.com/analyticsbyted/time_series_forecasting" target="_blank" className="text-blue-400 hover:text-blue-300">
              Time-Series Forecasting
            </a>
          </h3>
          
          <div className="mb-4">
            <img src="/images/MWhconsumption.png" alt="Energy Consumption Forecasting" className="w-full rounded-lg" />
          </div>
          
          <p className="text-gray-300 mb-4">
            Through this project, insights can be gained into energy consumption patterns, helping stakeholders make informed decisions about resource allocation, grid stability, and energy management strategies.
          </p>
          
          <a 
            href="https://github.com/analyticsbyted/time_series_forecasting/blob/main/time_series.ipynb" 
            target="_blank"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            View Jupyter Notebook Report
          </a>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-4">
            <a href="https://github.com/analyticsbyted/financialModeling/blob/main/sales_adclicks.ipynb" target="_blank" className="text-blue-400 hover:text-blue-300">
              Financial Modeling
            </a>
          </h3>
          
          <div className="mb-4">
            <img src="/images/scatterplot.png" alt="Sales vs Ad Clicks Analysis" className="w-full rounded-lg" />
          </div>
          
          <p className="text-gray-300 mb-4">
            Discover the powerful impact of ad clicks on sales with our project. Using the Ordinary Least Squares (OLS) method, we unveil the quantifiable relationship between ad clicks and sales, providing valuable insights for data-driven decision making. Explore the implications for marketing strategies, optimal resource allocation, return on investment (ROI) analysis, and campaign optimization.
          </p>
          
          <a 
            href="/pages/sales_adclicks.html" 
            target="_blank"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            View Project
          </a>
        </div>
      </div>
    </PageLayout>
  )
}

export default ForecastPage