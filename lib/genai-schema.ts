/**
 * GenAI-Optimized Structured Data
 * Designed for AI systems, search engines, and knowledge graphs
 * Includes comprehensive clinic, service, and professional information
 */

export const clinicBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["MedicalBusiness", "HealthAndBeautyBusiness"],
  "@id": "https://theelitedermacare.com",
  
  // Business Identity
  "name": "The Elite Derma Care",
  "alternateName": [
    "Elite Derma Care",
    "Elite Derma Care Clinic",
    "Elite Aesthetic Clinic"
  ],
  
  // Location - Geo-specific for Sri Lanka
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Nugegoda, Western Province",
    "addressLocality": "Nugegoda",
    "addressRegion": "Western",
    "postalCode": "10250",
    "addressCountry": "LK",
    "geoCoordinates": {
      "@type": "GeoCoordinates",
      "latitude": "6.8935",
      "longitude": "80.7718"
    }
  },
  
  // Contact Information
  "contact": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "telephone": "+94706620020",
    "email": "info@theelitedermacare.com"
  },
  "telephone": "+94706620020",
  "email": "info@theelitedermacare.com",
  
  // Business Hours
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Sunday",
      "opens": "10:00",
      "closes": "16:00"
    }
  ],
  
  // Professional
  "medicalSpecialty": [
    "Dermatology",
    "Aesthetic Medicine",
    "Cosmetic Surgery"
  ],
  
  // Website
  "url": "https://theelitedermacare.com",
  "image": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/doctor-b8l03qVHvPTzSlhaHCQtafOJEcNQkv.png",
  
  // Services offered (all 14 services)
  "availableService": [
    "PRP Therapy",
    "Botox Treatment",
    "Dermal Filler",
    "Carbon Laser Peel",
    "Chemical Peeling",
    "Collagen Induction Therapy",
    "Fat Burning Treatment",
    "Hair Growth Treatment",
    "Hydrafacial",
    "Laser Hair Removal",
    "Microneedling",
    "Pigmentation Treatment",
    "Acne Treatment",
    "Wart Removal"
  ],
  
  // Staff Information
  "staff": {
    "@type": "Person",
    "name": "Dr. Elite Derma Care",
    "jobTitle": "Aesthetic Medicine Specialist",
    "medicalSpecialty": "Dermatology & Aesthetic Medicine",
    "image": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/doctor-b8l03qVHvPTzSlhaHCQtafOJEcNQkv.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Medical Professional"
    }
  },
  
  // Service Area - Geo-targeting
  "areaServed": [
    {
      "@type": "City",
      "name": "Nugegoda",
      "addressCountry": "LK"
    },
    {
      "@type": "City",
      "name": "Colombo",
      "addressCountry": "LK"
    },
    {
      "@type": "Country",
      "name": "Sri Lanka"
    }
  ],
  
  // Ratings (placeholder for future reviews)
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "50+"
  },
  
  // Social Media & Online Presence
  "sameAs": [
    "https://www.facebook.com/elitedermacare",
    "https://www.instagram.com/elitedermacare",
    "https://www.whatsapp.com/message/",
    "https://theelitedermacare.com"
  ],
  
  // Description
  "description": "Premier aesthetic medicine clinic in Nugegoda, Sri Lanka offering 14+ advanced treatments including PRP therapy, dermal fillers, Botox injections, laser hair removal, hydrafacial, microneedling, and pigmentation treatment. Expert dermatologist providing safe, effective, and natural-looking results.",
  
  // Keywords for search
  "keywords": [
    "aesthetic clinic Nugegoda",
    "dermatology Sri Lanka",
    "medical aesthetics",
    "cosmetic treatments",
    "PRP therapy",
    "dermal fillers",
    "laser treatments",
    "skin rejuvenation",
    "Botox treatment",
    "aesthetic medicine Sri Lanka"
  ]
};

// Individual Service Schema - Template
export const serviceDetailSchema = (serviceName: string, description: string, image: string) => ({
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  "name": serviceName,
  "description": description,
  "procedureType": "Aesthetic/Cosmetic",
  "image": image,
  "provider": {
    "@type": "MedicalBusiness",
    "name": "The Elite Derma Care",
    "url": "https://theelitedermacare.com"
  },
  "areaServed": {
    "@type": "City",
    "name": "Nugegoda, Sri Lanka"
  },
  "medicalSpecialty": "Dermatology"
});

// FAQ Schema for common questions
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What aesthetic treatments do you offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer 14+ advanced treatments including PRP therapy, Botox, dermal fillers, laser hair removal, hydrafacial, microneedling, carbon laser peel, collagen induction therapy, pigmentation treatment, and more."
      }
    },
    {
      "@type": "Question",
      "name": "Where is your clinic located?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Elite Derma Care is located in Nugegoda, Western Province, Sri Lanka. We serve patients from Colombo and surrounding areas."
      }
    },
    {
      "@type": "Question",
      "name": "Are your treatments safe?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, all our treatments are performed by an experienced aesthetic medicine specialist using FDA-approved equipment and safe medical-grade techniques."
      }
    },
    {
      "@type": "Question",
      "name": "How do I book a consultation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can contact us via WhatsApp at +94706620020, email info@theelitedermacare.com, or visit our clinic in Nugegoda to book your consultation."
      }
    }
  ]
};

// Breadcrumb Schema
export const breadcrumbSchema = (serviceName: string) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://theelitedermacare.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://theelitedermacare.com/services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": serviceName,
      "item": `https://theelitedermacare.com/services/${serviceName.toLowerCase().replace(/\s+/g, '-')}`
    }
  ]
});

// Local Business Schema - Enhanced for Sri Lanka market
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "The Elite Derma Care",
  "image": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/doctor-b8l03qVHvPTzSlhaHCQtafOJEcNQkv.png",
  "description": "Leading aesthetic clinic in Nugegoda, Sri Lanka with expert dermatologist",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Nugegoda",
    "addressLocality": "Nugegoda",
    "addressRegion": "Western",
    "postalCode": "10250",
    "addressCountry": "LK"
  },
  "telephone": "+94706620020",
  "url": "https://theelitedermacare.com",
  "priceRange": "$$$",
  "ratingValue": 4.9,
  "reviewCount": 50,
  "geo": {
    "@type": "GeoShape",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 6.8935,
      "longitude": 80.7718
    },
    "geoRadius": "10km"
  }
};
