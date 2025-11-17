import Button from './Button';

const CTASection = ({ 
  title, 
  description, 
  primaryButton, 
  secondaryButton,
  className = "" 
}) => {
  return (
    <section className={`mt-20 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-2xl ${className}`}>
      <h2 className="text-4xl font-bold mb-6 font-headline">{title}</h2>
      <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
        {description}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button 
          href={primaryButton.href} 
          className="bg-white text-gray-900 border-2 border-gray-800 hover:bg-gray-100 hover:-translate-y-1 hover:shadow-xl active:translate-y-0 active:shadow-md dark:bg-gray-900 dark:text-white dark:border-gray-700 dark:hover:bg-gray-800 px-8 py-4 text-lg font-semibold"
          ariaLabel={primaryButton.ariaLabel}
        >
          {primaryButton.text}
        </Button>
        <Button 
          href={secondaryButton.href} 
          className="bg-blue-600 text-white hover:bg-blue-700 hover:-translate-y-1 hover:shadow-xl active:translate-y-0 active:shadow-md active:bg-blue-800 dark:bg-gray-800 dark:hover:bg-gray-700 dark:active:bg-gray-900 border-2 border-white dark:border-gray-600 px-8 py-4 text-lg font-semibold"
          ariaLabel={secondaryButton.ariaLabel}
        >
          {secondaryButton.text}
        </Button>
      </div>
    </section>
  );
};

export default CTASection;