import Link from 'next/link'
import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white to-blue-50">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-32">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Mobile Image - Top */}
          <div className="md:hidden relative w-full h-80 rounded-lg overflow-hidden border-2 border-secondary/30 shadow-lg mb-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-21%20at%2016.07.32%20%281%29-DscMKKNTTRe23vm9p8gdcGVhavObZy.jpeg"
              alt="Professional consultation at Elite Derma Care"
              fill
              className="object-cover"
              priority
              quality={80}
            />
          </div>

          {/* Left side - Content */}
          <div className="space-y-6 md:space-y-8 z-10">
            <div className="flex justify-center md:justify-start mb-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-21%20at%2016.07.25-nvr3N8ZFtKTVuLoF2yCudXuPCT0ZpF.jpeg"
                alt="The Elite Derma Care Logo"
                width={80}
                height={80}
                className="object-contain drop-shadow-lg md:w-[100px] md:h-[100px]"
                priority
                quality={85}
              />
            </div>
            <div className="space-y-4 bg-white/90 md:bg-transparent rounded-lg p-4 md:p-0">
              <div className="inline-block md:inline">
                <span className="text-sm font-semibold text-secondary uppercase tracking-wider drop-shadow-sm">
                  Premium Medical Aesthetic Clinic
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance drop-shadow-md">
                Premium Aesthetic Treatments in Nugegoda
              </h1>
              <p className="text-base md:text-lg text-gray-700 md:text-muted-foreground leading-relaxed max-w-lg drop-shadow-sm">
                Discover advanced skincare, laser treatments, and body contouring at Sri Lanka's leading aesthetic clinic. Expert medical treatments for flawless skin and confidence. Specialized services including PRP therapy, Botox, dermal fillers, and more.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4 md:pt-6">
              <Link
                href="/contact#booking"
                className="px-6 md:px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition font-semibold text-center text-sm md:text-base shadow-md"
              >
                Book Your Appointment
              </Link>
              <Link
                href="#services"
                className="px-6 md:px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition font-semibold text-center text-sm md:text-base bg-white md:bg-transparent"
              >
                Explore Services
              </Link>
            </div>

            {/* Stats */}
            <div className="pt-6 md:pt-8 border-t border-border flex gap-6 md:gap-8">
              <div>
                <p className="text-2xl md:text-3xl font-bold text-primary drop-shadow-sm">100+</p>
                <p className="text-xs md:text-sm text-gray-700 md:text-muted-foreground">Happy Clients</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-primary drop-shadow-sm">15+</p>
                <p className="text-xs md:text-sm text-gray-700 md:text-muted-foreground">Services</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-primary drop-shadow-sm">24/7</p>
                <p className="text-xs md:text-sm text-gray-700 md:text-muted-foreground">Support</p>
              </div>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative z-10 hidden md:flex justify-center">
            <div className="relative h-[520px] w-full max-w-md rounded-2xl overflow-hidden border-4 border-secondary/30 shadow-2xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-21%20at%2016.07.32%20%281%29-DscMKKNTTRe23vm9p8gdcGVhavObZy.jpeg"
                alt="Professional consultation at Elite Derma Care"
                fill
                className="object-cover"
              />
            </div>
            {/* Accent decoration */}
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-secondary/10 rounded-lg border-2 border-secondary/30"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
