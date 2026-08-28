import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Geist, Geist_Mono } from 'next/font/google'
import { WhatsAppButton } from '@/components/whatsapp-button'
import './globals.css'

// Lazy load schema to improve initial page load
const loadSchemas = async () => {
  const { clinicSchema, organizationSchema, LocalBusinessSchema } = await import('@/lib/schema')
  return { clinicSchema, organizationSchema, LocalBusinessSchema }
}

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Elite Derma Care - Premium Aesthetic Clinic in Nugegoda, Sri Lanka | Medical Dermatology',
  description: 'Leading aesthetic clinic in Nugegoda, Western Province, Sri Lanka offering 15+ advanced skin treatments. Expert Botox, PRP therapy, dermal fillers, laser hair removal, hydrafacial, carbon laser peel, chemical peeling & pigmentation treatments. Book consultation now!',
  keywords: 'aesthetic clinic Nugegoda, aesthetic dermatology Sri Lanka, PRP therapy Colombo, dermal fillers, Botox injections, laser hair removal Nugegoda, hydrafacial treatment, carbon laser peel, skin rejuvenation, medical aesthetics, cosmetic treatments Western Province, pigmentation treatment, chemical peeling therapy, skin treatment Sri Lanka',
  authors: [{ name: 'The Elite Derma Care' }],
  creator: 'The Elite Derma Care',
  publisher: 'The Elite Derma Care',
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  generator: 'v0.app',
  metadataBase: new URL('https://elitedermacare.vercel.app'),
  alternates: {
    canonical: 'https://elitedermacare.vercel.app',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Elite Derma Care | Aesthetic Clinic in Nugegoda',
    description: 'Expert-led aesthetic and skin treatments in Nugegoda, Sri Lanka. Book your consultation on WhatsApp.',
    images: ['https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-21%20at%2016.07.25-nvr3N8ZFtKTVuLoF2yCudXuPCT0ZpF.jpeg'],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://elitedermacare.vercel.app',
    title: 'The Elite Derma Care - Premium Medical Aesthetic Clinic in Nugegoda',
    description: 'Expert aesthetic treatments in Nugegoda, Sri Lanka. 15+ advanced services including PRP, fillers, laser treatments & more.',
    images: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-21%20at%2016.07.25-nvr3N8ZFtKTVuLoF2yCudXuPCT0ZpF.jpeg',
        width: 1200,
        height: 630,
        alt: 'The Elite Derma Care - Aesthetic Clinic Logo',
      },
    ],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`light ${geistSans.variable} ${geistMono.variable} bg-background`}>
      <head>
        {/* Preconnect to external resources for faster image loading */}
        <link rel="preconnect" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com" />
        <link rel="dns-prefetch" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com" />
        
        {/* Medical Business Schema - Core clinic information */}
        <Script
          id="clinic-schema"
          type="application/ld+json"
          async
          dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":["MedicalBusiness","HealthAndBeautyBusiness"],"name":"The Elite Derma Care","description":"Premier aesthetic medicine clinic in Nugegoda, Sri Lanka offering 15+ advanced treatments including PRP therapy, dermal fillers, Botox, laser hair removal, hydrafacial, carbon laser peel, chemical peeling, and more.","url":"https://elitedermacare.vercel.app","address":{"@type":"PostalAddress","streetAddress":"276 Highlevel Road, Nugegoda","addressLocality":"Nugegoda","addressRegion":"Western Province","postalCode":"6000","addressCountry":"LK"},"telephone":"+94706620020","email":"dermacareelite@gmail.com","image":"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260712-WA0045-C5EFu6gi3girgkAui192930dyBxRjI.jpg","medicalSpecialty":["Dermatology","Aesthetic Medicine","Cosmetic Surgery"],"areaServed":[{"@type":"City","name":"Nugegoda"},{"@type":"City","name":"Colombo"},{"@type":"State","name":"Western Province"},{"@type":"Country","name":"Sri Lanka"}],"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.9","reviewCount":"120"}}) }}
          strategy="afterInteractive"
        />
        
        {/* Local Business Schema - Geo-optimization for Sri Lanka */}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          async
          dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"LocalBusiness","@id":"https://elitedermacare.vercel.app","name":"The Elite Derma Care","url":"https://elitedermacare.vercel.app","telephone":"+94706620020","email":"dermacareelite@gmail.com","address":{"@type":"PostalAddress","streetAddress":"276 Highlevel Road","addressLocality":"Nugegoda","addressRegion":"Western Province","postalCode":"6000","addressCountry":"LK"},"image":"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260712-WA0045-C5EFu6gi3girgkAui192930dyBxRjI.jpg","priceRange":"$$","aggregateRating":{"@type":"AggregateRating","ratingValue":"4.9","ratingCount":"120"},"sameAs":["https://www.facebook.com/theelitedermacare","https://www.instagram.com/theelitedermacare"]}) }}
          strategy="afterInteractive"
        />
        
        {/* FAQ Schema - Common questions for GenAI optimization */}
        <Script
          id="faq-schema"
          type="application/ld+json"
          async
          dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What aesthetic treatments do you offer in Nugegoda?","acceptedAnswer":{"@type":"Answer","text":"15+ advanced treatments: PRP therapy, Botox, dermal fillers, laser hair removal, hydrafacial, carbon laser peel, chemical peeling, collagen induction, pigmentation treatment, acne treatment, wart removal, fat burning, hair growth treatment, and more. All performed by expert doctors using industry-proven techniques."}},{"@type":"Question","name":"Where is the Elite Derma Care clinic located in Sri Lanka?","acceptedAnswer":{"@type":"Answer","text":"276 Highlevel Road, Nugegoda, Western Province, Sri Lanka. Easy parking and accessible entry. We serve patients from Colombo and surrounding areas."}},{"@type":"Question","name":"Are aesthetic treatments safe?","acceptedAnswer":{"@type":"Answer","text":"Yes, all treatments are performed by qualified doctors using FDA-approved products and equipment with proven safety records. We follow industry-proven techniques for optimal results with minimal downtime."}},{"@type":"Question","name":"How do I book a consultation?","acceptedAnswer":{"@type":"Answer","text":"Contact us via our website contact form, call +94 70 6620020, or visit our clinic. All inquiries are emailed to dermacareelite@gmail.com for prompt response within 24 hours."}}]}) }}
          strategy="afterInteractive"
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <WhatsAppButton />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
