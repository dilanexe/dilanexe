'use client'

import { MessageCircle } from 'lucide-react'
import Link from 'next/link'

export function WhatsAppButton() {
  const whatsappNumber = '+9470 6620020'
  const whatsappLink = `https://wa.me/94706620020?text=Hello%20The%20Elite%20Derma%20Care,%20I%20would%20like%20to%20book%20an%20appointment`

  return (
    <Link
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-white" />
      
      {/* Tooltip - Hidden on small screens */}
      <div className="hidden md:flex absolute bottom-full right-0 mb-3 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        Book via WhatsApp
        <div className="absolute top-full right-2 w-2 h-2 bg-gray-900 transform rotate-45"></div>
      </div>

      {/* Pulse animation */}
      <div className="absolute inset-0 bg-green-500 rounded-full animate-pulse opacity-20"></div>
    </Link>
  )
}
