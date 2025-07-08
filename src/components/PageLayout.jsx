import React from 'react'
import { Link } from 'react-router-dom'

const PageLayout = ({ children, title }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-gray-900 bg-opacity-95 text-white p-8 rounded-lg max-w-4xl max-h-screen overflow-y-auto m-4 relative shadow-2xl">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">{title}</h1>
          <Link 
            to="/"
            className="text-white hover:text-gray-300 text-2xl font-bold px-3 py-1 hover:bg-gray-800 rounded transition-colors"
            title="Back to Home"
          >
            ×
          </Link>
        </div>
        {children}
        <div className="mt-8 pt-6 border-t border-gray-700">
          <Link 
            to="/"
            className="inline-block px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors font-semibold"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PageLayout