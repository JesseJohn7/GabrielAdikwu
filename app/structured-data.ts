export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  '@id': 'https://gabriel-adikwu.vercel.app',
  name: 'Gabriel Adikwu & Co.',
  url: 'https://gabriel-adikwu.vercel.app',
  image: 'https://gabriel-adikwu.vercel.app/logo.jpg',
  description:
    'Gabriel Adikwu & Co. is a distinguished law firm offering expert legal solutions, advocacy, and consultation services across Nigeria.',
  slogan: 'Expert Legal Solutions & Professional Representation',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'NG',
    addressRegion: 'Nigeria',
  },
  sameAs: [
    'https://www.linkedin.com/company/gabriel-adikwu-co',
    'https://www.twitter.com/gabrieladikwu',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Legal Services',
    availableLanguage: 'en',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Nigeria',
  },
  priceRange: '$$$',
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://gabriel-adikwu.vercel.app',
    },
  ],
}
