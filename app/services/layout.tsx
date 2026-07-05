import { NavHeader } from '@/components/nav-header'
import { Footer } from '@/components/footer'

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <NavHeader />
      {children}
      <Footer />
    </>
  )
}
