/**
 * Schema Markup Component for SEO & GenAI Optimization
 * Provides structured data for Google, Bing, ChatGPT, Perplexity, and other AI search engines
 */

export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    '@id': 'https://elitedermacare.vercel.app',
    name: 'The Elite Derma Care',
    description: 'Leading aesthetic dermatology clinic in Nugegoda, Sri Lanka. Specializing in laser treatments, Botox, fillers, and advanced skin care procedures.',
    url: 'https://elitedermacare.vercel.app',
    telephone: '+94-XXX-XXXXXX',
    email: 'dermacareelite@gmail.com',
    areaServed: [
      {
        '@type': 'State',
        name: 'Western Province',
        containsPlace: {
          '@type': 'City',
          name: 'Colombo'
        }
      },
      {
        '@type': 'City',
        name: 'Nugegoda'
      }
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Nugegoda',
      addressLocality: 'Colombo',
      addressRegion: 'Western Province',
      postalCode: '6000',
      addressCountry: 'LK'
    },
    sameAs: [
      'https://www.facebook.com/theelitedermacare',
      'https://www.instagram.com/theelitedermacare',
      'https://www.tiktok.com/@theelitedermacare'
    ],
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-21%20at%2016.07.25-nvr3N8ZFtKTVuLoF2yCudXuPCT0ZpF.jpeg',
    medicalSpecialty: [
      'Dermatology',
      'Aesthetic Medicine',
      'Laser Therapy',
      'Non-invasive Surgery'
    ],
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '18:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '10:00',
        closes: '16:00'
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function ServiceSchema({ serviceId, title, description, duration, recovery, image, price = 'Call for pricing' }: any) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: title,
    description: description,
    url: `https://elitedermacare.vercel.app/services/${serviceId}`,
    provider: {
      '@type': 'MedicalBusiness',
      name: 'The Elite Derma Care',
      url: 'https://elitedermacare.vercel.app',
      areaServed: 'Nugegoda, Colombo, Sri Lanka'
    },
    procedureType: title,
    procedureDuration: duration ? `PT${duration.replace(/[^0-9]/g, '')}M` : undefined,
    recoveryTime: recovery || 'Minimal downtime',
    image: image,
    offers: {
      '@type': 'Offer',
      price: price,
      priceCurrency: 'LKR',
      availability: 'https://schema.org/InStock',
      url: `https://elitedermacare.vercel.app/services/${serviceId}`
    },
    medicalSpecialty: 'Dermatology'
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function FAQSchema({ faqs }: { faqs: Array<{ question: string; answer: string }> }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function AggregateRatingSchema({ ratingValue = 4.8, reviewCount = 120, name = 'The Elite Derma Care' }: any) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: name,
    url: 'https://elitedermacare.vercel.app',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: ratingValue,
      reviewCount: reviewCount,
      bestRating: 5,
      worstRating: 1
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function BreadcrumbSchema({ items }: { items: Array<{ name: string; url: string }> }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
