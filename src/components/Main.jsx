import React from 'react'
import IntroSection from './sections/IntroSection'
import SentimentSection from './sections/SentimentSection'
import ClassificationSection from './sections/ClassificationSection'
import ForecastSection from './sections/ForecastSection'
import SupplySection from './sections/SupplySection'
import MLSection from './sections/MLSection'
import VizzesSection from './sections/VizzesSection'
import ContactSection from './sections/ContactSection'

const Main = ({ activeSection, closeSection }) => {
  const renderSection = () => {
    switch(activeSection) {
      case 'intro':
        return <IntroSection closeSection={closeSection} />
      case 'sentiment':
        return <SentimentSection closeSection={closeSection} />
      case 'classification':
        return <ClassificationSection closeSection={closeSection} />
      case 'forecast':
        return <ForecastSection closeSection={closeSection} />
      case 'supply':
        return <SupplySection closeSection={closeSection} />
      case 'ml':
        return <MLSection closeSection={closeSection} />
      case 'vizzes':
        return <VizzesSection closeSection={closeSection} />
      case 'contact':
        return <ContactSection closeSection={closeSection} />
      default:
        return null
    }
  }

  if (!activeSection) return null

  return (
    <div id="main" className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50">
      <div className="bg-gray-900 text-white p-8 rounded-lg max-w-4xl max-h-screen overflow-y-auto m-4 relative">
        <button 
          onClick={closeSection}
          className="absolute top-4 right-4 text-white hover:text-gray-300 text-2xl"
        >
          ×
        </button>
        {renderSection()}
      </div>
    </div>
  )
}

export default Main