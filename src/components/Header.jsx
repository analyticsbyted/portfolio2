import React from 'react'

const Header = ({ activeSection, setActiveSection }) => {
  return (
    <header id="header" className="flex flex-col items-center justify-center min-h-screen text-center text-white p-8">
      <div className="content">
        <div className="inner max-w-4xl">
          <h1 className="text-5xl font-bold mb-4">Ted Dickey II, MS, MBA</h1>
          <h2 className="text-3xl font-semibold mb-6">PhD Candidate</h2>
          <p className="text-lg mb-6 leading-relaxed">
            A Data Science professional with over 6 years of experience<br/><br/>
            Data Scientist <br/>Marketing, Supply Chain & Operational Analytics <br/>BI Analyst & Developer <br/>ML Dev Ops Engineer
          </p>
          <p className="text-yellow-400 font-bold text-lg mb-8">AWS, Microsoft, Azure, and IBM Certified</p>
        </div>
      </div>
      <nav className="mt-8">
        <ul className="flex flex-wrap justify-center gap-4">
          <li>
            <button 
              onClick={() => setActiveSection('intro')}
              className="px-6 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 rounded-lg"
            >
              Intro
            </button>
          </li>
          <li>
            <button 
              onClick={() => setActiveSection('sentiment')}
              className="px-6 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 rounded-lg"
            >
              NLP
            </button>
          </li>
          <li>
            <button 
              onClick={() => setActiveSection('classification')}
              className="px-6 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 rounded-lg"
            >
              Image Analysis
            </button>
          </li>
          <li>
            <button 
              onClick={() => setActiveSection('forecast')}
              className="px-6 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 rounded-lg"
            >
              Time-Series
            </button>
          </li>
          <li>
            <button 
              onClick={() => setActiveSection('supply')}
              className="px-6 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 rounded-lg"
            >
              Operations
            </button>
          </li>
          <li>
            <button 
              onClick={() => setActiveSection('ml')}
              className="px-6 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 rounded-lg"
            >
              Others
            </button>
          </li>
          <li>
            <button 
              onClick={() => setActiveSection('vizzes')}
              className="px-6 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 rounded-lg"
            >
              Dashboards
            </button>
          </li>
          <li>
            <button 
              onClick={() => setActiveSection('contact')}
              className="px-6 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 rounded-lg"
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header