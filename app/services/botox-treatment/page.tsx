import type { Metadata } from 'next'
import { ServiceDetailNew } from '@/components/service-detail-new'
import { services } from '@/lib/services-data'
import { NavHeader } from '@/components/nav-header'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Botox Treatment in Nugegoda | The Elite Derma Care | Wrinkle Reduction',
  description: 'Professional Botox injections in Nugegoda for wrinkle reduction and anti-aging. Expert FDA-approved treatments. Free consultation available.',
  keywords: 'Botox Nugegoda, Botox treatment Sri Lanka, Botox injections Colombo, wrinkle reduction, anti-aging treatment, Botox price',
}

export default function BotoxPage() {
  const service = services.find(s => s.id === 'botox-treatment')!
  return (
    <>
      <NavHeader />
      <ServiceDetailNew service={service} />
      <Footer />
    </>
  )
}
