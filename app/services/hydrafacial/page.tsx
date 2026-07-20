import type { Metadata } from 'next'
import { ServiceDetailWithCustomFAQ } from '@/components/service-detail-with-custom-faq'
import { services } from '@/lib/services-data'
import { NavHeader } from '@/components/nav-header'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Hydrafacial Treatment | The Elite Derma Care',
  description: 'Professional Hydrafacial Treatment in Nugegoda. Expert treatments with proven results. Free consultation.',
}

const customFAQs = [
  {
    question: 'Is the treatment safe?',
    answer: 'Yes, all our treatments are performed by qualified doctors using FDA-approved products and equipment with proven safety records.'
  },
  {
    question: 'How long until I see results?',
    answer: 'You can see immediate results.'
  },
  {
    question: 'Can I return to normal activities?',
    answer: 'It has minimal downtime.'
  },
  {
    question: 'How long do results last?',
    answer: 'The treatment provides permanent results, but it is better to have follow-up sessions for maintenance.'
  }
]

export default function ServicePage() {
  const service = services.find(s => s.id === 'hydrafacial')!
  return (
    <>
      <NavHeader />
      <ServiceDetailWithCustomFAQ service={service} faqs={customFAQs} />
      <Footer />
    </>
  )
}
