import Link from 'next/link'
import { Phone, MapPin } from 'lucide-react'
import Image from 'next/image'

export function NavHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top bar with contact info */}
        <div className="hidden md:flex justify-between items-center py-3 text-sm text-muted-foreground border-b border-border">
          <div className="flex gap-6">
            <a href="tel:+94706620020" className="flex items-center gap-2 hover:text-primary transition">
              <Phone className="w-4 h-4" />
              +94 70 6620020
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-primary transition">
              <MapPin className="w-4 h-4" />
              276, Highlevel Road, Nugegoda
            </a>
          </div>
        </div>

        {/* Main navigation */}
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-21%20at%2016.07.25-nvr3N8ZFtKTVuLoF2yCudXuPCT0ZpF.jpeg"
              alt="The Elite Derma Care Logo"
              width={60}
              height={60}
              className="object-contain"
            />
            <div className="hidden sm:flex flex-col gap-0">
              <span className="text-xs font-bold text-secondary">THE ELITE</span>
              <span className="text-xs font-bold text-primary leading-tight">DERMA CARE</span>
            </div>
          </Link>

          {/* Navigation links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-primary transition">
              Home
            </Link>
            <Link href="#services" className="text-foreground hover:text-primary transition">
              Services
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition">
              About
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <Link
            href="/contact#booking"
            className="hidden md:inline-block px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition font-medium"
          >
            Book Now
          </Link>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 text-foreground">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  )
}
