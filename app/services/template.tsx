import type { ReactNode } from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Service | The Elite Derma Care',
}

export default function ServiceLayout({
  children,
}: {
  children: ReactNode
}) {
  return children
}
