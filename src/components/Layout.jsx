import React from 'react'
import Background from './Background'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div id="wrapper" className="relative min-h-screen">
      <Background />
      <div className="relative z-10">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout