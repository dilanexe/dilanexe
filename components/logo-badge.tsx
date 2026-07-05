'use client'

import Image from 'next/image'

interface LogoBadgeProps {
  size?: 'small' | 'medium' | 'large'
  showText?: boolean
  className?: string
}

export function LogoBadge({ size = 'medium', showText = true, className = '' }: LogoBadgeProps) {
  const sizeConfig = {
    small: { width: 80, height: 80 },
    medium: { width: 120, height: 120 },
    large: { width: 180, height: 180 },
  }

  const config = sizeConfig[size]

  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      <div className="relative">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-21%20at%2016.07.25-nvr3N8ZFtKTVuLoF2yCudXuPCT0ZpF.jpeg"
          alt="The Elite Derma Care Logo"
          width={config.width}
          height={config.height}
          className="object-contain drop-shadow-lg"
        />
      </div>
      {showText && size !== 'small' && (
        <div className="text-center">
          <h2 className="text-lg md:text-xl font-bold text-primary">The Elite Derma Care</h2>
          <p className="text-xs md:text-sm text-secondary">Premium Aesthetic Skin Clinic</p>
        </div>
      )}
    </div>
  )
}
