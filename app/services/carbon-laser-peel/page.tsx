import type { Metadata } from 'next'
import { ServiceDetailWithCustomFAQ } from '@/components/service-detail-with-custom-faq'
import { services } from '@/lib/services-data'
import { NavHeader } from '@/components/nav-header'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Carbon Laser Peel | The Elite Derma Care',
  description: 'Professional Carbon Laser Peel in Nugegoda. Expert treatments with proven results. Free consultation.',
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
    question: 'Can I return to normal work?',
    answer: 'It has minimal downtime. You can go back to your work immediately.'
  },
  {
    question: 'How long do results last?',
    answer: 'The treatment provides permanent results, but you may need maintenance sessions.'
  }
]

export default function ServicePage() {
  const service = services.find(s => s.id === 'carbon-laser-peel')!
  return (
    <>
      <NavHeader />
      <ServiceDetailWithCustomFAQ service={service} faqs={customFAQs} />
      <Footer />
    </>
  )
}
