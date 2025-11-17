import Button from '../components/Button';
import CTASection from '../components/CTASection';
import Card from '../components/Card';
import HeadMetadata from '../components/HeadMetadata';
import personSchema from '../seo/personSchema';
import websiteSchema from '../seo/websiteSchema';
import { useState, useEffect } from 'react';
import economicPulsePoster from '../assets/webapps/economic-kpi-pulse-poster.png';

const heroStats = [
  { value: '10+', label: 'Years Experience' },
  { value: '50+', label: 'Projects Delivered' },
  { value: '25+', label: 'Certifications' },
  { value: '8+', label: 'Industries' }
];

const services = [
  {
    title: 'Faster Time‑to‑Value',
    description: 'Ship MVPs in weeks, not months, with focused scopes and fast feedback loops.',
    color: 'blue'
  },
  {
    title: 'Measurable Impact',
    description: 'Proven outcomes like +25% forecast accuracy and 40% infra cost savings.',
    color: 'purple'
  },
  {
    title: 'Production‑Ready',
    description: 'CI/CD, observability, and security basics baked in from day one.',
    color: 'green'
  },
  {
    title: 'Partner‑Friendly',
    description: 'Transparent roadmaps, async updates, and clear SLAs that keep teams aligned.',
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

  // Icons removed for a more professional, minimalist presentation

  return (
    <>
      <HeadMetadata
        title="Home"
        description="Data Science Professional & PhD Candidate delivering production-ready web apps, AI agents, and data platforms that drive measurable outcomes."
        canonical="/"
        keywords="Ted Dickey, data science portfolio, web app development, AI agents, KPI dashboards, featured projects, consulting"
        schema={[personSchema, websiteSchema]}
      />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
      {/* Hero Section */}
      <section className="relative mb-20">
        <div className="text-center mb-16">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center px-3 py-1 rounded-full text-badge bg-gradient-to-r from-brand-primary to-brand-secondary text-white mb-4">
              Available for Web & AI Projects
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight font-headline">
              Building Intelligent
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
                Data, AI, and Web Apps
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed font-body">
              I build production‑ready web apps, AI agents, and data platforms that drive measurable outcomes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                href="/contact" 
                className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white hover:from-brand-accent hover:to-brand-accent-alt hover:-translate-y-1 hover:shadow-xl active:translate-y-0 active:shadow-md px-8 py-4 text-button font-headline"
                ariaLabel="Contact Ted for consulting services"
              >
                Start Your Project
              </Button>
              <Button 
                href="/work" 
                className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 hover:-translate-y-1 hover:shadow-xl active:translate-y-0 active:shadow-md px-8 py-4 text-button font-headline"
                ariaLabel="View Ted's portfolio"
              >
                View My Work
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Grid (moved up for at-a-glance KPIs) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-8 mb-12">
          {heroStats.map((stat, index) => (
            <div 
              key={index} 
              className={`text-center p-6 bg-card rounded-2xl shadow-lg border border-border hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">{stat.value}</div>
              <div className="text-body-md font-body text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Featured Project Strip */}
        <div className="mb-14 rounded-3xl overflow-hidden border border-border bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
          <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2">
              <h3 className="text-headline-3 md:text-headline-3-md text-gray-900 dark:text-white mb-2 font-headline">Featured: Economic KPI Pulse</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                A business‑friendly React + TypeScript dashboard visualizing US macro indicators from FRED—KPI tiles, YoY/MoM charts, compare view, recession shading, and PNG/CSV export.
              </p>
              <div className="flex gap-3">
                <a href="/work?tab=web" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-brand-primary to-brand-secondary text-white rounded-xl font-semibold hover:from-brand-accent hover:to-brand-accent-alt hover:-translate-y-1 hover:shadow-xl active:translate-y-0 active:shadow-md transition-all font-headline">
                  Explore Projects
                </a>
                <a href="https://economic-pulse.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-300 border-2 border-blue-300 dark:border-blue-600 rounded-xl hover:bg-blue-50 dark:hover:bg-gray-700 hover:-translate-y-1 hover:shadow-xl active:translate-y-0 active:shadow-md transition-all font-headline">
                  Live App
                </a>
              </div>
            </div>
            <div className="md:col-span-1">
              <div className="h-40 md:h-44 bg-muted/40 rounded-2xl flex items-center justify-center p-3">
                <img src={economicPulsePoster} alt="Economic KPI Pulse dashboard poster" className="h-full w-full object-contain" />
              </div>
            </div>
          </div>
        </div>

        {/* What I Do - 3 Pillars */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 font-headline">
            What I Do
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed font-body">
            Web Apps, AI/Agents, and Data Platforms—built for measurable business outcomes.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          <div className="rounded-2xl p-[1px] bg-gradient-to-r from-brand-primary/20 to-brand-secondary/20 hover:from-brand-primary/40 hover:to-brand-secondary/40 transition">
            <a href="/work?tab=web" className="block p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-all">
              <h3 className="text-headline-3 text-gray-900 dark:text-white mb-2 font-headline">Web Apps</h3>
              <p className="text-body font-body text-gray-600 dark:text-gray-300">Production React/TypeScript apps with robust data fetching and deployment.</p>
            </a>
          </div>
          <div className="rounded-2xl p-[1px] bg-gradient-to-r from-brand-primary/20 to-brand-secondary/20 hover:from-brand-primary/40 hover:to-brand-secondary/40 transition">
            <a href="/work?tab=ds" className="block p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-all">
              <h3 className="text-headline-3 text-gray-900 dark:text-white mb-2 font-headline">AI / Agents</h3>
              <p className="text-gray-600 dark:text-gray-300">ML models and agentic workflows for intelligent, automated experiences.</p>
            </a>
          </div>
          <div className="rounded-2xl p-[1px] bg-gradient-to-r from-brand-primary/20 to-brand-secondary/20 hover:from-brand-primary/40 hover:to-brand-secondary/40 transition">
            <a href="/work?tab=da" className="block p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-all">
              <h3 className="text-headline-3 text-gray-900 dark:text-white mb-2 font-headline">Data Platforms</h3>
              <p className="text-body font-body text-gray-600 dark:text-gray-300">Analytics, pipelines, and BI to operationalize data at scale.</p>
            </a>
          </div>
        </div>

        
      </section>

      {/* Services Section */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 font-headline">
            How I Deliver Results
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed font-body">
            Outcome‑focused delivery backed by real metrics and production standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-8 cursor-pointer">
              <h3 className="text-headline-3 md:text-headline-3-md text-gray-900 dark:text-white mb-4 font-headline">{service.title}</h3>
              <p className="text-body-md font-body text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="/work"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-brand-primary to-brand-secondary text-white rounded-xl text-button hover:from-brand-accent hover:to-brand-accent-alt hover:-translate-y-1 hover:shadow-xl active:translate-y-0 active:shadow-md transition-all shadow-lg font-headline"
          >
            See outcomes in Work
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 font-headline">
            Trusted by Industry Leaders
          </h2>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 text-center">
          <div className="transition-all duration-500 opacity-100">
            <blockquote className="text-headline-3 md:text-headline-3-md font-body text-gray-900 dark:text-white mb-6">
              "{testimonials[currentTestimonial].quote}"
            </blockquote>
            <div className="text-body-md font-body text-gray-600 dark:text-gray-300">
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
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 font-headline">
            Technologies I Work With
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-body">
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
        description="Let's discuss how modern web apps, AI agents, and data platforms can accelerate your growth and drive measurable results."
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
    </>
  );
}

export default Home;