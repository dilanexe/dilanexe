import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const services = [
  {
    id: 'prp-therapy',
    title: 'PRP Therapy',
    description: 'Natural Healing. Lasting Results.',
    short: 'Harness the power of your own plasma',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-21%20at%2016.07.30%20%282%29-YfBCleTZ9PJTo9tjA6X4lZ5uiQYIiW.jpeg',
    icon: '💧',
  },
  {
    id: 'dermal-filler',
    title: 'Dermal Fillers',
    description: 'Restore Volume & Achieve Smooth Contours',
    short: 'Enhance facial contours naturally',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dermal%20Filler-yeJqKriWpKZ4d6UecsJITRkfq2EQ67.jpeg',
    icon: '✨',
  },
  {
    id: 'fat-burning',
    title: 'Fat Burning & Body Contouring',
    description: 'Non-Invasive Transformation',
    short: 'Define your body naturally',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-21%20at%2016.07.31-lcJaoEaVCQM5PCSXgozKEY3TpOt5Vo.jpeg',
    icon: '⚡',
  },
  {
    id: 'chemical-peeling',
    title: 'Chemical Peeling',
    description: 'Reveal a Radiant, Youthful Complexion',
    short: 'Advanced exfoliation treatment',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-21%20at%2016.07.31%20%281%29-IeSGZg5TdaUV4r68Ny1Osuu6Q97sEC.jpeg',
    icon: '🌟',
  },
  {
    id: 'wart-removal',
    title: 'Wart Removal',
    description: 'Say Goodbye to Warts!',
    short: 'Safe and effective treatment',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-21%20at%2016.07.30%20%281%29-8LBsMLZqaeQgAQtinHzQbWf5HsEzH0.jpeg',
    icon: '🎯',
  },
  {
    id: 'acne-treatment',
    title: 'Acne Treatment',
    description: 'Clear, Healthy Skin',
    short: 'Comprehensive acne management',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-13%20at%2016.30.42-uol8Vzn1zsQYsBp2BsTHAeybFJoXPz.jpeg',
    icon: '🎯',
  },
  {
    id: 'pigmentation-treatment',
    title: 'Pigmentation Treatment',
    description: 'Even Tone, Radiant Complexion',
    short: 'Treats dark spots & melasma',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pigmentation%20Treatment-7O45rZKoKa7EutEMqPcIBGlbgJVOHY.jpeg',
    icon: '✨',
  },
  {
    id: 'hair-growth-treatment',
    title: 'Hair Growth Treatment',
    description: 'Fuller, Thicker Hair',
    short: 'Advanced hair growth solutions',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Treatment%20for%20hair%20growth-jsF1bT2WMdwPp5b5AhGUT7SBVZBlXi.jpeg',
    icon: '💇',
  },
  {
    id: 'microneedling',
    title: 'Microneedling',
    description: 'Stimulate Collagen, Renew Skin',
    short: 'Advanced skin rejuvenation',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Micro%20needling-XEXDf70HAB5TbeorPVEH4H84NkpE9N.jpeg',
    icon: '🔬',
  },
  {
    id: 'collagen-induction',
    title: 'Collagen Induction',
    description: 'Natural Lift & Rejuvenation',
    short: 'Stimulate natural collagen',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Collagen%20Induction-DpMl1Uz5ALLntYBVMmsj6mukgEFRxv.jpeg',
    icon: '🌟',
  },
  {
    id: 'laser-hair-removal',
    title: 'Laser Hair Removal',
    description: 'Permanent Hair Reduction',
    short: 'Advanced laser technology',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Laser%20Hair%20removal-pasi3MkormpbRx0SSW0r5XM0eBidim.png',
    icon: '✨',
  },
  {
    id: 'carbon-laser-peel',
    title: 'Carbon Laser Peel',
    description: 'Deep Cleansing & Rejuvenation',
    short: 'Hollywood carbon peel',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Carbon%20laser%20peel-fn6eVtWA66FVTlEWgF4LhgbTXLHaOC.jpeg',
    icon: '💎',
  },
  {
    id: 'hydrafacial',
    title: 'Hydrafacial',
    description: 'Luxurious Skin Refreshment',
    short: 'Medical-grade facial',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hydra%20facial-XVV08LK7ul5PQdfq7UJ7pb6HUXG3k9.jpeg',
    icon: '💧',
  },
  {
    id: 'botox-treatment',
    title: 'Botox Treatment',
    description: 'Smooth Wrinkles, Youthful Glow',
    short: 'Safe & natural-looking results',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Botox%20Treatment-jcSBrUWncVyFwX18dqzODEkMIezZzz.jpeg',
    icon: '👑',
  },
]

export function ServicesPreview() {
  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-sm font-semibold text-secondary uppercase tracking-wider">Our Services</h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Comprehensive Medical Aesthetic Solutions
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover 13+ advanced aesthetic treatments from Sri Lanka's leading dermatology clinic. Professional treatments for skin rejuvenation, hair restoration, body contouring, and age-defying results. Expert care at The Elite Derma Care, Nugegoda.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.id}`}
              className="group h-full"
            >
              <div className="h-full bg-white rounded-xl overflow-hidden border border-border hover:border-primary/30 transition-all hover:shadow-lg cursor-pointer">
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-muted">
                  <Image
                    src={service.image}
                    alt={`${service.title} - Professional aesthetic treatment at The Elite Derma Care, Nugegoda`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    quality={80}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-3 flex flex-col h-48">
                  <div className="text-2xl">{service.icon}</div>
                  <div>
                    <h4 className="font-bold text-foreground group-hover:text-primary transition mb-1">
                      {service.title}
                    </h4>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {service.short}
                    </p>
                  </div>
                  <div className="mt-auto pt-3 border-t border-border flex items-center text-primary text-sm font-semibold group-hover:gap-2 transition-all gap-1">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <Link
            href="/contact#booking"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition font-semibold"
          >
            Schedule Your Consultation Today
          </Link>
        </div>
      </div>
    </section>
  )
}
