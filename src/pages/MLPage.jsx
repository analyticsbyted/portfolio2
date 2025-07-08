import React from 'react'
import PageLayout from '../components/PageLayout'

const MLPage = () => {
  return (
    <PageLayout title="Machine Learning">
      <p className="text-gray-300 mb-8">
        Welcome to my Machine Learning page! Here you will find more examples of my work, including sentiment analysis, customer segmentation, and various machine learning models such as classification, linear and logistic regression, and random forest. These projects demonstrate my ability to extract insights and make data-driven decisions through advanced statistical analysis and modeling techniques. I look forward to sharing my work with you and hope it gives you an idea of the value I can bring to your organization.
      </p>
      
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-bold mb-4">
            <a href="https://github.com/analyticsbyted/customerSegmentation/blob/main/segmentation.ipynb" target="_blank" className="text-blue-400 hover:text-blue-300">
              Customer Segmentation
            </a>
          </h3>
          
          <div className="mb-4">
            <img src="/images/customerSegments.png" alt="Customer Segmentation Analysis" className="w-full rounded-lg" />
          </div>
          
          <p className="text-gray-300 mb-4">
            The objective of this study is to analyze customer behavior in a shopping mall with the goal of identifying the target customers who are more likely to be easily influenced. By gaining a deeper understanding of the customers' preferences and characteristics, we aim to provide valuable insights to the marketing team, enabling them to develop effective strategies for customer engagement and satisfaction. This research will contribute to the field of marketing by leveraging data analysis techniques to optimize marketing efforts and enhance customer-centric strategies in the retail industry.
          </p>
          
          <a 
            href="https://github.com/analyticsbyted/customerSegmentation/blob/main/segmentation.ipynb" 
            target="_blank"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            View Segmentation Project
          </a>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-4">
            Predicting Customer Behavior using KNN - New Customer Predictions
          </h3>
          
          <div className="mb-4">
            <img src="/images/predict2.png" alt="Customer Behavior Prediction" className="w-full rounded-lg" />
          </div>
          
          <div className="text-gray-300 space-y-4">
            <p>This Python code uses the pickle module to load a pre-trained k-Nearest Neighbors (KNN) machine learning model (saved in 'knn_model.pickle') and a scaler object (saved in 'scaler.pickle'). The model and scaler will be used to predict whether new customers will make a purchase or not based on their age, salary, and the price of the item they are considering.</p>
            
            <p>The code then loads a new dataset containing information for the new customers into a Pandas DataFrame using the read_csv function. One-hot encoding is applied to the Gender column using pd.get_dummies with drop_first=True to avoid the dummy variable trap.</p>
            
            <p>After encoding the gender column, the required features are selected from the new DataFrame and stored as a NumPy array. The scaler loaded from the pickle file is used to scale the data. Finally, the model loaded from the pickle file is used to predict whether each new customer will make a purchase or not based on the scaled data.</p>
            
            <p>The predictions are added as a new column to the original DataFrame, and the resulting DataFrame is saved as a csv file using the to_csv method with index=False.</p>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default MLPage