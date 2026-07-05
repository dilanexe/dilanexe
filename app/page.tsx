import { NavHeader } from '@/components/nav-header'
import { HeroSection } from '@/components/hero-section'
import { ServicesPreview } from '@/components/services-preview'
import { DoctorProfile } from '@/components/doctor-profile'
import { ClinicGallery } from '@/components/clinic-gallery'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <>
      <NavHeader />
      <HeroSection />
      <ServicesPreview />
      <DoctorProfile />
      <ClinicGallery />
      <Footer />
    </>
  )
}
