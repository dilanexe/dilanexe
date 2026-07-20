import type { Metadata } from 'next'
import { ServiceDetailWithCustomFAQ } from '@/components/service-detail-with-custom-faq'
import { services } from '@/lib/services-data'
import { NavHeader } from '@/components/nav-header'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Chemical Peeling | The Elite Derma Care',
  description: 'Professional Chemical Peeling in Nugegoda. Expert treatments with proven results. Free consultation.',
}

const customFAQs = [
  {
    question: 'Is the treatment safe?',
    answer: 'Yes, all our treatments are performed by qualified doctors using FDA-approved products and equipment with proven safety records.'
  },
  {
    question: 'How long until I see results?',
    answer: 'Results vary by individual. Visible improvements do not appear instantly; the effects will gradually develop over days or weeks.'
  },
  {
    question: 'How long do results last?',
    answer: 'These treatments provide permanent skin improvements. However, follow-up sessions are generally required to achieve and maintain optimal skin clearance. Your doctor will map out a customized timeline for you.'
  },
  {
    question: 'Can I return to normal work?',
    answer: 'Most treatments have minimal downtime. We\'ll provide detailed post-care instructions for your specific treatment.'
  }
]

export default function ServicePage() {
  const service = services.find(s => s.id === 'chemical-peeling')!
  return (
    <>
      <NavHeader />
      <ServiceDetailWithCustomFAQ service={service} faqs={customFAQs} />
      <Footer />
    </>
  )
}
