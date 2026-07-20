import type { Metadata } from 'next'
import { ServiceDetailNoSpecs } from '@/components/service-detail-no-specs'
import { services } from '@/lib/services-data'
import { NavHeader } from '@/components/nav-header'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Acne Treatment | The Elite Derma Care',
  description: 'Professional Acne Treatment in Nugegoda. Expert treatments with proven results. Free consultation.',
}

const customFAQs = [
  {
    question: 'Is the treatment safe?',
    answer: 'Yes, all our treatments are performed by qualified doctors using FDA-approved products and equipment with proven safety records.'
  },
  {
    question: 'How long until I see results?',
    answer: 'Results will develop over days or weeks. Our doctor will discuss your expectations during the consultation.'
  },
  {
    question: 'Can I return to normal activities?',
    answer: 'Most treatments have minimal downtime. We\'ll provide detailed post-care instructions for your specific treatment.'
  },
  {
    question: 'How long do results last?',
    answer: 'It is a permanent method. Your doctor will discuss your expectations during the consultation.'
  }
]

export default function ServicePage() {
  const service = services.find(s => s.id === 'acne-treatment')!
  return (
    <>
      <NavHeader />
      <ServiceDetailNoSpecs service={service} faqs={customFAQs} />
      <Footer />
    </>
  )
}
