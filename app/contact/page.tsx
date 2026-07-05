'use client'

import { useState } from 'react'
import { NavHeader } from '@/components/nav-header'
import { Footer } from '@/components/footer'
import { Phone, MapPin, Mail, Clock } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    image: null as File | null,
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFormData((prev) => ({ ...prev, image: file }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ firstName: '', lastName: '', email: '', phone: '', service: '', message: '', image: null })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <>
      <NavHeader />
      <main>
        {/* Hero */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to transform your appearance? Contact us today for a consultation.
            </p>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Contact card 1 */}
              <div className="p-8 bg-white rounded-xl border border-border">
                <Phone className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Phone</h3>
                <p className="text-muted-foreground mb-2">Call us anytime during business hours</p>
                <a href="tel:+94706620020" className="text-primary font-semibold hover:underline">
                  +94 70 6620020
                </a>
              </div>

              {/* Contact card 2 */}
              <div className="p-8 bg-white rounded-xl border border-border">
                <MapPin className="w-10 h-10 text-secondary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Location</h3>
                <p className="text-muted-foreground">276, Highlevel Road,</p>
                <p className="text-muted-foreground">Nugegoda, Sri Lanka</p>
              </div>

              {/* Contact card 3 */}
              <div className="p-8 bg-white rounded-xl border border-border">
                <Clock className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Hours</h3>
                <p className="text-muted-foreground">Mon - Fri: 10am - 6pm</p>
                <p className="text-muted-foreground">Sat: 10am - 4pm</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="max-w-2xl mx-auto" id="booking">
              <div className="bg-muted/30 rounded-xl p-12 border border-border">
                <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Book Your Consultation</h2>

                {submitted && (
                  <div className="mb-8 p-4 bg-green-100 text-green-800 rounded-lg text-center">
                    Thank you! We&apos;ll contact you shortly to confirm your appointment.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 bg-white text-base"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 bg-white text-base"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 bg-white text-base"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 bg-white text-base"
                        placeholder="070 XXXX XXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Service Interested In *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-primary bg-white text-sm"
                    >
                      <option value="">Select a service</option>
                      <option value="PRP Therapy">PRP Therapy</option>
                      <option value="Dermal Fillers">Dermal Fillers</option>
                      <option value="Fat Burning & Body Contouring">Fat Burning & Body Contouring</option>
                      <option value="Chemical Peeling">Advanced Chemical Peeling</option>
                      <option value="Wart Removal">Wart Removal</option>
                      <option value="Acne Treatment">Acne Treatment</option>
                      <option value="Pigmentation Treatment">Pigmentation Treatment</option>
                      <option value="Hair Growth Treatment">Hair Growth Treatment</option>
                      <option value="Microneedling">Microneedling</option>
                      <option value="Collagen Induction">Collagen Induction Therapy</option>
                      <option value="Laser Hair Removal">Laser Hair Removal</option>
                      <option value="Carbon Laser Peel">Carbon Laser Peel</option>
                      <option value="Hydrafacial">Hydrafacial Treatment</option>
                      <option value="Botox">Botox Treatment</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Upload Photo (Before/After or Concern Area)
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="w-full px-4 py-3 border border-dashed border-primary/50 rounded-lg focus:outline-none bg-white file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20"
                      />
                      {formData.image && (
                        <p className="mt-2 text-sm text-green-600 font-medium">
                          ✓ {formData.image.name} ({(formData.image.size / 1024 / 1024).toFixed(2)} MB)
                        </p>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">Optional: Upload before/after photos or images of your concern area to help us better assist you.</p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Additional Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-primary bg-white resize-none text-sm"
                      placeholder="Tell us about your concerns or goals..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition font-semibold text-lg"
                  >
                    Request Appointment
                  </button>
                </form>

                <p className="text-sm text-muted-foreground text-center mt-6">
                  * Required fields. We&apos;ll contact you within 24 hours to confirm your appointment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Map or additional info */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Visit Us Today</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Located at 276, Highlevel Road, Nugegoda. Easy parking and accessible entry. We look forward to welcoming you to The Elite Derma Care!
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
