import type { Metadata } from 'next'
import { ServiceDetailNew } from '@/components/service-detail-new'
import { services } from '@/lib/services-data'
import { NavHeader } from '@/components/nav-header'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Chemical Peeling | The Elite Derma Care',
  description: 'Professional Chemical Peeling in Nugegoda. Expert treatments with proven results. Free consultation.',
}

export default function ServicePage() {
  const service = services.find(s => s.id === 'chemical-peeling')!
  return (
    <>
      <NavHeader />
      <ServiceDetailNew service={service} />
      <Footer />
    </>
  )
}