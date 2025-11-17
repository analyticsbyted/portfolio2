const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Ted Dickey II',
  jobTitle: 'Data Science Professional & PhD Candidate',
  url: 'https://teddickey.com',
  image: 'https://teddickey.com/favicon-td.svg',
  sameAs: [
    'https://www.linkedin.com/in/teddickey',
    'https://github.com/analyticsbyted',
    'https://huggingface.co/analyticsbyted',
  ],
  worksFor: {
    '@type': 'Organization',
    name: 'Analytics by Ted',
  },
  alumniOf: [
    {
      '@type': 'CollegeOrUniversity',
      name: 'Xavier University',
    },
    {
      '@type': 'CollegeOrUniversity',
      name: 'University of Cincinnati',
    },
  ],
  knowsAbout: [
    'Data Science',
    'Machine Learning',
    'Artificial Intelligence',
    'Web Development',
    'Cloud Computing',
    'Analytics',
    'Business Intelligence',
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'Work',
      email: 'mailto:ted@teddickey.com',
      url: 'https://teddickey.com/contact',
    },
  ],
};

export default personSchema;

