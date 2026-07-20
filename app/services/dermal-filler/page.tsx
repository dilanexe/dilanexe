import type { Metadata } from 'next'
import { ServiceDetailWithCustomFAQ } from '@/components/service-detail-with-custom-faq'
import { services } from '@/lib/services-data'
import { NavHeader } from '@/components/nav-header'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Dermal Filler Treatment | The Elite Derma Care',
  description: 'Professional Dermal Filler Treatment in Nugegoda. Expert treatments with proven results. Free consultation.',
}

const customFAQs = [
  {
    question: 'Is the treatment safe?',
    answer: 'Yes, all our treatments are performed by qualified doctors using FDA-approved products and equipment with proven safety records.'
  },
  {
    question: 'How long until I see results?',
    answer: 'Dermal fillers show immediate effects and visible results right after the procedure.'
  },
  {
    question: 'How long do results last?',
    answer: 'The longevity of dermal fillers depends heavily on the specific treatment area and the product brand used. Your doctor will discuss what to expect and outline your long-term maintenance options during your consultation.'
  },
  {
    question: 'Can I return to normal activities?',
    answer: 'Most treatments have minimal downtime. We\'ll provide detailed post-care instructions for your specific treatment.'
  }
]

export default function ServicePage() {
  const service = services.find(s => s.id === 'dermal-filler')!
  return (
    <>
      <NavHeader />
      <ServiceDetailWithCustomFAQ service={service} faqs={customFAQs} />
      <Footer />
    </>
  )
}
