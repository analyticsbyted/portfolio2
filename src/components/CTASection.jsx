import Button from './Button';

const CTASection = ({
  title,
  description,
  primaryButton,
  secondaryButton,
  className = ""
}) => {
  return (
    <section className={`mt-20 text-center bg-gradient-to-r from-brand-primary to-brand-secondary text-white p-12 rounded-2xl ${className}`}>
      <h2 className="text-4xl font-bold mb-6 font-headline">{title}</h2>
      <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
        {description}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          href={primaryButton.href}
          className="bg-brand-primary text-white hover:bg-brand-primary/90 hover:-translate-y-1 hover:shadow-xl active:translate-y-0 active:shadow-md active:bg-brand-primary/95 dark:bg-brand-primary dark:hover:bg-brand-primary/90 border-2 border-transparent px-8 py-4 text-lg font-semibold"
          aria-label={primaryButton.ariaLabel}
        >
          {primaryButton.text}
        </Button>
        {secondaryButton && (
          <Button
            href={secondaryButton.href}
            variant="outline"
            className="bg-surface text-foreground border-2 border-foreground/10 hover:bg-muted hover:-translate-y-1 hover:shadow-xl active:translate-y-0 active:shadow-md dark:bg-surface-dark dark:text-white dark:border-gray-700 dark:hover:bg-gray-800 px-8 py-4 text-lg font-semibold"
            aria-label={secondaryButton.ariaLabel}
          >
            {secondaryButton.text}
          </Button>
        )}
      </div>
    </section>
  );
};

export default CTASection;