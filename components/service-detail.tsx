import Image from 'next/image'
import Link from 'next/link'
import { Check } from 'lucide-react'

interface ServiceDetailProps {
  title: string
  tagline: string
  description: string
  benefits: string[]
  treatments: string[]
  image: string
  icon: string
}

export function ServiceDetail({
  title,
  tagline,
  description,
  benefits,
  treatments,
  image,
  icon,
}: ServiceDetailProps) {
  return (
    <>
      {/* Hero section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-5xl mb-4">{icon}</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
              {title}
            </h1>
            <p className="text-xl text-secondary font-semibold mb-4">{tagline}</p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Image Hero */}
          {image && (
            <div className="mb-16 rounded-2xl overflow-hidden border-4 border-secondary/20 shadow-2xl w-full h-96 md:h-[500px]">
              <Image
                src={image}
                alt={title}
                width={1000}
                height={600}
                className="w-full h-full object-cover"
                priority
                quality={85}
              />
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left - Key info */}
            <div className="space-y-8">

              {/* Benefits box */}
              <div className="bg-primary/5 rounded-xl p-8 border border-primary/10">
                <h3 className="text-2xl font-bold text-foreground mb-6">Benefits</h3>
                <ul className="space-y-4">
                  {benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right - Details */}
            <div className="space-y-8">
              {/* Treatments */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Treatment Options</h3>
                <div className="space-y-3">
                  {treatments.map((treatment, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 bg-background rounded-lg border border-border">
                      <div className="w-2 h-2 rounded-full bg-secondary flex-shrink-0 mt-2"></div>
                      <p className="text-foreground">{treatment}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="pt-8 border-t border-border space-y-4">
                <h3 className="text-xl font-bold text-foreground">Ready to transform your appearance?</h3>
                <Link
                  href="/contact#booking"
                  className="block w-full px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition font-semibold text-center text-lg"
                >
                  Book Your Consultation
                </Link>
                <p className="text-sm text-muted-foreground text-center">
                  Call us at 070 66 200 20 for immediate assistance
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-foreground mb-8 text-center">Explore Other Services</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <Link
              href="/services/prp-therapy"
              className="group p-6 bg-white rounded-xl border border-border hover:border-primary/30 transition text-center"
            >
              <p className="text-3xl mb-3">💧</p>
              <h4 className="font-semibold text-foreground group-hover:text-primary transition">PRP Therapy</h4>
            </Link>
            <Link
              href="/services/dermal-filler"
              className="group p-6 bg-white rounded-xl border border-border hover:border-primary/30 transition text-center"
            >
              <p className="text-3xl mb-3">✨</p>
              <h4 className="font-semibold text-foreground group-hover:text-primary transition">Dermal Filler</h4>
            </Link>
            <Link
              href="/services/fat-burning"
              className="group p-6 bg-white rounded-xl border border-border hover:border-primary/30 transition text-center"
            >
              <p className="text-3xl mb-3">⚡</p>
              <h4 className="font-semibold text-foreground group-hover:text-primary transition">Fat Burning</h4>
            </Link>
            <Link
              href="/services/chemical-peeling"
              className="group p-6 bg-white rounded-xl border border-border hover:border-primary/30 transition text-center"
            >
              <p className="text-3xl mb-3">🌟</p>
              <h4 className="font-semibold text-foreground group-hover:text-primary transition">Chemical Peeling</h4>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
