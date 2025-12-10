import Button from '../components/Button';
import CTASection from '../components/CTASection';
import Card from '../components/Card';
import HeadMetadata from '../components/HeadMetadata';
import ImageWithSkeleton from '../components/ImageWithSkeleton';
import PhoneMockup from '../components/PhoneMockup';
import marisHome from '../assets/apps/maris-home.png';
import marisTimer from '../assets/apps/maris-timer.png';
import personSchema from '../seo/personSchema';
import websiteSchema from '../seo/websiteSchema';
import { useState, useEffect, useRef } from 'react';



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



function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
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
        description="Product Developer & Full-Stack Engineer building mobile apps and modern web experiences. Featured project: Maris—a cognitive behavioral tool for ADHD available on iOS and Android."
        canonical="/"
        keywords="Ted Dickey, product developer, mobile app development, React Native, iOS apps, Android apps, web development, Maris app, full-stack developer"
        schema={[personSchema, websiteSchema]}
      />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
        {/* Hero Section */}
        <section className="relative mb-0 overflow-hidden min-h-screen flex flex-col justify-center">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-transparent dark:from-blue-900/10 dark:via-purple-900/10 -z-10" />

          {/* Floating shapes */}
          <div className="absolute top-20 right-20 w-72 h-72 bg-blue-200/20 dark:bg-blue-800/10 rounded-full blur-3xl animate-pulse -z-10" style={{ animationDuration: '4s' }} />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-200/20 dark:bg-purple-800/10 rounded-full blur-3xl animate-pulse -z-10" style={{ animationDuration: '6s', animationDelay: '1s' }} />

          <div className="container mx-auto px-6 pt-10 pb-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
              {/* Text Content */}
              <div className="text-center lg:text-left order-2 lg:order-1 relative z-20">
                <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-medium text-sm tracking-wide">
                  Product Developer & Full-Stack Engineer
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-primary to-brand-secondary mb-6 font-headline tracking-tight leading-[1.1]">
                  Building Mobile Apps <br className="hidden lg:block" />& Digital Products
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-body">
                  I design and develop native iOS/Android apps, modern web platforms, and end-to-end software solutions.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <a
                    href="/work"
                    className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-brand-primary to-brand-secondary text-white rounded-xl text-lg font-semibold hover:from-brand-accent hover:to-brand-accent-alt hover:-translate-y-1 hover:shadow-xl active:translate-y-0 active:shadow-md transition-all duration-300 shadow-lg font-headline"
                  >
                    View My Work
                  </a>
                </div>
              </div>

              {/* Phone Mockup Column */}
              <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative z-10 perspective-1000">
                <div className="relative transform transition-transform duration-700 hover:rotate-0 lg:rotate-y-[-12deg] lg:rotate-x-[5deg]">
                  <PhoneMockup src={marisHome} alt="Maris App Home Screen" className="shadow-2xl" />
                  {/* Floating elements behind phone */}
                  <div className="absolute -top-10 -right-10 w-20 h-20 bg-yellow-400 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                  <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-brand-primary rounded-full blur-3xl opacity-20 animate-pulse delay-700"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Maris Feature Section */}
        <section className="py-16 bg-card border-y border-border relative overflow-hidden mb-16">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50/50 to-transparent dark:from-blue-900/10 pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1">
                <div className="flex items-center space-x-2 mb-4">
                  <span className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-lg">M</span>
                  <span className="text-brand-primary font-bold tracking-wider text-sm uppercase">Featured App</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-headline">
                  Maris: ADHD Management <br /> Reimagined.
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  A cognitive behavioral tool designed to help users master their focus. Built with React Native, Expo, and a focus on accessibility and native performance.
                </p>

                <div className="flex items-center gap-4 mb-10">
                  <div className="flex -space-x-4">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800 bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-xs font-bold text-gray-500">
                        U{i}
                      </div>
                    ))}
                  </div>
                  <div className="text-sm text-gray-500 font-medium">
                    Trusted by beta testers
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <button className="flex items-center px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-semibold hover:opacity-90 transition-opacity">
                    <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74 1.18 0 2.48-1.23 3.93-1.05 1.5.25 2.19.82 2.7 1.55-2.58 1.48-2.03 5.48.51 6.55-.47 1.4-1.12 2.78-2.22 5.18zm-2.12-14.8c.83-1.02 1.34-2.45 1.18-3.88-1.22.1-2.67.79-3.53 1.8-.75.88-1.41 2.3-1.23 3.65 1.37.1 2.76-.56 3.58-1.57z" />
                    </svg>
                    Download on iOS
                  </button>
                  <button className="flex items-center px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-semibold hover:opacity-90 transition-opacity">
                    <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3.609 1.814L13.792 12 3.61 22.186a.912.912 0 01-.253.076.902.902 0 01-.364-.067c-.439-.244-.578-.797-.307-1.238l9.162-9.162L2.686 2.633a.903.903 0 01.923-1.57v.75zm12.973 9.423l4.385-2.513a.901.901 0 01.88.006c.433.249.578.802.323 1.258l-4.72 8.165-2.427-2.427 1.559-4.489zM16.582 12l-1.56 4.49 2.428-2.428-4.72-8.166a.902.902 0 01.322-1.257.902.902 0 011.085.197l4.385 2.513-1.94 4.65z" />
                    </svg>
                    Get it on Android
                  </button>
                </div>
              </div>
              <div className="order-1 md:order-2 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>
                  {/* Insert Screen/Graphic for App Feature */}
                  <img src={marisTimer} alt="Maris App Timer Screen" className="relative z-10 w-64 md:w-80 rounded-[2.5rem] shadow-2xl border-8 border-gray-900 dark:border-gray-800 rotate-3 hover:rotate-0 transition-transform duration-500" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-20 px-4">
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
              <Card key={index} className="p-8 cursor-pointer bg-white dark:bg-card hover:shadow-xl hover:-translate-y-1 hover:border-blue-500/30 transition-all duration-300 group">
                <h3 className="text-headline-3 md:text-headline-3-md text-gray-900 dark:text-white mb-4 font-headline group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{service.title}</h3>
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
        <section className="mb-20 px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 font-headline">
              Building in Public & Shipping Products
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
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="mb-20 px-4">
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
