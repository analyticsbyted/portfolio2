import React from 'react'

const ClassificationSection = ({ closeSection }) => {
  return (
    <article id="classification" className="max-w-4xl">
      <h2 className="text-3xl font-bold mb-6">Image Classification</h2>
      
      <p className="text-gray-300 mb-6">
        Image Classification using CNN: This project aimed to develop a Convolutional Neural Network (CNN) model for image classification using the CIFAR-10 dataset. The objective was to accurately classify images into ten different classes, including objects like airplanes, automobiles, birds, cats, and more.
      </p>
      
      <div>
        <h3 className="text-xl font-bold mb-4">
          <a href="https://github.com/analyticsbyted/CNN-Image-Classification-CIFAR10/blob/main/README.md" target="_blank" className="text-blue-400 hover:text-blue-300">
            CIFAR-10 Image Samples
          </a>
        </h3>
        
        <div className="mb-4">
          <img src="/images/cifar10.png" alt="CIFAR-10 Dataset Samples" className="w-full rounded-lg" />
        </div>
        
        <div className="text-gray-300 space-y-4">
          <p>
            The dataset was preprocessed by resizing the images and normalizing pixel values. A CNN model was constructed, consisting of convolutional and pooling layers, followed by fully connected layers with a softmax activation function for multi-class classification.
          </p>
          
          <p>
            The evaluation metrics loss, accuracy, and a confusion matrix were analyzed. The results showed variations in the model's performance across different classes, indicating challenges in distinguishing certain classes.
          </p>
        </div>
        
        <div className="mt-6">
          <a 
            href="https://github.com/analyticsbyted/CNN-Image-Classification-CIFAR10/blob/main/CNN_Image_Classification_CIFAR10.ipynb" 
            target="_blank"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            View Jupyter Notebook
          </a>
        </div>
      </div>
    </article>
  )
}

export default ClassificationSection