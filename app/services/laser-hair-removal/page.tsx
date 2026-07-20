import type { Metadata } from 'next'
import { ServiceDetailWithCustomFAQ } from '@/components/service-detail-with-custom-faq'
import { services } from '@/lib/services-data'
import { NavHeader } from '@/components/nav-header'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Laser Hair Removal | The Elite Derma Care',
  description: 'Professional Laser Hair Removal in Nugegoda. Expert treatments with proven results. Free consultation.',
}

const customFAQs = [
  {
    question: 'Is the treatment safe?',
    answer: 'Yes, all our treatments are performed by qualified doctors using FDA-approved products and equipment with proven safety records.'
  },
  {
    question: 'Can I return to normal activities?',
    answer: 'It has minimal downtime. You can resume your normal activities immediately.'
  },
  {
    question: 'How long do results last?',
    answer: 'The treatment provides permanent results, but you may need maintenance sessions. Your doctor will advise you during the consultation.'
  },
  {
    question: 'How does laser hair removal work?',
    answer: 'Our laser hair removal treatment uses cutting-edge technology to permanently reduce unwanted hair by targeting hair follicles.'
  }
]

export default function ServicePage() {
  const service = services.find(s => s.id === 'laser-hair-removal')!
  return (
    <>
      <NavHeader />
      <ServiceDetailWithCustomFAQ service={service} faqs={customFAQs} />
      <Footer />
    </>
  )
}
