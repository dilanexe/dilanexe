// SEO Schema Markup for The Elite Derma Care
export const clinicSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  '@id': 'https://theelitedermacare.com',
  name: 'The Elite Derma Care',
  description: 'Premium medical aesthetic clinic in Nugegoda offering advanced skin, hair, and body treatments',
  image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-21%20at%2016.07.25-nvr3N8ZFtKTVuLoF2yCudXuPCT0ZpF.jpeg',
  url: 'https://theelitedermacare.com',
  telephone: '+94706620020',
  email: 'contact@theelitedermacare.com',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Highlevel Road',
    addressLocality: 'Nugegoda',
    postalCode: '10250',
    addressCountry: 'LK'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 6.8667,
    longitude: 80.7856
  },
  medicalSpecialty: 'Dermatology, Cosmetic Medicine',
  serviceType: [
    'Aesthetic Medicine',
    'Dermatology',
    'Cosmetic Treatments',
    'Skin Rejuvenation',
    'Hair Restoration'
  ],
  areaServed: [
    'Nugegoda',
    'Colombo',
    'Sri Lanka'
  ],
  availableService: [
    {
      '@type': 'MedicalService',
      name: 'PRP Therapy',
      description: 'Platelet Rich Plasma treatment for skin and hair rejuvenation'
    },
    {
      '@type': 'MedicalService',
      name: 'Dermal Fillers',
      description: 'Advanced dermal filler treatments for facial contouring'
    },
    {
      '@type': 'MedicalService',
      name: 'Botox Treatment',
      description: 'Premium Botox injections for wrinkle reduction'
    },
    {
      '@type': 'MedicalService',
      name: 'Laser Hair Removal',
      description: 'Permanent hair reduction with advanced laser technology'
    },
    {
      '@type': 'MedicalService',
      name: 'Hydrafacial',
      description: 'Luxurious non-invasive facial treatment'
    },
    {
      '@type': 'MedicalService',
      name: 'Microneedling',
      description: 'Collagen stimulation for skin rejuvenation'
    },
    {
      '@type': 'MedicalService',
      name: 'Carbon Laser Peel',
      description: 'Hollywood carbon peel for deep skin cleansing'
    },
    {
      '@type': 'MedicalService',
      name: 'Acne Treatment',
      description: 'Comprehensive acne management and skin clearing'
    },
    {
      '@type': 'MedicalService',
      name: 'Pigmentation Treatment',
      description: 'Treatment for hyperpigmentation and dark spots'
    },
    {
      '@type': 'MedicalService',
      name: 'Hair Growth Treatment',
      description: 'Advanced solutions for hair loss and hair thinning'
    },
    {
      '@type': 'MedicalService',
      name: 'Collagen Induction Therapy',
      description: 'Natural skin lifting and rejuvenation'
    },
    {
      '@type': 'MedicalService',
      name: 'Chemical Peeling',
      description: 'Advanced peeling treatments for skin rejuvenation'
    },
    {
      '@type': 'MedicalService',
      name: 'Fat Burning & Body Contouring',
      description: 'Non-invasive body sculpting treatments'
    },
    {
      '@type': 'MedicalService',
      name: 'Wart Removal',
      description: 'Precision wart removal techniques'
    }
  ]
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'The Elite Derma Care',
  url: 'https://theelitedermacare.com',
  logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-21%20at%2016.07.25-nvr3N8ZFtKTVuLoF2yCudXuPCT0ZpF.jpeg',
  description: 'Premium medical aesthetic clinic in Nugegoda, Sri Lanka',
  telephone: '+94706620020',
  email: 'contact@theelitedermacare.com',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    telephone: '+94706620020',
    availableLanguage: ['en', 'si', 'ta']
  },
  sameAs: [
    'https://www.facebook.com/theelitedermacare',
    'https://www.instagram.com/theelitedermacare',
    'https://wa.me/94706620020'
  ]
}

export const LocalBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'The Elite Derma Care',
  image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-21%20at%2016.07.25-nvr3N8ZFtKTVuLoF2yCudXuPCT0ZpF.jpeg',
  description: 'Premium aesthetic medicine clinic offering 13+ advanced skin, hair, and body treatments',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Highlevel Road',
    addressLocality: 'Nugegoda',
    addressCountry: 'Sri Lanka',
    postalCode: '10250'
  },
  telephone: '+94706620020',
  url: 'https://theelitedermacare.com',
  priceRange: '$$',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '10:00',
    closes: '18:00'
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '100+'
  }
}
