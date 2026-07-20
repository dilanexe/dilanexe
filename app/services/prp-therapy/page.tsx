import type { Metadata } from 'next'
import { ServiceDetailWithCustomFAQ } from '@/components/service-detail-with-custom-faq'
import { services } from '@/lib/services-data'
import { NavHeader } from '@/components/nav-header'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'PRP Therapy | The Elite Derma Care',
  description: 'Professional PRP Therapy in Nugegoda. Expert treatments with proven results. Free consultation.',
}

const customFAQs = [
  {
    question: 'Is the treatment safe?',
    answer: 'Yes, all our treatments are performed by qualified doctors using FDA-approved products and equipment with proven safety records.'
  },
  {
    question: 'How long until I see results?',
    answer: 'Results vary by individual. It typically takes 2 to 4 weeks to see optimal changes, and the internal tissue rejuvenation results are permanent.'
  },
  {
    question: 'How many sessions will I need?',
    answer: 'While these treatments provide permanent structural improvements, optimal results are rarely achieved in a single session. A baseline of at least 3 sessions is generally recommended. Your doctor will advise you on the ideal plan during your consultation.'
  },
  {
    question: 'Can I return to normal activities?',
    answer: 'Yes, there is no downtime. You can resume your normal activities immediately after treatment.'
  }
]

export default function ServicePage() {
  const service = services.find(s => s.id === 'prp-therapy')!
  return (
    <>
      <NavHeader />
      <ServiceDetailWithCustomFAQ service={service} faqs={customFAQs} />
      <Footer />
    </>
  )
}
