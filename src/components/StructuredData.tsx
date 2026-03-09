'use client';

export function StructuredData() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Ebilify',
    url: 'https://ebilify.com',
    logo: 'https://ebilify.com/icon.jpg',
    description:
      'Professional digital solutions, content writing, and brand development services',
    sameAs: [
    //   'https://www.facebook.com/ebilify',
    //   'https://www.twitter.com/ebilify',
      'https://www.linkedin.com/company/ebilify',
      'https://www.instagram.com/ebilify',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'support@ebilify.com',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
