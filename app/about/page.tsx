'use client'

import { NavHeader } from '@/components/nav-header'
import { Footer } from '@/components/footer'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <>
      <NavHeader />
      <main>
        {/* Hero */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance">
              About The Elite Derma Care
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Dedicated to transforming your appearance and boosting your confidence
            </p>
          </div>
        </section>

        {/* Main content */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            {/* Our Story */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-96 rounded-xl overflow-hidden border-4 border-secondary/20 shadow-xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-21%20at%2016.07.32%20%281%29-fmCOzRk7bBT34YnffaouhKH1FsI8uG.jpeg"
                  alt="Elite Derma Care clinic"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Story</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The Elite Derma Care was founded with a simple mission: to provide access to premium medical aesthetic treatments in a welcoming, professional environment. We believe everyone deserves to feel confident in their own skin.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With over a decade of experience in dermatology and aesthetic medicine, our team brings expertise, compassion, and cutting-edge technology to every treatment.
                </p>
              </div>
            </div>

            {/* Values */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Our Values</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="p-8 bg-primary/5 rounded-xl border border-primary/10">
                  <h3 className="text-2xl font-bold text-primary mb-4">Excellence</h3>
                  <p className="text-muted-foreground">
                    We use only the best treatments and technologies to deliver superior results for our clients.
                  </p>
                </div>
                <div className="p-8 bg-secondary/5 rounded-xl border border-secondary/10">
                  <h3 className="text-2xl font-bold text-secondary mb-4">Safety</h3>
                  <p className="text-muted-foreground">
                    Your safety and wellbeing are our top priorities. We follow strict protocols and use FDA-approved treatments.
                  </p>
                </div>
                <div className="p-8 bg-foreground/5 rounded-xl border border-foreground/10">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Integrity</h3>
                  <p className="text-muted-foreground">
                    We are transparent about what our treatments can achieve and honest about expectations.
                  </p>
                </div>
              </div>
            </div>

            {/* Team */}
            <div className="text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Meet Our Team</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our experienced professionals are dedicated to helping you look and feel your best. With specialized training in the latest aesthetic treatments, we combine medical expertise with artistic vision.
              </p>
              <div className="pt-8">
                <div className="relative h-72 rounded-xl overflow-hidden border-4 border-secondary/20 shadow-xl max-w-md mx-auto">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-21%20at%2016.07.32-IEF7ah1WXaBjgCBI5lGdGufV3M5oEI.jpeg"
                    alt="Professional treatment at Elite Derma Care"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-muted/30 rounded-xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Why Choose Elite Derma Care?</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <div className="text-3xl flex-shrink-0">✓</div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Expert Team</h4>
                    <p className="text-muted-foreground">Highly trained professionals with years of experience</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-3xl flex-shrink-0">✓</div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Latest Technology</h4>
                    <p className="text-muted-foreground">Industry-proven techniques and FDA-approved treatments for safe and effective results</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-3xl flex-shrink-0">✓</div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Personalized Care</h4>
                    <p className="text-muted-foreground">Customized treatment plans for your unique needs</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-3xl flex-shrink-0">✓</div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Comfortable Environment</h4>
                    <p className="text-muted-foreground">Luxurious and welcoming clinic atmosphere</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
