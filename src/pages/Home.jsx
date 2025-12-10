import Button from '../components/Button';
import CTASection from '../components/CTASection';
import Card from '../components/Card';
import HeadMetadata from '../components/HeadMetadata';
import ImageWithSkeleton from '../components/ImageWithSkeleton';
import personSchema from '../seo/personSchema';
import websiteSchema from '../seo/websiteSchema';
import { useState, useEffect, useRef } from 'react';
import { useCounter } from '../hooks/useCounter';
import marisTimer from '../assets/apps/maris-timer.png';

const heroStats = [
  { value: 10, suffix: '+', label: 'Years Experience', icon: '📊' },
  { value: 50, suffix: '+', label: 'Projects Delivered', icon: '🚀' },
  { value: 25, suffix: '+', label: 'Certifications', icon: '🎓' },
  { value: 8, suffix: '+', label: 'Industries', icon: '🏢' }
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
  'React', 'React Native', 'TypeScript', 'JavaScript', 'Expo', 'Next.js', 'Node.js', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'Python', 'AWS', 'Docker', 'Git'
];

function StatCard({ stat, index, isInView }) {
  const count = useCounter(stat.value, 2000, isInView);
  
  return (
    <div 
      className={`text-center p-6 bg-card rounded-2xl shadow-lg border-2 border-transparent bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden group transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Gradient border effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-brand-primary/20 via-brand-secondary/20 to-brand-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
      <div className="absolute inset-[2px] rounded-2xl bg-card -z-10" />
      
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-primary/50 via-brand-secondary/50 to-brand-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Icon */}
      <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
        {stat.icon}
      </div>
      
      {/* Animated counter */}
      <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent mb-2">
        {count}{stat.suffix}
      </div>
      
      {/* Label */}
      <div className="text-body-md font-body text-gray-600 dark:text-gray-400">
        {stat.label}
      </div>
    </div>
  );
}

function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [statsInView, setStatsInView] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Intersection Observer for stats animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStatsInView(true);
          }
        });
      },
      { threshold: 0.1, rootMargin: '-100px' }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  // Icons removed for a more professional, minimalist presentation

  return (
    <>
      <HeadMetadata
        title="Home"
        description="Product Developer & Full-Stack Engineer building mobile apps and modern web experiences. Featured project: Maris—a cognitive behavioral tool for ADHD available on iOS and Android."
        canonical="/"
        keywords="Ted Dickey, product developer, mobile app development, React Native, iOS apps, Android apps, web development, Maris app, full-stack developer"
        schema={[personSchema, websiteSchema]}
      />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
      {/* Hero Section */}
      <section className="relative mb-20 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-transparent dark:from-blue-900/10 dark:via-purple-900/10 -z-10" />
        
        {/* Floating shapes */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-200/20 dark:bg-blue-800/10 rounded-full blur-3xl animate-pulse -z-10" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-200/20 dark:bg-purple-800/10 rounded-full blur-3xl animate-pulse -z-10" style={{ animationDuration: '6s', animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-300/10 dark:bg-blue-700/5 rounded-full blur-3xl animate-pulse -z-10" style={{ animationDuration: '5s', animationDelay: '2s' }} />
        
        {/* Hero Content */}
        <div className="relative z-10 text-center mb-16">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center px-3 py-1 rounded-full text-badge bg-gradient-to-r from-brand-primary to-brand-secondary text-white mb-4 shadow-lg">
              Product Developer & Full-Stack Engineer
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight font-headline">
              Building Mobile Apps &
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
                Modern Web Experiences
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed font-body">
              I design and develop mobile apps, modern websites, and full-stack applications—from concept to App Store.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                href="/contact" 
                className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white hover:from-brand-accent hover:to-brand-accent-alt hover:-translate-y-1 hover:shadow-xl active:translate-y-0 active:shadow-md px-8 py-4 text-button font-headline shadow-lg"
                ariaLabel="Contact Ted for product development services"
              >
                Start Your Project
              </Button>
              <Button 
                href="/work" 
                className="bg-surface dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 hover:-translate-y-1 hover:shadow-xl active:translate-y-0 active:shadow-md px-8 py-4 text-button font-headline"
                ariaLabel="View Ted's portfolio"
              >
                View My Work
              </Button>
            </div>
          </div>
        </div>

        {/* Enhanced Stats Grid */}
        <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-8 mb-12">
          {heroStats.map((stat, index) => (
            <StatCard 
              key={index}
              stat={stat}
              index={index}
              isInView={statsInView}
            />
          ))}
        </div>

        {/* Featured Project Strip */}
        <div className="mb-14 rounded-3xl overflow-hidden border border-border bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
          <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2">
              <div className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-brand-primary to-brand-secondary text-white mb-3">
                Featured Project
              </div>
              <h3 className="text-headline-3 md:text-headline-3-md text-gray-900 dark:text-white mb-2 font-headline">Maris</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                A cognitive behavioral tool for ADHD brains—when willpower isn't enough. Native iOS and Android app with intent-based friction, strict mode, and a visually quiet "Liquid Glass" UI designed to reduce sensory overload.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="/work?tab=apps" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-brand-primary to-brand-secondary text-white rounded-xl font-semibold hover:from-brand-accent hover:to-brand-accent-alt hover:-translate-y-1 hover:shadow-xl active:translate-y-0 active:shadow-md transition-all font-headline">
                  View Project
                </a>
                <a href="https://trymaris.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-surface dark:bg-gray-800 text-blue-600 dark:text-blue-300 border-2 border-blue-300 dark:border-blue-600 rounded-xl hover:bg-blue-50 dark:hover:bg-gray-700 hover:-translate-y-1 hover:shadow-xl active:translate-y-0 active:shadow-md transition-all font-headline">
                  Visit Website
                </a>
              </div>
            </div>
            <div className="md:col-span-1">
              <div className="bg-muted/40 rounded-2xl flex items-center justify-center p-4" style={{ minHeight: '320px', maxHeight: '500px' }}>
                <ImageWithSkeleton 
                  src={marisTimer} 
                  alt="Maris mobile app timer screen" 
                  className="max-h-full w-auto object-contain"
                  style={{ maxHeight: '460px' }}
                  loading="lazy"
                />
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
            Mobile Apps, Web Development, and Full-Stack Solutions—built for measurable business outcomes.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {[
            {
              title: 'Mobile Apps',
              description: 'Native iOS and Android apps built with React Native, from concept to App Store.',
              href: '/work?tab=apps',
              gradient: 'from-blue-500/10 to-purple-500/10'
            },
            {
              title: 'Web Development',
              description: 'Modern, responsive websites and web applications built with React and TypeScript.',
              href: '/work?tab=web',
              gradient: 'from-purple-500/10 to-pink-500/10'
            },
            {
              title: 'Full-Stack Solutions',
              description: 'End-to-end product development from design to deployment and beyond.',
              href: '/work',
              gradient: 'from-pink-500/10 to-blue-500/10'
            }
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="group relative rounded-2xl bg-card border-2 border-border hover:border-brand-primary/50 dark:hover:border-brand-primary/50 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              {/* Content */}
              <div className="relative p-6 h-full flex flex-col">
                {/* Title */}
                <h3 className="text-headline-3 text-gray-900 dark:text-white mb-3 font-headline">
                  {item.title}
                </h3>
                
                {/* Description */}
                <p className="text-body font-body text-gray-600 dark:text-gray-300 flex-grow">
                  {item.description}
                </p>
                
                {/* Arrow indicator */}
                <div className="mt-4 flex items-center text-brand-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-semibold mr-2">Learn more</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              
              {/* Gradient top border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          ))}
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
            See outcomes in Portfolio
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
            Modern tools and frameworks for building mobile apps and web experiences
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-6 py-3 bg-surface dark:bg-gray-800 text-gray-900 dark:text-white rounded-full border border-gray-200 dark:border-gray-700 hover:shadow-md hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 font-medium"
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