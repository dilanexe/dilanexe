'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Service } from '@/lib/services-data'

interface ServiceDetailProps {
  service: Service
}

export function ServiceDetailNew({ service }: ServiceDetailProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/5">
      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-4 py-4 text-sm text-muted-foreground">
        <a href="/" className="hover:text-foreground">Home</a> / <a href="/#services" className="hover:text-foreground">Services</a> / {service.title}
      </div>

      {/* Hero Section with Image */}
      <section className="max-w-6xl mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Image Column */}
          <div className="relative">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-secondary/20">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                priority
                quality={90}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Accent element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full blur-2xl" />
          </div>

          {/* Content Column */}
          <div className="space-y-6 md:pt-4">
            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                {service.title}
              </h1>
              <p className="text-xl text-secondary/80 font-medium">
                {service.shortDescription}
              </p>
            </div>

            <p className="text-foreground/80 leading-relaxed text-lg">
              {service.description}
            </p>

            {/* Quick Info Cards */}
            <div className="grid grid-cols-3 gap-3 py-6">
              <div className="bg-secondary/10 rounded-lg p-4 text-center">
                <p className="text-sm text-muted-foreground mb-1">Duration</p>
                <p className="font-semibold text-foreground">{service.duration}</p>
              </div>
              <div className="bg-secondary/10 rounded-lg p-4 text-center">
                <p className="text-sm text-muted-foreground mb-1">Recovery</p>
                <p className="font-semibold text-foreground">{service.recovery}</p>
              </div>
              <div className="bg-secondary/10 rounded-lg p-4 text-center">
                <p className="text-sm text-muted-foreground mb-1">Price Range</p>
                <p className="font-semibold text-foreground">{service.price}</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 pt-4">
              <a
                href={`https://wa.me/94706620020?text=Hi, I'm interested in ${service.title} treatment.`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-green-600 hover:bg-green-700 w-full md:w-auto">
                  WhatsApp Us
                </Button>
              </a>
              <a href="/contact">
                <Button size="lg" variant="outline" className="w-full md:w-auto">
                  Book Consultation
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Benefits</h2>
            <ul className="space-y-4">
              {service.benefits.map((benefit, index) => (
                <li key={index} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center mt-0.5">
                    <span className="text-secondary font-bold text-sm">✓</span>
                  </div>
                  <span className="text-foreground/80 text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatment Process */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Treatment Process</h2>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Consultation</h3>
                  <p className="text-foreground/60">Our expert doctor evaluates your concerns and discusses treatment options.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Preparation</h3>
                  <p className="text-foreground/60">We prepare your skin and ensure maximum comfort during the treatment.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Treatment</h3>
                  <p className="text-foreground/60">Professional treatment using advanced technology and expert technique.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Results & Follow-up</h3>
                  <p className="text-foreground/60">See results and follow our care instructions for optimal outcomes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-secondary/5 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Our Clinic?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-3">Expert Doctors</h3>
              <p className="text-foreground/70">Highly experienced dermatologists with years of expertise in aesthetic treatments.</p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-3">Advanced Technology</h3>
              <p className="text-foreground/70">State-of-the-art equipment and proven techniques for safe and effective results.</p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-3">Personalized Care</h3>
              <p className="text-foreground/70">Customized treatment plans tailored to your specific skin concerns and goals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg mb-2">Is the treatment safe?</h3>
              <p className="text-foreground/70">Yes, all our treatments are performed by qualified doctors using FDA-approved products and equipment with proven safety records.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">How long until I see results?</h3>
              <p className="text-foreground/70">Results vary by treatment. Some show immediate effects, while others develop over days or weeks. Our doctor will discuss expectations during consultation.</p>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg mb-2">Can I return to normal activities?</h3>
              <p className="text-foreground/70">Most treatments have minimal downtime. We'll provide detailed post-care instructions for your specific treatment.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">How long do results last?</h3>
              <p className="text-foreground/70">Duration varies. Some treatments provide permanent results, while others require maintenance sessions. Your doctor will advise during consultation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Skin?</h2>
        <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
          Schedule your free consultation with our expert doctors today. We're ready to help you achieve your aesthetic goals.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href={`https://wa.me/94706620020?text=Hi, I'd like to book a consultation for ${service.title} treatment.`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Chat on WhatsApp
            </Button>
          </a>
          <a href="tel:+94706620020">
            <Button size="lg" variant="outline">
              Call +94 70 6620020
            </Button>
          </a>
        </div>
      </section>
    </div>
  )
}
