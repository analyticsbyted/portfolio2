import React from 'react'

const SentimentSection = ({ closeSection }) => {
  return (
    <article id="sentiment" className="max-w-4xl">
      <h2 className="text-3xl font-bold mb-6">NLP</h2>
      
      <p className="text-gray-300 mb-6">
        Sentiment Analysis of Amazon Fine Food Reviews: This project leverages natural language processing techniques to analyze customer reviews and star ratings of fine food products on Amazon.com. Using NLTK and Hugging Face Transformers, the sentiment analysis is performed on a subset of the Amazon Fine Food Reviews dataset.
      </p>
      
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-bold mb-4">
            <a href="https://github.com/analyticsbyted/sentiment_analysis/tree/main" target="_blank" className="text-blue-400 hover:text-blue-300">
              Sentiment Analysis
            </a>
          </h3>
          
          <div className="mb-4">
            <img src="/images/roberta.png" alt="RoBERTa Sentiment Analysis" className="w-full rounded-lg" />
          </div>
          
          <p className="text-gray-300 mb-4">
            The project compares the results from VADER and RoBERTa models, providing insights into the sentiment polarity (negative, neutral, positive) and star ratings of the reviews. The dataset used consists of 500 randomly sampled reviews from the original dataset of over 500,000 reviews. This project showcases the application of machine learning and NLP for sentiment analysis, offering valuable insights into customer opinions and feedback.
          </p>
          
          <a 
            href="https://github.com/analyticsbyted/sentiment_analysis/blob/main/sentiment.ipynb" 
            target="_blank"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            View Jupyter Notebook Report
          </a>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-4">
            <a href="https://rpubs.com/dickeyt/wearabletech" target="_blank" className="text-blue-400 hover:text-blue-300">
              Comparative Sentiment Analysis
            </a>
          </h3>
          
          <div className="mb-4">
            <img src="/images/sentAnalysis_wearables.png" alt="Wearable Technology Sentiment Analysis" className="w-full rounded-lg" />
          </div>
          
          <div className="text-gray-300 space-y-4">
            <p>This 2020 project was conducted after Apple launched its latest iteration of an Apple Watch. We were interested to see how this new product offering might fare against its competition from Samsung and Fitbit.</p>
            
            <p>Data for the study was gathered using the Rtweet package in R to scrape data from Twitter related to Apple, Samsung, and Fitbit. Duplicates and retweets were removed. Tweet data was analyzed to detect patterns such as the time of day or day of the week. A few notable observations were discovered and presented in this study.</p>
            
            <p>Overall, with regard to user's positivity associated with each of the brands, Apple appeared to have the highest positivity score with 0.42 during the study period.</p>
          </div>
          
          <div className="mt-4">
            <a 
              href="https://rpubs.com/dickeyt/wearabletech" 
              target="_blank"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              View the full Wearable Technology Study
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}

export default SentimentSection