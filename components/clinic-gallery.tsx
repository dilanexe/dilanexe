'use client'

import Image from 'next/image'

const galleryImages = [
  {
    title: 'Modern Reception Area',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-13%20at%2016.30.40%20%282%29-Khx4gLJ9FZLyhqX1fccwNaxINJXyaC.jpeg',
    description: 'Welcoming and elegant waiting area',
  },
  {
    title: 'Professional Staff',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-13%20at%2016.30.40-pGBONaY0bKwBPej5jX82P33oIqyQS9.jpeg',
    description: 'Expert team ready to serve you',
  },
  {
    title: 'State-of-the-Art Equipment',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-13%20at%2016.30.39%20%281%29-FLaoVcIuJcaxZNbbIUGZ3p9uYWCAPw.jpeg',
    description: 'Advanced technology for best results',
  },
  {
    title: 'Premium Treatment Room',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-13%20at%2016.30.37-DwrhbybuSIVX7BYXmzlfkqtwzPilbF.jpeg',
    description: 'Comfortable and professional environment',
  },
  {
    title: 'Clinic Storefront',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-13%20at%2016.30.40%20%281%29-9BKDM3YM1fo5dlT0ZdrDYmspgWUAIQ.jpeg',
    description: 'Located on Highlevel Road, Nugegoda',
  },
  {
    title: 'Clinic Interior',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-13%20at%2016.30.39-F6BV2ffO80zyQHL11Rmr8rFREcXC6V.jpeg',
    description: 'Modern teal and gold aesthetic',
  },
]

export function ClinicGallery() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Experience Elite Derma Care
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Visit our state-of-the-art facility and meet our professional team in Nugegoda
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-64 sm:h-72">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                <p className="text-white/80 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
