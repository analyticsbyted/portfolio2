import Button from '../components/Button';
import CTASection from '../components/CTASection';
import { useState, useEffect } from 'react';

const heroStats = [
  { value: '10+', label: 'Years Experience', icon: '🎯' },
  { value: '50+', label: 'Projects Delivered', icon: '🚀' },
  { value: '25+', label: 'Certifications', icon: '🏆' },
  { value: '8+', label: 'Industries', icon: '🌐' }
];

const services = [
  {
    title: 'Data Science & Analytics',
    description: 'Turn your data into competitive advantage with predictive modeling and advanced analytics',
    icon: '🧠',
    color: 'blue'
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable cloud architecture and migration strategies that reduce costs and improve performance',
    icon: '☁️',
    color: 'purple'
  },
  {
    title: 'AI & Machine Learning',
    description: 'Custom AI solutions that automate processes and unlock new business opportunities',
    icon: '🤖',
    color: 'green'
  },
  {
    title: 'Business Intelligence',
    description: 'Interactive dashboards and reporting systems that drive data-informed decisions',
    icon: '📊',
    color: 'orange'
  }
];

const testimonials = [
  {
    quote: "Ted's expertise in data analytics transformed our decision-making process",
    author: "Healthcare Industry Client",
    role: "VP of Operations"
  },
  {
    quote: "His cloud migration strategy saved us 40% in infrastructure costs",
    author: "Manufacturing Company",
    role: "CTO"
  },
  {
    quote: "The predictive models Ted built increased our forecast accuracy by 25%",
    author: "Retail Organization",
    role: "Analytics Director"
  }
];

const technologies = [
  'Python', 'R', 'SQL', 'Tableau', 'Power BI', 'AWS', 'Azure', 'Snowflake', 'Alteryx', 'TensorFlow', 'scikit-learn', 'Docker'
];

function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900/30',
      purple: 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-900/30',
      green: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-900/30',
      orange: 'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800 hover:bg-orange-100 dark:hover:bg-orange-900/30'
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="relative mb-20">
        <div className="text-center mb-16">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Turning Data Into
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Strategic Advantage
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              I'm <span className="font-semibold text-gray-900 dark:text-white">Ted Dickey II</span>, a data science and cloud solutions specialist who helps organizations unlock the power of their data through advanced analytics, AI, and scalable cloud architectures.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                href="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 px-8 py-4 text-lg font-semibold"
                ariaLabel="Contact Ted for consulting services"
              >
                Start Your Data Journey
              </Button>
              <Button 
                href="/work" 
                className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 px-8 py-4 text-lg font-semibold"
                ariaLabel="View Ted's portfolio"
              >
                View My Work
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {heroStats.map((stat, index) => (
            <div 
              key={index} 
              className={`text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            How I Drive Business Results
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Specialized solutions that transform your data challenges into competitive advantages
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`p-8 rounded-2xl border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer ${getColorClasses(service.color)}`}
            >
              <div className="flex items-center mb-6">
                <div className="text-5xl mr-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{service.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Trusted by Industry Leaders
          </h2>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 text-center">
          <div className="transition-all duration-500 opacity-100">
            <blockquote className="text-2xl font-medium text-gray-900 dark:text-white mb-6">
              "{testimonials[currentTestimonial].quote}"
            </blockquote>
            <div className="text-lg text-gray-600 dark:text-gray-300">
              <div className="font-semibold">{testimonials[currentTestimonial].author}</div>
              <div>{testimonials[currentTestimonial].role}</div>
            </div>
          </div>
          
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
                }`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technologies I Work With
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Cutting-edge tools and platforms for modern data solutions
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-full border border-gray-200 dark:border-gray-700 hover:shadow-md hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Transform Your Business?"
        description="Let's discuss how data science, AI, and cloud solutions can accelerate your growth and drive measurable results."
        primaryButton={{
          href: "/contact",
          text: "Get Started Today",
          ariaLabel: "Contact Ted for consulting"
        }}
        secondaryButton={{
          href: "/certifications",
          text: "View Credentials",
          ariaLabel: "View Ted's certifications"
        }}
      />
    </div>
  );
}

export default Home;