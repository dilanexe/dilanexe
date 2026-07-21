'use client'

import Image from 'next/image'

export function DoctorProfile() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-white via-secondary/5 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-sm font-semibold text-secondary uppercase tracking-wider">Our Team</h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Meet Our Expert Doctor
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dedicated to delivering exceptional aesthetic results with precision and care
          </p>
        </div>

        {/* Doctor Profile Card */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden border-4 border-secondary/30 shadow-2xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260712-WA0045-C5EFu6gi3girgkAui192930dyBxRjI.jpg"
                alt="Dr. Elite Derma Care - Professional Aesthetic Doctor"
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={85}
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-secondary/10 rounded-lg border-2 border-secondary/30"></div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <h4 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Your Trusted Aesthetic Expert
              </h4>
              <div className="w-16 h-1 bg-secondary rounded-full"></div>
            </div>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              With years of specialized experience in aesthetic medicine, our doctor is committed to delivering personalized, safe, and effective treatments. She combines advanced medical knowledge with artistic precision to help you achieve your aesthetic goals.
            </p>

            {/* Expertise Areas */}
            <div className="space-y-4">
              <h5 className="font-semibold text-foreground text-lg">Areas of Expertise</h5>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Skin Rejuvenation',
                  'Hair Restoration',
                  'Facial Contouring',
                  'Anti-Aging Treatments',
                  'Precision Injections',
                  'Body Sculpting'
                ].map((expertise, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0"></div>
                    <span className="text-sm md:text-base text-foreground">{expertise}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="pt-4">
              <p className="text-sm text-muted-foreground mb-4">
                Ready to transform your appearance? Schedule a consultation with our expert doctor today.
              </p>
              <a
                href="/contact#booking"
                className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition font-semibold shadow-md"
              >
                Book Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
