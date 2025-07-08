import React from 'react'

const Background = () => {
  return (
    <>
      <div 
        id="bg" 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10"
        style={{
          backgroundImage: 'url("/images/bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      <div className="fixed inset-0 bg-black opacity-60 -z-10"></div>
    </>
  )
}

export default Background