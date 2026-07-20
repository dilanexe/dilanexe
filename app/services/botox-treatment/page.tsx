import type { Metadata } from 'next'
import { ServiceDetailWithCustomFAQ } from '@/components/service-detail-with-custom-faq'
import { services } from '@/lib/services-data'
import { NavHeader } from '@/components/nav-header'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Botox Treatment in Nugegoda | The Elite Derma Care | Wrinkle Reduction',
  description: 'Professional Botox injections in Nugegoda for wrinkle reduction and anti-aging. Expert FDA-approved treatments. Free consultation available.',
  keywords: 'Botox Nugegoda, Botox treatment Sri Lanka, Botox injections Colombo, wrinkle reduction, anti-aging treatment',
}

const customFAQs = [
  {
    question: 'Is the treatment safe?',
    answer: 'Yes, all our treatments are performed by qualified doctors using FDA-approved products and equipment with proven safety records.'
  },
  {
    question: 'How long until I see results?',
    answer: 'It will take 3 to 4 days to see results.'
  },
  {
    question: 'Can I return to normal activities?',
    answer: 'Most treatments have minimal downtime. We\'ll provide detailed post-care instructions for your specific treatment.'
  },
  {
    question: 'How long do results last?',
    answer: 'Results typically last from 6 months to 1 year.'
  }
]

export default function BotoxPage() {
  const service = services.find(s => s.id === 'botox-treatment')!
  return (
    <>
      <NavHeader />
      <ServiceDetailWithCustomFAQ service={service} faqs={customFAQs} />
      <Footer />
    </>
  )
}
