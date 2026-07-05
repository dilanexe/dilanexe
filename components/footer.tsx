import Link from 'next/link'
import { Phone, MapPin, Mail } from 'lucide-react'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo banner */}
        <div className="py-8 border-b border-primary-foreground/20 flex justify-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-21%20at%2016.07.25-nvr3N8ZFtKTVuLoF2yCudXuPCT0ZpF.jpeg"
            alt="The Elite Derma Care Logo"
            width={80}
            height={80}
            className="object-contain drop-shadow-lg"
          />
        </div>
        
        {/* Main footer content */}
        <div className="py-16 grid md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">The Elite Derma Care</h3>
            <p className="text-primary-foreground/80">
              Premium medical aesthetic treatments for a more confident you. Located in Nugegoda, Sri Lanka.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:underline transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:underline transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services - Column 1 */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/prp-therapy" className="hover:underline transition">PRP Therapy</Link></li>
              <li><Link href="/services/dermal-filler" className="hover:underline transition">Dermal Fillers</Link></li>
              <li><Link href="/services/botox-treatment" className="hover:underline transition">Botox</Link></li>
              <li><Link href="/services/acne-treatment" className="hover:underline transition">Acne Treatment</Link></li>
              <li><Link href="/services/pigmentation-treatment" className="hover:underline transition">Pigmentation</Link></li>
              <li><Link href="/services/hair-growth-treatment" className="hover:underline transition">Hair Growth</Link></li>
              <li><Link href="/services/laser-hair-removal" className="hover:underline transition">Laser Hair Removal</Link></li>
            </ul>
          </div>

          {/* Services - Column 2 */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">More Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/microneedling" className="hover:underline transition">Microneedling</Link></li>
              <li><Link href="/services/collagen-induction" className="hover:underline transition">Collagen Induction</Link></li>
              <li><Link href="/services/hydrafacial" className="hover:underline transition">Hydrafacial</Link></li>
              <li><Link href="/services/carbon-laser-peel" className="hover:underline transition">Carbon Laser Peel</Link></li>
              <li><Link href="/services/chemical-peeling" className="hover:underline transition">Chemical Peeling</Link></li>
              <li><Link href="/services/fat-burning" className="hover:underline transition">Fat Burning</Link></li>
              <li><Link href="/services/wart-removal" className="hover:underline transition">Wart Removal</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <a href="tel:+94706620020" className="hover:underline">
                  +94 70 6620020
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>276, Highlevel Road,<br />Nugegoda</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <a href="mailto:info@elitedermacare.com" className="hover:underline">
                  info@elitedermacare.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-primary-foreground/20 text-center text-primary-foreground/80 text-sm">
          <p>&copy; 2026 The Elite Derma Care. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
