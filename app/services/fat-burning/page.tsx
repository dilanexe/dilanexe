import type { Metadata } from 'next'
import { ServiceDetailWithCustomFAQ } from '@/components/service-detail-with-custom-faq'
import { services } from '@/lib/services-data'
import { NavHeader } from '@/components/nav-header'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Fat Burning Treatment | The Elite Derma Care',
  description: 'Professional Fat Burning Treatment in Nugegoda. Expert treatments with proven results. Free consultation.',
}

const customFAQs = [
  {
    question: 'Is the treatment safe?',
    answer: 'Yes, all our treatments are performed by qualified doctors using FDA-approved products and equipment with proven safety records.'
  },
  {
    question: 'How long until I see results?',
    answer: 'Results vary by individual. Visible changes typically develop over days or weeks, taking approximately 1 to 2 weeks to become noticeable.'
  },
  {
    question: 'How long do results last?',
    answer: 'The treatment provides permanent fat loss. However, maintaining long-lasting results requires proper dietary control and healthy lifestyle habits. To support your journey, personalized dietary advice and nutritionist consultations are integrated into our program.'
  },
  {
    question: 'Can I return to normal activities?',
    answer: 'Most treatments have minimal downtime. You can resume your normal activities immediately after treatment.'
  }
]

export default function ServicePage() {
  const service = services.find(s => s.id === 'fat-burning')!
  return (
    <>
      <NavHeader />
      <ServiceDetailWithCustomFAQ service={service} faqs={customFAQs} />
      <Footer />
    </>
  )
}
