import React, { useState } from 'react'

// eslint-disable-next-line no-unused-vars
const ContactSection = ({ closeSection }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form will be submitted via formsubmit.co
  }

  return (
    <article id="contact" className="max-w-4xl">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>
      
      <p className="text-gray-300 mb-6">
        Please enter your Name and Email Address below along with your message, enquiries, or feedback.
      </p>
      
      <form 
        action="https://formsubmit.co/dickeyted84@gmail.com" 
        method="POST"
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <input type="hidden" name="_subject" value="New Contact Form Submission!" />
        <input type="hidden" name="_next" value="https://www.teddickey.com/#thankyou" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
            />
          </div>
        </div>
        
        <div>
          <textarea
            name="message"
            placeholder="Write your message here"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none resize-vertical"
          ></textarea>
        </div>
        
        <div className="flex gap-4">
          <button
            type="submit"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            Send Message
          </button>
          <button
            type="reset"
            onClick={() => setFormData({ name: '', email: '', message: '' })}
            className="px-8 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-semibold"
          >
            Reset
          </button>
        </div>
        
        <p className="text-sm text-gray-400">Will respond soon to submitted forms</p>
        
        <input type="hidden" name="comment" className="honey-pot" />
      </form>
      
      <div className="mt-8 flex justify-center space-x-6">
        <a href="https://www.linkedin.com/in/teddickey/" target="_blank" className="text-blue-400 hover:text-blue-300 text-2xl">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/analyticsbyted/" target="_blank" className="text-gray-400 hover:text-gray-300 text-2xl">
          <i className="fab fa-github"></i>
        </a>
      </div>
    </article>
  )
}

export default ContactSection