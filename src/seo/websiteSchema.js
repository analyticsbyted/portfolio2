const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Ted Dickey Portfolio',
  url: 'https://teddickey.com/',
  description:
    'Portfolio of Ted Dickey II—Data Science Professional & PhD Candidate delivering web apps, AI agents, and analytics platforms.',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://teddickey.com/?s={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

export default websiteSchema;

