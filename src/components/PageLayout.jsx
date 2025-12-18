import React from 'react'
import { Link } from 'react-router-dom'

const PageLayout = ({ children, title }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-surface/95 dark:bg-surface-dark/95 backdrop-blur text-foreground dark:text-white p-8 rounded-lg max-w-4xl max-h-screen overflow-y-auto m-4 relative shadow-2xl border border-border">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">{title}</h1>
          <Link
            to="/"
            className="text-foreground dark:text-white hover:text-muted-foreground text-2xl font-bold px-3 py-1 hover:bg-muted dark:hover:bg-muted rounded transition-colors"
            title="Back to Home"
          >
            ×
          </Link>
        </div>
        {children}
        <div className="mt-8 pt-6 border-t border-border dark:border-gray-700">
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-muted dark:bg-muted text-foreground dark:text-white rounded-lg hover:bg-muted/80 transition-colors font-semibold"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PageLayout