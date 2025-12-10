import Button from '../components/Button';
import CTASection from '../components/CTASection';
import HeadMetadata from '../components/HeadMetadata';
import personSchema from '../seo/personSchema';
import { useState } from 'react';

const stats = [
  { label: 'Years Experience', value: '10+', icon: '📊' },
  { label: 'Projects Completed', value: '50+', icon: '🚀' },
  { label: 'Industries Served', value: '8+', icon: '🏢' },
  { label: 'Certifications', value: '25+', icon: '🎓' }
];

const services = [
  {
    title: 'Mobile App Development',
    description: 'Native iOS and Android apps built with React Native, from concept to App Store',
    icon: '📱',
    features: ['iOS & Android Development', 'React Native & Expo', 'App Store Deployment', 'Native API Integration']
  },
  {
    title: 'Web Development',
    description: 'Modern, responsive websites and web applications built with React and TypeScript',
    icon: '🌐',
    features: ['React & Next.js', 'TypeScript', 'Responsive Design', 'Performance Optimization']
  },
  {
    title: 'Full-Stack Solutions',
    description: 'End-to-end product development from design to deployment',
    icon: '⚡',
    features: ['Frontend & Backend', 'Database Design', 'API Development', 'Cloud Deployment']
  },
  {
    title: 'Product Design & UX',
    description: 'User-centered design and modern UI/UX for engaging digital experiences',
    icon: '🎨',
    features: ['UI/UX Design', 'User Research', 'Prototyping', 'Design Systems']
  }
];

const expertise = [
  { name: 'React Native', level: 90 },
  { name: 'React', level: 95 },
  { name: 'TypeScript', level: 92 },
  { name: 'JavaScript', level: 93 },
  { name: 'Node.js', level: 85 },
  { name: 'Supabase/PostgreSQL', level: 88 }
];

function About() {
  const [activeService, setActiveService] = useState(0);

  return (
    <>
      <HeadMetadata
        title="About"
        description="Learn about Ted Dickey II—a data science professional and PhD candidate delivering intelligent web apps, AI agents, and analytics platforms across industries."
        canonical="/about"
        keywords="Ted Dickey background, AI consultant, PhD candidate, leadership experience, certifications, web app architect"
        schema={personSchema}
      />
      <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Hero Section - Deconstructed Layout */}
      <section className="relative mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full opacity-60"></div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight font-headline">
                Building Mobile Apps &
                <span className="text-blue-600 dark:text-blue-400 block">Modern Web Experiences</span>
              </h1>
            </div>
            
            <p className="text-body-large font-body text-gray-600 dark:text-gray-300">
              I'm <span className="font-semibold text-gray-900 dark:text-white">Ted Dickey II</span>, a full‑stack product developer building mobile apps and modern websites. I design and develop iOS, Android, and web applications—from concept to App Store.
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                PhD Candidate
              </span>
              <span className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
                25+ Certifications
              </span>
              <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">
                Multi-Industry Expert
              </span>
            </div>
          </div>

          {/* Right Column - Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          How I Can Help Your Business
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                activeService === index 
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' 
                  : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-blue-300'
              }`}
              onClick={() => setActiveService(index)}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                    <span className="text-blue-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Expertise Section */}
      <section className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left - Skills */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Technical Expertise</h2>
            <div className="space-y-6">
              {expertise.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Story */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">My Journey</h2>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">🎓 Academic Foundation</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  MS in Customer Analytics & MBA in Business Intelligence from Xavier University. Currently pursuing PhD in Technology.
                </p>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border-l-4 border-green-500">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">🚀 Product Development</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Built and launched Maris, a mobile focus timer app for iOS and Android. Creating user-facing products that solve real problems and ship to app stores.
                </p>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border-l-4 border-purple-500">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">🎯 Vision</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Building products that matter—mobile apps and web experiences that users love. From concept to launch, I focus on shipping real products that solve real problems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Build What’s Next?"
        description="Let's discuss how mobile apps and modern web experiences can bring your product vision to life."
        primaryButton={{
          href: "/contact",
          text: "Start a Conversation",
          ariaLabel: "Contact Ted for product development"
        }}
        secondaryButton={{
          href: "/work",
          text: "View My Work",
          ariaLabel: "View Ted's portfolio"
        }}
      />
    </div>
    </>
  );
}

export default About;