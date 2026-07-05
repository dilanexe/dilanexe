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
  description: 'Leading aesthetic clinic in Nugegoda, Sri Lanka offering 14+ advanced skin treatments. Expert Botox, PRP therapy, dermal fillers, laser hair removal, hydrafacial, microneedling, carbon laser peel, collagen induction & pigmentation treatments. Get consultation now!',
  keywords: 'aesthetic clinic Nugegoda, aesthetic dermatology Sri Lanka, PRP therapy, dermal fillers, Botox injections, laser hair removal Colombo, hydrafacial treatment, microneedling, skin rejuvenation, medical aesthetics, cosmetic treatments Nugegoda, pigmentation treatment, collagen induction therapy, carbon laser peel',
  authors: [{ name: 'The Elite Derma Care' }],
  creator: 'The Elite Derma Care',
  publisher: 'The Elite Derma Care',
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  generator: 'v0.app',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://theelitedermacare.com',
    title: 'The Elite Derma Care - Premium Medical Aesthetic Clinic',
    description: 'Expert aesthetic treatments in Nugegoda, Sri Lanka. 13+ services including PRP, fillers, laser treatments & more.',
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
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} bg-background`}>
      <head>
        {/* Preconnect to external resources for faster image loading */}
        <link rel="preconnect" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com" />
        <link rel="dns-prefetch" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com" />
        
        {/* Medical Business Schema - Core clinic information */}
        <Script
          id="clinic-schema"
          type="application/ld+json"
          async
          dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":["MedicalBusiness","HealthAndBeautyBusiness"],"name":"The Elite Derma Care","description":"Premier aesthetic medicine clinic in Nugegoda, Sri Lanka offering 14+ advanced treatments including PRP therapy, dermal fillers, Botox, laser hair removal, hydrafacial, and more.","url":"https://theelitedermacare.com","address":{"@type":"PostalAddress","streetAddress":"Nugegoda, Western Province","addressLocality":"Nugegoda","addressRegion":"Western","postalCode":"10250","addressCountry":"LK"},"telephone":"+94706620020","email":"info@theelitedermacare.com","image":"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/doctor-b8l03qVHvPTzSlhaHCQtafOJEcNQkv.png","medicalSpecialty":["Dermatology","Aesthetic Medicine"],"areaServed":[{"@type":"City","name":"Nugegoda"},{"@type":"City","name":"Colombo"},{"@type":"Country","name":"Sri Lanka"}]}) }}
          strategy="afterInteractive"
        />
        
        {/* Local Business Schema - Geo-optimization for Sri Lanka */}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          async
          dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"LocalBusiness","name":"The Elite Derma Care","url":"https://theelitedermacare.com","telephone":"+94706620020","address":{"@type":"PostalAddress","streetAddress":"Nugegoda","addressLocality":"Nugegoda","addressRegion":"Western","postalCode":"10250","addressCountry":"LK"},"image":"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/doctor-b8l03qVHvPTzSlhaHCQtafOJEcNQkv.png","priceRange":"$$$","aggregateRating":{"@type":"AggregateRating","ratingValue":"4.9","ratingCount":"50+"}}) }}
          strategy="afterInteractive"
        />
        
        {/* FAQ Schema - Common questions for GenAI */}
        <Script
          id="faq-schema"
          type="application/ld+json"
          async
          dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What aesthetic treatments do you offer?","acceptedAnswer":{"@type":"Answer","text":"14+ advanced treatments: PRP therapy, Botox, dermal fillers, laser hair removal, hydrafacial, microneedling, carbon laser peel, collagen induction, pigmentation treatment, acne treatment, wart removal, fat burning, hair growth, chemical peeling"}},{"@type":"Question","name":"Where is the clinic located?","acceptedAnswer":{"@type":"Answer","text":"Nugegoda, Western Province, Sri Lanka - serving Colombo and surrounding areas"}},{"@type":"Question","name":"Are treatments safe?","acceptedAnswer":{"@type":"Answer","text":"Yes, performed by experienced aesthetic specialist using FDA-approved equipment and safe medical techniques"}}]}) }}
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
