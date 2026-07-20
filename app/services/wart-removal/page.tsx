import type { Metadata } from 'next'
import { ServiceDetailWithCustomFAQ } from '@/components/service-detail-with-custom-faq'
import { services } from '@/lib/services-data'
import { NavHeader } from '@/components/nav-header'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Wart Removal | The Elite Derma Care',
  description: 'Professional Wart Removal in Nugegoda. Expert treatments with proven results. Free consultation.',
}

const customFAQs = [
  {
    question: 'Is the treatment safe?',
    answer: 'Yes, all our treatments are performed by qualified doctors using FDA-approved products and equipment with proven safety records.'
  },
  {
    question: 'How long until I see results?',
    answer: 'It shows immediate effects.'
  },
  {
    question: 'Can I return to normal activities?',
    answer: 'It has minimal downtime. You can resume your normal activities immediately.'
  },
  {
    question: 'How long do results last?',
    answer: 'The treatment provides permanent results for the removed wart. Our doctor will discuss your expectations during the consultation.'
  }
]

export default function ServicePage() {
  const service = services.find(s => s.id === 'wart-removal')!
  return (
    <>
      <NavHeader />
      <ServiceDetailWithCustomFAQ service={service} faqs={customFAQs} />
      <Footer />
    </>
  )
}
